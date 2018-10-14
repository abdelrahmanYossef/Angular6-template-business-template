import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// import { NgwWowModule } from 'ngx-wow';

import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { SlickModule } from 'ngx-slick';

import { NgbModule , NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeatuersComponent } from './featuers/featuers.component';
import { TeamComponent } from './team/team.component';
import { DoingComponent } from './doing/doing.component';
import { TabsComponent } from './tabs/tabs.component';
import { PricesComponent } from './prices/prices.component';
import { CounterComponent } from './counter/counter.component';
import { SliderComponent } from './slider/slider.component';
import { MapComponent } from './map/map.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { EmptyComponent } from './empty/empty.component';

import { Routes,  RouterModule } from "@angular/router";

const appRoutes:Routes = 
[
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "about", component: FeatuersComponent},
  {path: "team", component: TeamComponent},
  {path: "services", component: DoingComponent },
  {path: "works", component: TabsComponent},
  {path: "pricing", component: PricesComponent},
  {path: "contact", component: ContactsComponent},
  {path: "**", component: EmptyComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FeatuersComponent,
    TeamComponent,
    DoingComponent,
    TabsComponent,
    PricesComponent,
    CounterComponent,
    SliderComponent,
    MapComponent,
    ContactsComponent,
    HeaderComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    NgbModule,
    CarouselModule.forRoot(),
    // NgwWowModule.forRoot()
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
