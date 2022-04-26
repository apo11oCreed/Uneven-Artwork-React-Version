import{j as m,r as o,R as f,a as x}from"./vendor-f548af83.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}};b();const e=m.exports.jsx,i=m.exports.jsxs,c=m.exports.Fragment;class h extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:e("li",{className:this.props.icon,children:e("a",{href:"#",onClick:()=>this.props.passToMenuLink(this.props.displayText),className:"tw-underline tw-whitespace-nowrap",children:this.props.displayText})})})}}class y extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:e("nav",{className:this.props.className,children:i("ul",{children:[e(h,{displayText:"Home",icon:"home-link",passToMenuLink:this.props.passToMenu}),e(h,{displayText:"Portfolio",passToMenuLink:this.props.passToMenu}),e(h,{displayText:"About Natalie",passToMenuLink:this.props.passToMenu})]})})})}}class v extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:i("header",{className:"tw-container tw-mx-auto",children:[e("h1",{className:"tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 md:tw-tracking-[1vw] tw-text-[7vw] md:tw-text-[7.2rem] tw-animate-h1Spread tw-leading-none",children:this.props.siteName}),e(y,{passToMenu:this.props.getLinkText,className:"tw-main tw-w-fit tw-fixed tw-right-0 tw-top-[1rem]"})]})})}}var p="/assets/img/022222_ncorreia_illustration_colored-pencil-19abb4cd.jpg",u="/assets/img/040522_ncorreia_illustration_pencil-f3bbf89a.jpg",w="/assets/img/123121_ncorreia_reference-012f5d3f.jpeg",g="/assets/img/011822_ncorreia_flower-a6e084bc.jpeg";class N extends o.exports.Component{constructor(t){super(t);this.state={imageIsReady:!1},this.imgArray=[p,u,w,g],this.imgQty=this.imgArray.length,this.counter=0,this.incrementCounter=this.incrementCounter.bind(this)}componentDidMount(){for(let t=0;t<this.imgArray.length;t++){const a=new Image;a.src=this.imgArray[t],a.complete?this.incrementCounter():a.addEventListener("load",this.incrementCounter,!1)}}incrementCounter(){this.counter++,this.counter===this.imgQty&&this.setState({imageIsReady:!0})}render(){const{imageIsReady:t}=this.state;return t?i("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:[e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:p,alt:"Mixed media of reference"})})}),e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:u,alt:"Pencil illustration"})})}),e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:w,alt:"Mixed media of reference"})})}),e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:g,alt:"Painting of Sunflower"})})})]}):e("p",{className:"tw-text-center",children:"Loading..."})}}class k extends o.exports.Component{constructor(t){super(t);this.state={showComponent:""}}render(){return e("section",{className:"gallery",children:e(N,{})})}}class T extends o.exports.Component{constructor(t){super(t)}render(){return i("section",{className:"about",children:[e("h2",{className:"tw-text-black tw-font-bold",children:"About Me"}),e("p",{children:"I have always stood up for the weak, voiceless, and less fortunate at home and in my community. It is important that people extend compassion and understanding to allow others to live in peace and without fear. It is also important that people give of themselves to support those that are mentally or physically impaired. I find reward in these opportunities because they make me feel good and build on my relationship with others."}),e("p",{children:"My brother is Autistic and it is my duty to see that he is protected and given a solid chance at being himself. Sometimes, he screams out of frustration and I know that is his way of saying help. I grew up with him and have learned what triggers these moments and how to calm him down. I do not hesitate to attend to him because I can only imagine how alone he must feel sometimes when all he can do is scream and not speak about what is wrong. I feel, at times, that my help has influenced him to be compassionate to others around him as well - his teachers say he cares very much for his friends."}),e("p",{children:"I also care for my environment and living creatures big and small. My first pet was a fish named Sapphire. Since then, I have had a snake, a group of geckos, and, now, a room full of plants. There isn't a day that goes by that I do not think about the well-being of the natural world. In fact, one of my favorite things to do is go to Lowes to rescue the plants there. I say \u2018rescue\u2019 because I have learned to bring plants back to full health. My mother even gives me her plants and in a few weeks they are thriving. Caring for nature has given me confidence in my skills and comfort in knowing I can make a difference."})]})}}class C extends o.exports.Component{constructor(t){super(t)}render(){let t;switch(this.props.page){case"Portfolio":t=e(k,{});break;case"About Natalie":t=e(T,{});break;default:t="";break}return e("main",{className:"tw-container tw-mx-auto",children:t})}}class I extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:e("p",{children:"\xA92022 Natalie Correia"})})}}class L extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:i("footer",{className:"tw-w-full tw-fixed tw-bottom-0 ",children:[i("div",{className:"tw-mx-auto tw-container tw-flex tw-z-10 tw-justify-evenly",children:[e("span",{className:"bg-blue tw-w-full tw-h-1"}),e("span",{className:"bg-green tw-w-full tw-h-1"}),e("span",{className:"bg-pink tw-w-full tw-h-1"}),e("span",{className:"bg-orange tw-w-full tw-h-1"}),e("span",{className:"bg-dark-orange tw-w-full tw-h-1"})]}),i("div",{className:"tw-container tw-mx-auto tw-flex tw-justify-center tw-items-center",children:[e(I,{}),e(y,{passToMenu:this.props.getLinkText,className:"tw-footer"})]})]})})}}class M extends f.Component{constructor(){super();this.state={page:"Home"},this.updatePageState=this.updatePageState.bind(this)}updatePageState(t){const a=document.querySelector("h1");if(a.classList.contains("moveH1ToTop"))this.setState({page:t});else{const l=a.animate([{bottom:"calc(100% - 6rem)"}],500,()=>{});a.classList.add("tw-will-change-auto"),l.play(),l.addEventListener("finish",()=>{a.classList.remove("tw-bottom-1/2"),a.classList.remove("tw-will-change-auto"),a.classList.add("moveH1ToTop"),this.setState({page:t})})}}render(){return i("div",{className:"tw-bg-left-top tw-bg-cover",children:[e(v,{siteName:"Natalie Correia",getLinkText:this.updatePageState}),e(C,{page:this.state.page}),e(L,{getLinkText:this.updatePageState})]})}}x.render(e(f.StrictMode,{children:e(M,{})}),document.getElementById("root"));