import{G as h,h as I,H as N,j as d,l as B,K as D,r as T,o as b,n as k,a as c,t as a,u as l,x as j,b as u,w as f,p as E,d as C,I as H,F as S,z as V,A as g}from"./index-a4ebe9d4.js";const O={class:"flex flex-col bg-white rounded w-full py-6 px-4 border-none"},A={class:"text-lg font-bold text-gray-900"},F={key:0,class:"font-medium text-sm text-gray-500 mt-1.5"},P={class:"h-40 w-full flex flex-col items-center justify-center gap-5 p-4 mb-5"},U={class:"flex flex-col gap-1.5 items-center justify-center"},z={class:"font-bold text-xl"},G={class:"font-medium text-gray-500 text-sm"},p="Employee Checkin",q={__name:"CheckInPanel",setup(K){const r=h("$socket"),_=h("$employee"),o=h("$dayjs"),y=I(null),n=N({doctype:p,fields:["name","employee","employee_name","log_type","time","device_id"],filters:{employee:_.data.name},orderBy:"time desc"});n.reload();const s=d(()=>n.list.loading||!n.data?{}:n.data[0]),Y=d(()=>{var e;return((e=s==null?void 0:s.value)==null?void 0:e.log_type)==="IN"?"check-in":"check-out"}),m=d(()=>{var e;return((e=s==null?void 0:s.value)==null?void 0:e.log_type)==="IN"?{action:"OUT",label:"Check Out"}:{action:"IN",label:"Check In"}}),M=d(()=>{var i;const e=(i=s==null?void 0:s.value)==null?void 0:i.time,t=o(e).format("hh:mm a");return o(e).isToday()?t:o(e).isYesterday()?`${t} yesterday`:o(e).isSame(o(),"year")?`${t} on ${o(e).format("D MMM")}`:`${t} on ${o(e).format("D MMM, YYYY")}`}),$=e=>{const t=e==="IN"?"Check-in":"Check-out";n.insert.submit({employee:_.data.name,log_type:e,time:y.value},{onSuccess(){V.dismiss(),g({title:"Success",text:`${t} successful!`,icon:"check-circle",position:"bottom-center",iconClasses:"text-green-500"})},onError(){g({title:"Error",text:`${t} failed!`,icon:"alert-circle",position:"bottom-center",iconClasses:"text-red-500"})}})};return B(()=>{r.emit("doctype_subscribe",p),r.on("list_update",e=>{e.doctype==p&&n.reload()})}),D(()=>{r.emit("doctype_unsubscribe",p),r.off("list_update")}),(e,t)=>{var x,v;const i=T("Button");return b(),k(S,null,[c("div",O,[c("h2",A," Hey, "+a((v=(x=l(_))==null?void 0:x.data)==null?void 0:v.first_name)+" 👋 ",1),s.value?(b(),k("div",F," Last "+a(Y.value)+" was at "+a(M.value),1)):j("",!0),u(i,{class:"mt-4 mb-1 drop-shadow-sm py-5 text-base",id:"open-checkin-modal",onClick:t[0]||(t[0]=w=>y.value=l(o)().format("YYYY-MM-DD HH:mm:ss"))},{prefix:f(()=>[u(l(E),{name:m.value.action==="IN"?"arrow-right-circle":"arrow-left-circle",class:"w-4"},null,8,["name"])]),default:f(()=>[C(" "+a(m.value.label),1)]),_:1})]),u(l(H),{ref:"modal",trigger:"open-checkin-modal","initial-breakpoint":1,breakpoints:[0,1]},{default:f(()=>[c("div",P,[c("div",U,[c("div",z,a(l(o)(y.value).format("hh:mm:ss a")),1),c("div",G,a(l(o)().format("D MMM, YYYY")),1)]),u(i,{variant:"solid",class:"w-full py-5 text-sm",onClick:t[1]||(t[1]=w=>$(m.value.action))},{default:f(()=>[C(" Confirm "+a(m.value.label),1)]),_:1})])]),_:1},512)],64)}}};export{q as default};
