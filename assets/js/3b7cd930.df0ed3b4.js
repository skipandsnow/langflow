"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[870],{7293:(e,n,t)=>{t.d(n,{A:()=>H});var i=t(6540),s=t(4848);function o(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:o.length>0?(0,s.jsx)(s.Fragment,{children:o}):null}}(e.children),o=e.title??n;return{...e,...o&&{title:o},children:t}}var a=t(8215),r=t(1312),c=t(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(n),l.admonition,t),children:i})}function m(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:l.admonitionContent,children:n}):null}function h(e){const{type:n,icon:t,title:i,children:o,className:a}=e;return(0,s.jsxs)(d,{type:n,className:a,children:[i||t?(0,s.jsx)(m,{title:i,icon:t}):null,(0,s.jsx)(u,{children:o})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(e){return(0,s.jsx)(h,{...x,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,s.jsx)(h,{...j,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function y(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,s.jsx)(h,{...w,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function N(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const b={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const M={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const z={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:p,tip:v,info:A,warning:function(e){return(0,s.jsx)(h,{...b,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(h,{...M,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(p,{title:"secondary",...e}),important:e=>(0,s.jsx)(A,{title:"important",...e}),success:e=>(0,s.jsx)(v,{title:"success",...e}),caution:function(e){return(0,s.jsx)(h,{...z,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};var k=t(6763);function H(e){const n=o(e),t=(i=n.type,T[i]||(k.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),T.info));var i;return(0,s.jsx)(t,{...n})}},7533:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(6540),s=t(1122),o=t(6025),a=t(4848);const r=e=>{let{alt:n,sources:t,style:r}=e;const[c,l]=(0,i.useState)(!1),d=e=>{"Escape"===e.key&&l(!1)};(0,i.useEffect)((()=>(c?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[c]);return(0,a.jsx)("div",{className:"zoomable-image "+(c?"fullscreen":""),onClick:()=>{l(!c)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,a.jsx)(s.A,{className:"zoomable-image-inner",alt:n,sources:{light:(0,o.Ay)(t.light),dark:(0,o.Ay)(t.dark)}})})}},7266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});t(6540);var i=t(4848),s=t(8453),o=(t(1122),t(6025),t(7533),t(3554)),a=t.n(o),r=t(7293);const c={},l="Store Message",d={id:"examples/store-message",title:"Store Message",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/examples/store-message.mdx",sourceDirName:"examples",slug:"/examples/store-message",permalink:"/examples/store-message",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},u=[];function h(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong"},(0,s.RP)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"store-message",children:"Store Message"}),"\n",(0,i.jsx)(r.A,{type:"warning",title:"warning",children:(0,i.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Store Message"})," component allows you to save information under a specified Session ID and sender type."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Message History"})," component can then be used to retrieve stored messages."]}),"\n",(0,i.jsx)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:(0,i.jsx)(a(),{playing:!0,controls:!0,url:"/videos/store_message.mp4"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.RP)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},8453:(e,n,t)=>{t.d(n,{RP:()=>o,xA:()=>r});var i=t(6540);const s=i.createContext({});function o(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||a:o(e),i.createElement(s.Provider,{value:r},n)}}}]);