import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Set } from '../statics/objs';

@Component({
  selector: 'app-menupanel',
  templateUrl: './menupanel.component.html',
  styleUrls: ['./menupanel.component.less']
})
export class MenupanelComponent {
  @Input() sets: Set[];
  @Input() currentSetIdx: number;
  @Output() onSelectSet:EventEmitter<number> = new EventEmitter<number>();


  selectSet(index: number) {
    this.onSelectSet.emit(index);
  }
}
