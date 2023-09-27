import{d as _,u as d,a as p,c as m,b as h,e as n,f as t,t as s,g as a,F as u,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as k,m as N,_ as P}from"./index-5a796556.js";import{N as w}from"./NoteDisplay-6168efcf.js";const D={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:g(a(N))},[t("div",D,[t("div",V,[t("h1",L,s(a(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(a(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),H])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",j)):k("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","C:/Users/19137/OneDrive/Desktop/Presentation_0908/0908_pre/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
