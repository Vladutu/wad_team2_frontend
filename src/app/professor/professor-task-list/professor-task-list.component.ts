import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  selector: 'wad-professor-task-list',
  templateUrl: './professor-task-list.component.html',
  styleUrls: ['./professor-task-list.component.css']
})
export class ProfessorTaskListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;
  private requesting: boolean = false;
  private autoTests: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleTests() {
    this.autoTests = !this.autoTests;
  }

  onSave() {
    this.requesting = true;

    setTimeout(()=> {
      this.requesting = false;
      this.formModal.close();
    }, 2000);
  }

}
