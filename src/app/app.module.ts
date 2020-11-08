import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TracklistingComponent } from './tracklist/tracklisting/tracklisting.component';
import { TrackForm } from './trackenter.component';
import { MenupanelComponent } from './menupanel/menupanel.component';
import { TracklistComponent } from './tracklist/tracklist.component';


@NgModule({
  declarations: [
    AppComponent,
    TracklistingComponent,
    TrackForm,
    MenupanelComponent,
    TracklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
