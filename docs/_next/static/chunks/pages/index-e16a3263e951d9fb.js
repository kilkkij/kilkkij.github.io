(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},9587:function(n,e,t){"use strict";t.d(e,{Z:function(){return H}});var r=t(5893),i=t(9008),s=t(7160),a=t.n(s),l=t(3508),o=t(2110),c=t(4871),d=t(4073),u=t(4267),h=t(5861),m=t(6447),f=t(3965),x=t(122),j=t(2023),p=t(9235),_=t(7294);function g(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var b=(0,o.ZP)((function(n){n.expanded;var e=v(n,["expanded"]);return(0,r.jsx)(c.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){g(n,e,t[e])}))}return n}({},e))}))((function(n){var e=n.theme;return{transform:n.expanded?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})}})),Z=function(n){var e=n.data,t=n.links,i=(0,_.useState)(!1),s=i[0],a=i[1];return(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(h.Z,{sx:{fontSize:"1.2rem",marginBottom:"0.5rem"},children:e.header}),(0,r.jsxs)(m.Z,{spacing:.5,children:[e.dates?(0,r.jsx)(h.Z,{variant:"caption",children:e.dates.join(" \u2013 ")}):null,e.role?(0,r.jsx)(h.Z,{variant:"caption",children:e.role}):null]})]}),e.picture?(0,r.jsx)(f.Z,{style:{marginLeft:"3%",marginRight:"3%",marginBottom:"2%",width:"95%"},component:"img",image:"images/cards/".concat(e.picture)}):null,(0,r.jsxs)(u.Z,{sx:{padding:"0.5rem 1rem"},children:[1===e.content.length?e.content[0]:(0,r.jsx)("ul",{style:{margin:0},children:e.content.map((function(n,e){return(0,r.jsx)("li",{children:n},e)}))}),t&&e.link?(0,r.jsx)(x.Z,{padding:"0.5rem",color:"inherit",href:e.link,children:"GitHub "}):null]}),t&&e.hidden_content?(0,r.jsx)(j.Z,{children:(0,r.jsx)(b,{sx:{padding:"0"},expanded:s,onClick:function(){a(!s)},children:(0,r.jsx)(l.Z,{})})}):null,e.hidden_content?(0,r.jsx)(p.Z,{in:s,children:(0,r.jsx)(u.Z,{children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.hidden_content}})})}):null]})},y=t(1927),O=t(1664),k=t.n(O),w=function(n){var e=n.data,t=n.theme,i=n.links;return(0,r.jsxs)(y.Z,{theme:t,children:[(0,r.jsx)("header",{children:(0,r.jsx)(k(),{href:"/printable",as:"".concat("/resume","/printable"),passHref:!0,children:(0,r.jsx)("a",{style:{visibility:i?"visible":"hidden"},children:"Printer-friendly version"})})}),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsx)(h.Z,{className:a().title,children:e.title}),i?(0,r.jsx)(m.Z,{direction:"row",spacing:1,divider:(0,r.jsx)(h.Z,{children:" \u2022 "}),children:e.links.map((function(n){return(0,r.jsx)(k(),{href:n.url,children:n.name},n.url)}))}):null,(0,r.jsx)(h.Z,{sx:{padding:"1rem 0"},children:e.summary}),(0,r.jsx)(m.Z,{className:a().column,spacing:0,children:e.sections.map((function(n,e){return(0,r.jsx)(N,{section:n,links:i},n.header)}))})]}),(0,r.jsx)("footer",{className:a().footer,children:(0,r.jsxs)(m.Z,{spacing:1,alignItems:"center",children:[(0,r.jsx)(x.Z,{href:e.mail,color:"inherit",underline:i?"always":"none",children:e.mail}),(0,r.jsx)(h.Z,{children:e.location})]})})]})},N=function(n){var e=n.section,t=n.links;return(0,r.jsxs)(_.Fragment,{children:[(0,r.jsx)(h.Z,{variant:"h4",className:a().sectiontitle,children:e.header}),e.elements.map((function(n,e){return(0,r.jsx)("div",{className:a().element,children:(0,r.jsx)(Z,{data:n,links:t})},e)}))]})},H=function(n){var e=n.data,t=n.theme,s=n.links;return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:e.title})}),(0,r.jsx)(w,{data:e,theme:t,links:s})]})}},4186:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return a}});var r=t(5893),i=t(9587),s=(0,t(8239).Z)({typography:{h1:{fontSize:11}},components:{MuiCard:{styleOverrides:{root:{backgroundColor:"#d5dae3"}}}}}),a=!0;e.default=function(n){var e=n.data;return(0,r.jsx)(i.Z,{data:e,theme:s,links:!0})}},7160:function(n){n.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",sectiontitle:"Home_sectiontitle__YG2ob",column:"Home_column__Bx5cY",element:"Home_element__BI2mp"}}},function(n){n.O(0,[479,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);