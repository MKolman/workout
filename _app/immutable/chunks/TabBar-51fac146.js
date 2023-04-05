import{S as Pt,i as Mt,s as Wt,D as ht,K as M,k as nt,l as rt,m as lt,h as K,L as Y,b as Q,F as Lt,N as Z,G as gt,H as mt,I as St,O as G,P as x,f as W,t as V,Q as qt,R as at,T as Kt,o as Nt,V as Vt,v as X,w as Zt,x as _t,e as dt,y as Ft,z as vt,Y as At,g as yt,A as Tt,d as Ot,Z as Jt,U as Dt,a as Xt,c as Gt,n as he,M as q,a6 as ge,a7 as me}from"./index-4d38a571.js";import{c as N,u as ct,f as Yt,S as wt}from"./SmuiElement-b2877459.js";import{d as Rt}from"./dispatch-49762ebd.js";import{p as k,e as ot}from"./prefixFilter-9aa1f37f.js";import{_ as $,a as it,M as kt,R as xt,b as Se,p as pe}from"./Ripple-822041cf.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var be={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},_e={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var w=function(n){$(t,n);function t(e){return n.call(this,it(it({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return be},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},t}(kt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ve=function(n){$(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.activate=function(){this.adapter.addClass(w.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(w.cssClasses.ACTIVE)},t}(w);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $t=function(n){$(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.activate=function(e){if(!e){this.adapter.addClass(w.cssClasses.ACTIVE);return}var r=this.computeContentClientRect(),l=e.width/r.width,a=e.left-r.left;this.adapter.addClass(w.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+a+"px) scaleX("+l+")"),this.computeContentClientRect(),this.adapter.removeClass(w.cssClasses.NO_TRANSITION),this.adapter.addClass(w.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},t.prototype.deactivate=function(){this.adapter.removeClass(w.cssClasses.ACTIVE)},t}(w);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var It={ACTIVE:"mdc-tab--active"},bt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ae=function(n){$(t,n);function t(e){var r=n.call(this,it(it({},t.defaultAdapter),e))||this;return r.focusOnActivate=!0,r}return Object.defineProperty(t,"cssClasses",{get:function(){return It},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return bt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.handleClick=function(){this.adapter.notifyInteracted()},t.prototype.isActive=function(){return this.adapter.hasClass(It.ACTIVE)},t.prototype.setFocusOnActivate=function(e){this.focusOnActivate=e},t.prototype.activate=function(e){this.adapter.addClass(It.ACTIVE),this.adapter.setAttr(bt.ARIA_SELECTED,"true"),this.adapter.setAttr(bt.TABINDEX,"0"),this.adapter.activateIndicator(e),this.focusOnActivate&&this.adapter.focus()},t.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(It.ACTIVE),this.adapter.setAttr(bt.ARIA_SELECTED,"false"),this.adapter.setAttr(bt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},t.prototype.computeDimensions=function(){var e=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),l=this.adapter.getContentOffsetWidth(),a=this.adapter.getContentOffsetLeft();return{contentLeft:r+a,contentRight:r+a+l,rootLeft:r,rootRight:r+e}},t}(kt);function Te(n){let t,e,r,l,a,i,o,s,m,v,C;const S=n[21].default,b=ht(S,n,n[20],null);let O=[{class:r=N({[n[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":n[3]==="underline","mdc-tab-indicator__content--icon":n[3]==="icon"})},{style:l=Object.entries(n[10]).map(te).join(" ")},{"aria-hidden":a=n[3]==="icon"?"true":void 0},k(n[12],"content$")],E={};for(let c=0;c<O.length;c+=1)E=M(E,O[c]);let p=[{class:o=N({[n[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":n[0],"mdc-tab-indicator--fade":n[4]==="fade",...n[9]})},ot(n[12],["content$"])],u={};for(let c=0;c<p.length;c+=1)u=M(u,p[c]);return{c(){t=nt("span"),e=nt("span"),b&&b.c(),this.h()},l(c){t=rt(c,"SPAN",{class:!0});var T=lt(t);e=rt(T,"SPAN",{class:!0,style:!0,"aria-hidden":!0});var A=lt(e);b&&b.l(A),A.forEach(K),T.forEach(K),this.h()},h(){Y(e,E),Y(t,u)},m(c,T){Q(c,t,T),Lt(t,e),b&&b.m(e,null),n[22](e),n[23](t),m=!0,v||(C=[Z(i=ct.call(null,e,n[5])),Z(s=ct.call(null,t,n[1])),Z(n[11].call(null,t))],v=!0)},p(c,[T]){b&&b.p&&(!m||T&1048576)&&gt(b,S,c,c[20],m?St(S,c[20],T,null):mt(c[20]),null),Y(e,E=G(O,[(!m||T&72&&r!==(r=N({[c[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":c[3]==="underline","mdc-tab-indicator__content--icon":c[3]==="icon"})))&&{class:r},(!m||T&1024&&l!==(l=Object.entries(c[10]).map(te).join(" ")))&&{style:l},(!m||T&8&&a!==(a=c[3]==="icon"?"true":void 0))&&{"aria-hidden":a},T&4096&&k(c[12],"content$")])),i&&x(i.update)&&T&32&&i.update.call(null,c[5]),Y(t,u=G(p,[(!m||T&533&&o!==(o=N({[c[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":c[0],"mdc-tab-indicator--fade":c[4]==="fade",...c[9]})))&&{class:o},T&4096&&ot(c[12],["content$"])])),s&&x(s.update)&&T&2&&s.update.call(null,c[1])},i(c){m||(W(b,c),m=!0)},o(c){V(b,c),m=!1},d(c){c&&K(t),b&&b.d(c),n[22](null),n[23](null),v=!1,qt(C)}}}const te=([n,t])=>`${n}: ${t};`;function Ce(n,t,e){const r=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let l=at(t,r),{$$slots:a={},$$scope:i}=t;const o=Yt(Kt());let{use:s=[]}=t,{class:m=""}=t,{active:v=!1}=t,{type:C="underline"}=t,{transition:S="slide"}=t,{content$use:b=[]}=t,{content$class:O=""}=t,E,p,u,c={},T={},A=[],L=S;Nt(()=>(e(17,p=y()),p.init(),()=>{p.destroy()}));function y(){const d={fade:ve,slide:$t}[S]||$t;return new d({addClass:(...R)=>g(()=>I(...R)),removeClass:(...R)=>g(()=>P(...R)),computeContentClientRect:j,setContentStyleProperty:(...R)=>g(()=>H(...R))})}function g(d){A.length?A[A.length-1].push(d):d()}function I(d){c[d]||e(9,c[d]=!0,c)}function P(d){(!(d in c)||c[d])&&e(9,c[d]=!1,c)}function H(d,R){T[d]!=R&&(R===""||R==null?(delete T[d],e(10,T),e(19,L),e(4,S),e(17,p)):e(10,T[d]=R,T))}function z(d){e(0,v=!0),p.activate(d)}function tt(){e(0,v=!1),p.deactivate()}function j(){return A.push([]),e(18,A),u.getBoundingClientRect()}function et(){return E}function st(d){X[d?"unshift":"push"](()=>{u=d,e(8,u)})}function f(d){X[d?"unshift":"push"](()=>{E=d,e(7,E)})}return n.$$set=d=>{t=M(M({},t),Vt(d)),e(12,l=at(t,r)),"use"in d&&e(1,s=d.use),"class"in d&&e(2,m=d.class),"active"in d&&e(0,v=d.active),"type"in d&&e(3,C=d.type),"transition"in d&&e(4,S=d.transition),"content$use"in d&&e(5,b=d.content$use),"content$class"in d&&e(6,O=d.content$class),"$$scope"in d&&e(20,i=d.$$scope)},n.$$.update=()=>{n.$$.dirty&655376&&L!==S&&(e(19,L=S),p&&p.destroy(),e(9,c={}),e(10,T={}),e(17,p=y()),p.init()),n.$$.dirty&262144&&A.length&&requestAnimationFrame(()=>{var d;const R=(d=A.shift())!==null&&d!==void 0?d:[];e(18,A);for(const J of R)J()})},[v,s,m,C,S,b,O,E,u,c,T,o,l,z,tt,j,et,p,A,L,i,a,st,f]}class fe extends Pt{constructor(t){super(),Mt(this,t,Ce,Te,Wt,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const Ee=n=>({}),ee=n=>({}),Ie=n=>({}),ne=n=>({});function re(n){let t,e;const r=[{active:n[18]},k(n[25],"tabIndicator$")];let l={$$slots:{default:[Re]},$$scope:{ctx:n}};for(let a=0;a<r.length;a+=1)l=M(l,r[a]);return t=new fe({props:l}),n[33](t),{c(){_t(t.$$.fragment)},l(a){Ft(t.$$.fragment,a)},m(a,i){vt(t,a,i),e=!0},p(a,i){const o=i[0]&33816576?G(r,[i[0]&262144&&{active:a[18]},i[0]&33554432&&At(k(a[25],"tabIndicator$"))]):{};i[1]&64&&(o.$$scope={dirty:i,ctx:a}),t.$set(o)},i(a){e||(W(t.$$.fragment,a),e=!0)},o(a){V(t.$$.fragment,a),e=!1},d(a){n[33](null),Tt(t,a)}}}function Re(n){let t;const e=n[32]["tab-indicator"],r=ht(e,n,n[37],ne);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,a){r&&r.m(l,a),t=!0},p(l,a){r&&r.p&&(!t||a[1]&64)&&gt(r,e,l,l[37],t?St(e,l[37],a,Ie):mt(l[37]),ne)},i(l){t||(W(r,l),t=!0)},o(l){V(r,l),t=!1},d(l){r&&r.d(l)}}}function le(n){let t,e;const r=[{active:n[18]},k(n[25],"tabIndicator$")];let l={$$slots:{default:[Le]},$$scope:{ctx:n}};for(let a=0;a<r.length;a+=1)l=M(l,r[a]);return t=new fe({props:l}),n[35](t),{c(){_t(t.$$.fragment)},l(a){Ft(t.$$.fragment,a)},m(a,i){vt(t,a,i),e=!0},p(a,i){const o=i[0]&33816576?G(r,[i[0]&262144&&{active:a[18]},i[0]&33554432&&At(k(a[25],"tabIndicator$"))]):{};i[1]&64&&(o.$$scope={dirty:i,ctx:a}),t.$set(o)},i(a){e||(W(t.$$.fragment,a),e=!0)},o(a){V(t.$$.fragment,a),e=!1},d(a){n[35](null),Tt(t,a)}}}function Le(n){let t;const e=n[32]["tab-indicator"],r=ht(e,n,n[37],ee);return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,a){r&&r.m(l,a),t=!0},p(l,a){r&&r.p&&(!t||a[1]&64)&&gt(r,e,l,l[37],t?St(e,l[37],a,Ee):mt(l[37]),ee)},i(l){t||(W(r,l),t=!0)},o(l){V(r,l),t=!1},d(l){r&&r.d(l)}}}function ye(n){let t,e,r,l,a,i,o,s,m,v;const C=n[32].default,S=ht(C,n,n[37],null);let b=n[6]&&re(n),O=[{class:r=N({[n[9]]:!0,"mdc-tab__content":!0})},k(n[25],"content$")],E={};for(let u=0;u<O.length;u+=1)E=M(E,O[u]);let p=!n[6]&&le(n);return{c(){t=nt("span"),S&&S.c(),e=Xt(),b&&b.c(),a=Xt(),p&&p.c(),i=Xt(),o=nt("span"),this.h()},l(u){t=rt(u,"SPAN",{class:!0});var c=lt(t);S&&S.l(c),e=Gt(c),b&&b.l(c),c.forEach(K),a=Gt(u),p&&p.l(u),i=Gt(u),o=rt(u,"SPAN",{class:!0}),lt(o).forEach(K),this.h()},h(){Y(t,E),he(o,"class","mdc-tab__ripple")},m(u,c){Q(u,t,c),S&&S.m(t,null),Lt(t,e),b&&b.m(t,null),n[34](t),Q(u,a,c),p&&p.m(u,c),Q(u,i,c),Q(u,o,c),s=!0,m||(v=Z(l=ct.call(null,t,n[8])),m=!0)},p(u,c){S&&S.p&&(!s||c[1]&64)&&gt(S,C,u,u[37],s?St(C,u[37],c,null):mt(u[37]),null),u[6]?b?(b.p(u,c),c[0]&64&&W(b,1)):(b=re(u),b.c(),W(b,1),b.m(t,null)):b&&(yt(),V(b,1,1,()=>{b=null}),Ot()),Y(t,E=G(O,[(!s||c[0]&512&&r!==(r=N({[u[9]]:!0,"mdc-tab__content":!0})))&&{class:r},c[0]&33554432&&k(u[25],"content$")])),l&&x(l.update)&&c[0]&256&&l.update.call(null,u[8]),u[6]?p&&(yt(),V(p,1,1,()=>{p=null}),Ot()):p?(p.p(u,c),c[0]&64&&W(p,1)):(p=le(u),p.c(),W(p,1),p.m(i.parentNode,i))},i(u){s||(W(S,u),W(b),W(p),s=!0)},o(u){V(S,u),V(b),V(p),s=!1},d(u){u&&K(t),S&&S.d(u),b&&b.d(),n[34](null),u&&K(a),p&&p.d(u),u&&K(i),u&&K(o),m=!1,v()}}}function Oe(n){let t,e,r;const l=[{tag:n[11]},{use:[[xt,{ripple:n[3],unbounded:!1,addClass:n[21],removeClass:n[22],addStyle:n[23]}],n[20],...n[0]]},{class:N({[n[1]]:!0,"mdc-tab":!0,"mdc-tab--active":n[18],"mdc-tab--stacked":n[4],"mdc-tab--min-width":n[5],...n[15]})},{style:Object.entries(n[16]).map(ae).concat([n[2]]).join(" ")},{role:"tab"},{"aria-selected":n[18]?"true":"false"},{tabindex:n[18]||n[19]?"0":"-1"},{href:n[7]},n[17],ot(n[25],["content$","tabIndicator$"])];var a=n[10];function i(o){let s={$$slots:{default:[ye]},$$scope:{ctx:o}};for(let m=0;m<l.length;m+=1)s=M(s,l[m]);return{props:s}}return a&&(t=Zt(a,i(n)),n[36](t),t.$on("click",n[24])),{c(){t&&_t(t.$$.fragment),e=dt()},l(o){t&&Ft(t.$$.fragment,o),e=dt()},m(o,s){t&&vt(t,o,s),Q(o,e,s),r=!0},p(o,s){const m=s[0]&50301119?G(l,[s[0]&2048&&{tag:o[11]},s[0]&15728649&&{use:[[xt,{ripple:o[3],unbounded:!1,addClass:o[21],removeClass:o[22],addStyle:o[23]}],o[20],...o[0]]},s[0]&294962&&{class:N({[o[1]]:!0,"mdc-tab":!0,"mdc-tab--active":o[18],"mdc-tab--stacked":o[4],"mdc-tab--min-width":o[5],...o[15]})},s[0]&65540&&{style:Object.entries(o[16]).map(ae).concat([o[2]]).join(" ")},l[4],s[0]&262144&&{"aria-selected":o[18]?"true":"false"},s[0]&786432&&{tabindex:o[18]||o[19]?"0":"-1"},s[0]&128&&{href:o[7]},s[0]&131072&&At(o[17]),s[0]&33554432&&At(ot(o[25],["content$","tabIndicator$"]))]):{};if(s[0]&33841984|s[1]&64&&(m.$$scope={dirty:s,ctx:o}),a!==(a=o[10])){if(t){yt();const v=t;V(v.$$.fragment,1,0,()=>{Tt(v,1)}),Ot()}a?(t=Zt(a,i(o)),o[36](t),t.$on("click",o[24]),_t(t.$$.fragment),W(t.$$.fragment,1),vt(t,e.parentNode,e)):t=null}else a&&t.$set(m)},i(o){r||(t&&W(t.$$.fragment,o),r=!0)},o(o){t&&V(t.$$.fragment,o),r=!1},d(o){n[36](null),o&&K(e),t&&Tt(t,o)}}}const ae=([n,t])=>`${n}: ${t};`;function De(n,t,e){const r=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","activate","deactivate","focus","getElement"];let l=at(t,r),{$$slots:a={},$$scope:i}=t;const o=Yt(Kt());let{use:s=[]}=t,{class:m=""}=t,{style:v=""}=t,{tab:C}=t,{ripple:S=!0}=t,{stacked:b=!1}=t,{minWidth:O=!1}=t,{indicatorSpanOnlyContent:E=!1}=t,{href:p=void 0}=t,{content$use:u=[]}=t,{content$class:c=""}=t,T,A,L,y,g={},I={},P={},H=Jt("SMUI:tab:focusOnActivate"),z=C===Jt("SMUI:tab:initialActive"),tt=!1,{component:j=wt}=t,{tag:et=j===wt?p==null?"button":"a":void 0}=t;if(Dt("SMUI:label:context","tab"),Dt("SMUI:icon:context","tab"),!C)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");Nt(()=>{e(31,A=new Ae({setAttr:J,addClass:f,removeClass:d,hasClass:st,activateIndicator:F=>y.activate(F),deactivateIndicator:()=>y.deactivate(),notifyInteracted:()=>Rt(U(),"SMUITab:interacted",{tabId:C},void 0,!0),getOffsetLeft:()=>U().offsetLeft,getOffsetWidth:()=>U().offsetWidth,getContentOffsetLeft:()=>L.offsetLeft,getContentOffsetWidth:()=>L.offsetWidth,focus:pt}));const h={tabId:C,get element(){return U()},get active(){return z},forceAccessible(F){e(19,tt=F)},computeIndicatorClientRect:()=>y.computeContentClientRect(),computeDimensions:()=>A.computeDimensions(),focus:pt,activate:Ct,deactivate:Et};return Rt(U(),"SMUITab:mount",h),A.init(),()=>{Rt(U(),"SMUITab:unmount",h),A.destroy()}});function st(h){return h in g?g[h]:U().classList.contains(h)}function f(h){g[h]||e(15,g[h]=!0,g)}function d(h){(!(h in g)||g[h])&&e(15,g[h]=!1,g)}function R(h,F){I[h]!=F&&(F===""||F==null?(delete I[h],e(16,I)):e(16,I[h]=F,I))}function J(h,F){P[h]!==F&&e(17,P[h]=F,P)}function jt(h){!h.defaultPrevented&&A&&A.handleClick()}function Ct(h,F){e(18,z=!0),F&&A.setFocusOnActivate(!1),A.activate(h),F&&A.setFocusOnActivate(H)}function Et(){e(18,z=!1),A.deactivate()}function pt(){U().focus()}function U(){return T.getElement()}function Ht(h){X[h?"unshift":"push"](()=>{y=h,e(14,y)})}function Ut(h){X[h?"unshift":"push"](()=>{L=h,e(13,L)})}function Bt(h){X[h?"unshift":"push"](()=>{y=h,e(14,y)})}function _(h){X[h?"unshift":"push"](()=>{T=h,e(12,T)})}return n.$$set=h=>{t=M(M({},t),Vt(h)),e(25,l=at(t,r)),"use"in h&&e(0,s=h.use),"class"in h&&e(1,m=h.class),"style"in h&&e(2,v=h.style),"tab"in h&&e(26,C=h.tab),"ripple"in h&&e(3,S=h.ripple),"stacked"in h&&e(4,b=h.stacked),"minWidth"in h&&e(5,O=h.minWidth),"indicatorSpanOnlyContent"in h&&e(6,E=h.indicatorSpanOnlyContent),"href"in h&&e(7,p=h.href),"content$use"in h&&e(8,u=h.content$use),"content$class"in h&&e(9,c=h.content$class),"component"in h&&e(10,j=h.component),"tag"in h&&e(11,et=h.tag),"$$scope"in h&&e(37,i=h.$$scope)},n.$$.update=()=>{n.$$.dirty[1]&1&&A&&A.setFocusOnActivate(H)},[s,m,v,S,b,O,E,p,u,c,j,et,T,L,y,g,I,P,z,tt,o,f,d,R,jt,l,C,Ct,Et,pt,U,A,a,Ht,Ut,Bt,_,i]}class Je extends Pt{constructor(t){super(),Mt(this,t,De,Oe,Wt,{use:0,class:1,style:2,tab:26,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,tag:11,activate:27,deactivate:28,focus:29,getElement:30},null,[-1,-1])}get activate(){return this.$$.ctx[27]}get deactivate(){return this.$$.ctx[28]}get focus(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var de={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},Pe={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qt=function(){function n(t){this.adapter=t}return n}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Me=function(n){$(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(){var e=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.calculateScrollEdges(),l=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r.right-e);return{finalScrollPosition:a,scrollDelta:a-l}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(r-e);return{finalScrollPosition:l,scrollDelta:l-r}},t.prototype.getAnimatingScrollPosition=function(e){return e},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var We=function(n){$(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(e-r)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(-e);return{finalScrollPosition:l,scrollDelta:l-r}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(r-e);return{finalScrollPosition:l,scrollDelta:l-r}},t.prototype.getAnimatingScrollPosition=function(e,r){return e-r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:r-e,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,e),r.left)},t}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ke=function(n){$(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(e);return{finalScrollPosition:l,scrollDelta:r-l}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(r+e);return{finalScrollPosition:l,scrollDelta:r-l}},t.prototype.getAnimatingScrollPosition=function(e,r){return e+r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:e-r,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,e),r.left)},t}(Qt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ne=function(n){$(t,n);function t(e){var r=n.call(this,it(it({},t.defaultAdapter),e))||this;return r.isAnimating=!1,r}return Object.defineProperty(t,"cssClasses",{get:function(){return de},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Pe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-e+"px"),this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)},t.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return r-e},t.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},t.prototype.handleTransitionEnd=function(e){var r=e.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(r,t.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(t.cssClasses.ANIMATING))},t.prototype.incrementScroll=function(e){e!==0&&this.animate(this.getIncrementScrollOperation(e))},t.prototype.incrementScrollImmediate=function(e){if(e!==0){var r=this.getIncrementScrollOperation(e);r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},t.prototype.scrollTo=function(e){if(this.isRTL()){this.scrollToImplRTL(e);return}this.scrollToImpl(e)},t.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},t.prototype.calculateCurrentTranslateX=function(){var e=this.adapter.getScrollContentStyleValue("transform");if(e==="none")return 0;var r=/\((.+?)\)/.exec(e);if(!r)return 0;var l=r[1],a=Se(l.split(","),6);a[0],a[1],a[2],a[3];var i=a[4];return a[5],parseFloat(i)},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t.prototype.computeCurrentScrollPositionRTL=function(){var e=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(e)},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.scrollToImpl=function(e){var r=this.getScrollPosition(),l=this.clampScrollValue(e),a=l-r;this.animate({finalScrollPosition:l,scrollDelta:a})},t.prototype.scrollToImplRTL=function(e){var r=this.getRTLScroller().scrollToRTL(e);this.animate(r)},t.prototype.getIncrementScrollOperation=function(e){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(e);var r=this.getScrollPosition(),l=e+r,a=this.clampScrollValue(l),i=a-r;return{finalScrollPosition:a,scrollDelta:i}},t.prototype.animate=function(e){var r=this;e.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+e.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(t.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},t.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var e=this.getAnimatingScrollPosition();this.adapter.removeClass(t.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(e)},t.prototype.getAnimatingScrollPosition=function(){var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,e):r-e},t.prototype.rtlScrollerFactory=function(){var e=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(e-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(e),new We(this.adapter);var l=this.adapter.computeScrollAreaClientRect(),a=this.adapter.computeScrollContentClientRect(),i=Math.round(a.right-l.right);return this.adapter.setScrollAreaScrollLeft(e),i===r?new Ke(this.adapter):new Me(this.adapter)},t.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},t}(kt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zt;function Ve(n,t){if(t===void 0&&(t=!0),t&&typeof zt<"u")return zt;var e=n.createElement("div");e.classList.add(de.SCROLL_TEST),n.body.appendChild(e);var r=e.offsetHeight-e.clientHeight;return n.body.removeChild(e),t&&(zt=r),r}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var D={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},B={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ut=new Set;ut.add(D.ARROW_LEFT_KEY);ut.add(D.ARROW_RIGHT_KEY);ut.add(D.END_KEY);ut.add(D.HOME_KEY);ut.add(D.ENTER_KEY);ut.add(D.SPACE_KEY);var ft=new Map;ft.set(B.ARROW_LEFT_KEYCODE,D.ARROW_LEFT_KEY);ft.set(B.ARROW_RIGHT_KEYCODE,D.ARROW_RIGHT_KEY);ft.set(B.END_KEYCODE,D.END_KEY);ft.set(B.HOME_KEYCODE,D.HOME_KEY);ft.set(B.ENTER_KEYCODE,D.ENTER_KEY);ft.set(B.SPACE_KEYCODE,D.SPACE_KEY);var Fe=function(n){$(t,n);function t(e){var r=n.call(this,it(it({},t.defaultAdapter),e))||this;return r.useAutomaticActivation=!1,r}return Object.defineProperty(t,"strings",{get:function(){return D},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setUseAutomaticActivation=function(e){this.useAutomaticActivation=e},t.prototype.activateTab=function(e){var r=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(e)||e===r)){var l;r!==-1&&(this.adapter.deactivateTabAtIndex(r),l=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(e,l),this.scrollIntoView(e),this.adapter.notifyTabActivated(e)}},t.prototype.handleKeyDown=function(e){var r=this.getKeyFromEvent(e);if(r!==void 0)if(this.isActivationKey(r)||e.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var l=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(l),this.scrollIntoView(l)}else{var a=this.adapter.getFocusedTabIndex();if(this.isActivationKey(r))this.adapter.setActiveTab(a);else{var l=this.determineTargetFromKey(a,r);this.adapter.focusTabAtIndex(l),this.scrollIntoView(l)}}},t.prototype.handleTabInteraction=function(e){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))},t.prototype.scrollIntoView=function(e){if(this.indexIsInRange(e)){if(e===0){this.adapter.scrollTo(0);return}if(e===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(e);return}this.scrollIntoViewImpl(e)}},t.prototype.determineTargetFromKey=function(e,r){var l=this.isRTL(),a=this.adapter.getTabListLength()-1,i=r===D.END_KEY,o=r===D.ARROW_LEFT_KEY&&!l||r===D.ARROW_RIGHT_KEY&&l,s=r===D.ARROW_RIGHT_KEY&&!l||r===D.ARROW_LEFT_KEY&&l,m=e;return i?m=a:o?m-=1:s?m+=1:m=0,m<0?m=a:m>a&&(m=0),m},t.prototype.calculateScrollIncrement=function(e,r,l,a){var i=this.adapter.getTabDimensionsAtIndex(r),o=i.contentLeft-l-a,s=i.contentRight-l,m=s-B.EXTRA_SCROLL_AMOUNT,v=o+B.EXTRA_SCROLL_AMOUNT;return r<e?Math.min(m,0):Math.max(v,0)},t.prototype.calculateScrollIncrementRTL=function(e,r,l,a,i){var o=this.adapter.getTabDimensionsAtIndex(r),s=i-o.contentLeft-l,m=i-o.contentRight-l-a,v=m+B.EXTRA_SCROLL_AMOUNT,C=s-B.EXTRA_SCROLL_AMOUNT;return r>e?Math.max(v,0):Math.min(C,0)},t.prototype.findAdjacentTabIndexClosestToEdge=function(e,r,l,a){var i=r.rootLeft-l,o=r.rootRight-l-a,s=i+o,m=i<0||s<0,v=o>0||s>0;return m?e-1:v?e+1:-1},t.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(e,r,l,a,i){var o=i-r.rootLeft-a-l,s=i-r.rootRight-l,m=o+s,v=o>0||m>0,C=s<0||m<0;return v?e+1:C?e-1:-1},t.prototype.getKeyFromEvent=function(e){return ut.has(e.key)?e.key:ft.get(e.keyCode)},t.prototype.isActivationKey=function(e){return e===D.SPACE_KEY||e===D.ENTER_KEY},t.prototype.indexIsInRange=function(e){return e>=0&&e<this.adapter.getTabListLength()},t.prototype.isRTL=function(){return this.adapter.isRTL()},t.prototype.scrollIntoViewImpl=function(e){var r=this.adapter.getScrollPosition(),l=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),i=this.findAdjacentTabIndexClosestToEdge(e,a,r,l);if(this.indexIsInRange(i)){var o=this.calculateScrollIncrement(e,i,r,l);this.adapter.incrementScroll(o)}},t.prototype.scrollIntoViewImplRTL=function(e){var r=this.adapter.getScrollPosition(),l=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),i=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(e,a,r,l,i);if(this.indexIsInRange(o)){var s=this.calculateScrollIncrementRTL(e,o,r,l,i);this.adapter.incrementScroll(s)}},t}(kt);function Ye(n){let t,e,r,l,a,i,o,s,m,v,C,S,b,O;const E=n[23].default,p=ht(E,n,n[22],null);let u=[{class:l=N({[n[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:a=Object.entries(n[14]).map(oe).join(" ")},k(n[16],"scrollContent$")],c={};for(let g=0;g<u.length;g+=1)c=M(c,u[g]);let T=[{class:o=N({[n[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...n[12]})},{style:s=Object.entries(n[13]).map(ie).join(" ")},k(n[16],"scrollArea$")],A={};for(let g=0;g<T.length;g+=1)A=M(A,T[g]);let L=[{class:v=N({[n[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":n[2]==="start","mdc-tab-scroller--align-end":n[2]==="end","mdc-tab-scroller--align-center":n[2]==="center",...n[11]})},ot(n[16],["scrollArea$","scrollContent$"])],y={};for(let g=0;g<L.length;g+=1)y=M(y,L[g]);return{c(){t=nt("div"),e=nt("div"),r=nt("div"),p&&p.c(),this.h()},l(g){t=rt(g,"DIV",{class:!0});var I=lt(t);e=rt(I,"DIV",{class:!0,style:!0});var P=lt(e);r=rt(P,"DIV",{class:!0,style:!0});var H=lt(r);p&&p.l(H),H.forEach(K),P.forEach(K),I.forEach(K),this.h()},h(){Y(r,c),Y(e,A),Y(t,y)},m(g,I){Q(g,t,I),Lt(t,e),Lt(e,r),p&&p.m(r,null),n[24](r),n[26](e),n[32](t),S=!0,b||(O=[Z(i=ct.call(null,r,n[5])),q(r,"transitionend",n[25]),Z(m=ct.call(null,e,n[3])),q(e,"wheel",n[27],{passive:!0}),q(e,"touchstart",n[28],{passive:!0}),q(e,"pointerdown",n[29]),q(e,"mousedown",n[30]),q(e,"keydown",n[31]),Z(C=ct.call(null,t,n[0])),Z(n[15].call(null,t))],b=!0)},p(g,I){p&&p.p&&(!S||I[0]&4194304)&&gt(p,E,g,g[22],S?St(E,g[22],I,null):mt(g[22]),null),Y(r,c=G(u,[(!S||I[0]&64&&l!==(l=N({[g[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:l},(!S||I[0]&16384&&a!==(a=Object.entries(g[14]).map(oe).join(" ")))&&{style:a},I[0]&65536&&k(g[16],"scrollContent$")])),i&&x(i.update)&&I[0]&32&&i.update.call(null,g[5]),Y(e,A=G(T,[(!S||I[0]&4112&&o!==(o=N({[g[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...g[12]})))&&{class:o},(!S||I[0]&8192&&s!==(s=Object.entries(g[13]).map(ie).join(" ")))&&{style:s},I[0]&65536&&k(g[16],"scrollArea$")])),m&&x(m.update)&&I[0]&8&&m.update.call(null,g[3]),Y(t,y=G(L,[(!S||I[0]&2054&&v!==(v=N({[g[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":g[2]==="start","mdc-tab-scroller--align-end":g[2]==="end","mdc-tab-scroller--align-center":g[2]==="center",...g[11]})))&&{class:v},I[0]&65536&&ot(g[16],["scrollArea$","scrollContent$"])])),C&&x(C.update)&&I[0]&1&&C.update.call(null,g[0])},i(g){S||(W(p,g),S=!0)},o(g){V(p,g),S=!1},d(g){g&&K(t),p&&p.d(g),n[24](null),n[26](null),n[32](null),b=!1,qt(O)}}}const oe=([n,t])=>`${n}: ${t};`,ie=([n,t])=>`${n}: ${t};`;function ke(n,t,e){const r=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let l=at(t,r),{$$slots:a={},$$scope:i}=t;const{matches:o}=pe,s=Yt(Kt());let{use:m=[]}=t,{class:v=""}=t,{align:C=void 0}=t,{scrollArea$use:S=[]}=t,{scrollArea$class:b=""}=t,{scrollContent$use:O=[]}=t,{scrollContent$class:E=""}=t,p,u,c,T,A={},L={},y={},g={};Nt(()=>(e(8,u=new Ne({eventTargetMatchesSelector:(_,h)=>o(_,h),addClass:I,removeClass:P,addScrollAreaClass:H,setScrollAreaStyleProperty:z,setScrollContentStyleProperty:tt,getScrollContentStyleValue:j,setScrollAreaScrollLeft:_=>e(9,c.scrollLeft=_,c),getScrollAreaScrollLeft:()=>c.scrollLeft,getScrollContentOffsetWidth:()=>T.offsetWidth,getScrollAreaOffsetWidth:()=>c.offsetWidth,computeScrollAreaClientRect:()=>c.getBoundingClientRect(),computeScrollContentClientRect:()=>T.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>Ve(document)})),u.init(),()=>{u.destroy()}));function I(_){A[_]||e(11,A[_]=!0,A)}function P(_){(!(_ in A)||A[_])&&e(11,A[_]=!1,A)}function H(_){L[_]||e(12,L[_]=!0,L)}function z(_,h){y[_]!=h&&(h===""||h==null?(delete y[_],e(13,y)):e(13,y[_]=h,y))}function tt(_,h){g[_]!=h&&(h===""||h==null?(delete g[_],e(14,g)):e(14,g[_]=h,g))}function j(_){return _ in g?g[_]:getComputedStyle(T).getPropertyValue(_)}function et(){return u.getScrollPosition()}function st(){return T.offsetWidth}function f(_){u.incrementScroll(_)}function d(_){u.scrollTo(_)}function R(){return p}function J(_){X[_?"unshift":"push"](()=>{T=_,e(10,T)})}const jt=_=>u&&u.handleTransitionEnd(_);function Ct(_){X[_?"unshift":"push"](()=>{c=_,e(9,c)})}const Et=()=>u&&u.handleInteraction(),pt=()=>u&&u.handleInteraction(),U=()=>u&&u.handleInteraction(),Ht=()=>u&&u.handleInteraction(),Ut=()=>u&&u.handleInteraction();function Bt(_){X[_?"unshift":"push"](()=>{p=_,e(7,p)})}return n.$$set=_=>{t=M(M({},t),Vt(_)),e(16,l=at(t,r)),"use"in _&&e(0,m=_.use),"class"in _&&e(1,v=_.class),"align"in _&&e(2,C=_.align),"scrollArea$use"in _&&e(3,S=_.scrollArea$use),"scrollArea$class"in _&&e(4,b=_.scrollArea$class),"scrollContent$use"in _&&e(5,O=_.scrollContent$use),"scrollContent$class"in _&&e(6,E=_.scrollContent$class),"$$scope"in _&&e(22,i=_.$$scope)},[m,v,C,S,b,O,E,p,u,c,T,A,L,y,g,s,l,et,st,f,d,R,i,a,J,jt,Ct,Et,pt,U,Ht,Ut,Bt]}class je extends Pt{constructor(t){super(),Mt(this,t,ke,Ye,Wt,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function se(n,t,e){const r=n.slice();return r[28]=t[e],r}const He=n=>({tab:n&4}),ce=n=>({tab:n[28]});function ue(n,t){let e,r;const l=t[20].default,a=ht(l,t,t[23],ce);return{key:n,first:null,c(){e=dt(),a&&a.c(),this.h()},l(i){e=dt(),a&&a.l(i),this.h()},h(){this.first=e},m(i,o){Q(i,e,o),a&&a.m(i,o),r=!0},p(i,o){t=i,a&&a.p&&(!r||o&8388612)&&gt(a,l,t,t[23],r?St(l,t[23],o,He):mt(t[23]),ce)},i(i){r||(W(a,i),r=!0)},o(i){V(a,i),r=!1},d(i){i&&K(e),a&&a.d(i)}}}function Ue(n){let t=[],e=new Map,r,l,a=n[2];const i=o=>o[3](o[28]);for(let o=0;o<a.length;o+=1){let s=se(n,a,o),m=i(s);e.set(m,t[o]=ue(m,s))}return{c(){for(let o=0;o<t.length;o+=1)t[o].c();r=dt()},l(o){for(let s=0;s<t.length;s+=1)t[s].l(o);r=dt()},m(o,s){for(let m=0;m<t.length;m+=1)t[m].m(o,s);Q(o,r,s),l=!0},p(o,s){s&8388620&&(a=o[2],yt(),t=ge(t,s,i,1,o,a,e,r.parentNode,me,ue,r,se),Ot())},i(o){if(!l){for(let s=0;s<a.length;s+=1)W(t[s]);l=!0}},o(o){for(let s=0;s<t.length;s+=1)V(t[s]);l=!1},d(o){for(let s=0;s<t.length;s+=1)t[s].d(o);o&&K(r)}}}function Be(n){let t,e,r,l,a,i,o;const s=[k(n[10],"tabScroller$")];let m={$$slots:{default:[Ue]},$$scope:{ctx:n}};for(let S=0;S<s.length;S+=1)m=M(m,s[S]);e=new je({props:m}),n[21](e);let v=[{class:r=N({[n[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},ot(n[10],["tabScroller$"])],C={};for(let S=0;S<v.length;S+=1)C=M(C,v[S]);return{c(){t=nt("div"),_t(e.$$.fragment),this.h()},l(S){t=rt(S,"DIV",{class:!0,role:!0});var b=lt(t);Ft(e.$$.fragment,b),b.forEach(K),this.h()},h(){Y(t,C)},m(S,b){Q(S,t,b),vt(e,t,null),n[22](t),a=!0,i||(o=[Z(l=ct.call(null,t,n[0])),Z(n[7].call(null,t)),q(t,"SMUITab:mount",n[8]),q(t,"SMUITab:unmount",n[9]),q(t,"SMUITab:interacted",function(){x(n[4]&&n[4].handleTabInteraction.bind(n[4]))&&(n[4]&&n[4].handleTabInteraction.bind(n[4])).apply(this,arguments)}),q(t,"keydown",function(){x(n[4]&&n[4].handleKeyDown.bind(n[4]))&&(n[4]&&n[4].handleKeyDown.bind(n[4])).apply(this,arguments)})],i=!0)},p(S,[b]){n=S;const O=b&1024?G(s,[At(k(n[10],"tabScroller$"))]):{};b&8388612&&(O.$$scope={dirty:b,ctx:n}),e.$set(O),Y(t,C=G(v,[(!a||b&2&&r!==(r=N({[n[1]]:!0,"mdc-tab-bar":!0})))&&{class:r},{role:"tablist"},b&1024&&ot(n[10],["tabScroller$"])])),l&&x(l.update)&&b&1&&l.update.call(null,n[0])},i(S){a||(W(e.$$.fragment,S),a=!0)},o(S){V(e.$$.fragment,S),a=!1},d(S){S&&K(t),n[21](null),Tt(e),n[22](null),i=!1,qt(o)}}}function Xe(n,t,e){const r=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"];let l=at(t,r),{$$slots:a={},$$scope:i}=t;const o=Yt(Kt());let{use:s=[]}=t,{class:m=""}=t,{tabs:v=[]}=t,{key:C=f=>f}=t,{focusOnActivate:S=!0}=t,{focusOnProgrammatic:b=!1}=t,{useAutomaticActivation:O=!0}=t,{active:E=void 0}=t,p,u,c,T=v.indexOf(E),A={},L=new WeakMap,y=!1;Dt("SMUI:tab:focusOnActivate",S),Dt("SMUI:tab:initialActive",E),Nt(()=>(e(4,u=new Fe({scrollTo:f=>c.scrollTo(f),incrementScroll:f=>c.incrementScroll(f),getScrollPosition:()=>c.getScrollPosition(),getScrollContentWidth:()=>c.getScrollContentWidth(),getOffsetWidth:()=>j().offsetWidth,isRTL:()=>getComputedStyle(j()).getPropertyValue("direction")==="rtl",setActiveTab:f=>{e(11,E=v[f]),e(17,T=f),u.activateTab(f)},activateTabAtIndex:(f,d)=>{var R;return(R=P(v[f]))===null||R===void 0?void 0:R.activate(d,y)},deactivateTabAtIndex:f=>{var d;return(d=P(v[f]))===null||d===void 0?void 0:d.deactivate()},focusTabAtIndex:f=>{var d;return(d=P(v[f]))===null||d===void 0?void 0:d.focus()},getTabIndicatorClientRectAtIndex:f=>{var d,R;return(R=(d=P(v[f]))===null||d===void 0?void 0:d.computeIndicatorClientRect())!==null&&R!==void 0?R:new DOMRect},getTabDimensionsAtIndex:f=>{var d,R;return(R=(d=P(v[f]))===null||d===void 0?void 0:d.computeDimensions())!==null&&R!==void 0?R:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var f;for(let d=0;d<v.length;d++)if(!((f=P(v[d]))===null||f===void 0)&&f.active)return d;return-1},getFocusedTabIndex:()=>{const f=v.map(R=>{var J;return(J=P(R))===null||J===void 0?void 0:J.element}),d=document.activeElement;return f.indexOf(d)},getIndexOfTabById:f=>v.indexOf(f),getTabListLength:()=>v.length,notifyTabActivated:f=>Rt(j(),"SMUITabBar:activated",{index:f},void 0,!0)})),u.init(),()=>{u.destroy()}));function g(f){const d=f.detail;H(d.tabId,d)}function I(f){const d=f.detail;z(d.tabId)}function P(f){return f instanceof Object?L.get(f):A[f]}function H(f,d){f instanceof Object?(L.set(f,d),e(19,L)):(e(18,A[f]=d,A),e(18,A))}function z(f){f instanceof Object?(L.delete(f),e(19,L)):(delete A[f],e(18,A))}function tt(f){u.scrollIntoView(f)}function j(){return p}function et(f){X[f?"unshift":"push"](()=>{c=f,e(6,c)})}function st(f){X[f?"unshift":"push"](()=>{p=f,e(5,p)})}return n.$$set=f=>{t=M(M({},t),Vt(f)),e(10,l=at(t,r)),"use"in f&&e(0,s=f.use),"class"in f&&e(1,m=f.class),"tabs"in f&&e(2,v=f.tabs),"key"in f&&e(3,C=f.key),"focusOnActivate"in f&&e(12,S=f.focusOnActivate),"focusOnProgrammatic"in f&&e(13,b=f.focusOnProgrammatic),"useAutomaticActivation"in f&&e(14,O=f.useAutomaticActivation),"active"in f&&e(11,E=f.active),"$$scope"in f&&e(23,i=f.$$scope)},n.$$.update=()=>{if(n.$$.dirty&141332&&E!==v[T]&&(e(17,T=v.indexOf(E)),u&&(y=!b,u.activateTab(T),y=!1)),n.$$.dirty&917508&&v.length){const f=v[0]instanceof Object?L.get(v[0]):A[v[0]];f&&f.forceAccessible(T===-1)}n.$$.dirty&16400&&u&&u.setUseAutomaticActivation(O)},[s,m,v,C,u,p,c,o,g,I,l,E,S,b,O,tt,j,T,A,L,a,et,st,i]}class we extends Pt{constructor(t){super(),Mt(this,t,Xe,Be,Wt,{use:0,class:1,tabs:2,key:3,focusOnActivate:12,focusOnProgrammatic:13,useAutomaticActivation:14,active:11,scrollIntoView:15,getElement:16})}get scrollIntoView(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}export{we as T,Je as a};
