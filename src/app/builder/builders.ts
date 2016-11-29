import {FormGroup} from "@angular/forms";
import {ESProfessor, Professor, ESStudent, Student} from "../model/models";
import {Injectable} from "@angular/core";

@Injectable()
export class ESProfessorBuilder {

  public buildFromForm(form: FormGroup): ESProfessor {
    return new ESProfessor(form.value.firstName, form.value.lastName, form.value.ssn, form.value.gender,
      form.value.email, form.value.position);
  }

  public buildFromProfessor(professor: Professor): any {
    return {
      'firstName': professor.firstName,
      'lastName': professor.lastName,
      'ssn': professor.ssn,
      'gender': professor.gender,
      'email': professor.email,
      'position': professor.position
    };
  }
}

@Injectable()
export class ESStudentBuilder {

  public buildFromForm(form: FormGroup): ESStudent {
    let value = form.value;
    return new ESStudent(value.ssn, value.firstName, value.lastName, value.email, value.gender, value.username,
      value.subgroup);
  }

  public buildFromStudent(student: Student): any {
    return {
      'firstName': student.firstName,
      'lastName': student.lastName,
      'ssn': student.ssn,
      'gender': student.gender,
      'email': student.email,
      'subgroup': student.subgroup
    };
  }
}
