import{S as re,i as oe,s as le,D as He,K as Q,k as G,l as K,m as q,h as E,L as W,b as I,F as V,N as ee,M as te,G as Xe,H as je,I as We,O as ge,P as ne,g as h,d as T,Q as ze,R as $e,T as Ye,U as Qe,o as Je,V as Ze,x as H,a4 as ue,z as k,a as y,A as v,c as D,B as O,a5 as ce,C,r as P,u as U,v as fe,f as me,ad as Re,e as he,p as ie,w as de}from"../chunks/index.54f9c080.js";import{g as ae}from"../chunks/navigation.ffaeb203.js";import{B as X}from"../chunks/Button.6ae834f0.js";import{C as xe}from"../chunks/CommonLabel.7dfac1d3.js";import{I as et}from"../chunks/IconButton.5bf38a6e.js";import{_ as tt,a as be,M as nt,p as at}from"../chunks/Ripple.1270eb40.js";import{c as z,u as Te,f as st}from"../chunks/SmuiElement.43b4fd49.js";import{d as Y}from"../chunks/dispatch.0e60088f.js";import{p as Ee,e as Se}from"../chunks/prefixFilter.9aa1f37f.js";import{c as it}from"../chunks/classAdderBuilder.5f0900d8.js";import{T as rt,B as ot}from"../chunks/Textfield.d54afa4c.js";import{T as Ae,b as lt,a as ut,H as ct}from"../chunks/db.cd7fe45a.js";import{D as ft,H as mt,C as dt,A as _t,T as pt}from"../chunks/Actions.b07a32b7.js";/**
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
 */var N={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},J={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},M={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var gt=M.ARIA_LIVE_DELAY_MS,Ie=J.ARIA_LIVE_LABEL_TEXT_ATTR;function $t(a,e){e===void 0&&(e=a);var n=a.getAttribute("aria-live"),t=e.textContent.trim();if(!(!t||!n)){a.setAttribute("aria-live","off"),e.textContent="";var s=document.createElement("span");s.setAttribute("style","display: inline-block; width: 0; height: 1px;"),s.textContent=" ",e.appendChild(s),e.setAttribute(Ie,t),setTimeout(function(){a.setAttribute("aria-live",n),e.removeAttribute(Ie),e.textContent=t},gt)}}/**
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
 */var ke=N.OPENING,ve=N.OPEN,Oe=N.CLOSING,ht=J.REASON_ACTION,se=J.REASON_DISMISS,bt=function(a){tt(e,a);function e(n){var t=a.call(this,be(be({},e.defaultAdapter),n))||this;return t.opened=!1,t.animationFrame=0,t.animationTimer=0,t.autoDismissTimer=0,t.autoDismissTimeoutMs=M.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,t.closeOnEscape=!0,t}return Object.defineProperty(e,"cssClasses",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return J},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(ke),this.adapter.removeClass(ve),this.adapter.removeClass(Oe)},e.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Oe),this.adapter.addClass(ke),this.adapter.announce(),this.runNextAnimationFrame(function(){n.adapter.addClass(ve),n.animationTimer=setTimeout(function(){var t=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),t!==M.INDETERMINATE&&(n.autoDismissTimer=setTimeout(function(){n.close(se)},t))},M.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(n){var t=this;n===void 0&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(N.CLOSING),this.adapter.removeClass(N.OPEN),this.adapter.removeClass(N.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){t.handleAnimationTimerEnd(),t.adapter.notifyClosed(n)},M.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(n){var t=M.MIN_AUTO_DISMISS_TIMEOUT_MS,s=M.MAX_AUTO_DISMISS_TIMEOUT_MS,i=M.INDETERMINATE;if(n===M.INDETERMINATE||n<=s&&n>=t)this.autoDismissTimeoutMs=n;else throw new Error(`
        timeoutMs must be an integer in the range `+t+"–"+s+`
        (or `+i+" to disable), but got '"+n+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},e.prototype.handleKeyDown=function(n){var t=n.key==="Escape"||n.keyCode===27;t&&this.getCloseOnEscape()&&this.close(se)},e.prototype.handleActionButtonClick=function(n){this.close(ht)},e.prototype.handleActionIconClick=function(n){this.close(se)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(N.OPENING),this.adapter.removeClass(N.CLOSING)},e.prototype.runNextAnimationFrame=function(n){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(n,0)})},e}(nt);function Tt(a){let e,n,t,s,i,r,l,u,m;const o=a[25].default,c=He(o,a,a[24],null);let S=[{class:t=z({[a[4]]:!0,"mdc-snackbar__surface":!0})},{role:"status"},{"aria-relevant":"additions"},Ee(a[12],"surface$")],p={};for(let g=0;g<S.length;g+=1)p=Q(p,S[g]);let d=[{class:i=z({[a[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":a[2]==="stacked","mdc-snackbar--leading":a[3],...a[8]})},Se(a[12],["surface$"])],$={};for(let g=0;g<d.length;g+=1)$=Q($,d[g]);return{c(){e=G("aside"),n=G("div"),c&&c.c(),this.h()},l(g){e=K(g,"ASIDE",{class:!0});var _=q(e);n=K(_,"DIV",{class:!0,role:!0,"aria-relevant":!0});var A=q(n);c&&c.l(A),A.forEach(E),_.forEach(E),this.h()},h(){W(n,p),W(e,$)},m(g,_){I(g,e,_),V(e,n),c&&c.m(n,null),a[26](e),l=!0,u||(m=[ee(s=Te.call(null,n,a[5])),te(n,"click",a[10]),ee(r=Te.call(null,e,a[0])),ee(a[9].call(null,e)),te(e,"SMUISnackbar:closed",a[11]),te(e,"keydown",function(){ne(a[6]&&a[6].handleKeyDown.bind(a[6]))&&(a[6]&&a[6].handleKeyDown.bind(a[6])).apply(this,arguments)})],u=!0)},p(g,_){a=g,c&&c.p&&(!l||_[0]&16777216)&&Xe(c,o,a,a[24],l?We(o,a[24],_,null):je(a[24]),null),W(n,p=ge(S,[(!l||_[0]&16&&t!==(t=z({[a[4]]:!0,"mdc-snackbar__surface":!0})))&&{class:t},{role:"status"},{"aria-relevant":"additions"},_[0]&4096&&Ee(a[12],"surface$")])),s&&ne(s.update)&&_[0]&32&&s.update.call(null,a[5]),W(e,$=ge(d,[(!l||_[0]&270&&i!==(i=z({[a[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":a[2]==="stacked","mdc-snackbar--leading":a[3],...a[8]})))&&{class:i},_[0]&4096&&Se(a[12],["surface$"])])),r&&ne(r.update)&&_[0]&1&&r.update.call(null,a[0])},i(g){l||(h(c,g),l=!0)},o(g){T(c,g),l=!1},d(g){g&&E(e),c&&c.d(g),a[26](null),u=!1,ze(m)}}}let Ce=Promise.resolve();function Et(a,e,n){const t=["use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$class","surface$use","open","forceOpen","close","isOpen","getLabelElement","getActionButtonElement","getElement"];let s=$e(e,t),{$$slots:i={},$$scope:r}=e;const{closest:l}=at,u=st(Ye());let m=()=>{};function o(f){return f===m}let{use:c=[]}=e,{class:S=""}=e,{variant:p=""}=e,{leading:d=!1}=e,{timeoutMs:$=5e3}=e,{closeOnEscape:g=!0}=e,{labelText:_=m}=e,{actionButtonText:A=m}=e,{surface$class:L=""}=e,{surface$use:R=[]}=e,B,b,w={},Z,_e=new Promise(f=>Z=f);Qe("SMUI:label:context","snackbar"),Je(()=>(n(6,b=new bt({addClass:Be,announce:()=>$t(j()),notifyClosed:f=>Y(F(),"SMUISnackbar:closed",f?{reason:f}:{},void 0,!0),notifyClosing:f=>Y(F(),"SMUISnackbar:closing",f?{reason:f}:{},void 0,!0),notifyOpened:()=>Y(F(),"SMUISnackbar:opened",void 0,void 0,!0),notifyOpening:()=>Y(F(),"SMUISnackbar:opening",void 0,void 0,!0),removeClass:we})),b.init(),()=>{b.destroy()}));function Be(f){w[f]||n(8,w[f]=!0,w)}function we(f){(!(f in w)||w[f])&&n(8,w[f]=!1,w)}function Pe(f){const pe=f.target;b&&(l(pe,".mdc-snackbar__action")?b.handleActionButtonClick(f):l(pe,".mdc-snackbar__dismiss")&&b.handleActionIconClick(f))}function Ue(){Z(),_e=new Promise(f=>Z=f)}function Fe(){Ce=Ce.then(()=>(b.open(),_e))}function Ve(){return b.open()}function Ge(f){return b.close(f)}function Ke(){return b.isOpen()}function j(){var f;return(f=F().querySelector(".mdc-snackbar__label"))!==null&&f!==void 0?f:document.createElement("div")}function x(){var f;return(f=F().querySelector(".mdc-snackbar__action"))!==null&&f!==void 0?f:document.createElement("button")}function F(){return B}function qe(f){H[f?"unshift":"push"](()=>{B=f,n(7,B)})}return a.$$set=f=>{e=Q(Q({},e),Ze(f)),n(12,s=$e(e,t)),"use"in f&&n(0,c=f.use),"class"in f&&n(1,S=f.class),"variant"in f&&n(2,p=f.variant),"leading"in f&&n(3,d=f.leading),"timeoutMs"in f&&n(13,$=f.timeoutMs),"closeOnEscape"in f&&n(14,g=f.closeOnEscape),"labelText"in f&&n(15,_=f.labelText),"actionButtonText"in f&&n(16,A=f.actionButtonText),"surface$class"in f&&n(4,L=f.surface$class),"surface$use"in f&&n(5,R=f.surface$use),"$$scope"in f&&n(24,r=f.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&8256&&b&&b.getTimeoutMs()!==$&&b.setTimeoutMs($),a.$$.dirty[0]&16448&&b&&b.getCloseOnEscape()!==g&&b.setCloseOnEscape(g),a.$$.dirty[0]&32832&&b&&!o(_)&&j().textContent!==_&&(j().textContent=_),a.$$.dirty[0]&65600&&b&&!o(A)&&x().textContent!==A&&(x().textContent=A)},[c,S,p,d,L,R,b,B,w,u,Pe,Ue,s,$,g,_,A,Fe,Ve,Ge,Ke,j,x,F,r,i,qe]}class St extends re{constructor(e){super(),oe(this,e,Et,Tt,le,{use:0,class:1,variant:2,leading:3,timeoutMs:13,closeOnEscape:14,labelText:15,actionButtonText:16,surface$class:4,surface$use:5,open:17,forceOpen:18,close:19,isOpen:20,getLabelElement:21,getActionButtonElement:22,getElement:23},null,[-1,-1])}get open(){return this.$$.ctx[17]}get forceOpen(){return this.$$.ctx[18]}get close(){return this.$$.ctx[19]}get isOpen(){return this.$$.ctx[20]}get getLabelElement(){return this.$$.ctx[21]}get getActionButtonElement(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}const At=it({class:"mdc-snackbar__actions",tag:"div",props:{"aria-atomic":"true"},contexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0}});function It(a){let e;return{c(){e=P("Select a new program")},l(n){e=U(n,"Select a new program")},m(n,t){I(n,e,t)},d(n){n&&E(e)}}}function kt(a){let e,n;return e=new pt({props:{id:"change-title",$$slots:{default:[It]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){O(e,t,s),n=!0},p(t,s){const i={};s&128&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function vt(a){let e,n,t;function s(r){a[3](r)}let i={label:"Weight",type:"number"};return a[0]!==void 0&&(i.value=a[0]),e=new rt({props:i}),H.push(()=>ue(e,"value",s)),{c(){k(e.$$.fragment)},l(r){v(e.$$.fragment,r)},m(r,l){O(e,r,l),t=!0},p(r,l){const u={};!n&&l&1&&(n=!0,u.value=r[0],ce(()=>n=!1)),e.$set(u)},i(r){t||(h(e.$$.fragment,r),t=!0)},o(r){T(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Ot(a){let e;return{c(){e=P("Done")},l(n){e=U(n,"Done")},m(n,t){I(n,e,t)},d(n){n&&E(e)}}}function Ct(a){let e,n;return e=new X({props:{$$slots:{default:[Ot]},$$scope:{ctx:a}}}),e.$on("click",a[4]),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){O(e,t,s),n=!0},p(t,s){const i={};s&128&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Mt(a){let e,n,t,s,i,r;return e=new mt({props:{$$slots:{default:[kt]},$$scope:{ctx:a}}}),t=new dt({props:{id:"change-content",class:"changed-content",style:`display: flex;
			   flex-direction: column;
		       gap: 1rem;`,$$slots:{default:[vt]},$$scope:{ctx:a}}}),i=new _t({props:{$$slots:{default:[Ct]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),n=y(),k(t.$$.fragment),s=y(),k(i.$$.fragment)},l(l){v(e.$$.fragment,l),n=D(l),v(t.$$.fragment,l),s=D(l),v(i.$$.fragment,l)},m(l,u){O(e,l,u),I(l,n,u),O(t,l,u),I(l,s,u),O(i,l,u),r=!0},p(l,u){const m={};u&128&&(m.$$scope={dirty:u,ctx:l}),e.$set(m);const o={};u&129&&(o.$$scope={dirty:u,ctx:l}),t.$set(o);const c={};u&132&&(c.$$scope={dirty:u,ctx:l}),i.$set(c)},i(l){r||(h(e.$$.fragment,l),h(t.$$.fragment,l),h(i.$$.fragment,l),r=!0)},o(l){T(e.$$.fragment,l),T(t.$$.fragment,l),T(i.$$.fragment,l),r=!1},d(l){C(e,l),l&&E(n),C(t,l),l&&E(s),C(i,l)}}}function Nt(a){let e=Ae.formatDifficulty(a[1],a[0])+"",n;return{c(){n=P(e)},l(t){n=U(t,e)},m(t,s){I(t,n,s)},p(t,s){s&3&&e!==(e=Ae.formatDifficulty(t[1],t[0])+"")&&fe(n,e)},d(t){t&&E(n)}}}function yt(a){let e,n,t,s,i;function r(u){a[5](u)}let l={"aria-labelledby":"change-title","aria-describedby":"change-content",$$slots:{default:[Mt]},$$scope:{ctx:a}};return a[2]!==void 0&&(l.open=a[2]),e=new ft({props:l}),H.push(()=>ue(e,"open",r)),s=new X({props:{color:"secondary",variant:"text",$$slots:{default:[Nt]},$$scope:{ctx:a}}}),s.$on("click",a[6]),{c(){k(e.$$.fragment),t=y(),k(s.$$.fragment)},l(u){v(e.$$.fragment,u),t=D(u),v(s.$$.fragment,u)},m(u,m){O(e,u,m),I(u,t,m),O(s,u,m),i=!0},p(u,[m]){const o={};m&133&&(o.$$scope={dirty:m,ctx:u}),!n&&m&4&&(n=!0,o.open=u[2],ce(()=>n=!1)),e.$set(o);const c={};m&131&&(c.$$scope={dirty:m,ctx:u}),s.$set(c)},i(u){i||(h(e.$$.fragment,u),h(s.$$.fragment,u),i=!0)},o(u){T(e.$$.fragment,u),T(s.$$.fragment,u),i=!1},d(u){C(e,u),u&&E(t),C(s,u)}}}function Dt(a,e,n){let{value:t}=e,{type:s}=e,i=!1;function r(o){t=o,n(0,t)}const l=()=>n(2,i=!1);function u(o){i=o,n(2,i)}const m=()=>n(2,i=!0);return a.$$set=o=>{"value"in o&&n(0,t=o.value),"type"in o&&n(1,s=o.type)},[t,s,i,r,l,u,m]}class Lt extends re{constructor(e){super(),oe(this,e,Dt,yt,le,{value:0,type:1})}}function Me(a,e,n){const t=a.slice();return t[14]=e[n],t[15]=e,t[16]=n,t}function Ne(a,e,n){const t=a.slice();t[17]=e[n],t[20]=n;const s=t[14].plannedSets[t[20]];return t[18]=s,t}function Rt(a){let e;return{c(){e=P("Finish")},l(n){e=U(n,"Finish")},m(n,t){I(n,e,t)},d(n){n&&E(e)}}}function Bt(a){let e,n;return e=new X({props:{$$slots:{default:[Rt]},$$scope:{ctx:a}}}),e.$on("click",a[4]),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){O(e,t,s),n=!0},p(t,s){const i={};s&2097152&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ye(a){let e,n,t,s,i=a[14].completedSets,r=[];for(let u=0;u<i.length;u+=1)r[u]=De(Ne(a,i,u));const l=u=>T(r[u],1,1,()=>{r[u]=null});return t=new X({props:{color:"secondary",variant:"unelevated",class:"btn-round",$$slots:{default:[Pt]},$$scope:{ctx:a}}}),{c(){e=G("div");for(let u=0;u<r.length;u+=1)r[u].c();n=y(),k(t.$$.fragment),this.h()},l(u){e=K(u,"DIV",{class:!0});var m=q(e);for(let o=0;o<r.length;o+=1)r[o].l(m);n=D(m),v(t.$$.fragment,m),m.forEach(E),this.h()},h(){ie(e,"class","row svelte-1vflaq3")},m(u,m){I(u,e,m);for(let o=0;o<r.length;o+=1)r[o].m(e,null);V(e,n),O(t,e,null),s=!0},p(u,m){if(m&34){i=u[14].completedSets;let c;for(c=0;c<i.length;c+=1){const S=Ne(u,i,c);r[c]?(r[c].p(S,m),h(r[c],1)):(r[c]=De(S),r[c].c(),h(r[c],1),r[c].m(e,n))}for(de(),c=i.length;c<r.length;c+=1)l(c);me()}const o={};m&2097152&&(o.$$scope={dirty:m,ctx:u}),t.$set(o)},i(u){if(!s){for(let m=0;m<i.length;m+=1)h(r[m]);h(t.$$.fragment,u),s=!0}},o(u){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)T(r[m]);T(t.$$.fragment,u),s=!1},d(u){u&&E(e),Re(r,u),C(t)}}}function wt(a){let e=(a[17]==0?a[18]:a[17])+"",n;return{c(){n=P(e)},l(t){n=U(t,e)},m(t,s){I(t,n,s)},p(t,s){s&2&&e!==(e=(t[17]==0?t[18]:t[17])+"")&&fe(n,e)},d(t){t&&E(n)}}}function De(a){let e,n;function t(){return a[7](a[17],a[14],a[20],a[18],a[15],a[16])}return e=new X({props:{color:a[17]==0?"secondary":"primary",variant:"unelevated",class:"btn-round",$$slots:{default:[wt]},$$scope:{ctx:a}}}),e.$on("click",t),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,i){O(e,s,i),n=!0},p(s,i){a=s;const r={};i&2&&(r.color=a[17]==0?"secondary":"primary"),i&2097154&&(r.$$scope={dirty:i,ctx:a}),e.$set(r)},i(s){n||(h(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function Pt(a){let e;return{c(){e=P("+")},l(n){e=U(n,"+")},m(n,t){I(n,e,t)},d(n){n&&E(e)}}}function Le(a){let e,n,t=a[14].exercise.name+"",s,i,r,l,u,m,o;function c(d){a[6](d,a[14])}let S={type:a[14].exercise.type};a[14].difficulty!==void 0&&(S.value=a[14].difficulty),r=new Lt({props:S}),H.push(()=>ue(r,"value",c));let p=a[14].exercise.id!="bodyweight"&&ye(a);return{c(){e=G("h2"),n=G("span"),s=P(t),i=y(),k(r.$$.fragment),u=y(),p&&p.c(),m=he(),this.h()},l(d){e=K(d,"H2",{class:!0});var $=q(e);n=K($,"SPAN",{class:!0});var g=q(n);s=U(g,t),g.forEach(E),i=D($),v(r.$$.fragment,$),$.forEach(E),u=D(d),p&&p.l(d),m=he(),this.h()},h(){ie(n,"class","long svelte-1vflaq3"),ie(e,"class","svelte-1vflaq3")},m(d,$){I(d,e,$),V(e,n),V(n,s),V(e,i),O(r,e,null),I(d,u,$),p&&p.m(d,$),I(d,m,$),o=!0},p(d,$){a=d,(!o||$&2)&&t!==(t=a[14].exercise.name+"")&&fe(s,t);const g={};$&2&&(g.type=a[14].exercise.type),!l&&$&2&&(l=!0,g.value=a[14].difficulty,ce(()=>l=!1)),r.$set(g),a[14].exercise.id!="bodyweight"?p?(p.p(a,$),$&2&&h(p,1)):(p=ye(a),p.c(),h(p,1),p.m(m.parentNode,m)):p&&(de(),T(p,1,1,()=>{p=null}),me())},i(d){o||(h(r.$$.fragment,d),h(p),o=!0)},o(d){T(r.$$.fragment,d),T(p),o=!1},d(d){d&&E(e),C(r),d&&E(u),p&&p.d(d),d&&E(m)}}}function Ut(a){let e;return{c(){e=P("close")},l(n){e=U(n,"close")},m(n,t){I(n,e,t)},d(n){n&&E(e)}}}function Ft(a){let e,n;return e=new et({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[Ut]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){O(e,t,s),n=!0},p(t,s){const i={};s&2097152&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Vt(a){let e,n,t,s;return e=new xe({}),t=new At({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),n=y(),k(t.$$.fragment)},l(i){v(e.$$.fragment,i),n=D(i),v(t.$$.fragment,i)},m(i,r){O(e,i,r),I(i,n,r),O(t,i,r),s=!0},p(i,r){const l={};r&2097152&&(l.$$scope={dirty:r,ctx:i}),t.$set(l)},i(i){s||(h(e.$$.fragment,i),h(t.$$.fragment,i),s=!0)},o(i){T(e.$$.fragment,i),T(t.$$.fragment,i),s=!1},d(i){C(e,i),i&&E(n),C(t,i)}}}function Gt(a){let e,n,t,s,i;e=new ot({props:{href:"/work",title:a[0].name,$$slots:{default:[Bt]},$$scope:{ctx:a}}});let r=a[1],l=[];for(let o=0;o<r.length;o+=1)l[o]=Le(Me(a,r,o));const u=o=>T(l[o],1,1,()=>{l[o]=null});let m={labelText:a[3],timeoutMs:-1,$$slots:{default:[Vt]},$$scope:{ctx:a}};return s=new St({props:m}),a[8](s),{c(){k(e.$$.fragment),n=y();for(let o=0;o<l.length;o+=1)l[o].c();t=y(),k(s.$$.fragment)},l(o){v(e.$$.fragment,o),n=D(o);for(let c=0;c<l.length;c+=1)l[c].l(o);t=D(o),v(s.$$.fragment,o)},m(o,c){O(e,o,c),I(o,n,c);for(let S=0;S<l.length;S+=1)l[S].m(o,c);I(o,t,c),O(s,o,c),i=!0},p(o,[c]){const S={};if(c&1&&(S.title=o[0].name),c&2097152&&(S.$$scope={dirty:c,ctx:o}),e.$set(S),c&34){r=o[1];let d;for(d=0;d<r.length;d+=1){const $=Me(o,r,d);l[d]?(l[d].p($,c),h(l[d],1)):(l[d]=Le($),l[d].c(),h(l[d],1),l[d].m(t.parentNode,t))}for(de(),d=r.length;d<l.length;d+=1)u(d);me()}const p={};c&8&&(p.labelText=o[3]),c&2097152&&(p.$$scope={dirty:c,ctx:o}),s.$set(p)},i(o){if(!i){h(e.$$.fragment,o);for(let c=0;c<r.length;c+=1)h(l[c]);h(s.$$.fragment,o),i=!0}},o(o){T(e.$$.fragment,o),l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)T(l[c]);T(s.$$.fragment,o),i=!1},d(o){C(e,o),o&&E(n),Re(l,o),o&&E(t),a[8](null),C(s,o)}}}function Kt(a,e,n){let t,s;{let _=new URL(document.location.href).searchParams;t=_.get("program")||void 0,s=_.get("workout")||void 0}let i=lt,r=[];(async()=>{if(!s){console.error("No workout specified"),ae("/work");return}const _=await ut.get(s);if(!_){console.error("Workout not found"),ae("/work");return}n(0,i=_),n(1,r=await ct.fromWorkout(i,t))})();const u=async()=>{await Promise.all(r.map(_=>_.save())),ae("/work")};let m,o="0:00:00",c=null;const S=()=>{m.close(),c&&(clearInterval(c),c=null)},p=()=>{S(),m.open();let _=Date.now();c=setInterval(()=>{let A=Date.now()-_,L=Math.floor(A/1e3/60/60);A-=L*1e3*60*60;let R=Math.floor(A/1e3/60);A-=R*1e3*60;let B=Math.floor(A/1e3),b="";L>0&&(b+=`${L}:`),b+=`${R.toString().padStart(2,"0")}:`,b+=B.toString().padStart(2,"0"),n(3,o=b)},100)};function d(_,A){a.$$.not_equal(A.difficulty,_)&&(A.difficulty=_,n(1,r))}const $=(_,A,L,R,B,b)=>{_===0&&p(),n(1,B[b].completedSets[L]=(R+_)%(R+1),r)};function g(_){H[_?"unshift":"push"](()=>{m=_,n(2,m)})}return[i,r,m,o,u,p,d,$,g]}class nn extends re{constructor(e){super(),oe(this,e,Kt,Gt,le,{})}}export{nn as default};