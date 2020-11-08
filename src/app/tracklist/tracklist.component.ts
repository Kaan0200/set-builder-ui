import { Component, Input, OnInit, Output } from '@angular/core';
import { Set, Track } from '../objs';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})

export class TracklistComponent implements OnInit {
  @Input() set: Set;

  currentEdit : Track = {title: '', artist: '', label: '', id: -1 };

  ngOnInit(): void {
  }

  onNewTrack(newTrack: Track) {
    if (newTrack.id === -1) { // new track
      //TODO make ids unique
      newTrack.id = this.set.tracks.length + 1;
      this.set.tracks.push( newTrack );
    } else {
      var match = this.set.tracks.findIndex( (t) => { return t.id == newTrack.id;} );
      this.set.tracks.splice(match, 1);
      this.set.tracks.splice(match, 0, newTrack);
    }
  }
  onTrackDelete(track: Track) {
    var idx: number = this.set.tracks.indexOf(track, 0);
    this.set.tracks.splice(idx, 1);
  }
  onTrackEdit(track: Track) {
    this.currentEdit = track;
  }
}
