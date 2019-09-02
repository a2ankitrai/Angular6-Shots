import { QuillService } from './quill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {

  editorText: string;
  placeholderText = 'Create an Awesome Note..';
  savedNote: string;

  toolBar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      // ['clean'],                                         // remove formatting button

      ['formula', 'link', 'image', 'video']                         // link and image, video
    ]
  };


  constructor(private quillService: QuillService) {

    this.editorText = '';
  }

  ngOnInit() {
  }

  popupNote() {
    this.editorText = this.quillService.getNote();
  }


  saveNote() {
    this.quillService.saveNote(this.editorText);
  }



}
