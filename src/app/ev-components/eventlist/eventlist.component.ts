import {Component, Input} from '@angular/core';
import {EvEvent} from '../../ev-data/EvEvent';
import {EventService} from '../../event.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EventModalContentComponent} from '../event-modal-content/event-modal-content.component';
import {EvEventType} from '../../ev-data/EvEventType';
import {map} from "rxjs";

@Component({
  selector: 'ev-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent {
    events: EvEvent[] = [];

    @Input()
    pageSize: number = 3;

    @Input()
    eventTypeFilter: EvEventType[] = [];

    @Input()
    eventTimeFilter: EvEventTime = EvEventTime.All;

    constructor(private eventService: EventService) {}

    ngOnInit(): void {
        this.getEvents();
    }

    /** Fetches events and loads them into "events". */
    getEvents(): void {
		let eventsObs = this.eventService.getEvents();
		eventsObs = eventsObs.pipe(
			map(events => events
				.filter(event => this.filterEventType(event))
				.filter(event => this.filterEventTime(event))
			)
		);

		if (this.eventTimeFilter == EvEventTime.Coming) {
			eventsObs = eventsObs.pipe(
				map(events => events.reverse())
			)
		}

		eventsObs.subscribe(events => this.events = events);
    }

    /** Opens a modal, in which the details of the event parameter are shown. */
    openModal(event: EvEvent): void {
        this.eventService.openModal(event);
    }

	/** Function to be used as a filtering of event types in a pipe of the event observable. */
	private filterEventType(event: EvEvent): boolean {
		if (this.eventTypeFilter.length == 0)
			return true;

		return this.eventTypeFilter.includes(event.type);
	}

	/** Function to be used as a filtering of event times in a pipe of the event observable. */
	private filterEventTime(event: EvEvent): boolean {
		if (this.eventTimeFilter == EvEventTime.All)
			return true;

		let dateNow = new Date();
		if (this.eventTimeFilter == EvEventTime.Coming)
			return event.date > dateNow;

		return event.date < dateNow;
	}
}

export enum EvEventTime {
  All, Coming, Previous
}
