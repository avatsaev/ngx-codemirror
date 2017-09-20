import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->


    <textarea codemirror [content]="content">

    </textarea>
  `,
  styles: [`

  `]
})
export class AppComponent {
  content = 'var i = 10;';

}
