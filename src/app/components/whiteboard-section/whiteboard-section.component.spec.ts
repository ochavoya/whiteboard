import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardSectionComponent } from './whiteboard-section.component';

describe('WhiteboardSectionComponent', () => {
  let component: WhiteboardSectionComponent;
  let fixture: ComponentFixture<WhiteboardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
