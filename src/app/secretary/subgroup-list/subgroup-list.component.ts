import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {SortDescriptor, orderBy} from "@progress/kendo-data-query";
import {GridDataResult} from "@progress/kendo-angular-grid";

@Component({
  selector: 'wad-subgroup-list',
  templateUrl: './subgroup-list.component.html',
  styleUrls: ['./subgroup-list.component.css']
})
export class SubgroupListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  private subgroups: any[] = [];

  private sort: SortDescriptor[] = [];

  private gridView: GridDataResult;

  private edit: boolean = false;

  private selected: any = {id: 0, name: ""};

  constructor() {
  }

  ngOnInit() {
    this.subgroups = [
      {
        id: 154,
        name: "CEN4.S1"
      },
      {
        id: 2362,
        name: "CEN4.S2"
      },
      {
        id: 3573,
        name: "CEN3.S1"
      },
      {
        id: 4712,
        name: "CEN3.S2"
      },
      {
        id: 5751,
        name: "CEN2.A"
      },
      {
        id: 631,
        name: "CEN2.B"
      },
      {
        id: 7731,
        name: "CEN2.C"
      }
    ];
    this.loadSubgroups();
  }

  onSave(name: string): void {
    this.requesting = true;

    this.subgroups.push({id: 666, name: name});

    setTimeout(()=> {
      this.requesting = false;
      this.formModal.close();
      this.loadSubgroups();
    }, 2000);
  }

  private onDelete(subgroup: any): void {
    let id: number = this.subgroups.indexOf(subgroup);
    this.subgroups.splice(id, 1);
    this.loadSubgroups();
  }

  private onEdit(subgroup: any): void {
    this.edit = true;
    this.selected = subgroup;
    this.formModal.open('md');
  }

  private sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadSubgroups();
  }

  private loadSubgroups(): void {
    this.gridView = {
      data: orderBy(this.subgroups, this.sort),
      total: this.subgroups.length
    };
  }

}
