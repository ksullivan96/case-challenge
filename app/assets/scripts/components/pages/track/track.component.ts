import { Component, AfterViewInit, OnInit } from '@angular/core';
import {TrackingService} from '../../../services/tracking.services';


declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'track',
  templateUrl: 'track.component.html',
})
export class TrackComponent implements OnInit, AfterViewInit { 
    trackingNumber: string;
    isSubmit: boolean;
    isTracking: boolean;

    constructor(private _trackingService: TrackingService) {
    }
    ngOnInit() {
      this.isTracking = false;
    }

    ngAfterViewInit() {
    $(".focus")
      .focusin(function () {
        $(this).css("opacity", "1");
      })
      .focusout(function () {
        $(this).css("opacity", "0.6");
      });
    };
  
    checkLength() {
      this.isSubmit = (this.trackingNumber.length == 5) ? true : false;
      if (this.trackingNumber.length != 5) {
        this.isTracking = false;
      }
    }
    trackShipment() {
      (this.isSubmit) ? this.isTracking = !this.isTracking : this.isTracking;
      if (this.isTracking) {
        var trackNumber = this.trackingNumber;
      }
    }

  }
