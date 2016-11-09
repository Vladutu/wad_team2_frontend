import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {orderBy, SortDescriptor} from "@progress/kendo-data-query";
import {GridDataResult} from "@progress/kendo-angular-grid";

@Component({
  selector: 'wad-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  private professors: any[] = [];

  private sort: SortDescriptor[] = [];

  private gridView: GridDataResult;

  private edit: boolean = false;

  private selected: any = {id: 0, name: ""};

  constructor() {
  }

  ngOnInit() {
    this.professors = [
      {
        id: 1,
        ssn: "1754928593234",
        firstName: "Marius",
        lastName: "Brezovan",
        gender: "Male",
        position: "Prof. Dr. Ing."
      },
      {
        id: 2,
        ssn: "1850626162204",
        firstName: "Ioan",
        lastName: "Lemeni",
        gender: "Male",
        position: "Prof."
      }
    ];

    this.loadProfessors();
  }

  onSave(name: string) {
    console.log(name);
    this.requesting = true;

    setTimeout(()=> {
      this.requesting = false;
      this.formModal.close();
    }, 2000);
  }

  onDelete(professor: any) {
    let id: number = this.professors.indexOf(professor);
    this.professors.splice(id, 1);
    this.loadProfessors();
  }


  private sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProfessors();
  }

  private loadProfessors(): void {
    this.gridView = {
      data: orderBy(this.professors, this.sort),
      total: this.professors.length
    };
  }

}
