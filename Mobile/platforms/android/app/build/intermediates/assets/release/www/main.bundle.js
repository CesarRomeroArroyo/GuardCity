webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"!isLogged\" (logIn)=\"onLogIn()\"></app-login>\n<app-inicio *ngIf=\"isLogged\"></app-inicio>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isLogged = false;
    }
    AppComponent.prototype.onLogIn = function ($event) {
        this.isLogged = true;
    };
    AppComponent.prototype.onLogOut = function ($event) {
        this.isLogged = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_inicio_inicio_component__ = __webpack_require__("./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_principal_principal_component__ = __webpack_require__("./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_login_login_component__ = __webpack_require__("./src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_reportes_reportes_component__ = __webpack_require__("./src/app/componentes/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_historicos_historicos_component__ = __webpack_require__("./src/app/componentes/historicos/historicos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_reporte_historico_reporte_historico_component__ = __webpack_require__("./src/app/componentes/reporte-historico/reporte-historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_reportes_dia_reportes_dia_component__ = __webpack_require__("./src/app/componentes/reportes-dia/reportes-dia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_reportes_seguimiento_reportes_seguimiento_component__ = __webpack_require__("./src/app/componentes/reportes-seguimiento/reportes-seguimiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__servicios_http_interceptor_service__ = __webpack_require__("./src/app/servicios/http-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__servicios_onesignal_service__ = __webpack_require__("./src/app/servicios/onesignal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_usuario_usuario_component__ = __webpack_require__("./src/app/componentes/usuario/usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_zonas_zonas_component__ = __webpack_require__("./src/app/componentes/zonas/zonas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__("./node_modules/@ionic-native/geolocation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_vibration__ = __webpack_require__("./node_modules/@ionic-native/vibration/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__("./node_modules/@ionic-native/camera/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__componentes_inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__componentes_principal_principal_component__["a" /* PrincipalComponent */],
                __WEBPACK_IMPORTED_MODULE_12__componentes_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__componentes_reportes_reportes_component__["a" /* ReportesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__componentes_historicos_historicos_component__["a" /* HistoricosComponent */],
                __WEBPACK_IMPORTED_MODULE_15__componentes_reporte_historico_reporte_historico_component__["a" /* ReporteHistoricoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__componentes_reportes_dia_reportes_dia_component__["a" /* ReportesDiaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__componentes_reportes_seguimiento_reportes_seguimiento_component__["a" /* ReportesSeguimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__componentes_usuario_usuario_component__["a" /* UsuarioComponent */],
                __WEBPACK_IMPORTED_MODULE_23__componentes_zonas_zonas_component__["a" /* ZonasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* APP_ROUTING */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_24__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCbYaH_udpTgmdVulwBcv4Lc_0auNY9bS4'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__servicios_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_21__servicios_onesignal_service__["a" /* OnesignalService */],
                __WEBPACK_IMPORTED_MODULE_20__servicios_local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_8__app_settings__["a" /* AppSettings */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_vibration__["a" /* Vibration */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__servicios_http_interceptor_service__["a" /* CatchInterceptorService */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentes_principal_principal_component__ = __webpack_require__("./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_reportes_reportes_component__ = __webpack_require__("./src/app/componentes/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_historicos_historicos_component__ = __webpack_require__("./src/app/componentes/historicos/historicos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_reporte_historico_reporte_historico_component__ = __webpack_require__("./src/app/componentes/reporte-historico/reporte-historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_reportes_dia_reportes_dia_component__ = __webpack_require__("./src/app/componentes/reportes-dia/reportes-dia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_reportes_seguimiento_reportes_seguimiento_component__ = __webpack_require__("./src/app/componentes/reportes-seguimiento/reportes-seguimiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_usuario_usuario_component__ = __webpack_require__("./src/app/componentes/usuario/usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_zonas_zonas_component__ = __webpack_require__("./src/app/componentes/zonas/zonas.component.ts");









var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'reportes', component: __WEBPACK_IMPORTED_MODULE_2__componentes_reportes_reportes_component__["a" /* ReportesComponent */] },
    { path: 'reportedia', component: __WEBPACK_IMPORTED_MODULE_5__componentes_reportes_dia_reportes_dia_component__["a" /* ReportesDiaComponent */] },
    { path: 'historicos', component: __WEBPACK_IMPORTED_MODULE_3__componentes_historicos_historicos_component__["a" /* HistoricosComponent */] },
    { path: 'reportehistorico/:id', component: __WEBPACK_IMPORTED_MODULE_4__componentes_reporte_historico_reporte_historico_component__["a" /* ReporteHistoricoComponent */] },
    { path: 'reporteseguimiento/:id', component: __WEBPACK_IMPORTED_MODULE_6__componentes_reportes_seguimiento_reportes_seguimiento_component__["a" /* ReportesSeguimientoComponent */] },
    { path: 'usuario', component: __WEBPACK_IMPORTED_MODULE_7__componentes_usuario_usuario_component__["a" /* UsuarioComponent */] },
    { path: 'zonas', component: __WEBPACK_IMPORTED_MODULE_8__componentes_zonas_zonas_component__["a" /* ZonasComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/app.settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSettings = /** @class */ (function () {
    function AppSettings() {
        // public endPointCore = 'http://mycsoftware.com/zinniaCore/apiCore.php/';
        this.endPointCore = 'http://localhost:56929/api/';
        this.endPointTitan = 'http://localhost:56929/api/';
    }
    AppSettings.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    AppSettings.prototype.getCurrentDay = function () {
        var today = new Date();
        var dd = today.getDate().toString();
        var mm = (today.getMonth() + 1).toString();
        var yyyy = today.getFullYear().toString();
        if (parseInt(dd, 0) < 10) {
            dd = "0" + dd;
        }
        if (parseInt(mm, 0) < 10) {
            mm = "0" + mm;
        }
        return dd + "/" + mm + "/" + yyyy;
    };
    AppSettings.prototype.getCurrentHour = function () {
        var d = new Date();
        return this.addZero(d.getHours()) + ":" + this.addZero(d.getMinutes()) + ":" + this.addZero(d.getSeconds());
    };
    AppSettings.prototype.addZero = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    };
    AppSettings.prototype.getIconosMapas = function (result) {
        result.forEach(function (data) {
            switch (data.tipo) {
                case 'Homicidio':
                    data['icon'] = {
                        url: 'assets/img/iconRojo.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Robo':
                    data['icon'] = {
                        url: 'assets/img/iconRosado.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Consumo Venta de Drogas':
                    data['icon'] = {
                        url: 'assets/img/iconVerde.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Falta de Alumbrado':
                    data['icon'] = {
                        url: 'assets/img/iconRosadoFuerte.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Fuga de Agua':
                    data['icon'] = {
                        url: 'assets/img/iconAzulRey.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Fuga de Gas':
                    data['icon'] = {
                        url: 'assets/img/iconGris.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Objetos Perdidos':
                    data['icon'] = {
                        url: 'assets/img/iconNaranaja.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Otros':
                    data['icon'] = {
                        url: 'assets/img/iconAmarillo.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Vandalismo':
                    data['icon'] = {
                        url: 'assets/img/iconNaranajaOscuro.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Vehiculo Mal Parqueado':
                    data['icon'] = {
                        url: 'assets/img/iconVerdeClaro.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Violacion':
                    data['icon'] = {
                        url: 'assets/img/iconAzulCeleste.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Violencia Intrafamiliar':
                    data['icon'] = {
                        url: 'assets/img/iconNormal.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
                case 'Zona Sospechosa':
                    data['icon'] = {
                        url: 'assets/img/iconMorado.png',
                        scaledSize: {
                            height: 45,
                            width: 45
                        }
                    };
                    break;
            }
        });
        return result;
    };
    AppSettings.prototype.getIconosMapasIndividual = function (data) {
        switch (data[0].tipo) {
            case 'Homicidio':
                data[0]['icon'] = {
                    url: 'assets/img/iconRojo.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Robo':
                data[0]['icon'] = {
                    url: 'assets/img/iconRosado.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Consumo Venta de Drogas':
                data[0]['icon'] = {
                    url: 'assets/img/iconVerde.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Falta de Alumbrado':
                data[0]['icon'] = {
                    url: 'assets/img/iconRosadoFuerte.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Fuga de Agua':
                data[0]['icon'] = {
                    url: 'assets/img/iconAzulRey.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Fuga de Gas':
                data[0]['icon'] = {
                    url: 'assets/img/iconGris.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Objetos Perdidos':
                data[0]['icon'] = {
                    url: 'assets/img/iconNaranaja.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Otros':
                data[0]['icon'] = {
                    url: 'assets/img/iconNegro.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Vandalismo':
                data[0]['icon'] = {
                    url: 'assets/img/iconNaranajaOscuro.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Vehiculo Mal Parqueado':
                data[0]['icon'] = {
                    url: 'assets/img/iconVerdeClaro.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Violacion':
                data[0]['icon'] = {
                    url: 'assets/img/iconAzulCeleste.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Violencia Intrafamiliar':
                data[0]['icon'] = {
                    url: 'assets/img/iconNormal.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
            case 'Zona Sospechosa':
                data[0]['icon'] = {
                    url: 'assets/img/iconMorado.png',
                    scaledSize: {
                        height: 45,
                        width: 45
                    }
                };
                break;
        }
        return data[0];
    };
    AppSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/componentes/historicos/historicos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/historicos/historicos.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"background: #2c8eb3\">\n    <div class=\"side-navbar\">\n      <div style=\"padding-bottom: 10px;  text-align: center\"><a class=\"brand-logo\">Mis Historico</a></div>\n      <a href=\"javascript:history.back(1)\">\n          <i class=\"fa fa-arrow-left fa-2x\" style=\"margin-left: 10px;\"></i>\n      </a>\n    </div>\n</nav>\n<div class=\"card z-depth-2\">\n  \n      \n          <ul class=\"collection\">\n\n              <li class=\"collection-item avatar\" *ngFor=\"let reporte of reportes\" [routerLink]=\"['/reportehistorico', reporte.idunico]\">\n                <a style=\"color:black\" [routerLink]=\"['/reportehistorico', reporte.idunico]\">\n                  <i class=\"fa fa-bullhorn circle\" style=\"background: #227595\">\n                    \n                  </i>\n                  <span class=\"title\">{{reporte.tipo}} <span class=\"badge red\" style=\"color:white\">{{reporte.fecha}}, {{reporte.hora}}</span> </span>\n                  <p>{{reporte.comentario.substring(0, 70)}} ...\n                  </p>\n                </a>\n              </li>\n\n            </ul>\n      \n  \n  <input type=\"hidden\" id=\"latzona\"/>\n  <input type=\"hidden\" id=\"lonzona\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/historicos/historicos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricosComponent = /** @class */ (function () {
    function HistoricosComponent(service, appSettings, local) {
        this.service = service;
        this.appSettings = appSettings;
        this.local = local;
    }
    HistoricosComponent.prototype.ngOnInit = function () {
        this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
        this.obtenerTodosReportes();
    };
    HistoricosComponent.prototype.obtenerTodosReportes = function () {
        var _this = this;
        this.service.obtenerDatosPorUsuario('Reportes', this.usuario.id).subscribe(function (result) {
            _this.reportes = result;
            console.log(_this.reportes);
        });
    };
    HistoricosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-historicos',
            template: __webpack_require__("./src/app/componentes/historicos/historicos.component.html"),
            styles: [__webpack_require__("./src/app/componentes/historicos/historicos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_3__servicios_local_storage_service__["a" /* LocalStorageService */]])
    ], HistoricosComponent);
    return HistoricosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__("./src/app/componentes/inicio/inicio.component.html"),
            styles: [__webpack_require__("./src/app/componentes/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"z-depth-0\" style=\"height: auto; background: #2c8eb3\">\n  <div style='display: block;top:0;left:0;'>\n      <img src=\"assets/img/SeCivico.png\" alt=\"\" class='responsive-img'/>\n  </div> \n</nav>\n<div class=\"container\">\n  <div class=\" col s12 m12\" style=\"text-align: center; color:white;\">\n      \n      <b> Bienvenido a GuardCity, un aplicativo con el que hacemos nuestra ciudad mas segura.</b>\n      <br/>\n      \n  </div>\n  <div class=\" col s12 m12\" style=\"text-align: justify; color:white;\">\n     \n      \n  </div>\n  \n</div>\n<div class=\" col s12 m12\" style=\"text-align: justify;\">\n  <div class=\"card z-depth-2\">\n    <div class=\"card-content black-text\">\n        <div class=\"container\" style=\"text-align: center\">\n            <div class=\"col s12\">\n                Ingresa tus credenciales para poder iniciar a usar GuardCity:\n                <br/>\n                <label><b>Email</b></label>\n                  <input id=\"email\" name=\"email\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"usuario.correo\">\n              </div>\n              \n              <label><b>Contraseña </b></label>\n              <input id=\"password\" name=\"password\" type=\"password\" style=\"text-align: center\" [(ngModel)]=\"usuario.password\">\n            <div class=\"col s12\">\n                <a class=\"waves-effect waves-light btn-large\" style=\"width: 99%\" (click)=\"logearse()\"><i class=\"fa fa-sign-in\"></i> Ingresar</a>                                \n            </div>\n            <div class=\"col s12\">  \n                <br/>\n            </div>\n            <div class=\"col s12\">\n                <a class=\"waves-effect waves-light\" style=\"width: 99%\" (click)=\"mostrarNuevoUsuario() \">Registrar Nuevo Usuario</a>\n            </div>\n        </div>\n    </div>\n    <input type=\"hidden\" id=\"latzona\"/>\n    <input type=\"hidden\" id=\"lonzona\"/>\n  </div>\n  \n</div>\n\n\n<footer class=\"page-footer\" style=\"background: #227595; color: white; text-align: justify\">\n\n<div class=\"footer-copyright\">\n  <div class=\"container\">\n      2016 GuardCity\n  \n  </div>\n</div>\n</footer>\n\n<div id=\"modal1\" class=\"modal\">\n  <div class=\"modal-content\" style=\"text-align: center\">\n    <h5>GuardCity</h5>\n    <p>{{mensaje}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Aceptar</a>\n  </div>\n</div>\n\n<div id=\"modal\" class=\"modal bottom-sheet\" style=\"height: 90% !important; max-height: 90% !important; \">\n  <div class=\"modal-content\">\n    <p>Registrar Nuevo Usuario</p>\n\n    <div class=\"col s12\">\n      <label><b>Nombre</b></label>\n        <input id=\"nombre\" name=\"nombre\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"nuevoUsuario.nombre\">\n    </div>\n    <div class=\"col s12\">\n      <label><b># Celular</b></label>\n        <input id=\"celular\" name=\"celualar\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"nuevoUsuario.celular\">\n    </div>\n    <div class=\"col s12\">\n      <label><b>Email</b></label>\n        <input id=\"correo\" name=\"correo\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"nuevoUsuario.correo\">\n    </div>\n    <div class=\"col s12\">\n      <label><b>Contraseña</b></label>\n        <input id=\"password\" name=\"password\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"nuevoUsuario.password\">\n    </div>\n    <div class=\"col s12\">\n        <label><b>Ciudad</b></label>\n        <select class=\"browser-default\" [(ngModel)]=\"nuevoUsuario.ciudad\" name=\"ciudad\" style=\"text-align: center\">\n          <option *ngFor=\"let c of ciudades\" [ngValue]=\"c.texto\">{{c.texto}}</option>\n        </select>\n    </div>\n    <div class=\"col s12\">\n      <label><b>Barrio</b></label>\n        <input id=\"barrio\" name=\"barrio\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"nuevoUsuario.barrio\">\n    </div>\n    <div class=\"col s12\">\n        <a class=\"waves-effect waves-light btn-large\" style=\"width: 99%\" (click)=\"agregarNuevoUsuario()\" ><i class=\"fa fa-plus\"></i> Agregar</a>\n    </div>\n  </div>\n</div>\n\n<div id=\"modalCargando\" class=\"modal\">\n  <div class=\"modal-content\" style=\"text-align: center\">\n    <h5>GuardCity</h5>\n    <i class=\"fa fa-circle-o-notch fa-5x fa-spin\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, local) {
        this.service = service;
        this.local = local;
        this.logIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.usuario = { correo: '', password: '' };
        this.nuevoUsuario = { barrio: '', celular: '', ciudad: '', correo: '', nombre: '', password: '', placa: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.local.obtener('GUARDCITY_USER')) {
            this.logIn.emit();
        }
        else {
            this.service.obtenerDatos('Ciudades').subscribe(function (result) {
                _this.ciudades = result;
            });
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        $('#modal1').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '20%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
        $('#modalCargando').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '20%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
        $('#modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '80%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
    };
    LoginComponent.prototype.mostrarNuevoUsuario = function () {
        $('#modal').modal('open');
    };
    LoginComponent.prototype.logearse = function () {
        var _this = this;
        this.service.obtenerDatosLogin(this.usuario.correo, this.usuario.password).subscribe(function (result) {
            if (result.length > 0) {
                _this.obtenerCiudad(result[0]);
                _this.local.agregar('GUARDCITY_USER', JSON.stringify(result));
                _this.logIn.emit();
            }
            else {
                _this.mensaje = 'El email o la contraseña no son correctos';
                $('#modal1').modal('open');
            }
        });
    };
    LoginComponent.prototype.obtenerCiudad = function (usuario) {
        var _this = this;
        this.service.obtenerDatosCiudadUsuario(usuario.ciudad).subscribe(function (result) {
            _this.local.agregar('GUARDCITY_CITY', JSON.stringify(result));
        });
    };
    LoginComponent.prototype.agregarNuevoUsuario = function () {
        var _this = this;
        $('#modal').modal('close');
        $('#modalCargando').modal('open');
        this.service.guardarDatos('Usuario', this.nuevoUsuario);
        setTimeout(function () {
            $('#modalCargando').modal('close');
            _this.mensaje = 'Usuario Creado Correctamente';
            $('#modal1').modal('open');
        }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "logIn", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/componentes/login/login.component.html"),
            styles: [__webpack_require__("./src/app/componentes/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__servicios_local_storage_service__["a" /* LocalStorageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"z-depth-0\" style=\"height: auto; background: #2c8eb3\">\n  <div style='display: block;top:0;left:0;'>\n      <img src=\"assets/img/SeCivico.png\" alt=\"\" class='responsive-img'/>\n  </div> \n  <div class=\"side-navbar \" >                               \n      <div style='position:absolute;top:0;left:0;'>\n          <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\">\n              <img src=\"assets/ico/ic_menu_white_18dp.png\" alt=\"\"/>\n          </a>\n          \n          <ul class=\"side-nav\" id=\"mobile-demo\" style=\"background: #062036; color:white\">\n              <br/>\n            <li class=\"\">\n              <a>\n                  <div class=\"row\">                   \n                      <div class=\"col s12\" style=\"vertical-align: central;color:white\" [routerLink]=\"['usuario']\"><i class=\"fa fa-user\"></i> Tu Usuario</div>\n                  </div>\n              </a>\n            </li>\n           \n          </ul>\n      </div>\n      <div style='position:absolute;top:5px;right:15px;'>\n          <a class=\"btn btn-floating pulse right red\" [routerLink]=\"['reportedia']\" *ngIf=\"this.numReportes>0\">\n              <i class=\"fa fa-exclamation\"></i>\n          </a>\n      </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <!--<div class=\" col s12 m12\" style=\"text-align: center; color:white;\">\n      \n      <b> Bienvenido a GuardCity, un aplicativo con el que hacemos nuestra ciudad mas segura.</b>\n      <br/>\n      \n  </div>-->\n  <div class=\" col s12 m12\" style=\"text-align: justify; color:white;\">\n      \n      <b>GuardCity</b> es una aplicación que permite al usuario hacer parte de la mas grande comunidad de denuncia ciudadana \n      en conjunto con las autoridades de tu ciudad en tiempo real, con GuardCity hacemos nuestra ciudad mas segura.\n      <br/>\n      <br/>\n      Con GuardCity puedes:\n  </div>\n  \n</div>\n<div class=\" col s12 m12\" style=\"text-align: justify;\">\n      <ul class=\"collection\">\n          <li class=\"collection-item avatar\" [routerLink]=\"['reportes']\">\n            <a style=\"color:black\" [routerLink]=\"['reportes']\">\n              <i class=\"fa fa-bullhorn circle\" style=\"background: #227595\">\n                \n              </i>\n              <span class=\"title\">Reportes de Actividades</span>\n              <p>Reportar diferentes tipos de Actividades en tu ciudad\n              </p>\n            </a>\n          </li>\n          <li class=\"collection-item avatar\" [routerLink]=\"['historicos']\">\n            <a style=\"color:black\"  [routerLink]=\"['historicos']\">\n              <i class=\"fa fa-folder-open circle\" style=\"background: #227595\"></i>\n              <span class=\"title\">Historico de Mis Reportes</span>\n              <p>Mira tus reportes y el seguimiento de los mismos\n              </p>\n            </a>\n          </li>\n          <li class=\"collection-item avatar\" [routerLink]=\"['zonas']\">\n            <a style=\"color:black\"  [routerLink]=\"['zonas']\">\n              <i class=\"fa fa-map circle\" style=\"background: #227595\"></i>\n              <span class=\"title\">Zonas en tu Ciudad</span>\n              <p>Conoce cuales son las zonas seguras e inseguras de tu ciudad\n              </p>\n            </a>\n          </li>\n          <!--<li class=\"collection-item avatar\" >\n            <a style=\"color:black\"  [routerLink]=\"['reportes']\">\n              <i class=\"fa fa-map-marker circle\" style=\"background: #227595\"></i>\n              <span class=\"title\">Rutas Seguras</span>\n              <p>Programa tus rutas e informa si te desvias\n              </p>\n            </a>\n          </li>\n          <li class=\"collection-item avatar\" >\n            <a style=\"color:black\"  [routerLink]=\"['reportes']\">\n              <i class=\"fa fa-search circle\" style=\"background: #227595\"></i>\n              <span class=\"title\">Encuentrame</span>\n              <p>Conoce el lugar donde esta tu equipo\n              </p>\n            </a>\n          </li>-->\n        </ul>\n  </div>\n<div class=\"container\">\n  <div class=\" col s12 m12\" style=\"text-align: justify; color:white;\">\n       Todo esto en tiempo real, creando una comunidad colaborativa unica y sin precedentes,\n      <br/><b>GuardCity</b> hacemos una mejor ciudad\n      <br/>\n      <br/>\n  </div>                        \n</div>\n\n\n<footer class=\"page-footer\" style=\"background: #227595; color: white; text-align: justify\">\n<div class=\"container\"> \n    <div class=\"row\">\n        <div class=\"col l12\">\n           <i class=\"fa fa-exclamation-triangle\"></i> <b>GuardCity</b> no se hacen responsable de la informacion enviada por los usuarios, \n           se realizara un filtro de la informacion que se considere inapropiada. \n           Toda informacion es generada por los usuarios y es de su completa propiedad y responsabilidad.\n           <br/><b>Recuerda que aportar informacion real hace mas fuerte la comunidad.</b>\n        </div>\n        \n    </div>\n      \n</div>\n<div class=\"footer-copyright\">\n  <div class=\"container\">\n      2016 GuardCity\n  \n  </div>\n</div>\n</footer>\n\n  \n\n<input id=\"lon\" type=\"hidden\">\n<input id=\"lat\" type=\"hidden\">\n<input id=\"limit\" type=\"hidden\">\n"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__("./node_modules/@ionic-native/geolocation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__("./node_modules/@ionic-native/vibration/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(service, appSettings, geolocation, vibration) {
        this.service = service;
        this.appSettings = appSettings;
        this.geolocation = geolocation;
        this.vibration = vibration;
        this.numReportes = 0;
    }
    PrincipalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.obtenerDatosPorFecha('Reportes', this.appSettings.getCurrentDay()).subscribe(function (result) {
            _this.numReportes = result.length;
            var verificar = false;
            if (_this.numReportes !== result.length) {
                verificar = true;
            }
            if (verificar) {
                Materialize.toast('Nuevo Reporte de Seguimiento', 3000, 'rounded');
                _this.vibration.vibrate(1000);
            }
            _this.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                // resp.coords.longitude
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    PrincipalComponent.prototype.ngAfterViewInit = function () {
        $('.button-collapse').sideNav({
            menuWidth: 250,
            edge: 'left',
            closeOnClick: true,
            draggable: true
        });
    };
    PrincipalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-principal',
            template: __webpack_require__("./src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__("./src/app/componentes/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */]])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/reporte-historico/reporte-historico.component.css":
/***/ (function(module, exports) {

module.exports = ".modal.bottom-sheet {\r\n    height: 90% !important;\r\n    max-height: 90% !important;\r\n\r\n}\r\n\r\nagm-map {\r\n    height: 50vh;\r\n    }"

/***/ }),

/***/ "./src/app/componentes/reporte-historico/reporte-historico.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-extended\" style=\"background: #2c8eb3\">\n        <div class=\"side-navbar\">\n          <div style=\"padding-bottom: 10px;  text-align: center\"><a class=\"brand-logo\">Reporte</a></div>\n          <a href=\"javascript:history.back(1)\">\n              <i class=\"fa fa-arrow-left fa-2x\" style=\"margin-left: 10px;\"></i>\n          </a>\n        </div>\n        <div class=\"nav-content center\">\n            \n            <i class=\"fa fa-bullhorn fa-4x\" ></i><br/>\n            <b style=\"font-size: 25px\">{{reporte.tipo}}</b> <br/>\n            <div class=\"nav-content right\">\n                <span class=\"badge red\" style=\"color:white\">{{reporte.fecha}}, {{reporte.hora}}</span>\n            </div>\n            <br/>\n            <br/>\n        </div>\n        \n    </nav>\n    <div class=\"card z-depth-2\">\n        <div class=\"card-image\">\n            <div style=\"width: 100%; text-align: center\">\n                <img [src]=\"imagen.src\" [ngStyle]=\"{'width':imagen.width, 'height': imagen.height}\">\n            </div>\n        </div>\n        <div class=\"card-content black-text\">\n            <b>Mas Informacion:</b> <br/>\n            {{reporte.comentario}}\n        </div>\n    </div>\n    \n\n    <div class=\"card z-depth-2\">\n            <div class=\"card-content black-text\">\n              <b>Mapa de seguimiento</b>\n              <agm-map [latitude]=\"reporte.latitud\" [longitude]=\"reporte.longitud\" [zoom]=\"13\">\n                  <agm-marker [latitude]=\"obtenerFlotante(reporte.latitud)\" [longitude]=\"obtenerFlotante(reporte.longitud)\" [iconUrl]=\"reporte.icon\">\n                      <agm-info-window>\n                        <b>{{reporte.tipo}}</b><br>\n                        {{reporte.comentario}}\n                      </agm-info-window>\n                  </agm-marker>\n                  <agm-marker [latitude]=\"obtenerFlotante(repo.latitud)\" [longitude]=\"obtenerFlotante(repo.longitud)\" *ngFor=\"let repo of seguimientos\">\n                      <agm-info-window>{{repo.comentario}}</agm-info-window>\n                  </agm-marker>\n              </agm-map>\n            </div>\n        </div>\n\n    <div class=\"card z-depth-2\" *ngFor=\"let seguimiento of seguimientos\">\n      <div class=\"card-content black-text\">\n          {{seguimiento.comentario}} <br/>\n          <div class=\"nav-content right\">\n              <span class=\"badge red\" style=\"color:white\">{{seguimiento.fecha}}</span>\n          </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/componentes/reporte-historico/reporte-historico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteHistoricoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__("./node_modules/@ionic-native/camera/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReporteHistoricoComponent = /** @class */ (function () {
    function ReporteHistoricoComponent(service, activatedRoute, appSetting, local, domSanitizer, camera) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.appSetting = appSetting;
        this.local = local;
        this.domSanitizer = domSanitizer;
        this.camera = camera;
        this.seguimiento = { comentario: '', fecha: '', idunico: '', latitud: '', longitud: '' };
        this.imagen = { src: 'assets/img/camara.jpg', width: '50%', height: '50%' };
    }
    ReporteHistoricoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.ciudad = JSON.parse(_this.local.obtener('GUARDCITY_CITY'))[0];
            _this.ciudad.latitud = parseFloat(_this.ciudad.latitud);
            _this.ciudad.longitud = parseFloat(_this.ciudad.longitud);
            _this.idReporte = params['id'];
            console.log();
            _this.buscarReporte();
        });
    };
    ReporteHistoricoComponent.prototype.buscarReporte = function () {
        var _this = this;
        this.service.obtenerDatosPorIdUnico('Reportes', this.idReporte).subscribe(function (result) {
            _this.reporte = _this.appSetting.getIconosMapasIndividual(result);
            if (_this.reporte.imagen !== '') {
                var img = 'data:image/jpeg;base64,' + _this.reporte.imagen;
                _this.imagen = { src: _this.domSanitizer.bypassSecurityTrustUrl(img), width: '100%', height: '100%' };
            }
            _this.buscarSeguimiento();
        });
    };
    ReporteHistoricoComponent.prototype.buscarSeguimiento = function () {
        var _this = this;
        this.service.obtenerDatosPorIdUnico('Seguimientos', this.idReporte).subscribe(function (result) {
            _this.seguimientos = result;
            console.log(_this.seguimientos);
        });
    };
    ReporteHistoricoComponent.prototype.ngAfterViewInit = function () {
        $('.modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '80%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
    };
    ReporteHistoricoComponent.prototype.obtenerFlotante = function (valor) {
        return parseFloat(valor);
    };
    ReporteHistoricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reporte-historico',
            template: __webpack_require__("./src/app/componentes/reporte-historico/reporte-historico.component.html"),
            styles: [__webpack_require__("./src/app/componentes/reporte-historico/reporte-historico.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], ReporteHistoricoComponent);
    return ReporteHistoricoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/reportes-dia/reportes-dia.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/reportes-dia/reportes-dia.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"background: #2c8eb3\">\n    <div class=\"side-navbar\">\n      <div style=\"padding-bottom: 10px;  text-align: center\"><a class=\"brand-logo\">Reportes de Hoy</a></div>\n      <a [routerLink]=\"['/principal']\">\n          <i class=\"fa fa-arrow-left fa-2x\" style=\"margin-left: 10px;\"></i>\n      </a>\n    </div>\n</nav>\n<div class=\"card z-depth-2\">\n          <select class=\"browser-default\" name=\"reporteTipo\" [(ngModel)]=\"tipo\" (change)=\"seleccionarTipo()\">\n            <option value=\"1\">Todos los Reportes</option>\n            <option value=\"2\">Mis Reportes</option>\n          </select>\n          <br/>\n          <ul class=\"collection\">\n              <li class=\"collection-item avatar\" *ngFor=\"let reporte of reportes\">\n                <a style=\"color:black\" [routerLink]=\"['/reporteseguimiento', reporte.idunico]\">\n                  <i class=\"fa fa-bullhorn circle\" style=\"background: #227595\">\n                    \n                  </i>\n                  <span class=\"title\">{{reporte.tipo}} <span class=\"badge red\" style=\"color:white\">{{reporte.fecha}}, {{reporte.hora}}</span> </span>\n                  <p>{{reporte.comentario.substring(0, 70)}} ...\n                  </p>\n                </a>\n              </li>\n            </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/reportes-dia/reportes-dia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesDiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportesDiaComponent = /** @class */ (function () {
    function ReportesDiaComponent(service, appSettings, local) {
        this.service = service;
        this.appSettings = appSettings;
        this.local = local;
        this.tipo = '1';
    }
    ReportesDiaComponent.prototype.ngOnInit = function () {
        this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
        this.obtenerTodosReportes();
    };
    ReportesDiaComponent.prototype.seleccionarTipo = function () {
        if (this.tipo === '1') {
            this.obtenerTodosReportes();
        }
        else {
            this.obtenerReportesPropios();
        }
    };
    ReportesDiaComponent.prototype.obtenerTodosReportes = function () {
        var _this = this;
        this.service.obtenerDatosPorFecha('Reportes', this.appSettings.getCurrentDay()).subscribe(function (result) {
            _this.reportes = result;
        });
    };
    ReportesDiaComponent.prototype.obtenerReportesPropios = function () {
        var _this = this;
        this.service.obtenerDatosPorUsuarioFecha('Reportes', this.usuario.id, this.appSettings.getCurrentDay()).subscribe(function (result) {
            _this.reportes = result;
        });
    };
    ReportesDiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reportes-dia',
            template: __webpack_require__("./src/app/componentes/reportes-dia/reportes-dia.component.html"),
            styles: [__webpack_require__("./src/app/componentes/reportes-dia/reportes-dia.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_3__servicios_local_storage_service__["a" /* LocalStorageService */]])
    ], ReportesDiaComponent);
    return ReportesDiaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/reportes-seguimiento/reportes-seguimiento.component.css":
/***/ (function(module, exports) {

module.exports = ".modal.bottom-sheet {\r\n    height: 90% !important;\r\n    max-height: 90% !important;\r\n\r\n}\r\nagm-map {\r\n    height: 50vh;\r\n    }"

/***/ }),

/***/ "./src/app/componentes/reportes-seguimiento/reportes-seguimiento.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-extended\" style=\"background: #2c8eb3\">\n    <div class=\"side-navbar\">\n      <div style=\"padding-bottom: 10px;  text-align: center\"><a class=\"brand-logo\">Reporte</a></div>\n      <a href=\"javascript:history.back(1)\">\n          <i class=\"fa fa-arrow-left fa-2x\" style=\"margin-left: 10px;\"></i>\n      </a>\n    </div>\n    <div class=\"nav-content center\">\n        \n        <i class=\"fa fa-bullhorn fa-4x\" ></i><br/>\n        <b style=\"font-size: 25px\">{{reporte.tipo}}</b> <br/>\n        <div class=\"nav-content right\">\n            <span class=\"badge red\" style=\"color:white\">{{reporte.fecha}}, {{reporte.hora}}</span>\n        </div>\n        <br/>\n        <br/>\n    </div>\n    \n</nav>\n<div class=\"card z-depth-2\">\n    <div class=\"card-image\">\n        <div style=\"width: 100%; text-align: center\">\n            <img [src]=\"imagen.src\" [ngStyle]=\"{'width':imagen.width, 'height': imagen.height}\">\n        </div>\n    </div>\n  <div class=\"card-content black-text\">\n      <b>Mas Informacion:</b> <br/>\n      {{reporte.comentario}}\n  </div>\n</div>\n<div class=\"card z-depth-2\">\n    <div class=\"card-content black-text\">\n      <b>Mapa de seguimiento</b>\n      <agm-map [latitude]=\"reporte.latitud\" [longitude]=\"reporte.longitud\" [zoom]=\"13\">\n          <agm-marker [latitude]=\"obtenerFlotante(reporte.latitud)\" [longitude]=\"obtenerFlotante(reporte.longitud)\" [iconUrl]=\"reporte.icon\">\n              <agm-info-window>\n                <b>{{reporte.tipo}}</b><br>\n                {{reporte.comentario}}\n              </agm-info-window>\n          </agm-marker>\n          <agm-marker [latitude]=\"obtenerFlotante(repo.latitud)\" [longitude]=\"obtenerFlotante(repo.longitud)\" *ngFor=\"let repo of seguimientos\">\n              <agm-info-window>{{repo.comentario}}</agm-info-window>\n          </agm-marker>\n      </agm-map>\n    </div>\n</div>\n<div class=\"card z-depth-2\" *ngFor=\"let seguimiento of seguimientos\">\n    <div class=\"card-image\">\n        <div style=\"width: 100%; text-align: center\">\n            <img [src]=\"seguimiento.imagen\" [ngStyle]=\"{'width':'100%', 'height': '100%'}\">\n        </div>\n    </div>\n    <div class=\"card-content black-text\">\n            <div class=\"nav-content right\">\n                    <span class=\"badge red\" style=\"color:white\">{{seguimiento.fecha}}, {{seguimiento.hora}}</span>\n                </div>\n         <br/>\n         {{seguimiento.comentario}}\n    </div>\n</div>\n\n<div class=\"col s12 right\">\n    <div class=\"fixed-action-btn\">\n        <a class=\"btn-floating btn-large \" style=\"background-color: #282f39\" (click)=\"abrirModalSeguimiento()\">\n          <i class=\"fa fa-plus\"></i>\n        </a>\n      </div>\n</div>\n\n\n\n<div id=\"modalSeguimiento\" class=\"modal bottom-sheet\" style=\"\">\n  <div class=\"modal-content\">\n    <p>Añadir Seguimiento</p>\n    <div class=\"col s12\">\n            \n            <label><b>Fotografia</b></label><br/>\n            <div style=\"width: 100%; text-align: center\">\n                <img [src]=\"imagen2.src\" [ngStyle]=\"{'width':imagen2.width, 'height': imagen2.height}\" (click)=\"obtenerFotografia()\">\n            </div>\n    </div>\n    <br/>\n    <label for=\"textarea1\"><b>Mas informacion </b></label>\n    <div class=\"input-field col s12\">\n        <textarea id=\"descripcion\" class=\"materialize-textarea\" [(ngModel)]=\"seguimiento.comentario\" placeholder=\"Indique Informacion como << moto grande de color X y placas XXX >> o << Sujeto sospechoso con camisa de color verde >>\"></textarea>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"registrarSeguimiento()\" >Aceptar</a>\n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/componentes/reportes-seguimiento/reportes-seguimiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesSeguimientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__("./node_modules/@ionic-native/geolocation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__ = __webpack_require__("./node_modules/@ionic-native/vibration/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicios_onesignal_service__ = __webpack_require__("./src/app/servicios/onesignal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__("./node_modules/@ionic-native/camera/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReportesSeguimientoComponent = /** @class */ (function () {
    function ReportesSeguimientoComponent(service, activatedRoute, appSettings, local, geolocation, vibration, oneSignal, domSanitizer, camera) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.appSettings = appSettings;
        this.local = local;
        this.geolocation = geolocation;
        this.vibration = vibration;
        this.oneSignal = oneSignal;
        this.domSanitizer = domSanitizer;
        this.camera = camera;
        this.seguimiento = { comentario: '', fecha: '', idunico: '', latitud: '', longitud: '', imagen: '', hora: '' };
        this.imagen = { src: 'assets/img/camara.jpg', width: '50%', height: '50%' };
        this.imagen2 = { src: 'assets/img/camara.jpg', width: '50%', height: '50%' };
        this.base64Image = '';
    }
    ReportesSeguimientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.ciudad = JSON.parse(_this.local.obtener('GUARDCITY_CITY'))[0];
            _this.ciudad.latitud = parseFloat(_this.ciudad.latitud);
            _this.ciudad.longitud = parseFloat(_this.ciudad.longitud);
            _this.idReporte = params['id'];
            _this.buscarReporte();
            _this.cameraConfiguration = {
                quality: 50,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE
            };
        });
    };
    ReportesSeguimientoComponent.prototype.obtenerFotografia = function () {
        var _this = this;
        this.camera.getPicture(this.cameraConfiguration).then(function (imageData) {
            _this.base64Image = imageData;
            var img = 'data:image/jpeg;base64,' + imageData;
            _this.imagen2 = { src: _this.domSanitizer.bypassSecurityTrustUrl(img), width: '100%', height: '100%' };
        }, function (err) {
            alert('Ocurrio un error al tratar de usar la camara');
        });
    };
    ReportesSeguimientoComponent.prototype.buscarReporte = function () {
        var _this = this;
        this.service.obtenerDatosPorIdUnico('Reportes', this.idReporte).subscribe(function (result) {
            _this.reporte = _this.appSettings.getIconosMapasIndividual(result);
            if (_this.reporte.imagen !== '') {
                var img = 'data:image/jpeg;base64,' + _this.reporte.imagen;
                _this.imagen = { src: _this.domSanitizer.bypassSecurityTrustUrl(img), width: '100%', height: '100%' };
            }
            _this.buscarSeguimiento();
        });
    };
    ReportesSeguimientoComponent.prototype.buscarSeguimiento = function () {
        var _this = this;
        this.service.obtenerDatosPorIdUnico('Seguimientos', this.idReporte).subscribe(function (result) {
            var verificar = false;
            if (_this.seguimientos && _this.seguimientos.length !== result.length) {
                verificar = true;
            }
            if (verificar) {
                Materialize.toast('Nuevo Reporte de Seguimiento', 3000, 'rounded');
                _this.vibration.vibrate(1000);
            }
            _this.seguimientos = result;
            for (var i = 0; i < _this.seguimientos.length; i++) {
                var img = 'data:image/jpeg;base64,' + _this.seguimientos[i].imagen;
                _this.seguimientos[i].imagen = _this.domSanitizer.bypassSecurityTrustUrl(img);
            }
        });
    };
    ReportesSeguimientoComponent.prototype.registrarSeguimiento = function () {
        var _this = this;
        if (this.seguimiento.comentario !== '') {
            this.geolocation.getCurrentPosition().then(function (resp) {
                _this.seguimiento.latitud = resp.coords.latitude;
                _this.seguimiento.longitud = resp.coords.longitude;
                _this.seguimiento.fecha = _this.appSettings.getCurrentDay();
                _this.seguimiento.idunico = _this.idReporte;
                _this.seguimiento.hora = _this.appSettings.getCurrentHour();
                _this.seguimiento.imagen = _this.base64Image;
                _this.imagen2 = { src: 'assets/img/camara.jpg', width: '50%', height: '50%' };
                _this.service.guardarSeguimientoDatos('Seguimientos', _this.seguimiento);
                _this.oneSignal.enviarPush("Se ha reportado un Seguimiento a " + _this.reporte.tipo + ", " + _this.seguimiento.comentario);
                _this.buscarSeguimiento();
                _this.reiniciarSeguimiento();
            }).catch(function (error) {
                alert('Existe un problema con sus GPS o no tiene instalado un modulo de GPS');
            });
        }
    };
    ReportesSeguimientoComponent.prototype.reiniciarSeguimiento = function () {
        this.seguimiento = { comentario: '', fecha: '', idunico: '', latitud: '', longitud: '', hora: '', imagen: '' };
    };
    ReportesSeguimientoComponent.prototype.abrirModalSeguimiento = function () {
        $('#modalSeguimiento').modal('open');
    };
    ReportesSeguimientoComponent.prototype.ngAfterViewInit = function () {
        $('.modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '80%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
    };
    ReportesSeguimientoComponent.prototype.obtenerFlotante = function (valor) {
        return parseFloat(valor);
    };
    ReportesSeguimientoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reportes-seguimiento',
            template: __webpack_require__("./src/app/componentes/reportes-seguimiento/reportes-seguimiento.component.html"),
            styles: [__webpack_require__("./src/app/componentes/reportes-seguimiento/reportes-seguimiento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_7__servicios_onesignal_service__["a" /* OnesignalService */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]])
    ], ReportesSeguimientoComponent);
    return ReportesSeguimientoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/reportes/reportes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/reportes/reportes.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"background: #2c8eb3\">\n    <div class=\"side-navbar\">\n      <div style=\"padding-bottom: 10px;  text-align: center\"><a class=\"brand-logo\">Reportes</a></div>\n      <a href=\"javascript:history.back(1)\">\n          <i class=\"fa fa-arrow-left fa-2x\" style=\"margin-left: 10px;\"></i>\n      </a>\n    </div>\n</nav>\n<div class=\"card z-depth-2\">\n  <div class=\"card-content black-text\">\n      <div class=\"container\">\n            <div class=\"col s12\">\n                <br/>\n                <label><b>Que Reportas?</b></label>\n                <select class=\"browser-default\" [(ngModel)]=\"reporte.tipo\" name=\"tipo\">\n                    <option *ngFor=\"let c of tipo_reporte\" [ngValue]=\"c.texto\">{{c.texto}}</option>\n                </select>\n            </div>\n            <div class=\"col s12\">\n                <br/>\n                <label><b>Fotografia</b></label><br/>\n                <div style=\"width: 100%; text-align: center\">\n                    <img [src]=\"imagen.src\" [ngStyle]=\"{'width':imagen.width, 'height': imagen.height}\" (click)=\"obtenerFotografia()\">\n                </div>\n                \n            </div>\n            <br/>\n            <label for=\"textarea1\"><b>Mas informacion </b></label>\n            <div class=\"input-field col s12\">\n              <textarea [(ngModel)]=\"reporte.comentario\" id=\"comentario\" name=\"comentario\" class=\"materialize-textarea\" placeholder=\"Indique Informacion como << moto grande de color X y placas XXX >> o << Sujeto sospechoso con camisa de color verde >>\"></textarea>\n              \n            </div>                            \n          <div class=\"col s12\">                                \n              <a class=\"waves-effect waves-light btn-large\" style=\"width: 99%\" (click)=\"enviarReporte()\"><i class=\"mdi-content-send\"></i> Enviar</a>                                \n          </div>\n          <div class=\"col s12\">  \n              <br/>\n          </div>\n      </div>\n  </div>\n</div>\n\n\n<div id=\"modalCargando\" class=\"modal\">\n    <div class=\"modal-content\" style=\"text-align: center\">\n      <h5>GuardCity</h5>\n      <i class=\"fa fa-circle-o-notch fa-5x fa-spin\"></i>\n    </div>\n  </div>\n\n  <div id=\"modalGuardado\" class=\"modal\">\n    <div class=\"modal-content\" style=\"text-align: center\">\n      <h5>GuardCity</h5>\n      Se guardo tu reporte con exito\n        <div class=\"col s12\">                                \n            <a class=\"waves-effect waves-light btn-large\" style=\"width: 99%\" (click)=\"mostrarReportesHoy()\">\n                <i class=\"fa fa-check\"></i> Aceptar\n            </a>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/componentes/reportes/reportes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__("./node_modules/@ionic-native/geolocation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__("./node_modules/@ionic-native/camera/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicios_onesignal_service__ = __webpack_require__("./src/app/servicios/onesignal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(service, appSettings, local, route, router, geolocation, oneSignal, camera, domSanitizer) {
        this.service = service;
        this.appSettings = appSettings;
        this.local = local;
        this.route = route;
        this.router = router;
        this.geolocation = geolocation;
        this.oneSignal = oneSignal;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.reporte = { comentario: '', estado: 1, fecha: '', idunico: '', latitud: '', longitud: '', tipo: 'Robo', usuario: '',
            usuario_estado: '', imagen: '', hora: '' };
        this.tipo_reporte = { texto: '' };
        this.imagen = { src: 'assets/img/camara.jpg', width: '50%', height: '50%' };
        this.base64Image = '';
    }
    ReportesComponent.prototype.ngOnInit = function () {
        this.obtenerTipoReportes();
        this.cameraConfiguration = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    };
    ReportesComponent.prototype.obtenerFotografia = function () {
        var _this = this;
        this.camera.getPicture(this.cameraConfiguration).then(function (imageData) {
            _this.base64Image = imageData;
            var img = 'data:image/jpeg;base64,' + imageData;
            _this.imagen = { src: _this.domSanitizer.bypassSecurityTrustUrl(img), width: '100%', height: '100%' };
        }, function (err) {
            alert('Ocurrio un error al tratar de usar la camara');
        });
    };
    ReportesComponent.prototype.obtenerTipoReportes = function () {
        var _this = this;
        this.service.obtenerDatosTipoReporte('Tipo_Reporte').subscribe(function (result) {
            _this.tipo_reporte = result;
        });
    };
    ReportesComponent.prototype.enviarReporte = function () {
        var _this = this;
        $('#modalCargando').modal('open');
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.reporte.latitud = resp.coords.latitude;
            _this.reporte.longitud = resp.coords.longitude;
            _this.reporte.imagen = _this.base64Image;
            _this.reporte.hora = _this.appSettings.getCurrentHour();
            var usuario = JSON.parse(_this.local.obtener('GUARDCITY_USER'))[0];
            _this.reporte.fecha = _this.appSettings.getCurrentDay();
            _this.reporte.usuario = usuario.id;
            _this.service.guardarDatos('Reportes', _this.reporte);
            setTimeout(function () {
                _this.oneSignal.enviarPush("Se ha reportado " + _this.reporte.tipo + ", " + _this.reporte.comentario);
                _this.inicializarReporte();
                $('#modalCargando').modal('close');
                $('#modalGuardado').modal('open');
            }, 17000);
        }).catch(function (error) {
            alert('Existe un problema con sus GPS o no tiene instalado un modulo de GPS');
        });
    };
    ReportesComponent.prototype.mostrarReportesHoy = function () {
        $('#modalGuardado').modal('close');
        this.imagen = { src: 'assets/img/camara.jpg', width: '50%', height: '50%' };
        this.router.navigate(['/reportedia']);
    };
    ReportesComponent.prototype.inicializarReporte = function () {
        this.reporte = { comentario: '', estado: 1, fecha: '', idunico: '', latitud: '', longitud: '',
            tipo: 'Robo', usuario: '', usuario_estado: '', imagen: '', hora: '' };
    };
    ReportesComponent.prototype.ngAfterViewInit = function () {
        $('.modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '20%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
    };
    ReportesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reportes',
            template: __webpack_require__("./src/app/componentes/reportes/reportes.component.html"),
            styles: [__webpack_require__("./src/app/componentes/reportes/reportes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_7__servicios_onesignal_service__["a" /* OnesignalService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ReportesComponent);
    return ReportesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-extended\" style=\"background: #2c8eb3\">\n    <div style='display: block;top:0;left:0; height: 130px;'>\n        <img src=\"assets/img/usuarios.png\" alt=\"\" class='responsive-img'/>\n    </div> \n    <div style='position:absolute;top:0;left:0; width: 100%'>\n      <div class=\"side-navbar\">\n        <div style=\"padding-bottom: 10px;  text-align: center;\n            text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;\"\n        >\n            <a class=\"brand-logo\">Tu Usuario</a></div>\n        <a href=\"javascript:history.back(1)\">\n            <i class=\"fa fa-arrow-left fa-2x\" style=\"margin-left: 10px;\"></i>\n        </a>\n      </div>\n    </div>\n</nav>\n<div class=\"card z-depth-2\">\n  <div class=\"card-content black-text\">\n      <div class=\"container\">\n            <div class=\"col s12\">\n              <label><b>Nombre</b></label>\n                <input id=\"nombre\" name=\"nombre\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"usuario.nombre\">\n            </div>\n            <div class=\"col s12\">\n              <label><b># Celular</b></label>\n                <input id=\"celular\" name=\"celualar\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"usuario.celular\">\n            </div>\n            <div class=\"col s12\">\n              <label><b>Email</b></label>\n                <input id=\"correo\" name=\"correo\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"usuario.correo\">\n            </div>\n            <div class=\"col s12\">\n              <label><b>Contraseña</b></label>\n                <input id=\"password\" name=\"password\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"usuario.password\">\n            </div>\n            <div class=\"col s12\">\n              <label><b>Ciudad</b></label>\n              <select class=\"browser-default\" [(ngModel)]=\"usuario.ciudad\" name=\"ciudad\" style=\"text-align: center\">\n                <option *ngFor=\"let c of ciudades\" [ngValue]=\"c.texto\">{{c.texto}}</option>\n              </select>\n            </div>\n            <div class=\"col s12\">\n              <label><b>Barrio</b></label>\n                <input id=\"barrio\" name=\"barrio\" type=\"text\" style=\"text-align: center\" [(ngModel)]=\"usuario.barrio\">\n            </div>\n          <div class=\"col s12\">\n              <a class=\"waves-effect waves-light btn-large\" style=\"width: 99%\" (click)=\"actualizarDatos()\" ><i class=\"fa fa-pencil\"></i> Actualizar</a>\n          </div>\n          \n      </div>\n  </div>\n</div>\n\n<div id=\"modal1\" class=\"modal\">\n    <div class=\"modal-content\" style=\"text-align: center\">\n      <h5>GuardCity</h5>\n      <i class=\"fa fa-circle-o-notch fa-5x fa-spin\"></i>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/componentes/usuario/usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(local, service) {
        this.local = local;
        this.service = service;
        this.usuario = { barrio: '', celular: '', ciudad: '', correo: '', nombre: '', password: '', placa: '', id: '' };
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.obtenerDatos('Ciudades').subscribe(function (result) {
            _this.ciudades = result;
        });
        this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
    };
    UsuarioComponent.prototype.actualizarDatos = function () {
        var _this = this;
        $('#modal1').modal('open');
        this.local.eliminar('GUARDCITY_USER');
        this.local.eliminar('GUARDCITY_CITY');
        this.service.actualizarDatos('Usuario', this.usuario, this.usuario.id);
        setTimeout(function () {
            _this.actualizarStorage();
        }, 3000);
    };
    UsuarioComponent.prototype.actualizarStorage = function () {
        $('#modal1').modal('close');
        var dataUser = [];
        this.obtenerCiudad(this.usuario);
        dataUser.push(this.usuario);
        this.local.agregar('GUARDCITY_USER', JSON.stringify(dataUser));
        this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
    };
    UsuarioComponent.prototype.obtenerCiudad = function (usuario) {
        var _this = this;
        this.service.obtenerDatosCiudadUsuario(usuario.ciudad).subscribe(function (result) {
            _this.local.agregar('GUARDCITY_CITY', JSON.stringify(result));
        });
    };
    UsuarioComponent.prototype.ngAfterViewInit = function () {
        $('.modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '20%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
    };
    UsuarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-usuario',
            template: __webpack_require__("./src/app/componentes/usuario/usuario.component.html"),
            styles: [__webpack_require__("./src/app/componentes/usuario/usuario.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__servicios_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_2__servicios_firebase_service__["a" /* FirebaseService */]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/componentes/zonas/zonas.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 95vh;\r\n  width: 100%;\r\n  }\r\n\r\n  .modal.bottom-sheet {\r\n    height: 90% !important;\r\n    max-height: 90% !important;\r\n\r\n}"

/***/ }),

/***/ "./src/app/componentes/zonas/zonas.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"background: #2c8eb3\">\n    <div class=\"side-navbar\">\n      <div style=\"padding-bottom: 10px;  text-align: center\"><a class=\"brand-logo\">Reportes</a></div>\n      <a href=\"javascript:history.back(1)\">\n          <i class=\"fa fa-arrow-left fa-2x\" style=\"margin-left: 10px;\"></i>\n      </a>\n      <a data-activates=\"mobile-demo\" class=\"button-collapse right \" (click)=\"abrirModal()\">\n        <img src=\"assets/ico/ic_menu_white_18dp.png\" alt=\"\"/>\n    </a>\n    </div>\n</nav>\n<select class=\"browser-default\" [(ngModel)]=\"tipo\" name=\"tipo\" (change)=\"obtenerReportesPorTipo()\">\n    <option value=\"0\"> Todos los reportes </option>\n    <option *ngFor=\"let c of tipo_reporte\" [ngValue]=\"c.texto\">{{c.texto}}</option>\n</select>\n\n<agm-map [latitude]=\"reportes[0].latitud\" [longitude]=\"reportes[0].longitud\" [zoom]=\"12\">\n    <agm-marker [latitude]=\"obtenerFlotante(miPosition.latitud)\" [longitude]=\"obtenerFlotante(miPosition.longitud)\" [iconUrl]=\"miPosition.icon\">\n        <agm-info-window><b>{{usuario.nombre}}</b><br/>\n          {{usuario.ciudad}}, {{usuario.barrio}}<br/>\n          {{usuario.celular}}<br/> {{usuario.correo}}\n        </agm-info-window>\n    </agm-marker>\n    <agm-marker [latitude]=\"obtenerFlotante(reporte.latitud)\" [longitude]=\"obtenerFlotante(reporte.longitud)\" [iconUrl]=\"reporte.icon\" *ngFor=\"let reporte of reportes\">\n        <agm-info-window>{{reporte.tipo}}<br/> {{reporte.comentario}}</agm-info-window>\n    </agm-marker>\n</agm-map>\n\n<div id=\"modal1\" class=\"modal bottom-sheet\">\n    <div class=\"modal-content\">\n    <table class=\"striped\">\n        <thead>\n          <tr>\n              <th style=\"width: 20%\">Icono</th>\n              <th  style=\"width: 80%\">Tipo</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n              <td><img src=\"assets/img/iconNegro.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n              <td>Usuario GuardCity</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconRojo.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Homicidio</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconRosado.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Robo</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconVerde.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Consumo Venta de Drogas</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconRosadoFuerte.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Falta de Alumbrado</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconAzulRey.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Fuga de Agua</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconGris.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Fuga de Gas</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconNaranaja.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Objetos Perdidos</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconAmarillo.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Otros</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconNaranajaOscuro.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Vandalismo</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconVerdeClaro.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Vehiculo Mal Parqueado</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconAzulCeleste.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Violacion</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconNormal.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Violencia Intrafamiliar</td>\n          </tr>\n          <tr>\n            <td><img src=\"assets/img/iconMorado.png\" alt=\"\" style=\"width: 30px; height: 30px\"/></td>\n            <td>Zona Sospechosa</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/componentes/zonas/zonas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__ = __webpack_require__("./src/app/servicios/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_local_storage_service__ = __webpack_require__("./src/app/servicios/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__("./node_modules/@ionic-native/geolocation/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ZonasComponent = /** @class */ (function () {
    function ZonasComponent(service, local, appSettings, geolocation) {
        this.service = service;
        this.local = local;
        this.appSettings = appSettings;
        this.geolocation = geolocation;
        this.tipo_reporte = { texto: '' };
        this.miPosition = { longitud: '', latitud: '', icon: {} };
        this.tipo = '0';
    }
    ZonasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obtenerTodosReportes();
        this.ciudad = JSON.parse(this.local.obtener('GUARDCITY_CITY'))[0];
        this.usuario = JSON.parse(this.local.obtener('GUARDCITY_USER'))[0];
        this.ciudad.latitud = parseFloat(this.ciudad.latitud);
        this.ciudad.longitud = parseFloat(this.ciudad.longitud);
        this.obtenerTipoReportes();
        this.subscription = this.geolocation.watchPosition()
            .filter(function (p) { return p.coords !== undefined; })
            .subscribe(function (position) {
            console.log(position.coords.longitude + ' ' + position.coords.latitude);
            _this.miPosition.longitud = position.coords.longitude;
            _this.miPosition.latitud = position.coords.latitude;
            _this.miPosition.icon = {
                url: 'assets/img/iconNegro.png',
                scaledSize: {
                    height: 50,
                    width: 50
                }
            };
        });
    };
    ZonasComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ZonasComponent.prototype.obtenerTodosReportes = function () {
        var _this = this;
        this.service.obtenerDatos('Reportes').subscribe(function (result) {
            _this.reportes = _this.appSettings.getIconosMapas(result);
            console.log(_this.reportes);
        });
    };
    ZonasComponent.prototype.obtenerReportesPorTipo = function () {
        var _this = this;
        if (this.tipo === '0') {
            this.obtenerTodosReportes();
        }
        else {
            this.service.obtenerDatosPorTipo(this.tipo).subscribe(function (result) {
                _this.reportes = _this.appSettings.getIconosMapas(result);
                console.log(_this.reportes);
            });
        }
    };
    ZonasComponent.prototype.obtenerTipoReportes = function () {
        var _this = this;
        this.service.obtenerDatosTipoReporte('Tipo_Reporte').subscribe(function (result) {
            _this.tipo_reporte = result;
        });
    };
    ZonasComponent.prototype.obtenerFlotante = function (valor) {
        return parseFloat(valor);
    };
    ZonasComponent.prototype.ngAfterViewInit = function () {
        $('.modal').modal({
            dismissible: true,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '80%',
            ready: function (modal, trigger) {
            },
            complete: function () { } // Callback for Modal close
        });
    };
    ZonasComponent.prototype.abrirModal = function () {
        $('#modal1').modal('open');
    };
    ZonasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-zonas',
            template: __webpack_require__("./src/app/componentes/zonas/zonas.component.html"),
            styles: [__webpack_require__("./src/app/componentes/zonas/zonas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__servicios_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ZonasComponent);
    return ZonasComponent;
}());



/***/ }),

/***/ "./src/app/servicios/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("./src/app/app.settings.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = /** @class */ (function () {
    function FirebaseService(afs, appSettings) {
        this.afs = afs;
        this.appSettings = appSettings;
    }
    FirebaseService.prototype.obtenerDatos = function (tabla) {
        this.itemsCollection = this.afs.collection(tabla);
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosTipoReporte = function (tabla) {
        this.itemsCollection = this.afs.collection(tabla, function (ref) { return ref.orderBy('texto', 'asc'); });
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosLogin = function (usuario, password) {
        this.itemsCollection = this.afs.collection('Usuario', function (ref) { return ref.where('correo', '==', usuario).where('password', '==', password); });
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosCiudadUsuario = function (ciudad) {
        this.itemsCollection = this.afs.collection('Ciudades', function (ref) { return ref.where('texto', '==', ciudad); });
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosPorUsuarioFecha = function (tabla, usuario, fecha) {
        this.itemsCollection = this.afs.collection(tabla, function (ref) { return ref.where('usuario', '==', usuario).where('fecha', '==', fecha); });
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosPorUsuario = function (tabla, usuario) {
        this.itemsCollection = this.afs.collection(tabla, function (ref) { return ref.where('usuario', '==', usuario); });
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosPorFecha = function (tabla, fecha) {
        this.itemsCollection = this.afs.collection(tabla, function (ref) { return ref.where('fecha', '==', fecha); });
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosPorTipo = function (tipo) {
        this.itemsCollection = this.afs.collection('Reportes', function (ref) { return ref.where('tipo', '==', tipo); });
        return this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirebaseService.prototype.obtenerDatosPorId = function (tabla, id) {
        this.itemsCollection = this.afs.collection(tabla, function (ref) { return ref.where('id', '==', id); });
        return this.itemsCollection.valueChanges();
    };
    FirebaseService.prototype.obtenerDatosPorIdUnico = function (tabla, id) {
        this.itemsCollection = this.afs.collection(tabla, function (ref) { return ref.where('idunico', '==', id); });
        return this.itemsCollection.valueChanges();
    };
    FirebaseService.prototype.eliminarDatos = function (tabla, id) {
        this.itemsCollection = this.afs.collection(tabla);
        this.itemsCollection.doc(id).delete().then(function () {
        });
    };
    FirebaseService.prototype.guardarDatos = function (tabla, data) {
        data.idunico = this.appSettings.guid();
        this.itemsCollection = this.afs.collection(tabla);
        this.itemsCollection.add(data);
    };
    FirebaseService.prototype.guardarSeguimientoDatos = function (tabla, data) {
        this.itemsCollection = this.afs.collection(tabla);
        this.itemsCollection.add(data).then(function (resp) {
            console.log(resp);
        }).catch(function (error) {
            console.log(error);
        });
    };
    FirebaseService.prototype.actualizarDatos = function (tabla, data, id) {
        this.itemsCollection = this.afs.collection(tabla);
        this.itemsCollection.doc(id).update(data).then(function () {
        });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/servicios/http-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatchInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CatchInterceptorService = /** @class */ (function () {
    function CatchInterceptorService() {
    }
    CatchInterceptorService.prototype.intercept = function (req, next) {
        this.started = Date.now();
        var authorizationReq = this.setAuthHeader(req);
        var handledRequest = next.handle(authorizationReq);
        //const handledRequest = next.handle(req);
        var successCallback = this.interceptResponse.bind(this);
        var errorCallback = this.catchError.bind(this);
        var interceptionOperator = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(successCallback, errorCallback);
        return handledRequest.pipe(interceptionOperator);
    };
    CatchInterceptorService.prototype.setAuthHeader = function (req) {
        var headers = req.headers.set('Authorization', "Basic OWMwNTdhN2UtMTIzYy00YWEyLWE5NTktZmMxZWJlZWViZDgz");
        var authorizationReq = req.clone({ headers: headers });
        return authorizationReq;
    };
    CatchInterceptorService.prototype.interceptResponse = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
            var elapsed_ms = Date.now() - this.started;
            //console.debug(`Request for ${event.url} took ${elapsed_ms} ms.`);
        }
    };
    CatchInterceptorService.prototype.catchError = function (err) {
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
            this.catchHttpError(err);
        }
        else {
            //console.error(err.message);
        }
    };
    CatchInterceptorService.prototype.catchHttpError = function (err) {
        if (err.status === 401) {
            //console.log('Not authorized');
        }
        else {
            //console.warn(err.statusText);
        }
    };
    CatchInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CatchInterceptorService);
    return CatchInterceptorService;
}());



/***/ }),

/***/ "./src/app/servicios/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.obtener = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.agregar = function (key, data) {
        return localStorage.setItem(key, data);
    };
    LocalStorageService.prototype.eliminar = function (key) {
        return localStorage.removeItem(key);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/servicios/onesignal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnesignalService = /** @class */ (function () {
    function OnesignalService(http) {
        this.http = http;
    }
    OnesignalService.prototype.enviarPush = function (mensaje) {
        var data = { 'app_id': 'a6918465-7012-4c72-9c57-edf785e6ced8',
            'included_segments': ['All'],
            'contents': { 'en': mensaje }
        };
        /*this.http.post('https://onesignal.com/api/v1/notifications', data).subscribe(
          result => {
            console.log(result);
          }
        );*/
    };
    OnesignalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], OnesignalService);
    return OnesignalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDLJEzF71fhfuVDkZil1QasZKoepdSCWZ8",
        authDomain: "guardcity-35b63.firebaseapp.com",
        databaseURL: "https://guardcity-35b63.firebaseio.com",
        projectId: "guardcity-35b63",
        storageBucket: "guardcity-35b63.appspot.com",
        messagingSenderId: "384438800679"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map