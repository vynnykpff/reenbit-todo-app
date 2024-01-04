import{G as T,r as h,T as $,j as e,B as j,a as v,u as z,b as x,c as C,d as Z,R as A,e as E,I as M,f as Y,s as D,g as B,N as S,h as W,i as K,k as q,l as R,m as X,n as J,o as Q,p as w,q as p,t as tt,v as et,w as ot,x as nt,y as b,z as st,A as at,C as O,D as ct,E as y,L as dt}from"./index-b3c6942a.js";function rt(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"}}]})(t)}function it(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"}}]})(t)}function lt(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}},{tag:"path",attr:{d:"M9 10h2v8H9zm4 0h2v8h-2z"}}]})(t)}const ht="_switchThemeButton_1qxg7_1",ut={switchThemeButton:ht},mt=()=>{const{type:t,setType:o}=h.useContext($);return e.jsx(j,{className:ut.switchThemeButton,onClick:()=>o(n=>n===v.LIGHT?v.DARK:v.LIGHT),children:t===v.LIGHT?e.jsx(rt,{}):e.jsx(it,{})})},Tt=""+new URL("logo-c9d4e892.svg",import.meta.url).href,pt="_headerContainer_1wjp0_1",Ct="_headerTitle_1wjp0_10",_t="_headerContent_1wjp0_10",gt="_headerNavigationContainer_1wjp0_20",xt="_logoutButton_1wjp0_27",g={headerContainer:pt,headerTitle:Ct,headerContent:_t,headerNavigationContainer:gt,logoutButton:xt},Lt=()=>{const t=z(),o=x(),{user:n}=C(a=>a.authReducer);h.useEffect(()=>{n!=null&&n._id||s()},[n==null?void 0:n._id]);const s=()=>{localStorage.removeItem("access-token"),o({type:Z.RESET_TODOS}),t(A.LOGIN)};return e.jsxs("header",{className:g.headerContainer,children:[e.jsx("img",{className:g.headerLogo,src:Tt,alt:"logo image"}),e.jsxs("h1",{className:g.headerTitle,children:[e.jsx("span",{className:g.headerContent,children:"to"}),e.jsx("span",{className:g.headerContent,children:"do"})]}),e.jsxs("div",{className:g.headerNavigationContainer,children:[e.jsx(j,{className:g.logoutButton,onClick:s,children:"Logout"}),e.jsx(mt,{})]})]})};function jt(t){return T({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}}]})(t)}function vt(t){return T({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"}}]})(t)}const It="_createTodoContainer_128yt_1",Nt="_createTodoInput_128yt_15",ft="_createTodoButton_128yt_28",yt="_createTodoButtonTitle_128yt_46",I={createTodoContainer:It,createTodoInput:Nt,createTodoButton:ft,createTodoButtonTitle:yt},Et="Enter",Dt=()=>{const{title:t}=C(r=>r.todoReducer),{user:o}=C(r=>r.authReducer),n=x(),s=localStorage.getItem("access-token"),a=r=>{n(Q(r))},i=E("createTodoModal")[1],l=async r=>{const u=t.trim();if(r.code===Et){if(!t.trim().length)return n(D({title:B.EMPTY_TITLE,type:S.ERROR}));await n(W({createdDate:K(new Date),expirationDate:q(new Date),title:u,isCompleted:!1,userId:o==null?void 0:o._id})),await n(R(s)),a("")}},_=r=>{const u=r.target.value;if(u.trim().length>=X.MAX_TITLE_LENGTH)return n(D({title:B.MAX_LENGTH,type:S.ERROR})),a(t.replace(u,""));a(J(u))};return e.jsxs("div",{className:I.createTodoContainer,children:[e.jsx(M,{onKeyDown:l,onChange:_,value:t,className:I.createTodoInput,placeholder:"Enter new todo"}),e.jsx(j,{onClick:()=>i(!0),type:Y.BUTTON,className:I.createTodoButton,children:e.jsxs("span",{className:I.createTodoButtonTitle,children:[e.jsx("span",{children:"Create"}),e.jsx(vt,{})]})})]})},Bt=500;function St(t,o=Bt){const[n,s]=h.useState(t);return h.useEffect(()=>{const a=setTimeout(()=>s(t),o);return()=>{clearTimeout(a)}},[t]),n}function kt(t){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"}}]})(t)}const Mt="_searchTodoContainer_up0lw_1",wt="_searchClearIcon_up0lw_4",Ht="_searchClearIconDisabled_up0lw_17",Vt="_searchTodoInput_up0lw_21",N={searchTodoContainer:Mt,searchClearIcon:wt,searchClearIconDisabled:Ht,searchTodoInput:Vt},zt=()=>{const[t,o]=h.useState(""),{filterValue:n,searchValue:s}=C(r=>r.todoReducer),a=St(t,500),i=x();h.useEffect(()=>{t.length&&!s.length&&o("")},[n,s]),h.useEffect(()=>{i(w(t))},[a]);const l=r=>{o(r.target.value)},_=()=>{s.length&&i(w(""))};return e.jsxs("span",{className:N.searchTodoContainer,children:[e.jsx(kt,{onClick:_,className:p(N.searchClearIcon,!s.length&&N.searchClearIconDisabled)}),e.jsx(M,{value:t,onChange:l,className:N.searchTodoInput,placeholder:"Enter to search for your todos"})]})},At=t=>tt(new Date,et(t));function Rt(t){return T({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]})(t)}function bt(t){return T({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}}]})(t)}const Ot="_todoContainer_sr1mp_1",Ut="_todoContent_sr1mp_16",Ft="_todoCheck_sr1mp_20",Gt="_todoInput_sr1mp_25",Pt="_todoCheckbox_sr1mp_29",$t="_todoTitle_sr1mp_38",Zt="_todoCompleted_sr1mp_46",Yt="_todoDateContainer_sr1mp_51",Wt="_todoDateContent_sr1mp_57",Kt="_todoIcon_sr1mp_62",qt="_infoIcon_sr1mp_71",Xt="_trashIcon_sr1mp_78",Jt="_editIcon_sr1mp_85",Qt="_disabledEditIcon_sr1mp_92",te="_expiredTodoContainer_sr1mp_97",c={todoContainer:Ot,todoContent:Ut,todoCheck:Ft,todoInput:Gt,todoCheckbox:Pt,todoTitle:$t,todoCompleted:Zt,todoDateContainer:Yt,todoDateContent:Wt,todoIcon:Kt,infoIcon:qt,trashIcon:Xt,editIcon:Jt,disabledEditIcon:Qt,expiredTodoContainer:te},ee=({title:t,createdDate:o,expirationDate:n,_id:s,isCompleted:a})=>{const[i,l]=h.useState(!1),_=E("editTodoModal")[1],r=E("confirmModal")[1],u=x(),U=()=>{u(ot(s))},F=()=>{r(!0,{confirmCallback:()=>{u(nt(s)),u(D({title:B.DELETE_TODO,type:S.SUCCESS}))},message:b.DELETE_TODO})},G=()=>{a||(_(!0),u(st({_id:s,title:t,expirationDate:n,createdDate:o,isCompleted:a})))};return e.jsxs("li",{className:p(c.todoContainer,!At(n)&&c.expiredTodoContainer),children:[e.jsxs("div",{children:[e.jsxs("div",{className:c.todoContent,children:[e.jsxs("label",{className:c.todoCheck,children:[e.jsx(M,{className:c.todoInput,type:"checkbox",checked:a,onChange:U}),e.jsx("span",{className:c.todoCheckbox})]}),e.jsx("p",{className:p(c.todoTitle,a&&c.todoCompleted),children:t})]}),i&&e.jsxs("ul",{className:c.todoDateContainer,children:[e.jsx("li",{className:c.todoDateContent,children:o}),e.jsx(jt,{className:c.todoDateContent}),e.jsxs("li",{className:c.todoDateContent,children:[" ",n]})]})]}),e.jsx(bt,{className:p(c.todoIcon,c.editIcon,a&&c.disabledEditIcon),onClick:G}),e.jsx(lt,{className:p(c.todoIcon,c.trashIcon),onClick:F}),e.jsx(Rt,{className:p(c.todoIcon,c.infoIcon),onClick:()=>l(P=>!P)})]})};let f;const oe=new Uint8Array(16);function ne(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(oe)}const d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));function se(t,o=0){return d[t[o+0]]+d[t[o+1]]+d[t[o+2]]+d[t[o+3]]+"-"+d[t[o+4]]+d[t[o+5]]+"-"+d[t[o+6]]+d[t[o+7]]+"-"+d[t[o+8]]+d[t[o+9]]+"-"+d[t[o+10]]+d[t[o+11]]+d[t[o+12]]+d[t[o+13]]+d[t[o+14]]+d[t[o+15]]}const ae=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),H={randomUUID:ae};function ce(t,o,n){if(H.randomUUID&&!o&&!t)return H.randomUUID();t=t||{};const s=t.random||(t.rng||ne)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,o){n=n||0;for(let a=0;a<16;++a)o[n+a]=s[a];return o}return se(s)}const de="_filteredTodoContainer_1rtzp_1",re="_filteredTodoButton_1rtzp_19",k={filteredTodoContainer:de,filteredTodoButton:re},ie=()=>{const{filterValue:t}=C(n=>n.todoReducer),o=x();return e.jsx("div",{className:k.filteredTodoContainer,children:at.map(n=>e.jsx(j,{disabled:t===n,className:k.filteredTodoButton,onClick:()=>o(O(n)),children:n},ce()))})},le="_todoListHeader_tcd4m_1",he="_todoListHeaderWrapper_tcd4m_12",ue="_todoListTitle_tcd4m_24",me="_todoListCounter_tcd4m_46",Te="_clearCompletedTodosButton_tcd4m_54",pe="_completedTodosTitle_tcd4m_58",m={todoListHeader:le,todoListHeaderWrapper:he,todoListTitle:ue,todoListCounter:me,clearCompletedTodosButton:Te,completedTodosTitle:pe},Ce=()=>{const{originalTodos:t}=C(l=>l.todoReducer),[o,n]=h.useState(0),s=E("confirmModal")[1],a=x();h.useEffect(()=>{const l=t.filter(_=>_.isCompleted);n(l.length)},[t]);const i=()=>{s(!0,{confirmCallback:()=>{a(D({title:B.DELETE_COMPLETED_TODOS,type:S.SUCCESS})),a(ct()),a(O(y.ALL))},message:b.DELETE_COMPLETED_TODOS})};return e.jsxs("div",{className:m.todoListHeader,children:[e.jsxs("div",{className:m.todoListHeaderWrapper,children:[e.jsxs("div",{className:m.todoListContentContainer,children:[e.jsxs("p",{className:m.todoListTitle,children:["Tasks created",e.jsx("span",{className:m.todoListCounter,children:t.length})]}),e.jsxs("p",{className:p(m.todoListTitle,m.completedTodosTitle),children:["Completed",e.jsxs("span",{className:m.todoListCounter,children:[o," of ",t.length]})]})]}),e.jsx(j,{disabled:!t.filter(l=>l.isCompleted).length,onClick:i,className:p(k.filteredTodoButton,m.clearCompletedTodosButton),children:"Clear Completed"})]}),e.jsx(ie,{})]})};function _e(t){return T({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"}}]})(t)}const ge="_todoListNoDataContainer_1a1ig_1",xe="_todoListText_1a1ig_14",L={todoListNoDataContainer:ge,todoListText:xe},Le=({title:t})=>{const{searchValue:o}=C(n=>n.todoReducer);return e.jsx("div",{className:L.todoListNoDataContainer,children:e.jsxs("div",{children:[e.jsx(_e,{}),t===y.ALL&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:L.todoListText,children:"You don't have any tasks registered yet"}),e.jsx("p",{className:L.todoListText,children:"Create tasks and organize your to-do items"})]}),t===y.ACTIVE&&e.jsx("p",{className:L.todoListText,children:"You don't have any active tasks registered yet"}),t===y.COMPLETED&&e.jsx("p",{className:L.todoListText,children:"You don't have any completed tasks registered yet"}),!!o.length&&e.jsx("p",{className:L.todoListText,children:t})]})})},je="_todoListSection_1656h_1",V={todoListSection:je},ve=()=>{const{searchedTodos:t,filterValue:o,searchValue:n,isPending:s}=C(i=>i.todoReducer),a=()=>n.length?`Nothing found in the filter: ${o}`:o;return e.jsxs("section",{className:V.todoListSection,children:[e.jsx(Ce,{}),s?e.jsx(dt,{}):e.jsx("ul",{className:V.todoListContainer,children:t.length?t.map(i=>e.jsx(ee,{...i},i._id)):e.jsx(Le,{title:a()})})]})},Ie="_todoLayoutContainer_135o9_1",Ne={todoLayoutContainer:Ie},fe=()=>e.jsxs("main",{className:Ne.todoLayoutContainer,children:[e.jsx(Dt,{}),e.jsx(zt,{}),e.jsx(ve,{})]}),Ee=()=>{const t=z(),o=x(),n=localStorage.getItem("access-token");return h.useEffect(()=>{if(!n){t(A.LOGIN);return}o(R(n))},[]),n?e.jsxs(e.Fragment,{children:[e.jsx(Lt,{}),e.jsx(fe,{})]}):null};export{Ee as default};
