exports.id = 0;
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(15);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(21);

// EXTERNAL MODULE: ../node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(52);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/server.js
var server = __webpack_require__(56);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(88);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.create.js
var es_object_create = __webpack_require__(90);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(93);

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(94);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(57);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./components/Hydrator.js
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}


function interopDefault(mod){
return mod&&mod["default"]||mod;
}

function ServerHydrator(_ref){var load=_ref.load,props=_objectWithoutPropertiesLoose(_ref,["load"]);
var Child=interopDefault(load());

return/*#__PURE__*/(
react_default.a.createElement("section",null,/*#__PURE__*/
react_default.a.createElement(Child,props)));


}

var Hydrator_Hydrator=/*#__PURE__*/function(_React$Component){_inheritsLoose(Hydrator,_React$Component);function Hydrator(){return _React$Component.apply(this,arguments)||this;}var _proto=Hydrator.prototype;_proto.
shouldComponentUpdate=function shouldComponentUpdate(){
return false;
};_proto.

componentDidMount=function componentDidMount(){var _this=this;
new IntersectionObserver(/*#__PURE__*/function(){var _ref3=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2,obs){var entry,_this$props,load,props,Child;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:entry=_ref2[0];if(
entry.isIntersecting){_context.next=3;break;}return _context.abrupt("return");case 3:
obs.unobserve(_this.root);_this$props=

_this.props,load=_this$props.load,props=_objectWithoutPropertiesLoose(_this$props,["load"]);_context.t0=
interopDefault;_context.next=8;return load();case 8:_context.t1=_context.sent;Child=(0,_context.t0)(_context.t1);
setTimeout(function(){return react_dom_default.a.hydrate(/*#__PURE__*/react_default.a.createElement(Child,props),_this.root);},1000);case 11:case"end":return _context.stop();}}},_callee);}));return function(_x,_x2){return _ref3.apply(this,arguments);};}()).
observe(this.root);
};_proto.

render=function render(){var _this2=this;
return/*#__PURE__*/(
react_default.a.createElement("section",{
ref:function ref(c){return _this2.root=c;},
dangerouslySetInnerHTML:{__html:""},
suppressHydrationWarning:true}));


};return Hydrator;}(react_default.a.Component);
// CONCATENATED MODULE: ./components/App.js



var App_load=function load(){return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 98));};
var App_Hydrator=Hydrator_Hydrator;

if(true){
App_Hydrator=ServerHydrator;
App_load=function load(){return __webpack_require__(98);};
}

function App(){
return/*#__PURE__*/(
react_default.a.createElement("div",{id:"app"},/*#__PURE__*/
react_default.a.createElement("div",{"class":"intro"},/*#__PURE__*/
react_default.a.createElement("div",{"class":"hero"}),/*#__PURE__*/
react_default.a.createElement("p",null,"This is an example of how server-side rendered React can enable",
" ",/*#__PURE__*/
react_default.a.createElement("strong",null,"progressively hydrated")," experiences."),/*#__PURE__*/

react_default.a.createElement("p",null,/*#__PURE__*/
react_default.a.createElement("strong",null,"Scroll down.")," The flash of color you see is an indicator of JavaScript being fetched without any direct change to the UI.")),/*#__PURE__*/




react_default.a.createElement(App_Hydrator,{load:App_load})));


}
// CONCATENATED MODULE: ./server.js
function server_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function server_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){server_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){server_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}



/* harmony default export */ var server_0 = __webpack_exports__["default"] = (/*#__PURE__*/server_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",Object(server["renderToNodeStream"])(/*#__PURE__*/react_default.a.createElement(App,null)));case 1:case"end":return _context.stop();}}},_callee);})));

/***/ })

};
//# sourceMappingURL=0.86e3ae4581a921c9e183.hot-update.js.map