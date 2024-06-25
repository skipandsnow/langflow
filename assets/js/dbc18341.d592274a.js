"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9887],{251:(o,e,t)=>{t.r(e),t.d(e,{CH:()=>d,assets:()=>i,chCodeConfig:()=>h,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>y});t(6540);var n=t(4848),l=t(8453),s=t(4754),r=t(7293);const c={},a="Kubernetes",p={id:"deployment/kubernetes",title:"Kubernetes",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/deployment/kubernetes.mdx",sourceDirName:"deployment",slug:"/deployment/kubernetes",permalink:"/deployment/kubernetes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Backend-only",permalink:"/deployment/backend-only"},next:{title:"Deploy on Google Cloud Platform",permalink:"/deployment/gcp-deployment"}},i={},d={annotations:s.hk,Code:s.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},y=[{value:"LangFlow (IDE)",id:"langflow-ide",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 0. Prepare a Kubernetes cluster",id:"step-0-prepare-a-kubernetes-cluster",level:3},{value:"Step 1. Install the LangFlow Helm chart",id:"step-1-install-the-langflow-helm-chart",level:3},{value:"Step 2. Access LangFlow",id:"step-2-access-langflow",level:3},{value:"LangFlow version",id:"langflow-version",level:3},{value:"Storage",id:"storage",level:3},{value:"Scaling",id:"scaling",level:3},{value:"Deploy on AWS EKS, Google GKE, or Azure AKS and other examples",id:"deploy-on-aws-eks-google-gke-or-azure-aks-and-other-examples",level:3},{value:"LangFlow (Runtime)",id:"langflow-runtime",level:2},{value:"Import a flow",id:"import-a-flow",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Step 0. Prepare a Kubernetes cluster",id:"step-0-prepare-a-kubernetes-cluster-1",level:3},{value:"Step 1. Install the LangFlow runtime Helm chart",id:"step-1-install-the-langflow-runtime-helm-chart",level:3},{value:"Step 2. Access the LangFlow app API",id:"step-2-access-the-langflow-app-api",level:3},{value:"Storage",id:"storage-1",level:3},{value:"Log level and LangFlow configurations",id:"log-level-and-langflow-configurations",level:3},{value:"Configure secrets and variables",id:"configure-secrets-and-variables",level:3},{value:"Scaling",id:"scaling-1",level:3},{value:"Other examples",id:"other-examples",level:3}];function u(o){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3",ol:"ol",code:"code",strong:"strong"},(0,l.RP)(),o.components);return d||f("CH",!1),d.Code||f("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,n.jsx)(e.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,n.jsx)(r.A,{type:"warning",title:"warning",children:(0,n.jsx)(e.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,n.jsx)(e.p,{children:"This guide will help you get LangFlow up and running in Kubernetes cluster, including the following steps:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Install ",(0,n.jsx)(e.a,{href:"#langflow-ide",children:"LangFlow as IDE"})," in a Kubernetes cluster (for development)"]}),"\n",(0,n.jsxs)(e.li,{children:["Install ",(0,n.jsx)(e.a,{href:"#langflow-runtime",children:"LangFlow as a standalone application"})," in a Kubernetes cluster (for production runtime workloads)"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"langflow-ide",children:"LangFlow (IDE)"}),"\n",(0,n.jsx)(e.p,{children:"This solution is designed to provide a complete environment for developers to create, test, and debug their flows. It includes both the API and the UI."}),"\n",(0,n.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Kubernetes server"}),"\n",(0,n.jsx)(e.li,{children:"kubectl"}),"\n",(0,n.jsx)(e.li,{children:"Helm"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"step-0-prepare-a-kubernetes-cluster",children:"Step 0. Prepare a Kubernetes cluster"}),"\n",(0,n.jsxs)(e.p,{children:["We use ",(0,n.jsx)(e.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"})," for this example, but you can use any Kubernetes cluster."]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Create a Kubernetes cluster on Minikube.","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"minikube ",props:{style:{color:"#FFA657"}}},{content:"start",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Set ",(0,n.jsx)(e.code,{children:"kubectl"})," to use Minikube.","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl ",props:{style:{color:"#FFA657"}}},{content:"config use-context minikube",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"step-1-install-the-langflow-helm-chart",children:"Step 1. Install the LangFlow Helm chart"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Add the repository to Helm.","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"repo add langflow https://langflow-ai.github.io/langflow-helm-charts",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"repo update",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Install LangFlow with the default options in the ",(0,n.jsx)(e.code,{children:"langflow"})," namespace.","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"install langflow-ide langflow/langflow-ide ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--create-namespace",props:{style:{color:"#79C0FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Check the status of the pods","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl ",props:{style:{color:"#FFA657"}}},{content:"get pods ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"NAME                                 READY   STATUS    RESTARTS       AGE",props:{}}]},{tokens:[{content:"langflow-0                           1/1     Running   0              33s",props:{}}]},{tokens:[{content:"langflow-frontend-5d9c558dbb-g7tc9   1/1     Running   0              38s",props:{}}]}],lang:"text"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"step-2-access-langflow",children:"Step 2. Access LangFlow"}),"\n",(0,n.jsx)(e.p,{children:"Enable local port forwarding to access LangFlow from your local machine."}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl ",props:{style:{color:"#FFA657"}}},{content:"port-forward ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow svc/langflow-langflow-runtime 7860:",props:{style:{color:"#A5D6FF"}}},{content:"7860",props:{style:{color:"#79C0FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsxs)(e.p,{children:["Now you can access LangFlow at ",(0,n.jsx)(e.a,{href:"http://localhost:7860/",children:"http://localhost:7860/"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"langflow-version",children:"LangFlow version"}),"\n",(0,n.jsxs)(e.p,{children:["To specify a different LangFlow version, you can set the ",(0,n.jsx)(e.code,{children:"langflow.backend.image.tag"})," and ",(0,n.jsx)(e.code,{children:"langflow.frontend.image.tag"})," values in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    image",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      tag",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.0a59"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  frontend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    image",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      tag",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1.0.0a59"',props:{style:{color:"#A5D6FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"storage",children:"Storage"}),"\n",(0,n.jsxs)(e.p,{children:["By default, the chart will use a SQLLite database stored in a local persistent disk.\nIf you want to use an external PostgreSQL database, you can set the ",(0,n.jsx)(e.code,{children:"langflow.database"})," values in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"# Deploy postgresql. You can skip this section if you have an existing postgresql database.",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"postgresql",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  enabled",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"true",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  fullnameOverride",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-ide-postgresql-service"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  auth",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    username",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    password",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-postgres"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    database",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-db"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    externalDatabase",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      enabled",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"true",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"      driver",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"postgresql"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      host",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-ide-postgresql-service"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      port",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"5432"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      database",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-db"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      user",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      password",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        valueFrom",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"          secretKeyRef",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            key",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"password"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"            name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"langflow-ide-postgresql-service"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    sqlite",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      enabled",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"false",props:{style:{color:"#79C0FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"scaling",children:"Scaling"}),"\n",(0,n.jsxs)(e.p,{children:["You can scale the number of replicas for the LangFlow backend and frontend services by changing the ",(0,n.jsx)(e.code,{children:"replicaCount"})," value in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    replicaCount",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"3",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  frontend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    replicaCount",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"3",props:{style:{color:"#79C0FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.p,{children:"You can scale frontend and backend services independently."}),"\n",(0,n.jsxs)(e.p,{children:["To scale vertically (increase the resources for the pods), you can set the ",(0,n.jsx)(e.code,{children:"resources"})," values in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  backend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    resources",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      requests",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        memory",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"2Gi"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        cpu",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1000m"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  frontend",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    resources",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      requests",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        memory",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1Gi"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        cpu",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1000m"',props:{style:{color:"#A5D6FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"deploy-on-aws-eks-google-gke-or-azure-aks-and-other-examples",children:"Deploy on AWS EKS, Google GKE, or Azure AKS and other examples"}),"\n",(0,n.jsxs)(e.p,{children:["Visit the ",(0,n.jsx)(e.a,{href:"https://github.com/langflow-ai/langflow-helm-charts",children:"LangFlow Helm Charts repository"})," for more examples and configurations."]}),"\n",(0,n.jsxs)(e.p,{children:["Use the ",(0,n.jsx)(e.a,{href:"https://github.com/langflow-ai/langflow-helm-charts/blob/main/charts/langflow-ide/values.yaml",children:"default values file"})," as reference for all the options available."]}),"\n",(0,n.jsxs)(e.p,{children:["Visit the ",(0,n.jsx)(e.a,{href:"https://github.com/langflow-ai/langflow-helm-charts/tree/main/examples/langflow-ide",children:"examples directory"})," to learn more about different deployment options."]}),"\n",(0,n.jsx)(e.h2,{id:"langflow-runtime",children:"LangFlow (Runtime)"}),"\n",(0,n.jsx)(e.p,{children:"The runtime chart is tailored for deploying applications in a production environment. It is focused on stability, performance, isolation and security to ensure that applications run reliably and efficiently."}),"\n",(0,n.jsx)(e.p,{children:"Using a dedicated deployment for a set of flows is fundamental in production environments in order to have a granular resource control."}),"\n",(0,n.jsx)(e.h2,{id:"import-a-flow",children:"Import a flow"}),"\n",(0,n.jsx)(e.p,{children:"There are two ways to import a flow (or multiple flows) and deploy it with the LangFlow runtime Helm chart:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"From a remote location"}),": You can reference a flow stored in a remote location, such as a URL or a Git repository by customizing the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file in the section ",(0,n.jsx)(e.code,{children:"downloadFlows"}),":"]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"downloadFlows",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  flows",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    - ",props:{style:{color:"#C9D1D9"}}},{content:"url",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"https://raw.githubusercontent.com/langflow-ai/langflow/dev/src/backend/base/langflow/initial_setup/starter_projects/Basic%20Prompting%20(Hello%2C%20world!).json",props:{style:{color:"#A5D6FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsxs)(e.p,{children:["When the LangFlow runtime starts, it will download the flow from the specified URL and run it.\nThe flow UUID to use to call the API endpoints is the same as the one in the JSON file under the ",(0,n.jsx)(e.code,{children:"id"})," field.\nYou can also specify a ",(0,n.jsx)(e.code,{children:"endpoint_name"})," field to give a friendly name to the flow."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Packaging the flow as docker image"}),": You can add a flow from to a docker image based on Langflow runtime and refer to it in the chart."]}),"\n",(0,n.jsx)(e.p,{children:"First you need a base Dockerfile to get the langflow image and add your local flows:"}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"   FROM langflowai/langflow-backend:latest",props:{}}]},{tokens:[{content:"   RUN mkdir /app/flows",props:{}}]},{tokens:[{content:"   COPY ./*json /app/flows/.",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsx)(e.p,{children:"Then you can build the image and push it to DockerHub (or any registry you prefer):"}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"# Create the Dockerfile",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"echo ",props:{style:{color:"#79C0FF"}}},{content:'"""FROM langflowai/langflow-backend:latest',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"RUN mkdir /app/flows",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"ENV LANGFLOW_LOAD_FLOWS_PATH=/app/flows",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'COPY ./*json /app/flows/.""" ',props:{style:{color:"#A5D6FF"}}},{content:"> ",props:{style:{color:"#FF7B72"}}},{content:"Dockerfile",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# Download the flows",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"wget ",props:{style:{color:"#FFA657"}}},{content:"https://raw.githubusercontent.com/langflow-ai/langflow/dev/src/backend/base/langflow/initial_setup/starter_projects/Basic%20Prompting%",props:{style:{color:"#A5D6FF"}}},{content:"20",props:{style:{color:"#79C0FF"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:"Hello%2C%20world!",props:{style:{color:"#FFA657"}}},{content:")",props:{style:{color:"#C9D1D9"}}},{content:".json",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# Build the docker image locally",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"build ",props:{style:{color:"#A5D6FF"}}},{content:"-t ",props:{style:{color:"#79C0FF"}}},{content:"myuser/langflow-just-chat:",props:{style:{color:"#A5D6FF"}}},{content:"1.0.0 -f ",props:{style:{color:"#79C0FF"}}},{content:"Dockerfile .",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# Push the image to DockerHub",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"push myuser/langflow-just-chat:",props:{style:{color:"#A5D6FF"}}},{content:"1.0.0",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Kubernetes server"}),"\n",(0,n.jsx)(e.li,{children:"kubectl"}),"\n",(0,n.jsx)(e.li,{children:"Helm"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"step-0-prepare-a-kubernetes-cluster-1",children:"Step 0. Prepare a Kubernetes cluster"}),"\n",(0,n.jsx)(e.p,{children:"Follow the same steps as for the LangFlow IDE."}),"\n",(0,n.jsx)(e.h3,{id:"step-1-install-the-langflow-runtime-helm-chart",children:"Step 1. Install the LangFlow runtime Helm chart"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Add the repository to Helm.","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"repo add langflow https://langflow-ai.github.io/langflow-helm-charts",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"repo update",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Install the LangFlow app with the default options in the ",(0,n.jsx)(e.code,{children:"langflow"})," namespace.\nIf you bundled the flow in a docker image, you can specify the image name in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file or with the ",(0,n.jsx)(e.code,{children:"--set"})," flag:","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"install my-langflow-app langflow/langflow-runtime ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--create-namespace --set ",props:{style:{color:"#79C0FF"}}},{content:"image.repository=myuser/langflow-just-chat ",props:{style:{color:"#A5D6FF"}}},{content:"--set ",props:{style:{color:"#79C0FF"}}},{content:"image.tag=",props:{style:{color:"#A5D6FF"}}},{content:"1.0.0",props:{style:{color:"#79C0FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n","If you want to download the flow from a remote location, you can specify the URL in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file or with the ",(0,n.jsx)(e.code,{children:"--set"})," flag:","\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"helm ",props:{style:{color:"#FFA657"}}},{content:"install my-langflow-app langflow/langflow-runtime ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--create-namespace --set ",props:{style:{color:"#79C0FF"}}},{content:"downloadFlows.flows[0].url=https://raw.githubusercontent.com/langflow-ai/langflow/dev/src/backend/base/langflow/initial_setup/starter_projects/Basic%20Prompting%",props:{style:{color:"#A5D6FF"}}},{content:"20",props:{style:{color:"#79C0FF"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:"Hello%2C%20world!",props:{style:{color:"#FFA657"}}},{content:")",props:{style:{color:"#C9D1D9"}}},{content:".json",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsxs)(e.ol,{start:"3",children:["\n",(0,n.jsx)(e.li,{children:"Check the status of the pods"}),"\n"]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl ",props:{style:{color:"#FFA657"}}},{content:"get pods ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"step-2-access-the-langflow-app-api",children:"Step 2. Access the LangFlow app API"}),"\n",(0,n.jsx)(e.p,{children:"Enable local port forwarding to access LangFlow from your local machine."}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"kubectl ",props:{style:{color:"#FFA657"}}},{content:"port-forward ",props:{style:{color:"#A5D6FF"}}},{content:"-n ",props:{style:{color:"#79C0FF"}}},{content:"langflow svc/langflow-my-langflow-app 7860:",props:{style:{color:"#A5D6FF"}}},{content:"7860",props:{style:{color:"#79C0FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,n.jsxs)(e.p,{children:["Now you can access the API at ",(0,n.jsx)(e.a,{href:"http://localhost:7860/api/v1/flows",children:"http://localhost:7860/api/v1/flows"})," and execute the flow:"]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"id",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"$(",props:{style:{color:"#A5D6FF"}}},{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-s",props:{style:{color:"#79C0FF"}}},{content:" http://localhost:7860/api/v1/flows ",props:{style:{color:"#A5D6FF"}}},{content:"| ",props:{style:{color:"#FF7B72"}}},{content:"jq ",props:{style:{color:"#FFA657"}}},{content:"-r",props:{style:{color:"#79C0FF"}}},{content:" '.flows[0].id')",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:'    "http://localhost:7860/api/v1/run/',props:{style:{color:"#A5D6FF"}}},{content:"$id",props:{style:{color:"#C9D1D9"}}},{content:'?stream=false" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json'",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -d ",props:{style:{color:"#79C0FF"}}},{content:"'{",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'      "input_value": "Hello!",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'      "output_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'      "input_type": "chat"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    }'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"storage-1",children:"Storage"}),"\n",(0,n.jsx)(e.p,{children:"In this case, the storage is not needed as our deployment is stateless."}),"\n",(0,n.jsx)(e.h3,{id:"log-level-and-langflow-configurations",children:"Log level and LangFlow configurations"}),"\n",(0,n.jsxs)(e.p,{children:["You can set the log level and other LangFlow configurations in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"env",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  - ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"LANGFLOW_LOG_LEVEL",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"INFO"',props:{style:{color:"#A5D6FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"configure-secrets-and-variables",children:"Configure secrets and variables"}),"\n",(0,n.jsxs)(e.p,{children:["In order to inject secrets and LangFlow global variables, you can use the ",(0,n.jsx)(e.code,{children:"secrets"})," and ",(0,n.jsx)(e.code,{children:"env"})," sections in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsxs)(e.p,{children:["Let's say your flow uses a global variable which is a secret; when you export the flow as JSON, it's recommended to not include it.\nWhen importing the flow in the LangFlow runtime, you can set the global variable using the ",(0,n.jsx)(e.code,{children:"env"})," section in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file.\nAssuming you have a global variable called ",(0,n.jsx)(e.code,{children:"openai_key_var"}),", you can read it directly from a secret:"]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"env",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  - ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai_key_var",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    valueFrom",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      secretKeyRef",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai-key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        key",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai-key",props:{style:{color:"#A5D6FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.p,{children:"or directly from the values file (not recommended for secret values!):"}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"env",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  - ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"openai_key_var",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    value",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"sk-...."',props:{style:{color:"#A5D6FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"scaling-1",children:"Scaling"}),"\n",(0,n.jsxs)(e.p,{children:["You can scale the number of replicas for the LangFlow app by changing the ",(0,n.jsx)(e.code,{children:"replicaCount"})," value in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"replicaCount",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"3",props:{style:{color:"#79C0FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsxs)(e.p,{children:["To scale vertically (increase the resources for the pods), you can set the ",(0,n.jsx)(e.code,{children:"resources"})," values in the ",(0,n.jsx)(e.code,{children:"values.yaml"})," file."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"resources",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  requests",props:{style:{color:"#7EE787"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    memory",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"2Gi"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    cpu",props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"1000m"',props:{style:{color:"#A5D6FF"}}}]}],lang:"yaml"},annotations:[]}]}),"\n",(0,n.jsx)(e.h3,{id:"other-examples",children:"Other examples"}),"\n",(0,n.jsxs)(e.p,{children:["Visit the ",(0,n.jsx)(e.a,{href:"https://github.com/langflow-ai/langflow-helm-charts",children:"LangFlow Helm Charts repository"})," for more examples and configurations."]}),"\n",(0,n.jsxs)(e.p,{children:["Use the ",(0,n.jsx)(e.a,{href:"https://github.com/langflow-ai/langflow-helm-charts/blob/main/charts/langflow-runtime/values.yaml",children:"default values file"})," as reference for all the options available."]}),"\n",(0,n.jsxs)(e.p,{children:["Visit the ",(0,n.jsx)(e.a,{href:"https://github.com/langflow-ai/langflow-helm-charts/tree/main/examples/langflow-runtime",children:"examples directory"})," to learn more about different deployment options."]})]})}const g=function(o={}){const{wrapper:e}=Object.assign({},(0,l.RP)(),o.components);return e?(0,n.jsx)(e,Object.assign({},o,{children:(0,n.jsx)(u,o)})):u(o)};function f(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);