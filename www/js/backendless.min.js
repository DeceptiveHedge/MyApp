/*
 * ********************************************************************************************************************
 *  Backendless SDK for JavaScript. Version: 4.3.1
 *
 *  Copyright 2012-2017 BACKENDLESS.COM. All Rights Reserved.
 *
 *  NOTICE: All information contained herein is, and remains the property of Backendless.com and its suppliers,
 *  if any. The intellectual and technical concepts contained herein are proprietary to Backendless.com and its
 *  suppliers and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret
 *  or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden
 *  unless prior written permission is obtained from Backendless.com.
 * ********************************************************************************************************************
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Backendless"] = factory();
	else
		root["Backendless"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = {
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },


  isArray: Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Array';
  },

  isString: function isString(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'String';
  },
  isNumber: function isNumber(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Number';
  },
  isFunction: function isFunction(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Function';
  },
  isBoolean: function isBoolean(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Boolean';
  },
  isDate: function isDate(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Date';
  },


  isBrowser: isBrowser(),

  castArray: function castArray(value) {
    if (Utils.isArray(value)) {
      return value;
    }

    return [value];
  },
  isEmpty: function isEmpty(obj) {
    if (obj === null || obj === undefined) {
      return true;
    }

    if (Utils.isArray(obj) || Utils.isString(obj)) {
      return obj.length === 0;
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
        return false;
      }
    }

    return true;
  },
  toQueryParams: function toQueryParams(params) {
    params = params || {};
    var result = [];

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        result.push(key + '=' + encodeURIComponent(params[key]));
      }
    }

    return result.join('&');
  },
  tryParseJSON: function tryParseJSON(s) {
    try {
      return typeof s === 'string' ? JSON.parse(s) : s;
    } catch (e) {
      return s;
    }
  },
  getClassName: function getClassName(obj) {
    if (obj.prototype && obj.prototype.___class) {
      return obj.prototype.___class;
    }

    if (Utils.isFunction(obj) && obj.name) {
      return obj.name;
    }

    var instStringified = Utils.isFunction(obj) ? obj.toString() : obj.constructor.toString();
    var results = instStringified.match(/function\s+(\w+)/);

    return results && results.length > 1 ? results[1] : '';
  },
  encodeArrayToUriComponent: function encodeArrayToUriComponent(arr) {
    return arr.map(function (item) {
      return encodeURIComponent(item);
    }).join(',');
  },
  deepExtend: function deepExtend(destination, source) {
    //TODO: refactor it
    for (var property in source) {
      if (source[property] !== undefined && source.hasOwnProperty(property)) {
        destination[property] = destination[property] || {};
        destination[property] = classWrapper(source[property]);

        if (destination[property] && destination[property].hasOwnProperty(property) && destination[property][property] && destination[property][property].hasOwnProperty('__originSubID')) {

          destination[property][property] = classWrapper(destination[property]);
        }
      }
    }

    return destination;
  },
  extractResponder: function extractResponder(args) {
    for (var i = 0; i < args.length; i++) {
      if (args[i] instanceof _async2.default) {
        return args[i];
      }
    }
  },
  wrapAsync: function wrapAsync(asyncHandler, parser, context) {
    //TODO: should we remove it?
    if (asyncHandler instanceof _async2.default && !parser) {
      return asyncHandler;
    }

    var success = function success(data) {
      if (parser) {
        data = parser.call(context, data);
      }

      asyncHandler.success(data);
    };

    var error = function error(data) {
      asyncHandler.fault(data);
    };

    return new _async2.default(success, error);
  },
  promisified: function promisified(method) {
    return function () {
      Utils.checkPromiseSupport();

      var args = [].slice.call(arguments);
      var context = this;
      var fn = typeof method === 'function' ? method : context[method];

      return new Promise(function (resolve, reject) {
        args.push(new _async2.default(resolve, reject, context));
        fn.apply(context, args);
      });
    };
  },
  synchronized: function synchronized(method) {
    return function () {
      // eslint-disable-next-line no-console
      console.warn('Using of sync methods is an outdated approach. Please, use async methods.');

      var context = this;
      var fn = typeof method === 'function' ? method : context[method];

      return fn.apply(context, arguments);
    };
  },
  checkPromiseSupport: function checkPromiseSupport() {
    if (typeof Promise === 'undefined') {
      throw new Error('This browser doesn\'t support Promise API. Please use polyfill.\n' + 'More info is in the Backendless JS-SDK docs: https://backendless.com/docs/js/doc.html#sync-and-async-calls');
    }
  }
};

function isBrowser() {
  return (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window === self;
}

function classWrapper(obj) {
  //TODO: refactor it
  var wrapper = function wrapper(obj) {
    var wrapperName = null;
    var Wrapper = null;

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (property === '___class') {
          wrapperName = obj[property];
          break;
        }
      }
    }

    if (wrapperName) {
      try {
        Wrapper = eval(wrapperName);
        obj = Utils.deepExtend(new Wrapper(), obj);
      } catch (e) {}
    }

    return obj;
  };

  if (Utils.isObject(obj) && obj != null) {
    if (Utils.isArray(obj)) {
      for (var i = obj.length; i--;) {
        obj[i] = wrapper(obj[i]);
      }
    } else {
      obj = wrapper(obj);
    }
  }

  return obj;
}

exports.default = Utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localVars = __webpack_require__(8);

var _localVars2 = _interopRequireDefault(_localVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Urls = {
  root: function root() {
    return _localVars2.default.appPath;
  },

  blServices: function blServices() {
    return Urls.root() + '/services';
  },
  blServiceMethod: function blServiceMethod(name, method) {
    return Urls.blServices() + '/' + name + '/' + method;
  },

  blEvent: function blEvent(eventName) {
    return Urls.root() + '/servercode/events/' + eventName;
  },

  logging: function logging() {
    return Urls.root() + '/log';
  },

  cache: function cache() {
    return Urls.root() + '/cache';
  },
  cacheItem: function cacheItem(key) {
    return Urls.cache() + '/' + key;
  },
  cacheItemExpireIn: function cacheItemExpireIn(key) {
    return Urls.cacheItem(key) + '/expireIn';
  },
  cacheItemExpireAt: function cacheItemExpireAt(key) {
    return Urls.cacheItem(key) + '/expireAt';
  },
  cacheItemCheck: function cacheItemCheck(key) {
    return Urls.cacheItem(key) + '/check';
  },

  counters: function counters() {
    return Urls.root() + '/counters';
  },
  counter: function counter(name) {
    return Urls.counters() + '/' + name;
  },
  counterAddAndGet: function counterAddAndGet(name) {
    return Urls.counter(name) + '/incrementby/get';
  },
  counterGetAndAdd: function counterGetAndAdd(name) {
    return Urls.counter(name) + '/get/incrementby';
  },
  counterIncrementAndGet: function counterIncrementAndGet(name) {
    return Urls.counter(name) + '/increment/get';
  },
  counterDecrementAndGet: function counterDecrementAndGet(name) {
    return Urls.counter(name) + '/decrement/get';
  },
  counterGetAndDecrement: function counterGetAndDecrement(name) {
    return Urls.counter(name) + '/get/decrement';
  },
  counterGetAndIncrement: function counterGetAndIncrement(name) {
    return Urls.counter(name) + '/get/increment';
  },
  counterCompareAndSet: function counterCompareAndSet(name) {
    return Urls.counter(name) + '/get/compareandset';
  },
  counterReset: function counterReset(name) {
    return Urls.counter(name) + '/reset';
  },

  data: function data() {
    return Urls.root() + '/data';
  },
  dataTable: function dataTable(tableName) {
    return Urls.data() + '/' + tableName;
  },
  dataTableObject: function dataTableObject(tableName, objectId) {
    return Urls.dataTable(tableName) + '/' + objectId;
  },
  dataTableObjectRelation: function dataTableObjectRelation(tableName, objectId, columnName) {
    return Urls.dataTableObject(tableName, objectId) + '/' + columnName;
  },
  dataTableCount: function dataTableCount(tableName) {
    return Urls.dataTable(tableName) + '/count';
  },
  dataTableProps: function dataTableProps(tableName) {
    return Urls.dataTable(tableName) + '/properties';
  },
  dataBulkTable: function dataBulkTable(tableName) {
    return Urls.data() + '/bulk/' + tableName;
  },
  dataObjectPermission: function dataObjectPermission(tableName, permissionType, objectId) {
    return Urls.dataTable(tableName) + '/permissions/' + permissionType + '/' + encodeURIComponent(objectId);
  },

  messaging: function messaging() {
    return Urls.root() + '/messaging';
  },
  messagingEmail: function messagingEmail() {
    return Urls.messaging() + '/email';
  },
  messagingChannel: function messagingChannel(channel) {
    return Urls.messaging() + '/' + channel;
  },
  messagingChannelProps: function messagingChannelProps(channel) {
    return Urls.messagingChannel(channel) + '/properties';
  },
  messagingMessage: function messagingMessage(messageId) {
    return Urls.messaging() + '/' + messageId;
  },
  messagingRegistrations: function messagingRegistrations() {
    return Urls.messaging() + '/registrations';
  },
  messagingRegistrationDevice: function messagingRegistrationDevice(deviceId) {
    return Urls.messagingRegistrations() + '/' + deviceId;
  },

  geo: function geo() {
    return Urls.root() + '/geo';
  },
  geoRelative: function geoRelative() {
    return Urls.geo() + '/relative';
  },
  geoPoints: function geoPoints() {
    return Urls.geo() + '/points';
  },
  geoPoint: function geoPoint(pointId) {
    return Urls.geoPoints() + '/' + pointId;
  },
  geoPointMetaData: function geoPointMetaData(pointId) {
    return Urls.geoPoint(pointId) + '/metadata';
  },
  geoCategories: function geoCategories() {
    return Urls.geo() + '/categories';
  },
  geoCategory: function geoCategory(name) {
    return Urls.geoCategories() + '/' + name;
  },
  geoClusters: function geoClusters() {
    return Urls.geo() + '/clusters';
  },
  geoClusterPoints: function geoClusterPoints(clusterId) {
    return Urls.geoClusters() + '/' + clusterId + '/points';
  },
  geoCount: function geoCount() {
    return Urls.geo() + '/count';
  },
  geoFences: function geoFences(geoFence) {
    return Urls.geo() + '/fences' + (geoFence ? '?geoFence=' + geoFence : '');
  },
  geoFence: function geoFence(action, geoFenceName) {
    return Urls.geo() + '/fence/' + action + '?geoFence=' + geoFenceName;
  },

  commerce: function commerce() {
    return Urls.root() + '/commerce/googleplay';
  },
  commerceValidate: function commerceValidate(name, productId, token) {
    return Urls.commerce() + '/validate/' + name + '/inapp/' + productId + '/purchases/' + token;
  },
  commerceSubCancel: function commerceSubCancel(name, subId, token) {
    return Urls.commerce() + '/' + name + '/subscription/' + subId + '/purchases/' + token + '/cancel';
  },
  commerceSubStatus: function commerceSubStatus(name, subId, token) {
    return Urls.commerce() + '/' + name + '/subscription/' + subId + '/purchases/' + token;
  },

  files: function files() {
    return Urls.root() + '/files';
  },
  filePath: function filePath(path) {
    return Urls.files() + '/' + path;
  },
  fileCopy: function fileCopy() {
    return Urls.files() + '/copy';
  },
  fileMove: function fileMove() {
    return Urls.files() + '/move';
  },
  fileRename: function fileRename() {
    return Urls.files() + '/rename';
  },
  filePermissions: function filePermissions() {
    return Urls.files() + '/permissions';
  },
  filePermission: function filePermission(type, url) {
    return Urls.filePermissions() + '/' + type + '/' + encodeURIComponent(url);
  },

  users: function users() {
    return Urls.root() + '/users';
  },
  userObject: function userObject(objectId) {
    return Urls.users() + '/' + objectId;
  },
  userRegister: function userRegister() {
    return Urls.users() + '/register';
  },
  userLogin: function userLogin() {
    return Urls.users() + '/login';
  },
  userLogout: function userLogout() {
    return Urls.users() + '/logout';
  },
  userRoles: function userRoles() {
    return Urls.users() + '/userroles';
  },
  userRoleOperation: function userRoleOperation(operation) {
    return Urls.users() + '/' + operation;
  },
  userClassProps: function userClassProps() {
    return Urls.users() + '/userclassprops';
  },
  userRestorePassword: function userRestorePassword(email) {
    return Urls.users() + '/restorepassword/' + encodeURIComponent(email);
  },
  userTokenCheck: function userTokenCheck(token) {
    return Urls.users() + '/isvalidusertoken/' + token;
  },
  userResendConfirmation: function userResendConfirmation(email) {
    return Urls.users() + '/resendconfirmation/' + email;
  },
  userSocial: function userSocial() {
    return Urls.users() + '/social';
  },
  userSocialOAuth: function userSocialOAuth(socialType) {
    return Urls.userSocial() + '/oauth/' + socialType.toLowerCase() + '/request_url';
  },
  userSocialLogin: function userSocialLogin(socialType) {
    return Urls.userSocial() + '/' + socialType.toLowerCase() + '/sdk/login';
  }
}; /* eslint-disable max-len */

exports.default = Urls;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = __webpack_require__(48);

var Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

var Request = {
  Methods: Methods,

  send: _request.sendRequest,
  get: function get(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.GET }));
  },
  post: function post(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.POST }));
  },
  put: function put(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.PUT }));
  },
  delete: function _delete(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.DELETE }));
  }
};

exports.default = Request;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Async = function Async(successCallback, faultCallback, context) {
  var _this = this;

  _classCallCheck(this, Async);

  if (!(faultCallback instanceof Function)) {
    context = faultCallback;
    faultCallback = undefined;
  }

  this.successCallback = successCallback;
  this.faultCallback = faultCallback;
  this.context = context;

  //TODO: move it to prototypes
  this.success = function (data) {
    if (_this.successCallback) {
      _this.successCallback.call(_this.context, data);
    }
  };

  //TODO: move it to prototypes
  this.fault = function (data) {
    if (_this.faultCallback) {
      _this.faultCallback.call(_this.context, data);
    }
  };
};

exports.default = Async;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deprecated = __webpack_require__(47);

Object.keys(_deprecated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _deprecated[key];
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loggedInUser = exports.getCurrentUser = undefined;
exports.setLocalCurrentUser = setLocalCurrentUser;
exports.getLocalCurrentUser = getLocalCurrentUser;
exports.getCurrentUserToken = getCurrentUserToken;
exports.isValidLogin = isValidLogin;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

var _data = __webpack_require__(16);

var _data2 = _interopRequireDefault(_data);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _localCache = __webpack_require__(9);

var _localCache2 = _interopRequireDefault(_localCache);

var _utils3 = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentUser = null;

function setLocalCurrentUser(user) {
  currentUser = user || null;
}

function getLocalCurrentUser() {
  return currentUser;
}

function getCurrentUserToken() {
  if (currentUser && currentUser['user-token']) {
    return currentUser['user-token'] || null;
  }

  return _localCache2.default.get('user-token') || null;
}

var getCurrentUser = exports.getCurrentUser = function getCurrentUser(asyncHandler) {
  if (currentUser) {
    var userFromResponse = (0, _utils3.getUserFromResponse)(currentUser);

    return asyncHandler ? asyncHandler.success(userFromResponse) : userFromResponse;
  }

  var stayLoggedIn = _localCache2.default.get('stayLoggedIn');
  var currentUserId = stayLoggedIn && _localCache2.default.get('current-user-id');

  if (currentUserId) {
    return _data2.default.of(_user2.default).findById(currentUserId, asyncHandler);
  }

  return asyncHandler ? asyncHandler.success(null) : null;
};

function isValidLogin() /** async */{
  var userToken = _localCache2.default.get('user-token');
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  if (userToken) {
    if (!isAsync) {
      try {
        var result = _request2.default.get({
          url: _urls2.default.userTokenCheck(userToken)
        });
        return !!result;
      } catch (e) {
        return false;
      }
    }

    return _request2.default.get({
      url: _urls2.default.userTokenCheck(userToken),
      isAsync: isAsync,
      asyncHandler: responder
    });
  }

  if (!isAsync) {
    return !!getCurrentUser();
  }

  getCurrentUser(new _async2.default(function (user) {
    return responder.success(!!user);
  }, function () {
    return responder.success(false);
  }));
}

var loggedInUser = exports.loggedInUser = function loggedInUser() {
  return _localCache2.default.get('current-user-id');
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapAsync = exports.getUserFromResponse = exports.parseResponse = undefined;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _localCache = __webpack_require__(9);

var _localCache2 = _interopRequireDefault(_localCache);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseResponse = exports.parseResponse = function parseResponse(data, stayLoggedIn) {
  var user = new _user2.default();
  _utils2.default.deepExtend(user, data);

  if (stayLoggedIn) {
    _localCache2.default.set('stayLoggedIn', stayLoggedIn);
  }

  return user;
};

var getUserFromResponse = exports.getUserFromResponse = function getUserFromResponse(user) {
  _localCache2.default.set('current-user-id', user.objectId);

  var userToken = user['user-token'];

  if (userToken && _localCache2.default.get('stayLoggedIn')) {
    _localCache2.default.set('user-token', userToken);
  }

  return new _user2.default(user);
};

var wrapAsync = exports.wrapAsync = function wrapAsync(asyncHandler, stayLoggedIn) {
  var success = function success(data) {
    (0, _currentUser.setLocalCurrentUser)(parseResponse(_utils2.default.tryParseJSON(data), stayLoggedIn));

    asyncHandler.success(getUserFromResponse((0, _currentUser.getLocalCurrentUser)()));
  };

  var error = function error(data) {
    asyncHandler.fault(data);
  };

  return new _async2.default(success, error);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoPoint = function GeoPoint(args) {
  _classCallCheck(this, GeoPoint);

  args = args || {};

  this.___class = 'GeoPoint';
  this.categories = args.categories;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
  this.metadata = args.metadata;
  this.objectId = args.objectId;
  this.distance = args.distance;
};

exports.default = GeoPoint;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LocalVars = {
  debugMode: true,
  serverURL: 'https://api.backendless.com',
  XMLHttpRequest: typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined,
  applicationId: null,
  secretKey: null,
  appPath: null
};

exports.default = LocalVars;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function setCache() {
  var store = {};
  var storage = {};

  store.enabled = false;

  store.exists = function (key) {
    return store.get(key) !== undefined;
  };

  store.set = function (key, value) {
    return storage[key] = store.serialize(value);
  };

  store.get = function (key) {
    var result = storage[key];

    return result && store.deserialize(result);
  };

  store.remove = function (key) {
    return delete storage[key];
  };

  store.clear = function () {
    storage = {};
  };

  store.flushExpired = function () {};

  store.getCachePolicy = function () /** key */{};

  store.getAll = function () {
    var result = {};

    for (var prop in storage) {
      if (storage.hasOwnProperty(prop)) {
        result[prop] = storage[prop];
      }
    }

    return result;
  };

  store.serialize = function (value) {
    return JSON.stringify(value);
  };

  store.deserialize = function (value) {
    if (typeof value !== 'string') {
      return undefined;
    }
    try {
      return JSON.parse(value);
    } catch (e) {
      return value || undefined;
    }
  };

  function isLocalStorageSupported() {
    try {
      if (_utils2.default.isBrowser && window.localStorage) {
        localStorage.setItem('localStorageTest', true);
        localStorage.removeItem('localStorageTest');
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  if (isLocalStorageSupported()) {
    return extendToLocalStorageCache(store);
  }

  return store;
}

function extendToLocalStorageCache(store) {
  var storage = window.localStorage;

  var createBndlsStorage = function createBndlsStorage() {
    if (!storage.getItem('Backendless')) {
      storage.setItem('Backendless', store.serialize({}));
    }
  };

  var expired = function expired(obj) {
    var result = false;

    if (obj && Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
      if ('cachePolicy' in obj && 'timeToLive' in obj.cachePolicy && obj.cachePolicy.timeToLive !== -1 && 'created' in obj.cachePolicy) {

        result = new Date().getTime() - obj['cachePolicy']['created'] > obj['cachePolicy']['timeToLive'];
      }
    }

    return result;
  };

  var addTimestamp = function addTimestamp(obj) {
    if (obj && Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
      if ('cachePolicy' in obj && 'timeToLive' in obj['cachePolicy']) {
        obj['cachePolicy']['created'] = new Date().getTime();
      }
    }
  };

  createBndlsStorage();

  store.enabled = true;

  store.exists = function (key) {
    return store.get(key) !== undefined;
  };

  store.set = function (key, val) {
    if (val === undefined) {
      return store.remove(key);
    }

    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));

    addTimestamp(val);

    backendlessObj[key] = val;

    try {
      storage.setItem('Backendless', store.serialize(backendlessObj));
    } catch (e) {
      backendlessObj = {};
      backendlessObj[key] = val;
      storage.setItem('Backendless', store.serialize(backendlessObj));
    }

    return val;
  };

  store.get = function (key) {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var obj = backendlessObj[key];
    var result = obj;

    if (expired(obj)) {
      delete backendlessObj[key];
      storage.setItem('Backendless', store.serialize(backendlessObj));
      result = undefined;
    }

    if (result && result['cachePolicy']) {
      delete result['cachePolicy'];
    }

    return result;
  };

  store.remove = function (key) {
    var result = void 0;

    createBndlsStorage();

    key = key.replace(/([^A-Za-z0-9-])/g, '');

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));

    if (backendlessObj.hasOwnProperty(key)) {
      result = delete backendlessObj[key];
    }

    storage.setItem('Backendless', store.serialize(backendlessObj));

    return result;
  };

  store.clear = function () {
    storage.setItem('Backendless', store.serialize({}));
  };

  store.getAll = function () {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var ret = {};

    for (var prop in backendlessObj) {
      if (backendlessObj.hasOwnProperty(prop)) {
        ret[prop] = backendlessObj[prop];
        if (ret[prop] !== null && ret[prop].hasOwnProperty('cachePolicy')) {
          delete ret[prop]['cachePolicy'];
        }
      }
    }

    return ret;
  };

  store.flushExpired = function () {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var obj = void 0;

    for (var prop in backendlessObj) {
      if (backendlessObj.hasOwnProperty(prop)) {
        obj = backendlessObj[prop];
        if (expired(obj)) {
          delete backendlessObj[prop];
          storage.setItem('Backendless', store.serialize(backendlessObj));
        }
      }
    }
  };

  store.getCachePolicy = function (key) {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var obj = backendlessObj[key];

    return obj ? obj['cachePolicy'] : undefined;
  };

  return store;
}

var LocalCache = setCache();

if (LocalCache.enabled) {
  LocalCache.flushExpired();
}

exports.default = LocalCache;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  _createClass(User, null, [{
    key: 'className',
    get: function get() {
      return 'Users';
    }
  }]);

  function User(user) {
    var _this = this;

    _classCallCheck(this, User);

    user = user || {};

    Object.keys(user).map(function (userProp) {
      _this[userProp] = user[userProp];
    });

    //TODO: must be moved
    this.___class = User.className;
  }

  return User;
}();

//TODO: must be removed


exports.default = User;
User.prototype.___class = User.className;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.parseFindResponse = parseFindResponse;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _utils3 = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(item) {
  return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item !== null;
}

function parseCircularDependencies(obj) {
  var result = new obj.constructor();
  var subIds = {};
  var postAssign = [];
  var iteratedItems = [];

  function ensureCircularDep(source, target, prop) {
    if (subIds[source[prop].__originSubID]) {
      target[prop] = subIds[source[prop].__originSubID];
    } else {
      postAssign.push([target, prop, source[prop].__originSubID]);
    }
  }

  function processModel(source, target, prop) {
    var Model = source[prop].constructor;

    target[prop] = new Model();

    if (source[prop].__subID) {
      subIds[source[prop].__subID] = target[prop];
      delete source[prop].__subID;
    }
  }

  function buildCircularDeps(source, target) {
    if (iteratedItems.indexOf(source) === -1) {
      iteratedItems.push(source);

      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          if (Array.isArray(source[prop])) {
            buildCircularDeps(source[prop], target[prop] = []);
          } else if (isObject(source[prop])) {
            if (source[prop].__originSubID) {
              ensureCircularDep(source, target, prop);
            } else {
              processModel(source, target, prop);

              buildCircularDeps(source[prop], target[prop]);
            }
          } else {
            target[prop] = source[prop];
          }
        }
      }
    }
  }

  buildCircularDeps(obj, result);

  postAssign.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        target = _ref2[0],
        prop = _ref2[1],
        __originSubID = _ref2[2];

    return target[prop] = subIds[__originSubID];
  });

  return result;
}

