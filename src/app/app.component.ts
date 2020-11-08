import { Component, Output, EventEmitter } from '@angular/core';
import { Track, Set } from  './statics/objs';
import { LOCALSTORAGE_KEY } from './statics/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Set Builder';
  sets: Set[] = [];
  currentSetIndex: number = 0; // set for now

  ngOnInit(): void {
    this.loadSets();
  }

  onSelectSet(index: number) {
    this.currentSetIndex = index;
  }

  onSetChange(set: Set) {
    set.lastTouched = new Date();
    // the set has been modified, save it
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.sets));
  }

  onNewSet() {
    this.sets.push(new Set('', []));
    this.currentSetIndex = this.sets.length - 1;
  }

  loadSets() {
    // normally we want to get these out of the local storage
    let memory = localStorage.getItem(LOCALSTORAGE_KEY);

    if (memory) {
      this.sets = JSON.parse(memory);

    } else {
      this.sets.push(new Set('Progressive & Trance Setlist',
        [
          {title: "Drifting Away", artist: "Grum", label: 'Anjunabeats', id: 1},
          {title: "Mantis", artist: "Genix & Kyau & Albert", label: 'Anjunabeats', id: 2},
          {title: "Juno", artist: "Maor Levi", label: 'Armada Trice', id: 3}
        ],
      ));
      this.sets.push(new Set(
        'Spacey Techno Setlist',
        [
          {title: 'Phobos', artist: 'Space 92', label: 'Perfekt Groove Recordings', id: 1},
          {title: 'Existence', artist: 'Pig&Dan', label: 'ELEVATE', id: 2},
          {title: 'Rising Heart', artist: 'Monika Kruse', label: 'Terminal M', id: 3},
          {title: 'Fluff Clouds', artist: 'The Yellowheads', label: 'Kraftek', id: 4}
        ]
      ));
    }
  }
}
