import{S as J,i as K,s as M,v as O,a6 as Q,x as w,a as B,k as R,y as v,c as I,l as U,m as X,h as d,n as Y,z as C,b,F as Z,a7 as y,f as m,d as E,t as g,A as P,ad as L,q as N,r as S,u as x,g as V,ab as ee,e as A,ac as te,C as _}from"../../../../chunks/index-be4f0507.js";import{D as ne,H as oe,C as re,T as le}from"../../../../chunks/Actions-45e9d76d.js";import{I as ae}from"../../../../chunks/IconButton-b699d4bc.js";import{C as se}from"../../../../chunks/Svg-f78c7942.js";import{A as F,P as j,N as ce}from"../../../../chunks/db-e7795e52.js";import{W as fe}from"../../../../chunks/WorkoutCard-31861946.js";import{P as ie}from"../../../../chunks/ProgramCard-70b6a0fa.js";import{B as ue}from"../../../../chunks/Button-995c0178.js";function H(a,t,l){const n=a.slice();return n[6]=t[l],n}function T(a,t,l){const n=a.slice();return n[10]=t[l],n}function $e(a){let t;return{c(){t=N("Select a new program")},l(l){t=S(l,"Select a new program")},m(l,n){b(l,t,n)},d(l){l&&d(t)}}}function me(a){let t;return{c(){t=N("close")},l(l){t=S(l,"close")},m(l,n){b(l,t,n)},d(l){l&&d(t)}}}function pe(a){let t,l,n,e;return t=new le({props:{id:"change-title",$$slots:{default:[$e]},$$scope:{ctx:a}}}),n=new ae({props:{action:"close",class:"material-symbols-rounded",$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment),l=B(),w(n.$$.fragment)},l(o){v(t.$$.fragment,o),l=I(o),v(n.$$.fragment,o)},m(o,r){C(t,o,r),b(o,l,r),C(n,o,r),e=!0},p(o,r){const s={};r&8192&&(s.$$scope={dirty:r,ctx:o}),t.$set(s);const f={};r&8192&&(f.$$scope={dirty:r,ctx:o}),n.$set(f)},i(o){e||(m(t.$$.fragment,o),m(n.$$.fragment,o),e=!0)},o(o){g(t.$$.fragment,o),g(n.$$.fragment,o),e=!1},d(o){P(t,o),o&&d(l),P(n,o)}}}function _e(a){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function ge(a){let t,l,n=a[9],e=[];for(let r=0;r<n.length;r+=1)e[r]=W(T(a,n,r));const o=r=>g(e[r],1,1,()=>{e[r]=null});return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=A()},l(r){for(let s=0;s<e.length;s+=1)e[s].l(r);t=A()},m(r,s){for(let f=0;f<e.length;f+=1)e[f].m(r,s);b(r,t,s),l=!0},p(r,s){if(s&5){n=r[9];let f;for(f=0;f<n.length;f+=1){const $=T(r,n,f);e[f]?(e[f].p($,s),m(e[f],1)):(e[f]=W($),e[f].c(),m(e[f],1),e[f].m(t.parentNode,t))}for(V(),f=n.length;f<e.length;f+=1)o(f);E()}},i(r){if(!l){for(let s=0;s<n.length;s+=1)m(e[s]);l=!0}},o(r){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)g(e[s]);l=!1},d(r){L(e,r),r&&d(t)}}}function W(a){let t,l;function n(){return a[3](a[10])}return t=new ie({props:{program:a[10],click:n,active:a[0].id}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,o){C(t,e,o),l=!0},p(e,o){a=e;const r={};o&1&&(r.active=a[0].id),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){P(t,e)}}}function de(a){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function he(a){let t,l,n={ctx:a,current:null,token:null,hasCatch:!1,pending:de,then:ge,catch:_e,value:9,blocks:[,,,]};return ee(j.all(),n),{c(){t=A(),n.block.c()},l(e){t=A(),n.block.l(e)},m(e,o){b(e,t,o),n.block.m(e,n.anchor=o),n.mount=()=>t.parentNode,n.anchor=t,l=!0},p(e,o){a=e,te(n,a,o)},i(e){l||(m(n.block),l=!0)},o(e){for(let o=0;o<3;o+=1){const r=n.blocks[o];g(r)}l=!1},d(e){e&&d(t),n.block.d(e),n.token=null,n=null}}}function be(a){let t,l,n,e;return t=new oe({props:{$$slots:{default:[pe]},$$scope:{ctx:a}}}),n=new re({props:{id:"change-content",class:"changed-content",style:`display: flex;
			   flex-direction: column;
		       gap: 1rem;`,$$slots:{default:[he]},$$scope:{ctx:a}}}),{c(){w(t.$$.fragment),l=B(),w(n.$$.fragment)},l(o){v(t.$$.fragment,o),l=I(o),v(n.$$.fragment,o)},m(o,r){C(t,o,r),b(o,l,r),C(n,o,r),e=!0},p(o,r){const s={};r&8192&&(s.$$scope={dirty:r,ctx:o}),t.$set(s);const f={};r&8193&&(f.$$scope={dirty:r,ctx:o}),n.$set(f)},i(o){e||(m(t.$$.fragment,o),m(n.$$.fragment,o),e=!0)},o(o){g(t.$$.fragment,o),g(n.$$.fragment,o),e=!1},d(o){P(t,o),o&&d(l),P(n,o)}}}function ke(a){let t;return{c(){t=N("edit")},l(l){t=S(l,"edit")},m(l,n){b(l,t,n)},d(l){l&&d(t)}}}function we(a){let t=a[0].name+"",l,n,e,o;return e=new se({props:{class:"material-symbols-rounded",$$slots:{default:[ke]},$$scope:{ctx:a}}}),{c(){l=N(t),n=B(),w(e.$$.fragment)},l(r){l=S(r,t),n=I(r),v(e.$$.fragment,r)},m(r,s){b(r,l,s),b(r,n,s),C(e,r,s),o=!0},p(r,s){(!o||s&1)&&t!==(t=r[0].name+"")&&x(l,t);const f={};s&8192&&(f.$$scope={dirty:s,ctx:r}),e.$set(f)},i(r){o||(m(e.$$.fragment,r),o=!0)},o(r){g(e.$$.fragment,r),o=!1},d(r){r&&d(l),r&&d(n),P(e,r)}}}function z(a){let t,l;return t=new fe({props:{workout:a[6],href:"/active?program="+a[0].id+"&workout="+a[6].id}}),{c(){w(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,e){C(t,n,e),l=!0},p(n,e){const o={};e&1&&(o.workout=n[6]),e&1&&(o.href="/active?program="+n[0].id+"&workout="+n[6].id),t.$set(o)},i(n){l||(m(t.$$.fragment,n),l=!0)},o(n){g(t.$$.fragment,n),l=!1},d(n){P(t,n)}}}function ve(a){let t,l,n,e,o,r,s;function f(c){a[4](c)}let $={fullscreen:!0,"aria-labelledby":"change-title","aria-describedby":"change-content",$$slots:{default:[be]},$$scope:{ctx:a}};a[1]!==void 0&&($.open=a[1]),t=new ne({props:$}),O.push(()=>Q(t,"open",f)),o=new ue({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),o.$on("click",a[5]);let k=a[0].workouts,u=[];for(let c=0;c<k.length;c+=1)u[c]=z(H(a,k,c));const G=c=>g(u[c],1,1,()=>{u[c]=null});return{c(){w(t.$$.fragment),n=B(),e=R("div"),w(o.$$.fragment),r=B();for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){v(t.$$.fragment,c),n=I(c),e=U(c,"DIV",{class:!0});var i=X(e);v(o.$$.fragment,i),r=I(i);for(let h=0;h<u.length;h+=1)u[h].l(i);i.forEach(d),this.h()},h(){Y(e,"class","col-card-holder svelte-1700q2t")},m(c,i){C(t,c,i),b(c,n,i),b(c,e,i),C(o,e,null),Z(e,r);for(let h=0;h<u.length;h+=1)u[h].m(e,null);s=!0},p(c,[i]){const h={};i&8193&&(h.$$scope={dirty:i,ctx:c}),!l&&i&2&&(l=!0,h.open=c[1],y(()=>l=!1)),t.$set(h);const q={};if(i&8193&&(q.$$scope={dirty:i,ctx:c}),o.$set(q),i&1){k=c[0].workouts;let p;for(p=0;p<k.length;p+=1){const D=H(c,k,p);u[p]?(u[p].p(D,i),m(u[p],1)):(u[p]=z(D),u[p].c(),m(u[p],1),u[p].m(e,null))}for(V(),p=k.length;p<u.length;p+=1)G(p);E()}},i(c){if(!s){m(t.$$.fragment,c),m(o.$$.fragment,c);for(let i=0;i<k.length;i+=1)m(u[i]);s=!0}},o(c){g(t.$$.fragment,c),g(o.$$.fragment,c),u=u.filter(Boolean);for(let i=0;i<u.length;i+=1)g(u[i]);s=!1},d(c){P(t,c),c&&d(n),c&&d(e),P(o),L(u,c)}}}function Ce(a,t,l){let n=ce;(async()=>{let $=await F.get().catch(k=>console.error("Failed to load active program",k));if(!$){console.error("Active program not found",$);return}l(0,n=await j.get($.programId))})();let e=!1;const o=$=>{F.set($.id),l(0,n=$),l(1,e=!1)},r=$=>o($);function s($){e=$,l(1,e)}return[n,e,o,r,s,()=>l(1,e=!0)]}class Fe extends J{constructor(t){super(),K(this,t,Ce,ve,M,{})}}export{Fe as default};
