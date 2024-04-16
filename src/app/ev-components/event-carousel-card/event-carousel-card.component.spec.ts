import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCarouselCardComponent } from './event-carousel-card.component';

describe('EventCarouselCardComponent', () => {
  let component: EventCarouselCardComponent;
  let fixture: ComponentFixture<EventCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCarouselCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
