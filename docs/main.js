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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/artist-preview/artist-preview.component */ "./src/app/components/artist-preview/artist-preview.component.ts");
/* harmony import */ var _components_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/house-detail/house-detail.component */ "./src/app/components/house-detail/house-detail.component.ts");
/* harmony import */ var _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/artist-detail/artist-detail.component */ "./src/app/components/artist-detail/artist-detail.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/components/playlist/playlist.component.ts");













var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'user/login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'user/register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/profile', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'music/artists', component: _components_artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_9__["ArtistPreviewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'music/house-record/detail/:id', component: _components_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_10__["HouseDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'music/artist/detail/:id', component: _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_11__["ArtistDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'music/playlist', component: _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_12__["PlaylistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_7__["Page404Component"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<div *ngIf=\"isLogged\" >\n    \n    <app-track-controls></app-track-controls>\n</div>"

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
        this.title = 'open-music-frontend';
        this.isLogged = false;
        this.val();
    }
    AppComponent.prototype.val = function () {
        if (localStorage.getItem('auth') == 'true') {
            //return true;
            this.isLogged = true;
        }
        else {
            // this.router.navigate(['/user/login']);
            //return false;
            this.isLogged = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/artist-preview/artist-preview.component */ "./src/app/components/artist-preview/artist-preview.component.ts");
/* harmony import */ var _components_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/house-detail/house-detail.component */ "./src/app/components/house-detail/house-detail.component.ts");
/* harmony import */ var _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/artist-detail/artist-detail.component */ "./src/app/components/artist-detail/artist-detail.component.ts");
/* harmony import */ var _components_track_controls_track_controls_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/track-controls/track-controls.component */ "./src/app/components/track-controls/track-controls.component.ts");
/* harmony import */ var _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/playlist/playlist.component */ "./src/app/components/playlist/playlist.component.ts");






