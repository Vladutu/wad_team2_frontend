import {Component, AfterViewInit, ElementRef, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'wad-ace-highlighter',
  templateUrl: './ace-highlighter.component.html',
  styleUrls: ['./ace-highlighter.component.css']
})
export class AceHighlighterComponent implements AfterViewInit, OnChanges {

  @Input() mode: string = 'javascript';

  private script: any = null;

  constructor(private elementRef: ElementRef) {
  }


  ngAfterViewInit(): void {
    this.script = document.createElement("script");
    this.script.type = "text/javascript";
    this.script.text = " var editor = ace.edit('editor'); " +
      "editor.setTheme('ace/theme/twilight');" +
      "editor.getSession().setMode('ace/mode/" + this.mode + "');" +
      "editor.setReadOnly(true);" +
      "document.getElementById('editor').style.fontSize='12px';";
    this.elementRef.nativeElement.appendChild(this.script);
  }

  ngOnChanges(changes: SimpleChanges): void {
    document.removeChild(this.script);

    this.script = document.createElement("script");
    this.script.type = "text/javascript";
    this.script.text = " var editor = ace.edit('editor'); " +
      "editor.setTheme('ace/theme/twilight');" +
      "editor.getSession().setMode('ace/mode/" + changes['mode'].currentValue + "');" +
      "editor.setReadOnly(true);" +
      "document.getElementById('editor').style.fontSize='12px';";
    this.elementRef.nativeElement.appendChild(this.script);
    console.log("bla bla bla");
  }
}
