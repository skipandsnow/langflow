"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9455],{4989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var o=t(4848),r=t(8453);const s={title:"GCP",sidebar_position:3,slug:"/deployment-gcp"},l=void 0,d={id:"Deployment/deployment-gcp",title:"GCP",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/Deployment/deployment-gcp.md",sourceDirName:"Deployment",slug:"/deployment-gcp",permalink:"/deployment-gcp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"GCP",sidebar_position:3,slug:"/deployment-gcp"},sidebar:"defaultSidebar",previous:{title:"Docker",permalink:"/deployment-docker"},next:{title:"Render",permalink:"/deployment-render"}},i={},a=[{value:"Deploy on Google Cloud Platform",id:"4ee01cda736c4f7396936409f23cdb52",level:2},{value:"Run Langflow from a New Google Cloud Project",id:"ce729796d7404ccdb627bee47d6a4399",level:3},{value:"Standard VM",id:"245b47b450dd4159a5c56a5124bab84f",level:3},{value:"Spot/Preemptible Instance",id:"de9b8f7c71284cbb98e8137a3c44553d",level:2},{value:"Pricing (approximate)",id:"2289f4ba9f544e6e9d4b915ef5aacd24",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,o.jsx)(n.h2,{id:"4ee01cda736c4f7396936409f23cdb52",children:"Deploy on Google Cloud Platform"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"ce729796d7404ccdb627bee47d6a4399",children:"Run Langflow from a New Google Cloud Project"}),"\n",(0,o.jsx)(n.p,{children:"This guide will help you set up a Langflow development VM in a Google Cloud Platform project using Google Cloud Shell."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"When Cloud Shell opens, be sure to select Trust repo. Some gcloud commands might not run in an ephemeral Cloud Shell environment."})}),"\n",(0,o.jsx)(n.h3,{id:"245b47b450dd4159a5c56a5124bab84f",children:"Standard VM"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/langflow-ai/langflow&working_dir=scripts/gcp&shellonly=true&tutorial=walkthroughtutorial.md",children:"embed"})}),"\n",(0,o.jsx)(n.p,{children:"This script sets up a Debian-based VM with the Langflow package, Nginx, and the necessary configurations to run the Langflow Dev environment."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"de9b8f7c71284cbb98e8137a3c44553d",children:"Spot/Preemptible Instance"}),"\n",(0,o.jsxs)(n.p,{children:["When running as a ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/instances/preemptible",children:"spot (preemptible) instance"}),", the code and VM will behave the same way as in a regular instance, executing the startup script to configure the environment, install necessary dependencies, and run the Langflow application. However, ",(0,o.jsx)(n.strong,{children:"due to the nature of spot instances, the VM may be terminated at any time if Google Cloud needs to reclaim the resources"}),". This makes spot instances suitable for fault-tolerant, stateless, or interruptible workloads that can handle unexpected terminations and restarts."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"2289f4ba9f544e6e9d4b915ef5aacd24",children:"Pricing (approximate)"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"For a more accurate breakdown of costs, please use the GCP Pricing Calculator"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Component"}),(0,o.jsx)(n.th,{children:"Regular Cost (Hourly)"}),(0,o.jsx)(n.th,{children:"Regular Cost (Monthly)"}),(0,o.jsx)(n.th,{children:"Spot/Preemptible Cost (Hourly)"}),(0,o.jsx)(n.th,{children:"Spot/Preemptible Cost (Monthly)"}),(0,o.jsx)(n.th,{children:"Notes"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"100 GB Disk"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"$10/month"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"$10/month"}),(0,o.jsx)(n.td,{children:"Disk cost remains the same for both regular and Spot/Preemptible VMs"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"VM (n1-standard-4)"}),(0,o.jsx)(n.td,{children:"$0.15/hr"}),(0,o.jsx)(n.td,{children:"~$108/month"}),(0,o.jsx)(n.td,{children:"~$0.04/hr"}),(0,o.jsx)(n.td,{children:"~$29/month"}),(0,o.jsx)(n.td,{children:"The VM cost can be significantly reduced using a Spot/Preemptible instance"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Total"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"$0.15/hr"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"~$118/month"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"~$0.04/hr"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"~$39/month"})}),(0,o.jsx)(n.td,{children:"Total costs for running the VM and disk 24/7 for an entire month"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var o=t(6540);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);