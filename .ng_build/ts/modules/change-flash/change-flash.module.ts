import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueChangeFlashDirective } from './directives/value-change-flash.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValueChangeFlashDirective, TestComponent],
  exports: [ValueChangeFlashDirective, TestComponent]
})
export class ChangeFlashModule { }
