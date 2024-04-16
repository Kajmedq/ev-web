import { Component } from '@angular/core';
import { EvEventType } from '../../ev-data/EvEventType';

@Component({
  selector: 'ev-lecturespage',
  templateUrl: './lecturespage.component.html',
  styleUrls: ['./lecturespage.component.scss']
})
export class LecturespageComponent {
    filter: EvEventType[] = [EvEventType.Lecture];
}
