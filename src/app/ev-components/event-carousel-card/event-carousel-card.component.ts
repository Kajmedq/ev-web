import {Component, Input} from '@angular/core';
import {EvEvent} from "../../ev-data/EvEvent";

@Component({
  selector: 'ev-event-carousel-card',
  templateUrl: './event-carousel-card.component.html',
  styleUrls: ['./event-carousel-card.component.scss']
})
export class EventCarouselCardComponent {
	@Input()
	event?: EvEvent;

	@Input()
	cardPosition: EventCarouselCardPosition = EventCarouselCardPosition.Left;
	protected readonly EventCarouselCardPosition = EventCarouselCardPosition;
}

export enum EventCarouselCardPosition {
	Left, Bottom
}
