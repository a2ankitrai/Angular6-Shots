import { QuillComponent } from './quill/quill.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CkEditorComponent } from './ck-editor/ck-editor.component';



const routes: Routes = [
    {
        path: 'text-editor', component: TextEditorComponent, children: [
            { path: 'ck-editor', component: CkEditorComponent },
            { path: 'quill', component: QuillComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TextEditorRoutingModule { }

