import{S as J,i as K,s as L,z as W,A as H,B as I,g as P,d as S,C as q,ae as M,D as O,a as v,c as k,b as w,G as Q,H as R,I as T,h as m,k as $,r as y,e as F,l as d,m as g,u as A,F as u,v as D,ad as U,p as E}from"./index.54f9c080.js";import{C as X,a as Y}from"./ActionIcons.6db1b36b.js";import{P as Z}from"./PrimaryAction.a2cef701.js";import{g as x}from"./navigation.ffaeb203.js";const ee=i=>({}),G=i=>({});function V(i,e,l){const t=i.slice();return t[6]=e[l],t}function j(i){let e,l,t=i[6].name+"",r,n,s,o=i[6].sets+"",a,f,c,h=i[6].icon+"",b,N;return{c(){e=$("div"),l=$("span"),r=y(t),n=v(),s=$("span"),a=y(o),f=v(),c=$("span"),b=y(h),N=v(),this.h()},l(p){e=d(p,"DIV",{class:!0});var _=g(e);l=d(_,"SPAN",{class:!0});var z=g(l);r=A(z,t),z.forEach(m),n=k(_),s=d(_,"SPAN",{class:!0});var C=g(s);a=A(C,o),f=k(C),c=d(C,"SPAN",{class:!0});var B=g(c);b=A(B,h),B.forEach(m),C.forEach(m),N=k(_),_.forEach(m),this.h()},h(){E(l,"class","name svelte-1dde68b"),E(c,"class","material-symbols-rounded"),E(s,"class","sets row svelte-1dde68b"),E(e,"class","row svelte-1dde68b")},m(p,_){w(p,e,_),u(e,l),u(l,r),u(e,n),u(e,s),u(s,a),u(s,f),u(s,c),u(c,b),u(e,N)},p(p,_){_&1&&t!==(t=p[6].name+"")&&D(r,t),_&1&&o!==(o=p[6].sets+"")&&D(a,o),_&1&&h!==(h=p[6].icon+"")&&D(b,h)},d(p){p&&m(e)}}}function te(i){let e,l=i[0].name+"",t,r,n,s=i[0].setsDisplay(),o=[];for(let a=0;a<s.length;a+=1)o[a]=j(V(i,s,a));return{c(){e=$("h2"),t=y(l),r=v();for(let a=0;a<o.length;a+=1)o[a].c();n=F()},l(a){e=d(a,"H2",{});var f=g(e);t=A(f,l),f.forEach(m),r=k(a);for(let c=0;c<o.length;c+=1)o[c].l(a);n=F()},m(a,f){w(a,e,f),u(e,t),w(a,r,f);for(let c=0;c<o.length;c+=1)o[c].m(a,f);w(a,n,f)},p(a,f){if(f&1&&l!==(l=a[0].name+"")&&D(t,l),f&1){s=a[0].setsDisplay();let c;for(c=0;c<s.length;c+=1){const h=V(a,s,c);o[c]?o[c].p(h,f):(o[c]=j(h),o[c].c(),o[c].m(n.parentNode,n))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}},d(a){a&&m(e),a&&m(r),U(o,a),a&&m(n)}}}function se(i){let e,l;return e=new Y({props:{href:i[1],$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){I(e,t,r),l=!0},p(t,r){const n={};r&2&&(n.href=t[1]),r&17&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function ae(i){let e,l,t;e=new Z({props:{$$slots:{default:[se]},$$scope:{ctx:i}}}),e.$on("click",i[2]);const r=i[3].actions,n=O(r,i,i[4],G);return{c(){W(e.$$.fragment),l=v(),n&&n.c()},l(s){H(e.$$.fragment,s),l=k(s),n&&n.l(s)},m(s,o){I(e,s,o),w(s,l,o),n&&n.m(s,o),t=!0},p(s,o){const a={};o&19&&(a.$$scope={dirty:o,ctx:s}),e.$set(a),n&&n.p&&(!t||o&16)&&Q(n,r,s,s[4],t?T(r,s[4],o,ee):R(s[4]),G)},i(s){t||(P(e.$$.fragment,s),P(n,s),t=!0)},o(s){S(e.$$.fragment,s),S(n,s),t=!1},d(s){q(e,s),s&&m(l),n&&n.d(s)}}}function ne(i){let e,l;return e=new X({props:{variant:"outlined",$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){I(e,t,r),l=!0},p(t,[r]){const n={};r&19&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function le(i,e,l){let{$$slots:t={},$$scope:r}=e,{workout:n}=e,{href:s=null}=e;const o=M(),a=()=>{if(s){x(s);return}o("click")};return i.$$set=f=>{"workout"in f&&l(0,n=f.workout),"href"in f&&l(1,s=f.href),"$$scope"in f&&l(4,r=f.$$scope)},[n,s,a,t,r]}class fe extends J{constructor(e){super(),K(this,e,le,ne,L,{workout:0,href:1})}}export{fe as W};