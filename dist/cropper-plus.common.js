/*!
 * CropperPlus.js v1.0.4
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present ZhenyuGeng
 * Released under the MIT license
 *
 * Date: 2022-12-11T09:27:24.832Z
 */

'use strict';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
var NAMESPACE = 'cropper';

// Actions
var ACTION_ALL = 'all';
var ACTION_CROP = 'crop';
var ACTION_MOVE = 'move';
var ACTION_ZOOM = 'zoom';
var ACTION_EAST = 'e';
var ACTION_WEST = 'w';
var ACTION_SOUTH = 's';
var ACTION_NORTH = 'n';
var ACTION_NORTH_EAST = 'ne';
var ACTION_NORTH_WEST = 'nw';
var ACTION_SOUTH_EAST = 'se';
var ACTION_SOUTH_WEST = 'sw';

// Classes
var CLASS_CROP = "".concat(NAMESPACE, "-crop");
var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
var CLASS_MOVE = "".concat(NAMESPACE, "-move");

// Data keys
var DATA_ACTION = "".concat(NAMESPACE, "Action");
var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");

// Drag modes
var DRAG_MODE_CROP = 'crop';
var DRAG_MODE_MOVE = 'move';
var DRAG_MODE_NONE = 'none';

// Events
var EVENT_CROP = 'crop';
var EVENT_CROP_END = 'cropend';
var EVENT_CROP_MOVE = 'cropmove';
var EVENT_CROP_START = 'cropstart';
var EVENT_DBLCLICK = 'dblclick';
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
var EVENT_READY = 'ready';
var EVENT_RESIZE = 'resize';
var EVENT_WHEEL = 'wheel';
var EVENT_ZOOM = 'zoom';

// Mime types
var MIME_TYPE_JPEG = 'image/jpeg';

// RegExps
var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
var REGEXP_TAG_NAME = /^img|canvas$/i;

// Misc
// Inspired by the default width and height of a canvas element.
var MIN_CONTAINER_WIDTH = 200;
var MIN_CONTAINER_HEIGHT = 100;

var DEFAULTS = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3

  // Define the dragging mode of the cropper
  dragMode: DRAG_MODE_CROP,
  // 'crop', 'move' or 'none'

  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: '',
  // Re-render the cropper when resize the window
  responsive: true,
  // Restore the cropped area after resize the window
  restore: true,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,
  // Check the current image's Exif Orientation information
  checkOrientation: true,
  // Show the black modal
  modal: true,
  // Show the dashed lines for guiding
  guides: true,
  // Show the center indicator for guiding
  center: true,
  // Show the white modal to highlight the crop box
  highlight: true,
  // Show the grid background
  background: true,
  // Enable to crop the image automatically when initialize
  autoCrop: true,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: true,
  // Enable to rotate the image
  rotatable: true,
  // Enable to scale the image
  scalable: true,
  // Enable to zoom the image
  zoomable: true,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: true,
  // Enable to resize the crop box
  cropBoxResizable: true,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: MIN_CONTAINER_WIDTH,
  minContainerHeight: MIN_CONTAINER_HEIGHT,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
};

var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

/**
 * Check if the given value is not a number.
 */
var isNaN = Number.isNaN || WINDOW.isNaN;

/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Check if the given value is a positive number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
 */
var isPositiveNumber = function isPositiveNumber(value) {
  return value > 0 && value < Infinity;
};

/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */
function isObject(value) {
  return _typeof(value) === 'object' && value !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (error) {
    return false;
  }
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
function isFunction(value) {
  return typeof value === 'function';
}
var slice = Array.prototype.slice;

/**
 * Convert array-like or iterable object to an array.
 * @param {*} value - The value to convert.
 * @returns {Array} Returns a new array.
 */
function toArray(value) {
  return Array.from ? Array.from(value) : slice.call(value);
}

/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @returns {*} The original data.
 */
function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
      toArray(data).forEach(function (value, key) {
        callback.call(data, value, key, data);
      });
    } else if (isObject(data)) {
      Object.keys(data).forEach(function (key) {
        callback.call(data, data[key], key, data);
      });
    }
  }
  return data;
}

/**
 * Extend the given object.
 * @param {*} target - The target object to extend.
 * @param {*} args - The rest objects for merging to the target object.
 * @returns {Object} The extended object.
 */
var assign$1 = Object.assign || function assign(target) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isObject(target) && args.length > 0) {
    args.forEach(function (arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function (key) {
          target[key] = arg[key];
        });
      }
    });
  }
  return target;
};
var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;

/**
 * Normalize decimal number.
 * Check out {@link https://0.30000000000000004.com/}
 * @param {number} value - The value to normalize.
 * @param {number} [times=100000000000] - The times for normalizing.
 * @returns {number} Returns the normalized number.
 */
function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}
var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;

/**
 * Apply styles to the given element.
 * @param {Element} element - The target element.
 * @param {Object} styles - The styles for applying.
 */
function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function (value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value = "".concat(value, "px");
    }
    style[property] = value;
  });
}

/**
 * Check if the given element has a special class.
 * @param {Element} element - The element to check.
 * @param {string} value - The class to search.
 * @returns {boolean} Returns `true` if the special class was found.
 */
function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}

/**
 * Add classes to the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be added.
 */
function addClass(element, value) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      addClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.add(value);
    return;
  }
  var className = element.className.trim();
  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}

/**
 * Remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be removed.
 */
function removeClass(element, value) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      removeClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.remove(value);
    return;
  }
  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, '');
  }
}

/**
 * Add or remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be toggled.
 * @param {boolean} added - Add only.
 */
function toggleClass(element, value, added) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      toggleClass(elem, value, added);
    });
    return;
  }

  // IE10-11 doesn't support the second parameter of `classList.toggle`
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

/**
 * Transform the given string from camelCase to kebab-case
 * @param {string} value - The value to transform.
 * @returns {string} The transformed value.
 */
function toParamCase(value) {
  return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
}

/**
 * Get data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to get.
 * @returns {string} The data value.
 */
function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }
  if (element.dataset) {
    return element.dataset[name];
  }
  return element.getAttribute("data-".concat(toParamCase(name)));
}

/**
 * Set data to the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to set.
 * @param {string} data - The data value.
 */
function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(toParamCase(name)), data);
  }
}

/**
 * Remove data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to remove.
 */
function removeData(element, name) {
  if (isObject(element[name])) {
    try {
      delete element[name];
    } catch (error) {
      element[name] = undefined;
    }
  } else if (element.dataset) {
    // #128 Safari not allows to delete dataset property
    try {
      delete element.dataset[name];
    } catch (error) {
      element.dataset[name] = undefined;
    }
  } else {
    element.removeAttribute("data-".concat(toParamCase(name)));
  }
}
var REGEXP_SPACES = /\s\s*/;
var onceSupported = function () {
  var supported = false;
  if (IS_BROWSER) {
    var once = false;
    var listener = function listener() {};
    var options = Object.defineProperty({}, 'once', {
      get: function get() {
        supported = true;
        return once;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener('test', listener, options);
    WINDOW.removeEventListener('test', listener, options);
  }
  return supported;
}();

/**
 * Remove event listener from the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */
function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (!onceSupported) {
      var listeners = element.listeners;
      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];
        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }
        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }
    element.removeEventListener(event, handler, options);
  });
}

/**
 * Add event listener to the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */
function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners,
        listeners = _element$listeners === void 0 ? {} : _element$listeners;
      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        listener.apply(element, args);
      };
      if (!listeners[event]) {
        listeners[event] = {};
      }
      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }
      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }
    element.addEventListener(event, _handler, options);
  });
}

/**
 * Dispatch event on the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Object} data - The additional event data.
 * @returns {boolean} Indicate if the event is default prevented or not.
 */
function dispatchEvent(element, type, data) {
  var event;

  // Event and CustomEvent on IE9-11 are global objects, not constructors
  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, true, true, data);
  }
  return element.dispatchEvent(event);
}

/**
 * Get the offset base on the document.
 * @param {Element} element - The target element.
 * @returns {Object} The offset data.
 */
function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var location = WINDOW.location;
var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

/**
 * Check if the given URL is a cross origin URL.
 * @param {string} url - The target URL.
 * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
 */
function isCrossOriginURL(url) {
  var parts = url.match(REGEXP_ORIGINS);
  return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}

/**
 * Add timestamp to the given URL.
 * @param {string} url - The target URL.
 * @returns {string} The result URL.
 */
function addTimestamp(url) {
  var timestamp = "timestamp=".concat(new Date().getTime());
  return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
}

/**
 * Get transforms base on the given object.
 * @param {Object} obj - The target object.
 * @returns {string} A string contains transform values.
 */
function getTransforms(_ref) {
  var rotate = _ref.rotate,
    scaleX = _ref.scaleX,
    scaleY = _ref.scaleY,
    translateX = _ref.translateX,
    translateY = _ref.translateY;
  var values = [];
  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }
  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  }

  // Rotate should come first before scale to match orientation transform
  if (isNumber(rotate) && rotate !== 0) {
    values.push("rotate(".concat(rotate, "deg)"));
  }
  if (isNumber(scaleX) && scaleX !== 1) {
    values.push("scaleX(".concat(scaleX, ")"));
  }
  if (isNumber(scaleY) && scaleY !== 1) {
    values.push("scaleY(".concat(scaleY, ")"));
  }
  var transform = values.length ? values.join(' ') : 'none';
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform: transform
  };
}

/**
 * Get the max ratio of a group of pointers.
 * @param {string} pointers - The target pointers.
 * @returns {number} The result ratio.
 */
function getMaxZoomRatio(pointers) {
  var pointers2 = _objectSpread2({}, pointers);
  var maxRatio = 0;
  forEach(pointers, function (pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function (pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      if (Math.abs(ratio) > Math.abs(maxRatio)) {
        maxRatio = ratio;
      }
    });
  });
  return maxRatio;
}

/**
 * Get a pointer from an event object.
 * @param {Object} event - The target event object.
 * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
 * @returns {Object} The result pointer contains start and/or end point coordinates.
 */
function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX,
    pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : _objectSpread2({
    startX: pageX,
    startY: pageY
  }, end);
}

/**
 * Get the center point coordinate of a group of pointers.
 * @param {Object} pointers - The target pointers.
 * @returns {Object} The center point coordinate.
 */
function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function (_ref3) {
    var startX = _ref3.startX,
      startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX: pageX,
    pageY: pageY
  };
}

/**
 * Get the max sizes in a rectangle under the given aspect ratio.
 * @param {Object} data - The original sizes.
 * @param {string} [type='contain'] - The adjust type.
 * @returns {Object} The result sizes.
 */
function getAdjustedSizes(_ref4) {
  var aspectRatio = _ref4.aspectRatio,
    height = _ref4.height,
    width = _ref4.width;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
  var isValidWidth = isPositiveNumber(width);
  var isValidHeight = isPositiveNumber(height);
  if (isValidWidth && isValidHeight) {
    var adjustedWidth = height * aspectRatio;
    if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }
  } else if (isValidWidth) {
    height = width / aspectRatio;
  } else if (isValidHeight) {
    width = height * aspectRatio;
  }
  return {
    width: width,
    height: height
  };
}

/**
 * Get the new sizes of a rectangle after rotated.
 * @param {Object} data - The original sizes.
 * @returns {Object} The result sizes.
 */
function getRotatedSizes(_ref5) {
  var width = _ref5.width,
    height = _ref5.height,
    degree = _ref5.degree;
  degree = Math.abs(degree) % 180;
  if (degree === 90) {
    return {
      width: height,
      height: width
    };
  }
  var arc = degree % 90 * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var newWidth = width * cosArc + height * sinArc;
  var newHeight = width * sinArc + height * cosArc;
  return degree > 90 ? {
    width: newHeight,
    height: newWidth
  } : {
    width: newWidth,
    height: newHeight
  };
}

/**
 * Get a canvas which drew the given image.
 * @param {HTMLImageElement} image - The image for drawing.
 * @param {Object} imageData - The image data.
 * @param {Object} canvasData - The canvas data.
 * @param {Object} options - The options.
 * @returns {HTMLCanvasElement} The result canvas.
 */
function getSourceCanvas(image, _ref6, _ref7, _ref8) {
  var imageAspectRatio = _ref6.aspectRatio,
    imageNaturalWidth = _ref6.naturalWidth,
    imageNaturalHeight = _ref6.naturalHeight,
    _ref6$rotate = _ref6.rotate,
    rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
    _ref6$scaleX = _ref6.scaleX,
    scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
    _ref6$scaleY = _ref6.scaleY,
    scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
  var aspectRatio = _ref7.aspectRatio,
    naturalWidth = _ref7.naturalWidth,
    naturalHeight = _ref7.naturalHeight;
  var _ref8$fillColor = _ref8.fillColor,
    fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
    _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
    imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
    _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
    imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
    _ref8$maxWidth = _ref8.maxWidth,
    maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
    _ref8$maxHeight = _ref8.maxHeight,
    maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
    _ref8$minWidth = _ref8.minWidth,
    minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
    _ref8$minHeight = _ref8.minHeight,
    minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var maxSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var minSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
  var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));

  // Note: should always use image's natural sizes for drawing as
  // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90
  var destMaxSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var destMinSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
  var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
  var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
  canvas.width = normalizeDecimalNumber(width);
  canvas.height = normalizeDecimalNumber(height);
  context.fillStyle = fillColor;
  context.fillRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(rotate * Math.PI / 180);
  context.scale(scaleX, scaleY);
  context.imageSmoothingEnabled = imageSmoothingEnabled;
  context.imageSmoothingQuality = imageSmoothingQuality;
  context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
    return Math.floor(normalizeDecimalNumber(param));
  }))));
  context.restore();
  return canvas;
}
var fromCharCode = String.fromCharCode;

/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */
function getStringFromCharCode(dataView, start, length) {
  var str = '';
  length += start;
  for (var i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }
  return str;
}
var REGEXP_DATA_URL_HEAD = /^data:.*,/;

/**
 * Transform Data URL to array buffer.
 * @param {string} dataURL - The Data URL to transform.
 * @returns {ArrayBuffer} The result array buffer.
 */
function dataURLToArrayBuffer(dataURL) {
  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
  var binary = atob(base64);
  var arrayBuffer = new ArrayBuffer(binary.length);
  var uint8 = new Uint8Array(arrayBuffer);
  forEach(uint8, function (value, i) {
    uint8[i] = binary.charCodeAt(i);
  });
  return arrayBuffer;
}

/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */
function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var chunks = [];

  // Chunk Typed Array for better performance (#435)
  var chunkSize = 8192;
  var uint8 = new Uint8Array(arrayBuffer);
  while (uint8.length > 0) {
    // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
    // eslint-disable-next-line prefer-spread
    chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
    uint8 = uint8.subarray(chunkSize);
  }
  return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
}

/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */
function resetAndGetOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation;

  // Ignores range error when the image does not have correct Exif information
  try {
    var littleEndian;
    var app1Start;
    var ifdStart;

    // Only handle JPEG image (start by 0xFFD8)
    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
      var length = dataView.byteLength;
      var offset = 2;
      while (offset + 1 < length) {
        if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
          app1Start = offset;
          break;
        }
        offset += 1;
      }
    }
    if (app1Start) {
      var exifIDCode = app1Start + 4;
      var tiffOffset = app1Start + 10;
      if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
        var endianness = dataView.getUint16(tiffOffset);
        littleEndian = endianness === 0x4949;
        if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
      }
    }
    if (ifdStart) {
      var _length = dataView.getUint16(ifdStart, littleEndian);
      var _offset;
      var i;
      for (i = 0; i < _length; i += 1) {
        _offset = ifdStart + i * 12 + 2;
        if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
          // 8 is the offset of the current tag's value
          _offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(_offset, littleEndian);

          // Override the orientation with its default value
          dataView.setUint16(_offset, 1, littleEndian);
          break;
        }
      }
    }
  } catch (error) {
    orientation = 1;
  }
  return orientation;
}

/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */
function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;
  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;

    // Rotate left 180°
    case 3:
      rotate = -180;
      break;

    // Flip vertical
    case 4:
      scaleY = -1;
      break;

    // Flip vertical and rotate right 90°
    case 5:
      rotate = 90;
      scaleY = -1;
      break;

    // Rotate right 90°
    case 6:
      rotate = 90;
      break;

    // Flip horizontal and rotate right 90°
    case 7:
      rotate = 90;
      scaleX = -1;
      break;

    // Rotate left 90°
    case 8:
      rotate = -90;
      break;
  }
  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var render = {
  render: function render() {
    this.initContainer();
    this.initCanvas();
    this.initCropBox();
    this.renderCanvas();
    if (this.cropped) {
      this.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var element = this.element,
      options = this.options,
      container = this.container,
      cropper = this.cropper;
    var minWidth = Number(options.minContainerWidth);
    var minHeight = Number(options.minContainerHeight);
    addClass(cropper, CLASS_HIDDEN);
    removeClass(element, CLASS_HIDDEN);
    var containerData = {
      width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
      height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
    };
    this.containerData = containerData;
    setStyle(cropper, {
      width: containerData.width,
      height: containerData.height
    });
    addClass(element, CLASS_HIDDEN);
    removeClass(cropper, CLASS_HIDDEN);
  },
  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var containerData = this.containerData,
      imageData = this.imageData;
    var viewMode = this.options.viewMode;
    var rotated = Math.abs(imageData.rotate) % 180 === 90;
    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerData.width;
    var canvasHeight = containerData.height;
    if (containerData.height * aspectRatio > containerData.width) {
      if (viewMode === 3) {
        canvasWidth = containerData.height * aspectRatio;
      } else {
        canvasHeight = containerData.width / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerData.width / aspectRatio;
    } else {
      canvasWidth = containerData.height * aspectRatio;
    }
    var canvasData = {
      aspectRatio: aspectRatio,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      width: canvasWidth,
      height: canvasHeight
    };
    this.canvasData = canvasData;
    this.limited = viewMode === 1 || viewMode === 2;
    this.limitCanvas(true, true);
    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    canvasData.left = (containerData.width - canvasData.width) / 2;
    canvasData.top = (containerData.height - canvasData.height) / 2;
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    this.initialCanvasData = assign$1({}, canvasData);
  },
  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
    var options = this.options,
      containerData = this.containerData,
      canvasData = this.canvasData,
      cropBoxData = this.cropBoxData;
    var viewMode = options.viewMode;
    var aspectRatio = canvasData.aspectRatio;
    var cropped = this.cropped && cropBoxData;
    if (sizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;
      if (viewMode > 1) {
        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
        if (viewMode === 3) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      } else if (viewMode > 0) {
        if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBoxData.width;
          minCanvasHeight = cropBoxData.height;
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }
      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: minCanvasWidth,
        height: minCanvasHeight
      });
      minCanvasWidth = _getAdjustedSizes.width;
      minCanvasHeight = _getAdjustedSizes.height;
      canvasData.minWidth = minCanvasWidth;
      canvasData.minHeight = minCanvasHeight;
      canvasData.maxWidth = Infinity;
      canvasData.maxHeight = Infinity;
    }
    if (positionLimited) {
      if (viewMode > (cropped ? 0 : 1)) {
        var newCanvasLeft = containerData.width - canvasData.width;
        var newCanvasTop = containerData.height - canvasData.height;
        canvasData.minLeft = Math.min(0, newCanvasLeft);
        canvasData.minTop = Math.min(0, newCanvasTop);
        canvasData.maxLeft = Math.max(0, newCanvasLeft);
        canvasData.maxTop = Math.max(0, newCanvasTop);
        if (cropped && this.limited) {
          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
          canvasData.maxLeft = cropBoxData.left;
          canvasData.maxTop = cropBoxData.top;
          if (viewMode === 2) {
            if (canvasData.width >= containerData.width) {
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
            }
            if (canvasData.height >= containerData.height) {
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvasData.minLeft = -canvasData.width;
        canvasData.minTop = -canvasData.height;
        canvasData.maxLeft = containerData.width;
        canvasData.maxTop = containerData.height;
      }
    }
  },
  renderCanvas: function renderCanvas(changed, transformed) {
    var canvasData = this.canvasData,
      imageData = this.imageData;
    if (transformed) {
      var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
        naturalWidth = _getRotatedSizes.width,
        naturalHeight = _getRotatedSizes.height;
      var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
      var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
      canvasData.left -= (width - canvasData.width) / 2;
      canvasData.top -= (height - canvasData.height) / 2;
      canvasData.width = width;
      canvasData.height = height;
      canvasData.aspectRatio = naturalWidth / naturalHeight;
      canvasData.naturalWidth = naturalWidth;
      canvasData.naturalHeight = naturalHeight;
      this.limitCanvas(true, false);
    }
    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
      canvasData.left = canvasData.oldLeft;
    }
    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
      canvasData.top = canvasData.oldTop;
    }
    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    this.limitCanvas(false, true);
    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    setStyle(this.canvas, assign$1({
      width: canvasData.width,
      height: canvasData.height
    }, getTransforms({
      translateX: canvasData.left,
      translateY: canvasData.top
    })));
    this.renderImage(changed);
    if (this.cropped && this.limited) {
      this.limitCropBox(true, true);
    }
  },
  renderImage: function renderImage(changed) {
    var canvasData = this.canvasData,
      imageData = this.imageData;
    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
    assign$1(imageData, {
      width: width,
      height: height,
      left: (canvasData.width - width) / 2,
      top: (canvasData.height - height) / 2
    });
    setStyle(this.image, assign$1({
      width: imageData.width,
      height: imageData.height
    }, getTransforms(assign$1({
      translateX: imageData.left,
      translateY: imageData.top
    }, imageData))));
    if (changed) {
      this.output();
    }
  },
  initCropBox: function initCropBox() {
    var options = this.options,
      canvasData = this.canvasData;
    var aspectRatio = options.aspectRatio || options.initialAspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBoxData = {
      width: canvasData.width,
      height: canvasData.height
    };
    if (aspectRatio) {
      if (canvasData.height * aspectRatio > canvasData.width) {
        cropBoxData.height = cropBoxData.width / aspectRatio;
      } else {
        cropBoxData.width = cropBoxData.height * aspectRatio;
      }
    }
    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true);

    // Initialize auto crop area
    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);

    // The width/height of auto crop area must large than "minWidth/Height"
    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    this.initialCropBoxData = assign$1({}, cropBoxData);
  },
  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
    var options = this.options,
      containerData = this.containerData,
      canvasData = this.canvasData,
      cropBoxData = this.cropBoxData,
      limited = this.limited;
    var aspectRatio = options.aspectRatio;
    if (sizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
      var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;

      // The min/maxCropBoxWidth/Height must be less than container's width/height
      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }
        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      }

      // The minWidth/Height must be less than maxWidth/Height
      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }
    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, canvasData.left);
        cropBoxData.minTop = Math.max(0, canvasData.top);
        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var options = this.options,
      containerData = this.containerData,
      cropBoxData = this.cropBoxData;
    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }
    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }
    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    this.limitCropBox(false, true);
    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    if (options.movable && options.cropBoxMovable) {
      // Turn to move the canvas when the crop box is equal to the container
      setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
    }
    setStyle(this.cropBox, assign$1({
      width: cropBoxData.width,
      height: cropBoxData.height
    }, getTransforms({
      translateX: cropBoxData.left,
      translateY: cropBoxData.top
    })));
    if (this.cropped && this.limited) {
      this.limitCanvas(true, true);
    }
    if (!this.disabled) {
      this.output();
    }
  },
  output: function output() {
    this.preview();
    dispatchEvent(this.element, EVENT_CROP, this.getData());
  }
};

var preview = {
  initPreview: function initPreview() {
    var element = this.element,
      crossOrigin = this.crossOrigin;
    var preview = this.options.preview;
    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var alt = element.alt || 'The image to preview';
    var image = document.createElement('img');
    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }
    image.src = url;
    image.alt = alt;
    this.viewBox.appendChild(image);
    this.viewBoxImage = image;
    if (!preview) {
      return;
    }
    var previews = preview;
    if (typeof preview === 'string') {
      previews = element.ownerDocument.querySelectorAll(preview);
    } else if (preview.querySelector) {
      previews = [preview];
    }
    this.previews = previews;
    forEach(previews, function (el) {
      var img = document.createElement('img');

      // Save the original size for recover
      setData(el, DATA_PREVIEW, {
        width: el.offsetWidth,
        height: el.offsetHeight,
        html: el.innerHTML
      });
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.src = url;
      img.alt = alt;

      /**
       * Override img element styles
       * Add `display:block` to avoid margin top issue
       * Add `height:auto` to override `height` attribute on IE8
       * (Occur only when margin-top <= -height)
       */
      img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
      el.innerHTML = '';
      el.appendChild(img);
    });
  },
  resetPreview: function resetPreview() {
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      setStyle(element, {
        width: data.width,
        height: data.height
      });
      element.innerHTML = data.html;
      removeData(element, DATA_PREVIEW);
    });
  },
  preview: function preview() {
    var imageData = this.imageData,
      canvasData = this.canvasData,
      cropBoxData = this.cropBoxData;
    var cropBoxWidth = cropBoxData.width,
      cropBoxHeight = cropBoxData.height;
    var width = imageData.width,
      height = imageData.height;
    var left = cropBoxData.left - canvasData.left - imageData.left;
    var top = cropBoxData.top - canvasData.top - imageData.top;
    if (!this.cropped || this.disabled) {
      return;
    }
    setStyle(this.viewBoxImage, assign$1({
      width: width,
      height: height
    }, getTransforms(assign$1({
      translateX: -left,
      translateY: -top
    }, imageData))));
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;
      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }
      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }
      setStyle(element, {
        width: newWidth,
        height: newHeight
      });
      setStyle(element.getElementsByTagName('img')[0], assign$1({
        width: width * ratio,
        height: height * ratio
      }, getTransforms(assign$1({
        translateX: -left * ratio,
        translateY: -top * ratio
      }, imageData))));
    });
  }
};

