(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},9587:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(5893),i=t(9008),a=t(3259),c=t.n(a),s=t(3508),l=t(1496),o=t(4871),d=t(7357),u=t(4073),h=t(4267),m=t(5861),_=t(6447),f=t(3965),x=t(122),j=t(2023),p=t(9235),Z=t(7294),v=t(9331),y=t.n(v);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var N=(0,l.ZP)((function(e){e.expanded;var n=g(e,["expanded"]);return(0,r.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){b(e,n,t[n])}))}return e}({},n))}))((function(e){var n=e.theme;return{transform:e.expanded?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})}})),k=function(e){var n=e.data,t=e.links,i=(0,Z.useState)(!1),a=i[0],c=i[1];return(0,r.jsx)(d.Z,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(m.Z,{className:y().title,children:n.header}),n.dates||n.role?(0,r.jsxs)(_.Z,{className:y().metadata,spacing:.5,children:[n.dates?(0,r.jsx)(m.Z,{variant:"caption",children:n.dates.join(" \u2013 ")}):null,n.role?(0,r.jsx)(m.Z,{variant:"caption",children:n.role}):null]}):null]}),n.picture?(0,r.jsx)(f.Z,{className:y().picture,component:"img",image:"images/cards/".concat(n.picture)}):null,(0,r.jsxs)(h.Z,{className:y().content,children:[1===n.content.length?n.content[0]:(0,r.jsx)("ul",{className:y().contentlist,children:n.content.map((function(e,n){return(0,r.jsx)("li",{children:e},n)}))}),t&&n.link?(0,r.jsx)(x.Z,{padding:"0.5rem",color:"inherit",href:n.link,children:"GitHub "}):null]}),t&&n.hidden_content?(0,r.jsx)(j.Z,{children:(0,r.jsx)(N,{className:y().expander,expanded:a,onClick:function(){c(!a)},children:(0,r.jsx)(s.Z,{})})}):null,n.hidden_content?(0,r.jsx)(p.Z,{in:a,children:(0,r.jsx)(h.Z,{children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.hidden_content}})})}):null]})})},O=t(1927),w=t(1664),C=t.n(w),P=function(e){var n=e.data,t=e.theme,i=e.links;return(0,r.jsxs)(O.Z,{theme:t,children:[(0,r.jsx)("header",{children:(0,r.jsx)(C(),{href:"/printable",as:"".concat("","/printable"),passHref:!0,children:(0,r.jsx)("a",{style:{visibility:i?"visible":"hidden"},children:"Printer-friendly version"})})}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsx)(m.Z,{className:c().title,children:n.title}),i?(0,r.jsx)(_.Z,{direction:"row",spacing:1,divider:(0,r.jsx)(m.Z,{children:" \u2022 "}),children:n.links.map((function(e){return(0,r.jsx)(C(),{href:e.url,children:e.name},e.url)}))}):null,(0,r.jsx)(m.Z,{className:c().summary,children:n.summary}),(0,r.jsx)(_.Z,{className:c().column,spacing:0,children:n.sections.map((function(e,n){return(0,r.jsx)(S,{section:e,links:i},e.header)}))})]}),(0,r.jsx)("footer",{className:c().footer,children:(0,r.jsxs)(_.Z,{spacing:1,alignItems:"center",children:[(0,r.jsx)(x.Z,{href:"mailto:".concat(n.mail),color:"inherit",underline:i?"always":"none",children:n.mail}),(0,r.jsx)(m.Z,{children:n.location})]})})]})},S=function(e){var n=e.section,t=e.links;return(0,r.jsxs)(_.Z,{children:[(0,r.jsx)(m.Z,{variant:"h4",className:c().sectiontitle,children:n.header}),n.elements.map((function(e,n){return(0,r.jsx)(d.Z,{className:c().element,children:(0,r.jsx)(k,{data:e,links:t})},n)}))]})},E=function(e){var n=e.data,t=e.theme,a=e.links;return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:n.title})}),(0,r.jsx)(P,{data:n,theme:t,links:a})]})}},4186:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var r=t(5893),i=t(9587),a=(0,t(8239).Z)({typography:{h1:{fontSize:11}},components:{MuiCard:{styleOverrides:{root:{backgroundColor:"#d5dae3"}}}}}),c=!0;n.default=function(e){var n=e.data;return(0,r.jsx)(i.Z,{data:n,theme:a,links:!0})}},3259:function(e){e.exports={container:"CV_container__RF3tG",main:"CV_main__cx4BV",summary:"CV_summary__MrUzW",footer:"CV_footer__gtK1M",title:"CV_title__Pt_Nn",sectiontitle:"CV_sectiontitle__YxKRI",column:"CV_column__EdhMi",element:"CV_element__n60MI"}},9331:function(e){e.exports={title:"card_title__tmXTj",expander:"card_expander__ycuwr",metadata:"card_metadata__i1_4h",content:"card_content__YeYI3",picture:"card_picture__2rl_s",contentlist:"card_contentlist__fEPuS"}}},function(e){e.O(0,[493,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);