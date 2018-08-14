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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.modules.ts":
/*!****************************************!*\
  !*** ./src/app/app-routing.modules.ts ***!
  \****************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_home_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/home/users-list/users-list.component */ "./src/app/dashboard/home/users-list/users-list.component.ts");
/* harmony import */ var _dashboard_home_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/home/friend-list/friend-list.component */ "./src/app/dashboard/home/friend-list/friend-list.component.ts");
/* harmony import */ var _dashboard_home_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/home/user-details/user-details.component */ "./src/app/dashboard/home/user-details/user-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    {
        path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    {
        path: 'home', component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            { path: 'users', component: _dashboard_home_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"] },
            { path: 'friends', component: _dashboard_home_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_7__["FriendListComponent"] },
            { path: 'userDetails/:id', component: _dashboard_home_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"] }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _dashboard_home_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"], _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"], _dashboard_home_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_7__["FriendListComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
    _dashboard_home_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"], _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]];


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

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _app_routing_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.modules */ "./src/app/app-routing.modules.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _welcome_welcomeheader_welcomeheader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcomeheader/welcomeheader.component */ "./src/app/welcome/welcomeheader/welcomeheader.component.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _dashboard_home_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/home/users-list/users-list.component */ "./src/app/dashboard/home/users-list/users-list.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _dashboard_home_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/home/friend-list/friend-list.component */ "./src/app/dashboard/home/friend-list/friend-list.component.ts");
/* harmony import */ var _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/token-interceptor.service */ "./src/app/shared/services/token-interceptor.service.ts");
/* harmony import */ var _dashboard_home_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/home/user-details/user-details.component */ "./src/app/dashboard/home/user-details/user-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _app_routing_modules__WEBPACK_IMPORTED_MODULE_8__["routingComponents"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _welcome_welcomeheader_welcomeheader_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeheaderComponent"],
                _dashboard_home_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_15__["UsersListComponent"],
                _dashboard_home_friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_17__["FriendListComponent"],
                _dashboard_home_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_19__["UserDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_modules__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-welcomeheader></app-welcomeheader>\r\n<div class=\"row \" style=\"margin-top:50px \">\r\n\r\n  <div class=\"col-md-6 mx-auto \">\r\n    <div class=\"card card-body \">\r\n\r\n      <h1 class=\"text-center\">User Login</h1>\r\n      <div [ngClass]=\"alert.class\" >{{alert.message}}</div>\r\n\r\n\r\n      <form [formGroup]=\"signinForm \" (ngSubmit)=\"onSigninSubmit()\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"user-name\">Username</label>\r\n          <input type=\"text \" class=\"form-control\" id=\"user-name\" [(ngModel)]=\"user.username\" formControlName=\"username\" name=\"username_\"\r\n            placeholder=\"abc1124 etc.\">\r\n\r\n          <div *ngIf=\"signinForm.get('username').touched && signinForm.get('username').invalid\" style=\"color: red; \">\r\n\r\n            <div *ngIf=\"signinForm.get('username').errors?.required\">username is required</div>\r\n            <div *ngIf=\"signinForm.get('username').errors?.isInputEmpty\">username cannot be empty </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" formControlName=\"password\" name=\"password_\"\r\n            placeholder=\"Password\">\r\n\r\n\r\n          <div *ngIf=\"signinForm.get('password').touched && signinForm.get('password').invalid\" style=\"color: red \">\r\n\r\n            <div *ngIf=\"signinForm.get('password').errors?.required\">passsword is required</div>\r\n            <div *ngIf=\"signinForm.get('password').errors?.isInputEmpty\">password cannot be empty </div>\r\n          </div>\r\n        </div>\r\n\r\n        <button [disabled]=\"signinForm.invalid\" type=\"submit\" class=\"btn btn-primary\" style=\"margin-right: 10px\">Signin</button>\r\n\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/validators/inputValidators */ "./src/app/shared/validators/inputValidators.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = /** @class */ (function () {
    function SigninComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.alert = {
            message: '',
            class: ''
        };
        this.user = {
            username: '',
            password: ''
        };
    }
    SigninComponent.prototype.ngOnInit = function () {
        /*
            this.localUserData = localStorage.getItem('user');
            this.token = localStorage.getItem('token');
    
            console.log('token: ', this.token);
            console.log('user local data: ', this.localUserData); */
        this.initSigninForm();
    };
    SigninComponent.prototype.initSigninForm = function () {
        this.signinForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_2__["InputValidators"].isInputEmpty]),
            'password': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_2__["InputValidators"].isInputEmpty]),
        });
    };
    SigninComponent.prototype.onSigninSubmit = function () {
        // Es6 santax for console data
        var _this = this;
        console.log('user signin data:', this.user);
        this._authService.signin(this.user)
            .subscribe(function (res) {
            console.log('sigin response: ', res);
            _this.alert.message = res.message;
            _this.alert.class = 'alert alert-success';
            // store jwt token in local storage
            localStorage.setItem('token', res.token);
            setTimeout(function () {
                _this._router.navigate(['/home/users']);
            }, 3000);
        }, function (err) {
            console.log('signin error: ', err);
            console.log('signin error message: ', err.error.message);
            _this.alert.class = 'alert alert-danger';
            _this.alert.message = err.error.message;
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-welcomeheader>\r\n</app-welcomeheader>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-md-6 mx-auto\">\r\n    <div class=\"card card-body\" style=\"margin-top: 20px\">\r\n\r\n      <h1 class=\"text-center\">User Signup </h1>\r\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignupFormSubmit()\">\r\n\r\n        <!--  <div class=\"form-group\">\r\n          <label for=\"first-name\">First Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"first-name\" name=\"first_Name\" formControlName=\"firstName\" [(ngModel)]=\"user.firstName\"\r\n            placeholder=\"first name\">\r\n\r\n          <div *ngIf=\"signupForm.controls.firstName?.touched && signupForm.controls.firstName?.invalid\" style=\"color: red\">\r\n            <div *ngIf=\"signupForm.controls.firstName.errors?.required\">First name is required</div>\r\n            <div *ngIf=\"signupForm.controls.firstName.errors?.isInputEmpty\">First name cannot be empty </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"last-name\">Last Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"last-name\" name=\"last_Name\" formControlName=\"lastName\" [(ngModel)]=\"user.lastName\"\r\n            placeholder=\"last name\">\r\n\r\n          <div *ngIf=\"signupForm.controls.lastName?.touched && signupForm.controls.lastName?.invalid\" style=\"color: red \">\r\n            <div *ngIf=\"signupForm.controls.lastName.errors?.required\">Last name is required</div>\r\n            <div *ngIf=\"signupForm.controls.lastName.errors?.isInputEmpty\">Last name cannot be empty </div>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"form-group \">\r\n          <label for=\"user-name \">Username</label>\r\n          <input type=\"text \" class=\"form-control \" id=\"user-name\" (keyup)=\"onCheckUserName($event)\" name=\"user_Name\" formControlName=\"username\"\r\n            [(ngModel)]=\"user.username\" placeholder=\" Mark Zakarbarg etc \">\r\n\r\n          <div *ngIf=\"checkUserName?.status=='200' \" style=\"color: green \"> {{checkUserName?.message}}</div>\r\n          <div *ngIf=\"checkUserName?.status=='404' \" style=\"color: red \"> {{checkUserName?.message}}</div>\r\n\r\n          <div *ngIf=\"signupForm.controls.username?.touched && signupForm.controls.username?.invalid\" style=\"color: red \">\r\n            <div *ngIf=\"signupForm.controls.username.errors?.required\">User name is required</div>\r\n            <div *ngIf=\"signupForm.controls.username.errors?.isInputEmpty\">user name cannot be empty </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group \">\r\n          <label for=\"exampleInputEmail1 \">Email address</label>\r\n          <input type=\"email \" class=\"form-control \" id=\"exampleInputEmail1\" (keyup)=\"onCheckEmail($event)\" aria-describedby=\"emailHelp \"\r\n            name=\"email_\" formControlName=\"email\" [(ngModel)]=\"user.email\" placeholder=\"abc@gmai.com etc.\">\r\n\r\n\r\n          <div *ngIf=\"checkEmail?.status=='200' \" style=\"color: green \"> {{checkEmail.message}}</div>\r\n          <div *ngIf=\"checkEmail?.status=='404' \" style=\"color: red \"> {{checkEmail?.message}}</div>\r\n\r\n          <div *ngIf=\"signupForm.controls.email?.touched && signupForm.controls.email?.invalid \" style=\"color: red \">\r\n            <div *ngIf=\"signupForm.controls.email.errors?.email\">Enter valid email pattern e.g abc@gmail.com</div>\r\n            <div *ngIf=\"!signupForm.controls.email.errors?.requied\">email field is required.</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div [formGroup]=\"passwordFormGroup\">\r\n\r\n          <div class=\"form-group \">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <input type=\"password\" class=\"form-control \" id=\"exampleInputPassword1\" formControlName=\"password\" [(ngModel)]=\"user.password\"\r\n              name=\"password_\" placeholder=\"LOckIt_!23\">\r\n\r\n            <div *ngIf=\"passwordFormGroup?.touched && passwordFormGroup?.invalid\" style=\"color: red \">\r\n              <div *ngIf=\"passwordFormGroup.controls.password.errors?.required\">password is requied</div>\r\n              <div *ngIf=\"passwordFormGroup.controls.password.errors?.isInputEmpty\">password cannot be empty </div>\r\n\r\n              <div *ngIf=\"passwordFormGroup.errors?.doesNotMatchPassword\">password does not match</div>\r\n              <div *ngIf=\"passwordFormGroup.errors?.doesNotMatchPassword == false\" style=\"color: green\">passwords successfully matched </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group \">\r\n            <label for=\"repeat-Password\">Repeat Password</label>\r\n            <input type=\"password\" class=\"form-control \" id=\"repeat-Password\" formControlName=\"repeatPassword\" [(ngModel)]=\"user.repeatPassword\"\r\n              name=\"repeat_Password\" placeholder=\"repeat above password here\">\r\n\r\n            <div *ngIf=\"passwordFormGroup?.touched && passwordFormGroup?.invalid\" style=\"color: red \">\r\n              <div *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required\">password is requied</div>\r\n              <div *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.isInputEmpty\">password cannot be empty</div>\r\n\r\n              <div *ngIf=\"passwordFormGroup.errors?.doesNotMatchPassword\">passwords does not match</div>\r\n              <div *ngIf=\"passwordFormGroup.errors?.doesNotMatchPassword ===  false\" style=\"color: green\">passwords successfully matched </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <button [disabled]=\" signupForm.invalid || (passwordFormGroup.errors?.doesNotMatchPassword === true) || checkUserName.status == '404'\"\r\n          type=\"submit\" class=\"btn btn-primary\" style=\"align-items: center\">Signup</button>\r\n\r\n        <div [ngClass]=\"alert.class\" style=\"margin: 10px\">{{alert.message}}</div>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/validators/inputValidators */ "./src/app/shared/validators/inputValidators.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(_authService, formBuilder, _router) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.user = {
            email: '',
            username: '',
            password: ''
        };
        this.checkUserName = {
            status: '',
            message: ''
        };
        this.checkEmail = {
            status: '',
            message: ''
        };
        this.alert = {
            class: '',
            message: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initializeSignupForm();
    };
    SignupComponent.prototype.initializeSignupForm = function () {
        // Reactive forms validation
        this.signupForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_3__["InputValidators"].isInputEmpty]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            passwordFormGroup: this.passwordFormGroup
        });
        this.passwordFormGroup = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_3__["InputValidators"].isInputEmpty]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_3__["InputValidators"].isInputEmpty]]
        }, {
            validator: _shared_validators_inputValidators__WEBPACK_IMPORTED_MODULE_3__["InputValidators"].validatePassword.bind(this)
        });
    };
    SignupComponent.prototype.onSignupFormSubmit = function () {
        // console.log(this.user);
        var _this = this;
        console.log(this.signupForm);
        this._authService.signup(this.user)
            .subscribe(function (res) {
            _this.alert.class = 'alert alert-success';
            _this.alert.message = res['message'];
            console.log('Reponse: ', res);
            setTimeout(function () {
                _this._router.navigate(['/signin']);
            }, 3000);
        }, function (err) {
            console.log('Sigup Error: ', err);
            _this.alert.class = 'alert alert-danger';
            _this.alert.message = err.error['message'];
        });
    };
    // checking either username is available or not
    SignupComponent.prototype.onCheckUserName = function (event) {
        var _this = this;
        var data = {
            username: event.target.value
        };
        this._authService.checkUserName(data)
            .subscribe(function (res) {
            console.log('Reponse: ', res);
            _this.checkUserName = res;
        }, function (err) {
            console.log('user name check err: ', err);
        });
    };
    SignupComponent.prototype.onCheckEmail = function (event) {
        var _this = this;
        console.log(event.target.value);
        var data = {
            email: event.target.value
        };
        this._authService.checkEmail(data)
            .subscribe(function (res) {
            console.log('Reponse: ', res);
            _this.checkEmail = res;
        }, function (err) {
            console.log('user email check err: ', err);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/friend-list/friend-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/home/friend-list/friend-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/home/friend-list/friend-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/home/friend-list/friend-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"card\" style=\"margin-top: 10px; width:400px\" *ngFor=\"let friend of friends\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">{{friend.username}}</h4>\r\n      <p class=\"card-title\">{{friend.created_date | date: 'longDate' }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/friend-list/friend-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/home/friend-list/friend-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(_userService) {
        this._userService = _userService;
    }
    FriendListComponent.prototype.ngOnInit = function () {
        this.loadFriendList();
    };
    FriendListComponent.prototype.loadFriendList = function () {
        var _this = this;
        this._userService.getfriendList()
            .subscribe(function (res) {
            _this.friends = res.friends['friends'];
            console.log(_this.friends);
        }, function (err) {
            console.log('error', err);
        });
    };
    FriendListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-list',
            template: __webpack_require__(/*! ./friend-list.component.html */ "./src/app/dashboard/home/friend-list/friend-list.component.html"),
            styles: [__webpack_require__(/*! ./friend-list.component.css */ "./src/app/dashboard/home/friend-list/friend-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/user-details/user-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/home/user-details/user-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/home/user-details/user-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/user-details/user-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"card \" style=\"margin-top: 10px; width:400px\">\r\n    <div class=\"card-body md-6\">\r\n      <h2 class=\"card-title\">User Details</h2>\r\n      <h4 class=\"card-title\">username: {{user?.username}}</h4>\r\n      <h4 class=\"card-title\">email: {{user?.email}}</h4>\r\n      <p class=\"card-title\">Created_Date:{{user?.created_date | date: 'longDate' }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\ns\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/user-details/user-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/home/user-details/user-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(_userService, route) {
        this._userService = _userService;
        this.route = route;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.getUserDetails();
    };
    UserDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this._userService.getUser(this.userId)
            .subscribe(function (res) {
            _this.user = res.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
        });
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/dashboard/home/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/dashboard/home/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/users-list/users-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/home/users-list/users-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/home/users-list/users-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/home/users-list/users-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngFor=\"let user of users\">\r\n    <div routerLink=\"/home/userDetails/{{user._id}}\" class=\"card\" style=\"margin-top: 10px; width:400px\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">{{user?.username}}</h4>\r\n        <p class=\"card-title\">{{user?.created_date | date: 'longDate' }}</p>\r\n        <a (click)=\"onAddNewFriend(user._id)\" class=\" btn btn-primary \">+ Friend</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/users-list/users-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/home/users-list/users-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(_userService) {
        this._userService = _userService;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.getUserList();
    };
    UsersListComponent.prototype.onAddNewFriend = function (friend_id) {
        var data = {
            friend_id: friend_id
        };
        this._userService.addNewFriend(data)
            .subscribe(function (res) {
            console.log('add new friend response:', res);
        }, function (err) {
            console.log('add new friend err: ', err);
        });
    };
    UsersListComponent.prototype.getUserList = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (res) {
            _this.users = res.users;
            console.log(res.users);
        }, function (err) {
            console.log('user get error: ', err);
        });
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/dashboard/home/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/dashboard/home/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-buttons {\r\n  margin-right: 10px;\r\n}\r\n\r\n.signin-button {\r\n  margin-right: 10px;\r\n}\r\n\r\n.signup-button {\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\">Friends List</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home/users\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home/friends\">Friends</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <div class=\"auth-buttons\">\r\n      </div>\r\n\r\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Logout</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL;
    }
    AuthService.prototype.signin = function (user) {
        return this._http.post(this.BASE_URL + '/auth/signin', user);
    };
    AuthService.prototype.signup = function (user) {
        return this._http.post(this.BASE_URL + '/auth/signup', user);
    };
    AuthService.prototype.checkUserName = function (user_name) {
        return this._http.post(this.BASE_URL + '/auth/checkUsername', user_name);
    };
    AuthService.prototype.checkEmail = function (user_name) {
        return this._http.post(this.BASE_URL + '/auth/checkEmail', user_name);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/token-interceptor.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/token-interceptor.service.ts ***!
  \**************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(_intjector) {
        this._intjector = _intjector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this._intjector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReuest = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReuest);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL;
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this.BASE_URL + '/users');
    };
    UserService.prototype.getUser = function (user_id) {
        console.log('user id inside service :', user_id);
        return this._http.get(this.BASE_URL + '/users/' + user_id);
    };
    UserService.prototype.getfriendList = function () {
        return this._http.get(this.BASE_URL + '/friends');
    };
    UserService.prototype.addNewFriend = function (data) {
        return this._http.post(this.BASE_URL + '/users/addNewFriend', data);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/validators/inputValidators.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/validators/inputValidators.ts ***!
  \******************************************************/
/*! exports provided: InputValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidators", function() { return InputValidators; });
var InputValidators = /** @class */ (function () {
    function InputValidators() {
    }
    InputValidators.isInputEmpty = function (control) {
        console.log('control in validator input cannot be empty: ', control);
        // console.log('first name value : ', control.controls.firstName.value);
        if (control.value && control.value.trim().length === 0) {
            return { isInputEmpty: true };
        }
        else {
            return null;
        }
    };
    InputValidators.validatePassword = function (passwordFormcontrol) {
        console.log('control in validator: ', passwordFormcontrol);
        // console.log('control in validator: ', passwordFormcontrol);
        var password = String(passwordFormcontrol.controls.password.value);
        var repeatPassword = String(passwordFormcontrol.controls.repeatPassword.value);
        console.log('Password: ', password);
        console.log('Repeat  Password: ', repeatPassword);
        /*  if (repeatPassword.length <= 0) {
           return null;
         }
      */
        if (repeatPassword !== password) {
            console.log('Inside if:');
            return {
                doesNotMatchPassword: true
            };
        }
        else {
            return { doesNotMatchPassword: false };
        }
    };
    return InputValidators;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-welcomeheader></app-welcomeheader>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcomeheader/welcomeheader.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/welcome/welcomeheader/welcomeheader.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcomeheader/welcomeheader.component.html":
/*!********************************************************************!*\
  !*** ./src/app/welcome/welcomeheader/welcomeheader.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\">Friends List</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <div class=\"auth-buttons\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0 signin-button\" type=\"submit\" style=\"margin-right: 10px\" routerLink=\"/signin\">Signin</button>\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0 signup-button \" type=\"submit \" routerLink=\"/signup\">Register</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcomeheader/welcomeheader.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/welcome/welcomeheader/welcomeheader.component.ts ***!
  \******************************************************************/
/*! exports provided: WelcomeheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeheaderComponent", function() { return WelcomeheaderComponent; });
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

var WelcomeheaderComponent = /** @class */ (function () {
    function WelcomeheaderComponent() {
    }
    WelcomeheaderComponent.prototype.ngOnInit = function () {
    };
    WelcomeheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcomeheader',
            template: __webpack_require__(/*! ./welcomeheader.component.html */ "./src/app/welcome/welcomeheader/welcomeheader.component.html"),
            styles: [__webpack_require__(/*! ./welcomeheader.component.css */ "./src/app/welcome/welcomeheader/welcomeheader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeheaderComponent);
    return WelcomeheaderComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    BASE_URL: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Workspace\MEAN\My-Friend-List\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map