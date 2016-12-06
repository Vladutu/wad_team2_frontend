import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  private static language: any = {
    'JAVA': 'Java',
    'CSHARP': 'C#',
    'C': 'C'
  }

  transform(value: any, ...args: any[]): any {
    return LanguagePipe.language[value];
  }

}
