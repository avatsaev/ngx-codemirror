import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChangeFlashModule} from 'ngx-change-flash';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChangeFlashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
