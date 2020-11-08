import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Set, Track } from '../statics/objs';
import { LOCALSTORAGE_KEY } from '../statics/globals';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.less']
})

export class TracklistComponent {
  @Output() onSetChange: EventEmitter<Set> = new EventEmitter();

  @Input() set: Set;
  @Input() currentSetIdx: number;

  isEditingTitle: boolean = false;
  currentEdit: Track = {title: '', artist: '', label: '', id: -1 };

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
    
    // Emit update event for storage
    this.onSetChange.emit(this.set);
  }

  onTrackDelete(track: Track) {
    var idx: number = this.set.tracks.indexOf(track, 0);
    this.set.tracks.splice(idx, 1);

    // Emit update event for storage
    this.onSetChange.emit(this.set);
  }

  onTrackEdit(track: Track) {
    this.currentEdit = track;

    // Emit update event for storage
    this.onSetChange.emit(this.set);
  }

  titleEdit() {
    this.isEditingTitle = true;

  }

  finishTitle() {
    this.isEditingTitle = false;

    // Emit update event for storage
    this.onSetChange.emit(this.set);
  }
}
