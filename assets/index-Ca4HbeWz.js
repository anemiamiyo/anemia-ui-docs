const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-BzQJkyCI.js","assets/CodeBlock-DCnPBB5f.js","assets/CodeBlock-BHsote2F.css","assets/ComponentGrid-BJ5aMmP5.js","assets/ComponentGrid-CVi1sLVQ.css","assets/usePageMeta-DVslRBQt.js","assets/HomePage-DGZFG3m3.css","assets/ComponentsOverview-DlWiFXrc.js","assets/PageHeader-CIZ5xOuW.js","assets/PageHeader-DyN4Qpos.css","assets/ComponentsOverview-CjL07Nzz.css","assets/ComponentPage-C62stpb6.js","assets/ComponentPage-DjSZnxX1.css","assets/ColorsPage-CkQjUEC5.js","assets/useCssVar-QxhC0kI7.js","assets/ColorsPage-QwFHKLxn.css","assets/TypographyPage-BT962N8O.js","assets/TokenValue-oDqVwa2l.js","assets/TokenValue-PpXv62mX.css","assets/TypographyPage-Dr8BWx-J.css","assets/SpacingPage-DwW4zIC4.js","assets/SpacingPage-ChIpvDMM.css","assets/RadiusPage-DdPDE3Et.js","assets/RadiusPage-Bi4fMK8u.css","assets/MotionPage-CdDD2-Si.js","assets/MotionPage-DzGmTf14.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ya(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Pe={},Gn=[],Qt=()=>{},Gl=()=>!1,Po=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Lo=e=>e.startsWith("onUpdate:"),He=Object.assign,Xa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},uc=Object.prototype.hasOwnProperty,Te=(e,t)=>uc.call(e,t),ge=Array.isArray,Cn=e=>Qs(e)==="[object Map]",Mo=e=>Qs(e)==="[object Set]",Ii=e=>Qs(e)==="[object Date]",Me=e=>typeof e=="function",Fe=e=>typeof e=="string",_t=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",Ul=e=>(Se(e)||Me(e))&&Me(e.then)&&Me(e.catch),jl=Object.prototype.toString,Qs=e=>jl.call(e),mc=e=>Qs(e).slice(8,-1),Wl=e=>Qs(e)==="[object Object]",Oo=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ts=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},pc=/-\w/g,ft=Fo(e=>e.replace(pc,t=>t.slice(1).toUpperCase())),fc=/\B([A-Z])/g,Sn=Fo(e=>e.replace(fc,"-$1").toLowerCase()),No=Fo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ma=Fo(e=>e?`on${No(e)}`:""),Wt=(e,t)=>!Object.is(e,t),pa=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hl=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},vc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},gc=e=>{const t=Fe(e)?Number(e):NaN;return isNaN(t)?e:t};let Vi;const Jo=()=>Vi||(Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $e(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Fe(s)?Mc(s):$e(s);if(o)for(const a in o)t[a]=o[a]}return t}else if(Fe(e)||Se(e))return e}const bc=/;(?![^(]*\))/g,yc=/:([^]+)/,hc=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Mc(e){const t={};return e.replace(hc,n=>n.startsWith("/*")?"":n).split(bc).forEach(n=>{if(n){const s=n.split(yc);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function de(e){let t="";if(Fe(e))t=e;else if(ge(e))for(let n=0;n<e.length;n++){const s=de(e[n]);s&&(t+=s+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Sa(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Fe(t)&&(e.class=de(t)),n&&(e.style=$e(n)),e}const _c="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",kc=Ya(_c);function ql(e){return!!e||e===""}function wc(e,t,n){if(e.length!==t.length)return!1;let s=!0;for(let o=0;s&&o<e.length;o++)s=Go(e[o],t[o],n);return s}function Si(e,t,n){if(e.size!==t.size)return!1;const s=Array.from(t),o=new Uint8Array(s.length);for(const a of e){let i=-1;for(let l=0;l<s.length;l++)if(!o[l]&&Go(a,s[l],n)){i=l;break}if(i<0)return!1;o[i]=1}return!0}function xc(e,t,n){let s=Cn(e),o=Cn(t);if(s||o||(s=Mo(e),o=Mo(t),s||o))return s&&o?Si(e,t,n):!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const l in e){const d=e.hasOwnProperty(l),u=t.hasOwnProperty(l);if(d&&!u||!d&&u||!Go(e[l],t[l],n))return!1}return String(e)===String(t)}function zi(e,t,n,s){n||(n=[new Map,new Map]);const[o,a]=n;if(o.has(e)||a.has(t))return o.get(e)===t&&a.get(t)===e;o.set(e,t),a.set(t,e);const i=s(e,t,n);return o.delete(e),a.delete(t),i}function Go(e,t,n){if(e===t)return!0;let s=Ii(e),o=Ii(t);return s||o?s&&o?e.getTime()===t.getTime():!1:(s=_t(e),o=_t(t),s||o?e===t:(s=ge(e),o=ge(t),s||o?s&&o?zi(e,t,n,wc):!1:(s=Se(e),o=Se(t),s||o?!s||!o?!1:zi(e,t,n,xc):String(e)===String(t))))}const Kl=e=>!!(e&&e.__v_isRef===!0),L=e=>Fe(e)?e:e==null?"":ge(e)||Se(e)&&(e.toString===jl||!Me(e.toString))?Kl(e)?L(e.value):JSON.stringify(e,Ql,2):String(e),Ql=(e,t)=>Kl(t)?Ql(e,t.value):Cn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],a)=>(n[fa(s,a)+" =>"]=o,n),{})}:Mo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fa(n))}:_t(t)?fa(t):Se(t)&&!ge(t)&&!Wl(t)?String(t):t,fa=(e,t="")=>{var n;return _t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class Yl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ye&&(Ye.active?(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){if(this._on>0&&--this._on===0){if(Ye===this)Ye=this.prevScope;else{let t=Ye;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,s=o.length;n<s;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Xl(e){return new Yl(e)}function Zl(){return Ye}function Bc(e,t=!1){Ye&&Ye.cleanups.push(e)}let Oe;const va=new WeakSet;class er{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&(Ye.active?Ye.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,va.has(this)&&(va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ai(this),sr(this);const t=Oe,n=zt;Oe=this,zt=!0;try{return this.fn()}finally{or(this),Oe=t,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ti(t);this.deps=this.depsTail=void 0,Ai(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){za(this)&&this.run()}get dirty(){return za(this)}}let tr=0,Is,Vs;function nr(e,t=!1){if(e.flags|=8,t){e.next=Vs,Vs=e;return}e.next=Is,Is=e}function Za(){tr++}function ei(){if(--tr>0)return;if(Vs){let t=Vs;for(Vs=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Is;){let t=Is;for(Is=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function sr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function or(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),ti(s),Cc(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function za(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ar(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ar(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rs)||(e.globalVersion=Rs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!za(e))))return;e.flags|=2;const t=e.dep,n=Oe,s=zt;Oe=e,zt=!0;try{sr(e);const o=e.fn(e._value);(t.version===0||Wt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Oe=n,zt=s,or(e),e.flags&=-3}}function ti(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let a=n.computed.deps;a;a=a.nextDep)ti(a,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Cc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let zt=!0;const ir=[];function Zt(){ir.push(zt),zt=!1}function en(){const e=ir.pop();zt=e===void 0?!0:e}function Ai(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Oe;Oe=void 0;try{t()}finally{Oe=n}}}let Rs=0,$c=class{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class ni{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Oe||!zt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new $c(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,lr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=s)}return n}trigger(t){this.version++,Rs++,this.notify(t)}notify(t){Za();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ei()}}}function lr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)lr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const _o=new WeakMap,Wn=Symbol(""),Aa=Symbol(""),Ps=Symbol("");function at(e,t,n){if(zt&&Oe){let s=_o.get(e);s||_o.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new ni),o.map=s,o.key=n),o.track()}}function ln(e,t,n,s,o,a){const i=_o.get(e);if(!i){Rs++;return}const l=d=>{d&&d.trigger()};if(Za(),t==="clear")i.forEach(l);else{const d=ge(e),u=d&&Oo(n);if(d&&n==="length"){const m=Number(s);i.forEach((p,b)=>{(b==="length"||b===Ps||!_t(b)&&b>=m)&&l(p)})}else switch((n!==void 0||i.has(void 0))&&l(i.get(n)),u&&l(i.get(Ps)),t){case"add":d?u&&l(i.get("length")):(l(i.get(Wn)),Cn(e)&&l(i.get(Aa)));break;case"delete":d||(l(i.get(Wn)),Cn(e)&&l(i.get(Aa)));break;case"set":Cn(e)&&l(i.get(Wn));break}}ei()}function Tc(e,t){const n=_o.get(e);return n&&n.get(t)}function ts(e){const t=Be(e);return t===e||(at(t,"iterate",Ps),Mt(e))?t:tn(e)?Yt(e)?t.map(n=>$n(Ct(n))):t.map($n):t.map(Ct)}function Uo(e){return at(e=Be(e),"iterate",Ps),e}function Jt(e,t){return tn(e)?$n(Yt(e)?Ct(t):t):Ct(t)}const Ic={__proto__:null,[Symbol.iterator](){return ga(this,Symbol.iterator,e=>Jt(this,e))},concat(...e){return ts(this).concat(...e.map(t=>ge(t)?ts(t):t))},entries(){return ga(this,"entries",e=>(e[1]=Jt(this,e[1]),e))},every(e,t){return nn(this,"every",e,t,void 0,arguments)},filter(e,t){return nn(this,"filter",e,t,n=>n.map(s=>Jt(this,s)),arguments)},find(e,t){return nn(this,"find",e,t,n=>Jt(this,n),arguments)},findIndex(e,t){return nn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return nn(this,"findLast",e,t,n=>Jt(this,n),arguments)},findLastIndex(e,t){return nn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return nn(this,"forEach",e,t,void 0,arguments)},includes(...e){return ba(this,"includes",e)},indexOf(...e){return ba(this,"indexOf",e)},join(e){return ts(this).join(e)},lastIndexOf(...e){return ba(this,"lastIndexOf",e)},map(e,t){return nn(this,"map",e,t,void 0,arguments)},pop(){return Ms(this,"pop")},push(...e){return Ms(this,"push",e)},reduce(e,...t){return Ei(this,"reduce",e,t)},reduceRight(e,...t){return Ei(this,"reduceRight",e,t)},shift(){return Ms(this,"shift")},some(e,t){return nn(this,"some",e,t,void 0,arguments)},splice(...e){return Ms(this,"splice",e)},toReversed(){return ts(this).toReversed()},toSorted(e){return ts(this).toSorted(e)},toSpliced(...e){return ts(this).toSpliced(...e)},unshift(...e){return Ms(this,"unshift",e)},values(){return ga(this,"values",e=>Jt(this,e))}};function ga(e,t,n){const s=Uo(e),o=s[t],a=o.call(s);if(s!==e&&!Mt(e)){if(a[Symbol.toStringTag]==="Array Iterator"){const i=Object.create(Object.getPrototypeOf(a));return i.next=()=>Di(a.next(),n),o!==rr[t]&&Object.defineProperties(i,{return:{get(){const l=a.return;return typeof l=="function"?l.bind(a):l}},throw:{get(){const l=a.throw;return typeof l=="function"?l.bind(a):l}}}),i}a._next=a.next,a.next=()=>Di(a._next(),n)}return a}function Di(e,t){return e.done||(e.value=t(e.value)),e}const rr=Array.prototype;function nn(e,t,n,s,o,a){const i=Uo(e),l=i!==e&&!Mt(e),d=i[t];if(d!==rr[t]){const p=d.apply(e,a);return l?Ct(p):p}let u=n;i!==e&&(l?u=function(p,b){return n.call(this,Jt(e,p),b,e)}:n.length>2&&(u=function(p,b){return n.call(this,p,b,e)}));const m=d.call(i,u,s);return l&&o?o(m):m}function Ei(e,t,n,s){const o=Uo(e),a=o!==e&&!Mt(e);let i=n,l=!1;o!==e&&(a?(l=s.length===0,i=function(u,m,p){return l&&(l=!1,u=Jt(e,u)),n.call(this,u,Jt(e,m),p,e)}):n.length>3&&(i=function(u,m,p){return n.call(this,u,m,p,e)}));const d=o[t](i,...s);return l?Jt(e,d):d}function ba(e,t,n){const s=Be(e);at(s,"iterate",Ps);const o=s[t](...n);return(o===-1||o===!1)&&jo(n[0])?(n[0]=Be(n[0]),s[t](...n)):o}function Ms(e,t,n=[]){Zt(),Za();const s=Be(e)[t].apply(e,n);return ei(),en(),s}const Vc=Ya("__proto__,__v_isRef,__isVue"),dr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function Sc(e){_t(e)||(e=String(e));const t=Be(this);return at(t,"has",e),t.hasOwnProperty(e)}class cr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return a;if(n==="__v_raw")return s===(o?a?Nc:fr:a?pr:mr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=ge(t);if(!o){let d;if(i&&(d=Ic[n]))return d;if(n==="hasOwnProperty")return Sc}const l=Reflect.get(t,n,We(t)?t:s);if((_t(n)?dr.has(n):Vc(n))||(o||at(t,"get",n),a))return l;if(We(l)){const d=i&&Oo(n)?l:l.value;return o&&Se(d)?mn(d):d}return Se(l)?o?mn(l):zn(l):l}}class ur extends cr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let a=t[n];const i=ge(t)&&Oo(n);if(!this._isShallow){const u=tn(a);if(!Mt(s)&&!tn(s)&&(a=Be(a),s=Be(s)),!i&&We(a)&&!We(s))return u||(a.value=s),!0}const l=i?Number(n)<t.length:Te(t,n),d=Reflect.set(t,n,s,We(t)?t:o);return t===Be(o)&&d&&(l?Wt(s,a)&&ln(t,"set",n,s):ln(t,"add",n,s)),d}deleteProperty(t,n){const s=Te(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ln(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!_t(n)||!dr.has(n))&&at(t,"has",n),s}ownKeys(t){return at(t,"iterate",ge(t)?"length":Wn),Reflect.ownKeys(t)}}class zc extends cr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ac=new ur,Dc=new zc,Ec=new ur(!0);const Da=e=>e,co=e=>Reflect.getPrototypeOf(e);function Rc(e,t,n){return function(...s){const o=this.__v_raw,a=Be(o),i=Cn(a),l=e==="entries"||e===Symbol.iterator&&i,d=e==="keys"&&i,u=o[e](...s),m=n?Da:t?$n:Ct;return!t&&at(a,"iterate",d?Aa:Wn),He(Object.create(u),{next(){const{value:p,done:b}=u.next();return b?{value:p,done:b}:{value:l?[m(p[0]),m(p[1])]:m(p),done:b}}})}}function uo(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Pc(e,t){const n={get(o){const a=this.__v_raw,i=Be(a),l=Be(o);e||(Wt(o,l)&&at(i,"get",o),at(i,"get",l));const{has:d}=co(i),u=t?Da:e?$n:Ct;if(d.call(i,o))return u(a.get(o));if(d.call(i,l))return u(a.get(l));a!==i&&a.get(o)},get size(){const o=this.__v_raw;return!e&&at(Be(o),"iterate",Wn),o.size},has(o){const a=this.__v_raw,i=Be(a),l=Be(o);return e||(Wt(o,l)&&at(i,"has",o),at(i,"has",l)),o===l?a.has(o):a.has(o)||a.has(l)},forEach(o,a){const i=this,l=i.__v_raw,d=Be(l),u=t?Da:e?$n:Ct;return!e&&at(d,"iterate",Wn),l.forEach((m,p)=>o.call(a,u(m),u(p),i))}};return He(n,e?{add:uo("add"),set:uo("set"),delete:uo("delete"),clear:uo("clear")}:{add(o){const a=Be(this),i=co(a),l=Be(o),d=!t&&!Mt(o)&&!tn(o)?l:o;return i.has.call(a,d)||Wt(o,d)&&i.has.call(a,o)||Wt(l,d)&&i.has.call(a,l)||(a.add(d),ln(a,"add",d,d)),this},set(o,a){!t&&!Mt(a)&&!tn(a)&&(a=Be(a));const i=Be(this),{has:l,get:d}=co(i);let u=l.call(i,o);u||(o=Be(o),u=l.call(i,o));const m=d.call(i,o);return i.set(o,a),u?Wt(a,m)&&ln(i,"set",o,a):ln(i,"add",o,a),this},delete(o){const a=Be(this),{has:i,get:l}=co(a);let d=i.call(a,o);d||(o=Be(o),d=i.call(a,o)),l&&l.call(a,o);const u=a.delete(o);return d&&ln(a,"delete",o,void 0),u},clear(){const o=Be(this),a=o.size!==0,i=o.clear();return a&&ln(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Rc(o,e,t)}),n}function si(e,t){const n=Pc(e,t);return(s,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?s:Reflect.get(Te(n,o)&&o in s?n:s,o,a)}const Lc={get:si(!1,!1)},Oc={get:si(!1,!0)},Fc={get:si(!0,!1)};const mr=new WeakMap,pr=new WeakMap,fr=new WeakMap,Nc=new WeakMap;function Jc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zn(e){return tn(e)?e:oi(e,!1,Ac,Lc,mr)}function vr(e){return oi(e,!1,Ec,Oc,pr)}function mn(e){return oi(e,!0,Dc,Fc,fr)}function oi(e,t,n,s,o){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const a=o.get(e);if(a)return a;const i=Jc(mc(e));if(i===0)return e;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function Yt(e){return tn(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function Mt(e){return!!(e&&e.__v_isShallow)}function jo(e){return e?!!e.__v_raw:!1}function Be(e){const t=e&&e.__v_raw;return t?Be(t):e}function ai(e){return!Te(e,"__v_skip")&&Object.isExtensible(e)&&Hl(e,"__v_skip",!0),e}const Ct=e=>Se(e)?zn(e):e,$n=e=>Se(e)?mn(e):e;function We(e){return e?e.__v_isRef===!0:!1}function z(e){return gr(e,!1)}function Gc(e){return gr(e,!0)}function gr(e,t){return We(e)?e:new Uc(e,t)}class Uc{constructor(t,n){this.dep=new ni,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Be(t),this._value=n?t:Ct(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Mt(t)||tn(t);t=s?t:Be(t),Wt(t,n)&&(this._rawValue=t,this._value=s?t:Ct(t),this.dep.trigger())}}function r(e){return We(e)?e.value:e}function It(e){return Me(e)?e():r(e)}const jc={get:(e,t,n)=>t==="__v_raw"?e:r(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return We(o)&&!We(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function br(e){return Yt(e)?e:new Proxy(e,jc)}function Wc(e){const t=ge(e)?new Array(e.length):{};for(const n in e)t[n]=qc(e,n);return t}class Hc{constructor(t,n,s){this._object=t,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._key=_t(n)?n:String(n),this._raw=Be(t);let o=!0,a=t;if(!ge(t)||_t(this._key)||!Oo(this._key))do o=!jo(a)||Mt(a);while(o&&(a=a.__v_raw));this._shallow=o}get value(){let t=this._object[this._key];return this._shallow&&(t=r(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&We(this._raw[this._key])){const n=this._object[this._key];if(We(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Tc(this._raw,this._key)}}function qc(e,t,n){return new Hc(e,t,n)}class Kc{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ni(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return nr(this,!0),!0}get value(){const t=this.dep.track();return ar(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Qc(e,t,n=!1){let s,o;return Me(e)?s=e:(s=e.get,o=e.set),new Kc(s,o,n)}const mo={},ko=new WeakMap;let On;function Yc(e,t=!1,n=On){if(n){let s=ko.get(n);s||ko.set(n,s=[]),s.push(e)}}function Xc(e,t,n=Pe){const{immediate:s,deep:o,once:a,scheduler:i,augmentJob:l,call:d}=n,u=F=>o?F:Mt(F)||o===!1||o===0?rn(F,1):rn(F);let m,p,b,h,B=!1,I=!1;if(We(e)?(p=()=>e.value,B=Mt(e)):Yt(e)?(p=()=>u(e),B=!0):ge(e)?(I=!0,B=e.some(F=>Yt(F)||Mt(F)),p=()=>e.map(F=>{if(We(F))return F.value;if(Yt(F))return u(F);if(Me(F))return d?d(F,2):F()})):Me(e)?t?p=d?()=>d(e,2):e:p=()=>{if(b){Zt();try{b()}finally{en()}}const F=On;On=m;try{return d?d(e,3,[h]):e(h)}finally{On=F}}:p=Qt,t&&o){const F=p,q=o===!0?1/0:o;p=()=>rn(F(),q)}const V=Zl(),A=()=>{m.stop(),V&&V.active&&Xa(V.effects,m)};if(a&&t){const F=t;t=(...q)=>{try{return F(...q)}finally{A()}}}let D=I?new Array(e.length).fill(mo):mo;const E=F=>{if(!(!(m.flags&1)||!m.dirty&&!F))if(t){const q=m.run();if(F||o||B||(I?q.some((re,Y)=>Wt(re,D[Y])):Wt(q,D))){const re=On;Zt();try{b&&b(),On=m;const Y=[q,D===mo?void 0:I&&D[0]===mo?[]:D,h];D=q,d?d(t,3,Y):t(...Y)}finally{On=re,en()}}}else m.run()};return l&&l(E),m=new er(p),m.scheduler=i?()=>i(E,!1):E,h=F=>Yc(F,!1,m),b=m.onStop=()=>{const F=ko.get(m);if(F){if(d)d(F,4);else for(const q of F)q();ko.delete(m)}},t?s?E(!0):D=m.run():i?i(E.bind(null,!0),!0):m.run(),A.pause=m.pause.bind(m),A.resume=m.resume.bind(m),A.stop=A,A}function rn(e,t=1/0,n){if(t<=0||!Se(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,We(e))rn(e.value,t,n);else if(ge(e))for(let s=0;s<e.length;s++)rn(e[s],t,n);else if(Mo(e)||Cn(e))e.forEach(s=>{rn(s,t,n)});else if(Wl(e)){for(const s in e)rn(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&rn(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(e,t,n,s){try{return s?e(...s):e()}catch(o){Wo(o,t,n)}}function $t(e,t,n,s){if(Me(e)){const o=Ys(e,t,n,s);return o&&Ul(o)&&o.catch(a=>{Wo(a,t,n)}),o}if(ge(e)){const o=[];for(let a=0;a<e.length;a++)o.push($t(e[a],t,n,s));return o}}function Wo(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Pe;if(t){let l=t.parent;const d=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const m=l.ec;if(m){for(let p=0;p<m.length;p++)if(m[p](e,d,u)===!1)return}l=l.parent}if(a){Zt(),Ys(a,null,10,[e,d,u]),en();return}}Zc(e,n,o,s,i)}function Zc(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const mt=[];let Tt=-1;const Gt=[];let xn=null,os=0;const yr=Promise.resolve();let wo=null;function lt(e){const t=wo||yr;return e?t.then(this?e.bind(this):e):t}function eu(e){let t=Tt+1,n=mt.length;for(;t<n;){const s=t+n>>>1,o=mt[s],a=Ls(o);a<e||a===e&&o.flags&2?t=s+1:n=s}return t}function ii(e){if(!(e.flags&1)){const t=Ls(e),n=mt[mt.length-1];!n||!(e.flags&2)&&t>=Ls(n)?mt.push(e):mt.splice(eu(t),0,e),e.flags|=1,hr()}}function hr(){wo||(wo=yr.then(kr))}function tu(e){if(!ge(e))xn&&e.id===-1?xn.splice(os+1,0,e):e.flags&1||(Gt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Gt.push(e[t]);hr()}function Mr(e,t,n,s=Tt+1){for(;s<mt.length;s++){const o=mt[s];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;mt.splice(s,1),s=e?s-1:Tt,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function _r(e,t,n=0){if(Gt.length){let s=Gt,o=0;if(t){s=[];for(let i=0;i<Gt.length;i++){const l=Gt[i];(l.i!==void 0?!l.i||l.i.uid<n:t.has(l))?Gt[o++]=l:s.push(l)}}const a=[...new Set(s)].sort((i,l)=>Ls(i)-Ls(l));if(Gt.length=o,xn){for(let i=0;i<a.length;i++)xn.push(a[i]);return}for(xn=a,os=0;os<xn.length;os++){const i=xn[os];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}xn=null,os=0}}let ya=!1;function nu(e,t){if(ya){e();return}const n=t===void 0?void 0:new Set(Gt);e(),ya=!0;try{Mr(void 0,t),_r(void 0,n,t)}finally{ya=!1}}const Ls=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kr(e){try{for(Tt=0;Tt<mt.length;Tt++){const t=mt[Tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ys(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Tt<mt.length;Tt++){const t=mt[Tt];t&&(t.flags&=-2)}Tt=-1,mt.length=0,_r(),wo=null,(mt.length||Gt.length)&&kr()}}let nt=null,wr=null;function xo(e){const t=nt;return nt=e,wr=e&&e.type.__scopeId||null,t}function f(e,t=nt,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&To(-1);const a=xo(t),i=un.length;let l;try{l=e(...o)}finally{for(let d=un.length;d>i;d--)mi();xo(a),s._d&&To(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function An(e,t){if(nt===null)return e;const n=Xo(nt),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[a,i,l,d=Pe]=t[o];a&&(Me(a)&&(a={mounted:a,updated:a}),a.deep&&rn(i),s.push({dir:a,instance:n,value:i,oldValue:void 0,arg:l,modifiers:d}))}return e}function Rn(e,t,n,s){const o=e.dirs,a=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];a&&(l.oldValue=a[i].value);let d=l.dir[s];d&&(Zt(),$t(d,n,8,[e.el,l,e,t]),en())}}function At(e,t){if(it){let n=it.provides;const s=it.parent&&it.parent.provides;s===n&&(n=it.provides=Object.create(s)),n[e]=t}}function Ze(e,t,n=!1){const s=vs();if(s||Hn){let o=Hn?Hn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Me(t)?t.call(s&&s.proxy):t}}function su(){return!!(vs()||Hn)}const ou=Symbol.for("v-scx"),au=()=>Ze(ou);function iu(e,t){return li(e,null,t)}function De(e,t,n){return li(e,t,n)}function li(e,t,n=Pe){const{immediate:s,deep:o,flush:a,once:i}=n,l=He({},n),d=t&&s||!t&&a!=="post";let u;if(Gs){if(a==="sync"){const h=au();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!d){const h=()=>{};return h.stop=Qt,h.resume=Qt,h.pause=Qt,h}}const m=it;l.call=(h,B,I)=>$t(h,m,B,I);let p=!1;a==="post"?l.scheduler=h=>{h.i=m,ct(h,m&&m.suspense)}:a!=="sync"&&(p=!0,l.scheduler=(h,B)=>{B?h():ii(h)}),l.augmentJob=h=>{t&&(h.flags|=4),p&&(h.flags|=2,m&&(h.id=m.uid,h.i=m))};const b=Xc(e,t,l);return Gs&&(u?u.push(b):d&&b()),b}function lu(e,t,n){const s=this.proxy,o=Fe(e)?e.includes(".")?xr(s,e):()=>s[e]:e.bind(s,s);let a;Me(t)?a=t:(a=t.handler,n=t);const i=Zs(this),l=li(o,a.bind(s),n);return i(),l}function xr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const _n=new WeakMap,Br=Symbol("_vte"),Ho=e=>e.__isTeleport,Fn=e=>e&&(e.disabled||e.disabled===""),ru=e=>e&&(e.defer||e.defer===""),Ri=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Pi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ea=(e,t)=>{const n=e&&e.to;return Fe(n)?t?t(n):null:n},du={name:"Teleport",__isTeleport:!0,process(e,t,n,s,o,a,i,l,d,u){const{mc:m,pc:p,pbc:b,o:{insert:h,querySelector:B,createText:I,createComment:V,parentNode:A}}=u,D=Fn(t.props);let{dynamicChildren:E}=t;const F=(Y,X,G)=>{Y.shapeFlag&16&&m(Y.children,X,G,o,a,i,l,d)},q=(Y=t)=>{const X=Fn(Y.props),G=Y.target=Ea(Y.props,B),S=Ra(G,Y,I,h);G&&(i!=="svg"&&Ri(G)?i="svg":i!=="mathml"&&Pi(G)&&(i="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(G),X||(F(Y,G,S),Bs(Y,!1)))},re=Y=>{const X=()=>{if(_n.get(Y)===X){if(_n.delete(Y),Fn(Y.props)){const G=A(Y.el)||n;F(Y,G,Y.anchor),Bs(Y,!0)}q(Y)}};_n.set(Y,X),ct(X,a)};if(e==null){const Y=t.el=I(""),X=t.anchor=I("");if(h(Y,n,s),h(X,n,s),ru(t.props)||a&&a.pendingBranch){re(t);return}D&&(F(t,n,X),Bs(t,!0)),q()}else{t.el=e.el;const Y=t.anchor=e.anchor,X=_n.get(e);if(X){X.flags|=8,_n.delete(e),re(t);return}t.targetStart=e.targetStart;const G=t.target=e.target,S=t.targetAnchor=e.targetAnchor,w=Fn(e.props),$=w?n:G,P=w?Y:S;if(i==="svg"||Ri(G)?i="svg":(i==="mathml"||Pi(G))&&(i="mathml"),E?(b(e.dynamicChildren,E,$,o,a,i,l),ui(e,t,!0)):d||p(e,t,$,P,o,a,i,l,!1),D)w?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):po(t,n,Y,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Z=Ea(t.props,B);Z&&(t.target=Z,po(t,Z,null,u,0))}else w&&po(t,G,S,u,1);Bs(t,D)}},remove(e,t,n,{um:s,o:{remove:o}},a){const{shapeFlag:i,children:l,anchor:d,targetStart:u,targetAnchor:m,target:p,props:b}=e,h=Fn(b),B=a||!h,I=_n.get(e);if(I&&(I.flags|=8,_n.delete(e)),p&&(o(u),o(m)),a&&o(d),!I&&(h||p)&&i&16)for(let V=0;V<l.length;V++){const A=l[V];s(A,t,n,B,!!A.dynamicChildren)}},move:po,hydrate:cu};function po(e,t,n,{o:{insert:s},m:o},a=2){a===0&&(e.targetStart&&s(e.targetStart,t,n),s(e.targetAnchor,t,n),n=e.targetAnchor);const{el:i,anchor:l,shapeFlag:d,children:u,props:m}=e,p=a===2;if(p&&s(i,t,n),!_n.has(e)&&(!p||Fn(m))&&d&16)for(let b=0;b<u.length;b++)o(u[b],t,n,2);p&&s(l,t,n)}function cu(e,t,n,s,o,a,{o:{nextSibling:i,parentNode:l,querySelector:d,insert:u,createText:m}},p){function b(V,A){let D=A;for(;D;){if(D&&D.nodeType===8){if(D.data==="teleport start anchor")t.targetStart=D;else if(D.data==="teleport anchor"){t.targetAnchor=D,V._lpa=t.targetAnchor&&i(t.targetAnchor);break}}D=i(D)}}function h(V,A){A.anchor=p(i(V),A,l(V),n,s,o,a)}const B=t.target=Ea(t.props,d),I=Fn(t.props);if(B){const V=B._lpa||B.firstChild;t.shapeFlag&16&&(I?(h(e,t),b(B,V),t.targetAnchor||Ra(B,t,m,u,l(e)===B?e:null)):(t.anchor=i(e),b(B,V),t.targetAnchor||Ra(B,t,m,u),p(V&&i(V),t,B,n,s,o,a))),Bs(t,I)}else I&&t.shapeFlag&16&&(h(e,t),t.targetStart=e,t.targetAnchor=i(e));return t.anchor&&i(t.anchor)}const fn=du;function Bs(e,t){const n=e.ctx;if(n&&n.ut){let s,o;for(t?(s=e.el,o=e.anchor):(s=e.targetStart,o=e.targetAnchor);s&&s!==o;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function Ra(e,t,n,s,o=null){const a=t.targetStart=n(""),i=t.targetAnchor=n("");return a[Br]=i,e&&(s(a,e,o),s(i,e,o)),i}const xt=Symbol("_leaveCb"),_s=Symbol("_enterCb");function Cr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gn(()=>{e.isMounted=!0}),kt(()=>{e.isUnmounting=!0}),e}const wt=[Function,Array],$r={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},uu={name:"BaseTransition",props:$r,setup(e,{slots:t}){const n=vs(),s=Cr();return()=>{const o=t.default&&ri(t.default(),!0),a=o&&o.length?Tr(o):n.subTree?Q():void 0;if(!a)return;const i=Be(e),{mode:l}=i;if(s.isLeaving)return ha(a);const d=Bo(a);if(!d)return ha(a);let u=Os(d,i,s,n,p=>u=p);d.type!==et&&Tn(d,u);let m=n.subTree&&Bo(n.subTree);if(m&&m.type!==et&&!Nn(m,d)&&Fs(n.subTree)){let p=Os(m,i,s,n);if(Tn(m,p),l==="out-in"&&d.type!==et)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,m=void 0},ha(a);l==="in-out"&&d.type!==et?p.delayLeave=(b,h,B)=>{const I=Ir(s,m);I[String(m.key)]=m,b[xt]=()=>{h(),b[xt]=void 0,delete u.delayedLeave,m=void 0},u.delayedLeave=()=>{B(),delete u.delayedLeave,m=void 0}}:m=void 0}else m&&(m=void 0);return a}}};function Tr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==et){t=n;break}}return t}const mu=uu;function Ir(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Os(e,t,n,s,o){const{appear:a,mode:i,persisted:l=!1,onBeforeEnter:d,onEnter:u,onAfterEnter:m,onEnterCancelled:p,onBeforeLeave:b,onLeave:h,onAfterLeave:B,onLeaveCancelled:I,onBeforeAppear:V,onAppear:A,onAfterAppear:D,onAppearCancelled:E}=t,F=String(e.key),q=Ir(n,e),re=(G,S)=>{G&&$t(G,s,9,S)},Y=(G,S)=>{const w=S[1];re(G,S),ge(G)?G.every($=>$.length<=1)&&w():G.length<=1&&w()},X={mode:i,persisted:l,beforeEnter(G){let S=d;if(!n.isMounted)if(a)S=V||d;else return;G[xt]&&G[xt](!0);const w=q[F];if(w&&Nn(e,w)){let $=w.el[xt];if(!$){const P=Fs(w);$=P&&P.el[xt]}$&&$()}re(S,[G])},enter(G){if(q[F]===e)return;let S=u,w=m,$=p;if(!n.isMounted)if(a)S=A||u,w=D||m,$=E||p;else return;let P=!1;G[_s]=ye=>{P||(P=!0,ye?re($,[G]):re(w,[G]),X.delayedLeave&&X.delayedLeave(),G[_s]=void 0)};const Z=G[_s].bind(null,!1);S?Y(S,[G,Z]):Z()},leave(G,S){const w=String(e.key);if(G[_s]&&G[_s](!0),n.isUnmounting)return S();re(b,[G]);let $=!1;G[xt]=Z=>{$||($=!0,S(),Z?re(I,[G]):re(B,[G]),G[xt]=void 0,q[w]===e&&delete q[w])};const P=G[xt].bind(null,!1);q[w]=e,h?Y(h,[G,P]):P()},clone(G){const S=Os(G,t,n,s,o);return o&&o(S),S}};return X}function ha(e){if(qo(e))return e=In(e),e.children=null,e}function Bo(e){if(!qo(e))return Ho(e.type)&&e.children?Tr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Me(n.default))return n.default()}}function Tn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Tn(Ho(n.type)&&Bo(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===ie&&ge(e.children)){const n=Fr(e.children,!1);n&&Tn(n,t)}}function ri(e,t=!1,n){let s=[],o=0;for(let a=0;a<e.length;a++){let i=e[a];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===ie?(i.patchFlag&128&&o++,s=s.concat(ri(i.children,t,l))):(t||i.type!==et)&&s.push(l!=null?In(i,{key:l}):i)}if(o>1)for(let a=0;a<s.length;a++)s[a].patchFlag=-2;return s}function Fs(e){if(e.component)return Fs(e.component.subTree);if(e.type===ie){const t=ge(e.children)&&Fr(e.children,!1);return t?Fs(t):void 0}if(e.type!==et)return e}function C(e,t){return Me(e)?He({name:e.name},t,{setup:e}):e}function pu(){const e=vs();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Vr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Li(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Co=new WeakMap;function Ss(e,t,n,s,o=!1){if(ge(e)){e.forEach((I,V)=>Ss(I,t&&(ge(t)?t[V]:t),n,s,o));return}if(is(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ss(e,t,n,s.component.subTree);return}const a=s.shapeFlag&4?Xo(s.component):s.el,i=o?null:a,{i:l,r:d}=e,u=t&&t.r,m=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,b=Be(p),h=p===Pe?Gl:I=>Li(m,I)?!1:Te(b,I),B=(I,V)=>!(V&&Li(m,V));if(u!=null&&u!==d){if(Oi(t),Fe(u))m[u]=null,h(u)&&(p[u]=null);else if(We(u)){const I=t;B(u,I.k)&&(u.value=null),I.k&&(m[I.k]=null)}}if(Me(d))Ys(d,l,12,[i,m]);else{const I=Fe(d),V=We(d);if(I||V){const A=()=>{if(e.f){const D=I?h(d)?p[d]:m[d]:B()||!e.k?d.value:m[e.k];if(o)ge(D)&&Xa(D,a);else if(ge(D))D.includes(a)||D.push(a);else if(I)m[d]=[a],h(d)&&(p[d]=m[d]);else{const E=[a];B(d,e.k)&&(d.value=E),e.k&&(m[e.k]=E)}}else I?(m[d]=i,h(d)&&(p[d]=i)):V&&(B(d,e.k)&&(d.value=i),e.k&&(m[e.k]=i))};if(i){const D=()=>{A(),Co.delete(e)};D.id=-1,Co.set(e,D),ct(D,n)}else Oi(e),A()}}}function Oi(e){const t=Co.get(e);t&&(t.flags|=8,Co.delete(e))}Jo().requestIdleCallback;Jo().cancelIdleCallback;const is=e=>!!e.type.__asyncLoader,qo=e=>e.type.__isKeepAlive;function fu(e,t){Sr(e,"a",t)}function vu(e,t){Sr(e,"da",t)}function Sr(e,t,n=it){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ko(t,s,n),n){let o=n.parent;for(;o&&o.parent;)qo(o.parent.vnode)&&gu(s,t,n,o),o=o.parent}}function gu(e,t,n,s){const o=Ko(t,e,s,!0);Ar(()=>{Xa(s[t],o)},n)}function Ko(e,t,n=it,s=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{Zt();const l=Zs(n),d=$t(t,n,e,i);return l(),en(),d});return s?o.unshift(a):o.push(a),a}}const vn=e=>(t,n=it)=>{(!Gs||e==="sp")&&Ko(e,(...s)=>t(...s),n)},bu=vn("bm"),gn=vn("m"),yu=vn("bu"),zr=vn("u"),kt=vn("bum"),Ar=vn("um"),hu=vn("sp"),Mu=vn("rtg"),_u=vn("rtc");function ku(e,t=it){Ko("ec",e,t)}const wu="components",Dr=Symbol.for("v-ndc");function Qo(e){return Fe(e)?xu(wu,e,!1)||e:e||Dr}function xu(e,t,n=!0,s=!1){const o=nt||it;if(o){const a=o.type;{const l=am(a,!1);if(l&&(l===t||l===ft(t)||l===No(ft(t))))return a}const i=Fi(o[e]||a[e],t)||Fi(o.appContext[e],t);return!i&&s?a:i}}function Fi(e,t){return e&&(e[t]||e[ft(t)]||e[No(ft(t))])}function xe(e,t,n,s){let o;const a=n,i=ge(e);if(i||Fe(e)){const l=i&&Yt(e);let d=!1,u=!1;l&&(d=!Mt(e),u=tn(e),e=Uo(e)),o=new Array(e.length);for(let m=0,p=e.length;m<p;m++)o[m]=t(d?u?$n(Ct(e[m])):Ct(e[m]):e[m],m,void 0,a)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,a)}else if(Se(e))if(e[Symbol.iterator])o=Array.from(e,(l,d)=>t(l,d,void 0,a));else{const l=Object.keys(e);o=new Array(l.length);for(let d=0,u=l.length;d<u;d++){const m=l[d];o[d]=t(e[m],m,d,a)}}else o=[];return o}function EV(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(ge(s))for(let o=0;o<s.length;o++)e[s[o].name]=s[o].fn;else s&&(e[s.name]=s.key?(...o)=>{const a=s.fn(...o);return a&&(a.key=s.key),a}:s.fn)}return e}function le(e,t,n,s,o,a){if(n==null&&(n={}),nt.ce||nt.parent&&is(nt.parent)&&nt.parent.ce){const u=a!=null&&n.key==null?He({},n,{key:a}):n,m=Object.keys(u).length>0;return t!=="default"&&(u.name=t),v(),we(ie,null,[c("slot",u,s&&s())],m?-2:64)}let i=e[t];i&&i._c&&(i._d=!1);const l=un.length;v();let d;try{const u=i&&Er(i(n)),m=n.key||a||u&&u.key;d=we(ie,{key:(m&&!_t(m)?m:`_${t}`)+(!u&&s?"_fb":"")},u||(s?s():[]),u&&e._===1?64:-2)}catch(u){for(let m=un.length;m>l;m--)mi();throw u}finally{i&&i._c&&(i._d=!0)}return!o&&d.scopeId&&(d.slotScopeIds=[d.scopeId+"-s"]),d}function Er(e){return e.some(t=>Xn(t)?!(t.type===et||t.type===ie&&!Er(t.children)):!0)?e:null}const Pa=e=>e?td(e)?Xo(e):Pa(e.parent):null,zs=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pa(e.parent),$root:e=>Pa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pr(e),$forceUpdate:e=>e.f||(e.f=()=>{ii(e.update)}),$nextTick:e=>e.n||(e.n=lt.bind(e.proxy)),$watch:e=>lu.bind(e)}),Ma=(e,t)=>e!==Pe&&!e.__isScriptSetup&&Te(e,t),Bu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:i,type:l,appContext:d}=e;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Ma(s,t))return i[t]=1,s[t];if(o!==Pe&&Te(o,t))return i[t]=2,o[t];if(Te(a,t))return i[t]=3,a[t];if(n!==Pe&&Te(n,t))return i[t]=4,n[t];La&&(i[t]=0)}}const u=zs[t];let m,p;if(u)return t==="$attrs"&&at(e.attrs,"get",""),u(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==Pe&&Te(n,t))return i[t]=4,n[t];if(p=d.config.globalProperties,Te(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:a}=e;return Ma(o,t)?(o[t]=n,!0):s!==Pe&&Te(s,t)?(s[t]=n,!0):Te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:a,type:i}},l){let d;return!!(n[l]||e!==Pe&&l[0]!=="$"&&Te(e,l)||Ma(t,l)||Te(a,l)||Te(s,l)||Te(zs,l)||Te(o.config.globalProperties,l)||(d=i.__cssModules)&&d[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function bn(){return Cu().slots}function Cu(e){const t=vs();return t.setupContext||(t.setupContext=sd(t))}function Ni(e){return ge(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let La=!0;function $u(e){const t=Pr(e),n=e.proxy,s=e.ctx;La=!1,t.beforeCreate&&Ji(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:i,watch:l,provide:d,inject:u,created:m,beforeMount:p,mounted:b,beforeUpdate:h,updated:B,activated:I,deactivated:V,beforeDestroy:A,beforeUnmount:D,destroyed:E,unmounted:F,render:q,renderTracked:re,renderTriggered:Y,errorCaptured:X,serverPrefetch:G,expose:S,inheritAttrs:w,components:$,directives:P,filters:Z}=t;if(u&&Tu(u,s,null),i)for(const j in i){const ee=i[j];Me(ee)&&(s[j]=ee.bind(n))}if(o){const j=o.call(n,n);Se(j)&&(e.data=zn(j))}if(La=!0,a)for(const j in a){const ee=a[j],se=Me(ee)?ee.bind(n,n):Me(ee.get)?ee.get.bind(n,n):Qt,pe=!Me(ee)&&Me(ee.set)?ee.set.bind(n):Qt,ze=x({get:se,set:pe});Object.defineProperty(s,j,{enumerable:!0,configurable:!0,get:()=>ze.value,set:me=>ze.value=me})}if(l)for(const j in l)Rr(l[j],s,n,j);if(d){const j=Me(d)?d.call(n):d;Reflect.ownKeys(j).forEach(ee=>{At(ee,j[ee])})}m&&Ji(m,e,"c");function N(j,ee){ge(ee)?ee.forEach(se=>j(se.bind(n))):ee&&j(ee.bind(n))}if(N(bu,p),N(gn,b),N(yu,h),N(zr,B),N(fu,I),N(vu,V),N(ku,X),N(_u,re),N(Mu,Y),N(kt,D),N(Ar,F),N(hu,G),ge(S))if(S.length){const j=e.exposed||(e.exposed={});S.forEach(ee=>{Object.defineProperty(j,ee,{get:()=>n[ee],set:se=>n[ee]=se,enumerable:!0})})}else e.exposed||(e.exposed={});q&&e.render===Qt&&(e.render=q),w!=null&&(e.inheritAttrs=w),$&&(e.components=$),P&&(e.directives=P),G&&Vr(e)}function Tu(e,t,n=Qt){ge(e)&&(e=Oa(e));for(const s in e){const o=e[s];let a;Se(o)?"default"in o?a=Ze(o.from||s,o.default,!0):a=Ze(o.from||s):a=Ze(o),We(a)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):t[s]=a}}function Ji(e,t,n){$t(ge(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rr(e,t,n,s){let o=s.includes(".")?xr(n,s):()=>n[s];if(Fe(e)){const a=t[e];Me(a)&&De(o,a)}else if(Me(e))De(o,e.bind(n));else if(Se(e))if(ge(e))e.forEach(a=>Rr(a,t,n,s));else{const a=Me(e.handler)?e.handler.bind(n):t[e.handler];Me(a)&&De(o,a,e)}}function Pr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(t);let d;return l?d=l:!o.length&&!n&&!s?d=t:(d={},o.length&&o.forEach(u=>$o(d,u,i,!0)),$o(d,t,i)),Se(t)&&a.set(t,d),d}function $o(e,t,n,s=!1){const{mixins:o,extends:a}=t;a&&$o(e,a,n,!0),o&&o.forEach(i=>$o(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Iu[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Iu={data:Gi,props:Ui,emits:Ui,methods:Cs,computed:Cs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Cs,directives:Cs,watch:Su,provide:Gi,inject:Vu};function Gi(e,t){return t?e?function(){return He(Me(e)?e.call(this,this):e,Me(t)?t.call(this,this):t)}:t:e}function Vu(e,t){return Cs(Oa(e),Oa(t))}function Oa(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function dt(e,t){return e?[...new Set([].concat(e,t))]:t}function Cs(e,t){return e?He(Object.create(null),e,t):t}function Ui(e,t){return e?ge(e)&&ge(t)?[...new Set([...e,...t])]:He(Object.create(null),Ni(e),Ni(t??{})):t}function Su(e,t){if(!e)return t;if(!t)return e;const n=He(Object.create(null),e);for(const s in t)n[s]=dt(e[s],t[s]);return n}function Lr(){return{app:null,config:{isNativeTag:Gl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zu=0;function Au(e,t){return function(s,o=null){Me(s)||(s=He({},s)),o!=null&&!Se(o)&&(o=null);const a=Lr(),i=new WeakSet,l=[];let d=!1;const u=a.app={_uid:zu++,_component:s,_props:o,_container:null,_context:a,_instance:null,version:lm,get config(){return a.config},set config(m){},use(m,...p){return i.has(m)||(m&&Me(m.install)?(i.add(m),m.install(u,...p)):Me(m)&&(i.add(m),m(u,...p))),u},mixin(m){return a.mixins.includes(m)||a.mixins.push(m),u},component(m,p){return p?(a.components[m]=p,u):a.components[m]},directive(m,p){return p?(a.directives[m]=p,u):a.directives[m]},mount(m,p,b){if(!d){const h=u._ceVNode||c(s,o);return h.appContext=a,b===!0?b="svg":b===!1&&(b=void 0),e(h,m,b),d=!0,u._container=m,m.__vue_app__=u,Xo(h.component)}},onUnmount(m){l.push(m)},unmount(){d&&($t(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(m,p){return a.provides[m]=p,u},runWithContext(m){const p=Hn;Hn=u;try{return m()}finally{Hn=p}}};return u}}let Hn=null;const Du=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ft(t)}Modifiers`]||e[`${Sn(t)}Modifiers`];function Eu(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Pe;let o=n;const a=t.startsWith("update:"),i=a&&Du(s,t.slice(7));i&&(i.trim&&(o=n.map(m=>Fe(m)?m.trim():m)),i.number&&(o=o.map(vc)));let l,d=s[l=ma(t)]||s[l=ma(ft(t))];!d&&a&&(d=s[l=ma(Sn(t))]),d&&$t(d,e,6,o);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$t(u,e,6,o)}}const Ru=new WeakMap;function Or(e,t,n=!1){const s=n?Ru:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const a=e.emits;let i={},l=!1;if(!Me(e)){const d=u=>{const m=Or(u,t,!0);m&&(l=!0,He(i,m))};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!a&&!l?(Se(e)&&s.set(e,null),null):(ge(a)?a.forEach(d=>i[d]=null):He(i,a),Se(e)&&s.set(e,i),i)}function Yo(e,t){return!e||!Po(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,Sn(t))||Te(e,t))}function ji(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[a],slots:i,attrs:l,emit:d,render:u,renderCache:m,props:p,data:b,setupState:h,ctx:B,inheritAttrs:I}=e,V=xo(e);let A,D;try{if(n.shapeFlag&4){const F=o||s,q=F;A=Ut(u.call(q,F,m,p,h,b,B)),D=l}else{const F=t;A=Ut(F.length>1?F(p,{attrs:l,slots:i,emit:d}):F(p,null)),D=t.props?l:Pu(l)}}catch(F){un.length=0,Wo(F,e,1),A=c(et)}let E=A;if(D&&I!==!1){const F=Object.keys(D),{shapeFlag:q}=E;F.length&&q&7&&(a&&F.some(Lo)&&(D=Lu(D,a)),E=In(E,D,!1,!0))}if(n.dirs&&(E=In(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition){const F=Ho(E.type)&&Bo(E)||E;Tn(F,n.transition)}return A=E,xo(V),A}function Fr(e,t=!0){let n;for(let s=0;s<e.length;s++){const o=e[s];if(Xn(o)){if(o.type!==et||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Pu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Po(n))&&((t||(t={}))[n]=e[n]);return t},Lu=(e,t)=>{const n={};for(const s in e)(!Lo(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ou(e,t,n){const{props:s,children:o,component:a}=e,{props:i,children:l,patchFlag:d}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&d>=0){if(d&1024)return!0;if(d&16)return s?Wi(s,i,u):!!i;if(d&8){const m=t.dynamicProps;for(let p=0;p<m.length;p++){const b=m[p];if(Nr(i,s,b)&&!Yo(u,b))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?Wi(s,i,u):!0:!!i;return!1}function Wi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const a=s[o];if(!Te(e,a)||Nr(t,e,a)&&!Yo(n,a))return!0}return!1}function Nr(e,t,n){const s=e[n],o=t[n];return n==="style"&&Se(s)&&Se(o)?!Go(s,o):s!==o}function Fu({vnode:e,parent:t,suspense:n},s){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=s,e=o),o===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const Jr={},Gr=()=>Object.create(Jr),Ur=e=>Object.getPrototypeOf(e)===Jr;function Nu(e,t,n,s=!1){const o={},a=Gr();e.propsDefaults=Object.create(null),jr(e,t,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:vr(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ju(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:i}}=e,l=Be(o),[d]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const m=e.vnode.dynamicProps;for(let p=0;p<m.length;p++){let b=m[p];if(Yo(e.emitsOptions,b))continue;const h=t[b];if(d)if(Te(a,b))h!==a[b]&&(a[b]=h,u=!0);else{const B=ft(b);o[B]=Fa(d,l,B,h,e,!1)}else h!==a[b]&&(a[b]=h,u=!0)}}}else{jr(e,t,o,a)&&(u=!0);let m;for(const p in l)(!t||!Te(t,p)&&((m=Sn(p))===p||!Te(t,m)))&&(d?n&&(n[p]!==void 0||n[m]!==void 0)&&(o[p]=Fa(d,l,p,void 0,e,!0)):delete o[p]);if(a!==l)for(const p in a)(!t||!Te(t,p))&&(delete a[p],u=!0)}u&&ln(e.attrs,"set","")}function jr(e,t,n,s){const[o,a]=e.propsOptions;let i=!1,l;if(t)for(let d in t){if(Ts(d))continue;const u=t[d];let m;o&&Te(o,m=ft(d))?!a||!a.includes(m)?n[m]=u:(l||(l={}))[m]=u:Yo(e.emitsOptions,d)||(!(d in s)||u!==s[d])&&(s[d]=u,i=!0)}if(a){const d=Be(n),u=l||Pe;for(let m=0;m<a.length;m++){const p=a[m];n[p]=Fa(o,d,p,u[p],e,!Te(u,p))}}return i}function Fa(e,t,n,s,o,a){const i=e[n];if(i!=null){const l=Te(i,"default");if(l&&s===void 0){const d=i.default;if(i.type!==Function&&!i.skipFactory&&Me(d)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const m=Zs(o);s=u[n]=d.call(null,t),m()}}else s=d;o.ce&&o.ce._setProp(n,s)}i[0]&&(a&&!l?s=!1:i[1]&&(s===""||s===Sn(n))&&(s=!0))}return s}const Gu=new WeakMap;function Wr(e,t,n=!1){const s=n?Gu:t.propsCache,o=s.get(e);if(o)return o;const a=e.props,i={},l=[];let d=!1;if(!Me(e)){const m=p=>{d=!0;const[b,h]=Wr(p,t,!0);He(i,b),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(m),e.extends&&m(e.extends),e.mixins&&e.mixins.forEach(m)}if(!a&&!d)return Se(e)&&s.set(e,Gn),Gn;if(ge(a))for(let m=0;m<a.length;m++){const p=ft(a[m]);Hi(p)&&(i[p]=Pe)}else if(a)for(const m in a){const p=ft(m);if(Hi(p)){const b=a[m],h=i[p]=ge(b)||Me(b)?{type:b}:He({},b),B=h.type;let I=!1,V=!0;if(ge(B))for(let A=0;A<B.length;++A){const D=B[A],E=Me(D)&&D.name;if(E==="Boolean"){I=!0;break}else E==="String"&&(V=!1)}else I=Me(B)&&B.name==="Boolean";h[0]=I,h[1]=V,(I||Te(h,"default"))&&l.push(p)}}const u=[i,l];return Se(e)&&s.set(e,u),u}function Hi(e){return e[0]!=="$"&&!Ts(e)}const di=e=>e==="_"||e==="_ctx"||e==="$stable",ci=e=>ge(e)?e.map(Ut):[Ut(e)],Uu=(e,t,n)=>{if(t._n)return t;const s=f((...o)=>ci(t(...o)),n);return s._c=!1,s},Hr=(e,t,n)=>{const s=e._ctx;for(const o in e){if(di(o))continue;const a=e[o];if(Me(a))t[o]=Uu(o,a,s);else if(a!=null){const i=ci(a);t[o]=()=>i}}},qr=(e,t)=>{const n=ci(t);e.slots.default=()=>n},Kr=(e,t,n)=>{for(const s in t)(n||!di(s))&&(e[s]=t[s])},ju=(e,t,n)=>{const s=e.slots=Gr();if(e.vnode.shapeFlag&32){const o=t._;o?(Kr(s,t,n),n&&Hl(s,"_",o,!0)):Hr(t,s)}else t&&qr(e,t)},Wu=(e,t,n)=>{const{vnode:s,slots:o}=e;let a=!0,i=Pe;if(s.shapeFlag&32){const l=t._;l?n&&l===1?a=!1:Kr(o,t,n):(a=!t.$stable,Hr(t,o)),i=t}else t&&(qr(e,t),i={default:1});if(a)for(const l in o)!di(l)&&i[l]==null&&delete o[l]},ct=Yu;function Hu(e){return qu(e)}function qu(e,t){const n=Jo();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:i,createText:l,createComment:d,setText:u,setElementText:m,parentNode:p,nextSibling:b,setScopeId:h=Qt,insertStaticContent:B}=e,I=(M,k,T,O=null,J=null,W=null,K=void 0,ne=null,te=!!k.dynamicChildren)=>{if(M===k)return;M&&!Nn(M,k)&&(O=U(M),me(M,J,W,!0),M=null),k.patchFlag===-2&&(te=!1,k.dynamicChildren=null),k.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(k.dynamicChildren===Gn&&(k.dynamicChildren=[]),k.dynamicChildren.hasOnce=!0);const{type:H,ref:fe,shapeFlag:ae}=k;switch(H){case Xs:V(M,k,T,O);break;case et:A(M,k,T,O);break;case bo:M==null&&D(k,T,O,K);break;case ie:$(M,k,T,O,J,W,K,ne,te);break;default:ae&1?q(M,k,T,O,J,W,K,ne,te):ae&6?P(M,k,T,O,J,W,K,ne,te):(ae&64||ae&128)&&H.process(M,k,T,O,J,W,K,ne,te,oe)}fe!=null&&J?Ss(fe,M&&M.ref,W,k||M,!k):fe==null&&M&&M.ref!=null&&Ss(M.ref,null,W,M,!0)},V=(M,k,T,O)=>{if(M==null)s(k.el=l(k.children),T,O);else{const J=k.el=M.el;k.children!==M.children&&u(J,k.children)}},A=(M,k,T,O)=>{M==null?s(k.el=d(k.children||""),T,O):k.el=M.el},D=(M,k,T,O)=>{[M.el,M.anchor]=B(M.children,k,T,O,M.el,M.anchor)},E=({el:M,anchor:k},T,O)=>{let J;for(;M&&M!==k;)J=b(M),s(M,T,O),M=J;s(k,T,O)},F=({el:M,anchor:k})=>{let T;for(;M&&M!==k;)T=b(M),o(M),M=T;o(k)},q=(M,k,T,O,J,W,K,ne,te)=>{if(k.type==="svg"?K="svg":k.type==="math"&&(K="mathml"),M==null)re(k,T,O,J,W,K,ne,te);else{const H=M.el&&M.el._isVueCE?M.el:null;try{H&&H._beginPatch(),G(M,k,J,W,K,ne,te)}finally{H&&H._endPatch()}}},re=(M,k,T,O,J,W,K,ne)=>{let te,H;const{props:fe,shapeFlag:ae,transition:ve,dirs:he}=M;if(te=M.el=i(M.type,W,fe&&fe.is,fe),ae&8?m(te,M.children):ae&16&&X(M.children,te,null,O,J,_a(M,W),K,ne),he&&Rn(M,null,O,"created"),Y(te,M,M.scopeId,K,O),fe){for(const Re in fe)Re!=="value"&&!Ts(Re)&&a(te,Re,null,fe[Re],W,O);"value"in fe&&a(te,"value",null,fe.value,W),(H=fe.onVnodeBeforeMount)&&Ft(H,O,M)}he&&Rn(M,null,O,"beforeMount");const Ce=Ku(J,ve);Ce&&ve.beforeEnter(te),s(te,k,T),((H=fe&&fe.onVnodeMounted)||Ce||he)&&ct(()=>{try{H&&Ft(H,O,M),Ce&&ve.enter(te),he&&Rn(M,null,O,"mounted")}finally{}},J)},Y=(M,k,T,O,J)=>{if(T&&h(M,T),O)for(let W=0;W<O.length;W++)h(M,O[W]);if(J){let W=J.subTree;if(k===W||Yr(W.type)&&(W.ssContent===k||W.ssFallback===k)){const K=J.vnode;Y(M,K,K.scopeId,K.slotScopeIds,J.parent)}}},X=(M,k,T,O,J,W,K,ne,te=0)=>{for(let H=te;H<M.length;H++){const fe=M[H]=ne?an(M[H]):Ut(M[H]);I(null,fe,k,T,O,J,W,K,ne)}},G=(M,k,T,O,J,W,K)=>{const ne=k.el=M.el;let{patchFlag:te,dynamicChildren:H,dirs:fe}=k;te|=M.patchFlag&16;const ae=M.props||Pe,ve=k.props||Pe;let he;if(T&&Pn(T,!1),(he=ve.onVnodeBeforeUpdate)&&Ft(he,T,k,M),fe&&Rn(k,M,T,"beforeUpdate"),T&&Pn(T,!0),H&&(!M.dynamicChildren||M.dynamicChildren.length!==H.length)&&(te=0,K=!1,H=null),(ae.innerHTML&&ve.innerHTML==null||ae.textContent&&ve.textContent==null)&&m(ne,""),H?S(M.dynamicChildren,H,ne,T,O,_a(k,J),W):K||ee(M,k,ne,null,T,O,_a(k,J),W,!1),te>0){if(te&16)w(ne,ae,ve,T,J);else if(te&2&&ae.class!==ve.class&&a(ne,"class",null,ve.class,J),te&4&&a(ne,"style",ae.style,ve.style,J),te&8){const Ce=k.dynamicProps;for(let Re=0;Re<Ce.length;Re++){const Ae=Ce[Re],Ke=ae[Ae],tt=ve[Ae];(tt!==Ke||Ae==="value")&&a(ne,Ae,Ke,tt,J,T)}}te&1&&M.children!==k.children&&m(ne,k.children)}else!K&&H==null&&w(ne,ae,ve,T,J);((he=ve.onVnodeUpdated)||fe)&&ct(()=>{he&&Ft(he,T,k,M),fe&&Rn(k,M,T,"updated")},O)},S=(M,k,T,O,J,W,K)=>{for(let ne=0;ne<k.length;ne++){const te=M[ne],H=k[ne],fe=te.el||Na(te),ae=fe&&(te.type===ie||!Nn(te,H)||te.shapeFlag&198)?p(fe):T;I(te,H,ae,null,O,J,W,K,!0)}},w=(M,k,T,O,J)=>{if(k!==T){if(k!==Pe)for(const W in k)!Ts(W)&&!(W in T)&&a(M,W,k[W],null,J,O);for(const W in T){if(Ts(W))continue;const K=T[W],ne=k[W];K!==ne&&W!=="value"&&a(M,W,ne,K,J,O)}"value"in T&&a(M,"value",k.value,T.value,J)}},$=(M,k,T,O,J,W,K,ne,te)=>{const H=k.el=M?M.el:l(""),fe=k.anchor=M?M.anchor:l("");let{patchFlag:ae,dynamicChildren:ve,slotScopeIds:he}=k;he&&(ne=ne?ne.concat(he):he),M==null?(s(H,T,O),s(fe,T,O),X(k.children||[],T,fe,J,W,K,ne,te)):ae>0&&ae&64&&ve&&M.dynamicChildren&&M.dynamicChildren.length===ve.length?(S(M.dynamicChildren,ve,T,J,W,K,ne),(k.key!=null||J&&k===J.subTree)&&ui(M,k,!0)):ee(M,k,T,fe,J,W,K,ne,te)},P=(M,k,T,O,J,W,K,ne,te)=>{k.slotScopeIds=ne,M==null?k.shapeFlag&512?J.ctx.activate(k,T,O,K,te):Z(k,T,O,J,W,K,te):ye(M,k,te)},Z=(M,k,T,O,J,W,K)=>{const ne=M.component=tm(M,O,J);if(qo(M)&&(ne.ctx.renderer=oe),nm(ne,!1,K),ne.asyncDep){if(J&&J.registerDep(ne,N,K,W),!M.el){const te=ne.subTree=c(et);A(null,te,k,T),M.placeholder=te.el}}else N(ne,M,k,T,J,W,K)},ye=(M,k,T)=>{const O=k.component=M.component;if(Ou(M,k,T))if(O.asyncDep&&!O.asyncResolved){k.el=M.el,k.placeholder=M.placeholder,j(O,k,T);return}else O.next=k,O.update();else k.el=M.el,k.placeholder=M.placeholder,O.vnode=k},N=(M,k,T,O,J,W,K)=>{const ne=()=>{if(M.isMounted){let{next:ae,bu:ve,u:he,parent:Ce,vnode:Re}=M;{const Lt=Qr(M);if(Lt){ae&&(ae.el=Re.el,j(M,ae,K)),Lt.asyncDep.then(()=>{ct(()=>{M.isUnmounted||H()},J)});return}}let Ae=ae,Ke;Pn(M,!1),ae?(ae.el=Re.el,j(M,ae,K)):ae=Re,ve&&pa(ve),(Ke=ae.props&&ae.props.onVnodeBeforeUpdate)&&Ft(Ke,Ce,ae,Re),Pn(M,!0);const tt=ji(M),Pt=M.subTree;M.subTree=tt,I(Pt,tt,p(Pt.el),U(Pt),M,J,W),ae.el=tt.el,Ae===null&&Fu(M,tt.el),he&&ct(he,J),(Ke=ae.props&&ae.props.onVnodeUpdated)&&ct(()=>Ft(Ke,Ce,ae,Re),J)}else{let ae;const{el:ve,props:he}=k,{bm:Ce,m:Re,parent:Ae,root:Ke,type:tt}=M,Pt=is(k);Pn(M,!1),Ce&&pa(Ce),!Pt&&(ae=he&&he.onVnodeBeforeMount)&&Ft(ae,Ae,k),Pn(M,!0);{Ke.ce&&Ke.ce._hasShadowRoot()&&Ke.ce._injectChildStyle(tt,M.parent?M.parent.type:void 0);const Lt=M.subTree=ji(M);I(null,Lt,T,O,M,J,W),k.el=Lt.el}if(Re&&ct(Re,J),!Pt&&(ae=he&&he.onVnodeMounted)){const Lt=k;ct(()=>Ft(ae,Ae,Lt),J)}(k.shapeFlag&256||Ae&&is(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&M.a&&ct(M.a,J),M.isMounted=!0,k=T=O=null}};M.scope.on();const te=M.effect=new er(ne);M.scope.off();const H=M.update=te.run.bind(te),fe=M.job=te.runIfDirty.bind(te);fe.i=M,fe.id=M.uid,te.scheduler=()=>ii(fe),Pn(M,!0),H()},j=(M,k,T)=>{k.component=M;const O=M.vnode.props;M.vnode=k,M.next=null,Ju(M,k.props,O,T),Wu(M,k.children,T),Zt(),Mr(M),en()},ee=(M,k,T,O,J,W,K,ne,te=!1)=>{const H=M&&M.children,fe=M?M.shapeFlag:0,ae=k.children,{patchFlag:ve,shapeFlag:he}=k;if(ve>0){if(ve&128){pe(H,ae,T,O,J,W,K,ne,te);return}else if(ve&256){se(H,ae,T,O,J,W,K,ne,te);return}}he&8?(fe&16&&ot(H,J,W),ae!==H&&m(T,ae)):fe&16?he&16?pe(H,ae,T,O,J,W,K,ne,te):ot(H,J,W,!0):(fe&8&&m(T,""),he&16&&X(ae,T,O,J,W,K,ne,te))},se=(M,k,T,O,J,W,K,ne,te)=>{M=M||Gn,k=k||Gn;const H=M.length,fe=k.length,ae=Math.min(H,fe);let ve;for(ve=0;ve<ae;ve++){const he=k[ve]=te?an(k[ve]):Ut(k[ve]);I(M[ve],he,T,null,J,W,K,ne,te)}H>fe?ot(M,J,W,!0,!1,ae):X(k,T,O,J,W,K,ne,te,ae)},pe=(M,k,T,O,J,W,K,ne,te)=>{let H=0;const fe=k.length;let ae=M.length-1,ve=fe-1;for(;H<=ae&&H<=ve;){const he=M[H],Ce=k[H]=te?an(k[H]):Ut(k[H]);if(Nn(he,Ce))I(he,Ce,T,null,J,W,K,ne,te);else break;H++}for(;H<=ae&&H<=ve;){const he=M[ae],Ce=k[ve]=te?an(k[ve]):Ut(k[ve]);if(Nn(he,Ce))I(he,Ce,T,null,J,W,K,ne,te);else break;ae--,ve--}if(H>ae){if(H<=ve){const he=ve+1,Ce=he<fe?k[he].el:O;for(;H<=ve;)I(null,k[H]=te?an(k[H]):Ut(k[H]),T,Ce,J,W,K,ne,te),H++}}else if(H>ve)for(;H<=ae;)me(M[H],J,W,!0),H++;else{const he=H,Ce=H,Re=new Map;for(H=Ce;H<=ve;H++){const gt=k[H]=te?an(k[H]):Ut(k[H]);gt.key!=null&&Re.set(gt.key,H)}let Ae,Ke=0;const tt=ve-Ce+1;let Pt=!1,Lt=0;const hs=new Array(tt);for(H=0;H<tt;H++)hs[H]=0;for(H=he;H<=ae;H++){const gt=M[H];if(Ke>=tt){me(gt,J,W,!0);continue}let Ot;if(gt.key!=null)Ot=Re.get(gt.key);else for(Ae=Ce;Ae<=ve;Ae++)if(hs[Ae-Ce]===0&&Nn(gt,k[Ae])){Ot=Ae;break}Ot===void 0?me(gt,J,W,!0):(hs[Ot-Ce]=H+1,Ot>=Lt?Lt=Ot:Pt=!0,I(gt,k[Ot],T,null,J,W,K,ne,te),Ke++)}const Ci=Pt?Qu(hs):Gn;for(Ae=Ci.length-1,H=tt-1;H>=0;H--){const gt=Ce+H,Ot=k[gt],$i=k[gt+1],Ti=gt+1<fe?$i.el||Na($i):O;hs[H]===0?I(null,Ot,T,Ti,J,W,K,ne,te):Pt&&(Ae<0||H!==Ci[Ae]?ze(Ot,T,Ti,2):Ae--)}}},ze=(M,k,T,O,J=null)=>{const{el:W,type:K,transition:ne,children:te,shapeFlag:H}=M;if(H&6){ze(M.component.subTree,k,T,O);return}if(H&128){M.suspense.move(k,T,O);return}if(H&64){K.move(M,k,T,oe);return}if(K===ie){s(W,k,T);for(let ae=0;ae<te.length;ae++)ze(te[ae],k,T,O);s(M.anchor,k,T);return}if(K===bo){E(M,k,T);return}if(O!==2&&H&1&&ne)if(O===0)ne.persisted&&!W[xt]?s(W,k,T):(ne.beforeEnter(W),s(W,k,T),ct(()=>ne.enter(W),J));else{const{leave:ae,delayLeave:ve,afterLeave:he}=ne,Ce=()=>{M.ctx.isUnmounted?o(W):s(W,k,T)},Re=()=>{const Ae=W._isLeaving||!!W[xt];W._isLeaving&&W[xt](!0),ne.persisted&&!Ae?Ce():ae(W,()=>{Ce(),he&&he()})};ve?ve(W,Ce,Re):Re()}else s(W,k,T)},me=(M,k,T,O=!1,J=!1)=>{const{type:W,props:K,ref:ne,children:te,dynamicChildren:H,shapeFlag:fe,patchFlag:ae,dirs:ve,cacheIndex:he,memo:Ce}=M;if((ae===-2||H&&H.hasOnce)&&(J=!1),ne!=null&&(Zt(),Ss(ne,null,T,M,!0),en()),he!=null&&(!M.ctx||M.ctx===k)&&(k.renderCache[he]=void 0),fe&256){k.ctx.deactivate(M);return}const Re=fe&1&&ve,Ae=!is(M);let Ke;if(Ae&&(Ke=K&&K.onVnodeBeforeUnmount)&&Ft(Ke,k,M),fe&6)rt(M.component,T,O);else{if(fe&128){M.suspense.unmount(T,O);return}Re&&Rn(M,null,k,"beforeUnmount"),fe&64?M.type.remove(M,k,T,oe,O):H&&!H.hasOnce&&(W!==ie||ae>0&&ae&64)?ot(H,k,T,!1,!0):(W===ie&&ae&384||!J&&fe&16)&&ot(te,k,T),O&&Le(M)}const tt=Ce!=null&&he==null;(Ae&&(Ke=K&&K.onVnodeUnmounted)||Re||tt)&&ct(()=>{Ke&&Ft(Ke,k,M),Re&&Rn(M,null,k,"unmounted"),tt&&(M.el=null)},T)},Le=M=>{const{type:k,el:T,anchor:O,transition:J}=M,W=k===ie;if(W&&!J){Ge(T,O);return}if(k===bo){F(M),J&&!J.persisted&&J.afterLeave&&J.afterLeave();return}const K=W?Fs(M):M,ne=()=>{W?p(T)&&Ge(T,O):o(T),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(K&&K.shapeFlag&1&&J&&!J.persisted){const{leave:te,delayLeave:H}=J,fe=K.el,ae=()=>te(fe,ne);H?H(fe,ne,ae):ae()}else ne()},Ge=(M,k)=>{let T;for(;M!==k;)T=b(M),o(M),M=T;o(k)},rt=(M,k,T)=>{const{bum:O,scope:J,job:W,subTree:K,um:ne,m:te,a:H}=M;qi(te),qi(H),O&&pa(O),J.stop(),W?(W.flags|=8,me(K,M,k,T)):M.vnode.el&&K&&(K.transition=M.vnode.transition,me(K,M,k,T)),ne&&ct(ne,k),ct(()=>{M.isUnmounted=!0},k)},ot=(M,k,T,O=!1,J=!1,W=0)=>{for(let K=W;K<M.length;K++)me(M[K],k,T,O,J)},U=M=>{if(M.shapeFlag&6)return U(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const k=b(M.anchor||M.el),T=k&&k[Br];return T?b(T):k},ue=(M,k,T)=>{const O=M&&k._vnode?void 0:M&&M.component?M.component.uid:em();nu(()=>{M==null?k._vnode&&me(k._vnode,null,null,!0):I(k._vnode||null,M,k,null,null,null,T),k._vnode=M},O)},oe={p:I,um:me,m:ze,r:Le,mt:Z,mc:X,pc:ee,pbc:S,n:U,o:e};return{render:ue,hydrate:void 0,createApp:Au(ue)}}function _a({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Pn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ku(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ui(e,t,n=!1){const s=e.children,o=t.children;if(ge(s)&&ge(o))for(let a=0;a<s.length;a++){const i=s[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=an(o[a]),l.el=i.el),!n&&l.patchFlag!==-2&&ui(i,l)),l.type===Xs&&(l.patchFlag===-1&&(l=o[a]=an(l)),l.el=i.el),l.type===et&&!l.el&&(l.el=i.el)}}function Qu(e){const t=e.slice(),n=[0];let s,o,a,i,l;const d=e.length;for(s=0;s<d;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(a=0,i=n.length-1;a<i;)l=a+i>>1,e[n[l]]<u?a=l+1:i=l;u<e[n[a]]&&(a>0&&(t[s]=n[a-1]),n[a]=s)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=t[i];return n}function Qr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qr(t)}function qi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Na(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Na(t.subTree):null}const Yr=e=>e.__isSuspense;function Yu(e,t){t&&t.pendingBranch?ge(e)?t.effects.push(...e):t.effects.push(e):tu(e)}const ie=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),un=[];let ht=null;function v(e=!1){un.push(ht=e?null:[])}function mi(){un.pop(),ht=un[un.length-1]||null}let Ns=1;function To(e,t=!1){Ns+=e,e<0&&ht&&t&&(ht.hasOnce=!0)}function Xr(e){return e.dynamicChildren=Ns>0?ht||Gn:null,mi(),Ns>0&&ht&&ht.push(e),e}function y(e,t,n,s,o,a){return Xr(g(e,t,n,s,o,a,!0))}function we(e,t,n,s,o){return Xr(c(e,t,n,s,o,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function Nn(e,t){return e.type===t.type&&e.key===t.key}const Zr=({key:e})=>e??null,yo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||We(e)||Me(e)?{i:nt,r:e,k:t,f:!!n}:e:null);function g(e,t=null,n=null,s=0,o=null,a=e===ie?0:1,i=!1,l=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zr(t),ref:t&&yo(t),scopeId:wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:nt};return l?(Vo(d,n),a&128&&e.normalize(d)):n&&(d.shapeFlag|=Fe(n)?8:16),Ns>0&&!i&&ht&&(d.patchFlag>0||a&6)&&d.patchFlag!==32&&ht.push(d),d}const c=Xu;function Xu(e,t=null,n=null,s=0,o=null,a=!1){if((!e||e===Dr)&&(e=et),Xn(e)){const l=In(e,t,!0);return n&&Vo(l,n),Ns>0&&!a&&ht&&(l.shapeFlag&6?ht[ht.indexOf(e)]=l:ht.push(l)),l.patchFlag=-2,l}if(im(e)&&(e=e.__vccOpts),t){t=Io(t);let{class:l,style:d}=t;l&&!Fe(l)&&(t.class=de(l)),Se(d)&&(jo(d)&&!ge(d)&&(d=He({},d)),t.style=$e(d))}const i=Fe(e)?1:Yr(e)?128:Ho(e)?64:Se(e)?4:Me(e)?2:0;return g(e,t,n,s,o,i,a,!0)}function Io(e){return e?jo(e)||Ur(e)?He({},e):e:null}function In(e,t,n=!1,s=!1){const{props:o,ref:a,patchFlag:i,children:l,transition:d}=e,u=t?pi(o||{},t):o,m={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Zr(u),ref:t&&t.ref?n&&a?ge(a)?a.concat(yo(t)):[a,yo(t)]:yo(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:d,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&In(e.ssContent),ssFallback:e.ssFallback&&In(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return d&&s&&Tn(m,d.clone(m)),m}function _(e=" ",t=0){return c(Xs,null,e,t)}function RV(e,t){const n=c(bo,null,e);return n.staticCount=t,n}function Q(e="",t=!1){return t?(v(),we(et,null,e)):c(et,null,e)}function Ut(e){return e==null||typeof e=="boolean"?c(et):ge(e)?c(ie,null,e.slice()):Xn(e)?an(e):c(Xs,null,String(e))}function an(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:In(e)}function Vo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ge(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Vo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Ur(t)?t._ctx=nt:o===3&&nt&&(nt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Me(t)){if(s&65){Vo(e,{default:t});return}t={default:t,_ctx:nt},n=32}else t=String(t),s&64?(n=16,t=[_(t)]):n=8;e.children=t,e.shapeFlag|=n}function pi(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=de([t.class,s.class]));else if(o==="style")t.style=$e([t.style,s.style]);else if(Po(o)){const a=t[o],i=s[o];i&&a!==i&&!(ge(a)&&a.includes(i))?t[o]=a?[].concat(a,i):i:i==null&&a==null&&!Lo(o)&&(t[o]=i)}else o!==""&&(t[o]=s[o])}return t}function Ft(e,t,n,s=null){$t(e,t,7,[n,s])}const Zu=Lr();let ed=0;function em(){return ed}function tm(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Zu,a={uid:ed++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wr(s,o),emitsOptions:Or(s,o),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Eu.bind(null,a),e.ce&&e.ce(a),a}let it=null;const vs=()=>it||nt;let So,Js;{const e=Jo(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),a=>{o.length>1?o.forEach(i=>i(a)):o[0](a)}};So=t("__VUE_INSTANCE_SETTERS__",n=>it=n),Js=t("__VUE_SSR_SETTERS__",n=>Gs=n)}const Zs=e=>{const t=it;return So(e),e.scope.on(),()=>{e.scope.off(),So(t)}},Ki=()=>{it&&it.scope.off(),So(null)};function td(e){return e.vnode.shapeFlag&4}let Gs=!1;function nm(e,t=!1,n=!1){t&&Js(t);const{props:s,children:o}=e.vnode,a=td(e);Nu(e,s,a,t),ju(e,o,n||t);const i=a?sm(e,t):void 0;return t&&Js(!1),i}function sm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Bu);const{setup:s}=n;if(s){Zt();const o=e.setupContext=s.length>1?sd(e):null,a=Zs(e),i=Ys(s,e,0,[e.props,o]),l=Ul(i);if(en(),a(),(l||e.sp)&&!is(e)&&Vr(e),l){if(i.then(Ki,Ki),t)return i.then(d=>{Js(!0);try{Qi(e,d,t)}finally{Js(!1)}}).catch(d=>{Wo(d,e,0)});e.asyncDep=i}else Qi(e,i)}else nd(e)}function Qi(e,t,n){Me(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=br(t)),nd(e)}function nd(e,t,n){const s=e.type;e.render||(e.render=s.render||Qt);{const o=Zs(e);Zt();try{$u(e)}finally{en(),o()}}}const om={get(e,t){return at(e,"get",""),e[t]}};function sd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,om),slots:e.slots,emit:e.emit,expose:t}}function Xo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(br(ai(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zs)return zs[n](e)},has(t,n){return n in t||n in zs}})):e.proxy}function am(e,t=!0){return Me(e)?e.displayName||e.name:e.name||t&&e.__name}function im(e){return Me(e)&&"__vccOpts"in e}const x=(e,t)=>Qc(e,t,Gs);function ds(e,t,n){try{To(-1);const s=arguments.length;return s===2?Se(t)&&!ge(t)?Xn(t)?c(e,null,[t]):c(e,t):c(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xn(n)&&(n=[n]),c(e,t,n))}finally{To(1)}}const lm="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ja;const Yi=typeof window<"u"&&window.trustedTypes;if(Yi)try{Ja=Yi.createPolicy("vue",{createHTML:e=>e})}catch{}const od=Ja?e=>Ja.createHTML(e):e=>e,rm="http://www.w3.org/2000/svg",dm="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,Xi=on&&on.createElement("template"),cm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?on.createElementNS(rm,e):t==="mathml"?on.createElementNS(dm,e):n?on.createElement(e,{is:n}):on.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>on.createTextNode(e),createComment:e=>on.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>on.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,a){const i=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{Xi.innerHTML=od(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Xi.content;if(s==="svg"||s==="mathml"){const d=l.firstChild;for(;d.firstChild;)l.appendChild(d.firstChild);l.removeChild(d)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yn="transition",ks="animation",cs=Symbol("_vtc"),ad={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},id=He({},$r,ad),um=e=>(e.displayName="Transition",e.props=id,e),Zn=um((e,{slots:t})=>ds(mu,ld(e),t)),Ln=(e,t=[])=>{ge(e)?e.forEach(n=>n(...t)):e&&e(...t)},Zi=e=>e?ge(e)?e.some(t=>t.length>1):e.length>1:!1;function ld(e){const t={};for(const $ in e)$ in ad||(t[$]=e[$]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:d=a,appearActiveClass:u=i,appearToClass:m=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:b=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,B=mm(o),I=B&&B[0],V=B&&B[1],{onBeforeEnter:A,onEnter:D,onEnterCancelled:E,onLeave:F,onLeaveCancelled:q,onBeforeAppear:re=A,onAppear:Y=D,onAppearCancelled:X=E}=t,G=($,P,Z,ye)=>{$._enterCancelled=ye,kn($,P?m:l),kn($,P?u:i),Z&&Z()},S=($,P)=>{$._isLeaving=!1,kn($,p),kn($,h),kn($,b),P&&P()},w=$=>(P,Z)=>{const ye=$?Y:D,N=()=>G(P,$,Z);Ln(ye,[P,N]),el(()=>{kn(P,$?d:a),Nt(P,$?m:l),Zi(ye)||tl(P,s,I,N)})};return He(t,{onBeforeEnter($){Ln(A,[$]),Nt($,a),Nt($,i)},onBeforeAppear($){Ln(re,[$]),Nt($,d),Nt($,u)},onEnter:w(!1),onAppear:w(!0),onLeave($,P){$._isLeaving=!0;const Z=()=>S($,P);Nt($,p),$._enterCancelled?(Nt($,b),Ga($)):(Ga($),Nt($,b)),el(()=>{$._isLeaving&&(kn($,p),Nt($,h),Zi(F)||tl($,s,V,Z))}),Ln(F,[$,Z])},onEnterCancelled($){G($,!1,void 0,!0),Ln(E,[$])},onAppearCancelled($){G($,!0,void 0,!0),Ln(X,[$])},onLeaveCancelled($){S($),Ln(q,[$])}})}function mm(e){if(e==null)return null;if(Se(e))return[ka(e.enter),ka(e.leave)];{const t=ka(e);return[t,t]}}function ka(e){return gc(e)}function Nt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[cs]||(e[cs]=new Set)).add(t)}function kn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[cs];n&&(n.delete(t),n.size||(e[cs]=void 0))}function el(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let pm=0;function tl(e,t,n,s){const o=e._endId=++pm,a=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(a,n);const{type:i,timeout:l,propCount:d}=rd(e,t);if(!i)return s();const u=i+"end";let m=0;const p=()=>{e.removeEventListener(u,b),a()},b=h=>{h.target===e&&++m>=d&&p()};setTimeout(()=>{m<d&&p()},l+1),e.addEventListener(u,b)}function rd(e,t){const n=window.getComputedStyle(e),s=B=>(n[B]||"").split(", "),o=s(`${yn}Delay`),a=s(`${yn}Duration`),i=nl(o,a),l=s(`${ks}Delay`),d=s(`${ks}Duration`),u=nl(l,d);let m=null,p=0,b=0;t===yn?i>0&&(m=yn,p=i,b=a.length):t===ks?u>0&&(m=ks,p=u,b=d.length):(p=Math.max(i,u),m=p>0?i>u?yn:ks:null,b=m?m===yn?a.length:d.length:0);const h=m===yn&&/\b(?:transform|all)(?:,|$)/.test(s(`${yn}Property`).toString());return{type:m,timeout:p,propCount:b,hasTransform:h}}function nl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>sl(n)+sl(e[s])))}function sl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ga(e){return(e?e.ownerDocument:document).body.offsetHeight}function fm(e,t,n){const s=e[cs];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const zo=Symbol("_vod"),fi=Symbol("_vsh"),Dn={name:"show",beforeMount(e,{value:t},{transition:n}){e[zo]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ws(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),ws(e,!0),s.enter(e)):s.leave(e,()=>{ws(e,!1)}):ws(e,t))},beforeUnmount(e,{value:t}){ws(e,t)}};function ws(e,t){e.style.display=t?e[zo]:"none",e[fi]=!t}const vm=Symbol(""),gm=/(?:^|;)\s*display\s*:/;function bm(e,t,n){const s=e.style,o=Fe(n);let a=!1;if(n&&!o){if(t)if(Fe(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&$s(s,l,"")}else for(const i in t)n[i]==null&&$s(s,i,"");for(const i in n){i==="display"&&(a=!0);const l=n[i];l!=null?hm(e,i,!Fe(t)&&t?t[i]:void 0,l)||$s(s,i,l):$s(s,i,"")}}else if(o){if(t!==n){const i=s[vm];i&&(n+=";"+i),s.cssText=n,a=gm.test(n)}}else t&&e.removeAttribute("style");zo in e&&((!o||t!==n)&&(e[zo]=a?s.display:""),e[fi]&&(s.display="none"))}const fo=/\s*!important$/;function $s(e,t,n){if(ge(n))n.forEach(s=>$s(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))fo.test(n)?e.setProperty(t,n.replace(fo,""),"important"):e.setProperty(t,n);else{const s=ym(e,t);fo.test(n)?e.setProperty(Sn(s),n.replace(fo,""),"important"):e[s]=n}}const ol=["Webkit","Moz","ms"],wa={};function ym(e,t){const n=wa[t];if(n)return n;let s=ft(t);if(s!=="filter"&&s in e)return wa[t]=s;s=No(s);for(let o=0;o<ol.length;o++){const a=ol[o]+s;if(a in e)return wa[t]=a}return t}function hm(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Fe(s)&&n===s}const al="http://www.w3.org/1999/xlink";function il(e,t,n,s,o,a=kc(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(al,t.slice(6,t.length)):e.setAttributeNS(al,t,n):n==null||a&&!ql(n)?e.removeAttribute(t):e.setAttribute(t,a?"":_t(n)?String(n):n)}function ll(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?od(n):n);return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?e.getAttribute("value")||"":e.value,d=n==null?e.type==="checkbox"?"on":"":String(n);(l!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ql(n):n==null&&l==="string"?(n="",i=!0):l==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Mm(e,t,n,s){e.addEventListener(t,n,s)}function _m(e,t,n,s){e.removeEventListener(t,n,s)}const rl=Symbol("_vei");function km(e,t,n,s,o=null){const a=e[rl]||(e[rl]={}),i=a[t];if(s&&i)i.value=s;else{const[l,d]=Bm(t);if(s){const u=a[t]=Tm(s,o);Mm(e,l,u,d)}else i&&(_m(e,l,i,d),a[t]=void 0)}}const wm=/(Once|Passive|Capture)$/,xm=/^on:?(?:Once|Passive|Capture)$/;function Bm(e){let t,n;for(;(n=e.match(wm))&&!xm.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Sn(e.slice(2)),t]}let xa=0;const Cm=Promise.resolve(),$m=()=>xa||(Cm.then(()=>xa=0),xa=Date.now());function Tm(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const o=n.value;if(ge(o)){const a=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{a.call(s),s._stopped=!0};const i=o.slice(),l=[s];for(let d=0;d<i.length&&!s._stopped;d++){const u=i[d];u&&$t(u,t,5,l)}}else $t(o,t,5,[s])};return n.value=e,n.attached=$m(),n}const dl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Im=(e,t,n,s,o,a)=>{const i=o==="svg";t==="class"?fm(e,s,i):t==="style"?bm(e,n,s):Po(t)?Lo(t)||km(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vm(e,t,s,i))?(ll(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&il(e,t,s,i,a,t!=="value")):e._isVueCE&&(Sm(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Fe(s)))?ll(e,ft(t),s,a,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),il(e,t,s,i))};function Vm(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&dl(t)&&Me(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return dl(t)&&Fe(n)?!1:t in e}function Sm(e,t){const n=e._def.props;if(!n)return!1;const s=ft(t);return Array.isArray(n)?n.some(o=>ft(o)===s):Object.keys(n).some(o=>ft(o)===s)}const dd=new WeakMap,cd=new WeakMap,Ao=Symbol("_moveCb"),cl=Symbol("_enterCb"),Ua=new WeakMap,zm=e=>(delete e.props.mode,e),Am=zm({name:"TransitionGroup",props:He({},id,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=vs(),s=Cr();let o,a,i,l;const d=()=>(l===void 0&&(l=o.length>0&&Fm(o[0].el,n.vnode.el,ul(e))),l);return zr(()=>{if(Ua.delete(n),!d()){o=[],i=void 0;return}const u=ul(e);o.forEach(Dm);const m=i&&Om(i,n.vnode.el);i=void 0,o.forEach(b=>Em(b,m));const p=o.filter(Rm);Ga(n.vnode.el),p.forEach(b=>{const h=b.el,B=h.style;Nt(h,u),B.transform=B.webkitTransform=B.transitionDuration="";const I=h[Ao]=V=>{V&&V.target!==h||(!V||V.propertyName.endsWith("transform"))&&(h.removeEventListener("transitionend",I),h[Ao]=null,kn(h,u))};h.addEventListener("transitionend",I)}),o=[]}),()=>{const u=Be(e),m=ld(u);let p=u.tag||ie;if(o=[],l=void 0,a)for(let b=0;b<a.length;b++){const h=a[b];h.el&&h.el instanceof Element&&!h.el[fi]&&(o.push(h),Tn(h,Os(h,m,s,n)),dd.set(h,Zo(h.el)))}a=t.default?ri(t.default()):[];for(let b=0;b<a.length;b++){const h=a[b];h.key!=null&&Tn(h,Os(h,m,s,n))}return o.length&&(i=Pm(n),Ua.set(n,d)),c(p,null,a)}}}),ud=Am;function Dm(e){const t=e.el;t[Ao]&&t[Ao](),t[cl]&&t[cl]()}function ul(e){return e.moveClass||`${e.name||"v"}-move`}function Em(e,t){cd.set(e,Zo(e.el,t))}function Rm(e){const t=dd.get(e),n=cd.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const a=e.el,i=a.style,l=a.getBoundingClientRect();let d=1,u=1;return a.offsetWidth&&(d=l.width/a.offsetWidth),a.offsetHeight&&(u=l.height/a.offsetHeight),(!Number.isFinite(d)||d===0)&&(d=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(d-1)<.01&&(d=1),Math.abs(u-1)<.01&&(u=1),i.transform=i.webkitTransform=`translate(${s/d}px,${o/u}px)`,i.transitionDuration="0s",e}}function Zo(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Pm(e){let t;for(let n=e.parent;n;n=n.parent){const s=Ua.get(n);if(s){const o=Lm(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(He(Zo(o),{item:o,willMove:s}))}}return t}function Lm(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Om(e,t){const n=e.find(s=>s.willMove()&&s.item.contains(t));return n&&Zo(n.item,n)}function Fm(e,t,n){const s=e.cloneNode(),o=e[cs];o&&o.forEach(l=>{l.split(/\s+/).forEach(d=>d&&s.classList.remove(d))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(s);const{hasTransform:i}=rd(s);return a.removeChild(s),i}const Nm=["ctrl","shift","alt","meta"],Jm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Nm.some(n=>e[`${n}Key`]&&!t.includes(n))},pn=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...a)=>{for(let i=0;i<t.length;i++){const l=Jm[t[i]];if(l&&l(o,t))return}return e(o,...a)}))},Gm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Um=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=(o=>{if(!("key"in o))return;const a=Sn(o.key);if(t.some(i=>i===a||Gm[i]===a))return e(o)}))},jm=He({patchProp:Im},cm);let ml;function Wm(){return ml||(ml=Hu(jm))}const Hm=((...e)=>{const t=Wm().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Km(s);if(!o)return;const a=t._component;!Me(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,qm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function qm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Km(e){return Fe(e)?document.querySelector(e):e}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let md;const ea=e=>md=e,pd=Symbol();function ja(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var As;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(As||(As={}));function Qm(){const e=Xl(!0),t=e.run(()=>z({}));let n=[],s=[];const o=ai({install(a){ea(o),o._a=a,a.provide(pd,o),a.config.globalProperties.$pinia=o,s.forEach(i=>n.push(i)),s=[]},use(a){return this._a?n.push(a):s.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const fd=()=>{};function pl(e,t,n,s=fd){e.push(t);const o=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),s())};return!n&&Zl()&&Bc(o),o}function ns(e,...t){e.slice().forEach(n=>{n(...t)})}const Ym=e=>e(),fl=Symbol(),Ba=Symbol();function Wa(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,s)=>e.set(s,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],o=e[n];ja(o)&&ja(s)&&e.hasOwnProperty(n)&&!We(s)&&!Yt(s)?e[n]=Wa(o,s):e[n]=s}return e}const Xm=Symbol();function Zm(e){return!ja(e)||!e.hasOwnProperty(Xm)}const{assign:wn}=Object;function ep(e){return!!(We(e)&&e.effect)}function tp(e,t,n,s){const{state:o,actions:a,getters:i}=t,l=n.state.value[e];let d;function u(){l||(n.state.value[e]=o?o():{});const m=Wc(n.state.value[e]);return wn(m,a,Object.keys(i||{}).reduce((p,b)=>(p[b]=ai(x(()=>{ea(n);const h=n._s.get(e);return i[b].call(h,h)})),p),{}))}return d=vd(e,u,t,n,s,!0),d}function vd(e,t,n={},s,o,a){let i;const l=wn({actions:{}},n),d={deep:!0};let u,m,p=[],b=[],h;const B=s.state.value[e];!a&&!B&&(s.state.value[e]={});let I;function V(X){let G;u=m=!1,typeof X=="function"?(X(s.state.value[e]),G={type:As.patchFunction,storeId:e,events:h}):(Wa(s.state.value[e],X),G={type:As.patchObject,payload:X,storeId:e,events:h});const S=I=Symbol();lt().then(()=>{I===S&&(u=!0)}),m=!0,ns(p,G,s.state.value[e])}const A=a?function(){const{state:G}=n,S=G?G():{};this.$patch(w=>{wn(w,S)})}:fd;function D(){i.stop(),p=[],b=[],s._s.delete(e)}const E=(X,G="")=>{if(fl in X)return X[Ba]=G,X;const S=function(){ea(s);const w=Array.from(arguments),$=[],P=[];function Z(j){$.push(j)}function ye(j){P.push(j)}ns(b,{args:w,name:S[Ba],store:q,after:Z,onError:ye});let N;try{N=X.apply(this&&this.$id===e?this:q,w)}catch(j){throw ns(P,j),j}return N instanceof Promise?N.then(j=>(ns($,j),j)).catch(j=>(ns(P,j),Promise.reject(j))):(ns($,N),N)};return S[fl]=!0,S[Ba]=G,S},F={_p:s,$id:e,$onAction:pl.bind(null,b),$patch:V,$reset:A,$subscribe(X,G={}){const S=pl(p,X,G.detached,()=>w()),w=i.run(()=>De(()=>s.state.value[e],$=>{(G.flush==="sync"?m:u)&&X({storeId:e,type:As.direct,events:h},$)},wn({},d,G)));return S},$dispose:D},q=zn(F);s._s.set(e,q);const Y=(s._a&&s._a.runWithContext||Ym)(()=>s._e.run(()=>(i=Xl()).run(()=>t({action:E}))));for(const X in Y){const G=Y[X];if(We(G)&&!ep(G)||Yt(G))a||(B&&Zm(G)&&(We(G)?G.value=B[X]:Wa(G,B[X])),s.state.value[e][X]=G);else if(typeof G=="function"){const S=E(G,X);Y[X]=S,l.actions[X]=G}}return wn(q,Y),wn(Be(q),Y),Object.defineProperty(q,"$state",{get:()=>s.state.value[e],set:X=>{V(G=>{wn(G,X)})}}),s._p.forEach(X=>{wn(q,i.run(()=>X({store:q,app:s._a,pinia:s,options:l})))}),B&&a&&n.hydrate&&n.hydrate(q.$state,B),u=!0,m=!0,q}/*! #__NO_SIDE_EFFECTS__ */function np(e,t,n){let s,o;const a=typeof t=="function";s=e,o=a?n:t;function i(l,d){const u=su();return l=l||(u?Ze(pd,null):null),l&&ea(l),l=md,l._s.has(s)||(a?vd(s,t,o,l):tp(s,o,l)),l._s.get(s)}return i.$id=s,i}const sp="M",vi="anemia-ui-theme",gd="0.6.0";function _e(e){return`${sp}${e}`}function ke(e,t){return Object.assign(e,{install:s=>{s.component(t,e)}})}/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:s,iconNode:o,name:a,class:i,...l},{slots:d})=>ds("svg",{...vo,width:e||vo.width,height:e||vo.height,stroke:s||vo.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${op(a??"icon")}`],...l},[...o.map(u=>ds(...u)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,t)=>(n,{slots:s})=>ds(ap,{...n,iconNode:t,name:e},s);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=Ee("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=Ee("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Ee("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Ee("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=Ee("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=Ee("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=Ee("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=Ee("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=Ee("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=Ee("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=Ee("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=Ee("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=Ee("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=Ee("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Ee("InboxIcon",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=Ee("InfoIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Ee("LinkIcon",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=Ee("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=Ee("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Ee("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=Ee("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Ee("MonitorIcon",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=Ee("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=Ee("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Ee("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=Ee("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=Ee("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=Ee("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dp={"arrow-left":ip,"arrow-right":lp,check:rp,"chevron-down":dp,"chevron-left":cp,"chevron-right":up,"chevron-up":mp,close:Ap,copy:vp,error:fp,"external-link":gp,eye:yp,"eye-off":bp,github:hp,inbox:Mp,info:_p,link:kp,loader:wp,mail:xp,menu:Bp,minus:Cp,monitor:$p,moon:Tp,search:Ip,success:pp,sun:Vp,user:zp,warning:Sp},Ep=C({name:"MIcon",inheritAttrs:!1,__name:"Icon",props:{name:{},size:{default:"1em"},strokeWidth:{default:1.75},label:{default:void 0}},setup(e){const t=e,n=x(()=>Dp[t.name]),s=x(()=>typeof t.size=="number"?`${t.size}px`:t.size);return(o,a)=>(v(),we(Qo(n.value),pi({class:"m-icon",style:{width:s.value,height:s.value},"stroke-width":e.strokeWidth,"aria-hidden":e.label?void 0:"true","aria-label":e.label,role:e.label?"img":void 0,focusable:"false"},o.$attrs),null,16,["style","stroke-width","aria-hidden","aria-label","role"]))}}),ce=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Ie=ce(Ep,[["__scopeId","data-v-bee244fe"]]),Rp=["role"],Pp={key:0,class:"m-alert__icon","aria-hidden":"true"},Lp={class:"m-alert__content"},Op={key:0,class:"m-alert__title"},Fp={key:1,class:"m-alert__description"},Np=["aria-label"],Jp=C({name:"MAlert",__name:"Alert",props:{type:{default:"info"},title:{default:void 0},description:{default:void 0},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},closeLabel:{default:"关闭提示"}},emits:["close"],setup(e,{emit:t}){const n=e,s=t,o=bn(),a=z(!0),i={info:"info",success:"success",warning:"warning",error:"error"},l=x(()=>n.type==="warning"||n.type==="error"?"alert":"status"),d=x(()=>[`m-alert--${n.type}`]),u=x(()=>!!n.title||!!o.title),m=x(()=>!!n.description||!!o.default);function p(b){a.value=!1,s("close",b)}return(b,h)=>a.value?(v(),y("div",{key:0,class:de(["m-alert",d.value]),role:l.value},[e.showIcon?(v(),y("span",Pp,[le(b.$slots,"icon",{},()=>[c(Ie,{name:i[e.type]},null,8,["name"])],!0)])):Q("",!0),g("div",Lp,[u.value?(v(),y("div",Op,[le(b.$slots,"title",{},()=>[_(L(e.title),1)],!0)])):Q("",!0),m.value?(v(),y("div",Fp,[le(b.$slots,"default",{},()=>[_(L(e.description),1)],!0)])):Q("",!0)]),e.closable?(v(),y("button",{key:1,type:"button",class:"m-alert__close","aria-label":e.closeLabel,onClick:p},[c(Ie,{name:"close"})],8,Np)):Q("",!0)],10,Rp)):Q("",!0)}}),Gp=ce(Jp,[["__scopeId","data-v-981682d3"]]),Vt=ke(Gp,_e("Alert")),Up=["aria-label"],jp={class:"m-avatar__fallback","aria-hidden":"true"},Wp={key:0,class:"m-avatar__initials"},Hp=["src"],qp=C({name:"MAvatar",__name:"Avatar",props:{src:{default:void 0},alt:{default:void 0},name:{default:void 0},size:{default:"medium"},shape:{default:"circle"}},emits:["error"],setup(e,{emit:t}){const n=e,s=t,o=z(!1),a=x(()=>!!n.src&&!o.value),i=x(()=>{const m=n.name?.trim();if(!m)return"";const p=m.split(/\s+/).filter(Boolean);return p.length>1?p.slice(0,2).map(b=>b.charAt(0)).join("").toUpperCase():/[\u3400-\u9fff]/.test(m)?m.slice(0,2):m.slice(0,2).toUpperCase()}),l=x(()=>n.alt??n.name??"头像"),d=x(()=>[`m-avatar--${n.size}`,`m-avatar--${n.shape}`]);De(()=>n.src,()=>{o.value=!1});function u(m){o.value=!0,s("error",m)}return(m,p)=>(v(),y("span",{class:de(["m-avatar",d.value]),role:"img","aria-label":l.value},[g("span",jp,[le(m.$slots,"fallback",{},()=>[i.value?(v(),y("span",Wp,L(i.value),1)):(v(),we(Ie,{key:1,name:"user",class:"m-avatar__icon"}))],!0)]),a.value?(v(),y("img",{key:0,class:"m-avatar__image",src:e.src,alt:"",loading:"lazy",decoding:"async",onError:u},null,40,Hp)):Q("",!0)],10,Up))}}),Kp=ce(qp,[["__scopeId","data-v-777e7a87"]]),Je=ke(Kp,_e("Avatar")),Qp=["aria-label","aria-hidden"],Yp=C({name:"MBadge",__name:"Badge",props:{count:{default:void 0},max:{default:99},dot:{type:Boolean,default:!1},color:{default:void 0},hidden:{type:Boolean,default:!1},showZero:{type:Boolean,default:!1},ariaLabel:{default:void 0}},setup(e){const t=e,n=bn(),s=x(()=>{if(t.dot||t.count===void 0||!Number.isFinite(t.count))return"";const m=Math.max(0,Math.floor(t.count));if(m===0&&!t.showZero)return"";const p=Math.max(0,Math.floor(t.max));return m>p?`${p}+`:String(m)}),o=x(()=>!t.hidden&&(t.dot||s.value!=="")),a=x(()=>!!n.default),i=x(()=>({"m-badge--dot":t.dot,"m-badge--standalone":!a.value})),l=x(()=>t.color?{"--m-badge-custom-color":t.color}:void 0),d=x(()=>{if(t.ariaLabel)return t.ariaLabel;if(t.dot)return"有新内容"}),u=x(()=>!o.value||!d.value&&s.value===""?"true":void 0);return(m,p)=>(v(),y("span",{class:de(["m-badge",i.value])},[le(m.$slots,"default",{},void 0,!0),o.value?(v(),y("span",{key:0,class:"m-badge__content",style:$e(l.value),"aria-label":d.value,"aria-hidden":u.value,role:"status"},[e.dot?Q("",!0):(v(),y(ie,{key:0},[_(L(s.value),1)],64))],12,Qp)):Q("",!0)],2))}}),Xp=ce(Yp,[["__scopeId","data-v-384604e7"]]),st=ke(Xp,_e("Badge")),bd=Symbol("m-breadcrumb"),Zp=["aria-label"],ef={class:"m-breadcrumb__list"},tf=C({name:"MBreadcrumb",__name:"Breadcrumb",props:{separator:{default:"/"},ariaLabel:{default:"面包屑"}},setup(e){const t=e;return At(bd,{separator:x(()=>t.separator)}),(n,s)=>(v(),y("nav",{class:"m-breadcrumb","aria-label":e.ariaLabel},[g("ol",ef,[le(n.$slots,"default",{},void 0,!0)])],8,Zp))}}),nf=ce(tf,[["__scopeId","data-v-dc7258e5"]]),sf=["href","target","aria-current"],of=["aria-current"],af={key:2,class:"m-breadcrumb__separator","aria-hidden":"true"},lf=C({name:"MBreadcrumbItem",__name:"BreadcrumbItem",props:{href:{default:void 0},target:{default:void 0},current:{type:Boolean,default:!1},icon:{default:void 0}},setup(e){const t=Ze(bd,null),n=x(()=>t?.separator.value??"");return(s,o)=>(v(),y("li",{class:de(["m-breadcrumb__item",{"is-current":e.current}])},[e.href?(v(),y("a",{key:0,class:"m-breadcrumb__link",href:e.href,target:e.target,"aria-current":e.current?"page":void 0},[e.icon?(v(),we(Ie,{key:0,name:e.icon,class:"m-breadcrumb__icon"},null,8,["name"])):Q("",!0),le(s.$slots,"default",{},void 0,!0)],8,sf)):(v(),y("span",{key:1,class:"m-breadcrumb__text","aria-current":e.current?"page":void 0},[e.icon?(v(),we(Ie,{key:0,name:e.icon,class:"m-breadcrumb__icon"},null,8,["name"])):Q("",!0),le(s.$slots,"default",{},void 0,!0)],8,of)),n.value?(v(),y("span",af,L(n.value),1)):Q("",!0)],2))}}),rf=ce(lf,[["__scopeId","data-v-9d38f0e8"]]),Us=ke(nf,_e("Breadcrumb")),bt=ke(rf,_e("BreadcrumbItem")),yd=Symbol("m-button-group"),df=["type","disabled","aria-busy","aria-disabled"],cf={key:2,class:"m-button__label"},uf=C({name:"MButton",__name:"Button",props:{type:{default:"primary"},size:{default:void 0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},round:{type:Boolean,default:!1},icon:{default:void 0},nativeType:{default:"button"}},emits:["click"],setup(e,{emit:t}){const n=e,s=t,o=bn(),a=Ze(yd,null),i=x(()=>n.size??a?.size.value??"medium"),l=x(()=>n.disabled||n.loading),d=x(()=>(!!n.icon||!!o.icon)&&!o.default),u=x(()=>[`m-button--${n.type}`,`m-button--${i.value}`,{"m-button--block":n.block,"m-button--round":n.round,"m-button--icon-only":d.value,"is-loading":n.loading}]);function m(p){if(l.value){p.preventDefault();return}s("click",p)}return(p,b)=>(v(),y("button",{class:de(["m-button",u.value]),type:e.nativeType,disabled:e.disabled||e.loading,"aria-busy":e.loading||void 0,"aria-disabled":e.disabled||e.loading||void 0,onClick:m},[e.loading?le(p.$slots,"loading",{},()=>[b[0]||(b[0]=g("span",{class:"m-button__spinner","aria-hidden":"true"},null,-1))],!0,0):p.$slots.icon||e.icon?le(p.$slots,"icon",{},()=>[e.icon?(v(),we(Ie,{key:0,name:e.icon,class:"m-button__icon"},null,8,["name"])):Q("",!0)],!0,1):Q("",!0),p.$slots.default?(v(),y("span",cf,[le(p.$slots,"default",{},void 0,!0)])):Q("",!0)],10,df))}}),mf=ce(uf,[["__scopeId","data-v-24a69be3"]]),pf=["aria-label"],ff=C({name:"MButtonGroup",__name:"ButtonGroup",props:{size:{default:"medium"},ariaLabel:{default:void 0}},setup(e){const t=e;return At(yd,{size:x(()=>t.size)}),(n,s)=>(v(),y("div",{class:"m-button-group",role:"group","aria-label":e.ariaLabel},[le(n.$slots,"default",{},void 0,!0)],8,pf))}}),vf=ce(ff,[["__scopeId","data-v-9eb1ae1c"]]),R=ke(mf,_e("Button")),ho=ke(vf,_e("ButtonGroup")),gf=["role","tabindex"],bf={key:0,class:"m-card__header"},yf={class:"m-card__body"},hf={key:1,class:"m-card__footer"},Mf=C({name:"MCard",__name:"Card",props:{hoverable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},padding:{default:"medium"}},emits:["click"],setup(e,{emit:t}){const n=e,s=t,o=bn(),a={none:"0",small:"var(--m-space-4)",medium:"var(--m-space-5)",large:"var(--m-space-6)"},i=x(()=>a[n.padding]??n.padding),l=x(()=>({"m-card--hoverable":n.hoverable||n.clickable,"m-card--clickable":n.clickable})),d=x(()=>({"--m-card-padding":i.value}));function u(b){const h=b.target;return h instanceof HTMLElement?!!h.closest("a, button, input, select, textarea, [data-no-card-click]"):!1}function m(b){u(b)||s("click",b)}function p(b){n.clickable&&(b.key!=="Enter"&&b.key!==" "||u(b)||(b.preventDefault(),s("click",b)))}return(b,h)=>(v(),y("div",{class:de(["m-card",l.value]),style:$e(d.value),role:e.clickable?"button":void 0,tabindex:e.clickable?0:void 0,onClick:m,onKeydown:p},[r(o).header?(v(),y("div",bf,[le(b.$slots,"header",{},void 0,!0)])):Q("",!0),g("div",yf,[le(b.$slots,"default",{},void 0,!0)]),r(o).footer?(v(),y("div",hf,[le(b.$slots,"footer",{},void 0,!0)])):Q("",!0)],46,gf))}}),_f=ce(Mf,[["__scopeId","data-v-a3d5bc1e"]]),pt=ke(_f,_e("Card"));function vt(e){return`${e}-${pu()}`}const hd=Symbol("MCheckboxGroupContext"),kf={class:"m-checkbox__control"},wf=["id","checked","disabled","name","value","aria-checked"],xf={class:"m-checkbox__box","aria-hidden":"true"},Bf={key:0,class:"m-checkbox__label"},Cf=C({name:"MCheckbox",__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},value:{default:void 0},label:{default:void 0},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},id:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=Ze(hd,null),a=vt("m-checkbox"),i=z(null),l=x(()=>n.disabled||!!o?.disabled.value),d=x(()=>o?.size.value??n.size),u=x(()=>o?n.value!==void 0&&o.modelValue.value.includes(n.value):n.modelValue),m=x(()=>[`m-checkbox--${d.value}`,{"is-checked":u.value,"is-indeterminate":n.indeterminate,"is-disabled":l.value}]),p=x(()=>n.name??o?.name.value);iu(()=>{i.value&&(i.value.indeterminate=n.indeterminate)}),gn(()=>{i.value&&(i.value.indeterminate=n.indeterminate)});function b(h){const B=h.target.checked;o?n.value!==void 0&&o.toggle(n.value,B):s("update:modelValue",B),s("change",B,h)}return(h,B)=>(v(),y("label",{class:de(["m-checkbox",m.value])},[g("span",kf,[g("input",{id:e.id??r(a),ref_key:"nativeRef",ref:i,class:"m-checkbox__native",type:"checkbox",checked:u.value,disabled:l.value,name:p.value,value:e.value,"aria-checked":e.indeterminate?"mixed":void 0,onChange:b},null,40,wf),g("span",xf,[e.indeterminate?(v(),we(Ie,{key:0,name:"minus",class:"m-checkbox__mark"})):u.value?(v(),we(Ie,{key:1,name:"check",class:"m-checkbox__mark"})):Q("",!0)])]),e.label||h.$slots.default?(v(),y("span",Bf,[le(h.$slots,"default",{},()=>[_(L(e.label),1)],!0)])):Q("",!0)],2))}}),Md=ce(Cf,[["__scopeId","data-v-62d96f2c"]]),$f=["aria-label"],Tf=C({name:"MCheckboxGroup",__name:"CheckboxGroup",props:{modelValue:{default:()=>[]},options:{default:()=>[]},disabled:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=x(()=>n.modelValue??[]);function a(i,l){if(n.disabled)return;const d=l?o.value.includes(i)?o.value:[...o.value,i]:o.value.filter(u=>u!==i);s("update:modelValue",d),s("change",d)}return At(hd,{modelValue:o,disabled:x(()=>n.disabled),size:x(()=>n.size),name:x(()=>n.name),toggle:a}),(i,l)=>(v(),y("div",{class:"m-checkbox-group",role:"group","aria-label":e.ariaLabel},[le(i.$slots,"default",{},()=>[(v(!0),y(ie,null,xe(e.options,d=>(v(),we(Md,{key:d.value,value:d.value,label:d.label,disabled:d.disabled},null,8,["value","label","disabled"]))),128))],!0)],8,$f))}}),If=ce(Tf,[["__scopeId","data-v-0bce2121"]]),jt=ke(Md,_e("Checkbox")),gi=ke(If,_e("CheckboxGroup")),Vf={class:"m-empty__icon","aria-hidden":"true"},Sf={key:0,class:"m-empty__title"},zf={key:1,class:"m-empty__description"},Af={key:2,class:"m-empty__extra"},Df={key:3,class:"m-empty__action"},Ef=C({name:"MEmpty",__name:"Empty",props:{title:{default:"暂无数据"},description:{default:void 0},icon:{default:"inbox"},compact:{type:Boolean,default:!1}},setup(e){const t=e,n=bn(),s=x(()=>({"m-empty--compact":t.compact}));return(o,a)=>(v(),y("div",{class:de(["m-empty",s.value]),role:"status"},[g("span",Vf,[le(o.$slots,"icon",{},()=>[c(Ie,{name:e.icon},null,8,["name"])],!0)]),e.title?(v(),y("p",Sf,L(e.title),1)):Q("",!0),e.description?(v(),y("div",zf,L(e.description),1)):Q("",!0),r(n).default?(v(),y("div",Af,[le(o.$slots,"default",{},void 0,!0)])):Q("",!0),r(n).action?(v(),y("div",Df,[le(o.$slots,"action",{},void 0,!0)])):Q("",!0)],2))}}),bi=ce(Ef,[["__scopeId","data-v-53dd21b7"]]),Rf=["aria-busy"],Pf=["role","tabindex","aria-label"],Lf=["aria-sort"],Of=["aria-label","onClick"],Ff={class:"m-data-table__sort-label"},Nf={key:0},Jf=["colspan"],Gf={key:0,class:"m-data-table__loading",role:"status"},Uf=C({name:"MDataTable",__name:"DataTable",props:{columns:{},rows:{},rowKey:{default:void 0},caption:{default:void 0},captionVisible:{type:Boolean,default:!1},size:{default:"medium"},height:{default:void 0},maxHeight:{default:void 0},loading:{type:Boolean,default:!1},emptyText:{default:"暂无数据"},sort:{default:void 0},defaultSort:{default:void 0},layout:{default:"auto"}},emits:["update:sort","sort-change"],setup(e,{emit:t}){const n=e,s=t,o=z(n.defaultSort?{...n.defaultSort}:null),a=x(()=>n.sort!==void 0),i=x(()=>a.value?n.sort??null:o.value),l=x(()=>Math.max(n.columns.length,1));function d(N){if(!(N===void 0||N===""))return typeof N=="number"?`${N}px`:N}function u(N){if(typeof N=="number")return Number.isFinite(N)?N:null;if(typeof N=="string"){const j=N.trim();if(/^\d+(\.\d+)?px$/.test(j))return Number.parseFloat(j)}return null}const m=new Set;De(()=>n.columns,N=>{for(const j of N)j.fixed&&u(j.width)===null&&!m.has(j.key)&&(m.add(j.key),console.warn(`[anemia-ui] MDataTable: column "${j.key}" is fixed but has no pixel width; it will not stick.`))},{immediate:!0});const p=x(()=>n.columns.some(N=>N.fixed&&u(N.width)!==null)),b=x(()=>n.layout==="fixed"||p.value),h=x(()=>{const N={};let j=0;for(const se of n.columns){const pe=u(se.width);se.fixed==="left"&&pe!==null&&(N[se.key]={left:j},j+=pe)}let ee=0;for(let se=n.columns.length-1;se>=0;se-=1){const pe=n.columns[se];if(pe?.fixed==="right"){const ze=u(pe.width);ze!==null&&(N[pe.key]={...N[pe.key]??{},right:ee},ee+=ze)}}return N}),B=x(()=>{let N=0,j=!1;for(const ee of n.columns){const se=u(ee.width)??u(ee.minWidth);se!==null?(N+=se,j=!0):N+=120}return j?`${N}px`:void 0}),I=x(()=>B.value?{minWidth:B.value}:void 0),V=x(()=>{const N={},j=d(n.height),ee=d(n.maxHeight);return j?N.height=j:ee&&(N.maxHeight=ee),Object.keys(N).length>0?N:void 0}),A=x(()=>!!(d(n.height)||d(n.maxHeight)||p.value)),D=x(()=>[`m-data-table--${n.size}`,{"is-fixed-layout":b.value,"is-scrollable":A.value,"is-loading":n.loading}]);function E(N,j){return N[j]}function F(N){return N==null?"—":String(N)}function q(N){return N==null}function re(N,j){if(!n.rowKey)return j;const ee=E(N,n.rowKey);return ee==null||ee===""?j:typeof ee=="string"||typeof ee=="number"?ee:String(ee)}function Y(N,j){return typeof N=="number"&&typeof j=="number"?N-j:typeof N=="boolean"&&typeof j=="boolean"?Number(N)-Number(j):String(N).localeCompare(String(j),"zh-Hans-CN",{numeric:!0})}const X=x(()=>{const N=i.value;if(!N)return n.rows;const j=n.columns.find(se=>se.key===N.key&&se.sortable);if(!j)return n.rows;const ee=N.order==="asc"?1:-1;return n.rows.map((se,pe)=>({row:se,index:pe})).sort((se,pe)=>{const ze=E(se.row,j.key),me=E(pe.row,j.key),Le=ze==null||ze==="",Ge=me==null||me==="";if(Le&&Ge)return se.index-pe.index;if(Le)return 1;if(Ge)return-1;const rt=Y(ze,me)*ee;return rt===0?se.index-pe.index:rt}).map(se=>se.row)});function G(N){if(!N.sortable)return;const j=i.value;return!j||j.key!==N.key?"none":j.order==="asc"?"ascending":"descending"}function S(N){const j=i.value;return j?.key===N.key&&j.order==="asc"?"chevron-up":"chevron-down"}function w(N){const j=i.value;return!j||j.key!==N.key?`按「${N.title}」升序排序`:j.order==="asc"?`按「${N.title}」降序排序`:`取消「${N.title}」排序`}function $(N){if(!N.sortable)return;const j=i.value;let ee;!j||j.key!==N.key?ee={key:N.key,order:"asc"}:j.order==="asc"?ee={key:N.key,order:"desc"}:ee=null,a.value||(o.value=ee),s("update:sort",ee),s("sort-change",ee)}function P(N){const j={},ee=d(N.width),se=d(N.minWidth);ee&&(j.width=ee),se&&(j.minWidth=se),N.align&&(j.textAlign=N.align);const pe=h.value[N.key];return pe?.left!==void 0&&(j.left=`${pe.left}px`),pe?.right!==void 0&&(j.right=`${pe.right}px`),Object.keys(j).length>0?j:void 0}function Z(N,j=!1){const ee=!!N.fixed&&u(N.width)!==null;return{"is-sortable":j&&!!N.sortable,"is-align-left":j&&N.align==="left","is-align-center":j&&N.align==="center","is-align-right":j&&N.align==="right","is-fixed":ee,"is-fixed-left":ee&&N.fixed==="left","is-fixed-right":ee&&N.fixed==="right"}}const ye={row:void 0,column:{key:"empty",title:""},value:void 0,index:-1};return(N,j)=>(v(),y("div",{class:de(["m-data-table",D.value]),"aria-busy":e.loading?"true":void 0},[g("div",{class:"m-data-table__scroll",style:$e(V.value),role:A.value?"region":void 0,tabindex:A.value?0:void 0,"aria-label":A.value?e.caption??"数据表格":void 0},[g("table",{class:"m-data-table__table",style:$e(I.value)},[e.caption?(v(),y("caption",{key:0,class:de(e.captionVisible?"m-data-table__caption":"m-sr-only")},L(e.caption),3)):Q("",!0),g("thead",null,[g("tr",null,[(v(!0),y(ie,null,xe(e.columns,ee=>(v(),y("th",{key:ee.key,scope:"col",class:de(Z(ee,!0)),style:$e(P(ee)),"aria-sort":G(ee)},[ee.sortable?(v(),y("button",{key:0,type:"button",class:"m-data-table__sort","aria-label":w(ee),onClick:se=>$(ee)},[g("span",Ff,L(ee.title),1),c(Ie,{class:de(["m-data-table__sort-icon",{"is-active":i.value?.key===ee.key}]),name:S(ee),size:14},null,8,["class","name"])],8,Of)):(v(),y(ie,{key:1},[_(L(ee.title),1)],64))],14,Lf))),128))])]),g("tbody",null,[(v(!0),y(ie,null,xe(X.value,(ee,se)=>(v(),y("tr",{key:re(ee,se)},[(v(!0),y(ie,null,xe(e.columns,pe=>(v(),y("td",{key:pe.key,class:de(Z(pe)),style:$e(P(pe))},[N.$slots[pe.key]?le(N.$slots,pe.key,{row:ee,column:pe,value:E(ee,pe.key),index:se},void 0,!0,0):(v(),y("span",{key:1,class:de({"m-data-table__muted":q(E(ee,pe.key))})},L(F(E(ee,pe.key))),3))],6))),128))]))),128)),X.value.length?Q("",!0):(v(),y("tr",Nf,[g("td",{class:"m-data-table__empty",colspan:l.value},[le(N.$slots,"empty",Sa(Io(ye)),()=>[c(bi,{compact:"",title:e.emptyText},null,8,["title"])],!0)],8,Jf)]))])],4)],12,Pf),e.loading?(v(),y("div",Gf,[le(N.$slots,"loading",Sa(Io(ye)),()=>[c(Ie,{name:"loader",size:18,class:"m-data-table__spinner"}),j[0]||(j[0]=g("span",null,"加载中",-1))],!0)])):Q("",!0)],10,Rf))}}),jf=ce(Uf,[["__scopeId","data-v-96e27364"]]),eo=ke(jf,_e("DataTable")),_d=Symbol("m-descriptions"),Wf=C({name:"MDescriptions",__name:"Descriptions",props:{columns:{default:3},bordered:{type:Boolean,default:!1},layout:{default:"horizontal"},size:{default:"medium"},labelWidth:{default:void 0}},setup(e){const t=e,n=x(()=>{const a=Math.floor(t.columns);return Number.isFinite(a)?Math.max(1,a):1});At(_d,{columns:n,layout:x(()=>t.layout),size:x(()=>t.size),bordered:x(()=>t.bordered)});const s=x(()=>({[`m-descriptions--${t.layout}`]:!0,[`m-descriptions--${t.size}`]:!0,"m-descriptions--bordered":t.bordered})),o=x(()=>({"--m-descriptions-columns":String(n.value),...t.labelWidth?{"--m-descriptions-label-width":t.labelWidth}:{}}));return(a,i)=>(v(),y("dl",{class:de(["m-descriptions",s.value]),style:$e(o.value)},[le(a.$slots,"default",{},void 0,!0)],6))}}),Hf=ce(Wf,[["__scopeId","data-v-d3f83af1"]]),qf={class:"m-descriptions__label"},Kf={class:"m-descriptions__value"},Qf=C({name:"MDescriptionsItem",__name:"DescriptionsItem",props:{label:{},span:{default:1}},setup(e){const t=e,n=Ze(_d,null),s=x(()=>n?.columns.value??3),o=x(()=>n?.layout.value??"horizontal"),a=x(()=>n?.size.value??"medium"),i=x(()=>n?.bordered.value??!1),l=x(()=>{const m=Number.isFinite(t.span)?Math.floor(t.span):1;return Math.min(Math.max(m,1),s.value)}),d=x(()=>({[`m-descriptions__item--${o.value}`]:!0,[`m-descriptions__item--${a.value}`]:!0,"m-descriptions__item--bordered":i.value})),u=x(()=>({gridColumn:`span ${l.value}`}));return(m,p)=>(v(),y("div",{class:de(["m-descriptions__item",d.value]),style:$e(u.value)},[g("dt",qf,L(e.label),1),g("dd",Kf,[le(m.$slots,"default")])],6))}}),to=ke(Hf,_e("Descriptions")),Ne=ke(Qf,_e("DescriptionsItem")),Yf=["aria-orientation"],Xf={class:"m-divider__content"},Zf=C({name:"MDivider",__name:"Divider",props:{direction:{default:"horizontal"},contentPosition:{default:"center"}},setup(e){const t=e,n=bn(),s=x(()=>!!n.default&&t.direction==="horizontal"),o=x(()=>[`m-divider--${t.direction}`,`m-divider--${t.contentPosition}`,{"has-content":s.value}]);return(a,i)=>(v(),y("div",{class:de(["m-divider",o.value]),role:"separator","aria-orientation":e.direction==="vertical"?"vertical":"horizontal"},[s.value?(v(),y(ie,{key:0},[i[0]||(i[0]=g("span",{class:"m-divider__line","aria-hidden":"true"},null,-1)),g("span",Xf,[le(a.$slots,"default",{},void 0,!0)]),i[1]||(i[1]=g("span",{class:"m-divider__line","aria-hidden":"true"},null,-1))],64)):Q("",!0)],10,Yf))}}),ev=ce(Zf,[["__scopeId","data-v-64da3a41"]]),Xt=ke(ev,_e("Divider")),Bt=typeof window<"u"&&typeof document<"u",tv=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])','[tabindex]:not([tabindex="-1"])'].join(",");function nv(e){if(e.hidden||e.closest("[hidden]"))return!1;const t=window.getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}function kd(e){return Array.from(e.querySelectorAll(tv)).filter(t=>t.tabIndex>=0&&nv(t))}function sv(e){(kd(e)[0]??e).focus({preventScroll:!0})}function ov(e,t){if(e.key!=="Tab")return;const n=kd(t);if(n.length===0){e.preventDefault(),t.focus({preventScroll:!0});return}const s=n[0],o=n[n.length-1],a=document.activeElement;if(e.shiftKey){(a===s||!t.contains(a))&&(e.preventDefault(),o.focus());return}(a===o||!t.contains(a))&&(e.preventDefault(),s.focus())}const vl=1100,av=10,Un=[];let Ca=null,Ds=0,wd="",xd="";function Bd(){if(!Bt)return vl;if(Ca===null){const e=window.getComputedStyle(document.documentElement).getPropertyValue("--m-z-index-overlay"),t=Number.parseInt(e.trim(),10);Number.isFinite(t)&&(Ca=t)}return Ca??vl}function gl(){const e=Bd();Un.forEach((t,n)=>{t.zIndex.value=e+n*av})}function iv(){return Un[Un.length-1]}function lv(){if(Bt){if(Ds===0){const e=document.body;wd=e.style.overflow,xd=e.style.paddingRight;const t=window.innerWidth-document.documentElement.clientWidth;if(e.style.overflow="hidden",t>0){const n=Number.parseFloat(window.getComputedStyle(e).paddingRight)||0;e.style.paddingRight=`${n+t}px`}}Ds+=1}}function rv(){Bt&&(Ds=Math.max(0,Ds-1),Ds===0&&(document.body.style.overflow=wd,document.body.style.paddingRight=xd))}function es(e){const t=z(Bd());let n=null;function s(){return n!==null&&iv()===n}function o(u){if(!(!n||!s())){if(u.key==="Escape"){u.preventDefault(),u.stopPropagation(),It(e.closeOnEscape)!==!1&&e.onDismiss?.("escape");return}n.trapFocus&&e.panel.value&&ov(u,e.panel.value)}}function a(u){if(!n||!s()||u.button!==0||It(e.closeOnOutside)===!1)return;const m=u.target;!(m instanceof Node)||e.panel.value?.contains(m)||(e.ignore?.()??[]).some(b=>b?.contains(m))||e.onDismiss?.("outside")}function i(){const u=e.panel.value;if(!u)return;const m=e.initialFocus?.();if(m){m.focus({preventScroll:!0});return}if(u.hasAttribute("tabindex")){u.focus({preventScroll:!0});return}sv(u)}function l(){if(n||!Bt)return;const u={zIndex:t,panel:e.panel,previouslyFocused:document.activeElement instanceof HTMLElement?document.activeElement:null,scrollLocked:!!It(e.lockScroll),trapFocus:!!It(e.trapFocus),restoreFocus:It(e.restoreFocus)!==!1};n=u,Un.push(u),gl(),u.scrollLocked&&lv(),document.addEventListener("keydown",o,!0),document.addEventListener("pointerdown",a,!0),(u.trapFocus||e.initialFocus)&&lt(()=>{n===u&&i()})}function d(){if(!n)return;const u=n;n=null,document.removeEventListener("keydown",o,!0),document.removeEventListener("pointerdown",a,!0);const m=Un.indexOf(u),p=m!==-1&&m===Un.length-1;if(m!==-1&&Un.splice(m,1),gl(),u.scrollLocked&&rv(),u.restoreFocus&&p){const b=u.previouslyFocused;b?.isConnected&&b.focus({preventScroll:!0})}}return De(()=>e.open(),u=>{u?l():d()},{immediate:!0,flush:"post"}),gn(()=>{e.open()&&l()}),kt(d),{zIndex:mn(t)}}const dv=["id","aria-labelledby","aria-label"],cv={key:0,class:"m-drawer__header"},uv=["id"],mv={class:"m-drawer__body"},pv={key:1,class:"m-drawer__footer"},fv=C({name:"MDrawer",__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},title:{default:void 0},placement:{default:"right"},size:{default:"medium"},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},hideMode:{default:"unmount"},ariaLabel:{default:void 0},id:{default:void 0}},emits:["update:modelValue","close","opened","closed"],setup(e,{emit:t}){const n=e,s=t,o=z(null),a=vt("m-drawer-title"),i=x(()=>n.hideMode==="display"||n.modelValue),{zIndex:l}=es({open:()=>n.modelValue,panel:o,closeOnEscape:()=>n.closable,closeOnOutside:()=>n.maskClosable,lockScroll:()=>n.lockScroll,trapFocus:!0,restoreFocus:!0,onDismiss:u=>d(u==="escape"?"escape":"mask")});function d(u,m){s("update:modelValue",!1),s("close",u,m)}return(u,m)=>(v(),we(fn,{to:"body"},[c(Zn,{name:"m-drawer",onAfterEnter:m[1]||(m[1]=p=>s("opened")),onAfterLeave:m[2]||(m[2]=p=>s("closed"))},{default:f(()=>[i.value?An((v(),y("div",{key:0,class:de(["m-drawer",`m-drawer--${e.placement}`]),style:$e({zIndex:r(l)})},[m[3]||(m[3]=g("div",{class:"m-drawer__mask","aria-hidden":"true"},null,-1)),g("div",{id:e.id,ref_key:"panelRef",ref:o,class:de(["m-drawer__panel",[`m-drawer__panel--${e.placement}`,`m-drawer__panel--${e.size}`]]),role:"dialog","aria-modal":"true","aria-labelledby":e.title&&!u.$slots.header?r(a):void 0,"aria-label":e.title&&!u.$slots.header?void 0:e.ariaLabel,tabindex:"-1"},[e.title||u.$slots.header||e.closable?(v(),y("header",cv,[le(u.$slots,"header",{},()=>[g("h2",{id:r(a),class:"m-drawer__title"},L(e.title),9,uv)],!0),e.closable?(v(),y("button",{key:0,type:"button",class:"m-drawer__close","aria-label":"关闭抽屉",onClick:m[0]||(m[0]=p=>d("close-button",p))},[c(Ie,{name:"close",size:18})])):Q("",!0)])):Q("",!0),g("div",mv,[le(u.$slots,"default",{},void 0,!0)]),u.$slots.footer?(v(),y("footer",pv,[le(u.$slots,"footer",{},void 0,!0)])):Q("",!0)],10,dv)],6)),[[Dn,e.hideMode==="display"?e.modelValue:!0]]):Q("",!0)]),_:3})]))}}),vv=ce(fv,[["__scopeId","data-v-b83fce27"]]),no=ke(vv,_e("Drawer")),gv=8,bv=8;function bl(e,t,n){return Math.min(Math.max(e,t),Math.max(t,n))}function so(e){const t=z({position:"fixed",top:"-9999px",left:"-9999px",visibility:"visible"}),n=z(It(e.placement)??"bottom"),s=e.offset??gv,o=e.viewportPadding??bv;let a=!1,i=!1;function l(){if(!Bt)return;const m=e.trigger.value,p=e.panel.value;if(!m||!p)return;const b=m.getBoundingClientRect(),h=window.innerWidth,B=window.innerHeight;if((b.width>0||b.height>0)&&(b.bottom<=0||b.top>=B||b.right<=0||b.left>=h)){t.value={...t.value,visibility:"hidden"},i||(i=!0,e.onReferenceHidden?.());return}i=!1;const A=!!It(e.matchWidth),D=A?Math.max(0,Math.min(b.width,h-o*2)):0;A&&D>0&&(p.style.width=`${Math.round(D)}px`);const E=A&&D>0?D:p.offsetWidth,F=p.offsetHeight;let q=It(e.placement)??"bottom";const re={top:b.top>=F+s+o,bottom:B-b.bottom>=F+s+o,left:b.left>=E+s+o,right:h-b.right>=E+s+o},Y={top:"bottom",bottom:"top",left:"right",right:"left"};re[q]||(q=Y[q]);const X=It(e.align)??"center";let G=0,S=0;q==="top"||q==="bottom"?(X==="start"?S=b.left:X==="end"?S=b.right-E:S=b.left+b.width/2-E/2,G=q==="top"?b.top-F-s:b.bottom+s):(X==="start"?G=b.top:X==="end"?G=b.bottom-F:G=b.top+b.height/2-F/2,S=q==="left"?b.left-E-s:b.right+s),S=bl(S,o,h-E-o),G=bl(G,o,B-F-o),n.value=q,t.value={position:"fixed",top:`${Math.round(G)}px`,left:`${Math.round(S)}px`,visibility:"visible",...A&&D>0?{width:`${Math.round(D)}px`}:{}}}function d(){!Bt||a||(a=!0,window.addEventListener("resize",l,{passive:!0}),window.addEventListener("scroll",l,!0))}function u(){!Bt||!a||(a=!1,window.removeEventListener("resize",l),window.removeEventListener("scroll",l,!0))}return De(()=>e.open(),m=>{m?(t.value={position:"fixed",top:"-9999px",left:"-9999px",visibility:"visible"},d(),lt(l)):(u(),t.value={...t.value,visibility:"hidden"})},{immediate:!0}),De(()=>[It(e.placement),It(e.align)],()=>{e.open()&&lt(l)}),kt(u),{style:t,actualPlacement:n,update:l}}const yv=["aria-disabled","aria-expanded"],hv=["aria-label"],Mv={key:0,class:"m-dropdown__empty"},_v={key:0,class:"m-dropdown__divider",role:"separator"},kv=["disabled","onClick"],wv={class:"m-dropdown__label"},xv=C({name:"MDropdown",__name:"Dropdown",props:{items:{default:()=>[]},placement:{default:"bottom"},align:{default:"start"},modelValue:{type:Boolean,default:void 0},trigger:{default:"click"},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},minWidth:{default:200},closeOnSelect:{type:Boolean,default:!0},ariaLabel:{default:void 0}},emits:["select","update:modelValue","visible-change"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=z(null),i=z(null),l=z(!1),u=`${vt("m-dropdown")}-menu`,m=x(()=>s.trigger??"click"),p=x(()=>s.modelValue??l.value),b=x(()=>s.hideMode==="display"||p.value),{style:h,actualPlacement:B}=so({trigger:a,panel:i,open:()=>p.value,placement:()=>s.placement,align:()=>s.align,offset:6,onReferenceHidden:()=>F()}),{zIndex:I}=es({open:()=>p.value,panel:i,ignore:()=>[a.value],closeOnEscape:!0,closeOnOutside:()=>m.value==="click",restoreFocus:!0,initialFocus:()=>A()??i.value,onDismiss:()=>F()});function V(){return Array.from(i.value?.querySelectorAll('[role="menuitem"]:not(:disabled)')??[])}function A(){return V()[0]??null}function D(S){S&&s.disabled||S!==p.value&&(s.modelValue===void 0&&(l.value=S),o("update:modelValue",S))}function E(){D(!0)}function F(){D(!1)}function q(){D(!p.value)}function re(){m.value!=="manual"&&q()}function Y(S){S.disabled||(o("select",S.key,S),s.closeOnSelect?F():lt(()=>A()?.focus({preventScroll:!0})))}function X(S){const w=V();if(w.length===0)return;const $=(S+w.length)%w.length;w[$]?.focus({preventScroll:!0})}function G(S){const w=V(),$=w.indexOf(document.activeElement);switch(S.key){case"ArrowDown":S.preventDefault(),X($+1);break;case"ArrowUp":S.preventDefault(),X($-1);break;case"Home":S.preventDefault(),X(0);break;case"End":S.preventDefault(),X(w.length-1);break;case"Tab":S.preventDefault(),F();break}}return De(p,S=>o("visible-change",S),{flush:"post"}),De(()=>s.modelValue,S=>{S!==void 0&&(l.value=S)},{immediate:!0}),De(()=>s.disabled,S=>{S&&F()}),t({open:E,close:F,toggle:q}),(S,w)=>(v(),y("span",{class:de(["m-dropdown",{"is-open":p.value,"is-disabled":e.disabled}])},[g("span",{ref_key:"triggerRef",ref:a,class:"m-dropdown__trigger","aria-disabled":e.disabled||void 0,"aria-expanded":p.value,"aria-haspopup":"menu","aria-controls":u,onClick:re},[le(S.$slots,"default",{},void 0,!0)],8,yv),(v(),we(fn,{to:"body"},[c(Zn,{name:"m-dropdown"},{default:f(()=>[b.value?An((v(),y("div",{key:0,id:u,ref_key:"menuRef",ref:i,class:de(["m-dropdown__menu",`m-dropdown__menu--${r(B)}`]),style:$e({...r(h),minWidth:`${e.minWidth}px`,zIndex:r(I)}),role:"menu","aria-label":e.ariaLabel,tabindex:"-1",onKeydown:G},[e.items.length===0?(v(),y("div",Mv,[le(S.$slots,"empty",{},()=>[w[0]||(w[0]=_("暂无操作",-1))],!0)])):Q("",!0),(v(!0),y(ie,null,xe(e.items,($,P)=>(v(),y(ie,{key:$.key},[$.divided?(v(),y("div",_v)):Q("",!0),g("button",{type:"button",class:de(["m-dropdown__item",{"is-danger":$.danger}]),role:"menuitem",disabled:$.disabled,tabindex:"-1",onClick:pn(Z=>Y($),["stop"])},[le(S.$slots,"item",{item:$,index:P},()=>[$.icon?(v(),we(Ie,{key:0,name:$.icon,class:"m-dropdown__icon"},null,8,["name"])):Q("",!0),g("span",wv,L($.label),1)],!0)],10,kv)],64))),128))],46,hv)),[[Dn,e.hideMode==="display"?p.value:!0]]):Q("",!0)]),_:3})]))],2))}}),Bv=ce(xv,[["__scopeId","data-v-493c7a64"]]),gs=ke(Bv,_e("Dropdown")),us=ke(bi,_e("Empty")),Cd=Symbol("MForm"),$d=Symbol("MFormItem");function yl(e){return e?Array.isArray(e)?e:[e]:[]}const Cv=["aria-label"],$v=C({name:"MForm",__name:"Form",props:{model:{default:()=>({})},rules:{default:()=>({})},labelPosition:{default:"top"},labelWidth:{default:void 0},disabled:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},ariaLabel:{default:void 0}},emits:["submit","validate"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=new Map,i={...s.model},l=x(()=>s.labelWidth?{"--m-form-label-width":s.labelWidth}:void 0);At(Cd,{model:x(()=>s.model),rules:x(()=>s.rules),disabled:x(()=>s.disabled),showMessage:x(()=>s.showMessage),registerField(h){a.set(h.prop,h)},unregisterField(h){a.delete(h)}});async function d(h){const B=a.get(h);if(!B)return!0;const I=await B.validate("submit");return o("validate",h,I,B.error()),I}async function u(){const h=Array.from(a.values());return(await Promise.all(h.map(async I=>{const V=await I.validate("submit");return o("validate",I.prop,V,I.error()),V}))).every(Boolean)}function m(){Object.assign(s.model,i);for(const h of a.values())h.reset()}function p(h){if(h){a.get(h)?.clearValidate();return}for(const B of a.values())B.clearValidate()}async function b(){o("submit",await u())}return t({validate:u,validateField:d,resetFields:m,clearValidate:p}),(h,B)=>(v(),y("form",{class:de(["m-form",[`m-form--${e.labelPosition}`,{"is-disabled":e.disabled}]]),style:$e(l.value),novalidate:"","aria-label":e.ariaLabel,onSubmit:pn(b,["prevent"])},[le(h.$slots,"default",{},void 0,!0)],46,Cv))}}),Tv=ce($v,[["__scopeId","data-v-8024c993"]]),Iv=["for"],Vv={key:0,class:"m-form-item__required","aria-hidden":"true"},Sv=["id"],zv={key:1,class:"m-form-item__hint"},Av=C({name:"MFormItem",__name:"FormItem",props:{prop:{default:void 0},label:{default:void 0},required:{type:Boolean,default:!1},rules:{default:void 0},error:{default:void 0},hint:{default:void 0},labelWidth:{default:void 0},for:{default:void 0},showMessage:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},setup(e,{expose:t}){const n=e,s=Ze(Cd,null),o=vt("m-form-item"),a=x(()=>`${o}-error`),i=z(""),l=z(null),d=x(()=>[...yl(n.prop?s?.rules.value[n.prop]:void 0),...yl(n.rules)]),u=x(()=>n.required||d.value.some(w=>w.required===!0)),m=x(()=>n.error??i.value),p=x(()=>n.showMessage&&(s?.showMessage.value??!0)),b=x(()=>p.value&&m.value.length>0),h=x(()=>n.disabled||!!s?.disabled.value),B=x(()=>n.labelWidth?{width:n.labelWidth}:void 0);At($d,{disabled:h,error:m,errorId:a,validate:w=>E(w)});function I(w){return w==null||w===""||Array.isArray(w)&&w.length===0}function V(w){const $=s?.model.value;if($)return w.split(".").reduce((P,Z)=>{if(!(P===null||typeof P!="object"))return P[Z]},$)}function A(w,$){return $==="submit"||!w.trigger?!0:(Array.isArray(w.trigger)?w.trigger:[w.trigger]).includes($)}async function D(w,$){if(w.required&&I($))return w.message??"此项为必填项";if(!I($)){if(w.pattern&&typeof $=="string"&&!w.pattern.test($))return w.message??"格式不正确";if(typeof w.min=="number"||typeof w.max=="number"){const P=typeof $=="number"?$:typeof $=="string"||Array.isArray($)?$.length:void 0;if(P!==void 0){if(typeof w.min=="number"&&P<w.min)return w.message??(typeof $=="number"?`不能小于 ${w.min}`:`不能少于 ${w.min} 个字符`);if(typeof w.max=="number"&&P>w.max)return w.message??(typeof $=="number"?`不能大于 ${w.max}`:`不能超过 ${w.max} 个字符`)}}}if(w.validator)try{const P=await w.validator($,s?.model.value??{});if(P===!1)return w.message??"校验未通过";if(typeof P=="string"&&P.length>0)return P}catch(P){return P instanceof Error&&P.message?P.message:"校验未通过"}return null}async function E(w="submit"){if(!n.prop)return i.value="",!0;const $=d.value.filter(Z=>A(Z,w));if($.length===0)return i.value="",!0;const P=V(n.prop);for(const Z of $){const ye=await D(Z,P);if(ye)return i.value=ye,!1}return i.value="",!0}function F(){i.value=""}function q(){i.value=""}let re=null;function Y(){if(!s||!n.prop)return;const w={prop:n.prop,validate:E,reset:F,clearValidate:q,error:()=>m.value};s.registerField(w),re=n.prop}function X(){!s||!re||(s.unregisterField(re),re=null)}De(()=>n.prop,()=>{X(),Y()},{immediate:!0}),kt(X);function G(w){const $=w.relatedTarget;$ instanceof Node&&l.value?.contains($)||s&&n.prop&&E("blur")}function S(){!s||!n.prop||lt(()=>E("change"))}return t({validate:()=>E("submit"),reset:F,clearValidate:q}),(w,$)=>(v(),y("div",{class:de(["m-form-item",{"is-error":!!m.value,"is-required":u.value,"is-disabled":h.value}])},[e.label||w.$slots.label?(v(),y("label",{key:0,class:"m-form-item__label",for:n.for,style:$e(B.value)},[le(w.$slots,"label",{},()=>[_(L(e.label),1)],!0),u.value?(v(),y("span",Vv,"*")):Q("",!0)],12,Iv)):Q("",!0),g("div",{ref_key:"contentRef",ref:l,class:"m-form-item__content",onFocusout:G,onInput:S,onChange:S},[le(w.$slots,"default",{},void 0,!0),b.value?(v(),y("p",{key:0,id:a.value,class:"m-form-item__error",role:"alert"},L(m.value),9,Sv)):e.hint?(v(),y("p",zv,L(e.hint),1)):Q("",!0)],544)],2))}}),Dv=ce(Av,[["__scopeId","data-v-e7ce8d8c"]]),js=ke(Tv,_e("Form")),cn=ke(Dv,_e("FormItem")),Ev=C({name:"MGrid",__name:"Grid",props:{columns:{default:void 0},minColumnWidth:{default:"220px"},gap:{default:4},rowGap:{default:void 0},dense:{type:Boolean,default:!1},as:{default:"div"}},setup(e){const t=e,n=x(()=>({"m-grid--dense":t.dense})),s=x(()=>({gridTemplateColumns:t.columns!==void 0?`repeat(${t.columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(100%, ${t.minColumnWidth}), 1fr))`,gap:`var(--m-space-${t.gap})`,rowGap:`var(--m-space-${t.rowGap??t.gap})`}));return(o,a)=>(v(),we(Qo(e.as),{class:de(["m-grid",n.value]),style:$e(s.value)},{default:f(()=>[le(o.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}}),Rv=ce(Ev,[["__scopeId","data-v-67ef1f89"]]),ta=ke(Rv,_e("Grid")),Et=ke(Ie,_e("Icon"));function na(e,t){const n=Ze($d,null);return{isDisabled:x(()=>!!e.disabled||!!n?.disabled.value),isError:x(()=>!!e.error||!!e.errorMessage||!!n?.error.value),describedBy:x(()=>e.errorMessage?t.value:n?.error.value?n.errorId.value:void 0)}}const Pv={key:0,class:"m-input__affix m-input__affix--prefix"},Lv=["id","type","value","placeholder","disabled","readonly","maxlength","name","autocomplete","aria-label","aria-invalid","aria-describedby"],Ov={key:1,class:"m-input__actions"},Fv=["aria-label","aria-pressed"],Nv=["id"],Jv=C({name:"MInput",inheritAttrs:!1,__name:"Input",props:{modelValue:{default:""},type:{default:"text"},size:{default:"medium"},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{default:void 0},prefixIcon:{default:void 0},suffixIcon:{default:void 0},maxlength:{default:void 0},name:{default:void 0},autocomplete:{default:void 0},id:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","input","change","focus","blur","clear","search"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=bn(),i=z(null),l=z(!1),d=vt("m-input"),u=x(()=>`${d}-error`),{isDisabled:m,isError:p,describedBy:b}=na(s,u),h=x(()=>s.modelValue??""),B=x(()=>s.clearable&&h.value.length>0&&!m.value&&!s.readonly),I=x(()=>s.type==="password"&&!m.value),V=x(()=>s.type!=="password"?s.type:l.value?"text":"password"),A=x(()=>{if(s.prefixIcon)return s.prefixIcon;if(s.type==="search"&&!a.prefix)return"search"}),D=x(()=>B.value||I.value||!!s.suffixIcon||!!a.suffix),E=x(()=>[`m-input--${s.size}`,{"is-disabled":m.value,"is-readonly":s.readonly,"is-error":p.value}]);function F(w){const $=w.target;o("update:modelValue",$.value),o("input",$.value,w)}function q(w){const $=w.target;o("change",$.value,w)}function re(w){w.key==="Enter"&&s.type==="search"&&o("search",h.value,w)}function Y(){i.value?.focus()}function X(w){if(m.value)return;const $=w.target;$ instanceof HTMLElement&&($===i.value||$.closest("button")||Y())}function G(){m.value||s.readonly||(o("update:modelValue",""),o("input",""),o("clear"),lt(()=>Y()))}function S(){const w=i.value,$=w?.selectionStart??null,P=w?.selectionEnd??null;l.value=!l.value,lt(()=>{w?.focus(),$!==null&&P!==null&&w?.setSelectionRange($,P)})}return t({focus:Y,blur:()=>i.value?.blur(),select:()=>i.value?.select()}),(w,$)=>(v(),y("div",{class:de(["m-input",E.value])},[g("div",{class:"m-input__field",onClick:X},[w.$slots.prefix||A.value?(v(),y("span",Pv,[le(w.$slots,"prefix",{},()=>[A.value?(v(),we(Ie,{key:0,name:A.value},null,8,["name"])):Q("",!0)],!0)])):Q("",!0),g("input",pi({id:e.id??r(d),ref_key:"inputRef",ref:i,class:"m-input__control",type:V.value,value:h.value,placeholder:e.placeholder,disabled:r(m),readonly:e.readonly,maxlength:e.maxlength,name:e.name,autocomplete:e.autocomplete,"aria-label":e.ariaLabel,"aria-invalid":r(p)||void 0,"aria-describedby":r(b)},w.$attrs,{onInput:F,onChange:q,onKeydown:re,onFocus:$[0]||($[0]=P=>o("focus",P)),onBlur:$[1]||($[1]=P=>o("blur",P))}),null,16,Lv),D.value?(v(),y("span",Ov,[B.value?(v(),y("button",{key:0,type:"button",class:"m-input__action","aria-label":"清空输入",onMousedown:$[2]||($[2]=pn(()=>{},["prevent"])),onClick:G},[c(Ie,{name:"close"})],32)):Q("",!0),I.value?(v(),y("button",{key:1,type:"button",class:"m-input__action","aria-label":l.value?"隐藏密码":"显示密码","aria-pressed":l.value,onMousedown:$[3]||($[3]=pn(()=>{},["prevent"])),onClick:S},[c(Ie,{name:l.value?"eye-off":"eye"},null,8,["name"])],40,Fv)):Q("",!0),le(w.$slots,"suffix",{},()=>[e.suffixIcon?(v(),we(Ie,{key:0,name:e.suffixIcon,class:"m-input__suffix-icon"},null,8,["name"])):Q("",!0)],!0)])):Q("",!0)]),e.errorMessage?(v(),y("p",{key:0,id:u.value,class:"m-input__error"},L(e.errorMessage),9,Nv)):Q("",!0)],2))}}),Gv=ce(Jv,[["__scopeId","data-v-6ce2d465"]]),je=ke(Gv,_e("Input")),Uv=["aria-busy"],jv=C({name:"MSkeleton",__name:"Skeleton",props:{loading:{type:Boolean,default:!0},variant:{default:"text"},rows:{default:3},width:{default:void 0},height:{default:void 0},animated:{type:Boolean,default:!0}},setup(e){const t=e,n=x(()=>Number.isFinite(t.rows)?Math.max(0,Math.floor(t.rows)):0),s=x(()=>t.variant==="text"?n.value:1),o=x(()=>[`m-skeleton--${t.variant}`,{"m-skeleton--animated":t.loading&&t.animated}]);function a(l){if(!(l===void 0||l===""))return typeof l=="number"?`${l}px`:l}const i=x(()=>{const l={},d=a(t.width),u=a(t.height);return d&&(l.width=d),u&&(l.height=u),Object.keys(l).length>0?l:void 0});return(l,d)=>(v(),y("div",{class:de(["m-skeleton",o.value]),"aria-busy":e.loading?"true":void 0},[e.loading?(v(),y(ie,{key:0},[d[0]||(d[0]=g("span",{class:"m-sr-only"},"加载中",-1)),(v(!0),y(ie,null,xe(s.value,u=>(v(),y("div",{key:u,class:de(["m-skeleton__item",`m-skeleton__item--${e.variant}`]),style:$e(i.value),"aria-hidden":"true"},null,6))),128))],64)):le(l.$slots,"default",{},void 0,!0,1)],10,Uv))}}),Td=ce(jv,[["__scopeId","data-v-8d9e305e"]]),Wv=["aria-busy"],Hv={key:0,class:"m-list__header"},qv={key:1,class:"m-list__items"},Kv={key:2,class:"m-list__loading"},Qv={key:3,class:"m-list__empty",role:"status"},Yv={key:4,class:"m-list__footer"},Xv=C({name:"MList",__name:"List",props:{bordered:{type:Boolean,default:!1},split:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},emptyText:{default:"暂无数据"},size:{default:"medium"}},setup(e){const t=e,n=bn(),s={small:{paddingY:"var(--m-space-2)",paddingX:"var(--m-space-3)",titleSize:"var(--m-font-size-sm)",descriptionSize:"var(--m-font-size-xs)"},medium:{paddingY:"var(--m-space-3)",paddingX:"var(--m-space-4)",titleSize:"var(--m-font-size-md)",descriptionSize:"var(--m-font-size-sm)"},large:{paddingY:"var(--m-space-4)",paddingX:"var(--m-space-5)",titleSize:"var(--m-font-size-lg)",descriptionSize:"var(--m-font-size-md)"}};function o(u){return u==null||u===!1||u===!0?!1:Array.isArray(u)?u.some(o):typeof u=="string"?u.trim().length>0:typeof u=="number"?!0:!Xn(u)||u.type===et?!1:u.type===Xs?typeof u.children=="string"?u.children.trim().length>0:!!u.children:u.type===ie?o(u.children):!0}const a=x(()=>o(n.default?.())),i=x(()=>!t.loading&&a.value),l=x(()=>({[`m-list--${t.size}`]:!0,"m-list--bordered":t.bordered,"m-list--split":t.split})),d=x(()=>{const u=s[t.size];return{"--m-list-padding-y":u.paddingY,"--m-list-padding-x":u.paddingX,"--m-list-title-size":u.titleSize,"--m-list-description-size":u.descriptionSize,"--m-list-split":t.split?"1px":"0px","--m-list-bordered":t.bordered?"1px":"0px"}});return(u,m)=>(v(),y("div",{class:de(["m-list",l.value]),style:$e(d.value),"aria-busy":e.loading?"true":void 0},[r(n).header?(v(),y("div",Hv,[le(u.$slots,"header",{},void 0,!0)])):Q("",!0),i.value?(v(),y("ul",qv,[le(u.$slots,"default",{},void 0,!0)])):Q("",!0),e.loading?(v(),y("div",Kv,[le(u.$slots,"loading",{},()=>[c(Td,{rows:3})],!0),m[0]||(m[0]=g("span",{class:"m-sr-only"},"加载中",-1))])):a.value?Q("",!0):(v(),y("div",Qv,[le(u.$slots,"empty",{},()=>[c(bi,{compact:"",title:e.emptyText},null,8,["title"])],!0)])),r(n).footer?(v(),y("div",Yv,[le(u.$slots,"footer",{},void 0,!0)])):Q("",!0)],14,Wv))}}),Zv=ce(Xv,[["__scopeId","data-v-05419ed6"]]),eg={class:"m-list__item"},tg={class:"m-list__item-main"},ng={key:0,class:"m-list__item-title"},sg={key:1,class:"m-list__item-description"},og={key:2,class:"m-list__item-content"},ag={key:0,class:"m-list__item-extra"},ig=C({name:"MListItem",__name:"ListItem",props:{title:{default:void 0},description:{default:void 0}},setup(e){const t=bn();return(n,s)=>(v(),y("li",eg,[g("div",tg,[e.title||r(t).title?(v(),y("div",ng,[le(n.$slots,"title",{},()=>[_(L(e.title),1)],!0)])):Q("",!0),e.description||r(t).description?(v(),y("div",sg,[le(n.$slots,"description",{},()=>[_(L(e.description),1)],!0)])):Q("",!0),r(t).default?(v(),y("div",og,[le(n.$slots,"default",{},void 0,!0)])):Q("",!0)]),r(t).extra?(v(),y("div",ag,[le(n.$slots,"extra",{},void 0,!0)])):Q("",!0)]))}}),lg=ce(ig,[["__scopeId","data-v-203f2a9b"]]),oo=ke(Zv,_e("List")),ao=ke(lg,_e("ListItem"));function ss(e,t){return e===void 0?t:Number.isFinite(e)?Math.max(0,Math.floor(e)):Number.POSITIVE_INFINITY}function Id(e={}){const t=z([]),n=z(ss(e.maxVisible,Number.POSITIVE_INFINITY)),s=new Map,o=new Map,a=e.getKey,i=e.onClose;let l=ss(e.maxQueue,Number.POSITIVE_INFINITY),d=ss(e.dedupeWindow,0),u=0;const m=x(()=>{const S=n.value,w=[];let $=0;for(const P of t.value){if(P.persistent){w.push(P);continue}$<S&&(w.push(P),$+=1)}return w}),p=x(()=>new Set(m.value.map(S=>S.id))),b=x(()=>{const S=p.value;return t.value.filter(w=>!S.has(w.id))});function h(S){const w=s.get(S);w!==void 0&&(clearTimeout(w),s.delete(S))}function B(S){for(const[w,$]of o)$.id===S&&o.delete(w)}function I(){const S=m.value,w=new Set(S.map($=>$.id));for(const[$,P]of s)w.has($)||(clearTimeout(P),s.delete($));for(const $ of S)$.persistent||$.duration<=0||s.has($.id)||s.set($.id,setTimeout(()=>A($.id),$.duration))}function V(S){h(S),I()}function A(S){const w=t.value.findIndex(P=>P.id===S);if(w===-1){h(S);return}h(S),B(S);const[$]=t.value.splice(w,1);I(),$&&i?.($)}function D(){for(;t.value.length>=l;){const S=p.value,w=t.value.find(P=>!P.persistent&&!S.has(P.id));if(w){A(w.id);continue}const $=t.value.find(P=>!P.persistent);if($){A($.id);continue}return!1}return!0}function E(S){if(S.persistent||S.priority!=="high"){t.value.push(S);return}const w=t.value.findIndex($=>!$.persistent&&$.priority!=="high");w===-1?t.value.push(S):t.value.splice(w,0,S)}function F(S){const w=Date.now(),$=a?.(S);if($&&d>0){const Z=o.get($);if(Z){const ye=t.value.find(N=>N.id===Z.id);if(ye&&w-Z.at<d)return Z.at=w,V(ye.id),ye.id;o.delete($)}}if(!D())return 0;const P=u+1;return u=P,E({...S,id:P,priority:S.priority??"normal"}),I(),$&&o.set($,{id:P,at:w}),P}function q(S){for(const w of[...t.value])!!w.persistent===S&&A(w.id)}function re(){q(!1)}function Y(){q(!0)}function X(){for(const S of[...t.value])A(S.id)}function G(S){for(n.value=ss(S.maxVisible,n.value),l=ss(S.maxQueue,l),d=ss(S.dedupeWindow,d);t.value.length>l;){const w=p.value,$=t.value.find(Z=>!Z.persistent&&!w.has(Z.id));if($){A($.id);continue}const P=t.value.find(Z=>!Z.persistent);if(P){A(P.id);continue}break}I()}return{items:t,visibleItems:m,queuedItems:b,push:F,remove:A,clear:re,clearPersistent:Y,clearAll:X,configure:G}}const Do=new Map,En=Id({maxVisible:5,maxQueue:20,dedupeWindow:500,getKey:e=>`${e.type}\0${e.message}`,onClose:e=>{const t=Do.get(e.id);Do.delete(e.id),t?.()}});let Vd=3e3;const Sd=mn(En.visibleItems),rg=mn(En.queuedItems);function yi(e){const t=typeof e=="string"?{message:e}:e,n=t.persistent??!1,s=En.push({type:t.type??"info",message:t.message,duration:n?0:t.duration??Vd,persistent:n,priority:t.priority??"normal"});return s===0?0:(t.onClose&&!Do.has(s)&&Do.set(s,t.onClose),s)}function Eo(e){En.remove(e)}function zd(){En.clear()}function Ad(){En.clearPersistent()}function Dd(){En.clearAll()}function Ed(e){En.configure({maxVisible:e.maxCount,maxQueue:e.maxQueue}),e.duration!==void 0&&(Vd=Math.max(0,Math.floor(e.duration)))}function dg(){return()=>{}}const cg={class:"m-message",role:"region","aria-label":"消息"},ug=["role"],mg={class:"m-message__text"},pg=C({name:"MMessage",__name:"Message",setup(e){const t={success:"success",info:"info",warning:"warning",error:"error"};let n=null;return gn(()=>{n=dg()}),kt(()=>{n?.()}),(s,o)=>(v(),we(fn,{to:"body"},[g("div",cg,[c(ud,{name:"m-message-item",tag:"div",class:"m-message__list"},{default:f(()=>[(v(!0),y(ie,null,xe(r(Sd),a=>(v(),y("div",{key:a.id,class:de(["m-message__item",`m-message__item--${a.type}`]),role:a.type==="error"?"alert":"status"},[c(Ie,{name:t[a.type],class:"m-message__icon"},null,8,["name"]),g("span",mg,L(a.message),1)],10,ug))),128))]),_:1})])]))}}),fg=ce(pg,[["__scopeId","data-v-1a788d4e"]]);function sa(e){return(t,n={})=>yi({...n,message:t,type:e})}const Rd=sa("success"),Pd=sa("info"),Ld=sa("warning"),Od=sa("error"),Xe={show:yi,success:Rd,info:Pd,warning:Ld,error:Od,close:Eo,destroy:Eo,clear:zd,clearPersistent:Ad,clearAll:Dd,configure:Ed};function Fd(){return{messages:Sd,queuedMessages:rg,show:yi,success:Rd,info:Pd,warning:Ld,error:Od,close:Eo,destroy:Eo,clear:zd,clearPersistent:Ad,clearAll:Dd,configure:Ed}}const Nd=ke(fg,_e("Message")),vg=["id","aria-labelledby","aria-label"],gg={key:0,class:"m-modal__header"},bg=["id"],yg={class:"m-modal__body"},hg={key:1,class:"m-modal__footer"},Mg=C({name:"MModal",__name:"Modal",props:{modelValue:{type:Boolean,default:!1},title:{default:void 0},size:{default:"medium"},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},hideMode:{default:"unmount"},ariaLabel:{default:void 0},id:{default:void 0}},emits:["update:modelValue","close","opened","closed"],setup(e,{emit:t}){const n=e,s=t,o=z(null),a=vt("m-modal-title"),i=x(()=>n.hideMode==="display"||n.modelValue),{zIndex:l}=es({open:()=>n.modelValue,panel:o,closeOnEscape:()=>n.closable,closeOnOutside:()=>n.maskClosable,lockScroll:()=>n.lockScroll,trapFocus:!0,restoreFocus:!0,onDismiss:u=>d(u==="escape"?"escape":"mask")});function d(u,m){s("update:modelValue",!1),s("close",u,m)}return(u,m)=>(v(),we(fn,{to:"body"},[c(Zn,{name:"m-modal",onAfterEnter:m[1]||(m[1]=p=>s("opened")),onAfterLeave:m[2]||(m[2]=p=>s("closed"))},{default:f(()=>[i.value?An((v(),y("div",{key:0,class:"m-modal",style:$e({zIndex:r(l)})},[m[3]||(m[3]=g("div",{class:"m-modal__mask","aria-hidden":"true"},null,-1)),g("div",{id:e.id,ref_key:"panelRef",ref:o,class:de(["m-modal__panel",`m-modal__panel--${e.size}`]),role:"dialog","aria-modal":"true","aria-labelledby":e.title&&!u.$slots.header?r(a):void 0,"aria-label":e.title&&!u.$slots.header?void 0:e.ariaLabel,tabindex:"-1"},[e.title||u.$slots.header||e.closable?(v(),y("header",gg,[le(u.$slots,"header",{},()=>[g("h2",{id:r(a),class:"m-modal__title"},L(e.title),9,bg)],!0),e.closable?(v(),y("button",{key:0,type:"button",class:"m-modal__close","aria-label":"关闭对话框",onClick:m[0]||(m[0]=p=>d("close-button",p))},[c(Ie,{name:"close",size:18})])):Q("",!0)])):Q("",!0),g("div",yg,[le(u.$slots,"default",{},void 0,!0)]),u.$slots.footer?(v(),y("footer",hg,[le(u.$slots,"footer",{},void 0,!0)])):Q("",!0)],10,vg)],4)),[[Dn,e.hideMode==="display"?e.modelValue:!0]]):Q("",!0)]),_:3})]))}}),_g=ce(Mg,[["__scopeId","data-v-4daa44f4"]]),bs=ke(_g,_e("Modal")),kg={class:"m-number-input__field"},wg=["id","value","placeholder","disabled","readonly","name","aria-label","aria-valuenow","aria-valuemin","aria-valuemax","aria-invalid","aria-describedby"],xg={key:0,class:"m-number-input__controls"},Bg=["disabled"],Cg=["disabled"],$g=["id"],Tg=C({name:"MNumberInput",__name:"NumberInput",props:{modelValue:{default:null},min:{default:void 0},max:{default:void 0},step:{default:1},precision:{default:void 0},size:{default:"medium"},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},error:{type:Boolean,default:!1},errorMessage:{default:void 0},name:{default:void 0},id:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","change","focus","blur"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=z(null),i=vt("m-number-input"),l=x(()=>`${i}-error`),d=z(!1),u=z(""),{isDisabled:m,isError:p,describedBy:b}=na(s,l);function h(P){if(!Number.isFinite(P))return 0;const Z=String(P);if(Z.includes("e-"))return Number(Z.split("e-")[1]??0);const ye=Z.indexOf(".");return ye===-1?0:Z.length-ye-1}const B=x(()=>{const P=s.precision;return P!==void 0?Math.min(20,Math.max(0,Math.trunc(P))):Math.min(20,h(s.step))});function I(P){const Z=B.value;return Z<=0?Math.round(P):Number(P.toFixed(Z))}function V(P){let Z=P;return s.min!==void 0&&Z<s.min&&(Z=s.min),s.max!==void 0&&Z>s.max&&(Z=s.max),Z}function A(P){return I(V(P))}function D(P){return P==null||Number.isNaN(P)?"":B.value>0?P.toFixed(B.value):String(P)}const E=x(()=>d.value?u.value:D(s.modelValue)),F=x(()=>m.value||s.readonly?!1:s.modelValue===null||s.max===void 0||s.modelValue<s.max),q=x(()=>m.value||s.readonly?!1:s.modelValue===null||s.min===void 0||s.modelValue>s.min),re=x(()=>[`m-number-input--${s.size}`,{"is-disabled":m.value,"is-readonly":s.readonly,"is-error":p.value}]);function Y(P){const Z=P.trim();if(Z===""||Z==="-"||Z==="."||Z==="-.")return null;const ye=Number(Z);return Number.isFinite(ye)?ye:null}function X(P){if(m.value||s.readonly)return;const Z=P.target;u.value=Z.value;const ye=Y(Z.value);if(ye===null){Z.value.trim()===""&&o("update:modelValue",null);return}o("update:modelValue",ye)}function G(P){d.value=!0,u.value=D(s.modelValue),o("focus",P)}function S(P){d.value=!1;const Z=Y(u.value),ye=Z===null?null:A(Z);ye!==s.modelValue&&o("update:modelValue",ye),o("change",ye,P)}function w(P){if(m.value||s.readonly)return;const Z=P===1?s.min??0:s.max??0,ye=s.modelValue??Z,N=A(ye+P*s.step);N!==s.modelValue&&(o("update:modelValue",N),d.value&&(u.value=D(N)))}function $(P){P.key==="ArrowUp"?(P.preventDefault(),w(1)):P.key==="ArrowDown"&&(P.preventDefault(),w(-1))}return t({focus:()=>a.value?.focus(),blur:()=>a.value?.blur(),select:()=>a.value?.select()}),(P,Z)=>(v(),y("div",{class:de(["m-number-input",re.value])},[g("div",kg,[g("input",{id:e.id??r(i),ref_key:"inputRef",ref:a,class:"m-number-input__control",type:"text",inputmode:"decimal",autocomplete:"off",role:"spinbutton",value:E.value,placeholder:e.placeholder,disabled:r(m),readonly:e.readonly,name:e.name,"aria-label":e.ariaLabel,"aria-valuenow":e.modelValue??void 0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-invalid":r(p)||void 0,"aria-describedby":r(b),onInput:X,onKeydown:$,onFocus:G,onBlur:S},null,40,wg),e.controls?(v(),y("span",xg,[g("button",{type:"button",class:"m-number-input__button","aria-label":"增加",disabled:!F.value,onMousedown:Z[0]||(Z[0]=pn(()=>{},["prevent"])),onClick:Z[1]||(Z[1]=ye=>w(1))},[c(Ie,{name:"chevron-up",size:12})],40,Bg),g("button",{type:"button",class:"m-number-input__button","aria-label":"减少",disabled:!q.value,onMousedown:Z[2]||(Z[2]=pn(()=>{},["prevent"])),onClick:Z[3]||(Z[3]=ye=>w(-1))},[c(Ie,{name:"chevron-down",size:12})],40,Cg)])):Q("",!0)]),e.errorMessage?(v(),y("p",{key:0,id:l.value,class:"m-number-input__error"},L(e.errorMessage),9,$g)):Q("",!0)],2))}}),Ig=ce(Tg,[["__scopeId","data-v-80e6b5a9"]]),qn=ke(Ig,_e("NumberInput")),Vg=["aria-label"],Sg={key:0,class:"m-pagination__total"},zg=["disabled"],Ag={key:0,class:"m-pagination__ellipsis","aria-hidden":"true"},Dg=["aria-label","aria-current","disabled","onClick"],Eg=["disabled"],Rg=C({name:"MPagination",__name:"Pagination",props:{total:{},pageSize:{default:10},modelValue:{default:1},siblingCount:{default:1},showTotal:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{default:"分页"}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=x(()=>{const p=Math.floor(n.pageSize);return Number.isFinite(p)&&p>0?p:1}),a=x(()=>{const p=Math.floor(n.total);return Number.isFinite(p)&&p>0?p:0}),i=x(()=>Math.max(1,Math.ceil(a.value/o.value))),l=x(()=>{const p=Math.floor(n.modelValue),b=Number.isFinite(p)?p:1;return Math.min(Math.max(b,1),i.value)}),d=x(()=>{if(a.value===0)return[0,0];const p=(l.value-1)*o.value+1;return[p,Math.min(a.value,p+o.value-1)]}),u=x(()=>{const p=i.value,b=l.value,h=Math.max(0,Math.floor(n.siblingCount)||0),B=Math.max(2,b-h),I=Math.min(p-1,b+h),V=[1];B>2&&V.push("ellipsis");for(let A=B;A<=I;A+=1)V.push(A);return I<p-1&&V.push("ellipsis"),p>1&&V.push(p),V});function m(p){n.disabled||p===l.value||p<1||p>i.value||(s("update:modelValue",p),s("change",p))}return(p,b)=>(v(),y("nav",{class:de(["m-pagination",{"is-disabled":e.disabled}]),"aria-label":e.ariaLabel},[e.showTotal?(v(),y("span",Sg,[le(p.$slots,"total",{total:a.value,pageCount:i.value,range:d.value},()=>[_(" 共 "+L(a.value)+" 条 ",1)],!0)])):Q("",!0),g("button",{type:"button",class:"m-pagination__item m-pagination__item--prev","aria-label":"上一页",disabled:e.disabled||l.value<=1,onClick:b[0]||(b[0]=h=>m(l.value-1))},[c(Ie,{name:"chevron-left",class:"m-pagination__icon"})],8,zg),(v(!0),y(ie,null,xe(u.value,(h,B)=>(v(),y(ie,{key:`${h}-${B}`},[h==="ellipsis"?(v(),y("span",Ag,"…")):(v(),y("button",{key:1,type:"button",class:de(["m-pagination__item m-pagination__item--page",{"is-active":h===l.value}]),"aria-label":`第 ${h} 页`,"aria-current":h===l.value?"page":void 0,disabled:e.disabled,onClick:I=>m(h)},L(h),11,Dg))],64))),128)),g("button",{type:"button",class:"m-pagination__item m-pagination__item--next","aria-label":"下一页",disabled:e.disabled||l.value>=i.value,onClick:b[1]||(b[1]=h=>m(l.value+1))},[c(Ie,{name:"chevron-right",class:"m-pagination__icon"})],8,Eg)],10,Vg))}}),Pg=ce(Rg,[["__scopeId","data-v-dd4c2b96"]]),io=ke(Pg,_e("Pagination")),Lg={class:"m-popover"},Og=["aria-expanded","aria-controls"],Fg=["id","aria-label","aria-labelledby"],Ng={key:0,class:"m-popover__arrow","aria-hidden":"true"},Jg={key:1,class:"m-popover__header"},Gg=["id"],Ug={class:"m-popover__body"},jg={key:2,class:"m-popover__footer"},Wg=C({name:"MPopover",__name:"Popover",props:{modelValue:{type:Boolean,default:void 0},trigger:{default:"click"},placement:{default:"bottom"},title:{default:void 0},width:{default:280},offset:{default:8},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},closeOnOutside:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0},ariaLabel:{default:void 0}},emits:["update:modelValue","open","close"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=z(null),i=z(null),l=z(!1),d=vt("m-popover"),u=x(()=>`${d}-title`),m=x(()=>`${d}-panel`),p=x(()=>s.trigger??"click"),b=x(()=>s.modelValue??l.value),h=x(()=>s.hideMode==="display"||b.value),B=x(()=>({width:typeof s.width=="number"?`${s.width}px`:s.width})),{style:I,actualPlacement:V}=so({trigger:a,panel:i,open:()=>b.value,placement:()=>s.placement,offset:s.offset,onReferenceHidden:()=>re()});let A=null;const{zIndex:D}=es({open:()=>b.value,panel:i,ignore:()=>[a.value],closeOnEscape:!0,closeOnOutside:()=>p.value==="click"&&s.closeOnOutside,restoreFocus:!0,onDismiss:()=>re()});function E(){A!==null&&(clearTimeout(A),A=null)}function F(w,$=!1){s.disabled&&w||(w&&E(),w!==b.value&&(s.modelValue===void 0&&(l.value=w),o("update:modelValue",w),w&&$&&lt(()=>i.value?.focus({preventScroll:!0}))))}function q(){F(!0)}function re(){F(!1)}function Y(w=!1){F(!b.value,w)}function X(w){p.value==="click"&&Y(w.detail===0)}function G(){p.value==="hover"&&(E(),F(!0))}function S(){p.value==="hover"&&(E(),A=setTimeout(()=>{A=null,re()},120))}return De(b,w=>{E(),o(w?"open":"close")},{flush:"post"}),De(()=>s.modelValue,w=>{E(),w!==void 0&&(l.value=w)},{immediate:!0}),De(()=>s.disabled,w=>{w&&re()}),De(p,()=>re()),kt(E),t({open:q,close:re,toggle:Y}),(w,$)=>(v(),y("span",Lg,[g("span",{ref_key:"triggerRef",ref:a,class:"m-popover__trigger","aria-expanded":b.value,"aria-controls":m.value,"aria-haspopup":"dialog",onClick:X,onMouseenter:G,onMouseleave:S},[le(w.$slots,"trigger",{},void 0,!0)],40,Og),(v(),we(fn,{to:"body"},[c(Zn,{name:"m-popover"},{default:f(()=>[h.value?An((v(),y("div",{key:0,id:m.value,ref_key:"panelRef",ref:i,class:de(["m-popover__panel",`m-popover__panel--${r(V)}`]),style:$e({...r(I),...B.value,zIndex:r(D)}),role:"dialog","aria-label":e.title?void 0:e.ariaLabel,"aria-labelledby":e.title?u.value:void 0,tabindex:"-1",onMouseenter:G,onMouseleave:S},[e.showArrow?(v(),y("span",Ng)):Q("",!0),e.title||w.$slots.title?(v(),y("header",Jg,[g("h3",{id:u.value,class:"m-popover__title"},[le(w.$slots,"title",{},()=>[_(L(e.title),1)],!0)],8,Gg)])):Q("",!0),g("div",Ug,[le(w.$slots,"default",{},void 0,!0)]),w.$slots.footer?(v(),y("footer",jg,[le(w.$slots,"footer",{},void 0,!0)])):Q("",!0)],46,Fg)),[[Dn,e.hideMode==="display"?b.value:!0]]):Q("",!0)]),_:3})]))]))}}),Hg=ce(Wg,[["__scopeId","data-v-161dd02e"]]),ms=ke(Hg,_e("Popover")),qg=["aria-valuenow","aria-valuetext","aria-label"],Kg={class:"m-progress__track"},Qg={key:0,class:"m-progress__info"},Yg=C({name:"MProgress",__name:"Progress",props:{percent:{},status:{default:"normal"},size:{default:"medium"},showInfo:{type:Boolean,default:!0},label:{default:"进度"},format:{type:Function,default:void 0}},setup(e){const t=e,n=x(()=>Number.isFinite(t.percent)?Math.min(100,Math.max(0,t.percent)):0),s=x(()=>t.format?t.format(n.value):`${n.value}%`),o=x(()=>[`m-progress--${t.status}`,`m-progress--${t.size}`]),a=x(()=>({width:`${n.value}%`}));return(i,l)=>(v(),y("div",{class:de(["m-progress",o.value]),role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":n.value,"aria-valuetext":s.value,"aria-label":e.label},[g("div",Kg,[g("div",{class:"m-progress__bar",style:$e(a.value)},null,4)]),e.showInfo?(v(),y("div",Qg,[le(i.$slots,"info",{percent:n.value},()=>[_(L(s.value),1)],!0)])):Q("",!0)],10,qg))}}),Xg=ce(Yg,[["__scopeId","data-v-6ed8ca94"]]),Ht=ke(Xg,_e("Progress")),Jd=Symbol("m-radio-group"),Zg={class:"m-radio__control"},eb=["id","name","value","checked","disabled"],tb={key:0,class:"m-radio__label"},nb=C({name:"MRadio",__name:"Radio",props:{modelValue:{default:null},value:{default:void 0},label:{default:void 0},disabled:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},id:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=Ze(Jd,null),a=vt("m-radio"),i=x(()=>n.disabled||!!o?.disabled.value),l=x(()=>o?.size.value??n.size),d=x(()=>n.name??o?.name.value),u=x(()=>n.value===void 0?!1:o?o.modelValue.value===n.value:n.modelValue===n.value),m=x(()=>[`m-radio--${l.value}`,{"is-checked":u.value,"is-disabled":i.value}]);function p(b){!b.target.checked||i.value||n.value===void 0||(o?o.select(n.value):s("update:modelValue",n.value),s("change",n.value,b))}return(b,h)=>(v(),y("label",{class:de(["m-radio",m.value])},[g("span",Zg,[g("input",{id:e.id??r(a),class:"m-radio__native",type:"radio",name:d.value,value:e.value,checked:u.value,disabled:i.value,onChange:p},null,40,eb),h[0]||(h[0]=g("span",{class:"m-radio__box","aria-hidden":"true"},[g("span",{class:"m-radio__dot"})],-1))]),e.label||b.$slots.default?(v(),y("span",tb,[le(b.$slots,"default",{},()=>[_(L(e.label),1)],!0)])):Q("",!0)],2))}}),Gd=ce(nb,[["__scopeId","data-v-3271672b"]]),sb=["aria-label"],ob=C({name:"MRadioGroup",__name:"RadioGroup",props:{modelValue:{default:null},options:{default:()=>[]},disabled:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},direction:{default:"vertical"},ariaLabel:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=vt("m-radio-group"),a=x(()=>n.modelValue??null);function i(l){n.disabled||(s("update:modelValue",l),s("change",l))}return At(Jd,{modelValue:a,disabled:x(()=>n.disabled),size:x(()=>n.size),name:x(()=>n.name??o),select:i}),(l,d)=>(v(),y("div",{class:de(["m-radio-group",`m-radio-group--${e.direction}`]),role:"radiogroup","aria-label":e.ariaLabel},[le(l.$slots,"default",{},()=>[(v(!0),y(ie,null,xe(e.options,u=>(v(),we(Gd,{key:u.value,value:u.value,label:u.label,disabled:u.disabled},null,8,["value","label","disabled"]))),128))],!0)],10,sb))}}),ab=ce(ob,[["__scopeId","data-v-da8aa3c7"]]),dn=ke(Gd,_e("Radio")),Ws=ke(ab,_e("RadioGroup")),ib=["aria-label"],lb=["aria-checked","aria-disabled","name","tabindex","disabled","onClick","onKeydown"],rb={class:"m-segmented-control__label"},db=C({name:"MSegmentedControl",__name:"SegmentedControl",props:{modelValue:{default:null},options:{default:()=>[]},size:{default:"medium"},disabled:{type:Boolean,default:!1},ariaLabel:{default:void 0},name:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=z([]),a=x(()=>n.options.findIndex(B=>B.value===n.modelValue&&!B.disabled&&!n.disabled)),i=x(()=>n.options.findIndex(B=>!B.disabled&&!n.disabled)),l=x(()=>a.value===-1?i.value:a.value),d=x(()=>[`m-segmented-control--${n.size}`,{"is-disabled":n.disabled}]);function u(B,I){B instanceof HTMLButtonElement&&(o.value[I]=B)}function m(B){return n.disabled||!!B.disabled}function p(B){m(B)||B.value!==n.modelValue&&(s("update:modelValue",B.value),s("change",B.value,B))}async function b(B){await lt(),o.value[B]?.focus()}function h(B,I){if(!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","Home","End"].includes(B.key))return;const A=n.options.map((E,F)=>({option:E,index:F})).filter(E=>!m(E.option));if(A.length===0)return;B.preventDefault();let D;if(B.key==="Home")D=A[0];else if(B.key==="End")D=A[A.length-1];else{const E=A.findIndex(Y=>Y.index===I),F=E===-1?0:E,re=B.key==="ArrowRight"||B.key==="ArrowDown"?1:-1;D=A[(F+re+A.length)%A.length]}D&&(p(D.option),b(D.index))}return(B,I)=>(v(),y("div",{class:de(["m-segmented-control",d.value]),role:"radiogroup","aria-label":e.ariaLabel},[(v(!0),y(ie,null,xe(e.options,(V,A)=>(v(),y("button",{key:V.value,ref_for:!0,ref:D=>u(D,A),type:"button",class:de(["m-segmented-control__option",{"is-selected":A===a.value,"is-disabled":m(V)}]),role:"radio","aria-checked":A===a.value,"aria-disabled":m(V)||void 0,name:e.name,tabindex:A===l.value?0:-1,disabled:m(V),onClick:D=>p(V),onKeydown:D=>h(D,A)},[V.icon?(v(),we(Ie,{key:0,name:V.icon,class:"m-segmented-control__icon"},null,8,["name"])):Q("",!0),g("span",rb,L(V.label),1)],42,lb))),128))],10,ib))}}),cb=ce(db,[["__scopeId","data-v-c0577901"]]),Kn=ke(cb,_e("SegmentedControl")),ub={class:"m-select__trigger"},mb=["id","aria-expanded","aria-controls","aria-activedescendant","aria-label","aria-invalid","aria-describedby","disabled","name"],pb=["id"],fb=["id","aria-label"],vb={key:0,class:"m-select__empty"},gb=["id","aria-selected","aria-disabled","onMousemove","onClick"],bb={class:"m-select__option-label"},yb=C({name:"MSelect",__name:"Select",props:{modelValue:{default:null},options:{default:()=>[]},placeholder:{default:"请选择"},size:{default:"medium"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{default:void 0},emptyText:{default:"暂无选项"},hideMode:{default:"unmount"},ariaLabel:{default:void 0},id:{default:void 0},name:{default:void 0}},emits:["update:modelValue","change","clear","visible-change"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=vt("m-select"),i=z(null),l=z(null),d=z(null),u=z(!1),m=z(-1),p=x(()=>`${a}-panel`),b=x(()=>`${a}-error`),h=x(()=>s.options.find(me=>me.value===s.modelValue)??null),{isDisabled:B,isError:I,describedBy:V}=na(s,b),A=x(()=>s.clearable&&s.modelValue!==null&&s.modelValue!==void 0&&!B.value),D=x(()=>[`m-select--${s.size}`,{"is-open":u.value,"is-disabled":B.value,"is-error":I.value}]),E=x(()=>s.hideMode==="display"||u.value),F=x(()=>u.value&&m.value>=0?Y(m.value):void 0),{style:q}=so({trigger:l,panel:d,open:()=>u.value,matchWidth:!0,placement:"bottom",onReferenceHidden:()=>P()}),{zIndex:re}=es({open:()=>u.value,panel:d,ignore:()=>[i.value],closeOnEscape:!0,closeOnOutside:!0,restoreFocus:!1,onDismiss:()=>P()});function Y(me){return`${a}-option-${me}`}function X(me){const Le=s.options[me];!Le||Le.disabled||(m.value=me)}function G(){return s.options.findIndex(me=>!me.disabled)}function S(){for(let me=s.options.length-1;me>=0;me-=1)if(!s.options[me]?.disabled)return me;return-1}function w(){return s.options.findIndex(me=>me.value===s.modelValue&&!me.disabled)}function $(me=!1){if(B.value||u.value)return;u.value=!0;const Le=w();m.value=Le>=0?Le:me?S():G(),o("visible-change",!0)}function P(){u.value&&(u.value=!1,m.value=-1,o("visible-change",!1))}function Z(){u.value?P():$()}function ye(me){const Le=s.options.map((U,ue)=>({option:U,index:ue})).filter(U=>!U.option.disabled);if(Le.length===0)return;const Ge=Le.findIndex(U=>U.index===m.value),ot=Le[((Ge===-1?me===1?-1:0:Ge)+me+Le.length)%Le.length];m.value=ot?.index??-1}function N(me){me.disabled||(o("update:modelValue",me.value),o("change",me.value,me),P(),l.value?.focus({preventScroll:!0}))}function j(){const me=s.options[m.value];me&&N(me)}function ee(){B.value||(o("update:modelValue",null),o("change",null,null),o("clear"),P(),l.value?.focus({preventScroll:!0}))}function se(me){if(!B.value){if(!u.value){["ArrowDown","ArrowUp","Enter"," "].includes(me.key)&&(me.preventDefault(),$(me.key==="ArrowUp"));return}switch(me.key){case"ArrowDown":me.preventDefault(),ye(1);break;case"ArrowUp":me.preventDefault(),ye(-1);break;case"Home":{me.preventDefault();const Le=G();m.value=Le;break}case"End":{me.preventDefault(),m.value=S();break}case"Enter":case" ":me.preventDefault(),j();break;case"Escape":me.preventDefault(),P();break;case"Tab":P();break}}}function pe(){l.value?.focus()}function ze(){l.value?.blur()}return t({focus:pe,blur:ze,open:$,close:P}),(me,Le)=>(v(),y("div",{ref_key:"rootRef",ref:i,class:de(["m-select",D.value])},[g("div",ub,[g("button",{id:e.id??r(a),ref_key:"triggerRef",ref:l,type:"button",class:"m-select__control",role:"combobox","aria-haspopup":"listbox","aria-expanded":u.value,"aria-controls":p.value,"aria-activedescendant":F.value,"aria-label":e.ariaLabel,"aria-invalid":r(I)||void 0,"aria-describedby":r(V),disabled:r(B),name:e.name,onClick:Z,onKeydown:se},[g("span",{class:de(["m-select__value",{"is-placeholder":!h.value}])},L(h.value?.label??e.placeholder),3),c(Ie,{name:"chevron-down",class:de(["m-select__arrow",{"is-open":u.value}])},null,8,["class"])],40,mb),A.value?(v(),y("button",{key:0,type:"button",class:"m-select__clear","aria-label":"清空选择",onMousedown:Le[0]||(Le[0]=pn(()=>{},["prevent"])),onClick:pn(ee,["stop"])},[c(Ie,{name:"close"})],32)):Q("",!0)]),e.errorMessage?(v(),y("p",{key:0,id:b.value,class:"m-select__error"},L(e.errorMessage),9,pb)):Q("",!0),(v(),we(fn,{to:"body"},[c(Zn,{name:"m-select-panel"},{default:f(()=>[E.value?An((v(),y("div",{key:0,id:p.value,ref_key:"panelRef",ref:d,class:"m-select__panel",style:$e({...r(q),zIndex:r(re)}),role:"listbox","aria-label":e.ariaLabel},[e.options.length===0?(v(),y("div",vb,L(e.emptyText),1)):(v(!0),y(ie,{key:1},xe(e.options,(Ge,rt)=>(v(),y("div",{id:Y(rt),key:Ge.value,class:de(["m-select__option",{"is-active":rt===m.value,"is-selected":Ge.value===e.modelValue,"is-disabled":Ge.disabled}]),role:"option","aria-selected":Ge.value===e.modelValue,"aria-disabled":Ge.disabled||void 0,onMousemove:ot=>X(rt),onClick:ot=>N(Ge)},[g("span",bb,L(Ge.label),1),Ge.value===e.modelValue?(v(),we(Ie,{key:0,name:"check",class:"m-select__check","aria-hidden":"true"})):Q("",!0)],42,gb))),128))],12,fb)),[[Dn,e.hideMode==="display"?u.value:!0]]):Q("",!0)]),_:1})]))],2))}}),hb=ce(yb,[["__scopeId","data-v-7376e330"]]),qt=ke(hb,_e("Select")),ls=ke(Td,_e("Skeleton")),Mb=C({name:"MStack",__name:"Stack",props:{direction:{default:"column"},gap:{default:3},align:{default:"stretch"},justify:{default:"start"},wrap:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},as:{default:"div"}},setup(e){const t=e,n=x(()=>[`m-stack--${t.direction}`,`m-stack--align-${t.align}`,`m-stack--justify-${t.justify}`,{"m-stack--wrap":t.wrap,"m-stack--inline":t.inline}]),s=x(()=>({gap:`var(--m-space-${t.gap})`}));return(o,a)=>(v(),we(Qo(e.as),{class:de(["m-stack",n.value]),style:$e(s.value)},{default:f(()=>[le(o.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}}),_b=ce(Mb,[["__scopeId","data-v-a1f529c1"]]),Ro=ke(_b,_e("Stack")),kb=["id","disabled","aria-checked"],wb={key:0,class:"m-switch__label"},xb=C({name:"MSwitch",__name:"Switch",props:{modelValue:{type:[Boolean,String,Number],default:!1},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},size:{default:"medium"},label:{default:void 0},id:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=x(()=>n.modelValue===n.activeValue),a=x(()=>[`m-switch--${n.size}`,{"is-checked":o.value,"is-disabled":n.disabled}]);function i(){if(n.disabled)return;const l=o.value?n.inactiveValue:n.activeValue;s("update:modelValue",l),s("change",l)}return(l,d)=>(v(),y("button",{id:e.id,type:"button",role:"switch",class:de(["m-switch",a.value]),disabled:e.disabled,"aria-checked":o.value,onClick:i},[d[0]||(d[0]=g("span",{class:"m-switch__track","aria-hidden":"true"},[g("span",{class:"m-switch__thumb"})],-1)),e.label||l.$slots.default?(v(),y("span",wb,[le(l.$slots,"default",{},()=>[_(L(e.label),1)],!0)])):Q("",!0)],10,kb))}}),Bb=ce(xb,[["__scopeId","data-v-aa4d9c47"]]),Dt=ke(Bb,_e("Switch")),Cb={key:1},$b={key:1},Tb=["colspan"],Ib=C({name:"MTable",__name:"Table",props:{columns:{},rows:{},rowKey:{default:void 0},caption:{default:void 0},captionVisible:{type:Boolean,default:!1},size:{default:"medium"},layout:{default:"auto"},minWidth:{default:void 0},rowHeader:{type:Boolean,default:!1},emptyText:{default:"暂无数据"}},setup(e){const t=e,n=x(()=>Math.max(t.columns.length,1)),s={row:void 0,column:{key:"empty",title:""},value:void 0,index:-1};function o(p){if(!(p===void 0||p===""))return typeof p=="number"?`${p}px`:p}const a=x(()=>{const p=o(t.minWidth);return p?{minWidth:p}:void 0});function i(p){const b=o(p.width),h=o(p.minWidth),B={};return b&&(B.width=b),h&&(B.minWidth=h),p.align&&(B.textAlign=p.align),Object.keys(B).length>0?B:void 0}function l(p,b){return p[b]}function d(p,b){if(!t.rowKey)return b;const h=l(p,t.rowKey);return h==null||h===""?b:typeof h=="string"||typeof h=="number"?h:String(h)}function u(p){return p==null?"—":String(p)}function m(p){return p==null}return(p,b)=>(v(),y("div",{class:de(["m-table",[`m-table--${e.size}`,{"m-table--fixed":e.layout==="fixed"}]])},[g("table",{class:"m-table__table",style:$e(a.value)},[e.caption?(v(),y("caption",{key:0,class:de(e.captionVisible?"m-table__caption":"m-sr-only")},L(e.caption),3)):Q("",!0),e.columns.length?(v(),y("thead",Cb,[g("tr",null,[(v(!0),y(ie,null,xe(e.columns,h=>(v(),y("th",{key:h.key,scope:"col",style:$e(i(h))},L(h.title),5))),128))])])):Q("",!0),g("tbody",null,[e.columns.length?(v(!0),y(ie,{key:0},xe(e.rows,(h,B)=>(v(),y("tr",{key:d(h,B)},[(v(!0),y(ie,null,xe(e.columns,(I,V)=>(v(),y(ie,{key:I.key},[e.rowHeader&&V===0?(v(),y("th",{key:0,scope:"row",style:$e(i(I))},[p.$slots[I.key]?le(p.$slots,I.key,{row:h,column:I,value:l(h,I.key),index:B},void 0,!0,0):(v(),y(ie,{key:1},[_(L(u(l(h,I.key))),1)],64))],4)):(v(),y("td",{key:1,style:$e(i(I))},[p.$slots[I.key]?le(p.$slots,I.key,{row:h,column:I,value:l(h,I.key),index:B},void 0,!0,0):(v(),y("span",{key:1,class:de({"m-table__muted":m(l(h,I.key))})},L(u(l(h,I.key))),3))],4))],64))),128))]))),128)):Q("",!0),!e.columns.length||!e.rows.length?(v(),y("tr",$b,[g("td",{class:"m-table__empty",colspan:n.value},[le(p.$slots,"empty",Sa(Io(s)),()=>[_(L(e.emptyText),1)],!0)],8,Tb)])):Q("",!0)])],4)],2))}}),Vb=ce(Ib,[["__scopeId","data-v-26749841"]]),ys=ke(Vb,_e("Table")),Sb=["aria-label"],zb=["id","aria-selected","aria-controls","tabindex","disabled","onClick","onKeydown"],Ab=["id","aria-labelledby"],Db=C({name:"MTabs",__name:"Tabs",props:{modelValue:{default:null},items:{default:()=>[]},size:{default:"medium"},ariaLabel:{default:void 0},keepAlive:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=vt("m-tabs"),a=z(null),i=x(()=>n.items.find(V=>!V.disabled)?.key??null),l=x(()=>{const V=n.modelValue;return V!=null&&n.items.some(A=>A.key===V&&!A.disabled)?V:i.value}),d=x(()=>[`m-tabs--${n.size}`]);function u(V){return n.items[V]?.key===l.value}function m(V){return`${o}-tab-${V}`}function p(V){return`${o}-panel-${V}`}function b(){return Array.from(a.value?.querySelectorAll('[role="tab"]')??[])}async function h(V){await lt(),b()[V]?.focus()}function B(V,A){V.disabled||(V.key!==l.value&&(s("update:modelValue",V.key),s("change",V.key,V)),h(A))}function I(V,A){if(!["ArrowRight","ArrowLeft","Home","End"].includes(V.key))return;const E=n.items.map((q,re)=>({item:q,index:re})).filter(q=>!q.item.disabled);if(E.length===0)return;V.preventDefault();let F;if(V.key==="Home")F=E[0];else if(V.key==="End")F=E[E.length-1];else{const q=E.findIndex(X=>X.index===A),re=q===-1?0:q,Y=V.key==="ArrowRight"?1:-1;F=E[(re+Y+E.length)%E.length]}F&&B(F.item,F.index)}return(V,A)=>(v(),y("div",{class:de(["m-tabs",d.value])},[g("div",{ref_key:"tablistRef",ref:a,class:"m-tabs__list",role:"tablist","aria-label":e.ariaLabel},[(v(!0),y(ie,null,xe(e.items,(D,E)=>(v(),y("button",{id:m(E),key:D.key,type:"button",role:"tab",class:de(["m-tabs__tab",{"is-active":u(E)}]),"aria-selected":u(E),"aria-controls":V.$slots.panel?p(E):void 0,tabindex:u(E)?0:-1,disabled:D.disabled,onClick:F=>B(D,E),onKeydown:F=>I(F,E)},L(D.label),43,zb))),128))],8,Sb),(v(!0),y(ie,null,xe(e.items,(D,E)=>(v(),y(ie,{key:`panel-${D.key}`},[V.$slots.panel&&(e.keepAlive||u(E))?An((v(),y("div",{key:0,id:p(E),class:"m-tabs__panel",role:"tabpanel","aria-labelledby":m(E),tabindex:"0"},[le(V.$slots,"panel",{item:D,index:E,active:u(E)},void 0,!0)],8,Ab)),[[Dn,e.keepAlive?u(E):!0]]):Q("",!0)],64))),128))],2))}}),Eb=ce(Db,[["__scopeId","data-v-d02fde87"]]),Hs=ke(Eb,_e("Tabs")),Rb={class:"m-tag__label"},Pb=["aria-label"],Lb=C({name:"MTag",__name:"Tag",props:{type:{default:"default"},size:{default:"medium"},closable:{type:Boolean,default:!1},color:{default:void 0},closeLabel:{default:"移除标签"}},emits:["close"],setup(e,{emit:t}){const n=e,s=t,o=x(()=>[`m-tag--${n.type}`,`m-tag--${n.size}`,{"m-tag--custom":!!n.color}]),a=x(()=>{if(n.color)return{"--m-tag-custom-color":n.color,"--m-tag-custom-bg":`color-mix(in srgb, ${n.color} 12%, var(--m-color-bg-container))`,"--m-tag-custom-border":`color-mix(in srgb, ${n.color} 28%, transparent)`}});function i(l){s("close",l)}return(l,d)=>(v(),y("span",{class:de(["m-tag",o.value]),style:$e(a.value)},[g("span",Rb,[le(l.$slots,"default",{},void 0,!0)]),e.closable?(v(),y("button",{key:0,type:"button",class:"m-tag__close","aria-label":e.closeLabel,onClick:pn(i,["stop"])},[c(Ie,{name:"close"})],8,Pb)):Q("",!0)],6))}}),Ob=ce(Lb,[["__scopeId","data-v-ec55770c"]]),qe=ke(Ob,_e("Tag")),Fb=["id","value","rows","placeholder","disabled","readonly","maxlength","name","aria-label","aria-invalid","aria-describedby"],Nb={key:0,class:"m-textarea__footer"},Jb={class:"m-textarea__count"},Gb=["id"],Ub=C({name:"MTextarea",__name:"Textarea",props:{modelValue:{default:""},size:{default:"medium"},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rows:{default:3},maxlength:{default:void 0},showCount:{type:Boolean,default:!1},resize:{default:"vertical"},error:{type:Boolean,default:!1},errorMessage:{default:void 0},name:{default:void 0},id:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","input","change","focus","blur"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=z(null),i=vt("m-textarea"),l=x(()=>`${i}-error`),d=x(()=>s.modelValue??""),u=x(()=>d.value.length),{isDisabled:m,isError:p,describedBy:b}=na(s,l),h=x(()=>[`m-textarea--${s.size}`,{"is-disabled":m.value,"is-readonly":s.readonly,"is-error":p.value}]);function B(V){if(m.value||s.readonly)return;const A=V.target;o("update:modelValue",A.value),o("input",A.value,V)}function I(V){o("change",V.target.value,V)}return t({focus:()=>a.value?.focus(),blur:()=>a.value?.blur(),select:()=>a.value?.select()}),(V,A)=>(v(),y("div",{class:de(["m-textarea",h.value])},[g("textarea",{id:e.id??r(i),ref_key:"textareaRef",ref:a,class:"m-textarea__control",value:d.value,rows:e.rows,placeholder:e.placeholder,disabled:r(m),readonly:e.readonly,maxlength:e.maxlength,name:e.name,"aria-label":e.ariaLabel,"aria-invalid":r(p)||void 0,"aria-describedby":r(b),style:$e({resize:e.resize}),onInput:B,onChange:I,onFocus:A[0]||(A[0]=D=>o("focus",D)),onBlur:A[1]||(A[1]=D=>o("blur",D))},null,44,Fb),e.showCount?(v(),y("div",Nb,[g("span",Jb,[_(L(u.value),1),e.maxlength!==void 0?(v(),y(ie,{key:0},[_(" / "+L(e.maxlength),1)],64)):Q("",!0)])])):Q("",!0),e.errorMessage?(v(),y("p",{key:1,id:l.value,class:"m-textarea__error"},L(e.errorMessage),9,Gb)):Q("",!0)],2))}}),jb=ce(Ub,[["__scopeId","data-v-1d8dd982"]]),Qn=ke(jb,_e("Textarea")),Wb=C({name:"MText",__name:"Text",props:{variant:{default:"body"},tone:{default:void 0},as:{default:void 0},block:{type:Boolean,default:!1},link:{type:Boolean,default:!1},href:{default:void 0},target:{default:void 0},rel:{default:void 0},ellipsis:{type:Boolean,default:!1},lines:{default:1}},setup(e){const t=e,n=x(()=>t.as??(t.link?"a":t.block?"p":"span")),s=x(()=>n.value==="a"),o=x(()=>t.link||s.value&&!!t.href),a=x(()=>t.ellipsis&&t.lines>1),i=x(()=>Math.max(1,Math.floor(t.lines))),l=x(()=>[`m-text--${t.variant}`,t.tone?`m-text--${t.tone}`:void 0,{"m-text--block":t.block,"m-text--link":o.value,"m-text--ellipsis":t.ellipsis&&!a.value,"m-text--clamp":a.value}]),d=x(()=>a.value?{"--m-text-lines":String(i.value)}:void 0),u=x(()=>{if(s.value)return t.rel?t.rel:t.target==="_blank"?"noopener noreferrer":void 0});return(m,p)=>(v(),we(Qo(n.value),{class:de(["m-text",l.value]),style:$e(d.value),href:s.value?e.href:void 0,target:s.value?e.target:void 0,rel:u.value},{default:f(()=>[le(m.$slots,"default",{},void 0,!0)]),_:3},8,["class","style","href","target","rel"]))}}),Hb=ce(Wb,[["__scopeId","data-v-8f90176f"]]),yt=ke(Hb,_e("Text")),lo=Id({maxVisible:5,maxQueue:20,dedupeWindow:500,getKey:e=>`${e.type}\0${e.title??""}\0${e.message}`}),Ud=mn(lo.visibleItems),qb=mn(lo.queuedItems);function hi(e){const t=typeof e=="string"?{message:e}:e;return lo.push({type:t.type??"info",title:t.title,message:t.message,duration:t.duration??3e3,closable:t.closable??!1,priority:t.priority??"normal"})}function Mi(e){lo.remove(e)}function jd(){lo.clear()}function Kb(){return()=>{}}const Qb={class:"m-toast",role:"region","aria-label":"通知"},Yb=["role"],Xb={class:"m-toast__content"},Zb={key:0,class:"m-toast__title"},ey={class:"m-toast__message"},ty=["onClick"],ny=C({name:"MToast",__name:"Toast",setup(e){const t={success:"success",info:"info",warning:"warning",error:"error"};let n=null;return gn(()=>{n=Kb()}),kt(()=>{n?.()}),(s,o)=>(v(),we(fn,{to:"body"},[g("div",Qb,[c(ud,{name:"m-toast-item",tag:"div",class:"m-toast__list"},{default:f(()=>[(v(!0),y(ie,null,xe(r(Ud),a=>(v(),y("div",{key:a.id,class:de(["m-toast__item",`m-toast__item--${a.type}`]),role:a.type==="error"?"alert":"status"},[c(Ie,{name:t[a.type],class:"m-toast__icon"},null,8,["name"]),g("div",Xb,[a.title?(v(),y("p",Zb,L(a.title),1)):Q("",!0),g("p",ey,L(a.message),1)]),a.closable?(v(),y("button",{key:0,type:"button",class:"m-toast__close","aria-label":"关闭通知",onClick:i=>r(Mi)(a.id)},[c(Ie,{name:"close"})],8,ty)):Q("",!0)],10,Yb))),128))]),_:1})])]))}}),sy=ce(ny,[["__scopeId","data-v-fc6f305f"]]);function oa(e){return(t,n={})=>hi({...n,message:t,type:e})}const Wd=oa("success"),Hd=oa("info"),qd=oa("warning"),Kd=oa("error"),Kt={show:hi,success:Wd,info:Hd,warning:qd,error:Kd,close:Mi,clear:jd};function oy(){return{toasts:Ud,queuedToasts:qb,show:hi,success:Wd,info:Hd,warning:qd,error:Kd,close:Mi,clear:jd}}const Qd=ke(sy,_e("Toast")),ay={class:"m-tooltip"},iy=["aria-describedby"],ly=["id"],ry=C({name:"MTooltip",__name:"Tooltip",props:{modelValue:{type:Boolean,default:void 0},content:{default:void 0},trigger:{default:"hover"},placement:{default:"top"},offset:{default:8},delay:{default:120},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},maxWidth:{default:240}},emits:["update:modelValue","open","close"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=z(null),i=z(null),l=z(!1),d=vt("m-tooltip"),u=x(()=>s.trigger??"hover"),m=x(()=>s.modelValue??l.value),p=x(()=>s.hideMode==="display"||m.value);let b=null;const h=x(()=>({maxWidth:typeof s.maxWidth=="number"?`${s.maxWidth}px`:s.maxWidth})),{style:B,actualPlacement:I}=so({trigger:a,panel:i,open:()=>m.value,placement:()=>s.placement,offset:s.offset,onReferenceHidden:()=>F()}),{zIndex:V}=es({open:()=>m.value,panel:i,ignore:()=>[a.value],closeOnEscape:!0,closeOnOutside:()=>u.value==="click",restoreFocus:!1,onDismiss:()=>F()});function A(){b!==null&&(clearTimeout(b),b=null)}function D(w){w&&s.disabled||w!==m.value&&(s.modelValue===void 0&&(l.value=w),o("update:modelValue",w))}function E(){s.disabled||(A(),u.value==="hover"&&s.delay>0?b=setTimeout(()=>{b=null,D(!0)},s.delay):D(!0))}function F(){A(),D(!1)}function q(){D(!m.value)}function re(){u.value==="hover"&&E()}function Y(){u.value==="hover"&&F()}function X(){u.value==="hover"&&E()}function G(w){if(u.value!=="hover")return;const $=w.relatedTarget;$ instanceof Node&&a.value?.contains($)||F()}function S(){u.value==="click"&&q()}return De(m,w=>{A(),o(w?"open":"close")},{flush:"post"}),De(()=>s.modelValue,w=>{A(),w!==void 0&&(l.value=w)},{immediate:!0}),De(()=>s.disabled,w=>{w&&F()}),De(u,()=>F()),kt(A),t({show:E,hide:F,toggle:q}),(w,$)=>(v(),y("span",ay,[g("span",{ref_key:"triggerRef",ref:a,class:"m-tooltip__trigger","aria-describedby":m.value?r(d):void 0,onMouseenter:re,onMouseleave:Y,onFocusin:X,onFocusout:G,onClick:S},[le(w.$slots,"default",{},void 0,!0)],40,iy),(v(),we(fn,{to:"body"},[c(Zn,{name:"m-tooltip"},{default:f(()=>[p.value?An((v(),y("div",{key:0,id:r(d),ref_key:"panelRef",ref:i,class:de(["m-tooltip__panel",`m-tooltip__panel--${r(I)}`]),style:$e({...r(B),...h.value,zIndex:r(V)}),role:"tooltip"},[le(w.$slots,"content",{},()=>[_(L(e.content),1)],!0)],14,ly)),[[Dn,e.hideMode==="display"?m.value:!0]]):Q("",!0)]),_:3})]))]))}}),dy=ce(ry,[["__scopeId","data-v-8cfc18d9"]]),St=ke(dy,_e("Tooltip")),cy=["id"],uy=C({name:"MTooltipGroup",__name:"TooltipGroup",props:{selector:{default:"[data-tooltip]"},placement:{default:"top"},offset:{default:8},delay:{default:120},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},maxWidth:{default:260}},emits:["open","close"],setup(e,{expose:t,emit:n}){const s=e,o=n,a=z(null),i=z(null),l=z(null),d=z(null),u=z(!1),m=vt("m-tooltip-group"),p=x(()=>s.hideMode==="display"||u.value),b=x(()=>({maxWidth:typeof s.maxWidth=="number"?`${s.maxWidth}px`:s.maxWidth}));let h=null,B=null;const{style:I,actualPlacement:V,update:A}=so({trigger:i,panel:l,open:()=>u.value,placement:()=>s.placement,offset:s.offset,onReferenceHidden:()=>w()}),{zIndex:D}=es({open:()=>u.value,panel:l,closeOnEscape:!0,closeOnOutside:!1,restoreFocus:!1,onDismiss:()=>w()});function E(){h!==null&&(clearTimeout(h),h=null)}function F(){B!==null&&(clearTimeout(B),B=null)}function q(se){if(!(se instanceof Element)||!a.value)return null;try{const pe=se.closest(s.selector);return!pe||!a.value.contains(pe)?null:pe}catch{return null}}function re(){d.value?.removeAttribute("aria-describedby")}function Y(se){se.setAttribute("aria-describedby",m)}function X(se){d.value!==se&&(re(),d.value=se,i.value=se,u.value&&(Y(se),lt(A)))}function G(se){s.disabled||!se.isConnected||d.value!==se||(u.value=!0,Y(se),o("open",se))}function S(se,pe=!1){if(!s.disabled&&(E(),F(),X(se),!u.value)){if(pe||s.delay<=0){G(se);return}h=setTimeout(()=>{h=null,G(se)},s.delay)}}function w(){E(),F(),re(),u.value&&(u.value=!1,o("close",d.value))}function $(){E(),F(),B=setTimeout(()=>{B=null,w()},80)}function P(se){const pe=q(se.target);pe&&S(pe)}function Z(se){const pe=q(se.target);if(!pe||pe!==d.value)return;const ze=se.relatedTarget;ze instanceof Node&&(pe.contains(ze)||l.value?.contains(ze)||q(ze)!==null)||$()}function ye(se){const pe=q(se.target);pe&&S(pe,!0)}function N(se){const pe=q(se.target);if(!pe||pe!==d.value)return;const ze=se.relatedTarget;ze instanceof Node&&(pe.contains(ze)||l.value?.contains(ze))||$()}function j(){F()}function ee(){$()}return De(()=>s.disabled,se=>{se&&w()}),De(()=>s.selector,()=>w()),kt(()=>{E(),F(),re()}),t({hide:w}),(se,pe)=>(v(),y("span",{ref_key:"wrapperRef",ref:a,class:"m-tooltip-group",onMouseover:P,onMouseout:Z,onFocusin:ye,onFocusout:N},[le(se.$slots,"default",{},void 0,!0),(v(),we(fn,{to:"body"},[c(Zn,{name:"m-tooltip-group"},{default:f(()=>[p.value?An((v(),y("div",{key:0,id:r(m),ref_key:"panelRef",ref:l,class:de(["m-tooltip-group__panel",`m-tooltip-group__panel--${r(V)}`]),style:$e({...r(I),...b.value,zIndex:r(D)}),role:"tooltip",onMouseenter:j,onMouseleave:ee},[le(se.$slots,"content",{target:d.value},()=>[_(L(d.value?.dataset.tooltip),1)],!0)],46,cy)),[[Dn,e.hideMode==="display"?u.value:!0]]):Q("",!0)]),_:3})]))],544))}}),my=ce(uy,[["__scopeId","data-v-ceef8ccd"]]),_i=ke(my,_e("TooltipGroup")),py=[Et,R,ho,je,Qn,qn,jt,gi,dn,Ws,Dt,Kn,qt,yt,qe,st,Xt,Je,Vt,Qd,Nd,us,ls,Ht,Hs,io,Us,bt,pt,Ro,ta,ys,eo,to,Ne,oo,ao,bs,no,St,_i,ms,gs,js,cn],fy="(prefers-color-scheme: dark)",hl="m-theme-transition",vy=220,Vn=z("system"),aa=z(!1),Ml=z(!1),qs=x(()=>Vn.value==="system"?aa.value?"dark":"light":Vn.value);let Jn=null,go=null,_l=!1;function ki(e){return e==="light"||e==="dark"||e==="system"}function gy(){if(!Bt)return null;try{const e=window.localStorage.getItem(vi);return ki(e)?e:null}catch{return null}}function by(e){if(Bt)try{window.localStorage.setItem(vi,e)}catch{}}function yy(){return!Bt||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kl(e,t){if(!Bt)return;const n=document.documentElement;t&&!yy()&&(n.classList.add(hl),go!==null&&window.clearTimeout(go),go=window.setTimeout(()=>{n.classList.remove(hl),go=null},vy)),n.dataset.theme=e,n.style.colorScheme=e}function wl(e){aa.value=e.matches}function hy(e){if(e.key===vi){if(e.newValue===null){Vn.value="system";return}ki(e.newValue)&&(Vn.value=e.newValue)}}function ro(){if(Ml.value||!Bt)return;Ml.value=!0;const e=gy();Vn.value=e??"system",typeof window.matchMedia=="function"&&(Jn=window.matchMedia(fy),aa.value=Jn.matches,typeof Jn.addEventListener=="function"?Jn.addEventListener("change",wl):Jn.addListener(wl)),_l||(window.addEventListener("storage",hy),_l=!0),kl(qs.value,!1),De(qs,(t,n)=>{n!==void 0&&kl(t,!0)},{flush:"post"})}function Yd(e){if(!ki(e))throw new TypeError(`Invalid theme mode: ${String(e)}`);ro(),e==="system"&&Jn!==null&&(aa.value=Jn.matches),Vn.value=e,by(e)}function My(){return ro(),Vn.value}function _y(){ro();const e=qs.value==="dark"?"light":"dark";return Yd(e),e}function ky(){return ro(),{theme:mn(Vn),resolvedTheme:qs,isDark:x(()=>qs.value==="dark"),setTheme:Yd,getTheme:My,toggleTheme:_y}}const wy={version:gd,install(e){for(const t of py)e.use(t);ro()}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const as=typeof document<"u";function Xd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Xd(e.default)}const Ve=Object.assign;function $a(e,t){const n={};for(const s in t){const o=t[s];n[s]=Rt(o)?o.map(e):e(o)}return n}const Es=()=>{},Rt=Array.isArray;function xl(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Zd=/#/g,By=/&/g,Cy=/\//g,$y=/=/g,Ty=/\?/g,ec=/\+/g,Iy=/%5B/g,Vy=/%5D/g,tc=/%5E/g,Sy=/%60/g,nc=/%7B/g,zy=/%7C/g,sc=/%7D/g,Ay=/%20/g;function wi(e){return e==null?"":encodeURI(""+e).replace(zy,"|").replace(Iy,"[").replace(Vy,"]")}function Dy(e){return wi(e).replace(nc,"{").replace(sc,"}").replace(tc,"^")}function Ha(e){return wi(e).replace(ec,"%2B").replace(Ay,"+").replace(Zd,"%23").replace(By,"%26").replace(Sy,"`").replace(nc,"{").replace(sc,"}").replace(tc,"^")}function Ey(e){return Ha(e).replace($y,"%3D")}function Ry(e){return wi(e).replace(Zd,"%23").replace(Ty,"%3F")}function Py(e){return Ry(e).replace(Cy,"%2F")}function Ks(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Ly=/\/$/,Oy=e=>e.replace(Ly,"");function Ta(e,t,n="/"){let s,o={},a="",i="";const l=t.indexOf("#");let d=t.indexOf("?");return d=l>=0&&d>l?-1:d,d>=0&&(s=t.slice(0,d),a=t.slice(d,l>0?l:t.length),o=e(a.slice(1))),l>=0&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=Gy(s??t,n),{fullPath:s+a+i,path:s,query:o,hash:Ks(i)}}function Fy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Bl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ny(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&ps(t.matched[s],n.matched[o])&&oc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ps(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function oc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Jy(e[n],t[n]))return!1;return!0}function Jy(e,t){return Rt(e)?Cl(e,t):Rt(t)?Cl(t,e):e?.valueOf()===t?.valueOf()}function Cl(e,t){return Rt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Gy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let a=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+s.slice(i).join("/")}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let qa=(function(e){return e.pop="pop",e.push="push",e})({}),Ia=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Uy(e){if(!e)if(as){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Oy(e)}const jy=/^[^#]+#/;function Wy(e,t){return e.replace(jy,"#")+t}function Hy(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ia=()=>({left:window.scrollX,top:window.scrollY});function qy(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Hy(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $l(e,t){return(history.state?history.state.position-t:-1)+e}const Ka=new Map;function Ky(e,t){Ka.set(e,t)}function Qy(e){const t=Ka.get(e);return Ka.delete(e),t}function Yy(e){return typeof e=="string"||e&&typeof e=="object"}function ac(e){return typeof e=="string"||typeof e=="symbol"}let Ue=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ic=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function fs(e,t){return Ve(new Error,{type:e,[ic]:!0},t)}function sn(e,t){return e instanceof Error&&ic in e&&(t==null||!!(e.type&t))}const Xy=["params","query","hash"];function Zy(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Xy)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function eh(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(ec," "),a=o.indexOf("="),i=Ks(a<0?o:o.slice(0,a)),l=a<0?null:Ks(o.slice(a+1));if(i in t){let d=t[i];Rt(d)||(d=t[i]=[d]),d.push(l)}else t[i]=l}return t}function Tl(e){let t="";for(let n in e){const s=e[n];if(n=Ey(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Rt(s)?s.map(o=>o&&Ha(o)):[s&&Ha(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function th(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Rt(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const nh=Symbol(""),Il=Symbol(""),la=Symbol(""),xi=Symbol(""),Qa=Symbol("");function xs(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Bn(e,t,n,s,o,a=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((l,d)=>{const u=b=>{b===!1?d(fs(Ue.NAVIGATION_ABORTED,{from:n,to:t})):b instanceof Error?d(b):Yy(b)?d(fs(Ue.NAVIGATION_GUARD_REDIRECT,{from:t,to:b})):(i&&s.enterCallbacks[o]===i&&typeof b=="function"&&i.push(b),l())},m=a(()=>e.call(s&&s.instances[o],t,n,u));let p=Promise.resolve(m);e.length<3&&(p=p.then(u)),p.catch(b=>d(b))})}function Va(e,t,n,s,o=a=>a()){const a=[];for(const i of e)for(const l in i.components){let d=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Xd(d)){const u=(d.__vccOpts||d)[t];u&&a.push(Bn(u,n,s,i,l,o))}else{let u=d();a.push(()=>u.then(m=>{if(!m)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const p=xy(m)?m.default:m;i.mods[l]=m,i.components[l]=p;const b=(p.__vccOpts||p)[t];return b&&Bn(b,n,s,i,l,o)()}))}}return a}function sh(e,t){const n=[],s=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let i=0;i<a;i++){const l=t.matched[i];l&&(e.matched.find(u=>ps(u,l))?s.push(l):n.push(l));const d=e.matched[i];d&&(t.matched.find(u=>ps(u,d))||o.push(d))}return[n,s,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let oh=()=>location.protocol+"//"+location.host;function lc(e,t){const{pathname:n,search:s,hash:o}=t,a=e.indexOf("#");if(a>-1){let i=o.includes(e.slice(a))?e.slice(a).length:1,l=o.slice(i);return l[0]!=="/"&&(l="/"+l),Bl(l,"")}return Bl(n,e)+s+o}function ah(e,t,n,s){let o=[],a=[],i=null;const l=({state:b})=>{const h=lc(e,location),B=n.value,I=t.value;let V=0;if(b){if(n.value=h,t.value=b,i&&i===B){i=null;return}V=I?b.position-I.position:0}else s(h);o.forEach(A=>{A(n.value,B,{delta:V,type:qa.pop,direction:V?V>0?Ia.forward:Ia.back:Ia.unknown})})};function d(){i=n.value}function u(b){o.push(b);const h=()=>{const B=o.indexOf(b);B>-1&&o.splice(B,1)};return a.push(h),h}function m(){if(document.visibilityState==="hidden"){const{history:b}=window;if(!b.state)return;b.replaceState(Ve({},b.state,{scroll:ia()}),"")}}function p(){for(const b of a)b();a=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",m),document.removeEventListener("visibilitychange",m)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",m),document.addEventListener("visibilitychange",m),{pauseListeners:d,listen:u,destroy:p}}function Vl(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ia():null}}function ih(e){const{history:t,location:n}=window,s={value:lc(e,n)},o={value:t.state};o.value||a(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(d,u,m){const p=e.indexOf("#"),b=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+d:oh()+e+d;try{t[m?"replaceState":"pushState"](u,"",b),o.value=u}catch(h){console.error(h),n[m?"replace":"assign"](b)}}function i(d,u){a(d,Ve({},t.state,Vl(o.value.back,d,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=d}function l(d,u){const m=Ve({},o.value,t.state,{forward:d,scroll:ia()});a(m.current,m,!0),a(d,Ve({},Vl(s.value,d,null),{position:m.position+1},u),!1),s.value=d}return{location:s,state:o,push:l,replace:i}}function lh(e){e=Uy(e);const t=ih(e),n=ah(e,t.state,t.location,t.replace);function s(a,i=!0){i||n.pauseListeners(),history.go(a)}const o=Ve({location:"",base:e,go:s,createHref:Wy.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let jn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Qe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Qe||{});const rh={type:jn.Static,value:""},dh=/[a-zA-Z0-9_]/;function ch(e){if(!e)return[[]];if(e==="/")return[[rh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=Qe.Static,s=n;const o=[];let a;function i(){a&&o.push(a),a=[]}let l=0,d,u="",m="";function p(){u&&(n===Qe.Static?a.push({type:jn.Static,value:u}):n===Qe.Param||n===Qe.ParamRegExp||n===Qe.ParamRegExpEnd?(a.length>1&&(d==="*"||d==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:jn.Param,value:u,regexp:m,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):t("Invalid state to consume buffer"),u="")}function b(){u+=d}for(;l<e.length;){if(d=e[l++],d==="\\"&&n!==Qe.ParamRegExp){s=n,n=Qe.EscapeNext;continue}switch(n){case Qe.Static:d==="/"?(u&&p(),i()):d===":"?(p(),n=Qe.Param):b();break;case Qe.EscapeNext:b(),n=s;break;case Qe.Param:d==="("?n=Qe.ParamRegExp:dh.test(d)?b():(p(),n=Qe.Static,d!=="*"&&d!=="?"&&d!=="+"&&l--);break;case Qe.ParamRegExp:d===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+d:n=Qe.ParamRegExpEnd:m+=d;break;case Qe.ParamRegExpEnd:p(),n=Qe.Static,d!=="*"&&d!=="?"&&d!=="+"&&l--,m="";break;default:t("Unknown state");break}}return n===Qe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),i(),o}const Sl="[^/]+?",uh={sensitive:!1,strict:!1,start:!0,end:!0};var ut=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ut||{});const mh=/[.+*?^${}()[\]/\\]/g;function ph(e,t){const n=Ve({},uh,t),s=[];let o=n.start?"^":"";const a=[];for(const u of e){const m=u.length?[]:[ut.Root];n.strict&&!u.length&&(o+="/");for(let p=0;p<u.length;p++){const b=u[p];let h=ut.Segment+(n.sensitive?ut.BonusCaseSensitive:0);if(b.type===jn.Static)p||(o+="/"),o+=b.value.replace(mh,"\\$&"),h+=ut.Static;else if(b.type===jn.Param){const{value:B,repeatable:I,optional:V,regexp:A}=b;a.push({name:B,repeatable:I,optional:V});const D=A||Sl;if(D!==Sl){h+=ut.BonusCustomRegExp;try{`${D}`}catch(F){throw new Error(`Invalid custom RegExp for param "${B}" (${D}): `+F.message)}}let E=I?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(E=V&&u.length<2?`(?:/${E})`:"/"+E),V&&(E+="?"),o+=E,h+=ut.Dynamic,V&&(h+=ut.BonusOptional),I&&(h+=ut.BonusRepeatable),D===".*"&&(h+=ut.BonusWildcard)}m.push(h)}s.push(m)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=ut.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(u){const m=u.match(i),p={};if(!m)return null;for(let b=1;b<m.length;b++){const h=m[b]||"",B=a[b-1];p[B.name]=h&&B.repeatable?h.split("/"):h}return p}function d(u){let m="",p=!1;for(const b of e){(!p||!m.endsWith("/"))&&(m+="/"),p=!1;for(const h of b)if(h.type===jn.Static)m+=h.value;else if(h.type===jn.Param){const{value:B,repeatable:I,optional:V}=h,A=B in u?u[B]:"";if(Rt(A)&&!I)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const D=Rt(A)?A.join("/"):A;if(!D)if(V)b.length<2&&(m.endsWith("/")?m=m.slice(0,-1):p=!0);else throw new Error(`Missing required param "${B}"`);m+=D}}return m||"/"}return{re:i,score:s,keys:a,parse:l,stringify:d}}function fh(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===ut.Static+ut.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ut.Static+ut.Segment?1:-1:0}function rc(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const a=fh(s[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-s.length)===1){if(zl(s))return 1;if(zl(o))return-1}return o.length-s.length}function zl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const vh={strict:!1,end:!0,sensitive:!1};function gh(e,t,n){const s=ph(ch(e.path),n),o=Ve(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function bh(e,t){const n=[],s=new Map;t=xl(vh,t);function o(p){return s.get(p)}function a(p,b,h){const B=!h,I=Dl(p);I.aliasOf=h&&h.record;const V=xl(t,p),A=[I];if("alias"in p){const F=typeof p.alias=="string"?[p.alias]:p.alias;for(const q of F)A.push(Dl(Ve({},I,{components:h?h.record.components:I.components,path:q,aliasOf:h?h.record:I})))}let D,E;for(const F of A){const{path:q}=F;if(b&&q[0]!=="/"){const re=b.record.path,Y=re[re.length-1]==="/"?"":"/";F.path=b.record.path+(q&&Y+q)}if(D=gh(F,b,V),h?h.alias.push(D):(E=E||D,E!==D&&E.alias.push(D),B&&p.name&&!El(D)&&i(p.name)),dc(D)&&d(D),I.children){const re=I.children;for(let Y=0;Y<re.length;Y++)a(re[Y],D,h&&h.children[Y])}h=h||D}return E?()=>{i(E)}:Es}function i(p){if(ac(p)){const b=s.get(p);b&&(s.delete(p),n.splice(n.indexOf(b),1),b.children.forEach(i),b.alias.forEach(i))}else{const b=n.indexOf(p);b>-1&&(n.splice(b,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function l(){return n}function d(p){const b=Mh(p,n);n.splice(b,0,p),p.record.name&&!El(p)&&s.set(p.record.name,p)}function u(p,b){let h,B={},I,V;if("name"in p&&p.name){if(h=s.get(p.name),!h)throw fs(Ue.MATCHER_NOT_FOUND,{location:p});V=h.record.name,B=Ve(Al(b.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),p.params&&Al(p.params,h.keys.map(E=>E.name))),I=h.stringify(B)}else if(p.path!=null)I=p.path,h=n.find(E=>E.re.test(I)),h&&(B=h.parse(I),V=h.record.name);else{if(h=b.name?s.get(b.name):n.find(E=>E.re.test(b.path)),!h)throw fs(Ue.MATCHER_NOT_FOUND,{location:p,currentLocation:b});V=h.record.name,B=Ve({},b.params,p.params),I=h.stringify(B)}const A=[];let D=h;for(;D;)A.unshift(D.record),D=D.parent;return{name:V,path:I,params:B,matched:A,meta:hh(A)}}e.forEach(p=>a(p));function m(){n.length=0,s.clear()}return{addRoute:a,resolve:u,removeRoute:i,clearRoutes:m,getRoutes:l,getRecordMatcher:o}}function Al(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Dl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:yh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function yh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function El(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hh(e){return e.reduce((t,n)=>Ve(t,n.meta),{})}function Mh(e,t){let n=0,s=t.length;for(;n!==s;){const a=n+s>>1;rc(e,t[a])<0?s=a:n=a+1}const o=_h(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function _h(e){let t=e;for(;t=t.parent;)if(dc(t)&&rc(e,t)===0)return t}function dc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Rl(e){const t=Ze(la),n=Ze(xi),s=x(()=>{const d=r(e.to);return t.resolve(d)}),o=x(()=>{const{matched:d}=s.value,{length:u}=d,m=d[u-1],p=n.matched;if(!m||!p.length)return-1;const b=p.findIndex(ps.bind(null,m));if(b>-1)return b;const h=Pl(d[u-2]);return u>1&&Pl(m)===h&&p[p.length-1].path!==h?p.findIndex(ps.bind(null,d[u-2])):b}),a=x(()=>o.value>-1&&Bh(n.params,s.value.params)),i=x(()=>o.value>-1&&o.value===n.matched.length-1&&oc(n.params,s.value.params));function l(d={}){if(xh(d)){const u=t[r(e.replace)?"replace":"push"](r(e.to)).catch(Es);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:x(()=>s.value.href),isActive:a,isExactActive:i,navigate:l}}function kh(e){return e.length===1?e[0]:e}const wh=C({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rl,setup(e,{slots:t}){const n=zn(Rl(e)),{options:s}=Ze(la),o=x(()=>({[Ll(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ll(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&kh(t.default(n));return e.custom?a:ds("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),rs=wh;function xh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bh(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Rt(o)||o.length!==s.length||s.some((a,i)=>a.valueOf()!==o[i].valueOf()))return!1}return!0}function Pl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ll=(e,t,n)=>e??t??n,Ch=C({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ze(Qa),o=x(()=>e.route||s.value),a=Ze(Il,0),i=x(()=>{let u=r(a);const{matched:m}=o.value;let p;for(;(p=m[u])&&!p.components;)u++;return u}),l=x(()=>o.value.matched[i.value]);At(Il,x(()=>i.value+1)),At(nh,l),At(Qa,o);const d=z();return De(()=>[d.value,l.value,e.name],([u,m,p],[b,h,B])=>{m&&(m.instances[p]=u,h&&h!==m&&u&&u===b&&(m.leaveGuards.size||(m.leaveGuards=h.leaveGuards),m.updateGuards.size||(m.updateGuards=h.updateGuards))),u&&m&&(!h||!ps(m,h)||!b)&&(m.enterCallbacks[p]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=o.value,m=e.name,p=l.value,b=p&&p.components[m];if(!b)return Ol(n.default,{Component:b,route:u});const h=p.props[m],B=h?h===!0?u.params:typeof h=="function"?h(u):h:null,V=ds(b,Ve({},B,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(p.instances[m]=null)},ref:d}));return Ol(n.default,{Component:V,route:u})||V}}});function Ol(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cc=Ch;function $h(e){const t=bh(e.routes,e),n=e.parseQuery||eh,s=e.stringifyQuery||Tl,o=e.history,a=xs(),i=xs(),l=xs(),d=Gc(hn);let u=hn;as&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=$a.bind(null,U=>""+U),p=$a.bind(null,Py),b=$a.bind(null,Ks);function h(U,ue){let oe,be;return ac(U)?(oe=t.getRecordMatcher(U),be=ue):be=U,t.addRoute(be,oe)}function B(U){const ue=t.getRecordMatcher(U);ue&&t.removeRoute(ue)}function I(){return t.getRoutes().map(U=>U.record)}function V(U){return!!t.getRecordMatcher(U)}function A(U,ue){if(ue=Ve({},ue||d.value),typeof U=="string"){const O=Ta(n,U,ue.path),J=t.resolve({path:O.path},ue),W=o.createHref(O.fullPath);return Ve(O,J,{params:b(J.params),hash:Ks(O.hash),redirectedFrom:void 0,href:W})}let oe;if(U.path!=null)oe=Ve({},U,{path:Ta(n,U.path,ue.path).path});else{const O=Ve({},U.params);for(const J in O)O[J]==null&&delete O[J];oe=Ve({},U,{params:p(O)}),ue.params=p(ue.params)}const be=t.resolve(oe,ue),M=U.hash||"";be.params=m(b(be.params));const k=Fy(s,Ve({},U,{hash:Dy(M),path:be.path})),T=o.createHref(k);return Ve({fullPath:k,hash:M,query:s===Tl?th(U.query):U.query||{}},be,{redirectedFrom:void 0,href:T})}function D(U){return typeof U=="string"?Ta(n,U,d.value.path):Ve({},U)}function E(U,ue){if(u!==U)return fs(Ue.NAVIGATION_CANCELLED,{from:ue,to:U})}function F(U){return Y(U)}function q(U){return F(Ve(D(U),{replace:!0}))}function re(U,ue){const oe=U.matched[U.matched.length-1];if(oe&&oe.redirect){const{redirect:be}=oe;let M=typeof be=="function"?be(U,ue):be;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=D(M):{path:M},M.params={}),Ve({query:U.query,hash:U.hash,params:M.path!=null?{}:U.params},M)}}function Y(U,ue){const oe=u=A(U),be=d.value,M=U.state,k=U.force,T=U.replace===!0,O=re(oe,be);if(O)return Y(Ve(D(O),{state:typeof O=="object"?Ve({},M,O.state):M,force:k,replace:T}),ue||oe);const J=oe;J.redirectedFrom=ue;let W;return!k&&Ny(s,be,oe)&&(W=fs(Ue.NAVIGATION_DUPLICATED,{to:J,from:be}),ze(be,be,!0,!1)),(W?Promise.resolve(W):S(J,be)).catch(K=>sn(K)?sn(K,Ue.NAVIGATION_GUARD_REDIRECT)?K:pe(K):ee(K,J,be)).then(K=>{if(K){if(sn(K,Ue.NAVIGATION_GUARD_REDIRECT))return Y(Ve({replace:T},D(K.to),{state:typeof K.to=="object"?Ve({},M,K.to.state):M,force:k}),ue||J)}else K=$(J,be,!0,T,M);return w(J,be,K),K})}function X(U,ue){const oe=E(U,ue);return oe?Promise.reject(oe):Promise.resolve()}function G(U){const ue=Ge.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(U):U()}function S(U,ue){let oe;const[be,M,k]=sh(U,ue);oe=Va(be.reverse(),"beforeRouteLeave",U,ue);for(const O of be)O.leaveGuards.forEach(J=>{oe.push(Bn(J,U,ue))});const T=X.bind(null,U,ue);return oe.push(T),ot(oe).then(()=>{oe=[];for(const O of a.list())oe.push(Bn(O,U,ue));return oe.push(T),ot(oe)}).then(()=>{oe=Va(M,"beforeRouteUpdate",U,ue);for(const O of M)O.updateGuards.forEach(J=>{oe.push(Bn(J,U,ue))});return oe.push(T),ot(oe)}).then(()=>{oe=[];for(const O of k)if(O.beforeEnter)if(Rt(O.beforeEnter))for(const J of O.beforeEnter)oe.push(Bn(J,U,ue));else oe.push(Bn(O.beforeEnter,U,ue));return oe.push(T),ot(oe)}).then(()=>(U.matched.forEach(O=>O.enterCallbacks={}),oe=Va(k,"beforeRouteEnter",U,ue,G),oe.push(T),ot(oe))).then(()=>{oe=[];for(const O of i.list())oe.push(Bn(O,U,ue));return oe.push(T),ot(oe)}).catch(O=>sn(O,Ue.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function w(U,ue,oe){l.list().forEach(be=>G(()=>be(U,ue,oe)))}function $(U,ue,oe,be,M){const k=E(U,ue);if(k)return k;const T=ue===hn,O=as?history.state:{};oe&&(be||T?o.replace(U.fullPath,Ve({scroll:T&&O&&O.scroll},M)):o.push(U.fullPath,M)),d.value=U,ze(U,ue,oe,T),pe()}let P;function Z(){P||(P=o.listen((U,ue,oe)=>{if(!rt.listening)return;const be=A(U),M=re(be,rt.currentRoute.value);if(M){Y(Ve(M,{replace:!0,force:!0}),be).catch(Es);return}u=be;const k=d.value;as&&Ky($l(k.fullPath,oe.delta),ia()),S(be,k).catch(T=>sn(T,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?T:sn(T,Ue.NAVIGATION_GUARD_REDIRECT)?(Y(Ve(D(T.to),{force:!0}),be).then(O=>{sn(O,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===qa.pop&&o.go(-1,!1)}).catch(Es),Promise.reject()):(oe.delta&&o.go(-oe.delta,!1),ee(T,be,k))).then(T=>{T=T||$(be,k,!1),T&&(oe.delta&&!sn(T,Ue.NAVIGATION_CANCELLED)?o.go(-oe.delta,!1):oe.type===qa.pop&&sn(T,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),w(be,k,T)}).catch(Es)}))}let ye=xs(),N=xs(),j;function ee(U,ue,oe){pe(U);const be=N.list();return be.length?be.forEach(M=>M(U,ue,oe)):console.error(U),Promise.reject(U)}function se(){return j&&d.value!==hn?Promise.resolve():new Promise((U,ue)=>{ye.add([U,ue])})}function pe(U){return j||(j=!U,Z(),ye.list().forEach(([ue,oe])=>U?oe(U):ue()),ye.reset()),U}function ze(U,ue,oe,be){const{scrollBehavior:M}=e;if(!as||!M)return Promise.resolve();const k=!oe&&Qy($l(U.fullPath,0))||(be||!oe)&&history.state&&history.state.scroll||null;return lt().then(()=>M(U,ue,k)).then(T=>T&&qy(T)).catch(T=>ee(T,U,ue))}const me=U=>o.go(U);let Le;const Ge=new Set,rt={currentRoute:d,listening:!0,addRoute:h,removeRoute:B,clearRoutes:t.clearRoutes,hasRoute:V,getRoutes:I,resolve:A,options:e,push:F,replace:q,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:a.add,beforeResolve:i.add,afterEach:l.add,onError:N.add,isReady:se,install(U){U.component("RouterLink",rs),U.component("RouterView",cc),U.config.globalProperties.$router=rt,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>r(d)}),as&&!Le&&d.value===hn&&(Le=!0,F(o.location).catch(be=>{}));const ue={};for(const be in hn)Object.defineProperty(ue,be,{get:()=>d.value[be],enumerable:!0});U.provide(la,rt),U.provide(xi,vr(ue)),U.provide(Qa,d);const oe=U.unmount;Ge.add(U),U.unmount=function(){Ge.delete(U),Ge.size<1&&(u=hn,P&&P(),P=null,d.value=hn,Le=!1,j=!1),oe()}}};function ot(U){return U.reduce((ue,oe)=>ue.then(()=>G(oe)),Promise.resolve())}return rt}function PV(){return Ze(la)}function ra(e){return Ze(xi)}const Yn={name:"Anemia UI",shortName:"Anemia",tagline:"安静、克制、为长期而生的 Vue 3 组件库",description:"一套从设计 Token、主题系统到组件 API 全部自行设计的 Vue 3 组件库。优先保证一致性、可维护性与类型安全。",version:gd,github:"https://gitee.com/AnemiaMiRo/anemia-ui",npm:"anemia-ui"},da=np("docs",()=>{const e=z(!1),t=z(""),n=z([]);function s(){e.value=!e.value}function o(){e.value=!0}function a(){e.value=!1}function i(l){n.value=[l,...n.value.filter(d=>d!==l)].slice(0,5)}return{sidebarOpen:e,searchQuery:t,recentPaths:n,toggleSidebar:s,openSidebar:o,closeSidebar:a,recordVisit:i}}),Th={class:"theme-toggle",role:"group","aria-label":"主题模式"},Ih=["title","aria-label","aria-pressed","onClick"],Vh=C({__name:"ThemeToggle",setup(e){const{theme:t,setTheme:n}=ky(),s=[{mode:"light",icon:"sun",label:"白天模式"},{mode:"dark",icon:"moon",label:"黑夜模式"},{mode:"system",icon:"monitor",label:"跟随系统"}];return(o,a)=>(v(),y("div",Th,[(v(),y(ie,null,xe(s,i=>g("button",{key:i.mode,type:"button",class:de(["theme-toggle__button",{"is-active":r(t)===i.mode}]),title:i.label,"aria-label":i.label,"aria-pressed":r(t)===i.mode,onClick:l=>r(n)(i.mode)},[c(r(Et),{name:i.icon,size:15},null,8,["name"])],10,Ih)),64))]))}}),Sh=ce(Vh,[["__scopeId","data-v-02b90950"]]),zh={class:"app-header"},Ah={class:"app-header__inner"},Dh=["aria-expanded"],Eh={class:"brand__version"},Rh={class:"primary-nav","aria-label":"主导航"},Ph={class:"header-actions"},Lh=["href"],Oh=C({__name:"AppHeader",setup(e){const t=ra(),n=da(),s=x(()=>t.path.startsWith("/components")),o=x(()=>t.path.startsWith("/design"));return(a,i)=>(v(),y("header",zh,[g("div",Ah,[g("button",{type:"button",class:"app-header__menu","aria-label":"打开导航","aria-expanded":r(n).sidebarOpen,onClick:i[0]||(i[0]=l=>r(n).toggleSidebar())},[c(r(Et),{name:"menu",size:20})],8,Dh),c(r(rs),{to:"/",class:"brand","aria-label":"Anemia UI 首页"},{default:f(()=>[i[1]||(i[1]=g("span",{class:"brand__mark","aria-hidden":"true"},"A",-1)),i[2]||(i[2]=g("span",{class:"brand__name"},[_("Anemia"),g("span",null,"UI")],-1)),g("span",Eh,"v"+L(r(Yn).version),1)]),_:1}),g("nav",Rh,[c(r(rs),{to:"/components",class:de(["primary-nav__link",{"is-active":s.value}])},{default:f(()=>[...i[3]||(i[3]=[_(" 组件文档 ",-1)])]),_:1},8,["class"]),c(r(rs),{to:"/design/colors",class:de(["primary-nav__link",{"is-active":o.value}])},{default:f(()=>[...i[4]||(i[4]=[_(" 设计规范 ",-1)])]),_:1},8,["class"])]),g("div",Ph,[g("a",{href:r(Yn).github,class:"icon-link",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub 仓库",title:"GitHub"},[c(r(Et),{name:"github",size:18})],8,Lh),c(Sh)])])]))}}),Fh=ce(Oh,[["__scopeId","data-v-15ced153"]]),ca=[{id:"basic",title:"基础控件",english:"Basic Controls",description:"直接接收输入或触发操作的基础交互元素。"},{id:"display",title:"展示元素",english:"Display",description:"以文本、状态、身份、分类与分隔表达信息，不承载主要输入。"},{id:"feedback",title:"反馈提示",english:"Feedback",description:"向用户传达系统状态、结果或需要关注的信息。"},{id:"navigation",title:"导航与切换",english:"Navigation",description:"在视图、面板或页面层级之间切换。"},{id:"container",title:"容器与布局",english:"Containers & Layout",description:"组织内容结构，承载其他组件。"},{id:"data",title:"数据展示",english:"Data Display",description:"以结构化方式呈现数据集合或记录。"},{id:"overlay",title:"浮层与交互",english:"Overlays",description:"需要浮层、遮罩、焦点限制或关闭语义的交互。"},{id:"form",title:"表单与复合",english:"Forms & Composite",description:"需要表单上下文、校验或跨组件状态协作的复合组件。"}],LV=Object.fromEntries(ca.map(e=>[e.id,e])),Nh={class:"demo-stack",style:{"max-width":"560px"}},Jh={class:"demo-hint"},Gh=C({__name:"Closable",setup(e){const t=z(!0),n=z(0);function s(){t.value=!1,n.value+=1}function o(){t.value=!0}return(a,i)=>(v(),y("div",Nh,[t.value?(v(),we(r(Vt),{key:0,type:"info",title:"可关闭提示",closable:"",onClose:s},{default:f(()=>[...i[0]||(i[0]=[_(" 关闭后组件会隐藏自身，并通过 close 事件通知父级。 ",-1)])]),_:1})):(v(),we(r(R),{key:1,size:"small",type:"outline",onClick:o},{default:f(()=>[...i[1]||(i[1]=[_("重新显示",-1)])]),_:1})),g("p",Jh,"已关闭 "+L(n.value)+" 次。",1)]))}}),Uh=`<script setup lang="ts">
import { MAlert, MButton } from 'anemia-ui'
import { ref } from 'vue'

const visible = ref(true)
const closedCount = ref(0)

function close(): void {
  visible.value = false
  closedCount.value += 1
}

function restore(): void {
  visible.value = true
}
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert v-if="visible" type="info" title="可关闭提示" closable @close="close">
      关闭后组件会隐藏自身，并通过 close 事件通知父级。
    </MAlert>
    <MButton v-else size="small" type="outline" @click="restore">重新显示</MButton>
    <p class="demo-hint">已关闭 {{ closedCount }} 次。</p>
  </div>
</template>
`,jh=`<script setup>
import { MAlert, MButton } from 'anemia-ui'
import { ref } from 'vue'
const visible = ref(true)
const closedCount = ref(0)
function close() {
  visible.value = false
  closedCount.value += 1
}
function restore() {
  visible.value = true
}
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert v-if="visible" type="info" title="可关闭提示" closable @close="close">
      关闭后组件会隐藏自身，并通过 close 事件通知父级。
    </MAlert>
    <MButton v-else size="small" type="outline" @click="restore">重新显示</MButton>
    <p class="demo-hint">已关闭 {{ closedCount }} 次。</p>
  </div>
</template>
`,Wh={class:"demo-stack",style:{"max-width":"560px"}},Hh=C({__name:"Slots",setup(e){return(t,n)=>(v(),y("div",Wh,[c(r(Vt),{type:"info"},{icon:f(()=>[c(r(Et),{name:"info",size:18})]),title:f(()=>[...n[0]||(n[0]=[_("自定义图标与标题",-1)])]),default:f(()=>[n[1]||(n[1]=g("p",null,"默认插槽可以承载富文本内容，例如链接、列表或表单说明。",-1)),n[2]||(n[2]=g("ul",{class:"alert-list"},[g("li",null,"图标来自统一的 MIcon 接口。"),g("li",null,"标题与描述均可以通过插槽覆盖。")],-1))]),_:1}),c(r(Vt),{type:"warning",title:"使用默认图标"},{default:f(()=>[...n[3]||(n[3]=[_(" 不传 ",-1),g("code",null,"#icon",-1),_(" 时，组件会根据 type 自动选择图标。 ",-1)])]),_:1})]))}}),qh=ce(Hh,[["__scopeId","data-v-0f6ffcf0"]]),Kh=`<script setup lang="ts">
import { MAlert, MIcon } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert type="info">
      <template #icon>
        <MIcon name="info" :size="18" />
      </template>
      <template #title>自定义图标与标题</template>
      <p>默认插槽可以承载富文本内容，例如链接、列表或表单说明。</p>
      <ul class="alert-list">
        <li>图标来自统一的 MIcon 接口。</li>
        <li>标题与描述均可以通过插槽覆盖。</li>
      </ul>
    </MAlert>
    <MAlert type="warning" title="使用默认图标">
      不传 <code>#icon</code> 时，组件会根据 type 自动选择图标。
    </MAlert>
  </div>
</template>

<style scoped>
.alert-list {
  margin: 8px 0 0;
  padding-left: 18px;
  list-style: disc;
  color: var(--m-color-text-secondary);
  font-size: 13px;
  line-height: 1.65;
}

.alert-list li + li {
  margin-top: 2px;
}
</style>
`,Qh=`<script setup>
import { MAlert, MIcon } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert type="info">
      <template #icon>
        <MIcon name="info" :size="18" />
      </template>
      <template #title>自定义图标与标题</template>
      <p>默认插槽可以承载富文本内容，例如链接、列表或表单说明。</p>
      <ul class="alert-list">
        <li>图标来自统一的 MIcon 接口。</li>
        <li>标题与描述均可以通过插槽覆盖。</li>
      </ul>
    </MAlert>
    <MAlert type="warning" title="使用默认图标">
      不传 <code>#icon</code> 时，组件会根据 type 自动选择图标。
    </MAlert>
  </div>
</template>

<style scoped>
.alert-list {
  margin: 8px 0 0;
  padding-left: 18px;
  list-style: disc;
  color: var(--m-color-text-secondary);
  font-size: 13px;
  line-height: 1.65;
}

.alert-list li + li {
  margin-top: 2px;
}
</style>
`,Yh={class:"demo-stack",style:{"max-width":"560px"}},Xh=C({__name:"TitleDesc",setup(e){return(t,n)=>(v(),y("div",Yh,[c(r(Vt),{type:"success",title:"发布完成",description:"v0.1.0 已构建完成，可以前往 npm 查看产物。"}),c(r(Vt),{type:"info",title:"无图标提示",description:"通过 showIcon 关闭图标，适合紧凑的说明区域。","show-icon":!1}),c(r(Vt),{type:"warning",title:"仅标题"})]))}}),Zh=`<script setup lang="ts">
import { MAlert } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert
      type="success"
      title="发布完成"
      description="v0.1.0 已构建完成，可以前往 npm 查看产物。"
    />
    <MAlert
      type="info"
      title="无图标提示"
      description="通过 showIcon 关闭图标，适合紧凑的说明区域。"
      :show-icon="false"
    />
    <MAlert type="warning" title="仅标题" />
  </div>
</template>
`,eM=`<script setup>
import { MAlert } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert
      type="success"
      title="发布完成"
      description="v0.1.0 已构建完成，可以前往 npm 查看产物。"
    />
    <MAlert
      type="info"
      title="无图标提示"
      description="通过 showIcon 关闭图标，适合紧凑的说明区域。"
      :show-icon="false"
    />
    <MAlert type="warning" title="仅标题" />
  </div>
</template>
`,tM={class:"demo-stack",style:{"max-width":"560px"}},nM=C({__name:"Types",setup(e){return(t,n)=>(v(),y("div",tM,[c(r(Vt),{type:"info",title:"信息提示"},{default:f(()=>[...n[0]||(n[0]=[_("这里是补充说明，用于解释当前上下文。",-1)])]),_:1}),c(r(Vt),{type:"success",title:"保存成功"},{default:f(()=>[...n[1]||(n[1]=[_("你的修改已经同步到设计系统。",-1)])]),_:1}),c(r(Vt),{type:"warning",title:"需要注意"},{default:f(()=>[...n[2]||(n[2]=[_("部分 Token 将在下个版本重命名。",-1)])]),_:1}),c(r(Vt),{type:"error",title:"构建失败"},{default:f(()=>[...n[3]||(n[3]=[_("请检查 TypeScript 类型错误后重试。",-1)])]),_:1})]))}}),sM=`<script setup lang="ts">
import { MAlert } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert type="info" title="信息提示">这里是补充说明，用于解释当前上下文。</MAlert>
    <MAlert type="success" title="保存成功">你的修改已经同步到设计系统。</MAlert>
    <MAlert type="warning" title="需要注意">部分 Token 将在下个版本重命名。</MAlert>
    <MAlert type="error" title="构建失败">请检查 TypeScript 类型错误后重试。</MAlert>
  </div>
</template>
`,oM=`<script setup>
import { MAlert } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MAlert type="info" title="信息提示">这里是补充说明，用于解释当前上下文。</MAlert>
    <MAlert type="success" title="保存成功">你的修改已经同步到设计系统。</MAlert>
    <MAlert type="warning" title="需要注意">部分 Token 将在下个版本重命名。</MAlert>
    <MAlert type="error" title="构建失败">请检查 TypeScript 类型错误后重试。</MAlert>
  </div>
</template>
`,aM={name:"alert",category:"feedback",title:"Alert 提示框",summary:"用克制的色块与图标展示信息、成功、警告或错误提示。",description:"提示框用于传递与当前上下文相关的反馈。信息与成功使用 status 语义，警告与错误使用 alert 语义；颜色只是辅助，标题文本需要清楚说明发生了什么。",status:"stable",since:"0.1.0",keywords:["alert","提示","警告","错误","反馈"],sections:[{id:"types",title:"提示类型",description:"四种类型共享布局与排版，仅语义色与图标变化。",demo:nM,code:sM,codeJs:oM},{id:"title-description",title:"标题与描述",description:"title 与 description 提供常见组合；showIcon 可关闭图标以适应紧凑区域。",demo:Xh,code:Zh,codeJs:eM},{id:"closable",title:"可关闭提示",description:"closable 显示关闭按钮，点击后组件隐藏自身并触发 close 事件；父级可以用 v-if 重新显示。",demo:Gh,code:Uh,codeJs:jh},{id:"slots",title:"自定义内容",description:"icon、title 与默认插槽可以组合出富内容提示，同时保留统一的容器样式。",demo:qh,code:Kh,codeJs:Qh}],api:[{id:"alert-api",title:"MAlert",props:[{name:"type",type:"'info' | 'success' | 'warning' | 'error'",defaultValue:"'info'",description:"提示语义与配色。"},{name:"title",type:"string",defaultValue:"—",description:"标题文本；#title 插槽优先。"},{name:"description",type:"string",defaultValue:"—",description:"描述文本；默认插槽优先。"},{name:"closable",type:"boolean",defaultValue:"false",description:"显示关闭按钮。"},{name:"showIcon",type:"boolean",defaultValue:"true",description:"是否显示语义图标。"},{name:"closeLabel",type:"string",defaultValue:"'关闭提示'",description:"关闭按钮的无障碍标签。"}],events:[{name:"close",type:"(event: MouseEvent) => void",description:"点击关闭按钮时触发。"}],slots:[{name:"default",type:"—",description:"正文内容，优先于 description。"},{name:"title",type:"—",description:"自定义标题，优先于 title。"},{name:"icon",type:"—",description:"自定义前置图标。"}]}],notes:['warning 与 error 使用 role="alert"，info 与 success 使用 role="status"。',"关闭状态保存在组件内部；需要重新显示时请销毁并重建组件（例如切换 key 或 v-if）。","错误提示应说明原因与下一步操作，避免只写「出错了」。","图标默认来自统一 MIcon 注册表，不要混用其他图标库。"]},iM={class:"demo-stack"},lM={class:"demo-row"},rM={class:"demo-hint"},dM=C({__name:"Fallback",setup(e){const t=z(0);function n(){t.value+=1}return(s,o)=>(v(),y("div",iM,[g("div",lM,[c(r(Je),{src:"/avatars/not-found.svg",name:"林安",size:"large",onError:n}),c(r(Je),{src:"/avatars/not-found.svg",name:"Anemia UI",onError:n}),c(r(Je),{src:"/avatars/not-found.svg",onError:n},{fallback:f(()=>[c(r(Et),{name:"user",size:18})]),_:1})]),g("p",rM,"图片加载失败次数："+L(t.value)+"，失败后回退到文字或占位内容。",1)]))}}),cM=`<script setup lang="ts">
import { MAvatar, MIcon } from 'anemia-ui'
import { ref } from 'vue'

const failures = ref(0)

function handleError(): void {
  failures.value += 1
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MAvatar src="/avatars/not-found.svg" name="林安" size="large" @error="handleError" />
      <MAvatar src="/avatars/not-found.svg" name="Anemia UI" @error="handleError" />
      <MAvatar src="/avatars/not-found.svg" @error="handleError">
        <template #fallback>
          <MIcon name="user" :size="18" />
        </template>
      </MAvatar>
    </div>
    <p class="demo-hint">图片加载失败次数：{{ failures }}，失败后回退到文字或占位内容。</p>
  </div>
</template>
`,uM=`<script setup>
import { MAvatar, MIcon } from 'anemia-ui'
import { ref } from 'vue'
const failures = ref(0)
function handleError() {
  failures.value += 1
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MAvatar src="/avatars/not-found.svg" name="林安" size="large" @error="handleError" />
      <MAvatar src="/avatars/not-found.svg" name="Anemia UI" @error="handleError" />
      <MAvatar src="/avatars/not-found.svg" @error="handleError">
        <template #fallback>
          <MIcon name="user" :size="18" />
        </template>
      </MAvatar>
    </div>
    <p class="demo-hint">图片加载失败次数：{{ failures }}，失败后回退到文字或占位内容。</p>
  </div>
</template>
`;function Fl(e){return`/anemia-ui-docs/${e.replace(/^\/+/,"")}`}const mM={class:"demo-row"},pM=C({__name:"Image",setup(e){const t=Fl("/avatars/avatar-1.webp"),n=Fl("/avatars/avatar-2.webp");return(s,o)=>(v(),y("div",mM,[c(r(Je),{src:r(t),alt:"林安的头像",size:"large"},null,8,["src"]),c(r(Je),{src:r(n),alt:"Alex 的头像",size:"medium"},null,8,["src"]),c(r(Je),{src:r(t),alt:"林安的头像",shape:"rounded"},null,8,["src"])]))}}),fM=`<script setup lang="ts">
import { MAvatar } from 'anemia-ui'

const avatar1 = '/avatars/avatar-1.webp'
const avatar2 = '/avatars/avatar-2.webp'
<\/script>

<template>
  <div class="demo-row">
    <MAvatar :src="avatar1" alt="林安的头像" size="large" />
    <MAvatar :src="avatar2" alt="Alex 的头像" size="medium" />
    <MAvatar :src="avatar1" alt="林安的头像" shape="rounded" />
  </div>
</template>
`,vM=`<script setup>
import { MAvatar } from 'anemia-ui'
const avatar1 = '/avatars/avatar-1.webp'
const avatar2 = '/avatars/avatar-2.webp'
<\/script>

<template>
  <div class="demo-row">
    <MAvatar :src="avatar1" alt="林安的头像" size="large" />
    <MAvatar :src="avatar2" alt="Alex 的头像" size="medium" />
    <MAvatar :src="avatar1" alt="林安的头像" shape="rounded" />
  </div>
</template>
`,gM={class:"demo-stack"},bM={class:"demo-row"},yM={class:"demo-row"},hM=C({__name:"Sizes",setup(e){return(t,n)=>(v(),y("div",gM,[g("div",bM,[c(r(Je),{name:"S",size:"small"}),c(r(Je),{name:"M",size:"medium"}),c(r(Je),{name:"L",size:"large"})]),g("div",yM,[c(r(Je),{name:"Circle",shape:"circle",size:"large"}),c(r(Je),{name:"Rounded",shape:"rounded",size:"large"})])]))}}),MM=`<script setup lang="ts">
import { MAvatar } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MAvatar name="S" size="small" />
      <MAvatar name="M" size="medium" />
      <MAvatar name="L" size="large" />
    </div>
    <div class="demo-row">
      <MAvatar name="Circle" shape="circle" size="large" />
      <MAvatar name="Rounded" shape="rounded" size="large" />
    </div>
  </div>
</template>
`,_M=`<script setup>
import { MAvatar } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MAvatar name="S" size="small" />
      <MAvatar name="M" size="medium" />
      <MAvatar name="L" size="large" />
    </div>
    <div class="demo-row">
      <MAvatar name="Circle" shape="circle" size="large" />
      <MAvatar name="Rounded" shape="rounded" size="large" />
    </div>
  </div>
</template>
`,kM={class:"demo-row"},wM=C({__name:"Text",setup(e){return(t,n)=>(v(),y("div",kM,[c(r(Je),{name:"Anemia UI",size:"large"}),c(r(Je),{name:"张三"}),c(r(Je),{name:"Li Hua"}),c(r(Je),{name:"林安",shape:"rounded"}),c(r(Je))]))}}),xM=`<script setup lang="ts">
import { MAvatar } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MAvatar name="Anemia UI" size="large" />
    <MAvatar name="张三" />
    <MAvatar name="Li Hua" />
    <MAvatar name="林安" shape="rounded" />
    <MAvatar />
  </div>
</template>
`,BM=`<script setup>
import { MAvatar } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MAvatar name="Anemia UI" size="large" />
    <MAvatar name="张三" />
    <MAvatar name="Li Hua" />
    <MAvatar name="林安" shape="rounded" />
    <MAvatar />
  </div>
</template>
`,CM={name:"avatar",category:"display",title:"Avatar 头像",summary:"展示用户或实体形象，支持图片、文字缩写、占位与加载失败回退。",description:"头像用最小的视觉面积表达身份。图片加载失败时会自动回退到文字缩写或图标；图片本身使用 object-fit: cover，并保留统一的形状与尺寸。",status:"stable",since:"0.1.0",keywords:["avatar","头像","用户","图片","fallback"],sections:[{id:"image",title:"图片头像",description:"传入 src 与 alt；alt 会作为整个头像的无障碍名称。",demo:pM,code:fM,codeJs:vM},{id:"text",title:"文字头像",description:"name 会生成文字缩写：中文取前两个字，英文按空格取首字母；不提供内容时显示占位图标。",demo:wM,code:xM,codeJs:BM},{id:"sizes",title:"尺寸与形状",description:"三档尺寸与圆形、圆角矩形两种形状，均可与 Badge 组合使用。",demo:hM,code:MM,codeJs:_M},{id:"fallback",title:"加载失败回退",description:"图片加载失败时触发 error 事件并回退到 name 缩写；#fallback 插槽可以完全自定义占位内容。",demo:dM,code:cM,codeJs:uM}],api:[{id:"avatar-api",title:"MAvatar",props:[{name:"src",type:"string",defaultValue:"—",description:"图片地址。加载失败时自动回退。"},{name:"alt",type:"string",defaultValue:"—",description:"无障碍名称；缺省时依次使用 name 与「头像」。"},{name:"name",type:"string",defaultValue:"—",description:"用于生成文字缩写与回退名称。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"头像尺寸，对应 28px / 36px / 48px。"},{name:"shape",type:"'circle' | 'rounded'",defaultValue:"'circle'",description:"头像形状。"}],events:[{name:"error",type:"(event: Event) => void",description:"图片加载失败时触发。"}],slots:[{name:"fallback",type:"—",description:"自定义图片缺失时的占位内容。"}]}],notes:['根元素使用 role="img" 与 aria-label，图片自身 alt 为空，避免重复朗读。','图片使用 loading="lazy" 与 decoding="async"，长列表中可以减少初始加载成本。',"更换 src 后会自动重置失败状态，重新尝试加载。","文字缩写只是视觉占位，不应作为业务身份的唯一标识。"]},$M={class:"demo-row"},TM=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",$M,[c(r(st),{count:5}),c(r(st),{count:12,color:"#0f766e"}),c(r(st),{count:3},{default:f(()=>[c(r(Je),{name:"Anemia UI"})]),_:1}),c(r(st),{count:8},{default:f(()=>[c(r(Je),{name:"林安",size:"large"})]),_:1})]))}}),IM=`<script setup lang="ts">
import { MAvatar, MBadge } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MBadge :count="5" />
    <MBadge :count="12" color="#0f766e" />
    <MBadge :count="3">
      <MAvatar name="Anemia UI" />
    </MBadge>
    <MBadge :count="8">
      <MAvatar name="林安" size="large" />
    </MBadge>
  </div>
</template>
`,VM=`<script setup>
import { MAvatar, MBadge } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MBadge :count="5" />
    <MBadge :count="12" color="#0f766e" />
    <MBadge :count="3">
      <MAvatar name="Anemia UI" />
    </MBadge>
    <MBadge :count="8">
      <MAvatar name="林安" size="large" />
    </MBadge>
  </div>
</template>
`,SM={class:"demo-row"},zM=C({__name:"Dot",setup(e){return(t,n)=>(v(),y("div",SM,[c(r(st),{dot:"","aria-label":"有新内容"},{default:f(()=>[c(r(Je),{name:"Anemia UI"})]),_:1}),c(r(st),{dot:"",color:"#0f766e","aria-label":"在线"},{default:f(()=>[c(r(Je),{name:"林安"})]),_:1}),c(r(st),{dot:"","aria-label":"待处理"}),c(r(st),{dot:"",color:"#e0a030","aria-label":"处理中"})]))}}),AM=`<script setup lang="ts">
import { MAvatar, MBadge } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MBadge dot aria-label="有新内容">
      <MAvatar name="Anemia UI" />
    </MBadge>
    <MBadge dot color="#0f766e" aria-label="在线">
      <MAvatar name="林安" />
    </MBadge>
    <MBadge dot aria-label="待处理" />
    <MBadge dot color="#e0a030" aria-label="处理中" />
  </div>
</template>
`,DM=`<script setup>
import { MAvatar, MBadge } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MBadge dot aria-label="有新内容">
      <MAvatar name="Anemia UI" />
    </MBadge>
    <MBadge dot color="#0f766e" aria-label="在线">
      <MAvatar name="林安" />
    </MBadge>
    <MBadge dot aria-label="待处理" />
    <MBadge dot color="#e0a030" aria-label="处理中" />
  </div>
</template>
`,EM={class:"demo-stack"},RM={class:"demo-row"},PM=C({__name:"Hidden",setup(e){const t=z(!1);return(n,s)=>(v(),y("div",EM,[c(r(Dt),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),label:"隐藏徽标"},null,8,["modelValue"]),g("div",RM,[c(r(st),{count:8,hidden:!!t.value},{default:f(()=>[c(r(Je),{name:"Anemia UI"})]),_:1},8,["hidden"]),c(r(st),{count:99,hidden:!!t.value,color:"#7c3aed"},{default:f(()=>[c(r(Je),{name:"林安"})]),_:1},8,["hidden"])]),s[1]||(s[1]=g("p",{class:"demo-hint"},"hidden 为 true 时只渲染默认插槽内容。",-1))]))}}),LM=`<script setup lang="ts">
import { MAvatar, MBadge, MSwitch, type SwitchValue } from 'anemia-ui'
import { ref } from 'vue'

const hidden = ref<SwitchValue>(false)
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="hidden" label="隐藏徽标" />
    <div class="demo-row">
      <MBadge :count="8" :hidden="Boolean(hidden)">
        <MAvatar name="Anemia UI" />
      </MBadge>
      <MBadge :count="99" :hidden="Boolean(hidden)" color="#7c3aed">
        <MAvatar name="林安" />
      </MBadge>
    </div>
    <p class="demo-hint">hidden 为 true 时只渲染默认插槽内容。</p>
  </div>
</template>
`,OM=`<script setup>
import { MAvatar, MBadge, MSwitch } from 'anemia-ui'
import { ref } from 'vue'
const hidden = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="hidden" label="隐藏徽标" />
    <div class="demo-row">
      <MBadge :count="8" :hidden="Boolean(hidden)">
        <MAvatar name="Anemia UI" />
      </MBadge>
      <MBadge :count="99" :hidden="Boolean(hidden)" color="#7c3aed">
        <MAvatar name="林安" />
      </MBadge>
    </div>
    <p class="demo-hint">hidden 为 true 时只渲染默认插槽内容。</p>
  </div>
</template>
`,FM={class:"demo-row"},NM=C({__name:"Max",setup(e){return(t,n)=>(v(),y("div",FM,[c(r(st),{count:8,max:9}),c(r(st),{count:120,max:99}),c(r(st),{count:120,max:9}),c(r(st),{count:0,"show-zero":""})]))}}),JM=`<script setup lang="ts">
import { MBadge } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MBadge :count="8" :max="9" />
    <MBadge :count="120" :max="99" />
    <MBadge :count="120" :max="9" />
    <MBadge :count="0" show-zero />
  </div>
</template>
`,GM=`<script setup>
import { MBadge } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MBadge :count="8" :max="9" />
    <MBadge :count="120" :max="99" />
    <MBadge :count="120" :max="9" />
    <MBadge :count="0" show-zero />
  </div>
</template>
`,UM={name:"badge",category:"display",title:"Badge 徽标",summary:"在头像或图标上展示数字、红点或自定义状态标记。",description:"徽标用于提示未读数量或状态。数字徽标会限制最大展示值，小红点用于无法量化的提醒；两者都可以包裹默认插槽，也可以独立使用。",status:"stable",since:"0.1.0",keywords:["badge","徽标","红点","未读","count"],sections:[{id:"basic",title:"基础用法",description:"有默认插槽时，徽标定位在内容右上角；没有插槽时独立渲染。",demo:TM,code:IM,codeJs:VM},{id:"max",title:"最大值",description:"超过 max 时显示 `${max}+`；count 为 0 时默认隐藏，可通过 showZero 显示。",demo:NM,code:JM,codeJs:GM},{id:"dot",title:"小红点",description:"dot 忽略 count，仅展示状态点；需要为没有文本的状态点提供 ariaLabel。",demo:zM,code:AM,codeJs:DM},{id:"hidden",title:"隐藏与自定义颜色",description:"hidden 完全隐藏徽标但保留默认插槽内容；color 修改徽标底色。",demo:PM,code:LM,codeJs:OM}],api:[{id:"badge-api",title:"MBadge",props:[{name:"count",type:"number",defaultValue:"—",description:"数字徽标的值。"},{name:"max",type:"number",defaultValue:"99",description:"最大展示值，超出时显示 `${max}+`。"},{name:"dot",type:"boolean",defaultValue:"false",description:"显示为状态点，忽略 count。"},{name:"color",type:"string",defaultValue:"—",description:"自定义徽标背景色。"},{name:"hidden",type:"boolean",defaultValue:"false",description:"隐藏徽标内容，保留默认插槽。"},{name:"showZero",type:"boolean",defaultValue:"false",description:"count 为 0 时仍然展示。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"徽标的无障碍描述；dot 模式建议提供。"}],events:[],slots:[{name:"default",type:"—",description:"被徽标标记的内容。"}]}],notes:["count 为 0 且未设置 showZero 时不会渲染徽标内容。","dot 模式没有可见文本，应通过 ariaLabel 说明含义。","自定义 color 时文字颜色使用 on-danger Token，请选择对比度足够的背景。","包裹内容时徽标绝对定位在右上角，父容器不应设置 overflow: hidden，否则可能被裁剪。"]},jM={class:"demo-stack"},WM=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",jM,[c(r(Us),null,{default:f(()=>[c(r(bt),{href:"/"},{default:f(()=>[...n[0]||(n[0]=[_("首页",-1)])]),_:1}),c(r(bt),{href:"/components"},{default:f(()=>[...n[1]||(n[1]=[_("组件",-1)])]),_:1}),c(r(bt),{current:""},{default:f(()=>[...n[2]||(n[2]=[_("面包屑",-1)])]),_:1})]),_:1}),n[3]||(n[3]=g("p",{class:"demo-hint"}," 当前页需要显式设置 current，组件不会根据「最后一项」猜测；分隔符由每个子项渲染。 ",-1))]))}}),HM=`<script setup lang="ts">
import { MBreadcrumb, MBreadcrumbItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MBreadcrumb>
      <MBreadcrumbItem href="/">首页</MBreadcrumbItem>
      <MBreadcrumbItem href="/components">组件</MBreadcrumbItem>
      <MBreadcrumbItem current>面包屑</MBreadcrumbItem>
    </MBreadcrumb>
    <p class="demo-hint">
      当前页需要显式设置 current，组件不会根据「最后一项」猜测；分隔符由每个子项渲染。
    </p>
  </div>
</template>
`,qM=`<script setup>
import { MBreadcrumb, MBreadcrumbItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MBreadcrumb>
      <MBreadcrumbItem href="/">首页</MBreadcrumbItem>
      <MBreadcrumbItem href="/components">组件</MBreadcrumbItem>
      <MBreadcrumbItem current>面包屑</MBreadcrumbItem>
    </MBreadcrumb>
    <p class="demo-hint">
      当前页需要显式设置 current，组件不会根据「最后一项」猜测；分隔符由每个子项渲染。
    </p>
  </div>
</template>
`,KM={class:"demo-stack"},QM=C({__name:"Separator",setup(e){return(t,n)=>(v(),y("div",KM,[c(r(Us),{separator:">"},{default:f(()=>[c(r(bt),{href:"/"},{default:f(()=>[...n[0]||(n[0]=[_("首页",-1)])]),_:1}),c(r(bt),{href:"/components"},{default:f(()=>[...n[1]||(n[1]=[_("组件",-1)])]),_:1}),c(r(bt),{current:""},{default:f(()=>[...n[2]||(n[2]=[_("面包屑",-1)])]),_:1})]),_:1}),c(r(Us),{separator:"·"},{default:f(()=>[c(r(bt),{href:"/"},{default:f(()=>[...n[3]||(n[3]=[_("文档",-1)])]),_:1}),c(r(bt),{href:"/design/colors"},{default:f(()=>[...n[4]||(n[4]=[_("设计",-1)])]),_:1}),c(r(bt),{current:""},{default:f(()=>[...n[5]||(n[5]=[_("颜色",-1)])]),_:1})]),_:1}),n[6]||(n[6]=g("p",{class:"demo-hint"}," separator 通过 provide / inject 下发给子项，默认是「/」；最后一项的分隔符由 CSS 隐藏。 ",-1))]))}}),YM=`<script setup lang="ts">
import { MBreadcrumb, MBreadcrumbItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MBreadcrumb separator=">">
      <MBreadcrumbItem href="/">首页</MBreadcrumbItem>
      <MBreadcrumbItem href="/components">组件</MBreadcrumbItem>
      <MBreadcrumbItem current>面包屑</MBreadcrumbItem>
    </MBreadcrumb>

    <MBreadcrumb separator="·">
      <MBreadcrumbItem href="/">文档</MBreadcrumbItem>
      <MBreadcrumbItem href="/design/colors">设计</MBreadcrumbItem>
      <MBreadcrumbItem current>颜色</MBreadcrumbItem>
    </MBreadcrumb>

    <p class="demo-hint">
      separator 通过 provide / inject 下发给子项，默认是「/」；最后一项的分隔符由 CSS 隐藏。
    </p>
  </div>
</template>
`,XM=`<script setup>
import { MBreadcrumb, MBreadcrumbItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MBreadcrumb separator=">">
      <MBreadcrumbItem href="/">首页</MBreadcrumbItem>
      <MBreadcrumbItem href="/components">组件</MBreadcrumbItem>
      <MBreadcrumbItem current>面包屑</MBreadcrumbItem>
    </MBreadcrumb>

    <MBreadcrumb separator="·">
      <MBreadcrumbItem href="/">文档</MBreadcrumbItem>
      <MBreadcrumbItem href="/design/colors">设计</MBreadcrumbItem>
      <MBreadcrumbItem current>颜色</MBreadcrumbItem>
    </MBreadcrumb>

    <p class="demo-hint">
      separator 通过 provide / inject 下发给子项，默认是「/」；最后一项的分隔符由 CSS 隐藏。
    </p>
  </div>
</template>
`,ZM={class:"demo-stack"},e1=C({__name:"WithIcon",setup(e){return(t,n)=>(v(),y("div",ZM,[c(r(Us),null,{default:f(()=>[c(r(bt),{href:"/",icon:"monitor"},{default:f(()=>[...n[0]||(n[0]=[_("工作台",-1)])]),_:1}),c(r(bt),{href:"/components",icon:"user"},{default:f(()=>[...n[1]||(n[1]=[_("成员",-1)])]),_:1}),c(r(bt),{icon:"info",current:""},{default:f(()=>[...n[2]||(n[2]=[_("详情",-1)])]),_:1})]),_:1}),n[3]||(n[3]=g("p",{class:"demo-hint"},'icon 取自统一图标注册表，并以 aria-hidden="true" 渲染，只承担装饰作用。',-1))]))}}),t1=`<script setup lang="ts">
import { MBreadcrumb, MBreadcrumbItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MBreadcrumb>
      <MBreadcrumbItem href="/" icon="monitor">工作台</MBreadcrumbItem>
      <MBreadcrumbItem href="/components" icon="user">成员</MBreadcrumbItem>
      <MBreadcrumbItem icon="info" current>详情</MBreadcrumbItem>
    </MBreadcrumb>
    <p class="demo-hint">icon 取自统一图标注册表，并以 aria-hidden="true" 渲染，只承担装饰作用。</p>
  </div>
</template>
`,n1=`<script setup>
import { MBreadcrumb, MBreadcrumbItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MBreadcrumb>
      <MBreadcrumbItem href="/" icon="monitor">工作台</MBreadcrumbItem>
      <MBreadcrumbItem href="/components" icon="user">成员</MBreadcrumbItem>
      <MBreadcrumbItem icon="info" current>详情</MBreadcrumbItem>
    </MBreadcrumb>
    <p class="demo-hint">icon 取自统一图标注册表，并以 aria-hidden="true" 渲染，只承担装饰作用。</p>
  </div>
</template>
`,s1={name:"breadcrumb",category:"navigation",title:"Breadcrumb 面包屑",summary:"用 nav > ol > li 表达页面层级，分隔符可配置，当前页通过 aria-current 声明。",description:"Breadcrumb 负责路径导航的语义与间距，不负责判断当前页：请显式给当前项设置 current。分隔符由每个 BreadcrumbItem 渲染，最后一项的分隔符通过 CSS 隐藏，因此子项换行时也不会出现多余的分隔符。",status:"stable",since:"0.6.0",keywords:["breadcrumb","面包屑","路径","导航","层级"],sections:[{id:"basic",title:"基础用法",description:"当前页显式声明 current；有 href 的中间层级渲染为原生链接。",demo:WM,code:HM,codeJs:qM},{id:"icon",title:"带图标",description:"icon 取自统一图标注册表，以 MIcon 渲染并保持装饰性（aria-hidden）。",demo:e1,code:t1,codeJs:n1},{id:"separator",title:"自定义分隔符",description:"separator 通过 provide / inject 下发给每个子项，默认是「/」。",demo:QM,code:YM,codeJs:XM}],api:[{id:"breadcrumb-api",title:"MBreadcrumb",props:[{name:"separator",type:"string",defaultValue:"'/'",description:"分隔符文本，渲染在每个 BreadcrumbItem 之后。"},{name:"ariaLabel",type:"string",defaultValue:"'面包屑'",description:"nav 的无障碍名称。"}],events:[],slots:[{name:"default",type:"—",description:"BreadcrumbItem 列表。"}]},{id:"breadcrumb-item-api",title:"MBreadcrumbItem",props:[{name:"href",type:"string",defaultValue:"—",description:"提供时渲染原生 a 元素；省略时渲染 span。"},{name:"target",type:"string",defaultValue:"—",description:"原样传给原生 a 元素的 target。"},{name:"current",type:"boolean",defaultValue:"false",description:'标记当前页；为 true 时输出 aria-current="page"。'},{name:"icon",type:"IconName",defaultValue:"—",description:"装饰性前置图标，取自统一图标注册表。"}],events:[],slots:[{name:"default",type:"—",description:"面包屑项的文案或内容。"}]}],notes:["Breadcrumb 不猜测当前页：必须由使用方在对应 BreadcrumbItem 上显式设置 current，否则不会输出 aria-current。","最后一项的分隔符由 CSS :last-child 隐藏；所有子项都会渲染分隔符，因此可以直接使用 flex-wrap 换行。","有 href 时渲染原生 a 并原样透传 target；没有 href 时渲染 span，仍可承载 current 语义。","不提供禁用语义：路径中不可用的层级应从面包屑中移除，而不是渲染成禁用项。",'图标通过 MIcon 渲染并带 aria-hidden="true"，装饰性图标不会被辅助技术朗读。',"长路径在窄屏下换行，不产生页面级横向滚动。"]},o1=C({__name:"Basic",setup(e){return(t,n)=>(v(),y(ie,null,[c(r(R),null,{default:f(()=>[...n[0]||(n[0]=[_("主要按钮",-1)])]),_:1}),c(r(R),{type:"secondary"},{default:f(()=>[...n[1]||(n[1]=[_("次要按钮",-1)])]),_:1}),c(r(R),{type:"outline"},{default:f(()=>[...n[2]||(n[2]=[_("描边按钮",-1)])]),_:1})],64))}}),a1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton>主要按钮</MButton>
  <MButton type="secondary">次要按钮</MButton>
  <MButton type="outline">描边按钮</MButton>
</template>
`,i1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton>主要按钮</MButton>
  <MButton type="secondary">次要按钮</MButton>
  <MButton type="outline">描边按钮</MButton>
</template>
`,l1={class:"custom-button-demo demo-stack"},r1={class:"demo-row"},d1=C({__name:"CustomClass",setup(e){return(t,n)=>(v(),y("div",l1,[g("div",r1,[c(r(R),{class:"brand-button"},{default:f(()=>[...n[0]||(n[0]=[_("品牌主按钮",-1)])]),_:1}),c(r(R),{class:"brand-button",round:""},{default:f(()=>[...n[1]||(n[1]=[_("胶囊品牌按钮",-1)])]),_:1}),c(r(R),{class:"quiet-button",type:"outline"},{default:f(()=>[...n[2]||(n[2]=[_("安静描边按钮",-1)])]),_:1})]),n[3]||(n[3]=g("p",{class:"demo-hint"}," class 会落在原生 button 上。通过局部选择器覆盖 --m-button-* 变量与形状，不需要 !important，也不会影响点击、加载与键盘行为。 ",-1))]))}}),c1=ce(d1,[["__scopeId","data-v-e733cc35"]]),u1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="custom-button-demo demo-stack">
    <div class="demo-row">
      <MButton class="brand-button">品牌主按钮</MButton>
      <MButton class="brand-button" round>胶囊品牌按钮</MButton>
      <MButton class="quiet-button" type="outline">安静描边按钮</MButton>
    </div>
    <p class="demo-hint">
      class 会落在原生 button 上。通过局部选择器覆盖 --m-button-* 变量与形状，不需要
      !important，也不会影响点击、加载与键盘行为。
    </p>
  </div>
</template>

<style scoped lang="scss">
.custom-button-demo {
  :deep(.brand-button) {
    --m-button-bg: var(--m-color-primary-soft);
    --m-button-fg: var(--m-color-primary);
    --m-button-hover-bg: var(--m-color-primary-soft);
    --m-button-hover-fg: var(--m-color-primary);
    --m-button-active-bg: var(--m-color-primary-soft);
    --m-button-border: transparent;

    border-radius: var(--m-radius-full);
    letter-spacing: 0.04em;
  }

  :deep(.quiet-button) {
    --m-button-border: var(--m-color-divider);
    --m-button-fg: var(--m-color-text-secondary);
    --m-button-hover-bg: transparent;
    --m-button-hover-fg: var(--m-color-text-primary);

    font-size: var(--m-font-size-sm);
    letter-spacing: 0.02em;
  }
}
</style>
`,m1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="custom-button-demo demo-stack">
    <div class="demo-row">
      <MButton class="brand-button">品牌主按钮</MButton>
      <MButton class="brand-button" round>胶囊品牌按钮</MButton>
      <MButton class="quiet-button" type="outline">安静描边按钮</MButton>
    </div>
    <p class="demo-hint">
      class 会落在原生 button 上。通过局部选择器覆盖 --m-button-* 变量与形状，不需要
      !important，也不会影响点击、加载与键盘行为。
    </p>
  </div>
</template>

<style scoped lang="scss">
.custom-button-demo {
  :deep(.brand-button) {
    --m-button-bg: var(--m-color-primary-soft);
    --m-button-fg: var(--m-color-primary);
    --m-button-hover-bg: var(--m-color-primary-soft);
    --m-button-hover-fg: var(--m-color-primary);
    --m-button-active-bg: var(--m-color-primary-soft);
    --m-button-border: transparent;

    border-radius: var(--m-radius-full);
    letter-spacing: 0.04em;
  }

  :deep(.quiet-button) {
    --m-button-border: var(--m-color-divider);
    --m-button-fg: var(--m-color-text-secondary);
    --m-button-hover-bg: transparent;
    --m-button-hover-fg: var(--m-color-text-primary);

    font-size: var(--m-font-size-sm);
    letter-spacing: 0.02em;
  }
}
</style>
`,p1={class:"demo-stack"},f1={class:"demo-row"},v1=C({__name:"Dashed",setup(e){return(t,n)=>(v(),y("div",p1,[g("div",f1,[c(r(R),{type:"dashed"},{default:f(()=>[...n[0]||(n[0]=[_("虚线按钮",-1)])]),_:1}),c(r(R),{type:"dashed",size:"small"},{default:f(()=>[...n[1]||(n[1]=[_("Small",-1)])]),_:1}),c(r(R),{type:"dashed",icon:"copy"},{default:f(()=>[...n[2]||(n[2]=[_("复制",-1)])]),_:1}),c(r(R),{type:"dashed",disabled:""},{default:f(()=>[...n[3]||(n[3]=[_("禁用",-1)])]),_:1})]),n[4]||(n[4]=g("p",{class:"demo-hint"}," 虚线按钮适合“添加”“上传”等尚未确定的占位操作；它与 outline 共享背景、hover 与焦点规则，只改变边框样式。 ",-1))]))}}),g1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="dashed">虚线按钮</MButton>
      <MButton type="dashed" size="small">Small</MButton>
      <MButton type="dashed" icon="copy">复制</MButton>
      <MButton type="dashed" disabled>禁用</MButton>
    </div>
    <p class="demo-hint">
      虚线按钮适合“添加”“上传”等尚未确定的占位操作；它与 outline 共享背景、hover
      与焦点规则，只改变边框样式。
    </p>
  </div>
</template>
`,b1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="dashed">虚线按钮</MButton>
      <MButton type="dashed" size="small">Small</MButton>
      <MButton type="dashed" icon="copy">复制</MButton>
      <MButton type="dashed" disabled>禁用</MButton>
    </div>
    <p class="demo-hint">
      虚线按钮适合“添加”“上传”等尚未确定的占位操作；它与 outline 共享背景、hover
      与焦点规则，只改变边框样式。
    </p>
  </div>
</template>
`,y1={class:"demo-stack"},h1={class:"demo-row"},M1=C({__name:"Ghost",setup(e){return(t,n)=>(v(),y("div",y1,[g("div",h1,[c(r(R),{type:"ghost"},{default:f(()=>[...n[0]||(n[0]=[_("无边框按钮",-1)])]),_:1}),c(r(R),{type:"ghost",icon:"copy","aria-label":"复制"}),c(r(R),{type:"ghost",round:""},{default:f(()=>[...n[1]||(n[1]=[_("胶囊无边框",-1)])]),_:1}),c(r(R),{type:"ghost",disabled:""},{default:f(()=>[...n[2]||(n[2]=[_("禁用",-1)])]),_:1})]),n[3]||(n[3]=g("p",{class:"demo-hint"}," 无边框模式移除背景与边框，只保留文字与 hover 背景，适合工具栏、行内操作和次级导航。 ",-1))]))}}),_1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="ghost">无边框按钮</MButton>
      <MButton type="ghost" icon="copy" aria-label="复制" />
      <MButton type="ghost" round>胶囊无边框</MButton>
      <MButton type="ghost" disabled>禁用</MButton>
    </div>
    <p class="demo-hint">
      无边框模式移除背景与边框，只保留文字与 hover 背景，适合工具栏、行内操作和次级导航。
    </p>
  </div>
</template>
`,k1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="ghost">无边框按钮</MButton>
      <MButton type="ghost" icon="copy" aria-label="复制" />
      <MButton type="ghost" round>胶囊无边框</MButton>
      <MButton type="ghost" disabled>禁用</MButton>
    </div>
    <p class="demo-hint">
      无边框模式移除背景与边框，只保留文字与 hover 背景，适合工具栏、行内操作和次级导航。
    </p>
  </div>
</template>
`,w1={class:"demo-stack"},x1=C({__name:"Group",setup(e){return(t,n)=>(v(),y("div",w1,[c(r(ho),{"aria-label":"视图切换"},{default:f(()=>[c(r(R),{type:"outline"},{default:f(()=>[...n[0]||(n[0]=[_("列表",-1)])]),_:1}),c(r(R),{type:"outline"},{default:f(()=>[...n[1]||(n[1]=[_("网格",-1)])]),_:1}),c(r(R),{type:"outline"},{default:f(()=>[...n[2]||(n[2]=[_("时间线",-1)])]),_:1})]),_:1}),c(r(ho),{size:"small","aria-label":"分页"},{default:f(()=>[c(r(R),{type:"outline"},{default:f(()=>[...n[3]||(n[3]=[_("上一页",-1)])]),_:1}),c(r(R),{type:"outline"},{default:f(()=>[...n[4]||(n[4]=[_("下一页",-1)])]),_:1})]),_:1}),c(r(ho),{"aria-label":"快捷操作"},{default:f(()=>[c(r(R),{type:"secondary",icon:"copy","aria-label":"复制"}),c(r(R),{type:"secondary",icon:"check","aria-label":"标记完成"}),c(r(R),{type:"secondary",icon:"close","aria-label":"删除"})]),_:1}),n[5]||(n[5]=g("p",{class:"demo-hint"},' MButtonGroup 负责共享尺寸、合并相邻边框并提供 role="group"；每个按钮仍可单独设置 size、type 与图标。 ',-1))]))}}),B1=`<script setup lang="ts">
import { MButton, MButtonGroup } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MButtonGroup aria-label="视图切换">
      <MButton type="outline">列表</MButton>
      <MButton type="outline">网格</MButton>
      <MButton type="outline">时间线</MButton>
    </MButtonGroup>

    <MButtonGroup size="small" aria-label="分页">
      <MButton type="outline">上一页</MButton>
      <MButton type="outline">下一页</MButton>
    </MButtonGroup>

    <MButtonGroup aria-label="快捷操作">
      <MButton type="secondary" icon="copy" aria-label="复制" />
      <MButton type="secondary" icon="check" aria-label="标记完成" />
      <MButton type="secondary" icon="close" aria-label="删除" />
    </MButtonGroup>

    <p class="demo-hint">
      MButtonGroup 负责共享尺寸、合并相邻边框并提供 role="group"；每个按钮仍可单独设置 size、type
      与图标。
    </p>
  </div>
</template>
`,C1=`<script setup>
import { MButton, MButtonGroup } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MButtonGroup aria-label="视图切换">
      <MButton type="outline">列表</MButton>
      <MButton type="outline">网格</MButton>
      <MButton type="outline">时间线</MButton>
    </MButtonGroup>

    <MButtonGroup size="small" aria-label="分页">
      <MButton type="outline">上一页</MButton>
      <MButton type="outline">下一页</MButton>
    </MButtonGroup>

    <MButtonGroup aria-label="快捷操作">
      <MButton type="secondary" icon="copy" aria-label="复制" />
      <MButton type="secondary" icon="check" aria-label="标记完成" />
      <MButton type="secondary" icon="close" aria-label="删除" />
    </MButtonGroup>

    <p class="demo-hint">
      MButtonGroup 负责共享尺寸、合并相邻边框并提供 role="group"；每个按钮仍可单独设置 size、type
      与图标。
    </p>
  </div>
</template>
`,$1=C({__name:"Icons",setup(e){return(t,n)=>(v(),y(ie,null,[c(r(R),{icon:"search","aria-label":"搜索"}),c(r(R),{icon:"copy"},{default:f(()=>[...n[0]||(n[0]=[_("复制内容",-1)])]),_:1}),c(r(R),{type:"outline",icon:"arrow-right"},{default:f(()=>[...n[1]||(n[1]=[_("下一步",-1)])]),_:1}),c(r(R),{type:"ghost",icon:"check"},{default:f(()=>[...n[2]||(n[2]=[_("已完成",-1)])]),_:1}),c(r(R),null,{icon:f(()=>[c(r(Et),{name:"github",size:16})]),default:f(()=>[n[3]||(n[3]=_(" GitHub ",-1))]),_:1})],64))}}),T1=`<script setup lang="ts">
import { MButton, MIcon } from 'anemia-ui'
<\/script>

<template>
  <MButton icon="search" aria-label="搜索" />
  <MButton icon="copy">复制内容</MButton>
  <MButton type="outline" icon="arrow-right">下一步</MButton>
  <MButton type="ghost" icon="check">已完成</MButton>
  <MButton>
    <template #icon>
      <MIcon name="github" :size="16" />
    </template>
    GitHub
  </MButton>
</template>
`,I1=`<script setup>
import { MButton, MIcon } from 'anemia-ui'
<\/script>

<template>
  <MButton icon="search" aria-label="搜索" />
  <MButton icon="copy">复制内容</MButton>
  <MButton type="outline" icon="arrow-right">下一步</MButton>
  <MButton type="ghost" icon="check">已完成</MButton>
  <MButton>
    <template #icon>
      <MIcon name="github" :size="16" />
    </template>
    GitHub
  </MButton>
</template>
`,V1={class:"demo-stack"},S1={class:"demo-row"},z1={class:"demo-row"},A1=C({__name:"Outline",setup(e){return(t,n)=>(v(),y("div",V1,[g("div",S1,[c(r(R),{type:"outline"},{default:f(()=>[...n[0]||(n[0]=[_("默认描边",-1)])]),_:1}),c(r(R),{type:"outline",size:"small"},{default:f(()=>[...n[1]||(n[1]=[_("Small",-1)])]),_:1}),c(r(R),{type:"outline",size:"large"},{default:f(()=>[...n[2]||(n[2]=[_("Large",-1)])]),_:1}),c(r(R),{type:"outline",disabled:""},{default:f(()=>[...n[3]||(n[3]=[_("禁用",-1)])]),_:1})]),g("div",z1,[c(r(R),{type:"outline",icon:"copy"},{default:f(()=>[...n[4]||(n[4]=[_("复制",-1)])]),_:1}),c(r(R),{type:"outline",round:""},{default:f(()=>[...n[5]||(n[5]=[_("胶囊描边",-1)])]),_:1}),c(r(R),{type:"outline",loading:""},{default:f(()=>[...n[6]||(n[6]=[_("处理中",-1)])]),_:1})]),n[7]||(n[7]=g("p",{class:"demo-hint"}," 线框模式只保留 1px 边框与文字；hover / focus / disabled 与实心按钮共享同一套状态规则。 ",-1))]))}}),D1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="outline">默认描边</MButton>
      <MButton type="outline" size="small">Small</MButton>
      <MButton type="outline" size="large">Large</MButton>
      <MButton type="outline" disabled>禁用</MButton>
    </div>
    <div class="demo-row">
      <MButton type="outline" icon="copy">复制</MButton>
      <MButton type="outline" round>胶囊描边</MButton>
      <MButton type="outline" loading>处理中</MButton>
    </div>
    <p class="demo-hint">
      线框模式只保留 1px 边框与文字；hover / focus / disabled 与实心按钮共享同一套状态规则。
    </p>
  </div>
</template>
`,E1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="outline">默认描边</MButton>
      <MButton type="outline" size="small">Small</MButton>
      <MButton type="outline" size="large">Large</MButton>
      <MButton type="outline" disabled>禁用</MButton>
    </div>
    <div class="demo-row">
      <MButton type="outline" icon="copy">复制</MButton>
      <MButton type="outline" round>胶囊描边</MButton>
      <MButton type="outline" loading>处理中</MButton>
    </div>
    <p class="demo-hint">
      线框模式只保留 1px 边框与文字；hover / focus / disabled 与实心按钮共享同一套状态规则。
    </p>
  </div>
</template>
`,R1=C({__name:"Sizes",setup(e){return(t,n)=>(v(),y(ie,null,[c(r(R),{size:"small"},{default:f(()=>[...n[0]||(n[0]=[_("Small",-1)])]),_:1}),c(r(R),{size:"medium"},{default:f(()=>[...n[1]||(n[1]=[_("Medium",-1)])]),_:1}),c(r(R),{size:"large"},{default:f(()=>[...n[2]||(n[2]=[_("Large",-1)])]),_:1})],64))}}),P1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton size="small">Small</MButton>
  <MButton size="medium">Medium</MButton>
  <MButton size="large">Large</MButton>
</template>
`,L1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton size="small">Small</MButton>
  <MButton size="medium">Medium</MButton>
  <MButton size="large">Large</MButton>
</template>
`,O1={class:"demo-stack",style:{"max-width":"520px"}},F1={class:"demo-row"},N1={class:"demo-row"},J1=C({__name:"States",setup(e){return(t,n)=>(v(),y("div",O1,[g("div",F1,[c(r(R),{disabled:""},{default:f(()=>[...n[0]||(n[0]=[_("禁用按钮",-1)])]),_:1}),c(r(R),{type:"outline",disabled:""},{default:f(()=>[...n[1]||(n[1]=[_("禁用描边",-1)])]),_:1}),c(r(R),{loading:""},{default:f(()=>[...n[2]||(n[2]=[_("加载中",-1)])]),_:1}),c(r(R),{type:"secondary",loading:""},{default:f(()=>[...n[3]||(n[3]=[_("处理中",-1)])]),_:1})]),c(r(R),{block:""},{default:f(()=>[...n[4]||(n[4]=[_("Block 按钮",-1)])]),_:1}),g("div",N1,[c(r(R),{round:""},{default:f(()=>[...n[5]||(n[5]=[_("圆角按钮",-1)])]),_:1}),c(r(R),{round:"",type:"outline",size:"small"},{default:f(()=>[...n[6]||(n[6]=[_("Small pill",-1)])]),_:1})])]))}}),G1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 520px">
    <div class="demo-row">
      <MButton disabled>禁用按钮</MButton>
      <MButton type="outline" disabled>禁用描边</MButton>
      <MButton loading>加载中</MButton>
      <MButton type="secondary" loading>处理中</MButton>
    </div>
    <MButton block>Block 按钮</MButton>
    <div class="demo-row">
      <MButton round>圆角按钮</MButton>
      <MButton round type="outline" size="small">Small pill</MButton>
    </div>
  </div>
</template>
`,U1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 520px">
    <div class="demo-row">
      <MButton disabled>禁用按钮</MButton>
      <MButton type="outline" disabled>禁用描边</MButton>
      <MButton loading>加载中</MButton>
      <MButton type="secondary" loading>处理中</MButton>
    </div>
    <MButton block>Block 按钮</MButton>
    <div class="demo-row">
      <MButton round>圆角按钮</MButton>
      <MButton round type="outline" size="small">Small pill</MButton>
    </div>
  </div>
</template>
`,j1={class:"demo-stack"},W1={class:"demo-row"},H1=C({__name:"TextButton",setup(e){return(t,n)=>(v(),y("div",j1,[g("div",W1,[c(r(R),{type:"text"},{default:f(()=>[...n[0]||(n[0]=[_("文本按钮",-1)])]),_:1}),c(r(R),{type:"text",icon:"arrow-right"},{default:f(()=>[...n[1]||(n[1]=[_("继续",-1)])]),_:1}),c(r(R),{type:"text",round:""},{default:f(()=>[...n[2]||(n[2]=[_("返回",-1)])]),_:1}),c(r(R),{type:"text",disabled:""},{default:f(()=>[...n[3]||(n[3]=[_("禁用",-1)])]),_:1})]),n[4]||(n[4]=g("p",{class:"demo-hint"}," 文本按钮使用品牌色文字与更紧凑的横向内边距，视觉权重最低，适合表格行内操作与辅助入口。 ",-1))]))}}),q1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="text">文本按钮</MButton>
      <MButton type="text" icon="arrow-right">继续</MButton>
      <MButton type="text" round>返回</MButton>
      <MButton type="text" disabled>禁用</MButton>
    </div>
    <p class="demo-hint">
      文本按钮使用品牌色文字与更紧凑的横向内边距，视觉权重最低，适合表格行内操作与辅助入口。
    </p>
  </div>
</template>
`,K1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="text">文本按钮</MButton>
      <MButton type="text" icon="arrow-right">继续</MButton>
      <MButton type="text" round>返回</MButton>
      <MButton type="text" disabled>禁用</MButton>
    </div>
    <p class="demo-hint">
      文本按钮使用品牌色文字与更紧凑的横向内边距，视觉权重最低，适合表格行内操作与辅助入口。
    </p>
  </div>
</template>
`,Q1=C({__name:"Types",setup(e){return(t,n)=>(v(),y(ie,null,[c(r(R),{type:"primary"},{default:f(()=>[...n[0]||(n[0]=[_("Primary",-1)])]),_:1}),c(r(R),{type:"secondary"},{default:f(()=>[...n[1]||(n[1]=[_("Secondary",-1)])]),_:1}),c(r(R),{type:"outline"},{default:f(()=>[...n[2]||(n[2]=[_("Outline",-1)])]),_:1}),c(r(R),{type:"ghost"},{default:f(()=>[...n[3]||(n[3]=[_("Ghost",-1)])]),_:1}),c(r(R),{type:"dashed"},{default:f(()=>[...n[4]||(n[4]=[_("Dashed",-1)])]),_:1}),c(r(R),{type:"text"},{default:f(()=>[...n[5]||(n[5]=[_("Text",-1)])]),_:1}),c(r(R),{type:"danger"},{default:f(()=>[...n[6]||(n[6]=[_("Danger",-1)])]),_:1})],64))}}),Y1=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton type="primary">Primary</MButton>
  <MButton type="secondary">Secondary</MButton>
  <MButton type="outline">Outline</MButton>
  <MButton type="ghost">Ghost</MButton>
  <MButton type="dashed">Dashed</MButton>
  <MButton type="text">Text</MButton>
  <MButton type="danger">Danger</MButton>
</template>
`,X1=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton type="primary">Primary</MButton>
  <MButton type="secondary">Secondary</MButton>
  <MButton type="outline">Outline</MButton>
  <MButton type="ghost">Ghost</MButton>
  <MButton type="dashed">Dashed</MButton>
  <MButton type="text">Text</MButton>
  <MButton type="danger">Danger</MButton>
</template>
`,Z1={name:"button",category:"basic",title:"Button 按钮",summary:"触发一次操作，提供七种视觉类型、三种尺寸、按钮组以及完整的加载与禁用反馈。",description:"按钮是操作入口，而不是装饰元素。Anemia UI 的按钮使用统一的高度、圆角与状态 Token，视觉层级由类型决定：主操作使用 primary，次操作用 secondary 或 outline，低权重操作用 ghost 或 text，需要提示“尚未确定 / 可添加”时使用 dashed。按钮保留稳定的类名与 CSS Variables，因此可以在不改变交互语义的前提下继续扩展品牌样式。",status:"stable",since:"0.1.0",keywords:["button","按钮","ButtonGroup","操作","提交","虚线","文本","按钮组"],sections:[{id:"basic",title:"基础用法",description:"默认使用 primary 类型；同一区域内应只有一个主要操作。",demo:o1,code:a1,codeJs:i1},{id:"types",title:"按钮类型",description:"七种类型共享尺寸、焦点、禁用与加载状态。danger 用于不可逆操作，不应用于普通强调。",demo:Q1,code:Y1,codeJs:X1},{id:"outline",title:"线框模式",description:"outline 使用透明背景与 1px 强边框，适合次级操作；尺寸、图标、圆角、加载与禁用状态与其他类型完全一致。",demo:A1,code:D1,codeJs:E1},{id:"ghost",title:"无边框模式",description:"ghost 移除背景与边框，只保留文字和 hover 背景，适合工具栏、行内操作和低权重入口。",demo:M1,code:_1,codeJs:k1},{id:"dashed",title:"虚线按钮",description:"dashed 与 outline 共享布局和状态，仅把边框改为虚线，常用于“添加”“上传”等占位操作。",demo:v1,code:g1,codeJs:b1},{id:"text",title:"文本按钮",description:"text 使用品牌色文字与更紧凑的横向内边距，视觉权重最低，适合表格行内操作与辅助入口。",demo:H1,code:q1,codeJs:K1},{id:"group",title:"按钮组",description:'MButtonGroup 共享尺寸、合并相邻边框并提供 role="group"；单个按钮仍可覆盖 size、type 与图标。',demo:x1,code:B1,codeJs:C1},{id:"custom-class",title:"自定义 class 与样式钩子",description:"class 直接落在原生 button 上；通过覆盖 --m-button-* 变量或局部选择器即可扩展品牌样式，无需 !important。",demo:c1,code:u1,codeJs:m1},{id:"sizes",title:"尺寸",description:"尺寸统一使用 small / medium / large，对应 28px / 36px / 44px 的控件高度。",demo:R1,code:P1,codeJs:L1},{id:"states",title:"状态",description:"禁用与加载状态都会阻止交互；loading 通过 disabled 与 aria-busy 同时向视觉和辅助技术反馈。",demo:J1,code:G1,codeJs:U1},{id:"icons",title:"图标与图标按钮",description:"图标来自统一的 MIcon 注册表，可以通过 icon 属性或 #icon 插槽传入。只有图标的按钮必须提供 aria-label。",demo:$1,code:T1,codeJs:I1}],api:[{id:"button-api",title:"MButton",props:[{name:"type",type:"'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'dashed' | 'danger'",defaultValue:"'primary'",description:"视觉类型。原生提交行为请使用 nativeType。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"按钮尺寸；在 MButtonGroup 内可省略，由按钮组统一提供。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态，阻止点击与键盘激活。"},{name:"loading",type:"boolean",defaultValue:"false",description:"加载状态，显示指示器并阻止点击。"},{name:"block",type:"boolean",defaultValue:"false",description:"占满父容器宽度。"},{name:"round",type:"boolean",defaultValue:"false",description:"使用胶囊形圆角。"},{name:"icon",type:"IconName",defaultValue:"—",description:"统一图标注册表中的图标名。#icon 插槽优先。"},{name:"nativeType",type:"'button' | 'submit' | 'reset'",defaultValue:"'button'",description:"原生 button 元素的 type 属性。"}],events:[{name:"click",type:"(event: MouseEvent) => void",description:"按钮被激活时触发；禁用或加载状态不会触发。"}],slots:[{name:"default",type:"—",description:"按钮文本内容。"},{name:"icon",type:"—",description:"自定义图标，优先于 icon 属性。"},{name:"loading",type:"—",description:"自定义加载指示器。"}]},{id:"button-group-api",title:"MButtonGroup",props:[{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"为组内按钮提供默认尺寸；单个按钮的 size 优先。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"按钮组的可访问名称，输出为 aria-label。"}],slots:[{name:"default",type:"—",description:"一组 MButton。"}]}],notes:['type 控制视觉类型，原生提交行为使用 nativeType="submit"。',"outline / ghost / dashed / text 与实心按钮共享尺寸、焦点、disabled 与 loading 行为。",'MButtonGroup 负责共享尺寸、合并相邻边框并提供 role="group"；组内按钮仍可单独覆盖 size。',"class 会落到原生 button 上；--m-button-bg、--m-button-fg、--m-button-border、--m-button-hover-bg 等是稳定的样式钩子，不需要 !important。","纯图标按钮必须提供 aria-label，否则屏幕阅读器无法识别用途。","loading 与 disabled 都会阻止 click 事件，避免重复提交。","按钮使用原生 <button> 元素，因此自动支持 Enter / Space 键。",'单独引入组件时，全量引入使用 import "anemia-ui/style.css"，按需引入使用 import "anemia-ui/components/button/style.css"。']},e0=C({__name:"Basic",setup(e){return(t,n)=>(v(),we(r(pt),{style:{"max-width":"460px"}},{header:f(()=>[...n[0]||(n[0]=[g("h3",{class:"card-title"},"组件设计原则",-1)])]),footer:f(()=>[c(r(R),{size:"small",type:"outline"},{default:f(()=>[...n[1]||(n[1]=[_("查看设计规范",-1)])]),_:1})]),default:f(()=>[n[2]||(n[2]=g("p",{class:"card-copy"}," 组件优先复用 Design Token，不引入孤立颜色或尺寸。视觉层级由排版与留白建立，而不是依赖阴影和装饰。 ",-1))]),_:1}))}}),t0=ce(e0,[["__scopeId","data-v-fdaea78b"]]),n0=`<script setup lang="ts">
import { MButton, MCard } from 'anemia-ui'
<\/script>

<template>
  <MCard style="max-width: 460px">
    <template #header>
      <h3 class="card-title">组件设计原则</h3>
    </template>
    <p class="card-copy">
      组件优先复用 Design
      Token，不引入孤立颜色或尺寸。视觉层级由排版与留白建立，而不是依赖阴影和装饰。
    </p>
    <template #footer>
      <MButton size="small" type="outline">查看设计规范</MButton>
    </template>
  </MCard>
</template>

<style scoped>
.card-title {
  margin: 0;
  color: var(--m-color-text-primary);
  font-size: 15px;
  font-weight: 600;
}

.card-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13.5px;
  line-height: 1.7;
}
</style>
`,s0=`<script setup>
import { MButton, MCard } from 'anemia-ui'
<\/script>

<template>
  <MCard style="max-width: 460px">
    <template #header>
      <h3 class="card-title">组件设计原则</h3>
    </template>
    <p class="card-copy">
      组件优先复用 Design
      Token，不引入孤立颜色或尺寸。视觉层级由排版与留白建立，而不是依赖阴影和装饰。
    </p>
    <template #footer>
      <MButton size="small" type="outline">查看设计规范</MButton>
    </template>
  </MCard>
</template>

<style scoped>
.card-title {
  margin: 0;
  color: var(--m-color-text-primary);
  font-size: 15px;
  font-weight: 600;
}

.card-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13.5px;
  line-height: 1.7;
}
</style>
`,o0={class:"demo-stack",style:{"max-width":"460px"}},a0={class:"demo-hint"},i0=C({__name:"Clickable",setup(e){const t=z(0);return(n,s)=>(v(),y("div",o0,[c(r(pt),{clickable:"",onClick:s[0]||(s[0]=o=>t.value+=1)},{default:f(()=>[...s[1]||(s[1]=[g("h3",{class:"card-title"},"可点击卡片",-1),g("p",{class:"card-copy"},"支持鼠标点击、Enter 与 Space，激活时给出明确焦点反馈。",-1)])]),_:1}),g("p",a0,"点击次数："+L(t.value),1)]))}}),l0=ce(i0,[["__scopeId","data-v-f4d19064"]]),r0=`<script setup lang="ts">
import { MCard } from 'anemia-ui'
import { ref } from 'vue'

const clicks = ref(0)
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MCard clickable @click="clicks += 1">
      <h3 class="card-title">可点击卡片</h3>
      <p class="card-copy">支持鼠标点击、Enter 与 Space，激活时给出明确焦点反馈。</p>
    </MCard>
    <p class="demo-hint">点击次数：{{ clicks }}</p>
  </div>
</template>

<style scoped>
.card-title {
  margin: 0 0 8px;
  color: var(--m-color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.card-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13px;
  line-height: 1.65;
}
</style>
`,d0=`<script setup>
import { MCard } from 'anemia-ui'
import { ref } from 'vue'
const clicks = ref(0)
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MCard clickable @click="clicks += 1">
      <h3 class="card-title">可点击卡片</h3>
      <p class="card-copy">支持鼠标点击、Enter 与 Space，激活时给出明确焦点反馈。</p>
    </MCard>
    <p class="demo-hint">点击次数：{{ clicks }}</p>
  </div>
</template>

<style scoped>
.card-title {
  margin: 0 0 8px;
  color: var(--m-color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.card-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13px;
  line-height: 1.65;
}
</style>
`,c0={class:"demo-grid"},u0=C({__name:"Hover",setup(e){return(t,n)=>(v(),y("div",c0,[c(r(pt),{hoverable:""},{default:f(()=>[...n[0]||(n[0]=[g("h3",{class:"card-title"},"Hoverable",-1),g("p",{class:"card-copy"},"鼠标悬停时边框加深，并出现克制的阴影与位移动画。",-1)])]),_:1}),c(r(pt),null,{default:f(()=>[...n[1]||(n[1]=[g("h3",{class:"card-title"},"Default",-1),g("p",{class:"card-copy"},"默认卡片保持静止，适合不需要交互暗示的内容。",-1)])]),_:1})]))}}),m0=ce(u0,[["__scopeId","data-v-acd4b470"]]),p0=`<script setup lang="ts">
import { MCard } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-grid">
    <MCard hoverable>
      <h3 class="card-title">Hoverable</h3>
      <p class="card-copy">鼠标悬停时边框加深，并出现克制的阴影与位移动画。</p>
    </MCard>
    <MCard>
      <h3 class="card-title">Default</h3>
      <p class="card-copy">默认卡片保持静止，适合不需要交互暗示的内容。</p>
    </MCard>
  </div>
</template>

<style scoped>
.card-title {
  margin: 0 0 8px;
  color: var(--m-color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.card-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13px;
  line-height: 1.65;
}
</style>
`,f0=`<script setup>
import { MCard } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-grid">
    <MCard hoverable>
      <h3 class="card-title">Hoverable</h3>
      <p class="card-copy">鼠标悬停时边框加深，并出现克制的阴影与位移动画。</p>
    </MCard>
    <MCard>
      <h3 class="card-title">Default</h3>
      <p class="card-copy">默认卡片保持静止，适合不需要交互暗示的内容。</p>
    </MCard>
  </div>
</template>

<style scoped>
.card-title {
  margin: 0 0 8px;
  color: var(--m-color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.card-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13px;
  line-height: 1.65;
}
</style>
`,v0={class:"demo-grid"},g0=C({__name:"Padding",setup(e){return(t,n)=>(v(),y("div",v0,[c(r(pt),{padding:"none"},{default:f(()=>[...n[0]||(n[0]=[g("div",{class:"padded-block"},"padding:none",-1)])]),_:1}),c(r(pt),{padding:"small"},{default:f(()=>[...n[1]||(n[1]=[g("div",{class:"padded-block"},"padding:small",-1)])]),_:1}),c(r(pt),{padding:"large"},{default:f(()=>[...n[2]||(n[2]=[g("div",{class:"padded-block"},"padding:large",-1)])]),_:1}),c(r(pt),{padding:"32px"},{default:f(()=>[...n[3]||(n[3]=[g("div",{class:"padded-block"},"padding:32px",-1)])]),_:1})]))}}),b0=ce(g0,[["__scopeId","data-v-bcebb117"]]),y0=`<script setup lang="ts">
import { MCard } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-grid">
    <MCard padding="none">
      <div class="padded-block">padding:none</div>
    </MCard>
    <MCard padding="small">
      <div class="padded-block">padding:small</div>
    </MCard>
    <MCard padding="large">
      <div class="padded-block">padding:large</div>
    </MCard>
    <MCard padding="32px">
      <div class="padded-block">padding:32px</div>
    </MCard>
  </div>
</template>

<style scoped>
.padded-block {
  padding: 20px;
  border-radius: var(--m-radius-sm);
  background-color: var(--m-color-bg-muted);
  color: var(--m-color-text-secondary);
  font-size: 12.5px;
  text-align: center;
}
</style>
`,h0=`<script setup>
import { MCard } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-grid">
    <MCard padding="none">
      <div class="padded-block">padding:none</div>
    </MCard>
    <MCard padding="small">
      <div class="padded-block">padding:small</div>
    </MCard>
    <MCard padding="large">
      <div class="padded-block">padding:large</div>
    </MCard>
    <MCard padding="32px">
      <div class="padded-block">padding:32px</div>
    </MCard>
  </div>
</template>

<style scoped>
.padded-block {
  padding: 20px;
  border-radius: var(--m-radius-sm);
  background-color: var(--m-color-bg-muted);
  color: var(--m-color-text-secondary);
  font-size: 12.5px;
  text-align: center;
}
</style>
`,M0={name:"card",category:"container",title:"Card 卡片",summary:"将相关信息组织为一个可操作的容器，支持头部、内容与底部插槽。",description:"卡片是信息容器，不是默认的页面布局单位。Anemia UI 的卡片以边框和留白建立层级，阴影只在悬停或需要强调时出现；可点击卡片会补齐键盘与焦点语义。",status:"stable",since:"0.1.0",keywords:["card","卡片","容器","面板"],sections:[{id:"basic",title:"基础用法",description:"header、default 与 footer 三个插槽分别承载标题、内容与操作。",demo:t0,code:n0,codeJs:s0},{id:"hover",title:"悬停状态",description:"hoverable 在悬停时轻微抬升卡片并加深边框，不改变布局尺寸。",demo:m0,code:p0,codeJs:f0},{id:"clickable",title:"可点击卡片",description:'clickable 添加 role="button"、tabindex 与 Enter / Space 激活，同时提供焦点环。',demo:l0,code:r0,codeJs:d0},{id:"padding",title:"自定义内边距",description:'padding 支持 none / small / medium / large 预设，也接受任意 CSS 长度，如 "32px"。',demo:b0,code:y0,codeJs:h0}],api:[{id:"card-api",title:"MCard",props:[{name:"hoverable",type:"boolean",defaultValue:"false",description:"悬停时显示边框、阴影与轻微位移。"},{name:"clickable",type:"boolean",defaultValue:"false",description:"添加可点击与键盘激活语义，自动包含悬停效果。"},{name:"padding",type:"'none' | 'small' | 'medium' | 'large' | string",defaultValue:"'medium'",description:"内边距预设或任意 CSS 长度。"}],events:[{name:"click",type:"(event: MouseEvent | KeyboardEvent) => void",description:"卡片被点击或通过 Enter / Space 激活时触发。"}],slots:[{name:"header",type:"—",description:"卡片头部，通常放标题与操作。"},{name:"default",type:"—",description:"卡片主体内容。"},{name:"footer",type:"—",description:"卡片底部，自动添加分割线。"}]}],notes:["clickable 会为卡片添加按钮语义；卡片内部如包含链接或按钮，交互仍会被正确隔离。","不要嵌套可点击卡片，避免出现两个重叠的激活区域。",'自定义 padding 传入字符串时请包含单位，例如 "32px"。',"卡片不设置 overflow: hidden，便于 Badge 等元素溢出显示；需要裁剪时由使用方处理。"]},_0={class:"demo-stack"},k0={class:"demo-hint"},w0=C({__name:"Basic",setup(e){const t=z(!0),n=z(!1);return(s,o)=>(v(),y("div",_0,[c(r(jt),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),label:"接收产品更新"},null,8,["modelValue"]),c(r(jt),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},{default:f(()=>[...o[2]||(o[2]=[_("订阅设计周刊",-1)])]),_:1},8,["modelValue"]),g("p",k0,"updates："+L(t.value)+" · newsletter："+L(n.value),1)]))}}),x0=`<script setup lang="ts">
import { MCheckbox } from 'anemia-ui'
import { ref } from 'vue'

const updates = ref(true)
const newsletter = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <MCheckbox v-model="updates" label="接收产品更新" />
    <MCheckbox v-model="newsletter">订阅设计周刊</MCheckbox>
    <p class="demo-hint">updates：{{ updates }} · newsletter：{{ newsletter }}</p>
  </div>
</template>
`,B0=`<script setup>
import { MCheckbox } from 'anemia-ui'
import { ref } from 'vue'
const updates = ref(true)
const newsletter = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <MCheckbox v-model="updates" label="接收产品更新" />
    <MCheckbox v-model="newsletter">订阅设计周刊</MCheckbox>
    <p class="demo-hint">updates：{{ updates }} · newsletter：{{ newsletter }}</p>
  </div>
</template>
`,C0={class:"demo-stack"},$0={class:"demo-hint"},T0=C({__name:"Group",setup(e){const t=[{label:"设计",value:"design"},{label:"前端",value:"frontend"},{label:"组件库",value:"library"},{label:"文档",value:"docs"}],n=z(["design","library"]);return(s,o)=>(v(),y("div",C0,[c(r(gi),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),options:t,"aria-label":"关注方向"},null,8,["modelValue"]),g("p",$0,"已选择："+L(n.value.length?n.value.join("、"):"暂无"),1)]))}}),I0=`<script setup lang="ts">
import { MCheckboxGroup, type CheckboxOption } from 'anemia-ui'
import { ref } from 'vue'

const options: CheckboxOption[] = [
  { label: '设计', value: 'design' },
  { label: '前端', value: 'frontend' },
  { label: '组件库', value: 'library' },
  { label: '文档', value: 'docs' },
]

const selected = ref<(string | number)[]>(['design', 'library'])
<\/script>

<template>
  <div class="demo-stack">
    <MCheckboxGroup v-model="selected" :options="options" aria-label="关注方向" />
    <p class="demo-hint">已选择：{{ selected.length ? selected.join('、') : '暂无' }}</p>
  </div>
</template>
`,V0=`<script setup>
import { MCheckboxGroup } from 'anemia-ui'
import { ref } from 'vue'
const options = [
  { label: '设计', value: 'design' },
  { label: '前端', value: 'frontend' },
  { label: '组件库', value: 'library' },
  { label: '文档', value: 'docs' },
]
const selected = ref(['design', 'library'])
<\/script>

<template>
  <div class="demo-stack">
    <MCheckboxGroup v-model="selected" :options="options" aria-label="关注方向" />
    <p class="demo-hint">已选择：{{ selected.length ? selected.join('、') : '暂无' }}</p>
  </div>
</template>
`,S0={class:"demo-stack"},z0={class:"demo-hint"},A0=C({__name:"Indeterminate",setup(e){const t=["读取","编辑","发布"],n=t.map(l=>({label:l,value:l})),s=z(["读取"]),o=x(()=>s.value.length===t.length),a=x(()=>s.value.length>0&&!o.value);function i(l){s.value=l?[...t]:[]}return(l,d)=>(v(),y("div",S0,[c(r(jt),{"model-value":o.value,indeterminate:a.value,"onUpdate:modelValue":i},{default:f(()=>[...d[1]||(d[1]=[_(" 全部权限 ",-1)])]),_:1},8,["model-value","indeterminate"]),c(r(Xt)),c(r(gi),{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=u=>s.value=u),options:r(n),"aria-label":"权限"},null,8,["modelValue","options"]),g("p",z0,"已选择 "+L(s.value.length)+" / "+L(t.length)+" 项",1)]))}}),D0=`<script setup lang="ts">
import { MCheckbox, MCheckboxGroup, MDivider, type CheckboxValue } from 'anemia-ui'
import { computed, ref } from 'vue'

const permissions = ['读取', '编辑', '发布']
const options = permissions.map((permission) => ({ label: permission, value: permission }))
const selected = ref<CheckboxValue[]>(['读取'])

const allChecked = computed(() => selected.value.length === permissions.length)
const indeterminate = computed(() => selected.value.length > 0 && !allChecked.value)

function toggleAll(checked: boolean): void {
  selected.value = checked ? [...permissions] : []
}
<\/script>

<template>
  <div class="demo-stack">
    <MCheckbox
      :model-value="allChecked"
      :indeterminate="indeterminate"
      @update:model-value="toggleAll"
    >
      全部权限
    </MCheckbox>
    <MDivider />
    <MCheckboxGroup v-model="selected" :options="options" aria-label="权限" />
    <p class="demo-hint">已选择 {{ selected.length }} / {{ permissions.length }} 项</p>
  </div>
</template>
`,E0=`<script setup>
import { MCheckbox, MCheckboxGroup, MDivider } from 'anemia-ui'
import { computed, ref } from 'vue'
const permissions = ['读取', '编辑', '发布']
const options = permissions.map((permission) => ({ label: permission, value: permission }))
const selected = ref(['读取'])
const allChecked = computed(() => selected.value.length === permissions.length)
const indeterminate = computed(() => selected.value.length > 0 && !allChecked.value)
function toggleAll(checked) {
  selected.value = checked ? [...permissions] : []
}
<\/script>

<template>
  <div class="demo-stack">
    <MCheckbox
      :model-value="allChecked"
      :indeterminate="indeterminate"
      @update:model-value="toggleAll"
    >
      全部权限
    </MCheckbox>
    <MDivider />
    <MCheckboxGroup v-model="selected" :options="options" aria-label="权限" />
    <p class="demo-hint">已选择 {{ selected.length }} / {{ permissions.length }} 项</p>
  </div>
</template>
`,R0={class:"demo-stack"},P0={class:"demo-row"},L0={class:"demo-row"},O0=C({__name:"SizesDisabled",setup(e){const t=z(!0),n=z(!0),s=z(!0);return(o,a)=>(v(),y("div",R0,[g("div",P0,[c(r(jt),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),size:"small",label:"Small"},null,8,["modelValue"]),c(r(jt),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),size:"medium",label:"Medium"},null,8,["modelValue"]),c(r(jt),{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=i=>s.value=i),size:"large",label:"Large"},null,8,["modelValue"])]),g("div",L0,[c(r(jt),{"model-value":!0,disabled:"",label:"禁用选中"}),c(r(jt),{"model-value":!1,disabled:"",label:"禁用未选"}),c(r(jt),{"model-value":!1,indeterminate:"",disabled:"",label:"禁用半选"})])]))}}),F0=`<script setup lang="ts">
import { MCheckbox } from 'anemia-ui'
import { ref } from 'vue'

const small = ref(true)
const medium = ref(true)
const large = ref(true)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MCheckbox v-model="small" size="small" label="Small" />
      <MCheckbox v-model="medium" size="medium" label="Medium" />
      <MCheckbox v-model="large" size="large" label="Large" />
    </div>
    <div class="demo-row">
      <MCheckbox :model-value="true" disabled label="禁用选中" />
      <MCheckbox :model-value="false" disabled label="禁用未选" />
      <MCheckbox :model-value="false" indeterminate disabled label="禁用半选" />
    </div>
  </div>
</template>
`,N0=`<script setup>
import { MCheckbox } from 'anemia-ui'
import { ref } from 'vue'
const small = ref(true)
const medium = ref(true)
const large = ref(true)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MCheckbox v-model="small" size="small" label="Small" />
      <MCheckbox v-model="medium" size="medium" label="Medium" />
      <MCheckbox v-model="large" size="large" label="Large" />
    </div>
    <div class="demo-row">
      <MCheckbox :model-value="true" disabled label="禁用选中" />
      <MCheckbox :model-value="false" disabled label="禁用未选" />
      <MCheckbox :model-value="false" indeterminate disabled label="禁用半选" />
    </div>
  </div>
</template>
`,J0={name:"checkbox",category:"basic",title:"Checkbox 复选框",summary:"独立复选框与复选框组，支持半选、尺寸、禁用以及原生表单语义。",description:'复选框用于在多个选项中做多选。组件保留原生 input[type="checkbox"] 的语义与键盘行为，将视觉层独立出来；复选框组负责数组值的增删与顺序维护。',status:"stable",since:"0.1.0",keywords:["checkbox","复选框","多选","group","半选"],sections:[{id:"basic",title:"基础用法",description:"独立使用时通过 v-model 绑定布尔值。",demo:w0,code:x0,codeJs:B0},{id:"group",title:"复选框组",description:"MCheckboxGroup 维护一个数组；通过 options 快速渲染，或在默认插槽中放置带 value 的 MCheckbox。",demo:T0,code:I0,codeJs:V0},{id:"indeterminate",title:"半选状态",description:'indeterminate 仅控制视觉与 aria-checked="mixed"，不会改变绑定值；常用于「全选」的派生状态。',demo:A0,code:D0,codeJs:E0},{id:"sizes-disabled",title:"尺寸与禁用",description:"尺寸统一为 small / medium / large；禁用状态阻止指针与键盘交互。",demo:O0,code:F0,codeJs:N0}],api:[{id:"checkbox-api",title:"MCheckbox",props:[{name:"modelValue",type:"boolean",defaultValue:"false",description:"独立复选框的选中状态；在组内会被忽略。"},{name:"value",type:"string | number",defaultValue:"—",description:"在 MCheckboxGroup 中标识当前选项，组内必填。"},{name:"label",type:"string",defaultValue:"—",description:"可见标签文本；默认插槽优先。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态；组内会继承组的 disabled。"},{name:"indeterminate",type:"boolean",defaultValue:"false",description:"半选视觉状态，不改变绑定值。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"复选框尺寸；组内使用组的尺寸。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"id",type:"string",defaultValue:"—",description:"原生 input id，缺省时自动生成。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"独立复选框状态变化；组内由组统一更新数组。"},{name:"change",type:"(value: boolean, event: Event) => void",description:"选中状态变化时触发。"}],slots:[{name:"default",type:"—",description:"自定义标签内容。"}]},{id:"checkbox-group-api",title:"MCheckboxGroup",props:[{name:"modelValue",type:"(string | number)[]",defaultValue:"[]",description:"已选中值的数组。"},{name:"options",type:"CheckboxOption[]",defaultValue:"[]",description:"便捷渲染选项，每项包含 label / value / disabled。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个组，并向下传递。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"组内复选框尺寸。"},{name:"name",type:"string",defaultValue:"—",description:"组内原生 input 的 name。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"组的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: (string | number)[]) => void",description:"选中项变化时触发，用于 v-model。"},{name:"change",type:"(value: (string | number)[]) => void",description:"选中项变化时触发。"}],slots:[{name:"default",type:"—",description:"自定义组内复选框。"}]}],notes:["在组内必须为每个 MCheckbox 提供唯一的 value，否则无法加入选中数组。","组内不要给子复选框绑定 v-model；选中状态由组的 modelValue 派生。","indeterminate 是纯视觉状态，父级应通过已选项数量自行计算。","原生 input 保留了表单提交与键盘切换能力，视觉层不会拦截焦点。",'组容器使用 role="group"，请通过 ariaLabel 提供分组名称。']},G0={class:"demo-stack",style:{"max-width":"760px"}},U0={class:"demo-hint"},j0=C({__name:"Basic",setup(e){const t=[{key:"name",title:"订单",width:200,sortable:!0},{key:"owner",title:"负责人",width:120},{key:"amount",title:"金额",width:120,align:"right",sortable:!0},{key:"updatedAt",title:"更新时间",minWidth:160,sortable:!0}],n=[{id:"A-1001",name:"设计系统组件包",owner:"林安",amount:12800,updatedAt:"2026-02-18"},{id:"A-1002",name:"数据看板改版",owner:"Alex",amount:9600,updatedAt:"2026-02-17"},{id:"A-1003",name:"文档站性能优化",owner:"周宁",amount:4200,updatedAt:"2026-02-20"},{id:"A-1004",name:"主题系统升级",owner:"林安",amount:7600,updatedAt:"2026-02-15"},{id:"A-1005",name:"移动端导航重构",owner:"陈可",amount:15800,updatedAt:"2026-02-19"},{id:"A-1006",name:"表单校验能力",owner:"Alex",amount:5400,updatedAt:"2026-02-16"}],s=z({key:"updatedAt",order:"desc"});return(o,a)=>(v(),y("div",G0,[c(r(eo),{sort:s.value,"onUpdate:sort":a[0]||(a[0]=i=>s.value=i),columns:t,rows:n,"row-key":"id",caption:"订单列表"},null,8,["sort"]),g("p",U0," 当前排序："+L(s.value?`${s.value.key} · ${s.value.order==="asc"?"升序":"降序"}`:"未排序")+"； 点击可排序表头会在升序、降序与取消之间循环。 ",1)]))}}),W0=`<script setup lang="ts">
import type { DataTableColumn, DataTableSort } from 'anemia-ui'
import { MDataTable } from 'anemia-ui'
import { ref } from 'vue'

interface Order {
  id: string
  name: string
  owner: string
  amount: number
  updatedAt: string
}

const columns: DataTableColumn[] = [
  { key: 'name', title: '订单', width: 200, sortable: true },
  { key: 'owner', title: '负责人', width: 120 },
  { key: 'amount', title: '金额', width: 120, align: 'right', sortable: true },
  { key: 'updatedAt', title: '更新时间', minWidth: 160, sortable: true },
]

const rows: Order[] = [
  { id: 'A-1001', name: '设计系统组件包', owner: '林安', amount: 12800, updatedAt: '2026-02-18' },
  { id: 'A-1002', name: '数据看板改版', owner: 'Alex', amount: 9600, updatedAt: '2026-02-17' },
  { id: 'A-1003', name: '文档站性能优化', owner: '周宁', amount: 4200, updatedAt: '2026-02-20' },
  { id: 'A-1004', name: '主题系统升级', owner: '林安', amount: 7600, updatedAt: '2026-02-15' },
  { id: 'A-1005', name: '移动端导航重构', owner: '陈可', amount: 15800, updatedAt: '2026-02-19' },
  { id: 'A-1006', name: '表单校验能力', owner: 'Alex', amount: 5400, updatedAt: '2026-02-16' },
]

const sort = ref<DataTableSort | null>({ key: 'updatedAt', order: 'desc' })
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDataTable
      v-model:sort="sort"
      :columns="columns"
      :rows="rows"
      row-key="id"
      caption="订单列表"
    />
    <p class="demo-hint">
      当前排序：{{ sort ? \`\${sort.key} · \${sort.order === 'asc' ? '升序' : '降序'}\` : '未排序' }}；
      点击可排序表头会在升序、降序与取消之间循环。
    </p>
  </div>
</template>
`,H0=`<script setup>
import { MDataTable } from 'anemia-ui'
import { ref } from 'vue'
const columns = [
  { key: 'name', title: '订单', width: 200, sortable: true },
  { key: 'owner', title: '负责人', width: 120 },
  { key: 'amount', title: '金额', width: 120, align: 'right', sortable: true },
  { key: 'updatedAt', title: '更新时间', minWidth: 160, sortable: true },
]
const rows = [
  { id: 'A-1001', name: '设计系统组件包', owner: '林安', amount: 12800, updatedAt: '2026-02-18' },
  { id: 'A-1002', name: '数据看板改版', owner: 'Alex', amount: 9600, updatedAt: '2026-02-17' },
  { id: 'A-1003', name: '文档站性能优化', owner: '周宁', amount: 4200, updatedAt: '2026-02-20' },
  { id: 'A-1004', name: '主题系统升级', owner: '林安', amount: 7600, updatedAt: '2026-02-15' },
  { id: 'A-1005', name: '移动端导航重构', owner: '陈可', amount: 15800, updatedAt: '2026-02-19' },
  { id: 'A-1006', name: '表单校验能力', owner: 'Alex', amount: 5400, updatedAt: '2026-02-16' },
]
const sort = ref({ key: 'updatedAt', order: 'desc' })
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDataTable
      v-model:sort="sort"
      :columns="columns"
      :rows="rows"
      row-key="id"
      caption="订单列表"
    />
    <p class="demo-hint">
      当前排序：{{ sort ? \`\${sort.key} · \${sort.order === 'asc' ? '升序' : '降序'}\` : '未排序' }}；
      点击可排序表头会在升序、降序与取消之间循环。
    </p>
  </div>
</template>
`,q0={class:"demo-stack",style:{"max-width":"100%"}},K0=C({__name:"FixedColumns",setup(e){const t=[{key:"id",title:"编号",width:120,fixed:"left"},{key:"name",title:"任务",width:220},{key:"owner",title:"负责人",width:120},{key:"status",title:"状态",width:120},{key:"duration",title:"耗时",width:100,align:"right"},{key:"updatedAt",title:"更新时间",width:140},{key:"actions",title:"操作",width:120,fixed:"right"}],n=[{id:"T-001",name:"整理设计 Token 清单",owner:"林安",status:"进行中",duration:"6h",updatedAt:"2026-02-20"},{id:"T-002",name:"补齐表格排序测试",owner:"周宁",status:"已完成",duration:"3h",updatedAt:"2026-02-19"},{id:"T-003",name:"复核深色主题对比度",owner:"Alex",status:"进行中",duration:"4h",updatedAt:"2026-02-19"},{id:"T-004",name:"重写文档示例说明",owner:"陈可",status:"待开始",duration:"2h",updatedAt:"2026-02-18"},{id:"T-005",name:"移动端表格降级验证",owner:"林安",status:"进行中",duration:"5h",updatedAt:"2026-02-17"},{id:"T-006",name:"发布前构建检查",owner:"周宁",status:"待开始",duration:"1h",updatedAt:"2026-02-17"}];return(s,o)=>(v(),y("div",q0,[c(r(eo),{columns:t,rows:n,"row-key":"id",caption:"任务排期",height:320,"caption-visible":""},{actions:f(()=>[c(r(R),{size:"small",type:"outline"},{default:f(()=>[...o[0]||(o[0]=[_("查看",-1)])]),_:1})]),_:1}),o[1]||(o[1]=g("p",{class:"demo-hint"}," 固定列必须声明像素宽度。容器宽度不足时，横向滚动发生在表格内部，左右两列始终可见。 ",-1))]))}}),Q0=`<script setup lang="ts">
import type { DataTableColumn } from 'anemia-ui'
import { MButton, MDataTable } from 'anemia-ui'

interface Task {
  id: string
  name: string
  owner: string
  status: string
  duration: string
  updatedAt: string
}

const columns: DataTableColumn[] = [
  { key: 'id', title: '编号', width: 120, fixed: 'left' },
  { key: 'name', title: '任务', width: 220 },
  { key: 'owner', title: '负责人', width: 120 },
  { key: 'status', title: '状态', width: 120 },
  { key: 'duration', title: '耗时', width: 100, align: 'right' },
  { key: 'updatedAt', title: '更新时间', width: 140 },
  { key: 'actions', title: '操作', width: 120, fixed: 'right' },
]

const rows: Task[] = [
  {
    id: 'T-001',
    name: '整理设计 Token 清单',
    owner: '林安',
    status: '进行中',
    duration: '6h',
    updatedAt: '2026-02-20',
  },
  {
    id: 'T-002',
    name: '补齐表格排序测试',
    owner: '周宁',
    status: '已完成',
    duration: '3h',
    updatedAt: '2026-02-19',
  },
  {
    id: 'T-003',
    name: '复核深色主题对比度',
    owner: 'Alex',
    status: '进行中',
    duration: '4h',
    updatedAt: '2026-02-19',
  },
  {
    id: 'T-004',
    name: '重写文档示例说明',
    owner: '陈可',
    status: '待开始',
    duration: '2h',
    updatedAt: '2026-02-18',
  },
  {
    id: 'T-005',
    name: '移动端表格降级验证',
    owner: '林安',
    status: '进行中',
    duration: '5h',
    updatedAt: '2026-02-17',
  },
  {
    id: 'T-006',
    name: '发布前构建检查',
    owner: '周宁',
    status: '待开始',
    duration: '1h',
    updatedAt: '2026-02-17',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 100%">
    <MDataTable
      :columns="columns"
      :rows="rows"
      row-key="id"
      caption="任务排期"
      :height="320"
      caption-visible
    >
      <template #actions>
        <MButton size="small" type="outline">查看</MButton>
      </template>
    </MDataTable>
    <p class="demo-hint">
      固定列必须声明像素宽度。容器宽度不足时，横向滚动发生在表格内部，左右两列始终可见。
    </p>
  </div>
</template>
`,Y0=`<script setup>
import { MButton, MDataTable } from 'anemia-ui'
const columns = [
  { key: 'id', title: '编号', width: 120, fixed: 'left' },
  { key: 'name', title: '任务', width: 220 },
  { key: 'owner', title: '负责人', width: 120 },
  { key: 'status', title: '状态', width: 120 },
  { key: 'duration', title: '耗时', width: 100, align: 'right' },
  { key: 'updatedAt', title: '更新时间', width: 140 },
  { key: 'actions', title: '操作', width: 120, fixed: 'right' },
]
const rows = [
  {
    id: 'T-001',
    name: '整理设计 Token 清单',
    owner: '林安',
    status: '进行中',
    duration: '6h',
    updatedAt: '2026-02-20',
  },
  {
    id: 'T-002',
    name: '补齐表格排序测试',
    owner: '周宁',
    status: '已完成',
    duration: '3h',
    updatedAt: '2026-02-19',
  },
  {
    id: 'T-003',
    name: '复核深色主题对比度',
    owner: 'Alex',
    status: '进行中',
    duration: '4h',
    updatedAt: '2026-02-19',
  },
  {
    id: 'T-004',
    name: '重写文档示例说明',
    owner: '陈可',
    status: '待开始',
    duration: '2h',
    updatedAt: '2026-02-18',
  },
  {
    id: 'T-005',
    name: '移动端表格降级验证',
    owner: '林安',
    status: '进行中',
    duration: '5h',
    updatedAt: '2026-02-17',
  },
  {
    id: 'T-006',
    name: '发布前构建检查',
    owner: '周宁',
    status: '待开始',
    duration: '1h',
    updatedAt: '2026-02-17',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 100%">
    <MDataTable
      :columns="columns"
      :rows="rows"
      row-key="id"
      caption="任务排期"
      :height="320"
      caption-visible
    >
      <template #actions>
        <MButton size="small" type="outline">查看</MButton>
      </template>
    </MDataTable>
    <p class="demo-hint">
      固定列必须声明像素宽度。容器宽度不足时，横向滚动发生在表格内部，左右两列始终可见。
    </p>
  </div>
</template>
`,X0={class:"demo-stack",style:{"max-width":"100%"}},Z0=C({__name:"LargeData",setup(e){const t=["林安","Alex","周宁","陈可"],n=Array.from({length:200},(o,a)=>({id:a+1,name:`批处理任务 ${String(a+1).padStart(3,"0")}`,owner:t[a%t.length]??"林安",progress:a*7%101,duration:a*13%240})),s=[{key:"id",title:"编号",width:90,align:"right",sortable:!0},{key:"name",title:"任务",minWidth:200,sortable:!0},{key:"owner",title:"负责人",width:120},{key:"progress",title:"进度",width:160},{key:"duration",title:"耗时（分钟）",width:140,align:"right",sortable:!0}];return(o,a)=>(v(),y("div",X0,[c(r(eo),{columns:s,rows:r(n),"row-key":"id",caption:"批处理任务（200 行）",height:360},{progress:f(({value:i})=>[c(r(Ht),{percent:Number(i),size:"small","show-info":!1,label:"任务进度"},null,8,["percent"])]),_:1},8,["rows"]),a[0]||(a[0]=g("p",{class:"demo-hint"}," 200 行数据不做虚拟滚动：排序、固定表头与内部滚动仍然可用，用来说明 Phase 03 的性能边界。 ",-1))]))}}),e_=`<script setup lang="ts">
import type { DataTableColumn } from 'anemia-ui'
import { MDataTable, MProgress } from 'anemia-ui'

interface Job {
  id: number
  name: string
  owner: string
  progress: number
  duration: number
}

const owners = ['林安', 'Alex', '周宁', '陈可']

const rows: Job[] = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  name: \`批处理任务 \${String(index + 1).padStart(3, '0')}\`,
  owner: owners[index % owners.length] ?? '林安',
  progress: (index * 7) % 101,
  duration: (index * 13) % 240,
}))

const columns: DataTableColumn[] = [
  { key: 'id', title: '编号', width: 90, align: 'right', sortable: true },
  { key: 'name', title: '任务', minWidth: 200, sortable: true },
  { key: 'owner', title: '负责人', width: 120 },
  { key: 'progress', title: '进度', width: 160 },
  { key: 'duration', title: '耗时（分钟）', width: 140, align: 'right', sortable: true },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 100%">
    <MDataTable
      :columns="columns"
      :rows="rows"
      row-key="id"
      caption="批处理任务（200 行）"
      :height="360"
    >
      <template #progress="{ value }">
        <MProgress :percent="Number(value)" size="small" :show-info="false" label="任务进度" />
      </template>
    </MDataTable>
    <p class="demo-hint">
      200 行数据不做虚拟滚动：排序、固定表头与内部滚动仍然可用，用来说明 Phase 03 的性能边界。
    </p>
  </div>
</template>
`,t_=`<script setup>
import { MDataTable, MProgress } from 'anemia-ui'
const owners = ['林安', 'Alex', '周宁', '陈可']
const rows = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  name: \`批处理任务 \${String(index + 1).padStart(3, '0')}\`,
  owner: owners[index % owners.length] ?? '林安',
  progress: (index * 7) % 101,
  duration: (index * 13) % 240,
}))
const columns = [
  { key: 'id', title: '编号', width: 90, align: 'right', sortable: true },
  { key: 'name', title: '任务', minWidth: 200, sortable: true },
  { key: 'owner', title: '负责人', width: 120 },
  { key: 'progress', title: '进度', width: 160 },
  { key: 'duration', title: '耗时（分钟）', width: 140, align: 'right', sortable: true },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 100%">
    <MDataTable
      :columns="columns"
      :rows="rows"
      row-key="id"
      caption="批处理任务（200 行）"
      :height="360"
    >
      <template #progress="{ value }">
        <MProgress :percent="Number(value)" size="small" :show-info="false" label="任务进度" />
      </template>
    </MDataTable>
    <p class="demo-hint">
      200 行数据不做虚拟滚动：排序、固定表头与内部滚动仍然可用，用来说明 Phase 03 的性能边界。
    </p>
  </div>
</template>
`,n_={class:"demo-stack",style:{"max-width":"720px"}},s_={class:"demo-row"},o_=C({__name:"States",setup(e){const t=[{key:"name",title:"成员",width:160,sortable:!0},{key:"role",title:"角色",width:140},{key:"joinedAt",title:"加入时间",minWidth:160}],n=[{id:"m-1",name:"林安",role:"设计工程师",joinedAt:"2024-03-12"},{id:"m-2",name:"Alex",role:"前端工程师",joinedAt:"2024-05-08"},{id:"m-3",name:"周宁",role:"质量工程师",joinedAt:"2024-09-21"}],s=z(!1),o=z(!1);return(a,i)=>(v(),y("div",n_,[g("div",s_,[c(r(R),{size:"small",onClick:i[0]||(i[0]=l=>s.value=!s.value)},{default:f(()=>[_(L(s.value?"结束加载":"模拟加载"),1)]),_:1}),c(r(R),{size:"small",type:"outline",onClick:i[1]||(i[1]=l=>o.value=!o.value)},{default:f(()=>[_(L(o.value?"恢复数据":"清空数据"),1)]),_:1})]),c(r(eo),{columns:t,rows:o.value?[]:n,"row-key":"id",caption:"团队成员",loading:s.value,"empty-text":"没有匹配的成员"},null,8,["rows","loading"]),i[2]||(i[2]=g("p",{class:"demo-hint"},'加载与空数据共享同一套状态：aria-busy、role="status" 与整行空状态。',-1))]))}}),a_=`<script setup lang="ts">
import type { DataTableColumn } from 'anemia-ui'
import { MButton, MDataTable } from 'anemia-ui'
import { ref } from 'vue'

interface Member {
  id: string
  name: string
  role: string
  joinedAt: string
}

const columns: DataTableColumn[] = [
  { key: 'name', title: '成员', width: 160, sortable: true },
  { key: 'role', title: '角色', width: 140 },
  { key: 'joinedAt', title: '加入时间', minWidth: 160 },
]

const rows: Member[] = [
  { id: 'm-1', name: '林安', role: '设计工程师', joinedAt: '2024-03-12' },
  { id: 'm-2', name: 'Alex', role: '前端工程师', joinedAt: '2024-05-08' },
  { id: 'm-3', name: '周宁', role: '质量工程师', joinedAt: '2024-09-21' },
]

const loading = ref(false)
const cleared = ref(false)
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <div class="demo-row">
      <MButton size="small" @click="loading = !loading">
        {{ loading ? '结束加载' : '模拟加载' }}
      </MButton>
      <MButton size="small" type="outline" @click="cleared = !cleared">
        {{ cleared ? '恢复数据' : '清空数据' }}
      </MButton>
    </div>

    <MDataTable
      :columns="columns"
      :rows="cleared ? [] : rows"
      row-key="id"
      caption="团队成员"
      :loading="loading"
      empty-text="没有匹配的成员"
    />

    <p class="demo-hint">加载与空数据共享同一套状态：aria-busy、role="status" 与整行空状态。</p>
  </div>
</template>
`,i_=`<script setup>
import { MButton, MDataTable } from 'anemia-ui'
import { ref } from 'vue'
const columns = [
  { key: 'name', title: '成员', width: 160, sortable: true },
  { key: 'role', title: '角色', width: 140 },
  { key: 'joinedAt', title: '加入时间', minWidth: 160 },
]
const rows = [
  { id: 'm-1', name: '林安', role: '设计工程师', joinedAt: '2024-03-12' },
  { id: 'm-2', name: 'Alex', role: '前端工程师', joinedAt: '2024-05-08' },
  { id: 'm-3', name: '周宁', role: '质量工程师', joinedAt: '2024-09-21' },
]
const loading = ref(false)
const cleared = ref(false)
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <div class="demo-row">
      <MButton size="small" @click="loading = !loading">
        {{ loading ? '结束加载' : '模拟加载' }}
      </MButton>
      <MButton size="small" type="outline" @click="cleared = !cleared">
        {{ cleared ? '恢复数据' : '清空数据' }}
      </MButton>
    </div>

    <MDataTable
      :columns="columns"
      :rows="cleared ? [] : rows"
      row-key="id"
      caption="团队成员"
      :loading="loading"
      empty-text="没有匹配的成员"
    />

    <p class="demo-hint">加载与空数据共享同一套状态：aria-busy、role="status" 与整行空状态。</p>
  </div>
</template>
`,l_={name:"data-table",category:"data",title:"DataTable 数据表格",summary:"面向真实数据集的表格：排序、固定列、粘性表头、加载与空状态，并在 100+ 行时保持可用。",description:"DataTable 与轻量的 MTable 分工明确：MTable 只负责语义化展示，DataTable 负责排序、固定列、内部滚动与统一状态。它仍然不是 DataGrid——不提供虚拟滚动、行选择、树形数据、列显隐或列宽拖拽，这些能力留给后续阶段。",status:"stable",since:"0.6.0",keywords:["data-table","table","表格","排序","固定列","大数据"],sections:[{id:"basic",title:"基础用法",description:"columns 定义列，rows 提供数据。可排序列在表头渲染按钮，点击在升序、降序与取消之间循环；v-model:sort 可以读取或接管排序状态。",demo:j0,code:W0,codeJs:H0},{id:"fixed-columns",title:"固定列与粘性表头",description:"fixed 为 left / right 的列必须声明像素宽度。容器较窄时只在表格内部横向滚动，左右固定列与表头始终保持可见。",demo:K0,code:Q0,codeJs:Y0},{id:"large-data",title:"大数据边界",description:"200 行数据不做虚拟滚动：排序、粘性表头与内部滚动仍然可用。超过这个量级时应在业务层分页，而不是继续堆行数。",demo:Z0,code:e_,codeJs:t_},{id:"states",title:"加载与空状态",description:"loading 显示覆盖层并设置 aria-busy；rows 为空时渲染整行空状态。empty 与 loading 插槽可以完全替换默认内容。",demo:o_,code:a_,codeJs:i_}],api:[{id:"data-table-api",title:"MDataTable",props:[{name:"columns",type:"readonly DataTableColumn[]",defaultValue:"—",description:"列定义，包含 key、title、width、minWidth、align、sortable、fixed。"},{name:"rows",type:"readonly T[]",defaultValue:"—",description:"行数据；每个字段通过列 key 读取。"},{name:"rowKey",type:"string",defaultValue:"—",description:"稳定行标识字段；缺省时回退到行索引。"},{name:"caption",type:"string",defaultValue:"—",description:"表格标题，默认视觉隐藏但仍提供给辅助技术。"},{name:"captionVisible",type:"boolean",defaultValue:"false",description:"是否显示 caption。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"单元格字号与内边距档位。"},{name:"height",type:"string | number",defaultValue:"—",description:"固定表体高度；设置后表头粘性、表体内部滚动。"},{name:"maxHeight",type:"string | number",defaultValue:"—",description:"表体最大高度；内容超出后才出现内部纵向滚动。"},{name:"loading",type:"boolean",defaultValue:"false",description:"显示加载覆盖层，并把容器标记为 aria-busy。"},{name:"emptyText",type:"string",defaultValue:"'暂无数据'",description:"默认空状态文案。"},{name:"sort",type:"DataTableSort | null",defaultValue:"—",description:"受控排序状态，配合 v-model:sort 使用；传入后组件不再自持状态。"},{name:"defaultSort",type:"DataTableSort",defaultValue:"—",description:"非受控模式下的初始排序。"},{name:"layout",type:"'auto' | 'fixed'",defaultValue:"'auto'",description:"列宽策略；存在固定列时强制使用 fixed。"}],events:[{name:"update:sort",type:"(sort: DataTableSort | null) => void",description:"排序状态变化时触发，用于 v-model:sort。"},{name:"sort-change",type:"(sort: DataTableSort | null) => void",description:"排序状态变化时触发；取消排序时参数为 null。"}],slots:[{name:"[column.key]",type:"{ row, column, value, index }",description:"按列 key 命名的单元格插槽，用于渲染组件或自定义内容。"},{name:"empty",type:"—",description:"替换默认空状态；仍位于语义化表格单元格内。"},{name:"loading",type:"—",description:"替换默认加载覆盖层内容。"}]},{id:"data-table-column",title:"DataTableColumn",props:[{name:"key",type:"string",defaultValue:"—",description:"字段名，同时作为单元格插槽名。"},{name:"title",type:"string",defaultValue:"—",description:"表头文案。"},{name:"width",type:"string | number",defaultValue:"—",description:"首选列宽；数字按像素处理。固定列必须使用像素宽度。"},{name:"minWidth",type:"string | number",defaultValue:"—",description:"最小列宽；窄屏时由内部滚动兜底。"},{name:"align",type:"'left' | 'center' | 'right'",defaultValue:"—",description:"单元格与表头对齐方式。"},{name:"sortable",type:"boolean",defaultValue:"false",description:"是否渲染排序按钮并输出 aria-sort。"},{name:"fixed",type:"'left' | 'right'",defaultValue:"—",description:"固定列方向；需要可解析为像素的 width，否则不固定并警告。"}],events:[],slots:[]},{id:"data-table-sort",title:"DataTableSort",props:[{name:"key",type:"string",defaultValue:"—",description:"参与排序的列 key。"},{name:"order",type:"'asc' | 'desc'",defaultValue:"—",description:"排序方向；取消排序时整个对象为 null。"}],events:[],slots:[]}],notes:["DataTable 与 MTable 分工：MTable 只做语义化展示；需要排序、固定列、粘性表头或大数据边界时使用 DataTable。不要在 MTable 上追加这些 Props。",'固定列必须声明像素宽度（例如 120 或 "120px"），偏移量按同侧固定列累加；无法解析宽度时该列不会固定，并在开发环境给出 console.warn。',"排序是稳定的：数字按数值比较，其它值按中文 localeCompare 比较，空值始终位于末尾，与升降序无关。","传入 sort 后组件进入受控模式：必须监听 update:sort 并写回，否则点击表头不会改变排序结果。","100–200 行是当前阶段的性能边界，不做虚拟滚动。更大数据量应在业务层分页或等待后续阶段的数据组件。",'滚动容器在需要横向或纵向滚动时可获得焦点（role="region"），键盘用户可以滚动表格；caption 同时作为该区域的可访问名称。',"可排序列的表头按钮带有可访问名称与 aria-sort 状态；请始终提供 caption，让屏幕阅读器知道当前是哪张表。","DataTable 不提供行选择、树形数据、列显隐、列宽拖拽与导出，这些不属于 Phase 03 的范围。"]},r_={class:"demo-stack",style:{"max-width":"760px"}},d_=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",r_,[c(r(to),{columns:3},{default:f(()=>[c(r(Ne),{label:"姓名"},{default:f(()=>[...n[0]||(n[0]=[_("张伟",-1)])]),_:1}),c(r(Ne),{label:"部门"},{default:f(()=>[...n[1]||(n[1]=[_("产品设计",-1)])]),_:1}),c(r(Ne),{label:"职位"},{default:f(()=>[...n[2]||(n[2]=[_("高级产品设计师",-1)])]),_:1}),c(r(Ne),{label:"邮箱"},{default:f(()=>[...n[3]||(n[3]=[_("zhangwei@example.com",-1)])]),_:1}),c(r(Ne),{label:"电话"},{default:f(()=>[...n[4]||(n[4]=[_("138 0000 0000",-1)])]),_:1}),c(r(Ne),{label:"城市"},{default:f(()=>[...n[5]||(n[5]=[_("上海",-1)])]),_:1})]),_:1}),n[6]||(n[6]=g("p",{class:"demo-hint"}," 每个字段由 MDescriptionsItem 提供 label，值放在默认插槽中；默认三列布局会随容器宽度自适应。 ",-1))]))}}),c_=`<script setup lang="ts">
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions :columns="3">
      <MDescriptionsItem label="姓名">张伟</MDescriptionsItem>
      <MDescriptionsItem label="部门">产品设计</MDescriptionsItem>
      <MDescriptionsItem label="职位">高级产品设计师</MDescriptionsItem>
      <MDescriptionsItem label="邮箱">zhangwei@example.com</MDescriptionsItem>
      <MDescriptionsItem label="电话">138 0000 0000</MDescriptionsItem>
      <MDescriptionsItem label="城市">上海</MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      每个字段由 MDescriptionsItem 提供 label，值放在默认插槽中；默认三列布局会随容器宽度自适应。
    </p>
  </div>
</template>
`,u_=`<script setup>
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions :columns="3">
      <MDescriptionsItem label="姓名">张伟</MDescriptionsItem>
      <MDescriptionsItem label="部门">产品设计</MDescriptionsItem>
      <MDescriptionsItem label="职位">高级产品设计师</MDescriptionsItem>
      <MDescriptionsItem label="邮箱">zhangwei@example.com</MDescriptionsItem>
      <MDescriptionsItem label="电话">138 0000 0000</MDescriptionsItem>
      <MDescriptionsItem label="城市">上海</MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      每个字段由 MDescriptionsItem 提供 label，值放在默认插槽中；默认三列布局会随容器宽度自适应。
    </p>
  </div>
</template>
`,m_={class:"demo-stack",style:{"max-width":"760px"}},p_=C({__name:"Bordered",setup(e){return(t,n)=>(v(),y("div",m_,[c(r(to),{bordered:"",columns:2,"label-width":"96px"},{default:f(()=>[c(r(Ne),{label:"订单号"},{default:f(()=>[...n[0]||(n[0]=[_("AUI-2026-0184",-1)])]),_:1}),c(r(Ne),{label:"下单时间"},{default:f(()=>[...n[1]||(n[1]=[_("2026-03-18 10:24",-1)])]),_:1}),c(r(Ne),{label:"客户"},{default:f(()=>[...n[2]||(n[2]=[_("上海青柚科技有限公司",-1)])]),_:1}),c(r(Ne),{label:"联系人"},{default:f(()=>[...n[3]||(n[3]=[_("李娜",-1)])]),_:1}),c(r(Ne),{label:"交付地址"},{default:f(()=>[...n[4]||(n[4]=[_(" 上海市徐汇区漕溪北路 88 号 12 层 ",-1)])]),_:1}),c(r(Ne),{label:"备注"},{default:f(()=>[...n[5]||(n[5]=[_(" 工作日 9:00–18:00 送达，请提前电话联系。 ",-1)])]),_:1})]),_:1}),n[6]||(n[6]=g("p",{class:"demo-hint"}," bordered 使用单线网格：容器负责右边与下边，单元格负责左边与上边，因此相邻单元格不会出现双线。 ",-1))]))}}),f_=`<script setup lang="ts">
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions bordered :columns="2" label-width="96px">
      <MDescriptionsItem label="订单号">AUI-2026-0184</MDescriptionsItem>
      <MDescriptionsItem label="下单时间">2026-03-18 10:24</MDescriptionsItem>
      <MDescriptionsItem label="客户">上海青柚科技有限公司</MDescriptionsItem>
      <MDescriptionsItem label="联系人">李娜</MDescriptionsItem>
      <MDescriptionsItem label="交付地址"> 上海市徐汇区漕溪北路 88 号 12 层 </MDescriptionsItem>
      <MDescriptionsItem label="备注"> 工作日 9:00–18:00 送达，请提前电话联系。 </MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      bordered 使用单线网格：容器负责右边与下边，单元格负责左边与上边，因此相邻单元格不会出现双线。
    </p>
  </div>
</template>
`,v_=`<script setup>
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions bordered :columns="2" label-width="96px">
      <MDescriptionsItem label="订单号">AUI-2026-0184</MDescriptionsItem>
      <MDescriptionsItem label="下单时间">2026-03-18 10:24</MDescriptionsItem>
      <MDescriptionsItem label="客户">上海青柚科技有限公司</MDescriptionsItem>
      <MDescriptionsItem label="联系人">李娜</MDescriptionsItem>
      <MDescriptionsItem label="交付地址"> 上海市徐汇区漕溪北路 88 号 12 层 </MDescriptionsItem>
      <MDescriptionsItem label="备注"> 工作日 9:00–18:00 送达，请提前电话联系。 </MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      bordered 使用单线网格：容器负责右边与下边，单元格负责左边与上边，因此相邻单元格不会出现双线。
    </p>
  </div>
</template>
`,g_={class:"demo-stack",style:{"max-width":"760px"}},b_=C({__name:"Span",setup(e){return(t,n)=>(v(),y("div",g_,[c(r(to),{columns:3,"label-width":"120px"},{default:f(()=>[c(r(Ne),{label:"项目名称"},{default:f(()=>[...n[0]||(n[0]=[_("Anemia UI 文档站",-1)])]),_:1}),c(r(Ne),{label:"负责人"},{default:f(()=>[...n[1]||(n[1]=[_("陈晨",-1)])]),_:1}),c(r(Ne),{label:"阶段"},{default:f(()=>[...n[2]||(n[2]=[_("Phase 03",-1)])]),_:1}),c(r(Ne),{label:"范围",span:2},{default:f(()=>[...n[3]||(n[3]=[_(" 补全布局原语与结构化数据展示组件，并同步文档示例与 API 表格。 ",-1)])]),_:1}),c(r(Ne),{label:"状态"},{default:f(()=>[...n[4]||(n[4]=[_("进行中",-1)])]),_:1}),c(r(Ne),{label:"验收说明",span:3},{default:f(()=>[...n[5]||(n[5]=[_(" 所有组件通过 typecheck、lint、test 与构建；文档示例使用真实数据，不能只展示静态截图。 ",-1)])]),_:1})]),_:1}),n[6]||(n[6]=g("p",{class:"demo-hint"}," span 让某一项跨越多列，超出 columns 的值会被夹取；labelWidth 固定标签列宽度，让多行标签对齐。 ",-1))]))}}),y_=`<script setup lang="ts">
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions :columns="3" label-width="120px">
      <MDescriptionsItem label="项目名称">Anemia UI 文档站</MDescriptionsItem>
      <MDescriptionsItem label="负责人">陈晨</MDescriptionsItem>
      <MDescriptionsItem label="阶段">Phase 03</MDescriptionsItem>
      <MDescriptionsItem label="范围" :span="2">
        补全布局原语与结构化数据展示组件，并同步文档示例与 API 表格。
      </MDescriptionsItem>
      <MDescriptionsItem label="状态">进行中</MDescriptionsItem>
      <MDescriptionsItem label="验收说明" :span="3">
        所有组件通过 typecheck、lint、test 与构建；文档示例使用真实数据，不能只展示静态截图。
      </MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      span 让某一项跨越多列，超出 columns 的值会被夹取；labelWidth 固定标签列宽度，让多行标签对齐。
    </p>
  </div>
</template>
`,h_=`<script setup>
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions :columns="3" label-width="120px">
      <MDescriptionsItem label="项目名称">Anemia UI 文档站</MDescriptionsItem>
      <MDescriptionsItem label="负责人">陈晨</MDescriptionsItem>
      <MDescriptionsItem label="阶段">Phase 03</MDescriptionsItem>
      <MDescriptionsItem label="范围" :span="2">
        补全布局原语与结构化数据展示组件，并同步文档示例与 API 表格。
      </MDescriptionsItem>
      <MDescriptionsItem label="状态">进行中</MDescriptionsItem>
      <MDescriptionsItem label="验收说明" :span="3">
        所有组件通过 typecheck、lint、test 与构建；文档示例使用真实数据，不能只展示静态截图。
      </MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      span 让某一项跨越多列，超出 columns 的值会被夹取；labelWidth 固定标签列宽度，让多行标签对齐。
    </p>
  </div>
</template>
`,M_={class:"demo-stack",style:{"max-width":"760px"}},__=C({__name:"Vertical",setup(e){return(t,n)=>(v(),y("div",M_,[c(r(to),{layout:"vertical",columns:3},{default:f(()=>[c(r(Ne),{label:"运行环境"},{default:f(()=>[...n[0]||(n[0]=[_("Node.js 20.19",-1)])]),_:1}),c(r(Ne),{label:"包管理器"},{default:f(()=>[...n[1]||(n[1]=[_("npm 10",-1)])]),_:1}),c(r(Ne),{label:"构建工具"},{default:f(()=>[...n[2]||(n[2]=[_("Vite 6",-1)])]),_:1}),c(r(Ne),{label:"组件库版本"},{default:f(()=>[...n[3]||(n[3]=[_("0.6.0",-1)])]),_:1}),c(r(Ne),{label:"主题"},{default:f(()=>[...n[4]||(n[4]=[_("Light / Dark / System",-1)])]),_:1}),c(r(Ne),{label:"目标浏览器"},{default:f(()=>[...n[5]||(n[5]=[_("现代常青浏览器",-1)])]),_:1})]),_:1}),n[6]||(n[6]=g("p",{class:"demo-hint"}," vertical 将标签放在值上方，适合字段名较长或需要突出字段值的场景；窄屏下会自动降为单列。 ",-1))]))}}),k_=`<script setup lang="ts">
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions layout="vertical" :columns="3">
      <MDescriptionsItem label="运行环境">Node.js 20.19</MDescriptionsItem>
      <MDescriptionsItem label="包管理器">npm 10</MDescriptionsItem>
      <MDescriptionsItem label="构建工具">Vite 6</MDescriptionsItem>
      <MDescriptionsItem label="组件库版本">0.6.0</MDescriptionsItem>
      <MDescriptionsItem label="主题">Light / Dark / System</MDescriptionsItem>
      <MDescriptionsItem label="目标浏览器">现代常青浏览器</MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      vertical 将标签放在值上方，适合字段名较长或需要突出字段值的场景；窄屏下会自动降为单列。
    </p>
  </div>
</template>
`,w_=`<script setup>
import { MDescriptions, MDescriptionsItem } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 760px">
    <MDescriptions layout="vertical" :columns="3">
      <MDescriptionsItem label="运行环境">Node.js 20.19</MDescriptionsItem>
      <MDescriptionsItem label="包管理器">npm 10</MDescriptionsItem>
      <MDescriptionsItem label="构建工具">Vite 6</MDescriptionsItem>
      <MDescriptionsItem label="组件库版本">0.6.0</MDescriptionsItem>
      <MDescriptionsItem label="主题">Light / Dark / System</MDescriptionsItem>
      <MDescriptionsItem label="目标浏览器">现代常青浏览器</MDescriptionsItem>
    </MDescriptions>
    <p class="demo-hint">
      vertical 将标签放在值上方，适合字段名较长或需要突出字段值的场景；窄屏下会自动降为单列。
    </p>
  </div>
</template>
`,x_={name:"descriptions",category:"data",title:"Descriptions 描述列表",summary:"以语义化的 dl / dt / dd 结构展示字段与值的对应关系，支持多列、边框、跨列与垂直布局。",description:"Descriptions 用于呈现对象的属性集合，例如用户资料、订单详情或部署信息。它只负责把「标签 — 值」组织成可读的网格，不承担表单或表格职责：值通过默认插槽自由组合组件与文本，需要编辑能力时应在业务侧组合表单控件。",status:"stable",since:"0.6.0",keywords:["descriptions","描述列表","详情","字段","定义列表"],sections:[{id:"basic",title:"基础用法",description:"columns 控制列数，每个 MDescriptionsItem 提供 label，值放在默认插槽中；六个字段按三列自动排布。",demo:d_,code:c_,codeJs:u_},{id:"bordered",title:"带边框",description:"bordered 绘制单线网格：容器负责右边与下边，单元格负责左边与上边，相邻单元格不会出现双线。",demo:p_,code:f_,codeJs:v_},{id:"span",title:"跨列与标签宽度",description:"span 让字段跨越多列，超过 columns 时自动夹取；labelWidth 固定标签列宽度，使多行标签保持对齐。",demo:b_,code:y_,codeJs:h_},{id:"vertical",title:"垂直布局",description:'layout="vertical" 将标签放在值上方，适合字段名较长或需要突出字段值的场景；窄屏下统一降为单列。',demo:__,code:k_,codeJs:w_}],api:[{id:"descriptions-api",title:"MDescriptions",props:[{name:"columns",type:"number",defaultValue:"3",description:"网格列数；小于 1 的值按 1 处理。"},{name:"bordered",type:"boolean",defaultValue:"false",description:"绘制单线网格边框；标签单元格使用弱化背景。"},{name:"layout",type:"'horizontal' | 'vertical'",defaultValue:"'horizontal'",description:"标签与值同行（horizontal）或标签在上（vertical）。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"标签与值的字号、单元格内边距档位。"},{name:"labelWidth",type:"string",defaultValue:"—",description:'标签列固定宽度，接受任意 CSS 长度，如 "120px"。'}],events:[],slots:[{name:"default",type:"—",description:"MDescriptionsItem 列表，顺序决定网格中的位置。"}]},{id:"descriptions-item-api",title:"MDescriptionsItem",props:[{name:"label",type:"string",defaultValue:"—",description:"字段标签，必填，渲染为 dt。"},{name:"span",type:"number",defaultValue:"1",description:"跨列数；会夹取到父级 columns 范围内。"}],events:[],slots:[{name:"default",type:"—",description:"字段值，渲染为 dd；可包含文本或任意真实组件。"}]}],notes:["根节点使用原生 <dl>，每个条目由 <div> 包裹 <dt> 与 <dd>，辅助技术可以识别定义列表的语义。","窗口宽度不超过 640px 时降为单列；条目仍可设置 span，但不会导致页面横向溢出。","span 会被夹取到当前 columns 范围内：负值与 0 按 1 处理，小数向下取整，避免产生隐式网格列。","labelWidth 只影响水平布局的标签轨道；垂直布局中标签位于值上方，不需要固定宽度。","有边框模式的边框颜色来自 border Token，会随 Light / Dark 主题变化；不要再用额外包裹层叠加边框。","Descriptions 不提供 loading 或空状态。数据未就绪时请使用 MSkeleton，或由业务侧渲染 MEmpty。","值区域是默认插槽，不使用 value Prop；需要状态、链接或操作时直接放 MTag、MButton 等真实组件。"]},B_={class:"demo-stack",style:{"max-width":"560px"}},C_=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",B_,[n[1]||(n[1]=g("p",{class:"demo-hint"},"基础分割线用于分隔内容区块。",-1)),c(r(Xt)),n[2]||(n[2]=g("p",{class:"demo-hint"},"带文字的分割线可以表达分组语义。",-1)),c(r(Xt),null,{default:f(()=>[...n[0]||(n[0]=[_("或者",-1)])]),_:1}),n[3]||(n[3]=g("p",{class:"demo-hint"},"所有颜色都来自设计 Token，并自动适配双主题。",-1))]))}}),$_=`<script setup lang="ts">
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <p class="demo-hint">基础分割线用于分隔内容区块。</p>
    <MDivider />
    <p class="demo-hint">带文字的分割线可以表达分组语义。</p>
    <MDivider>或者</MDivider>
    <p class="demo-hint">所有颜色都来自设计 Token，并自动适配双主题。</p>
  </div>
</template>
`,T_=`<script setup>
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <p class="demo-hint">基础分割线用于分隔内容区块。</p>
    <MDivider />
    <p class="demo-hint">带文字的分割线可以表达分组语义。</p>
    <MDivider>或者</MDivider>
    <p class="demo-hint">所有颜色都来自设计 Token，并自动适配双主题。</p>
  </div>
</template>
`,I_={class:"demo-stack",style:{"max-width":"560px"}},V_=C({__name:"Positions",setup(e){return(t,n)=>(v(),y("div",I_,[c(r(Xt),{"content-position":"left"},{default:f(()=>[...n[0]||(n[0]=[_("左侧标题",-1)])]),_:1}),c(r(Xt),{"content-position":"center"},{default:f(()=>[...n[1]||(n[1]=[_("居中标题",-1)])]),_:1}),c(r(Xt),{"content-position":"right"},{default:f(()=>[...n[2]||(n[2]=[_("右侧标题",-1)])]),_:1})]))}}),S_=`<script setup lang="ts">
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MDivider content-position="left">左侧标题</MDivider>
    <MDivider content-position="center">居中标题</MDivider>
    <MDivider content-position="right">右侧标题</MDivider>
  </div>
</template>
`,z_=`<script setup>
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MDivider content-position="left">左侧标题</MDivider>
    <MDivider content-position="center">居中标题</MDivider>
    <MDivider content-position="right">右侧标题</MDivider>
  </div>
</template>
`,A_={class:"demo-row",style:{height:"32px"}},D_=C({__name:"Vertical",setup(e){return(t,n)=>(v(),y("div",A_,[n[0]||(n[0]=g("span",null,"设计",-1)),c(r(Xt),{direction:"vertical"}),n[1]||(n[1]=g("span",null,"开发",-1)),c(r(Xt),{direction:"vertical"}),n[2]||(n[2]=g("span",null,"文档",-1)),c(r(Xt),{direction:"vertical"}),n[3]||(n[3]=g("span",null,"测试",-1))]))}}),E_=`<script setup lang="ts">
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row" style="height: 32px">
    <span>设计</span>
    <MDivider direction="vertical" />
    <span>开发</span>
    <MDivider direction="vertical" />
    <span>文档</span>
    <MDivider direction="vertical" />
    <span>测试</span>
  </div>
</template>
`,R_=`<script setup>
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row" style="height: 32px">
    <span>设计</span>
    <MDivider direction="vertical" />
    <span>开发</span>
    <MDivider direction="vertical" />
    <span>文档</span>
    <MDivider direction="vertical" />
    <span>测试</span>
  </div>
</template>
`,P_={name:"divider",category:"display",title:"Divider 分割线",summary:"以一条克制的线分隔内容，支持水平、垂直与带文字三种形态。",description:"分割线用于建立内容分组。优先使用留白和排版建立层级，只有在语义上确实需要分隔时才使用 Divider；不要用它装饰每一个区块。",status:"stable",since:"0.1.0",keywords:["divider","分割线","分隔","布局"],sections:[{id:"basic",title:"基础用法",description:"默认水平分割线占据整行；默认插槽可提供分组标题。",demo:C_,code:$_,codeJs:T_},{id:"positions",title:"文字位置",description:"contentPosition 控制文字在左、中、右三种位置，适用于不同层级的分组标题。",demo:V_,code:S_,codeJs:z_},{id:"vertical",title:"垂直分割线",description:"在横向排列的元信息之间使用垂直分割线，高度跟随当前行高。",demo:D_,code:E_,codeJs:R_}],api:[{id:"divider-api",title:"MDivider",props:[{name:"direction",type:"'horizontal' | 'vertical'",defaultValue:"'horizontal'",description:"分割线方向。"},{name:"contentPosition",type:"'left' | 'center' | 'right'",defaultValue:"'center'",description:"水平分割线中文字的位置；垂直模式忽略。"}],events:[],slots:[{name:"default",type:"—",description:"水平分割线中的文字或内容。"}]}],notes:["垂直分割线使用 1em 高度，适合与一行文本对齐；复杂布局请使用 CSS 边框。","垂直模式不会渲染默认插槽内容。",'元素带有 role="separator" 与 aria-orientation，辅助技术可以识别分隔关系。',"分割线颜色来自 divider Token，会随主题变化。"]},L_={class:"demo-stack"},O_={class:"demo-row"},F_=C({__name:"Basic",setup(e){const t=z(!1);return(n,s)=>(v(),y("div",L_,[g("div",O_,[c(r(R),{onClick:s[0]||(s[0]=o=>t.value=!0)},{default:f(()=>[...s[4]||(s[4]=[_("打开抽屉",-1)])]),_:1})]),s[9]||(s[9]=g("p",{class:"demo-hint"},"按 Esc、点击关闭按钮或遮罩关闭；关闭后焦点回到触发按钮。",-1)),c(r(no),{modelValue:t.value,"onUpdate:modelValue":s[3]||(s[3]=o=>t.value=o),title:"项目设置"},{footer:f(()=>[c(r(R),{type:"ghost",onClick:s[1]||(s[1]=o=>t.value=!1)},{default:f(()=>[...s[5]||(s[5]=[_("取消",-1)])]),_:1}),c(r(R),{onClick:s[2]||(s[2]=o=>t.value=!1)},{default:f(()=>[...s[6]||(s[6]=[_("保存",-1)])]),_:1})]),default:f(()=>[s[7]||(s[7]=g("p",null,"抽屉用于承载与当前页面相关、但不需要打断整个流程的次级任务。",-1)),s[8]||(s[8]=g("p",null,"从右侧滑入，内容区独立滚动，页面滚动在打开期间被锁定。",-1))]),_:1},8,["modelValue"])]))}}),N_=`<script setup lang="ts">
import { MButton, MDrawer } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开抽屉</MButton>
    </div>
    <p class="demo-hint">按 Esc、点击关闭按钮或遮罩关闭；关闭后焦点回到触发按钮。</p>

    <MDrawer v-model="open" title="项目设置">
      <p>抽屉用于承载与当前页面相关、但不需要打断整个流程的次级任务。</p>
      <p>从右侧滑入，内容区独立滚动，页面滚动在打开期间被锁定。</p>
      <template #footer>
        <MButton type="ghost" @click="open = false">取消</MButton>
        <MButton @click="open = false">保存</MButton>
      </template>
    </MDrawer>
  </div>
</template>
`,J_=`<script setup>
import { MButton, MDrawer } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开抽屉</MButton>
    </div>
    <p class="demo-hint">按 Esc、点击关闭按钮或遮罩关闭；关闭后焦点回到触发按钮。</p>

    <MDrawer v-model="open" title="项目设置">
      <p>抽屉用于承载与当前页面相关、但不需要打断整个流程的次级任务。</p>
      <p>从右侧滑入，内容区独立滚动，页面滚动在打开期间被锁定。</p>
      <template #footer>
        <MButton type="ghost" @click="open = false">取消</MButton>
        <MButton @click="open = false">保存</MButton>
      </template>
    </MDrawer>
  </div>
</template>
`,G_={class:"demo-stack"},U_={class:"demo-row"},j_=C({__name:"Locked",setup(e){const t=z(!1);return(n,s)=>(v(),y("div",G_,[g("div",U_,[c(r(R),{onClick:s[0]||(s[0]=o=>t.value=!0)},{default:f(()=>[...s[3]||(s[3]=[_("打开不可关闭抽屉",-1)])]),_:1})]),c(r(no),{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=o=>t.value=o),title:"完成初始化",closable:!1,"mask-closable":!1,placement:"right"},{footer:f(()=>[c(r(R),{onClick:s[1]||(s[1]=o=>t.value=!1)},{default:f(()=>[...s[4]||(s[4]=[_("我已了解",-1)])]),_:1})]),default:f(()=>[s[5]||(s[5]=g("p",null,"closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。",-1)),s[6]||(s[6]=g("p",null,"这种抽屉必须由业务在页脚提供明确的退出路径。",-1))]),_:1},8,["modelValue"])]))}}),W_=`<script setup lang="ts">
import { MButton, MDrawer } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开不可关闭抽屉</MButton>
    </div>

    <MDrawer
      v-model="open"
      title="完成初始化"
      :closable="false"
      :mask-closable="false"
      placement="right"
    >
      <p>closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。</p>
      <p>这种抽屉必须由业务在页脚提供明确的退出路径。</p>
      <template #footer>
        <MButton @click="open = false">我已了解</MButton>
      </template>
    </MDrawer>
  </div>
</template>
`,H_=`<script setup>
import { MButton, MDrawer } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开不可关闭抽屉</MButton>
    </div>

    <MDrawer
      v-model="open"
      title="完成初始化"
      :closable="false"
      :mask-closable="false"
      placement="right"
    >
      <p>closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。</p>
      <p>这种抽屉必须由业务在页脚提供明确的退出路径。</p>
      <template #footer>
        <MButton @click="open = false">我已了解</MButton>
      </template>
    </MDrawer>
  </div>
</template>
`,q_={class:"demo-stack"},K_={class:"demo-row"},Q_=C({__name:"Placements",setup(e){const t=z(!1),n=z("right"),s=["left","right","top","bottom"];function o(a){n.value=a,t.value=!0}return(a,i)=>(v(),y("div",q_,[g("div",K_,[(v(),y(ie,null,xe(s,l=>c(r(R),{key:l,type:"outline",onClick:d=>o(l)},{default:f(()=>[_(L(l),1)]),_:2},1032,["onClick"])),64))]),c(r(no),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=l=>t.value=l),placement:n.value,title:`${n.value} 抽屉`},{default:f(()=>[...i[1]||(i[1]=[g("p",null,"placement 支持 left / right / top / bottom，动画方向与出现边缘保持一致。",-1)])]),_:1},8,["modelValue","placement","title"])]))}}),Y_=`<script setup lang="ts">
import { MButton, MDrawer, type DrawerPlacement } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
const placement = ref<DrawerPlacement>('right')
const placements: DrawerPlacement[] = ['left', 'right', 'top', 'bottom']

function show(value: DrawerPlacement): void {
  placement.value = value
  open.value = true
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton v-for="item in placements" :key="item" type="outline" @click="show(item)">
        {{ item }}
      </MButton>
    </div>

    <MDrawer v-model="open" :placement="placement" :title="\`\${placement} 抽屉\`">
      <p>placement 支持 left / right / top / bottom，动画方向与出现边缘保持一致。</p>
    </MDrawer>
  </div>
</template>
`,X_=`<script setup>
import { MButton, MDrawer } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
const placement = ref('right')
const placements = ['left', 'right', 'top', 'bottom']
function show(value) {
  placement.value = value
  open.value = true
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton v-for="item in placements" :key="item" type="outline" @click="show(item)">
        {{ item }}
      </MButton>
    </div>

    <MDrawer v-model="open" :placement="placement" :title="\`\${placement} 抽屉\`">
      <p>placement 支持 left / right / top / bottom，动画方向与出现边缘保持一致。</p>
    </MDrawer>
  </div>
</template>
`,Z_={class:"demo-stack"},ek={class:"demo-row"},tk=C({__name:"Sizes",setup(e){const t=z(!1),n=z("medium"),s=["small","medium","large"];function o(a){n.value=a,t.value=!0}return(a,i)=>(v(),y("div",Z_,[g("div",ek,[(v(),y(ie,null,xe(s,l=>c(r(R),{key:l,type:"outline",onClick:d=>o(l)},{default:f(()=>[_(L(l),1)]),_:2},1032,["onClick"])),64))]),c(r(no),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=l=>t.value=l),size:n.value,title:`${n.value} 抽屉`},{default:f(()=>[...i[1]||(i[1]=[g("p",null,"small / medium / large 控制面板宽度；上下方向按同一档位换算高度。",-1),g("p",null,"移动端会以 100vw 为上限，避免面板超出视口。",-1)])]),_:1},8,["modelValue","size","title"])]))}}),nk=`<script setup lang="ts">
import { MButton, MDrawer, type DrawerSize } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
const size = ref<DrawerSize>('medium')
const sizes: DrawerSize[] = ['small', 'medium', 'large']

function show(value: DrawerSize): void {
  size.value = value
  open.value = true
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton v-for="item in sizes" :key="item" type="outline" @click="show(item)">
        {{ item }}
      </MButton>
    </div>

    <MDrawer v-model="open" :size="size" :title="\`\${size} 抽屉\`">
      <p>small / medium / large 控制面板宽度；上下方向按同一档位换算高度。</p>
      <p>移动端会以 100vw 为上限，避免面板超出视口。</p>
    </MDrawer>
  </div>
</template>
`,sk=`<script setup>
import { MButton, MDrawer } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
const size = ref('medium')
const sizes = ['small', 'medium', 'large']
function show(value) {
  size.value = value
  open.value = true
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton v-for="item in sizes" :key="item" type="outline" @click="show(item)">
        {{ item }}
      </MButton>
    </div>

    <MDrawer v-model="open" :size="size" :title="\`\${size} 抽屉\`">
      <p>small / medium / large 控制面板宽度；上下方向按同一档位换算高度。</p>
      <p>移动端会以 100vw 为上限，避免面板超出视口。</p>
    </MDrawer>
  </div>
</template>
`,ok={name:"drawer",category:"overlay",title:"Drawer 抽屉",summary:"从视口边缘滑入的次级面板，复用统一的浮层层级、焦点与滚动管理。",description:"抽屉用于承载与当前页面相关、但不需要打断整个流程的次级任务。它和 Modal 共用 useOverlay：层级栈、Escape 归属、滚动锁定、焦点陷阱与归还都由同一套基础设施保证。",status:"stable",since:"0.3.0",keywords:["drawer","抽屉","侧边栏","浮层","overlay","面板"],sections:[{id:"basic",title:"基础用法",description:"默认从右侧滑入；v-model 控制显隐，页脚插槽放置主要操作。",demo:F_,code:N_,codeJs:J_},{id:"placements",title:"出现方向",description:"placement 支持 left / right / top / bottom，动画方向与出现边缘一致。",demo:Q_,code:Y_,codeJs:X_},{id:"sizes",title:"尺寸",description:"small / medium / large 控制面板宽度；上下方向按同一档位换算高度。",demo:tk,code:nk,codeJs:sk},{id:"locked",title:"受控关闭",description:"closable 控制关闭按钮与 Esc，maskClosable 控制遮罩；关闭时必须由业务提供明确退出路径。",demo:j_,code:W_,codeJs:H_}],api:[{id:"drawer-api",title:"MDrawer",props:[{name:"modelValue",type:"boolean",defaultValue:"false",description:"抽屉是否可见，用于 v-model。"},{name:"title",type:"string",defaultValue:"—",description:"标题文本；提供 header 插槽时不渲染。"},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",defaultValue:"'right'",description:"抽屉出现的方向。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"侧边宽度档位；上下方向换算为高度。"},{name:"closable",type:"boolean",defaultValue:"true",description:"显示关闭按钮，并允许 Esc 关闭。"},{name:"maskClosable",type:"boolean",defaultValue:"true",description:"允许按下遮罩关闭。"},{name:"lockScroll",type:"boolean",defaultValue:"true",description:"打开时锁定 body 滚动，关闭时恢复。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留抽屉并切换 display:none；unmount 销毁子树。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有 title 或使用自定义 header 时的无障碍名称。"},{name:"id",type:"string",defaultValue:"—",description:"抽屉面板 id。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求关闭时触发，用于 v-model。"},{name:"close",type:"(reason: 'close-button' | 'mask' | 'escape', nativeEvent?: Event) => void",description:"关闭请求的来源说明。"},{name:"opened",type:"() => void",description:"进入过渡结束后触发。"},{name:"closed",type:"() => void",description:"离开过渡结束后触发。"}],slots:[{name:"default",type:"—",description:"抽屉正文。"},{name:"header",type:"—",description:"自定义头部；提供时请同时提供 ariaLabel。"},{name:"footer",type:"—",description:"页脚操作区。"}]}],notes:["抽屉通过 Teleport 渲染到 body，不受父级 overflow 或 transform 裁剪。","与 Modal 共用 Overlay 基础设施：嵌套时只有最上层响应 Esc 与外部点击。","打开时焦点进入面板并限制 Tab 循环，关闭后归还焦点；body 滚动使用引用计数恢复。","closable 为 false 时必须自行提供关闭入口，否则键盘用户无法退出。","自定义 header 时默认标题不再渲染，请通过 ariaLabel 提供可访问名称。","抽屉适合次级任务；需要用户集中决策、且必须打断当前流程时优先使用 Modal。",'hide-mode="display" 适合需要保留表单输入或滚动位置的抽屉；默认 unmount 会销毁内部状态。']},ak={class:"demo-stack"},ik={class:"demo-hint"},lk=C({__name:"Basic",setup(e){const t=z("尚未选择"),n=[{key:"edit",label:"编辑",icon:"link"},{key:"copy",label:"复制",icon:"copy"},{key:"share",label:"分享",icon:"external-link"}];function s(o,a){t.value=`${a.label}（${o}）`}return(o,a)=>(v(),y("div",ak,[c(r(gs),{items:n,"aria-label":"更多操作",onSelect:s},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...a[0]||(a[0]=[_("更多操作",-1)])]),_:1})]),_:1}),g("p",ik,"最近选择："+L(t.value),1)]))}}),rk=`<script setup lang="ts">
import { MButton, MDropdown, type DropdownItem } from 'anemia-ui'
import { ref } from 'vue'

const last = ref('尚未选择')
const items: DropdownItem[] = [
  { key: 'edit', label: '编辑', icon: 'link' },
  { key: 'copy', label: '复制', icon: 'copy' },
  { key: 'share', label: '分享', icon: 'external-link' },
]

function handleSelect(key: string, item: DropdownItem): void {
  last.value = \`\${item.label}（\${key}）\`
}
<\/script>

<template>
  <div class="demo-stack">
    <MDropdown :items="items" aria-label="更多操作" @select="handleSelect">
      <MButton size="small">更多操作</MButton>
    </MDropdown>
    <p class="demo-hint">最近选择：{{ last }}</p>
  </div>
</template>
`,dk=`<script setup>
import { MButton, MDropdown } from 'anemia-ui'
import { ref } from 'vue'
const last = ref('尚未选择')
const items = [
  { key: 'edit', label: '编辑', icon: 'link' },
  { key: 'copy', label: '复制', icon: 'copy' },
  { key: 'share', label: '分享', icon: 'external-link' },
]
function handleSelect(key, item) {
  last.value = \`\${item.label}（\${key}）\`
}
<\/script>

<template>
  <div class="demo-stack">
    <MDropdown :items="items" aria-label="更多操作" @select="handleSelect">
      <MButton size="small">更多操作</MButton>
    </MDropdown>
    <p class="demo-hint">最近选择：{{ last }}</p>
  </div>
</template>
`,ck={class:"demo-stack"},uk={class:"demo-hint"},mk=C({__name:"Controlled",setup(e){const t=z(!1),n=z("尚未选择"),s=[{key:"edit",label:"编辑"},{key:"copy",label:"复制"}];function o(a,i){n.value=`${i.label}（${a}）`}return(a,i)=>(v(),y("div",ck,[c(r(gs),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=l=>t.value=l),trigger:"manual",items:s,"aria-label":"受控菜单",onSelect:o},{default:f(()=>[c(r(R),{type:"outline",size:"small"},{default:f(()=>[...i[2]||(i[2]=[_("菜单触发器",-1)])]),_:1})]),_:1},8,["modelValue"]),c(r(R),{size:"small",onClick:i[1]||(i[1]=l=>t.value=!t.value)},{default:f(()=>[_(L(t.value?"关闭菜单":"打开菜单"),1)]),_:1}),g("p",uk,"最近选择："+L(n.value)+'。trigger="manual" 时触发器点击不会自动开关。',1)]))}}),pk=`<script setup lang="ts">
import { MButton, MDropdown, type DropdownItem } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
const last = ref('尚未选择')
const items: DropdownItem[] = [
  { key: 'edit', label: '编辑' },
  { key: 'copy', label: '复制' },
]

function handleSelect(key: string, item: DropdownItem): void {
  last.value = \`\${item.label}（\${key}）\`
}
<\/script>

<template>
  <div class="demo-stack">
    <MDropdown
      v-model="open"
      trigger="manual"
      :items="items"
      aria-label="受控菜单"
      @select="handleSelect"
    >
      <MButton type="outline" size="small">菜单触发器</MButton>
    </MDropdown>

    <MButton size="small" @click="open = !open">
      {{ open ? '关闭菜单' : '打开菜单' }}
    </MButton>

    <p class="demo-hint">最近选择：{{ last }}。trigger="manual" 时触发器点击不会自动开关。</p>
  </div>
</template>
`,fk=`<script setup>
import { MButton, MDropdown } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
const last = ref('尚未选择')
const items = [
  { key: 'edit', label: '编辑' },
  { key: 'copy', label: '复制' },
]
function handleSelect(key, item) {
  last.value = \`\${item.label}（\${key}）\`
}
<\/script>

<template>
  <div class="demo-stack">
    <MDropdown
      v-model="open"
      trigger="manual"
      :items="items"
      aria-label="受控菜单"
      @select="handleSelect"
    >
      <MButton type="outline" size="small">菜单触发器</MButton>
    </MDropdown>

    <MButton size="small" @click="open = !open">
      {{ open ? '关闭菜单' : '打开菜单' }}
    </MButton>

    <p class="demo-hint">最近选择：{{ last }}。trigger="manual" 时触发器点击不会自动开关。</p>
  </div>
</template>
`,vk={class:"demo-stack"},gk={class:"custom-item"},bk={class:"custom-item__body"},yk={class:"custom-item__label"},hk={class:"custom-item__hint"},Mk={class:"demo-hint"},_k=C({__name:"CustomItems",setup(e){const t=z("尚未选择"),n={edit:"修改当前记录",copy:"复制到剪贴板",share:"发送给协作者"},s=[{key:"edit",label:"编辑",icon:"link"},{key:"copy",label:"复制",icon:"copy"},{key:"share",label:"分享",icon:"external-link"}];function o(i){return n[i]??""}function a(i,l){t.value=`${l.label}（${i}）`}return(i,l)=>(v(),y("div",vk,[c(r(gs),{items:s,"aria-label":"更多操作",onSelect:a},{item:f(({item:d})=>[g("span",gk,[c(r(Et),{name:d.icon??"link"},null,8,["name"]),g("span",bk,[g("span",yk,L(d.label),1),g("span",hk,L(o(d.key)),1)])])]),default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...l[0]||(l[0]=[_("更多操作",-1)])]),_:1})]),_:1}),g("p",Mk,"最近选择："+L(t.value),1)]))}}),kk=ce(_k,[["__scopeId","data-v-e92440b1"]]),wk=`<script setup lang="ts">
import { MButton, MDropdown, MIcon, type DropdownItem } from 'anemia-ui'
import { ref } from 'vue'

const last = ref('尚未选择')
const hints: Record<string, string> = {
  edit: '修改当前记录',
  copy: '复制到剪贴板',
  share: '发送给协作者',
}
const items: DropdownItem[] = [
  { key: 'edit', label: '编辑', icon: 'link' },
  { key: 'copy', label: '复制', icon: 'copy' },
  { key: 'share', label: '分享', icon: 'external-link' },
]

function hintFor(key: string): string {
  return hints[key] ?? ''
}

function handleSelect(key: string, item: DropdownItem): void {
  last.value = \`\${item.label}（\${key}）\`
}
<\/script>

<template>
  <div class="demo-stack">
    <MDropdown :items="items" aria-label="更多操作" @select="handleSelect">
      <MButton size="small">更多操作</MButton>

      <template #item="{ item }">
        <span class="custom-item">
          <MIcon :name="item.icon ?? 'link'" />
          <span class="custom-item__body">
            <span class="custom-item__label">{{ item.label }}</span>
            <span class="custom-item__hint">{{ hintFor(item.key) }}</span>
          </span>
        </span>
      </template>
    </MDropdown>

    <p class="demo-hint">最近选择：{{ last }}</p>
  </div>
</template>

<style scoped>
.custom-item {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  width: 100%;
  text-align: left;
}

.custom-item__body {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.custom-item__label {
  font-weight: 500;
}

.custom-item__hint {
  overflow: hidden;
  color: var(--m-color-text-tertiary);
  font-size: var(--m-font-size-xs);
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
`,xk=`<script setup>
import { MButton, MDropdown, MIcon } from 'anemia-ui'
import { ref } from 'vue'
const last = ref('尚未选择')
const hints = {
  edit: '修改当前记录',
  copy: '复制到剪贴板',
  share: '发送给协作者',
}
const items = [
  { key: 'edit', label: '编辑', icon: 'link' },
  { key: 'copy', label: '复制', icon: 'copy' },
  { key: 'share', label: '分享', icon: 'external-link' },
]
function hintFor(key) {
  return hints[key] ?? ''
}
function handleSelect(key, item) {
  last.value = \`\${item.label}（\${key}）\`
}
<\/script>

<template>
  <div class="demo-stack">
    <MDropdown :items="items" aria-label="更多操作" @select="handleSelect">
      <MButton size="small">更多操作</MButton>

      <template #item="{ item }">
        <span class="custom-item">
          <MIcon :name="item.icon ?? 'link'" />
          <span class="custom-item__body">
            <span class="custom-item__label">{{ item.label }}</span>
            <span class="custom-item__hint">{{ hintFor(item.key) }}</span>
          </span>
        </span>
      </template>
    </MDropdown>

    <p class="demo-hint">最近选择：{{ last }}</p>
  </div>
</template>

<style scoped>
.custom-item {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  width: 100%;
  text-align: left;
}

.custom-item__body {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.custom-item__label {
  font-weight: 500;
}

.custom-item__hint {
  overflow: hidden;
  color: var(--m-color-text-tertiary);
  font-size: var(--m-font-size-xs);
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
`,Bk=C({__name:"Divided",setup(e){const t=[{key:"archive",label:"归档",icon:"check"},{key:"move",label:"移动",icon:"arrow-right",divided:!0},{key:"delete",label:"删除",icon:"close",danger:!0,divided:!0}];return(n,s)=>(v(),we(r(gs),{items:t,"aria-label":"记录操作"},{default:f(()=>[c(r(R),{size:"small",type:"outline"},{default:f(()=>[...s[0]||(s[0]=[_("记录操作",-1)])]),_:1})]),_:1}))}}),Ck=`<script setup lang="ts">
import { MButton, MDropdown, type DropdownItem } from 'anemia-ui'

const items: DropdownItem[] = [
  { key: 'archive', label: '归档', icon: 'check' },
  { key: 'move', label: '移动', icon: 'arrow-right', divided: true },
  { key: 'delete', label: '删除', icon: 'close', danger: true, divided: true },
]
<\/script>

<template>
  <MDropdown :items="items" aria-label="记录操作">
    <MButton size="small" type="outline">记录操作</MButton>
  </MDropdown>
</template>
`,$k=`<script setup>
import { MButton, MDropdown } from 'anemia-ui'
const items = [
  { key: 'archive', label: '归档', icon: 'check' },
  { key: 'move', label: '移动', icon: 'arrow-right', divided: true },
  { key: 'delete', label: '删除', icon: 'close', danger: true, divided: true },
]
<\/script>

<template>
  <MDropdown :items="items" aria-label="记录操作">
    <MButton size="small" type="outline">记录操作</MButton>
  </MDropdown>
</template>
`,Tk=C({__name:"Placement",setup(e){const t=[{key:"top-1",label:"置顶"},{key:"top-2",label:"标为已读"}];return(n,s)=>(v(),we(r(gs),{items:t,placement:"top","aria-label":"向上展开"},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...s[0]||(s[0]=[_("向上展开",-1)])]),_:1})]),_:1}))}}),Ik=`<script setup lang="ts">
import { MButton, MDropdown, type DropdownItem } from 'anemia-ui'

const items: DropdownItem[] = [
  { key: 'top-1', label: '置顶' },
  { key: 'top-2', label: '标为已读' },
]
<\/script>

<template>
  <MDropdown :items="items" placement="top" aria-label="向上展开">
    <MButton size="small">向上展开</MButton>
  </MDropdown>
</template>
`,Vk=`<script setup>
import { MButton, MDropdown } from 'anemia-ui'
const items = [
  { key: 'top-1', label: '置顶' },
  { key: 'top-2', label: '标为已读' },
]
<\/script>

<template>
  <MDropdown :items="items" placement="top" aria-label="向上展开">
    <MButton size="small">向上展开</MButton>
  </MDropdown>
</template>
`,Sk={name:"dropdown",category:"overlay",title:"Dropdown 下拉菜单",summary:"由触发器展开的操作菜单，支持键盘导航、自定义菜单项、受控模式与焦点归还。",description:"Dropdown 是菜单按钮模式：展开后焦点进入第一个可用菜单项，方向键、Home / End 在菜单内移动，Enter / Space 触发原生按钮行为。菜单关闭后焦点回到触发器，Tab 会直接关闭菜单而不是进入页面末尾。菜单项内容可以通过 item 插槽完全自定义。",status:"stable",since:"0.4.0",keywords:["dropdown","菜单","操作","menu","下拉"],sections:[{id:"basic",title:"基础用法",description:"items 描述菜单项，select 事件返回 key 与完整菜单项。",demo:lk,code:rk,codeJs:dk},{id:"custom-items",title:"自定义菜单项",description:"item 插槽替换菜单项内部内容，外层 button、焦点与键盘行为保持不变。",demo:kk,code:wk,codeJs:xk},{id:"controlled",title:"受控菜单",description:'trigger="manual" 关闭自动开关；v-model 让外部状态成为唯一事实来源。',demo:mk,code:pk,codeJs:fk},{id:"divided",title:"分隔线与危险项",description:"divided 在菜单项上方加分隔线，danger 使用危险色表达破坏性操作。",demo:Bk,code:Ck,codeJs:$k},{id:"placement",title:"向上展开",description:'placement="top" 适用于靠近视口底部的触发器；align 控制水平对齐。',demo:Tk,code:Ik,codeJs:Vk}],api:[{id:"dropdown-api",title:"MDropdown",props:[{name:"items",type:"DropdownItem[]",defaultValue:"[]",description:"菜单项，每项包含 key / label / icon / disabled / danger / divided。"},{name:"modelValue",type:"boolean",defaultValue:"—",description:"受控开关；配合 v-model 使用。"},{name:"trigger",type:"'click' | 'manual'",defaultValue:"'click'",description:"触发方式；manual 禁用触发器点击。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留菜单并切换 display:none；unmount 销毁菜单。"},{name:"align",type:"'start' | 'center' | 'end'",defaultValue:"'start'",description:"菜单相对触发器的水平对齐方式。"},{name:"placement",type:"'top' | 'bottom'",defaultValue:"'bottom'",description:"菜单出现方向。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个菜单。"},{name:"minWidth",type:"number",defaultValue:"200",description:"菜单最小宽度（px）。"},{name:"closeOnSelect",type:"boolean",defaultValue:"true",description:"选择菜单项后是否自动关闭。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"菜单的无障碍名称。"}],events:[{name:"select",type:"(key: string, item: DropdownItem) => void",description:"选择可用菜单项时触发。"},{name:"update:modelValue",type:"(open: boolean) => void",description:"请求切换菜单；受控时由父级写回 modelValue 后才会真正打开或关闭。"},{name:"visible-change",type:"(open: boolean) => void",description:"菜单实际打开或关闭后触发；受控父级拒绝更新时不会触发。"}],slots:[{name:"default",type:"—",description:"触发器内容。"},{name:"item",type:"{ item: DropdownItem; index: number }",description:"自定义每个菜单项内部内容；外层按钮与键盘行为保留。"},{name:"empty",type:"—",description:"items 为空时的内容。"}]}],notes:["菜单项使用原生 button，Enter / Space 的激活行为由浏览器保证；item 插槽只替换内容，不改变外层语义。","展开后焦点进入第一个可用项；方向键循环移动，Home / End 跳到首尾。","Tab 会关闭菜单并把焦点还给触发器，避免焦点进入 body 末尾的 Teleport 容器。","禁用的菜单项不可聚焦、不可选择；divided 只影响视觉分隔。","菜单默认与触发器起始边对齐；触发器容器很宽时不会再按整块容器居中。","触发器离开视口后菜单会自动收起，不会停留在屏幕边缘。",'trigger="manual" 适合由选中项、路由或外部按钮控制的场景；不响应外部点击，仍可用 Escape、v-model 或实例的 open / close / toggle。',"受控模式下 update:modelValue 只表达请求；visible-change 反映父级接受后的真实菜单状态。",'hide-mode="display" 会保留菜单 DOM 与内部状态；默认 unmount 更节省 DOM。',"当前不支持子菜单、多级菜单与复选菜单。"]},zk={class:"demo-stack",style:{"max-width":"460px"}},Ak=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",zk,[c(r(us)),c(r(us),{title:"没有匹配的组件",description:"尝试调整筛选条件，或换一个关键词重新搜索。"})]))}}),Dk=`<script setup lang="ts">
import { MEmpty } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MEmpty />
    <MEmpty title="没有匹配的组件" description="尝试调整筛选条件，或换一个关键词重新搜索。" />
  </div>
</template>
`,Ek=`<script setup>
import { MEmpty } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MEmpty />
    <MEmpty title="没有匹配的组件" description="尝试调整筛选条件，或换一个关键词重新搜索。" />
  </div>
</template>
`,Rk={class:"demo-stack",style:{"max-width":"460px"}},Pk={class:"demo-hint"},Lk=C({__name:"Action",setup(e){const t=z(0);function n(){t.value+=1}return(s,o)=>(v(),y("div",Rk,[c(r(us),{icon:"error",title:"加载失败",description:"网络连接中断，请检查网络后重试。"},{action:f(()=>[c(r(R),{size:"small",type:"outline",onClick:n},{default:f(()=>[...o[0]||(o[0]=[_("重试",-1)])]),_:1})]),_:1}),g("p",Pk,"已重试 "+L(t.value)+" 次。",1)]))}}),Ok=`<script setup lang="ts">
import { MButton, MEmpty } from 'anemia-ui'
import { ref } from 'vue'

const retries = ref(0)

function retry(): void {
  retries.value += 1
}
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MEmpty icon="error" title="加载失败" description="网络连接中断，请检查网络后重试。">
      <template #action>
        <MButton size="small" type="outline" @click="retry">重试</MButton>
      </template>
    </MEmpty>
    <p class="demo-hint">已重试 {{ retries }} 次。</p>
  </div>
</template>
`,Fk=`<script setup>
import { MButton, MEmpty } from 'anemia-ui'
import { ref } from 'vue'
const retries = ref(0)
function retry() {
  retries.value += 1
}
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MEmpty icon="error" title="加载失败" description="网络连接中断，请检查网络后重试。">
      <template #action>
        <MButton size="small" type="outline" @click="retry">重试</MButton>
      </template>
    </MEmpty>
    <p class="demo-hint">已重试 {{ retries }} 次。</p>
  </div>
</template>
`,Nk=C({__name:"Compact",setup(e){return(t,n)=>(v(),we(r(pt),{style:{"max-width":"460px"}},{header:f(()=>[...n[0]||(n[0]=[g("p",{class:"compact-title"},"最近活动",-1)])]),default:f(()=>[c(r(us),{compact:"",title:"暂无活动记录",description:"成员完成操作后，记录会显示在这里。"})]),_:1}))}}),Jk=ce(Nk,[["__scopeId","data-v-e88fe883"]]),Gk=`<script setup lang="ts">
import { MCard, MEmpty } from 'anemia-ui'
<\/script>

<template>
  <MCard style="max-width: 460px">
    <template #header>
      <p class="compact-title">最近活动</p>
    </template>
    <MEmpty compact title="暂无活动记录" description="成员完成操作后，记录会显示在这里。" />
  </MCard>
</template>

<style scoped>
.compact-title {
  margin: 0;
  color: var(--m-color-text-primary);
  font-size: 15px;
  font-weight: 600;
}
</style>
`,Uk=`<script setup>
import { MCard, MEmpty } from 'anemia-ui'
<\/script>

<template>
  <MCard style="max-width: 460px">
    <template #header>
      <p class="compact-title">最近活动</p>
    </template>
    <MEmpty compact title="暂无活动记录" description="成员完成操作后，记录会显示在这里。" />
  </MCard>
</template>

<style scoped>
.compact-title {
  margin: 0;
  color: var(--m-color-text-primary);
  font-size: 15px;
  font-weight: 600;
}
</style>
`,jk={name:"empty",category:"feedback",title:"Empty 空状态",summary:"用统一图标、标题与描述表达「暂无数据」，并为加载失败提供恢复入口。",description:'空状态是界面必须认真设计的一种状态：它告诉用户为什么这里是空的，以及接下来可以做什么。MEmpty 统一了图标、标题、描述与操作区的位置；错误状态通过 icon="error" 与 #action 插槽表达重试，而不是另造一套组件。',status:"stable",since:"0.6.0",keywords:["empty","空状态","暂无数据","空结果","错误","反馈"],sections:[{id:"basic",title:"基础用法",description:"默认展示「暂无数据」与 inbox 图标；title 与 description 用于说明具体场景。",demo:Ak,code:Dk,codeJs:Ek},{id:"action",title:"加载失败与重试",description:'错误状态使用 icon="error"，并通过 #action 插槽提供重试按钮；只展示错误而不给出恢复路径是不可用的状态。',demo:Lk,code:Ok,codeJs:Fk},{id:"compact",title:"紧凑用法",description:"compact 收紧内边距与图标尺寸，适合放进 Card、表格单元格或弹层内部。",demo:Jk,code:Gk,codeJs:Uk}],api:[{id:"empty-api",title:"MEmpty",props:[{name:"title",type:"string",defaultValue:"'暂无数据'",description:"主标题，说明当前没有什么。"},{name:"description",type:"string",defaultValue:"—",description:"补充说明，例如空状态的原因或下一步操作。"},{name:"icon",type:"IconName",defaultValue:"'inbox'",description:"图标名称，来自统一 MIcon 注册表。"},{name:"compact",type:"boolean",defaultValue:"false",description:"收紧内边距与图标尺寸，用于 Card 或表格内部。"}],events:[],slots:[{name:"icon",type:"—",description:"替换默认图标；容器已设置 aria-hidden。"},{name:"default",type:"—",description:"description 下方的额外说明内容。"},{name:"action",type:"—",description:"操作区，例如重试或创建按钮。"}]}],notes:['根节点使用 role="status"，状态出现或更新时辅助技术可以感知；图标本身是装饰，已设置 aria-hidden="true"。','空结果使用 MEmpty；加载失败使用 MEmpty + icon="error" + #action 提供重试。不要只显示错误图标而不给恢复路径。',"标题需要说明「没有什么」，描述补充原因或下一步；避免所有页面都只写「暂无数据」。","compact 适合 Card、表格单元格、弹层等紧凑区域；MList 与 MDataTable 的内置空状态已经采用紧凑形态。","组件不内置按钮，避免与业务操作耦合；所有操作通过 #action 插槽传入，按钮文案应明确（例如「重试」「新建项目」）。","表单字段的校验错误属于字段级反馈，应使用 Form 的错误提示，而不是 MEmpty。"]},Wk={class:"demo-stack"},Hk={class:"demo-row"},qk={class:"demo-hint"},Kk=C({__name:"Basic",setup(e){const t=zn({name:"",email:""}),n={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{pattern:/^[^@\s]+@[^@\s]+\.[^@\s]+$/,message:"邮箱格式不正确",trigger:"blur"}]},s=z(null),o=z("");function a(i){o.value=i?"校验通过，可以提交。":"请先修正表单中的错误。"}return(i,l)=>(v(),y("div",Wk,[c(r(js),{ref_key:"formRef",ref:s,model:t,rules:n,"aria-label":"账户信息",onSubmit:a},{default:f(()=>[c(r(cn),{prop:"name",label:"姓名",for:"form-name"},{default:f(()=>[c(r(je),{id:"form-name",modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=d=>t.name=d),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),c(r(cn),{prop:"email",label:"邮箱",for:"form-email",hint:"用于接收通知"},{default:f(()=>[c(r(je),{id:"form-email",modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=d=>t.email=d),placeholder:"name@example.com"},null,8,["modelValue"])]),_:1}),g("div",Hk,[c(r(R),{type:"primary","native-type":"submit"},{default:f(()=>[...l[3]||(l[3]=[_("提交",-1)])]),_:1}),c(r(R),{type:"ghost",onClick:l[2]||(l[2]=d=>s.value?.resetFields())},{default:f(()=>[...l[4]||(l[4]=[_("重置",-1)])]),_:1})])]),_:1},8,["model"]),g("p",qk,L(o.value),1)]))}}),Qk=`<script setup lang="ts">
import { MButton, MForm, MFormItem, MInput, type FormExpose, type FormRules } from 'anemia-ui'
import { reactive, ref } from 'vue'

const model = reactive({ name: '', email: '' })
const rules: FormRules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { pattern: /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/, message: '邮箱格式不正确', trigger: 'blur' },
  ],
}
const formRef = ref<FormExpose | null>(null)
const result = ref('')

function handleSubmit(valid: boolean): void {
  result.value = valid ? '校验通过，可以提交。' : '请先修正表单中的错误。'
}
<\/script>

<template>
  <div class="demo-stack">
    <MForm ref="formRef" :model="model" :rules="rules" aria-label="账户信息" @submit="handleSubmit">
      <MFormItem prop="name" label="姓名" for="form-name">
        <MInput id="form-name" v-model="model.name" placeholder="请输入姓名" />
      </MFormItem>

      <MFormItem prop="email" label="邮箱" for="form-email" hint="用于接收通知">
        <MInput id="form-email" v-model="model.email" placeholder="name@example.com" />
      </MFormItem>

      <div class="demo-row">
        <MButton type="primary" native-type="submit">提交</MButton>
        <MButton type="ghost" @click="formRef?.resetFields()">重置</MButton>
      </div>
    </MForm>

    <p class="demo-hint">{{ result }}</p>
  </div>
</template>
`,Yk=`<script setup>
import { MButton, MForm, MFormItem, MInput } from 'anemia-ui'
import { reactive, ref } from 'vue'
const model = reactive({ name: '', email: '' })
const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { pattern: /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/, message: '邮箱格式不正确', trigger: 'blur' },
  ],
}
const formRef = ref(null)
const result = ref('')
function handleSubmit(valid) {
  result.value = valid ? '校验通过，可以提交。' : '请先修正表单中的错误。'
}
<\/script>

<template>
  <div class="demo-stack">
    <MForm ref="formRef" :model="model" :rules="rules" aria-label="账户信息" @submit="handleSubmit">
      <MFormItem prop="name" label="姓名" for="form-name">
        <MInput id="form-name" v-model="model.name" placeholder="请输入姓名" />
      </MFormItem>

      <MFormItem prop="email" label="邮箱" for="form-email" hint="用于接收通知">
        <MInput id="form-email" v-model="model.email" placeholder="name@example.com" />
      </MFormItem>

      <div class="demo-row">
        <MButton type="primary" native-type="submit">提交</MButton>
        <MButton type="ghost" @click="formRef?.resetFields()">重置</MButton>
      </div>
    </MForm>

    <p class="demo-hint">{{ result }}</p>
  </div>
</template>
`,Xk={class:"demo-stack"},Zk=C({__name:"Layout",setup(e){const t=zn({company:"",contact:""});return(n,s)=>(v(),y("div",Xk,[c(r(js),{model:t,"label-position":"left","label-width":"88px","aria-label":"右侧标签表单"},{default:f(()=>[c(r(cn),{prop:"company",label:"公司",for:"form-company"},{default:f(()=>[c(r(je),{id:"form-company",modelValue:t.company,"onUpdate:modelValue":s[0]||(s[0]=o=>t.company=o),placeholder:"公司名称"},null,8,["modelValue"])]),_:1}),c(r(cn),{prop:"contact",label:"联系人",for:"form-contact",hint:"用于紧急联系"},{default:f(()=>[c(r(je),{id:"form-contact",modelValue:t.contact,"onUpdate:modelValue":s[1]||(s[1]=o=>t.contact=o),placeholder:"联系人姓名"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),c(r(js),{model:t,"label-position":"top",disabled:"","aria-label":"禁用表单"},{default:f(()=>[c(r(cn),{label:"公司"},{default:f(()=>[c(r(je),{"model-value":t.company,placeholder:"整张表单被禁用"},null,8,["model-value"])]),_:1}),c(r(cn),{label:"联系人"},{default:f(()=>[c(r(R),{disabled:""},{default:f(()=>[...s[2]||(s[2]=[_("不可点击",-1)])]),_:1})]),_:1})]),_:1},8,["model"])]))}}),ew=`<script setup lang="ts">
import { MButton, MForm, MFormItem, MInput } from 'anemia-ui'
import { reactive } from 'vue'

const model = reactive({ company: '', contact: '' })
<\/script>

<template>
  <div class="demo-stack">
    <MForm :model="model" label-position="left" label-width="88px" aria-label="右侧标签表单">
      <MFormItem prop="company" label="公司" for="form-company">
        <MInput id="form-company" v-model="model.company" placeholder="公司名称" />
      </MFormItem>
      <MFormItem prop="contact" label="联系人" for="form-contact" hint="用于紧急联系">
        <MInput id="form-contact" v-model="model.contact" placeholder="联系人姓名" />
      </MFormItem>
    </MForm>

    <MForm :model="model" label-position="top" disabled aria-label="禁用表单">
      <MFormItem label="公司">
        <MInput :model-value="model.company" placeholder="整张表单被禁用" />
      </MFormItem>
      <MFormItem label="联系人">
        <MButton disabled>不可点击</MButton>
      </MFormItem>
    </MForm>
  </div>
</template>
`,tw=`<script setup>
import { MButton, MForm, MFormItem, MInput } from 'anemia-ui'
import { reactive } from 'vue'
const model = reactive({ company: '', contact: '' })
<\/script>

<template>
  <div class="demo-stack">
    <MForm :model="model" label-position="left" label-width="88px" aria-label="右侧标签表单">
      <MFormItem prop="company" label="公司" for="form-company">
        <MInput id="form-company" v-model="model.company" placeholder="公司名称" />
      </MFormItem>
      <MFormItem prop="contact" label="联系人" for="form-contact" hint="用于紧急联系">
        <MInput id="form-contact" v-model="model.contact" placeholder="联系人姓名" />
      </MFormItem>
    </MForm>

    <MForm :model="model" label-position="top" disabled aria-label="禁用表单">
      <MFormItem label="公司">
        <MInput :model-value="model.company" placeholder="整张表单被禁用" />
      </MFormItem>
      <MFormItem label="联系人">
        <MButton disabled>不可点击</MButton>
      </MFormItem>
    </MForm>
  </div>
</template>
`,nw={class:"demo-stack"},sw={class:"demo-hint"},ow=C({__name:"Validation",setup(e){const t=zn({username:"",age:null}),n={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:12,message:"用户名需要 3–12 个字符",trigger:"blur"}],age:[{validator:i=>typeof i=="number"&&i>=18?!0:"必须年满 18 岁",trigger:["blur","change"]}]},s=z(null),o=z("");async function a(){const i=await s.value?.validate();o.value=i?"全部字段校验通过。":"仍有字段未通过校验。"}return(i,l)=>(v(),y("div",nw,[c(r(js),{ref_key:"formRef",ref:s,model:t,rules:n,"aria-label":"注册信息"},{default:f(()=>[c(r(cn),{prop:"username",label:"用户名",for:"form-username"},{default:f(()=>[c(r(je),{id:"form-username",modelValue:t.username,"onUpdate:modelValue":l[0]||(l[0]=d=>t.username=d),placeholder:"3–12 个字符"},null,8,["modelValue"])]),_:1}),c(r(cn),{prop:"age",label:"年龄",for:"form-age"},{default:f(()=>[c(r(qn),{id:"form-age",modelValue:t.age,"onUpdate:modelValue":l[1]||(l[1]=d=>t.age=d),min:0,"aria-label":"年龄"},null,8,["modelValue"])]),_:1}),c(r(R),{type:"primary",onClick:a},{default:f(()=>[...l[2]||(l[2]=[_("校验表单",-1)])]),_:1})]),_:1},8,["model"]),g("p",sw,L(o.value),1)]))}}),aw=`<script setup lang="ts">
import {
  MButton,
  MForm,
  MFormItem,
  MInput,
  MNumberInput,
  type FormExpose,
  type FormRules,
} from 'anemia-ui'
import { reactive, ref } from 'vue'

const model = reactive<{ username: string; age: number | null }>({ username: '', age: null })
const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '用户名需要 3–12 个字符', trigger: 'blur' },
  ],
  age: [
    {
      validator: (value) => (typeof value === 'number' && value >= 18 ? true : '必须年满 18 岁'),
      trigger: ['blur', 'change'],
    },
  ],
}
const formRef = ref<FormExpose | null>(null)
const result = ref('')

async function validate(): Promise<void> {
  const valid = await formRef.value?.validate()
  result.value = valid ? '全部字段校验通过。' : '仍有字段未通过校验。'
}
<\/script>

<template>
  <div class="demo-stack">
    <MForm ref="formRef" :model="model" :rules="rules" aria-label="注册信息">
      <MFormItem prop="username" label="用户名" for="form-username">
        <MInput id="form-username" v-model="model.username" placeholder="3–12 个字符" />
      </MFormItem>

      <MFormItem prop="age" label="年龄" for="form-age">
        <MNumberInput id="form-age" v-model="model.age" :min="0" aria-label="年龄" />
      </MFormItem>

      <MButton type="primary" @click="validate">校验表单</MButton>
    </MForm>

    <p class="demo-hint">{{ result }}</p>
  </div>
</template>
`,iw=`<script setup>
import { MButton, MForm, MFormItem, MInput, MNumberInput } from 'anemia-ui'
import { reactive, ref } from 'vue'
const model = reactive({ username: '', age: null })
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '用户名需要 3–12 个字符', trigger: 'blur' },
  ],
  age: [
    {
      validator: (value) => (typeof value === 'number' && value >= 18 ? true : '必须年满 18 岁'),
      trigger: ['blur', 'change'],
    },
  ],
}
const formRef = ref(null)
const result = ref('')
async function validate() {
  const valid = await formRef.value?.validate()
  result.value = valid ? '全部字段校验通过。' : '仍有字段未通过校验。'
}
<\/script>

<template>
  <div class="demo-stack">
    <MForm ref="formRef" :model="model" :rules="rules" aria-label="注册信息">
      <MFormItem prop="username" label="用户名" for="form-username">
        <MInput id="form-username" v-model="model.username" placeholder="3–12 个字符" />
      </MFormItem>

      <MFormItem prop="age" label="年龄" for="form-age">
        <MNumberInput id="form-age" v-model="model.age" :min="0" aria-label="年龄" />
      </MFormItem>

      <MButton type="primary" @click="validate">校验表单</MButton>
    </MForm>

    <p class="demo-hint">{{ result }}</p>
  </div>
</template>
`,lw={name:"form",category:"form",title:"Form 表单",summary:"表单上下文、字段布局与同步 / 异步校验，错误通过 aria-describedby 关联到控件。",description:"MForm 提供模型、规则、禁用状态与校验入口，MFormItem 负责标签、错误展示与字段注册。MInput、MTextarea、MNumberInput 与 MSelect 会自动读取 FormItem 上下文，继承禁用与错误状态，并把错误描述关联到原生控件。",status:"stable",since:"0.4.0",keywords:["form","表单","校验","formitem","rules"],sections:[{id:"basic",title:"基础用法",description:"model 持有数据，rules 按 prop 声明规则，提交时由 Form 统一校验。",demo:Kk,code:Qk,codeJs:Yk},{id:"validation",title:"校验与错误",description:"支持 required、pattern、min / max、同步与异步 validator，以及字段级规则。",demo:ow,code:aw,codeJs:iw},{id:"layout",title:"布局与禁用",description:"labelPosition 支持 top / left / right，labelWidth 控制标签宽度；disabled 向下传递。",demo:Zk,code:ew,codeJs:tw}],api:[{id:"form-api",title:"MForm",props:[{name:"model",type:"Record<string, unknown>",defaultValue:"{}",description:"表单数据对象；字段通过 FormItem 的 prop 取值。"},{name:"rules",type:"FormRules",defaultValue:"{}",description:"按 prop 声明的校验规则。"},{name:"labelPosition",type:"'top' | 'left' | 'right'",defaultValue:"'top'",description:"标签位置；left / right 使用 labelWidth 控制列宽。"},{name:"labelWidth",type:"string",defaultValue:"96px",description:"left / right 布局下的标签宽度，可传任意 CSS 长度。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用表单内的输入类控件。"},{name:"showMessage",type:"boolean",defaultValue:"true",description:"为 false 时隐藏所有字段错误，但仍执行校验。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"form 元素的无障碍名称。"}],events:[{name:"submit",type:"(valid: boolean) => void",description:"原生提交被拦截后触发，参数为整体校验结果。"},{name:"validate",type:"(prop: string, valid: boolean, message: string) => void",description:"每个字段完成校验时触发。"}],slots:[{name:"default",type:"—",description:"FormItem 列表。"}]},{id:"form-item-api",title:"MFormItem",props:[{name:"prop",type:"string",defaultValue:"—",description:"对应 model 的字段名，支持点路径；省略时不自动校验。"},{name:"label",type:"string",defaultValue:"—",description:"字段标签。"},{name:"required",type:"boolean",defaultValue:"false",description:"仅用于显示必填星号；实际校验仍由规则决定。"},{name:"rules",type:"FormRule | FormRule[]",defaultValue:"—",description:"字段级规则，会与表单级同名字段规则合并。"},{name:"error",type:"string",defaultValue:"—",description:"外部控制的错误文本，优先级高于内部校验。"},{name:"hint",type:"string",defaultValue:"—",description:"没有错误时显示的帮助文本。"},{name:"labelWidth",type:"string",defaultValue:"—",description:"覆盖当前字段的标签宽度。"},{name:"for",type:"string",defaultValue:"—",description:"label 的 for 属性，应与控件 id 一致。"},{name:"showMessage",type:"boolean",defaultValue:"true",description:"为 false 时隐藏当前字段的错误。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用当前字段的输入类控件。"}],slots:[{name:"default",type:"—",description:"字段控件。"},{name:"label",type:"—",description:"自定义标签内容。"}]},{id:"form-rule-api",title:"FormRule",props:[{name:"required",type:"boolean",defaultValue:"false",description:"空值校验；空字符串、null、undefined 与空数组都会失败。"},{name:"message",type:"string",defaultValue:"—",description:"规则失败时的错误文本；省略时使用内置默认文案。"},{name:"pattern",type:"RegExp",defaultValue:"—",description:"字符串正则校验；空值会跳过该规则。"},{name:"min",type:"number",defaultValue:"—",description:"数字最小值，或字符串 / 数组的最小长度。"},{name:"max",type:"number",defaultValue:"—",description:"数字最大值，或字符串 / 数组的最大长度。"},{name:"validator",type:"(value, model) => boolean | string | void | Promise<...>",defaultValue:"—",description:"自定义校验；返回 false 使用 message，返回字符串则作为错误文本。"},{name:"trigger",type:"'blur' | 'change' | 'submit' | FormTrigger[]",defaultValue:"—",description:"限定触发时机；省略时在 blur / change / submit 都执行。"}]}],notes:["字段校验依赖 model 中的值；FormItem 省略 prop 时只负责展示，不会自动校验。","MInput、MTextarea、MNumberInput 与 MSelect 会自动继承 FormItem 的错误、禁用与 aria-describedby；显式传入的 props 优先。","blur 校验监听容器的 focusout，change 校验监听 input / change 事件并在下一个 tick 读取最新 model。","resetFields() 恢复挂载时的浅拷贝初始值，并清空所有错误；嵌套对象不会深拷贝。","validate() 返回 Promise<boolean>，不会抛出异常；异步 validator 抛错时按失败处理。","FormItem 的 label 不会自动生成控件 id，请通过 for 与控件 id 手动关联。"]},rw={class:"demo-stack",style:{"max-width":"720px"}},dw={class:"demo-field"},cw={class:"demo-row"},uw={class:"demo-hint"},mw=C({__name:"Basic",setup(e){const t=[{title:"自动适配",tag:"auto-fit",description:"默认按 220px 的最小列宽计算列数，容器变窄时减少列，而不是压缩内容。"},{title:"固定列",tag:"columns",description:"传入 columns 后使用 repeat(N, minmax(0, 1fr))，列数不随容器变化。"},{title:"独立行距",tag:"row-gap",description:"row-gap 可以单独覆盖行间距，适合卡片高度不一致的内容集合。"},{title:"密集填充",tag:"dense",description:"dense 让后续较矮的项目回填前面的空位，适合不规则卡片流。"}];return(n,s)=>(v(),y("div",rw,[s[0]||(s[0]=g("p",{class:"demo-hint"}," 默认 min-column-width 为 220px：容器宽度变化时列数自动增减，卡片始终保持可读宽度。 ",-1)),c(r(ta),null,{default:f(()=>[(v(),y(ie,null,xe(t,o=>c(r(pt),{key:o.title,padding:"medium"},{default:f(()=>[g("div",dw,[g("div",cw,[g("strong",null,L(o.title),1),c(r(qe),{size:"small",type:"info"},{default:f(()=>[_(L(o.tag),1)]),_:2},1024)]),g("p",uw,L(o.description),1)])]),_:2},1024)),64))]),_:1})]))}}),pw=`<script setup lang="ts">
import { MCard, MGrid, MTag } from 'anemia-ui'

interface GridFeature {
  title: string
  tag: string
  description: string
}

const features: GridFeature[] = [
  {
    title: '自动适配',
    tag: 'auto-fit',
    description: '默认按 220px 的最小列宽计算列数，容器变窄时减少列，而不是压缩内容。',
  },
  {
    title: '固定列',
    tag: 'columns',
    description: '传入 columns 后使用 repeat(N, minmax(0, 1fr))，列数不随容器变化。',
  },
  {
    title: '独立行距',
    tag: 'row-gap',
    description: 'row-gap 可以单独覆盖行间距，适合卡片高度不一致的内容集合。',
  },
  {
    title: '密集填充',
    tag: 'dense',
    description: 'dense 让后续较矮的项目回填前面的空位，适合不规则卡片流。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">
      默认 min-column-width 为 220px：容器宽度变化时列数自动增减，卡片始终保持可读宽度。
    </p>
    <MGrid>
      <MCard v-for="feature in features" :key="feature.title" padding="medium">
        <div class="demo-field">
          <div class="demo-row">
            <strong>{{ feature.title }}</strong>
            <MTag size="small" type="info">{{ feature.tag }}</MTag>
          </div>
          <p class="demo-hint">{{ feature.description }}</p>
        </div>
      </MCard>
    </MGrid>
  </div>
</template>
`,fw=`<script setup>
import { MCard, MGrid, MTag } from 'anemia-ui'
const features = [
  {
    title: '自动适配',
    tag: 'auto-fit',
    description: '默认按 220px 的最小列宽计算列数，容器变窄时减少列，而不是压缩内容。',
  },
  {
    title: '固定列',
    tag: 'columns',
    description: '传入 columns 后使用 repeat(N, minmax(0, 1fr))，列数不随容器变化。',
  },
  {
    title: '独立行距',
    tag: 'row-gap',
    description: 'row-gap 可以单独覆盖行间距，适合卡片高度不一致的内容集合。',
  },
  {
    title: '密集填充',
    tag: 'dense',
    description: 'dense 让后续较矮的项目回填前面的空位，适合不规则卡片流。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">
      默认 min-column-width 为 220px：容器宽度变化时列数自动增减，卡片始终保持可读宽度。
    </p>
    <MGrid>
      <MCard v-for="feature in features" :key="feature.title" padding="medium">
        <div class="demo-field">
          <div class="demo-row">
            <strong>{{ feature.title }}</strong>
            <MTag size="small" type="info">{{ feature.tag }}</MTag>
          </div>
          <p class="demo-hint">{{ feature.description }}</p>
        </div>
      </MCard>
    </MGrid>
  </div>
</template>
`,vw={class:"demo-stack",style:{"max-width":"720px"}},gw={class:"demo-field"},bw={class:"demo-label"},yw={class:"demo-hint"},hw=C({__name:"Fixed",setup(e){const t=[{title:"间距刻度",value:"4px",description:"所有间距从 4px 基准派生，step 4 为 16px。"},{title:"圆角",value:"10px",description:"md 预设，卡片与控件共用同一组圆角 Token。"},{title:"主题",value:"3",description:"light / dark / system 三种模式，颜色全部来自变量。"}];return(n,s)=>(v(),y("div",vw,[s[0]||(s[0]=g("p",{class:"demo-hint"},' :columns="3" 固定三列，每列使用 minmax(0, 1fr) 均分剩余空间，窄屏下也不会撑出容器。 ',-1)),c(r(ta),{columns:3,gap:3},{default:f(()=>[(v(),y(ie,null,xe(t,o=>c(r(pt),{key:o.title,padding:"medium"},{default:f(()=>[g("div",gw,[g("span",bw,L(o.title),1),g("strong",null,L(o.value),1),g("p",yw,L(o.description),1)])]),_:2},1024)),64))]),_:1})]))}}),Mw=`<script setup lang="ts">
import { MCard, MGrid } from 'anemia-ui'

const tokens = [
  {
    title: '间距刻度',
    value: '4px',
    description: '所有间距从 4px 基准派生，step 4 为 16px。',
  },
  {
    title: '圆角',
    value: '10px',
    description: 'md 预设，卡片与控件共用同一组圆角 Token。',
  },
  {
    title: '主题',
    value: '3',
    description: 'light / dark / system 三种模式，颜色全部来自变量。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">
      :columns="3" 固定三列，每列使用 minmax(0, 1fr) 均分剩余空间，窄屏下也不会撑出容器。
    </p>
    <MGrid :columns="3" :gap="3">
      <MCard v-for="token in tokens" :key="token.title" padding="medium">
        <div class="demo-field">
          <span class="demo-label">{{ token.title }}</span>
          <strong>{{ token.value }}</strong>
          <p class="demo-hint">{{ token.description }}</p>
        </div>
      </MCard>
    </MGrid>
  </div>
</template>
`,_w=`<script setup>
import { MCard, MGrid } from 'anemia-ui'
const tokens = [
  {
    title: '间距刻度',
    value: '4px',
    description: '所有间距从 4px 基准派生，step 4 为 16px。',
  },
  {
    title: '圆角',
    value: '10px',
    description: 'md 预设，卡片与控件共用同一组圆角 Token。',
  },
  {
    title: '主题',
    value: '3',
    description: 'light / dark / system 三种模式，颜色全部来自变量。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">
      :columns="3" 固定三列，每列使用 minmax(0, 1fr) 均分剩余空间，窄屏下也不会撑出容器。
    </p>
    <MGrid :columns="3" :gap="3">
      <MCard v-for="token in tokens" :key="token.title" padding="medium">
        <div class="demo-field">
          <span class="demo-label">{{ token.title }}</span>
          <strong>{{ token.value }}</strong>
          <p class="demo-hint">{{ token.description }}</p>
        </div>
      </MCard>
    </MGrid>
  </div>
</template>
`,kw={class:"demo-stack",style:{"max-width":"720px"}},ww={class:"demo-field"},xw={class:"demo-hint"},Bw=C({__name:"Gap",setup(e){const t=[{title:"间距",description:"gap 使用 4px 刻度，同一组组件不应出现手写的 13px、18px 间距。"},{title:"行距",description:"row-gap 单独覆盖行间距；这张卡片有三行文字，用来拉开与下一行的距离。"},{title:"对齐",description:"网格只负责轨道尺寸，子项内部的对齐仍然交给 MStack 或自身样式。"},{title:"断点",description:"min-column-width 决定列数变化的时机，组件不提供断点 Props。"},{title:"溢出",description:"自动模式使用 min(100%, 180px)，容器再窄也只会减少列数，不会撑出横向滚动。"},{title:"卡片",description:"卡片高度可以不同，行距保持稳定，不会因为内容多少而跳动。"}];return(n,s)=>(v(),y("div",kw,[s[0]||(s[0]=g("p",{class:"demo-hint"},':gap="2" 让列间距为 8px，:row-gap="8" 单独把行间距拉到 32px。',-1)),c(r(ta),{"min-column-width":"180px",gap:2,"row-gap":8},{default:f(()=>[(v(),y(ie,null,xe(t,o=>c(r(pt),{key:o.title,padding:"medium"},{default:f(()=>[g("div",ww,[g("strong",null,L(o.title),1),g("p",xw,L(o.description),1)])]),_:2},1024)),64))]),_:1})]))}}),Cw=`<script setup lang="ts">
import { MCard, MGrid } from 'anemia-ui'

const topics = [
  {
    title: '间距',
    description: 'gap 使用 4px 刻度，同一组组件不应出现手写的 13px、18px 间距。',
  },
  {
    title: '行距',
    description: 'row-gap 单独覆盖行间距；这张卡片有三行文字，用来拉开与下一行的距离。',
  },
  {
    title: '对齐',
    description: '网格只负责轨道尺寸，子项内部的对齐仍然交给 MStack 或自身样式。',
  },
  {
    title: '断点',
    description: 'min-column-width 决定列数变化的时机，组件不提供断点 Props。',
  },
  {
    title: '溢出',
    description: '自动模式使用 min(100%, 180px)，容器再窄也只会减少列数，不会撑出横向滚动。',
  },
  {
    title: '卡片',
    description: '卡片高度可以不同，行距保持稳定，不会因为内容多少而跳动。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">:gap="2" 让列间距为 8px，:row-gap="8" 单独把行间距拉到 32px。</p>
    <MGrid min-column-width="180px" :gap="2" :row-gap="8">
      <MCard v-for="topic in topics" :key="topic.title" padding="medium">
        <div class="demo-field">
          <strong>{{ topic.title }}</strong>
          <p class="demo-hint">{{ topic.description }}</p>
        </div>
      </MCard>
    </MGrid>
  </div>
</template>
`,$w=`<script setup>
import { MCard, MGrid } from 'anemia-ui'
const topics = [
  {
    title: '间距',
    description: 'gap 使用 4px 刻度，同一组组件不应出现手写的 13px、18px 间距。',
  },
  {
    title: '行距',
    description: 'row-gap 单独覆盖行间距；这张卡片有三行文字，用来拉开与下一行的距离。',
  },
  {
    title: '对齐',
    description: '网格只负责轨道尺寸，子项内部的对齐仍然交给 MStack 或自身样式。',
  },
  {
    title: '断点',
    description: 'min-column-width 决定列数变化的时机，组件不提供断点 Props。',
  },
  {
    title: '溢出',
    description: '自动模式使用 min(100%, 180px)，容器再窄也只会减少列数，不会撑出横向滚动。',
  },
  {
    title: '卡片',
    description: '卡片高度可以不同，行距保持稳定，不会因为内容多少而跳动。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">:gap="2" 让列间距为 8px，:row-gap="8" 单独把行间距拉到 32px。</p>
    <MGrid min-column-width="180px" :gap="2" :row-gap="8">
      <MCard v-for="topic in topics" :key="topic.title" padding="medium">
        <div class="demo-field">
          <strong>{{ topic.title }}</strong>
          <p class="demo-hint">{{ topic.description }}</p>
        </div>
      </MCard>
    </MGrid>
  </div>
</template>
`,Tw={name:"grid",category:"container",title:"Grid 网格布局",summary:"按固定列数或最小列宽自动排布二维内容，不做栅格系统。",description:"Grid 是布局原语：省略 columns 时用 auto-fit 与 minmax() 根据容器宽度自动决定列数，传入 columns 时固定列数。它不内置断点或栅格类名，间距复用 4px 刻度，具体布局策略交给使用方。",status:"stable",since:"0.6.0",keywords:["grid","网格","布局","auto-fit","列"],sections:[{id:"basic",title:"自动适配",description:"默认 minColumnWidth 为 220px，容器变宽时列数自动增加，变窄时自动减少。",demo:mw,code:pw,codeJs:fw},{id:"fixed",title:"固定列数",description:"columns 固定列数并使用 repeat(N, minmax(0, 1fr))，列宽等分且不会撑出容器。",demo:hw,code:Mw,codeJs:_w},{id:"gap",title:"间距与行距",description:"gap 同时控制行列间距，rowGap 可单独放大行距，适合高度不一致的卡片内容。",demo:Bw,code:Cw,codeJs:$w}],api:[{id:"grid-api",title:"MGrid",props:[{name:"columns",type:"number",defaultValue:"—",description:"固定列数；省略时按 minColumnWidth 自动适配。"},{name:"minColumnWidth",type:"string",defaultValue:"'220px'",description:"自动模式下的最小列宽，可传任意 CSS 长度。"},{name:"gap",type:"GridGap",defaultValue:"4",description:"行与列的间距，复用 4px 间距刻度。"},{name:"rowGap",type:"GridGap",defaultValue:"—",description:"行间距；未设置时与 gap 相同。"},{name:"dense",type:"boolean",defaultValue:"false",description:"启用 grid-auto-flow: dense，让后续项目回填前面的空位。"},{name:"as",type:"string",defaultValue:"'div'",description:"根节点标签，如 section；组件不添加 role。"}],events:[],slots:[{name:"default",type:"—",description:"网格项目，通常是卡片或内容块。"}]}],notes:["MGrid 是布局原语，不提供响应式断点 Props；列数变化由 auto-fit 与 minmax() 完成，复杂断点交给使用方 CSS。","自动模式使用 minmax(min(100%, minColumnWidth), 1fr)，默认 220px 在 390px 视口下会降为单列；min(100%, …) 保证任何取值都不会产生页面级横向溢出。","固定列模式不会随视口降级：390px 下仍保持 N 列，列被压窄时内容可能拥挤，建议配合媒体查询或改用自动模式。","minColumnWidth 建议 160px–240px：卡片网格常用 220px，紧凑标签 160px；低于 120px 会失去可读性。","rowGap 未设置时与 gap 一致；卡片高度不一致时用 rowGap 单独放大行距。","dense 只改变自动填充顺序，可能让视觉顺序与 DOM 阅读顺序不一致；仅在项目高度差异明显且阅读顺序不敏感时使用。","MGrid 不承载语义，也不添加 role；需要 section、nav 等标签时用 as 指定。"]},Iw={class:"demo-stack"},Vw={class:"demo-hint"},Sw=C({__name:"Basic",setup(e){const t=z(""),n=z("anemia@example.com");return(s,o)=>(v(),y("div",Iw,[c(r(je),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),placeholder:"请输入组件名称","aria-label":"组件名称",clearable:""},null,8,["modelValue"]),c(r(je),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),type:"email",placeholder:"邮箱地址","aria-label":"邮箱地址",clearable:""},null,8,["modelValue"]),g("p",Vw,"name："+L(t.value||"（空）")+" · email："+L(n.value),1)]))}}),zw=`<script setup lang="ts">
import { MInput } from 'anemia-ui'
import { ref } from 'vue'

const name = ref('')
const email = ref('anemia@example.com')
<\/script>

<template>
  <div class="demo-stack">
    <MInput v-model="name" placeholder="请输入组件名称" aria-label="组件名称" clearable />
    <MInput v-model="email" type="email" placeholder="邮箱地址" aria-label="邮箱地址" clearable />
    <p class="demo-hint">name：{{ name || '（空）' }} · email：{{ email }}</p>
  </div>
</template>
`,Aw=`<script setup>
import { MInput } from 'anemia-ui'
import { ref } from 'vue'
const name = ref('')
const email = ref('anemia@example.com')
<\/script>

<template>
  <div class="demo-stack">
    <MInput v-model="name" placeholder="请输入组件名称" aria-label="组件名称" clearable />
    <MInput v-model="email" type="email" placeholder="邮箱地址" aria-label="邮箱地址" clearable />
    <p class="demo-hint">name：{{ name || '（空）' }} · email：{{ email }}</p>
  </div>
</template>
`,Dw={class:"demo-stack"},Ew=C({__name:"Icons",setup(e){const t=z("anemia"),n=z("");return(s,o)=>(v(),y("div",Dw,[c(r(je),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),"prefix-icon":"user",placeholder:"用户名","aria-label":"用户名",clearable:""},null,8,["modelValue"]),c(r(je),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),"suffix-icon":"mail",placeholder:"邮箱域名","aria-label":"邮箱域名"},null,8,["modelValue"]),c(r(je),{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value=a),placeholder:"自定义前后缀","aria-label":"自定义前后缀示例"},{prefix:f(()=>[c(r(Et),{name:"search",size:16})]),suffix:f(()=>[...o[3]||(o[3]=[g("span",{class:"demo-suffix"},"必填",-1)])]),_:1},8,["modelValue"])]))}}),Rw=ce(Ew,[["__scopeId","data-v-5df69c7f"]]),Pw=`<script setup lang="ts">
import { MIcon, MInput } from 'anemia-ui'
import { ref } from 'vue'

const username = ref('anemia')
const domain = ref('')
<\/script>

<template>
  <div class="demo-stack">
    <MInput
      v-model="username"
      prefix-icon="user"
      placeholder="用户名"
      aria-label="用户名"
      clearable
    />
    <MInput v-model="domain" suffix-icon="mail" placeholder="邮箱域名" aria-label="邮箱域名" />
    <MInput v-model="domain" placeholder="自定义前后缀" aria-label="自定义前后缀示例">
      <template #prefix>
        <MIcon name="search" :size="16" />
      </template>
      <template #suffix>
        <span class="demo-suffix">必填</span>
      </template>
    </MInput>
  </div>
</template>

<style scoped>
.demo-suffix {
  color: var(--m-color-text-tertiary);
  font-size: 12px;
  white-space: nowrap;
}
</style>
`,Lw=`<script setup>
import { MIcon, MInput } from 'anemia-ui'
import { ref } from 'vue'
const username = ref('anemia')
const domain = ref('')
<\/script>

<template>
  <div class="demo-stack">
    <MInput
      v-model="username"
      prefix-icon="user"
      placeholder="用户名"
      aria-label="用户名"
      clearable
    />
    <MInput v-model="domain" suffix-icon="mail" placeholder="邮箱域名" aria-label="邮箱域名" />
    <MInput v-model="domain" placeholder="自定义前后缀" aria-label="自定义前后缀示例">
      <template #prefix>
        <MIcon name="search" :size="16" />
      </template>
      <template #suffix>
        <span class="demo-suffix">必填</span>
      </template>
    </MInput>
  </div>
</template>

<style scoped>
.demo-suffix {
  color: var(--m-color-text-tertiary);
  font-size: 12px;
  white-space: nowrap;
}
</style>
`,Ow={class:"demo-stack"},Fw=C({__name:"Password",setup(e){const t=z("anemia-ui");return(n,s)=>(v(),y("div",Ow,[c(r(je),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),type:"password",placeholder:"请输入密码",clearable:"","aria-label":"密码"},null,8,["modelValue"]),s[1]||(s[1]=g("p",{class:"demo-hint"},"右侧眼睛按钮由组件内部实现，无需额外属性。",-1))]))}}),Nw=`<script setup lang="ts">
import { MInput } from 'anemia-ui'
import { ref } from 'vue'

const password = ref('anemia-ui')
<\/script>

<template>
  <div class="demo-stack">
    <MInput
      v-model="password"
      type="password"
      placeholder="请输入密码"
      clearable
      aria-label="密码"
    />
    <p class="demo-hint">右侧眼睛按钮由组件内部实现，无需额外属性。</p>
  </div>
</template>
`,Jw=`<script setup>
import { MInput } from 'anemia-ui'
import { ref } from 'vue'
const password = ref('anemia-ui')
<\/script>

<template>
  <div class="demo-stack">
    <MInput
      v-model="password"
      type="password"
      placeholder="请输入密码"
      clearable
      aria-label="密码"
    />
    <p class="demo-hint">右侧眼睛按钮由组件内部实现，无需额外属性。</p>
  </div>
</template>
`,Gw={class:"demo-stack"},Uw={class:"demo-hint"},jw=C({__name:"Search",setup(e){const t=z(""),n=z("");function s(o){n.value=o}return(o,a)=>(v(),y("div",Gw,[c(r(je),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),type:"search",placeholder:"搜索组件…","aria-label":"搜索组件",clearable:"",onSearch:s},null,8,["modelValue"]),g("p",Uw,L(n.value?`按 Enter 搜索：${n.value}`:"输入关键词后按 Enter 触发 search 事件"),1)]))}}),Ww=`<script setup lang="ts">
import { MInput } from 'anemia-ui'
import { ref } from 'vue'

const keyword = ref('')
const searched = ref('')

function handleSearch(value: string): void {
  searched.value = value
}
<\/script>

<template>
  <div class="demo-stack">
    <MInput
      v-model="keyword"
      type="search"
      placeholder="搜索组件…"
      aria-label="搜索组件"
      clearable
      @search="handleSearch"
    />
    <p class="demo-hint">
      {{ searched ? \`按 Enter 搜索：\${searched}\` : '输入关键词后按 Enter 触发 search 事件' }}
    </p>
  </div>
</template>
`,Hw=`<script setup>
import { MInput } from 'anemia-ui'
import { ref } from 'vue'
const keyword = ref('')
const searched = ref('')
function handleSearch(value) {
  searched.value = value
}
<\/script>

<template>
  <div class="demo-stack">
    <MInput
      v-model="keyword"
      type="search"
      placeholder="搜索组件…"
      aria-label="搜索组件"
      clearable
      @search="handleSearch"
    />
    <p class="demo-hint">
      {{ searched ? \`按 Enter 搜索：\${searched}\` : '输入关键词后按 Enter 触发 search 事件' }}
    </p>
  </div>
</template>
`,qw={class:"demo-grid"},Kw={class:"demo-field"},Qw={class:"demo-field"},Yw={class:"demo-field"},Xw={class:"demo-field"},Zw={class:"demo-field"},ex={class:"demo-field"},tx=C({__name:"States",setup(e){const t=z("Small"),n=z("Medium"),s=z("Large");return(o,a)=>(v(),y("div",qw,[g("div",Kw,[a[3]||(a[3]=g("span",{class:"demo-label"},"small",-1)),c(r(je),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),size:"small",placeholder:"Small input","aria-label":"Small 尺寸示例"},null,8,["modelValue"])]),g("div",Qw,[a[4]||(a[4]=g("span",{class:"demo-label"},"medium",-1)),c(r(je),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),size:"medium",placeholder:"Medium input","aria-label":"Medium 尺寸示例"},null,8,["modelValue"])]),g("div",Yw,[a[5]||(a[5]=g("span",{class:"demo-label"},"large",-1)),c(r(je),{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=i=>s.value=i),size:"large",placeholder:"Large input","aria-label":"Large 尺寸示例"},null,8,["modelValue"])]),g("div",Xw,[a[6]||(a[6]=g("span",{class:"demo-label"},"disabled",-1)),c(r(je),{"model-value":"不可编辑",disabled:"","aria-label":"禁用示例"})]),g("div",Zw,[a[7]||(a[7]=g("span",{class:"demo-label"},"readonly",-1)),c(r(je),{"model-value":"只读内容",readonly:"","aria-label":"只读示例"})]),g("div",ex,[a[8]||(a[8]=g("span",{class:"demo-label"},"error",-1)),c(r(je),{"model-value":"invalid@",error:"","error-message":"请输入有效的邮箱地址","aria-label":"错误状态示例",clearable:""})])]))}}),nx=`<script setup lang="ts">
import { MInput } from 'anemia-ui'
import { ref } from 'vue'

const small = ref('Small')
const medium = ref('Medium')
const large = ref('Large')
<\/script>

<template>
  <div class="demo-grid">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MInput v-model="small" size="small" placeholder="Small input" aria-label="Small 尺寸示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">medium</span>
      <MInput
        v-model="medium"
        size="medium"
        placeholder="Medium input"
        aria-label="Medium 尺寸示例"
      />
    </div>
    <div class="demo-field">
      <span class="demo-label">large</span>
      <MInput v-model="large" size="large" placeholder="Large input" aria-label="Large 尺寸示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">disabled</span>
      <MInput model-value="不可编辑" disabled aria-label="禁用示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">readonly</span>
      <MInput model-value="只读内容" readonly aria-label="只读示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">error</span>
      <MInput
        model-value="invalid@"
        error
        error-message="请输入有效的邮箱地址"
        aria-label="错误状态示例"
        clearable
      />
    </div>
  </div>
</template>
`,sx=`<script setup>
import { MInput } from 'anemia-ui'
import { ref } from 'vue'
const small = ref('Small')
const medium = ref('Medium')
const large = ref('Large')
<\/script>

<template>
  <div class="demo-grid">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MInput v-model="small" size="small" placeholder="Small input" aria-label="Small 尺寸示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">medium</span>
      <MInput
        v-model="medium"
        size="medium"
        placeholder="Medium input"
        aria-label="Medium 尺寸示例"
      />
    </div>
    <div class="demo-field">
      <span class="demo-label">large</span>
      <MInput v-model="large" size="large" placeholder="Large input" aria-label="Large 尺寸示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">disabled</span>
      <MInput model-value="不可编辑" disabled aria-label="禁用示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">readonly</span>
      <MInput model-value="只读内容" readonly aria-label="只读示例" />
    </div>
    <div class="demo-field">
      <span class="demo-label">error</span>
      <MInput
        model-value="invalid@"
        error
        error-message="请输入有效的邮箱地址"
        aria-label="错误状态示例"
        clearable
      />
    </div>
  </div>
</template>
`,ox={name:"input",category:"basic",title:"Input 输入框",summary:"支持文本、密码、搜索、前后缀图标、清除与错误状态，并遵循 v-model 规范。",description:"输入框负责收集单行文本。组件在原生 input 之上提供统一的尺寸、状态与可访问性处理；表单语义、键盘行为与输入事件仍然来自原生元素，避免重新实现一套输入行为。",status:"stable",since:"0.1.0",keywords:["input","输入框","搜索","密码","表单"],sections:[{id:"basic",title:"基础用法",description:"通过 v-model 双向绑定字符串值；clearable 在有内容时显示清除按钮。",demo:Sw,code:zw,codeJs:Aw},{id:"password",title:"密码输入",description:'type="password" 时自动提供显示/隐藏密码按钮，切换后仍保持光标位置与焦点。',demo:Fw,code:Nw,codeJs:Jw},{id:"search",title:"搜索输入",description:'type="search" 会自动显示搜索图标；在输入框中按 Enter 触发 search 事件。',demo:jw,code:Ww,codeJs:Hw},{id:"icons",title:"图标与前后缀",description:"prefixIcon / suffixIcon 来自统一图标注册表；需要任意内容时使用 #prefix 与 #suffix 插槽。",demo:Rw,code:Pw,codeJs:Lw},{id:"states",title:"尺寸与状态",description:"三种尺寸、禁用、只读与错误状态共享同一套 Token；错误信息通过 errorMessage 提供无障碍描述。",demo:tx,code:nx,codeJs:sx}],api:[{id:"input-api",title:"MInput",props:[{name:"modelValue",type:"string",defaultValue:"''",description:"绑定值，使用 v-model 更新。始终为字符串。"},{name:"type",type:"'text' | 'password' | 'search' | 'email' | 'tel' | 'url'",defaultValue:"'text'",description:"原生输入类型。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"输入框尺寸，对应 28px / 36px / 44px。"},{name:"placeholder",type:"string",defaultValue:"—",description:"占位文本。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用输入。"},{name:"readonly",type:"boolean",defaultValue:"false",description:"只读状态，保留焦点与选择能力。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"显示清除按钮。清除后会重新聚焦输入框。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误视觉状态，同时设置 aria-invalid。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误描述文本，会与输入框建立 aria-describedby 关联。"},{name:"prefixIcon",type:"IconName",defaultValue:"—",description:"前置图标。#prefix 插槽优先。"},{name:"suffixIcon",type:"IconName",defaultValue:"—",description:"后置图标。#suffix 插槽优先。"},{name:"maxlength",type:"number",defaultValue:"—",description:"最大输入长度。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"autocomplete",type:"string",defaultValue:"—",description:"原生 autocomplete 提示。"},{name:"id",type:"string",defaultValue:"—",description:"输入框 id，缺省时自动生成。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"在没有可见 label 时提供无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: string) => void",description:"输入值变化时触发，用于 v-model。"},{name:"input",type:"(value: string, event?: Event) => void",description:"原生 input 事件；清除按钮触发时 event 为空。"},{name:"change",type:"(value: string, event: Event) => void",description:"原生 change 事件。"},{name:"focus",type:"(event: FocusEvent) => void",description:"输入框获得焦点。"},{name:"blur",type:"(event: FocusEvent) => void",description:"输入框失去焦点。"},{name:"clear",type:"() => void",description:"用户点击清除按钮。"},{name:"search",type:"(value: string, event: KeyboardEvent) => void",description:'type="search" 时按 Enter 触发。'}],slots:[{name:"prefix",type:"—",description:"自定义前置内容，替代 prefixIcon。"},{name:"suffix",type:"—",description:"自定义后置内容，替代 suffixIcon。"}]}],notes:["modelValue 始终是字符串；需要数字时由使用方自行转换。","组件将未声明的属性透传给原生 <input>，因此 class 会落在输入元素而不是外层容器。","清除按钮会触发 update:modelValue、input 与 clear；input 事件没有原生 Event 参数。","search 只在按 Enter 时触发，输入过程中不会触发。","组件暴露 focus() / blur() / select() 方法，可通过模板 ref 调用。"]},ax=C({__name:"Basic",setup(e){const t=[{id:"0.7.0",title:"0.7.0 — 高级与复合组件",description:"日期选择、级联选择与虚拟滚动进入规划，DataTable 继续保持与轻表格的职责分离。",status:"规划中",type:"info"},{id:"0.6.0",title:"0.6.0 — 布局与数据展示",description:"新增 Stack、Grid、DataTable、Pagination、Breadcrumb 等组件，100+ 行数据可用。",status:"已发布",type:"success"},{id:"0.5.0",title:"0.5.0 — 扩展性修订",description:"补齐浮层受控模式、两种隐藏模式与多目标 TooltipGroup。",status:"已发布",type:"default"}];return(n,s)=>(v(),we(r(oo),null,{header:f(()=>[...s[0]||(s[0]=[g("span",{class:"demo-hint"},"组件发布记录",-1)])]),footer:f(()=>[_("共 "+L(t.length)+" 条记录，按版本时间倒序排列。",1)]),default:f(()=>[(v(),y(ie,null,xe(t,o=>c(r(ao),{key:o.id,title:o.title,description:o.description},{extra:f(()=>[c(r(qe),{type:o.type,size:"small"},{default:f(()=>[_(L(o.status),1)]),_:2},1032,["type"])]),_:2},1032,["title","description"])),64))]),_:1}))}}),ix=`<script setup lang="ts">
import type { TagType } from 'anemia-ui'
import { MList, MListItem, MTag } from 'anemia-ui'

interface Release {
  id: string
  title: string
  description: string
  status: string
  type: TagType
}

const releases: Release[] = [
  {
    id: '0.7.0',
    title: '0.7.0 — 高级与复合组件',
    description: '日期选择、级联选择与虚拟滚动进入规划，DataTable 继续保持与轻表格的职责分离。',
    status: '规划中',
    type: 'info',
  },
  {
    id: '0.6.0',
    title: '0.6.0 — 布局与数据展示',
    description: '新增 Stack、Grid、DataTable、Pagination、Breadcrumb 等组件，100+ 行数据可用。',
    status: '已发布',
    type: 'success',
  },
  {
    id: '0.5.0',
    title: '0.5.0 — 扩展性修订',
    description: '补齐浮层受控模式、两种隐藏模式与多目标 TooltipGroup。',
    status: '已发布',
    type: 'default',
  },
]
<\/script>

<template>
  <MList>
    <template #header>
      <span class="demo-hint">组件发布记录</span>
    </template>

    <MListItem
      v-for="release in releases"
      :key="release.id"
      :title="release.title"
      :description="release.description"
    >
      <template #extra>
        <MTag :type="release.type" size="small">{{ release.status }}</MTag>
      </template>
    </MListItem>

    <template #footer>共 {{ releases.length }} 条记录，按版本时间倒序排列。</template>
  </MList>
</template>
`,lx=`<script setup>
import { MList, MListItem, MTag } from 'anemia-ui'
const releases = [
  {
    id: '0.7.0',
    title: '0.7.0 — 高级与复合组件',
    description: '日期选择、级联选择与虚拟滚动进入规划，DataTable 继续保持与轻表格的职责分离。',
    status: '规划中',
    type: 'info',
  },
  {
    id: '0.6.0',
    title: '0.6.0 — 布局与数据展示',
    description: '新增 Stack、Grid、DataTable、Pagination、Breadcrumb 等组件，100+ 行数据可用。',
    status: '已发布',
    type: 'success',
  },
  {
    id: '0.5.0',
    title: '0.5.0 — 扩展性修订',
    description: '补齐浮层受控模式、两种隐藏模式与多目标 TooltipGroup。',
    status: '已发布',
    type: 'default',
  },
]
<\/script>

<template>
  <MList>
    <template #header>
      <span class="demo-hint">组件发布记录</span>
    </template>

    <MListItem
      v-for="release in releases"
      :key="release.id"
      :title="release.title"
      :description="release.description"
    >
      <template #extra>
        <MTag :type="release.type" size="small">{{ release.status }}</MTag>
      </template>
    </MListItem>

    <template #footer>共 {{ releases.length }} 条记录，按版本时间倒序排列。</template>
  </MList>
</template>
`,rx={class:"demo-stack",style:{"max-width":"560px"}},dx=C({__name:"Bordered",setup(e){const t=[{id:"research",title:"需求梳理",description:"确认 Descriptions 的列数、标签宽度与边框模式，不引入额外 Props。"},{id:"design",title:"视觉评审",description:"统一列表条目的间距、分割线与标题层级，确保浅色与深色主题一致。"},{id:"implement",title:"实现与测试",description:"覆盖空内容判定、加载状态、跨列夹取与窄屏降级。"},{id:"docs",title:"文档与示例",description:"示例使用真实数据，API 表格与源码保持同步。"}];return(n,s)=>(v(),y("div",rx,[c(r(oo),{bordered:"",split:!1,size:"large"},{footer:f(()=>[...s[0]||(s[0]=[_("阶段任务按顺序推进，全部完成后统一验收。",-1)])]),default:f(()=>[(v(),y(ie,null,xe(t,o=>c(r(ao),{key:o.id,title:o.title,description:o.description},null,8,["title","description"])),64))]),_:1}),s[1]||(s[1]=g("p",{class:"demo-hint"},' bordered 为整个列表添加边框与圆角，split="false" 关闭条目之间的分割线； 两者可以独立使用。尺寸只改变内边距与字号，不改变结构。 ',-1))]))}}),cx=`<script setup lang="ts">
import { MList, MListItem } from 'anemia-ui'

const milestones = [
  {
    id: 'research',
    title: '需求梳理',
    description: '确认 Descriptions 的列数、标签宽度与边框模式，不引入额外 Props。',
  },
  {
    id: 'design',
    title: '视觉评审',
    description: '统一列表条目的间距、分割线与标题层级，确保浅色与深色主题一致。',
  },
  {
    id: 'implement',
    title: '实现与测试',
    description: '覆盖空内容判定、加载状态、跨列夹取与窄屏降级。',
  },
  {
    id: 'docs',
    title: '文档与示例',
    description: '示例使用真实数据，API 表格与源码保持同步。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MList bordered :split="false" size="large">
      <MListItem
        v-for="milestone in milestones"
        :key="milestone.id"
        :title="milestone.title"
        :description="milestone.description"
      />

      <template #footer>阶段任务按顺序推进，全部完成后统一验收。</template>
    </MList>

    <p class="demo-hint">
      bordered 为整个列表添加边框与圆角，split="false" 关闭条目之间的分割线；
      两者可以独立使用。尺寸只改变内边距与字号，不改变结构。
    </p>
  </div>
</template>
`,ux=`<script setup>
import { MList, MListItem } from 'anemia-ui'
const milestones = [
  {
    id: 'research',
    title: '需求梳理',
    description: '确认 Descriptions 的列数、标签宽度与边框模式，不引入额外 Props。',
  },
  {
    id: 'design',
    title: '视觉评审',
    description: '统一列表条目的间距、分割线与标题层级，确保浅色与深色主题一致。',
  },
  {
    id: 'implement',
    title: '实现与测试',
    description: '覆盖空内容判定、加载状态、跨列夹取与窄屏降级。',
  },
  {
    id: 'docs',
    title: '文档与示例',
    description: '示例使用真实数据，API 表格与源码保持同步。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MList bordered :split="false" size="large">
      <MListItem
        v-for="milestone in milestones"
        :key="milestone.id"
        :title="milestone.title"
        :description="milestone.description"
      />

      <template #footer>阶段任务按顺序推进，全部完成后统一验收。</template>
    </MList>

    <p class="demo-hint">
      bordered 为整个列表添加边框与圆角，split="false" 关闭条目之间的分割线；
      两者可以独立使用。尺寸只改变内边距与字号，不改变结构。
    </p>
  </div>
</template>
`,mx={class:"demo-stack",style:{"max-width":"560px"}},px=C({__name:"Empty",setup(e){const t=[];return(n,s)=>(v(),y("div",mx,[c(r(oo),{"empty-text":"暂无未读通知"},{empty:f(()=>[c(r(us),{title:"没有未读通知",description:"所有消息都已处理完毕，可以稍后再来。"},{action:f(()=>[c(r(R),{size:"small",type:"outline"},{default:f(()=>[...s[0]||(s[0]=[_("刷新",-1)])]),_:1})]),_:1})]),default:f(()=>[(v(),y(ie,null,xe(t,o=>c(r(ao),{key:o.id,title:o.title,description:o.description},null,8,["title","description"])),64))]),_:1}),s[1]||(s[1]=g("p",{class:"demo-hint"}," 空数组经过 v-for 后不会产生任何条目，MList 会识别默认插槽为空并渲染 empty 状态； 上面的 #empty 插槽替换了默认的紧凑空状态。 ",-1))]))}}),fx=`<script setup lang="ts">
import { MButton, MEmpty, MList, MListItem } from 'anemia-ui'

interface Notification {
  id: string
  title: string
  description: string
}

const notifications: Notification[] = []
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MList empty-text="暂无未读通知">
      <MListItem
        v-for="notification in notifications"
        :key="notification.id"
        :title="notification.title"
        :description="notification.description"
      />

      <template #empty>
        <MEmpty title="没有未读通知" description="所有消息都已处理完毕，可以稍后再来。">
          <template #action>
            <MButton size="small" type="outline">刷新</MButton>
          </template>
        </MEmpty>
      </template>
    </MList>

    <p class="demo-hint">
      空数组经过 v-for 后不会产生任何条目，MList 会识别默认插槽为空并渲染 empty 状态； 上面的 #empty
      插槽替换了默认的紧凑空状态。
    </p>
  </div>
</template>
`,vx=`<script setup>
import { MButton, MEmpty, MList, MListItem } from 'anemia-ui'
const notifications = []
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MList empty-text="暂无未读通知">
      <MListItem
        v-for="notification in notifications"
        :key="notification.id"
        :title="notification.title"
        :description="notification.description"
      />

      <template #empty>
        <MEmpty title="没有未读通知" description="所有消息都已处理完毕，可以稍后再来。">
          <template #action>
            <MButton size="small" type="outline">刷新</MButton>
          </template>
        </MEmpty>
      </template>
    </MList>

    <p class="demo-hint">
      空数组经过 v-for 后不会产生任何条目，MList 会识别默认插槽为空并渲染 empty 状态； 上面的 #empty
      插槽替换了默认的紧凑空状态。
    </p>
  </div>
</template>
`,gx={class:"demo-stack",style:{"max-width":"560px"}},bx=C({__name:"Loading",setup(e){const t=z(!0),n=[{id:"sync",title:"同步组件清单",description:"从 registry 生成侧边栏与搜索索引。"},{id:"build",title:"构建文档站",description:"校验示例源码与 API 表格是否一致。"},{id:"deploy",title:"发布预览环境",description:"生成可访问的预览链接并通知设计团队。"}];return(s,o)=>(v(),y("div",gx,[c(r(Dt),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),label:"显示加载状态"},null,8,["modelValue"]),c(r(oo),{loading:!!t.value},{default:f(()=>[(v(),y(ie,null,xe(n,a=>c(r(ao),{key:a.id,title:a.title,description:a.description},null,8,["title","description"])),64))]),_:1},8,["loading"]),o[1]||(o[1]=g("p",{class:"demo-hint"},' loading 时根节点标记 aria-busy="true"，默认使用 MSkeleton 占位并保留视觉隐藏的「加载中」文案； #loading 插槽可以替换占位内容。 ',-1))]))}}),yx=`<script setup lang="ts">
import type { SwitchValue } from 'anemia-ui'
import { MList, MListItem, MSwitch } from 'anemia-ui'
import { ref } from 'vue'

const loading = ref<SwitchValue>(true)

const tasks = [
  { id: 'sync', title: '同步组件清单', description: '从 registry 生成侧边栏与搜索索引。' },
  { id: 'build', title: '构建文档站', description: '校验示例源码与 API 表格是否一致。' },
  { id: 'deploy', title: '发布预览环境', description: '生成可访问的预览链接并通知设计团队。' },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MSwitch v-model="loading" label="显示加载状态" />

    <MList :loading="Boolean(loading)">
      <MListItem
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
      />
    </MList>

    <p class="demo-hint">
      loading 时根节点标记 aria-busy="true"，默认使用 MSkeleton 占位并保留视觉隐藏的「加载中」文案；
      #loading 插槽可以替换占位内容。
    </p>
  </div>
</template>
`,hx=`<script setup>
import { MList, MListItem, MSwitch } from 'anemia-ui'
import { ref } from 'vue'
const loading = ref(true)
const tasks = [
  { id: 'sync', title: '同步组件清单', description: '从 registry 生成侧边栏与搜索索引。' },
  { id: 'build', title: '构建文档站', description: '校验示例源码与 API 表格是否一致。' },
  { id: 'deploy', title: '发布预览环境', description: '生成可访问的预览链接并通知设计团队。' },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MSwitch v-model="loading" label="显示加载状态" />

    <MList :loading="Boolean(loading)">
      <MListItem
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
      />
    </MList>

    <p class="demo-hint">
      loading 时根节点标记 aria-busy="true"，默认使用 MSkeleton 占位并保留视觉隐藏的「加载中」文案；
      #loading 插槽可以替换占位内容。
    </p>
  </div>
</template>
`,Mx={name:"list",category:"data",title:"List 列表",summary:"以语义化 ul / li 展示一组结构化条目，支持标题、描述、附加操作、加载与空状态。",description:"List 是内容列表，不是数据表格：每个条目可以自由组合标题、描述、主体内容与右侧附加操作。条目通过默认插槽由使用方渲染，组件不维护数据源，也不提供选择、排序或虚拟滚动；这些能力应由业务侧组合或等待后续的数据组件。",status:"stable",since:"0.6.0",keywords:["list","列表","条目","加载","空状态"],sections:[{id:"basic",title:"基础用法",description:"header / footer 插槽承载列表级信息，默认插槽中的 MListItem 通过 title、description 与 extra 插槽表达条目内容。",demo:ax,code:ix,codeJs:lx},{id:"loading",title:"加载状态",description:'loading 时根节点标记 aria-busy="true"，默认用 MSkeleton 替换条目并保留视觉隐藏的「加载中」文案；#loading 插槽可替换占位内容。',demo:bx,code:yx,codeJs:hx},{id:"empty",title:"空状态",description:'默认插槽没有可渲染内容时显示空状态：角色为 role="status"，默认渲染紧凑的 MEmpty。#empty 插槽可以替换为自定义内容。',demo:px,code:fx,codeJs:vx},{id:"bordered",title:"边框与分割线",description:'bordered 为整个列表添加边框与圆角，split="false" 关闭条目之间的分割线；两者可以独立使用。',demo:dx,code:cx,codeJs:ux}],api:[{id:"list-api",title:"MList",props:[{name:"bordered",type:"boolean",defaultValue:"false",description:"为整个列表添加边框与圆角。"},{name:"split",type:"boolean",defaultValue:"true",description:"在相邻条目之间显示分割线。"},{name:"loading",type:"boolean",defaultValue:"false",description:"显示加载状态并隐藏条目；根节点设置 aria-busy。"},{name:"emptyText",type:"string",defaultValue:"'暂无数据'",description:"默认空状态文案；#empty 插槽存在时忽略。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"条目内边距与标题 / 描述字号档位。"}],events:[],slots:[{name:"default",type:"—",description:"列表条目，通常是由 v-for 渲染的 MListItem。"},{name:"header",type:"—",description:"列表头部，无论加载或空状态都会渲染。"},{name:"footer",type:"—",description:"列表底部，无论加载或空状态都会渲染。"},{name:"empty",type:"—",description:'替换默认的紧凑空状态；容器仍提供 role="status"。'},{name:"loading",type:"—",description:"替换默认的 MSkeleton 占位内容。"}]},{id:"list-item-api",title:"MListItem",props:[{name:"title",type:"string",defaultValue:"—",description:"条目标题；title 插槽优先。"},{name:"description",type:"string",defaultValue:"—",description:"条目描述；description 插槽优先。"}],events:[],slots:[{name:"default",type:"—",description:"条目主体内容，位于标题与描述下方。"},{name:"title",type:"—",description:"自定义标题内容，可用于徽标或链接。"},{name:"description",type:"—",description:"自定义描述内容。"},{name:"extra",type:"—",description:"条目右侧附加区域，适合状态 Tag 或操作按钮。"}]}],notes:["List 不使用 data / items Prop，条目完全由默认插槽决定。空内容判定会递归展开 Fragment（v-for），忽略注释 vnode 与纯空白文本，因此空数组会正确进入空状态。","空状态依赖插槽中真实存在的 vnode。如果一个自定义组件内部通过 v-if 渲染为空，List 无法感知其最终输出，仍会把它当作有内容。","loading 会替换条目而不是把条目变灰；需要保留数据时不要设置 loading，或使用 #loading 插槽自行组合。","header 与 footer 在加载和空状态下仍然渲染，适合放筛选条件、统计信息或分页入口。",'空状态容器带有 role="status"，默认的 MEmpty 也提供状态语义；使用 #empty 时可以把操作按钮放在这里，但按钮仍需自己的可访问名称。',"尺寸、分割线与边框通过根节点 CSS 变量（--m-list-padding-y、--m-list-padding-x、--m-list-split、--m-list-bordered）传给条目，可用 :deep() 或自定义变量做样式扩展。","分割线只出现在相邻 MListItem 之间，第一项与最后一项不会多出外边框；需要整体外框时使用 bordered。","List 不提供选择、拖拽、虚拟滚动或行操作，条目内的交互请使用真实按钮 / 链接并保证可访问名称。"]},_x={class:"demo-row"},kx=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",_x,[c(r(R),{size:"small",onClick:n[0]||(n[0]=s=>r(Xe).success("已同步"))},{default:f(()=>[...n[4]||(n[4]=[_("成功",-1)])]),_:1}),c(r(R),{size:"small",onClick:n[1]||(n[1]=s=>r(Xe).info("正在刷新"))},{default:f(()=>[...n[5]||(n[5]=[_("信息",-1)])]),_:1}),c(r(R),{size:"small",type:"outline",onClick:n[2]||(n[2]=s=>r(Xe).warning("部分字段未保存"))},{default:f(()=>[...n[6]||(n[6]=[_(" 警告 ",-1)])]),_:1}),c(r(R),{size:"small",type:"danger",onClick:n[3]||(n[3]=s=>r(Xe).error("同步失败"))},{default:f(()=>[...n[7]||(n[7]=[_("错误",-1)])]),_:1})]))}}),wx=`<script setup lang="ts">
import { MButton, message } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="message.success('已同步')">成功</MButton>
    <MButton size="small" @click="message.info('正在刷新')">信息</MButton>
    <MButton size="small" type="outline" @click="message.warning('部分字段未保存')"> 警告 </MButton>
    <MButton size="small" type="danger" @click="message.error('同步失败')">错误</MButton>
  </div>
</template>
`,xx=`<script setup>
import { MButton, message } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="message.success('已同步')">成功</MButton>
    <MButton size="small" @click="message.info('正在刷新')">信息</MButton>
    <MButton size="small" type="outline" @click="message.warning('部分字段未保存')"> 警告 </MButton>
    <MButton size="small" type="danger" @click="message.error('同步失败')">错误</MButton>
  </div>
</template>
`,Bx={class:"demo-row"},Cx=C({__name:"Duration",setup(e){function t(){Xe.show({type:"warning",message:"这条消息不会自动关闭",persistent:!0})}return(n,s)=>(v(),y("div",Bx,[c(r(R),{size:"small",onClick:t},{default:f(()=>[...s[3]||(s[3]=[_("常驻消息",-1)])]),_:1}),c(r(R),{size:"small",type:"outline",onClick:s[0]||(s[0]=o=>r(Xe).info("1.5 秒后关闭",{duration:1500}))},{default:f(()=>[...s[4]||(s[4]=[_(" 自定义时长 ",-1)])]),_:1}),c(r(R),{size:"small",type:"ghost",onClick:s[1]||(s[1]=o=>r(Xe).clear())},{default:f(()=>[...s[5]||(s[5]=[_("清除普通",-1)])]),_:1}),c(r(R),{size:"small",type:"ghost",onClick:s[2]||(s[2]=o=>r(Xe).clearPersistent())},{default:f(()=>[...s[6]||(s[6]=[_("清除常驻",-1)])]),_:1})]))}}),$x=`<script setup lang="ts">
import { MButton, message } from 'anemia-ui'

function persistent(): void {
  message.show({ type: 'warning', message: '这条消息不会自动关闭', persistent: true })
}
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="persistent">常驻消息</MButton>
    <MButton size="small" type="outline" @click="message.info('1.5 秒后关闭', { duration: 1500 })">
      自定义时长
    </MButton>
    <MButton size="small" type="ghost" @click="message.clear()">清除普通</MButton>
    <MButton size="small" type="ghost" @click="message.clearPersistent()">清除常驻</MButton>
  </div>
</template>
`,Tx=`<script setup>
import { MButton, message } from 'anemia-ui'
function persistent() {
  message.show({ type: 'warning', message: '这条消息不会自动关闭', persistent: true })
}
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="persistent">常驻消息</MButton>
    <MButton size="small" type="outline" @click="message.info('1.5 秒后关闭', { duration: 1500 })">
      自定义时长
    </MButton>
    <MButton size="small" type="ghost" @click="message.clear()">清除普通</MButton>
    <MButton size="small" type="ghost" @click="message.clearPersistent()">清除常驻</MButton>
  </div>
</template>
`,Ix={class:"demo-stack"},Vx={class:"demo-row"},Sx={class:"demo-hint"},zx=C({__name:"Limits",setup(e){const{messages:t,queuedMessages:n}=Fd(),s=x(()=>t.value.filter(l=>!l.persistent).length);function o(){for(let l=0;l<10;l+=1)Xe.info(`并发消息 ${l+1}`,{duration:1800+l*400})}function a(){for(let l=0;l<25;l+=1)Xe.info(`边界消息 ${l+1}`,{duration:0})}function i(){Xe.error("紧急：同步失败，请立即检查",{duration:0,priority:"high"})}return(l,d)=>(v(),y("div",Ix,[g("div",Vx,[c(r(R),{size:"small",onClick:o},{default:f(()=>[...d[1]||(d[1]=[_("连续触发 10 条",-1)])]),_:1}),c(r(R),{size:"small",type:"outline",onClick:a},{default:f(()=>[...d[2]||(d[2]=[_("生成 25 条边界消息",-1)])]),_:1}),c(r(R),{size:"small",type:"danger",onClick:i},{default:f(()=>[...d[3]||(d[3]=[_("紧急错误插队",-1)])]),_:1}),c(r(R),{size:"small",type:"ghost",onClick:d[0]||(d[0]=u=>r(Xe).clear())},{default:f(()=>[...d[4]||(d[4]=[_("清空普通消息",-1)])]),_:1})]),g("p",Sx," 当前显示 "+L(s.value)+" 条，等待 "+L(r(n).length)+" 条。默认最多同时显示 5 条，队列上限 20 条；每条关闭后才补充下一条。紧急错误通过 priority: 'high' 插队。 ",1)]))}}),Ax=`<script setup lang="ts">
import { computed } from 'vue'

import { MButton, message, useMessage } from 'anemia-ui'

const { messages, queuedMessages } = useMessage()
const visibleCount = computed(() => messages.value.filter((item) => !item.persistent).length)

function burst(): void {
  for (let index = 0; index < 10; index += 1) {
    // 递增时长便于观察“走一条、进一条”；等待中的消息不会开始倒计时。
    message.info(\`并发消息 \${index + 1}\`, { duration: 1800 + index * 400 })
  }
}

function flood(): void {
  for (let index = 0; index < 25; index += 1) {
    message.info(\`边界消息 \${index + 1}\`, { duration: 0 })
  }
}

function urgent(): void {
  message.error('紧急：同步失败，请立即检查', { duration: 0, priority: 'high' })
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton size="small" @click="burst">连续触发 10 条</MButton>
      <MButton size="small" type="outline" @click="flood">生成 25 条边界消息</MButton>
      <MButton size="small" type="danger" @click="urgent">紧急错误插队</MButton>
      <MButton size="small" type="ghost" @click="message.clear()">清空普通消息</MButton>
    </div>
    <p class="demo-hint">
      当前显示 {{ visibleCount }} 条，等待 {{ queuedMessages.length }} 条。默认最多同时显示 5
      条，队列上限 20 条；每条关闭后才补充下一条。紧急错误通过 priority: 'high' 插队。
    </p>
  </div>
</template>
`,Dx=`<script setup>
import { computed } from 'vue'
import { MButton, message, useMessage } from 'anemia-ui'
const { messages, queuedMessages } = useMessage()
const visibleCount = computed(() => messages.value.filter((item) => !item.persistent).length)
function burst() {
  for (let index = 0; index < 10; index += 1) {
    // 递增时长便于观察“走一条、进一条”；等待中的消息不会开始倒计时。
    message.info(\`并发消息 \${index + 1}\`, { duration: 1800 + index * 400 })
  }
}
function flood() {
  for (let index = 0; index < 25; index += 1) {
    message.info(\`边界消息 \${index + 1}\`, { duration: 0 })
  }
}
function urgent() {
  message.error('紧急：同步失败，请立即检查', { duration: 0, priority: 'high' })
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton size="small" @click="burst">连续触发 10 条</MButton>
      <MButton size="small" type="outline" @click="flood">生成 25 条边界消息</MButton>
      <MButton size="small" type="danger" @click="urgent">紧急错误插队</MButton>
      <MButton size="small" type="ghost" @click="message.clear()">清空普通消息</MButton>
    </div>
    <p class="demo-hint">
      当前显示 {{ visibleCount }} 条，等待 {{ queuedMessages.length }} 条。默认最多同时显示 5
      条，队列上限 20 条；每条关闭后才补充下一条。紧急错误通过 priority: 'high' 插队。
    </p>
  </div>
</template>
`,Ex={class:"demo-stack"},Rx={class:"demo-row"},Px={class:"demo-hint"},Lx=C({__name:"Persistent",setup(e){const{messages:t}=Fd(),n=x(()=>t.value.filter(l=>l.persistent).length),s=x(()=>[...t.value].reverse().find(l=>l.persistent));let o=0;function a(){o+=1,Xe.show({type:"warning",message:`网络已断开，恢复后将自动提示（${o}）`,persistent:!0})}function i(){s.value&&Xe.destroy(s.value.id)}return(l,d)=>(v(),y("div",Ex,[g("div",Rx,[c(r(R),{size:"small",onClick:a},{default:f(()=>[...d[1]||(d[1]=[_("新增常驻消息",-1)])]),_:1}),c(r(R),{size:"small",type:"outline",onClick:i},{default:f(()=>[...d[2]||(d[2]=[_("关闭最近一条常驻",-1)])]),_:1}),c(r(R),{size:"small",type:"ghost",onClick:d[0]||(d[0]=u=>r(Xe).clearPersistent())},{default:f(()=>[...d[3]||(d[3]=[_(" 清除全部常驻 ",-1)])]),_:1})]),g("p",Px," 当前常驻消息："+L(n.value)+" 条。常驻消息不占用普通消息的 5 个名额，也不会自动消失。 ",1)]))}}),Ox=`<script setup lang="ts">
import { computed } from 'vue'

import { MButton, message, useMessage } from 'anemia-ui'

const { messages } = useMessage()
const persistentCount = computed(() => messages.value.filter((item) => item.persistent).length)
const lastPersistent = computed(() => [...messages.value].reverse().find((item) => item.persistent))

let sequence = 0

function addPersistent(): void {
  sequence += 1
  message.show({
    type: 'warning',
    message: \`网络已断开，恢复后将自动提示（\${sequence}）\`,
    persistent: true,
  })
}

function destroyLast(): void {
  if (lastPersistent.value) {
    message.destroy(lastPersistent.value.id)
  }
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton size="small" @click="addPersistent">新增常驻消息</MButton>
      <MButton size="small" type="outline" @click="destroyLast">关闭最近一条常驻</MButton>
      <MButton size="small" type="ghost" @click="message.clearPersistent()"> 清除全部常驻 </MButton>
    </div>
    <p class="demo-hint">
      当前常驻消息：{{ persistentCount }} 条。常驻消息不占用普通消息的 5 个名额，也不会自动消失。
    </p>
  </div>
</template>
`,Fx=`<script setup>
import { computed } from 'vue'
import { MButton, message, useMessage } from 'anemia-ui'
const { messages } = useMessage()
const persistentCount = computed(() => messages.value.filter((item) => item.persistent).length)
const lastPersistent = computed(() => [...messages.value].reverse().find((item) => item.persistent))
let sequence = 0
function addPersistent() {
  sequence += 1
  message.show({
    type: 'warning',
    message: \`网络已断开，恢复后将自动提示（\${sequence}）\`,
    persistent: true,
  })
}
function destroyLast() {
  if (lastPersistent.value) {
    message.destroy(lastPersistent.value.id)
  }
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton size="small" @click="addPersistent">新增常驻消息</MButton>
      <MButton size="small" type="outline" @click="destroyLast">关闭最近一条常驻</MButton>
      <MButton size="small" type="ghost" @click="message.clearPersistent()"> 清除全部常驻 </MButton>
    </div>
    <p class="demo-hint">
      当前常驻消息：{{ persistentCount }} 条。常驻消息不占用普通消息的 5 个名额，也不会自动消失。
    </p>
  </div>
</template>
`,Nx={class:"demo-stack"},Jx=C({__name:"Types",setup(e){function t(){Xe.success("校验通过"),Xe.info("已刷新缓存"),Xe.warning("请求被限流"),Xe.error("无法连接到服务器")}return(n,s)=>(v(),y("div",Nx,[c(r(R),{size:"small",onClick:t},{default:f(()=>[...s[0]||(s[0]=[_("连续显示四种类型",-1)])]),_:1}),s[1]||(s[1]=g("p",{class:"demo-hint"}," 500ms 内相同类型、相同内容的消息只保留一条；最多同时显示 5 条，其余消息排队等待，每条关闭后才补充下一条。 ",-1))]))}}),Gx=`<script setup lang="ts">
import { MButton, message } from 'anemia-ui'

function showAll(): void {
  message.success('校验通过')
  message.info('已刷新缓存')
  message.warning('请求被限流')
  message.error('无法连接到服务器')
}
<\/script>

<template>
  <div class="demo-stack">
    <MButton size="small" @click="showAll">连续显示四种类型</MButton>
    <p class="demo-hint">
      500ms 内相同类型、相同内容的消息只保留一条；最多同时显示 5
      条，其余消息排队等待，每条关闭后才补充下一条。
    </p>
  </div>
</template>
`,Ux=`<script setup>
import { MButton, message } from 'anemia-ui'
function showAll() {
  message.success('校验通过')
  message.info('已刷新缓存')
  message.warning('请求被限流')
  message.error('无法连接到服务器')
}
<\/script>

<template>
  <div class="demo-stack">
    <MButton size="small" @click="showAll">连续显示四种类型</MButton>
    <p class="demo-hint">
      500ms 内相同类型、相同内容的消息只保留一条；最多同时显示 5
      条，其余消息排队等待，每条关闭后才补充下一条。
    </p>
  </div>
</template>
`,jx={name:"message",category:"feedback",title:"Message 消息",summary:"顶部居中的短状态提示，通过命令式 API 触发，适合确认与轻量结果反馈。",description:"Message 与 Toast 共用同一套队列与计时基础设施，但视觉与定位不同：Message 是顶部居中的单行提示，只承载短文本。它默认最多同时显示 5 条，其余消息进入等待队列；每关闭一条才补充下一条，等待期间不会开始倒计时。500ms 内相同类型、相同内容的消息会被合并，常驻消息则不占用普通消息的展示名额。它的定位是“确认已经发生的事”，而不是承载可操作内容。",status:"stable",since:"0.4.0",keywords:["message","消息","提示","顶部","反馈"],sections:[{id:"basic",title:"基础用法",description:"在应用外壳挂载一次 <MMessage />，然后调用 message.success() 等方法。",demo:kx,code:wx,codeJs:xx},{id:"types",title:"四种类型",description:"success / info / warning / error 使用不同图标与语义角色；短时间重复触发会合并为一条。",demo:Jx,code:Gx,codeJs:Ux},{id:"limits",title:"队列与优先级",description:'默认最多同时显示 5 条，其余消息排队等待；每关闭或自动消失一条，下一条才进入展示区。内存队列上限 20 条。priority: "high" 可让错误、警告等紧急消息插到普通等待消息之前；展示区已满时，原本第 5 条普通消息退回等待队列，不会被丢弃。',demo:zx,code:Ax,codeJs:Dx},{id:"persistent",title:"常驻消息",description:"persistent: true 的消息不会自动消失，也不占用普通消息的 5 个展示名额；必须通过 destroy(id) 或 clearPersistent() 手动清除。",demo:Lx,code:Ox,codeJs:Fx},{id:"duration",title:"时长与清除",description:"duration 控制自动关闭时间；message.clear() 只清空普通消息，clearPersistent() 清空常驻消息。",demo:Cx,code:$x,codeJs:Tx}],api:[{id:"message-host-api",title:"MMessage",props:[]},{id:"message-options",title:"MessageOptions",props:[{name:"type",type:"'success' | 'info' | 'warning' | 'error'",defaultValue:"'info'",description:"消息类型，决定图标、语义角色与颜色。"},{name:"message",type:"string",defaultValue:"—",description:"纯文本内容；不支持 HTML 或富内容。"},{name:"duration",type:"number",defaultValue:"3000",description:"自动关闭时间（ms）。0 表示不自动关闭，但仍计入普通消息展示名额；等待中的消息进入展示区后才开始计时。"},{name:"persistent",type:"boolean",defaultValue:"false",description:"设为 true 后不自动关闭，也不占用普通消息的 5 个名额。"},{name:"priority",type:"'normal' | 'high'",defaultValue:"'normal'",description:"high 会插到普通等待消息之前；展示区已满时，原本第 5 条普通消息退回等待队列，稍后再显示。"},{name:"onClose",type:"() => void",defaultValue:"—",description:"消息从队列移除时调用一次，包含自动关闭、手动关闭与清除。"}]},{id:"message-api",title:"message / useMessage",props:[{name:"message.show",type:"(options: MessageOptions | string) => number",defaultValue:"—",description:"入队一条消息并返回 id；字符串等价于 { message }。队列已满且全是常驻消息时返回 0。"},{name:"message.success",type:"(text: string, options?: MessageShortcutOptions) => number",defaultValue:"—",description:"成功消息；info / warning / error 签名相同。"},{name:"message.destroy",type:"(id: number) => void",defaultValue:"—",description:"关闭指定消息；message.close 是同一方法的别名。"},{name:"message.clear",type:"() => void",defaultValue:"—",description:"立即清空所有普通消息（含等待中）并取消对应计时器，保留常驻消息。"},{name:"message.clearPersistent",type:"() => void",defaultValue:"—",description:"立即清空所有常驻消息。"},{name:"message.clearAll",type:"() => void",defaultValue:"—",description:"同时清空普通消息与常驻消息。"},{name:"message.configure",type:"(options: MessageConfig) => void",defaultValue:"—",description:"全局调整 maxCount（默认 5）、maxQueue（默认 20）与默认 duration（默认 3000）。"},{name:"useMessage().messages",type:"Readonly<Ref<MessageItem[]>>",defaultValue:"—",description:"当前显示在页面上的消息，包含常驻消息，不包含等待中的普通消息。"},{name:"useMessage().queuedMessages",type:"Readonly<Ref<MessageItem[]>>",defaultValue:"—",description:"正在等待展示名额的普通消息；它们的自动关闭计时尚未开始。"},{name:"useMessage",type:"() => UseMessageReturn",defaultValue:"—",description:"返回响应式 messages、queuedMessages 与同一组快捷方法。"}]}],notes:["必须在应用外壳挂载一次 <MMessage />；与 Toast 是两个独立队列，可以同时使用。","默认最多同时显示 5 条，其余普通消息进入等待队列；每关闭或自动消失一条，下一条才进入展示区。","等待中的消息不会开始倒计时，进入展示区后才按 duration 计时，因此不会还没显示就过期。","内存队列上限为 20 条（含显示中与等待中）；达到上限时优先移除最早的等待消息，若没有等待消息则移除最早的显示消息。",'priority: "high" 会插到普通等待消息之前；展示区已满时，原本第 5 条普通消息退回等待队列，稍后继续显示。',"500ms 内相同类型、相同内容的消息只保留一条，并刷新它的倒计时，避免狂点造成消息堆积。","常驻消息（persistent: true）不占用普通消息的 5 个名额，必须使用 message.destroy(id) 或 message.clearPersistent() 手动清理。","message.clear() 清空所有普通消息（含等待中）；需要同时清理常驻消息时使用 message.clearAll()。","队列已满且全部是常驻消息时，新消息会被丢弃，并在开发环境控制台给出警告。",'error 使用 role="alert"，其余使用 role="status"；顶部居中定位在小屏幕上仍会限制在视口内。',"消息移动、进入与离开都使用 transform / opacity 过渡，并遵循 prefers-reduced-motion。"]},Wx={class:"demo-stack"},Hx={class:"demo-row"},qx=C({__name:"Basic",setup(e){const t=z(!1);return(n,s)=>(v(),y("div",Wx,[g("div",Hx,[c(r(R),{onClick:s[0]||(s[0]=o=>t.value=!0)},{default:f(()=>[...s[2]||(s[2]=[_("打开对话框",-1)])]),_:1})]),s[4]||(s[4]=g("p",{class:"demo-hint"},"按 Esc、点击关闭按钮或遮罩都可以关闭；关闭后焦点会回到触发按钮。",-1)),c(r(bs),{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value=o),title:"发布更新"},{default:f(()=>[...s[3]||(s[3]=[g("p",null,"对话框会锁定页面滚动，把键盘焦点限制在面板内，并在关闭时归还焦点。",-1),g("p",null,"按 Esc 或点击右上角关闭按钮即可关闭。",-1)])]),_:1},8,["modelValue"])]))}}),Kx=`<script setup lang="ts">
import { MButton, MModal } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开对话框</MButton>
    </div>
    <p class="demo-hint">按 Esc、点击关闭按钮或遮罩都可以关闭；关闭后焦点会回到触发按钮。</p>

    <MModal v-model="open" title="发布更新">
      <p>对话框会锁定页面滚动，把键盘焦点限制在面板内，并在关闭时归还焦点。</p>
      <p>按 Esc 或点击右上角关闭按钮即可关闭。</p>
    </MModal>
  </div>
</template>
`,Qx=`<script setup>
import { MButton, MModal } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开对话框</MButton>
    </div>
    <p class="demo-hint">按 Esc、点击关闭按钮或遮罩都可以关闭；关闭后焦点会回到触发按钮。</p>

    <MModal v-model="open" title="发布更新">
      <p>对话框会锁定页面滚动，把键盘焦点限制在面板内，并在关闭时归还焦点。</p>
      <p>按 Esc 或点击右上角关闭按钮即可关闭。</p>
    </MModal>
  </div>
</template>
`,Yx={class:"demo-stack"},Xx={class:"demo-row"},Zx=C({__name:"Footer",setup(e){const t=z(!1);function n(){t.value=!1}return(s,o)=>(v(),y("div",Yx,[g("div",Xx,[c(r(R),{type:"danger",onClick:o[0]||(o[0]=a=>t.value=!0)},{default:f(()=>[...o[3]||(o[3]=[_("删除项目",-1)])]),_:1})]),c(r(bs),{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=a=>t.value=a),title:"确认删除"},{footer:f(()=>[c(r(R),{type:"ghost",onClick:o[1]||(o[1]=a=>t.value=!1)},{default:f(()=>[...o[4]||(o[4]=[_("取消",-1)])]),_:1}),c(r(R),{type:"danger",onClick:n},{default:f(()=>[...o[5]||(o[5]=[_("删除",-1)])]),_:1})]),default:f(()=>[o[6]||(o[6]=g("p",null,"删除后无法恢复，确定继续吗？",-1)),o[7]||(o[7]=g("p",null,"建议把主要操作放在页脚右侧，并使用明确的动词。",-1))]),_:1},8,["modelValue"])]))}}),e2=`<script setup lang="ts">
import { MButton, MModal } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)

function confirm(): void {
  open.value = false
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="danger" @click="open = true">删除项目</MButton>
    </div>

    <MModal v-model="open" title="确认删除">
      <p>删除后无法恢复，确定继续吗？</p>
      <p>建议把主要操作放在页脚右侧，并使用明确的动词。</p>
      <template #footer>
        <MButton type="ghost" @click="open = false">取消</MButton>
        <MButton type="danger" @click="confirm">删除</MButton>
      </template>
    </MModal>
  </div>
</template>
`,t2=`<script setup>
import { MButton, MModal } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
function confirm() {
  open.value = false
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton type="danger" @click="open = true">删除项目</MButton>
    </div>

    <MModal v-model="open" title="确认删除">
      <p>删除后无法恢复，确定继续吗？</p>
      <p>建议把主要操作放在页脚右侧，并使用明确的动词。</p>
      <template #footer>
        <MButton type="ghost" @click="open = false">取消</MButton>
        <MButton type="danger" @click="confirm">删除</MButton>
      </template>
    </MModal>
  </div>
</template>
`,n2={class:"demo-stack"},s2=C({__name:"HideMode",setup(e){const t=z(!1),n=z("");return(s,o)=>(v(),y("div",n2,[c(r(R),{size:"small",onClick:o[0]||(o[0]=a=>t.value=!0)},{default:f(()=>[...o[4]||(o[4]=[_("打开并输入",-1)])]),_:1}),c(r(bs),{modelValue:t.value,"onUpdate:modelValue":o[3]||(o[3]=a=>t.value=a),"hide-mode":"display",title:"保留内部状态"},{footer:f(()=>[c(r(R),{size:"small",onClick:o[2]||(o[2]=a=>t.value=!1)},{default:f(()=>[...o[5]||(o[5]=[_("关闭",-1)])]),_:1})]),default:f(()=>[o[6]||(o[6]=g("p",{class:"demo-hint"},"关闭后再次打开，下面的输入内容仍然保留。",-1)),c(r(je),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),placeholder:"输入一些内容后关闭对话框"},null,8,["modelValue"])]),_:1},8,["modelValue"])]))}}),o2=`<script setup lang="ts">
import { MButton, MInput, MModal } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
const draft = ref('')
<\/script>

<template>
  <div class="demo-stack">
    <MButton size="small" @click="open = true">打开并输入</MButton>

    <MModal v-model="open" hide-mode="display" title="保留内部状态">
      <p class="demo-hint">关闭后再次打开，下面的输入内容仍然保留。</p>
      <MInput v-model="draft" placeholder="输入一些内容后关闭对话框" />
      <template #footer>
        <MButton size="small" @click="open = false">关闭</MButton>
      </template>
    </MModal>
  </div>
</template>
`,a2=`<script setup>
import { MButton, MInput, MModal } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
const draft = ref('')
<\/script>

<template>
  <div class="demo-stack">
    <MButton size="small" @click="open = true">打开并输入</MButton>

    <MModal v-model="open" hide-mode="display" title="保留内部状态">
      <p class="demo-hint">关闭后再次打开，下面的输入内容仍然保留。</p>
      <MInput v-model="draft" placeholder="输入一些内容后关闭对话框" />
      <template #footer>
        <MButton size="small" @click="open = false">关闭</MButton>
      </template>
    </MModal>
  </div>
</template>
`,i2={class:"demo-stack"},l2={class:"demo-row"},r2=C({__name:"Locked",setup(e){const t=z(!1);return(n,s)=>(v(),y("div",i2,[g("div",l2,[c(r(R),{onClick:s[0]||(s[0]=o=>t.value=!0)},{default:f(()=>[...s[3]||(s[3]=[_("打开不可关闭对话框",-1)])]),_:1})]),c(r(bs),{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=o=>t.value=o),title:"完成初始化",closable:!1,"mask-closable":!1},{footer:f(()=>[c(r(R),{onClick:s[1]||(s[1]=o=>t.value=!1)},{default:f(()=>[...s[4]||(s[4]=[_("我已了解",-1)])]),_:1})]),default:f(()=>[s[5]||(s[5]=g("p",null,"closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。",-1)),s[6]||(s[6]=g("p",null,"这种对话框需要用户明确完成页脚中的操作，因此必须自行提供退出路径。",-1))]),_:1},8,["modelValue"])]))}}),d2=`<script setup lang="ts">
import { MButton, MModal } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开不可关闭对话框</MButton>
    </div>

    <MModal v-model="open" title="完成初始化" :closable="false" :mask-closable="false">
      <p>closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。</p>
      <p>这种对话框需要用户明确完成页脚中的操作，因此必须自行提供退出路径。</p>
      <template #footer>
        <MButton @click="open = false">我已了解</MButton>
      </template>
    </MModal>
  </div>
</template>
`,c2=`<script setup>
import { MButton, MModal } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton @click="open = true">打开不可关闭对话框</MButton>
    </div>

    <MModal v-model="open" title="完成初始化" :closable="false" :mask-closable="false">
      <p>closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。</p>
      <p>这种对话框需要用户明确完成页脚中的操作，因此必须自行提供退出路径。</p>
      <template #footer>
        <MButton @click="open = false">我已了解</MButton>
      </template>
    </MModal>
  </div>
</template>
`,u2={class:"demo-stack"},m2={class:"demo-row"},p2=C({__name:"Sizes",setup(e){const t=z(!1),n=z("medium"),s=["small","medium","large"];function o(a){n.value=a,t.value=!0}return(a,i)=>(v(),y("div",u2,[g("div",m2,[(v(),y(ie,null,xe(s,l=>c(r(R),{key:l,type:"outline",onClick:d=>o(l)},{default:f(()=>[_(L(l),1)]),_:2},1032,["onClick"])),64))]),c(r(bs),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=l=>t.value=l),size:n.value,title:`${n.value} 对话框`},{default:f(()=>[...i[1]||(i[1]=[g("p",null,"尺寸只影响面板的最大宽度，移动端仍然保持 100% 宽度与安全边距。",-1)])]),_:1},8,["modelValue","size","title"])]))}}),f2=`<script setup lang="ts">
import { MButton, MModal, type ModalSize } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
const size = ref<ModalSize>('medium')
const sizes: ModalSize[] = ['small', 'medium', 'large']

function show(value: ModalSize): void {
  size.value = value
  open.value = true
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton v-for="item in sizes" :key="item" type="outline" @click="show(item)">
        {{ item }}
      </MButton>
    </div>

    <MModal v-model="open" :size="size" :title="\`\${size} 对话框\`">
      <p>尺寸只影响面板的最大宽度，移动端仍然保持 100% 宽度与安全边距。</p>
    </MModal>
  </div>
</template>
`,v2=`<script setup>
import { MButton, MModal } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
const size = ref('medium')
const sizes = ['small', 'medium', 'large']
function show(value) {
  size.value = value
  open.value = true
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton v-for="item in sizes" :key="item" type="outline" @click="show(item)">
        {{ item }}
      </MButton>
    </div>

    <MModal v-model="open" :size="size" :title="\`\${size} 对话框\`">
      <p>尺寸只影响面板的最大宽度，移动端仍然保持 100% 宽度与安全边距。</p>
    </MModal>
  </div>
</template>
`,g2={name:"modal",category:"overlay",title:"Modal 对话框",summary:"带遮罩的模态对话框，内置焦点限制、焦点归还、滚动锁定与层级管理。",description:"对话框用于承载需要用户专注处理的短流程。MModal 由统一的 Overlay 基础设施驱动：所有浮层共享层级栈、Escape 归属、滚动锁定与焦点管理，因此嵌套对话框时只有最上层响应关闭操作。",status:"stable",since:"0.2.0",keywords:["modal","dialog","对话框","弹窗","焦点","overlay"],sections:[{id:"basic",title:"基础用法",description:"v-model 控制显隐；默认支持 Esc、关闭按钮与遮罩关闭，并把焦点归还给触发元素。",demo:qx,code:Kx,codeJs:Qx},{id:"footer",title:"页脚操作",description:"footer 插槽用于放置取消与确认操作，建议主要操作位于右侧并使用动词。",demo:Zx,code:e2,codeJs:t2},{id:"sizes",title:"尺寸",description:"small / medium / large 只改变面板最大宽度，移动端始终保持安全边距。",demo:p2,code:f2,codeJs:v2},{id:"locked",title:"受控关闭",description:"closable 控制关闭按钮与 Esc，maskClosable 控制遮罩；关闭时必须由业务提供明确的退出路径。",demo:r2,code:d2,codeJs:c2},{id:"hide-mode",title:"保留内部状态",description:'hide-mode="display" 关闭后保留 DOM 与表单状态；默认 unmount 会销毁内容并在下次打开时重建。',demo:s2,code:o2,codeJs:a2}],api:[{id:"modal-api",title:"MModal",props:[{name:"modelValue",type:"boolean",defaultValue:"false",description:"对话框是否可见，用于 v-model。"},{name:"title",type:"string",defaultValue:"—",description:"标题文本；默认插槽 header 存在时不渲染。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"面板最大宽度档位。"},{name:"closable",type:"boolean",defaultValue:"true",description:"显示关闭按钮，并允许 Esc 关闭。"},{name:"maskClosable",type:"boolean",defaultValue:"true",description:"允许按下遮罩关闭。"},{name:"lockScroll",type:"boolean",defaultValue:"true",description:"打开时锁定 body 滚动，关闭时恢复。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留对话框并切换 display:none；unmount 销毁子树。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有 title 或使用自定义 header 时的无障碍名称。"},{name:"id",type:"string",defaultValue:"—",description:"对话框面板 id。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求关闭时触发，用于 v-model。"},{name:"close",type:"(reason: 'close-button' | 'mask' | 'escape', nativeEvent?: Event) => void",description:"关闭请求的来源说明。"},{name:"opened",type:"() => void",description:"进入过渡结束后触发。"},{name:"closed",type:"() => void",description:"离开过渡结束后触发。"}],slots:[{name:"default",type:"—",description:"对话框正文。"},{name:"header",type:"—",description:"自定义头部；提供时请同时提供 ariaLabel。"},{name:"footer",type:"—",description:"页脚操作区。"}]}],notes:["对话框通过 Teleport 渲染到 body，因此不会受到父级 overflow 或 transform 的裁剪。","组件是受控的：收到关闭请求时只发出 update:modelValue 与 close，是否关闭由父级决定。","打开时焦点进入面板，Tab / Shift+Tab 被限制在面板内；关闭后焦点归还给打开前的元素。","同一时间只有最上层的 Overlay 响应 Esc 与外部点击，嵌套对话框不会被一次关闭两个。","closable 为 false 时必须自行提供关闭入口，否则键盘用户无法退出。","自定义 header 时默认标题不再渲染，请通过 ariaLabel 提供可访问名称。",'hide-mode="display" 适合需要保留表单输入或滚动位置的对话框；默认 unmount 会销毁内部状态。']},b2={class:"demo-stack"},y2={class:"demo-hint"},h2=C({__name:"Basic",setup(e){const t=z(1);return(n,s)=>(v(),y("div",b2,[c(r(qn),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),min:1,max:20,"aria-label":"商品数量",placeholder:"请输入数量"},null,8,["modelValue"]),g("p",y2,"当前数量："+L(t.value??"空")+"。达到上下限后对应按钮会被禁用。",1)]))}}),M2=`<script setup lang="ts">
import { MNumberInput } from 'anemia-ui'
import { ref } from 'vue'

const quantity = ref<number | null>(1)
<\/script>

<template>
  <div class="demo-stack">
    <MNumberInput
      v-model="quantity"
      :min="1"
      :max="20"
      aria-label="商品数量"
      placeholder="请输入数量"
    />
    <p class="demo-hint">当前数量：{{ quantity ?? '空' }}。达到上下限后对应按钮会被禁用。</p>
  </div>
</template>
`,_2=`<script setup>
import { MNumberInput } from 'anemia-ui'
import { ref } from 'vue'
const quantity = ref(1)
<\/script>

<template>
  <div class="demo-stack">
    <MNumberInput
      v-model="quantity"
      :min="1"
      :max="20"
      aria-label="商品数量"
      placeholder="请输入数量"
    />
    <p class="demo-hint">当前数量：{{ quantity ?? '空' }}。达到上下限后对应按钮会被禁用。</p>
  </div>
</template>
`,k2={class:"demo-stack"},w2={class:"demo-hint"},x2=C({__name:"Precision",setup(e){const t=z(9.9);return(n,s)=>(v(),y("div",k2,[c(r(qn),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),min:0,step:.01,precision:2,"aria-label":"价格",placeholder:"0.00"},null,8,["modelValue"]),g("p",w2," 当前价格："+L(t.value??"空")+"。步进与展示都按两位小数处理，避免浮点误差。 ",1)]))}}),B2=`<script setup lang="ts">
import { MNumberInput } from 'anemia-ui'
import { ref } from 'vue'

const price = ref<number | null>(9.9)
<\/script>

<template>
  <div class="demo-stack">
    <MNumberInput
      v-model="price"
      :min="0"
      :step="0.01"
      :precision="2"
      aria-label="价格"
      placeholder="0.00"
    />
    <p class="demo-hint">
      当前价格：{{ price ?? '空' }}。步进与展示都按两位小数处理，避免浮点误差。
    </p>
  </div>
</template>
`,C2=`<script setup>
import { MNumberInput } from 'anemia-ui'
import { ref } from 'vue'
const price = ref(9.9)
<\/script>

<template>
  <div class="demo-stack">
    <MNumberInput
      v-model="price"
      :min="0"
      :step="0.01"
      :precision="2"
      aria-label="价格"
      placeholder="0.00"
    />
    <p class="demo-hint">
      当前价格：{{ price ?? '空' }}。步进与展示都按两位小数处理，避免浮点误差。
    </p>
  </div>
</template>
`,$2={class:"demo-stack"},T2=C({__name:"States",setup(e){const t=z(30),n=z(3),s=z(5);return(o,a)=>(v(),y("div",$2,[c(r(qn),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),max:10,"error-message":"数量不能超过 10","aria-label":"错误示例"},null,8,["modelValue"]),c(r(qn),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),disabled:"","aria-label":"禁用示例"},null,8,["modelValue"]),c(r(qn),{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=i=>s.value=i),readonly:"","aria-label":"只读示例"},null,8,["modelValue"])]))}}),I2=`<script setup lang="ts">
import { MNumberInput } from 'anemia-ui'
import { ref } from 'vue'

const invalid = ref<number | null>(30)
const disabled = ref<number | null>(3)
const readonly = ref<number | null>(5)
<\/script>

<template>
  <div class="demo-stack">
    <MNumberInput
      v-model="invalid"
      :max="10"
      error-message="数量不能超过 10"
      aria-label="错误示例"
    />

    <MNumberInput v-model="disabled" disabled aria-label="禁用示例" />

    <MNumberInput v-model="readonly" readonly aria-label="只读示例" />
  </div>
</template>
`,V2=`<script setup>
import { MNumberInput } from 'anemia-ui'
import { ref } from 'vue'
const invalid = ref(30)
const disabled = ref(3)
const readonly = ref(5)
<\/script>

<template>
  <div class="demo-stack">
    <MNumberInput
      v-model="invalid"
      :max="10"
      error-message="数量不能超过 10"
      aria-label="错误示例"
    />

    <MNumberInput v-model="disabled" disabled aria-label="禁用示例" />

    <MNumberInput v-model="readonly" readonly aria-label="只读示例" />
  </div>
</template>
`,S2={name:"number-input",category:"basic",title:"NumberInput 数字输入",summary:"输入数字，支持步进、上下限、精度、键盘调整、错误状态与空值。",description:'数字输入用于收集数值。组件在文本输入之上提供数值解析、步进、范围限制与精度处理，并通过 role="spinbutton" 暴露可访问的数值语义；空值使用 null 表示。',status:"stable",since:"0.3.0",keywords:["number","number-input","数字","步进","spinbutton","表单"],sections:[{id:"basic",title:"基础用法",description:"v-model 绑定 number | null，通过 min / max 限制范围。",demo:h2,code:M2,codeJs:_2},{id:"precision",title:"步进与精度",description:"precision 省略时从 step 推导；步进与失焦都按精度取整，避免浮点误差。",demo:x2,code:B2,codeJs:C2},{id:"states",title:"错误、禁用与只读",description:"errorMessage 同时设置 aria-invalid 与 aria-describedby；禁用阻止交互，只读仍可聚焦与复制。",demo:T2,code:I2,codeJs:V2}],api:[{id:"number-input-api",title:"MNumberInput",props:[{name:"modelValue",type:"number | null",defaultValue:"null",description:"绑定的数值；null 表示空值。"},{name:"min",type:"number",defaultValue:"—",description:"允许的最小值，失焦与步进时生效。"},{name:"max",type:"number",defaultValue:"—",description:"允许的最大值，失焦与步进时生效。"},{name:"step",type:"number",defaultValue:"1",description:"按钮与方向键的步进值。"},{name:"precision",type:"number",defaultValue:"从 step 推导",description:"展示与取整的小数位数，最大 20。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"尺寸档位。"},{name:"placeholder",type:"string",defaultValue:"—",description:"占位文本。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态，阻止输入、步进与 v-model 更新。"},{name:"readonly",type:"boolean",defaultValue:"false",description:"只读状态，允许聚焦与复制但不接受修改。"},{name:"controls",type:"boolean",defaultValue:"true",description:"是否显示增加 / 减少按钮。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误视觉状态。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误说明，同时用于 aria-describedby。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"id",type:"string",defaultValue:"—",description:"原生 input id，缺省时自动生成。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有可见标签时的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: number | null) => void",description:"输入、步进或清空时触发，用于 v-model。"},{name:"change",type:"(value: number | null, nativeEvent?: Event) => void",description:"失焦并完成规范化后触发。"},{name:"focus",type:"(nativeEvent: FocusEvent) => void",description:"聚焦时触发。"},{name:"blur",type:"(nativeEvent: FocusEvent) => void",description:"失焦时触发。"}]}],notes:["空值统一使用 null，而不是空字符串或 0；父级需要自己决定空值的业务含义。","输入过程中允许中间态（例如负号、小数点），失焦时才会取整并夹取到 min / max。","precision 省略时由 step 的小数位推导，例如 step=0.01 对应两位小数。",'role="spinbutton" 与 aria-valuenow / min / max 由组件提供；没有可见标签时请传 ariaLabel。',"当前不提供千分位、本地化数字格式或长按连续步进；这些属于后续输入增强。"]},z2={class:"demo-stack"},A2={class:"demo-hint"},D2=C({__name:"Basic",setup(e){const t=z(1);return(n,s)=>(v(),y("div",z2,[c(r(io),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),total:120},null,8,["modelValue"]),g("p",A2," 当前第 "+L(t.value)+" 页。页码按钮是原生 button，可用 Tab 聚焦、Enter / Space 切换。 ",1)]))}}),E2=`<script setup lang="ts">
import { MPagination } from 'anemia-ui'
import { ref } from 'vue'

const page = ref(1)
<\/script>

<template>
  <div class="demo-stack">
    <MPagination v-model="page" :total="120" />
    <p class="demo-hint">
      当前第 {{ page }} 页。页码按钮是原生 button，可用 Tab 聚焦、Enter / Space 切换。
    </p>
  </div>
</template>
`,R2=`<script setup>
import { MPagination } from 'anemia-ui'
import { ref } from 'vue'
const page = ref(1)
<\/script>

<template>
  <div class="demo-stack">
    <MPagination v-model="page" :total="120" />
    <p class="demo-hint">
      当前第 {{ page }} 页。页码按钮是原生 button，可用 Tab 聚焦、Enter / Space 切换。
    </p>
  </div>
</template>
`,P2={class:"demo-stack"},L2={class:"demo-field"},O2=120,F2=C({__name:"Composition",setup(e){const t=z(1),n=z(10),s=[{label:"10 条 / 页",value:10},{label:"20 条 / 页",value:20},{label:"50 条 / 页",value:50}];function o(){t.value=1}return(a,i)=>(v(),y("div",P2,[g("div",L2,[i[2]||(i[2]=g("span",{class:"demo-label"},"每页条数",-1)),c(r(qt),{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l),options:s,"aria-label":"每页条数",onChange:o},null,8,["modelValue"])]),c(r(io),{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=l=>t.value=l),total:O2,"page-size":n.value},null,8,["modelValue","page-size"]),i[3]||(i[3]=g("p",{class:"demo-hint"}," Pagination 刻意不内置每页条数选择，避免导航组件依赖浮层；使用方用 MSelect 与 page-size 组合，并在每页条数变化时把页码重置到第 1 页。 ",-1))]))}}),N2=`<script setup lang="ts">
import { MPagination, MSelect } from 'anemia-ui'
import { ref } from 'vue'

const total = 120
const page = ref(1)
const pageSize = ref(10)
const pageSizeOptions = [
  { label: '10 条 / 页', value: 10 },
  { label: '20 条 / 页', value: 20 },
  { label: '50 条 / 页', value: 50 },
]

function handlePageSizeChange(): void {
  page.value = 1
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">每页条数</span>
      <MSelect
        v-model="pageSize"
        :options="pageSizeOptions"
        aria-label="每页条数"
        @change="handlePageSizeChange"
      />
    </div>

    <MPagination v-model="page" :total="total" :page-size="pageSize" />

    <p class="demo-hint">
      Pagination 刻意不内置每页条数选择，避免导航组件依赖浮层；使用方用 MSelect 与 page-size
      组合，并在每页条数变化时把页码重置到第 1 页。
    </p>
  </div>
</template>
`,J2=`<script setup>
import { MPagination, MSelect } from 'anemia-ui'
import { ref } from 'vue'
const total = 120
const page = ref(1)
const pageSize = ref(10)
const pageSizeOptions = [
  { label: '10 条 / 页', value: 10 },
  { label: '20 条 / 页', value: 20 },
  { label: '50 条 / 页', value: 50 },
]
function handlePageSizeChange() {
  page.value = 1
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">每页条数</span>
      <MSelect
        v-model="pageSize"
        :options="pageSizeOptions"
        aria-label="每页条数"
        @change="handlePageSizeChange"
      />
    </div>

    <MPagination v-model="page" :total="total" :page-size="pageSize" />

    <p class="demo-hint">
      Pagination 刻意不内置每页条数选择，避免导航组件依赖浮层；使用方用 MSelect 与 page-size
      组合，并在每页条数变化时把页码重置到第 1 页。
    </p>
  </div>
</template>
`,G2={class:"demo-stack"},U2=C({__name:"Disabled",setup(e){const t=z(3);return(n,s)=>(v(),y("div",G2,[c(r(io),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),total:120,disabled:""},null,8,["modelValue"]),s[1]||(s[1]=g("p",{class:"demo-hint"}," disabled 会禁用上一页、下一页与全部页码按钮，根容器同时带上 is-disabled；当前页仍保留视觉标记。 ",-1))]))}}),j2=`<script setup lang="ts">
import { MPagination } from 'anemia-ui'
import { ref } from 'vue'

const page = ref(3)
<\/script>

<template>
  <div class="demo-stack">
    <MPagination v-model="page" :total="120" disabled />
    <p class="demo-hint">
      disabled 会禁用上一页、下一页与全部页码按钮，根容器同时带上
      is-disabled；当前页仍保留视觉标记。
    </p>
  </div>
</template>
`,W2=`<script setup>
import { MPagination } from 'anemia-ui'
import { ref } from 'vue'
const page = ref(3)
<\/script>

<template>
  <div class="demo-stack">
    <MPagination v-model="page" :total="120" disabled />
    <p class="demo-hint">
      disabled 会禁用上一页、下一页与全部页码按钮，根容器同时带上
      is-disabled；当前页仍保留视觉标记。
    </p>
  </div>
</template>
`,H2={class:"demo-stack"},q2=C({__name:"Total",setup(e){const t=z(1);return(n,s)=>(v(),y("div",H2,[c(r(io),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),total:120,"show-total":""},{total:f(({total:o,pageCount:a,range:i})=>[_(" 第 "+L(i[0])+"–"+L(i[1])+" 条 / 共 "+L(o)+" 条 · 共 "+L(a)+" 页 ",1)]),_:1},8,["modelValue"]),s[1]||(s[1]=g("p",{class:"demo-hint"}," show-total 渲染总数摘要，默认文案为「共 120 条」；#total 作用域插槽可获得 total、pageCount 与当前页的 range。 ",-1))]))}}),K2=`<script setup lang="ts">
import { MPagination } from 'anemia-ui'
import { ref } from 'vue'

const page = ref(1)
<\/script>

<template>
  <div class="demo-stack">
    <MPagination v-model="page" :total="120" show-total>
      <template #total="{ total, pageCount, range }">
        第 {{ range[0] }}–{{ range[1] }} 条 / 共 {{ total }} 条 · 共 {{ pageCount }} 页
      </template>
    </MPagination>
    <p class="demo-hint">
      show-total 渲染总数摘要，默认文案为「共 120 条」；#total 作用域插槽可获得 total、pageCount
      与当前页的 range。
    </p>
  </div>
</template>
`,Q2=`<script setup>
import { MPagination } from 'anemia-ui'
import { ref } from 'vue'
const page = ref(1)
<\/script>

<template>
  <div class="demo-stack">
    <MPagination v-model="page" :total="120" show-total>
      <template #total="{ total, pageCount, range }">
        第 {{ range[0] }}–{{ range[1] }} 条 / 共 {{ total }} 条 · 共 {{ pageCount }} 页
      </template>
    </MPagination>
    <p class="demo-hint">
      show-total 渲染总数摘要，默认文案为「共 120 条」；#total 作用域插槽可获得 total、pageCount
      与当前页的 range。
    </p>
  </div>
</template>
`,Y2={name:"pagination",category:"navigation",title:"Pagination 分页",summary:"在分页数据之间导航，页码按需省略，提供总数摘要插槽与完整的键盘可达性。",description:"Pagination 只负责页码导航：根据 total 与 pageSize 计算总页数，用 v-model 绑定当前页，超出范围的页码只做视觉夹取。组件刻意不内置每页条数选择，避免导航组件依赖浮层基础设施；需要时请与 MSelect 组合，见下方示例。",status:"stable",since:"0.6.0",keywords:["pagination","分页","页码","翻页","导航"],sections:[{id:"basic",title:"基础用法",description:"提供 total 并用 v-model 绑定当前页；页码按钮点击后会触发 change。",demo:D2,code:E2,codeJs:R2},{id:"total",title:"总数摘要",description:"show-total 渲染默认摘要；#total 作用域插槽可获得 total、pageCount 与 range，用于自定义文案。",demo:q2,code:K2,codeJs:Q2},{id:"composition",title:"与 Select 组合",description:"每页条数选择不是 Pagination 的职责；用 MSelect 绑定 pageSize，并在变化时重置页码。",demo:F2,code:N2,codeJs:J2},{id:"disabled",title:"禁用状态",description:"disabled 会禁用全部按钮并给根容器加上 is-disabled，但仍保留当前页的视觉标记。",demo:U2,code:j2,codeJs:W2}],api:[{id:"pagination-api",title:"MPagination",props:[{name:"total",type:"number",defaultValue:"—",description:"数据总数，用于计算总页数。"},{name:"pageSize",type:"number",defaultValue:"10",description:"每页条数；组件不会渲染每页条数选择器。"},{name:"modelValue",type:"number",defaultValue:"1",description:"当前页，1 基；用 v-model 绑定。"},{name:"siblingCount",type:"number",defaultValue:"1",description:"当前页两侧各显示的页码数量。"},{name:"showTotal",type:"boolean",defaultValue:"false",description:"是否渲染总数摘要；可用 #total 插槽替换内容。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用上一页、下一页与全部页码按钮。"},{name:"ariaLabel",type:"string",defaultValue:"'分页'",description:"nav 的无障碍名称。"}],events:[{name:"update:modelValue",type:"(page: number) => void",description:"点击可用页码、上一页或下一页时触发，用于 v-model。"},{name:"change",type:"(page: number) => void",description:"页码变化时触发，与 update:modelValue 同时触发。"}],slots:[{name:"total",type:"{ total: number; pageCount: number; range: [number, number] }",description:"showTotal 为 true 时替换总数摘要，range 为当前页的首尾条目序号。"}]}],notes:["Pagination 不内置每页条数选择：需要时用 MSelect 与 pageSize 组合（见示例），避免导航组件依赖浮层与 Select。","modelValue 超出范围时只做视觉夹取，不会自动 emit 修正值；受控场景请在使用方保证页码合法。","当 total 为 0 时按 1 页渲染，避免出现空白的导航区域；总页数始终至少为 1。",'当前页按钮带 aria-current="page"，上一页、下一页与页码按钮都有可访问名称，可用 Tab 聚焦并用 Enter / Space 触发。',"根容器使用 flex-wrap: wrap，窄屏下换行而不是让页面产生横向滚动。","页码间隔大于 1 时插入省略号；省略号是 aria-hidden 的 span，不可聚焦。"]},X2={class:"demo-row",style:{"margin-top":"12px"}},Z2=C({__name:"Basic",setup(e){return(t,n)=>(v(),we(r(ms),{title:"筛选条件","aria-label":"筛选条件"},{trigger:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[0]||(n[0]=[_("打开筛选",-1)])]),_:1})]),default:f(()=>[n[3]||(n[3]=g("p",null,"当前只显示最近 7 天的记录。",-1)),g("div",X2,[c(r(qe),{size:"small"},{default:f(()=>[...n[1]||(n[1]=[_("近 7 天",-1)])]),_:1}),c(r(qe),{size:"small",type:"success"},{default:f(()=>[...n[2]||(n[2]=[_("已启用",-1)])]),_:1})])]),_:1}))}}),eB=`<script setup lang="ts">
import { MButton, MPopover, MTag } from 'anemia-ui'
<\/script>

<template>
  <MPopover title="筛选条件" aria-label="筛选条件">
    <template #trigger>
      <MButton size="small">打开筛选</MButton>
    </template>

    <p>当前只显示最近 7 天的记录。</p>
    <div class="demo-row" style="margin-top: 12px">
      <MTag size="small">近 7 天</MTag>
      <MTag size="small" type="success">已启用</MTag>
    </div>
  </MPopover>
</template>
`,tB=`<script setup>
import { MButton, MPopover, MTag } from 'anemia-ui'
<\/script>

<template>
  <MPopover title="筛选条件" aria-label="筛选条件">
    <template #trigger>
      <MButton size="small">打开筛选</MButton>
    </template>

    <p>当前只显示最近 7 天的记录。</p>
    <div class="demo-row" style="margin-top: 12px">
      <MTag size="small">近 7 天</MTag>
      <MTag size="small" type="success">已启用</MTag>
    </div>
  </MPopover>
</template>
`,nB=C({__name:"Hover",setup(e){return(t,n)=>(v(),we(r(ms),{trigger:"hover",placement:"bottom",title:"悬停打开","aria-label":"悬停浮层"},{trigger:f(()=>[c(r(R),{size:"small",type:"ghost"},{default:f(()=>[...n[0]||(n[0]=[_("悬停查看",-1)])]),_:1})]),default:f(()=>[n[1]||(n[1]=g("p",null,"移入触发器打开，移出后短暂延迟关闭；移入浮层会保持打开。",-1))]),_:1}))}}),sB=`<script setup lang="ts">
import { MButton, MPopover } from 'anemia-ui'
<\/script>

<template>
  <MPopover trigger="hover" placement="bottom" title="悬停打开" aria-label="悬停浮层">
    <template #trigger>
      <MButton size="small" type="ghost">悬停查看</MButton>
    </template>
    <p>移入触发器打开，移出后短暂延迟关闭；移入浮层会保持打开。</p>
  </MPopover>
</template>
`,oB=`<script setup>
import { MButton, MPopover } from 'anemia-ui'
<\/script>

<template>
  <MPopover trigger="hover" placement="bottom" title="悬停打开" aria-label="悬停浮层">
    <template #trigger>
      <MButton size="small" type="ghost">悬停查看</MButton>
    </template>
    <p>移入触发器打开，移出后短暂延迟关闭；移入浮层会保持打开。</p>
  </MPopover>
</template>
`,aB={class:"demo-stack"},iB=C({__name:"Manual",setup(e){const t=z(!1);return(n,s)=>(v(),y("div",aB,[c(r(ms),{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value=o),trigger:"manual",title:"受控气泡","hide-mode":"display"},{trigger:f(()=>[c(r(R),{type:"outline",size:"small"},{default:f(()=>[...s[3]||(s[3]=[_("触发器（不自动打开）",-1)])]),_:1})]),footer:f(()=>[c(r(R),{size:"small",onClick:s[0]||(s[0]=o=>t.value=!1)},{default:f(()=>[...s[4]||(s[4]=[_("知道了",-1)])]),_:1})]),default:f(()=>[s[5]||(s[5]=g("p",{class:"demo-hint"},"打开状态完全由外部按钮控制，Escape 仍会请求关闭。",-1))]),_:1},8,["modelValue"]),c(r(R),{size:"small",onClick:s[2]||(s[2]=o=>t.value=!t.value)},{default:f(()=>[_(L(t.value?"关闭气泡":"打开气泡"),1)]),_:1})]))}}),lB=`<script setup lang="ts">
import { MButton, MPopover } from 'anemia-ui'
import { ref } from 'vue'

const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <MPopover v-model="open" trigger="manual" title="受控气泡" hide-mode="display">
      <template #trigger>
        <MButton type="outline" size="small">触发器（不自动打开）</MButton>
      </template>

      <p class="demo-hint">打开状态完全由外部按钮控制，Escape 仍会请求关闭。</p>

      <template #footer>
        <MButton size="small" @click="open = false">知道了</MButton>
      </template>
    </MPopover>

    <MButton size="small" @click="open = !open">
      {{ open ? '关闭气泡' : '打开气泡' }}
    </MButton>
  </div>
</template>
`,rB=`<script setup>
import { MButton, MPopover } from 'anemia-ui'
import { ref } from 'vue'
const open = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <MPopover v-model="open" trigger="manual" title="受控气泡" hide-mode="display">
      <template #trigger>
        <MButton type="outline" size="small">触发器（不自动打开）</MButton>
      </template>

      <p class="demo-hint">打开状态完全由外部按钮控制，Escape 仍会请求关闭。</p>

      <template #footer>
        <MButton size="small" @click="open = false">知道了</MButton>
      </template>
    </MPopover>

    <MButton size="small" @click="open = !open">
      {{ open ? '关闭气泡' : '打开气泡' }}
    </MButton>
  </div>
</template>
`,dB={class:"demo-row"},cB=C({__name:"Placement",setup(e){return(t,n)=>(v(),y("div",dB,[c(r(ms),{placement:"top",title:"上方浮层",width:200,"aria-label":"上方浮层"},{trigger:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[0]||(n[0]=[_("top",-1)])]),_:1})]),default:f(()=>[n[1]||(n[1]=g("p",null,"优先出现在触发器上方，空间不足时自动翻转。",-1))]),_:1}),c(r(ms),{placement:"right",title:"右侧浮层",width:220,"aria-label":"右侧浮层"},{trigger:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[2]||(n[2]=[_("right",-1)])]),_:1})]),default:f(()=>[n[3]||(n[3]=g("p",null,"浮层会保持在视口内，并随滚动重新定位。",-1))]),_:1})]))}}),uB=`<script setup lang="ts">
import { MButton, MPopover } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MPopover placement="top" title="上方浮层" :width="200" aria-label="上方浮层">
      <template #trigger>
        <MButton size="small">top</MButton>
      </template>
      <p>优先出现在触发器上方，空间不足时自动翻转。</p>
    </MPopover>

    <MPopover placement="right" title="右侧浮层" :width="220" aria-label="右侧浮层">
      <template #trigger>
        <MButton size="small">right</MButton>
      </template>
      <p>浮层会保持在视口内，并随滚动重新定位。</p>
    </MPopover>
  </div>
</template>
`,mB=`<script setup>
import { MButton, MPopover } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MPopover placement="top" title="上方浮层" :width="200" aria-label="上方浮层">
      <template #trigger>
        <MButton size="small">top</MButton>
      </template>
      <p>优先出现在触发器上方，空间不足时自动翻转。</p>
    </MPopover>

    <MPopover placement="right" title="右侧浮层" :width="220" aria-label="右侧浮层">
      <template #trigger>
        <MButton size="small">right</MButton>
      </template>
      <p>浮层会保持在视口内，并随滚动重新定位。</p>
    </MPopover>
  </div>
</template>
`,pB={name:"popover",category:"overlay",title:"Popover 气泡卡片",summary:"承载交互内容的浮层卡片，支持点击、悬停或代码控制，并管理焦点与关闭行为。",description:"Popover 用于承载按钮、说明与轻量表单等交互内容。点击触发时由统一的 Overlay 管理 Escape、点击外部与焦点归还；键盘激活会把焦点移入面板，确保内容可继续操作。manual 模式适合由外部状态驱动的复杂交互。",status:"stable",since:"0.4.0",keywords:["popover","气泡","浮层","卡片","交互"],sections:[{id:"basic",title:"基础用法",description:"trigger 插槽定义触发器，默认插槽是浮层内容。",demo:Z2,code:eB,codeJs:tB},{id:"placement",title:"出现方向",description:"placement 是期望方向，视口空间不足时会自动翻转。",demo:cB,code:uB,codeJs:mB},{id:"hover",title:"悬停触发",description:'trigger="hover" 时移入打开、移出后延迟关闭，移入浮层会保持打开。',demo:nB,code:sB,codeJs:oB},{id:"manual",title:"受控与页脚",description:'trigger="manual" 不绑定自动事件，v-model 控制开关；footer 插槽放置操作按钮。',demo:iB,code:lB,codeJs:rB}],api:[{id:"popover-api",title:"MPopover",props:[{name:"modelValue",type:"boolean",defaultValue:"—",description:"可选受控状态；不传时组件自行管理开关。"},{name:"trigger",type:"'click' | 'hover' | 'manual'",defaultValue:"'click'",description:"打开方式；manual 禁用全部自动事件。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留面板并切换 display:none；unmount 销毁面板。"},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",defaultValue:"'bottom'",description:"期望出现方向，空间不足时自动翻转。"},{name:"title",type:"string",defaultValue:"—",description:"面板标题；title 插槽优先。"},{name:"width",type:"number | string",defaultValue:"280",description:"面板宽度；数字按 px 处理。"},{name:"offset",type:"number",defaultValue:"8",description:"触发器与面板之间的间距（px）。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用浮层。"},{name:"closeOnOutside",type:"boolean",defaultValue:"true",description:"点击面板外部时关闭。"},{name:"showArrow",type:"boolean",defaultValue:"true",description:"显示指向触发器的小箭头。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有 title 时的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求切换开关；受控时由父级写回 modelValue 后才会真正打开或关闭。"},{name:"open",type:"() => void",description:"面板实际打开后触发；受控父级拒绝更新时不会触发。"},{name:"close",type:"() => void",description:"面板实际关闭后触发；受控父级拒绝更新时不会触发。"}],slots:[{name:"trigger",type:"—",description:"触发器内容。"},{name:"default",type:"—",description:"面板内容。"},{name:"title",type:"—",description:"自定义标题。"},{name:"footer",type:"—",description:"面板底部操作区。"}]}],notes:["点击触发时，面板打开后可通过 Tab 访问内部内容；键盘激活会把焦点直接移入面板。","Escape 关闭面板并把焦点还给触发器；点击外部关闭不会强制移动焦点。",'trigger="manual" 不监听点击或悬停，适合由选中项、路由或外部按钮驱动的场景。',"受控模式下 update:modelValue 只表达请求；open / close 反映父级接受后的真实可见状态。",'hide-mode="display" 会保留面板 DOM 与内部状态，适合高频开关；默认 unmount 更节省 DOM。',"悬停模式只是便捷交互，触屏或键盘用户仍建议使用 click。","面板通过 Teleport 渲染到 body，并随滚动、窗口尺寸变化重新定位；触发器离开视口时自动关闭。","箭头位置基于翻转后的方向，不做逐像素偏移；需要复杂定位时请评估专用定位库。"]},fB={class:"demo-stack"},vB=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",fB,[c(r(Ht),{percent:36,label:"上传进度"}),c(r(Ht),{percent:72,label:"同步进度"}),c(r(Ht),{percent:100,label:"构建进度"})]))}}),gB=`<script setup lang="ts">
import { MProgress } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MProgress :percent="36" label="上传进度" />
    <MProgress :percent="72" label="同步进度" />
    <MProgress :percent="100" label="构建进度" />
  </div>
</template>
`,bB=`<script setup>
import { MProgress } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MProgress :percent="36" label="上传进度" />
    <MProgress :percent="72" label="同步进度" />
    <MProgress :percent="100" label="构建进度" />
  </div>
</template>
`,yB={class:"demo-stack"},hB={class:"demo-label"},MB=C({__name:"Status",setup(e){const t=[{status:"normal",percent:40,label:"进行中"},{status:"success",percent:100,label:"已完成"},{status:"warning",percent:65,label:"需要注意"},{status:"error",percent:28,label:"已中断"}];return(n,s)=>(v(),y("div",yB,[(v(),y(ie,null,xe(t,o=>g("div",{key:o.status,class:"demo-field"},[g("span",hB,L(o.label),1),c(r(Ht),{percent:o.percent,status:o.status},null,8,["percent","status"])])),64))]))}}),_B=`<script setup lang="ts">
import { MProgress, type ProgressStatus } from 'anemia-ui'

const items: { status: ProgressStatus; percent: number; label: string }[] = [
  { status: 'normal', percent: 40, label: '进行中' },
  { status: 'success', percent: 100, label: '已完成' },
  { status: 'warning', percent: 65, label: '需要注意' },
  { status: 'error', percent: 28, label: '已中断' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div v-for="item in items" :key="item.status" class="demo-field">
      <span class="demo-label">{{ item.label }}</span>
      <MProgress :percent="item.percent" :status="item.status" />
    </div>
  </div>
</template>
`,kB=`<script setup>
import { MProgress } from 'anemia-ui'
const items = [
  { status: 'normal', percent: 40, label: '进行中' },
  { status: 'success', percent: 100, label: '已完成' },
  { status: 'warning', percent: 65, label: '需要注意' },
  { status: 'error', percent: 28, label: '已中断' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div v-for="item in items" :key="item.status" class="demo-field">
      <span class="demo-label">{{ item.label }}</span>
      <MProgress :percent="item.percent" :status="item.status" />
    </div>
  </div>
</template>
`,wB={class:"demo-stack"},xB={class:"demo-field"},BB={class:"demo-field"},CB={class:"demo-field"},$B={class:"demo-field"},TB=C({__name:"Sizes",setup(e){return(t,n)=>(v(),y("div",wB,[g("div",xB,[n[0]||(n[0]=g("span",{class:"demo-label"},"Small",-1)),c(r(Ht),{size:"small",percent:30})]),g("div",BB,[n[1]||(n[1]=g("span",{class:"demo-label"},"Medium",-1)),c(r(Ht),{size:"medium",percent:55})]),g("div",CB,[n[2]||(n[2]=g("span",{class:"demo-label"},"Large",-1)),c(r(Ht),{size:"large",percent:80})]),g("div",$B,[n[3]||(n[3]=g("span",{class:"demo-label"},"隐藏右侧信息",-1)),c(r(Ht),{size:"medium",percent:60,"show-info":!1})])]))}}),IB=`<script setup lang="ts">
import { MProgress } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">Small</span>
      <MProgress size="small" :percent="30" />
    </div>

    <div class="demo-field">
      <span class="demo-label">Medium</span>
      <MProgress size="medium" :percent="55" />
    </div>

    <div class="demo-field">
      <span class="demo-label">Large</span>
      <MProgress size="large" :percent="80" />
    </div>

    <div class="demo-field">
      <span class="demo-label">隐藏右侧信息</span>
      <MProgress size="medium" :percent="60" :show-info="false" />
    </div>
  </div>
</template>
`,VB=`<script setup>
import { MProgress } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">Small</span>
      <MProgress size="small" :percent="30" />
    </div>

    <div class="demo-field">
      <span class="demo-label">Medium</span>
      <MProgress size="medium" :percent="55" />
    </div>

    <div class="demo-field">
      <span class="demo-label">Large</span>
      <MProgress size="large" :percent="80" />
    </div>

    <div class="demo-field">
      <span class="demo-label">隐藏右侧信息</span>
      <MProgress size="medium" :percent="60" :show-info="false" />
    </div>
  </div>
</template>
`,SB={name:"progress",category:"feedback",title:"Progress 进度条",summary:"用线性进度条展示任务完成百分比，支持四种状态、三档尺寸与自定义文案。",description:"进度条用于表达一个正在进行的任务完成了多少。percent 超出 0–100 会被夹取，视觉宽度与 aria-valuenow 始终一致；status 只影响颜色，不会自动改变语义，因此警告与错误仍需要配合文字说明。",status:"stable",since:"0.6.0",keywords:["progress","进度条","进度","百分比","加载","反馈"],sections:[{id:"basic",title:"基础用法",description:"percent 为必填的 0–100 数值；label 提供无障碍名称，默认显示在右侧的百分比。",demo:vB,code:gB,codeJs:bB},{id:"status",title:"状态",description:"normal / success / warning / error 只改变进度条颜色；进行中、已完成、需注意与已中断仍需要文字说明。",demo:MB,code:_B,codeJs:kB},{id:"sizes",title:"尺寸与信息",description:"small / medium / large 对应 4 / 6 / 8px 的轨道高度；showInfo 为 false 时隐藏右侧文案。",demo:TB,code:IB,codeJs:VB}],api:[{id:"progress-api",title:"MProgress",props:[{name:"percent",type:"number",defaultValue:"—",description:"完成百分比，必填；超出 0–100 会被夹取。"},{name:"status",type:"'normal' | 'success' | 'warning' | 'error'",defaultValue:"'normal'",description:"进度条颜色状态。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"轨道高度，对应 4 / 6 / 8px。"},{name:"showInfo",type:"boolean",defaultValue:"true",description:"是否显示右侧文案；无障碍值仍然保留。"},{name:"label",type:"string",defaultValue:"'进度'",description:"进度条的 aria-label。"},{name:"format",type:"(percent: number) => string",defaultValue:"—",description:"自定义右侧文案，默认 `${percent}%`；参数为夹取后的值。"}],events:[],slots:[{name:"info",type:"{ percent: number }",description:"自定义右侧文案，优先于 format；percent 为夹取后的值。它只改变可见文本，aria-valuetext 仍由 percent / format 决定。"}]}],notes:["percent 超出 0–100 会被夹取，视觉宽度与 aria-valuenow 始终使用夹取后的值；组件不会触发任何事件。",'根节点带有 role="progressbar"、aria-valuemin="0"、aria-valuemax="100"、aria-valuenow、aria-valuetext 与 aria-label。',"label 默认为「进度」；页面同时出现多个进度条时，请传入「上传进度」「构建进度」等可区分的名称。","status 只改变颜色，不改变语义；warning / error 仍应配合说明文字，不能只依赖颜色传达状态。","showInfo 为 false 只隐藏右侧文案，aria-valuetext 仍然提供可读的值；需要不同单位时使用 format，或同时用 #info 插槽替换可见文本。","#info 插槽只改变可见文案，aria-valuetext 仍由 percent / format 生成；读屏文案需要与可见文案不同时，请同步设置 format 或 label。","轨道高度为 4 / 6 / 8px；宽度过渡遵循 prefers-reduced-motion: reduce，开启减少动效时会取消过渡。","MProgress 只提供线性进度；环形进度不在当前阶段范围内。"]},zB={class:"demo-stack"},AB={class:"demo-hint"},DB=C({__name:"Basic",setup(e){const t=z("standard");return(n,s)=>(v(),y("div",zB,[c(r(Ws),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),"aria-label":"套餐选择"},{default:f(()=>[c(r(dn),{value:"standard",label:"Standard · 基础功能"}),c(r(dn),{value:"pro",label:"Pro · 团队协作"}),c(r(dn),{value:"team",label:"Team · 完整权限"})]),_:1},8,["modelValue"]),g("p",AB,"当前选择："+L(t.value),1)]))}}),EB=`<script setup lang="ts">
import { MRadio, MRadioGroup, type RadioValue } from 'anemia-ui'
import { ref } from 'vue'

const plan = ref<RadioValue>('standard')
<\/script>

<template>
  <div class="demo-stack">
    <MRadioGroup v-model="plan" aria-label="套餐选择">
      <MRadio value="standard" label="Standard · 基础功能" />
      <MRadio value="pro" label="Pro · 团队协作" />
      <MRadio value="team" label="Team · 完整权限" />
    </MRadioGroup>
    <p class="demo-hint">当前选择：{{ plan }}</p>
  </div>
</template>
`,RB=`<script setup>
import { MRadio, MRadioGroup } from 'anemia-ui'
import { ref } from 'vue'
const plan = ref('standard')
<\/script>

<template>
  <div class="demo-stack">
    <MRadioGroup v-model="plan" aria-label="套餐选择">
      <MRadio value="standard" label="Standard · 基础功能" />
      <MRadio value="pro" label="Pro · 团队协作" />
      <MRadio value="team" label="Team · 完整权限" />
    </MRadioGroup>
    <p class="demo-hint">当前选择：{{ plan }}</p>
  </div>
</template>
`,PB={class:"demo-stack"},LB={class:"demo-hint"},OB=C({__name:"Options",setup(e){const t=z("weekly"),n=[{label:"每天",value:"daily"},{label:"每周",value:"weekly"},{label:"每月",value:"monthly"}];return(s,o)=>(v(),y("div",PB,[c(r(Ws),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),options:n,direction:"horizontal","aria-label":"更新频率"},null,8,["modelValue"]),g("p",LB,"选择结果："+L(t.value),1)]))}}),FB=`<script setup lang="ts">
import { MRadioGroup, type RadioOption, type RadioValue } from 'anemia-ui'
import { ref } from 'vue'

const frequency = ref<RadioValue>('weekly')
const options: RadioOption[] = [
  { label: '每天', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MRadioGroup
      v-model="frequency"
      :options="options"
      direction="horizontal"
      aria-label="更新频率"
    />
    <p class="demo-hint">选择结果：{{ frequency }}</p>
  </div>
</template>
`,NB=`<script setup>
import { MRadioGroup } from 'anemia-ui'
import { ref } from 'vue'
const frequency = ref('weekly')
const options = [
  { label: '每天', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MRadioGroup
      v-model="frequency"
      :options="options"
      direction="horizontal"
      aria-label="更新频率"
    />
    <p class="demo-hint">选择结果：{{ frequency }}</p>
  </div>
</template>
`,JB={class:"demo-stack"},GB={class:"demo-field"},UB={class:"demo-field"},jB=C({__name:"States",setup(e){const t=z("medium"),n=z("design");return(s,o)=>(v(),y("div",JB,[g("div",GB,[o[2]||(o[2]=g("span",{class:"demo-label"},"尺寸：small",-1)),c(r(Ws),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),size:"small",direction:"horizontal","aria-label":"组件尺寸"},{default:f(()=>[c(r(dn),{value:"small",label:"Small"}),c(r(dn),{value:"medium",label:"Medium"}),c(r(dn),{value:"large",label:"Large"})]),_:1},8,["modelValue"])]),g("div",UB,[o[3]||(o[3]=g("span",{class:"demo-label"},"禁用整组",-1)),c(r(Ws),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),disabled:"",direction:"horizontal","aria-label":"禁用示例"},{default:f(()=>[c(r(dn),{value:"design",label:"设计"}),c(r(dn),{value:"code",label:"开发"})]),_:1},8,["modelValue"])])]))}}),WB=`<script setup lang="ts">
import { MRadio, MRadioGroup, type RadioValue } from 'anemia-ui'
import { ref } from 'vue'

const size = ref<RadioValue>('medium')
const locked = ref<RadioValue>('design')
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">尺寸：small</span>
      <MRadioGroup v-model="size" size="small" direction="horizontal" aria-label="组件尺寸">
        <MRadio value="small" label="Small" />
        <MRadio value="medium" label="Medium" />
        <MRadio value="large" label="Large" />
      </MRadioGroup>
    </div>

    <div class="demo-field">
      <span class="demo-label">禁用整组</span>
      <MRadioGroup v-model="locked" disabled direction="horizontal" aria-label="禁用示例">
        <MRadio value="design" label="设计" />
        <MRadio value="code" label="开发" />
      </MRadioGroup>
    </div>
  </div>
</template>
`,HB=`<script setup>
import { MRadio, MRadioGroup } from 'anemia-ui'
import { ref } from 'vue'
const size = ref('medium')
const locked = ref('design')
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">尺寸：small</span>
      <MRadioGroup v-model="size" size="small" direction="horizontal" aria-label="组件尺寸">
        <MRadio value="small" label="Small" />
        <MRadio value="medium" label="Medium" />
        <MRadio value="large" label="Large" />
      </MRadioGroup>
    </div>

    <div class="demo-field">
      <span class="demo-label">禁用整组</span>
      <MRadioGroup v-model="locked" disabled direction="horizontal" aria-label="禁用示例">
        <MRadio value="design" label="设计" />
        <MRadio value="code" label="开发" />
      </MRadioGroup>
    </div>
  </div>
</template>
`,qB={name:"radio",category:"basic",title:"Radio 单选框",summary:"原生语义的单选按钮与单选组，共享名称、键盘方向键、尺寸与禁用状态。",description:'单选框用于在一组互斥选项中选择一个值。MRadio 保留原生 input[type="radio"] 的语义与键盘行为，MRadioGroup 负责提供共享 name、组级禁用与尺寸，并维护单一选中值。',status:"stable",since:"0.2.0",keywords:["radio","单选框","单选","group","选项"],sections:[{id:"basic",title:"基础用法",description:"在 MRadioGroup 中放置带 value 的 MRadio，通过 v-model 绑定选中值。",demo:DB,code:EB,codeJs:RB},{id:"options",title:"options 快速渲染",description:"选项较多时可传入 options，direction 控制纵向或横向排列。",demo:OB,code:FB,codeJs:NB},{id:"states",title:"尺寸与禁用",description:"size 会向下传递给组内选项；disabled 会同时禁用键盘与指针交互，并保留可读的视觉状态。",demo:jB,code:WB,codeJs:HB}],api:[{id:"radio-api",title:"MRadio",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"独立使用时的选中值；在 MRadioGroup 内会被忽略。"},{name:"value",type:"string | number",defaultValue:"—",description:"当前选项的值；在组内必填。"},{name:"label",type:"string",defaultValue:"—",description:"可见标签文本；默认插槽优先。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态；组内会继承组的 disabled。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"单选框尺寸；组内使用组的尺寸。"},{name:"name",type:"string",defaultValue:"—",description:"原生 name；组内由组统一提供。"},{name:"id",type:"string",defaultValue:"—",description:"原生 input id，缺省时自动生成。"}],events:[{name:"update:modelValue",type:"(value: RadioValue) => void",description:"独立使用时的选中值变化；组内由组统一更新。"},{name:"change",type:"(value: RadioValue, nativeEvent: Event) => void",description:"选中该选项时触发。"}],slots:[{name:"default",type:"—",description:"自定义标签内容。"}]},{id:"radio-group-api",title:"MRadioGroup",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前选中的值。"},{name:"options",type:"RadioOption[]",defaultValue:"[]",description:"便捷渲染选项，每项包含 label / value / disabled。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个组，并向下传递。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"组内单选框尺寸。"},{name:"name",type:"string",defaultValue:"自动生成",description:"组内原生 radio 的共享 name，用于浏览器方向键切换。"},{name:"direction",type:"'vertical' | 'horizontal'",defaultValue:"'vertical'",description:"排列方向。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"组的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: RadioValue) => void",description:"选中项变化时触发，用于 v-model。"},{name:"change",type:"(value: RadioValue) => void",description:"选中项变化时触发。"}],slots:[{name:"default",type:"—",description:"自定义组内单选框。"}]}],notes:["组内必须为每个 MRadio 提供唯一的 value，否则无法与组的选中值比较。","组内不要给子单选框绑定 v-model；选中状态由组的 modelValue 派生。","组内所有原生 radio 共享同一个 name，因此浏览器会提供方向键切换与唯一选中语义。",'组容器使用 role="radiogroup"，请通过 ariaLabel 提供分组名称。','独立使用时同时绑定 modelValue 与 value，例如 <MRadio v-model="picked" value="a" />。']},KB={class:"demo-stack"},QB={class:"demo-hint"},YB=C({__name:"Basic",setup(e){const t=z("day"),n=[{label:"日",value:"day"},{label:"周",value:"week"},{label:"月",value:"month"}];return(s,o)=>(v(),y("div",KB,[c(r(Kn),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),options:n,"aria-label":"统计周期"},null,8,["modelValue"]),g("p",QB,"当前视图："+L(t.value)+"。方向键可切换，Home / End 跳到首尾。",1)]))}}),XB=`<script setup lang="ts">
import { MSegmentedControl, type SegmentedControlValue } from 'anemia-ui'
import { ref } from 'vue'

const view = ref<SegmentedControlValue>('day')
const options = [
  { label: '日', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSegmentedControl v-model="view" :options="options" aria-label="统计周期" />
    <p class="demo-hint">当前视图：{{ view }}。方向键可切换，Home / End 跳到首尾。</p>
  </div>
</template>
`,ZB=`<script setup>
import { MSegmentedControl } from 'anemia-ui'
import { ref } from 'vue'
const view = ref('day')
const options = [
  { label: '日', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSegmentedControl v-model="view" :options="options" aria-label="统计周期" />
    <p class="demo-hint">当前视图：{{ view }}。方向键可切换，Home / End 跳到首尾。</p>
  </div>
</template>
`,eC={class:"demo-stack"},tC=C({__name:"Disabled",setup(e){const t=z("edit"),n=z("view"),s=[{label:"编辑",value:"edit"},{label:"预览",value:"preview"},{label:"导出",value:"export",disabled:!0}];return(o,a)=>(v(),y("div",eC,[c(r(Kn),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),options:s,"aria-label":"编辑模式"},null,8,["modelValue"]),a[2]||(a[2]=g("p",{class:"demo-hint"},"「导出」被禁用，键盘导航会自动跳过它。",-1)),c(r(Kn),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),options:s.slice(0,2),disabled:"","aria-label":"只读模式"},null,8,["modelValue","options"]),a[3]||(a[3]=g("p",{class:"demo-hint"},"整组禁用后所有选项都不可操作。",-1))]))}}),nC=`<script setup lang="ts">
import { MSegmentedControl } from 'anemia-ui'
import { ref } from 'vue'

const mode = ref('edit')
const locked = ref('view')
const options = [
  { label: '编辑', value: 'edit' },
  { label: '预览', value: 'preview' },
  { label: '导出', value: 'export', disabled: true },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSegmentedControl v-model="mode" :options="options" aria-label="编辑模式" />
    <p class="demo-hint">「导出」被禁用，键盘导航会自动跳过它。</p>

    <MSegmentedControl
      v-model="locked"
      :options="options.slice(0, 2)"
      disabled
      aria-label="只读模式"
    />
    <p class="demo-hint">整组禁用后所有选项都不可操作。</p>
  </div>
</template>
`,sC=`<script setup>
import { MSegmentedControl } from 'anemia-ui'
import { ref } from 'vue'
const mode = ref('edit')
const locked = ref('view')
const options = [
  { label: '编辑', value: 'edit' },
  { label: '预览', value: 'preview' },
  { label: '导出', value: 'export', disabled: true },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSegmentedControl v-model="mode" :options="options" aria-label="编辑模式" />
    <p class="demo-hint">「导出」被禁用，键盘导航会自动跳过它。</p>

    <MSegmentedControl
      v-model="locked"
      :options="options.slice(0, 2)"
      disabled
      aria-label="只读模式"
    />
    <p class="demo-hint">整组禁用后所有选项都不可操作。</p>
  </div>
</template>
`,oC={class:"demo-stack"},aC={class:"demo-field"},iC={class:"demo-field"},lC={class:"demo-field"},rC=C({__name:"Sizes",setup(e){const t=z("list"),n=z("list"),s=z("list"),o=[{label:"列表",value:"list"},{label:"卡片",value:"grid"}];return(a,i)=>(v(),y("div",oC,[g("div",aC,[i[3]||(i[3]=g("span",{class:"demo-label"},"small",-1)),c(r(Kn),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=l=>t.value=l),options:o,size:"small","aria-label":"小尺寸视图"},null,8,["modelValue"])]),g("div",iC,[i[4]||(i[4]=g("span",{class:"demo-label"},"medium",-1)),c(r(Kn),{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=l=>n.value=l),options:o,"aria-label":"中尺寸视图"},null,8,["modelValue"])]),g("div",lC,[i[5]||(i[5]=g("span",{class:"demo-label"},"large",-1)),c(r(Kn),{modelValue:s.value,"onUpdate:modelValue":i[2]||(i[2]=l=>s.value=l),options:o,size:"large","aria-label":"大尺寸视图"},null,8,["modelValue"])])]))}}),dC=`<script setup lang="ts">
import { MSegmentedControl } from 'anemia-ui'
import { ref } from 'vue'

const small = ref('list')
const medium = ref('list')
const large = ref('list')
const options = [
  { label: '列表', value: 'list' },
  { label: '卡片', value: 'grid' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MSegmentedControl v-model="small" :options="options" size="small" aria-label="小尺寸视图" />
    </div>
    <div class="demo-field">
      <span class="demo-label">medium</span>
      <MSegmentedControl v-model="medium" :options="options" aria-label="中尺寸视图" />
    </div>
    <div class="demo-field">
      <span class="demo-label">large</span>
      <MSegmentedControl v-model="large" :options="options" size="large" aria-label="大尺寸视图" />
    </div>
  </div>
</template>
`,cC=`<script setup>
import { MSegmentedControl } from 'anemia-ui'
import { ref } from 'vue'
const small = ref('list')
const medium = ref('list')
const large = ref('list')
const options = [
  { label: '列表', value: 'list' },
  { label: '卡片', value: 'grid' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MSegmentedControl v-model="small" :options="options" size="small" aria-label="小尺寸视图" />
    </div>
    <div class="demo-field">
      <span class="demo-label">medium</span>
      <MSegmentedControl v-model="medium" :options="options" aria-label="中尺寸视图" />
    </div>
    <div class="demo-field">
      <span class="demo-label">large</span>
      <MSegmentedControl v-model="large" :options="options" size="large" aria-label="大尺寸视图" />
    </div>
  </div>
</template>
`,uC={name:"segmented-control",category:"basic",title:"SegmentedControl 分段控制器",summary:"在少量互斥选项之间切换，使用 radiogroup 语义并提供方向键导航。",description:'分段控制器适合 2–5 个短标签之间的单选切换。它使用 role="radiogroup" / role="radio" 语义，选中项可通过方向键、Home 与 End 切换；与 Tabs 不同，它表达的是选择一个值，而不是切换内容面板。',status:"stable",since:"0.4.0",keywords:["segmented","分段","切换","单选","radiogroup"],sections:[{id:"basic",title:"基础用法",description:"options 描述选项，v-model 绑定当前值。",demo:YB,code:XB,codeJs:ZB},{id:"sizes",title:"尺寸",description:"尺寸只改变高度、字号与内边距，不改变键盘与选中行为。",demo:rC,code:dC,codeJs:cC},{id:"disabled",title:"禁用选项",description:"单个选项或整组都可以禁用，键盘导航会跳过禁用选项。",demo:tC,code:nC,codeJs:sC}],api:[{id:"segmented-control-api",title:"MSegmentedControl",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前选中的值；为 null 时没有选中项。"},{name:"options",type:"SegmentedControlOption[]",defaultValue:"[]",description:"选项列表，每项包含 label / value / disabled / icon。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"控件尺寸。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整组控件。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"radiogroup 的无障碍名称。"},{name:"name",type:"string",defaultValue:"—",description:"传递给原生按钮的 name。"}],events:[{name:"update:modelValue",type:"(value: SegmentedControlValue) => void",description:"点击或键盘切换时触发，用于 v-model。"},{name:"change",type:"(value: SegmentedControlValue, option: SegmentedControlOption) => void",description:"选中项变化时触发。"}]}],notes:["适合 2–5 个短标签；选项更多或文案更长时使用 Select 或 Tabs。","如果 modelValue 不在 options 中，控件不会自行改写父级状态；请保证值合法。","方向键采用自动激活：移动焦点即改变选中值，与原生单选组一致。","整组禁用时所有选项都不可聚焦；单个禁用选项会被键盘导航跳过。","分段控制器只表达“选择一个值”，不负责切换面板内容。"]},mC={class:"demo-stack"},pC={class:"demo-hint"},fC=C({__name:"Basic",setup(e){const t=z(null),n=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}];return(s,o)=>(v(),y("div",mC,[c(r(qt),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),options:n,"aria-label":"城市",placeholder:"请选择城市"},null,8,["modelValue"]),g("p",pC,"当前城市："+L(t.value??"未选择")+"。点击或按 Enter / 方向键打开。",1)]))}}),vC=`<script setup lang="ts">
import { MSelect, type SelectValue } from 'anemia-ui'
import { ref } from 'vue'

const city = ref<SelectValue | null>(null)
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSelect v-model="city" :options="options" aria-label="城市" placeholder="请选择城市" />
    <p class="demo-hint">当前城市：{{ city ?? '未选择' }}。点击或按 Enter / 方向键打开。</p>
  </div>
</template>
`,gC=`<script setup>
import { MSelect } from 'anemia-ui'
import { ref } from 'vue'
const city = ref(null)
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSelect v-model="city" :options="options" aria-label="城市" placeholder="请选择城市" />
    <p class="demo-hint">当前城市：{{ city ?? '未选择' }}。点击或按 Enter / 方向键打开。</p>
  </div>
</template>
`,bC={class:"demo-stack"},yC={class:"demo-field"},hC={class:"demo-field"},MC={class:"demo-field"},_C=C({__name:"Sizes",setup(e){const t=z("beijing"),n=z("beijing"),s=z("beijing"),o=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"}];return(a,i)=>(v(),y("div",bC,[g("div",yC,[i[3]||(i[3]=g("span",{class:"demo-label"},"small",-1)),c(r(qt),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=l=>t.value=l),options:o,size:"small","aria-label":"小尺寸城市"},null,8,["modelValue"])]),g("div",hC,[i[4]||(i[4]=g("span",{class:"demo-label"},"medium",-1)),c(r(qt),{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=l=>n.value=l),options:o,"aria-label":"中尺寸城市"},null,8,["modelValue"])]),g("div",MC,[i[5]||(i[5]=g("span",{class:"demo-label"},"large",-1)),c(r(qt),{modelValue:s.value,"onUpdate:modelValue":i[2]||(i[2]=l=>s.value=l),options:o,size:"large","aria-label":"大尺寸城市"},null,8,["modelValue"])])]))}}),kC=`<script setup lang="ts">
import { MSelect } from 'anemia-ui'
import { ref } from 'vue'

const small = ref('beijing')
const medium = ref('beijing')
const large = ref('beijing')
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MSelect v-model="small" :options="options" size="small" aria-label="小尺寸城市" />
    </div>
    <div class="demo-field">
      <span class="demo-label">medium</span>
      <MSelect v-model="medium" :options="options" aria-label="中尺寸城市" />
    </div>
    <div class="demo-field">
      <span class="demo-label">large</span>
      <MSelect v-model="large" :options="options" size="large" aria-label="大尺寸城市" />
    </div>
  </div>
</template>
`,wC=`<script setup>
import { MSelect } from 'anemia-ui'
import { ref } from 'vue'
const small = ref('beijing')
const medium = ref('beijing')
const large = ref('beijing')
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MSelect v-model="small" :options="options" size="small" aria-label="小尺寸城市" />
    </div>
    <div class="demo-field">
      <span class="demo-label">medium</span>
      <MSelect v-model="medium" :options="options" aria-label="中尺寸城市" />
    </div>
    <div class="demo-field">
      <span class="demo-label">large</span>
      <MSelect v-model="large" :options="options" size="large" aria-label="大尺寸城市" />
    </div>
  </div>
</template>
`,xC={class:"demo-stack"},BC=C({__name:"States",setup(e){const t=z("shanghai"),n=z(null),s=z("beijing"),o=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou",disabled:!0}];return(a,i)=>(v(),y("div",xC,[c(r(qt),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=l=>t.value=l),options:o,clearable:"","aria-label":"可清空城市"},null,8,["modelValue"]),i[4]||(i[4]=g("p",{class:"demo-hint"},"clearable 会在有值时提供清空按钮。",-1)),c(r(qt),{modelValue:s.value,"onUpdate:modelValue":i[1]||(i[1]=l=>s.value=l),options:o,disabled:"","aria-label":"禁用城市"},null,8,["modelValue"]),c(r(qt),{modelValue:t.value,"onUpdate:modelValue":i[2]||(i[2]=l=>t.value=l),options:o,error:"","error-message":"城市服务暂不可用","aria-label":"错误城市"},null,8,["modelValue"]),c(r(qt),{modelValue:n.value,"onUpdate:modelValue":i[3]||(i[3]=l=>n.value=l),options:[],"empty-text":"没有可用城市","aria-label":"空城市"},null,8,["modelValue"])]))}}),CC=`<script setup lang="ts">
import { MSelect } from 'anemia-ui'
import { ref } from 'vue'

const city = ref('shanghai')
const empty = ref<string | null>(null)
const disabled = ref('beijing')
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou', disabled: true },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSelect v-model="city" :options="options" clearable aria-label="可清空城市" />
    <p class="demo-hint">clearable 会在有值时提供清空按钮。</p>

    <MSelect v-model="disabled" :options="options" disabled aria-label="禁用城市" />

    <MSelect
      v-model="city"
      :options="options"
      error
      error-message="城市服务暂不可用"
      aria-label="错误城市"
    />

    <MSelect v-model="empty" :options="[]" empty-text="没有可用城市" aria-label="空城市" />
  </div>
</template>
`,$C=`<script setup>
import { MSelect } from 'anemia-ui'
import { ref } from 'vue'
const city = ref('shanghai')
const empty = ref(null)
const disabled = ref('beijing')
const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou', disabled: true },
]
<\/script>

<template>
  <div class="demo-stack">
    <MSelect v-model="city" :options="options" clearable aria-label="可清空城市" />
    <p class="demo-hint">clearable 会在有值时提供清空按钮。</p>

    <MSelect v-model="disabled" :options="options" disabled aria-label="禁用城市" />

    <MSelect
      v-model="city"
      :options="options"
      error
      error-message="城市服务暂不可用"
      aria-label="错误城市"
    />

    <MSelect v-model="empty" :options="[]" empty-text="没有可用城市" aria-label="空城市" />
  </div>
</template>
`,TC={name:"select",category:"basic",title:"Select 选择器",summary:"从一组选项中选择单个值，提供 combobox / listbox 语义与完整键盘操作。",description:"MSelect 是基础单选选择器：触发器持有焦点，选项通过 aria-activedescendant 标记当前项。浮层复用统一定位与 Overlay 基础设施，支持点击外部、Escape 关闭，并在空间不足时自动翻转。",status:"stable",since:"0.4.0",keywords:["select","选择","下拉","combobox","listbox"],sections:[{id:"basic",title:"基础用法",description:"options 描述选项，v-model 绑定选中值，未选择时显示 placeholder。",demo:fC,code:vC,codeJs:gC},{id:"sizes",title:"尺寸",description:"尺寸影响触发器高度与选项行高，不影响浮层定位逻辑。",demo:_C,code:kC,codeJs:wC},{id:"states",title:"清空、禁用与错误",description:"clearable 提供清空按钮；disabled、error 与空列表都有明确状态。",demo:BC,code:CC,codeJs:$C}],api:[{id:"select-api",title:"MSelect",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前选中的值；null 表示未选择。"},{name:"options",type:"SelectOption[]",defaultValue:"[]",description:"选项列表，每项包含 label / value / disabled。"},{name:"placeholder",type:"string",defaultValue:"'请选择'",description:"未选择时的提示文本。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"触发器与选项尺寸。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用选择器。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"有值时显示清空按钮。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误边框；通常与 errorMessage 一起使用。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误描述，同时作为 aria-describedby 的目标。"},{name:"emptyText",type:"string",defaultValue:"'暂无选项'",description:"options 为空时的占位文本。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留 listbox 并切换 display:none；unmount 销毁列表。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"combobox 与 listbox 的无障碍名称。"},{name:"id",type:"string",defaultValue:"—",description:"触发器的 id。"},{name:"name",type:"string",defaultValue:"—",description:"表单字段名。"}],events:[{name:"update:modelValue",type:"(value: SelectValue | null) => void",description:"选择或清空时触发，用于 v-model。"},{name:"change",type:"(value: SelectValue | null, option: SelectOption | null) => void",description:"选中值变化时触发；清空时 option 为 null。"},{name:"clear",type:"() => void",description:"点击清空按钮时触发。"},{name:"visible-change",type:"(open: boolean) => void",description:"浮层打开或关闭时触发。"}]}],notes:["当前只支持基础单选；搜索、分组、多选与虚拟滚动不在本阶段范围内。","触发器持有焦点，选项不可单独聚焦；方向键、Home / End、Enter / Space 与 Escape 均可用。","浮层通过 Teleport 渲染到 body，并与触发器等宽；滚动时重新定位，触发器离开视口时自动关闭。",'hide-mode="display" 会保留 listbox DOM；默认 unmount 更节省 DOM，两者键盘与 aria 行为一致。',"在 MFormItem 内会自动继承错误状态与 aria-describedby，显式传入的 props 优先。","选项值必须唯一；禁用选项会被鼠标与键盘跳过。"]},IC={class:"demo-stack",style:{"max-width":"460px"}},VC=C({__name:"Basic",setup(e){const t=z(!0);function n(){t.value=!t.value}return(s,o)=>(v(),y("div",IC,[c(r(R),{size:"small",type:"outline",onClick:n},{default:f(()=>[_(L(t.value?"加载完成":"重新加载"),1)]),_:1}),c(r(ls),{loading:t.value,rows:4},{default:f(()=>[c(r(pt),null,{header:f(()=>[...o[0]||(o[0]=[g("p",{class:"loaded-title"},"季度报告",-1)])]),default:f(()=>[o[1]||(o[1]=g("p",{class:"loaded-copy"},"所有数据已同步完成，可以开始查看与分析。",-1))]),_:1})]),_:1},8,["loading"])]))}}),SC=ce(VC,[["__scopeId","data-v-32c3f9b3"]]),zC=`<script setup lang="ts">
import { MButton, MCard, MSkeleton } from 'anemia-ui'
import { ref } from 'vue'

const loading = ref(true)

function toggle(): void {
  loading.value = !loading.value
}
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MButton size="small" type="outline" @click="toggle">
      {{ loading ? '加载完成' : '重新加载' }}
    </MButton>

    <MSkeleton :loading="loading" :rows="4">
      <MCard>
        <template #header>
          <p class="loaded-title">季度报告</p>
        </template>
        <p class="loaded-copy">所有数据已同步完成，可以开始查看与分析。</p>
      </MCard>
    </MSkeleton>
  </div>
</template>

<style scoped>
.loaded-title {
  margin: 0;
  color: var(--m-color-text-primary);
  font-size: 15px;
  font-weight: 600;
}

.loaded-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13.5px;
  line-height: 1.7;
}
</style>
`,AC=`<script setup>
import { MButton, MCard, MSkeleton } from 'anemia-ui'
import { ref } from 'vue'
const loading = ref(true)
function toggle() {
  loading.value = !loading.value
}
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MButton size="small" type="outline" @click="toggle">
      {{ loading ? '加载完成' : '重新加载' }}
    </MButton>

    <MSkeleton :loading="loading" :rows="4">
      <MCard>
        <template #header>
          <p class="loaded-title">季度报告</p>
        </template>
        <p class="loaded-copy">所有数据已同步完成，可以开始查看与分析。</p>
      </MCard>
    </MSkeleton>
  </div>
</template>

<style scoped>
.loaded-title {
  margin: 0;
  color: var(--m-color-text-primary);
  font-size: 15px;
  font-weight: 600;
}

.loaded-copy {
  margin: 0;
  color: var(--m-color-text-secondary);
  font-size: 13.5px;
  line-height: 1.7;
}
</style>
`,DC={class:"demo-stack",style:{"max-width":"460px"}},EC={class:"demo-field"},RC={class:"demo-field"},PC={class:"demo-field"},LC=C({__name:"Variations",setup(e){return(t,n)=>(v(),y("div",DC,[g("div",EC,[n[0]||(n[0]=g("span",{class:"demo-label"},"多行文本",-1)),c(r(ls),{variant:"text",rows:4})]),g("div",RC,[n[1]||(n[1]=g("span",{class:"demo-label"},"矩形",-1)),c(r(ls),{variant:"rect",width:"100%",height:"96px"})]),g("div",PC,[n[2]||(n[2]=g("span",{class:"demo-label"},"圆形头像",-1)),c(r(ls),{variant:"circle",width:"48px",height:"48px"})])]))}}),OC=`<script setup lang="ts">
import { MSkeleton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <div class="demo-field">
      <span class="demo-label">多行文本</span>
      <MSkeleton variant="text" :rows="4" />
    </div>

    <div class="demo-field">
      <span class="demo-label">矩形</span>
      <MSkeleton variant="rect" width="100%" height="96px" />
    </div>

    <div class="demo-field">
      <span class="demo-label">圆形头像</span>
      <MSkeleton variant="circle" width="48px" height="48px" />
    </div>
  </div>
</template>
`,FC=`<script setup>
import { MSkeleton } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <div class="demo-field">
      <span class="demo-label">多行文本</span>
      <MSkeleton variant="text" :rows="4" />
    </div>

    <div class="demo-field">
      <span class="demo-label">矩形</span>
      <MSkeleton variant="rect" width="100%" height="96px" />
    </div>

    <div class="demo-field">
      <span class="demo-label">圆形头像</span>
      <MSkeleton variant="circle" width="48px" height="48px" />
    </div>
  </div>
</template>
`,NC={class:"demo-stack",style:{"max-width":"460px"}},JC=C({__name:"Animated",setup(e){const t=z(!0);return(n,s)=>(v(),y("div",NC,[c(r(R),{size:"small",type:"outline",onClick:s[0]||(s[0]=o=>t.value=!t.value)},{default:f(()=>[_(L(t.value?"关闭动画":"开启动画"),1)]),_:1}),c(r(ls),{animated:t.value,rows:3},null,8,["animated"]),s[1]||(s[1]=g("p",{class:"demo-hint"},"系统开启 prefers-reduced-motion 时，微光动画会自动停止。",-1))]))}}),GC=`<script setup lang="ts">
import { MButton, MSkeleton } from 'anemia-ui'
import { ref } from 'vue'

const animated = ref(true)
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MButton size="small" type="outline" @click="animated = !animated">
      {{ animated ? '关闭动画' : '开启动画' }}
    </MButton>

    <MSkeleton :animated="animated" :rows="3" />

    <p class="demo-hint">系统开启 prefers-reduced-motion 时，微光动画会自动停止。</p>
  </div>
</template>
`,UC=`<script setup>
import { MButton, MSkeleton } from 'anemia-ui'
import { ref } from 'vue'
const animated = ref(true)
<\/script>

<template>
  <div class="demo-stack" style="max-width: 460px">
    <MButton size="small" type="outline" @click="animated = !animated">
      {{ animated ? '关闭动画' : '开启动画' }}
    </MButton>

    <MSkeleton :animated="animated" :rows="3" />

    <p class="demo-hint">系统开启 prefers-reduced-motion 时，微光动画会自动停止。</p>
  </div>
</template>
`,jC={name:"skeleton",category:"feedback",title:"Skeleton 骨架屏",summary:"在内容加载期间展示结构占位，加载完成后平滑切换为真实内容。",description:"骨架屏用低对比度的占位块预示即将出现的内容结构，减少加载期间的空白与布局跳动。MSkeleton 只负责占位形态：loading 为 true 时渲染骨架，为 false 时渲染默认插槽中的真实内容；具体进度请使用 MProgress。",status:"stable",since:"0.6.0",keywords:["skeleton","骨架屏","加载","占位","loading","反馈"],sections:[{id:"basic",title:"基础用法",description:"loading 默认是 true；切换为 false 时只渲染默认插槽内容，骨架块会完全移除。",demo:SC,code:zC,codeJs:AC},{id:"variations",title:"形态",description:"text 按 rows 渲染多行文本占位；rect 与 circle 始终是单个块，由 width / height 控制尺寸。",demo:LC,code:OC,codeJs:FC},{id:"animated",title:"动画开关",description:"animated 控制微光位移动画；系统开启 prefers-reduced-motion: reduce 时动画会自动停止。",demo:JC,code:GC,codeJs:UC}],api:[{id:"skeleton-api",title:"MSkeleton",props:[{name:"loading",type:"boolean",defaultValue:"true",description:"为 true 时渲染骨架，为 false 时渲染默认插槽内容。"},{name:"variant",type:"'text' | 'rect' | 'circle'",defaultValue:"'text'",description:"占位形态。"},{name:"rows",type:"number",defaultValue:"3",description:"text 模式的行数；rect 与 circle 忽略此属性。"},{name:"width",type:"string | number",defaultValue:"—",description:"占位块宽度，任意 CSS 长度；数字按 px 处理。"},{name:"height",type:"string | number",defaultValue:"—",description:"占位块高度，任意 CSS 长度；数字按 px 处理。"},{name:"animated",type:"boolean",defaultValue:"true",description:"是否显示微光位移动画。"}],events:[],slots:[{name:"default",type:"—",description:"loading 为 false 时显示的真实内容。"}]}],notes:["loading 默认是 true；为 false 时骨架块完全移除，只渲染默认插槽，不会保留占位高度。",'占位块设置了 aria-hidden="true"，根节点在加载时带 aria-busy="true" 与视觉隐藏的「加载中」文案，读屏不会逐块朗读装饰元素。',"微光动画遵循 prefers-reduced-motion: reduce，系统要求减少动效时会直接停止。","rows 只对 text 生效；rect / circle 始终渲染一个块，尺寸由 width / height 决定，数字按 px 处理。","骨架结构应尽量贴近真实内容的高度与分栏，避免加载完成后出现明显布局跳动。","骨架屏表达「正在加载」，不表达进度；真实百分比或步骤进度请使用 MProgress。"]},WC={class:"demo-stack",style:{"max-width":"560px"}},HC={class:"demo-field"},qC={class:"demo-hint"},KC=C({__name:"Basic",setup(e){const t=[{title:"安装",description:"在业务项目中安装 anemia-ui，并引入全量样式。"},{title:"注册",description:"按需注册组件，或使用 app.use(AnemiaUI) 全量安装。"},{title:"组合",description:"用 MStack 组织一维内容，子项间距来自 4px 刻度。"}];return(n,s)=>(v(),y("div",WC,[s[0]||(s[0]=g("p",{class:"demo-hint"},' 默认 direction="column"、align="stretch"，这里把 gap 从默认的 3 调整为 4。 ',-1)),c(r(Ro),{gap:4},{default:f(()=>[(v(),y(ie,null,xe(t,o=>c(r(pt),{key:o.title,padding:"medium"},{default:f(()=>[g("div",HC,[g("strong",null,L(o.title),1),g("p",qC,L(o.description),1)])]),_:2},1024)),64))]),_:1})]))}}),QC=`<script setup lang="ts">
import { MCard, MStack } from 'anemia-ui'

const steps = [
  {
    title: '安装',
    description: '在业务项目中安装 anemia-ui，并引入全量样式。',
  },
  {
    title: '注册',
    description: '按需注册组件，或使用 app.use(AnemiaUI) 全量安装。',
  },
  {
    title: '组合',
    description: '用 MStack 组织一维内容，子项间距来自 4px 刻度。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <p class="demo-hint">
      默认 direction="column"、align="stretch"，这里把 gap 从默认的 3 调整为 4。
    </p>
    <MStack :gap="4">
      <MCard v-for="step in steps" :key="step.title" padding="medium">
        <div class="demo-field">
          <strong>{{ step.title }}</strong>
          <p class="demo-hint">{{ step.description }}</p>
        </div>
      </MCard>
    </MStack>
  </div>
</template>
`,YC=`<script setup>
import { MCard, MStack } from 'anemia-ui'
const steps = [
  {
    title: '安装',
    description: '在业务项目中安装 anemia-ui，并引入全量样式。',
  },
  {
    title: '注册',
    description: '按需注册组件，或使用 app.use(AnemiaUI) 全量安装。',
  },
  {
    title: '组合',
    description: '用 MStack 组织一维内容，子项间距来自 4px 刻度。',
  },
]
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <p class="demo-hint">
      默认 direction="column"、align="stretch"，这里把 gap 从默认的 3 调整为 4。
    </p>
    <MStack :gap="4">
      <MCard v-for="step in steps" :key="step.title" padding="medium">
        <div class="demo-field">
          <strong>{{ step.title }}</strong>
          <p class="demo-hint">{{ step.description }}</p>
        </div>
      </MCard>
    </MStack>
  </div>
</template>
`,XC={class:"demo-stack",style:{"max-width":"720px"}},ZC={class:"demo-row"},e$=C({__name:"Direction",setup(e){return(t,n)=>(v(),y("div",XC,[n[5]||(n[5]=g("p",{class:"demo-hint"},' direction="row" + justify="between" + align="center"：标题与操作分列两端，gap 保证最小间距。 ',-1)),c(r(Ro),{direction:"row",gap:3,align:"center",justify:"between",wrap:""},{default:f(()=>[g("div",ZC,[n[1]||(n[1]=g("strong",null,"布局原语",-1)),c(r(qe),{size:"small",type:"info"},{default:f(()=>[...n[0]||(n[0]=[_("MStack",-1)])]),_:1})]),c(r(R),{size:"small",type:"secondary"},{default:f(()=>[...n[2]||(n[2]=[_("查看 API",-1)])]),_:1})]),_:1}),n[6]||(n[6]=g("p",{class:"demo-hint"},' wrap 让操作在窄屏换行，justify="end" 将按钮组靠右，align="center" 保持垂直居中。 ',-1)),c(r(Ro),{direction:"row",gap:2,align:"center",justify:"end",wrap:""},{default:f(()=>[c(r(R),{size:"small",type:"text"},{default:f(()=>[...n[3]||(n[3]=[_("取消",-1)])]),_:1}),c(r(R),{size:"small"},{default:f(()=>[...n[4]||(n[4]=[_("保存",-1)])]),_:1})]),_:1})]))}}),t$=`<script setup lang="ts">
import { MButton, MStack, MTag } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">
      direction="row" + justify="between" + align="center"：标题与操作分列两端，gap 保证最小间距。
    </p>
    <MStack direction="row" :gap="3" align="center" justify="between" wrap>
      <div class="demo-row">
        <strong>布局原语</strong>
        <MTag size="small" type="info">MStack</MTag>
      </div>
      <MButton size="small" type="secondary">查看 API</MButton>
    </MStack>

    <p class="demo-hint">
      wrap 让操作在窄屏换行，justify="end" 将按钮组靠右，align="center" 保持垂直居中。
    </p>
    <MStack direction="row" :gap="2" align="center" justify="end" wrap>
      <MButton size="small" type="text">取消</MButton>
      <MButton size="small">保存</MButton>
    </MStack>
  </div>
</template>
`,n$=`<script setup>
import { MButton, MStack, MTag } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 720px">
    <p class="demo-hint">
      direction="row" + justify="between" + align="center"：标题与操作分列两端，gap 保证最小间距。
    </p>
    <MStack direction="row" :gap="3" align="center" justify="between" wrap>
      <div class="demo-row">
        <strong>布局原语</strong>
        <MTag size="small" type="info">MStack</MTag>
      </div>
      <MButton size="small" type="secondary">查看 API</MButton>
    </MStack>

    <p class="demo-hint">
      wrap 让操作在窄屏换行，justify="end" 将按钮组靠右，align="center" 保持垂直居中。
    </p>
    <MStack direction="row" :gap="2" align="center" justify="end" wrap>
      <MButton size="small" type="text">取消</MButton>
      <MButton size="small">保存</MButton>
    </MStack>
  </div>
</template>
`,s$={name:"stack",category:"container",title:"Stack 堆叠布局",summary:"用一维 flex 排列子项，只表达方向、间距与对齐，不引入语义。",description:"Stack 是布局原语：默认纵向堆叠，可切换为横向排列，并通过 gap、align、justify、wrap 描述子项之间的关系。它不渲染 role，也不包裹额外结构，语义标签由 as 指定。",status:"stable",since:"0.6.0",keywords:["stack","堆叠","布局","flex","间距"],sections:[{id:"basic",title:"基础用法",description:"默认纵向排列，gap 使用 4px 间距刻度，子项按文档流依次堆叠。",demo:KC,code:QC,codeJs:YC},{id:"direction",title:"水平排列与换行",description:'direction="row" 切换为水平排列，配合 align、justify、wrap 控制对齐、分布与换行。',demo:e$,code:t$,codeJs:n$}],api:[{id:"stack-api",title:"MStack",props:[{name:"direction",type:"'row' | 'column'",defaultValue:"'column'",description:"主轴方向。"},{name:"gap",type:"StackGap",defaultValue:"3",description:"子项间距，映射为 --m-space-<gap>。"},{name:"align",type:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",defaultValue:"'stretch'",description:"交叉轴对齐方式。"},{name:"justify",type:"'start' | 'center' | 'end' | 'between' | 'around'",defaultValue:"'start'",description:"主轴分布方式。"},{name:"wrap",type:"boolean",defaultValue:"false",description:"允许子项换行。"},{name:"inline",type:"boolean",defaultValue:"false",description:"渲染 inline-flex 而不是 flex。"},{name:"as",type:"string",defaultValue:"'div'",description:"根节点标签，如 nav 或 ul；组件不添加 role。"}],events:[],slots:[{name:"default",type:"—",description:"按主轴方向排列的子项。"}]}],notes:["MStack 不添加 role，也不包裹额外 DOM；需要 nav、ul 等语义结构时用 as 指定标签。","gap 映射为内联 gap: var(--m-space-<n>)，只接受 4px 刻度的数值；不要传 7 这类没有 Token 的步进。",'direction="row" 默认不换行；窄屏下请设置 wrap，否则子项会被压缩或溢出。',"align 默认 stretch，子项会撑满交叉轴；希望子项保持自身高度时改为 start 或 center。","布局组件不处理子项的 min-width，长文本仍应在子项内设置 min-width: 0 并允许换行。","MStack 只负责一维排列；二维网格请使用 MGrid。"]},o$={class:"demo-stack"},a$={class:"demo-hint"},i$=C({__name:"Basic",setup(e){const t=z(!0);return(n,s)=>(v(),y("div",o$,[c(r(Dt),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),label:"启用通知"},null,8,["modelValue"]),g("p",a$,"当前状态："+L(t.value?"开启":"关闭"),1)]))}}),l$=`<script setup lang="ts">
import { MSwitch, type SwitchValue } from 'anemia-ui'
import { ref } from 'vue'

const enabled = ref<SwitchValue>(true)
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="enabled" label="启用通知" />
    <p class="demo-hint">当前状态：{{ enabled ? '开启' : '关闭' }}</p>
  </div>
</template>
`,r$=`<script setup>
import { MSwitch } from 'anemia-ui'
import { ref } from 'vue'
const enabled = ref(true)
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="enabled" label="启用通知" />
    <p class="demo-hint">当前状态：{{ enabled ? '开启' : '关闭' }}</p>
  </div>
</template>
`,d$={class:"demo-stack"},c$=C({__name:"Disabled",setup(e){return(t,n)=>(v(),y("div",d$,[c(r(Dt),{"model-value":!0,disabled:"",label:"已开启但禁用"}),c(r(Dt),{"model-value":!1,disabled:"",label:"已关闭但禁用"}),c(r(Dt),{"model-value":!1,label:"作为对照的可用开关"})]))}}),u$=`<script setup lang="ts">
import { MSwitch } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch :model-value="true" disabled label="已开启但禁用" />
    <MSwitch :model-value="false" disabled label="已关闭但禁用" />
    <MSwitch :model-value="false" label="作为对照的可用开关" />
  </div>
</template>
`,m$=`<script setup>
import { MSwitch } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch :model-value="true" disabled label="已开启但禁用" />
    <MSwitch :model-value="false" disabled label="已关闭但禁用" />
    <MSwitch :model-value="false" label="作为对照的可用开关" />
  </div>
</template>
`,p$={class:"demo-stack"},f$=C({__name:"Sizes",setup(e){const t=z(!0),n=z(!0),s=z(!0);return(o,a)=>(v(),y("div",p$,[c(r(Dt),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),size:"small",label:"Small"},null,8,["modelValue"]),c(r(Dt),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),size:"medium",label:"Medium"},null,8,["modelValue"]),c(r(Dt),{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=i=>s.value=i),size:"large",label:"Large"},null,8,["modelValue"])]))}}),v$=`<script setup lang="ts">
import { MSwitch, type SwitchValue } from 'anemia-ui'
import { ref } from 'vue'

const small = ref<SwitchValue>(true)
const medium = ref<SwitchValue>(true)
const large = ref<SwitchValue>(true)
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="small" size="small" label="Small" />
    <MSwitch v-model="medium" size="medium" label="Medium" />
    <MSwitch v-model="large" size="large" label="Large" />
  </div>
</template>
`,g$=`<script setup>
import { MSwitch } from 'anemia-ui'
import { ref } from 'vue'
const small = ref(true)
const medium = ref(true)
const large = ref(true)
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="small" size="small" label="Small" />
    <MSwitch v-model="medium" size="medium" label="Medium" />
    <MSwitch v-model="large" size="large" label="Large" />
  </div>
</template>
`,b$={class:"demo-stack"},y$={class:"demo-hint"},h$=C({__name:"Values",setup(e){const t=z("light");return(n,s)=>(v(),y("div",b$,[c(r(Dt),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),"active-value":"dark","inactive-value":"light",label:"夜间模式"},null,8,["modelValue"]),g("p",y$,"v-model 值："+L(t.value),1)]))}}),M$=`<script setup lang="ts">
import { MSwitch, type SwitchValue } from 'anemia-ui'
import { ref } from 'vue'

const mode = ref<SwitchValue>('light')
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="mode" active-value="dark" inactive-value="light" label="夜间模式" />
    <p class="demo-hint">v-model 值：{{ mode }}</p>
  </div>
</template>
`,_$=`<script setup>
import { MSwitch } from 'anemia-ui'
import { ref } from 'vue'
const mode = ref('light')
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch v-model="mode" active-value="dark" inactive-value="light" label="夜间模式" />
    <p class="demo-hint">v-model 值：{{ mode }}</p>
  </div>
</template>
`,k$={name:"switch",category:"basic",title:"Switch 开关",summary:"在开启与关闭之间切换，支持自定义值、三种尺寸与平滑动画。",description:'开关用于立即生效的二元设置，例如启用通知、切换模式。它使用原生 button 与 role="switch"，语义与键盘行为符合无障碍预期；需要提交表单的二元选项应使用复选框。',status:"stable",since:"0.1.0",keywords:["switch","开关","toggle","状态"],sections:[{id:"basic",title:"基础用法",description:"默认绑定布尔值；label 同时作为可见标签与无障碍名称。",demo:i$,code:l$,codeJs:r$},{id:"values",title:"自定义值",description:"通过 activeValue / inactiveValue 绑定字符串或数字，适合直接映射业务枚举。",demo:h$,code:M$,codeJs:_$},{id:"sizes",title:"尺寸",description:"小、中、大三档尺寸共享同一套轨道与滑块比例。",demo:f$,code:v$,codeJs:g$},{id:"disabled",title:"禁用状态",description:"禁用时保留状态展示，但阻止鼠标与键盘切换。",demo:c$,code:u$,codeJs:m$}],api:[{id:"switch-api",title:"MSwitch",props:[{name:"modelValue",type:"boolean | string | number",defaultValue:"false",description:"当前值，与 activeValue 比较得出开关状态。"},{name:"activeValue",type:"boolean | string | number",defaultValue:"true",description:"开启时写入的值。"},{name:"inactiveValue",type:"boolean | string | number",defaultValue:"false",description:"关闭时写入的值。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"开关尺寸。"},{name:"label",type:"string",defaultValue:"—",description:"可见标签；默认插槽优先。"},{name:"id",type:"string",defaultValue:"—",description:"button 元素的 id。"}],events:[{name:"update:modelValue",type:"(value: boolean | string | number) => void",description:"切换时触发，值为 activeValue 或 inactiveValue。"},{name:"change",type:"(value: boolean | string | number) => void",description:"切换时触发。"}],slots:[{name:"default",type:"—",description:"自定义可见标签内容。"}]}],notes:["使用自定义值时，v-model 变量的类型应覆盖 string | number | boolean。","没有可见标签时请通过 aria-label 提供开关用途。",'组件渲染为 role="switch" 的 button，原生支持 Space / Enter。',"开关用于立即生效的设置；需要随表单一起提交时请使用 Checkbox。","过渡动画会遵循 prefers-reduced-motion 设置。"]},w$=C({__name:"Basic",setup(e){const t=[{key:"name",title:"组件",width:150,minWidth:120},{key:"owner",title:"维护者",width:110},{key:"status",title:"状态",width:90,align:"center"},{key:"description",title:"说明",minWidth:220}],n=[{name:"Button",owner:"Core",status:"Stable",description:"操作入口，支持多种类型与加载状态。"},{name:"Input",owner:"Core",status:"Stable",description:"文本输入，保留原生 input 语义。"},{name:"Table",owner:"Data",status:"Stable",description:"轻量结构化数据展示，不承担排序与分页。"}];return(s,o)=>(v(),we(r(ys),{caption:"基础组件维护状态",columns:t,rows:n,"row-key":"name","row-header":"",layout:"fixed","min-width":620}))}}),x$=`<script setup lang="ts">
import type { TableColumn } from 'anemia-ui'
import { MTable } from 'anemia-ui'

interface Row {
  name: string
  owner: string
  status: string
  description: string
}

const columns: TableColumn[] = [
  { key: 'name', title: '组件', width: 150, minWidth: 120 },
  { key: 'owner', title: '维护者', width: 110 },
  { key: 'status', title: '状态', width: 90, align: 'center' },
  { key: 'description', title: '说明', minWidth: 220 },
]

const rows: Row[] = [
  {
    name: 'Button',
    owner: 'Core',
    status: 'Stable',
    description: '操作入口，支持多种类型与加载状态。',
  },
  {
    name: 'Input',
    owner: 'Core',
    status: 'Stable',
    description: '文本输入，保留原生 input 语义。',
  },
  {
    name: 'Table',
    owner: 'Data',
    status: 'Stable',
    description: '轻量结构化数据展示，不承担排序与分页。',
  },
]
<\/script>

<template>
  <MTable
    caption="基础组件维护状态"
    :columns="columns"
    :rows="rows"
    row-key="name"
    row-header
    layout="fixed"
    :min-width="620"
  />
</template>
`,B$=`<script setup>
import { MTable } from 'anemia-ui'
const columns = [
  { key: 'name', title: '组件', width: 150, minWidth: 120 },
  { key: 'owner', title: '维护者', width: 110 },
  { key: 'status', title: '状态', width: 90, align: 'center' },
  { key: 'description', title: '说明', minWidth: 220 },
]
const rows = [
  {
    name: 'Button',
    owner: 'Core',
    status: 'Stable',
    description: '操作入口，支持多种类型与加载状态。',
  },
  {
    name: 'Input',
    owner: 'Core',
    status: 'Stable',
    description: '文本输入，保留原生 input 语义。',
  },
  {
    name: 'Table',
    owner: 'Data',
    status: 'Stable',
    description: '轻量结构化数据展示，不承担排序与分页。',
  },
]
<\/script>

<template>
  <MTable
    caption="基础组件维护状态"
    :columns="columns"
    :rows="rows"
    row-key="name"
    row-header
    layout="fixed"
    :min-width="620"
  />
</template>
`,C$=C({__name:"CustomCells",setup(e){const t=[{key:"name",title:"组件",width:150,minWidth:120},{key:"status",title:"状态",width:100,align:"center"},{key:"updated",title:"更新时间",width:120},{key:"action",title:"操作",width:100,align:"right"}],n=[{name:"Button",status:"稳定",type:"success",updated:"2026-11-02"},{name:"Table",status:"新增",type:"primary",updated:"2026-11-02"},{name:"Card",status:"观察中",type:"warning",updated:"2026-10-28"}];return(s,o)=>(v(),we(r(ys),{caption:"使用单元格插槽渲染状态与操作",columns:t,rows:n,"row-key":"name","row-header":"",layout:"fixed","min-width":600},{status:f(({row:a})=>[c(r(qe),{type:a.type,size:"small"},{default:f(()=>[_(L(a.status),1)]),_:2},1032,["type"])]),action:f(({row:a})=>[c(r(R),{size:"small",type:"ghost","aria-label":`查看 ${a.name} 文档`},{default:f(()=>[...o[0]||(o[0]=[_(" 查看 ",-1)])]),_:1},8,["aria-label"])]),_:1}))}}),$$=`<script setup lang="ts">
import type { TableColumn, TagType } from 'anemia-ui'
import { MButton, MTable, MTag } from 'anemia-ui'

interface Row {
  name: string
  status: string
  type: TagType
  updated: string
}

const columns: TableColumn[] = [
  { key: 'name', title: '组件', width: 150, minWidth: 120 },
  { key: 'status', title: '状态', width: 100, align: 'center' },
  { key: 'updated', title: '更新时间', width: 120 },
  { key: 'action', title: '操作', width: 100, align: 'right' },
]

const rows: Row[] = [
  { name: 'Button', status: '稳定', type: 'success', updated: '2026-11-02' },
  { name: 'Table', status: '新增', type: 'primary', updated: '2026-11-02' },
  { name: 'Card', status: '观察中', type: 'warning', updated: '2026-10-28' },
]
<\/script>

<template>
  <MTable
    caption="使用单元格插槽渲染状态与操作"
    :columns="columns"
    :rows="rows"
    row-key="name"
    row-header
    layout="fixed"
    :min-width="600"
  >
    <template #status="{ row }">
      <MTag :type="row.type" size="small">{{ row.status }}</MTag>
    </template>
    <template #action="{ row }">
      <MButton size="small" type="ghost" :aria-label="\`查看 \${row.name} 文档\`"> 查看 </MButton>
    </template>
  </MTable>
</template>
`,T$=`<script setup>
import { MButton, MTable, MTag } from 'anemia-ui'
const columns = [
  { key: 'name', title: '组件', width: 150, minWidth: 120 },
  { key: 'status', title: '状态', width: 100, align: 'center' },
  { key: 'updated', title: '更新时间', width: 120 },
  { key: 'action', title: '操作', width: 100, align: 'right' },
]
const rows = [
  { name: 'Button', status: '稳定', type: 'success', updated: '2026-11-02' },
  { name: 'Table', status: '新增', type: 'primary', updated: '2026-11-02' },
  { name: 'Card', status: '观察中', type: 'warning', updated: '2026-10-28' },
]
<\/script>

<template>
  <MTable
    caption="使用单元格插槽渲染状态与操作"
    :columns="columns"
    :rows="rows"
    row-key="name"
    row-header
    layout="fixed"
    :min-width="600"
  >
    <template #status="{ row }">
      <MTag :type="row.type" size="small">{{ row.status }}</MTag>
    </template>
    <template #action="{ row }">
      <MButton size="small" type="ghost" :aria-label="\`查看 \${row.name} 文档\`"> 查看 </MButton>
    </template>
  </MTable>
</template>
`,I$=C({__name:"Empty",setup(e){const t=[{key:"name",title:"组件",width:160,minWidth:120},{key:"owner",title:"维护者",width:120},{key:"status",title:"状态",width:100,align:"center"}],n=[];return(s,o)=>(v(),we(r(ys),{caption:"空表格",columns:t,rows:n,"row-key":"name","row-header":"",layout:"fixed","min-width":480},{empty:f(()=>[...o[0]||(o[0]=[g("span",{class:"empty-state"},"还没有组件记录，新的组件会出现在这里。",-1)])]),_:1}))}}),V$=ce(I$,[["__scopeId","data-v-61525b9c"]]),S$=`<script setup lang="ts">
import type { TableColumn } from 'anemia-ui'
import { MTable } from 'anemia-ui'

const columns: TableColumn[] = [
  { key: 'name', title: '组件', width: 160, minWidth: 120 },
  { key: 'owner', title: '维护者', width: 120 },
  { key: 'status', title: '状态', width: 100, align: 'center' },
]

const rows: { name: string; owner: string; status: string }[] = []
<\/script>

<template>
  <MTable
    caption="空表格"
    :columns="columns"
    :rows="rows"
    row-key="name"
    row-header
    layout="fixed"
    :min-width="480"
  >
    <template #empty>
      <span class="empty-state">还没有组件记录，新的组件会出现在这里。</span>
    </template>
  </MTable>
</template>

<style scoped>
.empty-state {
  color: var(--m-color-text-tertiary);
  font-size: 12px;
}
</style>
`,z$=`<script setup>
import { MTable } from 'anemia-ui'
const columns = [
  { key: 'name', title: '组件', width: 160, minWidth: 120 },
  { key: 'owner', title: '维护者', width: 120 },
  { key: 'status', title: '状态', width: 100, align: 'center' },
]
const rows = []
<\/script>

<template>
  <MTable
    caption="空表格"
    :columns="columns"
    :rows="rows"
    row-key="name"
    row-header
    layout="fixed"
    :min-width="480"
  >
    <template #empty>
      <span class="empty-state">还没有组件记录，新的组件会出现在这里。</span>
    </template>
  </MTable>
</template>

<style scoped>
.empty-state {
  color: var(--m-color-text-tertiary);
  font-size: 12px;
}
</style>
`,A$={class:"table-overflow-demo"},D$={class:"long-value"},E$={class:"long-value"},R$=C({__name:"Overflow",setup(e){const t=[{key:"token",title:"变量",width:190,minWidth:160},{key:"value",title:"长值",minWidth:260},{key:"note",title:"说明",width:130}],n=[{token:"--m-font-family-base",value:'-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "PingFang SC", sans-serif',note:"字体族"},{token:"--m-docs-color-mix",value:"color-mix(in srgb, var(--m-color-primary) 12%, var(--m-color-bg-container))",note:"超长无空格 token"}];return(s,o)=>(v(),y("div",A$,[c(r(ys),{caption:"长内容换行示例",columns:t,rows:n,"row-key":"token","row-header":"",layout:"fixed","min-width":640},{token:f(({row:a})=>[g("code",D$,L(a.token),1)]),value:f(({row:a})=>[g("code",E$,L(a.value),1)]),_:1}),o[0]||(o[0]=g("p",{class:"demo-hint"}," 单元格允许在任意位置换行；窄屏时表格在自身容器内横向滚动，不会撑破页面。 ",-1))]))}}),P$=ce(R$,[["__scopeId","data-v-8fe4753b"]]),L$=`<script setup lang="ts">
import type { TableColumn } from 'anemia-ui'
import { MTable } from 'anemia-ui'

const columns: TableColumn[] = [
  { key: 'token', title: '变量', width: 190, minWidth: 160 },
  { key: 'value', title: '长值', minWidth: 260 },
  { key: 'note', title: '说明', width: 130 },
]

const rows = [
  {
    token: '--m-font-family-base',
    value:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "PingFang SC", sans-serif',
    note: '字体族',
  },
  {
    token: '--m-docs-color-mix',
    value: 'color-mix(in srgb, var(--m-color-primary) 12%, var(--m-color-bg-container))',
    note: '超长无空格 token',
  },
]
<\/script>

<template>
  <div class="table-overflow-demo">
    <MTable
      caption="长内容换行示例"
      :columns="columns"
      :rows="rows"
      row-key="token"
      row-header
      layout="fixed"
      :min-width="640"
    >
      <template #token="{ row }">
        <code class="long-value">{{ row.token }}</code>
      </template>
      <template #value="{ row }">
        <code class="long-value">{{ row.value }}</code>
      </template>
    </MTable>
    <p class="demo-hint">
      单元格允许在任意位置换行；窄屏时表格在自身容器内横向滚动，不会撑破页面。
    </p>
  </div>
</template>

<style scoped>
.table-overflow-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.long-value {
  font-family: var(--docs-mono);
  font-size: 11.5px;
  overflow-wrap: anywhere;
  white-space: normal;
}
</style>
`,O$=`<script setup>
import { MTable } from 'anemia-ui'
const columns = [
  { key: 'token', title: '变量', width: 190, minWidth: 160 },
  { key: 'value', title: '长值', minWidth: 260 },
  { key: 'note', title: '说明', width: 130 },
]
const rows = [
  {
    token: '--m-font-family-base',
    value:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "PingFang SC", sans-serif',
    note: '字体族',
  },
  {
    token: '--m-docs-color-mix',
    value: 'color-mix(in srgb, var(--m-color-primary) 12%, var(--m-color-bg-container))',
    note: '超长无空格 token',
  },
]
<\/script>

<template>
  <div class="table-overflow-demo">
    <MTable
      caption="长内容换行示例"
      :columns="columns"
      :rows="rows"
      row-key="token"
      row-header
      layout="fixed"
      :min-width="640"
    >
      <template #token="{ row }">
        <code class="long-value">{{ row.token }}</code>
      </template>
      <template #value="{ row }">
        <code class="long-value">{{ row.value }}</code>
      </template>
    </MTable>
    <p class="demo-hint">
      单元格允许在任意位置换行；窄屏时表格在自身容器内横向滚动，不会撑破页面。
    </p>
  </div>
</template>

<style scoped>
.table-overflow-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.long-value {
  font-family: var(--docs-mono);
  font-size: 11.5px;
  overflow-wrap: anywhere;
  white-space: normal;
}
</style>
`,F$={class:"table-size-demo"},N$={class:"demo-row"},J$=C({__name:"Sizes",setup(e){const t=["small","medium","large"],n=z("medium"),s=[{key:"name",title:"Token",width:160,minWidth:130},{key:"value",title:"值",width:100,align:"right"},{key:"usage",title:"用途",minWidth:220}],o=[{name:"--m-space-2",value:"8px",usage:"紧凑元素之间的间距"},{name:"--m-space-4",value:"16px",usage:"常规容器内边距"},{name:"--m-radius-md",value:"10px",usage:"按钮、输入框的默认圆角"}];return(a,i)=>(v(),y("div",F$,[g("div",N$,[(v(),y(ie,null,xe(t,l=>c(r(R),{key:l,size:"small",type:n.value===l?"primary":"outline",onClick:d=>n.value=l},{default:f(()=>[_(L(l),1)]),_:2},1032,["type","onClick"])),64))]),c(r(ys),{caption:"不同尺寸的轻表格",columns:s,rows:o,"row-key":"name","row-header":"",size:n.value,layout:"fixed","min-width":540},null,8,["size"])]))}}),G$=ce(J$,[["__scopeId","data-v-48d8a029"]]),U$=`<script setup lang="ts">
import type { ComponentSize, TableColumn } from 'anemia-ui'
import { MButton, MTable } from 'anemia-ui'
import { ref } from 'vue'

const sizes: ComponentSize[] = ['small', 'medium', 'large']
const size = ref<ComponentSize>('medium')

const columns: TableColumn[] = [
  { key: 'name', title: 'Token', width: 160, minWidth: 130 },
  { key: 'value', title: '值', width: 100, align: 'right' },
  { key: 'usage', title: '用途', minWidth: 220 },
]

const rows = [
  { name: '--m-space-2', value: '8px', usage: '紧凑元素之间的间距' },
  { name: '--m-space-4', value: '16px', usage: '常规容器内边距' },
  { name: '--m-radius-md', value: '10px', usage: '按钮、输入框的默认圆角' },
]
<\/script>

<template>
  <div class="table-size-demo">
    <div class="demo-row">
      <MButton
        v-for="option in sizes"
        :key="option"
        size="small"
        :type="size === option ? 'primary' : 'outline'"
        @click="size = option"
      >
        {{ option }}
      </MButton>
    </div>

    <MTable
      caption="不同尺寸的轻表格"
      :columns="columns"
      :rows="rows"
      row-key="name"
      row-header
      :size="size"
      layout="fixed"
      :min-width="540"
    />
  </div>
</template>

<style scoped>
.table-size-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
</style>
`,j$=`<script setup>
import { MButton, MTable } from 'anemia-ui'
import { ref } from 'vue'
const sizes = ['small', 'medium', 'large']
const size = ref('medium')
const columns = [
  { key: 'name', title: 'Token', width: 160, minWidth: 130 },
  { key: 'value', title: '值', width: 100, align: 'right' },
  { key: 'usage', title: '用途', minWidth: 220 },
]
const rows = [
  { name: '--m-space-2', value: '8px', usage: '紧凑元素之间的间距' },
  { name: '--m-space-4', value: '16px', usage: '常规容器内边距' },
  { name: '--m-radius-md', value: '10px', usage: '按钮、输入框的默认圆角' },
]
<\/script>

<template>
  <div class="table-size-demo">
    <div class="demo-row">
      <MButton
        v-for="option in sizes"
        :key="option"
        size="small"
        :type="size === option ? 'primary' : 'outline'"
        @click="size = option"
      >
        {{ option }}
      </MButton>
    </div>

    <MTable
      caption="不同尺寸的轻表格"
      :columns="columns"
      :rows="rows"
      row-key="name"
      row-header
      :size="size"
      layout="fixed"
      :min-width="540"
    />
  </div>
</template>

<style scoped>
.table-size-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
</style>
`,W$={name:"table",category:"data",title:"Table 轻表格",summary:"以原生表格语义展示结构化数据，支持响应式滚动、列插槽、空状态与三种尺寸。",description:"Table 是轻量展示组件，只负责把数据排成可读的表格，不提供排序、分页、选择或虚拟滚动。复杂数据能力由后续的数据组件承担，避免基础表格变成难以维护的 DataGrid。",status:"stable",since:"0.1.0",keywords:["table","表格","轻表格","数据展示","列表"],sections:[{id:"basic",title:"基础用法",description:"columns 定义列，rows 提供数据。rowKey 指定稳定行标识；caption 默认只提供给屏幕阅读器。",demo:w$,code:x$,codeJs:B$},{id:"custom-cells",title:"单元格插槽",description:"以列的 key 作为插槽名，可以在单元格中渲染 MIcon、MTag、MButton 等真实组件，而不是把 HTML 字符串塞进数据。",demo:C$,code:$$,codeJs:T$},{id:"sizes",title:"尺寸",description:"small / medium / large 统一控制字号与单元格内边距；数据密度变化时保持同一套视觉语言。",demo:G$,code:U$,codeJs:j$},{id:"empty",title:"空状态",description:"rows 为空时仍保留表头语义，并渲染整行空状态。empty 插槽可以替换默认文案。",demo:V$,code:S$,codeJs:z$},{id:"overflow",title:"长内容与溢出",description:"单元格默认允许换行，长 Token 与字体栈不会覆盖相邻列。设置 minWidth 后，窄屏只在表格内部横向滚动。",demo:P$,code:L$,codeJs:O$}],api:[{id:"table-api",title:"MTable",props:[{name:"columns",type:"readonly TableColumn[]",defaultValue:"—",description:"列定义，包含 key、title、width、minWidth、align。"},{name:"rows",type:"readonly T[]",defaultValue:"—",description:"行数据；每个字段通过列 key 读取。"},{name:"rowKey",type:"string",defaultValue:"—",description:"稳定行标识字段；缺省时回退到行索引。"},{name:"caption",type:"string",defaultValue:"—",description:"表格标题，默认视觉隐藏但仍提供给辅助技术。"},{name:"captionVisible",type:"boolean",defaultValue:"false",description:"是否显示 caption。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"单元格字号与内边距档位。"},{name:"layout",type:"'auto' | 'fixed'",defaultValue:"'auto'",description:"列宽策略；数据文档建议 fixed，配合列宽保持稳定。"},{name:"minWidth",type:"string | number",defaultValue:"—",description:"表格最小宽度；窄容器中触发内部横向滚动。"},{name:"rowHeader",type:"boolean",defaultValue:"false",description:'是否把第一列渲染为 th scope="row"。'},{name:"emptyText",type:"string",defaultValue:"'暂无数据'",description:"默认空状态文案。"}],events:[],slots:[{name:"[column.key]",type:"{ row, column, value, index }",description:"按列 key 命名的单元格插槽，用于渲染组件或自定义内容。"},{name:"empty",type:"—",description:"替换默认空状态；仍位于语义化表格单元格内。"}]}],notes:["轻表格不提供排序、分页、行选择、固定列或虚拟滚动。需要这些能力时应新增独立的数据组件，而不是继续给 MTable 堆 Props。","数据保持纯对象；状态、操作按钮等 UI 使用以列 key 命名的插槽渲染。","为可读性设置 caption；即使视觉隐藏，它仍是表格的可访问名称。","长文本默认在单元格内换行。不要给数据单元格设置 white-space: nowrap；需要单行省略时应提供明确 title 或可展开方式。","窄屏优先在表格容器内横向滚动，不要让表格撑破页面。使用 minWidth 控制最小可读宽度。","rowKey 应使用稳定且唯一的字符串或数字；0 与 false 会参与 key，空字符串回退到行索引。","Table 不应用于页面布局。布局请使用 CSS Grid / Flex；不要把表格当作网格系统。"]},H$={class:"demo-stack"},q$={class:"demo-hint"},K$=C({__name:"Basic",setup(e){const t=z("overview"),n=[{key:"overview",label:"概览"},{key:"activity",label:"动态"},{key:"settings",label:"设置"}];return(s,o)=>(v(),y("div",H$,[c(r(Hs),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),items:n,"aria-label":"项目视图"},{panel:f(({item:a})=>[g("p",q$,L(a.label)+" 面板，当前 key："+L(t.value)+"。",1)]),_:1},8,["modelValue"])]))}}),Q$=`<script setup lang="ts">
import { MTabs, type TabItem, type TabKey } from 'anemia-ui'
import { ref } from 'vue'

const active = ref<TabKey>('overview')
const items: TabItem[] = [
  { key: 'overview', label: '概览' },
  { key: 'activity', label: '动态' },
  { key: 'settings', label: '设置' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MTabs v-model="active" :items="items" aria-label="项目视图">
      <template #panel="{ item }">
        <p class="demo-hint">{{ item.label }} 面板，当前 key：{{ active }}。</p>
      </template>
    </MTabs>
  </div>
</template>
`,Y$=`<script setup>
import { MTabs } from 'anemia-ui'
import { ref } from 'vue'
const active = ref('overview')
const items = [
  { key: 'overview', label: '概览' },
  { key: 'activity', label: '动态' },
  { key: 'settings', label: '设置' },
]
<\/script>

<template>
  <div class="demo-stack">
    <MTabs v-model="active" :items="items" aria-label="项目视图">
      <template #panel="{ item }">
        <p class="demo-hint">{{ item.label }} 面板，当前 key：{{ active }}。</p>
      </template>
    </MTabs>
  </div>
</template>
`,X$={class:"demo-stack"},Z$={class:"demo-hint"},eT=C({__name:"Disabled",setup(e){const t=z("overview"),n=[{key:"overview",label:"概览"},{key:"activity",label:"动态"},{key:"billing",label:"账单（暂不可用）",disabled:!0}];return(s,o)=>(v(),y("div",X$,[c(r(Hs),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),items:n,"aria-label":"项目视图"},{panel:f(({item:a})=>[g("p",Z$,L(a.label)+" 面板",1)]),_:1},8,["modelValue"]),o[1]||(o[1]=g("p",{class:"demo-hint"},"禁用的标签无法聚焦或选中，键盘导航会自动跳过。",-1))]))}}),tT=`<script setup lang="ts">
import { MTabs, type TabItem, type TabKey } from 'anemia-ui'
import { ref } from 'vue'

const active = ref<TabKey>('overview')
const items: TabItem[] = [
  { key: 'overview', label: '概览' },
  { key: 'activity', label: '动态' },
  { key: 'billing', label: '账单（暂不可用）', disabled: true },
]
<\/script>

<template>
  <div class="demo-stack">
    <MTabs v-model="active" :items="items" aria-label="项目视图">
      <template #panel="{ item }">
        <p class="demo-hint">{{ item.label }} 面板</p>
      </template>
    </MTabs>
    <p class="demo-hint">禁用的标签无法聚焦或选中，键盘导航会自动跳过。</p>
  </div>
</template>
`,nT=`<script setup>
import { MTabs } from 'anemia-ui'
import { ref } from 'vue'
const active = ref('overview')
const items = [
  { key: 'overview', label: '概览' },
  { key: 'activity', label: '动态' },
  { key: 'billing', label: '账单（暂不可用）', disabled: true },
]
<\/script>

<template>
  <div class="demo-stack">
    <MTabs v-model="active" :items="items" aria-label="项目视图">
      <template #panel="{ item }">
        <p class="demo-hint">{{ item.label }} 面板</p>
      </template>
    </MTabs>
    <p class="demo-hint">禁用的标签无法聚焦或选中，键盘导航会自动跳过。</p>
  </div>
</template>
`,sT={class:"demo-stack"},oT={class:"demo-field"},aT={class:"demo-hint"},iT={class:"demo-field"},lT={class:"demo-hint"},rT=C({__name:"Sizes",setup(e){const t=z("one"),n=z("one"),s=[{key:"one",label:"Small"},{key:"two",label:"Large"}];return(o,a)=>(v(),y("div",sT,[g("div",oT,[a[2]||(a[2]=g("span",{class:"demo-label"},'size="small"',-1)),c(r(Hs),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),items:s,size:"small","aria-label":"小尺寸标签页"},{panel:f(({item:i})=>[g("p",aT,L(i.label)+" 面板",1)]),_:1},8,["modelValue"])]),g("div",iT,[a[3]||(a[3]=g("span",{class:"demo-label"},'size="large"',-1)),c(r(Hs),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),items:s,size:"large","aria-label":"大尺寸标签页"},{panel:f(({item:i})=>[g("p",lT,L(i.label)+" 面板",1)]),_:1},8,["modelValue"])])]))}}),dT=`<script setup lang="ts">
import { MTabs, type TabItem, type TabKey } from 'anemia-ui'
import { ref } from 'vue'

const smallActive = ref<TabKey>('one')
const largeActive = ref<TabKey>('one')
const items: TabItem[] = [
  { key: 'one', label: 'Small' },
  { key: 'two', label: 'Large' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">size="small"</span>
      <MTabs v-model="smallActive" :items="items" size="small" aria-label="小尺寸标签页">
        <template #panel="{ item }">
          <p class="demo-hint">{{ item.label }} 面板</p>
        </template>
      </MTabs>
    </div>

    <div class="demo-field">
      <span class="demo-label">size="large"</span>
      <MTabs v-model="largeActive" :items="items" size="large" aria-label="大尺寸标签页">
        <template #panel="{ item }">
          <p class="demo-hint">{{ item.label }} 面板</p>
        </template>
      </MTabs>
    </div>
  </div>
</template>
`,cT=`<script setup>
import { MTabs } from 'anemia-ui'
import { ref } from 'vue'
const smallActive = ref('one')
const largeActive = ref('one')
const items = [
  { key: 'one', label: 'Small' },
  { key: 'two', label: 'Large' },
]
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">size="small"</span>
      <MTabs v-model="smallActive" :items="items" size="small" aria-label="小尺寸标签页">
        <template #panel="{ item }">
          <p class="demo-hint">{{ item.label }} 面板</p>
        </template>
      </MTabs>
    </div>

    <div class="demo-field">
      <span class="demo-label">size="large"</span>
      <MTabs v-model="largeActive" :items="items" size="large" aria-label="大尺寸标签页">
        <template #panel="{ item }">
          <p class="demo-hint">{{ item.label }} 面板</p>
        </template>
      </MTabs>
    </div>
  </div>
</template>
`,uT={name:"tabs",category:"navigation",title:"Tabs 标签页",summary:"在同一区域内的多个视图之间切换，提供 tablist / tab / tabpanel 语义与键盘导航。",description:"标签页用于在并列视图之间切换，而不是用来表达步骤进度。MTabs 负责 tablist、方向键导航、选中状态与面板语义；面板内容通过 panel 插槽按当前项渲染。",status:"stable",since:"0.3.0",keywords:["tabs","标签页","切换","tablist","导航"],sections:[{id:"basic",title:"基础用法",description:"items 描述标签，panel 插槽根据当前项渲染面板内容。",demo:K$,code:Q$,codeJs:Y$},{id:"sizes",title:"尺寸",description:"尺寸只影响标签的字号与内边距，不改变键盘与语义行为。",demo:rT,code:dT,codeJs:cT},{id:"disabled",title:"禁用标签",description:"禁用的标签不可聚焦、不可选中，方向键与 Home / End 会自动跳过。",demo:eT,code:tT,codeJs:nT}],api:[{id:"tabs-api",title:"MTabs",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前激活标签的 key；为 null 时回退到第一个可用标签。"},{name:"items",type:"TabItem[]",defaultValue:"[]",description:"标签定义，每项包含 key / label / disabled。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"标签字号与内边距档位。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"tablist 的无障碍名称。"},{name:"keepAlive",type:"boolean",defaultValue:"false",description:"为 true 时保留非激活面板（v-show 隐藏），而不是卸载。"}],events:[{name:"update:modelValue",type:"(key: TabKey) => void",description:"点击或键盘切换标签时触发，用于 v-model。"},{name:"change",type:"(key: TabKey, item: TabItem) => void",description:"激活标签变化时触发。"}],slots:[{name:"panel",type:"{ item: TabItem; index: number; active: boolean }",description:'面板内容；提供后会渲染 role="tabpanel" 容器。'}]}],notes:["items 中的 key 必须唯一；禁用项不会被聚焦或选中。","不提供 panel 插槽时，组件只渲染 tablist，面板由使用方自行渲染；此时不会输出 aria-controls。","键盘支持 ArrowLeft / ArrowRight 循环切换、Home / End 跳到首尾，并采用自动激活。","keepAlive 只影响挂载策略，不改变当前激活项或键盘行为。","标签页表达并列视图，不用于步骤条或页面主导航。"]},mT={class:"demo-stack"},pT={class:"demo-row"},fT={key:0,class:"demo-hint"},vT=C({__name:"Closable",setup(e){const t=z(["设计系统","Vue 3","TypeScript"]);function n(s){t.value=t.value.filter(o=>o!==s)}return(s,o)=>(v(),y("div",mT,[g("div",pT,[(v(!0),y(ie,null,xe(t.value,a=>(v(),we(r(qe),{key:a,type:"primary",closable:"",onClose:i=>n(a)},{default:f(()=>[_(L(a),1)]),_:2},1032,["onClose"]))),128)),t.value.length===0?(v(),y("span",fT,"所有标签已移除。")):Q("",!0)]),t.value.length===0?(v(),we(r(R),{key:0,size:"small",onClick:o[0]||(o[0]=a=>t.value=["设计系统","Vue 3","TypeScript"])},{default:f(()=>[...o[1]||(o[1]=[_(" 重置示例 ",-1)])]),_:1})):Q("",!0)]))}}),gT=`<script setup lang="ts">
import { MButton, MTag } from 'anemia-ui'
import { ref } from 'vue'

const tags = ref(['设计系统', 'Vue 3', 'TypeScript'])

function removeTag(tag: string): void {
  tags.value = tags.value.filter((item) => item !== tag)
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MTag v-for="tag in tags" :key="tag" type="primary" closable @close="removeTag(tag)">
        {{ tag }}
      </MTag>
      <span v-if="tags.length === 0" class="demo-hint">所有标签已移除。</span>
    </div>
    <MButton
      v-if="tags.length === 0"
      size="small"
      @click="tags = ['设计系统', 'Vue 3', 'TypeScript']"
    >
      重置示例
    </MButton>
  </div>
</template>
`,bT=`<script setup>
import { MButton, MTag } from 'anemia-ui'
import { ref } from 'vue'
const tags = ref(['设计系统', 'Vue 3', 'TypeScript'])
function removeTag(tag) {
  tags.value = tags.value.filter((item) => item !== tag)
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MTag v-for="tag in tags" :key="tag" type="primary" closable @close="removeTag(tag)">
        {{ tag }}
      </MTag>
      <span v-if="tags.length === 0" class="demo-hint">所有标签已移除。</span>
    </div>
    <MButton
      v-if="tags.length === 0"
      size="small"
      @click="tags = ['设计系统', 'Vue 3', 'TypeScript']"
    >
      重置示例
    </MButton>
  </div>
</template>
`,yT=C({__name:"CustomColor",setup(e){return(t,n)=>(v(),y(ie,null,[c(r(qe),{color:"#0f766e"},{default:f(()=>[...n[0]||(n[0]=[_("Teal",-1)])]),_:1}),c(r(qe),{color:"#b45309"},{default:f(()=>[...n[1]||(n[1]=[_("Amber",-1)])]),_:1}),c(r(qe),{color:"#7c3aed"},{default:f(()=>[...n[2]||(n[2]=[_("Violet",-1)])]),_:1}),c(r(qe),{color:"#be123c",size:"large"},{default:f(()=>[...n[3]||(n[3]=[_("Rose",-1)])]),_:1})],64))}}),hT=`<script setup lang="ts">
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag color="#0f766e">Teal</MTag>
  <MTag color="#b45309">Amber</MTag>
  <MTag color="#7c3aed">Violet</MTag>
  <MTag color="#be123c" size="large">Rose</MTag>
</template>
`,MT=`<script setup>
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag color="#0f766e">Teal</MTag>
  <MTag color="#b45309">Amber</MTag>
  <MTag color="#7c3aed">Violet</MTag>
  <MTag color="#be123c" size="large">Rose</MTag>
</template>
`,_T=C({__name:"Sizes",setup(e){return(t,n)=>(v(),y(ie,null,[c(r(qe),{size:"small",type:"primary"},{default:f(()=>[...n[0]||(n[0]=[_("Small",-1)])]),_:1}),c(r(qe),{size:"medium",type:"primary"},{default:f(()=>[...n[1]||(n[1]=[_("Medium",-1)])]),_:1}),c(r(qe),{size:"large",type:"primary"},{default:f(()=>[...n[2]||(n[2]=[_("Large",-1)])]),_:1})],64))}}),kT=`<script setup lang="ts">
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag size="small" type="primary">Small</MTag>
  <MTag size="medium" type="primary">Medium</MTag>
  <MTag size="large" type="primary">Large</MTag>
</template>
`,wT=`<script setup>
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag size="small" type="primary">Small</MTag>
  <MTag size="medium" type="primary">Medium</MTag>
  <MTag size="large" type="primary">Large</MTag>
</template>
`,xT=C({__name:"Types",setup(e){return(t,n)=>(v(),y(ie,null,[c(r(qe),null,{default:f(()=>[...n[0]||(n[0]=[_("Default",-1)])]),_:1}),c(r(qe),{type:"primary"},{default:f(()=>[...n[1]||(n[1]=[_("Primary",-1)])]),_:1}),c(r(qe),{type:"success"},{default:f(()=>[...n[2]||(n[2]=[_("Success",-1)])]),_:1}),c(r(qe),{type:"warning"},{default:f(()=>[...n[3]||(n[3]=[_("Warning",-1)])]),_:1}),c(r(qe),{type:"danger"},{default:f(()=>[...n[4]||(n[4]=[_("Danger",-1)])]),_:1}),c(r(qe),{type:"info"},{default:f(()=>[...n[5]||(n[5]=[_("Info",-1)])]),_:1})],64))}}),BT=`<script setup lang="ts">
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag>Default</MTag>
  <MTag type="primary">Primary</MTag>
  <MTag type="success">Success</MTag>
  <MTag type="warning">Warning</MTag>
  <MTag type="danger">Danger</MTag>
  <MTag type="info">Info</MTag>
</template>
`,CT=`<script setup>
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag>Default</MTag>
  <MTag type="primary">Primary</MTag>
  <MTag type="success">Success</MTag>
  <MTag type="warning">Warning</MTag>
  <MTag type="danger">Danger</MTag>
  <MTag type="info">Info</MTag>
</template>
`,$T={name:"tag",category:"display",title:"Tag 标签",summary:"用紧凑的标签表达分类、状态或可移除的筛选项。",description:"标签用于表达短文本元信息。语义状态应优先使用内置类型，让颜色与对比度跟随主题；color 仅作为产品自定义标签的受控扩展，不应替代状态类型。",status:"stable",since:"0.1.0",keywords:["tag","标签","状态","分类","筛选项"],sections:[{id:"types",title:"标签类型",description:"default 用于中性分类；success / warning / danger / info 表达状态。",demo:xT,code:BT,codeJs:CT},{id:"sizes",title:"尺寸",description:"三种尺寸分别适配紧凑列表、常规内容与标题区域。",demo:_T,code:kT,codeJs:wT},{id:"closable",title:"可关闭标签",description:"closable 只负责触发 close 事件，是否移除由父级决定；这避免组件与业务状态重复。",demo:vT,code:gT,codeJs:bT},{id:"custom-color",title:"自定义颜色",description:"color 接受任意 CSS 颜色，组件据此派生柔和的背景与边框；请确保前景对比度符合可读性要求。",demo:yT,code:hT,codeJs:MT}],api:[{id:"tag-api",title:"MTag",props:[{name:"type",type:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'",defaultValue:"'default'",description:"语义类型，决定前景与柔和背景。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"标签尺寸。"},{name:"closable",type:"boolean",defaultValue:"false",description:"显示关闭按钮。"},{name:"color",type:"string",defaultValue:"—",description:"自定义 CSS 颜色，派生背景与边框。"},{name:"closeLabel",type:"string",defaultValue:"'移除标签'",description:"关闭按钮的无障碍标签。"}],events:[{name:"close",type:"(event: MouseEvent) => void",description:"点击关闭按钮时触发；组件自身不会移除。"}],slots:[{name:"default",type:"—",description:"标签内容。"}]}],notes:["closable 仅触发 close 事件，父级需要通过 v-if 或数组过滤移除标签。","自定义 color 派生背景使用 color-mix()，需要现代浏览器支持。","自定义颜色时请确认文字与背景对比度，组件不会自动计算可读性。","标签内容应保持短小；长文本会被省略而不是换行。"]},TT={class:"demo-stack"},IT={class:"demo-hint"},VT=C({__name:"Basic",setup(e){const t=z("");return(n,s)=>(v(),y("div",TT,[c(r(Qn),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),"aria-label":"个人简介",placeholder:"介绍一下你自己…",rows:4,maxlength:80,"show-count":""},null,8,["modelValue"]),g("p",IT,"已输入 "+L(t.value.length)+" 个字符，内容完全由父级状态控制。",1)]))}}),ST=`<script setup lang="ts">
import { MTextarea } from 'anemia-ui'
import { ref } from 'vue'

const bio = ref('')
<\/script>

<template>
  <div class="demo-stack">
    <MTextarea
      v-model="bio"
      aria-label="个人简介"
      placeholder="介绍一下你自己…"
      :rows="4"
      :maxlength="80"
      show-count
    />
    <p class="demo-hint">已输入 {{ bio.length }} 个字符，内容完全由父级状态控制。</p>
  </div>
</template>
`,zT=`<script setup>
import { MTextarea } from 'anemia-ui'
import { ref } from 'vue'
const bio = ref('')
<\/script>

<template>
  <div class="demo-stack">
    <MTextarea
      v-model="bio"
      aria-label="个人简介"
      placeholder="介绍一下你自己…"
      :rows="4"
      :maxlength="80"
      show-count
    />
    <p class="demo-hint">已输入 {{ bio.length }} 个字符，内容完全由父级状态控制。</p>
  </div>
</template>
`,AT={class:"demo-stack"},DT={class:"demo-field"},ET={class:"demo-field"},RT=C({__name:"Sizes",setup(e){const t=z("small 尺寸、两行高度"),n=z("large 尺寸、四行高度，适合较长的说明文字。");return(s,o)=>(v(),y("div",AT,[g("div",DT,[o[2]||(o[2]=g("span",{class:"demo-label"},"small",-1)),c(r(Qn),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),size:"small",rows:2,"aria-label":"小尺寸文本域"},null,8,["modelValue"])]),g("div",ET,[o[3]||(o[3]=g("span",{class:"demo-label"},"large",-1)),c(r(Qn),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),size:"large",rows:4,"aria-label":"大尺寸文本域"},null,8,["modelValue"])])]))}}),PT=`<script setup lang="ts">
import { MTextarea } from 'anemia-ui'
import { ref } from 'vue'

const compact = ref('small 尺寸、两行高度')
const roomy = ref('large 尺寸、四行高度，适合较长的说明文字。')
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MTextarea v-model="compact" size="small" :rows="2" aria-label="小尺寸文本域" />
    </div>

    <div class="demo-field">
      <span class="demo-label">large</span>
      <MTextarea v-model="roomy" size="large" :rows="4" aria-label="大尺寸文本域" />
    </div>
  </div>
</template>
`,LT=`<script setup>
import { MTextarea } from 'anemia-ui'
import { ref } from 'vue'
const compact = ref('small 尺寸、两行高度')
const roomy = ref('large 尺寸、四行高度，适合较长的说明文字。')
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-field">
      <span class="demo-label">small</span>
      <MTextarea v-model="compact" size="small" :rows="2" aria-label="小尺寸文本域" />
    </div>

    <div class="demo-field">
      <span class="demo-label">large</span>
      <MTextarea v-model="roomy" size="large" :rows="4" aria-label="大尺寸文本域" />
    </div>
  </div>
</template>
`,OT={class:"demo-stack"},FT=C({__name:"States",setup(e){const t=z("内容过短"),n=z("不可编辑的内容"),s=z("只读内容，仍可聚焦与复制");return(o,a)=>(v(),y("div",OT,[c(r(Qn),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),"error-message":"至少输入 20 个字符","aria-label":"错误示例",rows:3},null,8,["modelValue"]),c(r(Qn),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i),disabled:"","aria-label":"禁用示例",rows:2},null,8,["modelValue"]),c(r(Qn),{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=i=>s.value=i),readonly:"","aria-label":"只读示例",rows:2},null,8,["modelValue"])]))}}),NT=`<script setup lang="ts">
import { MTextarea } from 'anemia-ui'
import { ref } from 'vue'

const message = ref('内容过短')
const disabled = ref('不可编辑的内容')
const readonly = ref('只读内容，仍可聚焦与复制')
<\/script>

<template>
  <div class="demo-stack">
    <MTextarea
      v-model="message"
      error-message="至少输入 20 个字符"
      aria-label="错误示例"
      :rows="3"
    />

    <MTextarea v-model="disabled" disabled aria-label="禁用示例" :rows="2" />

    <MTextarea v-model="readonly" readonly aria-label="只读示例" :rows="2" />
  </div>
</template>
`,JT=`<script setup>
import { MTextarea } from 'anemia-ui'
import { ref } from 'vue'
const message = ref('内容过短')
const disabled = ref('不可编辑的内容')
const readonly = ref('只读内容，仍可聚焦与复制')
<\/script>

<template>
  <div class="demo-stack">
    <MTextarea
      v-model="message"
      error-message="至少输入 20 个字符"
      aria-label="错误示例"
      :rows="3"
    />

    <MTextarea v-model="disabled" disabled aria-label="禁用示例" :rows="2" />

    <MTextarea v-model="readonly" readonly aria-label="只读示例" :rows="2" />
  </div>
</template>
`,GT={name:"textarea",category:"basic",title:"Textarea 文本域",summary:"多行文本输入，支持尺寸、行数、字数统计、错误说明与原生 resize。",description:"文本域用于输入较长的文本。MTextarea 直接渲染原生 textarea，统一了尺寸、错误提示、字符计数与禁用/只读状态，值始终是字符串。",status:"stable",since:"0.2.0",keywords:["textarea","文本域","多行输入","字数","resize"],sections:[{id:"basic",title:"基础用法",description:"v-model 绑定字符串；rows 控制初始高度，show-count 显示实时字数。",demo:VT,code:ST,codeJs:zT},{id:"sizes",title:"尺寸",description:"尺寸统一为 small / medium / large，只影响字号、内边距与最小高度。",demo:RT,code:PT,codeJs:LT},{id:"states",title:"错误、禁用与只读",description:"errorMessage 会同时设置 aria-invalid 与 aria-describedby；禁用阻止交互，只读仍可聚焦与复制。",demo:FT,code:NT,codeJs:JT}],api:[{id:"textarea-api",title:"MTextarea",props:[{name:"modelValue",type:"string",defaultValue:"''",description:"绑定的文本值，始终是字符串。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"字号、内边距与最小高度档位。"},{name:"placeholder",type:"string",defaultValue:"—",description:"占位文本。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态，阻止输入与 v-model 更新。"},{name:"readonly",type:"boolean",defaultValue:"false",description:"只读状态，允许聚焦与复制但不接受修改。"},{name:"rows",type:"number",defaultValue:"3",description:"原生 rows，决定初始可见行数。"},{name:"maxlength",type:"number",defaultValue:"—",description:"原生最大字符数。"},{name:"showCount",type:"boolean",defaultValue:"false",description:"显示字符计数，设置 maxlength 时同时显示上限。"},{name:"resize",type:"'none' | 'vertical' | 'horizontal' | 'both'",defaultValue:"'vertical'",description:"浏览器原生 resize 行为。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误视觉状态。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误说明，同时用于 aria-describedby。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"id",type:"string",defaultValue:"—",description:"原生 textarea id，缺省时自动生成。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有可见标签时的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: string) => void",description:"输入时触发，用于 v-model。"},{name:"input",type:"(value: string, nativeEvent: Event) => void",description:"原生 input 事件。"},{name:"change",type:"(value: string, nativeEvent: Event) => void",description:"原生 change 事件。"},{name:"focus",type:"(nativeEvent: FocusEvent) => void",description:"聚焦时触发。"},{name:"blur",type:"(nativeEvent: FocusEvent) => void",description:"失焦时触发。"}]}],notes:["v-model 只接受字符串，不做数字或富文本转换。","showCount 统计的是字符串 UTF-16 长度，与原生 maxlength 的计算方式一致。","错误说明通过 aria-describedby 关联，仅设置 error 而不提供 errorMessage 时没有可读的错误文本。","需要自由调整宽高时使用 resize；none 适合固定布局，vertical 是默认的稳妥选择。","多行文本的溢出由原生 textarea 处理，不需要额外的滚动容器。"]},UT={class:"demo-stack text-links"},jT=C({__name:"Link",setup(e){return(t,n)=>(v(),y("div",UT,[c(r(yt),null,{default:f(()=>[n[2]||(n[2]=_(" 这是一段正文，其中包含 ",-1)),c(r(yt),{link:"",href:"https://example.com",target:"_blank"},{default:f(()=>[...n[0]||(n[0]=[_("外部链接",-1)])]),_:1}),n[3]||(n[3]=_(" 与 ",-1)),c(r(yt),{link:"",href:"#api"},{default:f(()=>[...n[1]||(n[1]=[_("文档锚点",-1)])]),_:1}),n[4]||(n[4]=_(" 。 ",-1))]),_:1}),c(r(yt),{as:"p",block:""},{default:f(()=>[...n[5]||(n[5]=[_(" 使用 block 渲染为独立段落，默认标签会从 span 切换为 p，保留语义与布局。 ",-1)])]),_:1}),c(r(yt),{as:"a",href:"https://example.com",target:"_blank",block:""},{default:f(()=>[...n[6]||(n[6]=[_(' 直接使用 as="a" 也可以获得链接样式与安全的 rel。 ',-1)])]),_:1})]))}}),WT=ce(jT,[["__scopeId","data-v-d5be57b1"]]),HT=`<script setup lang="ts">
import { MText } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack text-links">
    <MText>
      这是一段正文，其中包含
      <MText link href="https://example.com" target="_blank">外部链接</MText>
      与
      <MText link href="#api">文档锚点</MText>
      。
    </MText>

    <MText as="p" block>
      使用 block 渲染为独立段落，默认标签会从 span 切换为 p，保留语义与布局。
    </MText>

    <MText as="a" href="https://example.com" target="_blank" block>
      直接使用 as="a" 也可以获得链接样式与安全的 rel。
    </MText>
  </div>
</template>

<style scoped>
.text-links {
  gap: 14px;
}
</style>
`,qT=`<script setup>
import { MText } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack text-links">
    <MText>
      这是一段正文，其中包含
      <MText link href="https://example.com" target="_blank">外部链接</MText>
      与
      <MText link href="#api">文档锚点</MText>
      。
    </MText>

    <MText as="p" block>
      使用 block 渲染为独立段落，默认标签会从 span 切换为 p，保留语义与布局。
    </MText>

    <MText as="a" href="https://example.com" target="_blank" block>
      直接使用 as="a" 也可以获得链接样式与安全的 rel。
    </MText>
  </div>
</template>

<style scoped>
.text-links {
  gap: 14px;
}
</style>
`,KT={class:"demo-stack text-ellipsis"},QT={class:"text-ellipsis__box"},YT={class:"text-ellipsis__box"},Nl="Anemia UI 的文本组件保持轻量，却覆盖标题、正文、描述、链接与截断等常见场景。当容器宽度有限时，可以通过 ellipsis 控制单行省略，或通过 lines 指定多行截断。",XT=C({__name:"Ellipsis",setup(e){return(t,n)=>(v(),y("div",KT,[g("div",QT,[c(r(yt),{block:"",ellipsis:""},{default:f(()=>[_(L(Nl))]),_:1})]),g("div",YT,[c(r(yt),{block:"",ellipsis:"",lines:2},{default:f(()=>[_(L(Nl))]),_:1})]),c(r(yt),{link:"",ellipsis:"",href:"#api",class:"text-ellipsis__inline"},{default:f(()=>[...n[0]||(n[0]=[_(" 单行内联链接也会在容器边界处省略 ",-1)])]),_:1})]))}}),ZT=ce(XT,[["__scopeId","data-v-29e9fa7e"]]),eI=`<script setup lang="ts">
import { MText } from 'anemia-ui'

const longText =
  'Anemia UI 的文本组件保持轻量，却覆盖标题、正文、描述、链接与截断等常见场景。' +
  '当容器宽度有限时，可以通过 ellipsis 控制单行省略，或通过 lines 指定多行截断。'
<\/script>

<template>
  <div class="demo-stack text-ellipsis">
    <div class="text-ellipsis__box">
      <MText block ellipsis>{{ longText }}</MText>
    </div>

    <div class="text-ellipsis__box">
      <MText block ellipsis :lines="2">{{ longText }}</MText>
    </div>

    <MText link ellipsis href="#api" class="text-ellipsis__inline">
      单行内联链接也会在容器边界处省略
    </MText>
  </div>
</template>

<style scoped>
.text-ellipsis {
  gap: 12px;
}

.text-ellipsis__box {
  max-width: 420px;
  padding: 12px 14px;
  border: 1px solid var(--m-color-border);
  border-radius: var(--m-radius-md);
  background-color: var(--m-color-bg-container);
}

.text-ellipsis__inline {
  max-width: 280px;
}
</style>
`,tI=`<script setup>
import { MText } from 'anemia-ui'
const longText =
  'Anemia UI 的文本组件保持轻量，却覆盖标题、正文、描述、链接与截断等常见场景。' +
  '当容器宽度有限时，可以通过 ellipsis 控制单行省略，或通过 lines 指定多行截断。'
<\/script>

<template>
  <div class="demo-stack text-ellipsis">
    <div class="text-ellipsis__box">
      <MText block ellipsis>{{ longText }}</MText>
    </div>

    <div class="text-ellipsis__box">
      <MText block ellipsis :lines="2">{{ longText }}</MText>
    </div>

    <MText link ellipsis href="#api" class="text-ellipsis__inline">
      单行内联链接也会在容器边界处省略
    </MText>
  </div>
</template>

<style scoped>
.text-ellipsis {
  gap: 12px;
}

.text-ellipsis__box {
  max-width: 420px;
  padding: 12px 14px;
  border: 1px solid var(--m-color-border);
  border-radius: var(--m-radius-md);
  background-color: var(--m-color-bg-container);
}

.text-ellipsis__inline {
  max-width: 280px;
}
</style>
`,nI={class:"demo-stack text-variants"},sI=C({__name:"Variants",setup(e){return(t,n)=>(v(),y("div",nI,[c(r(yt),{variant:"title"},{default:f(()=>[...n[0]||(n[0]=[_("标题 Title",-1)])]),_:1}),c(r(yt),{variant:"subtitle"},{default:f(()=>[...n[1]||(n[1]=[_("副标题 Subtitle",-1)])]),_:1}),c(r(yt),{variant:"body"},{default:f(()=>[...n[2]||(n[2]=[_(" 正文用于承载段落内容。MText 负责排版语义，不引入额外的间距或容器。 ",-1)])]),_:1}),c(r(yt),{variant:"description"},{default:f(()=>[...n[3]||(n[3]=[_(" 描述文字适合辅助说明、表单项提示与次要信息，默认使用次级文字色。 ",-1)])]),_:1})]))}}),oI=ce(sI,[["__scopeId","data-v-5826dca7"]]),aI=`<script setup lang="ts">
import { MText } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack text-variants">
    <MText variant="title">标题 Title</MText>
    <MText variant="subtitle">副标题 Subtitle</MText>
    <MText variant="body">
      正文用于承载段落内容。MText 负责排版语义，不引入额外的间距或容器。
    </MText>
    <MText variant="description">
      描述文字适合辅助说明、表单项提示与次要信息，默认使用次级文字色。
    </MText>
  </div>
</template>

<style scoped>
.text-variants {
  gap: 10px;
}
</style>
`,iI=`<script setup>
import { MText } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack text-variants">
    <MText variant="title">标题 Title</MText>
    <MText variant="subtitle">副标题 Subtitle</MText>
    <MText variant="body">
      正文用于承载段落内容。MText 负责排版语义，不引入额外的间距或容器。
    </MText>
    <MText variant="description">
      描述文字适合辅助说明、表单项提示与次要信息，默认使用次级文字色。
    </MText>
  </div>
</template>

<style scoped>
.text-variants {
  gap: 10px;
}
</style>
`,lI={name:"text",category:"display",title:"Text 文本",summary:"轻量的排版文本组件，覆盖标题、副标题、正文、描述、链接与截断。",description:"MText 用来替代分散的 span、p 与 a 标签：variant 决定排版层级，tone 调整语义颜色，block 与 as 控制布局和语义，ellipsis / lines 处理溢出。它不包裹额外容器，也不强制外边距。",status:"stable",since:"0.5.0",keywords:["text","文本","标题","正文","链接","省略","typography"],sections:[{id:"variants",title:"排版层级",description:"variant 提供标题、副标题、正文与描述四种层级；tone 可覆盖语义颜色。",demo:oI,code:aI,codeJs:iI},{id:"link",title:"链接与布局",description:"link 或 href 生成链接样式；block 切换为块级，as 可保留标题等语义标签。",demo:WT,code:HT,codeJs:qT},{id:"ellipsis",title:"单行与多行省略",description:"ellipsis 默认单行省略，lines 大于 1 时使用多行 clamp；需要容器提供宽度约束。",demo:ZT,code:eI,codeJs:tI}],api:[{id:"text-api",title:"MText",props:[{name:"variant",type:"'title' | 'subtitle' | 'body' | 'description' | 'custom'",defaultValue:"'body'",description:"排版层级；custom 移除内置字号、字重与颜色。"},{name:"tone",type:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'inherit'",defaultValue:"—",description:"语义颜色，覆盖 variant 的默认颜色。"},{name:"as",type:"string",defaultValue:"—",description:"渲染标签；默认链接为 a、块级为 p、其余为 span。"},{name:"block",type:"boolean",defaultValue:"false",description:"使用块级布局，默认标签变为 p。"},{name:"link",type:"boolean",defaultValue:"false",description:"应用链接样式；默认标签变为 a。"},{name:"href",type:"string",defaultValue:"—",description:"链接地址。"},{name:"target",type:"string",defaultValue:"—",description:"链接 target。"},{name:"rel",type:"string",defaultValue:"—",description:'链接 rel；target="_blank" 时默认 noopener noreferrer。'},{name:"ellipsis",type:"boolean",defaultValue:"false",description:"开启溢出省略。"},{name:"lines",type:"number",defaultValue:"1",description:"省略的最大行数；大于 1 时使用多行 clamp。"}],slots:[{name:"default",type:"—",description:"文本内容，可包含行内元素。"}]}],notes:["MText 不包裹额外容器，也不提供默认外边距；排版间距应交给父级布局。","省略需要宽度约束：块级文本受限父容器宽度，内联文本需设置 max-width 或所在容器宽度。","多行省略基于 -webkit-line-clamp，现代浏览器一致；降级时仍会隐藏溢出内容。","链接默认使用 a 标签；若通过 as 改为其他标签，请自行保证可访问性与键盘行为。",'variant="custom" 只保留基础重置，适合完全由使用方接管字体的场景；可通过 class、CSS Variables 或 :deep() 继续扩展，不需要 !important。']},rI={class:"demo-row"},dI=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",rI,[c(r(R),{size:"small",onClick:n[0]||(n[0]=s=>r(Kt).success("保存成功"))},{default:f(()=>[...n[4]||(n[4]=[_("成功",-1)])]),_:1}),c(r(R),{size:"small",onClick:n[1]||(n[1]=s=>r(Kt).info("已加入队列"))},{default:f(()=>[...n[5]||(n[5]=[_("信息",-1)])]),_:1}),c(r(R),{size:"small",type:"outline",onClick:n[2]||(n[2]=s=>r(Kt).warning("网络较慢"))},{default:f(()=>[...n[6]||(n[6]=[_("警告",-1)])]),_:1}),c(r(R),{size:"small",type:"danger",onClick:n[3]||(n[3]=s=>r(Kt).error("保存失败"))},{default:f(()=>[...n[7]||(n[7]=[_("错误",-1)])]),_:1})]))}}),cI=`<script setup lang="ts">
import { MButton, toast } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="toast.success('保存成功')">成功</MButton>
    <MButton size="small" @click="toast.info('已加入队列')">信息</MButton>
    <MButton size="small" type="outline" @click="toast.warning('网络较慢')">警告</MButton>
    <MButton size="small" type="danger" @click="toast.error('保存失败')">错误</MButton>
  </div>
</template>
`,uI=`<script setup>
import { MButton, toast } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="toast.success('保存成功')">成功</MButton>
    <MButton size="small" @click="toast.info('已加入队列')">信息</MButton>
    <MButton size="small" type="outline" @click="toast.warning('网络较慢')">警告</MButton>
    <MButton size="small" type="danger" @click="toast.error('保存失败')">错误</MButton>
  </div>
</template>
`,mI={class:"demo-row"},pI=C({__name:"Durations",setup(e){function t(){Kt.warning("请检查网络连接后重试",{title:"连接已断开",duration:0,closable:!0})}return(n,s)=>(v(),y("div",mI,[c(r(R),{size:"small",onClick:t},{default:f(()=>[...s[2]||(s[2]=[_("常驻通知",-1)])]),_:1}),c(r(R),{size:"small",type:"outline",onClick:s[0]||(s[0]=o=>r(Kt).info("3 秒后自动关闭"))},{default:f(()=>[...s[3]||(s[3]=[_(" 自动关闭 ",-1)])]),_:1}),c(r(R),{size:"small",type:"ghost",onClick:s[1]||(s[1]=o=>r(Kt).clear())},{default:f(()=>[...s[4]||(s[4]=[_("全部清除",-1)])]),_:1})]))}}),fI=`<script setup lang="ts">
import { MButton, toast } from 'anemia-ui'

function persistent(): void {
  toast.warning('请检查网络连接后重试', {
    title: '连接已断开',
    duration: 0,
    closable: true,
  })
}
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="persistent">常驻通知</MButton>
    <MButton size="small" type="outline" @click="toast.info('3 秒后自动关闭')"> 自动关闭 </MButton>
    <MButton size="small" type="ghost" @click="toast.clear()">全部清除</MButton>
  </div>
</template>
`,vI=`<script setup>
import { MButton, toast } from 'anemia-ui'
function persistent() {
  toast.warning('请检查网络连接后重试', {
    title: '连接已断开',
    duration: 0,
    closable: true,
  })
}
<\/script>

<template>
  <div class="demo-row">
    <MButton size="small" @click="persistent">常驻通知</MButton>
    <MButton size="small" type="outline" @click="toast.info('3 秒后自动关闭')"> 自动关闭 </MButton>
    <MButton size="small" type="ghost" @click="toast.clear()">全部清除</MButton>
  </div>
</template>
`,gI={class:"demo-stack"},bI={class:"demo-row"},yI={class:"demo-hint"},hI=C({__name:"Queue",setup(e){const{toasts:t,queuedToasts:n}=oy(),s=x(()=>t.value.length);function o(){for(let i=0;i<10;i+=1)Kt.info(`并发通知 ${i+1}`,{duration:1800+i*400})}function a(){Kt.error("紧急：保存失败，请重试",{title:"需要立即处理",duration:0,closable:!0,priority:"high"})}return(i,l)=>(v(),y("div",gI,[g("div",bI,[c(r(R),{size:"small",onClick:o},{default:f(()=>[...l[1]||(l[1]=[_("连续触发 10 条",-1)])]),_:1}),c(r(R),{size:"small",type:"danger",onClick:a},{default:f(()=>[...l[2]||(l[2]=[_("紧急错误插队",-1)])]),_:1}),c(r(R),{size:"small",type:"ghost",onClick:l[0]||(l[0]=d=>r(Kt).clear())},{default:f(()=>[...l[3]||(l[3]=[_("全部清除",-1)])]),_:1})]),g("p",yI," 当前显示 "+L(s.value)+" 条，等待 "+L(r(n).length)+" 条。默认最多同时显示 5 条，队列上限 20 条；每条关闭后才补充下一条。 ",1)]))}}),MI=`<script setup lang="ts">
import { computed } from 'vue'

import { MButton, toast, useToast } from 'anemia-ui'

const { toasts, queuedToasts } = useToast()
const visibleCount = computed(() => toasts.value.length)

function burst(): void {
  for (let index = 0; index < 10; index += 1) {
    // 递增时长便于观察“走一条、进一条”；等待中的通知不会开始倒计时。
    toast.info(\`并发通知 \${index + 1}\`, { duration: 1800 + index * 400 })
  }
}

function urgent(): void {
  toast.error('紧急：保存失败，请重试', {
    title: '需要立即处理',
    duration: 0,
    closable: true,
    priority: 'high',
  })
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton size="small" @click="burst">连续触发 10 条</MButton>
      <MButton size="small" type="danger" @click="urgent">紧急错误插队</MButton>
      <MButton size="small" type="ghost" @click="toast.clear()">全部清除</MButton>
    </div>
    <p class="demo-hint">
      当前显示 {{ visibleCount }} 条，等待 {{ queuedToasts.length }} 条。默认最多同时显示 5
      条，队列上限 20 条；每条关闭后才补充下一条。
    </p>
  </div>
</template>
`,_I=`<script setup>
import { computed } from 'vue'
import { MButton, toast, useToast } from 'anemia-ui'
const { toasts, queuedToasts } = useToast()
const visibleCount = computed(() => toasts.value.length)
function burst() {
  for (let index = 0; index < 10; index += 1) {
    // 递增时长便于观察“走一条、进一条”；等待中的通知不会开始倒计时。
    toast.info(\`并发通知 \${index + 1}\`, { duration: 1800 + index * 400 })
  }
}
function urgent() {
  toast.error('紧急：保存失败，请重试', {
    title: '需要立即处理',
    duration: 0,
    closable: true,
    priority: 'high',
  })
}
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MButton size="small" @click="burst">连续触发 10 条</MButton>
      <MButton size="small" type="danger" @click="urgent">紧急错误插队</MButton>
      <MButton size="small" type="ghost" @click="toast.clear()">全部清除</MButton>
    </div>
    <p class="demo-hint">
      当前显示 {{ visibleCount }} 条，等待 {{ queuedToasts.length }} 条。默认最多同时显示 5
      条，队列上限 20 条；每条关闭后才补充下一条。
    </p>
  </div>
</template>
`,kI={name:"toast",category:"feedback",title:"Toast 通知",summary:"右上角堆叠的轻量操作反馈，通过命令式 API 触发，支持类型、标题与自动关闭。",description:"Toast 用于反馈一次操作的结果，不打断当前任务。队列由模块级 store 管理，toast() / useToast() 负责入队，<MToast /> 负责渲染；两者共享同一份状态，因此在应用外壳挂载一次即可。相同类型、相同标题与内容在 500ms 内只保留一条；默认最多同时显示 5 条，其余通知等待，每关闭一条才补充下一条。",status:"stable",since:"0.4.0",keywords:["toast","通知","反馈","命令式","message"],sections:[{id:"basic",title:"基础用法",description:"先挂载一次 <MToast />，之后在任意位置调用 toast.success() 等方法。",demo:dI,code:cI,codeJs:uI},{id:"queue",title:"队列与优先级",description:'默认最多同时显示 5 条，其余通知等待；每关闭或自动消失一条，下一条才进入。内存队列上限 20 条。priority: "high" 可让错误等紧急通知插到普通等待通知之前。',demo:hI,code:MI,codeJs:_I},{id:"durations",title:"时长与关闭",description:"duration 为 0 时保持常驻，closable 显示关闭按钮；toast.clear() 清空队列。",demo:pI,code:fI,codeJs:vI}],api:[{id:"toast-host-api",title:"MToast",props:[]},{id:"toast-options",title:"ToastOptions",props:[{name:"type",type:"'success' | 'info' | 'warning' | 'error'",defaultValue:"'info'",description:"通知类型，决定图标、语义角色与强调色。"},{name:"title",type:"string",defaultValue:"—",description:"可选的加粗首行。"},{name:"message",type:"string",defaultValue:"—",description:"通知正文。"},{name:"duration",type:"number",defaultValue:"3000",description:"自动关闭时间（ms）。0 表示不自动关闭；等待中的通知进入展示区后才开始计时。"},{name:"closable",type:"boolean",defaultValue:"false",description:"显示关闭按钮。"},{name:"priority",type:"'normal' | 'high'",defaultValue:"'normal'",description:"high 会插到普通等待通知之前；展示区已满时，原本第 5 条普通通知退回等待队列，稍后再显示。"}]},{id:"toast-api",title:"toast / useToast",props:[{name:"toast.show",type:"(options: ToastOptions | string) => number",defaultValue:"—",description:"入队一条通知，返回 id。字符串等价于 { message }。"},{name:"toast.success",type:"(message: string, options?: ToastShortcutOptions) => number",defaultValue:"—",description:"成功通知；info / warning / error 签名相同。"},{name:"toast.close",type:"(id: number) => void",defaultValue:"—",description:"关闭指定通知。"},{name:"toast.clear",type:"() => void",defaultValue:"—",description:"清空所有通知并取消计时器。"},{name:"useToast().toasts",type:"Readonly<Ref<ToastItem[]>>",defaultValue:"—",description:"当前显示在页面上的通知，不包含等待中的通知。"},{name:"useToast().queuedToasts",type:"Readonly<Ref<ToastItem[]>>",defaultValue:"—",description:"正在等待展示名额的通知；它们的自动关闭计时尚未开始。"},{name:"useToast",type:"() => UseToastReturn",defaultValue:"—",description:"返回响应式 toasts、queuedToasts 与同一组快捷方法，适合模板内渲染计数。"}]}],notes:["必须在应用外壳挂载一次 <MToast />；库不会自动创建第二个 Vue 应用，以免丢失 router、主题与依赖注入上下文。","默认最多同时显示 5 条，其余通知进入等待队列；每关闭或自动消失一条，下一条才进入展示区。","等待中的通知不会开始倒计时，进入展示区后才按 duration 计时，因此不会还没显示就过期。","内存队列上限为 20 条（含显示中与等待中）；达到上限时优先移除最早的等待通知，若没有等待通知则移除最早的显示通知。",'priority: "high" 会插到普通等待通知之前；展示区已满时，原本第 5 条普通通知退回等待队列，稍后继续显示。',"500ms 内相同类型、相同标题与内容的通知只保留一条，并刷新倒计时，避免重复点击造成堆积。","duration 为 0 的通知不会自动关闭，但仍占用一个普通展示名额，建议同时开启 closable。",'非 error 类型使用 role="status"，error 使用 role="alert"，避免重复播报。',"Toast 与 Message 是两套独立队列：Toast 承载可关闭的富内容，Message 只做顶部短确认。"]},wI={class:"demo-stack"},xI={class:"demo-row"},BI=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",wI,[g("div",xI,[c(r(St),{content:"复制当前链接"},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[0]||(n[0]=[_("复制链接",-1)])]),_:1})]),_:1}),c(r(St),{content:"打开设置面板"},{default:f(()=>[c(r(R),{size:"small",type:"ghost"},{default:f(()=>[...n[1]||(n[1]=[_("设置",-1)])]),_:1})]),_:1})]),n[2]||(n[2]=g("p",{class:"demo-hint"},"悬停或聚焦触发器后显示；Escape 可关闭。",-1))]))}}),CI=`<script setup lang="ts">
import { MButton, MTooltip } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MTooltip content="复制当前链接">
        <MButton size="small">复制链接</MButton>
      </MTooltip>

      <MTooltip content="打开设置面板">
        <MButton size="small" type="ghost">设置</MButton>
      </MTooltip>
    </div>
    <p class="demo-hint">悬停或聚焦触发器后显示；Escape 可关闭。</p>
  </div>
</template>
`,$I=`<script setup>
import { MButton, MTooltip } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <div class="demo-row">
      <MTooltip content="复制当前链接">
        <MButton size="small">复制链接</MButton>
      </MTooltip>

      <MTooltip content="打开设置面板">
        <MButton size="small" type="ghost">设置</MButton>
      </MTooltip>
    </div>
    <p class="demo-hint">悬停或聚焦触发器后显示；Escape 可关闭。</p>
  </div>
</template>
`,TI={class:"demo-row"},II=C({__name:"Delayed",setup(e){return(t,n)=>(v(),y("div",TI,[c(r(St),{content:"立即出现",delay:0},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[0]||(n[0]=[_("delay 0",-1)])]),_:1})]),_:1}),c(r(St),{content:"等待 600ms 后出现",delay:600},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[1]||(n[1]=[_("delay 600",-1)])]),_:1})]),_:1}),c(r(St),{content:"较长的说明文字，会自动换行并保持在视口内。","max-width":180},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[2]||(n[2]=[_("限制宽度",-1)])]),_:1})]),_:1})]))}}),VI=`<script setup lang="ts">
import { MButton, MTooltip } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltip content="立即出现" :delay="0">
      <MButton size="small">delay 0</MButton>
    </MTooltip>
    <MTooltip content="等待 600ms 后出现" :delay="600">
      <MButton size="small">delay 600</MButton>
    </MTooltip>
    <MTooltip content="较长的说明文字，会自动换行并保持在视口内。" :max-width="180">
      <MButton size="small">限制宽度</MButton>
    </MTooltip>
  </div>
</template>
`,SI=`<script setup>
import { MButton, MTooltip } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltip content="立即出现" :delay="0">
      <MButton size="small">delay 0</MButton>
    </MTooltip>
    <MTooltip content="等待 600ms 后出现" :delay="600">
      <MButton size="small">delay 600</MButton>
    </MTooltip>
    <MTooltip content="较长的说明文字，会自动换行并保持在视口内。" :max-width="180">
      <MButton size="small">限制宽度</MButton>
    </MTooltip>
  </div>
</template>
`,zI={class:"demo-stack"},AI=C({__name:"Manual",setup(e){const t=z(!1);return(n,s)=>(v(),y("div",zI,[c(r(St),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),trigger:"manual","hide-mode":"display",placement:"bottom",content:"由按钮控制的提示内容"},{default:f(()=>[c(r(R),{type:"outline",size:"small"},{default:f(()=>[...s[2]||(s[2]=[_("查看提示",-1)])]),_:1})]),_:1},8,["modelValue"]),c(r(R),{size:"small",onClick:s[1]||(s[1]=o=>t.value=!t.value)},{default:f(()=>[_(L(t.value?"关闭提示":"打开提示"),1)]),_:1}),s[3]||(s[3]=g("p",{class:"demo-hint"},'trigger="manual" 不绑定任何自动事件，v-model 完全由代码控制。',-1))]))}}),DI=`<script setup lang="ts">
import { MButton, MTooltip } from 'anemia-ui'
import { ref } from 'vue'

const visible = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <MTooltip
      v-model="visible"
      trigger="manual"
      hide-mode="display"
      placement="bottom"
      content="由按钮控制的提示内容"
    >
      <MButton type="outline" size="small">查看提示</MButton>
    </MTooltip>

    <MButton size="small" @click="visible = !visible">
      {{ visible ? '关闭提示' : '打开提示' }}
    </MButton>

    <p class="demo-hint">trigger="manual" 不绑定任何自动事件，v-model 完全由代码控制。</p>
  </div>
</template>
`,EI=`<script setup>
import { MButton, MTooltip } from 'anemia-ui'
import { ref } from 'vue'
const visible = ref(false)
<\/script>

<template>
  <div class="demo-stack">
    <MTooltip
      v-model="visible"
      trigger="manual"
      hide-mode="display"
      placement="bottom"
      content="由按钮控制的提示内容"
    >
      <MButton type="outline" size="small">查看提示</MButton>
    </MTooltip>

    <MButton size="small" @click="visible = !visible">
      {{ visible ? '关闭提示' : '打开提示' }}
    </MButton>

    <p class="demo-hint">trigger="manual" 不绑定任何自动事件，v-model 完全由代码控制。</p>
  </div>
</template>
`,RI={class:"demo-row"},PI=C({__name:"Placements",setup(e){return(t,n)=>(v(),y("div",RI,[c(r(St),{content:"上方提示",placement:"top"},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[0]||(n[0]=[_("top",-1)])]),_:1})]),_:1}),c(r(St),{content:"下方提示",placement:"bottom"},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[1]||(n[1]=[_("bottom",-1)])]),_:1})]),_:1}),c(r(St),{content:"左侧提示",placement:"left"},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[2]||(n[2]=[_("left",-1)])]),_:1})]),_:1}),c(r(St),{content:"右侧提示",placement:"right"},{default:f(()=>[c(r(R),{size:"small"},{default:f(()=>[...n[3]||(n[3]=[_("right",-1)])]),_:1})]),_:1})]))}}),LI=`<script setup lang="ts">
import { MButton, MTooltip } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltip content="上方提示" placement="top">
      <MButton size="small">top</MButton>
    </MTooltip>
    <MTooltip content="下方提示" placement="bottom">
      <MButton size="small">bottom</MButton>
    </MTooltip>
    <MTooltip content="左侧提示" placement="left">
      <MButton size="small">left</MButton>
    </MTooltip>
    <MTooltip content="右侧提示" placement="right">
      <MButton size="small">right</MButton>
    </MTooltip>
  </div>
</template>
`,OI=`<script setup>
import { MButton, MTooltip } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltip content="上方提示" placement="top">
      <MButton size="small">top</MButton>
    </MTooltip>
    <MTooltip content="下方提示" placement="bottom">
      <MButton size="small">bottom</MButton>
    </MTooltip>
    <MTooltip content="左侧提示" placement="left">
      <MButton size="small">left</MButton>
    </MTooltip>
    <MTooltip content="右侧提示" placement="right">
      <MButton size="small">right</MButton>
    </MTooltip>
  </div>
</template>
`,FI={name:"tooltip",category:"overlay",title:"Tooltip 文字提示",summary:"悬停、聚焦或代码控制时显示的简短说明，支持视口翻转、延迟与两种隐藏模式。",description:"Tooltip 只承载简短、非交互的说明文字。它通过统一的浮层定位与 Overlay 基础设施计算位置，在空间不足时自动翻转，并支持悬停、点击、键盘焦点与 manual 受控模式。",status:"stable",since:"0.4.0",keywords:["tooltip","提示","悬停","浮层","说明"],sections:[{id:"basic",title:"基础用法",description:"content 提供文字；默认插槽是触发器。",demo:BI,code:CI,codeJs:$I},{id:"placements",title:"出现方向",description:"placement 是期望方向；空间不足时会自动翻转到相反方向。",demo:PI,code:LI,codeJs:OI},{id:"delayed",title:"延迟与宽度",description:"delay 控制出现延迟，maxWidth 限制浮层宽度并自动换行。",demo:II,code:VI,codeJs:SI},{id:"manual",title:"受控模式",description:'trigger="manual" 不绑定悬停或点击；用 v-model 或 expose 的 show / hide 控制，hide-mode 选择保留或销毁面板。',demo:AI,code:DI,codeJs:EI}],api:[{id:"tooltip-api",title:"MTooltip",props:[{name:"modelValue",type:"boolean",defaultValue:"—",description:"可选受控开关；manual 模式下通常配合 v-model 使用。"},{name:"content",type:"string",defaultValue:"—",description:"提示文字；content 插槽优先。"},{name:"trigger",type:"'hover' | 'click' | 'manual'",defaultValue:"'hover'",description:"打开方式；manual 禁用全部自动事件。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留面板并切换 display:none；unmount 销毁面板。"},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",defaultValue:"'top'",description:"期望出现方向，空间不足时自动翻转。"},{name:"offset",type:"number",defaultValue:"8",description:"触发器与浮层之间的间距（px）。"},{name:"delay",type:"number",defaultValue:"120",description:"显示延迟（ms）。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用提示。"},{name:"maxWidth",type:"number | string",defaultValue:"240",description:"浮层最大宽度；数字按 px 处理。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求切换开关；受控时由父级写回 modelValue 后才会真正显示或隐藏。"},{name:"open",type:"() => void",description:"面板实际显示后触发；受控父级拒绝更新时不会触发。"},{name:"close",type:"() => void",description:"面板实际隐藏后触发；受控父级拒绝更新时不会触发。"}],slots:[{name:"default",type:"—",description:"触发器内容。"},{name:"content",type:"—",description:"自定义提示内容，优先于 content。"}]}],notes:["Tooltip 只用于简短说明；需要按钮、表单等交互内容时使用 Popover。","浮层本身 pointer-events: none，不会拦截鼠标；悬停触发器或聚焦其内部元素时显示。",'trigger="click" 会在点击外部时关闭；trigger="manual" 完全由 v-model 或实例方法控制。','hide-mode="display" 会保留面板 DOM 并切换 display:none，适合高频开关或需要保留内部状态的场景；默认 unmount 更节省 DOM。',"通过 Teleport 渲染到 body；触发器离开视口时自动收起，滚动与窗口尺寸变化时重新定位。","Escape 会请求关闭当前提示，并阻止事件继续传播到下层浮层。","受控模式下 update:modelValue 只表达请求；open / close 反映父级接受后的真实可见状态。","触发器被禁用时，浏览器不会派发焦点事件，但仍可通过外层悬停显示提示。"]},NI={class:"demo-row"},JI=C({__name:"Basic",setup(e){return(t,n)=>(v(),y("div",NI,[c(r(_i),null,{content:f(({target:s})=>[_(" 当前目标："+L(s?.getAttribute("data-tooltip")),1)]),default:f(()=>[(v(),y(ie,null,xe(["复制","分享","收藏"],s=>c(r(R),{key:s,size:"small","data-tooltip":s},{default:f(()=>[_(L(s),1)]),_:2},1032,["data-tooltip"])),64))]),_:1})]))}}),GI=ce(JI,[["__scopeId","data-v-5888844b"]]),UI=`<script setup lang="ts">
import { MButton, MTooltipGroup } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltipGroup>
      <MButton
        v-for="label in ['复制', '分享', '收藏']"
        :key="label"
        size="small"
        :data-tooltip="label"
      >
        {{ label }}
      </MButton>

      <template #content="{ target }">
        当前目标：{{ target?.getAttribute('data-tooltip') }}
      </template>
    </MTooltipGroup>
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
`,jI=`<script setup>
import { MButton, MTooltipGroup } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltipGroup>
      <MButton
        v-for="label in ['复制', '分享', '收藏']"
        :key="label"
        size="small"
        :data-tooltip="label"
      >
        {{ label }}
      </MButton>

      <template #content="{ target }">
        当前目标：{{ target?.getAttribute('data-tooltip') }}
      </template>
    </MTooltipGroup>
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
`,WI={class:"demo-row"},HI={class:"rich-tip"},qI=C({__name:"RichContent",setup(e){return(t,n)=>(v(),y("div",WI,[c(r(_i),{"max-width":300},{content:f(({target:s})=>[g("span",HI,[g("strong",null,L(s?.getAttribute("data-tooltip")),1),n[2]||(n[2]=g("span",null," 多个触发器共享同一个 Teleport 面板，插槽内容可以完全自定义，并通过 target 读取当前目标信息。 ",-1))])]),default:f(()=>[c(r(R),{size:"small","data-tooltip":"同步状态"},{icon:f(()=>[c(r(st),{type:"success",dot:""})]),default:f(()=>[n[0]||(n[0]=_(" 同步 ",-1))]),_:1}),c(r(R),{size:"small","data-tooltip":"离线缓存"},{icon:f(()=>[c(r(st),{type:"warning",dot:""})]),default:f(()=>[n[1]||(n[1]=_(" 离线 ",-1))]),_:1})]),_:1})]))}}),KI=ce(qI,[["__scopeId","data-v-246d0ab1"]]),QI=`<script setup lang="ts">
import { MBadge, MButton, MTooltipGroup } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltipGroup :max-width="300">
      <MButton size="small" data-tooltip="同步状态">
        同步
        <template #icon><MBadge type="success" dot /></template>
      </MButton>
      <MButton size="small" data-tooltip="离线缓存">
        离线
        <template #icon><MBadge type="warning" dot /></template>
      </MButton>

      <template #content="{ target }">
        <span class="rich-tip">
          <strong>{{ target?.getAttribute('data-tooltip') }}</strong>
          <span>
            多个触发器共享同一个 Teleport 面板，插槽内容可以完全自定义，并通过 target
            读取当前目标信息。
          </span>
        </span>
      </template>
    </MTooltipGroup>
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.rich-tip {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rich-tip strong {
  font-size: var(--m-font-size-sm);
}

.rich-tip span {
  color: var(--m-color-bg-container);
  font-size: var(--m-font-size-xs);
  line-height: var(--m-line-height-normal);
  opacity: 0.82;
}
</style>
`,YI=`<script setup>
import { MBadge, MButton, MTooltipGroup } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MTooltipGroup :max-width="300">
      <MButton size="small" data-tooltip="同步状态">
        同步
        <template #icon><MBadge type="success" dot /></template>
      </MButton>
      <MButton size="small" data-tooltip="离线缓存">
        离线
        <template #icon><MBadge type="warning" dot /></template>
      </MButton>

      <template #content="{ target }">
        <span class="rich-tip">
          <strong>{{ target?.getAttribute('data-tooltip') }}</strong>
          <span>
            多个触发器共享同一个 Teleport 面板，插槽内容可以完全自定义，并通过 target
            读取当前目标信息。
          </span>
        </span>
      </template>
    </MTooltipGroup>
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.rich-tip {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rich-tip strong {
  font-size: var(--m-font-size-sm);
}

.rich-tip span {
  color: var(--m-color-bg-container);
  font-size: var(--m-font-size-xs);
  line-height: var(--m-line-height-normal);
  opacity: 0.82;
}
</style>
`,XI={name:"tooltip-group",category:"overlay",title:"TooltipGroup 多目标提示",summary:"多个触发目标共享一个提示面板，用插槽完全自定义内容，减少重复实例。",description:"TooltipGroup 适用于列表、工具栏或表格中大量相似目标的说明场景。它通过事件委托在一个容器内识别 selector 命中的目标，只创建一个 Teleport 面板，并把 aria-describedby 动态挂到当前目标上。内容完全由 content 插槽决定。",status:"stable",since:"0.5.0",keywords:["tooltip","提示","多目标","共享","group","插槽"],sections:[{id:"basic",title:"共享一个提示框",description:"默认插槽放置多个目标，selector 默认命中 [data-tooltip]，content 插槽接收当前 target。",demo:GI,code:UI,codeJs:jI},{id:"rich-content",title:"自定义内容",description:"面板内容可以是任意结构；target 可用于读取目标数据，所有目标仍然共用一个实例。",demo:KI,code:QI,codeJs:YI}],api:[{id:"tooltip-group-api",title:"MTooltipGroup",props:[{name:"selector",type:"string",defaultValue:"'[data-tooltip]'",description:"在默认插槽内查找目标的 CSS 选择器。"},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",defaultValue:"'top'",description:"期望出现方向，空间不足时自动翻转。"},{name:"offset",type:"number",defaultValue:"8",description:"目标与面板之间的间距（px）。"},{name:"delay",type:"number",defaultValue:"120",description:"悬停显示延迟（ms）；焦点进入时立即显示。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留面板并切换 display:none；unmount 销毁面板。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个提示组。"},{name:"maxWidth",type:"number | string",defaultValue:"260",description:"共享面板最大宽度；数字按 px 处理。"}],events:[{name:"open",type:"(target: HTMLElement) => void",description:"面板显示时触发，携带当前目标。"},{name:"close",type:"(target: HTMLElement | null) => void",description:"面板关闭时触发，携带关闭前的目标。"}],slots:[{name:"default",type:"—",description:"目标集合；selector 在这里查找。"},{name:"content",type:"{ target: HTMLElement | null }",description:"共享面板内容；target 为当前目标。"}]}],notes:["目标需要能被悬停或聚焦；原生 button、a 或带 tabindex 的元素都可以。","只创建一个面板实例；切换目标时复用同一个 DOM 节点，只更新内容和位置。","当前目标的 aria-describedby 指向共享面板，关闭或切换时会移除旧目标的关联。","默认 selector 为 [data-tooltip]；如果目标没有该属性，请显式传入自定义 selector。","面板默认 pointer-events: auto，便于在自定义内容中使用链接；不需要交互时保持简短文本即可。","共享内容无法同时显示两个目标；同一时间只跟随当前悬停或聚焦的目标。"]},ZI=[Z1,ox,GT,S2,J0,qB,k$,uC,TC,lI,$T,UM,P_,CM,aM,jk,jC,SB,kI,jx,uT,Y2,s1,M0,s$,Tw,W$,l_,x_,Mx,g2,ok,FI,XI,pB,Sk,lw],Bi=ca.flatMap(e=>ZI.filter(t=>t.category===e.id));ca.map(e=>({category:e,docs:Bi.filter(t=>t.category===e.id)})).filter(e=>e.docs.length>0);const eV=Object.fromEntries(Bi.map(e=>[e.name,e]));function OV(e){return eV[e]}const tV={class:"component-search__shortcut"},nV=C({__name:"ComponentSearch",setup(e){const t=da(),n=z(null),s=typeof navigator<"u"&&/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent);async function o(){window.innerWidth<=980&&(t.openSidebar(),await lt()),n.value?.querySelector("input")?.focus()}function a(l){(l.metaKey||l.ctrlKey)&&l.key.toLowerCase()==="k"&&(l.preventDefault(),o())}function i(){t.searchQuery&&(t.searchQuery="")}return gn(()=>window.addEventListener("keydown",a)),kt(()=>window.removeEventListener("keydown",a)),(l,d)=>(v(),y("div",{ref_key:"wrapper",ref:n,class:"component-search",onKeydown:Um(i,["esc"])},[c(r(je),{modelValue:r(t).searchQuery,"onUpdate:modelValue":d[0]||(d[0]=u=>r(t).searchQuery=u),type:"search",size:"small",placeholder:"搜索组件或规范…","aria-label":"搜索组件或设计规范",clearable:""},{suffix:f(()=>[g("kbd",tV,L(r(s)?"⌘ K":"Ctrl K"),1)]),_:1},8,["modelValue"])],544))}}),sV=ce(nV,[["__scopeId","data-v-e26ddc26"]]),oV={class:"sidebar-mobile-head"},aV={class:"sidebar-nav","aria-label":"文档导航"},iV={class:"sidebar-group__title"},lV={class:"sidebar-group__count"},rV={key:0,class:"sidebar-group"},dV={class:"sidebar-group__title"},cV={class:"sidebar-group__count"},uV={key:1,class:"sidebar-empty"},mV={class:"sidebar-footer"},pV=C({__name:"AppSidebar",setup(e){const t=[{title:"色彩 Colors",path:"/design/colors",keywords:["颜色","主题","color","token"]},{title:"字体 Typography",path:"/design/typography",keywords:["字号","字重","font"]},{title:"间距 Spacing",path:"/design/spacing",keywords:["间距","space","4px"]},{title:"圆角 Radius",path:"/design/radius",keywords:["圆角","radius","border"]},{title:"动效 Motion",path:"/design/motion",keywords:["动画","过渡","transition"]}],n=ra(),s=da(),o=x(()=>s.searchQuery.trim().toLowerCase());function a(p){return o.value?p.some(b=>b.toLowerCase().includes(o.value)):!0}const i=x(()=>Bi.filter(p=>a([p.title,p.summary,p.description,...p.keywords]))),l=x(()=>ca.map(p=>({category:p,docs:i.value.filter(b=>b.category===p.id)})).filter(p=>p.docs.length>0)),d=x(()=>t.filter(p=>a([p.title,...p.keywords]))),u=x(()=>i.value.length+d.value.length>0);function m(p){return n.path===p}return(p,b)=>(v(),y("aside",{class:de(["app-sidebar",{"is-open":r(s).sidebarOpen}])},[g("div",oV,[b[3]||(b[3]=g("span",{class:"sidebar-mobile-head__title"},"文档导航",-1)),g("button",{type:"button",class:"sidebar-mobile-head__close","aria-label":"关闭导航",onClick:b[0]||(b[0]=h=>r(s).closeSidebar())},[c(r(Et),{name:"close",size:18})])]),c(sV,{class:"app-sidebar__search"}),g("nav",aV,[(v(!0),y(ie,null,xe(l.value,h=>(v(),y("section",{key:h.category.id,class:"sidebar-group"},[g("p",iV,[_(L(h.category.title)+" ",1),g("span",lV,L(h.docs.length),1)]),g("ul",null,[(v(!0),y(ie,null,xe(h.docs,B=>(v(),y("li",{key:B.name},[c(r(rs),{to:`/components/${B.name}`,class:de(["sidebar-link",{"is-active":m(`/components/${B.name}`)}]),"aria-current":m(`/components/${B.name}`)?"page":void 0,onClick:b[1]||(b[1]=I=>r(s).closeSidebar())},{default:f(()=>[g("span",null,L(B.title),1)]),_:2},1032,["to","class","aria-current"])]))),128))])]))),128)),d.value.length?(v(),y("section",rV,[g("p",dV,[b[4]||(b[4]=_(" 设计规范 ",-1)),g("span",cV,L(d.value.length),1)]),g("ul",null,[(v(!0),y(ie,null,xe(d.value,h=>(v(),y("li",{key:h.path},[c(r(rs),{to:h.path,class:de(["sidebar-link",{"is-active":m(h.path)}]),"aria-current":m(h.path)?"page":void 0,onClick:b[2]||(b[2]=B=>r(s).closeSidebar())},{default:f(()=>[g("span",null,L(h.title),1)]),_:2},1032,["to","class","aria-current"])]))),128))])])):Q("",!0),u.value?Q("",!0):(v(),y("p",uV,"没有匹配的内容，试试「按钮」或「主题」。"))]),g("div",mV,[g("p",null,L(r(Yn).name)+" v"+L(r(Yn).version),1),b[5]||(b[5]=g("p",null,"Phase 02 · 扩展性修订",-1))])],2))}}),fV=ce(pV,[["__scopeId","data-v-8d976987"]]),vV={key:0,class:"doc-toc","aria-label":"本页目录"},gV={class:"doc-toc__list"},bV=["href"],yV={class:"doc-toc__top",href:"#doc-main"},hV=C({__name:"DocToc",setup(e){const t=ra(),n=z([]),s=z("");let o=0;function a(){const u=Array.from(document.querySelectorAll(".docs-main h2[id]"));n.value=u.map(m=>({id:m.id,text:(m.textContent??"").replace(/\s+/g," ").trim()})),i()}function i(){if(n.value.length===0){s.value="";return}const u=200;let m=n.value[0]?.id??"";for(const p of n.value){const b=document.getElementById(p.id);b&&b.getBoundingClientRect().top<=u&&(m=p.id)}s.value=m}function l(){o===0&&(o=window.requestAnimationFrame(()=>{o=0,i()}))}async function d(){await lt(),await new Promise(u=>window.requestAnimationFrame(()=>u())),a()}return De(()=>t.fullPath,()=>{d()}),gn(()=>{window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),d()}),kt(()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l),o!==0&&window.cancelAnimationFrame(o)}),(u,m)=>n.value.length>1?(v(),y("nav",vV,[m[1]||(m[1]=g("p",{class:"doc-toc__title"},"本页目录",-1)),g("ul",gV,[(v(!0),y(ie,null,xe(n.value,p=>(v(),y("li",{key:p.id},[g("a",{href:`#${p.id}`,class:de(["doc-toc__link",{"is-active":s.value===p.id}])},L(p.text),11,bV)]))),128))]),g("a",yV,[c(r(Et),{name:"arrow-left",size:13,class:"doc-toc__top-icon"}),m[0]||(m[0]=_(" 回到顶部 ",-1))])])):Q("",!0)}}),MV=ce(hV,[["__scopeId","data-v-c03e6fc0"]]),_V={class:"docs-shell"},kV={id:"doc-main",class:"docs-main",tabindex:"-1"},wV={key:1,class:"docs-toc"},xV={class:"docs-footer"},BV={class:"docs-footer__inner"},CV={class:"docs-footer__meta"},$V=["href"],TV=C({__name:"DocsLayout",setup(e){const t=ra(),n=da(),s=x(()=>t.name==="component"||String(t.name??"").startsWith("design-"));function o(i){typeof window>"u"||(window.innerWidth<=980?document.body.style.overflow=i?"hidden":"":document.body.style.overflow="")}function a(){window.innerWidth>980&&(n.closeSidebar(),o(!1))}return De(()=>n.sidebarOpen,i=>o(i)),De(()=>t.fullPath,i=>{n.closeSidebar(),o(!1),n.recordVisit(i)}),gn(()=>window.addEventListener("resize",a)),kt(()=>{window.removeEventListener("resize",a),document.body.style.overflow=""}),(i,l)=>(v(),y("div",_V,[c(Fh),g("div",{class:de(["docs-body",{"docs-body--with-toc":s.value}])},[c(fV),r(n).sidebarOpen?(v(),y("div",{key:0,class:"docs-backdrop","aria-hidden":"true",onClick:l[0]||(l[0]=d=>r(n).closeSidebar())})):Q("",!0),g("main",kV,[c(r(cc))]),s.value?(v(),y("aside",wV,[c(MV)])):Q("",!0)],2),g("footer",xV,[g("div",BV,[g("span",null,"© 2026 "+L(r(Yn).name)+" · MIT License",1),g("span",CV,L(r(Yn).version)+" · Layout & Data Display",1),g("a",{href:r(Yn).github,target:"_blank",rel:"noopener noreferrer"},"GitHub",8,$V)])]),c(r(Qd)),c(r(Nd))]))}}),IV=ce(TV,[["__scopeId","data-v-7ba31987"]]),VV=C({__name:"App",setup(e){return(t,n)=>(v(),y(ie,null,[n[0]||(n[0]=g("a",{class:"skip-link",href:"#doc-main"},"跳到正文",-1)),c(IV)],64))}}),SV="modulepreload",zV=function(e){return"/anemia-ui-docs/"+e},Jl={},Mn=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let i=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");o=i(n.map(u=>{if(u=zV(u),u in Jl)return;Jl[u]=!0;const m=u.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const b=document.createElement("link");if(b.rel=m?"stylesheet":SV,m||(b.as="script"),b.crossOrigin="",b.href=u,d&&b.setAttribute("nonce",d),document.head.appendChild(b),m)return new Promise((h,B)=>{b.addEventListener("load",h),b.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return o.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},AV=$h({history:lh("/anemia-ui-docs/"),routes:[{path:"/",name:"home",component:()=>Mn(()=>import("./HomePage-BzQJkyCI.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},{path:"/components",name:"components",component:()=>Mn(()=>import("./ComponentsOverview-DlWiFXrc.js"),__vite__mapDeps([7,3,4,8,9,5,10]))},{path:"/components/:name",name:"component",component:()=>Mn(()=>import("./ComponentPage-C62stpb6.js"),__vite__mapDeps([11,1,2,8,9,5,12])),props:!0},{path:"/design/colors",name:"design-colors",component:()=>Mn(()=>import("./ColorsPage-CkQjUEC5.js"),__vite__mapDeps([13,14,8,9,5,15]))},{path:"/design/typography",name:"design-typography",component:()=>Mn(()=>import("./TypographyPage-BT962N8O.js"),__vite__mapDeps([16,17,14,18,8,9,5,19]))},{path:"/design/spacing",name:"design-spacing",component:()=>Mn(()=>import("./SpacingPage-DwW4zIC4.js"),__vite__mapDeps([20,17,14,18,8,9,5,21]))},{path:"/design/radius",name:"design-radius",component:()=>Mn(()=>import("./RadiusPage-DdPDE3Et.js"),__vite__mapDeps([22,17,14,18,8,9,5,23]))},{path:"/design/motion",name:"design-motion",component:()=>Mn(()=>import("./MotionPage-CdDD2-Si.js"),__vite__mapDeps([24,17,14,18,8,9,5,25]))},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.hash?{el:e.hash,top:88,behavior:"smooth"}:{top:0})}}),ua=Hm(VV);ua.use(Qm());ua.use(AV);ua.use(wy);ua.mount("#app");export{ys as A,x as B,le as C,de as D,ra as E,ie as F,Q as G,Qo as H,OV as I,De as J,kt as K,$e as L,st as M,pi as N,RV as O,gn as P,iu as Q,rs as R,It as S,gd as V,ce as _,g as a,c as b,y as c,C as d,Je as e,qe as f,_ as g,je as h,Dt as i,R as j,PV as k,py as l,xe as m,Et as n,v as o,Bi as p,Vt as q,z as r,Yn as s,L as t,r as u,we as v,f as w,pt as x,LV as y,EV as z};