var events = {
  bind: function bind() {
    var element = this.element,
      options = this.options,
      cropper = this.cropper;
    if (isFunction(options.cropstart)) {
      addListener(element, EVENT_CROP_START, options.cropstart);
    }
    if (isFunction(options.cropmove)) {
      addListener(element, EVENT_CROP_MOVE, options.cropmove);
    }
    if (isFunction(options.cropend)) {
      addListener(element, EVENT_CROP_END, options.cropend);
    }
    if (isFunction(options.crop)) {
      addListener(element, EVENT_CROP, options.crop);
    }
    if (isFunction(options.zoom)) {
      addListener(element, EVENT_ZOOM, options.zoom);
    }
    addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
    if (options.zoomable && options.zoomOnWheel) {
      addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }
    if (options.toggleDragModeOnDblclick) {
      addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }
    addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
    addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
    if (options.responsive) {
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    }
  },
  unbind: function unbind() {
    var element = this.element,
      options = this.options,
      cropper = this.cropper;
    if (isFunction(options.cropstart)) {
      removeListener(element, EVENT_CROP_START, options.cropstart);
    }
    if (isFunction(options.cropmove)) {
      removeListener(element, EVENT_CROP_MOVE, options.cropmove);
    }
    if (isFunction(options.cropend)) {
      removeListener(element, EVENT_CROP_END, options.cropend);
    }
    if (isFunction(options.crop)) {
      removeListener(element, EVENT_CROP, options.crop);
    }
    if (isFunction(options.zoom)) {
      removeListener(element, EVENT_ZOOM, options.zoom);
    }
    removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
    if (options.zoomable && options.zoomOnWheel) {
      removeListener(cropper, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
    }
    if (options.toggleDragModeOnDblclick) {
      removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
    }
    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
    if (options.responsive) {
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  }
};

var handlers = {
  resize: function resize() {
    if (this.disabled) {
      return;
    }
    var options = this.options,
      container = this.container,
      containerData = this.containerData;
    var ratioX = container.offsetWidth / containerData.width;
    var ratioY = container.offsetHeight / containerData.height;
    var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;

    // Resize when width changed or height changed
    if (ratio !== 1) {
      var canvasData;
      var cropBoxData;
      if (options.restore) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
      }
      this.render();
      if (options.restore) {
        this.setCanvasData(forEach(canvasData, function (n, i) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData(forEach(cropBoxData, function (n, i) {
          cropBoxData[i] = n * ratio;
        }));
      }
    }
  },
  dblclick: function dblclick() {
    if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
      return;
    }
    this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
  },
  wheel: function wheel(event) {
    var _this = this;
    var ratio = Number(this.options.wheelZoomRatio) || 0.1;
    var delta = 1;
    if (this.disabled) {
      return;
    }
    event.preventDefault();

    // Limit wheel speed to prevent zoom too fast (#21)
    if (this.wheeling) {
      return;
    }
    this.wheeling = true;
    setTimeout(function () {
      _this.wheeling = false;
    }, 50);
    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }
    this.zoom(-delta * ratio, event);
  },
  cropStart: function cropStart(event) {
    var buttons = event.buttons,
      button = event.button;
    if (this.disabled

    // Handle mouse event and pointer event and ignore touch event
    || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && (
    // No primary button (Usually the left button)
    isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0

    // Open context menu
    || event.ctrlKey)) {
      return;
    }
    var options = this.options,
      pointers = this.pointers;
    var action;
    if (event.changedTouches) {
      // Handle touch event
      forEach(event.changedTouches, function (touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      // Handle mouse event and pointer event
      pointers[event.pointerId || 0] = getPointer(event);
    }
    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = ACTION_ZOOM;
    } else {
      action = getData(event.target, DATA_ACTION);
    }
    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }
    if (dispatchEvent(this.element, EVENT_CROP_START, {
      originalEvent: event,
      action: action
    }) === false) {
      return;
    }

    // This line is required for preventing page zooming in iOS browsers
    event.preventDefault();
    this.action = action;
    this.cropping = false;
    if (action === ACTION_CROP) {
      this.cropping = true;
      addClass(this.dragBox, CLASS_MODAL);
    }
  },
  cropMove: function cropMove(event) {
    var action = this.action;
    if (this.disabled || !action) {
      return;
    }
    var pointers = this.pointers;
    event.preventDefault();
    if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
      originalEvent: event,
      action: action
    }) === false) {
      return;
    }
    if (event.changedTouches) {
      forEach(event.changedTouches, function (touch) {
        // The first parameter should not be undefined (#432)
        assign$1(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign$1(pointers[event.pointerId || 0] || {}, getPointer(event, true));
    }
    this.change(event);
  },
  cropEnd: function cropEnd(event) {
    if (this.disabled) {
      return;
    }
    var action = this.action,
      pointers = this.pointers;
    if (event.changedTouches) {
      forEach(event.changedTouches, function (touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[event.pointerId || 0];
    }
    if (!action) {
      return;
    }
    event.preventDefault();
    if (!Object.keys(pointers).length) {
      this.action = '';
    }
    if (this.cropping) {
      this.cropping = false;
      toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
    }
    dispatchEvent(this.element, EVENT_CROP_END, {
      originalEvent: event,
      action: action
    });
  }
};

var change = {
  change: function change(event) {
    var options = this.options,
      canvasData = this.canvasData,
      containerData = this.containerData,
      cropBoxData = this.cropBoxData,
      pointers = this.pointers;
    var action = this.action;
    var aspectRatio = options.aspectRatio;
    var left = cropBoxData.left,
      top = cropBoxData.top,
      width = cropBoxData.width,
      height = cropBoxData.height;
    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = containerData.width;
    var maxHeight = containerData.height;
    var renderable = true;
    var offset;

    // Locking aspect ratio in "free mode" by holding shift key
    if (!aspectRatio && event.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }
    if (this.limited) {
      minLeft = cropBoxData.minLeft;
      minTop = cropBoxData.minTop;
      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    }
    var pointer = pointers[Object.keys(pointers)[0]];
    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };
    var check = function check(side) {
      switch (side) {
        case ACTION_EAST:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }
          break;
        case ACTION_WEST:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }
          break;
        case ACTION_NORTH:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }
          break;
        case ACTION_SOUTH:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }
          break;
      }
    };
    switch (action) {
      // Move crop box
      case ACTION_ALL:
        left += range.x;
        top += range.y;
        break;

      // Resize crop box
      case ACTION_EAST:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }
        check(ACTION_EAST);
        width += range.x;
        if (width < 0) {
          action = ACTION_WEST;
          width = -width;
          left -= width;
        }
        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }
        break;
      case ACTION_NORTH:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }
        check(ACTION_NORTH);
        height -= range.y;
        top += range.y;
        if (height < 0) {
          action = ACTION_SOUTH;
          height = -height;
          top -= height;
        }
        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }
        break;
      case ACTION_WEST:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }
        check(ACTION_WEST);
        width -= range.x;
        left += range.x;
        if (width < 0) {
          action = ACTION_EAST;
          width = -width;
          left -= width;
        }
        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }
        break;
      case ACTION_SOUTH:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }
        check(ACTION_SOUTH);
        height += range.y;
        if (height < 0) {
          action = ACTION_NORTH;
          height = -height;
          top -= height;
        }
        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }
        break;
      case ACTION_NORTH_EAST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          check(ACTION_NORTH);
          check(ACTION_EAST);
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }
          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_NORTH_WEST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += cropBoxData.width - width;
        } else {
          check(ACTION_NORTH);
          check(ACTION_WEST);
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }
          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_SOUTH_WEST:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }
          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_WEST);
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }
          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_SOUTH_EAST:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }
          check(ACTION_EAST);
          width += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_EAST);
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }
          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          top -= height;
        }
        break;

      // Move canvas
      case ACTION_MOVE:
        this.move(range.x, range.y);
        renderable = false;
        break;

      // Zoom canvas
      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), event);
        renderable = false;
        break;

      // Create crop box
      case ACTION_CROP:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }
        offset = getOffset(this.cropper);
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;
        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }
        if (range.y < 0) {
          top -= height;
        }

        // Show the crop box if is hidden
        if (!this.cropped) {
          removeClass(this.cropBox, CLASS_HIDDEN);
          this.cropped = true;
          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }
        break;
    }
    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.renderCropBox();
    }

    // Override
    forEach(pointers, function (p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
};

var methods = {
  // Show the crop box manually
  crop: function crop() {
    if (this.ready && !this.cropped && !this.disabled) {
      this.cropped = true;
      this.limitCropBox(true, true);
      if (this.options.modal) {
        addClass(this.dragBox, CLASS_MODAL);
      }
      removeClass(this.cropBox, CLASS_HIDDEN);
      this.setCropBoxData(this.initialCropBoxData);
    }
    return this;
  },
  // Reset the image and crop box to their initial states
  reset: function reset() {
    if (this.ready && !this.disabled) {
      this.imageData = assign$1({}, this.initialImageData);
      this.canvasData = assign$1({}, this.initialCanvasData);
      this.cropBoxData = assign$1({}, this.initialCropBoxData);
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    }
    return this;
  },
  // Clear the crop box
  clear: function clear() {
    if (this.cropped && !this.disabled) {
      assign$1(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas(true, true);

      // Render canvas after crop box rendered
      this.renderCanvas();
      removeClass(this.dragBox, CLASS_MODAL);
      addClass(this.cropBox, CLASS_HIDDEN);
    }
    return this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function replace(url) {
    var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!this.disabled && url) {
      if (this.isImg) {
        this.element.src = url;
      }
      if (hasSameSize) {
        this.url = url;
        this.image.src = url;
        if (this.ready) {
          this.viewBoxImage.src = url;
          forEach(this.previews, function (element) {
            element.getElementsByTagName('img')[0].src = url;
          });
        }
      } else {
        if (this.isImg) {
          this.replaced = true;
        }
        this.options.data = null;
        this.uncreate();
        this.load(url);
      }
    }
    return this;
  },
  // Enable (unfreeze) the cropper
  enable: function enable() {
    if (this.ready && this.disabled) {
      this.disabled = false;
      removeClass(this.cropper, CLASS_DISABLED);
    }
    return this;
  },
  // Disable (freeze) the cropper
  disable: function disable() {
    if (this.ready && !this.disabled) {
      this.disabled = true;
      addClass(this.cropper, CLASS_DISABLED);
    }
    return this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function destroy() {
    var element = this.element;
    if (!element[NAMESPACE]) {
      return this;
    }
    element[NAMESPACE] = undefined;
    if (this.isImg && this.replaced) {
      element.src = this.originalUrl;
    }
    this.uncreate();
    return this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function move(offsetX) {
    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
    var _this$canvasData = this.canvasData,
      left = _this$canvasData.left,
      top = _this$canvasData.top;
    return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function moveTo(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var canvasData = this.canvasData;
    var changed = false;
    x = Number(x);
    y = Number(y);
    if (this.ready && !this.disabled && this.options.movable) {
      if (isNumber(x)) {
        canvasData.left = x;
        changed = true;
      }
      if (isNumber(y)) {
        canvasData.top = y;
        changed = true;
      }
      if (changed) {
        this.renderCanvas(true);
      }
    }
    return this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function zoom(ratio, _originalEvent) {
    var canvasData = this.canvasData;
    ratio = Number(ratio);
    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }
    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
    var options = this.options,
      canvasData = this.canvasData;
    var width = canvasData.width,
      height = canvasData.height,
      naturalWidth = canvasData.naturalWidth,
      naturalHeight = canvasData.naturalHeight;
    ratio = Number(ratio);
    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      if (dispatchEvent(this.element, EVENT_ZOOM, {
        ratio: ratio,
        oldRatio: width / naturalWidth,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }
      if (_originalEvent) {
        var pointers = this.pointers;
        var offset = getOffset(this.cropper);
        var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };

        // Zoom from the triggering point of the event
        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
      } else {
        // Zoom from the center of the canvas
        canvasData.left -= (newWidth - width) / 2;
        canvasData.top -= (newHeight - height) / 2;
      }
      canvasData.width = newWidth;
      canvasData.height = newHeight;
      this.renderCanvas(true);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function rotate(degree) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function rotateTo(degree) {
    degree = Number(degree);
    if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
      this.imageData.rotate = degree % 360;
      this.renderCanvas(true, true);
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function scaleX(_scaleX) {
    var scaleY = this.imageData.scaleY;
    return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function scaleY(_scaleY) {
    var scaleX = this.imageData.scaleX;
    return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function scale(scaleX) {
    var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
    var imageData = this.imageData;
    var transformed = false;
    scaleX = Number(scaleX);
    scaleY = Number(scaleY);
    if (this.ready && !this.disabled && this.options.scalable) {
      if (isNumber(scaleX)) {
        imageData.scaleX = scaleX;
        transformed = true;
      }
      if (isNumber(scaleY)) {
        imageData.scaleY = scaleY;
        transformed = true;
      }
      if (transformed) {
        this.renderCanvas(true, true);
      }
    }
    return this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function getData() {
    var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = this.options,
      imageData = this.imageData,
      canvasData = this.canvasData,
      cropBoxData = this.cropBoxData;
    var data;
    if (this.ready && this.cropped) {
      data = {
        x: cropBoxData.left - canvasData.left,
        y: cropBoxData.top - canvasData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
      var ratio = imageData.width / imageData.naturalWidth;
      forEach(data, function (n, i) {
        data[i] = n / ratio;
      });
      if (rounded) {
        // In case rounding off leads to extra 1px in right or bottom border
        // we should round the top-left corner and the dimension (#343).
        var bottom = Math.round(data.y + data.height);
        var right = Math.round(data.x + data.width);
        data.x = Math.round(data.x);
        data.y = Math.round(data.y);
        data.width = right - data.x;
        data.height = bottom - data.y;
      }
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (options.rotatable) {
      data.rotate = imageData.rotate || 0;
    }
    if (options.scalable) {
      data.scaleX = imageData.scaleX || 1;
      data.scaleY = imageData.scaleY || 1;
    }
    return data;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function setData(data) {
    var options = this.options,
      imageData = this.imageData,
      canvasData = this.canvasData;
    var cropBoxData = {};
    if (this.ready && !this.disabled && isPlainObject(data)) {
      var transformed = false;
      if (options.rotatable) {
        if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
          imageData.rotate = data.rotate;
          transformed = true;
        }
      }
      if (options.scalable) {
        if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
          imageData.scaleX = data.scaleX;
          transformed = true;
        }
        if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
          imageData.scaleY = data.scaleY;
          transformed = true;
        }
      }
      if (transformed) {
        this.renderCanvas(true, true);
      }
      var ratio = imageData.width / imageData.naturalWidth;
      if (isNumber(data.x)) {
        cropBoxData.left = data.x * ratio + canvasData.left;
      }
      if (isNumber(data.y)) {
        cropBoxData.top = data.y * ratio + canvasData.top;
      }
      if (isNumber(data.width)) {
        cropBoxData.width = data.width * ratio;
      }
      if (isNumber(data.height)) {
        cropBoxData.height = data.height * ratio;
      }
      this.setCropBoxData(cropBoxData);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function getContainerData() {
    return this.ready ? assign$1({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function getImageData() {
    return this.sized ? assign$1({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function getCanvasData() {
    var canvasData = this.canvasData;
    var data = {};
    if (this.ready) {
      forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
        data[n] = canvasData[n];
      });
    }
    return data;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function setCanvasData(data) {
    var canvasData = this.canvasData;
    var aspectRatio = canvasData.aspectRatio;
    if (this.ready && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        canvasData.left = data.left;
      }
      if (isNumber(data.top)) {
        canvasData.top = data.top;
      }
      if (isNumber(data.width)) {
        canvasData.width = data.width;
        canvasData.height = data.width / aspectRatio;
      } else if (isNumber(data.height)) {
        canvasData.height = data.height;
        canvasData.width = data.height * aspectRatio;
      }
      this.renderCanvas(true);
    }
    return this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function getCropBoxData() {
    var cropBoxData = this.cropBoxData;
    var data;
    if (this.ready && this.cropped) {
      data = {
        left: cropBoxData.left,
        top: cropBoxData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
    }
    return data || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function setCropBoxData(data) {
    var cropBoxData = this.cropBoxData;
    var aspectRatio = this.options.aspectRatio;
    var widthChanged;
    var heightChanged;
    if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        cropBoxData.left = data.left;
      }
      if (isNumber(data.top)) {
        cropBoxData.top = data.top;
      }
      if (isNumber(data.width) && data.width !== cropBoxData.width) {
        widthChanged = true;
        cropBoxData.width = data.width;
      }
      if (isNumber(data.height) && data.height !== cropBoxData.height) {
        heightChanged = true;
        cropBoxData.height = data.height;
      }
      if (aspectRatio) {
        if (widthChanged) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else if (heightChanged) {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }
      this.renderCropBox();
    }
    return this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function getCroppedCanvas() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement) {
      return null;
    }
    var canvasData = this.canvasData;
    var source = getSourceCanvas(this.image, this.imageData, canvasData, options);

    // Returns the source canvas if it is not cropped.
    if (!this.cropped) {
      return source;
    }
    var _this$getData = this.getData(),
      initialX = _this$getData.x,
      initialY = _this$getData.y,
      initialWidth = _this$getData.width,
      initialHeight = _this$getData.height;
    var ratio = source.width / Math.floor(canvasData.naturalWidth);
    if (ratio !== 1) {
      initialX *= ratio;
      initialY *= ratio;
      initialWidth *= ratio;
      initialHeight *= ratio;
    }
    var aspectRatio = initialWidth / initialHeight;
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.maxWidth || Infinity,
      height: options.maxHeight || Infinity
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.minWidth || 0,
      height: options.minHeight || 0
    }, 'cover');
    var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
      width = _getAdjustedSizes.width,
      height = _getAdjustedSizes.height;
    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = options.fillColor || 'transparent';
    context.fillRect(0, 0, width, height);
    var _options$imageSmoothi = options.imageSmoothingEnabled,
      imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
      imageSmoothingQuality = options.imageSmoothingQuality;
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    if (imageSmoothingQuality) {
      context.imageSmoothingQuality = imageSmoothingQuality;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
    var sourceWidth = source.width;
    var sourceHeight = source.height;

    // Source canvas parameters
    var srcX = initialX;
    var srcY = initialY;
    var srcWidth;
    var srcHeight;

    // Destination canvas parameters
    var dstX;
    var dstY;
    var dstWidth;
    var dstHeight;
    if (srcX <= -initialWidth || srcX > sourceWidth) {
      srcX = 0;
      srcWidth = 0;
      dstX = 0;
      dstWidth = 0;
    } else if (srcX <= 0) {
      dstX = -srcX;
      srcX = 0;
      srcWidth = Math.min(sourceWidth, initialWidth + srcX);
      dstWidth = srcWidth;
    } else if (srcX <= sourceWidth) {
      dstX = 0;
      srcWidth = Math.min(initialWidth, sourceWidth - srcX);
      dstWidth = srcWidth;
    }
    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
      srcY = 0;
      srcHeight = 0;
      dstY = 0;
      dstHeight = 0;
    } else if (srcY <= 0) {
      dstY = -srcY;
      srcY = 0;
      srcHeight = Math.min(sourceHeight, initialHeight + srcY);
      dstHeight = srcHeight;
    } else if (srcY <= sourceHeight) {
      dstY = 0;
      srcHeight = Math.min(initialHeight, sourceHeight - srcY);
      dstHeight = srcHeight;
    }
    var params = [srcX, srcY, srcWidth, srcHeight];

    // Avoid "IndexSizeError"
    if (dstWidth > 0 && dstHeight > 0) {
      var scale = width / initialWidth;
      params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
    }

    // All the numerical parameters should be integer for `drawImage`
    // https://github.com/fengyuanchen/cropper/issues/476
    context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    return canvas;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var options = this.options;
    if (!this.disabled && !isUndefined(aspectRatio)) {
      // 0 -> NaN
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;
      if (this.ready) {
        this.initCropBox();
        if (this.cropped) {
          this.renderCropBox();
        }
      }
    }
    return this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function setDragMode(mode) {
    var options = this.options,
      dragBox = this.dragBox,
      face = this.face;
    if (this.ready && !this.disabled) {
      var croppable = mode === DRAG_MODE_CROP;
      var movable = options.movable && mode === DRAG_MODE_MOVE;
      mode = croppable || movable ? mode : DRAG_MODE_NONE;
      options.dragMode = mode;
      setData(dragBox, DATA_ACTION, mode);
      toggleClass(dragBox, CLASS_CROP, croppable);
      toggleClass(dragBox, CLASS_MOVE, movable);
      if (!options.cropBoxMovable) {
        // Sync drag mode to crop box when it is not movable
        setData(face, DATA_ACTION, mode);
        toggleClass(face, CLASS_CROP, croppable);
        toggleClass(face, CLASS_MOVE, movable);
      }
    }
    return this;
  }
};

/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/
/* ===========================================================================*/

//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED$1 = 4;
//const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
const Z_BINARY = 0;
const Z_TEXT = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1 = 2;

/*============================================================================*/

function zero$1(buf) {
  let len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}

// From zutil.h

const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES = 2;
/* The three kinds of block type */

const MIN_MATCH$1 = 3;
const MAX_MATCH$1 = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES$1 = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS$1 = 256;
/* number of literal bytes 0..255 */

const L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES$1 = 30;
/* number of distance codes */

const BL_CODES$1 = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
/* maximum heap size */

const MAX_BITS$1 = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size = 16;
/* size of bit buffer in bi_buf */

/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK = 256;
/* end of block literal code */

const REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
const extra_lbits = /* extra bits for each length code */
new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const extra_dbits = /* extra bits for each distance code */
new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const extra_blbits = /* extra bits for each bit length code */
new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */

function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree; /* static tree or NULL */
  this.extra_bits = extra_bits; /* extra bits for each code or NULL */
  this.extra_base = extra_base; /* base index for extra_bits */
  this.elems = elems; /* max number of elements in the tree */
  this.max_length = max_length; /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree = static_tree && static_tree.length;
}
let static_l_desc;
let static_d_desc;
let static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree; /* the dynamic tree */
  this.max_code = 0; /* largest code with non zero frequency */
  this.stat_desc = stat_desc; /* the corresponding static tree */
}

const d_code = dist => {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};

/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
const put_short = (s, w) => {
  //    put_byte(s, (uch)((w) & 0xff));
  //    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = w & 0xff;
  s.pending_buf[s.pending++] = w >>> 8 & 0xff;
};

/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
const send_bits = (s, value, length) => {
  if (s.bi_valid > Buf_size - length) {
    s.bi_buf |= value << s.bi_valid & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> Buf_size - s.bi_valid;
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= value << s.bi_valid & 0xffff;
    s.bi_valid += length;
  }
};
const send_code = (s, c, tree) => {
  send_bits(s, tree[c * 2] /*.Code*/, tree[c * 2 + 1] /*.Len*/);
};

/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
const bi_reverse = (code, len) => {
  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};

/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
const bi_flush = s => {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;
  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};

/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
const gen_bitlen = (s, desc) => {
  //    deflate_state *s;
  //    tree_desc *desc;    /* the tree descriptor */

  const tree = desc.dyn_tree;
  const max_code = desc.max_code;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const extra = desc.stat_desc.extra_bits;
  const base = desc.stat_desc.extra_base;
  const max_length = desc.stat_desc.max_length;
  let h; /* heap index */
  let n, m; /* iterate over the tree elements */
  let bits; /* bit length */
  let xbits; /* extra bits */
  let f; /* frequency */
  let overflow = 0; /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1] /*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1] /*.Dad*/ * 2 + 1] /*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1] /*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) {
      continue;
    } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2] /*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1] /*.Len*/ + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }

  // Tracev((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) {
      bits--;
    }
    s.bl_count[bits]--; /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) {
        continue;
      }
      if (tree[m * 2 + 1] /*.Len*/ !== bits) {
        // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1] /*.Len*/) * tree[m * 2] /*.Freq*/;
        tree[m * 2 + 1] /*.Len*/ = bits;
      }
      n--;
    }
  }
};

/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
const gen_codes = (tree, max_code, bl_count) => {
  //    ct_data *tree;             /* the tree to decorate */
  //    int max_code;              /* largest code with non zero frequency */
  //    ushf *bl_count;            /* number of codes at each bit length */

  const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
  let code = 0; /* running code value */
  let bits; /* bit index */
  let n; /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    code = code + bl_count[bits - 1] << 1;
    next_code[bits] = code;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0; n <= max_code; n++) {
    let len = tree[n * 2 + 1] /*.Len*/;
    if (len === 0) {
      continue;
    }
    /* Now reverse the bits */
    tree[n * 2] /*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};

/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
const tr_static_init = () => {
  let n; /* iterates over tree elements */
  let bits; /* bit counter */
  let length; /* length value */
  let code; /* code value */
  let dist; /* distance index */
  const bl_count = new Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
  /*#ifdef NO_INIT_GLOBAL_POINTERS
    static_l_desc.static_tree = static_ltree;
    static_l_desc.extra_bits = extra_lbits;
    static_d_desc.static_tree = static_dtree;
    static_d_desc.extra_bits = extra_dbits;
    static_bl_desc.extra_bits = extra_blbits;
  #endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < 1 << extra_lbits[code]; n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < 1 << extra_dbits[code]; n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }
  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1] /*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1] /*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1] /*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1] /*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1] /*.Len*/ = 5;
    static_dtree[n * 2] /*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);

  //static_init_done = true;
};

/* ===========================================================================
 * Initialize a new block.
 */
const init_block = s => {
  let n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES$1; n++) {
    s.dyn_ltree[n * 2] /*.Freq*/ = 0;
  }
  for (n = 0; n < D_CODES$1; n++) {
    s.dyn_dtree[n * 2] /*.Freq*/ = 0;
  }
  for (n = 0; n < BL_CODES$1; n++) {
    s.bl_tree[n * 2] /*.Freq*/ = 0;
  }
  s.dyn_ltree[END_BLOCK * 2] /*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.sym_next = s.matches = 0;
};

/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
const bi_windup = s => {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
const smaller = (tree, n, m, depth) => {
  const _n2 = n * 2;
  const _m2 = m * 2;
  return tree[_n2] /*.Freq*/ < tree[_m2] /*.Freq*/ || tree[_n2] /*.Freq*/ === tree[_m2] /*.Freq*/ && depth[n] <= depth[m];
};

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
const pqdownheap = (s, tree, k) => {
  //    deflate_state *s;
  //    ct_data *tree;  /* the tree to restore */
  //    int k;               /* node to move down */

  const v = s.heap[k];
  let j = k << 1; /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) {
      break;
    }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
};

// inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
const compress_block = (s, ltree, dtree) => {
  //    deflate_state *s;
  //    const ct_data *ltree; /* literal tree */
  //    const ct_data *dtree; /* distance tree */

  let dist; /* distance of matched string */
  let lc; /* match length or unmatched char (if dist == 0) */
  let sx = 0; /* running index in sym_buf */
  let code; /* the code to send */
  let extra; /* number of extra bits to send */

  if (s.sym_next !== 0) {
    do {
      dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
      dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
      lc = s.pending_buf[s.sym_buf + sx++];
      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra); /* send the extra length bits */
        }

        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree); /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra); /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and sym_buf is ok: */
      //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");
    } while (sx < s.sym_next);
  }
  send_code(s, END_BLOCK, ltree);
};

/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
const build_tree = (s, desc) => {
  //    deflate_state *s;
  //    tree_desc *desc; /* the tree descriptor */

  const tree = desc.dyn_tree;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems = desc.stat_desc.elems;
  let n, m; /* iterate over heap elements */
  let max_code = -1; /* largest code with non zero frequency */
  let node; /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;
  for (n = 0; n < elems; n++) {
    if (tree[n * 2] /*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;
    } else {
      tree[n * 2 + 1] /*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2] /*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;
    if (has_stree) {
      s.static_len -= stree[node * 2 + 1] /*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }

  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = s.heap_len >> 1 /*int /2*/; n >= 1; n--) {
    pqdownheap(s, tree, n);
  }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems; /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1 /*SMALLEST*/];
    s.heap[1 /*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1 /*SMALLEST*/);
    /***/

    m = s.heap[1 /*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2] /*.Freq*/ = tree[n * 2] /*.Freq*/ + tree[m * 2] /*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1] /*.Dad*/ = tree[m * 2 + 1] /*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1 /*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1 /*SMALLEST*/);
  } while (s.heap_len >= 2);
  s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
};

/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
const scan_tree = (s, tree, max_code) => {
  //    deflate_state *s;
  //    ct_data *tree;   /* the tree to be scanned */
  //    int max_code;    /* and its largest code of non zero frequency */

  let n; /* iterates over all tree elements */
  let prevlen = -1; /* last emitted length */
  let curlen; /* length of current code */

  let nextlen = tree[0 * 2 + 1] /*.Len*/; /* length of next code */

  let count = 0; /* repeat count of the current code */
  let max_count = 7; /* max repeat count */
  let min_count = 4; /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] /*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1] /*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s.bl_tree[curlen * 2] /*.Freq*/ += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2] /*.Freq*/++;
      }
      s.bl_tree[REP_3_6 * 2] /*.Freq*/++;
    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;
    } else {
      s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};

/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
const send_tree = (s, tree, max_code) => {
  //    deflate_state *s;
  //    ct_data *tree; /* the tree to be scanned */
  //    int max_code;       /* and its largest code of non zero frequency */

  let n; /* iterates over all tree elements */
  let prevlen = -1; /* last emitted length */
  let curlen; /* length of current code */

  let nextlen = tree[0 * 2 + 1] /*.Len*/; /* length of next code */

  let count = 0; /* repeat count of the current code */
  let max_count = 7; /* max repeat count */
  let min_count = 4; /* min repeat count */

  /* tree[max_code+1].Len = -1; */ /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1] /*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);
    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);
    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};

/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
const build_bl_tree = s => {
  let max_blindex; /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] /*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};

/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
const send_all_trees = (s, lcodes, dcodes, blcodes) => {
  //    deflate_state *s;
  //    int lcodes, dcodes, blcodes; /* number of codes for each tree */

  let rank; /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1] /*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};

/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
const detect_data_type = s => {
  /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let block_mask = 0xf3ffc07f;
  let n;

  /* Check for non-textual ("block-listed") bytes. */
  for (n = 0; n <= 31; n++, block_mask >>>= 1) {
    if (block_mask & 1 && s.dyn_ltree[n * 2] /*.Freq*/ !== 0) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("allow-listed") bytes. */
  if (s.dyn_ltree[9 * 2] /*.Freq*/ !== 0 || s.dyn_ltree[10 * 2] /*.Freq*/ !== 0 || s.dyn_ltree[13 * 2] /*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2] /*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
};
let static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
const _tr_init$1 = s => {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }
  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
};

/* ===========================================================================
 * Send a stored block
 */
const _tr_stored_block$1 = (s, buf, stored_len, last) => {
  //DeflateState *s;
  //charf *buf;       /* input block */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */

  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */
  bi_windup(s); /* align on byte boundary */
  put_short(s, stored_len);
  put_short(s, ~stored_len);
  if (stored_len) {
    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
  }
  s.pending += stored_len;
};

/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
const _tr_align$1 = s => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};

/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */
const _tr_flush_block$1 = (s, buf, stored_len, last) => {
  //DeflateState *s;
  //charf *buf;       /* input block, or NULL if too old */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */

  let opt_lenb, static_lenb; /* opt_len and static_len in bytes */
  let max_blindex = 0; /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {
    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = s.opt_len + 3 + 7 >>> 3;
    static_lenb = s.static_len + 3 + 7 >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->sym_next / 3));

    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block$1(s, buf, stored_len, last);
  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);
  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);
  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
};

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
const _tr_tally$1 = (s, dist, lc) => {
  //    deflate_state *s;
  //    unsigned dist;  /* distance of matched string */
  //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */

  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2] /*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--; /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2] /*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
  }

  return s.sym_next === s.sym_end;
};
var _tr_init_1 = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1 = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;
var trees = {
  _tr_init: _tr_init_1,
  _tr_stored_block: _tr_stored_block_1,
  _tr_flush_block: _tr_flush_block_1,
  _tr_tally: _tr_tally_1,
  _tr_align: _tr_align_1
};

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = adler & 0xffff | 0,
    s2 = adler >>> 16 & 0xffff | 0,
    n = 0;
  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;
    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n);
    s1 %= 65521;
    s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
const makeTable = () => {
  let c,
    table = [];
  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
    }
    table[n] = c;
  }
  return table;
};

// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());
const crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;
  crc ^= -1;
  for (let i = pos; i < end; i++) {
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
  }
  return crc ^ -1; // >>> 0;
};

var crc32_1 = crc32;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var messages = {
  2: 'need dictionary',
  /* Z_NEED_DICT       2  */
  1: 'stream end',
  /* Z_STREAM_END      1  */
  0: '',
  /* Z_OK              0  */
  '-1': 'file error',
  /* Z_ERRNO         (-1) */
  '-2': 'stream error',
  /* Z_STREAM_ERROR  (-2) */
  '-3': 'data error',
  /* Z_DATA_ERROR    (-3) */
  '-4': 'insufficient memory',
  /* Z_MEM_ERROR     (-4) */
  '-5': 'buffer error',
  /* Z_BUF_ERROR     (-5) */
  '-6': 'incompatible version' /* Z_VERSION_ERROR (-6) */
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var constants$2 = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const {
  _tr_init,
  _tr_stored_block,
  _tr_flush_block,
  _tr_tally,
  _tr_align
} = trees;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$2,
  Z_PARTIAL_FLUSH,
  Z_FULL_FLUSH: Z_FULL_FLUSH$1,
  Z_FINISH: Z_FINISH$3,
  Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3,
  Z_STREAM_END: Z_STREAM_END$3,
  Z_STREAM_ERROR: Z_STREAM_ERROR$2,
  Z_DATA_ERROR: Z_DATA_ERROR$2,
  Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED,
  Z_HUFFMAN_ONLY,
  Z_RLE,
  Z_FIXED,
  Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;

/*============================================================================*/

