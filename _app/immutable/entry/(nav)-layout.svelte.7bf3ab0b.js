import{S as M,i as R,s as C,D as K,K as y,k as Q,l as X,m as w,h as v,L as G,b as I,M as ge,N as J,G as x,H as $,I as ee,O as re,P as Be,g as E,d as S,Q as Ie,R as q,T as oe,J as ie,U as De,j as Me,V as ue,W as Re,X as Ce,x as fe,z as T,A as O,B as z,Y as Ne,C as j,Z as He,p as Y,_ as be,r as Ue,u as Ve,v as Le,a as F,c as Z,n as We}from"../chunks/index.54f9c080.js";import{r as Ye,w as Fe}from"../chunks/singletons.44da3d58.js";import{c as D,u as ye,f as ce}from"../chunks/SmuiElement.43b4fd49.js";import{c as me}from"../chunks/classAdderBuilder.5f0900d8.js";import{I as Ze}from"../chunks/IconButton.5bf38a6e.js";import{p as Ge}from"../chunks/stores.5b4a2d35.js";const{window:he}=Ce;function Je(t){let e,s,n,l,a,u,o;const i=t[19].default,r=K(i,t,t[18],null);let p=[{class:s=D({[t[1]]:!0,"smui-bottom-app-bar":!0,"smui-bottom-app-bar--standard":t[3]==="standard","smui-bottom-app-bar--fixed":t[3]==="fixed"})},{style:n=Object.entries(t[5]).map(Se).concat([t[2]]).join(" ")},t[10]],c={};for(let f=0;f<p.length;f+=1)c=y(c,p[f]);return{c(){e=Q("div"),r&&r.c(),this.h()},l(f){e=X(f,"DIV",{class:!0,style:!0});var d=w(e);r&&r.l(d),d.forEach(v),this.h()},h(){G(e,c)},m(f,d){I(f,e,d),r&&r.m(e,null),t[20](e),a=!0,u||(o=[ge(he,"scroll",t[8]),ge(he,"resize",t[9]),J(l=ye.call(null,e,t[0])),J(t[6].call(null,e))],u=!0)},p(f,d){r&&r.p&&(!a||d[0]&262144)&&x(r,i,f,f[18],a?ee(i,f[18],d,null):$(f[18]),null),G(e,c=re(p,[(!a||d[0]&10&&s!==(s=D({[f[1]]:!0,"smui-bottom-app-bar":!0,"smui-bottom-app-bar--standard":f[3]==="standard","smui-bottom-app-bar--fixed":f[3]==="fixed"})))&&{class:s},(!a||d[0]&36&&n!==(n=Object.entries(f[5]).map(Se).concat([f[2]]).join(" ")))&&{style:n},d[0]&1024&&f[10]])),l&&Be(l.update)&&d[0]&1&&l.update.call(null,f[0])},i(f){a||(E(r,f),a=!0)},o(f){S(r,f),a=!1},d(f){f&&v(e),r&&r.d(f),t[20](null),u=!1,Ie(o)}}}const ve=100;function Ee(){const t=window,e=window;return t.pageYOffset!==void 0?t.pageYOffset:e.scrollTop}const Se=([t,e])=>`${t}: ${e};`;function Ke(t,e,s){const n=["use","class","style","color","variant","getPropStore","getElement"];let l=q(e,n),a,{$$slots:u={},$$scope:o}=e;const i=ce(oe());let{use:r=[]}=e,{class:p=""}=e,{style:c=""}=e,{color:f="primary"}=e,{variant:d="standard"}=e,b,h={};const A=Fe(f);ie(t,A,m=>s(29,a=m));let g=!1,_=0;De("SMUI:bottom-app-bar:color",A);let N,Ae=Ye({withFab:g,adjustOffset:_,variant:d},m=>{s(16,N=m)});Me(()=>{(d==="standard"||d==="fixed")&&s(14,g=b.querySelector(".mdc-fab")!=null)});function H(m,P){h[m]!=P&&(P===""||P==null?(delete h[m],s(5,h)):s(5,h[m]=P,h))}let U=!0,de=!0,B=0,te=!1,se=0,ne,k,V=0;function _e(){return b.getBoundingClientRect().height}let L=null;function le(){if(d!=="standard")return;const m=Math.max(Ee(),0),P=m-ne;ne=m,te||(B-=P,B>0?B=0:Math.abs(B)>k&&(B=-k),Oe())}function Pe(){d==="standard"&&(se||(se=setTimeout(()=>{se=0,ze()},ve)),te=!0,V&&clearTimeout(V),V=setTimeout(()=>{le(),te=!1,V=0},ve))}function Te(){const m=-k,P=B<0,ae=B>m,pe=P&&ae;if(pe)U=!1;else if(U){if(de!==ae)return de=ae,!0}else return U=!0,!0;return pe}function Oe(){if(Te()){let m=B;H("--smui-bottom-app-bar--fab-offset",m*.75+"px"),H("bottom",m+"px"),s(15,_=m),g&&s(15,_-=+m*.75)}}function ze(){const m=_e();k!==m&&(U=!1,B-=k-m,k=m),le()}function je(){return Ae}function ke(){return b}function qe(m){fe[m?"unshift":"push"](()=>{b=m,s(4,b)})}return t.$$set=m=>{e=y(y({},e),ue(m)),s(10,l=q(e,n)),"use"in m&&s(0,r=m.use),"class"in m&&s(1,p=m.class),"style"in m&&s(2,c=m.style),"color"in m&&s(11,f=m.color),"variant"in m&&s(3,d=m.variant),"$$scope"in m&&s(18,o=m.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2048&&Re(A,a=f,a),t.$$.dirty[0]&131096&&b&&d!==L&&(d==="standard"?(ne=Ee(),k=_e()):L==="standard"&&(H("bottom",""),H("--smui-bottom-app-bar--fab-offset","0px"),s(15,_=0)),s(17,L=d)),t.$$.dirty[0]&114696&&N&&N({withFab:g,adjustOffset:_,variant:d})},[r,p,c,d,b,h,i,A,le,Pe,l,f,je,ke,g,_,N,L,o,u,qe]}class Qe extends M{constructor(e){super(),R(this,e,Ke,Je,C,{use:0,class:1,style:2,color:11,variant:3,getPropStore:12,getElement:13},null,[-1,-1])}get getPropStore(){return this.$$.ctx[12]}get getElement(){return this.$$.ctx[13]}}function Xe(t){let e,s,n,l,a,u;const o=t[12].default,i=K(o,t,t[11],null);let r=[{class:s=D({[t[1]]:!0,"smui-paper":!0,"smui-paper--raised":t[2]==="raised","smui-paper--unelevated":t[2]==="unelevated","smui-paper--outlined":t[2]==="outlined",["smui-paper--elevation-z"+t[5]]:t[5]!==0&&t[2]==="raised","smui-paper--rounded":!t[3],["smui-paper--color-"+t[4]]:t[4]!=="default","smui-paper-transition":t[6]})},t[9]],p={};for(let c=0;c<r.length;c+=1)p=y(p,r[c]);return{c(){e=Q("div"),i&&i.c(),this.h()},l(c){e=X(c,"DIV",{class:!0});var f=w(e);i&&i.l(f),f.forEach(v),this.h()},h(){G(e,p)},m(c,f){I(c,e,f),i&&i.m(e,null),t[13](e),l=!0,a||(u=[J(n=ye.call(null,e,t[0])),J(t[8].call(null,e))],a=!0)},p(c,[f]){i&&i.p&&(!l||f&2048)&&x(i,o,c,c[11],l?ee(o,c[11],f,null):$(c[11]),null),G(e,p=re(r,[(!l||f&126&&s!==(s=D({[c[1]]:!0,"smui-paper":!0,"smui-paper--raised":c[2]==="raised","smui-paper--unelevated":c[2]==="unelevated","smui-paper--outlined":c[2]==="outlined",["smui-paper--elevation-z"+c[5]]:c[5]!==0&&c[2]==="raised","smui-paper--rounded":!c[3],["smui-paper--color-"+c[4]]:c[4]!=="default","smui-paper-transition":c[6]})))&&{class:s},f&512&&c[9]])),n&&Be(n.update)&&f&1&&n.update.call(null,c[0])},i(c){l||(E(i,c),l=!0)},o(c){S(i,c),l=!1},d(c){c&&v(e),i&&i.d(c),t[13](null),a=!1,Ie(u)}}}function we(t,e,s){const n=["use","class","variant","square","color","elevation","transition","getElement"];let l=q(e,n),{$$slots:a={},$$scope:u}=e;const o=ce(oe());let{use:i=[]}=e,{class:r=""}=e,{variant:p="raised"}=e,{square:c=!1}=e,{color:f="default"}=e,{elevation:d=1}=e,{transition:b=!1}=e,h;function A(){return h}function g(_){fe[_?"unshift":"push"](()=>{h=_,s(7,h)})}return t.$$set=_=>{e=y(y({},e),ue(_)),s(9,l=q(e,n)),"use"in _&&s(0,i=_.use),"class"in _&&s(1,r=_.class),"variant"in _&&s(2,p=_.variant),"square"in _&&s(3,c=_.square),"color"in _&&s(4,f=_.color),"elevation"in _&&s(5,d=_.elevation),"transition"in _&&s(6,b=_.transition),"$$scope"in _&&s(11,u=_.$$scope)},[i,r,p,c,f,d,b,h,o,l,A,u,a,g]}class xe extends M{constructor(e){super(),R(this,e,we,Xe,C,{use:0,class:1,variant:2,square:3,color:4,elevation:5,transition:6,getElement:10})}get getElement(){return this.$$.ctx[10]}}me({class:"smui-paper__content",tag:"div"});me({class:"smui-paper__title",tag:"h5"});me({class:"smui-paper__subtitle",tag:"h6"});function $e(t){let e;const s=t[9].default,n=K(s,t,t[11],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,a){n&&n.m(l,a),e=!0},p(l,a){n&&n.p&&(!e||a&2048)&&x(n,s,l,l[11],e?ee(s,l[11],a,null):$(l[11]),null)},i(l){e||(E(n,l),e=!0)},o(l){S(n,l),e=!1},d(l){n&&n.d(l)}}}function et(t){let e,s;const n=[{use:t[3]},{class:D({[t[0]]:!0,"smui-bottom-app-bar__section":!0,"smui-bottom-app-bar__section--fab-inset":t[1]})},{color:t[4]},{variant:"unelevated"},{square:!0},t[6]];let l={$$slots:{default:[$e]},$$scope:{ctx:t}};for(let a=0;a<n.length;a+=1)l=y(l,n[a]);return e=new xe({props:l}),t[10](e),{c(){T(e.$$.fragment)},l(a){O(e.$$.fragment,a)},m(a,u){z(e,a,u),s=!0},p(a,[u]){const o=u&91?re(n,[u&8&&{use:a[3]},u&3&&{class:D({[a[0]]:!0,"smui-bottom-app-bar__section":!0,"smui-bottom-app-bar__section--fab-inset":a[1]})},u&16&&{color:a[4]},n[3],n[4],u&64&&Ne(a[6])]):{};u&2048&&(o.$$scope={dirty:u,ctx:a}),e.$set(o)},i(a){s||(E(e.$$.fragment,a),s=!0)},o(a){S(e.$$.fragment,a),s=!1},d(a){t[10](null),j(e,a)}}}function tt(t,e,s){let n;const l=["use","class","fabInset","getElement"];let a=q(e,l),u,{$$slots:o={},$$scope:i}=e;const r=ce(oe());let{use:p=[]}=e,{class:c=""}=e,{fabInset:f=!1}=e,d;const b=He("SMUI:bottom-app-bar:color");ie(t,b,g=>s(4,u=g));function h(){return d.getElement()}function A(g){fe[g?"unshift":"push"](()=>{d=g,s(2,d)})}return t.$$set=g=>{e=y(y({},e),ue(g)),s(6,a=q(e,l)),"use"in g&&s(7,p=g.use),"class"in g&&s(0,c=g.class),"fabInset"in g&&s(1,f=g.fabInset),"$$scope"in g&&s(11,i=g.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&s(3,n=[r,...p])},[c,f,d,n,u,b,a,p,h,o,A,i]}class st extends M{constructor(e){super(),R(this,e,tt,et,C,{use:7,class:0,fabInset:1,getElement:8})}get getElement(){return this.$$.ctx[8]}}function nt(t){let e;return{c(){e=Ue(t[1])},l(s){e=Ve(s,t[1])},m(s,n){I(s,e,n)},p(s,n){n&2&&Le(e,s[1])},d(s){s&&v(e)}}}function lt(t){let e,s,n;return s=new Ze({props:{class:"material-icons","aria-label":t[0],$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){e=Q("a"),T(s.$$.fragment),this.h()},l(l){e=X(l,"A",{href:!0,class:!0});var a=w(e);O(s.$$.fragment,a),a.forEach(v),this.h()},h(){Y(e,"href",t[2]),Y(e,"class","undecorated svelte-bt2pnp"),be(e,"underlined",t[3].startsWith(t[2]))},m(l,a){I(l,e,a),z(s,e,null),n=!0},p(l,[a]){const u={};a&1&&(u["aria-label"]=l[0]),a&34&&(u.$$scope={dirty:a,ctx:l}),s.$set(u),(!n||a&4)&&Y(e,"href",l[2]),(!n||a&12)&&be(e,"underlined",l[3].startsWith(l[2]))},i(l){n||(E(s.$$.fragment,l),n=!0)},o(l){S(s.$$.fragment,l),n=!1},d(l){l&&v(e),j(s)}}}function at(t,e,s){let n,l;ie(t,Ge,i=>s(4,l=i));let{label:a}=e,{icon:u}=e,{route:o}=e;return t.$$set=i=>{"label"in i&&s(0,a=i.label),"icon"in i&&s(1,u=i.icon),"route"in i&&s(2,o=i.route)},t.$$.update=()=>{t.$$.dirty&16&&s(3,n=l.url.pathname)},[a,u,o,n,l]}class W extends M{constructor(e){super(),R(this,e,at,lt,C,{label:0,icon:1,route:2})}}function rt(t){let e,s,n,l,a,u,o,i;return e=new W({props:{label:"Excersize",icon:"fitness_center",route:"/work"}}),n=new W({props:{label:"Analytics",icon:"insights",route:"/stats"}}),a=new W({props:{label:"Fitness Library",icon:"menu_book",route:"/lib"}}),o=new W({props:{label:"Settings",icon:"settings",route:"/settings"}}),{c(){T(e.$$.fragment),s=F(),T(n.$$.fragment),l=F(),T(a.$$.fragment),u=F(),T(o.$$.fragment)},l(r){O(e.$$.fragment,r),s=Z(r),O(n.$$.fragment,r),l=Z(r),O(a.$$.fragment,r),u=Z(r),O(o.$$.fragment,r)},m(r,p){z(e,r,p),I(r,s,p),z(n,r,p),I(r,l,p),z(a,r,p),I(r,u,p),z(o,r,p),i=!0},p:We,i(r){i||(E(e.$$.fragment,r),E(n.$$.fragment,r),E(a.$$.fragment,r),E(o.$$.fragment,r),i=!0)},o(r){S(e.$$.fragment,r),S(n.$$.fragment,r),S(a.$$.fragment,r),S(o.$$.fragment,r),i=!1},d(r){j(e,r),r&&v(s),j(n,r),r&&v(l),j(a,r),r&&v(u),j(o,r)}}}function ot(t){let e,s;return e=new st({props:{style:"justify-content: space-around;",$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){T(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,l){z(e,n,l),s=!0},p(n,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){s||(E(e.$$.fragment,n),s=!0)},o(n){S(e.$$.fragment,n),s=!1},d(n){j(e,n)}}}function it(t){let e,s,n,l;const a=t[0].default,u=K(a,t,t[1],null);return n=new Qe({props:{variant:"static",color:"secondary",$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=Q("div"),u&&u.c(),s=F(),T(n.$$.fragment),this.h()},l(o){e=X(o,"DIV",{class:!0});var i=w(e);u&&u.l(i),i.forEach(v),s=Z(o),O(n.$$.fragment,o),this.h()},h(){Y(e,"class","app-body svelte-1kdfwnn")},m(o,i){I(o,e,i),u&&u.m(e,null),I(o,s,i),z(n,o,i),l=!0},p(o,[i]){u&&u.p&&(!l||i&2)&&x(u,a,o,o[1],l?ee(a,o[1],i,null):$(o[1]),null);const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),n.$set(r)},i(o){l||(E(u,o),E(n.$$.fragment,o),l=!0)},o(o){S(u,o),S(n.$$.fragment,o),l=!1},d(o){o&&v(e),u&&u.d(o),o&&v(s),j(n,o)}}}function ut(t,e,s){let{$$slots:n={},$$scope:l}=e;return t.$$set=a=>{"$$scope"in a&&s(1,l=a.$$scope)},[n,l]}class gt extends M{constructor(e){super(),R(this,e,ut,it,C,{})}}export{gt as default};
