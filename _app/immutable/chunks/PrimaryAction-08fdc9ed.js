import{S as H,i as K,s as L,D as M,K as S,k as j,a as Q,l as v,m as P,h as C,c as T,n as z,L as R,b as J,F as A,N as E,G as U,H as W,I as X,O as Y,P as D,f as Z,t as N,Q as w,R as I,T as x,V as $,v as ee}from"./index-4d38a571.js";import{c as O,u as le,f as se}from"./SmuiElement-b2877459.js";import{R as te}from"./Ripple-822041cf.js";function ae(t){let l,n,c,u,f,r,_,d,m,y;const b=t[17].default,i=M(b,t,t[16],null);let h=[{class:u=O({[t[1]]:!0,"mdc-card__primary-action":!0,"smui-card__primary-action--padded":t[5],...t[8]})},{style:f=Object.entries(t[9]).map(V).concat([t[2]]).join(" ")},{tabindex:t[6]},t[14]],o={};for(let e=0;e<h.length;e+=1)o=S(o,h[e]);return{c(){l=j("div"),n=j("div"),c=Q(),i&&i.c(),this.h()},l(e){l=v(e,"DIV",{class:!0,style:!0,tabindex:!0});var a=P(l);n=v(a,"DIV",{class:!0}),P(n).forEach(C),c=T(a),i&&i.l(a),a.forEach(C),this.h()},h(){z(n,"class","mdc-card__ripple"),R(l,o)},m(e,a){J(e,l,a),A(l,n),A(l,c),i&&i.m(l,null),t[18](l),d=!0,m||(y=[E(r=le.call(null,l,t[0])),E(t[10].call(null,l)),E(_=te.call(null,l,{ripple:t[3],unbounded:!1,color:t[4],addClass:t[11],removeClass:t[12],addStyle:t[13]}))],m=!0)},p(e,[a]){i&&i.p&&(!d||a&65536)&&U(i,b,e,e[16],d?X(b,e[16],a,null):W(e[16]),null),R(l,o=Y(h,[(!d||a&290&&u!==(u=O({[e[1]]:!0,"mdc-card__primary-action":!0,"smui-card__primary-action--padded":e[5],...e[8]})))&&{class:u},(!d||a&516&&f!==(f=Object.entries(e[9]).map(V).concat([e[2]]).join(" ")))&&{style:f},(!d||a&64)&&{tabindex:e[6]},a&16384&&e[14]])),r&&D(r.update)&&a&1&&r.update.call(null,e[0]),_&&D(_.update)&&a&24&&_.update.call(null,{ripple:e[3],unbounded:!1,color:e[4],addClass:e[11],removeClass:e[12],addStyle:e[13]})},i(e){d||(Z(i,e),d=!0)},o(e){N(i,e),d=!1},d(e){e&&C(l),i&&i.d(e),t[18](null),m=!1,w(y)}}}const V=([t,l])=>`${t}: ${l};`;function ne(t,l,n){const c=["use","class","style","ripple","color","padded","tabindex","getElement"];let u=I(l,c),{$$slots:f={},$$scope:r}=l;const _=se(x());let{use:d=[]}=l,{class:m=""}=l,{style:y=""}=l,{ripple:b=!0}=l,{color:i=void 0}=l,{padded:h=!1}=l,{tabindex:o=0}=l,e,a={},p={};function k(s){a[s]||n(8,a[s]=!0,a)}function q(s){(!(s in a)||a[s])&&n(8,a[s]=!1,a)}function B(s,g){p[s]!=g&&(g===""||g==null?(delete p[s],n(9,p)):n(9,p[s]=g,p))}function F(){return e}function G(s){ee[s?"unshift":"push"](()=>{e=s,n(7,e)})}return t.$$set=s=>{l=S(S({},l),$(s)),n(14,u=I(l,c)),"use"in s&&n(0,d=s.use),"class"in s&&n(1,m=s.class),"style"in s&&n(2,y=s.style),"ripple"in s&&n(3,b=s.ripple),"color"in s&&n(4,i=s.color),"padded"in s&&n(5,h=s.padded),"tabindex"in s&&n(6,o=s.tabindex),"$$scope"in s&&n(16,r=s.$$scope)},[d,m,y,b,i,h,o,e,a,p,_,k,q,B,u,F,r,f,G]}class re extends H{constructor(l){super(),K(this,l,ne,ae,L,{use:0,class:1,style:2,ripple:3,color:4,padded:5,tabindex:6,getElement:15})}get getElement(){return this.$$.ctx[15]}}export{re as P};