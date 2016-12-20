import { Component, AfterViewInit } from '@angular/core';

declare var $: any;


@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements AfterViewInit { 
  
  constructor() {

  }

  ngAfterViewInit() {
    $(".page-header__menu-icon").click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    $(".page-header__menu-content").toggleClass("page-header__menu-content--is-visible");
    $(".page-header").toggleClass("page-header--is-expanded");
    $(".page-header__menu-icon").toggleClass("page-header__menu-icon--close-x");
    $(".page-header__heading").toggleClass("page-header__heading--is-expanded");
  }

}
