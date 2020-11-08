import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracklistingComponent } from './tracklisting.component';

describe('TracklistingComponent', () => {
  let component: TracklistingComponent;
  let fixture: ComponentFixture<TracklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
