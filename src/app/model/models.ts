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
