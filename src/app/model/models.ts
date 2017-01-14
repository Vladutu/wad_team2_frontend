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

export class SolutionStudent {
  constructor(public id: number, public ssn: string, public firstName: string, public lastName: string, public email: string,
              public gender: string, public username: string, public subgroup: string, public mark: string,
              public solutionId: number) {
  }
}

export class SolutionOtherStudents {
  constructor(public id: number, public ssn: string, public firstName: string, public lastName: string, public email: string,
              public gender: string, public username: string, public subgroup: string, public similarityPercent: string,
              public url: string) {
  }
}

export class FolderNode {
  constructor(public text: string, public path: string, public file: boolean, public extension: string, public children: FolderNode[]) {

  }
}

export class FilePath {
  constructor(public filePath: string) {

  }
}

export class Content {
  constructor(public content: string) {

  }
}

export class Grade {
  constructor(public mark: number) {

  }
}

export class StudentTask {
  constructor(public id: number, public deadline: string, public description: string, public language: string,
              public mark: string, public name: string, public testsEnabled: boolean, public solutionSent:boolean) {

  }
}

export class StudentTopic {
  constructor(public id: number, public name: string, public tasks: StudentTask[]) {

  }
}

export class SolutionFile {
  constructor(public inputFile: string) {

  }
}

export class SolutionResponse {
  constructor(public error: boolean, public message: string) {

  }
}
export class UnseenNotifications {
  constructor(public date: string, id: number,message: string, seen: boolean){

  }
}
