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
var LocationComponent = (function () {
    function LocationComponent() {
    }
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'location-section',
            template: "\n    <div class=\"focus\">\n        <div class=\"row-12\">\n            <h3>1. Location and Date</h3>\n        </div>\n            <div class=\"row-12\">\n                <input type=\"text\" placeholder=\"12/12/2016: 72758 to 72701\">\n            </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=_location-section.component.js.map