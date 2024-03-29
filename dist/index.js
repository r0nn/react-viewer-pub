(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-viewer"] = factory(require("react"), require("react-dom"));
	else
		root["react-viewer"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Viewer = __webpack_require__(4);

	var _Viewer2 = _interopRequireDefault(_Viewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Viewer2.default;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.ActionType = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ActionType = exports.ActionType = undefined;
	(function (ActionType) {
	    ActionType[ActionType["zoomIn"] = 1] = "zoomIn";
	    ActionType[ActionType["zoomOut"] = 2] = "zoomOut";
	    ActionType[ActionType["prev"] = 3] = "prev";
	    ActionType[ActionType["next"] = 4] = "next";
	    ActionType[ActionType["rotateLeft"] = 5] = "rotateLeft";
	    ActionType[ActionType["rotateRight"] = 6] = "rotateRight";
	    ActionType[ActionType["reset"] = 7] = "reset";
	    ActionType[ActionType["close"] = 8] = "close";
	    ActionType[ActionType["scaleX"] = 9] = "scaleX";
	    ActionType[ActionType["scaleY"] = 10] = "scaleY";
	    ActionType[ActionType["download"] = 11] = "download";
	})(ActionType || (exports.ActionType = ActionType = {}));

	var Icon = function (_React$Component) {
	    _inherits(Icon, _React$Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    Icon.prototype.render = function render() {
	        var prefixCls = 'react-viewer-icon';
	        return React.createElement("i", { className: prefixCls + " " + prefixCls + "-" + ActionType[this.props.type] });
	    };

	    return Icon;
	}(React.Component);

	exports.default = Icon;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Loading = function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading() {
	        _classCallCheck(this, Loading);

	        return _possibleConstructorReturn(this, _React$Component.call(this));
	    }

	    Loading.prototype.render = function render() {
	        var cls = 'circle-loading';
	        return React.createElement(
	            'div',
	            { className: 'loading-wrap', style: this.props.style },
	            React.createElement('div', { className: cls })
	        );
	    };

	    return Loading;
	}(React.Component);

	exports.default = Loading;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(12);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	var _ViewerCore = __webpack_require__(6);

	var _ViewerCore2 = _interopRequireDefault(_ViewerCore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Viewer = function (_React$Component) {
	    _inherits(Viewer, _React$Component);

	    function Viewer() {
	        _classCallCheck(this, Viewer);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	        _this.container = null;
	        _this.defaultContainer = null;
	        if (typeof document !== 'undefined') {
	            _this.setDefaultContainer();
	        }
	        _this.component = null;
	        return _this;
	    }

	    Viewer.prototype.setDefaultContainer = function setDefaultContainer() {
	        this.defaultContainer = document.createElement('div');
	    };

	    Viewer.prototype.renderViewer = function renderViewer() {
	        if (this.props.visible || this.component) {
	            if (!this.container) {
	                if (this.props.container) {
	                    this.container = this.props.container;
	                } else {
	                    if (!this.defaultContainer) {
	                        this.setDefaultContainer();
	                    }
	                    this.container = this.defaultContainer;
	                    document.body.appendChild(this.container);
	                }
	            }
	            var instance = this;
	            ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement(_ViewerCore2.default, this.props), this.container, function () {
	                instance.component = this;
	            });
	        }
	    };

	    Viewer.prototype.removeViewer = function removeViewer() {
	        if (this.container) {
	            var container = this.container;
	            ReactDOM.unmountComponentAtNode(container);
	            container.parentNode.removeChild(container);
	            this.container = null;
	            this.component = null;
	        }
	    };

	    Viewer.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.props.visible && this.props.onClose) {
	            this.props.onClose();
	        }
	        this.removeViewer();
	    };

	    Viewer.prototype.componentDidMount = function componentDidMount() {
	        this.renderViewer();
	    };

	    Viewer.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        if (this.props.container !== prevProps.container) {
	            this.component = null;
	            if (this.props.container) {
	                if (this.container && !prevProps.container) {
	                    document.body.removeChild(this.container);
	                }
	                this.container = this.props.container;
	            } else {
	                this.container = this.defaultContainer;
	                document.body.appendChild(this.container);
	            }
	        }
	        this.renderViewer();
	    };

	    Viewer.prototype.render = function render() {
	        return null;
	    };

	    return Viewer;
	}(React.Component);

	exports.default = Viewer;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _Loading = __webpack_require__(3);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _classnames2 = __webpack_require__(10);

	var _classnames3 = _interopRequireDefault(_classnames2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ViewerCanvas = function (_React$Component) {
	    _inherits(ViewerCanvas, _React$Component);

	    function ViewerCanvas() {
	        _classCallCheck(this, ViewerCanvas);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	        _this.handleResize = function (e) {
	            _this.props.onResize();
	        };
	        _this.handleCanvasMouseDown = function (e) {
	            if (e.button !== 0) {
	                return;
	            }
	            _this.props.onCanvasMouseDown(e);
	            _this.handleMouseDown(e);
	        };
	        _this.handleMouseDown = function (e) {
	            if (e.button !== 0) {
	                return;
	            }
	            if (!_this.props.visible || !_this.props.drag) {
	                return;
	            }
	            e.preventDefault();
	            e.stopPropagation();
	            _this.setState({
	                isMouseDown: true,
	                mouseX: e.nativeEvent.clientX,
	                mouseY: e.nativeEvent.clientY
	            });
	        };
	        _this.handleMouseMove = function (e) {
	            if (_this.state.isMouseDown) {
	                var diffX = e.clientX - _this.state.mouseX;
	                var diffY = e.clientY - _this.state.mouseY;
	                _this.setState({
	                    mouseX: e.clientX,
	                    mouseY: e.clientY
	                });
	                _this.props.onChangeImgState(_this.props.width, _this.props.height, _this.props.top + diffY, _this.props.left + diffX);
	            }
	        };
	        _this.handleMouseUp = function (e) {
	            _this.setState({
	                isMouseDown: false
	            });
	        };
	        _this.bindEvent = function (remove) {
	            var funcName = 'addEventListener';
	            if (remove) {
	                funcName = 'removeEventListener';
	            }
	            document[funcName]('click', _this.handleMouseUp, false);
	            document[funcName]('mousemove', _this.handleMouseMove, false);
	            window[funcName]('resize', _this.handleResize, false);
	        };
	        _this.state = {
	            isMouseDown: false,
	            mouseX: 0,
	            mouseY: 0
	        };
	        return _this;
	    }

	    ViewerCanvas.prototype.componentDidMount = function componentDidMount() {
	        if (this.props.drag) {
	            this.bindEvent();
	        }
	    };

	    ViewerCanvas.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        if (this.props.visible && !prevProps.visible) {
	            if (this.props.drag) {
	                return this.bindEvent();
	            }
	        }
	        if (!this.props.visible && prevProps.visible) {
	            this.handleMouseUp({});
	            if (this.props.drag) {
	                return this.bindEvent(true);
	            }
	        }
	        if (!this.props.drag && prevProps.drag) {
	            return this.bindEvent(true);
	        }
	        if (this.props.drag && !prevProps.drag) {
	            if (this.props.visible) {
	                return this.bindEvent(true);
	            }
	        }
	    };

	    ViewerCanvas.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.bindEvent(true);
	    };

	    ViewerCanvas.prototype.render = function render() {
	        var imgStyle = {
	            width: this.props.width + 'px',
	            height: this.props.height + 'px',
	            transform: '\ntranslateX(' + (this.props.left !== null ? this.props.left + 'px' : 'aoto') + ') translateY(' + this.props.top + 'px)\n      rotate(' + this.props.rotate + 'deg) scaleX(' + this.props.scaleX + ') scaleY(' + this.props.scaleY + ')'
	        };
	        var imgClass = (0, _classnames3.default)(this.props.prefixCls + '-image', _defineProperty({
	            drag: this.props.drag
	        }, this.props.prefixCls + '-image-transition', !this.state.isMouseDown));
	        var style = {
	            zIndex: this.props.zIndex
	        };
	        var imgNode = null;
	        if (this.props.imgSrc !== '') {
	            imgNode = React.createElement('img', { className: imgClass, src: this.props.imgSrc, style: imgStyle, onMouseDown: this.handleMouseDown });
	        }
	        if (this.props.loading) {
	            imgNode = React.createElement(
	                'div',
	                { style: {
	                        display: 'flex',
	                        height: window.innerHeight - 84 + 'px',
	                        justifyContent: 'center',
	                        alignItems: 'center'
	                    } },
	                React.createElement(_Loading2.default, null)
	            );
	        }
	        return React.createElement(
	            'div',
	            { className: this.props.prefixCls + '-canvas', onMouseDown: this.handleCanvasMouseDown, style: style },
	            imgNode
	        );
	    };

	    return ViewerCanvas;
	}(React.Component);

	exports.default = ViewerCanvas;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	__webpack_require__(11);

	var _ViewerCanvas = __webpack_require__(5);

	var _ViewerCanvas2 = _interopRequireDefault(_ViewerCanvas);

	var _ViewerNav = __webpack_require__(7);

	var _ViewerNav2 = _interopRequireDefault(_ViewerNav);

	var _ViewerToolbar = __webpack_require__(8);

	var _ViewerToolbar2 = _interopRequireDefault(_ViewerToolbar);

	var _Icon = __webpack_require__(2);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _constants = __webpack_require__(9);

	var constants = _interopRequireWildcard(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function noop() {}
	var transitionDuration = 300;

	var ViewerCore = function (_React$Component) {
	    _inherits(ViewerCore, _React$Component);

	    function ViewerCore(props) {
	        _classCallCheck(this, ViewerCore);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	        _this.handleClose = function () {
	            _this.props.onClose();
	        };
	        _this.loadImgSuccess = function (activeImage, imgWidth, imgHeight, isNewImage) {
	            var isAltImage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	            var realImgWidth = imgWidth;
	            var realImgHeight = imgHeight;
	            if (_this.props.defaultSize) {
	                realImgWidth = _this.props.defaultSize.width;
	                realImgHeight = _this.props.defaultSize.height;
	            }
	            if (activeImage.defaultSize) {
	                realImgWidth = activeImage.defaultSize.width;
	                realImgHeight = activeImage.defaultSize.height;
	            }

	            var _this$getImgWidthHeig = _this.getImgWidthHeight(realImgWidth, realImgHeight),
	                _this$getImgWidthHeig2 = _slicedToArray(_this$getImgWidthHeig, 2),
	                width = _this$getImgWidthHeig2[0],
	                height = _this$getImgWidthHeig2[1];

	            var left = (_this.containerWidth - width) / 2;
	            var top = (_this.containerHeight - height - _this.footerHeight) / 2;
	            var scaleX = _this.props.defaultScale;
	            var scaleY = _this.props.defaultScale;
	            if (_this.props.noResetZoomAfterChange && isNewImage) {
	                scaleX = _this.state.scaleX;
	                scaleY = _this.state.scaleY;
	            }
	            _this.setState({
	                width: width,
	                height: height,
	                left: left,
	                top: top,
	                imageWidth: imgWidth,
	                imageHeight: imgHeight,
	                loading: false,
	                rotate: 0,
	                scaleX: scaleX,
	                scaleY: scaleY,
	                isAltImage: isAltImage
	            });
	        };
	        _this.handleChangeImg = function (newIndex) {
	            if (!_this.props.loop && (newIndex >= _this.props.images.length || newIndex < 0)) {
	                return;
	            }
	            if (newIndex >= _this.props.images.length) {
	                newIndex = 0;
	            }
	            if (newIndex < 0) {
	                newIndex = _this.props.images.length - 1;
	            }
	            if (newIndex === _this.state.activeIndex) {
	                return;
	            }
	            if (_this.props.onChange) {
	                var activeImage = _this.getActiveImage(newIndex);
	                _this.props.onChange(activeImage, newIndex);
	            }
	            _this.loadImg(newIndex, true);
	        };
	        _this.handleChangeImgState = function (width, height, top, left) {
	            _this.setState({
	                width: width,
	                height: height,
	                top: top,
	                left: left
	            });
	        };
	        _this.handleDefaultAction = function (type) {
	            switch (type) {
	                case _Icon.ActionType.prev:
	                    _this.handleChangeImg(_this.state.activeIndex - 1);
	                    break;
	                case _Icon.ActionType.next:
	                    _this.handleChangeImg(_this.state.activeIndex + 1);
	                    break;
	                case _Icon.ActionType.zoomIn:
	                    var imgCenterXY = _this.getImageCenterXY();
	                    _this.handleZoom(imgCenterXY.x, imgCenterXY.y, 1, _this.props.zoomSpeed);
	                    break;
	                case _Icon.ActionType.zoomOut:
	                    var imgCenterXY2 = _this.getImageCenterXY();
	                    _this.handleZoom(imgCenterXY2.x, imgCenterXY2.y, -1, _this.props.zoomSpeed);
	                    break;
	                case _Icon.ActionType.rotateLeft:
	                    _this.handleRotate();
	                    break;
	                case _Icon.ActionType.rotateRight:
	                    _this.handleRotate(true);
	                    break;
	                case _Icon.ActionType.reset:
	                    _this.loadImg(_this.state.activeIndex);
	                    break;
	                case _Icon.ActionType.scaleX:
	                    _this.handleScaleX(-1);
	                    break;
	                case _Icon.ActionType.scaleY:
	                    _this.handleScaleY(-1);
	                    break;
	                case _Icon.ActionType.download:
	                    _this.handleDownload();
	                    break;
	                default:
	                    break;
	            }
	        };
	        _this.handleAction = function (config) {
	            _this.handleDefaultAction(config.actionType);
	            if (config.onClick) {
	                var activeImage = _this.getActiveImage();
	                config.onClick(activeImage);
	            }
	        };
	        _this.handleDownload = function () {
	            var activeImage = _this.getActiveImage();
	            if (activeImage.downloadUrl) {
	                location.href = activeImage.downloadUrl;
	            }
	        };
	        _this.handleScaleX = function (newScale) {
	            _this.setState({
	                scaleX: _this.state.scaleX * newScale
	            });
	        };
	        _this.handleScaleY = function (newScale) {
	            _this.setState({
	                scaleY: _this.state.scaleY * newScale
	            });
	        };
	        _this.handleScrollZoom = function (targetX, targetY, direct) {
	            _this.handleZoom(targetX, targetY, direct, _this.props.zoomSpeed);
	        };
	        _this.handleZoom = function (targetX, targetY, direct, scale) {
	            var imgCenterXY = _this.getImageCenterXY();
	            var diffX = targetX - imgCenterXY.x;
	            var diffY = targetY - imgCenterXY.y;
	            var top = 0;
	            var left = 0;
	            var width = 0;
	            var height = 0;
	            var scaleX = 0;
	            var scaleY = 0;
	            if (_this.state.width === 0) {
	                var _this$getImgWidthHeig3 = _this.getImgWidthHeight(_this.state.imageWidth, _this.state.imageHeight),
	                    _this$getImgWidthHeig4 = _slicedToArray(_this$getImgWidthHeig3, 2),
	                    imgWidth = _this$getImgWidthHeig4[0],
	                    imgHeight = _this$getImgWidthHeig4[1];

	                left = (_this.containerWidth - imgWidth) / 2;
	                top = (_this.containerHeight - _this.footerHeight - imgHeight) / 2;
	                width = _this.state.width + imgWidth;
	                height = _this.state.height + imgHeight;
	                scaleX = scaleY = 1;
	            } else {
	                var directX = _this.state.scaleX > 0 ? 1 : -1;
	                var directY = _this.state.scaleY > 0 ? 1 : -1;
	                scaleX = _this.state.scaleX + scale * direct * directX;
	                scaleY = _this.state.scaleY + scale * direct * directY;
	                if (Math.abs(scaleX) < 0.1 || Math.abs(scaleY) < 0.1) {
	                    return;
	                }
	                top = _this.state.top + -direct * diffY / _this.state.scaleX * scale * directX;
	                left = _this.state.left + -direct * diffX / _this.state.scaleY * scale * directY;
	                width = _this.state.width;
	                height = _this.state.height;
	            }
	            _this.setState({
	                width: width,
	                scaleX: scaleX,
	                scaleY: scaleY,
	                height: height,
	                top: top,
	                left: left,
	                loading: false
	            });
	        };
	        _this.getImageCenterXY = function () {
	            return {
	                x: _this.state.left + _this.state.width / 2,
	                y: _this.state.top + _this.state.height / 2
	            };
	        };
	        _this.handleRotate = function () {
	            var isRight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            _this.setState({
	                rotate: _this.state.rotate + 90 * (isRight ? 1 : -1)
	            });
	        };
	        _this.handleResize = function () {
	            _this.setContainerWidthHeight();
	            if (_this.props.visible) {
	                var left = (_this.containerWidth - _this.state.width) / 2;
	                var top = (_this.containerHeight - _this.state.height - _this.footerHeight) / 2;
	                _this.setState({
	                    left: left,
	                    top: top
	                });
	            }
	        };
	        _this.handleKeydown = function (e) {
	            var keyCode = e.keyCode || e.which || e.charCode;
	            var isFeatrue = false;
	            switch (keyCode) {
	                // key: esc
	                case 27:
	                    _this.props.onClose();
	                    isFeatrue = true;
	                    break;
	                // key: ←
	                case 37:
	                    if (e.ctrlKey) {
	                        _this.handleDefaultAction(_Icon.ActionType.rotateLeft);
	                    } else {
	                        _this.handleDefaultAction(_Icon.ActionType.prev);
	                    }
	                    isFeatrue = true;
	                    break;
	                // key: →
	                case 39:
	                    if (e.ctrlKey) {
	                        _this.handleDefaultAction(_Icon.ActionType.rotateRight);
	                    } else {
	                        _this.handleDefaultAction(_Icon.ActionType.next);
	                    }
	                    isFeatrue = true;
	                    break;
	                // key: ↑
	                case 38:
	                    _this.handleDefaultAction(_Icon.ActionType.zoomIn);
	                    isFeatrue = true;
	                    break;
	                // key: ↓
	                case 40:
	                    _this.handleDefaultAction(_Icon.ActionType.zoomOut);
	                    isFeatrue = true;
	                    break;
	                // key: Ctrl + 1
	                case 49:
	                    if (e.ctrlKey) {
	                        _this.loadImg(_this.state.activeIndex);
	                        isFeatrue = true;
	                    }
	                    break;
	                default:
	                    break;
	            }
	            if (isFeatrue) {
	                e.preventDefault();
	            }
	        };
	        _this.handleTransitionEnd = function () {
	            if (!_this.state.transitionEnd || _this.state.visibleStart) {
	                _this.setState({
	                    visibleStart: false,
	                    transitionEnd: true
	                });
	            }
	        };
	        _this.handleCanvasMouseDown = function (e) {
	            _this.props.onMaskClick(e);
	        };
	        _this.getActiveImage = function () {
	            var activeIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

	            var activeImg = {
	                src: '',
	                altSrc: '',
	                alt: '',
	                downloadUrl: ''
	            };
	            var images = _this.props.images || [];
	            var realActiveIndex = null;
	            if (activeIndex !== undefined) {
	                realActiveIndex = activeIndex;
	            } else {
	                realActiveIndex = _this.state.activeIndex;
	            }
	            if (images.length > 0 && realActiveIndex >= 0) {
	                activeImg = images[realActiveIndex];
	            }
	            return activeImg;
	        };
	        _this.handleMouseScroll = function (e) {
	            if (_this.props.disableMouseZoom) {
	                return;
	            }
	            e.preventDefault();
	            var direct = 0;
	            var value = e.deltaY;
	            if (value === 0) {
	                direct = 0;
	            } else {
	                direct = value > 0 ? -1 : 1;
	            }
	            if (direct !== 0) {
	                var x = e.clientX;
	                var y = e.clientY;
	                if (_this.props.container) {
	                    var containerRect = _this.props.container.getBoundingClientRect();
	                    x -= containerRect.left;
	                    y -= containerRect.top;
	                }
	                _this.handleScrollZoom(x, y, direct);
	            }
	        };
	        _this.prefixCls = 'react-viewer';
	        _this.state = {
	            visible: false,
	            visibleStart: false,
	            transitionEnd: false,
	            activeIndex: _this.props.activeIndex,
	            width: 0,
	            height: 0,
	            top: 15,
	            left: null,
	            rotate: 0,
	            imageWidth: 0,
	            imageHeight: 0,
	            scaleX: _this.props.defaultScale,
	            scaleY: _this.props.defaultScale,
	            loading: false,
	            loadFailed: false,
	            isAltImage: false
	        };
	        _this.setContainerWidthHeight();
	        _this.footerHeight = constants.FOOTER_HEIGHT;
	        return _this;
	    }

	    ViewerCore.prototype.setContainerWidthHeight = function setContainerWidthHeight() {
	        this.containerWidth = window.innerWidth;
	        this.containerHeight = window.innerHeight;
	        if (this.props.container) {
	            this.containerWidth = this.props.container.offsetWidth;
	            this.containerHeight = this.props.container.offsetHeight;
	            this.setInlineContainerHeight();
	        }
	    };

	    ViewerCore.prototype.setInlineContainerHeight = function setInlineContainerHeight() {
	        var core = this.refs['viewerCore'];
	        if (core) {
	            this.containerHeight = core.offsetHeight;
	        }
	    };

	    ViewerCore.prototype.startVisible = function startVisible(activeIndex) {
	        var _this2 = this;

	        if (!this.props.container) {
	            document.body.style.overflow = 'hidden';
	            if (document.body.scrollHeight > document.body.clientHeight) {
	                document.body.style.paddingRight = '15px';
	            }
	        }
	        this.setState({
	            visibleStart: true
	        });
	        setTimeout(function () {
	            _this2.setState({
	                visible: true,
	                activeIndex: activeIndex
	            });
	            setTimeout(function () {
	                _this2.bindEvent();
	                _this2.loadImg(activeIndex);
	            }, 300);
	        }, 10);
	    };

	    ViewerCore.prototype.componentDidMount = function componentDidMount() {
	        var core = this.refs['viewerCore'];
	        core.addEventListener('transitionend', this.handleTransitionEnd, false);
	        // Though onWheel can be directly used on the div "viewerCore", to be able to
	        // prevent default action, a listener is added here instead
	        this.refs['viewerCore'].addEventListener('wheel', this.handleMouseScroll, false);
	        if (this.containerHeight === 0) {
	            this.setInlineContainerHeight();
	        }
	        this.startVisible(this.state.activeIndex);
	    };

	    ViewerCore.prototype.getImgWidthHeight = function getImgWidthHeight(imgWidth, imgHeight) {
	        var width = 0;
	        var height = 0;
	        var maxWidth = this.containerWidth * 0.8;
	        var maxHeight = (this.containerHeight - this.footerHeight) * 0.8;
	        width = Math.min(maxWidth, imgWidth);
	        height = width / imgWidth * imgHeight;
	        if (height > maxHeight) {
	            height = maxHeight;
	            width = height / imgHeight * imgWidth;
	        }
	        if (this.props.noLimitInitializationSize) {
	            width = imgWidth;
	            height = imgHeight;
	        }
	        return [width, height];
	    };

	    ViewerCore.prototype.loadImg = function loadImg(activeIndex) {
	        var _this3 = this;

	        var isNewImage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        var activeImage = null;
	        var images = this.props.images || [];
	        if (images.length > 0) {
	            activeImage = images[activeIndex];
	        }
	        var loadComplete = false;
	        var isAltImage = false;
	        var img = new Image();
	        this.setState({
	            activeIndex: activeIndex,
	            loading: true,
	            loadFailed: false,
	            isAltImage: false
	        }, function () {
	            img.onload = function () {
	                if (!loadComplete) {
	                    _this3.loadImgSuccess(activeImage, img.width, img.height, isNewImage, isAltImage);
	                }
	            };
	            img.onerror = function () {
	                if (!!activeImage.altSrc && !isAltImage) {
	                    isAltImage = true;
	                    img.src = activeImage.altSrc;
	                    if (img.complete) {
	                        loadComplete = true;
	                        _this3.loadImgSuccess(activeImage, img.width, img.height, isNewImage, isAltImage);
	                    }
	                    return;
	                }
	                if (_this3.props.defaultImg) {
	                    _this3.setState({
	                        loadFailed: true
	                    });
	                    var deafultImgWidth = _this3.props.defaultImg.width || _this3.containerWidth * .5;
	                    var defaultImgHeight = _this3.props.defaultImg.height || _this3.containerHeight * .5;
	                    _this3.loadImgSuccess(activeImage, deafultImgWidth, defaultImgHeight, isNewImage, isAltImage);
	                } else {
	                    _this3.setState({
	                        activeIndex: activeIndex,
	                        imageWidth: 0,
	                        imageHeight: 0,
	                        loading: false,
	                        isAltImage: isAltImage
	                    });
	                }
	            };
	            img.src = activeImage.src;
	            if (img.complete) {
	                loadComplete = true;
	                _this3.loadImgSuccess(activeImage, img.width, img.height, isNewImage, isAltImage);
	            }
	        });
	    };

	    ViewerCore.prototype.bindEvent = function bindEvent() {
	        var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	        var funcName = 'addEventListener';
	        if (remove) {
	            funcName = 'removeEventListener';
	        }
	        if (!this.props.disableKeyboardSupport) {
	            document[funcName]('keydown', this.handleKeydown, false);
	        }
	    };

	    ViewerCore.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.bindEvent(true);
	        this.refs['viewerCore'].removeEventListener('transitionend', this.handleTransitionEnd, false);
	    };

	    ViewerCore.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        var _this4 = this;

	        if (this.props.visible && !prevProps.visible) {
	            this.startVisible(this.props.activeIndex);
	            return;
	        }
	        if (!this.props.visible && prevProps.visible) {
	            this.bindEvent(true);
	            this.handleZoom(this.containerWidth / 2, (this.containerHeight - this.footerHeight) / 2, -1, (this.state.scaleX > 0 ? 1 : -1) * this.state.scaleX - 0.11);
	            setTimeout(function () {
	                document.body.style.overflow = '';
	                document.body.style.paddingRight = '';
	                _this4.setState({
	                    visible: false,
	                    transitionEnd: false,
	                    width: 0,
	                    height: 0,
	                    scaleX: _this4.props.defaultScale,
	                    scaleY: _this4.props.defaultScale,
	                    rotate: 1,
	                    imageWidth: 0,
	                    imageHeight: 0,
	                    loadFailed: false
	                });
	            }, transitionDuration);
	            return;
	        }
	        if (this.props.activeIndex !== prevProps.activeIndex) {
	            this.handleChangeImg(this.props.activeIndex);
	            return;
	        }
	    };

	    ViewerCore.prototype.render = function render() {
	        var activeImg = {
	            src: '',
	            altSrc: '',
	            alt: ''
	        };
	        var zIndex = 1000;
	        if (this.props.zIndex) {
	            zIndex = this.props.zIndex;
	        }
	        var viewerStryle = {
	            opacity: this.state.visible ? 1 : 0
	        };
	        if (!this.state.visible && this.state.transitionEnd) {
	            viewerStryle.display = 'none';
	        }
	        if (!this.state.visible && this.state.visibleStart) {
	            viewerStryle.display = 'block';
	        }
	        if (this.state.visible && this.state.transitionEnd) {
	            activeImg = this.getActiveImage();
	        }
	        var className = this.prefixCls + ' ' + this.prefixCls + '-transition';
	        if (this.props.container) {
	            className += ' ' + this.prefixCls + '-inline';
	        }
	        return React.createElement(
	            'div',
	            { ref: 'viewerCore', className: className, style: viewerStryle },
	            React.createElement('div', { className: this.prefixCls + '-mask', style: { zIndex: zIndex } }),
	            this.props.noClose || React.createElement(
	                'div',
	                { className: this.prefixCls + '-close ' + this.prefixCls + '-btn', onClick: this.handleClose, style: { zIndex: zIndex + 10 } },
	                React.createElement(_Icon2.default, { type: _Icon.ActionType.close })
	            ),
	            React.createElement(_ViewerCanvas2.default, { prefixCls: this.prefixCls, imgSrc: this.state.loadFailed ? this.props.defaultImg.src || activeImg.src : activeImg.src, visible: this.props.visible, width: this.state.width, height: this.state.height, top: this.state.top, left: this.state.left, rotate: this.state.rotate, onChangeImgState: this.handleChangeImgState, onResize: this.handleResize, zIndex: zIndex + 5, scaleX: this.state.scaleX, scaleY: this.state.scaleY, loading: this.state.loading, drag: this.props.drag, container: this.props.container, onCanvasMouseDown: this.handleCanvasMouseDown }),
	            this.props.noFooter || React.createElement(
	                'div',
	                { className: this.prefixCls + '-footer', style: { zIndex: zIndex + 5 } },
	                this.props.noToolbar || React.createElement(_ViewerToolbar2.default, { prefixCls: this.prefixCls, onAction: this.handleAction, alt: activeImg.alt, width: this.state.imageWidth, height: this.state.imageHeight, attribute: this.props.attribute, zoomable: this.props.zoomable, rotatable: this.props.rotatable, scalable: this.props.scalable, changeable: this.props.changeable, downloadable: this.props.downloadable, noImgDetails: this.props.noImgDetails, toolbars: this.props.customToolbar(_ViewerToolbar.defaultToolbars) }),
	                this.props.noNavbar || React.createElement(_ViewerNav2.default, { prefixCls: this.prefixCls, images: this.props.images, activeIndex: this.state.activeIndex, onChangeImg: this.handleChangeImg })
	            )
	        );
	    };

	    return ViewerCore;
	}(React.Component);

	exports.default = ViewerCore;

	ViewerCore.defaultProps = {
	    visible: false,
	    onClose: noop,
	    images: [],
	    activeIndex: 0,
	    zIndex: 1000,
	    drag: true,
	    attribute: true,
	    zoomable: true,
	    rotatable: true,
	    scalable: true,
	    onMaskClick: noop,
	    changeable: true,
	    customToolbar: function customToolbar(toolbars) {
	        return toolbars;
	    },
	    zoomSpeed: .05,
	    disableKeyboardSupport: false,
	    noResetZoomAfterChange: false,
	    noLimitInitializationSize: false,
	    defaultScale: 1,
	    loop: true,
	    disableMouseZoom: false
	};
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ViewerNav = function (_React$Component) {
	    _inherits(ViewerNav, _React$Component);

	    function ViewerNav() {
	        _classCallCheck(this, ViewerNav);

	        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));

	        _this.handleChangeImg = function (newIndex) {
	            if (_this.props.activeIndex === newIndex) {
	                return;
	            }
	            _this.props.onChangeImg(newIndex);
	        };
	        return _this;
	    }

	    ViewerNav.prototype.render = function render() {
	        var _this2 = this;

	        var marginLeft = 'calc(50% - ' + (this.props.activeIndex + 1) + ' * 109px)';
	        var listStyle = {
	            marginLeft: marginLeft
	        };
	        return React.createElement(
	            'div',
	            { className: this.props.prefixCls + '-navbar' },
	            React.createElement(
	                'ul',
	                { className: this.props.prefixCls + '-list ' + this.props.prefixCls + '-list-transition', style: listStyle },
	                this.props.images.map(function (item, index) {
	                    return React.createElement(
	                        'li',
	                        { key: index, className: index === _this2.props.activeIndex ? 'active' : '', onClick: function onClick() {
	                                _this2.handleChangeImg(index);
	                            } },
	                        React.createElement('img', { src: !!item.thumbSrc ? item.thumbSrc : item.src, alt: item.alt })
	                    );
	                })
	            )
	        );
	    };

	    return ViewerNav;
	}(React.Component);

	exports.default = ViewerNav;

	ViewerNav.defaultProps = {
	    activeIndex: 0
	};
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.defaultToolbars = undefined;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _Icon = __webpack_require__(2);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultToolbars = exports.defaultToolbars = [{
	    key: 'zoomIn',
	    actionType: _Icon.ActionType.zoomIn
	}, {
	    key: 'zoomOut',
	    actionType: _Icon.ActionType.zoomOut
	}, {
	    key: 'prev',
	    actionType: _Icon.ActionType.prev
	}, {
	    key: 'reset',
	    actionType: _Icon.ActionType.reset
	}, {
	    key: 'next',
	    actionType: _Icon.ActionType.next
	}, {
	    key: 'rotateLeft',
	    actionType: _Icon.ActionType.rotateLeft
	}, {
	    key: 'rotateRight',
	    actionType: _Icon.ActionType.rotateRight
	}, {
	    key: 'scaleX',
	    actionType: _Icon.ActionType.scaleX
	}, {
	    key: 'scaleY',
	    actionType: _Icon.ActionType.scaleY
	}, {
	    key: 'download',
	    actionType: _Icon.ActionType.download
	}];
	function deleteToolbarFromKey(toolbars, keys) {
	    var targetToolbar = toolbars.filter(function (item) {
	        return keys.indexOf(item.key) < 0;
	    });
	    return targetToolbar;
	}

	var ViewerToolbar = function (_React$Component) {
	    _inherits(ViewerToolbar, _React$Component);

	    function ViewerToolbar() {
	        _classCallCheck(this, ViewerToolbar);

	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	        _this.renderAction = function (config) {
	            var content = null;
	            // default toolbar
	            if (typeof _Icon.ActionType[config.actionType] !== 'undefined') {
	                content = React.createElement(_Icon2.default, { type: config.actionType });
	            }
	            // extra toolbar
	            if (config.render) {
	                content = config.render;
	            }
	            return React.createElement(
	                'li',
	                { key: config.key, className: _this.props.prefixCls + '-btn', onClick: function onClick() {
	                        _this.handleAction(config);
	                    }, 'data-key': config.key },
	                content
	            );
	        };
	        return _this;
	    }

	    ViewerToolbar.prototype.handleAction = function handleAction(config) {
	        this.props.onAction(config);
	    };

	    ViewerToolbar.prototype.render = function render() {
	        var _this2 = this;

	        var attributeNode = this.props.attribute ? React.createElement(
	            'p',
	            { className: this.props.prefixCls + '-attribute' },
	            this.props.alt && '' + this.props.alt,
	            this.props.noImgDetails || React.createElement(
	                'span',
	                { className: this.props.prefixCls + '-img-details' },
	                '(' + this.props.width + ' x ' + this.props.height + ')'
	            )
	        ) : null;
	        var toolbars = this.props.toolbars;
	        if (!this.props.zoomable) {
	            toolbars = deleteToolbarFromKey(toolbars, ['zoomIn', 'zoomOut']);
	        }
	        if (!this.props.changeable) {
	            toolbars = deleteToolbarFromKey(toolbars, ['prev', 'next']);
	        }
	        if (!this.props.rotatable) {
	            toolbars = deleteToolbarFromKey(toolbars, ['rotateLeft', 'rotateRight']);
	        }
	        if (!this.props.scalable) {
	            toolbars = deleteToolbarFromKey(toolbars, ['scaleX', 'scaleY']);
	        }
	        if (!this.props.downloadable) {
	            toolbars = deleteToolbarFromKey(toolbars, ['download']);
	        }
	        return React.createElement(
	            'div',
	            null,
	            attributeNode,
	            React.createElement(
	                'ul',
	                { className: this.props.prefixCls + '-toolbar' },
	                toolbars.map(function (item) {
	                    return _this2.renderAction(item);
	                })
	            )
	        );
	    };

	    return ViewerToolbar;
	}(React.Component);

	exports.default = ViewerToolbar;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FOOTER_HEIGHT = 84;
	exports.FOOTER_HEIGHT = FOOTER_HEIGHT;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ })
/******/ ])
});
;