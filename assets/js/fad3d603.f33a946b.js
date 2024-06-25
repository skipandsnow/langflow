"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3022],{7533:(t,e,o)=>{o.d(e,{A:()=>s});var n=o(6540),r=o(1122),i=o(6025),a=o(4848);const s=t=>{let{alt:e,sources:o,style:s}=t;const[c,l]=(0,n.useState)(!1),d=t=>{"Escape"===t.key&&l(!1)};(0,n.useEffect)((()=>(c?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[c]);return(0,a.jsx)("div",{className:"zoomable-image "+(c?"fullscreen":""),onClick:()=>{l(!c)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...s},children:(0,a.jsx)(r.A,{className:"zoomable-image-inner",alt:e,sources:{light:(0,i.Ay)(o.light),dark:(0,i.Ay)(o.dark)}})})}},9845:(t,e,o)=>{o.r(e),o.d(e,{CH:()=>g,assets:()=>h,chCodeConfig:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});o(6540);var n=o(4848),r=o(8453),i=o(4754),a=(o(7293),o(1122),o(6025)),s=o(7533);const c={},l="LangSmith",d={id:"integrations/langsmith/intro",title:"LangSmith",description:"LangSmith is a full-lifecycle DevOps service from LangChain that provides monitoring and observability. To integrate with Langflow, just add your LangChain API key as a Langflow environment variable and you are good to go!",source:"@site/docs/integrations/langsmith/intro.mdx",sourceDirName:"integrations/langsmith",slug:"/integrations/langsmith/intro",permalink:"/integrations/langsmith/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to Contribute Components?",permalink:"/contributing/contribute-component"},next:{title:"Introduction to Notion in Langflow",permalink:"/integrations/notion/intro"}},h={},g={annotations:i.hk,Code:i.Cy},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Step-by-step Configuration",id:"step-by-step-configuration",level:2}];function m(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",a:"a",code:"code"},(0,r.RP)(),t.components);return g||y("CH",!1),g.Code||y("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,n.jsx)(e.h1,{id:"langsmith",children:"LangSmith"}),"\n",(0,n.jsx)(e.p,{children:"LangSmith is a full-lifecycle DevOps service from LangChain that provides monitoring and observability. To integrate with Langflow, just add your LangChain API key as a Langflow environment variable and you are good to go!"}),"\n",(0,n.jsx)(e.h2,{id:"step-by-step-configuration",children:"Step-by-step Configuration"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Obtain your LangChain API key from ",(0,n.jsx)(e.a,{href:"https://smith.langchain.com",children:"https://smith.langchain.com"})]}),"\n",(0,n.jsx)(e.li,{children:"Add the following keys to Langflow .env file:"}),"\n"]}),"\n",(0,n.jsx)(g.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGCHAIN_API_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your-api-key"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"LANGCHAIN_PROJECT",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your-project-name"',props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(e.p,{children:"or export the environment variables in your terminal:"}),"\n",(0,n.jsx)(g.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGCHAIN_API_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your-api-key"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGCHAIN_PROJECT",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your-project-name"',props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsxs)(e.ol,{start:"3",children:["\n",(0,n.jsxs)(e.li,{children:["Restart Langflow using ",(0,n.jsx)(e.code,{children:"langflow run --env-file .env"})]}),"\n",(0,n.jsx)(e.li,{children:"Run any project and check the LangSmith dashboard for monitoring and observability."}),"\n"]}),"\n",(0,n.jsx)(s.A,{alt:"LangSmith Flow Example",sources:{light:(0,a.Ay)("img/langsmith-flow.png"),dark:(0,a.Ay)("img/langsmith-flow.png")},style:{width:"80%",margin:"20px auto"}}),"\n",(0,n.jsx)(s.A,{alt:"LangSmith Trace",sources:{light:(0,a.Ay)("img/langsmith-trace.png"),dark:(0,a.Ay)("img/langsmith-trace.png")},style:{width:"80%",margin:"20px auto"}})]})}const f=function(t={}){const{wrapper:e}=Object.assign({},(0,r.RP)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(m,t)})):m(t)};function y(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);