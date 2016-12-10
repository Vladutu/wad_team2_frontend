import {Injectable} from "@angular/core";


@Injectable()
export class DateParserService {

  constructor() {
  }

  public parseDate(date: string) {
    let tokens: string[] = date.split('-');
    let year: number = +tokens[0];
    let month: number = +tokens[1] - 1;
    let day: number = +tokens[2];

    return new Date(year, month, day);
  }
}
