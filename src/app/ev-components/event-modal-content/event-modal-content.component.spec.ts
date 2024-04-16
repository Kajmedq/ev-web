import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModalContentComponent } from './event-modal-content.component';

describe('EventModalContentComponent', () => {
  let component: EventModalContentComponent;
  let fixture: ComponentFixture<EventModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
