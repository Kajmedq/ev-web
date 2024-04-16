import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ev-components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import localeDa from '@angular/common/locales/da';
registerLocaleData(localeDa);

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { facebook, list, geoAlt, calendar3, clock } from 'ngx-bootstrap-icons';
// Select some icons (use an object, not an array)
const icons = {
    facebook, list, geoAlt, calendar3, clock
  };

import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { KatexComponent } from './ev-components/katex/katex.component';
import { LecturespageComponent } from './pages/lecturespage/lecturespage.component';
import { EventModalContentComponent } from './ev-components/event-modal-content/event-modal-content.component';
import { FooterComponent } from './ev-components/footer/footer.component';
import { EventlistComponent } from './ev-components/eventlist/eventlist.component';
import { EvEventFilter } from './ev-data/EvEventFilter';
import { EventCarouselComponent } from './ev-components/event-carousel/event-carousel.component';
import { StatutespageComponent } from './pages/statutespage/statutespage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { EventCarouselCardComponent } from './ev-components/event-carousel-card/event-carousel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontpageComponent,
    AboutpageComponent,
    LecturespageComponent,
    EventModalContentComponent,
    KatexComponent,
    FooterComponent,
    EventlistComponent,
    EvEventFilter,
    EventCarouselComponent,
    StatutespageComponent,
    ContactpageComponent,
    EventCarouselCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgxBootstrapIconsModule.pick(icons, {
            //width: '1em',
            //height: '1em'
        }),
        NgOptimizedImage
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'da' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
