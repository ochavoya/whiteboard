import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardItemComponent } from './whiteboard-item.component';

describe('WhiteboardItemComponent', () => {
  let component: WhiteboardItemComponent;
  let fixture: ComponentFixture<WhiteboardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
