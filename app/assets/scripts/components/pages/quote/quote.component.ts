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
        console.log("Correct format");
        this.checkOne = true;
      } else {
        console.log("Enter Correct format");
        console.log(this.shippingDate);
      }
    }
  }