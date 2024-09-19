import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { std1component } from './shared/component/std1/std1.component';
import { std2component } from './shared/component/std2/std2.component';
import { std3component } from './shared/component/std3/std3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    std1component,
    std2component,
    std3component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
