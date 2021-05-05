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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet>\n\n</router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/build-chat/build-chat.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/build-chat/build-chat.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuildChatBuildChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n  <div class=\"left-right left\">\n    <div class=\"search\">\n      <input id=\"search-line\" type=\"text\" class=\"input-text\" placeholder=\"Enter login...\" [(ngModel)]=\"loginForSearch\" (ngModelChange)=\"searchUser()\">\n      <input id=\"search-btn\" type=\"button\" class=\"btm btm-orange\" value=\"Search\" (click)=\"searchUser()\">\n    </div>\n    <div class=\"researched-list\">\n      <div class=\"found-user\" *ngFor=\"let user of foundUsers\" >\n        <div class=\"user-icon\">\n          {{user.firstName.charAt(0)}}{{user.lastName.charAt(0)}}\n        </div>\n        <input type=\"text\" class=\"login\" value=\"{{user.username}}\"  readonly>\n<!--          Login adsdsadasdas-->\n<!--        </h2>-->\n        <input type=\"text\" class=\"firstname-surname\" value=\"({{user.firstName}} {{user.lastName}})\" readonly>\n<!--          (First name and surname) fdsfgsdgsgsdgsdgsdgsd sdg sdgsd gsd gsd-->\n<!--        </input>-->\n        <input type=\"button\" class=\"btm btm-orange btm-add\" value=\"+\" (click)=\"addUser(user)\">\n      </div>\n\n\n\n\n\n    </div>\n  </div>\n  <div class=\"left-right right\">\n    <div class=\"chatname-and-exit\">\n      <input type=\"text\" class=\"input-text\" id=\"chatname-text\" placeholder=\"Enter chatname...\" [(ngModel)]=\"chatname\" [disabled]=\"addedUsers.length < 2\">\n      <input type=\"button\" class=\"btm exit btm-orange\" value=\"X\" (click)=\"switchCreatingChat()\">\n    </div>\n    <div class=\"added-users\">\n      <div class=\"added-user\" *ngFor=\"let user of addedUsers\">\n        <div class=\"user-icon\">\n          {{user.firstName.charAt(0)}}{{user.lastName.charAt(0)}}\n        </div>\n        <div class=\"user-information\">\n          <input type=\"text\" class=\"added-name\" value=\"{{user.firstName}}\" readonly>\n          <input type=\"text\" class=\"added-name\" value=\"{{user.lastName}}\" readonly>\n\n\n        </div>\n        <input type=\"button\" class=\"btm btm-blue btm-delete\" value=\"-\" (click)=\"remove(user)\">\n      </div>\n\n\n\n\n    </div>\n    <input type=\"button\" id=\"create-chat\" class=\"btm btm-blue\" value=\"Add chat\" (click)=\"createChat()\" [disabled]=\"addedUsers.length == 0\">\n  </div>\n<!--  <input type=\"button\" class=\"btm exit\" value=\"X\">-->\n\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1>\n    Welcome!\n  </h1>\n  <div class=\"event\">\n    <div class=\"log-in left-right\">\n\n      <form class=\"form\">\n        <input [(ngModel)]=\"loginUserData.username\" name=\"username\" type=\"text\" placeholder=\"login\">\n        <input [(ngModel)]=\"loginUserData.password\" name=\"password\"type=\"password\" placeholder=\"password\">\n        <input type=\"button\" (click)=\"loginUser()\" class=\"btm btm-orange\" value=\"Log In\">\n      </form>\n\n    </div>\n    <div class=\"sign-up left-right\">\n      <p>Create a new account</p>\n      <input type=\"button\" (click)=\"navigateToRegister()\" class=\"btm btm-blue\" value=\"Sign Up\">\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" id=\"main-container\" [class.background-blur]=\"isCreatingChat()\">\n\n  <div class=\"left left-right\">\n    <div class=\"logo\" (click)=\"a()\">\n      <img src=\"../../assets/img/logo.png\" alt=\"logo\" width=\"213\" height=\"81\">\n    </div>\n    <input id=\"btn-add-chat\" type=\"button\" (click)=\"switchCreatingChat()\" class=\"btm btm-blue\" value=\"Add chat\">\n\n    <div class=\"chats\">\n\n      <div class=\"chat btm\" *ngFor=\"let chat of _messengerService.chats | async \" (click)=\"swapChat(chat)\">\n        <div class=\"user-icon\">\n          {{chat | iconLabel}}\n        </div>\n        <div class=\"chat-information\">\n          <input type=\"text\" class=\"chat-name-list\" value=\"{{chat.name}}\" readonly>\n\n\n          <img src=\"../../assets/img/mail.png\" class=\"new-message-icon\" alt=\"new message\">\n          <input type=\"text\" class=\"last-message\" value=\"{{chat.lastMessage == null ? '...' : chat.lastMessage.text}}\"\n                 readonly disabled>\n        </div>\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n  <div class=\"right left-right\">\n\n    <div class=\"header\">\n      <h1>\n        {{(_messengerService.user | async).firstName }} {{_messengerService.user.value.lastName}}\n      </h1>\n      <input type=\"button\" (click)=\"logOut()\" id=\"log-out\" value=\"Log Out\">\n    </div>\n    <div class=\"current-chat\" *ngIf=\"(_messengerService.currentChat | async)?.id != null; else selectChat\" >\n      <div class=\"chat-header\">\n        <div class=\"chat-name\">\n        <span class=\"chat-naming\">\n          {{(_messengerService.currentChat | async)?.name}}\n        </span>\n          <span class=\"status\" *ngIf=\"!(_messengerService.currentChat | async)?.group\">\n          online\n        </span>\n        </div>\n        <div class=\"user-icon\" id=\"icon-in-header\">\n          {{_messengerService.currentChat | async | iconLabel}}\n        </div>\n      </div>\n      <div class=\"chat-display\">\n        <div class=\"messages-container\">\n          <div class=\"messages\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n            <div class=\"message\" *ngFor=\"let message of (_messengerService.currentChat | async)?.messages\"\n                 [class.my-message]=\"isMyMessage(message)\">\n              <h3>\n                {{message.author.firstName}} {{message.author.lastName}}\n              </h3>\n              <p>\n                {{message.text}}\n              </p>\n              <h3 class=\"date\">\n                {{message.created | date:'MMM d, HH:mm'}}\n              </h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"current-message enter\" >\n          <textarea class=\"new-message\" [(ngModel)]=\"newMessageText\" placeholder=\"Enter text...\" (keydown.control.enter)=\"sendMessage()\" (blur)=\"setCurrentMessage(_messengerService.currentChat.getValue())\"></textarea>\n          <button class=\"btm btm-orange btn-send\" (click)=\"sendMessage()\">\n            <div class=\"triangle\">\n\n            </div>\n          </button>\n        </div>\n\n      </div>\n    </div>\n    <ng-template #selectChat>\n      <h1 class=\"select-chat\">\n        Select any chat...\n      </h1>\n    </ng-template>\n\n\n  </div>\n\n</div>\n<div class=\"chat-creator\">\n  <app-build-chat id=\"build-chat\" *ngIf=\"isCreatingChat()\"></app-build-chat>\n<!--  <input type=\"button\" class=\"btm exit\" value=\"X\">-->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <form class=\"inner-container\">\n    <h1>\n      Create a new account\n    </h1>\n    <input [(ngModel)]=\"registerUserData.firstName\" name=\"first-name\" type=\"text\" placeholder=\"First name\">\n    <input [(ngModel)]=\"registerUserData.lastName\" name=\"last-name\" type=\"text\" placeholder=\"Surname\">\n    <input [(ngModel)]=\"registerUserData.email\" name=\"email\" type=\"text\" placeholder=\"email\">\n    <input [(ngModel)]=\"registerUserData.username\" name=\"username\" type=\"text\" placeholder=\"login\">\n    <input [(ngModel)]=\"registerUserData.password\" name=\"password\" type=\"password\" placeholder=\"password\">\n    <input type=\"button\" (click)=\"registerUser()\" class=\"btm btm-orange\" value=\"Sign up\">\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/auth.guard */
    "./src/app/shared/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'main',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
      canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "router-outlet{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInJvdXRlci1vdXRsZXR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/auth.guard */
    "./src/app/shared/auth.guard.ts");
    /* harmony import */


    var _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/token-interceptor.service */
    "./src/app/shared/token-interceptor.service.ts");
    /* harmony import */


    var _build_chat_build_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./build-chat/build-chat.component */
    "./src/app/build-chat/build-chat.component.ts");
    /* harmony import */


    var _shared_icon_label_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/icon-label.pipe */
    "./src/app/shared/icon-label.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__["MainPageComponent"], _build_chat_build_chat_component__WEBPACK_IMPORTED_MODULE_13__["BuildChatComponent"], _shared_icon_label_pipe__WEBPACK_IMPORTED_MODULE_14__["IconLabelPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
      providers: [_shared_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/build-chat/build-chat.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/build-chat/build-chat.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuildChatBuildChatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n  /*background: burlywood;*/\n  width: 800px;\n  height: 600px;\n}\n.left{\n  width: 67%;\n  /*background: #0053b7;*/\n  margin: auto;\n  border-right: 1px solid #7b7b7b;\n  padding-left: 10px;\n}\n.right{\n  width: 33%;\n  margin: auto;\n  /*background: #ffa940;*/\n  padding: 0 10px;\n}\n.left-right{\n  margin-top: 10px;\n  /*margin-bottom: 20px;*/\n  display: inline-block;\n  text-align: center;\n  vertical-align: top;\n  height: 580px;\n  /*border: 1px solid black;*/\n}\n.search{\n  height: 50px;\n  padding-right: 10px;\n}\n#search-line{\n  width: 68%;\n  margin-right: 10px;\n}\n#search-btn{\n  width: 30%;\n}\ninput{\n  padding-left: 10px;\n  height: 50px;\n  vertical-align: top;\n}\n.btm{\n  font-family: 'Lato', sans-serif;\n  font-size: 20pt;\n  padding: 0;\n}\n.input-text{\n  font-size: 15pt;\n}\n.researched-list{\n  margin-top: 10px;\n  height: 520px;\n  overflow-y: scroll;\n  padding-right: 5px;\n}\n.researched-list::-webkit-scrollbar{\n  /*height: 497px;*/\n  width: 10px;\n  /*margin: 10px;*/\n}\n.researched-list::-webkit-scrollbar-track{\n  background: #f1f1f1;\n  border-radius: 5px;\n}\n.researched-list::-webkit-scrollbar-thumb{\n  background: var(--gray-color);\n  border-radius: 5px;\n}\n.user-icon{\n  display: inline-block;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  background: var(--blue-color);\n  text-align: center;\n  font-size: 17pt;\n  /*margin-top: 15px;*/\n  /*margin-left: 15px;*/\n  padding-top: 7px;\n  /*float: left;*/\n  font-family: 'Lato', sans-serif;\n  color: #ffffff;\n  vertical-align: center;\n  float: left;\n}\nh2{\n  display: inline-block;\n  float: left;\n  vertical-align: center;\n  margin-left: 15px;\n  margin-top: 5px;\n  font-family: 'Lato', sans-serif;\n}\n.found-user{\n  padding: 7px 0;\n  height: 50px;\n}\n.btm-add{\n  float: right;\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  padding-bottom: 2px;\n  padding-left: 1px;\n}\n.login{\n  color: var(--orange-color);\n  margin-top: -7px;\n  font-size: 18pt;\n  font-family: 'Lato', sans-serif;\n  width: 35%;\n  background: none;\n}\n.firstname-surname{\n  margin-top: -7px;\n  font-size: 13pt;\n  background: none;\n  font-weight: bold;\n}\n.added-name{\n  height: 20px;\n  margin: 0;\n  padding: 0 0 0 5px;\n  width: 100%;\n  background: 0;\n  font-size: 10pt;\n  font-weight: bold;\n}\n#chatname-text{\n  float: left;\n  width: 75%;\n  margin: 0;\n}\n.exit{\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  float: right;\n  z-index: 99999999999;\n}\n.chatname-and-exit{\n  height: 50px;\n}\n.added-users{\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 460px;\n  overflow-y: scroll;\n  padding-right: 5px;\n}\n.added-users::-webkit-scrollbar{\n  /*height: 497px;*/\n  width: 10px;\n  /*margin: 10px;*/\n}\n.added-users::-webkit-scrollbar-track{\n  background: #f1f1f1;\n  border-radius: 5px;\n}\n.added-users::-webkit-scrollbar-thumb{\n  background: var(--gray-color);\n  border-radius: 5px;\n}\n#create-chat{\n  width: 100%;\n}\n.btm-delete{\n  float: right;\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  padding-bottom: 2px;\n  padding-left: 1px;\n}\n.user-information{\n  /*padding-top: 2px;*/\n  float: left;\n  margin-left: 10px;\n  text-align: left;\n  width: 60%;\n\n}\n.added-user{\n  height: 50px;\n}\nda{\n  float: right;\n  margin: 0;\n  padding: 0;\n  display: block;\n}\n#c{\n  height: 40px;\n  width: 40px;\n  bottom: 500px;\n  left: 500px;\n  font-size: 35px;\n  margin: 0;\n  padding: 0;\n}\n.firstname-surname{\n  display: inline-block;\n  /*width: 300px;*/\n  overflow: hidden;\n  height: 50px;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGQtY2hhdC9idWlsZC1jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7O0FBRVo7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9idWlsZC1jaGF0L2J1aWxkLWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIC8qYmFja2dyb3VuZDogYnVybHl3b29kOyovXG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cbi5sZWZ0e1xuICB3aWR0aDogNjclO1xuICAvKmJhY2tncm91bmQ6ICMwMDUzYjc7Ki9cbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjN2I3YjdiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5yaWdodHtcbiAgd2lkdGg6IDMzJTtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKmJhY2tncm91bmQ6ICNmZmE5NDA7Ki9cbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ubGVmdC1yaWdodHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLyptYXJnaW4tYm90dG9tOiAyMHB4OyovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBoZWlnaHQ6IDU4MHB4O1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG59XG5cbi5zZWFyY2h7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuI3NlYXJjaC1saW5le1xuICB3aWR0aDogNjglO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNzZWFyY2gtYnRue1xuICB3aWR0aDogMzAlO1xufVxuXG5pbnB1dHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5idG17XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0LXRleHR7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLnJlc2VhcmNoZWQtbGlzdHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiA1MjBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5yZXNlYXJjaGVkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAvKmhlaWdodDogNDk3cHg7Ki9cbiAgd2lkdGg6IDEwcHg7XG4gIC8qbWFyZ2luOiAxMHB4OyovXG59XG5cbi5yZXNlYXJjaGVkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5yZXNlYXJjaGVkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi51c2VyLWljb257XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B0O1xuICAvKm1hcmdpbi10b3A6IDE1cHg7Ki9cbiAgLyptYXJnaW4tbGVmdDogMTVweDsqL1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICAvKmZsb2F0OiBsZWZ0OyovXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuaDJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi5mb3VuZC11c2Vye1xuICBwYWRkaW5nOiA3cHggMDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uYnRtLWFkZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbn1cblxuLmxvZ2lue1xuICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgZm9udC1zaXplOiAxOHB0O1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZmlyc3RuYW1lLXN1cm5hbWV7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZGRlZC1uYW1le1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogMDtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NoYXRuYW1lLXRleHR7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDA7XG59XG5cbi5leGl0e1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5O1xufVxuXG4uY2hhdG5hbWUtYW5kLWV4aXR7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmFkZGVkLXVzZXJze1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDQ2MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmFkZGVkLXVzZXJzOjotd2Via2l0LXNjcm9sbGJhcntcbiAgLypoZWlnaHQ6IDQ5N3B4OyovXG4gIHdpZHRoOiAxMHB4O1xuICAvKm1hcmdpbjogMTBweDsqL1xufVxuXG4uYWRkZWQtdXNlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hZGRlZC11c2Vyczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNjcmVhdGUtY2hhdHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG0tZGVsZXRle1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xufVxuXG4udXNlci1pbmZvcm1hdGlvbntcbiAgLypwYWRkaW5nLXRvcDogMnB4OyovXG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDYwJTtcblxufVxuXG4uYWRkZWQtdXNlcntcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5kYXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jY3tcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm90dG9tOiA1MDBweDtcbiAgbGVmdDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlyc3RuYW1lLXN1cm5hbWV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyp3aWR0aDogMzAwcHg7Ki9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/build-chat/build-chat.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/build-chat/build-chat.component.ts ***!
    \****************************************************/

  /*! exports provided: BuildChatComponent */

  /***/
  function srcAppBuildChatBuildChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildChatComponent", function () {
      return BuildChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/messenger.service */
    "./src/app/shared/messenger.service.ts");
    /* harmony import */


    var _entity_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../entity/Chat */
    "./src/app/entity/Chat.ts");

    var BuildChatComponent =
    /*#__PURE__*/
    function () {
      function BuildChatComponent(_messengerService) {
        _classCallCheck(this, BuildChatComponent);

        this._messengerService = _messengerService;
        this.loginForSearch = "";
        this.chatname = "";
        this.foundUsers = Array();
        this.addedUsers = Array();
      }

      _createClass(BuildChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchCreatingChat",
        value: function switchCreatingChat() {
          this._messengerService.creatingChat = !this._messengerService.creatingChat;
        }
      }, {
        key: "isCreatingChat",
        value: function isCreatingChat() {
          return this._messengerService.creatingChat;
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          var arr = this.addedUsers.filter(function (value) {
            return value.username == user.username;
          });

          if (arr.length == 0 && this._messengerService.user.getValue().username != user.username) {
            this.addedUsers.push(user);
          }
        }
      }, {
        key: "remove",
        value: function remove(user) {
          this.addedUsers = this.addedUsers.filter(function (value) {
            return value.username != user.username;
          });

          if (this.addedUsers.length < 2) {
            this.chatname = "";
          }
        }
      }, {
        key: "searchUser",
        value: function searchUser() {
          var _this = this;

          this._messengerService.searchUsers(this.loginForSearch).subscribe(function (res) {
            console.log(res);
            _this.foundUsers = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "createChat",
        value: function createChat() {
          var _this2 = this;

          var chat = new _entity_Chat__WEBPACK_IMPORTED_MODULE_3__["Chat"]();
          chat.name = this.chatname;
          chat.members = this.addedUsers.map(function (value) {
            return value.username;
          });

          this._messengerService.createChat(chat).subscribe(function (res) {
            _this2.switchCreatingChat();

            console.log(res);

            _this2._messengerService.refreshData();

            _this2._messengerService.addChat(res);

            _this2._messengerService.swapCurrentChatById(res.id);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return BuildChatComponent;
    }();

    BuildChatComponent.ctorParameters = function () {
      return [{
        type: _shared_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]
      }];
    };

    BuildChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-build-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./build-chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/build-chat/build-chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./build-chat.component.css */
      "./src/app/build-chat/build-chat.component.css")).default]
    })], BuildChatComponent);
    /***/
  },

  /***/
  "./src/app/entity/Chat.ts":
  /*!********************************!*\
    !*** ./src/app/entity/Chat.ts ***!
    \********************************/

  /*! exports provided: Chat */

  /***/
  function srcAppEntityChatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat", function () {
      return Chat;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Chat = function Chat() {
      _classCallCheck(this, Chat);
    };
    /***/

  },

  /***/
  "./src/app/entity/Message.ts":
  /*!***********************************!*\
    !*** ./src/app/entity/Message.ts ***!
    \***********************************/

  /*! exports provided: Message */

  /***/
  function srcAppEntityMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Message = function Message() {
      _classCallCheck(this, Message);
    };
    /***/

  },

  /***/
  "./src/app/entity/User.ts":
  /*!********************************!*\
    !*** ./src/app/entity/User.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppEntityUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n  width: 800px;\n  height: 600px;\n}\n\ninput{\n  font-size: 30pt;\n  width: 300px;\n  height: 80px;\n}\n\n.left-right{\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  vertical-align: top;\n}\n\n.log-in{\n  border-right: 3px solid #7b7b7b;\n\n}\n\n.sign-up{\n  /*border-left: 3px solid #7b7b7b;*/\n  height: 100%;\n}\n\n.event{\n  margin-top: 60px;\n}\n\n.btm{\n  font-size: 40pt;\n}\n\np{\n  font-family: 'Lato', sans-serif;\n  font-size: 40pt;\n  margin-top: 30px;\n  margin-bottom: 72px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjs7QUFFakM7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG59XG5cbmlucHV0e1xuICBmb250LXNpemU6IDMwcHQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubGVmdC1yaWdodHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5sb2ctaW57XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM3YjdiN2I7XG5cbn1cbi5zaWduLXVwe1xuICAvKmJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdiN2I3YjsqL1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ldmVudHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmJ0bXtcbiAgZm9udC1zaXplOiA0MHB0O1xufVxuXG5we1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQwcHQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDcycHg7XG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/messenger.service */
    "./src/app/shared/messenger.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(_auth, _router, _messengerService) {
        _classCallCheck(this, LoginComponent);

        this._auth = _auth;
        this._router = _router;
        this._messengerService = _messengerService;
        this.loginUserData = {
          username: "",
          password: ""
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this3 = this;

          this._auth.loginUser(this.loginUserData).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);

            _this3._messengerService.refreshData();

            _this3._router.navigate(['/']);
          }, function (err) {
            console.log(err);
            alert(err.error);
          });
        }
      }, {
        key: "navigateToRegister",
        value: function navigateToRegister() {
          this._router.navigate(['/register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/main-page/main-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPageMainPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#main-container{\n  width: 1200px;\n  height: 900px;\n  /*filter: blur(5px) brightness(90%);*/\n  /*filter: grayscale(50%);*/\n}\n\n.background-blur{\n  -webkit-filter: blur(5px) brightness(90%);\n          filter: blur(5px) brightness(90%);\n}\n\n.exit{\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  float: right;\n  /*margin-right: 500px;*/\n}\n\n/*.chat-creator{*/\n\n/*  width: 900px;*/\n\n/*  height: 600px;*/\n\n/*}*/\n\n#build-chat{\n  width: 800px;\n  height: 600px;\n}\n\n.left{\n  width: 33%;\n  /*background: #0053b7;*/\n  margin: auto;\n  border-right: 2px solid #7b7b7b;\n}\n\n.right{\n  width: 67%;\n  margin: auto;\n  /*background: #ffa940;*/\n  padding-right: 20px;\n}\n\n.left-right{\n  margin-top: 20px;\n  display: inline-block;\n  text-align: center;\n  vertical-align: top;\n  height: 860px;\n  /*border: 1px solid black;*/\n}\n\n.logo{\n\n}\n\n#btn-add-chat{\n  width: 350px;\n  height: 80px;\n  font-size: 40pt;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n\n.chat{\n  width: 100%;\n  /*background: #ffa940;*/\n  height: 120px;\n  /*border: 1px solid black;*/\n  font-family: 'Lato', sans-serif;\n  text-align: left;\n  color: #000000;\n}\n\n.chat:hover{\n  background: #e8e8e8;\n  cursor: pointer;\n}\n\n.chats{\n  height: 647px;\n  overflow: scroll;\n  overflow-x:hidden;\n  margin-right: 5px;\n  padding-right: 7px;\n}\n\n.chats::-webkit-scrollbar{\n  /*height: 497px;*/\n  width: 10px;\n  /*margin: 10px;*/\n}\n\n.chats::-webkit-scrollbar-track{\n  background: #f1f1f1;\n  border-radius: 5px;\n}\n\n.chats::-webkit-scrollbar-thumb{\n  background: var(--gray-color);\n  border-radius: 5px;\n}\n\n.user-icon{\n  display: inline-block;\n  overflow: hidden;\n  width: 90px;\n  height: 90px;\n  background: var(--blue-color);\n  text-align: center;\n  font-size: 30pt;\n  margin-top: 15px;\n  margin-left: 15px;\n  padding-top: 20px;\n  /*float: left;*/\n  font-family: 'Lato', sans-serif;\n  color: #ffffff;\n}\n\n.chat-information{\n  display: inline-block;\n  width: 240px;\n  margin-left: 20px;\n  vertical-align: top;\n}\n\n.last-message{\n  padding-left: 10px;\n  height: 35px;\n  margin-top: 10px;\n  width: 100%;\n  cursor: pointer;\n}\n\nh2{\n  display: inline-block;\n  text-align: left;\n  font-size: 20pt;\n  font-family: 'Lato', sans-serif;\n  margin: 20px 0 0 0;\n}\n\n.new-message-icon{\n  float: right;\n  margin: 15px 0 0 0;\n}\n\n.header{\n  height: 80px;\n  border-bottom: 2px solid #7b7b7b;\n  text-align: right;\n}\n\nh1{\n  margin: 0;\n  font-size: 25pt;\n  text-align: right;\n}\n\n#log-out{\n  font-size: 15pt;\n  color: var(--blue-color);\n  background: #ffffff;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n\n}\n\n#log-out:hover{\n  cursor: pointer;\n}\n\n.chat-header{\n  margin: 20px 0;\n  position: relative;\n  box-shadow: 0px 60px 60px 0px #ffffff;\n  z-index:4;\n}\n\n.chat-name-list{\n  width: 200px;\n  font-family: 'Lato', sans-serif;\n  font-size: 15pt;\n  font-weight: bold;\n  margin: 15px 0 0 0;\n  padding: 0;\n  height: 45px;\n  background: none;\n  cursor: pointer;\n}\n\nspan{\n  display: block;\n  font-family: 'Lato', sans-serif;\n}\n\n.chat-name{\n  font-size: 20pt;\n  display: inline-block;\n  height: 90px;\n  margin-top: 15px;\n  /*align-content: center;*/\n}\n\n.status{\n  font-size: 15pt;\n  color: var(--orange-color);\n}\n\n#icon-in-header{\n  margin: 0;\n  float: right;\n  /*padding: 0;*/\n  /*text-align: right;*/\n}\n\n.chat-display{\n  /*overflow: scroll;*/\n  /*background: #ffa940;*/\n  position: relative;\n  vertical-align: bottom;\n  margin-left: 20px;\n  /*padding-bottom: 20px;*/\n  height: 635px;\n  /*border: 1px solid black;*/\n}\n\n.messages-container{\n  height: 497px;\n  position: relative;\n}\n\n.messages{\n  overflow: scroll;\n  /*height: 497px;*/\n  max-height: 497px;\n  width: 100%;\n  overflow-x:hidden;\n\n\n  position: absolute;\n  bottom: 0;\n\n  padding-right: 10px;\n  /*display: table;*/\n  /*z-index: 999;*/\n}\n\n.messages::-webkit-scrollbar{\n  /*height: 497px;*/\n  width: 10px;\n  /*margin: 10px;*/\n}\n\n.messages::-webkit-scrollbar-track{\n  background: #f1f1f1;\n  border-radius: 5px;\n}\n\n.messages::-webkit-scrollbar-thumb{\n  background: var(--gray-color);\n  border-radius: 5px;\n}\n\n.message{\n  padding: 15px 15px 3px 15px;\n  width: 445px;\n  margin-bottom: 10px;\n  text-align: left;\n  z-index: 5;\n\n  float: left;\n\n  /*position: absolute;*/\n  /*bottom: 0;*/\n  /*display: table-cell;*/\n  /*vertical-align: bottom;*/\n\n}\n\n.my-message{\n  float: right;\n  background: var(--orange-color);\n  color: #ffffff;\n}\n\nh3{\n  font-size: 10pt;\n  color: var(--blue-color);\n}\n\n.date{\n  text-align: right;\n  vertical-align: bottom;\n  font-size: 8pt;\n  /*padding-bottom: 15px;*/\n  /*margin-left: 300px;*/\n}\n\n.current-message{\n  /*background: #7b7b7b;*/\n  position: absolute;\n  bottom: 0;\n  height: 125px;\n  margin: 0;\n  padding: 5px;\n  width: 100%;\n\n\n\n}\n\n.new-message{\n  font-size: 15pt;\n  background: var(--gray-color);\n  border: none;\n  float: left;\n  width: 635px;\n  height: 110px;\n  padding: 10px;\n  resize: none;\n}\n\n.new-message::-webkit-scrollbar{\n  /*height: 497px;*/\n  width: 0;\n  /*margin: 10px;*/\n}\n\n.new-message:focus{\n  outline: none;\n}\n\n.btn-send{\n  border-radius: 40px;\n  width: 80px;\n  height: 80px;\n  float: right;\n  vertical-align: center;\n  margin: 18px 18px 0 0;\n  position: relative;\n}\n\n.triangle::after{\n  content: '';\n  position: absolute;\n  top: 7px;\n  left: 21px;\n  /*bottom: 0;*/\n  /*right: 0;*/\n  /*margin: auto;*/\n  border: 20px solid transparent;\n  border-bottom: 20px solid white;\n}\n\n.select-chat{\n  text-align: center;\n  margin-top: 35%;\n}\n\n/*::-webkit-scrollbar{*/\n\n/*  width: 7px;*/\n\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUNBQWlDO1VBQWpDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUEsaUJBQWlCOztBQUNqQixrQkFBa0I7O0FBQ2xCLG1CQUFtQjs7QUFDbkIsSUFBSTs7QUFFSjtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBS0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7OztFQUdqQixrQkFBa0I7RUFDbEIsU0FBUzs7RUFFVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTs7RUFFVixXQUFXOztFQUVYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjs7QUFFNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7Ozs7QUFJYjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUEsdUJBQXVCOztBQUN2QixnQkFBZ0I7O0FBQ2hCLElBQUkiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1jb250YWluZXJ7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogOTAwcHg7XG4gIC8qZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcyg5MCUpOyovXG4gIC8qZmlsdGVyOiBncmF5c2NhbGUoNTAlKTsqL1xufVxuXG4uYmFja2dyb3VuZC1ibHVye1xuICBmaWx0ZXI6IGJsdXIoNXB4KSBicmlnaHRuZXNzKDkwJSk7XG59XG5cbi5leGl0e1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qbWFyZ2luLXJpZ2h0OiA1MDBweDsqL1xufVxuXG4vKi5jaGF0LWNyZWF0b3J7Ki9cbi8qICB3aWR0aDogOTAwcHg7Ki9cbi8qICBoZWlnaHQ6IDYwMHB4OyovXG4vKn0qL1xuXG4jYnVpbGQtY2hhdHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ubGVmdHtcbiAgd2lkdGg6IDMzJTtcbiAgLypiYWNrZ3JvdW5kOiAjMDA1M2I3OyovXG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzdiN2I3Yjtcbn1cblxuLnJpZ2h0e1xuICB3aWR0aDogNjclO1xuICBtYXJnaW46IGF1dG87XG4gIC8qYmFja2dyb3VuZDogI2ZmYTk0MDsqL1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5cblxuXG4ubGVmdC1yaWdodHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogODYwcHg7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cbn1cblxuLmxvZ297XG5cbn1cblxuI2J0bi1hZGQtY2hhdHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZvbnQtc2l6ZTogNDBwdDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoYXR7XG4gIHdpZHRoOiAxMDAlO1xuICAvKmJhY2tncm91bmQ6ICNmZmE5NDA7Ki9cbiAgaGVpZ2h0OiAxMjBweDtcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNoYXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoYXRze1xuICBoZWlnaHQ6IDY0N3B4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbn1cblxuLmNoYXRzOjotd2Via2l0LXNjcm9sbGJhcntcbiAgLypoZWlnaHQ6IDQ5N3B4OyovXG4gIHdpZHRoOiAxMHB4O1xuICAvKm1hcmdpbjogMTBweDsqL1xufVxuXG4uY2hhdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jaGF0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi51c2VyLWljb257XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIC8qZmxvYXQ6IGxlZnQ7Ki9cbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jaGF0LWluZm9ybWF0aW9ue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5sYXN0LW1lc3NhZ2V7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oMntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHQ7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cblxuLm5ldy1tZXNzYWdlLWljb257XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xufVxuXG4uaGVhZGVye1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2I3YjdiO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaDF7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNXB0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2xvZy1vdXR7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG59XG5cbiNsb2ctb3V0OmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGF0LWhlYWRlcntcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDYwcHggNjBweCAwcHggI2ZmZmZmZjtcbiAgei1pbmRleDo0O1xufVxuXG4uY2hhdC1uYW1lLWxpc3R7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi5jaGF0LW5hbWV7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC8qYWxpZ24tY29udGVudDogY2VudGVyOyovXG59XG5cbi5zdGF0dXN7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG59XG5cbiNpY29uLWluLWhlYWRlcntcbiAgbWFyZ2luOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qcGFkZGluZzogMDsqL1xuICAvKnRleHQtYWxpZ246IHJpZ2h0OyovXG59XG5cbi5jaGF0LWRpc3BsYXl7XG4gIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xuICAvKmJhY2tncm91bmQ6ICNmZmE5NDA7Ki9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xuICBoZWlnaHQ6IDYzNXB4O1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG59XG5cbi5tZXNzYWdlcy1jb250YWluZXJ7XG4gIGhlaWdodDogNDk3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lc3NhZ2Vze1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAvKmhlaWdodDogNDk3cHg7Ki9cbiAgbWF4LWhlaWdodDogNDk3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OmhpZGRlbjtcblxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIC8qZGlzcGxheTogdGFibGU7Ki9cbiAgLyp6LWluZGV4OiA5OTk7Ki9cbn1cblxuLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhcntcbiAgLypoZWlnaHQ6IDQ5N3B4OyovXG4gIHdpZHRoOiAxMHB4O1xuICAvKm1hcmdpbjogMTBweDsqL1xufVxuXG4ubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tZXNzYWdle1xuICBwYWRkaW5nOiAxNXB4IDE1cHggM3B4IDE1cHg7XG4gIHdpZHRoOiA0NDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgei1pbmRleDogNTtcblxuICBmbG9hdDogbGVmdDtcblxuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAvKmJvdHRvbTogMDsqL1xuICAvKmRpc3BsYXk6IHRhYmxlLWNlbGw7Ki9cbiAgLyp2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyovXG5cbn1cblxuLm15LW1lc3NhZ2V7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmgze1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcbn1cblxuLmRhdGV7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBmb250LXNpemU6IDhwdDtcbiAgLypwYWRkaW5nLWJvdHRvbTogMTVweDsqL1xuICAvKm1hcmdpbi1sZWZ0OiAzMDBweDsqL1xufVxuXG4uY3VycmVudC1tZXNzYWdle1xuICAvKmJhY2tncm91bmQ6ICM3YjdiN2I7Ki9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTI1cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcblxuXG5cbn1cblxuLm5ldy1tZXNzYWdle1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjM1cHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLm5ldy1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhcntcbiAgLypoZWlnaHQ6IDQ5N3B4OyovXG4gIHdpZHRoOiAwO1xuICAvKm1hcmdpbjogMTBweDsqL1xufVxuXG4ubmV3LW1lc3NhZ2U6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4tc2VuZHtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMThweCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRyaWFuZ2xlOjphZnRlcntcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IDIxcHg7XG4gIC8qYm90dG9tOiAwOyovXG4gIC8qcmlnaHQ6IDA7Ki9cbiAgLyptYXJnaW46IGF1dG87Ki9cbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlO1xufVxuXG4uc2VsZWN0LWNoYXR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzUlO1xufVxuXG4vKjo6LXdlYmtpdC1zY3JvbGxiYXJ7Ki9cbi8qICB3aWR0aDogN3B4OyovXG4vKn0qL1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/messenger.service */
    "./src/app/shared/messenger.service.ts");

    var MainPageComponent =
    /*#__PURE__*/
    function () {
      // currentChat: Chat = this._messengerService.currentChat;
      function MainPageComponent(_authService, _router, _messengerService) {
        _classCallCheck(this, MainPageComponent);

        this._authService = _authService;
        this._router = _router;
        this._messengerService = _messengerService;
        this.newMessageText = "";
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this._messengerService.refreshData();

          setInterval(function () {
            return _this4._messengerService.refreshData();
          }, 4000);
        }
      }, {
        key: "switchCreatingChat",
        value: function switchCreatingChat() {
          this._messengerService.creatingChat = !this._messengerService.creatingChat;
        }
      }, {
        key: "isCreatingChat",
        value: function isCreatingChat() {
          return this._messengerService.creatingChat;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          if (confirm('Do you really want to log out?')) {
            this._authService.logOut();

            this._router.navigate(['/login']);
          }
        }
      }, {
        key: "a",
        value: function a() {
          this._messengerService.refreshData();
        }
      }, {
        key: "swapChat",
        value: function swapChat(chat) {
          this._messengerService.swapCurrentChat(chat);

          this.getCurrentMessage(chat);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          if (this.newMessageText == '') {
            return;
          }

          var chat = this._messengerService.currentChat.value;
          var chatId = chat.id;

          if (chatId != null) {
            this._messengerService.sendMessage(this.newMessageText, chatId);

            this.newMessageText = "";
            this.setCurrentMessage(chat);
          }
        }
      }, {
        key: "map",
        value: function map(chat) {
          return chat.messages;
        }
      }, {
        key: "isMyMessage",
        value: function isMyMessage(message) {
          return this._messengerService.user.getValue().username === message.author.username;
        }
      }, {
        key: "setCurrentMessage",
        value: function setCurrentMessage(chat) {
          localStorage.setItem("mess_chat_ ".concat(chat.id), this.newMessageText);
        }
      }, {
        key: "getCurrentMessage",
        value: function getCurrentMessage(chat) {
          var mes = localStorage.getItem("mess_chat_ ".concat(chat.id));

          if (mes == null) {
            mes = "";
          }

          this.newMessageText = mes;
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"]
      }];
    };

    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-page.component.css */
      "./src/app/main-page/main-page.component.css")).default]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n  width: 900px;\n  height: 900px;\n}\n\nh1{\n  font-size: 40pt;\n  margin-bottom: 35px;\n}\n\ninput{\n  font-size: 30pt;\n  width: 600px;\n  height: 80px;\n}\n\n.inner-container{\n  display: inline-block;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHdpZHRoOiA5MDBweDtcbiAgaGVpZ2h0OiA5MDBweDtcbn1cblxuaDF7XG4gIGZvbnQtc2l6ZTogNDBwdDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuaW5wdXR7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5pbm5lci1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(_auth, _router) {
        _classCallCheck(this, RegisterComponent);

        this._auth = _auth;
        this._router = _router;
        this.registerUserData = {
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: ""
        };
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this5 = this;

          this._auth.registerUser(this.registerUserData).subscribe(function (res) {
            console.log(res);
            alert("You was registered");

            _this5._router.navigate([""]);
          }, function (err) {
            console.log(err);
            alert(err.error);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/shared/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(_authService, _router) {
        _classCallCheck(this, AuthGuard);

        this._authService = _authService;
        this._router = _router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this._authService.logIn()) {
            return true;
          } else {
            this._router.navigate(['/login']);

            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/auth.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/auth.service.ts ***!
    \****************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _messenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./messenger.service */
    "./src/app/shared/messenger.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, _messengerService) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this._messengerService = _messengerService;
        this._registerUrl = "http://localhost:8090/auth/registration";
        this._loginUrl = "http://localhost:8090/auth/login";
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(user) {
          return this.http.post(this._registerUrl, user);
        }
      }, {
        key: "loginUser",
        value: function loginUser(user) {
          return this.http.post(this._loginUrl, user);
        }
      }, {
        key: "logIn",
        value: function logIn() {
          return !!localStorage.getItem('token');
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem('token');
          localStorage.clear();

          this._messengerService.clear();
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _messenger_service__WEBPACK_IMPORTED_MODULE_3__["MessengerService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/icon-label.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/icon-label.pipe.ts ***!
    \*******************************************/

  /*! exports provided: IconLabelPipe */

  /***/
  function srcAppSharedIconLabelPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconLabelPipe", function () {
      return IconLabelPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconLabelPipe =
    /*#__PURE__*/
    function () {
      function IconLabelPipe() {
        _classCallCheck(this, IconLabelPipe);
      }

      _createClass(IconLabelPipe, [{
        key: "transform",
        value: function transform(chat) {
          if (chat.group) {
            return "G";
          }

          var strings = chat.name.split(" ");
          return strings.map(function (value) {
            return value.charAt(0);
          }).join("");
        }
      }]);

      return IconLabelPipe;
    }();

    IconLabelPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'iconLabel'
    })], IconLabelPipe);
    /***/
  },

  /***/
  "./src/app/shared/messenger.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/messenger.service.ts ***!
    \*********************************************/

  /*! exports provided: MessengerService */

  /***/
  function srcAppSharedMessengerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessengerService", function () {
      return MessengerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _entity_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../entity/User */
    "./src/app/entity/User.ts");
    /* harmony import */


    var _entity_Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../entity/Chat */
    "./src/app/entity/Chat.ts");
    /* harmony import */


    var _entity_Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../entity/Message */
    "./src/app/entity/Message.ts");

    var MessengerService =
    /*#__PURE__*/
    function () {
      // public currentMessages: BehaviorSubject<Message[]> = new BehaviorSubject([]);
      function MessengerService(http) {
        _classCallCheck(this, MessengerService);

        this.http = http;
        this._userUrl = "http://localhost:8090/user";
        this._messageUrl = "http://localhost:8090/message";
        this._chatUrl = "http://localhost:8090/chat";
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _entity_User__WEBPACK_IMPORTED_MODULE_4__["User"]());
        this.chats = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentChat = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _entity_Chat__WEBPACK_IMPORTED_MODULE_5__["Chat"]());
        this.creatingChat = false;
      }

      _createClass(MessengerService, [{
        key: "swapCurrentChatById",
        value: function swapCurrentChatById(chatId) {
          var chat = this.findChatById(chatId, this.chats.getValue());
          this.swapCurrentChat(chat);
        }
      }, {
        key: "swapCurrentChat",
        value: function swapCurrentChat(chat) {
          this.currentChat.next(chat);
        }
      }, {
        key: "findChatById",
        value: function findChatById(id, _chats) {
          return _chats.find(function (i) {
            return i.id === id;
          });
        }
      }, {
        key: "refreshCurrentChat",
        value: function refreshCurrentChat(_chats) {
          if (this.currentChat.getValue().id != null) {
            var chat = this.findChatById(this.currentChat.getValue().id, _chats);
            this.currentChat.next(chat);
          }
        }
      }, {
        key: "refreshData",
        value: function refreshData() {
          this.getChats();
          this.getAuthenticatedUser();
        }
      }, {
        key: "getAuthenticatedUser",
        value: function getAuthenticatedUser() {
          var _this6 = this;

          return this.http.get(this._userUrl).subscribe(function (res) {
            _this6.user.next(res);

            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getChats",
        value: function getChats() {
          var _this7 = this;

          return this.http.get("".concat(this._userUrl, "/chats")).subscribe(function (res) {
            _this7.chats.next(res);

            console.log(res);

            _this7.refreshCurrentChat(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(text, chatId) {
          var _this8 = this;

          this.addMessage(text);
          return this.http.post("".concat(this._messageUrl, "/sending"), {
            "text": "".concat(text),
            "chat": "".concat(chatId)
          }).subscribe(function (res) {
            console.log(res);

            _this8.refreshData();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "addChat",
        value: function addChat(chat) {
          var _chats = this.chats.getValue();

          _chats.push(chat);

          this.chats.next(_chats);
        }
      }, {
        key: "addMessage",
        value: function addMessage(text) {
          var _chat = this.currentChat.getValue();

          var message = new _entity_Message__WEBPACK_IMPORTED_MODULE_6__["Message"]();
          message.author = this.user.getValue();
          message.text = text;

          _chat.messages.push(message);

          this.currentChat.next(_chat);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.user.next(new _entity_User__WEBPACK_IMPORTED_MODULE_4__["User"]());
          this.chats.next([]);
          this.currentChat.next(new _entity_Chat__WEBPACK_IMPORTED_MODULE_5__["Chat"]());
        }
      }, {
        key: "isCurrentChatSelected",
        value: function isCurrentChatSelected() {
          return this.currentChat.getValue().id != null;
        }
      }, {
        key: "createChat",
        value: function createChat(chat) {
          return this.http.post("".concat(this._chatUrl, "/create"), chat);
        }
      }, {
        key: "searchUsers",
        value: function searchUsers(username) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.append("like", username);
          console.log(params);
          return this.http.get("".concat(this._userUrl, "/users"), {
            params: params
          });
        }
      }]);

      return MessengerService;
    }();

    MessengerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MessengerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessengerService);
    /***/
  },

  /***/
  "./src/app/shared/token-interceptor.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/token-interceptor.service.ts ***!
    \*****************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppSharedTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");

    var TokenInterceptorService =
    /*#__PURE__*/
    function () {
      function TokenInterceptorService(_authService) {
        _classCallCheck(this, TokenInterceptorService);

        this._authService = _authService;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var tokenizerReq = req.clone({
            setHeaders: {
              'X-Auth-Token': "".concat(this._authService.getToken())
            }
          });
          return next.handle(tokenizerReq);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenInterceptorService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! /home/dmitry/programming/webProject/MessengerInterface/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map