//new 















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileComponent"],
                _components_artist_preview_artist_preview_component__WEBPACK_IMPORTED_MODULE_16__["ArtistPreviewComponent"],
                _components_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_17__["HouseDetailComponent"],
                _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_18__["ArtistDetailComponent"],
                _components_track_controls_track_controls_component__WEBPACK_IMPORTED_MODULE_19__["TrackControlsComponent"],
                _components_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_20__["PlaylistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/artist-detail/artist-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/artist-detail/artist-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-size: .875rem;\n  }\n  \n  .feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    /* position: float; */\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    /* padding: 48px 0 0; Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    padding-top: 48px;\n  }\n  \n  .sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: .5rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    /* margin-top: 133px; */\n    /* -top: 133px; Space for fixed navbar */\n    \n\n  }\n  \n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n  \n  .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n  }\n  \n  .sidebar .nav-link .feather {\n    /* margin-top: 1px; */\n    margin-right: 4px;\n    color: #999;\n  }\n  \n  .sidebar .nav-link.active {\n    color: #007bff;\n  }\n  \n  .sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n  \n  .sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n  \n  .material-icons{\n      /* padding-top: 10px; */\n    margin-top: 10px;\n }\n  \n  /*\n   * Content\n   */\n  \n  [role=\"main\"] {\n    padding-top: 133px; /* Space for fixed navbar */\n  }\n  \n  @media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 48px; /* Space for fixed navbar */\n    }\n  }\n  \n  /*\n   * Navbar\n   */\n  \n  .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  \n  .navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n  \n  .form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n  \n  .form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  }\n  \n  .crop{\n    width: 100%;\n    height: 250px;\n    overflow: hidden;\n  }\n  \n  .crop img{\n    margin: -200px 0 0  0;\n    /* opacity: 0.5; */\n    -webkit-filter: blur(15px);\n            filter: blur(15px);\n    /* filter: contrast(50%); */\n\n  }\n  \n  .custom-text{\n    font-family: 'Fugaz One';\n    font-size: 55px;\n    /* color: red; */\n  }\n  \n  .card{\n    margin: 8px;\n  }\n  \n  .table{\n    margin-top: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpc3QtZGV0YWlsL2FydGlzdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0VBQzdCOztFQUVBOztJQUVFOztFQUVGO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxZQUFZLEVBQUUsc0JBQXNCO0lBQ3BDLHdDQUF3QztJQUN4Qyw0Q0FBNEM7SUFDNUMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7SUFDL0UsdUJBQXVCO0lBQ3ZCLHdDQUF3Qzs7O0VBRzFDOztFQUVBO0lBQ0U7TUFDRSx3QkFBd0I7TUFDeEIsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCOztFQUVEO01BQ0ssdUJBQXVCO0lBQ3pCLGdCQUFnQjtDQUNuQjs7RUFDQzs7SUFFRTs7RUFFRjtJQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtFQUNqRDs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0lBQ2hEO0VBQ0Y7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7RUFDaEQ7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBMkI7O0VBRTdCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGlzdC1kZXRhaWwvYXJ0aXN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xuICB9XG4gIFxuICAuZmVhdGhlciB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgfVxuICBcbiAgLypcbiAgICogU2lkZWJhclxuICAgKi9cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICAvKiBwb3NpdGlvbjogZmxvYXQ7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXG4gICAgLyogcGFkZGluZzogNDhweCAwIDA7IEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgfVxuICBcbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbiAgICAvKiBtYXJnaW4tdG9wOiAxMzNweDsgKi9cbiAgICAvKiAtdG9wOiAxMzNweDsgU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICAgIFxuXG4gIH1cbiAgXG4gIEBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XG4gICAgLnNpZGViYXItc3RpY2t5IHtcbiAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gICAgLyogbWFyZ2luLXRvcDogMXB4OyAqL1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICBcbiAgLnNpZGViYXItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAubWF0ZXJpYWwtaWNvbnN7XG4gICAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuIH1cbiAgLypcbiAgICogQ29udGVudFxuICAgKi9cbiAgXG4gIFtyb2xlPVwibWFpblwiXSB7XG4gICAgcGFkZGluZy10b3A6IDEzM3B4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIFtyb2xlPVwibWFpblwiXSB7XG4gICAgICBwYWRkaW5nLXRvcDogNDhweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICAgIH1cbiAgfVxuICBcbiAgLypcbiAgICogTmF2YmFyXG4gICAqL1xuICBcbiAgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICB9XG4gIFxuICAubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sLWRhcmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xuICB9XG5cblxuICAuY3JvcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuY3JvcCBpbWd7XG4gICAgbWFyZ2luOiAtMjAwcHggMCAwICAwO1xuICAgIC8qIG9wYWNpdHk6IDAuNTsgKi9cbiAgICBmaWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgLyogZmlsdGVyOiBjb250cmFzdCg1MCUpOyAqL1xuXG4gIH1cblxuICAuY3VzdG9tLXRleHR7XG4gICAgZm9udC1mYW1pbHk6ICdGdWdheiBPbmUnO1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAvKiBjb2xvcjogcmVkOyAqL1xuICB9XG5cbiAgLmNhcmR7XG4gICAgbWFyZ2luOiA4cHg7XG4gIH1cblxuICAudGFibGV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/artist-detail/artist-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/artist-detail/artist-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href='https://fonts.googleapis.com/css?family=Fugaz One' rel='stylesheet'>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n        <div class=\"sidebar-sticky\">\n          <ul class=\"nav flex-column\">\n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#\">\n                <span data-feather=\"home\"></span>\n                Dashboard <span class=\"sr-only\">(current)</span>\n              </a>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink='/'>\n                <span data-feather=\"file\"></span>\n                <!-- <i class=\"material-icons\">explore</i> -->\n                Browse\n              </a>\n            </li>\n            \n          </ul>\n  \n          <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n            <span>library</span>\n            <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n              <span data-feather=\"plus-circle\"></span>\n            </a>\n          </h6>\n          <ul class=\"nav flex-column mb-2\">\n            <!-- <li class=\"nav-item align-items-center d-flex\">\n              <a class=\"nav-link\" routerLink=\"/music/artists\">\n                <span data-feather=\"file-text\"></span>\n                Artists\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">\n                <span data-feather=\"file-text\"></span>\n                Albums\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">\n                <span data-feather=\"file-text\"></span>\n                Songs\n              </a>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/music/playlist\">\n                <span data-feather=\"file-text\"></span>\n                Playlists\n              </a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n      \n      \n      <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n        \n        <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <div class=\"crop\">\n                <img class=\"d-block w-100\" src=\"data:image/png;base64,{{artista.foto}}\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-caption d-none d-md-block\">\n                  \n                <h3 class=\"custom-text\">{{artista.nombre}}</h3>\n                </div>\n            </div>\n            \n          </div>\n        </div>\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">nombre</th>\n              <th scope=\"col\"></th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of canciones; let i = index\">\n              <th scope=\"row\">{{i+1}}</th>\n              <td>{{item.nombre}}</td>\n              <td></td>\n              <td>\n                <button class=\"btn btn-success btn-sm \" (click)=\"playAudio(item._id)\">play</button>\n                <button class=\"btn btn-outline-primary btn-sm \" (click)=\"addTrack(item._id)\" >add</button>              \n              </td>\n\n              <!-- <td><button>agregar</button></td> -->\n\n              <!-- play_arrow -->\n            </tr>\n            \n          </tbody>\n        </table>\n\n\n\n\n        \n        \n      </main>\n  \n  \n    </div>\n  \n  </div>\n  <div>\n    \n    <router-outlet></router-outlet>\n  </div>\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/components/artist-detail/artist-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/artist-detail/artist-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArtistDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDetailComponent", function() { return ArtistDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_models_cancion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/cancion */ "./src/app/models/cancion.ts");
/* harmony import */ var src_app_models_artist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/artist */ "./src/app/models/artist.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/track-controls.service */ "./src/app/services/track-controls.service.ts");


// new 





var ArtistDetailComponent = /** @class */ (function () {
    function ArtistDetailComponent(dataService, route, trackControl) {
        this.dataService = dataService;
        this.route = route;
        this.trackControl = trackControl;
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
        this.artista = new src_app_models_artist__WEBPACK_IMPORTED_MODULE_4__["Artist"]();
        this.canciones = [];
        var _id = this.route.snapshot.params["id"];
        this.getTracks(_id);
    };
    ArtistDetailComponent.prototype.getTracks = function (id) {
        var _this = this;
        this.dataService.getArtistTracks(id)
            .subscribe(function (data) {
            //console.log(data.artistamas);
            _this.artista.nombre = data.artistamas.nombre;
            _this.artista.foto = data.artistamas.foto;
            for (var i = 0; i < data.artistamas.canciones.length; i++) {
                var buffer_obj = new src_app_models_cancion__WEBPACK_IMPORTED_MODULE_3__["Cancion"]();
                buffer_obj.nombre = data.artistamas.canciones[i].nombre;
                buffer_obj.imagen = data.artistamas.canciones[i].imagen;
                buffer_obj._id = data.artistamas.canciones[i]._id;
                _this.canciones.push(buffer_obj);
            }
        });
    };
    ArtistDetailComponent.prototype.playAudio = function (_id) {
        console.log(_id);
        //console.log("sa");
        //this.trackControl.playAudio(_id);
        this.trackControl.sendMessage(_id);
    };
    ArtistDetailComponent.prototype.addTrack = function (_id) {
        var _this = this;
        // this.dataService.addTrackToPlaylist()
        this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
            .subscribe(function (data) {
            console.log(data.playlists[0]._id);
            _this.dataService.addTrackToPlaylist(data.playlists[0]._id, _id)
                .subscribe(function (datat) {
                console.log(datat);
            });
            // localStorage.setItem('idPlaylist', data.playlists[0]._id);
        });
    };
    ArtistDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist-detail',
            template: __webpack_require__(/*! ./artist-detail.component.html */ "./src/app/components/artist-detail/artist-detail.component.html"),
            styles: [__webpack_require__(/*! ./artist-detail.component.css */ "./src/app/components/artist-detail/artist-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_6__["TrackControlsService"]])
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/artist-preview/artist-preview.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/artist-preview/artist-preview.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LXByZXZpZXcvYXJ0aXN0LXByZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/artist-preview/artist-preview.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/artist-preview/artist-preview.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  artist-preview works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/artist-preview/artist-preview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/artist-preview/artist-preview.component.ts ***!
  \***********************************************************************/
/*! exports provided: ArtistPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPreviewComponent", function() { return ArtistPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtistPreviewComponent = /** @class */ (function () {
    function ArtistPreviewComponent() {
    }
    ArtistPreviewComponent.prototype.ngOnInit = function () {
    };
    ArtistPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist-preview',
            template: __webpack_require__(/*! ./artist-preview.component.html */ "./src/app/components/artist-preview/artist-preview.component.html"),
            styles: [__webpack_require__(/*! ./artist-preview.component.css */ "./src/app/components/artist-preview/artist-preview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtistPreviewComponent);
    return ArtistPreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-size: .875rem;\n  }\n  \n  .feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    /* position: float; */\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    /* padding: 48px 0 0; Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    padding-top: 48px;\n  }\n  \n  .sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: .5rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    /* margin-top: 133px; */\n    /* -top: 133px; Space for fixed navbar */\n    \n\n  }\n  \n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n  \n  .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n  }\n  \n  .sidebar .nav-link .feather {\n    /* margin-top: 1px; */\n    margin-right: 4px;\n    color: #999;\n  }\n  \n  .sidebar .nav-link.active {\n    color: #007bff;\n  }\n  \n  .sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n  \n  .sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n  \n  .material-icons{\n      /* padding-top: 10px; */\n    margin-top: 10px;\n }\n  \n  /*\n   * Content\n   */\n  \n  [role=\"main\"] {\n    padding-top: 133px; /* Space for fixed navbar */\n  }\n  \n  @media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 48px; /* Space for fixed navbar */\n    }\n  }\n  \n  /*\n   * Navbar\n   */\n  \n  .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  \n  .navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n  \n  .form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n  \n  .form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0VBQzdCOztFQUVBOztJQUVFOztFQUVGO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxZQUFZLEVBQUUsc0JBQXNCO0lBQ3BDLHdDQUF3QztJQUN4Qyw0Q0FBNEM7SUFDNUMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7SUFDL0UsdUJBQXVCO0lBQ3ZCLHdDQUF3Qzs7O0VBRzFDOztFQUVBO0lBQ0U7TUFDRSx3QkFBd0I7TUFDeEIsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCOztFQUVEO01BQ0ssdUJBQXVCO0lBQ3pCLGdCQUFnQjtDQUNuQjs7RUFDQzs7SUFFRTs7RUFFRjtJQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtFQUNqRDs7RUFFQTtJQUNFO01BQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0lBQ2hEO0VBQ0Y7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7RUFDaEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xuICB9XG4gIFxuICAuZmVhdGhlciB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgfVxuICBcbiAgLypcbiAgICogU2lkZWJhclxuICAgKi9cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICAvKiBwb3NpdGlvbjogZmxvYXQ7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXG4gICAgLyogcGFkZGluZzogNDhweCAwIDA7IEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgfVxuICBcbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbiAgICAvKiBtYXJnaW4tdG9wOiAxMzNweDsgKi9cbiAgICAvKiAtdG9wOiAxMzNweDsgU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICAgIFxuXG4gIH1cbiAgXG4gIEBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XG4gICAgLnNpZGViYXItc3RpY2t5IHtcbiAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gICAgLyogbWFyZ2luLXRvcDogMXB4OyAqL1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICBcbiAgLnNpZGViYXItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAubWF0ZXJpYWwtaWNvbnN7XG4gICAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuIH1cbiAgLypcbiAgICogQ29udGVudFxuICAgKi9cbiAgXG4gIFtyb2xlPVwibWFpblwiXSB7XG4gICAgcGFkZGluZy10b3A6IDEzM3B4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIFtyb2xlPVwibWFpblwiXSB7XG4gICAgICBwYWRkaW5nLXRvcDogNDhweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICAgIH1cbiAgfVxuICBcbiAgLypcbiAgICogTmF2YmFyXG4gICAqL1xuICBcbiAgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICB9XG4gIFxuICAubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sLWRhcmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#\">\n              <span data-feather=\"home\"></span>\n              Dashboard <span class=\"sr-only\">(current)</span>\n            </a>\n          </li> -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink='/'>\n              <span data-feather=\"file\"></span>\n              <!-- <i class=\"material-icons\">explore</i> -->\n              Browse\n            </a>\n          </li>\n          \n        </ul>\n\n        <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n          <span>library</span>\n          <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n            <span data-feather=\"plus-circle\"></span>\n          </a>\n        </h6>\n        <ul class=\"nav flex-column mb-2\">\n          <!-- <li class=\"nav-item align-items-center d-flex\">\n            <a class=\"nav-link\" routerLink=\"/music/artists\">\n              <span data-feather=\"file-text\"></span>\n              Artists\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"file-text\"></span>\n              Albums\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <span data-feather=\"file-text\"></span>\n              Songs\n            </a>\n          </li> -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/music/playlist\">\n              <span data-feather=\"file-text\"></span>\n              Playlists\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n        \n        <h3>Top songs</h3>\n        \n      </div>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">nombre</th>\n            <th scope=\"col\">artista</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of canciones; let i = index\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{item.nombre}}</td>\n            <td>{{item.artista}}</td>\n            <td>\n              <button class=\"btn btn-success btn-sm \" (click)=\"playAudio(item._id)\" >play</button>\n              <button class=\"btn btn-outline-primary btn-sm \" (click)=\"addTrack(item._id)\" >add</button>\n            \n            </td>\n            <!-- <td><button>agregar</button></td> -->\n\n            <!-- play_arrow -->\n          </tr>\n          \n        </tbody>\n      </table>\n\n\n\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n          <h3>House records</h3> \n      </div>\n      \n      <div class=\"card-group\">\n\n        <div *ngFor=\"let item of casas\" class=\"card bg-primary text-white\" style=\"width: 18rem;\">\n            <a routerLink='/music/house-record/detail/{{item._id}}'>\n              <img class=\"card-img-top\" src=\"data:image/jpg;base64,{{item.foto}}\" alt=\"Card image cap\">\n            </a>\n            <div class=\"card-body\">\n              <p class=\"card-text\">{{item.nombre}}</p>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n          <h3>House records</h3> \n      </div>\n      \n      \n    </main>\n\n\n  </div>\n\n</div>\n<div>\n\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_models_discograph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/discograph */ "./src/app/models/discograph.ts");
/* harmony import */ var src_app_models_cancion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cancion */ "./src/app/models/cancion.ts");
/* harmony import */ var src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/track-controls.service */ "./src/app/services/track-controls.service.ts");





// import { TrackControlsComponent } from 'src/app/components/track-controls/track-controls.component';

var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, trackControl) {
        this.dataService = dataService;
        this.trackControl = trackControl;
        this.audio = new Audio();
        this.base64 = "iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///95eXlVVVVcXFzl5eX8/Pz29vbo6Oifn5/d3d20tLTr6+tzc3P4+Pju7u4/Pz/Ly8vV1dWKiorBwcEkJCSsrKzNzc1tbW26urqdnZ1FRUWysrIaGhplZWUoKCg0NDSBgYEODg44ODiPj48bGxtPT08lJSWNjY08PDwSEhJYWFg7CUlFAAAJ2klEQVR4nO2da3eqOhCGkyogKCAXUaQqXvfW/v//dxLRtmYCTJB2L8+a51O9xMlLkkkyuZQxgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCaOPuHPLZGEsubZ8n6+IPGjuskm3s3a3F+8M8/aOyKP57YXMHxlqcfMXZaeo5qzJ6M/R8xdqUYB6rBO6PDpWdjl+WkzljwXvRsrGId11msyDc9GtvkzcbiYY/GKgYt+iTvq56Mzd7bjcX9tozjuN2kwNn2Yi0BrU//QHtsGOuQA/+iJyqfNrZH1JaKyfp5aRUu1qTAedbqAleAFcte9F3mBiYFyVPWlmbG0h4E/rHMbHLuPmEN4WIeiXfPCpzV9kp12DzrbC3FtvcvrCf9zSw0tSh57yywA9ZzCjsJ7FpRW3r5H5HodbPJeZeOcWleRSui7gJx/bwO23xUtehsrHvDT2p/chKn4yzLIzj2vxP+MTRW1v6U40V5lo3TuN7pvXUTWAT6WhMfis8B6ObDtfSVa25oTTuSsbnlfnyO6FfFoWa84+w7KYy1Wc+n6vfW+tZq1hT19cUDI6Sp3h11aopbrUmgT/KmmTfa3MTYRfc0A23lm2ofaId6etS1i7peYKWrPSYjqkijMK6bjOnGyaH5zE33Mw0PSld58DO4kyZ1Xv/1N83XjQfhM1DxbLsxQKLpWfCNQzO4Hzd937dhtMi0EDXdb4vriLoX4gkaa3k62+cLUW2FiPE0nIQ0lsM3YBVvHYll4KE4SGM3fGDTa02zB2nCGcrYDDq19v4NetQFytgdWOUQATw4e8X5cOg4EDWuAInM+kSQHDX0A/UUN7ABfgY1W8hAHlHGboCnGqA8FajbDqaawkqKimqvgLc36fWB60eO3kEhJh/DNj7AgA054QOFiHVsEjCKL3HpDONINSD9fqmmm+AFHlVP3O5IK6Yd57AP2NqxrwbVndr4VbB1x6f6RFDgG9jHCWsMPlYLWgZ6rQc6OHPQM3bQYeBDteqo20anfCIU8Qm+51bbBD4Apkb18NEs3STBFPyURHXd+PmaOtvDp+wWX30AOdSTqCURo1Oq/sKgoxk9rXCEN6Z222gfBUrfIFpnvMoBMAjwqn4Nn1TNpsHU61cVqt0FKazP5v+vlqqepiEopLAzXowDTPArgmpsAO9p1AkbPn4NYvPh6IY613HuH6j9i1P+Qj7VZ4MftA/VEvlcoVFHguv2JK2oFQZf18CQFp1yq6b8HNGqk+rB/QMwusQvB6gp8R4R5BM9aFdHGc7nskqtwo1asdEjKDAFwj+bgZoUvWytutKvtl+rEPg1tEcE2xoG7WnudI1FgkfzFf+qVwjietiMqoUf4AXCiSyy9YP4zteMrV4hmI0ih8HAReE7C82yDM4Pw8WOr5lQvUIw4wpwswsQhDTZHwFqG27SBh7MtyZVrxCOg1BZhVNRg2YIqzhq6jUDcahvHqpBIajbNqYQwZKl2cIF3H2F8MRww8+35tugEHh9TIexBYnM9inBVYGwbEsDV3O++/0GhZrhemvUu1QHezZiNecBGBZsq6d7uHXjgFR4UBPaQVt24bI6PoRRoQmaNTvxC5xVON831TUphD6YT5o35GlWnM0W15im5jSvka40seAHl9ikUBdm9ZrWguD6qFFnWAFbVdPY/ayZ+T76tkaFO812Fav+8IhuW4RxEepqul2znUZk39EsWDxGoBsV6rYN2E7NatnU02xNMd2CJRnoVlnspabyFNp9ocoAulmhPgqZalYTVktdvoJOZ0z0axChq/zYMLe128OUr7UohKMoWWfsXBkQF64+5NxxS3vNQpLtuX5xDaYcB9uxPgRsP/QUCIW1BwJG4+3gumq2K3zXq1m9M+0p7hQ23JjzKcFxnJq9i1dAu2hTqN+ceDMWCGv1WeFB2VGh8KddVzxhd9aqcNN1ycM2iOwAuq5aO9DntirUuzYMT51F6rYPWrcHul2htgtG8Mz5DiY7V/Mna+t6X4RC7Z7DVrqf7rhhXoq2NjKHUdilFJ8WKN24WSk6+nAASiEb6vvWeno527U1MmmV+l/BKWRTo4WP5i2veE5oP27Xz86RCtlOs0+1jgl250072PM6+r3nRgpFncHWU5NdXq0MUeuCacOmJLxCtkGd8LL6PuychLzFCcQfTekNFIoH2nxSVuRj1M+R4wcuSdOWLjtqWb0xUsjYOmp6nN5zB1XrGaY1ns5Tp1QQQ4VyolTzRCfqlKpXLgM3evSstpUmmMsqjBUKzklqPRZlGLmDvm9v0LA5vR2yLB9n7t9Fgd3B1EWhZFYs/rrZOM+yw9upz2sbeqerwteBFL4+pPD1IYWvDyl8fUjh60MKXx9S+PqQwteHFL4+pPD1IYWvDyl8fUr3kb5u5CUIgiAIgiAIgiAIgiAI4kWYfd+xW7+b9lh9bVd9Y3Xf0398SKFegXWZad/+VQ5WGMrLGg5yG/uH51hyB/3htg07tKz5grHcYn8i8bULK/NJOPLZPg3D6/9NG8ah401L8b1Ixoc38peWI2sUnscjxgqRyDoxVvZwsqkzGQ/mnrwmK5Tn2B37PZT/nCi8nZvh4TzgCYs5y3k0t6fHEbfmYbYKuRfLi5nWNo/S0N9zK7X5Sp4+2suf9OZxOeescMRfQSIvXPh3e59LPikZO+3YWt4HdeEWu+zkxTi3q0l4zs5OwOa2EDllG/Yuz5ntilyexhryCfOu10/NzuLtpbzHOZafZ9cT0hFnKf8rN3nL08j9/GeuLhxkJiRRIA82e9U/3IicW5bkBQVjXgqFCQ/EW1Z193VwvRst5UMes816WJz5u1BUsBMPHalQnmWK+C64nXYf8jD8dWV3lrcbtGc8ieSdnJktRJXiRZUlqVBkWChk/oQ77JbT6qB+xhc8lcs10Uau04gmmE/WfFsdkd9E/Hg/nx1ZC9z93j+Bf7tGQuTWFTVux1YWL8RfbpUl+anHL/PrHb1jvoyqS9E8W9bDkG9EYV72drrhsWPJ63vmheOJ38rdTNZSy7me4ijttLC7HkZ/npC/Dxc5C+Sp9qgcHUqPnybyjKQ8q77j0Um4GNkO82jvcnfNw+3gcPD5yB/ORallPC3+SIXuVjyMg7xggO8/2+Ffbr0NXH95fbv8Vwqn8kSblfBlWcZ8LV+k2+rFQCoUREfpS+VZNGfPDvL8y7I6IC797fWIWl4KsSk/TJxp6fM0uy4sijRVfX1zJvvyzeC6wL7ZLZLt+eQLVz/1N7u3ZMEK+eLsl+JDf7GWXmMg+sRhspXvnLfJQnxcbJOqyxyI17OLX7DVYuHLk28ixWJ2S8NO22S98k/Xt/+JOoIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIL4//Ef49iA1xLeLgQAAAAASUVORK5CYII=";
        this.house_buffer = new src_app_models_discograph__WEBPACK_IMPORTED_MODULE_3__["Discograph"]();
        this.casas = [];
        this.canciones = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.audio.src = "http://ec2-18-224-151-212.us-east-2.compute.amazonaws.com:3005/tracks/5cfa921f4af5626c7c17dde6";
        // this.audio.load();
        // this.audio.play();
        this.setDiscography();
        this.setTopTracks();
        //this.setIdPlaylist();
    };
    HomeComponent.prototype.setDiscography = function () {
        var _this = this;
        this.dataService.getDiscographyHouse()
            .subscribe(function (data) {
            //console.log(data);
            //console.log(data);
            for (var i = 0; i < data.casas.length; i++) {
                //console.log(i);
                //console.log(data.casas[i].nombre);
                //console.log(data.casas.nombre);
                var buffer_obj = new src_app_models_discograph__WEBPACK_IMPORTED_MODULE_3__["Discograph"]();
                buffer_obj.nombre = data.casas[i].nombre;
                buffer_obj.foto = data.casas[i].foto;
                buffer_obj._id = data.casas[i]._id;
                _this.casas.push(buffer_obj);
            }
            // for (var p of this.casas){
            //   console.log(p._id);
            // }
        });
    };
    HomeComponent.prototype.setTopTracks = function () {
        var _this = this;
        this.dataService.getTopTracks()
            .subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.canciones.length; i++) {
                var buffer_obj = new src_app_models_cancion__WEBPACK_IMPORTED_MODULE_4__["Cancion"]();
                buffer_obj.nombre = data.canciones[i].nombre;
                buffer_obj.imagen = data.canciones[i].imagen;
                buffer_obj._id = data.canciones[i]._id;
                buffer_obj.artista = data.canciones[i].artista.nombre;
                // console.log(buffer_obj.nombre);
                _this.canciones.push(buffer_obj);
            }
        });
    };
    HomeComponent.prototype.playAudio = function (_id) {
        console.log(_id);
        //console.log("sa");
        //this.trackControl.playAudio(_id);
        this.trackControl.sendMessage(_id);
    };
    HomeComponent.prototype.addTrack = function (_id) {
        var _this = this;
        // this.dataService.addTrackToPlaylist()
        this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
            .subscribe(function (data) {
            console.log(data.playlists[0]._id);
            _this.dataService.addTrackToPlaylist(data.playlists[0]._id, _id)
                .subscribe(function (datat) {
                console.log(datat);
            });
            // localStorage.setItem('idPlaylist', data.playlists[0]._id);
        });
    };
    HomeComponent.prototype.setIdPlaylist = function () {
        this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
            .subscribe(function (data) {
            console.log(data.playlists[0]._id);
            // localStorage.setItem('idPlaylist', data.playlists[0]._id);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_5__["TrackControlsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/house-detail/house-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/house-detail/house-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-size: .875rem;\n  }\n  \n  .feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    /* position: float; */\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    /* padding: 48px 0 0; Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    padding-top: 48px;\n  }\n  \n  .sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: .5rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    /* margin-top: 133px; */\n    /* -top: 133px; Space for fixed navbar */\n    \n\n  }\n  \n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n  \n  .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n  }\n  \n  .sidebar .nav-link .feather {\n    /* margin-top: 1px; */\n    margin-right: 4px;\n    color: #999;\n  }\n  \n  .sidebar .nav-link.active {\n    color: #007bff;\n  }\n  \n  .sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n  \n  .sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n  \n  .material-icons{\n      /* padding-top: 10px; */\n    margin-top: 10px;\n }\n  \n  /*\n   * Content\n   */\n  \n  [role=\"main\"] {\n    padding-top: 133px; /* Space for fixed navbar */\n  }\n  \n  @media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 48px; /* Space for fixed navbar */\n    }\n  }\n  \n  /*\n   * Navbar\n   */\n  \n  .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  \n  .navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n  \n  .form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n  \n  .form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  }\n  \n  .crop{\n    width: 100%;\n    height: 250px;\n    overflow: hidden;\n  }\n  \n  .crop img{\n    margin: -200px 0 0  0;\n    /* opacity: 0.5; */\n    -webkit-filter: blur(15px);\n            filter: blur(15px);\n    /* filter: contrast(50%); */\n\n  }\n  \n  .custom-text{\n    font-family: 'Fugaz One';\n    font-size: 55px;\n    /* color: red; */\n  }\n  \n  .card{\n    margin: 8px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3VzZS1kZXRhaWwvaG91c2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtFQUM3Qjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyx3Q0FBd0M7SUFDeEMsNENBQTRDO0lBQzVDLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUUsNkRBQTZEO0lBQy9FLHVCQUF1QjtJQUN2Qix3Q0FBd0M7OztFQUcxQzs7RUFFQTtJQUNFO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFRDtNQUNLLHVCQUF1QjtJQUN6QixnQkFBZ0I7Q0FDbkI7O0VBQ0M7O0lBRUU7O0VBRUY7SUFDRSxrQkFBa0IsRUFBRSwyQkFBMkI7RUFDakQ7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQixFQUFFLDJCQUEyQjtJQUNoRDtFQUNGOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsOENBQThDO0VBQ2hEOztFQUdBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUFrQjtZQUFsQixrQkFBa0I7SUFDbEIsMkJBQTJCOztFQUU3Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob3VzZS1kZXRhaWwvaG91c2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250LXNpemU6IC44NzVyZW07XG4gIH1cbiAgXG4gIC5mZWF0aGVyIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB9XG4gIFxuICAvKlxuICAgKiBTaWRlYmFyXG4gICAqL1xuICBcbiAgLnNpZGViYXIge1xuICAgIC8qIHBvc2l0aW9uOiBmbG9hdDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgICAvKiBwYWRkaW5nOiA0OHB4IDAgMDsgSGVpZ2h0IG9mIG5hdmJhciAqL1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xuICB9XG4gIFxuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xuICAgIC8qIG1hcmdpbi10b3A6IDEzM3B4OyAqL1xuICAgIC8qIC10b3A6IDEzM3B4OyBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gICAgXG5cbiAgfVxuICBcbiAgQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcbiAgICAuc2lkZWJhci1zdGlja3kge1xuICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgICAvKiBtYXJnaW4tdG9wOiAxcHg7ICovXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4gIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIFxuICAuc2lkZWJhci1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuIC5tYXRlcmlhbC1pY29uc3tcbiAgICAgIC8qIHBhZGRpbmctdG9wOiAxMHB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gfVxuICAvKlxuICAgKiBDb250ZW50XG4gICAqL1xuICBcbiAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogMTMzcHg7IC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXG4gICAgfVxuICB9XG4gIFxuICAvKlxuICAgKiBOYXZiYXJcbiAgICovXG4gIFxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIH1cbiAgXG4gIC5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wtZGFyayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XG4gIH1cblxuXG4gIC5jcm9we1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5jcm9wIGltZ3tcbiAgICBtYXJnaW46IC0yMDBweCAwIDAgIDA7XG4gICAgLyogb3BhY2l0eTogMC41OyAqL1xuICAgIGZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAvKiBmaWx0ZXI6IGNvbnRyYXN0KDUwJSk7ICovXG5cbiAgfVxuXG4gIC5jdXN0b20tdGV4dHtcbiAgICBmb250LWZhbWlseTogJ0Z1Z2F6IE9uZSc7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIC8qIGNvbG9yOiByZWQ7ICovXG4gIH1cblxuICAuY2FyZHtcbiAgICBtYXJnaW46IDhweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/house-detail/house-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/house-detail/house-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href='https://fonts.googleapis.com/css?family=Fugaz One' rel='stylesheet'>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n        <div class=\"sidebar-sticky\">\n          <ul class=\"nav flex-column\">\n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#\">\n                <span data-feather=\"home\"></span>\n                Dashboard <span class=\"sr-only\">(current)</span>\n              </a>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink='/'>\n                <span data-feather=\"file\"></span>\n                <!-- <i class=\"material-icons\">explore</i> -->\n                Browse\n              </a>\n            </li>\n            \n          </ul>\n  \n          <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n            <span>library</span>\n            <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n              <span data-feather=\"plus-circle\"></span>\n            </a>\n          </h6>\n          <ul class=\"nav flex-column mb-2\">\n            <!-- <li class=\"nav-item align-items-center d-flex\">\n              <a class=\"nav-link\" routerLink=\"/music/artists\">\n                <span data-feather=\"file-text\"></span>\n                Artists\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">\n                <span data-feather=\"file-text\"></span>\n                Albums\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">\n                <span data-feather=\"file-text\"></span>\n                Songs\n              </a>\n            </li>\n            -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/music/playlist\">\n                <span data-feather=\"file-text\"></span>\n                Playlists\n              </a>\n            </li> \n          </ul>\n        </div>\n      </nav>\n      \n      \n      <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n        \n        <!-- <img class=\"card-img-top\" src=\"data:image/jpg;base64,{{house.foto}}\" alt=\"Card image cap\"> -->\n        <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <div class=\"crop\">\n                <img class=\"d-block w-100\" src=\"data:image/png;base64,{{house.foto}}\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-caption d-none d-md-block\">\n                  \n                <h3 class=\"custom-text\">{{house.nombre}}</h3>\n                  <!-- <p>.fa..</p> -->\n                </div>\n            </div>\n            \n          </div>\n        </div>\n\n\n          <div class=\"row \">\n\n            <div *ngFor=\"let item of artists\" class=\"card bg-dark text-white \" style=\"width: 16rem;\">\n                <a routerLink='/music/artist/detail/{{item._id}}'>\n                  <img class=\"card-img-top\" src=\"data:image/jpg;base64,{{item.foto}}\" alt=\"Card image cap\">\n                </a>\n                <div class=\"card-body\">\n                  <p class=\"card-text\">{{item.nombre}}</p>\n                </div>\n              </div>\n\n\n        </div>\n        \n        \n      </main>\n  \n  \n    </div>\n  \n  </div>\n  <div>\n    \n    <router-outlet></router-outlet>\n  </div>\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/components/house-detail/house-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/house-detail/house-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: HouseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseDetailComponent", function() { return HouseDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_discograph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/discograph */ "./src/app/models/discograph.ts");
/* harmony import */ var src_app_models_artist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/artist */ "./src/app/models/artist.ts");


// new




var HouseDetailComponent = /** @class */ (function () {
    function HouseDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    HouseDetailComponent.prototype.ngOnInit = function () {
        this.house = new src_app_models_discograph__WEBPACK_IMPORTED_MODULE_4__["Discograph"]();
        this.artists = [];
        var _id = this.route.snapshot.params["id"];
        this.getDetails(_id);
    };
    HouseDetailComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.dataService.getDiscographyDetail(id)
            .subscribe(function (data) {
            // console.log(data.casa.nombre);
            _this.house.nombre = data.casa.nombre;
            _this.house.foto = data.casa.foto;
            for (var i = 0; i < data.casa.artistas.length; i++) {
                // console.log(data.casa.artistas[i].nombre);
                var buffer_obj = new src_app_models_artist__WEBPACK_IMPORTED_MODULE_5__["Artist"]();
                buffer_obj.nombre = data.casa.artistas[i].nombre;
                buffer_obj.foto = data.casa.artistas[i].foto;
                buffer_obj._id = data.casa.artistas[i]._id;
                _this.artists.push(buffer_obj);
            }
        });
    };
    HouseDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-house-detail',
            template: __webpack_require__(/*! ./house-detail.component.html */ "./src/app/components/house-detail/house-detail.component.html"),
            styles: [__webpack_require__(/*! ./house-detail.component.css */ "./src/app/components/house-detail/house-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HouseDetailComponent);
    return HouseDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #f5f5f5;\n  }\n  \n  .form-signin {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n  }\n  \n  .form-signin .checkbox {\n    font-weight: 400;\n  }\n  \n  .form-signin .form-control {\n    position: relative;\n    box-sizing: border-box;\n    height: auto;\n    padding: 10px;\n    font-size: 16px;\n  }\n  \n  .form-signin .form-control:focus {\n    z-index: 2;\n  }\n  \n  .form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  \n  .form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFFWixhQUFhO0lBRWIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7ICBcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG4gIFxuICAuZm9ybS1zaWduaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body class=\"text-center\">\n  \n  <form ngNativeValidate #loginForm=\"ngForm\" (ngSubmit)=\"loginUser(loginForm)\"  class=\"form-signin\">\n    \n    <img class=\"mb-4\" src=\"https://img.heypik.com/background-image/20190122/psd-aurora-gradient-gorgeous-cool-fashion-background-poster-heypik-6ZU448A.jpg?x-oss-process=image/resize,w_230/crop,w_230,h_230/sharpen,100/quality,q_70\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    \n    <label for=\"username\" class=\"sr-only\">Email address</label>\n    <input name=\"nombre_usuario\" #nombre_usuario=\"ngModel\" [(ngModel)]=\"user.nombre_usuario\" id=\"username\" class=\"form-control\" placeholder=\"username o email\" required=\"true\" autofocus>\n    \n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\"  type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"true\">\n    \n\n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n    <button  class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2019-2020</p>\n  \n  </form>\n  \n</body>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (form) {
        var _this = this;
        //console.log(form.value);
        this.authenticationService.logUser(form.value)
            .subscribe(function (data) {
            //console.log(data.token);
            _this.authenticationService.setToken(data.token);
            _this.authenticationService.getUser(data.token)
                .subscribe(function (userData) {
                console.log(userData.usuario.nombre_usuario);
                localStorage.setItem('currentUser', JSON.stringify(userData));
                localStorage.setItem('auth', 'true');
                window.location.replace('/');
                // this.router.navigate(['/']);
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark \">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <a class=\"navbar-brand\" routerLink=\"/\" >{{ app_name }}</a>\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/login\" >login <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/register\" >register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/profile\" >profile</a>\n      </li>\n      \n\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"logoutUser()\" >logout</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\"   type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.app_name = 'Open music';
        this.isLogged = false;
        this.isnotLogged = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.onCheckUSer();
    };
    NavbarComponent.prototype.logoutUser = function () {
        console.log("out");
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('auth');
        window.location.replace('/');
    };
    NavbarComponent.prototype.onCheckUSer = function () {
        if (localStorage.getItem('auth') == 'true') {
            this.isLogged = true;
            this.isnotLogged = false;
        }
        else {
            this.isLogged = false;
            this.isnotLogged = true;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page404/page404.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/page404/page404.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page404/page404.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/page404/page404.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/components/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/components/page404/page404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/playlist/playlist.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/playlist/playlist.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-size: .875rem;\n  }\n  \n  .feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    /* position: float; */\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100; /* Behind the navbar */\n    /* padding: 48px 0 0; Height of navbar */\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    padding-top: 48px;\n  }\n  \n  .sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: .5rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    /* margin-top: 133px; */\n    /* -top: 133px; Space for fixed navbar */\n    \n\n  }\n  \n  @supports ((position: -webkit-sticky) or (position: sticky)) {\n    .sidebar-sticky {\n      position: -webkit-sticky;\n      position: sticky;\n    }\n  }\n  \n  .sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n  }\n  \n  .sidebar .nav-link .feather {\n    /* margin-top: 1px; */\n    margin-right: 4px;\n    color: #999;\n  }\n  \n  .sidebar .nav-link.active {\n    color: #007bff;\n  }\n  \n  .sidebar .nav-link:hover .feather,\n  .sidebar .nav-link.active .feather {\n    color: inherit;\n  }\n  \n  .sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n  }\n  \n  .material-icons{\n      /* padding-top: 10px; */\n    margin-top: 10px;\n }\n  \n  /*\n   * Content\n   */\n  \n  [role=\"main\"] {\n    padding-top: 133px; /* Space for fixed navbar */\n  }\n  \n  @media (min-width: 768px) {\n    [role=\"main\"] {\n      padding-top: 48px; /* Space for fixed navbar */\n    }\n  }\n  \n  /*\n   * Navbar\n   */\n  \n  .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  \n  .navbar .form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n  }\n  \n  .form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n  }\n  \n  .form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVksRUFBRSxzQkFBc0I7SUFDcEMsd0NBQXdDO0lBQ3hDLDRDQUE0QztJQUM1QyxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtJQUMvRSx1QkFBdUI7SUFDdkIsd0NBQXdDOzs7RUFHMUM7O0VBRUE7SUFDRTtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7O0VBRUQ7TUFDSyx1QkFBdUI7SUFDekIsZ0JBQWdCO0NBQ25COztFQUNDOztJQUVFOztFQUVGO0lBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0VBQ2pEOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUIsRUFBRSwyQkFBMkI7SUFDaEQ7RUFDRjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDhDQUE4QztFQUNoRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgfVxuICBcbiAgLmZlYXRoZXIge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIH1cbiAgXG4gIC8qXG4gICAqIFNpZGViYXJcbiAgICovXG4gIFxuICAuc2lkZWJhciB7XG4gICAgLyogcG9zaXRpb246IGZsb2F0OyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICAgIC8qIHBhZGRpbmc6IDQ4cHggMCAwOyBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gICAgLyogbWFyZ2luLXRvcDogMTMzcHg7ICovXG4gICAgLyogLXRvcDogMTMzcHg7IFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbiAgICBcblxuICB9XG4gIFxuICBAc3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xuICAgIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIH1cbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xuICAgIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gLm1hdGVyaWFsLWljb25ze1xuICAgICAgLyogcGFkZGluZy10b3A6IDEwcHg7ICovXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiB9XG4gIC8qXG4gICAqIENvbnRlbnRcbiAgICovXG4gIFxuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiAxMzNweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBbcm9sZT1cIm1haW5cIl0ge1xuICAgICAgcGFkZGluZy10b3A6IDQ4cHg7IC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cbiAgICB9XG4gIH1cbiAgXG4gIC8qXG4gICAqIE5hdmJhclxuICAgKi9cbiAgXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgfVxuICBcbiAgLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbC1kYXJrIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/playlist/playlist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/playlist/playlist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n        <div class=\"sidebar-sticky\">\n          <ul class=\"nav flex-column\">\n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#\">\n                <span data-feather=\"home\"></span>\n                Dashboard <span class=\"sr-only\">(current)</span>\n              </a>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink='/'>\n                <span data-feather=\"file\"></span>\n                <!-- <i class=\"material-icons\">explore</i> -->\n                Browse\n              </a>\n            </li>\n            \n          </ul>\n  \n          <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n            <span>library</span>\n            <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n              <span data-feather=\"plus-circle\"></span>\n            </a>\n          </h6>\n          <ul class=\"nav flex-column mb-2\">\n            <!-- <li class=\"nav-item align-items-center d-flex\">\n              <a class=\"nav-link\" routerLink=\"/music/artists\">\n                <span data-feather=\"file-text\"></span>\n                Artists\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">\n                <span data-feather=\"file-text\"></span>\n                Albums\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">\n                <span data-feather=\"file-text\"></span>\n                Songs\n              </a>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/music/playlist\">\n                <span data-feather=\"file-text\"></span>\n                Playlists\n              </a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n  \n      <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n          \n          <h3>{{ name_playlist }}</h3>\n          \n        </div>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">nombre</th>\n              <th scope=\"col\">artista</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of canciones; let i = index\">\n              <th scope=\"row\">{{i+1}}</th>\n              <td>{{item.nombre}}</td>\n              <td>{{item.artista}}</td>\n              <td>\n                <button class=\"btn btn-success btn-sm \" (click)=\"playAudio(item._id)\" >play</button>\n                <button class=\"btn btn-outline-danger btn-sm \" (click)=\"delTrack(item._id)\" >delete</button>\n              \n              </td>\n              <!-- <td><button>agregar</button></td> -->\n  \n              <!-- play_arrow -->\n            </tr>\n            \n          </tbody>\n        </table>\n  \n  \n  \n        <!-- <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n            <h3>{{name_playlist}}</h3> \n        </div>\n        \n        <div class=\"card-group\">\n  \n          <div *ngFor=\"let item of casas\" class=\"card bg-primary text-white\" style=\"width: 18rem;\">\n              <a routerLink='/music/house-record/detail/{{item._id}}'>\n                <img class=\"card-img-top\" src=\"data:image/jpg;base64,{{item.foto}}\" alt=\"Card image cap\">\n              </a>\n              <div class=\"card-body\">\n                <p class=\"card-text\">{{item.nombre}}</p>\n              </div>\n            </div>\n        </div>\n  \n        <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n            <h3>House records</h3> \n        </div> -->\n        \n        \n      </main>\n  \n  \n    </div>\n  \n  </div>\n  <div>\n  \n    <router-outlet></router-outlet>\n  </div>\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/components/playlist/playlist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/playlist/playlist.component.ts ***!
  \***********************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/track-controls.service */ "./src/app/services/track-controls.service.ts");
/* harmony import */ var src_app_models_cancion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cancion */ "./src/app/models/cancion.ts");





var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(dataService, trackControl) {
        this.dataService = dataService;
        this.trackControl = trackControl;
        this.canciones = [];
        this.final_canciones = [];
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        this.setPlaylist();
    };
    PlaylistComponent.prototype.setPlaylist = function () {
        var _this = this;
        this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
            .subscribe(function (data) {
            // console.log(data.playlists[0].titulo);
            _this.name_playlist = data.playlists[0].titulo;
            _this.dataService.getDataPlaylist(data.playlists[0]._id)
                .subscribe(function (datat) {
                console.log(datat);
                // console.log(datat.playlists.canciones_user[0]);
                for (var i = 0; i < datat.playlists.canciones_user.length; i++) {
                    //var buffer_obj: Cancion = new Cancion();
                    console.log(datat.playlists.canciones_user[i]);
                    // buffer_obj._id = datat.playlists.canciones_user[i];
                    _this.dataService.getTrackDetail(datat.playlists.canciones_user[i])
                        .subscribe(function (datain) {
                        var buffer_obj = new src_app_models_cancion__WEBPACK_IMPORTED_MODULE_4__["Cancion"]();
                        buffer_obj.nombre = datain.cancion.nombre;
                        buffer_obj.artista = datain.cancion.artista.nombre;
                        buffer_obj._id = datain.cancion._id;
                        _this.canciones.push(buffer_obj);
                    });
                    // console.log(buffer_obj.nombre);
                    //this.canciones.push(buffer_obj);
                }
            });
        });
    };
    PlaylistComponent.prototype.playAudio = function (_id) {
        console.log(_id);
        //console.log("sa");
        //this.trackControl.playAudio(_id);
        this.trackControl.sendMessage(_id);
    };
    PlaylistComponent.prototype.delTrack = function (_id) {
        var _this = this;
        // this.dataService.addTrackToPlaylist()
        this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
            .subscribe(function (data) {
            console.log(data.playlists[0]._id);
            _this.dataService.deleteTrackToPlaylist(data.playlists[0]._id, _id)
                .subscribe(function (datat) {
                console.log(datat);
            });
            // localStorage.setItem('idPlaylist', data.playlists[0]._id);
        });
    };
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__(/*! ./playlist.component.html */ "./src/app/components/playlist/playlist.component.html"),
            styles: [__webpack_require__(/*! ./playlist.component.css */ "./src/app/components/playlist/playlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_3__["TrackControlsService"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #f5f5f5;\n  }\n  \n  .form-signin {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n  }\n  \n  .form-signin .checkbox {\n    font-weight: 400;\n  }\n  \n  .form-signin .form-control {\n    position: relative;\n    box-sizing: border-box;\n    height: auto;\n    padding: 10px;\n    font-size: 16px;\n  }\n  \n  .form-signin .form-control:focus {\n    z-index: 2;\n  }\n  \n  .form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  \n  .form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFFWixhQUFhO0lBRWIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7ICBcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG4gIFxuICAuZm9ybS1zaWduaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" text-center\">\n  \n\n  <form ngNativeValidate #userForm=\"ngForm\" (ngSubmit)=\"registerUser(userForm)\" class=\"form-signin\">\n\n    <img class=\"mb-4\" src=\"https://img.heypik.com/background-image/20190122/psd-aurora-gradient-gorgeous-cool-fashion-background-poster-heypik-6ZU448A.jpg?x-oss-process=image/resize,w_230/crop,w_230,h_230/sharpen,100/quality,q_70\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h2 mb-3 font-weight-normal\">Sign up</h1>\n\n    <label for=\"username\" class=\"sr-only\">Username</label>\n    <input name=\"nombre_usuario\" #nombre_usuario=\"ngModel\" [(ngModel)]=\"user.nombre_usuario\" id=\"username\" class=\"form-control\" placeholder=\"username\" required autofocus>\n    \n    <label for=\"email\" class=\"sr-only\">Email</label>\n    <input type=\"email\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"email\" class=\"form-control\" required>\n\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" placeholder=\"password\" class=\"form-control\" required>\n\n    <button  class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign ip</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2019-2020</p>\n  \n\n    \n\n  </form>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");


// new




Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticationService, toastr, dataService) {
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.dataService = dataService;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (form) {
        var _this = this;
        //console.log(form.value);
        this.authenticationService.postUser(form.value)
            .subscribe(function (data) {
            //console.log(data);
            //console.log(data.token);
            _this.dataService.createPlaylist(data.token, "favoritasusrb")
                .subscribe(function (data_p) {
                console.log(data_p);
            });
            _this.authenticationService.setToken(data.token);
            _this.authenticationService.getUser(data.token)
                .subscribe(function (userData) {
                localStorage.setItem('currentUser', JSON.stringify(userData));
                localStorage.setItem('auth', 'true');
                window.location.replace('/');
            });
            //console.log("get with succes");
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]] // new to use service
            ,
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/track-controls/track-controls.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/track-controls/track-controls.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Audio */\n\n\n#myTune {\n    display: none;\n}\n\n\n.playmusic-name,\n.playmusic-artist {\n    margin-left: 10px;\n}\n\n\n.tag-playmusic {\n    height: 70px;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: 999999998;\n    background-color: black;\n    border-top: 1px solid #6610f2;\n}\n\n\n.playmusic-info {\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n    width: 25%;\n    float: left;\n    margin-right: 1%;\n}\n\n\n.imgPlayMusic {\n    display: block;\n    width: 39%;\n    float: left;\n    overflow: hidden;\n    height: 100%;\n    margin-right: 1%;\n    text-align: right;\n}\n\n\n.playmusic-info img {\n    height: 100%;\n    display: block;\n}\n\n\n.playmusic-info .textPlayMusic {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 10px;\n    width: 60%;\n    float: left;\n}\n\n\n.playmusic-info .textPlayMusic a {\n    display: block;\n    margin-bottom: 5px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-decoration: none;\n    color: white;\n}\n\n\n.playmusic-info .textPlayMusic a:hover {\n    color: #f8f9fa;\n}\n\n\n#playButton .glyphicon-pause {\n    display: none;\n}\n\n\n.playmusic-time {\n    display: inline-block;\n    vertical-align: top;\n    height: 100%;\n    width: 36%;\n    float: left;\n    margin: 0;\n    margin-right: 1%;\n}\n\n\n#playmusic-start {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 25px;\n    color: #fff;\n    width: 17%;\n    float: left;\n    margin-right: 1%;\n    text-align: center;\n}\n\n\n#playmusic-process {\n    height: 5px;\n/*    borderborder: 1px solid #a00;*/\n    display: inline-block;\n    width: 63%;\n    vertical-align: top;\n    margin-top: 33px;\n    float: left;\n    margin-right: 1%;\n}\n\n\n#playmusic-end {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 25px;\n    color: #fff;\n    width: 18%;\n    float: left;\n    text-align: center;\n}\n\n\n#playmusic-process {\n    cursor: pointer;\n}\n\n\n#playmusic-process::-webkit-progress-bar {\n    background: #eee;\n}\n\n\n#playmusic-process::-webkit-progress-value {\n    background: #6610f2;\n\n}\n\n\n.playmusic-button {\n    width: 37%;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    height: 100%;\n}\n\n\n#playButton,\n#pauseButton,\n#loopButton,\n#playmusic-prev,\n#playmusic-next,\n#volume {\n    border: 0;\n    font-size: 100%;\n    padding: 2px 5px;\n    background: transparent;\n    color: #888;\n    margin-top: 23px;\n    vertical-align: top;\n    outline: none;\n    display: inline-block;\n    text-align: center;\n}\n\n\n#playmusic-prev,\n#playmusic-next {\n    float: left;\n    width: 12%;\n    margin-left: 0;\n    margin-right: 1%;\n}\n\n\n#playButton {\n    font-size: 180%;\n    color: #fff;\n    margin-top: 14px;\n    width: 15%;\n    margin-right: 1%;\n    float: left;\n}\n\n\n#loopButton {\n    float: left;\n    width: 12%;\n    margin-right: 1%;\n    display: inline-block;\n}\n\n\n#volume {\n    margin-top: 0;\n    color: #fff;\n    font-size: 130%;\n    height: 100%;\n    display: inline-block;\n    padding: 0;\n    width: 45%;\n    float: left;\n    text-align: center;\n}\n\n\n#volumeButton {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 21px;\n    background: transparent;\n    width: 29%;\n    border: 0;\n    float: left;\n    margin-right: 1%;\n    outline: none;\n    color: aliceblue;\n}\n\n\n#volumeButton .glyphicon-volume-down,\n#volumeButton .glyphicon-volume-off {\n    display: none;\n}\n\n\n#volumeProBar {\n    height: 5px;\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 31px;\n    border: 0px;\n    width: 62%;\n    margin-right: 8%;\n    cursor: pointer;\n}\n\n\n#volumeProBar::-webkit-progress-bar {\n    background: #fff;\n}\n\n\n/* End Audio */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjay1jb250cm9scy90cmFjay1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7OztBQUdWO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7QUFDakM7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Ysb0NBQW9DO0lBQ2hDLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFFQTs7Ozs7O0lBTUksU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBLGNBQWMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYWNrLWNvbnRyb2xzL3RyYWNrLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBdWRpbyAqL1xuXG5cbiNteVR1bmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wbGF5bXVzaWMtbmFtZSxcbi5wbGF5bXVzaWMtYXJ0aXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRhZy1wbGF5bXVzaWMge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5OTk4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjYxMGYyO1xufVxuXG4ucGxheW11c2ljLWluZm8ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5pbWdQbGF5TXVzaWMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzOSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBsYXltdXNpYy1pbmZvIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGxheW11c2ljLWluZm8gLnRleHRQbGF5TXVzaWMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnBsYXltdXNpYy1pbmZvIC50ZXh0UGxheU11c2ljIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsYXltdXNpYy1pbmZvIC50ZXh0UGxheU11c2ljIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZjhmOWZhO1xufVxuXG4jcGxheUJ1dHRvbiAuZ2x5cGhpY29uLXBhdXNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGxheW11c2ljLXRpbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzYlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4jcGxheW11c2ljLXN0YXJ0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxNyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5bXVzaWMtcHJvY2VzcyB7XG4gICAgaGVpZ2h0OiA1cHg7XG4vKiAgICBib3JkZXJib3JkZXI6IDFweCBzb2xpZCAjYTAwOyovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2MyU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tdG9wOiAzM3B4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbiNwbGF5bXVzaWMtZW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxOCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcGxheW11c2ljLXByb2Nlc3Mge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3BsYXltdXNpYy1wcm9jZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuI3BsYXltdXNpYy1wcm9jZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNjYxMGYyO1xuXG59XG5cbi5wbGF5bXVzaWMtYnV0dG9uIHtcbiAgICB3aWR0aDogMzclO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcGxheUJ1dHRvbixcbiNwYXVzZUJ1dHRvbixcbiNsb29wQnV0dG9uLFxuI3BsYXltdXNpYy1wcmV2LFxuI3BsYXltdXNpYy1uZXh0LFxuI3ZvbHVtZSB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIG1hcmdpbi10b3A6IDIzcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5bXVzaWMtcHJldixcbiNwbGF5bXVzaWMtbmV4dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEyJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4jcGxheUJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxODAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jbG9vcEJ1dHRvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEyJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3ZvbHVtZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEzMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdm9sdW1lQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAyOSU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4jdm9sdW1lQnV0dG9uIC5nbHlwaGljb24tdm9sdW1lLWRvd24sXG4jdm9sdW1lQnV0dG9uIC5nbHlwaGljb24tdm9sdW1lLW9mZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3ZvbHVtZVByb0JhciB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLXRvcDogMzFweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICB3aWR0aDogNjIlO1xuICAgIG1hcmdpbi1yaWdodDogOCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdm9sdW1lUHJvQmFyOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuXG4vKiBFbmQgQXVkaW8gKi8iXX0= */"

/***/ }),

/***/ "./src/app/components/track-controls/track-controls.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/track-controls/track-controls.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tag-playmusic bg-dark\">\n    <audio id=\"myTune\" controls>\n        <!-- <source src=\"http://http://ec2-18-224-151-212.us-east-2.compute.amazonaws.com:3005/tracks/5cfa921f4af5626c7c17dde6\"> -->\n            <!-- <source src=\"{{audio}}\"> -->\n    </audio>\n\n    <div class=\"playmusic-info\">\n        <div class=\"imgPlayMusic\">\n            <!-- <img src=\"./images/singer/s8.jpg\" alt=\"\"> -->\n            <img  src=\"data:image/png;base64,{{image}}\" alt=\"First slide\">\n\n        </div>\n        <div class=\"textPlayMusic\">\n            <a href=\"#\" class=\"playmusic-name\">{{name_song}}</a>\n            <a href=\"#\" class=\"playmusic-artist\">{{name_artists}}</a>\n        </div>\n    </div>\n    <div class=\"playmusic-time\">\n        <label id=\"playmusic-start\">{{playmusic_start}}</label>\n        <progress id=\"playmusic-process\" value=\"50\" max=\"100\"></progress>\n        <label id=\"playmusic-end\">{{ playmusic_end }}</label>\n    </div>\n    <div class=\"playmusic-button\">\n        <button id=\"playmusic-prev\">\n            <i class=\"material-icons\">fast_rewind</i>\n        </button>\n        <button id=\"playButton\" (click)=\"playAudio()\">\n            <i *ngIf=\"!isPlay\" class=\"material-icons\">play_arrow</i>\n            <i *ngIf=\"isPlay\" class=\"material-icons\">pause</i>\n        </button>\n        <button id=\"playmusic-next\">\n            <i class=\"material-icons\">fast_forward</i>\n        </button>\n        <button id=\"loopButton\">\n            <i class=\"material-icons\">replay</i>\n        </button>\n        \n        <div id=\"volume\" >\n        \n\n            <button id=\"volumeButton\">\n                <i class=\"material-icons\">volume_up</i>\n            </button>\n            <progress id=\"volumeProBar\" value=\"100\" max=\"100\">\n            \n            </progress>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/track-controls/track-controls.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/track-controls/track-controls.component.ts ***!
  \***********************************************************************/
/*! exports provided: TrackControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackControlsComponent", function() { return TrackControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/track-controls.service */ "./src/app/services/track-controls.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



// import { $ } from 'protractor';

var TrackControlsComponent = /** @class */ (function () {
    function TrackControlsComponent(trackControl, dataService) {
        this.trackControl = trackControl;
        this.dataService = dataService;
        this.audio = new Audio();
        this.isPlaying = 0;
        this.isPlay = false;
        this.playmusic_start = '0:00';
        this.messages = [];
    }
    TrackControlsComponent.prototype.ngOnInit = function () {
        // this.audio = new Audio();
        var _this = this;
        this.subscription = this.trackControl.getMessage()
            .subscribe(function (message) {
            console.log(message.text);
            // let audio = new Audio();
            _this.audio.src = "http://ec2-100-25-47-78.compute-1.amazonaws.com:3005/tracks/" + message.text;
            _this.audio.load();
            _this.audio.play();
            _this.dataService.getTrackDetail(message.text)
                .subscribe(function (data) {
                //console.log(data);
                _this.name_song = data.cancion.nombre;
                _this.name_artists = data.cancion.artista.nombre;
                _this.image = data.cancion.imagen;
            });
            _this.dataService.scoreTrack(message.text)
                .subscribe(function (data) {
                console.log(data);
            });
            (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Do something before delay
                            console.log('before delay');
                            return [4 /*yield*/, this.delay(2000)];
                        case 1:
                            _a.sent();
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.delay(1000)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.delay(1000)];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.delay(1000)];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.delay(1000)];
                        case 8:
                            _a.sent();
                            _a.label = 9;
                        case 9:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 11];
                            return [4 /*yield*/, this.delay(1000)];
                        case 10:
                            _a.sent();
                            _a.label = 11;
                        case 11:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 13];
                            return [4 /*yield*/, this.delay(1000)];
                        case 12:
                            _a.sent();
                            _a.label = 13;
                        case 13:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 15];
                            return [4 /*yield*/, this.delay(1000)];
                        case 14:
                            _a.sent();
                            _a.label = 15;
                        case 15:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 17];
                            return [4 /*yield*/, this.delay(2000)];
                        case 16:
                            _a.sent();
                            _a.label = 17;
                        case 17:
                            if (!(this.audio.duration > 10000)) return [3 /*break*/, 19];
                            return [4 /*yield*/, this.delay(2000)];
                        case 18:
                            _a.sent();
                            _a.label = 19;
                        case 19:
                            // Do something after
                            console.log('after delay');
                            console.log(this.audio.duration);
                            this.playmusic_end = this.ConvertTime(this.audio.duration);
                            return [2 /*return*/];
                    }
                });
            }); })();
            _this.isPlaying = 1;
            _this.isPlay = true;
            // console.log("" + this.audio.duration);
            //var lengaudio = parseInt("" + this.audio.duration);
            //console.log(lengaudio);
            //this.playmusic_end = this.ConvertTime(this.audio.duration);
        });
    };
    TrackControlsComponent.prototype.playAudio = function () {
        if (this.isPlaying == 0) {
            this.audio.play();
            this.isPlaying = 1;
        }
        else {
            this.audio.pause();
            this.isPlaying = 0;
        }
        this.isPlay = !this.isPlay;
    };
    TrackControlsComponent.prototype.ConvertTime = function (timeSecond) {
        var hour = 0;
        var minutes = 0;
        var second = 0;
        var stringTime = "";
        //hour = Math.floor(timeSecond / 3600);
        //timeSecond = timeSecond - hour * 3600;
        minutes = Math.floor(timeSecond / 60);
        timeSecond = timeSecond - (minutes * 60);
        second = Math.floor(timeSecond);
        var correctSecond = "";
        if (second < 10) {
            correctSecond = "0" + second;
        }
        else {
            correctSecond = "" + second;
        }
        stringTime = minutes + ":" + correctSecond;
        return stringTime;
    };
    TrackControlsComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    TrackControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-track-controls',
            template: __webpack_require__(/*! ./track-controls.component.html */ "./src/app/components/track-controls/track-controls.component.html"),
            styles: [__webpack_require__(/*! ./track-controls.component.css */ "./src/app/components/track-controls/track-controls.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_track_controls_service__WEBPACK_IMPORTED_MODULE_2__["TrackControlsService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], TrackControlsComponent);
    return TrackControlsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  overflow-x: hidden; /* Prevent scroll on narrow devices */\n}\n\nbody {\n  padding-top: 56px;\n}\n\n@media (max-width: 991.98px) {\n  .offcanvas-collapse {\n    position: fixed;\n    top: 56px; /* Height of navbar */\n    bottom: 0;\n    left: 100%;\n    width: 100%;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    overflow-y: auto;\n    visibility: hidden;\n    background-color: #343a40;\n    transition: visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out;\n    transition: transform .3s ease-in-out, visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;\n  }\n  .offcanvas-collapse.open {\n    visibility: visible;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller .nav {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  color: rgba(255, 255, 255, .75);\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-underline .nav-link {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n  color: #6c757d;\n}\n\n.nav-underline .nav-link:hover {\n  color: #007bff;\n}\n\n.nav-underline .active {\n  font-weight: 500;\n  color: #343a40;\n}\n\n.text-white-50 { color: rgba(255, 255, 255, .5); }\n\n.bg-purple { background-color: #6f42c1; }\n\n.lh-100 { line-height: 1; }\n\n.lh-125 { line-height: 1.25; }\n\n.lh-150 { line-height: 1.5; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCLEVBQUUscUNBQXFDO0FBQzNEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlFQUF5RTtJQUN6RSxpRUFBaUU7SUFDakUsb0dBQW9HO0VBQ3RHO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBRUUsYUFBYTtFQUViLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQiw4QkFBOEIsRUFBRTs7QUFFakQsYUFBYSx5QkFBeUIsRUFBRTs7QUFFeEMsVUFBVSxjQUFjLEVBQUU7O0FBQzFCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsZ0JBQWdCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBQcmV2ZW50IHNjcm9sbCBvbiBuYXJyb3cgZGV2aWNlcyAqL1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAub2ZmY2FudmFzLWNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1NnB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLm9mZmNhbnZhcy1jb2xsYXBzZS5vcGVuIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG5cbi5uYXYtc2Nyb2xsZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMi43NXJlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbmsge1xuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm5hdi11bmRlcmxpbmUgLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4udGV4dC13aGl0ZS01MCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTsgfVxuXG4uYmctcHVycGxlIHsgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTsgfVxuXG4ubGgtMTAwIHsgbGluZS1oZWlnaHQ6IDE7IH1cbi5saC0xMjUgeyBsaW5lLWhlaWdodDogMS4yNTsgfVxuLmxoLTE1MCB7IGxpbmUtaGVpZ2h0OiAxLjU7IH0iXX0= */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"nav-scroller bg-white shadow-sm\">\n  <nav class=\"nav nav-underline\">\n    <a class=\"nav-link active\" href=\"#\">Dashboard</a>\n    <a class=\"nav-link\" href=\"#\">\n      Friends\n      <span class=\"badge badge-pill bg-light align-text-bottom\">27</span>\n    </a>\n    <a class=\"nav-link\" href=\"#\">Explore</a>\n    <a class=\"nav-link\" href=\"#\">Suggestions</a>\n    <a class=\"nav-link\" href=\"#\">Link</a>\n    <a class=\"nav-link\" href=\"#\">Link</a>\n    <a class=\"nav-link\" href=\"#\">Link</a>\n    <a class=\"nav-link\" href=\"#\">Link</a>\n    <a class=\"nav-link\" href=\"#\">Link</a>\n  </nav>\n</div> -->\n\n<main role=\"main\" class=\"container\">\n  <div class=\"d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm\">\n    <img class=\"mr-3\" src=\"\" alt=\"\" width=\"48\" height=\"48\">\n    <div class=\"lh-100\">\n      <h6 class=\"mb-0 text-white lh-100\">{{ currentUser.nombre_usuario }} </h6>\n      <!-- <small>Since 2011</small> -->\n    </div>\n  </div>\n\n  <div class=\"my-3 p-3 bg-white rounded shadow-sm\">\n    <h6 class=\"border-bottom border-gray pb-2 mb-0\">Informacion de usuario</h6>\n    <div class=\"media text-muted pt-3\">\n      <!-- {% include icons/placeholder.svg width=\"32\" height=\"32\" background=\"#007bff\" color=\"#007bff\" class=\"mr-2 rounded\" %} -->\n      <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n        <strong class=\"d-block text-gray-dark\">@username</strong>\n\n        <!-- <input name=\"nombre_usuario\" #nombre_usuario=\"ngModel\" [(ngModel)]=\"currentUser.nombre_usuario\"  type=\"text\"  class=\"form-control\" value={{currentUser.nombre_usuario}} required> -->\n        {{ currentUser.nombre_usuario }}\n      </p>\n    </div>\n    <div class=\"media text-muted pt-3\">\n      <!-- {% include icons/placeholder.svg width=\"32\" height=\"32\" background=\"#e83e8c\" color=\"#e83e8c\" class=\"mr-2 rounded\" %} -->\n      <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n        <strong class=\"d-block text-gray-dark\">@email</strong>\n        <input name=\"email\" #email=\"ngModel\" [(ngModel)]=\"currentUser.email\"  type=\"email\"  class=\"form-control\" value={{currentUser.email}} required>        \n      </p>\n    </div>\n    <div class=\"media text-muted pt-3\">\n      <!-- {% include icons/placeholder.svg width=\"32\" height=\"32\" background=\"#6f42c1\" color=\"#6f42c1\" class=\"mr-2 rounded\" %} -->\n      <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n        <strong class=\"d-block text-gray-dark\">@id</strong>\n        {{ currentUser._id }}\n      </p>\n    </div>\n    <small class=\"d-block text-right mt-3\">\n      <a routerLink=\"/user/profile\" (click)=\"updateUser()\" >Actualizar informacion</a>\n    </small>\n  </div>\n\n  <div class=\"my-3 p-3 bg-white rounded shadow-sm\">\n    <h6 class=\"border-bottom border-gray pb-2 mb-0\">Informacion de pago</h6>\n    <div class=\"media text-muted pt-3\">\n      <!-- {% include icons/placeholder.svg width=\"32\" height=\"32\" background=\"#007bff\" color=\"#007bff\" class=\"mr-2 rounded\" %} -->\n      <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n        <div class=\"d-flex justify-content-between align-items-center w-100\">\n          <strong class=\"text-gray-dark\">Full Name</strong>\n          <a href=\"#\">Follow</a>\n        </div>\n        <span class=\"d-block\">@username</span>\n      </div>\n    </div>\n    <div class=\"media text-muted pt-3\">\n      <!-- {% include icons/placeholder.svg width=\"32\" height=\"32\" background=\"#007bff\" color=\"#007bff\" class=\"mr-2 rounded\" %} -->\n      <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n        <div class=\"d-flex justify-content-between align-items-center w-100\">\n          <strong class=\"text-gray-dark\">Full Name</strong>\n          <a href=\"#\">Follow</a>\n        </div>\n        <span class=\"d-block\">@username</span>\n      </div>\n    </div>\n    <div class=\"media text-muted pt-3\">\n      <!-- {% include icons/placeholder.svg width=\"32\" height=\"32\" background=\"#007bff\" color=\"#007bff\" class=\"mr-2 rounded\" %} -->\n      <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n        <div class=\"d-flex justify-content-between align-items-center w-100\">\n          <strong class=\"text-gray-dark\">Full Name</strong>\n          <a href=\"#\">Follow</a>\n        </div>\n        <span class=\"d-block\">@username</span>\n      </div>\n    </div>\n    <small class=\"d-block text-right mt-3\">\n      <a href=\"#\">All suggestions</a>\n    </small>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.currentUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getUserInformation();
    };
    UserProfileComponent.prototype.getUserInformation = function () {
        try {
            var _user = JSON.parse(localStorage.getItem('currentUser'));
            this.currentUser.nombre_usuario = _user.usuario.nombre_usuario;
            this.currentUser.playlits = _user.usuario.playlits;
            this.currentUser.email = _user.usuario.email;
            this.currentUser.foto = _user.usuario.foto.data;
            this.currentUser._id = _user.usuario._id;
        }
        catch (err) {
            console.log(err);
        }
        //console.log(_user.usuario.nombre_usuario);
    };
    UserProfileComponent.prototype.updateUser = function () {
        var _this = this;
        //console.log(this.currentUser.email);
        this.authenticationService.putUser(this.currentUser, localStorage.getItem('accessToken'))
            .subscribe(function (data) {
            console.log(data);
            _this.authenticationService.getUser(localStorage.getItem('accessToken'))
                .subscribe(function (userData) {
                console.log(userData.usuario.nombre_usuario);
                localStorage.setItem('currentUser', JSON.stringify(userData));
            });
        });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



// new 

var AuthGuard = /** @class */ (function () {
    function AuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('auth') == 'true') {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/artist.ts":
/*!**********************************!*\
  !*** ./src/app/models/artist.ts ***!
  \**********************************/
/*! exports provided: Artist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return Artist; });
var Artist = /** @class */ (function () {
    function Artist(_nombre, _foto, id) {
        if (_nombre === void 0) { _nombre = ''; }
        if (_foto === void 0) { _foto = ''; }
        if (id === void 0) { id = ''; }
        this.nombre = _nombre;
        this.foto = _foto;
        this._id = id;
    }
    return Artist;
}());



/***/ }),

/***/ "./src/app/models/cancion.ts":
/*!***********************************!*\
  !*** ./src/app/models/cancion.ts ***!
  \***********************************/
/*! exports provided: Cancion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cancion", function() { return Cancion; });
var Cancion = /** @class */ (function () {
    function Cancion(_nombre, _imagen, id, _artista) {
        if (_nombre === void 0) { _nombre = ''; }
        if (_imagen === void 0) { _imagen = ''; }
        if (id === void 0) { id = ''; }
        if (_artista === void 0) { _artista = ''; }
        this.nombre = _nombre;
        this.imagen = _imagen;
        this._id = id;
        this.artista = _artista;
    }
    return Cancion;
}());



/***/ }),

