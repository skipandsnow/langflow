"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3327],{5063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=n(4848),i=n(8453);const d={},r="Logic components in Langflow",l={id:"Components/components-logic",title:"Logic components in Langflow",description:"Logic components provide functionalities for routing, conditional processing, and flow management.",source:"@site/docs/Components/components-logic.md",sourceDirName:"Components",slug:"/Components/components-logic",permalink:"/Components/components-logic",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Types of agents in Langflow",permalink:"/components-agents"},next:{title:"Memories",permalink:"/Components/components-memories"}},o={},h=[{value:"Conditional router",id:"conditional-router",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Data conditional router",id:"data-conditional-router",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"Outputs",id:"outputs-1",level:3},{value:"Flow as Tool",id:"flow-as-tool",level:2},{value:"Inputs",id:"inputs-2",level:3},{value:"Outputs",id:"outputs-2",level:3},{value:"Listen",id:"listen",level:2},{value:"Inputs",id:"inputs-3",level:3},{value:"Outputs",id:"outputs-3",level:3},{value:"Notify",id:"notify",level:2},{value:"Inputs",id:"inputs-4",level:3},{value:"Outputs",id:"outputs-4",level:3},{value:"Run flow",id:"run-flow",level:2},{value:"Inputs",id:"inputs-5",level:3},{value:"Outputs",id:"outputs-5",level:3},{value:"Sub Flow",id:"sub-flow",level:2},{value:"Inputs",id:"inputs-6",level:3},{value:"Outputs",id:"outputs-6",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"logic-components-in-langflow",children:"Logic components in Langflow"})}),"\n",(0,s.jsx)(t.p,{children:"Logic components provide functionalities for routing, conditional processing, and flow management."}),"\n",(0,s.jsx)(t.h2,{id:"conditional-router",children:"Conditional router"}),"\n",(0,s.jsx)(t.p,{children:"This component routes an input message to a corresponding output based on text comparison."}),"\n",(0,s.jsx)(t.p,{children:"The ConditionalRouterComponent routes messages based on text comparison. It evaluates a condition by comparing two text inputs using a specified operator and routes the message accordingly."}),"\n",(0,s.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"input_text"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The primary text input for the operation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"match_text"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The text input to compare against."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"operator"}),(0,s.jsx)(t.td,{children:"Dropdown"}),(0,s.jsx)(t.td,{children:"The operator to apply for comparing the texts."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"case_sensitive"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"If true, the comparison will be case sensitive."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"message"}),(0,s.jsx)(t.td,{children:"Message"}),(0,s.jsx)(t.td,{children:"The message to pass through either route."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_iterations"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"The maximum number of iterations for the conditional router."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"default_route"}),(0,s.jsx)(t.td,{children:"Dropdown"}),(0,s.jsx)(t.td,{children:"The default route to take when max iterations are reached."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"outputs",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"true_result"}),(0,s.jsx)(t.td,{children:"Message"}),(0,s.jsx)(t.td,{children:"The output when the condition is true."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"false_result"}),(0,s.jsx)(t.td,{children:"Message"}),(0,s.jsx)(t.td,{children:"The output when the condition is false."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"data-conditional-router",children:"Data conditional router"}),"\n",(0,s.jsxs)(t.p,{children:["This component routes ",(0,s.jsx)(t.code,{children:"Data"})," objects based on a condition applied to a specified key, including boolean validation."]}),"\n",(0,s.jsx)(t.p,{children:"This component is particularly useful in workflows that require conditional routing of complex data structures, enabling dynamic decision-making based on data content."}),"\n",(0,s.jsx)(t.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data_input"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"The data object or list of data objects to process."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The name of the key in the data object to check."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"operator"}),(0,s.jsx)(t.td,{children:"Dropdown"}),(0,s.jsx)(t.td,{children:"The operator to apply for comparing the values."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"compare_value"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The value to compare against (not used for boolean validator)."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"outputs-1",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"true_output"}),(0,s.jsx)(t.td,{children:"Data/List"}),(0,s.jsx)(t.td,{children:"Output when the condition is met."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"false_output"}),(0,s.jsx)(t.td,{children:"Data/List"}),(0,s.jsx)(t.td,{children:"Output when the condition is not met."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"flow-as-tool",children:"Flow as Tool"}),"\n",(0,s.jsx)(t.p,{children:"This component constructs a tool from a function that runs a loaded flow."}),"\n",(0,s.jsx)(t.h3,{id:"inputs-2",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"flow_name"}),(0,s.jsx)(t.td,{children:"Dropdown"}),(0,s.jsx)(t.td,{children:"The name of the flow to run."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tool_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The name of the tool."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tool_description"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The description of the tool."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"return_direct"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"If true, returns the result directly from the tool."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"outputs-2",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"api_build_tool"}),(0,s.jsx)(t.td,{children:"Tool"}),(0,s.jsx)(t.td,{children:"The constructed tool from the flow."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"listen",children:"Listen"}),"\n",(0,s.jsx)(t.p,{children:"This component listens for a notification and retrieves its associated state."}),"\n",(0,s.jsx)(t.h3,{id:"inputs-3",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The name of the notification to listen for."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"outputs-3",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"output"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"The state associated with the notification."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"notify",children:"Notify"}),"\n",(0,s.jsx)(t.p,{children:"This component generates a notification for the Listen component to use."}),"\n",(0,s.jsx)(t.h3,{id:"inputs-4",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The name of the notification."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"The data to store in the notification."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"append"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"If true, the record will be appended to the existing notification."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"outputs-4",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"output"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"The data stored in the notification."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"run-flow",children:"Run flow"}),"\n",(0,s.jsx)(t.p,{children:"This component allows you to run a specified flow with given inputs and tweaks."}),"\n",(0,s.jsx)(t.p,{children:"The RunFlowComponent executes a specified flow within a larger workflow. It provides the ability to run a flow with custom inputs and apply tweaks to modify its behavior."}),"\n",(0,s.jsx)(t.h3,{id:"inputs-5",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"input_value"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The input value for the flow to process."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"flow_name"}),(0,s.jsx)(t.td,{children:"Dropdown"}),(0,s.jsx)(t.td,{children:"The name of the flow to run."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tweaks"}),(0,s.jsx)(t.td,{children:"Nested Dict"}),(0,s.jsx)(t.td,{children:"Tweaks to apply to the flow."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"outputs-5",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"run_outputs"}),(0,s.jsx)(t.td,{children:"List[Data]"}),(0,s.jsx)(t.td,{children:"The results generated from running the flow."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"sub-flow",children:"Sub Flow"}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.code,{children:"SubFlowComponent"})," generates a component from a flow with all of its inputs and outputs."]}),"\n",(0,s.jsx)(t.p,{children:"This component can integrate entire flows as components within a larger workflow. It dynamically generates inputs based on the selected flow and executes the flow with provided parameters."}),"\n",(0,s.jsx)(t.h3,{id:"inputs-6",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"flow_name"}),(0,s.jsx)(t.td,{children:"Dropdown"}),(0,s.jsx)(t.td,{children:"The name of the flow to run."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"outputs-6",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"flow_outputs"}),(0,s.jsx)(t.td,{children:"List[Data]"}),(0,s.jsx)(t.td,{children:"The outputs generated from the flow."})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);