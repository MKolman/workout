import{S as B,i as F,s as H,x as $,y as g,z as h,f as d,t as k,A as v,P as I,k as _,q as C,a as y,e as b,l as p,m as S,r as q,h as m,c as E,b as u,F as N,u as z,ad as R}from"./index-be4f0507.js";import{C as j,a as D}from"./ActionIcons-afed3091.js";import{P as G}from"./PrimaryAction-1ffed0b7.js";import{A as J}from"./db-e7795e52.js";function w(i,t,a){const e=i.slice();return e[3]=t[a],e}function A(i){let t,a=i[3].name+"",e,r,l;return{c(){t=_("span"),e=C(a),r=y(),l=_("br")},l(n){t=p(n,"SPAN",{});var s=S(t);e=q(s,a),s.forEach(m),r=E(n),l=p(n,"BR",{})},m(n,s){u(n,t,s),N(t,e),u(n,r,s),u(n,l,s)},p(n,s){s&2&&a!==(a=n[3].name+"")&&z(e,a)},d(n){n&&m(t),n&&m(r),n&&m(l)}}}function K(i){let t,a=i[1].name+"",e,r,l,n=i[1].workouts,s=[];for(let o=0;o<n.length;o+=1)s[o]=A(w(i,n,o));return{c(){t=_("h2"),e=C(a),r=y();for(let o=0;o<s.length;o+=1)s[o].c();l=b()},l(o){t=p(o,"H2",{});var f=S(t);e=q(f,a),f.forEach(m),r=E(o);for(let c=0;c<s.length;c+=1)s[c].l(o);l=b()},m(o,f){u(o,t,f),N(t,e),u(o,r,f);for(let c=0;c<s.length;c+=1)s[c].m(o,f);u(o,l,f)},p(o,f){if(f&2&&a!==(a=o[1].name+"")&&z(e,a),f&2){n=o[1].workouts;let c;for(c=0;c<n.length;c+=1){const P=w(o,n,c);s[c]?s[c].p(P,f):(s[c]=A(P),s[c].c(),s[c].m(l.parentNode,l))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}},d(o){o&&m(t),o&&m(r),R(s,o),o&&m(l)}}}function L(i){let t,a;return t=new D({props:{$$slots:{default:[K]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,r){h(t,e,r),a=!0},p(e,r){const l={};r&66&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){v(t,e)}}}function M(i){let t,a;return t=new G({props:{$$slots:{default:[L]},$$scope:{ctx:i}}}),t.$on("click",function(){I(i[2])&&i[2].apply(this,arguments)}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,r){h(t,e,r),a=!0},p(e,r){i=e;const l={};r&66&&(l.$$scope={dirty:r,ctx:i}),t.$set(l)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){v(t,e)}}}function O(i){let t,a;return t=new j({props:{color:"red",variant:i[1].id===i[0]?"outlined":"raised",$$slots:{default:[M]},$$scope:{ctx:i}}}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,r){h(t,e,r),a=!0},p(e,[r]){const l={};r&3&&(l.variant=e[1].id===e[0]?"outlined":"raised"),r&70&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){v(t,e)}}}function Q(i,t,a){let{program:e}=t,{click:r}=t,{active:l=null}=t;return l===null&&J.getProgramId().then(n=>{a(0,l=n||"")}),i.$$set=n=>{"program"in n&&a(1,e=n.program),"click"in n&&a(2,r=n.click),"active"in n&&a(0,l=n.active)},[l,e,r]}class X extends B{constructor(t){super(),F(this,t,Q,O,H,{program:1,click:2,active:0})}}export{X as P};
