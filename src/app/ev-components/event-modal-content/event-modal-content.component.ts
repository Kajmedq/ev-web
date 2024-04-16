import { Component, Input } from '@angular/core';
import { EvEvent } from '../../ev-data/EvEvent';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ev-event-modal-content',
  templateUrl: './event-modal-content.component.html',
  styleUrls: ['./event-modal-content.component.scss']
})
export class EventModalContentComponent {
    @Input()
    event!: EvEvent;

    constructor(public activeModal: NgbActiveModal) { }
}
