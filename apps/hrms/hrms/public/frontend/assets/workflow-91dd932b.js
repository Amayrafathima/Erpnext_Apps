var g=(r,o,a)=>new Promise((w,u)=>{var m=l=>{try{p(a.next(l))}catch(t){u(t)}},f=l=>{try{p(a.throw(l))}catch(t){u(t)}},p=l=>l.done?w(l.value):Promise.resolve(l.value).then(m,f);p((a=a.apply(r,o)).next())});import{e as i,j as S,Y as W,A as h}from"./index-a4ebe9d4.js";const n=i({url:"hrms.api.get_company_currencies",auto:!0}),_=i({url:"hrms.api.get_currency_symbols",auto:!0});function R(r){var o,a;return(a=(o=n==null?void 0:n.data)==null?void 0:o[r])==null?void 0:a[0]}function C(r){var o,a;return(a=(o=n==null?void 0:n.data)==null?void 0:o[r])==null?void 0:a[1]}function E(r){var o;return(o=_==null?void 0:_.data)==null?void 0:o[r]}function v(r){const o=i({url:"hrms.api.get_workflow",params:{doctype:r},cache:["hrms:workflow",r],onSuccess:t=>{console.log("Workflow loaded successfully ✅",t)}});o.reload();const a=S(()=>{const t=o==null?void 0:o.data;return Object.keys(t||{}).length>0}),w=()=>{var t,e;return(t=o.data)!=null&&t.override_status?"":(e=o.data)==null?void 0:e.workflow_state_field},u=t=>{var e;return(e=o.data)==null?void 0:e.states.find(s=>s.doc_status==t)},m=t=>g(this,null,function*(){return yield i({url:"frappe.model.workflow.get_transitions",params:{doc:t},transform:s=>{var c,d;const y=((d=(c=W)==null?void 0:c.data)==null?void 0:d.name)==t.owner;return s.filter(k=>k.allow_self_approval||!y).map(k=>k.action)}}).reload()}),f=t=>{var e;return(e=o.data)==null?void 0:e.states.filter(s=>s.state==t).map(s=>s.allow_edit)};return{hasWorkflow:a,workflowDoc:o,getWorkflowStateField:w,getTransitions:m,getDocumentStateRoles:f,isReadOnly:t=>{var c;const e=(c=o.data)==null?void 0:c.workflow_state_field;if(!e)return!1;const s=t[e]||u(t.docstatus);return!f(s).some(d=>W.data.roles.includes(d))},applyWorkflow:(t,e)=>g(this,null,function*(){yield i({url:"frappe.model.workflow.apply_workflow",params:{doc:t,action:e},onSuccess(){h({title:"Success",text:`Workflow action '${e}' applied successfully`,icon:"check-circle",position:"bottom-center",iconClasses:"text-green-500"})},onError(){h({title:"Error",text:`Error applying workflow action: ${e}`,icon:"alert-circle",position:"bottom-center",iconClasses:"text-red-500"}),console.log(`Error applying workflow action: ${e}`)}}).reload()})}}export{E as a,C as b,R as g,v as u};