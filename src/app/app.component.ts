import { Component, Output, EventEmitter } from '@angular/core';
import { Track } from  './Track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Set Builder';

  currentEdit : Track = {title: '', artist: '', label: '', id: -1 };
  tracks = [
    {title: "Drifting Away", artist: "Grum", label: 'Anjunabeats', id: 1},
    {title: "Mantis", artist: "Genix & Kyau & Albert", label: 'Anjunabeats', id: 2},
    {title: "Juno", artist: "Maor Levi", label: 'Armada Trice', id: 3}
  ];

  onNewTrack(newTrack: Track) {
    if (newTrack.id === -1) { // new track
      //TODO make ids unique
      newTrack.id = this.tracks.length + 1;
      this.tracks.push( newTrack );
    } else {
      var match = this.tracks.findIndex( (t) => { return t.id == newTrack.id;} );
      this.tracks.splice(match, 1);
      this.tracks.splice(match, 0, newTrack);
    }
  }
  onTrackDelete(track: Track) {
    var idx: number = this.tracks.indexOf(track, 0);
    this.tracks.splice(idx, 1);
  }
  onTrackEdit(track: Track) {
    this.currentEdit = track;
  }
}