function parseFindResponse(response, Model) {
  var sanitizeResponseItem = function sanitizeResponseItem(resp) {
    Model = _utils2.default.isFunction(Model) ? Model : (0, _utils3.resolveModelClassFromString)(resp.___class);

    return _utils2.default.deepExtend(new Model(), resp.fields || resp);
  };

  var result = _utils2.default.isArray(response) ? response.map(sanitizeResponseItem) : sanitizeResponseItem(response);

  return parseCircularDependencies(result);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoCluster = function GeoCluster(args) {
  _classCallCheck(this, GeoCluster);

  args = args || {};

  this.categories = args.categories;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
  this.metadata = args.metadata;
  this.objectId = args.objectId;
  this.totalPoints = args.totalPoints;
  this.geoQuery = args.geoQuery;
  this.distance = args.distance;
};

exports.default = GeoCluster;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoQuery = function () {
  function GeoQuery(args) {
    _classCallCheck(this, GeoQuery);

    args = args || {};

    this.searchRectangle = args.searchRectangle || undefined;
    this.categories = args.categories || [];
    this.includeMetadata = args.includeMetadata || true;
    this.metadata = args.metadata || undefined;
    this.condition = args.condition || undefined;
    this.relativeFindMetadata = args.relativeFindMetadata || undefined;
    this.relativeFindPercentThreshold = args.relativeFindPercentThreshold || undefined;
    this.pageSize = args.pageSize || undefined;
    this.latitude = args.latitude || undefined;
    this.longitude = args.longitude || undefined;
    this.radius = args.radius || undefined;
    this.units = args.units || undefined;
    this.degreePerPixel = args.degreePerPixel || undefined;
    this.clusterGridSize = args.clusterGridSize || undefined;
  }

  _createClass(GeoQuery, [{
    key: 'addCategory',
    value: function addCategory(category) {
      this.categories = this.categories || [];
      this.categories.push(category);
    }
  }, {
    key: 'setClusteringParams',
    value: function setClusteringParams(westLongitude, eastLongitude, mapWidth, clusterGridSize) {
      clusterGridSize = clusterGridSize || 0;

      var parsedWestLongitude = parseFloat(westLongitude);
      var parsedEastLongitude = parseFloat(eastLongitude);
      var parsedMapWidth = parseInt(mapWidth);
      var parsedClusterGridSize = parseInt(clusterGridSize);

      if (!isFinite(parsedWestLongitude) || parsedWestLongitude < -180 || parsedWestLongitude > 180) {
        throw new Error('The westLongitude value must be a number in the range between -180 and 180');
      }

      if (!isFinite(parsedEastLongitude) || parsedEastLongitude < -180 || parsedEastLongitude > 180) {
        throw new Error('The eastLongitude value must be a number in the range between -180 and 180');
      }

      if (!isFinite(parsedMapWidth) || parsedMapWidth < 1) {
        throw new Error('The mapWidth value must be a number greater or equal to 1');
      }

      if (!isFinite(parsedClusterGridSize) || parsedClusterGridSize < 0) {
        throw new Error('The clusterGridSize value must be a number greater or equal to 0');
      }

      var longDiff = parsedEastLongitude - parsedWestLongitude;

      if (longDiff < 0) {
        longDiff += 360;
      }

      this.degreePerPixel = longDiff / parsedMapWidth;
      this.clusterGridSize = parsedClusterGridSize || null;
    }
  }]);

  return GeoQuery;
}();

exports.default = GeoQuery;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var currentDevice = null;

var Device = {
  required: function required() {
    if (!currentDevice) {
      throw new Error('Device is not defined. Please, run the Backendless.setupDevice');
    }

    return currentDevice;
  },
  get: function get() {
    return currentDevice;
  },
  setup: function setup(deviceProps) {
    if (!deviceProps || !deviceProps.uuid || !deviceProps.platform || !deviceProps.version) {
      throw new Error('Device properties object must consist of fields "uuid", "platform" and "version".');
    }

    currentDevice = {
      uuid: deviceProps.uuid,
      platform: deviceProps.platform.toUpperCase(),
      version: deviceProps.version
    };
  }
};

exports.default = Device;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _logger = __webpack_require__(61);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastFlushListeners = void 0;

function flush(asyncHandler) {
  if (LoggingCollector.pool.length) {
    if (LoggingCollector.flushInterval) {
      clearTimeout(LoggingCollector.flushInterval);
    }

    var listeners = void 0;

    var cb = function cb(method) {
      return function () {
        var _arguments = arguments;

        listeners.forEach(function (callbacks) {
          callbacks[method].apply(null, _arguments);
        });

        if (listeners === lastFlushListeners) {
          lastFlushListeners = null;
        }
      };
    };

    if (asyncHandler) {
      listeners = lastFlushListeners = lastFlushListeners ? lastFlushListeners.splice(0) : [];
      listeners.push(asyncHandler);
    }

    _request2.default.put({
      isAsync: !!asyncHandler,
      asyncHandler: asyncHandler && new _async2.default(cb('success'), cb('fault')),
      url: _urls2.default.logging(),
      data: LoggingCollector.pool
    });

    LoggingCollector.pool = [];
  } else if (asyncHandler) {
    if (lastFlushListeners) {
      lastFlushListeners.push(asyncHandler);
    } else {
      setTimeout(asyncHandler.success, 0);
    }
  }
}

var LoggingCollector = {
  reset: function reset() {
    LoggingCollector.loggers = {};
    LoggingCollector.pool = [];
    LoggingCollector.numOfMessages = 10;
    LoggingCollector.timeFrequency = 1;
  },
  getLogger: function getLogger(loggerName) {
    if (!_utils2.default.isString(loggerName)) {
      throw new Error("Invalid 'loggerName' value. LoggerName must be a string value");
    }

    return LoggingCollector.loggers[loggerName] = LoggingCollector.loggers[loggerName] || new _logger2.default(loggerName);
  },
  push: function push(logger, logLevel, message, exception) {
    var messageObj = {
      logger: logger,
      message: message,
      exception: exception,
      'log-level': logLevel,
      timestamp: Date.now()
    };

    LoggingCollector.pool.push(messageObj);

    LoggingCollector.checkMessagesLen();
  },
  checkMessagesLen: function checkMessagesLen() {
    if (LoggingCollector.pool.length >= LoggingCollector.numOfMessages) {
      LoggingCollector.sendRequest();
    }
  },


  flush: _utils2.default.promisified(flush),
  flushSync: _utils2.default.synchronized(flush),

  sendRequest: function sendRequest() {
    LoggingCollector.flushInterval = setTimeout(function () {
      return LoggingCollector.flush();
    }, LoggingCollector.timeFrequency * 1000);
  },
  setLogReportingPolicy: function setLogReportingPolicy(numOfMessages, timeFrequency) {
    LoggingCollector.numOfMessages = numOfMessages;
    LoggingCollector.timeFrequency = timeFrequency;

    //TODO: check when set new timeFrequency
    LoggingCollector.checkMessagesLen();
  }
};

LoggingCollector.reset();

exports.default = LoggingCollector;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _desc, _value, _obj, _init;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _permissions = __webpack_require__(49);

var _permissions2 = _interopRequireDefault(_permissions);

var _store = __webpack_require__(52);

var _store2 = _interopRequireDefault(_store);

var _queryBuilder = __webpack_require__(17);

var _queryBuilder2 = _interopRequireDefault(_queryBuilder);

var _loadRelationsQueryBuilder = __webpack_require__(27);

var _loadRelationsQueryBuilder2 = _interopRequireDefault(_loadRelationsQueryBuilder);

var _describe = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var StoresCache = {};

var Data = (_dec = (0, _decorators.deprecated)('Backendless.Data', 'Backendless.Data.describe'), _dec2 = (0, _decorators.deprecated)('Backendless.Data', 'Backendless.Data.of(<ClassName>).save'), _dec3 = (0, _decorators.deprecated)('Backendless.Data', 'Backendless.Data.of(<ClassName>).save'), (_obj = {
  Permissions: _permissions2.default,
  QueryBuilder: _queryBuilder2.default,
  LoadRelationsQueryBuilder: _loadRelationsQueryBuilder2.default,

  of: function of(model) {
    var tableName = _utils2.default.isString(model) ? model : _utils2.default.getClassName(model);

    //TODO: don't cache storage
    //TODO: always return new instance of Data Store
    //TODO: caching will be removed when RT is released
    return StoresCache[tableName] = StoresCache[tableName] || new _store2.default(model);
  },

  reset: function reset() {
    //TODO: temporary solution, will be removed when RT is released
    Object.keys(function (tableName) {
      delete StoresCache[tableName];
    });
  },

  describeSync: _utils2.default.synchronized(_describe.describe),
  describe: _utils2.default.promisified(_describe.describe),

  save: function save(className, obj) {
    return this.of(className).save(obj);
  },
  saveSync: function saveSync(className, obj, asyncHandler) {
    return this.of(className).saveSync(obj, asyncHandler);
  }
}, (_applyDecoratedDescriptor(_obj, 'describeSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'describeSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'save', [_dec2], Object.getOwnPropertyDescriptor(_obj, 'save'), _obj), _applyDecoratedDescriptor(_obj, 'saveSync', [_dec3], Object.getOwnPropertyDescriptor(_obj, 'saveSync'), _obj)), _obj));

exports.default = Data;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _query = __webpack_require__(28);

var _query2 = _interopRequireDefault(_query);

var _pagingQueryBuilder = __webpack_require__(29);

var _pagingQueryBuilder2 = _interopRequireDefault(_pagingQueryBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataQueryBuilder = function () {
  _createClass(DataQueryBuilder, null, [{
    key: 'create',
    value: function create() {
      return new DataQueryBuilder();
    }
  }]);

  function DataQueryBuilder() {
    _classCallCheck(this, DataQueryBuilder);

    this._query = new _query2.default();
    this._paging = new _pagingQueryBuilder2.default();
  }

  _createClass(DataQueryBuilder, [{
    key: 'setPageSize',
    value: function setPageSize(pageSize) {
      this._paging.setPageSize(pageSize);

      return this;
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      this._paging.setOffset(offset);

      return this;
    }
  }, {
    key: 'prepareNextPage',
    value: function prepareNextPage() {
      this._paging.prepareNextPage();

      return this;
    }
  }, {
    key: 'preparePreviousPage',
    value: function preparePreviousPage() {
      this._paging.preparePreviousPage();

      return this;
    }
  }, {
    key: 'getProperties',
    value: function getProperties() {
      return this._query.properties;
    }
  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      this._query.properties = _utils2.default.castArray(properties);

      return this;
    }
  }, {
    key: 'addProperty',
    value: function addProperty(property) {
      this._query.addProperty(property);

      return this;
    }
  }, {
    key: 'getWhereClause',
    value: function getWhereClause() {
      return this._query.condition;
    }
  }, {
    key: 'setWhereClause',
    value: function setWhereClause(whereClause) {
      this._query.condition = whereClause;

      return this;
    }
  }, {
    key: 'getHavingClause',
    value: function getHavingClause() {
      return this._query.havingClause;
    }
  }, {
    key: 'setHavingClause',
    value: function setHavingClause(havingClause) {
      this._query.havingClause = havingClause;

      return this;
    }
  }, {
    key: 'getSortBy',
    value: function getSortBy() {
      return this._query.getOption('sortBy');
    }
  }, {
    key: 'setSortBy',
    value: function setSortBy(sortBy) {
      this._query.setOption('sortBy', _utils2.default.castArray(sortBy));

      return this;
    }
  }, {
    key: 'getGroupBy',
    value: function getGroupBy() {
      return this._query.getOption('groupBy');
    }
  }, {
    key: 'setGroupBy',
    value: function setGroupBy(groupBy) {
      this._query.setOption('groupBy', _utils2.default.castArray(groupBy));

      return this;
    }
  }, {
    key: 'getRelated',
    value: function getRelated() {
      return this._query.getOption('relations');
    }
  }, {
    key: 'setRelated',
    value: function setRelated(relations) {
      this._query.setOption('relations', _utils2.default.castArray(relations));

      return this;
    }
  }, {
    key: 'getRelationsDepth',
    value: function getRelationsDepth() {
      return this._query.getOption('relationsDepth');
    }
  }, {
    key: 'setRelationsDepth',
    value: function setRelationsDepth(relationsDepth) {
      this._query.setOption('relationsDepth', relationsDepth);

      return this;
    }
  }, {
    key: 'build',
    value: function build() {
      this._query.setOptions(this._paging.build());

      return this._query;
    }
  }]);

  return DataQueryBuilder;
}();

exports.default = DataQueryBuilder;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateStringArgument = validateStringArgument;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateStringArgument(label, value) {
  if (!value || !_utils2.default.isString(value)) {
    throw new Error(label + ' must be provided and must be not an empty STRING!');
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginSocial = loginSocial;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localVars = __webpack_require__(8);

var _localVars2 = _interopRequireDefault(_localVars);

var _utils3 = __webpack_require__(6);

var _container = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loginSocial(socialType, fieldsMapping, permissions, container, stayLoggedIn, asyncHandler) {
  var socialContainer = new _container.SocialContainer(socialType, container);

  asyncHandler = _utils2.default.extractResponder(arguments);
  asyncHandler = (0, _utils3.wrapAsync)(asyncHandler, stayLoggedIn);

  addWindowEventListener('message', window, function (e) {
    if (e.origin === _localVars2.default.serverURL) {
      var result = JSON.parse(e.data);

      if (result.fault) {
        asyncHandler.fault(result.fault);
      } else {
        asyncHandler.success(result);
      }

      removeWindowEventListener('message', window);
      socialContainer.closeContainer();
    }
  });

  var interimCallback = new _async2.default(function (r) {
    socialContainer.doAuthorizationActivity(r);
  }, function (e) {
    socialContainer.closeContainer();
    asyncHandler.fault(e);
  });

  var request = {};
  request.fieldsMapping = fieldsMapping || {};
  request.permissions = permissions || [];

  _request2.default.post({
    url: _urls2.default.userSocialOAuth(socialType),
    isAsync: true,
    asyncHandler: interimCallback,
    data: request
  });
}

function addWindowEventListener(event, elem, func) {
  if (elem.addEventListener) {
    elem.addEventListener(event, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + event, func);
  } else {
    elem[event] = func;
  }
}

function removeWindowEventListener(event, elem) {
  if (elem.removeEventListener) {
    elem.removeEventListener(event, null, false);
  } else if (elem.detachEvent) {
    elem.detachEvent('on' + event, null);
  }

  elem[event] = null;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(34);

//TODO: refactor me
var GeoUtils = {

  calculateDistance: function calculateDistance(lat1, lon1, lat2, lon2) {
    var deltaLon = (lon1 - lon2) * Math.PI / 180;

    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    var lat1Sin = Math.sin(lat1);
    var lat1Cos = Math.cos(lat1);
    var lat2Sin = Math.sin(lat2);
    var lat2Cos = Math.cos(lat2);

    return _constants.EARTH_RADIUS * Math.acos(lat1Sin * lat2Sin + lat1Cos * lat2Cos * Math.cos(deltaLon));
  },

  updateDegree: function updateDegree(degree) {
    degree += 180;

    while (degree < 0) {
      degree += 360;
    }

    return degree === 0 ? 180 : degree % 360 - 180;
  },

  countLittleRadius: function countLittleRadius(latitude) {
    var h = Math.abs(latitude) / 180 * _constants.EARTH_RADIUS;
    var diameter = 2 * _constants.EARTH_RADIUS;
    var l_2 = (Math.pow(diameter, 2) - diameter * Math.sqrt(Math.pow(diameter, 2) - 4 * Math.pow(h, 2))) / 2;

    return diameter / 2 - Math.sqrt(l_2 - Math.pow(h, 2));
  },

  isPointInCircle: function isPointInCircle(currentPosition, center, radius) {
    var lat1 = currentPosition.latitude;
    var lon1 = currentPosition.longitude;
    var lat2 = center.latitude;
    var lon2 = center.longitude;

    return GeoUtils.calculateDistance(lat1, lon1, lat2, lon2) <= radius;
  },

  isMobileDevice: function isMobileDevice() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        // eslint-disable-line max-len
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  },

  isPointInRectangular: function isPointInRectangular(currentPosition, nwPoint, sePoint) {
    if (currentPosition.latitude > nwPoint.latitude || currentPosition.latitude < sePoint.latitude) {
      return false;
    }

    if (nwPoint.longitude > sePoint.longitude) {
      return currentPosition.longitude >= nwPoint.longitude || currentPosition.longitude <= sePoint.longitude;
    } else {
      return currentPosition.longitude >= nwPoint.longitude && currentPosition.longitude <= sePoint.longitude;
    }
  },

  getPointPosition: function getPointPosition(point, first, second) {
    var delta = second.longitude - first.longitude;

    if (delta < 0 && delta > -180 || delta > 180) {
      var tmp = first;
      first = second;
      second = tmp;
    }

    if (point.latitude < first.latitude === point.latitude < second.latitude) {
      return 'NO_INTERSECT';
    }

    var x = point.longitude - first.longitude;

    if (x < 0 && x > -180 || x > 180) {
      x = (x - 360) % 360;
    }

    var x2 = (second.longitude - first.longitude + 360) % 360;
    var result = x2 * (point.latitude - first.latitude) / (second.latitude - first.latitude) - x;

    if (result > 0) {
      return 'INTERSECT';
    }

    return 'NO_INTERSECT';
  },

  isPointInShape: function isPointInShape(point, shape) {
    var count = 0;

    function getIndex(i, shape) {
      return (i + 1) % shape.length;
    }

    for (var i = 0; i < shape.length; i++) {
      var position = GeoUtils.getPointPosition(point, shape[i], shape[getIndex(i, shape)]);
      switch (position) {
        case 'INTERSECT':
          {
            count++;
            break;
          }
        case 'ON_LINE':
        case 'NO_INTERSECT':
        default:
          break;
      }
    }

    return count % 2 === 1;
  },

  isPointInFence: function isPointInFence(geoPoint, geoFence) {
    return GeoUtils.isPointInRectangular(geoPoint, geoFence.nwPoint, geoFence.sePoint) || geoFence.type === 'CIRCLE' && GeoUtils.isPointInCircle(geoPoint, geoFence.nodes[0], GeoUtils.calculateDistance(geoFence.nodes[0].latitude, geoFence.nodes[0].longitude, geoFence.nodes[1].latitude, geoFence.nodes[1].longitude)) || geoFence.type === 'SHAPE' && GeoUtils.isPointInShape(geoPoint, geoFence.nodes);
  },

  getOutRectangleNodes: function getOutRectangleNodes(geoPoints) {
    var nwLat = geoPoints[0].latitude;
    var nwLon = geoPoints[0].longitude;
    var seLat = geoPoints[0].latitude;
    var seLon = geoPoints[0].longitude;
    var minLon = 0,
        maxLon = 0,
        lon = 0;

    for (var i = 1; i < geoPoints.length; i++) {
      if (geoPoints[i].latitude > nwLat) {
        nwLat = geoPoints[i].latitude;
      }

      if (geoPoints[i].latitude < seLat) {
        seLat = geoPoints[i].latitude;
      }

      var deltaLon = geoPoints[i].latitude - geoPoints[i - 1].latitude;

      if (deltaLon < 0 && deltaLon > -180 || deltaLon > 270) {
        if (deltaLon > 270) {
          deltaLon -= 360;
        }

        lon += deltaLon;

        if (lon < minLon) {
          minLon = lon;
        }
      } else if (deltaLon > 0 && deltaLon <= 180 || deltaLon <= -270) {
        if (deltaLon <= -270) {
          deltaLon += 360;
        }

        lon += deltaLon;

        if (lon > maxLon) {
          maxLon = lon;
        }
      }
    }

    nwLon += minLon;
    seLon += maxLon;

    if (seLon - nwLon >= 360) {
      seLon = 180;
      nwLon = -180;
    } else {
      seLon = GeoUtils.updateDegree(seLon);
      nwLon = GeoUtils.updateDegree(nwLon);
    }

    return [nwLat, nwLon, seLat, seLon];
  },

  getOutRectangleCircle: function getOutRectangleCircle(center, bounded) {
    var radius = GeoUtils.calculateDistance(center.latitude, center.longitude, bounded.latitude, bounded.longitude);
    var boundLat = center.latitude + 180 * radius / (Math.PI * _constants.EARTH_RADIUS) * (center.latitude > 0 ? 1 : -1);
    var littleRadius = GeoUtils.countLittleRadius(boundLat);
    var westLong = void 0,
        eastLong = void 0,
        northLat = void 0,
        southLat = void 0;

    if (littleRadius > radius) {
      westLong = center.longitude - 180 * radius / littleRadius;
      eastLong = 2 * center.longitude - westLong;
      westLong = GeoUtils.updateDegree(westLong);
      eastLong = eastLong % 360 === 180 ? 180 : GeoUtils.updateDegree(eastLong);
    } else {
      westLong = -180;
      eastLong = 180;
    }

    if (center.latitude > 0) {
      northLat = boundLat;
      southLat = 2 * center.latitude - boundLat;
    } else {
      southLat = boundLat;
      northLat = 2 * center.latitude - boundLat;
    }

    return [Math.min(northLat, 90), westLong, Math.max(southLat, -90), eastLong];
  },

  getOutRectangle: function getOutRectangle() {
    return arguments.length === 1 ? GeoUtils.getOutRectangleNodes(arguments[1]) : GeoUtils.getOutRectangleCircle(arguments[0], arguments[1]);
  }

};

exports.default = GeoUtils;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tracker = null;

var GeoTracker = function () {
  _createClass(GeoTracker, null, [{
    key: "get",
    value: function get() {
      return tracker = tracker || new GeoTracker();
    }
  }, {
    key: "reset",
    value: function reset() {
      tracker = null;
    }
  }]);

  function GeoTracker() {
    _classCallCheck(this, GeoTracker);

    this.monitoringId = null;
    this._timers = {};
    this._trackedFences = [];
    this._lastResults = {};
  }

  return GeoTracker;
}();

exports.default = GeoTracker;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me
var FindHelpers = {
  searchRectangle: function searchRectangle(arg) {
    var rect = ['nwlat=' + arg[0], 'nwlon=' + arg[1], 'selat=' + arg[2], 'selon=' + arg[3]];
    return rect.join('&');
  },

  latitude: function latitude(arg) {
    return 'lat=' + arg;
  },

  longitude: function longitude(arg) {
    return 'lon=' + arg;
  },

  metadata: function metadata(arg) {
    return 'metadata=' + JSON.stringify(arg);
  },

  units: function units(arg) {
    return 'units=' + arg;
  },

  radius: function radius(arg) {
    return 'r=' + arg;
  },

  categories: function categories(arg) {
    arg = _utils2.default.isString(arg) ? [arg] : arg;

    return 'categories=' + _utils2.default.encodeArrayToUriComponent(arg);
  },

  includeMetadata: function includeMetadata(arg) {
    return 'includemetadata=' + arg;
  },

  pageSize: function pageSize(arg) {
    if (arg < 1 || arg > 100) {
      throw new Error('PageSize can not be less then 1 or greater than 100');
    }

    return 'pagesize=' + arg;
  },

  offset: function offset(arg) {
    if (arg < 0) {
      throw new Error('Offset can not be less then 0');
    }

    return 'offset=' + arg;
  },

  relativeFindPercentThreshold: function relativeFindPercentThreshold(arg) {
    if (arg <= 0) {
      throw new Error('Threshold can not be less then or equal 0');
    }

    return 'relativeFindPercentThreshold=' + arg;
  },

  relativeFindMetadata: function relativeFindMetadata(arg) {
    return 'relativeFindMetadata=' + encodeURIComponent(JSON.stringify(arg));
  },

  condition: function condition(arg) {
    return 'whereClause=' + encodeURIComponent(arg);
  },

  degreePerPixel: function degreePerPixel(arg) {
    return 'dpp=' + arg;
  },

  clusterGridSize: function clusterGridSize(arg) {
    return 'clustergridsize=' + arg;
  },

  geoFence: function geoFence(arg) {
    return 'geoFence=' + arg;
  }
};

exports.default = FindHelpers;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.loadItems = loadItems;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _cluster = __webpack_require__(12);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _queryValidator = __webpack_require__(37);

var _queryParams = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function loadItems(query, asyncHandler) {
  (0, _queryValidator.validateQueryObject)(query);

  var url = query.url + (query.searchRectangle ? '/rect' : '/points') + '?' + (0, _queryParams.toQueryParams)(query);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return responseParser(resp, query);
    });
  }

  var result = _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return responseParser(result, query);
}

