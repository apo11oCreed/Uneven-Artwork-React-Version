import{j as l,r as o,R as h,a as w}from"./vendor.2f996a95.js";const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function u(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(s){if(s.ep)return;s.ep=!0;const r=u(s);fetch(s.href,r)}};f();const e=l.exports.jsx,a=l.exports.jsxs,i=l.exports.Fragment;class p extends o.exports.Component{constructor(t){super(t);this.handleClick=this.handleClick.bind(this)}handleClick(){const t=this.props.displayText;console.log(t==="Portfolio"?"You just clicked on Portfolio":"You did NOT click on Portfolio")}render(){return e(i,{children:e("li",{children:e("a",{href:"#",onClick:this.handleClick,className:"tw-underline tw-whitespace-nowrap",children:this.props.displayText})})})}}class m extends o.exports.Component{constructor(t){super(t)}render(){return e(i,{children:e("nav",{className:this.props.className,children:a("ul",{children:[e(p,{displayText:"Portfolio"}),e(p,{displayText:"About Natalie"})]})})})}}class x extends o.exports.Component{constructor(t){super(t)}render(){return e(i,{children:a("header",{className:"tw-container tw-mx-auto",children:[e("h1",{className:"tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 tw-tracking-[1vw] tw-text-[7vw] md:tw-text-7xl tw-animate-h1Spread",children:"Natalie Correia"}),e(m,{className:"tw-main tw-w-fit tw-fixed tw-right-[2rem] tw-top-[2rem]"})]})})}}class g extends o.exports.Component{constructor(t){super(t);this.state={showComponent:""}}render(){return e(i,{children:a("div",{className:"gallery",children:[e("div",{className:"img",src:"https://picsum.photos/200/300"}),e("div",{className:"img",src:"https://picsum.photos/200/300"}),e("div",{className:"img",src:"https://picsum.photos/200/300"}),e("div",{className:"img",src:"https://picsum.photos/200/300"}),e("div",{className:"img",src:"https://picsum.photos/200/300"}),e("div",{className:"img",src:"https://picsum.photos/200/300"})]})})}}class y extends o.exports.Component{constructor(t){super(t);this.state={showComponent:""}}render(){return e(i,{children:a("main",{children:[e("h2",{className:"tw-container tw-mx-auto tw-text-pink tw-font-serif tw-border-4 tw-rounded-full tw-hover:tw-bg-blue-700 tw-m-10",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e(g,{})]})})}}class N extends o.exports.Component{constructor(t){super(t)}render(){return e(i,{children:e("p",{className:"tw-text-sm",children:"\xA92022 Natalie Correia"})})}}class v extends o.exports.Component{constructor(t){super(t)}render(){return e(i,{children:e("footer",{className:"tw-w-full tw-fixed tw-bottom-0 tw-py-2",children:a("div",{className:"tw-container tw-mx-auto tw-flex tw-justify-center tw-items-center",children:[e(N,{}),e(m,{className:"tw-footer"})]})})})}}function b(){return o.exports.useState(0),a("div",{className:"tw-bg-left-top tw-bg-cover",children:[e(x,{}),e(y,{}),e(v,{})]})}h.render(e(w.StrictMode,{children:e(b,{})}),document.getElementById("root"));
