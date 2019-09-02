import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.css']
})
export class CkEditorComponent implements OnInit {

  public Editor = ClassicEditor;
  editorText: string;
  constructor() {
  }

  ngOnInit() {
    this.editorText = '<p>Hello, world!</p>';
  }

  saveNote() {
    console.log(this.editorText);
  }

}
