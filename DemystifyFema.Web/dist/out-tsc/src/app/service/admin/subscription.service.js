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
//import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
var http_1 = require("@angular/common/http");
var global_1 = require("../../common/global");
var http_params_1 = require("../../common/http-params");
var SubscriptionAdminService = /** @class */ (function () {
    //constructor(private _http: Http) { }
    function SubscriptionAdminService(_httpClient) {
        this._httpClient = _httpClient;
        this._global = new global_1.Global();
    }
    SubscriptionAdminService.prototype.getSubscription = function (getSubscriptionRequest) {
        //let headers = new Headers({ 'Authorization': this._global.getToken() });
        //let search = new URLSearchParams();
        //search.set('UserId', (getSubscriptionRequest.UserId != null) ? getSubscriptionRequest.UserId.toString() : null);
        //search.set('SubscriptionId', (getSubscriptionRequest.SubscriptionId != null) ? getSubscriptionRequest.SubscriptionId.toString() : null);
        //search.set('SearchText', getSubscriptionRequest.SearchText);
        //search.set('IsActive', (getSubscriptionRequest.IsActive != null) ? getSubscriptionRequest.IsActive.toString() : null);
        //search.set('PageNumber', (getSubscriptionRequest.PageNumber != null) ? getSubscriptionRequest.PageNumber.toString() : null);
        //search.set('PageSize', (getSubscriptionRequest.PageSize != null) ? getSubscriptionRequest.PageSize.toString() : null);
        //search.set('OrderBy', getSubscriptionRequest.OrderBy);
        //search.set('OrderByDirection', getSubscriptionRequest.OrderByDirection);
        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //requestOptions.search = search;
        //return this._http.get(Global.API_SITE + "admin/api/subscriptions", requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var params = http_params_1.createHttpParams({
            UserId: (getSubscriptionRequest.UserId != null) ? getSubscriptionRequest.UserId.toString() : null,
            SubscriptionId: (getSubscriptionRequest.SubscriptionId != null) ? getSubscriptionRequest.SubscriptionId.toString() : null,
            SearchText: getSubscriptionRequest.SearchText,
            IsActive: (getSubscriptionRequest.IsActive != null) ? getSubscriptionRequest.IsActive.toString() : null,
            PageNumber: (getSubscriptionRequest.PageNumber != null) ? getSubscriptionRequest.PageNumber.toString() : null,
            PageSize: (getSubscriptionRequest.PageSize != null) ? getSubscriptionRequest.PageSize.toString() : null,
            OrderBy: getSubscriptionRequest.OrderBy,
            OrderByDirection: getSubscriptionRequest.OrderByDirection
        });
        return this._httpClient.get(global_1.Global.API_SITE + "admin/api/subscriptions", { params: params });
    };
    SubscriptionAdminService.prototype.updateSubscription = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/subscriptions/update", body, options)
        //.pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/subscriptions/update", body, { headers: headers });
    };
    SubscriptionAdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SubscriptionAdminService);
    return SubscriptionAdminService;
}());
exports.SubscriptionAdminService = SubscriptionAdminService;
//# sourceMappingURL=subscription.service.js.map