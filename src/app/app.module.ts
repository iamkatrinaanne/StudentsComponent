import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { AnotherentryComponent } from './entry/anotherentry/anotherentry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AnotherentryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
