import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template-component',
  template: `
  <h3>Another component</h3>
  <p>
          Component with inline template
  </p>
  `,
  styleUrls: ['./inline-template-component.component.css']
})
export class InlineTemplateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
