import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  selector: 'wad-subgroup-list',
  templateUrl: './subgroup-list.component.html',
  styleUrls: ['./subgroup-list.component.css']
})
export class SubgroupListComponent implements OnInit {

  private requesting: boolean = false;

  @ViewChild('formModal')
  private formModal: ModalComponent;

  constructor() {
  }

  ngOnInit() {
  }

  onSave(): void {
    this.requesting = true;
    this.formModal.close();

    setTimeout(()=>this.requesting = false, 2000);
  }

}
