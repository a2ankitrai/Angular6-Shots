import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextEditorRoutingModule } from './text-editor.routing.module';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkEditorComponent } from './ck-editor/ck-editor.component';
import { QuillComponent } from './quill/quill.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextEditorComponent, CkEditorComponent, QuillComponent],
  imports: [
    CommonModule,
    FormsModule,
    TextEditorRoutingModule,
    QuillModule,
    CKEditorModule

  ]
})
export class TextEditorModule { }
