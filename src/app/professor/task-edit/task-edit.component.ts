import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Task, ETask} from "../../model/models";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {TaskService} from "../../service/task.service";
import {TaskBuilder} from "../../builder/builders";

@Component({
  selector: 'wad-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input('task') task: Task;

  private filesUpdated: boolean = false;

  private taskEditForm: FormGroup;

  @Output() reload: EventEmitter<any> = new EventEmitter();

  private requesting: boolean = false;

  private currentDate: Date = new Date();

  constructor(private taskService: TaskService, private taskBuilder: TaskBuilder) {
  }

  ngOnInit() {
    this.taskEditForm = new FormGroup({
      'name': new FormControl({value: this.task.name, disabled: this.deadlinePassed()}, [Validators.required]),
      'description': new FormControl({
        value: this.task.description,
        disabled: this.deadlinePassed()
      }, [Validators.required]),
      'deadline': new FormControl({value: this.task.deadline, disabled: this.deadlinePassed()}, [Validators.required]),
      'plagiarismEnabled': new FormControl({
        value: this.task.plagiarismAnalyserEnabled,
        disabled: this.deadlinePassed()
      }, [Validators.required]),
      'filesUpdated': new FormControl({value: false, disabled: !this.task.testsEnabled}, [Validators.required]),
      'inputFile': new FormControl(''),
      'outputFile': new FormControl('')
    }, this.fileValidator);

  }


  private getSubgroupsAsString(subgroups: string[]) {
    let result: string = "";

    for (let subgroup of subgroups) {
      result += subgroup;
      result += " ";
    }

    return result;
  }

  private toggleFilesUpdated() {
    this.filesUpdated = !this.filesUpdated;
  }

  private onFileChange(inputFile: HTMLInputElement, formControlName: string) {
    let reader = new FileReader();
    let file = inputFile.files[0];
    let self = this;

    reader.addEventListener("load", function () {
      let all: string = reader.result;
      let content: string = all.substring(all.indexOf(',') + 1);
      console.log(content);
      self.taskEditForm.get(formControlName).setValue(content);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  private fileValidator(control: FormGroup): { [key: string]: any; } {
    let filesUpdated: boolean = control.get('filesUpdated').value;
    let inputFile: string = control.get('inputFile').value;
    let outputFile: string = control.get('outputFile').value;

    if (filesUpdated && (inputFile === '' || outputFile === '')) {
      return {key: true};
    }

    return null;
  }

  private onTaskDelete() {
    this.taskService.delete(this.task.id)
      .subscribe((task: Task) => {
        this.reload.emit();
      }, error => {
        console.log(error);
      });
  }

  private onTaskEditFormSubmit() {
    this.requesting = true;
    let toBeEdited: ETask = this.taskBuilder.buildETaskFromForm(this.taskEditForm);

    this.taskService.edit(this.task.id, toBeEdited)
      .subscribe((task: Task) => {
        this.requesting = false;
        this.reload.emit();
      }, error => {
        console.log(error);
        this.requesting = false;
      })
  }

  private canEdit() {
    return this.taskEditForm.valid && !this.deadlinePassed();
  }

  private deadlinePassed() {
    let deadline: Date = new Date(this.task.deadline);
    return this.currentDate >= deadline;
  }
}
