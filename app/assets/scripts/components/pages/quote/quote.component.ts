import { Component, AfterViewInit, OnInit } from '@angular/core';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'quoute',
  templateUrl: 'quote.component.html',
})
export class QuoteComponent implements OnInit, AfterViewInit { 
  shippingDate: any;
  checkOne: boolean;
  checkTwo: boolean;
  isFormComplete: boolean;
  length: number;
  width:number;
  height: number;
  class: any;
  weight: number;
  quantity: number;

  constructor() {
  }

  ngOnInit() {
    this.checkOne = false;
    this.checkTwo = false;
  };
  ngAfterViewInit() {
    $(".focus")
      .focusin(function () {
        if ($(this).hasClass("n-btn")) {
          $('.btn--next').addClass("btn--next-focus");          
        }
        $(this).css("opacity", "1");
      })
      .focusout(function () {
        $(this).css("opacity", "0.6");
        $("div a").removeClass("btn--next-focus");
      });
    };
    validateShipping() {
      let validate = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
      if (validate.test(this.shippingDate)) {
        this.checkOne = true;
      }
    }
    validateInfo() {
      if(this.isFormComplete) {
        this.checkTwo = true;
      }
    }
  }