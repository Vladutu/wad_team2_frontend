import {Component, OnInit, ViewChild} from "@angular/core";
import {SolutionStudent} from "../../model/models";
import {SolutionStudentService} from "../../service/solutionstudent.service";
import {SolutionOtherStudents} from "../../model/models";
import {SolutionOtherStudentService} from "../../service/solutionotherstudentservice.service";


@Component({
  selector: 'wad-task-students-list',
  templateUrl: './task-students-solutions.component.html',
  styleUrls: ['./task-students-solutions.component.css']
})
export class TaskStudentsSolutionsComponent implements OnInit {

  private students: SolutionStudent[] = [];
  private otherStudents: SolutionOtherStudents[] = [];

  constructor(private studentService: SolutionStudentService, otherStudentService: SolutionOtherStudentService) {
  }
  ngOnInit() {
    this.loadStudents();
  }

  loadStudents():void {
    console.log('students loaded');
    this.studentService.getAll()
      .subscribe((students: SolutionStudent[]) => {
        this.students = students;
        console.log(this.students);
      }, error => console.log(error));
  }
}
