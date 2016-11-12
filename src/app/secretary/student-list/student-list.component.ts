import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {SortDescriptor, orderBy} from "@progress/kendo-data-query";
import {GridDataResult} from "@progress/kendo-angular-grid";

@Component({
  selector: 'wad-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  private sort: SortDescriptor[] = [];

  private gridView: GridDataResult;

  private students: any[] = [];

  private subgroupList: any[] = [];


  constructor() {
  }

  ngOnInit() {

    this.subgroupList = ['CEN4.S1', 'CEN4.S2', 'CEN3.A', 'CEN3.B', 'CEN3.C', 'CEN3.D'];

    this.students = [
      {
        id: 1,
        ssn: "1940826160041",
        firstName: "Georgian",
        lastName: "Vladutu",
        gender: "Male",
        subgroup: "CEN4.S1"
      },
      {
        id: 1,
        ssn: "1930804150062",
        firstName: "Cristian",
        lastName: "Totolin",
        gender: "Male",
        subgroup: "CEN4.S1"
      }
    ];

    this.loadStudents();
  }

  onSave() {
    this.requesting = true;

    setTimeout(()=> {
      this.requesting = false;
      this.formModal.close();
    }, 2000);
  }

  onDelete(student: any) {
    let id: number = this.students.indexOf(student);
    this.students.splice(id, 1);
    this.loadStudents();
  }


  private sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadStudents();
  }

  private loadStudents(): void {
    this.gridView = {
      data: orderBy(this.students, this.sort),
      total: this.students.length
    };
  }

}
