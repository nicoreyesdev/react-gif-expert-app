(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(8),c=n.n(r),i=(n(15),n(2)),s=n(10),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",placeholder:"Busca tu Gif",value:c,onChange:function(t){o(t.target.value)}})})},j=n(7),l=n(6),d=n.n(l),f=n(9),b=function(){var t=Object(f.a)(d.a.mark((function t(e){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=6j7amGKYDTVas2lzIwi59DtkEEsowk7Q"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInLeft",children:[Object(u.jsx)("img",{alt:e,src:n}),Object(u.jsx)("p",{children:e.length<20?e:e.substr(0,20)+"..."})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),Object(u.jsx)("div",{className:"card-grid animate__animated animate__fadeInLeft",children:r.map((function(t){return Object(a.createElement)(p,Object(j.a)(Object(j.a)({},t),{},{key:t.id}))}))})]})},O=function(){var t=Object(a.useState)(["Dragon Ball Z"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"title",children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(m,{category:t},t)}))})]})};c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c6ad44e6.chunk.js.map