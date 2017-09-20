import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeMirrorDirective} from './directives/codemirror.directive';

import 'codemirror/mode/htmlmixed/htmlmixed';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CodeMirrorDirective],
  exports: [CodeMirrorDirective]
})
export class CodeMirrorModule { }
