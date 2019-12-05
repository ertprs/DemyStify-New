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
var FIPBPressReleaseCaseAdminService = /** @class */ (function () {
    //constructor(private _http: Http) { }
    function FIPBPressReleaseCaseAdminService(_httpClient) {
        this._httpClient = _httpClient;
        this._global = new global_1.Global();
    }
    FIPBPressReleaseCaseAdminService.prototype.getFIPBPressReleaseCase = function (getFIPBPressReleaseCaseRequest) {
        //let headers = new Headers({ 'Authorization': this._global.getToken() });
        //let search = new URLSearchParams();
        //search.set('FIPBPressReleaseCaseId', (getFIPBPressReleaseCaseRequest.FIPBPressReleaseCaseId != null) ? getFIPBPressReleaseCaseRequest.FIPBPressReleaseCaseId.toString() : null);
        //search.set('SearchText', getFIPBPressReleaseCaseRequest.SearchText);
        //search.set('IsActive', (getFIPBPressReleaseCaseRequest.IsActive != null) ? getFIPBPressReleaseCaseRequest.IsActive.toString() : null);
        //search.set('PageNumber', (getFIPBPressReleaseCaseRequest.PageNumber != null) ? getFIPBPressReleaseCaseRequest.PageNumber.toString() : null);
        //search.set('PageSize', (getFIPBPressReleaseCaseRequest.PageSize != null) ? getFIPBPressReleaseCaseRequest.PageSize.toString() : null);
        //search.set('OrderBy', getFIPBPressReleaseCaseRequest.OrderBy);
        //search.set('OrderByDirection', getFIPBPressReleaseCaseRequest.OrderByDirection);
        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //requestOptions.search = search;
        //return this._http.get(Global.API_SITE + "admin/api/fipbpressreleasecases", requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var params = http_params_1.createHttpParams({
            FIPBPressReleaseCaseId: (getFIPBPressReleaseCaseRequest.FIPBPressReleaseCaseId != null) ? getFIPBPressReleaseCaseRequest.FIPBPressReleaseCaseId.toString() : null,
            SearchText: getFIPBPressReleaseCaseRequest.SearchText,
            IsActive: (getFIPBPressReleaseCaseRequest.IsActive != null) ? getFIPBPressReleaseCaseRequest.IsActive.toString() : null,
            PageNumber: (getFIPBPressReleaseCaseRequest.PageNumber != null) ? getFIPBPressReleaseCaseRequest.PageNumber.toString() : null,
            PageSize: (getFIPBPressReleaseCaseRequest.PageSize != null) ? getFIPBPressReleaseCaseRequest.PageSize.toString() : null,
            OrderBy: getFIPBPressReleaseCaseRequest.OrderBy,
            OrderByDirection: getFIPBPressReleaseCaseRequest.OrderByDirection
        });
        return this._httpClient.get(global_1.Global.API_SITE + "admin/api/fipbpressreleasecases", { params: params });
    };
    FIPBPressReleaseCaseAdminService.prototype.addFIPBPressReleaseCase = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/fipbpressreleasecases/add", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fipbpressreleasecases/add", body, { headers: headers });
    };
    FIPBPressReleaseCaseAdminService.prototype.updateFIPBPressReleaseCase = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/fipbpressreleasecases/update", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fipbpressreleasecases/update", body, { headers: headers });
    };
    FIPBPressReleaseCaseAdminService.prototype.deleteFIPBPressReleaseCase = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/fipbpressreleasecases/delete", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fipbpressreleasecases/delete", body, { headers: headers });
    };
    FIPBPressReleaseCaseAdminService.prototype.fileUpload = function (formData) {
        //let headers = new Headers();
        //headers.append('Authorization', this._global.getToken());
        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //return this._http.post(Global.API_SITE + "admin/api/fipbpressreleasecases/uploadfiles", formData, requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fipbpressreleasecases/uploadfiles", formData);
    };
    FIPBPressReleaseCaseAdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FIPBPressReleaseCaseAdminService);
    return FIPBPressReleaseCaseAdminService;
}());
exports.FIPBPressReleaseCaseAdminService = FIPBPressReleaseCaseAdminService;
//# sourceMappingURL=fIPBPressReleaseCase.service.js.map