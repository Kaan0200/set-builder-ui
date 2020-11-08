import { Component, Output, EventEmitter } from '@angular/core';
import { Track, Set } from  './objs';

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

  loadSets() {
    // normally we want to get these out of the local storage

    this.sets.push({
      title: 'Progressive & Trance Setlist',
      tracks: [
        {title: "Drifting Away", artist: "Grum", label: 'Anjunabeats', id: 1},
        {title: "Mantis", artist: "Genix & Kyau & Albert", label: 'Anjunabeats', id: 2},
        {title: "Juno", artist: "Maor Levi", label: 'Armada Trice', id: 3}
      ],
      lastTouched: new Date()
    },
    {
      title: 'Spacey Techno Setlist',
      tracks: [
        {title: 'Phobos', artist: 'Space 92', label: 'Perfekt Groove Recordings', id: 1},
        {title: 'Existence', artist: 'Pig&Dan', label: 'ELEVATE', id: 2},
        {title: 'Rising Heart', artist: 'Monika Kruse', label: 'Terminal M', id: 3},
        {title: 'Fluff Clouds', artist: 'The Yellowheads', label: 'Kraftek', id: 4}
      ],
      lastTouched: new Date()
    })
  }
}
