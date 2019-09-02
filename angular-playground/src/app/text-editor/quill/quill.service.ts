import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuillService {

  savedNote: string;

  constructor() { }

  saveNote(editorText: string) {
    console.log(editorText);
    this.savedNote = editorText;
  }

  getNote() {
    return this.savedNote;
  }

}
