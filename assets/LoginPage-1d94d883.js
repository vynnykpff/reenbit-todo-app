import{J as P,K as f,M as y,O as i,P as B,Q as I,g as L,b as x,u as T,c as v,r as b,R as E,j as t,L as M,S as H,q as h,U as d,V as S,I as R,B as F,W as O,d as G}from"./index-373c0e0e.js";const{LOGIN:D}=f,{AUTH:z}=y;class w{static async setLogin({email:s,password:o}){return(await P.post(`${z}${D}`,{email:s,password:o})).data}}function k({email:a,password:s}){return async function(o){o({type:i.AUTH_PENDING,payload:!0});const n=await w.setLogin({email:a,password:s});if(typeof n=="string"){o({type:i.AUTH_ERROR,payload:n});return}o({type:i.AUTH_SUCCESS,payload:n==null?void 0:n.user}),localStorage.setItem("access-token",n.accessToken)}}var g=(a=>(a[a.MAX_PASSWORD_LENGTH=16]="MAX_PASSWORD_LENGTH",a[a.MIN_PASSWORD_LENGTH=6]="MIN_PASSWORD_LENGTH",a))(g||{}),_=(a=>(a.INVALID_EMAIL="Invalid email",a.MAX_LENGTH="Must be at most 16 characters",a.MIN_LENGTH="Must be at least 6 characters",a))(_||{});const U=B().shape({email:I().email(_.INVALID_EMAIL).required(L.REQUIRED_FIELD),password:I().max(g.MAX_PASSWORD_LENGTH,_.MAX_LENGTH).min(g.MIN_PASSWORD_LENGTH,_.MIN_LENGTH).required(L.REQUIRED_FIELD)}),W="_authForm_3zb5r_1",X="_authFieldContainer_3zb5r_6",$="_authInputContainer_3zb5r_12",q="_authFieldError_3zb5r_19",Q="_authLabel_3zb5r_23",J="_authInput_3zb5r_12",K="_authFormNavigationContainer_3zb5r_39",Y="_formButton_3zb5r_43",Z="_authButton_3zb5r_51",V="_resetButton_3zb5r_55",tt="_testError_3zb5r_60",e={authForm:W,authFieldContainer:X,authInputContainer:$,authFieldError:q,authLabel:Q,authInput:J,authFormNavigationContainer:K,formButton:Y,authButton:Z,resetButton:V,testError:tt},at=()=>{const a=x(),s=T(),{error:o,isPending:n,user:m}=v(r=>r.authReducer);b.useEffect(()=>{m!=null&&m._id&&localStorage.getItem("access-token")&&s(E.HOME),a({type:i.RESET_ERROR})},[m]);const C=async r=>{a(k({...r}))},j=r=>{r(),a({type:i.RESET_ERROR})};return t.jsx("form",{className:e.authForm,children:n?t.jsx(M,{}):t.jsx(H,{initialValues:{email:"",password:""},validationSchema:U,onSubmit:C,children:({handleSubmit:r,handleBlur:N,resetForm:A})=>t.jsxs("div",{className:e.authFieldContainer,children:[t.jsx("span",{className:h(d.modalError,e.authFieldError,e.testError),children:o}),t.jsx(S,{name:"email",children:({field:l,meta:c})=>t.jsxs("fieldset",{className:e.authInputContainer,children:[t.jsx("label",{className:e.authLabel,htmlFor:"email",children:"Email"}),t.jsx(R,{...l,className:e.authInput,id:"email",type:"email",placeholder:"Email",onBlur:u=>{l.onBlur(u),N(u)}}),t.jsx("span",{className:h(d.modalError,e.authFieldError),children:c.touched&&c.error})]})}),t.jsx(S,{name:"password",children:({field:l,meta:c})=>t.jsxs("fieldset",{className:e.authInputContainer,children:[t.jsx("label",{className:e.authLabel,htmlFor:"password",children:"Password"}),t.jsx(R,{...l,className:e.authInput,type:"password",id:"password",placeholder:"Password",onBlur:u=>{l.onBlur(u),N(u)}}),t.jsx("span",{className:h(d.modalError,e.authFieldError),children:c.touched&&c.error})]})}),t.jsxs("div",{className:e.authFormNavigationContainer,children:[t.jsx(F,{disabled:n,onClick:()=>j(A),className:h(e.formButton,e.resetButton),children:"Reset"}),t.jsx(F,{disabled:n,onClick:()=>r(),className:h(e.formButton,e.authButton),children:"Login"})]})]})})})},et="_loginFormContainer_a82po_1",nt="_loginPageTitle_a82po_12",ot="_loginPageContainer_a82po_19",p={loginFormContainer:et,loginPageTitle:nt,loginPageContainer:ot},rt=()=>{const a=localStorage.getItem("access-token"),s=T(),o=O(),n=x();return b.useEffect(()=>{if(a){s(E.HOME);return}s(E.LOGIN),n({type:i.RESET_USER}),n({type:G.RESET_TODOS})},[o.pathname]),a?null:t.jsx("div",{className:p.loginPageContainer,children:t.jsxs("div",{className:p.loginFormContainer,children:[t.jsx("h4",{className:p.loginPageTitle,children:"Login"}),t.jsx(at,{})]})})};export{rt as default};
