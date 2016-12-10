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

export class Task {
  constructor(public id: number, public name: string, public description: string, public deadline: string, public language: string,
              public canSubmitSolutions: boolean, public testsEnabled: boolean, public plagiarismAnalyserEnabled: boolean,
              public sentSolutions: number, public noStudents: number) {

  }
}

export class STask {
  constructor(public name: string, public description: string, public deadline: string, public language: string,
              public plagiarismEnabled: boolean, public testsEnabled: boolean, public subgroups: string[], public inputFile: string,
              public outputFile: string) {

  }
}

export class ETask {
  constructor(public name: string, public description: string, public deadline: string, public filesUpdated: boolean,
              public plagiarismEnabled: boolean, public inputFile: string, public outputFile: string) {

  }
}

export class Topic {
  constructor(public id: number, public name: string, public tasks: Task[]) {

  }
}

export class STopic {
  constructor(public name: string) {

  }
}

