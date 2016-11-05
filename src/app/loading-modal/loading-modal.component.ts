import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {LoadingModal} from "./loading-modal.interface";

@Component({
  selector: 'wad-loading-modal',
  templateUrl: './loading-modal.component.html'
})
export class LoadingModalComponent implements OnInit, LoadingModal {

  @ViewChild('loadingModal')
  private loadingModal: ModalComponent;

  constructor() {
  }

  ngOnInit() {
  }

  open(): void {
    this.loadingModal.open('sm');
  }

  close(): void {
    this.loadingModal.close();
  }
}
