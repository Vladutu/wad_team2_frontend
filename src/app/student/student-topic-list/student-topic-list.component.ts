import {Component, OnInit, ViewChild} from "@angular/core";
import {TopicService} from "../../service/topic.service";
import {StudentTopic, SolutionFile, SolutionResponse} from "../../model/models";
import {DateParserService} from "../../service/dateparser.service";
import {SolutionStudentService} from "../../service/solutionstudent.service";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  selector: 'wad-student-task-list',
  templateUrl: './student-topic-list.component.html',
  styleUrls: ['./student-topic-list.component.css']
})
export class StudentTopicListComponent implements OnInit {

  private studentTopics: StudentTopic[] = [];

  private filename: String = '';

  private isClassVisible: boolean = false;

  private solutionFile: SolutionFile = null;

  private requesting: boolean = false;

  @ViewChild('loadingModal')
  private loadingModal: ModalComponent;

  private message: string = '';

  private error: boolean = false;

  constructor(private topicService: TopicService, private dateService: DateParserService,
              private solutionService: SolutionStudentService) {
  }

  ngOnInit() {
    this.loadTopics();
  }

  private loadTopics() {
    this.topicService.getStudentTopics()
      .subscribe((studentTopics: StudentTopic[]) => {
        this.studentTopics = studentTopics;
      }, error => {
        console.log(error);
      })
  }

  private isNumber(value: string) {
    return !isNaN(+value);
  }

  private uploadSolutionFile(event) {
    let file = event.srcElement.files[0];
    var filename = file.name;
    console.log(file);
    this.filename = filename;
    this.isClassVisible = true;

    let reader = new FileReader();
    let self = this;

    reader.addEventListener("load", function () {
      let all: string = reader.result;
      let content: string = all.substring(all.indexOf(',') + 1);
      self.solutionFile = new SolutionFile(content);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  private sendSolution(taskId: number) {
    this.requesting = true;
    this.loadingModal.open('md');
    this.message = '';

    this.solutionService.sendSolution(this.solutionFile, taskId)
      .subscribe((solutionResponse: SolutionResponse) => {
        this.handleMessage(solutionResponse);
        this.filename = "";
        this.isClassVisible = false;
        this.requesting = false;
        this.loadTopics();
      }, error => {
        console.log(error);
        this.requesting = false;
        this.filename = "";
        this.isClassVisible = false;
      })
  }

  private handleMessage(solutionResponse: SolutionResponse) {
    this.message = solutionResponse.message;
    this.error = solutionResponse.error;
  }

  private deadlinePassed(value: string) {
    let deadline: Date = this.dateService.parseDate(value);
    let currentDate: Date = new Date();

    return deadline <= currentDate;
  }
}
