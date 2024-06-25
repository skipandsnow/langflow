"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9414],{7533:(e,n,o)=>{o.d(n,{A:()=>l});var s=o(6540),t=o(1122),i=o(6025),r=o(4848);const l=e=>{let{alt:n,sources:o,style:l}=e;const[a,c]=(0,s.useState)(!1),d=e=>{"Escape"===e.key&&c(!1)};(0,s.useEffect)((()=>(a?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[a]);return(0,r.jsx)("div",{className:"zoomable-image "+(a?"fullscreen":""),onClick:()=>{c(!a)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...l},children:(0,r.jsx)(t.A,{className:"zoomable-image-inner",alt:n,sources:{light:(0,i.Ay)(o.light),dark:(0,i.Ay)(o.dark)}})})}},791:(e,n,o)=>{o.r(n),o.d(n,{CH:()=>g,assets:()=>u,chCodeConfig:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>f});o(6540);var s=o(4848),t=o(8453),i=o(4754),r=(o(1122),o(6025)),l=o(7533),a=o(7293);const c={},d="Sign Up and Sign In",h={id:"administration/login",title:"Sign Up and Sign In",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/administration/login.mdx",sourceDirName:"administration",slug:"/administration/login",permalink:"/administration/login",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Keys",permalink:"/administration/api"},next:{title:"Command Line Interface (CLI)",permalink:"/administration/cli"}},u={},g={annotations:i.hk,InlineCode:i.R0,Code:i.Cy},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},f=[{value:"Environment variables",id:"environment-variables",level:2},{value:"LANGFLOW_AUTO_LOGIN",id:"langflow_auto_login",level:3},{value:"LANGFLOW_SUPERUSER and LANGFLOW_SUPERUSER_PASSWORD",id:"langflow_superuser-and-langflow_superuser_password",level:3},{value:"LANGFLOW_SECRET_KEY",id:"langflow_secret_key",level:3},{value:"LANGFLOW_NEW_USER_IS_ACTIVE",id:"langflow_new_user_is_active",level:3},{value:"Manage superusers with the CLI",id:"manage-superusers-with-the-cli",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Profile settings",id:"profile-settings",level:2}];function m(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",strong:"strong"},(0,t.RP)(),e.components);return g||y("CH",!1),g.Code||y("CH.Code",!0),g.InlineCode||y("CH.InlineCode",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,s.jsx)(n.h1,{id:"sign-up-and-sign-in",children:"Sign Up and Sign In"}),"\n",(0,s.jsx)(a.A,{type:"warning",title:"warning",children:(0,s.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,s.jsx)(n.p,{children:"The login functionality in Langflow serves to authenticate users and protect sensitive routes in the application. Starting from version 0.5, Langflow introduces an enhanced login mechanism that is governed by a few environment variables. This allows new secure features."}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsx)(n.p,{children:"The following environment variables are crucial in configuring the login settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_AUTO_LOGIN"}),": Determines whether Langflow should automatically log users in. Default is ",(0,s.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER"}),": The username of the superuser."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER_PASSWORD"}),": The password for the superuser."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_SECRET_KEY",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SECRET_KEY"}),": A key used for encrypting the superuser's password."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_NEW_USER_IS_ACTIVE",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_NEW_USER_IS_ACTIVE"}),": Determines whether new users are automatically activated. Default is ",(0,s.jsx)(n.code,{children:"False"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All of these variables can be passed to the CLI command ",(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"langflow run",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"langflow run"})," through the ",(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"--",props:{style:{color:"#FF7B72"}}},{content:"env",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"file",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"--env-file"})," option. For example:"]}),"\n",(0,s.jsx)(g.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"--env-file ",props:{style:{color:"#79C0FF"}}},{content:".env",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsx)(a.A,{type:"info",children:(0,s.jsx)(n.p,{children:"It is critical not to expose these environment variables in your code\nrepository. Always set them securely in your deployment environment, for\nexample, using Docker secrets, Kubernetes ConfigMaps/Secrets, or dedicated\nsecure environment configuration systems like AWS Secrets Manager."})}),"\n",(0,s.jsx)(n.h3,{id:"langflow_auto_login",children:(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_AUTO_LOGIN"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, this variable is set to ",(0,s.jsx)(n.code,{children:"True"}),". When enabled (",(0,s.jsx)(n.code,{children:"True"}),"), Langflow operates as it did in versions prior to 0.5\u2014automatic login without requiring explicit user authentication."]}),"\n",(0,s.jsx)(n.p,{children:"To disable automatic login and enforce user authentication:"}),"\n",(0,s.jsx)(g.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_AUTO_LOGIN",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"False",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsxs)(n.h3,{id:"langflow_superuser-and-langflow_superuser_password",children:[(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER"})," and ",(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER_PASSWORD"})]}),"\n",(0,s.jsxs)(n.p,{children:["These environment variables are only relevant when ",(0,s.jsx)(n.code,{children:"LANGFLOW_AUTO_LOGIN"})," is set to ",(0,s.jsx)(n.code,{children:"False"}),". They specify the username and password for the superuser, which is essential for administrative tasks."]}),"\n",(0,s.jsx)(n.p,{children:"To create a superuser manually:"}),"\n",(0,s.jsx)(g.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SUPERUSER",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"admin",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"securepassword",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the CLI command ",(0,s.jsx)(n.code,{children:"langflow superuser"})," to set up a superuser interactively."]}),"\n",(0,s.jsx)(n.h3,{id:"langflow_secret_key",children:(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_SECRET_KEY",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SECRET_KEY"})}),"\n",(0,s.jsx)(n.p,{children:"This environment variable holds a secret key used for encrypting the superuser's password. Make sure to set this to a secure, randomly generated string."}),"\n",(0,s.jsx)(g.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SECRET_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"randomly_generated_secure_key",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsx)(n.h3,{id:"langflow_new_user_is_active",children:(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_NEW_USER_IS_ACTIVE",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_NEW_USER_IS_ACTIVE"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, this variable is set to ",(0,s.jsx)(n.code,{children:"False"}),". When enabled (",(0,s.jsx)(n.code,{children:"True"}),"), new users are automatically activated and can log in without requiring explicit activation by the superuser."]}),"\n",(0,s.jsx)(n.h2,{id:"manage-superusers-with-the-cli",children:"Manage superusers with the CLI"}),"\n",(0,s.jsx)(n.p,{children:"Langflow provides a command-line utility for managing superusers:"}),"\n",(0,s.jsx)(g.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"superuser",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsx)(n.p,{children:"This command prompts you to enter the username and password for the superuser, unless they are already set using environment variables."}),"\n",(0,s.jsx)(n.h2,{id:"sign-in",children:"Sign in"}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_AUTO_LOGIN"})," set to ",(0,s.jsx)(g.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"False",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"False"}),", Langflow requires users to sign up before they can log in. The sign-up page is the default landing page when a user visits Langflow for the first time."]}),"\n",(0,s.jsx)(l.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/sign-up.png"),dark:(0,r.Ay)("img/sign-up.png")},style:{width:"40%",margin:"20px auto"}}),"\n",(0,s.jsx)(n.h2,{id:"profile-settings",children:"Profile settings"}),"\n",(0,s.jsx)(n.p,{children:"Once signed in, you can change your profile settings by clicking on the profile icon in the top right corner of the Langflow dashboard. This opens a dropdown menu with the following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Admin Page"}),": Opens the admin page, which is only accessible to the superuser."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Profile Settings"}),": Opens the profile settings page."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sign Out"}),": Logs the user out."]}),"\n"]}),"\n",(0,s.jsx)(l.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/my-account.png"),dark:(0,r.Ay)("img/my-account.png")},style:{maxWidth:"600px",margin:"20px auto"}}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Profile Settings"})," to change your password and your profile picture."]}),"\n",(0,s.jsx)(l.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/profile-settings.png"),dark:(0,r.Ay)("img/profile-settings.png")},style:{maxWidth:"600px",margin:"20px auto"}}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Admin Page"})," to manage users and groups as the superuser."]}),"\n",(0,s.jsx)(l.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/admin-page.png"),dark:(0,r.Ay)("img/admin-page.png")},style:{maxWidth:"600px",margin:"0 auto"}})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,t.RP)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)};function y(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);