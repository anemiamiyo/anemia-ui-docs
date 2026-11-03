const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DIvPPZd3.js","assets/CodeBlock-BA8CW5Va.js","assets/CodeBlock-BHsote2F.css","assets/ComponentGrid-DJbr2DQZ.js","assets/ComponentGrid-CVi1sLVQ.css","assets/usePageMeta-D5r1Pyyq.js","assets/HomePage-C03FvlBe.css","assets/ComponentsOverview-DQX0gTxv.js","assets/PageHeader-BTK_Mqr8.js","assets/PageHeader-DyN4Qpos.css","assets/ComponentsOverview-HCZ0-DKX.css","assets/ComponentPage-Dvnlym9B.js","assets/ComponentPage-DjSZnxX1.css","assets/ColorsPage-CjO3u-MP.js","assets/useCssVar-D-8eMQCQ.js","assets/ColorsPage-QwFHKLxn.css","assets/TypographyPage-pHfpEpnb.js","assets/TokenValue-DQ927eM6.js","assets/TokenValue-PpXv62mX.css","assets/TypographyPage-Dr8BWx-J.css","assets/SpacingPage-Bw1bzYve.js","assets/SpacingPage-ChIpvDMM.css","assets/RadiusPage-Bn_Maat6.js","assets/RadiusPage-Bi4fMK8u.css","assets/MotionPage-CTzpQOhF.js","assets/MotionPage-DzGmTf14.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ra(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ie={},Ln=[],Ut=()=>{},Bi=()=>!1,ks=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xs=e=>e.startsWith("onUpdate:"),Ge=Object.assign,Da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Hd=Object.prototype.hasOwnProperty,Ce=(e,t)=>Hd.call(e,t),de=Array.isArray,wn=e=>Ho(e)==="[object Map]",rs=e=>Ho(e)==="[object Set]",ml=e=>Ho(e)==="[object Date]",ge=e=>typeof e=="function",Re=e=>typeof e=="string",ht=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",Ci=e=>($e(e)||ge(e))&&ge(e.then)&&ge(e.catch),Ti=Object.prototype.toString,Ho=e=>Ti.call(e),jd=e=>Ho(e).slice(8,-1),$i=e=>Ho(e)==="[object Object]",Bs=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xo=Ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cs=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Wd=/-\w/g,ct=Cs(e=>e.replace(Wd,t=>t.slice(1).toUpperCase())),qd=/\B([A-Z])/g,Tn=Cs(e=>e.replace(qd,"-$1").toLowerCase()),Ts=Cs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ys=Cs(e=>e?`on${Ts(e)}`:""),Nt=(e,t)=>!Object.is(e,t),Xs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Vi=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Kd=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Qd=e=>{const t=Re(e)?Number(e):NaN;return isNaN(t)?e:t};let pl;const $s=()=>pl||(pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Je(e){if(de(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=Re(o)?eu(o):Je(o);if(s)for(const a in s)t[a]=s[a]}return t}else if(Re(e)||$e(e))return e}const Yd=/;(?![^(]*\))/g,Xd=/:([^]+)/,Zd=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function eu(e){const t={};return e.replace(Zd,n=>n.startsWith("/*")?"":n).split(Yd).forEach(n=>{if(n){const o=n.split(Xd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function ue(e){let t="";if(Re(e))t=e;else if(de(e))for(let n=0;n<e.length;n++){const o=ue(e[n]);o&&(t+=o+" ")}else if($e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function tu(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Re(t)&&(e.class=ue(t)),n&&(e.style=Je(n)),e}const nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",ou=Ra(nu);function Si(e){return!!e||e===""}function su(e,t,n){if(e.length!==t.length)return!1;let o=!0;for(let s=0;o&&s<e.length;s++)o=Vs(e[s],t[s],n);return o}function fl(e,t,n){if(e.size!==t.size)return!1;const o=Array.from(t),s=new Uint8Array(o.length);for(const a of e){let l=-1;for(let i=0;i<o.length;i++)if(!s[i]&&Vs(a,o[i],n)){l=i;break}if(l<0)return!1;s[l]=1}return!0}function au(e,t,n){let o=wn(e),s=wn(t);if(o||s||(o=rs(e),s=rs(t),o||s))return o&&s?fl(e,t,n):!1;const a=Object.keys(e).length,l=Object.keys(t).length;if(a!==l)return!1;for(const i in e){const r=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(r&&!c||!r&&c||!Vs(e[i],t[i],n))return!1}return String(e)===String(t)}function vl(e,t,n,o){n||(n=[new Map,new Map]);const[s,a]=n;if(s.has(e)||a.has(t))return s.get(e)===t&&a.get(t)===e;s.set(e,t),a.set(t,e);const l=o(e,t,n);return s.delete(e),a.delete(t),l}function Vs(e,t,n){if(e===t)return!0;let o=ml(e),s=ml(t);return o||s?o&&s?e.getTime()===t.getTime():!1:(o=ht(e),s=ht(t),o||s?e===t:(o=de(e),s=de(t),o||s?o&&s?vl(e,t,n,su):!1:(o=$e(e),s=$e(t),o||s?!o||!s?!1:vl(e,t,n,au):String(e)===String(t))))}const Ii=e=>!!(e&&e.__v_isRef===!0),H=e=>Re(e)?e:e==null?"":de(e)||$e(e)&&(e.toString===Ti||!ge(e.toString))?Ii(e)?H(e.value):JSON.stringify(e,zi,2):String(e),zi=(e,t)=>Ii(t)?zi(e,t.value):wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],a)=>(n[Zs(o,a)+" =>"]=s,n),{})}:rs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zs(n))}:ht(t)?Zs(t):$e(t)&&!de(t)&&!$i(t)?String(t):t,Zs=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class Ei{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ke&&(Ke.active?(this.parent=Ke,this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const o=this.effects.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}}run(t){if(this._active){const n=Ke;try{return Ke=this,t()}finally{Ke=n}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){if(this._on>0&&--this._on===0){if(Ke===this)Ke=this.prevScope;else{let t=Ke;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,o=s.length;n<o;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ai(e){return new Ei(e)}function Ri(){return Ke}function lu(e,t=!1){Ke&&Ke.cleanups.push(e)}let Ae;const ea=new WeakSet;class Di{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&(Ke.active?Ke.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ea.has(this)&&(ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gl(this),Li(this);const t=Ae,n=Vt;Ae=this,Vt=!0;try{return this.fn()}finally{Fi(this),Ae=t,Vt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)La(t);this.deps=this.depsTail=void 0,gl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let Pi=0,Bo,Co;function Oi(e,t=!1){if(e.flags|=8,t){e.next=Co,Co=e;return}e.next=Bo,Bo=e}function Pa(){Pi++}function Oa(){if(--Pi>0)return;if(Co){let t=Co;for(Co=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Bo;){let t=Bo;for(Bo=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Li(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fi(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),La(o),iu(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function ga(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ni(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ni(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zo)||(e.globalVersion=zo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ga(e))))return;e.flags|=2;const t=e.dep,n=Ae,o=Vt;Ae=e,Vt=!0;try{Li(e);const s=e.fn(e._value);(t.version===0||Nt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Ae=n,Vt=o,Fi(e),e.flags&=-3}}function La(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let a=n.computed.deps;a;a=a.nextDep)La(a,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function iu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Vt=!0;const Ji=[];function Wt(){Ji.push(Vt),Vt=!1}function qt(){const e=Ji.pop();Vt=e===void 0?!0:e}function gl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ae;Ae=void 0;try{t()}finally{Ae=n}}}let zo=0,ru=class{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class Fa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ae||!Vt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new ru(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,Ui(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=o)}return n}trigger(t){this.version++,zo++,this.notify(t)}notify(t){Pa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oa()}}}function Ui(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Ui(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ds=new WeakMap,Jn=Symbol(""),ha=Symbol(""),Eo=Symbol("");function st(e,t,n){if(Vt&&Ae){let o=ds.get(e);o||ds.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new Fa),s.map=o,s.key=n),s.track()}}function en(e,t,n,o,s,a){const l=ds.get(e);if(!l){zo++;return}const i=r=>{r&&r.trigger()};if(Pa(),t==="clear")l.forEach(i);else{const r=de(e),c=r&&Bs(n);if(r&&n==="length"){const u=Number(o);l.forEach((p,f)=>{(f==="length"||f===Eo||!ht(f)&&f>=u)&&i(p)})}else switch((n!==void 0||l.has(void 0))&&i(l.get(n)),c&&i(l.get(Eo)),t){case"add":r?c&&i(l.get("length")):(i(l.get(Jn)),wn(e)&&i(l.get(ha)));break;case"delete":r||(i(l.get(Jn)),wn(e)&&i(l.get(ha)));break;case"set":wn(e)&&i(l.get(Jn));break}}Oa()}function du(e,t){const n=ds.get(e);return n&&n.get(t)}function Kn(e){const t=_e(e);return t===e||(st(t,"iterate",Eo),gt(e))?t:Kt(e)?Gt(e)?t.map(n=>kn(kt(n))):t.map(kn):t.map(kt)}function Ss(e){return st(e=_e(e),"iterate",Eo),e}function Pt(e,t){return Kt(e)?kn(Gt(e)?kt(t):t):kt(t)}const uu={__proto__:null,[Symbol.iterator](){return ta(this,Symbol.iterator,e=>Pt(this,e))},concat(...e){return Kn(this).concat(...e.map(t=>de(t)?Kn(t):t))},entries(){return ta(this,"entries",e=>(e[1]=Pt(this,e[1]),e))},every(e,t){return Qt(this,"every",e,t,void 0,arguments)},filter(e,t){return Qt(this,"filter",e,t,n=>n.map(o=>Pt(this,o)),arguments)},find(e,t){return Qt(this,"find",e,t,n=>Pt(this,n),arguments)},findIndex(e,t){return Qt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Qt(this,"findLast",e,t,n=>Pt(this,n),arguments)},findLastIndex(e,t){return Qt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Qt(this,"forEach",e,t,void 0,arguments)},includes(...e){return na(this,"includes",e)},indexOf(...e){return na(this,"indexOf",e)},join(e){return Kn(this).join(e)},lastIndexOf(...e){return na(this,"lastIndexOf",e)},map(e,t){return Qt(this,"map",e,t,void 0,arguments)},pop(){return go(this,"pop")},push(...e){return go(this,"push",e)},reduce(e,...t){return bl(this,"reduce",e,t)},reduceRight(e,...t){return bl(this,"reduceRight",e,t)},shift(){return go(this,"shift")},some(e,t){return Qt(this,"some",e,t,void 0,arguments)},splice(...e){return go(this,"splice",e)},toReversed(){return Kn(this).toReversed()},toSorted(e){return Kn(this).toSorted(e)},toSpliced(...e){return Kn(this).toSpliced(...e)},unshift(...e){return go(this,"unshift",e)},values(){return ta(this,"values",e=>Pt(this,e))}};function ta(e,t,n){const o=Ss(e),s=o[t],a=s.call(o);if(o!==e&&!gt(e)){if(a[Symbol.toStringTag]==="Array Iterator"){const l=Object.create(Object.getPrototypeOf(a));return l.next=()=>hl(a.next(),n),s!==Gi[t]&&Object.defineProperties(l,{return:{get(){const i=a.return;return typeof i=="function"?i.bind(a):i}},throw:{get(){const i=a.throw;return typeof i=="function"?i.bind(a):i}}}),l}a._next=a.next,a.next=()=>hl(a._next(),n)}return a}function hl(e,t){return e.done||(e.value=t(e.value)),e}const Gi=Array.prototype;function Qt(e,t,n,o,s,a){const l=Ss(e),i=l!==e&&!gt(e),r=l[t];if(r!==Gi[t]){const p=r.apply(e,a);return i?kt(p):p}let c=n;l!==e&&(i?c=function(p,f){return n.call(this,Pt(e,p),f,e)}:n.length>2&&(c=function(p,f){return n.call(this,p,f,e)}));const u=r.call(l,c,o);return i&&s?s(u):u}function bl(e,t,n,o){const s=Ss(e),a=s!==e&&!gt(e);let l=n,i=!1;s!==e&&(a?(i=o.length===0,l=function(c,u,p){return i&&(i=!1,c=Pt(e,c)),n.call(this,c,Pt(e,u),p,e)}):n.length>3&&(l=function(c,u,p){return n.call(this,c,u,p,e)}));const r=s[t](l,...o);return i?Pt(e,r):r}function na(e,t,n){const o=_e(e);st(o,"iterate",Eo);const s=o[t](...n);return(s===-1||s===!1)&&Is(n[0])?(n[0]=_e(n[0]),o[t](...n)):s}function go(e,t,n=[]){Wt(),Pa();const o=_e(e)[t].apply(e,n);return Oa(),qt(),o}const cu=Ra("__proto__,__v_isRef,__isVue"),Hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function mu(e){ht(e)||(e=String(e));const t=_e(this);return st(t,"has",e),t.hasOwnProperty(e)}class ji{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return a;if(n==="__v_raw")return o===(s?a?wu:Qi:a?Ki:qi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const l=de(t);if(!s){let r;if(l&&(r=uu[n]))return r;if(n==="hasOwnProperty")return mu}const i=Reflect.get(t,n,Ue(t)?t:o);if((ht(n)?Hi.has(n):cu(n))||(s||st(t,"get",n),a))return i;if(Ue(i)){const r=l&&Bs(n)?i:i.value;return s&&$e(r)?dn(r):r}return $e(i)?s?dn(i):$n(i):i}}class Wi extends ji{constructor(t=!1){super(!1,t)}set(t,n,o,s){let a=t[n];const l=de(t)&&Bs(n);if(!this._isShallow){const c=Kt(a);if(!gt(o)&&!Kt(o)&&(a=_e(a),o=_e(o)),!l&&Ue(a)&&!Ue(o))return c||(a.value=o),!0}const i=l?Number(n)<t.length:Ce(t,n),r=Reflect.set(t,n,o,Ue(t)?t:s);return t===_e(s)&&r&&(i?Nt(o,a)&&en(t,"set",n,o):en(t,"add",n,o)),r}deleteProperty(t,n){const o=Ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&en(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!ht(n)||!Hi.has(n))&&st(t,"has",n),o}ownKeys(t){return st(t,"iterate",de(t)?"length":Jn),Reflect.ownKeys(t)}}class pu extends ji{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const fu=new Wi,vu=new pu,gu=new Wi(!0);const ba=e=>e,Xo=e=>Reflect.getPrototypeOf(e);function hu(e,t,n){return function(...o){const s=this.__v_raw,a=_e(s),l=wn(a),i=e==="entries"||e===Symbol.iterator&&l,r=e==="keys"&&l,c=s[e](...o),u=n?ba:t?kn:kt;return!t&&st(a,"iterate",r?ha:Jn),Ge(Object.create(c),{next(){const{value:p,done:f}=c.next();return f?{value:p,done:f}:{value:i?[u(p[0]),u(p[1])]:u(p),done:f}}})}}function Zo(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bu(e,t){const n={get(s){const a=this.__v_raw,l=_e(a),i=_e(s);e||(Nt(s,i)&&st(l,"get",s),st(l,"get",i));const{has:r}=Xo(l),c=t?ba:e?kn:kt;if(r.call(l,s))return c(a.get(s));if(r.call(l,i))return c(a.get(i));a!==l&&a.get(s)},get size(){const s=this.__v_raw;return!e&&st(_e(s),"iterate",Jn),s.size},has(s){const a=this.__v_raw,l=_e(a),i=_e(s);return e||(Nt(s,i)&&st(l,"has",s),st(l,"has",i)),s===i?a.has(s):a.has(s)||a.has(i)},forEach(s,a){const l=this,i=l.__v_raw,r=_e(i),c=t?ba:e?kn:kt;return!e&&st(r,"iterate",Jn),i.forEach((u,p)=>s.call(a,c(u),c(p),l))}};return Ge(n,e?{add:Zo("add"),set:Zo("set"),delete:Zo("delete"),clear:Zo("clear")}:{add(s){const a=_e(this),l=Xo(a),i=_e(s),r=!t&&!gt(s)&&!Kt(s)?i:s;return l.has.call(a,r)||Nt(s,r)&&l.has.call(a,s)||Nt(i,r)&&l.has.call(a,i)||(a.add(r),en(a,"add",r,r)),this},set(s,a){!t&&!gt(a)&&!Kt(a)&&(a=_e(a));const l=_e(this),{has:i,get:r}=Xo(l);let c=i.call(l,s);c||(s=_e(s),c=i.call(l,s));const u=r.call(l,s);return l.set(s,a),c?Nt(a,u)&&en(l,"set",s,a):en(l,"add",s,a),this},delete(s){const a=_e(this),{has:l,get:i}=Xo(a);let r=l.call(a,s);r||(s=_e(s),r=l.call(a,s)),i&&i.call(a,s);const c=a.delete(s);return r&&en(a,"delete",s,void 0),c},clear(){const s=_e(this),a=s.size!==0,l=s.clear();return a&&en(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hu(s,e,t)}),n}function Na(e,t){const n=bu(e,t);return(o,s,a)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?o:Reflect.get(Ce(n,s)&&s in o?n:o,s,a)}const yu={get:Na(!1,!1)},Mu={get:Na(!1,!0)},_u={get:Na(!0,!1)};const qi=new WeakMap,Ki=new WeakMap,Qi=new WeakMap,wu=new WeakMap;function ku(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $n(e){return Kt(e)?e:Ja(e,!1,fu,yu,qi)}function Yi(e){return Ja(e,!1,gu,Mu,Ki)}function dn(e){return Ja(e,!0,vu,_u,Qi)}function Ja(e,t,n,o,s){if(!$e(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const a=s.get(e);if(a)return a;const l=ku(jd(e));if(l===0)return e;const i=new Proxy(e,l===2?o:n);return s.set(e,i),i}function Gt(e){return Kt(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function gt(e){return!!(e&&e.__v_isShallow)}function Is(e){return e?!!e.__v_raw:!1}function _e(e){const t=e&&e.__v_raw;return t?_e(t):e}function Ua(e){return!Ce(e,"__v_skip")&&Object.isExtensible(e)&&Vi(e,"__v_skip",!0),e}const kt=e=>$e(e)?$n(e):e,kn=e=>$e(e)?dn(e):e;function Ue(e){return e?e.__v_isRef===!0:!1}function O(e){return Xi(e,!1)}function xu(e){return Xi(e,!0)}function Xi(e,t){return Ue(e)?e:new Bu(e,t)}class Bu{constructor(t,n){this.dep=new Fa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:_e(t),this._value=n?t:kt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||gt(t)||Kt(t);t=o?t:_e(t),Nt(t,n)&&(this._rawValue=t,this._value=o?t:kt(t),this.dep.trigger())}}function d(e){return Ue(e)?e.value:e}function Ct(e){return ge(e)?e():d(e)}const Cu={get:(e,t,n)=>t==="__v_raw"?e:d(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Zi(e){return Gt(e)?e:new Proxy(e,Cu)}function Tu(e){const t=de(e)?new Array(e.length):{};for(const n in e)t[n]=Vu(e,n);return t}class $u{constructor(t,n,o){this._object=t,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0,this._key=ht(n)?n:String(n),this._raw=_e(t);let s=!0,a=t;if(!de(t)||ht(this._key)||!Bs(this._key))do s=!Is(a)||gt(a);while(s&&(a=a.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=d(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Ue(this._raw[this._key])){const n=this._object[this._key];if(Ue(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return du(this._raw,this._key)}}function Vu(e,t,n){return new $u(e,t,n)}class Su{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Fa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Oi(this,!0),!0}get value(){const t=this.dep.track();return Ni(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Iu(e,t,n=!1){let o,s;return ge(e)?o=e:(o=e.get,s=e.set),new Su(o,s,n)}const es={},us=new WeakMap;let Rn;function zu(e,t=!1,n=Rn){if(n){let o=us.get(n);o||us.set(n,o=[]),o.push(e)}}function Eu(e,t,n=Ie){const{immediate:o,deep:s,once:a,scheduler:l,augmentJob:i,call:r}=n,c=L=>s?L:gt(L)||s===!1||s===0?tn(L,1):tn(L);let u,p,f,v,x=!1,$=!1;if(Ue(e)?(p=()=>e.value,x=gt(e)):Gt(e)?(p=()=>c(e),x=!0):de(e)?($=!0,x=e.some(L=>Gt(L)||gt(L)),p=()=>e.map(L=>{if(Ue(L))return L.value;if(Gt(L))return c(L);if(ge(L))return r?r(L,2):L()})):ge(e)?t?p=r?()=>r(e,2):e:p=()=>{if(f){Wt();try{f()}finally{qt()}}const L=Rn;Rn=u;try{return r?r(e,3,[v]):e(v)}finally{Rn=L}}:p=Ut,t&&s){const L=p,W=s===!0?1/0:s;p=()=>tn(L(),W)}const S=Ri(),E=()=>{u.stop(),S&&S.active&&Da(S.effects,u)};if(a&&t){const L=t;t=(...W)=>{try{return L(...W)}finally{E()}}}let z=$?new Array(e.length).fill(es):es;const A=L=>{if(!(!(u.flags&1)||!u.dirty&&!L))if(t){const W=u.run();if(L||s||x||($?W.some((ne,q)=>Nt(ne,z[q])):Nt(W,z))){const ne=Rn;Wt();try{f&&f(),Rn=u;const q=[W,z===es?void 0:$&&z[0]===es?[]:z,v];z=W,r?r(t,3,q):t(...q)}finally{Rn=ne,qt()}}}else u.run()};return i&&i(A),u=new Di(p),u.scheduler=l?()=>l(A,!1):A,v=L=>zu(L,!1,u),f=u.onStop=()=>{const L=us.get(u);if(L){if(r)r(L,4);else for(const W of L)W();us.delete(u)}},t?o?A(!0):z=u.run():l?l(A.bind(null,!0),!0):u.run(),E.pause=u.pause.bind(u),E.resume=u.resume.bind(u),E.stop=E,E}function tn(e,t=1/0,n){if(t<=0||!$e(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ue(e))tn(e.value,t,n);else if(de(e))for(let o=0;o<e.length;o++)tn(e[o],t,n);else if(rs(e)||wn(e))e.forEach(o=>{tn(o,t,n)});else if($i(e)){for(const o in e)tn(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&tn(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jo(e,t,n,o){try{return o?e(...o):e()}catch(s){zs(s,t,n)}}function xt(e,t,n,o){if(ge(e)){const s=jo(e,t,n,o);return s&&Ci(s)&&s.catch(a=>{zs(a,t,n)}),s}if(de(e)){const s=[];for(let a=0;a<e.length;a++)s.push(xt(e[a],t,n,o));return s}}function zs(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Ie;if(t){let i=t.parent;const r=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,r,c)===!1)return}i=i.parent}if(a){Wt(),jo(a,null,10,[e,r,c]),qt();return}}Au(e,n,s,o,l)}function Au(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const ut=[];let Bt=-1;const Ot=[];let Mn=null,Xn=0;const er=Promise.resolve();let cs=null;function lt(e){const t=cs||er;return e?t.then(this?e.bind(this):e):t}function Ru(e){let t=Bt+1,n=ut.length;for(;t<n;){const o=t+n>>>1,s=ut[o],a=Ao(s);a<e||a===e&&s.flags&2?t=o+1:n=o}return t}function Ga(e){if(!(e.flags&1)){const t=Ao(e),n=ut[ut.length-1];!n||!(e.flags&2)&&t>=Ao(n)?ut.push(e):ut.splice(Ru(t),0,e),e.flags|=1,tr()}}function tr(){cs||(cs=er.then(sr))}function Du(e){if(!de(e))Mn&&e.id===-1?Mn.splice(Xn+1,0,e):e.flags&1||(Ot.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Ot.push(e[t]);tr()}function nr(e,t,n,o=Bt+1){for(;o<ut.length;o++){const s=ut[o];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;ut.splice(o,1),o=e?o-1:Bt,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function or(e,t,n=0){if(Ot.length){let o=Ot,s=0;if(t){o=[];for(let l=0;l<Ot.length;l++){const i=Ot[l];(i.i!==void 0?!i.i||i.i.uid<n:t.has(i))?Ot[s++]=i:o.push(i)}}const a=[...new Set(o)].sort((l,i)=>Ao(l)-Ao(i));if(Ot.length=s,Mn){for(let l=0;l<a.length;l++)Mn.push(a[l]);return}for(Mn=a,Xn=0;Xn<Mn.length;Xn++){const l=Mn[Xn];l.flags&4&&(l.flags&=-2),l.flags&8||l(),l.flags&=-2}Mn=null,Xn=0}}let oa=!1;function Pu(e,t){if(oa){e();return}const n=t===void 0?void 0:new Set(Ot);e(),oa=!0;try{nr(void 0,t),or(void 0,n,t)}finally{oa=!1}}const Ao=e=>e.id==null?e.flags&2?-1:1/0:e.id;function sr(e){try{for(Bt=0;Bt<ut.length;Bt++){const t=ut[Bt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),jo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Bt<ut.length;Bt++){const t=ut[Bt];t&&(t.flags&=-2)}Bt=-1,ut.length=0,or(),cs=null,(ut.length||Ot.length)&&sr()}}let Ze=null,ar=null;function ms(e){const t=Ze;return Ze=e,ar=e&&e.type.__scopeId||null,t}function g(e,t=Ze,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&gs(-1);const a=ms(t),l=rn.length;let i;try{i=e(...s)}finally{for(let r=rn.length;r>l;r--)Qa();ms(a),o._d&&gs(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function Vn(e,t){if(Ze===null)return e;const n=Os(Ze),o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,l,i,r=Ie]=t[s];a&&(ge(a)&&(a={mounted:a,updated:a}),a.deep&&tn(l),o.push({dir:a,instance:n,value:l,oldValue:void 0,arg:i,modifiers:r}))}return e}function zn(e,t,n,o){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const i=s[l];a&&(i.oldValue=a[l].value);let r=i.dir[o];r&&(Wt(),xt(r,n,8,[e.el,i,e,t]),qt())}}function ln(e,t){if(at){let n=at.provides;const o=at.parent&&at.parent.provides;o===n&&(n=at.provides=Object.create(o)),n[e]=t}}function nt(e,t,n=!1){const o=co();if(o||Un){let s=Un?Un._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ge(t)?t.call(o&&o.proxy):t}}function Ou(){return!!(co()||Un)}const Lu=Symbol.for("v-scx"),Fu=()=>nt(Lu);function Nu(e,t){return Ha(e,null,t)}function ze(e,t,n){return Ha(e,t,n)}function Ha(e,t,n=Ie){const{immediate:o,deep:s,flush:a,once:l}=n,i=Ge({},n),r=t&&o||!t&&a!=="post";let c;if(Lo){if(a==="sync"){const v=Fu();c=v.__watcherHandles||(v.__watcherHandles=[])}else if(!r){const v=()=>{};return v.stop=Ut,v.resume=Ut,v.pause=Ut,v}}const u=at;i.call=(v,x,$)=>xt(v,u,x,$);let p=!1;a==="post"?i.scheduler=v=>{v.i=u,rt(v,u&&u.suspense)}:a!=="sync"&&(p=!0,i.scheduler=(v,x)=>{x?v():Ga(v)}),i.augmentJob=v=>{t&&(v.flags|=4),p&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const f=Eu(e,t,i);return Lo&&(c?c.push(f):r&&f()),f}function Ju(e,t,n){const o=this.proxy,s=Re(e)?e.includes(".")?lr(o,e):()=>o[e]:e.bind(o,o);let a;ge(t)?a=t:(a=t.handler,n=t);const l=Wo(this),i=Ha(s,a.bind(o),n);return l(),i}function lr(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}const hn=new WeakMap,ir=Symbol("_vte"),Es=e=>e.__isTeleport,Dn=e=>e&&(e.disabled||e.disabled===""),Uu=e=>e&&(e.defer||e.defer===""),yl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ml=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ya=(e,t)=>{const n=e&&e.to;return Re(n)?t?t(n):null:n},Gu={name:"Teleport",__isTeleport:!0,process(e,t,n,o,s,a,l,i,r,c){const{mc:u,pc:p,pbc:f,o:{insert:v,querySelector:x,createText:$,createComment:S,parentNode:E}}=c,z=Dn(t.props);let{dynamicChildren:A}=t;const L=(q,K,J)=>{q.shapeFlag&16&&u(q.children,K,J,s,a,l,i,r)},W=(q=t)=>{const K=Dn(q.props),J=q.target=ya(q.props,x),I=Ma(J,q,$,v);J&&(l!=="svg"&&yl(J)?l="svg":l!=="mathml"&&Ml(J)&&(l="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(J),K||(L(q,J,I),_o(q,!1)))},ne=q=>{const K=()=>{if(hn.get(q)===K){if(hn.delete(q),Dn(q.props)){const J=E(q.el)||n;L(q,J,q.anchor),_o(q,!0)}W(q)}};hn.set(q,K),rt(K,a)};if(e==null){const q=t.el=$(""),K=t.anchor=$("");if(v(q,n,o),v(K,n,o),Uu(t.props)||a&&a.pendingBranch){ne(t);return}z&&(L(t,n,K),_o(t,!0)),W()}else{t.el=e.el;const q=t.anchor=e.anchor,K=hn.get(e);if(K){K.flags|=8,hn.delete(e),ne(t);return}t.targetStart=e.targetStart;const J=t.target=e.target,I=t.targetAnchor=e.targetAnchor,w=Dn(e.props),B=w?n:J,R=w?q:I;if(l==="svg"||yl(J)?l="svg":(l==="mathml"||Ml(J))&&(l="mathml"),A?(f(e.dynamicChildren,A,B,s,a,l,i),Ka(e,t,!0)):r||p(e,t,B,R,s,a,l,i,!1),z)w?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ts(t,n,q,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Q=ya(t.props,x);Q&&(t.target=Q,ts(t,Q,null,c,0))}else w&&ts(t,J,I,c,1);_o(t,z)}},remove(e,t,n,{um:o,o:{remove:s}},a){const{shapeFlag:l,children:i,anchor:r,targetStart:c,targetAnchor:u,target:p,props:f}=e,v=Dn(f),x=a||!v,$=hn.get(e);if($&&($.flags|=8,hn.delete(e)),p&&(s(c),s(u)),a&&s(r),!$&&(v||p)&&l&16)for(let S=0;S<i.length;S++){const E=i[S];o(E,t,n,x,!!E.dynamicChildren)}},move:ts,hydrate:Hu};function ts(e,t,n,{o:{insert:o},m:s},a=2){a===0&&(e.targetStart&&o(e.targetStart,t,n),o(e.targetAnchor,t,n),n=e.targetAnchor);const{el:l,anchor:i,shapeFlag:r,children:c,props:u}=e,p=a===2;if(p&&o(l,t,n),!hn.has(e)&&(!p||Dn(u))&&r&16)for(let f=0;f<c.length;f++)s(c[f],t,n,2);p&&o(i,t,n)}function Hu(e,t,n,o,s,a,{o:{nextSibling:l,parentNode:i,querySelector:r,insert:c,createText:u}},p){function f(S,E){let z=E;for(;z;){if(z&&z.nodeType===8){if(z.data==="teleport start anchor")t.targetStart=z;else if(z.data==="teleport anchor"){t.targetAnchor=z,S._lpa=t.targetAnchor&&l(t.targetAnchor);break}}z=l(z)}}function v(S,E){E.anchor=p(l(S),E,i(S),n,o,s,a)}const x=t.target=ya(t.props,r),$=Dn(t.props);if(x){const S=x._lpa||x.firstChild;t.shapeFlag&16&&($?(v(e,t),f(x,S),t.targetAnchor||Ma(x,t,u,c,i(e)===x?e:null)):(t.anchor=l(e),f(x,S),t.targetAnchor||Ma(x,t,u,c),p(S&&l(S),t,x,n,o,s,a))),_o(t,$)}else $&&t.shapeFlag&16&&(v(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const cn=Gu;function _o(e,t){const n=e.ctx;if(n&&n.ut){let o,s;for(t?(o=e.el,s=e.anchor):(o=e.targetStart,s=e.targetAnchor);o&&o!==s;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function Ma(e,t,n,o,s=null){const a=t.targetStart=n(""),l=t.targetAnchor=n("");return a[ir]=l,e&&(o(a,e,s),o(l,e,s)),l}const _t=Symbol("_leaveCb"),ho=Symbol("_enterCb");function rr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pn(()=>{e.isMounted=!0}),bt(()=>{e.isUnmounting=!0}),e}const Mt=[Function,Array],dr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},ju={name:"BaseTransition",props:dr,setup(e,{slots:t}){const n=co(),o=rr();return()=>{const s=t.default&&ja(t.default(),!0),a=s&&s.length?ur(s):n.subTree?te():void 0;if(!a)return;const l=_e(e),{mode:i}=l;if(o.isLeaving)return sa(a);const r=ps(a);if(!r)return sa(a);let c=Ro(r,l,o,n,p=>c=p);r.type!==et&&xn(r,c);let u=n.subTree&&ps(n.subTree);if(u&&u.type!==et&&!Pn(u,r)&&Do(n.subTree)){let p=Ro(u,l,o,n);if(xn(u,p),i==="out-in"&&r.type!==et)return o.isLeaving=!0,p.afterLeave=()=>{o.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,u=void 0},sa(a);i==="in-out"&&r.type!==et?p.delayLeave=(f,v,x)=>{const $=cr(o,u);$[String(u.key)]=u,f[_t]=()=>{v(),f[_t]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return a}}};function ur(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==et){t=n;break}}return t}const Wu=ju;function cr(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Ro(e,t,n,o,s){const{appear:a,mode:l,persisted:i=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:f,onLeave:v,onAfterLeave:x,onLeaveCancelled:$,onBeforeAppear:S,onAppear:E,onAfterAppear:z,onAppearCancelled:A}=t,L=String(e.key),W=cr(n,e),ne=(J,I)=>{J&&xt(J,o,9,I)},q=(J,I)=>{const w=I[1];ne(J,I),de(J)?J.every(B=>B.length<=1)&&w():J.length<=1&&w()},K={mode:l,persisted:i,beforeEnter(J){let I=r;if(!n.isMounted)if(a)I=S||r;else return;J[_t]&&J[_t](!0);const w=W[L];if(w&&Pn(e,w)){let B=w.el[_t];if(!B){const R=Do(w);B=R&&R.el[_t]}B&&B()}ne(I,[J])},enter(J){if(W[L]===e)return;let I=c,w=u,B=p;if(!n.isMounted)if(a)I=E||c,w=z||u,B=A||p;else return;let R=!1;J[ho]=he=>{R||(R=!0,he?ne(B,[J]):ne(w,[J]),K.delayedLeave&&K.delayedLeave(),J[ho]=void 0)};const Q=J[ho].bind(null,!1);I?q(I,[J,Q]):Q()},leave(J,I){const w=String(e.key);if(J[ho]&&J[ho](!0),n.isUnmounting)return I();ne(f,[J]);let B=!1;J[_t]=Q=>{B||(B=!0,I(),Q?ne($,[J]):ne(x,[J]),J[_t]=void 0,W[w]===e&&delete W[w])};const R=J[_t].bind(null,!1);W[w]=e,v?q(v,[J,R]):R()},clone(J){const I=Ro(J,t,n,o,s);return s&&s(I),I}};return K}function sa(e){if(As(e))return e=Bn(e),e.children=null,e}function ps(e){if(!As(e))return Es(e.type)&&e.children?ur(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ge(n.default))return n.default()}}function xn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;xn(Es(n.type)&&ps(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===le&&de(e.children)){const n=kr(e.children,!1);n&&xn(n,t)}}function ja(e,t=!1,n){let o=[],s=0;for(let a=0;a<e.length;a++){let l=e[a];const i=n==null?l.key:String(n)+String(l.key!=null?l.key:a);l.type===le?(l.patchFlag&128&&s++,o=o.concat(ja(l.children,t,i))):(t||l.type!==et)&&o.push(i!=null?Bn(l,{key:i}):l)}if(s>1)for(let a=0;a<o.length;a++)o[a].patchFlag=-2;return o}function Do(e){if(e.component)return Do(e.component.subTree);if(e.type===le){const t=de(e.children)&&kr(e.children,!1);return t?Do(t):void 0}if(e.type!==et)return e}function V(e,t){return ge(e)?Ge({name:e.name},t,{setup:e}):e}function qu(){const e=co();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function mr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function _l(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const fs=new WeakMap;function To(e,t,n,o,s=!1){if(de(e)){e.forEach(($,S)=>To($,t&&(de(t)?t[S]:t),n,o,s));return}if(eo(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&To(e,t,n,o.component.subTree);return}const a=o.shapeFlag&4?Os(o.component):o.el,l=s?null:a,{i,r}=e,c=t&&t.r,u=i.refs===Ie?i.refs={}:i.refs,p=i.setupState,f=_e(p),v=p===Ie?Bi:$=>_l(u,$)?!1:Ce(f,$),x=($,S)=>!(S&&_l(u,S));if(c!=null&&c!==r){if(wl(t),Re(c))u[c]=null,v(c)&&(p[c]=null);else if(Ue(c)){const $=t;x(c,$.k)&&(c.value=null),$.k&&(u[$.k]=null)}}if(ge(r))jo(r,i,12,[l,u]);else{const $=Re(r),S=Ue(r);if($||S){const E=()=>{if(e.f){const z=$?v(r)?p[r]:u[r]:x()||!e.k?r.value:u[e.k];if(s)de(z)&&Da(z,a);else if(de(z))z.includes(a)||z.push(a);else if($)u[r]=[a],v(r)&&(p[r]=u[r]);else{const A=[a];x(r,e.k)&&(r.value=A),e.k&&(u[e.k]=A)}}else $?(u[r]=l,v(r)&&(p[r]=l)):S&&(x(r,e.k)&&(r.value=l),e.k&&(u[e.k]=l))};if(l){const z=()=>{E(),fs.delete(e)};z.id=-1,fs.set(e,z),rt(z,n)}else wl(e),E()}}}function wl(e){const t=fs.get(e);t&&(t.flags|=8,fs.delete(e))}$s().requestIdleCallback;$s().cancelIdleCallback;const eo=e=>!!e.type.__asyncLoader,As=e=>e.type.__isKeepAlive;function Ku(e,t){pr(e,"a",t)}function Qu(e,t){pr(e,"da",t)}function pr(e,t,n=at){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Rs(t,o,n),n){let s=n.parent;for(;s&&s.parent;)As(s.parent.vnode)&&Yu(o,t,n,s),s=s.parent}}function Yu(e,t,n,o){const s=Rs(t,e,o,!0);vr(()=>{Da(o[t],s)},n)}function Rs(e,t,n=at,o=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...l)=>{Wt();const i=Wo(n),r=xt(t,n,e,l);return i(),qt(),r});return o?s.unshift(a):s.push(a),a}}const mn=e=>(t,n=at)=>{(!Lo||e==="sp")&&Rs(e,(...o)=>t(...o),n)},Xu=mn("bm"),pn=mn("m"),Zu=mn("bu"),fr=mn("u"),bt=mn("bum"),vr=mn("um"),ec=mn("sp"),tc=mn("rtg"),nc=mn("rtc");function oc(e,t=at){Rs("ec",e,t)}const sc="components",gr=Symbol.for("v-ndc");function hr(e){return Re(e)?ac(sc,e,!1)||e:e||gr}function ac(e,t,n=!0,o=!1){const s=Ze||at;if(s){const a=s.type;{const i=Fc(a,!1);if(i&&(i===t||i===ct(t)||i===Ts(ct(t))))return a}const l=kl(s[e]||a[e],t)||kl(s.appContext[e],t);return!l&&o?a:l}}function kl(e,t){return e&&(e[t]||e[ct(t)]||e[Ts(ct(t))])}function Le(e,t,n,o){let s;const a=n,l=de(e);if(l||Re(e)){const i=l&&Gt(e);let r=!1,c=!1;i&&(r=!gt(e),c=Kt(e),e=Ss(e)),s=new Array(e.length);for(let u=0,p=e.length;u<p;u++)s[u]=t(r?c?kn(kt(e[u])):kt(e[u]):e[u],u,void 0,a)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,a)}else if($e(e))if(e[Symbol.iterator])s=Array.from(e,(i,r)=>t(i,r,void 0,a));else{const i=Object.keys(e);s=new Array(i.length);for(let r=0,c=i.length;r<c;r++){const u=i[r];s[r]=t(e[u],u,r,a)}}else s=[];return s}function ZC(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(de(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const a=o.fn(...s);return a&&(a.key=o.key),a}:o.fn)}return e}function pe(e,t,n,o,s,a){if(n==null&&(n={}),Ze.ce||Ze.parent&&eo(Ze.parent)&&Ze.parent.ce){const c=a!=null&&n.key==null?Ge({},n,{key:a}):n,u=Object.keys(c).length>0;return t!=="default"&&(c.name=t),b(),ye(le,null,[m("slot",c,o&&o())],u?-2:64)}let l=e[t];l&&l._c&&(l._d=!1);const i=rn.length;b();let r;try{const c=l&&br(l(n)),u=n.key||a||c&&c.key;r=ye(le,{key:(u&&!ht(u)?u:`_${t}`)+(!c&&o?"_fb":"")},c||(o?o():[]),c&&e._===1?64:-2)}catch(c){for(let u=rn.length;u>i;u--)Qa();throw c}finally{l&&l._c&&(l._d=!0)}return r}function br(e){return e.some(t=>no(t)?!(t.type===et||t.type===le&&!br(t.children)):!0)?e:null}const _a=e=>e?Lr(e)?Os(e):_a(e.parent):null,$o=Ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_a(e.parent),$root:e=>_a(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Mr(e),$forceUpdate:e=>e.f||(e.f=()=>{Ga(e.update)}),$nextTick:e=>e.n||(e.n=lt.bind(e.proxy)),$watch:e=>Ju.bind(e)}),aa=(e,t)=>e!==Ie&&!e.__isScriptSetup&&Ce(e,t),lc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:l,type:i,appContext:r}=e;if(t[0]!=="$"){const f=l[t];if(f!==void 0)switch(f){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(aa(o,t))return l[t]=1,o[t];if(s!==Ie&&Ce(s,t))return l[t]=2,s[t];if(Ce(a,t))return l[t]=3,a[t];if(n!==Ie&&Ce(n,t))return l[t]=4,n[t];wa&&(l[t]=0)}}const c=$o[t];let u,p;if(c)return t==="$attrs"&&st(e.attrs,"get",""),c(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(n!==Ie&&Ce(n,t))return l[t]=4,n[t];if(p=r.config.globalProperties,Ce(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:a}=e;return aa(s,t)?(s[t]=n,!0):o!==Ie&&Ce(o,t)?(o[t]=n,!0):Ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,props:a,type:l}},i){let r;return!!(n[i]||e!==Ie&&i[0]!=="$"&&Ce(e,i)||aa(t,i)||Ce(a,i)||Ce(o,i)||Ce($o,i)||Ce(s.config.globalProperties,i)||(r=l.__cssModules)&&r[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function uo(){return ic().slots}function ic(e){const t=co();return t.setupContext||(t.setupContext=Nr(t))}function xl(e){return de(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wa=!0;function rc(e){const t=Mr(e),n=e.proxy,o=e.ctx;wa=!1,t.beforeCreate&&Bl(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:l,watch:i,provide:r,inject:c,created:u,beforeMount:p,mounted:f,beforeUpdate:v,updated:x,activated:$,deactivated:S,beforeDestroy:E,beforeUnmount:z,destroyed:A,unmounted:L,render:W,renderTracked:ne,renderTriggered:q,errorCaptured:K,serverPrefetch:J,expose:I,inheritAttrs:w,components:B,directives:R,filters:Q}=t;if(c&&dc(c,o,null),l)for(const fe in l){const Me=l[fe];ge(Me)&&(o[fe]=Me.bind(n))}if(s){const fe=s.call(n,n);$e(fe)&&(e.data=$n(fe))}if(wa=!0,a)for(const fe in a){const Me=a[fe],ve=ge(Me)?Me.bind(n,n):ge(Me.get)?Me.get.bind(n,n):Ut,Be=!ge(Me)&&ge(Me.set)?Me.set.bind(n):Ut,He=T({get:ve,set:Be});Object.defineProperty(o,fe,{enumerable:!0,configurable:!0,get:()=>He.value,set:se=>He.value=se})}if(i)for(const fe in i)yr(i[fe],o,n,fe);if(r){const fe=ge(r)?r.call(n):r;Reflect.ownKeys(fe).forEach(Me=>{ln(Me,fe[Me])})}u&&Bl(u,e,"c");function be(fe,Me){de(Me)?Me.forEach(ve=>fe(ve.bind(n))):Me&&fe(Me.bind(n))}if(be(Xu,p),be(pn,f),be(Zu,v),be(fr,x),be(Ku,$),be(Qu,S),be(oc,K),be(nc,ne),be(tc,q),be(bt,z),be(vr,L),be(ec,J),de(I))if(I.length){const fe=e.exposed||(e.exposed={});I.forEach(Me=>{Object.defineProperty(fe,Me,{get:()=>n[Me],set:ve=>n[Me]=ve,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===Ut&&(e.render=W),w!=null&&(e.inheritAttrs=w),B&&(e.components=B),R&&(e.directives=R),J&&mr(e)}function dc(e,t,n=Ut){de(e)&&(e=ka(e));for(const o in e){const s=e[o];let a;$e(s)?"default"in s?a=nt(s.from||o,s.default,!0):a=nt(s.from||o):a=nt(s),Ue(a)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[o]=a}}function Bl(e,t,n){xt(de(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function yr(e,t,n,o){let s=o.includes(".")?lr(n,o):()=>n[o];if(Re(e)){const a=t[e];ge(a)&&ze(s,a)}else if(ge(e))ze(s,e.bind(n));else if($e(e))if(de(e))e.forEach(a=>yr(a,t,n,o));else{const a=ge(e.handler)?e.handler.bind(n):t[e.handler];ge(a)&&ze(s,a,e)}}function Mr(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:a,config:{optionMergeStrategies:l}}=e.appContext,i=a.get(t);let r;return i?r=i:!s.length&&!n&&!o?r=t:(r={},s.length&&s.forEach(c=>vs(r,c,l,!0)),vs(r,t,l)),$e(t)&&a.set(t,r),r}function vs(e,t,n,o=!1){const{mixins:s,extends:a}=t;a&&vs(e,a,n,!0),s&&s.forEach(l=>vs(e,l,n,!0));for(const l in t)if(!(o&&l==="expose")){const i=uc[l]||n&&n[l];e[l]=i?i(e[l],t[l]):t[l]}return e}const uc={data:Cl,props:Tl,emits:Tl,methods:wo,computed:wo,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:wo,directives:wo,watch:mc,provide:Cl,inject:cc};function Cl(e,t){return t?e?function(){return Ge(ge(e)?e.call(this,this):e,ge(t)?t.call(this,this):t)}:t:e}function cc(e,t){return wo(ka(e),ka(t))}function ka(e){if(de(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function wo(e,t){return e?Ge(Object.create(null),e,t):t}function Tl(e,t){return e?de(e)&&de(t)?[...new Set([...e,...t])]:Ge(Object.create(null),xl(e),xl(t??{})):t}function mc(e,t){if(!e)return t;if(!t)return e;const n=Ge(Object.create(null),e);for(const o in t)n[o]=it(e[o],t[o]);return n}function _r(){return{app:null,config:{isNativeTag:Bi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pc=0;function fc(e,t){return function(o,s=null){ge(o)||(o=Ge({},o)),s!=null&&!$e(s)&&(s=null);const a=_r(),l=new WeakSet,i=[];let r=!1;const c=a.app={_uid:pc++,_component:o,_props:s,_container:null,_context:a,_instance:null,version:Jc,get config(){return a.config},set config(u){},use(u,...p){return l.has(u)||(u&&ge(u.install)?(l.add(u),u.install(c,...p)):ge(u)&&(l.add(u),u(c,...p))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,p){return p?(a.components[u]=p,c):a.components[u]},directive(u,p){return p?(a.directives[u]=p,c):a.directives[u]},mount(u,p,f){if(!r){const v=c._ceVNode||m(o,s);return v.appContext=a,f===!0?f="svg":f===!1&&(f=void 0),e(v,u,f),r=!0,c._container=u,u.__vue_app__=c,Os(v.component)}},onUnmount(u){i.push(u)},unmount(){r&&(xt(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,p){return a.provides[u]=p,c},runWithContext(u){const p=Un;Un=c;try{return u()}finally{Un=p}}};return c}}let Un=null;const vc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ct(t)}Modifiers`]||e[`${Tn(t)}Modifiers`];function gc(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Ie;let s=n;const a=t.startsWith("update:"),l=a&&vc(o,t.slice(7));l&&(l.trim&&(s=n.map(u=>Re(u)?u.trim():u)),l.number&&(s=s.map(Kd)));let i,r=o[i=Ys(t)]||o[i=Ys(ct(t))];!r&&a&&(r=o[i=Ys(Tn(t))]),r&&xt(r,e,6,s);const c=o[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,xt(c,e,6,s)}}const hc=new WeakMap;function wr(e,t,n=!1){const o=n?hc:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const a=e.emits;let l={},i=!1;if(!ge(e)){const r=c=>{const u=wr(c,t,!0);u&&(i=!0,Ge(l,u))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!i?($e(e)&&o.set(e,null),null):(de(a)?a.forEach(r=>l[r]=null):Ge(l,a),$e(e)&&o.set(e,l),l)}function Ds(e,t){return!e||!ks(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Ce(e,t[0].toLowerCase()+t.slice(1))||Ce(e,Tn(t))||Ce(e,t))}function $l(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[a],slots:l,attrs:i,emit:r,render:c,renderCache:u,props:p,data:f,setupState:v,ctx:x,inheritAttrs:$}=e,S=ms(e);let E,z;try{if(n.shapeFlag&4){const L=s||o,W=L;E=Lt(c.call(W,L,u,p,v,f,x)),z=i}else{const L=t;E=Lt(L.length>1?L(p,{attrs:i,slots:l,emit:r}):L(p,null)),z=t.props?i:bc(i)}}catch(L){rn.length=0,zs(L,e,1),E=m(et)}let A=E;if(z&&$!==!1){const L=Object.keys(z),{shapeFlag:W}=A;L.length&&W&7&&(a&&L.some(xs)&&(z=yc(z,a)),A=Bn(A,z,!1,!0))}if(n.dirs&&(A=Bn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition){const L=Es(A.type)&&ps(A)||A;xn(L,n.transition)}return E=A,ms(S),E}function kr(e,t=!0){let n;for(let o=0;o<e.length;o++){const s=e[o];if(no(s)){if(s.type!==et||s.children==="v-if"){if(n)return;n=s}}else return}return n}const bc=e=>{let t;for(const n in e)(n==="class"||n==="style"||ks(n))&&((t||(t={}))[n]=e[n]);return t},yc=(e,t)=>{const n={};for(const o in e)(!xs(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Mc(e,t,n){const{props:o,children:s,component:a}=e,{props:l,children:i,patchFlag:r}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&r>=0){if(r&1024)return!0;if(r&16)return o?Vl(o,l,c):!!l;if(r&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const f=u[p];if(xr(l,o,f)&&!Ds(c,f))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:o===l?!1:o?l?Vl(o,l,c):!0:!!l;return!1}function Vl(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const a=o[s];if(!Ce(e,a)||xr(t,e,a)&&!Ds(n,a))return!0}return!1}function xr(e,t,n){const o=e[n],s=t[n];return n==="style"&&$e(o)&&$e(s)?!Vs(o,s):o!==s}function _c({vnode:e,parent:t,suspense:n},o){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=o,e=s),s===e)(e=t.vnode).el=o,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=o)}const Br={},Cr=()=>Object.create(Br),Tr=e=>Object.getPrototypeOf(e)===Br;function wc(e,t,n,o=!1){const s={},a=Cr();e.propsDefaults=Object.create(null),$r(e,t,s,a);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=o?s:Yi(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function kc(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:l}}=e,i=_e(s),[r]=e.propsOptions;let c=!1;if((o||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let f=u[p];if(Ds(e.emitsOptions,f))continue;const v=t[f];if(r)if(Ce(a,f))v!==a[f]&&(a[f]=v,c=!0);else{const x=ct(f);s[x]=xa(r,i,x,v,e,!1)}else v!==a[f]&&(a[f]=v,c=!0)}}}else{$r(e,t,s,a)&&(c=!0);let u;for(const p in i)(!t||!Ce(t,p)&&((u=Tn(p))===p||!Ce(t,u)))&&(r?n&&(n[p]!==void 0||n[u]!==void 0)&&(s[p]=xa(r,i,p,void 0,e,!0)):delete s[p]);if(a!==i)for(const p in a)(!t||!Ce(t,p))&&(delete a[p],c=!0)}c&&en(e.attrs,"set","")}function $r(e,t,n,o){const[s,a]=e.propsOptions;let l=!1,i;if(t)for(let r in t){if(xo(r))continue;const c=t[r];let u;s&&Ce(s,u=ct(r))?!a||!a.includes(u)?n[u]=c:(i||(i={}))[u]=c:Ds(e.emitsOptions,r)||(!(r in o)||c!==o[r])&&(o[r]=c,l=!0)}if(a){const r=_e(n),c=i||Ie;for(let u=0;u<a.length;u++){const p=a[u];n[p]=xa(s,r,p,c[p],e,!Ce(c,p))}}return l}function xa(e,t,n,o,s,a){const l=e[n];if(l!=null){const i=Ce(l,"default");if(i&&o===void 0){const r=l.default;if(l.type!==Function&&!l.skipFactory&&ge(r)){const{propsDefaults:c}=s;if(n in c)o=c[n];else{const u=Wo(s);o=c[n]=r.call(null,t),u()}}else o=r;s.ce&&s.ce._setProp(n,o)}l[0]&&(a&&!i?o=!1:l[1]&&(o===""||o===Tn(n))&&(o=!0))}return o}const xc=new WeakMap;function Vr(e,t,n=!1){const o=n?xc:t.propsCache,s=o.get(e);if(s)return s;const a=e.props,l={},i=[];let r=!1;if(!ge(e)){const u=p=>{r=!0;const[f,v]=Vr(p,t,!0);Ge(l,f),v&&i.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!r)return $e(e)&&o.set(e,Ln),Ln;if(de(a))for(let u=0;u<a.length;u++){const p=ct(a[u]);Sl(p)&&(l[p]=Ie)}else if(a)for(const u in a){const p=ct(u);if(Sl(p)){const f=a[u],v=l[p]=de(f)||ge(f)?{type:f}:Ge({},f),x=v.type;let $=!1,S=!0;if(de(x))for(let E=0;E<x.length;++E){const z=x[E],A=ge(z)&&z.name;if(A==="Boolean"){$=!0;break}else A==="String"&&(S=!1)}else $=ge(x)&&x.name==="Boolean";v[0]=$,v[1]=S,($||Ce(v,"default"))&&i.push(p)}}const c=[l,i];return $e(e)&&o.set(e,c),c}function Sl(e){return e[0]!=="$"&&!xo(e)}const Wa=e=>e==="_"||e==="_ctx"||e==="$stable",qa=e=>de(e)?e.map(Lt):[Lt(e)],Bc=(e,t,n)=>{if(t._n)return t;const o=g((...s)=>qa(t(...s)),n);return o._c=!1,o},Sr=(e,t,n)=>{const o=e._ctx;for(const s in e){if(Wa(s))continue;const a=e[s];if(ge(a))t[s]=Bc(s,a,o);else if(a!=null){const l=qa(a);t[s]=()=>l}}},Ir=(e,t)=>{const n=qa(t);e.slots.default=()=>n},zr=(e,t,n)=>{for(const o in t)(n||!Wa(o))&&(e[o]=t[o])},Cc=(e,t,n)=>{const o=e.slots=Cr();if(e.vnode.shapeFlag&32){const s=t._;s?(zr(o,t,n),n&&Vi(o,"_",s,!0)):Sr(t,o)}else t&&Ir(e,t)},Tc=(e,t,n)=>{const{vnode:o,slots:s}=e;let a=!0,l=Ie;if(o.shapeFlag&32){const i=t._;i?n&&i===1?a=!1:zr(s,t,n):(a=!t.$stable,Sr(t,s)),l=t}else t&&(Ir(e,t),l={default:1});if(a)for(const i in s)!Wa(i)&&l[i]==null&&delete s[i]},rt=zc;function $c(e){return Vc(e)}function Vc(e,t){const n=$s();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:l,createText:i,createComment:r,setText:c,setElementText:u,parentNode:p,nextSibling:f,setScopeId:v=Ut,insertStaticContent:x}=e,$=(h,_,C,D=null,F=null,U=null,j=void 0,X=null,Y=!!_.dynamicChildren)=>{if(h===_)return;h&&!Pn(h,_)&&(D=N(h),se(h,F,U,!0),h=null),_.patchFlag===-2&&(Y=!1,_.dynamicChildren=null),_.dynamicChildren&&h&&h.dynamicChildren&&h.dynamicChildren.hasOnce&&(_.dynamicChildren===Ln&&(_.dynamicChildren=[]),_.dynamicChildren.hasOnce=!0);const{type:G,ref:ae,shapeFlag:ee}=_;switch(G){case Ps:S(h,_,C,D);break;case et:E(h,_,C,D);break;case as:h==null&&z(_,C,D,j);break;case le:B(h,_,C,D,F,U,j,X,Y);break;default:ee&1?W(h,_,C,D,F,U,j,X,Y):ee&6?R(h,_,C,D,F,U,j,X,Y):(ee&64||ee&128)&&G.process(h,_,C,D,F,U,j,X,Y,Z)}ae!=null&&F?To(ae,h&&h.ref,U,_||h,!_):ae==null&&h&&h.ref!=null&&To(h.ref,null,U,h,!0)},S=(h,_,C,D)=>{if(h==null)o(_.el=i(_.children),C,D);else{const F=_.el=h.el;_.children!==h.children&&c(F,_.children)}},E=(h,_,C,D)=>{h==null?o(_.el=r(_.children||""),C,D):_.el=h.el},z=(h,_,C,D)=>{[h.el,h.anchor]=x(h.children,_,C,D,h.el,h.anchor)},A=({el:h,anchor:_},C,D)=>{let F;for(;h&&h!==_;)F=f(h),o(h,C,D),h=F;o(_,C,D)},L=({el:h,anchor:_})=>{let C;for(;h&&h!==_;)C=f(h),s(h),h=C;s(_)},W=(h,_,C,D,F,U,j,X,Y)=>{if(_.type==="svg"?j="svg":_.type==="math"&&(j="mathml"),h==null)ne(_,C,D,F,U,j,X,Y);else{const G=h.el&&h.el._isVueCE?h.el:null;try{G&&G._beginPatch(),J(h,_,F,U,j,X,Y)}finally{G&&G._endPatch()}}},ne=(h,_,C,D,F,U,j,X)=>{let Y,G;const{props:ae,shapeFlag:ee,transition:re,dirs:me}=h;if(Y=h.el=l(h.type,U,ae&&ae.is,ae),ee&8?u(Y,h.children):ee&16&&K(h.children,Y,null,D,F,la(h,U),j,X),me&&zn(h,null,D,"created"),q(Y,h,h.scopeId,j,D),ae){for(const Se in ae)Se!=="value"&&!xo(Se)&&a(Y,Se,null,ae[Se],U,D);"value"in ae&&a(Y,"value",null,ae.value,U),(G=ae.onVnodeBeforeMount)&&Rt(G,D,h)}me&&zn(h,null,D,"beforeMount");const we=Sc(F,re);we&&re.beforeEnter(Y),o(Y,_,C),((G=ae&&ae.onVnodeMounted)||we||me)&&rt(()=>{try{G&&Rt(G,D,h),we&&re.enter(Y),me&&zn(h,null,D,"mounted")}finally{}},F)},q=(h,_,C,D,F)=>{if(C&&v(h,C),D)for(let U=0;U<D.length;U++)v(h,D[U]);if(F){let U=F.subTree;if(_===U||Ar(U.type)&&(U.ssContent===_||U.ssFallback===_)){const j=F.vnode;q(h,j,j.scopeId,j.slotScopeIds,F.parent)}}},K=(h,_,C,D,F,U,j,X,Y=0)=>{for(let G=Y;G<h.length;G++){const ae=h[G]=X?Zt(h[G]):Lt(h[G]);$(null,ae,_,C,D,F,U,j,X)}},J=(h,_,C,D,F,U,j)=>{const X=_.el=h.el;let{patchFlag:Y,dynamicChildren:G,dirs:ae}=_;Y|=h.patchFlag&16;const ee=h.props||Ie,re=_.props||Ie;let me;if(C&&En(C,!1),(me=re.onVnodeBeforeUpdate)&&Rt(me,C,_,h),ae&&zn(_,h,C,"beforeUpdate"),C&&En(C,!0),G&&(!h.dynamicChildren||h.dynamicChildren.length!==G.length)&&(Y=0,j=!1,G=null),(ee.innerHTML&&re.innerHTML==null||ee.textContent&&re.textContent==null)&&u(X,""),G?I(h.dynamicChildren,G,X,C,D,la(_,F),U):j||Me(h,_,X,null,C,D,la(_,F),U,!1),Y>0){if(Y&16)w(X,ee,re,C,F);else if(Y&2&&ee.class!==re.class&&a(X,"class",null,re.class,F),Y&4&&a(X,"style",ee.style,re.style,F),Y&8){const we=_.dynamicProps;for(let Se=0;Se<we.length;Se++){const Ve=we[Se],je=ee[Ve],Xe=re[Ve];(Xe!==je||Ve==="value")&&a(X,Ve,je,Xe,F,C)}}Y&1&&h.children!==_.children&&u(X,_.children)}else!j&&G==null&&w(X,ee,re,C,F);((me=re.onVnodeUpdated)||ae)&&rt(()=>{me&&Rt(me,C,_,h),ae&&zn(_,h,C,"updated")},D)},I=(h,_,C,D,F,U,j)=>{for(let X=0;X<_.length;X++){const Y=h[X],G=_[X],ae=Y.el||Ba(Y),ee=ae&&(Y.type===le||!Pn(Y,G)||Y.shapeFlag&198)?p(ae):C;$(Y,G,ee,null,D,F,U,j,!0)}},w=(h,_,C,D,F)=>{if(_!==C){if(_!==Ie)for(const U in _)!xo(U)&&!(U in C)&&a(h,U,_[U],null,F,D);for(const U in C){if(xo(U))continue;const j=C[U],X=_[U];j!==X&&U!=="value"&&a(h,U,X,j,F,D)}"value"in C&&a(h,"value",_.value,C.value,F)}},B=(h,_,C,D,F,U,j,X,Y)=>{const G=_.el=h?h.el:i(""),ae=_.anchor=h?h.anchor:i("");let{patchFlag:ee,dynamicChildren:re,slotScopeIds:me}=_;me&&(X=X?X.concat(me):me),h==null?(o(G,C,D),o(ae,C,D),K(_.children||[],C,ae,F,U,j,X,Y)):ee>0&&ee&64&&re&&h.dynamicChildren&&h.dynamicChildren.length===re.length?(I(h.dynamicChildren,re,C,F,U,j,X),(_.key!=null||F&&_===F.subTree)&&Ka(h,_,!0)):Me(h,_,C,ae,F,U,j,X,Y)},R=(h,_,C,D,F,U,j,X,Y)=>{_.slotScopeIds=X,h==null?_.shapeFlag&512?F.ctx.activate(_,C,D,j,Y):Q(_,C,D,F,U,j,Y):he(h,_,Y)},Q=(h,_,C,D,F,U,j)=>{const X=h.component=Dc(h,D,F);if(As(h)&&(X.ctx.renderer=Z),Pc(X,!1,j),X.asyncDep){if(F&&F.registerDep(X,be,j,U),!h.el){const Y=X.subTree=m(et);E(null,Y,_,C),h.placeholder=Y.el}}else be(X,h,_,C,F,U,j)},he=(h,_,C)=>{const D=_.component=h.component;if(Mc(h,_,C))if(D.asyncDep&&!D.asyncResolved){_.el=h.el,_.placeholder=h.placeholder,fe(D,_,C);return}else D.next=_,D.update();else _.el=h.el,_.placeholder=h.placeholder,D.vnode=_},be=(h,_,C,D,F,U,j)=>{const X=()=>{if(h.isMounted){let{next:ee,bu:re,u:me,parent:we,vnode:Se}=h;{const Et=Er(h);if(Et){ee&&(ee.el=Se.el,fe(h,ee,j)),Et.asyncDep.then(()=>{rt(()=>{h.isUnmounted||G()},F)});return}}let Ve=ee,je;En(h,!1),ee?(ee.el=Se.el,fe(h,ee,j)):ee=Se,re&&Xs(re),(je=ee.props&&ee.props.onVnodeBeforeUpdate)&&Rt(je,we,ee,Se),En(h,!0);const Xe=$l(h),zt=h.subTree;h.subTree=Xe,$(zt,Xe,p(zt.el),N(zt),h,F,U),ee.el=Xe.el,Ve===null&&_c(h,Xe.el),me&&rt(me,F),(je=ee.props&&ee.props.onVnodeUpdated)&&rt(()=>Rt(je,we,ee,Se),F)}else{let ee;const{el:re,props:me}=_,{bm:we,m:Se,parent:Ve,root:je,type:Xe}=h,zt=eo(_);En(h,!1),we&&Xs(we),!zt&&(ee=me&&me.onVnodeBeforeMount)&&Rt(ee,Ve,_),En(h,!0);{je.ce&&je.ce._hasShadowRoot()&&je.ce._injectChildStyle(Xe,h.parent?h.parent.type:void 0);const Et=h.subTree=$l(h);$(null,Et,C,D,h,F,U),_.el=Et.el}if(Se&&rt(Se,F),!zt&&(ee=me&&me.onVnodeMounted)){const Et=_;rt(()=>Rt(ee,Ve,Et),F)}(_.shapeFlag&256||Ve&&eo(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&h.a&&rt(h.a,F),h.isMounted=!0,_=C=D=null}};h.scope.on();const Y=h.effect=new Di(X);h.scope.off();const G=h.update=Y.run.bind(Y),ae=h.job=Y.runIfDirty.bind(Y);ae.i=h,ae.id=h.uid,Y.scheduler=()=>Ga(ae),En(h,!0),G()},fe=(h,_,C)=>{_.component=h;const D=h.vnode.props;h.vnode=_,h.next=null,kc(h,_.props,D,C),Tc(h,_.children,C),Wt(),nr(h),qt()},Me=(h,_,C,D,F,U,j,X,Y=!1)=>{const G=h&&h.children,ae=h?h.shapeFlag:0,ee=_.children,{patchFlag:re,shapeFlag:me}=_;if(re>0){if(re&128){Be(G,ee,C,D,F,U,j,X,Y);return}else if(re&256){ve(G,ee,C,D,F,U,j,X,Y);return}}me&8?(ae&16&&ot(G,F,U),ee!==G&&u(C,ee)):ae&16?me&16?Be(G,ee,C,D,F,U,j,X,Y):ot(G,F,U,!0):(ae&8&&u(C,""),me&16&&K(ee,C,D,F,U,j,X,Y))},ve=(h,_,C,D,F,U,j,X,Y)=>{h=h||Ln,_=_||Ln;const G=h.length,ae=_.length,ee=Math.min(G,ae);let re;for(re=0;re<ee;re++){const me=_[re]=Y?Zt(_[re]):Lt(_[re]);$(h[re],me,C,null,F,U,j,X,Y)}G>ae?ot(h,F,U,!0,!1,ee):K(_,C,D,F,U,j,X,Y,ee)},Be=(h,_,C,D,F,U,j,X,Y)=>{let G=0;const ae=_.length;let ee=h.length-1,re=ae-1;for(;G<=ee&&G<=re;){const me=h[G],we=_[G]=Y?Zt(_[G]):Lt(_[G]);if(Pn(me,we))$(me,we,C,null,F,U,j,X,Y);else break;G++}for(;G<=ee&&G<=re;){const me=h[ee],we=_[re]=Y?Zt(_[re]):Lt(_[re]);if(Pn(me,we))$(me,we,C,null,F,U,j,X,Y);else break;ee--,re--}if(G>ee){if(G<=re){const me=re+1,we=me<ae?_[me].el:D;for(;G<=re;)$(null,_[G]=Y?Zt(_[G]):Lt(_[G]),C,we,F,U,j,X,Y),G++}}else if(G>re)for(;G<=ee;)se(h[G],F,U,!0),G++;else{const me=G,we=G,Se=new Map;for(G=we;G<=re;G++){const pt=_[G]=Y?Zt(_[G]):Lt(_[G]);pt.key!=null&&Se.set(pt.key,G)}let Ve,je=0;const Xe=re-we+1;let zt=!1,Et=0;const vo=new Array(Xe);for(G=0;G<Xe;G++)vo[G]=0;for(G=me;G<=ee;G++){const pt=h[G];if(je>=Xe){se(pt,F,U,!0);continue}let At;if(pt.key!=null)At=Se.get(pt.key);else for(Ve=we;Ve<=re;Ve++)if(vo[Ve-we]===0&&Pn(pt,_[Ve])){At=Ve;break}At===void 0?se(pt,F,U,!0):(vo[At-we]=G+1,At>=Et?Et=At:zt=!0,$(pt,_[At],C,null,F,U,j,X,Y),je++)}const dl=zt?Ic(vo):Ln;for(Ve=dl.length-1,G=Xe-1;G>=0;G--){const pt=we+G,At=_[pt],ul=_[pt+1],cl=pt+1<ae?ul.el||Ba(ul):D;vo[G]===0?$(null,At,C,cl,F,U,j,X,Y):zt&&(Ve<0||G!==dl[Ve]?He(At,C,cl,2):Ve--)}}},He=(h,_,C,D,F=null)=>{const{el:U,type:j,transition:X,children:Y,shapeFlag:G}=h;if(G&6){He(h.component.subTree,_,C,D);return}if(G&128){h.suspense.move(_,C,D);return}if(G&64){j.move(h,_,C,Z);return}if(j===le){o(U,_,C);for(let ee=0;ee<Y.length;ee++)He(Y[ee],_,C,D);o(h.anchor,_,C);return}if(j===as){A(h,_,C);return}if(D!==2&&G&1&&X)if(D===0)X.persisted&&!U[_t]?o(U,_,C):(X.beforeEnter(U),o(U,_,C),rt(()=>X.enter(U),F));else{const{leave:ee,delayLeave:re,afterLeave:me}=X,we=()=>{h.ctx.isUnmounted?s(U):o(U,_,C)},Se=()=>{const Ve=U._isLeaving||!!U[_t];U._isLeaving&&U[_t](!0),X.persisted&&!Ve?we():ee(U,()=>{we(),me&&me()})};re?re(U,we,Se):Se()}else o(U,_,C)},se=(h,_,C,D=!1,F=!1)=>{const{type:U,props:j,ref:X,children:Y,dynamicChildren:G,shapeFlag:ae,patchFlag:ee,dirs:re,cacheIndex:me,memo:we}=h;if((ee===-2||G&&G.hasOnce)&&(F=!1),X!=null&&(Wt(),To(X,null,C,h,!0),qt()),me!=null&&(!h.ctx||h.ctx===_)&&(_.renderCache[me]=void 0),ae&256){_.ctx.deactivate(h);return}const Se=ae&1&&re,Ve=!eo(h);let je;if(Ve&&(je=j&&j.onVnodeBeforeUnmount)&&Rt(je,_,h),ae&6)yt(h.component,C,D);else{if(ae&128){h.suspense.unmount(C,D);return}Se&&zn(h,null,_,"beforeUnmount"),ae&64?h.type.remove(h,_,C,Z,D):G&&!G.hasOnce&&(U!==le||ee>0&&ee&64)?ot(G,_,C,!1,!0):(U===le&&ee&384||!F&&ae&16)&&ot(Y,_,C),D&&Pe(h)}const Xe=we!=null&&me==null;(Ve&&(je=j&&j.onVnodeUnmounted)||Se||Xe)&&rt(()=>{je&&Rt(je,_,h),Se&&zn(h,null,_,"unmounted"),Xe&&(h.el=null)},C)},Pe=h=>{const{type:_,el:C,anchor:D,transition:F}=h,U=_===le;if(U&&!F){We(C,D);return}if(_===as){L(h),F&&!F.persisted&&F.afterLeave&&F.afterLeave();return}const j=U?Do(h):h,X=()=>{U?p(C)&&We(C,D):s(C),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(j&&j.shapeFlag&1&&F&&!F.persisted){const{leave:Y,delayLeave:G}=F,ae=j.el,ee=()=>Y(ae,X);G?G(ae,X,ee):ee()}else X()},We=(h,_)=>{let C;for(;h!==_;)C=f(h),s(h),h=C;s(_)},yt=(h,_,C)=>{const{bum:D,scope:F,job:U,subTree:j,um:X,m:Y,a:G}=h;Il(Y),Il(G),D&&Xs(D),F.stop(),U?(U.flags|=8,se(j,h,_,C)):h.vnode.el&&j&&(j.transition=h.vnode.transition,se(j,h,_,C)),X&&rt(X,_),rt(()=>{h.isUnmounted=!0},_)},ot=(h,_,C,D=!1,F=!1,U=0)=>{for(let j=U;j<h.length;j++)se(h[j],_,C,D,F)},N=h=>{if(h.shapeFlag&6)return N(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const _=f(h.anchor||h.el),C=_&&_[ir];return C?f(C):_},oe=(h,_,C)=>{const D=h&&_._vnode?void 0:h&&h.component?h.component.uid:Rc();Pu(()=>{h==null?_._vnode&&se(_._vnode,null,null,!0):$(_._vnode||null,h,_,null,null,null,C),_._vnode=h},D)},Z={p:$,um:se,m:He,r:Pe,mt:Q,mc:K,pc:Me,pbc:I,n:N,o:e};return{render:oe,hydrate:void 0,createApp:fc(oe)}}function la({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function En({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ka(e,t,n=!1){const o=e.children,s=t.children;if(de(o)&&de(s))for(let a=0;a<o.length;a++){const l=o[a];let i=s[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[a]=Zt(s[a]),i.el=l.el),!n&&i.patchFlag!==-2&&Ka(l,i)),i.type===Ps&&(i.patchFlag===-1&&(i=s[a]=Zt(i)),i.el=l.el),i.type===et&&!i.el&&(i.el=l.el)}}function Ic(e){const t=e.slice(),n=[0];let o,s,a,l,i;const r=e.length;for(o=0;o<r;o++){const c=e[o];if(c!==0){if(s=n[n.length-1],e[s]<c){t[o]=s,n.push(o);continue}for(a=0,l=n.length-1;a<l;)i=a+l>>1,e[n[i]]<c?a=i+1:l=i;c<e[n[a]]&&(a>0&&(t[o]=n[a-1]),n[a]=o)}}for(a=n.length,l=n[a-1];a-- >0;)n[a]=l,l=t[l];return n}function Er(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Er(t)}function Il(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ba(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ba(t.subTree):null}const Ar=e=>e.__isSuspense;function zc(e,t){t&&t.pendingBranch?de(e)?t.effects.push(...e):t.effects.push(e):Du(e)}const le=Symbol.for("v-fgt"),Ps=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),rn=[];let vt=null;function b(e=!1){rn.push(vt=e?null:[])}function Qa(){rn.pop(),vt=rn[rn.length-1]||null}let Po=1;function gs(e,t=!1){Po+=e,e<0&&vt&&t&&(vt.hasOnce=!0)}function Rr(e){return e.dynamicChildren=Po>0?vt||Ln:null,Qa(),Po>0&&vt&&vt.push(e),e}function M(e,t,n,o,s,a){return Rr(y(e,t,n,o,s,a,!0))}function ye(e,t,n,o,s){return Rr(m(e,t,n,o,s,!0))}function no(e){return e?e.__v_isVNode===!0:!1}function Pn(e,t){return e.type===t.type&&e.key===t.key}const Dr=({key:e})=>e??null,ls=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Re(e)||Ue(e)||ge(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function y(e,t=null,n=null,o=0,s=null,a=e===le?0:1,l=!1,i=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Dr(t),ref:t&&ls(t),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return i?(hs(r,n),a&128&&e.normalize(r)):n&&(r.shapeFlag|=Re(n)?8:16),Po>0&&!l&&vt&&(r.patchFlag>0||a&6)&&r.patchFlag!==32&&vt.push(r),r}const m=Ec;function Ec(e,t=null,n=null,o=0,s=null,a=!1){if((!e||e===gr)&&(e=et),no(e)){const i=Bn(e,t,!0);return n&&hs(i,n),Po>0&&!a&&vt&&(i.shapeFlag&6?vt[vt.indexOf(e)]=i:vt.push(i)),i.patchFlag=-2,i}if(Nc(e)&&(e=e.__vccOpts),t){t=Pr(t);let{class:i,style:r}=t;i&&!Re(i)&&(t.class=ue(i)),$e(r)&&(Is(r)&&!de(r)&&(r=Ge({},r)),t.style=Je(r))}const l=Re(e)?1:Ar(e)?128:Es(e)?64:$e(e)?4:ge(e)?2:0;return y(e,t,n,o,s,l,a,!0)}function Pr(e){return e?Is(e)||Tr(e)?Ge({},e):e:null}function Bn(e,t,n=!1,o=!1){const{props:s,ref:a,patchFlag:l,children:i,transition:r}=e,c=t?Ya(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Dr(c),ref:t&&t.ref?n&&a?de(a)?a.concat(ls(t)):[a,ls(t)]:ls(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:r,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bn(e.ssContent),ssFallback:e.ssFallback&&Bn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return r&&o&&xn(u,r.clone(u)),u}function k(e=" ",t=0){return m(Ps,null,e,t)}function eT(e,t){const n=m(as,null,e);return n.staticCount=t,n}function te(e="",t=!1){return t?(b(),ye(et,null,e)):m(et,null,e)}function Lt(e){return e==null||typeof e=="boolean"?m(et):de(e)?m(le,null,e.slice()):no(e)?Zt(e):m(Ps,null,String(e))}function Zt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bn(e)}function hs(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(de(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),hs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Tr(t)?t._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ge(t)){if(o&65){hs(e,{default:t});return}t={default:t,_ctx:Ze},n=32}else t=String(t),o&64?(n=16,t=[k(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ya(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=ue([t.class,o.class]));else if(s==="style")t.style=Je([t.style,o.style]);else if(ks(s)){const a=t[s],l=o[s];l&&a!==l&&!(de(a)&&a.includes(l))?t[s]=a?[].concat(a,l):l:l==null&&a==null&&!xs(s)&&(t[s]=l)}else s!==""&&(t[s]=o[s])}return t}function Rt(e,t,n,o=null){xt(e,t,7,[n,o])}const Ac=_r();let Or=0;function Rc(){return Or}function Dc(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||Ac,a={uid:Or++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ei(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vr(o,s),emitsOptions:wr(o,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:o.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=gc.bind(null,a),e.ce&&e.ce(a),a}let at=null;const co=()=>at||Ze;let bs,Oo;{const e=$s(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),a=>{s.length>1?s.forEach(l=>l(a)):s[0](a)}};bs=t("__VUE_INSTANCE_SETTERS__",n=>at=n),Oo=t("__VUE_SSR_SETTERS__",n=>Lo=n)}const Wo=e=>{const t=at;return bs(e),e.scope.on(),()=>{e.scope.off(),bs(t)}},zl=()=>{at&&at.scope.off(),bs(null)};function Lr(e){return e.vnode.shapeFlag&4}let Lo=!1;function Pc(e,t=!1,n=!1){t&&Oo(t);const{props:o,children:s}=e.vnode,a=Lr(e);wc(e,o,a,t),Cc(e,s,n||t);const l=a?Oc(e,t):void 0;return t&&Oo(!1),l}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,lc);const{setup:o}=n;if(o){Wt();const s=e.setupContext=o.length>1?Nr(e):null,a=Wo(e),l=jo(o,e,0,[e.props,s]),i=Ci(l);if(qt(),a(),(i||e.sp)&&!eo(e)&&mr(e),i){if(l.then(zl,zl),t)return l.then(r=>{Oo(!0);try{El(e,r,t)}finally{Oo(!1)}}).catch(r=>{zs(r,e,0)});e.asyncDep=l}else El(e,l)}else Fr(e)}function El(e,t,n){ge(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:$e(t)&&(e.setupState=Zi(t)),Fr(e)}function Fr(e,t,n){const o=e.type;e.render||(e.render=o.render||Ut);{const s=Wo(e);Wt();try{rc(e)}finally{qt(),s()}}}const Lc={get(e,t){return st(e,"get",""),e[t]}};function Nr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Lc),slots:e.slots,emit:e.emit,expose:t}}function Os(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zi(Ua(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $o)return $o[n](e)},has(t,n){return n in t||n in $o}})):e.proxy}function Fc(e,t=!0){return ge(e)?e.displayName||e.name:e.name||t&&e.__name}function Nc(e){return ge(e)&&"__vccOpts"in e}const T=(e,t)=>Iu(e,t,Lo);function oo(e,t,n){try{gs(-1);const o=arguments.length;return o===2?$e(t)&&!de(t)?no(t)?m(e,null,[t]):m(e,t):m(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&no(n)&&(n=[n]),m(e,t,n))}finally{gs(1)}}const Jc="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ca;const Al=typeof window<"u"&&window.trustedTypes;if(Al)try{Ca=Al.createPolicy("vue",{createHTML:e=>e})}catch{}const Jr=Ca?e=>Ca.createHTML(e):e=>e,Uc="http://www.w3.org/2000/svg",Gc="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,Rl=Xt&&Xt.createElement("template"),Hc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Xt.createElementNS(Uc,e):t==="mathml"?Xt.createElementNS(Gc,e):n?Xt.createElement(e,{is:n}):Xt.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Xt.createTextNode(e),createComment:e=>Xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,a){const l=n?n.previousSibling:t.lastChild;if(s&&(s===a||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===a||!(s=s.nextSibling)););else{Rl.innerHTML=Jr(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const i=Rl.content;if(o==="svg"||o==="mathml"){const r=i.firstChild;for(;r.firstChild;)i.appendChild(r.firstChild);i.removeChild(r)}t.insertBefore(i,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},fn="transition",bo="animation",so=Symbol("_vtc"),Ur={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gr=Ge({},dr,Ur),jc=e=>(e.displayName="Transition",e.props=Gr,e),Wn=jc((e,{slots:t})=>oo(Wu,Hr(e),t)),An=(e,t=[])=>{de(e)?e.forEach(n=>n(...t)):e&&e(...t)},Dl=e=>e?de(e)?e.some(t=>t.length>1):e.length>1:!1;function Hr(e){const t={};for(const B in e)B in Ur||(t[B]=e[B]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:a=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:r=a,appearActiveClass:c=l,appearToClass:u=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,x=Wc(s),$=x&&x[0],S=x&&x[1],{onBeforeEnter:E,onEnter:z,onEnterCancelled:A,onLeave:L,onLeaveCancelled:W,onBeforeAppear:ne=E,onAppear:q=z,onAppearCancelled:K=A}=t,J=(B,R,Q,he)=>{B._enterCancelled=he,bn(B,R?u:i),bn(B,R?c:l),Q&&Q()},I=(B,R)=>{B._isLeaving=!1,bn(B,p),bn(B,v),bn(B,f),R&&R()},w=B=>(R,Q)=>{const he=B?q:z,be=()=>J(R,B,Q);An(he,[R,be]),Pl(()=>{bn(R,B?r:a),Dt(R,B?u:i),Dl(he)||Ol(R,o,$,be)})};return Ge(t,{onBeforeEnter(B){An(E,[B]),Dt(B,a),Dt(B,l)},onBeforeAppear(B){An(ne,[B]),Dt(B,r),Dt(B,c)},onEnter:w(!1),onAppear:w(!0),onLeave(B,R){B._isLeaving=!0;const Q=()=>I(B,R);Dt(B,p),B._enterCancelled?(Dt(B,f),Ta(B)):(Ta(B),Dt(B,f)),Pl(()=>{B._isLeaving&&(bn(B,p),Dt(B,v),Dl(L)||Ol(B,o,S,Q))}),An(L,[B,Q])},onEnterCancelled(B){J(B,!1,void 0,!0),An(A,[B])},onAppearCancelled(B){J(B,!0,void 0,!0),An(K,[B])},onLeaveCancelled(B){I(B),An(W,[B])}})}function Wc(e){if(e==null)return null;if($e(e))return[ia(e.enter),ia(e.leave)];{const t=ia(e);return[t,t]}}function ia(e){return Qd(e)}function Dt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[so]||(e[so]=new Set)).add(t)}function bn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[so];n&&(n.delete(t),n.size||(e[so]=void 0))}function Pl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let qc=0;function Ol(e,t,n,o){const s=e._endId=++qc,a=()=>{s===e._endId&&o()};if(n!=null)return setTimeout(a,n);const{type:l,timeout:i,propCount:r}=jr(e,t);if(!l)return o();const c=l+"end";let u=0;const p=()=>{e.removeEventListener(c,f),a()},f=v=>{v.target===e&&++u>=r&&p()};setTimeout(()=>{u<r&&p()},i+1),e.addEventListener(c,f)}function jr(e,t){const n=window.getComputedStyle(e),o=x=>(n[x]||"").split(", "),s=o(`${fn}Delay`),a=o(`${fn}Duration`),l=Ll(s,a),i=o(`${bo}Delay`),r=o(`${bo}Duration`),c=Ll(i,r);let u=null,p=0,f=0;t===fn?l>0&&(u=fn,p=l,f=a.length):t===bo?c>0&&(u=bo,p=c,f=r.length):(p=Math.max(l,c),u=p>0?l>c?fn:bo:null,f=u?u===fn?a.length:r.length:0);const v=u===fn&&/\b(?:transform|all)(?:,|$)/.test(o(`${fn}Property`).toString());return{type:u,timeout:p,propCount:f,hasTransform:v}}function Ll(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Fl(n)+Fl(e[o])))}function Fl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ta(e){return(e?e.ownerDocument:document).body.offsetHeight}function Kc(e,t,n){const o=e[so];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ys=Symbol("_vod"),Xa=Symbol("_vsh"),Sn={name:"show",beforeMount(e,{value:t},{transition:n}){e[ys]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):yo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),yo(e,!0),o.enter(e)):o.leave(e,()=>{yo(e,!1)}):yo(e,t))},beforeUnmount(e,{value:t}){yo(e,t)}};function yo(e,t){e.style.display=t?e[ys]:"none",e[Xa]=!t}const Qc=Symbol(""),Yc=/(?:^|;)\s*display\s*:/;function Xc(e,t,n){const o=e.style,s=Re(n);let a=!1;if(n&&!s){if(t)if(Re(t))for(const l of t.split(";")){const i=l.slice(0,l.indexOf(":")).trim();n[i]==null&&ko(o,i,"")}else for(const l in t)n[l]==null&&ko(o,l,"");for(const l in n){l==="display"&&(a=!0);const i=n[l];i!=null?em(e,l,!Re(t)&&t?t[l]:void 0,i)||ko(o,l,i):ko(o,l,"")}}else if(s){if(t!==n){const l=o[Qc];l&&(n+=";"+l),o.cssText=n,a=Yc.test(n)}}else t&&e.removeAttribute("style");ys in e&&((!s||t!==n)&&(e[ys]=a?o.display:""),e[Xa]&&(o.display="none"))}const ns=/\s*!important$/;function ko(e,t,n){if(de(n))n.forEach(o=>ko(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))ns.test(n)?e.setProperty(t,n.replace(ns,""),"important"):e.setProperty(t,n);else{const o=Zc(e,t);ns.test(n)?e.setProperty(Tn(o),n.replace(ns,""),"important"):e[o]=n}}const Nl=["Webkit","Moz","ms"],ra={};function Zc(e,t){const n=ra[t];if(n)return n;let o=ct(t);if(o!=="filter"&&o in e)return ra[t]=o;o=Ts(o);for(let s=0;s<Nl.length;s++){const a=Nl[s]+o;if(a in e)return ra[t]=a}return t}function em(e,t,n,o){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Re(o)&&n===o}const Jl="http://www.w3.org/1999/xlink";function Ul(e,t,n,o,s,a=ou(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Jl,t.slice(6,t.length)):e.setAttributeNS(Jl,t,n):n==null||a&&!Si(n)?e.removeAttribute(t):e.setAttribute(t,a?"":ht(n)?String(n):n)}function Gl(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Jr(n):n);return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const i=a==="OPTION"?e.getAttribute("value")||"":e.value,r=n==null?e.type==="checkbox"?"on":"":String(n);(i!==r||!("_value"in e))&&(e.value=r),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Si(n):n==null&&i==="string"?(n="",l=!0):i==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(s||t)}function tm(e,t,n,o){e.addEventListener(t,n,o)}function nm(e,t,n,o){e.removeEventListener(t,n,o)}const Hl=Symbol("_vei");function om(e,t,n,o,s=null){const a=e[Hl]||(e[Hl]={}),l=a[t];if(o&&l)l.value=o;else{const[i,r]=lm(t);if(o){const c=a[t]=dm(o,s);tm(e,i,c,r)}else l&&(nm(e,i,l,r),a[t]=void 0)}}const sm=/(Once|Passive|Capture)$/,am=/^on:?(?:Once|Passive|Capture)$/;function lm(e){let t,n;for(;(n=e.match(sm))&&!am.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Tn(e.slice(2)),t]}let da=0;const im=Promise.resolve(),rm=()=>da||(im.then(()=>da=0),da=Date.now());function dm(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;const s=n.value;if(de(s)){const a=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{a.call(o),o._stopped=!0};const l=s.slice(),i=[o];for(let r=0;r<l.length&&!o._stopped;r++){const c=l[r];c&&xt(c,t,5,i)}}else xt(s,t,5,[o])};return n.value=e,n.attached=rm(),n}const jl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,um=(e,t,n,o,s,a)=>{const l=s==="svg";t==="class"?Kc(e,o,l):t==="style"?Xc(e,n,o):ks(t)?xs(t)||om(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cm(e,t,o,l))?(Gl(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ul(e,t,o,l,a,t!=="value")):e._isVueCE&&(mm(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Re(o)))?Gl(e,ct(t),o,a,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Ul(e,t,o,l))};function cm(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&jl(t)&&ge(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jl(t)&&Re(n)?!1:t in e}function mm(e,t){const n=e._def.props;if(!n)return!1;const o=ct(t);return Array.isArray(n)?n.some(s=>ct(s)===o):Object.keys(n).some(s=>ct(s)===o)}const Wr=new WeakMap,qr=new WeakMap,Ms=Symbol("_moveCb"),Wl=Symbol("_enterCb"),$a=new WeakMap,pm=e=>(delete e.props.mode,e),fm=pm({name:"TransitionGroup",props:Ge({},Gr,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=co(),o=rr();let s,a,l,i;const r=()=>(i===void 0&&(i=s.length>0&&_m(s[0].el,n.vnode.el,ql(e))),i);return fr(()=>{if($a.delete(n),!r()){s=[],l=void 0;return}const c=ql(e);s.forEach(vm);const u=l&&Mm(l,n.vnode.el);l=void 0,s.forEach(f=>gm(f,u));const p=s.filter(hm);Ta(n.vnode.el),p.forEach(f=>{const v=f.el,x=v.style;Dt(v,c),x.transform=x.webkitTransform=x.transitionDuration="";const $=v[Ms]=S=>{S&&S.target!==v||(!S||S.propertyName.endsWith("transform"))&&(v.removeEventListener("transitionend",$),v[Ms]=null,bn(v,c))};v.addEventListener("transitionend",$)}),s=[]}),()=>{const c=_e(e),u=Hr(c);let p=c.tag||le;if(s=[],i=void 0,a)for(let f=0;f<a.length;f++){const v=a[f];v.el&&v.el instanceof Element&&!v.el[Xa]&&(s.push(v),xn(v,Ro(v,u,o,n)),Wr.set(v,Ls(v.el)))}a=t.default?ja(t.default()):[];for(let f=0;f<a.length;f++){const v=a[f];v.key!=null&&xn(v,Ro(v,u,o,n))}return s.length&&(l=bm(n),$a.set(n,r)),m(p,null,a)}}}),Kr=fm;function vm(e){const t=e.el;t[Ms]&&t[Ms](),t[Wl]&&t[Wl]()}function ql(e){return e.moveClass||`${e.name||"v"}-move`}function gm(e,t){qr.set(e,Ls(e.el,t))}function hm(e){const t=Wr.get(e),n=qr.get(e),o=t.left-n.left,s=t.top-n.top;if(o||s){const a=e.el,l=a.style,i=a.getBoundingClientRect();let r=1,c=1;return a.offsetWidth&&(r=i.width/a.offsetWidth),a.offsetHeight&&(c=i.height/a.offsetHeight),(!Number.isFinite(r)||r===0)&&(r=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(r-1)<.01&&(r=1),Math.abs(c-1)<.01&&(c=1),l.transform=l.webkitTransform=`translate(${o/r}px,${s/c}px)`,l.transitionDuration="0s",e}}function Ls(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function bm(e){let t;for(let n=e.parent;n;n=n.parent){const o=$a.get(n);if(o){const s=ym(n.vnode.el,e.vnode.el);s&&(t||(t=[])).push(Ge(Ls(s),{item:s,willMove:o}))}}return t}function ym(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Mm(e,t){const n=e.find(o=>o.willMove()&&o.item.contains(t));return n&&Ls(n.item,n)}function _m(e,t,n){const o=e.cloneNode(),s=e[so];s&&s.forEach(i=>{i.split(/\s+/).forEach(r=>r&&o.classList.remove(r))}),n.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(o);const{hasTransform:l}=jr(o);return a.removeChild(o),l}const wm=["ctrl","shift","alt","meta"],km={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>wm.some(n=>e[`${n}Key`]&&!t.includes(n))},un=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=((s,...a)=>{for(let l=0;l<t.length;l++){const i=km[t[l]];if(i&&i(s,t))return}return e(s,...a)}))},xm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bm=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=(s=>{if(!("key"in s))return;const a=Tn(s.key);if(t.some(l=>l===a||xm[l]===a))return e(s)}))},Cm=Ge({patchProp:um},Hc);let Kl;function Tm(){return Kl||(Kl=$c(Cm))}const $m=((...e)=>{const t=Tm().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=Sm(o);if(!s)return;const a=t._component;!ge(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,Vm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function Vm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Sm(e){return Re(e)?document.querySelector(e):e}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Qr;const Fs=e=>Qr=e,Yr=Symbol();function Va(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Vo;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Vo||(Vo={}));function Im(){const e=Ai(!0),t=e.run(()=>O({}));let n=[],o=[];const s=Ua({install(a){Fs(s),s._a=a,a.provide(Yr,s),a.config.globalProperties.$pinia=s,o.forEach(l=>n.push(l)),o=[]},use(a){return this._a?n.push(a):o.push(a),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Xr=()=>{};function Ql(e,t,n,o=Xr){e.push(t);const s=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),o())};return!n&&Ri()&&lu(s),s}function Qn(e,...t){e.slice().forEach(n=>{n(...t)})}const zm=e=>e(),Yl=Symbol(),ua=Symbol();function Sa(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,o)=>e.set(o,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const o=t[n],s=e[n];Va(s)&&Va(o)&&e.hasOwnProperty(n)&&!Ue(o)&&!Gt(o)?e[n]=Sa(s,o):e[n]=o}return e}const Em=Symbol();function Am(e){return!Va(e)||!e.hasOwnProperty(Em)}const{assign:yn}=Object;function Rm(e){return!!(Ue(e)&&e.effect)}function Dm(e,t,n,o){const{state:s,actions:a,getters:l}=t,i=n.state.value[e];let r;function c(){i||(n.state.value[e]=s?s():{});const u=Tu(n.state.value[e]);return yn(u,a,Object.keys(l||{}).reduce((p,f)=>(p[f]=Ua(T(()=>{Fs(n);const v=n._s.get(e);return l[f].call(v,v)})),p),{}))}return r=Zr(e,c,t,n,o,!0),r}function Zr(e,t,n={},o,s,a){let l;const i=yn({actions:{}},n),r={deep:!0};let c,u,p=[],f=[],v;const x=o.state.value[e];!a&&!x&&(o.state.value[e]={});let $;function S(K){let J;c=u=!1,typeof K=="function"?(K(o.state.value[e]),J={type:Vo.patchFunction,storeId:e,events:v}):(Sa(o.state.value[e],K),J={type:Vo.patchObject,payload:K,storeId:e,events:v});const I=$=Symbol();lt().then(()=>{$===I&&(c=!0)}),u=!0,Qn(p,J,o.state.value[e])}const E=a?function(){const{state:J}=n,I=J?J():{};this.$patch(w=>{yn(w,I)})}:Xr;function z(){l.stop(),p=[],f=[],o._s.delete(e)}const A=(K,J="")=>{if(Yl in K)return K[ua]=J,K;const I=function(){Fs(o);const w=Array.from(arguments),B=[],R=[];function Q(fe){B.push(fe)}function he(fe){R.push(fe)}Qn(f,{args:w,name:I[ua],store:W,after:Q,onError:he});let be;try{be=K.apply(this&&this.$id===e?this:W,w)}catch(fe){throw Qn(R,fe),fe}return be instanceof Promise?be.then(fe=>(Qn(B,fe),fe)).catch(fe=>(Qn(R,fe),Promise.reject(fe))):(Qn(B,be),be)};return I[Yl]=!0,I[ua]=J,I},L={_p:o,$id:e,$onAction:Ql.bind(null,f),$patch:S,$reset:E,$subscribe(K,J={}){const I=Ql(p,K,J.detached,()=>w()),w=l.run(()=>ze(()=>o.state.value[e],B=>{(J.flush==="sync"?u:c)&&K({storeId:e,type:Vo.direct,events:v},B)},yn({},r,J)));return I},$dispose:z},W=$n(L);o._s.set(e,W);const q=(o._a&&o._a.runWithContext||zm)(()=>o._e.run(()=>(l=Ai()).run(()=>t({action:A}))));for(const K in q){const J=q[K];if(Ue(J)&&!Rm(J)||Gt(J))a||(x&&Am(J)&&(Ue(J)?J.value=x[K]:Sa(J,x[K])),o.state.value[e][K]=J);else if(typeof J=="function"){const I=A(J,K);q[K]=I,i.actions[K]=J}}return yn(W,q),yn(_e(W),q),Object.defineProperty(W,"$state",{get:()=>o.state.value[e],set:K=>{S(J=>{yn(J,K)})}}),o._p.forEach(K=>{yn(W,l.run(()=>K({store:W,app:o._a,pinia:o,options:i})))}),x&&a&&n.hydrate&&n.hydrate(W.$state,x),c=!0,u=!0,W}/*! #__NO_SIDE_EFFECTS__ */function Pm(e,t,n){let o,s;const a=typeof t=="function";o=e,s=a?n:t;function l(i,r){const c=Ou();return i=i||(c?nt(Yr,null):null),i&&Fs(i),i=Qr,i._s.has(o)||(a?Zr(o,t,s,i):Dm(o,s,i)),i._s.get(o)}return l.$id=o,l}const Om="M",Za="anemia-ui-theme",Lm="0.5.0";function ke(e){return`${Om}${e}`}function xe(e,t){return Object.assign(e,{install:o=>{o.component(t,e)}})}/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var os={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:o,iconNode:s,name:a,class:l,...i},{slots:r})=>oo("svg",{...os,width:e||os.width,height:e||os.height,stroke:o||os.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${Fm(a??"icon")}`],...i},[...s.map(c=>oo(...c)),...r.default?[r.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,t)=>(n,{slots:o})=>oo(Nm,{...n,iconNode:t,name:e},o);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Ee("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Ee("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=Ee("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=Ee("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=Ee("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=Ee("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=Ee("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=Ee("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=Ee("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=Ee("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=Ee("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=Ee("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=Ee("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Ee("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=Ee("InfoIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=Ee("LinkIcon",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=Ee("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Ee("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=Ee("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=Ee("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Ee("MonitorIcon",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Ee("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=Ee("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=Ee("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=Ee("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=Ee("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=Ee("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),vp={"arrow-left":Jm,"arrow-right":Um,check:Gm,"chevron-down":Hm,"chevron-left":jm,"chevron-right":Wm,"chevron-up":qm,close:fp,copy:Ym,error:Qm,"external-link":Xm,eye:ep,"eye-off":Zm,github:tp,info:np,link:op,loader:sp,mail:ap,menu:lp,minus:ip,monitor:rp,moon:dp,search:up,success:Km,sun:cp,user:pp,warning:mp},gp=V({name:"MIcon",inheritAttrs:!1,__name:"Icon",props:{name:{},size:{default:"1em"},strokeWidth:{default:1.75},label:{default:void 0}},setup(e){const t=e,n=T(()=>vp[t.name]),o=T(()=>typeof t.size=="number"?`${t.size}px`:t.size);return(s,a)=>(b(),ye(hr(n.value),Ya({class:"m-icon",style:{width:o.value,height:o.value},"stroke-width":e.strokeWidth,"aria-hidden":e.label?void 0:"true","aria-label":e.label,role:e.label?"img":void 0,focusable:"false"},s.$attrs),null,16,["style","stroke-width","aria-hidden","aria-label","role"]))}}),ie=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},De=ie(gp,[["__scopeId","data-v-bee244fe"]]),hp=["role"],bp={key:0,class:"m-alert__icon","aria-hidden":"true"},yp={class:"m-alert__content"},Mp={key:0,class:"m-alert__title"},_p={key:1,class:"m-alert__description"},wp=["aria-label"],kp=V({name:"MAlert",__name:"Alert",props:{type:{default:"info"},title:{default:void 0},description:{default:void 0},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},closeLabel:{default:"关闭提示"}},emits:["close"],setup(e,{emit:t}){const n=e,o=t,s=uo(),a=O(!0),l={info:"info",success:"success",warning:"warning",error:"error"},i=T(()=>n.type==="warning"||n.type==="error"?"alert":"status"),r=T(()=>[`m-alert--${n.type}`]),c=T(()=>!!n.title||!!s.title),u=T(()=>!!n.description||!!s.default);function p(f){a.value=!1,o("close",f)}return(f,v)=>a.value?(b(),M("div",{key:0,class:ue(["m-alert",r.value]),role:i.value},[e.showIcon?(b(),M("span",bp,[pe(f.$slots,"icon",{},()=>[m(De,{name:l[e.type]},null,8,["name"])])])):te("",!0),y("div",yp,[c.value?(b(),M("div",Mp,[pe(f.$slots,"title",{},()=>[k(H(e.title),1)])])):te("",!0),u.value?(b(),M("div",_p,[pe(f.$slots,"default",{},()=>[k(H(e.description),1)])])):te("",!0)]),e.closable?(b(),M("button",{key:1,type:"button",class:"m-alert__close","aria-label":e.closeLabel,onClick:p},[m(De,{name:"close"})],8,wp)):te("",!0)],10,hp)):te("",!0)}}),xp=ie(kp,[["__scopeId","data-v-981682d3"]]),Tt=xe(xp,ke("Alert")),Bp=["aria-label"],Cp={class:"m-avatar__fallback","aria-hidden":"true"},Tp={key:0,class:"m-avatar__initials"},$p=["src"],Vp=V({name:"MAvatar",__name:"Avatar",props:{src:{default:void 0},alt:{default:void 0},name:{default:void 0},size:{default:"medium"},shape:{default:"circle"}},emits:["error"],setup(e,{emit:t}){const n=e,o=t,s=O(!1),a=T(()=>!!n.src&&!s.value),l=T(()=>{const u=n.name?.trim();if(!u)return"";const p=u.split(/\s+/).filter(Boolean);return p.length>1?p.slice(0,2).map(f=>f.charAt(0)).join("").toUpperCase():/[\u3400-\u9fff]/.test(u)?u.slice(0,2):u.slice(0,2).toUpperCase()}),i=T(()=>n.alt??n.name??"头像"),r=T(()=>[`m-avatar--${n.size}`,`m-avatar--${n.shape}`]);ze(()=>n.src,()=>{s.value=!1});function c(u){s.value=!0,o("error",u)}return(u,p)=>(b(),M("span",{class:ue(["m-avatar",r.value]),role:"img","aria-label":i.value},[y("span",Cp,[pe(u.$slots,"fallback",{},()=>[l.value?(b(),M("span",Tp,H(l.value),1)):(b(),ye(De,{key:1,name:"user",class:"m-avatar__icon"}))])]),a.value?(b(),M("img",{key:0,class:"m-avatar__image",src:e.src,alt:"",loading:"lazy",decoding:"async",onError:c},null,40,$p)):te("",!0)],10,Bp))}}),Sp=ie(Vp,[["__scopeId","data-v-777e7a87"]]),Oe=xe(Sp,ke("Avatar")),Ip=["aria-label","aria-hidden"],zp=V({name:"MBadge",__name:"Badge",props:{count:{default:void 0},max:{default:99},dot:{type:Boolean,default:!1},color:{default:void 0},hidden:{type:Boolean,default:!1},showZero:{type:Boolean,default:!1},ariaLabel:{default:void 0}},setup(e){const t=e,n=uo(),o=T(()=>{if(t.dot||t.count===void 0||!Number.isFinite(t.count))return"";const u=Math.max(0,Math.floor(t.count));if(u===0&&!t.showZero)return"";const p=Math.max(0,Math.floor(t.max));return u>p?`${p}+`:String(u)}),s=T(()=>!t.hidden&&(t.dot||o.value!=="")),a=T(()=>!!n.default),l=T(()=>({"m-badge--dot":t.dot,"m-badge--standalone":!a.value})),i=T(()=>t.color?{"--m-badge-custom-color":t.color}:void 0),r=T(()=>{if(t.ariaLabel)return t.ariaLabel;if(t.dot)return"有新内容"}),c=T(()=>!s.value||!r.value&&o.value===""?"true":void 0);return(u,p)=>(b(),M("span",{class:ue(["m-badge",l.value])},[pe(u.$slots,"default",{},void 0),s.value?(b(),M("span",{key:0,class:"m-badge__content",style:Je(i.value),"aria-label":r.value,"aria-hidden":c.value,role:"status"},[e.dot?te("",!0):(b(),M(le,{key:0},[k(H(o.value),1)],64))],12,Ip)):te("",!0)],2))}}),Ep=ie(zp,[["__scopeId","data-v-384604e7"]]),tt=xe(Ep,ke("Badge")),ed=Symbol("m-button-group"),Ap=["type","disabled","aria-busy","aria-disabled"],Rp={key:2,class:"m-button__label"},Dp=V({name:"MButton",__name:"Button",props:{type:{default:"primary"},size:{default:void 0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},round:{type:Boolean,default:!1},icon:{default:void 0},nativeType:{default:"button"}},emits:["click"],setup(e,{emit:t}){const n=e,o=t,s=uo(),a=nt(ed,null),l=T(()=>n.size??a?.size.value??"medium"),i=T(()=>n.disabled||n.loading),r=T(()=>(!!n.icon||!!s.icon)&&!s.default),c=T(()=>[`m-button--${n.type}`,`m-button--${l.value}`,{"m-button--block":n.block,"m-button--round":n.round,"m-button--icon-only":r.value,"is-loading":n.loading}]);function u(p){if(i.value){p.preventDefault();return}o("click",p)}return(p,f)=>(b(),M("button",{class:ue(["m-button",c.value]),type:e.nativeType,disabled:e.disabled||e.loading,"aria-busy":e.loading||void 0,"aria-disabled":e.disabled||e.loading||void 0,onClick:u},[e.loading?pe(p.$slots,"loading",{},()=>[f[0]||(f[0]=y("span",{class:"m-button__spinner","aria-hidden":"true"},null,-1))],!0,0):p.$slots.icon||e.icon?pe(p.$slots,"icon",{},()=>[e.icon?(b(),ye(De,{key:0,name:e.icon,class:"m-button__icon"},null,8,["name"])):te("",!0)],!0,1):te("",!0),p.$slots.default?(b(),M("span",Rp,[pe(p.$slots,"default",{},void 0)])):te("",!0)],10,Ap))}}),Pp=ie(Dp,[["__scopeId","data-v-24a69be3"]]),Op=["aria-label"],Lp=V({name:"MButtonGroup",__name:"ButtonGroup",props:{size:{default:"medium"},ariaLabel:{default:void 0}},setup(e){const t=e;return ln(ed,{size:T(()=>t.size)}),(n,o)=>(b(),M("div",{class:"m-button-group",role:"group","aria-label":e.ariaLabel},[pe(n.$slots,"default",{},void 0)],8,Op))}}),Fp=ie(Lp,[["__scopeId","data-v-9eb1ae1c"]]),P=xe(Pp,ke("Button")),is=xe(Fp,ke("ButtonGroup")),Np=["role","tabindex"],Jp={key:0,class:"m-card__header"},Up={class:"m-card__body"},Gp={key:1,class:"m-card__footer"},Hp=V({name:"MCard",__name:"Card",props:{hoverable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},padding:{default:"medium"}},emits:["click"],setup(e,{emit:t}){const n=e,o=t,s=uo(),a={none:"0",small:"var(--m-space-4)",medium:"var(--m-space-5)",large:"var(--m-space-6)"},l=T(()=>a[n.padding]??n.padding),i=T(()=>({"m-card--hoverable":n.hoverable||n.clickable,"m-card--clickable":n.clickable})),r=T(()=>({"--m-card-padding":l.value}));function c(f){const v=f.target;return v instanceof HTMLElement?!!v.closest("a, button, input, select, textarea, [data-no-card-click]"):!1}function u(f){c(f)||o("click",f)}function p(f){n.clickable&&(f.key!=="Enter"&&f.key!==" "||c(f)||(f.preventDefault(),o("click",f)))}return(f,v)=>(b(),M("div",{class:ue(["m-card",i.value]),style:Je(r.value),role:e.clickable?"button":void 0,tabindex:e.clickable?0:void 0,onClick:u,onKeydown:p},[d(s).header?(b(),M("div",Jp,[pe(f.$slots,"header",{},void 0)])):te("",!0),y("div",Up,[pe(f.$slots,"default",{},void 0)]),d(s).footer?(b(),M("div",Gp,[pe(f.$slots,"footer",{},void 0)])):te("",!0)],46,Np))}}),jp=ie(Hp,[["__scopeId","data-v-a3d5bc1e"]]),on=xe(jp,ke("Card"));function mt(e){return`${e}-${qu()}`}const td=Symbol("MCheckboxGroupContext"),Wp={class:"m-checkbox__control"},qp=["id","checked","disabled","name","value","aria-checked"],Kp={class:"m-checkbox__box","aria-hidden":"true"},Qp={key:0,class:"m-checkbox__label"},Yp=V({name:"MCheckbox",__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},value:{default:void 0},label:{default:void 0},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},id:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,o=t,s=nt(td,null),a=mt("m-checkbox"),l=O(null),i=T(()=>n.disabled||!!s?.disabled.value),r=T(()=>s?.size.value??n.size),c=T(()=>s?n.value!==void 0&&s.modelValue.value.includes(n.value):n.modelValue),u=T(()=>[`m-checkbox--${r.value}`,{"is-checked":c.value,"is-indeterminate":n.indeterminate,"is-disabled":i.value}]),p=T(()=>n.name??s?.name.value);Nu(()=>{l.value&&(l.value.indeterminate=n.indeterminate)}),pn(()=>{l.value&&(l.value.indeterminate=n.indeterminate)});function f(v){const x=v.target.checked;s?n.value!==void 0&&s.toggle(n.value,x):o("update:modelValue",x),o("change",x,v)}return(v,x)=>(b(),M("label",{class:ue(["m-checkbox",u.value])},[y("span",Wp,[y("input",{id:e.id??d(a),ref_key:"nativeRef",ref:l,class:"m-checkbox__native",type:"checkbox",checked:c.value,disabled:i.value,name:p.value,value:e.value,"aria-checked":e.indeterminate?"mixed":void 0,onChange:f},null,40,qp),y("span",Kp,[e.indeterminate?(b(),ye(De,{key:0,name:"minus",class:"m-checkbox__mark"})):c.value?(b(),ye(De,{key:1,name:"check",class:"m-checkbox__mark"})):te("",!0)])]),e.label||v.$slots.default?(b(),M("span",Qp,[pe(v.$slots,"default",{},()=>[k(H(e.label),1)])])):te("",!0)],2))}}),nd=ie(Yp,[["__scopeId","data-v-62d96f2c"]]),Xp=["aria-label"],Zp=V({name:"MCheckboxGroup",__name:"CheckboxGroup",props:{modelValue:{default:()=>[]},options:{default:()=>[]},disabled:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,o=t,s=T(()=>n.modelValue??[]);function a(l,i){if(n.disabled)return;const r=i?s.value.includes(l)?s.value:[...s.value,l]:s.value.filter(c=>c!==l);o("update:modelValue",r),o("change",r)}return ln(td,{modelValue:s,disabled:T(()=>n.disabled),size:T(()=>n.size),name:T(()=>n.name),toggle:a}),(l,i)=>(b(),M("div",{class:"m-checkbox-group",role:"group","aria-label":e.ariaLabel},[pe(l.$slots,"default",{},()=>[(b(!0),M(le,null,Le(e.options,r=>(b(),ye(nd,{key:r.value,value:r.value,label:r.label,disabled:r.disabled},null,8,["value","label","disabled"]))),128))])],8,Xp))}}),ef=ie(Zp,[["__scopeId","data-v-0bce2121"]]),Ft=xe(nd,ke("Checkbox")),el=xe(ef,ke("CheckboxGroup")),tf=["aria-orientation"],nf={class:"m-divider__content"},of=V({name:"MDivider",__name:"Divider",props:{direction:{default:"horizontal"},contentPosition:{default:"center"}},setup(e){const t=e,n=uo(),o=T(()=>!!n.default&&t.direction==="horizontal"),s=T(()=>[`m-divider--${t.direction}`,`m-divider--${t.contentPosition}`,{"has-content":o.value}]);return(a,l)=>(b(),M("div",{class:ue(["m-divider",s.value]),role:"separator","aria-orientation":e.direction==="vertical"?"vertical":"horizontal"},[o.value?(b(),M(le,{key:0},[l[0]||(l[0]=y("span",{class:"m-divider__line","aria-hidden":"true"},null,-1)),y("span",nf,[pe(a.$slots,"default",{},void 0)]),l[1]||(l[1]=y("span",{class:"m-divider__line","aria-hidden":"true"},null,-1))],64)):te("",!0)],10,tf))}}),sf=ie(of,[["__scopeId","data-v-64da3a41"]]),Ht=xe(sf,ke("Divider")),wt=typeof window<"u"&&typeof document<"u",af=["a[href]","area[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])','[tabindex]:not([tabindex="-1"])'].join(",");function lf(e){if(e.hidden||e.closest("[hidden]"))return!1;const t=window.getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}function od(e){return Array.from(e.querySelectorAll(af)).filter(t=>t.tabIndex>=0&&lf(t))}function rf(e){(od(e)[0]??e).focus({preventScroll:!0})}function df(e,t){if(e.key!=="Tab")return;const n=od(t);if(n.length===0){e.preventDefault(),t.focus({preventScroll:!0});return}const o=n[0],s=n[n.length-1],a=document.activeElement;if(e.shiftKey){(a===o||!t.contains(a))&&(e.preventDefault(),s.focus());return}(a===s||!t.contains(a))&&(e.preventDefault(),o.focus())}const Xl=1100,uf=10,Fn=[];let ca=null,So=0,sd="",ad="";function ld(){if(!wt)return Xl;if(ca===null){const e=window.getComputedStyle(document.documentElement).getPropertyValue("--m-z-index-overlay"),t=Number.parseInt(e.trim(),10);Number.isFinite(t)&&(ca=t)}return ca??Xl}function Zl(){const e=ld();Fn.forEach((t,n)=>{t.zIndex.value=e+n*uf})}function cf(){return Fn[Fn.length-1]}function mf(){if(wt){if(So===0){const e=document.body;sd=e.style.overflow,ad=e.style.paddingRight;const t=window.innerWidth-document.documentElement.clientWidth;if(e.style.overflow="hidden",t>0){const n=Number.parseFloat(window.getComputedStyle(e).paddingRight)||0;e.style.paddingRight=`${n+t}px`}}So+=1}}function pf(){wt&&(So=Math.max(0,So-1),So===0&&(document.body.style.overflow=sd,document.body.style.paddingRight=ad))}function qn(e){const t=O(ld());let n=null;function o(){return n!==null&&cf()===n}function s(c){if(!(!n||!o())){if(c.key==="Escape"){c.preventDefault(),c.stopPropagation(),Ct(e.closeOnEscape)!==!1&&e.onDismiss?.("escape");return}n.trapFocus&&e.panel.value&&df(c,e.panel.value)}}function a(c){if(!n||!o()||c.button!==0||Ct(e.closeOnOutside)===!1)return;const u=c.target;!(u instanceof Node)||e.panel.value?.contains(u)||(e.ignore?.()??[]).some(f=>f?.contains(u))||e.onDismiss?.("outside")}function l(){const c=e.panel.value;if(!c)return;const u=e.initialFocus?.();if(u){u.focus({preventScroll:!0});return}if(c.hasAttribute("tabindex")){c.focus({preventScroll:!0});return}rf(c)}function i(){if(n||!wt)return;const c={zIndex:t,panel:e.panel,previouslyFocused:document.activeElement instanceof HTMLElement?document.activeElement:null,scrollLocked:!!Ct(e.lockScroll),trapFocus:!!Ct(e.trapFocus),restoreFocus:Ct(e.restoreFocus)!==!1};n=c,Fn.push(c),Zl(),c.scrollLocked&&mf(),document.addEventListener("keydown",s,!0),document.addEventListener("pointerdown",a,!0),(c.trapFocus||e.initialFocus)&&lt(()=>{n===c&&l()})}function r(){if(!n)return;const c=n;n=null,document.removeEventListener("keydown",s,!0),document.removeEventListener("pointerdown",a,!0);const u=Fn.indexOf(c),p=u!==-1&&u===Fn.length-1;if(u!==-1&&Fn.splice(u,1),Zl(),c.scrollLocked&&pf(),c.restoreFocus&&p){const f=c.previouslyFocused;f?.isConnected&&f.focus({preventScroll:!0})}}return ze(()=>e.open(),c=>{c?i():r()},{immediate:!0,flush:"post"}),pn(()=>{e.open()&&i()}),bt(r),{zIndex:dn(t)}}const ff=["id","aria-labelledby","aria-label"],vf={key:0,class:"m-drawer__header"},gf=["id"],hf={class:"m-drawer__body"},bf={key:1,class:"m-drawer__footer"},yf=V({name:"MDrawer",__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},title:{default:void 0},placement:{default:"right"},size:{default:"medium"},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},hideMode:{default:"unmount"},ariaLabel:{default:void 0},id:{default:void 0}},emits:["update:modelValue","close","opened","closed"],setup(e,{emit:t}){const n=e,o=t,s=O(null),a=mt("m-drawer-title"),l=T(()=>n.hideMode==="display"||n.modelValue),{zIndex:i}=qn({open:()=>n.modelValue,panel:s,closeOnEscape:()=>n.closable,closeOnOutside:()=>n.maskClosable,lockScroll:()=>n.lockScroll,trapFocus:!0,restoreFocus:!0,onDismiss:c=>r(c==="escape"?"escape":"mask")});function r(c,u){o("update:modelValue",!1),o("close",c,u)}return(c,u)=>(b(),ye(cn,{to:"body"},[m(Wn,{name:"m-drawer",onAfterEnter:u[1]||(u[1]=p=>o("opened")),onAfterLeave:u[2]||(u[2]=p=>o("closed"))},{default:g(()=>[l.value?Vn((b(),M("div",{key:0,class:ue(["m-drawer",`m-drawer--${e.placement}`]),style:Je({zIndex:d(i)})},[u[3]||(u[3]=y("div",{class:"m-drawer__mask","aria-hidden":"true"},null,-1)),y("div",{id:e.id,ref_key:"panelRef",ref:s,class:ue(["m-drawer__panel",[`m-drawer__panel--${e.placement}`,`m-drawer__panel--${e.size}`]]),role:"dialog","aria-modal":"true","aria-labelledby":e.title&&!c.$slots.header?d(a):void 0,"aria-label":e.title&&!c.$slots.header?void 0:e.ariaLabel,tabindex:"-1"},[e.title||c.$slots.header||e.closable?(b(),M("header",vf,[pe(c.$slots,"header",{},()=>[y("h2",{id:d(a),class:"m-drawer__title"},H(e.title),9,gf)],!0),e.closable?(b(),M("button",{key:0,type:"button",class:"m-drawer__close","aria-label":"关闭抽屉",onClick:u[0]||(u[0]=p=>r("close-button",p))},[m(De,{name:"close",size:18})])):te("",!0)])):te("",!0),y("div",hf,[pe(c.$slots,"default",{},void 0,!0)]),c.$slots.footer?(b(),M("footer",bf,[pe(c.$slots,"footer",{},void 0,!0)])):te("",!0)],10,ff)],6)),[[Sn,e.hideMode==="display"?e.modelValue:!0]]):te("",!0)]),_:3})]))}}),Mf=ie(yf,[["__scopeId","data-v-b83fce27"]]),qo=xe(Mf,ke("Drawer")),_f=8,wf=8;function ei(e,t,n){return Math.min(Math.max(e,t),Math.max(t,n))}function Ko(e){const t=O({position:"fixed",top:"-9999px",left:"-9999px",visibility:"visible"}),n=O(Ct(e.placement)??"bottom"),o=e.offset??_f,s=e.viewportPadding??wf;let a=!1,l=!1;function i(){if(!wt)return;const u=e.trigger.value,p=e.panel.value;if(!u||!p)return;const f=u.getBoundingClientRect(),v=window.innerWidth,x=window.innerHeight;if((f.width>0||f.height>0)&&(f.bottom<=0||f.top>=x||f.right<=0||f.left>=v)){t.value={...t.value,visibility:"hidden"},l||(l=!0,e.onReferenceHidden?.());return}l=!1;const E=!!Ct(e.matchWidth),z=E?Math.max(0,Math.min(f.width,v-s*2)):0;E&&z>0&&(p.style.width=`${Math.round(z)}px`);const A=E&&z>0?z:p.offsetWidth,L=p.offsetHeight;let W=Ct(e.placement)??"bottom";const ne={top:f.top>=L+o+s,bottom:x-f.bottom>=L+o+s,left:f.left>=A+o+s,right:v-f.right>=A+o+s},q={top:"bottom",bottom:"top",left:"right",right:"left"};ne[W]||(W=q[W]);const K=Ct(e.align)??"center";let J=0,I=0;W==="top"||W==="bottom"?(K==="start"?I=f.left:K==="end"?I=f.right-A:I=f.left+f.width/2-A/2,J=W==="top"?f.top-L-o:f.bottom+o):(K==="start"?J=f.top:K==="end"?J=f.bottom-L:J=f.top+f.height/2-L/2,I=W==="left"?f.left-A-o:f.right+o),I=ei(I,s,v-A-s),J=ei(J,s,x-L-s),n.value=W,t.value={position:"fixed",top:`${Math.round(J)}px`,left:`${Math.round(I)}px`,visibility:"visible",...E&&z>0?{width:`${Math.round(z)}px`}:{}}}function r(){!wt||a||(a=!0,window.addEventListener("resize",i,{passive:!0}),window.addEventListener("scroll",i,!0))}function c(){!wt||!a||(a=!1,window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0))}return ze(()=>e.open(),u=>{u?(t.value={position:"fixed",top:"-9999px",left:"-9999px",visibility:"visible"},r(),lt(i)):(c(),t.value={...t.value,visibility:"hidden"})},{immediate:!0}),ze(()=>[Ct(e.placement),Ct(e.align)],()=>{e.open()&&lt(i)}),bt(c),{style:t,actualPlacement:n,update:i}}const kf=["aria-disabled","aria-expanded"],xf=["aria-label"],Bf={key:0,class:"m-dropdown__empty"},Cf={key:0,class:"m-dropdown__divider",role:"separator"},Tf=["disabled","onClick"],$f={class:"m-dropdown__label"},Vf=V({name:"MDropdown",__name:"Dropdown",props:{items:{default:()=>[]},placement:{default:"bottom"},align:{default:"start"},modelValue:{type:Boolean,default:void 0},trigger:{default:"click"},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},minWidth:{default:200},closeOnSelect:{type:Boolean,default:!0},ariaLabel:{default:void 0}},emits:["select","update:modelValue","visible-change"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=O(null),l=O(null),i=O(!1),c=`${mt("m-dropdown")}-menu`,u=T(()=>o.trigger??"click"),p=T(()=>o.modelValue??i.value),f=T(()=>o.hideMode==="display"||p.value),{style:v,actualPlacement:x}=Ko({trigger:a,panel:l,open:()=>p.value,placement:()=>o.placement,align:()=>o.align,offset:6,onReferenceHidden:()=>L()}),{zIndex:$}=qn({open:()=>p.value,panel:l,ignore:()=>[a.value],closeOnEscape:!0,closeOnOutside:()=>u.value==="click",restoreFocus:!0,initialFocus:()=>E()??l.value,onDismiss:()=>L()});function S(){return Array.from(l.value?.querySelectorAll('[role="menuitem"]:not(:disabled)')??[])}function E(){return S()[0]??null}function z(I){I&&o.disabled||I!==p.value&&(o.modelValue===void 0&&(i.value=I),s("update:modelValue",I))}function A(){z(!0)}function L(){z(!1)}function W(){z(!p.value)}function ne(){u.value!=="manual"&&W()}function q(I){I.disabled||(s("select",I.key,I),o.closeOnSelect?L():lt(()=>E()?.focus({preventScroll:!0})))}function K(I){const w=S();if(w.length===0)return;const B=(I+w.length)%w.length;w[B]?.focus({preventScroll:!0})}function J(I){const w=S(),B=w.indexOf(document.activeElement);switch(I.key){case"ArrowDown":I.preventDefault(),K(B+1);break;case"ArrowUp":I.preventDefault(),K(B-1);break;case"Home":I.preventDefault(),K(0);break;case"End":I.preventDefault(),K(w.length-1);break;case"Tab":I.preventDefault(),L();break}}return ze(p,I=>s("visible-change",I),{flush:"post"}),ze(()=>o.modelValue,I=>{I!==void 0&&(i.value=I)},{immediate:!0}),ze(()=>o.disabled,I=>{I&&L()}),t({open:A,close:L,toggle:W}),(I,w)=>(b(),M("span",{class:ue(["m-dropdown",{"is-open":p.value,"is-disabled":e.disabled}])},[y("span",{ref_key:"triggerRef",ref:a,class:"m-dropdown__trigger","aria-disabled":e.disabled||void 0,"aria-expanded":p.value,"aria-haspopup":"menu","aria-controls":c,onClick:ne},[pe(I.$slots,"default",{},void 0)],8,kf),(b(),ye(cn,{to:"body"},[m(Wn,{name:"m-dropdown"},{default:g(()=>[f.value?Vn((b(),M("div",{key:0,id:c,ref_key:"menuRef",ref:l,class:ue(["m-dropdown__menu",`m-dropdown__menu--${d(x)}`]),style:Je({...d(v),minWidth:`${e.minWidth}px`,zIndex:d($)}),role:"menu","aria-label":e.ariaLabel,tabindex:"-1",onKeydown:J},[e.items.length===0?(b(),M("div",Bf,[pe(I.$slots,"empty",{},()=>[w[0]||(w[0]=k("暂无操作",-1))],!0)])):te("",!0),(b(!0),M(le,null,Le(e.items,(B,R)=>(b(),M(le,{key:B.key},[B.divided?(b(),M("div",Cf)):te("",!0),y("button",{type:"button",class:ue(["m-dropdown__item",{"is-danger":B.danger}]),role:"menuitem",disabled:B.disabled,tabindex:"-1",onClick:un(Q=>q(B),["stop"])},[pe(I.$slots,"item",{item:B,index:R},()=>[B.icon?(b(),ye(De,{key:0,name:B.icon,class:"m-dropdown__icon"},null,8,["name"])):te("",!0),y("span",$f,H(B.label),1)],!0)],10,Tf)],64))),128))],46,xf)),[[Sn,e.hideMode==="display"?p.value:!0]]):te("",!0)]),_:3})]))],2))}}),Sf=ie(Vf,[["__scopeId","data-v-493c7a64"]]),mo=xe(Sf,ke("Dropdown")),id=Symbol("MForm"),rd=Symbol("MFormItem");function ti(e){return e?Array.isArray(e)?e:[e]:[]}const If=["aria-label"],zf=V({name:"MForm",__name:"Form",props:{model:{default:()=>({})},rules:{default:()=>({})},labelPosition:{default:"top"},labelWidth:{default:void 0},disabled:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},ariaLabel:{default:void 0}},emits:["submit","validate"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=new Map,l={...o.model},i=T(()=>o.labelWidth?{"--m-form-label-width":o.labelWidth}:void 0);ln(id,{model:T(()=>o.model),rules:T(()=>o.rules),disabled:T(()=>o.disabled),showMessage:T(()=>o.showMessage),registerField(v){a.set(v.prop,v)},unregisterField(v){a.delete(v)}});async function r(v){const x=a.get(v);if(!x)return!0;const $=await x.validate("submit");return s("validate",v,$,x.error()),$}async function c(){const v=Array.from(a.values());return(await Promise.all(v.map(async $=>{const S=await $.validate("submit");return s("validate",$.prop,S,$.error()),S}))).every(Boolean)}function u(){Object.assign(o.model,l);for(const v of a.values())v.reset()}function p(v){if(v){a.get(v)?.clearValidate();return}for(const x of a.values())x.clearValidate()}async function f(){s("submit",await c())}return t({validate:c,validateField:r,resetFields:u,clearValidate:p}),(v,x)=>(b(),M("form",{class:ue(["m-form",[`m-form--${e.labelPosition}`,{"is-disabled":e.disabled}]]),style:Je(i.value),novalidate:"","aria-label":e.ariaLabel,onSubmit:un(f,["prevent"])},[pe(v.$slots,"default",{},void 0)],46,If))}}),Ef=ie(zf,[["__scopeId","data-v-8024c993"]]),Af=["for"],Rf={key:0,class:"m-form-item__required","aria-hidden":"true"},Df=["id"],Pf={key:1,class:"m-form-item__hint"},Of=V({name:"MFormItem",__name:"FormItem",props:{prop:{default:void 0},label:{default:void 0},required:{type:Boolean,default:!1},rules:{default:void 0},error:{default:void 0},hint:{default:void 0},labelWidth:{default:void 0},for:{default:void 0},showMessage:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},setup(e,{expose:t}){const n=e,o=nt(id,null),s=mt("m-form-item"),a=T(()=>`${s}-error`),l=O(""),i=O(null),r=T(()=>[...ti(n.prop?o?.rules.value[n.prop]:void 0),...ti(n.rules)]),c=T(()=>n.required||r.value.some(w=>w.required===!0)),u=T(()=>n.error??l.value),p=T(()=>n.showMessage&&(o?.showMessage.value??!0)),f=T(()=>p.value&&u.value.length>0),v=T(()=>n.disabled||!!o?.disabled.value),x=T(()=>n.labelWidth?{width:n.labelWidth}:void 0);ln(rd,{disabled:v,error:u,errorId:a,validate:w=>A(w)});function $(w){return w==null||w===""||Array.isArray(w)&&w.length===0}function S(w){const B=o?.model.value;if(B)return w.split(".").reduce((R,Q)=>{if(!(R===null||typeof R!="object"))return R[Q]},B)}function E(w,B){return B==="submit"||!w.trigger?!0:(Array.isArray(w.trigger)?w.trigger:[w.trigger]).includes(B)}async function z(w,B){if(w.required&&$(B))return w.message??"此项为必填项";if(!$(B)){if(w.pattern&&typeof B=="string"&&!w.pattern.test(B))return w.message??"格式不正确";if(typeof w.min=="number"||typeof w.max=="number"){const R=typeof B=="number"?B:typeof B=="string"||Array.isArray(B)?B.length:void 0;if(R!==void 0){if(typeof w.min=="number"&&R<w.min)return w.message??(typeof B=="number"?`不能小于 ${w.min}`:`不能少于 ${w.min} 个字符`);if(typeof w.max=="number"&&R>w.max)return w.message??(typeof B=="number"?`不能大于 ${w.max}`:`不能超过 ${w.max} 个字符`)}}}if(w.validator)try{const R=await w.validator(B,o?.model.value??{});if(R===!1)return w.message??"校验未通过";if(typeof R=="string"&&R.length>0)return R}catch(R){return R instanceof Error&&R.message?R.message:"校验未通过"}return null}async function A(w="submit"){if(!n.prop)return l.value="",!0;const B=r.value.filter(Q=>E(Q,w));if(B.length===0)return l.value="",!0;const R=S(n.prop);for(const Q of B){const he=await z(Q,R);if(he)return l.value=he,!1}return l.value="",!0}function L(){l.value=""}function W(){l.value=""}let ne=null;function q(){if(!o||!n.prop)return;const w={prop:n.prop,validate:A,reset:L,clearValidate:W,error:()=>u.value};o.registerField(w),ne=n.prop}function K(){!o||!ne||(o.unregisterField(ne),ne=null)}ze(()=>n.prop,()=>{K(),q()},{immediate:!0}),bt(K);function J(w){const B=w.relatedTarget;B instanceof Node&&i.value?.contains(B)||o&&n.prop&&A("blur")}function I(){!o||!n.prop||lt(()=>A("change"))}return t({validate:()=>A("submit"),reset:L,clearValidate:W}),(w,B)=>(b(),M("div",{class:ue(["m-form-item",{"is-error":!!u.value,"is-required":c.value,"is-disabled":v.value}])},[e.label||w.$slots.label?(b(),M("label",{key:0,class:"m-form-item__label",for:n.for,style:Je(x.value)},[pe(w.$slots,"label",{},()=>[k(H(e.label),1)]),c.value?(b(),M("span",Rf,"*")):te("",!0)],12,Af)):te("",!0),y("div",{ref_key:"contentRef",ref:i,class:"m-form-item__content",onFocusout:J,onInput:I,onChange:I},[pe(w.$slots,"default",{},void 0),f.value?(b(),M("p",{key:0,id:a.value,class:"m-form-item__error",role:"alert"},H(u.value),9,Df)):e.hint?(b(),M("p",Pf,H(e.hint),1)):te("",!0)],544)],2))}}),Lf=ie(Of,[["__scopeId","data-v-e7ce8d8c"]]),Fo=xe(Ef,ke("Form")),sn=xe(Lf,ke("FormItem")),St=xe(De,ke("Icon"));function Ns(e,t){const n=nt(rd,null);return{isDisabled:T(()=>!!e.disabled||!!n?.disabled.value),isError:T(()=>!!e.error||!!e.errorMessage||!!n?.error.value),describedBy:T(()=>e.errorMessage?t.value:n?.error.value?n.errorId.value:void 0)}}const Ff={key:0,class:"m-input__affix m-input__affix--prefix"},Nf=["id","type","value","placeholder","disabled","readonly","maxlength","name","autocomplete","aria-label","aria-invalid","aria-describedby"],Jf={key:1,class:"m-input__actions"},Uf=["aria-label","aria-pressed"],Gf=["id"],Hf=V({name:"MInput",inheritAttrs:!1,__name:"Input",props:{modelValue:{default:""},type:{default:"text"},size:{default:"medium"},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{default:void 0},prefixIcon:{default:void 0},suffixIcon:{default:void 0},maxlength:{default:void 0},name:{default:void 0},autocomplete:{default:void 0},id:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","input","change","focus","blur","clear","search"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=uo(),l=O(null),i=O(!1),r=mt("m-input"),c=T(()=>`${r}-error`),{isDisabled:u,isError:p,describedBy:f}=Ns(o,c),v=T(()=>o.modelValue??""),x=T(()=>o.clearable&&v.value.length>0&&!u.value&&!o.readonly),$=T(()=>o.type==="password"&&!u.value),S=T(()=>o.type!=="password"?o.type:i.value?"text":"password"),E=T(()=>{if(o.prefixIcon)return o.prefixIcon;if(o.type==="search"&&!a.prefix)return"search"}),z=T(()=>x.value||$.value||!!o.suffixIcon||!!a.suffix),A=T(()=>[`m-input--${o.size}`,{"is-disabled":u.value,"is-readonly":o.readonly,"is-error":p.value}]);function L(w){const B=w.target;s("update:modelValue",B.value),s("input",B.value,w)}function W(w){const B=w.target;s("change",B.value,w)}function ne(w){w.key==="Enter"&&o.type==="search"&&s("search",v.value,w)}function q(){l.value?.focus()}function K(w){if(u.value)return;const B=w.target;B instanceof HTMLElement&&(B===l.value||B.closest("button")||q())}function J(){u.value||o.readonly||(s("update:modelValue",""),s("input",""),s("clear"),lt(()=>q()))}function I(){const w=l.value,B=w?.selectionStart??null,R=w?.selectionEnd??null;i.value=!i.value,lt(()=>{w?.focus(),B!==null&&R!==null&&w?.setSelectionRange(B,R)})}return t({focus:q,blur:()=>l.value?.blur(),select:()=>l.value?.select()}),(w,B)=>(b(),M("div",{class:ue(["m-input",A.value])},[y("div",{class:"m-input__field",onClick:K},[w.$slots.prefix||E.value?(b(),M("span",Ff,[pe(w.$slots,"prefix",{},()=>[E.value?(b(),ye(De,{key:0,name:E.value},null,8,["name"])):te("",!0)])])):te("",!0),y("input",Ya({id:e.id??d(r),ref_key:"inputRef",ref:l,class:"m-input__control",type:S.value,value:v.value,placeholder:e.placeholder,disabled:d(u),readonly:e.readonly,maxlength:e.maxlength,name:e.name,autocomplete:e.autocomplete,"aria-label":e.ariaLabel,"aria-invalid":d(p)||void 0,"aria-describedby":d(f)},w.$attrs,{onInput:L,onChange:W,onKeydown:ne,onFocus:B[0]||(B[0]=R=>s("focus",R)),onBlur:B[1]||(B[1]=R=>s("blur",R))}),null,16,Nf),z.value?(b(),M("span",Jf,[x.value?(b(),M("button",{key:0,type:"button",class:"m-input__action","aria-label":"清空输入",onMousedown:B[2]||(B[2]=un(()=>{},["prevent"])),onClick:J},[m(De,{name:"close"})],32)):te("",!0),$.value?(b(),M("button",{key:1,type:"button",class:"m-input__action","aria-label":i.value?"隐藏密码":"显示密码","aria-pressed":i.value,onMousedown:B[3]||(B[3]=un(()=>{},["prevent"])),onClick:I},[m(De,{name:i.value?"eye-off":"eye"},null,8,["name"])],40,Uf)):te("",!0),pe(w.$slots,"suffix",{},()=>[e.suffixIcon?(b(),ye(De,{key:0,name:e.suffixIcon,class:"m-input__suffix-icon"},null,8,["name"])):te("",!0)])])):te("",!0)]),e.errorMessage?(b(),M("p",{key:0,id:c.value,class:"m-input__error"},H(e.errorMessage),9,Gf)):te("",!0)],2))}}),jf=ie(Hf,[["__scopeId","data-v-6ce2d465"]]),Ne=xe(jf,ke("Input"));function Yn(e,t){return e===void 0?t:Number.isFinite(e)?Math.max(0,Math.floor(e)):Number.POSITIVE_INFINITY}function dd(e={}){const t=O([]),n=O(Yn(e.maxVisible,Number.POSITIVE_INFINITY)),o=new Map,s=new Map,a=e.getKey,l=e.onClose;let i=Yn(e.maxQueue,Number.POSITIVE_INFINITY),r=Yn(e.dedupeWindow,0),c=0;const u=T(()=>{const I=n.value,w=[];let B=0;for(const R of t.value){if(R.persistent){w.push(R);continue}B<I&&(w.push(R),B+=1)}return w}),p=T(()=>new Set(u.value.map(I=>I.id))),f=T(()=>{const I=p.value;return t.value.filter(w=>!I.has(w.id))});function v(I){const w=o.get(I);w!==void 0&&(clearTimeout(w),o.delete(I))}function x(I){for(const[w,B]of s)B.id===I&&s.delete(w)}function $(){const I=u.value,w=new Set(I.map(B=>B.id));for(const[B,R]of o)w.has(B)||(clearTimeout(R),o.delete(B));for(const B of I)B.persistent||B.duration<=0||o.has(B.id)||o.set(B.id,setTimeout(()=>E(B.id),B.duration))}function S(I){v(I),$()}function E(I){const w=t.value.findIndex(R=>R.id===I);if(w===-1){v(I);return}v(I),x(I);const[B]=t.value.splice(w,1);$(),B&&l?.(B)}function z(){for(;t.value.length>=i;){const I=p.value,w=t.value.find(R=>!R.persistent&&!I.has(R.id));if(w){E(w.id);continue}const B=t.value.find(R=>!R.persistent);if(B){E(B.id);continue}return!1}return!0}function A(I){if(I.persistent||I.priority!=="high"){t.value.push(I);return}const w=t.value.findIndex(B=>!B.persistent&&B.priority!=="high");w===-1?t.value.push(I):t.value.splice(w,0,I)}function L(I){const w=Date.now(),B=a?.(I);if(B&&r>0){const Q=s.get(B);if(Q){const he=t.value.find(be=>be.id===Q.id);if(he&&w-Q.at<r)return Q.at=w,S(he.id),he.id;s.delete(B)}}if(!z())return 0;const R=c+1;return c=R,A({...I,id:R,priority:I.priority??"normal"}),$(),B&&s.set(B,{id:R,at:w}),R}function W(I){for(const w of[...t.value])!!w.persistent===I&&E(w.id)}function ne(){W(!1)}function q(){W(!0)}function K(){for(const I of[...t.value])E(I.id)}function J(I){for(n.value=Yn(I.maxVisible,n.value),i=Yn(I.maxQueue,i),r=Yn(I.dedupeWindow,r);t.value.length>i;){const w=p.value,B=t.value.find(Q=>!Q.persistent&&!w.has(Q.id));if(B){E(B.id);continue}const R=t.value.find(Q=>!Q.persistent);if(R){E(R.id);continue}break}$()}return{items:t,visibleItems:u,queuedItems:f,push:L,remove:E,clear:ne,clearPersistent:q,clearAll:K,configure:J}}const _s=new Map,In=dd({maxVisible:5,maxQueue:20,dedupeWindow:500,getKey:e=>`${e.type}\0${e.message}`,onClose:e=>{const t=_s.get(e.id);_s.delete(e.id),t?.()}});let ud=3e3;const cd=dn(In.visibleItems),Wf=dn(In.queuedItems);function tl(e){const t=typeof e=="string"?{message:e}:e,n=t.persistent??!1,o=In.push({type:t.type??"info",message:t.message,duration:n?0:t.duration??ud,persistent:n,priority:t.priority??"normal"});return o===0?0:(t.onClose&&!_s.has(o)&&_s.set(o,t.onClose),o)}function ws(e){In.remove(e)}function md(){In.clear()}function pd(){In.clearPersistent()}function fd(){In.clearAll()}function vd(e){In.configure({maxVisible:e.maxCount,maxQueue:e.maxQueue}),e.duration!==void 0&&(ud=Math.max(0,Math.floor(e.duration)))}function qf(){return()=>{}}const Kf={class:"m-message",role:"region","aria-label":"消息"},Qf=["role"],Yf={class:"m-message__text"},Xf=V({name:"MMessage",__name:"Message",setup(e){const t={success:"success",info:"info",warning:"warning",error:"error"};let n=null;return pn(()=>{n=qf()}),bt(()=>{n?.()}),(o,s)=>(b(),ye(cn,{to:"body"},[y("div",Kf,[m(Kr,{name:"m-message-item",tag:"div",class:"m-message__list"},{default:g(()=>[(b(!0),M(le,null,Le(d(cd),a=>(b(),M("div",{key:a.id,class:ue(["m-message__item",`m-message__item--${a.type}`]),role:a.type==="error"?"alert":"status"},[m(De,{name:t[a.type],class:"m-message__icon"},null,8,["name"]),y("span",Yf,H(a.message),1)],10,Qf))),128))]),_:1})])]))}}),Zf=ie(Xf,[["__scopeId","data-v-1a788d4e"]]);function Js(e){return(t,n={})=>tl({...n,message:t,type:e})}const gd=Js("success"),hd=Js("info"),bd=Js("warning"),yd=Js("error"),Qe={show:tl,success:gd,info:hd,warning:bd,error:yd,close:ws,destroy:ws,clear:md,clearPersistent:pd,clearAll:fd,configure:vd};function Md(){return{messages:cd,queuedMessages:Wf,show:tl,success:gd,info:hd,warning:bd,error:yd,close:ws,destroy:ws,clear:md,clearPersistent:pd,clearAll:fd,configure:vd}}const _d=xe(Zf,ke("Message")),ev=["id","aria-labelledby","aria-label"],tv={key:0,class:"m-modal__header"},nv=["id"],ov={class:"m-modal__body"},sv={key:1,class:"m-modal__footer"},av=V({name:"MModal",__name:"Modal",props:{modelValue:{type:Boolean,default:!1},title:{default:void 0},size:{default:"medium"},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},hideMode:{default:"unmount"},ariaLabel:{default:void 0},id:{default:void 0}},emits:["update:modelValue","close","opened","closed"],setup(e,{emit:t}){const n=e,o=t,s=O(null),a=mt("m-modal-title"),l=T(()=>n.hideMode==="display"||n.modelValue),{zIndex:i}=qn({open:()=>n.modelValue,panel:s,closeOnEscape:()=>n.closable,closeOnOutside:()=>n.maskClosable,lockScroll:()=>n.lockScroll,trapFocus:!0,restoreFocus:!0,onDismiss:c=>r(c==="escape"?"escape":"mask")});function r(c,u){o("update:modelValue",!1),o("close",c,u)}return(c,u)=>(b(),ye(cn,{to:"body"},[m(Wn,{name:"m-modal",onAfterEnter:u[1]||(u[1]=p=>o("opened")),onAfterLeave:u[2]||(u[2]=p=>o("closed"))},{default:g(()=>[l.value?Vn((b(),M("div",{key:0,class:"m-modal",style:Je({zIndex:d(i)})},[u[3]||(u[3]=y("div",{class:"m-modal__mask","aria-hidden":"true"},null,-1)),y("div",{id:e.id,ref_key:"panelRef",ref:s,class:ue(["m-modal__panel",`m-modal__panel--${e.size}`]),role:"dialog","aria-modal":"true","aria-labelledby":e.title&&!c.$slots.header?d(a):void 0,"aria-label":e.title&&!c.$slots.header?void 0:e.ariaLabel,tabindex:"-1"},[e.title||c.$slots.header||e.closable?(b(),M("header",tv,[pe(c.$slots,"header",{},()=>[y("h2",{id:d(a),class:"m-modal__title"},H(e.title),9,nv)],!0),e.closable?(b(),M("button",{key:0,type:"button",class:"m-modal__close","aria-label":"关闭对话框",onClick:u[0]||(u[0]=p=>r("close-button",p))},[m(De,{name:"close",size:18})])):te("",!0)])):te("",!0),y("div",ov,[pe(c.$slots,"default",{},void 0,!0)]),c.$slots.footer?(b(),M("footer",sv,[pe(c.$slots,"footer",{},void 0,!0)])):te("",!0)],10,ev)],4)),[[Sn,e.hideMode==="display"?e.modelValue:!0]]):te("",!0)]),_:3})]))}}),lv=ie(av,[["__scopeId","data-v-4daa44f4"]]),po=xe(lv,ke("Modal")),iv={class:"m-number-input__field"},rv=["id","value","placeholder","disabled","readonly","name","aria-label","aria-valuenow","aria-valuemin","aria-valuemax","aria-invalid","aria-describedby"],dv={key:0,class:"m-number-input__controls"},uv=["disabled"],cv=["disabled"],mv=["id"],pv=V({name:"MNumberInput",__name:"NumberInput",props:{modelValue:{default:null},min:{default:void 0},max:{default:void 0},step:{default:1},precision:{default:void 0},size:{default:"medium"},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},error:{type:Boolean,default:!1},errorMessage:{default:void 0},name:{default:void 0},id:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","change","focus","blur"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=O(null),l=mt("m-number-input"),i=T(()=>`${l}-error`),r=O(!1),c=O(""),{isDisabled:u,isError:p,describedBy:f}=Ns(o,i);function v(R){if(!Number.isFinite(R))return 0;const Q=String(R);if(Q.includes("e-"))return Number(Q.split("e-")[1]??0);const he=Q.indexOf(".");return he===-1?0:Q.length-he-1}const x=T(()=>{const R=o.precision;return R!==void 0?Math.min(20,Math.max(0,Math.trunc(R))):Math.min(20,v(o.step))});function $(R){const Q=x.value;return Q<=0?Math.round(R):Number(R.toFixed(Q))}function S(R){let Q=R;return o.min!==void 0&&Q<o.min&&(Q=o.min),o.max!==void 0&&Q>o.max&&(Q=o.max),Q}function E(R){return $(S(R))}function z(R){return R==null||Number.isNaN(R)?"":x.value>0?R.toFixed(x.value):String(R)}const A=T(()=>r.value?c.value:z(o.modelValue)),L=T(()=>u.value||o.readonly?!1:o.modelValue===null||o.max===void 0||o.modelValue<o.max),W=T(()=>u.value||o.readonly?!1:o.modelValue===null||o.min===void 0||o.modelValue>o.min),ne=T(()=>[`m-number-input--${o.size}`,{"is-disabled":u.value,"is-readonly":o.readonly,"is-error":p.value}]);function q(R){const Q=R.trim();if(Q===""||Q==="-"||Q==="."||Q==="-.")return null;const he=Number(Q);return Number.isFinite(he)?he:null}function K(R){if(u.value||o.readonly)return;const Q=R.target;c.value=Q.value;const he=q(Q.value);if(he===null){Q.value.trim()===""&&s("update:modelValue",null);return}s("update:modelValue",he)}function J(R){r.value=!0,c.value=z(o.modelValue),s("focus",R)}function I(R){r.value=!1;const Q=q(c.value),he=Q===null?null:E(Q);he!==o.modelValue&&s("update:modelValue",he),s("change",he,R)}function w(R){if(u.value||o.readonly)return;const Q=R===1?o.min??0:o.max??0,he=o.modelValue??Q,be=E(he+R*o.step);be!==o.modelValue&&(s("update:modelValue",be),r.value&&(c.value=z(be)))}function B(R){R.key==="ArrowUp"?(R.preventDefault(),w(1)):R.key==="ArrowDown"&&(R.preventDefault(),w(-1))}return t({focus:()=>a.value?.focus(),blur:()=>a.value?.blur(),select:()=>a.value?.select()}),(R,Q)=>(b(),M("div",{class:ue(["m-number-input",ne.value])},[y("div",iv,[y("input",{id:e.id??d(l),ref_key:"inputRef",ref:a,class:"m-number-input__control",type:"text",inputmode:"decimal",autocomplete:"off",role:"spinbutton",value:A.value,placeholder:e.placeholder,disabled:d(u),readonly:e.readonly,name:e.name,"aria-label":e.ariaLabel,"aria-valuenow":e.modelValue??void 0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-invalid":d(p)||void 0,"aria-describedby":d(f),onInput:K,onKeydown:B,onFocus:J,onBlur:I},null,40,rv),e.controls?(b(),M("span",dv,[y("button",{type:"button",class:"m-number-input__button","aria-label":"增加",disabled:!L.value,onMousedown:Q[0]||(Q[0]=un(()=>{},["prevent"])),onClick:Q[1]||(Q[1]=he=>w(1))},[m(De,{name:"chevron-up",size:12})],40,uv),y("button",{type:"button",class:"m-number-input__button","aria-label":"减少",disabled:!W.value,onMousedown:Q[2]||(Q[2]=un(()=>{},["prevent"])),onClick:Q[3]||(Q[3]=he=>w(-1))},[m(De,{name:"chevron-down",size:12})],40,cv)])):te("",!0)]),e.errorMessage?(b(),M("p",{key:0,id:i.value,class:"m-number-input__error"},H(e.errorMessage),9,mv)):te("",!0)],2))}}),fv=ie(pv,[["__scopeId","data-v-80e6b5a9"]]),Gn=xe(fv,ke("NumberInput")),vv={class:"m-popover"},gv=["aria-expanded","aria-controls"],hv=["id","aria-label","aria-labelledby"],bv={key:0,class:"m-popover__arrow","aria-hidden":"true"},yv={key:1,class:"m-popover__header"},Mv=["id"],_v={class:"m-popover__body"},wv={key:2,class:"m-popover__footer"},kv=V({name:"MPopover",__name:"Popover",props:{modelValue:{type:Boolean,default:void 0},trigger:{default:"click"},placement:{default:"bottom"},title:{default:void 0},width:{default:280},offset:{default:8},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},closeOnOutside:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0},ariaLabel:{default:void 0}},emits:["update:modelValue","open","close"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=O(null),l=O(null),i=O(!1),r=mt("m-popover"),c=T(()=>`${r}-title`),u=T(()=>`${r}-panel`),p=T(()=>o.trigger??"click"),f=T(()=>o.modelValue??i.value),v=T(()=>o.hideMode==="display"||f.value),x=T(()=>({width:typeof o.width=="number"?`${o.width}px`:o.width})),{style:$,actualPlacement:S}=Ko({trigger:a,panel:l,open:()=>f.value,placement:()=>o.placement,offset:o.offset,onReferenceHidden:()=>ne()});let E=null;const{zIndex:z}=qn({open:()=>f.value,panel:l,ignore:()=>[a.value],closeOnEscape:!0,closeOnOutside:()=>p.value==="click"&&o.closeOnOutside,restoreFocus:!0,onDismiss:()=>ne()});function A(){E!==null&&(clearTimeout(E),E=null)}function L(w,B=!1){o.disabled&&w||(w&&A(),w!==f.value&&(o.modelValue===void 0&&(i.value=w),s("update:modelValue",w),w&&B&&lt(()=>l.value?.focus({preventScroll:!0}))))}function W(){L(!0)}function ne(){L(!1)}function q(w=!1){L(!f.value,w)}function K(w){p.value==="click"&&q(w.detail===0)}function J(){p.value==="hover"&&(A(),L(!0))}function I(){p.value==="hover"&&(A(),E=setTimeout(()=>{E=null,ne()},120))}return ze(f,w=>{A(),s(w?"open":"close")},{flush:"post"}),ze(()=>o.modelValue,w=>{A(),w!==void 0&&(i.value=w)},{immediate:!0}),ze(()=>o.disabled,w=>{w&&ne()}),ze(p,()=>ne()),bt(A),t({open:W,close:ne,toggle:q}),(w,B)=>(b(),M("span",vv,[y("span",{ref_key:"triggerRef",ref:a,class:"m-popover__trigger","aria-expanded":f.value,"aria-controls":u.value,"aria-haspopup":"dialog",onClick:K,onMouseenter:J,onMouseleave:I},[pe(w.$slots,"trigger",{},void 0)],40,gv),(b(),ye(cn,{to:"body"},[m(Wn,{name:"m-popover"},{default:g(()=>[v.value?Vn((b(),M("div",{key:0,id:u.value,ref_key:"panelRef",ref:l,class:ue(["m-popover__panel",`m-popover__panel--${d(S)}`]),style:Je({...d($),...x.value,zIndex:d(z)}),role:"dialog","aria-label":e.title?void 0:e.ariaLabel,"aria-labelledby":e.title?c.value:void 0,tabindex:"-1",onMouseenter:J,onMouseleave:I},[e.showArrow?(b(),M("span",bv)):te("",!0),e.title||w.$slots.title?(b(),M("header",yv,[y("h3",{id:c.value,class:"m-popover__title"},[pe(w.$slots,"title",{},()=>[k(H(e.title),1)],!0)],8,Mv)])):te("",!0),y("div",_v,[pe(w.$slots,"default",{},void 0,!0)]),w.$slots.footer?(b(),M("footer",wv,[pe(w.$slots,"footer",{},void 0,!0)])):te("",!0)],46,hv)),[[Sn,e.hideMode==="display"?f.value:!0]]):te("",!0)]),_:3})]))]))}}),xv=ie(kv,[["__scopeId","data-v-161dd02e"]]),ao=xe(xv,ke("Popover")),wd=Symbol("m-radio-group"),Bv={class:"m-radio__control"},Cv=["id","name","value","checked","disabled"],Tv={key:0,class:"m-radio__label"},$v=V({name:"MRadio",__name:"Radio",props:{modelValue:{default:null},value:{default:void 0},label:{default:void 0},disabled:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},id:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,o=t,s=nt(wd,null),a=mt("m-radio"),l=T(()=>n.disabled||!!s?.disabled.value),i=T(()=>s?.size.value??n.size),r=T(()=>n.name??s?.name.value),c=T(()=>n.value===void 0?!1:s?s.modelValue.value===n.value:n.modelValue===n.value),u=T(()=>[`m-radio--${i.value}`,{"is-checked":c.value,"is-disabled":l.value}]);function p(f){!f.target.checked||l.value||n.value===void 0||(s?s.select(n.value):o("update:modelValue",n.value),o("change",n.value,f))}return(f,v)=>(b(),M("label",{class:ue(["m-radio",u.value])},[y("span",Bv,[y("input",{id:e.id??d(a),class:"m-radio__native",type:"radio",name:r.value,value:e.value,checked:c.value,disabled:l.value,onChange:p},null,40,Cv),v[0]||(v[0]=y("span",{class:"m-radio__box","aria-hidden":"true"},[y("span",{class:"m-radio__dot"})],-1))]),e.label||f.$slots.default?(b(),M("span",Tv,[pe(f.$slots,"default",{},()=>[k(H(e.label),1)])])):te("",!0)],2))}}),kd=ie($v,[["__scopeId","data-v-3271672b"]]),Vv=["aria-label"],Sv=V({name:"MRadioGroup",__name:"RadioGroup",props:{modelValue:{default:null},options:{default:()=>[]},disabled:{type:Boolean,default:!1},size:{default:"medium"},name:{default:void 0},direction:{default:"vertical"},ariaLabel:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,o=t,s=mt("m-radio-group"),a=T(()=>n.modelValue??null);function l(i){n.disabled||(o("update:modelValue",i),o("change",i))}return ln(wd,{modelValue:a,disabled:T(()=>n.disabled),size:T(()=>n.size),name:T(()=>n.name??s),select:l}),(i,r)=>(b(),M("div",{class:ue(["m-radio-group",`m-radio-group--${e.direction}`]),role:"radiogroup","aria-label":e.ariaLabel},[pe(i.$slots,"default",{},()=>[(b(!0),M(le,null,Le(e.options,c=>(b(),ye(kd,{key:c.value,value:c.value,label:c.label,disabled:c.disabled},null,8,["value","label","disabled"]))),128))])],10,Vv))}}),Iv=ie(Sv,[["__scopeId","data-v-da8aa3c7"]]),nn=xe(kd,ke("Radio")),No=xe(Iv,ke("RadioGroup")),zv=["aria-label"],Ev=["aria-checked","aria-disabled","name","tabindex","disabled","onClick","onKeydown"],Av={class:"m-segmented-control__label"},Rv=V({name:"MSegmentedControl",__name:"SegmentedControl",props:{modelValue:{default:null},options:{default:()=>[]},size:{default:"medium"},disabled:{type:Boolean,default:!1},ariaLabel:{default:void 0},name:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,o=t,s=O([]),a=T(()=>n.options.findIndex(x=>x.value===n.modelValue&&!x.disabled&&!n.disabled)),l=T(()=>n.options.findIndex(x=>!x.disabled&&!n.disabled)),i=T(()=>a.value===-1?l.value:a.value),r=T(()=>[`m-segmented-control--${n.size}`,{"is-disabled":n.disabled}]);function c(x,$){x instanceof HTMLButtonElement&&(s.value[$]=x)}function u(x){return n.disabled||!!x.disabled}function p(x){u(x)||x.value!==n.modelValue&&(o("update:modelValue",x.value),o("change",x.value,x))}async function f(x){await lt(),s.value[x]?.focus()}function v(x,$){if(!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","Home","End"].includes(x.key))return;const E=n.options.map((A,L)=>({option:A,index:L})).filter(A=>!u(A.option));if(E.length===0)return;x.preventDefault();let z;if(x.key==="Home")z=E[0];else if(x.key==="End")z=E[E.length-1];else{const A=E.findIndex(q=>q.index===$),L=A===-1?0:A,ne=x.key==="ArrowRight"||x.key==="ArrowDown"?1:-1;z=E[(L+ne+E.length)%E.length]}z&&(p(z.option),f(z.index))}return(x,$)=>(b(),M("div",{class:ue(["m-segmented-control",r.value]),role:"radiogroup","aria-label":e.ariaLabel},[(b(!0),M(le,null,Le(e.options,(S,E)=>(b(),M("button",{key:S.value,ref_for:!0,ref:z=>c(z,E),type:"button",class:ue(["m-segmented-control__option",{"is-selected":E===a.value,"is-disabled":u(S)}]),role:"radio","aria-checked":E===a.value,"aria-disabled":u(S)||void 0,name:e.name,tabindex:E===i.value?0:-1,disabled:u(S),onClick:z=>p(S),onKeydown:z=>v(z,E)},[S.icon?(b(),ye(De,{key:0,name:S.icon,class:"m-segmented-control__icon"},null,8,["name"])):te("",!0),y("span",Av,H(S.label),1)],42,Ev))),128))],10,zv))}}),Dv=ie(Rv,[["__scopeId","data-v-c0577901"]]),Hn=xe(Dv,ke("SegmentedControl")),Pv={class:"m-select__trigger"},Ov=["id","aria-expanded","aria-controls","aria-activedescendant","aria-label","aria-invalid","aria-describedby","disabled","name"],Lv=["id"],Fv=["id","aria-label"],Nv={key:0,class:"m-select__empty"},Jv=["id","aria-selected","aria-disabled","onMousemove","onClick"],Uv={class:"m-select__option-label"},Gv=V({name:"MSelect",__name:"Select",props:{modelValue:{default:null},options:{default:()=>[]},placeholder:{default:"请选择"},size:{default:"medium"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{default:void 0},emptyText:{default:"暂无选项"},hideMode:{default:"unmount"},ariaLabel:{default:void 0},id:{default:void 0},name:{default:void 0}},emits:["update:modelValue","change","clear","visible-change"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=mt("m-select"),l=O(null),i=O(null),r=O(null),c=O(!1),u=O(-1),p=T(()=>`${a}-panel`),f=T(()=>`${a}-error`),v=T(()=>o.options.find(se=>se.value===o.modelValue)??null),{isDisabled:x,isError:$,describedBy:S}=Ns(o,f),E=T(()=>o.clearable&&o.modelValue!==null&&o.modelValue!==void 0&&!x.value),z=T(()=>[`m-select--${o.size}`,{"is-open":c.value,"is-disabled":x.value,"is-error":$.value}]),A=T(()=>o.hideMode==="display"||c.value),L=T(()=>c.value&&u.value>=0?q(u.value):void 0),{style:W}=Ko({trigger:i,panel:r,open:()=>c.value,matchWidth:!0,placement:"bottom",onReferenceHidden:()=>R()}),{zIndex:ne}=qn({open:()=>c.value,panel:r,ignore:()=>[l.value],closeOnEscape:!0,closeOnOutside:!0,restoreFocus:!1,onDismiss:()=>R()});function q(se){return`${a}-option-${se}`}function K(se){const Pe=o.options[se];!Pe||Pe.disabled||(u.value=se)}function J(){return o.options.findIndex(se=>!se.disabled)}function I(){for(let se=o.options.length-1;se>=0;se-=1)if(!o.options[se]?.disabled)return se;return-1}function w(){return o.options.findIndex(se=>se.value===o.modelValue&&!se.disabled)}function B(se=!1){if(x.value||c.value)return;c.value=!0;const Pe=w();u.value=Pe>=0?Pe:se?I():J(),s("visible-change",!0)}function R(){c.value&&(c.value=!1,u.value=-1,s("visible-change",!1))}function Q(){c.value?R():B()}function he(se){const Pe=o.options.map((N,oe)=>({option:N,index:oe})).filter(N=>!N.option.disabled);if(Pe.length===0)return;const We=Pe.findIndex(N=>N.index===u.value),ot=Pe[((We===-1?se===1?-1:0:We)+se+Pe.length)%Pe.length];u.value=ot?.index??-1}function be(se){se.disabled||(s("update:modelValue",se.value),s("change",se.value,se),R(),i.value?.focus({preventScroll:!0}))}function fe(){const se=o.options[u.value];se&&be(se)}function Me(){x.value||(s("update:modelValue",null),s("change",null,null),s("clear"),R(),i.value?.focus({preventScroll:!0}))}function ve(se){if(!x.value){if(!c.value){["ArrowDown","ArrowUp","Enter"," "].includes(se.key)&&(se.preventDefault(),B(se.key==="ArrowUp"));return}switch(se.key){case"ArrowDown":se.preventDefault(),he(1);break;case"ArrowUp":se.preventDefault(),he(-1);break;case"Home":{se.preventDefault();const Pe=J();u.value=Pe;break}case"End":{se.preventDefault(),u.value=I();break}case"Enter":case" ":se.preventDefault(),fe();break;case"Escape":se.preventDefault(),R();break;case"Tab":R();break}}}function Be(){i.value?.focus()}function He(){i.value?.blur()}return t({focus:Be,blur:He,open:B,close:R}),(se,Pe)=>(b(),M("div",{ref_key:"rootRef",ref:l,class:ue(["m-select",z.value])},[y("div",Pv,[y("button",{id:e.id??d(a),ref_key:"triggerRef",ref:i,type:"button",class:"m-select__control",role:"combobox","aria-haspopup":"listbox","aria-expanded":c.value,"aria-controls":p.value,"aria-activedescendant":L.value,"aria-label":e.ariaLabel,"aria-invalid":d($)||void 0,"aria-describedby":d(S),disabled:d(x),name:e.name,onClick:Q,onKeydown:ve},[y("span",{class:ue(["m-select__value",{"is-placeholder":!v.value}])},H(v.value?.label??e.placeholder),3),m(De,{name:"chevron-down",class:ue(["m-select__arrow",{"is-open":c.value}])},null,8,["class"])],40,Ov),E.value?(b(),M("button",{key:0,type:"button",class:"m-select__clear","aria-label":"清空选择",onMousedown:Pe[0]||(Pe[0]=un(()=>{},["prevent"])),onClick:un(Me,["stop"])},[m(De,{name:"close"})],32)):te("",!0)]),e.errorMessage?(b(),M("p",{key:0,id:f.value,class:"m-select__error"},H(e.errorMessage),9,Lv)):te("",!0),(b(),ye(cn,{to:"body"},[m(Wn,{name:"m-select-panel"},{default:g(()=>[A.value?Vn((b(),M("div",{key:0,id:p.value,ref_key:"panelRef",ref:r,class:"m-select__panel",style:Je({...d(W),zIndex:d(ne)}),role:"listbox","aria-label":e.ariaLabel},[e.options.length===0?(b(),M("div",Nv,H(e.emptyText),1)):(b(!0),M(le,{key:1},Le(e.options,(We,yt)=>(b(),M("div",{id:q(yt),key:We.value,class:ue(["m-select__option",{"is-active":yt===u.value,"is-selected":We.value===e.modelValue,"is-disabled":We.disabled}]),role:"option","aria-selected":We.value===e.modelValue,"aria-disabled":We.disabled||void 0,onMousemove:ot=>K(yt),onClick:ot=>be(We)},[y("span",Uv,H(We.label),1),We.value===e.modelValue?(b(),ye(De,{key:0,name:"check",class:"m-select__check","aria-hidden":"true"})):te("",!0)],42,Jv))),128))],12,Fv)),[[Sn,e.hideMode==="display"?c.value:!0]]):te("",!0)]),_:1})]))],2))}}),Hv=ie(Gv,[["__scopeId","data-v-7376e330"]]),an=xe(Hv,ke("Select")),jv=["id","disabled","aria-checked"],Wv={key:0,class:"m-switch__label"},qv=V({name:"MSwitch",__name:"Switch",props:{modelValue:{type:[Boolean,String,Number],default:!1},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},size:{default:"medium"},label:{default:void 0},id:{default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,o=t,s=T(()=>n.modelValue===n.activeValue),a=T(()=>[`m-switch--${n.size}`,{"is-checked":s.value,"is-disabled":n.disabled}]);function l(){if(n.disabled)return;const i=s.value?n.inactiveValue:n.activeValue;o("update:modelValue",i),o("change",i)}return(i,r)=>(b(),M("button",{id:e.id,type:"button",role:"switch",class:ue(["m-switch",a.value]),disabled:e.disabled,"aria-checked":s.value,onClick:l},[r[0]||(r[0]=y("span",{class:"m-switch__track","aria-hidden":"true"},[y("span",{class:"m-switch__thumb"})],-1)),e.label||i.$slots.default?(b(),M("span",Wv,[pe(i.$slots,"default",{},()=>[k(H(e.label),1)])])):te("",!0)],10,jv))}}),Kv=ie(qv,[["__scopeId","data-v-aa4d9c47"]]),jt=xe(Kv,ke("Switch")),Qv={key:1},Yv={key:1},Xv=["colspan"],Zv=V({name:"MTable",__name:"Table",props:{columns:{},rows:{},rowKey:{default:void 0},caption:{default:void 0},captionVisible:{type:Boolean,default:!1},size:{default:"medium"},layout:{default:"auto"},minWidth:{default:void 0},rowHeader:{type:Boolean,default:!1},emptyText:{default:"暂无数据"}},setup(e){const t=e,n=T(()=>Math.max(t.columns.length,1)),o={row:void 0,column:{key:"empty",title:""},value:void 0,index:-1};function s(p){if(!(p===void 0||p===""))return typeof p=="number"?`${p}px`:p}const a=T(()=>{const p=s(t.minWidth);return p?{minWidth:p}:void 0});function l(p){const f=s(p.width),v=s(p.minWidth),x={};return f&&(x.width=f),v&&(x.minWidth=v),p.align&&(x.textAlign=p.align),Object.keys(x).length>0?x:void 0}function i(p,f){return p[f]}function r(p,f){if(!t.rowKey)return f;const v=i(p,t.rowKey);return v==null||v===""?f:typeof v=="string"||typeof v=="number"?v:String(v)}function c(p){return p==null?"—":String(p)}function u(p){return p==null}return(p,f)=>(b(),M("div",{class:ue(["m-table",[`m-table--${e.size}`,{"m-table--fixed":e.layout==="fixed"}]])},[y("table",{class:"m-table__table",style:Je(a.value)},[e.caption?(b(),M("caption",{key:0,class:ue(e.captionVisible?"m-table__caption":"m-sr-only")},H(e.caption),3)):te("",!0),e.columns.length?(b(),M("thead",Qv,[y("tr",null,[(b(!0),M(le,null,Le(e.columns,v=>(b(),M("th",{key:v.key,scope:"col",style:Je(l(v))},H(v.title),5))),128))])])):te("",!0),y("tbody",null,[e.columns.length?(b(!0),M(le,{key:0},Le(e.rows,(v,x)=>(b(),M("tr",{key:r(v,x)},[(b(!0),M(le,null,Le(e.columns,($,S)=>(b(),M(le,{key:$.key},[e.rowHeader&&S===0?(b(),M("th",{key:0,scope:"row",style:Je(l($))},[p.$slots[$.key]?pe(p.$slots,$.key,{row:v,column:$,value:i(v,$.key),index:x},void 0,!0,0):(b(),M(le,{key:1},[k(H(c(i(v,$.key))),1)],64))],4)):(b(),M("td",{key:1,style:Je(l($))},[p.$slots[$.key]?pe(p.$slots,$.key,{row:v,column:$,value:i(v,$.key),index:x},void 0,!0,0):(b(),M("span",{key:1,class:ue({"m-table__muted":u(i(v,$.key))})},H(c(i(v,$.key))),3))],4))],64))),128))]))),128)):te("",!0),!e.columns.length||!e.rows.length?(b(),M("tr",Yv,[y("td",{class:"m-table__empty",colspan:n.value},[pe(p.$slots,"empty",tu(Pr(o)),()=>[k(H(e.emptyText),1)])],8,Xv)])):te("",!0)])],4)],2))}}),eg=ie(Zv,[["__scopeId","data-v-26749841"]]),fo=xe(eg,ke("Table")),tg=["aria-label"],ng=["id","aria-selected","aria-controls","tabindex","disabled","onClick","onKeydown"],og=["id","aria-labelledby"],sg=V({name:"MTabs",__name:"Tabs",props:{modelValue:{default:null},items:{default:()=>[]},size:{default:"medium"},ariaLabel:{default:void 0},keepAlive:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,o=t,s=mt("m-tabs"),a=O(null),l=T(()=>n.items.find(S=>!S.disabled)?.key??null),i=T(()=>{const S=n.modelValue;return S!=null&&n.items.some(E=>E.key===S&&!E.disabled)?S:l.value}),r=T(()=>[`m-tabs--${n.size}`]);function c(S){return n.items[S]?.key===i.value}function u(S){return`${s}-tab-${S}`}function p(S){return`${s}-panel-${S}`}function f(){return Array.from(a.value?.querySelectorAll('[role="tab"]')??[])}async function v(S){await lt(),f()[S]?.focus()}function x(S,E){S.disabled||(S.key!==i.value&&(o("update:modelValue",S.key),o("change",S.key,S)),v(E))}function $(S,E){if(!["ArrowRight","ArrowLeft","Home","End"].includes(S.key))return;const A=n.items.map((W,ne)=>({item:W,index:ne})).filter(W=>!W.item.disabled);if(A.length===0)return;S.preventDefault();let L;if(S.key==="Home")L=A[0];else if(S.key==="End")L=A[A.length-1];else{const W=A.findIndex(K=>K.index===E),ne=W===-1?0:W,q=S.key==="ArrowRight"?1:-1;L=A[(ne+q+A.length)%A.length]}L&&x(L.item,L.index)}return(S,E)=>(b(),M("div",{class:ue(["m-tabs",r.value])},[y("div",{ref_key:"tablistRef",ref:a,class:"m-tabs__list",role:"tablist","aria-label":e.ariaLabel},[(b(!0),M(le,null,Le(e.items,(z,A)=>(b(),M("button",{id:u(A),key:z.key,type:"button",role:"tab",class:ue(["m-tabs__tab",{"is-active":c(A)}]),"aria-selected":c(A),"aria-controls":S.$slots.panel?p(A):void 0,tabindex:c(A)?0:-1,disabled:z.disabled,onClick:L=>x(z,A),onKeydown:L=>$(L,A)},H(z.label),43,ng))),128))],8,tg),(b(!0),M(le,null,Le(e.items,(z,A)=>(b(),M(le,{key:`panel-${z.key}`},[S.$slots.panel&&(e.keepAlive||c(A))?Vn((b(),M("div",{key:0,id:p(A),class:"m-tabs__panel",role:"tabpanel","aria-labelledby":u(A),tabindex:"0"},[pe(S.$slots,"panel",{item:z,index:A,active:c(A)},void 0)],8,og)),[[Sn,e.keepAlive?c(A):!0]]):te("",!0)],64))),128))],2))}}),ag=ie(sg,[["__scopeId","data-v-d02fde87"]]),Jo=xe(ag,ke("Tabs")),lg={class:"m-tag__label"},ig=["aria-label"],rg=V({name:"MTag",__name:"Tag",props:{type:{default:"default"},size:{default:"medium"},closable:{type:Boolean,default:!1},color:{default:void 0},closeLabel:{default:"移除标签"}},emits:["close"],setup(e,{emit:t}){const n=e,o=t,s=T(()=>[`m-tag--${n.type}`,`m-tag--${n.size}`,{"m-tag--custom":!!n.color}]),a=T(()=>{if(n.color)return{"--m-tag-custom-color":n.color,"--m-tag-custom-bg":`color-mix(in srgb, ${n.color} 12%, var(--m-color-bg-container))`,"--m-tag-custom-border":`color-mix(in srgb, ${n.color} 28%, transparent)`}});function l(i){o("close",i)}return(i,r)=>(b(),M("span",{class:ue(["m-tag",s.value]),style:Je(a.value)},[y("span",lg,[pe(i.$slots,"default",{},void 0)]),e.closable?(b(),M("button",{key:0,type:"button",class:"m-tag__close","aria-label":e.closeLabel,onClick:un(l,["stop"])},[m(De,{name:"close"})],8,ig)):te("",!0)],6))}}),dg=ie(rg,[["__scopeId","data-v-ec55770c"]]),Ye=xe(dg,ke("Tag")),ug=["id","value","rows","placeholder","disabled","readonly","maxlength","name","aria-label","aria-invalid","aria-describedby"],cg={key:0,class:"m-textarea__footer"},mg={class:"m-textarea__count"},pg=["id"],fg=V({name:"MTextarea",__name:"Textarea",props:{modelValue:{default:""},size:{default:"medium"},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rows:{default:3},maxlength:{default:void 0},showCount:{type:Boolean,default:!1},resize:{default:"vertical"},error:{type:Boolean,default:!1},errorMessage:{default:void 0},name:{default:void 0},id:{default:void 0},ariaLabel:{default:void 0}},emits:["update:modelValue","input","change","focus","blur"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=O(null),l=mt("m-textarea"),i=T(()=>`${l}-error`),r=T(()=>o.modelValue??""),c=T(()=>r.value.length),{isDisabled:u,isError:p,describedBy:f}=Ns(o,i),v=T(()=>[`m-textarea--${o.size}`,{"is-disabled":u.value,"is-readonly":o.readonly,"is-error":p.value}]);function x(S){if(u.value||o.readonly)return;const E=S.target;s("update:modelValue",E.value),s("input",E.value,S)}function $(S){s("change",S.target.value,S)}return t({focus:()=>a.value?.focus(),blur:()=>a.value?.blur(),select:()=>a.value?.select()}),(S,E)=>(b(),M("div",{class:ue(["m-textarea",v.value])},[y("textarea",{id:e.id??d(l),ref_key:"textareaRef",ref:a,class:"m-textarea__control",value:r.value,rows:e.rows,placeholder:e.placeholder,disabled:d(u),readonly:e.readonly,maxlength:e.maxlength,name:e.name,"aria-label":e.ariaLabel,"aria-invalid":d(p)||void 0,"aria-describedby":d(f),style:Je({resize:e.resize}),onInput:x,onChange:$,onFocus:E[0]||(E[0]=z=>s("focus",z)),onBlur:E[1]||(E[1]=z=>s("blur",z))},null,44,ug),e.showCount?(b(),M("div",cg,[y("span",mg,[k(H(c.value),1),e.maxlength!==void 0?(b(),M(le,{key:0},[k(" / "+H(e.maxlength),1)],64)):te("",!0)])])):te("",!0),e.errorMessage?(b(),M("p",{key:1,id:i.value,class:"m-textarea__error"},H(e.errorMessage),9,pg)):te("",!0)],2))}}),vg=ie(fg,[["__scopeId","data-v-1d8dd982"]]),jn=xe(vg,ke("Textarea")),gg=V({name:"MText",__name:"Text",props:{variant:{default:"body"},tone:{default:void 0},as:{default:void 0},block:{type:Boolean,default:!1},link:{type:Boolean,default:!1},href:{default:void 0},target:{default:void 0},rel:{default:void 0},ellipsis:{type:Boolean,default:!1},lines:{default:1}},setup(e){const t=e,n=T(()=>t.as??(t.link?"a":t.block?"p":"span")),o=T(()=>n.value==="a"),s=T(()=>t.link||o.value&&!!t.href),a=T(()=>t.ellipsis&&t.lines>1),l=T(()=>Math.max(1,Math.floor(t.lines))),i=T(()=>[`m-text--${t.variant}`,t.tone?`m-text--${t.tone}`:void 0,{"m-text--block":t.block,"m-text--link":s.value,"m-text--ellipsis":t.ellipsis&&!a.value,"m-text--clamp":a.value}]),r=T(()=>a.value?{"--m-text-lines":String(l.value)}:void 0),c=T(()=>{if(o.value)return t.rel?t.rel:t.target==="_blank"?"noopener noreferrer":void 0});return(u,p)=>(b(),ye(hr(n.value),{class:ue(["m-text",i.value]),style:Je(r.value),href:o.value?e.href:void 0,target:o.value?e.target:void 0,rel:c.value},{default:g(()=>[pe(u.$slots,"default",{},void 0,!0)]),_:3},8,["class","style","href","target","rel"]))}}),hg=ie(gg,[["__scopeId","data-v-8f90176f"]]),ft=xe(hg,ke("Text")),Qo=dd({maxVisible:5,maxQueue:20,dedupeWindow:500,getKey:e=>`${e.type}\0${e.title??""}\0${e.message}`}),xd=dn(Qo.visibleItems),bg=dn(Qo.queuedItems);function nl(e){const t=typeof e=="string"?{message:e}:e;return Qo.push({type:t.type??"info",title:t.title,message:t.message,duration:t.duration??3e3,closable:t.closable??!1,priority:t.priority??"normal"})}function ol(e){Qo.remove(e)}function Bd(){Qo.clear()}function yg(){return()=>{}}const Mg={class:"m-toast",role:"region","aria-label":"通知"},_g=["role"],wg={class:"m-toast__content"},kg={key:0,class:"m-toast__title"},xg={class:"m-toast__message"},Bg=["onClick"],Cg=V({name:"MToast",__name:"Toast",setup(e){const t={success:"success",info:"info",warning:"warning",error:"error"};let n=null;return pn(()=>{n=yg()}),bt(()=>{n?.()}),(o,s)=>(b(),ye(cn,{to:"body"},[y("div",Mg,[m(Kr,{name:"m-toast-item",tag:"div",class:"m-toast__list"},{default:g(()=>[(b(!0),M(le,null,Le(d(xd),a=>(b(),M("div",{key:a.id,class:ue(["m-toast__item",`m-toast__item--${a.type}`]),role:a.type==="error"?"alert":"status"},[m(De,{name:t[a.type],class:"m-toast__icon"},null,8,["name"]),y("div",wg,[a.title?(b(),M("p",kg,H(a.title),1)):te("",!0),y("p",xg,H(a.message),1)]),a.closable?(b(),M("button",{key:0,type:"button",class:"m-toast__close","aria-label":"关闭通知",onClick:l=>d(ol)(a.id)},[m(De,{name:"close"})],8,Bg)):te("",!0)],10,_g))),128))]),_:1})])]))}}),Tg=ie(Cg,[["__scopeId","data-v-fc6f305f"]]);function Us(e){return(t,n={})=>nl({...n,message:t,type:e})}const Cd=Us("success"),Td=Us("info"),$d=Us("warning"),Vd=Us("error"),Jt={show:nl,success:Cd,info:Td,warning:$d,error:Vd,close:ol,clear:Bd};function $g(){return{toasts:xd,queuedToasts:bg,show:nl,success:Cd,info:Td,warning:$d,error:Vd,close:ol,clear:Bd}}const Sd=xe(Tg,ke("Toast")),Vg={class:"m-tooltip"},Sg=["aria-describedby"],Ig=["id"],zg=V({name:"MTooltip",__name:"Tooltip",props:{modelValue:{type:Boolean,default:void 0},content:{default:void 0},trigger:{default:"hover"},placement:{default:"top"},offset:{default:8},delay:{default:120},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},maxWidth:{default:240}},emits:["update:modelValue","open","close"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=O(null),l=O(null),i=O(!1),r=mt("m-tooltip"),c=T(()=>o.trigger??"hover"),u=T(()=>o.modelValue??i.value),p=T(()=>o.hideMode==="display"||u.value);let f=null;const v=T(()=>({maxWidth:typeof o.maxWidth=="number"?`${o.maxWidth}px`:o.maxWidth})),{style:x,actualPlacement:$}=Ko({trigger:a,panel:l,open:()=>u.value,placement:()=>o.placement,offset:o.offset,onReferenceHidden:()=>L()}),{zIndex:S}=qn({open:()=>u.value,panel:l,ignore:()=>[a.value],closeOnEscape:!0,closeOnOutside:()=>c.value==="click",restoreFocus:!1,onDismiss:()=>L()});function E(){f!==null&&(clearTimeout(f),f=null)}function z(w){w&&o.disabled||w!==u.value&&(o.modelValue===void 0&&(i.value=w),s("update:modelValue",w))}function A(){o.disabled||(E(),c.value==="hover"&&o.delay>0?f=setTimeout(()=>{f=null,z(!0)},o.delay):z(!0))}function L(){E(),z(!1)}function W(){z(!u.value)}function ne(){c.value==="hover"&&A()}function q(){c.value==="hover"&&L()}function K(){c.value==="hover"&&A()}function J(w){if(c.value!=="hover")return;const B=w.relatedTarget;B instanceof Node&&a.value?.contains(B)||L()}function I(){c.value==="click"&&W()}return ze(u,w=>{E(),s(w?"open":"close")},{flush:"post"}),ze(()=>o.modelValue,w=>{E(),w!==void 0&&(i.value=w)},{immediate:!0}),ze(()=>o.disabled,w=>{w&&L()}),ze(c,()=>L()),bt(E),t({show:A,hide:L,toggle:W}),(w,B)=>(b(),M("span",Vg,[y("span",{ref_key:"triggerRef",ref:a,class:"m-tooltip__trigger","aria-describedby":u.value?d(r):void 0,onMouseenter:ne,onMouseleave:q,onFocusin:K,onFocusout:J,onClick:I},[pe(w.$slots,"default",{},void 0)],40,Sg),(b(),ye(cn,{to:"body"},[m(Wn,{name:"m-tooltip"},{default:g(()=>[p.value?Vn((b(),M("div",{key:0,id:d(r),ref_key:"panelRef",ref:l,class:ue(["m-tooltip__panel",`m-tooltip__panel--${d($)}`]),style:Je({...d(x),...v.value,zIndex:d(S)}),role:"tooltip"},[pe(w.$slots,"content",{},()=>[k(H(e.content),1)],!0)],14,Ig)),[[Sn,e.hideMode==="display"?u.value:!0]]):te("",!0)]),_:3})]))]))}}),Eg=ie(zg,[["__scopeId","data-v-8cfc18d9"]]),$t=xe(Eg,ke("Tooltip")),Ag=["id"],Rg=V({name:"MTooltipGroup",__name:"TooltipGroup",props:{selector:{default:"[data-tooltip]"},placement:{default:"top"},offset:{default:8},delay:{default:120},hideMode:{default:"unmount"},disabled:{type:Boolean,default:!1},maxWidth:{default:260}},emits:["open","close"],setup(e,{expose:t,emit:n}){const o=e,s=n,a=O(null),l=O(null),i=O(null),r=O(null),c=O(!1),u=mt("m-tooltip-group"),p=T(()=>o.hideMode==="display"||c.value),f=T(()=>({maxWidth:typeof o.maxWidth=="number"?`${o.maxWidth}px`:o.maxWidth}));let v=null,x=null;const{style:$,actualPlacement:S,update:E}=Ko({trigger:l,panel:i,open:()=>c.value,placement:()=>o.placement,offset:o.offset,onReferenceHidden:()=>w()}),{zIndex:z}=qn({open:()=>c.value,panel:i,closeOnEscape:!0,closeOnOutside:!1,restoreFocus:!1,onDismiss:()=>w()});function A(){v!==null&&(clearTimeout(v),v=null)}function L(){x!==null&&(clearTimeout(x),x=null)}function W(ve){if(!(ve instanceof Element)||!a.value)return null;try{const Be=ve.closest(o.selector);return!Be||!a.value.contains(Be)?null:Be}catch{return null}}function ne(){r.value?.removeAttribute("aria-describedby")}function q(ve){ve.setAttribute("aria-describedby",u)}function K(ve){r.value!==ve&&(ne(),r.value=ve,l.value=ve,c.value&&(q(ve),lt(E)))}function J(ve){o.disabled||!ve.isConnected||r.value!==ve||(c.value=!0,q(ve),s("open",ve))}function I(ve,Be=!1){if(!o.disabled&&(A(),L(),K(ve),!c.value)){if(Be||o.delay<=0){J(ve);return}v=setTimeout(()=>{v=null,J(ve)},o.delay)}}function w(){A(),L(),ne(),c.value&&(c.value=!1,s("close",r.value))}function B(){A(),L(),x=setTimeout(()=>{x=null,w()},80)}function R(ve){const Be=W(ve.target);Be&&I(Be)}function Q(ve){const Be=W(ve.target);if(!Be||Be!==r.value)return;const He=ve.relatedTarget;He instanceof Node&&(Be.contains(He)||i.value?.contains(He)||W(He)!==null)||B()}function he(ve){const Be=W(ve.target);Be&&I(Be,!0)}function be(ve){const Be=W(ve.target);if(!Be||Be!==r.value)return;const He=ve.relatedTarget;He instanceof Node&&(Be.contains(He)||i.value?.contains(He))||B()}function fe(){L()}function Me(){B()}return ze(()=>o.disabled,ve=>{ve&&w()}),ze(()=>o.selector,()=>w()),bt(()=>{A(),L(),ne()}),t({hide:w}),(ve,Be)=>(b(),M("span",{ref_key:"wrapperRef",ref:a,class:"m-tooltip-group",onMouseover:R,onMouseout:Q,onFocusin:he,onFocusout:be},[pe(ve.$slots,"default",{},void 0),(b(),ye(cn,{to:"body"},[m(Wn,{name:"m-tooltip-group"},{default:g(()=>[p.value?Vn((b(),M("div",{key:0,id:d(u),ref_key:"panelRef",ref:i,class:ue(["m-tooltip-group__panel",`m-tooltip-group__panel--${d(S)}`]),style:Je({...d($),...f.value,zIndex:d(z)}),role:"tooltip",onMouseenter:fe,onMouseleave:Me},[pe(ve.$slots,"content",{target:r.value},()=>[k(H(r.value?.dataset.tooltip),1)],!0)],46,Ag)),[[Sn,e.hideMode==="display"?c.value:!0]]):te("",!0)]),_:3})]))],544))}}),Dg=ie(Rg,[["__scopeId","data-v-ceef8ccd"]]),sl=xe(Dg,ke("TooltipGroup")),Pg=[St,P,is,Ne,jn,Gn,Ft,el,nn,No,jt,Hn,an,fo,Ye,tt,Ht,Oe,ft,on,Tt,Sd,_d,Jo,po,qo,$t,sl,ao,mo,Fo,sn],Og="(prefers-color-scheme: dark)",ni="m-theme-transition",Lg=220,Cn=O("system"),Gs=O(!1),oi=O(!1),Uo=T(()=>Cn.value==="system"?Gs.value?"dark":"light":Cn.value);let On=null,ss=null,si=!1;function al(e){return e==="light"||e==="dark"||e==="system"}function Fg(){if(!wt)return null;try{const e=window.localStorage.getItem(Za);return al(e)?e:null}catch{return null}}function Ng(e){if(wt)try{window.localStorage.setItem(Za,e)}catch{}}function Jg(){return!wt||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ai(e,t){if(!wt)return;const n=document.documentElement;t&&!Jg()&&(n.classList.add(ni),ss!==null&&window.clearTimeout(ss),ss=window.setTimeout(()=>{n.classList.remove(ni),ss=null},Lg)),n.dataset.theme=e,n.style.colorScheme=e}function li(e){Gs.value=e.matches}function Ug(e){if(e.key===Za){if(e.newValue===null){Cn.value="system";return}al(e.newValue)&&(Cn.value=e.newValue)}}function Yo(){if(oi.value||!wt)return;oi.value=!0;const e=Fg();Cn.value=e??"system",typeof window.matchMedia=="function"&&(On=window.matchMedia(Og),Gs.value=On.matches,typeof On.addEventListener=="function"?On.addEventListener("change",li):On.addListener(li)),si||(window.addEventListener("storage",Ug),si=!0),ai(Uo.value,!1),ze(Uo,(t,n)=>{n!==void 0&&ai(t,!0)},{flush:"post"})}function Id(e){if(!al(e))throw new TypeError(`Invalid theme mode: ${String(e)}`);Yo(),e==="system"&&On!==null&&(Gs.value=On.matches),Cn.value=e,Ng(e)}function Gg(){return Yo(),Cn.value}function Hg(){Yo();const e=Uo.value==="dark"?"light":"dark";return Id(e),e}function jg(){return Yo(),{theme:dn(Cn),resolvedTheme:Uo,isDark:T(()=>Uo.value==="dark"),setTheme:Id,getTheme:Gg,toggleTheme:Hg}}const Wg={version:Lm,install(e){for(const t of Pg)e.use(t);Yo()}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Zn=typeof document<"u";function zd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&zd(e.default)}const Te=Object.assign;function ma(e,t){const n={};for(const o in t){const s=t[o];n[o]=It(s)?s.map(e):e(s)}return n}const Io=()=>{},It=Array.isArray;function ii(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}const Ed=/#/g,Kg=/&/g,Qg=/\//g,Yg=/=/g,Xg=/\?/g,Ad=/\+/g,Zg=/%5B/g,eh=/%5D/g,Rd=/%5E/g,th=/%60/g,Dd=/%7B/g,nh=/%7C/g,Pd=/%7D/g,oh=/%20/g;function ll(e){return e==null?"":encodeURI(""+e).replace(nh,"|").replace(Zg,"[").replace(eh,"]")}function sh(e){return ll(e).replace(Dd,"{").replace(Pd,"}").replace(Rd,"^")}function Ia(e){return ll(e).replace(Ad,"%2B").replace(oh,"+").replace(Ed,"%23").replace(Kg,"%26").replace(th,"`").replace(Dd,"{").replace(Pd,"}").replace(Rd,"^")}function ah(e){return Ia(e).replace(Yg,"%3D")}function lh(e){return ll(e).replace(Ed,"%23").replace(Xg,"%3F")}function ih(e){return lh(e).replace(Qg,"%2F")}function Go(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const rh=/\/$/,dh=e=>e.replace(rh,"");function pa(e,t,n="/"){let o,s={},a="",l="";const i=t.indexOf("#");let r=t.indexOf("?");return r=i>=0&&r>i?-1:r,r>=0&&(o=t.slice(0,r),a=t.slice(r,i>0?i:t.length),s=e(a.slice(1))),i>=0&&(o=o||t.slice(0,i),l=t.slice(i,t.length)),o=ph(o??t,n),{fullPath:o+a+l,path:o,query:s,hash:Go(l)}}function uh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ch(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&lo(t.matched[o],n.matched[s])&&Od(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function lo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Od(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!mh(e[n],t[n]))return!1;return!0}function mh(e,t){return It(e)?di(e,t):It(t)?di(t,e):e?.valueOf()===t?.valueOf()}function di(e,t){return It(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function ph(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let a=n.length-1,l,i;for(l=0;l<o.length;l++)if(i=o[l],i!==".")if(i==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+o.slice(l).join("/")}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let za=(function(e){return e.pop="pop",e.push="push",e})({}),fa=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function fh(e){if(!e)if(Zn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),dh(e)}const vh=/^[^#]+#/;function gh(e,t){return e.replace(vh,"#")+t}function hh(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Hs=()=>({left:window.scrollX,top:window.scrollY});function bh(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=hh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ui(e,t){return(history.state?history.state.position-t:-1)+e}const Ea=new Map;function yh(e,t){Ea.set(e,t)}function Mh(e){const t=Ea.get(e);return Ea.delete(e),t}function _h(e){return typeof e=="string"||e&&typeof e=="object"}function Ld(e){return typeof e=="string"||typeof e=="symbol"}let Fe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Fd=Symbol("");Fe.MATCHER_NOT_FOUND+"",Fe.NAVIGATION_GUARD_REDIRECT+"",Fe.NAVIGATION_ABORTED+"",Fe.NAVIGATION_CANCELLED+"",Fe.NAVIGATION_DUPLICATED+"";function io(e,t){return Te(new Error,{type:e,[Fd]:!0},t)}function Yt(e,t){return e instanceof Error&&Fd in e&&(t==null||!!(e.type&t))}const wh=["params","query","hash"];function kh(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of wh)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function xh(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace(Ad," "),a=s.indexOf("="),l=Go(a<0?s:s.slice(0,a)),i=a<0?null:Go(s.slice(a+1));if(l in t){let r=t[l];It(r)||(r=t[l]=[r]),r.push(i)}else t[l]=i}return t}function ci(e){let t="";for(let n in e){const o=e[n];if(n=ah(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(It(o)?o.map(s=>s&&Ia(s)):[o&&Ia(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Bh(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=It(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const Ch=Symbol(""),mi=Symbol(""),js=Symbol(""),il=Symbol(""),Aa=Symbol("");function Mo(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function _n(e,t,n,o,s,a=l=>l()){const l=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((i,r)=>{const c=f=>{f===!1?r(io(Fe.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?r(f):_h(f)?r(io(Fe.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(l&&o.enterCallbacks[s]===l&&typeof f=="function"&&l.push(f),i())},u=a(()=>e.call(o&&o.instances[s],t,n,c));let p=Promise.resolve(u);e.length<3&&(p=p.then(c)),p.catch(f=>r(f))})}function va(e,t,n,o,s=a=>a()){const a=[];for(const l of e)for(const i in l.components){let r=l.components[i];if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(zd(r)){const c=(r.__vccOpts||r)[t];c&&a.push(_n(c,n,o,l,i,s))}else{let c=r();a.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${l.path}"`);const p=qg(u)?u.default:u;l.mods[i]=u,l.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&_n(f,n,o,l,i,s)()}))}}return a}function Th(e,t){const n=[],o=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let l=0;l<a;l++){const i=t.matched[l];i&&(e.matched.find(c=>lo(c,i))?o.push(i):n.push(i));const r=e.matched[l];r&&(t.matched.find(c=>lo(c,r))||s.push(r))}return[n,o,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $h=()=>location.protocol+"//"+location.host;function Nd(e,t){const{pathname:n,search:o,hash:s}=t,a=e.indexOf("#");if(a>-1){let l=s.includes(e.slice(a))?e.slice(a).length:1,i=s.slice(l);return i[0]!=="/"&&(i="/"+i),ri(i,"")}return ri(n,e)+o+s}function Vh(e,t,n,o){let s=[],a=[],l=null;const i=({state:f})=>{const v=Nd(e,location),x=n.value,$=t.value;let S=0;if(f){if(n.value=v,t.value=f,l&&l===x){l=null;return}S=$?f.position-$.position:0}else o(v);s.forEach(E=>{E(n.value,x,{delta:S,type:za.pop,direction:S?S>0?fa.forward:fa.back:fa.unknown})})};function r(){l=n.value}function c(f){s.push(f);const v=()=>{const x=s.indexOf(f);x>-1&&s.splice(x,1)};return a.push(v),v}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Te({},f.state,{scroll:Hs()}),"")}}function p(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:r,listen:c,destroy:p}}function pi(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?Hs():null}}function Sh(e){const{history:t,location:n}=window,o={value:Nd(e,n)},s={value:t.state};s.value||a(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,c,u){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+r:$h()+e+r;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(v){console.error(v),n[u?"replace":"assign"](f)}}function l(r,c){a(r,Te({},t.state,pi(s.value.back,r,s.value.forward,!0),c,{position:s.value.position}),!0),o.value=r}function i(r,c){const u=Te({},s.value,t.state,{forward:r,scroll:Hs()});a(u.current,u,!0),a(r,Te({},pi(o.value,r,null),{position:u.position+1},c),!1),o.value=r}return{location:o,state:s,push:i,replace:l}}function Ih(e){e=fh(e);const t=Sh(e),n=Vh(e,t.state,t.location,t.replace);function o(a,l=!0){l||n.pauseListeners(),history.go(a)}const s=Te({location:"",base:e,go:o,createHref:gh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Nn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var qe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(qe||{});const zh={type:Nn.Static,value:""},Eh=/[a-zA-Z0-9_]/;function Ah(e){if(!e)return[[]];if(e==="/")return[[zh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=qe.Static,o=n;const s=[];let a;function l(){a&&s.push(a),a=[]}let i=0,r,c="",u="";function p(){c&&(n===qe.Static?a.push({type:Nn.Static,value:c}):n===qe.Param||n===qe.ParamRegExp||n===qe.ParamRegExpEnd?(a.length>1&&(r==="*"||r==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Nn.Param,value:c,regexp:u,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=r}for(;i<e.length;){if(r=e[i++],r==="\\"&&n!==qe.ParamRegExp){o=n,n=qe.EscapeNext;continue}switch(n){case qe.Static:r==="/"?(c&&p(),l()):r===":"?(p(),n=qe.Param):f();break;case qe.EscapeNext:f(),n=o;break;case qe.Param:r==="("?n=qe.ParamRegExp:Eh.test(r)?f():(p(),n=qe.Static,r!=="*"&&r!=="?"&&r!=="+"&&i--);break;case qe.ParamRegExp:r===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+r:n=qe.ParamRegExpEnd:u+=r;break;case qe.ParamRegExpEnd:p(),n=qe.Static,r!=="*"&&r!=="?"&&r!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===qe.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),p(),l(),s}const fi="[^/]+?",Rh={sensitive:!1,strict:!1,start:!0,end:!0};var dt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(dt||{});const Dh=/[.+*?^${}()[\]/\\]/g;function Ph(e,t){const n=Te({},Rh,t),o=[];let s=n.start?"^":"";const a=[];for(const c of e){const u=c.length?[]:[dt.Root];n.strict&&!c.length&&(s+="/");for(let p=0;p<c.length;p++){const f=c[p];let v=dt.Segment+(n.sensitive?dt.BonusCaseSensitive:0);if(f.type===Nn.Static)p||(s+="/"),s+=f.value.replace(Dh,"\\$&"),v+=dt.Static;else if(f.type===Nn.Param){const{value:x,repeatable:$,optional:S,regexp:E}=f;a.push({name:x,repeatable:$,optional:S});const z=E||fi;if(z!==fi){v+=dt.BonusCustomRegExp;try{`${z}`}catch(L){throw new Error(`Invalid custom RegExp for param "${x}" (${z}): `+L.message)}}let A=$?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;p||(A=S&&c.length<2?`(?:/${A})`:"/"+A),S&&(A+="?"),s+=A,v+=dt.Dynamic,S&&(v+=dt.BonusOptional),$&&(v+=dt.BonusRepeatable),z===".*"&&(v+=dt.BonusWildcard)}u.push(v)}o.push(u)}if(n.strict&&n.end){const c=o.length-1;o[c][o[c].length-1]+=dt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const l=new RegExp(s,n.sensitive?"":"i");function i(c){const u=c.match(l),p={};if(!u)return null;for(let f=1;f<u.length;f++){const v=u[f]||"",x=a[f-1];p[x.name]=v&&x.repeatable?v.split("/"):v}return p}function r(c){let u="",p=!1;for(const f of e){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const v of f)if(v.type===Nn.Static)u+=v.value;else if(v.type===Nn.Param){const{value:x,repeatable:$,optional:S}=v,E=x in c?c[x]:"";if(It(E)&&!$)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const z=It(E)?E.join("/"):E;if(!z)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);u+=z}}return u||"/"}return{re:l,score:o,keys:a,parse:i,stringify:r}}function Oh(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===dt.Static+dt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===dt.Static+dt.Segment?1:-1:0}function Jd(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const a=Oh(o[n],s[n]);if(a)return a;n++}if(Math.abs(s.length-o.length)===1){if(vi(o))return 1;if(vi(s))return-1}return s.length-o.length}function vi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lh={strict:!1,end:!0,sensitive:!1};function Fh(e,t,n){const o=Ph(Ah(e.path),n),s=Te(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Nh(e,t){const n=[],o=new Map;t=ii(Lh,t);function s(p){return o.get(p)}function a(p,f,v){const x=!v,$=hi(p);$.aliasOf=v&&v.record;const S=ii(t,p),E=[$];if("alias"in p){const L=typeof p.alias=="string"?[p.alias]:p.alias;for(const W of L)E.push(hi(Te({},$,{components:v?v.record.components:$.components,path:W,aliasOf:v?v.record:$})))}let z,A;for(const L of E){const{path:W}=L;if(f&&W[0]!=="/"){const ne=f.record.path,q=ne[ne.length-1]==="/"?"":"/";L.path=f.record.path+(W&&q+W)}if(z=Fh(L,f,S),v?v.alias.push(z):(A=A||z,A!==z&&A.alias.push(z),x&&p.name&&!bi(z)&&l(p.name)),Ud(z)&&r(z),$.children){const ne=$.children;for(let q=0;q<ne.length;q++)a(ne[q],z,v&&v.children[q])}v=v||z}return A?()=>{l(A)}:Io}function l(p){if(Ld(p)){const f=o.get(p);f&&(o.delete(p),n.splice(n.indexOf(f),1),f.children.forEach(l),f.alias.forEach(l))}else{const f=n.indexOf(p);f>-1&&(n.splice(f,1),p.record.name&&o.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function i(){return n}function r(p){const f=Gh(p,n);n.splice(f,0,p),p.record.name&&!bi(p)&&o.set(p.record.name,p)}function c(p,f){let v,x={},$,S;if("name"in p&&p.name){if(v=o.get(p.name),!v)throw io(Fe.MATCHER_NOT_FOUND,{location:p});S=v.record.name,x=Te(gi(f.params,v.keys.filter(A=>!A.optional).concat(v.parent?v.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),p.params&&gi(p.params,v.keys.map(A=>A.name))),$=v.stringify(x)}else if(p.path!=null)$=p.path,v=n.find(A=>A.re.test($)),v&&(x=v.parse($),S=v.record.name);else{if(v=f.name?o.get(f.name):n.find(A=>A.re.test(f.path)),!v)throw io(Fe.MATCHER_NOT_FOUND,{location:p,currentLocation:f});S=v.record.name,x=Te({},f.params,p.params),$=v.stringify(x)}const E=[];let z=v;for(;z;)E.unshift(z.record),z=z.parent;return{name:S,path:$,params:x,matched:E,meta:Uh(E)}}e.forEach(p=>a(p));function u(){n.length=0,o.clear()}return{addRoute:a,resolve:c,removeRoute:l,clearRoutes:u,getRoutes:i,getRecordMatcher:s}}function gi(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function hi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Jh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Jh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function bi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Uh(e){return e.reduce((t,n)=>Te(t,n.meta),{})}function Gh(e,t){let n=0,o=t.length;for(;n!==o;){const a=n+o>>1;Jd(e,t[a])<0?o=a:n=a+1}const s=Hh(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function Hh(e){let t=e;for(;t=t.parent;)if(Ud(t)&&Jd(e,t)===0)return t}function Ud({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function yi(e){const t=nt(js),n=nt(il),o=T(()=>{const r=d(e.to);return t.resolve(r)}),s=T(()=>{const{matched:r}=o.value,{length:c}=r,u=r[c-1],p=n.matched;if(!u||!p.length)return-1;const f=p.findIndex(lo.bind(null,u));if(f>-1)return f;const v=Mi(r[c-2]);return c>1&&Mi(u)===v&&p[p.length-1].path!==v?p.findIndex(lo.bind(null,r[c-2])):f}),a=T(()=>s.value>-1&&Kh(n.params,o.value.params)),l=T(()=>s.value>-1&&s.value===n.matched.length-1&&Od(n.params,o.value.params));function i(r={}){if(qh(r)){const c=t[d(e.replace)?"replace":"push"](d(e.to)).catch(Io);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:o,href:T(()=>o.value.href),isActive:a,isExactActive:l,navigate:i}}function jh(e){return e.length===1?e[0]:e}const Wh=V({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yi,setup(e,{slots:t}){const n=$n(yi(e)),{options:o}=nt(js),s=T(()=>({[_i(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[_i(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&jh(t.default(n));return e.custom?a:oo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),to=Wh;function qh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Kh(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!It(s)||s.length!==o.length||o.some((a,l)=>a.valueOf()!==s[l].valueOf()))return!1}return!0}function Mi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _i=(e,t,n)=>e??t??n,Qh=V({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=nt(Aa),s=T(()=>e.route||o.value),a=nt(mi,0),l=T(()=>{let c=d(a);const{matched:u}=s.value;let p;for(;(p=u[c])&&!p.components;)c++;return c}),i=T(()=>s.value.matched[l.value]);ln(mi,T(()=>l.value+1)),ln(Ch,i),ln(Aa,s);const r=O();return ze(()=>[r.value,i.value,e.name],([c,u,p],[f,v,x])=>{u&&(u.instances[p]=c,v&&v!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),c&&u&&(!v||!lo(u,v)||!f)&&(u.enterCallbacks[p]||[]).forEach($=>$(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,p=i.value,f=p&&p.components[u];if(!f)return wi(n.default,{Component:f,route:c});const v=p.props[u],x=v?v===!0?c.params:typeof v=="function"?v(c):v:null,S=oo(f,Te({},x,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(p.instances[u]=null)},ref:r}));return wi(n.default,{Component:S,route:c})||S}}});function wi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Gd=Qh;function Yh(e){const t=Nh(e.routes,e),n=e.parseQuery||xh,o=e.stringifyQuery||ci,s=e.history,a=Mo(),l=Mo(),i=Mo(),r=xu(vn);let c=vn;Zn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ma.bind(null,N=>""+N),p=ma.bind(null,ih),f=ma.bind(null,Go);function v(N,oe){let Z,ce;return Ld(N)?(Z=t.getRecordMatcher(N),ce=oe):ce=N,t.addRoute(ce,Z)}function x(N){const oe=t.getRecordMatcher(N);oe&&t.removeRoute(oe)}function $(){return t.getRoutes().map(N=>N.record)}function S(N){return!!t.getRecordMatcher(N)}function E(N,oe){if(oe=Te({},oe||r.value),typeof N=="string"){const D=pa(n,N,oe.path),F=t.resolve({path:D.path},oe),U=s.createHref(D.fullPath);return Te(D,F,{params:f(F.params),hash:Go(D.hash),redirectedFrom:void 0,href:U})}let Z;if(N.path!=null)Z=Te({},N,{path:pa(n,N.path,oe.path).path});else{const D=Te({},N.params);for(const F in D)D[F]==null&&delete D[F];Z=Te({},N,{params:p(D)}),oe.params=p(oe.params)}const ce=t.resolve(Z,oe),h=N.hash||"";ce.params=u(f(ce.params));const _=uh(o,Te({},N,{hash:sh(h),path:ce.path})),C=s.createHref(_);return Te({fullPath:_,hash:h,query:o===ci?Bh(N.query):N.query||{}},ce,{redirectedFrom:void 0,href:C})}function z(N){return typeof N=="string"?pa(n,N,r.value.path):Te({},N)}function A(N,oe){if(c!==N)return io(Fe.NAVIGATION_CANCELLED,{from:oe,to:N})}function L(N){return q(N)}function W(N){return L(Te(z(N),{replace:!0}))}function ne(N,oe){const Z=N.matched[N.matched.length-1];if(Z&&Z.redirect){const{redirect:ce}=Z;let h=typeof ce=="function"?ce(N,oe):ce;return typeof h=="string"&&(h=h.includes("?")||h.includes("#")?h=z(h):{path:h},h.params={}),Te({query:N.query,hash:N.hash,params:h.path!=null?{}:N.params},h)}}function q(N,oe){const Z=c=E(N),ce=r.value,h=N.state,_=N.force,C=N.replace===!0,D=ne(Z,ce);if(D)return q(Te(z(D),{state:typeof D=="object"?Te({},h,D.state):h,force:_,replace:C}),oe||Z);const F=Z;F.redirectedFrom=oe;let U;return!_&&ch(o,ce,Z)&&(U=io(Fe.NAVIGATION_DUPLICATED,{to:F,from:ce}),He(ce,ce,!0,!1)),(U?Promise.resolve(U):I(F,ce)).catch(j=>Yt(j)?Yt(j,Fe.NAVIGATION_GUARD_REDIRECT)?j:Be(j):Me(j,F,ce)).then(j=>{if(j){if(Yt(j,Fe.NAVIGATION_GUARD_REDIRECT))return q(Te({replace:C},z(j.to),{state:typeof j.to=="object"?Te({},h,j.to.state):h,force:_}),oe||F)}else j=B(F,ce,!0,C,h);return w(F,ce,j),j})}function K(N,oe){const Z=A(N,oe);return Z?Promise.reject(Z):Promise.resolve()}function J(N){const oe=We.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(N):N()}function I(N,oe){let Z;const[ce,h,_]=Th(N,oe);Z=va(ce.reverse(),"beforeRouteLeave",N,oe);for(const D of ce)D.leaveGuards.forEach(F=>{Z.push(_n(F,N,oe))});const C=K.bind(null,N,oe);return Z.push(C),ot(Z).then(()=>{Z=[];for(const D of a.list())Z.push(_n(D,N,oe));return Z.push(C),ot(Z)}).then(()=>{Z=va(h,"beforeRouteUpdate",N,oe);for(const D of h)D.updateGuards.forEach(F=>{Z.push(_n(F,N,oe))});return Z.push(C),ot(Z)}).then(()=>{Z=[];for(const D of _)if(D.beforeEnter)if(It(D.beforeEnter))for(const F of D.beforeEnter)Z.push(_n(F,N,oe));else Z.push(_n(D.beforeEnter,N,oe));return Z.push(C),ot(Z)}).then(()=>(N.matched.forEach(D=>D.enterCallbacks={}),Z=va(_,"beforeRouteEnter",N,oe,J),Z.push(C),ot(Z))).then(()=>{Z=[];for(const D of l.list())Z.push(_n(D,N,oe));return Z.push(C),ot(Z)}).catch(D=>Yt(D,Fe.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function w(N,oe,Z){i.list().forEach(ce=>J(()=>ce(N,oe,Z)))}function B(N,oe,Z,ce,h){const _=A(N,oe);if(_)return _;const C=oe===vn,D=Zn?history.state:{};Z&&(ce||C?s.replace(N.fullPath,Te({scroll:C&&D&&D.scroll},h)):s.push(N.fullPath,h)),r.value=N,He(N,oe,Z,C),Be()}let R;function Q(){R||(R=s.listen((N,oe,Z)=>{if(!yt.listening)return;const ce=E(N),h=ne(ce,yt.currentRoute.value);if(h){q(Te(h,{replace:!0,force:!0}),ce).catch(Io);return}c=ce;const _=r.value;Zn&&yh(ui(_.fullPath,Z.delta),Hs()),I(ce,_).catch(C=>Yt(C,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_CANCELLED)?C:Yt(C,Fe.NAVIGATION_GUARD_REDIRECT)?(q(Te(z(C.to),{force:!0}),ce).then(D=>{Yt(D,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===za.pop&&s.go(-1,!1)}).catch(Io),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),Me(C,ce,_))).then(C=>{C=C||B(ce,_,!1),C&&(Z.delta&&!Yt(C,Fe.NAVIGATION_CANCELLED)?s.go(-Z.delta,!1):Z.type===za.pop&&Yt(C,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),w(ce,_,C)}).catch(Io)}))}let he=Mo(),be=Mo(),fe;function Me(N,oe,Z){Be(N);const ce=be.list();return ce.length?ce.forEach(h=>h(N,oe,Z)):console.error(N),Promise.reject(N)}function ve(){return fe&&r.value!==vn?Promise.resolve():new Promise((N,oe)=>{he.add([N,oe])})}function Be(N){return fe||(fe=!N,Q(),he.list().forEach(([oe,Z])=>N?Z(N):oe()),he.reset()),N}function He(N,oe,Z,ce){const{scrollBehavior:h}=e;if(!Zn||!h)return Promise.resolve();const _=!Z&&Mh(ui(N.fullPath,0))||(ce||!Z)&&history.state&&history.state.scroll||null;return lt().then(()=>h(N,oe,_)).then(C=>C&&bh(C)).catch(C=>Me(C,N,oe))}const se=N=>s.go(N);let Pe;const We=new Set,yt={currentRoute:r,listening:!0,addRoute:v,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:$,resolve:E,options:e,push:L,replace:W,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:l.add,afterEach:i.add,onError:be.add,isReady:ve,install(N){N.component("RouterLink",to),N.component("RouterView",Gd),N.config.globalProperties.$router=yt,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>d(r)}),Zn&&!Pe&&r.value===vn&&(Pe=!0,L(s.location).catch(ce=>{}));const oe={};for(const ce in vn)Object.defineProperty(oe,ce,{get:()=>r.value[ce],enumerable:!0});N.provide(js,yt),N.provide(il,Yi(oe)),N.provide(Aa,r);const Z=N.unmount;We.add(N),N.unmount=function(){We.delete(N),We.size<1&&(c=vn,R&&R(),R=null,r.value=vn,Pe=!1,fe=!1),Z()}}};function ot(N){return N.reduce((oe,Z)=>oe.then(()=>J(Z)),Promise.resolve())}return yt}function tT(){return nt(js)}function Ws(e){return nt(il)}const ro={name:"Anemia UI",shortName:"Anemia",tagline:"安静、克制、为长期而生的 Vue 3 组件库",description:"一套从设计 Token、主题系统到组件 API 全部自行设计的 Vue 3 组件库。优先保证一致性、可维护性与类型安全。",version:"0.5.0",github:"https://gitee.com/AnemiaMiRo/anemia-ui",npm:"anemia-ui"},qs=Pm("docs",()=>{const e=O(!1),t=O(""),n=O([]);function o(){e.value=!e.value}function s(){e.value=!0}function a(){e.value=!1}function l(i){n.value=[i,...n.value.filter(r=>r!==i)].slice(0,5)}return{sidebarOpen:e,searchQuery:t,recentPaths:n,toggleSidebar:o,openSidebar:s,closeSidebar:a,recordVisit:l}}),Xh={class:"theme-toggle",role:"group","aria-label":"主题模式"},Zh=["title","aria-label","aria-pressed","onClick"],eb=V({__name:"ThemeToggle",setup(e){const{theme:t,setTheme:n}=jg(),o=[{mode:"light",icon:"sun",label:"白天模式"},{mode:"dark",icon:"moon",label:"黑夜模式"},{mode:"system",icon:"monitor",label:"跟随系统"}];return(s,a)=>(b(),M("div",Xh,[(b(),M(le,null,Le(o,l=>y("button",{key:l.mode,type:"button",class:ue(["theme-toggle__button",{"is-active":d(t)===l.mode}]),title:l.label,"aria-label":l.label,"aria-pressed":d(t)===l.mode,onClick:i=>d(n)(l.mode)},[m(d(St),{name:l.icon,size:15},null,8,["name"])],10,Zh)),64))]))}}),tb=ie(eb,[["__scopeId","data-v-02b90950"]]),nb={class:"app-header"},ob={class:"app-header__inner"},sb=["aria-expanded"],ab={class:"brand__version"},lb={class:"primary-nav","aria-label":"主导航"},ib={class:"header-actions"},rb=["href"],db=V({__name:"AppHeader",setup(e){const t=Ws(),n=qs(),o=T(()=>t.path.startsWith("/components")),s=T(()=>t.path.startsWith("/design"));return(a,l)=>(b(),M("header",nb,[y("div",ob,[y("button",{type:"button",class:"app-header__menu","aria-label":"打开导航","aria-expanded":d(n).sidebarOpen,onClick:l[0]||(l[0]=i=>d(n).toggleSidebar())},[m(d(St),{name:"menu",size:20})],8,sb),m(d(to),{to:"/",class:"brand","aria-label":"Anemia UI 首页"},{default:g(()=>[l[1]||(l[1]=y("span",{class:"brand__mark","aria-hidden":"true"},"A",-1)),l[2]||(l[2]=y("span",{class:"brand__name"},[k("Anemia"),y("span",null,"UI")],-1)),y("span",ab,"v"+H(d(ro).version),1)]),_:1}),y("nav",lb,[m(d(to),{to:"/components",class:ue(["primary-nav__link",{"is-active":o.value}])},{default:g(()=>[...l[3]||(l[3]=[k(" 组件文档 ",-1)])]),_:1},8,["class"]),m(d(to),{to:"/design/colors",class:ue(["primary-nav__link",{"is-active":s.value}])},{default:g(()=>[...l[4]||(l[4]=[k(" 设计规范 ",-1)])]),_:1},8,["class"])]),y("div",ib,[y("a",{href:d(ro).github,class:"icon-link",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub 仓库",title:"GitHub"},[m(d(St),{name:"github",size:18})],8,rb),m(tb)])])]))}}),ub=ie(db,[["__scopeId","data-v-15ced153"]]),Ks=[{id:"basic",title:"基础控件",english:"Basic Controls",description:"直接接收输入或触发操作的基础交互元素。"},{id:"display",title:"展示元素",english:"Display",description:"以文本、状态、身份、分类与分隔表达信息，不承载主要输入。"},{id:"feedback",title:"反馈提示",english:"Feedback",description:"向用户传达系统状态、结果或需要关注的信息。"},{id:"navigation",title:"导航与切换",english:"Navigation",description:"在视图、面板或页面层级之间切换。"},{id:"container",title:"容器与布局",english:"Containers & Layout",description:"组织内容结构，承载其他组件。"},{id:"data",title:"数据展示",english:"Data Display",description:"以结构化方式呈现数据集合或记录。"},{id:"overlay",title:"浮层与交互",english:"Overlays",description:"需要浮层、遮罩、焦点限制或关闭语义的交互。"},{id:"form",title:"表单与复合",english:"Forms & Composite",description:"需要表单上下文、校验或跨组件状态协作的复合组件。"}],nT=Object.fromEntries(Ks.map(e=>[e.id,e])),cb={class:"demo-stack",style:{"max-width":"560px"}},mb={class:"demo-hint"},pb=V({__name:"Closable",setup(e){const t=O(!0),n=O(0);function o(){t.value=!1,n.value+=1}function s(){t.value=!0}return(a,l)=>(b(),M("div",cb,[t.value?(b(),ye(d(Tt),{key:0,type:"info",title:"可关闭提示",closable:"",onClose:o},{default:g(()=>[...l[0]||(l[0]=[k(" 关闭后组件会隐藏自身，并通过 close 事件通知父级。 ",-1)])]),_:1})):(b(),ye(d(P),{key:1,size:"small",type:"outline",onClick:s},{default:g(()=>[...l[1]||(l[1]=[k("重新显示",-1)])]),_:1})),y("p",mb,"已关闭 "+H(n.value)+" 次。",1)]))}}),fb=`<script setup lang="ts">
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
`,vb=`<script setup>
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
`,gb={class:"demo-stack",style:{"max-width":"560px"}},hb=V({__name:"Slots",setup(e){return(t,n)=>(b(),M("div",gb,[m(d(Tt),{type:"info"},{icon:g(()=>[m(d(St),{name:"info",size:18})]),title:g(()=>[...n[0]||(n[0]=[k("自定义图标与标题",-1)])]),default:g(()=>[n[1]||(n[1]=y("p",null,"默认插槽可以承载富文本内容，例如链接、列表或表单说明。",-1)),n[2]||(n[2]=y("ul",{class:"alert-list"},[y("li",null,"图标来自统一的 MIcon 接口。"),y("li",null,"标题与描述均可以通过插槽覆盖。")],-1))]),_:1}),m(d(Tt),{type:"warning",title:"使用默认图标"},{default:g(()=>[...n[3]||(n[3]=[k(" 不传 ",-1),y("code",null,"#icon",-1),k(" 时，组件会根据 type 自动选择图标。 ",-1)])]),_:1})]))}}),bb=ie(hb,[["__scopeId","data-v-0f6ffcf0"]]),yb=`<script setup lang="ts">
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
`,Mb=`<script setup>
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
`,_b={class:"demo-stack",style:{"max-width":"560px"}},wb=V({__name:"TitleDesc",setup(e){return(t,n)=>(b(),M("div",_b,[m(d(Tt),{type:"success",title:"发布完成",description:"v0.1.0 已构建完成，可以前往 npm 查看产物。"}),m(d(Tt),{type:"info",title:"无图标提示",description:"通过 showIcon 关闭图标，适合紧凑的说明区域。","show-icon":!1}),m(d(Tt),{type:"warning",title:"仅标题"})]))}}),kb=`<script setup lang="ts">
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
`,xb=`<script setup>
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
`,Bb={class:"demo-stack",style:{"max-width":"560px"}},Cb=V({__name:"Types",setup(e){return(t,n)=>(b(),M("div",Bb,[m(d(Tt),{type:"info",title:"信息提示"},{default:g(()=>[...n[0]||(n[0]=[k("这里是补充说明，用于解释当前上下文。",-1)])]),_:1}),m(d(Tt),{type:"success",title:"保存成功"},{default:g(()=>[...n[1]||(n[1]=[k("你的修改已经同步到设计系统。",-1)])]),_:1}),m(d(Tt),{type:"warning",title:"需要注意"},{default:g(()=>[...n[2]||(n[2]=[k("部分 Token 将在下个版本重命名。",-1)])]),_:1}),m(d(Tt),{type:"error",title:"构建失败"},{default:g(()=>[...n[3]||(n[3]=[k("请检查 TypeScript 类型错误后重试。",-1)])]),_:1})]))}}),Tb=`<script setup lang="ts">
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
`,$b=`<script setup>
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
`,Vb={name:"alert",category:"feedback",title:"Alert 提示框",summary:"用克制的色块与图标展示信息、成功、警告或错误提示。",description:"提示框用于传递与当前上下文相关的反馈。信息与成功使用 status 语义，警告与错误使用 alert 语义；颜色只是辅助，标题文本需要清楚说明发生了什么。",status:"stable",since:"0.1.0",keywords:["alert","提示","警告","错误","反馈"],sections:[{id:"types",title:"提示类型",description:"四种类型共享布局与排版，仅语义色与图标变化。",demo:Cb,code:Tb,codeJs:$b},{id:"title-description",title:"标题与描述",description:"title 与 description 提供常见组合；showIcon 可关闭图标以适应紧凑区域。",demo:wb,code:kb,codeJs:xb},{id:"closable",title:"可关闭提示",description:"closable 显示关闭按钮，点击后组件隐藏自身并触发 close 事件；父级可以用 v-if 重新显示。",demo:pb,code:fb,codeJs:vb},{id:"slots",title:"自定义内容",description:"icon、title 与默认插槽可以组合出富内容提示，同时保留统一的容器样式。",demo:bb,code:yb,codeJs:Mb}],api:[{id:"alert-api",title:"MAlert",props:[{name:"type",type:"'info' | 'success' | 'warning' | 'error'",defaultValue:"'info'",description:"提示语义与配色。"},{name:"title",type:"string",defaultValue:"—",description:"标题文本；#title 插槽优先。"},{name:"description",type:"string",defaultValue:"—",description:"描述文本；默认插槽优先。"},{name:"closable",type:"boolean",defaultValue:"false",description:"显示关闭按钮。"},{name:"showIcon",type:"boolean",defaultValue:"true",description:"是否显示语义图标。"},{name:"closeLabel",type:"string",defaultValue:"'关闭提示'",description:"关闭按钮的无障碍标签。"}],events:[{name:"close",type:"(event: MouseEvent) => void",description:"点击关闭按钮时触发。"}],slots:[{name:"default",type:"—",description:"正文内容，优先于 description。"},{name:"title",type:"—",description:"自定义标题，优先于 title。"},{name:"icon",type:"—",description:"自定义前置图标。"}]}],notes:['warning 与 error 使用 role="alert"，info 与 success 使用 role="status"。',"关闭状态保存在组件内部；需要重新显示时请销毁并重建组件（例如切换 key 或 v-if）。","错误提示应说明原因与下一步操作，避免只写「出错了」。","图标默认来自统一 MIcon 注册表，不要混用其他图标库。"]},Sb={class:"demo-stack"},Ib={class:"demo-row"},zb={class:"demo-hint"},Eb=V({__name:"Fallback",setup(e){const t=O(0);function n(){t.value+=1}return(o,s)=>(b(),M("div",Sb,[y("div",Ib,[m(d(Oe),{src:"/avatars/not-found.svg",name:"林安",size:"large",onError:n}),m(d(Oe),{src:"/avatars/not-found.svg",name:"Anemia UI",onError:n}),m(d(Oe),{src:"/avatars/not-found.svg",onError:n},{fallback:g(()=>[m(d(St),{name:"user",size:18})]),_:1})]),y("p",zb,"图片加载失败次数："+H(t.value)+"，失败后回退到文字或占位内容。",1)]))}}),Ab=`<script setup lang="ts">
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
`,Rb=`<script setup>
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
`,Db={class:"demo-row"},Pb=V({__name:"Image",setup(e){return(t,n)=>(b(),M("div",Db,[m(d(Oe),{src:"/avatars/avatar-1.webp",alt:"林安的头像",size:"large"}),m(d(Oe),{src:"/avatars/avatar-2.webp",alt:"Alex 的头像",size:"medium"}),m(d(Oe),{src:"/avatars/avatar-1.webp",alt:"林安的头像",shape:"rounded"})]))}}),Ob=`<script setup lang="ts">
import { MAvatar } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MAvatar src="/avatars/avatar-1.webp" alt="林安的头像" size="large" />
    <MAvatar src="/avatars/avatar-2.webp" alt="Alex 的头像" size="medium" />
    <MAvatar src="/avatars/avatar-1.webp" alt="林安的头像" shape="rounded" />
  </div>
</template>
`,Lb=`<script setup>
import { MAvatar } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-row">
    <MAvatar src="/avatars/avatar-1.webp" alt="林安的头像" size="large" />
    <MAvatar src="/avatars/avatar-2.webp" alt="Alex 的头像" size="medium" />
    <MAvatar src="/avatars/avatar-1.webp" alt="林安的头像" shape="rounded" />
  </div>
</template>
`,Fb={class:"demo-stack"},Nb={class:"demo-row"},Jb={class:"demo-row"},Ub=V({__name:"Sizes",setup(e){return(t,n)=>(b(),M("div",Fb,[y("div",Nb,[m(d(Oe),{name:"S",size:"small"}),m(d(Oe),{name:"M",size:"medium"}),m(d(Oe),{name:"L",size:"large"})]),y("div",Jb,[m(d(Oe),{name:"Circle",shape:"circle",size:"large"}),m(d(Oe),{name:"Rounded",shape:"rounded",size:"large"})])]))}}),Gb=`<script setup lang="ts">
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
`,Hb=`<script setup>
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
`,jb={class:"demo-row"},Wb=V({__name:"Text",setup(e){return(t,n)=>(b(),M("div",jb,[m(d(Oe),{name:"Anemia UI",size:"large"}),m(d(Oe),{name:"张三"}),m(d(Oe),{name:"Li Hua"}),m(d(Oe),{name:"林安",shape:"rounded"}),m(d(Oe))]))}}),qb=`<script setup lang="ts">
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
`,Kb=`<script setup>
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
`,Qb={name:"avatar",category:"display",title:"Avatar 头像",summary:"展示用户或实体形象，支持图片、文字缩写、占位与加载失败回退。",description:"头像用最小的视觉面积表达身份。图片加载失败时会自动回退到文字缩写或图标；图片本身使用 object-fit: cover，并保留统一的形状与尺寸。",status:"stable",since:"0.1.0",keywords:["avatar","头像","用户","图片","fallback"],sections:[{id:"image",title:"图片头像",description:"传入 src 与 alt；alt 会作为整个头像的无障碍名称。",demo:Pb,code:Ob,codeJs:Lb},{id:"text",title:"文字头像",description:"name 会生成文字缩写：中文取前两个字，英文按空格取首字母；不提供内容时显示占位图标。",demo:Wb,code:qb,codeJs:Kb},{id:"sizes",title:"尺寸与形状",description:"三档尺寸与圆形、圆角矩形两种形状，均可与 Badge 组合使用。",demo:Ub,code:Gb,codeJs:Hb},{id:"fallback",title:"加载失败回退",description:"图片加载失败时触发 error 事件并回退到 name 缩写；#fallback 插槽可以完全自定义占位内容。",demo:Eb,code:Ab,codeJs:Rb}],api:[{id:"avatar-api",title:"MAvatar",props:[{name:"src",type:"string",defaultValue:"—",description:"图片地址。加载失败时自动回退。"},{name:"alt",type:"string",defaultValue:"—",description:"无障碍名称；缺省时依次使用 name 与「头像」。"},{name:"name",type:"string",defaultValue:"—",description:"用于生成文字缩写与回退名称。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"头像尺寸，对应 28px / 36px / 48px。"},{name:"shape",type:"'circle' | 'rounded'",defaultValue:"'circle'",description:"头像形状。"}],events:[{name:"error",type:"(event: Event) => void",description:"图片加载失败时触发。"}],slots:[{name:"fallback",type:"—",description:"自定义图片缺失时的占位内容。"}]}],notes:['根元素使用 role="img" 与 aria-label，图片自身 alt 为空，避免重复朗读。','图片使用 loading="lazy" 与 decoding="async"，长列表中可以减少初始加载成本。',"更换 src 后会自动重置失败状态，重新尝试加载。","文字缩写只是视觉占位，不应作为业务身份的唯一标识。"]},Yb={class:"demo-row"},Xb=V({__name:"Basic",setup(e){return(t,n)=>(b(),M("div",Yb,[m(d(tt),{count:5}),m(d(tt),{count:12,color:"#0f766e"}),m(d(tt),{count:3},{default:g(()=>[m(d(Oe),{name:"Anemia UI"})]),_:1}),m(d(tt),{count:8},{default:g(()=>[m(d(Oe),{name:"林安",size:"large"})]),_:1})]))}}),Zb=`<script setup lang="ts">
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
`,ey=`<script setup>
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
`,ty={class:"demo-row"},ny=V({__name:"Dot",setup(e){return(t,n)=>(b(),M("div",ty,[m(d(tt),{dot:"","aria-label":"有新内容"},{default:g(()=>[m(d(Oe),{name:"Anemia UI"})]),_:1}),m(d(tt),{dot:"",color:"#0f766e","aria-label":"在线"},{default:g(()=>[m(d(Oe),{name:"林安"})]),_:1}),m(d(tt),{dot:"","aria-label":"待处理"}),m(d(tt),{dot:"",color:"#e0a030","aria-label":"处理中"})]))}}),oy=`<script setup lang="ts">
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
`,sy=`<script setup>
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
`,ay={class:"demo-stack"},ly={class:"demo-row"},iy=V({__name:"Hidden",setup(e){const t=O(!1);return(n,o)=>(b(),M("div",ay,[m(d(jt),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),label:"隐藏徽标"},null,8,["modelValue"]),y("div",ly,[m(d(tt),{count:8,hidden:!!t.value},{default:g(()=>[m(d(Oe),{name:"Anemia UI"})]),_:1},8,["hidden"]),m(d(tt),{count:99,hidden:!!t.value,color:"#7c3aed"},{default:g(()=>[m(d(Oe),{name:"林安"})]),_:1},8,["hidden"])]),o[1]||(o[1]=y("p",{class:"demo-hint"},"hidden 为 true 时只渲染默认插槽内容。",-1))]))}}),ry=`<script setup lang="ts">
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
`,dy=`<script setup>
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
`,uy={class:"demo-row"},cy=V({__name:"Max",setup(e){return(t,n)=>(b(),M("div",uy,[m(d(tt),{count:8,max:9}),m(d(tt),{count:120,max:99}),m(d(tt),{count:120,max:9}),m(d(tt),{count:0,"show-zero":""})]))}}),my=`<script setup lang="ts">
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
`,py=`<script setup>
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
`,fy={name:"badge",category:"display",title:"Badge 徽标",summary:"在头像或图标上展示数字、红点或自定义状态标记。",description:"徽标用于提示未读数量或状态。数字徽标会限制最大展示值，小红点用于无法量化的提醒；两者都可以包裹默认插槽，也可以独立使用。",status:"stable",since:"0.1.0",keywords:["badge","徽标","红点","未读","count"],sections:[{id:"basic",title:"基础用法",description:"有默认插槽时，徽标定位在内容右上角；没有插槽时独立渲染。",demo:Xb,code:Zb,codeJs:ey},{id:"max",title:"最大值",description:"超过 max 时显示 `${max}+`；count 为 0 时默认隐藏，可通过 showZero 显示。",demo:cy,code:my,codeJs:py},{id:"dot",title:"小红点",description:"dot 忽略 count，仅展示状态点；需要为没有文本的状态点提供 ariaLabel。",demo:ny,code:oy,codeJs:sy},{id:"hidden",title:"隐藏与自定义颜色",description:"hidden 完全隐藏徽标但保留默认插槽内容；color 修改徽标底色。",demo:iy,code:ry,codeJs:dy}],api:[{id:"badge-api",title:"MBadge",props:[{name:"count",type:"number",defaultValue:"—",description:"数字徽标的值。"},{name:"max",type:"number",defaultValue:"99",description:"最大展示值，超出时显示 `${max}+`。"},{name:"dot",type:"boolean",defaultValue:"false",description:"显示为状态点，忽略 count。"},{name:"color",type:"string",defaultValue:"—",description:"自定义徽标背景色。"},{name:"hidden",type:"boolean",defaultValue:"false",description:"隐藏徽标内容，保留默认插槽。"},{name:"showZero",type:"boolean",defaultValue:"false",description:"count 为 0 时仍然展示。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"徽标的无障碍描述；dot 模式建议提供。"}],events:[],slots:[{name:"default",type:"—",description:"被徽标标记的内容。"}]}],notes:["count 为 0 且未设置 showZero 时不会渲染徽标内容。","dot 模式没有可见文本，应通过 ariaLabel 说明含义。","自定义 color 时文字颜色使用 on-danger Token，请选择对比度足够的背景。","包裹内容时徽标绝对定位在右上角，父容器不应设置 overflow: hidden，否则可能被裁剪。"]},vy=V({__name:"Basic",setup(e){return(t,n)=>(b(),M(le,null,[m(d(P),null,{default:g(()=>[...n[0]||(n[0]=[k("主要按钮",-1)])]),_:1}),m(d(P),{type:"secondary"},{default:g(()=>[...n[1]||(n[1]=[k("次要按钮",-1)])]),_:1}),m(d(P),{type:"outline"},{default:g(()=>[...n[2]||(n[2]=[k("描边按钮",-1)])]),_:1})],64))}}),gy=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton>主要按钮</MButton>
  <MButton type="secondary">次要按钮</MButton>
  <MButton type="outline">描边按钮</MButton>
</template>`,hy=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton>主要按钮</MButton>
  <MButton type="secondary">次要按钮</MButton>
  <MButton type="outline">描边按钮</MButton>
</template>
`,by={class:"custom-button-demo demo-stack"},yy={class:"demo-row"},My=V({__name:"CustomClass",setup(e){return(t,n)=>(b(),M("div",by,[y("div",yy,[m(d(P),{class:"brand-button"},{default:g(()=>[...n[0]||(n[0]=[k("品牌主按钮",-1)])]),_:1}),m(d(P),{class:"brand-button",round:""},{default:g(()=>[...n[1]||(n[1]=[k("胶囊品牌按钮",-1)])]),_:1}),m(d(P),{class:"quiet-button",type:"outline"},{default:g(()=>[...n[2]||(n[2]=[k("安静描边按钮",-1)])]),_:1})]),n[3]||(n[3]=y("p",{class:"demo-hint"}," class 会落在原生 button 上。通过局部选择器覆盖 --m-button-* 变量与形状，不需要 !important，也不会影响点击、加载与键盘行为。 ",-1))]))}}),_y=ie(My,[["__scopeId","data-v-e733cc35"]]),wy=`<script setup lang="ts">
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
`,ky=`<script setup>
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
`,xy={class:"demo-stack"},By={class:"demo-row"},Cy=V({__name:"Dashed",setup(e){return(t,n)=>(b(),M("div",xy,[y("div",By,[m(d(P),{type:"dashed"},{default:g(()=>[...n[0]||(n[0]=[k("虚线按钮",-1)])]),_:1}),m(d(P),{type:"dashed",size:"small"},{default:g(()=>[...n[1]||(n[1]=[k("Small",-1)])]),_:1}),m(d(P),{type:"dashed",icon:"copy"},{default:g(()=>[...n[2]||(n[2]=[k("复制",-1)])]),_:1}),m(d(P),{type:"dashed",disabled:""},{default:g(()=>[...n[3]||(n[3]=[k("禁用",-1)])]),_:1})]),n[4]||(n[4]=y("p",{class:"demo-hint"}," 虚线按钮适合“添加”“上传”等尚未确定的占位操作；它与 outline 共享背景、hover 与焦点规则，只改变边框样式。 ",-1))]))}}),Ty=`<script setup lang="ts">
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
`,$y=`<script setup>
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
`,Vy={class:"demo-stack"},Sy={class:"demo-row"},Iy=V({__name:"Ghost",setup(e){return(t,n)=>(b(),M("div",Vy,[y("div",Sy,[m(d(P),{type:"ghost"},{default:g(()=>[...n[0]||(n[0]=[k("无边框按钮",-1)])]),_:1}),m(d(P),{type:"ghost",icon:"copy","aria-label":"复制"}),m(d(P),{type:"ghost",round:""},{default:g(()=>[...n[1]||(n[1]=[k("胶囊无边框",-1)])]),_:1}),m(d(P),{type:"ghost",disabled:""},{default:g(()=>[...n[2]||(n[2]=[k("禁用",-1)])]),_:1})]),n[3]||(n[3]=y("p",{class:"demo-hint"}," 无边框模式移除背景与边框，只保留文字与 hover 背景，适合工具栏、行内操作和次级导航。 ",-1))]))}}),zy=`<script setup lang="ts">
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
`,Ey=`<script setup>
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
`,Ay={class:"demo-stack"},Ry=V({__name:"Group",setup(e){return(t,n)=>(b(),M("div",Ay,[m(d(is),{"aria-label":"视图切换"},{default:g(()=>[m(d(P),{type:"outline"},{default:g(()=>[...n[0]||(n[0]=[k("列表",-1)])]),_:1}),m(d(P),{type:"outline"},{default:g(()=>[...n[1]||(n[1]=[k("网格",-1)])]),_:1}),m(d(P),{type:"outline"},{default:g(()=>[...n[2]||(n[2]=[k("时间线",-1)])]),_:1})]),_:1}),m(d(is),{size:"small","aria-label":"分页"},{default:g(()=>[m(d(P),{type:"outline"},{default:g(()=>[...n[3]||(n[3]=[k("上一页",-1)])]),_:1}),m(d(P),{type:"outline"},{default:g(()=>[...n[4]||(n[4]=[k("下一页",-1)])]),_:1})]),_:1}),m(d(is),{"aria-label":"快捷操作"},{default:g(()=>[m(d(P),{type:"secondary",icon:"copy","aria-label":"复制"}),m(d(P),{type:"secondary",icon:"check","aria-label":"标记完成"}),m(d(P),{type:"secondary",icon:"close","aria-label":"删除"})]),_:1}),n[5]||(n[5]=y("p",{class:"demo-hint"},' MButtonGroup 负责共享尺寸、合并相邻边框并提供 role="group"；每个按钮仍可单独设置 size、type 与图标。 ',-1))]))}}),Dy=`<script setup lang="ts">
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
`,Py=`<script setup>
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
`,Oy=V({__name:"Icons",setup(e){return(t,n)=>(b(),M(le,null,[m(d(P),{icon:"search","aria-label":"搜索"}),m(d(P),{icon:"copy"},{default:g(()=>[...n[0]||(n[0]=[k("复制内容",-1)])]),_:1}),m(d(P),{type:"outline",icon:"arrow-right"},{default:g(()=>[...n[1]||(n[1]=[k("下一步",-1)])]),_:1}),m(d(P),{type:"ghost",icon:"check"},{default:g(()=>[...n[2]||(n[2]=[k("已完成",-1)])]),_:1}),m(d(P),null,{icon:g(()=>[m(d(St),{name:"github",size:16})]),default:g(()=>[n[3]||(n[3]=k(" GitHub ",-1))]),_:1})],64))}}),Ly=`<script setup lang="ts">
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
`,Fy=`<script setup>
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
`,Ny={class:"demo-stack"},Jy={class:"demo-row"},Uy={class:"demo-row"},Gy=V({__name:"Outline",setup(e){return(t,n)=>(b(),M("div",Ny,[y("div",Jy,[m(d(P),{type:"outline"},{default:g(()=>[...n[0]||(n[0]=[k("默认描边",-1)])]),_:1}),m(d(P),{type:"outline",size:"small"},{default:g(()=>[...n[1]||(n[1]=[k("Small",-1)])]),_:1}),m(d(P),{type:"outline",size:"large"},{default:g(()=>[...n[2]||(n[2]=[k("Large",-1)])]),_:1}),m(d(P),{type:"outline",disabled:""},{default:g(()=>[...n[3]||(n[3]=[k("禁用",-1)])]),_:1})]),y("div",Uy,[m(d(P),{type:"outline",icon:"copy"},{default:g(()=>[...n[4]||(n[4]=[k("复制",-1)])]),_:1}),m(d(P),{type:"outline",round:""},{default:g(()=>[...n[5]||(n[5]=[k("胶囊描边",-1)])]),_:1}),m(d(P),{type:"outline",loading:""},{default:g(()=>[...n[6]||(n[6]=[k("处理中",-1)])]),_:1})]),n[7]||(n[7]=y("p",{class:"demo-hint"}," 线框模式只保留 1px 边框与文字；hover / focus / disabled 与实心按钮共享同一套状态规则。 ",-1))]))}}),Hy=`<script setup lang="ts">
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
`,jy=`<script setup>
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
`,Wy=V({__name:"Sizes",setup(e){return(t,n)=>(b(),M(le,null,[m(d(P),{size:"small"},{default:g(()=>[...n[0]||(n[0]=[k("Small",-1)])]),_:1}),m(d(P),{size:"medium"},{default:g(()=>[...n[1]||(n[1]=[k("Medium",-1)])]),_:1}),m(d(P),{size:"large"},{default:g(()=>[...n[2]||(n[2]=[k("Large",-1)])]),_:1})],64))}}),qy=`<script setup lang="ts">
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton size="small">Small</MButton>
  <MButton size="medium">Medium</MButton>
  <MButton size="large">Large</MButton>
</template>
`,Ky=`<script setup>
import { MButton } from 'anemia-ui'
<\/script>

<template>
  <MButton size="small">Small</MButton>
  <MButton size="medium">Medium</MButton>
  <MButton size="large">Large</MButton>
</template>
`,Qy={class:"demo-stack",style:{"max-width":"520px"}},Yy={class:"demo-row"},Xy={class:"demo-row"},Zy=V({__name:"States",setup(e){return(t,n)=>(b(),M("div",Qy,[y("div",Yy,[m(d(P),{disabled:""},{default:g(()=>[...n[0]||(n[0]=[k("禁用按钮",-1)])]),_:1}),m(d(P),{type:"outline",disabled:""},{default:g(()=>[...n[1]||(n[1]=[k("禁用描边",-1)])]),_:1}),m(d(P),{loading:""},{default:g(()=>[...n[2]||(n[2]=[k("加载中",-1)])]),_:1}),m(d(P),{type:"secondary",loading:""},{default:g(()=>[...n[3]||(n[3]=[k("处理中",-1)])]),_:1})]),m(d(P),{block:""},{default:g(()=>[...n[4]||(n[4]=[k("Block 按钮",-1)])]),_:1}),y("div",Xy,[m(d(P),{round:""},{default:g(()=>[...n[5]||(n[5]=[k("圆角按钮",-1)])]),_:1}),m(d(P),{round:"",type:"outline",size:"small"},{default:g(()=>[...n[6]||(n[6]=[k("Small pill",-1)])]),_:1})])]))}}),eM=`<script setup lang="ts">
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
`,tM=`<script setup>
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
`,nM={class:"demo-stack"},oM={class:"demo-row"},sM=V({__name:"TextButton",setup(e){return(t,n)=>(b(),M("div",nM,[y("div",oM,[m(d(P),{type:"text"},{default:g(()=>[...n[0]||(n[0]=[k("文本按钮",-1)])]),_:1}),m(d(P),{type:"text",icon:"arrow-right"},{default:g(()=>[...n[1]||(n[1]=[k("继续",-1)])]),_:1}),m(d(P),{type:"text",round:""},{default:g(()=>[...n[2]||(n[2]=[k("返回",-1)])]),_:1}),m(d(P),{type:"text",disabled:""},{default:g(()=>[...n[3]||(n[3]=[k("禁用",-1)])]),_:1})]),n[4]||(n[4]=y("p",{class:"demo-hint"}," 文本按钮使用品牌色文字与更紧凑的横向内边距，视觉权重最低，适合表格行内操作与辅助入口。 ",-1))]))}}),aM=`<script setup lang="ts">
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
`,lM=`<script setup>
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
`,iM=V({__name:"Types",setup(e){return(t,n)=>(b(),M(le,null,[m(d(P),{type:"primary"},{default:g(()=>[...n[0]||(n[0]=[k("Primary",-1)])]),_:1}),m(d(P),{type:"secondary"},{default:g(()=>[...n[1]||(n[1]=[k("Secondary",-1)])]),_:1}),m(d(P),{type:"outline"},{default:g(()=>[...n[2]||(n[2]=[k("Outline",-1)])]),_:1}),m(d(P),{type:"ghost"},{default:g(()=>[...n[3]||(n[3]=[k("Ghost",-1)])]),_:1}),m(d(P),{type:"dashed"},{default:g(()=>[...n[4]||(n[4]=[k("Dashed",-1)])]),_:1}),m(d(P),{type:"text"},{default:g(()=>[...n[5]||(n[5]=[k("Text",-1)])]),_:1}),m(d(P),{type:"danger"},{default:g(()=>[...n[6]||(n[6]=[k("Danger",-1)])]),_:1})],64))}}),rM=`<script setup lang="ts">
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
`,dM=`<script setup>
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
`,uM={name:"button",category:"basic",title:"Button 按钮",summary:"触发一次操作，提供七种视觉类型、三种尺寸、按钮组以及完整的加载与禁用反馈。",description:"按钮是操作入口，而不是装饰元素。Anemia UI 的按钮使用统一的高度、圆角与状态 Token，视觉层级由类型决定：主操作使用 primary，次操作用 secondary 或 outline，低权重操作用 ghost 或 text，需要提示“尚未确定 / 可添加”时使用 dashed。按钮保留稳定的类名与 CSS Variables，因此可以在不改变交互语义的前提下继续扩展品牌样式。",status:"stable",since:"0.1.0",keywords:["button","按钮","ButtonGroup","操作","提交","虚线","文本","按钮组"],sections:[{id:"basic",title:"基础用法",description:"默认使用 primary 类型；同一区域内应只有一个主要操作。",demo:vy,code:gy,codeJs:hy},{id:"types",title:"按钮类型",description:"七种类型共享尺寸、焦点、禁用与加载状态。danger 用于不可逆操作，不应用于普通强调。",demo:iM,code:rM,codeJs:dM},{id:"outline",title:"线框模式",description:"outline 使用透明背景与 1px 强边框，适合次级操作；尺寸、图标、圆角、加载与禁用状态与其他类型完全一致。",demo:Gy,code:Hy,codeJs:jy},{id:"ghost",title:"无边框模式",description:"ghost 移除背景与边框，只保留文字和 hover 背景，适合工具栏、行内操作和低权重入口。",demo:Iy,code:zy,codeJs:Ey},{id:"dashed",title:"虚线按钮",description:"dashed 与 outline 共享布局和状态，仅把边框改为虚线，常用于“添加”“上传”等占位操作。",demo:Cy,code:Ty,codeJs:$y},{id:"text",title:"文本按钮",description:"text 使用品牌色文字与更紧凑的横向内边距，视觉权重最低，适合表格行内操作与辅助入口。",demo:sM,code:aM,codeJs:lM},{id:"group",title:"按钮组",description:'MButtonGroup 共享尺寸、合并相邻边框并提供 role="group"；单个按钮仍可覆盖 size、type 与图标。',demo:Ry,code:Dy,codeJs:Py},{id:"custom-class",title:"自定义 class 与样式钩子",description:"class 直接落在原生 button 上；通过覆盖 --m-button-* 变量或局部选择器即可扩展品牌样式，无需 !important。",demo:_y,code:wy,codeJs:ky},{id:"sizes",title:"尺寸",description:"尺寸统一使用 small / medium / large，对应 28px / 36px / 44px 的控件高度。",demo:Wy,code:qy,codeJs:Ky},{id:"states",title:"状态",description:"禁用与加载状态都会阻止交互；loading 通过 disabled 与 aria-busy 同时向视觉和辅助技术反馈。",demo:Zy,code:eM,codeJs:tM},{id:"icons",title:"图标与图标按钮",description:"图标来自统一的 MIcon 注册表，可以通过 icon 属性或 #icon 插槽传入。只有图标的按钮必须提供 aria-label。",demo:Oy,code:Ly,codeJs:Fy}],api:[{id:"button-api",title:"MButton",props:[{name:"type",type:"'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'dashed' | 'danger'",defaultValue:"'primary'",description:"视觉类型。原生提交行为请使用 nativeType。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"按钮尺寸；在 MButtonGroup 内可省略，由按钮组统一提供。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态，阻止点击与键盘激活。"},{name:"loading",type:"boolean",defaultValue:"false",description:"加载状态，显示指示器并阻止点击。"},{name:"block",type:"boolean",defaultValue:"false",description:"占满父容器宽度。"},{name:"round",type:"boolean",defaultValue:"false",description:"使用胶囊形圆角。"},{name:"icon",type:"IconName",defaultValue:"—",description:"统一图标注册表中的图标名。#icon 插槽优先。"},{name:"nativeType",type:"'button' | 'submit' | 'reset'",defaultValue:"'button'",description:"原生 button 元素的 type 属性。"}],events:[{name:"click",type:"(event: MouseEvent) => void",description:"按钮被激活时触发；禁用或加载状态不会触发。"}],slots:[{name:"default",type:"—",description:"按钮文本内容。"},{name:"icon",type:"—",description:"自定义图标，优先于 icon 属性。"},{name:"loading",type:"—",description:"自定义加载指示器。"}]},{id:"button-group-api",title:"MButtonGroup",props:[{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"为组内按钮提供默认尺寸；单个按钮的 size 优先。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"按钮组的可访问名称，输出为 aria-label。"}],slots:[{name:"default",type:"—",description:"一组 MButton。"}]}],notes:['type 控制视觉类型，原生提交行为使用 nativeType="submit"。',"outline / ghost / dashed / text 与实心按钮共享尺寸、焦点、disabled 与 loading 行为。",'MButtonGroup 负责共享尺寸、合并相邻边框并提供 role="group"；组内按钮仍可单独覆盖 size。',"class 会落到原生 button 上；--m-button-bg、--m-button-fg、--m-button-border、--m-button-hover-bg 等是稳定的样式钩子，不需要 !important。","纯图标按钮必须提供 aria-label，否则屏幕阅读器无法识别用途。","loading 与 disabled 都会阻止 click 事件，避免重复提交。","按钮使用原生 <button> 元素，因此自动支持 Enter / Space 键。",'单独引入组件时，全量引入使用 import "anemia-ui/style.css"，按需引入使用 import "anemia-ui/components/button/style.css"。']},cM=V({__name:"Basic",setup(e){return(t,n)=>(b(),ye(d(on),{style:{"max-width":"460px"}},{header:g(()=>[...n[0]||(n[0]=[y("h3",{class:"card-title"},"组件设计原则",-1)])]),footer:g(()=>[m(d(P),{size:"small",type:"outline"},{default:g(()=>[...n[1]||(n[1]=[k("查看设计规范",-1)])]),_:1})]),default:g(()=>[n[2]||(n[2]=y("p",{class:"card-copy"}," 组件优先复用 Design Token，不引入孤立颜色或尺寸。视觉层级由排版与留白建立，而不是依赖阴影和装饰。 ",-1))]),_:1}))}}),mM=ie(cM,[["__scopeId","data-v-fdaea78b"]]),pM=`<script setup lang="ts">
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
`,fM=`<script setup>
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
`,vM={class:"demo-stack",style:{"max-width":"460px"}},gM={class:"demo-hint"},hM=V({__name:"Clickable",setup(e){const t=O(0);return(n,o)=>(b(),M("div",vM,[m(d(on),{clickable:"",onClick:o[0]||(o[0]=s=>t.value+=1)},{default:g(()=>[...o[1]||(o[1]=[y("h3",{class:"card-title"},"可点击卡片",-1),y("p",{class:"card-copy"},"支持鼠标点击、Enter 与 Space，激活时给出明确焦点反馈。",-1)])]),_:1}),y("p",gM,"点击次数："+H(t.value),1)]))}}),bM=ie(hM,[["__scopeId","data-v-f4d19064"]]),yM=`<script setup lang="ts">
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
`,MM=`<script setup>
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
`,_M={class:"demo-grid"},wM=V({__name:"Hover",setup(e){return(t,n)=>(b(),M("div",_M,[m(d(on),{hoverable:""},{default:g(()=>[...n[0]||(n[0]=[y("h3",{class:"card-title"},"Hoverable",-1),y("p",{class:"card-copy"},"鼠标悬停时边框加深，并出现克制的阴影与位移动画。",-1)])]),_:1}),m(d(on),null,{default:g(()=>[...n[1]||(n[1]=[y("h3",{class:"card-title"},"Default",-1),y("p",{class:"card-copy"},"默认卡片保持静止，适合不需要交互暗示的内容。",-1)])]),_:1})]))}}),kM=ie(wM,[["__scopeId","data-v-acd4b470"]]),xM=`<script setup lang="ts">
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
`,BM=`<script setup>
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
`,CM={class:"demo-grid"},TM=V({__name:"Padding",setup(e){return(t,n)=>(b(),M("div",CM,[m(d(on),{padding:"none"},{default:g(()=>[...n[0]||(n[0]=[y("div",{class:"padded-block"},"padding:none",-1)])]),_:1}),m(d(on),{padding:"small"},{default:g(()=>[...n[1]||(n[1]=[y("div",{class:"padded-block"},"padding:small",-1)])]),_:1}),m(d(on),{padding:"large"},{default:g(()=>[...n[2]||(n[2]=[y("div",{class:"padded-block"},"padding:large",-1)])]),_:1}),m(d(on),{padding:"32px"},{default:g(()=>[...n[3]||(n[3]=[y("div",{class:"padded-block"},"padding:32px",-1)])]),_:1})]))}}),$M=ie(TM,[["__scopeId","data-v-bcebb117"]]),VM=`<script setup lang="ts">
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
`,SM=`<script setup>
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
`,IM={name:"card",category:"container",title:"Card 卡片",summary:"将相关信息组织为一个可操作的容器，支持头部、内容与底部插槽。",description:"卡片是信息容器，不是默认的页面布局单位。Anemia UI 的卡片以边框和留白建立层级，阴影只在悬停或需要强调时出现；可点击卡片会补齐键盘与焦点语义。",status:"stable",since:"0.1.0",keywords:["card","卡片","容器","面板"],sections:[{id:"basic",title:"基础用法",description:"header、default 与 footer 三个插槽分别承载标题、内容与操作。",demo:mM,code:pM,codeJs:fM},{id:"hover",title:"悬停状态",description:"hoverable 在悬停时轻微抬升卡片并加深边框，不改变布局尺寸。",demo:kM,code:xM,codeJs:BM},{id:"clickable",title:"可点击卡片",description:'clickable 添加 role="button"、tabindex 与 Enter / Space 激活，同时提供焦点环。',demo:bM,code:yM,codeJs:MM},{id:"padding",title:"自定义内边距",description:'padding 支持 none / small / medium / large 预设，也接受任意 CSS 长度，如 "32px"。',demo:$M,code:VM,codeJs:SM}],api:[{id:"card-api",title:"MCard",props:[{name:"hoverable",type:"boolean",defaultValue:"false",description:"悬停时显示边框、阴影与轻微位移。"},{name:"clickable",type:"boolean",defaultValue:"false",description:"添加可点击与键盘激活语义，自动包含悬停效果。"},{name:"padding",type:"'none' | 'small' | 'medium' | 'large' | string",defaultValue:"'medium'",description:"内边距预设或任意 CSS 长度。"}],events:[{name:"click",type:"(event: MouseEvent | KeyboardEvent) => void",description:"卡片被点击或通过 Enter / Space 激活时触发。"}],slots:[{name:"header",type:"—",description:"卡片头部，通常放标题与操作。"},{name:"default",type:"—",description:"卡片主体内容。"},{name:"footer",type:"—",description:"卡片底部，自动添加分割线。"}]}],notes:["clickable 会为卡片添加按钮语义；卡片内部如包含链接或按钮，交互仍会被正确隔离。","不要嵌套可点击卡片，避免出现两个重叠的激活区域。",'自定义 padding 传入字符串时请包含单位，例如 "32px"。',"卡片不设置 overflow: hidden，便于 Badge 等元素溢出显示；需要裁剪时由使用方处理。"]},zM={class:"demo-stack"},EM={class:"demo-hint"},AM=V({__name:"Basic",setup(e){const t=O(!0),n=O(!1);return(o,s)=>(b(),M("div",zM,[m(d(Ft),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),label:"接收产品更新"},null,8,["modelValue"]),m(d(Ft),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a)},{default:g(()=>[...s[2]||(s[2]=[k("订阅设计周刊",-1)])]),_:1},8,["modelValue"]),y("p",EM,"updates："+H(t.value)+" · newsletter："+H(n.value),1)]))}}),RM=`<script setup lang="ts">
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
`,DM=`<script setup>
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
`,PM={class:"demo-stack"},OM={class:"demo-hint"},LM=V({__name:"Group",setup(e){const t=[{label:"设计",value:"design"},{label:"前端",value:"frontend"},{label:"组件库",value:"library"},{label:"文档",value:"docs"}],n=O(["design","library"]);return(o,s)=>(b(),M("div",PM,[m(d(el),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a),options:t,"aria-label":"关注方向"},null,8,["modelValue"]),y("p",OM,"已选择："+H(n.value.length?n.value.join("、"):"暂无"),1)]))}}),FM=`<script setup lang="ts">
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
`,NM=`<script setup>
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
`,JM={class:"demo-stack"},UM={class:"demo-hint"},GM=V({__name:"Indeterminate",setup(e){const t=["读取","编辑","发布"],n=t.map(i=>({label:i,value:i})),o=O(["读取"]),s=T(()=>o.value.length===t.length),a=T(()=>o.value.length>0&&!s.value);function l(i){o.value=i?[...t]:[]}return(i,r)=>(b(),M("div",JM,[m(d(Ft),{"model-value":s.value,indeterminate:a.value,"onUpdate:modelValue":l},{default:g(()=>[...r[1]||(r[1]=[k(" 全部权限 ",-1)])]),_:1},8,["model-value","indeterminate"]),m(d(Ht)),m(d(el),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c),options:d(n),"aria-label":"权限"},null,8,["modelValue","options"]),y("p",UM,"已选择 "+H(o.value.length)+" / "+H(t.length)+" 项",1)]))}}),HM=`<script setup lang="ts">
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
`,jM=`<script setup>
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
`,WM={class:"demo-stack"},qM={class:"demo-row"},KM={class:"demo-row"},QM=V({__name:"SizesDisabled",setup(e){const t=O(!0),n=O(!0),o=O(!0);return(s,a)=>(b(),M("div",WM,[y("div",qM,[m(d(Ft),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),size:"small",label:"Small"},null,8,["modelValue"]),m(d(Ft),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),size:"medium",label:"Medium"},null,8,["modelValue"]),m(d(Ft),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value=l),size:"large",label:"Large"},null,8,["modelValue"])]),y("div",KM,[m(d(Ft),{"model-value":!0,disabled:"",label:"禁用选中"}),m(d(Ft),{"model-value":!1,disabled:"",label:"禁用未选"}),m(d(Ft),{"model-value":!1,indeterminate:"",disabled:"",label:"禁用半选"})])]))}}),YM=`<script setup lang="ts">
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
`,XM=`<script setup>
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
`,ZM={name:"checkbox",category:"basic",title:"Checkbox 复选框",summary:"独立复选框与复选框组，支持半选、尺寸、禁用以及原生表单语义。",description:'复选框用于在多个选项中做多选。组件保留原生 input[type="checkbox"] 的语义与键盘行为，将视觉层独立出来；复选框组负责数组值的增删与顺序维护。',status:"stable",since:"0.1.0",keywords:["checkbox","复选框","多选","group","半选"],sections:[{id:"basic",title:"基础用法",description:"独立使用时通过 v-model 绑定布尔值。",demo:AM,code:RM,codeJs:DM},{id:"group",title:"复选框组",description:"MCheckboxGroup 维护一个数组；通过 options 快速渲染，或在默认插槽中放置带 value 的 MCheckbox。",demo:LM,code:FM,codeJs:NM},{id:"indeterminate",title:"半选状态",description:'indeterminate 仅控制视觉与 aria-checked="mixed"，不会改变绑定值；常用于「全选」的派生状态。',demo:GM,code:HM,codeJs:jM},{id:"sizes-disabled",title:"尺寸与禁用",description:"尺寸统一为 small / medium / large；禁用状态阻止指针与键盘交互。",demo:QM,code:YM,codeJs:XM}],api:[{id:"checkbox-api",title:"MCheckbox",props:[{name:"modelValue",type:"boolean",defaultValue:"false",description:"独立复选框的选中状态；在组内会被忽略。"},{name:"value",type:"string | number",defaultValue:"—",description:"在 MCheckboxGroup 中标识当前选项，组内必填。"},{name:"label",type:"string",defaultValue:"—",description:"可见标签文本；默认插槽优先。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态；组内会继承组的 disabled。"},{name:"indeterminate",type:"boolean",defaultValue:"false",description:"半选视觉状态，不改变绑定值。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"复选框尺寸；组内使用组的尺寸。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"id",type:"string",defaultValue:"—",description:"原生 input id，缺省时自动生成。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"独立复选框状态变化；组内由组统一更新数组。"},{name:"change",type:"(value: boolean, event: Event) => void",description:"选中状态变化时触发。"}],slots:[{name:"default",type:"—",description:"自定义标签内容。"}]},{id:"checkbox-group-api",title:"MCheckboxGroup",props:[{name:"modelValue",type:"(string | number)[]",defaultValue:"[]",description:"已选中值的数组。"},{name:"options",type:"CheckboxOption[]",defaultValue:"[]",description:"便捷渲染选项，每项包含 label / value / disabled。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个组，并向下传递。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"组内复选框尺寸。"},{name:"name",type:"string",defaultValue:"—",description:"组内原生 input 的 name。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"组的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: (string | number)[]) => void",description:"选中项变化时触发，用于 v-model。"},{name:"change",type:"(value: (string | number)[]) => void",description:"选中项变化时触发。"}],slots:[{name:"default",type:"—",description:"自定义组内复选框。"}]}],notes:["在组内必须为每个 MCheckbox 提供唯一的 value，否则无法加入选中数组。","组内不要给子复选框绑定 v-model；选中状态由组的 modelValue 派生。","indeterminate 是纯视觉状态，父级应通过已选项数量自行计算。","原生 input 保留了表单提交与键盘切换能力，视觉层不会拦截焦点。",'组容器使用 role="group"，请通过 ariaLabel 提供分组名称。']},e1={class:"demo-stack",style:{"max-width":"560px"}},t1=V({__name:"Basic",setup(e){return(t,n)=>(b(),M("div",e1,[n[1]||(n[1]=y("p",{class:"demo-hint"},"基础分割线用于分隔内容区块。",-1)),m(d(Ht)),n[2]||(n[2]=y("p",{class:"demo-hint"},"带文字的分割线可以表达分组语义。",-1)),m(d(Ht),null,{default:g(()=>[...n[0]||(n[0]=[k("或者",-1)])]),_:1}),n[3]||(n[3]=y("p",{class:"demo-hint"},"所有颜色都来自设计 Token，并自动适配双主题。",-1))]))}}),n1=`<script setup lang="ts">
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
`,o1=`<script setup>
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
`,s1={class:"demo-stack",style:{"max-width":"560px"}},a1=V({__name:"Positions",setup(e){return(t,n)=>(b(),M("div",s1,[m(d(Ht),{"content-position":"left"},{default:g(()=>[...n[0]||(n[0]=[k("左侧标题",-1)])]),_:1}),m(d(Ht),{"content-position":"center"},{default:g(()=>[...n[1]||(n[1]=[k("居中标题",-1)])]),_:1}),m(d(Ht),{"content-position":"right"},{default:g(()=>[...n[2]||(n[2]=[k("右侧标题",-1)])]),_:1})]))}}),l1=`<script setup lang="ts">
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MDivider content-position="left">左侧标题</MDivider>
    <MDivider content-position="center">居中标题</MDivider>
    <MDivider content-position="right">右侧标题</MDivider>
  </div>
</template>
`,i1=`<script setup>
import { MDivider } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack" style="max-width: 560px">
    <MDivider content-position="left">左侧标题</MDivider>
    <MDivider content-position="center">居中标题</MDivider>
    <MDivider content-position="right">右侧标题</MDivider>
  </div>
</template>
`,r1={class:"demo-row",style:{height:"32px"}},d1=V({__name:"Vertical",setup(e){return(t,n)=>(b(),M("div",r1,[n[0]||(n[0]=y("span",null,"设计",-1)),m(d(Ht),{direction:"vertical"}),n[1]||(n[1]=y("span",null,"开发",-1)),m(d(Ht),{direction:"vertical"}),n[2]||(n[2]=y("span",null,"文档",-1)),m(d(Ht),{direction:"vertical"}),n[3]||(n[3]=y("span",null,"测试",-1))]))}}),u1=`<script setup lang="ts">
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
`,c1=`<script setup>
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
`,m1={name:"divider",category:"display",title:"Divider 分割线",summary:"以一条克制的线分隔内容，支持水平、垂直与带文字三种形态。",description:"分割线用于建立内容分组。优先使用留白和排版建立层级，只有在语义上确实需要分隔时才使用 Divider；不要用它装饰每一个区块。",status:"stable",since:"0.1.0",keywords:["divider","分割线","分隔","布局"],sections:[{id:"basic",title:"基础用法",description:"默认水平分割线占据整行；默认插槽可提供分组标题。",demo:t1,code:n1,codeJs:o1},{id:"positions",title:"文字位置",description:"contentPosition 控制文字在左、中、右三种位置，适用于不同层级的分组标题。",demo:a1,code:l1,codeJs:i1},{id:"vertical",title:"垂直分割线",description:"在横向排列的元信息之间使用垂直分割线，高度跟随当前行高。",demo:d1,code:u1,codeJs:c1}],api:[{id:"divider-api",title:"MDivider",props:[{name:"direction",type:"'horizontal' | 'vertical'",defaultValue:"'horizontal'",description:"分割线方向。"},{name:"contentPosition",type:"'left' | 'center' | 'right'",defaultValue:"'center'",description:"水平分割线中文字的位置；垂直模式忽略。"}],events:[],slots:[{name:"default",type:"—",description:"水平分割线中的文字或内容。"}]}],notes:["垂直分割线使用 1em 高度，适合与一行文本对齐；复杂布局请使用 CSS 边框。","垂直模式不会渲染默认插槽内容。",'元素带有 role="separator" 与 aria-orientation，辅助技术可以识别分隔关系。',"分割线颜色来自 divider Token，会随主题变化。"]},p1={class:"demo-stack"},f1={class:"demo-row"},v1=V({__name:"Basic",setup(e){const t=O(!1);return(n,o)=>(b(),M("div",p1,[y("div",f1,[m(d(P),{onClick:o[0]||(o[0]=s=>t.value=!0)},{default:g(()=>[...o[4]||(o[4]=[k("打开抽屉",-1)])]),_:1})]),o[9]||(o[9]=y("p",{class:"demo-hint"},"按 Esc、点击关闭按钮或遮罩关闭；关闭后焦点回到触发按钮。",-1)),m(d(qo),{modelValue:t.value,"onUpdate:modelValue":o[3]||(o[3]=s=>t.value=s),title:"项目设置"},{footer:g(()=>[m(d(P),{type:"ghost",onClick:o[1]||(o[1]=s=>t.value=!1)},{default:g(()=>[...o[5]||(o[5]=[k("取消",-1)])]),_:1}),m(d(P),{onClick:o[2]||(o[2]=s=>t.value=!1)},{default:g(()=>[...o[6]||(o[6]=[k("保存",-1)])]),_:1})]),default:g(()=>[o[7]||(o[7]=y("p",null,"抽屉用于承载与当前页面相关、但不需要打断整个流程的次级任务。",-1)),o[8]||(o[8]=y("p",null,"从右侧滑入，内容区独立滚动，页面滚动在打开期间被锁定。",-1))]),_:1},8,["modelValue"])]))}}),g1=`<script setup lang="ts">
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
`,h1=`<script setup>
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
`,b1={class:"demo-stack"},y1={class:"demo-row"},M1=V({__name:"Locked",setup(e){const t=O(!1);return(n,o)=>(b(),M("div",b1,[y("div",y1,[m(d(P),{onClick:o[0]||(o[0]=s=>t.value=!0)},{default:g(()=>[...o[3]||(o[3]=[k("打开不可关闭抽屉",-1)])]),_:1})]),m(d(qo),{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value=s),title:"完成初始化",closable:!1,"mask-closable":!1,placement:"right"},{footer:g(()=>[m(d(P),{onClick:o[1]||(o[1]=s=>t.value=!1)},{default:g(()=>[...o[4]||(o[4]=[k("我已了解",-1)])]),_:1})]),default:g(()=>[o[5]||(o[5]=y("p",null,"closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。",-1)),o[6]||(o[6]=y("p",null,"这种抽屉必须由业务在页脚提供明确的退出路径。",-1))]),_:1},8,["modelValue"])]))}}),_1=`<script setup lang="ts">
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
`,w1=`<script setup>
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
`,k1={class:"demo-stack"},x1={class:"demo-row"},B1=V({__name:"Placements",setup(e){const t=O(!1),n=O("right"),o=["left","right","top","bottom"];function s(a){n.value=a,t.value=!0}return(a,l)=>(b(),M("div",k1,[y("div",x1,[(b(),M(le,null,Le(o,i=>m(d(P),{key:i,type:"outline",onClick:r=>s(i)},{default:g(()=>[k(H(i),1)]),_:2},1032,["onClick"])),64))]),m(d(qo),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),placement:n.value,title:`${n.value} 抽屉`},{default:g(()=>[...l[1]||(l[1]=[y("p",null,"placement 支持 left / right / top / bottom，动画方向与出现边缘保持一致。",-1)])]),_:1},8,["modelValue","placement","title"])]))}}),C1=`<script setup lang="ts">
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
`,T1=`<script setup>
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
`,$1={class:"demo-stack"},V1={class:"demo-row"},S1=V({__name:"Sizes",setup(e){const t=O(!1),n=O("medium"),o=["small","medium","large"];function s(a){n.value=a,t.value=!0}return(a,l)=>(b(),M("div",$1,[y("div",V1,[(b(),M(le,null,Le(o,i=>m(d(P),{key:i,type:"outline",onClick:r=>s(i)},{default:g(()=>[k(H(i),1)]),_:2},1032,["onClick"])),64))]),m(d(qo),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),size:n.value,title:`${n.value} 抽屉`},{default:g(()=>[...l[1]||(l[1]=[y("p",null,"small / medium / large 控制面板宽度；上下方向按同一档位换算高度。",-1),y("p",null,"移动端会以 100vw 为上限，避免面板超出视口。",-1)])]),_:1},8,["modelValue","size","title"])]))}}),I1=`<script setup lang="ts">
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
`,z1=`<script setup>
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
`,E1={name:"drawer",category:"overlay",title:"Drawer 抽屉",summary:"从视口边缘滑入的次级面板，复用统一的浮层层级、焦点与滚动管理。",description:"抽屉用于承载与当前页面相关、但不需要打断整个流程的次级任务。它和 Modal 共用 useOverlay：层级栈、Escape 归属、滚动锁定、焦点陷阱与归还都由同一套基础设施保证。",status:"stable",since:"0.3.0",keywords:["drawer","抽屉","侧边栏","浮层","overlay","面板"],sections:[{id:"basic",title:"基础用法",description:"默认从右侧滑入；v-model 控制显隐，页脚插槽放置主要操作。",demo:v1,code:g1,codeJs:h1},{id:"placements",title:"出现方向",description:"placement 支持 left / right / top / bottom，动画方向与出现边缘一致。",demo:B1,code:C1,codeJs:T1},{id:"sizes",title:"尺寸",description:"small / medium / large 控制面板宽度；上下方向按同一档位换算高度。",demo:S1,code:I1,codeJs:z1},{id:"locked",title:"受控关闭",description:"closable 控制关闭按钮与 Esc，maskClosable 控制遮罩；关闭时必须由业务提供明确退出路径。",demo:M1,code:_1,codeJs:w1}],api:[{id:"drawer-api",title:"MDrawer",props:[{name:"modelValue",type:"boolean",defaultValue:"false",description:"抽屉是否可见，用于 v-model。"},{name:"title",type:"string",defaultValue:"—",description:"标题文本；提供 header 插槽时不渲染。"},{name:"placement",type:"'left' | 'right' | 'top' | 'bottom'",defaultValue:"'right'",description:"抽屉出现的方向。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"侧边宽度档位；上下方向换算为高度。"},{name:"closable",type:"boolean",defaultValue:"true",description:"显示关闭按钮，并允许 Esc 关闭。"},{name:"maskClosable",type:"boolean",defaultValue:"true",description:"允许按下遮罩关闭。"},{name:"lockScroll",type:"boolean",defaultValue:"true",description:"打开时锁定 body 滚动，关闭时恢复。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留抽屉并切换 display:none；unmount 销毁子树。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有 title 或使用自定义 header 时的无障碍名称。"},{name:"id",type:"string",defaultValue:"—",description:"抽屉面板 id。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求关闭时触发，用于 v-model。"},{name:"close",type:"(reason: 'close-button' | 'mask' | 'escape', nativeEvent?: Event) => void",description:"关闭请求的来源说明。"},{name:"opened",type:"() => void",description:"进入过渡结束后触发。"},{name:"closed",type:"() => void",description:"离开过渡结束后触发。"}],slots:[{name:"default",type:"—",description:"抽屉正文。"},{name:"header",type:"—",description:"自定义头部；提供时请同时提供 ariaLabel。"},{name:"footer",type:"—",description:"页脚操作区。"}]}],notes:["抽屉通过 Teleport 渲染到 body，不受父级 overflow 或 transform 裁剪。","与 Modal 共用 Overlay 基础设施：嵌套时只有最上层响应 Esc 与外部点击。","打开时焦点进入面板并限制 Tab 循环，关闭后归还焦点；body 滚动使用引用计数恢复。","closable 为 false 时必须自行提供关闭入口，否则键盘用户无法退出。","自定义 header 时默认标题不再渲染，请通过 ariaLabel 提供可访问名称。","抽屉适合次级任务；需要用户集中决策、且必须打断当前流程时优先使用 Modal。",'hide-mode="display" 适合需要保留表单输入或滚动位置的抽屉；默认 unmount 会销毁内部状态。']},A1={class:"demo-stack"},R1={class:"demo-hint"},D1=V({__name:"Basic",setup(e){const t=O("尚未选择"),n=[{key:"edit",label:"编辑",icon:"link"},{key:"copy",label:"复制",icon:"copy"},{key:"share",label:"分享",icon:"external-link"}];function o(s,a){t.value=`${a.label}（${s}）`}return(s,a)=>(b(),M("div",A1,[m(d(mo),{items:n,"aria-label":"更多操作",onSelect:o},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...a[0]||(a[0]=[k("更多操作",-1)])]),_:1})]),_:1}),y("p",R1,"最近选择："+H(t.value),1)]))}}),P1=`<script setup lang="ts">
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
`,O1=`<script setup>
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
`,L1={class:"demo-stack"},F1={class:"demo-hint"},N1=V({__name:"Controlled",setup(e){const t=O(!1),n=O("尚未选择"),o=[{key:"edit",label:"编辑"},{key:"copy",label:"复制"}];function s(a,l){n.value=`${l.label}（${a}）`}return(a,l)=>(b(),M("div",L1,[m(d(mo),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),trigger:"manual",items:o,"aria-label":"受控菜单",onSelect:s},{default:g(()=>[m(d(P),{type:"outline",size:"small"},{default:g(()=>[...l[2]||(l[2]=[k("菜单触发器",-1)])]),_:1})]),_:1},8,["modelValue"]),m(d(P),{size:"small",onClick:l[1]||(l[1]=i=>t.value=!t.value)},{default:g(()=>[k(H(t.value?"关闭菜单":"打开菜单"),1)]),_:1}),y("p",F1,"最近选择："+H(n.value)+'。trigger="manual" 时触发器点击不会自动开关。',1)]))}}),J1=`<script setup lang="ts">
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
`,U1=`<script setup>
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
`,G1={class:"demo-stack"},H1={class:"custom-item"},j1={class:"custom-item__body"},W1={class:"custom-item__label"},q1={class:"custom-item__hint"},K1={class:"demo-hint"},Q1=V({__name:"CustomItems",setup(e){const t=O("尚未选择"),n={edit:"修改当前记录",copy:"复制到剪贴板",share:"发送给协作者"},o=[{key:"edit",label:"编辑",icon:"link"},{key:"copy",label:"复制",icon:"copy"},{key:"share",label:"分享",icon:"external-link"}];function s(l){return n[l]??""}function a(l,i){t.value=`${i.label}（${l}）`}return(l,i)=>(b(),M("div",G1,[m(d(mo),{items:o,"aria-label":"更多操作",onSelect:a},{item:g(({item:r})=>[y("span",H1,[m(d(St),{name:r.icon??"link"},null,8,["name"]),y("span",j1,[y("span",W1,H(r.label),1),y("span",q1,H(s(r.key)),1)])])]),default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...i[0]||(i[0]=[k("更多操作",-1)])]),_:1})]),_:1}),y("p",K1,"最近选择："+H(t.value),1)]))}}),Y1=ie(Q1,[["__scopeId","data-v-e92440b1"]]),X1=`<script setup lang="ts">
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
`,Z1=`<script setup>
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
`,e_=V({__name:"Divided",setup(e){const t=[{key:"archive",label:"归档",icon:"check"},{key:"move",label:"移动",icon:"arrow-right",divided:!0},{key:"delete",label:"删除",icon:"close",danger:!0,divided:!0}];return(n,o)=>(b(),ye(d(mo),{items:t,"aria-label":"记录操作"},{default:g(()=>[m(d(P),{size:"small",type:"outline"},{default:g(()=>[...o[0]||(o[0]=[k("记录操作",-1)])]),_:1})]),_:1}))}}),t_=`<script setup lang="ts">
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
`,n_=`<script setup>
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
`,o_=V({__name:"Placement",setup(e){const t=[{key:"top-1",label:"置顶"},{key:"top-2",label:"标为已读"}];return(n,o)=>(b(),ye(d(mo),{items:t,placement:"top","aria-label":"向上展开"},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...o[0]||(o[0]=[k("向上展开",-1)])]),_:1})]),_:1}))}}),s_=`<script setup lang="ts">
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
`,a_=`<script setup>
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
`,l_={name:"dropdown",category:"overlay",title:"Dropdown 下拉菜单",summary:"由触发器展开的操作菜单，支持键盘导航、自定义菜单项、受控模式与焦点归还。",description:"Dropdown 是菜单按钮模式：展开后焦点进入第一个可用菜单项，方向键、Home / End 在菜单内移动，Enter / Space 触发原生按钮行为。菜单关闭后焦点回到触发器，Tab 会直接关闭菜单而不是进入页面末尾。菜单项内容可以通过 item 插槽完全自定义。",status:"stable",since:"0.4.0",keywords:["dropdown","菜单","操作","menu","下拉"],sections:[{id:"basic",title:"基础用法",description:"items 描述菜单项，select 事件返回 key 与完整菜单项。",demo:D1,code:P1,codeJs:O1},{id:"custom-items",title:"自定义菜单项",description:"item 插槽替换菜单项内部内容，外层 button、焦点与键盘行为保持不变。",demo:Y1,code:X1,codeJs:Z1},{id:"controlled",title:"受控菜单",description:'trigger="manual" 关闭自动开关；v-model 让外部状态成为唯一事实来源。',demo:N1,code:J1,codeJs:U1},{id:"divided",title:"分隔线与危险项",description:"divided 在菜单项上方加分隔线，danger 使用危险色表达破坏性操作。",demo:e_,code:t_,codeJs:n_},{id:"placement",title:"向上展开",description:'placement="top" 适用于靠近视口底部的触发器；align 控制水平对齐。',demo:o_,code:s_,codeJs:a_}],api:[{id:"dropdown-api",title:"MDropdown",props:[{name:"items",type:"DropdownItem[]",defaultValue:"[]",description:"菜单项，每项包含 key / label / icon / disabled / danger / divided。"},{name:"modelValue",type:"boolean",defaultValue:"—",description:"受控开关；配合 v-model 使用。"},{name:"trigger",type:"'click' | 'manual'",defaultValue:"'click'",description:"触发方式；manual 禁用触发器点击。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留菜单并切换 display:none；unmount 销毁菜单。"},{name:"align",type:"'start' | 'center' | 'end'",defaultValue:"'start'",description:"菜单相对触发器的水平对齐方式。"},{name:"placement",type:"'top' | 'bottom'",defaultValue:"'bottom'",description:"菜单出现方向。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个菜单。"},{name:"minWidth",type:"number",defaultValue:"200",description:"菜单最小宽度（px）。"},{name:"closeOnSelect",type:"boolean",defaultValue:"true",description:"选择菜单项后是否自动关闭。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"菜单的无障碍名称。"}],events:[{name:"select",type:"(key: string, item: DropdownItem) => void",description:"选择可用菜单项时触发。"},{name:"update:modelValue",type:"(open: boolean) => void",description:"请求切换菜单；受控时由父级写回 modelValue 后才会真正打开或关闭。"},{name:"visible-change",type:"(open: boolean) => void",description:"菜单实际打开或关闭后触发；受控父级拒绝更新时不会触发。"}],slots:[{name:"default",type:"—",description:"触发器内容。"},{name:"item",type:"{ item: DropdownItem; index: number }",description:"自定义每个菜单项内部内容；外层按钮与键盘行为保留。"},{name:"empty",type:"—",description:"items 为空时的内容。"}]}],notes:["菜单项使用原生 button，Enter / Space 的激活行为由浏览器保证；item 插槽只替换内容，不改变外层语义。","展开后焦点进入第一个可用项；方向键循环移动，Home / End 跳到首尾。","Tab 会关闭菜单并把焦点还给触发器，避免焦点进入 body 末尾的 Teleport 容器。","禁用的菜单项不可聚焦、不可选择；divided 只影响视觉分隔。","菜单默认与触发器起始边对齐；触发器容器很宽时不会再按整块容器居中。","触发器离开视口后菜单会自动收起，不会停留在屏幕边缘。",'trigger="manual" 适合由选中项、路由或外部按钮控制的场景；不响应外部点击，仍可用 Escape、v-model 或实例的 open / close / toggle。',"受控模式下 update:modelValue 只表达请求；visible-change 反映父级接受后的真实菜单状态。",'hide-mode="display" 会保留菜单 DOM 与内部状态；默认 unmount 更节省 DOM。',"当前不支持子菜单、多级菜单与复选菜单。"]},i_={class:"demo-stack"},r_={class:"demo-row"},d_={class:"demo-hint"},u_=V({__name:"Basic",setup(e){const t=$n({name:"",email:""}),n={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{pattern:/^[^@\s]+@[^@\s]+\.[^@\s]+$/,message:"邮箱格式不正确",trigger:"blur"}]},o=O(null),s=O("");function a(l){s.value=l?"校验通过，可以提交。":"请先修正表单中的错误。"}return(l,i)=>(b(),M("div",i_,[m(d(Fo),{ref_key:"formRef",ref:o,model:t,rules:n,"aria-label":"账户信息",onSubmit:a},{default:g(()=>[m(d(sn),{prop:"name",label:"姓名",for:"form-name"},{default:g(()=>[m(d(Ne),{id:"form-name",modelValue:t.name,"onUpdate:modelValue":i[0]||(i[0]=r=>t.name=r),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),m(d(sn),{prop:"email",label:"邮箱",for:"form-email",hint:"用于接收通知"},{default:g(()=>[m(d(Ne),{id:"form-email",modelValue:t.email,"onUpdate:modelValue":i[1]||(i[1]=r=>t.email=r),placeholder:"name@example.com"},null,8,["modelValue"])]),_:1}),y("div",r_,[m(d(P),{type:"primary","native-type":"submit"},{default:g(()=>[...i[3]||(i[3]=[k("提交",-1)])]),_:1}),m(d(P),{type:"ghost",onClick:i[2]||(i[2]=r=>o.value?.resetFields())},{default:g(()=>[...i[4]||(i[4]=[k("重置",-1)])]),_:1})])]),_:1},8,["model"]),y("p",d_,H(s.value),1)]))}}),c_=`<script setup lang="ts">
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
`,m_=`<script setup>
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
`,p_={class:"demo-stack"},f_=V({__name:"Layout",setup(e){const t=$n({company:"",contact:""});return(n,o)=>(b(),M("div",p_,[m(d(Fo),{model:t,"label-position":"left","label-width":"88px","aria-label":"右侧标签表单"},{default:g(()=>[m(d(sn),{prop:"company",label:"公司",for:"form-company"},{default:g(()=>[m(d(Ne),{id:"form-company",modelValue:t.company,"onUpdate:modelValue":o[0]||(o[0]=s=>t.company=s),placeholder:"公司名称"},null,8,["modelValue"])]),_:1}),m(d(sn),{prop:"contact",label:"联系人",for:"form-contact",hint:"用于紧急联系"},{default:g(()=>[m(d(Ne),{id:"form-contact",modelValue:t.contact,"onUpdate:modelValue":o[1]||(o[1]=s=>t.contact=s),placeholder:"联系人姓名"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),m(d(Fo),{model:t,"label-position":"top",disabled:"","aria-label":"禁用表单"},{default:g(()=>[m(d(sn),{label:"公司"},{default:g(()=>[m(d(Ne),{"model-value":t.company,placeholder:"整张表单被禁用"},null,8,["model-value"])]),_:1}),m(d(sn),{label:"联系人"},{default:g(()=>[m(d(P),{disabled:""},{default:g(()=>[...o[2]||(o[2]=[k("不可点击",-1)])]),_:1})]),_:1})]),_:1},8,["model"])]))}}),v_=`<script setup lang="ts">
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
`,g_=`<script setup>
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
`,h_={class:"demo-stack"},b_={class:"demo-hint"},y_=V({__name:"Validation",setup(e){const t=$n({username:"",age:null}),n={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:12,message:"用户名需要 3–12 个字符",trigger:"blur"}],age:[{validator:l=>typeof l=="number"&&l>=18?!0:"必须年满 18 岁",trigger:["blur","change"]}]},o=O(null),s=O("");async function a(){const l=await o.value?.validate();s.value=l?"全部字段校验通过。":"仍有字段未通过校验。"}return(l,i)=>(b(),M("div",h_,[m(d(Fo),{ref_key:"formRef",ref:o,model:t,rules:n,"aria-label":"注册信息"},{default:g(()=>[m(d(sn),{prop:"username",label:"用户名",for:"form-username"},{default:g(()=>[m(d(Ne),{id:"form-username",modelValue:t.username,"onUpdate:modelValue":i[0]||(i[0]=r=>t.username=r),placeholder:"3–12 个字符"},null,8,["modelValue"])]),_:1}),m(d(sn),{prop:"age",label:"年龄",for:"form-age"},{default:g(()=>[m(d(Gn),{id:"form-age",modelValue:t.age,"onUpdate:modelValue":i[1]||(i[1]=r=>t.age=r),min:0,"aria-label":"年龄"},null,8,["modelValue"])]),_:1}),m(d(P),{type:"primary",onClick:a},{default:g(()=>[...i[2]||(i[2]=[k("校验表单",-1)])]),_:1})]),_:1},8,["model"]),y("p",b_,H(s.value),1)]))}}),M_=`<script setup lang="ts">
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
`,__=`<script setup>
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
`,w_={name:"form",category:"form",title:"Form 表单",summary:"表单上下文、字段布局与同步 / 异步校验，错误通过 aria-describedby 关联到控件。",description:"MForm 提供模型、规则、禁用状态与校验入口，MFormItem 负责标签、错误展示与字段注册。MInput、MTextarea、MNumberInput 与 MSelect 会自动读取 FormItem 上下文，继承禁用与错误状态，并把错误描述关联到原生控件。",status:"stable",since:"0.4.0",keywords:["form","表单","校验","formitem","rules"],sections:[{id:"basic",title:"基础用法",description:"model 持有数据，rules 按 prop 声明规则，提交时由 Form 统一校验。",demo:u_,code:c_,codeJs:m_},{id:"validation",title:"校验与错误",description:"支持 required、pattern、min / max、同步与异步 validator，以及字段级规则。",demo:y_,code:M_,codeJs:__},{id:"layout",title:"布局与禁用",description:"labelPosition 支持 top / left / right，labelWidth 控制标签宽度；disabled 向下传递。",demo:f_,code:v_,codeJs:g_}],api:[{id:"form-api",title:"MForm",props:[{name:"model",type:"Record<string, unknown>",defaultValue:"{}",description:"表单数据对象；字段通过 FormItem 的 prop 取值。"},{name:"rules",type:"FormRules",defaultValue:"{}",description:"按 prop 声明的校验规则。"},{name:"labelPosition",type:"'top' | 'left' | 'right'",defaultValue:"'top'",description:"标签位置；left / right 使用 labelWidth 控制列宽。"},{name:"labelWidth",type:"string",defaultValue:"96px",description:"left / right 布局下的标签宽度，可传任意 CSS 长度。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用表单内的输入类控件。"},{name:"showMessage",type:"boolean",defaultValue:"true",description:"为 false 时隐藏所有字段错误，但仍执行校验。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"form 元素的无障碍名称。"}],events:[{name:"submit",type:"(valid: boolean) => void",description:"原生提交被拦截后触发，参数为整体校验结果。"},{name:"validate",type:"(prop: string, valid: boolean, message: string) => void",description:"每个字段完成校验时触发。"}],slots:[{name:"default",type:"—",description:"FormItem 列表。"}]},{id:"form-item-api",title:"MFormItem",props:[{name:"prop",type:"string",defaultValue:"—",description:"对应 model 的字段名，支持点路径；省略时不自动校验。"},{name:"label",type:"string",defaultValue:"—",description:"字段标签。"},{name:"required",type:"boolean",defaultValue:"false",description:"仅用于显示必填星号；实际校验仍由规则决定。"},{name:"rules",type:"FormRule | FormRule[]",defaultValue:"—",description:"字段级规则，会与表单级同名字段规则合并。"},{name:"error",type:"string",defaultValue:"—",description:"外部控制的错误文本，优先级高于内部校验。"},{name:"hint",type:"string",defaultValue:"—",description:"没有错误时显示的帮助文本。"},{name:"labelWidth",type:"string",defaultValue:"—",description:"覆盖当前字段的标签宽度。"},{name:"for",type:"string",defaultValue:"—",description:"label 的 for 属性，应与控件 id 一致。"},{name:"showMessage",type:"boolean",defaultValue:"true",description:"为 false 时隐藏当前字段的错误。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用当前字段的输入类控件。"}],slots:[{name:"default",type:"—",description:"字段控件。"},{name:"label",type:"—",description:"自定义标签内容。"}]},{id:"form-rule-api",title:"FormRule",props:[{name:"required",type:"boolean",defaultValue:"false",description:"空值校验；空字符串、null、undefined 与空数组都会失败。"},{name:"message",type:"string",defaultValue:"—",description:"规则失败时的错误文本；省略时使用内置默认文案。"},{name:"pattern",type:"RegExp",defaultValue:"—",description:"字符串正则校验；空值会跳过该规则。"},{name:"min",type:"number",defaultValue:"—",description:"数字最小值，或字符串 / 数组的最小长度。"},{name:"max",type:"number",defaultValue:"—",description:"数字最大值，或字符串 / 数组的最大长度。"},{name:"validator",type:"(value, model) => boolean | string | void | Promise<...>",defaultValue:"—",description:"自定义校验；返回 false 使用 message，返回字符串则作为错误文本。"},{name:"trigger",type:"'blur' | 'change' | 'submit' | FormTrigger[]",defaultValue:"—",description:"限定触发时机；省略时在 blur / change / submit 都执行。"}]}],notes:["字段校验依赖 model 中的值；FormItem 省略 prop 时只负责展示，不会自动校验。","MInput、MTextarea、MNumberInput 与 MSelect 会自动继承 FormItem 的错误、禁用与 aria-describedby；显式传入的 props 优先。","blur 校验监听容器的 focusout，change 校验监听 input / change 事件并在下一个 tick 读取最新 model。","resetFields() 恢复挂载时的浅拷贝初始值，并清空所有错误；嵌套对象不会深拷贝。","validate() 返回 Promise<boolean>，不会抛出异常；异步 validator 抛错时按失败处理。","FormItem 的 label 不会自动生成控件 id，请通过 for 与控件 id 手动关联。"]},k_={class:"demo-stack"},x_={class:"demo-hint"},B_=V({__name:"Basic",setup(e){const t=O(""),n=O("anemia@example.com");return(o,s)=>(b(),M("div",k_,[m(d(Ne),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),placeholder:"请输入组件名称","aria-label":"组件名称",clearable:""},null,8,["modelValue"]),m(d(Ne),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),type:"email",placeholder:"邮箱地址","aria-label":"邮箱地址",clearable:""},null,8,["modelValue"]),y("p",x_,"name："+H(t.value||"（空）")+" · email："+H(n.value),1)]))}}),C_=`<script setup lang="ts">
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
`,T_=`<script setup>
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
`,$_={class:"demo-stack"},V_=V({__name:"Icons",setup(e){const t=O("anemia"),n=O("");return(o,s)=>(b(),M("div",$_,[m(d(Ne),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),"prefix-icon":"user",placeholder:"用户名","aria-label":"用户名",clearable:""},null,8,["modelValue"]),m(d(Ne),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),"suffix-icon":"mail",placeholder:"邮箱域名","aria-label":"邮箱域名"},null,8,["modelValue"]),m(d(Ne),{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=a=>n.value=a),placeholder:"自定义前后缀","aria-label":"自定义前后缀示例"},{prefix:g(()=>[m(d(St),{name:"search",size:16})]),suffix:g(()=>[...s[3]||(s[3]=[y("span",{class:"demo-suffix"},"必填",-1)])]),_:1},8,["modelValue"])]))}}),S_=ie(V_,[["__scopeId","data-v-5df69c7f"]]),I_=`<script setup lang="ts">
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
`,z_=`<script setup>
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
`,E_={class:"demo-stack"},A_=V({__name:"Password",setup(e){const t=O("anemia-ui");return(n,o)=>(b(),M("div",E_,[m(d(Ne),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),type:"password",placeholder:"请输入密码",clearable:"","aria-label":"密码"},null,8,["modelValue"]),o[1]||(o[1]=y("p",{class:"demo-hint"},"右侧眼睛按钮由组件内部实现，无需额外属性。",-1))]))}}),R_=`<script setup lang="ts">
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
`,D_=`<script setup>
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
`,P_={class:"demo-stack"},O_={class:"demo-hint"},L_=V({__name:"Search",setup(e){const t=O(""),n=O("");function o(s){n.value=s}return(s,a)=>(b(),M("div",P_,[m(d(Ne),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),type:"search",placeholder:"搜索组件…","aria-label":"搜索组件",clearable:"",onSearch:o},null,8,["modelValue"]),y("p",O_,H(n.value?`按 Enter 搜索：${n.value}`:"输入关键词后按 Enter 触发 search 事件"),1)]))}}),F_=`<script setup lang="ts">
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
`,N_=`<script setup>
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
`,J_={class:"demo-grid"},U_={class:"demo-field"},G_={class:"demo-field"},H_={class:"demo-field"},j_={class:"demo-field"},W_={class:"demo-field"},q_={class:"demo-field"},K_=V({__name:"States",setup(e){const t=O("Small"),n=O("Medium"),o=O("Large");return(s,a)=>(b(),M("div",J_,[y("div",U_,[a[3]||(a[3]=y("span",{class:"demo-label"},"small",-1)),m(d(Ne),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),size:"small",placeholder:"Small input","aria-label":"Small 尺寸示例"},null,8,["modelValue"])]),y("div",G_,[a[4]||(a[4]=y("span",{class:"demo-label"},"medium",-1)),m(d(Ne),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),size:"medium",placeholder:"Medium input","aria-label":"Medium 尺寸示例"},null,8,["modelValue"])]),y("div",H_,[a[5]||(a[5]=y("span",{class:"demo-label"},"large",-1)),m(d(Ne),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value=l),size:"large",placeholder:"Large input","aria-label":"Large 尺寸示例"},null,8,["modelValue"])]),y("div",j_,[a[6]||(a[6]=y("span",{class:"demo-label"},"disabled",-1)),m(d(Ne),{"model-value":"不可编辑",disabled:"","aria-label":"禁用示例"})]),y("div",W_,[a[7]||(a[7]=y("span",{class:"demo-label"},"readonly",-1)),m(d(Ne),{"model-value":"只读内容",readonly:"","aria-label":"只读示例"})]),y("div",q_,[a[8]||(a[8]=y("span",{class:"demo-label"},"error",-1)),m(d(Ne),{"model-value":"invalid@",error:"","error-message":"请输入有效的邮箱地址","aria-label":"错误状态示例",clearable:""})])]))}}),Q_=`<script setup lang="ts">
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
`,Y_=`<script setup>
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
`,X_={name:"input",category:"basic",title:"Input 输入框",summary:"支持文本、密码、搜索、前后缀图标、清除与错误状态，并遵循 v-model 规范。",description:"输入框负责收集单行文本。组件在原生 input 之上提供统一的尺寸、状态与可访问性处理；表单语义、键盘行为与输入事件仍然来自原生元素，避免重新实现一套输入行为。",status:"stable",since:"0.1.0",keywords:["input","输入框","搜索","密码","表单"],sections:[{id:"basic",title:"基础用法",description:"通过 v-model 双向绑定字符串值；clearable 在有内容时显示清除按钮。",demo:B_,code:C_,codeJs:T_},{id:"password",title:"密码输入",description:'type="password" 时自动提供显示/隐藏密码按钮，切换后仍保持光标位置与焦点。',demo:A_,code:R_,codeJs:D_},{id:"search",title:"搜索输入",description:'type="search" 会自动显示搜索图标；在输入框中按 Enter 触发 search 事件。',demo:L_,code:F_,codeJs:N_},{id:"icons",title:"图标与前后缀",description:"prefixIcon / suffixIcon 来自统一图标注册表；需要任意内容时使用 #prefix 与 #suffix 插槽。",demo:S_,code:I_,codeJs:z_},{id:"states",title:"尺寸与状态",description:"三种尺寸、禁用、只读与错误状态共享同一套 Token；错误信息通过 errorMessage 提供无障碍描述。",demo:K_,code:Q_,codeJs:Y_}],api:[{id:"input-api",title:"MInput",props:[{name:"modelValue",type:"string",defaultValue:"''",description:"绑定值，使用 v-model 更新。始终为字符串。"},{name:"type",type:"'text' | 'password' | 'search' | 'email' | 'tel' | 'url'",defaultValue:"'text'",description:"原生输入类型。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"输入框尺寸，对应 28px / 36px / 44px。"},{name:"placeholder",type:"string",defaultValue:"—",description:"占位文本。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用输入。"},{name:"readonly",type:"boolean",defaultValue:"false",description:"只读状态，保留焦点与选择能力。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"显示清除按钮。清除后会重新聚焦输入框。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误视觉状态，同时设置 aria-invalid。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误描述文本，会与输入框建立 aria-describedby 关联。"},{name:"prefixIcon",type:"IconName",defaultValue:"—",description:"前置图标。#prefix 插槽优先。"},{name:"suffixIcon",type:"IconName",defaultValue:"—",description:"后置图标。#suffix 插槽优先。"},{name:"maxlength",type:"number",defaultValue:"—",description:"最大输入长度。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"autocomplete",type:"string",defaultValue:"—",description:"原生 autocomplete 提示。"},{name:"id",type:"string",defaultValue:"—",description:"输入框 id，缺省时自动生成。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"在没有可见 label 时提供无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: string) => void",description:"输入值变化时触发，用于 v-model。"},{name:"input",type:"(value: string, event?: Event) => void",description:"原生 input 事件；清除按钮触发时 event 为空。"},{name:"change",type:"(value: string, event: Event) => void",description:"原生 change 事件。"},{name:"focus",type:"(event: FocusEvent) => void",description:"输入框获得焦点。"},{name:"blur",type:"(event: FocusEvent) => void",description:"输入框失去焦点。"},{name:"clear",type:"() => void",description:"用户点击清除按钮。"},{name:"search",type:"(value: string, event: KeyboardEvent) => void",description:'type="search" 时按 Enter 触发。'}],slots:[{name:"prefix",type:"—",description:"自定义前置内容，替代 prefixIcon。"},{name:"suffix",type:"—",description:"自定义后置内容，替代 suffixIcon。"}]}],notes:["modelValue 始终是字符串；需要数字时由使用方自行转换。","组件将未声明的属性透传给原生 <input>，因此 class 会落在输入元素而不是外层容器。","清除按钮会触发 update:modelValue、input 与 clear；input 事件没有原生 Event 参数。","search 只在按 Enter 时触发，输入过程中不会触发。","组件暴露 focus() / blur() / select() 方法，可通过模板 ref 调用。"]},Z_={class:"demo-row"},e0=V({__name:"Basic",setup(e){return(t,n)=>(b(),M("div",Z_,[m(d(P),{size:"small",onClick:n[0]||(n[0]=o=>d(Qe).success("已同步"))},{default:g(()=>[...n[4]||(n[4]=[k("成功",-1)])]),_:1}),m(d(P),{size:"small",onClick:n[1]||(n[1]=o=>d(Qe).info("正在刷新"))},{default:g(()=>[...n[5]||(n[5]=[k("信息",-1)])]),_:1}),m(d(P),{size:"small",type:"outline",onClick:n[2]||(n[2]=o=>d(Qe).warning("部分字段未保存"))},{default:g(()=>[...n[6]||(n[6]=[k(" 警告 ",-1)])]),_:1}),m(d(P),{size:"small",type:"danger",onClick:n[3]||(n[3]=o=>d(Qe).error("同步失败"))},{default:g(()=>[...n[7]||(n[7]=[k("错误",-1)])]),_:1})]))}}),t0=`<script setup lang="ts">
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
`,n0=`<script setup>
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
`,o0={class:"demo-row"},s0=V({__name:"Duration",setup(e){function t(){Qe.show({type:"warning",message:"这条消息不会自动关闭",persistent:!0})}return(n,o)=>(b(),M("div",o0,[m(d(P),{size:"small",onClick:t},{default:g(()=>[...o[3]||(o[3]=[k("常驻消息",-1)])]),_:1}),m(d(P),{size:"small",type:"outline",onClick:o[0]||(o[0]=s=>d(Qe).info("1.5 秒后关闭",{duration:1500}))},{default:g(()=>[...o[4]||(o[4]=[k(" 自定义时长 ",-1)])]),_:1}),m(d(P),{size:"small",type:"ghost",onClick:o[1]||(o[1]=s=>d(Qe).clear())},{default:g(()=>[...o[5]||(o[5]=[k("清除普通",-1)])]),_:1}),m(d(P),{size:"small",type:"ghost",onClick:o[2]||(o[2]=s=>d(Qe).clearPersistent())},{default:g(()=>[...o[6]||(o[6]=[k("清除常驻",-1)])]),_:1})]))}}),a0=`<script setup lang="ts">
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
`,l0=`<script setup>
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
`,i0={class:"demo-stack"},r0={class:"demo-row"},d0={class:"demo-hint"},u0=V({__name:"Limits",setup(e){const{messages:t,queuedMessages:n}=Md(),o=T(()=>t.value.filter(i=>!i.persistent).length);function s(){for(let i=0;i<10;i+=1)Qe.info(`并发消息 ${i+1}`,{duration:1800+i*400})}function a(){for(let i=0;i<25;i+=1)Qe.info(`边界消息 ${i+1}`,{duration:0})}function l(){Qe.error("紧急：同步失败，请立即检查",{duration:0,priority:"high"})}return(i,r)=>(b(),M("div",i0,[y("div",r0,[m(d(P),{size:"small",onClick:s},{default:g(()=>[...r[1]||(r[1]=[k("连续触发 10 条",-1)])]),_:1}),m(d(P),{size:"small",type:"outline",onClick:a},{default:g(()=>[...r[2]||(r[2]=[k("生成 25 条边界消息",-1)])]),_:1}),m(d(P),{size:"small",type:"danger",onClick:l},{default:g(()=>[...r[3]||(r[3]=[k("紧急错误插队",-1)])]),_:1}),m(d(P),{size:"small",type:"ghost",onClick:r[0]||(r[0]=c=>d(Qe).clear())},{default:g(()=>[...r[4]||(r[4]=[k("清空普通消息",-1)])]),_:1})]),y("p",d0," 当前显示 "+H(o.value)+" 条，等待 "+H(d(n).length)+" 条。默认最多同时显示 5 条，队列上限 20 条；每条关闭后才补充下一条。紧急错误通过 priority: 'high' 插队。 ",1)]))}}),c0=`<script setup lang="ts">
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
`,m0=`<script setup>
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
`,p0={class:"demo-stack"},f0={class:"demo-row"},v0={class:"demo-hint"},g0=V({__name:"Persistent",setup(e){const{messages:t}=Md(),n=T(()=>t.value.filter(i=>i.persistent).length),o=T(()=>[...t.value].reverse().find(i=>i.persistent));let s=0;function a(){s+=1,Qe.show({type:"warning",message:`网络已断开，恢复后将自动提示（${s}）`,persistent:!0})}function l(){o.value&&Qe.destroy(o.value.id)}return(i,r)=>(b(),M("div",p0,[y("div",f0,[m(d(P),{size:"small",onClick:a},{default:g(()=>[...r[1]||(r[1]=[k("新增常驻消息",-1)])]),_:1}),m(d(P),{size:"small",type:"outline",onClick:l},{default:g(()=>[...r[2]||(r[2]=[k("关闭最近一条常驻",-1)])]),_:1}),m(d(P),{size:"small",type:"ghost",onClick:r[0]||(r[0]=c=>d(Qe).clearPersistent())},{default:g(()=>[...r[3]||(r[3]=[k(" 清除全部常驻 ",-1)])]),_:1})]),y("p",v0," 当前常驻消息："+H(n.value)+" 条。常驻消息不占用普通消息的 5 个名额，也不会自动消失。 ",1)]))}}),h0=`<script setup lang="ts">
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
`,b0=`<script setup>
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
`,y0={class:"demo-stack"},M0=V({__name:"Types",setup(e){function t(){Qe.success("校验通过"),Qe.info("已刷新缓存"),Qe.warning("请求被限流"),Qe.error("无法连接到服务器")}return(n,o)=>(b(),M("div",y0,[m(d(P),{size:"small",onClick:t},{default:g(()=>[...o[0]||(o[0]=[k("连续显示四种类型",-1)])]),_:1}),o[1]||(o[1]=y("p",{class:"demo-hint"}," 500ms 内相同类型、相同内容的消息只保留一条；最多同时显示 5 条，其余消息排队等待，每条关闭后才补充下一条。 ",-1))]))}}),_0=`<script setup lang="ts">
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
`,w0=`<script setup>
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
`,k0={name:"message",category:"feedback",title:"Message 消息",summary:"顶部居中的短状态提示，通过命令式 API 触发，适合确认与轻量结果反馈。",description:"Message 与 Toast 共用同一套队列与计时基础设施，但视觉与定位不同：Message 是顶部居中的单行提示，只承载短文本。它默认最多同时显示 5 条，其余消息进入等待队列；每关闭一条才补充下一条，等待期间不会开始倒计时。500ms 内相同类型、相同内容的消息会被合并，常驻消息则不占用普通消息的展示名额。它的定位是“确认已经发生的事”，而不是承载可操作内容。",status:"stable",since:"0.4.0",keywords:["message","消息","提示","顶部","反馈"],sections:[{id:"basic",title:"基础用法",description:"在应用外壳挂载一次 <MMessage />，然后调用 message.success() 等方法。",demo:e0,code:t0,codeJs:n0},{id:"types",title:"四种类型",description:"success / info / warning / error 使用不同图标与语义角色；短时间重复触发会合并为一条。",demo:M0,code:_0,codeJs:w0},{id:"limits",title:"队列与优先级",description:'默认最多同时显示 5 条，其余消息排队等待；每关闭或自动消失一条，下一条才进入展示区。内存队列上限 20 条。priority: "high" 可让错误、警告等紧急消息插到普通等待消息之前；展示区已满时，原本第 5 条普通消息退回等待队列，不会被丢弃。',demo:u0,code:c0,codeJs:m0},{id:"persistent",title:"常驻消息",description:"persistent: true 的消息不会自动消失，也不占用普通消息的 5 个展示名额；必须通过 destroy(id) 或 clearPersistent() 手动清除。",demo:g0,code:h0,codeJs:b0},{id:"duration",title:"时长与清除",description:"duration 控制自动关闭时间；message.clear() 只清空普通消息，clearPersistent() 清空常驻消息。",demo:s0,code:a0,codeJs:l0}],api:[{id:"message-host-api",title:"MMessage",props:[]},{id:"message-options",title:"MessageOptions",props:[{name:"type",type:"'success' | 'info' | 'warning' | 'error'",defaultValue:"'info'",description:"消息类型，决定图标、语义角色与颜色。"},{name:"message",type:"string",defaultValue:"—",description:"纯文本内容；不支持 HTML 或富内容。"},{name:"duration",type:"number",defaultValue:"3000",description:"自动关闭时间（ms）。0 表示不自动关闭，但仍计入普通消息展示名额；等待中的消息进入展示区后才开始计时。"},{name:"persistent",type:"boolean",defaultValue:"false",description:"设为 true 后不自动关闭，也不占用普通消息的 5 个名额。"},{name:"priority",type:"'normal' | 'high'",defaultValue:"'normal'",description:"high 会插到普通等待消息之前；展示区已满时，原本第 5 条普通消息退回等待队列，稍后再显示。"},{name:"onClose",type:"() => void",defaultValue:"—",description:"消息从队列移除时调用一次，包含自动关闭、手动关闭与清除。"}]},{id:"message-api",title:"message / useMessage",props:[{name:"message.show",type:"(options: MessageOptions | string) => number",defaultValue:"—",description:"入队一条消息并返回 id；字符串等价于 { message }。队列已满且全是常驻消息时返回 0。"},{name:"message.success",type:"(text: string, options?: MessageShortcutOptions) => number",defaultValue:"—",description:"成功消息；info / warning / error 签名相同。"},{name:"message.destroy",type:"(id: number) => void",defaultValue:"—",description:"关闭指定消息；message.close 是同一方法的别名。"},{name:"message.clear",type:"() => void",defaultValue:"—",description:"立即清空所有普通消息（含等待中）并取消对应计时器，保留常驻消息。"},{name:"message.clearPersistent",type:"() => void",defaultValue:"—",description:"立即清空所有常驻消息。"},{name:"message.clearAll",type:"() => void",defaultValue:"—",description:"同时清空普通消息与常驻消息。"},{name:"message.configure",type:"(options: MessageConfig) => void",defaultValue:"—",description:"全局调整 maxCount（默认 5）、maxQueue（默认 20）与默认 duration（默认 3000）。"},{name:"useMessage().messages",type:"Readonly<Ref<MessageItem[]>>",defaultValue:"—",description:"当前显示在页面上的消息，包含常驻消息，不包含等待中的普通消息。"},{name:"useMessage().queuedMessages",type:"Readonly<Ref<MessageItem[]>>",defaultValue:"—",description:"正在等待展示名额的普通消息；它们的自动关闭计时尚未开始。"},{name:"useMessage",type:"() => UseMessageReturn",defaultValue:"—",description:"返回响应式 messages、queuedMessages 与同一组快捷方法。"}]}],notes:["必须在应用外壳挂载一次 <MMessage />；与 Toast 是两个独立队列，可以同时使用。","默认最多同时显示 5 条，其余普通消息进入等待队列；每关闭或自动消失一条，下一条才进入展示区。","等待中的消息不会开始倒计时，进入展示区后才按 duration 计时，因此不会还没显示就过期。","内存队列上限为 20 条（含显示中与等待中）；达到上限时优先移除最早的等待消息，若没有等待消息则移除最早的显示消息。",'priority: "high" 会插到普通等待消息之前；展示区已满时，原本第 5 条普通消息退回等待队列，稍后继续显示。',"500ms 内相同类型、相同内容的消息只保留一条，并刷新它的倒计时，避免狂点造成消息堆积。","常驻消息（persistent: true）不占用普通消息的 5 个名额，必须使用 message.destroy(id) 或 message.clearPersistent() 手动清理。","message.clear() 清空所有普通消息（含等待中）；需要同时清理常驻消息时使用 message.clearAll()。","队列已满且全部是常驻消息时，新消息会被丢弃，并在开发环境控制台给出警告。",'error 使用 role="alert"，其余使用 role="status"；顶部居中定位在小屏幕上仍会限制在视口内。',"消息移动、进入与离开都使用 transform / opacity 过渡，并遵循 prefers-reduced-motion。"]},x0={class:"demo-stack"},B0={class:"demo-row"},C0=V({__name:"Basic",setup(e){const t=O(!1);return(n,o)=>(b(),M("div",x0,[y("div",B0,[m(d(P),{onClick:o[0]||(o[0]=s=>t.value=!0)},{default:g(()=>[...o[2]||(o[2]=[k("打开对话框",-1)])]),_:1})]),o[4]||(o[4]=y("p",{class:"demo-hint"},"按 Esc、点击关闭按钮或遮罩都可以关闭；关闭后焦点会回到触发按钮。",-1)),m(d(po),{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value=s),title:"发布更新"},{default:g(()=>[...o[3]||(o[3]=[y("p",null,"对话框会锁定页面滚动，把键盘焦点限制在面板内，并在关闭时归还焦点。",-1),y("p",null,"按 Esc 或点击右上角关闭按钮即可关闭。",-1)])]),_:1},8,["modelValue"])]))}}),T0=`<script setup lang="ts">
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
`,$0=`<script setup>
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
`,V0={class:"demo-stack"},S0={class:"demo-row"},I0=V({__name:"Footer",setup(e){const t=O(!1);function n(){t.value=!1}return(o,s)=>(b(),M("div",V0,[y("div",S0,[m(d(P),{type:"danger",onClick:s[0]||(s[0]=a=>t.value=!0)},{default:g(()=>[...s[3]||(s[3]=[k("删除项目",-1)])]),_:1})]),m(d(po),{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=a=>t.value=a),title:"确认删除"},{footer:g(()=>[m(d(P),{type:"ghost",onClick:s[1]||(s[1]=a=>t.value=!1)},{default:g(()=>[...s[4]||(s[4]=[k("取消",-1)])]),_:1}),m(d(P),{type:"danger",onClick:n},{default:g(()=>[...s[5]||(s[5]=[k("删除",-1)])]),_:1})]),default:g(()=>[s[6]||(s[6]=y("p",null,"删除后无法恢复，确定继续吗？",-1)),s[7]||(s[7]=y("p",null,"建议把主要操作放在页脚右侧，并使用明确的动词。",-1))]),_:1},8,["modelValue"])]))}}),z0=`<script setup lang="ts">
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
`,E0=`<script setup>
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
`,A0={class:"demo-stack"},R0=V({__name:"HideMode",setup(e){const t=O(!1),n=O("");return(o,s)=>(b(),M("div",A0,[m(d(P),{size:"small",onClick:s[0]||(s[0]=a=>t.value=!0)},{default:g(()=>[...s[4]||(s[4]=[k("打开并输入",-1)])]),_:1}),m(d(po),{modelValue:t.value,"onUpdate:modelValue":s[3]||(s[3]=a=>t.value=a),"hide-mode":"display",title:"保留内部状态"},{footer:g(()=>[m(d(P),{size:"small",onClick:s[2]||(s[2]=a=>t.value=!1)},{default:g(()=>[...s[5]||(s[5]=[k("关闭",-1)])]),_:1})]),default:g(()=>[s[6]||(s[6]=y("p",{class:"demo-hint"},"关闭后再次打开，下面的输入内容仍然保留。",-1)),m(d(Ne),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),placeholder:"输入一些内容后关闭对话框"},null,8,["modelValue"])]),_:1},8,["modelValue"])]))}}),D0=`<script setup lang="ts">
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
`,P0=`<script setup>
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
`,O0={class:"demo-stack"},L0={class:"demo-row"},F0=V({__name:"Locked",setup(e){const t=O(!1);return(n,o)=>(b(),M("div",O0,[y("div",L0,[m(d(P),{onClick:o[0]||(o[0]=s=>t.value=!0)},{default:g(()=>[...o[3]||(o[3]=[k("打开不可关闭对话框",-1)])]),_:1})]),m(d(po),{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value=s),title:"完成初始化",closable:!1,"mask-closable":!1},{footer:g(()=>[m(d(P),{onClick:o[1]||(o[1]=s=>t.value=!1)},{default:g(()=>[...o[4]||(o[4]=[k("我已了解",-1)])]),_:1})]),default:g(()=>[o[5]||(o[5]=y("p",null,"closable 为 false 时隐藏关闭按钮并禁用 Esc；mask-closable 为 false 时点击遮罩不会关闭。",-1)),o[6]||(o[6]=y("p",null,"这种对话框需要用户明确完成页脚中的操作，因此必须自行提供退出路径。",-1))]),_:1},8,["modelValue"])]))}}),N0=`<script setup lang="ts">
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
`,J0=`<script setup>
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
`,U0={class:"demo-stack"},G0={class:"demo-row"},H0=V({__name:"Sizes",setup(e){const t=O(!1),n=O("medium"),o=["small","medium","large"];function s(a){n.value=a,t.value=!0}return(a,l)=>(b(),M("div",U0,[y("div",G0,[(b(),M(le,null,Le(o,i=>m(d(P),{key:i,type:"outline",onClick:r=>s(i)},{default:g(()=>[k(H(i),1)]),_:2},1032,["onClick"])),64))]),m(d(po),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),size:n.value,title:`${n.value} 对话框`},{default:g(()=>[...l[1]||(l[1]=[y("p",null,"尺寸只影响面板的最大宽度，移动端仍然保持 100% 宽度与安全边距。",-1)])]),_:1},8,["modelValue","size","title"])]))}}),j0=`<script setup lang="ts">
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
`,W0=`<script setup>
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
`,q0={name:"modal",category:"overlay",title:"Modal 对话框",summary:"带遮罩的模态对话框，内置焦点限制、焦点归还、滚动锁定与层级管理。",description:"对话框用于承载需要用户专注处理的短流程。MModal 由统一的 Overlay 基础设施驱动：所有浮层共享层级栈、Escape 归属、滚动锁定与焦点管理，因此嵌套对话框时只有最上层响应关闭操作。",status:"stable",since:"0.2.0",keywords:["modal","dialog","对话框","弹窗","焦点","overlay"],sections:[{id:"basic",title:"基础用法",description:"v-model 控制显隐；默认支持 Esc、关闭按钮与遮罩关闭，并把焦点归还给触发元素。",demo:C0,code:T0,codeJs:$0},{id:"footer",title:"页脚操作",description:"footer 插槽用于放置取消与确认操作，建议主要操作位于右侧并使用动词。",demo:I0,code:z0,codeJs:E0},{id:"sizes",title:"尺寸",description:"small / medium / large 只改变面板最大宽度，移动端始终保持安全边距。",demo:H0,code:j0,codeJs:W0},{id:"locked",title:"受控关闭",description:"closable 控制关闭按钮与 Esc，maskClosable 控制遮罩；关闭时必须由业务提供明确的退出路径。",demo:F0,code:N0,codeJs:J0},{id:"hide-mode",title:"保留内部状态",description:'hide-mode="display" 关闭后保留 DOM 与表单状态；默认 unmount 会销毁内容并在下次打开时重建。',demo:R0,code:D0,codeJs:P0}],api:[{id:"modal-api",title:"MModal",props:[{name:"modelValue",type:"boolean",defaultValue:"false",description:"对话框是否可见，用于 v-model。"},{name:"title",type:"string",defaultValue:"—",description:"标题文本；默认插槽 header 存在时不渲染。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"面板最大宽度档位。"},{name:"closable",type:"boolean",defaultValue:"true",description:"显示关闭按钮，并允许 Esc 关闭。"},{name:"maskClosable",type:"boolean",defaultValue:"true",description:"允许按下遮罩关闭。"},{name:"lockScroll",type:"boolean",defaultValue:"true",description:"打开时锁定 body 滚动，关闭时恢复。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留对话框并切换 display:none；unmount 销毁子树。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有 title 或使用自定义 header 时的无障碍名称。"},{name:"id",type:"string",defaultValue:"—",description:"对话框面板 id。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求关闭时触发，用于 v-model。"},{name:"close",type:"(reason: 'close-button' | 'mask' | 'escape', nativeEvent?: Event) => void",description:"关闭请求的来源说明。"},{name:"opened",type:"() => void",description:"进入过渡结束后触发。"},{name:"closed",type:"() => void",description:"离开过渡结束后触发。"}],slots:[{name:"default",type:"—",description:"对话框正文。"},{name:"header",type:"—",description:"自定义头部；提供时请同时提供 ariaLabel。"},{name:"footer",type:"—",description:"页脚操作区。"}]}],notes:["对话框通过 Teleport 渲染到 body，因此不会受到父级 overflow 或 transform 的裁剪。","组件是受控的：收到关闭请求时只发出 update:modelValue 与 close，是否关闭由父级决定。","打开时焦点进入面板，Tab / Shift+Tab 被限制在面板内；关闭后焦点归还给打开前的元素。","同一时间只有最上层的 Overlay 响应 Esc 与外部点击，嵌套对话框不会被一次关闭两个。","closable 为 false 时必须自行提供关闭入口，否则键盘用户无法退出。","自定义 header 时默认标题不再渲染，请通过 ariaLabel 提供可访问名称。",'hide-mode="display" 适合需要保留表单输入或滚动位置的对话框；默认 unmount 会销毁内部状态。']},K0={class:"demo-stack"},Q0={class:"demo-hint"},Y0=V({__name:"Basic",setup(e){const t=O(1);return(n,o)=>(b(),M("div",K0,[m(d(Gn),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),min:1,max:20,"aria-label":"商品数量",placeholder:"请输入数量"},null,8,["modelValue"]),y("p",Q0,"当前数量："+H(t.value??"空")+"。达到上下限后对应按钮会被禁用。",1)]))}}),X0=`<script setup lang="ts">
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
`,Z0=`<script setup>
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
`,ew={class:"demo-stack"},tw={class:"demo-hint"},nw=V({__name:"Precision",setup(e){const t=O(9.9);return(n,o)=>(b(),M("div",ew,[m(d(Gn),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),min:0,step:.01,precision:2,"aria-label":"价格",placeholder:"0.00"},null,8,["modelValue"]),y("p",tw," 当前价格："+H(t.value??"空")+"。步进与展示都按两位小数处理，避免浮点误差。 ",1)]))}}),ow=`<script setup lang="ts">
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
`,sw=`<script setup>
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
`,aw={class:"demo-stack"},lw=V({__name:"States",setup(e){const t=O(30),n=O(3),o=O(5);return(s,a)=>(b(),M("div",aw,[m(d(Gn),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),max:10,"error-message":"数量不能超过 10","aria-label":"错误示例"},null,8,["modelValue"]),m(d(Gn),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),disabled:"","aria-label":"禁用示例"},null,8,["modelValue"]),m(d(Gn),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value=l),readonly:"","aria-label":"只读示例"},null,8,["modelValue"])]))}}),iw=`<script setup lang="ts">
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
`,rw=`<script setup>
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
`,dw={name:"number-input",category:"basic",title:"NumberInput 数字输入",summary:"输入数字，支持步进、上下限、精度、键盘调整、错误状态与空值。",description:'数字输入用于收集数值。组件在文本输入之上提供数值解析、步进、范围限制与精度处理，并通过 role="spinbutton" 暴露可访问的数值语义；空值使用 null 表示。',status:"stable",since:"0.3.0",keywords:["number","number-input","数字","步进","spinbutton","表单"],sections:[{id:"basic",title:"基础用法",description:"v-model 绑定 number | null，通过 min / max 限制范围。",demo:Y0,code:X0,codeJs:Z0},{id:"precision",title:"步进与精度",description:"precision 省略时从 step 推导；步进与失焦都按精度取整，避免浮点误差。",demo:nw,code:ow,codeJs:sw},{id:"states",title:"错误、禁用与只读",description:"errorMessage 同时设置 aria-invalid 与 aria-describedby；禁用阻止交互，只读仍可聚焦与复制。",demo:lw,code:iw,codeJs:rw}],api:[{id:"number-input-api",title:"MNumberInput",props:[{name:"modelValue",type:"number | null",defaultValue:"null",description:"绑定的数值；null 表示空值。"},{name:"min",type:"number",defaultValue:"—",description:"允许的最小值，失焦与步进时生效。"},{name:"max",type:"number",defaultValue:"—",description:"允许的最大值，失焦与步进时生效。"},{name:"step",type:"number",defaultValue:"1",description:"按钮与方向键的步进值。"},{name:"precision",type:"number",defaultValue:"从 step 推导",description:"展示与取整的小数位数，最大 20。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"尺寸档位。"},{name:"placeholder",type:"string",defaultValue:"—",description:"占位文本。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态，阻止输入、步进与 v-model 更新。"},{name:"readonly",type:"boolean",defaultValue:"false",description:"只读状态，允许聚焦与复制但不接受修改。"},{name:"controls",type:"boolean",defaultValue:"true",description:"是否显示增加 / 减少按钮。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误视觉状态。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误说明，同时用于 aria-describedby。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"id",type:"string",defaultValue:"—",description:"原生 input id，缺省时自动生成。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有可见标签时的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: number | null) => void",description:"输入、步进或清空时触发，用于 v-model。"},{name:"change",type:"(value: number | null, nativeEvent?: Event) => void",description:"失焦并完成规范化后触发。"},{name:"focus",type:"(nativeEvent: FocusEvent) => void",description:"聚焦时触发。"},{name:"blur",type:"(nativeEvent: FocusEvent) => void",description:"失焦时触发。"}]}],notes:["空值统一使用 null，而不是空字符串或 0；父级需要自己决定空值的业务含义。","输入过程中允许中间态（例如负号、小数点），失焦时才会取整并夹取到 min / max。","precision 省略时由 step 的小数位推导，例如 step=0.01 对应两位小数。",'role="spinbutton" 与 aria-valuenow / min / max 由组件提供；没有可见标签时请传 ariaLabel。',"当前不提供千分位、本地化数字格式或长按连续步进；这些属于后续输入增强。"]},uw={class:"demo-row",style:{"margin-top":"12px"}},cw=V({__name:"Basic",setup(e){return(t,n)=>(b(),ye(d(ao),{title:"筛选条件","aria-label":"筛选条件"},{trigger:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[0]||(n[0]=[k("打开筛选",-1)])]),_:1})]),default:g(()=>[n[3]||(n[3]=y("p",null,"当前只显示最近 7 天的记录。",-1)),y("div",uw,[m(d(Ye),{size:"small"},{default:g(()=>[...n[1]||(n[1]=[k("近 7 天",-1)])]),_:1}),m(d(Ye),{size:"small",type:"success"},{default:g(()=>[...n[2]||(n[2]=[k("已启用",-1)])]),_:1})])]),_:1}))}}),mw=`<script setup lang="ts">
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
`,pw=`<script setup>
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
`,fw=V({__name:"Hover",setup(e){return(t,n)=>(b(),ye(d(ao),{trigger:"hover",placement:"bottom",title:"悬停打开","aria-label":"悬停浮层"},{trigger:g(()=>[m(d(P),{size:"small",type:"ghost"},{default:g(()=>[...n[0]||(n[0]=[k("悬停查看",-1)])]),_:1})]),default:g(()=>[n[1]||(n[1]=y("p",null,"移入触发器打开，移出后短暂延迟关闭；移入浮层会保持打开。",-1))]),_:1}))}}),vw=`<script setup lang="ts">
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
`,gw=`<script setup>
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
`,hw={class:"demo-stack"},bw=V({__name:"Manual",setup(e){const t=O(!1);return(n,o)=>(b(),M("div",hw,[m(d(ao),{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value=s),trigger:"manual",title:"受控气泡","hide-mode":"display"},{trigger:g(()=>[m(d(P),{type:"outline",size:"small"},{default:g(()=>[...o[3]||(o[3]=[k("触发器（不自动打开）",-1)])]),_:1})]),footer:g(()=>[m(d(P),{size:"small",onClick:o[0]||(o[0]=s=>t.value=!1)},{default:g(()=>[...o[4]||(o[4]=[k("知道了",-1)])]),_:1})]),default:g(()=>[o[5]||(o[5]=y("p",{class:"demo-hint"},"打开状态完全由外部按钮控制，Escape 仍会请求关闭。",-1))]),_:1},8,["modelValue"]),m(d(P),{size:"small",onClick:o[2]||(o[2]=s=>t.value=!t.value)},{default:g(()=>[k(H(t.value?"关闭气泡":"打开气泡"),1)]),_:1})]))}}),yw=`<script setup lang="ts">
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
`,Mw=`<script setup>
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
`,_w={class:"demo-row"},ww=V({__name:"Placement",setup(e){return(t,n)=>(b(),M("div",_w,[m(d(ao),{placement:"top",title:"上方浮层",width:200,"aria-label":"上方浮层"},{trigger:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[0]||(n[0]=[k("top",-1)])]),_:1})]),default:g(()=>[n[1]||(n[1]=y("p",null,"优先出现在触发器上方，空间不足时自动翻转。",-1))]),_:1}),m(d(ao),{placement:"right",title:"右侧浮层",width:220,"aria-label":"右侧浮层"},{trigger:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[2]||(n[2]=[k("right",-1)])]),_:1})]),default:g(()=>[n[3]||(n[3]=y("p",null,"浮层会保持在视口内，并随滚动重新定位。",-1))]),_:1})]))}}),kw=`<script setup lang="ts">
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
`,xw=`<script setup>
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
`,Bw={name:"popover",category:"overlay",title:"Popover 气泡卡片",summary:"承载交互内容的浮层卡片，支持点击、悬停或代码控制，并管理焦点与关闭行为。",description:"Popover 用于承载按钮、说明与轻量表单等交互内容。点击触发时由统一的 Overlay 管理 Escape、点击外部与焦点归还；键盘激活会把焦点移入面板，确保内容可继续操作。manual 模式适合由外部状态驱动的复杂交互。",status:"stable",since:"0.4.0",keywords:["popover","气泡","浮层","卡片","交互"],sections:[{id:"basic",title:"基础用法",description:"trigger 插槽定义触发器，默认插槽是浮层内容。",demo:cw,code:mw,codeJs:pw},{id:"placement",title:"出现方向",description:"placement 是期望方向，视口空间不足时会自动翻转。",demo:ww,code:kw,codeJs:xw},{id:"hover",title:"悬停触发",description:'trigger="hover" 时移入打开、移出后延迟关闭，移入浮层会保持打开。',demo:fw,code:vw,codeJs:gw},{id:"manual",title:"受控与页脚",description:'trigger="manual" 不绑定自动事件，v-model 控制开关；footer 插槽放置操作按钮。',demo:bw,code:yw,codeJs:Mw}],api:[{id:"popover-api",title:"MPopover",props:[{name:"modelValue",type:"boolean",defaultValue:"—",description:"可选受控状态；不传时组件自行管理开关。"},{name:"trigger",type:"'click' | 'hover' | 'manual'",defaultValue:"'click'",description:"打开方式；manual 禁用全部自动事件。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留面板并切换 display:none；unmount 销毁面板。"},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",defaultValue:"'bottom'",description:"期望出现方向，空间不足时自动翻转。"},{name:"title",type:"string",defaultValue:"—",description:"面板标题；title 插槽优先。"},{name:"width",type:"number | string",defaultValue:"280",description:"面板宽度；数字按 px 处理。"},{name:"offset",type:"number",defaultValue:"8",description:"触发器与面板之间的间距（px）。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用浮层。"},{name:"closeOnOutside",type:"boolean",defaultValue:"true",description:"点击面板外部时关闭。"},{name:"showArrow",type:"boolean",defaultValue:"true",description:"显示指向触发器的小箭头。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有 title 时的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求切换开关；受控时由父级写回 modelValue 后才会真正打开或关闭。"},{name:"open",type:"() => void",description:"面板实际打开后触发；受控父级拒绝更新时不会触发。"},{name:"close",type:"() => void",description:"面板实际关闭后触发；受控父级拒绝更新时不会触发。"}],slots:[{name:"trigger",type:"—",description:"触发器内容。"},{name:"default",type:"—",description:"面板内容。"},{name:"title",type:"—",description:"自定义标题。"},{name:"footer",type:"—",description:"面板底部操作区。"}]}],notes:["点击触发时，面板打开后可通过 Tab 访问内部内容；键盘激活会把焦点直接移入面板。","Escape 关闭面板并把焦点还给触发器；点击外部关闭不会强制移动焦点。",'trigger="manual" 不监听点击或悬停，适合由选中项、路由或外部按钮驱动的场景。',"受控模式下 update:modelValue 只表达请求；open / close 反映父级接受后的真实可见状态。",'hide-mode="display" 会保留面板 DOM 与内部状态，适合高频开关；默认 unmount 更节省 DOM。',"悬停模式只是便捷交互，触屏或键盘用户仍建议使用 click。","面板通过 Teleport 渲染到 body，并随滚动、窗口尺寸变化重新定位；触发器离开视口时自动关闭。","箭头位置基于翻转后的方向，不做逐像素偏移；需要复杂定位时请评估专用定位库。"]},Cw={class:"demo-stack"},Tw={class:"demo-hint"},$w=V({__name:"Basic",setup(e){const t=O("standard");return(n,o)=>(b(),M("div",Cw,[m(d(No),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),"aria-label":"套餐选择"},{default:g(()=>[m(d(nn),{value:"standard",label:"Standard · 基础功能"}),m(d(nn),{value:"pro",label:"Pro · 团队协作"}),m(d(nn),{value:"team",label:"Team · 完整权限"})]),_:1},8,["modelValue"]),y("p",Tw,"当前选择："+H(t.value),1)]))}}),Vw=`<script setup lang="ts">
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
`,Sw=`<script setup>
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
`,Iw={class:"demo-stack"},zw={class:"demo-hint"},Ew=V({__name:"Options",setup(e){const t=O("weekly"),n=[{label:"每天",value:"daily"},{label:"每周",value:"weekly"},{label:"每月",value:"monthly"}];return(o,s)=>(b(),M("div",Iw,[m(d(No),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),options:n,direction:"horizontal","aria-label":"更新频率"},null,8,["modelValue"]),y("p",zw,"选择结果："+H(t.value),1)]))}}),Aw=`<script setup lang="ts">
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
`,Rw=`<script setup>
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
`,Dw={class:"demo-stack"},Pw={class:"demo-field"},Ow={class:"demo-field"},Lw=V({__name:"States",setup(e){const t=O("medium"),n=O("design");return(o,s)=>(b(),M("div",Dw,[y("div",Pw,[s[2]||(s[2]=y("span",{class:"demo-label"},"尺寸：small",-1)),m(d(No),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),size:"small",direction:"horizontal","aria-label":"组件尺寸"},{default:g(()=>[m(d(nn),{value:"small",label:"Small"}),m(d(nn),{value:"medium",label:"Medium"}),m(d(nn),{value:"large",label:"Large"})]),_:1},8,["modelValue"])]),y("div",Ow,[s[3]||(s[3]=y("span",{class:"demo-label"},"禁用整组",-1)),m(d(No),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),disabled:"",direction:"horizontal","aria-label":"禁用示例"},{default:g(()=>[m(d(nn),{value:"design",label:"设计"}),m(d(nn),{value:"code",label:"开发"})]),_:1},8,["modelValue"])])]))}}),Fw=`<script setup lang="ts">
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
`,Nw=`<script setup>
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
`,Jw={name:"radio",category:"basic",title:"Radio 单选框",summary:"原生语义的单选按钮与单选组，共享名称、键盘方向键、尺寸与禁用状态。",description:'单选框用于在一组互斥选项中选择一个值。MRadio 保留原生 input[type="radio"] 的语义与键盘行为，MRadioGroup 负责提供共享 name、组级禁用与尺寸，并维护单一选中值。',status:"stable",since:"0.2.0",keywords:["radio","单选框","单选","group","选项"],sections:[{id:"basic",title:"基础用法",description:"在 MRadioGroup 中放置带 value 的 MRadio，通过 v-model 绑定选中值。",demo:$w,code:Vw,codeJs:Sw},{id:"options",title:"options 快速渲染",description:"选项较多时可传入 options，direction 控制纵向或横向排列。",demo:Ew,code:Aw,codeJs:Rw},{id:"states",title:"尺寸与禁用",description:"size 会向下传递给组内选项；disabled 会同时禁用键盘与指针交互，并保留可读的视觉状态。",demo:Lw,code:Fw,codeJs:Nw}],api:[{id:"radio-api",title:"MRadio",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"独立使用时的选中值；在 MRadioGroup 内会被忽略。"},{name:"value",type:"string | number",defaultValue:"—",description:"当前选项的值；在组内必填。"},{name:"label",type:"string",defaultValue:"—",description:"可见标签文本；默认插槽优先。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态；组内会继承组的 disabled。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"单选框尺寸；组内使用组的尺寸。"},{name:"name",type:"string",defaultValue:"—",description:"原生 name；组内由组统一提供。"},{name:"id",type:"string",defaultValue:"—",description:"原生 input id，缺省时自动生成。"}],events:[{name:"update:modelValue",type:"(value: RadioValue) => void",description:"独立使用时的选中值变化；组内由组统一更新。"},{name:"change",type:"(value: RadioValue, nativeEvent: Event) => void",description:"选中该选项时触发。"}],slots:[{name:"default",type:"—",description:"自定义标签内容。"}]},{id:"radio-group-api",title:"MRadioGroup",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前选中的值。"},{name:"options",type:"RadioOption[]",defaultValue:"[]",description:"便捷渲染选项，每项包含 label / value / disabled。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个组，并向下传递。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"组内单选框尺寸。"},{name:"name",type:"string",defaultValue:"自动生成",description:"组内原生 radio 的共享 name，用于浏览器方向键切换。"},{name:"direction",type:"'vertical' | 'horizontal'",defaultValue:"'vertical'",description:"排列方向。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"组的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: RadioValue) => void",description:"选中项变化时触发，用于 v-model。"},{name:"change",type:"(value: RadioValue) => void",description:"选中项变化时触发。"}],slots:[{name:"default",type:"—",description:"自定义组内单选框。"}]}],notes:["组内必须为每个 MRadio 提供唯一的 value，否则无法与组的选中值比较。","组内不要给子单选框绑定 v-model；选中状态由组的 modelValue 派生。","组内所有原生 radio 共享同一个 name，因此浏览器会提供方向键切换与唯一选中语义。",'组容器使用 role="radiogroup"，请通过 ariaLabel 提供分组名称。','独立使用时同时绑定 modelValue 与 value，例如 <MRadio v-model="picked" value="a" />。']},Uw={class:"demo-stack"},Gw={class:"demo-hint"},Hw=V({__name:"Basic",setup(e){const t=O("day"),n=[{label:"日",value:"day"},{label:"周",value:"week"},{label:"月",value:"month"}];return(o,s)=>(b(),M("div",Uw,[m(d(Hn),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),options:n,"aria-label":"统计周期"},null,8,["modelValue"]),y("p",Gw,"当前视图："+H(t.value)+"。方向键可切换，Home / End 跳到首尾。",1)]))}}),jw=`<script setup lang="ts">
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
`,Ww=`<script setup>
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
`,qw={class:"demo-stack"},Kw=V({__name:"Disabled",setup(e){const t=O("edit"),n=O("view"),o=[{label:"编辑",value:"edit"},{label:"预览",value:"preview"},{label:"导出",value:"export",disabled:!0}];return(s,a)=>(b(),M("div",qw,[m(d(Hn),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),options:o,"aria-label":"编辑模式"},null,8,["modelValue"]),a[2]||(a[2]=y("p",{class:"demo-hint"},"「导出」被禁用，键盘导航会自动跳过它。",-1)),m(d(Hn),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),options:o.slice(0,2),disabled:"","aria-label":"只读模式"},null,8,["modelValue","options"]),a[3]||(a[3]=y("p",{class:"demo-hint"},"整组禁用后所有选项都不可操作。",-1))]))}}),Qw=`<script setup lang="ts">
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
`,Yw=`<script setup>
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
`,Xw={class:"demo-stack"},Zw={class:"demo-field"},ek={class:"demo-field"},tk={class:"demo-field"},nk=V({__name:"Sizes",setup(e){const t=O("list"),n=O("list"),o=O("list"),s=[{label:"列表",value:"list"},{label:"卡片",value:"grid"}];return(a,l)=>(b(),M("div",Xw,[y("div",Zw,[l[3]||(l[3]=y("span",{class:"demo-label"},"small",-1)),m(d(Hn),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),options:s,size:"small","aria-label":"小尺寸视图"},null,8,["modelValue"])]),y("div",ek,[l[4]||(l[4]=y("span",{class:"demo-label"},"medium",-1)),m(d(Hn),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=i=>n.value=i),options:s,"aria-label":"中尺寸视图"},null,8,["modelValue"])]),y("div",tk,[l[5]||(l[5]=y("span",{class:"demo-label"},"large",-1)),m(d(Hn),{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=i=>o.value=i),options:s,size:"large","aria-label":"大尺寸视图"},null,8,["modelValue"])])]))}}),ok=`<script setup lang="ts">
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
`,sk=`<script setup>
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
`,ak={name:"segmented-control",category:"basic",title:"SegmentedControl 分段控制器",summary:"在少量互斥选项之间切换，使用 radiogroup 语义并提供方向键导航。",description:'分段控制器适合 2–5 个短标签之间的单选切换。它使用 role="radiogroup" / role="radio" 语义，选中项可通过方向键、Home 与 End 切换；与 Tabs 不同，它表达的是选择一个值，而不是切换内容面板。',status:"stable",since:"0.4.0",keywords:["segmented","分段","切换","单选","radiogroup"],sections:[{id:"basic",title:"基础用法",description:"options 描述选项，v-model 绑定当前值。",demo:Hw,code:jw,codeJs:Ww},{id:"sizes",title:"尺寸",description:"尺寸只改变高度、字号与内边距，不改变键盘与选中行为。",demo:nk,code:ok,codeJs:sk},{id:"disabled",title:"禁用选项",description:"单个选项或整组都可以禁用，键盘导航会跳过禁用选项。",demo:Kw,code:Qw,codeJs:Yw}],api:[{id:"segmented-control-api",title:"MSegmentedControl",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前选中的值；为 null 时没有选中项。"},{name:"options",type:"SegmentedControlOption[]",defaultValue:"[]",description:"选项列表，每项包含 label / value / disabled / icon。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"控件尺寸。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整组控件。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"radiogroup 的无障碍名称。"},{name:"name",type:"string",defaultValue:"—",description:"传递给原生按钮的 name。"}],events:[{name:"update:modelValue",type:"(value: SegmentedControlValue) => void",description:"点击或键盘切换时触发，用于 v-model。"},{name:"change",type:"(value: SegmentedControlValue, option: SegmentedControlOption) => void",description:"选中项变化时触发。"}]}],notes:["适合 2–5 个短标签；选项更多或文案更长时使用 Select 或 Tabs。","如果 modelValue 不在 options 中，控件不会自行改写父级状态；请保证值合法。","方向键采用自动激活：移动焦点即改变选中值，与原生单选组一致。","整组禁用时所有选项都不可聚焦；单个禁用选项会被键盘导航跳过。","分段控制器只表达“选择一个值”，不负责切换面板内容。"]},lk={class:"demo-stack"},ik={class:"demo-hint"},rk=V({__name:"Basic",setup(e){const t=O(null),n=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}];return(o,s)=>(b(),M("div",lk,[m(d(an),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),options:n,"aria-label":"城市",placeholder:"请选择城市"},null,8,["modelValue"]),y("p",ik,"当前城市："+H(t.value??"未选择")+"。点击或按 Enter / 方向键打开。",1)]))}}),dk=`<script setup lang="ts">
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
`,uk=`<script setup>
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
`,ck={class:"demo-stack"},mk={class:"demo-field"},pk={class:"demo-field"},fk={class:"demo-field"},vk=V({__name:"Sizes",setup(e){const t=O("beijing"),n=O("beijing"),o=O("beijing"),s=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"}];return(a,l)=>(b(),M("div",ck,[y("div",mk,[l[3]||(l[3]=y("span",{class:"demo-label"},"small",-1)),m(d(an),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),options:s,size:"small","aria-label":"小尺寸城市"},null,8,["modelValue"])]),y("div",pk,[l[4]||(l[4]=y("span",{class:"demo-label"},"medium",-1)),m(d(an),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=i=>n.value=i),options:s,"aria-label":"中尺寸城市"},null,8,["modelValue"])]),y("div",fk,[l[5]||(l[5]=y("span",{class:"demo-label"},"large",-1)),m(d(an),{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=i=>o.value=i),options:s,size:"large","aria-label":"大尺寸城市"},null,8,["modelValue"])])]))}}),gk=`<script setup lang="ts">
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
`,hk=`<script setup>
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
`,bk={class:"demo-stack"},yk=V({__name:"States",setup(e){const t=O("shanghai"),n=O(null),o=O("beijing"),s=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou",disabled:!0}];return(a,l)=>(b(),M("div",bk,[m(d(an),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),options:s,clearable:"","aria-label":"可清空城市"},null,8,["modelValue"]),l[4]||(l[4]=y("p",{class:"demo-hint"},"clearable 会在有值时提供清空按钮。",-1)),m(d(an),{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=i=>o.value=i),options:s,disabled:"","aria-label":"禁用城市"},null,8,["modelValue"]),m(d(an),{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=i=>t.value=i),options:s,error:"","error-message":"城市服务暂不可用","aria-label":"错误城市"},null,8,["modelValue"]),m(d(an),{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=i=>n.value=i),options:[],"empty-text":"没有可用城市","aria-label":"空城市"},null,8,["modelValue"])]))}}),Mk=`<script setup lang="ts">
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
`,_k=`<script setup>
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
`,wk={name:"select",category:"basic",title:"Select 选择器",summary:"从一组选项中选择单个值，提供 combobox / listbox 语义与完整键盘操作。",description:"MSelect 是基础单选选择器：触发器持有焦点，选项通过 aria-activedescendant 标记当前项。浮层复用统一定位与 Overlay 基础设施，支持点击外部、Escape 关闭，并在空间不足时自动翻转。",status:"stable",since:"0.4.0",keywords:["select","选择","下拉","combobox","listbox"],sections:[{id:"basic",title:"基础用法",description:"options 描述选项，v-model 绑定选中值，未选择时显示 placeholder。",demo:rk,code:dk,codeJs:uk},{id:"sizes",title:"尺寸",description:"尺寸影响触发器高度与选项行高，不影响浮层定位逻辑。",demo:vk,code:gk,codeJs:hk},{id:"states",title:"清空、禁用与错误",description:"clearable 提供清空按钮；disabled、error 与空列表都有明确状态。",demo:yk,code:Mk,codeJs:_k}],api:[{id:"select-api",title:"MSelect",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前选中的值；null 表示未选择。"},{name:"options",type:"SelectOption[]",defaultValue:"[]",description:"选项列表，每项包含 label / value / disabled。"},{name:"placeholder",type:"string",defaultValue:"'请选择'",description:"未选择时的提示文本。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"触发器与选项尺寸。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用选择器。"},{name:"clearable",type:"boolean",defaultValue:"false",description:"有值时显示清空按钮。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误边框；通常与 errorMessage 一起使用。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误描述，同时作为 aria-describedby 的目标。"},{name:"emptyText",type:"string",defaultValue:"'暂无选项'",description:"options 为空时的占位文本。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留 listbox 并切换 display:none；unmount 销毁列表。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"combobox 与 listbox 的无障碍名称。"},{name:"id",type:"string",defaultValue:"—",description:"触发器的 id。"},{name:"name",type:"string",defaultValue:"—",description:"表单字段名。"}],events:[{name:"update:modelValue",type:"(value: SelectValue | null) => void",description:"选择或清空时触发，用于 v-model。"},{name:"change",type:"(value: SelectValue | null, option: SelectOption | null) => void",description:"选中值变化时触发；清空时 option 为 null。"},{name:"clear",type:"() => void",description:"点击清空按钮时触发。"},{name:"visible-change",type:"(open: boolean) => void",description:"浮层打开或关闭时触发。"}]}],notes:["当前只支持基础单选；搜索、分组、多选与虚拟滚动不在本阶段范围内。","触发器持有焦点，选项不可单独聚焦；方向键、Home / End、Enter / Space 与 Escape 均可用。","浮层通过 Teleport 渲染到 body，并与触发器等宽；滚动时重新定位，触发器离开视口时自动关闭。",'hide-mode="display" 会保留 listbox DOM；默认 unmount 更节省 DOM，两者键盘与 aria 行为一致。',"在 MFormItem 内会自动继承错误状态与 aria-describedby，显式传入的 props 优先。","选项值必须唯一；禁用选项会被鼠标与键盘跳过。"]},kk={class:"demo-stack"},xk={class:"demo-hint"},Bk=V({__name:"Basic",setup(e){const t=O(!0);return(n,o)=>(b(),M("div",kk,[m(d(jt),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),label:"启用通知"},null,8,["modelValue"]),y("p",xk,"当前状态："+H(t.value?"开启":"关闭"),1)]))}}),Ck=`<script setup lang="ts">
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
`,Tk=`<script setup>
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
`,$k={class:"demo-stack"},Vk=V({__name:"Disabled",setup(e){return(t,n)=>(b(),M("div",$k,[m(d(jt),{"model-value":!0,disabled:"",label:"已开启但禁用"}),m(d(jt),{"model-value":!1,disabled:"",label:"已关闭但禁用"}),m(d(jt),{"model-value":!1,label:"作为对照的可用开关"})]))}}),Sk=`<script setup lang="ts">
import { MSwitch } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch :model-value="true" disabled label="已开启但禁用" />
    <MSwitch :model-value="false" disabled label="已关闭但禁用" />
    <MSwitch :model-value="false" label="作为对照的可用开关" />
  </div>
</template>
`,Ik=`<script setup>
import { MSwitch } from 'anemia-ui'
<\/script>

<template>
  <div class="demo-stack">
    <MSwitch :model-value="true" disabled label="已开启但禁用" />
    <MSwitch :model-value="false" disabled label="已关闭但禁用" />
    <MSwitch :model-value="false" label="作为对照的可用开关" />
  </div>
</template>
`,zk={class:"demo-stack"},Ek=V({__name:"Sizes",setup(e){const t=O(!0),n=O(!0),o=O(!0);return(s,a)=>(b(),M("div",zk,[m(d(jt),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),size:"small",label:"Small"},null,8,["modelValue"]),m(d(jt),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),size:"medium",label:"Medium"},null,8,["modelValue"]),m(d(jt),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value=l),size:"large",label:"Large"},null,8,["modelValue"])]))}}),Ak=`<script setup lang="ts">
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
`,Rk=`<script setup>
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
`,Dk={class:"demo-stack"},Pk={class:"demo-hint"},Ok=V({__name:"Values",setup(e){const t=O("light");return(n,o)=>(b(),M("div",Dk,[m(d(jt),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),"active-value":"dark","inactive-value":"light",label:"夜间模式"},null,8,["modelValue"]),y("p",Pk,"v-model 值："+H(t.value),1)]))}}),Lk=`<script setup lang="ts">
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
`,Fk=`<script setup>
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
`,Nk={name:"switch",category:"basic",title:"Switch 开关",summary:"在开启与关闭之间切换，支持自定义值、三种尺寸与平滑动画。",description:'开关用于立即生效的二元设置，例如启用通知、切换模式。它使用原生 button 与 role="switch"，语义与键盘行为符合无障碍预期；需要提交表单的二元选项应使用复选框。',status:"stable",since:"0.1.0",keywords:["switch","开关","toggle","状态"],sections:[{id:"basic",title:"基础用法",description:"默认绑定布尔值；label 同时作为可见标签与无障碍名称。",demo:Bk,code:Ck,codeJs:Tk},{id:"values",title:"自定义值",description:"通过 activeValue / inactiveValue 绑定字符串或数字，适合直接映射业务枚举。",demo:Ok,code:Lk,codeJs:Fk},{id:"sizes",title:"尺寸",description:"小、中、大三档尺寸共享同一套轨道与滑块比例。",demo:Ek,code:Ak,codeJs:Rk},{id:"disabled",title:"禁用状态",description:"禁用时保留状态展示，但阻止鼠标与键盘切换。",demo:Vk,code:Sk,codeJs:Ik}],api:[{id:"switch-api",title:"MSwitch",props:[{name:"modelValue",type:"boolean | string | number",defaultValue:"false",description:"当前值，与 activeValue 比较得出开关状态。"},{name:"activeValue",type:"boolean | string | number",defaultValue:"true",description:"开启时写入的值。"},{name:"inactiveValue",type:"boolean | string | number",defaultValue:"false",description:"关闭时写入的值。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"开关尺寸。"},{name:"label",type:"string",defaultValue:"—",description:"可见标签；默认插槽优先。"},{name:"id",type:"string",defaultValue:"—",description:"button 元素的 id。"}],events:[{name:"update:modelValue",type:"(value: boolean | string | number) => void",description:"切换时触发，值为 activeValue 或 inactiveValue。"},{name:"change",type:"(value: boolean | string | number) => void",description:"切换时触发。"}],slots:[{name:"default",type:"—",description:"自定义可见标签内容。"}]}],notes:["使用自定义值时，v-model 变量的类型应覆盖 string | number | boolean。","没有可见标签时请通过 aria-label 提供开关用途。",'组件渲染为 role="switch" 的 button，原生支持 Space / Enter。',"开关用于立即生效的设置；需要随表单一起提交时请使用 Checkbox。","过渡动画会遵循 prefers-reduced-motion 设置。"]},Jk=V({__name:"Basic",setup(e){const t=[{key:"name",title:"组件",width:150,minWidth:120},{key:"owner",title:"维护者",width:110},{key:"status",title:"状态",width:90,align:"center"},{key:"description",title:"说明",minWidth:220}],n=[{name:"Button",owner:"Core",status:"Stable",description:"操作入口，支持多种类型与加载状态。"},{name:"Input",owner:"Core",status:"Stable",description:"文本输入，保留原生 input 语义。"},{name:"Table",owner:"Data",status:"Stable",description:"轻量结构化数据展示，不承担排序与分页。"}];return(o,s)=>(b(),ye(d(fo),{caption:"基础组件维护状态",columns:t,rows:n,"row-key":"name","row-header":"",layout:"fixed","min-width":620}))}}),Uk=`<script setup lang="ts">
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
`,Gk=`<script setup>
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
`,Hk=V({__name:"CustomCells",setup(e){const t=[{key:"name",title:"组件",width:150,minWidth:120},{key:"status",title:"状态",width:100,align:"center"},{key:"updated",title:"更新时间",width:120},{key:"action",title:"操作",width:100,align:"right"}],n=[{name:"Button",status:"稳定",type:"success",updated:"2026-11-02"},{name:"Table",status:"新增",type:"primary",updated:"2026-11-02"},{name:"Card",status:"观察中",type:"warning",updated:"2026-10-28"}];return(o,s)=>(b(),ye(d(fo),{caption:"使用单元格插槽渲染状态与操作",columns:t,rows:n,"row-key":"name","row-header":"",layout:"fixed","min-width":600},{status:g(({row:a})=>[m(d(Ye),{type:a.type,size:"small"},{default:g(()=>[k(H(a.status),1)]),_:2},1032,["type"])]),action:g(({row:a})=>[m(d(P),{size:"small",type:"ghost","aria-label":`查看 ${a.name} 文档`},{default:g(()=>[...s[0]||(s[0]=[k(" 查看 ",-1)])]),_:1},8,["aria-label"])]),_:1}))}}),jk=`<script setup lang="ts">
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
`,Wk=`<script setup>
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
`,qk=V({__name:"Empty",setup(e){const t=[{key:"name",title:"组件",width:160,minWidth:120},{key:"owner",title:"维护者",width:120},{key:"status",title:"状态",width:100,align:"center"}],n=[];return(o,s)=>(b(),ye(d(fo),{caption:"空表格",columns:t,rows:n,"row-key":"name","row-header":"",layout:"fixed","min-width":480},{empty:g(()=>[...s[0]||(s[0]=[y("span",{class:"empty-state"},"还没有组件记录，新的组件会出现在这里。",-1)])]),_:1}))}}),Kk=ie(qk,[["__scopeId","data-v-61525b9c"]]),Qk=`<script setup lang="ts">
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
`,Yk=`<script setup>
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
`,Xk={class:"table-overflow-demo"},Zk={class:"long-value"},ex={class:"long-value"},tx=V({__name:"Overflow",setup(e){const t=[{key:"token",title:"变量",width:190,minWidth:160},{key:"value",title:"长值",minWidth:260},{key:"note",title:"说明",width:130}],n=[{token:"--m-font-family-base",value:'-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "PingFang SC", sans-serif',note:"字体族"},{token:"--m-docs-color-mix",value:"color-mix(in srgb, var(--m-color-primary) 12%, var(--m-color-bg-container))",note:"超长无空格 token"}];return(o,s)=>(b(),M("div",Xk,[m(d(fo),{caption:"长内容换行示例",columns:t,rows:n,"row-key":"token","row-header":"",layout:"fixed","min-width":640},{token:g(({row:a})=>[y("code",Zk,H(a.token),1)]),value:g(({row:a})=>[y("code",ex,H(a.value),1)]),_:1}),s[0]||(s[0]=y("p",{class:"demo-hint"}," 单元格允许在任意位置换行；窄屏时表格在自身容器内横向滚动，不会撑破页面。 ",-1))]))}}),nx=ie(tx,[["__scopeId","data-v-8fe4753b"]]),ox=`<script setup lang="ts">
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
`,sx=`<script setup>
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
`,ax={class:"table-size-demo"},lx={class:"demo-row"},ix=V({__name:"Sizes",setup(e){const t=["small","medium","large"],n=O("medium"),o=[{key:"name",title:"Token",width:160,minWidth:130},{key:"value",title:"值",width:100,align:"right"},{key:"usage",title:"用途",minWidth:220}],s=[{name:"--m-space-2",value:"8px",usage:"紧凑元素之间的间距"},{name:"--m-space-4",value:"16px",usage:"常规容器内边距"},{name:"--m-radius-md",value:"10px",usage:"按钮、输入框的默认圆角"}];return(a,l)=>(b(),M("div",ax,[y("div",lx,[(b(),M(le,null,Le(t,i=>m(d(P),{key:i,size:"small",type:n.value===i?"primary":"outline",onClick:r=>n.value=i},{default:g(()=>[k(H(i),1)]),_:2},1032,["type","onClick"])),64))]),m(d(fo),{caption:"不同尺寸的轻表格",columns:o,rows:s,"row-key":"name","row-header":"",size:n.value,layout:"fixed","min-width":540},null,8,["size"])]))}}),rx=ie(ix,[["__scopeId","data-v-48d8a029"]]),dx=`<script setup lang="ts">
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
`,ux=`<script setup>
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
`,cx={name:"table",category:"data",title:"Table 轻表格",summary:"以原生表格语义展示结构化数据，支持响应式滚动、列插槽、空状态与三种尺寸。",description:"Table 是轻量展示组件，只负责把数据排成可读的表格，不提供排序、分页、选择或虚拟滚动。复杂数据能力由后续的数据组件承担，避免基础表格变成难以维护的 DataGrid。",status:"stable",since:"0.1.0",keywords:["table","表格","轻表格","数据展示","列表"],sections:[{id:"basic",title:"基础用法",description:"columns 定义列，rows 提供数据。rowKey 指定稳定行标识；caption 默认只提供给屏幕阅读器。",demo:Jk,code:Uk,codeJs:Gk},{id:"custom-cells",title:"单元格插槽",description:"以列的 key 作为插槽名，可以在单元格中渲染 MIcon、MTag、MButton 等真实组件，而不是把 HTML 字符串塞进数据。",demo:Hk,code:jk,codeJs:Wk},{id:"sizes",title:"尺寸",description:"small / medium / large 统一控制字号与单元格内边距；数据密度变化时保持同一套视觉语言。",demo:rx,code:dx,codeJs:ux},{id:"empty",title:"空状态",description:"rows 为空时仍保留表头语义，并渲染整行空状态。empty 插槽可以替换默认文案。",demo:Kk,code:Qk,codeJs:Yk},{id:"overflow",title:"长内容与溢出",description:"单元格默认允许换行，长 Token 与字体栈不会覆盖相邻列。设置 minWidth 后，窄屏只在表格内部横向滚动。",demo:nx,code:ox,codeJs:sx}],api:[{id:"table-api",title:"MTable",props:[{name:"columns",type:"readonly TableColumn[]",defaultValue:"—",description:"列定义，包含 key、title、width、minWidth、align。"},{name:"rows",type:"readonly T[]",defaultValue:"—",description:"行数据；每个字段通过列 key 读取。"},{name:"rowKey",type:"string",defaultValue:"—",description:"稳定行标识字段；缺省时回退到行索引。"},{name:"caption",type:"string",defaultValue:"—",description:"表格标题，默认视觉隐藏但仍提供给辅助技术。"},{name:"captionVisible",type:"boolean",defaultValue:"false",description:"是否显示 caption。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"单元格字号与内边距档位。"},{name:"layout",type:"'auto' | 'fixed'",defaultValue:"'auto'",description:"列宽策略；数据文档建议 fixed，配合列宽保持稳定。"},{name:"minWidth",type:"string | number",defaultValue:"—",description:"表格最小宽度；窄容器中触发内部横向滚动。"},{name:"rowHeader",type:"boolean",defaultValue:"false",description:'是否把第一列渲染为 th scope="row"。'},{name:"emptyText",type:"string",defaultValue:"'暂无数据'",description:"默认空状态文案。"}],events:[],slots:[{name:"[column.key]",type:"{ row, column, value, index }",description:"按列 key 命名的单元格插槽，用于渲染组件或自定义内容。"},{name:"empty",type:"—",description:"替换默认空状态；仍位于语义化表格单元格内。"}]}],notes:["轻表格不提供排序、分页、行选择、固定列或虚拟滚动。需要这些能力时应新增独立的数据组件，而不是继续给 MTable 堆 Props。","数据保持纯对象；状态、操作按钮等 UI 使用以列 key 命名的插槽渲染。","为可读性设置 caption；即使视觉隐藏，它仍是表格的可访问名称。","长文本默认在单元格内换行。不要给数据单元格设置 white-space: nowrap；需要单行省略时应提供明确 title 或可展开方式。","窄屏优先在表格容器内横向滚动，不要让表格撑破页面。使用 minWidth 控制最小可读宽度。","rowKey 应使用稳定且唯一的字符串或数字；0 与 false 会参与 key，空字符串回退到行索引。","Table 不应用于页面布局。布局请使用 CSS Grid / Flex；不要把表格当作网格系统。"]},mx={class:"demo-stack"},px={class:"demo-hint"},fx=V({__name:"Basic",setup(e){const t=O("overview"),n=[{key:"overview",label:"概览"},{key:"activity",label:"动态"},{key:"settings",label:"设置"}];return(o,s)=>(b(),M("div",mx,[m(d(Jo),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),items:n,"aria-label":"项目视图"},{panel:g(({item:a})=>[y("p",px,H(a.label)+" 面板，当前 key："+H(t.value)+"。",1)]),_:1},8,["modelValue"])]))}}),vx=`<script setup lang="ts">
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
`,gx=`<script setup>
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
`,hx={class:"demo-stack"},bx={class:"demo-hint"},yx=V({__name:"Disabled",setup(e){const t=O("overview"),n=[{key:"overview",label:"概览"},{key:"activity",label:"动态"},{key:"billing",label:"账单（暂不可用）",disabled:!0}];return(o,s)=>(b(),M("div",hx,[m(d(Jo),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),items:n,"aria-label":"项目视图"},{panel:g(({item:a})=>[y("p",bx,H(a.label)+" 面板",1)]),_:1},8,["modelValue"]),s[1]||(s[1]=y("p",{class:"demo-hint"},"禁用的标签无法聚焦或选中，键盘导航会自动跳过。",-1))]))}}),Mx=`<script setup lang="ts">
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
`,_x=`<script setup>
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
`,wx={class:"demo-stack"},kx={class:"demo-field"},xx={class:"demo-hint"},Bx={class:"demo-field"},Cx={class:"demo-hint"},Tx=V({__name:"Sizes",setup(e){const t=O("one"),n=O("one"),o=[{key:"one",label:"Small"},{key:"two",label:"Large"}];return(s,a)=>(b(),M("div",wx,[y("div",kx,[a[2]||(a[2]=y("span",{class:"demo-label"},'size="small"',-1)),m(d(Jo),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),items:o,size:"small","aria-label":"小尺寸标签页"},{panel:g(({item:l})=>[y("p",xx,H(l.label)+" 面板",1)]),_:1},8,["modelValue"])]),y("div",Bx,[a[3]||(a[3]=y("span",{class:"demo-label"},'size="large"',-1)),m(d(Jo),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),items:o,size:"large","aria-label":"大尺寸标签页"},{panel:g(({item:l})=>[y("p",Cx,H(l.label)+" 面板",1)]),_:1},8,["modelValue"])])]))}}),$x=`<script setup lang="ts">
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
`,Vx=`<script setup>
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
`,Sx={name:"tabs",category:"navigation",title:"Tabs 标签页",summary:"在同一区域内的多个视图之间切换，提供 tablist / tab / tabpanel 语义与键盘导航。",description:"标签页用于在并列视图之间切换，而不是用来表达步骤进度。MTabs 负责 tablist、方向键导航、选中状态与面板语义；面板内容通过 panel 插槽按当前项渲染。",status:"stable",since:"0.3.0",keywords:["tabs","标签页","切换","tablist","导航"],sections:[{id:"basic",title:"基础用法",description:"items 描述标签，panel 插槽根据当前项渲染面板内容。",demo:fx,code:vx,codeJs:gx},{id:"sizes",title:"尺寸",description:"尺寸只影响标签的字号与内边距，不改变键盘与语义行为。",demo:Tx,code:$x,codeJs:Vx},{id:"disabled",title:"禁用标签",description:"禁用的标签不可聚焦、不可选中，方向键与 Home / End 会自动跳过。",demo:yx,code:Mx,codeJs:_x}],api:[{id:"tabs-api",title:"MTabs",props:[{name:"modelValue",type:"string | number | null",defaultValue:"null",description:"当前激活标签的 key；为 null 时回退到第一个可用标签。"},{name:"items",type:"TabItem[]",defaultValue:"[]",description:"标签定义，每项包含 key / label / disabled。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"标签字号与内边距档位。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"tablist 的无障碍名称。"},{name:"keepAlive",type:"boolean",defaultValue:"false",description:"为 true 时保留非激活面板（v-show 隐藏），而不是卸载。"}],events:[{name:"update:modelValue",type:"(key: TabKey) => void",description:"点击或键盘切换标签时触发，用于 v-model。"},{name:"change",type:"(key: TabKey, item: TabItem) => void",description:"激活标签变化时触发。"}],slots:[{name:"panel",type:"{ item: TabItem; index: number; active: boolean }",description:'面板内容；提供后会渲染 role="tabpanel" 容器。'}]}],notes:["items 中的 key 必须唯一；禁用项不会被聚焦或选中。","不提供 panel 插槽时，组件只渲染 tablist，面板由使用方自行渲染；此时不会输出 aria-controls。","键盘支持 ArrowLeft / ArrowRight 循环切换、Home / End 跳到首尾，并采用自动激活。","keepAlive 只影响挂载策略，不改变当前激活项或键盘行为。","标签页表达并列视图，不用于步骤条或页面主导航。"]},Ix={class:"demo-stack"},zx={class:"demo-row"},Ex={key:0,class:"demo-hint"},Ax=V({__name:"Closable",setup(e){const t=O(["设计系统","Vue 3","TypeScript"]);function n(o){t.value=t.value.filter(s=>s!==o)}return(o,s)=>(b(),M("div",Ix,[y("div",zx,[(b(!0),M(le,null,Le(t.value,a=>(b(),ye(d(Ye),{key:a,type:"primary",closable:"",onClose:l=>n(a)},{default:g(()=>[k(H(a),1)]),_:2},1032,["onClose"]))),128)),t.value.length===0?(b(),M("span",Ex,"所有标签已移除。")):te("",!0)]),t.value.length===0?(b(),ye(d(P),{key:0,size:"small",onClick:s[0]||(s[0]=a=>t.value=["设计系统","Vue 3","TypeScript"])},{default:g(()=>[...s[1]||(s[1]=[k(" 重置示例 ",-1)])]),_:1})):te("",!0)]))}}),Rx=`<script setup lang="ts">
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
`,Dx=`<script setup>
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
`,Px=V({__name:"CustomColor",setup(e){return(t,n)=>(b(),M(le,null,[m(d(Ye),{color:"#0f766e"},{default:g(()=>[...n[0]||(n[0]=[k("Teal",-1)])]),_:1}),m(d(Ye),{color:"#b45309"},{default:g(()=>[...n[1]||(n[1]=[k("Amber",-1)])]),_:1}),m(d(Ye),{color:"#7c3aed"},{default:g(()=>[...n[2]||(n[2]=[k("Violet",-1)])]),_:1}),m(d(Ye),{color:"#be123c",size:"large"},{default:g(()=>[...n[3]||(n[3]=[k("Rose",-1)])]),_:1})],64))}}),Ox=`<script setup lang="ts">
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag color="#0f766e">Teal</MTag>
  <MTag color="#b45309">Amber</MTag>
  <MTag color="#7c3aed">Violet</MTag>
  <MTag color="#be123c" size="large">Rose</MTag>
</template>
`,Lx=`<script setup>
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag color="#0f766e">Teal</MTag>
  <MTag color="#b45309">Amber</MTag>
  <MTag color="#7c3aed">Violet</MTag>
  <MTag color="#be123c" size="large">Rose</MTag>
</template>
`,Fx=V({__name:"Sizes",setup(e){return(t,n)=>(b(),M(le,null,[m(d(Ye),{size:"small",type:"primary"},{default:g(()=>[...n[0]||(n[0]=[k("Small",-1)])]),_:1}),m(d(Ye),{size:"medium",type:"primary"},{default:g(()=>[...n[1]||(n[1]=[k("Medium",-1)])]),_:1}),m(d(Ye),{size:"large",type:"primary"},{default:g(()=>[...n[2]||(n[2]=[k("Large",-1)])]),_:1})],64))}}),Nx=`<script setup lang="ts">
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag size="small" type="primary">Small</MTag>
  <MTag size="medium" type="primary">Medium</MTag>
  <MTag size="large" type="primary">Large</MTag>
</template>
`,Jx=`<script setup>
import { MTag } from 'anemia-ui'
<\/script>

<template>
  <MTag size="small" type="primary">Small</MTag>
  <MTag size="medium" type="primary">Medium</MTag>
  <MTag size="large" type="primary">Large</MTag>
</template>
`,Ux=V({__name:"Types",setup(e){return(t,n)=>(b(),M(le,null,[m(d(Ye),null,{default:g(()=>[...n[0]||(n[0]=[k("Default",-1)])]),_:1}),m(d(Ye),{type:"primary"},{default:g(()=>[...n[1]||(n[1]=[k("Primary",-1)])]),_:1}),m(d(Ye),{type:"success"},{default:g(()=>[...n[2]||(n[2]=[k("Success",-1)])]),_:1}),m(d(Ye),{type:"warning"},{default:g(()=>[...n[3]||(n[3]=[k("Warning",-1)])]),_:1}),m(d(Ye),{type:"danger"},{default:g(()=>[...n[4]||(n[4]=[k("Danger",-1)])]),_:1}),m(d(Ye),{type:"info"},{default:g(()=>[...n[5]||(n[5]=[k("Info",-1)])]),_:1})],64))}}),Gx=`<script setup lang="ts">
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
`,Hx=`<script setup>
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
`,jx={name:"tag",category:"display",title:"Tag 标签",summary:"用紧凑的标签表达分类、状态或可移除的筛选项。",description:"标签用于表达短文本元信息。语义状态应优先使用内置类型，让颜色与对比度跟随主题；color 仅作为产品自定义标签的受控扩展，不应替代状态类型。",status:"stable",since:"0.1.0",keywords:["tag","标签","状态","分类","筛选项"],sections:[{id:"types",title:"标签类型",description:"default 用于中性分类；success / warning / danger / info 表达状态。",demo:Ux,code:Gx,codeJs:Hx},{id:"sizes",title:"尺寸",description:"三种尺寸分别适配紧凑列表、常规内容与标题区域。",demo:Fx,code:Nx,codeJs:Jx},{id:"closable",title:"可关闭标签",description:"closable 只负责触发 close 事件，是否移除由父级决定；这避免组件与业务状态重复。",demo:Ax,code:Rx,codeJs:Dx},{id:"custom-color",title:"自定义颜色",description:"color 接受任意 CSS 颜色，组件据此派生柔和的背景与边框；请确保前景对比度符合可读性要求。",demo:Px,code:Ox,codeJs:Lx}],api:[{id:"tag-api",title:"MTag",props:[{name:"type",type:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'",defaultValue:"'default'",description:"语义类型，决定前景与柔和背景。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"标签尺寸。"},{name:"closable",type:"boolean",defaultValue:"false",description:"显示关闭按钮。"},{name:"color",type:"string",defaultValue:"—",description:"自定义 CSS 颜色，派生背景与边框。"},{name:"closeLabel",type:"string",defaultValue:"'移除标签'",description:"关闭按钮的无障碍标签。"}],events:[{name:"close",type:"(event: MouseEvent) => void",description:"点击关闭按钮时触发；组件自身不会移除。"}],slots:[{name:"default",type:"—",description:"标签内容。"}]}],notes:["closable 仅触发 close 事件，父级需要通过 v-if 或数组过滤移除标签。","自定义 color 派生背景使用 color-mix()，需要现代浏览器支持。","自定义颜色时请确认文字与背景对比度，组件不会自动计算可读性。","标签内容应保持短小；长文本会被省略而不是换行。"]},Wx={class:"demo-stack"},qx={class:"demo-hint"},Kx=V({__name:"Basic",setup(e){const t=O("");return(n,o)=>(b(),M("div",Wx,[m(d(jn),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),"aria-label":"个人简介",placeholder:"介绍一下你自己…",rows:4,maxlength:80,"show-count":""},null,8,["modelValue"]),y("p",qx,"已输入 "+H(t.value.length)+" 个字符，内容完全由父级状态控制。",1)]))}}),Qx=`<script setup lang="ts">
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
`,Yx=`<script setup>
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
`,Xx={class:"demo-stack"},Zx={class:"demo-field"},eB={class:"demo-field"},tB=V({__name:"Sizes",setup(e){const t=O("small 尺寸、两行高度"),n=O("large 尺寸、四行高度，适合较长的说明文字。");return(o,s)=>(b(),M("div",Xx,[y("div",Zx,[s[2]||(s[2]=y("span",{class:"demo-label"},"small",-1)),m(d(jn),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),size:"small",rows:2,"aria-label":"小尺寸文本域"},null,8,["modelValue"])]),y("div",eB,[s[3]||(s[3]=y("span",{class:"demo-label"},"large",-1)),m(d(jn),{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),size:"large",rows:4,"aria-label":"大尺寸文本域"},null,8,["modelValue"])])]))}}),nB=`<script setup lang="ts">
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
`,oB=`<script setup>
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
`,sB={class:"demo-stack"},aB=V({__name:"States",setup(e){const t=O("内容过短"),n=O("不可编辑的内容"),o=O("只读内容，仍可聚焦与复制");return(s,a)=>(b(),M("div",sB,[m(d(jn),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),"error-message":"至少输入 20 个字符","aria-label":"错误示例",rows:3},null,8,["modelValue"]),m(d(jn),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),disabled:"","aria-label":"禁用示例",rows:2},null,8,["modelValue"]),m(d(jn),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value=l),readonly:"","aria-label":"只读示例",rows:2},null,8,["modelValue"])]))}}),lB=`<script setup lang="ts">
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
`,iB=`<script setup>
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
`,rB={name:"textarea",category:"basic",title:"Textarea 文本域",summary:"多行文本输入，支持尺寸、行数、字数统计、错误说明与原生 resize。",description:"文本域用于输入较长的文本。MTextarea 直接渲染原生 textarea，统一了尺寸、错误提示、字符计数与禁用/只读状态，值始终是字符串。",status:"stable",since:"0.2.0",keywords:["textarea","文本域","多行输入","字数","resize"],sections:[{id:"basic",title:"基础用法",description:"v-model 绑定字符串；rows 控制初始高度，show-count 显示实时字数。",demo:Kx,code:Qx,codeJs:Yx},{id:"sizes",title:"尺寸",description:"尺寸统一为 small / medium / large，只影响字号、内边距与最小高度。",demo:tB,code:nB,codeJs:oB},{id:"states",title:"错误、禁用与只读",description:"errorMessage 会同时设置 aria-invalid 与 aria-describedby；禁用阻止交互，只读仍可聚焦与复制。",demo:aB,code:lB,codeJs:iB}],api:[{id:"textarea-api",title:"MTextarea",props:[{name:"modelValue",type:"string",defaultValue:"''",description:"绑定的文本值，始终是字符串。"},{name:"size",type:"'small' | 'medium' | 'large'",defaultValue:"'medium'",description:"字号、内边距与最小高度档位。"},{name:"placeholder",type:"string",defaultValue:"—",description:"占位文本。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用状态，阻止输入与 v-model 更新。"},{name:"readonly",type:"boolean",defaultValue:"false",description:"只读状态，允许聚焦与复制但不接受修改。"},{name:"rows",type:"number",defaultValue:"3",description:"原生 rows，决定初始可见行数。"},{name:"maxlength",type:"number",defaultValue:"—",description:"原生最大字符数。"},{name:"showCount",type:"boolean",defaultValue:"false",description:"显示字符计数，设置 maxlength 时同时显示上限。"},{name:"resize",type:"'none' | 'vertical' | 'horizontal' | 'both'",defaultValue:"'vertical'",description:"浏览器原生 resize 行为。"},{name:"error",type:"boolean",defaultValue:"false",description:"错误视觉状态。"},{name:"errorMessage",type:"string",defaultValue:"—",description:"错误说明，同时用于 aria-describedby。"},{name:"name",type:"string",defaultValue:"—",description:"原生表单字段名。"},{name:"id",type:"string",defaultValue:"—",description:"原生 textarea id，缺省时自动生成。"},{name:"ariaLabel",type:"string",defaultValue:"—",description:"没有可见标签时的无障碍名称。"}],events:[{name:"update:modelValue",type:"(value: string) => void",description:"输入时触发，用于 v-model。"},{name:"input",type:"(value: string, nativeEvent: Event) => void",description:"原生 input 事件。"},{name:"change",type:"(value: string, nativeEvent: Event) => void",description:"原生 change 事件。"},{name:"focus",type:"(nativeEvent: FocusEvent) => void",description:"聚焦时触发。"},{name:"blur",type:"(nativeEvent: FocusEvent) => void",description:"失焦时触发。"}]}],notes:["v-model 只接受字符串，不做数字或富文本转换。","showCount 统计的是字符串 UTF-16 长度，与原生 maxlength 的计算方式一致。","错误说明通过 aria-describedby 关联，仅设置 error 而不提供 errorMessage 时没有可读的错误文本。","需要自由调整宽高时使用 resize；none 适合固定布局，vertical 是默认的稳妥选择。","多行文本的溢出由原生 textarea 处理，不需要额外的滚动容器。"]},dB={class:"demo-stack text-links"},uB=V({__name:"Link",setup(e){return(t,n)=>(b(),M("div",dB,[m(d(ft),null,{default:g(()=>[n[2]||(n[2]=k(" 这是一段正文，其中包含 ",-1)),m(d(ft),{link:"",href:"https://example.com",target:"_blank"},{default:g(()=>[...n[0]||(n[0]=[k("外部链接",-1)])]),_:1}),n[3]||(n[3]=k(" 与 ",-1)),m(d(ft),{link:"",href:"#api"},{default:g(()=>[...n[1]||(n[1]=[k("文档锚点",-1)])]),_:1}),n[4]||(n[4]=k(" 。 ",-1))]),_:1}),m(d(ft),{as:"p",block:""},{default:g(()=>[...n[5]||(n[5]=[k(" 使用 block 渲染为独立段落，默认标签会从 span 切换为 p，保留语义与布局。 ",-1)])]),_:1}),m(d(ft),{as:"a",href:"https://example.com",target:"_blank",block:""},{default:g(()=>[...n[6]||(n[6]=[k(' 直接使用 as="a" 也可以获得链接样式与安全的 rel。 ',-1)])]),_:1})]))}}),cB=ie(uB,[["__scopeId","data-v-d5be57b1"]]),mB=`<script setup lang="ts">
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
`,pB=`<script setup>
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
`,fB={class:"demo-stack text-ellipsis"},vB={class:"text-ellipsis__box"},gB={class:"text-ellipsis__box"},ki="Anemia UI 的文本组件保持轻量，却覆盖标题、正文、描述、链接与截断等常见场景。当容器宽度有限时，可以通过 ellipsis 控制单行省略，或通过 lines 指定多行截断。",hB=V({__name:"Ellipsis",setup(e){return(t,n)=>(b(),M("div",fB,[y("div",vB,[m(d(ft),{block:"",ellipsis:""},{default:g(()=>[k(H(ki))]),_:1})]),y("div",gB,[m(d(ft),{block:"",ellipsis:"",lines:2},{default:g(()=>[k(H(ki))]),_:1})]),m(d(ft),{link:"",ellipsis:"",href:"#api",class:"text-ellipsis__inline"},{default:g(()=>[...n[0]||(n[0]=[k(" 单行内联链接也会在容器边界处省略 ",-1)])]),_:1})]))}}),bB=ie(hB,[["__scopeId","data-v-29e9fa7e"]]),yB=`<script setup lang="ts">
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
`,MB=`<script setup>
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
`,_B={class:"demo-stack text-variants"},wB=V({__name:"Variants",setup(e){return(t,n)=>(b(),M("div",_B,[m(d(ft),{variant:"title"},{default:g(()=>[...n[0]||(n[0]=[k("标题 Title",-1)])]),_:1}),m(d(ft),{variant:"subtitle"},{default:g(()=>[...n[1]||(n[1]=[k("副标题 Subtitle",-1)])]),_:1}),m(d(ft),{variant:"body"},{default:g(()=>[...n[2]||(n[2]=[k(" 正文用于承载段落内容。MText 负责排版语义，不引入额外的间距或容器。 ",-1)])]),_:1}),m(d(ft),{variant:"description"},{default:g(()=>[...n[3]||(n[3]=[k(" 描述文字适合辅助说明、表单项提示与次要信息，默认使用次级文字色。 ",-1)])]),_:1})]))}}),kB=ie(wB,[["__scopeId","data-v-5826dca7"]]),xB=`<script setup lang="ts">
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
`,BB=`<script setup>
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
`,CB={name:"text",category:"display",title:"Text 文本",summary:"轻量的排版文本组件，覆盖标题、副标题、正文、描述、链接与截断。",description:"MText 用来替代分散的 span、p 与 a 标签：variant 决定排版层级，tone 调整语义颜色，block 与 as 控制布局和语义，ellipsis / lines 处理溢出。它不包裹额外容器，也不强制外边距。",status:"stable",since:"0.5.0",keywords:["text","文本","标题","正文","链接","省略","typography"],sections:[{id:"variants",title:"排版层级",description:"variant 提供标题、副标题、正文与描述四种层级；tone 可覆盖语义颜色。",demo:kB,code:xB,codeJs:BB},{id:"link",title:"链接与布局",description:"link 或 href 生成链接样式；block 切换为块级，as 可保留标题等语义标签。",demo:cB,code:mB,codeJs:pB},{id:"ellipsis",title:"单行与多行省略",description:"ellipsis 默认单行省略，lines 大于 1 时使用多行 clamp；需要容器提供宽度约束。",demo:bB,code:yB,codeJs:MB}],api:[{id:"text-api",title:"MText",props:[{name:"variant",type:"'title' | 'subtitle' | 'body' | 'description' | 'custom'",defaultValue:"'body'",description:"排版层级；custom 移除内置字号、字重与颜色。"},{name:"tone",type:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'inherit'",defaultValue:"—",description:"语义颜色，覆盖 variant 的默认颜色。"},{name:"as",type:"string",defaultValue:"—",description:"渲染标签；默认链接为 a、块级为 p、其余为 span。"},{name:"block",type:"boolean",defaultValue:"false",description:"使用块级布局，默认标签变为 p。"},{name:"link",type:"boolean",defaultValue:"false",description:"应用链接样式；默认标签变为 a。"},{name:"href",type:"string",defaultValue:"—",description:"链接地址。"},{name:"target",type:"string",defaultValue:"—",description:"链接 target。"},{name:"rel",type:"string",defaultValue:"—",description:'链接 rel；target="_blank" 时默认 noopener noreferrer。'},{name:"ellipsis",type:"boolean",defaultValue:"false",description:"开启溢出省略。"},{name:"lines",type:"number",defaultValue:"1",description:"省略的最大行数；大于 1 时使用多行 clamp。"}],slots:[{name:"default",type:"—",description:"文本内容，可包含行内元素。"}]}],notes:["MText 不包裹额外容器，也不提供默认外边距；排版间距应交给父级布局。","省略需要宽度约束：块级文本受限父容器宽度，内联文本需设置 max-width 或所在容器宽度。","多行省略基于 -webkit-line-clamp，现代浏览器一致；降级时仍会隐藏溢出内容。","链接默认使用 a 标签；若通过 as 改为其他标签，请自行保证可访问性与键盘行为。",'variant="custom" 只保留基础重置，适合完全由使用方接管字体的场景；可通过 class、CSS Variables 或 :deep() 继续扩展，不需要 !important。']},TB={class:"demo-row"},$B=V({__name:"Basic",setup(e){return(t,n)=>(b(),M("div",TB,[m(d(P),{size:"small",onClick:n[0]||(n[0]=o=>d(Jt).success("保存成功"))},{default:g(()=>[...n[4]||(n[4]=[k("成功",-1)])]),_:1}),m(d(P),{size:"small",onClick:n[1]||(n[1]=o=>d(Jt).info("已加入队列"))},{default:g(()=>[...n[5]||(n[5]=[k("信息",-1)])]),_:1}),m(d(P),{size:"small",type:"outline",onClick:n[2]||(n[2]=o=>d(Jt).warning("网络较慢"))},{default:g(()=>[...n[6]||(n[6]=[k("警告",-1)])]),_:1}),m(d(P),{size:"small",type:"danger",onClick:n[3]||(n[3]=o=>d(Jt).error("保存失败"))},{default:g(()=>[...n[7]||(n[7]=[k("错误",-1)])]),_:1})]))}}),VB=`<script setup lang="ts">
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
`,SB=`<script setup>
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
`,IB={class:"demo-row"},zB=V({__name:"Durations",setup(e){function t(){Jt.warning("请检查网络连接后重试",{title:"连接已断开",duration:0,closable:!0})}return(n,o)=>(b(),M("div",IB,[m(d(P),{size:"small",onClick:t},{default:g(()=>[...o[2]||(o[2]=[k("常驻通知",-1)])]),_:1}),m(d(P),{size:"small",type:"outline",onClick:o[0]||(o[0]=s=>d(Jt).info("3 秒后自动关闭"))},{default:g(()=>[...o[3]||(o[3]=[k(" 自动关闭 ",-1)])]),_:1}),m(d(P),{size:"small",type:"ghost",onClick:o[1]||(o[1]=s=>d(Jt).clear())},{default:g(()=>[...o[4]||(o[4]=[k("全部清除",-1)])]),_:1})]))}}),EB=`<script setup lang="ts">
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
`,AB=`<script setup>
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
`,RB={class:"demo-stack"},DB={class:"demo-row"},PB={class:"demo-hint"},OB=V({__name:"Queue",setup(e){const{toasts:t,queuedToasts:n}=$g(),o=T(()=>t.value.length);function s(){for(let l=0;l<10;l+=1)Jt.info(`并发通知 ${l+1}`,{duration:1800+l*400})}function a(){Jt.error("紧急：保存失败，请重试",{title:"需要立即处理",duration:0,closable:!0,priority:"high"})}return(l,i)=>(b(),M("div",RB,[y("div",DB,[m(d(P),{size:"small",onClick:s},{default:g(()=>[...i[1]||(i[1]=[k("连续触发 10 条",-1)])]),_:1}),m(d(P),{size:"small",type:"danger",onClick:a},{default:g(()=>[...i[2]||(i[2]=[k("紧急错误插队",-1)])]),_:1}),m(d(P),{size:"small",type:"ghost",onClick:i[0]||(i[0]=r=>d(Jt).clear())},{default:g(()=>[...i[3]||(i[3]=[k("全部清除",-1)])]),_:1})]),y("p",PB," 当前显示 "+H(o.value)+" 条，等待 "+H(d(n).length)+" 条。默认最多同时显示 5 条，队列上限 20 条；每条关闭后才补充下一条。 ",1)]))}}),LB=`<script setup lang="ts">
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
`,FB=`<script setup>
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
`,NB={name:"toast",category:"feedback",title:"Toast 通知",summary:"右上角堆叠的轻量操作反馈，通过命令式 API 触发，支持类型、标题与自动关闭。",description:"Toast 用于反馈一次操作的结果，不打断当前任务。队列由模块级 store 管理，toast() / useToast() 负责入队，<MToast /> 负责渲染；两者共享同一份状态，因此在应用外壳挂载一次即可。相同类型、相同标题与内容在 500ms 内只保留一条；默认最多同时显示 5 条，其余通知等待，每关闭一条才补充下一条。",status:"stable",since:"0.4.0",keywords:["toast","通知","反馈","命令式","message"],sections:[{id:"basic",title:"基础用法",description:"先挂载一次 <MToast />，之后在任意位置调用 toast.success() 等方法。",demo:$B,code:VB,codeJs:SB},{id:"queue",title:"队列与优先级",description:'默认最多同时显示 5 条，其余通知等待；每关闭或自动消失一条，下一条才进入。内存队列上限 20 条。priority: "high" 可让错误等紧急通知插到普通等待通知之前。',demo:OB,code:LB,codeJs:FB},{id:"durations",title:"时长与关闭",description:"duration 为 0 时保持常驻，closable 显示关闭按钮；toast.clear() 清空队列。",demo:zB,code:EB,codeJs:AB}],api:[{id:"toast-host-api",title:"MToast",props:[]},{id:"toast-options",title:"ToastOptions",props:[{name:"type",type:"'success' | 'info' | 'warning' | 'error'",defaultValue:"'info'",description:"通知类型，决定图标、语义角色与强调色。"},{name:"title",type:"string",defaultValue:"—",description:"可选的加粗首行。"},{name:"message",type:"string",defaultValue:"—",description:"通知正文。"},{name:"duration",type:"number",defaultValue:"3000",description:"自动关闭时间（ms）。0 表示不自动关闭；等待中的通知进入展示区后才开始计时。"},{name:"closable",type:"boolean",defaultValue:"false",description:"显示关闭按钮。"},{name:"priority",type:"'normal' | 'high'",defaultValue:"'normal'",description:"high 会插到普通等待通知之前；展示区已满时，原本第 5 条普通通知退回等待队列，稍后再显示。"}]},{id:"toast-api",title:"toast / useToast",props:[{name:"toast.show",type:"(options: ToastOptions | string) => number",defaultValue:"—",description:"入队一条通知，返回 id。字符串等价于 { message }。"},{name:"toast.success",type:"(message: string, options?: ToastShortcutOptions) => number",defaultValue:"—",description:"成功通知；info / warning / error 签名相同。"},{name:"toast.close",type:"(id: number) => void",defaultValue:"—",description:"关闭指定通知。"},{name:"toast.clear",type:"() => void",defaultValue:"—",description:"清空所有通知并取消计时器。"},{name:"useToast().toasts",type:"Readonly<Ref<ToastItem[]>>",defaultValue:"—",description:"当前显示在页面上的通知，不包含等待中的通知。"},{name:"useToast().queuedToasts",type:"Readonly<Ref<ToastItem[]>>",defaultValue:"—",description:"正在等待展示名额的通知；它们的自动关闭计时尚未开始。"},{name:"useToast",type:"() => UseToastReturn",defaultValue:"—",description:"返回响应式 toasts、queuedToasts 与同一组快捷方法，适合模板内渲染计数。"}]}],notes:["必须在应用外壳挂载一次 <MToast />；库不会自动创建第二个 Vue 应用，以免丢失 router、主题与依赖注入上下文。","默认最多同时显示 5 条，其余通知进入等待队列；每关闭或自动消失一条，下一条才进入展示区。","等待中的通知不会开始倒计时，进入展示区后才按 duration 计时，因此不会还没显示就过期。","内存队列上限为 20 条（含显示中与等待中）；达到上限时优先移除最早的等待通知，若没有等待通知则移除最早的显示通知。",'priority: "high" 会插到普通等待通知之前；展示区已满时，原本第 5 条普通通知退回等待队列，稍后继续显示。',"500ms 内相同类型、相同标题与内容的通知只保留一条，并刷新倒计时，避免重复点击造成堆积。","duration 为 0 的通知不会自动关闭，但仍占用一个普通展示名额，建议同时开启 closable。",'非 error 类型使用 role="status"，error 使用 role="alert"，避免重复播报。',"Toast 与 Message 是两套独立队列：Toast 承载可关闭的富内容，Message 只做顶部短确认。"]},JB={class:"demo-stack"},UB={class:"demo-row"},GB=V({__name:"Basic",setup(e){return(t,n)=>(b(),M("div",JB,[y("div",UB,[m(d($t),{content:"复制当前链接"},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[0]||(n[0]=[k("复制链接",-1)])]),_:1})]),_:1}),m(d($t),{content:"打开设置面板"},{default:g(()=>[m(d(P),{size:"small",type:"ghost"},{default:g(()=>[...n[1]||(n[1]=[k("设置",-1)])]),_:1})]),_:1})]),n[2]||(n[2]=y("p",{class:"demo-hint"},"悬停或聚焦触发器后显示；Escape 可关闭。",-1))]))}}),HB=`<script setup lang="ts">
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
`,jB=`<script setup>
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
`,WB={class:"demo-row"},qB=V({__name:"Delayed",setup(e){return(t,n)=>(b(),M("div",WB,[m(d($t),{content:"立即出现",delay:0},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[0]||(n[0]=[k("delay 0",-1)])]),_:1})]),_:1}),m(d($t),{content:"等待 600ms 后出现",delay:600},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[1]||(n[1]=[k("delay 600",-1)])]),_:1})]),_:1}),m(d($t),{content:"较长的说明文字，会自动换行并保持在视口内。","max-width":180},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[2]||(n[2]=[k("限制宽度",-1)])]),_:1})]),_:1})]))}}),KB=`<script setup lang="ts">
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
`,QB=`<script setup>
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
`,YB={class:"demo-stack"},XB=V({__name:"Manual",setup(e){const t=O(!1);return(n,o)=>(b(),M("div",YB,[m(d($t),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),trigger:"manual","hide-mode":"display",placement:"bottom",content:"由按钮控制的提示内容"},{default:g(()=>[m(d(P),{type:"outline",size:"small"},{default:g(()=>[...o[2]||(o[2]=[k("查看提示",-1)])]),_:1})]),_:1},8,["modelValue"]),m(d(P),{size:"small",onClick:o[1]||(o[1]=s=>t.value=!t.value)},{default:g(()=>[k(H(t.value?"关闭提示":"打开提示"),1)]),_:1}),o[3]||(o[3]=y("p",{class:"demo-hint"},'trigger="manual" 不绑定任何自动事件，v-model 完全由代码控制。',-1))]))}}),ZB=`<script setup lang="ts">
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
`,eC=`<script setup>
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
`,tC={class:"demo-row"},nC=V({__name:"Placements",setup(e){return(t,n)=>(b(),M("div",tC,[m(d($t),{content:"上方提示",placement:"top"},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[0]||(n[0]=[k("top",-1)])]),_:1})]),_:1}),m(d($t),{content:"下方提示",placement:"bottom"},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[1]||(n[1]=[k("bottom",-1)])]),_:1})]),_:1}),m(d($t),{content:"左侧提示",placement:"left"},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[2]||(n[2]=[k("left",-1)])]),_:1})]),_:1}),m(d($t),{content:"右侧提示",placement:"right"},{default:g(()=>[m(d(P),{size:"small"},{default:g(()=>[...n[3]||(n[3]=[k("right",-1)])]),_:1})]),_:1})]))}}),oC=`<script setup lang="ts">
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
`,sC=`<script setup>
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
`,aC={name:"tooltip",category:"overlay",title:"Tooltip 文字提示",summary:"悬停、聚焦或代码控制时显示的简短说明，支持视口翻转、延迟与两种隐藏模式。",description:"Tooltip 只承载简短、非交互的说明文字。它通过统一的浮层定位与 Overlay 基础设施计算位置，在空间不足时自动翻转，并支持悬停、点击、键盘焦点与 manual 受控模式。",status:"stable",since:"0.4.0",keywords:["tooltip","提示","悬停","浮层","说明"],sections:[{id:"basic",title:"基础用法",description:"content 提供文字；默认插槽是触发器。",demo:GB,code:HB,codeJs:jB},{id:"placements",title:"出现方向",description:"placement 是期望方向；空间不足时会自动翻转到相反方向。",demo:nC,code:oC,codeJs:sC},{id:"delayed",title:"延迟与宽度",description:"delay 控制出现延迟，maxWidth 限制浮层宽度并自动换行。",demo:qB,code:KB,codeJs:QB},{id:"manual",title:"受控模式",description:'trigger="manual" 不绑定悬停或点击；用 v-model 或 expose 的 show / hide 控制，hide-mode 选择保留或销毁面板。',demo:XB,code:ZB,codeJs:eC}],api:[{id:"tooltip-api",title:"MTooltip",props:[{name:"modelValue",type:"boolean",defaultValue:"—",description:"可选受控开关；manual 模式下通常配合 v-model 使用。"},{name:"content",type:"string",defaultValue:"—",description:"提示文字；content 插槽优先。"},{name:"trigger",type:"'hover' | 'click' | 'manual'",defaultValue:"'hover'",description:"打开方式；manual 禁用全部自动事件。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留面板并切换 display:none；unmount 销毁面板。"},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",defaultValue:"'top'",description:"期望出现方向，空间不足时自动翻转。"},{name:"offset",type:"number",defaultValue:"8",description:"触发器与浮层之间的间距（px）。"},{name:"delay",type:"number",defaultValue:"120",description:"显示延迟（ms）。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用提示。"},{name:"maxWidth",type:"number | string",defaultValue:"240",description:"浮层最大宽度；数字按 px 处理。"}],events:[{name:"update:modelValue",type:"(value: boolean) => void",description:"请求切换开关；受控时由父级写回 modelValue 后才会真正显示或隐藏。"},{name:"open",type:"() => void",description:"面板实际显示后触发；受控父级拒绝更新时不会触发。"},{name:"close",type:"() => void",description:"面板实际隐藏后触发；受控父级拒绝更新时不会触发。"}],slots:[{name:"default",type:"—",description:"触发器内容。"},{name:"content",type:"—",description:"自定义提示内容，优先于 content。"}]}],notes:["Tooltip 只用于简短说明；需要按钮、表单等交互内容时使用 Popover。","浮层本身 pointer-events: none，不会拦截鼠标；悬停触发器或聚焦其内部元素时显示。",'trigger="click" 会在点击外部时关闭；trigger="manual" 完全由 v-model 或实例方法控制。','hide-mode="display" 会保留面板 DOM 并切换 display:none，适合高频开关或需要保留内部状态的场景；默认 unmount 更节省 DOM。',"通过 Teleport 渲染到 body；触发器离开视口时自动收起，滚动与窗口尺寸变化时重新定位。","Escape 会请求关闭当前提示，并阻止事件继续传播到下层浮层。","受控模式下 update:modelValue 只表达请求；open / close 反映父级接受后的真实可见状态。","触发器被禁用时，浏览器不会派发焦点事件，但仍可通过外层悬停显示提示。"]},lC={class:"demo-row"},iC=V({__name:"Basic",setup(e){return(t,n)=>(b(),M("div",lC,[m(d(sl),null,{content:g(({target:o})=>[k(" 当前目标："+H(o?.getAttribute("data-tooltip")),1)]),default:g(()=>[(b(),M(le,null,Le(["复制","分享","收藏"],o=>m(d(P),{key:o,size:"small","data-tooltip":o},{default:g(()=>[k(H(o),1)]),_:2},1032,["data-tooltip"])),64))]),_:1})]))}}),rC=ie(iC,[["__scopeId","data-v-5888844b"]]),dC=`<script setup lang="ts">
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
`,uC=`<script setup>
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
`,cC={class:"demo-row"},mC={class:"rich-tip"},pC=V({__name:"RichContent",setup(e){return(t,n)=>(b(),M("div",cC,[m(d(sl),{"max-width":300},{content:g(({target:o})=>[y("span",mC,[y("strong",null,H(o?.getAttribute("data-tooltip")),1),n[2]||(n[2]=y("span",null," 多个触发器共享同一个 Teleport 面板，插槽内容可以完全自定义，并通过 target 读取当前目标信息。 ",-1))])]),default:g(()=>[m(d(P),{size:"small","data-tooltip":"同步状态"},{icon:g(()=>[m(d(tt),{type:"success",dot:""})]),default:g(()=>[n[0]||(n[0]=k(" 同步 ",-1))]),_:1}),m(d(P),{size:"small","data-tooltip":"离线缓存"},{icon:g(()=>[m(d(tt),{type:"warning",dot:""})]),default:g(()=>[n[1]||(n[1]=k(" 离线 ",-1))]),_:1})]),_:1})]))}}),fC=ie(pC,[["__scopeId","data-v-246d0ab1"]]),vC=`<script setup lang="ts">
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
`,gC=`<script setup>
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
`,hC={name:"tooltip-group",category:"overlay",title:"TooltipGroup 多目标提示",summary:"多个触发目标共享一个提示面板，用插槽完全自定义内容，减少重复实例。",description:"TooltipGroup 适用于列表、工具栏或表格中大量相似目标的说明场景。它通过事件委托在一个容器内识别 selector 命中的目标，只创建一个 Teleport 面板，并把 aria-describedby 动态挂到当前目标上。内容完全由 content 插槽决定。",status:"stable",since:"0.5.0",keywords:["tooltip","提示","多目标","共享","group","插槽"],sections:[{id:"basic",title:"共享一个提示框",description:"默认插槽放置多个目标，selector 默认命中 [data-tooltip]，content 插槽接收当前 target。",demo:rC,code:dC,codeJs:uC},{id:"rich-content",title:"自定义内容",description:"面板内容可以是任意结构；target 可用于读取目标数据，所有目标仍然共用一个实例。",demo:fC,code:vC,codeJs:gC}],api:[{id:"tooltip-group-api",title:"MTooltipGroup",props:[{name:"selector",type:"string",defaultValue:"'[data-tooltip]'",description:"在默认插槽内查找目标的 CSS 选择器。"},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",defaultValue:"'top'",description:"期望出现方向，空间不足时自动翻转。"},{name:"offset",type:"number",defaultValue:"8",description:"目标与面板之间的间距（px）。"},{name:"delay",type:"number",defaultValue:"120",description:"悬停显示延迟（ms）；焦点进入时立即显示。"},{name:"hideMode",type:"'display' | 'unmount'",defaultValue:"'unmount'",description:"display 保留面板并切换 display:none；unmount 销毁面板。"},{name:"disabled",type:"boolean",defaultValue:"false",description:"禁用整个提示组。"},{name:"maxWidth",type:"number | string",defaultValue:"260",description:"共享面板最大宽度；数字按 px 处理。"}],events:[{name:"open",type:"(target: HTMLElement) => void",description:"面板显示时触发，携带当前目标。"},{name:"close",type:"(target: HTMLElement | null) => void",description:"面板关闭时触发，携带关闭前的目标。"}],slots:[{name:"default",type:"—",description:"目标集合；selector 在这里查找。"},{name:"content",type:"{ target: HTMLElement | null }",description:"共享面板内容；target 为当前目标。"}]}],notes:["目标需要能被悬停或聚焦；原生 button、a 或带 tabindex 的元素都可以。","只创建一个面板实例；切换目标时复用同一个 DOM 节点，只更新内容和位置。","当前目标的 aria-describedby 指向共享面板，关闭或切换时会移除旧目标的关联。","默认 selector 为 [data-tooltip]；如果目标没有该属性，请显式传入自定义 selector。","面板默认 pointer-events: auto，便于在自定义内容中使用链接；不需要交互时保持简短文本即可。","共享内容无法同时显示两个目标；同一时间只跟随当前悬停或聚焦的目标。"]},bC=[uM,X_,rB,dw,ZM,Jw,Nk,ak,wk,CB,jx,fy,m1,Qb,Vb,NB,k0,Sx,cx,IM,q0,E1,aC,hC,Bw,l_,w_],rl=Ks.flatMap(e=>bC.filter(t=>t.category===e.id));Ks.map(e=>({category:e,docs:rl.filter(t=>t.category===e.id)})).filter(e=>e.docs.length>0);const yC=Object.fromEntries(rl.map(e=>[e.name,e]));function oT(e){return yC[e]}const MC={class:"component-search__shortcut"},_C=V({__name:"ComponentSearch",setup(e){const t=qs(),n=O(null),o=typeof navigator<"u"&&/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent);async function s(){window.innerWidth<=980&&(t.openSidebar(),await lt()),n.value?.querySelector("input")?.focus()}function a(i){(i.metaKey||i.ctrlKey)&&i.key.toLowerCase()==="k"&&(i.preventDefault(),s())}function l(){t.searchQuery&&(t.searchQuery="")}return pn(()=>window.addEventListener("keydown",a)),bt(()=>window.removeEventListener("keydown",a)),(i,r)=>(b(),M("div",{ref_key:"wrapper",ref:n,class:"component-search",onKeydown:Bm(l,["esc"])},[m(d(Ne),{modelValue:d(t).searchQuery,"onUpdate:modelValue":r[0]||(r[0]=c=>d(t).searchQuery=c),type:"search",size:"small",placeholder:"搜索组件或规范…","aria-label":"搜索组件或设计规范",clearable:""},{suffix:g(()=>[y("kbd",MC,H(d(o)?"⌘ K":"Ctrl K"),1)]),_:1},8,["modelValue"])],544))}}),wC=ie(_C,[["__scopeId","data-v-e26ddc26"]]),kC={class:"sidebar-mobile-head"},xC={class:"sidebar-nav","aria-label":"文档导航"},BC={class:"sidebar-group__title"},CC={class:"sidebar-group__count"},TC={key:0,class:"sidebar-group"},$C={class:"sidebar-group__title"},VC={class:"sidebar-group__count"},SC={key:1,class:"sidebar-empty"},IC={class:"sidebar-footer"},zC=V({__name:"AppSidebar",setup(e){const t=[{title:"色彩 Colors",path:"/design/colors",keywords:["颜色","主题","color","token"]},{title:"字体 Typography",path:"/design/typography",keywords:["字号","字重","font"]},{title:"间距 Spacing",path:"/design/spacing",keywords:["间距","space","4px"]},{title:"圆角 Radius",path:"/design/radius",keywords:["圆角","radius","border"]},{title:"动效 Motion",path:"/design/motion",keywords:["动画","过渡","transition"]}],n=Ws(),o=qs(),s=T(()=>o.searchQuery.trim().toLowerCase());function a(p){return s.value?p.some(f=>f.toLowerCase().includes(s.value)):!0}const l=T(()=>rl.filter(p=>a([p.title,p.summary,p.description,...p.keywords]))),i=T(()=>Ks.map(p=>({category:p,docs:l.value.filter(f=>f.category===p.id)})).filter(p=>p.docs.length>0)),r=T(()=>t.filter(p=>a([p.title,...p.keywords]))),c=T(()=>l.value.length+r.value.length>0);function u(p){return n.path===p}return(p,f)=>(b(),M("aside",{class:ue(["app-sidebar",{"is-open":d(o).sidebarOpen}])},[y("div",kC,[f[3]||(f[3]=y("span",{class:"sidebar-mobile-head__title"},"文档导航",-1)),y("button",{type:"button",class:"sidebar-mobile-head__close","aria-label":"关闭导航",onClick:f[0]||(f[0]=v=>d(o).closeSidebar())},[m(d(St),{name:"close",size:18})])]),m(wC,{class:"app-sidebar__search"}),y("nav",xC,[(b(!0),M(le,null,Le(i.value,v=>(b(),M("section",{key:v.category.id,class:"sidebar-group"},[y("p",BC,[k(H(v.category.title)+" ",1),y("span",CC,H(v.docs.length),1)]),y("ul",null,[(b(!0),M(le,null,Le(v.docs,x=>(b(),M("li",{key:x.name},[m(d(to),{to:`/components/${x.name}`,class:ue(["sidebar-link",{"is-active":u(`/components/${x.name}`)}]),"aria-current":u(`/components/${x.name}`)?"page":void 0,onClick:f[1]||(f[1]=$=>d(o).closeSidebar())},{default:g(()=>[y("span",null,H(x.title),1)]),_:2},1032,["to","class","aria-current"])]))),128))])]))),128)),r.value.length?(b(),M("section",TC,[y("p",$C,[f[4]||(f[4]=k(" 设计规范 ",-1)),y("span",VC,H(r.value.length),1)]),y("ul",null,[(b(!0),M(le,null,Le(r.value,v=>(b(),M("li",{key:v.path},[m(d(to),{to:v.path,class:ue(["sidebar-link",{"is-active":u(v.path)}]),"aria-current":u(v.path)?"page":void 0,onClick:f[2]||(f[2]=x=>d(o).closeSidebar())},{default:g(()=>[y("span",null,H(v.title),1)]),_:2},1032,["to","class","aria-current"])]))),128))])])):te("",!0),c.value?te("",!0):(b(),M("p",SC,"没有匹配的内容，试试「按钮」或「主题」。"))]),y("div",IC,[y("p",null,H(d(ro).name)+" v"+H(d(ro).version),1),f[5]||(f[5]=y("p",null,"Phase 02 · 扩展性修订",-1))])],2))}}),EC=ie(zC,[["__scopeId","data-v-8d976987"]]),AC={key:0,class:"doc-toc","aria-label":"本页目录"},RC={class:"doc-toc__list"},DC=["href"],PC={class:"doc-toc__top",href:"#doc-main"},OC=V({__name:"DocToc",setup(e){const t=Ws(),n=O([]),o=O("");let s=0;function a(){const c=Array.from(document.querySelectorAll(".docs-main h2[id]"));n.value=c.map(u=>({id:u.id,text:(u.textContent??"").replace(/\s+/g," ").trim()})),l()}function l(){if(n.value.length===0){o.value="";return}const c=200;let u=n.value[0]?.id??"";for(const p of n.value){const f=document.getElementById(p.id);f&&f.getBoundingClientRect().top<=c&&(u=p.id)}o.value=u}function i(){s===0&&(s=window.requestAnimationFrame(()=>{s=0,l()}))}async function r(){await lt(),await new Promise(c=>window.requestAnimationFrame(()=>c())),a()}return ze(()=>t.fullPath,()=>{r()}),pn(()=>{window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),r()}),bt(()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i),s!==0&&window.cancelAnimationFrame(s)}),(c,u)=>n.value.length>1?(b(),M("nav",AC,[u[1]||(u[1]=y("p",{class:"doc-toc__title"},"本页目录",-1)),y("ul",RC,[(b(!0),M(le,null,Le(n.value,p=>(b(),M("li",{key:p.id},[y("a",{href:`#${p.id}`,class:ue(["doc-toc__link",{"is-active":o.value===p.id}])},H(p.text),11,DC)]))),128))]),y("a",PC,[m(d(St),{name:"arrow-left",size:13,class:"doc-toc__top-icon"}),u[0]||(u[0]=k(" 回到顶部 ",-1))])])):te("",!0)}}),LC=ie(OC,[["__scopeId","data-v-c03e6fc0"]]),FC={class:"docs-shell"},NC={id:"doc-main",class:"docs-main",tabindex:"-1"},JC={key:1,class:"docs-toc"},UC={class:"docs-footer"},GC={class:"docs-footer__inner"},HC=["href"],jC=V({__name:"DocsLayout",setup(e){const t=Ws(),n=qs(),o=T(()=>t.name==="component"||String(t.name??"").startsWith("design-"));function s(l){typeof window>"u"||(window.innerWidth<=980?document.body.style.overflow=l?"hidden":"":document.body.style.overflow="")}function a(){window.innerWidth>980&&(n.closeSidebar(),s(!1))}return ze(()=>n.sidebarOpen,l=>s(l)),ze(()=>t.fullPath,l=>{n.closeSidebar(),s(!1),n.recordVisit(l)}),pn(()=>window.addEventListener("resize",a)),bt(()=>{window.removeEventListener("resize",a),document.body.style.overflow=""}),(l,i)=>(b(),M("div",FC,[m(ub),y("div",{class:ue(["docs-body",{"docs-body--with-toc":o.value}])},[m(EC),d(n).sidebarOpen?(b(),M("div",{key:0,class:"docs-backdrop","aria-hidden":"true",onClick:i[0]||(i[0]=r=>d(n).closeSidebar())})):te("",!0),y("main",NC,[m(d(Gd))]),o.value?(b(),M("aside",JC,[m(LC)])):te("",!0)],2),y("footer",UC,[y("div",GC,[y("span",null,"© 2026 "+H(d(ro).name)+" · MIT License",1),i[1]||(i[1]=y("span",{class:"docs-footer__meta"},"0.5.0 · Extensibility & Text",-1)),y("a",{href:d(ro).github,target:"_blank",rel:"noopener noreferrer"},"GitHub",8,HC)])]),m(d(Sd)),m(d(_d))]))}}),WC=ie(jC,[["__scopeId","data-v-d84cf05e"]]),qC=V({__name:"App",setup(e){return(t,n)=>(b(),M(le,null,[n[0]||(n[0]=y("a",{class:"skip-link",href:"#doc-main"},"跳到正文",-1)),m(WC)],64))}}),KC="modulepreload",QC=function(e){return"/anemia-ui-docs/"+e},xi={},gn=function(t,n,o){let s=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=i?.nonce||i?.getAttribute("nonce");s=l(n.map(c=>{if(c=QC(c),c in xi)return;xi[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":KC,u||(f.as="script"),f.crossOrigin="",f.href=c,r&&f.setAttribute("nonce",r),document.head.appendChild(f),u)return new Promise((v,x)=>{f.addEventListener("load",v),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return s.then(l=>{for(const i of l||[])i.status==="rejected"&&a(i.reason);return t().catch(a)})},YC=Yh({history:Ih("/anemia-ui-docs"),routes:[{path:"/",name:"home",component:()=>gn(()=>import("./HomePage-DIvPPZd3.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},{path:"/components",name:"components",component:()=>gn(()=>import("./ComponentsOverview-DQX0gTxv.js"),__vite__mapDeps([7,3,4,8,9,5,10]))},{path:"/components/:name",name:"component",component:()=>gn(()=>import("./ComponentPage-Dvnlym9B.js"),__vite__mapDeps([11,1,2,8,9,5,12])),props:!0},{path:"/design/colors",name:"design-colors",component:()=>gn(()=>import("./ColorsPage-CjO3u-MP.js"),__vite__mapDeps([13,14,8,9,5,15]))},{path:"/design/typography",name:"design-typography",component:()=>gn(()=>import("./TypographyPage-pHfpEpnb.js"),__vite__mapDeps([16,17,14,18,8,9,5,19]))},{path:"/design/spacing",name:"design-spacing",component:()=>gn(()=>import("./SpacingPage-Bw1bzYve.js"),__vite__mapDeps([20,17,14,18,8,9,5,21]))},{path:"/design/radius",name:"design-radius",component:()=>gn(()=>import("./RadiusPage-Bn_Maat6.js"),__vite__mapDeps([22,17,14,18,8,9,5,23]))},{path:"/design/motion",name:"design-motion",component:()=>gn(()=>import("./MotionPage-CTzpQOhF.js"),__vite__mapDeps([24,17,14,18,8,9,5,25]))},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.hash?{el:e.hash,top:88,behavior:"smooth"}:{top:0})}}),Qs=$m(qC);Qs.use(Im());Qs.use(YC);Qs.use(Wg);Qs.mount("#app");export{T as A,pe as B,ue as C,Ws as D,te as E,le as F,hr as G,oT as H,ze as I,bt as J,Je as K,Ya as L,tt as M,eT as N,pn as O,Nu as P,Ct as Q,to as R,ie as _,y as a,m as b,M as c,V as d,Oe as e,Ye as f,k as g,Ne as h,jt as i,P as j,tT as k,Le as l,St as m,Tt as n,b as o,ye as p,on as q,O as r,ro as s,H as t,d as u,nT as v,g as w,rl as x,ZC as y,fo as z};
