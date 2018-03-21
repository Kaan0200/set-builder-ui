import { Component, Output, EventEmitter, Input, NgModule } from '@angular/core';
import { Track } from  './Track';

@Component({
    selector: 'track-form',
    templateUrl: './trackenter.component.html'
  })
  export class TrackForm {
    @Output() onNewTrack = new EventEmitter<Track>();
    titleError: boolean = false;
    artistError: boolean = false;
    labelError: boolean = false;
    

    @Input() 
    set currentTrack(changes: Track) { 
      if (changes.id != -1) { //editing a track
        this.showButton = true;
      }
      this._currentTrack = changes;
     }
    get currentTrack() { return this._currentTrack; }
    private _currentTrack : Track;

    set title(change: string) { this._currentTrack.title = change; }
    get title() { return this._currentTrack.title; }

    get buttonText() { return this._currentTrack.id === -1 ? "Save New Track" : "Done Editing Track"; }
    showButton: boolean = false;

    newTrackBox() {
      this._currentTrack = {title: '', artist: '', label: '', id: -1};
      this.showButton = false;
    }

    onChange() {
      this.showButton = !(
            (this._currentTrack.title === undefined || this._currentTrack.title === '') ||
            (this._currentTrack.artist === undefined || this._currentTrack.artist === '') || 
            (this._currentTrack.label === undefined || this._currentTrack.label === ''));

    }

    onSubmit() {
      // do validation
      if (this.validate(this._currentTrack.title, this._currentTrack.artist, this._currentTrack.label)) {
        return;
      }
        if (this._currentTrack.id === -1) { //new
        // emit
        this.onNewTrack.emit(this._currentTrack);
        }
      this._currentTrack = {title: '', artist: '', label: '', id: -1};
      this.showButton = false;
    }

    validate(title: string, artist: string, label: string) : boolean {
      this.titleError = (title === undefined || title === '');
      this.artistError = (artist === undefined || artist === '');
      this.labelError = (label === undefined || label === '');

      return (this.titleError || this.artistError || this.labelError);
    }
  }