import{S as C,i as P,s as S,k as d,q as b,a as q,l as v,m as k,r as x,h,c as E,n as W,b as z,_ as p,f as m,d as A,t as g,aa as B,x as D,y as H,z as I,C as V,A as j,g as F}from"../../../chunks/index-6d0a9015.js";import{C as G}from"../../../chunks/progress-170a61e1.js";import{S as J}from"../../../chunks/program-8a6257f1.js";import{W as K}from"../../../chunks/WorkoutCard-f29cb89b.js";function $(s,t,l){const n=s.slice();return n[1]=t[l],n[3]=l,n}function w(s){let t,l;return t=new K({props:{workout:s[1],href:"/work/active?program="+s[0].id+"&workout="+s[1].id}}),{c(){D(t.$$.fragment)},l(n){H(t.$$.fragment,n)},m(n,u){I(t,n,u),l=!0},p:V,i(n){l||(m(t.$$.fragment,n),l=!0)},o(n){g(t.$$.fragment,n),l=!1},d(n){j(t,n)}}}function L(s){let t,l,n=s[0].name+"",u,_,f,c=s[0].workouts,e=[];for(let r=0;r<c.length;r+=1)e[r]=w($(s,c,r));const y=r=>g(e[r],1,1,()=>{e[r]=null});return{c(){t=d("div"),l=d("h1"),u=b(n),_=q();for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=v(r,"DIV",{class:!0});var a=k(t);l=v(a,"H1",{});var o=k(l);u=x(o,n),o.forEach(h),_=E(a);for(let i=0;i<e.length;i+=1)e[i].l(a);a.forEach(h),this.h()},h(){W(t,"class","col-card-holder svelte-1700q2t")},m(r,a){z(r,t,a),p(t,l),p(l,u),p(t,_);for(let o=0;o<e.length;o+=1)e[o].m(t,null);f=!0},p(r,[a]){if(a&1){c=r[0].workouts;let o;for(o=0;o<c.length;o+=1){const i=$(r,c,o);e[o]?(e[o].p(i,a),m(e[o],1)):(e[o]=w(i),e[o].c(),m(e[o],1),e[o].m(t,null))}for(F(),o=c.length;o<e.length;o+=1)y(o);A()}},i(r){if(!f){for(let a=0;a<c.length;a+=1)m(e[a]);f=!0}},o(r){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)g(e[a]);f=!1},d(r){r&&h(t),B(e,r)}}}function M(s){return[J.get(G)]}class T extends C{constructor(t){super(),P(this,t,M,L,S,{})}}export{T as default};
