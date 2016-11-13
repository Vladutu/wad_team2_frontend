import { Component, OnInit } from '@angular/core';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';

@Component({
  selector: 'wad-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private items: Array<PanelBarItemModel> = [
    <PanelBarItemModel> {title: "Models and Algorithms for Parallel Computing"},
    <PanelBarItemModel> {title: "Computer Networks Management", children: [
      <PanelBarItemModel> {title: "Homework 1" }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {

  }
  openTask() {
      console.log('something');
  }
}
