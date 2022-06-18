exports.id = 0;
exports.modules = {

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
name:user.name.first+" "+user.name.last,
avatar:user.picture.medium};});

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
react_default.a.createElement(Suspense,{fallback:/*#__PURE__*/react_default.a.createElement("div",null,"loading")},/*#__PURE__*/
react_default.a.createElement(Stream,null))));



}
// CONCATENATED MODULE: ./server.js
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}



function ssr(_x){return _ssr.apply(this,arguments);}function _ssr(){_ssr=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref){var streaming,props;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:streaming=_ref.streaming,props=_objectWithoutPropertiesLoose(_ref,["streaming"]);if(!
streaming){_context.next=5;break;}return _context.abrupt("return",
server_default.a.renderToNodeStream(/*#__PURE__*/react_default.a.createElement(App,props)));case 5:return _context.abrupt("return",

server_default.a.renderToString(/*#__PURE__*/react_default.a.createElement(App,props)));case 6:case"end":return _context.stop();}}},_callee);}));return _ssr.apply(this,arguments);}

/***/ })

};
//# sourceMappingURL=0.ac208e70881a6f522a22.hot-update.js.map