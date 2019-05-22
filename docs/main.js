(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-bootstrap.module.ts":
/*!*****************************************!*\
  !*** ./src/app/app-bootstrap.module.ts ***!
  \*****************************************/
/*! exports provided: UIKIT_FREE, UIKIT, AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIKIT_FREE", function() { return UIKIT_FREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIKIT", function() { return UIKIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");





var UIKIT_FREE = [
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsFreeModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputsModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["PopoverModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"].forRoot(),
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot()
];
var UIKIT = [
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["ToastModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["AutoCompleterModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["AutoFormatModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["CardsModule"].forRoot(),
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["ChartSimpleModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["FileInputModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["LightBoxModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["PreloadersModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["RangeModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["ScrollSpyModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["SidenavModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["SmoothscrollModule"].forRoot(),
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["StepperModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["StickyContentModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MaterialChipsModule"],
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["TimePickerModule"],
    // MDBBootstrapModulePro,
    ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModulesPro"].forRoot()
];
// ModalModule, TooltipModule, PopoverModule, ButtonsModule
var SVC = [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"]];
var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ].concat(UIKIT_FREE, [
                ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["SidenavModule"],
                // WavesModule,
                // CarouselModule.forRoot(),
                ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"],
                ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModulesPro"].forRoot()
            ]),
            providers: SVC.slice(),
            exports: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'me-pro';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"]],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"],
                    useValue: '/'
                },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"m-0 heavy-rain-gradient color-block pro-container\">\n    <div class=\"row d-flex justify-content-center mt-5\">\n      <div class=\"col-12 col-md-10 col-lg-5 my-5\">\n        <mdb-card cascade=\"true\" wider=\"true\" reverse=\"true\" class=\"pro-card\">\n          <div\n            class=\"view view-cascade overlay blue-gradient white-text waves-light d-flex justify-content-center prod-header\"\n            mdbWavesEffect>\n            <img src=\"assets/images/prome.png\" alt=\"avatar mx-auto white\" class=\"rounded-circle img-fluid\">\n          </div>\n\n          <mdb-card-body cascade=\"true\" class=\"text-center\">\n\n            <!--Title-->\n            <mdb-card-title>\n              <h3 class=\"pro-title\">\n                Hi, I'm <strong>Orman Neville</strong>\n              </h3>\n            </mdb-card-title>\n\n            <mdb-card-text class=\"pro-body\">\n              <p class=\"text-justify\">Web Developer specialized in Front-end and Back-end Development based on Dallas,\n                Texas. I'm quietly confident, naturally curious, and perpetually working on improving to create\n                outstanding\n                websites and contribute in your business service. I enjoy bringing ideas to life in the browser by writing\n                simplest code solving problem that makes your live easier.</p>\n            </mdb-card-text>\n\n            <p class=\"pro-footer\">How can I help you today?</p>\n                        <!--Facebook-->\n            <a type=\"button\" href=\"tel:+12145241763\" class=\"btn-floating btn-small btn-fb waves-light\" mdbWavesEffect>\n              <i class=\"fas fa-mobile-alt\"></i>\n            </a>\n            <!--Twitter-->\n            <a type=\"button\" href=\"mailto:orman.neville@hotmail.com\" class=\"btn-floating btn-small btn-tw waves-light\"\n              mdbWavesEffect>\n              <i class=\"fas fa-envelope\"></i>\n            </a>\n            <!--Google +-->\n            <a type=\"button\" class=\"btn-floating btn-small btn-dribbble waves-light\" mdbWavesEffect>\n              <i class=\"fab fa-dribbble\"></i>\n            </a>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pro-container {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden; }\n  .pro-container:first-child {\n    position: absolute; }\n  .pro-container .pro-card .prod-header {\n    height: 250px;\n    align-items: center; }\n  .pro-container .pro-card .prod-header img {\n      height: 190px;\n      border: 5px solid white; }\n  .pro-container .pro-card .pro-footer {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-style: italic;\n    font-size: 18px; }\n  .pro-container .pro-card .pro-body {\n    padding: 10px; }\n  .pro-container .pro-card .pro-body p {\n      margin: 0 25px;\n      font-size: 19px; }\n  .pro-container .pro-card .pro-body p:first-letter {\n        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n        font-style: italic;\n        color: #0d47a1;\n        float: left;\n        font-size: 38px;\n        margin: 0 .3em 0 0;\n        initial-letter: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcV29ya3NwYWNlXFxtYXN0ZXJwcm9cXG1lUHJvL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBRVosa0JBQWtCLEVBQUE7RUFKcEI7SUFPSSxrQkFBa0IsRUFBQTtFQVB0QjtJQVlNLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQWJ6QjtNQWdCUSxhQUFhO01BQ2IsdUJBQXVCLEVBQUE7RUFqQi9CO0lBc0JRLDREQUE0RDtJQUM1RCxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBeEJ2QjtJQTRCTSxhQUFhLEVBQUE7RUE1Qm5CO01BK0JRLGNBQWM7TUFDZCxlQUFlLEVBQUE7RUFoQ3ZCO1FBbUNVLHdFQUF3RTtRQUN4RSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByby1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5wcm8tY2FyZCB7XHJcbiAgICAucHJvZC1oZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByby1mb290ZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm8tYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAgMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgLjNlbSAwIDA7XHJcbiAgICAgICAgICBpbml0aWFsLWxldHRlcjogMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\masterpro\mePro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map