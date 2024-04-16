import { Component } from '@angular/core';
import {EventService} from "../../event.service";
import {EvEvent} from "../../ev-data/EvEvent";
import {map} from "rxjs";
import {EventCarouselCardPosition} from "../event-carousel-card/event-carousel-card.component";

@Component({
  selector: 'ev-event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.scss']
})
export class EventCarouselComponent {
    nextEvent?: EvEvent;

    constructor(private eventService: EventService) { }

    ngOnInit(): void {
      this.loadNextEvent();
    }

    private loadNextEvent(): void {
        let dateNow = new Date();
		let eventsObs = this.eventService.getEvents();

        eventsObs = this.eventService.getEvents().pipe(
          map (events => events.filter(event => this.filterEventTime(event)))
        );

		eventsObs.subscribe(events => this.nextEvent = events[events.length - 1]);
    }

	/** Function to be used as a filtering of event times in a pipe of the event observable. */
	private filterEventTime(event: EvEvent): boolean {
		let dateNow = new Date();

		return event.date > dateNow;
	}

	openModal(event: EvEvent): void {
		this.eventService.openModal(event);
	}

    protected readonly EventCarouselCardPosition = EventCarouselCardPosition;
}
