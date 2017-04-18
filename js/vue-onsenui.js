/*! vue-onsenui v2.0.0-beta.2 - Tue Apr 18 2017 16:03:12 GMT+0900 (JST) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("onsenui"));
	else if(typeof define === 'function' && define.amd)
		define("VueOnsen", ["onsenui"], factory);
	else if(typeof exports === 'object')
		exports["VueOnsen"] = factory(require("onsenui"));
	else
		root["VueOnsen"] = factory(root["ons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_55__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _components = __webpack_require__(36);
	
	var components = _interopRequireWildcard(_components);
	
	var _directives = __webpack_require__(125);
	
	var directives = _interopRequireWildcard(_directives);
	
	var _util = __webpack_require__(53);
	
	var _onsenui = __webpack_require__(55);
	
	var _onsenui2 = _interopRequireDefault(_onsenui);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var register = function register(Vue, type, items) {
	  (0, _keys2.default)(items).forEach(function (key) {
	    var value = items[key];
	    key = (0, _util.hyphenate)(key);
	    Vue[type](key, value);
	  });
	};
	
	var install = function install(Vue) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  register(Vue, 'component', components);
	
	  register(Vue, 'directive', directives);
	
	  if (!Vue.config.silent) {
	    Vue.mixin({
	      beforeCreate: function beforeCreate() {
	        if (this.$options.template) {
	          var match = this.$options.template.match(/<(ons-[\w-]+)/im);
	
	          if (match) {
	            var location = this.$options._componentTag ? ' in component <' + this.$options._componentTag + '>' : '';
	            _onsenui2.default._util.warn('[vue-onsenui] Vue templates must not contain <ons-*> elements directly.\n' + ('<' + match[1] + '> element found near index ' + match.index + location + '. Please use <v-' + match[1] + '> instead:\n              ' + this.$options.template));
	          }
	        }
	      }
	    });
	  }
	
	  Vue.prototype.$ons = (0, _keys2.default)(_onsenui2.default).filter(function (k) {
	    return [/^enable/, /^disable/, /^set/, /animit/, /Element$/, /fastClick/, /GestureDetector/, /notification/, /orientation/, /platform/, /ready/].some(function (t) {
	      return k.match(t);
	    });
	  }).reduce(function (r, k) {
	    r[k] = _onsenui2.default[k];
	    return r;
	  }, { _ons: _onsenui2.default });
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use({ install: install });
	}
	
	exports.default = install;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);
	
	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VOnsModal = exports.VOnsDialog = exports.VOnsPage = exports.VOnsFab = exports.VOnsSplitter = exports.VOnsPullHook = exports.VOnsSplitterContent = exports.VOnsSplitterMask = exports.VOnsCarouselItem = exports.VOnsProgressCircular = exports.VOnsProgressBar = exports.VOnsCol = exports.VOnsRow = exports.VOnsRipple = exports.VOnsListHeader = exports.VOnsListItem = exports.VOnsList = exports.VOnsSpeedDialItem = exports.VOnsBottomToolbar = exports.VOnsSelect = exports.VOnsRange = exports.VOnsInput = exports.VOnsSwitch = exports.VOnsIcon = exports.VOnsButton = exports.VOnsToolbarButton = exports.VOnsToolbar = exports.VOnsLazyRepeat = exports.VOnsSplitterSide = exports.VOnsNavigator = exports.VOnsBackButton = exports.VOnsTabbar = exports.VOnsTab = exports.VOnsCarousel = exports.VOnsSpeedDial = exports.VOnsAlertDialog = exports.VOnsPopover = undefined;
	
	var _VOnsPopover = __webpack_require__(37);
	
	Object.defineProperty(exports, 'VOnsPopover', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsPopover).default;
	  }
	});
	
	var _VOnsAlertDialog = __webpack_require__(57);
	
	Object.defineProperty(exports, 'VOnsAlertDialog', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsAlertDialog).default;
	  }
	});
	
	var _VOnsSpeedDial = __webpack_require__(60);
	
	Object.defineProperty(exports, 'VOnsSpeedDial', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsSpeedDial).default;
	  }
	});
	
	var _VOnsCarousel = __webpack_require__(63);
	
	Object.defineProperty(exports, 'VOnsCarousel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsCarousel).default;
	  }
	});
	
	var _VOnsTab = __webpack_require__(66);
	
	Object.defineProperty(exports, 'VOnsTab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTab).default;
	  }
	});
	
	var _VOnsTabbar = __webpack_require__(69);
	
	Object.defineProperty(exports, 'VOnsTabbar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTabbar).default;
	  }
	});
	
	var _VOnsBackButton = __webpack_require__(76);
	
	Object.defineProperty(exports, 'VOnsBackButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsBackButton).default;
	  }
	});
	
	var _VOnsNavigator = __webpack_require__(79);
	
	Object.defineProperty(exports, 'VOnsNavigator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsNavigator).default;
	  }
	});
	
	var _VOnsSplitterSide = __webpack_require__(116);
	
	Object.defineProperty(exports, 'VOnsSplitterSide', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsSplitterSide).default;
	  }
	});
	
	var _VOnsLazyRepeat = __webpack_require__(119);
	
	Object.defineProperty(exports, 'VOnsLazyRepeat', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsLazyRepeat).default;
	  }
	});
	
	var _VGeneric = __webpack_require__(122);
	
	var _VGeneric2 = _interopRequireDefault(_VGeneric);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var extend = function extend(component) {
	  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  return { name: 'v-ons-' + component, mixins: mixins, extends: _VGeneric2.default };
	};
	
	var VOnsToolbar = exports.VOnsToolbar = extend('toolbar');
	var VOnsToolbarButton = exports.VOnsToolbarButton = extend('toolbar-button');
	var VOnsButton = exports.VOnsButton = extend('button');
	var VOnsIcon = exports.VOnsIcon = extend('icon');
	var VOnsSwitch = exports.VOnsSwitch = extend('switch');
	var VOnsInput = exports.VOnsInput = extend('input');
	var VOnsRange = exports.VOnsRange = extend('range');
	var VOnsSelect = exports.VOnsSelect = extend('select');
	var VOnsBottomToolbar = exports.VOnsBottomToolbar = extend('bottom-toolbar');
	var VOnsSpeedDialItem = exports.VOnsSpeedDialItem = extend('speed-dial-item');
	var VOnsList = exports.VOnsList = extend('list');
	var VOnsListItem = exports.VOnsListItem = extend('list-item');
	var VOnsListHeader = exports.VOnsListHeader = extend('list-header');
	var VOnsRipple = exports.VOnsRipple = extend('ripple');
	var VOnsRow = exports.VOnsRow = extend('row');
	var VOnsCol = exports.VOnsCol = extend('col');
	var VOnsProgressBar = exports.VOnsProgressBar = extend('progress-bar');
	var VOnsProgressCircular = exports.VOnsProgressCircular = extend('progress-circular');
	var VOnsCarouselItem = exports.VOnsCarouselItem = extend('carousel-item');
	var VOnsSplitterMask = exports.VOnsSplitterMask = extend('splitter-mask');
	var VOnsSplitterContent = exports.VOnsSplitterContent = extend('splitter-content');
	var VOnsPullHook = exports.VOnsPullHook = extend('pull-hook', [(0, _mixins.deriveHandler)('onAction')]);
	var VOnsSplitter = exports.VOnsSplitter = extend('splitter', [_mixins.selfProvider, _mixins.deriveDBB]);
	var VOnsFab = exports.VOnsFab = extend('fab', [_mixins.hidable]);
	var VOnsPage = exports.VOnsPage = extend('page', [_mixins.deriveDBB, (0, _mixins.deriveHandler)('onInfiniteScroll')]);
	var VOnsDialog = exports.VOnsDialog = extend('dialog', [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.deriveDBB, _mixins.portal]);
	var VOnsModal = exports.VOnsModal = extend('modal', [_mixins.hidable, _mixins.hasOptions, _mixins.deriveDBB, _mixins.portal]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(39),
	  /* template */
	  __webpack_require__(56),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle
	
	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.modifier, _mixins.deriveEvents, _mixins.deriveDBB, _mixins.portal],
	
	  props: {
	    target: {
	      validator: function validator(value) {
	        return value._isVue || typeof value === 'string' || value instanceof Event || value instanceof HTMLElement;
	      }
	    }
	  },
	
	  computed: {
	    normalizedTarget: function normalizedTarget() {
	      if (this.target && this.target._isVue) {
	        return this.target.$el;
	      }
	      return this.target;
	    },
	    normalizedOptions: function normalizedOptions() {
	      if (this.target) {
	        return (0, _extends3.default)({
	          target: this.normalizedTarget
	        }, this.options);
	      }
	      return this.options;
	    }
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(41);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(44)});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(6)
	  , gOPS     = __webpack_require__(45)
	  , pIE      = __webpack_require__(46)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 46 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _derive = __webpack_require__(48);
	
	Object.defineProperty(exports, 'deriveDBB', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveDBB;
	  }
	});
	Object.defineProperty(exports, 'deriveHandler', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveHandler;
	  }
	});
	Object.defineProperty(exports, 'deriveEvents', {
	  enumerable: true,
	  get: function get() {
	    return _derive.deriveEvents;
	  }
	});
	
	var _common = __webpack_require__(54);
	
	Object.defineProperty(exports, 'hidable', {
	  enumerable: true,
	  get: function get() {
	    return _common.hidable;
	  }
	});
	Object.defineProperty(exports, 'hasOptions', {
	  enumerable: true,
	  get: function get() {
	    return _common.hasOptions;
	  }
	});
	Object.defineProperty(exports, 'modifier', {
	  enumerable: true,
	  get: function get() {
	    return _common.modifier;
	  }
	});
	Object.defineProperty(exports, 'selfProvider', {
	  enumerable: true,
	  get: function get() {
	    return _common.selfProvider;
	  }
	});
	Object.defineProperty(exports, 'dialogCancel', {
	  enumerable: true,
	  get: function get() {
	    return _common.dialogCancel;
	  }
	});
	Object.defineProperty(exports, 'portal', {
	  enumerable: true,
	  get: function get() {
	    return _common.portal;
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deriveEvents = exports.deriveHandler = exports.deriveDBB = undefined;
	
	var _defineProperty2 = __webpack_require__(49);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _util = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _setupDBB = function _setupDBB(component) {
	  var dbb = 'onDeviceBackButton';
	
	  var handler = component[dbb] || component.$el[dbb] && component.$el[dbb]._callback || function (e) {
	    return e.callParentHandler();
	  };
	
	  component.$el[dbb] = function (event) {
	    var runDefault = true;
	
	    component.$emit((0, _util.handlerToProp)(dbb), (0, _extends3.default)({}, event, {
	      preventDefault: function preventDefault() {
	        return runDefault = false;
	      }
	    }));
	
	    runDefault && handler(event);
	  };
	
	  component._isDBBSetup = true;
	};
	
	var deriveDBB = {
	  mounted: function mounted() {
	    _setupDBB(this);
	  },
	  activated: function activated() {
	    this._isDBBSetup === false && _setupDBB(this);
	  },
	  deactivated: function deactivated() {
	    this._isDBBSetup === true && (this._isDBBSetup = false);
	  },
	  destroyed: function destroyed() {
	    this.$el.onDeviceBackButton && this.$el.onDeviceBackButton.destroy();
	  }
	};
	
	var deriveHandler = function deriveHandler(handlerName) {
	  var propName = (0, _util.handlerToProp)(handlerName);
	
	  return {
	    props: (0, _defineProperty3.default)({}, propName, {
	      type: Function,
	      default: null
	    }),
	
	    watch: (0, _defineProperty3.default)({}, propName, function () {
	      this.$el[handlerName] = this[propName];
	    }),
	
	    mounted: function mounted() {
	      this[propName] && (this.$el[handlerName] = this[propName]);
	    }
	  };
	};
	
	var deriveEvents = {
	  mounted: function mounted() {
	    var _this = this;
	
	    this._handlers = {};
	    this._boundEvents = this.$el.constructor.events || [];
	
	    this._boundEvents.forEach(function (key) {
	      _this._handlers[(0, _util.eventToHandler)(key)] = function (event) {
	        if (event.target === _this.$el || !/^ons-/i.test(event.target.tagName)) {
	          _this.$emit(key, event);
	        }
	      };
	      _this.$el.addEventListener(key, _this._handlers[(0, _util.eventToHandler)(key)]);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this2 = this;
	
	    this._boundEvents.forEach(function (key) {
	      _this2.$el.removeEventListener(key, _this2._handlers[(0, _util.eventToHandler)(key)]);
	    });
	    this._handlers = this._boundEvents = null;
	  }
	};
	
	exports.deriveDBB = deriveDBB;
	exports.deriveHandler = deriveHandler;
	exports.deriveEvents = deriveEvents;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(50);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var $Object = __webpack_require__(23).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(22);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(31), 'Object', {defineProperty: __webpack_require__(27).f});

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var hyphenate = exports.hyphenate = function hyphenate(string) {
	  return string.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
	};
	
	var camelize = exports.camelize = function camelize(string) {
	  return string.toLowerCase().replace(/-([a-z])/g, function (m, l) {
	    return l.toUpperCase();
	  });
	};
	
	var eventToHandler = exports.eventToHandler = function eventToHandler(name) {
	  return '_on' + name.charAt(0).toUpperCase() + name.slice(1);
	};
	
	var handlerToProp = exports.handlerToProp = function handlerToProp(name) {
	  return name.slice(2).charAt(0).toLowerCase() + name.slice(2).slice(1);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.portal = exports.dialogCancel = exports.selfProvider = exports.modifier = exports.hasOptions = exports.hidable = undefined;
	
	var _defineProperty2 = __webpack_require__(49);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _onsenui = __webpack_require__(55);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _toggleVisibility = function _toggleVisibility() {
	  if (this.visible !== this.$el.visible) {
	    this.$el[this.visible ? 'show' : 'hide'].call(this.$el, this.normalizedOptions || this.options);
	  }
	};
	
	var hidable = {
	  props: {
	    visible: {
	      type: Boolean,
	      default: undefined }
	  },
	
	  watch: {
	    visible: function visible() {
	      _toggleVisibility.call(this);
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$nextTick(function () {
	      if (typeof _this.visible === 'boolean') {
	        _toggleVisibility.call(_this);
	      }
	    });
	  }
	};
	
	var hasOptions = {
	  props: {
	    options: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  }
	};
	
	var modifier = {
	  props: {
	    modifier: {
	      type: String,
	      default: ''
	    }
	  },
	
	  methods: {
	    _updateModifier: function _updateModifier() {
	      var _this2 = this;
	
	      var preset = this._md ? ['material'] : [];
	
	      (this._previousModifier || '').split(/\s+/).concat(preset).forEach(function (m) {
	        return _onsenui._util.removeModifier(_this2.$el, m, { autoStyle: true });
	      });
	
	      this.modifier.trim().split(/\s+/).concat(preset).forEach(function (m) {
	        return m && _onsenui._util.addModifier(_this2.$el, m, { autoStyle: true });
	      });
	
	      this._previousModifier = this.modifier;
	    }
	  },
	
	  watch: {
	    modifier: function modifier() {
	      this._updateModifier();
	    }
	  },
	
	  mounted: function mounted() {
	    this._md = /^material$/.test(this.$el.getAttribute('modifier'));
	    this._updateModifier();
	  }
	};
	
	var selfProvider = {
	  provide: function provide() {
	    return (0, _defineProperty3.default)({}, this.$options._componentTag.slice(6), this);
	  }
	};
	
	var dialogCancel = {
	  mounted: function mounted() {
	    var _this3 = this;
	
	    this.$on('dialog-cancel', function () {
	      return _this3.$emit('update', false);
	    });
	  }
	};
	
	var portal = {
	  mounted: function mounted() {
	    document.body.appendChild(this.$el);
	  },
	  updated: function updated() {
	    !this._isDestroyed && document.body.appendChild(this.$el);
	  },
	  activated: function activated() {
	    !this._isDestroyed && document.body.appendChild(this.$el);
	  },
	  deactivated: function deactivated() {
	    this.$el.remove();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$el.remove();
	  }
	};
	
	exports.hidable = hidable;
	exports.hasOptions = hasOptions;
	exports.modifier = modifier;
	exports.selfProvider = selfProvider;
	exports.dialogCancel = dialogCancel;
	exports.portal = portal;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-popover', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  __webpack_require__(59),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hidable, _mixins.hasOptions, _mixins.dialogCancel, _mixins.modifier, _mixins.deriveEvents, _mixins.deriveDBB, _mixins.portal],
	
	  props: {
	    title: {
	      type: String
	    },
	    footer: {
	      type: Object,
	      validator: function validator(value) {
	        return (0, _keys2.default)(value).every(function (key) {
	          return value[key] instanceof Function;
	        });
	      }
	    }
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-alert-dialog', [_c('div', {
	    staticClass: "alert-dialog-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-content"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-footer"
	  }, [_vm._t("footer", _vm._l((_vm.footer), function(handler, key) {
	    return _c('button', {
	      key: key,
	      staticClass: "alert-dialog-button",
	      on: {
	        "click": handler
	      }
	    }, [_vm._v(_vm._s(key))])
	  }))], 2)])
	},staticRenderFns: []}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(62),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.deriveEvents, _mixins.hidable],
	
	  props: {
	    open: {
	      type: Boolean,
	      default: undefined
	    }
	  },
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault) {
	        this.$el.toggleItems();
	      }
	    },
	    _shouldUpdate: function _shouldUpdate() {
	      return this.open !== undefined && this.open !== this.$el.isOpen();
	    },
	    _updateToggle: function _updateToggle() {
	      this._shouldUpdate() && this.$el[this.open ? 'showItems' : 'hideItems'].call(this.$el);
	    }
	  },
	
	  watch: {
	    open: function open() {
	      this._updateToggle();
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$on(['open', 'close'], function () {
	      return _this._shouldUpdate() && _this.$emit('update', _this.$el.isOpen());
	    });
	
	    this._updateToggle();
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-speed-dial', {
	    domProps: {
	      "onClick": _vm.action
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(64),
	  /* template */
	  __webpack_require__(65),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.hasOptions, _mixins.deriveEvents],
	
	  props: {
	    index: {
	      type: Number
	    }
	  },
	
	  watch: {
	    index: function index() {
	      if (this.index !== this.$el.getActiveIndex()) {
	        this.$el.setActiveIndex(this.index, this.options);
	      }
	    }
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-carousel', {
	    attrs: {
	      "initial-index": _vm.index
	    },
	    on: {
	      "postchange": function($event) {
	        if ($event.target !== $event.currentTarget) { return null; }
	        _vm.$emit('update', $event.activeIndex)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(67),
	  /* template */
	  __webpack_require__(68),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  inject: ['tabbar'],
	
	  props: {
	    page: {},
	    active: {
	      type: Boolean
	    }
	  },
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault) {
	        this.tabbar.$el.setActiveTab(this.$el._findTabIndex(), this.tabbar.options);
	      }
	    }
	  },
	
	  watch: {
	    active: function active() {
	      this.active ? this.$el.setActive() : this.$el.setInactive();
	    }
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tab', {
	    attrs: {
	      "active": _vm.active
	    },
	    domProps: {
	      "onClick": _vm.action
	    }
	  })
	},staticRenderFns: []}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(70),
	  /* template */
	  __webpack_require__(75),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getOwnPropertyDescriptor = __webpack_require__(71);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.deriveEvents, _mixins.hasOptions, _mixins.hidable, _mixins.selfProvider],
	
	  props: {
	    index: {
	      type: Number
	    },
	    tabs: {
	      type: Array,
	      validator: function validator(value) {
	        return value.every(function (tab) {
	          return ['icon', 'label', 'page'].some(function (prop) {
	            return !!(0, _getOwnPropertyDescriptor2.default)(tab, prop);
	          });
	        });
	      }
	    }
	  },
	
	  watch: {
	    index: function index() {
	      if (this.index !== this.$el.getActiveTabIndex()) {
	        this.$el.setActiveTab(this.index, this.options);
	      }
	    }
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	var $Object = __webpack_require__(23).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(9)
	  , $getOwnPropertyDescriptor = __webpack_require__(74).f;
	
	__webpack_require__(21)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(46)
	  , createDesc     = __webpack_require__(35)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(34)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(31) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tabbar', {
	    attrs: {
	      "activeIndex": _vm.index
	    },
	    on: {
	      "postchange": function($event) {
	        if ($event.target !== $event.currentTarget) { return null; }
	        _vm.$emit('update', $event.index)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "tabbar__content"
	  }, [_vm._t("pages", _vm._l((_vm.tabs), function(tab) {
	    return _c(tab.page, {
	      key: (tab.key || tab.page),
	      tag: "component"
	    })
	  }))], 2), _vm._v(" "), _c('div', {
	    staticClass: "tabbar"
	  }, [_vm._t("default", _vm._l((_vm.tabs), function(tab) {
	    return _c('v-ons-tab', _vm._b({
	      key: (tab.key || tab)
	    }, 'v-ons-tab', tab))
	  }))], 2)])
	},staticRenderFns: []}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(77),
	  /* template */
	  __webpack_require__(78),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  inject: ['navigator'],
	
	  methods: {
	    action: function action() {
	      var runDefault = true;
	      this.$emit('click', { preventDefault: function preventDefault() {
	          return runDefault = false;
	        } });
	
	      if (runDefault && this.navigator.pageStack.length > 1) {
	        this.navigator.popPage();
	      }
	    }
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-back-button', {
	    domProps: {
	      "onClick": _vm.action
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(80),
	  /* template */
	  __webpack_require__(115),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(40);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _promise = __webpack_require__(81);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _mixins = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_mixins.hasOptions, _mixins.selfProvider, _mixins.deriveEvents, _mixins.deriveDBB],
	
	  props: {
	    pageStack: {
	      type: Array,
	      required: true
	    },
	    popPage: {
	      type: Function,
	      default: function _default() {
	        this.pageStack.pop();
	      }
	    }
	  },
	
	  methods: {
	    isReady: function isReady() {
	      if (this.hasOwnProperty('_ready') && this._ready instanceof _promise2.default) {
	        return this._ready;
	      }
	      return _promise2.default.resolve();
	    },
	    onDeviceBackButton: function onDeviceBackButton(event) {
	      if (this.pageStack.length > 1) {
	        this.popPage();
	      } else {
	        event.callParentHandler();
	      }
	    },
	    _setPagesVisibility: function _setPagesVisibility(start, end, visibility) {
	      for (var i = start; i < end - 1; i++) {
	        this.$children[i].$el.style.visibility = visibility;
	      }
	    },
	    _reattachPage: function _reattachPage(pageElement) {
	      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	      this.$el.insertBefore(pageElement, position);
	      pageElement._isShown = true;
	    },
	    _redetachPage: function _redetachPage(pageElement) {
	      pageElement._destroy();
	      return _promise2.default.resolve();
	    },
	    _animate: function _animate(_ref) {
	      var _this = this;
	
	      var lastLength = _ref.lastLength,
	          currentLength = _ref.currentLength,
	          lastTopPage = _ref.lastTopPage,
	          currentTopPage = _ref.currentTopPage;
	
	      if (currentLength > lastLength) {
	        var isReattached = false;
	        if (lastTopPage.parentElement !== this.$el) {
	          this._reattachPage(lastTopPage, this.$el.children[lastLength - 1]);
	          isReattached = true;
	          lastLength--;
	        }
	        this._setPagesVisibility(lastLength, currentLength, 'hidden');
	
	        return this.$el._pushPage((0, _extends3.default)({}, this.options, { leavePage: lastTopPage })).then(function () {
	          _this._setPagesVisibility(lastLength, currentLength, '');
	          if (isReattached) {
	            _this._redetachPage(lastTopPage);
	          }
	        });
	      }
	
	      if (currentLength < lastLength) {
	        this._reattachPage(lastTopPage, null);
	        return this.$el._popPage((0, _extends3.default)({}, this.options), function () {
	          return _this._redetachPage(lastTopPage);
	        });
	      }
	
	      this._reattachPage(lastTopPage, currentTopPage);
	      return this.$el._pushPage((0, _extends3.default)({}, this.options)).then(function () {
	        _this._redetachPage(lastTopPage);
	      });
	    }
	  },
	
	  watch: {
	    pageStack: function pageStack(after, before) {
	      var _this2 = this;
	
	      var propWasMutated = after === before;
	
	      var lastLength = propWasMutated ? this.$children.length : before.length;
	      var lastTopPage = this.$children[this.$children.length - 1].$el;
	
	      this.$nextTick(function () {
	        var currentLength = propWasMutated ? _this2.$children.length : after.length;
	        var currentTopPage = _this2.$children[_this2.$children.length - 1].$el;
	
	        if (currentTopPage !== lastTopPage) {
	          _this2._ready = _this2._animate({ lastLength: lastLength, currentLength: currentLength, lastTopPage: lastTopPage, currentTopPage: currentTopPage });
	        } else if (currentLength !== lastLength) {
	          currentTopPage.updateBackButton(currentLength > 1);
	        }
	
	        lastTopPage = currentTopPage = null;
	      });
	    }
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(97);
	__webpack_require__(101);
	module.exports = __webpack_require__(23).Promise;

/***/ },
/* 83 */
/***/ function(module, exports) {



/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(85)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(86)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(87)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(88)
	  , hide           = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(89)
	  , $iterCreate    = __webpack_require__(90)
	  , setToStringTag = __webpack_require__(94)
	  , getPrototypeOf = __webpack_require__(96)
	  , ITERATOR       = __webpack_require__(95)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(91)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(94)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(26)(IteratorPrototype, __webpack_require__(95)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(28)
	  , dPs         = __webpack_require__(92)
	  , enumBugKeys = __webpack_require__(20)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(33)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(93).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(27)
	  , anObject = __webpack_require__(28)
	  , getKeys  = __webpack_require__(6);
	
	module.exports = __webpack_require__(31) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(27).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(95)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(17)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(18).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	var global        = __webpack_require__(18)
	  , hide          = __webpack_require__(26)
	  , Iterators     = __webpack_require__(89)
	  , TO_STRING_TAG = __webpack_require__(95)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(99)
	  , step             = __webpack_require__(100)
	  , Iterators        = __webpack_require__(89)
	  , toIObject        = __webpack_require__(9);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(86)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(87)
	  , global             = __webpack_require__(18)
	  , ctx                = __webpack_require__(24)
	  , classof            = __webpack_require__(102)
	  , $export            = __webpack_require__(22)
	  , isObject           = __webpack_require__(29)
	  , aFunction          = __webpack_require__(25)
	  , anInstance         = __webpack_require__(103)
	  , forOf              = __webpack_require__(104)
	  , speciesConstructor = __webpack_require__(108)
	  , task               = __webpack_require__(109).set
	  , microtask          = __webpack_require__(111)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(95)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(112)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(94)($Promise, PROMISE);
	__webpack_require__(113)(PROMISE);
	Wrapper = __webpack_require__(23)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(114)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(95)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(24)
	  , call        = __webpack_require__(105)
	  , isArrayIter = __webpack_require__(106)
	  , anObject    = __webpack_require__(28)
	  , toLength    = __webpack_require__(13)
	  , getIterFn   = __webpack_require__(107)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(28);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(89)
	  , ITERATOR   = __webpack_require__(95)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(102)
	  , ITERATOR  = __webpack_require__(95)('iterator')
	  , Iterators = __webpack_require__(89);
	module.exports = __webpack_require__(23).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(28)
	  , aFunction = __webpack_require__(25)
	  , SPECIES   = __webpack_require__(95)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(24)
	  , invoke             = __webpack_require__(110)
	  , html               = __webpack_require__(93)
	  , cel                = __webpack_require__(33)
	  , global             = __webpack_require__(18)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(11)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , macrotask = __webpack_require__(109).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(11)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(26);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(18)
	  , core        = __webpack_require__(23)
	  , dP          = __webpack_require__(27)
	  , DESCRIPTORS = __webpack_require__(31)
	  , SPECIES     = __webpack_require__(95)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(95)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-navigator', [_vm._t("default", _vm._l((_vm.pageStack), function(page) {
	    return _c(page, {
	      key: page,
	      tag: "component"
	    })
	  }))], 2)
	},staticRenderFns: []}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(117),
	  /* template */
	  __webpack_require__(118),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.hasOptions, _mixins.deriveEvents],
	
	  props: {
	    open: {
	      type: Boolean,
	      default: undefined
	    }
	  },
	
	  methods: {
	    action: function action() {
	      this._shouldUpdate() && this.$el[this.open ? 'open' : 'close'].call(this.$el, this.options).catch(function () {});
	    },
	    _shouldUpdate: function _shouldUpdate() {
	      return this.open !== undefined && this.open !== this.$el.isOpen;
	    }
	  },
	
	  watch: {
	    open: function open() {
	      this.action();
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$on(['postopen', 'postclose'], function () {
	      return _this._shouldUpdate() && _this.$emit('update', _this.$el.isOpen);
	    });
	
	    this.action();
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-splitter-side', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(120),
	  /* template */
	  __webpack_require__(121),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    renderItem: {
	      type: Function,
	      required: true,
	      validator: function validator(value) {
	        var component = value(0);
	        if (component._isVue && !component._isMounted) {
	          component.$destroy();
	          return true;
	        }
	        return false;
	      }
	    },
	    length: {
	      type: Number,
	      required: true
	    },
	    calculateItemHeight: {
	      type: Function,
	      default: undefined
	    }
	  },
	
	  data: function data() {
	    return {
	      provider: null
	    };
	  },
	
	
	  methods: {
	    _setup: function _setup() {
	      var _this = this;
	
	      this.provider && this.provider.destroy();
	
	      var delegate = new this.$ons._ons._internal.LazyRepeatDelegate({
	        calculateItemHeight: this.calculateItemHeight,
	        createItemContent: function createItemContent(i) {
	          return _this.renderItem(i).$mount().$el;
	        },
	        destroyItem: function destroyItem(i, _ref) {
	          var element = _ref.element;
	          return element.__vue__.$destroy();
	        },
	        countItems: function countItems() {
	          return _this.length;
	        }
	      }, null);
	
	      this.provider = new this.$ons._ons._internal.LazyRepeatProvider(this.$parent.$el, delegate);
	    },
	    refresh: function refresh() {
	      return this.provider.refresh();
	    }
	  },
	
	  watch: {
	    renderItem: function renderItem() {
	      this._setup();
	    },
	    length: function length() {
	      this._setup();
	    },
	    calculateItemHeight: function calculateItemHeight() {
	      this._setup();
	    }
	  },
	
	  mounted: function mounted() {
	    this._setup();
	    this.$vnode.context.$on('refresh', this.refresh);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$vnode.context.$off('refresh', this.refresh);
	
	    this.$el._lazyRepeatProvider = this.provider;
	    this.provider = null;
	  }
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-lazy-repeat')
	},staticRenderFns: []}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(38)(
	  /* script */
	  __webpack_require__(123),
	  /* template */
	  __webpack_require__(124),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mixins = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_mixins.modifier, _mixins.deriveEvents]
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c(_vm.$options._componentTag.slice(2), {
	    tag: "component",
	    on: {
	      "click": function($event) {
	        _vm.$emit('click', $event)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VOnsModel = __webpack_require__(126);
	
	Object.defineProperty(exports, 'OnsModel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsModel).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var _getModel = function _getModel(modelPath, context, newValue) {
	  var path = modelPath.trim().split('.');
	  var lastKey = path.pop();
	
	  var key = void 0,
	      model = context;
	  while (key = path.shift()) {
	    model = model[key];
	  }
	
	  if (newValue !== undefined && model[lastKey] !== newValue) {
	    model[lastKey] = newValue;
	  }
	
	  return model[lastKey];
	};
	
	var _setModel = _getModel;
	
	var _formatOutput = function _formatOutput() {
	  var modifiers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var output = arguments[1];
	
	  if (Object.hasOwnProperty.call(modifiers, 'number')) {
	    return Number(output);
	  }
	  if (Object.hasOwnProperty.call(modifiers, 'trim')) {
	    return output.trim();
	  }
	  return output;
	};
	
	var _bindOn = function _bindOn(eventName, modelKey, vnode, handler) {
	  if (vnode.context.hasOwnProperty(modelKey.split('.')[0])) {
	    vnode.child.$on(eventName, handler);
	  }
	};
	
	var _bindSimpleInputOn = function _bindSimpleInputOn(eventName, modelKey, vnode, propName) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    _setModel(modelKey, vnode.context, event.target[propName]);
	  });
	};
	
	var _bindModifierInputOn = function _bindModifierInputOn(eventName, modelKey, vnode, modifiers) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    _setModel(modelKey, vnode.context, _formatOutput(modifiers, event.target.value));
	  });
	};
	
	var _bindArrayInputOn = function _bindArrayInputOn(eventName, modelKey, vnode) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    var modelValue = _getModel(modelKey, vnode.context);
	    if (modelValue.indexOf(event.target.value) >= 0) {
	      !event.target.checked && modelValue.splice(modelValue.indexOf(event.target.value), 1);
	    } else {
	      event.target.checked && modelValue.push(event.target.value);
	    }
	  });
	};
	
	var _bindCheckbox = function _bindCheckbox(el, binding, vnode, modelKey) {
	  if (binding.value instanceof Array) {
	    el.checked = binding.value.indexOf(el.value) >= 0;
	    _bindArrayInputOn('change', modelKey, vnode);
	  } else {
	    el.checked = !!binding.value;
	    _bindSimpleInputOn('change', modelKey, vnode, 'checked');
	  }
	};
	
	var _updateCheckbox = function _updateCheckbox(el, binding, vnode, modelKey) {
	  if (binding.value instanceof Array) {
	    el.checked = (_getModel(modelKey, vnode.context) || []).indexOf(el.value) >= 0;
	  } else {
	    el.checked = !!binding.value;
	  }
	};
	
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var modelKey = binding.expression.trim();
	    var tag = el.tagName.toLowerCase();
	
	    switch (tag) {
	      case 'ons-select':
	        el.querySelector('option[value=' + binding.value + ']').setAttribute('selected', 'selected');
	        _bindSimpleInputOn('change', modelKey, vnode, 'value');
	        break;
	
	      case 'ons-switch':
	        _bindCheckbox(el, binding, vnode, modelKey);
	        break;
	
	      case 'ons-range':
	        el.value = binding.value;
	        _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', modelKey, vnode, binding.modifiers);
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = el.value === binding.value;
	            _bindSimpleInputOn('change', modelKey, vnode, 'value');
	            break;
	
	          case 'checkbox':
	            _bindCheckbox(el, binding, vnode, modelKey);
	            break;
	
	          default:
	            el.value = binding.value;
	            _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', modelKey, vnode, binding.modifiers);
	        }
	        break;
	
	      default:
	        throw new Error('"v-ons-model" directive cannot be used with "' + tag + '" element.');
	    }
	  },
	  update: function update(el, binding, vnode) {
	    var modelKey = binding.expression.trim();
	    var tag = el.tagName.toLowerCase();
	
	    switch (tag) {
	      case 'ons-select':
	        el.querySelectorAll('option').forEach(function (option) {
	          option.value == binding.value ? option.setAttribute('selected', 'selected') : option.removeAttribute('selected');
	        });
	        break;
	
	      case 'ons-switch':
	        _updateCheckbox(el, binding, vnode, modelKey);
	        break;
	
	      case 'ons-range':
	        el.value = binding.value;
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = _getModel(modelKey, vnode.context) === el.value;
	            break;
	
	          case 'checkbox':
	            _updateCheckbox(el, binding, vnode, modelKey);
	            break;
	
	          default:
	            el.value !== binding.value && (el.value = binding.value);
	        }
	        break;
	    }
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4N2U1YTYyNjlkMzIwNmJhMmU0MiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9WT25zUG9wb3Zlci52dWUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2Rlcml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJuYWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwib25zXCIsXCJjb21tb25qc1wiOlwib25zZW51aVwiLFwiY29tbW9uanMyXCI6XCJvbnNlbnVpXCIsXCJhbWRcIjpcIm9uc2VudWlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1BvcG92ZXIudnVlPzYzYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0FsZXJ0RGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vVk9uc0FsZXJ0RGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WT25zQWxlcnREaWFsb2cudnVlP2E2NWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1NwZWVkRGlhbC52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNTcGVlZERpYWwudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNTcGVlZERpYWwudnVlP2QzMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vVk9uc0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WT25zQ2Fyb3VzZWwudnVlPzQ5ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYi52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNUYWIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlP2QzN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNUYWJiYXIudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWJiYXIudnVlPzkwMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlIiwid2VicGFjazovLy9WT25zQmFja0J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0JhY2tCdXR0b24udnVlP2FmNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc05hdmlnYXRvci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNOYXZpZ2F0b3IudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNOYXZpZ2F0b3IudnVlP2M5MzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1NwbGl0dGVyU2lkZS52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNTcGxpdHRlclNpZGUudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNTcGxpdHRlclNpZGUudnVlP2FmNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlIiwid2VicGFjazovLy9WT25zTGF6eVJlcGVhdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0xhenlSZXBlYXQudnVlP2ZkYTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlIiwid2VicGFjazovLy9WR2VuZXJpYy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlP2RhNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvVk9uc01vZGVsLmpzIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJkaXJlY3RpdmVzIiwicmVnaXN0ZXIiLCJWdWUiLCJ0eXBlIiwiaXRlbXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJpbnN0YWxsIiwicGFyYW1zIiwiY29uZmlnIiwic2lsZW50IiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCIkb3B0aW9ucyIsInRlbXBsYXRlIiwibWF0Y2giLCJsb2NhdGlvbiIsIl9jb21wb25lbnRUYWciLCJfdXRpbCIsIndhcm4iLCJpbmRleCIsInByb3RvdHlwZSIsIiRvbnMiLCJmaWx0ZXIiLCJzb21lIiwiayIsInQiLCJyZWR1Y2UiLCJyIiwiX29ucyIsIndpbmRvdyIsInVzZSIsImRlZmF1bHQiLCJleHRlbmQiLCJjb21wb25lbnQiLCJtaXhpbnMiLCJuYW1lIiwiZXh0ZW5kcyIsIlZPbnNUb29sYmFyIiwiVk9uc1Rvb2xiYXJCdXR0b24iLCJWT25zQnV0dG9uIiwiVk9uc0ljb24iLCJWT25zU3dpdGNoIiwiVk9uc0lucHV0IiwiVk9uc1JhbmdlIiwiVk9uc1NlbGVjdCIsIlZPbnNCb3R0b21Ub29sYmFyIiwiVk9uc1NwZWVkRGlhbEl0ZW0iLCJWT25zTGlzdCIsIlZPbnNMaXN0SXRlbSIsIlZPbnNMaXN0SGVhZGVyIiwiVk9uc1JpcHBsZSIsIlZPbnNSb3ciLCJWT25zQ29sIiwiVk9uc1Byb2dyZXNzQmFyIiwiVk9uc1Byb2dyZXNzQ2lyY3VsYXIiLCJWT25zQ2Fyb3VzZWxJdGVtIiwiVk9uc1NwbGl0dGVyTWFzayIsIlZPbnNTcGxpdHRlckNvbnRlbnQiLCJWT25zUHVsbEhvb2siLCJWT25zU3BsaXR0ZXIiLCJWT25zRmFiIiwiVk9uc1BhZ2UiLCJWT25zRGlhbG9nIiwiVk9uc01vZGFsIiwiZGVyaXZlREJCIiwiZGVyaXZlSGFuZGxlciIsImRlcml2ZUV2ZW50cyIsImhpZGFibGUiLCJoYXNPcHRpb25zIiwibW9kaWZpZXIiLCJzZWxmUHJvdmlkZXIiLCJkaWFsb2dDYW5jZWwiLCJwb3J0YWwiLCJfc2V0dXBEQkIiLCJkYmIiLCJoYW5kbGVyIiwiJGVsIiwiX2NhbGxiYWNrIiwiZSIsImNhbGxQYXJlbnRIYW5kbGVyIiwicnVuRGVmYXVsdCIsIiRlbWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9pc0RCQlNldHVwIiwibW91bnRlZCIsImFjdGl2YXRlZCIsImRlYWN0aXZhdGVkIiwiZGVzdHJveWVkIiwib25EZXZpY2VCYWNrQnV0dG9uIiwiZGVzdHJveSIsInByb3BOYW1lIiwiaGFuZGxlck5hbWUiLCJwcm9wcyIsIkZ1bmN0aW9uIiwid2F0Y2giLCJfaGFuZGxlcnMiLCJfYm91bmRFdmVudHMiLCJjb25zdHJ1Y3RvciIsImV2ZW50cyIsInRhcmdldCIsInRlc3QiLCJ0YWdOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaHlwaGVuYXRlIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY2FtZWxpemUiLCJtIiwibCIsInRvVXBwZXJDYXNlIiwiZXZlbnRUb0hhbmRsZXIiLCJjaGFyQXQiLCJzbGljZSIsImhhbmRsZXJUb1Byb3AiLCJfdG9nZ2xlVmlzaWJpbGl0eSIsInZpc2libGUiLCJjYWxsIiwibm9ybWFsaXplZE9wdGlvbnMiLCJvcHRpb25zIiwiQm9vbGVhbiIsInVuZGVmaW5lZCIsIiRuZXh0VGljayIsIk9iamVjdCIsIlN0cmluZyIsIm1ldGhvZHMiLCJfdXBkYXRlTW9kaWZpZXIiLCJwcmVzZXQiLCJfbWQiLCJfcHJldmlvdXNNb2RpZmllciIsInNwbGl0IiwiY29uY2F0IiwicmVtb3ZlTW9kaWZpZXIiLCJhdXRvU3R5bGUiLCJ0cmltIiwiYWRkTW9kaWZpZXIiLCJnZXRBdHRyaWJ1dGUiLCJwcm92aWRlIiwiJG9uIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGVkIiwiX2lzRGVzdHJveWVkIiwicmVtb3ZlIiwiX2dldE1vZGVsIiwibW9kZWxQYXRoIiwiY29udGV4dCIsIm5ld1ZhbHVlIiwicGF0aCIsImxhc3RLZXkiLCJwb3AiLCJtb2RlbCIsInNoaWZ0IiwiX3NldE1vZGVsIiwiX2Zvcm1hdE91dHB1dCIsIm1vZGlmaWVycyIsIm91dHB1dCIsImhhc093blByb3BlcnR5IiwiTnVtYmVyIiwiX2JpbmRPbiIsImV2ZW50TmFtZSIsIm1vZGVsS2V5Iiwidm5vZGUiLCJjaGlsZCIsIl9iaW5kU2ltcGxlSW5wdXRPbiIsIl9iaW5kTW9kaWZpZXJJbnB1dE9uIiwiX2JpbmRBcnJheUlucHV0T24iLCJtb2RlbFZhbHVlIiwiaW5kZXhPZiIsImNoZWNrZWQiLCJzcGxpY2UiLCJwdXNoIiwiX2JpbmRDaGVja2JveCIsImVsIiwiYmluZGluZyIsIkFycmF5IiwiX3VwZGF0ZUNoZWNrYm94IiwiYmluZCIsImV4cHJlc3Npb24iLCJ0YWciLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiRXJyb3IiLCJ1cGRhdGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9uIiwicmVtb3ZlQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEc7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLHdDQUF1QyxvQkFBb0IsRUFBRTtBQUM3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LEtBQStCNEssR0FBRzVLLEtBQUgsR0FBVzZLLFFBQVE3SyxLQUFsRDtBQVZKO0FBWUE7QUExQko7QUE0QkQ7QUFuRlksRSIsImZpbGUiOiJ2dWUtb25zZW51aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm9uc2VudWlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJWdWVPbnNlblwiLCBbXCJvbnNlbnVpXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZ1ZU9uc2VuXCJdID0gZmFjdG9yeShyZXF1aXJlKFwib25zZW51aVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiVnVlT25zZW5cIl0gPSBmYWN0b3J5KHJvb3RbXCJvbnNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81NV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg3ZTVhNjI2OWQzMjA2YmEyZTQyIiwiaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgZGlyZWN0aXZlcyBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgaHlwaGVuYXRlIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsJztcblxuaW1wb3J0IG9ucyBmcm9tICdvbnNlbnVpJztcblxuY29uc3QgcmVnaXN0ZXIgPSAoVnVlLCB0eXBlLCBpdGVtcykgPT4ge1xuICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBpdGVtc1trZXldO1xuICAgIGtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgIFZ1ZVt0eXBlXShrZXksIHZhbHVlKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbnN0YWxsID0gKFZ1ZSwgcGFyYW1zID0ge30pID0+IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGNvbXBvbmVudHMgb2YgdnVlLW9uc2VudWkuXG4gICAqL1xuICByZWdpc3RlcihWdWUsICdjb21wb25lbnQnLCBjb21wb25lbnRzKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgZGlyZWN0aXZlcyBvZiB2dWUtb25zZW51aS5cbiAgICovXG4gIHJlZ2lzdGVyKFZ1ZSwgJ2RpcmVjdGl2ZScsIGRpcmVjdGl2ZXMpO1xuXG4gIC8qKlxuICAgKiBBcHBseSBhIG1peGluIGdsb2JhbGx5IHRvIHByZXZlbnQgb25zLSogZWxlbWVudHNcbiAgICogZnJvbSBiZWluZyBpbmNsdWRlZCBkaXJlY3RseSBpbiBWdWUgaW5zdGFuY2UgdGVtcGxhdGVzLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGFmZmVjdHMgZXZlcnkgVnVlIGluc3RhbmNlIG9ubHkgd2hlbiB3YXJuc1xuICAgKiBhcmUgYWxsb3dlZCBieSBWdWUuXG4gICAqL1xuICBpZiAoIVZ1ZS5jb25maWcuc2lsZW50KSB7XG4gICAgVnVlLm1peGluKHtcbiAgICAgIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMuJG9wdGlvbnMudGVtcGxhdGUubWF0Y2goLzwob25zLVtcXHctXSspL2ltKTtcblxuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLiRvcHRpb25zLl9jb21wb25lbnRUYWcgPyBgIGluIGNvbXBvbmVudCA8JHt0aGlzLiRvcHRpb25zLl9jb21wb25lbnRUYWd9PmAgOiAnJztcbiAgICAgICAgICAgIG9ucy5fdXRpbC53YXJuKCdbdnVlLW9uc2VudWldIFZ1ZSB0ZW1wbGF0ZXMgbXVzdCBub3QgY29udGFpbiA8b25zLSo+IGVsZW1lbnRzIGRpcmVjdGx5LlxcbicgK1xuICAgICAgICAgICAgICBgPCR7bWF0Y2hbMV19PiBlbGVtZW50IGZvdW5kIG5lYXIgaW5kZXggJHttYXRjaC5pbmRleH0ke2xvY2F0aW9ufS4gUGxlYXNlIHVzZSA8di0ke21hdGNoWzFdfT4gaW5zdGVhZDpcbiAgICAgICAgICAgICAgJHt0aGlzLiRvcHRpb25zLnRlbXBsYXRlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3NlIG9ucyBvYmplY3QuXG4gICAqL1xuICBWdWUucHJvdG90eXBlLiRvbnMgPSBPYmplY3Qua2V5cyhvbnMpXG4gICAgLmZpbHRlcihrID0+IFtcbiAgICAgIC9eZW5hYmxlLyxcbiAgICAgIC9eZGlzYWJsZS8sXG4gICAgICAvXnNldC8sXG4gICAgICAvYW5pbWl0LyxcbiAgICAgIC9FbGVtZW50JC8sXG4gICAgICAvZmFzdENsaWNrLyxcbiAgICAgIC9HZXN0dXJlRGV0ZWN0b3IvLFxuICAgICAgL25vdGlmaWNhdGlvbi8sXG4gICAgICAvb3JpZW50YXRpb24vLFxuICAgICAgL3BsYXRmb3JtLyxcbiAgICAgIC9yZWFkeS8sXG4gICAgXS5zb21lKHQgPT4gay5tYXRjaCh0KSkpXG4gICAgLnJlZHVjZSgociwgaykgPT4ge1xuICAgICAgcltrXSA9IG9uc1trXTtcbiAgICAgIHJldHVybiByO1xuICAgIH0sIHsgX29uczogb25zIH0pO1xufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2Uoe2luc3RhbGx9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRrZXlzICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNQb3BvdmVyIH0gZnJvbSAnLi9WT25zUG9wb3Zlci52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zQWxlcnREaWFsb2cgfSBmcm9tICcuL1ZPbnNBbGVydERpYWxvZy52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zU3BlZWREaWFsIH0gZnJvbSAnLi9WT25zU3BlZWREaWFsLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNDYXJvdXNlbCB9IGZyb20gJy4vVk9uc0Nhcm91c2VsLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNUYWIgfSBmcm9tICcuL1ZPbnNUYWIudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc1RhYmJhciB9IGZyb20gJy4vVk9uc1RhYmJhci52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zQmFja0J1dHRvbiB9IGZyb20gJy4vVk9uc0JhY2tCdXR0b24udnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc05hdmlnYXRvciB9IGZyb20gJy4vVk9uc05hdmlnYXRvci52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zU3BsaXR0ZXJTaWRlIH0gZnJvbSAnLi9WT25zU3BsaXR0ZXJTaWRlLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNMYXp5UmVwZWF0IH0gZnJvbSAnLi9WT25zTGF6eVJlcGVhdC52dWUnO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbmltcG9ydCBWR2VuZXJpYyBmcm9tICcuL1ZHZW5lcmljLnZ1ZSc7XG5pbXBvcnQgeyBoaWRhYmxlLCBoYXNPcHRpb25zLCBkaWFsb2dDYW5jZWwsIGRlcml2ZURCQiwgZGVyaXZlSGFuZGxlciwgc2VsZlByb3ZpZGVyLCBwb3J0YWwgfSBmcm9tICcuLi9taXhpbnMnO1xuXG5jb25zdCBleHRlbmQgPSAoY29tcG9uZW50LCBtaXhpbnMgPSBbXSkgPT4gKHsgbmFtZTogJ3Ytb25zLScgKyBjb21wb25lbnQsIG1peGlucywgZXh0ZW5kczogVkdlbmVyaWMgfSk7XG5cbmV4cG9ydCBjb25zdCBWT25zVG9vbGJhciA9IGV4dGVuZCgndG9vbGJhcicpO1xuZXhwb3J0IGNvbnN0IFZPbnNUb29sYmFyQnV0dG9uID0gZXh0ZW5kKCd0b29sYmFyLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IFZPbnNCdXR0b24gPSBleHRlbmQoJ2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IFZPbnNJY29uID0gZXh0ZW5kKCdpY29uJyk7XG5leHBvcnQgY29uc3QgVk9uc1N3aXRjaCA9IGV4dGVuZCgnc3dpdGNoJyk7XG5leHBvcnQgY29uc3QgVk9uc0lucHV0ID0gZXh0ZW5kKCdpbnB1dCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNSYW5nZSA9IGV4dGVuZCgncmFuZ2UnKTtcbmV4cG9ydCBjb25zdCBWT25zU2VsZWN0ID0gZXh0ZW5kKCdzZWxlY3QnKTtcbmV4cG9ydCBjb25zdCBWT25zQm90dG9tVG9vbGJhciA9IGV4dGVuZCgnYm90dG9tLXRvb2xiYXInKTtcbmV4cG9ydCBjb25zdCBWT25zU3BlZWREaWFsSXRlbSA9IGV4dGVuZCgnc3BlZWQtZGlhbC1pdGVtJyk7XG5leHBvcnQgY29uc3QgVk9uc0xpc3QgPSBleHRlbmQoJ2xpc3QnKTtcbmV4cG9ydCBjb25zdCBWT25zTGlzdEl0ZW0gPSBleHRlbmQoJ2xpc3QtaXRlbScpO1xuZXhwb3J0IGNvbnN0IFZPbnNMaXN0SGVhZGVyID0gZXh0ZW5kKCdsaXN0LWhlYWRlcicpO1xuZXhwb3J0IGNvbnN0IFZPbnNSaXBwbGUgPSBleHRlbmQoJ3JpcHBsZScpO1xuZXhwb3J0IGNvbnN0IFZPbnNSb3cgPSBleHRlbmQoJ3JvdycpO1xuZXhwb3J0IGNvbnN0IFZPbnNDb2wgPSBleHRlbmQoJ2NvbCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNQcm9ncmVzc0JhciA9IGV4dGVuZCgncHJvZ3Jlc3MtYmFyJyk7XG5leHBvcnQgY29uc3QgVk9uc1Byb2dyZXNzQ2lyY3VsYXIgPSBleHRlbmQoJ3Byb2dyZXNzLWNpcmN1bGFyJyk7XG5leHBvcnQgY29uc3QgVk9uc0Nhcm91c2VsSXRlbSA9IGV4dGVuZCgnY2Fyb3VzZWwtaXRlbScpO1xuZXhwb3J0IGNvbnN0IFZPbnNTcGxpdHRlck1hc2sgPSBleHRlbmQoJ3NwbGl0dGVyLW1hc2snKTtcbmV4cG9ydCBjb25zdCBWT25zU3BsaXR0ZXJDb250ZW50ID0gZXh0ZW5kKCdzcGxpdHRlci1jb250ZW50Jyk7XG5leHBvcnQgY29uc3QgVk9uc1B1bGxIb29rID0gZXh0ZW5kKCdwdWxsLWhvb2snLCBbZGVyaXZlSGFuZGxlcignb25BY3Rpb24nKV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNTcGxpdHRlciA9IGV4dGVuZCgnc3BsaXR0ZXInLCBbc2VsZlByb3ZpZGVyLCBkZXJpdmVEQkJdKTtcbmV4cG9ydCBjb25zdCBWT25zRmFiID0gZXh0ZW5kKCdmYWInLCBbaGlkYWJsZV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNQYWdlID0gZXh0ZW5kKCdwYWdlJywgW2Rlcml2ZURCQiwgZGVyaXZlSGFuZGxlcignb25JbmZpbml0ZVNjcm9sbCcpXSk7XG5leHBvcnQgY29uc3QgVk9uc0RpYWxvZyA9IGV4dGVuZCgnZGlhbG9nJywgW2hpZGFibGUsIGhhc09wdGlvbnMsIGRpYWxvZ0NhbmNlbCwgZGVyaXZlREJCLCBwb3J0YWxdKTtcbmV4cG9ydCBjb25zdCBWT25zTW9kYWwgPSBleHRlbmQoJ21vZGFsJywgW2hpZGFibGUsIGhhc09wdGlvbnMsIGRlcml2ZURCQiwgcG9ydGFsXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNQb3BvdmVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGM5NTYwNjBcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc1BvcG92ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMuY29tcHV0ZWQgfHwgbnVsbClcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gICAgb3B0aW9ucy5jb21wdXRlZCA9IGNvbXB1dGVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtcG9wb3Zlcj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLXBvcG92ZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoaWRhYmxlLCBoYXNPcHRpb25zLCBkaWFsb2dDYW5jZWwsIG1vZGlmaWVyLCBkZXJpdmVFdmVudHMsIGRlcml2ZURCQiwgcG9ydGFsIH0gZnJvbSAnLi4vbWl4aW5zJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBtb2RpZmllciwgZGVyaXZlRXZlbnRzLCBkZXJpdmVEQkIsIHBvcnRhbF0sXG5cbiAgICBwcm9wczoge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5faXNWdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50IHx8IHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIG5vcm1hbGl6ZWRUYXJnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5faXNWdWUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuJGVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgICAgIH0sXG4gICAgICBub3JtYWxpemVkT3B0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5ub3JtYWxpemVkVGFyZ2V0LFxuICAgICAgICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNQb3BvdmVyLnZ1ZT82ZmJjMmZjZCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVyaXZlREJCLCBkZXJpdmVIYW5kbGVyLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuL2Rlcml2ZSc7XG5leHBvcnQgeyBoaWRhYmxlLCBoYXNPcHRpb25zLCBtb2RpZmllciwgc2VsZlByb3ZpZGVyLCBkaWFsb2dDYW5jZWwsIHBvcnRhbCB9IGZyb20gJy4vY29tbW9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvaW5kZXguanMiLCJpbXBvcnQgeyBldmVudFRvSGFuZGxlciwgaGFuZGxlclRvUHJvcCB9IGZyb20gJy4uL2ludGVybmFsL3V0aWwnO1xuXG4vKiBQcml2YXRlICovXG5jb25zdCBfc2V0dXBEQkIgPSBjb21wb25lbnQgPT4ge1xuICBjb25zdCBkYmIgPSAnb25EZXZpY2VCYWNrQnV0dG9uJztcbiAgLy8gQ2FsbCBvcmlnaW5hbCBoYW5kbGVyIG9yIHBhcmVudCBoYW5kbGVyIGJ5IGRlZmF1bHRcbiAgY29uc3QgaGFuZGxlciA9IGNvbXBvbmVudFtkYmJdIHx8IChjb21wb25lbnQuJGVsW2RiYl0gJiYgY29tcG9uZW50LiRlbFtkYmJdLl9jYWxsYmFjaykgfHwgKGUgPT4gZS5jYWxsUGFyZW50SGFuZGxlcigpKTtcblxuICBjb21wb25lbnQuJGVsW2RiYl0gPSBldmVudCA9PiB7XG4gICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuXG4gICAgY29tcG9uZW50LiRlbWl0KGhhbmRsZXJUb1Byb3AoZGJiKSwge1xuICAgICAgLi4uZXZlbnQsXG4gICAgICBwcmV2ZW50RGVmYXVsdDogKCkgPT4gcnVuRGVmYXVsdCA9IGZhbHNlXG4gICAgfSk7XG5cbiAgICBydW5EZWZhdWx0ICYmIGhhbmRsZXIoZXZlbnQpO1xuICB9O1xuXG4gIGNvbXBvbmVudC5faXNEQkJTZXR1cCA9IHRydWU7XG59O1xuXG4vKiBQdWJsaWMgKi9cbi8vIERldmljZSBCYWNrIEJ1dHRvbiBIYW5kbGVyXG5jb25zdCBkZXJpdmVEQkIgPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgX3NldHVwREJCKHRoaXMpO1xuICB9LFxuXG4gIC8vIENvcmUgZGVzdHJveXMgZGV2aWNlQmFja0J1dHRvbiBoYW5kbGVycyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAgLy8gVGhpcyBmaXhlcyB0aGUgYmVoYXZpb3IgZm9yIDxrZWVwLWFsaXZlPiBjb21wb25lbnQuXG4gIGFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLl9pc0RCQlNldHVwID09PSBmYWxzZSAmJiBfc2V0dXBEQkIodGhpcyk7XG4gIH0sXG5cbiAgZGVhY3RpdmF0ZWQoKSB7XG4gICAgdGhpcy5faXNEQkJTZXR1cCA9PT0gdHJ1ZSAmJiAodGhpcy5faXNEQkJTZXR1cCA9IGZhbHNlKTtcbiAgfSxcblxuICBkZXN0cm95ZWQoKSB7XG4gICAgdGhpcy4kZWwub25EZXZpY2VCYWNrQnV0dG9uICYmIHRoaXMuJGVsLm9uRGV2aWNlQmFja0J1dHRvbi5kZXN0cm95KCk7XG4gIH1cbn07XG5cbi8vIFRoZXNlIGhhbmRsZXJzIGNhbm5vdCB0aHJvdyBldmVudHMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG5jb25zdCBkZXJpdmVIYW5kbGVyID0gaGFuZGxlck5hbWUgPT4ge1xuICBjb25zdCBwcm9wTmFtZSA9IGhhbmRsZXJUb1Byb3AoaGFuZGxlck5hbWUpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIFtwcm9wTmFtZV06IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIFtwcm9wTmFtZV0oKSB7XG4gICAgICAgIHRoaXMuJGVsW2hhbmRsZXJOYW1lXSA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpc1twcm9wTmFtZV0gJiYgKHRoaXMuJGVsW2hhbmRsZXJOYW1lXSA9IHRoaXNbcHJvcE5hbWVdKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBkZXJpdmVFdmVudHMgPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgICB0aGlzLl9ib3VuZEV2ZW50cyA9IHRoaXMuJGVsLmNvbnN0cnVjdG9yLmV2ZW50cyB8fCBbXTtcblxuICAgIHRoaXMuX2JvdW5kRXZlbnRzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50VG9IYW5kbGVyKGtleSldID0gZXZlbnQgPT4ge1xuICAgICAgICAvLyBGaWx0ZXIgZXZlbnRzIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHMgd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuJGVsIHx8ICEvXm9ucy0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgICAgIHRoaXMuJGVtaXQoa2V5LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKGtleSwgdGhpcy5faGFuZGxlcnNbZXZlbnRUb0hhbmRsZXIoa2V5KV0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fYm91bmRFdmVudHMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMuX2hhbmRsZXJzW2V2ZW50VG9IYW5kbGVyKGtleSldKTtcbiAgICB9KTtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHRoaXMuX2JvdW5kRXZlbnRzID0gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGVyaXZlREJCLCBkZXJpdmVIYW5kbGVyLCBkZXJpdmVFdmVudHMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvZGVyaXZlLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGh5cGhlbmF0ZSA9IHN0cmluZyA9PiBzdHJpbmcucmVwbGFjZSgvKFthLXpBLVpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcblxuZXhwb3J0IGNvbnN0IGNhbWVsaXplID0gc3RyaW5nID0+IHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oW2Etel0pL2csIChtLCBsKSA9PiBsLnRvVXBwZXJDYXNlKCkpO1xuXG5leHBvcnQgY29uc3QgZXZlbnRUb0hhbmRsZXIgPSBuYW1lID0+ICdfb24nICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyVG9Qcm9wID0gbmFtZSA9PiBuYW1lLnNsaWNlKDIpLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgyKS5zbGljZSgxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnRlcm5hbC91dGlsLmpzIiwiaW1wb3J0IHsgX3V0aWwgYXMgdXRpbCB9IGZyb20gJ29uc2VudWknO1xuXG4vKiBQcml2YXRlICovXG5jb25zdCBfdG9nZ2xlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy52aXNpYmxlICE9PSB0aGlzLiRlbC52aXNpYmxlKSB7XG4gICAgdGhpcy4kZWxbdGhpcy52aXNpYmxlID8gJ3Nob3cnIDogJ2hpZGUnXS5jYWxsKHRoaXMuJGVsLCB0aGlzLm5vcm1hbGl6ZWRPcHRpb25zIHx8IHRoaXMub3B0aW9ucyk7XG4gIH1cbn07XG5cbi8qIFB1YmxpYyAqL1xuLy8gQ29tcG9uZW50cyB0aGF0IGNhbiBiZSBzaG93biBvciBoaWRkZW5cbmNvbnN0IGhpZGFibGUgPSB7XG4gIHByb3BzOiB7XG4gICAgdmlzaWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCAvLyBBdm9pZCBjYXN0aW5nIHRvIGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgdmlzaWJsZSgpIHtcbiAgICAgIF90b2dnbGVWaXNpYmlsaXR5LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4geyAvLyBGQUIgdGFrZXMgMSBleHRyYSBjeWNsZVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZpc2libGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBfdG9nZ2xlVmlzaWJpbGl0eS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBDb21wb25lbnRzIHdpdGggJ29wdGlvbnMnIHByb3BlcnR5XG5jb25zdCBoYXNPcHRpb25zID0ge1xuICBwcm9wczoge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIENvbXBvbmVudHMgd2l0aCAnbW9kaWZpZXInIGF0dHJpYnV0ZVxuY29uc3QgbW9kaWZpZXIgPSB7XG4gIHByb3BzOiB7XG4gICAgbW9kaWZpZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBfdXBkYXRlTW9kaWZpZXIoKSB7XG4gICAgICBjb25zdCBwcmVzZXQgPSB0aGlzLl9tZCA/IFsnbWF0ZXJpYWwnXSA6IFtdO1xuXG4gICAgICAvLyBSZW1vdmVcbiAgICAgICh0aGlzLl9wcmV2aW91c01vZGlmaWVyIHx8ICcnKS5zcGxpdCgvXFxzKy8pLmNvbmNhdChwcmVzZXQpXG4gICAgICAgIC5mb3JFYWNoKG0gPT4gdXRpbC5yZW1vdmVNb2RpZmllcih0aGlzLiRlbCwgbSwgeyBhdXRvU3R5bGU6IHRydWUgfSkpO1xuXG4gICAgICAvLyBBZGRcbiAgICAgIHRoaXMubW9kaWZpZXIudHJpbSgpLnNwbGl0KC9cXHMrLykuY29uY2F0KHByZXNldClcbiAgICAgICAgLmZvckVhY2gobSA9PiBtICYmIHV0aWwuYWRkTW9kaWZpZXIodGhpcy4kZWwsIG0sIHsgYXV0b1N0eWxlOiB0cnVlIH0pKTtcblxuICAgICAgdGhpcy5fcHJldmlvdXNNb2RpZmllciA9IHRoaXMubW9kaWZpZXI7XG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgbW9kaWZpZXIoKSB7XG4gICAgICB0aGlzLl91cGRhdGVNb2RpZmllcigpO1xuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuX21kID0gL15tYXRlcmlhbCQvLnRlc3QodGhpcy4kZWwuZ2V0QXR0cmlidXRlKCdtb2RpZmllcicpKTtcbiAgICB0aGlzLl91cGRhdGVNb2RpZmllcigpO1xuICB9XG59O1xuXG4vLyBQcm92aWRlcyBpdHNlbGYgdG8gaXRzIGRlc2NlbmRhbnRzXG5jb25zdCBzZWxmUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLiRvcHRpb25zLl9jb21wb25lbnRUYWcuc2xpY2UoNildOiB0aGlzXG4gICAgfVxuICB9XG59O1xuXG4vLyBDb21tb24gZXZlbnQgZm9yIERpYWxvZ3NcbmNvbnN0IGRpYWxvZ0NhbmNlbCA9IHtcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRvbignZGlhbG9nLWNhbmNlbCcsICgpID0+IHRoaXMuJGVtaXQoJ3VwZGF0ZScsIGZhbHNlKSk7XG4gIH1cbn07XG5cbi8vIE1vdmVzIHRoZSBlbGVtZW50IHRvIGEgZ2xvYmFsIHBvc2l0aW9uXG5jb25zdCBwb3J0YWwgPSB7XG4gIG1vdW50ZWQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRlbCk7XG4gIH0sXG4gIHVwZGF0ZWQoKSB7XG4gICAgIXRoaXMuX2lzRGVzdHJveWVkICYmIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kZWwpO1xuICB9LFxuICBhY3RpdmF0ZWQoKSB7XG4gICAgIXRoaXMuX2lzRGVzdHJveWVkICYmIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kZWwpO1xuICB9LFxuICBkZWFjdGl2YXRlZCgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmUoKTtcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmUoKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgaGlkYWJsZSwgaGFzT3B0aW9ucywgbW9kaWZpZXIsIHNlbGZQcm92aWRlciwgZGlhbG9nQ2FuY2VsLCBwb3J0YWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taXhpbnMvY29tbW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwib25zXCIsXCJjb21tb25qc1wiOlwib25zZW51aVwiLFwiY29tbW9uanMyXCI6XCJvbnNlbnVpXCIsXCJhbWRcIjpcIm9uc2VudWlcIn1cbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtcG9wb3ZlcicsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04Yzk1NjA2MFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1BvcG92ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zQWxlcnREaWFsb2cudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zOWRhZjQyMlxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zQWxlcnREaWFsb2cudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNBbGVydERpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPG9ucy1hbGVydC1kaWFsb2c+XG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPlxuICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+e3t0aXRsZX19PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctY29udGVudFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctZm9vdGVyXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gdi1mb3I9XCIoaGFuZGxlciwga2V5KSBpbiBmb290ZXJcIiA6a2V5PVwia2V5XCIgY2xhc3M9XCJhbGVydC1kaWFsb2ctYnV0dG9uXCIgQGNsaWNrPVwiaGFuZGxlclwiPnt7a2V5fX08L2J1dHRvbj5cbiAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgPC9vbnMtYWxlcnQtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgaGlkYWJsZSwgaGFzT3B0aW9ucywgZGlhbG9nQ2FuY2VsLCBtb2RpZmllciwgZGVyaXZlRXZlbnRzLCBkZXJpdmVEQkIsIHBvcnRhbCB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2hpZGFibGUsIGhhc09wdGlvbnMsIGRpYWxvZ0NhbmNlbCwgbW9kaWZpZXIsIGRlcml2ZUV2ZW50cywgZGVyaXZlREJCLCBwb3J0YWxdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkuZXZlcnkoa2V5ID0+IHZhbHVlW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zQWxlcnREaWFsb2cudnVlPzhmMDhiMDQyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy1hbGVydC1kaWFsb2cnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydC1kaWFsb2ctdGl0bGVcIlxuICB9LCBbX3ZtLl90KFwidGl0bGVcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0LWRpYWxvZy1jb250ZW50XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydC1kaWFsb2ctZm9vdGVyXCJcbiAgfSwgW192bS5fdChcImZvb3RlclwiLCBfdm0uX2woKF92bS5mb290ZXIpLCBmdW5jdGlvbihoYW5kbGVyLCBrZXkpIHtcbiAgICByZXR1cm4gX2MoJ2J1dHRvbicsIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQtZGlhbG9nLWJ1dHRvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBoYW5kbGVyXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3Moa2V5KSldKVxuICB9KSldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzlkYWY0MjJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNBbGVydERpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNTcGVlZERpYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hNGQ2NTg3Y1xcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zU3BlZWREaWFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zU3BlZWREaWFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLXNwZWVkLWRpYWwgOm9uLWNsaWNrLnByb3A9XCJhY3Rpb25cIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLXNwZWVkLWRpYWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoaWRhYmxlLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuLi9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtkZXJpdmVFdmVudHMsIGhpZGFibGVdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIG9wZW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFjdGlvbigpIHtcbiAgICAgICAgbGV0IHJ1bkRlZmF1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHJ1bkRlZmF1bHQgPSBmYWxzZSB9KTtcblxuICAgICAgICBpZiAocnVuRGVmYXVsdCkge1xuICAgICAgICAgIHRoaXMuJGVsLnRvZ2dsZUl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfc2hvdWxkVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vcGVuICE9PSB0aGlzLiRlbC5pc09wZW4oKTtcbiAgICAgIH0sXG4gICAgICBfdXBkYXRlVG9nZ2xlKCkge1xuICAgICAgICB0aGlzLl9zaG91bGRVcGRhdGUoKSAmJiB0aGlzLiRlbFt0aGlzLm9wZW4gPyAnc2hvd0l0ZW1zJyA6ICdoaWRlSXRlbXMnXS5jYWxsKHRoaXMuJGVsKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy4kb24oWydvcGVuJywgJ2Nsb3NlJ10sICgpID0+IHRoaXMuX3Nob3VsZFVwZGF0ZSgpICYmIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHRoaXMuJGVsLmlzT3BlbigpKSk7XG5cbiAgICAgIHRoaXMuX3VwZGF0ZVRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNTcGVlZERpYWwudnVlPzE3YzZhZDg2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy1zcGVlZC1kaWFsJywge1xuICAgIGRvbVByb3BzOiB7XG4gICAgICBcIm9uQ2xpY2tcIjogX3ZtLmFjdGlvblxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWE0ZDY1ODdjXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zU3BlZWREaWFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc0Nhcm91c2VsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDZkMDZkNDVcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc0Nhcm91c2VsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zQ2Fyb3VzZWwudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtY2Fyb3VzZWwgOmluaXRpYWwtaW5kZXg9XCJpbmRleFwiIEBwb3N0Y2hhbmdlLnNlbGY9XCIkZW1pdCgndXBkYXRlJywgJGV2ZW50LmFjdGl2ZUluZGV4KVwiPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9vbnMtY2Fyb3VzZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBoYXNPcHRpb25zLCBkZXJpdmVFdmVudHMgfSBmcm9tICcuLi9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtoYXNPcHRpb25zLCBkZXJpdmVFdmVudHNdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIGluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgaW5kZXgoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLiRlbC5nZXRBY3RpdmVJbmRleCgpKSB7XG4gICAgICAgICAgdGhpcy4kZWwuc2V0QWN0aXZlSW5kZXgodGhpcy5pbmRleCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNDYXJvdXNlbC52dWU/MTVhMGIxMTIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLWNhcm91c2VsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImluaXRpYWwtaW5kZXhcIjogX3ZtLmluZGV4XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJwb3N0Y2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXQpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLiRlbWl0KCd1cGRhdGUnLCAkZXZlbnQuYWN0aXZlSW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDZkMDZkNDVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNDYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNUYWIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1jOWZmOGI4MFxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zVGFiLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zVGFiLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLXRhYiA6YWN0aXZlPVwiYWN0aXZlXCIgOm9uLWNsaWNrLnByb3A9XCJhY3Rpb25cIj5cbiAgPC9vbnMtdGFiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGluamVjdDogWyd0YWJiYXInXSxcblxuICAgIHByb3BzOiB7XG4gICAgICBwYWdlOiB7IH0sXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBhY3Rpb24oKSB7XG4gICAgICAgIGxldCBydW5EZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiBydW5EZWZhdWx0ID0gZmFsc2UgfSk7XG5cbiAgICAgICAgaWYgKHJ1bkRlZmF1bHQpIHtcbiAgICAgICAgICB0aGlzLnRhYmJhci4kZWwuc2V0QWN0aXZlVGFiKHRoaXMuJGVsLl9maW5kVGFiSW5kZXgoKSwgdGhpcy50YWJiYXIub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIGFjdGl2ZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPyB0aGlzLiRlbC5zZXRBY3RpdmUoKSA6IHRoaXMuJGVsLnNldEluYWN0aXZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1RhYi52dWU/MzFkZWVkZGYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLXRhYicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3RpdmVcIjogX3ZtLmFjdGl2ZVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwib25DbGlja1wiOiBfdm0uYWN0aW9uXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWM5ZmY4YjgwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zVGFiLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc1RhYmJhci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNhMjc2NDgzXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNUYWJiYXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNUYWJiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtdGFiYmFyIDphY3RpdmVJbmRleD1cImluZGV4XCIgQHBvc3RjaGFuZ2Uuc2VsZj1cIiRlbWl0KCd1cGRhdGUnLCAkZXZlbnQuaW5kZXgpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhYmJhcl9fY29udGVudFwiPlxuICAgICAgPHNsb3QgbmFtZT1cInBhZ2VzXCI+XG4gICAgICAgIDxjb21wb25lbnQgdi1mb3I9XCJ0YWIgaW4gdGFic1wiIDppcz1cInRhYi5wYWdlXCIgOmtleT1cIih0YWIua2V5IHx8IHRhYi5wYWdlKVwiPjwvY29tcG9uZW50PlxuICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJiYXJcIj5cbiAgICAgIDxzbG90PlxuICAgICAgICA8di1vbnMtdGFiIHYtZm9yPVwidGFiIGluIHRhYnNcIiB2LWJpbmQ9XCJ0YWJcIiA6a2V5PVwiKHRhYi5rZXkgfHwgdGFiKVwiPjwvdi1vbnMtdGFiPlxuICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICA8L29ucy10YWJiYXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBkZXJpdmVFdmVudHMsIGhhc09wdGlvbnMsIGhpZGFibGUsIHNlbGZQcm92aWRlciB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2Rlcml2ZUV2ZW50cywgaGFzT3B0aW9ucywgaGlkYWJsZSwgc2VsZlByb3ZpZGVyXSxcblxuICAgIHByb3BzOiB7XG4gICAgICBpbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZXZlcnkodGFiID0+IFsnaWNvbicsICdsYWJlbCcsICdwYWdlJ10uc29tZShwcm9wID0+ICEhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YWIsIHByb3ApKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIGluZGV4KCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCAhPT0gdGhpcy4kZWwuZ2V0QWN0aXZlVGFiSW5kZXgoKSkge1xuICAgICAgICAgIHRoaXMuJGVsLnNldEFjdGl2ZVRhYih0aGlzLmluZGV4LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1RhYmJhci52dWU/NjkwMDQzZWUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy10YWJiYXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aXZlSW5kZXhcIjogX3ZtLmluZGV4XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJwb3N0Y2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXQpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgX3ZtLiRlbWl0KCd1cGRhdGUnLCAkZXZlbnQuaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJiYXJfX2NvbnRlbnRcIlxuICB9LCBbX3ZtLl90KFwicGFnZXNcIiwgX3ZtLl9sKChfdm0udGFicyksIGZ1bmN0aW9uKHRhYikge1xuICAgIHJldHVybiBfYyh0YWIucGFnZSwge1xuICAgICAga2V5OiAodGFiLmtleSB8fCB0YWIucGFnZSksXG4gICAgICB0YWc6IFwiY29tcG9uZW50XCJcbiAgICB9KVxuICB9KSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWJiYXJcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiLCBfdm0uX2woKF92bS50YWJzKSwgZnVuY3Rpb24odGFiKSB7XG4gICAgcmV0dXJuIF9jKCd2LW9ucy10YWInLCBfdm0uX2Ioe1xuICAgICAga2V5OiAodGFiLmtleSB8fCB0YWIpXG4gICAgfSwgJ3Ytb25zLXRhYicsIHRhYikpXG4gIH0pKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zYTI3NjQ4M1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNCYWNrQnV0dG9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTU5M2YxYzRcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc0JhY2tCdXR0b24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNCYWNrQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLWJhY2stYnV0dG9uIDpvbi1jbGljay5wcm9wPVwiYWN0aW9uXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L29ucy1iYWNrLWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbmplY3Q6IFsnbmF2aWdhdG9yJ10sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBhY3Rpb24oKSB7XG4gICAgICAgIGxldCBydW5EZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiBydW5EZWZhdWx0ID0gZmFsc2UgfSk7XG5cbiAgICAgICAgaWYgKHJ1bkRlZmF1bHQgJiYgdGhpcy5uYXZpZ2F0b3IucGFnZVN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRvci5wb3BQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zQmFja0J1dHRvbi52dWU/MjM0NWM1MTciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLWJhY2stYnV0dG9uJywge1xuICAgIGRvbVByb3BzOiB7XG4gICAgICBcIm9uQ2xpY2tcIjogX3ZtLmFjdGlvblxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU1OTNmMWM0XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zQmFja0J1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNOYXZpZ2F0b3IudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yNTVlZjljMlxcXCJ9IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zTmF2aWdhdG9yLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zTmF2aWdhdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLW5hdmlnYXRvcj5cbiAgICA8c2xvdD5cbiAgICAgIDxjb21wb25lbnQgdi1mb3I9XCJwYWdlIGluIHBhZ2VTdGFja1wiIDprZXk9XCJwYWdlXCIgOmlzPVwicGFnZVwiPjwvY29tcG9uZW50PlxuICAgIDwvc2xvdD5cbiAgPC9vbnMtbmF2aWdhdG9yPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgaGFzT3B0aW9ucywgc2VsZlByb3ZpZGVyLCBkZXJpdmVFdmVudHMsIGRlcml2ZURCQiB9IGZyb20gJy4uL21peGlucyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2hhc09wdGlvbnMsIHNlbGZQcm92aWRlciwgZGVyaXZlRXZlbnRzLCBkZXJpdmVEQkJdLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgIHBhZ2VTdGFjazoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBwb3BQYWdlOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgIHRoaXMucGFnZVN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGlzUmVhZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdfcmVhZHknKSAmJiB0aGlzLl9yZWFkeSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSxcbiAgICAgIG9uRGV2aWNlQmFja0J1dHRvbihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMucG9wUGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ZW50LmNhbGxQYXJlbnRIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfc2V0UGFnZXNWaXNpYmlsaXR5KHN0YXJ0LCBlbmQsIHZpc2liaWxpdHkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kIC0gMTsgaSsrKSB7XG4gICAgICAgICAgdGhpcy4kY2hpbGRyZW5baV0uJGVsLnN0eWxlLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3JlYXR0YWNoUGFnZShwYWdlRWxlbWVudCwgcG9zaXRpb24gPSBudWxsKSB7XG4gICAgICAgIHRoaXMuJGVsLmluc2VydEJlZm9yZShwYWdlRWxlbWVudCwgcG9zaXRpb24pO1xuICAgICAgICBwYWdlRWxlbWVudC5faXNTaG93biA9IHRydWU7XG4gICAgICB9LFxuICAgICAgX3JlZGV0YWNoUGFnZShwYWdlRWxlbWVudCkge1xuICAgICAgICBwYWdlRWxlbWVudC5fZGVzdHJveSgpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9LFxuICAgICAgX2FuaW1hdGUoeyBsYXN0TGVuZ3RoLCBjdXJyZW50TGVuZ3RoLCBsYXN0VG9wUGFnZSwgY3VycmVudFRvcFBhZ2V9KSB7XG5cbiAgICAgICAgLy8gUHVzaFxuICAgICAgICBpZiAoY3VycmVudExlbmd0aCA+IGxhc3RMZW5ndGgpIHtcbiAgICAgICAgICBsZXQgaXNSZWF0dGFjaGVkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGxhc3RUb3BQYWdlLnBhcmVudEVsZW1lbnQgIT09IHRoaXMuJGVsKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWF0dGFjaFBhZ2UobGFzdFRvcFBhZ2UsIHRoaXMuJGVsLmNoaWxkcmVuW2xhc3RMZW5ndGggLSAxXSk7XG4gICAgICAgICAgICBpc1JlYXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdExlbmd0aC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zZXRQYWdlc1Zpc2liaWxpdHkobGFzdExlbmd0aCwgY3VycmVudExlbmd0aCwgJ2hpZGRlbicpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLl9wdXNoUGFnZSh7IC4uLnRoaXMub3B0aW9ucywgbGVhdmVQYWdlOiBsYXN0VG9wUGFnZSB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9zZXRQYWdlc1Zpc2liaWxpdHkobGFzdExlbmd0aCwgY3VycmVudExlbmd0aCwgJycpO1xuICAgICAgICAgICAgICBpZiAoaXNSZWF0dGFjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVkZXRhY2hQYWdlKGxhc3RUb3BQYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3BcbiAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPCBsYXN0TGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fcmVhdHRhY2hQYWdlKGxhc3RUb3BQYWdlLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kZWwuX3BvcFBhZ2UoeyAuLi50aGlzLm9wdGlvbnMgfSwgKCkgPT4gdGhpcy5fcmVkZXRhY2hQYWdlKGxhc3RUb3BQYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBsYWNlIHBhZ2VcbiAgICAgICAgdGhpcy5fcmVhdHRhY2hQYWdlKGxhc3RUb3BQYWdlLCBjdXJyZW50VG9wUGFnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbC5fcHVzaFBhZ2UoeyAuLi50aGlzLm9wdGlvbnMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVkZXRhY2hQYWdlKGxhc3RUb3BQYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICBwYWdlU3RhY2soYWZ0ZXIsIGJlZm9yZSkge1xuICAgICAgICBjb25zdCBwcm9wV2FzTXV0YXRlZCA9IGFmdGVyID09PSBiZWZvcmU7IC8vIENhbiBiZSBtdXRhdGVkIG9yIHJlcGxhY2VkXG5cbiAgICAgICAgY29uc3QgbGFzdExlbmd0aCA9IHByb3BXYXNNdXRhdGVkID8gdGhpcy4kY2hpbGRyZW4ubGVuZ3RoIDogYmVmb3JlLmxlbmd0aDtcbiAgICAgICAgbGV0IGxhc3RUb3BQYWdlID0gdGhpcy4kY2hpbGRyZW5bdGhpcy4kY2hpbGRyZW4ubGVuZ3RoIC0gMV0uJGVsO1xuXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50TGVuZ3RoID0gcHJvcFdhc011dGF0ZWQgPyB0aGlzLiRjaGlsZHJlbi5sZW5ndGggOiBhZnRlci5sZW5ndGg7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUb3BQYWdlID0gdGhpcy4kY2hpbGRyZW5bdGhpcy4kY2hpbGRyZW4ubGVuZ3RoIC0gMV0uJGVsO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnRUb3BQYWdlICE9PSBsYXN0VG9wUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVhZHkgPSB0aGlzLl9hbmltYXRlKHsgbGFzdExlbmd0aCwgY3VycmVudExlbmd0aCwgbGFzdFRvcFBhZ2UsIGN1cnJlbnRUb3BQYWdlfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50TGVuZ3RoICE9PSBsYXN0TGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyZW50VG9wUGFnZS51cGRhdGVCYWNrQnV0dG9uKGN1cnJlbnRMZW5ndGggPiAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsYXN0VG9wUGFnZSA9IGN1cnJlbnRUb3BQYWdlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc05hdmlnYXRvci52dWU/M2Q2M2I3ZDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy1uYXZpZ2F0b3InLCBbX3ZtLl90KFwiZGVmYXVsdFwiLCBfdm0uX2woKF92bS5wYWdlU3RhY2spLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgcmV0dXJuIF9jKHBhZ2UsIHtcbiAgICAgIGtleTogcGFnZSxcbiAgICAgIHRhZzogXCJjb21wb25lbnRcIlxuICAgIH0pXG4gIH0pKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjU1ZWY5YzJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNOYXZpZ2F0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc1NwbGl0dGVyU2lkZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFiMGVlYjIzXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNTcGxpdHRlclNpZGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNTcGxpdHRlclNpZGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLXNwbGl0dGVyLXNpZGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L29ucy1zcGxpdHRlci1zaWRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgaGFzT3B0aW9ucywgZGVyaXZlRXZlbnRzIH0gZnJvbSAnLi4vbWl4aW5zJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbaGFzT3B0aW9ucywgZGVyaXZlRXZlbnRzXSxcblxuICAgIHByb3BzOiB7XG4gICAgICBvcGVuOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBhY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZSgpICYmIHRoaXMuJGVsW3RoaXMub3BlbiA/ICdvcGVuJyA6ICdjbG9zZSddLmNhbGwodGhpcy4kZWwsIHRoaXMub3B0aW9ucykuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgfSxcbiAgICAgIF9zaG91bGRVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wZW4gIT09IHRoaXMuJGVsLmlzT3BlbjtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLiRvbihbJ3Bvc3RvcGVuJywgJ3Bvc3RjbG9zZSddLCAoKSA9PiB0aGlzLl9zaG91bGRVcGRhdGUoKSAmJiB0aGlzLiRlbWl0KCd1cGRhdGUnLCB0aGlzLiRlbC5pc09wZW4pKTtcblxuICAgICAgdGhpcy5hY3Rpb24oKTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zU3BsaXR0ZXJTaWRlLnZ1ZT82YmI5OGM5MiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtc3BsaXR0ZXItc2lkZScsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xYjBlZWIyM1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1NwbGl0dGVyU2lkZS52dWVcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WT25zTGF6eVJlcGVhdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWE1ZDM5OTU4XFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNMYXp5UmVwZWF0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zTGF6eVJlcGVhdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDwhLS0gVGhpcyBlbGVtZW50IGlzIHVzZWxlc3MgZXhjZXB0IGZvciB0aGUgZGVzdHJveSBwYXJ0IC0tPlxuICA8b25zLWxhenktcmVwZWF0Pjwvb25zLWxhenktcmVwZWF0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICByZW5kZXJJdGVtOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHZhbHVlKDApO1xuICAgICAgICBpZiAoY29tcG9uZW50Ll9pc1Z1ZSAmJiAhY29tcG9uZW50Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgICBjb21wb25lbnQuJGRlc3Ryb3koKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBsZW5ndGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0OiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm92aWRlcjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIF9zZXR1cCgpIHtcbiAgICAgIHRoaXMucHJvdmlkZXIgJiYgdGhpcy5wcm92aWRlci5kZXN0cm95KCk7XG5cbiAgICAgIGNvbnN0IGRlbGVnYXRlID0gbmV3IHRoaXMuJG9ucy5fb25zLl9pbnRlcm5hbC5MYXp5UmVwZWF0RGVsZWdhdGUoe1xuICAgICAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0OiB0aGlzLmNhbGN1bGF0ZUl0ZW1IZWlnaHQsXG4gICAgICAgIGNyZWF0ZUl0ZW1Db250ZW50OiBpID0+IHRoaXMucmVuZGVySXRlbShpKS4kbW91bnQoKS4kZWwsXG4gICAgICAgIGRlc3Ryb3lJdGVtOiAoaSwgeyBlbGVtZW50IH0pID0+IGVsZW1lbnQuX192dWVfXy4kZGVzdHJveSgpLFxuICAgICAgICBjb3VudEl0ZW1zOiAoKSA9PiB0aGlzLmxlbmd0aFxuICAgICAgfSwgbnVsbCk7XG5cbiAgICAgIHRoaXMucHJvdmlkZXIgPSBuZXcgdGhpcy4kb25zLl9vbnMuX2ludGVybmFsLkxhenlSZXBlYXRQcm92aWRlcih0aGlzLiRwYXJlbnQuJGVsLCBkZWxlZ2F0ZSk7XG4gICAgfSxcbiAgICByZWZyZXNoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXIucmVmcmVzaCgpO1xuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHJlbmRlckl0ZW0oKSB7XG4gICAgICB0aGlzLl9zZXR1cCgpO1xuICAgIH0sXG4gICAgbGVuZ3RoKCkge1xuICAgICAgdGhpcy5fc2V0dXAoKTtcbiAgICB9LFxuICAgIGNhbGN1bGF0ZUl0ZW1IZWlnaHQoKSB7XG4gICAgICB0aGlzLl9zZXR1cCgpO1xuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuX3NldHVwKCk7XG4gICAgdGhpcy4kdm5vZGUuY29udGV4dC4kb24oJ3JlZnJlc2gnLCB0aGlzLnJlZnJlc2gpO1xuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy4kdm5vZGUuY29udGV4dC4kb2ZmKCdyZWZyZXNoJywgdGhpcy5yZWZyZXNoKTtcblxuICAgIC8vIFRoaXMgd2lsbCBkZXN0cm95IHRoZSBwcm92aWRlciBvbmNlIHRoZSByZW5kZXJlZCBlbGVtZW50XG4gICAgLy8gaXMgZGV0YWNoZWQgKGRldGFjaGVkQ2FsbGJhY2spLiBUaGVyZWZvcmUsIGFuaW1hdGlvbnNcbiAgICAvLyBoYXZlIHRpbWUgdG8gZmluaXNoIGJlZm9yZSBlbGVtZW50cyBzdGFydCB0byBkaXNhcHBlYXIuXG4gICAgLy8gSXQgY2Fubm90IGJlIHNldCBlYXJsaWVyIGluIG9yZGVyIHRvIHByZXZlbnQgYWNjaWRlbnRhbFxuICAgIC8vIGRlc3Ryb3lzIGlmIHRoaXMgZWxlbWVudCBpcyByZXRhY2hlZCBieSBzb21ldGhpbmcgZWxzZS5cbiAgICB0aGlzLiRlbC5fbGF6eVJlcGVhdFByb3ZpZGVyID0gdGhpcy5wcm92aWRlcjtcbiAgICB0aGlzLnByb3ZpZGVyID0gbnVsbDtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZPbnNMYXp5UmVwZWF0LnZ1ZT8wMWVhZmZjMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtbGF6eS1yZXBlYXQnKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWE1ZDM5OTU4XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zTGF6eVJlcGVhdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WR2VuZXJpYy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE5ZjA1MjI4XFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZHZW5lcmljLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WR2VuZXJpYy52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxjb21wb25lbnQgOmlzPVwiJG9wdGlvbnMuX2NvbXBvbmVudFRhZy5zbGljZSgyKVwiIEBjbGljaz1cIiRlbWl0KCdjbGljaycsICRldmVudClcIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvY29tcG9uZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgbW9kaWZpZXIsIGRlcml2ZUV2ZW50cyB9IGZyb20gJy4uL21peGlucyc7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFttb2RpZmllciwgZGVyaXZlRXZlbnRzXVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVkdlbmVyaWMudnVlPzMyZjBlZGJhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoX3ZtLiRvcHRpb25zLl9jb21wb25lbnRUYWcuc2xpY2UoMiksIHtcbiAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kZW1pdCgnY2xpY2snLCAkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTlmMDUyMjhcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZHZW5lcmljLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgT25zTW9kZWwgfSBmcm9tICcuL1ZPbnNNb2RlbCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9pbmRleC5qcyIsIi8qIFByaXZhdGUgKi9cblxuY29uc3QgX2dldE1vZGVsID0gKG1vZGVsUGF0aCwgY29udGV4dCwgbmV3VmFsdWUpID0+IHtcbiAgY29uc3QgcGF0aCA9IG1vZGVsUGF0aC50cmltKCkuc3BsaXQoJy4nKTtcbiAgY29uc3QgbGFzdEtleSA9IHBhdGgucG9wKCk7XG5cbiAgbGV0IGtleSwgbW9kZWwgPSBjb250ZXh0O1xuICB3aGlsZSAoa2V5ID0gcGF0aC5zaGlmdCgpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICBtb2RlbCA9IG1vZGVsW2tleV07XG4gIH1cblxuICBpZiAobmV3VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBtb2RlbFtsYXN0S2V5XSAhPT0gbmV3VmFsdWUpIHtcbiAgICBtb2RlbFtsYXN0S2V5XSA9IG5ld1ZhbHVlOyAvLyBTZXR0ZXJcbiAgfVxuXG4gIHJldHVybiBtb2RlbFtsYXN0S2V5XTsgLy8gR2V0dGVyXG59O1xuXG5jb25zdCBfc2V0TW9kZWwgPSBfZ2V0TW9kZWw7XG5cbmNvbnN0IF9mb3JtYXRPdXRwdXQgPSAobW9kaWZpZXJzID0ge30sIG91dHB1dCkgPT4ge1xuICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kaWZpZXJzLCAnbnVtYmVyJykpIHtcbiAgICByZXR1cm4gTnVtYmVyKG91dHB1dCk7XG4gIH1cbiAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZGlmaWVycywgJ3RyaW0nKSkge1xuICAgIHJldHVybiBvdXRwdXQudHJpbSgpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBfYmluZE9uID0gKGV2ZW50TmFtZSwgbW9kZWxLZXksIHZub2RlLCBoYW5kbGVyKSA9PiB7XG4gIGlmICh2bm9kZS5jb250ZXh0Lmhhc093blByb3BlcnR5KG1vZGVsS2V5LnNwbGl0KCcuJylbMF0pKSB7XG4gICAgdm5vZGUuY2hpbGQuJG9uKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbmNvbnN0IF9iaW5kU2ltcGxlSW5wdXRPbiA9IChldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgcHJvcE5hbWUpID0+IHtcbiAgX2JpbmRPbihldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgZXZlbnQgPT4ge1xuICAgIF9zZXRNb2RlbChtb2RlbEtleSwgdm5vZGUuY29udGV4dCwgZXZlbnQudGFyZ2V0W3Byb3BOYW1lXSk7XG4gIH0pO1xufTtcblxuY29uc3QgX2JpbmRNb2RpZmllcklucHV0T24gPSAoZXZlbnROYW1lLCBtb2RlbEtleSwgdm5vZGUsIG1vZGlmaWVycykgPT4ge1xuICBfYmluZE9uKGV2ZW50TmFtZSwgbW9kZWxLZXksIHZub2RlLCBldmVudCA9PiB7XG4gICAgX3NldE1vZGVsKG1vZGVsS2V5LCB2bm9kZS5jb250ZXh0LCBfZm9ybWF0T3V0cHV0KG1vZGlmaWVycywgZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH0pO1xufTtcblxuY29uc3QgX2JpbmRBcnJheUlucHV0T24gPSAoZXZlbnROYW1lLCBtb2RlbEtleSwgdm5vZGUpID0+IHtcbiAgX2JpbmRPbihldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgZXZlbnQgPT4ge1xuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBfZ2V0TW9kZWwobW9kZWxLZXksIHZub2RlLmNvbnRleHQpO1xuICAgIGlmIChtb2RlbFZhbHVlLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKSA+PSAwKSB7XG4gICAgICAhZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgbW9kZWxWYWx1ZS5zcGxpY2UobW9kZWxWYWx1ZS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuY2hlY2tlZCAmJiBtb2RlbFZhbHVlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgX2JpbmRDaGVja2JveCA9IChlbCwgYmluZGluZywgdm5vZGUsIG1vZGVsS2V5KSA9PiB7XG4gIGlmIChiaW5kaW5nLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBlbC5jaGVja2VkID0gYmluZGluZy52YWx1ZS5pbmRleE9mKGVsLnZhbHVlKSA+PSAwO1xuICAgIF9iaW5kQXJyYXlJbnB1dE9uKCdjaGFuZ2UnLCBtb2RlbEtleSwgdm5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNoZWNrZWQgPSAhIWJpbmRpbmcudmFsdWU7XG4gICAgX2JpbmRTaW1wbGVJbnB1dE9uKCdjaGFuZ2UnLCBtb2RlbEtleSwgdm5vZGUsICdjaGVja2VkJyk7XG4gIH1cbn07XG5cbmNvbnN0IF91cGRhdGVDaGVja2JveCA9IChlbCwgYmluZGluZywgdm5vZGUsIG1vZGVsS2V5KSA9PiB7XG4gIGlmIChiaW5kaW5nLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBlbC5jaGVja2VkID0gKF9nZXRNb2RlbChtb2RlbEtleSwgdm5vZGUuY29udGV4dCkgfHwgW10pLmluZGV4T2YoZWwudmFsdWUpID49IDA7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2hlY2tlZCA9ICEhYmluZGluZy52YWx1ZTtcbiAgfVxufTtcblxuXG4vKiBQdWJsaWMgKi9cblxuLy8gVk9uc01vZGVsIGRpcmVjdGl2ZVxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGNvbnN0IG1vZGVsS2V5ID0gYmluZGluZy5leHByZXNzaW9uLnRyaW0oKTtcbiAgICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSAnb25zLXNlbGVjdCc6XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT0nICsgYmluZGluZy52YWx1ZSArICddJykuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICBfYmluZFNpbXBsZUlucHV0T24oJ2NoYW5nZScsIG1vZGVsS2V5LCB2bm9kZSwgJ3ZhbHVlJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvbnMtc3dpdGNoJzpcbiAgICAgICAgX2JpbmRDaGVja2JveChlbCwgYmluZGluZywgdm5vZGUsIG1vZGVsS2V5KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29ucy1yYW5nZSc6XG4gICAgICAgIGVsLnZhbHVlID0gYmluZGluZy52YWx1ZTtcbiAgICAgICAgX2JpbmRNb2RpZmllcklucHV0T24oT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYmluZGluZy5tb2RpZmllcnMsICdsYXp5JykgPyAnY2hhbmdlJyA6ICdpbnB1dCcsIG1vZGVsS2V5LCB2bm9kZSwgYmluZGluZy5tb2RpZmllcnMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLWlucHV0JzpcbiAgICAgICAgc3dpdGNoIChlbC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgZWwuY2hlY2tlZCA9IGVsLnZhbHVlID09PSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICAgICAgX2JpbmRTaW1wbGVJbnB1dE9uKCdjaGFuZ2UnLCBtb2RlbEtleSwgdm5vZGUsICd2YWx1ZScpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICBfYmluZENoZWNrYm94KGVsLCBiaW5kaW5nLCB2bm9kZSwgbW9kZWxLZXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWwudmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICAgICAgX2JpbmRNb2RpZmllcklucHV0T24oT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYmluZGluZy5tb2RpZmllcnMsICdsYXp5JykgPyAnY2hhbmdlJyA6ICdpbnB1dCcsIG1vZGVsS2V5LCB2bm9kZSwgYmluZGluZy5tb2RpZmllcnMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1widi1vbnMtbW9kZWxcIiBkaXJlY3RpdmUgY2Fubm90IGJlIHVzZWQgd2l0aCBcIicgKyB0YWcgKyAnXCIgZWxlbWVudC4nKTtcbiAgICB9XG4gIH0sXG5cbiAgLypcbiAgICogQ2F1dGlvbjpcbiAgICogVGhpcyBob29rIGlzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSB2aWV3IGNoYW5nZXMgc2luY2VcbiAgICogdGhlIGRpcmVjdGl2ZSdzIHZhbHVlIGlzIHVwZGF0ZWQgaW4gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgKlxuICAgKiBBbHNvLCBvbmx5IDEgaW5zdGFuY2Ugb2YgdGhpcyBkaXJlY3RpdmUgZXhpc3RzLiBUaGVyZWZvcmUsXG4gICAqIGl0IGlzIGNhbGxlZCBmb3IgZXZlcnkgY29tcG9uZW50IHdoZW5ldmVyIDEgc2luZ2xlXG4gICAqIGNvbXBvbmVudCB1c2luZyB0aGlzIGRpcmVjdGl2ZSBpcyB1cGRhdGVkLlxuICAgKi9cbiAgdXBkYXRlKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGNvbnN0IG1vZGVsS2V5ID0gYmluZGluZy5leHByZXNzaW9uLnRyaW0oKTtcbiAgICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSAnb25zLXNlbGVjdCc6XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikgeyBvcHRpb24udmFsdWUgPT0gYmluZGluZy52YWx1ZSA/IG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJykgOiBvcHRpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXN3aXRjaCc6XG4gICAgICAgIF91cGRhdGVDaGVja2JveChlbCwgYmluZGluZywgdm5vZGUsIG1vZGVsS2V5KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29ucy1yYW5nZSc6XG4gICAgICAgIGVsLnZhbHVlID0gYmluZGluZy52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29ucy1pbnB1dCc6XG4gICAgICAgIHN3aXRjaCAoZWwudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIGVsLmNoZWNrZWQgPSBfZ2V0TW9kZWwobW9kZWxLZXksIHZub2RlLmNvbnRleHQpID09PSBlbC52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgX3VwZGF0ZUNoZWNrYm94KGVsLCBiaW5kaW5nLCB2bm9kZSwgbW9kZWxLZXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWwudmFsdWUgIT09IGJpbmRpbmcudmFsdWUgJiYgKGVsLnZhbHVlID0gYmluZGluZy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvVk9uc01vZGVsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==