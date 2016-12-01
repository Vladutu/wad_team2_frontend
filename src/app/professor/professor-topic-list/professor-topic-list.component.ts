import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {Topic} from "../../model/models";
import {TopicService} from "../../service/topic.service";

@Component({
  selector: 'wad-professor-task-list',
  templateUrl: './professor-topic-list.component.html',
  styleUrls: ['./professor-topic-list.component.css']
})
export class ProfessorTopicListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  private autoTests: boolean = false;

  private topics: Topic[] = [];

  constructor(private topicService: TopicService) {
  }

  ngOnInit() {
    this.topicService.getAll()
      .subscribe((topics: Topic[]) => {
        this.topics = topics;
      }, error => console.log(error));
  }

  toggleTests() {
    this.autoTests = !this.autoTests;
  }

  onSave() {
    this.requesting = true;

    setTimeout(() => {
      this.requesting = false;
      this.formModal.close();
    }, 2000);
  }

}