/***/ "./src/app/models/discograph.ts":
/*!**************************************!*\
  !*** ./src/app/models/discograph.ts ***!
  \**************************************/
/*! exports provided: Discograph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discograph", function() { return Discograph; });
var Discograph = /** @class */ (function () {
    function Discograph(_nombre, _foto, id) {
        if (_nombre === void 0) { _nombre = ''; }
        if (_foto === void 0) { _foto = ''; }
        if (id === void 0) { id = ''; }
        this.nombre = _nombre;
        this.foto = _foto;
        this._id = id;
    }
    return Discograph;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, nombre_usuario, email, password) {
        if (_id === void 0) { _id = ''; }
        if (nombre_usuario === void 0) { nombre_usuario = ''; }
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        this._id = _id;
        this.nombre_usuario = nombre_usuario,
            this.email = email,
            this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



//new



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.URL_GLOBAL_API = 'http://ec2-100-25-47-78.compute-1.amazonaws.com:7070/api/';
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    // nice
    AuthenticationService.prototype.postUser = function (user) {
        var _this = this;
        return this.http.post(this.URL_GLOBAL_API + 'usuario/', {
            "nombre_usuario": user.nombre_usuario,
            "email": user.email,
            "password": user.password
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.showfail('Error al registrar usuario.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('');
        }));
    };
    // nice
    AuthenticationService.prototype.logUser = function (user) {
        var _this = this;
        return this.http.post(this.URL_GLOBAL_API + 'loging/', {
            "password": user.password,
            "campo": user.nombre_usuario
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.showfail('Password o username incorrecto.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('');
        }));
    };
    AuthenticationService.prototype.putUser = function (user, token) {
        return this.http.put(this.URL_GLOBAL_API + 'usuario/' + ("" + token), {
            "nombre_usuario": user.nombre_usuario,
            "email": user.email
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    // nice
    AuthenticationService.prototype.getUser = function (token) {
        return this.http.get(this.URL_GLOBAL_API + 'usuario/' + ("" + token), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    // nice
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem('accessToken', token);
    };
    // nice
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('accessToken');
    };
    AuthenticationService.prototype.showfail = function (message) {
        this.toastr.error('', message, { progressBar: true });
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


// new


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.URL_GLOBAL_API = 'http://ec2-100-25-47-78.compute-1.amazonaws.com:7060/api/';
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
    }
    DataService.prototype.getDiscographyHouse = function () {
        return this.http.post(this.URL_GLOBAL_API + 'casa/datos/', {
            "mode": 1
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService.prototype.getDiscographyDetail = function (_id) {
        return this.http.post(this.URL_GLOBAL_API + 'casa/datos/', {
            "mode": 2,
            "id": _id
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService.prototype.getArtistTracks = function (_id) {
        return this.http.post(this.URL_GLOBAL_API + 'artista/buscar/', {
            "mode": 3,
            "id": _id
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    // ec2-18-218-148-39.us-east-2.compute.amazonaws.com:7070/api/cancion/buscar
    DataService.prototype.getTopTracks = function () {
        return this.http.post(this.URL_GLOBAL_API + 'cancion/buscar/', {
            "mode": 1
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService.prototype.getTrackDetail = function (_id) {
        return this.http.post(this.URL_GLOBAL_API + 'cancion/buscar/', {
            "mode": 2,
            "id": _id
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService.prototype.scoreTrack = function (_id) {
        return this.http.post(this.URL_GLOBAL_API + 'cancion/buscar/', {
            "mode": 3,
            "id": _id
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    //  nice
    DataService.prototype.createPlaylist = function (token, name) {
        return this.http.post(this.URL_GLOBAL_API + 'playlist/save/' + ("" + token), {
            "titulo": "favoritas",
            "duracion": 0.0
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data_p) { return data_p; }));
    };
    DataService.prototype.getIdPlaylist = function (token) {
        return this.http.post(this.URL_GLOBAL_API + 'playlist/usuario/', {
            "mode": 1,
            "token": token
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService.prototype.getDataPlaylist = function (id_playlist) {
        return this.http.post(this.URL_GLOBAL_API + 'playlist/usuario/', {
            "mode": 2,
            "id": id_playlist
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService.prototype.addTrackToPlaylist = function (id_playlist, id_track) {
        return this.http.post(this.URL_GLOBAL_API + 'playlist/cancion/' + ("" + id_playlist), {
            "mode": 3,
            "cancion": id_track
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService.prototype.deleteTrackToPlaylist = function (id_playlist, id_track) {
        return this.http.post(this.URL_GLOBAL_API + 'playlist/cancion/' + ("" + id_playlist), {
            "mode": 2,
            "cancion": id_track
        }, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/track-controls.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/track-controls.service.ts ***!
  \****************************************************/
/*! exports provided: TrackControlsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackControlsService", function() { return TrackControlsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


//new 

var TrackControlsService = /** @class */ (function () {
    function TrackControlsService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TrackControlsService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    TrackControlsService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    TrackControlsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrackControlsService);
    return TrackControlsService;
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

module.exports = __webpack_require__(/*! C:\Users\angel\Desktop\Proyectos\Proyecto\Aplicacion\proyecto-music-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map