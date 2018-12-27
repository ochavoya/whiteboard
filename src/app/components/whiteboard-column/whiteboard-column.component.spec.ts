import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardColumnComponent } from './whiteboard-column.component';

describe('WhiteboardColumnComponent', () => {
  let component: WhiteboardColumnComponent;
  let fixture: ComponentFixture<WhiteboardColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