const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
const MAX_WBITS$1 = 15;
/* 32K LZ77 window */
const DEF_MEM_LEVEL = 8;
const LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */
const LITERALS = 256;
/* number of literal bytes 0..255 */
const L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
const D_CODES = 30;
/* number of distance codes */
const BL_CODES = 19;
/* number of codes used to transfer the bit lengths */
const HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */
const MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
const PRESET_DICT = 0x20;
const INIT_STATE = 42; /* zlib header -> BUSY_STATE */
//#ifdef GZIP
const GZIP_STATE = 57; /* gzip header -> BUSY_STATE | EXTRA_STATE */
//#endif
const EXTRA_STATE = 69; /* gzip extra block -> NAME_STATE */
const NAME_STATE = 73; /* gzip file name -> COMMENT_STATE */
const COMMENT_STATE = 91; /* gzip comment -> HCRC_STATE */
const HCRC_STATE = 103; /* gzip header CRC -> BUSY_STATE */
const BUSY_STATE = 113; /* deflate -> FINISH_STATE */
const FINISH_STATE = 666; /* stream complete */

const BS_NEED_MORE = 1; /* block not completed, need more input or more output */
const BS_BLOCK_DONE = 2; /* block flush performed */
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
const BS_FINISH_DONE = 4; /* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};
const rank = f => {
  return f * 2 - (f > 4 ? 9 : 0);
};
const zero = buf => {
  let len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
};

/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */
const slide_hash = s => {
  let n, m;
  let p;
  let wsize = s.w_size;
  n = s.hash_size;
  p = n;
  do {
    m = s.head[--p];
    s.head[p] = m >= wsize ? m - wsize : 0;
  } while (--n);
  n = wsize;
  //#ifndef FASTEST
  p = n;
  do {
    m = s.prev[--p];
    s.prev[p] = m >= wsize ? m - wsize : 0;
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */
  } while (--n);
  //#endif
};

/* eslint-disable new-cap */
let HASH_ZLIB = (s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;

/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */
const flush_pending = strm => {
  const s = strm.state;

  //_tr_flush_bits(s);
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }
  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};
const flush_block_only = (s, last) => {
  _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};
const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};

/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
const putShortMSB = (s, b) => {
  //  put_byte(s, (Byte)(b >> 8));
  //  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = b >>> 8 & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};

/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
const read_buf = (strm, buf, start, size) => {
  let len = strm.avail_in;
  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }
  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }
  strm.next_in += len;
  strm.total_in += len;
  return len;
};

/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
const longest_match = (s, cur_match) => {
  let chain_length = s.max_chain_length; /* max hash chain length */
  let scan = s.strstart; /* current string */
  let match; /* matched string */
  let len; /* length of current match */
  let best_len = s.prev_length; /* best match length so far */
  let nice_match = s.nice_match; /* stop if match long enough */
  const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/;

  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH;
  let scan_end1 = _win[scan + best_len - 1];
  let scan_end = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;
    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};

/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
const fill_window = s => {
  const _w_size = s.w_size;
  let n, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}

    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;
      if (s.insert > s.strstart) {
        s.insert = s.strstart;
      }
      slide_hash(s);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
      //#if MIN_MATCH != 3
      //        Call update_hash() MIN_MATCH-3 more times
      //#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */
  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
  //  if (s.high_water < s.window_size) {
  //    const curr = s.strstart + s.lookahead;
  //    let init = 0;
  //
  //    if (s.high_water < curr) {
  //      /* Previous high water mark below current data -- zero WIN_INIT
  //       * bytes or up to end of window, whichever is less.
  //       */
  //      init = s.window_size - curr;
  //      if (init > WIN_INIT)
  //        init = WIN_INIT;
  //      zmemzero(s->window + curr, (unsigned)init);
  //      s->high_water = curr + init;
  //    }
  //    else if (s->high_water < (ulg)curr + WIN_INIT) {
  //      /* High water mark at or above current data, but below current data
  //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
  //       * to end of window, whichever is less.
  //       */
  //      init = (ulg)curr + WIN_INIT - s->high_water;
  //      if (init > s->window_size - s->high_water)
  //        init = s->window_size - s->high_water;
  //      zmemzero(s->window + s->high_water, (unsigned)init);
  //      s->high_water += init;
  //    }
  //  }
  //
  //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
  //    "not enough room for search");
};

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */
const deflate_stored = (s, flush) => {
  /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;

  /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */
  let len,
    left,
    have,
    last = 0;
  let used = s.strm.avail_in;
  do {
    /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */
    len = 65535 /* MAX_STORED */; /* maximum deflate stored block length */
    have = s.bi_valid + 42 >> 3; /* number of header bytes */
    if (s.strm.avail_out < have) {
      /* need room for header */
      break;
    }
    /* maximum stored block length that will fit in avail_out: */
    have = s.strm.avail_out - have;
    left = s.strstart - s.block_start; /* bytes left in window */
    if (len > left + s.strm.avail_in) {
      len = left + s.strm.avail_in; /* limit len to the input */
    }

    if (len > have) {
      len = have; /* limit len to the output */
    }

    /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */
    if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) {
      break;
    }

    /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */
    last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
    _tr_stored_block(s, 0, 0, last);

    /* Replace the lengths in the dummy stored block with len. */
    s.pending_buf[s.pending - 4] = len;
    s.pending_buf[s.pending - 3] = len >> 8;
    s.pending_buf[s.pending - 2] = ~len;
    s.pending_buf[s.pending - 1] = ~len >> 8;

    /* Write the stored block header bytes. */
    flush_pending(s.strm);

    //#ifdef ZLIB_DEBUG
    //    /* Update debugging counts for the data about to be copied. */
    //    s->compressed_len += len << 3;
    //    s->bits_sent += len << 3;
    //#endif

    /* Copy uncompressed bytes from the window to next_out. */
    if (left) {
      if (left > len) {
        left = len;
      }
      //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
      s.strm.next_out += left;
      s.strm.avail_out -= left;
      s.strm.total_out += left;
      s.block_start += left;
      len -= left;
    }

    /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */
    if (len) {
      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
      s.strm.next_out += len;
      s.strm.avail_out -= len;
      s.strm.total_out += len;
    }
  } while (last === 0);

  /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */
  used -= s.strm.avail_in; /* number of input bytes directly copied */
  if (used) {
    /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */
    if (used >= s.w_size) {
      /* supplant the previous history */
      s.matches = 2; /* clear hash */
      //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
      s.strstart = s.w_size;
      s.insert = s.strstart;
    } else {
      if (s.window_size - s.strstart <= used) {
        /* Slide the window down. */
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++; /* add a pending slide_hash() */
        }

        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
      s.strstart += used;
      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
    }
    s.block_start = s.strstart;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* If the last block was written to next_out, then done. */
  if (last) {
    return BS_FINISH_DONE;
  }

  /* If flushing and all input has been consumed, then done. */
  if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) {
    return BS_BLOCK_DONE;
  }

  /* Fill the window with any remaining input. */
  have = s.window_size - s.strstart;
  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
    /* Slide the window down. */
    s.block_start -= s.w_size;
    s.strstart -= s.w_size;
    //zmemcpy(s->window, s->window + s->w_size, s->strstart);
    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
    if (s.matches < 2) {
      s.matches++; /* add a pending slide_hash() */
    }

    have += s.w_size; /* more space now */
    if (s.insert > s.strstart) {
      s.insert = s.strstart;
    }
  }
  if (have > s.strm.avail_in) {
    have = s.strm.avail_in;
  }
  if (have) {
    read_buf(s.strm, s.window, s.strstart, have);
    s.strstart += have;
    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */
  have = s.bi_valid + 42 >> 3; /* number of header bytes */
  /* maximum stored block length that will fit in pending: */
  have = s.pending_buf_size - have > 65535 /* MAX_STORED */ ? 65535 /* MAX_STORED */ : s.pending_buf_size - have;
  min_block = have > s.w_size ? s.w_size : have;
  left = s.strstart - s.block_start;
  if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
    len = left > have ? have : left;
    last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
    _tr_stored_block(s, s.block_start, len, last);
    s.block_start += len;
    flush_pending(s.strm);
  }

  /* We've done all we can with the available input and output. */
  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
const deflate_fast = (s, flush) => {
  let hash_head; /* head of the hash chain */
  let bflush; /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0 /*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0 /*NIL*/ && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }

    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match /*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

        //#if MIN_MATCH != 3
        //                Call UPDATE_HASH() MIN_MATCH-3 more times
        //#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
const deflate_slow = (s, flush) => {
  let hash_head; /* head of hash chain */
  let bflush; /* set if current block must be flushed */

  let max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0 /*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;
    if (hash_head !== 0 /*NIL*/ && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD /*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/)) {
        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;
      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }

      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
const deflate_rle = (s, flush) => {
  let bflush; /* set if current block must be flushed */
  let prev; /* byte at distance one to match */
  let scan, strend; /* scan goes up to strend for length of run */

  const _win = s.window;
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
const deflate_huff = (s, flush) => {
  let bflush; /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break; /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}
const configuration_table = [/*      good lazy nice chain */
new Config(0, 0, 0, 0, deflate_stored), /* 0 store only */
new Config(4, 4, 8, 4, deflate_fast), /* 1 max speed, no lazy matches */
new Config(4, 5, 16, 8, deflate_fast), /* 2 */
new Config(4, 6, 32, 32, deflate_fast), /* 3 */

new Config(4, 4, 16, 16, deflate_slow), /* 4 lazy matches */
new Config(8, 16, 32, 32, deflate_slow), /* 5 */
new Config(8, 16, 128, 128, deflate_slow), /* 6 */
new Config(8, 32, 128, 256, deflate_slow), /* 7 */
new Config(32, 128, 258, 1024, deflate_slow), /* 8 */
new Config(32, 258, 258, 4096, deflate_slow) /* 9 max compression */];

/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
const lm_init = s => {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;
  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};
function DeflateState() {
  this.strm = null; /* pointer back to this zlib stream */
  this.status = 0; /* as the name implies */
  this.pending_buf = null; /* output still pending */
  this.pending_buf_size = 0; /* size of pending_buf */
  this.pending_out = 0; /* next pending byte to output to the stream */
  this.pending = 0; /* nb of bytes in the pending buffer */
  this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null; /* gzip header information to write */
  this.gzindex = 0; /* where in extra, name, or comment */
  this.method = Z_DEFLATED$2; /* can only be DEFLATED */
  this.last_flush = -1; /* value of flush param for previous deflate call */

  this.w_size = 0; /* LZ77 window size (32K by default) */
  this.w_bits = 0; /* log2(w_size)  (8..16) */
  this.w_mask = 0; /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null; /* Heads of the hash chains or NIL. */

  this.ins_h = 0; /* hash index of string to be inserted */
  this.hash_size = 0; /* number of elements in hash table */
  this.hash_bits = 0; /* log2(hash_size) */
  this.hash_mask = 0; /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0; /* length of best match */
  this.prev_match = 0; /* previous match */
  this.match_available = 0; /* set if previous match exists */
  this.strstart = 0; /* start of string to insert */
  this.match_start = 0; /* start of matching string */
  this.lookahead = 0; /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0; /* compression level (1..9) */
  this.strategy = 0; /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

  /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);
  this.l_desc = null; /* desc. for literal tree */
  this.d_desc = null; /* desc. for distance tree */
  this.bl_desc = null; /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Uint16Array(2 * L_CODES + 1); /* heap used to build the Huffman trees */
  zero(this.heap);
  this.heap_len = 0; /* number of elements in the heap */
  this.heap_max = 0; /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.sym_buf = 0; /* buffer for distances and literals/lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.sym_next = 0; /* running index in sym_buf */
  this.sym_end = 0; /* symbol table full when sym_next reaches this */

  this.opt_len = 0; /* bit length of current block with optimal trees */
  this.static_len = 0; /* bit length of current block with static trees */
  this.matches = 0; /* number of string matches in current block */
  this.insert = 0; /* bytes at end of window left to insert */

  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}

/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */
const deflateStateCheck = strm => {
  if (!strm) {
    return 1;
  }
  const s = strm.state;
  if (!s || s.strm !== strm || s.status !== INIT_STATE &&
  //#ifdef GZIP
  s.status !== GZIP_STATE &&
  //#endif
  s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) {
    return 1;
  }
  return 0;
};
const deflateResetKeep = strm => {
  if (deflateStateCheck(strm)) {
    return err(strm, Z_STREAM_ERROR$2);
  }
  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;
  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;
  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }

  s.status =
  //#ifdef GZIP
  s.wrap === 2 ? GZIP_STATE :
  //#endif
  s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
  : 1; // adler32(0, Z_NULL, 0)
  s.last_flush = -2;
  _tr_init(s);
  return Z_OK$3;
};
const deflateReset = strm => {
  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};
const deflateSetHeader = (strm, head) => {
  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
    return Z_STREAM_ERROR$2;
  }
  strm.state.gzhead = head;
  return Z_OK$3;
};
const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
  if (!strm) {
    // === Z_NULL
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;
  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }
  if (windowBits < 0) {
    /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap = 2; /* write gzip wrapper instead */
    windowBits -= 16;
  }
  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) {
    return err(strm, Z_STREAM_ERROR$2);
  }
  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  const s = new DeflateState();
  strm.state = s;
  s.strm = strm;
  s.status = INIT_STATE; /* to pass state test in deflateReset() */

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */

  /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->sym_buf = s->pending_buf + s->lit_bufsize;
  s.sym_buf = s.lit_bufsize;

  //s->sym_end = (s->lit_bufsize - 1) * 3;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */

  s.level = level;
  s.strategy = strategy;
  s.method = method;
  return deflateReset(strm);
};
const deflateInit = (strm, level) => {
  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};

/* ========================================================================= */
const deflate$2 = (strm, flush) => {
  if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }
  const s = strm.state;
  if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  }
  const old_flush = s.last_flush;
  s.last_flush = flush;

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK$3;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* Write the header */
  if (s.status === INIT_STATE && s.wrap === 0) {
    s.status = BUSY_STATE;
  }
  if (s.status === INIT_STATE) {
    /* zlib header */
    let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
    let level_flags = -1;
    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
      level_flags = 0;
    } else if (s.level < 6) {
      level_flags = 1;
    } else if (s.level === 6) {
      level_flags = 2;
    } else {
      level_flags = 3;
    }
    header |= level_flags << 6;
    if (s.strstart !== 0) {
      header |= PRESET_DICT;
    }
    header += 31 - header % 31;
    putShortMSB(s, header);

    /* Save the adler32 of the preset dictionary: */
    if (s.strstart !== 0) {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }
    strm.adler = 1; // adler32(0L, Z_NULL, 0);
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
  //#ifdef GZIP
  if (s.status === GZIP_STATE) {
    /* gzip header */
    strm.adler = 0; //crc32(0L, Z_NULL, 0);
    put_byte(s, 31);
    put_byte(s, 139);
    put_byte(s, 8);
    if (!s.gzhead) {
      // s->gzhead == Z_NULL
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
      put_byte(s, OS_CODE);
      s.status = BUSY_STATE;

      /* Compression must start with an empty pending buffer */
      flush_pending(strm);
      if (s.pending !== 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    } else {
      put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
      put_byte(s, s.gzhead.time & 0xff);
      put_byte(s, s.gzhead.time >> 8 & 0xff);
      put_byte(s, s.gzhead.time >> 16 & 0xff);
      put_byte(s, s.gzhead.time >> 24 & 0xff);
      put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
      put_byte(s, s.gzhead.os & 0xff);
      if (s.gzhead.extra && s.gzhead.extra.length) {
        put_byte(s, s.gzhead.extra.length & 0xff);
        put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
      }
      if (s.gzhead.hcrc) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
      }
      s.gzindex = 0;
      s.status = EXTRA_STATE;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra /* != Z_NULL*/) {
      let beg = s.pending; /* start of bytes to update crc */
      let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
      while (s.pending + left > s.pending_buf_size) {
        let copy = s.pending_buf_size - s.pending;
        // zmemcpy(s.pending_buf + s.pending,
        //    s.gzhead.extra + s.gzindex, copy);
        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
        s.pending = s.pending_buf_size;
        //--- HCRC_UPDATE(beg) ---//
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        //---//
        s.gzindex += copy;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
        beg = 0;
        left -= copy;
      }
      // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
      //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      // zmemcpy(s->pending_buf + s->pending,
      //     s->gzhead->extra + s->gzindex, left);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
      s.pending += left;
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name /* != Z_NULL*/) {
      let beg = s.pending; /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment /* != Z_NULL*/) {
      let beg = s.pending; /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
    }

    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
      }
      put_byte(s, strm.adler & 0xff);
      put_byte(s, strm.adler >> 8 & 0xff);
      strm.adler = 0; //crc32(0L, Z_NULL, 0);
    }

    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
  //#endif

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }

      return Z_OK$3;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }

    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      } else if (flush !== Z_BLOCK$1) {
        /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH$1) {
          /*** CLEAR_HASH(s); ***/ /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK$3;
      }
    }
  }
  if (flush !== Z_FINISH$3) {
    return Z_OK$3;
  }
  if (s.wrap <= 0) {
    return Z_STREAM_END$3;
  }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, strm.adler >> 8 & 0xff);
    put_byte(s, strm.adler >> 16 & 0xff);
    put_byte(s, strm.adler >> 24 & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, strm.total_in >> 8 & 0xff);
    put_byte(s, strm.total_in >> 16 & 0xff);
    put_byte(s, strm.total_in >> 24 & 0xff);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }
  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
const deflateEnd = strm => {
  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }
  const status = strm.state.status;
  strm.state = null;
  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};

/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
const deflateSetDictionary = (strm, dictionary) => {
  let dictLength = dictionary.length;
  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }
  const s = strm.state;
  const wrap = s.wrap;
  if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }
  s.wrap = 0; /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {
      /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
      s.prev[str & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};
var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/

var deflate_1$2 = {
  deflateInit: deflateInit_1,
  deflateInit2: deflateInit2_1,
  deflateReset: deflateReset_1,
  deflateResetKeep: deflateResetKeep_1,
  deflateSetHeader: deflateSetHeader_1,
  deflate: deflate_2$1,
  deflateEnd: deflateEnd_1,
  deflateSetDictionary: deflateSetDictionary_1,
  deflateInfo: deflateInfo
};
const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign = function (obj /*from1, from2, from3, ...*/) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) {
      continue;
    }
    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }
    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }
  return obj;
};

// Join array of chunks to single array.
var flattenChunks = chunks => {
  // calculate data length
  let len = 0;
  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  }

  // join chunks
  const result = new Uint8Array(len);
  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }
  return result;
};
var common = {
  assign: assign,
  flattenChunks: flattenChunks
};

// String encode/decode helpers

// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
  STR_APPLY_UIA_OK = false;
}

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++) {
  _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = str => {
  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }
  let buf,
    c,
    c2,
    m_pos,
    i,
    str_len = str.length,
    buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new Uint8Array(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | c >>> 6;
      buf[i++] = 0x80 | c & 0x3f;
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | c >>> 12;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | c >>> 18;
      buf[i++] = 0x80 | c >>> 12 & 0x3f;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    }
  }
  return buf;
};

// Helper
const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};

// convert array to string
var buf2string = (buf, max) => {
  const len = max || buf.length;
  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }
  let i, out;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  const utf16buf = new Array(len * 2);
  for (out = 0, i = 0; i < len;) {
    let c = buf[i++];
    // quick process ascii
    if (c < 0x80) {
      utf16buf[out++] = c;
      continue;
    }
    let c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) {
      utf16buf[out++] = 0xfffd;
      i += c_len - 1;
      continue;
    }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = c << 6 | buf[i++] & 0x3f;
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) {
      utf16buf[out++] = 0xfffd;
      continue;
    }
    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
      utf16buf[out++] = 0xdc00 | c & 0x3ff;
    }
  }
  return buf2binstring(utf16buf, out);
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max) => {
  max = max || buf.length;
  if (max > buf.length) {
    max = buf.length;
  }

  // go back from last position, until start of sequence found
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
    pos--;
  }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) {
    return max;
  }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) {
    return max;
  }
  return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
  string2buf: string2buf,
  buf2string: buf2string,
  utf8border: utf8border
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = '' /*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2 /*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}
var zstream = ZStream;
const toString$1 = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$1,
  Z_SYNC_FLUSH,
  Z_FULL_FLUSH,
  Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2,
  Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;

/* ===========================================================================*/

/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/

/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate$1(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});
  let opt = this.options;
  if (opt.raw && opt.windowBits > 0) {
    opt.windowBits = -opt.windowBits;
  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
    opt.windowBits += 16;
  }
  this.err = 0; // error code, if happens (0 = Z_OK)
  this.msg = ''; // error message
  this.ended = false; // used to avoid multiple onEnd() calls
  this.chunks = []; // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;
  let status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }
  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }
  if (opt.dictionary) {
    let dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }
    status = deflate_1$2.deflateSetDictionary(this.strm, dict);
    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }
    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;
  if (this.ended) {
    return false;
  }
  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    // Make sure avail_out > 6 to avoid repeating markers
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }
    status = deflate_1$2.deflate(strm, _flush_mode);

    // Ended => flush and finish
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }

    // Flush if out buffer full
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }

    // Flush if requested and has data
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }
    if (strm.avail_in === 0) break;
  }
  return true;
};

/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};

/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};

/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate$1(input, options) {
  const deflator = new Deflate$1(options);
  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) {
    throw deflator.msg || messages[deflator.err];
  }
  return deflator.result;
}

/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}

/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip$1(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}
var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;
var deflate_1$1 = {
  Deflate: Deflate_1$1,
  deflate: deflate_2,
  deflateRaw: deflateRaw_1$1,
  gzip: gzip_1$1,
  constants: constants$1
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
const BAD$1 = 16209; /* got a data error -- remain here until reset */
const TYPE$1 = 16191; /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
var inffast = function inflate_fast(strm, start) {
  let _in; /* local strm.input */
  let last; /* have enough input while in < last */
  let _out; /* local strm.output */
  let beg; /* inflate()'s initial strm.output */
  let end; /* while out < end, enough space available */
  //#ifdef INFLATE_STRICT
  let dmax; /* maximum distance from zlib header */
  //#endif
  let wsize; /* window size or zero if not using window */
  let whave; /* valid bytes in the window */
  let wnext; /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  let s_window; /* allocated sliding window, if wsize != 0 */
  let hold; /* local strm.hold */
  let bits; /* local strm.bits */
  let lcode; /* local strm.lencode */
  let dcode; /* local strm.distcode */
  let lmask; /* mask for first level of length codes */
  let dmask; /* mask for first level of distance codes */
  let here; /* retrieved table entry */
  let op; /* code bits, operation, extra bits, or */
  /*  window position, window bytes to copy */
  let len; /* match length, unused bytes */
  let dist; /* match distance */
  let from; /* where to copy match from */
  let from_source;
  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  const state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
  //#ifdef INFLATE_STRICT
  dmax = state.dmax;
  //#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;

  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top: do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }
    here = lcode[hold & lmask];
    dolen: for (;;) {
      // Goto emulation
      op = here >>> 24 /*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = here >>> 16 & 0xff /*here.op*/;
      if (op === 0) {
        /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff /*here.val*/;
      } else if (op & 16) {
        /* length base */
        len = here & 0xffff /*here.val*/;
        op &= 15; /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & (1 << op) - 1;
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];
        dodist: for (;;) {
          // goto emulation
          op = here >>> 24 /*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 0xff /*here.op*/;

          if (op & 16) {
            /* distance base */
            dist = here & 0xffff /*here.val*/;
            op &= 15; /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & (1 << op) - 1;
            //#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break top;
            }
            //#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg; /* max distance in output */
            if (dist > op) {
              /* see if copy from window */
              op = dist - op; /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break top;
                }

                // (!) This block is disabled in zlib defaults,
                // don't enable it for binary compatibility
                //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                //                if (len <= op - whave) {
                //                  do {
                //                    output[_out++] = 0;
                //                  } while (--len);
                //                  continue top;
                //                }
                //                len -= op - whave;
                //                do {
                //                  output[_out++] = 0;
                //                } while (--op > whave);
                //                if (op === 0) {
                //                  from = _out - dist;
                //                  do {
                //                    output[_out++] = output[from++];
                //                  } while (--len);
                //                  continue top;
                //                }
                //#endif
              }

              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {
                /* very common case */
                from += wsize - op;
                if (op < len) {
                  /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist; /* rest from output */
                  from_source = output;
                }
              } else if (wnext < op) {
                /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {
                  /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {
                    /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist; /* rest from output */
                    from_source = output;
                  }
                }
              } else {
                /* contiguous in window */
                from += wnext - op;
                if (op < len) {
                  /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist; /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            } else {
              from = _out - dist; /* copy direct from output */
              do {
                /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          } else if ((op & 64) === 0) {
            /* 2nd level distance code */
            here = dcode[(here & 0xffff /*here.val*/) + (hold & (1 << op) - 1)];
            continue dodist;
          } else {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break top;
          }
          break; // need to emulate goto via "continue"
        }
      } else if ((op & 64) === 0) {
        /* 2nd level length code */
        here = lcode[(here & 0xffff /*here.val*/) + (hold & (1 << op) - 1)];
        continue dolen;
      } else if (op & 32) {
        /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE$1;
        break top;
      } else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD$1;
        break top;
      }
      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;
const lbase = new Uint16Array([/* Length codes 257..285 base */
3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const lext = new Uint8Array([/* Length codes 257..285 extra */
16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const dbase = new Uint16Array([/* Distance codes 0..29 base */
1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const dext = new Uint8Array([/* Distance codes 0..29 extra */
16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
  const bits = opts.bits;
  //here = opts.here; /* table entry for duplication */

  let len = 0; /* a code's length in bits */
  let sym = 0; /* index of code symbols */
  let min = 0,
    max = 0; /* minimum and maximum code lengths */
  let root = 0; /* number of index bits for root table */
  let curr = 0; /* number of index bits for current table */
  let drop = 0; /* code bits to drop for sub-table */
  let left = 0; /* number of prefix codes available */
  let used = 0; /* code entries in table used */
  let huff = 0; /* Huffman code */
  let incr; /* for incrementing code, index */
  let fill; /* index for replicating entries */
  let low; /* low bits for current root entry */
  let mask; /* mask for low root bits */
  let next; /* next available space in table */
  let base = null; /* base value table to use */
  //  let shoextra;    /* extra bits table to use */
  let match; /* use base and extra for symbol >= match */
  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  let extra = null;
  let here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.
    This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.
    The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.
    The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {
    /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;

    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0; /* no symbols, but wait for decoding to report error */
  }

  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    } /* over-subscribed */
  }

  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1; /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.
    root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.
    When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.
    used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.
    sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES$1) {
    base = extra = work; /* dummy value--not used */
    match = 20;
  } else if (type === LENS$1) {
    base = lbase;
    extra = lext;
    match = 257;
  } else {
    /* DISTS */
    base = dbase;
    extra = dext;
    match = 0;
  }

  /* initialize opts for loop */
  huff = 0; /* starting code */
  sym = 0; /* starting code symbol */
  len = min; /* starting code length */
  next = table_index; /* current table to fill in */
  curr = root; /* current table index bits */
  drop = 0; /* current bits to drop from code for index */
  low = -1; /* trigger new sub-table when len > root */
  used = 1 << root; /* use root table entries */
  mask = used - 1; /* mask for comparing low */

  /* check available table space */
  if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] + 1 < match) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] >= match) {
      here_op = extra[work[sym] - match];
      here_val = base[work[sym] - match];
    } else {
      here_op = 32 + 64; /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << len - drop;
    fill = 1 << curr;
    min = fill; /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << len - 1;
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min; /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};
var inftrees = inflate_table;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const CODES = 0;
const LENS = 1;
const DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_FINISH: Z_FINISH$1,
  Z_BLOCK,
  Z_TREES,
  Z_OK: Z_OK$1,
  Z_STREAM_END: Z_STREAM_END$1,
  Z_NEED_DICT: Z_NEED_DICT$1,
  Z_STREAM_ERROR: Z_STREAM_ERROR$1,
  Z_DATA_ERROR: Z_DATA_ERROR$1,
  Z_MEM_ERROR: Z_MEM_ERROR$1,
  Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2;

/* STATES ====================================================================*/
/* ===========================================================================*/

const HEAD = 16180; /* i: waiting for magic header */
const FLAGS = 16181; /* i: waiting for method and flags (gzip) */
const TIME = 16182; /* i: waiting for modification time (gzip) */
const OS = 16183; /* i: waiting for extra flags and operating system (gzip) */
const EXLEN = 16184; /* i: waiting for extra length (gzip) */
const EXTRA = 16185; /* i: waiting for extra bytes (gzip) */
const NAME = 16186; /* i: waiting for end of file name (gzip) */
const COMMENT = 16187; /* i: waiting for end of comment (gzip) */
const HCRC = 16188; /* i: waiting for header crc (gzip) */
const DICTID = 16189; /* i: waiting for dictionary check value */
const DICT = 16190; /* waiting for inflateSetDictionary() call */
const TYPE = 16191; /* i: waiting for type bits, including last-flag bit */
const TYPEDO = 16192; /* i: same, but skip check to exit inflate on new block */
const STORED = 16193; /* i: waiting for stored size (length and complement) */
const COPY_ = 16194; /* i/o: same as COPY below, but only first time in */
const COPY = 16195; /* i/o: waiting for input or output to copy stored block */
const TABLE = 16196; /* i: waiting for dynamic block table lengths */
const LENLENS = 16197; /* i: waiting for code length code lengths */
const CODELENS = 16198; /* i: waiting for length/lit and distance code lengths */
const LEN_ = 16199; /* i: same as LEN below, but only first time in */
const LEN = 16200; /* i: waiting for length/lit/eob code */
const LENEXT = 16201; /* i: waiting for length extra bits */
const DIST = 16202; /* i: waiting for distance code */
const DISTEXT = 16203; /* i: waiting for distance extra bits */
const MATCH = 16204; /* o: waiting for output space to copy string */
const LIT = 16205; /* o: waiting for output space to write literal */
const CHECK = 16206; /* i: waiting for 32-bit check value */
const LENGTH = 16207; /* i: waiting for 32-bit length (gzip) */
const DONE = 16208; /* finished check, done -- remain here until reset */
const BAD = 16209; /* got a data error -- remain here until reset */
const MEM = 16210; /* got an inflate() memory error -- remain here until reset */
const SYNC = 16211; /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/

const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_WBITS = MAX_WBITS;
const zswap32 = q => {
  return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
};
function InflateState() {
  this.strm = null; /* pointer back to this zlib stream */
  this.mode = 0; /* current inflate mode */
  this.last = false; /* true if processing last block */
  this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip,
                    bit 2 true to validate check value */
  this.havedict = false; /* true if dictionary provided */
  this.flags = 0; /* gzip header method and flags (0 if zlib), or
                     -1 if raw or no header yet */
  this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0; /* protected copy of check value */
  this.total = 0; /* protected copy of output count */
  // TODO: may be {}
  this.head = null; /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0; /* log base 2 of requested window size */
  this.wsize = 0; /* window size or zero if not using window */
  this.whave = 0; /* valid bytes in the window */
  this.wnext = 0; /* window write index */
  this.window = null; /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0; /* input bit accumulator */
  this.bits = 0; /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0; /* literal or length of data to copy */
  this.offset = 0; /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0; /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null; /* starting table for length/literal codes */
  this.distcode = null; /* starting table for distance codes */
  this.lenbits = 0; /* index bits for lencode */
  this.distbits = 0; /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0; /* number of code length code lengths */
  this.nlen = 0; /* number of length code lengths */
  this.ndist = 0; /* number of distance code lengths */
  this.have = 0; /* number of code lengths in lens[] */
  this.next = null; /* next available space in codes[] */

  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
  this.work = new Uint16Array(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
  this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null; /* dynamic table for distance codes (JS specific) */
  this.sane = 0; /* if false, allow invalid distance too far */
  this.back = 0; /* bits back of last unprocessed length/lit */
  this.was = 0; /* initial length of match */
}

const inflateStateCheck = strm => {
  if (!strm) {
    return 1;
  }
  const state = strm.state;
  if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) {
    return 1;
  }
  return 0;
};
const inflateResetKeep = strm => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {
    /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.flags = -1;
  state.dmax = 32768;
  state.head = null /*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK$1;
};
const inflateReset = strm => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
};
const inflateReset2 = (strm, windowBits) => {
  let wrap;

  /* get the state */
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else {
    wrap = (windowBits >> 4) + 5;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};
const inflateInit2 = (strm, windowBits) => {
  if (!strm) {
    return Z_STREAM_ERROR$1;
  }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  const state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.strm = strm;
  state.window = null /*Z_NULL*/;
  state.mode = HEAD; /* to pass state test in inflateReset2() */
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null /*Z_NULL*/;
  }

  return ret;
};
const inflateInit = strm => {
  return inflateInit2(strm, DEF_WBITS);
};

/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
let virgin = true;
let lenfix, distfix; // We have no pointers in JS, so keep tables separate

const fixedtables = state => {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);

    /* literal/length table */
    let sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }
    inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
      bits: 9
    });

    /* distance table */
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }
    inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
      bits: 5
    });

    /* do this just once */
    virgin = false;
  }
  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};

