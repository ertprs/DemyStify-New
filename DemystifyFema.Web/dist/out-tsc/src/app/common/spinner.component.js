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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spinner_service_1 = require("../service/common/spinner.service");
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.loading = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        this.spinnerService._register(this);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "loading", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'spinner',
            template: "<div *ngIf=\"loading\" id=\"loading\">\n                    <img src=\"/assets/images/loading.gif\" id=\"loading-image\"/>\n               </div>"
        }),
        __metadata("design:paramtypes", [spinner_service_1.SpinnerService])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map