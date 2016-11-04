import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  selector: 'wad-loading-modal',
  templateUrl: './loading-modal.component.html'
})
export class LoadingModalComponent implements OnInit {

  @ViewChild('loadingModal')
  private loadingModal: ModalComponent;

  constructor() {
  }

  ngOnInit() {
    this.loadingModal.open('sm');
  }

}
