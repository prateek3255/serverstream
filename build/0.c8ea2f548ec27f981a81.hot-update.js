webpackHotUpdate(0,{52:function(e,n,t){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=t(54)},97:function(e,n,t){"use strict";t.r(n);var a,r=t(1),l=t.n(r),c=t(52),u=t.n(c);t(57),t(44),t(78),t(79),t(81);function i(){var e=function(){if("value"in(a=a||fetch("/api/users").then((function(e){return e.json()}))))return a.value;throw a.then((function(e){return a.value=e}))}();return l.a.createElement("div",{className:"stream"},e.map((function(e){return l.a.createElement(o,{profile:e})})))}function o(e){var n=e.profile;return l.a.createElement("div",{className:"profile"},l.a.createElement("h4",null,n.name),l.a.createElement("h5",null,n.username))}function f(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"Streaming SSR"))}var m=l.a.Suspense;function E(){return l.a.createElement("div",{id:"app"},l.a.createElement(f,null),l.a.createElement(m,{fallback:l.a.createElement("div",null,"loading")},new Array(100).fill().map((function(){return l.a.createElement(i,null)}))))}u.a.hydrate(l.a.createElement(E,null),window.approot)}});
//# sourceMappingURL=0.c8ea2f548ec27f981a81.hot-update.js.map