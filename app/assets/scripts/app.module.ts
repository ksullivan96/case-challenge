import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { QuoteComponent }  from './components/pages/quote/quote.component';
import { TrackComponent }  from './components/pages/track/track.component';




@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule, routing ],
  declarations: [ AppComponent, HomeComponent, HeaderComponent, QuoteComponent, TrackComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
