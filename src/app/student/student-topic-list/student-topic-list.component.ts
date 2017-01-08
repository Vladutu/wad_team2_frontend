import {Component, OnInit} from "@angular/core";
import {TopicService} from "../../service/topic.service";
import {StudentTopic} from "../../model/models";

@Component({
  selector: 'wad-student-task-list',
  templateUrl: './student-topic-list.component.html',
  styleUrls: ['./student-topic-list.component.css']
})
export class StudentTopicListComponent implements OnInit {

  private studentTopics: StudentTopic[] = [];

  constructor(private topicService: TopicService) {
  }

  ngOnInit() {
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
}
