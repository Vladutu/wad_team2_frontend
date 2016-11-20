import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'wad-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  private mode: string = 'javascript';

  private theme:string = 'twilight';

  constructor() {
  }

  ngOnInit() {
  }

  changeMode(value: string) {
    this.mode = value;
  }

  changeTheme(value:string){
    this.theme = value;
  }

}
