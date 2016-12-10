import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

declare var $:any;
declare var jstree:any;

@Component({
  selector: 'wad-jstree',
  templateUrl: './jstree.component.html',
  styleUrls: ['./jstree.component.scss']
})
export class JstreeComponent implements OnInit, AfterViewInit {

  @Input()
  public treeStructure:any = {};
  @Output()
  public onFileSelect:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit():void {
    console.log(this.treeStructure);
    var jsTree = $('#jstree');
    jsTree.jstree({
      'core': {
        'data': [this.treeStructure]
      }
    });
    var scope = this;
    jsTree.on("changed.jstree", function (e, data) {
      let nodeDetails = data.node.original;
      if (nodeDetails.file) {
        scope.onFileSelect.emit({
          name: nodeDetails.text,
          extension: nodeDetails.extension,
          path: nodeDetails.path
        });
      }
    });
  }

}