/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
const updatewindow = (strm, src, end, copy) => {
  let dist;
  const state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    state.window = new Uint8Array(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
};
const inflate$2 = (strm, flush) => {
  let state;
  let input, output; // input/output buffers
  let next; /* next input INDEX */
  let put; /* next output INDEX */
  let have, left; /* available input and output */
  let hold; /* bit buffer */
  let bits; /* bits in bit buffer */
  let _in, _out; /* save starting available input and output */
  let copy; /* number of stored or match bytes to copy */
  let from; /* where to copy match bytes from */
  let from_source;
  let here = 0; /* current decoding table entry */
  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */
  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  let len; /* length to copy for repeats, bits to drop */
  let ret; /* return code */
  const hbuf = new Uint8Array(4); /* buffer for gzip header crc calculation */
  let opts;
  let n; // temporary variable for NEED_BITS

  const order = /* permutation of code lengths */
  new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.mode === TYPE) {
    state.mode = TYPEDO;
  } /* skip check */

  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK$1;
  inf_leave:
  // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.wrap & 2 && hold === 0x8b1f) {
          /* gzip header */
          if (state.wbits === 0) {
            state.wbits = 15;
          }
          state.check = 0 /*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) || /* check if zlib header allowed */
        (((hold & 0xff /*BITS(8)*/) << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f /*BITS(4)*/) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f /*BITS(4)*/) + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        if (len > 15 || len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }

        // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.
        state.dmax = 1 << state.wbits;
        //state.dmax = 1 << len;

        state.flags = 0; /* indicate zlib header */
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = hold >> 8 & 1;
        }
        if (state.flags & 0x0200 && state.wrap & 4) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
      /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200 && state.wrap & 4) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          hbuf[2] = hold >>> 16 & 0xff;
          hbuf[3] = hold >>> 24 & 0xff;
          state.check = crc32_1(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
      /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = hold & 0xff;
          state.head.os = hold >> 8;
        }
        if (state.flags & 0x0200 && state.wrap & 4) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
      /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200 && state.wrap & 4) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        } else if (state.head) {
          state.head.extra = null /*Z_NULL*/;
        }

        state.mode = EXTRA;
      /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) {
            copy = have;
          }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }
              state.head.extra.set(input.subarray(next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              next + copy), /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len);
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }

            if (state.flags & 0x0200 && state.wrap & 4) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) {
            break inf_leave;
          }
        }
        state.length = 0;
        state.mode = NAME;
      /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) {
            break inf_leave;
          }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len && state.length < 65536 /*state.head.name_max*/) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200 && state.wrap & 4) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) {
            break inf_leave;
          }
        } else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
      /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) {
            break inf_leave;
          }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len && state.length < 65536 /*state.head.comm_max*/) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200 && state.wrap & 4) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) {
            break inf_leave;
          }
        } else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
      /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (state.wrap & 4 && hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }

        if (state.head) {
          state.head.hcrc = state.flags >> 9 & 1;
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
      /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT$1;
        }
        strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
      /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) {
          break inf_leave;
        }
      /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = hold & 0x01 /*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch (hold & 0x03 /*BITS(2)*/) {
          case 0:
            /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:
            /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_; /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:
            /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) {
          break inf_leave;
        }
      /* falls through */
      case COPY_:
        state.mode = COPY;
      /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) {
            copy = have;
          }
          if (copy > left) {
            copy = left;
          }
          if (copy === 0) {
            break inf_leave;
          }
          //--- zmemcpy(put, next, copy); ---
          output.set(input.subarray(next, next + copy), put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f /*BITS(5)*/) + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f /*BITS(5)*/) + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f /*BITS(4)*/) + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        //#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
        //#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
      /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }

        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;
        opts = {
          bits: state.lenbits
        };
        ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;
        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
      /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;
            if (here_bits <= bits) {
              break;
            }
            //--- PULLBYTE() ---//
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }

          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          } else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03); //BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            } else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07); //BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            } else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f); //BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }

            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) {
          break;
        }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;
        opts = {
          bits: state.lenbits
        };
        ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }
        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = {
          bits: state.distbits
        };
        ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) {
          break inf_leave;
        }
      /* falls through */
      case LEN_:
        state.mode = LEN;
      /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inffast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = here >>> 16 & 0xff;
          here_val = here & 0xffff;
          if (here_bits <= bits) {
            break;
          }
          //--- PULLBYTE() ---//
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }

        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1 /*BITS(last.bits + last.op)*/) >> last_bits)];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;
            if (last_bits + here_bits <= bits) {
              break;
            }
            //--- PULLBYTE() ---//
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
      /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
      /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = here >>> 16 & 0xff;
          here_val = here & 0xffff;
          if (here_bits <= bits) {
            break;
          }
          //--- PULLBYTE() ---//
          if (have === 0) {
            break inf_leave;
          }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }

        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1 /*BITS(last.bits + last.op)*/) >> last_bits)];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;
            if (last_bits + here_bits <= bits) {
              break;
            }
            //--- PULLBYTE() ---//
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = here_op & 15;
        state.mode = DISTEXT;
      /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
        //#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
      /* falls through */
      case MATCH:
        if (left === 0) {
          break inf_leave;
        }
        copy = _out - left;
        if (state.offset > copy) {
          /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
            // (!) This block is disabled in zlib defaults,
            // don't enable it for binary compatibility
            //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
            //          Trace((stderr, "inflate.c too far\n"));
            //          copy -= state.whave;
            //          if (copy > state.length) { copy = state.length; }
            //          if (copy > left) { copy = left; }
            //          left -= copy;
            //          state.length -= copy;
            //          do {
            //            output[put++] = 0;
            //          } while (--copy);
            //          if (state.length === 0) { state.mode = LEN; }
            //          break;
            //#endif
          }

          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          } else {
            from = state.wnext - copy;
          }
          if (copy > state.length) {
            copy = state.length;
          }
          from_source = state.window;
        } else {
          /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) {
          copy = left;
        }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) {
          state.mode = LEN;
        }
        break;
      case LIT:
        if (left === 0) {
          break inf_leave;
        }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (state.wrap & 4 && _out) {
            strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }

        state.mode = LENGTH;
      /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (state.wrap & 4 && hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }

        state.mode = DONE;
      /* falls through */
      case DONE:
        ret = Z_STREAM_END$1;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR$1;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR$1;
      case SYNC:
      /* falls through */
      default:
        return Z_STREAM_ERROR$1;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap & 4 && _out) {
    strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
    state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR;
  }
  return ret;
};
const inflateEnd = strm => {
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};
const inflateGetHeader = (strm, head) => {
  /* check state */
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  const state = strm.state;
  if ((state.wrap & 2) === 0) {
    return Z_STREAM_ERROR$1;
  }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK$1;
};
const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;
  let state;
  let dictid;
  let ret;

  /* check state */
  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK$1;
};
var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/

var inflate_1$2 = {
  inflateReset: inflateReset_1,
  inflateReset2: inflateReset2_1,
  inflateResetKeep: inflateResetKeep_1,
  inflateInit: inflateInit_1,
  inflateInit2: inflateInit2_1,
  inflate: inflate_2$1,
  inflateEnd: inflateEnd_1,
  inflateGetHeader: inflateGetHeader_1,
  inflateSetDictionary: inflateSetDictionary_1,
  inflateInfo: inflateInfo
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text = 0;
  /* modification time */
  this.time = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags = 0;
  /* operating system */
  this.os = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len = 0; // Actually, we don't need it in JS,
  // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done = false;
}
var gzheader = GZheader;
const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH,
  Z_FINISH,
  Z_OK,
  Z_STREAM_END,
  Z_NEED_DICT,
  Z_STREAM_ERROR,
  Z_DATA_ERROR,
  Z_MEM_ERROR
} = constants$2;

/* ===========================================================================*/

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/

/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate$1(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});
  const opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) {
      opt.windowBits = -15;
    }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if (opt.windowBits > 15 && opt.windowBits < 48) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }
  this.err = 0; // error code, if happens (0 = Z_OK)
  this.msg = ''; // error message
  this.ended = false; // used to avoid multiple onEnd() calls
  this.chunks = []; // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;
  let status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }
  this.header = new gzheader();
  inflate_1$2.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) {
      //In raw mode we need to set the dictionary early
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;
  if (this.ended) return false;
  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = inflate_1$2.inflate(strm, _flush_mode);
    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);
      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        // Replace code with more verbose
        status = Z_NEED_DICT;
      }
    }

    // Skip snyc markers if more data follows and not raw mode
    while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }
    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }

    // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.
    last_avail_out = strm.avail_out;
    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END) {
        if (this.options.to === 'string') {
          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail & realign counters
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
          this.onData(utf8str);
        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    }

    // Must repeat iteration if out buffer is full
    if (status === Z_OK && last_avail_out === 0) continue;

    // Finalize if end of stream reached.
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }
    if (strm.avail_in === 0) break;
  }
  return true;
};

/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};

/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};

/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/
function inflate$1(input, options) {
  const inflator = new Inflate$1(options);
  inflator.push(input);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) throw inflator.msg || messages[inflator.err];
  return inflator.result;
}

/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}

/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/

var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;
var inflate_1$1 = {
  Inflate: Inflate_1$1,
  inflate: inflate_2,
  inflateRaw: inflateRaw_1$1,
  ungzip: ungzip$1,
  constants: constants
};
const {
  Deflate,
  deflate,
  deflateRaw,
  gzip
} = deflate_1$1;
const {
  Inflate,
  inflate,
  inflateRaw,
  ungzip
} = inflate_1$1;
var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;
var pako = {
  Deflate: Deflate_1,
  deflate: deflate_1,
  deflateRaw: deflateRaw_1,
  gzip: gzip_1,
  Inflate: Inflate_1,
  inflate: inflate_1,
  inflateRaw: inflateRaw_1,
  ungzip: ungzip_1,
  constants: constants_1
};

