import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

declare var $:any;
declare var jstree:any;

@Component({
  selector: 'wad-jstree',
  templateUrl: './jstree.component.html',
  styleUrls: ['./jstree.component.css']
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
    var scope = this;
    this.traverse(this.treeStructure);
    var jsTree = $('#jstree');
    jsTree.jstree({
      'plugins': ['types'],
      'core': {
        'data': [this.treeStructure]
      }
    });
    jsTree.on('changed.jstree', function (e, data) {
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

  traverse(object):void {
    var scope = this;
    var fileIcon = 'glyphicon glyphicon-file', folderIcon = 'glyphicon glyphicon-folder-open';
    var iconProperty = '';
    if (typeof object === "object") {
      $.each(object, function (key, value) {
        if (object.file) {
          object.icon = fileIcon;
        } else {
          object.icon = folderIcon;
        }
        scope.traverse(value);
      });
    }
  }

}
