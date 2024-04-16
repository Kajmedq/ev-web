import { Component } from '@angular/core';
import { PATH_FACEBOOK_PAGE } from '../../ev-data/GlobalVariables';

@Component({
  selector: 'ev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    path_facebook = PATH_FACEBOOK_PAGE;

    public isCollapsed = true;
}
