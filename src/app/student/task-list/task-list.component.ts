import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wad-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private baseSportsIconUrl: string = "http://demos.telerik.com/kendo-ui/content/shared/icons/sports/";
  private baseIconUrl: string = "http://demos.telerik.com/kendo-ui/content/shared/icons/16/";

  private sportsIconUrl(imageName: string): string {
    return this.baseSportsIconUrl + imageName + ".png";
  }

  private iconUrl(imageName: string): string {
    return this.baseIconUrl + imageName + ".png";
  }

  constructor() { }

  ngOnInit() {

  }
}
