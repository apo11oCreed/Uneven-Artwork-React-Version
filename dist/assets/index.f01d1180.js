import{j as c,r as o,R as h,a as w}from"./vendor.2f996a95.js";const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function m(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(r){if(r.ep)return;r.ep=!0;const n=m(r);fetch(r.href,n)}};f();const e=c.exports.jsx,l=c.exports.jsxs,s=c.exports.Fragment;class u extends o.exports.Component{constructor(t){super(t);this.handleClick=this.handleClick.bind(this)}handleClick(){const t=this.props.displayText;console.log(t==="Portfolio"?"You just clicked on Portfolio":"You did NOT click on Portfolio")}render(){return e(s,{children:e("li",{children:e("a",{href:"#",onClick:this.handleClick,className:"tw-underline tw-whitespace-nowrap",children:this.props.displayText})})})}}class p extends o.exports.Component{constructor(t){super(t)}render(){return e(s,{children:e("nav",{className:this.props.className,children:l("ul",{children:[e(u,{displayText:"Portfolio"}),e(u,{displayText:"About Natalie"})]})})})}}class x extends o.exports.Component{constructor(t){super(t)}render(){return e(s,{children:l("header",{className:"tw-container tw-mx-auto",children:[e("h1",{className:"tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 tw-tracking-[1rem] tw-text-[1.5rem] md:tw-text-7xl",children:"Natalie Correia"}),e(p,{className:"tw-main tw-w-fit tw-fixed tw-right-[2rem] tw-top-[2rem]"})]})})}}function g(){return e(s,{children:e("main",{children:e("h2",{className:"tw-container tw-mx-auto tw-text-pink tw-font-serif tw-border-4 tw-rounded-full tw-hover:tw-bg-blue-700 tw-m-10",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})})}class y extends o.exports.Component{constructor(t){super(t)}render(){return e(s,{children:e("p",{className:"tw-text-sm",children:"\xA92022 Natalie Correia"})})}}class b extends o.exports.Component{constructor(t){super(t)}render(){return e(s,{children:e("footer",{className:"tw-w-full tw-fixed tw-bottom-0 tw-py-2",children:l("div",{className:"tw-container tw-mx-auto tw-flex tw-justify-center tw-items-center",children:[e(y,{}),e(p,{className:"tw-footer"})]})})})}}function N(){return o.exports.useState(0),l("div",{className:"tw-bg-left-top tw-bg-cover",children:[e(x,{}),e(g,{}),e(b,{})]})}h.render(e(w.StrictMode,{children:e(N,{})}),document.getElementById("root"));
