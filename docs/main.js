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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"mainpage\" style=\"height: 50em\">\r\n  <app-header></app-header>\r\n  <div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular62';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userlogin/userlogin.component */ "./src/app/userlogin/userlogin.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _menu_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/about/about.component */ "./src/app/menu/about/about.component.ts");
/* harmony import */ var _menu_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/contact/contact.component */ "./src/app/menu/contact/contact.component.ts");
/* harmony import */ var _menu_references_references_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/references/references.component */ "./src/app/menu/references/references.component.ts");
/* harmony import */ var _menu_customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/customer/customer-list/customer-list.component */ "./src/app/menu/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _menu_customer_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/customer/create-customer/create-customer.component */ "./src/app/menu/customer/create-customer/create-customer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'login', component: _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__["UserloginComponent"] },
    { path: '', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"] },
    { path: 'about', component: _menu_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'contact', component: _menu_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
    { path: 'references', component: _menu_references_references_component__WEBPACK_IMPORTED_MODULE_12__["ReferencesComponent"] },
    { path: 'customers', component: _menu_customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_13__["CustomerListComponent"] },
    { path: 'customers/add', component: _menu_customer_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_14__["CreateCustomerComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__["UserloginComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"],
                _menu_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _menu_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _menu_references_references_component__WEBPACK_IMPORTED_MODULE_12__["ReferencesComponent"],
                _menu_customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_13__["CustomerListComponent"],
                _menu_customer_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_14__["CreateCustomerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\r\n    color: hotpink;\r\n  }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\r\n  <div class=\"navbar-expand m-auto navbar-text\">\r\n    Made with <i class=\"fa fa-heart\"></i> by <a href=\"https://twitter.com/beeman_nl\">beeman</a>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\r\n  <a class=\"navbar-brand\" href=\"/\">Angular & Bootstrap</a>\r\n  <div class=\"navbar-expand mr-auto\">\r\n    <div class=\"navbar-nav\">\r\n      <a routerLink=\"\" class=\"nav-item nav-link\" routerLinkActive=\"active\" \r\n      [routerLinkActiveOptions]=\"{exact: true}\">Accueil</a>\r\n      <a routerLink=\"/about\" class=\"nav-item nav-link\" routerLinkActive=\"active\">Qui sommes nous?</a>\r\n      <a routerLink=\"/contact\" class=\"nav-item nav-link\" routerLinkActive=\"active\">Contact</a>\r\n      <a routerLink=\"/customers\" class=\"nav-item nav-link\" routerLinkActive=\"active\">Utilisateurs</a>\r\n      <a routerLink=\"/references\" class=\"nav-item nav-link\" routerLinkActive=\"active\">RéférencesG1</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"navbar-expand ml-auto navbar-nav\">\r\n      <a routerLink=\"/login\" class=\"nav-item nav-link\" routerLinkActive=\"active\"\r\n      [routerLinkActiveOptions]=\"{exact: false}\">Connexion</a>\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link\" href=\"https://github.com/beeman\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link\" href=\"https://twitter.com/beeman_nl\" target=\"_blank\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link\" href=\"https://medium.com/@beeman\" target=\"_blank\">\r\n        <i class=\"fa fa-medium\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Bienvenu sur le site du n° 1 en courtage assurance</h2>\r\n  <p>\r\n    Nous permettons aux entreprises de commercer avec confiance. Notre connaissance unique des sociétés, des industries\r\n    et des pays aide les clients à prendre des décisions d'affaires éclairées sans compromettre pas leurs résultats.\r\n    Nos services permettent aux entreprises de choisir les bons clients et marchés, en protégeant leur santé financière\r\n    et leur trésorerie de pertes sur créances irrécouvrables.\r\n  </p>\r\n<!-- <img src=\"https://www.lemoniteur.fr/mediatheque/9/2/1/000923129_620x393_c.jpg\" alt=\"\"> -->\r\n\r\n\r\n</div>\r\n\r\n<ngb-carousel *ngIf=\"images\"> \r\n    <ng-template ngbSlide>\r\n      <img [src]=\"images[0]\" alt=\"Random first slide\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>First slide label</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <img [src]=\"images[1]\" alt=\"Random second slide\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>Second slide label</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <img [src]=\"images[2]\" alt=\"Random third slide\">\r\n      <!-- <div class=\"carousel-caption\"> -->\r\n        <h3>Third slide label</h3>\r\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n      <!-- </div> -->\r\n    </ng-template>\r\n  </ngb-carousel>"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(config) {
        this.images = [1, 2, 3, 4].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        // customize default values of carousels used by this component tree
        config.interval = 2000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/menu/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/menu/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/menu/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Qui sommes nous ?</h2>\r\n  <p>\r\n    Notre ambition est de contribuer à la réussite financière des entreprises de toutes tailles, et avoir un impact\r\n    positif sur l'économie mondiale. Rien de moins.\r\n  </p>\r\n\r\n  <img src=\"https://www.petite-entreprise.net/images-donnees/cms/sources/about/equipe-P-Enet.jpg\" alt=\"\" style=\"width: inherit\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/menu/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/menu/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/menu/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/menu/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/menu/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/menu/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-form\">\r\n    <h1>Formulaire de contact</h1>\r\n    <hr>\r\n  \r\n    <div class=\"row\">\r\n     \r\n         <div class=\"col-md-6\">\r\n           <address>W-343 Coseis Meits UT</address>\r\n           <p>Email:- test@email.com</p>\r\n           <p>Phone:- 34563463434</p>\r\n         </div>\r\n  \r\n         <div class=\"col-md-6\">\r\n           \r\n           <div class=\"form-group\">\r\n             <label>Nom</label>\r\n             <input type=\"text\" class=\"form-control\">\r\n           </div>\r\n  \r\n           <div class=\"form-group\">\r\n             <label>Email</label>\r\n             <input type=\"text\" class=\"form-control\">\r\n           </div>\r\n  \r\n           <div class=\"form-group\">\r\n              <label>Téléphone</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n\r\n           <div class=\"form-group\">\r\n             <label>Message</label>\r\n             <textarea  class=\"form-control\" rows=\"7\"></textarea>\r\n           </div>\r\n  \r\n           <div class=\"form-group\">\r\n             <button class=\"btn btn-primary btn-block\">Envoyer</button>\r\n           </div>\r\n  \r\n         </div>\r\n  \r\n      </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/menu/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/menu/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/menu/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/menu/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/menu/customer/create-customer/create-customer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/menu/customer/create-customer/create-customer.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/customer/create-customer/create-customer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/menu/customer/create-customer/create-customer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>Create Customer</h3>\r\n    <div [hidden]=\"submitted\" style=\"width: 300px;\">\r\n      <form (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"customer.name\" name=\"name\">\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n          <label for=\"age\">Age</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"age\" required [(ngModel)]=\"customer.age\" name=\"age\">\r\n        </div>\r\n    \r\n        <button  type=\"submit\" style=\"margin:5px;\" class=\"btn btn-success\">Submit</button>\r\n        <a routerLink=\"../\" style=\"margin:5px;\" class=\"btn btn-danger active\" role=\"button\" routerLinkActive=\"active\">Cancel</a>\r\n        <!-- <button class=\"btn btn-danger\" type=\"reset\" >cancel</button> -->\r\n      </form>\r\n    </div>\r\n    \r\n    <div [hidden]=\"!submitted\">\r\n      <h4>You submitted successfully!</h4>\r\n      <button class=\"btn btn-success\" (click)=\"newCustomer()\">Add</button>\r\n    \r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/menu/customer/create-customer/create-customer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/menu/customer/create-customer/create-customer.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer */ "./src/app/menu/customer/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/menu/customer/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(customerService) {
        this.customerService = customerService;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
        this.submitted = false;
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent.prototype.newCustomer = function () {
        this.submitted = false;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
    };
    CreateCustomerComponent.prototype.save = function () {
        this.customerService.createCustomer(this.customer)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
    };
    CreateCustomerComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/menu/customer/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/menu/customer/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/menu/customer/customer-list/customer-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/menu/customer/customer-list/customer-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/customer/customer-list/customer-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/menu/customer/customer-list/customer-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Customers</h1>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n          <th>Name</th>\r\n          <th>Age</th>\r\n          <th>Status</th>\r\n          <th>Activate/Desactivate</th>\r\n          <th>Delete</th>\r\n      </thead>\r\n      <tbody>\r\n    <!-- <div *ngFor=\"let customer of customers | async\" style=\"width: 300px;\"> -->\r\n      <!-- <customer-details [customer]='customer'></customer-details> -->\r\n    \r\n          <tr *ngFor=\"let customer of customers | async\" style=\"width: 300px;\">\r\n              <td> {{customer.name}}</td>\r\n              <td>{{customer.age}}</td>\r\n              <td>{{customer.active}}</td>\r\n              <td>\r\n                <span class=\"button is-small btn-primary\" *ngIf='customer.active' (click)= 'updateActive(false, customer)'>Inactive</span>\r\n     \r\n                <span class=\"button is-small btn-primary\" *ngIf='!customer.active' (click)= 'updateActive(true, customer)'>Active</span>\r\n              </td>\r\n              <td>  <span class=\"button is-small btn-danger\" (click)= 'deleteCustomer(customer)'>Delete</span></td>\r\n          </tr>\r\n    \r\n    <!-- </div> -->\r\n    </tbody>\r\n    </table>\r\n    \r\n    \r\n\r\n    <div>\r\n      <button type=\"button\" style=\"margin:5px;\" class=\"btn btn-danger\" (click)='deleteCustomers()'>Tout supprimer</button>\r\n      <a routerLink=\"add\" style=\"margin:5px;\" class=\"btn btn-primary active\" role=\"button\" routerLinkActive=\"active\">Ajouter un utilisateur</a>\r\n    </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "./src/app/menu/customer/customer-list/customer-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/menu/customer/customer-list/customer-list.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/menu/customer/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService) {
        this.customerService = customerService;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    CustomerListComponent.prototype.updateActive = function (isActive, customer) {
        var _this = this;
        this.customerService.updateCustomer(customer.id, { name: customer.name, age: customer.age, active: isActive })
            .subscribe(function (data) {
            console.log(data);
            customer = data;
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    CustomerListComponent.prototype.deleteCustomer = function (customer) {
        var _this = this;
        this.customerService.deleteCustomer(customer.id)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    CustomerListComponent.prototype.deleteCustomers = function () {
        var _this = this;
        this.customerService.deleteAll()
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log('ERROR: ' + error); });
    };
    CustomerListComponent.prototype.reloadData = function () {
        this.customers = this.customerService.getCustomersList();
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/menu/customer/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/menu/customer/customer-list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/menu/customer/customer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/menu/customer/customer.service.ts ***!
  \***************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TOKEN = 'TOKEN';
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/customers';
    }
    CustomerService.prototype.getCustomer = function (id) {
        return this.http.get(this.baseUrl + "/" + id);
    };
    CustomerService.prototype.login = function (customer) {
        return this.http.post("" + this.baseUrl + "/login", customer);
    };
    CustomerService.prototype.createCustomer = function (customer) {
        return this.http.post("" + this.baseUrl + "/create", customer);
    };
    CustomerService.prototype.updateCustomer = function (id, value) {
        return this.http.put(this.baseUrl + "/" + id, value);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, { responseType: 'text' });
    };
    CustomerService.prototype.getCustomersList = function () {
        return this.http.get("" + this.baseUrl);
    };
    CustomerService.prototype.getCustomersByAge = function (age) {
        return this.http.get(this.baseUrl + "/age/" + age);
    };
    CustomerService.prototype.deleteAll = function () {
        return this.http.delete("" + this.baseUrl + "/delete", { responseType: 'text' });
    };
    CustomerService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN, token);
    };
    CustomerService.prototype.isLogged = function () {
        return localStorage.getItem(TOKEN) != null;
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/menu/customer/customer.ts":
/*!*******************************************!*\
  !*** ./src/app/menu/customer/customer.ts ***!
  \*******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/menu/references/references.component.css":
/*!**********************************************************!*\
  !*** ./src/app/menu/references/references.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/menu/references/references.component.html":
/*!***********************************************************!*\
  !*** ./src/app/menu/references/references.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group\">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" src=\"https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/Coface2018.svg/1200px-Coface2018.svg.png\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">This is a wider card with supporting .</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" src=\"http://audiotactic.fr/wp-content/uploads/2015/06/linkedin-logo-e1407144392549.png\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" src=\"http://www.eulerhermes.fr/SiteCollectionImages/EH_square_250.jpg\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">This is a wider card This card has even longer content than the first to show that equal height action.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Card title</h5>\r\n          <p class=\"card-text\"> This card has even longer content than the first to show that equal height action.</p>\r\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n        </div>\r\n      </div>\r\n  </div>\r\n      \r\n"

/***/ }),

/***/ "./src/app/menu/references/references.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu/references/references.component.ts ***!
  \*********************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferencesComponent = /** @class */ (function () {
    function ReferencesComponent() {
    }
    ReferencesComponent.prototype.ngOnInit = function () {
    };
    ReferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-references',
            template: __webpack_require__(/*! ./references.component.html */ "./src/app/menu/references/references.component.html"),
            styles: [__webpack_require__(/*! ./references.component.css */ "./src/app/menu/references/references.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferencesComponent);
    return ReferencesComponent;
}());



/***/ }),

/***/ "./src/app/userlogin/userlogin.component.css":
/*!***************************************************!*\
  !*** ./src/app/userlogin/userlogin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin{max-width:330px;margin:0 auto;padding:15px;}\r\n.form-signin .form-signin-heading,.form-signin .checkbox{margin-bottom:10px;}\r\n.form-signin .checkbox{font-weight:normal;}\r\n.form-signin .form-control{position:relative;font-size:16px;height:auto;box-sizing:border-box;padding:10px;}\r\n.form-signin .form-control:focus{z-index:2;}\r\n.form-signin input[type=\"text\"]{margin-bottom:-1px;border-bottom-left-radius:0;border-bottom-right-radius:0;}\r\n.form-signin input[type=\"password\"]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0;}\r\n.account-wall{margin-top:20px;background-color:#f7f7f7;box-shadow:0 2px 2px rgba(0,0,0,0.3);padding:40px 0 20px;}\r\n.login-title{color:#555;font-size:18px;font-weight:400;display:block;}\r\n.profile-img{width:96px;height:96px;display:block;border-radius:50%;margin:0 auto 10px;}\r\n.need-help{margin-top:10px;}\r\n.new-account{display:block;margin-top:10px;}"

/***/ }),

/***/ "./src/app/userlogin/userlogin.component.html":
/*!****************************************************!*\
  !*** ./src/app/userlogin/userlogin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"align-content: center\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\r\n            <h1 class=\"text-center login-title\">Sign in to continue to Bootsnipp</h1>\r\n            <div class=\"account-wall\">\r\n                <img class=\"profile-img\" src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\r\n                    alt=\"\">\r\n                <form class=\"form-signin\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus>\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n                    Sign in</button>\r\n                <label class=\"checkbox pull-left\">\r\n                    <input type=\"checkbox\" value=\"remember-me\">\r\n                    Remember me\r\n                </label>\r\n                <a href=\"#\" class=\"pull-right need-help\">Need help? </a><span class=\"clearfix\"></span>\r\n                </form>\r\n            </div>\r\n            <a href=\"#\" class=\"text-center new-account\">Create an account </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/userlogin/userlogin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/userlogin/userlogin.component.ts ***!
  \**************************************************/
/*! exports provided: UserloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserloginComponent", function() { return UserloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserloginComponent = /** @class */ (function () {
    function UserloginComponent(router) {
        this.router = router;
    }
    UserloginComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            uname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
            ])),
            passwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.passwordvalidation)
        });
    };
    UserloginComponent.prototype.passwordvalidation = function (formcontrol) {
        if (formcontrol.value.length < 5) {
            return { 'passwd': true };
        }
    };
    UserloginComponent.prototype.onClickSubmit = function (data) {
        console.log(data.uname);
        if (data.uname === 'systemadmin' && data.passwd === 'admin123') {
            alert('Login Successful');
            this.router.navigate(['app-mainpage']);
        }
        else {
            alert('Invalid Login');
            return false;
        }
    };
    UserloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlogin',
            template: __webpack_require__(/*! ./userlogin.component.html */ "./src/app/userlogin/userlogin.component.html"),
            styles: [__webpack_require__(/*! ./userlogin.component.css */ "./src/app/userlogin/userlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserloginComponent);
    return UserloginComponent;
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

module.exports = __webpack_require__(/*! C:\home\workspace2\angular6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map