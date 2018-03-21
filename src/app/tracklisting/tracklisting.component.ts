import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../Track';

@Component({
  selector: 'app-tracklisting',
  templateUrl: './tracklisting.component.html',
  styleUrls: ['./tracklisting.component.css']
})
export class TracklistingComponent  {
  @Input() track: Track;
  @Output() onTrackDelete = new EventEmitter<Track>();
  @Output() onTrackEdit   = new EventEmitter<Track>();

  deleteTrack() {
    this.onTrackDelete.emit(this.track);
  }

  editTrack() {
    this.onTrackEdit.emit(this.track);
  }
}
