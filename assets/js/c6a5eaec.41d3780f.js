"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8356],{6082:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>h,assets:()=>d,chCodeConfig:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>f});var a=t(4848),r=t(8453),o=t(4754),i=t(1470),s=t(9365);const l={title:"Langfuse",sidebar_position:2,slug:"/integrations-langfuse"},c="Integrate Langfuse with Langflow",u={id:"Integrations/integrations-langfuse",title:"Langfuse",description:"Langfuse is an observability and analytics platform specifically designed for language models and AI applications.",source:"@site/docs/Integrations/integrations-langfuse.md",sourceDirName:"Integrations",slug:"/integrations-langfuse",permalink:"/integrations-langfuse",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Langfuse",sidebar_position:2,slug:"/integrations-langfuse"},sidebar:"defaultSidebar",previous:{title:"Setup Google OAuth for Langflow Integration",permalink:"/integrations-setup-google-oauth-langflow"},next:{title:"LangSmith",permalink:"/integrations-langsmith"}},d={},h={annotations:o.hk,Code:o.Cy},g={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},f=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Langfuse project credentials",id:"create-langfuse-project-credentials",level:2},{value:"Set your Langfuse credentials as environment variables",id:"set-your-langfuse-credentials-as-environment-variables",level:2},{value:"Start Langflow and run a flow",id:"start-langflow-and-run-a-flow",level:2},{value:"View tracing data in Langfuse",id:"view-tracing-data-in-langfuse",level:2},{value:"Disable the Langfuse integration",id:"disable-the-langfuse-integration",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return h||m("CH",!1),h.Code||m("CH.Code",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n",(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"integrate-langfuse-with-langflow",children:"Integrate Langfuse with Langflow"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://langfuse.com/",children:"Langfuse"})," is an observability and analytics platform specifically designed for language models and AI applications."]}),"\n",(0,a.jsxs)(n.p,{children:["This guide walks you through how to configure Langflow to collect ",(0,a.jsx)(n.a,{href:"https://langfuse.com/docs/tracing",children:"tracing"})," data about your flow executions and automatically send the data to Langfuse."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A project in Langflow with a runnable flow"}),"\n",(0,a.jsxs)(n.li,{children:["A Langfuse Cloud account in any ",(0,a.jsx)(n.a,{href:"https://langfuse.com/faq/all/cloud-data-regions",children:"data region"})]}),"\n",(0,a.jsx)(n.li,{children:"A Langfuse organization and project"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"create-langfuse-project-credentials",children:"Create Langfuse project credentials"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In Langfuse, go to your project settings, and then create a new set of API keys."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Copy the following API key information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Secret Key"}),"\n",(0,a.jsx)(n.li,{children:"Public Key"}),"\n",(0,a.jsx)(n.li,{children:"Host URL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"set-your-langfuse-credentials-as-environment-variables",children:"Set your Langfuse credentials as environment variables"}),"\n",(0,a.jsx)(n.p,{children:"Set your Langfuse project credentials as environment variables in the same environment where you run Langflow."}),"\n",(0,a.jsx)(n.p,{children:"You can use any method you prefer to set environment variables.\nThe following examples show how to set environment variables in a terminal session (Linux or macOS) and in a command prompt session (Windows):"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"linux-macos",label:"Linux or macOS",default:!0,children:(0,a.jsx)(h.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export LANGFUSE_SECRET_KEY=SECRET_KEY",props:{}}]},{tokens:[{content:"export LANGFUSE_PUBLIC_KEY=PUBLIC_KEY",props:{}}]},{tokens:[{content:"export LANGFUSE_HOST=HOST_URL",props:{}}]}],lang:"text"},annotations:[]}]})}),(0,a.jsx)(s.A,{value:"windows",label:"Windows",default:!0,children:(0,a.jsx)(h.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"set LANGFUSE_SECRET_KEY=SECRET_KEY",props:{}}]},{tokens:[{content:"set LANGFUSE_PUBLIC_KEY=PUBLIC_KEY",props:{}}]},{tokens:[{content:"set LANGFUSE_HOST=HOST_URL",props:{}}]}],lang:"text"},annotations:[]}]})})]}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"SECRET_KEY"}),", ",(0,a.jsx)(n.code,{children:"PUBLIC_KEY"}),", and ",(0,a.jsx)(n.code,{children:"HOST_URL"})," with the API key information you copied from Langfuse."]}),"\n",(0,a.jsx)(n.h2,{id:"start-langflow-and-run-a-flow",children:"Start Langflow and run a flow"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start Langflow in the same terminal or environment where you set the environment variables:"}),"\n",(0,a.jsx)(h.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow run",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In Langflow, open and existing project, and then run a flow."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"view-tracing-data-in-langfuse",children:"View tracing data in Langfuse"}),"\n",(0,a.jsx)(n.p,{children:"Langflow automatically collects and sends tracing data about the flow execution to Langfuse.\nYou can view the collected data in your Langfuse project dashboard."}),"\n",(0,a.jsx)(n.h2,{id:"disable-the-langfuse-integration",children:"Disable the Langfuse integration"}),"\n",(0,a.jsx)(n.p,{children:"To disable the Langfuse integration, remove the environment variables you set in the previous steps and restart Langflow."})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(8215);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),r=t(8215),o=t(3104),i=t(6347),s=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=f({queryString:t,groupId:r}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),m=(()=>{const e=c??p;return g({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}}}]);