function responseParser(resp, geoQuery) {
  return resp.map(function (geoObject) {
    var GeoItem = geoObject.hasOwnProperty('totalPoints') ? _cluster2.default : _point2.default;

    return new GeoItem(_extends({}, geoObject, { geoQuery: geoQuery }));
  });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FilesUtils = {
  ensureSlashInPath: function ensureSlashInPath(path) {
    if (!/^\//.test(path)) {
      return '/' + path;
    }

    return path;
  }
};

exports.default = FilesUtils;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BackendlessRequest"] = factory();
	else
		root["BackendlessRequest"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Casts `value` as an array if it's not one.
 * Equvivalent to lodash/castArray
 */
var castArray = exports.castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};

var isObject = exports.isObject = function isObject(value) {
  return null != value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

var isFormData = exports.isFormData = function isFormData(value) {
  return value && value.constructor && value.constructor.toString().trim().indexOf('function FormData') === 0;
};

var isStream = exports.isStream = function isStream(value) {
  var stream = __webpack_require__(5);

  return value instanceof stream.Stream;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cache = __webpack_require__(3);

var _cache2 = _interopRequireDefault(_cache);

var _qs = __webpack_require__(4);

var qs = _interopRequireWildcard(_qs);

var _utils = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONTENT_TYPE_HEADER = 'Content-Type';
var CACHE_FLUSH_INTERVAL = 60000; //60 sec

var cache = new _cache2.default(CACHE_FLUSH_INTERVAL);

var ResponseError = function (_Error) {
  _inherits(ResponseError, _Error);

  function ResponseError(error, status, headers) {
    _classCallCheck(this, ResponseError);

    var _this = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this));

    _this.status = status;
    _this.headers = headers;
    _this.message = error.message || error;
    _this.code = error.code;
    return _this;
  }

  return ResponseError;
}(Error);

function parseError(res) {
  if (res.status === 502) {
    return 'No connection with server';
  }

  return res.body || 'Status Code ' + res.status + ' (' + res.statusText + ')';
}

function parseBody(res) {
  try {
    return _extends({}, res, { body: JSON.parse(res.body) });
  } catch (e) {
    return res;
  }
}

function parseHeaders(headersString) {
  var parsed = {};

  if (!headersString) {
    return parsed;
  }

  headersString.split('\n').forEach(function (line) {
    var i = line.indexOf(':');
    var key = line.substr(0, i).trim();
    var val = line.substr(i + 1).trim();

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
}

var sendXmlHttpRequest = function sendXmlHttpRequest(path, method, headers, body) {
  return new Promise(function sendRequest(resolve, reject) {
    var request = new Request.XMLHttpRequest();

    request.open(method.toUpperCase(), path, true);

    request.onload = function handleLoadEvent() {
      var headers = parseHeaders(request.getAllResponseHeaders());
      var _request = request,
          status = _request.status,
          statusText = _request.statusText,
          response = _request.response,
          responseText = _request.responseText;

      var body = response || responseText;

      resolve({ status: status, statusText: statusText, headers: headers, body: body });

      request = null;
    };

    request.onerror = function handleErrorEvent() {
      reject(new Error('Network Error'));

      request = null;
    };

    request.ontimeout = function handleTimeout() {
      reject(new Error('Connection aborted due to timeout'));

      request = null;
    };

    Object.keys(headers).forEach(function (key) {
      request.setRequestHeader(key, headers[key]);
    });

    request.send(body);
  });
};

var sendNodeAPIRequest = function sendNodeAPIRequest(path, method, headers, body, encoding) {
  return new Promise(function (resolve, reject) {
    var u = __webpack_require__(6).parse(path);
    var form = (0, _utils.isFormData)(body) && body;

    var https = u.protocol === 'https:';
    var options = {
      host: u.hostname,
      port: u.port || (https ? 443 : 80),
      method: method,
      path: u.path,
      headers: headers
    };

    var _send = function _send() {
      var Buffer = __webpack_require__(1).Buffer;
      var httpClient = __webpack_require__(https ? 7 : 8);

      var req = httpClient.request(options, function (res) {
        var strings = [];
        var buffers = [];
        var bufferLength = 0;
        var body = '';

        var status = res.statusCode,
            statusText = res.statusMessage,
            headers = res.headers;


        res.on('data', function (chunk) {
          if (!Buffer.isBuffer(chunk)) {
            strings.push(chunk);
          } else if (chunk.length) {
            bufferLength += chunk.length;
            buffers.push(chunk);
          }
        });

        res.on('end', function () {
          if (bufferLength) {
            body = Buffer.concat(buffers, bufferLength);

            if (encoding != null) {
              body = body.toString(encoding);
            }
          } else if (strings.length) {
            body = strings.join();
          }

          resolve({ status: status, statusText: statusText, headers: headers, body: body });
        });

        res.on('error', reject);
      });

      req.on('error', reject);

      if (body) {
        if ((0, _utils.isStream)(body)) {
          body.pipe(req);
          return;
        }

        req.write(body);
      }

      req.end();
    };

    if (form) {
      _extends(options.headers, form.getHeaders());

      form.getLength(function (err, length) {
        if (!err && !isNaN(length)) {
          options.headers['content-length'] = length;
        }

        _send();
      });
    } else {
      if (body && !options.headers['content-length']) {
        var Buffer = __webpack_require__(1).Buffer;
        options.headers['content-length'] = Buffer.byteLength(body);
      }

      _send();
    }
  });
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var responseError = new ResponseError(parseError(response), response.status, response.headers);

  return Promise.reject(responseError);
}

var Request = function () {
  function Request(path, method, body) {
    _classCallCheck(this, Request);

    this.method = method;
    this.path = path;
    this.body = body;
    this.tags = undefined;
    this.unwrap = true;
    this.cacheTTL = 0;
    this.headers = {};
    this.queryParams = {};
    this.encoding = 'utf8';
  }

  /**
   * Sets a header
   *
   * @param {String|Object} key or map of headers
   * @param {String} [value]
   * @returns {Request}
   */


  _createClass(Request, [{
    key: 'set',
    value: function set(key, value) {
      if ((0, _utils.isObject)(key)) {
        for (var headerName in key) {
          this.set(headerName, key[headerName]);
        }
      } else if (typeof value !== 'undefined') {
        this.headers[key] = value;
      }

      return this;
    }

    /**
     * Which kind of tags this request affects.
     * Used for cache validation.
     * Non GET requests with defined tags, will clean all related to these tags caches
     *
     * @param {Array.<String>} tags
     * @returns {Request}
     */

  }, {
    key: 'cacheTags',
    value: function cacheTags() {
      for (var _len = arguments.length, tags = Array(_len), _key = 0; _key < _len; _key++) {
        tags[_key] = arguments[_key];
      }

      this.tags = tags;

      return this;
    }

    /**
     * @param {String} queryParams
     * @returns {Request}
     */

  }, {
    key: 'query',
    value: function query(queryParams) {
      _extends(this.queryParams, queryParams);

      return this;
    }
  }, {
    key: 'form',
    value: function form(_form) {
      var _this2 = this;

      if (_form) {
        var _FormData = module.exports.FormData;

        if (_form instanceof _FormData) {
          this.body = _form;
        } else {
          (function () {
            var formData = new _FormData();

            var _loop = function _loop(formKey) {
              if (formKey) {
                (0, _utils.castArray)(_form[formKey]).forEach(function (formValue) {
                  if (formValue && formValue.hasOwnProperty('value') && formValue.hasOwnProperty('options')) {
                    formData.append(formKey, formValue.value, formValue.options);
                  } else {
                    formData.append(formKey, formValue);
                  }
                });
              }
            };

            for (var formKey in _form) {
              _loop(formKey);
            }

            _this2.body = formData;
          })();
        }
      }

      return this;
    }

    /**
     * Should we cache or use cached result
     *
     * @param {Number} ttl Time to live for cached response. 15 seconds by default
     * @returns {Request}
     */

  }, {
    key: 'useCache',
    value: function useCache() {
      var ttl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;

      this.cacheTTL = ttl;

      return this;
    }

    /**
     * Reset cache if passed TRUE and tags has been specified before
     *
     * @param {Boolean} reset - flag to reset cache or not
     * @returns {Request}
     */

  }, {
    key: 'resetCache',
    value: function resetCache(reset) {
      if (reset && this.tags) {
        cache.deleteByTags(this.tags);
      }

      return this;
    }

    /**
     * Shortcut for req.set('Content-Type', value)
     *
     * @param {String} contentType
     * @returns {Request}
     */

  }, {
    key: 'type',
    value: function type(contentType) {
      this.set(CONTENT_TYPE_HEADER, contentType);

      return this;
    }

    /**
     * Should we unwrap the response and return only body. true by default
     * @param {Boolean} unwrap
     * @returns {Request}
     */

  }, {
    key: 'unwrapBody',
    value: function unwrapBody(unwrap) {
      this.unwrap = unwrap;

      return this;
    }

    /**
     * set encoding to response
     * works only for Node js
     *
     * @param {String} encoding
     * @returns {Request}
     */

  }, {
    key: 'setEncoding',
    value: function setEncoding(encoding) {
      this.encoding = encoding;

      return this;
    }

    /**
     * Sends the requst
     *
     * @param {Object} body
     * @returns {Promise}
     */

  }, {
    key: 'send',
    value: function send(body) {
      var _this3 = this;

      var path = this.path;
      var queryString = qs.stringify(this.queryParams);

      if (queryString) {
        path += '?' + queryString;
      }

      if (this.cacheTTL) {
        var cached = cache.get(path);

        if (cached !== undefined) {
          return Promise.resolve(cached);
        }
      }

      var type = this.headers[CONTENT_TYPE_HEADER];

      if (!type && (0, _utils.isObject)(body) && !(0, _utils.isFormData)(body)) {
        this.type('application/json');
      }

      if (body) {
        var isJSON = this.headers[CONTENT_TYPE_HEADER] === 'application/json';

        body = isJSON && typeof body !== 'string' ? JSON.stringify(body) : body;
      }

      var unwrapBody = function unwrapBody(res) {
        return _this3.unwrap ? res.body : res;
      };

      /**
       * Caches the response if required
       */
      var cacheResponse = function cacheResponse(res) {
        if (_this3.cacheTTL) {
          cache.set(path, res, _this3.tags, _this3.cacheTTL);
        }

        return res;
      };

      /**
       * Deletes all relevant to req.cacheTags keys from the cache if this request method is not GET
       */
      var flushCache = function flushCache(res) {
        if (_this3.tags && _this3.method !== 'get') {
          cache.deleteByTags(_this3.tags);
        }

        return res;
      };

      if (Request.verbose) {
        console.log(this.method.toUpperCase(), decodeURIComponent(path), body, this.headers);
      }

      return Request.send(path, this.method.toUpperCase(), this.headers, body, this.encoding).then(parseBody).then(checkStatus).then(unwrapBody).then(cacheResponse).then(flushCache);
    }

    /**
     * If you are too lazy to use method 'send', don't use it and stay cool :)
     *
     * @param {Function} successHandler
     * @param {Function} errorHandler
     * @returns {Promise}
     */

  }, {
    key: 'then',
    value: function then(successHandler, errorHandler) {
      this.promise = this.promise || this.send(this.body);

      return this.promise.then(successHandler, errorHandler);
    }

    /**
     * @param {Function} errorHandler
     * @returns {Promise}
     */

  }, {
    key: 'catch',
    value: function _catch(errorHandler) {
      this.promise = this.promise || this.send(this.body);

      return this.promise.catch(errorHandler);
    }
  }]);

  return Request;
}();

Object.defineProperty(Request, 'FormData', {
  get: function get() {
    return typeof FormData !== 'undefined' ? FormData : __webpack_require__(9);
  }
});

Request.XMLHttpRequest = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined;

Request.send = function (path, method, headers, body, encoding) {
  var sender = typeof Request.XMLHttpRequest !== 'undefined' ? sendXmlHttpRequest : sendNodeAPIRequest;

  return sender(path, method, headers, body, encoding);
};

Request.verbose = false;
Request.methods = ['get', 'post', 'put', 'patch', 'delete'];

Request.methods.forEach(function (method) {
  Request[method] = function (path, body) {
    return new Request(path, method, body);
  };
});

module.exports = Request;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_TTL = 30000; // 30 sec

/**
 * @typedef {Object} CacheItem
 * @property {*} value
 * @property {Array.<RegExp|String>} tags
 * @property {Number} ttl
 */

/**
 * @param {*} value
 * @param {Array.<RegExp|String>}tags
 * @param {Number} ttl
 * @returns {CacheItem}
 */
var cacheItem = function cacheItem(value, tags, ttl) {
  return { value: value, tags: tags, ttl: ttl };
};

var currentTime = function currentTime() {
  return new Date().getTime();
};

/**
 * Returns true if tag A matches tag B :
 *  - if they are non-strictly equal
 *  - if one of them is Regexp matching the opposite
 *
 * @param {String|RegExp} a
 * @param {String|RegExp} b
 * @returns {Boolean}
 */
var tagsMatches = function tagsMatches(a, b) {
  var result = a == b; // eslint-disable-line

  if (!result && a instanceof RegExp) {
    result = a.test(b);
  }

  if (!result && b instanceof RegExp) {
    result = b.test(a);
  }

  return result;
};

/**
 * Returns true if any of A tags matches any of B tags
 *
 * @param {Array.<String|RegExp>} a
 * @param {Array.<String|RegExp>} b
 * @returns {Boolean}
 */
var tagsContainMatches = function tagsContainMatches(a, b) {
  return !!a.find(function (aTag) {
    return b.find(function (bTag) {
      return tagsMatches(aTag, bTag);
    });
  });
};

/**
 * A Cache with TTL and optional tags for the keys
 * Makes it possible to assign multiple tags for a key and delete keys by tags
 * Optionally it starts flushing timer which cleans all outdated keys
 */

var Cache = function () {

  /**
   * @param {Number?} flushInterval
   */
  function Cache(flushInterval) {
    _classCallCheck(this, Cache);

    this.flushInterval = flushInterval;

    /**
     * @type {Map.<String, CacheItem>}
     */
    this.map = new Map();
  }

  /**
   * @param {String} key
   * @returns {*}
   */


  _createClass(Cache, [{
    key: "get",
    value: function get(key) {
      var cacheItem = this.map.get(key);

      if (cacheItem) {
        if (cacheItem.ttl > currentTime()) {
          return cacheItem.value;
        } else {
          this.map.delete(key);
        }
      }
    }

    /**
     * @param {String} key
     * @param {*} value
     * @param {Array.<RegExp|String>=} tags
     * @param {Number=} ttl
     */

  }, {
    key: "set",
    value: function set(key, value, tags) {
      var ttl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_TTL;

      this.map.set(key, cacheItem(value, tags, currentTime() + ttl));

      if (this.flushInterval && !this.flushTimer) {
        this.flushTimer = setInterval(this.flush.bind(this), this.flushInterval);

        if (this.flushTimer.unref) {
          this.flushTimer.unref();
        }
      }
    }

    /**
     * @param {String} key
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      this.map.delete(key);
    }

    /**
     * @param {Array.<String>} tags
     */

  }, {
    key: "deleteByTags",
    value: function deleteByTags(tags) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          if (value.tags && tagsContainMatches(tags, value.tags)) {
            this.delete(key);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Deletes all outdated keys
     */

  }, {
    key: "flush",
    value: function flush() {
      var now = currentTime();

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];

          if (value.ttl < now) {
            this.delete(key);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Cache;
}();

exports.default = Cache;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = undefined;

var _utils = __webpack_require__(0);

/**
 * Produces a URL query string from a given obj by iterating through the object's "own properties".
 * @param {Object} obj
 * @returns {string}
 */
var stringify = exports.stringify = function stringify(obj) {
  var tokens = [];

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (value !== undefined) {
      (0, _utils.castArray)(value).forEach(function (value) {
        tokens.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      });
    }
  });

  return tokens.join('&');
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless-request.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveModelClassFromString = resolveModelClassFromString;

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveModelClassFromString(className) {
  if (className === _user2.default.className) {
    return _user2.default;
  }

  return function () {};
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _query = __webpack_require__(28);

var _query2 = _interopRequireDefault(_query);

var _pagingQueryBuilder = __webpack_require__(29);

var _pagingQueryBuilder2 = _interopRequireDefault(_pagingQueryBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadRelationsQueryBuilder = function () {
  _createClass(LoadRelationsQueryBuilder, null, [{
    key: 'create',
    value: function create() {
      return new LoadRelationsQueryBuilder();
    }
  }, {
    key: 'of',
    value: function of(RelationModel) {
      return new LoadRelationsQueryBuilder(RelationModel);
    }
  }]);

  function LoadRelationsQueryBuilder(RelationModel) {
    _classCallCheck(this, LoadRelationsQueryBuilder);

    this._query = new _query2.default();
    this._query.relationModel = RelationModel;

    this._paging = new _pagingQueryBuilder2.default();
  }

  _createClass(LoadRelationsQueryBuilder, [{
    key: 'setRelationName',
    value: function setRelationName(relationName) {
      this._query.setOption('relationName', relationName);

      return this;
    }
  }, {
    key: 'setPageSize',
    value: function setPageSize(pageSize) {
      this._paging.setPageSize(pageSize);

      return this;
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      this._paging.setOffset(offset);

      return this;
    }
  }, {
    key: 'prepareNextPage',
    value: function prepareNextPage() {
      this._paging.prepareNextPage();

      return this;
    }
  }, {
    key: 'preparePreviousPage',
    value: function preparePreviousPage() {
      this._paging.preparePreviousPage();

      return this;
    }
  }, {
    key: 'setWhereClause',
    value: function setWhereClause(whereClause) {
      this._query.condition = whereClause;

      return this;
    }
  }, {
    key: 'build',
    value: function build() {
      this._query.setOptions(this._paging.build());

      return this._query;
    }
  }]);

  return LoadRelationsQueryBuilder;
}();

exports.default = LoadRelationsQueryBuilder;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataQuery = function () {
  function DataQuery(args) {
    _classCallCheck(this, DataQuery);

    args = args || {};

    this.properties = args.properties || [];
    this.condition = args.condition || null;
    this.havingClause = args.havingClause || null;
    this.options = args.options || null;
    this.url = args.url || null;
  }

  _createClass(DataQuery, [{
    key: "addProperty",
    value: function addProperty(prop) {
      this.properties = this.properties || [];
      this.properties.push(prop);
    }
  }, {
    key: "setOption",
    value: function setOption(name, value) {
      this.options = this.options || {};

      this.options[name] = value;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          this.setOption(key, options[key]);
        }
      }
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options && this.options[name];
    }
  }]);

  return DataQuery;
}();

exports.default = DataQuery;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PAGING_DEFAULTS = {
  pageSize: 10,
  offset: 0
};

var DataPagingQueryBuilder = function () {
  function DataPagingQueryBuilder() {
    _classCallCheck(this, DataPagingQueryBuilder);

    this.offset = PAGING_DEFAULTS.offset;
    this.pageSize = PAGING_DEFAULTS.pageSize;
  }

  _createClass(DataPagingQueryBuilder, [{
    key: 'setPageSize',
    value: function setPageSize(pageSize) {
      if (pageSize <= 0) {
        return 'Page size must be a positive value.';
      }

      this.pageSize = pageSize;

      return this;
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      if (offset < 0) {
        throw new Error('Offset cannot have a negative value.');
      }

      this.offset = offset;

      return this;
    }
  }, {
    key: 'prepareNextPage',
    value: function prepareNextPage() {
      this.setOffset(this.offset + this.pageSize);

      return this;
    }
  }, {
    key: 'preparePreviousPage',
    value: function preparePreviousPage() {
      var newOffset = this.offset > this.pageSize ? this.offset - this.pageSize : 0;

      this.setOffset(newOffset);

      return this;
    }
  }, {
    key: 'build',
    value: function build() {
      return {
        pageSize: this.pageSize,
        offset: this.offset
      };
    }
  }]);

  return DataPagingQueryBuilder;
}();

exports.default = DataPagingQueryBuilder;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractQueryOptions = extractQueryOptions;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me
//TODO: does make sense to move this logic into QueryBuilder?

function extractQueryOptions(options) {
  var params = [];

  if (typeof options.pageSize !== 'undefined') {
    if (options.pageSize < 1 || options.pageSize > 100) {
      throw new Error('PageSize can not be less then 1 or greater than 100');
    }

    params.push('pageSize=' + encodeURIComponent(options.pageSize));
  }

  if (typeof options.offset !== 'undefined') {
    if (options.offset < 0) {
      throw new Error('Offset can not be less then 0');
    }

    params.push('offset=' + encodeURIComponent(options.offset));
  }

  if (options.sortBy) {
    if (_utils2.default.isString(options.sortBy)) {
      params.push('sortBy=' + encodeURIComponent(options.sortBy));
    } else if (_utils2.default.isArray(options.sortBy)) {
      params.push('sortBy=' + _utils2.default.encodeArrayToUriComponent(options.sortBy));
    }
  }

  if (options.groupBy) {
    if (_utils2.default.isString(options.groupBy)) {
      params.push('groupBy=' + encodeURIComponent(options.groupBy));
    } else if (_utils2.default.isArray(options.groupBy)) {
      params.push('groupBy=' + _utils2.default.encodeArrayToUriComponent(options.groupBy));
    }
  }

  if (_utils2.default.isNumber(options.relationsDepth)) {
    params.push('relationsDepth=' + options.relationsDepth);
  }

  if (options.relations) {
    if (_utils2.default.isArray(options.relations)) {
      var loadRelations = options.relations.length ? _utils2.default.encodeArrayToUriComponent(options.relations) : '*';
      params.push('loadRelations=' + loadRelations);
    }
  }

  return params.join('&');
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _incrementAndGet = __webpack_require__(64);

Object.keys(_incrementAndGet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _incrementAndGet[key];
    }
  });
});

var _decrementAndGet = __webpack_require__(65);

Object.keys(_decrementAndGet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _decrementAndGet[key];
    }
  });
});

var _get = __webpack_require__(66);

Object.keys(_get).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _get[key];
    }
  });
});

var _getAndIncrement = __webpack_require__(67);

Object.keys(_getAndIncrement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getAndIncrement[key];
    }
  });
});

