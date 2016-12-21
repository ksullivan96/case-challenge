"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var QuoteComponent = (function () {
    function QuoteComponent() {
    }
    QuoteComponent.prototype.ngOnInit = function () {
        this.checkOne = false;
        this.checkTwo = false;
    };
    ;
    QuoteComponent.prototype.ngAfterViewInit = function () {
        $(".focus")
            .focusin(function () {
            if ($(this).hasClass("n-btn")) {
                $('.btn--next').addClass("btn--next-focus");
            }
            $(this).toggleClass("focus__focusOn");
        })
            .focusout(function () {
            $(this).toggleClass("focus__focusOn");
        });
    };
    ;
    QuoteComponent.prototype.validateShipping = function () {
        var validate = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        if (validate.test(this.shippingDate)) {
            this.checkOne = true;
        }
    };
    QuoteComponent.prototype.validateInfo = function () {
        if (this.isFormComplete) {
            this.checkTwo = true;
        }
    };
    QuoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quoute',
            templateUrl: 'quote.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteComponent);
    return QuoteComponent;
}());
exports.QuoteComponent = QuoteComponent;
//# sourceMappingURL=quote.component.js.map