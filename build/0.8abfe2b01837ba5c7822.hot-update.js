webpackHotUpdate(0,{52:function(e,n,t){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=t(54)},97:function(e,n,t){"use strict";t.r(n);var a,r=t(1),c=t.n(r),l=t(52);t(57),t(44),t(78),t(79),t(81);function u(){var e=function(){if("value"in(a=a||fetch("/api/users").then((function(e){return e.json()}))))return a.value;throw a.then((function(e){return a.value=e}))}();return c.a.createElement("div",{className:"stream"},e.map((function(e){return c.a.createElement(i,{profile:e})})))}function i(e){var n=e.profile;return c.a.createElement("div",{className:"profile"},c.a.createElement("h4",null,n.name),c.a.createElement("h5",null,n.username))}function o(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"Streaming SSR"))}var f=c.a.Suspense;function m(){return c.a.createElement("div",{id:"app"},c.a.createElement(o,null),c.a.createElement(f,{fallback:c.a.createElement("div",null,"loading")},new Array(100).fill().map((function(){return c.a.createElement(u,null)}))))}Object(l.hydrate)(c.a.createElement(m,null),document.getElementById("root"))}});
//# sourceMappingURL=0.8abfe2b01837ba5c7822.hot-update.js.map