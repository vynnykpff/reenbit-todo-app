import{G as T,r as u,T as Y,j as o,B as j,a as N,u as U,b as g,c as h,d as K,R as F,e as q,m as X,f as J,s as G,g as E,I as A,h as Q,i as B,k as S,N as w,l as tt,n as V,o as M,p as ot,q as et,t as nt,v as L,w as R,x as I,y as st,z as at,A as x,C as ct,D as dt,E as rt,F as it,H as P,J as lt,K as ut,L as ht,M as Tt}from"./index-3d7e7cd5.js";function mt(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"}}]})(t)}function pt(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(t)}function _t(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}},{tag:"path",attr:{d:"M9 10h2v8H9zm4 0h2v8h-2z"}}]})(t)}const Ct="_switchThemeButton_1qxg7_1",xt={switchThemeButton:Ct},gt=()=>{const{type:t,setType:e}=u.useContext(Y);return o.jsx(j,{className:xt.switchThemeButton,onClick:()=>e(n=>n===N.LIGHT?N.DARK:N.LIGHT),children:t===N.LIGHT?o.jsx(mt,{}):o.jsx(pt,{})})},Lt=""+new URL("logo-c9d4e892.svg",import.meta.url).href,vt="_headerContainer_1wjp0_1",ft="_headerTitle_1wjp0_10",It="_headerContent_1wjp0_10",jt="_headerNavigationContainer_1wjp0_20",Nt="_logoutButton_1wjp0_27",C={headerContainer:vt,headerTitle:ft,headerContent:It,headerNavigationContainer:jt,logoutButton:Nt},Dt=()=>{const t=U(),e=g(),{user:n}=h(a=>a.authReducer);u.useEffect(()=>{n!=null&&n.id||s()},[n==null?void 0:n.id]);const s=()=>{localStorage.removeItem("token"),e({type:K.RESET_TODOS}),t(F.LOGIN)};return o.jsxs("header",{className:C.headerContainer,children:[o.jsx("img",{className:C.headerLogo,src:Lt,alt:"logo image"}),o.jsxs("h1",{className:C.headerTitle,children:[o.jsx("span",{className:C.headerContent,children:"to"}),o.jsx("span",{className:C.headerContent,children:"do"})]}),o.jsxs("div",{className:C.headerNavigationContainer,children:[o.jsx(j,{className:C.logoutButton,onClick:s,children:"Logout"}),o.jsx(gt,{})]})]})},yt=t=>{const e=q.HOURS_IN_DAY*X*J,n=new Date(t.getTime()+e);return G(n)};function Et(t){return T({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}}]})(t)}function Bt(t){return T({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"}}]})(t)}const St="_createTodoContainer_128yt_1",wt="_createTodoInput_128yt_15",Mt="_createTodoButton_128yt_28",kt="_createTodoButtonTitle_128yt_46",D={createTodoContainer:St,createTodoInput:wt,createTodoButton:Mt,createTodoButtonTitle:kt},Ht="Enter",At=()=>{const{title:t,searchValue:e}=h(r=>r.todoReducer),{user:n}=h(r=>r.authReducer),s=g(),a=r=>{s(nt(r))},i=E("createTodoModal")[1],v=async r=>{const p=t.trim();if(r.code===Ht){if(!t.trim().length)return s(B({title:S.EMPTY_TITLE,type:w.ERROR}));await s(tt({createdDate:G(new Date),expirationDate:yt(new Date),title:p,isCompleted:!1,userId:n==null?void 0:n.id})),s(V({filter:L.ALL,title:e})),s(M(L.ALL)),a("")}},m=r=>{const p=r.target.value;if(p.trim().length>=ot.MAX_TITLE_LENGTH)return s(B({title:S.MAX_LENGTH,type:w.ERROR})),a(t.replace(p,""));a(et(p))};return o.jsxs("div",{className:D.createTodoContainer,children:[o.jsx(A,{onKeyDown:v,onChange:m,value:t,className:D.createTodoInput,placeholder:"Enter new todo"}),o.jsx(j,{onClick:()=>i(!0),type:Q.BUTTON,className:D.createTodoButton,children:o.jsxs("span",{className:D.createTodoButtonTitle,children:[o.jsx("span",{children:"Create"}),o.jsx(Bt,{})]})})]})},Vt=(t,e)=>{const n=u.useRef(!1);u.useEffect(()=>{if(!n.current){n.current=!0;return}return t()},e)},Rt=500;function zt(t,e=Rt){const[n,s]=u.useState(t);return u.useEffect(()=>{const a=setTimeout(()=>s(t),e);return()=>{clearTimeout(a)}},[t]),n}function bt(t){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"}}]})(t)}const Ot="_searchTodoContainer_up0lw_1",Ut="_searchClearIcon_up0lw_4",Ft="_searchClearIconDisabled_up0lw_17",Gt="_searchTodoInput_up0lw_21",k={searchTodoContainer:Ot,searchClearIcon:Ut,searchClearIconDisabled:Ft,searchTodoInput:Gt},Pt=500,$t=()=>{const[t,e]=u.useState(""),{filterValue:n}=h(m=>m.todoReducer),s=zt(t,Pt),a=g();Vt(()=>{if(t.length){a(R(t)),a(V({title:t,filter:n}));return}a(I({filter:n})),a(R(""))},[s]);const i=m=>{e(m.target.value)},v=()=>{t.length&&e("")};return o.jsxs("span",{className:k.searchTodoContainer,children:[o.jsx(bt,{onClick:v,className:k.searchClearIcon}),o.jsx(A,{value:t,onChange:i,className:k.searchTodoInput,placeholder:"Enter to search for your todos"})]})},Zt=t=>st(new Date,at(t));function Wt(t){return T({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]})(t)}function Yt(t){return T({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}}]})(t)}const Kt="_todoContainer_sr1mp_1",qt="_todoContent_sr1mp_16",Xt="_todoCheck_sr1mp_20",Jt="_todoInput_sr1mp_25",Qt="_todoCheckbox_sr1mp_29",to="_todoTitle_sr1mp_38",oo="_todoCompleted_sr1mp_46",eo="_todoDateContainer_sr1mp_51",no="_todoDateContent_sr1mp_57",so="_todoIcon_sr1mp_62",ao="_infoIcon_sr1mp_71",co="_trashIcon_sr1mp_78",ro="_editIcon_sr1mp_85",io="_disabledEditIcon_sr1mp_92",lo="_expiredTodoContainer_sr1mp_97",c={todoContainer:Kt,todoContent:qt,todoCheck:Xt,todoInput:Jt,todoCheckbox:Qt,todoTitle:to,todoCompleted:oo,todoDateContainer:eo,todoDateContent:no,todoIcon:so,infoIcon:ao,trashIcon:co,editIcon:ro,disabledEditIcon:io,expiredTodoContainer:lo},uo=({title:t,createdDate:e,expirationDate:n,id:s="",isCompleted:a})=>{const{filterValue:i}=h(f=>f.todoReducer),[v,m]=u.useState(!1),r=E("editTodoModal")[1],p=E("confirmModal")[1],_=g(),$=async()=>{const f=ct(n,dt,new Date).toISOString();await _(rt({id:s,title:t,expirationDate:f,createdDate:e,isCompleted:!a})),_(I({filter:i}))},Z=()=>{p(!0,{confirmCallback:async()=>{await _(it(s)),_(I({filter:L.ALL})),_(M(L.ALL)),_(B({title:S.DELETE_TODO,type:w.SUCCESS}))},message:P.DELETE_TODO})},W=()=>{a||(r(!0),_(lt({id:s,title:t,expirationDate:n,createdDate:e,isCompleted:a})))};return o.jsxs("li",{className:x(c.todoContainer,!Zt(n)&&c.expiredTodoContainer),children:[o.jsxs("div",{children:[o.jsxs("div",{className:c.todoContent,children:[o.jsxs("label",{className:c.todoCheck,children:[o.jsx(A,{className:c.todoInput,type:"checkbox",checked:a,onChange:$}),o.jsx("span",{className:c.todoCheckbox})]}),o.jsx("p",{className:x(c.todoTitle,a&&c.todoCompleted),children:t})]}),v&&o.jsxs("ul",{className:c.todoDateContainer,children:[o.jsx("li",{className:c.todoDateContent,children:e}),o.jsx(Et,{className:c.todoDateContent}),o.jsxs("li",{className:c.todoDateContent,children:[" ",n]})]})]}),o.jsx(Yt,{className:x(c.todoIcon,c.editIcon,a&&c.disabledEditIcon),onClick:W}),o.jsx(_t,{className:x(c.todoIcon,c.trashIcon),onClick:Z}),o.jsx(Wt,{className:x(c.todoIcon,c.infoIcon),onClick:()=>m(f=>!f)})]})};let y;const ho=new Uint8Array(16);function To(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(ho)}const d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));function mo(t,e=0){return d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]}const po=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),z={randomUUID:po};function _o(t,e,n){if(z.randomUUID&&!e&&!t)return z.randomUUID();t=t||{};const s=t.random||(t.rng||To)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let a=0;a<16;++a)e[n+a]=s[a];return e}return mo(s)}const Co="_filteredTodoContainer_1rtzp_1",xo="_filteredTodoButton_1rtzp_19",H={filteredTodoContainer:Co,filteredTodoButton:xo},go=()=>{const{filterValue:t,searchValue:e}=h(a=>a.todoReducer),n=g(),s=async a=>{n(M(a)),n(V({filter:a,title:e}))};return o.jsx("div",{className:H.filteredTodoContainer,children:ut.map(a=>o.jsx(j,{disabled:t===a,className:H.filteredTodoButton,onClick:()=>s(a),children:a},_o()))})},Lo="_todoListHeader_tcd4m_1",vo="_todoListHeaderWrapper_tcd4m_12",fo="_todoListTitle_tcd4m_24",Io="_todoListCounter_tcd4m_46",jo="_clearCompletedTodosButton_tcd4m_54",No="_completedTodosTitle_tcd4m_58",l={todoListHeader:Lo,todoListHeaderWrapper:vo,todoListTitle:fo,todoListCounter:Io,clearCompletedTodosButton:jo,completedTodosTitle:No},Do=()=>{const{amountTodos:{total:t,completed:e}}=h(i=>i.todoReducer),n=E("confirmModal")[1],s=g(),a=()=>{n(!0,{confirmCallback:async()=>{s(B({title:S.DELETE_COMPLETED_TODOS,type:w.SUCCESS})),await s(ht()),s(I({filter:L.ALL})),s(M(L.ALL))},message:P.DELETE_COMPLETED_TODOS})};return o.jsxs("div",{className:l.todoListHeader,children:[o.jsxs("div",{className:l.todoListHeaderWrapper,children:[o.jsxs("div",{className:l.todoListContentContainer,children:[o.jsxs("p",{className:l.todoListTitle,children:["Tasks created",o.jsx("span",{className:l.otdoListCounter,children:t})]}),o.jsxs("p",{className:x(l.todoListTitle,l.completedTodosTitle),children:["Completed",o.jsxs("span",{className:l.todoListCounter,children:[e," of ",t]})]})]}),o.jsx(j,{disabled:!e,onClick:a,className:x(H.filteredTodoButton,l.clearCompletedTodosButton),children:"Clear Completed"})]}),o.jsx(go,{})]})};function yo(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"}}]})(t)}const Eo="_todoListNoDataContainer_f312z_1",Bo="_todoListText_f312z_15",b={todoListNoDataContainer:Eo,todoListText:Bo},So=({filterValue:t})=>o.jsxs("div",{className:b.todoListNoDataContainer,children:[o.jsx(yo,{}),o.jsxs("p",{className:b.todoListText,children:["Nothing found in the filter: ",t]})]}),wo="_todoListSection_1656h_1",O={todoListSection:wo},Mo=()=>{const{todos:t,filterValue:e,isPending:n}=h(s=>s.todoReducer);return o.jsxs("section",{className:O.todoListSection,children:[o.jsx(Do,{}),n?o.jsx(Tt,{}):o.jsx("ul",{className:O.todoListContainer,children:t.length?t.map(s=>o.jsx(uo,{...s},s.id)):o.jsx(So,{filterValue:e})})]})},ko="_todoLayoutContainer_135o9_1",Ho={todoLayoutContainer:ko},Ao=()=>o.jsxs("main",{className:Ho.todoLayoutContainer,children:[o.jsx(At,{}),o.jsx($t,{}),o.jsx(Mo,{})]}),Ro=()=>{const t=U(),e=g(),{filterValue:n}=h(i=>i.todoReducer),s=localStorage.getItem("token"),a=async()=>{e(I({filter:n}))};return u.useEffect(()=>{if(!s){t(F.LOGIN);return}a()},[]),s?o.jsxs(o.Fragment,{children:[o.jsx(Dt,{}),o.jsx(Ao,{})]}):null};export{Ro as default};
