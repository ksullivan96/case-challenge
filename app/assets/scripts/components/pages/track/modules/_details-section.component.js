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
var DetailsComponent = (function () {
    function DetailsComponent() {
    }
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-section',
            template: "\n    <div class=\"focus\">\n                    <div class=\"row-12 row-section\">\n                        <h3>2. Item details</h3>\n                    </div>\n                    <div class=\"row-12\">\n                        <div class=\"row-12\">\n                            <h4>Item Type</h4>\n                        </div>\n                        <input type=\"text\" placeholder=\"Pallet\">\n                    </div>\n                        <div class=\"row-3\">\n                            <input type=\"text\" placeholder=\"Length\">\n                        </div>\n                        <div class=\"row-3\">\n                            <input type=\"text\" placeholder=\"Width\">\n                        </div>\n                        <div class=\"row-3\">\n                            <input type=\"text\" placeholder=\"Height\">\n                        </div>\n                        <div class=\"row-3\">\n                            <input type=\"text\" placeholder=\"inches\">\n                        </div>\n                        <div class=\"row-6\">\n                            <input type=\"text\" placeholder=\"Weight\">                        \n                        </div>\n                        <div class=\"row-3\">\n                            <input type=\"text\" placeholder=\"Weight\">                        \n                        </div>\n                        <div class=\"row-3\">\n                            <input type=\"text\" placeholder=\"Weight\">\n                        </div>\n                </div>\n                <div class=\"row__section row__checkbox\">\n                    <div class=\"row-4\">\n                            <label for=\"stackable\">stackable?</label>\n                            <label class=\"myCheckbox\">\n                                <input id=\"stackable\" type=\"checkbox\">\n                                <span></span>\n                            </label>\n                        </div>\n                        <div class=\"row-4\">\n                            <label for=\"hazard\">hazardous?</label>\n                            <label class=\"myCheckbox\">\n                                <input id=\"hazard\" type=\"checkbox\">\n                                <span></span>\n                            </label>\n                        </div>\n                        <div class=\"row-4\">\n                            <label for=\"fridge\">refrigerated?</label>\n                            <label class=\"myCheckbox\">\n                                <input id=\"fridge\" type=\"checkbox\">\n                                <span></span>\n                            </label>\n                        </div>\n                </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=_details-section.component.js.map