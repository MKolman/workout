import{S as $,i as x,s as ee,w as le,x as M,e as T,y as z,z as U,b as y,N as Pe,X as Q,g as te,t as S,A as j,d as ne,f as E,h as k,Q as ae,R as qe,Y as De,T as se,J as Z,U as re,v as Me,D as pe,k as I,a as w,l as A,m as P,c as q,n as D,E as ke,F as ve,G as ye,q as N,r as H,H as C,u as Ee,aa as Se,I as Ue,C as je}from"../../../../chunks/index-a3a376e9.js";import{g as ie}from"../../../../chunks/navigation-8e773c7d.js";import{p as Ne}from"../../../../chunks/stores-09b749a2.js";import{c as ce,f as He,S as fe}from"../../../../chunks/SmuiElement-51ae3714.js";import{d as Ve}from"../../../../chunks/dispatch-49762ebd.js";import{R as ue}from"../../../../chunks/Ripple-dc56a77b.js";import{g as ze}from"../../../../chunks/progress-170a61e1.js";import{S as Fe}from"../../../../chunks/workout-61d879eb.js";import{I as Re}from"../../../../chunks/IconButton-2264ea67.js";function me(n){let e;return{c(){e=I("div"),this.h()},l(t){e=A(t,"DIV",{class:!0}),P(e).forEach(k),this.h()},h(){D(e,"class","mdc-button__touch")},m(t,l){y(t,e,l)},d(t){t&&k(e)}}}function Oe(n){let e,t,l,r;const m=n[28].default,d=pe(m,n,n[30],null);let o=n[6]&&me();return{c(){e=I("div"),t=w(),d&&d.c(),o&&o.c(),l=T(),this.h()},l(a){e=A(a,"DIV",{class:!0}),P(e).forEach(k),t=q(a),d&&d.l(a),o&&o.l(a),l=T(),this.h()},h(){D(e,"class","mdc-button__ripple")},m(a,i){y(a,e,i),y(a,t,i),d&&d.m(a,i),o&&o.m(a,i),y(a,l,i),r=!0},p(a,i){d&&d.p&&(!r||i[0]&1073741824)&&ke(d,m,a,a[30],r?ye(m,a[30],i,null):ve(a[30]),null),a[6]?o||(o=me(),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},i(a){r||(E(d,a),r=!0)},o(a){S(d,a),r=!1},d(a){a&&k(e),a&&k(t),d&&d.d(a),o&&o.d(a),a&&k(l)}}}function Ge(n){let e,t,l;const r=[{tag:n[10]},{use:[[ue,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[23].disabled,addClass:n[19],removeClass:n[20],addStyle:n[21]}],n[17],...n[0]]},{class:ce({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[18]==="card:action","mdc-card__action--button":n[18]==="card:action","mdc-dialog__button":n[18]==="dialog:action","mdc-top-app-bar__navigation-icon":n[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[18]==="top-app-bar:action","mdc-snackbar__action":n[18]==="snackbar:actions","mdc-banner__secondary-action":n[18]==="banner"&&n[8],"mdc-banner__primary-action":n[18]==="banner"&&!n[8],"mdc-tooltip__action":n[18]==="tooltip:rich-actions",...n[12]})},{style:Object.entries(n[13]).map(de).concat([n[2]]).join(" ")},n[16],n[15],n[14],{href:n[7]},n[23]];var m=n[9];function d(o){let a={$$slots:{default:[Oe]},$$scope:{ctx:o}};for(let i=0;i<r.length;i+=1)a=Z(a,r[i]);return{props:a}}return m&&(e=le(m,d(n)),n[29](e),e.$on("click",n[22])),{c(){e&&M(e.$$.fragment),t=T()},l(o){e&&z(e.$$.fragment,o),t=T()},m(o,a){e&&U(e,o,a),y(o,t,a),l=!0},p(o,a){const i=a[0]&12580351?Pe(r,[a[0]&1024&&{tag:o[10]},a[0]&12189721&&{use:[[ue,{ripple:o[3],unbounded:!1,color:o[4],disabled:!!o[23].disabled,addClass:o[19],removeClass:o[20],addStyle:o[21]}],o[17],...o[0]]},a[0]&266610&&{class:ce({[o[1]]:!0,"mdc-button":!0,"mdc-button--raised":o[5]==="raised","mdc-button--unelevated":o[5]==="unelevated","mdc-button--outlined":o[5]==="outlined","smui-button--color-secondary":o[4]==="secondary","mdc-button--touch":o[6],"mdc-card__action":o[18]==="card:action","mdc-card__action--button":o[18]==="card:action","mdc-dialog__button":o[18]==="dialog:action","mdc-top-app-bar__navigation-icon":o[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[18]==="top-app-bar:action","mdc-snackbar__action":o[18]==="snackbar:actions","mdc-banner__secondary-action":o[18]==="banner"&&o[8],"mdc-banner__primary-action":o[18]==="banner"&&!o[8],"mdc-tooltip__action":o[18]==="tooltip:rich-actions",...o[12]})},a[0]&8196&&{style:Object.entries(o[13]).map(de).concat([o[2]]).join(" ")},a[0]&65536&&Q(o[16]),a[0]&32768&&Q(o[15]),a[0]&16384&&Q(o[14]),a[0]&128&&{href:o[7]},a[0]&8388608&&Q(o[23])]):{};if(a[0]&1073741888&&(i.$$scope={dirty:a,ctx:o}),m!==(m=o[9])){if(e){te();const _=e;S(_.$$.fragment,1,0,()=>{j(_,1)}),ne()}m?(e=le(m,d(o)),o[29](e),e.$on("click",o[22]),M(e.$$.fragment),E(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else m&&e.$set(i)},i(o){l||(e&&E(e.$$.fragment,o),l=!0)},o(o){e&&S(e.$$.fragment,o),l=!1},d(o){n[29](null),o&&k(t),e&&j(e,o)}}}const de=([n,e])=>`${n}: ${e};`;function Je(n,e,t){let l,r,m;const d=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","tag","getElement"];let o=ae(e,d),{$$slots:a={},$$scope:i}=e;const _=He(qe());let{use:f=[]}=e,{class:b=""}=e,{style:s=""}=e,{ripple:h=!0}=e,{color:c="primary"}=e,{variant:g="text"}=e,{touch:p=!1}=e,{href:B=void 0}=e,{action:v="close"}=e,{defaultAction:F=!1}=e,{secondary:W=!1}=e,J,V={},R={},O=De("SMUI:button:context"),{component:X=fe}=e,{tag:oe=X===fe?B==null?"button":"a":void 0}=e,Y=o.disabled;se("SMUI:label:context","button"),se("SMUI:icon:context","button");function Be(u){V[u]||t(12,V[u]=!0,V)}function Ce(u){(!(u in V)||V[u])&&t(12,V[u]=!1,V)}function Ie(u,L){R[u]!=L&&(L===""||L==null?(delete R[u],t(13,R)):t(13,R[u]=L,R))}function we(){O==="banner"&&Ve(K(),W?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function K(){return J.getElement()}function Ae(u){Me[u?"unshift":"push"](()=>{J=u,t(11,J)})}return n.$$set=u=>{t(31,e=Z(Z({},e),re(u))),t(23,o=ae(e,d)),"use"in u&&t(0,f=u.use),"class"in u&&t(1,b=u.class),"style"in u&&t(2,s=u.style),"ripple"in u&&t(3,h=u.ripple),"color"in u&&t(4,c=u.color),"variant"in u&&t(5,g=u.variant),"touch"in u&&t(6,p=u.touch),"href"in u&&t(7,B=u.href),"action"in u&&t(24,v=u.action),"defaultAction"in u&&t(25,F=u.defaultAction),"secondary"in u&&t(8,W=u.secondary),"component"in u&&t(9,X=u.component),"tag"in u&&t(10,oe=u.tag),"$$scope"in u&&t(30,i=u.$$scope)},n.$$.update=()=>{if(t(16,l=O==="dialog:action"&&v!=null?{"data-mdc-dialog-action":v}:{action:e.action}),t(15,r=O==="dialog:action"&&F?{"data-mdc-dialog-button-default":""}:{default:e.default}),t(14,m=O==="banner"?{}:{secondary:e.secondary}),Y!==o.disabled){const u=K();"blur"in u&&u.blur(),t(27,Y=o.disabled)}},e=re(e),[f,b,s,h,c,g,p,B,W,X,oe,J,V,R,m,r,l,_,O,Be,Ce,Ie,we,o,v,F,K,Y,a,Ae,i]}class G extends ${constructor(e){super(),x(this,e,Je,Ge,ee,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:24,defaultAction:25,secondary:8,component:9,tag:10,getElement:26},null,[-1,-1])}get getElement(){return this.$$.ctx[26]}}function Le(n){let e;return{c(){e=N("arrow_back")},l(t){e=H(t,"arrow_back")},m(t,l){y(t,e,l)},d(t){t&&k(e)}}}function Qe(n){let e,t,l,r,m,d,o;t=new Re({props:{class:"material-icons","aria-label":"Back",href:n[0],color:"secondary",$$slots:{default:[Le]},$$scope:{ctx:n}}}),t.$on("click",n[2]);const a=n[4].default,i=pe(a,n,n[5],null);return{c(){e=I("div"),M(t.$$.fragment),l=w(),r=I("h1"),m=N(n[1]),d=w(),i&&i.c(),this.h()},l(_){e=A(_,"DIV",{class:!0});var f=P(e);z(t.$$.fragment,f),l=q(f),r=A(f,"H1",{class:!0});var b=P(r);m=H(b,n[1]),b.forEach(k),d=q(f),i&&i.l(f),f.forEach(k),this.h()},h(){D(r,"class","svelte-i12bz"),D(e,"class","svelte-i12bz")},m(_,f){y(_,e,f),U(t,e,null),C(e,l),C(e,r),C(r,m),C(e,d),i&&i.m(e,null),o=!0},p(_,[f]){const b={};f&1&&(b.href=_[0]),f&32&&(b.$$scope={dirty:f,ctx:_}),t.$set(b),(!o||f&2)&&Ee(m,_[1]),i&&i.p&&(!o||f&32)&&ke(i,a,_,_[5],o?ye(a,_[5],f,null):ve(_[5]),null)},i(_){o||(E(t.$$.fragment,_),E(i,_),o=!0)},o(_){S(t.$$.fragment,_),S(i,_),o=!1},d(_){_&&k(e),j(t),i&&i.d(_)}}}function Te(n,e,t){let{$$slots:l={},$$scope:r}=e,{href:m}=e,{title:d="back"}=e,{callback:o=null}=e;const a=i=>{o&&o()&&i.preventDefault()};return n.$$set=i=>{"href"in i&&t(0,m=i.href),"title"in i&&t(1,d=i.title),"callback"in i&&t(3,o=i.callback),"$$scope"in i&&t(5,r=i.$$scope)},[m,d,a,o,l,r]}class We extends ${constructor(e){super(),x(this,e,Te,Qe,ee,{href:0,title:1,callback:3})}}function _e(n,e,t){const l=n.slice();return l[9]=e[t],l[11]=t,l}function he(n,e,t){const l=n.slice();l[12]=e[t],l[15]=t;const r=l[0][l[11]][l[15]];return l[13]=r,l}function Xe(n){let e;return{c(){e=N("Finish")},l(t){e=H(t,"Finish")},m(t,l){y(t,e,l)},d(t){t&&k(e)}}}function Ye(n){let e,t;return e=new G({props:{$$slots:{default:[Xe]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,r){U(e,l,r),t=!0},p(l,r){const m={};r&65536&&(m.$$scope={dirty:r,ctx:l}),e.$set(m)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function Ke(n){let e=n[2](n[9].exercise)+"",t;return{c(){t=N(e)},l(l){t=H(l,e)},m(l,r){y(l,t,r)},p:je,d(l){l&&k(t)}}}function Ze(n){let e=(n[13]==0?n[12]:n[13])+"",t;return{c(){t=N(e)},l(l){t=H(l,e)},m(l,r){y(l,t,r)},p(l,r){r&1&&e!==(e=(l[13]==0?l[12]:l[13])+"")&&Ee(t,e)},d(l){l&&k(t)}}}function ge(n){let e,t;function l(){return n[3](n[11],n[15],n[13],n[12])}return e=new G({props:{color:n[13]==0?"secondary":"primary",variant:"unelevated",class:"btn-round",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),e.$on("click",l),{c(){M(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,m){U(e,r,m),t=!0},p(r,m){n=r;const d={};m&1&&(d.color=n[13]==0?"secondary":"primary"),m&65537&&(d.$$scope={dirty:m,ctx:n}),e.$set(d)},i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){S(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function $e(n){let e;return{c(){e=N("+")},l(t){e=H(t,"+")},m(t,l){y(t,e,l)},d(t){t&&k(e)}}}function be(n){let e,t,l=n[9].exercise.name+"",r,m,d,o,a,i,_,f;d=new G({props:{color:"secondary",variant:"text",$$slots:{default:[Ke]},$$scope:{ctx:n}}});let b=n[9].sets,s=[];for(let c=0;c<b.length;c+=1)s[c]=ge(he(n,b,c));const h=c=>S(s[c],1,1,()=>{s[c]=null});return _=new G({props:{color:"secondary",variant:"unelevated",class:"btn-round",$$slots:{default:[$e]},$$scope:{ctx:n}}}),{c(){e=I("h2"),t=I("span"),r=N(l),m=w(),M(d.$$.fragment),o=w(),a=I("div");for(let c=0;c<s.length;c+=1)s[c].c();i=w(),M(_.$$.fragment),this.h()},l(c){e=A(c,"H2",{class:!0});var g=P(e);t=A(g,"SPAN",{class:!0});var p=P(t);r=H(p,l),p.forEach(k),m=q(g),z(d.$$.fragment,g),g.forEach(k),o=q(c),a=A(c,"DIV",{class:!0});var B=P(a);for(let v=0;v<s.length;v+=1)s[v].l(B);i=q(B),z(_.$$.fragment,B),B.forEach(k),this.h()},h(){D(t,"class","long svelte-1vflaq3"),D(e,"class","svelte-1vflaq3"),D(a,"class","row svelte-1vflaq3")},m(c,g){y(c,e,g),C(e,t),C(t,r),C(e,m),U(d,e,null),y(c,o,g),y(c,a,g);for(let p=0;p<s.length;p+=1)s[p].m(a,null);C(a,i),U(_,a,null),f=!0},p(c,g){const p={};if(g&65536&&(p.$$scope={dirty:g,ctx:c}),d.$set(p),g&3){b=c[9].sets;let v;for(v=0;v<b.length;v+=1){const F=he(c,b,v);s[v]?(s[v].p(F,g),E(s[v],1)):(s[v]=ge(F),s[v].c(),E(s[v],1),s[v].m(a,i))}for(te(),v=b.length;v<s.length;v+=1)h(v);ne()}const B={};g&65536&&(B.$$scope={dirty:g,ctx:c}),_.$set(B)},i(c){if(!f){E(d.$$.fragment,c);for(let g=0;g<b.length;g+=1)E(s[g]);E(_.$$.fragment,c),f=!0}},o(c){S(d.$$.fragment,c),s=s.filter(Boolean);for(let g=0;g<s.length;g+=1)S(s[g]);S(_.$$.fragment,c),f=!1},d(c){c&&k(e),j(d),c&&k(o),c&&k(a),Se(s,c),j(_)}}}function xe(n){let e;return{c(){e=N("10kg")},l(t){e=H(t,"10kg")},m(t,l){y(t,e,l)},d(t){t&&k(e)}}}function et(n){let e,t,l,r,m,d,o,a,i;e=new We({props:{href:"/work",title:n[1].name,$$slots:{default:[Ye]},$$scope:{ctx:n}}});let _=n[1].work,f=[];for(let s=0;s<_.length;s+=1)f[s]=be(_e(n,_,s));const b=s=>S(f[s],1,1,()=>{f[s]=null});return a=new G({props:{color:"primary",variant:"text",$$slots:{default:[xe]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment),t=w();for(let s=0;s<f.length;s+=1)f[s].c();l=w(),r=I("h2"),m=I("span"),d=N("Bodyweight"),o=w(),M(a.$$.fragment),this.h()},l(s){z(e.$$.fragment,s),t=q(s);for(let g=0;g<f.length;g+=1)f[g].l(s);l=q(s),r=A(s,"H2",{class:!0});var h=P(r);m=A(h,"SPAN",{class:!0});var c=P(m);d=H(c,"Bodyweight"),c.forEach(k),o=q(h),z(a.$$.fragment,h),h.forEach(k),this.h()},h(){D(m,"class","long svelte-1vflaq3"),D(r,"class","svelte-1vflaq3")},m(s,h){U(e,s,h),y(s,t,h);for(let c=0;c<f.length;c+=1)f[c].m(s,h);y(s,l,h),y(s,r,h),C(r,m),C(m,d),C(r,o),U(a,r,null),i=!0},p(s,[h]){const c={};if(h&65536&&(c.$$scope={dirty:h,ctx:s}),e.$set(c),h&7){_=s[1].work;let p;for(p=0;p<_.length;p+=1){const B=_e(s,_,p);f[p]?(f[p].p(B,h),E(f[p],1)):(f[p]=be(B),f[p].c(),E(f[p],1),f[p].m(l.parentNode,l))}for(te(),p=_.length;p<f.length;p+=1)b(p);ne()}const g={};h&65536&&(g.$$scope={dirty:h,ctx:s}),a.$set(g)},i(s){if(!i){E(e.$$.fragment,s);for(let h=0;h<_.length;h+=1)E(f[h]);E(a.$$.fragment,s),i=!0}},o(s){S(e.$$.fragment,s),f=f.filter(Boolean);for(let h=0;h<f.length;h+=1)S(f[h]);S(a.$$.fragment,s),i=!1},d(s){j(e,s),s&&k(t),Se(f,s),s&&k(l),s&&k(r),j(a)}}}function tt(n,e,t){let l;Ue(n,Ne,b=>t(4,l=b));const r={name:"Loading...",work:[]},m={day:0,difficulty:new Map},d=()=>{const b=l.url.searchParams.get("program"),s=l.url.searchParams.get("workout");if(!s)return console.error("No workout specified"),ie("/work"),{workout:r,progress:m};const h=Fe.get(s);if(!h)return console.error("Workout not found"),ie("/work"),{workout:r,progress:m};const c=ze(b,h);return{workout:h,progress:c}},{workout:o,progress:a}=d(),i=o==null?void 0:o.work.map(b=>b.sets.map(s=>0));return[i,o,b=>b.difficulty(a==null?void 0:a.difficulty.get(b.id)),(b,s,h,c)=>t(0,i[b][s]=(h+c)%(c+1),i)]}class ut extends ${constructor(e){super(),x(this,e,tt,et,ee,{})}}export{ut as default};
