import{S as Q,i as X,s as Y,x as P,a as A,k as M,q,y as S,c as I,l as W,m as D,r as E,h as g,n as F,z as N,b as k,H as B,f as v,d as J,t as y,A as H,ac as K,u as C,g as O}from"../../../../chunks/index-e6760db3.js";import{g as z}from"../../../../chunks/navigation-8692cede.js";import{B as L}from"../../../../chunks/Button-f35ef51f.js";import{B as Z}from"../../../../chunks/BackBanner-8252684c.js";import{W as x,d as ee}from"../../../../chunks/db-3bef6c59.js";const T=new Map;function te(r,e){const o=T.get(r.id)||{day:0,difficulty:new Map};for(const t of r.work)o.difficulty.set(t.exercise.id,10);return T.set(r.id,o),o}function U(r,e,o){const t=r.slice();return t[11]=e[o],t[13]=o,t}function V(r,e,o){const t=r.slice();t[14]=e[o],t[17]=o;const l=t[1][t[13]][t[17]];return t[15]=l,t}function ne(r){let e;return{c(){e=q("Finish")},l(o){e=E(o,"Finish")},m(o,t){k(o,e,t)},d(o){o&&g(e)}}}function oe(r){let e,o;return e=new L({props:{$$slots:{default:[ne]},$$scope:{ctx:r}}}),e.$on("click",r[3]),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){N(e,t,l),o=!0},p(t,l){const $={};l&262144&&($.$$scope={dirty:l,ctx:t}),e.$set($)},i(t){o||(v(e.$$.fragment,t),o=!0)},o(t){y(e.$$.fragment,t),o=!1},d(t){H(e,t)}}}function se(r){let e=r[2](r[11].exercise)+"",o;return{c(){o=q(e)},l(t){o=E(t,e)},m(t,l){k(t,o,l)},p(t,l){l&1&&e!==(e=t[2](t[11].exercise)+"")&&C(o,e)},d(t){t&&g(o)}}}function re(r){let e=(r[15]==0?r[14]:r[15])+"",o;return{c(){o=q(e)},l(t){o=E(t,e)},m(t,l){k(t,o,l)},p(t,l){l&3&&e!==(e=(t[15]==0?t[14]:t[15])+"")&&C(o,e)},d(t){t&&g(o)}}}function j(r){let e,o;function t(){return r[4](r[13],r[17],r[15],r[14])}return e=new L({props:{color:r[15]==0?"secondary":"primary",variant:"unelevated",class:"btn-round",$$slots:{default:[re]},$$scope:{ctx:r}}}),e.$on("click",t),{c(){P(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,$){N(e,l,$),o=!0},p(l,$){r=l;const _={};$&2&&(_.color=r[15]==0?"secondary":"primary"),$&262147&&(_.$$scope={dirty:$,ctx:r}),e.$set(_)},i(l){o||(v(e.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}function le(r){let e;return{c(){e=q("+")},l(o){e=E(o,"+")},m(o,t){k(o,e,t)},d(o){o&&g(e)}}}function G(r){let e,o,t=r[11].exercise.name+"",l,$,_,h,u,d,p,c;_=new L({props:{color:"secondary",variant:"text",$$slots:{default:[se]},$$scope:{ctx:r}}});let w=r[11].sets,n=[];for(let s=0;s<w.length;s+=1)n[s]=j(V(r,w,s));const a=s=>y(n[s],1,1,()=>{n[s]=null});return p=new L({props:{color:"secondary",variant:"unelevated",class:"btn-round",$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){e=M("h2"),o=M("span"),l=q(t),$=A(),P(_.$$.fragment),h=A(),u=M("div");for(let s=0;s<n.length;s+=1)n[s].c();d=A(),P(p.$$.fragment),this.h()},l(s){e=W(s,"H2",{class:!0});var f=D(e);o=W(f,"SPAN",{class:!0});var i=D(o);l=E(i,t),i.forEach(g),$=I(f),S(_.$$.fragment,f),f.forEach(g),h=I(s),u=W(s,"DIV",{class:!0});var b=D(u);for(let m=0;m<n.length;m+=1)n[m].l(b);d=I(b),S(p.$$.fragment,b),b.forEach(g),this.h()},h(){F(o,"class","long svelte-1vflaq3"),F(e,"class","svelte-1vflaq3"),F(u,"class","row svelte-1vflaq3")},m(s,f){k(s,e,f),B(e,o),B(o,l),B(e,$),N(_,e,null),k(s,h,f),k(s,u,f);for(let i=0;i<n.length;i+=1)n[i].m(u,null);B(u,d),N(p,u,null),c=!0},p(s,f){(!c||f&1)&&t!==(t=s[11].exercise.name+"")&&C(l,t);const i={};if(f&262145&&(i.$$scope={dirty:f,ctx:s}),_.$set(i),f&3){w=s[11].sets;let m;for(m=0;m<w.length;m+=1){const R=V(s,w,m);n[m]?(n[m].p(R,f),v(n[m],1)):(n[m]=j(R),n[m].c(),v(n[m],1),n[m].m(u,d))}for(O(),m=w.length;m<n.length;m+=1)a(m);J()}const b={};f&262144&&(b.$$scope={dirty:f,ctx:s}),p.$set(b)},i(s){if(!c){v(_.$$.fragment,s);for(let f=0;f<w.length;f+=1)v(n[f]);v(p.$$.fragment,s),c=!0}},o(s){y(_.$$.fragment,s),n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)y(n[f]);y(p.$$.fragment,s),c=!1},d(s){s&&g(e),H(_),s&&g(h),s&&g(u),K(n,s),H(p)}}}function ae(r){let e;return{c(){e=q("10kg")},l(o){e=E(o,"10kg")},m(o,t){k(o,e,t)},d(o){o&&g(e)}}}function fe(r){let e,o,t,l,$,_,h,u,d;e=new Z({props:{href:"/work",title:r[0].name,$$slots:{default:[oe]},$$scope:{ctx:r}}});let p=r[0].work,c=[];for(let n=0;n<p.length;n+=1)c[n]=G(U(r,p,n));const w=n=>y(c[n],1,1,()=>{c[n]=null});return u=new L({props:{color:"primary",variant:"text",$$slots:{default:[ae]},$$scope:{ctx:r}}}),{c(){P(e.$$.fragment),o=A();for(let n=0;n<c.length;n+=1)c[n].c();t=A(),l=M("h2"),$=M("span"),_=q("Bodyweight"),h=A(),P(u.$$.fragment),this.h()},l(n){S(e.$$.fragment,n),o=I(n);for(let f=0;f<c.length;f+=1)c[f].l(n);t=I(n),l=W(n,"H2",{class:!0});var a=D(l);$=W(a,"SPAN",{class:!0});var s=D($);_=E(s,"Bodyweight"),s.forEach(g),h=I(a),S(u.$$.fragment,a),a.forEach(g),this.h()},h(){F($,"class","long svelte-1vflaq3"),F(l,"class","svelte-1vflaq3")},m(n,a){N(e,n,a),k(n,o,a);for(let s=0;s<c.length;s+=1)c[s].m(n,a);k(n,t,a),k(n,l,a),B(l,$),B($,_),B(l,h),N(u,l,null),d=!0},p(n,[a]){const s={};if(a&1&&(s.title=n[0].name),a&262144&&(s.$$scope={dirty:a,ctx:n}),e.$set(s),a&7){p=n[0].work;let i;for(i=0;i<p.length;i+=1){const b=U(n,p,i);c[i]?(c[i].p(b,a),v(c[i],1)):(c[i]=G(b),c[i].c(),v(c[i],1),c[i].m(t.parentNode,t))}for(O(),i=p.length;i<c.length;i+=1)w(i);J()}const f={};a&262144&&(f.$$scope={dirty:a,ctx:n}),u.$set(f)},i(n){if(!d){v(e.$$.fragment,n);for(let a=0;a<p.length;a+=1)v(c[a]);v(u.$$.fragment,n),d=!0}},o(n){y(e.$$.fragment,n),c=c.filter(Boolean);for(let a=0;a<c.length;a+=1)y(c[a]);y(u.$$.fragment,n),d=!1},d(n){H(e,n),n&&g(o),K(c,n),n&&g(t),n&&g(l),H(u)}}}function ce(r,e,o){const t={name:"Loading...",work:[]},l={day:0,difficulty:new Map};let $,_;{let a=new URL(document.location.href).searchParams;$=a.get("program")||void 0,_=a.get("workout")||void 0}let h=t,u=l,d=[];return(async()=>{if(!_){console.error("No workout specified"),z("/work");return}const a=await x.get(_);if(!h){console.error("Workout not found"),z("/work");return}o(0,h=a),u=te(a),o(1,d=a.work.map(s=>s.sets.map(f=>0)))})(),[h,d,a=>a.difficulty(u==null?void 0:u.difficulty.get(a.id)),()=>{const a=new Date().getTime();for(const[s,f]of h.work.entries()){const i={time:a,programId:$,workoutId:_,exerciseId:f.exercise.id,difficulty:u.difficulty.get(f.exercise.id),sets:Int16Array.from(d[s])};ee.history.add(i)}z("/work")},(a,s,f,i)=>o(1,d[a][s]=(f+i)%(i+1),d)]}class pe extends Q{constructor(e){super(),X(this,e,ce,fe,Y,{})}}export{pe as default};
