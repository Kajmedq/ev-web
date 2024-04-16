import { Component } from '@angular/core';
import { PATH_FACEBOOK_PAGE } from '../../ev-data/GlobalVariables';

@Component({
  selector: 'ev-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent {
    path_facebook = PATH_FACEBOOK_PAGE;
}
