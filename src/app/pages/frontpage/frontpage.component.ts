import {Component} from '@angular/core';
import {PATH_FACEBOOK_PAGE} from '../../ev-data/GlobalVariables';
import {EvEventType} from "../../ev-data/EvEventType";
import {EvEventTime} from "../../ev-components/eventlist/eventlist.component";

@Component({
  selector: 'ev-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent {
    path_facebook = PATH_FACEBOOK_PAGE;

    eventTypeFilter: EvEventType[] = [];
    eventComing = EvEventTime.Coming;
    eventPrevious = EvEventTime.Previous;
}
