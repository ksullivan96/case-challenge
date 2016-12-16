import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { QuoteComponent }  from './components/pages/quote/quote.component';
import { TrackComponent }  from './components/pages/track/track.component';

const appRoutes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
	{
		path:'pages/get-a-quote',
		component:QuoteComponent
	},
    {
        path:'pages/track-a-shipment',
        component: TrackComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);