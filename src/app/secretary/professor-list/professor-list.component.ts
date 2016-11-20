import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {orderBy, SortDescriptor} from "@progress/kendo-data-query";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {Professor, ESProfessor} from "../../model/models";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ProfessorService} from "../../service/professor.service";
import {ESProfessorBuilder} from "../../builder/builders";

@Component({
  selector: 'wad-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  private professors: Professor[] = [];

  private sort: SortDescriptor[] = [];

  private gridView: GridDataResult;

  private edit: boolean = false;

  private professorForm: FormGroup;

  private selected: Professor = null;

  constructor(private professorService: ProfessorService, private esProfessorBuilder: ESProfessorBuilder) {
  }

  ngOnInit() {
    this.professorForm = new FormGroup({
      'ssn': new FormControl('', [Validators.required]),
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'position': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
    });

    this.loadProfessorsFromService();
  }

  onFormSubmit() {
    if (!this.edit) {
      this.saveProfessor();
    }
    else {
      this.editProfessor();
    }
  }

  private saveProfessor() {
    this.requesting = true;
    let toBeSaved: ESProfessor = this.esProfessorBuilder.buildFromForm(this.professorForm);

    this.professorService.save(toBeSaved)
      .subscribe((saved: Professor)=> {
        this.closeModal();
        this.loadProfessorsFromService();
      }, error=> {
        console.log(error);
        this.closeModal();
      });
  }

  private editProfessor() {
    this.requesting = true;
    let toBeUpdated: ESProfessor = this.esProfessorBuilder.buildFromForm(this.professorForm);

    this.professorService.edit(this.selected.id, toBeUpdated)
      .subscribe((edited: Professor)=> {
        this.closeModal();
        this.loadProfessorsFromService();
        this.edit = false;
      }, error=> {
        console.log(error);
        this.closeModal();
        this.edit = false;
      })
  }

  private onDelete(professor: Professor): void {
    this.professorService.delete(professor.id)
      .subscribe((deleted: Professor)=> {
        this.loadProfessorsFromService();
      }, error=> {
        console.log(error);
      });
    // this.loadProfessorsFromService();
  }

  private onEdit(professor: Professor): void {
    this.edit = true;
    this.selected = professor;
    this.professorForm.reset(this.esProfessorBuilder.buildFromProfessor(professor));
    this.formModal.open('md');
  }

  private closeModal() {
    this.dismissModal();
    this.formModal.close();
  }

  private dismissModal() {
    this.requesting = false;
    this.professorForm.reset();
    this.edit = false;
  }


  private sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProfessorsOnGrid();
  }

  private loadProfessorsOnGrid(): void {
    this.gridView = {
      data: orderBy(this.professors, this.sort),
      total: this.professors.length
    };
  }

  private loadProfessorsFromService(): void {
    this.professorService.getAll()
      .subscribe((professors: Professor[])=> {
          this.professors = professors;
          this.loadProfessorsOnGrid();
        },
        error => {
          console.log(error);
        });
  }

}