var _getAndDecrement = __webpack_require__(68);

Object.keys(_getAndDecrement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getAndDecrement[key];
    }
  });
});

var _getAndAdd = __webpack_require__(69);

Object.keys(_getAndAdd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getAndAdd[key];
    }
  });
});

var _addAndGet = __webpack_require__(70);

Object.keys(_addAndGet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _addAndGet[key];
    }
  });
});

var _compareAndSet = __webpack_require__(71);

Object.keys(_compareAndSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _compareAndSet[key];
    }
  });
});

var _reset = __webpack_require__(72);

Object.keys(_reset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reset[key];
    }
  });
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Classes = {};

var Parsers = exports.Parsers = {
  set: function set(className, Class) {
    Classes[className] = Class;
  },
  get: function get(className) {
    return Classes[className];
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSocialLoginRequest = undefined;

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localCache = __webpack_require__(9);

var _localCache2 = _interopRequireDefault(_localCache);

var _currentUser = __webpack_require__(5);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendSocialLoginRequest = exports.sendSocialLoginRequest = function sendSocialLoginRequest(response, socialType, fieldsMapping, stayLoggedIn, asyncHandler) {
  if (fieldsMapping) {
    response['fieldsMapping'] = fieldsMapping;
  }

  var interimCallback = new _async2.default(function (r) {
    (0, _currentUser.setLocalCurrentUser)((0, _utils.parseResponse)(r));
    _localCache2.default.set('stayLoggedIn', !!stayLoggedIn);
    asyncHandler.success((0, _utils.getUserFromResponse)((0, _currentUser.getLocalCurrentUser)()));
  }, function (e) {
    asyncHandler.fault(e);
  });

  _request2.default.post({
    url: _urls2.default.userSocialLogin(socialType),
    isAsync: true,
    asyncHandler: interimCallback,
    data: response
  });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EARTH_RADIUS = exports.EARTH_RADIUS = 6378100.0;

var UNITS = exports.UNITS = {
  METERS: 'METERS',
  KILOMETERS: 'KILOMETERS',
  MILES: 'MILES',
  YARDS: 'YARDS',
  FEET: 'FEET'
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _tracker = __webpack_require__(21);

var _tracker2 = _interopRequireDefault(_tracker);

var _fenceActions = __webpack_require__(36);

var _fenceActions2 = _interopRequireDefault(_fenceActions);

var _startMonitoring = __webpack_require__(103);

var _stopMonitoring = __webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeoTrackerMonitor = {
  reset: function reset() {
    _tracker2.default.reset();
  },


  runOnEnterAction: _utils2.default.promisified(_fenceActions2.default.enter),
  runOnEnterActionSync: _utils2.default.synchronized(_fenceActions2.default.enter),

  runOnStayAction: _utils2.default.promisified(_fenceActions2.default.stay),
  runOnStayActionSync: _utils2.default.synchronized(_fenceActions2.default.stay),

  runOnExitAction: _utils2.default.promisified(_fenceActions2.default.exist),
  runOnExitActionSync: _utils2.default.synchronized(_fenceActions2.default.exist),

  startGeofenceMonitoringWithInAppCallback: _utils2.default.promisified(_startMonitoring.startMonitoring),
  startGeofenceMonitoringWithInAppCallbackSync: _utils2.default.synchronized(_startMonitoring.startMonitoring),

  startGeofenceMonitoringWithRemoteCallback: _utils2.default.promisified(_startMonitoring.startMonitoring),
  startGeofenceMonitoringWithRemoteCallbackSync: _utils2.default.synchronized(_startMonitoring.startMonitoring),

  stopGeofenceMonitoring: _stopMonitoring.stopMonitoring
};

exports.default = GeoTrackerMonitor;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function runFenceAction(action, geoFenceName, geoPoint, asyncHandler) {
  if (geoPoint instanceof _async2.default) {
    asyncHandler = geoPoint;
    geoPoint = undefined;
  }

  if (!_utils2.default.isString(geoFenceName)) {
    throw new Error("Invalid value for parameter 'geoFenceName'. Geo Fence Name must be a String");
  }

  if (geoPoint && !(geoPoint instanceof _point2.default) && !geoPoint.objectId) {
    throw new Error('Method argument must be a valid instance of GeoPoint persisted on the server');
  }

  return _request2.default.post({
    url: _urls2.default.geoFence(action, geoFenceName),
    isAsync: !!asyncHandler,
    data: geoPoint,
    asyncHandler: asyncHandler
  });
}

var runOnStayAction = function runOnStayAction(geoFenceName, geoPoint, asyncHandler) {
  return runFenceAction('onstay', geoFenceName, geoPoint, asyncHandler);
};

var runOnExitAction = function runOnExitAction(geoFenceName, geoPoint, asyncHandler) {
  return runFenceAction('onexit', geoFenceName, geoPoint, asyncHandler);
};

var runOnEnterAction = function runOnEnterAction(geoFenceName, geoPoint, asyncHandler) {
  return runFenceAction('onenter', geoFenceName, geoPoint, asyncHandler);
};

var GeoFenceActions = {
  run: runFenceAction,

  enter: runOnEnterAction,
  stay: runOnStayAction,
  exist: runOnExitAction
};

exports.default = GeoFenceActions;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateQueryObject = validateQueryObject;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function validateQueryObject(query) {
  if (query.geoFence !== undefined && !_utils2.default.isString(query.geoFence)) {
    throw new Error('Invalid value for argument "geoFenceName". Geo Fence Name must be a String');
  }

  if (query.searchRectangle && query.radius) {
    throw new Error('Inconsistent geo query. Query should not contain both rectangle and radius search parameters.');
  }

  if (query.radius && (query.latitude === undefined || query.longitude === undefined)) {
    throw new Error('Latitude and longitude should be provided to search in radius');
  }

  if ((query.relativeFindMetadata || query.relativeFindPercentThreshold) && !(query.relativeFindMetadata && query.relativeFindPercentThreshold)) {
    throw new Error('Inconsistent geo query. ' + 'Query should contain both relativeFindPercentThreshold and relativeFindMetadata or none of them');
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toQueryParams = toQueryParams;

var _findHelpers = __webpack_require__(22);

var _findHelpers2 = _interopRequireDefault(_findHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function toQueryParams(query) {
  var params = [];

  if (query.units) {
    params.push('units=' + query.units);
  }

  for (var prop in query) {
    if (query.hasOwnProperty(prop) && _findHelpers2.default.hasOwnProperty(prop) && query[prop] != null) {
      params.push(_findHelpers2.default[prop](query[prop]));
    }
  }

  return params.join('&');
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PublishOptions = function PublishOptions(args) {
  _classCallCheck(this, PublishOptions);

  args = args || {};

  this.publisherId = args.publisherId || undefined;
  this.headers = args.headers || undefined;
  this.subtopic = args.subtopic || undefined;
};

exports.default = PublishOptions;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeliveryOptions = function DeliveryOptions(args) {
  _classCallCheck(this, DeliveryOptions);

  args = args || {};

  this.publishPolicy = args.publishPolicy || undefined;
  this.pushBroadcast = args.pushBroadcast || undefined;
  this.pushSinglecast = args.pushSinglecast || undefined;
  this.publishAt = args.publishAt || undefined;
  this.repeatEvery = args.repeatEvery || undefined;
  this.repeatExpiresAt = args.repeatExpiresAt || undefined;
};

exports.default = DeliveryOptions;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bodyparts = function Bodyparts(args) {
  _classCallCheck(this, Bodyparts);

  args = args || {};

  this.textmessage = args && args.textmessage;
  this.htmlmessage = args && args.htmlmessage;
};

exports.default = Bodyparts;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proxy = function () {
  function Proxy() {
    _classCallCheck(this, Proxy);

    this.eventHandlers = {};
  }

  _createClass(Proxy, [{
    key: 'on',
    value: function on(eventName, handler) {
      if (!eventName) {
        throw new Error('Event name not specified');
      }

      if (!handler) {
        throw new Error('Handler not specified');
      }

      this.eventHandlers[eventName] = this.eventHandlers[eventName] || [];
      this.eventHandlers[eventName].push(handler);
    }
  }, {
    key: 'fireEvent',
    value: function fireEvent(eventName, data) {
      var handlers = this.eventHandlers[eventName] || [];

      handlers.forEach(function (handler) {
        return handler(data);
      });
    }
  }]);

  return Proxy;
}();

exports.default = Proxy;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFile = undefined;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeFileName = function sanitizeFileName(fileName) {
  return encodeURIComponent(fileName).replace(/'/g, '%27').replace(/"/g, '%22');
};

var sendFile = exports.sendFile = function sendFile(options) {
  var url = _urls2.default.filePath(options.path) + '/' + sanitizeFileName(options.fileName);
  var query = {};

  if (_utils2.default.isBoolean(options.overwrite)) {
    query.overwrite = options.overwrite;
  }

  return _request2.default.post({
    url: url,
    query: query,
    form: { file: options.file },
    asyncHandler: options.asyncHandler
  });
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _backendlessRequest = __webpack_require__(25);

var _backendlessRequest2 = _interopRequireDefault(_backendlessRequest);

var _logging = __webpack_require__(46);

var _logging2 = _interopRequireDefault(_logging);

var _counters = __webpack_require__(62);

var _counters2 = _interopRequireDefault(_counters);

var _cache = __webpack_require__(73);

var _cache2 = _interopRequireDefault(_cache);

var _commerce = __webpack_require__(80);

var _commerce2 = _interopRequireDefault(_commerce);

var _users = __webpack_require__(84);

var _users2 = _interopRequireDefault(_users);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

var _customServices = __webpack_require__(98);

var _customServices2 = _interopRequireDefault(_customServices);

var _events = __webpack_require__(100);

var _events2 = _interopRequireDefault(_events);

var _geo = __webpack_require__(102);

var _geo2 = _interopRequireDefault(_geo);

var _data = __webpack_require__(16);

var _data2 = _interopRequireDefault(_data);

var _messaging = __webpack_require__(116);

var _messaging2 = _interopRequireDefault(_messaging);

var _device = __webpack_require__(14);

var _device2 = _interopRequireDefault(_device);

var _files = __webpack_require__(131);

var _files2 = _interopRequireDefault(_files);

var _localCache = __webpack_require__(9);

var _localCache2 = _interopRequireDefault(_localCache);

var _localVars = __webpack_require__(8);

var _localVars2 = _interopRequireDefault(_localVars);

var _initApp = __webpack_require__(145);

var _userAgent = __webpack_require__(146);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global;

var previousBackendless = root && root.Backendless;

var Backendless = {

  get debugMode() {
    return _localVars2.default.debugMode;
  },

  set debugMode(debugMode) {
    _localVars2.default.debugMode = !!debugMode;
  },

  get serverURL() {
    return _localVars2.default.serverURL;
  },

  set serverURL(serverURL) {
    _localVars2.default.serverURL = serverURL;
  },

  get XMLHttpRequest() {
    return _localVars2.default.XMLHttpRequest;
  },

  set XMLHttpRequest(XMLHttpRequest) {
    _localVars2.default.XMLHttpRequest = XMLHttpRequest;
  },

  get applicationId() {
    return _localVars2.default.applicationId;
  },

  get secretKey() {
    return _localVars2.default.secretKey;
  },

  get appPath() {
    return _localVars2.default.appPath;
  },

  initApp: _initApp.initApp,

  getCurrentUserToken: _currentUser.getCurrentUserToken,

  setupDevice: _device2.default.setup,

  browser: (0, _userAgent.getUserAgent)(),

  Request: _backendlessRequest2.default,

  noConflict: function noConflict() {
    if (root) {
      root.Backendless = previousBackendless;
    }

    return Backendless;
  },


  ///-------------------------------------///
  ///-------------- SERVICES -------------///

  Logging: _logging2.default,
  Counters: _counters2.default,
  Cache: _cache2.default,
  Commerce: _commerce2.default,
  Users: _users2.default,
  User: _user2.default,
  CustomServices: _customServices2.default,
  Events: _events2.default,
  Geo: _geo2.default,
  Data: _data2.default,
  Messaging: _messaging2.default,
  Files: _files2.default,

  ///-------------- SERVICES -------------///
  ///-------------------------------------///

  ///-------------------------------------///
  ///--------BACKWARD COMPATIBILITY-------///

  //TODO: do we need to remove it?
  UserService: _users2.default,
  GeoQuery: _geo2.default.Query,
  GeoPoint: _geo2.default.Point,
  GeoCluster: _geo2.default.Cluster,
  Persistence: _data2.default,
  DataQueryBuilder: _data2.default.QueryBuilder,
  LoadRelationsQueryBuilder: _data2.default.LoadRelationsQueryBuilder,
  Bodyparts: _messaging2.default.Bodyparts,
  PublishOptions: _messaging2.default.PublishOptions,
  DeliveryOptions: _messaging2.default.DeliveryOptions,
  SubscriptionOptions: _messaging2.default.SubscriptionOptions,
  PublishOptionsHeaders: _messaging2.default.PublishOptionsHeaders,

  LocalCache: _localCache2.default
  ///--------BACKWARD COMPATIBILITY-------///
  ///-------------------------------------///
};

if (root) {
  root.Backendless = Backendless;
}

exports.default = Backendless;


module.exports = Backendless;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _desc, _value, _obj, _init;

var _decorators = __webpack_require__(4);

var _collector = __webpack_require__(15);

var _collector2 = _interopRequireDefault(_collector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Logging = (_dec = (0, _decorators.deprecated)('Backendless.Logging', 'Backendless.Logging.flush'), (_obj = {

  getLogger: _collector2.default.getLogger,

  flushSync: _collector2.default.flushSync,
  flush: _collector2.default.flush,

  setLogReportingPolicy: _collector2.default.setLogReportingPolicy
}, (_applyDecoratedDescriptor(_obj, 'flushSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'flushSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj)), _obj));

exports.default = Logging;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deprecated = exports.deprecated = function deprecated(namespace, alternative) {
  return function (target, prop, descriptor) {
    var value = target[prop];

    descriptor.initializer = function () {
      return function () {
        var mainMessage = '"' + namespace + '.' + prop + '" is deprecated and will be removed in the nearest release.';
        var helpMessage = 'Please use "' + alternative + '" instead of.';

        // eslint-disable-next-line no-console
        console.warn(mainMessage + ' ' + (alternative ? helpMessage : ''));

        return value.apply(this, arguments);
      };
    };

    return descriptor;
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = undefined;

var _backendlessRequest = __webpack_require__(25);

var _backendlessRequest2 = _interopRequireDefault(_backendlessRequest);

var _localVars = __webpack_require__(8);

var _localVars2 = _interopRequireDefault(_localVars);

var _currentUser = __webpack_require__(5);

var _requestForBrowser = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendRequest = exports.sendRequest = function sendRequest(config) {
  //--TODO remove this checking when we get rid of all sync methods
  if (config.isAsync === false || !config.asyncHandler) {
    if (_localVars2.default.XMLHttpRequest) {
      // eslint-disable-next-line no-console
      console.warn('The sync methods of the Backendless API are deprecated and will be removed in the nearest future.\n' + 'Please, use async methods instead.');

      return (0, _requestForBrowser.ajaxForBrowser)(config);
    }

    throw new Error('Using the sync methods of the Backendless API in Node.js are disallowed.\n' + 'Use the async methods instead.');
  }
  //---------------------------------------------------------------

  _backendlessRequest2.default.XMLHttpRequest = _localVars2.default.XMLHttpRequest;

  var url = config.url;
  var method = (config.method || 'GET').toLowerCase();
  var headers = config.headers || {};
  var onError = config.asyncHandler.fault || function (error) {
    throw error;
  };
  var onSuccess = config.asyncHandler.success || function (result) {
    return result;
  };

  var userToken = (0, _currentUser.getCurrentUserToken)();

  if (userToken) {
    headers['user-token'] = userToken;
  }

  return _backendlessRequest2.default[method](url, config.data).set(headers).query(config.query).form(config.form).then(onSuccess, onError);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _persmission = __webpack_require__(50);

var _persmission2 = _interopRequireDefault(_persmission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataPermissions = {
  FIND: new _persmission2.default('FIND'),
  REMOVE: new _persmission2.default('REMOVE'),
  UPDATE: new _persmission2.default('UPDATE')
};

exports.default = DataPermissions;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _sendRequest = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PermissionTypes = {
  GRANT: 'GRANT',
  DENY: 'DENY'
};

function grantUser(userId, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, object, { userId: userId }, asyncHandler);
}

function grantRole(roleName, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, object, { roleName: roleName }, asyncHandler);
}

function grant(object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, object, { userId: '*' }, asyncHandler);
}

function denyUser(userId, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, object, { userId: userId }, asyncHandler);
}

function denyRole(roleName, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, object, { roleName: roleName }, asyncHandler);
}

function deny(object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, object, { userId: '*' }, asyncHandler);
}

var DataPermission = function DataPermission(permission) {
  _classCallCheck(this, DataPermission);

  this.permission = permission;
};

//TODO: will be removed when remove sync methods


var namespaceLabel = 'Backendless.Data.Permissions.{FIND|REMOVE|UPDATE}';

_extends(DataPermission.prototype, (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantUser'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantRole'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grant'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyUser'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyRole'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.deny'), (_obj = {
  grantUserSync: _utils2.default.synchronized(grantUser),
  grantUser: _utils2.default.promisified(grantUser),

  grantRoleSync: _utils2.default.synchronized(grantRole),
  grantRole: _utils2.default.promisified(grantRole),

  grantSync: _utils2.default.synchronized(grant),
  grant: _utils2.default.promisified(grant),

  denyUserSync: _utils2.default.synchronized(denyUser),
  denyUser: _utils2.default.promisified(denyUser),

  denyRoleSync: _utils2.default.synchronized(denyRole),
  denyRole: _utils2.default.promisified(denyRole),

  denySync: _utils2.default.synchronized(deny),
  deny: _utils2.default.promisified(deny)

}, (_applyDecoratedDescriptor(_obj, 'grantUserSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'grantUserSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'grantRoleSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'grantRoleSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'grantSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'grantSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'denyUserSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'denyUserSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'denyRoleSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'denyRoleSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'denySync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'denySync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj)), _obj)));

exports.default = DataPermission;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = sendRequest;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendRequest(permission, type, object, options, asyncHandler) {
  var userId = options.userId,
      roleName = options.roleName;


  if (!object.___class || !object.objectId) {
    throw new Error('"dataObject.___class" and "dataObject.objectId" need to be specified');
  }

  var data = {
    permission: permission
  };

  if (userId) {
    data.user = userId;
  } else if (roleName) {
    data.role = roleName;
  }

  return _request2.default.put({
    url: _urls2.default.dataObjectPermission(object.___class, type, object.objectId),
    data: data,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10, _init11, _init12, _init13, _init14;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _utils3 = __webpack_require__(26);

var _relations = __webpack_require__(53);

var _bulk = __webpack_require__(54);

var _find = __webpack_require__(55);

var _save = __webpack_require__(56);

var _remove = __webpack_require__(57);

var _count = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO: will be removed when remove sync methods
var namespaceLabel = 'Backendless.Data.of(<ClassName>)';

var DataStore = function DataStore(model) {
  _classCallCheck(this, DataStore);

  if (_utils2.default.isString(model)) {
    this.className = model;
    this.model = (0, _utils3.resolveModelClassFromString)(this.className);
  } else {
    this.className = _utils2.default.getClassName(model);
    this.model = model;
  }

  if (!this.className) {
    throw new Error('Class name should be specified');
  }
};

_extends(DataStore.prototype, (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.save'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.remove'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.find'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.findById'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.loadRelations'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.findFirst'), _dec7 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.findLast'), _dec8 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getObjectCount'), _dec9 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.setRelation'), _dec10 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.addRelation'), _dec11 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.deleteRelation'), _dec12 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.bulkCreate'), _dec13 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.bulkUpdate'), _dec14 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.bulkDelete'), (_obj = {
  saveSync: _utils2.default.synchronized(_save.save),
  save: _utils2.default.promisified(_save.save),

  removeSync: _utils2.default.synchronized(_remove.remove),
  remove: _utils2.default.promisified(_remove.remove),

  findSync: _utils2.default.synchronized(_find.find),
  find: _utils2.default.promisified(_find.find),

  findByIdSync: _utils2.default.synchronized(_find.findById),
  findById: _utils2.default.promisified(_find.findById),

  loadRelationsSync: _utils2.default.synchronized(_relations.loadRelations),
  loadRelations: _utils2.default.promisified(_relations.loadRelations),

  findFirstSync: _utils2.default.synchronized(_find.findFirst),
  findFirst: _utils2.default.promisified(_find.findFirst),

  findLastSync: _utils2.default.synchronized(_find.findLast),
  findLast: _utils2.default.promisified(_find.findLast),

  getObjectCountSync: _utils2.default.synchronized(_count.getObjectCount),
  getObjectCount: _utils2.default.promisified(_count.getObjectCount),

  setRelationSync: _utils2.default.synchronized(_relations.setRelation),
  setRelation: _utils2.default.promisified(_relations.setRelation),

  addRelationSync: _utils2.default.synchronized(_relations.addRelation),
  addRelation: _utils2.default.promisified(_relations.addRelation),

  deleteRelationSync: _utils2.default.synchronized(_relations.deleteRelation),
  deleteRelation: _utils2.default.promisified(_relations.deleteRelation),

  bulkCreateSync: _utils2.default.synchronized(_bulk.bulkCreate),
  bulkCreate: _utils2.default.promisified(_bulk.bulkCreate),

  bulkUpdateSync: _utils2.default.synchronized(_bulk.bulkUpdate),
  bulkUpdate: _utils2.default.promisified(_bulk.bulkUpdate),

  bulkDeleteSync: _utils2.default.synchronized(_bulk.bulkDelete),
  bulkDelete: _utils2.default.promisified(_bulk.bulkDelete)

}, (_applyDecoratedDescriptor(_obj, 'saveSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'saveSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'removeSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'findSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findByIdSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'findByIdSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loadRelationsSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'loadRelationsSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findFirstSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'findFirstSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findLastSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'findLastSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getObjectCountSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'getObjectCountSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'setRelationSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'setRelationSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addRelationSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'addRelationSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'deleteRelationSync', [_dec11], (_init11 = Object.getOwnPropertyDescriptor(_obj, 'deleteRelationSync'), _init11 = _init11 ? _init11.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init11;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'bulkCreateSync', [_dec12], (_init12 = Object.getOwnPropertyDescriptor(_obj, 'bulkCreateSync'), _init12 = _init12 ? _init12.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init12;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'bulkUpdateSync', [_dec13], (_init13 = Object.getOwnPropertyDescriptor(_obj, 'bulkUpdateSync'), _init13 = _init13 ? _init13.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init13;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'bulkDeleteSync', [_dec14], (_init14 = Object.getOwnPropertyDescriptor(_obj, 'bulkDeleteSync'), _init14 = _init14 ? _init14.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init14;
  }
}), _obj)), _obj)));

exports.default = DataStore;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRelations = loadRelations;
exports.setRelation = setRelation;
exports.addRelation = addRelation;
exports.deleteRelation = deleteRelation;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _loadRelationsQueryBuilder = __webpack_require__(27);

var _loadRelationsQueryBuilder2 = _interopRequireDefault(_loadRelationsQueryBuilder);

var _extractQueryOptions = __webpack_require__(30);

var _parse = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function collectRelationObject(parent, columnName, children) {
  var relation = {
    columnName: columnName
  };

  if (_utils2.default.isString(parent)) {
    relation.parentId = parent;
  } else if (_utils2.default.isObject(parent)) {
    relation.parentId = parent.objectId;
  }

  if (_utils2.default.isString(children)) {
    relation.whereClause = children;
  } else if (_utils2.default.isArray(children)) {
    relation.childrenIds = children.map(function (child) {
      return _utils2.default.isObject(child) ? child.objectId : child;
    });
  }

  return relation;
}

function manageRelation(method, className, parent, columnName, children, asyncHandler) {
  var relation = collectRelationObject(parent, columnName, children);
  var responder = asyncHandler;

  if (!relation.parentId) {
    throw new Error('Invalid value for the "parent" argument. ' + 'The argument is required and must contain only string or object values.');
  }

  if (!relation.columnName) {
    throw new Error('Invalid value for the "columnName" argument. ' + 'The argument is required and must contain only string values.');
  }

  if (!relation.whereClause && !relation.childrenIds) {
    throw new Error('Invalid value for the third argument. ' + 'The argument is required and must contain string values if it sets whereClause ' + 'or array if it sets childObjects.');
  }

  return _request2.default.send({
    method: method,
    url: buildRelationUrl(className, relation),
    isAsync: !!responder,
    asyncHandler: responder,
    data: relation.childrenIds
  });
}

function buildRelationUrl(className, relation) {
  var url = _urls2.default.dataTableObjectRelation(className, relation.parentId, relation.columnName);

  if (relation.whereClause) {
    url += '?' + _utils2.default.toQueryParams({ whereClause: relation.whereClause });
  }

  return url;
}

function loadRelations(parentObjectId, queryBuilder, asyncHandler) {
  if (!parentObjectId || !_utils2.default.isString(parentObjectId)) {
    throw new Error('The parentObjectId is required argument and must be a nonempty string');
  }

  if (!(queryBuilder instanceof _loadRelationsQueryBuilder2.default)) {
    throw new Error('Invalid queryBuilder object.' + 'The queryBuilder is required and must be instance of the Backendless.LoadRelationsQueryBuilder');
  }

  var dataQuery = queryBuilder.build();

  var relationName = dataQuery.options && dataQuery.options.relationName;

  if (!relationName || !_utils2.default.isString(relationName)) {
    throw new Error('The options relationName is required and must contain string value');
  }

  var options = void 0;
  var query = [];

  if (dataQuery.options) {
    options = (0, _extractQueryOptions.extractQueryOptions)(dataQuery.options);
  }

  if (options) {
    query.push(options);
  }

  if (dataQuery.condition) {
    query.push('where=' + encodeURIComponent(dataQuery.condition));
  }

  if (dataQuery.havingClause) {
    query.push('having=' + encodeURIComponent(dataQuery.havingClause));
  }

  var url = _urls2.default.dataTableObjectRelation(this.className, parentObjectId, relationName);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return (0, _parse.parseFindResponse)(resp, dataQuery.relationModel);
    });
  }

  if (query.length) {
    url += '?' + query.join('&');
  }

  var result = _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return (0, _parse.parseFindResponse)(result, dataQuery.relationModel);
}

function setRelation(parent, columnName, children, asyncHandler) {
  return manageRelation('POST', this.className, parent, columnName, children, asyncHandler);
}

function addRelation(parent, columnName, children, asyncHandler) {
  return manageRelation('PUT', this.className, parent, columnName, children, asyncHandler);
}

function deleteRelation(parent, columnName, children, asyncHandler) {
  return manageRelation('DELETE', this.className, parent, columnName, children, asyncHandler);
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkCreate = bulkCreate;
exports.bulkUpdate = bulkUpdate;
exports.bulkDelete = bulkDelete;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bulkCreate(objectsArray, asyncHandler) {
  var MSG_ERROR = 'Invalid value for the "objectsArray" argument. ' + 'The argument must contain only array of objects.';

  if (!_utils2.default.isArray(objectsArray)) {
    throw new Error(MSG_ERROR);
  }

  objectsArray.forEach(function (obj) {
    if (!_utils2.default.isObject(obj)) {
      throw new Error(MSG_ERROR);
    }
  });

  return _request2.default.post({
    url: _urls2.default.dataBulkTable(this.className),
    data: objectsArray,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

function bulkUpdate(templateObject, where, asyncHandler) {
  if (!templateObject || !_utils2.default.isObject(templateObject)) {
    throw new Error('Invalid templateObject argument. The first argument must contain object');
  }

  if (!where || !_utils2.default.isString(where)) {
    throw new Error('Invalid whereClause argument. The first argument must contain "whereClause" string.');
  }

  return _request2.default.put({
    url: _urls2.default.dataBulkTable(this.className),
    query: { where: where },
    data: templateObject,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

function bulkDelete(objectsArray, asyncHandler) {
  var MSG_ERROR = 'Invalid bulkDelete argument. ' + 'The first argument must contain array of objects or array of id or "whereClause" string';

  if (!_utils2.default.isArray(objectsArray) && !_utils2.default.isString(objectsArray)) {
    throw new Error(MSG_ERROR);
  }

  var where = void 0;

  if (_utils2.default.isString(objectsArray)) {
    where = objectsArray;
  } else if (_utils2.default.isArray(objectsArray)) {

    var objects = objectsArray.map(function (obj) {
      if (!_utils2.default.isObject(obj) && !_utils2.default.isString(obj)) {
        throw new Error(MSG_ERROR);
      }

      return '\'' + (_utils2.default.isString(obj) ? obj : obj.objectId) + '\'';
    });

    where = 'objectId in (' + objects.join(',') + ')';
  }

  return _request2.default.delete({
    url: _urls2.default.dataBulkTable(this.className),
    query: { where: where },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUtil = findUtil;
exports.find = find;
exports.findById = findById;
exports.findFirst = findFirst;
exports.findLast = findLast;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _queryBuilder = __webpack_require__(17);

var _queryBuilder2 = _interopRequireDefault(_queryBuilder);

var _parse = __webpack_require__(11);

var _extractQueryOptions = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function findUtil(className, Model, dataQuery, asyncHandler) {
  dataQuery = dataQuery || {};

  var query = [];

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return (0, _parse.parseFindResponse)(resp, Model);
    });
  }

  if (dataQuery.options) {
    query.push((0, _extractQueryOptions.extractQueryOptions)(dataQuery.options));
  }

  if (dataQuery.condition) {
    query.push('where=' + encodeURIComponent(dataQuery.condition));
  }

  if (dataQuery.havingClause) {
    query.push('having=' + encodeURIComponent(dataQuery.havingClause));
  }

  if (dataQuery.properties && dataQuery.properties.length) {
    query.push('props=' + _utils2.default.encodeArrayToUriComponent(dataQuery.properties));
  }

  var url = _urls2.default.dataTable(className);

  if (dataQuery.url) {
    url += '/' + dataQuery.url;
  }

  if (query.length) {
    url += '?' + query.join('&');
  }

  var result = _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler,
    cachePolicy: dataQuery.cachePolicy
  });

  if (asyncHandler) {
    return result;
  }

  return (0, _parse.parseFindResponse)(result, Model);
}

function find(queryBuilder, asyncHandler) {
  //TODO: add an ability to get object as QueryBuilder

  if (queryBuilder instanceof _async2.default) {
    asyncHandler = queryBuilder;
    queryBuilder = undefined;
  }

  if (queryBuilder && !(queryBuilder instanceof _queryBuilder2.default)) {
    throw new Error('The first argument should be instance of Backendless.DataQueryBuilder');
  }

  var dataQuery = queryBuilder ? queryBuilder.build() : {};

  return findUtil(this.className, this.model, dataQuery, asyncHandler);
}

function findById() {
  var _this = this;

  var argsObj = void 0;
  var responder = _utils2.default.extractResponder(arguments);

  if (_utils2.default.isString(arguments[0])) {
    argsObj = !(arguments[1] instanceof _async2.default) ? arguments[1] || {} : {};
    argsObj.url = arguments[0];

    if (!argsObj.url) {
      throw new Error('missing argument "object ID" for method findById()');
    }

    return findUtil(this.className, this.model, argsObj, responder);
  } else if (_utils2.default.isObject(arguments[0])) {
    argsObj = arguments[0];
    var url = _urls2.default.dataTable(this.className);
    var isAsync = !!responder;
    var send = '/pk?';

    for (var key in argsObj) {
      send += key + '=' + argsObj[key] + '&';
    }

    if (responder) {
      responder = _utils2.default.wrapAsync(responder, function (resp) {
        return (0, _parse.parseFindResponse)(resp, _this.model);
      });
    }

    var result = void 0;

    if (_utils2.default.getClassName(arguments[0]) === 'Object') {
      result = _request2.default.get({
        url: url + send.replace(/&$/, ''),
        isAsync: isAsync,
        asyncHandler: responder
      });
    } else {
      result = _request2.default.put({
        url: url,
        data: argsObj,
        isAsync: isAsync,
        asyncHandler: responder
      });
    }

    return isAsync ? result : (0, _parse.parseFindResponse)(result, this.model);
  }
}

function findFirst(dataQuery, asyncHandler) {
  if (dataQuery instanceof _async2.default) {
    asyncHandler = dataQuery;
    dataQuery = {};
  }

  dataQuery.url = 'first';

  return findUtil(this.className, this.model, dataQuery, asyncHandler);
}

function findLast(dataQuery, asyncHandler) {
  if (dataQuery instanceof _async2.default) {
    asyncHandler = dataQuery;
    dataQuery = {};
  }

  dataQuery.url = 'last';

  return findUtil(this.className, this.model, dataQuery, asyncHandler);
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.replCircDeps = replCircDeps;
exports.save = save;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _parse = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var genID = function genID() {
  //TODO: refactor me
  var b = '';

  for (var a = b; a++ < 36; b += a * 51 && 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-') {}

  return b;
};

function replCircDeps(object) {
  var objMap = [object];
  var pos = void 0;

  var _replCircDepsHelper = function _replCircDepsHelper(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && _typeof(obj[prop]) === 'object' && obj[prop] != null) {
        if ((pos = objMap.indexOf(obj[prop])) !== -1) {
          objMap[pos]['__subID'] = objMap[pos]['__subID'] || genID();
          obj[prop] = { '__originSubID': objMap[pos]['__subID'] };
        } else if (_utils2.default.isDate(obj[prop])) {
          obj[prop] = obj[prop].getTime();
        } else {
          objMap.push(obj[prop]);
          _replCircDepsHelper(obj[prop]);
        }
      }
    }
  };

  _replCircDepsHelper(object);
}

function save(obj, asyncHandler) {
  var _this = this;

  replCircDeps(obj);

  var objRef = obj;

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return (0, _parse.parseFindResponse)(resp, _this.model);
    });
  }

  var result = _request2.default.put({
    url: _urls2.default.dataTable(this.className),
    data: obj,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return _utils2.default.deepExtend(objRef, (0, _parse.parseFindResponse)(result, this.model));
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _parse = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function remove(object, asyncHandler) {
  if (!_utils2.default.isObject(object) && !_utils2.default.isString(object)) {
    throw new Error('Invalid value for the "value" argument. The argument must contain only string or object values');
  }

  var result = _request2.default.delete({
    url: _urls2.default.dataTableObject(this.className, object.objectId || object),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return (0, _parse.parseFindResponse)(result, this.model);
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectCount = getObjectCount;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _queryBuilder = __webpack_require__(17);

var _queryBuilder2 = _interopRequireDefault(_queryBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getObjectCount(condition, asyncHandler) {
  if (condition instanceof _async2.default) {
    asyncHandler = condition;
    condition = undefined;
  }

  if (condition instanceof _queryBuilder2.default) {
    condition = condition.build().condition || undefined;
  }

  return _request2.default.get({
    url: _urls2.default.dataTableCount(this.className),
    query: { where: condition },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describe = describe;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function describe(className, asyncHandler) {
  className = _utils2.default.isString(className) ? className : _utils2.default.getClassName(className);

  return _request2.default.get({
    url: _urls2.default.dataTableProps(className),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxForBrowser = ajaxForBrowser;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _localVars = __webpack_require__(8);

var _localVars2 = _interopRequireDefault(_localVars);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseResponse = function parseResponse(xhr) {
  var result = true;

  if (xhr.responseText) {
    result = _utils2.default.tryParseJSON(xhr.responseText);
  }

  return result;
};

var badResponse = function badResponse(xhr) {
  var result = {};

  try {
    result = JSON.parse(xhr.responseText);
  } catch (e) {
    result.message = xhr.responseText;
  }

  result.statusCode = xhr.status;
  result.message = result.message || 'unknown error occurred';

  return result;
};

var sendRequest = function sendRequest(config) {
  var xhr = new _localVars2.default.XMLHttpRequest();
  var query = _utils2.default.toQueryParams(config.query);
  var url = config.url + (query ? '?' + query : '');

  xhr.open(config.method, url, false);

  var userToken = (0, _currentUser.getCurrentUserToken)();

  if (userToken) {
    xhr.setRequestHeader('user-token', userToken);
  }

  if (config.form) {
    var formData = new FormData();

    for (var key in config.form) {
      var value = config.form[key];

      if (value) {
        formData.append(key, value);
      }
    }

    config.data = formData;
  } else {
    var contentType = config.data ? 'application/json' : 'application/x-www-form-urlencoded';

    if (contentType === 'application/json' && config.data && typeof config.data !== 'string') {
      config.data = JSON.stringify(config.data);
    }

    xhr.setRequestHeader('Content-Type', contentType);
  }

  xhr.send(config.data);

  if (xhr.status >= 200 && xhr.status < 300) {
    return parseResponse(xhr);
  }

  throw badResponse(xhr);
};

function ajaxForBrowser(config) {
  config.method = config.method || 'GET';
  config.isAsync = typeof config.isAsync === 'boolean' ? config.isAsync : false;

  try {
    return sendRequest(config);
  } catch (error) {
    throw error;
  }
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collector = __webpack_require__(15);

var _collector2 = _interopRequireDefault(_collector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger(name) {
    _classCallCheck(this, Logger);

    this.name = name;
  }

  _createClass(Logger, [{
    key: 'debug',
    value: function debug(message) {
      return _collector2.default.push(this.name, 'DEBUG', message);
    }
  }, {
    key: 'info',
    value: function info(message) {
      return _collector2.default.push(this.name, 'INFO', message);
    }
  }, {
    key: 'warn',
    value: function warn(message, exception) {
      return _collector2.default.push(this.name, 'WARN', message, exception);
    }
  }, {
    key: 'error',
    value: function error(message, exception) {
      return _collector2.default.push(this.name, 'ERROR', message, exception);
    }
  }, {
    key: 'fatal',
    value: function fatal(message, exception) {
      return _collector2.default.push(this.name, 'FATAL', message, exception);
    }
  }, {
    key: 'trace',
    value: function trace(message) {
      return _collector2.default.push(this.name, 'TRACE', message);
    }
  }]);

  return Logger;
}();

exports.default = Logger;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _counter = __webpack_require__(63);

var _counter2 = _interopRequireDefault(_counter);

var _methods = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Counters = (_dec = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.incrementAndGet'), _dec2 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.getAndIncrement'), _dec3 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.decrementAndGet'), _dec4 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.getAndDecrement'), _dec5 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.reset'), _dec6 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.get'), _dec7 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.addAndGet'), _dec8 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.getAndAdd'), _dec9 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.compareAndSet'), (_obj = {
  of: function of(name) {
    return new _counter2.default(name);
  },

  incrementAndGetSync: _utils2.default.synchronized(_methods.incrementAndGet),
  incrementAndGet: _utils2.default.promisified(_methods.incrementAndGet),

  getAndIncrementSync: _utils2.default.synchronized(_methods.getAndIncrement),
  getAndIncrement: _utils2.default.promisified(_methods.getAndIncrement),

  decrementAndGetSync: _utils2.default.synchronized(_methods.decrementAndGet),
  decrementAndGet: _utils2.default.promisified(_methods.decrementAndGet),

  getAndDecrementSync: _utils2.default.synchronized(_methods.getAndDecrement),
  getAndDecrement: _utils2.default.promisified(_methods.getAndDecrement),

  resetSync: _utils2.default.synchronized(_methods.reset),
  reset: _utils2.default.promisified(_methods.reset),

  getSync: _utils2.default.synchronized(_methods.get),
  get: _utils2.default.promisified(_methods.get),

  addAndGetSync: _utils2.default.synchronized(_methods.addAndGet),
  addAndGet: _utils2.default.promisified(_methods.addAndGet),

  getAndAddSync: _utils2.default.synchronized(_methods.getAndAdd),
  getAndAdd: _utils2.default.promisified(_methods.getAndAdd),

  compareAndSetSync: _utils2.default.synchronized(_methods.compareAndSet),
  compareAndSet: _utils2.default.promisified(_methods.compareAndSet)
}, (_applyDecoratedDescriptor(_obj, 'incrementAndGetSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'incrementAndGetSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndIncrementSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getAndIncrementSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'decrementAndGetSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'decrementAndGetSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndDecrementSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'getAndDecrementSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'resetSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'resetSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'getSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addAndGetSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'addAndGetSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndAddSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'getAndAddSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'compareAndSetSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'compareAndSetSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj)), _obj));

exports.default = Counters;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _methods = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Counter = function Counter(name) {
  _classCallCheck(this, Counter);

  if (!name || !_utils2.default.isString(name)) {
    throw new Error('Counter Name must be non empty String');
  }

  this.name = name;
};

exports.default = Counter;


var withCounterName = function withCounterName(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return method.apply(undefined, [this.name].concat(args));
  };
};

//TODO: will be removed when remove sync methods
var namespaceLabel = 'Backendless.Counter.of(<CounterName>)';

_extends(Counter.prototype, (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.incrementAndGet'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getAndIncrement'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.decrementAndGet'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getAndDecrement'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.reset'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.get'), _dec7 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.addAndGet'), _dec8 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getAndAdd'), _dec9 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.compareAndSet'), (_obj = {
  incrementAndGetSync: _utils2.default.synchronized(withCounterName(_methods.incrementAndGet)),
  incrementAndGet: _utils2.default.promisified(withCounterName(_methods.incrementAndGet)),

  getAndIncrementSync: _utils2.default.synchronized(withCounterName(_methods.getAndIncrement)),
  getAndIncrement: _utils2.default.promisified(withCounterName(_methods.getAndIncrement)),

  decrementAndGetSync: _utils2.default.synchronized(withCounterName(_methods.decrementAndGet)),
  decrementAndGet: _utils2.default.promisified(withCounterName(_methods.decrementAndGet)),

  getAndDecrementSync: _utils2.default.synchronized(withCounterName(_methods.getAndDecrement)),
  getAndDecrement: _utils2.default.promisified(withCounterName(_methods.getAndDecrement)),

  resetSync: _utils2.default.synchronized(withCounterName(_methods.reset)),
  reset: _utils2.default.promisified(withCounterName(_methods.reset)),

  getSync: _utils2.default.synchronized(withCounterName(_methods.get)),
  get: _utils2.default.promisified(withCounterName(_methods.get)),

  addAndGetSync: _utils2.default.synchronized(withCounterName(_methods.addAndGet)),
  addAndGet: _utils2.default.promisified(withCounterName(_methods.addAndGet)),

  getAndAddSync: _utils2.default.synchronized(withCounterName(_methods.getAndAdd)),
  getAndAdd: _utils2.default.promisified(withCounterName(_methods.getAndAdd)),

  compareAndSetSync: _utils2.default.synchronized(withCounterName(_methods.compareAndSet)),
  compareAndSet: _utils2.default.promisified(withCounterName(_methods.compareAndSet))

}, (_applyDecoratedDescriptor(_obj, 'incrementAndGetSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'incrementAndGetSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndIncrementSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getAndIncrementSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'decrementAndGetSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'decrementAndGetSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndDecrementSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'getAndDecrementSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'resetSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'resetSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'getSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addAndGetSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'addAndGetSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndAddSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'getAndAddSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'compareAndSetSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'compareAndSetSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj)), _obj)));

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementAndGet = incrementAndGet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function incrementAndGet(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterIncrementAndGet(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementAndGet = decrementAndGet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decrementAndGet(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterDecrementAndGet(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.get({
    url: _urls2.default.counter(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndIncrement = getAndIncrement;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAndIncrement(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterGetAndIncrement(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndDecrement = getAndDecrement;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAndDecrement(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterGetAndDecrement(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndAdd = getAndAdd;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAndAdd(counterName, value, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (!_utils2.default.isNumber(value)) {
    throw new Error('Counter "value" must be Number');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterGetAndAdd(counterName),
    query: { value: value },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndGet = addAndGet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addAndGet(counterName, value, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (!_utils2.default.isNumber(value)) {
    throw new Error('Counter Value must number');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterAddAndGet(counterName),
    query: { value: value },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareAndSet = compareAndSet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compareAndSet(counterName, expected, updated, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (!_utils2.default.isNumber(expected)) {
    throw new Error('Counter "expected" value must be Number');
  }

  if (!_utils2.default.isNumber(updated)) {
    throw new Error('Counter "updated" value must be Number');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterCompareAndSet(counterName),
    query: { expected: expected, updatedvalue: updated },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = reset;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reset(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterReset(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _put = __webpack_require__(74);

var _get = __webpack_require__(75);

var _remove = __webpack_require__(76);

var _contains = __webpack_require__(77);

var _expireIn = __webpack_require__(78);

var _expireAt = __webpack_require__(79);

var _parsers = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Cache = (_dec = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.put'), _dec2 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.get'), _dec3 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.remove'), _dec4 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.contains'), _dec5 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.expireIn'), _dec6 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.expireAt'), (_obj = {
  putSync: _utils2.default.synchronized(_put.put),
  put: _utils2.default.promisified(_put.put),

  getSync: _utils2.default.synchronized(_get.get),
  get: _utils2.default.promisified(_get.get),

  removeSync: _utils2.default.synchronized(_remove.remove),
  remove: _utils2.default.promisified(_remove.remove),

  containsSync: _utils2.default.synchronized(_contains.contains),
  contains: _utils2.default.promisified(_contains.contains),

  expireInSync: _utils2.default.synchronized(_expireIn.expireIn),
  expireIn: _utils2.default.promisified(_expireIn.expireIn),

  expireAtSync: _utils2.default.synchronized(_expireAt.expireAt),
  expireAt: _utils2.default.promisified(_expireAt.expireAt),

  //TODO: do we need it?
  setObjectFactory: function setObjectFactory(objectName, factoryMethod) {
    _parsers.Parsers.set(objectName, factoryMethod);
  }
}, (_applyDecoratedDescriptor(_obj, 'putSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'putSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'removeSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'containsSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'containsSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'expireInSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'expireInSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'expireAtSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'expireAtSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj)), _obj));

exports.default = Cache;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = put;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function put(key, value, timeToLive, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (timeToLive instanceof _async2.default) {
    asyncHandler = timeToLive;
    timeToLive = undefined;
  }

  if (timeToLive && !_utils2.default.isNumber(timeToLive)) {
    throw new Error('Cache timeToLive must be Number');
  }

  if (_utils2.default.isObject(value) && value.constructor !== Object) {
    value.___class = value.___class || _utils2.default.getClassName(value);
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.put({
    url: _urls2.default.cacheItem(key) + (timeToLive ? '?timeout=' + timeToLive : ''),
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(value),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _parsers = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseResult(result) {
  var className = result && result.___class;

  if (className) {
    var Class = _parsers.Parsers.get(className);

    if (Class) {
      result = new Class(result);
    }
  }

  return result;
}

function get(key, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, parseResult);
  }

  var result = _request2.default.get({
    url: _urls2.default.cacheItem(key),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return parseResult(result);
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function remove(key, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.delete({
    url: _urls2.default.cacheItem(key),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contains = contains;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(key, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.get({
    url: _urls2.default.cacheItemCheck(key),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expireIn = expireIn;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expireIn(key, seconds, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (!seconds) {
    throw new Error('Cache Expiration must be number of seconds');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.put({
    url: _urls2.default.cacheItemExpireIn(key) + '?timeout=' + seconds,
    data: {},
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expireAt = expireAt;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expireAt(key, timestamp, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (!timestamp) {
    throw new Error('Cache Expiration must be timestamp or instance of Date');
  }

  timestamp = _utils2.default.isDate(timestamp) ? timestamp.getTime() : timestamp;

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.put({
    url: _urls2.default.cacheItemExpireAt(key) + '?timestamp=' + timestamp,
    data: {},
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _desc, _value, _obj, _init, _init2, _init3;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _validatePlayPurchase = __webpack_require__(81);

var _cancelPlaySubscription = __webpack_require__(82);

var _getPlaySubscriptionStatus = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Commerce = (_dec = (0, _decorators.deprecated)('Backendless.Commerce', 'Backendless.Commerce.validatePlayPurchase'), _dec2 = (0, _decorators.deprecated)('Backendless.Commerce', 'Backendless.Commerce.cancelPlaySubscription'), _dec3 = (0, _decorators.deprecated)('Backendless.Commerce', 'Backendless.Commerce.getPlaySubscriptionStatus'), (_obj = {
  validatePlayPurchaseSync: _utils2.default.synchronized(_validatePlayPurchase.validatePlayPurchase),
  validatePlayPurchase: _utils2.default.promisified(_validatePlayPurchase.validatePlayPurchase),

  cancelPlaySubscriptionSync: _utils2.default.synchronized(_cancelPlaySubscription.cancelPlaySubscription),
  cancelPlaySubscription: _utils2.default.promisified(_cancelPlaySubscription.cancelPlaySubscription),

  getPlaySubscriptionStatusSync: _utils2.default.synchronized(_getPlaySubscriptionStatus.getPlaySubscriptionStatus),
  getPlaySubscriptionStatus: _utils2.default.promisified(_getPlaySubscriptionStatus.getPlaySubscriptionStatus)

}, (_applyDecoratedDescriptor(_obj, 'validatePlayPurchaseSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'validatePlayPurchaseSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'cancelPlaySubscriptionSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'cancelPlaySubscriptionSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getPlaySubscriptionStatusSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'getPlaySubscriptionStatusSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj)), _obj));

exports.default = Commerce;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePlayPurchase = validatePlayPurchase;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _validateStringArgument = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validatePlayPurchase(packageName, productId, token, asyncHandler) {
  (0, _validateStringArgument.validateStringArgument)('Package Name', packageName);
  (0, _validateStringArgument.validateStringArgument)('Product Id', productId);
  (0, _validateStringArgument.validateStringArgument)('Token', token);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.get({
    url: _urls2.default.commerceValidate(packageName, productId, token),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelPlaySubscription = cancelPlaySubscription;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _validateStringArgument = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelPlaySubscription(packageName, subscriptionId, token, asyncHandler) {
  (0, _validateStringArgument.validateStringArgument)('Package Name', packageName);
  (0, _validateStringArgument.validateStringArgument)('Subscription Id', subscriptionId);
  (0, _validateStringArgument.validateStringArgument)('Token', token);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.post({
    url: _urls2.default.commerceSubCancel(packageName, subscriptionId, token),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlaySubscriptionStatus = getPlaySubscriptionStatus;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _validateStringArgument = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPlaySubscriptionStatus(packageName, subscriptionId, token, asyncHandler) {
  (0, _validateStringArgument.validateStringArgument)('Package Name', packageName);
  (0, _validateStringArgument.validateStringArgument)('Subscription Id', subscriptionId);
  (0, _validateStringArgument.validateStringArgument)('Token', token);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.get({
    url: _urls2.default.commerceSubStatus(packageName, subscriptionId, token),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10, _init11, _init12, _init13, _init14, _init15;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _register = __webpack_require__(85);

var _roles = __webpack_require__(86);

var _login = __webpack_require__(87);

var _logout = __webpack_require__(88);

var _update = __webpack_require__(89);

var _describeClass = __webpack_require__(90);

var _restorePassword = __webpack_require__(91);

var _currentUser = __webpack_require__(5);

var _emailConfirmation = __webpack_require__(92);

var _social = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Users = (_dec = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.register'), _dec2 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.getUserRoles'), _dec3 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.assignRole'), _dec4 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.unassignRole'), _dec5 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.login'), _dec6 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.describeUserClass'), _dec7 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.restorePassword'), _dec8 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.logout'), _dec9 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.getCurrentUser'), _dec10 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.update'), _dec11 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.loginWithFacebook'), _dec12 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.loginWithGooglePlus'), _dec13 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.loginWithTwitter'), _dec14 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.isValidLogin'), _dec15 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.resendEmailConfirmation'), (_obj = {
  registerSync: _utils2.default.synchronized(_register.register),
  register: _utils2.default.promisified(_register.register),

  getUserRolesSync: _utils2.default.synchronized(_roles.getUserRoles),
  getUserRoles: _utils2.default.promisified(_roles.getUserRoles),

  assignRoleSync: _utils2.default.synchronized(_roles.assignRole),
  assignRole: _utils2.default.promisified(_roles.assignRole),

  unassignRoleSync: _utils2.default.synchronized(_roles.unassignRole),
  unassignRole: _utils2.default.promisified(_roles.unassignRole),

  loginSync: _utils2.default.synchronized(_login.login),
  login: _utils2.default.promisified(_login.login),

  describeUserClassSync: _utils2.default.synchronized(_describeClass.describeUserClass),
  describeUserClass: _utils2.default.promisified(_describeClass.describeUserClass),

  restorePasswordSync: _utils2.default.synchronized(_restorePassword.restorePassword),
  restorePassword: _utils2.default.promisified(_restorePassword.restorePassword),

  logoutSync: _utils2.default.synchronized(_logout.logout),
  logout: _utils2.default.promisified(_logout.logout),

  getCurrentUserSync: _utils2.default.synchronized(_currentUser.getCurrentUser),
  getCurrentUser: _utils2.default.promisified(_currentUser.getCurrentUser),

  updateSync: _utils2.default.synchronized(_update.update),
  update: _utils2.default.promisified(_update.update),

  loginWithFacebookSync: _utils2.default.synchronized(_social.loginWithFacebook),
  loginWithFacebook: _utils2.default.promisified(_social.loginWithFacebook),
  loginWithFacebookSdk: _social.loginWithFacebookSdk,

  loginWithGooglePlusSync: _utils2.default.synchronized(_social.loginWithGooglePlus),
  loginWithGooglePlus: _utils2.default.promisified(_social.loginWithGooglePlus),
  loginWithGooglePlusSdk: _social.loginWithGooglePlusSdk,

  loginWithTwitterSync: _utils2.default.synchronized(_social.loginWithTwitter),
  loginWithTwitter: _utils2.default.promisified(_social.loginWithTwitter),

  isValidLoginSync: _utils2.default.synchronized(_currentUser.isValidLogin),
  isValidLogin: _utils2.default.promisified(_currentUser.isValidLogin),

  resendEmailConfirmationSync: _utils2.default.synchronized(_emailConfirmation.resendEmailConfirmation),
  resendEmailConfirmation: _utils2.default.promisified(_emailConfirmation.resendEmailConfirmation),

  loggedInUser: _currentUser.loggedInUser

}, (_applyDecoratedDescriptor(_obj, 'registerSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'registerSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getUserRolesSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getUserRolesSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'assignRoleSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'assignRoleSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'unassignRoleSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'unassignRoleSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'loginSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'describeUserClassSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'describeUserClassSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'restorePasswordSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'restorePasswordSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'logoutSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'logoutSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getCurrentUserSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'getCurrentUserSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'updateSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'updateSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginWithFacebookSync', [_dec11], (_init11 = Object.getOwnPropertyDescriptor(_obj, 'loginWithFacebookSync'), _init11 = _init11 ? _init11.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init11;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginWithGooglePlusSync', [_dec12], (_init12 = Object.getOwnPropertyDescriptor(_obj, 'loginWithGooglePlusSync'), _init12 = _init12 ? _init12.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init12;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginWithTwitterSync', [_dec13], (_init13 = Object.getOwnPropertyDescriptor(_obj, 'loginWithTwitterSync'), _init13 = _init13 ? _init13.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init13;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'isValidLoginSync', [_dec14], (_init14 = Object.getOwnPropertyDescriptor(_obj, 'isValidLoginSync'), _init14 = _init14 ? _init14.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init14;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'resendEmailConfirmationSync', [_dec15], (_init15 = Object.getOwnPropertyDescriptor(_obj, 'resendEmailConfirmationSync'), _init15 = _init15 ? _init15.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init15;
  }
}), _obj)), _obj));

exports.default = Users;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils3 = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register(user /** async */) {
  var responder = _utils2.default.extractResponder(arguments);

  var isAsync = !!responder;

  var result = _request2.default.post({
    url: _urls2.default.userRegister(),
    isAsync: isAsync,
    asyncHandler: responder && (0, _utils3.wrapAsync)(responder),
    data: user
  });

  return isAsync ? result : (0, _utils3.parseResponse)(result);
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unassignRole = exports.assignRole = undefined;
exports.getUserRoles = getUserRoles;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils3 = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function roleHelper(identity, rolename, asyncHandler, operation) {
  if (!identity) {
    throw new Error('User identity can not be empty');
  }

  if (!rolename) {
    throw new Error('Rolename can not be empty');
  }

  var responder = _utils2.default.extractResponder(arguments);

  return _request2.default.post({
    url: _urls2.default.userRoleOperation(operation),
    isAsync: !!responder,
    asyncHandler: responder,
    data: { user: identity, roleName: rolename }
  });
}

function getUserRoles() /** async */{
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  var result = _request2.default.get({
    url: _urls2.default.userRoles(),
    isAsync: isAsync,
    asyncHandler: responder
  });

  return isAsync ? result : (0, _utils3.parseResponse)(result);
}

var assignRole = exports.assignRole = function assignRole(identity, rolename, asyncHandler) {
  return roleHelper(identity, rolename, asyncHandler, 'assignRole');
};

var unassignRole = exports.unassignRole = function unassignRole(identity, rolename, asyncHandler) {
  return roleHelper(identity, rolename, asyncHandler, 'unassignRole');
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localCache = __webpack_require__(9);

var _localCache2 = _interopRequireDefault(_localCache);

var _currentUser = __webpack_require__(5);

var _utils3 = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(login, password, stayLoggedIn) /** async */{
  if (!login) {
    throw new Error('Login can not be empty');
  }

  if (!password) {
    throw new Error('Password can not be empty');
  }

  stayLoggedIn = stayLoggedIn === true;

  _localCache2.default.remove('user-token');
  _localCache2.default.remove('current-user-id');
  _localCache2.default.set('stayLoggedIn', false);

  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  if (responder) {
    responder = (0, _utils3.wrapAsync)(responder, stayLoggedIn);
  }

  var data = {
    login: login,
    password: password
  };

  var result = _request2.default.post({
    url: _urls2.default.userLogin(),
    isAsync: isAsync,
    asyncHandler: responder,
    data: data
  });

  if (!isAsync && result) {
    (0, _currentUser.setLocalCurrentUser)((0, _utils3.parseResponse)(result, stayLoggedIn));

    result = (0, _utils3.getUserFromResponse)((0, _currentUser.getLocalCurrentUser)());
  }

  return result;
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = logout;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localCache = __webpack_require__(9);

var _localCache2 = _interopRequireDefault(_localCache);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logout() /** async */{
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;
  var errorCallback = isAsync ? responder.fault : null;
  var successCallback = isAsync ? responder.success : null;
  var result = {};

  var logoutUser = function logoutUser() {
    _localCache2.default.remove('user-token');
    _localCache2.default.remove('current-user-id');
    _localCache2.default.remove('stayLoggedIn');
    (0, _currentUser.setLocalCurrentUser)(null);
  };

  var onLogoutSuccess = function onLogoutSuccess() {
    logoutUser();
    if (_utils2.default.isFunction(successCallback)) {
      successCallback();
    }
  };

  var onLogoutError = function onLogoutError(e) {
    if (_utils2.default.isObject(e) && [3064, 3091, 3090, 3023].indexOf(e.code) !== -1) {
      logoutUser();
    }
    if (_utils2.default.isFunction(errorCallback)) {
      errorCallback(e);
    }
  };

  if (responder) {
    responder.fault = onLogoutError;
    responder.success = onLogoutSuccess;
  }

  try {
    result = _request2.default.get({
      url: _urls2.default.userLogout(),
      isAsync: isAsync,
      asyncHandler: responder
    });
  } catch (e) {
    onLogoutError(e);
  }

  if (isAsync) {
    return result;
  } else {
    logoutUser();
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils3 = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function update(user /** async */) {
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  if (responder) {
    responder = (0, _utils3.wrapAsync)(responder);
  }

  var result = _request2.default.put({
    url: _urls2.default.userObject(user.objectId),
    isAsync: isAsync,
    asyncHandler: responder,
    data: user
  });

  return isAsync ? result : (0, _utils3.parseResponse)(result);
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeUserClass = describeUserClass;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function describeUserClass() /** async */{
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  return _request2.default.get({
    url: _urls2.default.userClassProps(),
    isAsync: isAsync,
    asyncHandler: responder
  });
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restorePassword = restorePassword;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function restorePassword(emailAddress /** async */) {
  if (!emailAddress) {
    throw new Error('emailAddress can not be empty');
  }

  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  return _request2.default.get({
    url: _urls2.default.userRestorePassword(emailAddress),
    isAsync: isAsync,
    asyncHandler: responder
  });
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resendEmailConfirmation = resendEmailConfirmation;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resendEmailConfirmation(emailAddress /** async */) {
  if (!emailAddress || emailAddress instanceof _async2.default) {
    throw new Error('Email cannot be empty');
  }

  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  return _request2.default.post({
    url: _urls2.default.userResendConfirmation(emailAddress),
    isAsync: isAsync,
    asyncHandler: responder
  });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twitter = __webpack_require__(94);

Object.defineProperty(exports, 'loginWithTwitter', {
  enumerable: true,
  get: function get() {
    return _twitter.loginWithTwitter;
  }
});

var _facebook = __webpack_require__(96);

Object.defineProperty(exports, 'loginWithFacebook', {
  enumerable: true,
  get: function get() {
    return _facebook.loginWithFacebook;
  }
});
Object.defineProperty(exports, 'loginWithFacebookSdk', {
  enumerable: true,
  get: function get() {
    return _facebook.loginWithFacebookSdk;
  }
});

var _google = __webpack_require__(97);

Object.defineProperty(exports, 'loginWithGooglePlus', {
  enumerable: true,
  get: function get() {
    return _google.loginWithGooglePlus;
  }
});
Object.defineProperty(exports, 'loginWithGooglePlusSdk', {
  enumerable: true,
  get: function get() {
    return _google.loginWithGooglePlusSdk;
  }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithTwitter = undefined;

var _login = __webpack_require__(19);

var loginWithTwitter = exports.loginWithTwitter = function loginWithTwitter(fieldsMapping, stayLoggedIn, asyncHandler) {
  return (0, _login.loginSocial)('Twitter', fieldsMapping, null, null, stayLoggedIn, asyncHandler);
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO: refactor me
var SocialContainer = exports.SocialContainer = function () {
  function SocialContainer(socialType, container) {
    _classCallCheck(this, SocialContainer);

    this.socialType = socialType;
    this.container = container;

    if (container) {
      this.processContainer();
    } else {
      this.createContainer();
    }
  }

  _createClass(SocialContainer, [{
    key: 'processContainer',
    value: function processContainer() {
      var _this = this;

      var client = void 0;

      var container = this.container[0];

      var loadingMsg = document.createElement('div');
      loadingMsg.innerHTML = 'Loading...';

      container.appendChild(loadingMsg);
      container.style.cursor = 'wait';

      this.closeContainer = function () {
        container.style.cursor = 'default';
        container.removeChild(client);
      };

      this.removeLoading = function () {
        container.removeChild(loadingMsg);
      };

      this.doAuthorizationActivity = function (url) {
        _this.removeLoading();

        client = document.createElement('iframe');
        client.frameBorder = 0;
        client.width = container.style.width;
        client.height = container.style.height;
        client.id = 'SocialAuthFrame';
        client.setAttribute('src', url + '&amp;output=embed');
        container.appendChild(client);

        client.onload = function () {
          container.style.cursor = 'default';
        };
      };
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      var container = window.open('', this.socialType + ' authorization', 'resizable=yes, scrollbars=yes, titlebar=yes, top=10, left=10');

      var body = container.document.getElementsByTagName('body')[0];
      body.innerHTML = 'Loading...';
      container.document.getElementsByTagName('html')[0].style.cursor = 'wait';

      this.closeContainer = function () {
        container.close();
      };

      this.removeLoading = function () {
        body.innerHTML = null;
      };

      this.doAuthorizationActivity = function (url) {
        container.location.href = url;
        container.onload = function () {
          container.document.getElementsByTagName('html')[0].style.cursor = 'default';
        };
      };
    }
  }]);

  return SocialContainer;
}();

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithFacebookSdk = exports.loginWithFacebook = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _login = __webpack_require__(19);

var _request = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginWithFacebook = exports.loginWithFacebook = function loginWithFacebook(fieldsMapping, permissions, stayLoggedIn, asyncHandler) {
  return (0, _login.loginSocial)('Facebook', fieldsMapping, permissions, null, stayLoggedIn, asyncHandler);
};

var loginWithFacebookSdk = exports.loginWithFacebookSdk = function loginWithFacebookSdk(fieldsMapping, stayLoggedIn, options) {
  _utils2.default.checkPromiseSupport();

  return new Promise(function (resolve, reject) {
    if (!FB) {
      return reject(new Error('Facebook SDK not found'));
    }

    function loginRequest(response) {
      var requestData = _extends({}, response, {
        accessToken: response.authResponse.accessToken
      });

      (0, _request.sendSocialLoginRequest)(requestData, 'facebook', fieldsMapping, stayLoggedIn, new _async2.default(resolve, reject));
    }

    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        loginRequest(response);
      } else {
        FB.login(function (response) {
          return loginRequest(response);
        }, options);
      }
    });
  });
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithGooglePlusSdk = exports.loginWithGooglePlus = undefined;

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _login = __webpack_require__(19);

var _request = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginWithGooglePlus = exports.loginWithGooglePlus = function loginWithGooglePlus(fieldsMapping, permissions, container, stayLoggedIn, asyncHandler) {
  return (0, _login.loginSocial)('GooglePlus', fieldsMapping, permissions, container, stayLoggedIn, asyncHandler);
};

var loginWithGooglePlusSdk = exports.loginWithGooglePlusSdk = function loginWithGooglePlusSdk(fieldsMapping, stayLoggedIn) {
  _utils2.default.checkPromiseSupport();

  return new Promise(function (resolve, reject) {
    if (!gapi) {
      return reject(new Error('Google Plus SDK not found'));
    }

    var asyncHandler = new _async2.default(resolve, reject);

    gapi.auth.authorize({
      client_id: fieldsMapping.client_id,
      scope: 'https://www.googleapis.com/auth/plus.login'
    }, function (response) {
      delete response['g-oauth-window'];
      (0, _request.sendSocialLoginRequest)(response, 'googleplus', fieldsMapping, stayLoggedIn, asyncHandler);
    });
  });
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _desc, _value, _obj, _init;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _invokeServiceMethod = __webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var CustomServices = (_dec = (0, _decorators.deprecated)('Backendless.CustomServices', 'Backendless.CustomServices.invoke'), (_obj = {
  invokeSync: _utils2.default.synchronized(_invokeServiceMethod.invokeServiceMethod),
  invoke: _utils2.default.promisified(_invokeServiceMethod.invokeServiceMethod)

}, (_applyDecoratedDescriptor(_obj, 'invokeSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'invokeSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj)), _obj));

exports.default = CustomServices;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invokeServiceMethod = invokeServiceMethod;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function invokeServiceMethod(serviceName, method, parameters, asyncHandler) {
  if (parameters instanceof _async2.default) {
    asyncHandler = parameters;
    parameters = undefined;
  }

  return _request2.default.post({
    url: _urls2.default.blServiceMethod(serviceName, method),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _desc, _value, _obj, _init;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _dispatchEvent = __webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Events = (_dec = (0, _decorators.deprecated)('Backendless.Events', 'Backendless.Events.dispatch'), (_obj = {
  dispatchSync: _utils2.default.synchronized(_dispatchEvent.dispatchEvent),
  dispatch: _utils2.default.promisified(_dispatchEvent.dispatchEvent)

}, (_applyDecoratedDescriptor(_obj, 'dispatchSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'dispatchSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj)), _obj));

exports.default = Events;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchEvent = dispatchEvent;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dispatchEvent(eventName, eventArgs, asyncHandler) {
  if (!eventName || !_utils2.default.isString(eventName)) {
    throw new Error('Event Name must be provided and must be not an empty STRING!');
  }

  if (eventArgs instanceof _async2.default) {
    asyncHandler = eventArgs;
    eventArgs = undefined;
  }

  if (!_utils2.default.isObject(eventArgs)) {
    eventArgs = {};
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.post({
    url: _urls2.default.blEvent(eventName),
    data: eventArgs,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10, _init11, _init12, _init13, _init14, _init15, _init16;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _constants = __webpack_require__(34);

var _utils3 = __webpack_require__(20);

var _utils4 = _interopRequireDefault(_utils3);

var _trackerMonitor = __webpack_require__(35);

var _trackerMonitor2 = _interopRequireDefault(_trackerMonitor);

var _cluster = __webpack_require__(12);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _query = __webpack_require__(13);

var _query2 = _interopRequireDefault(_query);

var _savePoint = __webpack_require__(105);

var _addCategory = __webpack_require__(106);

var _deleteCategory = __webpack_require__(107);

var _getCategories = __webpack_require__(108);

var _deletePoint = __webpack_require__(109);

var _getPointsCount = __webpack_require__(110);

var _getClusterPoints = __webpack_require__(111);

var _loadPoints = __webpack_require__(112);

var _loadMetadata = __webpack_require__(113);

var _relativeFind = __webpack_require__(114);

var _loadFencePoints = __webpack_require__(115);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Geo = (_dec = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.savePoint'), _dec2 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.find'), _dec3 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.loadMetadata'), _dec4 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getClusterPoints'), _dec5 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.relativeFind'), _dec6 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.addCategory'), _dec7 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getCategories'), _dec8 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.deleteCategory'), _dec9 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.deletePoint'), _dec10 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getFencePoints'), _dec11 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getGeopointCount'), _dec12 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.runOnEnterAction'), _dec13 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.runOnStayAction'), _dec14 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.runOnExitAction'), _dec15 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.startGeofenceMonitoringWithInAppCallback'), _dec16 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.startGeofenceMonitoringWithRemoteCallback'), (_obj = {

  EARTH_RADIUS: _constants.EARTH_RADIUS,
  UNITS: _constants.UNITS,

  Utils: _utils4.default,

  Cluster: _cluster2.default,
  Point: _point2.default,
  Query: _query2.default,

  /** @deprecated */
  addPoint: function addPoint() /** geopoint, async */{
    return this.savePoint.apply(this, arguments);
  },

  savePointSync: _utils2.default.synchronized(_savePoint.savePoint),
  savePoint: _utils2.default.promisified(_savePoint.savePoint),

  findSync: _utils2.default.synchronized(_loadPoints.loadPoints),
  find: _utils2.default.promisified(_loadPoints.loadPoints),

  loadMetadataSync: _utils2.default.synchronized(_loadMetadata.loadMetadata),
  loadMetadata: _utils2.default.promisified(_loadMetadata.loadMetadata),

  getClusterPointsSync: _utils2.default.synchronized(_getClusterPoints.getClusterPoints),
  getClusterPoints: _utils2.default.promisified(_getClusterPoints.getClusterPoints),

  relativeFindSync: _utils2.default.synchronized(_relativeFind.relativeFind),
  relativeFind: _utils2.default.promisified(_relativeFind.relativeFind),

  addCategorySync: _utils2.default.synchronized(_addCategory.addCategory),
  addCategory: _utils2.default.promisified(_addCategory.addCategory),

  getCategoriesSync: _utils2.default.synchronized(_getCategories.getCategories),
  getCategories: _utils2.default.promisified(_getCategories.getCategories),

  deleteCategorySync: _utils2.default.synchronized(_deleteCategory.deleteCategory),
  deleteCategory: _utils2.default.promisified(_deleteCategory.deleteCategory),

  deletePointSync: _utils2.default.synchronized(_deletePoint.deletePoint),
  deletePoint: _utils2.default.promisified(_deletePoint.deletePoint),

  getFencePointsSync: _utils2.default.synchronized(_loadFencePoints.loadFencePoints),
  getFencePoints: _utils2.default.promisified(_loadFencePoints.loadFencePoints),

  getGeopointCountSync: _utils2.default.synchronized(_getPointsCount.getGeopointCount),
  getGeopointCount: _utils2.default.promisified(_getPointsCount.getGeopointCount),

  runOnEnterActionSync: _trackerMonitor2.default.runOnEnterActionSync,
  runOnEnterAction: _trackerMonitor2.default.runOnEnterAction,

  runOnStayActionSync: _trackerMonitor2.default.runOnStayActionSync,
  runOnStayAction: _trackerMonitor2.default.runOnStayAction,

  runOnExitActionSync: _trackerMonitor2.default.runOnExitActionSync,
  runOnExitAction: _trackerMonitor2.default.runOnExitAction,

  startGeofenceMonitoringWithInAppCallbackSync: _trackerMonitor2.default.startGeofenceMonitoringWithInAppCallbackSync,
  startGeofenceMonitoringWithInAppCallback: _trackerMonitor2.default.startGeofenceMonitoringWithInAppCallback,

  startGeofenceMonitoringWithRemoteCallbackSync: _trackerMonitor2.default.startGeofenceMonitoringWithRemoteCallbackSync,
  startGeofenceMonitoringWithRemoteCallback: _trackerMonitor2.default.startGeofenceMonitoringWithRemoteCallback,

  stopGeofenceMonitoring: _trackerMonitor2.default.stopGeofenceMonitoring
}, (_applyDecoratedDescriptor(_obj, 'savePointSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'savePointSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'findSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loadMetadataSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'loadMetadataSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getClusterPointsSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'getClusterPointsSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'relativeFindSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'relativeFindSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addCategorySync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'addCategorySync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getCategoriesSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'getCategoriesSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'deleteCategorySync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'deleteCategorySync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'deletePointSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'deletePointSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getFencePointsSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'getFencePointsSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getGeopointCountSync', [_dec11], (_init11 = Object.getOwnPropertyDescriptor(_obj, 'getGeopointCountSync'), _init11 = _init11 ? _init11.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init11;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'runOnEnterActionSync', [_dec12], (_init12 = Object.getOwnPropertyDescriptor(_obj, 'runOnEnterActionSync'), _init12 = _init12 ? _init12.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init12;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'runOnStayActionSync', [_dec13], (_init13 = Object.getOwnPropertyDescriptor(_obj, 'runOnStayActionSync'), _init13 = _init13 ? _init13.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init13;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'runOnExitActionSync', [_dec14], (_init14 = Object.getOwnPropertyDescriptor(_obj, 'runOnExitActionSync'), _init14 = _init14 ? _init14.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init14;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'startGeofenceMonitoringWithInAppCallbackSync', [_dec15], (_init15 = Object.getOwnPropertyDescriptor(_obj, 'startGeofenceMonitoringWithInAppCallbackSync'), _init15 = _init15 ? _init15.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init15;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'startGeofenceMonitoringWithRemoteCallbackSync', [_dec16], (_init16 = Object.getOwnPropertyDescriptor(_obj, 'startGeofenceMonitoringWithRemoteCallbackSync'), _init16 = _init16 ? _init16.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init16;
  }
}), _obj)), _obj));

exports.default = Geo;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startMonitoring = startMonitoring;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _utils = __webpack_require__(20);

var _utils2 = _interopRequireDefault(_utils);

var _tracker = __webpack_require__(21);

var _tracker2 = _interopRequireDefault(_tracker);

var _fenceActions = __webpack_require__(36);

var _fenceActions2 = _interopRequireDefault(_fenceActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INTERVAL = 5000;

//TODO: refactor me

function getFences(geoFence) {
  return _request2.default.get({
    url: _urls2.default.geoFences(geoFence)
  });
}

function isDefiniteRect(nwPoint, sePoint) {
  return nwPoint != null && sePoint != null;
}

var TypesMapper = {
  'RECT': function RECT(fence) {
    fence.nwPoint = fence.nodes[0];
    fence.sePoint = fence.nodes[1];
  },
  'CIRCLE': function CIRCLE(fence) {
    var outRect = _utils2.default.getOutRectangle(fence.nodes[0], fence.nodes[1]);
    fence.nwPoint = {
      latitude: outRect[0],
      longitude: outRect[1]
    };
    fence.sePoint = {
      latitude: outRect[2],
      longitude: outRect[3]
    };
  },
  'SHAPE': function SHAPE(fence) {
    var outRect = _utils2.default.getOutRectangle(fence.nodes[0], fence.nodes[1]);
    fence.nwPoint = {
      latitude: outRect[0],
      longitude: outRect[1]
    };
    fence.sePoint = {
      latitude: outRect[2],
      longitude: outRect[3]
    };
  }
};

function checkPosition(geofenceName, coords, fences, geoPoint, GeoFenceCallback, lastResults, asyncHandler) {
  var tracker = _tracker2.default.get();

  for (var k = 0; k < tracker._trackedFences.length; k++) {
    var _trackedFences = tracker._trackedFences[k];

    var isInFence = isDefiniteRect(_trackedFences.nwPoint, _trackedFences.sePoint) && _utils2.default.isPointInFence(coords, _trackedFences);

    var rule = null;

    if (isInFence !== lastResults[tracker._trackedFences[k].geofenceName]) {
      if (lastResults[tracker._trackedFences[k].geofenceName]) {
        rule = 'onexit';
      } else {
        rule = 'onenter';
      }

      lastResults[tracker._trackedFences[k].geofenceName] = isInFence;
    }

    if (rule) {
      (function () {
        var duration = tracker._trackedFences[k].onStayDuration * 1000;

        var timeoutFuncInApp = function timeoutFuncInApp(savedK, savedCoords, duration) {
          var callBack = function callBack() {
            GeoFenceCallback['onstay'](tracker._trackedFences[savedK].geofenceName, tracker._trackedFences[savedK].objectId, savedCoords.latitude, savedCoords.longitude);
          };

          tracker._timers[tracker._trackedFences[savedK].geofenceName] = setTimeout(callBack, duration);
        };

        var timeoutFuncRemote = function timeoutFuncRemote(savedK, savedCoords, duration, geoPoint) {
          var callBack = function callBack() {
            _fenceActions2.default.run('onstay', tracker._trackedFences[savedK].geofenceName, geoPoint, asyncHandler);
          };

          tracker._timers[tracker._trackedFences[savedK].geofenceName] = setTimeout(callBack, duration);
        };

        if (GeoFenceCallback) {
          if (rule === 'onenter') {
            GeoFenceCallback[rule](tracker._trackedFences[k].geofenceName, tracker._trackedFences[k].objectId, coords.latitude, coords.longitude);

            if (duration > -1) {
              (function (k, coords, duration) {
                return timeoutFuncInApp(k, coords, duration);
              })(k, coords, duration);
            } else {
              GeoFenceCallback['onstay'](tracker._trackedFences[k].geofenceName, tracker._trackedFences[k].objectId, coords.latitude, coords.longitude);
            }
          } else {
            clearTimeout(tracker._timers[tracker._trackedFences[k].geofenceName]);
            GeoFenceCallback[rule](tracker._trackedFences[k].geofenceName, tracker._trackedFences[k].objectId, coords.latitude, coords.longitude);
          }
        } else if (geoPoint) {
          geoPoint.latitude = coords.latitude;
          geoPoint.longitude = coords.longitude;

          if (rule === 'onenter') {
            _fenceActions2.default.run(rule, tracker._trackedFences[k].geofenceName, geoPoint, asyncHandler);

            if (duration > -1) {
              (function (k, coords, duration, geoPoint) {
                return timeoutFuncRemote(k, coords, duration, geoPoint);
              })(k, coords, duration, geoPoint);
            } else {
              _fenceActions2.default.run('onstay', tracker._trackedFences[k].geofenceName, geoPoint, asyncHandler);
            }
          } else {
            clearTimeout(tracker._timers[tracker._trackedFences[k].geofenceName]);
            _fenceActions2.default.run(rule, tracker._trackedFences[k].geofenceName, geoPoint, asyncHandler);
          }
        }
      })();
    }
  }
}

function startMonitoring(geofenceName, secondParam, asyncHandler) {
  var tracker = _tracker2.default.get();

  var isGeoPoint = false;

  if (secondParam instanceof _point2.default) {
    isGeoPoint = true;
  }

  var fences = getFences(geofenceName);

  for (var ii = 0; ii < fences.length; ii++) {
    if (!_containsByPropName(tracker._trackedFences, fences[ii], 'geofenceName')) {
      TypesMapper[fences[ii].type](fences[ii]);
      tracker._lastResults[fences[ii].geofenceName] = false;
      tracker._trackedFences.push(fences[ii]);
    }
  }

  function _containsByPropName(collection, object, name) {
    var length = collection.length;
    var result = false;

    for (var i = 0; i < length; i++) {
      if (result = collection[i][name] === object[name]) {
        break;
      }
    }

    return result;
  }

  var getPosition = function getPosition(position) {
    var geoPoint = isGeoPoint ? secondParam : null;
    var callback = !isGeoPoint ? secondParam : null;

    checkPosition(geofenceName, position.coords, fences, geoPoint, callback, tracker._lastResults, asyncHandler);
  };

  function errorCallback(error) {
    throw new Error('Error during current position calculation. Error ' + error.message);
  }

  function getCurPos() {
    navigator.geolocation.getCurrentPosition(getPosition, errorCallback, {
      timeout: 5000,
      enableHighAccuracy: true
    });
  }

  if (!tracker.monitoringId) {
    if (fences.length) {
      tracker.monitoringId = !_utils2.default.isMobileDevice() ? setInterval(getCurPos, INTERVAL) : navigator.geolocation.watchPosition(getPosition, errorCallback, {
        timeout: INTERVAL,
        enableHighAccuracy: true
      });
    } else {
      throw new Error('Please, add some fences to start monitoring');
    }
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopMonitoring = stopMonitoring;

var _utils = __webpack_require__(20);

var _utils2 = _interopRequireDefault(_utils);

var _tracker = __webpack_require__(21);

var _tracker2 = _interopRequireDefault(_tracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me
function stopMonitoring(geofenceName) {
  var tracker = _tracker2.default.get();

  if (geofenceName) {
    for (var i = 0; i < tracker._trackedFences.length; i++) {
      if (tracker._trackedFences[i].geofenceName === geofenceName) {
        tracker._trackedFences.splice(i, 1);
        delete tracker._lastResults[geofenceName];
      }
    }
  } else {
    tracker._lastResuls = {};
    tracker._trackedFences = [];
  }

  if (!tracker._trackedFences.length) {
    tracker.monitoringId = null;

    if (!_utils2.default.isMobileDevice()) {
      clearInterval(tracker.monitoringId);
    } else {
      navigator.geolocation.clearWatch(tracker.monitoringId);
    }
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savePoint = savePoint;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function savePoint(geoPoint, asyncHandler) {
  if (!_utils2.default.isNumber(geoPoint.latitude) || !_utils2.default.isNumber(geoPoint.longitude)) {
    throw new Error('Latitude or longitude not a number');
  }

  geoPoint.categories = _utils2.default.castArray(geoPoint.categories || ['Default']);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, parseResponse);
  }

  var result = _request2.default.send({
    method: geoPoint.objectId ? _request2.default.Methods.PATCH : _request2.default.Methods.POST,
    url: geoPoint.objectId ? _urls2.default.geoPoint(geoPoint.objectId) : _urls2.default.geoPoints(),
    data: geoPoint,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return parseResponse(result);
}

function parseResponse(resp) {
  var geoPoint = new _point2.default();

  geoPoint.categories = resp.geopoint.categories;
  geoPoint.latitude = resp.geopoint.latitude;
  geoPoint.longitude = resp.geopoint.longitude;
  geoPoint.metadata = resp.geopoint.metadata;
  geoPoint.objectId = resp.geopoint.objectId;

  return geoPoint;
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCategory = addCategory;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addCategory(name, asyncHandler) {
  if (!name) {
    throw new Error('Category name is required.');
  }

  var result = _request2.default.put({
    url: _urls2.default.geoCategory(name),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  return typeof result.result === 'undefined' ? result : result.result;
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCategory = deleteCategory;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteCategory(name, asyncHandler) {
  if (!name) {
    throw new Error('Category name is required.');
  }

  var result = {};

  try {
    result = _request2.default.delete({
      url: _urls2.default.geoCategory(name),
      isAsync: !!asyncHandler,
      asyncHandler: asyncHandler
    });
  } catch (e) {
    if (e.statusCode === 404) {
      result = false;
    } else {
      throw e;
    }
  }

  return typeof result.result === 'undefined' ? result : result.result;
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategories = getCategories;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCategories(asyncHandler) {
  return _request2.default.get({
    url: _urls2.default.geoCategories(),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePoint = deletePoint;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deletePoint(point, asyncHandler) {
  if (!point || _utils2.default.isFunction(point)) {
    throw new Error('Point argument name is required, must be string (object Id), or point object');
  }

  var pointId = _utils2.default.isString(point) ? point : point.objectId;

  var result = {};

  try {
    result = _request2.default.delete({
      url: _urls2.default.geoPoint(pointId),
      isAsync: !!asyncHandler,
      asyncHandler: asyncHandler
    });
  } catch (e) {
    if (e.statusCode === 404) {
      result = false;
    } else {
      throw e;
    }
  }

  return typeof result.result === 'undefined' ? result : result.result;
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGeopointCount = getGeopointCount;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _queryValidator = __webpack_require__(37);

var _queryParams = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getGeopointCount(fenceName, query, asyncHandler) {
  if (_utils2.default.isObject(fenceName)) {
    asyncHandler = query;
    query = fenceName;
    fenceName = undefined;
  }

  if (!_utils2.default.isObject(query)) {
    throw new Error('Geo query must be specified');
  }

  if (fenceName) {
    query['geoFence'] = fenceName;
  }

  (0, _queryValidator.validateQueryObject)(query);

  var url = _urls2.default.geoCount() + '?' + (0, _queryParams.toQueryParams)(query);

  return _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClusterPoints = getClusterPoints;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _cluster = __webpack_require__(12);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _query = __webpack_require__(13);

var _query2 = _interopRequireDefault(_query);

var _findHelpers = __webpack_require__(22);

var _findHelpers2 = _interopRequireDefault(_findHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClusterPoints(geoObject, asyncHandler) {
  if (!geoObject.objectId || !(geoObject instanceof _cluster2.default)) {
    throw new Error('Method argument must be a valid instance of GeoCluster persisted on the server');
  }

  if (!(geoObject.geoQuery instanceof _query2.default)) {
    throw new Error('Invalid GeoCluster object. ' + 'Make sure to obtain an instance of GeoCluster using the Backendless.Geo.find API');
  }

  var url = _urls2.default.geoClusterPoints(geoObject.objectId) + '?';

  var geoQuery = geoObject.geoQuery;

  for (var prop in geoQuery) {
    if (geoQuery.hasOwnProperty(prop) && _findHelpers2.default.hasOwnProperty(prop) && geoQuery[prop] != null) {
      url += '&' + _findHelpers2.default[prop](geoQuery[prop]);
    }
  }

  var responderOverride = function responderOverride(asyncHandler) {
    var success = function success(geoCollection) {
      for (var i = 0; i < geoCollection.length; i++) {
        geoCollection[i] = new _point2.default(geoCollection[i]);
      }

      asyncHandler.success(geoCollection);
    };

    var error = function error(data) {
      return asyncHandler.fault(data);
    };

    return new _async2.default(success, error);
  };

  asyncHandler = responderOverride(asyncHandler);

  return _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPoints = loadPoints;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _loadItems = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadPoints(query, asyncHandler) {
  query.url = _urls2.default.geo();

  return (0, _loadItems.loadItems)(query, asyncHandler);
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMetadata = loadMetadata;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _cluster = __webpack_require__(12);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _query = __webpack_require__(13);

var _query2 = _interopRequireDefault(_query);

var _findHelpers = __webpack_require__(22);

var _findHelpers2 = _interopRequireDefault(_findHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function loadMetadata(geoObject, asyncHandler) {
  var isCluster = geoObject instanceof _cluster2.default;
  var isPoint = geoObject instanceof _point2.default;

  if (!geoObject.objectId || !isCluster && !isPoint) {
    throw new Error('Method argument must be a valid instance of GeoPoint or GeoCluster persisted on the server');
  }

  var url = _urls2.default.geoPointMetaData(geoObject.objectId);

  if (isCluster) {
    var geoQuery = geoObject.geoQuery;

    if (!(geoQuery instanceof _query2.default)) {
      throw new Error('Invalid GeoCluster object. ' + 'Make sure to obtain an instance of GeoCluster using the Backendless.Geo.find API');
    }

    url += '?';

    for (var prop in geoQuery) {
      if (geoQuery.hasOwnProperty(prop) && _findHelpers2.default.hasOwnProperty(prop) && geoQuery[prop] != null) {
        url += '&' + _findHelpers2.default[prop](geoQuery[prop]);
      }
    }
  }

  return _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relativeFind = relativeFind;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _loadItems = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function relativeFind(query, asyncHandler) {
  if (!(query.relativeFindMetadata && query.relativeFindPercentThreshold)) {
    throw new Error('Inconsistent geo query. ' + 'Query should contain both relativeFindPercentThreshold and relativeFindMetadata');
  }

  query.url = _urls2.default.geoRelative();

  return (0, _loadItems.loadItems)(query, asyncHandler);
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFencePoints = loadFencePoints;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _query = __webpack_require__(13);

var _query2 = _interopRequireDefault(_query);

var _loadItems = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadFencePoints(geoFenceName, query, asyncHandler) {
  query = query || new _query2.default();

  query.geoFence = geoFenceName;
  query.url = _urls2.default.geo();

  return (0, _loadItems.loadItems)(query, asyncHandler);
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _publishOptionsHeader = __webpack_require__(117);

var _publishOptionsHeader2 = _interopRequireDefault(_publishOptionsHeader);

var _publishOptions = __webpack_require__(39);

var _publishOptions2 = _interopRequireDefault(_publishOptions);

var _deliveryOptions = __webpack_require__(40);

var _deliveryOptions2 = _interopRequireDefault(_deliveryOptions);

var _bodyParts = __webpack_require__(41);

var _bodyParts2 = _interopRequireDefault(_bodyParts);

var _subscriptionsOptions = __webpack_require__(118);

var _subscriptionsOptions2 = _interopRequireDefault(_subscriptionsOptions);

var _subscribe = __webpack_require__(119);

var _publish = __webpack_require__(124);

var _sendEmail = __webpack_require__(125);

var _cancel = __webpack_require__(126);

var _registerDevice = __webpack_require__(127);

var _unregisterDevice = __webpack_require__(128);

var _getRegistration = __webpack_require__(129);

var _getMessageStatus = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Messaging = (_dec = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.subscribe'), _dec2 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.publish'), _dec3 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.sendEmail'), _dec4 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.cancel'), _dec5 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.registerDevice'), _dec6 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.getRegistrations'), _dec7 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.unregisterDevice'), _dec8 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.getMessageStatus'), (_obj = {

  Bodyparts: _bodyParts2.default,
  PublishOptions: _publishOptions2.default,
  DeliveryOptions: _deliveryOptions2.default,
  SubscriptionOptions: _subscriptionsOptions2.default,
  PublishOptionsHeaders: _publishOptionsHeader2.default,

  subscribeSync: _utils2.default.synchronized(_subscribe.subscribe),
  subscribe: _utils2.default.promisified(_subscribe.subscribe),

  publishSync: _utils2.default.synchronized(_publish.publish),
  publish: _utils2.default.promisified(_publish.publish),

  sendEmailSync: _utils2.default.synchronized(_sendEmail.sendEmail),
  sendEmail: _utils2.default.promisified(_sendEmail.sendEmail),

  cancelSync: _utils2.default.synchronized(_cancel.cancel),
  cancel: _utils2.default.promisified(_cancel.cancel),

  registerDeviceSync: _utils2.default.synchronized(_registerDevice.registerDevice),
  registerDevice: _utils2.default.promisified(_registerDevice.registerDevice),

  getRegistrationsSync: _utils2.default.synchronized(_getRegistration.getRegistrations),
  getRegistrations: _utils2.default.promisified(_getRegistration.getRegistrations),

  unregisterDeviceSync: _utils2.default.synchronized(_unregisterDevice.unregisterDevice),
  unregisterDevice: _utils2.default.promisified(_unregisterDevice.unregisterDevice),

  getMessageStatusSync: _utils2.default.synchronized(_getMessageStatus.getMessageStatus),
  getMessageStatus: _utils2.default.promisified(_getMessageStatus.getMessageStatus)

}, (_applyDecoratedDescriptor(_obj, 'subscribeSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'subscribeSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'publishSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'publishSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'sendEmailSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'sendEmailSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'cancelSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'cancelSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'registerDeviceSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'registerDeviceSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getRegistrationsSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'getRegistrationsSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'unregisterDeviceSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'unregisterDeviceSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getMessageStatusSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'getMessageStatusSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj)), _obj));

exports.default = Messaging;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PublishOptionsHeaders = {
  MESSAGE_TAG: 'message',
  IOS_ALERT_TAG: 'ios-alert',
  IOS_BADGE_TAG: 'ios-badge',
  IOS_SOUND_TAG: 'ios-sound',
  ANDROID_TICKER_TEXT_TAG: 'android-ticker-text',
  ANDROID_CONTENT_TITLE_TAG: 'android-content-title',
  ANDROID_CONTENT_TEXT_TAG: 'android-content-text',
  ANDROID_ACTION_TAG: 'android-action',
  WP_TYPE_TAG: 'wp-type',
  WP_TITLE_TAG: 'wp-title',
  WP_TOAST_SUBTITLE_TAG: 'wp-subtitle',
  WP_TOAST_PARAMETER_TAG: 'wp-parameter',
  WP_TILE_BACKGROUND_IMAGE: 'wp-backgroundImage',
  WP_TILE_COUNT: 'wp-count',
  WP_TILE_BACK_TITLE: 'wp-backTitle',
  WP_TILE_BACK_BACKGROUND_IMAGE: 'wp-backImage',
  WP_TILE_BACK_CONTENT: 'wp-backContent',
  WP_RAW_DATA: 'wp-raw'
};

exports.default = PublishOptionsHeaders;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubscriptionOptions = function SubscriptionOptions(args) {
  _classCallCheck(this, SubscriptionOptions);

  args = args || {};

  this.subscriberId = args.subscriberId || undefined;
  this.subtopic = args.subtopic || undefined;
  this.selector = args.selector || undefined;
};

exports.default = SubscriptionOptions;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _subscription = __webpack_require__(120);

var _subscription2 = _interopRequireDefault(_subscription);

var _getChannelProperty = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function subscribe(channelName, subscriptionCallback, subscriptionOptions, asyncHandler) {
  if (asyncHandler) {
    var callback = new _async2.default(function (props) {
      asyncHandler.success(new _subscription2.default({
        channelName: channelName,
        options: subscriptionOptions,
        channelProperties: props,
        responder: subscriptionCallback,
        restUrl: _urls2.default.messaging(),
        onSubscribe: asyncHandler
      }));
    }, function (data) {
      asyncHandler.fault(data);
    });

    (0, _getChannelProperty.getChannelProperties)(channelName, callback);
  } else {
    var props = (0, _getChannelProperty.getChannelProperties)(channelName);

    return new _subscription2.default({
      channelName: channelName,
      options: subscriptionOptions,
      channelProperties: props,
      responder: subscriptionCallback,
      restUrl: _urls2.default.messaging()
    });
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async2 = __webpack_require__(3);

var _async3 = _interopRequireDefault(_async2);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _pollingProxy = __webpack_require__(121);

var _pollingProxy2 = _interopRequireDefault(_pollingProxy);

var _socketProxy = __webpack_require__(122);

var _socketProxy2 = _interopRequireDefault(_socketProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subscription = function () {
  function Subscription(config) {
    _classCallCheck(this, Subscription);

    this.channelName = config.channelName;
    this.options = config.options;
    this.channelProperties = config.channelProperties;
    this.subscriptionId = null;
    this.restUrl = config.restUrl + '/' + config.channelName;
    this.responder = config.responder;
    this._subscribe(config.onSubscribe);
  }

  _createClass(Subscription, [{
    key: '_subscribe',
    value: function _subscribe() /** async */{
      var responder = _utils2.default.extractResponder(arguments);
      var isAsync = !!responder;
      var self = this;

      var _async = new _async3.default(function (data) {
        self.subscriptionId = data.subscriptionId;
        self._startSubscription();
      }, function (e) {
        responder.fault(e);
      });

      var subscription = _request2.default.post({
        url: this.restUrl + '/subscribe',
        isAsync: isAsync,
        data: this.options,
        asyncHandler: _async
      });

      if (!isAsync) {
        this.subscriptionId = subscription.subscriptionId;
        this._startSubscription();
      }
    }
  }, {
    key: '_startSubscription',
    value: function _startSubscription() {
      var _this = this;

      if (WebSocket) {
        var url = this.channelProperties['websocket'] + '/' + this.subscriptionId;
        this.proxy = new _socketProxy2.default(url);

        this.proxy.on('socketClose', function () {
          _this._switchToPolling();
        });

        this.proxy.on('messageReceived', function () {
          if (_this.responder) {
            _this.responder();
          }
        });
      } else {
        this._switchToPolling();
      }

      this._startSubscription = function () {};
    }
  }, {
    key: 'cancelSubscription',
    value: function cancelSubscription() {
      this.proxy && this.proxy.close();
      this._startSubscription = function () {};
    }
  }, {
    key: '_switchToPolling',
    value: function _switchToPolling() {
      var url = this.restUrl + '/' + this.subscriptionId;
      this.proxy = new _pollingProxy2.default(url);
      var self = this;

      this.proxy.on('messageReceived', function (data) {
        if (data.messages.length) {
          self.responder(data);
        }
      });
    }
  }]);

  return Subscription;
}();

exports.default = Subscription;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _proxy = __webpack_require__(42);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PollingProxy = function (_Proxy) {
  _inherits(PollingProxy, _Proxy);

  function PollingProxy(url) {
    _classCallCheck(this, PollingProxy);

    var _this = _possibleConstructorReturn(this, (PollingProxy.__proto__ || Object.getPrototypeOf(PollingProxy)).call(this));

    _this.restUrl = url;
    _this.timer = 0;
    _this.timeout = 0;
    _this.interval = 1000;
    _this.stopped = false;
    _this.responder = new _async2.default(_this.onMessage, _this.onError, _this);

    _this.poll();
    return _this;
  }

  _createClass(PollingProxy, [{
    key: 'poll',
    value: function poll() {
      var _this2 = this;

      clearTimeout(this.timer);
      clearTimeout(this.timeout);

      this.timeout = setTimeout(function () {
        return _this2.onTimeout();
      }, 30 * 1000);

      _request2.default.get({
        url: this.restUrl,
        isAsync: true,
        asyncHandler: this.responder
      });
    }
  }, {
    key: 'close',
    value: function close() {
      clearTimeout(this.timer);
      clearTimeout(this.timeout);

      this.stopped = true;
    }
  }, {
    key: 'onTimeout',
    value: function onTimeout() {
      clearTimeout(this.timeout);

      this.poll();
    }
  }, {
    key: 'onMessage',
    value: function onMessage(data) {
      var _this3 = this;

      clearTimeout(this.timer);
      clearTimeout(this.timeout);

      if (!this.stopped) {
        this.timer = setTimeout(function () {
          return _this3.poll();
        }, this.interval);

        this.fireEvent('messageReceived', data);
      }
    }
  }, {
    key: 'onError',
    value: function onError() {
      var _this4 = this;

      clearTimeout(this.timer);
      clearTimeout(this.timeout);

      if (!this.stopped) {
        this.timer = setTimeout(function () {
          return _this4.poll();
        }, this.interval);
      }
    }
  }]);

  return PollingProxy;
}(_proxy2.default);

exports.default = PollingProxy;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(42);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocketProxy = function (_Proxy) {
  _inherits(SocketProxy, _Proxy);

  function SocketProxy(url) {
    _classCallCheck(this, SocketProxy);

    var _this = _possibleConstructorReturn(this, (SocketProxy.__proto__ || Object.getPrototypeOf(SocketProxy)).call(this));

    _this.reconnectWithPolling = true;

    try {
      var socket = _this.socket = new WebSocket(url);

      socket.onopen = function () {
        return _this.sockOpen();
      };
      socket.onerror = function (error) {
        return _this.sockError(error);
      };
      socket.onclose = function () {
        return _this.onSocketClose();
      };
      socket.onmessage = function (event) {
        return _this.onMessage(event);
      };
    } catch (e) {
      setTimeout(function () {
        return _this.onSocketClose();
      }, 100);
    }
    return _this;
  }

  _createClass(SocketProxy, [{
    key: 'onMessage',
    value: function onMessage() {
      this.fireEvent('messageReceived', data);
    }
  }, {
    key: 'onSocketClose',
    value: function onSocketClose(data) {
      if (this.reconnectWithPolling) {
        this.fireEvent('socketClose', data);
      }
    }
  }, {
    key: 'close',
    value: function close() {
      this.reconnectWithPolling = false;

      this.socket.close();
    }
  }]);

  return SocketProxy;
}(_proxy2.default);

exports.default = SocketProxy;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelProperties = getChannelProperties;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var channelProperties = {};

function getChannelProperties(channelName, asyncHandler) {
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  var props = channelProperties[channelName];

  if (props) {
    if (isAsync) {
      asyncHandler.success(props);
    }

    return props;
  }

  var result = _request2.default.get({
    url: _urls2.default.messagingChannelProps(channelName),
    isAsync: isAsync,
    asyncHandler: responder
  });

  channelProperties[channelName] = result;

  return result;
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _deliveryOptions = __webpack_require__(40);

var _deliveryOptions2 = _interopRequireDefault(_deliveryOptions);

var _publishOptions = __webpack_require__(39);

var _publishOptions2 = _interopRequireDefault(_publishOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function publish(channelName, message, publishOptions, deliveryTarget /**, async */) {
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  var data = {
    message: message
  };

  if (publishOptions && publishOptions !== responder) {
    if (!(publishOptions instanceof _publishOptions2.default)) {
      throw new Error('Use PublishOption as publishOptions argument');
    }

    _utils2.default.deepExtend(data, publishOptions);
  }

  if (deliveryTarget && deliveryTarget !== responder) {
    if (!(deliveryTarget instanceof _deliveryOptions2.default)) {
      throw new Error('Use DeliveryOptions as deliveryTarget argument');
    }

    _utils2.default.deepExtend(data, deliveryTarget);
  }

  return _request2.default.post({
    url: _urls2.default.messagingChannel(channelName),
    isAsync: isAsync,
    asyncHandler: responder,
    data: data
  });
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = sendEmail;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _bodyParts = __webpack_require__(41);

var _bodyParts2 = _interopRequireDefault(_bodyParts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendEmail(subject, bodyParts, recipients, attachments /**, async */) {
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;
  var data = {};

  if (subject && !_utils2.default.isEmpty(subject) && _utils2.default.isString(subject)) {
    data.subject = subject;
  } else {
    throw new Error('Subject is required parameter and must be a nonempty string');
  }

  if (bodyParts instanceof _bodyParts2.default && !_utils2.default.isEmpty(bodyParts)) {
    data.bodyparts = bodyParts;
  } else {
    throw new Error('Use Bodyparts as bodyParts argument, must contain at least one property');
  }

  if (recipients && _utils2.default.isArray(recipients) && !_utils2.default.isEmpty(recipients)) {
    data.to = recipients;
  } else {
    throw new Error('Recipients is required parameter, must be a nonempty array');
  }

  if (attachments) {
    if (_utils2.default.isArray(attachments)) {
      if (!_utils2.default.isEmpty(attachments)) {
        data.attachment = attachments;
      }
    }
  }

  function responseMessageStatus(res) {
    return res.status;
  }

  return _request2.default.post({
    url: _urls2.default.messagingEmail(),
    isAsync: isAsync,
    asyncHandler: _utils2.default.wrapAsync(responder, responseMessageStatus),
    data: data
  });
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancel = cancel;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancel(messageId, asyncHandler) {
  return _request2.default.delete({
    url: _urls2.default.messagingMessage(messageId),
    isAsync: !!asyncHandler,
    asyncHandler: new _async2.default()
  });
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDevice = registerDevice;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _device = __webpack_require__(14);

var _device2 = _interopRequireDefault(_device);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerDevice(deviceToken, channels, expiration, asyncHandler) {
  var device = _device2.default.required();

  if (expiration instanceof _async2.default) {
    asyncHandler = expiration;
    expiration = undefined;
  }

  var data = {
    deviceToken: deviceToken,
    deviceId: device.uuid,
    os: device.platform,
    osVersion: device.version
  };

  if (_utils2.default.isArray(channels)) {
    data.channels = channels;
  }

  if (_utils2.default.isNumber(expiration) || expiration instanceof Date) {
    data.expiration = expiration instanceof Date ? expiration.getTime() / 1000 : expiration;
  }

  _request2.default.post({
    url: _urls2.default.messagingRegistrations(),
    data: data,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregisterDevice = unregisterDevice;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _device = __webpack_require__(14);

var _device2 = _interopRequireDefault(_device);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unregisterDevice(asyncHandler) {
  var device = _device2.default.required();

  _request2.default.delete({
    url: _urls2.default.messagingRegistrationDevice(device.uuid),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRegistrations = getRegistrations;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _device = __webpack_require__(14);

var _device2 = _interopRequireDefault(_device);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRegistrations(asyncHandler) {
  var device = _device2.default.required();

  return _request2.default.get({
    url: _urls2.default.messagingRegistrationDevice(device.uuid),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageStatus = getMessageStatus;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMessageStatus(messageId, asyncHandler) {
  if (!messageId) {
    throw Error('Message ID is required.');
  }

  return _request2.default.get({
    url: _urls2.default.messagingMessage(messageId),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _persmissions = __webpack_require__(132);

var _persmissions2 = _interopRequireDefault(_persmissions);

var _save = __webpack_require__(135);

var _upload = __webpack_require__(136);

var _listinig = __webpack_require__(137);

var _rename = __webpack_require__(138);

var _move = __webpack_require__(139);

var _remove = __webpack_require__(140);

var _copy = __webpack_require__(141);

var _exists = __webpack_require__(142);

var _removeDirectory = __webpack_require__(143);

var _count = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Files = (_dec = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.saveFile'), _dec2 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.upload'), _dec3 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.listing'), _dec4 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.renameFile'), _dec5 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.moveFile'), _dec6 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.copyFile'), _dec7 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.remove'), _dec8 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.exists'), _dec9 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.removeDirectory'), _dec10 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.getFileCount'), (_obj = {
  Permissions: _persmissions2.default,

  saveFileSync: _utils2.default.synchronized(_save.saveFile),
  saveFile: _utils2.default.promisified(_save.saveFile),

  uploadSync: _utils2.default.synchronized(_upload.upload),
  upload: _utils2.default.promisified(_upload.upload),

  listingSync: _utils2.default.synchronized(_listinig.listing),
  listing: _utils2.default.promisified(_listinig.listing),

  renameFileSync: _utils2.default.synchronized(_rename.renameFile),
  renameFile: _utils2.default.promisified(_rename.renameFile),

  moveFileSync: _utils2.default.synchronized(_move.moveFile),
  moveFile: _utils2.default.promisified(_move.moveFile),

  copyFileSync: _utils2.default.synchronized(_copy.copyFile),
  copyFile: _utils2.default.promisified(_copy.copyFile),

  removeSync: _utils2.default.synchronized(_remove.remove),
  remove: _utils2.default.promisified(_remove.remove),

  existsSync: _utils2.default.synchronized(_exists.exists),
  exists: _utils2.default.promisified(_exists.exists),

  removeDirectorySync: _utils2.default.synchronized(_removeDirectory.removeDirectory),
  removeDirectory: _utils2.default.promisified(_removeDirectory.removeDirectory),

  getFileCountSync: _utils2.default.synchronized(_count.getFileCount),
  getFileCount: _utils2.default.promisified(_count.getFileCount)

}, (_applyDecoratedDescriptor(_obj, 'saveFileSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'saveFileSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'uploadSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'uploadSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'listingSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'listingSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'renameFileSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'renameFileSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'moveFileSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'moveFileSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'copyFileSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'copyFileSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'removeSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'existsSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'existsSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeDirectorySync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'removeDirectorySync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getFileCountSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'getFileCountSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj)), _obj));

exports.default = Files;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _persmission = __webpack_require__(133);

var _persmission2 = _interopRequireDefault(_persmission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilePermissions = {
  READ: new _persmission2.default('READ'),
  DELETE: new _persmission2.default('DELETE'),
  WRITE: new _persmission2.default('WRITE')
};

exports.default = FilePermissions;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _sendRequest = __webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var PermissionTypes = {
  GRANT: 'GRANT',
  DENY: 'DENY'
};

function grantUser(userId, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, url, { userId: userId }, asyncHandler);
}

function grantRole(roleName, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, url, { roleName: roleName }, asyncHandler);
}

function grant(url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, url, { userId: '*' }, asyncHandler);
}

function denyUser(userId, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, url, { userId: userId }, asyncHandler);
}

function denyRole(roleName, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, url, { roleName: roleName }, asyncHandler);
}

function deny(url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, url, { userId: '*' }, asyncHandler);
}

//TODO: will be removed when remove sync methods
var namespaceLabel = 'Backendless.Files.Permissions.{READ|DELETE|WRITE}';

var FilePermission = (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantUser'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantRole'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grant'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyUser'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyRole'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.deny'), (_class = function FilePermission(permission) {
  _classCallCheck(this, FilePermission);

  _initDefineProp(this, 'grantUserSync', _descriptor, this);

  this.grantUser = _utils2.default.promisified(grantUser);

  _initDefineProp(this, 'grantRoleSync', _descriptor2, this);

  this.grantRole = _utils2.default.promisified(grantRole);

  _initDefineProp(this, 'grantSync', _descriptor3, this);

  this.grant = _utils2.default.promisified(grant);

  _initDefineProp(this, 'denyUserSync', _descriptor4, this);

  this.denyUser = _utils2.default.promisified(denyUser);

  _initDefineProp(this, 'denyRoleSync', _descriptor5, this);

  this.denyRole = _utils2.default.promisified(denyRole);

  _initDefineProp(this, 'denySync', _descriptor6, this);

  this.deny = _utils2.default.promisified(deny);

  this.permission = permission;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'grantUserSync', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(grantUser);
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'grantRoleSync', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(grantRole);
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'grantSync', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(grant);
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'denyUserSync', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(denyUser);
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'denyRoleSync', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(denyRole);
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'denySync', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(deny);
  }
})), _class));
exports.default = FilePermission;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = sendRequest;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendRequest(permission, type, path, options, asyncHandler) {
  var userId = options.userId,
      roleName = options.roleName;


  var data = {
    permission: permission
  };

  if (userId) {
    data.user = userId;
  } else if (roleName) {
    data.role = roleName;
  }

  return _request2.default.put({
    url: _urls2.default.filePermission(type, path),
    data: data,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFile = saveFile;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _send = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_CONTENT_SIZE = 2800000;

var toByteArray = function toByteArray(content) {
  if (typeof Blob !== 'undefined') {

    if (!Array.isArray(content)) {
      content = [content];
    }

    content = new Blob(content);
  } else if (typeof Buffer !== 'undefined') {
    var value = Buffer.from(content);

    content = {
      value: value,
      options: {
        filename: 'blob',
        knownLength: value.byteLength,
        contentType: 'application/octet-stream'
      }
    };
  }

  return content;
};

var getContentSize = function getContentSize(content) {
  if (content.size) {
    return content.size;
  }

  return content.options && content.options.knownLength;
};

/**
 * @param {String} path
 * @param {String} fileName
 * @param {String|Uint8Array} fileContent
 * @param {Boolean} overwrite
 * @param {Async} asyncHandler
 * @returns {Promise.<String>}
 */
function saveFile(path, fileName, fileContent, overwrite, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Missing value for the "path" argument. The argument must contain a string value');
  }

  if (!fileName || !_utils2.default.isString(fileName)) {
    throw new Error('Missing value for the "fileName" argument. The argument must contain a string value');
  }

  if (overwrite instanceof _async2.default) {
    asyncHandler = overwrite;
    overwrite = undefined;
  }

  fileContent = toByteArray(fileContent);

  if (getContentSize(fileContent) > MAX_CONTENT_SIZE) {
    throw new Error('File Content size must be less than ' + MAX_CONTENT_SIZE + ' bytes');
  }

  return (0, _send.sendFile)({
    overwrite: overwrite,
    path: path,
    fileName: fileName,
    file: fileContent,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = upload;

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _send = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFileName = function getFileName(file) {
  if (file.name) {
    return file.name;
  }

  if (file.path) {
    var path = file.path.split('/');
    return path[path.length - 1]; //last item of the file path
  }
};

/**
 * @param {File} file
 * @param {String} path
 * @param {Boolean} overwrite
 * @param {Async} asyncHandler
 * @returns {Promise.<String>}
 */
function upload(file, path, overwrite, asyncHandler) {
  var fileName = getFileName(file);

  if (!fileName) {
    throw new Error('Wrong type of the file source object. Can not get file name');
  }

  if (overwrite instanceof _async2.default) {
    asyncHandler = overwrite;
    overwrite = undefined;
  }

  return (0, _send.sendFile)({
    overwrite: overwrite,
    path: path,
    fileName: fileName,
    file: file,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listing = listing;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listing(path, pattern, recursively, pagesize, offset, asyncHandler) {
  if (offset instanceof _async2.default) {
    asyncHandler = offset;
    offset = undefined;
  } else if (pagesize instanceof _async2.default) {
    asyncHandler = pagesize;
    pagesize = undefined;
    offset = undefined;
  } else if (recursively instanceof _async2.default) {
    asyncHandler = recursively;
    recursively = undefined;
    pagesize = undefined;
    offset = undefined;
  } else if (pattern instanceof _async2.default) {
    asyncHandler = pattern;
    pattern = undefined;
    recursively = undefined;
    pagesize = undefined;
    offset = undefined;
  }

  var query = {};

  if (_utils2.default.isString(pattern)) {
    query.pattern = pattern;
  }

  if (_utils2.default.isBoolean(recursively)) {
    query.sub = recursively;
  }

  if (_utils2.default.isNumber(pagesize)) {
    query.pagesize = pagesize;
  }

  if (_utils2.default.isNumber(offset)) {
    query.offset = offset;
  }

  return _request2.default.get({
    url: _urls2.default.filePath(path),
    query: query,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameFile = renameFile;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils3 = __webpack_require__(24);

var _utils4 = _interopRequireDefault(_utils3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renameFile(oldPathName, newName, asyncHandler) {
  if (!oldPathName || !_utils2.default.isString(oldPathName)) {
    throw new Error('Old File "path" must not be empty and must be String');
  }

  if (!newName || !_utils2.default.isString(newName)) {
    throw new Error('New File "path" must not be empty and must be String');
  }

  var parameters = {
    oldPathName: _utils4.default.ensureSlashInPath(oldPathName),
    newName: newName
  };

  return _request2.default.put({
    url: _urls2.default.fileRename(),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveFile = moveFile;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moveFile(sourcePath, targetPath, asyncHandler) {
  var parameters = {
    sourcePath: _utils2.default.ensureSlashInPath(sourcePath),
    targetPath: _utils2.default.ensureSlashInPath(targetPath)
  };

  return _request2.default.put({
    url: _urls2.default.fileMove(),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRemoteUrl = function isRemoteUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
};

function remove(path, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('File "path" must not be empty and must be String');
  }

  _request2.default.delete({
    url: isRemoteUrl(path) ? path : _urls2.default.filePath(path),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyFile = copyFile;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function copyFile(sourcePath, targetPath, asyncHandler) {
  var parameters = {
    sourcePath: _utils2.default.ensureSlashInPath(sourcePath),
    targetPath: _utils2.default.ensureSlashInPath(targetPath)
  };

  return _request2.default.put({
    url: _urls2.default.fileCopy(),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = exists;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exists(path, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Files "path" must not be empty and must be String');
  }

  return _request2.default.get({
    url: _urls2.default.filePath(path),
    query: { action: 'exists' },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDirectory = removeDirectory;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeDirectory(path, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Directory "path" must not be empty and must be String');
  }

  _request2.default.delete({
    url: _urls2.default.filePath(path),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileCount = getFileCount;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFileCount(path, pattern, recursive, countDirectories, asyncHandler) {

  if (countDirectories instanceof _async2.default) {
    asyncHandler = countDirectories;
    countDirectories = undefined;
  } else if (recursive instanceof _async2.default) {
    asyncHandler = recursive;
    recursive = undefined;
    countDirectories = undefined;
  } else if (pattern instanceof _async2.default) {
    asyncHandler = pattern;
    pattern = undefined;
    recursive = undefined;
    countDirectories = undefined;
  }

  var query = {
    action: 'count',
    pattern: pattern !== undefined ? pattern : '*',
    recursive: !!recursive,
    countDirectories: !!countDirectories
  };

  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Files "path" must not be empty and must be String');
  }

  if (!query.pattern || !_utils2.default.isString(query.pattern)) {
    throw new Error('Files "path" must not be empty and must be String');
  }

  return _request2.default.get({
    url: _urls2.default.filePath(path),
    query: query,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initApp = initApp;

var _localVars = __webpack_require__(8);

var _localVars2 = _interopRequireDefault(_localVars);

var _collector = __webpack_require__(15);

var _collector2 = _interopRequireDefault(_collector);

var _trackerMonitor = __webpack_require__(35);

var _trackerMonitor2 = _interopRequireDefault(_trackerMonitor);

var _data = __webpack_require__(16);

var _data2 = _interopRequireDefault(_data);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initApp(appId, secretKey) {
  _collector2.default.reset();
  _trackerMonitor2.default.reset();

  //TODO: remove it
  _data2.default.reset();

  (0, _currentUser.setLocalCurrentUser)();

  _localVars2.default.applicationId = appId;
  _localVars2.default.secretKey = secretKey;
  _localVars2.default.appPath = [_localVars2.default.serverURL, appId, secretKey].join('/');
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserAgent = getUserAgent;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUserAgent() {
  var ua = 'NodeJS';

  if (_utils2.default.isBrowser) {
    ua = navigator.userAgent ? navigator.userAgent.toLowerCase() : 'hybrid-app';
  }

  var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

  var matched = {
    browser: match[1] || '',
    version: match[2] || '0'
  };

  var browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }

  return browser;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless.js.map