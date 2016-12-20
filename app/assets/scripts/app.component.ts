import { Component } from '@angular/core';
import { TrackingService} from './services/tracking.services';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TrackingService]
})
export class AppComponent  { 
  
  constructor() {

  }

 }
