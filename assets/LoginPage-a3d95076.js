import{H as B,J as g,i as I,e as T,u as j,d as f,r as R,R as E,K as L,j as t,L as v,M,q as i,O as _,P as F,I as x,B as b,Q as A}from"./index-d2313571.js";import{l as H}from"./authThunks-e27b815b.js";var p=(a=>(a[a.MAX_PASSWORD_LENGTH=16]="MAX_PASSWORD_LENGTH",a[a.MIN_PASSWORD_LENGTH=6]="MIN_PASSWORD_LENGTH",a))(p||{}),u=(a=>(a.INVALID_EMAIL="Invalid email",a.MAX_LENGTH="Must be at most 16 characters",a.MIN_LENGTH="Must be at least 6 characters",a))(u||{});const O=B().shape({email:g().email(u.INVALID_EMAIL).required(I.REQUIRED_FIELD),password:g().max(p.MAX_PASSWORD_LENGTH,u.MAX_LENGTH).min(p.MIN_PASSWORD_LENGTH,u.MIN_LENGTH).required(I.REQUIRED_FIELD)}),z="_authForm_3zb5r_1",G="_authFieldContainer_3zb5r_6",D="_authInputContainer_3zb5r_12",w="_authFieldError_3zb5r_19",y="_authLabel_3zb5r_23",k="_authInput_3zb5r_12",W="_authFormNavigationContainer_3zb5r_39",X="_formButton_3zb5r_43",q="_authButton_3zb5r_51",Q="_resetButton_3zb5r_55",$="_testError_3zb5r_60",e={authForm:z,authFieldContainer:G,authInputContainer:D,authFieldError:w,authLabel:y,authInput:k,authFormNavigationContainer:W,formButton:X,authButton:q,resetButton:Q,testError:$},U=()=>{const a=T(),l=j(),{error:h,isPending:m,user:c}=f(o=>o.authReducer);R.useEffect(()=>{c!=null&&c._id&&localStorage.getItem("access-token")&&l(E.HOME),a({type:L.RESET_ERROR})},[c]);const C=async o=>{a(H({...o}))},S=o=>{o(),a({type:L.RESET_ERROR})};return t.jsx("form",{className:e.authForm,children:m?t.jsx(v,{}):t.jsx(M,{initialValues:{email:"",password:""},validationSchema:O,onSubmit:C,children:({handleSubmit:o,handleBlur:N,resetForm:P})=>t.jsxs("div",{className:e.authFieldContainer,children:[t.jsx("span",{className:i(_.modalError,e.authFieldError,e.testError),children:h}),t.jsx(F,{name:"email",children:({field:n,meta:r})=>t.jsxs("fieldset",{className:e.authInputContainer,children:[t.jsx("label",{className:e.authLabel,htmlFor:"email",children:"Email"}),t.jsx(x,{...n,className:e.authInput,id:"email",type:"email",placeholder:"Email",onBlur:s=>{n.onBlur(s),N(s)}}),t.jsx("span",{className:i(_.modalError,e.authFieldError),children:r.touched&&r.error})]})}),t.jsx(F,{name:"password",children:({field:n,meta:r})=>t.jsxs("fieldset",{className:e.authInputContainer,children:[t.jsx("label",{className:e.authLabel,htmlFor:"password",children:"Password"}),t.jsx(x,{...n,className:e.authInput,type:"password",id:"password",placeholder:"Password",onBlur:s=>{n.onBlur(s),N(s)}}),t.jsx("span",{className:i(_.modalError,e.authFieldError),children:r.touched&&r.error})]})}),t.jsxs("div",{className:e.authFormNavigationContainer,children:[t.jsx(b,{disabled:m,onClick:()=>S(P),className:i(e.formButton,e.resetButton),children:"Reset"}),t.jsx(b,{disabled:m,onClick:()=>o(),className:i(e.formButton,e.authButton),children:"Login"})]})]})})})},J="_loginFormContainer_a82po_1",K="_loginPageTitle_a82po_12",Y="_loginPageContainer_a82po_19",d={loginFormContainer:J,loginPageTitle:K,loginPageContainer:Y},tt=()=>{const a=localStorage.getItem("access-token"),l=j(),h=A();return R.useEffect(()=>{l(a?E.HOME:E.LOGIN)},[h.pathname]),a?null:t.jsx("div",{className:d.loginPageContainer,children:t.jsxs("div",{className:d.loginFormContainer,children:[t.jsx("h4",{className:d.loginPageTitle,children:"Login"}),t.jsx(U,{})]})})};export{tt as default};
