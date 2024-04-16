import {Injectable} from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import {EvEvent} from './ev-data/EvEvent';
import {EVENTS} from './ev-data/mock_events';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EventModalContentComponent} from "./ev-components/event-modal-content/event-modal-content.component";

@Injectable({
	providedIn: 'root'
})
export class EventService {

	constructor(private modalService: NgbModal) { }

	/** Returns all events. */
	public getEvents(): Observable<EvEvent[]> {
		return of(EVENTS).pipe(
			tap(events => {
				events.sort((a, b) => {
					return <any>b.date - <any>a.date;
				})
			})
		);
	}

	/** Opens a modal, in which the details of the event parameter are shown. */
	openModal(event: EvEvent): void {
		const modalRef = this.modalService.open(EventModalContentComponent, { scrollable: true, size: 'lg' });
		modalRef.componentInstance.event = event;
	}
}
