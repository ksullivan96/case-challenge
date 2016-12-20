import { Component, AfterViewInit, OnInit } from '@angular/core';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'quoute',
  templateUrl: 'quote.component.html',
})
export class QuoteComponent implements AfterViewInit { 
  constructor() {
  }
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
  }