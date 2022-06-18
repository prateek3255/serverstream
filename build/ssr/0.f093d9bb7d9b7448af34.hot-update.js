exports.id = 0;
exports.modules = {

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(96);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(100);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(61);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(113);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(114);

// EXTERNAL MODULE: ../node_modules/express/index.js
var express = __webpack_require__(50);
var express_default = /*#__PURE__*/__webpack_require__.n(express);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(23);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/server.js
var server = __webpack_require__(95);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__(195);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(202);

// CONCATENATED MODULE: ./App.js


var App_App=function App(){
return new Array(5000).fill(0).map(function(x,i){return/*#__PURE__*/react_default.a.createElement("h1",{key:i},"Haha nice");});
};

/* harmony default export */ var App_0 = (App_App);
// CONCATENATED MODULE: ./server.js






var PORT=process.env.PORT||3000;

var html=external_fs_default.a.readFileSync("dist/index.html").toString();

var parts=html.split("not rendered");

var app=express_default()();

app.use("/dist",express_default.a["static"]("dist"));
app.use(function(req,res){
res.write(parts[0]);
var reactMarkup=/*#__PURE__*/react_default.a.createElement(App_0,null);

var stream=Object(server["renderToNodeStream"])(reactMarkup);
stream.pipe(
res,
{end:false});

stream.on("end",function(){
res.write(parts[1]);
res.end();
});
});

console.log("listening on "+PORT);
app.listen(PORT);

/***/ })

};
//# sourceMappingURL=0.f093d9bb7d9b7448af34.hot-update.js.map