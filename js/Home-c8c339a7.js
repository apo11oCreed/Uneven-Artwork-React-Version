import{r as n,j as l,a as e}from"./vendor-1e2286d0.js";function o({siteName:a}){const i=n.exports.useRef(),r=()=>{const t=i.current,s=t.animate([{letterSpacing:"1rem"}],1e3,()=>{});t.classList.add("tw-will-change-auto"),s.play(),s.onfinish=()=>{t.classList.remove("tw-will-change-auto"),t.classList.add("titleTextSpread")}};return n.exports.useEffect(()=>{r()},[]),l("div",{id:"titleAnimate",ref:i,className:"tw-text-red tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 md:tw-tracking-[1vw] tw-text-[7vw] md:tw-text-[7.2rem] tw-leading-none",children:[a,e("span",{className:"tw-block md:tw-text-[3.6rem]",children:"Portfolio Site"})]})}function w(a){return e("section",{className:"home",children:e(o,{siteName:"Natalie Correia"})})}export{w as default};
//# sourceMappingURL=Home-c8c339a7.js.map
