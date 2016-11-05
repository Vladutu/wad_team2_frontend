import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  selector: 'wad-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  @ViewChild('modal')
  private modal: ModalComponent;

  private requesting: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSave(name: string) {
    console.log(name);
    this.requesting = true;

    setTimeout(()=> {
      this.requesting = false;
      this.modal.close();
    }, 2000);
  }

}
