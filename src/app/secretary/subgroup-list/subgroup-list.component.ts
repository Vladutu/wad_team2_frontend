import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  selector: 'wad-subgroup-list',
  templateUrl: './subgroup-list.component.html',
  styleUrls: ['./subgroup-list.component.css']
})
export class SubgroupListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSave(): void {
    this.requesting = true;

    setTimeout(()=> {
      this.requesting = false;
      this.formModal.close();
    }, 2000);
  }

}
