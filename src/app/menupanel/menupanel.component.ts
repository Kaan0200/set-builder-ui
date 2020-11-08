import { Component, OnInit, Input } from '@angular/core';
import { Set } from '../objs';

@Component({
  selector: 'app-menupanel',
  templateUrl: './menupanel.component.html',
  styleUrls: ['./menupanel.component.less']
})
export class MenupanelComponent implements OnInit {

  @Input() sets: Set[];

  constructor() { }

  ngOnInit(): void {
  }

}
