import {Component, OnInit, ViewChild} from "@angular/core";
import {SolutionStudentService} from "../../service/solutionstudent.service";
import {SolutionOtherStudents, SolutionStudent, Task, Grade} from "../../model/models";
import {TaskService} from "../../service/task.service";
import {DateParserService} from "../../service/dateparser.service";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'wad-task-students-list',
  templateUrl: 'task-students-solutions.component.html',
  styleUrls: ['task-students-solutions.component.css']
})
export class TaskStudentsSolutionsComponent implements OnInit {

  private students: SolutionStudent[] = [];

  private otherStudents: SolutionOtherStudents[] = [];

  private currentTask: Task = null;

  private currentStudent: SolutionStudent = null;

  @ViewChild('gradeModal')
  private gradeModal: ModalComponent;

  private requesting: boolean = false;

  private gradeForm: FormGroup;

  constructor(private studentService: SolutionStudentService, private taskService: TaskService,
              private dateParserService: DateParserService) {
  }

  ngOnInit() {
    this.currentTask = this.taskService.getCurrentTask();
    this.loadStudents();
    this.gradeForm = new FormGroup({
      'grade': new FormControl('', [Validators.required])
    });
  }

  private loadStudents(): void {
    this.studentService.getStudentsByTask(this.currentTask.id)
      .subscribe((students: SolutionStudent[]) => {
        this.students = students;
      }, error => console.log(error));
  }

  private deadlinePassed() {
    let deadline: Date = this.dateParserService.parseDate(this.currentTask.deadline);
    let currentDate: Date = new Date();

    return deadline <= currentDate;
  }

  private closeModal() {
    this.dismissModal();
    this.gradeModal.close();
  }

  private dismissModal() {
    this.requesting = false;
    this.gradeForm.reset();
  }

  private onFormSubmit() {
    this.requesting = true;
    let toBeUpdated: Grade = new Grade(this.gradeForm.value.grade);
    this.studentService.editGrade(this.currentStudent.id, this.currentTask.id, toBeUpdated)
      .subscribe((student: SolutionStudent) => {
        this.requesting = false;
        this.closeModal();
        this.loadStudents();
      }, error => {
        console.log(error);
        this.requesting = false;
        this.closeModal();
      })
  }

  private openModalAndSaveStudent(student: SolutionStudent) {
    this.gradeModal.open('md');
    this.currentStudent = student;
  }

  private solutionSent(student: SolutionStudent) {
    return student.solutionId != null;
  }
}
