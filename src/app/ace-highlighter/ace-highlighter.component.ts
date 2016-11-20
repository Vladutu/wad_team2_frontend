import {Component, AfterViewInit, ElementRef, Input, OnChanges, SimpleChanges} from "@angular/core";
declare var ace: any;
@Component({
  selector: 'wad-ace-highlighter',
  templateUrl: './ace-highlighter.component.html',
  styleUrls: ['./ace-highlighter.component.css']
})
export class AceHighlighterComponent implements AfterViewInit, OnChanges {
  @Input() mode: string = 'javascript';

  @Input() theme: string = 'twilight';

  private script: any = null;

  private editor: any = null;

  constructor(private elementRef: ElementRef) {
  }


  ngAfterViewInit(): void {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/' + this.theme);
    this.editor.getSession().setMode('ace/mode/' + this.mode);
    this.editor.setReadOnly(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editor == null) {
      return;
    }

    this.editor.getSession().setMode('ace/mode/' + this.mode);
    this.editor.setTheme('ace/theme/' + this.theme);
  }
}
