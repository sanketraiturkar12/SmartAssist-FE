function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _client_portfolio_client_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./client-portfolio/client-portfolio.component */
    "./src/app/client-portfolio/client-portfolio.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./client-login/client-login.component */
    "./src/app/client-login/client-login.component.ts");

    var routes = [{
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }, {
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "portfolios",
      component: _client_portfolio_client_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["ClientPortfolioComponent"]
    }, {
      path: "login",
      component: _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_4__["ClientLoginComponent"]
    }, {
      path: "**",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function AppComponent_hr_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
      }
    }

    var AppComponent = function AppComponent(router) {
      _classCallCheck(this, AppComponent);

      this.router = router;
      this.title = 'Dashboard';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_hr_2_Template, 1, 0, "hr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/login");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./graphs/graphs.component */
    "./src/app/graphs/graphs.component.ts");
    /* harmony import */


    var _clientholding_clientholding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clientholding/clientholding.component */
    "./src/app/clientholding/clientholding.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _recommendedaction_recommendedaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./recommendedaction/recommendedaction.component */
    "./src/app/recommendedaction/recommendedaction.component.ts");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sidenav/sidenav.component */
    "./src/app/sidenav/sidenav.component.ts");
    /* harmony import */


    var _client_portfolio_client_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./client-portfolio/client-portfolio.component */
    "./src/app/client-portfolio/client-portfolio.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _tab_tab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tab/tab.component */
    "./src/app/tab/tab.component.ts");
    /* harmony import */


    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tabs/tabs.component */
    "./src/app/tabs/tabs.component.ts");
    /* harmony import */


    var _portfolio_score_portfolio_score_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./portfolio-score/portfolio-score.component */
    "./src/app/portfolio-score/portfolio-score.component.ts");
    /* harmony import */


    var _client_risk_profile_client_risk_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./client-risk-profile/client-risk-profile.component */
    "./src/app/client-risk-profile/client-risk-profile.component.ts");
    /* harmony import */


    var _client_portfolio_holdings_client_portfolio_holdings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./client-portfolio-holdings/client-portfolio-holdings.component */
    "./src/app/client-portfolio-holdings/client-portfolio-holdings.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _client_insights_client_insights_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./client-insights/client-insights.component */
    "./src/app/client-insights/client-insights.component.ts");
    /* harmony import */


    var _client_graph_client_graph_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./client-graph/client-graph.component */
    "./src/app/client-graph/client-graph.component.ts");
    /* harmony import */


    var _graph_test_graph_test_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./graph-test/graph-test.component */
    "./src/app/graph-test/graph-test.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./doughnut-chart/doughnut-chart.component */
    "./src/app/doughnut-chart/doughnut-chart.component.ts");
    /* harmony import */


    var _manage_relationship_manage_relationship_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./manage-relationship/manage-relationship.component */
    "./src/app/manage-relationship/manage-relationship.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _sector_impact_sector_impact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./sector-impact/sector-impact.component */
    "./src/app/sector-impact/sector-impact.component.ts");
    /* harmony import */


    var _sector_doughnut_sector_doughnut_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./sector-doughnut/sector-doughnut.component */
    "./src/app/sector-doughnut/sector-doughnut.component.ts");
    /* harmony import */


    var _tooltip_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./tooltip.directive */
    "./src/app/tooltip.directive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./client-login/client-login.component */
    "./src/app/client-login/client-login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_dataservice_service__WEBPACK_IMPORTED_MODULE_9__["DataserviceService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_5__["GraphsComponent"], _clientholding_clientholding_component__WEBPACK_IMPORTED_MODULE_6__["ClientholdingComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"], _recommendedaction_recommendedaction_component__WEBPACK_IMPORTED_MODULE_8__["RecommendedactionComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"], _client_portfolio_client_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["ClientPortfolioComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_15__["TabComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"], _portfolio_score_portfolio_score_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioScoreComponent"], _client_risk_profile_client_risk_profile_component__WEBPACK_IMPORTED_MODULE_18__["ClientRiskProfileComponent"], _client_portfolio_holdings_client_portfolio_holdings_component__WEBPACK_IMPORTED_MODULE_19__["ClientPortfolioHoldingsComponent"], _client_insights_client_insights_component__WEBPACK_IMPORTED_MODULE_21__["ClientInsightsComponent"], _client_graph_client_graph_component__WEBPACK_IMPORTED_MODULE_22__["ClientGraphComponent"], _graph_test_graph_test_component__WEBPACK_IMPORTED_MODULE_23__["GraphTestComponent"], _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_25__["DoughnutChartComponent"], _manage_relationship_manage_relationship_component__WEBPACK_IMPORTED_MODULE_26__["ManageRelationshipComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _sector_impact_sector_impact_component__WEBPACK_IMPORTED_MODULE_28__["SectorImpactComponent"], _sector_doughnut_sector_doughnut_component__WEBPACK_IMPORTED_MODULE_29__["SectorDoughnutComponent"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_30__["TooltipDirective"], _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_32__["ClientLoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_5__["GraphsComponent"], _clientholding_clientholding_component__WEBPACK_IMPORTED_MODULE_6__["ClientholdingComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"], _recommendedaction_recommendedaction_component__WEBPACK_IMPORTED_MODULE_8__["RecommendedactionComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"], _client_portfolio_client_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["ClientPortfolioComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_15__["TabComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"], _portfolio_score_portfolio_score_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioScoreComponent"], _client_risk_profile_client_risk_profile_component__WEBPACK_IMPORTED_MODULE_18__["ClientRiskProfileComponent"], _client_portfolio_holdings_client_portfolio_holdings_component__WEBPACK_IMPORTED_MODULE_19__["ClientPortfolioHoldingsComponent"], _client_insights_client_insights_component__WEBPACK_IMPORTED_MODULE_21__["ClientInsightsComponent"], _client_graph_client_graph_component__WEBPACK_IMPORTED_MODULE_22__["ClientGraphComponent"], _graph_test_graph_test_component__WEBPACK_IMPORTED_MODULE_23__["GraphTestComponent"], _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_25__["DoughnutChartComponent"], _manage_relationship_manage_relationship_component__WEBPACK_IMPORTED_MODULE_26__["ManageRelationshipComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _sector_impact_sector_impact_component__WEBPACK_IMPORTED_MODULE_28__["SectorImpactComponent"], _sector_doughnut_sector_doughnut_component__WEBPACK_IMPORTED_MODULE_29__["SectorDoughnutComponent"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_30__["TooltipDirective"], _client_login_client_login_component__WEBPACK_IMPORTED_MODULE_32__["ClientLoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"]],
          providers: [_dataservice_service__WEBPACK_IMPORTED_MODULE_9__["DataserviceService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/client-graph/client-graph.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/client-graph/client-graph.component.ts ***!
    \********************************************************/

  /*! exports provided: ClientGraphComponent */

  /***/
  function srcAppClientGraphClientGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientGraphComponent", function () {
      return ClientGraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");

    function ClientGraphComponent_div_10_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r180.tumgraphbasicdaily, " ", ctx_r180.tumgraphdailypercentage, "");
      }
    }

    function ClientGraphComponent_div_10_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r181.tumgraphbasicdaily, " ", ctx_r181.tumgraphdailypercentage, "");
      }
    }

    function ClientGraphComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DAILY P&L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientGraphComponent_div_10_ng_container_3_Template, 5, 2, "ng-container", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientGraphComponent_div_10_ng_container_4_Template, 5, 2, "ng-container", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r177.tumgraphdailyarrow);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r177.tumgraphdailyarrow);
      }
    }

    function ClientGraphComponent_div_11_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r182.tumgraphbasicweekly, " ", ctx_r182.tumgraphweeklypercentage, "");
      }
    }

    function ClientGraphComponent_div_11_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r183.tumgraphbasicweekly, " ", ctx_r183.tumgraphweeklypercentage, "");
      }
    }

    function ClientGraphComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientGraphComponent_div_11_ng_container_3_Template, 5, 2, "ng-container", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientGraphComponent_div_11_ng_container_4_Template, 5, 2, "ng-container", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r178.tumgraphbasicweeklyLabel, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r178.tumgraphweeklyarrow);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r178.tumgraphweeklyarrow);
      }
    }

    function ClientGraphComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientGraphComponent_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r186);

          var items_r184 = ctx.$implicit;

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r185.graphTotalAsset(items_r184.val);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r184 = ctx.$implicit;

        var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r179.graphMeterScaleActive(items_r184.val) ? "graphMeterScale" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r184.disp, " ");
      }
    }

    var ClientGraphComponent =
    /*#__PURE__*/
    function () {
      // xyz = this.data2.map((p) => {
      //   const abc = {};
      //   abc["x"] = p.datetime;
      //   abc["y"] = p.total_mkt_val.replace(/,/g, "") - 0;
      //   // this.abc1.push(abc);
      //   this.abc1.push(abc);
      //   this.abc2.push({ x: p['datetime'], y: Number.parseFloat(p['sent_score_y2'].toFixed(2)) })
      //   this.abc3.push({ x: p['datetime'], y: Number.parseFloat(p['sent_score_y1'].toFixed(2)) })
      // });
      function ClientGraphComponent(myservice) {
        _classCallCheck(this, ClientGraphComponent);

        this.myservice = myservice;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.series1 = [];
        this.series2 = [];
        this.series3 = [];
        this.series4 = [];
        this.series5 = [];
        this.series6 = [];
        this.data2 = [];
        this.abc1 = [];
        this.chartOptions = {
          chart: {
            height: 6.5 / 25 * 100 + "%",
            events: {
              render: function render() {
                var series = this.series.filter(function (i) {
                  return i.name !== 'Total AUM';
                });
                var totalAUMIndex = this.series.findIndex(function (i) {
                  return i.name === 'Total AUM';
                });
                var count = 0;
                series.forEach(function (serie) {
                  if (serie.visible) {
                    count++;
                  }
                });

                if (count === 0) {
                  this.series[totalAUMIndex]['color'] = 'darkgray';
                  this.series[totalAUMIndex].render();
                } else {
                  this.series[totalAUMIndex]['color'] = 'transparent';
                  this.series[totalAUMIndex].render();
                } // document.querySelector("#label").innerHTML = `Total visible series: ${count}`

              }
            }
          },
          xAxis: {
            type: 'datetime',
            labels: {
              format: '{value:%d %b}'
            },
            minPadding: 0,
            maxPadding: 0,
            showLastLabel: true,
            tickmarkPlacement: 'on',
            endOnTick: false
          },
          yAxis: [{
            gridLineWidth: 0,
            lineWidth: 1,
            title: {
              text: "AUM (USD)"
            }
          }, {
            visible: false
          }, {
            visible: false
          }, {
            lineWidth: 0,
            gridLineWidth: 0,
            opposite: true,
            offset: -8,
            title: {
              text: '+ve Sentiment',
              style: {
                color: 'limegreen'
              }
            }
          }, {
            lineWidth: 1,
            opposite: true,
            gridLineWidth: 0,
            title: {
              text: '-ve Sentiment',
              style: {
                color: 'red'
              }
            }
          }, {
            lineWidth: 1,
            opposite: true,
            gridLineWidth: 0,
            title: {
              text: 'ESG',
              style: {
                color: 'purple'
              }
            }
          }],
          legend: {
            layout: 'horizontal',
            align: "center",
            verticalAlign: 'top'
          },
          tooltip: {
            backgroundColor: "black",
            useHTML: true,
            headerFormat: '<b>{point.key}</b><br>',
            shared: true,
            style: {
              color: "white"
            }
          },
          title: {
            text: " "
          },
          plotOptions: {
            area: {
              stacking: "normal"
            }
          },
          series: [{
            name: "-ve AUM",
            data: [],
            type: "area",
            tooltip: {
              pointFormat: ''
            },
            marker: {
              enabled: false
            }
          }, {
            data: [],
            name: '+ve AUM',
            type: "area",
            tooltip: {
              pointFormat: ''
            },
            marker: {
              enabled: false
            },
            color: 'lightgray'
          }, {
            type: "area",
            name: "Total AUM",
            showInLegend: false,
            color: "transparent",
            tooltip: {
              pointFormat: '{point.series.name}: ${point.y}<br>'
            },
            stacking: null,
            lineColor: 'transparent',
            marker: {
              lineColor: 'transparent',
              fillColor: 'tranparent',
              enabled: false
            },
            states: {
              hover: {
                enabled: false
              }
            }
          }, {
            type: "line",
            name: "+ve Sentiment",
            yAxis: 3,
            color: 'green',
            dashStyle: "Solid",
            marker: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.series.name}: {point.y} ({point.percent} % of AUM)<br>'
            }
          }, {
            type: "line",
            name: "-ve Sentiment",
            yAxis: 4,
            color: 'red',
            dashStyle: "ShortDash",
            marker: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.series.name}: {point.y} ({point.percent} % of AUM)'
            }
          }, {
            type: "line",
            name: "ESG",
            yAxis: 5,
            tooltip: {
              pointFormat: '<br>{point.series.name}: {point.y}'
            },
            marker: {
              enabled: false
            },
            color: 'purple'
          }],
          credits: {
            enabled: false
          }
        };
      }

      _createClass(ClientGraphComponent, [{
        key: "sortBy",
        value: function sortBy(field) {
          return function (a, b) {
            return Number(a[field] > b[field]) - Number(a[field] < b[field]);
          };
        }
      }, {
        key: "graphTotalAsset",
        value: function graphTotalAsset(filter) {
          var _this = this;

          this.selectedFilter = filter;
          this.series1 = [];
          this.series2 = [];
          this.series3 = [];
          this.series4 = [];
          this.series5 = [];
          this.series6 = [];
          this.myservice.getAUMGraphDetails(1, filter, this.clientID).subscribe(function (data) {
            _this.tumgraphdata = data["data"];
            _this.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];
            _this.tumgraphbasicweekly = data["aum"]["weekly"]["val"];
            _this.tumgraphweeklyarrow = data["aum"]["weekly"]["changeType"] == 1 ? true : false;
            _this.tumgraphdailypercentage = data["aum"]["weekly"]["symbol"];
            _this.tumgraphweeklypercentage = data["aum"]["weekly"]["symbol"]; // let myAbc1 = [];
            // const finaldata = [];

            _this.tumgraphdata.map(function (value) {
              var abc = {};
              abc["x"] = value['datetime'];
              abc["y"] = Number.parseFloat(value['negative_mkt_val'].replace(/,/g, "")); // abc['total'] = value.total_mkt_val.toLocaleString('en-US')

              _this.series1.push(abc);

              _this.series2.push({
                x: value['datetime'],
                y: Number.parseFloat(value['positive_mkt_val'].replace(/,/g, ""))
              });

              _this.series3.push({
                x: value['datetime'],
                y: Number.parseFloat(value['total_mkt_val'].replace(/,/g, ""))
              });

              _this.series4.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y2'].toFixed(2)),
                percent: value['positive_Share']
              });

              _this.series5.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y1'].toFixed(2)),
                percent: value['negative_Share']
              });

              _this.series6.push({
                x: value['datetime'],
                y: Number.parseFloat(value['esg_score'])
              });
            });

            _this.chartOptions.series[0]['data'] = _this.series2.sort(_this.sortBy("x"));
            _this.chartOptions.series[1]['data'] = _this.series1.sort(_this.sortBy("x"));
            _this.chartOptions.series[2]['data'] = _this.series3.sort(_this.sortBy('x'));
            _this.chartOptions.series[3]['data'] = _this.series4.sort(_this.sortBy("x"));
            _this.chartOptions.series[4]['data'] = _this.series5.sort(_this.sortBy('x'));
            _this.chartOptions.series[5]['data'] = _this.series6.sort(_this.sortBy('x'));
            _this.updateFlag = true;
          });
        }
      }, {
        key: "graphMeterScaleActive",
        value: function graphMeterScaleActive(filter) {
          if (filter == this.selectedFilter) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.myservice.getAUMGraphDetails(1, "week", this.clientID).subscribe(function (data) {
            _this2.tumgraphdata = data["data"];

            _this2.tumgraphdata.map(function (value) {
              var abc = {};
              abc["x"] = value['datetime'];
              abc["y"] = Number.parseFloat(value['negative_mkt_val'].replace(/,/g, "")); // abc['total'] = value.total_mkt_val.toLocaleString('en-US')

              _this2.series1.push(abc);

              _this2.series2.push({
                x: value['datetime'],
                y: Number.parseFloat(value['positive_mkt_val'].replace(/,/g, ""))
              });

              _this2.series3.push({
                x: value['datetime'],
                y: Number.parseFloat(value['total_mkt_val'].replace(/,/g, ""))
              });

              _this2.series4.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y2'].toFixed(2)),
                percent: value['positive_Share']
              });

              _this2.series5.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y1'].toFixed(2)),
                percent: value['negative_Share']
              });

              _this2.series6.push({
                x: value['datetime'],
                y: Number.parseFloat(value['esg_score'])
              });
            });

            _this2.chartOptions.series[0]['data'] = _this2.series2.sort(_this2.sortBy("x"));
            _this2.chartOptions.series[1]['data'] = _this2.series1.sort(_this2.sortBy("x"));
            _this2.chartOptions.series[2]['data'] = _this2.series3.sort(_this2.sortBy('x'));
            _this2.chartOptions.series[3]['data'] = _this2.series4.sort(_this2.sortBy("x"));
            _this2.chartOptions.series[4]['data'] = _this2.series5.sort(_this2.sortBy('x'));
            _this2.chartOptions.series[5]['data'] = _this2.series6.sort(_this2.sortBy('x'));
            _this2.updateFlag = true;
            _this2.tumgraphbasictotaldate = data["aum"]["total"]["date"];
            _this2.tumgraphbasictotalinfo = data["aum"]["total"]["val"];
            _this2.tumgraphbasictotalsymbol = data["aum"]["total"]["symbol"];
            _this2.tumgraphbasicdaily = data["aum"]["daily"]["val"];
            _this2.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];
            _this2.tumgraphbasicweekly = data["aum"]["weekly"]["val"];
            _this2.tumgraphdailyarrow = data["aum"]["daily"]["changeType"] == 1 ? true : false;
            _this2.tumgraphweeklyarrow = data["aum"]["weekly"]["changeType"] == 1 ? true : false;
            _this2.tumgraphdailypercentage = data["aum"]["weekly"]["symbol"];
            _this2.tumgraphweeklypercentage = data["aum"]["weekly"]["symbol"];
            _this2.tumgraphbasicfilter = data["filter"];
            _this2.selectedFilter = _this2.tumgraphbasicfilter[0].val;
          });
        }
      }]);

      return ClientGraphComponent;
    }();

    ClientGraphComponent.ɵfac = function ClientGraphComponent_Factory(t) {
      return new (t || ClientGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]));
    };

    ClientGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientGraphComponent,
      selectors: [["app-client-graph"]],
      inputs: {
        clientID: "clientID"
      },
      decls: 20,
      vars: 10,
      consts: [[1, "row", 2, "width", "107%"], [1, "col-12"], [1, "card", "h-100"], [1, "card-body", "highchartoutline"], [1, "row", "usdrow"], [1, "col-3", "p-0"], [1, "graph-text", "pl-5"], [1, "digit", "pl-4"], ["class", "col-2 graph-text p-0", 4, "ngIf"], ["class", "col-1 graph-text p-0", 4, "ngIf"], [1, "col-4", "meterscale"], [1, "row"], ["class", "col-2 range highlight", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "pl-1", "pr-1"], [2, "width", "100%", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "updateChange"], [2, "font-size", "12px"], [1, "col-2", "graph-text", "p-0"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", 2, "margin-top", "15px", "color", "#039d00", "font-size", "15px"], [2, "font-size", "20px", "color", "#039d00"], ["aria-hidden", "true", 1, "fa", "fa-arrow-down", 2, "margin-top", "15px", "color", "#b50000", "font-size", "15px"], [2, "font-size", "20px", "color", "#b50000"], [1, "col-1", "graph-text", "p-0"], [1, "col-2", "range", "highlight", 3, "ngClass", "click"]],
      template: function ClientGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CLIENT AUM (USD)*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientGraphComponent_div_10_Template, 5, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientGraphComponent_div_11_Template, 5, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientGraphComponent_div_14_Template, 2, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "highcharts-chart", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function ClientGraphComponent_Template_highcharts_chart_updateChange_17_listener($event) {
            return ctx.updateFlag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.tumgraphbasictotalsymbol, "", ctx.tumgraphbasictotalinfo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tumgraphbasicdaily);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tumgraphbasicweekly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tumgraphbasicfilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.updateFlag)("oneToOne", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tumgraphbasictotaldate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_4__["HighchartsChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".card-text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 86px;\r\n  height: 50px;\r\n  left: 1071px;\r\n  top: 411px;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 40px;\r\n  line-height: 50px;\r\n\r\n  color: #b50000;\r\n}\r\n\r\n.graph_img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 255px;\r\n}\r\n\r\n.graph-text[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 0.9vw;\r\n  line-height: 15px;\r\n  color: #999999;\r\n  \r\n}\r\n\r\n.meterscale[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 1.11vw;\r\n  line-height: 20px;\r\n  margin-left: 137px;\r\n}\r\n\r\n.digit[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 2.2vw;\r\n  line-height: 30px;\r\n  color: #222222;\r\n  margin-left: 12px;\r\n}\r\n\r\n.range[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.range[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 2px solid #3466f6;\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.highlight[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n\r\n  text-align: center;\r\n}\r\n\r\n.graphMeterScale[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  border-bottom: 2px solid #3466f6;\r\n}\r\n\r\n.active[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%]:hover {\r\n  color: blue;\r\n}\r\n\r\n.range.active[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #3466f6;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.range[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  margin: 3px;\r\n  cursor: pointer;\r\n  margin-top: -4px;\r\n  line-height: 40px;\r\n}\r\n\r\n.highcharts-tooltip-box[_ngcontent-%COMP%] {\r\n  fill: black;\r\n  fill-opacity: 0.6;\r\n  stroke-width: 0;\r\n}\r\n\r\n.highcharts-tooltip[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\r\n  fill: white;\r\n  text-shadow: 0 0 3px black;\r\n}\r\n\r\n.highcharts-container[_ngcontent-%COMP%] {\r\n  width:100% !important\r\n}\r\n\r\n.margin-L-8[_ngcontent-%COMP%] {\r\n  margin-left: 8%\r\n}\r\n\r\n.margin-L-6[_ngcontent-%COMP%] {\r\n  margin-left: 6%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LWdyYXBoL2NsaWVudC1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlOztFQUVmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50LWdyYXBoL2NsaWVudC1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4NnB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsZWZ0OiAxMDcxcHg7XHJcbiAgdG9wOiA0MTFweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGNvbG9yOiAjYjUwMDAwO1xyXG59XHJcblxyXG4uZ3JhcGhfaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1NXB4O1xyXG59XHJcblxyXG4uZ3JhcGgtdGV4dCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjl2dztcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICAvKiBtYXJnaW4tbGVmdDogMTJweDsgKi9cclxufVxyXG5cclxuLm1ldGVyc2NhbGUge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xMXZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMzdweDtcclxufVxyXG5cclxuLmRpZ2l0IHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDIuMnZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiAjMjIyMjIyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4ucmFuZ2Uge1xyXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yYW5nZTpob3ZlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNDY2ZjY7XHJcbiAgLyogY29sb3I6ICMzNDY2RjY7ICovXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmFwaE1ldGVyU2NhbGUge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzQ2NmY2O1xyXG59XHJcblxyXG4uYWN0aXZlLFxyXG4uaGlnaGxpZ2h0OmhvdmVyIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLnJhbmdlLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNDY2ZjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnJhbmdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uaGlnaGNoYXJ0cy10b29sdGlwLWJveCB7XHJcbiAgZmlsbDogYmxhY2s7XHJcbiAgZmlsbC1vcGFjaXR5OiAwLjY7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaGlnaGNoYXJ0cy10b29sdGlwIHRleHQge1xyXG4gIGZpbGw6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xyXG59XHJcblxyXG4uaGlnaGNoYXJ0cy1jb250YWluZXIge1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubWFyZ2luLUwtOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDglXHJcbn1cclxuXHJcbi5tYXJnaW4tTC02IHtcclxuICBtYXJnaW4tbGVmdDogNiVcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-client-graph",
          templateUrl: "./client-graph.component.html",
          styleUrls: ["./client-graph.component.css"]
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
        }];
      }, {
        clientID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/client-insights/client-insights.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/client-insights/client-insights.component.ts ***!
    \**************************************************************/

  /*! exports provided: ClientInsightsComponent */

  /***/
  function srcAppClientInsightsClientInsightsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientInsightsComponent", function () {
      return ClientInsightsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function ClientInsightsComponent_div_12_ul_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientInsightsComponent_div_12_ul_15_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var abc_r161 = ctx.$implicit;

          var item_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          return ctx_r162.open(_r156, item_r158, abc_r161);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var abc_r161 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, abc_r161.actionColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", abc_r161.actionText, " ");
      }
    }

    function ClientInsightsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClientInsightsComponent_div_12_ul_15_Template, 7, 4, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r158 = ctx.$implicit;
        var i_r159 = ctx.index;

        var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r158.accColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapseOne", i_r159, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r155.expandAll ? "" : "collapsed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r158.accTitle, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseOne", i_r159, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r155.expandAll ? "show" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r158.recommendation);
      }
    }

    function ClientInsightsComponent_ng_template_13_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Take Action for : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r166.modalRow.actionText, "");
      }
    }

    function ClientInsightsComponent_ng_template_13_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bcc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "From");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dear Client,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Thanks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r167.clientDetails.relatedClientEmail, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r167.userDetails.Email, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r167.modalRow.subject, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r167.modalRow.body_1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r167.modalRow.body_2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r167.userDetails.Name, " ");
      }
    }

    function ClientInsightsComponent_ng_template_13_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientInsightsComponent_ng_template_13_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var modal_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return modal_r165.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientInsightsComponent_ng_template_13_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientInsightsComponent_ng_template_13_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175);

          var modal_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return modal_r165.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientInsightsComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientInsightsComponent_ng_template_13_div_4_Template, 5, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientInsightsComponent_ng_template_13_div_5_Template, 27, 6, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientInsightsComponent_ng_template_13_Template_button_click_7_listener() {
          var modal_r165 = ctx.$implicit;
          return modal_r165.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientInsightsComponent_ng_template_13_button_9_Template, 2, 0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientInsightsComponent_ng_template_13_button_10_Template, 2, 0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r157.modalRow.actionText != "Send a note to clients" && ctx_r157.modalRow.actionText != "Send a note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r157.modalRow.actionText === "Send a note to clients" || ctx_r157.modalRow.actionText === "Send a note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r157.modalRow.actionText != "Send a note to clients" && ctx_r157.modalRow.actionText != "Send a note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r157.modalRow.actionText === "Send a note to clients" || ctx_r157.modalRow.actionText === "Send a note");
      }
    }

    var ClientInsightsComponent =
    /*#__PURE__*/
    function () {
      function ClientInsightsComponent(elRef, modalService, dataService) {
        _classCallCheck(this, ClientInsightsComponent);

        this.elRef = elRef;
        this.modalService = modalService;
        this.dataService = dataService;
        this.expandAll = false;
      }

      _createClass(ClientInsightsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dataService.getuserName(1).subscribe(function (data) {
            _this3.userDetails = data["data"][0];
          });
        }
      }, {
        key: "expandDetails",
        value: function expandDetails(type) {
          if (type === 'expand') {
            this.expandAll = true;
          } else {
            this.expandAll = false;
            var dataElement = this.elRef.nativeElement.querySelectorAll(".panel-collapse");

            for (var i = 0; i < dataElement.length; i++) {
              dataElement[i].classList.remove('show');
            }
          }
        }
      }, {
        key: "open",
        value: function open(content, selectedItem, tableRow) {
          this.modalRow = tableRow;
          this.clientDetails = selectedItem;
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'md',
            centered: true
          });
        }
      }]);

      return ClientInsightsComponent;
    }();

    ClientInsightsComponent.ɵfac = function ClientInsightsComponent_Factory(t) {
      return new (t || ClientInsightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]));
    };

    ClientInsightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientInsightsComponent,
      selectors: [["app-client-insights"]],
      inputs: {
        insights: "insights"
      },
      decls: 15,
      vars: 1,
      consts: [[1, "card", "insightbody", 2, "width", "102%"], [1, "card-header"], [2, "font-size", "1.33vw"], [1, "hyper-link-ec"], [2, "font-size", "16px", "text-decoration", "underline", "cursor", "pointer", "color", "#007bff", "margin-left", "-10%", "margin-right", "5%", 3, "click"], [2, "font-size", "16px", "text-decoration", "underline", "cursor", "pointer", "color", "#007bff", 3, "click"], [1, "card-body", "scrollable", "scrollbar-light-blue"], ["class", "expandheight", "style", "margin: 2px 0px -15px 16px;", 4, "ngFor", "ngForOf"], ["content", ""], [1, "expandheight", 2, "margin", "2px 0px -15px 16px"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title", "pt-1", "pb-1"], [1, "row", "pt-1", 2, "margin-right", "0px", "margin-left", "0px", "flex-wrap", "unset"], [1, "col-1", "pl-4"], ["aria-hidden", "true", 1, "fa", "fa-circle", "pr-1", "pl-1"], [1, "col-11", "pl-1"], ["data-toggle", "collapse", "data-parent", "#accordion", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "pb-0", "pt-0", 3, "href", "ngClass"], [1, "mb-0", 2, "color", "black", "font-size", "14px", "width", "94%"], ["role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in", 3, "id", "ngClass"], [1, "panel-body", "mt-3"], ["style", "list-style-type:none;", 4, "ngFor", "ngForOf"], [2, "list-style-type", "none"], [1, "btn", "insideaccord", 3, "ngStyle", "click"], [1, "fa", "fa-external-link"], [1, "font-14", "pl-3", 2, "color", "black", "cursor", "pointer"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "font-14", 3, "click"], ["type", "button", "class", "btn btn-danger font-14", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "font-14", 3, "click"]],
      template: function ClientInsightsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PORTFOLIO INSIGHTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientInsightsComponent_Template_span_click_5_listener() {
            return ctx.expandDetails("expand");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Expand all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientInsightsComponent_Template_span_click_8_listener() {
            return ctx.expandDetails("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Collapse all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientInsightsComponent_div_12_Template, 16, 9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientInsightsComponent_ng_template_13_Template, 11, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.insights);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".card-header[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(248, 244, 244, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.hyper-link-ec[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: right;\r\n}\r\n\r\n.card-body[_ngcontent-hxw-c20][_ngcontent-%COMP%] {\r\n  padding: 3px;\r\n  height: 45px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-fluid[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-lg[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-md[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-sm[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-xl[_ngcontent-wws-c20][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 0px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-top: none;\r\n}\r\n\r\n.tablname[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin: 28px;\r\n}\r\n\r\n.sfont[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n}\r\n\r\n.head[_ngcontent-%COMP%] {\r\n  height: 65px;\r\n}\r\n\r\n.insideaccord[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.fa-circle[_ngcontent-%COMP%]:before {\r\n  font-size: 8px;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n  color: #3466f6;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: bottom;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  width: calc(100% - 7px);\r\n  padding: 0px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:after {\r\n  background: none repeat scroll 0 0 transparent;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  left: 50%;\r\n  \r\n  background: #3466f6;\r\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n  width: 0;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 7px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]:hover {\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%] {\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  max-height: 299px;\r\n  height: 300px;\r\n  width: calc(100%-7px);\r\n  line-height: 1.7;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-size: 15px;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.decimal-rightalign-chg[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n}\r\n\r\n.decimal-rightalign-total[_ngcontent-%COMP%] {\r\n  text-align: right !important;\r\n  padding-right: 45px;\r\n}\r\n\r\n\r\n\r\n.panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-family: Fontawesome;\r\n  content: \"\\f078\";\r\n  float: right;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  margin-right: 1vw;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:after {\r\n  font-family: Fontawesome;\r\n  content: \"\\f077\";\r\n  color: grey !important;\r\n  margin-right: 1vw;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active {\r\n  outline: none !important;\r\n  box-shadow: none;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.link-text[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%], .font-14[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active {\r\n  outline: none !important;\r\n  box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LWluc2lnaHRzL2NsaWVudC1pbnNpZ2h0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOztBQUVIO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0MsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7Ozs7OztHQU1HOztBQUVIOzs7Ozs7RUFNRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7Ozs7R0FJRzs7QUFFSCxzQkFBc0I7O0FBRXRCOzs7Ozs7S0FNSzs7QUFFTDtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7R0FNRzs7QUFFSDs7RUFFRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1pbnNpZ2h0cy9jbGllbnQtaW5zaWdodHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJkLWhlYWRlcnMge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG59ICovXHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDQsIDI0NCwgMC4wMyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG59XHJcblxyXG4uaHlwZXItbGluay1lYyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmNhcmQtYm9keVtfbmdjb250ZW50LWh4dy1jMjBdIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4vKiAuY29udGFpbmVyLCAuY29udGFpbmVyLWZsdWlkLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyLXhsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufSAqL1xyXG5cclxuLmNvbnRhaW5lcltfbmdjb250ZW50LXd3cy1jMjBdLFxyXG4uY29udGFpbmVyLWZsdWlkW19uZ2NvbnRlbnQtd3dzLWMyMF0sXHJcbi5jb250YWluZXItbGdbX25nY29udGVudC13d3MtYzIwXSxcclxuLmNvbnRhaW5lci1tZFtfbmdjb250ZW50LXd3cy1jMjBdLFxyXG4uY29udGFpbmVyLXNtW19uZ2NvbnRlbnQtd3dzLWMyMF0sXHJcbi5jb250YWluZXIteGxbX25nY29udGVudC13d3MtYzIwXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLnRhYmxuYW1lIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAyOHB4O1xyXG59XHJcblxyXG4uc2ZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvKiBtYXJnaW4tdG9wOiA4cHg7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWItMCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLmluc2lkZWFjY29yZCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mYS1jaXJjbGU6YmVmb3JlIHtcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIGNvbG9yOiAjMzQ2NmY2O1xyXG59XHJcblxyXG4vKiAuZXhwYW5kaGVpZ2h0e1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn0gKi9cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDdweCk7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmdoaTphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICBib3R0b206IDA7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDJweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gIGJhY2tncm91bmQ6ICMzNDY2ZjY7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLmdoaTpob3ZlcjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLyogLnNpZGVzY3JvbGx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG59ICovXHJcblxyXG4vKnNpZGUgc2Nyb2xsIGJhciBjc3MqL1xyXG5cclxuLyogLmZvcm0tZWxlZ2FudCxcclxuICAuZm9ybS1kYXJrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMzVweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9ICovXHJcblxyXG4uc2Nyb2xsYmFyLWxpZ2h0LWJsdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItbGlnaHQtYmx1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG4uc2Nyb2xsYWJsZTpob3ZlciB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiAyOTlweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUtN3B4KTtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4ucGFuZWwtdGl0bGUgYTphZnRlciB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5kZWNpbWFsLXJpZ2h0YWxpZ24tY2hnIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5kZWNpbWFsLXJpZ2h0YWxpZ24tdG90YWwge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogNDVweDtcclxufVxyXG5cclxuLypzaWRlIHNjcm9sbCBiYXIgY3NzIGVuZCovXHJcblxyXG4ucGFuZWwtdGl0bGUgYTphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRhd2Vzb21lO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDc4XCI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xyXG59XHJcblxyXG4ucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250YXdlc29tZTtcclxuICBjb250ZW50OiBcIlxcZjA3N1wiO1xyXG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XHJcbn1cclxuXHJcbi8qIC5waWVjaGFydHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn0gKi9cclxuXHJcbi5idG46Zm9jdXMsXHJcbi5idG46YWN0aXZlIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5saW5rLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5tb2RhbC1ib2R5LFxyXG4uZm9udC0xNCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuOmZvY3VzLFxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientInsightsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-insights',
          templateUrl: './client-insights.component.html',
          styleUrls: ['./client-insights.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
        }];
      }, {
        insights: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/client-login/client-login.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/client-login/client-login.component.ts ***!
    \********************************************************/

  /*! exports provided: ClientLoginComponent */

  /***/
  function srcAppClientLoginClientLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientLoginComponent", function () {
      return ClientLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/config/app.config */
    "./src/config/app.config.ts");
    /* harmony import */


    var src_config_client_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/config/client.config */
    "./src/config/client.config.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ClientLoginComponent =
    /*#__PURE__*/
    function () {
      function ClientLoginComponent() {
        _classCallCheck(this, ClientLoginComponent);
      }

      _createClass(ClientLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = sessionStorage.getItem("clientName");
          this.heading = sessionStorage.getItem("heading");
          this.message = sessionStorage.getItem("message");
          var headerObject = src_config_client_config__WEBPACK_IMPORTED_MODULE_2__["ClientConfig"].find(function (item) {
            return item.client === src_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].client;
          });
          this.footerIconPath = headerObject.footerIconPath;
        }
      }]);

      return ClientLoginComponent;
    }();

    ClientLoginComponent.ɵfac = function ClientLoginComponent_Factory(t) {
      return new (t || ClientLoginComponent)();
    };

    ClientLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientLoginComponent,
      selectors: [["app-client-login"]],
      decls: 10,
      vars: 4,
      consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["alt", "Brand logo", "width", "50", "height", "fit-content", 1, "rounded", 3, "src"], [2, "font-size", "20px"], [2, "font-size", "15px"], ["id", "formFooter"]],
      template: function ClientLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.footerIconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.message, " ", ctx.name, "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]],
      styles: ["html[_ngcontent-%COMP%] {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px; \r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column; \r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n  width:60%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LWxvZ2luL2NsaWVudC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxVQUFVOztBQUVWO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBSUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUVFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWix5Q0FBeUM7RUFDekMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QjtBQUM5Qjs7QUFJQSxTQUFTOztBQUVUO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBSUEsbUJBQW1COztBQUVuQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLDhDQUE4QztFQUU5Qyw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBSzFCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUtFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUlBLGVBQWU7O0FBRWYsdUNBQXVDOztBQUN2QztFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBRVYsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBRVYsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsZUFBZTtFQUNqQjtBQUNGOztBQUVBLGtDQUFrQzs7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFMUQ7RUFDRSxTQUFTO0VBQ1Qsa0NBQWtDO0VBRWxDLDBCQUEwQjs7RUFFMUIsb0NBQW9DO0VBRXBDLDRCQUE0Qjs7RUFFNUIsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUUzQixtQkFBbUI7QUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUlBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50LWxvZ2luL2NsaWVudC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIEJBU0lDICovXHJcblxyXG5odG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBTVFJVQ1RVUkUgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6MDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcblxyXG4uZmFkZUluLmZpcnN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uc2Vjb25kIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5mYWRlSW4udGhpcmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxuLmZhZGVJbi5mb3VydGgge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSBcclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo2MCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-login',
          templateUrl: './client-login.component.html',
          styleUrls: ['./client-login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client-portfolio-holdings/client-portfolio-holdings.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/client-portfolio-holdings/client-portfolio-holdings.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ClientPortfolioHoldingsComponent */

  /***/
  function srcAppClientPortfolioHoldingsClientPortfolioHoldingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientPortfolioHoldingsComponent", function () {
      return ClientPortfolioHoldingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClientPortfolioHoldingsComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r154 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154.ticker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154.priceChangePct);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154.Sentiment_score);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154.esg_score);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r154.currency_symbol, "", item_r154.lastPrice, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r154.currency_symbol, "", item_r154.marketValue, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154.AumPct);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    var ClientPortfolioHoldingsComponent =
    /*#__PURE__*/
    function () {
      function ClientPortfolioHoldingsComponent() {
        _classCallCheck(this, ClientPortfolioHoldingsComponent);

        this.shortClassTicker = '';
        this.shortClassChange = '';
        this.shortClassQuantity = '';
        this.shortClassLastPrice = '';
        this.shortClassMarketValue = '';
        this.shortClassAUMPrice = '';
        this.shortClassNSentiment = '';
        this.shortClassSentiment = 'headerSortUp';
      }

      _createClass(ClientPortfolioHoldingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(change) {
          if (this.data) {// this.shortClassSentiment === 'headerSortUp' ? (this.shortClassSentiment = 'headerSortDown', this.data.sort((a, b) => Number(a.Sentiment_score) - Number(b.Sentiment_score))) : (this.shortClassSentiment = 'headerSortUp', this.data.sort((a, b) => Number(b.Sentiment_score) - Number(a.Sentiment_score)));
          }
        }
      }, {
        key: "sortNumber",
        value: function sortNumber(className) {
          switch (className) {
            case 'shortClassChange':
              this.shortClassChange === 'headerSortUp' ? (this.shortClassChange = 'headerSortDown', this.data.sort(function (a, b) {
                return Number(b.priceChangePct) - Number(a.priceChangePct);
              })) : (this.shortClassChange = 'headerSortUp', this.data.sort(function (a, b) {
                return Number(a.priceChangePct) - Number(b.priceChangePct);
              }));
              this.shortClassTicker = '';
              this.shortClassQuantity = '';
              this.shortClassLastPrice = '';
              this.shortClassMarketValue = '';
              this.shortClassSentiment = '';
              this.shortClassAUMPrice = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassLastPrice':
              this.shortClassLastPrice === 'headerSortUp' ? (this.shortClassLastPrice = 'headerSortDown', this.data.sort(function (a, b) {
                return Number(b.lastPrice.replace(/,/g, '')) - Number(a.lastPrice.replace(/,/g, ''));
              })) : (this.shortClassLastPrice = 'headerSortUp', this.data.sort(function (a, b) {
                return Number(a.lastPrice.replace(/,/g, '')) - Number(b.lastPrice.replace(/,/g, ''));
              }));
              this.shortClassTicker = '';
              this.shortClassChange = '';
              this.shortClassQuantity = '';
              this.shortClassMarketValue = '';
              this.shortClassSentiment = '';
              this.shortClassAUMPrice = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassMarketValue':
              this.shortClassMarketValue === 'headerSortUp' ? (this.shortClassMarketValue = 'headerSortDown', this.data.sort(function (a, b) {
                return Number(b.marketValue.replace(/,/g, '')) - Number(a.marketValue.replace(/,/g, ''));
              })) : (this.shortClassMarketValue = 'headerSortUp', this.data.sort(function (a, b) {
                return Number(a.marketValue.replace(/,/g, '')) - Number(b.marketValue.replace(/,/g, ''));
              }));
              this.shortClassTicker = '';
              this.shortClassChange = '';
              this.shortClassQuantity = '';
              this.shortClassLastPrice = '';
              this.shortClassSentiment = '';
              this.shortClassAUMPrice = '';
              break;

            case 'shortClassQuantity':
              this.shortClassQuantity === 'headerSortUp' ? (this.shortClassQuantity = 'headerSortDown', this.data.sort(function (a, b) {
                return Number(b.quantity) - Number(a.quantity);
              })) : (this.shortClassQuantity = 'headerSortUp', this.data.sort(function (a, b) {
                return Number(a.quantity) - Number(b.quantity);
              }));
              this.shortClassTicker = '';
              this.shortClassChange = '';
              this.shortClassLastPrice = '';
              this.shortClassMarketValue = '';
              this.shortClassSentiment = '';
              this.shortClassAUMPrice = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassTicker':
              this.shortClassTicker === 'headerSortUp' ? (this.shortClassTicker = 'headerSortDown', this.data.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
              })) : (this.shortClassTicker = 'headerSortUp', this.data.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
              }));
              this.shortClassChange = '';
              this.shortClassQuantity = '';
              this.shortClassLastPrice = '';
              this.shortClassMarketValue = '';
              this.shortClassSentiment = '';
              this.shortClassAUMPrice = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassSentiment':
              this.shortClassSentiment === 'headerSortUp' ? (this.shortClassSentiment = 'headerSortDown', this.data.sort(function (a, b) {
                return Number(b.Sentiment_score) - Number(a.Sentiment_score);
              })) : (this.shortClassSentiment = 'headerSortUp', this.data.sort(function (a, b) {
                return Number(a.Sentiment_score) - Number(b.Sentiment_score);
              }));
              this.shortClassChange = '';
              this.shortClassQuantity = '';
              this.shortClassLastPrice = '';
              this.shortClassMarketValue = '';
              this.shortClassTicker = '';
              this.shortClassAUMPrice = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassAUMPrice':
              this.shortClassAUMPrice === 'headerSortUp' ? (this.shortClassAUMPrice = 'headerSortDown', this.data.sort(function (a, b) {
                return Number(b.AumPct) - Number(a.AumPct);
              })) : (this.shortClassAUMPrice = 'headerSortUp', this.data.sort(function (a, b) {
                return Number(a.AumPct) - Number(b.AumPct);
              }));
              this.shortClassChange = '';
              this.shortClassQuantity = '';
              this.shortClassLastPrice = '';
              this.shortClassMarketValue = '';
              this.shortClassTicker = '';
              this.shortClassSentiment = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassNSentiment':
              this.shortClassNSentiment === 'headerSortUp' ? (this.shortClassNSentiment = 'headerSortDown', this.data.sort(function (a, b) {
                return Number(b.esg_score) - Number(a.esg_score);
              })) : (this.shortClassNSentiment = 'headerSortUp', this.data.sort(function (a, b) {
                return Number(a.esg_score) - Number(b.esg_score);
              }));
              this.shortClassChange = '';
              this.shortClassQuantity = '';
              this.shortClassLastPrice = '';
              this.shortClassMarketValue = '';
              this.shortClassTicker = '';
              this.shortClassSentiment = '';
              this.shortClassAUMPrice = '';
              break;

            default:
              break;
          }
        }
      }]);

      return ClientPortfolioHoldingsComponent;
    }();

    ClientPortfolioHoldingsComponent.ɵfac = function ClientPortfolioHoldingsComponent_Factory(t) {
      return new (t || ClientPortfolioHoldingsComponent)();
    };

    ClientPortfolioHoldingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientPortfolioHoldingsComponent,
      selectors: [["app-client-portfolio-holdings"]],
      inputs: {
        data: "data",
        clientName: "clientName"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 28,
      vars: 34,
      consts: [[1, "card", "clientbody"], [1, "card-header", "hedscol"], [2, "font-size", "1.33vw"], [1, "card-body", "scrollable", "scrollbar-light-blue"], [1, "tab-content"], ["id", "home", 1, "container", "tab-pane", "active"], [1, "table"], [1, "heading", "mt-5", 2, "position", "sticky", "top", "0", "background-color", "white"], [2, "cursor", "pointer", 3, "ngStyle", "ngClass", "click"], [1, "text-right", 2, "cursor", "pointer", 3, "ngStyle", "ngClass", "click"], ["class", "sfont", 4, "ngFor", "ngForOf"], [1, "sfont"], [1, "text-left"], [1, "text-right"]],
      template: function ClientPortfolioHoldingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_10_listener() {
            return ctx.sortNumber("shortClassTicker");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TICKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_12_listener() {
            return ctx.sortNumber("shortClassChange");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "% CHG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_14_listener() {
            return ctx.sortNumber("shortClassQuantity");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "QTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_16_listener() {
            return ctx.sortNumber("shortClassSentiment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SENTIMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_18_listener() {
            return ctx.sortNumber("shortClassNSentiment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ESG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_20_listener() {
            return ctx.sortNumber("shortClassLastPrice");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PRICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_22_listener() {
            return ctx.sortNumber("shortClassMarketValue");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MARKET VALUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioHoldingsComponent_Template_th_click_24_listener() {
            return ctx.sortNumber("shortClassAUMPrice");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "% AUM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClientPortfolioHoldingsComponent_tr_27_Template, 17, 10, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.clientName, " HOLDINGS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.shortClassTicker === "" ? "#999999" : "black"))("ngClass", ctx.shortClassTicker === "headerSortUp" ? "headerSortUp" : ctx.shortClassTicker === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.shortClassChange === "" ? "#999999" : "black"))("ngClass", ctx.shortClassChange === "headerSortUp" ? "headerSortUp" : ctx.shortClassChange === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.shortClassQuantity === "" ? "#999999" : "black"))("ngClass", ctx.shortClassQuantity === "headerSortUp" ? "headerSortUp" : ctx.shortClassQuantity === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.shortClassSentiment === "" ? "#999999" : "black"))("ngClass", ctx.shortClassSentiment === "headerSortUp" ? "headerSortUp" : ctx.shortClassSentiment === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.shortClassNSentiment === "" ? "#999999" : "black"))("ngClass", ctx.shortClassNSentiment === "headerSortUp" ? "headerSortUp" : ctx.shortClassNSentiment === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.shortClassLastPrice === "" ? "#999999" : "black"))("ngClass", ctx.shortClassLastPrice === "headerSortUp" ? "headerSortUp" : ctx.shortClassLastPrice === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.shortClassMarketValue === "" ? "#999999" : "black"))("ngClass", ctx.shortClassMarketValue === "headerSortUp" ? "headerSortUp" : ctx.shortClassMarketValue === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.shortClassAUMPrice === "" ? "#999999" : "black"))("ngClass", ctx.shortClassAUMPrice === "headerSortUp" ? "headerSortUp" : ctx.shortClassAUMPrice === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".card-header[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(248, 244, 244, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%]:after, .headerSortUp[_ngcontent-%COMP%]:after {\r\n  content: ' ';\r\n  position: relative;\r\n  left: 6px;\r\n  border: 5px solid transparent;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%]:after {\r\n  top: 14px;\r\n  left: 5px;\r\n  border-top-color: black;\r\n}\r\n\r\n.headerSortUp[_ngcontent-%COMP%]:after {\r\n  bottom: 12px;\r\n  right: 5px;\r\n  border-bottom-color: black;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%], .headerSortUp[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.card-body[_ngcontent-hxw-c20][_ngcontent-%COMP%] {\r\n  padding: 3px;\r\n  height: 45px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-top: none;\r\n}\r\n\r\n.tablname[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-size: 1.09vw;\r\n  margin: 28px;\r\n}\r\n\r\n.sfont[_ngcontent-%COMP%] {\r\n  font-size: 1.09vw;\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n  font-size: 1.09vw;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n}\r\n\r\n.head[_ngcontent-%COMP%] {\r\n  height: 65px;\r\n}\r\n\r\n.insideaccord[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1.09vw;\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.fa-circle[_ngcontent-%COMP%]:before {\r\n  font-size: 8px;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n  color: #3466f6;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: bottom;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  border-radius: 8px;\r\n  width:calc(100% - 7px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:after {\r\n  background: none repeat scroll 0 0 transparent;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  left: 50%;\r\n  \r\n  background: #3466f6;\r\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n  width: 0;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.sidescroll[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  height: 300px;\r\n}\r\n\r\n\r\n\r\n.form-elegant[_ngcontent-%COMP%], .form-dark[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 235px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 7px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]:hover{\r\n  overflow-y:auto;\r\n  width: 100%;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  max-height: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-size: 15px;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.decimal-rightalign-chg[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n}\r\n\r\n.decimal-rightalign-total[_ngcontent-%COMP%] {\r\n  text-align: right !important;\r\n  padding-right: 45px;\r\n}\r\n\r\n\r\n\r\n.panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-family: Fontawesome;\r\n  content: \"\\f077\";\r\n  float: right;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:after {\r\n  font-family: Fontawesome;\r\n  content: \"\\f078\";\r\n  color: grey !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LXBvcnRmb2xpby1ob2xkaW5ncy9jbGllbnQtcG9ydGZvbGlvLWhvbGRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyw2Q0FBNkM7QUFDL0M7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUEsc0JBQXNCOztBQUV0Qjs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1wb3J0Zm9saW8taG9sZGluZ3MvY2xpZW50LXBvcnRmb2xpby1ob2xkaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNhcmQtaGVhZGVycyB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbn0gKi9cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDI0NCwgMjQ0LCAwLjAzKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0RG93bjphZnRlcixcclxuLmhlYWRlclNvcnRVcDphZnRlciB7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA2cHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0RG93bjphZnRlciB7XHJcbiAgdG9wOiAxNHB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhlYWRlclNvcnRVcDphZnRlciB7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0RG93bixcclxuLmhlYWRlclNvcnRVcCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keVtfbmdjb250ZW50LWh4dy1jMjBdIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4vKiAuY29udGFpbmVyLCAuY29udGFpbmVyLWZsdWlkLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyLXhsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlIHRoIHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG4udGFibG5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMS4wOXZ3O1xyXG4gIG1hcmdpbjogMjhweDtcclxufVxyXG5cclxuLnNmb250IHtcclxuICBmb250LXNpemU6IDEuMDl2dztcclxuICAvKiBtYXJnaW4tdG9wOiA4cHg7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWItMCB7XHJcbiAgZm9udC1zaXplOiAxLjA5dnc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uaW5zaWRlYWNjb3JkIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEuMDl2dztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZmEtY2lyY2xlOmJlZm9yZSB7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBjb2xvcjogIzM0NjZmNjtcclxufVxyXG5cclxuLyogLmV4cGFuZGhlaWdodHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59ICovXHJcblxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6Y2FsYygxMDAlIC0gN3B4KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmdoaTphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICBib3R0b206IDA7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDJweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gIGJhY2tncm91bmQ6ICMzNDY2ZjY7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLmdoaTpob3ZlcjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnNpZGVzY3JvbGwge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi8qc2lkZSBzY3JvbGwgYmFyIGNzcyovXHJcblxyXG4uZm9ybS1lbGVnYW50LFxyXG4uZm9ybS1kYXJrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMzVweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLWxpZ2h0LWJsdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItbGlnaHQtYmx1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG4uc2Nyb2xsYWJsZTpob3ZlcntcclxuICBvdmVyZmxvdy15OmF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxle1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIGE6YWZ0ZXIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uZGVjaW1hbC1yaWdodGFsaWduLWNoZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZGVjaW1hbC1yaWdodGFsaWduLXRvdGFsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi8qc2lkZSBzY3JvbGwgYmFyIGNzcyBlbmQqL1xyXG5cclxuLnBhbmVsLXRpdGxlIGE6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250YXdlc29tZTtcclxuICBjb250ZW50OiBcIlxcZjA3N1wiO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmFmdGVyIHtcclxuICBmb250LWZhbWlseTogRm9udGF3ZXNvbWU7XHJcbiAgY29udGVudDogXCJcXGYwNzhcIjtcclxuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAucGllY2hhcnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59ICovXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPortfolioHoldingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-portfolio-holdings',
          templateUrl: './client-portfolio-holdings.component.html',
          styleUrls: ['./client-portfolio-holdings.component.css']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clientName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/client-portfolio/client-portfolio.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/client-portfolio/client-portfolio.component.ts ***!
    \****************************************************************/

  /*! exports provided: ClientPortfolioComponent */

  /***/
  function srcAppClientPortfolioClientPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientPortfolioComponent", function () {
      return ClientPortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tabs/tabs.component */
    "./src/app/tabs/tabs.component.ts");
    /* harmony import */


    var _tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tab/tab.component */
    "./src/app/tab/tab.component.ts");
    /* harmony import */


    var _portfolio_score_portfolio_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../portfolio-score/portfolio-score.component */
    "./src/app/portfolio-score/portfolio-score.component.ts");
    /* harmony import */


    var _client_graph_client_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../client-graph/client-graph.component */
    "./src/app/client-graph/client-graph.component.ts");
    /* harmony import */


    var _client_portfolio_holdings_client_portfolio_holdings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../client-portfolio-holdings/client-portfolio-holdings.component */
    "./src/app/client-portfolio-holdings/client-portfolio-holdings.component.ts");
    /* harmony import */


    var _client_insights_client_insights_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../client-insights/client-insights.component */
    "./src/app/client-insights/client-insights.component.ts");
    /* harmony import */


    var _sector_impact_sector_impact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sector-impact/sector-impact.component */
    "./src/app/sector-impact/sector-impact.component.ts");
    /* harmony import */


    var _manage_relationship_manage_relationship_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../manage-relationship/manage-relationship.component */
    "./src/app/manage-relationship/manage-relationship.component.ts");

    var ClientPortfolioComponent =
    /*#__PURE__*/
    function () {
      function ClientPortfolioComponent(dataService) {
        _classCallCheck(this, ClientPortfolioComponent);

        this.dataService = dataService;
        this.notificationCountChanged = 0;
      }

      _createClass(ClientPortfolioComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this4 = this;

          this.dataService.castValue.subscribe(function (value) {
            return _this4.showDoughnut = value;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.dataService.castValue.subscribe(function (value) {
            return _this5.showDoughnut = value;
          });
          this.client = window.history.state;
          this.clientName = this.client.name && this.client.name.split(' ')[0] && this.client.name.split(' ')[0].toUpperCase() + "'S"; // this.route.data.subscribe(dat=>{
          //   console.log(dat)
          // })

          this.fetchSentimentScore(this.client.clientID);
          this.fetchStockHoldingsData(1, this.client.clientID);
          this.fetchInsights(1, this.client.clientID);
        }
      }, {
        key: "fetchSentimentScore",
        value: function fetchSentimentScore(clientID) {
          var _this6 = this;

          this.dataService.getportfolioScoreForClient(1, clientID).subscribe(function (data) {
            _this6.portfolioSentimentScore = data["data"];

            if (_this6.portfolioSentimentScore["symbol"] === "up-arrow") {
              _this6.portfolioSentimentScore["mysymbol"] = true;
            } else {
              _this6.portfolioSentimentScore["mysymbol"] = false;
            }
          });
        }
      }, {
        key: "fetchStockHoldingsData",
        value: function fetchStockHoldingsData(faid, clientID) {
          var _this7 = this;

          this.dataService.getStockHoldingsByClient(faid, clientID, 'Sentiment_score', 'asc').subscribe(function (response) {
            if (response && response["data"]) {
              _this7.clientHoldingDetails = response["data"];
              _this7.riskProfileDatails = response["data"][0];
            }
          });
        }
      }, {
        key: "fetchInsights",
        value: function fetchInsights(faid, clientID) {
          var _this8 = this;

          this.dataService.getInsightsByClient(faid, clientID).subscribe(function (response) {
            _this8.clientInsights = response['data'];
          });
        }
      }, {
        key: "clearFilter",
        value: function clearFilter() {
          var _this9 = this;

          this.dataService.sendValue(false);
          this.dataService.castValue.subscribe(function (value) {
            return _this9.showDoughnut = value;
          });
        }
      }, {
        key: "countChanged",
        value: function countChanged(e) {
          if (e) {
            this.notificationCountChanged = e;
          }
        }
      }]);

      return ClientPortfolioComponent;
    }();

    ClientPortfolioComponent.ɵfac = function ClientPortfolioComponent_Factory(t) {
      return new (t || ClientPortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]));
    };

    ClientPortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientPortfolioComponent,
      selectors: [["app-client-portfolio"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 50,
      vars: 13,
      consts: [[1, "container-fluid", "pd-lr-10"], [1, "clientName", "mt-3"], [1, "row", "mt-4"], [1, "row", "col-10"], [1, "w-15"], ["src", "assets/images/avatar.png", "alt", "profile picture", "width", "60", "height", "60", 1, "rounded-circle", "avatar"], [1, "w-85", "ml-3", "mt-2"], [1, "col-2"], ["type", "button", 1, "btn", "btn-primary", "uppercase", "font-button"], ["tabTitle", "Manage portfolio", "active", "true"], [1, "row", 2, "padding-right", "0px", "line-height", "170%", "margin-left", "4px", "margin-right", "-30px"], [1, "col-12"], [3, "portfolioScore", "clientName", "riskProfileObj"], [1, "row", 2, "width", "101.2%"], [3, "clientID"], [1, "row"], [1, "col-6"], [3, "clientName", "data"], [1, "col-6", "pr-0"], [3, "insights"], [1, "container"], [1, "col-12", "pr-0"], [1, "card", 2, "width", "101%"], [1, "card-header", "card", "bg-primary", "text-white"], [1, "col-3", "portfoliotext"], [1, "col-7"], [1, "col-2", "clrfiltertext"], [2, "color", "white", "cursor", "pointer", "font-size", "1.11vw", 3, "click"], [1, "card-body"], ["tabTitle", "Manage Relationship & View Client Intel", 3, "notificationCount"], [3, "clientID", "countChanged"], ["tabTitle", "View Client's Details"]],
      template: function ClientPortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-portfolio-score", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-client-graph", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-client-portfolio-holdings", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-client-insights", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sector Impact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientPortfolioComponent_Template_a_click_39_listener() {
            return ctx.clearFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "CLEAR ALL FILTERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-sector-impact", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "app-tab", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-manage-relationship", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("countChanged", function ClientPortfolioComponent_Template_app_manage_relationship_countChanged_47_listener($event) {
            return ctx.countChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "app-tab", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Content 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Client Portfolios < ", ctx.client.name, "'s Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.client && ctx.client.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Trade for ", ctx.client.name == null ? null : ctx.client.name.split(" ")[0], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("portfolioScore", ctx.portfolioSentimentScore)("clientName", ctx.client.name)("riskProfileObj", ctx.riskProfileDatails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clientID", ctx.client.clientID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clientName", ctx.clientName)("data", ctx.clientHoldingDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("insights", ctx.clientInsights);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clientID", ctx.client.clientID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificationCount", ctx.notificationCountChanged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clientID", ctx.client.clientID);
        }
      },
      directives: [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _portfolio_score_portfolio_score_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioScoreComponent"], _client_graph_client_graph_component__WEBPACK_IMPORTED_MODULE_5__["ClientGraphComponent"], _client_portfolio_holdings_client_portfolio_holdings_component__WEBPACK_IMPORTED_MODULE_6__["ClientPortfolioHoldingsComponent"], _client_insights_client_insights_component__WEBPACK_IMPORTED_MODULE_7__["ClientInsightsComponent"], _sector_impact_sector_impact_component__WEBPACK_IMPORTED_MODULE_8__["SectorImpactComponent"], _manage_relationship_manage_relationship_component__WEBPACK_IMPORTED_MODULE_9__["ManageRelationshipComponent"]],
      styles: [".padding-10[_ngcontent-%COMP%]{\r\n  padding-left: 7%;\r\n    padding-right: 3%;\r\n}\r\n.padding-left-5[_ngcontent-%COMP%]{\r\n  padding-left: 5%;\r\n}\r\n.uppercase[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n}\r\n.clientName[_ngcontent-%COMP%]{\r\n    color: #8495C7;\r\n    font-size: 16px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  \r\n}\r\n.sfont[_ngcontent-%COMP%]{\r\n\r\n  \r\n\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 13.5px;\r\n  line-height: 18px;\r\n  margin-left: 15px;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  padding: .75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  border-bottom: 1px solid rgba(0,0,0,.125);\r\n  height: 55px;\r\n}\r\n.align[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-right: 65px;\r\n  margin-top: 20px;\r\n}\r\n.side[_ngcontent-%COMP%]{\r\n\r\n  margin-left: 300px;\r\n}\r\n.cir[_ngcontent-%COMP%]{\r\nmargin: auto;\r\ndisplay: block;\r\n}\r\n.filter[_ngcontent-%COMP%]{\r\n  margin-left: 85%;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 18px\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  width:calc(100% - 7px);\r\n  \r\n}\r\n\r\n.form-elegant[_ngcontent-%COMP%], .form-dark[_ngcontent-%COMP%] {\r\n\r\nheight: 285px;\r\noverflow-y: scroll;\r\noverflow-x: hidden;\r\n}\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar {\r\nwidth: 7px;\r\nbackground-color: #F5F5F5;\r\n}\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n}\r\n.scrollable[_ngcontent-%COMP%]:hover{\r\n  overflow-y:auto;\r\n  width: 100%;\r\n}\r\n.scrollable[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  max-height: 300px;\r\n  height: 300px;\r\n}\r\n.scrollbar-light-blue[_ngcontent-%COMP%] {\r\nscrollbar-color: #82B1FF #F5F5F5;\r\n}\r\n\r\n.portfoliotext[_ngcontent-%COMP%]{\r\n\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 1.8vw;\r\n  line-height: 30px;\r\n}\r\n.avatar[_ngcontent-%COMP%]{\r\n    border: cornflowerblue;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n}\r\n.clrfiltertext[_ngcontent-%COMP%]{\r\n\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  margin-top: 8px;\r\n  text-decoration: underline;\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n\r\n  border-bottom-right-radius: 0px !important;\r\n  border-bottom-left-radius: 0px !important;\r\n}\r\n.font-button[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n    font-weight: 500;\r\n}\r\n.flex-section[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  flex-direction: column;\r\n   \r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n}\r\n.pd-lr-10[_ngcontent-%COMP%] {\r\n  padding: 0 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LXBvcnRmb2xpby9jbGllbnQtcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUU7OztpQ0FHK0I7O0VBRS9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTs7QUFFakI7QUFJQTs7Ozs7Ozs7O0dBU0c7QUFHSDtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7QUFLQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBRUE7QUFDQSxZQUFZO0FBQ1osY0FBYztBQUNkO0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Y7QUFDRjtBQUdBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUVBOzs7R0FHRztBQUdIO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUtBLHNCQUFzQjtBQUd0Qjs7QUFFQSx3QkFBd0I7QUFDeEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7QUFHQTtBQUNBLFVBQVU7QUFDVix5QkFBeUI7QUFDekI7QUFHQTs7RUFFRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFHQTtBQUNBLGdDQUFnQztBQUNoQztBQUlBLDBCQUEwQjtBQUcxQjs7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBR0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7QUFHQTs7RUFFRSwwQ0FBMEM7RUFDMUMseUNBQXlDO0FBQzNDO0FBRUE7RUFDRSxlQUFlO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0dBQ3JCLDRCQUE0QjtFQUM3QixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50LXBvcnRmb2xpby9jbGllbnQtcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZy0xMHtcclxuICBwYWRkaW5nLWxlZnQ6IDclO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbn1cclxuLnBhZGRpbmctbGVmdC01e1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi51cHBlcmNhc2V7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNsaWVudE5hbWV7XHJcbiAgICBjb2xvcjogIzg0OTVDNztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi8qIGNvcHkgZnJvbSBwb3J0Zm9saW8gKi9cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIC8qIG1hcmdpbjogMjBweDsgKi9cclxufVxyXG5cclxuLnNmb250e1xyXG5cclxuICAvKiBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybzsgKi9cclxuXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKiAuU2ZvbnR7XHJcblxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcblxyXG5cclxufSAqL1xyXG5cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYWxpZ257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNjVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZXtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG59XHJcblxyXG4uY2lye1xyXG5tYXJnaW46IGF1dG87XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcbi5maWx0ZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1JTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHhcclxufVxyXG5cclxuXHJcbi5jYXJke1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWJvZHl7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSAqL1xyXG5cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgd2lkdGg6Y2FsYygxMDAlIC0gN3B4KTtcclxuICAvKiBoZWlnaHQ6IDI1JTsgKi9cclxufVxyXG5cclxuXHJcblxyXG5cclxuLypzaWRlIHNjcm9sbCBiYXIgY3NzKi9cclxuXHJcblxyXG4uZm9ybS1lbGVnYW50LFxyXG4uZm9ybS1kYXJrIHtcclxuLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG5oZWlnaHQ6IDI4NXB4O1xyXG5vdmVyZmxvdy15OiBzY3JvbGw7XHJcbm92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5zY3JvbGxiYXItbGlnaHQtYmx1ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG53aWR0aDogN3B4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG5cclxuLnNjcm9sbGJhci1saWdodC1ibHVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG5cclxuXHJcbi5zY3JvbGxhYmxlOmhvdmVye1xyXG4gIG92ZXJmbG93LXk6YXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNjcm9sbGFibGV7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuLnNjcm9sbGJhci1saWdodC1ibHVlIHtcclxuc2Nyb2xsYmFyLWNvbG9yOiAjODJCMUZGICNGNUY1RjU7XHJcbn1cclxuXHJcblxyXG5cclxuLypzaWRlIHNjcm9sbCBiYXIgY3NzIGVuZCovXHJcblxyXG5cclxuLnBvcnRmb2xpb3RleHR7XHJcblxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgICBib3JkZXI6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG5cclxuLmNscmZpbHRlcnRleHR7XHJcblxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1oZWFkZXJ7XHJcblxyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mbGV4LXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAvKiBhbGlnbi1jb250ZW50OiBzdHJldGNoOyAqL1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSBcclxuXHJcbi5wZC1sci0xMCB7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-client-portfolio",
          templateUrl: "./client-portfolio.component.html",
          styleUrls: ["./client-portfolio.component.css"]
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client-risk-profile/client-risk-profile.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/client-risk-profile/client-risk-profile.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ClientRiskProfileComponent */

  /***/
  function srcAppClientRiskProfileClientRiskProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientRiskProfileComponent", function () {
      return ClientRiskProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClientRiskProfileComponent =
    /*#__PURE__*/
    function () {
      function ClientRiskProfileComponent() {
        _classCallCheck(this, ClientRiskProfileComponent);
      }

      _createClass(ClientRiskProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.riskProfileObj) {
            this.profileDescription = this.riskProfileObj["Risk_Profile_Desc"];
            this.profileName = this.riskProfileObj["risk_profile_name"];
          }
        }
      }]);

      return ClientRiskProfileComponent;
    }();

    ClientRiskProfileComponent.ɵfac = function ClientRiskProfileComponent_Factory(t) {
      return new (t || ClientRiskProfileComponent)();
    };

    ClientRiskProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientRiskProfileComponent,
      selectors: [["app-client-risk-profile"]],
      inputs: {
        riskProfileObj: "riskProfileObj",
        clientName: "clientName"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "card", 2, "line-height", "355%", "background-color", "#007bff82", "color", "white"], [1, "card-body", "mb-3"], [1, "card-title", "client-title", 2, "color", "white"], [1, "blue-text", 2, "color", "white"], [1, "description"]],
      template: function ClientRiskProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.clientName.split(" ")[0], "'s Risk Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileDescription, " ");
        }
      },
      styles: [".client-title[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 1.11vw;\r\n  font-weight: 600;\r\n  color: #999999;\r\n}\r\n.blue-text[_ngcontent-%COMP%] {\r\n  color: #3466F6;\r\n  font-size: 1.5vw;\r\n  font-weight: 600;\r\n  margin-top:13px;\r\n}\r\n.description[_ngcontent-%COMP%] {\r\n  font-size: 1.05vw;\r\n  font-weight: 400;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LXJpc2stcHJvZmlsZS9jbGllbnQtcmlzay1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1yaXNrLXByb2ZpbGUvY2xpZW50LXJpc2stcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC10aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuMTF2dztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbi5ibHVlLXRleHQge1xyXG4gIGNvbG9yOiAjMzQ2NkY2O1xyXG4gIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOjEzcHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuMDV2dztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5jYXJkLWJvZHkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientRiskProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-client-risk-profile",
          templateUrl: "./client-risk-profile.component.html",
          styleUrls: ["./client-risk-profile.component.css"]
        }]
      }], function () {
        return [];
      }, {
        riskProfileObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clientName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/clientholding/clientholding.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/clientholding/clientholding.component.ts ***!
    \**********************************************************/

  /*! exports provided: ClientholdingComponent */

  /***/
  function srcAppClientholdingClientholdingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientholdingComponent", function () {
      return ClientholdingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function ClientholdingComponent_tr_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_tr_49_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var item_r52 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.onRowClick(item_r52);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, item_r52.textColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.changeVal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r52.posSentScore, " (", item_r52.positiveAumPct, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r52.negSentScore, " (", item_r52.negativeAumPct, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.esg_score);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r52.currency_symbol, "", item_r52.marketValue, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.ofOverall);
      }
    }

    function ClientholdingComponent_div_68_ul_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_div_68_ul_15_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var abc_r58 = ctx.$implicit;

          var item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

          return ctx_r59.open(_r50, item_r55, abc_r58);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var abc_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, abc_r58.actionColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", abc_r58.actionText, " ");
      }
    }

    function ClientholdingComponent_div_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClientholdingComponent_div_68_ul_15_Template, 7, 4, "ul", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r55 = ctx.$implicit;
        var i_r56 = ctx.index;

        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r55.accColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapseOne", i_r56, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r49.expandAll ? "" : "collapsed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r55.accTitle, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseOne", i_r56, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r49.expandAll ? "show" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r55.recommendation);
      }
    }

    function ClientholdingComponent_ng_template_71_div_4_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_ng_template_71_div_4_tr_14_Template_th_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var item_r68 = ctx.$implicit;

          var modal_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          modal_r62.close("Ok click");
          return ctx_r69.getClientData(item_r68);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68.pct_change);
      }
    }

    function ClientholdingComponent_ng_template_71_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Take Action for : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_ng_template_71_div_4_Template_th_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r72.sortNumber("shortClientName");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Client Names");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_ng_template_71_div_4_Template_th_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r74.sortNumber("shortClientPct");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "% Impact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientholdingComponent_ng_template_71_div_4_tr_14_Template, 5, 2, "tr", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r63.modalRow.actionText, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r63.shortClientName === "" ? "#999999" : "black"))("ngClass", ctx_r63.shortClientName === "headerSortUp" ? "headerSortUp" : ctx_r63.shortClientName === "headerSortDown" ? "headerClientSortDown" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r63.shortClientPct === "" ? "#999999" : "black"))("ngClass", ctx_r63.shortClientPct === "headerSortUp" ? "headerSortUp" : ctx_r63.shortClientPct === "headerSortDown" ? "headerClientSortDown" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r63.clientDataList);
      }
    }

    function ClientholdingComponent_ng_template_71_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bcc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "From");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dear Client,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Thanks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r64.clientDetails.relatedClientEmail, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r64.userDetails.Email, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r64.modalRow.subject, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r64.modalRow.body_1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r64.modalRow.body_2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r64.userDetails.Name, " ");
      }
    }

    function ClientholdingComponent_ng_template_71_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_ng_template_71_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var modal_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return modal_r62.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientholdingComponent_ng_template_71_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_ng_template_71_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var modal_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return modal_r62.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientholdingComponent_ng_template_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientholdingComponent_ng_template_71_div_4_Template, 15, 10, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientholdingComponent_ng_template_71_div_5_Template, 27, 6, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_ng_template_71_Template_button_click_7_listener() {
          var modal_r62 = ctx.$implicit;
          return modal_r62.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientholdingComponent_ng_template_71_button_9_Template, 2, 0, "button", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientholdingComponent_ng_template_71_button_10_Template, 2, 0, "button", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.modalRow.actionText != "Send a note to clients" && ctx_r51.modalRow.actionText != "Send a note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.modalRow.actionText === "Send a note to clients" || ctx_r51.modalRow.actionText === "Send a note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.modalRow.actionText != "Send a note to clients" && ctx_r51.modalRow.actionText != "Send a note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.modalRow.actionText === "Send a note to clients" || ctx_r51.modalRow.actionText === "Send a note");
      }
    }

    var ClientholdingComponent =
    /*#__PURE__*/
    function () {
      function ClientholdingComponent(myservice, elRef, modalService) {
        _classCallCheck(this, ClientholdingComponent);

        this.myservice = myservice;
        this.elRef = elRef;
        this.modalService = modalService;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.shortClassName = '';
        this.shortClassCNG = '';
        this.shortClassPSentiment = 'headerSortUp';
        this.shortClassNSentiment = '';
        this.shortClassAUM = '';
        this.shortClassTotal = '';
        this.shortClientName = '';
        this.shortClientPct = '';
        this.expandAll = false;
        this.clientDataList = [];
        this.additionalData = [];
        this.piechart = {
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          chart: {// width: '',
            // height: 350,
          },
          tooltip: {
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "black",
            formatter: function formatter() {
              return "<b>" + this.key + "</b><br> " + +this.y.toLocaleString() + "% of overall portfolio" + "</b><br> " + 'ESG ' + +this.point.options.custom;
            },
            style: {
              color: "white"
            }
          },
          legend: {
            enabled: true,
            align: "right",
            borderWidth: 0,
            layout: "vertical",
            verticalAlign: "top"
          },
          plotOptions: {
            pie: {
              shadow: false,
              center: ["35%", "40%"]
            },
            series: {
              showInLegend: true,
              dataLabels: {
                enabled: false,
                format: "{point.name}: {point.y:.1f}% {point.custom:.1f}"
              }
            }
          },
          series: [{
            size: "80%",
            innerSize: "70%",
            type: "pie",
            data: []
          }]
        };
      }

      _createClass(ClientholdingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.myservice.getuserName(1).subscribe(function (data) {
            _this10.userDetails = data["data"][0];
          });
          this.myservice.inSight(1).subscribe(function (data) {
            _this10.insightdetails = [].concat(_toConsumableArray(data["data"]), _toConsumableArray(_this10.additionalData));
          });
          this.myservice.getClientholding(1, 'negSentScore', 'asc').subscribe(function (data) {
            _this10.clientholdingdetails = data["data"];
            _this10.chartData = JSON.parse(JSON.stringify(data["data"]));

            _this10.chartData.sort(function (a, b) {
              return b.ofOverall - a.ofOverall;
            });

            var myData = _this10.chartData.map(function (p) {
              var _t = {};
              _t["name"] = p.name;
              _t["y"] = p.ofOverall;
              _t["custom"] = p.esg_score;
              return _t;
            });

            var finaldata = [];
            finaldata.push({
              data: myData
            });
            _this10.piechart.series = finaldata;
            _this10.updateFlag = true;
          });
        }
      }, {
        key: "getId",
        value: function getId(data) {
          return "collapse" + data;
        }
      }, {
        key: "getIconID",
        value: function getIconID(id) {
          return "icon" + id;
        }
      }, {
        key: "getTargetData",
        value: function getTargetData(data) {
          return "#collapse" + data;
        }
      }, {
        key: "getClientData",
        value: function getClientData(item) {
          var navigateData = this.clientholdingdetails.filter(function (e) {
            return e.clientID === Number(item.id);
          })[0];
          this.onRowClick(navigateData);
        }
      }, {
        key: "onClickOnPanel",
        value: function onClickOnPanel(event, pannelId) {
          var element = event.target.closest(".link");
          var data = element.getAttribute("aria-expanded");

          if (data) {
            var iconElement = this.elRef.nativeElement.getElementById("icon" + pannelId);
          }
        }
      }, {
        key: "onRowClick",
        value: function onRowClick(clientItem) {
          console.log(clientItem);
          sessionStorage.setItem("clientName", clientItem.name);
          this.myservice.navigateToClientPortfolio(clientItem);
        }
      }, {
        key: "sortNumber",
        value: function sortNumber(className) {
          switch (className) {
            case 'shortClassCNG':
              this.shortClassCNG === 'headerSortUp' ? (this.shortClassCNG = 'headerSortDown', this.clientholdingdetails.sort(function (a, b) {
                return Number(b.changeVal) - Number(a.changeVal);
              })) : (this.shortClassCNG = 'headerSortUp', this.clientholdingdetails.sort(function (a, b) {
                return Number(a.changeVal) - Number(b.changeVal);
              }));
              this.shortClassName = '';
              this.shortClassPSentiment = '';
              this.shortClassAUM = '';
              this.shortClassTotal = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassAUM':
              this.shortClassAUM === 'headerSortUp' ? (this.shortClassAUM = 'headerSortDown', this.clientholdingdetails.sort(function (a, b) {
                return Number(b.marketValue.replace(/,/g, '')) - Number(a.marketValue.replace(/,/g, ''));
              })) : (this.shortClassAUM = 'headerSortUp', this.clientholdingdetails.sort(function (a, b) {
                return Number(a.marketValue.replace(/,/g, '')) - Number(b.marketValue.replace(/,/g, ''));
              }));
              this.shortClassName = '';
              this.shortClassCNG = '';
              this.shortClassPSentiment = '';
              this.shortClassTotal = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassTotal':
              this.shortClassTotal === 'headerSortUp' ? (this.shortClassTotal = 'headerSortDown', this.clientholdingdetails.sort(function (a, b) {
                return Number(b.ofOverall) - Number(a.ofOverall);
              })) : (this.shortClassTotal = 'headerSortUp', this.clientholdingdetails.sort(function (a, b) {
                return Number(a.ofOverall) - Number(b.ofOverall);
              }));
              this.shortClassName = '';
              this.shortClassCNG = '';
              this.shortClassPSentiment = '';
              this.shortClassAUM = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassPSentiment':
              this.shortClassPSentiment === 'headerSortUp' ? (this.shortClassPSentiment = 'headerSortDown', this.clientholdingdetails.sort(function (a, b) {
                return Number(b.posSentScore) - Number(a.posSentScore);
              })) : (this.shortClassPSentiment = 'headerSortUp', this.clientholdingdetails.sort(function (a, b) {
                return Number(a.posSentScore) - Number(b.posSentScore);
              }));
              this.shortClassName = '';
              this.shortClassCNG = '';
              this.shortClassAUM = '';
              this.shortClassTotal = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClassNSentiment':
              this.shortClassNSentiment === 'headerSortUp' ? (this.shortClassNSentiment = 'headerSortDown', this.clientholdingdetails.sort(function (a, b) {
                return Number(b.negSentScore) - Number(a.negSentScore);
              })) : (this.shortClassNSentiment = 'headerSortUp', this.clientholdingdetails.sort(function (a, b) {
                return Number(a.negSentScore) - Number(b.negSentScore);
              }));
              this.shortClassName = '';
              this.shortClassCNG = '';
              this.shortClassAUM = '';
              this.shortClassTotal = '';
              this.shortClassPSentiment = '';
              break;

            case 'shortClassName':
              this.shortClassName === 'headerSortUp' ? (this.shortClassName = 'headerSortDown', this.clientholdingdetails.sort(function (a, b) {
                return b.name.localeCompare(a.name);
              })) : (this.shortClassName = 'headerSortUp', this.clientholdingdetails.sort(function (a, b) {
                return a.name.localeCompare(b.name);
              }));
              this.shortClassCNG = '';
              this.shortClassPSentiment = '';
              this.shortClassAUM = '';
              this.shortClassTotal = '';
              this.shortClassNSentiment = '';
              break;

            case 'shortClientName':
              this.shortClientName === 'headerSortUp' ? (this.shortClientName = 'headerSortDown', this.clientDataList.sort(function (a, b) {
                return b.name.localeCompare(a.name);
              })) : (this.shortClientName = 'headerSortUp', this.clientDataList.sort(function (a, b) {
                return a.name.localeCompare(b.name);
              }));
              break;

            case 'shortClientPct':
              this.shortClientPct === 'headerSortUp' ? (this.shortClientPct = 'headerSortDown', this.clientDataList.sort(function (a, b) {
                return Number(b.pct_change) - Number(a.pct_change);
              })) : (this.shortClientPct = 'headerSortUp', this.clientDataList.sort(function (a, b) {
                return Number(a.pct_change) - Number(b.pct_change);
              }));
              break;

            default:
              break;
          }
        }
      }, {
        key: "expandDetails",
        value: function expandDetails(type) {
          if (type === 'expand') {
            this.expandAll = true;
          } else {
            this.expandAll = false;
            var dataElement = this.elRef.nativeElement.querySelectorAll(".panel-collapse");

            for (var i = 0; i < dataElement.length; i++) {
              dataElement[i].classList.remove('show');
            }
          }
        }
      }, {
        key: "open",
        value: function open(content, tableRow, selectedItem) {
          this.insightdetails;
          this.clientDataList = [];
          this.modalRow = selectedItem;
          this.clientDetails = tableRow;
          this.clientDataList = tableRow.client_list.sort(function (a, b) {
            return Number(b.pct_change) - Number(a.pct_change);
          });
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'md',
            centered: true
          });
        }
      }, {
        key: "isNumber",
        value: function isNumber(n) {
          return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
        }
      }]);

      return ClientholdingComponent;
    }();

    ClientholdingComponent.ɵfac = function ClientholdingComponent_Factory(t) {
      return new (t || ClientholdingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
    };

    ClientholdingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientholdingComponent,
      selectors: [["app-clientholding"]],
      decls: 73,
      vars: 30,
      consts: [[1, "container"], [1, "row", 2, "width", "101.2%"], [1, "col-6"], [1, "card", "clientbody", 2, "width", "556px", "height", "354px"], [1, "card-header", "holdings"], [1, "card-link"], [1, "font-18"], [1, "card-link", 2, "float", "right"], ["role", "tablist", 1, "nav"], [1, "nav-item"], ["data-toggle", "tab", "href", "#home", "id", "ghi1", "onclick", "myCunction(this, 'blue')", 1, "nav-link", "sfont", "ghi"], ["data-toggle", "tab", "href", "#menu1", "id", "ghi2", "id", "chart", "onclick", "myFunction(this, 'blue')", 1, "nav-link", "sfont", "ghi"], [1, "card-body", "scrollable", "scrollbar-light-blue"], [1, "tab-content"], ["id", "home", 1, "container", "tab-pane", "active"], [1, "table"], [1, "heading", "mt-5", 2, "position", "sticky", "top", "0", "background-color", "white"], [2, "cursor", "pointer", 3, "ngStyle", "ngClass", "click"], [1, "text-right", 2, "cursor", "pointer", 3, "ngStyle", "ngClass", "click"], ["colspan", "2", 1, "text-right", 2, "cursor", "pointer", 3, "ngStyle", "ngClass", "click"], [1, "tooltip"], [1, "fa", "fa-info-circle"], [1, "tooltiptext"], [2, "float", "left", "padding-left", "35px"], [2, "float", "left", "padding-left", "25px"], ["class", "sfont", 3, "click", 4, "ngFor", "ngForOf"], ["id", "menu1", 1, "container", "tab-pane", "fade"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [2, "width", "100%", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "updateChange"], [1, "card", "insightbody", 2, "height", "354px"], [1, "card-header"], [2, "font-size", "1.33vw"], [1, "hyper-link-ec"], [2, "font-size", "16px", "text-decoration", "underline", "cursor", "pointer", "color", "#007bff", "margin-left", "-10%", "margin-right", "5%", 3, "click"], [2, "font-size", "16px", "text-decoration", "underline", "cursor", "pointer", "color", "#007bff", 3, "click"], ["class", "expandheight", "style", "margin: 2px 0px -15px 14px;", 4, "ngFor", "ngForOf"], ["content", ""], [1, "sfont", 3, "click"], [1, "text-left"], [1, "text-right", 3, "ngStyle"], [1, "text-right"], [1, "expandheight", 2, "margin", "2px 0px -15px 14px"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title", "pt-1", "pb-1"], [1, "col-1", "pl-4"], ["aria-hidden", "true", 1, "fa", "fa-circle", "pr-1", "pl-1"], [1, "col-10", "pl-1"], ["data-toggle", "collapse", "data-parent", "#accordion", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "pb-0", "pt-0", 3, "href", "ngClass"], [1, "mb-0", 2, "color", "black", "font-size", "14px"], ["role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in", 3, "id", "ngClass"], [1, "panel-body", "mt-3"], ["style", "list-style-type:none;", 4, "ngFor", "ngForOf"], [2, "list-style-type", "none"], [1, "btn", "insideaccord", 3, "ngStyle", "click"], [1, "fa", "fa-external-link"], [1, "font-14", "pl-3", 2, "color", "black", "cursor", "pointer"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "font-14", 3, "click"], ["type", "button", "class", "btn btn-danger font-14", 3, "click", 4, "ngIf"], [1, "row", "col-md-12", 2, "height", "400px", "overflow-y", "scroll"], ["style", "cursor: pointer", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer"], [2, "border-top", "solid 1px lightgray", "font-weight", "500", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "font-14", 3, "click"]],
      template: function ClientholdingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CLIENT HOLDINGS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_th_click_24_listener() {
            return ctx.sortNumber("shortClassName");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CLIENT NAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_th_click_26_listener() {
            return ctx.sortNumber("shortClassCNG");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "% CHG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_th_click_28_listener() {
            return ctx.sortNumber("shortClassPSentiment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SENTIMENT (% AUM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Displays portion of portfolio that has positive sentiment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+ve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "-ve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_th_click_42_listener() {
            return ctx.sortNumber("shortClassNSentiment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ESG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_th_click_44_listener() {
            return ctx.sortNumber("shortClassAUM");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "AUM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_th_click_46_listener() {
            return ctx.sortNumber("shortClassTotal");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "% AUM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ClientholdingComponent_tr_49_Template, 15, 13, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "highcharts-chart", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function ClientholdingComponent_Template_highcharts_chart_updateChange_54_listener($event) {
            return ctx.updateFlag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "INSIGHTS & RECOMMENDED ACTIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_span_click_61_listener() {
            return ctx.expandDetails("expand");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Expand all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientholdingComponent_Template_span_click_64_listener() {
            return ctx.expandDetails("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Collapse all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ClientholdingComponent_div_68_Template, 16, 9, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ClientholdingComponent_ng_template_71_Template, 11, 4, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.shortClassName === "" ? "#999999" : "black"))("ngClass", ctx.shortClassName === "headerSortUp" ? "headerSortUp" : ctx.shortClassName === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.shortClassCNG === "" ? "#999999" : "black"))("ngClass", ctx.shortClassCNG === "headerSortUp" ? "headerSortUp" : ctx.shortClassCNG === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.shortClassPSentiment === "" ? "#999999" : "black"))("ngClass", ctx.shortClassPSentiment === "headerSortUp" ? "headerSortUp" : ctx.shortClassPSentiment === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.shortClassNSentiment === "" ? "#999999" : "black"))("ngClass", ctx.shortClassNSentiment === "headerSortUp" ? "headerSortUp" : ctx.shortClassNSentiment === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.shortClassAUM === "" ? "#999999" : "black"))("ngClass", ctx.shortClassAUM === "headerSortUp" ? "headerSortUp" : ctx.shortClassAUM === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.shortClassTotal === "" ? "#999999" : "black"))("ngClass", ctx.shortClassTotal === "headerSortUp" ? "headerSortUp" : ctx.shortClassTotal === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientholdingdetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.piechart)("update", ctx.updateFlag)("oneToOne", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.insightdetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".card-header[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(248, 244, 244, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-fluid[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-lg[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-md[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-sm[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-xl[_ngcontent-wws-c20][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 0px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-top: none;\r\n}\r\n\r\n.tablname[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin: 28px;\r\n}\r\n\r\n.sfont[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n}\r\n\r\n\r\n\r\n.insideaccord[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.fa-circle[_ngcontent-%COMP%]:before {\r\n  font-size: 8px;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n  color: #3466f6;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: bottom;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  width: calc(100% - 7px);\r\n  padding: 0px;\r\n  border-radius: 8px;\r\n  line-height: 1.8;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:after {\r\n  background: none repeat scroll 0 0 transparent;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  left: 50%;\r\n  \r\n  background: #3466f6;\r\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n  width: 0;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 7px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]:hover {\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%] {\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  max-height: 300px;\r\n  height: 300px;\r\n  line-height: 1.8;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-size: 15px;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.decimal-rightalign-chg[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n}\r\n\r\n.decimal-rightalign-total[_ngcontent-%COMP%] {\r\n  text-align: right !important;\r\n}\r\n\r\n.decimal-rightalign-sentiment[_ngcontent-%COMP%] {\r\n  text-align: right !important;\r\n  padding-right: 25px;\r\n}\r\n\r\n\r\n\r\n.panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-family: Fontawesome;\r\n  content: \"\\f078\";\r\n  float: right;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  margin-right: -5%;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:after {\r\n  font-family: Fontawesome;\r\n  content: \"\\f077\";\r\n  color: grey !important;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%]:after, .headerSortUp[_ngcontent-%COMP%]:after {\r\n  content: \" \";\r\n  position: relative;\r\n  left: 6px;\r\n  border: 5px solid transparent;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%]:after {\r\n  top: 4px;\r\n  left: 6px;\r\n  border-top-color: black;\r\n}\r\n\r\n.headerClientSortDown[_ngcontent-%COMP%]:after {\r\n  content: \" \";\r\n  position: relative;\r\n  left: 6px;\r\n  border: 5px solid transparent;\r\n}\r\n\r\n.headerClientSortDown[_ngcontent-%COMP%]:after {\r\n  top: 13px;\r\n  left: 6px;\r\n  border-top-color: black;\r\n}\r\n\r\n.headerSortUp[_ngcontent-%COMP%]:after {\r\n  bottom: 12px;\r\n  \r\n  border-bottom-color: black;\r\n}\r\n\r\n.headerClientSortDown[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%], .headerSortUp[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.hyper-link-ec[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: right;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%], .font-14[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  \r\n  opacity: 1;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  width: 150px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  border-radius: 6px;\r\n  padding: 2px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 150%;\r\n  left: 50%;\r\n  margin-left: -60px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  font-size: 14px;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: transparent transparent black transparent;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active {\r\n  outline: none !important;\r\n  box-shadow: none;\r\n}\r\n\r\n.holdings[_ngcontent-%COMP%]{\r\n  height: 44px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50aG9sZGluZy9jbGllbnRob2xkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyw2Q0FBNkM7QUFDL0M7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBOzs7R0FHRzs7QUFFSDs7Ozs7O0dBTUc7O0FBRUg7Ozs7OztFQU1FLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztHQUVHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBSUEsc0JBQXNCOztBQUV0QjtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRob2xkaW5nL2NsaWVudGhvbGRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJkLWhlYWRlcnMge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxufSAqL1xyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ0LCAyNDQsIDAuMDMpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxufVxyXG5cclxuLnRhYmxlIHRkLFxyXG4udGFibGUgdGgge1xyXG4gIC8qIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4vKiAuY2FyZC1ib2R5W19uZ2NvbnRlbnQtaHh3LWMyMF0ge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn0gKi9cclxuXHJcbi8qIC5jb250YWluZXIsIC5jb250YWluZXItZmx1aWQsIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIteGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufSAqL1xyXG5cclxuLmNvbnRhaW5lcltfbmdjb250ZW50LXd3cy1jMjBdLFxyXG4uY29udGFpbmVyLWZsdWlkW19uZ2NvbnRlbnQtd3dzLWMyMF0sXHJcbi5jb250YWluZXItbGdbX25nY29udGVudC13d3MtYzIwXSxcclxuLmNvbnRhaW5lci1tZFtfbmdjb250ZW50LXd3cy1jMjBdLFxyXG4uY29udGFpbmVyLXNtW19uZ2NvbnRlbnQtd3dzLWMyMF0sXHJcbi5jb250YWluZXIteGxbX25nY29udGVudC13d3MtYzIwXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLnRhYmxuYW1lIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAyOHB4O1xyXG59XHJcblxyXG4uc2ZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvKiBtYXJnaW4tdG9wOiA4cHg7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWItMCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuLyogLmhlYWQge1xyXG4gIGhlaWdodDogNjVweDtcclxufSAqL1xyXG5cclxuLmluc2lkZWFjY29yZCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mYS1jaXJjbGU6YmVmb3JlIHtcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIGNvbG9yOiAjMzQ2NmY2O1xyXG59XHJcblxyXG4vKiAuZXhwYW5kaGVpZ2h0e1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufSAqL1xyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gN3B4KTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5naGk6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICBiYWNrZ3JvdW5kOiAjMzQ2NmY2O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5naGk6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLypzaWRlIHNjcm9sbCBiYXIgY3NzKi9cclxuXHJcbi5zY3JvbGxiYXItbGlnaHQtYmx1ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLnNjcm9sbGJhci1saWdodC1ibHVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcbi5zY3JvbGxhYmxlOmhvdmVyIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIGE6YWZ0ZXIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uZGVjaW1hbC1yaWdodGFsaWduLWNoZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZGVjaW1hbC1yaWdodGFsaWduLXRvdGFsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWNpbWFsLXJpZ2h0YWxpZ24tc2VudGltZW50IHtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi8qc2lkZSBzY3JvbGwgYmFyIGNzcyBlbmQqL1xyXG5cclxuLnBhbmVsLXRpdGxlIGE6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250YXdlc29tZTtcclxuICBjb250ZW50OiBcIlxcZjA3OFwiO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW4tcmlnaHQ6IC01JTtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmFmdGVyIHtcclxuICBmb250LWZhbWlseTogRm9udGF3ZXNvbWU7XHJcbiAgY29udGVudDogXCJcXGYwNzdcIjtcclxuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyU29ydERvd246YWZ0ZXIsXHJcbi5oZWFkZXJTb3J0VXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA2cHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0RG93bjphZnRlciB7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogNnB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaGVhZGVyQ2xpZW50U29ydERvd246YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA2cHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJDbGllbnRTb3J0RG93bjphZnRlciB7XHJcbiAgdG9wOiAxM3B4O1xyXG4gIGxlZnQ6IDZweDtcclxuICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhlYWRlclNvcnRVcDphZnRlciB7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIC8qIHJpZ2h0OiA1cHg7ICovXHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5oZWFkZXJDbGllbnRTb3J0RG93biB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlclNvcnREb3duLFxyXG4uaGVhZGVyU29ydFVwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaHlwZXItbGluay1lYyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHksXHJcbi5mb250LTE0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvKiBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrOyAqL1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAxNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTYwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBibGFjayB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5idG46Zm9jdXMsXHJcbi5idG46YWN0aXZlIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uaG9sZGluZ3N7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientholdingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-clientholding",
          templateUrl: "./clientholding.component.html",
          styleUrls: ["./clientholding.component.css"]
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dataservice.service.ts":
  /*!****************************************!*\
    !*** ./src/app/dataservice.service.ts ***!
    \****************************************/

  /*! exports provided: DataserviceService */

  /***/
  function srcAppDataserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataserviceService", function () {
      return DataserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DataserviceService =
    /*#__PURE__*/
    function () {
      function DataserviceService(http, router) {
        _classCallCheck(this, DataserviceService);

        this.http = http;
        this.router = router;
        this.booleanValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.castValue = this.booleanValue.asObservable();
        this.finaldata = [];
        this.apiUrlPath = "http://localhost:3000";
        this.apiurl = "{apiUrlPath}/fac/details";
        this.apitopnav = this.apiUrlPath + "/fac/getPreviousDayMarketData"; // public apiusername = this.apiUrlPath+"/fac/details";

        this.apiusername = this.apiUrlPath + "/fac/getUserDetails";
        this.apitumgraph = this.apiUrlPath + "/fac/getTotalAUMGraph";
        this.apiporfolioptvntvstock = this.apiUrlPath + "/fac/getMktValueAndSentimentsbyStock";
        this.apimarketsentibyclient = this.apiUrlPath + "/fac/getMktValueAndSentimentsOfStockByClient"; // public apiportfolioscore = this.apiUrlPath+"/fac/getTotalAUM";

        this.apiportfolioscore = this.apiUrlPath + "/fac/getPortfolioSentScore"; // public apimarketscorecard = this.apiUrlPath+"/fac/getMktSentscore";

        this.apimarketscorecard = this.apiUrlPath + "/fac/getMarketSentScore";
        this.apiclientholding = this.apiUrlPath + "/fac/getClientHoldings";
        this.apiinsight = this.apiUrlPath + "/fac/getInsights";
        this.apiloserportfolio = this.apiUrlPath + "/fac/getTopLosers"; // public apitoplosermarket = this.apiUrlPath+"/fac/getTopLosers";

        this.apitopgainerportfolio = this.apiUrlPath + "/fac/getTopGainers";
        this.apitopgainermarket = this.apiUrlPath + "/fac/getTopGainers";
        this.apinewsdetails = this.apiUrlPath + "/fac/news/getRelatedNews";
        this.stockHoldingsUrl = this.apiUrlPath + "/fac/getStockHoldings";
        this.apimktValueAndSentimentsFaCli = this.apiUrlPath + "/fac/getMktValueAndSentimentsFaCli";
        this.clientRelatedDoc = this.apiUrlPath + '/fac/getClientRelatedDocument';
        this.clientUpcomingMeeting = this.apiUrlPath + '/fac/getClientUpcomingMeetings';
        this.clientHistory = this.apiUrlPath + '/fac/getGenesisData';
        this.clientEvents = this.apiUrlPath + '/fac/getClientUpcomingLifeEvents';
        this.clientIntels = this.apiUrlPath + '/fac/getClientIntel'; // public apirecommendedactionbearish = this.apiUrlPath+"/fac/getPortFolioAction";

        this.apirecommendedactionbullish = this.apiUrlPath + "/fac/getPortFolioAction";
        this.apirecommendedactionbearish = this.apiUrlPath + "/fac/getPortFolioAction";
        this.apiGetPortFolioAction = this.apiUrlPath + "/fac/getPortFolioAction";
      }

      _createClass(DataserviceService, [{
        key: "getData",
        value: function getData(userId) {
          return this.http.post(this.apiurl, {
            faid: userId
          });
        }
      }, {
        key: "getData1",
        value: function getData1(userId) {
          return this.http.post(this.apiurl, {
            faid: userId
          });
        }
      }, {
        key: "getClientholding",
        value: function getClientholding(faid, filterBy, filterOrder) {
          return this.http.post(this.apiclientholding, {
            faid: faid,
            filter: filterBy,
            filter_order: filterOrder
          });
        }
      }, {
        key: "getLoser",
        value: function getLoser(details, toploserfilter) {
          return this.http.post(this.apiloserportfolio, {
            faid: details,
            filter: toploserfilter
          });
        } //  getLosermarket(details) {
        //    return this.http.post(this.apitoplosermarket,{faid:details})
        //   }

      }, {
        key: "getgainerPortfolio",
        value: function getgainerPortfolio(gainerportfoliodetails, topgainerfilter) {
          return this.http.post(this.apitopgainerportfolio, {
            faid: gainerportfoliodetails,
            filter: topgainerfilter
          });
        } // getgainerMarket(gainermarketdetails) {
        //    return this.http.post(this.apitopgainerportfolio,{faid:gainermarketdetails})
        //   }

      }, {
        key: "inSight",
        value: function inSight(insightdetails) {
          return this.http.post(this.apiinsight, {
            faid: insightdetails
          });
        }
      }, {
        key: "NewsData",
        value: function NewsData(newsdetails, ticker, filterBy) {
          return this.http.post(this.apinewsdetails, {
            faid: newsdetails,
            securityid: ticker,
            filter: filterBy
          });
        }
      }, {
        key: "getuserName",
        value: function getuserName(userdetails) {
          return this.http.post(this.apiusername, {
            faid: userdetails
          });
        }
      }, {
        key: "getportfolioScore",
        value: function getportfolioScore(portfoliodetails) {
          return this.http.post(this.apiportfolioscore, {
            faid: portfoliodetails
          });
        }
      }, {
        key: "getmarketScorecard",
        value: function getmarketScorecard(marketscorecarddetails) {
          return this.http.post(this.apimarketscorecard, {
            faid: marketscorecarddetails
          });
        }
      }, {
        key: "getnavbarTop",
        value: function getnavbarTop(topnavbardetails) {
          return this.http.post(this.apitopnav, {
            faid: topnavbardetails
          });
        }
      }, {
        key: "recommendedactionBearish",
        value: function recommendedactionBearish(bearishdetails) {
          return this.http.post(this.apirecommendedactionbearish, {
            faid: bearishdetails
          });
        }
      }, {
        key: "recommendedactionBullish",
        value: function recommendedactionBullish(bullishdetails) {
          return this.http.post(this.apirecommendedactionbullish, {
            faid: bullishdetails
          });
        }
      }, {
        key: "tumGraph",
        value: function tumGraph(tumgraphdetails, tumgrapgfilter) {
          return this.http.post(this.apitumgraph, {
            faid: tumgraphdetails,
            filter: tumgrapgfilter
          });
        }
      }, {
        key: "getPositveNegative",
        value: function getPositveNegative(positivenegativedetails) {
          return this.http.post(this.apiporfolioptvntvstock, {
            faid: positivenegativedetails
          });
        }
      }, {
        key: "navigateToClientPortfolio",
        value: function navigateToClientPortfolio(clientObject) {
          this.router.navigate(["/portfolios"], {
            state: clientObject
          });
        }
      }, {
        key: "getportfolioScoreForClient",
        value: function getportfolioScoreForClient(faid, clientID) {
          return this.http.post(this.apiportfolioscore, {
            faid: faid,
            clientid: clientID
          });
        }
      }, {
        key: "getMarketSentimentByClient",
        value: function getMarketSentimentByClient(sentimentbyclientdetails, sentsecurityid) {
          return this.http.post(this.apimarketsentibyclient, {
            faid: sentimentbyclientdetails,
            securityid: sentsecurityid
          });
        }
      }, {
        key: "getPortFolioAction",
        value: function getPortFolioAction(filterBy, faid, filter, orderBy) {
          return this.http.post(this.apiGetPortFolioAction, {
            filter_by: filterBy,
            faid: faid,
            filter: filter,
            filter_order: orderBy
          });
        }
      }, {
        key: "getStockHoldingsByClient",
        value: function getStockHoldingsByClient(faid, clientID, filterBy, filterDirection) {
          return this.http.post(this.stockHoldingsUrl, {
            faid: faid,
            clientid: clientID,
            filter_order: filterDirection,
            filter: filterBy
          });
        }
      }, {
        key: "getInsightsByClient",
        value: function getInsightsByClient(faid, clientID) {
          return this.http.post(this.apiinsight, {
            faid: faid,
            clientid: clientID
          });
        }
      }, {
        key: "getAUMGraphDetails",
        value: function getAUMGraphDetails(faid, filter, clientID) {
          return this.http.post(this.apitumgraph, {
            faid: faid,
            filter: filter,
            clientid: clientID
          });
        }
      }, {
        key: "getMktValueAndSentimentsFaCli",
        value: function getMktValueAndSentimentsFaCli(faid, clientID) {
          return this.http.post(this.apimktValueAndSentimentsFaCli, {
            faid: faid,
            clientid: clientID
          });
        }
      }, {
        key: "getClientRelatedDoc",
        value: function getClientRelatedDoc(faid, clientId) {
          return this.http.post(this.clientRelatedDoc, {
            faid: faid,
            clientid: clientId
          });
        }
      }, {
        key: "getClientMeeting",
        value: function getClientMeeting(faid, clientId) {
          return this.http.post(this.clientUpcomingMeeting, {
            faid: faid,
            clientid: clientId
          });
        }
      }, {
        key: "getClientHistory",
        value: function getClientHistory(faid, clientID) {
          return this.http.post(this.clientHistory, {
            faid: faid,
            clientid: clientID
          });
        }
      }, {
        key: "getClientEvents",
        value: function getClientEvents(faid, clientId) {
          return this.http.post(this.clientEvents, {
            faid: faid,
            clientid: clientId
          });
        }
      }, {
        key: "getClientIntel",
        value: function getClientIntel(faid, clientId) {
          return this.http.post(this.clientIntels, {
            faid: faid,
            clientid: clientId
          });
        }
      }, {
        key: "sendValue",
        value: function sendValue(newValue) {
          this.booleanValue.next(newValue);
        }
      }]);

      return DataserviceService;
    }();

    DataserviceService.ɵfac = function DataserviceService_Factory(t) {
      return new (t || DataserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    DataserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataserviceService,
      factory: DataserviceService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/doughnut-chart/doughnut-chart.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/doughnut-chart/doughnut-chart.component.ts ***!
    \************************************************************/

  /*! exports provided: DoughnutChartComponent */

  /***/
  function srcAppDoughnutChartDoughnutChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function () {
      return DoughnutChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var DoughnutChartComponent =
    /*#__PURE__*/
    function () {
      function DoughnutChartComponent() {
        _classCallCheck(this, DoughnutChartComponent);

        this.chartType = "doughnut";
        this.chartLabels = [];
        this.chartData = [];
        this.donutColors = [{
          backgroundColor: ["rgb(1,31,75)", "rgb(3,57,108)", "rgb(0,91,150)", "rgb(100,151,177)", "rgb(179,205,224)"]
        }];
        this.chartOptions = {
          cutoutPercentage: 85,
          legend: {
            position: "bottom"
          }
        };
      }

      _createClass(DoughnutChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.data) {
            this.chartLabels = this.data.map(function (item) {
              return item["Ticker"];
            });
            this.chartData = this.data.map(function (item) {
              return item["sectorStockPct"];
            });
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.data) {
            this.chartLabels = this.data.map(function (item) {
              return item["Ticker"];
            });
            this.chartData = this.data.map(function (item) {
              return item["sectorStockPct"];
            });
          }
        }
      }]);

      return DoughnutChartComponent;
    }();

    DoughnutChartComponent.ɵfac = function DoughnutChartComponent_Factory(t) {
      return new (t || DoughnutChartComponent)();
    };

    DoughnutChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoughnutChartComponent,
      selectors: [["app-doughnut-chart"]],
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 5,
      consts: [["id", "chart-container"], ["baseChart", "", 3, "chartType", "data", "labels", "options", "colors"]],
      template: function DoughnutChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chartType)("data", ctx.chartData)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.donutColors);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvdWdobnV0LWNoYXJ0L2RvdWdobnV0LWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoughnutChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-doughnut-chart",
          templateUrl: "./doughnut-chart.component.html",
          styleUrls: ["./doughnut-chart.component.css"]
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/config/app.config */
    "./src/config/app.config.ts");
    /* harmony import */


    var src_config_client_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/config/client.config */
    "./src/config/client.config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FooterComponent_footer_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Who we are");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Careers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Media center");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Partners");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Policies");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Press releases");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sitemap");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MARKET INSIGHT AND COMMUNITIES");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Developer Community");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Insights");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "MiFID II");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Perspectives");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Editorial Forums");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r241.footerIconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var headerObject = src_config_client_config__WEBPACK_IMPORTED_MODULE_2__["ClientConfig"].find(function (item) {
            return item.client === src_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].client;
          });
          this.footerIconPath = headerObject.footerIconPath;
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 1,
      vars: 1,
      consts: [["class", "page-footer font-small blue pt-4", 4, "ngIf"], [1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-7", "mt-md-0", "mt-3", "left-6"], ["href", "#", 1, "navbar-brand", 2, "color", "black"], ["alt", "Brand logo", "width", "150", "height", "fit-content", 1, "rounded", 3, "src"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-2", "mb-md-0", "mb-3", "font-14"], [1, "text-uppercase"], [1, "list-unstyled"], [1, "col-md-3", "mb-md-0", "mb-3", "font-14"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 37, 1, "footer", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/login");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".font-14[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n.font-14[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n.left-6[_ngcontent-%COMP%]{\r\n  left: 6%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtMTQgaDV7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmZvbnQtMTQgdWwgbGl7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5sZWZ0LTZ7XHJcbiAgbGVmdDogNiU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graph-test/graph-test.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/graph-test/graph-test.component.ts ***!
    \****************************************************/

  /*! exports provided: GraphTestComponent */

  /***/
  function srcAppGraphTestGraphTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphTestComponent", function () {
      return GraphTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../doughnut-chart/doughnut-chart.component */
    "./src/app/doughnut-chart/doughnut-chart.component.ts");

    function GraphTestComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-doughnut-chart", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PORTFOLIO BY SECTOR: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r187.sectorName), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r187.doughnutDataBySector);
      }
    }

    var GraphTestComponent =
    /*#__PURE__*/
    function () {
      function GraphTestComponent(dataService, http) {
        _classCallCheck(this, GraphTestComponent);

        this.dataService = dataService;
        this.http = http;
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                color: "white"
              },
              // barPercentage: 0.5,
              categoryPercentage: 0.4
            }],
            yAxes: [{
              gridLines: {
                color: "white"
              }
            }]
          }
        };
        this.barChartType = "bar";
        this.barChartLegend = true;
        this.barChartColors = [{
          backgroundColor: "royalblue"
        }, {
          backgroundColor: "darkgray"
        }];
        this.barChartData = [{
          data: [],
          label: "Current weightage"
        }, {
          data: [],
          label: "Model recommended weightage"
        }];
      }

      _createClass(GraphTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.dataService.getMktValueAndSentimentsFaCli(1, this.clientID).subscribe(function (response) {
            if (response && response["data"] && response["data"].length) {
              _this11.mktValueAndSentimentsFaCli = response["data"];
              _this11.barChartLabels = response["data"].map(function (item) {
                return item["sectorName"];
              });
              response["data"].forEach(function (item) {
                _this11.barChartData[0].data.push(parseFloat(item["crntweight"].toFixed(2)));

                _this11.barChartData[1].data.push(parseFloat(item["recmdweight"].toFixed(2)));
              });
            }
          });
        }
      }, {
        key: "chartClicked",
        value: function chartClicked(event) {
          var _this12 = this;

          if (event && event.active && event.active[0] && event.active[0]._view && event.active[0]._view.label) {
            this.sectorName = event.active[0]._view.label;
            var sectorId = this.getSectorIdByName(this.sectorName);
            this.http.post(this.dataService.apiUrlPath + "/fac/getMktValueAndSentimentsFaCliSec", {
              faid: 1,
              clientid: this.clientID,
              sectorid: sectorId
            }).subscribe(function (response) {
              if (response && response['data']) {
                _this12.doughnutDataBySector = response['data'];
              }
            });
          }
        }
      }, {
        key: "getSectorIdByName",
        value: function getSectorIdByName(name) {
          var obj = this.mktValueAndSentimentsFaCli.find(function (item) {
            return item["sectorName"] === name;
          });
          return obj["sectorID"];
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(event) {}
      }]);

      return GraphTestComponent;
    }();

    GraphTestComponent.ɵfac = function GraphTestComponent_Factory(t) {
      return new (t || GraphTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    GraphTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraphTestComponent,
      selectors: [["app-graph-test"]],
      inputs: {
        clientID: "clientID"
      },
      decls: 8,
      vars: 7,
      consts: [[1, "row"], [1, "col-6"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "colors", "chartType", "chartHover", "chartClick"], [4, "ngIf"], [3, "data"]],
      template: function GraphTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PORTFOLIO WEIGHTAGE BY SECTOR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "canvas", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function GraphTestComponent_Template_canvas_chartHover_5_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function GraphTestComponent_Template_canvas_chartClick_5_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GraphTestComponent_ng_container_7_Template, 6, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("colors", ctx.barChartColors)("chartType", ctx.barChartType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doughnutDataBySector);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_5__["DoughnutChartComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoLXRlc3QvZ3JhcGgtdGVzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-graph-test",
          templateUrl: "./graph-test.component.html",
          styleUrls: ["./graph-test.component.css"]
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, {
        clientID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/graphs/graphs.component.ts":
  /*!********************************************!*\
    !*** ./src/app/graphs/graphs.component.ts ***!
    \********************************************/

  /*! exports provided: GraphsComponent */

  /***/
  function srcAppGraphsGraphsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphsComponent", function () {
      return GraphsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tooltip.directive */
    "./src/app/tooltip.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function GraphsComponent_div_12_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraphsComponent_div_12_ng_container_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var items_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return items_r19["aggregate_score"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, items_r19["aggregate_score_type"] === "Negative" ? "#b50000" : items_r19["aggregate_score_type"] === "Positive" ? "#039d00" : "black"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r19["aggregate_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", items_r19["aggregate_score_type"], " Outlook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", items_r19["aggregate_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Aggregate score: ", items_r19["aggregate_score"], "");
      }
    }

    function GraphsComponent_div_12_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", items_r19["positiveSentScore"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" for ", items_r19["positiveAumPct"], "", items_r19["pct_type"], " of AUM ");
      }
    }

    function GraphsComponent_div_12_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r19["negativeSentScore"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" for ", items_r19["negativeAumPct"], "", items_r19["pct_type"], " of AUM ");
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "bottom": a0,
        "text-align": a1
      };
    };

    function GraphsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphsComponent_div_12_ng_container_1_Template, 17, 7, "ng-container", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraphsComponent_div_12_ng_container_2_Template, 4, 3, "ng-container", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GraphsComponent_div_12_ng_container_3_Template, 4, 3, "ng-container", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, items_r19["positiveSentScore"] ? "0px" : items_r19["negativeSentScore"] ? "5px" : "-7px", items_r19["positiveSentScore"] || items_r19["negativeSentScore"] ? "center" : ""))("ngClass", items_r19["aggregate_score"] ? "pr-0" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r19["aggregate_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r19["positiveSentScore"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r19["negativeSentScore"]);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled-field": a0
      };
    };

    var _c3 = function _c3(a0, a1) {
      return {
        "background": a0,
        "border": a1
      };
    };

    function GraphsComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, !items_r29["esg_score"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r29["esg_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c3, items_r29["esg_score"] > 0 ? "lightgray" : "white", items_r29["esg_score"] > 0 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c3, items_r29["esg_score"] > 10 ? "#fbe7c1" : "white", items_r29["esg_score"] > 10 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c3, items_r29["esg_score"] > 20 ? "#f9d083" : "white", items_r29["esg_score"] > 20 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c3, items_r29["esg_score"] > 30 ? "#fbc35b" : "white", items_r29["esg_score"] > 30 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c3, items_r29["esg_score"] > 40 ? "orange" : "white", items_r29["esg_score"] > 40 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", items_r29["esg_label"], " ESG Risk");
      }
    }

    function GraphsComponent_div_35_div_1_b_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.marketscorecardDetail.marketSentScore);
      }
    }

    function GraphsComponent_div_35_div_1_b_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.marketscorecardDetail.marketSentScore);
      }
    }

    function GraphsComponent_div_35_div_1_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 63);
      }
    }

    function GraphsComponent_div_35_div_1_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 64);
      }
    }

    function GraphsComponent_div_35_div_1_b_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.marketscorecardDetail.marketSentScore);
      }
    }

    function GraphsComponent_div_35_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphsComponent_div_35_div_1_b_1_Template, 2, 1, "b", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraphsComponent_div_35_div_1_b_2_Template, 2, 1, "b", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GraphsComponent_div_35_div_1_i_3_Template, 1, 0, "i", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GraphsComponent_div_35_div_1_i_4_Template, 1, 0, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GraphsComponent_div_35_div_1_b_6_Template, 2, 1, "b", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.checkNumberValue(ctx_r30.marketscorecardDetail.marketSentScore) === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.checkNumberValue(ctx_r30.marketscorecardDetail.marketSentScore) === false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.marketscorecardDetail.symbol === "up-arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.marketscorecardDetail.symbol === "down-arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.checkNumberValue(ctx_r30.marketscorecardDetail.marketSentScore) === "neutral");
      }
    }

    function GraphsComponent_div_35_ng_container_3_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 68);
      }
    }

    function GraphsComponent_div_35_ng_container_3_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 69);
      }
    }

    function GraphsComponent_div_35_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphsComponent_div_35_ng_container_3_i_1_Template, 1, 0, "i", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraphsComponent_div_35_ng_container_3_i_2_Template, 1, 0, "i", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.marketscorecardDetail.symbol === "up-arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.marketscorecardDetail.symbol === "down-arrow");
      }
    }

    function GraphsComponent_div_35_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r32.marketscorecardDetail.changeSentScore, " from yesterday");
      }
    }

    function GraphsComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphsComponent_div_35_div_1_Template, 7, 5, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GraphsComponent_div_35_ng_container_3_Template, 3, 2, "ng-container", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GraphsComponent_div_35_span_5_Template, 2, 1, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.marketscorecardDetail !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngId", ctx_r13.marketscorecardDetail !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.marketscorecardDetail !== undefined);
      }
    }

    function GraphsComponent_ng_template_36_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r40.marketoccuranceerror, " ");
      }
    }

    function GraphsComponent_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphsComponent_ng_template_36_div_1_Template, 2, 1, "div", 71);
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.marketoccuranceerror);
      }
    }

    function GraphsComponent_div_48_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r41.tumgraphbasicdaily, " ", ctx_r41.tumgraphdailypercentage, "");
      }
    }

    function GraphsComponent_div_48_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r42.tumgraphbasicdaily, " ", ctx_r42.tumgraphdailypercentage, "");
      }
    }

    function GraphsComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DAILY P&L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GraphsComponent_div_48_ng_container_3_Template, 5, 2, "ng-container", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GraphsComponent_div_48_ng_container_4_Template, 5, 2, "ng-container", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.tumgraphdailyarrow);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.tumgraphdailyarrow);
      }
    }

    function GraphsComponent_div_49_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r43.tumgraphbasicweekly, " ", ctx_r43.tumgraphweeklypercentage, "");
      }
    }

    function GraphsComponent_div_49_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \xA0", ctx_r44.tumgraphbasicweekly, " ", ctx_r44.tumgraphweeklypercentage, "");
      }
    }

    function GraphsComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GraphsComponent_div_49_ng_container_3_Template, 5, 2, "ng-container", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GraphsComponent_div_49_ng_container_4_Template, 5, 2, "ng-container", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.tumgraphbasicweeklyLabel, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.tumgraphweeklyarrow);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.tumgraphweeklyarrow);
      }
    }

    function GraphsComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphsComponent_div_52_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var items_r45 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.graphTotalAsset(items_r45.val);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r45 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r18.graphMeterScaleActive(items_r45.val) ? "graphMeterScale" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r45.disp, " ");
      }
    }

    var GraphsComponent =
    /*#__PURE__*/
    function () {
      function GraphsComponent(myservice) {
        _classCallCheck(this, GraphsComponent);

        this.myservice = myservice;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.data2 = [];
        this.series1 = [];
        this.series2 = [];
        this.series3 = [];
        this.series4 = [];
        this.series5 = [];
        this.series6 = [];
        this.comment = "<p><em><strong>abc</strong></em></p>";
        this.chartOptions = {
          chart: {
            height: 6.5 / 25 * 100 + "%",
            events: {
              render: function render() {
                var series = this.series.filter(function (i) {
                  return i.name !== 'Total AUM';
                });
                var totalAUMIndex = this.series.findIndex(function (i) {
                  return i.name === 'Total AUM';
                });
                var count = 0;
                series.forEach(function (serie) {
                  if (serie.visible) {
                    count++;
                  }
                });

                if (count === 0) {
                  this.series[totalAUMIndex]['color'] = 'darkgray';
                  this.series[totalAUMIndex].render();
                } else {
                  this.series[totalAUMIndex]['color'] = 'transparent';
                  this.series[totalAUMIndex].render();
                } // document.querySelector("#label").innerHTML = `Total visible series: ${count}`

              }
            }
          },
          xAxis: {
            type: 'datetime',
            labels: {
              format: '{value:%d %b}'
            },
            minPadding: 0,
            maxPadding: 0,
            showLastLabel: true,
            tickmarkPlacement: 'on',
            endOnTick: false
          },
          yAxis: [{
            gridLineWidth: 0,
            lineWidth: 1,
            title: {
              text: "AUM (USD)"
            }
          }, {
            visible: false
          }, {
            visible: false
          }, {
            lineWidth: 0,
            gridLineWidth: 0,
            opposite: true,
            offset: -8,
            title: {
              text: '+ve Sentiment',
              style: {
                color: 'limegreen'
              }
            }
          }, {
            lineWidth: 1,
            opposite: true,
            gridLineWidth: 0,
            title: {
              text: '-ve Sentiment',
              style: {
                color: 'red'
              }
            }
          }, {
            lineWidth: 1,
            opposite: true,
            gridLineWidth: 0,
            title: {
              text: 'ESG',
              style: {
                color: 'purple'
              }
            }
          }],
          legend: {
            layout: 'horizontal',
            align: "center",
            verticalAlign: 'top'
          },
          tooltip: {
            backgroundColor: "black",
            useHTML: true,
            headerFormat: '<b>{point.key}</b><br>',
            shared: true,
            style: {
              color: "white"
            }
          },
          title: {
            text: " "
          },
          plotOptions: {
            area: {
              stacking: "normal"
            }
          },
          series: [{
            name: "-ve AUM",
            data: [],
            type: "area",
            tooltip: {
              pointFormat: ''
            },
            marker: {
              enabled: false
            }
          }, {
            data: [],
            name: '+ve AUM',
            type: "area",
            tooltip: {
              pointFormat: ''
            },
            marker: {
              enabled: false
            },
            color: 'lightgray'
          }, {
            type: "area",
            name: "Total AUM",
            showInLegend: false,
            color: "transparent",
            tooltip: {
              pointFormat: '{point.series.name}: ${point.y}<br>'
            },
            stacking: null,
            lineColor: 'transparent',
            marker: {
              lineColor: 'transparent',
              fillColor: 'tranparent',
              enabled: false
            },
            states: {
              hover: {
                enabled: false
              }
            }
          }, {
            type: "line",
            name: "+ve Sentiment",
            yAxis: 3,
            color: 'green',
            dashStyle: "Solid",
            marker: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.series.name}: {point.y} ({point.percent} % of AUM)<br>'
            }
          }, {
            type: "line",
            name: "-ve Sentiment",
            yAxis: 4,
            color: 'red',
            dashStyle: "ShortDash",
            marker: {
              enabled: false
            },
            tooltip: {
              pointFormat: '{point.series.name}: {point.y} ({point.percent} % of AUM)'
            }
          }, {
            type: "line",
            name: "ESG",
            yAxis: 5,
            tooltip: {
              pointFormat: '<br>{point.series.name}: {point.y}'
            },
            marker: {
              enabled: false
            },
            color: 'purple'
          }],
          credits: {
            enabled: false
          }
        };
      }

      _createClass(GraphsComponent, [{
        key: "sortBy",
        value: function sortBy(field) {
          return function (a, b) {
            return Number(a[field] > b[field]) - Number(a[field] < b[field]);
          };
        }
      }, {
        key: "graphTotalAsset",
        value: function graphTotalAsset(filter) {
          var _this13 = this;

          this.selectedFilter = filter;
          this.myservice.tumGraph(1, filter).subscribe(function (data) {
            _this13.series1 = [];
            _this13.series2 = [];
            _this13.series3 = [];
            _this13.series4 = [];
            _this13.series5 = [];
            _this13.series6 = [];
            _this13.tumgraphdata = data["data"];
            _this13.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];
            _this13.tumgraphbasicweekly = data["aum"]["weekly"]["val"];
            _this13.tumgraphweeklyarrow = data["aum"]["weekly"]["changeType"] == 1 ? true : false;
            _this13.tumgraphdailypercentage = data["aum"]["weekly"]["symbol"];
            _this13.tumgraphweeklypercentage = data["aum"]["weekly"]["symbol"];
            var myAbc1 = [];
            var finaldata = [];

            _this13.tumgraphdata.map(function (value) {
              var abc = {};
              abc["x"] = value['datetime'];
              abc["y"] = Number.parseFloat(value['negative_mkt_val'].replace(/,/g, ""));
              abc['total'] = value.total_mkt_val.toLocaleString('en-US');

              _this13.series1.push(abc);

              _this13.series2.push({
                x: value['datetime'],
                y: Number.parseFloat(value['positive_mkt_val'].replace(/,/g, ""))
              });

              _this13.series3.push({
                x: value['datetime'],
                y: Number.parseFloat(value['total_mkt_val'].replace(/,/g, ""))
              });

              _this13.series4.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y2'].toFixed(2)),
                percent: value['positive_Share']
              });

              _this13.series5.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y1'].toFixed(2)),
                percent: value['negative_Share']
              });

              _this13.series6.push({
                x: value['datetime'],
                y: Number.parseFloat(value['esg_score'])
              });
            });

            _this13.chartOptions.series[0]['data'] = _this13.series2.sort(_this13.sortBy("x"));
            _this13.chartOptions.series[1]['data'] = _this13.series1.sort(_this13.sortBy("x"));
            _this13.chartOptions.series[2]['data'] = _this13.series3.sort(_this13.sortBy('x'));
            _this13.chartOptions.series[3]['data'] = _this13.series4.sort(_this13.sortBy("x"));
            _this13.chartOptions.series[4]['data'] = _this13.series5.sort(_this13.sortBy('x'));
            _this13.chartOptions.series[5]['data'] = _this13.series6.sort(_this13.sortBy('x')); // finaldata.push({
            //   // name: 'second last',
            //   data: myAbc1,
            // });
            // this.chartOptions.series = finaldata;

            _this13.updateFlag = true;
          });
        }
      }, {
        key: "graphMeterScaleActive",
        value: function graphMeterScaleActive(filter) {
          if (filter == this.selectedFilter) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.myservice.getportfolioScore(1).subscribe(function (data) {
            _this14.portfolioDetails = data["data"];

            if (_this14.portfolioDetails["symbol"] === "up-arrow") {
              _this14.portfolioDetails["mysymbol"] = true;
            } else {
              _this14.portfolioDetails["mysymbol"] = false;
            }
          });
          this.myservice.getmarketScorecard(1).subscribe(function (data) {
            _this14.marketscorecardDetails = data["data"];
            _this14.marketscorecardDetail = data["data"][data["data"].length - 1]; // this.marketscorecardDetail = {
            //   "changeSentScore": 'No change',
            //   "marketSentScore": 'Neutral', "symbol": 'neutral'
            // }
            // if (this.marketscorecardDetail["symbol"] === "up-arrow") {
            //   this.marketscorecardDetail["mysymbol"] = true;
            // } else {
            //   this.marketscorecardDetail["mysymbol"] = false;
            // }
          }, function (error) {
            _this14.marketoccuranceerror = error && error.error && error.error.message;
          });
          this.myservice.tumGraph(1, "week").subscribe(function (data) {
            _this14.tumgraphdata = data["data"];

            _this14.tumgraphdata.map(function (value) {
              var abc = {};
              abc["x"] = value['datetime'];
              abc["y"] = Number.parseFloat(value['negative_mkt_val'].replace(/,/g, "")); // abc['total'] = value.total_mkt_val.toLocaleString('en-US')

              _this14.series1.push(abc);

              _this14.series2.push({
                x: value['datetime'],
                y: Number.parseFloat(value['positive_mkt_val'].replace(/,/g, ""))
              });

              _this14.series3.push({
                x: value['datetime'],
                y: Number.parseFloat(value['total_mkt_val'].replace(/,/g, ""))
              });

              _this14.series4.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y2'].toFixed(2)),
                percent: value['positive_Share']
              });

              _this14.series5.push({
                x: value['datetime'],
                y: Number.parseFloat(value['sent_score_y1'].toFixed(2)),
                percent: value['negative_Share']
              });

              _this14.series6.push({
                x: value['datetime'],
                y: Number.parseFloat(value['esg_score'])
              });
            });

            _this14.chartOptions.series[0]['data'] = _this14.series2.sort(_this14.sortBy("x"));
            _this14.chartOptions.series[1]['data'] = _this14.series1.sort(_this14.sortBy("x"));
            _this14.chartOptions.series[2]['data'] = _this14.series3.sort(_this14.sortBy("x"));
            _this14.chartOptions.series[3]['data'] = _this14.series4.sort(_this14.sortBy("x"));
            _this14.chartOptions.series[4]['data'] = _this14.series5.sort(_this14.sortBy("x"));
            _this14.chartOptions.series[5]['data'] = _this14.series6.sort(_this14.sortBy("x"));
            _this14.updateFlag = true;
            _this14.tumgraphbasictotaldate = data["aum"]["total"]["date"];
            _this14.tumgraphbasictotalinfo = data["aum"]["total"]["val"];
            _this14.tumgraphbasictotalsymbol = data["aum"]["total"]["symbol"];
            _this14.tumgraphbasicdaily = data["aum"]["daily"]["val"];
            _this14.tumgraphbasicweekly = data["aum"]["weekly"]["val"];
            _this14.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];
            _this14.tumgraphdailyarrow = data["aum"]["daily"]["changeType"] == 1 ? true : false;
            _this14.tumgraphweeklyarrow = data["aum"]["weekly"]["changeType"] == 1 ? true : false;
            _this14.tumgraphdailypercentage = data["aum"]["weekly"]["symbol"];
            _this14.tumgraphweeklypercentage = data["aum"]["weekly"]["symbol"];
            _this14.tumgraphbasicfilter = data["filter"];
            _this14.selectedFilter = _this14.tumgraphbasicfilter[0].val;
          });
        }
      }, {
        key: "checkNumberValue",
        value: function checkNumberValue(value) {
          if (value == 0) {
            return 'neutral';
          }

          if (value > 0) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return GraphsComponent;
    }();

    GraphsComponent.ɵfac = function GraphsComponent_Factory(t) {
      return new (t || GraphsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]));
    };

    GraphsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraphsComponent,
      selectors: [["app-graphs"]],
      decls: 58,
      vars: 14,
      consts: [[1, "container"], [1, "row", "col-12", 2, "padding-right", "0px", "padding-bottom", "20px", "line-height", "170%"], [1, "col-3.9", "card", "text-white", 2, "background-color", "#007bff85", "margin-right", "22px"], [1, "card-body", "flex-column"], [1, "row"], [1, "col-12"], [2, "font-size", "16px", "font-weight", "600"], ["tooltip", "Displays portion of portfolio that has positive and negative sentiment", "placement", "right", "delay", "500", 1, "fa", "fa-info-circle", "pl-3"], ["class", "col-12", "style", " font-size: 15px;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "col-4", "card", 2, "background-color", "#1c59a059", "margin-right", "11px", "color", "white", "margin-left", "-10px"], [1, "card-body"], [1, "mytooltip", "tooltip-effect-1"], [1, "fa", "fa-info-circle", "pl-3", "tooltip-item"], [1, "tooltip-content", "clearfix", 2, "color", "black", "text-align", "center"], ["src", "assets/images/ESG_Image.png", 2, "width", "100%", "height", "56px"], [2, "font-size", "12px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-4", "card", "text-white", 2, "background-color", "#007bff85", "margin-left", "1px"], [2, "font-size", "16px", "color", "white", "font-weight", "600", "font-style", "16px"], ["class", "row pt-4", 4, "ngIf", "ngIfElse"], ["message", ""], [1, "row", 2, "width", "101.2%"], [1, "card", "h-100"], [1, "card-body", "highchartoutline"], [1, "row", "usdrow"], [1, "col-3", "p-0"], [1, "graph-text", "pl-5"], [1, "digit", "pl-4"], ["class", "col-2 graph-text p-0", 4, "ngIf"], ["class", "col-1 graph-text p-0", 4, "ngIf"], [1, "col-4", "meterscale"], ["class", "col-2 range highlight", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-12", "pl-1", "pr-1"], [2, "width", "100%", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "updateChange"], [1, "col-12", 2, "font-size", "15px", 3, "ngStyle", "ngClass"], [4, "ngIf"], [2, "font-weight", "900", 3, "ngStyle"], [2, "color", "black"], [1, "slidecontainer", "tooltip", 2, "opacity", "1"], ["type", "range", "min", "-1.000", "max", "1.000", "step", "0.001", "alt", "text", "id", "myRange", "disabled", "", 1, "slider", 3, "ngModel", "ngModelChange"], [1, "tooltiptext"], [1, "range-labels"], [1, "green"], [1, "red"], [3, "ngClass"], [1, "main-div", 2, "margin-top", "25px"], [1, "col-div", 2, "font-size", "17px"], [1, "col-div", 3, "ngStyle"], [2, "font-size", "17px"], [1, "row", "pt-4"], ["class", "col-5", "style", "margin-top: 19px;", 4, "ngIf"], [1, "col-7", "pl-4", "pr-0", "pt-2", "margin-tl"], [4, "ngId"], ["style", "\n                  margin-left: -8%;\n                  font-size: 16px;\n                  font-weight: 400;\n                  color: white;\n                ", 4, "ngIf"], [1, "col-5", 2, "margin-top", "19px"], ["style", "\n               \n                  font-size: 33px;\n                  color: #039d00;\n                ", 4, "ngIf"], ["style", "font-size: 35px; color: #b50000", 4, "ngIf"], ["class", "fa fa-arrow-up pt-2", "aria-hidden", "true", "style", "\n                    color: #039d00;\n                    font-size: 16px;\n                    margin-left: 12%;\n                    position: absolute;\n                    /* margin-top: 4%; */\n                  ", 4, "ngIf"], ["class", "fa fa-arrow-down pt-2", "aria-hidden", "true", "style", "\n                    color: #b50000;\n                    font-size: 16px;\n                    margin-left: 12%;\n                    position: absolute;\n                    /* margin-top: 4%; */\n                  ", 4, "ngIf"], [1, "mt-4"], ["style", "font-size: 24px;color: white", 4, "ngIf"], [2, "font-size", "33px", "color", "#039d00"], [2, "font-size", "35px", "color", "#b50000"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", "pt-2", 2, "color", "#039d00", "font-size", "16px", "margin-left", "12%", "position", "absolute", "/* margin-top", "4%"], ["aria-hidden", "true", 1, "fa", "fa-arrow-down", "pt-2", 2, "color", "#b50000", "font-size", "16px", "margin-left", "12%", "position", "absolute", "/* margin-top", "4%"], [2, "font-size", "24px", "color", "white"], ["class", "fa fa-arrow-up", "aria-hidden", "true", "style", "margin-top: 15px; color: #039d00", 4, "ngIf"], ["class", "fa fa-arrow-down", "aria-hidden", "true", "style", "margin-top: 15px; color: #b50000", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", 2, "margin-top", "15px", "color", "#039d00"], ["aria-hidden", "true", 1, "fa", "fa-arrow-down", 2, "margin-top", "15px", "color", "#b50000"], [2, "margin-left", "-8%", "font-size", "16px", "font-weight", "400", "color", "white"], ["class", "col-12 ", "style", "color: black;font-size: 14px;", 4, "ngIf"], [1, "col-12", 2, "color", "black", "font-size", "14px"], [1, "col-2", "graph-text", "p-0"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", 2, "margin-top", "15px", "color", "#039d00", "font-size", "15px"], [2, "font-size", "20px", "color", "#039d00"], ["aria-hidden", "true", 1, "fa", "fa-arrow-down", 2, "margin-top", "15px", "color", "#b50000", "font-size", "15px"], [2, "font-size", "20px", "color", "#b50000"], [1, "col-1", "graph-text", "p-0"], [1, "col-2", "range", "highlight", 3, "ngClass", "click"]],
      template: function GraphsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " PORTFOLIO SENTIMENT SCORE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GraphsComponent_div_12_Template, 4, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ESG SCORE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ESG Risk Scores assess the degree to which a company's enterprise business value is at risk driven by environmental, social and governance issues. The final ESG Risk Scores are a measure of unmanaged risk on an absolute scale of 0-100, with a lower score signaling less unmanaged ESG Risk.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GraphsComponent_div_27_Template, 11, 25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " MARKET SENTIMENT SCORE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GraphsComponent_div_35_Template, 6, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, GraphsComponent_ng_template_36_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "TOTAL AUM (USD)*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, GraphsComponent_div_48_Template, 5, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, GraphsComponent_div_49_Template, 5, 3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, GraphsComponent_div_52_Template, 2, 2, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "highcharts-chart", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function GraphsComponent_Template_highcharts_chart_updateChange_55_listener($event) {
            return ctx.updateFlag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marketscorecardDetail)("ngIfElse", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.tumgraphbasictotalsymbol, "", ctx.tumgraphbasictotalinfo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tumgraphbasicdaily);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tumgraphbasicweekly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tumgraphbasicfilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.updateFlag)("oneToOne", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tumgraphbasictotaldate);
        }
      },
      directives: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".card-text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 86px;\r\n  height: 50px;\r\n  left: 1071px;\r\n  top: 411px;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 40px;\r\n  line-height: 20px;\r\n\r\n  color: #b50000;\r\n}\r\n\r\n.graph_img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 255px;\r\n}\r\n\r\n.graph-text[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n  line-height: 15px;\r\n  color: #999999;\r\n  \r\n}\r\n\r\n.meterscale[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  margin-left: 137px;\r\n}\r\n\r\n.digit[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 31px;\r\n  line-height: 30px;\r\n  color: #222222;\r\n  margin-left: 12px;\r\n}\r\n\r\n.range[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.range[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 2px solid #3466f6;\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.highlight[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n\r\n  text-align: center;\r\n}\r\n\r\n.graphMeterScale[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  border-bottom: 2px solid #3466f6;\r\n}\r\n\r\n.active[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%]:hover {\r\n  color: blue;\r\n}\r\n\r\n.range.active[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #3466f6;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.range[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  margin: 3px;\r\n  cursor: pointer;\r\n  margin-top: -4px;\r\n  line-height: 40px;\r\n}\r\n\r\n.highcharts-tooltip-box[_ngcontent-%COMP%] {\r\n  fill: black;\r\n  fill-opacity: 0.6;\r\n  stroke-width: 0;\r\n}\r\n\r\n.highcharts-tooltip[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\r\n  fill: white;\r\n  text-shadow: 0 0 3px black;\r\n}\r\n\r\n.flex-section[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  flex-direction: column;\r\n  \r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tooltip-example[_ngcontent-%COMP%]   [tooltip][_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n\r\n.ng-tooltip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  max-width: 200px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  color: #f8f8f2;\r\n  padding: 3px;\r\n  background: #282a36;\r\n  border-radius: 4px;\r\n  z-index: 1000;\r\n  opacity: 0;\r\n}\r\n\r\n.ng-tooltip[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-style: solid;\r\n}\r\n\r\n\r\n\r\n.ng-tooltip-right[_ngcontent-%COMP%]:after {\r\n  top: 50%;\r\n  right: 100%;\r\n  margin-top: -5px;\r\n  border-width: 5px;\r\n  border-color: transparent black transparent transparent;\r\n}\r\n\r\n.ng-tooltip-show[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n.margin-tl[_ngcontent-%COMP%] {\r\n  \r\n  margin-left: -4%;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n  \r\n  color: #b50000;\r\n  font-weight: 900;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  color: #039d00;\r\n  font-weight: 900;\r\n}\r\n\r\n.flex-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  \r\n  justify-content: flex-start;\r\n}\r\n\r\n\r\n\r\n.slidecontainer[_ngcontent-%COMP%] {\r\n  width: 103%;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n  width: 97%;\r\n  height: 6px;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(0, 128, 0, 0.7)) !important;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  transition: opacity .2s;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]:hover {\r\n   background-image: linear-gradient(to right, rgba(255, 0, 0, 1), rgba(0, 128, 0, 1));\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 10px;\r\n  background-color: hsl(50, 100%, 50%);\r\n  overflow: visible;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\r\n  width: 23px;\r\n  height: 24px;\r\n  border: 0;\r\n  background: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 150%;\r\n  left: 51%;\r\n  margin-left: -60px;\r\n  font-size: 10px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black transparent transparent transparent;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.range-labels[_ngcontent-%COMP%] {\r\n  margin: 24px -54px 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.range-labels[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 134.3px;\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  top: -22px;\r\n}\r\n\r\n.main-div[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-align:center;\r\n  font-size: 12px;\r\n}\r\n\r\n.col-div[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n  height: 37px;\r\n  display:inline-block;\r\n}\r\n\r\n.disabled-field[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    display: none;\r\n}\r\n\r\n.card-block[_ngcontent-%COMP%] {\r\n    margin-top: 10px\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    position: relative;\r\n    z-index: 999\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-weight: 500;\r\n    padding: 0 0px\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    width: 554px;\r\n    left: 50%;\r\n    margin: 0 0 8px -272px;\r\n    border-radius: 8px;\r\n    bottom: 100%;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    line-height: 19px;\r\n    box-shadow: -5px -5px 15px rgba(48, 54, 61, 0.2);\r\n    background: white;\r\n    opacity: 0;\r\n    cursor: default;\r\n    pointer-events: none\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    top: 100%;\r\n    left: 50%;\r\n    border: solid transparent;\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: white transparent transparent;\r\n    border-width: 10px;\r\n    margin-left: -10px\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    float: left;\r\n    margin-right: 1em\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-item[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 360px;\r\n    height: 20px;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    pointer-events: none;\r\n    transform: translateX(-50%)\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .tooltip-item[_ngcontent-%COMP%]::after {\r\n    pointer-events: auto\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .tooltip-content[_ngcontent-%COMP%] {\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg)\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .tooltip-content2[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    font-size: 18px\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-text[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    display: block;\r\n    padding: 1.31em 1.21em 1.21em 0;\r\n    color: #fff\r\n}\r\n\r\n.fa-arrow-down[_ngcontent-%COMP%]:before {\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGhzL2dyYXBocy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlOztFQUVmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7RUFDRSxRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztHQUVHOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUNBLGNBQWM7O0FBQ2Q7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrR0FBa0c7RUFDbEcsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBO0dBQ0csbUZBQW1GO0FBQ3RGOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUVqQixnREFBZ0Q7SUFDaEQsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULG9CQUFvQjtJQUVwQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0lBRVY7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CO0FBQ0o7O0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGhzL2dyYXBocy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4NnB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsZWZ0OiAxMDcxcHg7XHJcbiAgdG9wOiA0MTFweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcblxyXG4gIGNvbG9yOiAjYjUwMDAwO1xyXG59XHJcblxyXG4uZ3JhcGhfaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1NXB4O1xyXG59XHJcblxyXG4uZ3JhcGgtdGV4dCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMnB4OyAqL1xyXG59XHJcblxyXG4ubWV0ZXJzY2FsZSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMzdweDtcclxufVxyXG5cclxuLmRpZ2l0IHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDMxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5yYW5nZSB7XHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJhbmdlOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM0NjZmNjtcclxuICAvKiBjb2xvcjogIzM0NjZGNjsgKi9cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXBoTWV0ZXJTY2FsZSB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNDY2ZjY7XHJcbn1cclxuXHJcbi5hY3RpdmUsXHJcbi5oaWdobGlnaHQ6aG92ZXIge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4ucmFuZ2UuYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM0NjZmNjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucmFuZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5oaWdoY2hhcnRzLXRvb2x0aXAtYm94IHtcclxuICBmaWxsOiBibGFjaztcclxuICBmaWxsLW9wYWNpdHk6IDAuNjtcclxuICBzdHJva2Utd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5oaWdoY2hhcnRzLXRvb2x0aXAgdGV4dCB7XHJcbiAgZmlsbDogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi5mbGV4LXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7ICovXHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udG9vbHRpcC1leGFtcGxlIFt0b29sdGlwXSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4ubmctdG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2Y4ZjhmMjtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogIzI4MmEzNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5uZy10b29sdGlwOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbi8qIC5uZy10b29sdGlwLXRvcDphZnRlciB7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uZy10b29sdGlwLWJvdHRvbTphZnRlciB7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50O1xyXG59ICovXHJcblxyXG4ubmctdG9vbHRpcC1yaWdodDphZnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmctdG9vbHRpcC1zaG93IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiAubGluZS1oZWlnaHQtMiB7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbn0gKi9cclxuXHJcbi5tYXJnaW4tdGwge1xyXG4gIC8qIG1hcmdpbi10b3A6IDEwJTsgKi9cclxuICBtYXJnaW4tbGVmdDogLTQlO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICAvKiBjb2xvcjogI2UwNDM0MzsgKi9cclxuICBjb2xvcjogI2I1MDAwMDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6ICMwMzlkMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmZsZXgtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi8qc2xpZGVyIGNvZGUqL1xyXG4uc2xpZGVjb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDMlO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICB3aWR0aDogOTclO1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAwLCAwLCAwLjcpLCByZ2JhKDAsIDEyOCwgMCwgMC43KSkgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZXI6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAwLCAwLCAxKSwgcmdiYSgwLCAxMjgsIDAsIDEpKTtcclxufVxyXG5cclxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNTAsIDEwMCUsIDUwJSk7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMTUwJTtcclxuICBsZWZ0OiA1MSU7XHJcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnJhbmdlLWxhYmVscyB7XHJcbiAgbWFyZ2luOiAyNHB4IC01NHB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5yYW5nZS1sYWJlbHMgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTM0LjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAtMjJweDtcclxufVxyXG4ubWFpbi1kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jb2wtZGl2IHtcclxuICB3aWR0aDogMTYlO1xyXG4gIGhlaWdodDogMzdweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG4uZGlzYWJsZWQtZmllbGQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1ibG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5teXRvb2x0aXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk5XHJcbn1cclxuXHJcbi5teXRvb2x0aXAgLnRvb2x0aXAtaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMCAwcHhcclxufVxyXG5cclxuLm15dG9vbHRpcCAudG9vbHRpcC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB3aWR0aDogNTU0cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW46IDAgMCA4cHggLTI3MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IC01cHggMTVweCByZ2JhKDQ4LCA1NCwgNjEsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAtNXB4IC01cHggMTVweCByZ2JhKDQ4LCA1NCwgNjEsIDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG59XHJcblxyXG4ubXl0b29sdGlwIC50b29sdGlwLWNvbnRlbnQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4XHJcbn1cclxuXHJcbi5teXRvb2x0aXAgLnRvb2x0aXAtY29udGVudCBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtXHJcbn1cclxuXHJcbi5teXRvb2x0aXAgLnRvb2x0aXAtaXRlbTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXHJcbn1cclxuXHJcbi5teXRvb2x0aXA6aG92ZXIgLnRvb2x0aXAtaXRlbTo6YWZ0ZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG9cclxufVxyXG5cclxuLm15dG9vbHRpcDpob3ZlciAudG9vbHRpcC1jb250ZW50IHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAwLCAwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMCwgMGRlZylcclxufVxyXG5cclxuLm15dG9vbHRpcDpob3ZlciAudG9vbHRpcC1jb250ZW50MiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxOHB4XHJcbn1cclxuXHJcbi5teXRvb2x0aXAgLnRvb2x0aXAtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMS4zMWVtIDEuMjFlbSAxLjIxZW0gMDtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuLmZhLWFycm93LWRvd246YmVmb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-graphs",
          templateUrl: "./graphs.component.html",
          styleUrls: ["./graphs.component.css"]
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../graphs/graphs.component */
    "./src/app/graphs/graphs.component.ts");
    /* harmony import */


    var _clientholding_clientholding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clientholding/clientholding.component */
    "./src/app/clientholding/clientholding.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _recommendedaction_recommendedaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../recommendedaction/recommendedaction.component */
    "./src/app/recommendedaction/recommendedaction.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-graphs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-clientholding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-recommendedaction");
        }
      },
      directives: [_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_1__["GraphsComponent"], _clientholding_clientholding_component__WEBPACK_IMPORTED_MODULE_2__["ClientholdingComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"], _recommendedaction_recommendedaction_component__WEBPACK_IMPORTED_MODULE_4__["RecommendedactionComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/manage-relationship/manage-relationship.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/manage-relationship/manage-relationship.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ManageRelationshipComponent */

  /***/
  function srcAppManageRelationshipManageRelationshipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageRelationshipComponent", function () {
      return ManageRelationshipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageRelationshipComponent_div_11_ul_8_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_div_11_ul_8_li_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r208);

          var subList_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

          return ctx_r207.open(_r192, subList_r205);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subList_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subList_r205.timing, " ");
      }
    }

    function ManageRelationshipComponent_div_11_ul_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageRelationshipComponent_div_11_ul_8_li_1_Template, 5, 1, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_div_11_ul_8_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212);

          var subList_r205 = ctx.$implicit;

          var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

          return ctx_r211.open(_r192, subList_r205);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subList_r205 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subList_r205.timing != undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subList_r205.actionableItems, " ");
      }
    }

    function ManageRelationshipComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageRelationshipComponent_div_11_ul_8_Template, 7, 2, "ul", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r202 = ctx.$implicit;
        var i_r203 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r202.timePeriod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapseOne", i_r203, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r202.eventName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseOne", i_r203, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r202.meetingHistory);
      }
    }

    function ManageRelationshipComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r213 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r213.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r213.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r213.actionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r213.agenda, "");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function ManageRelationshipComponent_div_34_ul_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var abc_r217 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, abc_r217.actionColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](abc_r217.actionText);
      }
    }

    function ManageRelationshipComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_div_34_Template_i_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var item_r214 = ctx.$implicit;

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);

          return ctx_r218.openTwitterModal(_r200, item_r214);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManageRelationshipComponent_div_34_ul_16_Template, 8, 4, "ul", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r214 = ctx.$implicit;
        var i_r215 = ctx.index;

        var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", i_r215);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r214.accColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapseOne", i_r215 + 99, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r190.expandAll ? "" : "collapsed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r214.accTitle, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapseOne", i_r215 + 99, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r190.expandAll ? "show" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r214.recommendation);
      }
    }

    function ManageRelationshipComponent_li_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_li_41_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r222);

          var item_r220 = ctx.$implicit;

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

          return ctx_r221.open(_r196, item_r220);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r220 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r220.title, " ");
      }
    }

    function ManageRelationshipComponent_ng_template_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Take Action for : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_44_Template_button_click_8_listener() {
          var modal_r223 = ctx.$implicit;
          return modal_r223.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_44_Template_button_click_10_listener() {
          var modal_r223 = ctx.$implicit;
          return modal_r223.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r193.modalRow.actionableItems, "");
      }
    }

    function ManageRelationshipComponent_ng_template_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Take Action for : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_46_Template_button_click_8_listener() {
          var modal_r226 = ctx.$implicit;
          return modal_r226.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_46_Template_button_click_10_listener() {
          var modal_r226 = ctx.$implicit;
          return modal_r226.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r195.modalRow.actionText, "");
      }
    }

    function ManageRelationshipComponent_ng_template_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " document downloaded for use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_48_Template_button_click_8_listener() {
          var modal_r229 = ctx.$implicit;
          return modal_r229.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_48_Template_button_click_10_listener() {
          var modal_r229 = ctx.$implicit;
          return modal_r229.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r197.modalRow.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r197.modalRow.title, " ");
      }
    }

    function ManageRelationshipComponent_ng_template_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The Links");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_50_Template_i_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234);

          var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r233.goToLink("/login", "", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_50_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234);

          var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r235.goToLink("/login", "", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_50_Template_button_click_7_listener() {
          var modal_r232 = ctx.$implicit;
          return modal_r232.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_50_Template_button_click_9_listener() {
          var modal_r232 = ctx.$implicit;
          return modal_r232.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManageRelationshipComponent_ng_template_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_52_Template_button_click_8_listener() {
          var modal_r238 = ctx.$implicit;
          return modal_r238.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_ng_template_52_Template_button_click_10_listener() {
          var modal_r238 = ctx.$implicit;
          return modal_r238.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r201.modalTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r201.clientName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r201.intials);
      }
    }

    var ManageRelationshipComponent =
    /*#__PURE__*/
    function () {
      function ManageRelationshipComponent(_service, elRef, modalService) {
        _classCallCheck(this, ManageRelationshipComponent);

        this._service = _service;
        this.elRef = elRef;
        this.modalService = modalService;
        this.notificationValues = 0;
        this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.relatedDoc = [{
          itemName: 'Fund Document'
        }, {
          itemName: 'Risk Profile'
        }, {
          itemName: 'FA Contract with john'
        }, {
          itemName: 'Signed Will'
        }, {
          itemName: 'Dependents information'
        }, {
          itemName: 'Signed Acceptence Of Risk'
        }];
        this.upcomingMeet = [{
          date: '19-sep-2018',
          time: '12:00'
        }, {
          date: '17-sep-2018',
          time: '13:00'
        }];
        this.expandAll = false;
      }

      _createClass(ManageRelationshipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRelatedDocumentData();
          this.getClientUpcomingMeetings();
          this.getClientHistoryData();
          this.getClientEventsData();
          this.clientName = sessionStorage.getItem("clientName");
          var name = this.clientName.split(" ");
          var firstName = name[0];
          var lastName = name[1];
          this.intials = firstName.charAt(0) + lastName.charAt(0);
        }
      }, {
        key: "expandDetails",
        value: function expandDetails(type) {
          if (type === 'expand') {
            this.expandAll = true;
          } else {
            this.expandAll = false;
            var dataElement = this.elRef.nativeElement.querySelectorAll(".panel-collapse");

            for (var i = 0; i < dataElement.length; i++) {
              dataElement[i].classList.remove('show');
            }
          }
        }
      }, {
        key: "getRelatedDocumentData",
        value: function getRelatedDocumentData() {
          var _this15 = this;

          this._service.getClientRelatedDoc(1, this.clientID).subscribe(function (data) {
            _this15.relatedDoc = data.data[0].relatedDocument.document;
          });
        }
      }, {
        key: "getClientUpcomingMeetings",
        value: function getClientUpcomingMeetings() {
          var _this16 = this;

          this._service.getClientMeeting(1, this.clientID).subscribe(function (data) {
            _this16.upcomingMeet = data.data[0].clientUpcomingMeetings.meetings;
          });
        }
      }, {
        key: "getClientHistoryData",
        value: function getClientHistoryData() {
          var _this17 = this;

          this._service.getClientHistory(1, this.clientID).subscribe(function (data) {
            _this17.historyData = data.data[0]["Genesis Data"];
          });
        }
      }, {
        key: "getClientEventsData",
        value: function getClientEventsData() {
          var _this18 = this;

          this._service.getClientIntel(1, this.clientID).subscribe(function (data) {
            _this18.upcomingEventsData = data.data;

            _this18.upcomingEventsData.forEach(function (element) {
              if (element.color == '#f2210a') {
                _this18.notificationValues = _this18.notificationValues + 1;
              }
            });

            _this18.countChanged.emit(_this18.notificationValues);
          });
        }
      }, {
        key: "goToLink",
        value: function goToLink(url, heading, message) {
          sessionStorage.setItem("heading", heading);
          sessionStorage.setItem("message", message);
          window.open(url, "_blank");
        }
      }, {
        key: "open",
        value: function open(content, tableRow) {
          this.modalRow = tableRow;
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'md',
            centered: true
          });
        }
      }, {
        key: "openTwitterModal",
        value: function openTwitterModal(content, item) {
          console.log('item', item);
          this.modalService.open(content, {
            centered: true
          });
          this.modalTitle = item.accTitle;
          this.getBodyText(item.accTitle); // modalRef.title = item.eventTitle;
        }
      }, {
        key: "getBodyText",
        value: function getBodyText(title) {
          if (title.includes('bereavement')) {
            this.modalBodyText = 'Heartfelt condolences on your loss';
          } else if (title.includes('birthday') || title.includes('anniversary')) {
            this.modalBodyText = 'Wish you well';
          } else if (title.includes('retirement')) {
            this.modalBodyText = 'Enjoy the retired life!';
          }
        }
      }]);

      return ManageRelationshipComponent;
    }();

    ManageRelationshipComponent.ɵfac = function ManageRelationshipComponent_Factory(t) {
      return new (t || ManageRelationshipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
    };

    ManageRelationshipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageRelationshipComponent,
      selectors: [["app-manage-relationship"]],
      inputs: {
        clientID: "clientID"
      },
      outputs: {
        countChanged: "countChanged"
      },
      decls: 54,
      vars: 5,
      consts: [[1, "container", "main"], [1, "row"], [1, "col-6"], [1, "card", "insightbody", "next-card", 2, "overflow-y", "auto"], [1, "card-header"], [1, "history-header", 2, "font-size", "1.35vw"], [2, "float", "right"], [1, "card-body", "scrollable-history", "scrollbar-light-blue"], ["id", "accordion1", 1, "timeline"], ["id", "accordion"], ["class", "event", 4, "ngFor", "ngForOf"], [1, "card", "insightbody", "next-card"], [1, "history-header", 2, "font-size", "1.18vw"], [1, "card-body", "scrollable-meeting", "scrollbar-light-blue"], [1, "list-ele", 2, "margin-left", "-15px !important"], ["style", "border-bottom: 1px lightgray solid;font-size: 14px;", 4, "ngFor", "ngForOf"], [1, "card", "insightbody", "next-card", 2, "overflow-y", "auto", "overflow-x", "hidden"], [1, "notification-number"], [2, "font-size", "1.11vw", "text-decoration", "underline", "margin-right", "10px", "cursor", "pointer", "color", "#007bff", 3, "click"], [1, "history-header", 2, "font-size", "1.11vw", "color", "blue"], [2, "font-size", "1.11vw", "text-decoration", "underline", "cursor", "pointer", "color", "#007bff", 3, "click"], [1, "card-body", "scrollable", "scrollbar-light-blue"], ["class", "expandheight", 4, "ngFor", "ngForOf"], [1, "list-ele", "pl-3"], [4, "ngFor", "ngForOf"], [1, "col-md-6"], ["history", ""], ["content", ""], ["documentModal", ""], ["clientIntelModal", ""], ["twitterModal", ""], [1, "event"], [1, "history-time", 2, "position", "absolute", "left", "-9vw", "font-size", "1vw", "color", "#ABB1BE", "font-weight", "600"], [1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", 1, "accordion-toggle", "panel-title", "history-header", "collapsed", 2, "font-size", "1vw", 3, "href"], ["aria-expanded", "true", "aria-controls", "flush-collapseOne", 1, "panel-collapse", "collapse", "in", 3, "id"], [1, "panel-body"], ["style", "list-style-type:none;padding-bottom: 20px;padding-top: 20px;", 4, "ngFor", "ngForOf"], [2, "list-style-type", "none", "padding-bottom", "20px", "padding-top", "20px"], [4, "ngIf"], [1, "btn", "insideaccord", 2, "color", "#3466f6", "text-align", "justify", 3, "click"], [1, "fa", "fa-external-link"], [2, "color", "#000000", "font-size", "14px"], [2, "border-bottom", "1px lightgray solid", "font-size", "14px"], [1, "col-md-4", "pt-2", 2, "color", "black"], [1, "col-md-4"], ["type", "button", "target", "_blank", 1, "btn", "btn-link", "history-header", 2, "font-size", "1.06vw", "text-decoration", "underline", "color", "#3466F6", 3, "href"], [1, "expandheight"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title", "pt-1", "pb-1"], [1, "row", 2, "margin-right", "0px", "margin-left", "0px", "flex-wrap", "unset"], [1, "col-1"], ["aria-hidden", "true", 1, "fa", "fa-circle", "pt-3"], [1, "col-11", "pl-1"], ["data-toggle", "collapse", "data-parent", "#accordion", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "pb-0", "pt-0", 3, "href", "ngClass"], [1, "mb-0", 2, "color", "black", "font-size", "14px", "width", "97%"], [1, "fa", "fa-twitter", 2, "font-size", "22px", "color", "#1DA1F2", 3, "click"], ["role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in", 3, "id", "ngClass"], [1, "panel-body", "mt-3"], ["style", "list-style-type:none;", 4, "ngFor", "ngForOf"], [2, "list-style-type", "none"], [1, "btn", "insideaccord", 3, "ngStyle"], [2, "font-size", "14px", "color", "blue", "cursor", "pointer"], [1, "btn", "insideaccord", 2, "color", "#3466F6", 3, "click"], [1, "font-14", "pl-3"], [1, "mt-0", "mb-0", 2, "width", "95%"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "font-14", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "font-14", 3, "click"], [1, "fa-facebook-square", 2, "font-size", "22px", "color", "#1DA1F2", 3, "click"], [1, "row", "modal-body", "font-italic"], ["id", "profileImage"]],
      template: function ManageRelationshipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "HISTORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageRelationshipComponent_div_11_Template, 9, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UPCOMING MEETINGS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageRelationshipComponent_li_18_Template, 9, 4, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CLIENT INTEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_Template_span_click_27_listener() {
            return ctx.expandDetails("expand");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Expand all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRelationshipComponent_Template_span_click_30_listener() {
            return ctx.expandDetails("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Collapse all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ManageRelationshipComponent_div_34_Template, 17, 9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "RELATED DOCUMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ManageRelationshipComponent_li_41_Template, 7, 1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ManageRelationshipComponent_ng_template_44_Template, 12, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ManageRelationshipComponent_ng_template_46_Template, 12, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ManageRelationshipComponent_ng_template_48_Template, 12, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ManageRelationshipComponent_ng_template_50_Template, 11, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ManageRelationshipComponent_ng_template_52_Template, 12, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomingMeet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notificationValues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomingEventsData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relatedDoc);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
      styles: ["@import \"https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800\";\r\n\r\n.flot-r[_ngcontent-%COMP%] {\r\n    float:right;\r\n}\r\n\r\na[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: #000000;\r\n    text-decoration: none;\r\n}\r\n\r\n.list-ele[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    color: blue;\r\n    font-size: 1.8vw\r\n}\r\n\r\n.next-card[_ngcontent-%COMP%] {\r\n    margin-top: 5%\r\n}\r\n\r\n#profileImage[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background: #512DA8;\r\n  font-size: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  margin-left: 10px;\r\n}\r\n\r\n#timeline-content[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #004ffc;\r\n  border-bottom-right-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  color: black;\r\n  margin-left: 25%;\r\n  letter-spacing: 0.5px;\r\n  position: relative;\r\n  line-height: 1.4em;\r\n  font-size: 10px;\r\n  padding-left: 3%;\r\n  margin-top: 5%;\r\n  padding-right: 4%;\r\n  list-style: none;\r\n  text-align: left;\r\n  font-weight: 100;\r\n  max-width: 70%;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  letter-spacing: 1.5px;\r\n  font-weight: 100;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  letter-spacing: 1.5px;\r\n  font-weight: 400;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid lightgray;\r\n  padding-bottom: 7px;\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:last-of-type {\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n  border: none;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  display: block;\r\n  top: 0;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:before {\r\n  left: -217.5px;\r\n  color: lightgray;\r\n  content: attr(data-date);\r\n  text-align: right;\r\n  font-weight: 600;\r\n  font-size: 15px;\r\n  min-width: 175px;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:after {\r\n  box-shadow: 0 0 0 4px #004ffc;\r\n  left: -5.5%;\r\n  background-color: #004ffc;\r\n  border-radius: 50%;\r\n  height: 4px;\r\n  width: 4px;\r\n  content: \"\";\r\n  top: 5px;\r\n}\r\n\r\n.panel-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-family:Fontawesome;\r\n  content:'\\f077';\r\n  float: right;\r\n  color: #007bff !important;\r\n  font-size: 12px;\r\n}\r\n\r\n.panel-heading[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:after {\r\n  content: \"\\f078\";\r\n  color: gray !important;\r\n}\r\n\r\n.accordion-toggle[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  margin-left: 12%\r\n}\r\n\r\n.fa-angle-down[_ngcontent-%COMP%]:before{\r\n  color:grey;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  font-family:Fontawesome;\r\n  content:'\\f077';\r\n  color: #007fbb !important;\r\n  float:right;\r\n  font-size:12px;\r\n  font-weight:300;\r\n}\r\n\r\n.panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:after {\r\n  font-family:Fontawesome;\r\n  content:'\\f078';\r\n  color: grey !important;\r\n}\r\n\r\n.notification-number[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n    top: 12px;\r\n    margin-left: 110px;\r\n    font-size: 12px;\r\n    background: red;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active {\r\n  outline: none !important;\r\n  box-shadow: none;\r\n}\r\n\r\n.font-14[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(248, 244, 244, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n  height: 44px;\r\n\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  width: calc(100% - 7px);\r\n  padding: 0px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 7px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]:hover, .scrollable-meeting[_ngcontent-%COMP%]:hover, .scrollable-history[_ngcontent-%COMP%]:hover {\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 240px;\r\n  height: 240px;\r\n}\r\n\r\n.scrollable-meeting[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  max-height: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.scrollable-history[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  max-height: 380px;\r\n  height: 380px;\r\n}\r\n\r\n@media screen and (max-width: 1400px){\r\n  .history-header[_ngcontent-%COMP%]{\r\n    font-size: 14px !important;\r\n  }\r\n  .history-time[_ngcontent-%COMP%]{\r\n    font-size: 12px !important;\r\n  }\r\n  .notification-number[_ngcontent-%COMP%]{\r\n    margin-left: 90px !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 950px){\r\n  .history-time[_ngcontent-%COMP%]{\r\n    font-size: 11px !important;\r\n  }\r\n  .notification-number[_ngcontent-%COMP%]{\r\n    margin-left: 85px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXJlbGF0aW9uc2hpcC9tYW5hZ2UtcmVsYXRpb25zaGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUxBQXVMOztBQUV2TDtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsTUFBTTtBQUNSOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZjtBQUNGOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0MsNkNBQTZDO0VBQzdDLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUNBOzs7RUFHRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtcmVsYXRpb25zaGlwL21hbmFnZS1yZWxhdGlvbnNoaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2hpdm86MzAwLDMwMGksNDAwLDQwMGksNzAwLDcwMGksOTAwLDkwMGl8U2FpcmErRXh0cmErQ29uZGVuc2VkOjEwMCwyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw4MDB8U2FpcmE6MTAwLDIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMFwiO1xyXG5cclxuLmZsb3QtciB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuYSwgaDUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saXN0LWVsZSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMS44dndcclxufVxyXG5cclxuLm5leHQtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JVxyXG59XHJcblxyXG4jcHJvZmlsZUltYWdlIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICM1MTJEQTg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuI3RpbWVsaW5lLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aW1lbGluZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA0ZmZjO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA0JTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG4udGltZWxpbmUgaDEge1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuLnRpbWVsaW5lIGgyLFxyXG4udGltZWxpbmUgaDMge1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuLnRpbWVsaW5lIC5ldmVudCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50aW1lbGluZSAuZXZlbnQ6bGFzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4udGltZWxpbmUgLmV2ZW50OmJlZm9yZSxcclxuLnRpbWVsaW5lIC5ldmVudDphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRvcDogMDtcclxufVxyXG4udGltZWxpbmUgLmV2ZW50OmJlZm9yZSB7XHJcbiAgbGVmdDogLTIxNy41cHg7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtZGF0ZSk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWluLXdpZHRoOiAxNzVweDtcclxufVxyXG4udGltZWxpbmUgLmV2ZW50OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzAwNGZmYztcclxuICBsZWZ0OiAtNS41JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZmZjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICB3aWR0aDogNHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkaW5nIGE6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OkZvbnRhd2Vzb21lO1xyXG4gIGNvbnRlbnQ6J1xcZjA3Nyc7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5wYW5lbC1oZWFkaW5nIGEuY29sbGFwc2VkOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcZjA3OFwiO1xyXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjY29yZGlvbi10b2dnbGV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMiVcclxufVxyXG4uZmEtYW5nbGUtZG93bjpiZWZvcmV7XHJcbiAgY29sb3I6Z3JleTtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIGE6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OkZvbnRhd2Vzb21lO1xyXG4gIGNvbnRlbnQ6J1xcZjA3Nyc7XHJcbiAgY29sb3I6ICMwMDdmYmIgIWltcG9ydGFudDtcclxuICBmbG9hdDpyaWdodDtcclxuICBmb250LXNpemU6MTJweDtcclxuICBmb250LXdlaWdodDozMDA7XHJcbn1cclxuXHJcbi5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6Rm9udGF3ZXNvbWU7XHJcbiAgY29udGVudDonXFxmMDc4JztcclxuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLW51bWJlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5idG46Zm9jdXMsXHJcbi5idG46YWN0aXZlIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZvbnQtMTQsIC5tb2RhbC1ib2R5e1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ0LCAyNDQsIDAuMDMpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcblxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gN3B4KTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLWxpZ2h0LWJsdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItbGlnaHQtYmx1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG4uc2Nyb2xsYWJsZTpob3ZlcixcclxuLnNjcm9sbGFibGUtbWVldGluZzpob3ZlcixcclxuLnNjcm9sbGFibGUtaGlzdG9yeTpob3ZlciB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWF4LWhlaWdodDogMjQwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG4uc2Nyb2xsYWJsZS1tZWV0aW5ne1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnNjcm9sbGFibGUtaGlzdG9yeXtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG1heC1oZWlnaHQ6IDM4MHB4O1xyXG4gIGhlaWdodDogMzgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCl7XHJcbiAgLmhpc3RvcnktaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5oaXN0b3J5LXRpbWV7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5vdGlmaWNhdGlvbi1udW1iZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogOTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpe1xyXG4gIC5oaXN0b3J5LXRpbWV7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5vdGlmaWNhdGlvbi1udW1iZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogODVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageRelationshipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manage-relationship',
          templateUrl: './manage-relationship.component.html',
          styleUrls: ['./manage-relationship.component.css']
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      }, {
        clientID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        countChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_config_client_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/config/client.config */
    "./src/config/client.config.ts");
    /* harmony import */


    var src_config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/config/app.config */
    "./src/config/app.config.ts");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function NavbarComponent_nav_0_ul_1_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, items_r4.textColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", items_r4.ChangeVal, "");
      }
    }

    function NavbarComponent_nav_0_ul_1_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", items_r4.ChangeVal, "");
      }
    }

    function NavbarComponent_nav_0_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_nav_0_ul_1_li_4_Template, 4, 4, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_nav_0_ul_1_li_5_Template, 4, 1, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", items_r4.Ticker, " ", items_r4.CurrentValue, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r4.mysymbol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !items_r4.mysymbol);
      }
    }

    function NavbarComponent_nav_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_nav_0_ul_1_Template, 6, 4, "ul", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.topnavbarDetails);
      }
    }

    function NavbarComponent_nav_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.headerIconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function NavbarComponent_nav_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r10.headerIconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c1 = function _c1() {
      return ["active-link"];
    };

    var _c2 = function _c2() {
      return ["/home"];
    };

    var _c3 = function _c3() {
      return ["portfolios"];
    };

    function NavbarComponent_nav_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_nav_1_a_1_Template, 2, 1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_nav_1_a_2_Template, 2, 1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Client Portfolios ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Discover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Watchlist");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedClient === "smartAssistant");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedClient && ctx_r2.selectedClient !== "smartAssistant");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.userDetails && ctx_r2.userDetails[0] && ctx_r2.userDetails[0].Name);
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(myservice, router) {
        _classCallCheck(this, NavbarComponent);

        this.myservice = myservice;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "sortBy",
        value: function sortBy(field) {
          return function (a, b) {
            return Number(a[field] < b[field]) - Number(a[field] > b[field]);
          };
        }
      }, {
        key: "goToClientPortFolio",
        value: function goToClientPortFolio() {
          this.router.navigate(['portfolios']);
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(['']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.selectedClient = src_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].client;
          this.myservice.getuserName(1).subscribe(function (data) {
            _this19.userDetails = data["data"];
            localStorage.setItem('userDetails', _this19.userDetails.Name);
          });
          this.myservice.getnavbarTop(1).subscribe(function (data) {
            _this19.topnavbarDetails = data["data"];

            _this19.topnavbarDetails.forEach(function (element, index) {
              if (_this19.topnavbarDetails[index]["symbol"] === "up-arrow") {
                _this19.topnavbarDetails[index]["mysymbol"] = true;
              } else {
                _this19.topnavbarDetails[index]["mysymbol"] = false;
              }
            });

            _this19.topnavbarDetails.sort(_this19.sortBy('Ticker'));
          });
          var headerObject = src_config_client_config__WEBPACK_IMPORTED_MODULE_1__["ClientConfig"].find(function (item) {
            return item.client === src_config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].client;
          });
          this.headerIconPath = headerObject.headerIconPath;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 2,
      vars: 2,
      consts: [["class", "navbar navbar-expand-sm  navbar-dark snav ", 4, "ngIf"], ["class", "navbar navbar-expand-md bg-light navbar-dark", 4, "ngIf"], [1, "navbar", "navbar-expand-sm", "navbar-dark", "snav"], ["class", "navbar-nav", 4, "ngFor", "ngForOf"], [1, "navbar-nav"], [1, "nav-item", "active"], [1, "nav-link", 2, "font-size", "12px"], ["class", "nav-item active topnavmarginleft", 4, "ngIf"], [1, "nav-item", "active", "topnavmarginleft"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", 3, "ngStyle"], [1, "nav-link", 2, "color", "#B50000", "font-size", "12px", "font-weight", "bold"], ["aria-hidden", "true", 1, "fa", "fa-sort-asc"], [1, "navbar", "navbar-expand-md", "bg-light", "navbar-dark"], ["class", "navbar-brand", "href", "#", "style", "color: black;", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "nav-item", 3, "routerLinkActive"], [1, "nav-link", 3, "routerLink"], [1, "nav-item"], ["href", "#", 1, "nav-link", "nav-menu"], [1, "navbar-collapse", "collapse", "w-100", "order-3", "dual-collapse2"], [1, "navbar-nav", "ml-auto"], ["src", "assets/images/v1_672.png", "alt", "comming soon", 1, "rounded-circle"], [2, "margin-right", "120px", "font-size", "16px"], ["href", "#", 1, "navbar-brand", 2, "color", "black"], ["alt", "Brand icon", "width", "45", "height", "fit-content", 1, "rounded", 3, "src"], ["alt", "Brand icon", "width", "80", "height", "fit-content", 1, "rounded", 3, "src"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 2, 1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_nav_1_Template, 29, 11, "nav", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/login");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #e5e5e5;\r\n}\r\n\r\n.navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  \r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  margin: 22px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.pctgscore[_ngcontent-%COMP%] {\r\n  margin: 17px;\r\n}\r\n\r\n#collapsibleNavbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:focus {\r\n  background-color: rgba(52, 102, 246, 1);\r\n  color: white;\r\n  width: 161px;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  padding: 20px 27px 25px 15px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #3466f6;\r\n  background-color: #fdfeff;\r\n  height: 64px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  margin: 16px;\r\n  padding: 2px;\r\n}\r\n\r\n\r\n\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.snav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 32px;\r\n  left: 0px;\r\n  top: 0px;\r\n  background-color: black;\r\n}\r\n\r\n.snfont[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 1px;\r\n}\r\n\r\nul[_ngcontent-vxh-c18][_ngcontent-%COMP%]   li[_ngcontent-vxh-c18][_ngcontent-%COMP%]   a[_ngcontent-vxh-c18][_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  margin: 15px;\r\n  padding: 20px;\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n  background-color: #0e0e0e;\r\n}\r\n\r\n.topnavmarginleft[_ngcontent-%COMP%] {\r\n  margin-left: -30px;\r\n}\r\n\r\n.active-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background-color: #3466f6;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWjt1QkFDcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxudWwgbGkgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC8qIG1hcmdpbjogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDs7ICovXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMjJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wY3Rnc2NvcmUge1xyXG4gIG1hcmdpbjogMTdweDtcclxufVxyXG5cclxuI2NvbGxhcHNpYmxlTmF2YmFyIHVsIGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5hdi1saW5rOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxMDIsIDI0NiwgMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNjFweDtcclxuICAvKiBoZWlnaHQ6IDI4cHg7ICovXHJcbiAgLyogcGFkZGluZzogMjBweCAyMHB4IDI4cHggMTBweDsgKi9cclxuICAvKiBwYWRkaW5nOiAyMHB4IDI3cHggMjVweCAxNXB4OyAqL1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgcGFkZGluZzogMjBweCAyN3B4IDI1cHggMTVweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNDY2ZjY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmVmZjtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRyIHRoIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIC8qIG1hcmdpbi10b3A6IDNweDsgKi9cclxuICAvKiBtYXJnaW4tYm90dG9tOiAzcmVtOyAqL1xyXG4gIG1hcmdpbjogMTZweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi8qIC5kaWdpdHtcclxuICBjb2xvcjogI0I1MDAwMDtcclxufVxyXG5cclxuLmRpZ2l0MXtcclxuICBjb2xvcjogIzAzOUQwMDtcclxuXHJcbn0gKi9cclxuXHJcbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zbmF2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc25mb250IHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDFweDtcclxufVxyXG5cclxudWxbX25nY29udGVudC12eGgtYzE4XSBsaVtfbmdjb250ZW50LXZ4aC1jMThdIGFbX25nY29udGVudC12eGgtYzE4XSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGUwZTtcclxufVxyXG5cclxuLnRvcG5hdm1hcmdpbmxlZnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDY2ZjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio-score/portfolio-score.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/portfolio-score/portfolio-score.component.ts ***!
    \**************************************************************/

  /*! exports provided: PortfolioScoreComponent */

  /***/
  function srcAppPortfolioScorePortfolioScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioScoreComponent", function () {
      return PortfolioScoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tooltip.directive */
    "./src/app/tooltip.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        "color": a0
      };
    };

    function PortfolioScoreComponent_div_10_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PortfolioScoreComponent_div_10_ng_container_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);

          var items_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return items_r142["aggregate_score"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, items_r142["aggregate_score_type"] === "Negative" ? "#b50000" : items_r142["aggregate_score_type"] === "Positive" ? "#039d00" : "black"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r142["aggregate_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", items_r142["aggregate_score_type"], " Outlook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", items_r142["aggregate_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Aggregate score: ", items_r142["aggregate_score"], "");
      }
    }

    function PortfolioScoreComponent_div_10_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", items_r142["positiveSentScore"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" for ", items_r142["positiveAumPct"], "", items_r142["pct_type"], " of AUM ");
      }
    }

    function PortfolioScoreComponent_div_10_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var items_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r142["negativeSentScore"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" for ", items_r142["negativeAumPct"], "", items_r142["pct_type"], " of AUM ");
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "bottom": a0,
        "text-align": a1
      };
    };

    function PortfolioScoreComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioScoreComponent_div_10_ng_container_1_Template, 17, 7, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioScoreComponent_div_10_ng_container_2_Template, 4, 3, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioScoreComponent_div_10_ng_container_3_Template, 4, 3, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r142 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, items_r142["positiveSentScore"] ? "0px" : items_r142["negativeSentScore"] ? "5px" : "-7px", items_r142["positiveSentScore"] || items_r142["negativeSentScore"] ? "center" : ""))("ngClass", items_r142["aggregate_score"] ? "pr-0" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r142["aggregate_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r142["positiveSentScore"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r142["negativeSentScore"]);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled-field": a0
      };
    };

    var _c3 = function _c3(a0, a1) {
      return {
        "background": a0,
        "border": a1
      };
    };

    function PortfolioScoreComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r152 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, !items_r152["esg_score"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r152["esg_score"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c3, items_r152["esg_score"] > 0 ? "lightgray" : "white", items_r152["esg_score"] > 0 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c3, items_r152["esg_score"] > 10 ? "#fbe7c1" : "white", items_r152["esg_score"] > 10 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c3, items_r152["esg_score"] > 20 ? "#f9d083" : "white", items_r152["esg_score"] > 20 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c3, items_r152["esg_score"] > 30 ? "#fbc35b" : "white", items_r152["esg_score"] > 30 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c3, items_r152["esg_score"] > 40 ? "orange" : "white", items_r152["esg_score"] > 40 ? "" : "lightgray 1px solid"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", items_r152["esg_label"], " ESG Risk");
      }
    }

    function PortfolioScoreComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r141.clientName.split(" ")[0], "'s Risk Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r141.profileName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r141.profileDescription, " ");
      }
    }

    var PortfolioScoreComponent =
    /*#__PURE__*/
    function () {
      function PortfolioScoreComponent() {
        _classCallCheck(this, PortfolioScoreComponent);
      }

      _createClass(PortfolioScoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // if (this.riskProfileObj) {
          this.profileDescription = this.riskProfileObj["Risk_Profile_Desc"];
          this.profileName = this.riskProfileObj["risk_profile_name"]; // }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // if (this.riskProfileObj) {
          this.profileDescription = this.riskProfileObj["Risk_Profile_Desc"];
          this.profileName = this.riskProfileObj["risk_profile_name"]; // }
        }
      }]);

      return PortfolioScoreComponent;
    }();

    PortfolioScoreComponent.ɵfac = function PortfolioScoreComponent_Factory(t) {
      return new (t || PortfolioScoreComponent)();
    };

    PortfolioScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioScoreComponent,
      selectors: [["app-portfolio-score"]],
      inputs: {
        portfolioScore: "portfolioScore",
        riskProfileObj: "riskProfileObj",
        clientName: "clientName"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 30,
      vars: 3,
      consts: [[1, "row", 2, "flex-wrap", "unset"], [1, "card", "text-white", "col-4", 2, "background-color", "#007bff85", "margin-right", "15px"], [1, "card-body", "flex-column"], [1, "row"], [1, "col-12"], [2, "font-size", "16px", "font-weight", "600"], ["tooltip", "Displays portion of portfolio that has positive and negative sentiment", "placement", "right", "delay", "500", 1, "fa", "fa-info-circle", "pl-3"], ["class", "col-12", "style", " font-size: 15px;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "col-4", "card", 2, "background-color", "#1c59a059", "color", "white", "margin-right", "15px"], [1, "card-body"], [1, "mytooltip", "tooltip-effect-1"], [1, "fa", "fa-info-circle", "pl-3", "tooltip-item"], [1, "tooltip-content", "clearfix", 2, "color", "black", "text-align", "center"], ["src", "assets/images/ESG_Image.png", 2, "width", "100%", "height", "56px"], [2, "font-size", "12px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", 2, "background-color", "#007bff82", "color", "white", "width", "315px"], ["class", "card-body mb-3", 4, "ngIf"], [1, "col-12", 2, "font-size", "15px", 3, "ngStyle", "ngClass"], [4, "ngIf"], [2, "font-weight", "900", 3, "ngStyle"], [2, "color", "black"], [1, "slidecontainer", "tooltip", 2, "opacity", "1"], ["type", "range", "min", "-1.000", "max", "1.000", "step", "0.001", "alt", "text", "id", "myRange", "disabled", "", 1, "slider", 3, "ngModel", "ngModelChange"], [1, "tooltiptext"], [1, "range-labels"], [1, "green"], [1, "red"], [3, "ngClass"], [1, "main-div", 2, "margin-top", "25px"], [1, "col-div", 2, "font-size", "17px"], [1, "col-div", 3, "ngStyle"], [2, "font-size", "17px"], [1, "card-body", "mb-3"], [1, "card-title", "client-title", 2, "color", "white"], [1, "blue-text", 2, "color", "white"], [1, "description", "pt-4"]],
      template: function PortfolioScoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PORTFOLIO SENTIMENT SCORE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PortfolioScoreComponent_div_10_Template, 4, 8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ESG SCORE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ESG Risk Scores assess the degree to which a company's enterprise business value is at risk driven by environmental, social and governance issues. The final ESG Risk Scores are a measure of unmanaged risk on an absolute scale of 0-100, with a lower score signaling less unmanaged ESG Risk.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PortfolioScoreComponent_div_25_Template, 11, 25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PortfolioScoreComponent_div_28_Template, 7, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioScore);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioScore);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.riskProfileObj);
        }
      },
      directives: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.tooltip-example[_ngcontent-%COMP%]   [tooltip][_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n\r\n.ng-tooltip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  max-width: 200px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  color: #f8f8f2;\r\n  padding: 3px;\r\n  background: #282a36;\r\n  border-radius: 4px;\r\n  z-index: 1000;\r\n  opacity: 0;\r\n}\r\n\r\n.ng-tooltip[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-style: solid;\r\n}\r\n\r\n\r\n\r\n.ng-tooltip-right[_ngcontent-%COMP%]:after {\r\n  top: 50%;\r\n  right: 100%;\r\n  margin-top: -5px;\r\n  border-width: 5px;\r\n  border-color: transparent black transparent transparent;\r\n}\r\n\r\n.ng-tooltip-show[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n.line-height-2[_ngcontent-%COMP%] {\r\n  line-height: 2;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n  \r\n  color: #b50000;\r\n  font-weight: 900;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  color: #039d00;\r\n  font-weight: 900;\r\n}\r\n\r\n\r\n\r\n.slidecontainer[_ngcontent-%COMP%] {\r\n  width: 94%;\r\n  top:3px;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n  width: 106%;\r\n  height: 6px;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(0, 128, 0, 0.7)) !important;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  transition: opacity .2s;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]:hover {\r\n   background-image: linear-gradient(to right, rgba(255, 0, 0, 1), rgba(0, 128, 0, 1));\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 10px;\r\n  background-color: hsl(50, 100%, 50%);\r\n  overflow: visible;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\r\n  width: 23px;\r\n  height: 24px;\r\n  border: 0;\r\n  background: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 150%;\r\n  left: 51%;\r\n  margin-left: -60px;\r\n  font-size: 10px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: black transparent transparent transparent;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.range-labels[_ngcontent-%COMP%] {\r\n  margin: 18px -56px 0;\r\n  padding: 0;\r\n  padding-top: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.range-labels[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 131.3px;\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  top: -22px;\r\n}\r\n\r\n.main-div[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-align:center;\r\n  font-size: 12px;\r\n}\r\n\r\n.col-div[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n  height: 37px;\r\n  display:inline-block;\r\n}\r\n\r\n.disabled-field[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    display: none;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    position: relative;\r\n    z-index: 999\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-weight: 500;\r\n    padding: 0 0px\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    width: 554px;\r\n    left: 50%;\r\n    margin: 0 0 8px -272px;\r\n    border-radius: 8px;\r\n    bottom: 100%;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    line-height: 19px;\r\n    box-shadow: -5px -5px 15px rgba(48, 54, 61, 0.2);\r\n    background: white;\r\n    opacity: 0;\r\n    cursor: default;\r\n    pointer-events: none\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    top: 100%;\r\n    left: 50%;\r\n    border: solid transparent;\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: white transparent transparent;\r\n    border-width: 10px;\r\n    margin-left: -10px\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    float: left;\r\n    margin-right: 1em\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-item[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 360px;\r\n    height: 20px;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    pointer-events: none;\r\n    transform: translateX(-50%)\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .tooltip-item[_ngcontent-%COMP%]::after {\r\n    pointer-events: auto\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .tooltip-content[_ngcontent-%COMP%] {\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg)\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .tooltip-content2[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    font-size: 18px\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .tooltip-text[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    display: block;\r\n    padding: 1.31em 1.21em 1.21em 0;\r\n    color: #fff\r\n}\r\n\r\n.client-title[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  \r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #999999;\r\n}\r\n\r\n.blue-text[_ngcontent-%COMP%] {\r\n  color: #3466F6;\r\n  \r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-top:13px;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  \r\n  font-size: 15px;\r\n  font-weight: 400;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLXNjb3JlL3BvcnRmb2xpby1zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtFQUNFLFFBQVE7RUFDUixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUNBLGNBQWM7O0FBQ2Q7RUFDRSxVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0dBQWtHO0VBQ2xHLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtHQUNHLG1GQUFtRjtBQUN0Rjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFFakIsZ0RBQWdEO0lBQ2hELGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxvQkFBb0I7SUFFcEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUVWO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLCtCQUErQjtJQUMvQjtBQUNKOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBOzs7OztHQUtHIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvLXNjb3JlL3BvcnRmb2xpby1zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udG9vbHRpcC1leGFtcGxlIFt0b29sdGlwXSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4ubmctdG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2Y4ZjhmMjtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogIzI4MmEzNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5uZy10b29sdGlwOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbi8qIC5uZy10b29sdGlwLXRvcDphZnRlciB7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uZy10b29sdGlwLWJvdHRvbTphZnRlciB7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50O1xyXG59ICovXHJcblxyXG4ubmctdG9vbHRpcC1yaWdodDphZnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmctdG9vbHRpcC1zaG93IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5saW5lLWhlaWdodC0yIHtcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgLyogY29sb3I6ICNlMDQzNDM7ICovXHJcbiAgY29sb3I6ICNiNTAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiAjMDM5ZDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuLypzbGlkZXIgY29kZSovXHJcbi5zbGlkZWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk0JTtcclxuICB0b3A6M3B4O1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICB3aWR0aDogMTA2JTtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMCwgMCwgMC43KSwgcmdiYSgwLCAxMjgsIDAsIDAuNykpICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uc2xpZGVyOmhvdmVyIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMCwgMCwgMSksIHJnYmEoMCwgMTI4LCAwLCAxKSk7XHJcbn1cclxuXHJcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDUwLCAxMDAlLCA1MCUpO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDE1MCU7XHJcbiAgbGVmdDogNTElO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5yYW5nZS1sYWJlbHMge1xyXG4gIG1hcmdpbjogMThweCAtNTZweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ucmFuZ2UtbGFiZWxzIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEzMS4zcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogLTIycHg7XHJcbn1cclxuXHJcbi5tYWluLWRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbC1kaXYge1xyXG4gIHdpZHRoOiAxNiU7XHJcbiAgaGVpZ2h0OiAzN3B4O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcbi5kaXNhYmxlZC1maWVsZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm15dG9vbHRpcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTlcclxufVxyXG5cclxuLm15dG9vbHRpcCAudG9vbHRpcC1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAwIDBweFxyXG59XHJcblxyXG4ubXl0b29sdGlwIC50b29sdGlwLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHdpZHRoOiA1NTRweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbjogMCAwIDhweCAtMjcycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggLTVweCAxNXB4IHJnYmEoNDgsIDU0LCA2MSwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IC01cHggLTVweCAxNXB4IHJnYmEoNDgsIDU0LCA2MSwgMC4yKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbn1cclxuXHJcbi5teXRvb2x0aXAgLnRvb2x0aXAtY29udGVudDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHhcclxufVxyXG5cclxuLm15dG9vbHRpcCAudG9vbHRpcC1jb250ZW50IGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW1cclxufVxyXG5cclxuLm15dG9vbHRpcCAudG9vbHRpcC1pdGVtOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcclxufVxyXG5cclxuLm15dG9vbHRpcDpob3ZlciAudG9vbHRpcC1pdGVtOjphZnRlciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0b1xyXG59XHJcblxyXG4ubXl0b29sdGlwOmhvdmVyIC50b29sdGlwLWNvbnRlbnQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDAsIDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAwLCAwZGVnKVxyXG59XHJcblxyXG4ubXl0b29sdGlwOmhvdmVyIC50b29sdGlwLWNvbnRlbnQyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE4cHhcclxufVxyXG5cclxuLm15dG9vbHRpcCAudG9vbHRpcC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxLjMxZW0gMS4yMWVtIDEuMjFlbSAwO1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG4uY2xpZW50LXRpdGxlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIC8qIGZvbnQtc2l6ZTogMS4xMXZ3OyAqL1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbi5ibHVlLXRleHQge1xyXG4gIGNvbG9yOiAjMzQ2NkY2O1xyXG4gIC8qIGZvbnQtc2l6ZTogMS41dnc7ICovXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDoxM3B4O1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgLyogZm9udC1zaXplOiAxLjA1dnc7ICovXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLyogLmNhcmQtYm9keSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0gKi9cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio-score',
          templateUrl: './portfolio-score.component.html',
          styleUrls: ['./portfolio-score.component.css']
        }]
      }], function () {
        return [];
      }, {
        portfolioScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        riskProfileObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clientName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/portfolio/portfolio.component.ts ***!
    \**************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PortfolioComponent_ng_container_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STOCK ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PortfolioComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r84.clientMostImpactedByStock);
      }
    }

    function PortfolioComponent_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select stock from graph above to view impact to each client");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PortfolioComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "highcharts-chart", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_ng_template_26_Template_highcharts_chart_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.onPointSelect($event);
        })("updateChange", function PortfolioComponent_ng_template_26_Template_highcharts_chart_updateChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.updateFlagstock = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r87.Highcharts)("options", ctx_r87.chartOptionsstockgraph)("update", ctx_r87.updateFlagstock)("oneToOne", true);
      }
    }

    function PortfolioComponent_ng_container_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEWS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PortfolioComponent_ng_container_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("NEWS RELATED TO ", ctx_r89.clientMostImpactedByStock, " ");
      }
    }

    function PortfolioComponent_i_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_i_39_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.mySortNews("date");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioComponent_i_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_i_40_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.mySortNews("date");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioComponent_i_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_i_45_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r102.mySortNews("sentiment");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioComponent_i_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_i_46_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.mySortNews("sentiment");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioComponent_div_48_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r107 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", items_r107.URL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r107.Article_Desc, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", items_r107.Source_Name, " | ", items_r107.date_str_1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", items_r107.Sentiment_score, " ");
      }
    }

    function PortfolioComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioComponent_div_48_div_1_Template, 12, 5, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r94.newsDetails);
      }
    }

    var PortfolioComponent =
    /*#__PURE__*/
    function () {
      function PortfolioComponent(myservice) {
        var _this20 = this;

        _classCallCheck(this, PortfolioComponent);

        this.myservice = myservice;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.myCategory = [];
        this.myData = [];
        this.clientMostImpactedGraphs = false;
        this.clientMostImpactedByStock = "";
        this.newsdatesortby = false;
        this.newsoccuranceerror = false;
        this.chartOptionsstockgraph = {
          chart: {
            type: "column",
            borderRadius: 9
          },
          lang: {
            thousandsSep: ','
          },
          title: {
            text: ""
          },
          subtitle: {
            text: ""
          },
          legend: {
            enabled: false
          },
          // tooltip: {
          //     useHTML: true,
          //     borderColor: "black",
          //     backgroundColor: "black",
          //     borderWidth: 1,
          //     formatter(): string {
          //         return "" + this.x + " " + ": " + "$" + this.y.toLocaleString() + "" + this.point['ticker'];
          //     },
          //     style: {
          //         color: "white",
          //     },
          // },
          // tooltip: {
          //     backgroundColor: "black",
          //     shared: true,
          //     useHTML: true,
          //     headerFormat: "<b>{point.key}</b><table>",
          //     pointFormat:
          //         // "<tr><td>{series.name}: </td>" +
          //         // '<td style="text-align: right"><b>{point.y} </b></td></tr>' +
          //         '<tr><td><b>{point.ticker} </b></td></tr>',
          //     footerFormat: "</table>",
          //     valueDecimals: 2,
          //     borderColor: "transparent",
          //     style: {
          //         color: "white",
          //     },
          // },
          tooltip: {
            backgroundColor: "black",
            useHTML: true,
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '{point.y:,.0f}',
            shared: true,
            style: {
              color: "white"
            }
          },
          xAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          yAxis: {
            gridLineWidth: 0,
            labels: {
              formatter: function formatter() {
                return "$" + this.value.toLocaleString();
              }
            },
            title: {
              text: ""
            },
            lineWidth: 1,
            stackLabels: {
              style: {
                color: "black"
              },
              enabled: false,
              verticalAlign: "middle"
            }
          },
          plotOptions: {
            series: {},
            column: {
              maxPointWidth: 15,
              stacking: "normal",
              pointPadding: 0,
              groupPadding: 0,
              dataLabels: {
                enabled: false
              }
            }
          },
          series: [],
          credits: {
            enabled: false
          }
        };
        this.chartOptions = {
          title: {
            text: ""
          },
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
                },
                yAxis: {
                  labels: {
                    align: 'left',
                    x: 0,
                    y: -5
                  },
                  title: {
                    text: null
                  }
                },
                subtitle: {
                  text: null
                },
                credits: {
                  enabled: false
                }
              }
            }]
          },
          chart: {// width: '80%'
          },
          subtitle: {
            text: ""
          },
          legend: {
            enabled: false
          },
          xAxis: {
            categories: this.myCategory
          },
          yAxis: {
            softMax: 1,
            softMin: -1,
            min: -1,
            max: 1,
            gridLineWidth: 0,
            // labels: {
            //     formatter(): string {
            //         //   return '' + this.value.toLocaleString();
            //         const myL =
            //             Math.abs(parseFloat(this.value.toString())) === 0 ||
            //                 Math.abs(parseFloat(this.value.toString())) === 1
            //                 ? this.value.toLocaleString()
            //                 : "";
            //         return "" + myL;
            //     },
            // },
            labels: {
              rotation: 0,
              align: "center",
              // x:0,
              style: {
                //  wordBreak: 'break-all',
                textOverflow: 'none',
                whiteSpace: 'nowrap'
              },
              formatter: function formatter() {
                if (this.value === 1) {
                  return '+' + this.value + '<br>POSITIVE<br>SENTIMENT';
                } else if (this.value === -1) {
                  return this.value + '<br>NEGATIVE<br>SENTIMENT';
                } else if (this.value === 0) return '0';
              }
            },
            title: {
              text: ""
            },
            lineWidth: 1,
            stackLabels: {
              style: {
                color: "black"
              },
              enabled: false,
              verticalAlign: "middle"
            }
          },
          tooltip: {
            backgroundColor: "black",
            shared: true,
            useHTML: true,
            headerFormat: "<b>{point.key}</b><table>",
            pointFormat: "<tr><td>{series.name}: </td>" + '<td style="text-align: right"><b>{point.y} </b></td></tr>' + "<tr><td>% Change: </td>" + '<td><b>{point.change}% </b></td></tr>' + "<tr><td>ESG: </td>" + '<td><b>{point.esg} </b></td></tr>',
            footerFormat: "</table>",
            valueDecimals: 2,
            borderColor: "transparent",
            style: {
              color: "white"
            }
          },
          plotOptions: {
            series: {
              point: {
                events: {
                  click: function click(event) {
                    // alert('Category: ' + event.point.category + ', value: ' + event.y);
                    _this20.getClientStock(event.point.category);
                  }
                }
              }
            }
          },
          series: [{
            name: "Sentiment",
            type: "bar",
            pointWidth: 10,
            data: this.myData
          }],
          credits: {
            enabled: false
          }
        };
      }

      _createClass(PortfolioComponent, [{
        key: "mySortBy",
        value: function mySortBy(field, desc) {
          return function (a, b) {
            return desc === "desc" ? Number(Number(a[field]) < Number(b[field])) - Number(Number(a[field]) > Number(b[field])) : Number(Number(a[field]) > Number(b[field])) - Number(Number(a[field]) < Number(b[field]));
          };
        }
      }, {
        key: "mySortByNews",
        value: function mySortByNews(field, desc) {
          return function (a, b) {
            return desc === "desc" ? new Date(b[field]).getTime() - new Date(a[field]).getTime() : new Date(a[field]).getTime() - new Date(b[field]).getTime();
          };
        }
      }, {
        key: "mySortNews",
        value: function mySortNews(field) {
          var sorton = "";
          var sortby = "";

          if (field === "date") {
            sorton = "Article_TimeStamp";
            this.newsdatesortby = !this.newsdatesortby;
            sortby = this.newsdatesortby ? "desc" : "asc";
            this.newsDetails.sort(this.mySortByNews(sorton, sortby));
          } else if (field === "sentiment") {
            sorton = "Sentiment_score";
            this.newssentimentsortby = !this.newssentimentsortby;
            sortby = this.newssentimentsortby ? "desc" : "asc";
            this.newsDetails.sort(this.mySortBy(sorton, sortby));
          }
        }
      }, {
        key: "getClientStock",
        value: function getClientStock(ticker) {
          var _this21 = this;

          // alert(ticker)
          document.querySelector("#impactgraph").scrollIntoView();
          this.clientMostImpactedByStock = "";
          this.clientMostImpactedGraphs = false;

          var _mySecurity = [].concat(_toConsumableArray(this.positvenegativeDetails["top"]), _toConsumableArray(this.positvenegativeDetails["bottom"])).find(function (p) {
            return p.Ticker === ticker;
          }); // alert(mySecurity);


          var mySecurity = _mySecurity && _mySecurity.SecurityID || "";

          if (_mySecurity) {
            this.myservice.getMarketSentimentByClient(1, mySecurity).subscribe(function (data) {
              _this21.marketsentimentclientDetails = data["data"];

              var marketsentimentcategory = _this21.marketsentimentclientDetails.map(function (p) {
                return p.clientName;
              });

              var marketsentimentdata1 = _this21.marketsentimentclientDetails.map(function (p) {
                var _t = {};
                _t["y"] = Number.parseFloat(p.sec_mkt_val.replace(/,/g, ""));
                _t["ticker"] = p.ticker; // _t["stockPercent"] = p.particularStkPct;

                return _t;
              });

              var marketsentimentdata2 = _this21.marketsentimentclientDetails.map(function (p) {
                var _t = {};
                _t["y"] = Number.parseFloat(p.tot_mkt_val.replace(/,/g, ""));
                _t["ticker"] = p.ticker;
                _t["stockPercent"] = p.particularStkPct;
                _t["symbol"] = p.currency_symbol;
                return _t; // return Number.parseFloat(p.tot_mkt_val.replace(/,/g, ""));
                // return Number.parseFloat(p.sec_mkt_val.replace(/,/g, '')) + 50;;
              });

              var myData;
              var data1 = {
                data: marketsentimentdata1,
                color: "blue",
                // name: "series2Test",
                keys: ['y', 'ticker'],
                tooltip: {
                  pointFormat: ''
                }
              };
              var data2 = {
                data: marketsentimentdata2,
                color: "darkgray",
                tooltip: {
                  pointFormat: '{point.ticker} stock: {point.stockPercent}% of portfolio<br>Total Portfolio: {point.symbol}{point.y:,.0f}'
                }
              };
              data2["data"] = marketsentimentdata2;
              data2["color"] = "darkgray";
              var tmydata = [];
              tmydata.push(data2);
              tmydata.push(data1);
              var finaldata = [];
              finaldata.push({
                // name: 'second last',
                data: tmydata
              });
              _this21.chartOptionsstockgraph.series = tmydata;
              _this21.chartOptionsstockgraph.xAxis["categories"] = marketsentimentcategory;
              _this21.updateFlagstock = true;
              _this21.clientMostImpactedGraphs = true;
              _this21.clientMostImpactedByStock = ticker;
            });
          }

          this.myservice.NewsData(1, mySecurity.toString(), 'date').subscribe(function (data) {
            _this21.newsoccuranceerror = false;
            _this21.newsDetails = data["data"];

            _this21.newsDetails.sort(_this21.mySortBy('Sentiment_score', 'asc'));
          }, function (error) {
            // this.errors = error;
            _this21.newsoccuranceerror = true; // alert(error)
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.myservice.getClientholding(1, 'negSentScore', 'asc').subscribe(function (data) {
            _this22.clientholdingdetails = data["data"];
          });
          highcharts__WEBPACK_IMPORTED_MODULE_1__["setOptions"]({
            lang: {
              thousandsSep: ','
            }
          });
          this.myservice.NewsData(1, "", 'date').subscribe(function (data) {
            _this22.newsoccuranceerror = false;
            _this22.newsDetails = data["data"];

            _this22.newsDetails.sort(_this22.mySortBy('Sentiment_score', 'asc'));
          });
          this.myservice.getPositveNegative(1).subscribe(function (data) {
            _this22.positvenegativeDetails = data["data"]; // var myData=  this.positvenegativeDetails["top"].map(p=>{
            //   return(p.sent_score)
            //  })
            //  myData = [...myData, ... this.positvenegativeDetails["bottom"].map(p=>{
            //   return(p.sent_score)
            //  })]

            var myData = _this22.positvenegativeDetails["top"].map(function (p) {
              var _t = {};
              _t["y"] = p.sent_score;
              _t["color"] = "#039D00";
              _t["change"] = p.priceChangePct;
              _t["esg"] = p.esg_score;
              return _t;
            });

            myData = [].concat(_toConsumableArray(myData), _toConsumableArray(_this22.positvenegativeDetails["bottom"].map(function (p) {
              var _t = {};
              _t["y"] = p.sent_score;
              _t["color"] = "#B50000";
              _t["change"] = p.priceChangePct;
              _t["esg"] = p.esg_score;
              return _t;
            })));

            var myCategory = _this22.positvenegativeDetails["top"].map(function (p) {
              return p.Ticker;
            });

            myCategory = [].concat(_toConsumableArray(myCategory), _toConsumableArray(_this22.positvenegativeDetails["bottom"].map(function (p) {
              return p.Ticker;
            })));
            var finaldata = [];
            finaldata.push({
              data: myData
            });
            _this22.myData = myData;
            _this22.myCategory = myCategory;
            _this22.chartOptions.series = finaldata;
            _this22.chartOptions.xAxis["categories"] = myCategory;
            _this22.updateFlag = true;
          });
        }
      }, {
        key: "onPointSelect",
        value: function onPointSelect(event) {
          var data = this.clientholdingdetails.filter(function (e) {
            return e.name === event.point.category;
          })[0];
          this.onRowClick(data);
        }
      }, {
        key: "onRowClick",
        value: function onRowClick(clientItem) {
          this.myservice.navigateToClientPortfolio(clientItem);
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]));
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 49,
      vars: 15,
      consts: [[1, "container"], [1, "row", 2, "width", "101.2%"], [1, "col-12"], [1, "card", 2, "top", "-12px"], [1, "card-header", "card", "bg-primary", "text-white"], [1, "row"], [1, "col-9", "portfoliotext"], [1, "col-3", "clrfiltertext"], [2, "color", "white", "cursor", "pointer", "float", "right", 3, "click"], [1, "card-body"], [1, "font-18"], [2, "text-align", "-webkit-center"], [2, "width", "90%", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "updateChange"], [1, "col-6"], ["id", "impactgraph", 1, "ml-4", "font-18"], [4, "ngIf", "ngIfElse"], ["stockName", ""], [1, "ml-2"], ["impactedGraphs", ""], [1, "col-6", "pb-4"], [4, "ngIf"], [1, "col-9", 2, "font-size", "14px", "color", "#999999"], [2, "font-size", "12px", "color", "#999999"], [2, "color", "black"], ["class", "fa fa-caret-down", "style", "cursor: pointer", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "fa fa-caret-up", "style", "cursor: pointer", "aria-hidden", "true", 3, "click", 4, "ngIf"], [1, "col-3"], ["class", "scrollable fixed-height scrollbar-light-blue", 4, "ngIf"], ["src", "assets/images/circle_logo.png", "alt", "no pic", 1, "cir", "pt-5"], [2, "color", "#A1ACCB", "font-size", "18px", "margin-right", "auto", "margin-left", "auto", "text-align", "-webkit-center", "width", "50%"], ["id", "show", 1, "design", 2, "width", "100%", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "click", "updateChange"], ["aria-hidden", "true", 1, "fa", "fa-caret-down", 2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-up", 2, "cursor", "pointer", 3, "click"], [1, "scrollable", "fixed-height", "scrollbar-light-blue"], [4, "ngFor", "ngForOf"], [1, "col-8"], ["target", "_blank", 3, "href"], [1, "sfont"], [2, "color", "#999999", "font-size", "14px"], [1, "col-3", "sfont", "text-right"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Portfolio Impact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_a_click_9_listener() {
            return ctx.getClientStock("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CLEAR ALL FILTERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "STOCKS WITH MOST POSITIVE AND MOST NEGATIVE SENTIMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "highcharts-chart", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function PortfolioComponent_Template_highcharts_chart_updateChange_16_listener($event) {
            return ctx.updateFlag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " CLIENT MOST IMPACTED BY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PortfolioComponent_ng_container_21_Template, 2, 0, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PortfolioComponent_ng_template_22_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PortfolioComponent_ng_container_25_Template, 4, 0, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PortfolioComponent_ng_template_26_Template, 1, 4, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PortfolioComponent_ng_container_30_Template, 2, 0, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PortfolioComponent_ng_container_31_Template, 2, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "HEADLINES \xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "BY DATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PortfolioComponent_i_39_Template, 1, 0, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PortfolioComponent_i_40_Template, 1, 0, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "SENTIMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PortfolioComponent_i_45_Template, 1, 0, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PortfolioComponent_i_46_Template, 1, 0, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, PortfolioComponent_div_48_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.updateFlag)("oneToOne", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientMostImpactedByStock == "")("ngIfElse", _r83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientMostImpactedGraphs == false)("ngIfElse", _r86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientMostImpactedByStock == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientMostImpactedByStock != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newsdatesortby);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsdatesortby);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newssentimentsortby);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newssentimentsortby);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newsoccuranceerror);
        }
      },
      directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  \r\n}\r\n\r\n.sfont[_ngcontent-%COMP%] {\r\n  \r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 13.5px;\r\n  line-height: 18px;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n  height: 55px;\r\n}\r\n\r\n.align[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 65px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  margin-left: 300px;\r\n}\r\n\r\n.cir[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: block;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  margin-left: 85%;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  width: calc(100% - 7px);\r\n}\r\n\r\n\r\n\r\n.form-elegant[_ngcontent-%COMP%], .form-dark[_ngcontent-%COMP%] {\r\n  \r\n  height: 285px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 7px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]:hover {\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%] {\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  max-height: 350px;\r\n  height: 350px;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%] {\r\n  scrollbar-color: #82b1ff #f5f5f5;\r\n}\r\n\r\n.fixed-height[_ngcontent-%COMP%] {\r\n  width: calc(100% - 7px);\r\n}\r\n\r\n\r\n\r\n.portfoliotext[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 24px;\r\n  line-height: 30px;\r\n}\r\n\r\n.clrfiltertext[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  margin-top: 8px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  border-bottom-right-radius: 0px !important;\r\n  border-bottom-left-radius: 0px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7O21DQUdpQztFQUNqQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7O0VBRWpCLGVBQWU7QUFDakI7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyw2Q0FBNkM7RUFDN0MsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztLQUdLOztBQUVMO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLHNCQUFzQjs7QUFFdEI7O0VBRUUsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDBCQUEwQjs7QUFFMUI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgLyogbWFyZ2luOiAyMHB4OyAqL1xyXG59XHJcblxyXG4uc2ZvbnQge1xyXG4gIC8qIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvOyAqL1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIC5TZm9udHtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgIFxyXG4gICAgXHJcbn0gKi9cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4uYWxpZ24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDY1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnNpZGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxufVxyXG5cclxuLmNpciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBtYXJnaW4tbGVmdDogODUlO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLyogLmNhcmQtYm9keXtcclxuICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9ICovXHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gN3B4KTtcclxufVxyXG5cclxuLypzaWRlIHNjcm9sbCBiYXIgY3NzKi9cclxuXHJcbi5mb3JtLWVsZWdhbnQsXHJcbi5mb3JtLWRhcmsge1xyXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICBoZWlnaHQ6IDI4NXB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItbGlnaHQtYmx1ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLnNjcm9sbGJhci1saWdodC1ibHVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZTpob3ZlciB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNjcm9sbGFibGUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1saWdodC1ibHVlIHtcclxuICBzY3JvbGxiYXItY29sb3I6ICM4MmIxZmYgI2Y1ZjVmNTtcclxufVxyXG5cclxuLmZpeGVkLWhlaWdodCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDdweCk7XHJcbn1cclxuXHJcbi8qc2lkZSBzY3JvbGwgYmFyIGNzcyBlbmQqL1xyXG5cclxuLnBvcnRmb2xpb3RleHQge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNscmZpbHRlcnRleHQge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-portfolio",
          templateUrl: "./portfolio.component.html",
          styleUrls: ["./portfolio.component.css"]
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recommendedaction/recommendedaction.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/recommendedaction/recommendedaction.component.ts ***!
    \******************************************************************/

  /*! exports provided: RecommendedactionComponent */

  /***/
  function srcAppRecommendedactionRecommendedactionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendedactionComponent", function () {
      return RecommendedactionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function RecommendedactionComponent_tr_38_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r118 = ctx.$implicit;

        var items_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r118.ActionTypeID)("selected", option_r118.Action_type_Name == items_r116.Default_action_type_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r118.Action_type_Name, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        color: a0
      };
    };

    function RecommendedactionComponent_tr_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecommendedactionComponent_tr_38_option_13_Template, 2, 3, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_tr_38_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

          var items_r116 = ctx.$implicit;

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142);

          return ctx_r120.open(_r114, items_r116);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Take Action ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r116 = ctx.$implicit;

        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r116.ticker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", items_r116.currency_symbol, "", items_r116.LastPrice, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, items_r116.color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r116.priceChangePct, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r116.Sentiment_score, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r116.esg_score, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r108.getRecommActionInMarket);
      }
    }

    function RecommendedactionComponent_tr_57_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r124 = ctx.$implicit;

        var items_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r124.ActionTypeID)("selected", option_r124.Action_type_Name == items_r122.Default_action_type_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r124.Action_type_Name, " ");
      }
    }

    function RecommendedactionComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecommendedactionComponent_tr_57_option_13_Template, 2, 3, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_tr_57_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

          var items_r122 = ctx.$implicit;

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](142);

          return ctx_r126.open(_r114, items_r122);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Take Action ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r122 = ctx.$implicit;

        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r122.ticker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", items_r122.currency_symbol, "", items_r122.LastPrice, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, items_r122.color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r122.priceChangePct, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r122.Sentiment_score, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r122.esg_score, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r109.getRecommAction);
      }
    }

    function RecommendedactionComponent_tr_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r128 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r128.ticker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, items_r128.textColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r128.priceChangePct, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", items_r128.currency_symbol, "", items_r128.lastprice, " ");
      }
    }

    function RecommendedactionComponent_tr_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r129 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r129.ticker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, items_r129.textColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r129.priceChangePct, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", items_r129.currency_symbol, "", items_r129.lastprice, " ");
      }
    }

    function RecommendedactionComponent_tr_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r130 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r130.ticker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, items_r130.textColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r130.priceChangePct, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", items_r130.currency_symbol, "", items_r130.lastprice, " ");
      }
    }

    function RecommendedactionComponent_tr_140_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r131 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r131.ticker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, items_r131.textColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", items_r131.priceChangePct, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", items_r131.currency_symbol, "", items_r131.lastprice, " ");
      }
    }

    function RecommendedactionComponent_ng_template_141_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Take Action for : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Redirecting on OMS Page\u2026");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_ng_template_141_Template_button_click_11_listener() {
          var modal_r132 = ctx.$implicit;
          return modal_r132.dismiss("cancel click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_ng_template_141_Template_button_click_13_listener() {
          var modal_r132 = ctx.$implicit;
          return modal_r132.close("Ok click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Ok ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Recommended Action - ", ctx_r115.modalRow.ticker, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r115.modalRow.ticker, "");
      }
    }

    var RecommendedactionComponent =
    /*#__PURE__*/
    function () {
      function RecommendedactionComponent(myservice, modalService) {
        _classCallCheck(this, RecommendedactionComponent);

        this.myservice = myservice;
        this.modalService = modalService;
        this.shortClassTicker = "";
        this.shortClassLP = "";
        this.shortClassChange = "";
        this.shortClassSentiment = "headerSortUp";
        this.shortClassAction = "";
        this.shortClassChangeP = "headerSortUp";
        this.shortClassChangePSelected = "false";
        this.shortClassChangeNSelected = "false";
        this.shortClassChangeN = "headerSortUp";
        this.shortClassChangePMarket = "headerSortUp";
        this.shortClassChangePMarketSelected = "false";
        this.shortClassChangeNMarketSelected = "false";
        this.shortClassChangeNMarket = "headerSortUp";
        this.shortClassTickerMkt = "";
        this.shortClassLPMkt = "";
        this.shortClassChangeMkt = "";
        this.shortClassSentimentMkt = "headerSortUp";
        this.shortClassESGMkt = "";
        this.shortClassESG = "";
        this.shortClassActionMkt = "";
      }

      _createClass(RecommendedactionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.myservice.getLoser(1, "portfolio").subscribe(function (data) {
            _this23.loserdetails = data["data"];

            _this23.loserdetails.sort(function (a, b) {
              return Number(a.priceChangePct) - Number(b.priceChangePct);
            });
          });
          this.myservice.getPortFolioAction("portfolio", 1, "sentiment", "asc").subscribe(function (data) {
            _this23.portfolioActionDetails = data["data"]["finalResult"];
            _this23.getRecommAction = data["data"]["recommendedActions"];
          });
          this.myservice.getgainerPortfolio(1, "portfolio").subscribe(function (data) {
            _this23.gainerportfolioDetails = data["data"];

            _this23.gainerportfolioDetails.sort(function (a, b) {
              return Number(b.priceChangePct) - Number(a.priceChangePct);
            });
          }); // this.myservice.getLoser(1, "market").subscribe((data) => {
          //   this.losermarketDetails = data["data"];
          //   this.losermarketDetails.sort((a, b) => Number(a.priceChangePct) - Number(b.priceChangePct));
          // });
          // this.myservice.getPortFolioAction("market", 1, 'sentiment', 'asc').subscribe((data) => {
          //   this.portfolioActionInMarketDetails = data["data"]["finalResult"];
          //   this.getRecommActionInMarket = data["data"]["recommendedActions"];
          // });
          //  this.myservice.getgainerPortfolio(1, "market").subscribe((data) => {
          //   this.gainermarketDetails = data["data"];
          //   this.gainermarketDetails.sort((a, b) => Number(b.priceChangePct) - Number(a.priceChangePct));
          // });
        }
      }, {
        key: "onBearish",
        value: function onBearish($event) {
          var _this24 = this;

          this.myservice.getPortFolioAction("market", 1, "sentiment", "asc").subscribe(function (data) {
            _this24.portfolioActionInMarketDetails = data["data"]["finalResult"];
            _this24.getRecommActionInMarket = data["data"]["recommendedActions"];
          });
          var col = document.querySelector("#recaction #ghi2");
          col.classList.add("anotselected");
          col = document.querySelector("#recaction #ghi1");
          col.classList.remove("anotselected");
        }
      }, {
        key: "onBullish",
        value: function onBullish($event) {
          var col = document.querySelector("#recaction #ghi1");
          col.classList.add("anotselected");
          col = document.querySelector("#recaction #ghi2");
          col.classList.remove("anotselected");
        }
      }, {
        key: "onPort",
        value: function onPort($event) {
          // alert("Bearish")
          var col = document.querySelector("#recaction1 #ghi4");
          col.classList.add("anotselected");
          col = document.querySelector("#recaction1 #ghi3");
          col.classList.remove("anotselected");
        }
      }, {
        key: "onMarket",
        value: function onMarket($event) {
          var _this25 = this;

          this.myservice.getgainerPortfolio(1, "market").subscribe(function (data) {
            _this25.gainermarketDetails = data["data"];

            _this25.gainermarketDetails.sort(function (a, b) {
              return Number(b.priceChangePct) - Number(a.priceChangePct);
            });
          });
          var col = document.querySelector("#recaction1 #ghi3");
          col.classList.add("anotselected");
          col = document.querySelector("#recaction1 #ghi4");
          col.classList.remove("anotselected");
        }
      }, {
        key: "onPortfolio",
        value: function onPortfolio($event) {
          // alert("Bearish")
          var col = document.querySelector("#recactionssss #ghi6");
          col.classList.add("anotselected");
          col = document.querySelector("#recactionssss #ghi5");
          col.classList.remove("anotselected");
        }
      }, {
        key: "onInmarket",
        value: function onInmarket($event) {
          var _this26 = this;

          this.myservice.getLoser(1, "market").subscribe(function (data) {
            _this26.losermarketDetails = data["data"];

            _this26.losermarketDetails.sort(function (a, b) {
              return Number(a.priceChangePct) - Number(b.priceChangePct);
            });
          });
          var col = document.querySelector("#recactionssss #ghi5");
          col.classList.add("anotselected");
          col = document.querySelector("#recactionssss #ghi6");
          col.classList.remove("anotselected");
        }
      }, {
        key: "shortTicker",
        value: function shortTicker() {
          if (this.shortClassTicker === "headerSortUp") {
            this.shortClassTicker = "headerSortDown";
            this.portfolioActionInMarketDetails.sort(function (a, b) {
              return b.ticker.localeCompare(a.ticker);
            });
          } else {
            this.shortClassTicker = "headerSortUp";
            this.portfolioActionInMarketDetails.sort(function (a, b) {
              return a.ticker.localeCompare(b.ticker);
            });
          }
        }
      }, {
        key: "sortNumberChange",
        value: function sortNumberChange(className) {
          switch (className) {
            case "shortClassChangeP":
              this.shortClassChangePSelected = "true";
              this.shortClassChangeP === "headerSortUp" ? (this.shortClassChangeP = "headerSortDown", this.gainerportfolioDetails.sort(function (a, b) {
                return Number(a.priceChangePct) - Number(b.priceChangePct);
              })) : (this.shortClassChangeP = "headerSortUp", this.gainerportfolioDetails.sort(function (a, b) {
                return Number(b.priceChangePct) - Number(a.priceChangePct);
              }));
              break;

            case "shortClassChangeN":
              this.shortClassChangeNSelected = "true";
              this.shortClassChangeN === "headerSortUp" ? (this.shortClassChangeN = "headerSortDown", this.loserdetails.sort(function (a, b) {
                return Number(b.priceChangePct) - Number(a.priceChangePct);
              })) : (this.shortClassChangeN = "headerSortUp", this.loserdetails.sort(function (a, b) {
                return Number(a.priceChangePct) - Number(b.priceChangePct);
              }));
              break;

            case "shortClassChangePMarket":
              this.shortClassChangePMarketSelected = "true";
              this.shortClassChangePMarket === "headerSortUp" ? (this.shortClassChangePMarket = "headerSortDown", this.gainermarketDetails.sort(function (a, b) {
                return Number(a.priceChangePct) - Number(b.priceChangePct);
              })) : (this.shortClassChangePMarket = "headerSortUp", this.gainermarketDetails.sort(function (a, b) {
                return Number(b.priceChangePct) - Number(a.priceChangePct);
              }));
              break;

            case "shortClassChangeNMarket":
              this.shortClassChangeNMarketSelected = "true";
              this.shortClassChangeNMarket === "headerSortUp" ? (this.shortClassChangeNMarket = "headerSortDown", this.losermarketDetails.sort(function (a, b) {
                return Number(b.priceChangePct) - Number(a.priceChangePct);
              })) : (this.shortClassChangeNMarket = "headerSortUp", this.losermarketDetails.sort(function (a, b) {
                return Number(a.priceChangePct) - Number(b.priceChangePct);
              }));
              break;

            default:
              break;
          }
        }
      }, {
        key: "sortNumber",
        value: function sortNumber(className) {
          switch (className) {
            case "shortClassTicker":
              this.shortClassTicker === "headerSortUp" ? (this.shortClassTicker = "headerSortDown", this.portfolioActionDetails.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
              })) : (this.shortClassTicker = "headerSortUp", this.portfolioActionDetails.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
              }));
              this.shortClassLP = "";
              this.shortClassChange = "";
              this.shortClassSentiment = "";
              this.shortClassAction = "";
              this.shortClassESG = "";
              break;

            case "shortClassLP":
              this.shortClassLP === "headerSortUp" ? (this.shortClassLP = "headerSortDown", this.portfolioActionDetails.sort(function (a, b) {
                return Number(b.LastPrice) - Number(a.LastPrice);
              })) : (this.shortClassLP = "headerSortUp", this.portfolioActionDetails.sort(function (a, b) {
                return Number(a.LastPrice) - Number(b.LastPrice);
              }));
              this.shortClassTicker = "";
              this.shortClassChange = "";
              this.shortClassSentiment = "";
              this.shortClassAction = "";
              this.shortClassESG = "";
              break;

            case "shortClassChange":
              this.shortClassChange === "headerSortUp" ? (this.shortClassChange = "headerSortDown", this.portfolioActionDetails.sort(function (a, b) {
                return Number(b.priceChangePct) - Number(a.priceChangePct);
              })) : (this.shortClassChange = "headerSortUp", this.portfolioActionDetails.sort(function (a, b) {
                return Number(a.priceChangePct) - Number(b.priceChangePct);
              }));
              this.shortClassLP = "";
              this.shortClassSentiment = "";
              this.shortClassAction = "";
              this.shortClassTicker = "";
              this.shortClassESG = "";
              break;

            case "shortClassSentiment":
              this.shortClassSentiment === "headerSortUp" ? (this.shortClassSentiment = "headerSortDown", this.portfolioActionDetails.sort(function (a, b) {
                return Number(b.Sentiment_score) - Number(a.Sentiment_score);
              })) : (this.shortClassSentiment = "headerSortUp", this.portfolioActionDetails.sort(function (a, b) {
                return Number(a.Sentiment_score) - Number(b.Sentiment_score);
              }));
              this.shortClassLP = "";
              this.shortClassChange = "";
              this.shortClassAction = "";
              this.shortClassTicker = "";
              this.shortClassESG = "";
              break;

            case "shortClassESG":
              this.shortClassESG === "headerSortUp" ? (this.shortClassESG = "headerSortDown", this.portfolioActionDetails.sort(function (a, b) {
                return Number(b.esg_score) - Number(a.esg_score);
              })) : (this.shortClassESG = "headerSortUp", this.portfolioActionDetails.sort(function (a, b) {
                return Number(a.esg_score) - Number(b.esg_score);
              }));
              this.shortClassLP = "";
              this.shortClassChange = "";
              this.shortClassAction = "";
              this.shortClassTicker = "";
              this.shortClassSentiment = "";
              break;

            default:
              break;
          }
        }
      }, {
        key: "sortNumberMkt",
        value: function sortNumberMkt(className) {
          switch (className) {
            case "ticker":
              this.shortClassTickerMkt === "headerSortUp" ? (this.shortClassTickerMkt = "headerSortDown", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return b.ticker.localeCompare(a.ticker);
              })) : (this.shortClassTickerMkt = "headerSortUp", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return a.ticker.localeCompare(b.ticker);
              }));
              this.shortClassLPMkt = "";
              this.shortClassChangeMkt = "";
              this.shortClassSentimentMkt = "";
              this.shortClassActionMkt = "";
              this.shortClassESGMkt = "";
              break;

            case "lastPrice":
              this.shortClassLPMkt === "headerSortUp" ? (this.shortClassLPMkt = "headerSortDown", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(b.LastPrice) - Number(a.LastPrice);
              })) : (this.shortClassLPMkt = "headerSortUp", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(a.LastPrice) - Number(b.LastPrice);
              }));
              this.shortClassTickerMkt = "";
              this.shortClassChangeMkt = "";
              this.shortClassSentimentMkt = "";
              this.shortClassActionMkt = "";
              this.shortClassESGMkt = "";
              break;

            case "changePercent":
              this.shortClassChangeMkt === "headerSortUp" ? (this.shortClassChangeMkt = "headerSortDown", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(b.priceChangePct) - Number(a.priceChangePct);
              })) : (this.shortClassChangeMkt = "headerSortUp", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(a.priceChangePct) - Number(b.priceChangePct);
              }));
              this.shortClassLPMkt = "";
              this.shortClassSentimentMkt = "";
              this.shortClassActionMkt = "";
              this.shortClassTickerMkt = "";
              this.shortClassESGMkt = "";
              break;

            case "esg":
              this.shortClassESGMkt === "headerSortUp" ? (this.shortClassESGMkt = "headerSortDown", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(b.esg_score) - Number(a.esg_score);
              })) : (this.shortClassESGMkt = "headerSortUp", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(a.esg_score) - Number(b.esg_score);
              }));
              this.shortClassLPMkt = "";
              this.shortClassChangeMkt = "";
              this.shortClassActionMkt = "";
              this.shortClassTickerMkt = "";
              this.shortClassSentimentMkt = "";
              break;

            case "sentiment":
              this.shortClassSentimentMkt === "headerSortUp" ? (this.shortClassSentimentMkt = "headerSortDown", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(b.Sentiment_score) - Number(a.Sentiment_score);
              })) : (this.shortClassSentimentMkt = "headerSortUp", this.portfolioActionInMarketDetails.sort(function (a, b) {
                return Number(a.Sentiment_score) - Number(b.Sentiment_score);
              }));
              this.shortClassLPMkt = "";
              this.shortClassChangeMkt = "";
              this.shortClassActionMkt = "";
              this.shortClassTickerMkt = "";
              this.shortClassESGMkt = "";
              break;

            default:
              break;
          }
        }
      }, {
        key: "open",
        value: function open(content, tableRow) {
          this.modalRow = tableRow;
          this.modalService.open(content, {
            ariaLabelledBy: "modal-basic-title",
            size: "md",
            centered: true
          });
        }
      }]);

      return RecommendedactionComponent;
    }();

    RecommendedactionComponent.ɵfac = function RecommendedactionComponent_Factory(t) {
      return new (t || RecommendedactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
    };

    RecommendedactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecommendedactionComponent,
      selectors: [["app-recommendedaction"]],
      decls: 146,
      vars: 70,
      consts: [[1, "container"], [1, "row", 2, "width", "101.2%"], [1, "col-8"], [1, "card", 2, "top", "-9px", "height", "585px"], [1, "card-header"], [1, "card-link"], [1, "font-18"], ["href", "#", 1, "card-link", 2, "float", "right"], ["role", "tablist", "id", "recaction", 1, "nav"], [1, "nav-item"], ["data-toggle", "tab", "href", "#menu5", "id", "ghi2", 1, "nav-link", "sfont", "ghi", 3, "click"], ["data-toggle", "tab", "href", "#home1", "id", "ghi1", 1, "nav-link", "sfont", "ghi", "anotselected", 3, "click"], [1, "card-body", "recmmdheight", "scrollable", "scrollbar-light-blue"], [1, "tab-content"], ["id", "home1", 1, "container", "tab-pane", "fade"], [1, "table", "table-hover", 2, "position", "relative"], [1, "heading", 2, "position", "sticky", "top", "0", "background-color", "white"], [2, "cursor", "pointer", 3, "ngStyle", "ngClass", "click"], [1, "text-right", 2, "cursor", "pointer", 3, "ngStyle", "ngClass", "click"], [2, "cursor", "pointer", 3, "ngStyle", "ngClass"], ["class", "sfont", 4, "ngFor", "ngForOf"], ["id", "menu5", 1, "container", "tab-pane", "active"], [1, "col-4", 2, "top", "-9px"], [1, "card"], ["role", "tablist", "id", "recaction1", 1, "nav"], ["data-toggle", "tab", "href", "#home10", "id", "ghi3", 1, "nav-link", "active", "ghi", "font-14", 3, "click"], ["data-toggle", "tab", "href", "#menu10", "id", "ghi4", 1, "nav-link", "anotselected", "ghi", "font-14", 3, "click"], [1, "card-body"], ["id", "home10", 1, "container", "tab-pane", "active"], [1, "table", 2, "height", "60%"], [1, "heading"], [2, "color", "#999999"], [1, "text-right", 2, "color", "#999999"], ["id", "menu10", 1, "container", "tab-pane", "fade"], [1, "table"], [1, "card", 2, "height", "289px", "line-height", "1.8"], ["role", "tablist", "id", "recactionssss", 1, "nav"], ["data-toggle", "tab", "href", "#home9", "id", "ghi5", 1, "nav-link", "ghi", "font-14", 3, "click"], ["data-toggle", "tab", "href", "#menu9", "id", "ghi6", 1, "nav-link", "ghi", "font-14", "anotselected", 3, "click"], ["id", "home9", 1, "container", "tab-pane", "active"], ["id", "menu9", 1, "container", "tab-pane", "fade"], ["content", ""], [1, "sfont"], [1, "text-right"], [1, "text-right", 3, "ngStyle"], ["name", "selectedQuantity", "id", "aantal"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-link", "font-14", 3, "click"], [3, "value", "selected"], [1, "text-right", 2, "color", "black"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", "font-14", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "font-14", 3, "click"]],
      template: function RecommendedactionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "RECOMMENDED ACTIONS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_a_click_13_listener($event) {
            return ctx.onBullish($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "In Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_a_click_16_listener($event) {
            return ctx.onBearish($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "In Market");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_24_listener() {
            return ctx.sortNumberMkt("ticker");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " TICKER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_26_listener() {
            return ctx.sortNumberMkt("lastPrice");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " LAST PRICE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_28_listener() {
            return ctx.sortNumberMkt("changePercent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " % CHANGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_30_listener() {
            return ctx.sortNumberMkt("sentiment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " SENTIMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_32_listener() {
            return ctx.sortNumberMkt("esg");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " ESG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " ACTION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RecommendedactionComponent_tr_38_Template, 17, 10, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_43_listener() {
            return ctx.sortNumber("shortClassTicker");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " TICKER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_45_listener() {
            return ctx.sortNumber("shortClassLP");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " LAST PRICE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_47_listener() {
            return ctx.sortNumber("shortClassChange");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " % CHANGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_49_listener() {
            return ctx.sortNumber("shortClassSentiment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " SENTIMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_51_listener() {
            return ctx.sortNumber("shortClassESG");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " ESG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " ACTION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RecommendedactionComponent_tr_57_Template, 17, 10, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "TOP GAINERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_a_click_69_listener($event) {
            return ctx.onPort($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "In Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_a_click_72_listener($event) {
            return ctx.onMarket($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "In Market");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "TICKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_82_listener() {
            return ctx.sortNumberChange("shortClassChangeP");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " % CHANGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " LAST PRICE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, RecommendedactionComponent_tr_87_Template, 7, 7, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "TICKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_94_listener() {
            return ctx.sortNumberChange("shortClassChangePMarket");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " % CHANGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " LAST PRICE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, RecommendedactionComponent_tr_99_Template, 7, 7, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "TOP LOSERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_a_click_110_listener($event) {
            return ctx.onPortfolio($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "In Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_a_click_113_listener($event) {
            return ctx.onInmarket($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "In Market");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "TICKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_123_listener() {
            return ctx.sortNumberChange("shortClassChangeN");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " % CHANGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "LAST PRICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, RecommendedactionComponent_tr_128_Template, 7, 7, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "TICKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedactionComponent_Template_th_click_135_listener() {
            return ctx.sortNumberChange("shortClassChangeNMarket");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " % CHANGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "LAST PRICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, RecommendedactionComponent_tr_140_Template, 7, 7, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, RecommendedactionComponent_ng_template_141_Template, 15, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.shortClassTickerMkt === "" ? "#999999" : "black"))("ngClass", ctx.shortClassTickerMkt === "headerSortUp" ? "headerSortUp" : ctx.shortClassTickerMkt === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx.shortClassLPMkt === "" ? "#999999" : "black"))("ngClass", ctx.shortClassLPMkt === "headerSortUp" ? "headerSortUp" : ctx.shortClassLPMkt === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx.shortClassChangeMkt === "" ? "#999999" : "black"))("ngClass", ctx.shortClassChangeMkt === "headerSortUp" ? "headerSortUp" : ctx.shortClassChangeMkt === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx.shortClassSentimentMkt === "" ? "#999999" : "black"))("ngClass", ctx.shortClassSentimentMkt === "headerSortUp" ? "headerSortUp" : ctx.shortClassSentimentMkt === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx.shortClassESGMkt === "" ? "#999999" : "black"))("ngClass", ctx.shortClassESGMkt === "headerSortUp" ? "headerSortUp" : ctx.shortClassESGMkt === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx.shortClassAction === "" ? "#999999" : "black"))("ngClass", ctx.shortClassAction === "headerSortUp" ? "headerSortUp" : ctx.shortClassAction === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioActionInMarketDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx.shortClassTicker === "" ? "#999999" : "black"))("ngClass", ctx.shortClassTicker === "headerSortUp" ? "headerSortUp" : ctx.shortClassTicker === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx.shortClassLP === "" ? "#999999" : "black"))("ngClass", ctx.shortClassLP === "headerSortUp" ? "headerSortUp" : ctx.shortClassLP === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c0, ctx.shortClassChange === "" ? "#999999" : "black"))("ngClass", ctx.shortClassChange === "headerSortUp" ? "headerSortUp" : ctx.shortClassChange === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c0, ctx.shortClassSentiment === "" ? "#999999" : "black"))("ngClass", ctx.shortClassSentiment === "headerSortUp" ? "headerSortUp" : ctx.shortClassSentiment === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c0, ctx.shortClassESG === "" ? "#999999" : "black"))("ngClass", ctx.shortClassESG === "headerSortUp" ? "headerSortUp" : ctx.shortClassESG === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c0, ctx.shortClassAction === "" ? "#999999" : "black"))("ngClass", ctx.shortClassAction === "headerSortUp" ? "headerSortUp" : ctx.shortClassAction === "headerSortDown" ? "headerSortDown" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioActionDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c0, ctx.shortClassChangeP === "headerSortUp" && ctx.shortClassChangePSelected === "false" ? "black" : "blue"))("ngClass", ctx.shortClassChangeP === "headerSortUp" && ctx.shortClassChangePSelected === "false" ? "headerSortUp" : ctx.shortClassChangeP === "headerSortDown" ? "headerSortDownGainer" : "headerSortUpGainer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gainerportfolioDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c0, ctx.shortClassChangePMarket === "headerSortUp" && ctx.shortClassChangePMarketSelected === "false" ? "black" : "blue"))("ngClass", ctx.shortClassChangePMarket === "headerSortUp" && ctx.shortClassChangePMarketSelected === "false" ? "headerSortUp" : ctx.shortClassChangePMarket === "headerSortDown" ? "headerSortDownGainer" : "headerSortUpGainer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gainermarketDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c0, ctx.shortClassChangeN === "headerSortUp" && ctx.shortClassChangeNSelected === "false" ? "black" : "blue"))("ngClass", ctx.shortClassChangeN === "headerSortUp" && ctx.shortClassChangeNSelected === "false" ? "headerSortUp" : ctx.shortClassChangeN === "headerSortDown" ? "headerSortDownGainer" : "headerSortUpGainer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loserdetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c0, ctx.shortClassChangeNMarket === "headerSortUp" && ctx.shortClassChangeNMarketSelected === "false" ? "black" : "blue"))("ngClass", ctx.shortClassChangeNMarket === "headerSortUp" && ctx.shortClassChangeNMarketSelected === "false" ? "headerSortUp" : ctx.shortClassChangeNMarket === "headerSortDown" ? "headerSortDownGainer" : "headerSortUpGainer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.losermarketDetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      styles: [".card-header[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(248, 244, 244, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  min-height: 1px;\r\n  padding: 0.5px;\r\n  width: calc(100% - 7px);\r\n}\r\n\r\n.tablname[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.tblclr[_ngcontent-%COMP%] {\r\n  background-color: #e9eefc;\r\n}\r\n\r\n.sfont[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n\r\n.anotselected[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 0.5rem 0.4rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:after {\r\n  background: none repeat scroll 0 0 transparent;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 2px;\r\n  left: 50%;\r\n  \r\n  background: #3466f6;\r\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n  width: 0;\r\n}\r\n\r\n.ghi[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.container[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-fluid[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-lg[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-md[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-sm[_ngcontent-wws-c20][_ngcontent-%COMP%], .container-xl[_ngcontent-wws-c20][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 0px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-top: none;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: bottom;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\nselect[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n\r\n\r\n.form-elegant[_ngcontent-%COMP%], .form-dark[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 280px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 7px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background-color: #d8d8d8;\r\n}\r\n\r\n.scrollbar-light-blue[_ngcontent-%COMP%] {\r\n  scrollbar-color: #f5f5f5;\r\n  height: 665px;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%]:hover {\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n\r\n.scrollable[_ngcontent-%COMP%] {\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active {\r\n  outline: none !important;\r\n  box-shadow: none;\r\n}\r\n\r\n.gainerbody[_ngcontent-%COMP%] {\r\n  width: 384px;\r\n  height: auto;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%]:after, .headerSortUp[_ngcontent-%COMP%]:after {\r\n  content: \" \";\r\n  position: relative;\r\n  left: 2px;\r\n  border: 6px solid transparent;\r\n}\r\n\r\n.headerSortDownGainer[_ngcontent-%COMP%]:after, .headerSortUpGainer[_ngcontent-%COMP%]:after {\r\n  content: \" \";\r\n  position: relative;\r\n  left: 2px;\r\n  border: 6px solid transparent;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%]:after {\r\n  top: 12px;\r\n  left: 5px;\r\n  border-top-color: black;\r\n}\r\n\r\n.headerSortDownGainer[_ngcontent-%COMP%]:after {\r\n  top: 12px;\r\n  left: 5px;\r\n  border-top-color: blue;\r\n}\r\n\r\n.headerSortUp[_ngcontent-%COMP%]:after {\r\n  bottom: 12px;\r\n  right: 5px;\r\n  border-bottom-color: black;\r\n}\r\n\r\n.headerSortUpGainer[_ngcontent-%COMP%]:after {\r\n  bottom: 12px;\r\n  right: 5px;\r\n  border-bottom-color: blue;\r\n}\r\n\r\n.headerSortDownF[_ngcontent-%COMP%]:after {\r\n  top: 12px;\r\n  left: 5px;\r\n  border-top-color: pink;\r\n}\r\n\r\n.headerSortUpF[_ngcontent-%COMP%]:after {\r\n  bottom: 12px;\r\n  right: 5px;\r\n  border-bottom-color: pink;\r\n}\r\n\r\n.headerSortDown[_ngcontent-%COMP%], .headerSortUp[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.headerSortDownGainer[_ngcontent-%COMP%], .headerSortUpGainer[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.headerSortDownF[_ngcontent-%COMP%], .headerSortUpF[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%], .font-14[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n  .recmmdheight {\r\n  height: 527px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kZWRhY3Rpb24vcmVjb21tZW5kZWRhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsMkNBQTJDO0VBQzNDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBOzs7Ozs7RUFNRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7RUFNRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCOztBQUV0Qjs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUNBLDBCQUEwQjs7QUFFMUI7O0VBRUUsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcmVjb21tZW5kZWRhY3Rpb24vcmVjb21tZW5kZWRhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDI0NCwgMjQ0LCAwLjAzKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZzogMC41cHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDdweCk7XHJcbn1cclxuXHJcbi50YWJsbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udGJsY2xyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZWZjO1xyXG59XHJcblxyXG4uc2ZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLyogLmFzZWxlY3RlZHtcclxuXHJcbn0gKi9cclxuXHJcbi5hbm90c2VsZWN0ZWQge1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMC40cmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5naGk6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICBiYWNrZ3JvdW5kOiAjMzQ2NmY2O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5naGk6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIsXHJcbi5jb250YWluZXItZmx1aWQsXHJcbi5jb250YWluZXItbGcsXHJcbi5jb250YWluZXItbWQsXHJcbi5jb250YWluZXItc20sXHJcbi5jb250YWluZXIteGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lcltfbmdjb250ZW50LXd3cy1jMjBdLFxyXG4uY29udGFpbmVyLWZsdWlkW19uZ2NvbnRlbnQtd3dzLWMyMF0sXHJcbi5jb250YWluZXItbGdbX25nY29udGVudC13d3MtYzIwXSxcclxuLmNvbnRhaW5lci1tZFtfbmdjb250ZW50LXd3cy1jMjBdLFxyXG4uY29udGFpbmVyLXNtW19uZ2NvbnRlbnQtd3dzLWMyMF0sXHJcbi5jb250YWluZXIteGxbX25nY29udGVudC13d3MtYzIwXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG5zZWxlY3QsXHJcbm9wdGlvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4vKnNpZGUgc2Nyb2xsIGJhciBjc3MqL1xyXG5cclxuLmZvcm0tZWxlZ2FudCxcclxuLmZvcm0tZGFyayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLWxpZ2h0LWJsdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItbGlnaHQtYmx1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG5cclxuLnNjcm9sbGJhci1saWdodC1ibHVlIHtcclxuICBzY3JvbGxiYXItY29sb3I6ICNmNWY1ZjU7XHJcbiAgaGVpZ2h0OiA2NjVweDtcclxufVxyXG5cclxuLnNjcm9sbGFibGU6aG92ZXIge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi8qc2lkZSBzY3JvbGwgYmFyIGNzcyBlbmQqL1xyXG5cclxuLmJ0bjpmb2N1cyxcclxuLmJ0bjphY3RpdmUge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZ2FpbmVyYm9keSB7XHJcbiAgd2lkdGg6IDM4NHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhlYWRlclNvcnREb3duOmFmdGVyLFxyXG4uaGVhZGVyU29ydFVwOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMnB4O1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyU29ydERvd25HYWluZXI6YWZ0ZXIsXHJcbi5oZWFkZXJTb3J0VXBHYWluZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAycHg7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0RG93bjphZnRlciB7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhlYWRlclNvcnREb3duR2FpbmVyOmFmdGVyIHtcclxuICB0b3A6IDEycHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0VXA6YWZ0ZXIge1xyXG4gIGJvdHRvbTogMTJweDtcclxuICByaWdodDogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaGVhZGVyU29ydFVwR2FpbmVyOmFmdGVyIHtcclxuICBib3R0b206IDEycHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uaGVhZGVyU29ydERvd25GOmFmdGVyIHtcclxuICB0b3A6IDEycHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0VXBGOmFmdGVyIHtcclxuICBib3R0b206IDEycHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBwaW5rO1xyXG59XHJcblxyXG4uaGVhZGVyU29ydERvd24sXHJcbi5oZWFkZXJTb3J0VXAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJTb3J0RG93bkdhaW5lcixcclxuLmhlYWRlclNvcnRVcEdhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlclNvcnREb3duRixcclxuLmhlYWRlclNvcnRVcEYge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5LFxyXG4uZm9udC0xNCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnJlY21tZGhlaWdodCB7XHJcbiAgaGVpZ2h0OiA1MjdweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-recommendedaction",
          templateUrl: "./recommendedaction.component.html",
          styleUrls: ["./recommendedaction.component.css"]
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sector-doughnut/sector-doughnut.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/sector-doughnut/sector-doughnut.component.ts ***!
    \**************************************************************/

  /*! exports provided: SectorDoughnutComponent */

  /***/
  function srcAppSectorDoughnutSectorDoughnutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectorDoughnutComponent", function () {
      return SectorDoughnutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");

    var SectorDoughnutComponent =
    /*#__PURE__*/
    function () {
      function SectorDoughnutComponent() {
        _classCallCheck(this, SectorDoughnutComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.piechart = {
          title: {
            text: ""
          },
          credits: {
            enabled: false
          },
          chart: {
            type: "pie"
          },
          tooltip: {
            borderColor: "black",
            backgroundColor: "black",
            formatter: function formatter() {
              return "<b>" + this.key + "</b><br> " + this.y.toLocaleString() + "% of " + this.point['sector'] + " Stock" + "</b><br> " + +this.point['overAll'].toLocaleString() + "% of overall portfolio<br> ESG: " + this.point['esg'];
            },
            style: {
              color: "white",
              fontFamily: 'Source Sans Pro'
            }
          },
          legend: {
            enabled: true,
            align: "center",
            borderWidth: 0,
            layout: "horizontal",
            verticalAlign: "bottom"
          },
          plotOptions: {
            pie: {
              innerSize: '78%'
            },
            series: {
              showInLegend: true,
              dataLabels: {
                enabled: false,
                format: "{point.name}: {point.y:.1f}%"
              }
            }
          },
          series: [{
            type: "pie",
            data: [{
              name: "Chrome",
              y: 10.41,
              selected: true,
              color: "#95ceff"
            }, {
              name: "Internet Explorer",
              y: 8.84,
              color: "#56abf5"
            }, {
              name: "Firefox",
              y: 10.85,
              color: "#135c9c"
            }, {
              name: "Edge",
              y: 4.67,
              color: "#0a2c4a"
            }, {
              name: "Other",
              y: 2.61,
              color: "#2092f5"
            }]
          }]
        };
      }

      _createClass(SectorDoughnutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.data) {
            // this.data.sort(function (a, b) { return b.sectorStockPct - a.sectorStockPct })
            var myData = this.data.map(function (p) {
              var _t = {};
              _t["name"] = p.Ticker;
              _t["y"] = p.sectorStockPct;
              _t['overAll'] = p.overallStockPct;
              _t['sector'] = p.sectorName;
              _t['esg'] = p.esg_score;
              return _t;
            });
            var finaldata = [];
            finaldata.push({
              // name: 'second last',
              data: myData
            });
            this.piechart.series = finaldata;
            this.updateFlag = true;
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.data) {
            // this.data.sort(function (a, b) { return b.sectorStockPct - a.sectorStockPct })
            var myData = this.data.map(function (p) {
              var _t = {};
              _t["name"] = p.Ticker;
              _t["y"] = p.sectorStockPct;
              _t['overAll'] = p.overallStockPct;
              _t['sector'] = p.sectorName;
              _t['esg'] = p.esg_score;
              return _t;
            });
            var finaldata = [];
            finaldata.push({
              // name: 'second last',
              data: myData
            });
            this.piechart.series = finaldata;
            this.updateFlag = true;
          }
        }
      }]);

      return SectorDoughnutComponent;
    }();

    SectorDoughnutComponent.ɵfac = function SectorDoughnutComponent_Factory(t) {
      return new (t || SectorDoughnutComponent)();
    };

    SectorDoughnutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectorDoughnutComponent,
      selectors: [["app-sector-doughnut"]],
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 4,
      consts: [[2, "width", "100%", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "updateChange"]],
      template: function SectorDoughnutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "highcharts-chart", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function SectorDoughnutComponent_Template_highcharts_chart_updateChange_0_listener($event) {
            return ctx.updateFlag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.piechart)("update", ctx.updateFlag)("oneToOne", true);
        }
      },
      directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rvci1kb3VnaG51dC9zZWN0b3ItZG91Z2hudXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectorDoughnutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sector-doughnut',
          templateUrl: './sector-doughnut.component.html',
          styleUrls: ['./sector-doughnut.component.css']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sector-impact/sector-impact.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/sector-impact/sector-impact.component.ts ***!
    \**********************************************************/

  /*! exports provided: SectorImpactComponent */

  /***/
  function srcAppSectorImpactSectorImpactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectorImpactComponent", function () {
      return SectorImpactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dataservice.service */
    "./src/app/dataservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sector_doughnut_sector_doughnut_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sector-doughnut/sector-doughnut.component */
    "./src/app/sector-doughnut/sector-doughnut.component.ts");

    function SectorImpactComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select sector from graph on the left to view holdings in each sector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SectorImpactComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sector-doughnut", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PORTFOLIO BY SECTOR: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r243.sectorName), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r243.doughnutDataBySector);
      }
    }

    var SectorImpactComponent =
    /*#__PURE__*/
    function () {
      function SectorImpactComponent(dataService, http) {
        var _this27 = this;

        _classCallCheck(this, SectorImpactComponent);

        this.dataService = dataService;
        this.http = http;
        this.doughnutDataBySector = [];
        this.barChartData = [{
          name: 'Current weightage',
          color: 'royalblue',
          type: 'column',
          data: []
        }, {
          name: 'Model recommended weightage',
          color: 'darkgray',
          type: 'column',
          data: []
        }, {
          name: 'ESG',
          color: 'transparent',
          type: 'column',
          data: [],
          showInLegend: false
        }];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
          chart: {
            type: 'column'
          },
          title: {
            text: ''
          },
          xAxis: {
            startOnTick: true,
            // top:5,
            categories: [],
            labels: {//   formatter: function () {
              //     // return this.value.toString().replace(/ /g, '<br />');
              //     if(this.value.toString().length< 10){
              //       return this.value.toString();
              //     } else{
              //       return this.value.toString().substring(0, 9) + '...'
              //     }
              // }
            }
          },
          yAxis: {
            min: 0,
            offset: 5,
            gridLineWidth: 0,
            labels: {
              format: '{value}'
            },
            title: {
              text: ''
            }
          },
          legend: {
            verticalAlign: 'top',
            symbolWidth: 35,
            symbolRadius: 5,
            squareSymbol: false,
            itemStyle: {
              color: '#222222',
              fontWeight: '400',
              fontFamily: 'Source Sans Pro'
            }
          },
          tooltip: {
            backgroundColor: "black",
            shared: true,
            useHTML: true,
            headerFormat: "<b>{point.key}</b><table>",
            pointFormat: "<tr><td>{series.name}: </td>" + '<td style="text-align: right"><b>{point.y} %</b></td></tr>',
            footerFormat: "</table>",
            valueDecimals: 2,
            borderColor: "transparent",
            style: {
              color: "white",
              fontFamily: 'Source Sans Pro'
            }
          },
          plotOptions: {
            series: {
              point: {
                events: {
                  click: function click(event) {
                    _this27.onPointSelect(event.point.category);
                  }
                }
              }
            },
            column: {
              pointPadding: 0,
              borderWidth: 0,
              groupPadding: 0.28,
              // borderRadius: 5,
              pointWidth: 8
            }
          },
          credits: {
            enabled: false
          },
          series: [],
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
                },
                yAxis: {
                  labels: {
                    align: 'left',
                    x: 0,
                    y: 0
                  },
                  title: {
                    text: null
                  }
                },
                subtitle: {
                  text: null
                },
                credits: {
                  enabled: false
                }
              }
            }]
          }
        };
      }

      _createClass(SectorImpactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.dataService.castValue.subscribe(function (value) {
            return _this28.showDoughnut = value;
          });
          this.dataService.getMktValueAndSentimentsFaCli(1, this.clientID).subscribe(function (response) {
            if (response && response["data"] && response["data"].length) {
              _this28.mktValueAndSentimentsFaCli = response["data"];
              var barChartCategories = response["data"].map(function (item) {
                return item["sectorName"];
              });
              response["data"].forEach(function (item) {
                _this28.barChartData[0].data.push(parseFloat(item["crntweight"]));

                _this28.barChartData[1].data.push(parseFloat(item["recmdweight"]));

                _this28.barChartData[2].data.push(parseFloat(item["esg_score"]));
              });
              _this28.chartOptions.series = _toConsumableArray(_this28.barChartData);
              _this28.chartOptions.xAxis["categories"] = barChartCategories;
              _this28.updateFlag = true;
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {// this.dataService.castValue.subscribe((value) => this.showDoughnut = value)
        }
      }, {
        key: "onPointSelect",
        value: function onPointSelect(category) {
          var _this29 = this;

          this.doughnutDataBySector = [];

          if (category) {
            this.sectorName = category;
            var sectorId = this.getSectorIdByName(this.sectorName);
            this.http.post(this.dataService.apiUrlPath + "/fac/getMktValueAndSentimentsFaCliSec", {
              faid: 1,
              clientid: this.clientID,
              sectorid: sectorId
            }).subscribe(function (response) {
              _this29.dataService.sendValue(true);

              if (response && response['data']) {
                _this29.doughnutDataBySector = response['data'];
              }
            });
          }
        }
      }, {
        key: "getSectorIdByName",
        value: function getSectorIdByName(name) {
          var obj = this.mktValueAndSentimentsFaCli.find(function (item) {
            return item["sectorName"] === name;
          });
          return obj["sectorID"];
        }
      }]);

      return SectorImpactComponent;
    }();

    SectorImpactComponent.ɵfac = function SectorImpactComponent_Factory(t) {
      return new (t || SectorImpactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SectorImpactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectorImpactComponent,
      selectors: [["app-sector-impact"]],
      inputs: {
        clientID: "clientID"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 10,
      vars: 6,
      consts: [[1, "row"], [1, "col-6"], [2, "font-size", "1.18vw"], [1, "w-85"], ["id", "show", 2, "width", "100%", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "updateChange"], [4, "ngIf"], ["src", "assets/images/circle_logo.png", "alt", "no pic", 1, "cir", "pt-5", 2, "width", "10vw"], [2, "color", "#A1ACCB", "font-size", "1.18vw", "margin-right", "auto", "margin-left", "auto", "text-align", "-webkit-center", "width", "50%"], [1, "font-18"], [3, "data"]],
      template: function SectorImpactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PORTFOLIO WEIGHTAGE BY SECTOR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "highcharts-chart", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function SectorImpactComponent_Template_highcharts_chart_updateChange_6_listener($event) {
            return ctx.updateFlag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SectorImpactComponent_ng_container_8_Template, 4, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SectorImpactComponent_ng_container_9_Template, 6, 4, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.updateFlag)("oneToOne", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDoughnut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doughnutDataBySector && ctx.doughnutDataBySector.length && ctx.showDoughnut);
        }
      },
      directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_4__["HighchartsChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _sector_doughnut_sector_doughnut_component__WEBPACK_IMPORTED_MODULE_6__["SectorDoughnutComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]],
      styles: [".cir[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdG9yLWltcGFjdC9zZWN0b3ItaW1wYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rvci1pbXBhY3Qvc2VjdG9yLWltcGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectorImpactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sector-impact',
          templateUrl: './sector-impact.component.html',
          styleUrls: ['./sector-impact.component.css']
        }]
      }], function () {
        return [{
          type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, {
        clientID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sidenav/sidenav.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidenav/sidenav.component.ts ***!
    \**********************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidenavComponent =
    /*#__PURE__*/
    function () {
      function SidenavComponent() {
        _classCallCheck(this, SidenavComponent);
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
      return new (t || SidenavComponent)();
    };

    SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidenavComponent,
      selectors: [["app-sidenav"]],
      decls: 14,
      vars: 0,
      consts: [["id", "mySidebar", "onmouseenter", "openNav(this)", "onmouseleave", "closeNav(this)", 1, "sidebar"], ["href", "javascript:void(0)", "onclick", "closeNav()", 1, "closebtn"], ["href", "#"], ["id", "main"], ["onclick", "openNav()", 1, "openbtn"]],
      template: function SidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2630 Open Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".sidebar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 10px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  .openbtn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    background-color: #111;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    border: none;\r\n  }\r\n  \r\n  .openbtn[_ngcontent-%COMP%]:hover {\r\n    background-color: #444;\r\n  }\r\n  \r\n  #main[_ngcontent-%COMP%] {\r\n    transition: margin-left .5s;\r\n    padding: 16px;\r\n  }\r\n  \r\n  \r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidebar[_ngcontent-%COMP%] {padding-top: 15px;}\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjs7RUFFQSxnSUFBZ0k7O0VBQ2hJO0lBQ0UsVUFBVSxpQkFBaUIsQ0FBQztJQUM1QixZQUFZLGVBQWUsQ0FBQztFQUM5QiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaWRlYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciBhIHtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluIHtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGViYXIge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAgIC5zaWRlYmFyIGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidenav',
          templateUrl: './sidenav.component.html',
          styleUrls: ['./sidenav.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tab/tab.component.ts":
  /*!**************************************!*\
    !*** ./src/app/tab/tab.component.ts ***!
    \**************************************/

  /*! exports provided: TabComponent */

  /***/
  function srcAppTabTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
      return TabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var TabComponent = function TabComponent() {
      _classCallCheck(this, TabComponent);

      this.notificationCount = 0;
    };

    TabComponent.ɵfac = function TabComponent_Factory(t) {
      return new (t || TabComponent)();
    };

    TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabComponent,
      selectors: [["app-tab"]],
      inputs: {
        active: "active",
        tabTitle: "tabTitle",
        notificationCount: "notificationCount"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 2,
      consts: [[1, "pane", 3, "hidden"], [1, "notification-number"]],
      template: function TabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notificationCount);
        }
      },
      styles: [".pane[_ngcontent-%COMP%] {\r\n  \r\n  padding: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.notification-number[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n    top: 214px;\r\n    margin-left: 415px;\r\n    font-size: 12px;\r\n    background: red;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiL3RhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGFiL3RhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmUge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7ICovXHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1udW1iZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tab',
          templateUrl: './tab.component.html',
          styleUrls: ['./tab.component.css']
        }]
      }], null, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notificationCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tabs/tabs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/tabs.component.ts ***!
    \****************************************/

  /*! exports provided: TabsComponent */

  /***/
  function srcAppTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
      return TabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tab/tab.component */
    "./src/app/tab/tab.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TabsComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_2_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

          var tab_r136 = ctx.$implicit;

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r137.select(tab_r136);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r136 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r136.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r136.tabTitle);
      }
    }

    var _c0 = ["*"];

    var TabsComponent =
    /*#__PURE__*/
    function () {
      function TabsComponent() {
        _classCallCheck(this, TabsComponent);
      }

      _createClass(TabsComponent, [{
        key: "select",
        value: function select(tab) {
          this.tabs.toArray().forEach(function (tab) {
            tab.active = false;
          });
          tab.active = true;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var actives = this.tabs.filter(function (tab) {
            return tab.active;
          });
          if (actives.length === 0) this.select(this.tabs.first);
        }
      }]);

      return TabsComponent;
    }();

    TabsComponent.ɵfac = function TabsComponent_Factory(t) {
      return new (t || TabsComponent)();
    };

    TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabsComponent,
      selectors: [["app-tabs"]],
      contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
        }
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 1,
      consts: [[1, "head"], [1, "tabs"], ["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab", 3, "click"]],
      template: function TabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabsComponent_li_2_Template, 3, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["div.head[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\ndiv.head[_ngcontent-%COMP%]   ul.tabs[_ngcontent-%COMP%] {\r\n  float: left;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\ndiv.head[_ngcontent-%COMP%]   ul.tabs[_ngcontent-%COMP%]   li.tab[_ngcontent-%COMP%] {\r\n  \r\n  display: inline-block;\r\n  padding: 10px;\r\n  margin-right: 20px !important;\r\n}\r\n\r\ndiv.head[_ngcontent-%COMP%]   ul.tabs[_ngcontent-%COMP%]   li.tab[_ngcontent-%COMP%]:hover {\r\n  background-color: #E8E8E8;\r\n  cursor: pointer;\r\n}\r\n\r\ndiv.head[_ngcontent-%COMP%]   ul.tabs[_ngcontent-%COMP%]   li.tab.active[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\ndiv.head[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid lightgray;\r\n}\r\n\r\nli.tab.active[_ngcontent-%COMP%]{\r\n  border-bottom: #3466F6;\r\n    border-bottom-width: 3px;\r\n    border-bottom-style: solid;\r\n}\r\n\r\nli.tab.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      color: #3466F6;\r\n    font-weight: 500;\r\n    \r\n    font-size: 16px;\r\n}\r\n\r\nli.tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    \r\n    font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQkFBc0I7SUFDcEIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFDQTtNQUNNLGNBQWM7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5QyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuaGVhZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmRpdi5oZWFkIHVsLnRhYnMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmRpdi5oZWFkIHVsLnRhYnMgbGkudGFiIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwOyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5kaXYuaGVhZCB1bC50YWJzIGxpLnRhYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpdi5oZWFkIHVsLnRhYnMgbGkudGFiLmFjdGl2ZSB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDsgKi9cclxufVxyXG5cclxuZGl2LmhlYWR7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxubGkudGFiLmFjdGl2ZXtcclxuICBib3JkZXItYm90dG9tOiAjMzQ2NkY2O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbn1cclxubGkudGFiLmFjdGl2ZSBhe1xyXG4gICAgICBjb2xvcjogIzM0NjZGNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAvKiBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvICFpbXBvcnRhbnQ7ICAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5saS50YWIgYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAvKiBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvICFpbXBvcnRhbnQ7ICAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tabs',
          templateUrl: './tabs.component.html',
          styleUrls: ['./tabs.component.css']
        }]
      }], null, {
        tabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tooltip.directive.ts":
  /*!**************************************!*\
    !*** ./src/app/tooltip.directive.ts ***!
    \**************************************/

  /*! exports provided: TooltipDirective */

  /***/
  function srcAppTooltipDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return TooltipDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TooltipDirective =
    /*#__PURE__*/
    function () {
      function TooltipDirective(el, renderer) {
        _classCallCheck(this, TooltipDirective);

        this.el = el;
        this.renderer = renderer; // 호스트 요소와 tooltip 요소 간의 거리

        this.offset = 10;
      }

      _createClass(TooltipDirective, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
          if (!this.tooltip) {
            this.show();
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          if (this.tooltip) {
            this.hide();
          }
        }
      }, {
        key: "show",
        value: function show() {
          this.create();
          this.setPosition();
          this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this30 = this;

          this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
          window.setTimeout(function () {
            _this30.renderer.removeChild(document.body, _this30.tooltip);

            _this30.tooltip = null;
          }, this.delay);
        }
      }, {
        key: "create",
        value: function create() {
          this.tooltip = this.renderer.createElement('span');
          this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipTitle) // textNode
          );
          this.renderer.appendChild(document.body, this.tooltip); // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

          this.renderer.addClass(this.tooltip, 'ng-tooltip');
          this.renderer.addClass(this.tooltip, "ng-tooltip-".concat(this.placement)); // delay 설정

          this.renderer.setStyle(this.tooltip, '-webkit-transition', "opacity ".concat(this.delay, "ms"));
          this.renderer.setStyle(this.tooltip, '-moz-transition', "opacity ".concat(this.delay, "ms"));
          this.renderer.setStyle(this.tooltip, '-o-transition', "opacity ".concat(this.delay, "ms"));
          this.renderer.setStyle(this.tooltip, 'transition', "opacity ".concat(this.delay, "ms"));
        }
      }, {
        key: "setPosition",
        value: function setPosition() {
          // 호스트 요소의 사이즈와 위치 정보
          var hostPos = this.el.nativeElement.getBoundingClientRect(); // tooltip 요소의 사이즈와 위치 정보

          var tooltipPos = this.tooltip.getBoundingClientRect(); // window의 scroll top
          // getBoundingClientRect 메소드는 viewport에서의 상대적인 위치를 반환한다.
          // 스크롤이 발생한 경우, tooltip 요소의 top에 세로 스크롤 좌표값을 반영하여야 한다.

          var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          var top, left;

          if (this.placement === 'top') {
            top = hostPos.top - tooltipPos.height - this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
          }

          if (this.placement === 'bottom') {
            top = hostPos.bottom + this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
          }

          if (this.placement === 'left') {
            top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
            left = hostPos.left - tooltipPos.width - this.offset;
          }

          if (this.placement === 'right') {
            top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
            left = hostPos.right + this.offset;
          } // 스크롤이 발생한 경우, tooltip 요소의 top에 세로 스크롤 좌표값을 반영하여야 한다.


          this.renderer.setStyle(this.tooltip, 'top', "".concat(top + scrollPos, "px"));
          this.renderer.setStyle(this.tooltip, 'left', "".concat(left, "px"));
        }
      }]);

      return TooltipDirective;
    }();

    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
      return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TooltipDirective,
      selectors: [["", "tooltip", ""]],
      hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        tooltipTitle: ["tooltip", "tooltipTitle"],
        placement: "placement",
        delay: "delay"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[tooltip]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        tooltipTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tooltip']
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/config/app.config.ts":
  /*!**********************************!*\
    !*** ./src/config/app.config.ts ***!
    \**********************************/

  /*! exports provided: AppConfig */

  /***/
  function srcConfigAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
      return AppConfig;
    });

    var AppConfig = {
      client: 'smartAssistant'
    };
    /***/
  },

  /***/
  "./src/config/client.config.ts":
  /*!*************************************!*\
    !*** ./src/config/client.config.ts ***!
    \*************************************/

  /*! exports provided: ClientConfig */

  /***/
  function srcConfigClientConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientConfig", function () {
      return ClientConfig;
    });

    var ClientConfig = [{
      client: 'luxest',
      headerIconPath: 'assets/images/luxest_logo.png',
      footerIconPath: 'assets/images/luxest_logo.png'
    }, {
      client: 'refinitiv',
      headerIconPath: 'assets/images/refinitiv.png',
      footerIconPath: 'assets/images/refinitiv.png'
    }, {
      client: 'zensar',
      headerIconPath: 'assets/images/zensar_header.png',
      footerIconPath: 'assets/images/zensar_footer.png'
    }, {
      client: 'smartAssistant',
      headerIconPath: 'assets/images/sa_header.png',
      footerIconPath: 'assets/images/sa_footer.png'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\yh61736\SmartAssistFrontEnd\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map