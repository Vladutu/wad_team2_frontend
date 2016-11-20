import {FormGroup} from "@angular/forms";
import {ESProfessor, Professor} from "../model/models";
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
