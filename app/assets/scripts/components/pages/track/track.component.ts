import { Component, OnInit } from '@angular/core';
import {TrackingService} from '../../../services/tracking.services';


declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'track',
  templateUrl: 'track.component.html',
})
export class TrackComponent implements OnInit { 
    trackingNumber: string;
    isSubmit: boolean;
    isTracking: boolean;

    constructor() {
    }
    ngOnInit() {
      this.isTracking = false;
    }

    checkLength() {
      this.isSubmit = (this.trackingNumber.length == 5) ? true : false;
      if (this.trackingNumber.length != 5) {
        this.isTracking = false;
      }
    }
    trackShipment() {
      if (this.isTracking) {
        var trackNumber = this.trackingNumber;
      } else {
        (this.isSubmit) ? this.isTracking = !this.isTracking : this.isTracking;
      }
    }
  }
