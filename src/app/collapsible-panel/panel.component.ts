import {Component, OnInit, style, state, animate, transition, trigger} from "@angular/core";

@Component({
  selector: 'wad-panel',
  template: `
   <div class="panel panel-default" >
    <div class="panel-heading  cursor-hand" (click)="toggleState()">
      <h4 class="panel-title">
        <a>
          <ng-content select="wad-panel-header"></ng-content>
        </a>
      </h4>
    </div>
    
    <div [@openClose]="stateExpression" class="panel-collapse collapse in">
      <div class="panel-body">
        <ng-content select="wad-panel-body"></ng-content>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./panel.component.css'],
  animations: [
    trigger('openClose', [
      state('collapsed, void',
        style({height: "0px", display: "block", overflow: "hidden"})),
      state('expanded',
        style({height: "*"})),
      transition("collapsed <=> expanded", [animate(200)])
    ])
  ]
})
export class PanelComponent implements OnInit {

  private collapsed: boolean = true;

  private stateExpression: string = "collapsed";

  constructor() {
  }

  ngOnInit() {
  }

  toggleState(): void {
    if (this.stateExpression == "expanded") {
      this.stateExpression = "collapsed";
    }
    else {
      this.stateExpression = "expanded";
    }
  }

}

@Component({
  selector: 'wad-panel-header',
  template: `
  <ng-content></ng-content>
`,
  styleUrls: ['./panel.component.css']
})
export class PanelHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'wad-panel-body',
  template: `
 		<ng-content></ng-content>					
`,
  styleUrls: ['./panel.component.css']
})
export class PanelBodyComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'wad-panel-group',
  template: `
    <div class="panel-group">
 		  <ng-content select="wad-panel"></ng-content>
 		</div>
`,
  styleUrls: ['./panel.component.css']
})
export class PanelGroupComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
