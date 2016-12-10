import {Component, AfterViewInit, ElementRef, Input, OnChanges, SimpleChanges} from "@angular/core";
declare var ace: any;
@Component({
  selector: 'wad-ace-highlighter',
  templateUrl: './ace-highlighter.component.html',
  styleUrls: ['./ace-highlighter.component.css']
})
export class AceHighlighterComponent implements AfterViewInit, OnChanges {
  @Input() mode: string = 'javascript';

  @Input() theme: string = 'github';

  @Input() content: string = '';

  private editor: any = null;


  constructor(private elementRef: ElementRef) {
  }


  ngAfterViewInit(): void {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/' + this.theme);
    this.editor.getSession().setMode('ace/mode/' + this.mode);
    this.editor.setReadOnly(true);
    this.editor.setValue(this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editor == null) {
      return;
    }

    if (changes['mode'] != null) {
      this.editor.getSession().setMode('ace/mode/' + this.mode);
    }

    if (changes['theme'] != null) {
      this.editor.setTheme('ace/theme/' + this.theme);
    }

    if (changes['content'] != null) {
      this.editor.setValue(this.content);
    }
  }
}
