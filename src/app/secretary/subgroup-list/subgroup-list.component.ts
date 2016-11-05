import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {LoadingModal} from "../../loading-modal/loading-modal.interface";

@Component({
  selector: 'wad-subgroup-list',
  templateUrl: './subgroup-list.component.html',
  styleUrls: ['./subgroup-list.component.css']
})
export class SubgroupListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;


  @ViewChild('loadingModal')
  private loadingModal: LoadingModal;

  constructor() {
  }

  ngOnInit() {
  }

  onSave(): void {
    this.formModal.close();
    this.loadingModal.open();

    setTimeout(()=>this.loadingModal.close(), 2000);
  }

}
