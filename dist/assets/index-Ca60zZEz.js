(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Za={exports:{}},ll={},Ja={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),vc=Symbol.for("react.portal"),gc=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Sc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),Vs=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var eo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},to=Object.assign,no={};function sn(e,t,n){this.props=e,this.context=t,this.refs=no,this.updater=n||eo}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ro(){}ro.prototype=sn.prototype;function Bi(e,t,n){this.props=e,this.context=t,this.refs=no,this.updater=n||eo}var Wi=Bi.prototype=new ro;Wi.constructor=Bi;to(Wi,sn.prototype);Wi.isPureReactComponent=!0;var Bs=Array.isArray,lo=Object.prototype.hasOwnProperty,Hi={current:null},io={key:!0,ref:!0,__self:!0,__source:!0};function so(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)lo.call(t,r)&&!io.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var u=Array(o),f=0;f<o;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:Yn,type:e,key:i,ref:a,props:l,_owner:Hi.current}}function zc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function Pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yn:case vc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Nl(a,0):r,Bs(l)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),xr(l,t,n,"",function(f){return f})):l!=null&&(Qi(l)&&(l=zc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ws,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Bs(e))for(var o=0;o<e.length;o++){i=e[o];var u=r+Nl(i,o);a+=xr(i,t,n,u,l)}else if(u=Cc(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=r+Nl(i,o++),a+=xr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Lc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},Rc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Hi};function ao(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=sn;_.Fragment=gc;_.Profiler=xc;_.PureComponent=Bi;_.StrictMode=yc;_.Suspense=Nc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rc;_.act=ao;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=to({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Hi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)lo.call(t,u)&&!io.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var f=0;f<u;f++)o[f]=arguments[f+2];r.children=o}return{$$typeof:Yn,type:e.type,key:l,ref:i,props:r,_owner:a}};_.createContext=function(e){return e={$$typeof:kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};_.createElement=so;_.createFactory=function(e){var t=so.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:jc,render:e}};_.isValidElement=Qi;_.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:Lc}};_.memo=function(e,t){return{$$typeof:Sc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};_.unstable_act=ao;_.useCallback=function(e,t){return ue.current.useCallback(e,t)};_.useContext=function(e){return ue.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};_.useEffect=function(e,t){return ue.current.useEffect(e,t)};_.useId=function(){return ue.current.useId()};_.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return ue.current.useMemo(e,t)};_.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};_.useRef=function(e){return ue.current.useRef(e)};_.useState=function(e){return ue.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return ue.current.useTransition()};_.version="18.3.1";Ja.exports=_;var Y=Ja.exports;const _c=hc(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=Y,Ac=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Ic=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bc={key:!0,ref:!0,__self:!0,__source:!0};function oo(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Dc.call(t,r)&&!bc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ac,type:e,key:i,ref:a,props:l,_owner:Ic.current}}ll.Fragment=Tc;ll.jsx=oo;ll.jsxs=oo;Za.exports=ll;var s=Za.exports,Yl={},uo={exports:{}},we={},co={exports:{}},fo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,L){var R=S.length;S.push(L);e:for(;0<R;){var H=R-1>>>1,G=S[H];if(0<l(G,L))S[H]=L,S[R]=G,R=H;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var L=S[0],R=S.pop();if(R!==L){S[0]=R;e:for(var H=0,G=S.length,er=G>>>1;H<er;){var gt=2*(H+1)-1,jl=S[gt],yt=gt+1,tr=S[yt];if(0>l(jl,R))yt<G&&0>l(tr,jl)?(S[H]=tr,S[yt]=R,H=yt):(S[H]=jl,S[gt]=R,H=gt);else if(yt<G&&0>l(tr,R))S[H]=tr,S[yt]=R,H=yt;else break e}}return L}function l(S,L){var R=S.sortIndex-L.sortIndex;return R!==0?R:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],f=[],v=1,h=null,m=3,k=!1,w=!1,g=!1,P=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var L=n(f);L!==null;){if(L.callback===null)r(f);else if(L.startTime<=S)r(f),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(f)}}function y(S){if(g=!1,p(S),!w)if(n(u)!==null)w=!0,wl(N);else{var L=n(f);L!==null&&kl(y,L.startTime-S)}}function N(S,L){w=!1,g&&(g=!1,c(z),z=-1),k=!0;var R=m;try{for(p(L),h=n(u);h!==null&&(!(h.expirationTime>L)||S&&!Pe());){var H=h.callback;if(typeof H=="function"){h.callback=null,m=h.priorityLevel;var G=H(h.expirationTime<=L);L=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(u)&&r(u),p(L)}else r(u);h=n(u)}if(h!==null)var er=!0;else{var gt=n(f);gt!==null&&kl(y,gt.startTime-L),er=!1}return er}finally{h=null,m=R,k=!1}}var E=!1,C=null,z=-1,W=5,M=-1;function Pe(){return!(e.unstable_now()-M<W)}function un(){if(C!==null){var S=e.unstable_now();M=S;var L=!0;try{L=C(!0,S)}finally{L?cn():(E=!1,C=null)}}else E=!1}var cn;if(typeof d=="function")cn=function(){d(un)};else if(typeof MessageChannel<"u"){var Us=new MessageChannel,mc=Us.port2;Us.port1.onmessage=un,cn=function(){mc.postMessage(null)}}else cn=function(){P(un,0)};function wl(S){C=S,E||(E=!0,cn())}function kl(S,L){z=P(function(){S(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,wl(N))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var R=m;m=L;try{return S()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var R=m;m=S;try{return L()}finally{m=R}},e.unstable_scheduleCallback=function(S,L,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,S){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=R+G,S={id:v++,callback:L,priorityLevel:S,startTime:R,expirationTime:G,sortIndex:-1},R>H?(S.sortIndex=R,t(f,S),n(u)===null&&S===n(f)&&(g?(c(z),z=-1):g=!0,kl(y,R-H))):(S.sortIndex=G,t(u,S),w||k||(w=!0,wl(N))),S},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(S){var L=m;return function(){var R=m;m=L;try{return S.apply(this,arguments)}finally{m=R}}}})(fo);co.exports=fo;var Fc=co.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=Y,xe=Fc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var po=new Set,Mn={};function _t(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)po.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,$c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hs={},Qs={};function Uc(e){return ql.call(Qs,e)?!0:ql.call(Hs,e)?!1:$c.test(e)?Qs[e]=!0:(Hs[e]=!0,!1)}function Vc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,n,r){if(t===null||typeof t>"u"||Vc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ki=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ki,Xi);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ki,Xi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ki,Xi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,n,l,r)&&(n=null),r||l===null?Uc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Tt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),qi=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),mo=Symbol.for("react.provider"),ho=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),vo=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Sl;function xn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,o=i.length-1;1<=a&&0<=o&&l[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==i[o]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Wc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Tt:return"Portal";case Gl:return"Profiler";case qi:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ho:return(e.displayName||"Context")+".Consumer";case mo:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zi:return t=e.displayName||null,t!==null?t:ei(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return ei(e(t))}catch{}}return null}function Hc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ei(t);case 8:return t===qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function go(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qc(e){var t=go(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Qc(e))}function yo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=go(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xo(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ni(e,t){xo(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&ri(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ri(e,t,n){(t!=="number"||_r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(wn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function wo(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ko(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,jo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kc=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Kc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function No(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function So(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=No(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Xc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(Xc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oi=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Kt=null,Xt=null;function Zs(e){if(e=Zn(e)){if(typeof ui!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ul(t),ui(e.stateNode,e.type,t))}}function Eo(e){Kt?Xt?Xt.push(e):Xt=[e]:Kt=e}function Co(){if(Kt){var e=Kt,t=Xt;if(Xt=Kt=null,Zs(e),t)for(e=0;e<t.length;e++)Zs(t[e])}}function zo(e,t){return e(t)}function Po(){}var zl=!1;function Lo(e,t,n){if(zl)return e(t,n);zl=!0;try{return zo(e,t,n)}finally{zl=!1,(Kt!==null||Xt!==null)&&(Po(),Co())}}function Tn(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var ci=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ci=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ci=!1}function Yc(e,t,n,r,l,i,a,o,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var Sn=!1,Mr=null,Ar=!1,di=null,qc={onError:function(e){Sn=!0,Mr=e}};function Gc(e,t,n,r,l,i,a,o,u){Sn=!1,Mr=null,Yc.apply(qc,arguments)}function Zc(e,t,n,r,l,i,a,o,u){if(Gc.apply(this,arguments),Sn){if(Sn){var f=Mr;Sn=!1,Mr=null}else throw Error(x(198));Ar||(Ar=!0,di=f)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ro(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Js(e){if(Mt(e)!==e)throw Error(x(188))}function Jc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Js(l),e;if(i===r)return Js(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,o=l.child;o;){if(o===n){a=!0,n=l,r=i;break}if(o===r){a=!0,r=l,n=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===n){a=!0,n=i,r=l;break}if(o===r){a=!0,r=i,n=l;break}o=o.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function _o(e){return e=Jc(e),e!==null?Mo(e):null}function Mo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mo(e);if(t!==null)return t;e=e.sibling}return null}var Ao=xe.unstable_scheduleCallback,ea=xe.unstable_cancelCallback,ed=xe.unstable_shouldYield,td=xe.unstable_requestPaint,Q=xe.unstable_now,nd=xe.unstable_getCurrentPriorityLevel,es=xe.unstable_ImmediatePriority,To=xe.unstable_UserBlockingPriority,Tr=xe.unstable_NormalPriority,rd=xe.unstable_LowPriority,Do=xe.unstable_IdlePriority,il=null,Oe=null;function ld(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:ad,id=Math.log,sd=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(id(e)/sd|0)|0}var sr=64,ar=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~l;o!==0?r=kn(o):(i&=a,i!==0&&(r=kn(i)))}else a=n&~l,a!==0?r=kn(a):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),l=1<<n,r|=e[n],t&=~l;return r}function od(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ae(i),o=1<<a,u=l[a];u===-1?(!(o&n)||o&r)&&(l[a]=od(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Io(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ae(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var T=0;function bo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fo,ns,Oo,$o,Uo,pi=!1,or=[],lt=null,it=null,st=null,Dn=new Map,In=new Map,et=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ta(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&ns(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fd(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return it=pn(it,e,t,n,r,l),!0;case"mouseover":return st=pn(st,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Dn.set(i,pn(Dn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,In.set(i,pn(In.get(i)||null,e,t,n,r,l)),!0}return!1}function Vo(e){var t=kt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ro(n),t!==null){e.blockedOn=t,Uo(e.priority,function(){Oo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oi=r,n.target.dispatchEvent(r),oi=null}else return t=Zn(n),t!==null&&ns(t),e.blockedOn=n,!1;t.shift()}return!0}function na(e,t,n){kr(e)&&n.delete(t)}function pd(){pi=!1,lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),st!==null&&kr(st)&&(st=null),Dn.forEach(na),In.forEach(na)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,pi||(pi=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,pd)))}function bn(e){function t(l){return mn(l,e)}if(0<or.length){mn(or[0],e);for(var n=1;n<or.length;n++){var r=or[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),it!==null&&mn(it,e),st!==null&&mn(st,e),Dn.forEach(t),In.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Vo(n),n.blockedOn===null&&et.shift()}var Yt=qe.ReactCurrentBatchConfig,Ir=!0;function md(e,t,n,r){var l=T,i=Yt.transition;Yt.transition=null;try{T=1,rs(e,t,n,r)}finally{T=l,Yt.transition=i}}function hd(e,t,n,r){var l=T,i=Yt.transition;Yt.transition=null;try{T=4,rs(e,t,n,r)}finally{T=l,Yt.transition=i}}function rs(e,t,n,r){if(Ir){var l=mi(e,t,n,r);if(l===null)Fl(e,t,r,br,n),ta(e,r);else if(fd(l,e,t,n,r))r.stopPropagation();else if(ta(e,r),t&4&&-1<dd.indexOf(e)){for(;l!==null;){var i=Zn(l);if(i!==null&&Fo(i),i=mi(e,t,n,r),i===null&&Fl(e,t,r,br,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var br=null;function mi(e,t,n,r){if(br=null,e=Ji(r),e=kt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ro(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return br=e,null}function Bo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case es:return 1;case To:return 4;case Tr:case rd:return 16;case Do:return 536870912;default:return 16}default:return 16}}var nt=null,ls=null,jr=null;function Wo(){if(jr)return jr;var e,t=ls,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function ra(){return!1}function ke(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:ra,this.isPropagationStopped=ra,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=ke(an),Gn=V({},an,{view:0,detail:0}),vd=ke(Gn),Ll,Rl,hn,sl=V({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Ll=e.screenX-hn.screenX,Rl=e.screenY-hn.screenY):Rl=Ll=0,hn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),la=ke(sl),gd=V({},sl,{dataTransfer:0}),yd=ke(gd),xd=V({},Gn,{relatedTarget:0}),_l=ke(xd),wd=V({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=ke(wd),jd=V({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=ke(jd),Sd=V({},an,{data:0}),ia=ke(Sd),Ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zd[e])?!!t[e]:!1}function ss(){return Pd}var Ld=V({},Gn,{key:function(e){if(e.key){var t=Ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=ke(Ld),_d=V({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=ke(_d),Md=V({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),Ad=ke(Md),Td=V({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=ke(Td),Id=V({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bd=ke(Id),Fd=[9,13,27,32],as=Qe&&"CompositionEvent"in window,En=null;Qe&&"documentMode"in document&&(En=document.documentMode);var Od=Qe&&"TextEvent"in window&&!En,Ho=Qe&&(!as||En&&8<En&&11>=En),aa=" ",oa=!1;function Qo(e,t){switch(e){case"keyup":return Fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ko(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function $d(e,t){switch(e){case"compositionend":return Ko(t);case"keypress":return t.which!==32?null:(oa=!0,aa);case"textInput":return e=t.data,e===aa&&oa?null:e;default:return null}}function Ud(e,t){if(It)return e==="compositionend"||!as&&Qo(e,t)?(e=Wo(),jr=ls=nt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ho&&t.locale!=="ko"?null:t.data;default:return null}}var Vd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vd[e.type]:t==="textarea"}function Xo(e,t,n,r){Eo(r),t=Fr(t,"onChange"),0<t.length&&(n=new is("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,Fn=null;function Bd(e){iu(e,0)}function al(e){var t=Ot(e);if(yo(t))return e}function Wd(e,t){if(e==="change")return t}var Yo=!1;if(Qe){var Ml;if(Qe){var Al="oninput"in document;if(!Al){var ca=document.createElement("div");ca.setAttribute("oninput","return;"),Al=typeof ca.oninput=="function"}Ml=Al}else Ml=!1;Yo=Ml&&(!document.documentMode||9<document.documentMode)}function da(){Cn&&(Cn.detachEvent("onpropertychange",qo),Fn=Cn=null)}function qo(e){if(e.propertyName==="value"&&al(Fn)){var t=[];Xo(t,Fn,e,Ji(e)),Lo(Bd,t)}}function Hd(e,t,n){e==="focusin"?(da(),Cn=t,Fn=n,Cn.attachEvent("onpropertychange",qo)):e==="focusout"&&da()}function Qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Fn)}function Kd(e,t){if(e==="click")return al(t)}function Xd(e,t){if(e==="input"||e==="change")return al(t)}function Yd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Yd;function On(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ql.call(t,l)||!De(e[l],t[l]))return!1}return!0}function fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pa(e,t){var n=fa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fa(n)}}function Go(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Go(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zo(){for(var e=window,t=_r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qd(e){var t=Zo(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Go(n.ownerDocument.documentElement,n)){if(r!==null&&os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=pa(n,i);var a=pa(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=Qe&&"documentMode"in document&&11>=document.documentMode,bt=null,hi=null,zn=null,vi=!1;function ma(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vi||bt==null||bt!==_r(r)||(r=bt,"selectionStart"in r&&os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&On(zn,r)||(zn=r,r=Fr(hi,"onSelect"),0<r.length&&(t=new is("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Tl={},Jo={};Qe&&(Jo=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ol(e){if(Tl[e])return Tl[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jo)return Tl[e]=t[n];return e}var eu=ol("animationend"),tu=ol("animationiteration"),nu=ol("animationstart"),ru=ol("transitionend"),lu=new Map,ha="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){lu.set(e,t),_t(t,[e])}for(var Dl=0;Dl<ha.length;Dl++){var Il=ha[Dl],Zd=Il.toLowerCase(),Jd=Il[0].toUpperCase()+Il.slice(1);mt(Zd,"on"+Jd)}mt(eu,"onAnimationEnd");mt(tu,"onAnimationIteration");mt(nu,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(ru,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zc(r,t,void 0,e),e.currentTarget=null}function iu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,f=o.currentTarget;if(o=o.listener,u!==i&&l.isPropagationStopped())break e;va(l,o,f),i=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,f=o.currentTarget,o=o.listener,u!==i&&l.isPropagationStopped())break e;va(l,o,f),i=u}}}if(Ar)throw e=di,Ar=!1,di=null,e}function b(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+"__bubble";n.has(r)||(su(t,e,2,!1),n.add(r))}function bl(e,t,n){var r=0;t&&(r|=4),su(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[dr]){e[dr]=!0,po.forEach(function(n){n!=="selectionchange"&&(ef.has(n)||bl(n,!1,e),bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,bl("selectionchange",!1,t))}}function su(e,t,n,r){switch(Bo(t)){case 1:var l=md;break;case 4:l=hd;break;default:l=rs}n=l.bind(null,t,n,e),l=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;o!==null;){if(a=kt(o),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}o=o.parentNode}}r=r.return}Lo(function(){var f=i,v=Ji(n),h=[];e:{var m=lu.get(e);if(m!==void 0){var k=is,w=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":k=Rd;break;case"focusin":w="focus",k=_l;break;case"focusout":w="blur",k=_l;break;case"beforeblur":case"afterblur":k=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=la;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Ad;break;case eu:case tu:case nu:k=kd;break;case ru:k=Dd;break;case"scroll":k=vd;break;case"wheel":k=bd;break;case"copy":case"cut":case"paste":k=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sa}var g=(t&4)!==0,P=!g&&e==="scroll",c=g?m!==null?m+"Capture":null:m;g=[];for(var d=f,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,c!==null&&(y=Tn(d,c),y!=null&&g.push(Un(d,y,p)))),P)break;d=d.return}0<g.length&&(m=new k(m,w,null,n,v),h.push({event:m,listeners:g}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==oi&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Ke]))break e;if((k||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=f,w=w?kt(w):null,w!==null&&(P=Mt(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=f),k!==w)){if(g=la,y="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=sa,y="onPointerLeave",c="onPointerEnter",d="pointer"),P=k==null?m:Ot(k),p=w==null?m:Ot(w),m=new g(y,d+"leave",k,n,v),m.target=P,m.relatedTarget=p,y=null,kt(v)===f&&(g=new g(c,d+"enter",w,n,v),g.target=p,g.relatedTarget=P,y=g),P=y,k&&w)t:{for(g=k,c=w,d=0,p=g;p;p=At(p))d++;for(p=0,y=c;y;y=At(y))p++;for(;0<d-p;)g=At(g),d--;for(;0<p-d;)c=At(c),p--;for(;d--;){if(g===c||c!==null&&g===c.alternate)break t;g=At(g),c=At(c)}g=null}else g=null;k!==null&&ga(h,m,k,g,!1),w!==null&&P!==null&&ga(h,P,w,g,!0)}}e:{if(m=f?Ot(f):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var N=Wd;else if(ua(m))if(Yo)N=Xd;else{N=Qd;var E=Hd}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Kd);if(N&&(N=N(e,f))){Xo(h,N,n,v);break e}E&&E(e,m,f),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ri(m,"number",m.value)}switch(E=f?Ot(f):window,e){case"focusin":(ua(E)||E.contentEditable==="true")&&(bt=E,hi=f,zn=null);break;case"focusout":zn=hi=bt=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,ma(h,n,v);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":ma(h,n,v)}var C;if(as)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else It?Qo(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ho&&n.locale!=="ko"&&(It||z!=="onCompositionStart"?z==="onCompositionEnd"&&It&&(C=Wo()):(nt=v,ls="value"in nt?nt.value:nt.textContent,It=!0)),E=Fr(f,z),0<E.length&&(z=new ia(z,e,null,n,v),h.push({event:z,listeners:E}),C?z.data=C:(C=Ko(n),C!==null&&(z.data=C)))),(C=Od?$d(e,n):Ud(e,n))&&(f=Fr(f,"onBeforeInput"),0<f.length&&(v=new ia("onBeforeInput","beforeinput",null,n,v),h.push({event:v,listeners:f}),v.data=C))}iu(h,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Tn(e,n),i!=null&&r.unshift(Un(e,i,l)),i=Tn(e,t),i!=null&&r.push(Un(e,i,l))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ga(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,f=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&f!==null&&(o=f,l?(u=Tn(n,i),u!=null&&a.unshift(Un(n,u,o))):l||(u=Tn(n,i),u!=null&&a.push(Un(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function ya(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(nf,"")}function fr(e,t,n){if(t=ya(t),ya(e)!==t&&n)throw Error(x(425))}function Or(){}var gi=null,yi=null;function xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,lf=typeof queueMicrotask=="function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(sf)}:wi;function sf(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);bn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var on=Math.random().toString(36).slice(2),Fe="__reactFiber$"+on,Vn="__reactProps$"+on,Ke="__reactContainer$"+on,ki="__reactEvents$"+on,af="__reactListeners$"+on,of="__reactHandles$"+on;function kt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wa(e);e!==null;){if(n=e[Fe])return n;e=wa(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ul(e){return e[Vn]||null}var ji=[],$t=-1;function ht(e){return{current:e}}function F(e){0>$t||(e.current=ji[$t],ji[$t]=null,$t--)}function D(e,t){$t++,ji[$t]=e.current,e.current=t}var pt={},se=ht(pt),pe=ht(!1),Ct=pt;function Jt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function $r(){F(pe),F(se)}function ka(e,t,n){if(se.current!==pt)throw Error(x(168));D(se,t),D(pe,n)}function au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Hc(e)||"Unknown",l));return V({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Ct=se.current,D(se,e),D(pe,pe.current),!0}function ja(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=au(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,F(pe),F(se),D(se,e)):F(pe),D(pe,n)}var Ve=null,cl=!1,$l=!1;function ou(e){Ve===null?Ve=[e]:Ve.push(e)}function uf(e){cl=!0,ou(e)}function vt(){if(!$l&&Ve!==null){$l=!0;var e=0,t=T;try{var n=Ve;for(T=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,cl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Ao(es,vt),l}finally{T=t,$l=!1}}return null}var Ut=[],Vt=0,Vr=null,Br=0,je=[],Ne=0,zt=null,Be=1,We="";function xt(e,t){Ut[Vt++]=Br,Ut[Vt++]=Vr,Vr=e,Br=t}function uu(e,t,n){je[Ne++]=Be,je[Ne++]=We,je[Ne++]=zt,zt=e;var r=Be;e=We;var l=32-Ae(r)-1;r&=~(1<<l),n+=1;var i=32-Ae(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Be=1<<32-Ae(t)+l|n<<l|r,We=i+e}else Be=1<<i|n<<l|r,We=e}function us(e){e.return!==null&&(xt(e,1),uu(e,1,0))}function cs(e){for(;e===Vr;)Vr=Ut[--Vt],Ut[Vt]=null,Br=Ut[--Vt],Ut[Vt]=null;for(;e===zt;)zt=je[--Ne],je[Ne]=null,We=je[--Ne],je[Ne]=null,Be=je[--Ne],je[Ne]=null}var ye=null,ge=null,O=!1,Me=null;function cu(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ge=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:Be,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ge=null,!0):!1;default:return!1}}function Ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(O){var t=ge;if(t){var n=t;if(!Na(e,t)){if(Ni(e))throw Error(x(418));t=at(n.nextSibling);var r=ye;t&&Na(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,O=!1,ye=e)}}else{if(Ni(e))throw Error(x(418));e.flags=e.flags&-4097|2,O=!1,ye=e}}}function Sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!O)return Sa(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xi(e.type,e.memoizedProps)),t&&(t=ge)){if(Ni(e))throw du(),Error(x(418));for(;t;)cu(e,t),t=at(t.nextSibling)}if(Sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ye?at(e.stateNode.nextSibling):null;return!0}function du(){for(var e=ge;e;)e=at(e.nextSibling)}function en(){ge=ye=null,O=!1}function ds(e){Me===null?Me=[e]:Me.push(e)}var cf=qe.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var o=l.refs;a===null?delete o[i]:o[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ea(e){var t=e._init;return t(e._payload)}function fu(e){function t(c,d){if(e){var p=c.deletions;p===null?(c.deletions=[d],c.flags|=16):p.push(d)}}function n(c,d){if(!e)return null;for(;d!==null;)t(c,d),d=d.sibling;return null}function r(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function l(c,d){return c=dt(c,d),c.index=0,c.sibling=null,c}function i(c,d,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<d?(c.flags|=2,d):p):(c.flags|=2,d)):(c.flags|=1048576,d)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function o(c,d,p,y){return d===null||d.tag!==6?(d=Kl(p,c.mode,y),d.return=c,d):(d=l(d,p),d.return=c,d)}function u(c,d,p,y){var N=p.type;return N===Dt?v(c,d,p.props.children,y,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ze&&Ea(N)===d.type)?(y=l(d,p.props),y.ref=vn(c,d,p),y.return=c,y):(y=Rr(p.type,p.key,p.props,null,c.mode,y),y.ref=vn(c,d,p),y.return=c,y)}function f(c,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Xl(p,c.mode,y),d.return=c,d):(d=l(d,p.children||[]),d.return=c,d)}function v(c,d,p,y,N){return d===null||d.tag!==7?(d=Et(p,c.mode,y,N),d.return=c,d):(d=l(d,p),d.return=c,d)}function h(c,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Kl(""+d,c.mode,p),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return p=Rr(d.type,d.key,d.props,null,c.mode,p),p.ref=vn(c,null,d),p.return=c,p;case Tt:return d=Xl(d,c.mode,p),d.return=c,d;case Ze:var y=d._init;return h(c,y(d._payload),p)}if(wn(d)||dn(d))return d=Et(d,c.mode,p,null),d.return=c,d;mr(c,d)}return null}function m(c,d,p,y){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:o(c,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===N?u(c,d,p,y):null;case Tt:return p.key===N?f(c,d,p,y):null;case Ze:return N=p._init,m(c,d,N(p._payload),y)}if(wn(p)||dn(p))return N!==null?null:v(c,d,p,y,null);mr(c,p)}return null}function k(c,d,p,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(p)||null,o(d,c,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rr:return c=c.get(y.key===null?p:y.key)||null,u(d,c,y,N);case Tt:return c=c.get(y.key===null?p:y.key)||null,f(d,c,y,N);case Ze:var E=y._init;return k(c,d,p,E(y._payload),N)}if(wn(y)||dn(y))return c=c.get(p)||null,v(d,c,y,N,null);mr(d,y)}return null}function w(c,d,p,y){for(var N=null,E=null,C=d,z=d=0,W=null;C!==null&&z<p.length;z++){C.index>z?(W=C,C=null):W=C.sibling;var M=m(c,C,p[z],y);if(M===null){C===null&&(C=W);break}e&&C&&M.alternate===null&&t(c,C),d=i(M,d,z),E===null?N=M:E.sibling=M,E=M,C=W}if(z===p.length)return n(c,C),O&&xt(c,z),N;if(C===null){for(;z<p.length;z++)C=h(c,p[z],y),C!==null&&(d=i(C,d,z),E===null?N=C:E.sibling=C,E=C);return O&&xt(c,z),N}for(C=r(c,C);z<p.length;z++)W=k(C,c,z,p[z],y),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?z:W.key),d=i(W,d,z),E===null?N=W:E.sibling=W,E=W);return e&&C.forEach(function(Pe){return t(c,Pe)}),O&&xt(c,z),N}function g(c,d,p,y){var N=dn(p);if(typeof N!="function")throw Error(x(150));if(p=N.call(p),p==null)throw Error(x(151));for(var E=N=null,C=d,z=d=0,W=null,M=p.next();C!==null&&!M.done;z++,M=p.next()){C.index>z?(W=C,C=null):W=C.sibling;var Pe=m(c,C,M.value,y);if(Pe===null){C===null&&(C=W);break}e&&C&&Pe.alternate===null&&t(c,C),d=i(Pe,d,z),E===null?N=Pe:E.sibling=Pe,E=Pe,C=W}if(M.done)return n(c,C),O&&xt(c,z),N;if(C===null){for(;!M.done;z++,M=p.next())M=h(c,M.value,y),M!==null&&(d=i(M,d,z),E===null?N=M:E.sibling=M,E=M);return O&&xt(c,z),N}for(C=r(c,C);!M.done;z++,M=p.next())M=k(C,c,z,M.value,y),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?z:M.key),d=i(M,d,z),E===null?N=M:E.sibling=M,E=M);return e&&C.forEach(function(un){return t(c,un)}),O&&xt(c,z),N}function P(c,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Dt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var N=p.key,E=d;E!==null;){if(E.key===N){if(N=p.type,N===Dt){if(E.tag===7){n(c,E.sibling),d=l(E,p.props.children),d.return=c,c=d;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ze&&Ea(N)===E.type){n(c,E.sibling),d=l(E,p.props),d.ref=vn(c,E,p),d.return=c,c=d;break e}n(c,E);break}else t(c,E);E=E.sibling}p.type===Dt?(d=Et(p.props.children,c.mode,y,p.key),d.return=c,c=d):(y=Rr(p.type,p.key,p.props,null,c.mode,y),y.ref=vn(c,d,p),y.return=c,c=y)}return a(c);case Tt:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(c,d.sibling),d=l(d,p.children||[]),d.return=c,c=d;break e}else{n(c,d);break}else t(c,d);d=d.sibling}d=Xl(p,c.mode,y),d.return=c,c=d}return a(c);case Ze:return E=p._init,P(c,d,E(p._payload),y)}if(wn(p))return w(c,d,p,y);if(dn(p))return g(c,d,p,y);mr(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(c,d.sibling),d=l(d,p),d.return=c,c=d):(n(c,d),d=Kl(p,c.mode,y),d.return=c,c=d),a(c)):n(c,d)}return P}var tn=fu(!0),pu=fu(!1),Wr=ht(null),Hr=null,Bt=null,fs=null;function ps(){fs=Bt=Hr=null}function ms(e){var t=Wr.current;F(Wr),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qt(e,t){Hr=e,fs=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Hr===null)throw Error(x(308));Bt=e,Hr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var jt=null;function hs(e){jt===null?jt=[e]:jt.push(e)}function mu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,hs(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,hs(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Sr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}function Ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,f=u.next;u.next=null,a===null?i=f:a.next=f,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==a&&(o===null?v.firstBaseUpdate=f:o.next=f,v.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;a=0,v=f=u=null,o=i;do{var m=o.lane,k=o.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:k,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,g=o;switch(m=t,k=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){h=w.call(k,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,m=typeof w=="function"?w.call(k,h,m):w,m==null)break e;h=V({},h,m);break e;case 2:Je=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[o]:m.push(o))}else k={eventTime:k,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(f=v=k,u=h):v=v.next=k,a|=m;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;m=o,o=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(u=h),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Lt|=a,e.lanes=a,e.memoizedState=h}}function za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var Jn={},$e=ht(Jn),Bn=ht(Jn),Wn=ht(Jn);function Nt(e){if(e===Jn)throw Error(x(174));return e}function gs(e,t){switch(D(Wn,t),D(Bn,e),D($e,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ii(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ii(t,e)}F($e),D($e,t)}function nn(){F($e),F(Bn),F(Wn)}function vu(e){Nt(Wn.current);var t=Nt($e.current),n=ii(t,e.type);t!==n&&(D(Bn,e),D($e,n))}function ys(e){Bn.current===e&&(F($e),F(Bn))}var $=ht(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function xs(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Er=qe.ReactCurrentDispatcher,Vl=qe.ReactCurrentBatchConfig,Pt=0,U=null,X=null,Z=null,Xr=!1,Pn=!1,Hn=0,df=0;function re(){throw Error(x(321))}function ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function ks(e,t,n,r,l,i){if(Pt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?hf:vf,e=n(r,l),Pn){i=0;do{if(Pn=!1,Hn=0,25<=i)throw Error(x(301));i+=1,Z=X=null,t.updateQueue=null,Er.current=gf,e=n(r,l)}while(Pn)}if(Er.current=Yr,t=X!==null&&X.next!==null,Pt=0,Z=X=U=null,Xr=!1,t)throw Error(x(300));return e}function js(){var e=Hn!==0;return Hn=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(X===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?U.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(x(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function Qn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=a=null,u=null,f=i;do{var v=f.lane;if((Pt&v)===v)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(o=u=h,a=r):u=u.next=h,U.lanes|=v,Lt|=v}f=f.next}while(f!==null&&f!==i);u===null?a=r:u.next=o,De(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,Lt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);De(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gu(){}function yu(e,t){var n=U,r=ze(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,Ns(ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,wu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(x(349));Pt&30||xu(n,t,l)}return l}function xu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wu(e,t,n,r){t.value=n,t.getSnapshot=r,ju(t)&&Nu(e)}function ku(e,t,n){return n(function(){ju(t)&&Nu(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Nu(e){var t=Xe(e,1);t!==null&&Te(t,e,1,-1)}function Pa(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=mf.bind(null,U,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return ze().memoizedState}function Cr(e,t,n,r){var l=be();U.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(X!==null){var a=X.memoizedState;if(i=a.destroy,r!==null&&ws(r,a.deps)){l.memoizedState=Kn(t,n,i,r);return}}U.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function La(e,t){return Cr(8390656,8,e,t)}function Ns(e,t){return dl(2048,8,e,t)}function Eu(e,t){return dl(4,2,e,t)}function Cu(e,t){return dl(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pu(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,zu.bind(null,t,e),n)}function Ss(){}function Lu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ru(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _u(e,t,n){return Pt&21?(De(n,t)||(n=Io(),U.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function ff(e,t){var n=T;T=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{T=n,Vl.transition=r}}function Mu(){return ze().memoizedState}function pf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Au(e))Tu(t,n);else if(n=mu(e,t,n,r),n!==null){var l=oe();Te(n,e,r,l),Du(n,t,r)}}function mf(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Tu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,o=i(a,n);if(l.hasEagerState=!0,l.eagerState=o,De(o,a)){var u=t.interleaved;u===null?(l.next=l,hs(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=mu(e,t,l,r),n!==null&&(l=oe(),Te(n,e,r,l),Du(n,t,r))}}function Au(e){var t=e.alternate;return e===U||t!==null&&t===U}function Tu(e,t){Pn=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}var Yr={readContext:Ce,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},hf={readContext:Ce,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:Pa,useDebugValue:Ss,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=ff.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=be();if(O){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),J===null)throw Error(x(349));Pt&30||xu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,La(ku.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,wu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=be(),t=J.identifierPrefix;if(O){var n=We,r=Be;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vf={readContext:Ce,useCallback:Lu,useContext:Ce,useEffect:Ns,useImperativeHandle:Pu,useInsertionEffect:Eu,useLayoutEffect:Cu,useMemo:Ru,useReducer:Bl,useRef:Su,useState:function(){return Bl(Qn)},useDebugValue:Ss,useDeferredValue:function(e){var t=ze();return _u(t,X.memoizedState,e)},useTransition:function(){var e=Bl(Qn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:yu,useId:Mu,unstable_isNewReconciler:!1},gf={readContext:Ce,useCallback:Lu,useContext:Ce,useEffect:Ns,useImperativeHandle:Pu,useInsertionEffect:Eu,useLayoutEffect:Cu,useMemo:Ru,useReducer:Wl,useRef:Su,useState:function(){return Wl(Qn)},useDebugValue:Ss,useDeferredValue:function(e){var t=ze();return X===null?t.memoizedState=e:_u(t,X.memoizedState,e)},useTransition:function(){var e=Wl(Qn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:yu,useId:Mu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=ct(e),i=He(r,l);i.payload=t,n!=null&&(i.callback=n),t=ot(e,i,l),t!==null&&(Te(t,e,l,r),Sr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=ct(e),i=He(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ot(e,i,l),t!==null&&(Te(t,e,l,r),Sr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=ct(e),l=He(n,r);l.tag=2,t!=null&&(l.callback=t),t=ot(e,l,r),t!==null&&(Te(t,e,r,n),Sr(t,e,r))}};function Ra(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!On(n,r)||!On(l,i):!0}function Iu(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=me(t)?Ct:se.current,r=t.contextTypes,i=(r=r!=null)?Jt(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function _a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function zi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},vs(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=me(t)?Ct:se.current,l.context=Jt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&fl.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Wc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function bu(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gr||(Gr=!0,Fi=r),Pi(e,t)},n}function Fu(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Pi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Mf.bind(null,e,t,n),t.then(e,e))}function Aa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ta(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,ot(n,t,1))),n.lanes|=1),e)}var xf=qe.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?pu(t,null,n,r):tn(t,e.child,n,r)}function Da(e,t,n,r,l){n=n.render;var i=t.ref;return qt(t,l),r=ks(e,t,n,r,i,l),n=js(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(O&&n&&us(t),t.flags|=1,ae(e,t,r,l),t.child)}function Ia(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ms(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ou(e,t,i,r,l)):(e=Rr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:On,n(a,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(On(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Li(e,t,n,r,l)}function $u(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Ht,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Ht,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Ht,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Ht,ve),ve|=r;return ae(e,t,l,n),t.child}function Uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Li(e,t,n,r,l){var i=me(n)?Ct:se.current;return i=Jt(t,i),qt(t,l),n=ks(e,t,n,r,i,l),r=js(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(O&&r&&us(t),t.flags|=1,ae(e,t,n,l),t.child)}function ba(e,t,n,r,l){if(me(n)){var i=!0;Ur(t)}else i=!1;if(qt(t,l),t.stateNode===null)zr(e,t),Iu(t,n,r),zi(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ce(f):(f=me(n)?Ct:se.current,f=Jt(t,f));var v=n.getDerivedStateFromProps,h=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==f)&&_a(t,a,r,f),Je=!1;var m=t.memoizedState;a.state=m,Qr(t,r,a,l),u=t.memoizedState,o!==r||m!==u||pe.current||Je?(typeof v=="function"&&(Ci(t,n,v,r),u=t.memoizedState),(o=Je||Ra(t,n,o,r,m,u,f))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=f,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hu(e,t),o=t.memoizedProps,f=t.type===t.elementType?o:Re(t.type,o),a.props=f,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ce(u):(u=me(n)?Ct:se.current,u=Jt(t,u));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||m!==u)&&_a(t,a,r,u),Je=!1,m=t.memoizedState,a.state=m,Qr(t,r,a,l);var w=t.memoizedState;o!==h||m!==w||pe.current||Je?(typeof k=="function"&&(Ci(t,n,k,r),w=t.memoizedState),(f=Je||Ra(t,n,f,r,m,w,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=f):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ri(e,t,n,r,i,l)}function Ri(e,t,n,r,l,i){Uu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ja(t,n,!1),Ye(e,t,i);r=t.stateNode,xf.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,o,i)):ae(e,t,o,i),t.memoizedState=r.state,l&&ja(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ka(e,t.context,!1),gs(e,t.containerInfo)}function Fa(e,t,n,r,l){return en(),ds(l),t.flags|=256,ae(e,t,n,r),t.child}var _i={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,t,n){var r=t.pendingProps,l=$.current,i=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D($,l&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=hl(a,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mi(n),t.memoizedState=_i,e):Es(t,a));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return wf(e,t,a,r,o,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,o=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=dt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=dt(o,i):(i=Et(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Mi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=_i,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Es(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ds(r),tn(t,e.child,null,n),e=Es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(x(422))),hr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=hl({mode:"visible",children:r.children},l,0,null),i=Et(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,a),t.child.memoizedState=Mi(a),t.memoizedState=_i,i);if(!(t.mode&1))return hr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(x(419)),r=Hl(i,r,void 0),hr(e,t,a,r)}if(o=(a&e.childLanes)!==0,fe||o){if(r=J,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Te(r,e,l,-1))}return _s(),r=Hl(Error(x(421))),hr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Af.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ge=at(l.nextSibling),ye=t,O=!0,Me=null,e!==null&&(je[Ne++]=Be,je[Ne++]=We,je[Ne++]=zt,Be=e.id,We=e.overflow,zt=t),t=Es(t,r.children),t.flags|=4096,t)}function Oa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Wu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oa(e,n,t);else if(e.tag===19)Oa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kf(e,t,n){switch(t.tag){case 3:Vu(t),en();break;case 5:vu(t);break;case 1:me(t.type)&&Ur(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Bu(e,t,n):(D($,$.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);D($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return Ye(e,t,n)}var Hu,Ai,Qu,Ku;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ai=function(){};Qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Nt($e.current);var i=null;switch(n){case"input":l=ti(e,l),r=ti(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=li(e,l),r=li(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Or)}si(n,r);var a;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var o=l[f];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mn.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(o=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==o&&(u!=null||o!=null))if(f==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&b("scroll",e),i||o===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jf(e,t,n){var r=t.pendingProps;switch(cs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&$r(),le(t),null;case 3:return r=t.stateNode,nn(),F(pe),F(se),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Ui(Me),Me=null))),Ai(e,t),le(t),null;case 5:ys(t);var l=Nt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return le(t),null}if(e=Nt($e.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(l=0;l<jn.length;l++)b(jn[l],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Xs(r,i),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},b("invalid",r);break;case"textarea":qs(r,i),b("invalid",r)}si(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,o,e),l=["children",""+o]):Mn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&b("scroll",r)}switch(n){case"input":lr(r),Ys(r,i,!0);break;case"textarea":lr(r),Gs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Or)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ko(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(a=ai(n,r),n){case"dialog":b("cancel",e),b("close",e),l=r;break;case"iframe":case"object":case"embed":b("load",e),l=r;break;case"video":case"audio":for(l=0;l<jn.length;l++)b(jn[l],e);l=r;break;case"source":b("error",e),l=r;break;case"img":case"image":case"link":b("error",e),b("load",e),l=r;break;case"details":b("toggle",e),l=r;break;case"input":Xs(e,r),l=ti(e,r),b("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),b("invalid",e);break;case"textarea":qs(e,r),l=li(e,r),b("invalid",e);break;default:l=r}si(n,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?So(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&jo(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&An(e,u):typeof u=="number"&&An(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&b("scroll",e):u!=null&&Yi(e,i,u,a))}switch(n){case"input":lr(e),Ys(e,r,!1);break;case"textarea":lr(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Or)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Nt(Wn.current),Nt($e.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return le(t),null;case 13:if(F($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ge!==null&&t.mode&1&&!(t.flags&128))du(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Me!==null&&(Ui(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?q===0&&(q=3):_s())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return nn(),Ai(e,t),e===null&&$n(t.stateNode.containerInfo),le(t),null;case 10:return ms(t.type._context),le(t),null;case 17:return me(t.type)&&$r(),le(t),null;case 19:if(F($),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)gn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Kr(e),a!==null){for(t.flags|=128,gn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!O)return le(t),null}else 2*Q()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=$.current,D($,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Rs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Nf(e,t){switch(cs(t),t.tag){case 1:return me(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),F(pe),F(se),xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ys(t),null;case 13:if(F($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F($),null;case 4:return nn(),null;case 10:return ms(t.type._context),null;case 22:case 23:return Rs(),null;case 24:return null;default:return null}}var vr=!1,ie=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,j=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Ti(e,t,n){try{n()}catch(r){B(e,t,r)}}var $a=!1;function Ef(e,t){if(gi=Ir,e=Zo(),os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,f=0,v=0,h=e,m=null;t:for(;;){for(var k;h!==n||l!==0&&h.nodeType!==3||(o=a+l),h!==i||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break t;if(m===n&&++f===l&&(o=a),m===i&&++v===r&&(u=a),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Ir=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,P=w.memoizedState,c=t.stateNode,d=c.getSnapshotBeforeUpdate(t.elementType===t.type?g:Re(t.type,g),P);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){B(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=$a,$a=!1,w}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ti(t,n,i)}l=l.next}while(l!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Di(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[ki],delete t[af],delete t[of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yu(e){return e.tag===5||e.tag===3||e.tag===4}function Ua(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Or));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}var ee=null,_e=!1;function Ge(e,t,n){for(n=n.child;n!==null;)qu(e,t,n),n=n.sibling}function qu(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:ie||Wt(n,t);case 6:var r=ee,l=_e;ee=null,Ge(e,t,n),ee=r,_e=l,ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(_e?(e=ee,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),bn(e)):Ol(ee,n.stateNode));break;case 4:r=ee,l=_e,ee=n.stateNode.containerInfo,_e=!0,Ge(e,t,n),ee=r,_e=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ti(n,t,a),l=l.next}while(l!==r)}Ge(e,t,n);break;case 1:if(!ie&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){B(n,t,o)}Ge(e,t,n);break;case 21:Ge(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ge(e,t,n),ie=r):Ge(e,t,n);break;default:Ge(e,t,n)}}function Va(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sf),t.forEach(function(r){var l=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:ee=o.stateNode,_e=!1;break e;case 3:ee=o.stateNode.containerInfo,_e=!0;break e;case 4:ee=o.stateNode.containerInfo,_e=!0;break e}o=o.return}if(ee===null)throw Error(x(160));qu(i,a,l),ee=null,_e=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){B(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}function Gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Ie(e),r&4){try{Ln(3,e,e.return),pl(3,e)}catch(g){B(e,e.return,g)}try{Ln(5,e,e.return)}catch(g){B(e,e.return,g)}}break;case 1:Le(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Le(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{An(l,"")}catch(g){B(e,e.return,g)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&xo(l,i),ai(o,a);var f=ai(o,i);for(a=0;a<u.length;a+=2){var v=u[a],h=u[a+1];v==="style"?So(l,h):v==="dangerouslySetInnerHTML"?jo(l,h):v==="children"?An(l,h):Yi(l,v,h,f)}switch(o){case"input":ni(l,i);break;case"textarea":wo(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Qt(l,!!i.multiple,k,!1):m!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(g){B(e,e.return,g)}}break;case 6:if(Le(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(g){B(e,e.return,g)}}break;case 3:if(Le(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(g){B(e,e.return,g)}break;case 4:Le(t,e),Ie(e);break;case 13:Le(t,e),Ie(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ps=Q())),r&4&&Va(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(f=ie)||v,Le(t,e),ie=f):Le(t,e),Ie(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(j=e,v=e.child;v!==null;){for(h=j=v;j!==null;){switch(m=j,k=m.child,m.tag){case 0:case 11:case 14:case 15:Ln(4,m,m.return);break;case 1:Wt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){B(r,n,g)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Wa(h);continue}}k!==null?(k.return=m,j=k):Wa(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{l=h.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=No("display",a))}catch(g){B(e,e.return,g)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(g){B(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Le(t,e),Ie(e),r&4&&Va(e);break;case 21:break;default:Le(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(An(l,""),r.flags&=-33);var i=Ua(e);bi(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Ua(e);Ii(e,o,a);break;default:throw Error(x(161))}}catch(u){B(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cf(e,t,n){j=e,Zu(e)}function Zu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||vr;if(!a){var o=l.alternate,u=o!==null&&o.memoizedState!==null||ie;o=vr;var f=ie;if(vr=a,(ie=u)&&!f)for(j=l;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Ha(l):u!==null?(u.return=a,j=u):Ha(l);for(;i!==null;)j=i,Zu(i),i=i.sibling;j=l,vr=o,ie=f}Ba(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):Ba(e)}}function Ba(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&za(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}za(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&bn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&Di(t)}catch(m){B(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Wa(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Ha(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(u){B(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){B(t,l,u)}}var i=t.return;try{Di(t)}catch(u){B(t,i,u)}break;case 5:var a=t.return;try{Di(t)}catch(u){B(t,a,u)}}}catch(u){B(t,t.return,u)}if(t===e){j=null;break}var o=t.sibling;if(o!==null){o.return=t.return,j=o;break}j=t.return}}var zf=Math.ceil,qr=qe.ReactCurrentDispatcher,Cs=qe.ReactCurrentOwner,Ee=qe.ReactCurrentBatchConfig,A=0,J=null,K=null,te=0,ve=0,Ht=ht(0),q=0,Xn=null,Lt=0,ml=0,zs=0,Rn=null,de=null,Ps=0,ln=1/0,Ue=null,Gr=!1,Fi=null,ut=null,gr=!1,rt=null,Zr=0,_n=0,Oi=null,Pr=-1,Lr=0;function oe(){return A&6?Q():Pr!==-1?Pr:Pr=Q()}function ct(e){return e.mode&1?A&2&&te!==0?te&-te:cf.transition!==null?(Lr===0&&(Lr=Io()),Lr):(e=T,e!==0||(e=window.event,e=e===void 0?16:Bo(e.type)),e):1}function Te(e,t,n,r){if(50<_n)throw _n=0,Oi=null,Error(x(185));qn(e,n,r),(!(A&2)||e!==J)&&(e===J&&(!(A&2)&&(ml|=n),q===4&&tt(e,te)),he(e,r),n===1&&A===0&&!(t.mode&1)&&(ln=Q()+500,cl&&vt()))}function he(e,t){var n=e.callbackNode;ud(e,t);var r=Dr(e,e===J?te:0);if(r===0)n!==null&&ea(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ea(n),t===1)e.tag===0?uf(Qa.bind(null,e)):ou(Qa.bind(null,e)),lf(function(){!(A&6)&&vt()}),n=null;else{switch(bo(r)){case 1:n=es;break;case 4:n=To;break;case 16:n=Tr;break;case 536870912:n=Do;break;default:n=Tr}n=sc(n,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ju(e,t){if(Pr=-1,Lr=0,A&6)throw Error(x(327));var n=e.callbackNode;if(Gt()&&e.callbackNode!==n)return null;var r=Dr(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var l=A;A|=2;var i=tc();(J!==e||te!==t)&&(Ue=null,ln=Q()+500,St(e,t));do try{Rf();break}catch(o){ec(e,o)}while(!0);ps(),qr.current=i,A=l,K!==null?t=0:(J=null,te=0,t=q)}if(t!==0){if(t===2&&(l=fi(e),l!==0&&(r=l,t=$i(e,l))),t===1)throw n=Xn,St(e,0),tt(e,r),he(e,Q()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pf(l)&&(t=Jr(e,r),t===2&&(i=fi(e),i!==0&&(r=i,t=$i(e,i))),t===1))throw n=Xn,St(e,0),tt(e,r),he(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:wt(e,de,Ue);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Ps+500-Q(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wi(wt.bind(null,e,de,Ue),t);break}wt(e,de,Ue);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ae(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zf(r/1960))-r,10<r){e.timeoutHandle=wi(wt.bind(null,e,de,Ue),r);break}wt(e,de,Ue);break;case 5:wt(e,de,Ue);break;default:throw Error(x(329))}}}return he(e,Q()),e.callbackNode===n?Ju.bind(null,e):null}function $i(e,t){var n=Rn;return e.current.memoizedState.isDehydrated&&(St(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=de,de=n,t!==null&&Ui(t)),e}function Ui(e){de===null?de=e:de.push.apply(de,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~zs,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function Qa(e){if(A&6)throw Error(x(327));Gt();var t=Dr(e,0);if(!(t&1))return he(e,Q()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=fi(e);r!==0&&(t=r,n=$i(e,r))}if(n===1)throw n=Xn,St(e,0),tt(e,t),he(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Ue),he(e,Q()),null}function Ls(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(ln=Q()+500,cl&&vt())}}function Rt(e){rt!==null&&rt.tag===0&&!(A&6)&&Gt();var t=A;A|=1;var n=Ee.transition,r=T;try{if(Ee.transition=null,T=1,e)return e()}finally{T=r,Ee.transition=n,A=t,!(A&6)&&vt()}}function Rs(){ve=Ht.current,F(Ht)}function St(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:nn(),F(pe),F(se),xs();break;case 5:ys(r);break;case 4:nn();break;case 13:F($);break;case 19:F($);break;case 10:ms(r.type._context);break;case 22:case 23:Rs()}n=n.return}if(J=e,K=e=dt(e.current,null),te=ve=t,q=0,Xn=null,zs=ml=Lt=0,de=Rn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}jt=null}return e}function ec(e,t){do{var n=K;try{if(ps(),Er.current=Yr,Xr){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xr=!1}if(Pt=0,Z=X=U=null,Pn=!1,Hn=0,Cs.current=null,n===null||n.return===null){q=1,Xn=t,K=null;break}e:{var i=e,a=n.return,o=n,u=t;if(t=te,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,v=o,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Aa(a);if(k!==null){k.flags&=-257,Ta(k,a,o,i,t),k.mode&1&&Ma(i,f,t),t=k,u=f;var w=t.updateQueue;if(w===null){var g=new Set;g.add(u),t.updateQueue=g}else w.add(u);break e}else{if(!(t&1)){Ma(i,f,t),_s();break e}u=Error(x(426))}}else if(O&&o.mode&1){var P=Aa(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ta(P,a,o,i,t),ds(rn(u,o));break e}}i=u=rn(u,o),q!==4&&(q=2),Rn===null?Rn=[i]:Rn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=bu(i,u,t);Ca(i,c);break e;case 1:o=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Fu(i,o,t);Ca(i,y);break e}}i=i.return}while(i!==null)}rc(n)}catch(N){t=N,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function tc(){var e=qr.current;return qr.current=Yr,e===null?Yr:e}function _s(){(q===0||q===3||q===2)&&(q=4),J===null||!(Lt&268435455)&&!(ml&268435455)||tt(J,te)}function Jr(e,t){var n=A;A|=2;var r=tc();(J!==e||te!==t)&&(Ue=null,St(e,t));do try{Lf();break}catch(l){ec(e,l)}while(!0);if(ps(),A=n,qr.current=r,K!==null)throw Error(x(261));return J=null,te=0,q}function Lf(){for(;K!==null;)nc(K)}function Rf(){for(;K!==null&&!ed();)nc(K)}function nc(e){var t=ic(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?rc(e):K=t,Cs.current=null}function rc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,K=null;return}}else if(n=jf(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);q===0&&(q=5)}function wt(e,t,n){var r=T,l=Ee.transition;try{Ee.transition=null,T=1,_f(e,t,n,r)}finally{Ee.transition=l,T=r}return null}function _f(e,t,n,r){do Gt();while(rt!==null);if(A&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cd(e,i),e===J&&(K=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,sc(Tr,function(){return Gt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var a=T;T=1;var o=A;A|=4,Cs.current=null,Ef(e,n),Gu(n,e),qd(yi),Ir=!!gi,yi=gi=null,e.current=n,Cf(n),td(),A=o,T=a,Ee.transition=i}else e.current=n;if(gr&&(gr=!1,rt=e,Zr=l),i=e.pendingLanes,i===0&&(ut=null),ld(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gr)throw Gr=!1,e=Fi,Fi=null,e;return Zr&1&&e.tag!==0&&Gt(),i=e.pendingLanes,i&1?e===Oi?_n++:(_n=0,Oi=e):_n=0,vt(),null}function Gt(){if(rt!==null){var e=bo(Zr),t=Ee.transition,n=T;try{if(Ee.transition=null,T=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Zr=0,A&6)throw Error(x(331));var l=A;for(A|=4,j=e.current;j!==null;){var i=j,a=i.child;if(j.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var f=o[u];for(j=f;j!==null;){var v=j;switch(v.tag){case 0:case 11:case 15:Ln(8,v,i)}var h=v.child;if(h!==null)h.return=v,j=h;else for(;j!==null;){v=j;var m=v.sibling,k=v.return;if(Xu(v),v===f){j=null;break}if(m!==null){m.return=k,j=m;break}j=k}}}var w=i.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var P=g.sibling;g.sibling=null,g=P}while(g!==null)}}j=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,j=c;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){a=j;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,j=p;else e:for(a=d;j!==null;){if(o=j,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:pl(9,o)}}catch(N){B(o,o.return,N)}if(o===a){j=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,j=y;break e}j=o.return}}if(A=l,vt(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{T=n,Ee.transition=t}}return!1}function Ka(e,t,n){t=rn(n,t),t=bu(e,t,1),e=ot(e,t,1),t=oe(),e!==null&&(qn(e,1,t),he(e,t))}function B(e,t,n){if(e.tag===3)Ka(e,e,n);else for(;t!==null;){if(t.tag===3){Ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Fu(t,e,1),t=ot(t,e,1),e=oe(),t!==null&&(qn(t,1,e),he(t,e));break}}t=t.return}}function Mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(q===4||q===3&&(te&130023424)===te&&500>Q()-Ps?St(e,0):zs|=n),he(e,t)}function lc(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=oe();e=Xe(e,t),e!==null&&(qn(e,t,n),he(e,n))}function Af(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lc(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),lc(e,n)}var ic;ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,kf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,O&&t.flags&1048576&&uu(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=Jt(t,se.current);qt(t,n),l=ks(null,t,r,e,l,n);var i=js();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Ur(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vs(t),l.updater=fl,t.stateNode=l,l._reactInternals=t,zi(t,r,e,n),t=Ri(null,t,r,!0,i,n)):(t.tag=0,O&&i&&us(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=If(r),e=Re(r,e),l){case 0:t=Li(null,t,r,e,n);break e;case 1:t=ba(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Ia(null,t,r,Re(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Li(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),ba(e,t,r,l,n);case 3:e:{if(Vu(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,hu(e,t),Qr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(x(423)),t),t=Fa(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(x(424)),t),t=Fa(e,t,r,n,l);break e}else for(ge=at(t.stateNode.containerInfo.firstChild),ye=t,O=!0,Me=null,n=pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ye(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return vu(t),e===null&&Si(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,xi(r,l)?a=null:i!==null&&xi(r,i)&&(t.flags|=32),Uu(e,t),ae(e,t,a,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Bu(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Da(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,D(Wr,r._currentValue),r._currentValue=a,i!==null)if(De(i.value,a)){if(i.children===l.children&&!pe.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=He(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?u.next=u:(u.next=v.next,v.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ei(i.return,n,t),o.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(x(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ei(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,qt(t,n),l=Ce(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),Ia(e,t,r,l,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),zr(e,t),t.tag=1,me(r)?(e=!0,Ur(t)):e=!1,qt(t,n),Iu(t,r,l),zi(t,r,l,n),Ri(null,t,r,!0,e,n);case 19:return Wu(e,t,n);case 22:return $u(e,t,n)}throw Error(x(156,t.tag))};function sc(e,t){return Ao(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Df(e,t,n,r)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return Ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Zi)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Ms(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Dt:return Et(n.children,l,i,t);case qi:a=8,l|=8;break;case Gl:return e=Se(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Zl:return e=Se(13,n,t,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Se(19,n,t,l),e.elementType=Jl,e.lanes=i,e;case vo:return hl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mo:a=10;break e;case ho:a=9;break e;case Gi:a=11;break e;case Zi:a=14;break e;case Ze:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Se(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=vo,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function As(e,t,n,r,l,i,a,o,u){return e=new bf(e,t,n,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Se(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vs(i),e}function Ff(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ac(e){if(!e)return pt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(me(n))return au(e,n,t)}return t}function oc(e,t,n,r,l,i,a,o,u){return e=As(n,r,!0,e,l,i,a,o,u),e.context=ac(null),n=e.current,r=oe(),l=ct(n),i=He(r,l),i.callback=t??null,ot(n,i,l),e.current.lanes=l,qn(e,l,r),he(e,r),e}function vl(e,t,n,r){var l=t.current,i=oe(),a=ct(l);return n=ac(n),t.context===null?t.context=n:t.pendingContext=n,t=He(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ot(l,t,a),e!==null&&(Te(e,l,a,i),Sr(e,l,a)),a}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){Xa(e,t),(e=e.alternate)&&Xa(e,t)}function Of(){return null}var uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}gl.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));vl(e,t,null,null)};gl.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){vl(null,e,null,null)}),t[Ke]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=$o();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Vo(e)}};function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ya(){}function $f(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=el(a);i.call(f)}}var a=oc(t,r,e,0,null,!1,!1,"",Ya);return e._reactRootContainer=a,e[Ke]=a.current,$n(e.nodeType===8?e.parentNode:e),Rt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var f=el(u);o.call(f)}}var u=As(e,0,!1,null,null,!1,!1,"",Ya);return e._reactRootContainer=u,e[Ke]=u.current,$n(e.nodeType===8?e.parentNode:e),Rt(function(){vl(t,u,n,r)}),u}function xl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var o=l;l=function(){var u=el(a);o.call(u)}}vl(t,a,e,l)}else a=$f(n,t,e,l,r);return el(a)}Fo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(ts(t,n|1),he(t,Q()),!(A&6)&&(ln=Q()+500,vt()))}break;case 13:Rt(function(){var r=Xe(e,1);if(r!==null){var l=oe();Te(r,e,1,l)}}),Ts(e,1)}};ns=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=oe();Te(t,e,134217728,n)}Ts(e,134217728)}};Oo=function(e){if(e.tag===13){var t=ct(e),n=Xe(e,t);if(n!==null){var r=oe();Te(n,e,t,r)}Ts(e,t)}};$o=function(){return T};Uo=function(e,t){var n=T;try{return T=e,t()}finally{T=n}};ui=function(e,t,n){switch(t){case"input":if(ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(x(90));yo(r),ni(r,l)}}}break;case"textarea":wo(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};zo=Ls;Po=Rt;var Uf={usingClientEntryPoint:!1,Events:[Zn,Ot,ul,Eo,Co,Ls]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_o(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{il=yr.inject(Vf),Oe=yr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Is(t))throw Error(x(200));return Ff(e,t,null,n)};we.createRoot=function(e,t){if(!Is(e))throw Error(x(299));var n=!1,r="",l=uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=As(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,$n(e.nodeType===8?e.parentNode:e),new Ds(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=_o(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Rt(e)};we.hydrate=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Is(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=uc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=oc(t,null,e,1,n??null,l,!1,i,a),e[Ke]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new gl(t)};we.render=function(e,t,n){if(!yl(t))throw Error(x(200));return xl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!yl(e))throw Error(x(40));return e._reactRootContainer?(Rt(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Ls;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return xl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function cc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cc)}catch(e){console.error(e)}}cc(),uo.exports=we;var Bf=uo.exports,qa=Bf;Yl.createRoot=qa.createRoot,Yl.hydrateRoot=qa.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),I=(e,t)=>{const n=Y.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:o="",children:u,...f},v)=>Y.createElement("svg",{ref:v,...Wf,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Hf(e)}`,o].join(" "),...f},[...t.map(([h,m])=>Y.createElement(h,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=I("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=I("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=I("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=I("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=I("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=I("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=I("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=I("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=I("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=I("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=I("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=I("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=I("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=I("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=I("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=I("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=I("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=I("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=I("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=I("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=I("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=I("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=I("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=I("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=I("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=I("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function op({activeTab:e,setActiveTab:t,pendingReviewCount:n,onSeedDemoData:r}){const l=[{id:"apply",label:"Apply for Loan",icon:Jf},{id:"simulator",label:"AI Risk Engine",icon:bs},{id:"underwriter",label:"Manual Review Queue",icon:pc,badge:n>0?n:null},{id:"analytics",label:"Risk Analytics",icon:fc},{id:"settings",label:"Model Tuning",icon:Fs}];return s.jsxs("header",{className:"navbar-container",children:[s.jsxs("div",{className:"navbar-inner",children:[s.jsxs("div",{className:"nav-brand",onClick:()=>t("apply"),children:[s.jsxs("div",{className:"logo-icon-wrapper",children:[s.jsx(lp,{className:"logo-icon"}),s.jsx("span",{className:"pulse-dot"})]}),s.jsxs("div",{className:"brand-text",children:[s.jsxs("div",{className:"brand-title",children:["CrediMind ",s.jsxs("span",{className:"ai-tag",children:[s.jsx(Os,{size:12})," AI"]})]}),s.jsx("div",{className:"brand-subtitle",children:"Automated Loan Risk Engine v2.4"})]})]}),s.jsx("nav",{className:"nav-tabs",children:l.map(i=>{const a=i.icon,o=e===i.id;return s.jsxs("button",{className:`nav-tab-btn ${o?"active":""}`,onClick:()=>t(i.id),children:[s.jsx(a,{size:18}),s.jsx("span",{children:i.label}),i.badge!==null&&i.badge!==void 0&&s.jsx("span",{className:"nav-badge",children:i.badge})]},i.id)})}),s.jsx("div",{className:"nav-actions",children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:r,title:"Reset to Sample Applications",children:[s.jsx(ap,{size:15,className:"text-cyan"}),s.jsx("span",{children:"Load Demo Data"})]})})]}),s.jsx("style",{children:`
        .navbar-container {
          background: rgba(11, 15, 25, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .navbar-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0.85rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          cursor: pointer;
        }

        .logo-icon-wrapper {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(124, 58, 237, 0.25));
          border: 1px solid rgba(0, 242, 254, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
        }

        .pulse-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 10px;
          height: 10px;
          background-color: #10b981;
          border-radius: 50%;
          border: 2px solid #07090e;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        .brand-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          line-height: 1.1;
        }

        .ai-tag {
          font-size: 0.65rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          color: #000;
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 2px;
          text-transform: uppercase;
        }

        .brand-subtitle {
          font-size: 0.72rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .nav-tabs {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(18, 24, 38, 0.6);
          padding: 0.35rem;
          border-radius: 14px;
          border: 1px solid var(--border-glass);
        }

        .nav-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-family: var(--font-main);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-tab-btn.active {
          color: #fff;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(79, 70, 229, 0.25));
          border: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 4px 12px rgba(0, 242, 254, 0.1);
        }

        .nav-badge {
          background: var(--color-review);
          color: #000;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.1rem 0.45rem;
          border-radius: 999px;
        }

        .btn-sm {
          padding: 0.5rem 0.85rem;
          font-size: 0.82rem;
        }

        .text-cyan {
          color: var(--accent-cyan);
        }

        @media (max-width: 1024px) {
          .nav-tabs span {
            display: none;
          }
          .nav-tab-btn {
            padding: 0.55rem;
          }
        }
      `})]})}const Ga=[{id:"APP-9082",applicantName:"Sophia Martinez",email:"sophia.m@example.com",occupation:"Senior Software Engineer",monthlyIncome:12500,creditScore:785,existingLiabilities:1800,monthlySavings:4500,requestedAmount:45e3,tenureMonths:36,spendingBehaviorScore:88,pastDefaults:0,onTimePaymentRatio:99,submissionDate:"2026-10-04 14:22",status:"APPROVED",riskScore:12,riskLevel:"Low",fraudFlags:[],xaiFactors:[{factor:"High Credit Score (785)",impact:"+35 pts Safety",positive:!0},{factor:"Low Debt-to-Income Ratio (14.4%)",impact:"+28 pts Safety",positive:!0},{factor:"Strong Monthly Savings ($4,500)",impact:"+22 pts Safety",positive:!0},{factor:"Zero Past Loan Defaults",impact:"+15 pts Safety",positive:!0}],underwriterNotes:"Auto-approved by AI System. Clean financial history."},{id:"APP-8741",applicantName:"Marcus Vance",email:"marcus.vance@techcorp.io",occupation:"Product Designer",monthlyIncome:7200,creditScore:655,existingLiabilities:3100,monthlySavings:800,requestedAmount:35e3,tenureMonths:48,spendingBehaviorScore:54,pastDefaults:1,onTimePaymentRatio:84,submissionDate:"2026-10-04 16:05",status:"MANUAL_REVIEW",riskScore:52,riskLevel:"Moderate",fraudFlags:["Minor Income Benchmark Variance (+15% above median)"],xaiFactors:[{factor:"Moderate Credit Score (655)",impact:"-18 pts Risk",positive:!1},{factor:"Elevated DTI Ratio (43.0%)",impact:"-25 pts Risk",positive:!1},{factor:"Previous Late Payment Record",impact:"-15 pts Risk",positive:!1},{factor:"Stable Employment Sector",impact:"+12 pts Safety",positive:!0}],underwriterNotes:"Requires review: DTI is borderline at 43%. Requested proof of bonus income."},{id:"APP-7639",applicantName:"Elena Rostova",email:"elena.r@fintech-global.net",occupation:"Data Analyst",monthlyIncome:6500,creditScore:720,existingLiabilities:2100,monthlySavings:1900,requestedAmount:28e3,tenureMonths:24,spendingBehaviorScore:76,pastDefaults:0,onTimePaymentRatio:96,submissionDate:"2026-10-04 11:45",status:"MANUAL_REVIEW",riskScore:38,riskLevel:"Moderate",fraudFlags:["Device/IP Location Discrepancy","Rapid Application Resubmission (2x in 24h)"],xaiFactors:[{factor:"Good Credit Score (720)",impact:"+24 pts Safety",positive:!0},{factor:"Healthy Savings Buffer ($1,900/mo)",impact:"+18 pts Safety",positive:!0},{factor:"Unusual Device Fingerprint",impact:"-30 pts Fraud Alert",positive:!1}],underwriterNotes:"High risk flag triggered due to location mismatch. Underwriter verification requested."},{id:"APP-6120",applicantName:"Arthur Pendelton",email:"arthur.p@freelance-art.org",occupation:"Independent Artist",monthlyIncome:3200,creditScore:540,existingLiabilities:2400,monthlySavings:150,requestedAmount:5e4,tenureMonths:60,spendingBehaviorScore:32,pastDefaults:3,onTimePaymentRatio:68,submissionDate:"2026-10-03 19:10",status:"REJECTED",riskScore:88,riskLevel:"Critical Risk",fraudFlags:[],xaiFactors:[{factor:"Low Credit Score (540)",impact:"-42 pts Risk",positive:!1},{factor:"Extreme DTI Ratio (75.0%)",impact:"-38 pts Risk",positive:!1},{factor:"Multiple Past Defaults (3)",impact:"-35 pts Risk",positive:!1},{factor:"Low Monthly Savings ($150)",impact:"-15 pts Risk",positive:!1}],underwriterNotes:"Auto-rejected: Severe DTI ratio and history of defaults exceeds bank risk tolerance."},{id:"APP-5904",applicantName:"Derek Sterling",email:"derek.sterling99@tempmail.com",occupation:"Consultant (Self-Reported)",monthlyIncome:24e3,creditScore:610,existingLiabilities:1200,monthlySavings:300,requestedAmount:85e3,tenureMonths:36,spendingBehaviorScore:40,pastDefaults:1,onTimePaymentRatio:78,submissionDate:"2026-10-04 17:50",status:"MANUAL_REVIEW",riskScore:74,riskLevel:"High Risk",fraudFlags:["Potential Synthetic Identity Pattern","Extreme Income Exaggeration (+280% vs Occupation Benchmark)","High Discretionary Cash Drain"],xaiFactors:[{factor:"Unverified High Income Claim",impact:"-45 pts Fraud Risk",positive:!1},{factor:"Disproportionate Requested Amount ($85k)",impact:"-30 pts Risk",positive:!1},{factor:"Low Liquid Savings relative to Income",impact:"-25 pts Risk",positive:!1}],underwriterNotes:"FLAGGED FOR POTENTIAL FRAUD. Income documentation and tax filings mandated."}];function Vi(e,t={approvalThreshold:35,reviewWindow:65,fraudSensitivity:"MEDIUM"}){const{monthlyIncome:n=5e3,creditScore:r=700,existingLiabilities:l=1500,monthlySavings:i=1e3,requestedAmount:a=2e4,tenureMonths:o=36,spendingBehaviorScore:u=70,pastDefaults:f=0,onTimePaymentRatio:v=95}=e,h=l/Math.max(n,1)*100;let m=50;r>=780?m-=30:r>=720?m-=20:r>=660?m-=5:r>=580?m+=18:m+=38,h<20?m-=15:h<35?m-=5:h<50?m+=15:m+=35,m+=f*18,v<80?m+=18:v>95&&(m-=10),i*12/Math.max(a,1)>.5&&(m-=10),u>80?m-=10:u<40&&(m+=12),m=Math.min(100,Math.max(0,Math.round(m)));const w=[];n>18e3&&u<45&&i<500&&w.push("Extreme Income vs Liquid Savings Discrepancy"),f>0&&n>2e4&&r<620&&w.push("High Income / Low Credit / Past Default Anomaly Pattern");const g=n*12;a>g*1.5&&w.push("Over-leveraged Loan Request (>150% Annual Income)");let P="APPROVED",c="Low";w.length>0?(P="MANUAL_REVIEW",c=m>70?"Critical Risk":"High Risk"):m<=t.approvalThreshold?(P="APPROVED",c=m<=20?"Very Low":"Low"):m<=t.reviewWindow?(P="MANUAL_REVIEW",c="Moderate"):(P="REJECTED",c="High / Critical");const d=[];return r>=720?d.push({factor:`Strong Credit Score (${r})`,impact:"+30 pts Safety",positive:!0}):r<620&&d.push({factor:`Low Credit Score (${r})`,impact:"-32 pts Risk",positive:!1}),h<=30?d.push({factor:`Low DTI Ratio (${h.toFixed(1)}%)`,impact:"+25 pts Safety",positive:!0}):h>45&&d.push({factor:`Elevated DTI Ratio (${h.toFixed(1)}%)`,impact:"-28 pts Risk",positive:!1}),f===0?d.push({factor:"Impeccable Default History (0)",impact:"+15 pts Safety",positive:!0}):d.push({factor:`${f} Prior Default Record(s)`,impact:`-${f*18} pts Risk`,positive:!1}),u>=75?d.push({factor:`Disciplined Spending Behavior (${u}/100)`,impact:"+12 pts Safety",positive:!0}):u<50&&d.push({factor:`High Discretionary Spending Drain (${u}/100)`,impact:"-15 pts Risk",positive:!1}),{riskScore:m,riskLevel:c,status:P,dtiRatio:parseFloat(h.toFixed(1)),fraudFlags:w,xaiFactors:d,evaluatedAt:new Date().toISOString()}}function up({onSubmitApplication:e,modelConfig:t}){const[n,r]=Y.useState({applicantName:"Alexander Vance",email:"alexander.vance@innovate.co",occupation:"Senior Financial Manager",monthlyIncome:9500,creditScore:745,existingLiabilities:2200,monthlySavings:3100,requestedAmount:35e3,tenureMonths:36,spendingBehaviorScore:82,pastDefaults:0,onTimePaymentRatio:98}),[l,i]=Y.useState(!1),[a,o]=Y.useState(!1),[u,f]=Y.useState(null),v=Y.useMemo(()=>Vi(n,t),[n,t]),h=(g,P)=>{r(c=>({...c,[g]:P}))},m=()=>{o(!0),setTimeout(()=>{o(!1),i(!0)},1500)},k=g=>{g.preventDefault();const P=Vi(n,t),c={id:`APP-${Math.floor(1e3+Math.random()*9e3)}`,...n,submissionDate:new Date().toISOString().replace("T"," ").substring(0,16),status:P.status,riskScore:P.riskScore,riskLevel:P.riskLevel,fraudFlags:P.fraudFlags,xaiFactors:P.xaiFactors,underwriterNotes:P.status==="APPROVED"?"Auto-Approved by AI Engine upon instant submission.":P.status==="MANUAL_REVIEW"?"Submitted for human underwriter review due to borderline risk or flags.":"Auto-Rejected by AI Engine based on risk policy thresholds."};f({app:c,result:P}),e(c)},w=g=>{g==="prime"?r({applicantName:"Eleanor Vance",email:"eleanor.v@techcorp.com",occupation:"Lead Cloud Architect",monthlyIncome:14e3,creditScore:810,existingLiabilities:1500,monthlySavings:5500,requestedAmount:4e4,tenureMonths:36,spendingBehaviorScore:92,pastDefaults:0,onTimePaymentRatio:100}):g==="borderline"?r({applicantName:"Julian Croft",email:"j.croft@designstudio.io",occupation:"UX Consultant",monthlyIncome:6200,creditScore:645,existingLiabilities:2800,monthlySavings:650,requestedAmount:3e4,tenureMonths:48,spendingBehaviorScore:58,pastDefaults:1,onTimePaymentRatio:86}):g==="fraud"&&r({applicantName:"Victor Krum",email:"victor99@guerrillamail.biz",occupation:"Independent Trader",monthlyIncome:25e3,creditScore:590,existingLiabilities:1100,monthlySavings:200,requestedAmount:9e4,tenureMonths:24,spendingBehaviorScore:30,pastDefaults:2,onTimePaymentRatio:72})};return s.jsxs("div",{className:"applicant-portal-container",children:[s.jsxs("div",{className:"portal-header",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"portal-title",children:"Smart Loan Application Portal"}),s.jsx("p",{className:"portal-subtitle",children:"Complete your financial profile for instant AI-assisted evaluation and risk assessment."})]}),s.jsxs("div",{className:"preset-buttons",children:[s.jsx("span",{className:"preset-label",children:"Test Profiles:"}),s.jsx("button",{className:"btn-preset btn-prime",onClick:()=>w("prime"),children:"Prime Applicant"}),s.jsx("button",{className:"btn-preset btn-borderline",onClick:()=>w("borderline"),children:"Borderline Review"}),s.jsx("button",{className:"btn-preset btn-fraud",onClick:()=>w("fraud"),children:"High Risk / Fraud Flag"})]})]}),s.jsxs("div",{className:"portal-grid",children:[s.jsxs("form",{onSubmit:k,className:"glass-card form-card",children:[s.jsxs("div",{className:"section-heading",children:[s.jsx(Xf,{className:"section-icon text-cyan"}),s.jsx("h2",{children:"1. Personal & Employment Information"})]}),s.jsxs("div",{className:"grid-2",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Full Name"}),s.jsx("input",{type:"text",className:"input-field",value:n.applicantName,onChange:g=>h("applicantName",g.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Email Address"}),s.jsx("input",{type:"email",className:"input-field",value:n.email,onChange:g=>h("email",g.target.value),required:!0})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Primary Occupation / Sector"}),s.jsx("input",{type:"text",className:"input-field",value:n.occupation,onChange:g=>h("occupation",g.target.value),required:!0})]}),s.jsxs("div",{className:"section-heading",style:{marginTop:"1.5rem"},children:[s.jsx(qf,{className:"section-icon text-cyan"}),s.jsx("h2",{children:"2. Income & Liabilities Profile"})]}),s.jsxs("div",{className:"grid-2",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Monthly Net Income ($)",s.jsxs("span",{className:"val-display",children:["$",n.monthlyIncome.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"1500",max:"30000",step:"500",className:"range-slider",value:n.monthlyIncome,onChange:g=>h("monthlyIncome",Number(g.target.value))})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Credit Score (300 - 850)",s.jsx("span",{className:`val-display ${n.creditScore>=720?"text-emerald":n.creditScore>=650?"text-amber":"text-rose"}`,children:n.creditScore})]}),s.jsx("input",{type:"range",min:"300",max:"850",step:"5",className:"range-slider",value:n.creditScore,onChange:g=>h("creditScore",Number(g.target.value))})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Existing Monthly Debt Payments ($)",s.jsxs("span",{className:"val-display",children:["$",n.existingLiabilities.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"0",max:"12000",step:"200",className:"range-slider",value:n.existingLiabilities,onChange:g=>h("existingLiabilities",Number(g.target.value))})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Monthly Savings & Liquid Buffer ($)",s.jsxs("span",{className:"val-display",children:["$",n.monthlySavings.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"0",max:"10000",step:"250",className:"range-slider",value:n.monthlySavings,onChange:g=>h("monthlySavings",Number(g.target.value))})]})]}),s.jsxs("div",{className:"section-heading",style:{marginTop:"1.5rem"},children:[s.jsx(Yf,{className:"section-icon text-cyan"}),s.jsx("h2",{children:"3. Requested Loan & Repayment Parameters"})]}),s.jsxs("div",{className:"grid-2",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Requested Loan Amount ($)",s.jsxs("span",{className:"val-display font-bold text-cyan",children:["$",n.requestedAmount.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"5000",max:"100000",step:"2500",className:"range-slider",value:n.requestedAmount,onChange:g=>h("requestedAmount",Number(g.target.value))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Loan Term / Duration"}),s.jsxs("select",{className:"select-field",value:n.tenureMonths,onChange:g=>h("tenureMonths",Number(g.target.value)),children:[s.jsx("option",{value:12,children:"12 Months (1 Year)"}),s.jsx("option",{value:24,children:"24 Months (2 Years)"}),s.jsx("option",{value:36,children:"36 Months (3 Years)"}),s.jsx("option",{value:48,children:"48 Months (4 Years)"}),s.jsx("option",{value:60,children:"60 Months (5 Years)"})]})]})]}),s.jsxs("div",{className:"grid-2",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Past Loan Defaults Count"}),s.jsxs("select",{className:"select-field",value:n.pastDefaults,onChange:g=>h("pastDefaults",Number(g.target.value)),children:[s.jsx("option",{value:0,children:"0 (Clean History)"}),s.jsx("option",{value:1,children:"1 Default (Historical)"}),s.jsx("option",{value:2,children:"2 Defaults"}),s.jsx("option",{value:3,children:"3+ Severe Defaults"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Spending Discipline Rating (",n.spendingBehaviorScore,"/100)"]}),s.jsx("input",{type:"range",min:"20",max:"100",step:"2",className:"range-slider",value:n.spendingBehaviorScore,onChange:g=>h("spendingBehaviorScore",Number(g.target.value))})]})]}),s.jsxs("div",{className:"doc-upload-box",children:[s.jsxs("div",{className:"doc-header",children:[s.jsx(sp,{className:"text-cyan",size:24}),s.jsxs("div",{children:[s.jsx("div",{className:"doc-title",children:"Income & Identity Verification (AI OCR)"}),s.jsx("div",{className:"doc-sub",children:"Upload Paystub / Tax Form for automated OCR validation"})]})]}),l?s.jsxs("div",{className:"doc-success",children:[s.jsx(Zf,{size:20,className:"text-emerald"}),s.jsxs("span",{children:["Documents verified via AI OCR: ",s.jsx("b",{children:"Tax Form W-2 & 3 Months Bank Statements"})]})]}):s.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:m,disabled:a,children:a?s.jsxs(s.Fragment,{children:[s.jsx(tp,{className:"spin",size:16}),s.jsx("span",{children:"Scanning documents with AI..."})]}):s.jsx("span",{children:"Simulate Document OCR Verification"})})]}),s.jsx("div",{style:{marginTop:"2rem"},children:s.jsxs("button",{type:"submit",className:"btn btn-primary submit-btn",children:[s.jsx(Os,{size:18}),s.jsx("span",{children:"Submit Application for Instant AI Decision"}),s.jsx(Qf,{size:18})]})})]}),s.jsx("div",{className:"live-preview-column",children:s.jsxs("div",{className:"glass-card preview-card glass-card-glow",children:[s.jsxs("div",{className:"preview-header",children:[s.jsxs("div",{className:"live-chip",children:[s.jsx("span",{className:"live-pulse"}),"LIVE AI PREVIEW"]}),s.jsx("h3",{className:"preview-title",children:"Instant Eligibility Engine"})]}),s.jsxs("div",{className:"gauge-wrapper",children:[s.jsxs("div",{className:`score-circle ${v.riskScore<35?"circle-approved":v.riskScore<=65?"circle-review":"circle-rejected"}`,children:[s.jsx("div",{className:"score-number",children:v.riskScore}),s.jsx("div",{className:"score-max",children:"/ 100 Risk Index"})]}),s.jsxs("div",{className:"risk-level-badge",children:["Status: ",s.jsx("span",{className:`status-text ${v.status.toLowerCase()}`,children:v.status.replace("_"," ")})]})]}),s.jsxs("div",{className:"metrics-box",children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"m-title",children:"Debt-To-Income (DTI):"}),s.jsxs("span",{className:`m-val ${v.dtiRatio>45?"text-rose":"text-emerald"}`,children:[v.dtiRatio,"%"]})]}),s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"m-title",children:"Estimated Monthly Payment:"}),s.jsxs("span",{className:"m-val text-cyan font-mono",children:["$",Math.round(n.requestedAmount/n.tenureMonths*1.08).toLocaleString(),"/mo"]})]}),s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"m-title",children:"Past Default Risk Factor:"}),s.jsx("span",{className:"m-val",children:n.pastDefaults===0?"Zero Risk":`${n.pastDefaults} Default(s)`})]})]}),v.fraudFlags.length>0&&s.jsxs("div",{className:"fraud-warning-box",children:[s.jsxs("div",{className:"fraud-title",children:[s.jsx(rl,{size:16}),s.jsxs("span",{children:["Fraud Anomaly Triggers (",v.fraudFlags.length,")"]})]}),s.jsx("ul",{className:"fraud-list",children:v.fraudFlags.map((g,P)=>s.jsx("li",{children:g},P))})]}),s.jsxs("div",{className:"xai-mini-panel",children:[s.jsx("h4",{children:"Key AI Drivers (XAI)"}),s.jsx("div",{className:"xai-factors-list",children:v.xaiFactors.map((g,P)=>s.jsxs("div",{className:`xai-factor-item ${g.positive?"positive":"negative"}`,children:[s.jsx("span",{children:g.factor}),s.jsx("span",{className:"xai-weight",children:g.impact})]},P))})]})]})})]}),u&&s.jsx("div",{className:"modal-overlay",onClick:()=>f(null),children:s.jsxs("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("div",{className:"modal-icon-wrapper",children:u.app.status==="APPROVED"?s.jsx(nl,{size:36,className:"text-emerald"}):u.app.status==="MANUAL_REVIEW"?s.jsx(tl,{size:36,className:"text-amber"}):s.jsx($s,{size:36,className:"text-rose"})}),s.jsxs("div",{children:[s.jsx("h2",{children:"Loan Application Decision Certificate"}),s.jsxs("div",{className:"app-id-tag",children:["Application ID: ",u.app.id]})]})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"decision-banner",children:[s.jsx("span",{className:"d-label",children:"AI Decision Result:"}),s.jsx("span",{className:`badge badge-${u.app.status.toLowerCase().replace("_","-")}`,children:u.app.status.replace("_"," ")})]}),s.jsxs("div",{className:"grid-2 modal-stats",children:[s.jsxs("div",{className:"m-stat-card",children:[s.jsx("span",{className:"m-label",children:"Applicant Name"}),s.jsx("span",{className:"m-value",children:u.app.applicantName})]}),s.jsxs("div",{className:"m-stat-card",children:[s.jsx("span",{className:"m-label",children:"Loan Amount"}),s.jsxs("span",{className:"m-value",children:["$",u.app.requestedAmount.toLocaleString()]})]}),s.jsxs("div",{className:"m-stat-card",children:[s.jsx("span",{className:"m-label",children:"Risk Score Index"}),s.jsxs("span",{className:"m-value font-mono",children:[u.app.riskScore," / 100"]})]}),s.jsxs("div",{className:"m-stat-card",children:[s.jsx("span",{className:"m-label",children:"Assigned Risk Level"}),s.jsx("span",{className:"m-value",children:u.app.riskLevel})]})]}),s.jsxs("div",{className:"notes-box",children:[s.jsx("h4",{children:"System Explanation & Next Steps:"}),s.jsx("p",{children:u.app.underwriterNotes})]})]}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{className:"btn btn-primary",onClick:()=>f(null),children:"Acknowledge & Close"})})]})}),s.jsx("style",{children:`
        .applicant-portal-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .portal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .portal-title {
          font-size: 1.75rem;
          background: linear-gradient(135deg, #ffffff, var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .portal-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .preset-buttons {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.4rem 0.75rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .preset-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .btn-preset {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.65rem;
          border-radius: 8px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-prime {
          background: rgba(16, 185, 129, 0.15);
          color: var(--color-approved);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .btn-prime:hover { background: rgba(16, 185, 129, 0.3); }

        .btn-borderline {
          background: rgba(245, 158, 11, 0.15);
          color: var(--color-review);
          border-color: rgba(245, 158, 11, 0.3);
        }
        .btn-borderline:hover { background: rgba(245, 158, 11, 0.3); }

        .btn-fraud {
          background: rgba(239, 68, 68, 0.15);
          color: var(--color-rejected);
          border-color: rgba(239, 68, 68, 0.3);
        }
        .btn-fraud:hover { background: rgba(239, 68, 68, 0.3); }

        .portal-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .portal-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-card {
          padding: 2rem;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .section-heading h2 {
          font-size: 1.1rem;
          color: #fff;
        }

        .val-display {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--accent-cyan);
        }

        .text-emerald { color: #10b981; }
        .text-amber { color: #f59e0b; }
        .text-rose { color: #ef4444; }

        .doc-upload-box {
          background: rgba(0, 242, 254, 0.03);
          border: 1px dashed rgba(0, 242, 254, 0.25);
          border-radius: 12px;
          padding: 1.25rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .doc-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .doc-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #fff;
        }

        .doc-sub {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .doc-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #fff;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
        }

        /* Live Preview Card */
        .preview-card {
          position: sticky;
          top: 90px;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .preview-header {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .live-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          width: fit-content;
        }

        .live-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }

        .gauge-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem 0;
        }

        .score-circle {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 4px solid var(--border-glass);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
        }

        .circle-approved {
          border-color: var(--color-approved);
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);
        }

        .circle-review {
          border-color: var(--color-review);
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.3);
        }

        .circle-rejected {
          border-color: var(--color-rejected);
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.3);
        }

        .score-number {
          font-size: 2.2rem;
          font-weight: 800;
          font-family: var(--font-mono);
          line-height: 1;
          color: #fff;
        }

        .score-max {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .risk-level-badge {
          margin-top: 0.75rem;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .status-text {
          font-weight: 800;
          text-transform: uppercase;
        }
        .status-text.approved { color: var(--color-approved); }
        .status-text.manual_review { color: var(--color-review); }
        .status-text.rejected { color: var(--color-rejected); }

        .metrics-box {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.82rem;
        }

        .metric-row {
          display: flex;
          justify-content: space-between;
        }

        .m-title { color: var(--text-secondary); }
        .m-val { font-weight: 600; }

        .fraud-warning-box {
          background: var(--color-fraud-bg);
          border: 1px solid rgba(236, 72, 153, 0.4);
          border-radius: 10px;
          padding: 0.85rem;
        }

        .fraud-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-fraud);
          margin-bottom: 0.4rem;
        }

        .fraud-list {
          padding-left: 1.25rem;
          font-size: 0.78rem;
          color: #fce7f3;
        }

        .xai-mini-panel h4 {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .xai-factors-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .xai-factor-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          padding: 0.35rem 0.5rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
        }

        .xai-factor-item.positive { border-left: 3px solid #10b981; }
        .xai-factor-item.negative { border-left: 3px solid #ef4444; }

        .xai-weight { font-weight: 700; }

        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Modal specific */
        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .app-id-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .modal-body {
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .decision-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.04);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .m-stat-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 0.85rem;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
          display: flex;
          flex-direction: column;
        }

        .m-label { font-size: 0.75rem; color: var(--text-muted); }
        .m-value { font-size: 1.1rem; font-weight: 700; color: #fff; }

        .notes-box {
          background: rgba(0, 242, 254, 0.05);
          border-left: 4px solid var(--accent-cyan);
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          padding-top: 1rem;
          border-top: 1px solid var(--border-glass);
        }
      `})]})}function cp({modelConfig:e}){const[t,n]=Y.useState({monthlyIncome:8e3,creditScore:680,existingLiabilities:2500,monthlySavings:1500,requestedAmount:35e3,tenureMonths:36,spendingBehaviorScore:65,pastDefaults:1,onTimePaymentRatio:90}),r=Vi(t,e),l=(i,a)=>{n(o=>({...o,[i]:Number(a)}))};return s.jsxs("div",{className:"simulator-container",children:[s.jsx("div",{className:"sim-header",children:s.jsxs("div",{children:[s.jsxs("h1",{className:"sim-title",children:[s.jsx(bs,{className:"text-cyan inline-icon"})," AI Risk Engine Simulator & XAI Playground"]}),s.jsx("p",{className:"sim-subtitle",children:"Manipulate applicant risk variables in real time to test AI decision boundaries, feature importance (XAI), and fraud trigger matrix."})]})}),s.jsxs("div",{className:"sim-grid",children:[s.jsxs("div",{className:"glass-card sim-controls-card",children:[s.jsxs("div",{className:"ctrl-header",children:[s.jsx(Fs,{size:18,className:"text-cyan"}),s.jsx("h3",{children:"Input Feature Vectors"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("span",{children:"Credit Score (FICO)"}),s.jsx("span",{className:`val-display ${t.creditScore>=720?"text-emerald":t.creditScore>=640?"text-amber":"text-rose"}`,children:t.creditScore})]}),s.jsx("input",{type:"range",min:"300",max:"850",step:"5",className:"range-slider",value:t.creditScore,onChange:i=>l("creditScore",i.target.value)})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("span",{children:"Monthly Net Income"}),s.jsxs("span",{className:"val-display",children:["$",t.monthlyIncome.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"1500",max:"35000",step:"500",className:"range-slider",value:t.monthlyIncome,onChange:i=>l("monthlyIncome",i.target.value)})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("span",{children:"Existing Monthly Debt Payments"}),s.jsxs("span",{className:"val-display",children:["$",t.existingLiabilities.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"0",max:"15000",step:"250",className:"range-slider",value:t.existingLiabilities,onChange:i=>l("existingLiabilities",i.target.value)})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("span",{children:"Requested Loan Principal"}),s.jsxs("span",{className:"val-display text-cyan",children:["$",t.requestedAmount.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"5000",max:"120000",step:"2500",className:"range-slider",value:t.requestedAmount,onChange:i=>l("requestedAmount",i.target.value)})]}),s.jsxs("div",{className:"grid-2",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("span",{children:"Monthly Savings"}),s.jsxs("span",{className:"val-display",children:["$",t.monthlySavings.toLocaleString()]})]}),s.jsx("input",{type:"range",min:"0",max:"10000",step:"250",className:"range-slider",value:t.monthlySavings,onChange:i=>l("monthlySavings",i.target.value)})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("span",{children:"Past Loan Defaults"}),s.jsx("span",{className:"val-display text-rose",children:t.pastDefaults})]}),s.jsx("input",{type:"range",min:"0",max:"4",step:"1",className:"range-slider",value:t.pastDefaults,onChange:i=>l("pastDefaults",i.target.value)})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:s.jsxs("span",{children:["Spending Behavior Discipline Index (",t.spendingBehaviorScore,"/100)"]})}),s.jsx("input",{type:"range",min:"10",max:"100",step:"2",className:"range-slider",value:t.spendingBehaviorScore,onChange:i=>l("spendingBehaviorScore",i.target.value)})]})]}),s.jsxs("div",{className:"sim-outputs",children:[s.jsx("div",{className:"glass-card output-main-card glass-card-glow",children:s.jsxs("div",{className:"out-grid",children:[s.jsx("div",{className:"gauge-box",children:s.jsx("div",{className:"gauge-ring",children:s.jsxs("div",{className:`gauge-arc score-${r.status.toLowerCase()}`,children:[s.jsx("span",{className:"gauge-val",children:r.riskScore}),s.jsx("span",{className:"gauge-sub",children:"Risk Score Index"})]})})}),s.jsxs("div",{className:"decision-info-box",children:[s.jsxs("div",{className:"dec-status-header",children:[r.status==="APPROVED"&&s.jsx(nl,{size:32,className:"text-emerald"}),r.status==="MANUAL_REVIEW"&&s.jsx(tl,{size:32,className:"text-amber"}),r.status==="REJECTED"&&s.jsx($s,{size:32,className:"text-rose"}),s.jsxs("div",{children:[s.jsx("div",{className:"dec-title",children:"AI Decision Prediction"}),s.jsx("div",{className:`dec-badge badge-${r.status.toLowerCase().replace("_","-")}`,children:r.status.replace("_"," ")})]})]}),s.jsxs("div",{className:"ratio-grid",children:[s.jsxs("div",{className:"r-item",children:[s.jsx("span",{className:"r-label",children:"DTI Ratio:"}),s.jsxs("span",{className:`r-val ${r.dtiRatio>45?"text-rose":"text-emerald"}`,children:[r.dtiRatio,"%"]})]}),s.jsxs("div",{className:"r-item",children:[s.jsx("span",{className:"r-label",children:"Risk Grade:"}),s.jsx("span",{className:"r-val",children:r.riskLevel})]}),s.jsxs("div",{className:"r-item",children:[s.jsx("span",{className:"r-label",children:"Auto-Approval Cutoff:"}),s.jsxs("span",{className:"r-val font-mono",children:["Score ≤ ",e.approvalThreshold]})]}),s.jsxs("div",{className:"r-item",children:[s.jsx("span",{className:"r-label",children:"Manual Review Window:"}),s.jsxs("span",{className:"r-val font-mono",children:[e.approvalThreshold+1," - ",e.reviewWindow]})]})]})]})]})}),s.jsxs("div",{className:"glass-card xai-card",children:[s.jsxs("div",{className:"xai-header",children:[s.jsx(dc,{className:"text-cyan",size:18}),s.jsx("h3",{children:"Explainable AI (XAI) Feature Importance"})]}),s.jsx("p",{className:"xai-desc",children:"Quantitative breakdown of score weightings calculated by the machine learning risk model:"}),s.jsx("div",{className:"xai-grid",children:r.xaiFactors.map((i,a)=>s.jsxs("div",{className:`xai-bar-card ${i.positive?"positive":"negative"}`,children:[s.jsxs("div",{className:"xai-bar-info",children:[s.jsx("span",{className:"xai-factor-title",children:i.factor}),s.jsx("span",{className:"xai-factor-weight",children:i.impact})]}),s.jsx("div",{className:"xai-progress-track",children:s.jsx("div",{className:`xai-progress-fill ${i.positive?"bg-emerald":"bg-rose"}`,style:{width:`${Math.min(100,Math.abs(parseInt(i.impact)||20)*2.5)}%`}})})]},a))})]}),s.jsxs("div",{className:"glass-card fraud-card",children:[s.jsxs("div",{className:"fraud-header",children:[s.jsx(rl,{className:r.fraudFlags.length>0?"text-rose":"text-emerald",size:20}),s.jsx("h3",{children:"Fraud & Anomaly Detection Matrix"})]}),r.fraudFlags.length===0?s.jsxs("div",{className:"no-fraud-msg",children:[s.jsx(nl,{size:20,className:"text-emerald"}),s.jsx("span",{children:"Zero fraud anomalies detected. Application passes integrity & identity benchmarks."})]}):s.jsx("div",{className:"fraud-flags-wrapper",children:r.fraudFlags.map((i,a)=>s.jsxs("div",{className:"fraud-flag-alert",children:[s.jsx(tl,{size:18,className:"text-rose"}),s.jsx("span",{children:i})]},a))})]})]})]}),s.jsx("style",{children:`
        .simulator-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sim-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .sim-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .sim-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .sim-grid {
            grid-template-columns: 1fr;
          }
        }

        .sim-controls-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ctrl-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .sim-outputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .out-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        @media (max-width: 640px) {
          .out-grid {
            grid-template-columns: 1fr;
          }
        }

        .gauge-box {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .gauge-ring {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4);
          padding: 8px;
          border: 1px solid var(--border-glass);
        }

        .gauge-arc {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 4px solid transparent;
          transition: all 0.3s ease;
        }

        .score-approved { border-color: var(--color-approved); box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
        .score-manual_review { border-color: var(--color-review); box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
        .score-rejected { border-color: var(--color-rejected); box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }

        .gauge-val {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-mono);
          color: #fff;
          line-height: 1;
        }

        .gauge-sub {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .dec-status-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .dec-title {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .dec-badge {
          display: inline-block;
          margin-top: 0.25rem;
          font-size: 1rem;
          padding: 0.4rem 1rem;
        }

        .ratio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          background: rgba(0, 0, 0, 0.25);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .r-item {
          display: flex;
          flex-direction: column;
        }
        .r-label { font-size: 0.75rem; color: var(--text-muted); }
        .r-val { font-size: 0.95rem; font-weight: 700; color: #fff; }

        /* XAI Styling */
        .xai-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .xai-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .xai-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .xai-bar-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .xai-bar-card.positive { border-left: 4px solid var(--color-approved); }
        .xai-bar-card.negative { border-left: 4px solid var(--color-rejected); }

        .xai-bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .xai-factor-weight { font-family: var(--font-mono); font-size: 0.8rem; }

        .xai-progress-track {
          height: 5px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
          overflow: hidden;
        }

        .xai-progress-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        .bg-emerald { background: var(--color-approved); }
        .bg-rose { background: var(--color-rejected); }

        .fraud-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .no-fraud-msg {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: #fff;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.85rem 1rem;
          border-radius: 10px;
        }

        .fraud-flags-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .fraud-flag-alert {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: #fce7f3;
          background: rgba(236, 72, 153, 0.12);
          border: 1px solid rgba(236, 72, 153, 0.3);
          padding: 0.75rem 1rem;
          border-radius: 10px;
        }
      `})]})}function dp({applications:e,onUpdateApplicationStatus:t}){const[n,r]=Y.useState(""),[l,i]=Y.useState("ALL"),[a,o]=Y.useState(null),[u,f]=Y.useState(""),v=e.filter(c=>{const d=c.applicantName.toLowerCase().includes(n.toLowerCase())||c.id.toLowerCase().includes(n.toLowerCase())||c.occupation.toLowerCase().includes(n.toLowerCase());return l==="ALL"?d:l==="FRAUD"?d&&c.fraudFlags&&c.fraudFlags.length>0:d&&c.status===l}),h=e.length,m=e.filter(c=>c.status==="APPROVED").length,k=e.filter(c=>c.status==="MANUAL_REVIEW").length,w=e.filter(c=>c.status==="REJECTED").length,g=e.filter(c=>c.fraudFlags&&c.fraudFlags.length>0).length,P=c=>{a&&(t(a.id,c,u),o(null),f(""))};return s.jsxs("div",{className:"underwriter-container",children:[s.jsx("div",{className:"uw-header",children:s.jsxs("div",{children:[s.jsxs("h1",{className:"uw-title",children:[s.jsx(pc,{className:"text-cyan inline-icon"})," Underwriter Manual Review Portal"]}),s.jsx("p",{className:"uw-subtitle",children:"Bank risk management hub: Evaluate manual review cases, inspect financial dossiers, and resolve fraud flags."})]})}),s.jsxs("div",{className:"grid-4 kpi-row",children:[s.jsxs("div",{className:"glass-card kpi-card",children:[s.jsx("span",{className:"kpi-label",children:"Total Applications"}),s.jsx("span",{className:"kpi-value",children:h}),s.jsx("span",{className:"kpi-sub font-mono",children:"Processed in system"})]}),s.jsxs("div",{className:"glass-card kpi-card border-approved",children:[s.jsx("span",{className:"kpi-label",children:"Auto-Approved"}),s.jsx("span",{className:"kpi-value text-emerald",children:m}),s.jsxs("span",{className:"kpi-sub",children:[Math.round(m/h*100||0),"% Approval Rate"]})]}),s.jsxs("div",{className:"glass-card kpi-card border-review",children:[s.jsx("span",{className:"kpi-label",children:"Pending Manual Review"}),s.jsx("span",{className:"kpi-value text-amber",children:k}),s.jsx("span",{className:"kpi-sub",children:"Human oversight needed"})]}),s.jsxs("div",{className:"glass-card kpi-card border-fraud",children:[s.jsx("span",{className:"kpi-label",children:"Fraud Flags Triggered"}),s.jsx("span",{className:"kpi-value text-rose",children:g}),s.jsx("span",{className:"kpi-sub",children:"High anomaly cases"})]})]}),s.jsxs("div",{className:"glass-card table-controls",children:[s.jsxs("div",{className:"search-box",children:[s.jsx(rp,{size:18,className:"search-icon text-muted"}),s.jsx("input",{type:"text",placeholder:"Search by Applicant Name, ID, or Occupation...",className:"search-input",value:n,onChange:c=>r(c.target.value)})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx(ep,{size:16,className:"text-muted"}),s.jsx("span",{className:"filter-label",children:"Filter Status:"}),s.jsxs("button",{className:`filter-btn ${l==="ALL"?"active":""}`,onClick:()=>i("ALL"),children:["All (",h,")"]}),s.jsxs("button",{className:`filter-btn ${l==="MANUAL_REVIEW"?"active":""}`,onClick:()=>i("MANUAL_REVIEW"),children:["Manual Review (",k,")"]}),s.jsxs("button",{className:`filter-btn ${l==="APPROVED"?"active":""}`,onClick:()=>i("APPROVED"),children:["Approved (",m,")"]}),s.jsxs("button",{className:`filter-btn ${l==="REJECTED"?"active":""}`,onClick:()=>i("REJECTED"),children:["Rejected (",w,")"]}),s.jsxs("button",{className:`filter-btn ${l==="FRAUD"?"active":""}`,onClick:()=>i("FRAUD"),children:["Fraud Alerts (",g,")"]})]})]}),s.jsx("div",{className:"glass-card table-card",children:s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"custom-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"App ID"}),s.jsx("th",{children:"Applicant"}),s.jsx("th",{children:"Monthly Income"}),s.jsx("th",{children:"Credit Score"}),s.jsx("th",{children:"Requested Amount"}),s.jsx("th",{children:"Risk Score"}),s.jsx("th",{children:"Fraud Anomaly"}),s.jsx("th",{children:"Status"}),s.jsx("th",{children:"Action"})]})}),s.jsx("tbody",{children:v.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:9,className:"no-records",children:"No loan applications match your current filter query."})}):v.map(c=>s.jsxs("tr",{className:c.status==="MANUAL_REVIEW"?"row-highlight":"",children:[s.jsx("td",{className:"font-mono text-cyan font-bold",children:c.id}),s.jsx("td",{children:s.jsxs("div",{className:"applicant-cell",children:[s.jsx("span",{className:"applicant-name",children:c.applicantName}),s.jsx("span",{className:"applicant-occ",children:c.occupation})]})}),s.jsxs("td",{className:"font-mono",children:["$",c.monthlyIncome.toLocaleString()]}),s.jsx("td",{children:s.jsx("span",{className:`font-bold ${c.creditScore>=720?"text-emerald":c.creditScore>=640?"text-amber":"text-rose"}`,children:c.creditScore})}),s.jsxs("td",{className:"font-mono",children:["$",c.requestedAmount.toLocaleString()]}),s.jsx("td",{children:s.jsxs("span",{className:`risk-pill risk-${c.riskScore<=35?"low":c.riskScore<=65?"med":"high"}`,children:[c.riskScore," / 100"]})}),s.jsx("td",{children:c.fraudFlags&&c.fraudFlags.length>0?s.jsxs("span",{className:"fraud-tag",children:[s.jsx(rl,{size:14})," ",c.fraudFlags.length," Flag(s)"]}):s.jsx("span",{className:"text-muted",style:{fontSize:"0.8rem"},children:"Clean"})}),s.jsx("td",{children:s.jsx("span",{className:`badge badge-${c.status.toLowerCase().replace("_","-")}`,children:c.status.replace("_"," ")})}),s.jsx("td",{children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>o(c),children:[s.jsx(Gf,{size:15}),s.jsx("span",{children:"Inspect"})]})})]},c.id))})]})})}),a&&s.jsx("div",{className:"modal-overlay",onClick:()=>o(null),children:s.jsxs("div",{className:"modal-content uw-modal",onClick:c=>c.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"uw-modal-title",children:[s.jsx("h2",{children:"Financial Dossier & Underwriter Review"}),s.jsxs("span",{className:"font-mono text-cyan",children:[a.id," - ",a.applicantName]})]}),s.jsx("span",{className:`badge badge-${a.status.toLowerCase().replace("_","-")}`,children:a.status.replace("_"," ")})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"grid-3 dossier-grid",children:[s.jsxs("div",{className:"dossier-card",children:[s.jsx("span",{className:"d-label",children:"Occupation"}),s.jsx("span",{className:"d-value",children:a.occupation})]}),s.jsxs("div",{className:"dossier-card",children:[s.jsx("span",{className:"d-label",children:"Monthly Income"}),s.jsxs("span",{className:"d-value font-mono",children:["$",a.monthlyIncome.toLocaleString()]})]}),s.jsxs("div",{className:"dossier-card",children:[s.jsx("span",{className:"d-label",children:"Credit Score"}),s.jsx("span",{className:"d-value font-mono",children:a.creditScore})]}),s.jsxs("div",{className:"dossier-card",children:[s.jsx("span",{className:"d-label",children:"Requested Loan"}),s.jsxs("span",{className:"d-value font-mono",children:["$",a.requestedAmount.toLocaleString()," (",a.tenureMonths," mos)"]})]}),s.jsxs("div",{className:"dossier-card",children:[s.jsx("span",{className:"d-label",children:"Monthly Debt Payments"}),s.jsxs("span",{className:"d-value font-mono",children:["$",a.existingLiabilities.toLocaleString()]})]}),s.jsxs("div",{className:"dossier-card",children:[s.jsx("span",{className:"d-label",children:"Monthly Savings"}),s.jsxs("span",{className:"d-value font-mono",children:["$",a.monthlySavings.toLocaleString()]})]})]}),a.fraudFlags&&a.fraudFlags.length>0&&s.jsxs("div",{className:"modal-fraud-panel",children:[s.jsxs("h4",{children:[s.jsx(rl,{className:"text-rose",size:18})," Active Fraud / Anomaly Warnings:"]}),s.jsx("ul",{children:a.fraudFlags.map((c,d)=>s.jsx("li",{children:c},d))})]}),s.jsxs("div",{className:"xai-modal-box",children:[s.jsx("h4",{children:"AI Risk Drivers & Explainability (XAI)"}),s.jsx("div",{className:"xai-modal-list",children:a.xaiFactors&&a.xaiFactors.map((c,d)=>s.jsxs("div",{className:`x-item ${c.positive?"pos":"neg"}`,children:[s.jsx("span",{children:c.factor}),s.jsx("span",{className:"font-mono",children:c.impact})]},d))})]}),s.jsxs("div",{className:"uw-action-section",children:[s.jsx("h4",{children:"Underwriter Decision & Notes Log"}),s.jsx("textarea",{className:"input-field uw-textarea",rows:3,placeholder:"Enter underwriter evaluation comments or justification for decision override...",value:u,onChange:c=>f(c.target.value)}),s.jsxs("div",{className:"uw-buttons-row",children:[s.jsxs("button",{className:"btn btn-success",onClick:()=>P("APPROVED"),children:[s.jsx(nl,{size:18}),s.jsx("span",{children:"Approve Loan"})]}),s.jsxs("button",{className:"btn btn-danger",onClick:()=>P("REJECTED"),children:[s.jsx($s,{size:18}),s.jsx("span",{children:"Reject Loan"})]}),s.jsxs("button",{className:"btn btn-secondary",onClick:()=>P("MANUAL_REVIEW"),children:[s.jsx(tl,{size:18,className:"text-amber"}),s.jsx("span",{children:"Request More Documents"})]})]})]})]})]})}),s.jsx("style",{children:`
        .underwriter-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .uw-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .uw-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .kpi-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .border-approved { border-left: 4px solid var(--color-approved); }
        .border-review { border-left: 4px solid var(--color-review); }
        .border-fraud { border-left: 4px solid var(--color-fraud); }

        .kpi-label { font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; }
        .kpi-value { font-size: 2rem; font-weight: 800; font-family: var(--font-mono); color: #fff; }
        .kpi-sub { font-size: 0.75rem; color: var(--text-muted); }

        .table-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          min-width: 320px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
        }

        .search-input {
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          background: rgba(12, 17, 29, 0.9);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          color: #fff;
          font-size: 0.88rem;
          outline: none;
        }
        .search-input:focus { border-color: var(--accent-cyan); }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .filter-label { font-size: 0.8rem; color: var(--text-muted); margin-right: 0.25rem; }

        .filter-btn {
          background: transparent;
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover { background: rgba(255, 255, 255, 0.05); color: #fff; }
        .filter-btn.active { background: rgba(0, 242, 254, 0.15); border-color: var(--accent-cyan); color: var(--accent-cyan); }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }

        .custom-table th {
          padding: 1rem;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.8rem;
          border-bottom: 1px solid var(--border-glass);
          text-transform: uppercase;
        }

        .custom-table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .row-highlight {
          background: rgba(245, 158, 11, 0.03);
        }

        .applicant-cell { display: flex; flex-direction: column; }
        .applicant-name { font-weight: 700; color: #fff; }
        .applicant-occ { font-size: 0.78rem; color: var(--text-secondary); }

        .risk-pill {
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
        }
        .risk-low { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .risk-med { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .risk-high { background: rgba(239, 68, 68, 0.15); color: #ef4444; }

        .fraud-tag {
          color: var(--color-fraud);
          background: var(--color-fraud-bg);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .no-records {
          text-align: center;
          padding: 3rem;
          color: var(--text-muted);
        }

        .uw-modal {
          max-width: 820px;
        }

        .dossier-grid {
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .dossier-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.85rem;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }

        .d-label { font-size: 0.75rem; color: var(--text-muted); }
        .d-value { font-size: 1rem; font-weight: 700; color: #fff; }

        .modal-fraud-panel {
          background: var(--color-fraud-bg);
          border: 1px solid rgba(236, 72, 153, 0.4);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.25rem;
        }

        .modal-fraud-panel h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-fraud);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .modal-fraud-panel ul {
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: #fce7f3;
        }

        .xai-modal-box {
          background: rgba(0, 0, 0, 0.25);
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
          margin-bottom: 1.5rem;
        }

        .xai-modal-box h4 { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem; }

        .xai-modal-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .x-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
        }
        .x-item.pos { border-left: 3px solid #10b981; }
        .x-item.neg { border-left: 3px solid #ef4444; }

        .uw-action-section h4 {
          font-size: 0.9rem;
          color: #fff;
          margin-bottom: 0.65rem;
        }

        .uw-textarea {
          width: 100%;
          resize: vertical;
          margin-bottom: 1rem;
        }

        .uw-buttons-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
      `})]})}function fp({applications:e}){const t=e.length,n=e.filter(i=>i.status==="APPROVED").length;e.filter(i=>i.status==="MANUAL_REVIEW").length,e.filter(i=>i.status==="REJECTED").length;const r=Math.round(e.reduce((i,a)=>i+a.creditScore,0)/(t||1)),l=Math.round(e.reduce((i,a)=>i+a.riskScore,0)/(t||1));return s.jsxs("div",{className:"analytics-container",children:[s.jsx("div",{className:"an-header",children:s.jsxs("div",{children:[s.jsxs("h1",{className:"an-title",children:[s.jsx(fc,{className:"text-cyan inline-icon"})," Risk & Model Performance Analytics"]}),s.jsx("p",{className:"an-subtitle",children:"Executive insights into portfolio risk distribution, approval ratios, and AI decision precision."})]})}),s.jsxs("div",{className:"grid-4",children:[s.jsxs("div",{className:"glass-card stat-box",children:[s.jsx("span",{className:"stat-label",children:"AI Auto-Approval Rate"}),s.jsxs("span",{className:"stat-value text-emerald",children:[Math.round(n/(t||1)*100),"%"]}),s.jsxs("span",{className:"stat-sub",children:[n," of ",t," applications"]})]}),s.jsxs("div",{className:"glass-card stat-box",children:[s.jsx("span",{className:"stat-label",children:"Portfolio Avg Credit Score"}),s.jsx("span",{className:"stat-value text-cyan",children:r}),s.jsx("span",{className:"stat-sub",children:"Prime Borrower Threshold ≥ 720"})]}),s.jsxs("div",{className:"glass-card stat-box",children:[s.jsx("span",{className:"stat-label",children:"Average Risk Index"}),s.jsxs("span",{className:"stat-value text-amber",children:[l," / 100"]}),s.jsx("span",{className:"stat-sub",children:"Low Risk Zone < 35"})]}),s.jsxs("div",{className:"glass-card stat-box",children:[s.jsx("span",{className:"stat-label",children:"AI Model Accuracy"}),s.jsx("span",{className:"stat-value purple-gradient-text",children:"94.8%"}),s.jsx("span",{className:"stat-sub",children:"Validated against underwriter decisions"})]})]}),s.jsxs("div",{className:"grid-2 chart-grid",children:[s.jsxs("div",{className:"glass-card chart-card",children:[s.jsxs("div",{className:"card-title-row",children:[s.jsx(dc,{className:"text-cyan",size:20}),s.jsx("h3",{children:"Portfolio Risk Score Spectrum"})]}),s.jsxs("div",{className:"bar-chart-visual",children:[s.jsxs("div",{className:"chart-bar-item",children:[s.jsx("div",{className:"bar-wrapper",children:s.jsx("div",{className:"bar-fill bg-emerald",style:{height:"78%"}})}),s.jsx("span",{className:"bar-tag",children:"Low (0-30)"}),s.jsx("span",{className:"bar-val font-mono",children:"42%"})]}),s.jsxs("div",{className:"chart-bar-item",children:[s.jsx("div",{className:"bar-wrapper",children:s.jsx("div",{className:"bar-fill bg-amber",style:{height:"52%"}})}),s.jsx("span",{className:"bar-tag",children:"Moderate (31-60)"}),s.jsx("span",{className:"bar-val font-mono",children:"31%"})]}),s.jsxs("div",{className:"chart-bar-item",children:[s.jsx("div",{className:"bar-wrapper",children:s.jsx("div",{className:"bar-fill bg-rose",style:{height:"34%"}})}),s.jsx("span",{className:"bar-tag",children:"High (61-80)"}),s.jsx("span",{className:"bar-val font-mono",children:"18%"})]}),s.jsxs("div",{className:"chart-bar-item",children:[s.jsx("div",{className:"bar-wrapper",children:s.jsx("div",{className:"bar-fill bg-purple",style:{height:"18%"}})}),s.jsx("span",{className:"bar-tag",children:"Critical (81-100)"}),s.jsx("span",{className:"bar-val font-mono",children:"9%"})]})]})]}),s.jsxs("div",{className:"glass-card chart-card",children:[s.jsxs("div",{className:"card-title-row",children:[s.jsx(ip,{className:"text-cyan",size:20}),s.jsx("h3",{children:"Approval Rate by Income Tier"})]}),s.jsxs("div",{className:"income-tiers-list",children:[s.jsxs("div",{className:"tier-row",children:[s.jsxs("div",{className:"tier-info",children:[s.jsx("span",{children:"Tier 1: < $5,000 / mo"}),s.jsx("span",{className:"tier-pct font-mono",children:"48% Approved"})]}),s.jsx("div",{className:"tier-progress-track",children:s.jsx("div",{className:"tier-progress-fill",style:{width:"48%"}})})]}),s.jsxs("div",{className:"tier-row",children:[s.jsxs("div",{className:"tier-info",children:[s.jsx("span",{children:"Tier 2: $5,000 - $10,000 / mo"}),s.jsx("span",{className:"tier-pct font-mono",children:"74% Approved"})]}),s.jsx("div",{className:"tier-progress-track",children:s.jsx("div",{className:"tier-progress-fill",style:{width:"74%"}})})]}),s.jsxs("div",{className:"tier-row",children:[s.jsxs("div",{className:"tier-info",children:[s.jsx("span",{children:"Tier 3: $10,000 - $20,000 / mo"}),s.jsx("span",{className:"tier-pct font-mono",children:"89% Approved"})]}),s.jsx("div",{className:"tier-progress-track",children:s.jsx("div",{className:"tier-progress-fill",style:{width:"89%"}})})]}),s.jsxs("div",{className:"tier-row",children:[s.jsxs("div",{className:"tier-info",children:[s.jsx("span",{children:"Tier 4: > $20,000 / mo (High Net Worth)"}),s.jsx("span",{className:"tier-pct font-mono",children:"96% Approved"})]}),s.jsx("div",{className:"tier-progress-track",children:s.jsx("div",{className:"tier-progress-fill",style:{width:"96%"}})})]})]})]})]}),s.jsxs("div",{className:"glass-card model-metrics-card",children:[s.jsxs("div",{className:"card-title-row",children:[s.jsx(Kf,{className:"text-cyan",size:20}),s.jsx("h3",{children:"Machine Learning Model Evaluation & Confusion Matrix"})]}),s.jsxs("div",{className:"grid-2 model-metrics-grid",children:[s.jsxs("div",{className:"confusion-matrix-box",children:[s.jsx("h4",{children:"Confusion Matrix Breakdown (Test Set)"}),s.jsxs("div",{className:"matrix-grid",children:[s.jsxs("div",{className:"matrix-cell cell-tp",children:[s.jsx("span",{className:"m-num",children:"1,420"}),s.jsx("span",{className:"m-desc",children:"True Positive (Auto-Approved & Safe)"})]}),s.jsxs("div",{className:"matrix-cell cell-fp",children:[s.jsx("span",{className:"m-num",children:"38"}),s.jsx("span",{className:"m-desc",children:"False Positive (Auto-Approved & Defaulted)"})]}),s.jsxs("div",{className:"matrix-cell cell-fn",children:[s.jsx("span",{className:"m-num",children:"24"}),s.jsx("span",{className:"m-desc",children:"False Negative (Rejected & Safe)"})]}),s.jsxs("div",{className:"matrix-cell cell-tn",children:[s.jsx("span",{className:"m-num",children:"582"}),s.jsx("span",{className:"m-desc",children:"True Negative (Rejected & Default Risk)"})]})]})]}),s.jsxs("div",{className:"metrics-list-box",children:[s.jsx("h4",{children:"Model Health Benchmark Metrics"}),s.jsxs("div",{className:"health-row",children:[s.jsx("span",{className:"h-name",children:"Model Precision:"}),s.jsx("span",{className:"h-val text-emerald font-mono",children:"97.4%"})]}),s.jsxs("div",{className:"health-row",children:[s.jsx("span",{className:"h-name",children:"Model Recall / Sensitivity:"}),s.jsx("span",{className:"h-val text-cyan font-mono",children:"98.3%"})]}),s.jsxs("div",{className:"health-row",children:[s.jsx("span",{className:"h-name",children:"F1-Score:"}),s.jsx("span",{className:"h-val text-purple font-mono",children:"0.978"})]}),s.jsxs("div",{className:"health-row",children:[s.jsx("span",{className:"h-name",children:"ROC-AUC Index:"}),s.jsx("span",{className:"h-val text-amber font-mono",children:"0.991"})]}),s.jsxs("div",{className:"health-row",children:[s.jsx("span",{className:"h-name",children:"Average Decision Latency:"}),s.jsx("span",{className:"h-val text-muted font-mono",children:"142 ms"})]})]})]})]}),s.jsx("style",{children:`
        .analytics-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .an-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .an-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .stat-label { font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; }
        .stat-value { font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); }
        .stat-sub { font-size: 0.75rem; color: var(--text-muted); }

        .chart-grid {
          gap: 1.5rem;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .card-title-row h3 { font-size: 1.1rem; color: #fff; }

        .bar-chart-visual {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 200px;
          padding-top: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .chart-bar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          height: 100%;
          justify-content: flex-end;
        }

        .bar-wrapper {
          width: 48px;
          height: 140px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          border: 1px solid var(--border-glass);
        }

        .bar-fill {
          width: 100%;
          border-radius: 8px 8px 0 0;
          transition: height 0.5s ease;
        }

        .bg-purple { background: var(--accent-purple); }

        .bar-tag { font-size: 0.72rem; color: var(--text-secondary); }
        .bar-val { font-size: 0.85rem; font-weight: 700; color: #fff; }

        .income-tiers-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tier-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .tier-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          font-weight: 600;
          color: #fff;
        }

        .tier-pct { color: var(--accent-cyan); }

        .tier-progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .tier-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue));
          border-radius: 4px;
        }

        /* Confusion Matrix */
        .model-metrics-grid {
          gap: 1.5rem;
        }

        .confusion-matrix-box h4, .metrics-list-box h4 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.85rem;
        }

        .matrix-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .matrix-cell {
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid var(--border-glass);
        }

        .cell-tp { background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); }
        .cell-fp { background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); }
        .cell-fn { background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.3); }
        .cell-tn { background: rgba(124, 58, 237, 0.1); border-color: rgba(124, 58, 237, 0.3); }

        .m-num { font-size: 1.5rem; font-weight: 800; font-family: var(--font-mono); color: #fff; }
        .m-desc { font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.2rem; }

        .metrics-list-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .health-row {
          display: flex;
          justify-content: space-between;
          padding: 0.6rem 0;
          border-bottom: 1px solid var(--border-glass);
          font-size: 0.88rem;
        }

        .h-name { color: var(--text-secondary); }
        .h-val { font-weight: 700; }
        .text-purple { color: #a78bfa; }
      `})]})}function pp({modelConfig:e,setModelConfig:t}){const n=(u,f)=>{t(v=>({...v,[u]:Number(f)}))},r=u=>{t(f=>({...f,fraudSensitivity:u}))},l=()=>{t({approvalThreshold:35,reviewWindow:65,fraudSensitivity:"MEDIUM"})},i=Math.round(e.approvalThreshold/100*100*1.4),a=Math.round((e.reviewWindow-e.approvalThreshold)/100*100*1.2),o=Math.max(0,100-i-a);return s.jsxs("div",{className:"settings-container",children:[s.jsxs("div",{className:"set-header",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"set-title",children:[s.jsx(Fs,{className:"text-cyan inline-icon"})," AI Model Policy & Threshold Tuning"]}),s.jsx("p",{className:"set-subtitle",children:"Calibrate decision boundaries, risk tolerance levels, and fraud sensitivity for the automated credit engine."})]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(np,{size:15}),s.jsx("span",{children:"Reset Defaults"})]})]}),s.jsxs("div",{className:"grid-2 set-grid",children:[s.jsxs("div",{className:"glass-card config-card",children:[s.jsxs("div",{className:"c-title",children:[s.jsx(bs,{size:18,className:"text-cyan"}),s.jsx("h3",{children:"Decision Boundary Cutoffs"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("span",{children:"Auto-Approval Upper Cutoff Score (Score ≤ Threshold)"}),s.jsxs("span",{className:"val-display text-emerald font-mono",children:[e.approvalThreshold," / 100"]})]}),s.jsx("p",{className:"field-hint",children:"Applications with risk score at or below this threshold are instantly auto-approved without human underwriter intervention."}),s.jsx("input",{type:"range",min:"15",max:"50",step:"1",className:"range-slider",value:e.approvalThreshold,onChange:u=>n("approvalThreshold",u.target.value)})]}),s.jsxs("div",{className:"form-group",style:{marginTop:"1.5rem"},children:[s.jsxs("label",{className:"form-label",children:[s.jsxs("span",{children:["Manual Review Window Ceiling (",e.approvalThreshold+1," - ",e.reviewWindow,")"]}),s.jsxs("span",{className:"val-display text-amber font-mono",children:[e.reviewWindow," / 100"]})]}),s.jsxs("p",{className:"field-hint",children:["Applications scoring between ",e.approvalThreshold+1," and ",e.reviewWindow," are routed to the Underwriter Queue. Scores above ",e.reviewWindow," are auto-rejected."]}),s.jsx("input",{type:"range",min:e.approvalThreshold+10,max:"85",step:"1",className:"range-slider",value:e.reviewWindow,onChange:u=>n("reviewWindow",u.target.value)})]}),s.jsxs("div",{className:"form-group",style:{marginTop:"1.5rem"},children:[s.jsx("label",{className:"form-label",children:"Fraud Rule Sensitivity Matrix"}),s.jsx("div",{className:"sensitivity-options",children:["LOW","MEDIUM","HIGH","STRICT"].map(u=>s.jsx("button",{type:"button",className:`sens-btn ${e.fraudSensitivity===u?"active":""}`,onClick:()=>r(u),children:u},u))})]})]}),s.jsxs("div",{className:"glass-card impact-card glass-card-glow",children:[s.jsxs("div",{className:"c-title",children:[s.jsx(Os,{size:18,className:"text-cyan"}),s.jsx("h3",{children:"Simulated Portfolio Impact"})]}),s.jsx("p",{className:"impact-desc",children:"Estimated application routing based on current policy thresholds:"}),s.jsxs("div",{className:"impact-meters",children:[s.jsxs("div",{className:"meter-row",children:[s.jsxs("div",{className:"m-info",children:[s.jsx("span",{children:"Estimated Straight-Through Processing (STP Auto-Approved):"}),s.jsxs("span",{className:"m-pct text-emerald font-mono",children:[i,"%"]})]}),s.jsx("div",{className:"meter-track",children:s.jsx("div",{className:"meter-fill bg-emerald",style:{width:`${i}%`}})})]}),s.jsxs("div",{className:"meter-row",children:[s.jsxs("div",{className:"m-info",children:[s.jsx("span",{children:"Estimated Underwriter Workload (Manual Review Queue):"}),s.jsxs("span",{className:"m-pct text-amber font-mono",children:[a,"%"]})]}),s.jsx("div",{className:"meter-track",children:s.jsx("div",{className:"meter-fill bg-amber",style:{width:`${a}%`}})})]}),s.jsxs("div",{className:"meter-row",children:[s.jsxs("div",{className:"m-info",children:[s.jsx("span",{children:"Estimated Auto-Rejection Ratio:"}),s.jsxs("span",{className:"m-pct text-rose font-mono",children:[o,"%"]})]}),s.jsx("div",{className:"meter-track",children:s.jsx("div",{className:"meter-fill bg-rose",style:{width:`${o}%`}})})]})]}),s.jsxs("div",{className:"policy-summary",children:[s.jsx("h4",{children:"Current Active Policy Rules"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["Auto-Approval Threshold: ",s.jsxs("b",{children:["Score ≤ ",e.approvalThreshold]})]}),s.jsxs("li",{children:["Underwriter Review Window: ",s.jsxs("b",{children:["Score ",e.approvalThreshold+1," to ",e.reviewWindow]})]}),s.jsxs("li",{children:["Auto-Rejection Boundary: ",s.jsxs("b",{children:["Score > ",e.reviewWindow]})]}),s.jsxs("li",{children:["Fraud Anomaly Profile: ",s.jsxs("b",{children:[e.fraudSensitivity," Sensitivity"]})]})]})]})]})]}),s.jsx("style",{children:`
        .settings-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .set-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .set-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .set-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .set-grid {
          gap: 1.5rem;
        }

        .c-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .c-title h3 { font-size: 1.1rem; color: #fff; }

        .field-hint {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
        }

        .sensitivity-options {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .sens-btn {
          flex: 1;
          padding: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sens-btn:hover { background: rgba(255, 255, 255, 0.08); color: #fff; }

        .sens-btn.active {
          background: rgba(0, 242, 254, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .impact-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .impact-meters {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .meter-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .m-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: #fff;
          font-weight: 600;
        }

        .meter-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .meter-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .policy-summary {
          background: rgba(0, 0, 0, 0.3);
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
        }

        .policy-summary h4 {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .policy-summary ul {
          padding-left: 1.25rem;
          font-size: 0.82rem;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
      `})]})}function mp(){const[e,t]=Y.useState("apply"),[n,r]=Y.useState(Ga),[l,i]=Y.useState({approvalThreshold:35,reviewWindow:65,fraudSensitivity:"MEDIUM"}),a=n.filter(v=>v.status==="MANUAL_REVIEW").length,o=v=>{r(h=>[v,...h])},u=(v,h,m)=>{r(k=>k.map(w=>w.id===v?{...w,status:h,underwriterNotes:m?`${m} [Updated by Underwriter]`:`Status manually updated to ${h} by Underwriter.`}:w))},f=()=>{r(Ga)};return s.jsxs("div",{className:"app-container",children:[s.jsx(op,{activeTab:e,setActiveTab:t,pendingReviewCount:a,onSeedDemoData:f}),s.jsxs("main",{className:"main-content",children:[e==="apply"&&s.jsx(up,{onSubmitApplication:o,modelConfig:l}),e==="simulator"&&s.jsx(cp,{modelConfig:l}),e==="underwriter"&&s.jsx(dp,{applications:n,onUpdateApplicationStatus:u}),e==="analytics"&&s.jsx(fp,{applications:n}),e==="settings"&&s.jsx(pp,{modelConfig:l,setModelConfig:i})]}),s.jsx("footer",{className:"app-footer",children:s.jsxs("div",{className:"footer-inner",children:[s.jsx("p",{children:"© 2026 CrediMind AI Engine. Built for Automated Banking & Risk Governance."}),s.jsxs("div",{className:"footer-links",children:[s.jsx("span",{children:"Model v2.4"}),s.jsx("span",{children:"•"}),s.jsx("span",{children:"Real-time XAI Active"}),s.jsx("span",{children:"•"}),s.jsx("span",{children:"Compliance Mode: Active"})]})]})}),s.jsx("style",{children:`
        .app-footer {
          border-top: 1px solid var(--border-glass);
          background: rgba(7, 9, 14, 0.9);
          padding: 1.25rem;
          margin-top: auto;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `})]})}Yl.createRoot(document.getElementById("root")).render(s.jsx(_c.StrictMode,{children:s.jsx(mp,{})}));
