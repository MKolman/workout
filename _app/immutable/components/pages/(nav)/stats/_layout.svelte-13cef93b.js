import{S as v,i as w,s as C,v as L,a4 as T,D as k,x as m,a as q,y as p,c as I,z as b,b as d,a5 as S,G as z,H as A,I as B,f as u,t as _,A as g,h,J as D,q as G,r as H,u as J}from"../../../../chunks/index-4d38a571.js";import{T as M,a as W}from"../../../../chunks/TabBar-51fac146.js";import{C as j}from"../../../../chunks/CommonLabel-bea53b37.js";import{C as E}from"../../../../chunks/Svg-4d950ac6.js";import{p as F}from"../../../../chunks/stores-a0514c6c.js";function K(r){let e=r[8]+"",n;return{c(){n=G(e)},l(t){n=H(t,e)},m(t,s){d(t,n,s)},p(t,s){s&256&&e!==(e=t[8]+"")&&J(n,e)},d(t){t&&h(n)}}}function N(r){let e,n;return e=new E({props:{class:"material-icons",$$slots:{default:[K]},$$scope:{ctx:r}}}),{c(){m(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const o={};s&288&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function O(r){let e,n;return e=new j({props:{$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){m(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const o={};s&288&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function P(r){let e,n;return e=new W({props:{tab:r[8],href:r[2].get(r[8]),$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){m(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const o={};s&256&&(o.tab=t[8]),s&256&&(o.href=t[2].get(t[8])),s&288&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Q(r){let e,n,t,s;function o(a){r[4](a)}let $={tabs:r[1],$$slots:{default:[P,({tab:a})=>({8:a}),({tab:a})=>a?256:0]},$$scope:{ctx:r}};r[0]!==void 0&&($.active=r[0]),e=new M({props:$}),L.push(()=>T(e,"active",o));const c=r[3].default,l=k(c,r,r[5],null);return{c(){m(e.$$.fragment),t=q(),l&&l.c()},l(a){p(e.$$.fragment,a),t=I(a),l&&l.l(a)},m(a,i){b(e,a,i),d(a,t,i),l&&l.m(a,i),s=!0},p(a,[i]){const f={};i&288&&(f.$$scope={dirty:i,ctx:a}),!n&&i&1&&(n=!0,f.active=a[0],S(()=>n=!1)),e.$set(f),l&&l.p&&(!s||i&32)&&z(l,c,a,a[5],s?B(c,a[5],i,null):A(a[5]),null)},i(a){s||(u(e.$$.fragment,a),u(l,a),s=!0)},o(a){_(e.$$.fragment,a),_(l,a),s=!1},d(a){g(e,a),a&&h(t),l&&l.d(a)}}}function R(r,e,n){let t;D(r,F,f=>n(6,t=f));let{$$slots:s={},$$scope:o}=e;const $=["ssid_chart","calendar_month","list"],c=new Map([["ssid_chart","/stats"],["calendar_month","/stats/calendar"],["list","/stats/list"]]),l=t.url.pathname;let a=$.findLast(f=>l.startsWith(c.get(f)));function i(f){a=f,n(0,a)}return r.$$set=f=>{"$$scope"in f&&n(5,o=f.$$scope)},[a,$,c,s,i,o]}class y extends v{constructor(e){super(),w(this,e,R,Q,C,{})}}export{y as default};
