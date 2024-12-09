(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))a(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const y of g.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function i(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function a(h){if(h.ep)return;h.ep=!0;const g=i(h);fetch(h.href,g)}})();var zs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=function(r){const e=[];let i=0;for(let a=0;a<r.length;a++){let h=r.charCodeAt(a);h<128?e[i++]=h:h<2048?(e[i++]=h>>6|192,e[i++]=h&63|128):(h&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(h=65536+((h&1023)<<10)+(r.charCodeAt(++a)&1023),e[i++]=h>>18|240,e[i++]=h>>12&63|128,e[i++]=h>>6&63|128,e[i++]=h&63|128):(e[i++]=h>>12|224,e[i++]=h>>6&63|128,e[i++]=h&63|128)}return e},$a=function(r){const e=[];let i=0,a=0;for(;i<r.length;){const h=r[i++];if(h<128)e[a++]=String.fromCharCode(h);else if(h>191&&h<224){const g=r[i++];e[a++]=String.fromCharCode((h&31)<<6|g&63)}else if(h>239&&h<365){const g=r[i++],y=r[i++],S=r[i++],R=((h&7)<<18|(g&63)<<12|(y&63)<<6|S&63)-65536;e[a++]=String.fromCharCode(55296+(R>>10)),e[a++]=String.fromCharCode(56320+(R&1023))}else{const g=r[i++],y=r[i++];e[a++]=String.fromCharCode((h&15)<<12|(g&63)<<6|y&63)}}return e.join("")},jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let h=0;h<r.length;h+=3){const g=r[h],y=h+1<r.length,S=y?r[h+1]:0,R=h+2<r.length,F=R?r[h+2]:0,Y=g>>2,Z=(g&3)<<4|S>>4;let se=(S&15)<<2|F>>6,be=F&63;R||(be=64,y||(se=64)),a.push(i[Y],i[Z],i[se],i[be])}return a.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Uo(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$a(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let h=0;h<r.length;){const g=i[r.charAt(h++)],S=h<r.length?i[r.charAt(h)]:0;++h;const F=h<r.length?i[r.charAt(h)]:64;++h;const Z=h<r.length?i[r.charAt(h)]:64;if(++h,g==null||S==null||F==null||Z==null)throw new qa;const se=g<<2|S>>4;if(a.push(se),F!==64){const be=S<<4&240|F>>2;if(a.push(be),Z!==64){const $=F<<6&192|Z;a.push($)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class qa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wa=function(r){const e=Uo(r);return jo.encodeByteArray(e,!0)},Cr=function(r){return Wa(r).replace(/\./g,"")},Fo=function(r){try{return jo.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=()=>za().__FIREBASE_DEFAULTS__,Ka=()=>{if(typeof process>"u"||typeof zs>"u")return;const r=zs.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Xa=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Fo(r[1]);return e&&JSON.parse(e)},Ss=()=>{try{return Ga()||Ka()||Xa()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ho=r=>{var e,i;return(i=(e=Ss())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[r]},Bo=r=>{const e=Ho(r);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},Vo=()=>{var r;return(r=Ss())===null||r===void 0?void 0:r.config},$o=r=>{var e;return(e=Ss())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",h=r.iat||0,g=r.sub||r.user_id;if(!g)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const y=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:h,exp:h+3600,auth_time:h,sub:g,user_id:g,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Cr(JSON.stringify(i)),Cr(JSON.stringify(y)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ya(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Qa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Za(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function eu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tu(){const r=Je();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function nu(){try{return typeof indexedDB=="object"}catch{return!1}}function iu(){return new Promise((r,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(a);h.onsuccess=()=>{h.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},h.onupgradeneeded=()=>{i=!1},h.onerror=()=>{var g;e(((g=h.error)===null||g===void 0?void 0:g.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="FirebaseError";class xt extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=ru,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},h=`${this.service}/${e}`,g=this.errors[e],y=g?su(g,a):"Error",S=`${this.serviceName}: ${y} (${h}).`;return new xt(h,S,a)}}function su(r,e){return r.replace(ou,(i,a)=>{const h=e[a];return h!=null?String(h):`<${a}?>`})}const ou=/\{\$([^}]+)}/g;function au(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function kr(r,e){if(r===e)return!0;const i=Object.keys(r),a=Object.keys(e);for(const h of i){if(!a.includes(h))return!1;const g=r[h],y=e[h];if(Gs(g)&&Gs(y)){if(!kr(g,y))return!1}else if(g!==y)return!1}for(const h of a)if(!i.includes(h))return!1;return!0}function Gs(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(r){const e=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(h=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(h))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Bi(r){const e={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[h,g]=a.split("=");e[decodeURIComponent(h)]=decodeURIComponent(g)}}),e}function Vi(r){const e=r.indexOf("?");if(!e)return"";const i=r.indexOf("#",e);return r.substring(e,i>0?i:void 0)}function uu(r,e){const i=new cu(r,e);return i.subscribe.bind(i)}class cu{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let h;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");lu(e,["next","error","complete"])?h=e:h={next:e,error:i,complete:a},h.next===void 0&&(h.next=as),h.error===void 0&&(h.error=as),h.complete===void 0&&(h.complete=as);const g=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?h.error(this.finalError):h.complete()}catch{}}),this.observers.push(h),g}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lu(r,e){if(typeof r!="object"||r===null)return!1;for(const i of e)if(i in r&&typeof r[i]=="function")return!0;return!1}function as(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(r){return r&&r._delegate?r._delegate:r}class En{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new Ja;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:i});h&&a.resolve(h)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),h=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(g){if(h)return null;throw g}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(du(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(i);try{const g=this.getOrInitializeService({instanceIdentifier:h});a.resolve(g)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[g,y]of this.instancesDeferred.entries()){const S=this.normalizeInstanceIdentifier(g);a===S&&y.resolve(h)}return h}onInit(e,i){var a;const h=this.normalizeInstanceIdentifier(i),g=(a=this.onInitCallbacks.get(h))!==null&&a!==void 0?a:new Set;g.add(e),this.onInitCallbacks.set(h,g);const y=this.instances.get(h);return y&&e(y,h),()=>{g.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const h of a)try{h(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:fu(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fu(r){return r===Hn?void 0:r}function du(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new hu(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(_e||(_e={}));const gu={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},mu=_e.INFO,vu={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},yu=(r,e,...i)=>{if(e<r.logLevel)return;const a=new Date().toISOString(),h=vu[e];if(h)console[h](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cs{constructor(e){this.name=e,this._logLevel=mu,this._logHandler=yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const _u=(r,e)=>e.some(i=>r instanceof i);let Ks,Xs;function Tu(){return Ks||(Ks=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wu(){return Xs||(Xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wo=new WeakMap,vs=new WeakMap,zo=new WeakMap,us=new WeakMap,ks=new WeakMap;function Eu(r){const e=new Promise((i,a)=>{const h=()=>{r.removeEventListener("success",g),r.removeEventListener("error",y)},g=()=>{i(_n(r.result)),h()},y=()=>{a(r.error),h()};r.addEventListener("success",g),r.addEventListener("error",y)});return e.then(i=>{i instanceof IDBCursor&&Wo.set(i,r)}).catch(()=>{}),ks.set(e,r),e}function bu(r){if(vs.has(r))return;const e=new Promise((i,a)=>{const h=()=>{r.removeEventListener("complete",g),r.removeEventListener("error",y),r.removeEventListener("abort",y)},g=()=>{i(),h()},y=()=>{a(r.error||new DOMException("AbortError","AbortError")),h()};r.addEventListener("complete",g),r.addEventListener("error",y),r.addEventListener("abort",y)});vs.set(r,e)}let ys={get(r,e,i){if(r instanceof IDBTransaction){if(e==="done")return vs.get(r);if(e==="objectStoreNames")return r.objectStoreNames||zo.get(r);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return _n(r[e])},set(r,e,i){return r[e]=i,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Iu(r){ys=r(ys)}function Au(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=r.call(cs(this),e,...i);return zo.set(a,e.sort?e.sort():[e]),_n(a)}:wu().includes(r)?function(...e){return r.apply(cs(this),e),_n(Wo.get(this))}:function(...e){return _n(r.apply(cs(this),e))}}function Su(r){return typeof r=="function"?Au(r):(r instanceof IDBTransaction&&bu(r),_u(r,Tu())?new Proxy(r,ys):r)}function _n(r){if(r instanceof IDBRequest)return Eu(r);if(us.has(r))return us.get(r);const e=Su(r);return e!==r&&(us.set(r,e),ks.set(e,r)),e}const cs=r=>ks.get(r);function Cu(r,e,{blocked:i,upgrade:a,blocking:h,terminated:g}={}){const y=indexedDB.open(r,e),S=_n(y);return a&&y.addEventListener("upgradeneeded",R=>{a(_n(y.result),R.oldVersion,R.newVersion,_n(y.transaction),R)}),i&&y.addEventListener("blocked",R=>i(R.oldVersion,R.newVersion,R)),S.then(R=>{g&&R.addEventListener("close",()=>g()),h&&R.addEventListener("versionchange",F=>h(F.oldVersion,F.newVersion,F))}).catch(()=>{}),S}const ku=["get","getKey","getAll","getAllKeys","count"],Ru=["put","add","delete","clear"],ls=new Map;function Js(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ls.get(e))return ls.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,h=Ru.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(h||ku.includes(i)))return;const g=async function(y,...S){const R=this.transaction(y,h?"readwrite":"readonly");let F=R.store;return a&&(F=F.index(S.shift())),(await Promise.all([F[i](...S),h&&R.done]))[0]};return ls.set(e,g),g}Iu(r=>({...r,get:(e,i,a)=>Js(e,i)||r.get(e,i,a),has:(e,i)=>!!Js(e,i)||r.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Ou(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function Ou(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _s="@firebase/app",Ys="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Cs("@firebase/app"),Du="@firebase/app-compat",Nu="@firebase/analytics-compat",xu="@firebase/analytics",Lu="@firebase/app-check-compat",Mu="@firebase/app-check",Uu="@firebase/auth",ju="@firebase/auth-compat",Fu="@firebase/database",Hu="@firebase/data-connect",Bu="@firebase/database-compat",Vu="@firebase/functions",$u="@firebase/functions-compat",qu="@firebase/installations",Wu="@firebase/installations-compat",zu="@firebase/messaging",Gu="@firebase/messaging-compat",Ku="@firebase/performance",Xu="@firebase/performance-compat",Ju="@firebase/remote-config",Yu="@firebase/remote-config-compat",Qu="@firebase/storage",Zu="@firebase/storage-compat",ec="@firebase/firestore",tc="@firebase/vertexai",nc="@firebase/firestore-compat",ic="firebase",rc="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]",sc={[_s]:"fire-core",[Du]:"fire-core-compat",[xu]:"fire-analytics",[Nu]:"fire-analytics-compat",[Mu]:"fire-app-check",[Lu]:"fire-app-check-compat",[Uu]:"fire-auth",[ju]:"fire-auth-compat",[Fu]:"fire-rtdb",[Hu]:"fire-data-connect",[Bu]:"fire-rtdb-compat",[Vu]:"fire-fn",[$u]:"fire-fn-compat",[qu]:"fire-iid",[Wu]:"fire-iid-compat",[zu]:"fire-fcm",[Gu]:"fire-fcm-compat",[Ku]:"fire-perf",[Xu]:"fire-perf-compat",[Ju]:"fire-rc",[Yu]:"fire-rc-compat",[Qu]:"fire-gcs",[Zu]:"fire-gcs-compat",[ec]:"fire-fst",[nc]:"fire-fst-compat",[tc]:"fire-vertex","fire-js":"fire-js",[ic]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,oc=new Map,ws=new Map;function Qs(r,e){try{r.container.addComponent(e)}catch(i){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,i)}}function Bn(r){const e=r.name;if(ws.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;ws.set(e,r);for(const i of Rr.values())Qs(i,r);for(const i of oc.values())Qs(i,r);return!0}function jr(r,e){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(e)}function Kt(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Xi("app","Firebase",ac);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,i,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=rc;function Go(r,e={}){let i=r;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Ts,automaticDataCollectionEnabled:!1},e),h=a.name;if(typeof h!="string"||!h)throw Tn.create("bad-app-name",{appName:String(h)});if(i||(i=Vo()),!i)throw Tn.create("no-options");const g=Rr.get(h);if(g){if(kr(i,g.options)&&kr(a,g.config))return g;throw Tn.create("duplicate-app",{appName:h})}const y=new pu(h);for(const R of ws.values())y.addComponent(R);const S=new uc(i,a,y);return Rr.set(h,S),S}function Rs(r=Ts){const e=Rr.get(r);if(!e&&r===Ts&&Vo())return Go();if(!e)throw Tn.create("no-app",{appName:r});return e}function Pt(r,e,i){var a;let h=(a=sc[r])!==null&&a!==void 0?a:r;i&&(h+=`-${i}`);const g=h.match(/\s|\//),y=e.match(/\s|\//);if(g||y){const S=[`Unable to register library "${h}" with version "${e}":`];g&&S.push(`library name "${h}" contains illegal characters (whitespace or "/")`),g&&y&&S.push("and"),y&&S.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(S.join(" "));return}Bn(new En(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="firebase-heartbeat-database",lc=1,zi="firebase-heartbeat-store";let hs=null;function Ko(){return hs||(hs=Cu(cc,lc,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(zi)}catch(i){console.warn(i)}}}}).catch(r=>{throw Tn.create("idb-open",{originalErrorMessage:r.message})})),hs}async function hc(r){try{const i=(await Ko()).transaction(zi),a=await i.objectStore(zi).get(Xo(r));return await i.done,a}catch(e){if(e instanceof xt)Qt.warn(e.message);else{const i=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(i.message)}}}async function Zs(r,e){try{const a=(await Ko()).transaction(zi,"readwrite");await a.objectStore(zi).put(e,Xo(r)),await a.done}catch(i){if(i instanceof xt)Qt.warn(i.message);else{const a=Tn.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Qt.warn(a.message)}}}function Xo(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=1024,dc=30*24*60*60*1e3;class pc{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new mc(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,i;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),g=eo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===g||this._heartbeatsCache.heartbeats.some(y=>y.date===g)?void 0:(this._heartbeatsCache.heartbeats.push({date:g,agent:h}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(y=>{const S=new Date(y.date).valueOf();return Date.now()-S<=dc}),this._storage.overwrite(this._heartbeatsCache))}catch(a){Qt.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=eo(),{heartbeatsToSend:a,unsentEntries:h}=gc(this._heartbeatsCache.heartbeats),g=Cr(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),g}catch(i){return Qt.warn(i),""}}}function eo(){return new Date().toISOString().substring(0,10)}function gc(r,e=fc){const i=[];let a=r.slice();for(const h of r){const g=i.find(y=>y.agent===h.agent);if(g){if(g.dates.push(h.date),to(i)>e){g.dates.pop();break}}else if(i.push({agent:h.agent,dates:[h.date]}),to(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class mc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nu()?iu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await hc(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const h=await this.read();return Zs(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const h=await this.read();return Zs(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function to(r){return Cr(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(r){Bn(new En("platform-logger",e=>new Pu(e),"PRIVATE")),Bn(new En("heartbeat",e=>new pc(e),"PRIVATE")),Pt(_s,Ys,r),Pt(_s,Ys,"esm2017"),Pt("fire-js","")}vc("");var yc="firebase",_c="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(yc,_c,"app");function Ps(r,e){var i={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(i[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,a=Object.getOwnPropertySymbols(r);h<a.length;h++)e.indexOf(a[h])<0&&Object.prototype.propertyIsEnumerable.call(r,a[h])&&(i[a[h]]=r[a[h]]);return i}function Jo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tc=Jo,Yo=new Xi("auth","Firebase",Jo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Cs("@firebase/auth");function wc(r,...e){Pr.logLevel<=_e.WARN&&Pr.warn(`Auth (${$n}): ${r}`,...e)}function br(r,...e){Pr.logLevel<=_e.ERROR&&Pr.error(`Auth (${$n}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(r,...e){throw Os(r,...e)}function Ot(r,...e){return Os(r,...e)}function Qo(r,e,i){const a=Object.assign(Object.assign({},Tc()),{[e]:i});return new Xi("auth","Firebase",a).create(e,{appName:r.name})}function wn(r){return Qo(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Os(r,...e){if(typeof r!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return Yo.create(r,...e)}function re(r,e,...i){if(!r)throw Os(e,...i)}function Xt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw br(e),new Error(e)}function Zt(r,e){r||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ec(){return no()==="http:"||no()==="https:"}function no(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ec()||Za()||"connection"in navigator)?navigator.onLine:!0}function Ic(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,i){this.shortDelay=e,this.longDelay=i,Zt(i>e,"Short delay should be less than long delay!"),this.isMobile=Ya()||eu()}get(){return bc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(r,e){Zt(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new Yi(3e4,6e4);function qn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function In(r,e,i,a,h={}){return ea(r,h,async()=>{let g={},y={};a&&(e==="GET"?y=a:g={body:JSON.stringify(a)});const S=Ji(Object.assign({key:r.config.apiKey},y)).slice(1),R=await r._getAdditionalHeaders();R["Content-Type"]="application/json",r.languageCode&&(R["X-Firebase-Locale"]=r.languageCode);const F=Object.assign({method:e,headers:R},g);return Qa()||(F.referrerPolicy="no-referrer"),Zo.fetch()(ta(r,r.config.apiHost,i,S),F)})}async function ea(r,e,i){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},Ac),e);try{const h=new kc(r),g=await Promise.race([i(),h.promise]);h.clearNetworkTimeout();const y=await g.json();if("needConfirmation"in y)throw Tr(r,"account-exists-with-different-credential",y);if(g.ok&&!("errorMessage"in y))return y;{const S=g.ok?y.errorMessage:y.error.message,[R,F]=S.split(" : ");if(R==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(r,"credential-already-in-use",y);if(R==="EMAIL_EXISTS")throw Tr(r,"email-already-in-use",y);if(R==="USER_DISABLED")throw Tr(r,"user-disabled",y);const Y=a[R]||R.toLowerCase().replace(/[_\s]+/g,"-");if(F)throw Qo(r,Y,F);Tt(r,Y)}}catch(h){if(h instanceof xt)throw h;Tt(r,"network-request-failed",{message:String(h)})}}async function Fr(r,e,i,a,h={}){const g=await In(r,e,i,a,h);return"mfaPendingCredential"in g&&Tt(r,"multi-factor-auth-required",{_serverResponse:g}),g}function ta(r,e,i,a){const h=`${e}${i}?${a}`;return r.config.emulator?Ds(r.config,h):`${r.config.apiScheme}://${h}`}function Cc(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(Ot(this.auth,"network-request-failed")),Sc.get())})}}function Tr(r,e,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const h=Ot(r,e,a);return h.customData._tokenResponse=i,h}function io(r){return r!==void 0&&r.enterprise!==void 0}class Rc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return Cc(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pc(r,e){return In(r,"GET","/v2/recaptchaConfig",qn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(r,e){return In(r,"POST","/v1/accounts:delete",e)}async function na(r,e){return In(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dc(r,e=!1){const i=bn(r),a=await i.getIdToken(e),h=Ns(a);re(h&&h.exp&&h.auth_time&&h.iat,i.auth,"internal-error");const g=typeof h.firebase=="object"?h.firebase:void 0,y=g==null?void 0:g.sign_in_provider;return{claims:h,token:a,authTime:$i(fs(h.auth_time)),issuedAtTime:$i(fs(h.iat)),expirationTime:$i(fs(h.exp)),signInProvider:y||null,signInSecondFactor:(g==null?void 0:g.sign_in_second_factor)||null}}function fs(r){return Number(r)*1e3}function Ns(r){const[e,i,a]=r.split(".");if(e===void 0||i===void 0||a===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const h=Fo(i);return h?JSON.parse(h):(br("Failed to decode base64 JWT payload"),null)}catch(h){return br("Caught error parsing JWT payload as JSON",h==null?void 0:h.toString()),null}}function ro(r){const e=Ns(r);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(r,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof xt&&Nc(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function Nc({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const h=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,h)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(r){var e;const i=r.auth,a=await r.getIdToken(),h=await Gi(r,na(i,{idToken:a}));re(h==null?void 0:h.users.length,i,"internal-error");const g=h.users[0];r._notifyReloadListener(g);const y=!((e=g.providerUserInfo)===null||e===void 0)&&e.length?ia(g.providerUserInfo):[],S=Mc(r.providerData,y),R=r.isAnonymous,F=!(r.email&&g.passwordHash)&&!(S!=null&&S.length),Y=R?F:!1,Z={uid:g.localId,displayName:g.displayName||null,photoURL:g.photoUrl||null,email:g.email||null,emailVerified:g.emailVerified||!1,phoneNumber:g.phoneNumber||null,tenantId:g.tenantId||null,providerData:S,metadata:new bs(g.createdAt,g.lastLoginAt),isAnonymous:Y};Object.assign(r,Z)}async function Lc(r){const e=bn(r);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mc(r,e){return[...r.filter(a=>!e.some(h=>h.providerId===a.providerId)),...e]}function ia(r){return r.map(e=>{var{providerId:i}=e,a=Ps(e,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(r,e){const i=await ea(r,{},async()=>{const a=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:h,apiKey:g}=r.config,y=ta(r,h,"/v1/token",`key=${g}`),S=await r._getAdditionalHeaders();return S["Content-Type"]="application/x-www-form-urlencoded",Zo.fetch()(y,{method:"POST",headers:S,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function jc(r,e){return In(r,"POST","/v2/accounts:revokeToken",qn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ro(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){re(e.length!==0,"internal-error");const i=ro(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:h,expiresIn:g}=await Uc(e,i);this.updateTokensAndExpiration(a,h,Number(g))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:h,expirationTime:g}=i,y=new gi;return a&&(re(typeof a=="string","internal-error",{appName:e}),y.refreshToken=a),h&&(re(typeof h=="string","internal-error",{appName:e}),y.accessToken=h),g&&(re(typeof g=="number","internal-error",{appName:e}),y.expirationTime=g),y}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(r,e){re(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:i,auth:a,stsTokenManager:h}=e,g=Ps(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=h,this.accessToken=h.accessToken,this.displayName=g.displayName||null,this.email=g.email||null,this.emailVerified=g.emailVerified||!1,this.phoneNumber=g.phoneNumber||null,this.photoURL=g.photoURL||null,this.isAnonymous=g.isAnonymous||!1,this.tenantId=g.tenantId||null,this.providerData=g.providerData?[...g.providerData]:[],this.metadata=new bs(g.createdAt||void 0,g.lastLoginAt||void 0)}async getIdToken(e){const i=await Gi(this,this.stsTokenManager.getToken(this.auth,e));return re(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Dc(this,e)}reload(){return Lc(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await Or(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Gi(this,Oc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var a,h,g,y,S,R,F,Y;const Z=(a=i.displayName)!==null&&a!==void 0?a:void 0,se=(h=i.email)!==null&&h!==void 0?h:void 0,be=(g=i.phoneNumber)!==null&&g!==void 0?g:void 0,$=(y=i.photoURL)!==null&&y!==void 0?y:void 0,G=(S=i.tenantId)!==null&&S!==void 0?S:void 0,oe=(R=i._redirectEventId)!==null&&R!==void 0?R:void 0,K=(F=i.createdAt)!==null&&F!==void 0?F:void 0,De=(Y=i.lastLoginAt)!==null&&Y!==void 0?Y:void 0,{uid:we,emailVerified:ve,isAnonymous:Le,providerData:Se,stsTokenManager:o}=i;re(we&&o,e,"internal-error");const I=gi.fromJSON(this.name,o);re(typeof we=="string",e,"internal-error"),pn(Z,e.name),pn(se,e.name),re(typeof ve=="boolean",e,"internal-error"),re(typeof Le=="boolean",e,"internal-error"),pn(be,e.name),pn($,e.name),pn(G,e.name),pn(oe,e.name),pn(K,e.name),pn(De,e.name);const _=new Jt({uid:we,auth:e,email:se,emailVerified:ve,displayName:Z,isAnonymous:Le,photoURL:$,phoneNumber:be,tenantId:G,stsTokenManager:I,createdAt:K,lastLoginAt:De});return Se&&Array.isArray(Se)&&(_.providerData=Se.map(E=>Object.assign({},E))),oe&&(_._redirectEventId=oe),_}static async _fromIdTokenResponse(e,i,a=!1){const h=new gi;h.updateFromServerResponse(i);const g=new Jt({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:a});return await Or(g),g}static async _fromGetAccountInfoResponse(e,i,a){const h=i.users[0];re(h.localId!==void 0,"internal-error");const g=h.providerUserInfo!==void 0?ia(h.providerUserInfo):[],y=!(h.email&&h.passwordHash)&&!(g!=null&&g.length),S=new gi;S.updateFromIdToken(a);const R=new Jt({uid:h.localId,auth:e,stsTokenManager:S,isAnonymous:y}),F={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:g,metadata:new bs(h.createdAt,h.lastLoginAt),isAnonymous:!(h.email&&h.passwordHash)&&!(g!=null&&g.length)};return Object.assign(R,F),R}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map;function Yt(r){Zt(r instanceof Function,"Expected a class definition");let e=so.get(r);return e?(Zt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,so.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}ra.type="NONE";const oo=ra;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(r,e,i){return`firebase:${r}:${e}:${i}`}class mi{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:h,name:g}=this.auth;this.fullUserKey=Ir(this.userKey,h.apiKey,g),this.fullPersistenceKey=Ir("persistence",h.apiKey,g),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new mi(Yt(oo),e,a);const h=(await Promise.all(i.map(async F=>{if(await F._isAvailable())return F}))).filter(F=>F);let g=h[0]||Yt(oo);const y=Ir(a,e.config.apiKey,e.name);let S=null;for(const F of i)try{const Y=await F._get(y);if(Y){const Z=Jt._fromJSON(e,Y);F!==g&&(S=Z),g=F;break}}catch{}const R=h.filter(F=>F._shouldAllowMigration);return!g._shouldAllowMigration||!R.length?new mi(g,e,a):(g=R[0],S&&await g._set(y,S.toJSON()),await Promise.all(i.map(async F=>{if(F!==g)try{await F._remove(y)}catch{}})),new mi(g,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ua(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(la(e))return"Blackberry";if(ha(e))return"Webos";if(oa(e))return"Safari";if((e.includes("chrome/")||aa(e))&&!e.includes("edge/"))return"Chrome";if(ca(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function sa(r=Je()){return/firefox\//i.test(r)}function oa(r=Je()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aa(r=Je()){return/crios\//i.test(r)}function ua(r=Je()){return/iemobile/i.test(r)}function ca(r=Je()){return/android/i.test(r)}function la(r=Je()){return/blackberry/i.test(r)}function ha(r=Je()){return/webos/i.test(r)}function xs(r=Je()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Fc(r=Je()){var e;return xs(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hc(){return tu()&&document.documentMode===10}function fa(r=Je()){return xs(r)||ca(r)||ha(r)||la(r)||/windows phone/i.test(r)||ua(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(r,e=[]){let i;switch(r){case"Browser":i=ao(Je());break;case"Worker":i=`${ao(Je())}-${r}`;break;default:i=r}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${$n}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=g=>new Promise((y,S)=>{try{const R=e(g);y(R)}catch(R){S(R)}});a.onAbort=i,this.queue.push(a);const h=this.queue.length-1;return()=>{this.queue[h]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const h of i)try{h()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(r,e={}){return In(r,"GET","/v2/passwordPolicy",qn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=6;class qc{constructor(e){var i,a,h,g;const y=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=y.minPasswordLength)!==null&&i!==void 0?i:$c,y.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=y.maxPasswordLength),y.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=y.containsLowercaseCharacter),y.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=y.containsUppercaseCharacter),y.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=y.containsNumericCharacter),y.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=y.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(h=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&h!==void 0?h:"",this.forceUpgradeOnSignin=(g=e.forceUpgradeOnSignin)!==null&&g!==void 0?g:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,a,h,g,y,S;const R={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,R),this.validatePasswordCharacterOptions(e,R),R.isValid&&(R.isValid=(i=R.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),R.isValid&&(R.isValid=(a=R.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),R.isValid&&(R.isValid=(h=R.containsLowercaseLetter)!==null&&h!==void 0?h:!0),R.isValid&&(R.isValid=(g=R.containsUppercaseLetter)!==null&&g!==void 0?g:!0),R.isValid&&(R.isValid=(y=R.containsNumericCharacter)!==null&&y!==void 0?y:!0),R.isValid&&(R.isValid=(S=R.containsNonAlphanumericCharacter)!==null&&S!==void 0?S:!0),R}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,h=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),h&&(i.meetsMaxPasswordLength=e.length<=h)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let h=0;h<e.length;h++)a=e.charAt(h),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,h,g){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=h)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,i,a,h){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=h,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uo(this),this.idTokenSubscription=new uo(this),this.beforeStateQueue=new Bc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=h.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Yt(i)),this._initializationPromise=this.queue(async()=>{var a,h;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((h=this.currentUser)===null||h===void 0?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await na(this,{idToken:e}),a=await Jt._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Kt(this.app)){const y=this.app.settings.authIdToken;return y?new Promise(S=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(y).then(S,S))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let h=a,g=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const y=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,S=h==null?void 0:h._redirectEventId,R=await this.tryRedirectSignIn(e);(!y||y===S)&&(R!=null&&R.user)&&(h=R.user,g=!0)}if(!h)return this.directlySetCurrentUser(null);if(!h._redirectEventId){if(g)try{await this.beforeStateQueue.runMiddleware(h)}catch(y){h=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(y))}return h?this.reloadAndSetCurrentUserOrClear(h):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===h._redirectEventId?this.directlySetCurrentUser(h):this.reloadAndSetCurrentUserOrClear(h)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ic()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(wn(this));const i=e?bn(e):null;return i&&re(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vc(this),i=new qc(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await jc(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Yt(e)||this._popupRedirectResolver;re(i,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[Yt(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,h){if(this._deleted)return()=>{};const g=typeof i=="function"?i:i.next.bind(i);let y=!1;const S=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(S,this,"internal-error"),S.then(()=>{y||g(this.currentUser)}),typeof i=="function"){const R=e.addObserver(i,a,h);return()=>{y=!0,R()}}else{const R=e.addObserver(i);return()=>{y=!0,R()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=da(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const h=await this._getAppCheckToken();return h&&(i["X-Firebase-AppCheck"]=h),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&wc(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Ti(r){return bn(r)}class uo{constructor(e){this.auth=e,this.observer=null,this.addObserver=uu(i=>this.observer=i)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zc(r){Hr=r}function pa(r){return Hr.loadJS(r)}function Gc(){return Hr.recaptchaEnterpriseScript}function Kc(){return Hr.gapiScript}function Xc(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Jc{constructor(){this.enterprise=new Yc}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class Yc{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const Qc="recaptcha-enterprise",ga="NO_RECAPTCHA";class Zc{constructor(e){this.type=Qc,this.auth=Ti(e)}async verify(e="verify",i=!1){async function a(g){if(!i){if(g.tenantId==null&&g._agentRecaptchaConfig!=null)return g._agentRecaptchaConfig.siteKey;if(g.tenantId!=null&&g._tenantRecaptchaConfigs[g.tenantId]!==void 0)return g._tenantRecaptchaConfigs[g.tenantId].siteKey}return new Promise(async(y,S)=>{Pc(g,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(R=>{if(R.recaptchaKey===void 0)S(new Error("recaptcha Enterprise site key undefined"));else{const F=new Rc(R);return g.tenantId==null?g._agentRecaptchaConfig=F:g._tenantRecaptchaConfigs[g.tenantId]=F,y(F.siteKey)}}).catch(R=>{S(R)})})}function h(g,y,S){const R=window.grecaptcha;io(R)?R.enterprise.ready(()=>{R.enterprise.execute(g,{action:e}).then(F=>{y(F)}).catch(()=>{y(ga)})}):S(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jc().execute("siteKey",{action:"verify"}):new Promise((g,y)=>{a(this.auth).then(S=>{if(!i&&io(window.grecaptcha))h(S,g,y);else{if(typeof window>"u"){y(new Error("RecaptchaVerifier is only supported in browser"));return}let R=Gc();R.length!==0&&(R+=S),pa(R).then(()=>{h(S,g,y)}).catch(F=>{y(F)})}}).catch(S=>{y(S)})})}}async function co(r,e,i,a=!1,h=!1){const g=new Zc(r);let y;if(h)y=ga;else try{y=await g.verify(i)}catch{y=await g.verify(i,!0)}const S=Object.assign({},e);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in S){const R=S.phoneEnrollmentInfo.phoneNumber,F=S.phoneEnrollmentInfo.recaptchaToken;Object.assign(S,{phoneEnrollmentInfo:{phoneNumber:R,recaptchaToken:F,captchaResponse:y,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in S){const R=S.phoneSignInInfo.recaptchaToken;Object.assign(S,{phoneSignInInfo:{recaptchaToken:R,captchaResponse:y,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return S}return a?Object.assign(S,{captchaResp:y}):Object.assign(S,{captchaResponse:y}),Object.assign(S,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(S,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),S}async function lo(r,e,i,a,h){var g;if(!((g=r._getRecaptchaConfig())===null||g===void 0)&&g.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const y=await co(r,e,i,i==="getOobCode");return a(r,y)}else return a(r,e).catch(async y=>{if(y.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const S=await co(r,e,i,i==="getOobCode");return a(r,S)}else return Promise.reject(y)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(r,e){const i=jr(r,"auth");if(i.isInitialized()){const h=i.getImmediate(),g=i.getOptions();if(kr(g,e??{}))return h;Tt(h,"already-initialized")}return i.initialize({options:e})}function tl(r,e){const i=(e==null?void 0:e.persistence)||[],a=(Array.isArray(i)?i:[i]).map(Yt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function nl(r,e,i){const a=Ti(r);re(a._canInitEmulator,a,"emulator-config-failed"),re(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const h=!1,g=ma(e),{host:y,port:S}=il(e),R=S===null?"":`:${S}`;a.config.emulator={url:`${g}//${y}${R}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:y,port:S,protocol:g.replace(":",""),options:Object.freeze({disableWarnings:h})}),rl()}function ma(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function il(r){const e=ma(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",h=/^(\[[^\]]+\])(:|$)/.exec(a);if(h){const g=h[1];return{host:g,port:ho(a.substr(g.length+1))}}else{const[g,y]=a.split(":");return{host:g,port:ho(y)}}}function ho(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rl(){function r(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,i){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function sl(r,e){return In(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(r,e){return Fr(r,"POST","/v1/accounts:signInWithPassword",qn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(r,e){return Fr(r,"POST","/v1/accounts:signInWithEmailLink",qn(r,e))}async function ul(r,e){return Fr(r,"POST","/v1/accounts:signInWithEmailLink",qn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Ls{constructor(e,i,a,h=null){super("password",a),this._email=e,this._password=i,this._tenantId=h}static _fromEmailAndPassword(e,i){return new Ki(e,i,"password")}static _fromEmailAndCode(e,i,a=null){return new Ki(e,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lo(e,i,"signInWithPassword",ol);case"emailLink":return al(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lo(e,a,"signUpPassword",sl);case"emailLink":return ul(e,{idToken:i,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(r,e){return Fr(r,"POST","/v1/accounts:signInWithIdp",qn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="http://localhost";class Vn extends Ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Tt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:h}=i,g=Ps(i,["providerId","signInMethod"]);if(!a||!h)return null;const y=new Vn(a,h);return y.idToken=g.idToken||void 0,y.accessToken=g.accessToken||void 0,y.secret=g.secret,y.nonce=g.nonce,y.pendingToken=g.pendingToken||null,y}_getIdTokenResponse(e){const i=this.buildRequest();return vi(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,vi(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,vi(e,i)}buildRequest(){const e={requestUri:cl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Ji(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hl(r){const e=Bi(Vi(r)).link,i=e?Bi(Vi(e)).deep_link_id:null,a=Bi(Vi(r)).deep_link_id;return(a?Bi(Vi(a)).link:null)||a||i||e||r}class Ms{constructor(e){var i,a,h,g,y,S;const R=Bi(Vi(e)),F=(i=R.apiKey)!==null&&i!==void 0?i:null,Y=(a=R.oobCode)!==null&&a!==void 0?a:null,Z=ll((h=R.mode)!==null&&h!==void 0?h:null);re(F&&Y&&Z,"argument-error"),this.apiKey=F,this.operation=Z,this.code=Y,this.continueUrl=(g=R.continueUrl)!==null&&g!==void 0?g:null,this.languageCode=(y=R.languageCode)!==null&&y!==void 0?y:null,this.tenantId=(S=R.tenantId)!==null&&S!==void 0?S:null}static parseLink(e){const i=hl(e);try{return new Ms(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.providerId=wi.PROVIDER_ID}static credential(e,i){return Ki._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const a=Ms.parseLink(i);return re(a,"argument-error"),Ki._fromEmailAndCode(e,a.code,a.tenantId)}}wi.PROVIDER_ID="password";wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Qi{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Vn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return mn.credential(i,a)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Qi{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Qi{constructor(){super("twitter.com")}static credential(e,i){return Vn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return yn.credential(i,a)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,h=!1){const g=await Jt._fromIdTokenResponse(e,a,h),y=fo(a);return new yi({user:g,providerId:y,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const h=fo(a);return new yi({user:e,providerId:h,_tokenResponse:a,operationType:i})}}function fo(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends xt{constructor(e,i,a,h){var g;super(i.code,i.message),this.operationType=a,this.user=h,Object.setPrototypeOf(this,Dr.prototype),this.customData={appName:e.name,tenantId:(g=e.tenantId)!==null&&g!==void 0?g:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,h){return new Dr(e,i,a,h)}}function ya(r,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(g=>{throw g.code==="auth/multi-factor-auth-required"?Dr._fromErrorAndOperation(r,g,e,a):g})}async function fl(r,e,i=!1){const a=await Gi(r,e._linkToIdToken(r.auth,await r.getIdToken()),i);return yi._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(r,e,i=!1){const{auth:a}=r;if(Kt(a.app))return Promise.reject(wn(a));const h="reauthenticate";try{const g=await Gi(r,ya(a,h,e,r),i);re(g.idToken,a,"internal-error");const y=Ns(g.idToken);re(y,a,"internal-error");const{sub:S}=y;return re(r.uid===S,a,"user-mismatch"),yi._forOperation(r,h,g)}catch(g){throw(g==null?void 0:g.code)==="auth/user-not-found"&&Tt(a,"user-mismatch"),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(r,e,i=!1){if(Kt(r.app))return Promise.reject(wn(r));const a="signIn",h=await ya(r,a,e),g=await yi._fromIdTokenResponse(r,a,h);return i||await r._updateCurrentUser(g.user),g}async function pl(r,e){return _a(Ti(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(r){const e=Ti(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ml(r,e,i){return Kt(r.app)?Promise.reject(wn(r)):pl(bn(r),wi.credential(e,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&gl(r),a})}function vl(r,e,i,a){return bn(r).onIdTokenChanged(e,i,a)}function yl(r,e,i){return bn(r).beforeAuthStateChanged(e,i)}const Nr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=1e3,Tl=10;class wa extends Ta{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),h=this.localCache[i];a!==h&&e(i,h,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((y,S,R)=>{this.notifyListeners(y,R)});return}const a=e.key;i?this.detachListener():this.stopPolling();const h=()=>{const y=this.storage.getItem(a);!i&&this.localCache[a]===y||this.notifyListeners(a,y)},g=this.storage.getItem(a);Hc()&&g!==e.newValue&&e.newValue!==e.oldValue?setTimeout(h,Tl):h()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const h of Array.from(a))h(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},_l)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}wa.type="LOCAL";const wl=wa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Ta{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Ea.type="SESSION";const ba=Ea;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(h=>h.isListeningto(e));if(i)return i;const a=new Br(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:h,data:g}=i.data,y=this.handlersMap[h];if(!(y!=null&&y.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:h});const S=Array.from(y).map(async F=>F(i.origin,g)),R=await El(S);i.ports[0].postMessage({status:"done",eventId:a,eventType:h,response:R})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Br.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(r="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const h=typeof MessageChannel<"u"?new MessageChannel:null;if(!h)throw new Error("connection_unavailable");let g,y;return new Promise((S,R)=>{const F=Us("",20);h.port1.start();const Y=setTimeout(()=>{R(new Error("unsupported_event"))},a);y={messageChannel:h,onMessage(Z){const se=Z;if(se.data.eventId===F)switch(se.data.status){case"ack":clearTimeout(Y),g=setTimeout(()=>{R(new Error("timeout"))},3e3);break;case"done":clearTimeout(g),S(se.data.response);break;default:clearTimeout(Y),clearTimeout(g),R(new Error("invalid_response"));break}}},this.handlers.add(y),h.port1.addEventListener("message",y.onMessage),this.target.postMessage({eventType:e,eventId:F,data:i},[h.port2])}).finally(()=>{y&&this.removeMessageHandler(y)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function Il(r){Dt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function Al(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sl(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Cl(){return Ia()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="firebaseLocalStorageDb",kl=1,xr="firebaseLocalStorage",Sa="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Vr(r,e){return r.transaction([xr],e?"readwrite":"readonly").objectStore(xr)}function Rl(){const r=indexedDB.deleteDatabase(Aa);return new Zi(r).toPromise()}function Is(){const r=indexedDB.open(Aa,kl);return new Promise((e,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(xr,{keyPath:Sa})}catch(h){i(h)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(xr)?e(a):(a.close(),await Rl(),e(await Is()))})})}async function po(r,e,i){const a=Vr(r,!0).put({[Sa]:e,value:i});return new Zi(a).toPromise()}async function Pl(r,e){const i=Vr(r,!1).get(e),a=await new Zi(i).toPromise();return a===void 0?null:a.value}function go(r,e){const i=Vr(r,!0).delete(e);return new Zi(i).toPromise()}const Ol=800,Dl=3;class Ca{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Is(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>Dl)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ia()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Br._getInstance(Cl()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Al(),!this.activeServiceWorker)return;this.sender=new bl(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await po(e,Nr,"1"),await go(e,Nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>po(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>Pl(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>go(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(h=>{const g=Vr(h,!1).getAll();return new Zi(g).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:h,value:g}of e)a.add(h),JSON.stringify(this.localCache[h])!==JSON.stringify(g)&&(this.notifyListeners(h,g),i.push(h));for(const h of Object.keys(this.localCache))this.localCache[h]&&!a.has(h)&&(this.notifyListeners(h,null),i.push(h));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const h of Array.from(a))h(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ol)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ca.type="LOCAL";const Nl=Ca;new Yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(r,e){return e?Yt(e):(re(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Ls{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vi(e,this._buildIdpRequest())}_linkToIdToken(e,i){return vi(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Ll(r){return _a(r.auth,new js(r),r.bypassAuthState)}function Ml(r){const{auth:e,user:i}=r;return re(i,e,"internal-error"),dl(i,new js(r),r.bypassAuthState)}async function Ul(r){const{auth:e,user:i}=r;return re(i,e,"internal-error"),fl(i,new js(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,i,a,h,g=!1){this.auth=e,this.resolver=a,this.user=h,this.bypassAuthState=g,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:h,tenantId:g,error:y,type:S}=e;if(y){this.reject(y);return}const R={auth:this.auth,requestUri:i,sessionId:a,tenantId:g||void 0,postBody:h||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(S)(R))}catch(F){this.reject(F)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ll;case"linkViaPopup":case"linkViaRedirect":return Ul;case"reauthViaPopup":case"reauthViaRedirect":return Ml;default:Tt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Yi(2e3,1e4);class pi extends ka{constructor(e,i,a,h,g){super(e,i,h,g),this.provider=a,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Us();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jl.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="pendingRedirect",Ar=new Map;class Hl extends ka{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const a=await Bl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}Ar.set(this.auth._key(),e)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bl(r,e){const i=ql(e),a=$l(r);if(!await a._isAvailable())return!1;const h=await a._get(i)==="true";return await a._remove(i),h}function Vl(r,e){Ar.set(r._key(),e)}function $l(r){return Yt(r._redirectPersistence)}function ql(r){return Ir(Fl,r.config.apiKey,r.name)}async function Wl(r,e,i=!1){if(Kt(r.app))return Promise.reject(wn(r));const a=Ti(r),h=xl(a,e),y=await new Hl(a,h,i).execute();return y&&!i&&(delete y.user._redirectEventId,await a._persistUserIfCurrent(y.user),await a._setRedirectUser(null,e)),y}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=10*60*1e3;class Gl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kl(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var a;if(e.error&&!Ra(e)){const h=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(Ot(this.auth,h))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zl&&this.cachedEventUids.clear(),this.cachedEventUids.has(mo(e))}saveEventToCache(e){this.cachedEventUids.add(mo(e)),this.lastProcessedEventTime=Date.now()}}function mo(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ra({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kl(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ra(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(r,e={}){return In(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yl=/^https?/;async function Ql(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Xl(r);for(const i of e)try{if(Zl(i))return}catch{}Tt(r,"unauthorized-domain")}function Zl(r){const e=Es(),{protocol:i,hostname:a}=new URL(e);if(r.startsWith("chrome-extension://")){const y=new URL(r);return y.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&y.hostname===a}if(!Yl.test(i))return!1;if(Jl.test(r))return a===r;const h=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+h+"|"+h+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Yi(3e4,6e4);function vo(){const r=Dt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function th(r){return new Promise((e,i)=>{var a,h,g;function y(){vo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vo(),i(Ot(r,"network-request-failed"))},timeout:eh.get()})}if(!((h=(a=Dt().gapi)===null||a===void 0?void 0:a.iframes)===null||h===void 0)&&h.Iframe)e(gapi.iframes.getContext());else if(!((g=Dt().gapi)===null||g===void 0)&&g.load)y();else{const S=Xc("iframefcb");return Dt()[S]=()=>{gapi.load?y():i(Ot(r,"network-request-failed"))},pa(`${Kc()}?onload=${S}`).catch(R=>i(R))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function nh(r){return Sr=Sr||th(r),Sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Yi(5e3,15e3),rh="__/auth/iframe",sh="emulator/auth/iframe",oh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ah=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uh(r){const e=r.config;re(e.authDomain,r,"auth-domain-config-required");const i=e.emulator?Ds(e,sh):`https://${r.config.authDomain}/${rh}`,a={apiKey:e.apiKey,appName:r.name,v:$n},h=ah.get(r.config.apiHost);h&&(a.eid=h);const g=r._getFrameworks();return g.length&&(a.fw=g.join(",")),`${i}?${Ji(a).slice(1)}`}async function ch(r){const e=await nh(r),i=Dt().gapi;return re(i,r,"internal-error"),e.open({where:document.body,url:uh(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oh,dontclear:!0},a=>new Promise(async(h,g)=>{await a.restyle({setHideOnLeave:!1});const y=Ot(r,"network-request-failed"),S=Dt().setTimeout(()=>{g(y)},ih.get());function R(){Dt().clearTimeout(S),h(a)}a.ping(R).then(R,()=>{g(y)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hh=500,fh=600,dh="_blank",ph="http://localhost";class yo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gh(r,e,i,a=hh,h=fh){const g=Math.max((window.screen.availHeight-h)/2,0).toString(),y=Math.max((window.screen.availWidth-a)/2,0).toString();let S="";const R=Object.assign(Object.assign({},lh),{width:a.toString(),height:h.toString(),top:g,left:y}),F=Je().toLowerCase();i&&(S=aa(F)?dh:i),sa(F)&&(e=e||ph,R.scrollbars="yes");const Y=Object.entries(R).reduce((se,[be,$])=>`${se}${be}=${$},`,"");if(Fc(F)&&S!=="_self")return mh(e||"",S),new yo(null);const Z=window.open(e||"",S,Y);re(Z,r,"popup-blocked");try{Z.focus()}catch{}return new yo(Z)}function mh(r,e){const i=document.createElement("a");i.href=r,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="__/auth/handler",yh="emulator/auth/handler",_h=encodeURIComponent("fac");async function _o(r,e,i,a,h,g){re(r.config.authDomain,r,"auth-domain-config-required"),re(r.config.apiKey,r,"invalid-api-key");const y={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:$n,eventId:h};if(e instanceof va){e.setDefaultLanguage(r.languageCode),y.providerId=e.providerId||"",au(e.getCustomParameters())||(y.customParameters=JSON.stringify(e.getCustomParameters()));for(const[Y,Z]of Object.entries({}))y[Y]=Z}if(e instanceof Qi){const Y=e.getScopes().filter(Z=>Z!=="");Y.length>0&&(y.scopes=Y.join(","))}r.tenantId&&(y.tid=r.tenantId);const S=y;for(const Y of Object.keys(S))S[Y]===void 0&&delete S[Y];const R=await r._getAppCheckToken(),F=R?`#${_h}=${encodeURIComponent(R)}`:"";return`${Th(r)}?${Ji(S).slice(1)}${F}`}function Th({config:r}){return r.emulator?Ds(r,yh):`https://${r.authDomain}/${vh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="webStorageSupport";class wh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ba,this._completeRedirectFn=Wl,this._overrideRedirectResult=Vl}async _openPopup(e,i,a,h){var g;Zt((g=this.eventManagers[e._key()])===null||g===void 0?void 0:g.manager,"_initialize() not called before _openPopup()");const y=await _o(e,i,a,Es(),h);return gh(e,y,Us())}async _openRedirect(e,i,a,h){await this._originValidation(e);const g=await _o(e,i,a,Es(),h);return Il(g),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:h,promise:g}=this.eventManagers[i];return h?Promise.resolve(h):(Zt(g,"If manager is not set, promise should be"),g)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await ch(e),a=new Gl(e);return i.register("authEvent",h=>(re(h==null?void 0:h.authEvent,e,"invalid-auth-event"),{status:a.onEvent(h.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(ds,{type:ds},h=>{var g;const y=(g=h==null?void 0:h[0])===null||g===void 0?void 0:g[ds];y!==void 0&&i(!!y),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Ql(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return fa()||oa()||xs()}}const Eh=wh;var To="@firebase/auth",wo="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ah(r){Bn(new En("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),h=e.getProvider("heartbeat"),g=e.getProvider("app-check-internal"),{apiKey:y,authDomain:S}=a.options;re(y&&!y.includes(":"),"invalid-api-key",{appName:a.name});const R={apiKey:y,authDomain:S,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:da(r)},F=new Wc(a,h,g,R);return tl(F,i),F},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),Bn(new En("auth-internal",e=>{const i=Ti(e.getProvider("auth").getImmediate());return(a=>new bh(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(To,wo,Ih(r)),Pt(To,wo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=5*60,Ch=$o("authIdTokenMaxAge")||Sh;let Eo=null;const kh=r=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>Ch)return;const h=i==null?void 0:i.token;Eo!==h&&(Eo=h,await fetch(r,{method:h?"POST":"DELETE",headers:h?{Authorization:`Bearer ${h}`}:{}}))};function Pa(r=Rs()){const e=jr(r,"auth");if(e.isInitialized())return e.getImmediate();const i=el(r,{popupRedirectResolver:Eh,persistence:[Nl,wl,ba]}),a=$o("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const g=new URL(a,location.origin);if(location.origin===g.origin){const y=kh(g.toString());yl(i,y,()=>y(i.currentUser)),vl(i,S=>y(S))}}const h=Ho("auth");return h&&nl(i,`http://${h}`),i}function Rh(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}zc({loadJS(r){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=e,a.onerror=h=>{const g=Ot("internal-error");g.customData=h,i(g)},a.type="text/javascript",a.charset="UTF-8",Rh().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ah("Browser");var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(o,I){function _(){}_.prototype=I.prototype,o.D=I.prototype,o.prototype=new _,o.prototype.constructor=o,o.C=function(E,k,D){for(var w=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)w[Me-2]=arguments[Me];return I.prototype[k].apply(E,w)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(o,I,_){_||(_=0);var E=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)E[k]=I.charCodeAt(_++)|I.charCodeAt(_++)<<8|I.charCodeAt(_++)<<16|I.charCodeAt(_++)<<24;else for(k=0;16>k;++k)E[k]=I[_++]|I[_++]<<8|I[_++]<<16|I[_++]<<24;I=o.g[0],_=o.g[1],k=o.g[2];var D=o.g[3],w=I+(D^_&(k^D))+E[0]+3614090360&4294967295;I=_+(w<<7&4294967295|w>>>25),w=D+(k^I&(_^k))+E[1]+3905402710&4294967295,D=I+(w<<12&4294967295|w>>>20),w=k+(_^D&(I^_))+E[2]+606105819&4294967295,k=D+(w<<17&4294967295|w>>>15),w=_+(I^k&(D^I))+E[3]+3250441966&4294967295,_=k+(w<<22&4294967295|w>>>10),w=I+(D^_&(k^D))+E[4]+4118548399&4294967295,I=_+(w<<7&4294967295|w>>>25),w=D+(k^I&(_^k))+E[5]+1200080426&4294967295,D=I+(w<<12&4294967295|w>>>20),w=k+(_^D&(I^_))+E[6]+2821735955&4294967295,k=D+(w<<17&4294967295|w>>>15),w=_+(I^k&(D^I))+E[7]+4249261313&4294967295,_=k+(w<<22&4294967295|w>>>10),w=I+(D^_&(k^D))+E[8]+1770035416&4294967295,I=_+(w<<7&4294967295|w>>>25),w=D+(k^I&(_^k))+E[9]+2336552879&4294967295,D=I+(w<<12&4294967295|w>>>20),w=k+(_^D&(I^_))+E[10]+4294925233&4294967295,k=D+(w<<17&4294967295|w>>>15),w=_+(I^k&(D^I))+E[11]+2304563134&4294967295,_=k+(w<<22&4294967295|w>>>10),w=I+(D^_&(k^D))+E[12]+1804603682&4294967295,I=_+(w<<7&4294967295|w>>>25),w=D+(k^I&(_^k))+E[13]+4254626195&4294967295,D=I+(w<<12&4294967295|w>>>20),w=k+(_^D&(I^_))+E[14]+2792965006&4294967295,k=D+(w<<17&4294967295|w>>>15),w=_+(I^k&(D^I))+E[15]+1236535329&4294967295,_=k+(w<<22&4294967295|w>>>10),w=I+(k^D&(_^k))+E[1]+4129170786&4294967295,I=_+(w<<5&4294967295|w>>>27),w=D+(_^k&(I^_))+E[6]+3225465664&4294967295,D=I+(w<<9&4294967295|w>>>23),w=k+(I^_&(D^I))+E[11]+643717713&4294967295,k=D+(w<<14&4294967295|w>>>18),w=_+(D^I&(k^D))+E[0]+3921069994&4294967295,_=k+(w<<20&4294967295|w>>>12),w=I+(k^D&(_^k))+E[5]+3593408605&4294967295,I=_+(w<<5&4294967295|w>>>27),w=D+(_^k&(I^_))+E[10]+38016083&4294967295,D=I+(w<<9&4294967295|w>>>23),w=k+(I^_&(D^I))+E[15]+3634488961&4294967295,k=D+(w<<14&4294967295|w>>>18),w=_+(D^I&(k^D))+E[4]+3889429448&4294967295,_=k+(w<<20&4294967295|w>>>12),w=I+(k^D&(_^k))+E[9]+568446438&4294967295,I=_+(w<<5&4294967295|w>>>27),w=D+(_^k&(I^_))+E[14]+3275163606&4294967295,D=I+(w<<9&4294967295|w>>>23),w=k+(I^_&(D^I))+E[3]+4107603335&4294967295,k=D+(w<<14&4294967295|w>>>18),w=_+(D^I&(k^D))+E[8]+1163531501&4294967295,_=k+(w<<20&4294967295|w>>>12),w=I+(k^D&(_^k))+E[13]+2850285829&4294967295,I=_+(w<<5&4294967295|w>>>27),w=D+(_^k&(I^_))+E[2]+4243563512&4294967295,D=I+(w<<9&4294967295|w>>>23),w=k+(I^_&(D^I))+E[7]+1735328473&4294967295,k=D+(w<<14&4294967295|w>>>18),w=_+(D^I&(k^D))+E[12]+2368359562&4294967295,_=k+(w<<20&4294967295|w>>>12),w=I+(_^k^D)+E[5]+4294588738&4294967295,I=_+(w<<4&4294967295|w>>>28),w=D+(I^_^k)+E[8]+2272392833&4294967295,D=I+(w<<11&4294967295|w>>>21),w=k+(D^I^_)+E[11]+1839030562&4294967295,k=D+(w<<16&4294967295|w>>>16),w=_+(k^D^I)+E[14]+4259657740&4294967295,_=k+(w<<23&4294967295|w>>>9),w=I+(_^k^D)+E[1]+2763975236&4294967295,I=_+(w<<4&4294967295|w>>>28),w=D+(I^_^k)+E[4]+1272893353&4294967295,D=I+(w<<11&4294967295|w>>>21),w=k+(D^I^_)+E[7]+4139469664&4294967295,k=D+(w<<16&4294967295|w>>>16),w=_+(k^D^I)+E[10]+3200236656&4294967295,_=k+(w<<23&4294967295|w>>>9),w=I+(_^k^D)+E[13]+681279174&4294967295,I=_+(w<<4&4294967295|w>>>28),w=D+(I^_^k)+E[0]+3936430074&4294967295,D=I+(w<<11&4294967295|w>>>21),w=k+(D^I^_)+E[3]+3572445317&4294967295,k=D+(w<<16&4294967295|w>>>16),w=_+(k^D^I)+E[6]+76029189&4294967295,_=k+(w<<23&4294967295|w>>>9),w=I+(_^k^D)+E[9]+3654602809&4294967295,I=_+(w<<4&4294967295|w>>>28),w=D+(I^_^k)+E[12]+3873151461&4294967295,D=I+(w<<11&4294967295|w>>>21),w=k+(D^I^_)+E[15]+530742520&4294967295,k=D+(w<<16&4294967295|w>>>16),w=_+(k^D^I)+E[2]+3299628645&4294967295,_=k+(w<<23&4294967295|w>>>9),w=I+(k^(_|~D))+E[0]+4096336452&4294967295,I=_+(w<<6&4294967295|w>>>26),w=D+(_^(I|~k))+E[7]+1126891415&4294967295,D=I+(w<<10&4294967295|w>>>22),w=k+(I^(D|~_))+E[14]+2878612391&4294967295,k=D+(w<<15&4294967295|w>>>17),w=_+(D^(k|~I))+E[5]+4237533241&4294967295,_=k+(w<<21&4294967295|w>>>11),w=I+(k^(_|~D))+E[12]+1700485571&4294967295,I=_+(w<<6&4294967295|w>>>26),w=D+(_^(I|~k))+E[3]+2399980690&4294967295,D=I+(w<<10&4294967295|w>>>22),w=k+(I^(D|~_))+E[10]+4293915773&4294967295,k=D+(w<<15&4294967295|w>>>17),w=_+(D^(k|~I))+E[1]+2240044497&4294967295,_=k+(w<<21&4294967295|w>>>11),w=I+(k^(_|~D))+E[8]+1873313359&4294967295,I=_+(w<<6&4294967295|w>>>26),w=D+(_^(I|~k))+E[15]+4264355552&4294967295,D=I+(w<<10&4294967295|w>>>22),w=k+(I^(D|~_))+E[6]+2734768916&4294967295,k=D+(w<<15&4294967295|w>>>17),w=_+(D^(k|~I))+E[13]+1309151649&4294967295,_=k+(w<<21&4294967295|w>>>11),w=I+(k^(_|~D))+E[4]+4149444226&4294967295,I=_+(w<<6&4294967295|w>>>26),w=D+(_^(I|~k))+E[11]+3174756917&4294967295,D=I+(w<<10&4294967295|w>>>22),w=k+(I^(D|~_))+E[2]+718787259&4294967295,k=D+(w<<15&4294967295|w>>>17),w=_+(D^(k|~I))+E[9]+3951481745&4294967295,o.g[0]=o.g[0]+I&4294967295,o.g[1]=o.g[1]+(k+(w<<21&4294967295|w>>>11))&4294967295,o.g[2]=o.g[2]+k&4294967295,o.g[3]=o.g[3]+D&4294967295}a.prototype.u=function(o,I){I===void 0&&(I=o.length);for(var _=I-this.blockSize,E=this.B,k=this.h,D=0;D<I;){if(k==0)for(;D<=_;)h(this,o,D),D+=this.blockSize;if(typeof o=="string"){for(;D<I;)if(E[k++]=o.charCodeAt(D++),k==this.blockSize){h(this,E),k=0;break}}else for(;D<I;)if(E[k++]=o[D++],k==this.blockSize){h(this,E),k=0;break}}this.h=k,this.o+=I},a.prototype.v=function(){var o=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);o[0]=128;for(var I=1;I<o.length-8;++I)o[I]=0;var _=8*this.o;for(I=o.length-8;I<o.length;++I)o[I]=_&255,_/=256;for(this.u(o),o=Array(16),I=_=0;4>I;++I)for(var E=0;32>E;E+=8)o[_++]=this.g[I]>>>E&255;return o};function g(o,I){var _=S;return Object.prototype.hasOwnProperty.call(_,o)?_[o]:_[o]=I(o)}function y(o,I){this.h=I;for(var _=[],E=!0,k=o.length-1;0<=k;k--){var D=o[k]|0;E&&D==I||(_[k]=D,E=!1)}this.g=_}var S={};function R(o){return-128<=o&&128>o?g(o,function(I){return new y([I|0],0>I?-1:0)}):new y([o|0],0>o?-1:0)}function F(o){if(isNaN(o)||!isFinite(o))return Z;if(0>o)return oe(F(-o));for(var I=[],_=1,E=0;o>=_;E++)I[E]=o/_|0,_*=4294967296;return new y(I,0)}function Y(o,I){if(o.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(o.charAt(0)=="-")return oe(Y(o.substring(1),I));if(0<=o.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=F(Math.pow(I,8)),E=Z,k=0;k<o.length;k+=8){var D=Math.min(8,o.length-k),w=parseInt(o.substring(k,k+D),I);8>D?(D=F(Math.pow(I,D)),E=E.j(D).add(F(w))):(E=E.j(_),E=E.add(F(w)))}return E}var Z=R(0),se=R(1),be=R(16777216);r=y.prototype,r.m=function(){if(G(this))return-oe(this).m();for(var o=0,I=1,_=0;_<this.g.length;_++){var E=this.i(_);o+=(0<=E?E:4294967296+E)*I,I*=4294967296}return o},r.toString=function(o){if(o=o||10,2>o||36<o)throw Error("radix out of range: "+o);if($(this))return"0";if(G(this))return"-"+oe(this).toString(o);for(var I=F(Math.pow(o,6)),_=this,E="";;){var k=ve(_,I).g;_=K(_,k.j(I));var D=((0<_.g.length?_.g[0]:_.h)>>>0).toString(o);if(_=k,$(_))return D+E;for(;6>D.length;)D="0"+D;E=D+E}},r.i=function(o){return 0>o?0:o<this.g.length?this.g[o]:this.h};function $(o){if(o.h!=0)return!1;for(var I=0;I<o.g.length;I++)if(o.g[I]!=0)return!1;return!0}function G(o){return o.h==-1}r.l=function(o){return o=K(this,o),G(o)?-1:$(o)?0:1};function oe(o){for(var I=o.g.length,_=[],E=0;E<I;E++)_[E]=~o.g[E];return new y(_,~o.h).add(se)}r.abs=function(){return G(this)?oe(this):this},r.add=function(o){for(var I=Math.max(this.g.length,o.g.length),_=[],E=0,k=0;k<=I;k++){var D=E+(this.i(k)&65535)+(o.i(k)&65535),w=(D>>>16)+(this.i(k)>>>16)+(o.i(k)>>>16);E=w>>>16,D&=65535,w&=65535,_[k]=w<<16|D}return new y(_,_[_.length-1]&-2147483648?-1:0)};function K(o,I){return o.add(oe(I))}r.j=function(o){if($(this)||$(o))return Z;if(G(this))return G(o)?oe(this).j(oe(o)):oe(oe(this).j(o));if(G(o))return oe(this.j(oe(o)));if(0>this.l(be)&&0>o.l(be))return F(this.m()*o.m());for(var I=this.g.length+o.g.length,_=[],E=0;E<2*I;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<o.g.length;k++){var D=this.i(E)>>>16,w=this.i(E)&65535,Me=o.i(k)>>>16,wt=o.i(k)&65535;_[2*E+2*k]+=w*wt,De(_,2*E+2*k),_[2*E+2*k+1]+=D*wt,De(_,2*E+2*k+1),_[2*E+2*k+1]+=w*Me,De(_,2*E+2*k+1),_[2*E+2*k+2]+=D*Me,De(_,2*E+2*k+2)}for(E=0;E<I;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=I;E<2*I;E++)_[E]=0;return new y(_,0)};function De(o,I){for(;(o[I]&65535)!=o[I];)o[I+1]+=o[I]>>>16,o[I]&=65535,I++}function we(o,I){this.g=o,this.h=I}function ve(o,I){if($(I))throw Error("division by zero");if($(o))return new we(Z,Z);if(G(o))return I=ve(oe(o),I),new we(oe(I.g),oe(I.h));if(G(I))return I=ve(o,oe(I)),new we(oe(I.g),I.h);if(30<o.g.length){if(G(o)||G(I))throw Error("slowDivide_ only works with positive integers.");for(var _=se,E=I;0>=E.l(o);)_=Le(_),E=Le(E);var k=Se(_,1),D=Se(E,1);for(E=Se(E,2),_=Se(_,2);!$(E);){var w=D.add(E);0>=w.l(o)&&(k=k.add(_),D=w),E=Se(E,1),_=Se(_,1)}return I=K(o,k.j(I)),new we(k,I)}for(k=Z;0<=o.l(I);){for(_=Math.max(1,Math.floor(o.m()/I.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),D=F(_),w=D.j(I);G(w)||0<w.l(o);)_-=E,D=F(_),w=D.j(I);$(D)&&(D=se),k=k.add(D),o=K(o,w)}return new we(k,o)}r.A=function(o){return ve(this,o).h},r.and=function(o){for(var I=Math.max(this.g.length,o.g.length),_=[],E=0;E<I;E++)_[E]=this.i(E)&o.i(E);return new y(_,this.h&o.h)},r.or=function(o){for(var I=Math.max(this.g.length,o.g.length),_=[],E=0;E<I;E++)_[E]=this.i(E)|o.i(E);return new y(_,this.h|o.h)},r.xor=function(o){for(var I=Math.max(this.g.length,o.g.length),_=[],E=0;E<I;E++)_[E]=this.i(E)^o.i(E);return new y(_,this.h^o.h)};function Le(o){for(var I=o.g.length+1,_=[],E=0;E<I;E++)_[E]=o.i(E)<<1|o.i(E-1)>>>31;return new y(_,o.h)}function Se(o,I){var _=I>>5;I%=32;for(var E=o.g.length-_,k=[],D=0;D<E;D++)k[D]=0<I?o.i(D+_)>>>I|o.i(D+_+1)<<32-I:o.i(D+_);return new y(k,o.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,y.prototype.add=y.prototype.add,y.prototype.multiply=y.prototype.j,y.prototype.modulo=y.prototype.A,y.prototype.compare=y.prototype.l,y.prototype.toNumber=y.prototype.m,y.prototype.toString=y.prototype.toString,y.prototype.getBits=y.prototype.i,y.fromNumber=F,y.fromString=Y,Oa=y}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});var wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,c,f){return n==Array.prototype||n==Object.prototype||(n[c]=f.value),n};function i(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof wr=="object"&&wr];for(var c=0;c<n.length;++c){var f=n[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var a=i(this);function h(n,c){if(c)e:{var f=a;n=n.split(".");for(var v=0;v<n.length-1;v++){var O=n[v];if(!(O in f))break e;f=f[O]}n=n[n.length-1],v=f[n],c=c(v),c!=v&&c!=null&&e(f,n,{configurable:!0,writable:!0,value:c})}}function g(n,c){n instanceof String&&(n+="");var f=0,v=!1,O={next:function(){if(!v&&f<n.length){var L=f++;return{value:c(L,n[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}h("Array.prototype.values",function(n){return n||function(){return g(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var y=y||{},S=this||self;function R(n){var c=typeof n;return c=c!="object"?c:n?Array.isArray(n)?"array":c:"null",c=="array"||c=="object"&&typeof n.length=="number"}function F(n){var c=typeof n;return c=="object"&&n!=null||c=="function"}function Y(n,c,f){return n.call.apply(n.bind,arguments)}function Z(n,c,f){if(!n)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,v),n.apply(c,O)}}return function(){return n.apply(c,arguments)}}function se(n,c,f){return se=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y:Z,se.apply(null,arguments)}function be(n,c){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),n.apply(this,v)}}function $(n,c){function f(){}f.prototype=c.prototype,n.aa=c.prototype,n.prototype=new f,n.prototype.constructor=n,n.Qb=function(v,O,L){for(var V=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)V[ce-2]=arguments[ce];return c.prototype[O].apply(v,V)}}function G(n){const c=n.length;if(0<c){const f=Array(c);for(let v=0;v<c;v++)f[v]=n[v];return f}return[]}function oe(n,c){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(R(v)){const O=n.length||0,L=v.length||0;n.length=O+L;for(let V=0;V<L;V++)n[O+V]=v[V]}else n.push(v)}}class K{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function De(n){return/^[\s\xa0]*$/.test(n)}function we(){var n=S.navigator;return n&&(n=n.userAgent)?n:""}function ve(n){return ve[" "](n),n}ve[" "]=function(){};var Le=we().indexOf("Gecko")!=-1&&!(we().toLowerCase().indexOf("webkit")!=-1&&we().indexOf("Edge")==-1)&&!(we().indexOf("Trident")!=-1||we().indexOf("MSIE")!=-1)&&we().indexOf("Edge")==-1;function Se(n,c,f){for(const v in n)c.call(f,n[v],v,n)}function o(n,c){for(const f in n)c.call(void 0,n[f],f,n)}function I(n){const c={};for(const f in n)c[f]=n[f];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(n,c){let f,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(f in v)n[f]=v[f];for(let L=0;L<_.length;L++)f=_[L],Object.prototype.hasOwnProperty.call(v,f)&&(n[f]=v[f])}}function k(n){var c=1;n=n.split(":");const f=[];for(;0<c&&n.length;)f.push(n.shift()),c--;return n.length&&f.push(n.join(":")),f}function D(n){S.setTimeout(()=>{throw n},0)}function w(){var n=He;let c=null;return n.g&&(c=n.g,n.g=n.g.next,n.g||(n.h=null),c.next=null),c}class Me{constructor(){this.h=this.g=null}add(c,f){const v=wt.get();v.set(c,f),this.h?this.h.next=v:this.g=v,this.h=v}}var wt=new K(()=>new An,n=>n.reset());class An{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,Pe=!1,He=new Me,en=()=>{const n=S.Promise.resolve(void 0);Ne=()=>{n.then(Wn)}};var Wn=()=>{for(var n;n=w();){try{n.h.call(n.g)}catch(f){D(f)}var c=wt;c.j(n),100>c.h&&(c.h++,n.next=c.g,c.g=n)}Pe=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(n,c){this.type=n,this.g=this.target=c,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var zn=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var n=!1,c=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const f=()=>{};S.addEventListener("test",f,c),S.removeEventListener("test",f,c)}catch{}return n}();function Mt(n,c){if(ke.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var f=this.type=n.type,v=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=c,c=n.relatedTarget){if(Le){e:{try{ve(c.nodeName);var O=!0;break e}catch{}O=!1}O||(c=null)}}else f=="mouseover"?c=n.fromElement:f=="mouseout"&&(c=n.toElement);this.relatedTarget=c,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ei[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Mt.aa.h.call(this)}}$(Mt,ke);var Ei={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),bi=0;function Gn(n,c,f,v,O){this.listener=n,this.proxy=null,this.src=c,this.type=f,this.capture=!!v,this.ha=O,this.key=++bi,this.da=this.fa=!1}function Be(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function nn(n){this.src=n,this.g={},this.h=0}nn.prototype.add=function(n,c,f,v,O){var L=n.toString();n=this.g[L],n||(n=this.g[L]=[],this.h++);var V=Ye(n,c,v,O);return-1<V?(c=n[V],f||(c.fa=!1)):(c=new Gn(c,this.src,L,!!v,O),c.fa=f,n.push(c)),c};function at(n,c){var f=c.type;if(f in n.g){var v=n.g[f],O=Array.prototype.indexOf.call(v,c,void 0),L;(L=0<=O)&&Array.prototype.splice.call(v,O,1),L&&(Be(c),n.g[f].length==0&&(delete n.g[f],n.h--))}}function Ye(n,c,f,v){for(var O=0;O<n.length;++O){var L=n[O];if(!L.da&&L.listener==c&&L.capture==!!f&&L.ha==v)return O}return-1}var rn="closure_lm_"+(1e6*Math.random()|0),Sn={};function sn(n,c,f,v,O){if(Array.isArray(c)){for(var L=0;L<c.length;L++)sn(n,c[L],f,v,O);return null}return f=X(f),n&&n[tn]?n.K(c,f,F(v)?!!v.capture:!!v,O):le(n,c,f,!1,v,O)}function le(n,c,f,v,O,L){if(!c)throw Error("Invalid event type");var V=F(O)?!!O.capture:!!O,ce=Ut(n);if(ce||(n[rn]=ce=new nn(n)),f=ce.add(c,f,v,V,L),f.proxy)return f;if(v=qe(),f.proxy=v,v.src=n,v.listener=f,n.addEventListener)zn||(O=V),O===void 0&&(O=!1),n.addEventListener(c.toString(),v,O);else if(n.attachEvent)n.attachEvent(tr(c.toString()),v);else if(n.addListener&&n.removeListener)n.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function qe(){function n(f){return c.call(n.src,n.listener,f)}const c=ut;return n}function Kn(n,c,f,v,O){if(Array.isArray(c))for(var L=0;L<c.length;L++)Kn(n,c[L],f,v,O);else v=F(v)?!!v.capture:!!v,f=X(f),n&&n[tn]?(n=n.i,c=String(c).toString(),c in n.g&&(L=n.g[c],f=Ye(L,f,v,O),-1<f&&(Be(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete n.g[c],n.h--)))):n&&(n=Ut(n))&&(c=n.g[c.toString()],n=-1,c&&(n=Ye(c,f,v,O)),(f=-1<n?c[n]:null)&&Cn(f))}function Cn(n){if(typeof n!="number"&&n&&!n.da){var c=n.src;if(c&&c[tn])at(c.i,n);else{var f=n.type,v=n.proxy;c.removeEventListener?c.removeEventListener(f,v,n.capture):c.detachEvent?c.detachEvent(tr(f),v):c.addListener&&c.removeListener&&c.removeListener(v),(f=Ut(c))?(at(f,n),f.h==0&&(f.src=null,c[rn]=null)):Be(n)}}}function tr(n){return n in Sn?Sn[n]:Sn[n]="on"+n}function ut(n,c){if(n.da)n=!0;else{c=new Mt(c,this);var f=n.listener,v=n.ha||n.src;n.fa&&Cn(n),n=f.call(v,c)}return n}function Ut(n){return n=n[rn],n instanceof nn?n:null}var jt="__closure_events_fn_"+(1e9*Math.random()>>>0);function X(n){return typeof n=="function"?n:(n[jt]||(n[jt]=function(c){return n.handleEvent(c)}),n[jt])}function ye(){nt.call(this),this.i=new nn(this),this.M=this,this.F=null}$(ye,nt),ye.prototype[tn]=!0,ye.prototype.removeEventListener=function(n,c,f,v){Kn(this,n,c,f,v)};function Ve(n,c){var f,v=n.F;if(v)for(f=[];v;v=v.F)f.push(v);if(n=n.M,v=c.type||c,typeof c=="string")c=new ke(c,n);else if(c instanceof ke)c.target=c.target||n;else{var O=c;c=new ke(v,n),E(c,O)}if(O=!0,f)for(var L=f.length-1;0<=L;L--){var V=c.g=f[L];O=Xn(V,v,!0,c)&&O}if(V=c.g=n,O=Xn(V,v,!0,c)&&O,O=Xn(V,v,!1,c)&&O,f)for(L=0;L<f.length;L++)V=c.g=f[L],O=Xn(V,v,!1,c)&&O}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var n=this.i,c;for(c in n.g){for(var f=n.g[c],v=0;v<f.length;v++)Be(f[v]);delete n.g[c],n.h--}}this.F=null},ye.prototype.K=function(n,c,f,v){return this.i.add(String(n),c,!1,f,v)},ye.prototype.L=function(n,c,f,v){return this.i.add(String(n),c,!0,f,v)};function Xn(n,c,f,v){if(c=n.i.g[String(c)],!c)return!0;c=c.concat();for(var O=!0,L=0;L<c.length;++L){var V=c[L];if(V&&!V.da&&V.capture==f){var ce=V.listener,Oe=V.ha||V.src;V.fa&&at(n.i,V),O=ce.call(Oe,v)!==!1&&O}}return O&&!v.defaultPrevented}function nr(n,c,f){if(typeof n=="function")f&&(n=se(n,f));else if(n&&typeof n.handleEvent=="function")n=se(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:S.setTimeout(n,c||0)}function Ii(n){n.g=nr(()=>{n.g=null,n.i&&(n.i=!1,Ii(n))},n.l);const c=n.h;n.h=null,n.m.apply(null,c)}class ir extends nt{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(n){nt.call(this),this.h=n,this.g={}}$(gt,nt);var ct=[];function Et(n){Se(n.g,function(c,f){this.g.hasOwnProperty(f)&&Cn(c)},n),n.g={}}gt.prototype.N=function(){gt.aa.N.call(this),Et(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bt=S.JSON.stringify,$r=S.JSON.parse,Jn=class{stringify(n){return S.JSON.stringify(n,void 0)}parse(n){return S.JSON.parse(n,void 0)}};function Yn(){}Yn.prototype.h=null;function Ai(n){return n.h||(n.h=n.i())}function qr(){}var lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ft(){ke.call(this,"d")}$(Ft,ke);function Qn(){ke.call(this,"c")}$(Qn,ke);var Ht={},ze=null;function Ue(){return ze=ze||new ye}Ht.La="serverreachability";function Zn(n){ke.call(this,Ht.La,n)}$(Zn,ke);function kn(n){const c=Ue();Ve(c,new Zn(c))}Ht.STAT_EVENT="statevent";function Si(n,c){ke.call(this,Ht.STAT_EVENT,n),this.stat=c}$(Si,ke);function je(n){const c=Ue();Ve(c,new Si(c,n))}Ht.Ma="timingevent";function Bt(n,c){ke.call(this,Ht.Ma,n),this.size=c}$(Bt,ke);function ht(n,c){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){n()},c)}function Vt(){this.g=!0}Vt.prototype.xa=function(){this.g=!1};function ei(n,c,f,v,O,L){n.info(function(){if(n.g)if(L)for(var V="",ce=L.split("&"),Oe=0;Oe<ce.length;Oe++){var ue=ce[Oe].split("=");if(1<ue.length){var Ie=ue[0];ue=ue[1];var Fe=Ie.split("_");V=2<=Fe.length&&Fe[1]=="type"?V+(Ie+"="+ue+"&"):V+(Ie+"=redacted&")}}else V=null;else V=L;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+c+`
`+f+`
`+V})}function Wr(n,c,f,v,O,L,V){n.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+c+`
`+f+`
`+L+" "+V})}function on(n,c,f,v){n.info(function(){return"XMLHTTP TEXT ("+c+"): "+rr(n,f)+(v?" "+v:"")})}function zr(n,c){n.info(function(){return"TIMEOUT: "+c})}Vt.prototype.info=function(){};function rr(n,c){if(!n.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(n=0;n<f.length;n++)if(Array.isArray(f[n])){var v=f[n];if(!(2>v.length)){var O=v[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var V=1;V<O.length;V++)O[V]=""}}}}return bt(f)}catch{return c}}var Ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ti;function ni(){}$(ni,Yn),ni.prototype.g=function(){return new XMLHttpRequest},ni.prototype.i=function(){return{}},ti=new ni;function Ge(n,c,f,v){this.j=n,this.i=c,this.l=f,this.R=v||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ki}function ki(){this.i=null,this.g="",this.h=!1}var ii={},Rn={};function an(n,c,f){n.L=1,n.v=It(dt(c)),n.m=f,n.P=!0,Ri(n,null)}function Ri(n,c){n.F=Date.now(),On(n),n.A=dt(n.v);var f=n.A,v=n.R;Array.isArray(v)||(v=[String(v)]),Li(f.i,"t",v),n.C=0,f=n.j.J,n.h=new ki,n.g=rt(n.j,f?c:null,!n.m),0<n.O&&(n.M=new ir(se(n.Y,n,n.g),n.O)),c=n.U,f=n.g,v=n.ca;var O="readystatechange";Array.isArray(O)||(O&&(ct[0]=O.toString()),O=ct);for(var L=0;L<O.length;L++){var V=sn(f,O[L],v||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=n.H?I(n.H):{},n.m?(n.u||(n.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,c)):(n.u="GET",n.g.ea(n.A,n.u,null,c)),kn(),ei(n.i,n.u,n.A,n.l,n.R,n.m)}Ge.prototype.ca=function(n){n=n.target;const c=this.M;c&&it(n)==3?c.j():this.Y(n)},Ge.prototype.Y=function(n){try{if(n==this.g)e:{const Fe=it(this.g);var c=this.g.Ba();const hn=this.g.Z();if(!(3>Fe)&&(Fe!=3||this.g&&(this.h.h||this.g.oa()||mr(this.g)))){this.J||Fe!=4||c==7||(c==8||0>=hn?kn(3):kn(2)),ri(this);var f=this.g.Z();this.X=f;t:if(sr(this)){var v=mr(this.g);n="";var O=v.length,L=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),un(this);var V="";break t}this.h.i=new S.TextDecoder}for(c=0;c<O;c++)this.h.h=!0,n+=this.h.i.decode(v[c],{stream:!(L&&c==O-1)});v.length=0,this.h.g+=n,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=f==200,Wr(this.i,this.u,this.A,this.l,this.R,Fe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Oe=this.g;if((ce=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!De(ce)){var ue=ce;break t}}ue=null}if(f=ue)on(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dn(this,f);else{this.o=!1,this.s=3,je(12),$t(this),un(this);break e}}if(this.P){f=!0;let ot;for(;!this.J&&this.C<V.length;)if(ot=Pn(this,V),ot==Rn){Fe==4&&(this.s=4,je(14),f=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==ii){this.s=4,je(15),on(this.i,this.l,V,"[Invalid Chunk]"),f=!1;break}else on(this.i,this.l,ot,null),Dn(this,ot);if(sr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||V.length!=0||this.h.h||(this.s=1,je(16),f=!1),this.o=this.o&&f,!f)on(this.i,this.l,V,"[Invalid Chunked Response]"),$t(this),un(this);else if(0<V.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),j(Ie),Ie.M=!0,je(11))}}else on(this.i,this.l,V,null),Dn(this,V);Fe==4&&$t(this),this.o&&!this.J&&(Fe==4?ee(this.j,this):(this.o=!1,On(this)))}else ts(this.g),f==400&&0<V.indexOf("Unknown SID")?(this.s=3,je(12)):(this.s=0,je(13)),$t(this),un(this)}}}catch{}finally{}};function sr(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Pn(n,c){var f=n.C,v=c.indexOf(`
`,f);return v==-1?Rn:(f=Number(c.substring(f,v)),isNaN(f)?ii:(v+=1,v+f>c.length?Rn:(c=c.slice(v,v+f),n.C=v+f,c)))}Ge.prototype.cancel=function(){this.J=!0,$t(this)};function On(n){n.S=Date.now()+n.I,Pi(n,n.I)}function Pi(n,c){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ht(se(n.ba,n),c)}function ri(n){n.B&&(S.clearTimeout(n.B),n.B=null)}Ge.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(zr(this.i,this.A),this.L!=2&&(kn(),je(17)),$t(this),this.s=2,un(this)):Pi(this,this.S-n)};function un(n){n.j.G==0||n.J||ee(n.j,n)}function $t(n){ri(n);var c=n.M;c&&typeof c.ma=="function"&&c.ma(),n.M=null,Et(n.U),n.g&&(c=n.g,n.g=null,c.abort(),c.ma())}function Dn(n,c){try{var f=n.j;if(f.G!=0&&(f.g==n||Nn(f.h,n))){if(!n.K&&Nn(f.h,n)&&f.G==3){try{var v=f.Da.g.parse(c)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<n.F)B(f),u(f);else break e;U(f),je(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=ht(se(f.Za,f),6e3));if(1>=Di(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ne(f,11)}else if((n.K||f.g==n)&&B(f),!De(c))for(O=f.Da.g.parse(c),c=0;c<O.length;c++){let ue=O[c];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const Ie=ue[3];Ie!=null&&(f.la=Ie,f.j.info("VER="+f.la));const Fe=ue[4];Fe!=null&&(f.Aa=Fe,f.j.info("SVER="+f.Aa));const hn=ue[5];hn!=null&&typeof hn=="number"&&0<hn&&(v=1.5*hn,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const ot=n.g;if(ot){const ge=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ge){var L=v.h;L.g||ge.indexOf("spdy")==-1&&ge.indexOf("quic")==-1&&ge.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(si(L,L.h),L.h=null))}if(v.D){const fn=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;fn&&(v.ya=fn,Ee(v.I,v.D,fn))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-n.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var V=n;if(v.qa=Re(v,v.J?v.ia:null,v.W),V.K){$e(v.h,V);var ce=V,Oe=v.L;Oe&&(ce.I=Oe),ce.B&&(ri(ce),On(ce)),v.g=V}else P(v);0<f.i.length&&d(f)}else ue[0]!="stop"&&ue[0]!="close"||ne(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?ne(f,7):s(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}kn(4)}catch{}}var Kr=class{constructor(n,c){this.g=n,this.map=c}};function or(n){this.l=n||10,S.PerformanceNavigationTiming?(n=S.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(S.chrome&&S.chrome.loadTimes&&S.chrome.loadTimes()&&S.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oi(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Di(n){return n.h?1:n.g?n.g.size:0}function Nn(n,c){return n.h?n.h==c:n.g?n.g.has(c):!1}function si(n,c){n.g?n.g.add(c):n.h=c}function $e(n,c){n.h&&n.h==c?n.h=null:n.g&&n.g.has(c)&&n.g.delete(c)}or.prototype.cancel=function(){if(this.i=qt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function qt(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let c=n.i;for(const f of n.g.values())c=c.concat(f.D);return c}return G(n.i)}function oi(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(R(n)){for(var c=[],f=n.length,v=0;v<f;v++)c.push(n[v]);return c}c=[],f=0;for(v in n)c[f++]=n[v];return c}function Xr(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(R(n)||typeof n=="string"){var c=[];n=n.length;for(var f=0;f<n;f++)c.push(f);return c}c=[],f=0;for(const v in n)c[f++]=v;return c}}}function ar(n,c){if(n.forEach&&typeof n.forEach=="function")n.forEach(c,void 0);else if(R(n)||typeof n=="string")Array.prototype.forEach.call(n,c,void 0);else for(var f=Xr(n),v=oi(n),O=v.length,L=0;L<O;L++)c.call(void 0,v[L],f&&f[L],n)}var ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ur(n,c){if(n){n=n.split("&");for(var f=0;f<n.length;f++){var v=n[f].indexOf("="),O=null;if(0<=v){var L=n[f].substring(0,v);O=n[f].substring(v+1)}else L=n[f];c(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ft(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof ft){this.h=n.h,ui(this,n.j),this.o=n.o,this.g=n.g,ci(this,n.s),this.l=n.l;var c=n.i,f=new zt;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Qe(this,f),this.m=n.m}else n&&(c=String(n).match(ai))?(this.h=!1,ui(this,c[1]||"",!0),this.o=xn(c[2]||""),this.g=xn(c[3]||"",!0),ci(this,c[4]),this.l=xn(c[5]||"",!0),Qe(this,c[6]||"",!0),this.m=xn(c[7]||"")):(this.h=!1,this.i=new zt(null,this.h))}ft.prototype.toString=function(){var n=[],c=this.j;c&&n.push(Ln(c,At,!0),":");var f=this.g;return(f||c=="file")&&(n.push("//"),(c=this.o)&&n.push(Ln(c,At,!0),"@"),n.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&n.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&n.push("/"),n.push(Ln(f,f.charAt(0)=="/"?Jr:Ni,!0))),(f=this.i.toString())&&n.push("?",f),(f=this.m)&&n.push("#",Ln(f,cr)),n.join("")};function dt(n){return new ft(n)}function ui(n,c,f){n.j=f?xn(c,!0):c,n.j&&(n.j=n.j.replace(/:$/,""))}function ci(n,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);n.s=c}else n.s=null}function Qe(n,c,f){c instanceof zt?(n.i=c,Yr(n.i,n.h)):(f||(c=Ln(c,Mn)),n.i=new zt(c,n.h))}function Ee(n,c,f){n.i.set(c,f)}function It(n){return Ee(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function xn(n,c){return n?c?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ln(n,c,f){return typeof n=="string"?(n=encodeURI(n).replace(c,Wt),f&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Wt(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var At=/[#\/\?@]/g,Ni=/[#\?:]/g,Jr=/[#\?]/g,Mn=/[#\?@]/g,cr=/#/g;function zt(n,c){this.h=this.g=null,this.i=n||null,this.j=!!c}function mt(n){n.g||(n.g=new Map,n.h=0,n.i&&ur(n.i,function(c,f){n.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}r=zt.prototype,r.add=function(n,c){mt(this),this.i=null,n=cn(this,n);var f=this.g.get(n);return f||this.g.set(n,f=[]),f.push(c),this.h+=1,this};function xi(n,c){mt(n),c=cn(n,c),n.g.has(c)&&(n.i=null,n.h-=n.g.get(c).length,n.g.delete(c))}function lr(n,c){return mt(n),c=cn(n,c),n.g.has(c)}r.forEach=function(n,c){mt(this),this.g.forEach(function(f,v){f.forEach(function(O){n.call(c,O,v,this)},this)},this)},r.na=function(){mt(this);const n=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let v=0;v<c.length;v++){const O=n[v];for(let L=0;L<O.length;L++)f.push(c[v])}return f},r.V=function(n){mt(this);let c=[];if(typeof n=="string")lr(this,n)&&(c=c.concat(this.g.get(cn(this,n))));else{n=Array.from(this.g.values());for(let f=0;f<n.length;f++)c=c.concat(n[f])}return c},r.set=function(n,c){return mt(this),this.i=null,n=cn(this,n),lr(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[c]),this.h+=1,this},r.get=function(n,c){return n?(n=this.V(n),0<n.length?String(n[0]):c):c};function Li(n,c,f){xi(n,c),0<f.length&&(n.i=null,n.g.set(cn(n,c),G(f)),n.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var v=c[f];const L=encodeURIComponent(String(v)),V=this.V(v);for(v=0;v<V.length;v++){var O=L;V[v]!==""&&(O+="="+encodeURIComponent(String(V[v]))),n.push(O)}}return this.i=n.join("&")};function cn(n,c){return c=String(c),n.j&&(c=c.toLowerCase()),c}function Yr(n,c){c&&!n.j&&(mt(n),n.i=null,n.g.forEach(function(f,v){var O=v.toLowerCase();v!=O&&(xi(this,v),Li(this,O,f))},n)),n.j=c}function Mi(n,c){const f=new Vt;if(S.Image){const v=new Image;v.onload=be(St,f,"TestLoadImage: loaded",!0,c,v),v.onerror=be(St,f,"TestLoadImage: error",!1,c,v),v.onabort=be(St,f,"TestLoadImage: abort",!1,c,v),v.ontimeout=be(St,f,"TestLoadImage: timeout",!1,c,v),S.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=n}else c(!1)}function Qr(n,c){const f=new Vt,v=new AbortController,O=setTimeout(()=>{v.abort(),St(f,"TestPingServer: timeout",!1,c)},1e4);fetch(n,{signal:v.signal}).then(L=>{clearTimeout(O),L.ok?St(f,"TestPingServer: ok",!0,c):St(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(O),St(f,"TestPingServer: error",!1,c)})}function St(n,c,f,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(f)}catch{}}function Zr(){this.g=new Jn}function es(n,c,f){const v=f||"";try{ar(n,function(O,L){let V=O;F(O)&&(V=bt(O)),c.push(v+L+"="+encodeURIComponent(V))})}catch(O){throw c.push(v+"type="+encodeURIComponent("_badmap")),O}}function li(n){this.l=n.Ub||null,this.j=n.eb||!1}$(li,Yn),li.prototype.g=function(){return new hi(this.l,this.j)},li.prototype.i=function(n){return function(){return n}}({});function hi(n,c){ye.call(this),this.D=n,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(hi,ye),r=hi.prototype,r.open=function(n,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=c,this.readyState=1,Gt(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(c.body=n),(this.D||S).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ln(this)),this.readyState=0},r.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Gt(this)),this.g&&(this.readyState=3,Gt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hr(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function hr(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}r.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var c=n.value?n.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!n.done}))&&(this.response=this.responseText+=c)}n.done?ln(this):Gt(this),this.readyState==3&&hr(this)}},r.Ra=function(n){this.g&&(this.response=this.responseText=n,ln(this))},r.Qa=function(n){this.g&&(this.response=n,ln(this))},r.ga=function(){this.g&&ln(this)};function ln(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Gt(n)}r.setRequestHeader=function(n,c){this.u.append(n,c)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,n.push(f[0]+": "+f[1]),f=c.next();return n.join(`\r
`)};function Gt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Ui(n){let c="";return Se(n,function(f,v){c+=v,c+=":",c+=f,c+=`\r
`}),c}function Un(n,c,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Ui(f),typeof n=="string"?f!=null&&encodeURIComponent(String(f)):Ee(n,c,f))}function Ce(n){ye.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ce,ye);var fr=/^https?$/i,ji=["POST","PUT"];r=Ce.prototype,r.Ha=function(n){this.J=n},r.ea=function(n,c,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);c=c?c.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ti.g(),this.v=this.o?Ai(this.o):Ai(ti),this.g.onreadystatechange=se(this.Ea,this);try{this.B=!0,this.g.open(c,String(n),!0),this.B=!1}catch(L){dr(this,L);return}if(n=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)f.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),O=S.FormData&&n instanceof S.FormData,!(0<=Array.prototype.indexOf.call(ji,c,void 0))||v||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,V]of f)this.g.setRequestHeader(L,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fi(this),this.u=!0,this.g.send(n),this.u=!1}catch(L){dr(this,L)}};function dr(n,c){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=c,n.m=5,pr(n),Ct(n)}function pr(n){n.A||(n.A=!0,Ve(n,"complete"),Ve(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,Ve(this,"complete"),Ve(this,"abort"),Ct(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ct(this,!0)),Ce.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?gr(this):this.bb())},r.bb=function(){gr(this)};function gr(n){if(n.h&&typeof y<"u"&&(!n.v[1]||it(n)!=4||n.Z()!=2)){if(n.u&&it(n)==4)nr(n.Ea,0,n);else if(Ve(n,"readystatechange"),it(n)==4){n.h=!1;try{const V=n.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var v;if(v=V===0){var O=String(n.D).match(ai)[1]||null;!O&&S.self&&S.self.location&&(O=S.self.location.protocol.slice(0,-1)),v=!fr.test(O?O.toLowerCase():"")}f=v}if(f)Ve(n,"complete"),Ve(n,"success");else{n.m=6;try{var L=2<it(n)?n.g.statusText:""}catch{L=""}n.l=L+" ["+n.Z()+"]",pr(n)}}finally{Ct(n)}}}}function Ct(n,c){if(n.g){Fi(n);const f=n.g,v=n.v[0]?()=>{}:null;n.g=null,n.v=null,c||Ve(n,"ready");try{f.onreadystatechange=v}catch{}}}function Fi(n){n.I&&(S.clearTimeout(n.I),n.I=null)}r.isActive=function(){return!!this.g};function it(n){return n.g?n.g.readyState:0}r.Z=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(n){if(this.g){var c=this.g.responseText;return n&&c.indexOf(n)==0&&(c=c.substring(n.length)),$r(c)}};function mr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function ts(n){const c={};n=(n.g&&2<=it(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<n.length;v++){if(De(n[v]))continue;var f=k(n[v]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=c[O]||[];c[O]=L,L.push(f)}o(c,function(v){return v.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(n,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[n]||c}function t(n){this.Aa=0,this.i=[],this.j=new Vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,n),this.cb=jn("retryDelaySeedMs",1e4,n),this.Wa=jn("forwardChannelMaxRetries",2,n),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new or(n&&n.concurrentRequestLimit),this.Da=new Zr,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=t.prototype,r.la=8,r.G=1,r.connect=function(n,c,f,v){je(0),this.W=n,this.H=c||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=Re(this,null,this.W),d(this)};function s(n){if(l(n),n.G==3){var c=n.U++,f=dt(n.I);if(Ee(f,"SID",n.K),Ee(f,"RID",c),Ee(f,"TYPE","terminate"),A(n,f),c=new Ge(n,n.j,c),c.L=2,c.v=It(dt(f)),f=!1,S.navigator&&S.navigator.sendBeacon)try{f=S.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&S.Image&&(new Image().src=c.v,f=!0),f||(c.g=rt(c.j,null),c.g.ea(c.v)),c.F=Date.now(),On(c)}xe(n)}function u(n){n.g&&(j(n),n.g.cancel(),n.g=null)}function l(n){u(n),n.u&&(S.clearTimeout(n.u),n.u=null),B(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&S.clearTimeout(n.s),n.s=null)}function d(n){if(!Oi(n.h)&&!n.s){n.s=!0;var c=n.Ga;Ne||en(),Pe||(Ne(),Pe=!0),He.add(c,n),n.B=0}}function p(n,c){return Di(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=c.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=ht(se(n.Ga,n,c),he(n,n.B)),n.B++,!0)}r.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const O=new Ge(this,this.j,n);let L=this.o;if(this.S&&(L?(L=I(L),E(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(c+=v,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=b(this,O,c),f=dt(this.I),Ee(f,"RID",n),Ee(f,"CVER",22),this.D&&Ee(f,"X-HTTP-Session-Id",this.D),A(this,f),L&&(this.O?c="headers="+encodeURIComponent(String(Ui(L)))+"&"+c:this.m&&Un(f,this.m,L)),si(this.h,O),this.Ua&&Ee(f,"TYPE","init"),this.P?(Ee(f,"$req",c),Ee(f,"SID","null"),O.T=!0,an(O,f,null)):an(O,f,c),this.G=2}}else this.G==3&&(n?m(this,n):this.i.length==0||Oi(this.h)||m(this))};function m(n,c){var f;c?f=c.l:f=n.U++;const v=dt(n.I);Ee(v,"SID",n.K),Ee(v,"RID",f),Ee(v,"AID",n.T),A(n,v),n.m&&n.o&&Un(v,n.m,n.o),f=new Ge(n,n.j,f,n.B+1),n.m===null&&(f.H=n.o),c&&(n.i=c.D.concat(n.i)),c=b(n,f,1e3),f.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),si(n.h,f),an(f,v,c)}function A(n,c){n.H&&Se(n.H,function(f,v){Ee(c,v,f)}),n.l&&ar({},function(f,v){Ee(c,v,f)})}function b(n,c,f){f=Math.min(n.i.length,f);var v=n.l?se(n.l.Na,n.l,n):null;e:{var O=n.i;let L=-1;for(;;){const V=["count="+f];L==-1?0<f?(L=O[0].g,V.push("ofs="+L)):L=0:V.push("ofs="+L);let ce=!0;for(let Oe=0;Oe<f;Oe++){let ue=O[Oe].g;const Ie=O[Oe].map;if(ue-=L,0>ue)L=Math.max(0,O[Oe].g-100),ce=!1;else try{es(Ie,V,"req"+ue+"_")}catch{v&&v(Ie)}}if(ce){v=V.join("&");break e}}}return n=n.i.splice(0,f),c.D=n,v}function P(n){if(!n.g&&!n.u){n.Y=1;var c=n.Fa;Ne||en(),Pe||(Ne(),Pe=!0),He.add(c,n),n.v=0}}function U(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=ht(se(n.Fa,n),he(n,n.v)),n.v++,!0)}r.Fa=function(){if(this.u=null,x(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=ht(se(this.ab,this),n)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,je(10),u(this),x(this))};function j(n){n.A!=null&&(S.clearTimeout(n.A),n.A=null)}function x(n){n.g=new Ge(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var c=dt(n.qa);Ee(c,"RID","rpc"),Ee(c,"SID",n.K),Ee(c,"AID",n.T),Ee(c,"CI",n.F?"0":"1"),!n.F&&n.ja&&Ee(c,"TO",n.ja),Ee(c,"TYPE","xmlhttp"),A(n,c),n.m&&n.o&&Un(c,n.m,n.o),n.L&&(n.g.I=n.L);var f=n.g;n=n.ia,f.L=1,f.v=It(dt(c)),f.m=null,f.P=!0,Ri(f,n)}r.Za=function(){this.C!=null&&(this.C=null,u(this),U(this),je(19))};function B(n){n.C!=null&&(S.clearTimeout(n.C),n.C=null)}function ee(n,c){var f=null;if(n.g==c){B(n),j(n),n.g=null;var v=2}else if(Nn(n.h,c))f=c.D,$e(n.h,c),v=1;else return;if(n.G!=0){if(c.o)if(v==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var O=n.B;v=Ue(),Ve(v,new Bt(v,f)),d(n)}else P(n);else if(O=c.s,O==3||O==0&&0<c.X||!(v==1&&p(n,c)||v==2&&U(n)))switch(f&&0<f.length&&(c=n.h,c.i=c.i.concat(f)),O){case 1:ne(n,5);break;case 4:ne(n,10);break;case 3:ne(n,6);break;default:ne(n,2)}}}function he(n,c){let f=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(f*=2),f*c}function ne(n,c){if(n.j.info("Error code "+c),c==2){var f=se(n.fb,n),v=n.Xa;const O=!v;v=new ft(v||"//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||ui(v,"https"),It(v),O?Mi(v.toString(),f):Qr(v.toString(),f)}else je(2);n.G=0,n.l&&n.l.sa(c),xe(n),l(n)}r.fb=function(n){n?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function xe(n){if(n.G=0,n.ka=[],n.l){const c=qt(n.h);(c.length!=0||n.i.length!=0)&&(oe(n.ka,c),oe(n.ka,n.i),n.h.i.length=0,G(n.i),n.i.length=0),n.l.ra()}}function Re(n,c,f){var v=f instanceof ft?dt(f):new ft(f);if(v.g!="")c&&(v.g=c+"."+v.g),ci(v,v.s);else{var O=S.location;v=O.protocol,c=c?c+"."+O.hostname:O.hostname,O=+O.port;var L=new ft(null);v&&ui(L,v),c&&(L.g=c),O&&ci(L,O),f&&(L.l=f),v=L}return f=n.D,c=n.ya,f&&c&&Ee(v,f,c),Ee(v,"VER",n.la),A(n,v),v}function rt(n,c,f){if(c&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=n.Ca&&!n.pa?new Ce(new li({eb:f})):new Ce(n.pa),c.Ha(n.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function st(){}r=st.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function te(n,c){ye.call(this),this.g=new t(c),this.l=n,this.h=c&&c.messageUrlParams||null,n=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(n?n["X-WebChannel-Content-Type"]=c.messageContentType:n={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(n?n["X-WebChannel-Client-Profile"]=c.va:n={"X-WebChannel-Client-Profile":c.va}),this.g.S=n,(n=c&&c.Sb)&&!De(n)&&(this.g.m=n),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!De(c)&&(this.g.D=c,n=this.h,n!==null&&c in n&&(n=this.h,c in n&&delete n[c])),this.j=new Te(this)}$(te,ye),te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},te.prototype.close=function(){s(this.g)},te.prototype.o=function(n){var c=this.g;if(typeof n=="string"){var f={};f.__data__=n,n=f}else this.u&&(f={},f.__data__=bt(n),n=f);c.i.push(new Kr(c.Ya++,n)),c.G==3&&d(c)},te.prototype.N=function(){this.g.l=null,delete this.j,s(this.g),delete this.g,te.aa.N.call(this)};function kt(n){Ft.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var c=n.__sm__;if(c){e:{for(const f in c){n=f;break e}n=void 0}(this.i=n)&&(n=this.i,c=c!==null&&n in c?c[n]:void 0),this.data=c}else this.data=n}$(kt,Ft);function pe(){Qn.call(this),this.status=1}$(pe,Qn);function Te(n){this.g=n}$(Te,st),Te.prototype.ua=function(){Ve(this.g,"a")},Te.prototype.ta=function(n){Ve(this.g,new kt(n))},Te.prototype.sa=function(n){Ve(this.g,new pe)},Te.prototype.ra=function(){Ve(this.g,"b")},te.prototype.send=te.prototype.o,te.prototype.open=te.prototype.m,te.prototype.close=te.prototype.close,Ci.NO_ERROR=0,Ci.TIMEOUT=8,Ci.HTTP_ERROR=6,Gr.COMPLETE="complete",qr.EventType=lt,lt.OPEN="a",lt.CLOSE="b",lt.ERROR="c",lt.MESSAGE="d",ye.prototype.listen=ye.prototype.K,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha}).apply(typeof wr<"u"?wr:typeof self<"u"?self:typeof window<"u"?window:{});const Io="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Cs("@firebase/firestore");function yt(r,...e){if(_i.logLevel<=_e.DEBUG){const i=e.map(Fs);_i.debug(`Firestore (${er}): ${r}`,...i)}}function Da(r,...e){if(_i.logLevel<=_e.ERROR){const i=e.map(Fs);_i.error(`Firestore (${er}): ${r}`,...i)}}function Ph(r,...e){if(_i.logLevel<=_e.WARN){const i=e.map(Fs);_i.warn(`Firestore (${er}): ${r}`,...i)}}function Fs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(r="Unexpected state"){const e=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: `+r;throw Da(e),new Error(e)}function qi(r,e){r||Hs()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tt extends xt{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(Xe.UNAUTHENTICATED))}shutdown(){}}class Dh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Nh{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){qi(this.o===void 0);let a=this.i;const h=R=>this.i!==a?(a=this.i,i(R)):Promise.resolve();let g=new Wi;this.o=()=>{this.i++,this.currentUser=this.u(),g.resolve(),g=new Wi,e.enqueueRetryable(()=>h(this.currentUser))};const y=()=>{const R=g;e.enqueueRetryable(async()=>{await R.promise,await h(this.currentUser)})},S=R=>{yt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=R,this.o&&(this.auth.addAuthTokenListener(this.o),y())};this.t.onInit(R=>S(R)),setTimeout(()=>{if(!this.auth){const R=this.t.getImmediate({optional:!0});R?S(R):(yt("FirebaseAuthCredentialsProvider","Auth not yet detected"),g.resolve(),g=new Wi)}},0),y()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==e?(yt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(qi(typeof a.accessToken=="string"),new Na(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qi(e===null||typeof e=="string"),new Xe(e)}}class xh{constructor(e,i,a){this.l=e,this.h=i,this.P=a,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Lh{constructor(e,i,a){this.l=e,this.h=i,this.P=a}getToken(){return Promise.resolve(new xh(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){qi(this.o===void 0);const a=g=>{g.error!=null&&yt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${g.error.message}`);const y=g.token!==this.R;return this.R=g.token,yt("FirebaseAppCheckTokenProvider",`Received ${y?"new":"existing"} token.`),y?i(g.token):Promise.resolve()};this.o=g=>{e.enqueueRetryable(()=>a(g))};const h=g=>{yt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=g,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(g=>h(g)),setTimeout(()=>{if(!this.appCheck){const g=this.A.getImmediate({optional:!0});g?h(g):yt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(qi(typeof i.token=="string"),this.R=i.token,new Mh(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function jh(r){return r.name==="IndexedDbTransactionError"}class Lr{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao,me;(me=Ao||(Ao={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Oa([4294967295,4294967295],0);function ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,i,a=1e3,h=1.5,g=6e4){this.li=e,this.timerId=i,this.Qo=a,this.Ko=h,this.$o=g,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const i=Math.floor(this.Uo+this.Ho()),a=Math.max(0,Date.now()-this.Go),h=Math.max(0,i-a);h>0&&yt("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.Uo} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,h,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,i,a,h,g){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=a,this.op=h,this.removalCallback=g,this.deferred=new Wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(y=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,a,h,g){const y=Date.now()+a,S=new Bs(e,i,y,h,g);return S.start(a),S}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new tt(et.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var So,Co;(Co=So||(So={})).na="default",Co.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map;function Bh(r,e,i,a){if(e===!0&&a===!0)throw new tt(et.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function Vh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Hs()}function $h(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new tt(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Vh(r);throw new tt(et.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){var i,a;if(e.host===void 0){if(e.ssl!==void 0)throw new tt(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new tt(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hh((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(g){if(g.timeoutSeconds!==void 0){if(isNaN(g.timeoutSeconds))throw new tt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${g.timeoutSeconds} (must not be NaN)`);if(g.timeoutSeconds<5)throw new tt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${g.timeoutSeconds} (minimum allowed value is 5)`);if(g.timeoutSeconds>30)throw new tt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${g.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,h){return a.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xa{constructor(e,i,a,h){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=a,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ro({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new tt(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new tt(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ro(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Oh;switch(a.type){case"firstParty":return new Lh(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new tt(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=ko.get(i);a&&(yt("ComponentProvider","Removing Datastore"),ko.delete(i),a.terminate())}(this),Promise.resolve()}}function qh(r,e,i,a={}){var h;const g=(r=$h(r,xa))._getSettings(),y=`${e}:${i}`;if(g.host!=="firestore.googleapis.com"&&g.host!==y&&Ph("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},g),{host:y,ssl:!1})),a.mockUserToken){let S,R;if(typeof a.mockUserToken=="string")S=a.mockUserToken,R=Xe.MOCK_USER;else{S=qo(a.mockUserToken,(h=r._app)===null||h===void 0?void 0:h.options.projectId);const F=a.mockUserToken.sub||a.mockUserToken.user_id;if(!F)throw new tt(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new Xe(F)}r._authCredentials=new Dh(new Na(S,R))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Fh(this,"async_queue_retry"),this.fu=()=>{const a=ps();a&&yt("AsyncQueue","Visibility state changed to "+a.visibilityState),this.r_.Jo()},this.gu=e;const i=ps();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const i=ps();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const i=new Wi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!jh(e))throw e;yt("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const i=this.gu.then(()=>(this.Ru=!0,e().catch(a=>{this.Au=a,this.Ru=!1;const h=function(y){let S=y.message||"";return y.stack&&(S=y.stack.includes(y.message)?y.stack:y.message+`
`+y.stack),S}(a);throw Da("INTERNAL UNHANDLED ERROR: ",h),a}).then(a=>(this.Ru=!1,a))));return this.gu=i,i}enqueueAfterDelay(e,i,a){this.pu(),this.mu.indexOf(e)>-1&&(i=0);const h=Bs.createAndSchedule(this,e,i,a,g=>this.Su(g));return this.du.push(h),h}pu(){this.Au&&Hs()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const i of this.du)if(i.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.du)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const i=this.du.indexOf(e);this.du.splice(i,1)}}class Wh extends xa{constructor(e,i,a,h){super(e,i,a,h),this.type="firestore",this._queue=new Po,this._persistenceKey=(h==null?void 0:h.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Po(e),this._firestoreClient=void 0,await e}}}function zh(r,e){const i=typeof r=="object"?r:Rs(),a=typeof r=="string"?r:"(default)",h=jr(i,"firestore").getImmediate({identifier:a});if(!h._initialized){const g=Bo("firestore");g&&qh(h,...g)}return h}(function(e,i=!0){(function(h){er=h})($n),Bn(new En("firestore",(a,{instanceIdentifier:h,options:g})=>{const y=a.getProvider("app").getImmediate(),S=new Wh(new Nh(a.getProvider("auth-internal")),new Uh(a.getProvider("app-check-internal")),function(F,Y){if(!Object.prototype.hasOwnProperty.apply(F.options,["projectId"]))throw new tt(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(F.options.projectId,Y)}(y,h),y);return g=Object.assign({useFetchStreams:i},g),S._setSettings(g),S},"PUBLIC").setMultipleInstances(!0)),Pt(Io,"4.7.5",e),Pt(Io,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="firebasestorage.googleapis.com",Gh="storageBucket",Kh=2*60*1e3,Xh=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends xt{constructor(e,i,a=0){super(gs(e),`Firebase Storage: ${i} (${gs(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nt||(Nt={}));function gs(r){return"storage/"+r}function Jh(){const r="An unknown error occurred, please check the error payload for server response.";return new Lt(Nt.UNKNOWN,r)}function Yh(){return new Lt(Nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qh(){return new Lt(Nt.CANCELED,"User canceled the upload/download.")}function Zh(r){return new Lt(Nt.INVALID_URL,"Invalid URL '"+r+"'.")}function ef(r){return new Lt(Nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Oo(r){return new Lt(Nt.INVALID_ARGUMENT,r)}function Ma(){return new Lt(Nt.APP_DELETED,"The Firebase app was deleted.")}function tf(r){return new Lt(Nt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let a;try{a=_t.makeFromUrl(e,i)}catch{return new _t(e,"")}if(a.path==="")return a;throw ef(e)}static makeFromUrl(e,i){let a=null;const h="([A-Za-z0-9.\\-_]+)";function g(ve){ve.path.charAt(ve.path.length-1)==="/"&&(ve.path_=ve.path_.slice(0,-1))}const y="(/(.*))?$",S=new RegExp("^gs://"+h+y,"i"),R={bucket:1,path:3};function F(ve){ve.path_=decodeURIComponent(ve.path)}const Y="v[A-Za-z0-9_]+",Z=i.replace(/[.]/g,"\\."),se="(/([^?#]*).*)?$",be=new RegExp(`^https?://${Z}/${Y}/b/${h}/o${se}`,"i"),$={bucket:1,path:3},G=i===La?"(?:storage.googleapis.com|storage.cloud.google.com)":i,oe="([^?#]*)",K=new RegExp(`^https?://${G}/${h}/${oe}`,"i"),we=[{regex:S,indices:R,postModify:g},{regex:be,indices:$,postModify:F},{regex:K,indices:{bucket:1,path:2},postModify:F}];for(let ve=0;ve<we.length;ve++){const Le=we[ve],Se=Le.regex.exec(e);if(Se){const o=Se[Le.indices.bucket];let I=Se[Le.indices.path];I||(I=""),a=new _t(o,I),Le.postModify(a);break}}if(a==null)throw Zh(e);return a}}class nf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(r,e,i){let a=1,h=null,g=null,y=!1,S=0;function R(){return S===2}let F=!1;function Y(...oe){F||(F=!0,e.apply(null,oe))}function Z(oe){h=setTimeout(()=>{h=null,r(be,R())},oe)}function se(){g&&clearTimeout(g)}function be(oe,...K){if(F){se();return}if(oe){se(),Y.call(null,oe,...K);return}if(R()||y){se(),Y.call(null,oe,...K);return}a<64&&(a*=2);let we;S===1?(S=2,we=0):we=(a+Math.random())*1e3,Z(we)}let $=!1;function G(oe){$||($=!0,se(),!F&&(h!==null?(oe||(S=2),clearTimeout(h),Z(0)):oe||(S=1)))}return Z(0),g=setTimeout(()=>{y=!0,G(!0)},i),G}function sf(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(r){return r!==void 0}function Do(r,e,i,a){if(a<e)throw Oo(`Invalid value for '${r}'. Expected ${e} or greater.`);if(a>i)throw Oo(`Invalid value for '${r}'. Expected ${i} or less.`)}function af(r){const e=encodeURIComponent;let i="?";for(const a in r)if(r.hasOwnProperty(a)){const h=e(a)+"="+e(r[a]);i=i+h+"&"}return i=i.slice(0,-1),i}var Mr;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Mr||(Mr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(r,e){const i=r>=500&&r<600,h=[408,429].indexOf(r)!==-1,g=e.indexOf(r)!==-1;return i||h||g}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,i,a,h,g,y,S,R,F,Y,Z,se=!0){this.url_=e,this.method_=i,this.headers_=a,this.body_=h,this.successCodes_=g,this.additionalRetryCodes_=y,this.callback_=S,this.errorCallback_=R,this.timeout_=F,this.progressCallback_=Y,this.connectionFactory_=Z,this.retry=se,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((be,$)=>{this.resolve_=be,this.reject_=$,this.start_()})}start_(){const e=(a,h)=>{if(h){a(!1,new Er(!1,null,!0));return}const g=this.connectionFactory_();this.pendingConnection_=g;const y=S=>{const R=S.loaded,F=S.lengthComputable?S.total:-1;this.progressCallback_!==null&&this.progressCallback_(R,F)};this.progressCallback_!==null&&g.addUploadProgressListener(y),g.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&g.removeUploadProgressListener(y),this.pendingConnection_=null;const S=g.getErrorCode()===Mr.NO_ERROR,R=g.getStatus();if(!S||uf(R,this.additionalRetryCodes_)&&this.retry){const Y=g.getErrorCode()===Mr.ABORT;a(!1,new Er(!1,null,Y));return}const F=this.successCodes_.indexOf(R)!==-1;a(!0,new Er(F,g))})},i=(a,h)=>{const g=this.resolve_,y=this.reject_,S=h.connection;if(h.wasSuccessCode)try{const R=this.callback_(S,S.getResponse());of(R)?g(R):g()}catch(R){y(R)}else if(S!==null){const R=Jh();R.serverResponse=S.getErrorText(),this.errorCallback_?y(this.errorCallback_(S,R)):y(R)}else if(h.canceled){const R=this.appDelete_?Ma():Qh();y(R)}else{const R=Yh();y(R)}};this.canceled_?i(!1,new Er(!1,null,!0)):this.backoffId_=rf(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Er{constructor(e,i,a){this.wasSuccessCode=e,this.connection=i,this.canceled=!!a}}function lf(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function hf(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ff(r,e){e&&(r["X-Firebase-GMPID"]=e)}function df(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function pf(r,e,i,a,h,g,y=!0){const S=af(r.urlParams),R=r.url+S,F=Object.assign({},r.headers);return ff(F,e),lf(F,i),hf(F,g),df(F,a),new cf(R,r.method,F,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,h,y)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function mf(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,i){this._service=e,i instanceof _t?this._location=i:this._location=_t.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new Ur(e,i)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mf(this._location.path)}get storage(){return this._service}get parent(){const e=gf(this._location.path);if(e===null)return null;const i=new _t(this._location.bucket,e);return new Ur(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw tf(e)}}function No(r,e){const i=e==null?void 0:e[Gh];return i==null?null:_t.makeFromBucketSpec(i,r)}function vf(r,e,i,a={}){r.host=`${e}:${i}`,r._protocol="http";const{mockUserToken:h}=a;h&&(r._overrideAuthToken=typeof h=="string"?h:qo(h,r.app.options.projectId))}class yf{constructor(e,i,a,h,g){this.app=e,this._authProvider=i,this._appCheckProvider=a,this._url=h,this._firebaseVersion=g,this._bucket=null,this._host=La,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kh,this._maxUploadRetryTime=Xh,this._requests=new Set,h!=null?this._bucket=_t.makeFromBucketSpec(h,this._host):this._bucket=No(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=No(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Do("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Do("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ur(this,e)}_makeRequest(e,i,a,h,g=!0){if(this._deleted)return new nf(Ma());{const y=pf(e,this._appId,a,h,i,this._firebaseVersion,g);return this._requests.add(y),y.getPromise().then(()=>this._requests.delete(y),()=>this._requests.delete(y)),y}}async makeRequestWithTokens(e,i){const[a,h]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,a,h).getPromise()}}const xo="@firebase/storage",Lo="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="storage";function _f(r=Rs(),e){r=bn(r);const a=jr(r,Ua).getImmediate({identifier:e}),h=Bo("storage");return h&&Tf(a,...h),a}function Tf(r,e,i,a={}){vf(r,e,i,a)}function wf(r,{instanceIdentifier:e}){const i=r.getProvider("app").getImmediate(),a=r.getProvider("auth-internal"),h=r.getProvider("app-check-internal");return new yf(i,a,h,e,$n)}function Ef(){Bn(new En(Ua,wf,"PUBLIC").setMultipleInstances(!0)),Pt(xo,Lo,""),Pt(xo,Lo,"esm2017")}Ef();const bf={apiKey:"AIzaSyBJBy-1ToR0aLnbngDOL8kKa5onMtQoNcw",authDomain:"smartattend-f36c4.firebaseapp.com",projectId:"smartattend-f36c4",storageBucket:"smartattend-f36c4.appspot.com",messagingSenderId:"478728054218",appId:"1:478728054218:web:2b69ded405972ea3dadb33"},Vs=Go(bf);Pa(Vs);zh(Vs);_f(Vs);const If=async(r,e)=>{try{const i=Pa();return(await ml(i,r,e)).user}catch(i){throw new Error(i.message)}};var Af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ja={exports:{}},ms={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Mo;function Cf(){return Mo||(Mo=1,function(r){(function(e,i){r.exports=e.document?i(e,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return i(a)}})(typeof window<"u"?window:Af,function(e,i){var a=[],h=Object.getPrototypeOf,g=a.slice,y=a.flat?function(t){return a.flat.call(t)}:function(t){return a.concat.apply([],t)},S=a.push,R=a.indexOf,F={},Y=F.toString,Z=F.hasOwnProperty,se=Z.toString,be=se.call(Object),$={},G=function(s){return typeof s=="function"&&typeof s.nodeType!="number"&&typeof s.item!="function"},oe=function(s){return s!=null&&s===s.window},K=e.document,De={type:!0,src:!0,nonce:!0,noModule:!0};function we(t,s,u){u=u||K;var l,d,p=u.createElement("script");if(p.text=t,s)for(l in De)d=s[l]||s.getAttribute&&s.getAttribute(l),d&&p.setAttribute(l,d);u.head.appendChild(p).parentNode.removeChild(p)}function ve(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?F[Y.call(t)]||"object":typeof t}var Le="3.7.1",Se=/HTML$/i,o=function(t,s){return new o.fn.init(t,s)};o.fn=o.prototype={jquery:Le,constructor:o,length:0,toArray:function(){return g.call(this)},get:function(t){return t==null?g.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var s=o.merge(this.constructor(),t);return s.prevObject=this,s},each:function(t){return o.each(this,t)},map:function(t){return this.pushStack(o.map(this,function(s,u){return t.call(s,u,s)}))},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(o.grep(this,function(t,s){return(s+1)%2}))},odd:function(){return this.pushStack(o.grep(this,function(t,s){return s%2}))},eq:function(t){var s=this.length,u=+t+(t<0?s:0);return this.pushStack(u>=0&&u<s?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:S,sort:a.sort,splice:a.splice},o.extend=o.fn.extend=function(){var t,s,u,l,d,p,m=arguments[0]||{},A=1,b=arguments.length,P=!1;for(typeof m=="boolean"&&(P=m,m=arguments[A]||{},A++),typeof m!="object"&&!G(m)&&(m={}),A===b&&(m=this,A--);A<b;A++)if((t=arguments[A])!=null)for(s in t)l=t[s],!(s==="__proto__"||m===l)&&(P&&l&&(o.isPlainObject(l)||(d=Array.isArray(l)))?(u=m[s],d&&!Array.isArray(u)?p=[]:!d&&!o.isPlainObject(u)?p={}:p=u,d=!1,m[s]=o.extend(P,p,l)):l!==void 0&&(m[s]=l));return m},o.extend({expando:"jQuery"+(Le+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var s,u;return!t||Y.call(t)!=="[object Object]"?!1:(s=h(t),s?(u=Z.call(s,"constructor")&&s.constructor,typeof u=="function"&&se.call(u)===be):!0)},isEmptyObject:function(t){var s;for(s in t)return!1;return!0},globalEval:function(t,s,u){we(t,{nonce:s&&s.nonce},u)},each:function(t,s){var u,l=0;if(I(t))for(u=t.length;l<u&&s.call(t[l],l,t[l])!==!1;l++);else for(l in t)if(s.call(t[l],l,t[l])===!1)break;return t},text:function(t){var s,u="",l=0,d=t.nodeType;if(!d)for(;s=t[l++];)u+=o.text(s);return d===1||d===11?t.textContent:d===9?t.documentElement.textContent:d===3||d===4?t.nodeValue:u},makeArray:function(t,s){var u=s||[];return t!=null&&(I(Object(t))?o.merge(u,typeof t=="string"?[t]:t):S.call(u,t)),u},inArray:function(t,s,u){return s==null?-1:R.call(s,t,u)},isXMLDoc:function(t){var s=t&&t.namespaceURI,u=t&&(t.ownerDocument||t).documentElement;return!Se.test(s||u&&u.nodeName||"HTML")},merge:function(t,s){for(var u=+s.length,l=0,d=t.length;l<u;l++)t[d++]=s[l];return t.length=d,t},grep:function(t,s,u){for(var l,d=[],p=0,m=t.length,A=!u;p<m;p++)l=!s(t[p],p),l!==A&&d.push(t[p]);return d},map:function(t,s,u){var l,d,p=0,m=[];if(I(t))for(l=t.length;p<l;p++)d=s(t[p],p,u),d!=null&&m.push(d);else for(p in t)d=s(t[p],p,u),d!=null&&m.push(d);return y(m)},guid:1,support:$}),typeof Symbol=="function"&&(o.fn[Symbol.iterator]=a[Symbol.iterator]),o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,s){F["[object "+s+"]"]=s.toLowerCase()});function I(t){var s=!!t&&"length"in t&&t.length,u=ve(t);return G(t)||oe(t)?!1:u==="array"||s===0||typeof s=="number"&&s>0&&s-1 in t}function _(t,s){return t.nodeName&&t.nodeName.toLowerCase()===s.toLowerCase()}var E=a.pop,k=a.sort,D=a.splice,w="[\\x20\\t\\r\\n\\f]",Me=new RegExp("^"+w+"+|((?:^|[^\\\\])(?:\\\\.)*)"+w+"+$","g");o.contains=function(t,s){var u=s&&s.parentNode;return t===u||!!(u&&u.nodeType===1&&(t.contains?t.contains(u):t.compareDocumentPosition&&t.compareDocumentPosition(u)&16))};var wt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function An(t,s){return s?t==="\0"?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}o.escapeSelector=function(t){return(t+"").replace(wt,An)};var Ne=K,Pe=S;(function(){var t,s,u,l,d,p=Pe,m,A,b,P,U,j=o.expando,x=0,B=0,ee=fn(),he=fn(),ne=fn(),xe=fn(),Re=function(T,C){return T===C&&(d=!0),0},rt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",st="(?:\\\\[\\da-fA-F]{1,6}"+w+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",te="\\["+w+"*("+st+")(?:"+w+"*([*^$|!~]?=)"+w+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+st+"))|)"+w+"*\\]",kt=":("+st+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+te+")*)|.*)\\)|)",pe=new RegExp(w+"+","g"),Te=new RegExp("^"+w+"*,"+w+"*"),n=new RegExp("^"+w+"*([>+~]|"+w+")"+w+"*"),c=new RegExp(w+"|>"),f=new RegExp(kt),v=new RegExp("^"+st+"$"),O={ID:new RegExp("^#("+st+")"),CLASS:new RegExp("^\\.("+st+")"),TAG:new RegExp("^("+st+"|[*])"),ATTR:new RegExp("^"+te),PSEUDO:new RegExp("^"+kt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+w+"*(even|odd|(([+-]|)(\\d*)n|)"+w+"*(?:([+-]|)"+w+"*(\\d+)|))"+w+"*\\)|)","i"),bool:new RegExp("^(?:"+rt+")$","i"),needsContext:new RegExp("^"+w+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+w+"*((?:-\\d)?\\d*)"+w+"*\\)|)(?=[^-]|$)","i")},L=/^(?:input|select|textarea|button)$/i,V=/^h\d$/i,ce=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Oe=/[+~]/,ue=new RegExp("\\\\[\\da-fA-F]{1,6}"+w+"?|\\\\([^\\r\\n\\f])","g"),Ie=function(T,C){var N="0x"+T.slice(1)-65536;return C||(N<0?String.fromCharCode(N+65536):String.fromCharCode(N>>10|55296,N&1023|56320))},Fe=function(){dn()},hn=yr(function(T){return T.disabled===!0&&_(T,"fieldset")},{dir:"parentNode",next:"legend"});function ot(){try{return m.activeElement}catch{}}try{p.apply(a=g.call(Ne.childNodes),Ne.childNodes),a[Ne.childNodes.length].nodeType}catch{p={apply:function(C,N){Pe.apply(C,g.call(N))},call:function(C){Pe.apply(C,g.call(arguments,1))}}}function ge(T,C,N,M){var H,q,W,J,z,fe,ie,ae=C&&C.ownerDocument,de=C?C.nodeType:9;if(N=N||[],typeof T!="string"||!T||de!==1&&de!==9&&de!==11)return N;if(!M&&(dn(C),C=C||m,b)){if(de!==11&&(z=ce.exec(T)))if(H=z[1]){if(de===9)if(W=C.getElementById(H)){if(W.id===H)return p.call(N,W),N}else return N;else if(ae&&(W=ae.getElementById(H))&&ge.contains(C,W)&&W.id===H)return p.call(N,W),N}else{if(z[2])return p.apply(N,C.getElementsByTagName(T)),N;if((H=z[3])&&C.getElementsByClassName)return p.apply(N,C.getElementsByClassName(H)),N}if(!xe[T+" "]&&(!P||!P.test(T))){if(ie=T,ae=C,de===1&&(c.test(T)||n.test(T))){for(ae=Oe.test(T)&&ns(C.parentNode)||C,(ae!=C||!$.scope)&&((J=C.getAttribute("id"))?J=o.escapeSelector(J):C.setAttribute("id",J=j)),fe=Hi(T),q=fe.length;q--;)fe[q]=(J?"#"+J:":scope")+" "+vr(fe[q]);ie=fe.join(",")}try{return p.apply(N,ae.querySelectorAll(ie)),N}catch{xe(T,!0)}finally{J===j&&C.removeAttribute("id")}}}return Ws(T.replace(Me,"$1"),C,N,M)}function fn(){var T=[];function C(N,M){return T.push(N+" ")>s.cacheLength&&delete C[T.shift()],C[N+" "]=M}return C}function vt(T){return T[j]=!0,T}function fi(T){var C=m.createElement("fieldset");try{return!!T(C)}catch{return!1}finally{C.parentNode&&C.parentNode.removeChild(C),C=null}}function Fa(T){return function(C){return _(C,"input")&&C.type===T}}function Ha(T){return function(C){return(_(C,"input")||_(C,"button"))&&C.type===T}}function $s(T){return function(C){return"form"in C?C.parentNode&&C.disabled===!1?"label"in C?"label"in C.parentNode?C.parentNode.disabled===T:C.disabled===T:C.isDisabled===T||C.isDisabled!==!T&&hn(C)===T:C.disabled===T:"label"in C?C.disabled===T:!1}}function Fn(T){return vt(function(C){return C=+C,vt(function(N,M){for(var H,q=T([],N.length,C),W=q.length;W--;)N[H=q[W]]&&(N[H]=!(M[H]=N[H]))})})}function ns(T){return T&&typeof T.getElementsByTagName<"u"&&T}function dn(T){var C,N=T?T.ownerDocument||T:Ne;return N==m||N.nodeType!==9||!N.documentElement||(m=N,A=m.documentElement,b=!o.isXMLDoc(m),U=A.matches||A.webkitMatchesSelector||A.msMatchesSelector,A.msMatchesSelector&&Ne!=m&&(C=m.defaultView)&&C.top!==C&&C.addEventListener("unload",Fe),$.getById=fi(function(M){return A.appendChild(M).id=o.expando,!m.getElementsByName||!m.getElementsByName(o.expando).length}),$.disconnectedMatch=fi(function(M){return U.call(M,"*")}),$.scope=fi(function(){return m.querySelectorAll(":scope")}),$.cssHas=fi(function(){try{return m.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),$.getById?(s.filter.ID=function(M){var H=M.replace(ue,Ie);return function(q){return q.getAttribute("id")===H}},s.find.ID=function(M,H){if(typeof H.getElementById<"u"&&b){var q=H.getElementById(M);return q?[q]:[]}}):(s.filter.ID=function(M){var H=M.replace(ue,Ie);return function(q){var W=typeof q.getAttributeNode<"u"&&q.getAttributeNode("id");return W&&W.value===H}},s.find.ID=function(M,H){if(typeof H.getElementById<"u"&&b){var q,W,J,z=H.getElementById(M);if(z){if(q=z.getAttributeNode("id"),q&&q.value===M)return[z];for(J=H.getElementsByName(M),W=0;z=J[W++];)if(q=z.getAttributeNode("id"),q&&q.value===M)return[z]}return[]}}),s.find.TAG=function(M,H){return typeof H.getElementsByTagName<"u"?H.getElementsByTagName(M):H.querySelectorAll(M)},s.find.CLASS=function(M,H){if(typeof H.getElementsByClassName<"u"&&b)return H.getElementsByClassName(M)},P=[],fi(function(M){var H;A.appendChild(M).innerHTML="<a id='"+j+"' href='' disabled='disabled'></a><select id='"+j+"-\r\\' disabled='disabled'><option selected=''></option></select>",M.querySelectorAll("[selected]").length||P.push("\\["+w+"*(?:value|"+rt+")"),M.querySelectorAll("[id~="+j+"-]").length||P.push("~="),M.querySelectorAll("a#"+j+"+*").length||P.push(".#.+[+~]"),M.querySelectorAll(":checked").length||P.push(":checked"),H=m.createElement("input"),H.setAttribute("type","hidden"),M.appendChild(H).setAttribute("name","D"),A.appendChild(M).disabled=!0,M.querySelectorAll(":disabled").length!==2&&P.push(":enabled",":disabled"),H=m.createElement("input"),H.setAttribute("name",""),M.appendChild(H),M.querySelectorAll("[name='']").length||P.push("\\["+w+"*name"+w+"*="+w+`*(?:''|"")`)}),$.cssHas||P.push(":has"),P=P.length&&new RegExp(P.join("|")),Re=function(M,H){if(M===H)return d=!0,0;var q=!M.compareDocumentPosition-!H.compareDocumentPosition;return q||(q=(M.ownerDocument||M)==(H.ownerDocument||H)?M.compareDocumentPosition(H):1,q&1||!$.sortDetached&&H.compareDocumentPosition(M)===q?M===m||M.ownerDocument==Ne&&ge.contains(Ne,M)?-1:H===m||H.ownerDocument==Ne&&ge.contains(Ne,H)?1:l?R.call(l,M)-R.call(l,H):0:q&4?-1:1)}),m}ge.matches=function(T,C){return ge(T,null,null,C)},ge.matchesSelector=function(T,C){if(dn(T),b&&!xe[C+" "]&&(!P||!P.test(C)))try{var N=U.call(T,C);if(N||$.disconnectedMatch||T.document&&T.document.nodeType!==11)return N}catch{xe(C,!0)}return ge(C,m,null,[T]).length>0},ge.contains=function(T,C){return(T.ownerDocument||T)!=m&&dn(T),o.contains(T,C)},ge.attr=function(T,C){(T.ownerDocument||T)!=m&&dn(T);var N=s.attrHandle[C.toLowerCase()],M=N&&Z.call(s.attrHandle,C.toLowerCase())?N(T,C,!b):void 0;return M!==void 0?M:T.getAttribute(C)},ge.error=function(T){throw new Error("Syntax error, unrecognized expression: "+T)},o.uniqueSort=function(T){var C,N=[],M=0,H=0;if(d=!$.sortStable,l=!$.sortStable&&g.call(T,0),k.call(T,Re),d){for(;C=T[H++];)C===T[H]&&(M=N.push(H));for(;M--;)D.call(T,N[M],1)}return l=null,T},o.fn.uniqueSort=function(){return this.pushStack(o.uniqueSort(g.apply(this)))},s=o.expr={cacheLength:50,createPseudo:vt,match:O,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(T){return T[1]=T[1].replace(ue,Ie),T[3]=(T[3]||T[4]||T[5]||"").replace(ue,Ie),T[2]==="~="&&(T[3]=" "+T[3]+" "),T.slice(0,4)},CHILD:function(T){return T[1]=T[1].toLowerCase(),T[1].slice(0,3)==="nth"?(T[3]||ge.error(T[0]),T[4]=+(T[4]?T[5]+(T[6]||1):2*(T[3]==="even"||T[3]==="odd")),T[5]=+(T[7]+T[8]||T[3]==="odd")):T[3]&&ge.error(T[0]),T},PSEUDO:function(T){var C,N=!T[6]&&T[2];return O.CHILD.test(T[0])?null:(T[3]?T[2]=T[4]||T[5]||"":N&&f.test(N)&&(C=Hi(N,!0))&&(C=N.indexOf(")",N.length-C)-N.length)&&(T[0]=T[0].slice(0,C),T[2]=N.slice(0,C)),T.slice(0,3))}},filter:{TAG:function(T){var C=T.replace(ue,Ie).toLowerCase();return T==="*"?function(){return!0}:function(N){return _(N,C)}},CLASS:function(T){var C=ee[T+" "];return C||(C=new RegExp("(^|"+w+")"+T+"("+w+"|$)"))&&ee(T,function(N){return C.test(typeof N.className=="string"&&N.className||typeof N.getAttribute<"u"&&N.getAttribute("class")||"")})},ATTR:function(T,C,N){return function(M){var H=ge.attr(M,T);return H==null?C==="!=":C?(H+="",C==="="?H===N:C==="!="?H!==N:C==="^="?N&&H.indexOf(N)===0:C==="*="?N&&H.indexOf(N)>-1:C==="$="?N&&H.slice(-N.length)===N:C==="~="?(" "+H.replace(pe," ")+" ").indexOf(N)>-1:C==="|="?H===N||H.slice(0,N.length+1)===N+"-":!1):!0}},CHILD:function(T,C,N,M,H){var q=T.slice(0,3)!=="nth",W=T.slice(-4)!=="last",J=C==="of-type";return M===1&&H===0?function(z){return!!z.parentNode}:function(z,fe,ie){var ae,de,Q,Ae,Ze,We=q!==W?"nextSibling":"previousSibling",pt=z.parentNode,Rt=J&&z.nodeName.toLowerCase(),di=!ie&&!J,Ke=!1;if(pt){if(q){for(;We;){for(Q=z;Q=Q[We];)if(J?_(Q,Rt):Q.nodeType===1)return!1;Ze=We=T==="only"&&!Ze&&"nextSibling"}return!0}if(Ze=[W?pt.firstChild:pt.lastChild],W&&di){for(de=pt[j]||(pt[j]={}),ae=de[T]||[],Ae=ae[0]===x&&ae[1],Ke=Ae&&ae[2],Q=Ae&&pt.childNodes[Ae];Q=++Ae&&Q&&Q[We]||(Ke=Ae=0)||Ze.pop();)if(Q.nodeType===1&&++Ke&&Q===z){de[T]=[x,Ae,Ke];break}}else if(di&&(de=z[j]||(z[j]={}),ae=de[T]||[],Ae=ae[0]===x&&ae[1],Ke=Ae),Ke===!1)for(;(Q=++Ae&&Q&&Q[We]||(Ke=Ae=0)||Ze.pop())&&!((J?_(Q,Rt):Q.nodeType===1)&&++Ke&&(di&&(de=Q[j]||(Q[j]={}),de[T]=[x,Ke]),Q===z)););return Ke-=H,Ke===M||Ke%M===0&&Ke/M>=0}}},PSEUDO:function(T,C){var N,M=s.pseudos[T]||s.setFilters[T.toLowerCase()]||ge.error("unsupported pseudo: "+T);return M[j]?M(C):M.length>1?(N=[T,T,"",C],s.setFilters.hasOwnProperty(T.toLowerCase())?vt(function(H,q){for(var W,J=M(H,C),z=J.length;z--;)W=R.call(H,J[z]),H[W]=!(q[W]=J[z])}):function(H){return M(H,0,N)}):M}},pseudos:{not:vt(function(T){var C=[],N=[],M=os(T.replace(Me,"$1"));return M[j]?vt(function(H,q,W,J){for(var z,fe=M(H,null,J,[]),ie=H.length;ie--;)(z=fe[ie])&&(H[ie]=!(q[ie]=z))}):function(H,q,W){return C[0]=H,M(C,null,W,N),C[0]=null,!N.pop()}}),has:vt(function(T){return function(C){return ge(T,C).length>0}}),contains:vt(function(T){return T=T.replace(ue,Ie),function(C){return(C.textContent||o.text(C)).indexOf(T)>-1}}),lang:vt(function(T){return v.test(T||"")||ge.error("unsupported lang: "+T),T=T.replace(ue,Ie).toLowerCase(),function(C){var N;do if(N=b?C.lang:C.getAttribute("xml:lang")||C.getAttribute("lang"))return N=N.toLowerCase(),N===T||N.indexOf(T+"-")===0;while((C=C.parentNode)&&C.nodeType===1);return!1}}),target:function(T){var C=e.location&&e.location.hash;return C&&C.slice(1)===T.id},root:function(T){return T===A},focus:function(T){return T===ot()&&m.hasFocus()&&!!(T.type||T.href||~T.tabIndex)},enabled:$s(!1),disabled:$s(!0),checked:function(T){return _(T,"input")&&!!T.checked||_(T,"option")&&!!T.selected},selected:function(T){return T.parentNode&&T.parentNode.selectedIndex,T.selected===!0},empty:function(T){for(T=T.firstChild;T;T=T.nextSibling)if(T.nodeType<6)return!1;return!0},parent:function(T){return!s.pseudos.empty(T)},header:function(T){return V.test(T.nodeName)},input:function(T){return L.test(T.nodeName)},button:function(T){return _(T,"input")&&T.type==="button"||_(T,"button")},text:function(T){var C;return _(T,"input")&&T.type==="text"&&((C=T.getAttribute("type"))==null||C.toLowerCase()==="text")},first:Fn(function(){return[0]}),last:Fn(function(T,C){return[C-1]}),eq:Fn(function(T,C,N){return[N<0?N+C:N]}),even:Fn(function(T,C){for(var N=0;N<C;N+=2)T.push(N);return T}),odd:Fn(function(T,C){for(var N=1;N<C;N+=2)T.push(N);return T}),lt:Fn(function(T,C,N){var M;for(N<0?M=N+C:N>C?M=C:M=N;--M>=0;)T.push(M);return T}),gt:Fn(function(T,C,N){for(var M=N<0?N+C:N;++M<C;)T.push(M);return T})}},s.pseudos.nth=s.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})s.pseudos[t]=Fa(t);for(t in{submit:!0,reset:!0})s.pseudos[t]=Ha(t);function qs(){}qs.prototype=s.filters=s.pseudos,s.setFilters=new qs;function Hi(T,C){var N,M,H,q,W,J,z,fe=he[T+" "];if(fe)return C?0:fe.slice(0);for(W=T,J=[],z=s.preFilter;W;){(!N||(M=Te.exec(W)))&&(M&&(W=W.slice(M[0].length)||W),J.push(H=[])),N=!1,(M=n.exec(W))&&(N=M.shift(),H.push({value:N,type:M[0].replace(Me," ")}),W=W.slice(N.length));for(q in s.filter)(M=O[q].exec(W))&&(!z[q]||(M=z[q](M)))&&(N=M.shift(),H.push({value:N,type:q,matches:M}),W=W.slice(N.length));if(!N)break}return C?W.length:W?ge.error(T):he(T,J).slice(0)}function vr(T){for(var C=0,N=T.length,M="";C<N;C++)M+=T[C].value;return M}function yr(T,C,N){var M=C.dir,H=C.next,q=H||M,W=N&&q==="parentNode",J=B++;return C.first?function(z,fe,ie){for(;z=z[M];)if(z.nodeType===1||W)return T(z,fe,ie);return!1}:function(z,fe,ie){var ae,de,Q=[x,J];if(ie){for(;z=z[M];)if((z.nodeType===1||W)&&T(z,fe,ie))return!0}else for(;z=z[M];)if(z.nodeType===1||W)if(de=z[j]||(z[j]={}),H&&_(z,H))z=z[M]||z;else{if((ae=de[q])&&ae[0]===x&&ae[1]===J)return Q[2]=ae[2];if(de[q]=Q,Q[2]=T(z,fe,ie))return!0}return!1}}function is(T){return T.length>1?function(C,N,M){for(var H=T.length;H--;)if(!T[H](C,N,M))return!1;return!0}:T[0]}function Ba(T,C,N){for(var M=0,H=C.length;M<H;M++)ge(T,C[M],N);return N}function _r(T,C,N,M,H){for(var q,W=[],J=0,z=T.length,fe=C!=null;J<z;J++)(q=T[J])&&(!N||N(q,M,H))&&(W.push(q),fe&&C.push(J));return W}function rs(T,C,N,M,H,q){return M&&!M[j]&&(M=rs(M)),H&&!H[j]&&(H=rs(H,q)),vt(function(W,J,z,fe){var ie,ae,de,Q,Ae=[],Ze=[],We=J.length,pt=W||Ba(C||"*",z.nodeType?[z]:z,[]),Rt=T&&(W||!C)?_r(pt,Ae,T,z,fe):pt;if(N?(Q=H||(W?T:We||M)?[]:J,N(Rt,Q,z,fe)):Q=Rt,M)for(ie=_r(Q,Ze),M(ie,[],z,fe),ae=ie.length;ae--;)(de=ie[ae])&&(Q[Ze[ae]]=!(Rt[Ze[ae]]=de));if(W){if(H||T){if(H){for(ie=[],ae=Q.length;ae--;)(de=Q[ae])&&ie.push(Rt[ae]=de);H(null,Q=[],ie,fe)}for(ae=Q.length;ae--;)(de=Q[ae])&&(ie=H?R.call(W,de):Ae[ae])>-1&&(W[ie]=!(J[ie]=de))}}else Q=_r(Q===J?Q.splice(We,Q.length):Q),H?H(null,J,Q,fe):p.apply(J,Q)})}function ss(T){for(var C,N,M,H=T.length,q=s.relative[T[0].type],W=q||s.relative[" "],J=q?1:0,z=yr(function(ae){return ae===C},W,!0),fe=yr(function(ae){return R.call(C,ae)>-1},W,!0),ie=[function(ae,de,Q){var Ae=!q&&(Q||de!=u)||((C=de).nodeType?z(ae,de,Q):fe(ae,de,Q));return C=null,Ae}];J<H;J++)if(N=s.relative[T[J].type])ie=[yr(is(ie),N)];else{if(N=s.filter[T[J].type].apply(null,T[J].matches),N[j]){for(M=++J;M<H&&!s.relative[T[M].type];M++);return rs(J>1&&is(ie),J>1&&vr(T.slice(0,J-1).concat({value:T[J-2].type===" "?"*":""})).replace(Me,"$1"),N,J<M&&ss(T.slice(J,M)),M<H&&ss(T=T.slice(M)),M<H&&vr(T))}ie.push(N)}return is(ie)}function Va(T,C){var N=C.length>0,M=T.length>0,H=function(q,W,J,z,fe){var ie,ae,de,Q=0,Ae="0",Ze=q&&[],We=[],pt=u,Rt=q||M&&s.find.TAG("*",fe),di=x+=pt==null?1:Math.random()||.1,Ke=Rt.length;for(fe&&(u=W==m||W||fe);Ae!==Ke&&(ie=Rt[Ae])!=null;Ae++){if(M&&ie){for(ae=0,!W&&ie.ownerDocument!=m&&(dn(ie),J=!b);de=T[ae++];)if(de(ie,W||m,J)){p.call(z,ie);break}fe&&(x=di)}N&&((ie=!de&&ie)&&Q--,q&&Ze.push(ie))}if(Q+=Ae,N&&Ae!==Q){for(ae=0;de=C[ae++];)de(Ze,We,W,J);if(q){if(Q>0)for(;Ae--;)Ze[Ae]||We[Ae]||(We[Ae]=E.call(z));We=_r(We)}p.apply(z,We),fe&&!q&&We.length>0&&Q+C.length>1&&o.uniqueSort(z)}return fe&&(x=di,u=pt),Ze};return N?vt(H):H}function os(T,C){var N,M=[],H=[],q=ne[T+" "];if(!q){for(C||(C=Hi(T)),N=C.length;N--;)q=ss(C[N]),q[j]?M.push(q):H.push(q);q=ne(T,Va(H,M)),q.selector=T}return q}function Ws(T,C,N,M){var H,q,W,J,z,fe=typeof T=="function"&&T,ie=!M&&Hi(T=fe.selector||T);if(N=N||[],ie.length===1){if(q=ie[0]=ie[0].slice(0),q.length>2&&(W=q[0]).type==="ID"&&C.nodeType===9&&b&&s.relative[q[1].type]){if(C=(s.find.ID(W.matches[0].replace(ue,Ie),C)||[])[0],C)fe&&(C=C.parentNode);else return N;T=T.slice(q.shift().value.length)}for(H=O.needsContext.test(T)?0:q.length;H--&&(W=q[H],!s.relative[J=W.type]);)if((z=s.find[J])&&(M=z(W.matches[0].replace(ue,Ie),Oe.test(q[0].type)&&ns(C.parentNode)||C))){if(q.splice(H,1),T=M.length&&vr(q),!T)return p.apply(N,M),N;break}}return(fe||os(T,ie))(M,C,!b,N,!C||Oe.test(T)&&ns(C.parentNode)||C),N}$.sortStable=j.split("").sort(Re).join("")===j,dn(),$.sortDetached=fi(function(T){return T.compareDocumentPosition(m.createElement("fieldset"))&1}),o.find=ge,o.expr[":"]=o.expr.pseudos,o.unique=o.uniqueSort,ge.compile=os,ge.select=Ws,ge.setDocument=dn,ge.tokenize=Hi,ge.escape=o.escapeSelector,ge.getText=o.text,ge.isXML=o.isXMLDoc,ge.selectors=o.expr,ge.support=o.support,ge.uniqueSort=o.uniqueSort})();var He=function(t,s,u){for(var l=[],d=u!==void 0;(t=t[s])&&t.nodeType!==9;)if(t.nodeType===1){if(d&&o(t).is(u))break;l.push(t)}return l},en=function(t,s){for(var u=[];t;t=t.nextSibling)t.nodeType===1&&t!==s&&u.push(t);return u},Wn=o.expr.match.needsContext,nt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function ke(t,s,u){return G(s)?o.grep(t,function(l,d){return!!s.call(l,d,l)!==u}):s.nodeType?o.grep(t,function(l){return l===s!==u}):typeof s!="string"?o.grep(t,function(l){return R.call(s,l)>-1!==u}):o.filter(s,t,u)}o.filter=function(t,s,u){var l=s[0];return u&&(t=":not("+t+")"),s.length===1&&l.nodeType===1?o.find.matchesSelector(l,t)?[l]:[]:o.find.matches(t,o.grep(s,function(d){return d.nodeType===1}))},o.fn.extend({find:function(t){var s,u,l=this.length,d=this;if(typeof t!="string")return this.pushStack(o(t).filter(function(){for(s=0;s<l;s++)if(o.contains(d[s],this))return!0}));for(u=this.pushStack([]),s=0;s<l;s++)o.find(t,d[s],u);return l>1?o.uniqueSort(u):u},filter:function(t){return this.pushStack(ke(this,t||[],!1))},not:function(t){return this.pushStack(ke(this,t||[],!0))},is:function(t){return!!ke(this,typeof t=="string"&&Wn.test(t)?o(t):t||[],!1).length}});var zn,Mt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ei=o.fn.init=function(t,s,u){var l,d;if(!t)return this;if(u=u||zn,typeof t=="string")if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?l=[null,t,null]:l=Mt.exec(t),l&&(l[1]||!s))if(l[1]){if(s=s instanceof o?s[0]:s,o.merge(this,o.parseHTML(l[1],s&&s.nodeType?s.ownerDocument||s:K,!0)),nt.test(l[1])&&o.isPlainObject(s))for(l in s)G(this[l])?this[l](s[l]):this.attr(l,s[l]);return this}else return d=K.getElementById(l[2]),d&&(this[0]=d,this.length=1),this;else return!s||s.jquery?(s||u).find(t):this.constructor(s).find(t);else{if(t.nodeType)return this[0]=t,this.length=1,this;if(G(t))return u.ready!==void 0?u.ready(t):t(o)}return o.makeArray(t,this)};Ei.prototype=o.fn,zn=o(K);var tn=/^(?:parents|prev(?:Until|All))/,bi={children:!0,contents:!0,next:!0,prev:!0};o.fn.extend({has:function(t){var s=o(t,this),u=s.length;return this.filter(function(){for(var l=0;l<u;l++)if(o.contains(this,s[l]))return!0})},closest:function(t,s){var u,l=0,d=this.length,p=[],m=typeof t!="string"&&o(t);if(!Wn.test(t)){for(;l<d;l++)for(u=this[l];u&&u!==s;u=u.parentNode)if(u.nodeType<11&&(m?m.index(u)>-1:u.nodeType===1&&o.find.matchesSelector(u,t))){p.push(u);break}}return this.pushStack(p.length>1?o.uniqueSort(p):p)},index:function(t){return t?typeof t=="string"?R.call(o(t),this[0]):R.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,s){return this.pushStack(o.uniqueSort(o.merge(this.get(),o(t,s))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function Gn(t,s){for(;(t=t[s])&&t.nodeType!==1;);return t}o.each({parent:function(t){var s=t.parentNode;return s&&s.nodeType!==11?s:null},parents:function(t){return He(t,"parentNode")},parentsUntil:function(t,s,u){return He(t,"parentNode",u)},next:function(t){return Gn(t,"nextSibling")},prev:function(t){return Gn(t,"previousSibling")},nextAll:function(t){return He(t,"nextSibling")},prevAll:function(t){return He(t,"previousSibling")},nextUntil:function(t,s,u){return He(t,"nextSibling",u)},prevUntil:function(t,s,u){return He(t,"previousSibling",u)},siblings:function(t){return en((t.parentNode||{}).firstChild,t)},children:function(t){return en(t.firstChild)},contents:function(t){return t.contentDocument!=null&&h(t.contentDocument)?t.contentDocument:(_(t,"template")&&(t=t.content||t),o.merge([],t.childNodes))}},function(t,s){o.fn[t]=function(u,l){var d=o.map(this,s,u);return t.slice(-5)!=="Until"&&(l=u),l&&typeof l=="string"&&(d=o.filter(l,d)),this.length>1&&(bi[t]||o.uniqueSort(d),tn.test(t)&&d.reverse()),this.pushStack(d)}});var Be=/[^\x20\t\r\n\f]+/g;function nn(t){var s={};return o.each(t.match(Be)||[],function(u,l){s[l]=!0}),s}o.Callbacks=function(t){t=typeof t=="string"?nn(t):o.extend({},t);var s,u,l,d,p=[],m=[],A=-1,b=function(){for(d=d||t.once,l=s=!0;m.length;A=-1)for(u=m.shift();++A<p.length;)p[A].apply(u[0],u[1])===!1&&t.stopOnFalse&&(A=p.length,u=!1);t.memory||(u=!1),s=!1,d&&(u?p=[]:p="")},P={add:function(){return p&&(u&&!s&&(A=p.length-1,m.push(u)),function U(j){o.each(j,function(x,B){G(B)?(!t.unique||!P.has(B))&&p.push(B):B&&B.length&&ve(B)!=="string"&&U(B)})}(arguments),u&&!s&&b()),this},remove:function(){return o.each(arguments,function(U,j){for(var x;(x=o.inArray(j,p,x))>-1;)p.splice(x,1),x<=A&&A--}),this},has:function(U){return U?o.inArray(U,p)>-1:p.length>0},empty:function(){return p&&(p=[]),this},disable:function(){return d=m=[],p=u="",this},disabled:function(){return!p},lock:function(){return d=m=[],!u&&!s&&(p=u=""),this},locked:function(){return!!d},fireWith:function(U,j){return d||(j=j||[],j=[U,j.slice?j.slice():j],m.push(j),s||b()),this},fire:function(){return P.fireWith(this,arguments),this},fired:function(){return!!l}};return P};function at(t){return t}function Ye(t){throw t}function rn(t,s,u,l){var d;try{t&&G(d=t.promise)?d.call(t).done(s).fail(u):t&&G(d=t.then)?d.call(t,s,u):s.apply(void 0,[t].slice(l))}catch(p){u.apply(void 0,[p])}}o.extend({Deferred:function(t){var s=[["notify","progress",o.Callbacks("memory"),o.Callbacks("memory"),2],["resolve","done",o.Callbacks("once memory"),o.Callbacks("once memory"),0,"resolved"],["reject","fail",o.Callbacks("once memory"),o.Callbacks("once memory"),1,"rejected"]],u="pending",l={state:function(){return u},always:function(){return d.done(arguments).fail(arguments),this},catch:function(p){return l.then(null,p)},pipe:function(){var p=arguments;return o.Deferred(function(m){o.each(s,function(A,b){var P=G(p[b[4]])&&p[b[4]];d[b[1]](function(){var U=P&&P.apply(this,arguments);U&&G(U.promise)?U.promise().progress(m.notify).done(m.resolve).fail(m.reject):m[b[0]+"With"](this,P?[U]:arguments)})}),p=null}).promise()},then:function(p,m,A){var b=0;function P(U,j,x,B){return function(){var ee=this,he=arguments,ne=function(){var Re,rt;if(!(U<b)){if(Re=x.apply(ee,he),Re===j.promise())throw new TypeError("Thenable self-resolution");rt=Re&&(typeof Re=="object"||typeof Re=="function")&&Re.then,G(rt)?B?rt.call(Re,P(b,j,at,B),P(b,j,Ye,B)):(b++,rt.call(Re,P(b,j,at,B),P(b,j,Ye,B),P(b,j,at,j.notifyWith))):(x!==at&&(ee=void 0,he=[Re]),(B||j.resolveWith)(ee,he))}},xe=B?ne:function(){try{ne()}catch(Re){o.Deferred.exceptionHook&&o.Deferred.exceptionHook(Re,xe.error),U+1>=b&&(x!==Ye&&(ee=void 0,he=[Re]),j.rejectWith(ee,he))}};U?xe():(o.Deferred.getErrorHook?xe.error=o.Deferred.getErrorHook():o.Deferred.getStackHook&&(xe.error=o.Deferred.getStackHook()),e.setTimeout(xe))}}return o.Deferred(function(U){s[0][3].add(P(0,U,G(A)?A:at,U.notifyWith)),s[1][3].add(P(0,U,G(p)?p:at)),s[2][3].add(P(0,U,G(m)?m:Ye))}).promise()},promise:function(p){return p!=null?o.extend(p,l):l}},d={};return o.each(s,function(p,m){var A=m[2],b=m[5];l[m[1]]=A.add,b&&A.add(function(){u=b},s[3-p][2].disable,s[3-p][3].disable,s[0][2].lock,s[0][3].lock),A.add(m[3].fire),d[m[0]]=function(){return d[m[0]+"With"](this===d?void 0:this,arguments),this},d[m[0]+"With"]=A.fireWith}),l.promise(d),t&&t.call(d,d),d},when:function(t){var s=arguments.length,u=s,l=Array(u),d=g.call(arguments),p=o.Deferred(),m=function(A){return function(b){l[A]=this,d[A]=arguments.length>1?g.call(arguments):b,--s||p.resolveWith(l,d)}};if(s<=1&&(rn(t,p.done(m(u)).resolve,p.reject,!s),p.state()==="pending"||G(d[u]&&d[u].then)))return p.then();for(;u--;)rn(d[u],m(u),p.reject);return p.promise()}});var Sn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;o.Deferred.exceptionHook=function(t,s){e.console&&e.console.warn&&t&&Sn.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,s)},o.readyException=function(t){e.setTimeout(function(){throw t})};var sn=o.Deferred();o.fn.ready=function(t){return sn.then(t).catch(function(s){o.readyException(s)}),this},o.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--o.readyWait:o.isReady)||(o.isReady=!0,!(t!==!0&&--o.readyWait>0)&&sn.resolveWith(K,[o]))}}),o.ready.then=sn.then;function le(){K.removeEventListener("DOMContentLoaded",le),e.removeEventListener("load",le),o.ready()}K.readyState==="complete"||K.readyState!=="loading"&&!K.documentElement.doScroll?e.setTimeout(o.ready):(K.addEventListener("DOMContentLoaded",le),e.addEventListener("load",le));var qe=function(t,s,u,l,d,p,m){var A=0,b=t.length,P=u==null;if(ve(u)==="object"){d=!0;for(A in u)qe(t,s,A,u[A],!0,p,m)}else if(l!==void 0&&(d=!0,G(l)||(m=!0),P&&(m?(s.call(t,l),s=null):(P=s,s=function(U,j,x){return P.call(o(U),x)})),s))for(;A<b;A++)s(t[A],u,m?l:l.call(t[A],A,s(t[A],u)));return d?t:P?s.call(t):b?s(t[0],u):p},Kn=/^-ms-/,Cn=/-([a-z])/g;function tr(t,s){return s.toUpperCase()}function ut(t){return t.replace(Kn,"ms-").replace(Cn,tr)}var Ut=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function jt(){this.expando=o.expando+jt.uid++}jt.uid=1,jt.prototype={cache:function(t){var s=t[this.expando];return s||(s={},Ut(t)&&(t.nodeType?t[this.expando]=s:Object.defineProperty(t,this.expando,{value:s,configurable:!0}))),s},set:function(t,s,u){var l,d=this.cache(t);if(typeof s=="string")d[ut(s)]=u;else for(l in s)d[ut(l)]=s[l];return d},get:function(t,s){return s===void 0?this.cache(t):t[this.expando]&&t[this.expando][ut(s)]},access:function(t,s,u){return s===void 0||s&&typeof s=="string"&&u===void 0?this.get(t,s):(this.set(t,s,u),u!==void 0?u:s)},remove:function(t,s){var u,l=t[this.expando];if(l!==void 0){if(s!==void 0)for(Array.isArray(s)?s=s.map(ut):(s=ut(s),s=s in l?[s]:s.match(Be)||[]),u=s.length;u--;)delete l[s[u]];(s===void 0||o.isEmptyObject(l))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var s=t[this.expando];return s!==void 0&&!o.isEmptyObject(s)}};var X=new jt,ye=new jt,Ve=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Xn=/[A-Z]/g;function nr(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:Ve.test(t)?JSON.parse(t):t}function Ii(t,s,u){var l;if(u===void 0&&t.nodeType===1)if(l="data-"+s.replace(Xn,"-$&").toLowerCase(),u=t.getAttribute(l),typeof u=="string"){try{u=nr(u)}catch{}ye.set(t,s,u)}else u=void 0;return u}o.extend({hasData:function(t){return ye.hasData(t)||X.hasData(t)},data:function(t,s,u){return ye.access(t,s,u)},removeData:function(t,s){ye.remove(t,s)},_data:function(t,s,u){return X.access(t,s,u)},_removeData:function(t,s){X.remove(t,s)}}),o.fn.extend({data:function(t,s){var u,l,d,p=this[0],m=p&&p.attributes;if(t===void 0){if(this.length&&(d=ye.get(p),p.nodeType===1&&!X.get(p,"hasDataAttrs"))){for(u=m.length;u--;)m[u]&&(l=m[u].name,l.indexOf("data-")===0&&(l=ut(l.slice(5)),Ii(p,l,d[l])));X.set(p,"hasDataAttrs",!0)}return d}return typeof t=="object"?this.each(function(){ye.set(this,t)}):qe(this,function(A){var b;if(p&&A===void 0)return b=ye.get(p,t),b!==void 0||(b=Ii(p,t),b!==void 0)?b:void 0;this.each(function(){ye.set(this,t,A)})},null,s,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){ye.remove(this,t)})}}),o.extend({queue:function(t,s,u){var l;if(t)return s=(s||"fx")+"queue",l=X.get(t,s),u&&(!l||Array.isArray(u)?l=X.access(t,s,o.makeArray(u)):l.push(u)),l||[]},dequeue:function(t,s){s=s||"fx";var u=o.queue(t,s),l=u.length,d=u.shift(),p=o._queueHooks(t,s),m=function(){o.dequeue(t,s)};d==="inprogress"&&(d=u.shift(),l--),d&&(s==="fx"&&u.unshift("inprogress"),delete p.stop,d.call(t,m,p)),!l&&p&&p.empty.fire()},_queueHooks:function(t,s){var u=s+"queueHooks";return X.get(t,u)||X.access(t,u,{empty:o.Callbacks("once memory").add(function(){X.remove(t,[s+"queue",u])})})}}),o.fn.extend({queue:function(t,s){var u=2;return typeof t!="string"&&(s=t,t="fx",u--),arguments.length<u?o.queue(this[0],t):s===void 0?this:this.each(function(){var l=o.queue(this,t,s);o._queueHooks(this,t),t==="fx"&&l[0]!=="inprogress"&&o.dequeue(this,t)})},dequeue:function(t){return this.each(function(){o.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,s){var u,l=1,d=o.Deferred(),p=this,m=this.length,A=function(){--l||d.resolveWith(p,[p])};for(typeof t!="string"&&(s=t,t=void 0),t=t||"fx";m--;)u=X.get(p[m],t+"queueHooks"),u&&u.empty&&(l++,u.empty.add(A));return A(),d.promise(s)}});var ir=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,gt=new RegExp("^(?:([+-])=|)("+ir+")([a-z%]*)$","i"),ct=["Top","Right","Bottom","Left"],Et=K.documentElement,bt=function(t){return o.contains(t.ownerDocument,t)},$r={composed:!0};Et.getRootNode&&(bt=function(t){return o.contains(t.ownerDocument,t)||t.getRootNode($r)===t.ownerDocument});var Jn=function(t,s){return t=s||t,t.style.display==="none"||t.style.display===""&&bt(t)&&o.css(t,"display")==="none"};function Yn(t,s,u,l){var d,p,m=20,A=l?function(){return l.cur()}:function(){return o.css(t,s,"")},b=A(),P=u&&u[3]||(o.cssNumber[s]?"":"px"),U=t.nodeType&&(o.cssNumber[s]||P!=="px"&&+b)&&gt.exec(o.css(t,s));if(U&&U[3]!==P){for(b=b/2,P=P||U[3],U=+b||1;m--;)o.style(t,s,U+P),(1-p)*(1-(p=A()/b||.5))<=0&&(m=0),U=U/p;U=U*2,o.style(t,s,U+P),u=u||[]}return u&&(U=+U||+b||0,d=u[1]?U+(u[1]+1)*u[2]:+u[2],l&&(l.unit=P,l.start=U,l.end=d)),d}var Ai={};function qr(t){var s,u=t.ownerDocument,l=t.nodeName,d=Ai[l];return d||(s=u.body.appendChild(u.createElement(l)),d=o.css(s,"display"),s.parentNode.removeChild(s),d==="none"&&(d="block"),Ai[l]=d,d)}function lt(t,s){for(var u,l,d=[],p=0,m=t.length;p<m;p++)l=t[p],l.style&&(u=l.style.display,s?(u==="none"&&(d[p]=X.get(l,"display")||null,d[p]||(l.style.display="")),l.style.display===""&&Jn(l)&&(d[p]=qr(l))):u!=="none"&&(d[p]="none",X.set(l,"display",u)));for(p=0;p<m;p++)d[p]!=null&&(t[p].style.display=d[p]);return t}o.fn.extend({show:function(){return lt(this,!0)},hide:function(){return lt(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){Jn(this)?o(this).show():o(this).hide()})}});var Ft=/^(?:checkbox|radio)$/i,Qn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ht=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=K.createDocumentFragment(),s=t.appendChild(K.createElement("div")),u=K.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),s.appendChild(u),$.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,s.innerHTML="<textarea>x</textarea>",$.noCloneChecked=!!s.cloneNode(!0).lastChild.defaultValue,s.innerHTML="<option></option>",$.option=!!s.lastChild})();var ze={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ze.tbody=ze.tfoot=ze.colgroup=ze.caption=ze.thead,ze.th=ze.td,$.option||(ze.optgroup=ze.option=[1,"<select multiple='multiple'>","</select>"]);function Ue(t,s){var u;return typeof t.getElementsByTagName<"u"?u=t.getElementsByTagName(s||"*"):typeof t.querySelectorAll<"u"?u=t.querySelectorAll(s||"*"):u=[],s===void 0||s&&_(t,s)?o.merge([t],u):u}function Zn(t,s){for(var u=0,l=t.length;u<l;u++)X.set(t[u],"globalEval",!s||X.get(s[u],"globalEval"))}var kn=/<|&#?\w+;/;function Si(t,s,u,l,d){for(var p,m,A,b,P,U,j=s.createDocumentFragment(),x=[],B=0,ee=t.length;B<ee;B++)if(p=t[B],p||p===0)if(ve(p)==="object")o.merge(x,p.nodeType?[p]:p);else if(!kn.test(p))x.push(s.createTextNode(p));else{for(m=m||j.appendChild(s.createElement("div")),A=(Qn.exec(p)||["",""])[1].toLowerCase(),b=ze[A]||ze._default,m.innerHTML=b[1]+o.htmlPrefilter(p)+b[2],U=b[0];U--;)m=m.lastChild;o.merge(x,m.childNodes),m=j.firstChild,m.textContent=""}for(j.textContent="",B=0;p=x[B++];){if(l&&o.inArray(p,l)>-1){d&&d.push(p);continue}if(P=bt(p),m=Ue(j.appendChild(p),"script"),P&&Zn(m),u)for(U=0;p=m[U++];)Ht.test(p.type||"")&&u.push(p)}return j}var je=/^([^.]*)(?:\.(.+)|)/;function Bt(){return!0}function ht(){return!1}function Vt(t,s,u,l,d,p){var m,A;if(typeof s=="object"){typeof u!="string"&&(l=l||u,u=void 0);for(A in s)Vt(t,A,u,l,s[A],p);return t}if(l==null&&d==null?(d=u,l=u=void 0):d==null&&(typeof u=="string"?(d=l,l=void 0):(d=l,l=u,u=void 0)),d===!1)d=ht;else if(!d)return t;return p===1&&(m=d,d=function(b){return o().off(b),m.apply(this,arguments)},d.guid=m.guid||(m.guid=o.guid++)),t.each(function(){o.event.add(this,s,d,l,u)})}o.event={global:{},add:function(t,s,u,l,d){var p,m,A,b,P,U,j,x,B,ee,he,ne=X.get(t);if(Ut(t))for(u.handler&&(p=u,u=p.handler,d=p.selector),d&&o.find.matchesSelector(Et,d),u.guid||(u.guid=o.guid++),(b=ne.events)||(b=ne.events=Object.create(null)),(m=ne.handle)||(m=ne.handle=function(xe){return typeof o<"u"&&o.event.triggered!==xe.type?o.event.dispatch.apply(t,arguments):void 0}),s=(s||"").match(Be)||[""],P=s.length;P--;)A=je.exec(s[P])||[],B=he=A[1],ee=(A[2]||"").split(".").sort(),B&&(j=o.event.special[B]||{},B=(d?j.delegateType:j.bindType)||B,j=o.event.special[B]||{},U=o.extend({type:B,origType:he,data:l,handler:u,guid:u.guid,selector:d,needsContext:d&&o.expr.match.needsContext.test(d),namespace:ee.join(".")},p),(x=b[B])||(x=b[B]=[],x.delegateCount=0,(!j.setup||j.setup.call(t,l,ee,m)===!1)&&t.addEventListener&&t.addEventListener(B,m)),j.add&&(j.add.call(t,U),U.handler.guid||(U.handler.guid=u.guid)),d?x.splice(x.delegateCount++,0,U):x.push(U),o.event.global[B]=!0)},remove:function(t,s,u,l,d){var p,m,A,b,P,U,j,x,B,ee,he,ne=X.hasData(t)&&X.get(t);if(!(!ne||!(b=ne.events))){for(s=(s||"").match(Be)||[""],P=s.length;P--;){if(A=je.exec(s[P])||[],B=he=A[1],ee=(A[2]||"").split(".").sort(),!B){for(B in b)o.event.remove(t,B+s[P],u,l,!0);continue}for(j=o.event.special[B]||{},B=(l?j.delegateType:j.bindType)||B,x=b[B]||[],A=A[2]&&new RegExp("(^|\\.)"+ee.join("\\.(?:.*\\.|)")+"(\\.|$)"),m=p=x.length;p--;)U=x[p],(d||he===U.origType)&&(!u||u.guid===U.guid)&&(!A||A.test(U.namespace))&&(!l||l===U.selector||l==="**"&&U.selector)&&(x.splice(p,1),U.selector&&x.delegateCount--,j.remove&&j.remove.call(t,U));m&&!x.length&&((!j.teardown||j.teardown.call(t,ee,ne.handle)===!1)&&o.removeEvent(t,B,ne.handle),delete b[B])}o.isEmptyObject(b)&&X.remove(t,"handle events")}},dispatch:function(t){var s,u,l,d,p,m,A=new Array(arguments.length),b=o.event.fix(t),P=(X.get(this,"events")||Object.create(null))[b.type]||[],U=o.event.special[b.type]||{};for(A[0]=b,s=1;s<arguments.length;s++)A[s]=arguments[s];if(b.delegateTarget=this,!(U.preDispatch&&U.preDispatch.call(this,b)===!1)){for(m=o.event.handlers.call(this,b,P),s=0;(d=m[s++])&&!b.isPropagationStopped();)for(b.currentTarget=d.elem,u=0;(p=d.handlers[u++])&&!b.isImmediatePropagationStopped();)(!b.rnamespace||p.namespace===!1||b.rnamespace.test(p.namespace))&&(b.handleObj=p,b.data=p.data,l=((o.event.special[p.origType]||{}).handle||p.handler).apply(d.elem,A),l!==void 0&&(b.result=l)===!1&&(b.preventDefault(),b.stopPropagation()));return U.postDispatch&&U.postDispatch.call(this,b),b.result}},handlers:function(t,s){var u,l,d,p,m,A=[],b=s.delegateCount,P=t.target;if(b&&P.nodeType&&!(t.type==="click"&&t.button>=1)){for(;P!==this;P=P.parentNode||this)if(P.nodeType===1&&!(t.type==="click"&&P.disabled===!0)){for(p=[],m={},u=0;u<b;u++)l=s[u],d=l.selector+" ",m[d]===void 0&&(m[d]=l.needsContext?o(d,this).index(P)>-1:o.find(d,this,null,[P]).length),m[d]&&p.push(l);p.length&&A.push({elem:P,handlers:p})}}return P=this,b<s.length&&A.push({elem:P,handlers:s.slice(b)}),A},addProp:function(t,s){Object.defineProperty(o.Event.prototype,t,{enumerable:!0,configurable:!0,get:G(s)?function(){if(this.originalEvent)return s(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(u){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(t){return t[o.expando]?t:new o.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var s=this||t;return Ft.test(s.type)&&s.click&&_(s,"input")&&ei(s,"click",!0),!1},trigger:function(t){var s=this||t;return Ft.test(s.type)&&s.click&&_(s,"input")&&ei(s,"click"),!0},_default:function(t){var s=t.target;return Ft.test(s.type)&&s.click&&_(s,"input")&&X.get(s,"click")||_(s,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};function ei(t,s,u){if(!u){X.get(t,s)===void 0&&o.event.add(t,s,Bt);return}X.set(t,s,!1),o.event.add(t,s,{namespace:!1,handler:function(l){var d,p=X.get(this,s);if(l.isTrigger&1&&this[s]){if(p)(o.event.special[s]||{}).delegateType&&l.stopPropagation();else if(p=g.call(arguments),X.set(this,s,p),this[s](),d=X.get(this,s),X.set(this,s,!1),p!==d)return l.stopImmediatePropagation(),l.preventDefault(),d}else p&&(X.set(this,s,o.event.trigger(p[0],p.slice(1),this)),l.stopPropagation(),l.isImmediatePropagationStopped=Bt)}})}o.removeEvent=function(t,s,u){t.removeEventListener&&t.removeEventListener(s,u)},o.Event=function(t,s){if(!(this instanceof o.Event))return new o.Event(t,s);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?Bt:ht,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,s&&o.extend(this,s),this.timeStamp=t&&t.timeStamp||Date.now(),this[o.expando]=!0},o.Event.prototype={constructor:o.Event,isDefaultPrevented:ht,isPropagationStopped:ht,isImmediatePropagationStopped:ht,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Bt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Bt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Bt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},o.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},o.event.addProp),o.each({focus:"focusin",blur:"focusout"},function(t,s){function u(l){if(K.documentMode){var d=X.get(this,"handle"),p=o.event.fix(l);p.type=l.type==="focusin"?"focus":"blur",p.isSimulated=!0,d(l),p.target===p.currentTarget&&d(p)}else o.event.simulate(s,l.target,o.event.fix(l))}o.event.special[t]={setup:function(){var l;if(ei(this,t,!0),K.documentMode)l=X.get(this,s),l||this.addEventListener(s,u),X.set(this,s,(l||0)+1);else return!1},trigger:function(){return ei(this,t),!0},teardown:function(){var l;if(K.documentMode)l=X.get(this,s)-1,l?X.set(this,s,l):(this.removeEventListener(s,u),X.remove(this,s));else return!1},_default:function(l){return X.get(l.target,t)},delegateType:s},o.event.special[s]={setup:function(){var l=this.ownerDocument||this.document||this,d=K.documentMode?this:l,p=X.get(d,s);p||(K.documentMode?this.addEventListener(s,u):l.addEventListener(t,u,!0)),X.set(d,s,(p||0)+1)},teardown:function(){var l=this.ownerDocument||this.document||this,d=K.documentMode?this:l,p=X.get(d,s)-1;p?X.set(d,s,p):(K.documentMode?this.removeEventListener(s,u):l.removeEventListener(t,u,!0),X.remove(d,s))}}}),o.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,s){o.event.special[t]={delegateType:s,bindType:s,handle:function(u){var l,d=this,p=u.relatedTarget,m=u.handleObj;return(!p||p!==d&&!o.contains(d,p))&&(u.type=m.origType,l=m.handler.apply(this,arguments),u.type=s),l}}}),o.fn.extend({on:function(t,s,u,l){return Vt(this,t,s,u,l)},one:function(t,s,u,l){return Vt(this,t,s,u,l,1)},off:function(t,s,u){var l,d;if(t&&t.preventDefault&&t.handleObj)return l=t.handleObj,o(t.delegateTarget).off(l.namespace?l.origType+"."+l.namespace:l.origType,l.selector,l.handler),this;if(typeof t=="object"){for(d in t)this.off(d,s,t[d]);return this}return(s===!1||typeof s=="function")&&(u=s,s=void 0),u===!1&&(u=ht),this.each(function(){o.event.remove(this,t,u,s)})}});var Wr=/<script|<style|<link/i,on=/checked\s*(?:[^=]|=\s*.checked.)/i,zr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function rr(t,s){return _(t,"table")&&_(s.nodeType!==11?s:s.firstChild,"tr")&&o(t).children("tbody")[0]||t}function Ci(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function Gr(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function ti(t,s){var u,l,d,p,m,A,b;if(s.nodeType===1){if(X.hasData(t)&&(p=X.get(t),b=p.events,b)){X.remove(s,"handle events");for(d in b)for(u=0,l=b[d].length;u<l;u++)o.event.add(s,d,b[d][u])}ye.hasData(t)&&(m=ye.access(t),A=o.extend({},m),ye.set(s,A))}}function ni(t,s){var u=s.nodeName.toLowerCase();u==="input"&&Ft.test(t.type)?s.checked=t.checked:(u==="input"||u==="textarea")&&(s.defaultValue=t.defaultValue)}function Ge(t,s,u,l){s=y(s);var d,p,m,A,b,P,U=0,j=t.length,x=j-1,B=s[0],ee=G(B);if(ee||j>1&&typeof B=="string"&&!$.checkClone&&on.test(B))return t.each(function(he){var ne=t.eq(he);ee&&(s[0]=B.call(this,he,ne.html())),Ge(ne,s,u,l)});if(j&&(d=Si(s,t[0].ownerDocument,!1,t,l),p=d.firstChild,d.childNodes.length===1&&(d=p),p||l)){for(m=o.map(Ue(d,"script"),Ci),A=m.length;U<j;U++)b=d,U!==x&&(b=o.clone(b,!0,!0),A&&o.merge(m,Ue(b,"script"))),u.call(t[U],b,U);if(A)for(P=m[m.length-1].ownerDocument,o.map(m,Gr),U=0;U<A;U++)b=m[U],Ht.test(b.type||"")&&!X.access(b,"globalEval")&&o.contains(P,b)&&(b.src&&(b.type||"").toLowerCase()!=="module"?o._evalUrl&&!b.noModule&&o._evalUrl(b.src,{nonce:b.nonce||b.getAttribute("nonce")},P):we(b.textContent.replace(zr,""),b,P))}return t}function ki(t,s,u){for(var l,d=s?o.filter(s,t):t,p=0;(l=d[p])!=null;p++)!u&&l.nodeType===1&&o.cleanData(Ue(l)),l.parentNode&&(u&&bt(l)&&Zn(Ue(l,"script")),l.parentNode.removeChild(l));return t}o.extend({htmlPrefilter:function(t){return t},clone:function(t,s,u){var l,d,p,m,A=t.cloneNode(!0),b=bt(t);if(!$.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!o.isXMLDoc(t))for(m=Ue(A),p=Ue(t),l=0,d=p.length;l<d;l++)ni(p[l],m[l]);if(s)if(u)for(p=p||Ue(t),m=m||Ue(A),l=0,d=p.length;l<d;l++)ti(p[l],m[l]);else ti(t,A);return m=Ue(A,"script"),m.length>0&&Zn(m,!b&&Ue(t,"script")),A},cleanData:function(t){for(var s,u,l,d=o.event.special,p=0;(u=t[p])!==void 0;p++)if(Ut(u)){if(s=u[X.expando]){if(s.events)for(l in s.events)d[l]?o.event.remove(u,l):o.removeEvent(u,l,s.handle);u[X.expando]=void 0}u[ye.expando]&&(u[ye.expando]=void 0)}}}),o.fn.extend({detach:function(t){return ki(this,t,!0)},remove:function(t){return ki(this,t)},text:function(t){return qe(this,function(s){return s===void 0?o.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=s)})},null,t,arguments.length)},append:function(){return Ge(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=rr(this,t);s.appendChild(t)}})},prepend:function(){return Ge(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=rr(this,t);s.insertBefore(t,s.firstChild)}})},before:function(){return Ge(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Ge(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,s=0;(t=this[s])!=null;s++)t.nodeType===1&&(o.cleanData(Ue(t,!1)),t.textContent="");return this},clone:function(t,s){return t=t??!1,s=s??t,this.map(function(){return o.clone(this,t,s)})},html:function(t){return qe(this,function(s){var u=this[0]||{},l=0,d=this.length;if(s===void 0&&u.nodeType===1)return u.innerHTML;if(typeof s=="string"&&!Wr.test(s)&&!ze[(Qn.exec(s)||["",""])[1].toLowerCase()]){s=o.htmlPrefilter(s);try{for(;l<d;l++)u=this[l]||{},u.nodeType===1&&(o.cleanData(Ue(u,!1)),u.innerHTML=s);u=0}catch{}}u&&this.empty().append(s)},null,t,arguments.length)},replaceWith:function(){var t=[];return Ge(this,arguments,function(s){var u=this.parentNode;o.inArray(this,t)<0&&(o.cleanData(Ue(this)),u&&u.replaceChild(s,this))},t)}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,s){o.fn[t]=function(u){for(var l,d=[],p=o(u),m=p.length-1,A=0;A<=m;A++)l=A===m?this:this.clone(!0),o(p[A])[s](l),S.apply(d,l.get());return this.pushStack(d)}});var ii=new RegExp("^("+ir+")(?!px)[a-z%]+$","i"),Rn=/^--/,an=function(t){var s=t.ownerDocument.defaultView;return(!s||!s.opener)&&(s=e),s.getComputedStyle(t)},Ri=function(t,s,u){var l,d,p={};for(d in s)p[d]=t.style[d],t.style[d]=s[d];l=u.call(t);for(d in s)t.style[d]=p[d];return l},sr=new RegExp(ct.join("|"),"i");(function(){function t(){if(P){b.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",P.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Et.appendChild(b).appendChild(P);var U=e.getComputedStyle(P);u=U.top!=="1%",A=s(U.marginLeft)===12,P.style.right="60%",p=s(U.right)===36,l=s(U.width)===36,P.style.position="absolute",d=s(P.offsetWidth/3)===12,Et.removeChild(b),P=null}}function s(U){return Math.round(parseFloat(U))}var u,l,d,p,m,A,b=K.createElement("div"),P=K.createElement("div");P.style&&(P.style.backgroundClip="content-box",P.cloneNode(!0).style.backgroundClip="",$.clearCloneStyle=P.style.backgroundClip==="content-box",o.extend($,{boxSizingReliable:function(){return t(),l},pixelBoxStyles:function(){return t(),p},pixelPosition:function(){return t(),u},reliableMarginLeft:function(){return t(),A},scrollboxSize:function(){return t(),d},reliableTrDimensions:function(){var U,j,x,B;return m==null&&(U=K.createElement("table"),j=K.createElement("tr"),x=K.createElement("div"),U.style.cssText="position:absolute;left:-11111px;border-collapse:separate",j.style.cssText="box-sizing:content-box;border:1px solid",j.style.height="1px",x.style.height="9px",x.style.display="block",Et.appendChild(U).appendChild(j).appendChild(x),B=e.getComputedStyle(j),m=parseInt(B.height,10)+parseInt(B.borderTopWidth,10)+parseInt(B.borderBottomWidth,10)===j.offsetHeight,Et.removeChild(U)),m}}))})();function Pn(t,s,u){var l,d,p,m,A=Rn.test(s),b=t.style;return u=u||an(t),u&&(m=u.getPropertyValue(s)||u[s],A&&m&&(m=m.replace(Me,"$1")||void 0),m===""&&!bt(t)&&(m=o.style(t,s)),!$.pixelBoxStyles()&&ii.test(m)&&sr.test(s)&&(l=b.width,d=b.minWidth,p=b.maxWidth,b.minWidth=b.maxWidth=b.width=m,m=u.width,b.width=l,b.minWidth=d,b.maxWidth=p)),m!==void 0?m+"":m}function On(t,s){return{get:function(){if(t()){delete this.get;return}return(this.get=s).apply(this,arguments)}}}var Pi=["Webkit","Moz","ms"],ri=K.createElement("div").style,un={};function $t(t){for(var s=t[0].toUpperCase()+t.slice(1),u=Pi.length;u--;)if(t=Pi[u]+s,t in ri)return t}function Dn(t){var s=o.cssProps[t]||un[t];return s||(t in ri?t:un[t]=$t(t)||t)}var Kr=/^(none|table(?!-c[ea]).+)/,or={position:"absolute",visibility:"hidden",display:"block"},Oi={letterSpacing:"0",fontWeight:"400"};function Di(t,s,u){var l=gt.exec(s);return l?Math.max(0,l[2]-(u||0))+(l[3]||"px"):s}function Nn(t,s,u,l,d,p){var m=s==="width"?1:0,A=0,b=0,P=0;if(u===(l?"border":"content"))return 0;for(;m<4;m+=2)u==="margin"&&(P+=o.css(t,u+ct[m],!0,d)),l?(u==="content"&&(b-=o.css(t,"padding"+ct[m],!0,d)),u!=="margin"&&(b-=o.css(t,"border"+ct[m]+"Width",!0,d))):(b+=o.css(t,"padding"+ct[m],!0,d),u!=="padding"?b+=o.css(t,"border"+ct[m]+"Width",!0,d):A+=o.css(t,"border"+ct[m]+"Width",!0,d));return!l&&p>=0&&(b+=Math.max(0,Math.ceil(t["offset"+s[0].toUpperCase()+s.slice(1)]-p-b-A-.5))||0),b+P}function si(t,s,u){var l=an(t),d=!$.boxSizingReliable()||u,p=d&&o.css(t,"boxSizing",!1,l)==="border-box",m=p,A=Pn(t,s,l),b="offset"+s[0].toUpperCase()+s.slice(1);if(ii.test(A)){if(!u)return A;A="auto"}return(!$.boxSizingReliable()&&p||!$.reliableTrDimensions()&&_(t,"tr")||A==="auto"||!parseFloat(A)&&o.css(t,"display",!1,l)==="inline")&&t.getClientRects().length&&(p=o.css(t,"boxSizing",!1,l)==="border-box",m=b in t,m&&(A=t[b])),A=parseFloat(A)||0,A+Nn(t,s,u||(p?"border":"content"),m,l,A)+"px"}o.extend({cssHooks:{opacity:{get:function(t,s){if(s){var u=Pn(t,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(t,s,u,l){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var d,p,m,A=ut(s),b=Rn.test(s),P=t.style;if(b||(s=Dn(A)),m=o.cssHooks[s]||o.cssHooks[A],u!==void 0){if(p=typeof u,p==="string"&&(d=gt.exec(u))&&d[1]&&(u=Yn(t,s,d),p="number"),u==null||u!==u)return;p==="number"&&!b&&(u+=d&&d[3]||(o.cssNumber[A]?"":"px")),!$.clearCloneStyle&&u===""&&s.indexOf("background")===0&&(P[s]="inherit"),(!m||!("set"in m)||(u=m.set(t,u,l))!==void 0)&&(b?P.setProperty(s,u):P[s]=u)}else return m&&"get"in m&&(d=m.get(t,!1,l))!==void 0?d:P[s]}},css:function(t,s,u,l){var d,p,m,A=ut(s),b=Rn.test(s);return b||(s=Dn(A)),m=o.cssHooks[s]||o.cssHooks[A],m&&"get"in m&&(d=m.get(t,!0,u)),d===void 0&&(d=Pn(t,s,l)),d==="normal"&&s in Oi&&(d=Oi[s]),u===""||u?(p=parseFloat(d),u===!0||isFinite(p)?p||0:d):d}}),o.each(["height","width"],function(t,s){o.cssHooks[s]={get:function(u,l,d){if(l)return Kr.test(o.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?Ri(u,or,function(){return si(u,s,d)}):si(u,s,d)},set:function(u,l,d){var p,m=an(u),A=!$.scrollboxSize()&&m.position==="absolute",b=A||d,P=b&&o.css(u,"boxSizing",!1,m)==="border-box",U=d?Nn(u,s,d,P,m):0;return P&&A&&(U-=Math.ceil(u["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(m[s])-Nn(u,s,"border",!1,m)-.5)),U&&(p=gt.exec(l))&&(p[3]||"px")!=="px"&&(u.style[s]=l,l=o.css(u,s)),Di(u,l,U)}}}),o.cssHooks.marginLeft=On($.reliableMarginLeft,function(t,s){if(s)return(parseFloat(Pn(t,"marginLeft"))||t.getBoundingClientRect().left-Ri(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),o.each({margin:"",padding:"",border:"Width"},function(t,s){o.cssHooks[t+s]={expand:function(u){for(var l=0,d={},p=typeof u=="string"?u.split(" "):[u];l<4;l++)d[t+ct[l]+s]=p[l]||p[l-2]||p[0];return d}},t!=="margin"&&(o.cssHooks[t+s].set=Di)}),o.fn.extend({css:function(t,s){return qe(this,function(u,l,d){var p,m,A={},b=0;if(Array.isArray(l)){for(p=an(u),m=l.length;b<m;b++)A[l[b]]=o.css(u,l[b],!1,p);return A}return d!==void 0?o.style(u,l,d):o.css(u,l)},t,s,arguments.length>1)}});function $e(t,s,u,l,d){return new $e.prototype.init(t,s,u,l,d)}o.Tween=$e,$e.prototype={constructor:$e,init:function(t,s,u,l,d,p){this.elem=t,this.prop=u,this.easing=d||o.easing._default,this.options=s,this.start=this.now=this.cur(),this.end=l,this.unit=p||(o.cssNumber[u]?"":"px")},cur:function(){var t=$e.propHooks[this.prop];return t&&t.get?t.get(this):$e.propHooks._default.get(this)},run:function(t){var s,u=$e.propHooks[this.prop];return this.options.duration?this.pos=s=o.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=s=t,this.now=(this.end-this.start)*s+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):$e.propHooks._default.set(this),this}},$e.prototype.init.prototype=$e.prototype,$e.propHooks={_default:{get:function(t){var s;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(s=o.css(t.elem,t.prop,""),!s||s==="auto"?0:s)},set:function(t){o.fx.step[t.prop]?o.fx.step[t.prop](t):t.elem.nodeType===1&&(o.cssHooks[t.prop]||t.elem.style[Dn(t.prop)]!=null)?o.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},$e.propHooks.scrollTop=$e.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},o.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},o.fx=$e.prototype.init,o.fx.step={};var qt,oi,Xr=/^(?:toggle|show|hide)$/,ar=/queueHooks$/;function ai(){oi&&(K.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(ai):e.setTimeout(ai,o.fx.interval),o.fx.tick())}function ur(){return e.setTimeout(function(){qt=void 0}),qt=Date.now()}function ft(t,s){var u,l=0,d={height:t};for(s=s?1:0;l<4;l+=2-s)u=ct[l],d["margin"+u]=d["padding"+u]=t;return s&&(d.opacity=d.width=t),d}function dt(t,s,u){for(var l,d=(Qe.tweeners[s]||[]).concat(Qe.tweeners["*"]),p=0,m=d.length;p<m;p++)if(l=d[p].call(u,s,t))return l}function ui(t,s,u){var l,d,p,m,A,b,P,U,j="width"in s||"height"in s,x=this,B={},ee=t.style,he=t.nodeType&&Jn(t),ne=X.get(t,"fxshow");u.queue||(m=o._queueHooks(t,"fx"),m.unqueued==null&&(m.unqueued=0,A=m.empty.fire,m.empty.fire=function(){m.unqueued||A()}),m.unqueued++,x.always(function(){x.always(function(){m.unqueued--,o.queue(t,"fx").length||m.empty.fire()})}));for(l in s)if(d=s[l],Xr.test(d)){if(delete s[l],p=p||d==="toggle",d===(he?"hide":"show"))if(d==="show"&&ne&&ne[l]!==void 0)he=!0;else continue;B[l]=ne&&ne[l]||o.style(t,l)}if(b=!o.isEmptyObject(s),!(!b&&o.isEmptyObject(B))){j&&t.nodeType===1&&(u.overflow=[ee.overflow,ee.overflowX,ee.overflowY],P=ne&&ne.display,P==null&&(P=X.get(t,"display")),U=o.css(t,"display"),U==="none"&&(P?U=P:(lt([t],!0),P=t.style.display||P,U=o.css(t,"display"),lt([t]))),(U==="inline"||U==="inline-block"&&P!=null)&&o.css(t,"float")==="none"&&(b||(x.done(function(){ee.display=P}),P==null&&(U=ee.display,P=U==="none"?"":U)),ee.display="inline-block")),u.overflow&&(ee.overflow="hidden",x.always(function(){ee.overflow=u.overflow[0],ee.overflowX=u.overflow[1],ee.overflowY=u.overflow[2]})),b=!1;for(l in B)b||(ne?"hidden"in ne&&(he=ne.hidden):ne=X.access(t,"fxshow",{display:P}),p&&(ne.hidden=!he),he&&lt([t],!0),x.done(function(){he||lt([t]),X.remove(t,"fxshow");for(l in B)o.style(t,l,B[l])})),b=dt(he?ne[l]:0,l,x),l in ne||(ne[l]=b.start,he&&(b.end=b.start,b.start=0))}}function ci(t,s){var u,l,d,p,m;for(u in t)if(l=ut(u),d=s[l],p=t[u],Array.isArray(p)&&(d=p[1],p=t[u]=p[0]),u!==l&&(t[l]=p,delete t[u]),m=o.cssHooks[l],m&&"expand"in m){p=m.expand(p),delete t[l];for(u in p)u in t||(t[u]=p[u],s[u]=d)}else s[l]=d}function Qe(t,s,u){var l,d,p=0,m=Qe.prefilters.length,A=o.Deferred().always(function(){delete b.elem}),b=function(){if(d)return!1;for(var j=qt||ur(),x=Math.max(0,P.startTime+P.duration-j),B=x/P.duration||0,ee=1-B,he=0,ne=P.tweens.length;he<ne;he++)P.tweens[he].run(ee);return A.notifyWith(t,[P,ee,x]),ee<1&&ne?x:(ne||A.notifyWith(t,[P,1,0]),A.resolveWith(t,[P]),!1)},P=A.promise({elem:t,props:o.extend({},s),opts:o.extend(!0,{specialEasing:{},easing:o.easing._default},u),originalProperties:s,originalOptions:u,startTime:qt||ur(),duration:u.duration,tweens:[],createTween:function(j,x){var B=o.Tween(t,P.opts,j,x,P.opts.specialEasing[j]||P.opts.easing);return P.tweens.push(B),B},stop:function(j){var x=0,B=j?P.tweens.length:0;if(d)return this;for(d=!0;x<B;x++)P.tweens[x].run(1);return j?(A.notifyWith(t,[P,1,0]),A.resolveWith(t,[P,j])):A.rejectWith(t,[P,j]),this}}),U=P.props;for(ci(U,P.opts.specialEasing);p<m;p++)if(l=Qe.prefilters[p].call(P,t,U,P.opts),l)return G(l.stop)&&(o._queueHooks(P.elem,P.opts.queue).stop=l.stop.bind(l)),l;return o.map(U,dt,P),G(P.opts.start)&&P.opts.start.call(t,P),P.progress(P.opts.progress).done(P.opts.done,P.opts.complete).fail(P.opts.fail).always(P.opts.always),o.fx.timer(o.extend(b,{elem:t,anim:P,queue:P.opts.queue})),P}o.Animation=o.extend(Qe,{tweeners:{"*":[function(t,s){var u=this.createTween(t,s);return Yn(u.elem,t,gt.exec(s),u),u}]},tweener:function(t,s){G(t)?(s=t,t=["*"]):t=t.match(Be);for(var u,l=0,d=t.length;l<d;l++)u=t[l],Qe.tweeners[u]=Qe.tweeners[u]||[],Qe.tweeners[u].unshift(s)},prefilters:[ui],prefilter:function(t,s){s?Qe.prefilters.unshift(t):Qe.prefilters.push(t)}}),o.speed=function(t,s,u){var l=t&&typeof t=="object"?o.extend({},t):{complete:u||!u&&s||G(t)&&t,duration:t,easing:u&&s||s&&!G(s)&&s};return o.fx.off?l.duration=0:typeof l.duration!="number"&&(l.duration in o.fx.speeds?l.duration=o.fx.speeds[l.duration]:l.duration=o.fx.speeds._default),(l.queue==null||l.queue===!0)&&(l.queue="fx"),l.old=l.complete,l.complete=function(){G(l.old)&&l.old.call(this),l.queue&&o.dequeue(this,l.queue)},l},o.fn.extend({fadeTo:function(t,s,u,l){return this.filter(Jn).css("opacity",0).show().end().animate({opacity:s},t,u,l)},animate:function(t,s,u,l){var d=o.isEmptyObject(t),p=o.speed(s,u,l),m=function(){var A=Qe(this,o.extend({},t),p);(d||X.get(this,"finish"))&&A.stop(!0)};return m.finish=m,d||p.queue===!1?this.each(m):this.queue(p.queue,m)},stop:function(t,s,u){var l=function(d){var p=d.stop;delete d.stop,p(u)};return typeof t!="string"&&(u=s,s=t,t=void 0),s&&this.queue(t||"fx",[]),this.each(function(){var d=!0,p=t!=null&&t+"queueHooks",m=o.timers,A=X.get(this);if(p)A[p]&&A[p].stop&&l(A[p]);else for(p in A)A[p]&&A[p].stop&&ar.test(p)&&l(A[p]);for(p=m.length;p--;)m[p].elem===this&&(t==null||m[p].queue===t)&&(m[p].anim.stop(u),d=!1,m.splice(p,1));(d||!u)&&o.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var s,u=X.get(this),l=u[t+"queue"],d=u[t+"queueHooks"],p=o.timers,m=l?l.length:0;for(u.finish=!0,o.queue(this,t,[]),d&&d.stop&&d.stop.call(this,!0),s=p.length;s--;)p[s].elem===this&&p[s].queue===t&&(p[s].anim.stop(!0),p.splice(s,1));for(s=0;s<m;s++)l[s]&&l[s].finish&&l[s].finish.call(this);delete u.finish})}}),o.each(["toggle","show","hide"],function(t,s){var u=o.fn[s];o.fn[s]=function(l,d,p){return l==null||typeof l=="boolean"?u.apply(this,arguments):this.animate(ft(s,!0),l,d,p)}}),o.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,s){o.fn[t]=function(u,l,d){return this.animate(s,u,l,d)}}),o.timers=[],o.fx.tick=function(){var t,s=0,u=o.timers;for(qt=Date.now();s<u.length;s++)t=u[s],!t()&&u[s]===t&&u.splice(s--,1);u.length||o.fx.stop(),qt=void 0},o.fx.timer=function(t){o.timers.push(t),o.fx.start()},o.fx.interval=13,o.fx.start=function(){oi||(oi=!0,ai())},o.fx.stop=function(){oi=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(t,s){return t=o.fx&&o.fx.speeds[t]||t,s=s||"fx",this.queue(s,function(u,l){var d=e.setTimeout(u,t);l.stop=function(){e.clearTimeout(d)}})},function(){var t=K.createElement("input"),s=K.createElement("select"),u=s.appendChild(K.createElement("option"));t.type="checkbox",$.checkOn=t.value!=="",$.optSelected=u.selected,t=K.createElement("input"),t.value="t",t.type="radio",$.radioValue=t.value==="t"}();var Ee,It=o.expr.attrHandle;o.fn.extend({attr:function(t,s){return qe(this,o.attr,t,s,arguments.length>1)},removeAttr:function(t){return this.each(function(){o.removeAttr(this,t)})}}),o.extend({attr:function(t,s,u){var l,d,p=t.nodeType;if(!(p===3||p===8||p===2)){if(typeof t.getAttribute>"u")return o.prop(t,s,u);if((p!==1||!o.isXMLDoc(t))&&(d=o.attrHooks[s.toLowerCase()]||(o.expr.match.bool.test(s)?Ee:void 0)),u!==void 0){if(u===null){o.removeAttr(t,s);return}return d&&"set"in d&&(l=d.set(t,u,s))!==void 0?l:(t.setAttribute(s,u+""),u)}return d&&"get"in d&&(l=d.get(t,s))!==null?l:(l=o.find.attr(t,s),l??void 0)}},attrHooks:{type:{set:function(t,s){if(!$.radioValue&&s==="radio"&&_(t,"input")){var u=t.value;return t.setAttribute("type",s),u&&(t.value=u),s}}}},removeAttr:function(t,s){var u,l=0,d=s&&s.match(Be);if(d&&t.nodeType===1)for(;u=d[l++];)t.removeAttribute(u)}}),Ee={set:function(t,s,u){return s===!1?o.removeAttr(t,u):t.setAttribute(u,u),u}},o.each(o.expr.match.bool.source.match(/\w+/g),function(t,s){var u=It[s]||o.find.attr;It[s]=function(l,d,p){var m,A,b=d.toLowerCase();return p||(A=It[b],It[b]=m,m=u(l,d,p)!=null?b:null,It[b]=A),m}});var xn=/^(?:input|select|textarea|button)$/i,Ln=/^(?:a|area)$/i;o.fn.extend({prop:function(t,s){return qe(this,o.prop,t,s,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[o.propFix[t]||t]})}}),o.extend({prop:function(t,s,u){var l,d,p=t.nodeType;if(!(p===3||p===8||p===2))return(p!==1||!o.isXMLDoc(t))&&(s=o.propFix[s]||s,d=o.propHooks[s]),u!==void 0?d&&"set"in d&&(l=d.set(t,u,s))!==void 0?l:t[s]=u:d&&"get"in d&&(l=d.get(t,s))!==null?l:t[s]},propHooks:{tabIndex:{get:function(t){var s=o.find.attr(t,"tabindex");return s?parseInt(s,10):xn.test(t.nodeName)||Ln.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),$.optSelected||(o.propHooks.selected={get:function(t){var s=t.parentNode;return s&&s.parentNode&&s.parentNode.selectedIndex,null},set:function(t){var s=t.parentNode;s&&(s.selectedIndex,s.parentNode&&s.parentNode.selectedIndex)}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});function Wt(t){var s=t.match(Be)||[];return s.join(" ")}function At(t){return t.getAttribute&&t.getAttribute("class")||""}function Ni(t){return Array.isArray(t)?t:typeof t=="string"?t.match(Be)||[]:[]}o.fn.extend({addClass:function(t){var s,u,l,d,p,m;return G(t)?this.each(function(A){o(this).addClass(t.call(this,A,At(this)))}):(s=Ni(t),s.length?this.each(function(){if(l=At(this),u=this.nodeType===1&&" "+Wt(l)+" ",u){for(p=0;p<s.length;p++)d=s[p],u.indexOf(" "+d+" ")<0&&(u+=d+" ");m=Wt(u),l!==m&&this.setAttribute("class",m)}}):this)},removeClass:function(t){var s,u,l,d,p,m;return G(t)?this.each(function(A){o(this).removeClass(t.call(this,A,At(this)))}):arguments.length?(s=Ni(t),s.length?this.each(function(){if(l=At(this),u=this.nodeType===1&&" "+Wt(l)+" ",u){for(p=0;p<s.length;p++)for(d=s[p];u.indexOf(" "+d+" ")>-1;)u=u.replace(" "+d+" "," ");m=Wt(u),l!==m&&this.setAttribute("class",m)}}):this):this.attr("class","")},toggleClass:function(t,s){var u,l,d,p,m=typeof t,A=m==="string"||Array.isArray(t);return G(t)?this.each(function(b){o(this).toggleClass(t.call(this,b,At(this),s),s)}):typeof s=="boolean"&&A?s?this.addClass(t):this.removeClass(t):(u=Ni(t),this.each(function(){if(A)for(p=o(this),d=0;d<u.length;d++)l=u[d],p.hasClass(l)?p.removeClass(l):p.addClass(l);else(t===void 0||m==="boolean")&&(l=At(this),l&&X.set(this,"__className__",l),this.setAttribute&&this.setAttribute("class",l||t===!1?"":X.get(this,"__className__")||""))}))},hasClass:function(t){var s,u,l=0;for(s=" "+t+" ";u=this[l++];)if(u.nodeType===1&&(" "+Wt(At(u))+" ").indexOf(s)>-1)return!0;return!1}});var Jr=/\r/g;o.fn.extend({val:function(t){var s,u,l,d=this[0];return arguments.length?(l=G(t),this.each(function(p){var m;this.nodeType===1&&(l?m=t.call(this,p,o(this).val()):m=t,m==null?m="":typeof m=="number"?m+="":Array.isArray(m)&&(m=o.map(m,function(A){return A==null?"":A+""})),s=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],(!s||!("set"in s)||s.set(this,m,"value")===void 0)&&(this.value=m))})):d?(s=o.valHooks[d.type]||o.valHooks[d.nodeName.toLowerCase()],s&&"get"in s&&(u=s.get(d,"value"))!==void 0?u:(u=d.value,typeof u=="string"?u.replace(Jr,""):u??"")):void 0}}),o.extend({valHooks:{option:{get:function(t){var s=o.find.attr(t,"value");return s??Wt(o.text(t))}},select:{get:function(t){var s,u,l,d=t.options,p=t.selectedIndex,m=t.type==="select-one",A=m?null:[],b=m?p+1:d.length;for(p<0?l=b:l=m?p:0;l<b;l++)if(u=d[l],(u.selected||l===p)&&!u.disabled&&(!u.parentNode.disabled||!_(u.parentNode,"optgroup"))){if(s=o(u).val(),m)return s;A.push(s)}return A},set:function(t,s){for(var u,l,d=t.options,p=o.makeArray(s),m=d.length;m--;)l=d[m],(l.selected=o.inArray(o.valHooks.option.get(l),p)>-1)&&(u=!0);return u||(t.selectedIndex=-1),p}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(t,s){if(Array.isArray(s))return t.checked=o.inArray(o(t).val(),s)>-1}},$.checkOn||(o.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})});var Mn=e.location,cr={guid:Date.now()},zt=/\?/;o.parseXML=function(t){var s,u;if(!t||typeof t!="string")return null;try{s=new e.DOMParser().parseFromString(t,"text/xml")}catch{}return u=s&&s.getElementsByTagName("parsererror")[0],(!s||u)&&o.error("Invalid XML: "+(u?o.map(u.childNodes,function(l){return l.textContent}).join(`
`):t)),s};var mt=/^(?:focusinfocus|focusoutblur)$/,xi=function(t){t.stopPropagation()};o.extend(o.event,{trigger:function(t,s,u,l){var d,p,m,A,b,P,U,j,x=[u||K],B=Z.call(t,"type")?t.type:t,ee=Z.call(t,"namespace")?t.namespace.split("."):[];if(p=j=m=u=u||K,!(u.nodeType===3||u.nodeType===8)&&!mt.test(B+o.event.triggered)&&(B.indexOf(".")>-1&&(ee=B.split("."),B=ee.shift(),ee.sort()),b=B.indexOf(":")<0&&"on"+B,t=t[o.expando]?t:new o.Event(B,typeof t=="object"&&t),t.isTrigger=l?2:3,t.namespace=ee.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+ee.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=u),s=s==null?[t]:o.makeArray(s,[t]),U=o.event.special[B]||{},!(!l&&U.trigger&&U.trigger.apply(u,s)===!1))){if(!l&&!U.noBubble&&!oe(u)){for(A=U.delegateType||B,mt.test(A+B)||(p=p.parentNode);p;p=p.parentNode)x.push(p),m=p;m===(u.ownerDocument||K)&&x.push(m.defaultView||m.parentWindow||e)}for(d=0;(p=x[d++])&&!t.isPropagationStopped();)j=p,t.type=d>1?A:U.bindType||B,P=(X.get(p,"events")||Object.create(null))[t.type]&&X.get(p,"handle"),P&&P.apply(p,s),P=b&&p[b],P&&P.apply&&Ut(p)&&(t.result=P.apply(p,s),t.result===!1&&t.preventDefault());return t.type=B,!l&&!t.isDefaultPrevented()&&(!U._default||U._default.apply(x.pop(),s)===!1)&&Ut(u)&&b&&G(u[B])&&!oe(u)&&(m=u[b],m&&(u[b]=null),o.event.triggered=B,t.isPropagationStopped()&&j.addEventListener(B,xi),u[B](),t.isPropagationStopped()&&j.removeEventListener(B,xi),o.event.triggered=void 0,m&&(u[b]=m)),t.result}},simulate:function(t,s,u){var l=o.extend(new o.Event,u,{type:t,isSimulated:!0});o.event.trigger(l,null,s)}}),o.fn.extend({trigger:function(t,s){return this.each(function(){o.event.trigger(t,s,this)})},triggerHandler:function(t,s){var u=this[0];if(u)return o.event.trigger(t,s,u,!0)}});var lr=/\[\]$/,Li=/\r?\n/g,cn=/^(?:submit|button|image|reset|file)$/i,Yr=/^(?:input|select|textarea|keygen)/i;function Mi(t,s,u,l){var d;if(Array.isArray(s))o.each(s,function(p,m){u||lr.test(t)?l(t,m):Mi(t+"["+(typeof m=="object"&&m!=null?p:"")+"]",m,u,l)});else if(!u&&ve(s)==="object")for(d in s)Mi(t+"["+d+"]",s[d],u,l);else l(t,s)}o.param=function(t,s){var u,l=[],d=function(p,m){var A=G(m)?m():m;l[l.length]=encodeURIComponent(p)+"="+encodeURIComponent(A??"")};if(t==null)return"";if(Array.isArray(t)||t.jquery&&!o.isPlainObject(t))o.each(t,function(){d(this.name,this.value)});else for(u in t)Mi(u,t[u],s,d);return l.join("&")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=o.prop(this,"elements");return t?o.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!o(this).is(":disabled")&&Yr.test(this.nodeName)&&!cn.test(t)&&(this.checked||!Ft.test(t))}).map(function(t,s){var u=o(this).val();return u==null?null:Array.isArray(u)?o.map(u,function(l){return{name:s.name,value:l.replace(Li,`\r
`)}}):{name:s.name,value:u.replace(Li,`\r
`)}}).get()}});var Qr=/%20/g,St=/#.*$/,Zr=/([?&])_=[^&]*/,es=/^(.*?):[ \t]*([^\r\n]*)$/mg,li=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,hi=/^(?:GET|HEAD)$/,hr=/^\/\//,ln={},Gt={},Ui="*/".concat("*"),Un=K.createElement("a");Un.href=Mn.href;function Ce(t){return function(s,u){typeof s!="string"&&(u=s,s="*");var l,d=0,p=s.toLowerCase().match(Be)||[];if(G(u))for(;l=p[d++];)l[0]==="+"?(l=l.slice(1)||"*",(t[l]=t[l]||[]).unshift(u)):(t[l]=t[l]||[]).push(u)}}function fr(t,s,u,l){var d={},p=t===Gt;function m(A){var b;return d[A]=!0,o.each(t[A]||[],function(P,U){var j=U(s,u,l);if(typeof j=="string"&&!p&&!d[j])return s.dataTypes.unshift(j),m(j),!1;if(p)return!(b=j)}),b}return m(s.dataTypes[0])||!d["*"]&&m("*")}function ji(t,s){var u,l,d=o.ajaxSettings.flatOptions||{};for(u in s)s[u]!==void 0&&((d[u]?t:l||(l={}))[u]=s[u]);return l&&o.extend(!0,t,l),t}function dr(t,s,u){for(var l,d,p,m,A=t.contents,b=t.dataTypes;b[0]==="*";)b.shift(),l===void 0&&(l=t.mimeType||s.getResponseHeader("Content-Type"));if(l){for(d in A)if(A[d]&&A[d].test(l)){b.unshift(d);break}}if(b[0]in u)p=b[0];else{for(d in u){if(!b[0]||t.converters[d+" "+b[0]]){p=d;break}m||(m=d)}p=p||m}if(p)return p!==b[0]&&b.unshift(p),u[p]}function pr(t,s,u,l){var d,p,m,A,b,P={},U=t.dataTypes.slice();if(U[1])for(m in t.converters)P[m.toLowerCase()]=t.converters[m];for(p=U.shift();p;)if(t.responseFields[p]&&(u[t.responseFields[p]]=s),!b&&l&&t.dataFilter&&(s=t.dataFilter(s,t.dataType)),b=p,p=U.shift(),p){if(p==="*")p=b;else if(b!=="*"&&b!==p){if(m=P[b+" "+p]||P["* "+p],!m){for(d in P)if(A=d.split(" "),A[1]===p&&(m=P[b+" "+A[0]]||P["* "+A[0]],m)){m===!0?m=P[d]:P[d]!==!0&&(p=A[0],U.unshift(A[1]));break}}if(m!==!0)if(m&&t.throws)s=m(s);else try{s=m(s)}catch(j){return{state:"parsererror",error:m?j:"No conversion from "+b+" to "+p}}}}return{state:"success",data:s}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Mn.href,type:"GET",isLocal:li.test(Mn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ui,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,s){return s?ji(ji(t,o.ajaxSettings),s):ji(o.ajaxSettings,t)},ajaxPrefilter:Ce(ln),ajaxTransport:Ce(Gt),ajax:function(t,s){typeof t=="object"&&(s=t,t=void 0),s=s||{};var u,l,d,p,m,A,b,P,U,j,x=o.ajaxSetup({},s),B=x.context||x,ee=x.context&&(B.nodeType||B.jquery)?o(B):o.event,he=o.Deferred(),ne=o.Callbacks("once memory"),xe=x.statusCode||{},Re={},rt={},st="canceled",te={readyState:0,getResponseHeader:function(pe){var Te;if(b){if(!p)for(p={};Te=es.exec(d);)p[Te[1].toLowerCase()+" "]=(p[Te[1].toLowerCase()+" "]||[]).concat(Te[2]);Te=p[pe.toLowerCase()+" "]}return Te==null?null:Te.join(", ")},getAllResponseHeaders:function(){return b?d:null},setRequestHeader:function(pe,Te){return b==null&&(pe=rt[pe.toLowerCase()]=rt[pe.toLowerCase()]||pe,Re[pe]=Te),this},overrideMimeType:function(pe){return b==null&&(x.mimeType=pe),this},statusCode:function(pe){var Te;if(pe)if(b)te.always(pe[te.status]);else for(Te in pe)xe[Te]=[xe[Te],pe[Te]];return this},abort:function(pe){var Te=pe||st;return u&&u.abort(Te),kt(0,Te),this}};if(he.promise(te),x.url=((t||x.url||Mn.href)+"").replace(hr,Mn.protocol+"//"),x.type=s.method||s.type||x.method||x.type,x.dataTypes=(x.dataType||"*").toLowerCase().match(Be)||[""],x.crossDomain==null){A=K.createElement("a");try{A.href=x.url,A.href=A.href,x.crossDomain=Un.protocol+"//"+Un.host!=A.protocol+"//"+A.host}catch{x.crossDomain=!0}}if(x.data&&x.processData&&typeof x.data!="string"&&(x.data=o.param(x.data,x.traditional)),fr(ln,x,s,te),b)return te;P=o.event&&x.global,P&&o.active++===0&&o.event.trigger("ajaxStart"),x.type=x.type.toUpperCase(),x.hasContent=!hi.test(x.type),l=x.url.replace(St,""),x.hasContent?x.data&&x.processData&&(x.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(x.data=x.data.replace(Qr,"+")):(j=x.url.slice(l.length),x.data&&(x.processData||typeof x.data=="string")&&(l+=(zt.test(l)?"&":"?")+x.data,delete x.data),x.cache===!1&&(l=l.replace(Zr,"$1"),j=(zt.test(l)?"&":"?")+"_="+cr.guid+++j),x.url=l+j),x.ifModified&&(o.lastModified[l]&&te.setRequestHeader("If-Modified-Since",o.lastModified[l]),o.etag[l]&&te.setRequestHeader("If-None-Match",o.etag[l])),(x.data&&x.hasContent&&x.contentType!==!1||s.contentType)&&te.setRequestHeader("Content-Type",x.contentType),te.setRequestHeader("Accept",x.dataTypes[0]&&x.accepts[x.dataTypes[0]]?x.accepts[x.dataTypes[0]]+(x.dataTypes[0]!=="*"?", "+Ui+"; q=0.01":""):x.accepts["*"]);for(U in x.headers)te.setRequestHeader(U,x.headers[U]);if(x.beforeSend&&(x.beforeSend.call(B,te,x)===!1||b))return te.abort();if(st="abort",ne.add(x.complete),te.done(x.success),te.fail(x.error),u=fr(Gt,x,s,te),!u)kt(-1,"No Transport");else{if(te.readyState=1,P&&ee.trigger("ajaxSend",[te,x]),b)return te;x.async&&x.timeout>0&&(m=e.setTimeout(function(){te.abort("timeout")},x.timeout));try{b=!1,u.send(Re,kt)}catch(pe){if(b)throw pe;kt(-1,pe)}}function kt(pe,Te,n,c){var f,v,O,L,V,ce=Te;b||(b=!0,m&&e.clearTimeout(m),u=void 0,d=c||"",te.readyState=pe>0?4:0,f=pe>=200&&pe<300||pe===304,n&&(L=dr(x,te,n)),!f&&o.inArray("script",x.dataTypes)>-1&&o.inArray("json",x.dataTypes)<0&&(x.converters["text script"]=function(){}),L=pr(x,L,te,f),f?(x.ifModified&&(V=te.getResponseHeader("Last-Modified"),V&&(o.lastModified[l]=V),V=te.getResponseHeader("etag"),V&&(o.etag[l]=V)),pe===204||x.type==="HEAD"?ce="nocontent":pe===304?ce="notmodified":(ce=L.state,v=L.data,O=L.error,f=!O)):(O=ce,(pe||!ce)&&(ce="error",pe<0&&(pe=0))),te.status=pe,te.statusText=(Te||ce)+"",f?he.resolveWith(B,[v,ce,te]):he.rejectWith(B,[te,ce,O]),te.statusCode(xe),xe=void 0,P&&ee.trigger(f?"ajaxSuccess":"ajaxError",[te,x,f?v:O]),ne.fireWith(B,[te,ce]),P&&(ee.trigger("ajaxComplete",[te,x]),--o.active||o.event.trigger("ajaxStop")))}return te},getJSON:function(t,s,u){return o.get(t,s,u,"json")},getScript:function(t,s){return o.get(t,void 0,s,"script")}}),o.each(["get","post"],function(t,s){o[s]=function(u,l,d,p){return G(l)&&(p=p||d,d=l,l=void 0),o.ajax(o.extend({url:u,type:s,dataType:p,data:l,success:d},o.isPlainObject(u)&&u))}}),o.ajaxPrefilter(function(t){var s;for(s in t.headers)s.toLowerCase()==="content-type"&&(t.contentType=t.headers[s]||"")}),o._evalUrl=function(t,s,u){return o.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(l){o.globalEval(l,s,u)}})},o.fn.extend({wrapAll:function(t){var s;return this[0]&&(G(t)&&(t=t.call(this[0])),s=o(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&s.insertBefore(this[0]),s.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(t){return G(t)?this.each(function(s){o(this).wrapInner(t.call(this,s))}):this.each(function(){var s=o(this),u=s.contents();u.length?u.wrapAll(t):s.append(t)})},wrap:function(t){var s=G(t);return this.each(function(u){o(this).wrapAll(s?t.call(this,u):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){o(this).replaceWith(this.childNodes)}),this}}),o.expr.pseudos.hidden=function(t){return!o.expr.pseudos.visible(t)},o.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},o.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var gr={0:200,1223:204},Ct=o.ajaxSettings.xhr();$.cors=!!Ct&&"withCredentials"in Ct,$.ajax=Ct=!!Ct,o.ajaxTransport(function(t){var s,u;if($.cors||Ct&&!t.crossDomain)return{send:function(l,d){var p,m=t.xhr();if(m.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(p in t.xhrFields)m[p]=t.xhrFields[p];t.mimeType&&m.overrideMimeType&&m.overrideMimeType(t.mimeType),!t.crossDomain&&!l["X-Requested-With"]&&(l["X-Requested-With"]="XMLHttpRequest");for(p in l)m.setRequestHeader(p,l[p]);s=function(A){return function(){s&&(s=u=m.onload=m.onerror=m.onabort=m.ontimeout=m.onreadystatechange=null,A==="abort"?m.abort():A==="error"?typeof m.status!="number"?d(0,"error"):d(m.status,m.statusText):d(gr[m.status]||m.status,m.statusText,(m.responseType||"text")!=="text"||typeof m.responseText!="string"?{binary:m.response}:{text:m.responseText},m.getAllResponseHeaders()))}},m.onload=s(),u=m.onerror=m.ontimeout=s("error"),m.onabort!==void 0?m.onabort=u:m.onreadystatechange=function(){m.readyState===4&&e.setTimeout(function(){s&&u()})},s=s("abort");try{m.send(t.hasContent&&t.data||null)}catch(A){if(s)throw A}},abort:function(){s&&s()}}}),o.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return o.globalEval(t),t}}}),o.ajaxPrefilter("script",function(t){t.cache===void 0&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),o.ajaxTransport("script",function(t){if(t.crossDomain||t.scriptAttrs){var s,u;return{send:function(l,d){s=o("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",u=function(p){s.remove(),u=null,p&&d(p.type==="error"?404:200,p.type)}),K.head.appendChild(s[0])},abort:function(){u&&u()}}}});var Fi=[],it=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Fi.pop()||o.expando+"_"+cr.guid++;return this[t]=!0,t}}),o.ajaxPrefilter("json jsonp",function(t,s,u){var l,d,p,m=t.jsonp!==!1&&(it.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&it.test(t.data)&&"data");if(m||t.dataTypes[0]==="jsonp")return l=t.jsonpCallback=G(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,m?t[m]=t[m].replace(it,"$1"+l):t.jsonp!==!1&&(t.url+=(zt.test(t.url)?"&":"?")+t.jsonp+"="+l),t.converters["script json"]=function(){return p||o.error(l+" was not called"),p[0]},t.dataTypes[0]="json",d=e[l],e[l]=function(){p=arguments},u.always(function(){d===void 0?o(e).removeProp(l):e[l]=d,t[l]&&(t.jsonpCallback=s.jsonpCallback,Fi.push(l)),p&&G(d)&&d(p[0]),p=d=void 0}),"script"}),$.createHTMLDocument=function(){var t=K.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",t.childNodes.length===2}(),o.parseHTML=function(t,s,u){if(typeof t!="string")return[];typeof s=="boolean"&&(u=s,s=!1);var l,d,p;return s||($.createHTMLDocument?(s=K.implementation.createHTMLDocument(""),l=s.createElement("base"),l.href=K.location.href,s.head.appendChild(l)):s=K),d=nt.exec(t),p=!u&&[],d?[s.createElement(d[1])]:(d=Si([t],s,p),p&&p.length&&o(p).remove(),o.merge([],d.childNodes))},o.fn.load=function(t,s,u){var l,d,p,m=this,A=t.indexOf(" ");return A>-1&&(l=Wt(t.slice(A)),t=t.slice(0,A)),G(s)?(u=s,s=void 0):s&&typeof s=="object"&&(d="POST"),m.length>0&&o.ajax({url:t,type:d||"GET",dataType:"html",data:s}).done(function(b){p=arguments,m.html(l?o("<div>").append(o.parseHTML(b)).find(l):b)}).always(u&&function(b,P){m.each(function(){u.apply(this,p||[b.responseText,P,b])})}),this},o.expr.pseudos.animated=function(t){return o.grep(o.timers,function(s){return t===s.elem}).length},o.offset={setOffset:function(t,s,u){var l,d,p,m,A,b,P,U=o.css(t,"position"),j=o(t),x={};U==="static"&&(t.style.position="relative"),A=j.offset(),p=o.css(t,"top"),b=o.css(t,"left"),P=(U==="absolute"||U==="fixed")&&(p+b).indexOf("auto")>-1,P?(l=j.position(),m=l.top,d=l.left):(m=parseFloat(p)||0,d=parseFloat(b)||0),G(s)&&(s=s.call(t,u,o.extend({},A))),s.top!=null&&(x.top=s.top-A.top+m),s.left!=null&&(x.left=s.left-A.left+d),"using"in s?s.using.call(t,x):j.css(x)}},o.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(d){o.offset.setOffset(this,t,d)});var s,u,l=this[0];if(l)return l.getClientRects().length?(s=l.getBoundingClientRect(),u=l.ownerDocument.defaultView,{top:s.top+u.pageYOffset,left:s.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,s,u,l=this[0],d={top:0,left:0};if(o.css(l,"position")==="fixed")s=l.getBoundingClientRect();else{for(s=this.offset(),u=l.ownerDocument,t=l.offsetParent||u.documentElement;t&&(t===u.body||t===u.documentElement)&&o.css(t,"position")==="static";)t=t.parentNode;t&&t!==l&&t.nodeType===1&&(d=o(t).offset(),d.top+=o.css(t,"borderTopWidth",!0),d.left+=o.css(t,"borderLeftWidth",!0))}return{top:s.top-d.top-o.css(l,"marginTop",!0),left:s.left-d.left-o.css(l,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&o.css(t,"position")==="static";)t=t.offsetParent;return t||Et})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,s){var u=s==="pageYOffset";o.fn[t]=function(l){return qe(this,function(d,p,m){var A;if(oe(d)?A=d:d.nodeType===9&&(A=d.defaultView),m===void 0)return A?A[s]:d[p];A?A.scrollTo(u?A.pageXOffset:m,u?m:A.pageYOffset):d[p]=m},t,l,arguments.length)}}),o.each(["top","left"],function(t,s){o.cssHooks[s]=On($.pixelPosition,function(u,l){if(l)return l=Pn(u,s),ii.test(l)?o(u).position()[s]+"px":l})}),o.each({Height:"height",Width:"width"},function(t,s){o.each({padding:"inner"+t,content:s,"":"outer"+t},function(u,l){o.fn[l]=function(d,p){var m=arguments.length&&(u||typeof d!="boolean"),A=u||(d===!0||p===!0?"margin":"border");return qe(this,function(b,P,U){var j;return oe(b)?l.indexOf("outer")===0?b["inner"+t]:b.document.documentElement["client"+t]:b.nodeType===9?(j=b.documentElement,Math.max(b.body["scroll"+t],j["scroll"+t],b.body["offset"+t],j["offset"+t],j["client"+t])):U===void 0?o.css(b,P,A):o.style(b,P,U,A)},s,m?d:void 0,m)}})}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,s){o.fn[s]=function(u){return this.on(s,u)}}),o.fn.extend({bind:function(t,s,u){return this.on(t,null,s,u)},unbind:function(t,s){return this.off(t,null,s)},delegate:function(t,s,u,l){return this.on(s,t,u,l)},undelegate:function(t,s,u){return arguments.length===1?this.off(t,"**"):this.off(s,t||"**",u)},hover:function(t,s){return this.on("mouseenter",t).on("mouseleave",s||t)}}),o.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,s){o.fn[s]=function(u,l){return arguments.length>0?this.on(s,null,u,l):this.trigger(s)}});var mr=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;o.proxy=function(t,s){var u,l,d;if(typeof s=="string"&&(u=t[s],s=t,t=u),!!G(t))return l=g.call(arguments,2),d=function(){return t.apply(s||this,l.concat(g.call(arguments)))},d.guid=t.guid=t.guid||o.guid++,d},o.holdReady=function(t){t?o.readyWait++:o.ready(!0)},o.isArray=Array.isArray,o.parseJSON=JSON.parse,o.nodeName=_,o.isFunction=G,o.isWindow=oe,o.camelCase=ut,o.type=ve,o.now=Date.now,o.isNumeric=function(t){var s=o.type(t);return(s==="number"||s==="string")&&!isNaN(t-parseFloat(t))},o.trim=function(t){return t==null?"":(t+"").replace(mr,"$1")};var ts=e.jQuery,jn=e.$;return o.noConflict=function(t){return e.$===o&&(e.$=jn),t&&e.jQuery===o&&(e.jQuery=ts),o},typeof i>"u"&&(e.jQuery=e.$=o),o})}(ms)),ms.exports}(function(r){(function(e){e(["jquery"],function(i){return function(){var a,h,g=0,y={error:"error",info:"info",success:"success",warning:"warning"},S={clear:G,remove:oe,error:F,getContainer:Y,info:Z,options:{},subscribe:se,success:be,version:"2.1.4",warning:$},R;return S;function F(_,E,k){return Se({type:y.error,iconClass:o().iconClasses.error,message:_,optionsOverride:k,title:E})}function Y(_,E){return _||(_=o()),a=i("#"+_.containerId),a.length||E&&(a=we(_)),a}function Z(_,E,k){return Se({type:y.info,iconClass:o().iconClasses.info,message:_,optionsOverride:k,title:E})}function se(_){h=_}function be(_,E,k){return Se({type:y.success,iconClass:o().iconClasses.success,message:_,optionsOverride:k,title:E})}function $(_,E,k){return Se({type:y.warning,iconClass:o().iconClasses.warning,message:_,optionsOverride:k,title:E})}function G(_,E){var k=o();a||Y(k),De(_,k,E)||K(k)}function oe(_){var E=o();if(a||Y(E),_&&i(":focus",_).length===0){I(_);return}a.children().length&&a.remove()}function K(_){for(var E=a.children(),k=E.length-1;k>=0;k--)De(i(E[k]),_)}function De(_,E,k){var D=k&&k.force?k.force:!1;return _&&(D||i(":focus",_).length===0)?(_[E.hideMethod]({duration:E.hideDuration,easing:E.hideEasing,complete:function(){I(_)}}),!0):!1}function we(_){return a=i("<div/>").attr("id",_.containerId).addClass(_.positionClass),a.appendTo(i(_.target)),a}function ve(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function Le(_){h&&h(_)}function Se(_){var E=o(),k=_.iconClass||E.iconClass;if(typeof _.optionsOverride<"u"&&(E=i.extend(E,_.optionsOverride),k=_.optionsOverride.iconClass||k),at(E,_))return;g++,a=Y(E,!0);var D=null,w=i("<div/>"),Me=i("<div/>"),wt=i("<div/>"),An=i("<div/>"),Ne=i(E.closeHtml),Pe={intervalId:null,hideEta:null,maxHideTime:null},He={toastId:g,state:"visible",startTime:new Date,options:E,map:_};return Wn(),zn(),ke(),Le(He),E.debug&&console&&console.log(He),w;function en(le){return le==null&&(le=""),le.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wn(){Mt(),tn(),bi(),Gn(),Be(),nn(),Ei(),nt()}function nt(){var le="";switch(_.iconClass){case"toast-success":case"toast-info":le="polite";break;default:le="assertive"}w.attr("aria-live",le)}function ke(){E.closeOnHover&&w.hover(Sn,rn),!E.onclick&&E.tapToDismiss&&w.click(Ye),E.closeButton&&Ne&&Ne.click(function(le){le.stopPropagation?le.stopPropagation():le.cancelBubble!==void 0&&le.cancelBubble!==!0&&(le.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(le),Ye(!0)}),E.onclick&&w.click(function(le){E.onclick(le),Ye()})}function zn(){w.hide(),w[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(D=setTimeout(Ye,E.timeOut),Pe.maxHideTime=parseFloat(E.timeOut),Pe.hideEta=new Date().getTime()+Pe.maxHideTime,E.progressBar&&(Pe.intervalId=setInterval(sn,10)))}function Mt(){_.iconClass&&w.addClass(E.toastClass).addClass(k)}function Ei(){E.newestOnTop?a.prepend(w):a.append(w)}function tn(){if(_.title){var le=_.title;E.escapeHtml&&(le=en(_.title)),Me.append(le).addClass(E.titleClass),w.append(Me)}}function bi(){if(_.message){var le=_.message;E.escapeHtml&&(le=en(_.message)),wt.append(le).addClass(E.messageClass),w.append(wt)}}function Gn(){E.closeButton&&(Ne.addClass(E.closeClass).attr("role","button"),w.prepend(Ne))}function Be(){E.progressBar&&(An.addClass(E.progressClass),w.prepend(An))}function nn(){E.rtl&&w.addClass("rtl")}function at(le,qe){if(le.preventDuplicates){if(qe.message===R)return!0;R=qe.message}return!1}function Ye(le){var qe=le&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,Kn=le&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,Cn=le&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!(i(":focus",w).length&&!le))return clearTimeout(Pe.intervalId),w[qe]({duration:Kn,easing:Cn,complete:function(){I(w),clearTimeout(D),E.onHidden&&He.state!=="hidden"&&E.onHidden(),He.state="hidden",He.endTime=new Date,Le(He)}})}function rn(){(E.timeOut>0||E.extendedTimeOut>0)&&(D=setTimeout(Ye,E.extendedTimeOut),Pe.maxHideTime=parseFloat(E.extendedTimeOut),Pe.hideEta=new Date().getTime()+Pe.maxHideTime)}function Sn(){clearTimeout(D),Pe.hideEta=0,w.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function sn(){var le=(Pe.hideEta-new Date().getTime())/Pe.maxHideTime*100;An.width(le+"%")}}function o(){return i.extend({},ve(),S.options)}function I(_){a||(a=Y()),!_.is(":visible")&&(_.remove(),_=null,a.children().length===0&&(a.remove(),R=void 0))}}()})})(function(e,i){r.exports?r.exports=i(Cf()):window.toastr=i(window.jQuery)})})(ja);var kf=ja.exports;const As=Sf(kf);As.options.positionClass="toast-bottom-right";const Rf=document.getElementById("loginForm");Rf.addEventListener("submit",async r=>{r.preventDefault();const e=document.getElementById("email").value,i=document.getElementById("password").value;try{const a=await If(e,i);As.success("Login successful! Redirecting to profile..."),window.location.href="Profile.html"}catch(a){As.warning("Error logging in: "+a.message)}});
