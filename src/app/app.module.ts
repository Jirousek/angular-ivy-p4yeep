import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CmListComponent } from '../cm-list/cm-list.component';
import { ICMCable } from '../cm-list/CMCable';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent,CmListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
