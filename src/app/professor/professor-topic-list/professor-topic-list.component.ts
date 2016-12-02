import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {Topic, STopic, Subgroup, STask, Task} from "../../model/models";
import {TopicService} from "../../service/topic.service";
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import {SubgroupService} from "../../service/subgroup.service";
import {TaskService} from "../../service/task.service";
import {TaskBuilder} from "../../builder/builders";


@Component({
  selector: 'wad-professor-task-list',
  templateUrl: './professor-topic-list.component.html',
  styleUrls: ['./professor-topic-list.component.css']
})
export class ProfessorTopicListComponent implements OnInit {

  @ViewChild('topicModal')
  private topicModal: ModalComponent;

  @ViewChild('taskModal')
  private taskModal: ModalComponent;

  private requesting: boolean = false;

  private topics: Topic[] = [];

  private topicForm: FormGroup;

  private taskForm: FormGroup;

  private testsEnabled: boolean = false;

  private subgroups: Subgroup[] = [];

  private selectedTopic: Topic = null;

  constructor(private topicService: TopicService, private subgroupService: SubgroupService,
              private taskBuilder: TaskBuilder, private taskService: TaskService) {
  }

  ngOnInit() {
    this.topicForm = new FormGroup({
      'name': new FormControl('', [Validators.required])
    });

    this.taskForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'deadline': new FormControl('', [Validators.required]),
      'language': new FormControl('', [Validators.required]),
      'subgroups': new FormArray([], this.subgroupsValidator),
      'testsEnabled': new FormControl(false, [Validators.required]),
      'plagiarismEnabled': new FormControl(false, [Validators.required]),
      'inputFile': new FormControl(''),
      'outputFile': new FormControl('')
    }, this.fileValidator);

    this.loadTopics();
  }

  private dismissTopicModal() {
    this.requesting = false;
    this.topicForm.reset();
  }

  private closeTopicModal() {
    this.dismissTopicModal();
    this.topicModal.close();
  }

  onTopicFormSubmit() {
    this.requesting = true;
    let toBeSaved: STopic = new STopic(this.topicForm.value.name);

    this.topicService.save(toBeSaved)
      .subscribe((topic: Topic) => {
        this.closeTopicModal();
        this.loadTopics();
      }, error => {
        console.log(error);
        this.closeTopicModal();
      })
  }

  private loadTopics() {
    this.topicService.getAll()
      .subscribe((topics: Topic[]) => {
        this.topics = topics;
      }, error => console.log(error));
  }

  private onTopicDelete(topic: Topic) {
    this.topicService.delete(topic.id)
      .subscribe((topic: Topic) => {
        this.loadTopics();
      }, error => {
        console.log(error);
      })
  }

  private onSubgroupListChange(event) {
    let options: any[] = event.srcElement.options;
    this.taskForm.removeControl('subgroups');
    this.taskForm.addControl('subgroups', new FormArray([], this.subgroupsValidator));
    let subgroupsForm: FormArray = (<FormArray>this.taskForm.get('subgroups'));

    for (let option of options) {
      if (option.selected) {
        subgroupsForm.push(new FormControl(option.value));
      }
    }
  }

  private toggleTests() {
    this.testsEnabled = !this.testsEnabled;
  }

  private openTaskModal(topic: Topic) {
    this.taskModal.open('md');
    this.selectedTopic = topic;
    this.subgroupService.getAll()
      .subscribe((subgroups: Subgroup[]) => {
        this.subgroups = subgroups;
      }, error => {
        console.log(error);
      });
  }

  private dismissTaskModal() {
    this.requesting = false;
    this.testsEnabled = false;
    this.taskForm.reset();
    this.taskForm.get('testsEnabled').setValue(false);
    this.taskForm.get('plagiarismEnabled').setValue(false);
    this.taskForm.get('inputFile').setValue('');
    this.taskForm.get('outputFile').setValue('');
    this.taskForm.removeControl('subgroups');
    this.taskForm.addControl('subgroups', new FormArray([], this.subgroupsValidator));
  }

  private closeTaskModal() {
    this.dismissTaskModal();
    this.taskModal.close();
  }

  private onTaskFormSubmit() {
    this.requesting = true;
    let toBeSaved: STask = this.taskBuilder.buildFromForm(this.taskForm);

    this.taskService.save(toBeSaved, this.selectedTopic.id)
      .subscribe((saved: Task) => {
        this.closeTaskModal();
        this.loadTopics();
      }, error => {
        console.log(error);
        this.closeTaskModal();
      });
  }

  private onFileChange(inputFile: HTMLInputElement, formControlName: string) {
    let reader = new FileReader();
    let file = inputFile.files[0];
    let self = this;

    reader.addEventListener("load", function () {
      let all: string = reader.result;
      let content: string = all.substring(all.indexOf(',') + 1);
      console.log(content);
      self.taskForm.get(formControlName).setValue(content);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  private fileValidator(control: FormGroup): { [key: string]: any; } {
    let testsEnabled: boolean = control.get('testsEnabled').value;
    let inputFile: string = control.get('inputFile').value;
    let outputFile: string = control.get('outputFile').value;

    if (testsEnabled && (inputFile === '' || outputFile === '')) {
      return {key: true};
    }

    return null;
  }

  private subgroupsValidator(control: FormArray): { [key: string]: any; } {
    if (control.length == 0) {
      return {key: true};
    }

    return null;
  }
}
