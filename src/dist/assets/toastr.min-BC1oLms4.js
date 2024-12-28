(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Ec={};/**
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
 */const Wl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Df=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],c=n[t++],f=n[t++],g=((i&7)<<18|(o&63)<<12|(c&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const o=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return e.join("")},Gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,f=c?n[i+1]:0,g=i+2<n.length,v=g?n[i+2]:0,I=o>>2,k=(o&3)<<4|f>>4;let V=(f&15)<<2|v>>6,H=v&63;g||(H=64,c||(V=64)),r.push(t[I],t[k],t[V],t[H])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Df(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],f=i<n.length?t[n.charAt(i)]:0;++i;const v=i<n.length?t[n.charAt(i)]:64;++i;const k=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||f==null||v==null||k==null)throw new Nf;const V=o<<2|f>>4;if(r.push(V),v!==64){const H=f<<4&240|v>>2;if(r.push(H),k!==64){const q=v<<6&192|k;r.push(q)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xf=function(n){const e=Wl(n);return Gl.encodeByteArray(e,!0)},Ro=function(n){return xf(n).replace(/\./g,"")},Kl=function(n){try{return Gl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Of(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vf=()=>Of().__FIREBASE_DEFAULTS__,Lf=()=>{if(typeof process>"u"||typeof Ec>"u")return;const n=Ec.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kl(n[1]);return e&&JSON.parse(e)},Wo=()=>{try{return Vf()||Lf()||Mf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ql=n=>{var e,t;return(t=(e=Wo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xl=n=>{const e=Ql(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Yl=()=>{var n;return(n=Wo())===null||n===void 0?void 0:n.config},Jl=n=>{var e;return(e=Wo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Uf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Zl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ro(JSON.stringify(t)),Ro(JSON.stringify(c)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Bf(){var n;const e=(n=Wo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $f(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zf(){return!Bf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Kf="FirebaseError";class yn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Kf,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],c=o?Qf(o,r):"Error",f=`${this.serviceName}: ${c} (${i}).`;return new yn(i,f,r)}}function Qf(n,e){return n.replace(Xf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xf=/\{\$([^}]+)}/g;function Yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Co(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],c=e[i];if(wc(o)&&wc(c)){if(!Co(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function wc(n){return n!==null&&typeof n=="object"}/**
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
 */function Rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jf(n,e){const t=new Zf(n,e);return t.subscribe.bind(t)}class Zf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ep(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Da),i.error===void 0&&(i.error=Da),i.complete===void 0&&(i.complete=Da);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ep(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Da(){}/**
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
 */function je(n){return n&&n._delegate?n._delegate:n}class lr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class tp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Uf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rp(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(o);r===f&&c.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&e(c,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:np(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function np(n){return n===Vr?void 0:n}function rp(n){return n.instantiationMode==="EAGER"}/**
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
 */class ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ce||(Ce={}));const sp={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},op=Ce.INFO,ap={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},up=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ap[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=op,this._logHandler=up,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const cp=(n,e)=>e.some(t=>n instanceof t);let Ic,Ac;function lp(){return Ic||(Ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hp(){return Ac||(Ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eh=new WeakMap,Wa=new WeakMap,th=new WeakMap,Na=new WeakMap,yu=new WeakMap;function dp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{t(ar(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&eh.set(t,n)}).catch(()=>{}),yu.set(e,n),e}function fp(n){if(Wa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Wa.set(n,e)}let Ga={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||th.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ar(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pp(n){Ga=n(Ga)}function gp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xa(this),e,...t);return th.set(r,e.sort?e.sort():[e]),ar(r)}:hp().includes(n)?function(...e){return n.apply(xa(this),e),ar(eh.get(this))}:function(...e){return ar(n.apply(xa(this),e))}}function mp(n){return typeof n=="function"?gp(n):(n instanceof IDBTransaction&&fp(n),cp(n,lp())?new Proxy(n,Ga):n)}function ar(n){if(n instanceof IDBRequest)return dp(n);if(Na.has(n))return Na.get(n);const e=mp(n);return e!==n&&(Na.set(n,e),yu.set(e,n)),e}const xa=n=>yu.get(n);function _p(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,e),f=ar(c);return r&&c.addEventListener("upgradeneeded",g=>{r(ar(c.result),g.oldVersion,g.newVersion,ar(c.transaction),g)}),t&&c.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{o&&g.addEventListener("close",()=>o()),i&&g.addEventListener("versionchange",v=>i(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const yp=["get","getKey","getAll","getAllKeys","count"],vp=["put","add","delete","clear"],Oa=new Map;function bc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=vp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yp.includes(t)))return;const o=async function(c,...f){const g=this.transaction(c,i?"readwrite":"readonly");let v=g.store;return r&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),i&&g.done]))[0]};return Oa.set(e,o),o}pp(n=>({...n,get:(e,t,r)=>bc(e,t)||n.get(e,t,r),has:(e,t)=>!!bc(e,t)||n.has(e,t)}));/**
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
 */class Tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ep(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ep(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ka="@firebase/app",Rc="0.10.16";/**
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
 */const Ln=new _u("@firebase/app"),wp="@firebase/app-compat",Ip="@firebase/analytics-compat",Ap="@firebase/analytics",bp="@firebase/app-check-compat",Rp="@firebase/app-check",Cp="@firebase/auth",Sp="@firebase/auth-compat",Pp="@firebase/database",kp="@firebase/data-connect",Dp="@firebase/database-compat",Np="@firebase/functions",xp="@firebase/functions-compat",Op="@firebase/installations",Vp="@firebase/installations-compat",Lp="@firebase/messaging",Mp="@firebase/messaging-compat",Up="@firebase/performance",Fp="@firebase/performance-compat",Bp="@firebase/remote-config",jp="@firebase/remote-config-compat",qp="@firebase/storage",Hp="@firebase/storage-compat",$p="@firebase/firestore",zp="@firebase/vertexai",Wp="@firebase/firestore-compat",Gp="firebase",Kp="11.0.2";/**
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
 */const Qa="[DEFAULT]",Qp={[Ka]:"fire-core",[wp]:"fire-core-compat",[Ap]:"fire-analytics",[Ip]:"fire-analytics-compat",[Rp]:"fire-app-check",[bp]:"fire-app-check-compat",[Cp]:"fire-auth",[Sp]:"fire-auth-compat",[Pp]:"fire-rtdb",[kp]:"fire-data-connect",[Dp]:"fire-rtdb-compat",[Np]:"fire-fn",[xp]:"fire-fn-compat",[Op]:"fire-iid",[Vp]:"fire-iid-compat",[Lp]:"fire-fcm",[Mp]:"fire-fcm-compat",[Up]:"fire-perf",[Fp]:"fire-perf-compat",[Bp]:"fire-rc",[jp]:"fire-rc-compat",[qp]:"fire-gcs",[Hp]:"fire-gcs-compat",[$p]:"fire-fst",[Wp]:"fire-fst-compat",[zp]:"fire-vertex","fire-js":"fire-js",[Gp]:"fire-js-all"};/**
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
 */const So=new Map,Xp=new Map,Xa=new Map;function Cc(n,e){try{n.container.addComponent(e)}catch(t){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fr(n){const e=n.name;if(Xa.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,n);for(const t of So.values())Cc(t,n);for(const t of Xp.values())Cc(t,n);return!0}function Go(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ln(n){return n.settings!==void 0}/**
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
 */const Yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new bs("app","Firebase",Yp);/**
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
 */class Jp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=Kp;function nh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(t||(t=Yl()),!t)throw ur.create("no-options");const o=So.get(i);if(o){if(Co(t,o.options)&&Co(r,o.config))return o;throw ur.create("duplicate-app",{appName:i})}const c=new ip(i);for(const g of Xa.values())c.addComponent(g);const f=new Jp(t,r,c);return So.set(i,f),f}function vu(n=Qa){const e=So.get(n);if(!e&&n===Qa&&Yl())return nh();if(!e)throw ur.create("no-app",{appName:n});return e}function dn(n,e,t){var r;let i=(r=Qp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const f=[`Unable to register library "${i}" with version "${e}":`];o&&f.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(f.join(" "));return}Fr(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zp="firebase-heartbeat-database",eg=1,ms="firebase-heartbeat-store";let Va=null;function rh(){return Va||(Va=_p(Zp,eg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ms)}catch(t){console.warn(t)}}}}).catch(n=>{throw ur.create("idb-open",{originalErrorMessage:n.message})})),Va}async function tg(n){try{const t=(await rh()).transaction(ms),r=await t.objectStore(ms).get(ih(n));return await t.done,r}catch(e){if(e instanceof yn)Ln.warn(e.message);else{const t=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(t.message)}}}async function Sc(n,e){try{const r=(await rh()).transaction(ms,"readwrite");await r.objectStore(ms).put(e,ih(n)),await r.done}catch(t){if(t instanceof yn)Ln.warn(t.message);else{const r=ur.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ln.warn(r.message)}}}function ih(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ng=1024,rg=30*24*60*60*1e3;class ig{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new og(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Pc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=rg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pc(),{heartbeatsToSend:r,unsentEntries:i}=sg(this._heartbeatsCache.heartbeats),o=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ln.warn(t),""}}}function Pc(){return new Date().toISOString().substring(0,10)}function sg(n,e=ng){const t=[];let r=n.slice();for(const i of n){const o=t.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),kc(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),kc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class og{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wf()?Gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kc(n){return Ro(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ag(n){Fr(new lr("platform-logger",e=>new Tp(e),"PRIVATE")),Fr(new lr("heartbeat",e=>new ig(e),"PRIVATE")),dn(Ka,Rc,n),dn(Ka,Rc,"esm2017"),dn("fire-js","")}ag("");var ug="firebase",cg="11.0.2";/**
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
 */dn(ug,cg,"app");function Tu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function sh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lg=sh,oh=new bs("auth","Firebase",sh());/**
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
 */const Po=new _u("@firebase/auth");function hg(n,...e){Po.logLevel<=Ce.WARN&&Po.warn(`Auth (${$r}): ${n}`,...e)}function go(n,...e){Po.logLevel<=Ce.ERROR&&Po.error(`Auth (${$r}): ${n}`,...e)}/**
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
 */function Jt(n,...e){throw Eu(n,...e)}function fn(n,...e){return Eu(n,...e)}function ah(n,e,t){const r=Object.assign(Object.assign({},lg()),{[e]:t});return new bs("auth","Firebase",r).create(e,{appName:n.name})}function On(n){return ah(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return oh.create(n,...e)}function he(n,e,...t){if(!n)throw Eu(e,...t)}function Dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw go(e),new Error(e)}function Mn(n,e){n||Dn(e)}/**
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
 */function Ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dg(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function fg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dg()||qf()||"connection"in navigator)?navigator.onLine:!0}function pg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Cs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mn(t>e,"Short delay should be less than long delay!"),this.isMobile=Ff()||Hf()}get(){return fg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wu(n,e){Mn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class uh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mg=new Cs(3e4,6e4);function Bn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function jn(n,e,t,r,i={}){return ch(n,i,async()=>{let o={},c={};r&&(e==="GET"?c=r:o={body:JSON.stringify(r)});const f=Rs(Object.assign({key:n.config.apiKey},c)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const v=Object.assign({method:e,headers:g},o);return jf()||(v.referrerPolicy="no-referrer"),uh.fetch()(lh(n,n.config.apiHost,t,f),v)})}async function ch(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gg),e);try{const i=new yg(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw oo(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const f=o.ok?c.errorMessage:c.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(n,"credential-already-in-use",c);if(g==="EMAIL_EXISTS")throw oo(n,"email-already-in-use",c);if(g==="USER_DISABLED")throw oo(n,"user-disabled",c);const I=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw ah(n,I,v);Jt(n,I)}}catch(i){if(i instanceof yn)throw i;Jt(n,"network-request-failed",{message:String(i)})}}async function Ss(n,e,t,r,i={}){const o=await jn(n,e,t,r,i);return"mfaPendingCredential"in o&&Jt(n,"multi-factor-auth-required",{_serverResponse:o}),o}function lh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?wu(n.config,i):`${n.config.apiScheme}://${i}`}function _g(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),mg.get())})}}function oo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=fn(n,e,r);return i.customData._tokenResponse=t,i}function Nc(n){return n!==void 0&&n.enterprise!==void 0}class vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _g(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tg(n,e){return jn(n,"GET","/v2/recaptchaConfig",Bn(n,e))}/**
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
 */async function Eg(n,e){return jn(n,"POST","/v1/accounts:delete",e)}async function hh(n,e){return jn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ls(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wg(n,e=!1){const t=je(n),r=await t.getIdToken(e),i=Iu(r);he(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ls(La(i.auth_time)),issuedAtTime:ls(La(i.iat)),expirationTime:ls(La(i.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function La(n){return Number(n)*1e3}function Iu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kl(t);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xc(n){const e=Iu(n);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _s(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yn&&Ig(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ig({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ag{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ja{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(n){var e;const t=n.auth,r=await n.getIdToken(),i=await _s(n,hh(t,{idToken:r}));he(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?dh(o.providerUserInfo):[],f=Rg(n.providerData,c),g=n.isAnonymous,v=!(n.email&&o.passwordHash)&&!(f!=null&&f.length),I=g?v:!1,k={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Ja(o.createdAt,o.lastLoginAt),isAnonymous:I};Object.assign(n,k)}async function bg(n){const e=je(n);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dh(n){return n.map(e=>{var{providerId:t}=e,r=Tu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Cg(n,e){const t=await ch(n,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,c=lh(n,i,"/v1/token",`key=${o}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",uh.fetch()(c,{method:"POST",headers:f,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Sg(n,e){return jn(n,"POST","/v2/accounts:revokeToken",Bn(n,e))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=xc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Cg(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,c=new Ii;return r&&(he(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(he(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),o&&(he(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function er(n,e){he(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ag(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ja(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await _s(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wg(this,e)}reload(){return bg(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await _s(this,Eg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,c,f,g,v,I;const k=(r=t.displayName)!==null&&r!==void 0?r:void 0,V=(i=t.email)!==null&&i!==void 0?i:void 0,H=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,q=(c=t.photoURL)!==null&&c!==void 0?c:void 0,K=(f=t.tenantId)!==null&&f!==void 0?f:void 0,Q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,J=(v=t.createdAt)!==null&&v!==void 0?v:void 0,_e=(I=t.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:de,emailVerified:pe,isAnonymous:qe,providerData:De,stsTokenManager:l}=t;he(de&&l,e,"internal-error");const S=Ii.fromJSON(this.name,l);he(typeof de=="string",e,"internal-error"),er(k,e.name),er(V,e.name),he(typeof pe=="boolean",e,"internal-error"),he(typeof qe=="boolean",e,"internal-error"),er(H,e.name),er(q,e.name),er(K,e.name),er(Q,e.name),er(J,e.name),er(_e,e.name);const w=new Nn({uid:de,auth:e,email:V,emailVerified:pe,displayName:k,isAnonymous:qe,photoURL:q,phoneNumber:H,tenantId:K,stsTokenManager:S,createdAt:J,lastLoginAt:_e});return De&&Array.isArray(De)&&(w.providerData=De.map(R=>Object.assign({},R))),Q&&(w._redirectEventId=Q),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ii;i.updateFromServerResponse(t);const o=new Nn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ko(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];he(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?dh(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),f=new Ii;f.updateFromIdToken(r);const g=new Nn({uid:i.localId,auth:e,stsTokenManager:f,isAnonymous:c}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ja(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(g,v),g}}/**
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
 */const Oc=new Map;function xn(n){Mn(n instanceof Function,"Expected a class definition");let e=Oc.get(n);return e?(Mn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Oc.set(n,e),e)}/**
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
 */class fh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fh.type="NONE";const Vc=fh;/**
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
 */function mo(n,e,t){return`firebase:${n}:${e}:${t}`}class Ai{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=mo(this.userKey,i.apiKey,o),this.fullPersistenceKey=mo("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ai(xn(Vc),e,r);const i=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let o=i[0]||xn(Vc);const c=mo(r,e.config.apiKey,e.name);let f=null;for(const v of t)try{const I=await v._get(c);if(I){const k=Nn._fromJSON(e,I);v!==o&&(f=k),o=v;break}}catch{}const g=i.filter(v=>v._shouldAllowMigration);return!o._shouldAllowMigration||!g.length?new Ai(o,e,r):(o=g[0],f&&await o._set(c,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==o)try{await v._remove(c)}catch{}})),new Ai(o,e,r))}}/**
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
 */function Lc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_h(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ph(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vh(e))return"Blackberry";if(Th(e))return"Webos";if(gh(e))return"Safari";if((e.includes("chrome/")||mh(e))&&!e.includes("edge/"))return"Chrome";if(yh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ph(n=wt()){return/firefox\//i.test(n)}function gh(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mh(n=wt()){return/crios\//i.test(n)}function _h(n=wt()){return/iemobile/i.test(n)}function yh(n=wt()){return/android/i.test(n)}function vh(n=wt()){return/blackberry/i.test(n)}function Th(n=wt()){return/webos/i.test(n)}function Au(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pg(n=wt()){var e;return Au(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kg(){return $f()&&document.documentMode===10}function Eh(n=wt()){return Au(n)||yh(n)||Th(n)||vh(n)||/windows phone/i.test(n)||_h(n)}/**
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
 */function wh(n,e=[]){let t;switch(n){case"Browser":t=Lc(wt());break;case"Worker":t=`${Lc(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$r}/${r}`}/**
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
 */class Dg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((c,f)=>{try{const g=e(o);c(g)}catch(g){f(g)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ng(n,e={}){return jn(n,"GET","/v2/passwordPolicy",Bn(n,e))}/**
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
 */const xg=6;class Og{constructor(e){var t,r,i,o;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:xg,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,c,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(r=g.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),g.isValid&&(g.isValid=(i=g.containsLowercaseLetter)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsUppercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(c=g.containsNumericCharacter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Vg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mc(this),this.idTokenSubscription=new Mc(this),this.beforeStateQueue=new Dg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hh(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ln(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(On(this));const t=e?je(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ng(this),t=new Og(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xn(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[xn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(f,this,"internal-error"),f.then(()=>{c||o(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,r,i);return()=>{c=!0,g()}}else{const g=e.addObserver(t);return()=>{c=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _r(n){return je(n)}class Mc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jf(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lg(n){Ko=n}function Ih(n){return Ko.loadJS(n)}function Mg(){return Ko.recaptchaEnterpriseScript}function Ug(){return Ko.gapiScript}function Fg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Bg{constructor(){this.enterprise=new jg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qg="recaptcha-enterprise",Ah="NO_RECAPTCHA";class Hg{constructor(e){this.type=qg,this.auth=_r(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(c,f)=>{Tg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new vg(g);return o.tenantId==null?o._agentRecaptchaConfig=v:o._tenantRecaptchaConfigs[o.tenantId]=v,c(v.siteKey)}}).catch(g=>{f(g)})})}function i(o,c,f){const g=window.grecaptcha;Nc(g)?g.enterprise.ready(()=>{g.enterprise.execute(o,{action:e}).then(v=>{c(v)}).catch(()=>{c(Ah)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bg().execute("siteKey",{action:"verify"}):new Promise((o,c)=>{r(this.auth).then(f=>{if(!t&&Nc(window.grecaptcha))i(f,o,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Mg();g.length!==0&&(g+=f),Ih(g).then(()=>{i(f,o,c)}).catch(v=>{c(v)})}}).catch(f=>{c(f)})})}}async function Uc(n,e,t,r=!1,i=!1){const o=new Hg(n);let c;if(i)c=Ah;else try{c=await o.verify(t)}catch{c=await o.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Do(n,e,t,r,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Uc(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Uc(n,e,t,t==="getOobCode");return r(n,f)}else return Promise.reject(c)})}/**
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
 */function $g(n,e){const t=Go(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Co(o,e??{}))return i;Jt(i,"already-initialized")}return t.initialize({options:e})}function zg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(xn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wg(n,e,t){const r=_r(n);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=bh(e),{host:c,port:f}=Gg(e),g=f===null?"":`:${f}`;r.config.emulator={url:`${o}//${c}${g}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:f,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Kg()}function bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gg(n){const e=bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Fc(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:Fc(c)}}}function Fc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,t){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function Qg(n,e){return jn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xg(n,e){return Ss(n,"POST","/v1/accounts:signInWithPassword",Bn(n,e))}async function Yg(n,e){return jn(n,"POST","/v1/accounts:sendOobCode",Bn(n,e))}async function Jg(n,e){return Yg(n,e)}/**
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
 */async function Zg(n,e){return Ss(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,e))}async function em(n,e){return Ss(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,e))}/**
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
 */class ys extends bu{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ys(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ys(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,t,"signInWithPassword",Xg);case"emailLink":return Zg(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,r,"signUpPassword",Qg);case"emailLink":return em(e,{idToken:t,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bi(n,e){return Ss(n,"POST","/v1/accounts:signInWithIdp",Bn(n,e))}/**
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
 */const tm="http://localhost";class Br extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Tu(t,["providerId","signInMethod"]);if(!r||!i)return null;const c=new Br(r,i);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return bi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bi(e,t)}buildRequest(){const e={requestUri:tm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rs(t)}return e}}/**
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
 */function nm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rm(n){const e=is(ss(n)).link,t=e?is(ss(e)).deep_link_id:null,r=is(ss(n)).deep_link_id;return(r?is(ss(r)).link:null)||r||t||e||n}class Ru{constructor(e){var t,r,i,o,c,f;const g=is(ss(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,I=(r=g.oobCode)!==null&&r!==void 0?r:null,k=nm((i=g.mode)!==null&&i!==void 0?i:null);he(v&&I&&k,"argument-error"),this.apiKey=v,this.operation=k,this.code=I,this.continueUrl=(o=g.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(c=g.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=rm(e);try{return new Ru(t)}catch{return null}}}/**
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
 */class Oi{constructor(){this.providerId=Oi.PROVIDER_ID}static credential(e,t){return ys._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ru.parseLink(t);return he(r,"argument-error"),ys._fromEmailAndCode(e,r.code,r.tenantId)}}Oi.PROVIDER_ID="password";Oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ps extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends Ps{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class nr extends Ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Br._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return nr.credential(t,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
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
 */class rr extends Ps{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
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
 */class ir extends Ps{constructor(){super("twitter.com")}static credential(e,t){return Br._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ir.credential(t,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */async function im(n,e){return Ss(n,"POST","/v1/accounts:signUp",Bn(n,e))}/**
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
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Nn._fromIdTokenResponse(e,r,i),c=Bc(r);return new jr({user:o,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Bc(r);return new jr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Bc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class No extends yn{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new No(e,t,r,i)}}function Ch(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(n,o,e,r):o})}async function sm(n,e,t=!1){const r=await _s(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jr._forOperation(n,"link",r)}/**
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
 */async function om(n,e,t=!1){const{auth:r}=n;if(ln(r.app))return Promise.reject(On(r));const i="reauthenticate";try{const o=await _s(n,Ch(r,i,e,n),t);he(o.idToken,r,"internal-error");const c=Iu(o.idToken);he(c,r,"internal-error");const{sub:f}=c;return he(n.uid===f,r,"user-mismatch"),jr._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),o}}/**
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
 */async function Sh(n,e,t=!1){if(ln(n.app))return Promise.reject(On(n));const r="signIn",i=await Ch(n,r,e),o=await jr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function am(n,e){return Sh(_r(n),e)}/**
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
 */async function Ph(n){const e=_r(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function um(n,e,t){const r=_r(n);await Do(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Jg)}async function $E(n,e,t){if(ln(n.app))return Promise.reject(On(n));const r=_r(n),c=await Do(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",im).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Ph(n),g}),f=await jr._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(f.user),f}function cm(n,e,t){return ln(n.app)?Promise.reject(On(n)):am(je(n),Oi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ph(n),r})}function lm(n,e,t,r){return je(n).onIdTokenChanged(e,t,r)}function hm(n,e,t){return je(n).beforeAuthStateChanged(e,t)}const xo="__sak";/**
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
 */class kh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dm=1e3,fm=10;class Dh extends kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,g)=>{this.notifyListeners(c,g)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);kg()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dh.type="LOCAL";const pm=Dh;/**
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
 */class Nh extends kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nh.type="SESSION";const xh=Nh;/**
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
 */function gm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const f=Array.from(c).map(async v=>v(t.origin,o)),g=await gm(f);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
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
 */function Cu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class mm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,c;return new Promise((f,g)=>{const v=Cu("",20);i.port1.start();const I=setTimeout(()=>{g(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(k){const V=k;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(I),o=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),f(V.data.response);break;default:clearTimeout(I),clearTimeout(o),g(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function pn(){return window}function _m(n){pn().location.href=n}/**
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
 */function Oh(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function ym(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Tm(){return Oh()?self:null}/**
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
 */const Vh="firebaseLocalStorageDb",Em=1,Oo="firebaseLocalStorage",Lh="fbase_key";class ks{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xo(n,e){return n.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function wm(){const n=indexedDB.deleteDatabase(Vh);return new ks(n).toPromise()}function Za(){const n=indexedDB.open(Vh,Em);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oo,{keyPath:Lh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await wm(),e(await Za()))})})}async function jc(n,e,t){const r=Xo(n,!0).put({[Lh]:e,value:t});return new ks(r).toPromise()}async function Im(n,e){const t=Xo(n,!1).get(e),r=await new ks(t).toPromise();return r===void 0?null:r.value}function qc(n,e){const t=Xo(n,!0).delete(e);return new ks(t).toPromise()}const Am=800,bm=3;class Mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Za(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(Tm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ym(),!this.activeServiceWorker)return;this.sender=new mm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Za();return await jc(e,xo,"1"),await qc(e,xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Im(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Xo(i,!1).getAll();return new ks(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mh.type="LOCAL";const Rm=Mh;new Cs(3e4,6e4);/**
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
 */function Cm(n,e){return e?xn(e):(he(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Su extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sm(n){return Sh(n.auth,new Su(n),n.bypassAuthState)}function Pm(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),om(t,new Su(n),n.bypassAuthState)}async function km(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),sm(t,new Su(n),n.bypassAuthState)}/**
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
 */class Uh{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:c,type:f}=e;if(c){this.reject(c);return}const g={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sm;case"linkViaPopup":case"linkViaRedirect":return km;case"reauthViaPopup":case"reauthViaRedirect":return Pm;default:Jt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Dm=new Cs(2e3,1e4);class wi extends Uh{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dm.get())};e()}}wi.currentPopupAction=null;/**
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
 */const Nm="pendingRedirect",_o=new Map;class xm extends Uh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await Om(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Om(n,e){const t=Mm(e),r=Lm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Vm(n,e){_o.set(n._key(),e)}function Lm(n){return xn(n._redirectPersistence)}function Mm(n){return mo(Nm,n.config.apiKey,n.name)}async function Um(n,e,t=!1){if(ln(n.app))return Promise.reject(On(n));const r=_r(n),i=Cm(r,e),c=await new xm(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const Fm=10*60*1e3;class Bm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Fh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(fn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hc(e))}saveEventToCache(e){this.cachedEventUids.add(Hc(e)),this.lastProcessedEventTime=Date.now()}}function Hc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fh(n);default:return!1}}/**
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
 */async function qm(n,e={}){return jn(n,"GET","/v1/projects",e)}/**
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
 */const Hm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$m=/^https?/;async function zm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qm(n);for(const t of e)try{if(Wm(t))return}catch{}Jt(n,"unauthorized-domain")}function Wm(n){const e=Ya(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!$m.test(t))return!1;if(Hm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Gm=new Cs(3e4,6e4);function $c(){const n=pn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Km(n){return new Promise((e,t)=>{var r,i,o;function c(){$c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$c(),t(fn(n,"network-request-failed"))},timeout:Gm.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=pn().gapi)===null||o===void 0)&&o.load)c();else{const f=Fg("iframefcb");return pn()[f]=()=>{gapi.load?c():t(fn(n,"network-request-failed"))},Ih(`${Ug()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw yo=null,e})}let yo=null;function Qm(n){return yo=yo||Km(n),yo}/**
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
 */const Xm=new Cs(5e3,15e3),Ym="__/auth/iframe",Jm="emulator/auth/iframe",Zm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t_(n){const e=n.config;he(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wu(e,Jm):`https://${n.config.authDomain}/${Ym}`,r={apiKey:e.apiKey,appName:n.name,v:$r},i=e_.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Rs(r).slice(1)}`}async function n_(n){const e=await Qm(n),t=pn().gapi;return he(t,n,"internal-error"),e.open({where:document.body,url:t_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zm,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const c=fn(n,"network-request-failed"),f=pn().setTimeout(()=>{o(c)},Xm.get());function g(){pn().clearTimeout(f),i(r)}r.ping(g).then(g,()=>{o(c)})}))}/**
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
 */const r_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i_=500,s_=600,o_="_blank",a_="http://localhost";class zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u_(n,e,t,r=i_,i=s_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const g=Object.assign(Object.assign({},r_),{width:r.toString(),height:i.toString(),top:o,left:c}),v=wt().toLowerCase();t&&(f=mh(v)?o_:t),ph(v)&&(e=e||a_,g.scrollbars="yes");const I=Object.entries(g).reduce((V,[H,q])=>`${V}${H}=${q},`,"");if(Pg(v)&&f!=="_self")return c_(e||"",f),new zc(null);const k=window.open(e||"",f,I);he(k,n,"popup-blocked");try{k.focus()}catch{}return new zc(k)}function c_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const l_="__/auth/handler",h_="emulator/auth/handler",d_=encodeURIComponent("fac");async function Wc(n,e,t,r,i,o){he(n.config.authDomain,n,"auth-domain-config-required"),he(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$r,eventId:i};if(e instanceof Rh){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Yf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,k]of Object.entries({}))c[I]=k}if(e instanceof Ps){const I=e.getScopes().filter(k=>k!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const I of Object.keys(f))f[I]===void 0&&delete f[I];const g=await n._getAppCheckToken(),v=g?`#${d_}=${encodeURIComponent(g)}`:"";return`${f_(n)}?${Rs(f).slice(1)}${v}`}function f_({config:n}){return n.emulator?wu(n,h_):`https://${n.authDomain}/${l_}`}/**
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
 */const Ma="webStorageSupport";class p_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xh,this._completeRedirectFn=Um,this._overrideRedirectResult=Vm}async _openPopup(e,t,r,i){var o;Mn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await Wc(e,t,r,Ya(),i);return u_(e,c,Cu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Wc(e,t,r,Ya(),i);return _m(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Mn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await n_(e),r=new Bm(e);return t.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ma,{type:Ma},i=>{var o;const c=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ma];c!==void 0&&t(!!c),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Eh()||gh()||Au()}}const g_=p_;var Gc="@firebase/auth",Kc="1.8.1";/**
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
 */class m_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function __(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y_(n){Fr(new lr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=r.options;he(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wh(n)},v=new Vg(r,i,o,g);return zg(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new lr("auth-internal",e=>{const t=_r(e.getProvider("auth").getImmediate());return(r=>new m_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Gc,Kc,__(n)),dn(Gc,Kc,"esm2017")}/**
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
 */const v_=5*60,T_=Jl("authIdTokenMaxAge")||v_;let Qc=null;const E_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>T_)return;const i=t==null?void 0:t.token;Qc!==i&&(Qc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bh(n=vu()){const e=Go(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$g(n,{popupRedirectResolver:g_,persistence:[Rm,pm,xh]}),r=Jl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const c=E_(o.toString());hm(t,c,()=>c(t.currentUser)),lm(t,f=>c(f))}}const i=Ql("auth");return i&&Wg(t,`http://${i}`),t}function w_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Lg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=fn("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",w_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y_("Browser");var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,jh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,S){function w(){}w.prototype=S.prototype,l.D=S.prototype,l.prototype=new w,l.prototype.constructor=l,l.C=function(R,N,L){for(var b=Array(arguments.length-2),it=2;it<arguments.length;it++)b[it-2]=arguments[it];return S.prototype[N].apply(R,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,S,w){w||(w=0);var R=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)R[N]=S.charCodeAt(w++)|S.charCodeAt(w++)<<8|S.charCodeAt(w++)<<16|S.charCodeAt(w++)<<24;else for(N=0;16>N;++N)R[N]=S[w++]|S[w++]<<8|S[w++]<<16|S[w++]<<24;S=l.g[0],w=l.g[1],N=l.g[2];var L=l.g[3],b=S+(L^w&(N^L))+R[0]+3614090360&4294967295;S=w+(b<<7&4294967295|b>>>25),b=L+(N^S&(w^N))+R[1]+3905402710&4294967295,L=S+(b<<12&4294967295|b>>>20),b=N+(w^L&(S^w))+R[2]+606105819&4294967295,N=L+(b<<17&4294967295|b>>>15),b=w+(S^N&(L^S))+R[3]+3250441966&4294967295,w=N+(b<<22&4294967295|b>>>10),b=S+(L^w&(N^L))+R[4]+4118548399&4294967295,S=w+(b<<7&4294967295|b>>>25),b=L+(N^S&(w^N))+R[5]+1200080426&4294967295,L=S+(b<<12&4294967295|b>>>20),b=N+(w^L&(S^w))+R[6]+2821735955&4294967295,N=L+(b<<17&4294967295|b>>>15),b=w+(S^N&(L^S))+R[7]+4249261313&4294967295,w=N+(b<<22&4294967295|b>>>10),b=S+(L^w&(N^L))+R[8]+1770035416&4294967295,S=w+(b<<7&4294967295|b>>>25),b=L+(N^S&(w^N))+R[9]+2336552879&4294967295,L=S+(b<<12&4294967295|b>>>20),b=N+(w^L&(S^w))+R[10]+4294925233&4294967295,N=L+(b<<17&4294967295|b>>>15),b=w+(S^N&(L^S))+R[11]+2304563134&4294967295,w=N+(b<<22&4294967295|b>>>10),b=S+(L^w&(N^L))+R[12]+1804603682&4294967295,S=w+(b<<7&4294967295|b>>>25),b=L+(N^S&(w^N))+R[13]+4254626195&4294967295,L=S+(b<<12&4294967295|b>>>20),b=N+(w^L&(S^w))+R[14]+2792965006&4294967295,N=L+(b<<17&4294967295|b>>>15),b=w+(S^N&(L^S))+R[15]+1236535329&4294967295,w=N+(b<<22&4294967295|b>>>10),b=S+(N^L&(w^N))+R[1]+4129170786&4294967295,S=w+(b<<5&4294967295|b>>>27),b=L+(w^N&(S^w))+R[6]+3225465664&4294967295,L=S+(b<<9&4294967295|b>>>23),b=N+(S^w&(L^S))+R[11]+643717713&4294967295,N=L+(b<<14&4294967295|b>>>18),b=w+(L^S&(N^L))+R[0]+3921069994&4294967295,w=N+(b<<20&4294967295|b>>>12),b=S+(N^L&(w^N))+R[5]+3593408605&4294967295,S=w+(b<<5&4294967295|b>>>27),b=L+(w^N&(S^w))+R[10]+38016083&4294967295,L=S+(b<<9&4294967295|b>>>23),b=N+(S^w&(L^S))+R[15]+3634488961&4294967295,N=L+(b<<14&4294967295|b>>>18),b=w+(L^S&(N^L))+R[4]+3889429448&4294967295,w=N+(b<<20&4294967295|b>>>12),b=S+(N^L&(w^N))+R[9]+568446438&4294967295,S=w+(b<<5&4294967295|b>>>27),b=L+(w^N&(S^w))+R[14]+3275163606&4294967295,L=S+(b<<9&4294967295|b>>>23),b=N+(S^w&(L^S))+R[3]+4107603335&4294967295,N=L+(b<<14&4294967295|b>>>18),b=w+(L^S&(N^L))+R[8]+1163531501&4294967295,w=N+(b<<20&4294967295|b>>>12),b=S+(N^L&(w^N))+R[13]+2850285829&4294967295,S=w+(b<<5&4294967295|b>>>27),b=L+(w^N&(S^w))+R[2]+4243563512&4294967295,L=S+(b<<9&4294967295|b>>>23),b=N+(S^w&(L^S))+R[7]+1735328473&4294967295,N=L+(b<<14&4294967295|b>>>18),b=w+(L^S&(N^L))+R[12]+2368359562&4294967295,w=N+(b<<20&4294967295|b>>>12),b=S+(w^N^L)+R[5]+4294588738&4294967295,S=w+(b<<4&4294967295|b>>>28),b=L+(S^w^N)+R[8]+2272392833&4294967295,L=S+(b<<11&4294967295|b>>>21),b=N+(L^S^w)+R[11]+1839030562&4294967295,N=L+(b<<16&4294967295|b>>>16),b=w+(N^L^S)+R[14]+4259657740&4294967295,w=N+(b<<23&4294967295|b>>>9),b=S+(w^N^L)+R[1]+2763975236&4294967295,S=w+(b<<4&4294967295|b>>>28),b=L+(S^w^N)+R[4]+1272893353&4294967295,L=S+(b<<11&4294967295|b>>>21),b=N+(L^S^w)+R[7]+4139469664&4294967295,N=L+(b<<16&4294967295|b>>>16),b=w+(N^L^S)+R[10]+3200236656&4294967295,w=N+(b<<23&4294967295|b>>>9),b=S+(w^N^L)+R[13]+681279174&4294967295,S=w+(b<<4&4294967295|b>>>28),b=L+(S^w^N)+R[0]+3936430074&4294967295,L=S+(b<<11&4294967295|b>>>21),b=N+(L^S^w)+R[3]+3572445317&4294967295,N=L+(b<<16&4294967295|b>>>16),b=w+(N^L^S)+R[6]+76029189&4294967295,w=N+(b<<23&4294967295|b>>>9),b=S+(w^N^L)+R[9]+3654602809&4294967295,S=w+(b<<4&4294967295|b>>>28),b=L+(S^w^N)+R[12]+3873151461&4294967295,L=S+(b<<11&4294967295|b>>>21),b=N+(L^S^w)+R[15]+530742520&4294967295,N=L+(b<<16&4294967295|b>>>16),b=w+(N^L^S)+R[2]+3299628645&4294967295,w=N+(b<<23&4294967295|b>>>9),b=S+(N^(w|~L))+R[0]+4096336452&4294967295,S=w+(b<<6&4294967295|b>>>26),b=L+(w^(S|~N))+R[7]+1126891415&4294967295,L=S+(b<<10&4294967295|b>>>22),b=N+(S^(L|~w))+R[14]+2878612391&4294967295,N=L+(b<<15&4294967295|b>>>17),b=w+(L^(N|~S))+R[5]+4237533241&4294967295,w=N+(b<<21&4294967295|b>>>11),b=S+(N^(w|~L))+R[12]+1700485571&4294967295,S=w+(b<<6&4294967295|b>>>26),b=L+(w^(S|~N))+R[3]+2399980690&4294967295,L=S+(b<<10&4294967295|b>>>22),b=N+(S^(L|~w))+R[10]+4293915773&4294967295,N=L+(b<<15&4294967295|b>>>17),b=w+(L^(N|~S))+R[1]+2240044497&4294967295,w=N+(b<<21&4294967295|b>>>11),b=S+(N^(w|~L))+R[8]+1873313359&4294967295,S=w+(b<<6&4294967295|b>>>26),b=L+(w^(S|~N))+R[15]+4264355552&4294967295,L=S+(b<<10&4294967295|b>>>22),b=N+(S^(L|~w))+R[6]+2734768916&4294967295,N=L+(b<<15&4294967295|b>>>17),b=w+(L^(N|~S))+R[13]+1309151649&4294967295,w=N+(b<<21&4294967295|b>>>11),b=S+(N^(w|~L))+R[4]+4149444226&4294967295,S=w+(b<<6&4294967295|b>>>26),b=L+(w^(S|~N))+R[11]+3174756917&4294967295,L=S+(b<<10&4294967295|b>>>22),b=N+(S^(L|~w))+R[2]+718787259&4294967295,N=L+(b<<15&4294967295|b>>>17),b=w+(L^(N|~S))+R[9]+3951481745&4294967295,l.g[0]=l.g[0]+S&4294967295,l.g[1]=l.g[1]+(N+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+N&4294967295,l.g[3]=l.g[3]+L&4294967295}r.prototype.u=function(l,S){S===void 0&&(S=l.length);for(var w=S-this.blockSize,R=this.B,N=this.h,L=0;L<S;){if(N==0)for(;L<=w;)i(this,l,L),L+=this.blockSize;if(typeof l=="string"){for(;L<S;)if(R[N++]=l.charCodeAt(L++),N==this.blockSize){i(this,R),N=0;break}}else for(;L<S;)if(R[N++]=l[L++],N==this.blockSize){i(this,R),N=0;break}}this.h=N,this.o+=S},r.prototype.v=function(){var l=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);l[0]=128;for(var S=1;S<l.length-8;++S)l[S]=0;var w=8*this.o;for(S=l.length-8;S<l.length;++S)l[S]=w&255,w/=256;for(this.u(l),l=Array(16),S=w=0;4>S;++S)for(var R=0;32>R;R+=8)l[w++]=this.g[S]>>>R&255;return l};function o(l,S){var w=f;return Object.prototype.hasOwnProperty.call(w,l)?w[l]:w[l]=S(l)}function c(l,S){this.h=S;for(var w=[],R=!0,N=l.length-1;0<=N;N--){var L=l[N]|0;R&&L==S||(w[N]=L,R=!1)}this.g=w}var f={};function g(l){return-128<=l&&128>l?o(l,function(S){return new c([S|0],0>S?-1:0)}):new c([l|0],0>l?-1:0)}function v(l){if(isNaN(l)||!isFinite(l))return k;if(0>l)return Q(v(-l));for(var S=[],w=1,R=0;l>=w;R++)S[R]=l/w|0,w*=4294967296;return new c(S,0)}function I(l,S){if(l.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(l.charAt(0)=="-")return Q(I(l.substring(1),S));if(0<=l.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=v(Math.pow(S,8)),R=k,N=0;N<l.length;N+=8){var L=Math.min(8,l.length-N),b=parseInt(l.substring(N,N+L),S);8>L?(L=v(Math.pow(S,L)),R=R.j(L).add(v(b))):(R=R.j(w),R=R.add(v(b)))}return R}var k=g(0),V=g(1),H=g(16777216);n=c.prototype,n.m=function(){if(K(this))return-Q(this).m();for(var l=0,S=1,w=0;w<this.g.length;w++){var R=this.i(w);l+=(0<=R?R:4294967296+R)*S,S*=4294967296}return l},n.toString=function(l){if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(q(this))return"0";if(K(this))return"-"+Q(this).toString(l);for(var S=v(Math.pow(l,6)),w=this,R="";;){var N=pe(w,S).g;w=J(w,N.j(S));var L=((0<w.g.length?w.g[0]:w.h)>>>0).toString(l);if(w=N,q(w))return L+R;for(;6>L.length;)L="0"+L;R=L+R}},n.i=function(l){return 0>l?0:l<this.g.length?this.g[l]:this.h};function q(l){if(l.h!=0)return!1;for(var S=0;S<l.g.length;S++)if(l.g[S]!=0)return!1;return!0}function K(l){return l.h==-1}n.l=function(l){return l=J(this,l),K(l)?-1:q(l)?0:1};function Q(l){for(var S=l.g.length,w=[],R=0;R<S;R++)w[R]=~l.g[R];return new c(w,~l.h).add(V)}n.abs=function(){return K(this)?Q(this):this},n.add=function(l){for(var S=Math.max(this.g.length,l.g.length),w=[],R=0,N=0;N<=S;N++){var L=R+(this.i(N)&65535)+(l.i(N)&65535),b=(L>>>16)+(this.i(N)>>>16)+(l.i(N)>>>16);R=b>>>16,L&=65535,b&=65535,w[N]=b<<16|L}return new c(w,w[w.length-1]&-2147483648?-1:0)};function J(l,S){return l.add(Q(S))}n.j=function(l){if(q(this)||q(l))return k;if(K(this))return K(l)?Q(this).j(Q(l)):Q(Q(this).j(l));if(K(l))return Q(this.j(Q(l)));if(0>this.l(H)&&0>l.l(H))return v(this.m()*l.m());for(var S=this.g.length+l.g.length,w=[],R=0;R<2*S;R++)w[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<l.g.length;N++){var L=this.i(R)>>>16,b=this.i(R)&65535,it=l.i(N)>>>16,en=l.i(N)&65535;w[2*R+2*N]+=b*en,_e(w,2*R+2*N),w[2*R+2*N+1]+=L*en,_e(w,2*R+2*N+1),w[2*R+2*N+1]+=b*it,_e(w,2*R+2*N+1),w[2*R+2*N+2]+=L*it,_e(w,2*R+2*N+2)}for(R=0;R<S;R++)w[R]=w[2*R+1]<<16|w[2*R];for(R=S;R<2*S;R++)w[R]=0;return new c(w,0)};function _e(l,S){for(;(l[S]&65535)!=l[S];)l[S+1]+=l[S]>>>16,l[S]&=65535,S++}function de(l,S){this.g=l,this.h=S}function pe(l,S){if(q(S))throw Error("division by zero");if(q(l))return new de(k,k);if(K(l))return S=pe(Q(l),S),new de(Q(S.g),Q(S.h));if(K(S))return S=pe(l,Q(S)),new de(Q(S.g),S.h);if(30<l.g.length){if(K(l)||K(S))throw Error("slowDivide_ only works with positive integers.");for(var w=V,R=S;0>=R.l(l);)w=qe(w),R=qe(R);var N=De(w,1),L=De(R,1);for(R=De(R,2),w=De(w,2);!q(R);){var b=L.add(R);0>=b.l(l)&&(N=N.add(w),L=b),R=De(R,1),w=De(w,1)}return S=J(l,N.j(S)),new de(N,S)}for(N=k;0<=l.l(S);){for(w=Math.max(1,Math.floor(l.m()/S.m())),R=Math.ceil(Math.log(w)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),L=v(w),b=L.j(S);K(b)||0<b.l(l);)w-=R,L=v(w),b=L.j(S);q(L)&&(L=V),N=N.add(L),l=J(l,b)}return new de(N,l)}n.A=function(l){return pe(this,l).h},n.and=function(l){for(var S=Math.max(this.g.length,l.g.length),w=[],R=0;R<S;R++)w[R]=this.i(R)&l.i(R);return new c(w,this.h&l.h)},n.or=function(l){for(var S=Math.max(this.g.length,l.g.length),w=[],R=0;R<S;R++)w[R]=this.i(R)|l.i(R);return new c(w,this.h|l.h)},n.xor=function(l){for(var S=Math.max(this.g.length,l.g.length),w=[],R=0;R<S;R++)w[R]=this.i(R)^l.i(R);return new c(w,this.h^l.h)};function qe(l){for(var S=l.g.length+1,w=[],R=0;R<S;R++)w[R]=l.i(R)<<1|l.i(R-1)>>>31;return new c(w,l.h)}function De(l,S){var w=S>>5;S%=32;for(var R=l.g.length-w,N=[],L=0;L<R;L++)N[L]=0<S?l.i(L+w)>>>S|l.i(L+w+1)<<32-S:l.i(L+w);return new c(N,l.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=I,Mr=c}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qh,os,Hh,vo,eu,$h,zh,Wh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(a,d){if(d)e:{var m=r;a=a.split(".");for(var E=0;E<a.length-1;E++){var O=a[E];if(!(O in m))break e;m=m[O]}a=a[a.length-1],E=m[a],d=d(E),d!=E&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var m=0,E=!1,O={next:function(){if(!E&&m<a.length){var F=m++;return{value:d(F,a[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function g(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function v(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function I(a,d,m){return a.call.apply(a.bind,arguments)}function k(a,d,m){if(!a)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),a.apply(d,O)}}return function(){return a.apply(d,arguments)}}function V(a,d,m){return V=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:k,V.apply(null,arguments)}function H(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),a.apply(this,E)}}function q(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(E,O,F){for(var Y=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)Y[xe-2]=arguments[xe];return d.prototype[O].apply(E,Y)}}function K(a){const d=a.length;if(0<d){const m=Array(d);for(let E=0;E<d;E++)m[E]=a[E];return m}return[]}function Q(a,d){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(g(E)){const O=a.length||0,F=E.length||0;a.length=O+F;for(let Y=0;Y<F;Y++)a[O+Y]=E[Y]}else a.push(E)}}class J{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _e(a){return/^[\s\xa0]*$/.test(a)}function de(){var a=f.navigator;return a&&(a=a.userAgent)?a:""}function pe(a){return pe[" "](a),a}pe[" "]=function(){};var qe=de().indexOf("Gecko")!=-1&&!(de().toLowerCase().indexOf("webkit")!=-1&&de().indexOf("Edge")==-1)&&!(de().indexOf("Trident")!=-1||de().indexOf("MSIE")!=-1)&&de().indexOf("Edge")==-1;function De(a,d,m){for(const E in a)d.call(m,a[E],E,a)}function l(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function S(a){const d={};for(const m in a)d[m]=a[m];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,d){let m,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(m in E)a[m]=E[m];for(let F=0;F<w.length;F++)m=w[F],Object.prototype.hasOwnProperty.call(E,m)&&(a[m]=E[m])}}function N(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function L(a){f.setTimeout(()=>{throw a},0)}function b(){var a=ct;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class it{constructor(){this.h=this.g=null}add(d,m){const E=en.get();E.set(d,m),this.h?this.h.next=E:this.g=E,this.h=E}}var en=new J(()=>new Tr,a=>a.reset());class Tr{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ye,Ke=!1,ct=new it,qn=()=>{const a=f.Promise.resolve(void 0);Ye=()=>{a.then(Kr)}};var Kr=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(m){L(m)}var d=en;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Ke=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Qr=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};f.addEventListener("test",m,d),f.removeEventListener("test",m,d)}catch{}return a}();function vn(a,d){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,E=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(qe){e:{try{pe(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Fi[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&vn.aa.h.call(this)}}q(vn,$e);var Fi={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),Bi=0;function Xr(a,d,m,E,O){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!E,this.ha=O,this.key=++Bi,this.da=this.fa=!1}function lt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $n(a){this.src=a,this.g={},this.h=0}$n.prototype.add=function(a,d,m,E,O){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var Y=St(a,d,E,O);return-1<Y?(d=a[Y],m||(d.fa=!1)):(d=new Xr(d,this.src,F,!!E,O),d.fa=m,a.push(d)),d};function jt(a,d){var m=d.type;if(m in a.g){var E=a.g[m],O=Array.prototype.indexOf.call(E,d,void 0),F;(F=0<=O)&&Array.prototype.splice.call(E,O,1),F&&(lt(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function St(a,d,m,E){for(var O=0;O<a.length;++O){var F=a[O];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==E)return O}return-1}var zn="closure_lm_"+(1e6*Math.random()|0),Er={};function Wn(a,d,m,E,O){if(Array.isArray(d)){for(var F=0;F<d.length;F++)Wn(a,d[F],m,E,O);return null}return m=ie(m),a&&a[Hn]?a.K(d,m,v(E)?!!E.capture:!!E,O):we(a,d,m,!1,E,O)}function we(a,d,m,E,O,F){if(!d)throw Error("Invalid event type");var Y=v(O)?!!O.capture:!!O,xe=Tn(a);if(xe||(a[zn]=xe=new $n(a)),m=xe.add(d,m,E,Y,F),m.proxy)return m;if(E=mt(),m.proxy=E,E.src=a,E.listener=m,a.addEventListener)Qr||(O=Y),O===void 0&&(O=!1),a.addEventListener(d.toString(),E,O);else if(a.attachEvent)a.attachEvent(Fs(d.toString()),E);else if(a.addListener&&a.removeListener)a.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function mt(){function a(m){return d.call(a.src,a.listener,m)}const d=qt;return a}function Yr(a,d,m,E,O){if(Array.isArray(d))for(var F=0;F<d.length;F++)Yr(a,d[F],m,E,O);else E=v(E)?!!E.capture:!!E,m=ie(m),a&&a[Hn]?(a=a.i,d=String(d).toString(),d in a.g&&(F=a.g[d],m=St(F,m,E,O),-1<m&&(lt(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete a.g[d],a.h--)))):a&&(a=Tn(a))&&(d=a.g[d.toString()],a=-1,d&&(a=St(d,m,E,O)),(m=-1<a?d[a]:null)&&wr(m))}function wr(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Hn])jt(d.i,a);else{var m=a.type,E=a.proxy;d.removeEventListener?d.removeEventListener(m,E,a.capture):d.detachEvent?d.detachEvent(Fs(m),E):d.addListener&&d.removeListener&&d.removeListener(E),(m=Tn(d))?(jt(m,a),m.h==0&&(m.src=null,d[zn]=null)):lt(a)}}}function Fs(a){return a in Er?Er[a]:Er[a]="on"+a}function qt(a,d){if(a.da)a=!0;else{d=new vn(d,this);var m=a.listener,E=a.ha||a.src;a.fa&&wr(a),a=m.call(E,d)}return a}function Tn(a){return a=a[zn],a instanceof $n?a:null}var En="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[En]||(a[En]=function(d){return a.handleEvent(d)}),a[En])}function Ne(){xt.call(this),this.i=new $n(this),this.M=this,this.F=null}q(Ne,xt),Ne.prototype[Hn]=!0,Ne.prototype.removeEventListener=function(a,d,m,E){Yr(this,a,d,m,E)};function ht(a,d){var m,E=a.F;if(E)for(m=[];E;E=E.F)m.push(E);if(a=a.M,E=d.type||d,typeof d=="string")d=new $e(d,a);else if(d instanceof $e)d.target=d.target||a;else{var O=d;d=new $e(E,a),R(d,O)}if(O=!0,m)for(var F=m.length-1;0<=F;F--){var Y=d.g=m[F];O=Jr(Y,E,!0,d)&&O}if(Y=d.g=a,O=Jr(Y,E,!0,d)&&O,O=Jr(Y,E,!1,d)&&O,m)for(F=0;F<m.length;F++)Y=d.g=m[F],O=Jr(Y,E,!1,d)&&O}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],E=0;E<m.length;E++)lt(m[E]);delete a.g[d],a.h--}}this.F=null},Ne.prototype.K=function(a,d,m,E){return this.i.add(String(a),d,!1,m,E)},Ne.prototype.L=function(a,d,m,E){return this.i.add(String(a),d,!0,m,E)};function Jr(a,d,m,E){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,F=0;F<d.length;++F){var Y=d[F];if(Y&&!Y.da&&Y.capture==m){var xe=Y.listener,Le=Y.ha||Y.src;Y.fa&&jt(a.i,Y),O=xe.call(Le,E)!==!1&&O}}return O&&!E.defaultPrevented}function Bs(a,d,m){if(typeof a=="function")m&&(a=V(a,m));else if(a&&typeof a.handleEvent=="function")a=V(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:f.setTimeout(a,d||0)}function ji(a){a.g=Bs(()=>{a.g=null,a.i&&(a.i=!1,ji(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class js extends xt{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ji(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(a){xt.call(this),this.h=a,this.g={}}q(Xt,xt);var Ht=[];function tn(a){De(a.g,function(d,m){this.g.hasOwnProperty(m)&&wr(d)},a),a.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),tn(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nn=f.JSON.stringify,ga=f.JSON.parse,Zr=class{stringify(a){return f.JSON.stringify(a,void 0)}parse(a){return f.JSON.parse(a,void 0)}};function ei(){}ei.prototype.h=null;function qi(a){return a.h||(a.h=a.i())}function qs(){}var $t={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wn(){$e.call(this,"d")}q(wn,$e);function ti(){$e.call(this,"c")}q(ti,$e);var rn={},It=null;function tt(){return It=It||new Ne}rn.La="serverreachability";function ni(a){$e.call(this,rn.La,a)}q(ni,$e);function Ir(a){const d=tt();ht(d,new ni(d))}rn.STAT_EVENT="statevent";function Hi(a,d){$e.call(this,rn.STAT_EVENT,a),this.stat=d}q(Hi,$e);function st(a){const d=tt();ht(d,new Hi(d,a))}rn.Ma="timingevent";function In(a,d){$e.call(this,rn.Ma,a),this.size=d}q(In,$e);function zt(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){a()},d)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function ri(a,d,m,E,O,F){a.info(function(){if(a.g)if(F)for(var Y="",xe=F.split("&"),Le=0;Le<xe.length;Le++){var ve=xe[Le].split("=");if(1<ve.length){var ot=ve[0];ve=ve[1];var at=ot.split("_");Y=2<=at.length&&at[1]=="type"?Y+(ot+"="+ve+"&"):Y+(ot+"=redacted&")}}else Y=null;else Y=F;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+d+`
`+m+`
`+Y})}function ma(a,d,m,E,O,F,Y){a.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+d+`
`+m+`
`+F+" "+Y})}function Gn(a,d,m,E){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Hs(a,m)+(E?" "+E:"")})}function _a(a,d){a.info(function(){return"TIMEOUT: "+d})}An.prototype.info=function(){};function Hs(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var E=m[a];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var F=O[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Y=1;Y<O.length;Y++)O[Y]=""}}}}return nn(m)}catch{return d}}var ii={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$s={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},si;function oi(){}q(oi,ei),oi.prototype.g=function(){return new XMLHttpRequest},oi.prototype.i=function(){return{}},si=new oi;function At(a,d,m,E){this.j=a,this.i=d,this.l=m,this.R=E||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $i}function $i(){this.i=null,this.g="",this.h=!1}var ai={},Ar={};function Kn(a,d,m){a.L=1,a.v=sn(Gt(d)),a.m=m,a.P=!0,zi(a,null)}function zi(a,d){a.F=Date.now(),Rr(a),a.A=Gt(a.v);var m=a.A,E=a.R;Array.isArray(E)||(E=[String(E)]),Yi(m.i,"t",E),a.C=0,m=a.j.J,a.h=new $i,a.g=Vt(a.j,m?d:null,!a.m),0<a.O&&(a.M=new js(V(a.Y,a,a.g),a.O)),d=a.U,m=a.g,E=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ht[0]=O.toString()),O=Ht);for(var F=0;F<O.length;F++){var Y=Wn(m,O[F],E||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=a.H?S(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ir(),ri(a.i,a.u,a.A,a.l,a.R,a.m)}At.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ot(a)==3?d.j():this.Y(a)},At.prototype.Y=function(a){try{if(a==this.g)e:{const at=Ot(this.g);var d=this.g.Ba();const Jn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||no(this.g)))){this.J||at!=4||d==7||(d==8||0>=Jn?Ir(3):Ir(2)),ui(this);var m=this.g.Z();this.X=m;t:if(zs(this)){var E=no(this.g);a="";var O=E.length,F=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Qn(this);var Y="";break t}this.h.i=new f.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,a+=this.h.i.decode(E[d],{stream:!(F&&d==O-1)});E.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,ma(this.i,this.u,this.A,this.l,this.R,at,m),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Le=this.g;if((xe=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(xe)){var ve=xe;break t}}ve=null}if(m=ve)Gn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cr(this,m);else{this.o=!1,this.s=3,st(12),bn(this),Qn(this);break e}}if(this.P){m=!0;let Ee;for(;!this.J&&this.C<Y.length;)if(Ee=br(this,Y),Ee==Ar){at==4&&(this.s=4,st(14),m=!1),Gn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==ai){this.s=4,st(15),Gn(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else Gn(this.i,this.l,Ee,null),Cr(this,Ee);if(zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||Y.length!=0||this.h.h||(this.s=1,st(16),m=!1),this.o=this.o&&m,!m)Gn(this.i,this.l,Y,"[Invalid Chunked Response]"),bn(this),Qn(this);else if(0<Y.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),$(ot),ot.M=!0,st(11))}}else Gn(this.i,this.l,Y,null),Cr(this,Y);at==4&&bn(this),this.o&&!this.J&&(at==4?ue(this.j,this):(this.o=!1,Rr(this)))}else ba(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),bn(this),Qn(this)}}}catch{}finally{}};function zs(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function br(a,d){var m=a.C,E=d.indexOf(`
`,m);return E==-1?Ar:(m=Number(d.substring(m,E)),isNaN(m)?ai:(E+=1,E+m>d.length?Ar:(d=d.slice(E,E+m),a.C=E+m,d)))}At.prototype.cancel=function(){this.J=!0,bn(this)};function Rr(a){a.S=Date.now()+a.I,Wi(a,a.I)}function Wi(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zt(V(a.ba,a),d)}function ui(a){a.B&&(f.clearTimeout(a.B),a.B=null)}At.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(_a(this.i,this.A),this.L!=2&&(Ir(),st(17)),bn(this),this.s=2,Qn(this)):Wi(this,this.S-a)};function Qn(a){a.j.G==0||a.J||ue(a.j,a)}function bn(a){ui(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,tn(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Cr(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||Sr(m.h,a))){if(!a.K&&Sr(m.h,a)&&m.G==3){try{var E=m.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)X(m),h(m);else break e;j(m),st(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=zt(V(m.Za,m),6e3));if(1>=Ki(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ce(m,11)}else if((a.K||m.g==a)&&X(m),!_e(d))for(O=m.Da.g.parse(d),d=0;d<O.length;d++){let ve=O[d];if(m.T=ve[0],ve=ve[1],m.G==2)if(ve[0]=="c"){m.K=ve[1],m.ia=ve[2];const ot=ve[3];ot!=null&&(m.la=ot,m.j.info("VER="+m.la));const at=ve[4];at!=null&&(m.Aa=at,m.j.info("SVER="+m.Aa));const Jn=ve[5];Jn!=null&&typeof Jn=="number"&&0<Jn&&(E=1.5*Jn,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const Ee=a.g;if(Ee){const kn=Ee.g?Ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kn){var F=E.h;F.g||kn.indexOf("spdy")==-1&&kn.indexOf("quic")==-1&&kn.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ci(F,F.h),F.h=null))}if(E.D){const bt=Ee.g?Ee.g.getResponseHeader("X-HTTP-Session-Id"):null;bt&&(E.ya=bt,Ve(E.I,E.D,bt))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var Y=a;if(E.qa=ze(E,E.J?E.ia:null,E.W),Y.K){dt(E.h,Y);var xe=Y,Le=E.L;Le&&(xe.I=Le),xe.B&&(ui(xe),Rr(xe)),E.g=Y}else x(E);0<m.i.length&&_(m)}else ve[0]!="stop"&&ve[0]!="close"||ce(m,7);else m.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?ce(m,7):u(m):ve[0]!="noop"&&m.l&&m.l.ta(ve),m.v=0)}}Ir(4)}catch{}}var ya=class{constructor(a,d){this.g=a,this.map=d}};function Ws(a){this.l=a||10,f.PerformanceNavigationTiming?(a=f.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gi(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ki(a){return a.h?1:a.g?a.g.size:0}function Sr(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ci(a,d){a.g?a.g.add(d):a.h=d}function dt(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ws.prototype.cancel=function(){if(this.i=Rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rn(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return K(a.i)}function li(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(g(a)){for(var d=[],m=a.length,E=0;E<m;E++)d.push(a[E]);return d}d=[],m=0;for(E in a)d[m++]=a[E];return d}function va(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(g(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const E in a)d[m++]=E;return d}}}function Gs(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(g(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=va(a),E=li(a),O=E.length,F=0;F<O;F++)d.call(void 0,E[F],m&&m[F],a)}var hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ks(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var E=a[m].indexOf("="),O=null;if(0<=E){var F=a[m].substring(0,E);O=a[m].substring(E+1)}else F=a[m];d(F,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Wt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wt){this.h=a.h,di(this,a.j),this.o=a.o,this.g=a.g,fi(this,a.s),this.l=a.l;var d=a.i,m=new Sn;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Pt(this,m),this.m=a.m}else a&&(d=String(a).match(hi))?(this.h=!1,di(this,d[1]||"",!0),this.o=Pr(d[2]||""),this.g=Pr(d[3]||"",!0),fi(this,d[4]),this.l=Pr(d[5]||"",!0),Pt(this,d[6]||"",!0),this.m=Pr(d[7]||"")):(this.h=!1,this.i=new Sn(null,this.h))}Wt.prototype.toString=function(){var a=[],d=this.j;d&&a.push(kr(d,on,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(kr(d,on,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(kr(m,m.charAt(0)=="/"?Ta:Qi,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",kr(m,Qs)),a.join("")};function Gt(a){return new Wt(a)}function di(a,d,m){a.j=m?Pr(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function fi(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Pt(a,d,m){d instanceof Sn?(a.i=d,Ea(a.i,a.h)):(m||(d=kr(d,Dr)),a.i=new Sn(d,a.h))}function Ve(a,d,m){a.i.set(d,m)}function sn(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Pr(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function kr(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,Cn),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Cn(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var on=/[#\/\?@]/g,Qi=/[#\?:]/g,Ta=/[#\?]/g,Dr=/[#\?@]/g,Qs=/#/g;function Sn(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Yt(a){a.g||(a.g=new Map,a.h=0,a.i&&Ks(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}n=Sn.prototype,n.add=function(a,d){Yt(this),this.i=null,a=Xn(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function Xi(a,d){Yt(a),d=Xn(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Xs(a,d){return Yt(a),d=Xn(a,d),a.g.has(d)}n.forEach=function(a,d){Yt(this),this.g.forEach(function(m,E){m.forEach(function(O){a.call(d,O,E,this)},this)},this)},n.na=function(){Yt(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let E=0;E<d.length;E++){const O=a[E];for(let F=0;F<O.length;F++)m.push(d[E])}return m},n.V=function(a){Yt(this);let d=[];if(typeof a=="string")Xs(this,a)&&(d=d.concat(this.g.get(Xn(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},n.set=function(a,d){return Yt(this),this.i=null,a=Xn(this,a),Xs(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Yi(a,d,m){Xi(a,d),0<m.length&&(a.i=null,a.g.set(Xn(a,d),K(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var E=d[m];const F=encodeURIComponent(String(E)),Y=this.V(E);for(E=0;E<Y.length;E++){var O=F;Y[E]!==""&&(O+="="+encodeURIComponent(String(Y[E]))),a.push(O)}}return this.i=a.join("&")};function Xn(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Ea(a,d){d&&!a.j&&(Yt(a),a.i=null,a.g.forEach(function(m,E){var O=E.toLowerCase();E!=O&&(Xi(this,E),Yi(this,O,m))},a)),a.j=d}function Ji(a,d){const m=new An;if(f.Image){const E=new Image;E.onload=H(an,m,"TestLoadImage: loaded",!0,d,E),E.onerror=H(an,m,"TestLoadImage: error",!1,d,E),E.onabort=H(an,m,"TestLoadImage: abort",!1,d,E),E.ontimeout=H(an,m,"TestLoadImage: timeout",!1,d,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=a}else d(!1)}function wa(a,d){const m=new An,E=new AbortController,O=setTimeout(()=>{E.abort(),an(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:E.signal}).then(F=>{clearTimeout(O),F.ok?an(m,"TestPingServer: ok",!0,d):an(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),an(m,"TestPingServer: error",!1,d)})}function an(a,d,m,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(m)}catch{}}function Ia(){this.g=new Zr}function Aa(a,d,m){const E=m||"";try{Gs(a,function(O,F){let Y=O;v(O)&&(Y=nn(O)),d.push(E+F+"="+encodeURIComponent(Y))})}catch(O){throw d.push(E+"type="+encodeURIComponent("_badmap")),O}}function pi(a){this.l=a.Ub||null,this.j=a.eb||!1}q(pi,ei),pi.prototype.g=function(){return new gi(this.l,this.j)},pi.prototype.i=function(a){return function(){return a}}({});function gi(a,d){Ne.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(gi,Ne),n=gi.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Pn(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||f).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ys(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ys(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Yn(this):Pn(this),this.readyState==3&&Ys(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Yn(this))},n.Qa=function(a){this.g&&(this.response=a,Yn(this))},n.ga=function(){this.g&&Yn(this)};function Yn(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Pn(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function Pn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zi(a){let d="";return De(a,function(m,E){d+=E,d+=":",d+=m,d+=`\r
`}),d}function Nr(a,d,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=Zi(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Ve(a,d,m))}function Ue(a){Ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ue,Ne);var Js=/^https?$/i,es=["POST","PUT"];n=Ue.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():si.g(),this.v=this.o?qi(this.o):qi(si),this.g.onreadystatechange=V(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(F){Zs(this,F);return}if(a=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)m.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())m.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),O=f.FormData&&a instanceof f.FormData,!(0<=Array.prototype.indexOf.call(es,d,void 0))||E||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Y]of m)this.g.setRequestHeader(F,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ts(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){Zs(this,F)}};function Zs(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,eo(a),un(a)}function eo(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),Ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?to(this):this.bb())},n.bb=function(){to(this)};function to(a){if(a.h&&typeof c<"u"&&(!a.v[1]||Ot(a)!=4||a.Z()!=2)){if(a.u&&Ot(a)==4)Bs(a.Ea,0,a);else if(ht(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var E;if(E=Y===0){var O=String(a.D).match(hi)[1]||null;!O&&f.self&&f.self.location&&(O=f.self.location.protocol.slice(0,-1)),E=!Js.test(O?O.toLowerCase():"")}m=E}if(m)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var F=2<Ot(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",eo(a)}}finally{un(a)}}}}function un(a,d){if(a.g){ts(a);const m=a.g,E=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ht(a,"ready");try{m.onreadystatechange=E}catch{}}}function ts(a){a.I&&(f.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ga(d)}};function no(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ba(a){const d={};a=(a.g&&2<=Ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<a.length;E++){if(_e(a[E]))continue;var m=N(a[E]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[O]||[];d[O]=F,F.push(m)}l(d,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xr(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function s(a){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xr("baseRetryDelayMs",5e3,a),this.cb=xr("retryDelaySeedMs",1e4,a),this.Wa=xr("forwardChannelMaxRetries",2,a),this.wa=xr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ws(a&&a.concurrentRequestLimit),this.Da=new Ia,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(a,d,m,E){st(0),this.W=a,this.H=d||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=ze(this,null,this.W),_(this)};function u(a){if(p(a),a.G==3){var d=a.U++,m=Gt(a.I);if(Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"TYPE","terminate"),P(a,m),d=new At(a,a.j,d),d.L=2,d.v=sn(Gt(m)),m=!1,f.navigator&&f.navigator.sendBeacon)try{m=f.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&f.Image&&(new Image().src=d.v,m=!0),m||(d.g=Vt(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Rr(d)}Je(a)}function h(a){a.g&&($(a),a.g.cancel(),a.g=null)}function p(a){h(a),a.u&&(f.clearTimeout(a.u),a.u=null),X(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&f.clearTimeout(a.s),a.s=null)}function _(a){if(!Gi(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ye||qn(),Ke||(Ye(),Ke=!0),ct.add(d,a),a.B=0}}function y(a,d){return Ki(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zt(V(a.Ga,a,d),Ie(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new At(this,this.j,a);let F=this.o;if(this.S&&(F?(F=S(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(O.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=C(this,O,d),m=Gt(this.I),Ve(m,"RID",a),Ve(m,"CVER",22),this.D&&Ve(m,"X-HTTP-Session-Id",this.D),P(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(Zi(F)))+"&"+d:this.m&&Nr(m,this.m,F)),ci(this.h,O),this.Ua&&Ve(m,"TYPE","init"),this.P?(Ve(m,"$req",d),Ve(m,"SID","null"),O.T=!0,Kn(O,m,null)):Kn(O,m,d),this.G=2}}else this.G==3&&(a?T(this,a):this.i.length==0||Gi(this.h)||T(this))};function T(a,d){var m;d?m=d.l:m=a.U++;const E=Gt(a.I);Ve(E,"SID",a.K),Ve(E,"RID",m),Ve(E,"AID",a.T),P(a,E),a.m&&a.o&&Nr(E,a.m,a.o),m=new At(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=C(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ci(a.h,m),Kn(m,E,d)}function P(a,d){a.H&&De(a.H,function(m,E){Ve(d,E,m)}),a.l&&Gs({},function(m,E){Ve(d,E,m)})}function C(a,d,m){m=Math.min(a.i.length,m);var E=a.l?V(a.l.Na,a.l,a):null;e:{var O=a.i;let F=-1;for(;;){const Y=["count="+m];F==-1?0<m?(F=O[0].g,Y.push("ofs="+F)):F=0:Y.push("ofs="+F);let xe=!0;for(let Le=0;Le<m;Le++){let ve=O[Le].g;const ot=O[Le].map;if(ve-=F,0>ve)F=Math.max(0,O[Le].g-100),xe=!1;else try{Aa(ot,Y,"req"+ve+"_")}catch{E&&E(ot)}}if(xe){E=Y.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,E}function x(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ye||qn(),Ke||(Ye(),Ke=!0),ct.add(d,a),a.v=0}}function j(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zt(V(a.Fa,a),Ie(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,U(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zt(V(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),h(this),U(this))};function $(a){a.A!=null&&(f.clearTimeout(a.A),a.A=null)}function U(a){a.g=new At(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Gt(a.qa);Ve(d,"RID","rpc"),Ve(d,"SID",a.K),Ve(d,"AID",a.T),Ve(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(d,"TO",a.ja),Ve(d,"TYPE","xmlhttp"),P(a,d),a.m&&a.o&&Nr(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=sn(Gt(d)),m.m=null,m.P=!0,zi(m,a)}n.Za=function(){this.C!=null&&(this.C=null,h(this),j(this),st(19))};function X(a){a.C!=null&&(f.clearTimeout(a.C),a.C=null)}function ue(a,d){var m=null;if(a.g==d){X(a),$(a),a.g=null;var E=2}else if(Sr(a.h,d))m=d.D,dt(a.h,d),E=1;else return;if(a.G!=0){if(d.o)if(E==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var O=a.B;E=tt(),ht(E,new In(E,m)),_(a)}else x(a);else if(O=d.s,O==3||O==0&&0<d.X||!(E==1&&y(a,d)||E==2&&j(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),O){case 1:ce(a,5);break;case 4:ce(a,10);break;case 3:ce(a,6);break;default:ce(a,2)}}}function Ie(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function ce(a,d){if(a.j.info("Error code "+d),d==2){var m=V(a.fb,a),E=a.Xa;const O=!E;E=new Wt(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||di(E,"https"),sn(E),O?Ji(E.toString(),m):wa(E.toString(),m)}else st(2);a.G=0,a.l&&a.l.sa(d),Je(a),p(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Je(a){if(a.G=0,a.ka=[],a.l){const d=Rn(a.h);(d.length!=0||a.i.length!=0)&&(Q(a.ka,d),Q(a.ka,a.i),a.h.i.length=0,K(a.i),a.i.length=0),a.l.ra()}}function ze(a,d,m){var E=m instanceof Wt?Gt(m):new Wt(m);if(E.g!="")d&&(E.g=d+"."+E.g),fi(E,E.s);else{var O=f.location;E=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var F=new Wt(null);E&&di(F,E),d&&(F.g=d),O&&fi(F,O),m&&(F.l=m),E=F}return m=a.D,d=a.ya,m&&d&&Ve(E,m,d),Ve(E,"VER",a.la),P(a,E),E}function Vt(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ue(new pi({eb:m})):new Ue(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lt(){}n=Lt.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Te(){}Te.prototype.g=function(a,d){return new Qe(a,d)};function Qe(a,d){Ne.call(this),this.g=new s(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_e(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_e(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Kt(this)}q(Qe,Ne),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){u(this.g)},Qe.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=nn(a),a=m);d.i.push(new ya(d.Ya++,a)),d.G==3&&_(d)},Qe.prototype.N=function(){this.g.l=null,delete this.j,u(this.g),delete this.g,Qe.aa.N.call(this)};function Re(a){wn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}q(Re,wn);function Fe(){ti.call(this),this.status=1}q(Fe,ti);function Kt(a){this.g=a}q(Kt,Lt),Kt.prototype.ua=function(){ht(this.g,"a")},Kt.prototype.ta=function(a){ht(this.g,new Re(a))},Kt.prototype.sa=function(a){ht(this.g,new Fe)},Kt.prototype.ra=function(){ht(this.g,"b")},Te.prototype.createWebChannel=Te.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,Wh=function(){return new Te},zh=function(){return tt()},$h=rn,eu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ii.NO_ERROR=0,ii.TIMEOUT=8,ii.HTTP_ERROR=6,vo=ii,$s.COMPLETE="complete",Hh=$s,qs.EventType=$t,$t.OPEN="a",$t.CLOSE="b",$t.ERROR="c",$t.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,os=qs,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,qh=Ue}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const Yc="@firebase/firestore";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Vi="11.0.2";/**
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
 */const qr=new _u("@firebase/firestore");function yi(){return qr.logLevel}function ne(n,...e){if(qr.logLevel<=Ce.DEBUG){const t=e.map(Pu);qr.debug(`Firestore (${Vi}): ${n}`,...t)}}function Un(n,...e){if(qr.logLevel<=Ce.ERROR){const t=e.map(Pu);qr.error(`Firestore (${Vi}): ${n}`,...t)}}function Ci(n,...e){if(qr.logLevel<=Ce.WARN){const t=e.map(Pu);qr.warn(`Firestore (${Vi}): ${n}`,...t)}}function Pu(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function fe(n="Unexpected state"){const e=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: `+n;throw Un(e),new Error(e)}function Oe(n,e){n||fe()}function ye(n,e){return n}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Gh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(vt.UNAUTHENTICATED))}shutdown(){}}class A_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class b_{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Oe(this.o===void 0);let r=this.i;const i=g=>this.i!==r?(r=this.i,t(g)):Promise.resolve();let o=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const g=o;e.enqueueRetryable(async()=>{await g.promise,await i(this.currentUser)})},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Vn)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new Gh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new vt(e)}}class R_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class C_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new R_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class S_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Oe(this.o===void 0);const r=o=>{o.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,ne("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Oe(typeof t.token=="string"),this.R=t.token,new S_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function k_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Kh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=k_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function Pe(n,e){return n<e?-1:n>e?1:0}function Si(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new nt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new nt(0,0))}static max(){return new me(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vs{constructor(e,t,r){t===void 0?t=0:t>e.length&&fe(),r===void 0?r=e.length-t:r>e.length-t&&fe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),c=t.get(i);if(o<c)return-1;if(o>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Be extends vs{construct(e,t,r){return new Be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const D_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends vs{construct(e,t,r){return new pt(e,t,r)}static isValidIdentifier(e){return D_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const f=e[i];if(f==="\\"){if(i+1===e.length)throw new re(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[i+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new re(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=g,i+=2}else f==="`"?(c=!c,i++):f!=="."||c?(r+=f,i++):(o(),i++)}if(o(),c)throw new re(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Be.fromString(e))}static fromName(e){return new oe(Be.fromString(e).popFirst(5))}static empty(){return new oe(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Be(e.slice()))}}function N_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new nt(t+1,0):new nt(t,r));return new hr(i,oe.empty(),e)}function x_(n){return new hr(n.readTime,n.key,-1)}class hr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hr(me.min(),oe.empty(),-1)}static max(){return new hr(me.max(),oe.empty(),-1)}}function O_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
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
 */const V_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==V_)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,r)=>{t(e)})}static reject(e){return new G((t,r)=>{r(e)})}static waitFor(e){return new G((t,r)=>{let i=0,o=0,c=!1;e.forEach(f=>{++i,f.next(()=>{++o,c&&o===i&&t()},g=>r(g))}),c=!0,o===i&&t()})}static or(e){let t=G.resolve(!1);for(const r of e)t=t.next(i=>i?G.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new G((r,i)=>{const o=e.length,c=new Array(o);let f=0;for(let g=0;g<o;g++){const v=g;t(e[v]).next(I=>{c[v]=I,++f,f===o&&r(c)},I=>i(I))}})}static doWhile(e,t){return new G((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function M_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Yo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yo.oe=-1;function Jo(n){return n==null}function Vo(n){return n===0&&1/n==-1/0}function U_(n){return typeof n=="number"&&Number.isInteger(n)&&!Vo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function F_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jc(e)),e=B_(n.get(t),e);return Jc(e)}function B_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function Jc(n){return n+""}/**
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
 */function Zc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function yr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class He{constructor(e,t){this.comparator=e,this.root=t||ft.EMPTY}insert(e,t){return new He(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uo(this.root,e,this.comparator,!0)}}class uo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ft.RED,this.left=i??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ft(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,t,r,i,o){return this}insert(e,t,r){return new ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new el(this.data.getIterator())}getIteratorFrom(e){return new el(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new rt(this.comparator);return t.data=e,t}}class el{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Mt([])}unionWith(e){let t=new rt(pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Xh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Xh("Invalid base64 string: "+o):o}}(e);return new gt(t)}static fromUint8Array(e){const t=function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o}(e);return new gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const j_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(n){if(Oe(!!n),typeof n=="string"){let e=0;const t=j_.exec(n);if(Oe(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(n.seconds),nanos:Xe(n.nanos)}}function Xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fr(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
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
 */function ku(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Zo(n){const e=n.mapValue.fields.__previous_value__;return ku(e)?Zo(e):e}function Ts(n){const e=dr(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class q_{constructor(e,t,r,i,o,c,f,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v}}class Es{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Es&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const co={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ku(n)?4:$_(n)?9007199254740991:H_(n)?10:11:fe()}function _n(n,e){if(n===e)return!0;const t=pr(n);if(t!==pr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ts(n).isEqual(Ts(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=dr(i.timestampValue),f=dr(o.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return fr(i.bytesValue).isEqual(fr(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return Xe(i.geoPointValue.latitude)===Xe(o.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Xe(i.integerValue)===Xe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=Xe(i.doubleValue),f=Xe(o.doubleValue);return c===f?Vo(c)===Vo(f):isNaN(c)&&isNaN(f)}return!1}(n,e);case 9:return Si(n.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,o){const c=i.mapValue.fields||{},f=o.mapValue.fields||{};if(Zc(c)!==Zc(f))return!1;for(const g in c)if(c.hasOwnProperty(g)&&(f[g]===void 0||!_n(c[g],f[g])))return!1;return!0}(n,e);default:return fe()}}function ws(n,e){return(n.values||[]).find(t=>_n(t,e))!==void 0}function Pi(n,e){if(n===e)return 0;const t=pr(n),r=pr(e);if(t!==r)return Pe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return function(o,c){const f=Xe(o.integerValue||o.doubleValue),g=Xe(c.integerValue||c.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(n,e);case 3:return tl(n.timestampValue,e.timestampValue);case 4:return tl(Ts(n),Ts(e));case 5:return Pe(n.stringValue,e.stringValue);case 6:return function(o,c){const f=fr(o),g=fr(c);return f.compareTo(g)}(n.bytesValue,e.bytesValue);case 7:return function(o,c){const f=o.split("/"),g=c.split("/");for(let v=0;v<f.length&&v<g.length;v++){const I=Pe(f[v],g[v]);if(I!==0)return I}return Pe(f.length,g.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,c){const f=Pe(Xe(o.latitude),Xe(c.latitude));return f!==0?f:Pe(Xe(o.longitude),Xe(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return nl(n.arrayValue,e.arrayValue);case 10:return function(o,c){var f,g,v,I;const k=o.fields||{},V=c.fields||{},H=(f=k.value)===null||f===void 0?void 0:f.arrayValue,q=(g=V.value)===null||g===void 0?void 0:g.arrayValue,K=Pe(((v=H==null?void 0:H.values)===null||v===void 0?void 0:v.length)||0,((I=q==null?void 0:q.values)===null||I===void 0?void 0:I.length)||0);return K!==0?K:nl(H,q)}(n.mapValue,e.mapValue);case 11:return function(o,c){if(o===co.mapValue&&c===co.mapValue)return 0;if(o===co.mapValue)return 1;if(c===co.mapValue)return-1;const f=o.fields||{},g=Object.keys(f),v=c.fields||{},I=Object.keys(v);g.sort(),I.sort();for(let k=0;k<g.length&&k<I.length;++k){const V=Pe(g[k],I[k]);if(V!==0)return V;const H=Pi(f[g[k]],v[I[k]]);if(H!==0)return H}return Pe(g.length,I.length)}(n.mapValue,e.mapValue);default:throw fe()}}function tl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=dr(n),r=dr(e),i=Pe(t.seconds,r.seconds);return i!==0?i:Pe(t.nanos,r.nanos)}function nl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Pi(t[i],r[i]);if(o)return o}return Pe(t.length,r.length)}function ki(n){return tu(n)}function tu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=dr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return fr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return oe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=tu(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${tu(t.fields[c])}`;return i+"}"}(n.mapValue):fe()}function To(n){switch(pr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zo(n);return e?16+To(e):16;case 5:return 2*n.stringValue.length;case 6:return fr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+To(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return yr(r.fields,(o,c)=>{i+=o.length+To(c)}),i}(n.mapValue);default:throw fe()}}function rl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function nu(n){return!!n&&"integerValue"in n}function Du(n){return!!n&&"arrayValue"in n}function il(n){return!!n&&"nullValue"in n}function sl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Eo(n){return!!n&&"mapValue"in n}function H_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function hs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return yr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=hs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Eo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(t)}setAll(e){let t=pt.emptyPath(),r={},i=[];e.forEach((c,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,r,i),r={},i=[],t=f.popLast()}c?r[f.lastSegment()]=hs(c):i.push(f.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Eo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Eo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){yr(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Nt(hs(this.value))}}function Yh(n){const e=[];return yr(n.fields,(t,r)=>{const i=new pt([t]);if(Eo(r)){const o=Yh(r.mapValue).fields;if(o.length===0)e.push(i);else for(const c of o)e.push(i.child(c))}else e.push(i)}),new Mt(e)}/**
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
 */class Tt{constructor(e,t,r,i,o,c,f){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Tt(e,0,me.min(),me.min(),me.min(),Nt.empty(),0)}static newFoundDocument(e,t,r,i){return new Tt(e,1,t,me.min(),r,i,0)}static newNoDocument(e,t){return new Tt(e,2,t,me.min(),me.min(),Nt.empty(),0)}static newUnknownDocument(e,t){return new Tt(e,3,t,me.min(),me.min(),Nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lo{constructor(e,t){this.position=e,this.inclusive=t}}function ol(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],c=n.position[i];if(o.field.isKeyField()?r=oe.comparator(oe.fromName(c.referenceValue),t.key):r=Pi(c,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function al(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_n(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mo{constructor(e,t="asc"){this.field=e,this.dir=t}}function z_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Jh{}class et extends Jh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new G_(e,t,r):t==="array-contains"?new X_(e,r):t==="in"?new Y_(e,r):t==="not-in"?new J_(e,r):t==="array-contains-any"?new Z_(e,r):new et(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new K_(e,r):new Q_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Pi(t,this.value)):t!==null&&pr(this.value)===pr(t)&&this.matchesComparison(Pi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends Jh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Zt(e,t)}matches(e){return Zh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zh(n){return n.op==="and"}function ed(n){return W_(n)&&Zh(n)}function W_(n){for(const e of n.filters)if(e instanceof Zt)return!1;return!0}function ru(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+ki(n.value);if(ed(n))return n.filters.map(e=>ru(e)).join(",");{const e=n.filters.map(t=>ru(t)).join(",");return`${n.op}(${e})`}}function td(n,e){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(n,e):n instanceof Zt?function(r,i){return i instanceof Zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,c,f)=>o&&td(c,i.filters[f]),!0):!1}(n,e):void fe()}function nd(n){return n instanceof et?function(t){return`${t.field.canonicalString()} ${t.op} ${ki(t.value)}`}(n):n instanceof Zt?function(t){return t.op.toString()+" {"+t.getFilters().map(nd).join(" ,")+"}"}(n):"Filter"}class G_ extends et{constructor(e,t,r){super(e,t,r),this.key=oe.fromName(r.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class K_ extends et{constructor(e,t){super(e,"in",t),this.keys=rd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Q_ extends et{constructor(e,t){super(e,"not-in",t),this.keys=rd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>oe.fromName(r.referenceValue))}class X_ extends et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Du(t)&&ws(t.arrayValue,this.value)}}class Y_ extends et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ws(this.value.arrayValue,t)}}class J_ extends et{constructor(e,t){super(e,"not-in",t)}matches(e){if(ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ws(this.value.arrayValue,t)}}class Z_ extends et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Du(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ws(this.value.arrayValue,r))}}/**
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
 */class ey{constructor(e,t=null,r=[],i=[],o=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=f,this.ue=null}}function ul(n,e=null,t=[],r=[],i=null,o=null,c=null){return new ey(n,e,t,r,i,o,c)}function Nu(n){const e=ye(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ru(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ki(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ki(r)).join(",")),e.ue=t}return e.ue}function xu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!z_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!td(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!al(n.startAt,e.startAt)&&al(n.endAt,e.endAt)}function iu(n){return oe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ds{constructor(e,t=null,r=[],i=[],o=null,c="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ty(n,e,t,r,i,o,c,f){return new Ds(n,e,t,r,i,o,c,f)}function ea(n){return new Ds(n)}function cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function id(n){return n.collectionGroup!==null}function ds(n){const e=ye(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new rt(pt.comparator);return c.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(f=f.add(v.field))})}),f})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Mo(o,r))}),t.has(pt.keyField().canonicalString())||e.ce.push(new Mo(pt.keyField(),r))}return e.ce}function gn(n){const e=ye(n);return e.le||(e.le=ny(e,ds(n))),e.le}function ny(n,e){if(n.limitType==="F")return ul(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Mo(i.field,o)});const t=n.endAt?new Lo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Lo(n.startAt.position,n.startAt.inclusive):null;return ul(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function su(n,e){const t=n.filters.concat([e]);return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ou(n,e,t){return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ta(n,e){return xu(gn(n),gn(e))&&n.limitType===e.limitType}function sd(n){return`${Nu(gn(n))}|lt:${n.limitType}`}function vi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>nd(i)).join(", ")}]`),Jo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ki(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ki(i)).join(",")),`Target(${r})`}(gn(n))}; limitType=${n.limitType})`}function na(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):oe.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of ds(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(c,f,g){const v=ol(c,f,g);return c.inclusive?v<=0:v<0}(r.startAt,ds(r),i)||r.endAt&&!function(c,f,g){const v=ol(c,f,g);return c.inclusive?v>=0:v>0}(r.endAt,ds(r),i))}(n,e)}function ry(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function od(n){return(e,t)=>{let r=!1;for(const i of ds(n)){const o=iy(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function iy(n,e,t){const r=n.field.isKeyField()?oe.comparator(e.key,t.key):function(o,c,f){const g=c.data.field(o),v=f.data.field(o);return g!==null&&v!==null?Pi(g,v):fe()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
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
 */class zr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Qh(this.inner)}size(){return this.innerSize}}/**
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
 */const sy=new He(oe.comparator);function Fn(){return sy}const ad=new He(oe.comparator);function as(...n){let e=ad;for(const t of n)e=e.insert(t.key,t);return e}function ud(n){let e=ad;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Lr(){return fs()}function cd(){return fs()}function fs(){return new zr(n=>n.toString(),(n,e)=>n.isEqual(e))}const oy=new He(oe.comparator),ay=new rt(oe.comparator);function Se(...n){let e=ay;for(const t of n)e=e.add(t);return e}const uy=new rt(Pe);function cy(){return uy}/**
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
 */function Ou(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function ld(n){return{integerValue:""+n}}function ly(n,e){return U_(e)?ld(e):Ou(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ra{constructor(){this._=void 0}}function hy(n,e,t){return n instanceof Uo?function(i,o){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ku(o)&&(o=Zo(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(t,e):n instanceof Is?dd(n,e):n instanceof As?fd(n,e):function(i,o){const c=hd(i,o),f=ll(c)+ll(i.Pe);return nu(c)&&nu(i.Pe)?ld(f):Ou(i.serializer,f)}(n,e)}function dy(n,e,t){return n instanceof Is?dd(n,e):n instanceof As?fd(n,e):t}function hd(n,e){return n instanceof Fo?function(r){return nu(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Uo extends ra{}class Is extends ra{constructor(e){super(),this.elements=e}}function dd(n,e){const t=pd(e);for(const r of n.elements)t.some(i=>_n(i,r))||t.push(r);return{arrayValue:{values:t}}}class As extends ra{constructor(e){super(),this.elements=e}}function fd(n,e){let t=pd(e);for(const r of n.elements)t=t.filter(i=>!_n(i,r));return{arrayValue:{values:t}}}class Fo extends ra{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ll(n){return Xe(n.integerValue||n.doubleValue)}function pd(n){return Du(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function fy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Is&&i instanceof Is||r instanceof As&&i instanceof As?Si(r.elements,i.elements,_n):r instanceof Fo&&i instanceof Fo?_n(r.Pe,i.Pe):r instanceof Uo&&i instanceof Uo}(n.transform,e.transform)}class py{constructor(e,t){this.version=e,this.transformResults=t}}class Ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ia{}function gd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vu(n.key,Ft.none()):new Ns(n.key,n.data,Ft.none());{const t=n.data,r=Nt.empty();let i=new rt(pt.comparator);for(let o of e.fields)if(!i.has(o)){let c=t.field(o);c===null&&o.length>1&&(o=o.popLast(),c=t.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new vr(n.key,r,new Mt(i.toArray()),Ft.none())}}function gy(n,e,t){n instanceof Ns?function(i,o,c){const f=i.value.clone(),g=dl(i.fieldTransforms,o,c.transformResults);f.setAll(g),o.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,e,t):n instanceof vr?function(i,o,c){if(!wo(i.precondition,o))return void o.convertToUnknownDocument(c.version);const f=dl(i.fieldTransforms,o,c.transformResults),g=o.data;g.setAll(md(i)),g.setAll(f),o.convertToFoundDocument(c.version,g).setHasCommittedMutations()}(n,e,t):function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function ps(n,e,t,r){return n instanceof Ns?function(o,c,f,g){if(!wo(o.precondition,c))return f;const v=o.value.clone(),I=fl(o.fieldTransforms,g,c);return v.setAll(I),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null}(n,e,t,r):n instanceof vr?function(o,c,f,g){if(!wo(o.precondition,c))return f;const v=fl(o.fieldTransforms,g,c),I=c.data;return I.setAll(md(o)),I.setAll(v),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),f===null?null:f.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(k=>k.field))}(n,e,t,r):function(o,c,f){return wo(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f}(n,e,t)}function my(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=hd(r.transform,i||null);o!=null&&(t===null&&(t=Nt.empty()),t.set(r.field,o))}return t||null}function hl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Si(r,i,(o,c)=>fy(o,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ns extends ia{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vr extends ia{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function md(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dl(n,e,t){const r=new Map;Oe(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],c=o.transform,f=e.data.field(o.field);r.set(o.field,dy(c,f,t[i]))}return r}function fl(n,e,t){const r=new Map;for(const i of n){const o=i.transform,c=t.data.field(i.field);r.set(i.field,hy(o,c,e))}return r}class Vu extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _y extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&gy(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cd();return this.mutations.forEach(i=>{const o=e.get(i.key),c=o.overlayedDocument;let f=this.applyToLocalView(c,o.mutatedFields);f=t.has(i.key)?null:f;const g=gd(c,f);g!==null&&r.set(i.key,g),c.isValidDocument()||c.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Se())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(t,r)=>hl(t,r))&&Si(this.baseMutations,e.baseMutations,(t,r)=>hl(t,r))}}class Lu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Oe(e.mutations.length===r.length);let i=function(){return oy}();const o=e.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new Lu(e,t,r,i)}}/**
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
 */class vy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ty{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ze,ke;function Ey(n){switch(n){default:return fe();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function _d(n){if(n===void 0)return Un("GRPC error has no .code"),W.UNKNOWN;switch(n){case Ze.OK:return W.OK;case Ze.CANCELLED:return W.CANCELLED;case Ze.UNKNOWN:return W.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return W.INTERNAL;case Ze.UNAVAILABLE:return W.UNAVAILABLE;case Ze.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ze.NOT_FOUND:return W.NOT_FOUND;case Ze.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ze.ABORTED:return W.ABORTED;case Ze.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ze.DATA_LOSS:return W.DATA_LOSS;default:return fe()}}(ke=Ze||(Ze={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wy(){return new TextEncoder}/**
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
 */const Iy=new Mr([4294967295,4294967295],0);function pl(n){const e=wy().encode(n),t=new jh;return t.update(e),new Uint8Array(t.digest())}function gl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Mr([t,r],0),new Mr([i,o],0)]}class Mu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Mr.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Mr.fromNumber(r)));return i.compare(Iy)===1&&(i=new Mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=pl(e),[r,i]=gl(t);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,i,o);if(!this.de(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),c=new Mu(o,i,t);return r.forEach(f=>c.insert(f)),c}insert(e){if(this.Te===0)return;const t=pl(e),[r,i]=gl(t);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,i,o);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sa{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new sa(me.min(),i,new He(Pe),Fn(),Se())}}class xs{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xs(r,t,Se(),Se(),Se())}}/**
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
 */class Io{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class yd{constructor(e,t){this.targetId=e,this.me=t}}class vd{constructor(e,t,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ml{constructor(){this.fe=0,this.ge=_l(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Se(),t=Se(),r=Se();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:fe()}}),new xs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=_l()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ay{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=lo(),this.Qe=lo(),this.Ke=new He(Pe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const o=i.target;if(iu(o))if(r===0){const c=new oe(o.path);this.We(t,c,Tt.newNoDocument(c,me.min()))}else Oe(r===1);else{const c=this.Ze(t);if(c!==r){const f=this.Xe(e),g=f?this.et(f,e,c):1;if(g!==0){this.He(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let c,f;try{c=fr(r).toUint8Array()}catch(g){if(g instanceof Xh)return Ci("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Mu(c,i,o)}catch(g){return Ci(g instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Te===0?null:f}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const c=this.Le.nt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;e.mightContain(f)||(this.We(t,o,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((o,c)=>{const f=this.Ye(c);if(f){if(o.current&&iu(f.target)){const g=new oe(f.target.path);this.st(g).has(c)||this.ot(c,g)||this.We(c,g,Tt.newNoDocument(g,e))}o.be&&(t.set(c,o.ve()),o.Ce())}});let r=Se();this.Qe.forEach((o,c)=>{let f=!0;c.forEachWhile(g=>{const v=this.Ye(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(o))}),this.ke.forEach((o,c)=>c.setReadTime(e));const i=new sa(e,t,this.Ke,this.ke,r);return this.ke=Fn(),this.qe=lo(),this.Qe=lo(),this.Ke=new He(Pe),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new ml,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new rt(Pe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new rt(Pe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new ml),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lo(){return new He(oe.comparator)}function _l(){return new He(oe.comparator)}const by={asc:"ASCENDING",desc:"DESCENDING"},Ry={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cy={and:"AND",or:"OR"};class Sy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function au(n,e){return n.useProto3Json||Jo(e)?e:{value:e}}function Bo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Td(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Py(n,e){return Bo(n,e.toTimestamp())}function mn(n){return Oe(!!n),me.fromTimestamp(function(t){const r=dr(t);return new nt(r.seconds,r.nanos)}(n))}function Uu(n,e){return uu(n,e).canonicalString()}function uu(n,e){const t=function(i){return new Be(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ed(n){const e=Be.fromString(n);return Oe(Rd(e)),e}function cu(n,e){return Uu(n.databaseId,e.path)}function Ua(n,e){const t=Ed(e);if(t.get(1)!==n.databaseId.projectId)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new oe(Id(t))}function wd(n,e){return Uu(n.databaseId,e)}function ky(n){const e=Ed(n);return e.length===4?Be.emptyPath():Id(e)}function lu(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Id(n){return Oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yl(n,e,t){return{name:cu(n,e),fields:t.value.mapValue.fields}}function Dy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(v,I){return v.useProto3Json?(Oe(I===void 0||typeof I=="string"),gt.fromBase64String(I||"")):(Oe(I===void 0||I instanceof Buffer||I instanceof Uint8Array),gt.fromUint8Array(I||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&function(v){const I=v.code===void 0?W.UNKNOWN:_d(v.code);return new re(I,v.message||"")}(c);t=new vd(r,i,o,f||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ua(n,r.document.name),o=mn(r.document.updateTime),c=r.document.createTime?mn(r.document.createTime):me.min(),f=new Nt({mapValue:{fields:r.document.fields}}),g=Tt.newFoundDocument(i,o,c,f),v=r.targetIds||[],I=r.removedTargetIds||[];t=new Io(v,I,g.key,g)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ua(n,r.document),o=r.readTime?mn(r.readTime):me.min(),c=Tt.newNoDocument(i,o),f=r.removedTargetIds||[];t=new Io([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ua(n,r.document),o=r.removedTargetIds||[];t=new Io([],o,i,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,c=new Ty(i,o),f=r.targetId;t=new yd(f,c)}}return t}function Ny(n,e){let t;if(e instanceof Ns)t={update:yl(n,e.key,e.value)};else if(e instanceof Vu)t={delete:cu(n,e.key)};else if(e instanceof vr)t={update:yl(n,e.key,e.data),updateMask:jy(e.fieldMask)};else{if(!(e instanceof _y))return fe();t={verify:cu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,c){const f=c.transform;if(f instanceof Uo)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Is)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof As)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Fo)return{fieldPath:c.field.canonicalString(),increment:f.Pe};throw fe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Py(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:fe()}(n,e.precondition)),t}function xy(n,e){return n&&n.length>0?(Oe(e!==void 0),n.map(t=>function(i,o){let c=i.updateTime?mn(i.updateTime):mn(o);return c.isEqual(me.min())&&(c=mn(o)),new py(c,i.transformResults||[])}(t,e))):[]}function Oy(n,e){return{documents:[wd(n,e.path)]}}function Vy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=wd(n,i);const o=function(v){if(v.length!==0)return bd(Zt.create(v,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const c=function(v){if(v.length!==0)return v.map(I=>function(V){return{field:Ti(V.field),direction:Uy(V.dir)}}(I))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=au(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:i}}function Ly(n){let e=ky(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Oe(r===1);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let o=[];t.where&&(o=function(k){const V=Ad(k);return V instanceof Zt&&ed(V)?V.getFilters():[V]}(t.where));let c=[];t.orderBy&&(c=function(k){return k.map(V=>function(q){return new Mo(Ei(q.field),function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(V))}(t.orderBy));let f=null;t.limit&&(f=function(k){let V;return V=typeof k=="object"?k.value:k,Jo(V)?null:V}(t.limit));let g=null;t.startAt&&(g=function(k){const V=!!k.before,H=k.values||[];return new Lo(H,V)}(t.startAt));let v=null;return t.endAt&&(v=function(k){const V=!k.before,H=k.values||[];return new Lo(H,V)}(t.endAt)),ty(e,i,c,o,f,"F",g,v)}function My(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ad(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ei(t.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ei(t.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ei(t.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ei(t.unaryFilter.field);return et.create(c,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(n):n.fieldFilter!==void 0?function(t){return et.create(Ei(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Zt.create(t.compositeFilter.filters.map(r=>Ad(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe()}}(t.compositeFilter.op))}(n):fe()}function Uy(n){return by[n]}function Fy(n){return Ry[n]}function By(n){return Cy[n]}function Ti(n){return{fieldPath:n.canonicalString()}}function Ei(n){return pt.fromServerFormat(n.fieldPath)}function bd(n){return n instanceof et?function(t){if(t.op==="=="){if(sl(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NAN"}};if(il(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sl(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NOT_NAN"}};if(il(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(t.field),op:Fy(t.op),value:t.value}}}(n):n instanceof Zt?function(t){const r=t.getFilters().map(i=>bd(i));return r.length===1?r[0]:{compositeFilter:{op:By(t.op),filters:r}}}(n):fe()}function jy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class or{constructor(e,t,r,i,o=me.min(),c=me.min(),f=gt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qy{constructor(e){this.ht=e}}function Hy(n){const e=Ly({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ou(e,e.limit,"L"):e}/**
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
 */class $y{constructor(){this.ln=new zy}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(hr.min())}updateCollectionGroup(e,t,r){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class zy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new rt(Be.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const vl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Dt{static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(41943040,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
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
 */class Di{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Di(0)}static Qn(){return new Di(-1)}}/**
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
 */function Tl([n,e],[t,r]){const i=Pe(n,t);return i===0?Pe(e,r):i}class Wy{constructor(e){this.Gn=e,this.buffer=new rt(Tl),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Tl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mi(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Li(t)}await this.Yn(3e5)})}}class Ky{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Yo.oe);const r=new Wy(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(vl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vl):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,o,c,f,g,v;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(k=>(k>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),i=this.params.maximumSequenceNumbersToCollect):i=k,c=Date.now(),this.nthSequenceNumber(e,i))).next(k=>(r=k,f=Date.now(),this.removeTargets(e,r,t))).next(k=>(o=k,g=Date.now(),this.removeOrphanedDocuments(e,r))).next(k=>(v=Date.now(),yi()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(f-c)+`ms
	Removed ${o} targets in `+(g-f)+`ms
	Removed ${k} documents in `+(v-g)+`ms
Total Duration: ${v-I}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:k})))}}function Qy(n,e){return new Ky(n,e)}/**
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
 */class Xy{constructor(){this.changes=new zr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?G.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Yy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Jy{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ps(r.mutation,i,Mt.empty(),nt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Se()){const i=Lr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let c=as();return o.forEach((f,g)=>{c=c.insert(f,g.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=Lr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Se()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((c,f)=>{t.set(c,f)})})}computeViews(e,t,r,i){let o=Fn();const c=fs(),f=function(){return fs()}();return t.forEach((g,v)=>{const I=r.get(v.key);i.has(v.key)&&(I===void 0||I.mutation instanceof vr)?o=o.insert(v.key,v):I!==void 0?(c.set(v.key,I.mutation.getFieldMask()),ps(I.mutation,v,I.mutation.getFieldMask(),nt.now())):c.set(v.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,o).next(g=>(g.forEach((v,I)=>c.set(v,I)),t.forEach((v,I)=>{var k;return f.set(v,new Yy(I,(k=c.get(v))!==null&&k!==void 0?k:null))}),f))}recalculateAndSaveOverlays(e,t){const r=fs();let i=new He((c,f)=>c-f),o=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const f of c)f.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let I=r.get(g)||Mt.empty();I=f.applyToLocalView(v,I),r.set(g,I);const k=(i.get(f.batchId)||Se()).add(g);i=i.insert(f.batchId,k)})}).next(()=>{const c=[],f=i.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,I=g.value,k=cd();I.forEach(V=>{if(!o.has(V)){const H=gd(t.get(V),r.get(V));H!==null&&k.set(V,H),o=o.add(V)}}),c.push(this.documentOverlayCache.saveOverlays(e,v,k))}return G.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):id(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):G.resolve(Lr());let f=-1,g=o;return c.next(v=>G.forEach(v,(I,k)=>(f<k.largestBatchId&&(f=k.largestBatchId),o.get(I)?G.resolve():this.remoteDocumentCache.getEntry(e,I).next(V=>{g=g.insert(I,V)}))).next(()=>this.populateOverlays(e,v,o)).next(()=>this.computeViews(e,g,v,Se())).next(I=>({batchId:f,changes:ud(I)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next(r=>{let i=as();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let c=as();return this.indexManager.getCollectionParents(e,o).next(f=>G.forEach(f,g=>{const v=function(k,V){return new Ds(V,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)}(t,g.child(o));return this.getDocumentsMatchingCollectionQuery(e,v,r,i).next(I=>{I.forEach((k,V)=>{c=c.insert(k,V)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(c=>{o.forEach((g,v)=>{const I=v.getKey();c.get(I)===null&&(c=c.insert(I,Tt.newInvalidDocument(I)))});let f=as();return c.forEach((g,v)=>{const I=o.get(g);I!==void 0&&ps(I.mutation,v,Mt.empty(),nt.now()),na(t,v)&&(f=f.insert(g,v))}),f})}}/**
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
 */class Zy{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Hy(i.bundledQuery),readTime:mn(i.readTime)}}(t)),G.resolve()}}/**
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
 */class ev{constructor(){this.overlays=new He(oe.comparator),this.Er=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Lr();return G.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.Tt(e,t,o)}),G.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),G.resolve()}getOverlaysForCollection(e,t,r){const i=Lr(),o=t.length+1,c=new oe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===o&&g.largestBatchId>r&&i.set(g.getKey(),g)}return G.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new He((v,I)=>v-I);const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>r){let I=o.get(v.largestBatchId);I===null&&(I=Lr(),o=o.insert(v.largestBatchId,I)),I.set(v.getKey(),v)}}const f=Lr(),g=o.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,I)=>f.set(v,I)),!(f.size()>=i)););return G.resolve(f)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new vy(t,r));let o=this.Er.get(t);o===void 0&&(o=Se(),this.Er.set(t,o)),this.Er.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class tv{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class Fu{constructor(){this.dr=new rt(ut.Ar),this.Rr=new rt(ut.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new ut(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ut(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new oe(new Be([])),r=new ut(t,e),i=new ut(t,e+1),o=[];return this.Rr.forEachInRange([r,i],c=>{this.gr(c),o.push(c.key)}),o}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new oe(new Be([])),r=new ut(t,e),i=new ut(t,e+1);let o=Se();return this.Rr.forEachInRange([r,i],c=>{o=o.add(c.key)}),o}containsKey(e){const t=new ut(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return oe.comparator(e.key,t.key)||Pe(e.br,t.br)}static Vr(e,t){return Pe(e.br,t.br)||oe.comparator(e.key,t.key)}}/**
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
 */class nv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new rt(ut.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new yy(o,t,r,i);this.mutationQueue.push(c);for(const f of i)this.vr=this.vr.add(new ut(f.key,o)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(c)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),o=i<0?0:i;return G.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ut(t,0),i=new ut(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,i],c=>{const f=this.Cr(c.br);o.push(f)}),G.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rt(Pe);return t.forEach(i=>{const o=new ut(i,0),c=new ut(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,c],f=>{r=r.add(f.br)})}),G.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;oe.isDocumentKey(o)||(o=o.child(""));const c=new ut(new oe(o),0);let f=new rt(Pe);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!r.isPrefixOf(v)&&(v.length===i&&(f=f.add(g.br)),!0)},c),G.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Oe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return G.forEach(t.mutations,i=>{const o=new ut(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new ut(t,0),i=this.vr.firstAfterOrEqual(r);return G.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class rv{constructor(e){this.Nr=e,this.docs=function(){return new He(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,c=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return G.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(t))}getEntries(e,t){let r=Fn();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Tt.newInvalidDocument(i))}),G.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Fn();const c=t.path,f=new oe(c.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:I}}=g.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||O_(x_(I),r)<=0||(i.has(I.key)||na(t,I))&&(o=o.insert(I.key,I.mutableCopy()))}return G.resolve(o)}getAllFromCollectionGroup(e,t,r,i){fe()}Lr(e,t){return G.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new iv(this)}getSize(e){return G.resolve(this.size)}}class iv extends Xy{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class sv{constructor(e){this.persistence=e,this.Br=new zr(t=>Nu(t),xu),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new Fu,this.targetCount=0,this.Qr=Di.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Di(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Br.forEach((c,f)=>{f.sequenceNumber<=t&&r.get(f.targetId)===null&&(this.Br.delete(c),o.push(this.removeMatchingKeysForTargetId(e,f.targetId)),i++)}),G.waitFor(o).next(()=>i)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return G.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),G.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(c=>{o.push(i.markPotentiallyOrphaned(e,c))}),G.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return G.resolve(r)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
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
 */class Cd{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Yo(0),this.Ur=!1,this.Ur=!0,this.Wr=new tv,this.referenceDelegate=e(this),this.Gr=new sv(this),this.indexManager=new $y,this.remoteDocumentCache=function(i){return new rv(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new qy(t),this.jr=new Zy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ev,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new nv(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){ne("MemoryPersistence","Starting transaction:",e);const i=new ov(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(e,t){return G.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class ov extends L_{constructor(e){super(),this.currentSequenceNumber=e}}class Bu{constructor(e){this.persistence=e,this.Zr=new Fu,this.Xr=null}static ei(e){return new Bu(e)}get ti(){if(this.Xr)return this.Xr;throw fe()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),G.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,r=>{const i=oe.fromPath(r);return this.ni(e,i).next(o=>{o||t.removeEntry(i,me.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class jo{constructor(e,t){this.persistence=e,this.ri=new zr(r=>F_(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Qy(this,t)}static ei(e,t){return new jo(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(o=>o?G.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(e,c=>this.ir(e,c,t).next(f=>{f||(r++,o.removeEntry(c,me.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=To(e.data.value)),t}ir(e,t,r){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return G.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ju{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=Se(),i=Se();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ju(e,t.fromCache,r,i)}}/**
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
 */class av{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uv{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return zf()?8:M_(wt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Xi(e,t).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.es(e,t,i,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new av;return this.ts(e,t,c).next(f=>{if(o.result=f,this.Hi)return this.ns(e,t,c,f.size)})}).next(()=>o.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(yi()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",vi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(yi()<=Ce.DEBUG&&ne("QueryEngine","Query:",vi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(yi()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",vi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(t))):G.resolve())}Xi(e,t){if(cl(t))return G.resolve(null);let r=gn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ou(t,null,"F"),r=gn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const c=Se(...o);return this.Zi.getDocuments(e,c).next(f=>this.indexManager.getMinOffset(e,r).next(g=>{const v=this.rs(t,f);return this.ss(t,v,c,g.readTime)?this.Xi(e,ou(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,r,i){return cl(t)||i.isEqual(me.min())?G.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const c=this.rs(t,o);return this.ss(t,c,r,i)?G.resolve(null):(yi()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vi(t)),this.os(e,c,t,N_(i,-1)).next(f=>f))})}rs(e,t){let r=new rt(od(e));return t.forEach((i,o)=>{na(e,o)&&(r=r.add(o))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(e,t,r){return yi()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",vi(t)),this.Zi.getDocumentsMatchingQuery(e,t,hr.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
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
 */class cv{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new He(Pe),this.cs=new zr(o=>Nu(o),xu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jy(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function lv(n,e,t,r){return new cv(n,e,t,r)}async function Sd(n,e){const t=ye(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],f=[];let g=Se();for(const v of i){c.push(v.batchId);for(const I of v.mutations)g=g.add(I.key)}for(const v of o){f.push(v.batchId);for(const I of v.mutations)g=g.add(I.key)}return t.localDocuments.getDocuments(r,g).next(v=>({Ts:v,removedBatchIds:c,addedBatchIds:f}))})})}function hv(n,e){const t=ye(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,g,v,I){const k=v.batch,V=k.keys();let H=G.resolve();return V.forEach(q=>{H=H.next(()=>I.getEntry(g,q)).next(K=>{const Q=v.docVersions.get(q);Oe(Q!==null),K.version.compareTo(Q)<0&&(k.applyToRemoteDocument(K,v),K.isValidDocument()&&(K.setReadTime(v.commitVersion),I.addEntry(K)))})}),H.next(()=>f.mutationQueue.removeMutationBatch(g,k))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(f){let g=Se();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Pd(n){const e=ye(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function dv(n,e){const t=ye(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const f=[];e.targetChanges.forEach((I,k)=>{const V=i.get(k);if(!V)return;f.push(t.Gr.removeMatchingKeys(o,I.removedDocuments,k).next(()=>t.Gr.addMatchingKeys(o,I.addedDocuments,k)));let H=V.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(k)!==null?H=H.withResumeToken(gt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):I.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(I.resumeToken,r)),i=i.insert(k,H),function(K,Q,J){return K.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=3e8?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(V,H,I)&&f.push(t.Gr.updateTargetData(o,H))});let g=Fn(),v=Se();if(e.documentUpdates.forEach(I=>{e.resolvedLimboDocuments.has(I)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(o,I))}),f.push(fv(o,c,e.documentUpdates).next(I=>{g=I.Is,v=I.Es})),!r.isEqual(me.min())){const I=t.Gr.getLastRemoteSnapshotVersion(o).next(k=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));f.push(I)}return G.waitFor(f).next(()=>c.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,g,v)).next(()=>g)}).then(o=>(t.us=i,o))}function fv(n,e,t){let r=Se(),i=Se();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let c=Fn();return t.forEach((f,g)=>{const v=o.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(i=i.add(f)),g.isNoDocument()&&g.version.isEqual(me.min())?(e.removeEntry(f,g.readTime),c=c.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),c=c.insert(f,g)):ne("LocalStore","Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)}),{Is:c,Es:i}})}function pv(n,e){const t=ye(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gv(n,e){const t=ye(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(o=>o?(i=o,G.resolve(i)):t.Gr.allocateTargetId(r).next(c=>(i=new or(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function hu(n,e,t){const r=ye(n),i=r.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,c=>r.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!Mi(c))throw c;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function El(n,e,t){const r=ye(n);let i=me.min(),o=Se();return r.persistence.runTransaction("Execute query","readwrite",c=>function(g,v,I){const k=ye(g),V=k.cs.get(I);return V!==void 0?G.resolve(k.us.get(V)):k.Gr.getTargetData(v,I)}(r,c,gn(e)).next(f=>{if(f)return i=f.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(c,f.targetId).next(g=>{o=g})}).next(()=>r._s.getDocumentsMatchingQuery(c,e,t?i:me.min(),t?o:Se())).next(f=>(mv(r,ry(e),f),{documents:f,ds:o})))}function mv(n,e,t){let r=n.ls.get(e)||me.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(e,r)}class wl{constructor(){this.activeTargetIds=cy()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _v{constructor(){this._o=new wl,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new wl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yv{uo(e){}shutdown(){}}/**
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
 */class Il{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ho=null;function Fa(){return ho===null?ho=function(){return 268435456+Math.round(2147483648*Math.random())}():ho++,"0x"+ho.toString(16)}/**
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
 */const vv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Tv{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const yt="WebChannelConnection";class Ev extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(t,r,i,o,c){const f=Fa(),g=this.No(t,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${f}:`,g,i);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,o,c),this.Bo(t,g,v,i).then(I=>(ne("RestConnection",`Received RPC '${t}' ${f}: `,I),I),I=>{throw Ci("RestConnection",`RPC '${t}' ${f} failed with error: `,I,"url: ",g,"request:",i),I})}ko(t,r,i,o,c,f){return this.Oo(t,r,i,o,c)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,c)=>t[c]=o),i&&i.headers.forEach((o,c)=>t[c]=o)}No(t,r){const i=vv[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){const o=Fa();return new Promise((c,f)=>{const g=new qh;g.setWithCredentials(!0),g.listenOnce(Hh.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case vo.NO_ERROR:const I=g.getResponseJson();ne(yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(I)),c(I);break;case vo.TIMEOUT:ne(yt,`RPC '${e}' ${o} timed out`),f(new re(W.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const k=g.getStatus();if(ne(yt,`RPC '${e}' ${o} failed with status:`,k,"response text:",g.getResponseText()),k>0){let V=g.getResponseJson();Array.isArray(V)&&(V=V[0]);const H=V==null?void 0:V.error;if(H&&H.status&&H.message){const q=function(Q){const J=Q.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(J)>=0?J:W.UNKNOWN}(H.status);f(new re(q,H.message))}else f(new re(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new re(W.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ne(yt,`RPC '${e}' ${o} completed.`)}});const v=JSON.stringify(i);ne(yt,`RPC '${e}' ${o} sending request:`,i),g.send(t,"POST",v,r,15)})}qo(e,t,r){const i=Fa(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Wh(),f=zh(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,r),g.encodeInitMessageHeaders=!0;const I=o.join("");ne(yt,`Creating RPC '${e}' stream ${i}: ${I}`,g);const k=c.createWebChannel(I,g);let V=!1,H=!1;const q=new Tv({Eo:Q=>{H?ne(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,Q):(V||(ne(yt,`Opening RPC '${e}' stream ${i} transport.`),k.open(),V=!0),ne(yt,`RPC '${e}' stream ${i} sending:`,Q),k.send(Q))},Ao:()=>k.close()}),K=(Q,J,_e)=>{Q.listen(J,de=>{try{_e(de)}catch(pe){setTimeout(()=>{throw pe},0)}})};return K(k,os.EventType.OPEN,()=>{H||(ne(yt,`RPC '${e}' stream ${i} transport opened.`),q.So())}),K(k,os.EventType.CLOSE,()=>{H||(H=!0,ne(yt,`RPC '${e}' stream ${i} transport closed`),q.Do())}),K(k,os.EventType.ERROR,Q=>{H||(H=!0,Ci(yt,`RPC '${e}' stream ${i} transport errored:`,Q),q.Do(new re(W.UNAVAILABLE,"The operation could not be completed")))}),K(k,os.EventType.MESSAGE,Q=>{var J;if(!H){const _e=Q.data[0];Oe(!!_e);const de=_e,pe=(de==null?void 0:de.error)||((J=de[0])===null||J===void 0?void 0:J.error);if(pe){ne(yt,`RPC '${e}' stream ${i} received error:`,pe);const qe=pe.status;let De=function(w){const R=Ze[w];if(R!==void 0)return _d(R)}(qe),l=pe.message;De===void 0&&(De=W.INTERNAL,l="Unknown error status: "+qe+" with message "+pe.message),H=!0,q.Do(new re(De,l)),k.close()}else ne(yt,`RPC '${e}' stream ${i} received:`,_e),q.vo(_e)}}),K(f,$h.STAT_EVENT,Q=>{Q.stat===eu.PROXY?ne(yt,`RPC '${e}' stream ${i} detected buffering proxy`):Q.stat===eu.NOPROXY&&ne(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{q.bo()},0),q}}function Ba(){return typeof document<"u"?document:null}/**
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
 */function oa(n){return new Sy(n,!0)}/**
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
 */class kd{constructor(e,t,r=1e3,i=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Dd{constructor(e,t,r,i,o,c,f,g){this.li=e,this.Yo=r,this.Zo=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new kd(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Un(t.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new re(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wv extends Dd{constructor(e,t,r,i,o,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=o}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Dy(this.serializer,e),r=function(o){if(!("targetChange"in o))return me.min();const c=o.targetChange;return c.targetIds&&c.targetIds.length?me.min():c.readTime?mn(c.readTime):me.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=lu(this.serializer),t.addTarget=function(o,c){let f;const g=c.target;if(f=iu(g)?{documents:Oy(o,g)}:{query:Vy(o,g).ct},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=Td(o,c.resumeToken);const v=au(o,c.expectedCount);v!==null&&(f.expectedCount=v)}else if(c.snapshotVersion.compareTo(me.min())>0){f.readTime=Bo(o,c.snapshotVersion.toTimestamp());const v=au(o,c.expectedCount);v!==null&&(f.expectedCount=v)}return f}(this.serializer,e);const r=My(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=lu(this.serializer),t.removeTarget=e,this.c_(t)}}class Iv extends Dd{constructor(e,t,r,i,o,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=xy(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=lu(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ny(this.serializer,r))};this.c_(t)}}/**
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
 */class Av extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Oo(e,uu(t,r),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(W.UNKNOWN,o.toString())})}ko(e,t,r,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.ko(e,uu(t,r),i,c,f,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new re(W.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class bv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Un(t),this.C_=!1):ne("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Rv{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(c=>{r.enqueueAndForget(async()=>{Wr(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=ye(g);v.k_.add(4),await Os(v),v.K_.set("Unknown"),v.k_.delete(4),await aa(v)}(this))})}),this.K_=new bv(r,i)}}async function aa(n){if(Wr(n))for(const e of n.q_)await e(!0)}async function Os(n){for(const e of n.q_)await e(!1)}function Nd(n,e){const t=ye(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),zu(t)?$u(t):Ui(t).s_()&&Hu(t,e))}function qu(n,e){const t=ye(n),r=Ui(t);t.B_.delete(e),r.s_()&&xd(t,e),t.B_.size===0&&(r.s_()?r.a_():Wr(t)&&t.K_.set("Unknown"))}function Hu(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ui(n).V_(e)}function xd(n,e){n.U_.xe(e),Ui(n).m_(e)}function $u(n){n.U_=new Ay({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ui(n).start(),n.K_.F_()}function zu(n){return Wr(n)&&!Ui(n).i_()&&n.B_.size>0}function Wr(n){return ye(n).k_.size===0}function Od(n){n.U_=void 0}async function Cv(n){n.K_.set("Online")}async function Sv(n){n.B_.forEach((e,t)=>{Hu(n,e)})}async function Pv(n,e){Od(n),zu(n)?(n.K_.O_(e),$u(n)):n.K_.set("Unknown")}async function kv(n,e,t){if(n.K_.set("Online"),e instanceof vd&&e.state===2&&e.cause)try{await async function(i,o){const c=o.cause;for(const f of o.targetIds)i.B_.has(f)&&(await i.remoteSyncer.rejectListen(f,c),i.B_.delete(f),i.U_.removeTarget(f))}(n,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qo(n,r)}else if(e instanceof Io?n.U_.$e(e):e instanceof yd?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(me.min()))try{const r=await Pd(n.localStore);t.compareTo(r)>=0&&await function(o,c){const f=o.U_.it(c);return f.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const I=o.B_.get(v);I&&o.B_.set(v,I.withResumeToken(g.resumeToken,c))}}),f.targetMismatches.forEach((g,v)=>{const I=o.B_.get(g);if(!I)return;o.B_.set(g,I.withResumeToken(gt.EMPTY_BYTE_STRING,I.snapshotVersion)),xd(o,g);const k=new or(I.target,g,v,I.sequenceNumber);Hu(o,k)}),o.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await qo(n,r)}}async function qo(n,e,t){if(!Mi(e))throw e;n.k_.add(1),await Os(n),n.K_.set("Offline"),t||(t=()=>Pd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await aa(n)})}function Vd(n,e){return e().catch(t=>qo(n,t,e))}async function ua(n){const e=ye(n),t=gr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Dv(e);)try{const i=await pv(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,Nv(e,i)}catch(i){await qo(e,i)}Ld(e)&&Md(e)}function Dv(n){return Wr(n)&&n.L_.length<10}function Nv(n,e){n.L_.push(e);const t=gr(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Ld(n){return Wr(n)&&!gr(n).i_()&&n.L_.length>0}function Md(n){gr(n).start()}async function xv(n){gr(n).w_()}async function Ov(n){const e=gr(n);for(const t of n.L_)e.g_(t.mutations)}async function Vv(n,e,t){const r=n.L_.shift(),i=Lu.from(r,e,t);await Vd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ua(n)}async function Lv(n,e){e&&gr(n).f_&&await async function(r,i){if(function(c){return Ey(c)&&c!==W.ABORTED}(i.code)){const o=r.L_.shift();gr(r).__(),await Vd(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ua(r)}}(n,e),Ld(n)&&Md(n)}async function Al(n,e){const t=ye(n);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Wr(t);t.k_.add(3),await Os(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await aa(t)}async function Mv(n,e){const t=ye(n);e?(t.k_.delete(2),await aa(t)):e||(t.k_.add(2),await Os(t),t.K_.set("Unknown"))}function Ui(n){return n.W_||(n.W_=function(t,r,i){const o=ye(t);return o.b_(),new wv(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:Cv.bind(null,n),mo:Sv.bind(null,n),po:Pv.bind(null,n),R_:kv.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),zu(n)?$u(n):n.K_.set("Unknown")):(await n.W_.stop(),Od(n))})),n.W_}function gr(n){return n.G_||(n.G_=function(t,r,i){const o=ye(t);return o.b_(),new Iv(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:xv.bind(null,n),po:Lv.bind(null,n),p_:Ov.bind(null,n),y_:Vv.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ua(n)):(await n.G_.stop(),n.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class Wu{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const c=Date.now()+r,f=new Wu(e,t,c,i,o);return f.start(r),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(n,e){if(Un("AsyncQueue",`${e}: ${n}`),Mi(n))return new re(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ri{static emptySet(e){return new Ri(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||oe.comparator(t.key,r.key):(t,r)=>oe.comparator(t.key,r.key),this.keyedMap=as(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ri)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class bl{constructor(){this.z_=new He(oe.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):fe():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ni{constructor(e,t,r,i,o,c,f,g,v){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,r,i,o){const c=[];return t.forEach(f=>{c.push({type:0,doc:f})}),new Ni(e,t,Ri.emptySet(t),c,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Uv{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Fv{constructor(){this.queries=Rl(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=ye(t),o=i.queries;i.queries=Rl(),o.forEach((c,f)=>{for(const g of f.J_)g.onError(r)})})(this,new re(W.ABORTED,"Firestore shutting down"))}}function Rl(){return new zr(n=>sd(n),ta)}async function Ku(n,e){const t=ye(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Y_()&&e.Z_()&&(r=2):(o=new Uv,r=e.Z_()?0:1);try{switch(r){case 0:o.H_=await t.onListen(i,!0);break;case 1:o.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const f=Gu(c,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(f)}t.queries.set(i,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&Xu(t)}async function Qu(n,e){const t=ye(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const c=o.J_.indexOf(e);c>=0&&(o.J_.splice(c,1),o.J_.length===0?i=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Bv(n,e){const t=ye(n);let r=!1;for(const i of e){const o=i.query,c=t.queries.get(o);if(c){for(const f of c.J_)f.ta(i)&&(r=!0);c.H_=i}}r&&Xu(t)}function jv(n,e,t){const r=ye(n),i=r.queries.get(e);if(i)for(const o of i.J_)o.onError(t);r.queries.delete(e)}function Xu(n){n.X_.forEach(e=>{e.next()})}var du,Cl;(Cl=du||(du={})).na="default",Cl.Cache="cache";class Yu{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==du.Cache}}/**
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
 */class Ud{constructor(e){this.key=e}}class Fd{constructor(e){this.key=e}}class qv{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Se(),this.mutatedKeys=Se(),this.Va=od(e),this.ma=new Ri(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new bl,i=t?t.ma:this.ma;let o=t?t.mutatedKeys:this.mutatedKeys,c=i,f=!1;const g=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,v=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((I,k)=>{const V=i.get(I),H=na(this.query,k)?k:null,q=!!V&&this.mutatedKeys.has(V.key),K=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let Q=!1;V&&H?V.data.isEqual(H.data)?q!==K&&(r.track({type:3,doc:H}),Q=!0):this.ya(V,H)||(r.track({type:2,doc:H}),Q=!0,(g&&this.Va(H,g)>0||v&&this.Va(H,v)<0)&&(f=!0)):!V&&H?(r.track({type:0,doc:H}),Q=!0):V&&!H&&(r.track({type:1,doc:V}),Q=!0,(g||v)&&(f=!0)),Q&&(H?(c=c.add(H),o=K?o.add(I):o.delete(I)):(c=c.delete(I),o=o.delete(I)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const I=this.query.limitType==="F"?c.last():c.first();c=c.delete(I.key),o=o.delete(I.key),r.track({type:1,doc:I})}return{ma:c,pa:r,ss:f,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((I,k)=>function(H,q){const K=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return K(H)-K(q)}(I.type,k.type)||this.Va(I.doc,k.doc)),this.wa(r),i=i!=null&&i;const f=t&&!i?this.Sa():[],g=this.Ra.size===0&&this.current&&!i?1:0,v=g!==this.Aa;return this.Aa=g,c.length!==0||v?{snapshot:new Ni(this.query,e.ma,o,c,e.mutatedKeys,g===0,v,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new bl,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Se(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Fd(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Ud(r))}),t}va(e){this.da=e.ds,this.Ra=Se();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Ni.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $v{constructor(e){this.key=e,this.Fa=!1}}class zv{constructor(e,t,r,i,o,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new zr(f=>sd(f),ta),this.Oa=new Map,this.Na=new Set,this.La=new He(oe.comparator),this.Ba=new Map,this.ka=new Fu,this.qa={},this.Qa=new Map,this.Ka=Di.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Wv(n,e,t=!0){const r=zd(n);let i;const o=r.xa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await Bd(r,e,t,!0),i}async function Gv(n,e){const t=zd(n);await Bd(t,e,!0,!1)}async function Bd(n,e,t,r){const i=await gv(n.localStore,gn(e)),o=i.targetId,c=n.sharedClientState.addLocalQueryTarget(o,t);let f;return r&&(f=await Kv(n,e,o,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&Nd(n.remoteStore,i),f}async function Kv(n,e,t,r,i){n.Ua=(k,V,H)=>async function(K,Q,J,_e){let de=Q.view.ga(J);de.ss&&(de=await El(K.localStore,Q.query,!1).then(({documents:l})=>Q.view.ga(l,de)));const pe=_e&&_e.targetChanges.get(Q.targetId),qe=_e&&_e.targetMismatches.get(Q.targetId)!=null,De=Q.view.applyChanges(de,K.isPrimaryClient,pe,qe);return Pl(K,Q.targetId,De.ba),De.snapshot}(n,k,V,H);const o=await El(n.localStore,e,!0),c=new qv(e,o.ds),f=c.ga(o.documents),g=xs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),v=c.applyChanges(f,n.isPrimaryClient,g);Pl(n,t,v.ba);const I=new Hv(e,t,c);return n.xa.set(e,I),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),v.snapshot}async function Qv(n,e,t){const r=ye(n),i=r.xa.get(e),o=r.Oa.get(i.targetId);if(o.length>1)return r.Oa.set(i.targetId,o.filter(c=>!ta(c,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&qu(r.remoteStore,i.targetId),fu(r,i.targetId)}).catch(Li)):(fu(r,i.targetId),await hu(r.localStore,i.targetId,!0))}async function Xv(n,e){const t=ye(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),qu(t.remoteStore,r.targetId))}async function Yv(n,e,t){const r=iT(n);try{const i=await function(c,f){const g=ye(c),v=nt.now(),I=f.reduce((H,q)=>H.add(q.key),Se());let k,V;return g.persistence.runTransaction("Locally write mutations","readwrite",H=>{let q=Fn(),K=Se();return g.hs.getEntries(H,I).next(Q=>{q=Q,q.forEach((J,_e)=>{_e.isValidDocument()||(K=K.add(J))})}).next(()=>g.localDocuments.getOverlayedDocuments(H,q)).next(Q=>{k=Q;const J=[];for(const _e of f){const de=my(_e,k.get(_e.key).overlayedDocument);de!=null&&J.push(new vr(_e.key,de,Yh(de.value.mapValue),Ft.exists(!0)))}return g.mutationQueue.addMutationBatch(H,v,J,f)}).next(Q=>{V=Q;const J=Q.applyToLocalDocumentSet(k,K);return g.documentOverlayCache.saveOverlays(H,Q.batchId,J)})}).then(()=>({batchId:V.batchId,changes:ud(k)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(c,f,g){let v=c.qa[c.currentUser.toKey()];v||(v=new He(Pe)),v=v.insert(f,g),c.qa[c.currentUser.toKey()]=v}(r,i.batchId,t),await Vs(r,i.changes),await ua(r.remoteStore)}catch(i){const o=Gu(i,"Failed to persist write");t.reject(o)}}async function jd(n,e){const t=ye(n);try{const r=await dv(t.localStore,e);e.targetChanges.forEach((i,o)=>{const c=t.Ba.get(o);c&&(Oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?c.Fa=!0:i.modifiedDocuments.size>0?Oe(c.Fa):i.removedDocuments.size>0&&(Oe(c.Fa),c.Fa=!1))}),await Vs(t,r,e)}catch(r){await Li(r)}}function Sl(n,e,t){const r=ye(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((o,c)=>{const f=c.view.ea(e);f.snapshot&&i.push(f.snapshot)}),function(c,f){const g=ye(c);g.onlineState=f;let v=!1;g.queries.forEach((I,k)=>{for(const V of k.J_)V.ea(f)&&(v=!0)}),v&&Xu(g)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jv(n,e,t){const r=ye(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ba.get(e),o=i&&i.key;if(o){let c=new He(oe.comparator);c=c.insert(o,Tt.newNoDocument(o,me.min()));const f=Se().add(o),g=new sa(me.min(),new Map,new He(Pe),c,f);await jd(r,g),r.La=r.La.remove(o),r.Ba.delete(e),Ju(r)}else await hu(r.localStore,e,!1).then(()=>fu(r,e,t)).catch(Li)}async function Zv(n,e){const t=ye(n),r=e.batch.batchId;try{const i=await hv(t.localStore,e);Hd(t,r,null),qd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vs(t,i)}catch(i){await Li(i)}}async function eT(n,e,t){const r=ye(n);try{const i=await function(c,f){const g=ye(c);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let I;return g.mutationQueue.lookupMutationBatch(v,f).next(k=>(Oe(k!==null),I=k.keys(),g.mutationQueue.removeMutationBatch(v,k))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,I,f)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,I)).next(()=>g.localDocuments.getDocuments(v,I))})}(r.localStore,e);Hd(r,e,t),qd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vs(r,i)}catch(i){await Li(i)}}function qd(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Hd(n,e,t){const r=ye(n);let i=r.qa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function fu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||$d(n,r)})}function $d(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(qu(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Ju(n))}function Pl(n,e,t){for(const r of t)r instanceof Ud?(n.ka.addReference(r.key,e),tT(n,r)):r instanceof Fd?(ne("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||$d(n,r.key)):fe()}function tT(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(ne("SyncEngine","New document in limbo: "+t),n.Na.add(r),Ju(n))}function Ju(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new oe(Be.fromString(e)),r=n.Ka.next();n.Ba.set(r,new $v(t)),n.La=n.La.insert(t,r),Nd(n.remoteStore,new or(gn(ea(t.path)),r,"TargetPurposeLimboResolution",Yo.oe))}}async function Vs(n,e,t){const r=ye(n),i=[],o=[],c=[];r.xa.isEmpty()||(r.xa.forEach((f,g)=>{c.push(r.Ua(g,e,t).then(v=>{var I;if((v||t)&&r.isPrimaryClient){const k=v?!v.fromCache:(I=t==null?void 0:t.targetChanges.get(g.targetId))===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(g.targetId,k?"current":"not-current")}if(v){i.push(v);const k=ju.zi(g.targetId,v);o.push(k)}}))}),await Promise.all(c),r.Ma.R_(i),await async function(g,v){const I=ye(g);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",k=>G.forEach(v,V=>G.forEach(V.Wi,H=>I.persistence.referenceDelegate.addReference(k,V.targetId,H)).next(()=>G.forEach(V.Gi,H=>I.persistence.referenceDelegate.removeReference(k,V.targetId,H)))))}catch(k){if(!Mi(k))throw k;ne("LocalStore","Failed to update sequence numbers: "+k)}for(const k of v){const V=k.targetId;if(!k.fromCache){const H=I.us.get(V),q=H.snapshotVersion,K=H.withLastLimboFreeSnapshotVersion(q);I.us=I.us.insert(V,K)}}}(r.localStore,o))}async function nT(n,e){const t=ye(n);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await Sd(t.localStore,e);t.currentUser=e,function(o,c){o.Qa.forEach(f=>{f.forEach(g=>{g.reject(new re(W.CANCELLED,c))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vs(t,r.Ts)}}function rT(n,e){const t=ye(n),r=t.Ba.get(e);if(r&&r.Fa)return Se().add(r.key);{let i=Se();const o=t.Oa.get(e);if(!o)return i;for(const c of o){const f=t.xa.get(c);i=i.unionWith(f.view.fa)}return i}}function zd(n){const e=ye(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jv.bind(null,e),e.Ma.R_=Bv.bind(null,e.eventManager),e.Ma.Wa=jv.bind(null,e.eventManager),e}function iT(n){const e=ye(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eT.bind(null,e),e}class Ho{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return lv(this.persistence,new uv,e.initialUser,this.serializer)}ja(e){return new Cd(Bu.ei,this.serializer)}za(e){return new _v}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ho.provider={build:()=>new Ho};class sT extends Ho{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Oe(this.persistence.referenceDelegate instanceof jo);const r=this.persistence.referenceDelegate.garbageCollector;return new Gy(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new Cd(r=>jo.ei(r,t),this.serializer)}}class pu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nT.bind(null,this.syncEngine),await Mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fv}()}createDatastore(e){const t=oa(e.databaseInfo.databaseId),r=function(o){return new Ev(o)}(e.databaseInfo);return function(o,c,f,g){return new Av(o,c,f,g)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,c,f){return new Rv(r,i,o,c,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Sl(this.syncEngine,t,0),function(){return Il.p()?new Il:new yv}())}createSyncEngine(e,t){return function(i,o,c,f,g,v,I){const k=new zv(i,o,c,f,g,v);return I&&(k.$a=!0),k}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=ye(i);ne("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Os(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}pu.provider={build:()=>new pu};/**
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
 *//**
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
 */class Zu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class oT{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=Kh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async c=>{ne("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(ne("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ja(n,e){n.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Sd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aT(n);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Al(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Al(e.remoteStore,i)),n._onlineComponents=e}async function aT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await ja(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ci("Error using user provided cache. Falling back to memory cache: "+t),await ja(n,new Ho)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await ja(n,new sT(void 0));return n._offlineComponents}async function Wd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await kl(n,n._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await kl(n,new pu))),n._onlineComponents}function uT(n){return Wd(n).then(e=>e.syncEngine)}async function $o(n){const e=await Wd(n),t=e.eventManager;return t.onListen=Wv.bind(null,e.syncEngine),t.onUnlisten=Qv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Gv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xv.bind(null,e.syncEngine),t}function cT(n,e,t={}){const r=new Vn;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,f,g,v){const I=new Zu({next:V=>{I.eu(),c.enqueueAndForget(()=>Qu(o,k));const H=V.docs.has(f);!H&&V.fromCache?v.reject(new re(W.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&V.fromCache&&g&&g.source==="server"?v.reject(new re(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(V)},error:V=>v.reject(V)}),k=new Yu(ea(f.path),I,{includeMetadataChanges:!0,ua:!0});return Ku(o,k)}(await $o(n),n.asyncQueue,e,t,r)),r.promise}function lT(n,e,t={}){const r=new Vn;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,f,g,v){const I=new Zu({next:V=>{I.eu(),c.enqueueAndForget(()=>Qu(o,k)),V.fromCache&&g.source==="server"?v.reject(new re(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(V)},error:V=>v.reject(V)}),k=new Yu(f,I,{includeMetadataChanges:!0,ua:!0});return Ku(o,k)}(await $o(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Gd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Dl=new Map;/**
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
 */function Kd(n,e,t){if(!t)throw new re(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hT(n,e,t,r){if(e===!0&&r===!0)throw new re(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nl(n){if(!oe.isDocumentKey(n))throw new re(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xl(n){if(oe.isDocumentKey(n))throw new re(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ca(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":fe()}function Bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ca(n);throw new re(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Ol{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class la{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ol({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ol(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new I_;switch(r.type){case"firstParty":return new C_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Dl.get(t);r&&(ne("ComponentProvider","Removing Datastore"),Dl.delete(t),r.terminate())}(this),Promise.resolve()}}function dT(n,e,t,r={}){var i;const o=(n=Bt(n,la))._getSettings(),c=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&Ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),r.mockUserToken){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=vt.MOCK_USER;else{f=Zl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new re(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new vt(v)}n._authCredentials=new A_(new Gh(f,g))}}/**
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
 */class Gr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class Et{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class cr extends Gr{constructor(e,t,r){super(e,t,ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new oe(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function KE(n,e,...t){if(n=je(n),Kd("collection","path",e),n instanceof la){const r=Be.fromString(e,...t);return xl(r),new cr(n,null,r)}{if(!(n instanceof Et||n instanceof cr))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return xl(r),new cr(n.firestore,null,r)}}function QE(n,e,...t){if(n=je(n),arguments.length===1&&(e=Kh.newId()),Kd("doc","path",e),n instanceof la){const r=Be.fromString(e,...t);return Nl(r),new Et(n,null,new oe(r))}{if(!(n instanceof Et||n instanceof cr))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return Nl(r),new Et(n.firestore,n instanceof cr?n.converter:null,new oe(r))}}/**
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
 */class Vl{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new kd(this,"async_queue_retry"),this.fu=()=>{const r=Ba();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Ba();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Ba();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Vn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Mi(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(c){let f=c.message||"";return c.stack&&(f=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),f}(r);throw Un("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=Wu.createAndSchedule(this,e,t,r,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&fe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Ll(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class mr extends la{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Vl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vl(e),this._firestoreClient=void 0,await e}}}function fT(n,e){const t=typeof n=="object"?n:vu(),r=typeof n=="string"?n:"(default)",i=Go(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Xl("firestore");o&&dT(i,...o)}return i}function Ls(n){if(n._terminated)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pT(n),n._firestoreClient}function pT(n){var e,t,r;const i=n._freezeSettings(),o=function(f,g,v,I){return new q_(f,g,v,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Gd(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new oT(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(n._componentsProvider))}/**
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
 */class xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xi(gt.fromBase64String(e))}catch(t){throw new re(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xi(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ms{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ec{constructor(e){this._methodName=e}}/**
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
 */class tc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const gT=/^__.*__$/;class mT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}}class Qd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new vr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class rc{constructor(e,t,r,i,o,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return zo(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Xd(this.Mu)&&gT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class _T{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oa(e)}$u(e,t,r,i=!1){return new rc({Mu:e,methodName:t,Ku:r,path:pt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ha(n){const e=n._freezeSettings(),t=oa(n._databaseId);return new _T(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yd(n,e,t,r,i,o={}){const c=n.$u(o.merge||o.mergeFields?2:0,e,t,i);ic("Data must be an object, but it was:",c,r);const f=ef(r,c);let g,v;if(o.merge)g=new Mt(c.fieldMask),v=c.fieldTransforms;else if(o.mergeFields){const I=[];for(const k of o.mergeFields){const V=gu(e,k,t);if(!c.contains(V))throw new re(W.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);nf(I,V)||I.push(V)}g=new Mt(I),v=c.fieldTransforms.filter(k=>g.covers(k.field))}else g=null,v=c.fieldTransforms;return new mT(new Nt(f),g,v)}class da extends ec{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof da}}function Jd(n,e,t,r){const i=n.$u(1,e,t);ic("Data must be an object, but it was:",i,r);const o=[],c=Nt.empty();yr(r,(g,v)=>{const I=sc(e,g,t);v=je(v);const k=i.Bu(I);if(v instanceof da)o.push(I);else{const V=Us(v,k);V!=null&&(o.push(I),c.set(I,V))}});const f=new Mt(o);return new Qd(c,f,i.fieldTransforms)}function Zd(n,e,t,r,i,o){const c=n.$u(1,e,t),f=[gu(e,r,t)],g=[i];if(o.length%2!=0)throw new re(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<o.length;V+=2)f.push(gu(e,o[V])),g.push(o[V+1]);const v=[],I=Nt.empty();for(let V=f.length-1;V>=0;--V)if(!nf(v,f[V])){const H=f[V];let q=g[V];q=je(q);const K=c.Bu(H);if(q instanceof da)v.push(H);else{const Q=Us(q,K);Q!=null&&(v.push(H),I.set(H,Q))}}const k=new Mt(v);return new Qd(I,k,c.fieldTransforms)}function yT(n,e,t,r=!1){return Us(t,n.$u(r?4:3,e))}function Us(n,e){if(tf(n=je(n)))return ic("Unsupported field value:",e,n),ef(n,e);if(n instanceof ec)return function(r,i){if(!Xd(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const o=[];let c=0;for(const f of r){let g=Us(f,i.ku(c));g==null&&(g={nullValue:"NULL_VALUE"}),o.push(g),c++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ly(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Bo(i.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bo(i.serializer,o)}}if(r instanceof tc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xi)return{bytesValue:Td(i.serializer,r._byteString)};if(r instanceof Et){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Uu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof nc)return function(c,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw f.qu("VectorValues must only contain numeric values.");return Ou(f.serializer,g)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${ca(r)}`)}(n,e)}function ef(n,e){const t={};return Qh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(n,(r,i)=>{const o=Us(i,e.Ou(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function tf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof tc||n instanceof xi||n instanceof Et||n instanceof ec||n instanceof nc)}function ic(n,e,t){if(!tf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ca(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function gu(n,e,t){if((e=je(e))instanceof Ms)return e._internalPath;if(typeof e=="string")return sc(n,e);throw zo("Field path arguments must be of type string or ",n,!1,void 0,t)}const vT=new RegExp("[~\\*/\\[\\]]");function sc(n,e,t){if(e.search(vT)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ms(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zo(n,e,t,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(o||c)&&(g+=" (found",o&&(g+=` in field ${r}`),c&&(g+=` in document ${i}`),g+=")"),new re(W.INVALID_ARGUMENT,f+n+g)}function nf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class rf{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TT extends rf{data(){return super.data()}}function oc(n,e){return typeof e=="string"?sc(n,e):e instanceof Ms?e._internalPath:e._delegate._internalPath}/**
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
 */function sf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ac{}class ET extends ac{}function XE(n,e,...t){let r=[];e instanceof ac&&r.push(e),r=r.concat(t),function(o){const c=o.filter(g=>g instanceof uc).length,f=o.filter(g=>g instanceof fa).length;if(c>1||c>0&&f>0)throw new re(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class fa extends ET{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new fa(e,t,r)}_apply(e){const t=this._parse(e);return of(e._query,t),new Gr(e.firestore,e.converter,su(e._query,t))}_parse(e){const t=ha(e.firestore);return function(o,c,f,g,v,I,k){let V;if(v.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new re(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){Ul(k,I);const H=[];for(const q of k)H.push(Ml(g,o,q));V={arrayValue:{values:H}}}else V=Ml(g,o,k)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||Ul(k,I),V=yT(f,c,k,I==="in"||I==="not-in");return et.create(v,I,V)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function YE(n,e,t){const r=e,i=oc("where",n);return fa._create(i,r,t)}class uc extends ac{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Zt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let c=i;const f=o.getFlattenedFilters();for(const g of f)of(c,g),c=su(c,g)}(e._query,t),new Gr(e.firestore,e.converter,su(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ml(n,e,t){if(typeof(t=je(t))=="string"){if(t==="")throw new re(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!id(e)&&t.indexOf("/")!==-1)throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Be.fromString(t));if(!oe.isDocumentKey(r))throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rl(n,new oe(r))}if(t instanceof Et)return rl(n,t._key);throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ca(t)}.`)}function Ul(n,e){if(!Array.isArray(n)||n.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function of(n,e){const t=function(i,o){for(const c of i)for(const f of c.getFlattenedFilters())if(o.indexOf(f.op)>=0)return f.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wT{convertValue(e,t="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return yr(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(c=>Xe(c.doubleValue));return new nc(o)}convertGeoPoint(e){return new tc(Xe(e.latitude),Xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Zo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const t=dr(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Be.fromString(e);Oe(Rd(r));const i=new Es(r.get(1),r.get(3)),o=new oe(r.popFirst(5));return i.isEqual(t)||Un(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function af(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uf extends rf{constructor(e,t,r,i,o,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(oc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ao extends uf{data(e={}){return super.data(e)}}class cf{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ao(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(f=>{const g=new Ao(i._firestore,i._userDataWriter,f.doc.key,f.doc,new cs(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(f=>o||f.type!==3).map(f=>{const g=new Ao(i._firestore,i._userDataWriter,f.doc.key,f.doc,new cs(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,I=-1;return f.type!==0&&(v=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),I=c.indexOf(f.doc.key)),{type:IT(f.type),doc:g,oldIndex:v,newIndex:I}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function IT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
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
 */function JE(n){n=Bt(n,Et);const e=Bt(n.firestore,mr);return cT(Ls(e),n._key).then(t=>lf(e,n,t))}class cc extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new xi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function ZE(n){n=Bt(n,Gr);const e=Bt(n.firestore,mr),t=Ls(e),r=new cc(e);return sf(n._query),lT(t,n._query).then(i=>new cf(e,r,n,i))}function ew(n,e,t){n=Bt(n,Et);const r=Bt(n.firestore,mr),i=af(n.converter,e,t);return lc(r,[Yd(ha(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ft.none())])}function tw(n,e,t,...r){n=Bt(n,Et);const i=Bt(n.firestore,mr),o=ha(i);let c;return c=typeof(e=je(e))=="string"||e instanceof Ms?Zd(o,"updateDoc",n._key,e,t,r):Jd(o,"updateDoc",n._key,e),lc(i,[c.toMutation(n._key,Ft.exists(!0))])}function nw(n,...e){var t,r,i;n=je(n);let o={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Ll(e[c])||(o=e[c],c++);const f={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ll(e[c])){const k=e[c];e[c]=(t=k.next)===null||t===void 0?void 0:t.bind(k),e[c+1]=(r=k.error)===null||r===void 0?void 0:r.bind(k),e[c+2]=(i=k.complete)===null||i===void 0?void 0:i.bind(k)}let g,v,I;if(n instanceof Et)v=Bt(n.firestore,mr),I=ea(n._key.path),g={next:k=>{e[c]&&e[c](lf(v,n,k))},error:e[c+1],complete:e[c+2]};else{const k=Bt(n,Gr);v=Bt(k.firestore,mr),I=k._query;const V=new cc(v);g={next:H=>{e[c]&&e[c](new cf(v,V,k,H))},error:e[c+1],complete:e[c+2]},sf(n._query)}return function(V,H,q,K){const Q=new Zu(K),J=new Yu(H,Q,q);return V.asyncQueue.enqueueAndForget(async()=>Ku(await $o(V),J)),()=>{Q.eu(),V.asyncQueue.enqueueAndForget(async()=>Qu(await $o(V),J))}}(Ls(v),I,f,g)}function lc(n,e){return function(r,i){const o=new Vn;return r.asyncQueue.enqueueAndForget(async()=>Yv(await uT(r),i,o)),o.promise}(Ls(n),e)}function lf(n,e,t){const r=t.docs.get(e._key),i=new cc(n);return new uf(n,i,e._key,r,new cs(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class AT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ha(e)}set(e,t,r){this._verifyNotCommitted();const i=qa(e,this._firestore),o=af(i.converter,t,r),c=Yd(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(c.toMutation(i._key,Ft.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const o=qa(e,this._firestore);let c;return c=typeof(t=je(t))=="string"||t instanceof Ms?Zd(this._dataReader,"WriteBatch.update",o._key,t,r,i):Jd(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(c.toMutation(o._key,Ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=qa(e,this._firestore);return this._mutations=this._mutations.concat(new Vu(t._key,Ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new re(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function qa(n,e){if((n=je(n)).firestore!==e)throw new re(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function rw(n){return Ls(n=Bt(n,mr)),new AT(n,e=>lc(n,e))}(function(e,t=!0){(function(i){Vi=i})($r),Fr(new lr("firestore",(r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),f=new mr(new b_(r.getProvider("auth-internal")),new P_(r.getProvider("app-check-internal")),function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new re(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(v.options.projectId,I)}(c,i),c);return o=Object.assign({useFetchStreams:t},o),f._setSettings(o),f},"PUBLIC").setMultipleInstances(!0)),dn(Yc,"4.7.5",e),dn(Yc,"4.7.5","esm2017")})();/**
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
 */const hf="firebasestorage.googleapis.com",df="storageBucket",bT=2*60*1e3,RT=10*60*1e3;/**
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
 */class Ge extends yn{constructor(e,t,r=0){super(Ha(e),`Firebase Storage: ${t} (${Ha(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ha(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Ha(n){return"storage/"+n}function hc(){const n="An unknown error occurred, please check the error payload for server response.";return new Ge(We.UNKNOWN,n)}function CT(n){return new Ge(We.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ST(n){return new Ge(We.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function PT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(We.UNAUTHENTICATED,n)}function kT(){return new Ge(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DT(n){return new Ge(We.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function NT(){return new Ge(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xT(){return new Ge(We.CANCELED,"User canceled the upload/download.")}function OT(n){return new Ge(We.INVALID_URL,"Invalid URL '"+n+"'.")}function VT(n){return new Ge(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function LT(){return new Ge(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+df+"' property when initializing the app?")}function MT(){return new Ge(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UT(){return new Ge(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FT(n){return new Ge(We.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mu(n){return new Ge(We.INVALID_ARGUMENT,n)}function ff(){return new Ge(We.APP_DELETED,"The Firebase app was deleted.")}function BT(n){return new Ge(We.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gs(n,e){return new Ge(We.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function rs(n){throw new Ge(We.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ut{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ut.makeFromUrl(e,t)}catch{return new Ut(e,"")}if(r.path==="")return r;throw VT(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(pe){pe.path.charAt(pe.path.length-1)==="/"&&(pe.path_=pe.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+i+c,"i"),g={bucket:1,path:3};function v(pe){pe.path_=decodeURIComponent(pe.path)}const I="v[A-Za-z0-9_]+",k=t.replace(/[.]/g,"\\."),V="(/([^?#]*).*)?$",H=new RegExp(`^https?://${k}/${I}/b/${i}/o${V}`,"i"),q={bucket:1,path:3},K=t===hf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,Q="([^?#]*)",J=new RegExp(`^https?://${K}/${i}/${Q}`,"i"),de=[{regex:f,indices:g,postModify:o},{regex:H,indices:q,postModify:v},{regex:J,indices:{bucket:1,path:2},postModify:v}];for(let pe=0;pe<de.length;pe++){const qe=de[pe],De=qe.regex.exec(e);if(De){const l=De[qe.indices.bucket];let S=De[qe.indices.path];S||(S=""),r=new Ut(l,S),qe.postModify(r);break}}if(r==null)throw OT(e);return r}}class jT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qT(n,e,t){let r=1,i=null,o=null,c=!1,f=0;function g(){return f===2}let v=!1;function I(...Q){v||(v=!0,e.apply(null,Q))}function k(Q){i=setTimeout(()=>{i=null,n(H,g())},Q)}function V(){o&&clearTimeout(o)}function H(Q,...J){if(v){V();return}if(Q){V(),I.call(null,Q,...J);return}if(g()||c){V(),I.call(null,Q,...J);return}r<64&&(r*=2);let de;f===1?(f=2,de=0):de=(r+Math.random())*1e3,k(de)}let q=!1;function K(Q){q||(q=!0,V(),!v&&(i!==null?(Q||(f=2),clearTimeout(i),k(0)):Q||(f=1)))}return k(0),o=setTimeout(()=>{c=!0,K(!0)},t),K}function HT(n){n(!1)}/**
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
 */function $T(n){return n!==void 0}function zT(n){return typeof n=="object"&&!Array.isArray(n)}function dc(n){return typeof n=="string"||n instanceof String}function Fl(n){return fc()&&n instanceof Blob}function fc(){return typeof Blob<"u"}function Bl(n,e,t,r){if(r<e)throw mu(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw mu(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function pa(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function pf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Ur;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ur||(Ur={}));/**
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
 */function WT(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||i||o}/**
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
 */class GT{constructor(e,t,r,i,o,c,f,g,v,I,k,V=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=g,this.timeout_=v,this.progressCallback_=I,this.connectionFactory_=k,this.retry=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((H,q)=>{this.resolve_=H,this.reject_=q,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new fo(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const c=f=>{const g=f.loaded,v=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,v)};this.progressCallback_!==null&&o.addUploadProgressListener(c),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(c),this.pendingConnection_=null;const f=o.getErrorCode()===Ur.NO_ERROR,g=o.getStatus();if(!f||WT(g,this.additionalRetryCodes_)&&this.retry){const I=o.getErrorCode()===Ur.ABORT;r(!1,new fo(!1,null,I));return}const v=this.successCodes_.indexOf(g)!==-1;r(!0,new fo(v,o))})},t=(r,i)=>{const o=this.resolve_,c=this.reject_,f=i.connection;if(i.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());$T(g)?o(g):o()}catch(g){c(g)}else if(f!==null){const g=hc();g.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,g)):c(g)}else if(i.canceled){const g=this.appDelete_?ff():xT();c(g)}else{const g=NT();c(g)}};this.canceled_?t(!1,new fo(!1,null,!0)):this.backoffId_=qT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function KT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function QT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function YT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function JT(n,e,t,r,i,o,c=!0){const f=pf(n.urlParams),g=n.url+f,v=Object.assign({},n.headers);return XT(v,e),KT(v,t),QT(v,o),YT(v,r),new GT(g,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,c)}/**
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
 */function ZT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eE(...n){const e=ZT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(fc())return new Blob(n);throw new Ge(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function nE(n){if(typeof atob>"u")throw FT("base-64");return atob(n)}/**
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
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $a{constructor(e,t){this.data=e,this.contentType=t||null}}function rE(n,e){switch(n){case hn.RAW:return new $a(gf(e));case hn.BASE64:case hn.BASE64URL:return new $a(mf(n,e));case hn.DATA_URL:return new $a(sE(e),oE(e))}throw hc()}function gf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=r,c=n.charCodeAt(++t);r=65536|(o&1023)<<10|c&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iE(n){let e;try{e=decodeURIComponent(n)}catch{throw gs(hn.DATA_URL,"Malformed data URL.")}return gf(e)}function mf(n,e){switch(n){case hn.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw gs(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw gs(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=nE(e)}catch(i){throw i.message.includes("polyfill")?i:gs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class _f{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw gs(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=aE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sE(n){const e=new _f(n);return e.base64?mf(hn.BASE64,e.rest):iE(e.rest)}function oE(n){return new _f(n).contentType}function aE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class sr{constructor(e,t){let r=0,i="";Fl(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Fl(this.data_)){const r=this.data_,i=tE(r,e,t);return i===null?null:new sr(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new sr(r,!0)}}static getBlob(...e){if(fc()){const t=e.map(r=>r instanceof sr?r.data_:r);return new sr(eE.apply(null,t))}else{const t=e.map(c=>dc(c)?rE(hn.RAW,c).data:c.data_);let r=0;t.forEach(c=>{r+=c.byteLength});const i=new Uint8Array(r);let o=0;return t.forEach(c=>{for(let f=0;f<c.length;f++)i[o++]=c[f]}),new sr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function yf(n){let e;try{e=JSON.parse(n)}catch{return null}return zT(e)?e:null}/**
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
 */function uE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function cE(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function vf(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function lE(n,e){return e}class Ct{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||lE}}let po=null;function hE(n){return!dc(n)||n.length<2?n:vf(n)}function Tf(){if(po)return po;const n=[];n.push(new Ct("bucket")),n.push(new Ct("generation")),n.push(new Ct("metageneration")),n.push(new Ct("name","fullPath",!0));function e(o,c){return hE(c)}const t=new Ct("name");t.xform=e,n.push(t);function r(o,c){return c!==void 0?Number(c):c}const i=new Ct("size");return i.xform=r,n.push(i),n.push(new Ct("timeCreated")),n.push(new Ct("updated")),n.push(new Ct("md5Hash",null,!0)),n.push(new Ct("cacheControl",null,!0)),n.push(new Ct("contentDisposition",null,!0)),n.push(new Ct("contentEncoding",null,!0)),n.push(new Ct("contentLanguage",null,!0)),n.push(new Ct("contentType",null,!0)),n.push(new Ct("metadata","customMetadata",!0)),po=n,po}function dE(n,e){function t(){const r=n.bucket,i=n.fullPath,o=new Ut(r,i);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function fE(n,e,t){const r={};r.type="file";const i=t.length;for(let o=0;o<i;o++){const c=t[o];r[c.local]=c.xform(r,e[c.server])}return dE(r,n),r}function Ef(n,e,t){const r=yf(e);return r===null?null:fE(n,r,t)}function pE(n,e,t,r){const i=yf(e);if(i===null||!dc(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const c=encodeURIComponent;return o.split(",").map(v=>{const I=n.bucket,k=n.fullPath,V="/b/"+c(I)+"/o/"+c(k),H=pa(V,t,r),q=pf({alt:"media",token:v});return H+q})[0]}function gE(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}class pc{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wf(n){if(!n)throw hc()}function mE(n,e){function t(r,i){const o=Ef(n,i,e);return wf(o!==null),o}return t}function _E(n,e){function t(r,i){const o=Ef(n,i,e);return wf(o!==null),pE(o,i,n.host,n._protocol)}return t}function If(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=kT():i=PT():t.getStatus()===402?i=ST(n.bucket):t.getStatus()===403?i=DT(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Af(n){const e=If(n);function t(r,i){let o=e(r,i);return r.getStatus()===404&&(o=CT(n.path)),o.serverResponse=i.serverResponse,o}return t}function yE(n,e,t){const r=e.fullServerUrl(),i=pa(r,n.host,n._protocol),o="GET",c=n.maxOperationRetryTime,f=new pc(i,o,_E(n,t),c);return f.errorHandler=Af(e),f}function vE(n,e){const t=e.fullServerUrl(),r=pa(t,n.host,n._protocol),i="DELETE",o=n.maxOperationRetryTime;function c(g,v){}const f=new pc(r,i,c,o);return f.successCodes=[200,204],f.errorHandler=Af(e),f}function TE(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function EE(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=TE(null,e)),r}function wE(n,e,t,r,i){const o=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function f(){let de="";for(let pe=0;pe<2;pe++)de=de+Math.random().toString().slice(2);return de}const g=f();c["Content-Type"]="multipart/related; boundary="+g;const v=EE(e,r,i),I=gE(v,t),k="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+I+`\r
--`+g+`\r
Content-Type: `+v.contentType+`\r
\r
`,V=`\r
--`+g+"--",H=sr.getBlob(k,r,V);if(H===null)throw MT();const q={name:v.fullPath},K=pa(o,n.host,n._protocol),Q="POST",J=n.maxUploadRetryTime,_e=new pc(K,Q,mE(n,t),J);return _e.urlParams=q,_e.headers=c,_e.body=H.uploadData(),_e.errorHandler=If(e),_e}class IE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ur.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ur.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ur.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AE extends IE{initXhr(){this.xhr_.responseType="text"}}function gc(){return new AE}/**
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
 */class Hr{constructor(e,t){this._service=e,t instanceof Ut?this._location=t:this._location=Ut.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Hr(e,t)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vf(this._location.path)}get storage(){return this._service}get parent(){const e=uE(this._location.path);if(e===null)return null;const t=new Ut(this._location.bucket,e);return new Hr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BT(e)}}function bE(n,e,t){n._throwIfRoot("uploadBytes");const r=wE(n.storage,n._location,Tf(),new sr(e,!0),t);return n.storage.makeRequestWithTokens(r,gc).then(i=>({metadata:i,ref:n}))}function RE(n){n._throwIfRoot("getDownloadURL");const e=yE(n.storage,n._location,Tf());return n.storage.makeRequestWithTokens(e,gc).then(t=>{if(t===null)throw UT();return t})}function CE(n){n._throwIfRoot("deleteObject");const e=vE(n.storage,n._location);return n.storage.makeRequestWithTokens(e,gc)}function SE(n,e){const t=cE(n._location.path,e),r=new Ut(n._location.bucket,t);return new Hr(n.storage,r)}/**
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
 */function PE(n){return/^[A-Za-z]+:\/\//.test(n)}function kE(n,e){return new Hr(n,e)}function bf(n,e){if(n instanceof mc){const t=n;if(t._bucket==null)throw LT();const r=new Hr(t,t._bucket);return e!=null?bf(r,e):r}else return e!==void 0?SE(n,e):n}function DE(n,e){if(e&&PE(e)){if(n instanceof mc)return kE(n,e);throw mu("To use ref(service, url), the first argument must be a Storage instance.")}else return bf(n,e)}function jl(n,e){const t=e==null?void 0:e[df];return t==null?null:Ut.makeFromBucketSpec(t,n)}function NE(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Zl(i,n.app.options.projectId))}class mc{constructor(e,t,r,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=hf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bT,this._maxUploadRetryTime=RT,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=jl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=jl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,t,r,i,o=!0){if(this._deleted)return new jT(ff());{const c=JT(e,this._appId,r,i,t,this._firebaseVersion,o);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const ql="@firebase/storage",Hl="0.13.4";/**
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
 */const Rf="storage";function iw(n,e,t){return n=je(n),bE(n,e,t)}function sw(n){return n=je(n),RE(n)}function ow(n){return n=je(n),CE(n)}function aw(n,e){return n=je(n),DE(n,e)}function xE(n=vu(),e){n=je(n);const r=Go(n,Rf).getImmediate({identifier:e}),i=Xl("storage");return i&&OE(r,...i),r}function OE(n,e,t,r={}){NE(n,e,t,r)}function VE(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new mc(t,r,i,e,$r)}function LE(){Fr(new lr(Rf,VE,"PUBLIC").setMultipleInstances(!0)),dn(ql,Hl,""),dn(ql,Hl,"esm2017")}LE();const ME={apiKey:"AIzaSyBJBy-1ToR0aLnbngDOL8kKa5onMtQoNcw",authDomain:"smartattend-f36c4.firebaseapp.com",projectId:"smartattend-f36c4",storageBucket:"smartattend-f36c4.appspot.com",messagingSenderId:"478728054218",appId:"1:478728054218:web:2b69ded405972ea3dadb33"},_c=nh(ME),UE=Bh(_c),uw=fT(_c),cw=xE(_c),lw=async(n,e)=>{try{const t=Bh();return(await cm(t,n,e)).user}catch(t){throw new Error(t.message)}},hw=n=>um(UE,n);function FE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function dw(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var za={exports:{}},bo={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var BE=bo.exports,$l;function jE(){return $l||($l=1,function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:BE,function(e,t){var r=[],i=Object.getPrototypeOf,o=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},f=r.push,g=r.indexOf,v={},I=v.toString,k=v.hasOwnProperty,V=k.toString,H=V.call(Object),q={},K=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Q=function(u){return u!=null&&u===u.window},J=e.document,_e={type:!0,src:!0,nonce:!0,noModule:!0};function de(s,u,h){h=h||J;var p,_,y=h.createElement("script");if(y.text=s,u)for(p in _e)_=u[p]||u.getAttribute&&u.getAttribute(p),_&&y.setAttribute(p,_);h.head.appendChild(y).parentNode.removeChild(y)}function pe(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?v[I.call(s)]||"object":typeof s}var qe="3.7.1",De=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:qe,constructor:l,length:0,toArray:function(){return o.call(this)},get:function(s){return s==null?o.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:f,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,p,_,y,T=arguments[0]||{},P=1,C=arguments.length,x=!1;for(typeof T=="boolean"&&(x=T,T=arguments[P]||{},P++),typeof T!="object"&&!K(T)&&(T={}),P===C&&(T=this,P--);P<C;P++)if((s=arguments[P])!=null)for(u in s)p=s[u],!(u==="__proto__"||T===p)&&(x&&p&&(l.isPlainObject(p)||(_=Array.isArray(p)))?(h=T[u],_&&!Array.isArray(h)?y=[]:!_&&!l.isPlainObject(h)?y={}:y=h,_=!1,T[u]=l.extend(x,y,p)):p!==void 0&&(T[u]=p));return T},l.extend({expando:"jQuery"+(qe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||I.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=k.call(u,"constructor")&&u.constructor,typeof h=="function"&&V.call(h)===H):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){de(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,p=0;if(S(s))for(h=s.length;p<h&&u.call(s[p],p,s[p])!==!1;p++);else for(p in s)if(u.call(s[p],p,s[p])===!1)break;return s},text:function(s){var u,h="",p=0,_=s.nodeType;if(!_)for(;u=s[p++];)h+=l.text(u);return _===1||_===11?s.textContent:_===9?s.documentElement.textContent:_===3||_===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(S(Object(s))?l.merge(h,typeof s=="string"?[s]:s):f.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:g.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!De.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,p=0,_=s.length;p<h;p++)s[_++]=u[p];return s.length=_,s},grep:function(s,u,h){for(var p,_=[],y=0,T=s.length,P=!h;y<T;y++)p=!u(s[y],y),p!==P&&_.push(s[y]);return _},map:function(s,u,h){var p,_,y=0,T=[];if(S(s))for(p=s.length;y<p;y++)_=u(s[y],y,h),_!=null&&T.push(_);else for(y in s)_=u(s[y],y,h),_!=null&&T.push(_);return c(T)},guid:1,support:q}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){v["[object "+u+"]"]=u.toLowerCase()});function S(s){var u=!!s&&"length"in s&&s.length,h=pe(s);return K(s)||Q(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function w(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var R=r.pop,N=r.sort,L=r.splice,b="[\\x20\\t\\r\\n\\f]",it=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var en=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Tr(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(en,Tr)};var Ye=J,Ke=f;(function(){var s,u,h,p,_,y=Ke,T,P,C,x,j,$=l.expando,U=0,X=0,ue=kn(),Ie=kn(),ce=kn(),Je=kn(),ze=function(A,D){return A===D&&(_=!0),0},Vt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Lt="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Te="\\["+b+"*("+Lt+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Lt+"))|)"+b+"*\\]",Qe=":("+Lt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Te+")*)|.*)\\)|)",Re=new RegExp(b+"+","g"),Fe=new RegExp("^"+b+"*,"+b+"*"),Kt=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),a=new RegExp(b+"|>"),d=new RegExp(Qe),m=new RegExp("^"+Lt+"$"),E={ID:new RegExp("^#("+Lt+")"),CLASS:new RegExp("^\\.("+Lt+")"),TAG:new RegExp("^("+Lt+"|[*])"),ATTR:new RegExp("^"+Te),PSEUDO:new RegExp("^"+Qe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+Vt+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,F=/^h\d$/i,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xe=/[+~]/,Le=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),ve=function(A,D){var M="0x"+A.slice(1)-65536;return D||(M<0?String.fromCharCode(M+65536):String.fromCharCode(M>>10|55296,M&1023|56320))},ot=function(){Zn()},at=io(function(A){return A.disabled===!0&&w(A,"fieldset")},{dir:"parentNode",next:"legend"});function Jn(){try{return T.activeElement}catch{}}try{y.apply(r=o.call(Ye.childNodes),Ye.childNodes),r[Ye.childNodes.length].nodeType}catch{y={apply:function(D,M){Ke.apply(D,o.call(M))},call:function(D){Ke.apply(D,o.call(arguments,1))}}}function Ee(A,D,M,B){var z,Z,ee,se,te,Ae,le,ge=D&&D.ownerDocument,be=D?D.nodeType:9;if(M=M||[],typeof A!="string"||!A||be!==1&&be!==9&&be!==11)return M;if(!B&&(Zn(D),D=D||T,C)){if(be!==11&&(te=Y.exec(A)))if(z=te[1]){if(be===9)if(ee=D.getElementById(z)){if(ee.id===z)return y.call(M,ee),M}else return M;else if(ge&&(ee=ge.getElementById(z))&&Ee.contains(D,ee)&&ee.id===z)return y.call(M,ee),M}else{if(te[2])return y.apply(M,D.getElementsByTagName(A)),M;if((z=te[3])&&D.getElementsByClassName)return y.apply(M,D.getElementsByClassName(z)),M}if(!Je[A+" "]&&(!x||!x.test(A))){if(le=A,ge=D,be===1&&(a.test(A)||Kt.test(A))){for(ge=xe.test(A)&&Ra(D.parentNode)||D,(ge!=D||!q.scope)&&((se=D.getAttribute("id"))?se=l.escapeSelector(se):D.setAttribute("id",se=$)),Ae=ns(A),Z=Ae.length;Z--;)Ae[Z]=(se?"#"+se:":scope")+" "+ro(Ae[Z]);le=Ae.join(",")}try{return y.apply(M,ge.querySelectorAll(le)),M}catch{Je(A,!0)}finally{se===$&&D.removeAttribute("id")}}}return Tc(A.replace(it,"$1"),D,M,B)}function kn(){var A=[];function D(M,B){return A.push(M+" ")>u.cacheLength&&delete D[A.shift()],D[M+" "]=B}return D}function bt(A){return A[$]=!0,A}function mi(A){var D=T.createElement("fieldset");try{return!!A(D)}catch{return!1}finally{D.parentNode&&D.parentNode.removeChild(D),D=null}}function Cf(A){return function(D){return w(D,"input")&&D.type===A}}function Sf(A){return function(D){return(w(D,"input")||w(D,"button"))&&D.type===A}}function yc(A){return function(D){return"form"in D?D.parentNode&&D.disabled===!1?"label"in D?"label"in D.parentNode?D.parentNode.disabled===A:D.disabled===A:D.isDisabled===A||D.isDisabled!==!A&&at(D)===A:D.disabled===A:"label"in D?D.disabled===A:!1}}function Or(A){return bt(function(D){return D=+D,bt(function(M,B){for(var z,Z=A([],M.length,D),ee=Z.length;ee--;)M[z=Z[ee]]&&(M[z]=!(B[z]=M[z]))})})}function Ra(A){return A&&typeof A.getElementsByTagName<"u"&&A}function Zn(A){var D,M=A?A.ownerDocument||A:Ye;return M==T||M.nodeType!==9||!M.documentElement||(T=M,P=T.documentElement,C=!l.isXMLDoc(T),j=P.matches||P.webkitMatchesSelector||P.msMatchesSelector,P.msMatchesSelector&&Ye!=T&&(D=T.defaultView)&&D.top!==D&&D.addEventListener("unload",ot),q.getById=mi(function(B){return P.appendChild(B).id=l.expando,!T.getElementsByName||!T.getElementsByName(l.expando).length}),q.disconnectedMatch=mi(function(B){return j.call(B,"*")}),q.scope=mi(function(){return T.querySelectorAll(":scope")}),q.cssHas=mi(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),q.getById?(u.filter.ID=function(B){var z=B.replace(Le,ve);return function(Z){return Z.getAttribute("id")===z}},u.find.ID=function(B,z){if(typeof z.getElementById<"u"&&C){var Z=z.getElementById(B);return Z?[Z]:[]}}):(u.filter.ID=function(B){var z=B.replace(Le,ve);return function(Z){var ee=typeof Z.getAttributeNode<"u"&&Z.getAttributeNode("id");return ee&&ee.value===z}},u.find.ID=function(B,z){if(typeof z.getElementById<"u"&&C){var Z,ee,se,te=z.getElementById(B);if(te){if(Z=te.getAttributeNode("id"),Z&&Z.value===B)return[te];for(se=z.getElementsByName(B),ee=0;te=se[ee++];)if(Z=te.getAttributeNode("id"),Z&&Z.value===B)return[te]}return[]}}),u.find.TAG=function(B,z){return typeof z.getElementsByTagName<"u"?z.getElementsByTagName(B):z.querySelectorAll(B)},u.find.CLASS=function(B,z){if(typeof z.getElementsByClassName<"u"&&C)return z.getElementsByClassName(B)},x=[],mi(function(B){var z;P.appendChild(B).innerHTML="<a id='"+$+"' href='' disabled='disabled'></a><select id='"+$+"-\r\\' disabled='disabled'><option selected=''></option></select>",B.querySelectorAll("[selected]").length||x.push("\\["+b+"*(?:value|"+Vt+")"),B.querySelectorAll("[id~="+$+"-]").length||x.push("~="),B.querySelectorAll("a#"+$+"+*").length||x.push(".#.+[+~]"),B.querySelectorAll(":checked").length||x.push(":checked"),z=T.createElement("input"),z.setAttribute("type","hidden"),B.appendChild(z).setAttribute("name","D"),P.appendChild(B).disabled=!0,B.querySelectorAll(":disabled").length!==2&&x.push(":enabled",":disabled"),z=T.createElement("input"),z.setAttribute("name",""),B.appendChild(z),B.querySelectorAll("[name='']").length||x.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),q.cssHas||x.push(":has"),x=x.length&&new RegExp(x.join("|")),ze=function(B,z){if(B===z)return _=!0,0;var Z=!B.compareDocumentPosition-!z.compareDocumentPosition;return Z||(Z=(B.ownerDocument||B)==(z.ownerDocument||z)?B.compareDocumentPosition(z):1,Z&1||!q.sortDetached&&z.compareDocumentPosition(B)===Z?B===T||B.ownerDocument==Ye&&Ee.contains(Ye,B)?-1:z===T||z.ownerDocument==Ye&&Ee.contains(Ye,z)?1:p?g.call(p,B)-g.call(p,z):0:Z&4?-1:1)}),T}Ee.matches=function(A,D){return Ee(A,null,null,D)},Ee.matchesSelector=function(A,D){if(Zn(A),C&&!Je[D+" "]&&(!x||!x.test(D)))try{var M=j.call(A,D);if(M||q.disconnectedMatch||A.document&&A.document.nodeType!==11)return M}catch{Je(D,!0)}return Ee(D,T,null,[A]).length>0},Ee.contains=function(A,D){return(A.ownerDocument||A)!=T&&Zn(A),l.contains(A,D)},Ee.attr=function(A,D){(A.ownerDocument||A)!=T&&Zn(A);var M=u.attrHandle[D.toLowerCase()],B=M&&k.call(u.attrHandle,D.toLowerCase())?M(A,D,!C):void 0;return B!==void 0?B:A.getAttribute(D)},Ee.error=function(A){throw new Error("Syntax error, unrecognized expression: "+A)},l.uniqueSort=function(A){var D,M=[],B=0,z=0;if(_=!q.sortStable,p=!q.sortStable&&o.call(A,0),N.call(A,ze),_){for(;D=A[z++];)D===A[z]&&(B=M.push(z));for(;B--;)L.call(A,M[B],1)}return p=null,A},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(o.apply(this)))},u=l.expr={cacheLength:50,createPseudo:bt,match:E,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(A){return A[1]=A[1].replace(Le,ve),A[3]=(A[3]||A[4]||A[5]||"").replace(Le,ve),A[2]==="~="&&(A[3]=" "+A[3]+" "),A.slice(0,4)},CHILD:function(A){return A[1]=A[1].toLowerCase(),A[1].slice(0,3)==="nth"?(A[3]||Ee.error(A[0]),A[4]=+(A[4]?A[5]+(A[6]||1):2*(A[3]==="even"||A[3]==="odd")),A[5]=+(A[7]+A[8]||A[3]==="odd")):A[3]&&Ee.error(A[0]),A},PSEUDO:function(A){var D,M=!A[6]&&A[2];return E.CHILD.test(A[0])?null:(A[3]?A[2]=A[4]||A[5]||"":M&&d.test(M)&&(D=ns(M,!0))&&(D=M.indexOf(")",M.length-D)-M.length)&&(A[0]=A[0].slice(0,D),A[2]=M.slice(0,D)),A.slice(0,3))}},filter:{TAG:function(A){var D=A.replace(Le,ve).toLowerCase();return A==="*"?function(){return!0}:function(M){return w(M,D)}},CLASS:function(A){var D=ue[A+" "];return D||(D=new RegExp("(^|"+b+")"+A+"("+b+"|$)"))&&ue(A,function(M){return D.test(typeof M.className=="string"&&M.className||typeof M.getAttribute<"u"&&M.getAttribute("class")||"")})},ATTR:function(A,D,M){return function(B){var z=Ee.attr(B,A);return z==null?D==="!=":D?(z+="",D==="="?z===M:D==="!="?z!==M:D==="^="?M&&z.indexOf(M)===0:D==="*="?M&&z.indexOf(M)>-1:D==="$="?M&&z.slice(-M.length)===M:D==="~="?(" "+z.replace(Re," ")+" ").indexOf(M)>-1:D==="|="?z===M||z.slice(0,M.length+1)===M+"-":!1):!0}},CHILD:function(A,D,M,B,z){var Z=A.slice(0,3)!=="nth",ee=A.slice(-4)!=="last",se=D==="of-type";return B===1&&z===0?function(te){return!!te.parentNode}:function(te,Ae,le){var ge,be,ae,Me,kt,_t=Z!==ee?"nextSibling":"previousSibling",Qt=te.parentNode,cn=se&&te.nodeName.toLowerCase(),_i=!le&&!se,Rt=!1;if(Qt){if(Z){for(;_t;){for(ae=te;ae=ae[_t];)if(se?w(ae,cn):ae.nodeType===1)return!1;kt=_t=A==="only"&&!kt&&"nextSibling"}return!0}if(kt=[ee?Qt.firstChild:Qt.lastChild],ee&&_i){for(be=Qt[$]||(Qt[$]={}),ge=be[A]||[],Me=ge[0]===U&&ge[1],Rt=Me&&ge[2],ae=Me&&Qt.childNodes[Me];ae=++Me&&ae&&ae[_t]||(Rt=Me=0)||kt.pop();)if(ae.nodeType===1&&++Rt&&ae===te){be[A]=[U,Me,Rt];break}}else if(_i&&(be=te[$]||(te[$]={}),ge=be[A]||[],Me=ge[0]===U&&ge[1],Rt=Me),Rt===!1)for(;(ae=++Me&&ae&&ae[_t]||(Rt=Me=0)||kt.pop())&&!((se?w(ae,cn):ae.nodeType===1)&&++Rt&&(_i&&(be=ae[$]||(ae[$]={}),be[A]=[U,Rt]),ae===te)););return Rt-=z,Rt===B||Rt%B===0&&Rt/B>=0}}},PSEUDO:function(A,D){var M,B=u.pseudos[A]||u.setFilters[A.toLowerCase()]||Ee.error("unsupported pseudo: "+A);return B[$]?B(D):B.length>1?(M=[A,A,"",D],u.setFilters.hasOwnProperty(A.toLowerCase())?bt(function(z,Z){for(var ee,se=B(z,D),te=se.length;te--;)ee=g.call(z,se[te]),z[ee]=!(Z[ee]=se[te])}):function(z){return B(z,0,M)}):B}},pseudos:{not:bt(function(A){var D=[],M=[],B=ka(A.replace(it,"$1"));return B[$]?bt(function(z,Z,ee,se){for(var te,Ae=B(z,null,se,[]),le=z.length;le--;)(te=Ae[le])&&(z[le]=!(Z[le]=te))}):function(z,Z,ee){return D[0]=z,B(D,null,ee,M),D[0]=null,!M.pop()}}),has:bt(function(A){return function(D){return Ee(A,D).length>0}}),contains:bt(function(A){return A=A.replace(Le,ve),function(D){return(D.textContent||l.text(D)).indexOf(A)>-1}}),lang:bt(function(A){return m.test(A||"")||Ee.error("unsupported lang: "+A),A=A.replace(Le,ve).toLowerCase(),function(D){var M;do if(M=C?D.lang:D.getAttribute("xml:lang")||D.getAttribute("lang"))return M=M.toLowerCase(),M===A||M.indexOf(A+"-")===0;while((D=D.parentNode)&&D.nodeType===1);return!1}}),target:function(A){var D=e.location&&e.location.hash;return D&&D.slice(1)===A.id},root:function(A){return A===P},focus:function(A){return A===Jn()&&T.hasFocus()&&!!(A.type||A.href||~A.tabIndex)},enabled:yc(!1),disabled:yc(!0),checked:function(A){return w(A,"input")&&!!A.checked||w(A,"option")&&!!A.selected},selected:function(A){return A.parentNode&&A.parentNode.selectedIndex,A.selected===!0},empty:function(A){for(A=A.firstChild;A;A=A.nextSibling)if(A.nodeType<6)return!1;return!0},parent:function(A){return!u.pseudos.empty(A)},header:function(A){return F.test(A.nodeName)},input:function(A){return O.test(A.nodeName)},button:function(A){return w(A,"input")&&A.type==="button"||w(A,"button")},text:function(A){var D;return w(A,"input")&&A.type==="text"&&((D=A.getAttribute("type"))==null||D.toLowerCase()==="text")},first:Or(function(){return[0]}),last:Or(function(A,D){return[D-1]}),eq:Or(function(A,D,M){return[M<0?M+D:M]}),even:Or(function(A,D){for(var M=0;M<D;M+=2)A.push(M);return A}),odd:Or(function(A,D){for(var M=1;M<D;M+=2)A.push(M);return A}),lt:Or(function(A,D,M){var B;for(M<0?B=M+D:M>D?B=D:B=M;--B>=0;)A.push(B);return A}),gt:Or(function(A,D,M){for(var B=M<0?M+D:M;++B<D;)A.push(B);return A})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=Cf(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=Sf(s);function vc(){}vc.prototype=u.filters=u.pseudos,u.setFilters=new vc;function ns(A,D){var M,B,z,Z,ee,se,te,Ae=Ie[A+" "];if(Ae)return D?0:Ae.slice(0);for(ee=A,se=[],te=u.preFilter;ee;){(!M||(B=Fe.exec(ee)))&&(B&&(ee=ee.slice(B[0].length)||ee),se.push(z=[])),M=!1,(B=Kt.exec(ee))&&(M=B.shift(),z.push({value:M,type:B[0].replace(it," ")}),ee=ee.slice(M.length));for(Z in u.filter)(B=E[Z].exec(ee))&&(!te[Z]||(B=te[Z](B)))&&(M=B.shift(),z.push({value:M,type:Z,matches:B}),ee=ee.slice(M.length));if(!M)break}return D?ee.length:ee?Ee.error(A):Ie(A,se).slice(0)}function ro(A){for(var D=0,M=A.length,B="";D<M;D++)B+=A[D].value;return B}function io(A,D,M){var B=D.dir,z=D.next,Z=z||B,ee=M&&Z==="parentNode",se=X++;return D.first?function(te,Ae,le){for(;te=te[B];)if(te.nodeType===1||ee)return A(te,Ae,le);return!1}:function(te,Ae,le){var ge,be,ae=[U,se];if(le){for(;te=te[B];)if((te.nodeType===1||ee)&&A(te,Ae,le))return!0}else for(;te=te[B];)if(te.nodeType===1||ee)if(be=te[$]||(te[$]={}),z&&w(te,z))te=te[B]||te;else{if((ge=be[Z])&&ge[0]===U&&ge[1]===se)return ae[2]=ge[2];if(be[Z]=ae,ae[2]=A(te,Ae,le))return!0}return!1}}function Ca(A){return A.length>1?function(D,M,B){for(var z=A.length;z--;)if(!A[z](D,M,B))return!1;return!0}:A[0]}function Pf(A,D,M){for(var B=0,z=D.length;B<z;B++)Ee(A,D[B],M);return M}function so(A,D,M,B,z){for(var Z,ee=[],se=0,te=A.length,Ae=D!=null;se<te;se++)(Z=A[se])&&(!M||M(Z,B,z))&&(ee.push(Z),Ae&&D.push(se));return ee}function Sa(A,D,M,B,z,Z){return B&&!B[$]&&(B=Sa(B)),z&&!z[$]&&(z=Sa(z,Z)),bt(function(ee,se,te,Ae){var le,ge,be,ae,Me=[],kt=[],_t=se.length,Qt=ee||Pf(D||"*",te.nodeType?[te]:te,[]),cn=A&&(ee||!D)?so(Qt,Me,A,te,Ae):Qt;if(M?(ae=z||(ee?A:_t||B)?[]:se,M(cn,ae,te,Ae)):ae=cn,B)for(le=so(ae,kt),B(le,[],te,Ae),ge=le.length;ge--;)(be=le[ge])&&(ae[kt[ge]]=!(cn[kt[ge]]=be));if(ee){if(z||A){if(z){for(le=[],ge=ae.length;ge--;)(be=ae[ge])&&le.push(cn[ge]=be);z(null,ae=[],le,Ae)}for(ge=ae.length;ge--;)(be=ae[ge])&&(le=z?g.call(ee,be):Me[ge])>-1&&(ee[le]=!(se[le]=be))}}else ae=so(ae===se?ae.splice(_t,ae.length):ae),z?z(null,se,ae,Ae):y.apply(se,ae)})}function Pa(A){for(var D,M,B,z=A.length,Z=u.relative[A[0].type],ee=Z||u.relative[" "],se=Z?1:0,te=io(function(ge){return ge===D},ee,!0),Ae=io(function(ge){return g.call(D,ge)>-1},ee,!0),le=[function(ge,be,ae){var Me=!Z&&(ae||be!=h)||((D=be).nodeType?te(ge,be,ae):Ae(ge,be,ae));return D=null,Me}];se<z;se++)if(M=u.relative[A[se].type])le=[io(Ca(le),M)];else{if(M=u.filter[A[se].type].apply(null,A[se].matches),M[$]){for(B=++se;B<z&&!u.relative[A[B].type];B++);return Sa(se>1&&Ca(le),se>1&&ro(A.slice(0,se-1).concat({value:A[se-2].type===" "?"*":""})).replace(it,"$1"),M,se<B&&Pa(A.slice(se,B)),B<z&&Pa(A=A.slice(B)),B<z&&ro(A))}le.push(M)}return Ca(le)}function kf(A,D){var M=D.length>0,B=A.length>0,z=function(Z,ee,se,te,Ae){var le,ge,be,ae=0,Me="0",kt=Z&&[],_t=[],Qt=h,cn=Z||B&&u.find.TAG("*",Ae),_i=U+=Qt==null?1:Math.random()||.1,Rt=cn.length;for(Ae&&(h=ee==T||ee||Ae);Me!==Rt&&(le=cn[Me])!=null;Me++){if(B&&le){for(ge=0,!ee&&le.ownerDocument!=T&&(Zn(le),se=!C);be=A[ge++];)if(be(le,ee||T,se)){y.call(te,le);break}Ae&&(U=_i)}M&&((le=!be&&le)&&ae--,Z&&kt.push(le))}if(ae+=Me,M&&Me!==ae){for(ge=0;be=D[ge++];)be(kt,_t,ee,se);if(Z){if(ae>0)for(;Me--;)kt[Me]||_t[Me]||(_t[Me]=R.call(te));_t=so(_t)}y.apply(te,_t),Ae&&!Z&&_t.length>0&&ae+D.length>1&&l.uniqueSort(te)}return Ae&&(U=_i,h=Qt),kt};return M?bt(z):z}function ka(A,D){var M,B=[],z=[],Z=ce[A+" "];if(!Z){for(D||(D=ns(A)),M=D.length;M--;)Z=Pa(D[M]),Z[$]?B.push(Z):z.push(Z);Z=ce(A,kf(z,B)),Z.selector=A}return Z}function Tc(A,D,M,B){var z,Z,ee,se,te,Ae=typeof A=="function"&&A,le=!B&&ns(A=Ae.selector||A);if(M=M||[],le.length===1){if(Z=le[0]=le[0].slice(0),Z.length>2&&(ee=Z[0]).type==="ID"&&D.nodeType===9&&C&&u.relative[Z[1].type]){if(D=(u.find.ID(ee.matches[0].replace(Le,ve),D)||[])[0],D)Ae&&(D=D.parentNode);else return M;A=A.slice(Z.shift().value.length)}for(z=E.needsContext.test(A)?0:Z.length;z--&&(ee=Z[z],!u.relative[se=ee.type]);)if((te=u.find[se])&&(B=te(ee.matches[0].replace(Le,ve),xe.test(Z[0].type)&&Ra(D.parentNode)||D))){if(Z.splice(z,1),A=B.length&&ro(Z),!A)return y.apply(M,B),M;break}}return(Ae||ka(A,le))(B,D,!C,M,!D||xe.test(A)&&Ra(D.parentNode)||D),M}q.sortStable=$.split("").sort(ze).join("")===$,Zn(),q.sortDetached=mi(function(A){return A.compareDocumentPosition(T.createElement("fieldset"))&1}),l.find=Ee,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Ee.compile=ka,Ee.select=Tc,Ee.setDocument=Zn,Ee.tokenize=ns,Ee.escape=l.escapeSelector,Ee.getText=l.text,Ee.isXML=l.isXMLDoc,Ee.selectors=l.expr,Ee.support=l.support,Ee.uniqueSort=l.uniqueSort})();var ct=function(s,u,h){for(var p=[],_=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(_&&l(s).is(h))break;p.push(s)}return p},qn=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},Kr=l.expr.match.needsContext,xt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function $e(s,u,h){return K(u)?l.grep(s,function(p,_){return!!u.call(p,_,p)!==h}):u.nodeType?l.grep(s,function(p){return p===u!==h}):typeof u!="string"?l.grep(s,function(p){return g.call(u,p)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var p=u[0];return h&&(s=":not("+s+")"),u.length===1&&p.nodeType===1?l.find.matchesSelector(p,s)?[p]:[]:l.find.matches(s,l.grep(u,function(_){return _.nodeType===1}))},l.fn.extend({find:function(s){var u,h,p=this.length,_=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<p;u++)if(l.contains(_[u],this))return!0}));for(h=this.pushStack([]),u=0;u<p;u++)l.find(s,_[u],h);return p>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack($e(this,s||[],!1))},not:function(s){return this.pushStack($e(this,s||[],!0))},is:function(s){return!!$e(this,typeof s=="string"&&Kr.test(s)?l(s):s||[],!1).length}});var Qr,vn=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Fi=l.fn.init=function(s,u,h){var p,_;if(!s)return this;if(h=h||Qr,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?p=[null,s,null]:p=vn.exec(s),p&&(p[1]||!u))if(p[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(p[1],u&&u.nodeType?u.ownerDocument||u:J,!0)),xt.test(p[1])&&l.isPlainObject(u))for(p in u)K(this[p])?this[p](u[p]):this.attr(p,u[p]);return this}else return _=J.getElementById(p[2]),_&&(this[0]=_,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(K(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Fi.prototype=l.fn,Qr=l(J);var Hn=/^(?:parents|prev(?:Until|All))/,Bi={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var p=0;p<h;p++)if(l.contains(this,u[p]))return!0})},closest:function(s,u){var h,p=0,_=this.length,y=[],T=typeof s!="string"&&l(s);if(!Kr.test(s)){for(;p<_;p++)for(h=this[p];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(T?T.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?g.call(l(s),this[0]):g.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Xr(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return ct(s,"parentNode")},parentsUntil:function(s,u,h){return ct(s,"parentNode",h)},next:function(s){return Xr(s,"nextSibling")},prev:function(s){return Xr(s,"previousSibling")},nextAll:function(s){return ct(s,"nextSibling")},prevAll:function(s){return ct(s,"previousSibling")},nextUntil:function(s,u,h){return ct(s,"nextSibling",h)},prevUntil:function(s,u,h){return ct(s,"previousSibling",h)},siblings:function(s){return qn((s.parentNode||{}).firstChild,s)},children:function(s){return qn(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(w(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,p){var _=l.map(this,u,h);return s.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(_=l.filter(p,_)),this.length>1&&(Bi[s]||l.uniqueSort(_),Hn.test(s)&&_.reverse()),this.pushStack(_)}});var lt=/[^\x20\t\r\n\f]+/g;function $n(s){var u={};return l.each(s.match(lt)||[],function(h,p){u[p]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?$n(s):l.extend({},s);var u,h,p,_,y=[],T=[],P=-1,C=function(){for(_=_||s.once,p=u=!0;T.length;P=-1)for(h=T.shift();++P<y.length;)y[P].apply(h[0],h[1])===!1&&s.stopOnFalse&&(P=y.length,h=!1);s.memory||(h=!1),u=!1,_&&(h?y=[]:y="")},x={add:function(){return y&&(h&&!u&&(P=y.length-1,T.push(h)),function j($){l.each($,function(U,X){K(X)?(!s.unique||!x.has(X))&&y.push(X):X&&X.length&&pe(X)!=="string"&&j(X)})}(arguments),h&&!u&&C()),this},remove:function(){return l.each(arguments,function(j,$){for(var U;(U=l.inArray($,y,U))>-1;)y.splice(U,1),U<=P&&P--}),this},has:function(j){return j?l.inArray(j,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return _=T=[],y=h="",this},disabled:function(){return!y},lock:function(){return _=T=[],!h&&!u&&(y=h=""),this},locked:function(){return!!_},fireWith:function(j,$){return _||($=$||[],$=[j,$.slice?$.slice():$],T.push($),u||C()),this},fire:function(){return x.fireWith(this,arguments),this},fired:function(){return!!p}};return x};function jt(s){return s}function St(s){throw s}function zn(s,u,h,p){var _;try{s&&K(_=s.promise)?_.call(s).done(u).fail(h):s&&K(_=s.then)?_.call(s,u,h):u.apply(void 0,[s].slice(p))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return _.done(arguments).fail(arguments),this},catch:function(y){return p.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(T){l.each(u,function(P,C){var x=K(y[C[4]])&&y[C[4]];_[C[1]](function(){var j=x&&x.apply(this,arguments);j&&K(j.promise)?j.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[C[0]+"With"](this,x?[j]:arguments)})}),y=null}).promise()},then:function(y,T,P){var C=0;function x(j,$,U,X){return function(){var ue=this,Ie=arguments,ce=function(){var ze,Vt;if(!(j<C)){if(ze=U.apply(ue,Ie),ze===$.promise())throw new TypeError("Thenable self-resolution");Vt=ze&&(typeof ze=="object"||typeof ze=="function")&&ze.then,K(Vt)?X?Vt.call(ze,x(C,$,jt,X),x(C,$,St,X)):(C++,Vt.call(ze,x(C,$,jt,X),x(C,$,St,X),x(C,$,jt,$.notifyWith))):(U!==jt&&(ue=void 0,Ie=[ze]),(X||$.resolveWith)(ue,Ie))}},Je=X?ce:function(){try{ce()}catch(ze){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(ze,Je.error),j+1>=C&&(U!==St&&(ue=void 0,Ie=[ze]),$.rejectWith(ue,Ie))}};j?Je():(l.Deferred.getErrorHook?Je.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Je.error=l.Deferred.getStackHook()),e.setTimeout(Je))}}return l.Deferred(function(j){u[0][3].add(x(0,j,K(P)?P:jt,j.notifyWith)),u[1][3].add(x(0,j,K(y)?y:jt)),u[2][3].add(x(0,j,K(T)?T:St))}).promise()},promise:function(y){return y!=null?l.extend(y,p):p}},_={};return l.each(u,function(y,T){var P=T[2],C=T[5];p[T[1]]=P.add,C&&P.add(function(){h=C},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),P.add(T[3].fire),_[T[0]]=function(){return _[T[0]+"With"](this===_?void 0:this,arguments),this},_[T[0]+"With"]=P.fireWith}),p.promise(_),s&&s.call(_,_),_},when:function(s){var u=arguments.length,h=u,p=Array(h),_=o.call(arguments),y=l.Deferred(),T=function(P){return function(C){p[P]=this,_[P]=arguments.length>1?o.call(arguments):C,--u||y.resolveWith(p,_)}};if(u<=1&&(zn(s,y.done(T(h)).resolve,y.reject,!u),y.state()==="pending"||K(_[h]&&_[h].then)))return y.then();for(;h--;)zn(_[h],T(h),y.reject);return y.promise()}});var Er=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&Er.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var Wn=l.Deferred();l.fn.ready=function(s){return Wn.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&Wn.resolveWith(J,[l]))}}),l.ready.then=Wn.then;function we(){J.removeEventListener("DOMContentLoaded",we),e.removeEventListener("load",we),l.ready()}J.readyState==="complete"||J.readyState!=="loading"&&!J.documentElement.doScroll?e.setTimeout(l.ready):(J.addEventListener("DOMContentLoaded",we),e.addEventListener("load",we));var mt=function(s,u,h,p,_,y,T){var P=0,C=s.length,x=h==null;if(pe(h)==="object"){_=!0;for(P in h)mt(s,u,P,h[P],!0,y,T)}else if(p!==void 0&&(_=!0,K(p)||(T=!0),x&&(T?(u.call(s,p),u=null):(x=u,u=function(j,$,U){return x.call(l(j),U)})),u))for(;P<C;P++)u(s[P],h,T?p:p.call(s[P],P,u(s[P],h)));return _?s:x?u.call(s):C?u(s[0],h):y},Yr=/^-ms-/,wr=/-([a-z])/g;function Fs(s,u){return u.toUpperCase()}function qt(s){return s.replace(Yr,"ms-").replace(wr,Fs)}var Tn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function En(){this.expando=l.expando+En.uid++}En.uid=1,En.prototype={cache:function(s){var u=s[this.expando];return u||(u={},Tn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var p,_=this.cache(s);if(typeof u=="string")_[qt(u)]=h;else for(p in u)_[qt(p)]=u[p];return _},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][qt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,p=s[this.expando];if(p!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(qt):(u=qt(u),u=u in p?[u]:u.match(lt)||[]),h=u.length;h--;)delete p[u[h]];(u===void 0||l.isEmptyObject(p))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new En,Ne=new En,ht=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Jr=/[A-Z]/g;function Bs(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:ht.test(s)?JSON.parse(s):s}function ji(s,u,h){var p;if(h===void 0&&s.nodeType===1)if(p="data-"+u.replace(Jr,"-$&").toLowerCase(),h=s.getAttribute(p),typeof h=="string"){try{h=Bs(h)}catch{}Ne.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return Ne.hasData(s)||ie.hasData(s)},data:function(s,u,h){return Ne.access(s,u,h)},removeData:function(s,u){Ne.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,p,_,y=this[0],T=y&&y.attributes;if(s===void 0){if(this.length&&(_=Ne.get(y),y.nodeType===1&&!ie.get(y,"hasDataAttrs"))){for(h=T.length;h--;)T[h]&&(p=T[h].name,p.indexOf("data-")===0&&(p=qt(p.slice(5)),ji(y,p,_[p])));ie.set(y,"hasDataAttrs",!0)}return _}return typeof s=="object"?this.each(function(){Ne.set(this,s)}):mt(this,function(P){var C;if(y&&P===void 0)return C=Ne.get(y,s),C!==void 0||(C=ji(y,s),C!==void 0)?C:void 0;this.each(function(){Ne.set(this,s,P)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Ne.remove(this,s)})}}),l.extend({queue:function(s,u,h){var p;if(s)return u=(u||"fx")+"queue",p=ie.get(s,u),h&&(!p||Array.isArray(h)?p=ie.access(s,u,l.makeArray(h)):p.push(h)),p||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),p=h.length,_=h.shift(),y=l._queueHooks(s,u),T=function(){l.dequeue(s,u)};_==="inprogress"&&(_=h.shift(),p--),_&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,_.call(s,T,y)),!p&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var p=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&p[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,p=1,_=l.Deferred(),y=this,T=this.length,P=function(){--p||_.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";T--;)h=ie.get(y[T],s+"queueHooks"),h&&h.empty&&(p++,h.empty.add(P));return P(),_.promise(u)}});var js=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Xt=new RegExp("^(?:([+-])=|)("+js+")([a-z%]*)$","i"),Ht=["Top","Right","Bottom","Left"],tn=J.documentElement,nn=function(s){return l.contains(s.ownerDocument,s)},ga={composed:!0};tn.getRootNode&&(nn=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(ga)===s.ownerDocument});var Zr=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&nn(s)&&l.css(s,"display")==="none"};function ei(s,u,h,p){var _,y,T=20,P=p?function(){return p.cur()}:function(){return l.css(s,u,"")},C=P(),x=h&&h[3]||(l.cssNumber[u]?"":"px"),j=s.nodeType&&(l.cssNumber[u]||x!=="px"&&+C)&&Xt.exec(l.css(s,u));if(j&&j[3]!==x){for(C=C/2,x=x||j[3],j=+C||1;T--;)l.style(s,u,j+x),(1-y)*(1-(y=P()/C||.5))<=0&&(T=0),j=j/y;j=j*2,l.style(s,u,j+x),h=h||[]}return h&&(j=+j||+C||0,_=h[1]?j+(h[1]+1)*h[2]:+h[2],p&&(p.unit=x,p.start=j,p.end=_)),_}var qi={};function qs(s){var u,h=s.ownerDocument,p=s.nodeName,_=qi[p];return _||(u=h.body.appendChild(h.createElement(p)),_=l.css(u,"display"),u.parentNode.removeChild(u),_==="none"&&(_="block"),qi[p]=_,_)}function $t(s,u){for(var h,p,_=[],y=0,T=s.length;y<T;y++)p=s[y],p.style&&(h=p.style.display,u?(h==="none"&&(_[y]=ie.get(p,"display")||null,_[y]||(p.style.display="")),p.style.display===""&&Zr(p)&&(_[y]=qs(p))):h!=="none"&&(_[y]="none",ie.set(p,"display",h)));for(y=0;y<T;y++)_[y]!=null&&(s[y].style.display=_[y]);return s}l.fn.extend({show:function(){return $t(this,!0)},hide:function(){return $t(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Zr(this)?l(this).show():l(this).hide()})}});var wn=/^(?:checkbox|radio)$/i,ti=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,rn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=J.createDocumentFragment(),u=s.appendChild(J.createElement("div")),h=J.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),q.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",q.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",q.option=!!u.lastChild})();var It={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};It.tbody=It.tfoot=It.colgroup=It.caption=It.thead,It.th=It.td,q.option||(It.optgroup=It.option=[1,"<select multiple='multiple'>","</select>"]);function tt(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&w(s,u)?l.merge([s],h):h}function ni(s,u){for(var h=0,p=s.length;h<p;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var Ir=/<|&#?\w+;/;function Hi(s,u,h,p,_){for(var y,T,P,C,x,j,$=u.createDocumentFragment(),U=[],X=0,ue=s.length;X<ue;X++)if(y=s[X],y||y===0)if(pe(y)==="object")l.merge(U,y.nodeType?[y]:y);else if(!Ir.test(y))U.push(u.createTextNode(y));else{for(T=T||$.appendChild(u.createElement("div")),P=(ti.exec(y)||["",""])[1].toLowerCase(),C=It[P]||It._default,T.innerHTML=C[1]+l.htmlPrefilter(y)+C[2],j=C[0];j--;)T=T.lastChild;l.merge(U,T.childNodes),T=$.firstChild,T.textContent=""}for($.textContent="",X=0;y=U[X++];){if(p&&l.inArray(y,p)>-1){_&&_.push(y);continue}if(x=nn(y),T=tt($.appendChild(y),"script"),x&&ni(T),h)for(j=0;y=T[j++];)rn.test(y.type||"")&&h.push(y)}return $}var st=/^([^.]*)(?:\.(.+)|)/;function In(){return!0}function zt(){return!1}function An(s,u,h,p,_,y){var T,P;if(typeof u=="object"){typeof h!="string"&&(p=p||h,h=void 0);for(P in u)An(s,P,h,p,u[P],y);return s}if(p==null&&_==null?(_=h,p=h=void 0):_==null&&(typeof h=="string"?(_=p,p=void 0):(_=p,p=h,h=void 0)),_===!1)_=zt;else if(!_)return s;return y===1&&(T=_,_=function(C){return l().off(C),T.apply(this,arguments)},_.guid=T.guid||(T.guid=l.guid++)),s.each(function(){l.event.add(this,u,_,p,h)})}l.event={global:{},add:function(s,u,h,p,_){var y,T,P,C,x,j,$,U,X,ue,Ie,ce=ie.get(s);if(Tn(s))for(h.handler&&(y=h,h=y.handler,_=y.selector),_&&l.find.matchesSelector(tn,_),h.guid||(h.guid=l.guid++),(C=ce.events)||(C=ce.events=Object.create(null)),(T=ce.handle)||(T=ce.handle=function(Je){return typeof l<"u"&&l.event.triggered!==Je.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(lt)||[""],x=u.length;x--;)P=st.exec(u[x])||[],X=Ie=P[1],ue=(P[2]||"").split(".").sort(),X&&($=l.event.special[X]||{},X=(_?$.delegateType:$.bindType)||X,$=l.event.special[X]||{},j=l.extend({type:X,origType:Ie,data:p,handler:h,guid:h.guid,selector:_,needsContext:_&&l.expr.match.needsContext.test(_),namespace:ue.join(".")},y),(U=C[X])||(U=C[X]=[],U.delegateCount=0,(!$.setup||$.setup.call(s,p,ue,T)===!1)&&s.addEventListener&&s.addEventListener(X,T)),$.add&&($.add.call(s,j),j.handler.guid||(j.handler.guid=h.guid)),_?U.splice(U.delegateCount++,0,j):U.push(j),l.event.global[X]=!0)},remove:function(s,u,h,p,_){var y,T,P,C,x,j,$,U,X,ue,Ie,ce=ie.hasData(s)&&ie.get(s);if(!(!ce||!(C=ce.events))){for(u=(u||"").match(lt)||[""],x=u.length;x--;){if(P=st.exec(u[x])||[],X=Ie=P[1],ue=(P[2]||"").split(".").sort(),!X){for(X in C)l.event.remove(s,X+u[x],h,p,!0);continue}for($=l.event.special[X]||{},X=(p?$.delegateType:$.bindType)||X,U=C[X]||[],P=P[2]&&new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=y=U.length;y--;)j=U[y],(_||Ie===j.origType)&&(!h||h.guid===j.guid)&&(!P||P.test(j.namespace))&&(!p||p===j.selector||p==="**"&&j.selector)&&(U.splice(y,1),j.selector&&U.delegateCount--,$.remove&&$.remove.call(s,j));T&&!U.length&&((!$.teardown||$.teardown.call(s,ue,ce.handle)===!1)&&l.removeEvent(s,X,ce.handle),delete C[X])}l.isEmptyObject(C)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,p,_,y,T,P=new Array(arguments.length),C=l.event.fix(s),x=(ie.get(this,"events")||Object.create(null))[C.type]||[],j=l.event.special[C.type]||{};for(P[0]=C,u=1;u<arguments.length;u++)P[u]=arguments[u];if(C.delegateTarget=this,!(j.preDispatch&&j.preDispatch.call(this,C)===!1)){for(T=l.event.handlers.call(this,C,x),u=0;(_=T[u++])&&!C.isPropagationStopped();)for(C.currentTarget=_.elem,h=0;(y=_.handlers[h++])&&!C.isImmediatePropagationStopped();)(!C.rnamespace||y.namespace===!1||C.rnamespace.test(y.namespace))&&(C.handleObj=y,C.data=y.data,p=((l.event.special[y.origType]||{}).handle||y.handler).apply(_.elem,P),p!==void 0&&(C.result=p)===!1&&(C.preventDefault(),C.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,C),C.result}},handlers:function(s,u){var h,p,_,y,T,P=[],C=u.delegateCount,x=s.target;if(C&&x.nodeType&&!(s.type==="click"&&s.button>=1)){for(;x!==this;x=x.parentNode||this)if(x.nodeType===1&&!(s.type==="click"&&x.disabled===!0)){for(y=[],T={},h=0;h<C;h++)p=u[h],_=p.selector+" ",T[_]===void 0&&(T[_]=p.needsContext?l(_,this).index(x)>-1:l.find(_,this,null,[x]).length),T[_]&&y.push(p);y.length&&P.push({elem:x,handlers:y})}}return x=this,C<u.length&&P.push({elem:x,handlers:u.slice(C)}),P},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:K(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return wn.test(u.type)&&u.click&&w(u,"input")&&ri(u,"click",!0),!1},trigger:function(s){var u=this||s;return wn.test(u.type)&&u.click&&w(u,"input")&&ri(u,"click"),!0},_default:function(s){var u=s.target;return wn.test(u.type)&&u.click&&w(u,"input")&&ie.get(u,"click")||w(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function ri(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,In);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(p){var _,y=ie.get(this,u);if(p.isTrigger&1&&this[u]){if(y)(l.event.special[u]||{}).delegateType&&p.stopPropagation();else if(y=o.call(arguments),ie.set(this,u,y),this[u](),_=ie.get(this,u),ie.set(this,u,!1),y!==_)return p.stopImmediatePropagation(),p.preventDefault(),_}else y&&(ie.set(this,u,l.event.trigger(y[0],y.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=In)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?In:zt,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:zt,isPropagationStopped:zt,isImmediatePropagationStopped:zt,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=In,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=In,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=In,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(p){if(J.documentMode){var _=ie.get(this,"handle"),y=l.event.fix(p);y.type=p.type==="focusin"?"focus":"blur",y.isSimulated=!0,_(p),y.target===y.currentTarget&&_(y)}else l.event.simulate(u,p.target,l.event.fix(p))}l.event.special[s]={setup:function(){var p;if(ri(this,s,!0),J.documentMode)p=ie.get(this,u),p||this.addEventListener(u,h),ie.set(this,u,(p||0)+1);else return!1},trigger:function(){return ri(this,s),!0},teardown:function(){var p;if(J.documentMode)p=ie.get(this,u)-1,p?ie.set(this,u,p):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(p){return ie.get(p.target,s)},delegateType:u},l.event.special[u]={setup:function(){var p=this.ownerDocument||this.document||this,_=J.documentMode?this:p,y=ie.get(_,u);y||(J.documentMode?this.addEventListener(u,h):p.addEventListener(s,h,!0)),ie.set(_,u,(y||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,_=J.documentMode?this:p,y=ie.get(_,u)-1;y?ie.set(_,u,y):(J.documentMode?this.removeEventListener(u,h):p.removeEventListener(s,h,!0),ie.remove(_,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var p,_=this,y=h.relatedTarget,T=h.handleObj;return(!y||y!==_&&!l.contains(_,y))&&(h.type=T.origType,p=T.handler.apply(this,arguments),h.type=u),p}}}),l.fn.extend({on:function(s,u,h,p){return An(this,s,u,h,p)},one:function(s,u,h,p){return An(this,s,u,h,p,1)},off:function(s,u,h){var p,_;if(s&&s.preventDefault&&s.handleObj)return p=s.handleObj,l(s.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof s=="object"){for(_ in s)this.off(_,u,s[_]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=zt),this.each(function(){l.event.remove(this,s,h,u)})}});var ma=/<script|<style|<link/i,Gn=/checked\s*(?:[^=]|=\s*.checked.)/i,_a=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Hs(s,u){return w(s,"table")&&w(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function ii(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function $s(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function si(s,u){var h,p,_,y,T,P,C;if(u.nodeType===1){if(ie.hasData(s)&&(y=ie.get(s),C=y.events,C)){ie.remove(u,"handle events");for(_ in C)for(h=0,p=C[_].length;h<p;h++)l.event.add(u,_,C[_][h])}Ne.hasData(s)&&(T=Ne.access(s),P=l.extend({},T),Ne.set(u,P))}}function oi(s,u){var h=u.nodeName.toLowerCase();h==="input"&&wn.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function At(s,u,h,p){u=c(u);var _,y,T,P,C,x,j=0,$=s.length,U=$-1,X=u[0],ue=K(X);if(ue||$>1&&typeof X=="string"&&!q.checkClone&&Gn.test(X))return s.each(function(Ie){var ce=s.eq(Ie);ue&&(u[0]=X.call(this,Ie,ce.html())),At(ce,u,h,p)});if($&&(_=Hi(u,s[0].ownerDocument,!1,s,p),y=_.firstChild,_.childNodes.length===1&&(_=y),y||p)){for(T=l.map(tt(_,"script"),ii),P=T.length;j<$;j++)C=_,j!==U&&(C=l.clone(C,!0,!0),P&&l.merge(T,tt(C,"script"))),h.call(s[j],C,j);if(P)for(x=T[T.length-1].ownerDocument,l.map(T,$s),j=0;j<P;j++)C=T[j],rn.test(C.type||"")&&!ie.access(C,"globalEval")&&l.contains(x,C)&&(C.src&&(C.type||"").toLowerCase()!=="module"?l._evalUrl&&!C.noModule&&l._evalUrl(C.src,{nonce:C.nonce||C.getAttribute("nonce")},x):de(C.textContent.replace(_a,""),C,x))}return s}function $i(s,u,h){for(var p,_=u?l.filter(u,s):s,y=0;(p=_[y])!=null;y++)!h&&p.nodeType===1&&l.cleanData(tt(p)),p.parentNode&&(h&&nn(p)&&ni(tt(p,"script")),p.parentNode.removeChild(p));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var p,_,y,T,P=s.cloneNode(!0),C=nn(s);if(!q.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(T=tt(P),y=tt(s),p=0,_=y.length;p<_;p++)oi(y[p],T[p]);if(u)if(h)for(y=y||tt(s),T=T||tt(P),p=0,_=y.length;p<_;p++)si(y[p],T[p]);else si(s,P);return T=tt(P,"script"),T.length>0&&ni(T,!C&&tt(s,"script")),P},cleanData:function(s){for(var u,h,p,_=l.event.special,y=0;(h=s[y])!==void 0;y++)if(Tn(h)){if(u=h[ie.expando]){if(u.events)for(p in u.events)_[p]?l.event.remove(h,p):l.removeEvent(h,p,u.handle);h[ie.expando]=void 0}h[Ne.expando]&&(h[Ne.expando]=void 0)}}}),l.fn.extend({detach:function(s){return $i(this,s,!0)},remove:function(s){return $i(this,s)},text:function(s){return mt(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return At(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Hs(this,s);u.appendChild(s)}})},prepend:function(){return At(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Hs(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return At(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return At(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(tt(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return mt(this,function(u){var h=this[0]||{},p=0,_=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!ma.test(u)&&!It[(ti.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;p<_;p++)h=this[p]||{},h.nodeType===1&&(l.cleanData(tt(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return At(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(tt(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var p,_=[],y=l(h),T=y.length-1,P=0;P<=T;P++)p=P===T?this:this.clone(!0),l(y[P])[u](p),f.apply(_,p.get());return this.pushStack(_)}});var ai=new RegExp("^("+js+")(?!px)[a-z%]+$","i"),Ar=/^--/,Kn=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},zi=function(s,u,h){var p,_,y={};for(_ in u)y[_]=s.style[_],s.style[_]=u[_];p=h.call(s);for(_ in u)s.style[_]=y[_];return p},zs=new RegExp(Ht.join("|"),"i");(function(){function s(){if(x){C.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",x.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",tn.appendChild(C).appendChild(x);var j=e.getComputedStyle(x);h=j.top!=="1%",P=u(j.marginLeft)===12,x.style.right="60%",y=u(j.right)===36,p=u(j.width)===36,x.style.position="absolute",_=u(x.offsetWidth/3)===12,tn.removeChild(C),x=null}}function u(j){return Math.round(parseFloat(j))}var h,p,_,y,T,P,C=J.createElement("div"),x=J.createElement("div");x.style&&(x.style.backgroundClip="content-box",x.cloneNode(!0).style.backgroundClip="",q.clearCloneStyle=x.style.backgroundClip==="content-box",l.extend(q,{boxSizingReliable:function(){return s(),p},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),P},scrollboxSize:function(){return s(),_},reliableTrDimensions:function(){var j,$,U,X;return T==null&&(j=J.createElement("table"),$=J.createElement("tr"),U=J.createElement("div"),j.style.cssText="position:absolute;left:-11111px;border-collapse:separate",$.style.cssText="box-sizing:content-box;border:1px solid",$.style.height="1px",U.style.height="9px",U.style.display="block",tn.appendChild(j).appendChild($).appendChild(U),X=e.getComputedStyle($),T=parseInt(X.height,10)+parseInt(X.borderTopWidth,10)+parseInt(X.borderBottomWidth,10)===$.offsetHeight,tn.removeChild(j)),T}}))})();function br(s,u,h){var p,_,y,T,P=Ar.test(u),C=s.style;return h=h||Kn(s),h&&(T=h.getPropertyValue(u)||h[u],P&&T&&(T=T.replace(it,"$1")||void 0),T===""&&!nn(s)&&(T=l.style(s,u)),!q.pixelBoxStyles()&&ai.test(T)&&zs.test(u)&&(p=C.width,_=C.minWidth,y=C.maxWidth,C.minWidth=C.maxWidth=C.width=T,T=h.width,C.width=p,C.minWidth=_,C.maxWidth=y)),T!==void 0?T+"":T}function Rr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Wi=["Webkit","Moz","ms"],ui=J.createElement("div").style,Qn={};function bn(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Wi.length;h--;)if(s=Wi[h]+u,s in ui)return s}function Cr(s){var u=l.cssProps[s]||Qn[s];return u||(s in ui?s:Qn[s]=bn(s)||s)}var ya=/^(none|table(?!-c[ea]).+)/,Ws={position:"absolute",visibility:"hidden",display:"block"},Gi={letterSpacing:"0",fontWeight:"400"};function Ki(s,u,h){var p=Xt.exec(u);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):u}function Sr(s,u,h,p,_,y){var T=u==="width"?1:0,P=0,C=0,x=0;if(h===(p?"border":"content"))return 0;for(;T<4;T+=2)h==="margin"&&(x+=l.css(s,h+Ht[T],!0,_)),p?(h==="content"&&(C-=l.css(s,"padding"+Ht[T],!0,_)),h!=="margin"&&(C-=l.css(s,"border"+Ht[T]+"Width",!0,_))):(C+=l.css(s,"padding"+Ht[T],!0,_),h!=="padding"?C+=l.css(s,"border"+Ht[T]+"Width",!0,_):P+=l.css(s,"border"+Ht[T]+"Width",!0,_));return!p&&y>=0&&(C+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-C-P-.5))||0),C+x}function ci(s,u,h){var p=Kn(s),_=!q.boxSizingReliable()||h,y=_&&l.css(s,"boxSizing",!1,p)==="border-box",T=y,P=br(s,u,p),C="offset"+u[0].toUpperCase()+u.slice(1);if(ai.test(P)){if(!h)return P;P="auto"}return(!q.boxSizingReliable()&&y||!q.reliableTrDimensions()&&w(s,"tr")||P==="auto"||!parseFloat(P)&&l.css(s,"display",!1,p)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,p)==="border-box",T=C in s,T&&(P=s[C])),P=parseFloat(P)||0,P+Sr(s,u,h||(y?"border":"content"),T,p,P)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=br(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,p){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var _,y,T,P=qt(u),C=Ar.test(u),x=s.style;if(C||(u=Cr(P)),T=l.cssHooks[u]||l.cssHooks[P],h!==void 0){if(y=typeof h,y==="string"&&(_=Xt.exec(h))&&_[1]&&(h=ei(s,u,_),y="number"),h==null||h!==h)return;y==="number"&&!C&&(h+=_&&_[3]||(l.cssNumber[P]?"":"px")),!q.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(x[u]="inherit"),(!T||!("set"in T)||(h=T.set(s,h,p))!==void 0)&&(C?x.setProperty(u,h):x[u]=h)}else return T&&"get"in T&&(_=T.get(s,!1,p))!==void 0?_:x[u]}},css:function(s,u,h,p){var _,y,T,P=qt(u),C=Ar.test(u);return C||(u=Cr(P)),T=l.cssHooks[u]||l.cssHooks[P],T&&"get"in T&&(_=T.get(s,!0,h)),_===void 0&&(_=br(s,u,p)),_==="normal"&&u in Gi&&(_=Gi[u]),h===""||h?(y=parseFloat(_),h===!0||isFinite(y)?y||0:_):_}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,p,_){if(p)return ya.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?zi(h,Ws,function(){return ci(h,u,_)}):ci(h,u,_)},set:function(h,p,_){var y,T=Kn(h),P=!q.scrollboxSize()&&T.position==="absolute",C=P||_,x=C&&l.css(h,"boxSizing",!1,T)==="border-box",j=_?Sr(h,u,_,x,T):0;return x&&P&&(j-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(T[u])-Sr(h,u,"border",!1,T)-.5)),j&&(y=Xt.exec(p))&&(y[3]||"px")!=="px"&&(h.style[u]=p,p=l.css(h,u)),Ki(h,p,j)}}}),l.cssHooks.marginLeft=Rr(q.reliableMarginLeft,function(s,u){if(u)return(parseFloat(br(s,"marginLeft"))||s.getBoundingClientRect().left-zi(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var p=0,_={},y=typeof h=="string"?h.split(" "):[h];p<4;p++)_[s+Ht[p]+u]=y[p]||y[p-2]||y[0];return _}},s!=="margin"&&(l.cssHooks[s+u].set=Ki)}),l.fn.extend({css:function(s,u){return mt(this,function(h,p,_){var y,T,P={},C=0;if(Array.isArray(p)){for(y=Kn(h),T=p.length;C<T;C++)P[p[C]]=l.css(h,p[C],!1,y);return P}return _!==void 0?l.style(h,p,_):l.css(h,p)},s,u,arguments.length>1)}});function dt(s,u,h,p,_){return new dt.prototype.init(s,u,h,p,_)}l.Tween=dt,dt.prototype={constructor:dt,init:function(s,u,h,p,_,y){this.elem=s,this.prop=h,this.easing=_||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=p,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=dt.propHooks[this.prop];return s&&s.get?s.get(this):dt.propHooks._default.get(this)},run:function(s){var u,h=dt.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):dt.propHooks._default.set(this),this}},dt.prototype.init.prototype=dt.prototype,dt.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[Cr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},dt.propHooks.scrollTop=dt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=dt.prototype.init,l.fx.step={};var Rn,li,va=/^(?:toggle|show|hide)$/,Gs=/queueHooks$/;function hi(){li&&(J.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(hi):e.setTimeout(hi,l.fx.interval),l.fx.tick())}function Ks(){return e.setTimeout(function(){Rn=void 0}),Rn=Date.now()}function Wt(s,u){var h,p=0,_={height:s};for(u=u?1:0;p<4;p+=2-u)h=Ht[p],_["margin"+h]=_["padding"+h]=s;return u&&(_.opacity=_.width=s),_}function Gt(s,u,h){for(var p,_=(Pt.tweeners[u]||[]).concat(Pt.tweeners["*"]),y=0,T=_.length;y<T;y++)if(p=_[y].call(h,u,s))return p}function di(s,u,h){var p,_,y,T,P,C,x,j,$="width"in u||"height"in u,U=this,X={},ue=s.style,Ie=s.nodeType&&Zr(s),ce=ie.get(s,"fxshow");h.queue||(T=l._queueHooks(s,"fx"),T.unqueued==null&&(T.unqueued=0,P=T.empty.fire,T.empty.fire=function(){T.unqueued||P()}),T.unqueued++,U.always(function(){U.always(function(){T.unqueued--,l.queue(s,"fx").length||T.empty.fire()})}));for(p in u)if(_=u[p],va.test(_)){if(delete u[p],y=y||_==="toggle",_===(Ie?"hide":"show"))if(_==="show"&&ce&&ce[p]!==void 0)Ie=!0;else continue;X[p]=ce&&ce[p]||l.style(s,p)}if(C=!l.isEmptyObject(u),!(!C&&l.isEmptyObject(X))){$&&s.nodeType===1&&(h.overflow=[ue.overflow,ue.overflowX,ue.overflowY],x=ce&&ce.display,x==null&&(x=ie.get(s,"display")),j=l.css(s,"display"),j==="none"&&(x?j=x:($t([s],!0),x=s.style.display||x,j=l.css(s,"display"),$t([s]))),(j==="inline"||j==="inline-block"&&x!=null)&&l.css(s,"float")==="none"&&(C||(U.done(function(){ue.display=x}),x==null&&(j=ue.display,x=j==="none"?"":j)),ue.display="inline-block")),h.overflow&&(ue.overflow="hidden",U.always(function(){ue.overflow=h.overflow[0],ue.overflowX=h.overflow[1],ue.overflowY=h.overflow[2]})),C=!1;for(p in X)C||(ce?"hidden"in ce&&(Ie=ce.hidden):ce=ie.access(s,"fxshow",{display:x}),y&&(ce.hidden=!Ie),Ie&&$t([s],!0),U.done(function(){Ie||$t([s]),ie.remove(s,"fxshow");for(p in X)l.style(s,p,X[p])})),C=Gt(Ie?ce[p]:0,p,U),p in ce||(ce[p]=C.start,Ie&&(C.end=C.start,C.start=0))}}function fi(s,u){var h,p,_,y,T;for(h in s)if(p=qt(h),_=u[p],y=s[h],Array.isArray(y)&&(_=y[1],y=s[h]=y[0]),h!==p&&(s[p]=y,delete s[h]),T=l.cssHooks[p],T&&"expand"in T){y=T.expand(y),delete s[p];for(h in y)h in s||(s[h]=y[h],u[h]=_)}else u[p]=_}function Pt(s,u,h){var p,_,y=0,T=Pt.prefilters.length,P=l.Deferred().always(function(){delete C.elem}),C=function(){if(_)return!1;for(var $=Rn||Ks(),U=Math.max(0,x.startTime+x.duration-$),X=U/x.duration||0,ue=1-X,Ie=0,ce=x.tweens.length;Ie<ce;Ie++)x.tweens[Ie].run(ue);return P.notifyWith(s,[x,ue,U]),ue<1&&ce?U:(ce||P.notifyWith(s,[x,1,0]),P.resolveWith(s,[x]),!1)},x=P.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:Rn||Ks(),duration:h.duration,tweens:[],createTween:function($,U){var X=l.Tween(s,x.opts,$,U,x.opts.specialEasing[$]||x.opts.easing);return x.tweens.push(X),X},stop:function($){var U=0,X=$?x.tweens.length:0;if(_)return this;for(_=!0;U<X;U++)x.tweens[U].run(1);return $?(P.notifyWith(s,[x,1,0]),P.resolveWith(s,[x,$])):P.rejectWith(s,[x,$]),this}}),j=x.props;for(fi(j,x.opts.specialEasing);y<T;y++)if(p=Pt.prefilters[y].call(x,s,j,x.opts),p)return K(p.stop)&&(l._queueHooks(x.elem,x.opts.queue).stop=p.stop.bind(p)),p;return l.map(j,Gt,x),K(x.opts.start)&&x.opts.start.call(s,x),x.progress(x.opts.progress).done(x.opts.done,x.opts.complete).fail(x.opts.fail).always(x.opts.always),l.fx.timer(l.extend(C,{elem:s,anim:x,queue:x.opts.queue})),x}l.Animation=l.extend(Pt,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return ei(h.elem,s,Xt.exec(u),h),h}]},tweener:function(s,u){K(s)?(u=s,s=["*"]):s=s.match(lt);for(var h,p=0,_=s.length;p<_;p++)h=s[p],Pt.tweeners[h]=Pt.tweeners[h]||[],Pt.tweeners[h].unshift(u)},prefilters:[di],prefilter:function(s,u){u?Pt.prefilters.unshift(s):Pt.prefilters.push(s)}}),l.speed=function(s,u,h){var p=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||K(s)&&s,duration:s,easing:h&&u||u&&!K(u)&&u};return l.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in l.fx.speeds?p.duration=l.fx.speeds[p.duration]:p.duration=l.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){K(p.old)&&p.old.call(this),p.queue&&l.dequeue(this,p.queue)},p},l.fn.extend({fadeTo:function(s,u,h,p){return this.filter(Zr).css("opacity",0).show().end().animate({opacity:u},s,h,p)},animate:function(s,u,h,p){var _=l.isEmptyObject(s),y=l.speed(u,h,p),T=function(){var P=Pt(this,l.extend({},s),y);(_||ie.get(this,"finish"))&&P.stop(!0)};return T.finish=T,_||y.queue===!1?this.each(T):this.queue(y.queue,T)},stop:function(s,u,h){var p=function(_){var y=_.stop;delete _.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var _=!0,y=s!=null&&s+"queueHooks",T=l.timers,P=ie.get(this);if(y)P[y]&&P[y].stop&&p(P[y]);else for(y in P)P[y]&&P[y].stop&&Gs.test(y)&&p(P[y]);for(y=T.length;y--;)T[y].elem===this&&(s==null||T[y].queue===s)&&(T[y].anim.stop(h),_=!1,T.splice(y,1));(_||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),p=h[s+"queue"],_=h[s+"queueHooks"],y=l.timers,T=p?p.length:0;for(h.finish=!0,l.queue(this,s,[]),_&&_.stop&&_.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<T;u++)p[u]&&p[u].finish&&p[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(p,_,y){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(Wt(u,!0),p,_,y)}}),l.each({slideDown:Wt("show"),slideUp:Wt("hide"),slideToggle:Wt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,p,_){return this.animate(u,h,p,_)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(Rn=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),Rn=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){li||(li=!0,hi())},l.fx.stop=function(){li=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,p){var _=e.setTimeout(h,s);p.stop=function(){e.clearTimeout(_)}})},function(){var s=J.createElement("input"),u=J.createElement("select"),h=u.appendChild(J.createElement("option"));s.type="checkbox",q.checkOn=s.value!=="",q.optSelected=h.selected,s=J.createElement("input"),s.value="t",s.type="radio",q.radioValue=s.value==="t"}();var Ve,sn=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return mt(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var p,_,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((y!==1||!l.isXMLDoc(s))&&(_=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?Ve:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return _&&"set"in _&&(p=_.set(s,h,u))!==void 0?p:(s.setAttribute(u,h+""),h)}return _&&"get"in _&&(p=_.get(s,u))!==null?p:(p=l.find.attr(s,u),p??void 0)}},attrHooks:{type:{set:function(s,u){if(!q.radioValue&&u==="radio"&&w(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,p=0,_=u&&u.match(lt);if(_&&s.nodeType===1)for(;h=_[p++];)s.removeAttribute(h)}}),Ve={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=sn[u]||l.find.attr;sn[u]=function(p,_,y){var T,P,C=_.toLowerCase();return y||(P=sn[C],sn[C]=T,T=h(p,_,y)!=null?C:null,sn[C]=P),T}});var Pr=/^(?:input|select|textarea|button)$/i,kr=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return mt(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var p,_,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,_=l.propHooks[u]),h!==void 0?_&&"set"in _&&(p=_.set(s,h,u))!==void 0?p:s[u]=h:_&&"get"in _&&(p=_.get(s,u))!==null?p:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):Pr.test(s.nodeName)||kr.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),q.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Cn(s){var u=s.match(lt)||[];return u.join(" ")}function on(s){return s.getAttribute&&s.getAttribute("class")||""}function Qi(s){return Array.isArray(s)?s:typeof s=="string"?s.match(lt)||[]:[]}l.fn.extend({addClass:function(s){var u,h,p,_,y,T;return K(s)?this.each(function(P){l(this).addClass(s.call(this,P,on(this)))}):(u=Qi(s),u.length?this.each(function(){if(p=on(this),h=this.nodeType===1&&" "+Cn(p)+" ",h){for(y=0;y<u.length;y++)_=u[y],h.indexOf(" "+_+" ")<0&&(h+=_+" ");T=Cn(h),p!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(s){var u,h,p,_,y,T;return K(s)?this.each(function(P){l(this).removeClass(s.call(this,P,on(this)))}):arguments.length?(u=Qi(s),u.length?this.each(function(){if(p=on(this),h=this.nodeType===1&&" "+Cn(p)+" ",h){for(y=0;y<u.length;y++)for(_=u[y];h.indexOf(" "+_+" ")>-1;)h=h.replace(" "+_+" "," ");T=Cn(h),p!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,p,_,y,T=typeof s,P=T==="string"||Array.isArray(s);return K(s)?this.each(function(C){l(this).toggleClass(s.call(this,C,on(this),u),u)}):typeof u=="boolean"&&P?u?this.addClass(s):this.removeClass(s):(h=Qi(s),this.each(function(){if(P)for(y=l(this),_=0;_<h.length;_++)p=h[_],y.hasClass(p)?y.removeClass(p):y.addClass(p);else(s===void 0||T==="boolean")&&(p=on(this),p&&ie.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,p=0;for(u=" "+s+" ";h=this[p++];)if(h.nodeType===1&&(" "+Cn(on(h))+" ").indexOf(u)>-1)return!0;return!1}});var Ta=/\r/g;l.fn.extend({val:function(s){var u,h,p,_=this[0];return arguments.length?(p=K(s),this.each(function(y){var T;this.nodeType===1&&(p?T=s.call(this,y,l(this).val()):T=s,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=l.map(T,function(P){return P==null?"":P+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,T,"value")===void 0)&&(this.value=T))})):_?(u=l.valHooks[_.type]||l.valHooks[_.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(_,"value"))!==void 0?h:(h=_.value,typeof h=="string"?h.replace(Ta,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??Cn(l.text(s))}},select:{get:function(s){var u,h,p,_=s.options,y=s.selectedIndex,T=s.type==="select-one",P=T?null:[],C=T?y+1:_.length;for(y<0?p=C:p=T?y:0;p<C;p++)if(h=_[p],(h.selected||p===y)&&!h.disabled&&(!h.parentNode.disabled||!w(h.parentNode,"optgroup"))){if(u=l(h).val(),T)return u;P.push(u)}return P},set:function(s,u){for(var h,p,_=s.options,y=l.makeArray(u),T=_.length;T--;)p=_[T],(p.selected=l.inArray(l.valHooks.option.get(p),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},q.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Dr=e.location,Qs={guid:Date.now()},Sn=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(p){return p.textContent}).join(`
`):s)),u};var Yt=/^(?:focusinfocus|focusoutblur)$/,Xi=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,p){var _,y,T,P,C,x,j,$,U=[h||J],X=k.call(s,"type")?s.type:s,ue=k.call(s,"namespace")?s.namespace.split("."):[];if(y=$=T=h=h||J,!(h.nodeType===3||h.nodeType===8)&&!Yt.test(X+l.event.triggered)&&(X.indexOf(".")>-1&&(ue=X.split("."),X=ue.shift(),ue.sort()),C=X.indexOf(":")<0&&"on"+X,s=s[l.expando]?s:new l.Event(X,typeof s=="object"&&s),s.isTrigger=p?2:3,s.namespace=ue.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),j=l.event.special[X]||{},!(!p&&j.trigger&&j.trigger.apply(h,u)===!1))){if(!p&&!j.noBubble&&!Q(h)){for(P=j.delegateType||X,Yt.test(P+X)||(y=y.parentNode);y;y=y.parentNode)U.push(y),T=y;T===(h.ownerDocument||J)&&U.push(T.defaultView||T.parentWindow||e)}for(_=0;(y=U[_++])&&!s.isPropagationStopped();)$=y,s.type=_>1?P:j.bindType||X,x=(ie.get(y,"events")||Object.create(null))[s.type]&&ie.get(y,"handle"),x&&x.apply(y,u),x=C&&y[C],x&&x.apply&&Tn(y)&&(s.result=x.apply(y,u),s.result===!1&&s.preventDefault());return s.type=X,!p&&!s.isDefaultPrevented()&&(!j._default||j._default.apply(U.pop(),u)===!1)&&Tn(h)&&C&&K(h[X])&&!Q(h)&&(T=h[C],T&&(h[C]=null),l.event.triggered=X,s.isPropagationStopped()&&$.addEventListener(X,Xi),h[X](),s.isPropagationStopped()&&$.removeEventListener(X,Xi),l.event.triggered=void 0,T&&(h[C]=T)),s.result}},simulate:function(s,u,h){var p=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(p,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Xs=/\[\]$/,Yi=/\r?\n/g,Xn=/^(?:submit|button|image|reset|file)$/i,Ea=/^(?:input|select|textarea|keygen)/i;function Ji(s,u,h,p){var _;if(Array.isArray(u))l.each(u,function(y,T){h||Xs.test(s)?p(s,T):Ji(s+"["+(typeof T=="object"&&T!=null?y:"")+"]",T,h,p)});else if(!h&&pe(u)==="object")for(_ in u)Ji(s+"["+_+"]",u[_],h,p);else p(s,u)}l.param=function(s,u){var h,p=[],_=function(y,T){var P=K(T)?T():T;p[p.length]=encodeURIComponent(y)+"="+encodeURIComponent(P??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){_(this.name,this.value)});else for(h in s)Ji(h,s[h],u,_);return p.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Ea.test(this.nodeName)&&!Xn.test(s)&&(this.checked||!wn.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(p){return{name:u.name,value:p.replace(Yi,`\r
`)}}):{name:u.name,value:h.replace(Yi,`\r
`)}}).get()}});var wa=/%20/g,an=/#.*$/,Ia=/([?&])_=[^&]*/,Aa=/^(.*?):[ \t]*([^\r\n]*)$/mg,pi=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gi=/^(?:GET|HEAD)$/,Ys=/^\/\//,Yn={},Pn={},Zi="*/".concat("*"),Nr=J.createElement("a");Nr.href=Dr.href;function Ue(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var p,_=0,y=u.toLowerCase().match(lt)||[];if(K(h))for(;p=y[_++];)p[0]==="+"?(p=p.slice(1)||"*",(s[p]=s[p]||[]).unshift(h)):(s[p]=s[p]||[]).push(h)}}function Js(s,u,h,p){var _={},y=s===Pn;function T(P){var C;return _[P]=!0,l.each(s[P]||[],function(x,j){var $=j(u,h,p);if(typeof $=="string"&&!y&&!_[$])return u.dataTypes.unshift($),T($),!1;if(y)return!(C=$)}),C}return T(u.dataTypes[0])||!_["*"]&&T("*")}function es(s,u){var h,p,_=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((_[h]?s:p||(p={}))[h]=u[h]);return p&&l.extend(!0,s,p),s}function Zs(s,u,h){for(var p,_,y,T,P=s.contents,C=s.dataTypes;C[0]==="*";)C.shift(),p===void 0&&(p=s.mimeType||u.getResponseHeader("Content-Type"));if(p){for(_ in P)if(P[_]&&P[_].test(p)){C.unshift(_);break}}if(C[0]in h)y=C[0];else{for(_ in h){if(!C[0]||s.converters[_+" "+C[0]]){y=_;break}T||(T=_)}y=y||T}if(y)return y!==C[0]&&C.unshift(y),h[y]}function eo(s,u,h,p){var _,y,T,P,C,x={},j=s.dataTypes.slice();if(j[1])for(T in s.converters)x[T.toLowerCase()]=s.converters[T];for(y=j.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!C&&p&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),C=y,y=j.shift(),y){if(y==="*")y=C;else if(C!=="*"&&C!==y){if(T=x[C+" "+y]||x["* "+y],!T){for(_ in x)if(P=_.split(" "),P[1]===y&&(T=x[C+" "+P[0]]||x["* "+P[0]],T)){T===!0?T=x[_]:x[_]!==!0&&(y=P[0],j.unshift(P[1]));break}}if(T!==!0)if(T&&s.throws)u=T(u);else try{u=T(u)}catch($){return{state:"parsererror",error:T?$:"No conversion from "+C+" to "+y}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dr.href,type:"GET",isLocal:pi.test(Dr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Zi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?es(es(s,l.ajaxSettings),u):es(l.ajaxSettings,s)},ajaxPrefilter:Ue(Yn),ajaxTransport:Ue(Pn),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,p,_,y,T,P,C,x,j,$,U=l.ajaxSetup({},u),X=U.context||U,ue=U.context&&(X.nodeType||X.jquery)?l(X):l.event,Ie=l.Deferred(),ce=l.Callbacks("once memory"),Je=U.statusCode||{},ze={},Vt={},Lt="canceled",Te={readyState:0,getResponseHeader:function(Re){var Fe;if(C){if(!y)for(y={};Fe=Aa.exec(_);)y[Fe[1].toLowerCase()+" "]=(y[Fe[1].toLowerCase()+" "]||[]).concat(Fe[2]);Fe=y[Re.toLowerCase()+" "]}return Fe==null?null:Fe.join(", ")},getAllResponseHeaders:function(){return C?_:null},setRequestHeader:function(Re,Fe){return C==null&&(Re=Vt[Re.toLowerCase()]=Vt[Re.toLowerCase()]||Re,ze[Re]=Fe),this},overrideMimeType:function(Re){return C==null&&(U.mimeType=Re),this},statusCode:function(Re){var Fe;if(Re)if(C)Te.always(Re[Te.status]);else for(Fe in Re)Je[Fe]=[Je[Fe],Re[Fe]];return this},abort:function(Re){var Fe=Re||Lt;return h&&h.abort(Fe),Qe(0,Fe),this}};if(Ie.promise(Te),U.url=((s||U.url||Dr.href)+"").replace(Ys,Dr.protocol+"//"),U.type=u.method||u.type||U.method||U.type,U.dataTypes=(U.dataType||"*").toLowerCase().match(lt)||[""],U.crossDomain==null){P=J.createElement("a");try{P.href=U.url,P.href=P.href,U.crossDomain=Nr.protocol+"//"+Nr.host!=P.protocol+"//"+P.host}catch{U.crossDomain=!0}}if(U.data&&U.processData&&typeof U.data!="string"&&(U.data=l.param(U.data,U.traditional)),Js(Yn,U,u,Te),C)return Te;x=l.event&&U.global,x&&l.active++===0&&l.event.trigger("ajaxStart"),U.type=U.type.toUpperCase(),U.hasContent=!gi.test(U.type),p=U.url.replace(an,""),U.hasContent?U.data&&U.processData&&(U.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(U.data=U.data.replace(wa,"+")):($=U.url.slice(p.length),U.data&&(U.processData||typeof U.data=="string")&&(p+=(Sn.test(p)?"&":"?")+U.data,delete U.data),U.cache===!1&&(p=p.replace(Ia,"$1"),$=(Sn.test(p)?"&":"?")+"_="+Qs.guid+++$),U.url=p+$),U.ifModified&&(l.lastModified[p]&&Te.setRequestHeader("If-Modified-Since",l.lastModified[p]),l.etag[p]&&Te.setRequestHeader("If-None-Match",l.etag[p])),(U.data&&U.hasContent&&U.contentType!==!1||u.contentType)&&Te.setRequestHeader("Content-Type",U.contentType),Te.setRequestHeader("Accept",U.dataTypes[0]&&U.accepts[U.dataTypes[0]]?U.accepts[U.dataTypes[0]]+(U.dataTypes[0]!=="*"?", "+Zi+"; q=0.01":""):U.accepts["*"]);for(j in U.headers)Te.setRequestHeader(j,U.headers[j]);if(U.beforeSend&&(U.beforeSend.call(X,Te,U)===!1||C))return Te.abort();if(Lt="abort",ce.add(U.complete),Te.done(U.success),Te.fail(U.error),h=Js(Pn,U,u,Te),!h)Qe(-1,"No Transport");else{if(Te.readyState=1,x&&ue.trigger("ajaxSend",[Te,U]),C)return Te;U.async&&U.timeout>0&&(T=e.setTimeout(function(){Te.abort("timeout")},U.timeout));try{C=!1,h.send(ze,Qe)}catch(Re){if(C)throw Re;Qe(-1,Re)}}function Qe(Re,Fe,Kt,a){var d,m,E,O,F,Y=Fe;C||(C=!0,T&&e.clearTimeout(T),h=void 0,_=a||"",Te.readyState=Re>0?4:0,d=Re>=200&&Re<300||Re===304,Kt&&(O=Zs(U,Te,Kt)),!d&&l.inArray("script",U.dataTypes)>-1&&l.inArray("json",U.dataTypes)<0&&(U.converters["text script"]=function(){}),O=eo(U,O,Te,d),d?(U.ifModified&&(F=Te.getResponseHeader("Last-Modified"),F&&(l.lastModified[p]=F),F=Te.getResponseHeader("etag"),F&&(l.etag[p]=F)),Re===204||U.type==="HEAD"?Y="nocontent":Re===304?Y="notmodified":(Y=O.state,m=O.data,E=O.error,d=!E)):(E=Y,(Re||!Y)&&(Y="error",Re<0&&(Re=0))),Te.status=Re,Te.statusText=(Fe||Y)+"",d?Ie.resolveWith(X,[m,Y,Te]):Ie.rejectWith(X,[Te,Y,E]),Te.statusCode(Je),Je=void 0,x&&ue.trigger(d?"ajaxSuccess":"ajaxError",[Te,U,d?m:E]),ce.fireWith(X,[Te,Y]),x&&(ue.trigger("ajaxComplete",[Te,U]),--l.active||l.event.trigger("ajaxStop")))}return Te},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,p,_,y){return K(p)&&(y=y||_,_=p,p=void 0),l.ajax(l.extend({url:h,type:u,dataType:y,data:p,success:_},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){l.globalEval(p,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(K(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return K(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=K(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var to={0:200,1223:204},un=l.ajaxSettings.xhr();q.cors=!!un&&"withCredentials"in un,q.ajax=un=!!un,l.ajaxTransport(function(s){var u,h;if(q.cors||un&&!s.crossDomain)return{send:function(p,_){var y,T=s.xhr();if(T.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)T[y]=s.xhrFields[y];s.mimeType&&T.overrideMimeType&&T.overrideMimeType(s.mimeType),!s.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(y in p)T.setRequestHeader(y,p[y]);u=function(P){return function(){u&&(u=h=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,P==="abort"?T.abort():P==="error"?typeof T.status!="number"?_(0,"error"):_(T.status,T.statusText):_(to[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=u(),h=T.onerror=T.ontimeout=u("error"),T.onabort!==void 0?T.onabort=h:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{T.send(s.hasContent&&s.data||null)}catch(P){if(u)throw P}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(p,_){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&_(y.type==="error"?404:200,y.type)}),J.head.appendChild(u[0])},abort:function(){h&&h()}}}});var ts=[],Ot=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=ts.pop()||l.expando+"_"+Qs.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var p,_,y,T=s.jsonp!==!1&&(Ot.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ot.test(s.data)&&"data");if(T||s.dataTypes[0]==="jsonp")return p=s.jsonpCallback=K(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,T?s[T]=s[T].replace(Ot,"$1"+p):s.jsonp!==!1&&(s.url+=(Sn.test(s.url)?"&":"?")+s.jsonp+"="+p),s.converters["script json"]=function(){return y||l.error(p+" was not called"),y[0]},s.dataTypes[0]="json",_=e[p],e[p]=function(){y=arguments},h.always(function(){_===void 0?l(e).removeProp(p):e[p]=_,s[p]&&(s.jsonpCallback=u.jsonpCallback,ts.push(p)),y&&K(_)&&_(y[0]),y=_=void 0}),"script"}),q.createHTMLDocument=function(){var s=J.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var p,_,y;return u||(q.createHTMLDocument?(u=J.implementation.createHTMLDocument(""),p=u.createElement("base"),p.href=J.location.href,u.head.appendChild(p)):u=J),_=xt.exec(s),y=!h&&[],_?[u.createElement(_[1])]:(_=Hi([s],u,y),y&&y.length&&l(y).remove(),l.merge([],_.childNodes))},l.fn.load=function(s,u,h){var p,_,y,T=this,P=s.indexOf(" ");return P>-1&&(p=Cn(s.slice(P)),s=s.slice(0,P)),K(u)?(h=u,u=void 0):u&&typeof u=="object"&&(_="POST"),T.length>0&&l.ajax({url:s,type:_||"GET",dataType:"html",data:u}).done(function(C){y=arguments,T.html(p?l("<div>").append(l.parseHTML(C)).find(p):C)}).always(h&&function(C,x){T.each(function(){h.apply(this,y||[C.responseText,x,C])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var p,_,y,T,P,C,x,j=l.css(s,"position"),$=l(s),U={};j==="static"&&(s.style.position="relative"),P=$.offset(),y=l.css(s,"top"),C=l.css(s,"left"),x=(j==="absolute"||j==="fixed")&&(y+C).indexOf("auto")>-1,x?(p=$.position(),T=p.top,_=p.left):(T=parseFloat(y)||0,_=parseFloat(C)||0),K(u)&&(u=u.call(s,h,l.extend({},P))),u.top!=null&&(U.top=u.top-P.top+T),u.left!=null&&(U.left=u.left-P.left+_),"using"in u?u.using.call(s,U):$.css(U)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(_){l.offset.setOffset(this,s,_)});var u,h,p=this[0];if(p)return p.getClientRects().length?(u=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,p=this[0],_={top:0,left:0};if(l.css(p,"position")==="fixed")u=p.getBoundingClientRect();else{for(u=this.offset(),h=p.ownerDocument,s=p.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==p&&s.nodeType===1&&(_=l(s).offset(),_.top+=l.css(s,"borderTopWidth",!0),_.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-_.top-l.css(p,"marginTop",!0),left:u.left-_.left-l.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||tn})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(p){return mt(this,function(_,y,T){var P;if(Q(_)?P=_:_.nodeType===9&&(P=_.defaultView),T===void 0)return P?P[u]:_[y];P?P.scrollTo(h?P.pageXOffset:T,h?T:P.pageYOffset):_[y]=T},s,p,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=Rr(q.pixelPosition,function(h,p){if(p)return p=br(h,u),ai.test(p)?l(h).position()[u]+"px":p})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,p){l.fn[p]=function(_,y){var T=arguments.length&&(h||typeof _!="boolean"),P=h||(_===!0||y===!0?"margin":"border");return mt(this,function(C,x,j){var $;return Q(C)?p.indexOf("outer")===0?C["inner"+s]:C.document.documentElement["client"+s]:C.nodeType===9?($=C.documentElement,Math.max(C.body["scroll"+s],$["scroll"+s],C.body["offset"+s],$["offset"+s],$["client"+s])):j===void 0?l.css(C,x,P):l.style(C,x,j,P)},u,T?_:void 0,T)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,p){return this.on(u,s,h,p)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,p){return arguments.length>0?this.on(u,null,h,p):this.trigger(u)}});var no=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,p,_;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!K(s))return p=o.call(arguments,2),_=function(){return s.apply(u||this,p.concat(o.call(arguments)))},_.guid=s.guid=s.guid||l.guid++,_},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=w,l.isFunction=K,l.isWindow=Q,l.camelCase=qt,l.type=pe,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(no,"$1")};var ba=e.jQuery,xr=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=xr),s&&e.jQuery===l&&(e.jQuery=ba),l},typeof t>"u"&&(e.jQuery=e.$=l),l})}(bo)),bo.exports}var zl;function qE(){return zl||(zl=1,function(n){(function(e){e(["jquery"],function(t){return function(){var r,i,o=0,c={error:"error",info:"info",success:"success",warning:"warning"},f={clear:K,remove:Q,error:v,getContainer:I,info:k,options:{},subscribe:V,success:H,version:"2.1.4",warning:q},g;return f;function v(w,R,N){return De({type:c.error,iconClass:l().iconClasses.error,message:w,optionsOverride:N,title:R})}function I(w,R){return w||(w=l()),r=t("#"+w.containerId),r.length||R&&(r=de(w)),r}function k(w,R,N){return De({type:c.info,iconClass:l().iconClasses.info,message:w,optionsOverride:N,title:R})}function V(w){i=w}function H(w,R,N){return De({type:c.success,iconClass:l().iconClasses.success,message:w,optionsOverride:N,title:R})}function q(w,R,N){return De({type:c.warning,iconClass:l().iconClasses.warning,message:w,optionsOverride:N,title:R})}function K(w,R){var N=l();r||I(N),_e(w,N,R)||J(N)}function Q(w){var R=l();if(r||I(R),w&&t(":focus",w).length===0){S(w);return}r.children().length&&r.remove()}function J(w){for(var R=r.children(),N=R.length-1;N>=0;N--)_e(t(R[N]),w)}function _e(w,R,N){var L=N&&N.force?N.force:!1;return w&&(L||t(":focus",w).length===0)?(w[R.hideMethod]({duration:R.hideDuration,easing:R.hideEasing,complete:function(){S(w)}}),!0):!1}function de(w){return r=t("<div/>").attr("id",w.containerId).addClass(w.positionClass),r.appendTo(t(w.target)),r}function pe(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function qe(w){i&&i(w)}function De(w){var R=l(),N=w.iconClass||R.iconClass;if(typeof w.optionsOverride<"u"&&(R=t.extend(R,w.optionsOverride),N=w.optionsOverride.iconClass||N),jt(R,w))return;o++,r=I(R,!0);var L=null,b=t("<div/>"),it=t("<div/>"),en=t("<div/>"),Tr=t("<div/>"),Ye=t(R.closeHtml),Ke={intervalId:null,hideEta:null,maxHideTime:null},ct={toastId:o,state:"visible",startTime:new Date,options:R,map:w};return Kr(),Qr(),$e(),qe(ct),R.debug&&console&&console.log(ct),b;function qn(we){return we==null&&(we=""),we.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kr(){vn(),Hn(),Bi(),Xr(),lt(),$n(),Fi(),xt()}function xt(){var we="";switch(w.iconClass){case"toast-success":case"toast-info":we="polite";break;default:we="assertive"}b.attr("aria-live",we)}function $e(){R.closeOnHover&&b.hover(Er,zn),!R.onclick&&R.tapToDismiss&&b.click(St),R.closeButton&&Ye&&Ye.click(function(we){we.stopPropagation?we.stopPropagation():we.cancelBubble!==void 0&&we.cancelBubble!==!0&&(we.cancelBubble=!0),R.onCloseClick&&R.onCloseClick(we),St(!0)}),R.onclick&&b.click(function(we){R.onclick(we),St()})}function Qr(){b.hide(),b[R.showMethod]({duration:R.showDuration,easing:R.showEasing,complete:R.onShown}),R.timeOut>0&&(L=setTimeout(St,R.timeOut),Ke.maxHideTime=parseFloat(R.timeOut),Ke.hideEta=new Date().getTime()+Ke.maxHideTime,R.progressBar&&(Ke.intervalId=setInterval(Wn,10)))}function vn(){w.iconClass&&b.addClass(R.toastClass).addClass(N)}function Fi(){R.newestOnTop?r.prepend(b):r.append(b)}function Hn(){if(w.title){var we=w.title;R.escapeHtml&&(we=qn(w.title)),it.append(we).addClass(R.titleClass),b.append(it)}}function Bi(){if(w.message){var we=w.message;R.escapeHtml&&(we=qn(w.message)),en.append(we).addClass(R.messageClass),b.append(en)}}function Xr(){R.closeButton&&(Ye.addClass(R.closeClass).attr("role","button"),b.prepend(Ye))}function lt(){R.progressBar&&(Tr.addClass(R.progressClass),b.prepend(Tr))}function $n(){R.rtl&&b.addClass("rtl")}function jt(we,mt){if(we.preventDuplicates){if(mt.message===g)return!0;g=mt.message}return!1}function St(we){var mt=we&&R.closeMethod!==!1?R.closeMethod:R.hideMethod,Yr=we&&R.closeDuration!==!1?R.closeDuration:R.hideDuration,wr=we&&R.closeEasing!==!1?R.closeEasing:R.hideEasing;if(!(t(":focus",b).length&&!we))return clearTimeout(Ke.intervalId),b[mt]({duration:Yr,easing:wr,complete:function(){S(b),clearTimeout(L),R.onHidden&&ct.state!=="hidden"&&R.onHidden(),ct.state="hidden",ct.endTime=new Date,qe(ct)}})}function zn(){(R.timeOut>0||R.extendedTimeOut>0)&&(L=setTimeout(St,R.extendedTimeOut),Ke.maxHideTime=parseFloat(R.extendedTimeOut),Ke.hideEta=new Date().getTime()+Ke.maxHideTime)}function Er(){clearTimeout(L),Ke.hideEta=0,b.stop(!0,!0)[R.showMethod]({duration:R.showDuration,easing:R.showEasing})}function Wn(){var we=(Ke.hideEta-new Date().getTime())/Ke.maxHideTime*100;Tr.width(we+"%")}}function l(){return t.extend({},pe(),f.options)}function S(w){r||(r=I()),!w.is(":visible")&&(w.remove(),w=null,r.children().length===0&&(r.remove(),g=void 0))}}()})})(function(e,t){n.exports?n.exports=t(jE()):window.toastr=t(window.jQuery)})}(za)),za.exports}var HE=qE();const fw=FE(HE);export{UE as a,uw as b,ow as c,QE as d,sw as e,tw as f,JE as g,lw as h,cw as i,ew as j,$E as k,KE as l,ZE as m,rw as n,nw as o,dw as p,XE as q,aw as r,hw as s,fw as t,iw as u,FE as v,YE as w};
