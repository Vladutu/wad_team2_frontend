export class UserLogin {
  constructor(public username: string, public password: string) {
  }
}

export class User {
  constructor(public username: string, public ssn: string, public id: number, public firstName: string,
              public lastName: string, public email: string, public gender: string, public role: string,
              public authorization: string) {
  }
}

export class Subgroup {
  constructor(public id: number, public name: string) {

  }
}

export class ESSubgroup {
  constructor(public name: string) {

  }
}

export class Professor {
  constructor(public id: number, public firstName: string, public lastName: string, public ssn: string, public gender: string,
              public email: string, public username: string, public position: string) {

  }
}

export class ESProfessor {
  constructor(public firstName: string, public lastName: string, public ssn: string, public gender: string,
              public email: string, public position: string) {

  }
}

export class Student {
  constructor(public id: number, public ssn: string, public firstName: string, public lastName: string, public email: string,
              public gender: string, public username: string, public subgroup: string) {

  }
}

export class ESStudent {
  constructor(public ssn: string, public firstName: string, public lastName: string, public email: string,
              public gender: string, public username: string, public subgroup: string) {

  }
}
