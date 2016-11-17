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
