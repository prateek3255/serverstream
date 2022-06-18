exports.id = 0;
exports.modules = {

/***/ 105:
false,

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(85);


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(10);
var fill = __webpack_require__(58);
var addToUnscopables = __webpack_require__(90);

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(55);
var toAbsoluteIndex = __webpack_require__(67);
var toLength = __webpack_require__(24);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);
var create = __webpack_require__(91);
var definePropertyModule = __webpack_require__(8);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ssr; });

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(88);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(93);

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
var server_default = /*#__PURE__*/__webpack_require__.n(server);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__(57);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(99);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(104);

// CONCATENATED MODULE: ./components/Stream.js


var r;

function getData(){
if(true){
return require("../../data.json").map(function(user){return{
id:user.login.uuid,
username:user.login.username,
name:user.name.first+" "+user.name.last};});

}else{}
}

function Stream(){
var items=getData();

return/*#__PURE__*/(
react_default.a.createElement("div",{className:"stream"},
items.map(function(profile){return/*#__PURE__*/(
react_default.a.createElement(Profile,{profile:profile}));})));



}

function Profile(_ref){var profile=_ref.profile;
var base=react_default.a.useRef();

return/*#__PURE__*/(
react_default.a.createElement("div",{className:"list-group-item",ref:base},/*#__PURE__*/
react_default.a.createElement("div",{className:"avatar"},/*#__PURE__*/
react_default.a.createElement("img",{alt:"avatar",src:profile.avatar,loading:"lazy"})),/*#__PURE__*/

react_default.a.createElement("div",{className:"details"},/*#__PURE__*/
react_default.a.createElement("div",{className:"info"},/*#__PURE__*/
react_default.a.createElement("p",{className:"name"},profile.name),/*#__PURE__*/
react_default.a.createElement("p",{className:"location"},profile.username)))));




}
// CONCATENATED MODULE: ./components/App.js



var Suspense=
 true?function(p){return p.children;}:undefined;

function App(){
return/*#__PURE__*/(
react_default.a.createElement("div",{id:"app"},/*#__PURE__*/
react_default.a.createElement(Suspense,{fallback:/*#__PURE__*/react_default.a.createElement("div",null,"loading")},
new Array(100).fill().map(function(){return/*#__PURE__*/(
react_default.a.createElement(Stream,null));}))));




}
// CONCATENATED MODULE: ./server.js
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}



function ssr(_x){return _ssr.apply(this,arguments);}function _ssr(){_ssr=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref){var streaming,props;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:streaming=_ref.streaming,props=_objectWithoutPropertiesLoose(_ref,["streaming"]);if(!
streaming){_context.next=5;break;}return _context.abrupt("return",
server_default.a.renderToNodeStream(/*#__PURE__*/react_default.a.createElement(App,props)));case 5:return _context.abrupt("return",

server_default.a.renderToString(/*#__PURE__*/react_default.a.createElement(App,props)));case 6:case"end":return _context.stop();}}},_callee);}));return _ssr.apply(this,arguments);}

/***/ }),

/***/ 95:
false,

/***/ 96:
false,

/***/ 97:
false,

/***/ 98:
false

};
//# sourceMappingURL=0.8849e0c1524e354841c7.hot-update.js.map