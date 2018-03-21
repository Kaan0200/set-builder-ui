import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TracklistingComponent } from './tracklisting/tracklisting.component';
import { TrackForm } from './trackenter.component';


@NgModule({
  declarations: [
    AppComponent,
    TracklistingComponent,
    TrackForm
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