var UTIF = (function (pako) {
  var UTIF = {};

  // Make available for import by `require()`
  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object") {
    module.exports = UTIF;
  } else {
    self.UTIF = UTIF;
  }
  function log() {
    if (typeof process == "undefined" || process.env.NODE_ENV == "development") console.log.apply(console, arguments);
  }
  (function (UTIF, pako) {
    // Following lines add a JPEG decoder  to UTIF.JpegDecoder
    (function () {

      var W = function a1() {
          function W(p) {
            this.message = "JPEG error: " + p;
          }
          W.prototype = new Error();
          W.prototype.name = "JpegError";
          W.constructor = W;
          return W;
        }(),
        ak = function ag() {
          var p = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]),
            t = 4017,
            ac = 799,
            ah = 3406,
            ao = 2276,
            ar = 1567,
            ai = 3784,
            s = 5793,
            ad = 2896;
          function ak(Q) {
            if (Q == null) Q = {};
            if (Q.w == null) Q.w = -1;
            this.V = Q.n;
            this.N = Q.w;
          }
          function a5(Q, h) {
            var f = 0,
              G = [],
              n,
              E,
              a = 16,
              F;
            while (a > 0 && !Q[a - 1]) {
              a--;
            }
            G.push({
              children: [],
              index: 0
            });
            var C = G[0];
            for (n = 0; n < a; n++) {
              for (E = 0; E < Q[n]; E++) {
                C = G.pop();
                C.children[C.index] = h[f];
                while (C.index > 0) {
                  C = G.pop();
                }
                C.index++;
                G.push(C);
                while (G.length <= n) {
                  G.push(F = {
                    children: [],
                    index: 0
                  });
                  C.children[C.index] = F.children;
                  C = F;
                }
                f++;
              }
              if (n + 1 < a) {
                G.push(F = {
                  children: [],
                  index: 0
                });
                C.children[C.index] = F.children;
                C = F;
              }
            }
            return G[0].children;
          }
          function a2(Q, h, f) {
            return 64 * ((Q.P + 1) * h + f);
          }
          function a7(Q, h, f, G, n, E, a, C, F, d) {
            if (d == null) d = !1;
            var T = f.m,
              U = f.Z,
              z = h,
              J = 0,
              V = 0,
              r = 0,
              D = 0,
              a8,
              q = 0,
              X,
              O,
              _,
              N,
              e,
              K,
              x = 0,
              k,
              g,
              R,
              c;
            function Y() {
              if (V > 0) {
                V--;
                return J >> V & 1;
              }
              J = Q[h++];
              if (J === 255) {
                var I = Q[h++];
                if (I) {
                  if (I === 220 && d) {
                    h += 2;
                    var l = Z(Q, h);
                    h += 2;
                    if (l > 0 && l !== f.s) {
                      throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", l);
                    }
                  } else if (I === 217) {
                    if (d) {
                      var M = q * 8;
                      if (M > 0 && M < f.s / 10) {
                        throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, " + "possibly caused by incorrect `scanLines` parameter", M);
                      }
                    }
                    throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
                  }
                  throw new W("unexpected marker");
                }
              }
              V = 7;
              return J >>> 7;
            }
            function u(I) {
              var l = I;
              while (!0) {
                l = l[Y()];
                switch (_typeof(l)) {
                  case "number":
                    return l;
                  case "object":
                    continue;
                }
                throw new W("invalid huffman sequence");
              }
            }
            function m(I) {
              var e = 0;
              while (I > 0) {
                e = e << 1 | Y();
                I--;
              }
              return e;
            }
            function j(I) {
              if (I === 1) {
                return Y() === 1 ? 1 : -1;
              }
              var e = m(I);
              if (e >= 1 << I - 1) {
                return e;
              }
              return e + (-1 << I) + 1;
            }
            function v(X, I) {
              var l = u(X.J),
                M = l === 0 ? 0 : j(l),
                N = 1;
              X.D[I] = X.Q += M;
              while (N < 64) {
                var S = u(X.i),
                  i = S & 15,
                  A = S >> 4;
                if (i === 0) {
                  if (A < 15) {
                    break;
                  }
                  N += 16;
                  continue;
                }
                N += A;
                var o = p[N];
                X.D[I + o] = j(i);
                N++;
              }
            }
            function $(X, I) {
              var l = u(X.J),
                M = l === 0 ? 0 : j(l) << F;
              X.D[I] = X.Q += M;
            }
            function b(X, I) {
              X.D[I] |= Y() << F;
            }
            function P(X, I) {
              if (r > 0) {
                r--;
                return;
              }
              var N = E,
                l = a;
              while (N <= l) {
                var M = u(X.i),
                  S = M & 15,
                  i = M >> 4;
                if (S === 0) {
                  if (i < 15) {
                    r = m(i) + (1 << i) - 1;
                    break;
                  }
                  N += 16;
                  continue;
                }
                N += i;
                var A = p[N];
                X.D[I + A] = j(S) * (1 << F);
                N++;
              }
            }
            function a4(X, I) {
              var N = E,
                l = a,
                M = 0,
                S,
                i;
              while (N <= l) {
                var A = I + p[N],
                  o = X.D[A] < 0 ? -1 : 1;
                switch (D) {
                  case 0:
                    i = u(X.i);
                    S = i & 15;
                    M = i >> 4;
                    if (S === 0) {
                      if (M < 15) {
                        r = m(M) + (1 << M);
                        D = 4;
                      } else {
                        M = 16;
                        D = 1;
                      }
                    } else {
                      if (S !== 1) {
                        throw new W("invalid ACn encoding");
                      }
                      a8 = j(S);
                      D = M ? 2 : 3;
                    }
                    continue;
                  case 1:
                  case 2:
                    if (X.D[A]) {
                      X.D[A] += o * (Y() << F);
                    } else {
                      M--;
                      if (M === 0) {
                        D = D === 2 ? 3 : 0;
                      }
                    }
                    break;
                  case 3:
                    if (X.D[A]) {
                      X.D[A] += o * (Y() << F);
                    } else {
                      X.D[A] = a8 << F;
                      D = 0;
                    }
                    break;
                  case 4:
                    if (X.D[A]) {
                      X.D[A] += o * (Y() << F);
                    }
                    break;
                }
                N++;
              }
              if (D === 4) {
                r--;
                if (r === 0) {
                  D = 0;
                }
              }
            }
            function H(X, I, x, l, M) {
              var S = x / T | 0,
                i = x % T;
              q = S * X.A + l;
              var A = i * X.h + M,
                o = a2(X, q, A);
              I(X, o);
            }
            function w(X, I, x) {
              q = x / X.P | 0;
              var l = x % X.P,
                M = a2(X, q, l);
              I(X, M);
            }
            var y = G.length;
            if (U) {
              if (E === 0) {
                K = C === 0 ? $ : b;
              } else {
                K = C === 0 ? P : a4;
              }
            } else {
              K = v;
            }
            if (y === 1) {
              g = G[0].P * G[0].c;
            } else {
              g = T * f.R;
            }
            while (x <= g) {
              var L = n ? Math.min(g - x, n) : g;
              if (L > 0) {
                for (O = 0; O < y; O++) {
                  G[O].Q = 0;
                }
                r = 0;
                if (y === 1) {
                  X = G[0];
                  for (e = 0; e < L; e++) {
                    w(X, K, x);
                    x++;
                  }
                } else {
                  for (e = 0; e < L; e++) {
                    for (O = 0; O < y; O++) {
                      X = G[O];
                      R = X.h;
                      c = X.A;
                      for (_ = 0; _ < c; _++) {
                        for (N = 0; N < R; N++) {
                          H(X, K, x, _, N);
                        }
                      }
                    }
                    x++;
                  }
                }
              }
              V = 0;
              k = an(Q, h);
              if (!k) {
                break;
              }
              if (k.u) {
                h = k.offset;
              }
              if (k.M >= 65488 && k.M <= 65495) {
                h += 2;
              } else {
                break;
              }
            }
            return h - z;
          }
          function al(Q, h, f) {
            var G = Q.$,
              n = Q.D,
              E,
              a,
              C,
              F,
              d,
              T,
              U,
              z,
              J,
              V,
              Y,
              u,
              m,
              j,
              v,
              $,
              b;
            if (!G) {
              throw new W("missing required Quantization Table.");
            }
            for (var r = 0; r < 64; r += 8) {
              J = n[h + r];
              V = n[h + r + 1];
              Y = n[h + r + 2];
              u = n[h + r + 3];
              m = n[h + r + 4];
              j = n[h + r + 5];
              v = n[h + r + 6];
              $ = n[h + r + 7];
              J *= G[r];
              if ((V | Y | u | m | j | v | $) === 0) {
                b = s * J + 512 >> 10;
                f[r] = b;
                f[r + 1] = b;
                f[r + 2] = b;
                f[r + 3] = b;
                f[r + 4] = b;
                f[r + 5] = b;
                f[r + 6] = b;
                f[r + 7] = b;
                continue;
              }
              V *= G[r + 1];
              Y *= G[r + 2];
              u *= G[r + 3];
              m *= G[r + 4];
              j *= G[r + 5];
              v *= G[r + 6];
              $ *= G[r + 7];
              E = s * J + 128 >> 8;
              a = s * m + 128 >> 8;
              C = Y;
              F = v;
              d = ad * (V - $) + 128 >> 8;
              z = ad * (V + $) + 128 >> 8;
              T = u << 4;
              U = j << 4;
              E = E + a + 1 >> 1;
              a = E - a;
              b = C * ai + F * ar + 128 >> 8;
              C = C * ar - F * ai + 128 >> 8;
              F = b;
              d = d + U + 1 >> 1;
              U = d - U;
              z = z + T + 1 >> 1;
              T = z - T;
              E = E + F + 1 >> 1;
              F = E - F;
              a = a + C + 1 >> 1;
              C = a - C;
              b = d * ao + z * ah + 2048 >> 12;
              d = d * ah - z * ao + 2048 >> 12;
              z = b;
              b = T * ac + U * t + 2048 >> 12;
              T = T * t - U * ac + 2048 >> 12;
              U = b;
              f[r] = E + z;
              f[r + 7] = E - z;
              f[r + 1] = a + U;
              f[r + 6] = a - U;
              f[r + 2] = C + T;
              f[r + 5] = C - T;
              f[r + 3] = F + d;
              f[r + 4] = F - d;
            }
            for (var P = 0; P < 8; ++P) {
              J = f[P];
              V = f[P + 8];
              Y = f[P + 16];
              u = f[P + 24];
              m = f[P + 32];
              j = f[P + 40];
              v = f[P + 48];
              $ = f[P + 56];
              if ((V | Y | u | m | j | v | $) === 0) {
                b = s * J + 8192 >> 14;
                if (b < -2040) {
                  b = 0;
                } else if (b >= 2024) {
                  b = 255;
                } else {
                  b = b + 2056 >> 4;
                }
                n[h + P] = b;
                n[h + P + 8] = b;
                n[h + P + 16] = b;
                n[h + P + 24] = b;
                n[h + P + 32] = b;
                n[h + P + 40] = b;
                n[h + P + 48] = b;
                n[h + P + 56] = b;
                continue;
              }
              E = s * J + 2048 >> 12;
              a = s * m + 2048 >> 12;
              C = Y;
              F = v;
              d = ad * (V - $) + 2048 >> 12;
              z = ad * (V + $) + 2048 >> 12;
              T = u;
              U = j;
              E = (E + a + 1 >> 1) + 4112;
              a = E - a;
              b = C * ai + F * ar + 2048 >> 12;
              C = C * ar - F * ai + 2048 >> 12;
              F = b;
              d = d + U + 1 >> 1;
              U = d - U;
              z = z + T + 1 >> 1;
              T = z - T;
              E = E + F + 1 >> 1;
              F = E - F;
              a = a + C + 1 >> 1;
              C = a - C;
              b = d * ao + z * ah + 2048 >> 12;
              d = d * ah - z * ao + 2048 >> 12;
              z = b;
              b = T * ac + U * t + 2048 >> 12;
              T = T * t - U * ac + 2048 >> 12;
              U = b;
              J = E + z;
              $ = E - z;
              V = a + U;
              v = a - U;
              Y = C + T;
              j = C - T;
              u = F + d;
              m = F - d;
              if (J < 16) {
                J = 0;
              } else if (J >= 4080) {
                J = 255;
              } else {
                J >>= 4;
              }
              if (V < 16) {
                V = 0;
              } else if (V >= 4080) {
                V = 255;
              } else {
                V >>= 4;
              }
              if (Y < 16) {
                Y = 0;
              } else if (Y >= 4080) {
                Y = 255;
              } else {
                Y >>= 4;
              }
              if (u < 16) {
                u = 0;
              } else if (u >= 4080) {
                u = 255;
              } else {
                u >>= 4;
              }
              if (m < 16) {
                m = 0;
              } else if (m >= 4080) {
                m = 255;
              } else {
                m >>= 4;
              }
              if (j < 16) {
                j = 0;
              } else if (j >= 4080) {
                j = 255;
              } else {
                j >>= 4;
              }
              if (v < 16) {
                v = 0;
              } else if (v >= 4080) {
                v = 255;
              } else {
                v >>= 4;
              }
              if ($ < 16) {
                $ = 0;
              } else if ($ >= 4080) {
                $ = 255;
              } else {
                $ >>= 4;
              }
              n[h + P] = J;
              n[h + P + 8] = V;
              n[h + P + 16] = Y;
              n[h + P + 24] = u;
              n[h + P + 32] = m;
              n[h + P + 40] = j;
              n[h + P + 48] = v;
              n[h + P + 56] = $;
            }
          }
          function a0(Q, h) {
            var f = h.P,
              G = h.c,
              n = new Int16Array(64);
            for (var E = 0; E < G; E++) {
              for (var a = 0; a < f; a++) {
                var C = a2(h, E, a);
                al(h, C, n);
              }
            }
            return h.D;
          }
          function an(Q, h, f) {
            if (f == null) f = h;
            var G = Q.length - 1,
              n = f < h ? f : h;
            if (h >= G) {
              return null;
            }
            var E = Z(Q, h);
            if (E >= 65472 && E <= 65534) {
              return {
                u: null,
                M: E,
                offset: h
              };
            }
            var a = Z(Q, n);
            while (!(a >= 65472 && a <= 65534)) {
              if (++n >= G) {
                return null;
              }
              a = Z(Q, n);
            }
            return {
              u: E.toString(16),
              M: a,
              offset: n
            };
          }
          ak.prototype = {
            parse: function parse(Q, h) {
              if (h == null) h = {};
              var f = h.F,
                E = 0,
                a = null,
                C = null,
                F,
                d,
                T = 0;
              function G() {
                var o = Z(Q, E);
                E += 2;
                var B = E + o - 2,
                  V = an(Q, B, E);
                if (V && V.u) {
                  B = V.offset;
                }
                var ab = Q.subarray(E, B);
                E += ab.length;
                return ab;
              }
              function n(F) {
                var o = Math.ceil(F.o / 8 / F.X),
                  B = Math.ceil(F.s / 8 / F.B);
                for (var Y = 0; Y < F.W.length; Y++) {
                  R = F.W[Y];
                  var ab = Math.ceil(Math.ceil(F.o / 8) * R.h / F.X),
                    af = Math.ceil(Math.ceil(F.s / 8) * R.A / F.B),
                    ap = o * R.h,
                    aq = B * R.A,
                    ae = 64 * aq * (ap + 1);
                  R.D = new Int16Array(ae);
                  R.P = ab;
                  R.c = af;
                }
                F.m = o;
                F.R = B;
              }
              var U = [],
                z = [],
                J = [],
                V = Z(Q, E);
              E += 2;
              if (V !== 65496) {
                throw new W("SOI not found");
              }
              V = Z(Q, E);
              E += 2;
              markerLoop: while (V !== 65497) {
                var Y, u, m;
                switch (V) {
                  case 65504:
                  case 65505:
                  case 65506:
                  case 65507:
                  case 65508:
                  case 65509:
                  case 65510:
                  case 65511:
                  case 65512:
                  case 65513:
                  case 65514:
                  case 65515:
                  case 65516:
                  case 65517:
                  case 65518:
                  case 65519:
                  case 65534:
                    var j = G();
                    if (V === 65504) {
                      if (j[0] === 74 && j[1] === 70 && j[2] === 73 && j[3] === 70 && j[4] === 0) {
                        a = {
                          version: {
                            d: j[5],
                            T: j[6]
                          },
                          K: j[7],
                          j: j[8] << 8 | j[9],
                          H: j[10] << 8 | j[11],
                          S: j[12],
                          I: j[13],
                          C: j.subarray(14, 14 + 3 * j[12] * j[13])
                        };
                      }
                    }
                    if (V === 65518) {
                      if (j[0] === 65 && j[1] === 100 && j[2] === 111 && j[3] === 98 && j[4] === 101) {
                        C = {
                          version: j[5] << 8 | j[6],
                          k: j[7] << 8 | j[8],
                          q: j[9] << 8 | j[10],
                          a: j[11]
                        };
                      }
                    }
                    break;
                  case 65499:
                    var v = Z(Q, E),
                      b;
                    E += 2;
                    var $ = v + E - 2;
                    while (E < $) {
                      var r = Q[E++],
                        P = new Uint16Array(64);
                      if (r >> 4 === 0) {
                        for (u = 0; u < 64; u++) {
                          b = p[u];
                          P[b] = Q[E++];
                        }
                      } else if (r >> 4 === 1) {
                        for (u = 0; u < 64; u++) {
                          b = p[u];
                          P[b] = Z(Q, E);
                          E += 2;
                        }
                      } else {
                        throw new W("DQT - invalid table spec");
                      }
                      U[r & 15] = P;
                    }
                    break;
                  case 65472:
                  case 65473:
                  case 65474:
                    if (F) {
                      throw new W("Only single frame JPEGs supported");
                    }
                    E += 2;
                    F = {};
                    F.G = V === 65473;
                    F.Z = V === 65474;
                    F.precision = Q[E++];
                    var D = Z(Q, E),
                      a4,
                      q = 0,
                      H = 0;
                    E += 2;
                    F.s = f || D;
                    F.o = Z(Q, E);
                    E += 2;
                    F.W = [];
                    F._ = {};
                    var a8 = Q[E++];
                    for (Y = 0; Y < a8; Y++) {
                      a4 = Q[E];
                      var w = Q[E + 1] >> 4,
                        y = Q[E + 1] & 15;
                      if (q < w) {
                        q = w;
                      }
                      if (H < y) {
                        H = y;
                      }
                      var X = Q[E + 2];
                      m = F.W.push({
                        h: w,
                        A: y,
                        L: X,
                        $: null
                      });
                      F._[a4] = m - 1;
                      E += 3;
                    }
                    F.X = q;
                    F.B = H;
                    n(F);
                    break;
                  case 65476:
                    var O = Z(Q, E);
                    E += 2;
                    for (Y = 2; Y < O;) {
                      var _ = Q[E++],
                        N = new Uint8Array(16),
                        e = 0;
                      for (u = 0; u < 16; u++, E++) {
                        e += N[u] = Q[E];
                      }
                      var K = new Uint8Array(e);
                      for (u = 0; u < e; u++, E++) {
                        K[u] = Q[E];
                      }
                      Y += 17 + e;
                      (_ >> 4 === 0 ? J : z)[_ & 15] = a5(N, K);
                    }
                    break;
                  case 65501:
                    E += 2;
                    d = Z(Q, E);
                    E += 2;
                    break;
                  case 65498:
                    var x = ++T === 1 && !f,
                      R;
                    E += 2;
                    var k = Q[E++],
                      g = [];
                    for (Y = 0; Y < k; Y++) {
                      var c = Q[E++],
                        L = F._[c];
                      R = F.W[L];
                      R.index = c;
                      var a6 = Q[E++];
                      R.J = J[a6 >> 4];
                      R.i = z[a6 & 15];
                      g.push(R);
                    }
                    var I = Q[E++],
                      l = Q[E++],
                      M = Q[E++];
                    try {
                      var S = a7(Q, E, F, g, d, I, l, M >> 4, M & 15, x);
                      E += S;
                    } catch (ex) {
                      if (ex instanceof DNLMarkerError) {
                        return this.parse(Q, {
                          F: ex.s
                        });
                      } else if (ex instanceof EOIMarkerError) {
                        break markerLoop;
                      }
                      throw ex;
                    }
                    break;
                  case 65500:
                    E += 4;
                    break;
                  case 65535:
                    if (Q[E] !== 255) {
                      E--;
                    }
                    break;
                  default:
                    var i = an(Q, E - 2, E - 3);
                    if (i && i.u) {
                      E = i.offset;
                      break;
                    }
                    if (E >= Q.length - 1) {
                      break markerLoop;
                    }
                    throw new W("JpegImage.parse - unknown marker: " + V.toString(16));
                }
                V = Z(Q, E);
                E += 2;
              }
              this.width = F.o;
              this.height = F.s;
              this.g = a;
              this.b = C;
              this.W = [];
              for (Y = 0; Y < F.W.length; Y++) {
                R = F.W[Y];
                var A = U[R.L];
                if (A) {
                  R.$ = A;
                }
                this.W.push({
                  index: R.index,
                  e: a0(F, R),
                  l: R.h / F.X,
                  t: R.A / F.B,
                  P: R.P,
                  c: R.c
                });
              }
              this.p = this.W.length;
              return undefined;
            },
            Y: function Y(Q, h, f) {
              if (f == null) f = !1;
              var G = this.width / Q,
                n = this.height / h,
                E,
                a,
                C,
                F,
                d,
                T,
                U,
                z,
                J,
                V,
                Y = 0,
                u,
                m = this.W.length,
                j = Q * h * m,
                v = new Uint8ClampedArray(j),
                $ = new Uint32Array(Q),
                b = 4294967288,
                r;
              for (U = 0; U < m; U++) {
                E = this.W[U];
                a = E.l * G;
                C = E.t * n;
                Y = U;
                u = E.e;
                F = E.P + 1 << 3;
                if (a !== r) {
                  for (d = 0; d < Q; d++) {
                    z = 0 | d * a;
                    $[d] = (z & b) << 3 | z & 7;
                  }
                  r = a;
                }
                for (T = 0; T < h; T++) {
                  z = 0 | T * C;
                  V = F * (z & b) | (z & 7) << 3;
                  for (d = 0; d < Q; d++) {
                    v[Y] = u[V + $[d]];
                    Y += m;
                  }
                }
              }
              var P = this.V;
              if (!f && m === 4 && !P) {
                P = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255]);
              }
              if (P) {
                for (U = 0; U < j;) {
                  for (z = 0, J = 0; z < m; z++, U++, J += 2) {
                    v[U] = (v[U] * P[J] >> 8) + P[J + 1];
                  }
                }
              }
              return v;
            },
            get f() {
              if (this.b) {
                return !!this.b.a;
              }
              if (this.p === 3) {
                if (this.N === 0) {
                  return !1;
                } else if (this.W[0].index === 82 && this.W[1].index === 71 && this.W[2].index === 66) {
                  return !1;
                }
                return !0;
              }
              if (this.N === 1) {
                return !0;
              }
              return !1;
            },
            z: function aj(Q) {
              var h, f, G;
              for (var n = 0, E = Q.length; n < E; n += 3) {
                h = Q[n];
                f = Q[n + 1];
                G = Q[n + 2];
                Q[n] = h - 179.456 + 1.402 * G;
                Q[n + 1] = h + 135.459 - .344 * f - .714 * G;
                Q[n + 2] = h - 226.816 + 1.772 * f;
              }
              return Q;
            },
            O: function aa(Q) {
              var h,
                f,
                G,
                n,
                E = 0;
              for (var a = 0, C = Q.length; a < C; a += 4) {
                h = Q[a];
                f = Q[a + 1];
                G = Q[a + 2];
                n = Q[a + 3];
                Q[E++] = -122.67195406894 + f * (-660635669420364e-19 * f + .000437130475926232 * G - 54080610064599e-18 * h + .00048449797120281 * n - .154362151871126) + G * (-.000957964378445773 * G + .000817076911346625 * h - .00477271405408747 * n + 1.53380253221734) + h * (.000961250184130688 * h - .00266257332283933 * n + .48357088451265) + n * (-.000336197177618394 * n + .484791561490776);
                Q[E++] = 107.268039397724 + f * (219927104525741e-19 * f - .000640992018297945 * G + .000659397001245577 * h + .000426105652938837 * n - .176491792462875) + G * (-.000778269941513683 * G + .00130872261408275 * h + .000770482631801132 * n - .151051492775562) + h * (.00126935368114843 * h - .00265090189010898 * n + .25802910206845) + n * (-.000318913117588328 * n - .213742400323665);
                Q[E++] = -20.810012546947 + f * (-.000570115196973677 * f - 263409051004589e-19 * G + .0020741088115012 * h - .00288260236853442 * n + .814272968359295) + G * (-153496057440975e-19 * G - .000132689043961446 * h + .000560833691242812 * n - .195152027534049) + h * (.00174418132927582 * h - .00255243321439347 * n + .116935020465145) + n * (-.000343531996510555 * n + .24165260232407);
              }
              return Q.subarray(0, E);
            },
            r: function a3(Q) {
              var h, f, G;
              for (var n = 0, E = Q.length; n < E; n += 4) {
                h = Q[n];
                f = Q[n + 1];
                G = Q[n + 2];
                Q[n] = 434.456 - h - 1.402 * G;
                Q[n + 1] = 119.541 - h + .344 * f + .714 * G;
                Q[n + 2] = 481.816 - h - 1.772 * f;
              }
              return Q;
            },
            U: function as(Q) {
              var h,
                f,
                G,
                n,
                E = 0;
              for (var a = 0, C = Q.length; a < C; a += 4) {
                h = Q[a];
                f = Q[a + 1];
                G = Q[a + 2];
                n = Q[a + 3];
                Q[E++] = 255 + h * (-6747147073602441e-20 * h + .0008379262121013727 * f + .0002894718188643294 * G + .003264231057537806 * n - 1.1185611867203937) + f * (26374107616089404e-21 * f - 8626949158638572e-20 * G - .0002748769067499491 * n - .02155688794978967) + G * (-3878099212869363e-20 * G - .0003267808279485286 * n + .0686742238595345) - n * (.0003361971776183937 * n + .7430659151342254);
                Q[E++] = 255 + h * (.00013596372813588848 * h + .000924537132573585 * f + .00010567359618683593 * G + .0004791864687436512 * n - .3109689587515875) + f * (-.00023545346108370344 * f + .0002702845253534714 * G + .0020200308977307156 * n - .7488052167015494) + G * (6834815998235662e-20 * G + .00015168452363460973 * n - .09751927774728933) - n * (.0003189131175883281 * n + .7364883807733168);
                Q[E++] = 255 + h * (13598650411385308e-21 * h + .00012423956175490851 * f + .0004751985097583589 * G - 36729317476630424e-22 * n - .05562186980264034) + f * (.00016141380598724676 * f + .0009692239130725186 * G + .0007782692450036253 * n - .44015232367526463) + G * (5.068882914068769e-7 * G + .0017778369011375071 * n - .7591454649749609) - n * (.0003435319965105553 * n + .7063770186160144);
              }
              return Q.subarray(0, E);
            },
            getData: function getData(Q) {
              var h = Q.width,
                f = Q.height,
                G = Q.forceRGB,
                n = Q.isSourcePDF;
              if (this.p > 4) {
                throw new W("Unsupported color mode");
              }
              var E = this.Y(h, f, n);
              if (this.p === 1 && G) {
                var a = E.length,
                  C = new Uint8ClampedArray(a * 3),
                  F = 0;
                for (var d = 0; d < a; d++) {
                  var T = E[d];
                  C[F++] = T;
                  C[F++] = T;
                  C[F++] = T;
                }
                return C;
              } else if (this.p === 3 && this.f) {
                return this.z(E);
              } else if (this.p === 4) {
                if (this.f) {
                  if (G) {
                    return this.O(E);
                  }
                  return this.r(E);
                } else if (G) {
                  return this.U(E);
                }
              }
              return E;
            }
          };
          return ak;
        }();
      function Z(p, t) {
        return p[t] << 8 | p[t + 1];
      }
      UTIF.JpegDecoder = ak;
    })();

    //UTIF.JpegDecoder = PDFJS.JpegImage;

    UTIF.encodeImage = function (rgba, w, h, metadata) {
      var idf = {
        "t256": [w],
        "t257": [h],
        "t258": [8, 8, 8, 8],
        "t259": [1],
        "t262": [2],
        "t273": [1000],
        // strips offset
        "t277": [4],
        "t278": [h],
        /* rows per strip */"t279": [w * h * 4],
        // strip byte counts
        "t282": [[72, 1]],
        "t283": [[72, 1]],
        "t284": [1],
        "t286": [[0, 1]],
        "t287": [[0, 1]],
        "t296": [1],
        "t305": ["Photopea (UTIF.js)"],
        "t338": [1]
      };
      if (metadata) for (var i in metadata) {
        idf[i] = metadata[i];
      }
      var prfx = new Uint8Array(UTIF.encode([idf]));
      var img = new Uint8Array(rgba);
      var data = new Uint8Array(1000 + w * h * 4);
      for (var i = 0; i < prfx.length; i++) {
        data[i] = prfx[i];
      }
      for (var i = 0; i < img.length; i++) {
        data[1000 + i] = img[i];
      }
      return data.buffer;
    };
    UTIF.encode = function (ifds) {
      var data = new Uint8Array(20000),
        offset = 4,
        bin = UTIF._binBE;
      data[0] = data[1] = 77;
      bin.writeUshort(data, 2, 42);
      var ifdo = 8;
      bin.writeUint(data, offset, ifdo);
      offset += 4;
      for (var i = 0; i < ifds.length; i++) {
        var noffs = UTIF._writeIFD(bin, UTIF._types.basic, data, ifdo, ifds[i]);
        ifdo = noffs[1];
        if (i < ifds.length - 1) {
          if ((ifdo & 3) != 0) ifdo += 4 - (ifdo & 3); // make each IFD start at multiple of 4
          bin.writeUint(data, noffs[0], ifdo);
        }
      }
      return data.slice(0, ifdo).buffer;
    };
    UTIF.decode = function (buff, prm) {
      if (prm == null) prm = {
        parseMN: true,
        debug: false
      }; // read MakerNote, debug
      var data = new Uint8Array(buff),
        offset = 0;
      var id = UTIF._binBE.readASCII(data, offset, 2);
      offset += 2;
      var bin = id == "II" ? UTIF._binLE : UTIF._binBE;
      bin.readUshort(data, offset);
      offset += 2;
      var ifdo = bin.readUint(data, offset);
      offset += 4;
      var ifds = [];
      while (true) {
        var cnt = bin.readUshort(data, ifdo),
          typ = bin.readUshort(data, ifdo + 4);
        if (cnt != 0) if (typ < 1 || 13 < typ) {
          log("error in TIFF");
          break;
        }
        UTIF._readIFD(bin, data, ifdo, ifds, 0, prm);
        ifdo = bin.readUint(data, ifdo + 2 + cnt * 12);
        if (ifdo == 0) break;
      }
      return ifds;
    };
    UTIF.decodeImage = function (buff, img, ifds) {
      if (img.data) return;
      var data = new Uint8Array(buff);
      var id = UTIF._binBE.readASCII(data, 0, 2);
      if (img["t256"] == null) return; // No width => probably not an image
      img.isLE = id == "II";
      img.width = img["t256"][0]; //delete img["t256"];
      img.height = img["t257"][0]; //delete img["t257"];

      var cmpr = img["t259"] ? img["t259"][0] : 1; //delete img["t259"];
      var fo = img["t266"] ? img["t266"][0] : 1; //delete img["t266"];
      if (img["t284"] && img["t284"][0] == 2) log("PlanarConfiguration 2 should not be used!");
      var bipp; // bits per pixel
      if (img["t258"]) bipp = Math.min(32, img["t258"][0]) * img["t258"].length;else bipp = img["t277"] ? img["t277"][0] : 1;
      // Some .NEF files have t258==14, even though they use 16 bits per pixel
      if (cmpr == 1 && img["t279"] != null && img["t278"] && img["t262"][0] == 32803) {
        bipp = Math.round(img["t279"][0] * 8 / (img.width * img["t278"][0]));
      }
      var bipl = Math.ceil(img.width * bipp / 8) * 8;
      var soff = img["t273"];
      if (soff == null) soff = img["t324"];
      var bcnt = img["t279"];
      if (cmpr == 1 && soff.length == 1) bcnt = [img.height * (bipl >>> 3)];
      if (bcnt == null) bcnt = img["t325"];
      //bcnt[0] = Math.min(bcnt[0], data.length);  // Hasselblad, "RAW_HASSELBLAD_H3D39II.3FR"
      var bytes = new Uint8Array(img.height * (bipl >>> 3)),
        bilen = 0;
      if (img["t322"] != null)
        // tiled
        {
          var tw = img["t322"][0],
            th = img["t323"][0];
          var tx = Math.floor((img.width + tw - 1) / tw);
          var ty = Math.floor((img.height + th - 1) / th);
          var tbuff = new Uint8Array(Math.ceil(tw * th * bipp / 8) | 0);
          for (var y = 0; y < ty; y++) {
            for (var x = 0; x < tx; x++) {
              var i = y * tx + x;
              for (var j = 0; j < tbuff.length; j++) {
                tbuff[j] = 0;
              }
              UTIF.decode._decompress(img, ifds, data, soff[i], bcnt[i], cmpr, tbuff, 0, fo);
              // Might be required for 7 too. Need to check
              if (cmpr == 6) bytes = tbuff;else UTIF._copyTile(tbuff, Math.ceil(tw * bipp / 8) | 0, th, bytes, Math.ceil(img.width * bipp / 8) | 0, img.height, Math.ceil(x * tw * bipp / 8) | 0, y * th);
            }
          }
          bilen = bytes.length * 8;
        } else
        // stripped
        {
          var rps = img["t278"] ? img["t278"][0] : img.height;
          rps = Math.min(rps, img.height);
          for (var i = 0; i < soff.length; i++) {
            UTIF.decode._decompress(img, ifds, data, soff[i], bcnt[i], cmpr, bytes, Math.ceil(bilen / 8) | 0, fo);
            bilen += bipl * rps;
          }
          bilen = Math.min(bilen, bytes.length * 8);
        }
      img.data = new Uint8Array(bytes.buffer, 0, Math.ceil(bilen / 8) | 0);
    };
    UTIF.decode._decompress = function (img, ifds, data, off, len, cmpr, tgt, toff, fo)
    // fill order
    {
      //console.log("compression", cmpr);
      //var time = Date.now();
      if (cmpr == 1 /* || (len==tgt.length && cmpr!=32767)*/) for (var j = 0; j < len; j++) {
        tgt[toff + j] = data[off + j];
      } else if (cmpr == 3) UTIF.decode._decodeG3(data, off, len, tgt, toff, img.width, fo, img["t292"] ? (img["t292"][0] & 1) == 1 : false);else if (cmpr == 4) UTIF.decode._decodeG4(data, off, len, tgt, toff, img.width, fo);else if (cmpr == 5) UTIF.decode._decodeLZW(data, off, len, tgt, toff, 8);else if (cmpr == 6) UTIF.decode._decodeOldJPEG(img, data, off, len, tgt, toff);else if (cmpr == 7 || cmpr == 34892) UTIF.decode._decodeNewJPEG(img, data, off, len, tgt, toff);else if (cmpr == 8 || cmpr == 32946) {
        var src = new Uint8Array(data.buffer, off, len);
        var bin = pako["inflate"](src);
        for (var i = 0; i < bin.length; i++) {
          tgt[toff + i] = bin[i];
        }
      } else if (cmpr == 9) UTIF.decode._decodeVC5(data, off, len, tgt, toff);else if (cmpr == 32767) UTIF.decode._decodeARW(img, data, off, len, tgt, toff);else if (cmpr == 32773) UTIF.decode._decodePackBits(data, off, len, tgt, toff);else if (cmpr == 32809) UTIF.decode._decodeThunder(data, off, len, tgt, toff);else if (cmpr == 34713)
        //for(var j=0; j<len; j++) tgt[toff+j] = data[off+j];
        UTIF.decode._decodeNikon(img, ifds, data, off, len, tgt, toff);else log("Unknown compression", cmpr);

      //console.log(Date.now()-time);

      var bps = img["t258"] ? Math.min(32, img["t258"][0]) : 1;
      var noc = img["t277"] ? img["t277"][0] : 1,
        bpp = bps * noc >>> 3,
        h = img["t278"] ? img["t278"][0] : img.height,
        bpl = Math.ceil(bps * noc * img.width / 8);

      // convert to Little Endian  /*
      if (bps == 16 && !img.isLE && img["t33422"] == null)
        // not DNG
        for (var y = 0; y < h; y++) {
          //console.log("fixing endianity");
          var roff = toff + y * bpl;
          for (var x = 1; x < bpl; x += 2) {
            var t = tgt[roff + x];
            tgt[roff + x] = tgt[roff + x - 1];
            tgt[roff + x - 1] = t;
          }
        } //*/

      if (img["t317"] && img["t317"][0] == 2) {
        for (var y = 0; y < h; y++) {
          var ntoff = toff + y * bpl;
          if (bps == 16) for (var j = bpp; j < bpl; j += 2) {
            var nv = (tgt[ntoff + j + 1] << 8 | tgt[ntoff + j]) + (tgt[ntoff + j - bpp + 1] << 8 | tgt[ntoff + j - bpp]);
            tgt[ntoff + j] = nv & 255;
            tgt[ntoff + j + 1] = nv >>> 8 & 255;
          } else if (noc == 3) for (var j = 3; j < bpl; j += 3) {
            tgt[ntoff + j] = tgt[ntoff + j] + tgt[ntoff + j - 3] & 255;
            tgt[ntoff + j + 1] = tgt[ntoff + j + 1] + tgt[ntoff + j - 2] & 255;
            tgt[ntoff + j + 2] = tgt[ntoff + j + 2] + tgt[ntoff + j - 1] & 255;
          } else for (var j = bpp; j < bpl; j++) {
            tgt[ntoff + j] = tgt[ntoff + j] + tgt[ntoff + j - bpp] & 255;
          }
        }
      }
    };
    UTIF.decode._decodeVC5 = UTIF.decode._decodeVC5 = function () {
      var e = [1, 0, 1, 0, 2, 2, 1, 1, 3, 7, 1, 2, 5, 25, 1, 3, 6, 48, 1, 4, 6, 54, 1, 5, 7, 111, 1, 8, 7, 99, 1, 6, 7, 105, 12, 0, 7, 107, 1, 7, 8, 209, 20, 0, 8, 212, 1, 9, 8, 220, 1, 10, 9, 393, 1, 11, 9, 394, 32, 0, 9, 416, 1, 12, 9, 427, 1, 13, 10, 887, 1, 18, 10, 784, 1, 14, 10, 790, 1, 15, 10, 835, 60, 0, 10, 852, 1, 16, 10, 885, 1, 17, 11, 1571, 1, 19, 11, 1668, 1, 20, 11, 1669, 100, 0, 11, 1707, 1, 21, 11, 1772, 1, 22, 12, 3547, 1, 29, 12, 3164, 1, 24, 12, 3166, 1, 25, 12, 3140, 1, 23, 12, 3413, 1, 26, 12, 3537, 1, 27, 12, 3539, 1, 28, 13, 7093, 1, 35, 13, 6283, 1, 30, 13, 6331, 1, 31, 13, 6335, 180, 0, 13, 6824, 1, 32, 13, 7072, 1, 33, 13, 7077, 320, 0, 13, 7076, 1, 34, 14, 12565, 1, 36, 14, 12661, 1, 37, 14, 12669, 1, 38, 14, 13651, 1, 39, 14, 14184, 1, 40, 15, 28295, 1, 46, 15, 28371, 1, 47, 15, 25320, 1, 42, 15, 25336, 1, 43, 15, 25128, 1, 41, 15, 27300, 1, 44, 15, 28293, 1, 45, 16, 50259, 1, 48, 16, 50643, 1, 49, 16, 50675, 1, 50, 16, 56740, 1, 53, 16, 56584, 1, 51, 16, 56588, 1, 52, 17, 113483, 1, 61, 17, 113482, 1, 60, 17, 101285, 1, 55, 17, 101349, 1, 56, 17, 109205, 1, 57, 17, 109207, 1, 58, 17, 100516, 1, 54, 17, 113171, 1, 59, 18, 202568, 1, 62, 18, 202696, 1, 63, 18, 218408, 1, 64, 18, 218412, 1, 65, 18, 226340, 1, 66, 18, 226356, 1, 67, 18, 226358, 1, 68, 19, 402068, 1, 69, 19, 405138, 1, 70, 19, 405394, 1, 71, 19, 436818, 1, 72, 19, 436826, 1, 73, 19, 452714, 1, 75, 19, 452718, 1, 76, 19, 452682, 1, 74, 20, 804138, 1, 77, 20, 810279, 1, 78, 20, 810790, 1, 79, 20, 873638, 1, 80, 20, 873654, 1, 81, 20, 905366, 1, 82, 20, 905430, 1, 83, 20, 905438, 1, 84, 21, 1608278, 1, 85, 21, 1620557, 1, 86, 21, 1621582, 1, 87, 21, 1621583, 1, 88, 21, 1747310, 1, 89, 21, 1810734, 1, 90, 21, 1810735, 1, 91, 21, 1810863, 1, 92, 21, 1810879, 1, 93, 22, 3621725, 1, 99, 22, 3621757, 1, 100, 22, 3241112, 1, 94, 22, 3494556, 1, 95, 22, 3494557, 1, 96, 22, 3494622, 1, 97, 22, 3494623, 1, 98, 23, 6482227, 1, 102, 23, 6433117, 1, 101, 23, 6989117, 1, 103, 23, 6989119, 1, 105, 23, 6989118, 1, 104, 23, 7243449, 1, 106, 23, 7243512, 1, 107, 24, 13978233, 1, 111, 24, 12964453, 1, 109, 24, 12866232, 1, 108, 24, 14486897, 1, 113, 24, 13978232, 1, 110, 24, 14486896, 1, 112, 24, 14487026, 1, 114, 24, 14487027, 1, 115, 25, 25732598, 1, 225, 25, 25732597, 1, 189, 25, 25732596, 1, 188, 25, 25732595, 1, 203, 25, 25732594, 1, 202, 25, 25732593, 1, 197, 25, 25732592, 1, 207, 25, 25732591, 1, 169, 25, 25732590, 1, 223, 25, 25732589, 1, 159, 25, 25732522, 1, 235, 25, 25732579, 1, 152, 25, 25732575, 1, 192, 25, 25732489, 1, 179, 25, 25732573, 1, 201, 25, 25732472, 1, 172, 25, 25732576, 1, 149, 25, 25732488, 1, 178, 25, 25732566, 1, 120, 25, 25732571, 1, 219, 25, 25732577, 1, 150, 25, 25732487, 1, 127, 25, 25732506, 1, 211, 25, 25732548, 1, 125, 25, 25732588, 1, 158, 25, 25732486, 1, 247, 25, 25732467, 1, 238, 25, 25732508, 1, 163, 25, 25732552, 1, 228, 25, 25732603, 1, 183, 25, 25732513, 1, 217, 25, 25732587, 1, 168, 25, 25732520, 1, 122, 25, 25732484, 1, 128, 25, 25732562, 1, 249, 25, 25732505, 1, 187, 25, 25732504, 1, 186, 25, 25732483, 1, 136, 25, 25928905, 1, 181, 25, 25732560, 1, 255, 25, 25732500, 1, 230, 25, 25732482, 1, 135, 25, 25732555, 1, 233, 25, 25732568, 1, 222, 25, 25732583, 1, 145, 25, 25732481, 1, 134, 25, 25732586, 1, 167, 25, 25732521, 1, 248, 25, 25732518, 1, 209, 25, 25732480, 1, 243, 25, 25732512, 1, 216, 25, 25732509, 1, 164, 25, 25732547, 1, 140, 25, 25732479, 1, 157, 25, 25732544, 1, 239, 25, 25732574, 1, 191, 25, 25732564, 1, 251, 25, 25732478, 1, 156, 25, 25732546, 1, 139, 25, 25732498, 1, 242, 25, 25732557, 1, 133, 25, 25732477, 1, 162, 25, 25732515, 1, 213, 25, 25732584, 1, 165, 25, 25732514, 1, 212, 25, 25732476, 1, 227, 25, 25732494, 1, 198, 25, 25732531, 1, 236, 25, 25732530, 1, 234, 25, 25732529, 1, 117, 25, 25732528, 1, 215, 25, 25732527, 1, 124, 25, 25732526, 1, 123, 25, 25732525, 1, 254, 25, 25732524, 1, 253, 25, 25732523, 1, 148, 25, 25732570, 1, 218, 25, 25732580, 1, 146, 25, 25732581, 1, 147, 25, 25732569, 1, 224, 25, 25732533, 1, 143, 25, 25732540, 1, 184, 25, 25732541, 1, 185, 25, 25732585, 1, 166, 25, 25732556, 1, 132, 25, 25732485, 1, 129, 25, 25732563, 1, 250, 25, 25732578, 1, 151, 25, 25732501, 1, 119, 25, 25732502, 1, 193, 25, 25732536, 1, 176, 25, 25732496, 1, 245, 25, 25732553, 1, 229, 25, 25732516, 1, 206, 25, 25732582, 1, 144, 25, 25732517, 1, 208, 25, 25732558, 1, 137, 25, 25732543, 1, 241, 25, 25732466, 1, 237, 25, 25732507, 1, 190, 25, 25732542, 1, 240, 25, 25732551, 1, 131, 25, 25732554, 1, 232, 25, 25732565, 1, 252, 25, 25732475, 1, 171, 25, 25732493, 1, 205, 25, 25732492, 1, 204, 25, 25732491, 1, 118, 25, 25732490, 1, 214, 25, 25928904, 1, 180, 25, 25732549, 1, 126, 25, 25732602, 1, 182, 25, 25732539, 1, 175, 25, 25732545, 1, 141, 25, 25732559, 1, 138, 25, 25732537, 1, 177, 25, 25732534, 1, 153, 25, 25732503, 1, 194, 25, 25732606, 1, 160, 25, 25732567, 1, 121, 25, 25732538, 1, 174, 25, 25732497, 1, 246, 25, 25732550, 1, 130, 25, 25732572, 1, 200, 25, 25732474, 1, 170, 25, 25732511, 1, 221, 25, 25732601, 1, 196, 25, 25732532, 1, 142, 25, 25732519, 1, 210, 25, 25732495, 1, 199, 25, 25732605, 1, 155, 25, 25732535, 1, 154, 25, 25732499, 1, 244, 25, 25732510, 1, 220, 25, 25732600, 1, 195, 25, 25732607, 1, 161, 25, 25732604, 1, 231, 25, 25732473, 1, 173, 25, 25732599, 1, 226, 26, 51465122, 1, 116, 26, 51465123, 0, 1],
        x,
        u,
        H,
        d = [3, 3, 3, 3, 2, 2, 2, 1, 1, 1],
        a = 24576,
        a7 = 16384,
        K = 8192,
        ai = a7 | K;
      function A(B) {
        var P = B[1],
          D = B[0][P >>> 3] >>> 7 - (P & 7) & 1;
        B[1]++;
        return D;
      }
      function aj(B, P) {
        if (x == null) {
          x = {};
          for (var D = 0; D < e.length; D += 4) {
            x[e[D + 1]] = e.slice(D, D + 4);
          }
        }
        var U = A(B),
          X = x[U];
        while (X == null) {
          U = U << 1 | A(B);
          X = x[U];
        }
        var y = X[3];
        if (y != 0) y = A(B) == 0 ? y : -y;
        P[0] = X[2];
        P[1] = y;
      }
      function Q(B, P) {
        for (var D = 0; D < P; D++) {
          if ((B & 1) == 1) B++;
          B = B >>> 1;
        }
        return B;
      }
      function c(B, P) {
        return B >> P;
      }
      function N(B, P, D, U, X, y) {
        P[D] = c(c(11 * B[X] - 4 * B[X + y] + B[X + y + y] + 4, 3) + B[U], 1);
        P[D + y] = c(c(5 * B[X] + 4 * B[X + y] - B[X + y + y] + 4, 3) - B[U], 1);
      }
      function g(B, P, D, U, X, y) {
        var n = B[X - y] - B[X + y],
          S = B[X],
          O = B[U];
        P[D] = c(c(n + 4, 3) + S + O, 1);
        P[D + y] = c(c(-n + 4, 3) + S - O, 1);
      }
      function L(B, P, D, U, X, y) {
        P[D] = c(c(5 * B[X] + 4 * B[X - y] - B[X - y - y] + 4, 3) + B[U], 1);
        P[D + y] = c(c(11 * B[X] - 4 * B[X - y] + B[X - y - y] + 4, 3) - B[U], 1);
      }
      function t(B) {
        B = B < 0 ? 0 : B > 4095 ? 4095 : B;
        B = H[B] >>> 2;
        return B;
      }
      function ab(B, P, D, U, X) {
        U = new Uint16Array(U.buffer);
        var y = Date.now(),
          n = UTIF._binBE,
          S = P + D,
          O,
          q,
          i,
          M,
          m,
          T,
          a0,
          v,
          p,
          k;
        P += 4;
        while (P < S) {
          var W = n.readShort(B, P),
            E = n.readUshort(B, P + 2);
          P += 4;
          if (W == 12) O = E;else if (W == 20) q = E;else if (W == 21) i = E;else if (W == 48) M = E;else if (W == 53) m = E;else if (W == 35) ;else if (W == 62) T = E;else if (W == 101) ;else if (W == 109) a0 = E;else if (W == 84) ;else if (W == 106) ;else if (W == 107) ;else if (W == 108) ;else if (W == 102) ;else if (W == 104) v = E;else if (W == 105) ;else {
            var C = W < 0 ? -W : W,
              F = C & 65280,
              o = 0;
            if (C & ai) {
              if (C & K) {
                o = E & 65535;
                o += (C & 255) << 16;
              } else {
                o = E & 65535;
              }
            }
            if ((C & a) == a) {
              if (p == null) {
                p = [];
                for (var f = 0; f < 4; f++) {
                  p[f] = new Int16Array((q >>> 1) * (i >>> 1));
                }
                k = new Int16Array((q >>> 1) * (i >>> 1));
                u = new Int16Array(1024);
                for (var f = 0; f < 1024; f++) {
                  var aF = f - 512,
                    j = Math.abs(aF),
                    O = Math.floor(768 * j * j * j / (255 * 255 * 255)) + j;
                  u[f] = Math.sign(aF) * O;
                }
                H = new Uint16Array(4096);
                var al = (1 << 16) - 1;
                for (var f = 0; f < 4096; f++) {
                  var ad = f,
                    az = al * (Math.pow(113, ad / 4095) - 1) / 112;
                  H[f] = Math.min(az, al);
                }
              }
              var Z = p[T],
                V = Q(q, 1 + d[M]),
                z = Q(i, 1 + d[M]);
              if (M == 0) {
                for (var b = 0; b < z; b++) {
                  for (var G = 0; G < V; G++) {
                    var w = P + (b * V + G) * 2;
                    Z[b * (q >>> 1) + G] = B[w] << 8 | B[w + 1];
                  }
                }
              } else {
                var aC = [B, P * 8],
                  aq = [],
                  a5 = 0,
                  ae = V * z,
                  I = [0, 0],
                  s = 0,
                  E = 0;
                while (a5 < ae) {
                  aj(aC, I);
                  s = I[0];
                  E = I[1];
                  while (s > 0) {
                    aq[a5++] = E;
                    s--;
                  }
                }
                var $ = (M - 1) % 3,
                  aE = $ != 1 ? V : 0,
                  as = $ != 0 ? z : 0;
                for (var b = 0; b < z; b++) {
                  var ay = (b + as) * (q >>> 1) + aE,
                    aa = b * V;
                  for (var G = 0; G < V; G++) {
                    Z[ay + G] = u[aq[aa + G] + 512] * m;
                  }
                }
                if ($ == 2) {
                  var v = q >>> 1,
                    an = V * 2,
                    at = z * 2;
                  for (var b = 0; b < z; b++) {
                    for (var G = 0; G < an; G++) {
                      var f = b * 2 * v + G,
                        _ = b * v + G,
                        l = z * v + _;
                      if (b == 0) N(Z, k, f, l, _, v);else if (b == z - 1) L(Z, k, f, l, _, v);else g(Z, k, f, l, _, v);
                    }
                  }
                  var h = Z;
                  Z = k;
                  k = h;
                  for (var b = 0; b < at; b++) {
                    for (var G = 0; G < V; G++) {
                      var f = b * v + 2 * G,
                        _ = b * v + G,
                        l = V + _;
                      if (G == 0) N(Z, k, f, l, _, 1);else if (G == V - 1) L(Z, k, f, l, _, 1);else g(Z, k, f, l, _, 1);
                    }
                  }
                  var h = Z;
                  Z = k;
                  k = h;
                  var a6 = [],
                    aD = 2 - ~~((M - 1) / 3);
                  for (var r = 0; r < 3; r++) {
                    a6[r] = a0 >> 14 - r * 2 & 3;
                  }
                  var af = a6[aD];
                  if (af != 0) for (var b = 0; b < at; b++) {
                    for (var G = 0; G < an; G++) {
                      var f = b * v + G;
                      Z[f] = Z[f] << af;
                    }
                  }
                }
              }
              if (M == 9 && T == 3) {
                var a2 = p[0],
                  ar = p[1],
                  ah = p[2],
                  a1 = p[3];
                for (var b = 0; b < i; b += 2) {
                  for (var G = 0; G < q; G += 2) {
                    var J = b * q + G,
                      w = (b >>> 1) * (q >>> 1) + (G >>> 1),
                      R = a2[w],
                      ak = ar[w] - 2048,
                      aB = ah[w] - 2048,
                      av = a1[w] - 2048,
                      a4 = (ak << 1) + R,
                      a9 = (aB << 1) + R,
                      ap = R + av,
                      ag = R - av;
                    U[J] = t(a4);
                    U[J + 1] = t(ap);
                    U[J + q] = t(ag);
                    U[J + q + 1] = t(a9);
                  }
                }
              }
              P += o * 4;
            } else if (C == 16388) {
              P += o * 4;
            } else if (F == 8192 || F == 8448 || F == 9216) ; else throw C.toString(16);
          }
        }
        console.log(Date.now() - y);
      }
      return ab;
    }();
    UTIF.decode._ljpeg_diff = function (data, prm, huff) {
      var getbithuff = UTIF.decode._getbithuff;
      var len, diff;
      len = getbithuff(data, prm, huff[0], huff);
      diff = getbithuff(data, prm, len, 0);
      if ((diff & 1 << len - 1) == 0) diff -= (1 << len) - 1;
      return diff;
    };
    UTIF.decode._decodeARW = function (img, inp, off, src_length, tgt, toff) {
      var raw_width = img["t256"][0],
        height = img["t257"][0],
        tiff_bps = img["t258"][0];
      var bin = img.isLE ? UTIF._binLE : UTIF._binBE;
      //console.log(raw_width, height, tiff_bps, raw_width*height, src_length);
      var arw2 = raw_width * height == src_length || raw_width * height * 1.5 == src_length;
      //arw2 = true;
      //console.log("ARW2: ", arw2, raw_width*height, src_length, tgt.length);
      if (!arw2) {
        //"sony_arw_load_raw"; // not arw2
        height += 8;
        var prm = [off, 0, 0, 0];
        var huff = new Uint16Array(32770);
        var tab = [0xf11, 0xf10, 0xe0f, 0xd0e, 0xc0d, 0xb0c, 0xa0b, 0x90a, 0x809, 0x708, 0x607, 0x506, 0x405, 0x304, 0x303, 0x300, 0x202, 0x201];
        var i,
          c,
          n,
          col,
          row,
          sum = 0;
        var ljpeg_diff = UTIF.decode._ljpeg_diff;
        huff[0] = 15;
        for (n = i = 0; i < 18; i++) {
          var lim = 32768 >>> (tab[i] >>> 8);
          for (var c = 0; c < lim; c++) {
            huff[++n] = tab[i];
          }
        }
        for (col = raw_width; col--;) {
          for (row = 0; row < height + 1; row += 2) {
            if (row == height) row = 1;
            sum += ljpeg_diff(inp, prm, huff);
            if (row < height) {
              var clr = sum & 4095;
              UTIF.decode._putsF(tgt, (row * raw_width + col) * tiff_bps, clr << 16 - tiff_bps);
            }
          }
        }
        return;
      }
      if (raw_width * height * 1.5 == src_length) {
        //console.log("weird compression");
        for (var i = 0; i < src_length; i += 3) {
          var b0 = inp[off + i + 0],
            b1 = inp[off + i + 1],
            b2 = inp[off + i + 2];
          tgt[toff + i] = b1 << 4 | b0 >>> 4;
          tgt[toff + i + 1] = b0 << 4 | b2 >>> 4;
          tgt[toff + i + 2] = b2 << 4 | b1 >>> 4;
        }
        return;
      }
      var pix = new Uint16Array(16);
      var row, col, val, max, min, imax, imin, sh, bit, i, dp;
      var data = new Uint8Array(raw_width + 1);
      for (row = 0; row < height; row++) {
        //fread (data, 1, raw_width, ifp);
        for (var j = 0; j < raw_width; j++) {
          data[j] = inp[off++];
        }
        for (dp = 0, col = 0; col < raw_width - 30; dp += 16) {
          max = 0x7ff & (val = bin.readUint(data, dp));
          min = 0x7ff & val >>> 11;
          imax = 0x0f & val >>> 22;
          imin = 0x0f & val >>> 26;
          for (sh = 0; sh < 4 && 0x80 << sh <= max - min; sh++) {
          }
          for (bit = 30, i = 0; i < 16; i++) {
            if (i == imax) pix[i] = max;else if (i == imin) pix[i] = min;else {
              pix[i] = ((bin.readUshort(data, dp + (bit >> 3)) >>> (bit & 7) & 0x7f) << sh) + min;
              if (pix[i] > 0x7ff) pix[i] = 0x7ff;
              bit += 7;
            }
          }
          for (i = 0; i < 16; i++, col += 2) {
            //RAW(row,col) = curve[pix[i] << 1] >> 2;
            var clr = pix[i] << 1; //clr = 0xffff;
            UTIF.decode._putsF(tgt, (row * raw_width + col) * tiff_bps, clr << 16 - tiff_bps);
          }
          col -= col & 1 ? 1 : 31;
        }
      }
    };
    UTIF.decode._decodeNikon = function (img, imgs, data, off, src_length, tgt, toff) {
      var nikon_tree = [[0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, /* 12-bit lossy */
      5, 4, 3, 6, 2, 7, 1, 0, 8, 9, 11, 10, 12], [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, /* 12-bit lossy after split */
      0x39, 0x5a, 0x38, 0x27, 0x16, 5, 4, 3, 2, 1, 0, 11, 12, 12], [0, 0, 1, 4, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, /* 12-bit lossless */
      5, 4, 6, 3, 7, 2, 8, 1, 9, 0, 10, 11, 12], [0, 0, 1, 4, 3, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, /* 14-bit lossy */
      5, 6, 4, 7, 8, 3, 9, 2, 1, 0, 10, 11, 12, 13, 14], [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, /* 14-bit lossy after split */
      8, 0x5c, 0x4b, 0x3a, 0x29, 7, 6, 5, 4, 3, 2, 1, 0, 13, 14], [0, 0, 1, 4, 2, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, /* 14-bit lossless */
      7, 6, 8, 5, 9, 4, 10, 3, 11, 12, 2, 0, 1, 13, 14]];
      var raw_width = img["t256"][0],
        height = img["t257"][0],
        tiff_bps = img["t258"][0];
      var tree = 0,
        split = 0;
      var make_decoder = UTIF.decode._make_decoder;
      var getbithuff = UTIF.decode._getbithuff;
      var mn = imgs[0].exifIFD.makerNote,
        md = mn["t150"] ? mn["t150"] : mn["t140"],
        mdo = 0; //console.log(mn,md);
      //console.log(md[0].toString(16), md[1].toString(16), tiff_bps);
      var ver0 = md[mdo++],
        ver1 = md[mdo++];
      if (ver0 == 0x49 || ver1 == 0x58) mdo += 2110;
      if (ver0 == 0x46) tree = 2;
      if (tiff_bps == 14) tree += 3;
      var vpred = [[0, 0], [0, 0]],
        bin = img.isLE ? UTIF._binLE : UTIF._binBE;
      for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
          vpred[i][j] = bin.readShort(md, mdo);
          mdo += 2;
        }
      } // not sure here ... [i][j] or [j][i]
      //console.log(vpred);

      var max = 1 << tiff_bps & 0x7fff,
        step = 0;
      var csize = bin.readShort(md, mdo);
      mdo += 2;
      if (csize > 1) step = Math.floor(max / (csize - 1));
      if (ver0 == 0x44 && ver1 == 0x20 && step > 0) split = bin.readShort(md, 562);
      var i;
      var row, col;
      var len, shl, diff;
      var hpred = [0, 0];
      var huff = make_decoder(nikon_tree[tree]);

      //var g_input_offset=0, bitbuf=0, vbits=0, reset=0;
      var prm = [off, 0, 0, 0];
      //console.log(split);  split = 170;

      for (row = 0; row < height; row++) {
        if (split && row == split) {
          //free (huff);
          huff = make_decoder(nikon_tree[tree + 1]);
          //max_v += (min_v = 16) << 1;
        }

        for (col = 0; col < raw_width; col++) {
          i = getbithuff(data, prm, huff[0], huff);
          len = i & 15;
          shl = i >>> 4;
          diff = (getbithuff(data, prm, len - shl, 0) << 1) + 1 << shl >>> 1;
          if ((diff & 1 << len - 1) == 0) diff -= (1 << len) - (shl == 0 ? 1 : 0);
          if (col < 2) hpred[col] = vpred[row & 1][col] += diff;else hpred[col & 1] += diff;
          var clr = Math.min(Math.max(hpred[col & 1], 0), (1 << tiff_bps) - 1);
          var bti = (row * raw_width + col) * tiff_bps;
          UTIF.decode._putsF(tgt, bti, clr << 16 - tiff_bps);
        }
      }
    };
    // put 16 bits
    UTIF.decode._putsF = function (dt, pos, val) {
      val = val << 8 - (pos & 7);
      var o = pos >>> 3;
      dt[o] |= val >>> 16;
      dt[o + 1] |= val >>> 8;
      dt[o + 2] |= val;
    };
    UTIF.decode._getbithuff = function (data, prm, nbits, huff) {
      var zero_after_ff = 0;
      UTIF.decode._get_byte;
      var c;
      var off = prm[0],
        bitbuf = prm[1],
        vbits = prm[2],
        reset = prm[3];

      //if (nbits > 25) return 0;
      //if (nbits <  0) return bitbuf = vbits = reset = 0;
      if (nbits == 0 || vbits < 0) return 0;
      while (!reset && vbits < nbits && (c = data[off++]) != -1 && !(reset = zero_after_ff  )) {
        //console.log("byte read into c");
        bitbuf = (bitbuf << 8) + c;
        vbits += 8;
      }
      c = bitbuf << 32 - vbits >>> 32 - nbits;
      if (huff) {
        vbits -= huff[c + 1] >>> 8; //console.log(c, huff[c]>>8);
        c = huff[c + 1] & 255;
      } else vbits -= nbits;
      if (vbits < 0) throw "e";
      prm[0] = off;
      prm[1] = bitbuf;
      prm[2] = vbits;
      prm[3] = reset;
      return c;
    };
    UTIF.decode._make_decoder = function (source) {
      var max, len, h, i, j;
      var huff = [];
      for (max = 16; max != 0 && !source[max]; max--) {
      }
      var si = 17;
      huff[0] = max;
      for (h = len = 1; len <= max; len++) {
        for (i = 0; i < source[len]; i++, ++si) {
          for (j = 0; j < 1 << max - len; j++) {
            if (h <= 1 << max) huff[h++] = len << 8 | source[si];
          }
        }
      }
      return huff;
    };
    UTIF.decode._decodeNewJPEG = function (img, data, off, len, tgt, toff) {
      len = Math.min(len, data.length - off);
      var tables = img["t347"],
        tlen = tables ? tables.length : 0,
        buff = new Uint8Array(tlen + len);
      if (tables) {
        var SOI = 216,
          EOI = 217,
          boff = 0;
        for (var i = 0; i < tlen - 1; i++) {
          // Skip EOI marker from JPEGTables
          if (tables[i] == 255 && tables[i + 1] == EOI) break;
          buff[boff++] = tables[i];
        }

        // Skip SOI marker from data
        var byte1 = data[off],
          byte2 = data[off + 1];
        if (byte1 != 255 || byte2 != SOI) {
          buff[boff++] = byte1;
          buff[boff++] = byte2;
        }
        for (var i = 2; i < len; i++) {
          buff[boff++] = data[off + i];
        }
      } else for (var i = 0; i < len; i++) {
        buff[i] = data[off + i];
      }
      if (img["t262"][0] == 32803 || img["t259"][0] == 7 && img["t262"][0] == 34892)
        // lossless JPEG (used in DNG files)
        {
          var bps = img["t258"][0]; //, dcdr = new LosslessJpegDecoder();
          //var time = Date.now();
          var out = UTIF.LosslessJpegDecode(buff),
            olen = out.length; //console.log(olen);
          //var out = ULLJPG(buff), olen=out.length;  //console.log(olen);
          //console.log(Date.now()-time);

          if (bps == 16) {
            if (img.isLE) for (var i = 0; i < olen; i++) {
              tgt[toff + (i << 1)] = out[i] & 255;
              tgt[toff + (i << 1) + 1] = out[i] >>> 8;
            } else for (var i = 0; i < olen; i++) {
              tgt[toff + (i << 1)] = out[i] >>> 8;
              tgt[toff + (i << 1) + 1] = out[i] & 255;
            }
          } else if (bps == 14 || bps == 12) {
            // 4 * 14 == 56 == 7 * 8
            var rst = 16 - bps;
            for (var i = 0; i < olen; i++) {
              UTIF.decode._putsF(tgt, i * bps, out[i] << rst);
            }
          } else if (bps == 8) {
            for (var i = 0; i < olen; i++) {
              tgt[toff + i] = out[i];
            }
          } else throw new Error("unsupported bit depth " + bps);
        } else {
        var parser = new UTIF.JpegDecoder();
        parser.parse(buff);
        var decoded = parser.getData({
          "width": parser.width,
          "height": parser.height,
          "forceRGB": true,
          "isSourcePDF": false
        });
        for (var i = 0; i < decoded.length; i++) {
          tgt[toff + i] = decoded[i];
        }
      }

      // PhotometricInterpretation is 6 (YCbCr) for JPEG, but after decoding we populate data in
      // RGB format, so updating the tag value
      if (img["t262"][0] == 6) img["t262"][0] = 2;
    };
    UTIF.decode._decodeOldJPEGInit = function (img, data, off, len) {
      var SOI = 216,
        DQT = 219,
        DHT = 196,
        DRI = 221,
        SOF0 = 192,
        SOS = 218;
      var joff = 0,
        soff = 0,
        tables,
        sosMarker,
        isTiled = false,
        i,
        j,
        k;
      var jpgIchgFmt = img["t513"],
        jifoff = jpgIchgFmt ? jpgIchgFmt[0] : 0;
      var jpgIchgFmtLen = img["t514"],
        jiflen = jpgIchgFmtLen ? jpgIchgFmtLen[0] : 0;
      var soffTag = img["t324"] || img["t273"] || jpgIchgFmt;
      var ycbcrss = img["t530"],
        ssx = 0,
        ssy = 0;
      var spp = img["t277"] ? img["t277"][0] : 1;
      var jpgresint = img["t515"];
      if (soffTag) {
        soff = soffTag[0];
        isTiled = soffTag.length > 1;
      }
      if (!isTiled) {
        if (data[off] == 255 && data[off + 1] == SOI) return {
          jpegOffset: off
        };
        if (jpgIchgFmt != null) {
          if (data[off + jifoff] == 255 && data[off + jifoff + 1] == SOI) joff = off + jifoff;else log("JPEGInterchangeFormat does not point to SOI");
          if (jpgIchgFmtLen == null) log("JPEGInterchangeFormatLength field is missing");else if (jifoff >= soff || jifoff + jiflen <= soff) log("JPEGInterchangeFormatLength field value is invalid");
          if (joff != null) return {
            jpegOffset: joff
          };
        }
      }
      if (ycbcrss != null) {
        ssx = ycbcrss[0];
        ssy = ycbcrss[1];
      }
      if (jpgIchgFmt != null) if (jpgIchgFmtLen != null) if (jiflen >= 2 && jifoff + jiflen <= soff) {
        if (data[off + jifoff + jiflen - 2] == 255 && data[off + jifoff + jiflen - 1] == SOI) tables = new Uint8Array(jiflen - 2);else tables = new Uint8Array(jiflen);
        for (i = 0; i < tables.length; i++) {
          tables[i] = data[off + jifoff + i];
        }
        log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
      } else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
      if (tables == null) {
        var ooff = 0,
          out = [];
        out[ooff++] = 255;
        out[ooff++] = SOI;
        var qtables = img["t519"];
        if (qtables == null) throw new Error("JPEGQTables tag is missing");
        for (i = 0; i < qtables.length; i++) {
          out[ooff++] = 255;
          out[ooff++] = DQT;
          out[ooff++] = 0;
          out[ooff++] = 67;
          out[ooff++] = i;
          for (j = 0; j < 64; j++) {
            out[ooff++] = data[off + qtables[i] + j];
          }
        }
        for (k = 0; k < 2; k++) {
          var htables = img[k == 0 ? "t520" : "t521"];
          if (htables == null) throw new Error((k == 0 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
          for (i = 0; i < htables.length; i++) {
            out[ooff++] = 255;
            out[ooff++] = DHT;
            //out[ooff++] = 0; out[ooff++] = 67; out[ooff++] = i;
            var nc = 19;
            for (j = 0; j < 16; j++) {
              nc += data[off + htables[i] + j];
            }
            out[ooff++] = nc >>> 8;
            out[ooff++] = nc & 255;
            out[ooff++] = i | k << 4;
            for (j = 0; j < 16; j++) {
              out[ooff++] = data[off + htables[i] + j];
            }
            for (j = 0; j < nc; j++) {
              out[ooff++] = data[off + htables[i] + 16 + j];
            }
          }
        }
        out[ooff++] = 255;
        out[ooff++] = SOF0;
        out[ooff++] = 0;
        out[ooff++] = 8 + 3 * spp;
        out[ooff++] = 8;
        out[ooff++] = img.height >>> 8 & 255;
        out[ooff++] = img.height & 255;
        out[ooff++] = img.width >>> 8 & 255;
        out[ooff++] = img.width & 255;
        out[ooff++] = spp;
        if (spp == 1) {
          out[ooff++] = 1;
          out[ooff++] = 17;
          out[ooff++] = 0;
        } else for (i = 0; i < 3; i++) {
          out[ooff++] = i + 1;
          out[ooff++] = i != 0 ? 17 : (ssx & 15) << 4 | ssy & 15;
          out[ooff++] = i;
        }
        if (jpgresint != null && jpgresint[0] != 0) {
          out[ooff++] = 255;
          out[ooff++] = DRI;
          out[ooff++] = 0;
          out[ooff++] = 4;
          out[ooff++] = jpgresint[0] >>> 8 & 255;
          out[ooff++] = jpgresint[0] & 255;
        }
        tables = new Uint8Array(out);
      }
      var sofpos = -1;
      i = 0;
      while (i < tables.length - 1) {
        if (tables[i] == 255 && tables[i + 1] == SOF0) {
          sofpos = i;
          break;
        }
        i++;
      }
      if (sofpos == -1) {
        var tmptab = new Uint8Array(tables.length + 10 + 3 * spp);
        tmptab.set(tables);
        var tmpoff = tables.length;
        sofpos = tables.length;
        tables = tmptab;
        tables[tmpoff++] = 255;
        tables[tmpoff++] = SOF0;
        tables[tmpoff++] = 0;
        tables[tmpoff++] = 8 + 3 * spp;
        tables[tmpoff++] = 8;
        tables[tmpoff++] = img.height >>> 8 & 255;
        tables[tmpoff++] = img.height & 255;
        tables[tmpoff++] = img.width >>> 8 & 255;
        tables[tmpoff++] = img.width & 255;
        tables[tmpoff++] = spp;
        if (spp == 1) {
          tables[tmpoff++] = 1;
          tables[tmpoff++] = 17;
          tables[tmpoff++] = 0;
        } else for (i = 0; i < 3; i++) {
          tables[tmpoff++] = i + 1;
          tables[tmpoff++] = i != 0 ? 17 : (ssx & 15) << 4 | ssy & 15;
          tables[tmpoff++] = i;
        }
      }
      if (data[soff] == 255 && data[soff + 1] == SOS) {
        var soslen = data[soff + 2] << 8 | data[soff + 3];
        sosMarker = new Uint8Array(soslen + 2);
        sosMarker[0] = data[soff];
        sosMarker[1] = data[soff + 1];
        sosMarker[2] = data[soff + 2];
        sosMarker[3] = data[soff + 3];
        for (i = 0; i < soslen - 2; i++) {
          sosMarker[i + 4] = data[soff + i + 4];
        }
      } else {
        sosMarker = new Uint8Array(2 + 6 + 2 * spp);
        var sosoff = 0;
        sosMarker[sosoff++] = 255;
        sosMarker[sosoff++] = SOS;
        sosMarker[sosoff++] = 0;
        sosMarker[sosoff++] = 6 + 2 * spp;
        sosMarker[sosoff++] = spp;
        if (spp == 1) {
          sosMarker[sosoff++] = 1;
          sosMarker[sosoff++] = 0;
        } else for (i = 0; i < 3; i++) {
          sosMarker[sosoff++] = i + 1;
          sosMarker[sosoff++] = i << 4 | i;
        }
        sosMarker[sosoff++] = 0;
        sosMarker[sosoff++] = 63;
        sosMarker[sosoff++] = 0;
      }
      return {
        jpegOffset: off,
        tables: tables,
        sosMarker: sosMarker,
        sofPosition: sofpos
      };
    };
    UTIF.decode._decodeOldJPEG = function (img, data, off, len, tgt, toff) {
      var i, dlen, tlen, buff, buffoff;
      var jpegData = UTIF.decode._decodeOldJPEGInit(img, data, off, len);
      if (jpegData.jpegOffset != null) {
        dlen = off + len - jpegData.jpegOffset;
        buff = new Uint8Array(dlen);
        for (i = 0; i < dlen; i++) {
          buff[i] = data[jpegData.jpegOffset + i];
        }
      } else {
        tlen = jpegData.tables.length;
        buff = new Uint8Array(tlen + jpegData.sosMarker.length + len + 2);
        buff.set(jpegData.tables);
        buffoff = tlen;
        buff[jpegData.sofPosition + 5] = img.height >>> 8 & 255;
        buff[jpegData.sofPosition + 6] = img.height & 255;
        buff[jpegData.sofPosition + 7] = img.width >>> 8 & 255;
        buff[jpegData.sofPosition + 8] = img.width & 255;
        if (data[off] != 255 || data[off + 1] != SOS) {
          buff.set(jpegData.sosMarker, buffoff);
          buffoff += sosMarker.length;
        }
        for (i = 0; i < len; i++) {
          buff[buffoff++] = data[off + i];
        }
        buff[buffoff++] = 255;
        buff[buffoff++] = EOI;
      }
      var parser = new UTIF.JpegDecoder();
      parser.parse(buff);
      var decoded = parser.getData({
        "width": parser.width,
        "height": parser.height,
        "forceRGB": true,
        "isSourcePDF": false
      });
      for (var i = 0; i < decoded.length; i++) {
        tgt[toff + i] = decoded[i];
      }

      // PhotometricInterpretation is 6 (YCbCr) for JPEG, but after decoding we populate data in
      // RGB format, so updating the tag value
      if (img["t262"] && img["t262"][0] == 6) img["t262"][0] = 2;
    };
    UTIF.decode._decodePackBits = function (data, off, len, tgt, toff) {
      var sa = new Int8Array(data.buffer),
        ta = new Int8Array(tgt.buffer),
        lim = off + len;
      while (off < lim) {
        var n = sa[off];
        off++;
        if (n >= 0 && n < 128) for (var i = 0; i < n + 1; i++) {
          ta[toff] = sa[off];
          toff++;
          off++;
        }
        if (n >= -127 && n < 0) {
          for (var i = 0; i < -n + 1; i++) {
            ta[toff] = sa[off];
            toff++;
          }
          off++;
        }
      }
    };
    UTIF.decode._decodeThunder = function (data, off, len, tgt, toff) {
      var d2 = [0, 1, 0, -1],
        d3 = [0, 1, 2, 3, 0, -3, -2, -1];
      var lim = off + len,
        qoff = toff * 2,
        px = 0;
      while (off < lim) {
        var b = data[off],
          msk = b >>> 6,
          n = b & 63;
        off++;
        if (msk == 3) {
          px = n & 15;
          tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
          qoff++;
        }
        if (msk == 0) for (var i = 0; i < n; i++) {
          tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
          qoff++;
        }
        if (msk == 2) for (var i = 0; i < 2; i++) {
          var d = n >>> 3 * (1 - i) & 7;
          if (d != 4) {
            px += d3[d];
            tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
            qoff++;
          }
        }
        if (msk == 1) for (var i = 0; i < 3; i++) {
          var d = n >>> 2 * (2 - i) & 3;
          if (d != 2) {
            px += d2[d];
            tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
            qoff++;
          }
        }
      }
    };
    UTIF.decode._dmap = {
      "1": 0,
      "011": 1,
      "000011": 2,
      "0000011": 3,
      "010": -1,
      "000010": -2,
      "0000010": -3
    };
    UTIF.decode._lens = function () {
      var addKeys = function addKeys(lens, arr, i0, inc) {
        for (var i = 0; i < arr.length; i++) {
          lens[arr[i]] = i0 + i * inc;
        }
      };
      var termW = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101," // 15
      + "101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010," // 31
      + "00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010," // 47
      + "00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100";
      var termB = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000," // 15
      + "0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001," // 31
      + "000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111," // 47
      + "000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111";
      var makeW = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110," + "011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011";
      var makeB = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100," + "0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010," + "0000001011011,0000001100100,0000001100101";
      var makeA = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
      termW = termW.split(",");
      termB = termB.split(",");
      makeW = makeW.split(",");
      makeB = makeB.split(",");
      makeA = makeA.split(",");
      var lensW = {},
        lensB = {};
      addKeys(lensW, termW, 0, 1);
      addKeys(lensW, makeW, 64, 64);
      addKeys(lensW, makeA, 1792, 64);
      addKeys(lensB, termB, 0, 1);
      addKeys(lensB, makeB, 64, 64);
      addKeys(lensB, makeA, 1792, 64);
      return [lensW, lensB];
    }();
    UTIF.decode._decodeG4 = function (data, off, slen, tgt, toff, w, fo) {
      var U = UTIF.decode,
        boff = off << 3,
        len = 0,
        wrd = ""; // previous starts with 1
      var line = [],
        pline = [];
      for (var i = 0; i < w; i++) {
        pline.push(0);
      }
      pline = U._makeDiff(pline);
      var a0 = 0,
        a1 = 0,
        b1 = 0,
        b2 = 0,
        clr = 0;
      var y = 0,
        mode = "",
        toRead = 0;
      var bipl = Math.ceil(w / 8) * 8;
      while (boff >>> 3 < off + slen) {
        b1 = U._findDiff(pline, a0 + (a0 == 0 ? 0 : 1), 1 - clr), b2 = U._findDiff(pline, b1, clr); // could be precomputed
        var bit = 0;
        if (fo == 1) bit = data[boff >>> 3] >>> 7 - (boff & 7) & 1;
        if (fo == 2) bit = data[boff >>> 3] >>> (boff & 7) & 1;
        boff++;
        wrd += bit;
        if (mode == "H") {
          if (U._lens[clr][wrd] != null) {
            var dl = U._lens[clr][wrd];
            wrd = "";
            len += dl;
            if (dl < 64) {
              U._addNtimes(line, len, clr);
              a0 += len;
              clr = 1 - clr;
              len = 0;
              toRead--;
              if (toRead == 0) mode = "";
            }
          }
        } else {
          if (wrd == "0001") {
            wrd = "";
            U._addNtimes(line, b2 - a0, clr);
            a0 = b2;
          }
          if (wrd == "001") {
            wrd = "";
            mode = "H";
            toRead = 2;
          }
          if (U._dmap[wrd] != null) {
            a1 = b1 + U._dmap[wrd];
            U._addNtimes(line, a1 - a0, clr);
            a0 = a1;
            wrd = "";
            clr = 1 - clr;
          }
        }
        if (line.length == w && mode == "") {
          U._writeBits(line, tgt, toff * 8 + y * bipl);
          clr = 0;
          y++;
          a0 = 0;
          pline = U._makeDiff(line);
          line = [];
        }
        //if(wrd.length>150) {  log(wrd);  break;  throw "e";  }
      }
    };

    UTIF.decode._findDiff = function (line, x, clr) {
      for (var i = 0; i < line.length; i += 2) {
        if (line[i] >= x && line[i + 1] == clr) return line[i];
      }
    };
    UTIF.decode._makeDiff = function (line) {
      var out = [];
      if (line[0] == 1) out.push(0, 1);
      for (var i = 1; i < line.length; i++) {
        if (line[i - 1] != line[i]) out.push(i, line[i]);
      }
      out.push(line.length, 0, line.length, 1);
      return out;
    };
    UTIF.decode._decodeG3 = function (data, off, slen, tgt, toff, w, fo, twoDim) {
      var U = UTIF.decode,
        boff = off << 3,
        len = 0,
        wrd = "";
      var line = [],
        pline = [];
      for (var i = 0; i < w; i++) {
        line.push(0);
      }
      var a0 = 0,
        a1 = 0,
        b1 = 0,
        b2 = 0,
        clr = 0;
      var y = -1,
        mode = "",
        toRead = 0,
        is1D = true;
      var bipl = Math.ceil(w / 8) * 8;
      while (boff >>> 3 < off + slen) {
        b1 = U._findDiff(pline, a0 + (a0 == 0 ? 0 : 1), 1 - clr), b2 = U._findDiff(pline, b1, clr); // could be precomputed
        var bit = 0;
        if (fo == 1) bit = data[boff >>> 3] >>> 7 - (boff & 7) & 1;
        if (fo == 2) bit = data[boff >>> 3] >>> (boff & 7) & 1;
        boff++;
        wrd += bit;
        if (is1D) {
          if (U._lens[clr][wrd] != null) {
            var dl = U._lens[clr][wrd];
            wrd = "";
            len += dl;
            if (dl < 64) {
              U._addNtimes(line, len, clr);
              clr = 1 - clr;
              len = 0;
            }
          }
        } else {
          if (mode == "H") {
            if (U._lens[clr][wrd] != null) {
              var dl = U._lens[clr][wrd];
              wrd = "";
              len += dl;
              if (dl < 64) {
                U._addNtimes(line, len, clr);
                a0 += len;
                clr = 1 - clr;
                len = 0;
                toRead--;
                if (toRead == 0) mode = "";
              }
            }
          } else {
            if (wrd == "0001") {
              wrd = "";
              U._addNtimes(line, b2 - a0, clr);
              a0 = b2;
            }
            if (wrd == "001") {
              wrd = "";
              mode = "H";
              toRead = 2;
            }
            if (U._dmap[wrd] != null) {
              a1 = b1 + U._dmap[wrd];
              U._addNtimes(line, a1 - a0, clr);
              a0 = a1;
              wrd = "";
              clr = 1 - clr;
            }
          }
        }
        if (wrd.endsWith("000000000001"))
          // needed for some files
          {
            if (y >= 0) U._writeBits(line, tgt, toff * 8 + y * bipl);
            if (twoDim) {
              if (fo == 1) is1D = (data[boff >>> 3] >>> 7 - (boff & 7) & 1) == 1;
              if (fo == 2) is1D = (data[boff >>> 3] >>> (boff & 7) & 1) == 1;
              boff++;
            }
            //log("EOL",y, "next 1D:", is1D);
            wrd = "";
            clr = 0;
            y++;
            a0 = 0;
            pline = U._makeDiff(line);
            line = [];
          }
      }
      if (line.length == w) U._writeBits(line, tgt, toff * 8 + y * bipl);
    };
    UTIF.decode._addNtimes = function (arr, n, val) {
      for (var i = 0; i < n; i++) {
        arr.push(val);
      }
    };
    UTIF.decode._writeBits = function (bits, tgt, boff) {
      for (var i = 0; i < bits.length; i++) {
        tgt[boff + i >>> 3] |= bits[i] << 7 - (boff + i & 7);
      }
    };
    UTIF.decode._decodeLZW = UTIF.decode._decodeLZW = function () {
      var e,
        U,
        Z,
        u,
        K = 0,
        V = 0,
        g = 0,
        N = 0,
        O = function O() {
          var S = e >>> 3,
            A = U[S] << 16 | U[S + 1] << 8 | U[S + 2],
            j = A >>> 24 - (e & 7) - V & (1 << V) - 1;
          e += V;
          return j;
        },
        h = new Uint32Array(4096 * 4),
        w = 0,
        m = function m(S) {
          if (S == w) return;
          w = S;
          g = 1 << S;
          N = g + 1;
          for (var A = 0; A < N + 1; A++) {
            h[4 * A] = h[4 * A + 3] = A;
            h[4 * A + 1] = 65535;
            h[4 * A + 2] = 1;
          }
        },
        i = function i(S) {
          V = S + 1;
          K = N + 1;
        },
        D = function D(S) {
          var A = S << 2,
            j = h[A + 2],
            a = u + j - 1;
          while (A != 65535) {
            Z[a--] = h[A];
            A = h[A + 1];
          }
          u += j;
        },
        L = function L(S, A) {
          var j = K << 2,
            a = S << 2;
          h[j] = h[(A << 2) + 3];
          h[j + 1] = a;
          h[j + 2] = h[a + 2] + 1;
          h[j + 3] = h[a + 3];
          K++;
          if (K + 1 == 1 << V && V != 12) V++;
        },
        T = function T(S, A, j, a, n, q) {
          e = A << 3;
          U = S;
          Z = a;
          u = n;
          var B = A + j << 3,
            _ = 0,
            t = 0;
          m(q);
          i(q);
          while (e < B && (_ = O()) != N) {
            if (_ == g) {
              i(q);
              _ = O();
              if (_ == N) break;
              D(_);
            } else {
              if (_ < K) {
                D(_);
                L(t, _);
              } else {
                L(t, t);
                D(K - 1);
              }
            }
            t = _;
          }
          return u;
        };
      return T;
    }();
    UTIF.tags = {};
    //UTIF.ttypes = {  256:3,257:3,258:3,   259:3, 262:3,  273:4,  274:3, 277:3,278:4,279:4, 282:5, 283:5, 284:3, 286:5,287:5, 296:3, 305:2, 306:2, 338:3, 513:4, 514:4, 34665:4  };
    // start at tag 250
    UTIF._types = function () {
      var main = new Array(250);
      main.fill(0);
      main = main.concat([0, 0, 0, 0, 4, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 4, 3, 0, 0, 3, 4, 4, 3, 3, 5, 5, 3, 2, 5, 5, 0, 0, 0, 0, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 5, 5, 3, 0, 3, 3, 4, 4, 4, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      var rest = {
        33432: 2,
        33434: 5,
        33437: 5,
        34665: 4,
        34850: 3,
        34853: 4,
        34855: 3,
        34864: 3,
        34866: 4,
        36864: 7,
        36867: 2,
        36868: 2,
        37121: 7,
        37377: 10,
        37378: 5,
        37380: 10,
        37381: 5,
        37383: 3,
        37384: 3,
        37385: 3,
        37386: 5,
        37510: 7,
        37520: 2,
        37521: 2,
        37522: 2,
        40960: 7,
        40961: 3,
        40962: 4,
        40963: 4,
        40965: 4,
        41486: 5,
        41487: 5,
        41488: 3,
        41985: 3,
        41986: 3,
        41987: 3,
        41988: 5,
        41989: 3,
        41990: 3,
        41993: 3,
        41994: 3,
        41995: 7,
        41996: 3,
        42032: 2,
        42033: 2,
        42034: 5,
        42036: 2,
        42037: 2,
        59932: 7
      };
      return {
        basic: {
          main: main,
          rest: rest
        },
        gps: {
          main: [1, 2, 5, 2, 5, 1, 5, 5, 0, 9],
          rest: {
            18: 2,
            29: 2
          }
        }
      };
    }();
    UTIF._readIFD = function (bin, data, offset, ifds, depth, prm) {
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      var ifd = {};
      if (prm.debug) log("   ".repeat(depth), ifds.length - 1, ">>>----------------");
      for (var i = 0; i < cnt; i++) {
        var tag = bin.readUshort(data, offset);
        offset += 2;
        var type = bin.readUshort(data, offset);
        offset += 2;
        var num = bin.readUint(data, offset);
        offset += 4;
        var voff = bin.readUint(data, offset);
        offset += 4;
        var arr = [];
        //ifd["t"+tag+"-"+UTIF.tags[tag]] = arr;
        if (type == 1 || type == 7) {
          arr = new Uint8Array(data.buffer, num < 5 ? offset - 4 : voff, num);
        }
        if (type == 2) {
          var o0 = num < 5 ? offset - 4 : voff,
            c = data[o0],
            len = Math.max(0, Math.min(num - 1, data.length - o0));
          if (c < 128 || len == 0) arr.push(bin.readASCII(data, o0, len));else arr = new Uint8Array(data.buffer, o0, len);
        }
        if (type == 3) {
          for (var j = 0; j < num; j++) {
            arr.push(bin.readUshort(data, (num < 3 ? offset - 4 : voff) + 2 * j));
          }
        }
        if (type == 4 || type == 13) {
          for (var j = 0; j < num; j++) {
            arr.push(bin.readUint(data, (num < 2 ? offset - 4 : voff) + 4 * j));
          }
        }
        if (type == 5 || type == 10) {
          var ri = type == 5 ? bin.readUint : bin.readInt;
          for (var j = 0; j < num; j++) {
            arr.push([ri(data, voff + j * 8), ri(data, voff + j * 8 + 4)]);
          }
        }
        if (type == 8) {
          for (var j = 0; j < num; j++) {
            arr.push(bin.readShort(data, (num < 3 ? offset - 4 : voff) + 2 * j));
          }
        }
        if (type == 9) {
          for (var j = 0; j < num; j++) {
            arr.push(bin.readInt(data, (num < 2 ? offset - 4 : voff) + 4 * j));
          }
        }
        if (type == 11) {
          for (var j = 0; j < num; j++) {
            arr.push(bin.readFloat(data, voff + j * 4));
          }
        }
        if (type == 12) {
          for (var j = 0; j < num; j++) {
            arr.push(bin.readDouble(data, voff + j * 8));
          }
        }
        if (num != 0 && arr.length == 0) {
          log(tag, "unknown TIFF tag type: ", type, "num:", num);
          if (i == 0) return;
          continue;
        }
        if (prm.debug) log("   ".repeat(depth), tag, type, UTIF.tags[tag], arr);
        ifd["t" + tag] = arr;
        if (tag == 330 && ifd["t272"] && ifd["t272"][0] == "DSLR-A100") ; else if (tag == 330 || tag == 34665 || tag == 34853 || tag == 50740 && bin.readUshort(data, bin.readUint(arr, 0)) < 300 || tag == 61440) {
          var oarr = tag == 50740 ? [bin.readUint(arr, 0)] : arr;
          var subfd = [];
          for (var j = 0; j < oarr.length; j++) {
            UTIF._readIFD(bin, data, oarr[j], subfd, depth + 1, prm);
          }
          if (tag == 330) ifd.subIFD = subfd;
          if (tag == 34665) ifd.exifIFD = subfd[0];
          if (tag == 34853) ifd.gpsiIFD = subfd[0]; //console.log("gps", subfd[0]);  }
          if (tag == 50740) ifd.dngPrvt = subfd[0];
          if (tag == 61440) ifd.fujiIFD = subfd[0];
        }
        if (tag == 37500 && prm.parseMN) {
          var mn = arr;
          //console.log(bin.readASCII(mn,0,mn.length), mn);
          if (bin.readASCII(mn, 0, 5) == "Nikon") ifd.makerNote = UTIF["decode"](mn.slice(10).buffer)[0];else if (bin.readUshort(data, voff) < 300 && bin.readUshort(data, voff + 4) <= 12) {
            var subsub = [];
            UTIF._readIFD(bin, data, voff, subsub, depth + 1, prm);
            ifd.makerNote = subsub[0];
          }
        }
      }
      ifds.push(ifd);
      if (prm.debug) log("   ".repeat(depth), "<<<---------------");
      return offset;
    };
    UTIF._writeIFD = function (bin, types, data, offset, ifd) {
      var keys = Object.keys(ifd),
        knum = keys.length;
      if (ifd["exifIFD"]) knum--;
      if (ifd["gpsiIFD"]) knum--;
      bin.writeUshort(data, offset, knum);
      offset += 2;
      var eoff = offset + knum * 12 + 4;
      for (var ki = 0; ki < keys.length; ki++) {
        var key = keys[ki];
        if (key == "t34665" || key == "t34853") continue;
        if (key == "exifIFD") key = "t34665";
        if (key == "gpsiIFD") key = "t34853";
        var tag = parseInt(key.slice(1)),
          type = types.main[tag];
        if (type == null) type = types.rest[tag];
        if (type == null || type == 0) throw new Error("unknown type of tag: " + tag);
        //console.log(offset+":", tag, type, eoff);
        var val = ifd[key];
        if (tag == 34665) {
          var outp = UTIF._writeIFD(bin, types, data, eoff, ifd["exifIFD"]);
          val = [eoff];
          eoff = outp[1];
        }
        if (tag == 34853) {
          var outp = UTIF._writeIFD(bin, UTIF._types.gps, data, eoff, ifd["gpsiIFD"]);
          val = [eoff];
          eoff = outp[1];
        }
        if (type == 2) val = val[0] + "\0";
        var num = val.length;
        bin.writeUshort(data, offset, tag);
        offset += 2;
        bin.writeUshort(data, offset, type);
        offset += 2;
        bin.writeUint(data, offset, num);
        offset += 4;
        var dlen = [-1, 1, 1, 2, 4, 8, 0, 1, 0, 4, 8, 0, 8][type] * num; //if(dlen<1) throw "e";
        var toff = offset;
        if (dlen > 4) {
          bin.writeUint(data, offset, eoff);
          toff = eoff;
        }
        if (type == 1 || type == 7) {
          for (var i = 0; i < num; i++) {
            data[toff + i] = val[i];
          }
        } else if (type == 2) {
          bin.writeASCII(data, toff, val);
        } else if (type == 3) {
          for (var i = 0; i < num; i++) {
            bin.writeUshort(data, toff + 2 * i, val[i]);
          }
        } else if (type == 4) {
          for (var i = 0; i < num; i++) {
            bin.writeUint(data, toff + 4 * i, val[i]);
          }
        } else if (type == 5 || type == 10) {
          var wr = type == 5 ? bin.writeUint : bin.writeInt;
          for (var i = 0; i < num; i++) {
            var v = val[i],
              nu = v[0],
              de = v[1];
            if (nu == null) throw "e";
            wr(data, toff + 8 * i, nu);
            wr(data, toff + 8 * i + 4, de);
          }
        } else if (type == 9) {
          for (var i = 0; i < num; i++) {
            bin.writeInt(data, toff + 4 * i, val[i]);
          }
        } else if (type == 12) {
          for (var i = 0; i < num; i++) {
            bin.writeDouble(data, toff + 8 * i, val[i]);
          }
        } else throw type;
        if (dlen > 4) {
          dlen += dlen & 1;
          eoff += dlen;
        }
        offset += 4;
      }
      return [offset, eoff];
    };
    UTIF.toRGBA8 = function (out, scl) {
      var w = out.width,
        h = out.height,
        area = w * h,
        qarea = area * 4,
        data = out.data;
      var img = new Uint8Array(area * 4);
      //console.log(out);
      // 0: WhiteIsZero, 1: BlackIsZero, 2: RGB, 3: Palette color, 4: Transparency mask, 5: CMYK
      var intp = out["t262"] ? out["t262"][0] : 2,
        bps = out["t258"] ? Math.min(32, out["t258"][0]) : 1;
      if (out["t262"] == null && bps == 1) intp = 0;
      //log("interpretation: ", intp, "bps", bps, out);
      if (intp == 0) {
        var bpl = Math.ceil(bps * w / 8);
        for (var y = 0; y < h; y++) {
          var off = y * bpl,
            io = y * w;
          if (bps == 1) for (var i = 0; i < w; i++) {
            var qi = io + i << 2,
              px = data[off + (i >> 3)] >> 7 - (i & 7) & 1;
            img[qi] = img[qi + 1] = img[qi + 2] = (1 - px) * 255;
            img[qi + 3] = 255;
          }
          if (bps == 4) for (var i = 0; i < w; i++) {
            var qi = io + i << 2,
              px = data[off + (i >> 1)] >> 4 - 4 * (i & 1) & 15;
            img[qi] = img[qi + 1] = img[qi + 2] = (15 - px) * 17;
            img[qi + 3] = 255;
          }
          if (bps == 8) for (var i = 0; i < w; i++) {
            var qi = io + i << 2,
              px = data[off + i];
            img[qi] = img[qi + 1] = img[qi + 2] = 255 - px;
            img[qi + 3] = 255;
          }
        }
      } else if (intp == 1) {
        var smpls = out["t258"] ? out["t258"].length : 1;
        var bpl = Math.ceil(smpls * bps * w / 8);
        if (scl == null) scl = 1 / 256;
        for (var y = 0; y < h; y++) {
          var off = y * bpl,
            io = y * w;
          if (bps == 1) for (var i = 0; i < w; i++) {
            var qi = io + i << 2,
              px = data[off + (i >> 3)] >> 7 - (i & 7) & 1;
            img[qi] = img[qi + 1] = img[qi + 2] = px * 255;
            img[qi + 3] = 255;
          }
          if (bps == 2) for (var i = 0; i < w; i++) {
            var qi = io + i << 2,
              px = data[off + (i >> 2)] >> 6 - 2 * (i & 3) & 3;
            img[qi] = img[qi + 1] = img[qi + 2] = px * 85;
            img[qi + 3] = 255;
          }
          if (bps == 8) for (var i = 0; i < w; i++) {
            var qi = io + i << 2,
              px = data[off + i * smpls];
            img[qi] = img[qi + 1] = img[qi + 2] = px;
            img[qi + 3] = 255;
          }
          if (bps == 16) for (var i = 0; i < w; i++) {
            var qi = io + i << 2,
              o = off + 2 * i,
              px = data[o + 1] << 8 | data[o];
            img[qi] = img[qi + 1] = img[qi + 2] = Math.min(255, ~~(px * scl));
            img[qi + 3] = 255;
          } // ladoga.tif
        }
      } else if (intp == 2) {
        var smpls = out["t258"] ? out["t258"].length : 3;
        if (bps == 8) {
          if (smpls == 4) for (var i = 0; i < qarea; i++) {
            img[i] = data[i];
          }
          if (smpls == 3) for (var i = 0; i < area; i++) {
            var qi = i << 2,
              ti = i * 3;
            img[qi] = data[ti];
            img[qi + 1] = data[ti + 1];
            img[qi + 2] = data[ti + 2];
            img[qi + 3] = 255;
          }
          // e.g. corel_photopaint_rgba.tif from https://github.com/jkriege2/TinyTIFF/blob/f6739ffd351b782e6cf9a81e6a61e8faa615e629/tests/tinytiffreader_test/corel_photopaint_rgba.tif
          if (smpls == 5) for (var i = 0; i < area; i++) {
            var qi = i << 2,
              ti = i * 5;
            img[qi] = data[ti];
            img[qi + 1] = data[ti + 1];
            img[qi + 2] = data[ti + 2];
            img[qi + 3] = data[ti + 3];
          }
        } else {
          // 3x 16-bit channel
          if (smpls == 4) for (var i = 0; i < area; i++) {
            var qi = i << 2,
              ti = i * 8 + 1;
            img[qi] = data[ti];
            img[qi + 1] = data[ti + 2];
            img[qi + 2] = data[ti + 4];
            img[qi + 3] = data[ti + 6];
          }
          if (smpls == 3) for (var i = 0; i < area; i++) {
            var qi = i << 2,
              ti = i * 6 + 1;
            img[qi] = data[ti];
            img[qi + 1] = data[ti + 2];
            img[qi + 2] = data[ti + 4];
            img[qi + 3] = 255;
          }
        }
      } else if (intp == 3) {
        var map = out["t320"];
        var smpls = out["t258"] ? out["t258"].length : 1;
        var bpl = Math.ceil(smpls * bps * w / 8);
        var cn = 1 << bps;
        for (var y = 0; y < h; y++) {
          for (var x = 0; x < w; x++) {
            var i = y * w + x;
            var qi = i << 2,
              mi = 0;
            var dof = y * bpl;
            if (bps == 1) mi = data[dof + (x >>> 3)] >>> 7 - (x & 7) & 1;else if (bps == 2) mi = data[dof + (x >>> 2)] >>> 6 - 2 * (x & 3) & 3;else if (bps == 4) mi = data[dof + (x >>> 1)] >>> 4 - 4 * (x & 1) & 15;else if (bps == 8) mi = data[dof + x * smpls];else throw bps;
            img[qi] = map[mi] >> 8;
            img[qi + 1] = map[cn + mi] >> 8;
            img[qi + 2] = map[cn + cn + mi] >> 8;
            img[qi + 3] = 255;
          }
        }
      } else if (intp == 5) {
        var smpls = out["t258"] ? out["t258"].length : 4;
        var gotAlpha = smpls > 4 ? 1 : 0;
        for (var i = 0; i < area; i++) {
          var qi = i << 2,
            si = i * smpls;
          var C = 255 - data[si],
            M = 255 - data[si + 1],
            Y = 255 - data[si + 2],
            K = (255 - data[si + 3]) * (1 / 255);
          img[qi] = ~~(C * K + 0.5);
          img[qi + 1] = ~~(M * K + 0.5);
          img[qi + 2] = ~~(Y * K + 0.5);
          img[qi + 3] = 255 * (1 - gotAlpha) + data[si + 4] * gotAlpha;
        }
      } else if (intp == 6 && out["t278"]) {
        // only for DSC_1538.TIF
        var rps = out["t278"][0];
        for (var y = 0; y < h; y += rps) {
          var i = y * w,
            len = rps * w;
          for (var j = 0; j < len; j++) {
            var qi = 4 * (i + j),
              si = 3 * i + 4 * (j >>> 1);
            var Y = data[si + (j & 1)],
              Cb = data[si + 2] - 128,
              Cr = data[si + 3] - 128;
            var r = Y + ((Cr >> 2) + (Cr >> 3) + (Cr >> 5));
            var g = Y - ((Cb >> 2) + (Cb >> 4) + (Cb >> 5)) - ((Cr >> 1) + (Cr >> 3) + (Cr >> 4) + (Cr >> 5));
            var b = Y + (Cb + (Cb >> 1) + (Cb >> 2) + (Cb >> 6));
            img[qi] = Math.max(0, Math.min(255, r));
            img[qi + 1] = Math.max(0, Math.min(255, g));
            img[qi + 2] = Math.max(0, Math.min(255, b));
            img[qi + 3] = 255;
          }
        }
      } else log("Unknown Photometric interpretation: " + intp);
      return img;
    };
    UTIF.replaceIMG = function (imgs) {
      if (imgs == null) imgs = document.getElementsByTagName("img");
      var sufs = ["tif", "tiff", "dng", "cr2", "nef"];
      for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i],
          src = img.getAttribute("src");
        if (src == null) continue;
        var suff = src.split(".").pop().toLowerCase();
        if (sufs.indexOf(suff) == -1) continue;
        var xhr = new XMLHttpRequest();
        UTIF._xhrs.push(xhr);
        UTIF._imgs.push(img);
        xhr.open("GET", src);
        xhr.responseType = "arraybuffer";
        xhr.onload = UTIF._imgLoaded;
        xhr.send();
      }
    };
    UTIF._xhrs = [];
    UTIF._imgs = [];
    UTIF._imgLoaded = function (e) {
      var ind = UTIF._xhrs.indexOf(e.target),
        img = UTIF._imgs[ind];
      UTIF._xhrs.splice(ind, 1);
      UTIF._imgs.splice(ind, 1);
      img.setAttribute("src", UTIF.bufferToURI(e.target.response));
    };
    UTIF.bufferToURI = function (buff) {
      var ifds = UTIF.decode(buff); //console.log(ifds);
      var vsns = ifds,
        ma = 0,
        page = vsns[0];
      if (ifds[0].subIFD) vsns = vsns.concat(ifds[0].subIFD);
      for (var i = 0; i < vsns.length; i++) {
        var img = vsns[i];
        if (img["t258"] == null || img["t258"].length < 3) continue;
        var ar = img["t256"] * img["t257"];
        if (ar > ma) {
          ma = ar;
          page = img;
        }
      }
      UTIF.decodeImage(buff, page, ifds);
      var rgba = UTIF.toRGBA8(page),
        w = page.width,
        h = page.height;
      var cnv = document.createElement("canvas");
      cnv.width = w;
      cnv.height = h;
      var ctx = cnv.getContext("2d");
      var imgd = new ImageData(new Uint8ClampedArray(rgba.buffer), w, h);
      ctx.putImageData(imgd, 0, 0);
      return cnv.toDataURL();
    };
    UTIF._binBE = {
      nextZero: function nextZero(data, o) {
        while (data[o] != 0) {
          o++;
        }
        return o;
      },
      readUshort: function readUshort(buff, p) {
        return buff[p] << 8 | buff[p + 1];
      },
      readShort: function readShort(buff, p) {
        var a = UTIF._binBE.ui8;
        a[0] = buff[p + 1];
        a[1] = buff[p + 0];
        return UTIF._binBE.i16[0];
      },
      readInt: function readInt(buff, p) {
        var a = UTIF._binBE.ui8;
        a[0] = buff[p + 3];
        a[1] = buff[p + 2];
        a[2] = buff[p + 1];
        a[3] = buff[p + 0];
        return UTIF._binBE.i32[0];
      },
      readUint: function readUint(buff, p) {
        var a = UTIF._binBE.ui8;
        a[0] = buff[p + 3];
        a[1] = buff[p + 2];
        a[2] = buff[p + 1];
        a[3] = buff[p + 0];
        return UTIF._binBE.ui32[0];
      },
      readASCII: function readASCII(buff, p, l) {
        var s = "";
        for (var i = 0; i < l; i++) {
          s += String.fromCharCode(buff[p + i]);
        }
        return s;
      },
      readFloat: function readFloat(buff, p) {
        var a = UTIF._binBE.ui8;
        for (var i = 0; i < 4; i++) {
          a[i] = buff[p + 3 - i];
        }
        return UTIF._binBE.fl32[0];
      },
      readDouble: function readDouble(buff, p) {
        var a = UTIF._binBE.ui8;
        for (var i = 0; i < 8; i++) {
          a[i] = buff[p + 7 - i];
        }
        return UTIF._binBE.fl64[0];
      },
      writeUshort: function writeUshort(buff, p, n) {
        buff[p] = n >> 8 & 255;
        buff[p + 1] = n & 255;
      },
      writeInt: function writeInt(buff, p, n) {
        var a = UTIF._binBE.ui8;
        UTIF._binBE.i32[0] = n;
        buff[p + 3] = a[0];
        buff[p + 2] = a[1];
        buff[p + 1] = a[2];
        buff[p + 0] = a[3];
      },
      writeUint: function writeUint(buff, p, n) {
        buff[p] = n >> 24 & 255;
        buff[p + 1] = n >> 16 & 255;
        buff[p + 2] = n >> 8 & 255;
        buff[p + 3] = n >> 0 & 255;
      },
      writeASCII: function writeASCII(buff, p, s) {
        for (var i = 0; i < s.length; i++) {
          buff[p + i] = s.charCodeAt(i);
        }
      },
      writeDouble: function writeDouble(buff, p, n) {
        UTIF._binBE.fl64[0] = n;
        for (var i = 0; i < 8; i++) {
          buff[p + i] = UTIF._binBE.ui8[7 - i];
        }
      }
    };
    UTIF._binBE.ui8 = new Uint8Array(8);
    UTIF._binBE.i16 = new Int16Array(UTIF._binBE.ui8.buffer);
    UTIF._binBE.i32 = new Int32Array(UTIF._binBE.ui8.buffer);
    UTIF._binBE.ui32 = new Uint32Array(UTIF._binBE.ui8.buffer);
    UTIF._binBE.fl32 = new Float32Array(UTIF._binBE.ui8.buffer);
    UTIF._binBE.fl64 = new Float64Array(UTIF._binBE.ui8.buffer);
    UTIF._binLE = {
      nextZero: UTIF._binBE.nextZero,
      readUshort: function readUshort(buff, p) {
        return buff[p + 1] << 8 | buff[p];
      },
      readShort: function readShort(buff, p) {
        var a = UTIF._binBE.ui8;
        a[0] = buff[p + 0];
        a[1] = buff[p + 1];
        return UTIF._binBE.i16[0];
      },
      readInt: function readInt(buff, p) {
        var a = UTIF._binBE.ui8;
        a[0] = buff[p + 0];
        a[1] = buff[p + 1];
        a[2] = buff[p + 2];
        a[3] = buff[p + 3];
        return UTIF._binBE.i32[0];
      },
      readUint: function readUint(buff, p) {
        var a = UTIF._binBE.ui8;
        a[0] = buff[p + 0];
        a[1] = buff[p + 1];
        a[2] = buff[p + 2];
        a[3] = buff[p + 3];
        return UTIF._binBE.ui32[0];
      },
      readASCII: UTIF._binBE.readASCII,
      readFloat: function readFloat(buff, p) {
        var a = UTIF._binBE.ui8;
        for (var i = 0; i < 4; i++) {
          a[i] = buff[p + i];
        }
        return UTIF._binBE.fl32[0];
      },
      readDouble: function readDouble(buff, p) {
        var a = UTIF._binBE.ui8;
        for (var i = 0; i < 8; i++) {
          a[i] = buff[p + i];
        }
        return UTIF._binBE.fl64[0];
      },
      writeUshort: function writeUshort(buff, p, n) {
        buff[p] = n & 255;
        buff[p + 1] = n >> 8 & 255;
      },
      writeInt: function writeInt(buff, p, n) {
        var a = UTIF._binBE.ui8;
        UTIF._binBE.i32[0] = n;
        buff[p + 0] = a[0];
        buff[p + 1] = a[1];
        buff[p + 2] = a[2];
        buff[p + 3] = a[3];
      },
      writeUint: function writeUint(buff, p, n) {
        buff[p] = n >>> 0 & 255;
        buff[p + 1] = n >>> 8 & 255;
        buff[p + 2] = n >>> 16 & 255;
        buff[p + 3] = n >>> 24 & 255;
      },
      writeASCII: UTIF._binBE.writeASCII
    };
    UTIF._copyTile = function (tb, tw, th, b, w, h, xoff, yoff) {
      //log("copyTile", tw, th,  w, h, xoff, yoff);
      var xlim = Math.min(tw, w - xoff);
      var ylim = Math.min(th, h - yoff);
      for (var y = 0; y < ylim; y++) {
        var tof = (yoff + y) * w + xoff;
        var sof = y * tw;
        for (var x = 0; x < xlim; x++) {
          b[tof + x] = tb[sof + x];
        }
      }
    };
    UTIF.LosslessJpegDecode = function () {
      var y, D, j, H, F, i, l, A, C, e;
      function q() {
        return y[D++];
      }
      function a() {
        return y[D++] << 8 | y[D++];
      }
      function b() {
        var p = q(),
          r = [0, 0, 0, 255],
          c = [],
          E = 8;
        for (var z = 0; z < 16; z++) {
          c[z] = q();
        }
        for (var z = 0; z < 16; z++) {
          for (var G = 0; G < c[z]; G++) {
            var I = m(r, 0, z + 1, 1);
            r[I + 3] = q();
          }
        }
        var t = new Uint8Array(1 << E);
        C[p] = [new Uint8Array(r), t];
        for (var z = 0; z < 1 << E; z++) {
          var u = E,
            s = z,
            k = 0,
            J = 0;
          while (r[k + 3] == 255 && u != 0) {
            J = s >> --u & 1;
            k = r[k + J];
          }
          t[z] = k;
        }
      }
      function m(p, r, c, z) {
        if (p[r + 3] != 255) return 0;
        if (c == 0) return r;
        for (var G = 0; G < 2; G++) {
          if (p[r + G] == 0) {
            p[r + G] = p.length;
            p.push(0, 0, z, 255);
          }
          var I = m(p, p[r + G], c - 1, z + 1);
          if (I != 0) return I;
        }
        return 0;
      }
      function B(p) {
        var r = p.e,
          c = p.c;
        while (r < 25 && p.a < p.d) {
          var z = p.data[p.a++];
          if (!p.b) p.a += z + 1 >>> 8;
          c = c << 8 | z;
          r += 8;
        }
        p.e = r;
        p.c = c;
      }
      function g(p, r) {
        if (r.e < p) B(r);
        return r.c >> (r.e -= p) & 65535 >> 16 - p;
      }
      function w(p, r) {
        var c = p[0],
          z = 0,
          G = 255,
          I = 0;
        if (r.e < 16) B(r);
        var E = r.c >> r.e - 8 & 255;
        z = p[1][E];
        G = c[z + 3];
        r.e -= c[z + 2];
        while (G == 255) {
          I = r.c >> --r.e & 1;
          z = c[z + I];
          G = c[z + 3];
        }
        return G;
      }
      function o(p, r) {
        if (p < 32768 >> 16 - r) p += -(1 << r) + 1;
        return p;
      }
      function x(p, r) {
        var c = w(p, r);
        if (c == 0) return 0;
        if (c == 16) return -32768;
        var z = g(c, r);
        return o(z, c);
      }
      function n(p, r, c) {
        var z = i,
          G = H,
          I = l,
          E = e;
        for (var t = 0; t < z; t++) {
          p[t] = x(E[t], c) + (1 << j - 1);
        }
        for (var u = z; u < r; u += z) {
          for (var t = 0; t < z; t++) {
            p[u + t] = x(E[t], c) + p[u + t - z];
          }
        }
        var s = r;
        for (var k = 1; k < G; k++) {
          for (var t = 0; t < z; t++) {
            p[s + t] = x(E[t], c) + p[s + t - r];
          }
          for (var u = z; u < r; u += z) {
            for (var t = 0; t < z; t++) {
              var J = s + u + t,
                K = p[J - z],
                v = 0;
              if (I == 0) v = 0;else if (I == 1) v = K;else if (I == 2) v = p[J - r];else if (I == 3) v = p[J - r - z];else if (I == 4) v = K + (p[J - r] - p[J - r - z]);else if (I == 5) v = K + (p[J - r] - p[J - r - z] >>> 1);else if (I == 6) v = p[J - r] + (K - p[J - r - z] >>> 1);else if (I == 7) v = K + p[J - r] >>> 1;else throw I;
              p[J] = v + x(E[t], c);
            }
          }
          s += r;
        }
      }
      function f(p, r) {
        return o(g(p, r), p);
      }
      function d(p, r, c) {
        var z = y.length - D;
        for (var G = 0; G < z; G += 4) {
          var I = y[D + G];
          y[D + G] = y[D + G + 3];
          y[D + G + 3] = I;
          var I = y[D + G + 1];
          y[D + G + 1] = y[D + G + 2];
          y[D + G + 2] = I;
        }
        var E = e[0];
        for (var t = 0; t < H; t++) {
          var u = 32768,
            s = 32768;
          for (var k = 0; k < r; k += 2) {
            var J = w(E, c),
              K = w(E, c);
            if (J != 0) u += f(J, c);
            if (K != 0) s += f(K, c);
            p[t * r + k] = u & 65535;
            p[t * r + k + 1] = s & 65535;
          }
        }
      }
      function h(p) {
        y = p;
        D = 0;
        C = [], e = [];
        if (a() != 65496) throw "e";
        while (!0) {
          var r = a();
          if (r == 65535) {
            D--;
            continue;
          }
          var c = a();
          if (r == 65475) {
            j = q();
            H = a();
            F = a();
            i = q();
            A = [];
            for (var z = 0; z < i; z++) {
              var G = q(),
                I = q();
              if (I != 17) throw "e";
              var E = q();
              if (E != 0) throw "e";
              A[G] = z;
            }
          } else if (r == 65476) {
            var t = D + c - 2;
            while (D < t) {
              b();
            }
          } else if (r == 65498) {
            D++;
            for (var z = 0; z < i; z++) {
              var u = q();
              e[A[u]] = C[q() >>> 4];
            }
            l = q();
            D += 2;
            break;
          } else {
            D += c - 2;
          }
        }
        var s = j > 8 ? Uint16Array : Uint8Array,
          k = F * i,
          J = new s(H * k),
          K = {
            e: 0,
            c: 0,
            b: l == 8,
            a: D,
            data: y,
            d: y.length
          };
        if (K.b) d(J, k, K);else n(J, k, K);
        return J;
      }
      return h;
    }();
    (function () {
      var O = 0,
        d = 1,
        n = 2,
        F = 3,
        w = 4,
        j = 5,
        C = 6,
        l = 7,
        k = 8,
        P = 9,
        a9 = 10,
        g = 11,
        U = 12,
        t = 13,
        L = 14,
        Y = 15,
        Q = 16,
        M = 17,
        u = 18;
      function a4($) {
        var z = UTIF._binBE.readUshort,
          v = {
            m: z($, 0),
            f: $[2],
            r: $[3],
            a: $[4],
            d: z($, 5),
            t: z($, 7),
            h: z($, 9),
            n: z($, 11),
            v: $[13],
            p: z($, 14)
          };
        if (v.m != 18771 || v.f > 1 || v.d < 6 || v.d % 6 || v.h < 768 || v.h % 24 || v.n != 768 || v.t < v.n || v.t % v.n || v.t - v.h >= v.n || v.v > 16 || v.v != v.t / v.n || v.v != Math.ceil(v.h / v.n) || v.p != v.d / 6 || v.a != 12 && v.a != 14 && v.a != 16 || v.r != 16 && v.r != 0) {
          throw "Invalid data";
        }
        if (v.f == 0) {
          throw "Not implemented. We need this file!";
        }
        v.o = v.r == 16;
        v.c = (v.o ? v.n * 2 / 3 : v.n >>> 1) | 0;
        v.g = v.c + 2;
        v.q = 64;
        v.j = (1 << v.a) - 1;
        v.w = 4 * v.a;
        return v;
      }
      function a6($, z) {
        var v = new Array(z.v),
          i = 16 + 4 * z.v;
        for (var y = 0, A = 16; y < z.v; A += 4) {
          var B = UTIF._binBE.readUint($, A);
          v[y] = $.slice(i, i + B);
          v[y].l = 0;
          v[y].s = 0;
          i += B;
          y++;
        }
        if (i != $.length) throw "Invalid data";
        return v;
      }
      function a7($, z) {
        for (var v = -z[4], i = 0; v <= z[4]; i++, v++) {
          $[i] = v <= -z[3] ? -4 : v <= -z[2] ? -3 : v <= -z[1] ? -2 : v < -z[0] ? -1 : v <= z[0] ? 0 : v < z[1] ? 1 : v < z[2] ? 2 : v < z[3] ? 3 : 4;
        }
      }
      function a3($, z, v) {
        var i = [z, 3 * z + 18, 5 * z + 67, 7 * z + 276, v];
        $.k = z;
        $.i = (i[4] + 2 * z) / (2 * z + 1) + 1 | 0;
        $.b = Math.ceil(Math.log2($.i));
        $.e = 9;
        a7($.u, i);
      }
      function a1($) {
        var z = {
          u: new Int8Array(2 << $.a)
        };
        a3(z, 0, $.j);
        return z;
      }
      function N($) {
        var z = [[], [], []],
          v = Math.max(2, $.i + 32 >>> 6);
        for (var i = 0; i < 3; i++) {
          for (var y = 0; y < 41; y++) {
            z[i][y] = [v, 1];
          }
        }
        return z;
      }
      function a8($) {
        for (var z = -1, v = 0; !v; z++) {
          v = $[$.l] >>> 7 - $.s & 1;
          $.s++;
          $.s &= 7;
          if (!$.s) $.l++;
        }
        return z;
      }
      function R($, z) {
        var v = 0,
          i = 8 - $.s;
          $.l;
          $.s;
        if (z) {
          if (z >= i) {
            do {
              v <<= i;
              z -= i;
              v |= $[$.l] & (1 << i) - 1;
              $.l++;
              i = 8;
            } while (z >= 8);
          }
          if (z) {
            v <<= z;
            i -= z;
            v |= $[$.l] >>> i & (1 << z) - 1;
          }
          $.s = 8 - i;
        }
        return v;
      }
      function a2($, z) {
        var v = 0;
        if (z < $) {
          while (v <= 14 && z << ++v < $) {
          }
        }
        return v;
      }
      function V($, z, v, i, y, A, B, r) {
        if (r == null) r = 0;
        var W = A + 1,
          o = W % 2,
          f = 0,
          E,
          p,
          h = i[y],
          e = i[y - 1],
          T = i[y - 2][W],
          I = e[W - 1],
          x = e[W],
          G = e[W + 1],
          c = h[W - 1],
          D = h[W + 1],
          Z = Math.abs,
          H,
          s,
          X,
          q;
        if (o) {
          H = Z(G - x);
          s = Z(T - x);
          X = Z(I - x);
        }
        if (o) {
          q = H > X && s < H ? T + I : H < X && s < X ? T + G : G + I;
          q = q + 2 * x >>> 2;
          if (r) {
            h[W] = q;
            return;
          }
          E = z.e * z.u[$.j + x - T] + z.u[$.j + I - x];
        } else {
          q = x > I && x > G || x < I && x < G ? D + c + 2 * x >>> 2 : c + D >>> 1;
          E = z.e * z.u[$.j + x - I] + z.u[$.j + I - c];
        }
        p = Z(E);
        var _ = a8(v);
        if (_ < $.w - z.b - 1) {
          var a = a2(B[p][0], B[p][1]);
          f = R(v, a) + (_ << a);
        } else {
          f = R(v, z.b) + 1;
        }
        f = f & 1 ? -1 - (f >>> 1) : f >>> 1;
        B[p][0] += Z(f);
        if (B[p][1] == $.q) {
          B[p][0] >>>= 1;
          B[p][1] >>>= 1;
        }
        B[p][1]++;
        q = E < 0 ? q - f : q + f;
        if ($.f) {
          if (q < 0) q += z.i;else if (q > $.j) q -= z.i;
        }
        h[W] = q >= 0 ? Math.min(q, $.j) : 0;
      }
      function S($, z, v) {
        var i = $[0].length;
        for (var y = z; y <= v; y++) {
          $[y][0] = $[y - 1][1];
          $[y][i - 1] = $[y - 1][i - 2];
        }
      }
      function b($) {
        S($, l, U);
        S($, n, w);
        S($, Y, M);
      }
      function m($, z, v, i, y, A, B, r, W, o, J, K, f) {
        var E = 0,
          p = 1,
          h = y < t && y > w;
        while (p < $.c) {
          if (E < $.c) {
            V($, z, v, i, y, E, B[W], $.o && (h && o || !h && (J || (E & K) == f)));
            V($, z, v, i, A, E, B[W], $.o && (!h && o || h && (J || (E & K) == f)));
            E += 2;
          }
          if (E > 8) {
            V($, z, v, i, y, p, r[W]);
            V($, z, v, i, A, p, r[W]);
            p += 2;
          }
        }
        b(i);
      }
      function a0($, z, v, i, y, A) {
        m($, z, v, i, n, l, y, A, 0, 0, 1, 0, 8);
        m($, z, v, i, k, Y, y, A, 1, 0, 1, 0, 8);
        m($, z, v, i, F, P, y, A, 2, 1, 0, 3, 0);
        m($, z, v, i, a9, Q, y, A, 0, 0, 0, 3, 2);
        m($, z, v, i, w, g, y, A, 1, 0, 0, 3, 2);
        m($, z, v, i, U, M, y, A, 2, 1, 0, 3, 0);
      }
      function a5($, z, v, i, y, A) {
        var B = A.length,
          r = $.n;
        if (y + 1 == $.v) r = $.h - y * $.n;
        var W = 6 * $.h * i + y * $.n;
        for (var o = 0; o < 6; o++) {
          for (var J = 0; J < r; J++) {
            var K = A[o % B][J % B],
              f;
            if (K == 0) {
              f = n + (o >>> 1);
            } else if (K == 2) {
              f = Y + (o >>> 1);
            } else {
              f = l + o;
            }
            var E = $.o ? (J * 2 / 3 & 2147483646 | J % 3 & 1) + (J % 3 >>> 1) : J >>> 1;
            z[W + J] = v[f][E + 1];
          }
          W += $.h;
        }
      }
      UTIF._decompressRAF = function ($, z) {
        var v = a4($),
          i = a6($, v),
          y = a1(v),
          A = new Int16Array(v.h * v.d);
        if (z == null) {
          z = v.o ? [[1, 1, 0, 1, 1, 2], [1, 1, 2, 1, 1, 0], [2, 0, 1, 0, 2, 1], [1, 1, 2, 1, 1, 0], [1, 1, 0, 1, 1, 2], [0, 2, 1, 2, 0, 1]] : [[0, 1], [3, 2]];
        }
        var B = [[O, F], [d, w], [j, g], [C, U], [t, Q], [L, M]],
          r = [];
        for (var W = 0; W < u; W++) {
          r[W] = new Uint16Array(v.g);
        }
        for (var o = 0; o < v.v; o++) {
          var J = N(y),
            K = N(y);
          for (var W = 0; W < u; W++) {
            for (var f = 0; f < v.g; f++) {
              r[W][f] = 0;
            }
          }
          for (var E = 0; E < v.p; E++) {
            a0(v, y, i[o], r, J, K);
            for (var W = 0; W < 6; W++) {
              for (var f = 0; f < v.g; f++) {
                r[B[W][0]][f] = r[B[W][1]][f];
              }
            }
            a5(v, A, r, E, o, z);
            for (var W = n; W < u; W++) {
              if ([j, C, t, L].indexOf(W) == -1) {
                for (var f = 0; f < v.g; f++) {
                  r[W][f] = 0;
                }
              }
            }
            b(r);
          }
        }
        return A;
      };
    })();
  })(UTIF, pako);
  return UTIF;
})(pako);

