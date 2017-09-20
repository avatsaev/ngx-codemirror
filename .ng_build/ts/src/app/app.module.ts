import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CodeMirrorModule} from 'ngx-codemirror';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CodeMirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
