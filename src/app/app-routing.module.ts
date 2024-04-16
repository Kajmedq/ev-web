import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { LecturespageComponent } from './pages/lecturespage/lecturespage.component';
import {StatutespageComponent} from "./pages/statutespage/statutespage.component";
import {ContactpageComponent} from "./pages/contactpage/contactpage.component";

const routes: Routes = [
    { path: "", component: FrontpageComponent, title: "Eulers Venner" },
    { path: "about", component: AboutpageComponent, title: "Om foreningen | Eulers Venner" },
    { path: "lectures", component: LecturespageComponent, title: "Foredrag | Eulers Venner" },
	{ path: "contact", component: ContactpageComponent, title: "Kontakt | Eulers Venner" },
	{ path: "statutes", component: StatutespageComponent, title: "Vedtægter | Eulers Venner" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