var AnotherCropper = WINDOW.Cropper;
var Cropper = /*#__PURE__*/function () {
  /**
   * Create a new Cropper.
   * @param {Element} element - The target element for cropping.
   * @param {Object} [options={}] - The configuration options.
   */
  function Cropper(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Cropper);
    if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
      throw new Error('The first argument is required and must be an <img> or <canvas> element.');
    }
    this.element = element;
    this.options = assign$1({}, DEFAULTS, isPlainObject(options) && options);
    this.cropped = false;
    this.disabled = false;
    this.pointers = {};
    this.ready = false;
    this.reloading = false;
    this.replaced = false;
    this.sized = false;
    this.sizing = false;
    this.init();
  }
  _createClass(Cropper, [{
    key: "init",
    value: function init() {
      var element = this.element;
      var tagName = element.tagName.toLowerCase();
      var url;
      if (element[NAMESPACE]) {
        return;
      }
      element[NAMESPACE] = this;
      if (tagName === 'img') {
        this.isImg = true;

        // e.g.: "img/picture.jpg"
        url = element.getAttribute('src') || '';
        this.originalUrl = url;

        // Stop when it's a blank image
        if (!url) {
          return;
        }

        // e.g.: "https://example.com/img/picture.jpg"
        url = element.src;
      } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
        url = element.toDataURL();
      }
      this.load(url);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this = this;
      if (!url) {
        return;
      }
      this.url = url;
      this.imageData = {};
      var element = this.element,
        options = this.options;
      if (!options.rotatable && !options.scalable) {
        options.checkOrientation = false;
      }

      // Only IE10+ supports Typed Arrays
      if (!options.checkOrientation || !window.ArrayBuffer) {
        this.clone();
        return;
      }

      // Detect the mime type of the image directly if it is a Data URL
      if (REGEXP_DATA_URL.test(url)) {
        // Read ArrayBuffer from Data URL of JPEG images directly for better performance
        if (REGEXP_DATA_URL_JPEG.test(url)) {
          this.read(dataURLToArrayBuffer(url));
        } else {
          // Only a JPEG image may contains Exif Orientation information,
          // the rest types of Data URLs are not necessary to check orientation at all.
          this.clone();
        }
        return;
      }

      // 1. Detect the mime type of the image by a XMLHttpRequest.
      // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.
      var xhr = new XMLHttpRequest();
      var clone = this.clone.bind(this);
      this.reloading = true;
      this.xhr = xhr;

      // 1. Cross origin requests are only supported for protocol schemes:
      // http, https, data, chrome, chrome-extension.
      // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
      // in some browsers as IE11 and Safari.
      xhr.onabort = clone;
      xhr.onerror = clone;
      xhr.ontimeout = clone;
      xhr.onprogress = function () {
        // Abort the request directly if it not a JPEG image for better performance
        /**
        if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
          xhr.abort();
        }*/
      };
      xhr.onload = function () {
        _this.read(xhr.response);
      };
      xhr.onloadend = function () {
        _this.reloading = false;
        _this.xhr = null;
      };

      // Bust cache when there is a "crossOrigin" property to avoid browser cache error
      if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
        url = addTimestamp(url);
      }

      // The third parameter is required for avoiding side-effect (#682)
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.withCredentials = element.crossOrigin === 'use-credentials';
      xhr.send();
    }
  }, {
    key: "read",
    value: function read(arrayBuffer) {
      var options = this.options,
        imageData = this.imageData;
      var magics = {
        png: [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A],
        bmp: [0x42, 0x4D],
        // "BM" in ASCII
        jpeg: [0xFF, 0xD8, 0xFF],
        gif: [0x47, 0x49, 0x46, 0x38],
        // "GIF8" in ASCII, fully either "GIF87a" or "GIF89a"
        webp: [0x57, 0x45, 0x42, 0x50],
        // "WEBP" in ASCII
        tiff_be: [0x4D, 0x4D, 0x0, 0x2A],
        tiff_le: [0x49, 0x49, 0x2A, 0x0],
        ico: [0x00, 0x00, 0x01, 0x00],
        cur: [0x00, 0x00, 0x02, 0x00],
        icns: [0x69, 0x63, 0x6e, 0x73] // "icns" in ASCII
      };
      // eslint-disable-next-line camelcase
      var file_bytes = new Uint8Array(arrayBuffer);
      // eslint-disable-next-line camelcase
      var detected_type_id;
      // eslint-disable-next-line camelcase,no-restricted-syntax
      for (var _i = 0, _Object$entries = Object.entries(magics); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          type_id = _Object$entries$_i[0],
          magic_bytes = _Object$entries$_i[1];
        // eslint-disable-next-line camelcase
        var magic_found = magic_bytes.every(function (byte, index) {
          return byte === file_bytes[index];
        });
        // eslint-disable-next-line camelcase
        if (magic_found) {
          // eslint-disable-next-line camelcase,no-unused-vars
          detected_type_id = type_id;
        }
      }

      // eslint-disable-next-line camelcase
      if (detected_type_id === 'tiff_be' || detected_type_id === 'tiff_le') {
        this.url = UTIF.bufferToURI(arrayBuffer);
      }

      // Reset the orientation value to its default value 1
      // as some iOS browsers will render image with its orientation
      var orientation = resetAndGetOrientation(arrayBuffer);
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;
      if (orientation > 1) {
        // Generate a new URL which has the default orientation value
        this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
        var _parseOrientation = parseOrientation(orientation);
        rotate = _parseOrientation.rotate;
        scaleX = _parseOrientation.scaleX;
        scaleY = _parseOrientation.scaleY;
      }
      if (options.rotatable) {
        imageData.rotate = rotate;
      }
      if (options.scalable) {
        imageData.scaleX = scaleX;
        imageData.scaleY = scaleY;
      }
      this.clone();
    }
  }, {
    key: "clone",
    value: function clone() {
      var element = this.element,
        url = this.url;
      var crossOrigin = element.crossOrigin;
      var crossOriginUrl = url;
      if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
        if (!crossOrigin) {
          crossOrigin = 'anonymous';
        }

        // Bust cache when there is not a "crossOrigin" property (#519)
        crossOriginUrl = addTimestamp(url);
      }
      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      var image = document.createElement('img');
      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }
      image.src = crossOriginUrl || url;
      image.alt = element.alt || 'The image to crop';
      this.image = image;
      image.onload = this.start.bind(this);
      image.onerror = this.stop.bind(this);
      addClass(image, CLASS_HIDE);
      element.parentNode.insertBefore(image, element.nextSibling);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      var image = this.image;
      image.onload = null;
      image.onerror = null;
      this.sizing = true;

      // Match all browsers that use WebKit as the layout engine in iOS devices,
      // such as Safari for iOS, Chrome for iOS, and in-app browsers.
      var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
      var done = function done(naturalWidth, naturalHeight) {
        assign$1(_this2.imageData, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });
        _this2.initialImageData = assign$1({}, _this2.imageData);
        _this2.sizing = false;
        _this2.sized = true;
        _this2.build();
      };

      // Most modern browsers (excepts iOS WebKit)
      if (image.naturalWidth && !isIOSWebKit) {
        done(image.naturalWidth, image.naturalHeight);
        return;
      }
      var sizingImage = document.createElement('img');
      var body = document.body || document.documentElement;
      this.sizingImage = sizingImage;
      sizingImage.onload = function () {
        done(sizingImage.width, sizingImage.height);
        if (!isIOSWebKit) {
          body.removeChild(sizingImage);
        }
      };
      sizingImage.src = image.src;

      // iOS WebKit will convert the image automatically
      // with its orientation once append it into DOM (#279)
      if (!isIOSWebKit) {
        sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
        body.appendChild(sizingImage);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var image = this.image;
      image.onload = null;
      image.onerror = null;
      image.parentNode.removeChild(image);
      this.image = null;
    }
  }, {
    key: "build",
    value: function build() {
      if (!this.sized || this.ready) {
        return;
      }
      var element = this.element,
        options = this.options,
        image = this.image;

      // Create cropper elements
      var container = element.parentNode;
      var template = document.createElement('div');
      template.innerHTML = TEMPLATE;
      var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
      var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
      var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
      var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
      var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
      this.container = container;
      this.cropper = cropper;
      this.canvas = canvas;
      this.dragBox = dragBox;
      this.cropBox = cropBox;
      this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
      this.face = face;
      canvas.appendChild(image);

      // Hide the original image
      addClass(element, CLASS_HIDDEN);

      // Inserts the cropper after to the current image
      container.insertBefore(cropper, element.nextSibling);

      // Show the hidden image
      removeClass(image, CLASS_HIDE);
      this.initPreview();
      this.bind();
      options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
      addClass(cropBox, CLASS_HIDDEN);
      if (!options.guides) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
      }
      if (!options.center) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
      }
      if (options.background) {
        addClass(cropper, "".concat(NAMESPACE, "-bg"));
      }
      if (!options.highlight) {
        addClass(face, CLASS_INVISIBLE);
      }
      if (options.cropBoxMovable) {
        addClass(face, CLASS_MOVE);
        setData(face, DATA_ACTION, ACTION_ALL);
      }
      if (!options.cropBoxResizable) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
      }
      this.render();
      this.ready = true;
      this.setDragMode(options.dragMode);
      if (options.autoCrop) {
        this.crop();
      }
      this.setData(options.data);
      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }
      dispatchEvent(element, EVENT_READY);
    }
  }, {
    key: "unbuild",
    value: function unbuild() {
      if (!this.ready) {
        return;
      }
      this.ready = false;
      this.unbind();
      this.resetPreview();
      var parentNode = this.cropper.parentNode;
      if (parentNode) {
        parentNode.removeChild(this.cropper);
      }
      removeClass(this.element, CLASS_HIDDEN);
    }
  }, {
    key: "uncreate",
    value: function uncreate() {
      if (this.ready) {
        this.unbuild();
        this.ready = false;
        this.cropped = false;
      } else if (this.sizing) {
        this.sizingImage.onload = null;
        this.sizing = false;
        this.sized = false;
      } else if (this.reloading) {
        this.xhr.onabort = null;
        this.xhr.abort();
      } else if (this.image) {
        this.stop();
      }
    }

    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Cropper = AnotherCropper;
      return Cropper;
    }

    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign$1(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
  return Cropper;
}();
assign$1(Cropper.prototype, render, preview, events, handlers, change, methods);

module.exports = Cropper;
