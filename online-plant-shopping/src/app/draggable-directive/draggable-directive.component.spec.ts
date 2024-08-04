import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDirectiveComponent } from './draggable-directive.component';

describe('DraggableDirectiveComponent', () => {
  let component: DraggableDirectiveComponent;
  let fixture: ComponentFixture<DraggableDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableDirectiveComponent]
    });
    fixture = TestBed.createComponent(DraggableDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
