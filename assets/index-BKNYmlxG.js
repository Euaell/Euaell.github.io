import{r as a,a as h}from"./vendor-YsBxPMQB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=c(r);fetch(r.href,t)}})();var u={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=a,x=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,v=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function f(i,o,c){var s,r={},t=null,n=null;c!==void 0&&(t=""+c),o.key!==void 0&&(t=""+o.key),o.ref!==void 0&&(n=o.ref);for(s in o)y.call(o,s)&&!_.hasOwnProperty(s)&&(r[s]=o[s]);if(i&&i.defaultProps)for(s in o=i.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:x,type:i,key:t,ref:n,props:r,_owner:v.current}}l.Fragment=m;l.jsx=f;l.jsxs=f;u.exports=l;var e=u.exports,p,d=h;p=d.createRoot,d.hydrateRoot;function b(){return e.jsxs("header",{children:[e.jsx("h1",{children:"Euael Mekonen Eshete"}),e.jsxs("nav",{children:[e.jsx("a",{href:"#about",children:"About"}),e.jsx("a",{href:"#projects",children:"Projects"}),e.jsx("a",{href:"#contact",children:"Contact"})]})]})}function E(){return e.jsxs("section",{id:"about",children:[e.jsx("h2",{children:"About Me"}),e.jsx("p",{children:"Write a brief description about yourself."})]})}function O(){return e.jsxs("section",{id:"projects",children:[e.jsx("h2",{children:"Projects"}),e.jsxs("div",{className:"project-list",children:[e.jsxs("div",{className:"project",children:[e.jsx("h3",{children:"Project 1"}),e.jsx("p",{children:"Brief description of project 1."})]}),e.jsxs("div",{className:"project",children:[e.jsx("h3",{children:"Project 2"}),e.jsx("p",{children:"Brief description of project 2."})]})]})]})}function P(){return e.jsxs("section",{id:"contact",children:[e.jsx("h2",{children:"Contact"}),e.jsx("p",{children:"Email: your-email@example.com"})]})}function R(){return e.jsxs("div",{className:"App",children:[e.jsx(b,{}),e.jsxs("main",{children:[e.jsx(E,{}),e.jsx(O,{}),e.jsx(P,{})]})]})}p(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(R,{})}));
