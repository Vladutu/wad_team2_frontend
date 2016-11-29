import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {SortDescriptor, orderBy} from "@progress/kendo-data-query";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {Student, Subgroup, ESStudent} from "../../model/models";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {ESStudentBuilder} from "../../builder/builders";
import {SubgroupService} from "../../service/subgroup.service";

@Component({
  selector: 'wad-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  private students: Student[] = [];

  private sort: SortDescriptor[] = [];

  private gridView: GridDataResult;

  private edit: boolean = false;

  private studentForm: FormGroup;

  private selected: Student = null;

  private subgroups: Subgroup[] = [];


  constructor(private studentService: StudentService, private esstudentBuider: ESStudentBuilder,
              private subgroupService: SubgroupService) {
  }

  ngOnInit() {
    this.subgroupService.getAll()
      .subscribe((subgroups: Subgroup[]) => this.subgroups = subgroups,
        error => console.log(error));

    this.studentForm = new FormGroup({
      'ssn': new FormControl('', [Validators.required]),
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'subgroup': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
    });

    this.loadStudentsFromService();

  }

  private loadStudentsFromService() {
    this.studentService.getAll()
      .subscribe((students: Student[]) => {
          this.students = students;
          this.loadStudentsOnGrid();
        },
        error => {
          console.log(error);
        });
  }

  onFormSubmit() {
    if (!this.edit) {
      this.saveStudent();
    }
    else {
      this.editStudent();
    }
  }

  private saveStudent() {
    this.requesting = true;
    let toBeSaved: ESStudent = this.esstudentBuider.buildFromForm(this.studentForm);

    this.studentService.save(toBeSaved)
      .subscribe((saved: Student) => {
        this.closeModal();
        this.loadStudentsFromService();
      }, error => {
        console.log(error);
        this.closeModal();
      });
  }

  private editStudent() {
    this.requesting = true;
    let toBeUpdated: ESStudent = this.esstudentBuider.buildFromForm(this.studentForm);

    this.studentService.edit(this.selected.id, toBeUpdated)
      .subscribe((edited: Student) => {
        this.closeModal();
        this.loadStudentsFromService();
        this.edit = false;
      }, error => {
        console.log(error);
        this.closeModal();
        this.edit = false;
      })
  }

  private onDelete(student: Student): void {
    this.studentService.delete(student.id)
      .subscribe((deleted: Student) => {
        this.loadStudentsFromService();
      }, error => {
        console.log(error);
      });
  }

  private onEdit(student: Student): void {
    this.edit = true;
    this.selected = student;
    this.studentForm.reset(this.esstudentBuider.buildFromStudent(student));
    this.formModal.open('md');
  }

  private sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadStudentsOnGrid();
  }

  private loadStudentsOnGrid(): void {
    this.gridView = {
      data: orderBy(this.students, this.sort),
      total: this.students.length
    };
  }

  private closeModal() {
    this.dismissModal();
    this.formModal.close();
  }

  private dismissModal() {
    this.requesting = false;
    this.studentForm.reset();
    this.edit = false;
  }


}
