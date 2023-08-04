function t(t){return t&&t.__esModule?t.default:t}var e,n,i,r,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s=n={};function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function c(t){if(i===setTimeout)return setTimeout(t,0);if((i===a||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:a}catch(t){i=a}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(t){r=l}}();var u,h=[],d=!1,f=-1;function p(){d&&u&&(d=!1,u.length?h=u.concat(h):f=-1,h.length&&m())}function m(){if(!d){var t=c(p);d=!0;for(var e=h.length;e;){for(u=h,h=[];++f<e;)u&&u[f].run();f=-1,e=h.length}u=null,d=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function y(){}s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new g(t,e)),1!==h.length||d||c(m)},g.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=y,s.addListener=y,s.once=y,s.off=y,s.removeListener=y,s.removeAllListeners=y,s.emit=y,s.prependListener=y,s.prependOnceListener=y,s.listeners=function(t){return[]},s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};
/**
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
 */
const v=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(o>>10)),e[i++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],s=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const s=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==o||null==s||null==a)throw new b;const l=r<<2|o>>4;if(i.push(l),64!==s){const t=o<<4&240|s>>2;if(i.push(t),64!==a){const t=s<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x=function(t){return function(t){const e=v(t);return w.encodeByteArray(e,!0)}(t).replace(/\./g,"")},k=function(t){try{return w.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
const E=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==o)return o;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,C=()=>{try{return E()||(()=>{if(void 0===n||void 0===n.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&k(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},I=t=>{var e,n;return null===(n=null===(e=C())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},N=t=>{const e=I(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},T=()=>{var t;return null===(t=C())||void 0===t?void 0:t.config},S=t=>{var e;return null===(e=C())||void 0===e?void 0:e[`_${t}`]};
/**
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
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function A(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[x(JSON.stringify({alg:"none",type:"JWT"})),x(JSON.stringify(o)),""].join(".")}
/**
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
 */function O(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function R(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function D(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function L(){try{return"object"==typeof indexedDB}catch(t){return!1}}class P extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?function(t,e){return t.replace(F,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new P(i,s,n)}}const F=/\{\$([^}]+)}/g;
/**
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
 */function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function B(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],o=e[r];if(z(n)&&z(o)){if(!B(n,o))return!1}else if(n!==o)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function z(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function j(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function V(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function W(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */function H(t,e){const n=new q(t,e);return n.subscribe.bind(n)}class q{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=$),void 0===i.error&&(i.error=$),void 0===i.complete&&(i.complete=$);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(){}
/**
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
 */
/**
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
 */
function X(t){return t&&t._delegate?t._delegate:t}class K{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const G="[DEFAULT]";
/**
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
 */class Y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new _;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:G})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=G){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=G){return this.instances.has(t)}getOptions(t=G){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===G?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=G){return this.component?this.component.multipleInstances?t:G:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Q{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */const J=[];var Z,tt;(tt=Z||(Z={}))[tt.DEBUG=0]="DEBUG",tt[tt.VERBOSE=1]="VERBOSE",tt[tt.INFO=2]="INFO",tt[tt.WARN=3]="WARN",tt[tt.ERROR=4]="ERROR",tt[tt.SILENT=5]="SILENT";const et={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},nt=Z.INFO,it={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},rt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=it[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class ot{constructor(t){this.name=t,this._logLevel=nt,this._logHandler=rt,this._userLogHandler=null,J.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?et[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const st=(t,e)=>e.some((e=>t instanceof e));let at,lt;const ct=new WeakMap,ut=new WeakMap,ht=new WeakMap,dt=new WeakMap,ft=new WeakMap;let pt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ut.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ht.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function mt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(lt||(lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(vt(this),e),yt(ct.get(this))}:function(...e){return yt(t.apply(vt(this),e))}:function(e,...n){const i=t.call(vt(this),e,...n);return ht.set(i,e.sort?e.sort():[e]),yt(i)}}function gt(t){return"function"==typeof t?mt(t):(t instanceof IDBTransaction&&function(t){if(ut.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)}));ut.set(t,e)}(t),st(t,at||(at=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,pt):t)}function yt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{e(yt(t.result)),i()},o=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&ct.set(e,t)})).catch((()=>{})),ft.set(e,t),e}(t);if(dt.has(t))return dt.get(t);const e=gt(t);return e!==t&&(dt.set(t,e),ft.set(e,t)),e}const vt=t=>ft.get(t);function wt(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(t,e),a=yt(s);return i&&s.addEventListener("upgradeneeded",(t=>{i(yt(s.result),t.oldVersion,t.newVersion,yt(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const bt=["get","getKey","getAll","getAllKeys","count"],xt=["put","add","delete","clear"],kt=new Map;function Et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(kt.get(e))return kt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=xt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!bt.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),r&&o.done]))[0]};return kt.set(e,o),o}pt=(t=>({...t,get:(e,n,i)=>Et(e,n)||t.get(e,n,i),has:(e,n)=>!!Et(e,n)||t.has(e,n)}))(pt);
/**
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
 */
class Ct{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const It="@firebase/app",Nt="0.9.15",Tt=new ot("@firebase/app"),St="[DEFAULT]",_t={[It]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},At=new Map,Ot=new Map;function Rt(t,e){try{t.container.addComponent(e)}catch(n){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dt(t){const e=t.name;if(Ot.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;Ot.set(e,t);for(const e of At.values())Rt(e,t);return!0}function Lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const Pt=new M("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Mt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new K("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}
/**
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
 */const Ft="10.1.0";function Ut(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:St,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Pt.create("bad-app-name",{appName:String(r)});if(n||(n=T()),!n)throw Pt.create("no-options");const o=At.get(r);if(o){if(B(n,o.options)&&B(i,o.config))return o;throw Pt.create("duplicate-app",{appName:r})}const s=new Q(r);for(const t of Ot.values())s.addComponent(t);const a=new Mt(n,i,s);return At.set(r,a),a}function Bt(t=St){const e=At.get(t);if(!e&&t===St&&T())return Ut();if(!e)throw Pt.create("no-app",{appName:t});return e}function zt(t,e,n){var i;let r=null!==(i=_t[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Tt.warn(t.join(" "))}Dt(new K(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
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
 */
const jt="firebase-heartbeat-database",Vt=1,Wt="firebase-heartbeat-store";let Ht=null;function qt(){return Ht||(Ht=wt(jt,Vt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Wt)}}).catch((t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})}))),Ht}async function $t(t,e){try{const n=(await qt()).transaction(Wt,"readwrite"),i=n.objectStore(Wt);await i.put(e,Xt(t)),await n.done}catch(t){if(t instanceof P)Tt.warn(t.message);else{const e=Pt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Tt.warn(e.message)}}}function Xt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class Kt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Yt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Gt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Gt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Qt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=x(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gt(){return(new Date).toISOString().substring(0,10)}class Yt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!L()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await qt();return await e.transaction(Wt).objectStore(Wt).get(Xt(t))}catch(t){if(t instanceof P)Tt.warn(t.message);else{const e=Pt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Tt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return $t(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return $t(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Qt(t){return x(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var Jt;Jt="",Dt(new K("platform-logger",(t=>new Ct(t)),"PRIVATE")),Dt(new K("heartbeat",(t=>new Kt(t)),"PRIVATE")),zt(It,Nt,Jt),zt(It,Nt,"esm2017"),zt("fire-js","");
/**
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
 */
zt("firebase","10.1.0","app");function Zt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function te(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ee=te,ne=new M("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ie=new ot("@firebase/auth");function re(t,...e){ie.logLevel<=Z.ERROR&&ie.error(`Auth (${Ft}): ${t}`,...e)}
/**
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
 */function oe(t,...e){throw le(t,...e)}function se(t,...e){return le(t,...e)}function ae(t,e,n){const i=Object.assign(Object.assign({},ee()),{[e]:n});return new M("auth","Firebase",i).create(e,{appName:t.name})}function le(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ne.create(t,...e)}function ce(t,e,...n){if(!t)throw le(e,...n)}function ue(t){const e="INTERNAL ASSERTION FAILED: "+t;throw re(e),new Error(e)}function he(t,e){t||ue(e)}
/**
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
 */function de(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function fe(){return"http:"===pe()||"https:"===pe()}function pe(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function me(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(fe()||R()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class ge{constructor(t,e){this.shortDelay=t,this.longDelay=e,he(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return me()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function ye(t,e){he(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class ve{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const we={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},be=new ge(3e4,6e4);
/**
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
 */function xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,i,r={}){return Ee(t,r,(async()=>{let r={},o={};i&&("GET"===e?o=i:r={body:JSON.stringify(i)});const s=j(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ve.fetch()(Ie(t,t.config.apiHost,n,s),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ee(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},we),e);try{const e=new Ne(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Te(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Te(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Te(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw Te(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ae(t,a,s);oe(t,a)}}catch(e){if(e instanceof P)throw e;oe(t,"network-request-failed",{message:String(e)})}}async function Ce(t,e,n,i,r={}){const o=await ke(t,e,n,i,r);return"mfaPendingCredential"in o&&oe(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Ie(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ye(t.config,r):`${t.config.apiScheme}://${r}`}class Ne{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(se(this.auth,"network-request-failed"))),be.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Te(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=se(t,e,i);return r.customData._tokenResponse=n,r}
/**
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
 */
/**
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
 */
function Se(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
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
 */function _e(t){return 1e3*Number(t)}function Ae(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return re("JWT malformed, contained fewer than 3 sections"),null;try{const t=k(n);return t?JSON.parse(t):(re("Failed to decode base64 JWT payload"),null)}catch(t){return re("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
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
 */
async function Oe(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof P&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Re{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class De{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Se(this.lastLoginAt),this.creationTime=Se(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Le(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Oe(t,async function(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));ce(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?o.providerUserInfo.map((t=>{var{providerId:e}=t,n=Zt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=s,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,h=!(t.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new De(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
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
 */
class Pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ce(t.idToken,"internal-error"),ce(void 0!==t.idToken,"internal-error"),ce(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ae(t);return ce(e,"internal-error"),ce(void 0!==e.exp,"internal-error"),ce(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ce(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=
/**
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
 */await async function(t,e){const n=await Ee(t,{},(async()=>{const n=j({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ie(t,i,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",ve.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,o=new Pe;return n&&(ce("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(ce("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),r&&(ce("number"==typeof r,"internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pe,this.toJSON())}_performRefresh(){return ue("not implemented")}}
/**
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
 */function Me(t,e){ce("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Fe{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=Zt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Re(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new De(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Oe(this,this.stsTokenManager.getToken(this.auth,t));return ce(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=X(t),i=await n.getIdToken(e),r=Ae(i);ce(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Se(_e(r.auth_time)),issuedAtTime:Se(_e(r.iat)),expirationTime:Se(_e(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=X(t);await Le(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ce(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Fe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Le(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Oe(this,async function(t,e){return ke(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,o,s,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:x,stsTokenManager:k}=e;ce(v&&k,t,"internal-error");const E=Pe.fromJSON(this.name,k);ce("string"==typeof v,t,"internal-error"),Me(u,t.name),Me(h,t.name),ce("boolean"==typeof w,t,"internal-error"),ce("boolean"==typeof b,t,"internal-error"),Me(d,t.name),Me(f,t.name),Me(p,t.name),Me(m,t.name),Me(g,t.name),Me(y,t.name);const C=new Fe({uid:v,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(C.providerData=x.map((t=>Object.assign({},t)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(t,e,n=!1){const i=new Pe;i.updateFromServerResponse(e);const r=new Fe({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Le(r),r}}
/**
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
 */const Ue=new Map;function Be(t){he(t instanceof Function,"Expected a class definition");let e=Ue.get(t);return e?(he(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ue.set(t,e),e)}
/**
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
 */class ze{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ze.type="NONE";const je=ze;
/**
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
 */function Ve(t,e,n){return`firebase:${t}:${e}:${n}`}class We{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Ve(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ve("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new We(Be(je),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Be(je);const o=Ve(n,t.config.apiKey,t.name);let s=null;for(const n of e)try{const e=await n._get(o);if(e){const i=Fe._fromJSON(t,e);n!==r&&(s=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(o)}catch(t){}}))),new We(r,t,n)):new We(r,t,n)}}
/**
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
 */function He(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ke(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qe(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ye(e))return"Blackberry";if(Qe(e))return"Webos";if($e(e))return"Safari";if((e.includes("chrome/")||Xe(e))&&!e.includes("edge/"))return"Chrome";if(Ge(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function qe(t=O()){return/firefox\//i.test(t)}function $e(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xe(t=O()){return/crios\//i.test(t)}function Ke(t=O()){return/iemobile/i.test(t)}function Ge(t=O()){return/android/i.test(t)}function Ye(t=O()){return/blackberry/i.test(t)}function Qe(t=O()){return/webos/i.test(t)}function Je(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ze(){return D()&&10===document.documentMode}function tn(t=O()){return Je(t)||Ge(t)||Qe(t)||Ye(t)||/windows phone/i.test(t)||Ke(t)}
/**
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
 */
function en(t,e=[]){let n;switch(t){case"Browser":n=He(O());break;case"Worker":n=`${He(O())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ft}/${i}`}
/**
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
 */async function nn(t,e){return ke(t,"GET","/v2/recaptchaConfig",xe(t,e))}
/**
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
 */function rn(t){return void 0!==t&&void 0!==t.enterprise}class on{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
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
 */function sn(t){return new Promise(((e,n)=>{const i=document.createElement("script");var r,o;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=se("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function an(t){return`__${t}${Math.floor(1e6*Math.random())}`}class ln{constructor(t){this.type="recaptcha-enterprise",this.auth=dn(t)}async verify(t="verify",e=!1){function n(e,n,i){const r=window.grecaptcha;rn(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{nn(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new on(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((r=>{if(!e&&rn(window.grecaptcha))n(r,t,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));sn("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function cn(t,e,n,i=!1){const r=new ln(t);let o;try{o=await r.verify(n)}catch(t){o=await r.verify(n,!0)}const s=Object.assign({},e);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
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
 */class un{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
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
 */class hn{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fn(this),this.idTokenSubscription=new fn(this),this.beforeStateQueue=new un(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ne,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Be(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await We.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Le(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?X(t):null;return e&&ce(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&ce(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Be(t))}))}async initializeRecaptchaConfig(){const t=await nn(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new on(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new ln(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new M("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Be(t)||this._popupRedirectResolver;ce(e,this,"argument-error"),this.redirectPersistenceManager=await We.create(this,[Be(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ce(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=en(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){ie.logLevel<=Z.WARN&&ie.warn(`Auth (${Ft}): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}function dn(t){return X(t)}class fn{constructor(t){this.auth=t,this.observer=null,this.addObserver=H((t=>this.observer=t))}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function pn(t,e,n){const i=dn(t);ce(i._canInitEmulator,i,"emulator-config-failed"),ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=mn(e),{host:s,port:a}=function(t){const e=mn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:gn(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:gn(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
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
 */()}function mn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class yn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ue("not implemented")}_getIdTokenResponse(t){return ue("not implemented")}_linkToIdToken(t,e){return ue("not implemented")}_getReauthenticationResolver(t){return ue("not implemented")}}
/**
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
 */async function vn(t,e){return ke(t,"POST","/v1/accounts:update",e)}
/**
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
 */
async function wn(t,e){return Ce(t,"POST","/v1/accounts:signInWithPassword",xe(t,e))}
/**
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
 */
class bn extends yn{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new bn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new bn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await cn(t,n,"signInWithPassword");return wn(t,e)}return wn(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await cn(t,n,"signInWithPassword");return wn(t,e)}return Promise.reject(e)}));case"emailLink":
/**
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
 */
return async function(t,e){return Ce(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}(t,{email:this._email,oobCode:this._password});default:oe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return vn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Ce(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:oe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function xn(t,e){return Ce(t,"POST","/v1/accounts:signInWithIdp",xe(t,e))}
/**
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
 */class kn extends yn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new kn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):oe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=Zt(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new kn(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){return xn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,xn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,xn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=j(e)}return t}}
/**
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
 */const En={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Cn extends yn{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Cn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Cn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Ce(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Ce(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e));if(n.temporaryProof)throw Te(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Ce(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),En)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Cn({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
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
 */class In{constructor(t){var e,n,i,r,o,s;const a=V(W(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ce(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(t){const e=function(t){const e=V(W(t)).link,n=e?V(W(e)).deep_link_id:null,i=V(W(t)).deep_link_id;return(i?V(W(i)).link:null)||i||n||e||t}(t);try{return new In(e)}catch(t){return null}}}
/**
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
 */
class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(t,e){return bn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=In.parseLink(e);return ce(n,"argument-error"),bn._fromEmailAndCode(t,n.code,n.tenantId)}}Nn.PROVIDER_ID="password",Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Tn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Sn extends Tn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class _n extends Sn{constructor(){super("facebook.com")}static credential(t){return kn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _n.credential(t.oauthAccessToken)}catch(t){return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com",_n.PROVIDER_ID="facebook.com";
/**
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
 */
class An extends Sn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return kn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return An.credential(e,n)}catch(t){return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com",An.PROVIDER_ID="google.com";
/**
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
 */
class On extends Sn{constructor(){super("github.com")}static credential(t){return kn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return On.credentialFromTaggedObject(t)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return On.credential(t.oauthAccessToken)}catch(t){return null}}}On.GITHUB_SIGN_IN_METHOD="github.com",On.PROVIDER_ID="github.com";
/**
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
 */
class Rn extends Sn{constructor(){super("twitter.com")}static credential(t,e){return kn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Rn.credential(e,n)}catch(t){return null}}}
/**
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
 */
async function Dn(t,e){return Ce(t,"POST","/v1/accounts:signUp",xe(t,e))}
/**
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
 */Rn.TWITTER_SIGN_IN_METHOD="twitter.com",Rn.PROVIDER_ID="twitter.com";class Ln{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await Fe._fromIdTokenResponse(t,n,i),o=Pn(n);return new Ln({user:r,providerId:o,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Pn(n);return new Ln({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Pn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */
/**
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
 */
class Mn extends P{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Mn(t,e,n,i)}}function Fn(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Mn._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
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
 */async function Un(t,e,n=!1){const i=await Oe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",i)}
/**
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
 */
async function Bn(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const o=await Oe(t,Fn(i,r,e,t),n);ce(o.idToken,i,"internal-error");const s=Ae(o.idToken);ce(s,i,"internal-error");const{sub:a}=s;return ce(t.uid===a,i,"user-mismatch"),Ln._forOperation(t,r,o)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&oe(i,"user-mismatch"),t}}
/**
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
 */async function zn(t,e,n=!1){const i="signIn",r=await Fn(t,i,e),o=await Ln._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}async function jn(t,e){return zn(dn(t),e)}async function Vn(t,e,n){var i;const r=dn(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await cn(r,o,"signUpPassword");s=Dn(r,t)}else s=Dn(r,o).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await cn(r,o,"signUpPassword");return Dn(r,t)}return Promise.reject(t)}));const a=await s.catch((t=>Promise.reject(t))),l=await Ln._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Wn(t,e,n){return jn(X(t),Nn.credential(e,n))}
/**
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
 */async function Hn(t){return X(t).delete()}
/**
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
 */new WeakMap;const qn="__sak";
/**
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
 */class $n{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Xn extends $n{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=O();return $e(t)||Je(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=tn(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Ze()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xn.type="LOCAL";const Kn=Xn;
/**
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
 */class Gn extends $n{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Gn.type="SESSION";const Yn=Gn;
/**
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
 */
/**
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
 */
class Qn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Qn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Jn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */Qn.receivers=[];class Zn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=Jn("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
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
 */function ti(){return window}
/**
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
 */
function ei(){return void 0!==ti().WorkerGlobalScope&&"function"==typeof ti().importScripts}
/**
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
 */
const ni="firebaseLocalStorageDb",ii="firebaseLocalStorage",ri="fbase_key";class oi{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function si(t,e){return t.transaction([ii],e?"readwrite":"readonly").objectStore(ii)}function ai(){const t=indexedDB.open(ni,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ii,{keyPath:ri})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ii)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(ni);return new oi(t).toPromise()}(),e(await ai()))}))}))}async function li(t,e,n){const i=si(t,!0).put({[ri]:e,value:n});return new oi(i).toPromise()}function ci(t,e){const n=si(t,!0).delete(e);return new oi(n).toPromise()}class ui{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ai()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ei()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qn._getInstance(ei()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Zn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ai();return await li(t,qn,"1"),await ci(t,qn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>li(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=si(t,!1).get(e),i=await new oi(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ci(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=si(t,!1).getAll();return new oi(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ui.type="LOCAL";const hi=ui;
/**
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
 */
/**
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
 */
an("rcb"),new ge(3e4,6e4);
/**
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
 */
const di="recaptcha";async function fi(t,e,n){var i;const r=await n.verify();try{let o;if(ce("string"==typeof r,t,"argument-error"),ce(n.type===di,t,"argument-error"),o="string"==typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){ce("enroll"===e.type,t,"internal-error");const n=
/**
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
 */await function(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:start",xe(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ce("signin"===e.type,t,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;ce(n,t,"missing-multi-factor-info");const s=await function(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:start",xe(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return ke(t,"POST","/v1/accounts:sendVerificationCode",xe(t,e))}(t,{phoneNumber:o.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
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
 */
class pi{constructor(t){this.providerId=pi.PROVIDER_ID,this.auth=dn(t)}verifyPhoneNumber(t,e){return fi(this.auth,t,X(e))}static credential(t,e){return Cn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return pi.credentialFromTaggedObject(e)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Cn._fromTokenResponse(e,n):null}}
/**
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
 */
function mi(t,e){return e?Be(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */pi.PROVIDER_ID="phone",pi.PHONE_SIGN_IN_METHOD="phone";class gi extends yn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return xn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return xn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function yi(t){return zn(t.auth,new gi(t),t.bypassAuthState)}function vi(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Bn(n,new gi(t),t.bypassAuthState)}async function wi(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Un(n,new gi(t),t.bypassAuthState)}
/**
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
 */class bi{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yi;case"linkViaPopup":case"linkViaRedirect":return wi;case"reauthViaPopup":case"reauthViaRedirect":return vi;default:oe(this.auth,"internal-error")}}resolve(t){he(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){he(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const xi=new ge(2e3,1e4);class ki extends bi{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ce(t,this.auth,"internal-error"),t}async onExecution(){he(1===this.filter.length,"Popup operations only handle one event");const t=Jn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(se(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(se(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,xi.get())};t()}}ki.currentPopupAction=null;
/**
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
 */
const Ei="pendingRedirect",Ci=new Map;class Ii extends bi{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Ci.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Si(e),i=Ti(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Ci.set(this.auth._key(),t)}return this.bypassAuthState||Ci.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ni(t,e){Ci.set(t._key(),e)}function Ti(t){return Be(t._redirectPersistence)}function Si(t){return Ve(Ei,t.config.apiKey,t.name)}
/**
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
 */async function _i(t,e,n=!1){const i=dn(t),r=mi(i,e),o=new Ii(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}class Ai{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ri(t);default:return!1}}
/**
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ri(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(se(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oi(t))}saveEventToCache(t){this.cachedEventUids.add(Oi(t)),this.lastProcessedEventTime=Date.now()}}function Oi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ri({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
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
 */
const Di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Li=/^https?/;async function Pi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return ke(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Mi(t))return}catch(t){}oe(t,"unauthorized-domain")}function Mi(t){const e=de(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Li.test(n))return!1;if(Di.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
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
 */const Fi=new ge(3e4,6e4);function Ui(){const t=ti().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Bi=null;function zi(t){return Bi=Bi||function(t){return new Promise(((e,n)=>{var i,r,o;function s(){Ui(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ui(),n(se(t,"network-request-failed"))},timeout:Fi.get()})}if(null===(r=null===(i=ti().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=ti().gapi)||void 0===o?void 0:o.load)){const e=an("iframefcb");return ti()[e]=()=>{gapi.load?s():n(se(t,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw Bi=null,t}))}(t),Bi}
/**
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
 */const ji=new ge(5e3,15e3),Vi="__/auth/iframe",Wi="emulator/auth/iframe",Hi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $i(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ye(e,Wi):`https://${t.config.authDomain}/${Vi}`,i={apiKey:e.apiKey,appName:t.name,v:Ft},r=qi.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${j(i).slice(1)}`}
/**
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
 */
const Xi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ki{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Gi(t,e,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Xi),{width:i.toString(),height:r.toString(),top:o,left:s}),c=O().toLowerCase();n&&(a=Xe(c)?"_blank":n),qe(c)&&(e=e||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=O()){var e;return Je(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */(e||"",a),new Ki(null);const h=window.open(e||"",a,u);ce(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Ki(h)}const Yi="__/auth/handler",Qi="emulator/auth/handler",Ji=encodeURIComponent("fac");async function Zi(t,e,n,i,r,o){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ft,eventId:r};if(e instanceof Tn){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",U(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(o||{}))s[t]=e}if(e instanceof Sn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const l=await t._getAppCheckToken(),c=l?`#${Ji}=${encodeURIComponent(l)}`:"";return`${function({config:t}){return t.emulator?ye(t,Qi):`https://${t.authDomain}/${Yi}`}
/**
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
 */(t)}?${j(a).slice(1)}${c}`}const tr="webStorageSupport";const er=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yn,this._completeRedirectFn=_i,this._overrideRedirectResult=Ni}async _openPopup(t,e,n,i){var r;he(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Gi(t,await Zi(t,e,n,de(),i),Jn())}async _openRedirect(t,e,n,i){await this._originValidation(t);return function(t){ti().location.href=t}(await Zi(t,e,n,de(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(he(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await zi(t),n=ti().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:$i(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hi,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=se(t,"network-request-failed"),o=ti().setTimeout((()=>{i(r)}),ji.get());function s(){ti().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{i(r)}))}))))}(t),n=new Ai(t);return e.register("authEvent",(e=>{ce(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(tr,{type:tr},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[tr];void 0!==r&&e(!!r),oe(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Pi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return tn()||$e()||Je()}};var nr="@firebase/auth",ir="1.1.0";
/**
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
 */
class rr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const or=S("authIdTokenMaxAge")||300;let sr=null;function ar(t=Bt()){const e=Lt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Lt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(B(n.getOptions(),null!=e?e:{}))return t;oe(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:er,persistence:[hi,Kn,Yn]}),i=S("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>or)return;const i=null==e?void 0:e.token;sr!==i&&(sr=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){X(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){X(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const o=I("auth");return o&&pn(n,`http://${o}`),n}var lr;lr="Browser",Dt(new K("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:lr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:en(lr)},l=new hn(n,i,r,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Be);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(l,e),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Dt(new K("auth-internal",(t=>{const e=dn(t.getProvider("auth").getImmediate());return new rr(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),zt(nr,ir,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(lr)),zt(nr,ir,"esm2017");var cr,ur="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o?o:"undefined"!=typeof self?self:{},hr={},dr=dr||{},fr=ur||self;function pr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function mr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var gr="closure_uid_"+(1e9*Math.random()>>>0),yr=0;function vr(t,e,n){return t.call.apply(t.bind,arguments)}function wr(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function br(t,e,n){return(br=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?vr:wr).apply(null,arguments)}function xr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function kr(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.prototype[n].apply(t,r)}}function Er(){this.s=this.s,this.o=this.o}Er.prototype.s=!1,Er.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,gr)&&t[gr]||(t[gr]=++yr))},Er.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ir(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Nr(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(pr(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function Tr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tr.prototype.h=function(){this.defaultPrevented=!0};var Sr=function(){if(!fr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{fr.addEventListener("test",(()=>{}),e),fr.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function _r(t){return/^[\s\xa0]*$/.test(t)}function Ar(){var t=fr.navigator;return t&&(t=t.userAgent)?t:""}function Or(t){return-1!=Ar().indexOf(t)}function Rr(t){return Rr[" "](t),t}Rr[" "]=function(){};var Dr,Lr,Pr,Mr=Or("Opera"),Fr=Or("Trident")||Or("MSIE"),Ur=Or("Edge"),Br=Ur||Fr,zr=Or("Gecko")&&!(-1!=Ar().toLowerCase().indexOf("webkit")&&!Or("Edge"))&&!(Or("Trident")||Or("MSIE"))&&!Or("Edge"),jr=-1!=Ar().toLowerCase().indexOf("webkit")&&!Or("Edge");function Vr(){var t=fr.document;return t?t.documentMode:void 0}t:{var Wr="",Hr=(Lr=Ar(),zr?/rv:([^\);]+)(\)|;)/.exec(Lr):Ur?/Edge\/([\d\.]+)/.exec(Lr):Fr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Lr):jr?/WebKit\/(\S+)/.exec(Lr):Mr?/(?:Version)[ \/]?(\S+)/.exec(Lr):void 0);if(Hr&&(Wr=Hr?Hr[1]:""),Fr){var qr=Vr();if(null!=qr&&qr>parseFloat(Wr)){Dr=String(qr);break t}}Dr=Wr}if(fr.document&&Fr){var $r=Vr();Pr=$r||(parseInt(Dr,10)||void 0)}else Pr=void 0;var Xr=Pr;function Kr(t,e){if(Tr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zr){t:{try{Rr(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Gr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Kr.$.h.call(this)}}kr(Kr,Tr);var Gr={2:"touch",3:"pen",4:"mouse"};Kr.prototype.h=function(){Kr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),Qr=0;function Jr(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Qr,this.fa=this.ia=!1}function Zr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function to(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function eo(t){const e={};for(const n in t)e[n]=t[n];return e}const no="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function io(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<no.length;e++)n=no[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ro(t){this.src=t,this.g={},this.h=0}function oo(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],o=Cr(r,e);(i=0<=o)&&Array.prototype.splice.call(r,o,1),i&&(Zr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function so(t,e,n,i){for(var r=0;r<t.length;++r){var o=t[r];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==i)return r}return-1}ro.prototype.add=function(t,e,n,i,r){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var s=so(t,e,i,r);return-1<s?(e=t[s],n||(e.ia=!1)):((e=new Jr(e,this.src,o,!!i,r)).ia=n,t.push(e)),e};var ao="closure_lm_"+(1e6*Math.random()|0),lo={};function co(t,e,n,i,r){if(i&&i.once)return ho(t,e,n,i,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)co(t,e[o],n,i,r);return null}return n=wo(n),t&&t[Yr]?t.O(e,n,mr(i)?!!i.capture:!!i,r):uo(t,e,n,!1,i,r)}function uo(t,e,n,i,r,o){if(!e)throw Error("Invalid event type");var s=mr(r)?!!r.capture:!!r,a=yo(t);if(a||(t[ao]=a=new ro(t)),(n=a.add(e,n,i,s,o)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=go;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Sr||(r=s),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(mo(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ho(t,e,n,i,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)ho(t,e[o],n,i,r);return null}return n=wo(n),t&&t[Yr]?t.P(e,n,mr(i)?!!i.capture:!!i,r):uo(t,e,n,!0,i,r)}function fo(t,e,n,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)fo(t,e[o],n,i,r);else i=mr(i)?!!i.capture:!!i,n=wo(n),t&&t[Yr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=so(o=t.g[e],n,i,r))&&(Zr(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=yo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=so(e,n,i,r)),(n=-1<t?e[t]:null)&&po(n))}function po(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Yr])oo(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mo(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=yo(e))?(oo(n,t),0==n.h&&(n.src=null,e[ao]=null)):Zr(t)}}}function mo(t){return t in lo?lo[t]:lo[t]="on"+t}function go(t,e){if(t.fa)t=!0;else{e=new Kr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&po(t),t=n.call(i,e)}return t}function yo(t){return(t=t[ao])instanceof ro?t:null}var vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function wo(t){return"function"==typeof t?t:(t[vo]||(t[vo]=function(e){return t.handleEvent(e)}),t[vo])}function bo(){Er.call(this),this.i=new ro(this),this.S=this,this.J=null}function xo(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new Tr(e,t);else if(e instanceof Tr)e.target=e.target||t;else{var r=e;io(e=new Tr(i,t),r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];r=ko(s,i,!0,e)&&r}if(r=ko(s=e.g=t,i,!0,e)&&r,r=ko(s,i,!1,e)&&r,n)for(o=0;o<n.length;o++)r=ko(s=e.g=n[o],i,!1,e)&&r}function ko(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&oo(t.i,s),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}kr(bo,Er),bo.prototype[Yr]=!0,bo.prototype.removeEventListener=function(t,e,n,i){fo(this,t,e,n,i)},bo.prototype.N=function(){if(bo.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Zr(n[i]);delete e.g[t],e.h--}}this.J=null},bo.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},bo.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Eo=fr.JSON.stringify;function Co(){var t=Oo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Io=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new No),(t=>t.reset()));class No{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function To(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function So(t){fr.setTimeout((()=>{throw t}),0)}let _o,Ao=!1,Oo=new class{constructor(){this.h=this.g=null}add(t,e){const n=Io.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Ro=()=>{const t=fr.Promise.resolve(void 0);_o=()=>{t.then(Do)}};var Do=()=>{for(var t;t=Co();){try{t.h.call(t.g)}catch(t){So(t)}var e=Io;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ao=!1};function Lo(t,e){bo.call(this),this.h=t||1,this.g=e||fr,this.j=br(this.qb,this),this.l=Date.now()}function Po(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Mo(t,e,n){if("function"==typeof t)n&&(t=br(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=br(t.handleEvent,t)}return 2147483647<Number(e)?-1:fr.setTimeout(t,e||0)}function Fo(t){t.g=Mo((()=>{t.g=null,t.i&&(t.i=!1,Fo(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}kr(Lo,bo),(cr=Lo.prototype).ga=!1,cr.T=null,cr.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xo(this,"tick"),this.ga&&(Po(this),this.start()))}},cr.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},cr.N=function(){Lo.$.N.call(this),Po(this),delete this.g};class Uo extends Er{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Fo(this)}N(){super.N(),this.g&&(fr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bo(t){Er.call(this),this.h=t,this.g={}}kr(Bo,Er);var zo=[];function jo(t,e,n,i){Array.isArray(n)||(n&&(zo[0]=n.toString()),n=zo);for(var r=0;r<n.length;r++){var o=co(e,n[r],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Vo(t){to(t.g,(function(t,e){this.g.hasOwnProperty(e)&&po(t)}),t),t.g={}}function Wo(){this.g=!0}function Ho(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<r.length;s++)r[s]=""}}}return Eo(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Bo.prototype.N=function(){Bo.$.N.call(this),Vo(this)},Bo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wo.prototype.Ea=function(){this.g=!1},Wo.prototype.info=function(){};var qo={},$o=null;function Xo(){return $o=$o||new bo}function Ko(t){Tr.call(this,qo.Ta,t)}function Go(t){const e=Xo();xo(e,new Ko(e))}function Yo(t,e){Tr.call(this,qo.STAT_EVENT,t),this.stat=e}function Qo(t){const e=Xo();xo(e,new Yo(e,t))}function Jo(t,e){Tr.call(this,qo.Ua,t),this.size=e}function Zo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return fr.setTimeout((function(){t()}),e)}qo.Ta="serverreachability",kr(Ko,Tr),qo.STAT_EVENT="statevent",kr(Yo,Tr),qo.Ua="timingevent",kr(Jo,Tr);var ts={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},es={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ns(){}function is(t){return t.h||(t.h=t.i())}function rs(){}ns.prototype.h=null;var os,ss={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function as(){Tr.call(this,"d")}function ls(){Tr.call(this,"c")}function cs(){}function us(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Bo(this),this.P=ds,t=Br?125:void 0,this.V=new Lo(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hs}function hs(){this.i=null,this.g="",this.h=!1}kr(as,Tr),kr(ls,Tr),kr(cs,ns),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},os=new cs;var ds=45e3,fs={},ps={};function ms(t,e,n){t.L=1,t.v=Ls(_s(e)),t.s=n,t.S=!0,gs(t,null)}function gs(t,e){t.G=Date.now(),bs(t),t.A=_s(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Xs(n.i,"t",i),t.C=0,n=t.l.J,t.h=new hs,t.g=$a(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Uo(br(t.Pa,t,t.g),t.O)),jo(t.U,t.g,"readystatechange",t.nb),e=t.I?eo(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Go(),function(t,e,n,i,r,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+c+"&":s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+s}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function ys(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function vs(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=ws(t,n),i==ps){4==e&&(t.o=4,Qo(14),r=!1),Ho(t.j,t.m,null,"[Incomplete Response]");break}if(i==fs){t.o=4,Qo(15),Ho(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Ho(t.j,t.m,i,null),Is(t,i)}ys(t)&&i!=ps&&i!=fs&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Qo(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ua(e),e.M=!0,Qo(11))):(Ho(t.j,t.m,n,"[Invalid Chunked Response]"),Cs(t),Es(t))}function ws(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ps:(n=Number(e.substring(n,i)),isNaN(n)?fs:(i+=1)+n>e.length?ps:(e=e.slice(i,i+n),t.C=i+n,e))}function bs(t){t.Y=Date.now()+t.P,xs(t,t.P)}function xs(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Zo(br(t.lb,t),e)}function ks(t){t.B&&(fr.clearTimeout(t.B),t.B=null)}function Es(t){0==t.l.H||t.J||ja(t.l,t)}function Cs(t){ks(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Po(t.V),Vo(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Is(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Zs(n.i,t)))if(!t.K&&Zs(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;za(n),Aa(n)}Fa(n),Qo(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Zo(br(n.ib,n),6e3));if(1>=Js(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Wa(n,11)}else if((t.K||n.g==t)&&za(n),!_r(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=c[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=i.i;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(ta(o,o.h),o.h=null))}if(i.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Ds(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var s=t;if((i=n).wa=qa(i,i.J?i.pa:null,i.Y),s.K){ea(i.i,s);var a=s,l=i.L;l&&a.setTimeout(l),a.B&&(ks(a),bs(a)),i.g=s}else Ma(i);0<n.j.length&&Ra(n)}else"stop"!=c[0]&&"close"!=c[0]||Wa(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Wa(n,7):_a(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Go()}catch(t){}}function Ns(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(pr(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(pr(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(pr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}(cr=us.prototype).setTimeout=function(t){this.P=t},cr.nb=function(t){t=t.target;const e=this.M;e&&3==Ea(t)?e.l():this.Pa(t)},cr.Pa=function(t){try{if(t==this.g)t:{const u=Ea(this.g);var e=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Br||this.g&&(this.h.h||this.g.ja()||Ca(this.g)))){this.J||4!=u||7==e||Go(),ks(this);var n=this.g.da();this.ca=n;e:if(ys(this)){var i=Ca(this.g);t="";var r=i.length,o=4==Ea(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Cs(this),Es(this);var s="";break e}this.h.i=new fr.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:o&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,o,s){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_r(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Qo(12),Cs(this),Es(this);break t}Ho(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,n)}this.S?(vs(this,u,s),Br&&this.i&&3==u&&(jo(this.U,this.V,"tick",this.mb),this.V.start())):(Ho(this.j,this.m,s,null),Is(this,s)),4==u&&Cs(this),this.i&&!this.J&&(4==u?ja(this.l,this):(this.i=!1,bs(this)))}else(function(t){const e={};t=(t.g&&2<=Ea(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(_r(t[i]))continue;var n=To(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const o=e[r]||[];e[r]=o,o.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.o=3,Qo(12)):(this.o=0,Qo(13)),Cs(this),Es(this)}}}catch(t){}},cr.mb=function(){if(this.g){var t=Ea(this.g),e=this.g.ja();this.C<e.length&&(ks(this),vs(this,t,e),this.i&&4!=t&&bs(this))}},cr.cancel=function(){this.J=!0,Cs(this)},cr.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Go(),Qo(17)),Cs(this),this.o=2,Es(this)):xs(this,this.Y-t)};var Ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ss(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ss){this.h=t.h,As(this,t.j),this.s=t.s,this.g=t.g,Os(this,t.m),this.l=t.l;var e=t.i,n=new Ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rs(this,n),this.o=t.o}else t&&(e=String(t).match(Ts))?(this.h=!1,As(this,e[1]||"",!0),this.s=Ps(e[2]||""),this.g=Ps(e[3]||"",!0),Os(this,e[4]),this.l=Ps(e[5]||"",!0),Rs(this,e[6]||"",!0),this.o=Ps(e[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}function _s(t){return new Ss(t)}function As(t,e,n){t.j=n?Ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Os(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rs(t,e,n){e instanceof Ws?(t.i=e,function(t,e){e&&!t.j&&(Hs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(qs(this,e),Xs(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ms(e,js)),t.i=new Ws(e,t.h))}function Ds(t,e,n){t.i.set(e,n)}function Ls(t){return Ds(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Fs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ms(e,Us,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ms(e,Us,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ms(n,"/"==n.charAt(0)?zs:Bs,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ms(n,Vs)),t.join("")};var Us=/[#\/\?@]/g,Bs=/[#\?:]/g,zs=/[#\?]/g,js=/[#\?@]/g,Vs=/#/g;function Ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hs(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var o=t[n].substring(0,i);r=t[n].substring(i+1)}else o=t[n];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function qs(t,e){Hs(t),e=Ks(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $s(t,e){return Hs(t),e=Ks(t,e),t.g.has(e)}function Xs(t,e,n){qs(t,e),0<n.length&&(t.i=null,t.g.set(Ks(t,e),Ir(n)),t.h+=n.length)}function Ks(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(cr=Ws.prototype).add=function(t,e){Hs(this),this.i=null,t=Ks(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},cr.forEach=function(t,e){Hs(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},cr.ta=function(){Hs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},cr.Z=function(t){Hs(this);let e=[];if("string"==typeof t)$s(this,t)&&(e=e.concat(this.g.get(Ks(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},cr.set=function(t,e){return Hs(this),this.i=null,$s(this,t=Ks(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},cr.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},cr.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const o=encodeURIComponent(String(i)),s=this.Z(i);for(i=0;i<s.length;i++){var r=o;""!==s[i]&&(r+="="+encodeURIComponent(String(s[i]))),t.push(r)}}return this.i=t.join("&")};function Gs(t){this.l=t||Ys,fr.PerformanceNavigationTiming?t=0<(t=fr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(fr.g&&fr.g.Ka&&fr.g.Ka()&&fr.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ys=10;function Qs(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Js(t){return t.h?1:t.g?t.g.size:0}function Zs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ta(t,e){t.g?t.g.add(e):t.h=e}function ea(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function na(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ir(t.i)}Gs.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ia=class{stringify(t){return fr.JSON.stringify(t,void 0)}parse(t){return fr.JSON.parse(t,void 0)}};function ra(){this.g=new ia}function oa(t,e,n){const i=n||"";try{Ns(t,(function(t,n){let r=t;mr(t)&&(r=Eo(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function sa(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function aa(t){this.l=t.fc||null,this.j=t.ob||!1}function la(t,e){bo.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ca,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}kr(aa,ns),aa.prototype.g=function(){return new la(this.l,this.j)},aa.prototype.i=function(t){return function(){return t}}({}),kr(la,bo);var ca=0;function ua(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function ha(t){t.readyState=4,t.l=null,t.j=null,t.A=null,da(t)}function da(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(cr=la.prototype).open=function(t,e){if(this.readyState!=ca)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,da(this)},cr.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||fr).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},cr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ha(this)),this.readyState=ca},cr.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,da(this)),this.g&&(this.readyState=3,da(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==fr.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ua(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},cr.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ha(this):da(this),3==this.readyState&&ua(this)}},cr.Za=function(t){this.g&&(this.response=this.responseText=t,ha(this))},cr.Ya=function(t){this.g&&(this.response=t,ha(this))},cr.ka=function(){this.g&&ha(this)},cr.setRequestHeader=function(t,e){this.v.append(t,e)},cr.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},cr.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(la.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var fa=fr.JSON.parse;function pa(t){bo.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ma,this.L=this.M=!1}kr(pa,bo);var ma="",ga=/^https?$/i,ya=["POST","PUT"];function va(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wa(t),xa(t)}function wa(t){t.F||(t.F=!0,xo(t,"complete"),xo(t,"error"))}function ba(t){if(t.h&&void 0!==dr&&(!t.C[1]||4!=Ea(t)||2!=t.da()))if(t.v&&4==Ea(t))Mo(t.La,0,t);else if(xo(t,"readystatechange"),4==Ea(t)){t.h=!1;try{const s=t.da();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===s){var r=String(t.I).match(Ts)[1]||null;!r&&fr.self&&fr.self.location&&(r=fr.self.location.protocol.slice(0,-1)),i=!ga.test(r?r.toLowerCase():"")}n=i}if(n)xo(t,"complete"),xo(t,"success");else{t.m=6;try{var o=2<Ea(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.da()+"]",wa(t)}}finally{xa(t)}}}function xa(t,e){if(t.g){ka(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xo(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function ka(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(fr.clearTimeout(t.A),t.A=null)}function Ea(t){return t.g?t.g.readyState:0}function Ca(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ma:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ia(t){let e="";return to(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Na(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ia(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ds(t,e,n))}function Ta(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sa(t){this.Ga=0,this.j=[],this.l=new Wo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ta("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ta("baseRetryDelayMs",5e3,t),this.hb=Ta("retryDelaySeedMs",1e4,t),this.eb=Ta("forwardChannelMaxRetries",2,t),this.xa=Ta("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Gs(t&&t.concurrentRequestLimit),this.Ja=new ra,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function _a(t){if(Oa(t),3==t.H){var e=t.W++,n=_s(t.I);if(Ds(n,"SID",t.K),Ds(n,"RID",e),Ds(n,"TYPE","terminate"),La(t,n),(e=new us(t,t.l,e)).L=2,e.v=Ls(_s(n)),n=!1,fr.navigator&&fr.navigator.sendBeacon)try{n=fr.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&fr.Image&&((new Image).src=e.v,n=!0),n||(e.g=$a(e.l,null),e.g.ha(e.v)),e.G=Date.now(),bs(e)}Ha(t)}function Aa(t){t.g&&(Ua(t),t.g.cancel(),t.g=null)}function Oa(t){Aa(t),t.u&&(fr.clearTimeout(t.u),t.u=null),za(t),t.i.cancel(),t.m&&("number"==typeof t.m&&fr.clearTimeout(t.m),t.m=null)}function Ra(t){if(!Qs(t.i)&&!t.m){t.m=!0;var e=t.Na;_o||Ro(),Ao||(_o(),Ao=!0),Oo.add(e,t),t.C=0}}function Da(t,e){var n;n=e?e.m:t.W++;const i=_s(t.I);Ds(i,"SID",t.K),Ds(i,"RID",n),Ds(i,"AID",t.V),La(t,i),t.o&&t.s&&Na(i,t.o,t.s),n=new us(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Pa(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ta(t.i,n),ms(n,i,e)}function La(t,e){t.na&&to(t.na,(function(t,n){Ds(e,n,t)})),t.h&&Ns({},(function(t,n){Ds(e,n,t)}))}function Pa(t,e,n){n=Math.min(t.j.length,n);var i=t.h?br(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=r[s].g;const a=r[s].map;if(n-=e,0>n)e=Math.max(0,r[s].g-100),o=!1;else try{oa(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(o){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Ma(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;_o||Ro(),Ao||(_o(),Ao=!0),Oo.add(e,t),t.A=0}}function Fa(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Zo(br(t.Ma,t),Va(t,t.A)),t.A++,!0)}function Ua(t){null!=t.B&&(fr.clearTimeout(t.B),t.B=null)}function Ba(t){t.g=new us(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=_s(t.wa);Ds(e,"RID","rpc"),Ds(e,"SID",t.K),Ds(e,"AID",t.V),Ds(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ds(e,"TO",t.qa),Ds(e,"TYPE","xmlhttp"),La(t,e),t.o&&t.s&&Na(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ls(_s(e)),n.s=null,n.S=!0,gs(n,t)}function za(t){null!=t.v&&(fr.clearTimeout(t.v),t.v=null)}function ja(t,e){var n=null;if(t.g==e){za(t),Ua(t),t.g=null;var i=2}else{if(!Zs(t.i,e))return;n=e.F,ea(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;xo(i=Xo(),new Jo(i,n)),Ra(t)}else Ma(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(Js(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Zo(br(t.Na,t,e),Va(t,t.C)),t.C++,0)))}(t,e)||2==i&&Fa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Wa(t,5);break;case 4:Wa(t,10);break;case 3:Wa(t,6);break;default:Wa(t,2)}}function Va(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wa(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=br(t.pb,t);n||(n=new Ss("//www.google.com/images/cleardot.gif"),fr.location&&"http"==fr.location.protocol||As(n,"https"),Ls(n)),function(t,e){const n=new Wo;if(fr.Image){const i=new Image;i.onload=xr(sa,n,i,"TestLoadImage: loaded",!0,e),i.onerror=xr(sa,n,i,"TestLoadImage: error",!1,e),i.onabort=xr(sa,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=xr(sa,n,i,"TestLoadImage: timeout",!1,e),fr.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Qo(2);t.H=0,t.h&&t.h.za(e),Ha(t),Oa(t)}function Ha(t){if(t.H=0,t.ma=[],t.h){const e=na(t.i);0==e.length&&0==t.j.length||(Nr(t.ma,e),Nr(t.ma,t.j),t.i.i.length=0,Ir(t.j),t.j.length=0),t.h.ya()}}function qa(t,e,n){var i=n instanceof Ss?_s(n):new Ss(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Os(i,i.m);else{var r=fr.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var o=new Ss(null);i&&As(o,i),e&&(o.g=e),r&&Os(o,r),n&&(o.l=n),i=o}return n=t.F,e=t.Da,n&&e&&Ds(i,n,e),Ds(i,"VER",t.ra),La(t,i),i}function $a(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new pa(new aa({ob:!0})):new pa(t.va)).Oa(t.J),e}function Xa(){}function Ka(){if(Fr&&!(10<=Number(Xr)))throw Error("Environmental error: no available transport.")}function Ga(t,e){bo.call(this),this.g=new Sa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_r(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_r(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ja(this)}function Ya(t){as.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Qa(){ls.call(this),this.status=1}function Ja(t){this.g=t}function Za(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function tl(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var o=t.g[3],s=e+(o^n&(r^o))+i[0]+3614090360&4294967295;s=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=(n=(r=(o=(e=n+(s<<7&4294967295|s>>>25))+((s=o+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|s>>>20))+((s=r+(n^o&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^r&(o^e))+i[3]+3250441966&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^n&(r^o))+i[4]+4118548399&4294967295)<<7&4294967295|s>>>25))+((s=o+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|s>>>20))+((s=r+(n^o&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^r&(o^e))+i[7]+4249261313&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^n&(r^o))+i[8]+1770035416&4294967295)<<7&4294967295|s>>>25))+((s=o+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|s>>>20))+((s=r+(n^o&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^r&(o^e))+i[11]+2304563134&4294967295)<<22&4294967295|s>>>10))+((s=e+(o^n&(r^o))+i[12]+1804603682&4294967295)<<7&4294967295|s>>>25))+((s=o+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|s>>>20))+((s=r+(n^o&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|s>>>15))+((s=n+(e^r&(o^e))+i[15]+1236535329&4294967295)<<22&4294967295|s>>>10))+((s=e+(r^o&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^n&(o^e))+i[11]+643717713&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(r^o))+i[0]+3921069994&4294967295)<<20&4294967295|s>>>12))+((s=e+(r^o&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^n&(o^e))+i[15]+3634488961&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(r^o))+i[4]+3889429448&4294967295)<<20&4294967295|s>>>12))+((s=e+(r^o&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^n&(o^e))+i[3]+4107603335&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(r^o))+i[8]+1163531501&4294967295)<<20&4294967295|s>>>12))+((s=e+(r^o&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|s>>>23))+((s=r+(e^n&(o^e))+i[7]+1735328473&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^e&(r^o))+i[12]+2368359562&4294967295)<<20&4294967295|s>>>12))+((s=e+(n^r^o)+i[5]+4294588738&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|s>>>16))+((s=n+(r^o^e)+i[14]+4259657740&4294967295)<<23&4294967295|s>>>9))+((s=e+(n^r^o)+i[1]+2763975236&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|s>>>16))+((s=n+(r^o^e)+i[10]+3200236656&4294967295)<<23&4294967295|s>>>9))+((s=e+(n^r^o)+i[13]+681279174&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|s>>>16))+((s=n+(r^o^e)+i[6]+76029189&4294967295)<<23&4294967295|s>>>9))+((s=e+(n^r^o)+i[9]+3654602809&4294967295)<<4&4294967295|s>>>28))+((s=o+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|s>>>21))+((s=r+(o^e^n)+i[15]+530742520&4294967295)<<16&4294967295|s>>>16))+((s=n+(r^o^e)+i[2]+3299628645&4294967295)<<23&4294967295|s>>>9))+((s=e+(r^(n|~o))+i[0]+4096336452&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|s>>>22))+((s=r+(e^(o|~n))+i[14]+2878612391&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|s>>>11))+((s=e+(r^(n|~o))+i[12]+1700485571&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|s>>>22))+((s=r+(e^(o|~n))+i[10]+4293915773&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|s>>>11))+((s=e+(r^(n|~o))+i[8]+1873313359&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|s>>>22))+((s=r+(e^(o|~n))+i[6]+2734768916&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|s>>>11))+((o=(e=n+((s=e+(r^(n|~o))+i[4]+4149444226&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|s>>>22))^((r=o+((s=r+(e^(o|~n))+i[2]+718787259&4294967295)<<15&4294967295|s>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+o&4294967295}function el(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var o=0|t[r];i&&o==e||(n[r]=o,i=!1)}this.g=n}(cr=pa.prototype).Oa=function(t){this.M=t},cr.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():os.g(),this.C=this.u?is(this.u):is(os),this.g.onreadystatechange=br(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void va(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=fr.FormData&&t instanceof fr.FormData,!(0<=Cr(ya,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ka(this),0<this.B&&((this.L=function(t){return Fr&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=br(this.ua,this)):this.A=Mo(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){va(this,t)}},cr.ua=function(){void 0!==dr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xo(this,"timeout"),this.abort(8))},cr.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xo(this,"complete"),xo(this,"abort"),xa(this))},cr.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xa(this,!0)),pa.$.N.call(this)},cr.La=function(){this.s||(this.G||this.v||this.l?ba(this):this.kb())},cr.kb=function(){ba(this)},cr.isActive=function(){return!!this.g},cr.da=function(){try{return 2<Ea(this)?this.g.status:-1}catch(t){return-1}},cr.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},cr.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),fa(e)}},cr.Ia=function(){return this.m},cr.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(cr=Sa.prototype).ra=8,cr.H=1,cr.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new us(this,this.l,t);let o=this.s;if(this.U&&(o?(o=eo(o),io(o,this.U)):o=this.U),null!==this.o||this.O||(r.I=o,o=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Pa(this,r,e),Ds(n=_s(this.I),"RID",t),Ds(n,"CVER",22),this.F&&Ds(n,"X-HTTP-Session-Id",this.F),La(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(Ia(o)))+"&"+e:this.o&&Na(n,this.o,o)),ta(this.i,r),this.bb&&Ds(n,"TYPE","init"),this.P?(Ds(n,"$req",e),Ds(n,"SID","null"),r.aa=!0,ms(r,n,null)):ms(r,n,e),this.H=2}}else 3==this.H&&(t?Da(this,t):0==this.j.length||Qs(this.i)||Da(this))},cr.Ma=function(){if(this.u=null,Ba(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Zo(br(this.jb,this),t)}},cr.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qo(10),Aa(this),Ba(this))},cr.ib=function(){null!=this.v&&(this.v=null,Aa(this),Fa(this),Qo(19))},cr.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qo(2)):(this.l.info("Failed to ping google.com"),Qo(1))},cr.isActive=function(){return!!this.h&&this.h.isActive(this)},(cr=Xa.prototype).Ba=function(){},cr.Aa=function(){},cr.za=function(){},cr.ya=function(){},cr.isActive=function(){return!0},cr.Va=function(){},Ka.prototype.g=function(t,e){return new Ga(t,e)},kr(Ga,bo),Ga.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qo(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qa(t,null,t.Y),Ra(t)},Ga.prototype.close=function(){_a(this.g)},Ga.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Eo(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&Ra(e)},Ga.prototype.N=function(){this.g.h=null,delete this.j,_a(this.g),delete this.g,Ga.$.N.call(this)},kr(Ya,as),kr(Qa,ls),kr(Ja,Xa),Ja.prototype.Ba=function(){xo(this.g,"a")},Ja.prototype.Aa=function(t){xo(this.g,new Ya(t))},Ja.prototype.za=function(t){xo(this.g,new Qa)},Ja.prototype.ya=function(){xo(this.g,"b")},kr(Za,(function(){this.blockSize=-1})),Za.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Za.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,o=0;o<e;){if(0==r)for(;o<=n;)tl(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[r++]=t.charCodeAt(o++),r==this.blockSize){tl(this,i),r=0;break}}else for(;o<e;)if(i[r++]=t[o++],r==this.blockSize){tl(this,i),r=0;break}}this.h=r,this.i+=e},Za.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var nl={};function il(t){return-128<=t&&128>t?function(t,e){var n=nl;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new el([0|t],0>t?-1:0)})):new el([0|t],0>t?-1:0)}function rl(t){if(isNaN(t)||!isFinite(t))return sl;if(0>t)return hl(rl(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ol;return new el(e,0)}var ol=4294967296,sl=il(0),al=il(1),ll=il(16777216);function cl(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function ul(t){return-1==t.h}function hl(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new el(n,~t.h).add(al)}function dl(t,e){return t.add(hl(e))}function fl(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function pl(t,e){this.g=t,this.h=e}function ml(t,e){if(cl(e))throw Error("division by zero");if(cl(t))return new pl(sl,sl);if(ul(t))return e=ml(hl(t),e),new pl(hl(e.g),hl(e.h));if(ul(e))return e=ml(t,hl(e)),new pl(hl(e.g),e.h);if(30<t.g.length){if(ul(t)||ul(e))throw Error("slowDivide_ only works with positive integers.");for(var n=al,i=e;0>=i.X(t);)n=gl(n),i=gl(i);var r=yl(n,1),o=yl(i,1);for(i=yl(i,2),n=yl(n,2);!cl(i);){var s=o.add(i);0>=s.X(t)&&(r=r.add(n),o=s),i=yl(i,1),n=yl(n,1)}return e=dl(t,r.R(e)),new pl(r,e)}for(r=sl;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),s=(o=rl(n)).R(e);ul(s)||0<s.X(t);)s=(o=rl(n-=i)).R(e);cl(o)&&(o=al),r=r.add(o),t=dl(t,s)}return new pl(r,t)}function gl(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new el(n,t.h)}function yl(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],o=0;o<i;o++)r[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new el(r,t.h)}(cr=el.prototype).ea=function(){if(ul(this))return-hl(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ol+i)*e,e*=ol}return t},cr.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(cl(this))return"0";if(ul(this))return"-"+hl(this).toString(t);for(var e=rl(Math.pow(t,6)),n=this,i="";;){var r=ml(n,e).g,o=((0<(n=dl(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(cl(n=r))return o+i;for(;6>o.length;)o="0"+o;i=o+i}},cr.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},cr.X=function(t){return ul(t=dl(this,t))?-1:cl(t)?0:1},cr.abs=function(){return ul(this)?hl(this):this},cr.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var o=i+(65535&this.D(r))+(65535&t.D(r)),s=(o>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=s>>>16,o&=65535,s&=65535,n[r]=s<<16|o}return new el(n,-2147483648&n[n.length-1]?-1:0)},cr.R=function(t){if(cl(this)||cl(t))return sl;if(ul(this))return ul(t)?hl(this).R(hl(t)):hl(hl(this).R(t));if(ul(t))return hl(this.R(hl(t)));if(0>this.X(ll)&&0>t.X(ll))return rl(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var o=this.D(i)>>>16,s=65535&this.D(i),a=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=s*l,fl(n,2*i+2*r),n[2*i+2*r+1]+=o*l,fl(n,2*i+2*r+1),n[2*i+2*r+1]+=s*a,fl(n,2*i+2*r+1),n[2*i+2*r+2]+=o*a,fl(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new el(n,0)},cr.gb=function(t){return ml(this,t).h},cr.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new el(n,this.h&t.h)},cr.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new el(n,this.h|t.h)},cr.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new el(n,this.h^t.h)},Ka.prototype.createWebChannel=Ka.prototype.g,Ga.prototype.send=Ga.prototype.u,Ga.prototype.open=Ga.prototype.m,Ga.prototype.close=Ga.prototype.close,ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,es.COMPLETE="complete",rs.EventType=ss,ss.OPEN="a",ss.CLOSE="b",ss.ERROR="c",ss.MESSAGE="d",bo.prototype.listen=bo.prototype.O,pa.prototype.listenOnce=pa.prototype.P,pa.prototype.getLastError=pa.prototype.Sa,pa.prototype.getLastErrorCode=pa.prototype.Ia,pa.prototype.getStatus=pa.prototype.da,pa.prototype.getResponseJson=pa.prototype.Wa,pa.prototype.getResponseText=pa.prototype.ja,pa.prototype.send=pa.prototype.ha,pa.prototype.setWithCredentials=pa.prototype.Oa,Za.prototype.digest=Za.prototype.l,Za.prototype.reset=Za.prototype.reset,Za.prototype.update=Za.prototype.j,el.prototype.add=el.prototype.add,el.prototype.multiply=el.prototype.R,el.prototype.modulo=el.prototype.gb,el.prototype.compare=el.prototype.X,el.prototype.toNumber=el.prototype.ea,el.prototype.toString=el.prototype.toString,el.prototype.getBits=el.prototype.D,el.fromNumber=rl,el.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return hl(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=rl(Math.pow(n,8)),r=sl,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),a=parseInt(e.substring(o,o+s),n);8>s?(s=rl(Math.pow(n,s)),r=r.R(s).add(rl(a))):r=(r=r.R(i)).add(rl(a))}return r};var vl=hr.createWebChannelTransport=function(){return new Ka},wl=hr.getStatEventTarget=function(){return Xo()},bl=hr.ErrorCode=ts,xl=hr.EventType=es,kl=hr.Event=qo,El=hr.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Cl=hr.FetchXmlHttpFactory=aa,Il=hr.WebChannel=rs,Nl=hr.XhrIo=pa,Tl=hr.Md5=Za,Sl=hr.Integer=el;const _l="@firebase/firestore";
/**
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
 */class Al{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Al.UNAUTHENTICATED=new Al(null),Al.GOOGLE_CREDENTIALS=new Al("google-credentials-uid"),Al.FIRST_PARTY=new Al("first-party-uid"),Al.MOCK_USER=new Al("mock-user");
/**
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
 */
let Ol="10.1.0";
/**
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
 */const Rl=new ot("@firebase/firestore");function Dl(){return Rl.logLevel}function Ll(t,...e){if(Rl.logLevel<=Z.DEBUG){const n=e.map(Fl);Rl.debug(`Firestore (${Ol}): ${t}`,...n)}}function Pl(t,...e){if(Rl.logLevel<=Z.ERROR){const n=e.map(Fl);Rl.error(`Firestore (${Ol}): ${t}`,...n)}}function Ml(t,...e){if(Rl.logLevel<=Z.WARN){const n=e.map(Fl);Rl.warn(`Firestore (${Ol}): ${t}`,...n)}}function Fl(t){if("string"==typeof t)return t;try{
/**
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
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
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
 */function Ul(t="Unexpected state"){const e=`FIRESTORE (${Ol}) INTERNAL ASSERTION FAILED: `+t;throw Pl(e),new Error(e)}function Bl(t,e){t||Ul()}function zl(t,e){return t}
/**
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
 */const jl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vl extends P{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Wl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Hl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ql{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Al.UNAUTHENTICATED)))}shutdown(){}}class $l{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Xl{constructor(t){this.t=t,this.currentUser=Al.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Wl;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Wl,t.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},s=t=>{Ll("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Ll("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Wl)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ll("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Bl("string"==typeof e.accessToken),new Hl(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Bl(null===t||"string"==typeof t),new Al(t)}}class Kl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Al.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gl{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Kl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Al.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ql{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Ll("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Ll("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ll("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Ll("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Bl("string"==typeof t.token),this.R=t.token,new Yl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Jl(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
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
 */class Zl{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=Jl(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function tc(t,e){return t<e?-1:t>e?1:0}function ec(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
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
 */
class nc{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Vl(jl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Vl(jl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Vl(jl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Vl(jl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nc.fromMillis(Date.now())}static fromDate(t){return nc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new nc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?tc(this.nanoseconds,t.nanoseconds):tc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class ic{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ic(t)}static min(){return new ic(new nc(0,0))}static max(){return new ic(new nc(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class rc{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ul(),void 0===n?n=t.length-e:n>t.length-e&&Ul(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===rc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class oc extends rc{construct(t,e,n){return new oc(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Vl(jl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new oc(e)}static emptyPath(){return new oc([])}}const sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ac extends rc{construct(t,e,n){return new ac(t,e,n)}static isValidIdentifier(t){return sc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ac.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ac(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Vl(jl.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Vl(jl.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Vl(jl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(o=!o,i++):"."!==e||o?(n+=e,i++):(r(),i++)}if(r(),o)throw new Vl(jl.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ac(e)}static emptyPath(){return new ac([])}}
/**
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
 */class lc{constructor(t){this.path=t}static fromPath(t){return new lc(oc.fromString(t))}static fromName(t){return new lc(oc.fromString(t).popFirst(5))}static empty(){return new lc(oc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===oc.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return oc.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new lc(new oc(t.slice()))}}
/**
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
 */class cc{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}cc.UNKNOWN_ID=-1;function uc(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=ic.fromTimestamp(1e9===i?new nc(n+1,0):new nc(n,i));return new dc(r,lc.empty(),e)}function hc(t){return new dc(t.readTime,t.key,-1)}class dc{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new dc(ic.min(),lc.empty(),-1)}static max(){return new dc(ic.max(),lc.empty(),-1)}}function fc(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=lc.comparator(t.documentKey,e.documentKey),0!==n?n:tc(t.largestBatchId,e.largestBatchId))}
/**
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
 */const pc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function gc(t){if(t.code!==jl.FAILED_PRECONDITION||t.message!==pc)throw t;Ll("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class yc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ul(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new yc(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof yc?e:yc.resolve(e)}catch(t){return yc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):yc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):yc.reject(e)}static resolve(t){return new yc(((e,n)=>{e(t)}))}static reject(t){return new yc(((e,n)=>{n(t)}))}static waitFor(t){return new yc(((e,n)=>{let i=0,r=0,o=!1;t.forEach((t=>{++i,t.next((()=>{++r,o&&r===i&&e()}),(t=>n(t)))})),o=!0,r===i&&e()}))}static or(t){let e=yc.resolve(!1);for(const n of t)e=e.next((t=>t?yc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new yc(((n,i)=>{const r=t.length,o=new Array(r);let s=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{o[l]=t,++s,s===r&&n(o)}),(t=>i(t)))}}))}static doWhile(t,e){return new yc(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
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
 */function vc(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class wc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function bc(t){return null==t}function xc(t){return 0===t&&1/t==-1/0}function kc(t){return"number"==typeof t&&Number.isInteger(t)&&!xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */wc.ae=-1;const Ec=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Cc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ic=Cc;
/**
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
 */
/**
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
 */
function Nc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class _c{constructor(t,e){this.comparator=t,this.root=e||Oc.EMPTY}insert(t,e){return new _c(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Oc.BLACK,null,null))}remove(t){return new _c(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Oc.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ac(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ac(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ac(this.root,t,this.comparator,!0)}}class Ac{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Oc{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Oc.RED,this.left=null!=i?i:Oc.EMPTY,this.right=null!=r?r:Oc.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Oc(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oc.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Oc.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Oc.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Oc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ul();if(this.right.isRed())throw Ul();const t=this.left.check();if(t!==this.right.check())throw Ul();return t+(this.isRed()?0:1)}}Oc.EMPTY=null,Oc.RED=!0,Oc.BLACK=!1,Oc.EMPTY=new class{constructor(){this.size=0}get key(){throw Ul()}get value(){throw Ul()}get color(){throw Ul()}get left(){throw Ul()}get right(){throw Ul()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Oc(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Rc{constructor(t){this.comparator=t,this.data=new _c(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Dc(this.data.getIterator())}getIteratorFrom(t){return new Dc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Rc))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Rc(this.comparator);return e.data=t,e}}class Dc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Lc{constructor(t){this.fields=t,t.sort(ac.comparator)}static empty(){return new Lc([])}unionWith(t){let e=new Rc(ac.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Lc(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ec(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class Pc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class Mc{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Pc("Invalid base64 string: "+t):t}}(t);return new Mc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Mc(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Mc.EMPTY_BYTE_STRING=new Mc("");const Fc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Uc(t){if(Bl(!!t),"string"==typeof t){let e=0;const n=Fc.exec(t);if(Bl(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Bc(t.seconds),nanos:Bc(t.nanos)}}function Bc(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function zc(t){return"string"==typeof t?Mc.fromBase64String(t):Mc.fromUint8Array(t)}
/**
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
 */function jc(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vc(t){const e=t.mapValue.fields.__previous_value__;return jc(e)?Vc(e):e}function Wc(t){const e=Uc(t.mapValue.fields.__local_write_time__.timestampValue);return new nc(e.seconds,e.nanos)}
/**
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
 */class Hc{constructor(t,e,n,i,r,o,s,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=l}}class qc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qc&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const $c={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jc(t)?4:su(t)?9007199254740991:10:Ul()}function Kc(t,e){if(t===e)return!0;const n=Xc(t);if(n!==Xc(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wc(t).isEqual(Wc(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Uc(t.timestampValue),i=Uc(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,zc(t.bytesValue).isEqual(zc(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Bc(t.geoPointValue.latitude)===Bc(e.geoPointValue.latitude)&&Bc(t.geoPointValue.longitude)===Bc(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Bc(t.integerValue)===Bc(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Bc(t.doubleValue),i=Bc(e.doubleValue);return n===i?xc(n)===xc(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ec(t.arrayValue.values||[],e.arrayValue.values||[],Kc);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Nc(n)!==Nc(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Kc(n[t],i[t])))return!1;return!0}(t,e);default:return Ul()}var i}function Gc(t,e){return void 0!==(t.values||[]).find((t=>Kc(t,e)))}function Yc(t,e){if(t===e)return 0;const n=Xc(t),i=Xc(e);if(n!==i)return tc(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return tc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Bc(t.integerValue||t.doubleValue),i=Bc(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Qc(t.timestampValue,e.timestampValue);case 4:return Qc(Wc(t),Wc(e));case 5:return tc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=zc(t),i=zc(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=tc(n[t],i[t]);if(0!==e)return e}return tc(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=tc(Bc(t.latitude),Bc(e.latitude));return 0!==n?n:tc(Bc(t.longitude),Bc(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Yc(n[t],i[t]);if(e)return e}return tc(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===$c.mapValue&&e===$c.mapValue)return 0;if(t===$c.mapValue)return 1;if(e===$c.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},o=Object.keys(r);i.sort(),o.sort();for(let t=0;t<i.length&&t<o.length;++t){const e=tc(i[t],o[t]);if(0!==e)return e;const s=Yc(n[i[t]],r[o[t]]);if(0!==s)return s}return tc(i.length,o.length)}(t.mapValue,e.mapValue);default:throw Ul()}}function Qc(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return tc(t,e);const n=Uc(t),i=Uc(e),r=tc(n.seconds,i.seconds);return 0!==r?r:tc(n.nanos,i.nanos)}function Jc(t){return Zc(t)}function Zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Uc(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zc(t.bytesValue).toBase64():"referenceValue"in t?function(t){return lc.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Zc(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Zc(t.fields[r])}`;return n+"}"}(t.mapValue):Ul()}function tu(t){return!!t&&"integerValue"in t}function eu(t){return!!t&&"arrayValue"in t}function nu(t){return!!t&&"nullValue"in t}function iu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ru(t){return!!t&&"mapValue"in t}function ou(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tc(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ou(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ou(t.arrayValue.values[n]);return e}return Object.assign({},t)}function su(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class au{constructor(t){this.value=t}static empty(){return new au({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ru(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ou(e)}setAll(t){let e=ac.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=ou(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());ru(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kc(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Tc(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new au(ou(this.value))}}function lu(t){const e=[];return Tc(t.fields,((t,n)=>{const i=new ac([t]);if(ru(n)){const t=lu(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Lc(e)
/**
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
 */}class cu{constructor(t,e,n,i,r,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=o,this.documentState=s}static newInvalidDocument(t){return new cu(t,0,ic.min(),ic.min(),ic.min(),au.empty(),0)}static newFoundDocument(t,e,n,i){return new cu(t,1,e,ic.min(),n,i,0)}static newNoDocument(t,e){return new cu(t,2,e,ic.min(),ic.min(),au.empty(),0)}static newUnknownDocument(t,e){return new cu(t,3,e,ic.min(),ic.min(),au.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ic.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=au.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=au.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ic.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof cu&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new cu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class uu{constructor(t,e){this.position=t,this.inclusive=e}}function hu(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const o=e[r],s=t.position[r];if(i=o.field.isKeyField()?lc.comparator(lc.fromName(s.referenceValue),n.key):Yc(s,n.data.field(o.field)),"desc"===o.dir&&(i*=-1),0!==i)break}return i}function du(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kc(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class fu{constructor(t,e="asc"){this.field=t,this.dir=e}}function pu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class mu{}class gu extends mu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Cu(t,e,n):"array-contains"===e?new Su(t,n):"in"===e?new _u(t,n):"not-in"===e?new Au(t,n):"array-contains-any"===e?new Ou(t,n):new gu(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Iu(t,n):new Nu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Yc(e,this.value)):null!==e&&Xc(this.value)===Xc(e)&&this.matchesComparison(Yc(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ul()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yu extends mu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new yu(t,e)}matches(t){return vu(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function vu(t){return"and"===t.op}function wu(t){return bu(t)&&vu(t)}function bu(t){for(const e of t.filters)if(e instanceof yu)return!1;return!0}function xu(t){if(t instanceof gu)return t.field.canonicalString()+t.op.toString()+Jc(t.value);if(wu(t))return t.filters.map((t=>xu(t))).join(",");{const e=t.filters.map((t=>xu(t))).join(",");return`${t.op}(${e})`}}function ku(t,e){return t instanceof gu?(n=t,(i=e)instanceof gu&&n.op===i.op&&n.field.isEqual(i.field)&&Kc(n.value,i.value)):t instanceof yu?function(t,e){return e instanceof yu&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&ku(n,e.filters[i])),!0)}(t,e):void Ul();var n,i}function Eu(t){return t instanceof gu?`${(e=t).field.canonicalString()} ${e.op} ${Jc(e.value)}`:t instanceof yu?function(t){return t.op.toString()+" {"+t.getFilters().map(Eu).join(" ,")+"}"}(t):"Filter";var e}class Cu extends gu{constructor(t,e,n){super(t,e,n),this.key=lc.fromName(n.referenceValue)}matches(t){const e=lc.comparator(t.key,this.key);return this.matchesComparison(e)}}class Iu extends gu{constructor(t,e){super(t,"in",e),this.keys=Tu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Nu extends gu{constructor(t,e){super(t,"not-in",e),this.keys=Tu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Tu(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>lc.fromName(t.referenceValue)))}class Su extends gu{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return eu(e)&&Gc(e.arrayValue,this.value)}}class _u extends gu{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Gc(this.value.arrayValue,e)}}class Au extends gu{constructor(t,e){super(t,"not-in",e)}matches(t){if(Gc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Gc(this.value.arrayValue,e)}}class Ou extends gu{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!eu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Gc(this.value.arrayValue,t)))}}
/**
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
 */class Ru{constructor(t,e=null,n=[],i=[],r=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=o,this.endAt=s,this.he=null}}function Du(t,e=null,n=[],i=[],r=null,o=null,s=null){return new Ru(t,e,n,i,r,o,s)}function Lu(t){const e=zl(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>xu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Jc(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Jc(t))).join(",")),e.he=t}return e.he}function Pu(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ku(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!du(t.startAt,e.startAt)&&du(t.endAt,e.endAt)}function Mu(t){return lc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */
class Fu{constructor(t,e=null,n=[],i=[],r=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=o,this.startAt=s,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Uu(t,e,n,i,r,o,s,a){return new Fu(t,e,n,i,r,o,s,a)}function Bu(t){return new Fu(t)}function zu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ju(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vu(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Wu(t){return null!==t.collectionGroup}function Hu(t){const e=zl(t);if(null===e.Pe){e.Pe=[];const t=Vu(e),n=ju(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new fu(t)),e.Pe.push(new fu(ac.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new fu(ac.keyField(),t))}}}return e.Pe}function qu(t){const e=zl(t);if(!e.Ie)if("F"===e.limitType)e.Ie=Du(e.path,e.collectionGroup,Hu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Hu(e)){const e="desc"===n.dir?"asc":"desc";t.push(new fu(n.field,e))}const n=e.endAt?new uu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new uu(e.startAt.position,e.startAt.inclusive):null;e.Ie=Du(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.Ie}function $u(t,e,n){return new Fu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xu(t,e){return Pu(qu(t),qu(e))&&t.limitType===e.limitType}function Ku(t){return`${Lu(qu(t))}|lt:${t.limitType}`}function Gu(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Eu(t))).join(", ")}]`),bc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Jc(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Jc(t))).join(",")),`Target(${e})`}(qu(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):lc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Hu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=hu(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,Hu(n),i)||n.endAt&&!function(t,e,n){const i=hu(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,Hu(n),i)));var n,i}function Qu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ju(t){return(e,n)=>{let i=!1;for(const r of Hu(t)){const t=Zu(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Zu(t,e,n){const i=t.field.isKeyField()?lc.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Yc(i,r):Ul()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ul()}}
/**
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
 */class th{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Tc(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Sc(this.inner)}size(){return this.innerSize}}
/**
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
 */const eh=new _c(lc.comparator);function nh(){return eh}const ih=new _c(lc.comparator);function rh(...t){let e=ih;for(const n of t)e=e.insert(n.key,n);return e}function oh(t){let e=ih;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function sh(){return lh()}function ah(){return lh()}function lh(){return new th((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ch=new _c(lc.comparator),uh=new Rc(lc.comparator);function hh(...t){let e=uh;for(const n of t)e=e.add(n);return e}const dh=new Rc(tc);function fh(){return dh}
/**
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
 */function ph(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function mh(t){return{integerValue:""+t}}function gh(t,e){return kc(e)?mh(e):ph(t,e)}
/**
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
 */class yh{constructor(){this._=void 0}}function vh(t,e,n){return t instanceof xh?kh(t,e):t instanceof Eh?Ch(t,e):n}function wh(t,e){return t instanceof Ih?tu(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null;var n,i}class bh extends yh{}class xh extends yh{constructor(t){super(),this.elements=t}}function kh(t,e){const n=Th(e);for(const e of t.elements)n.some((t=>Kc(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Eh extends yh{constructor(t){super(),this.elements=t}}function Ch(t,e){let n=Th(e);for(const e of t.elements)n=n.filter((t=>!Kc(t,e)));return{arrayValue:{values:n}}}class Ih extends yh{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Nh(t){return Bc(t.integerValue||t.doubleValue)}function Th(t){return eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class Sh{constructor(t,e){this.version=t,this.transformResults=e}}class _h{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _h}static exists(t){return new _h(void 0,t)}static updateTime(t){return new _h(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ah(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Oh{}function Rh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Vh(t.key,_h.none()):new Fh(t.key,t.data,_h.none());{const n=t.data,i=au.empty();let r=new Rc(ac.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Uh(t.key,i,new Lc(r.toArray()),_h.none())}}function Dh(t,e,n){var i;t instanceof Fh?function(t,e,n){const i=t.value.clone(),r=zh(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Uh?function(t,e,n){if(!Ah(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=zh(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Bh(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function Lh(t,e,n,i){return t instanceof Fh?function(t,e,n,i){if(!Ah(t.precondition,e))return n;const r=t.value.clone(),o=jh(t.fieldTransforms,i,e);return r.setAll(o),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Uh?function(t,e,n,i){if(!Ah(t.precondition,e))return n;const r=jh(t.fieldTransforms,i,e),o=e.data;return o.setAll(Bh(t)),o.setAll(r),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(r=e,o=n,Ah(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o);var r,o}function Ph(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=wh(i.transform,t||null);null!=r&&(null===n&&(n=au.empty()),n.set(i.field,r))}return n||null}function Mh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&ec(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof xh&&i instanceof xh||n instanceof Eh&&i instanceof Eh?ec(n.elements,i.elements,Kc):n instanceof Ih&&i instanceof Ih?Kc(n.Te,i.Te):n instanceof bh&&i instanceof bh);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Fh extends Oh{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Uh extends Oh{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Bh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function zh(t,e,n){const i=new Map;Bl(t.length===n.length);for(let r=0;r<n.length;r++){const o=t[r],s=o.transform,a=e.data.field(o.field);i.set(o.field,vh(s,a,n[r]))}return i}function jh(t,e,n){const i=new Map;for(const a of t){const t=a.transform,l=n.data.field(a.field);i.set(a.field,(o=l,s=e,(r=t)instanceof bh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&jc(e)&&(e=Vc(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(s,o):r instanceof xh?kh(r,o):r instanceof Eh?Ch(r,o):function(t,e){const n=wh(t,e),i=Nh(n)+Nh(t.Te);return tu(n)&&tu(t.Te)?mh(i):ph(t.serializer,i)}(r,o)))}var r,o,s;return i}class Vh extends Oh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wh extends Oh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Hh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Dh(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Lh(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Lh(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ah();return this.mutations.forEach((i=>{const r=t.get(i.key),o=r.overlayedDocument;let s=this.applyToLocalView(o,r.mutatedFields);s=e.has(i.key)?null:s;const a=Rh(o,s);null!==a&&n.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(ic.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),hh())}isEqual(t){return this.batchId===t.batchId&&ec(this.mutations,t.mutations,((t,e)=>Mh(t,e)))&&ec(this.baseMutations,t.baseMutations,((t,e)=>Mh(t,e)))}}class qh{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Bl(t.mutations.length===n.length);let i=ch;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new qh(t,e,n,i)}}
/**
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
 */class $h{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class Xh{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var Kh,Gh;function Yh(t){switch(t){default:return Ul();case jl.CANCELLED:case jl.UNKNOWN:case jl.DEADLINE_EXCEEDED:case jl.RESOURCE_EXHAUSTED:case jl.INTERNAL:case jl.UNAVAILABLE:case jl.UNAUTHENTICATED:return!1;case jl.INVALID_ARGUMENT:case jl.NOT_FOUND:case jl.ALREADY_EXISTS:case jl.PERMISSION_DENIED:case jl.FAILED_PRECONDITION:case jl.ABORTED:case jl.OUT_OF_RANGE:case jl.UNIMPLEMENTED:case jl.DATA_LOSS:return!0}}function Qh(t){if(void 0===t)return Pl("GRPC error has no .code"),jl.UNKNOWN;switch(t){case Kh.OK:return jl.OK;case Kh.CANCELLED:return jl.CANCELLED;case Kh.UNKNOWN:return jl.UNKNOWN;case Kh.DEADLINE_EXCEEDED:return jl.DEADLINE_EXCEEDED;case Kh.RESOURCE_EXHAUSTED:return jl.RESOURCE_EXHAUSTED;case Kh.INTERNAL:return jl.INTERNAL;case Kh.UNAVAILABLE:return jl.UNAVAILABLE;case Kh.UNAUTHENTICATED:return jl.UNAUTHENTICATED;case Kh.INVALID_ARGUMENT:return jl.INVALID_ARGUMENT;case Kh.NOT_FOUND:return jl.NOT_FOUND;case Kh.ALREADY_EXISTS:return jl.ALREADY_EXISTS;case Kh.PERMISSION_DENIED:return jl.PERMISSION_DENIED;case Kh.FAILED_PRECONDITION:return jl.FAILED_PRECONDITION;case Kh.ABORTED:return jl.ABORTED;case Kh.OUT_OF_RANGE:return jl.OUT_OF_RANGE;case Kh.UNIMPLEMENTED:return jl.UNIMPLEMENTED;case Kh.DATA_LOSS:return jl.DATA_LOSS;default:return Ul()}}(Gh=Kh||(Kh={}))[Gh.OK=0]="OK",Gh[Gh.CANCELLED=1]="CANCELLED",Gh[Gh.UNKNOWN=2]="UNKNOWN",Gh[Gh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gh[Gh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gh[Gh.NOT_FOUND=5]="NOT_FOUND",Gh[Gh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gh[Gh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gh[Gh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gh[Gh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gh[Gh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gh[Gh.ABORTED=10]="ABORTED",Gh[Gh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gh[Gh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gh[Gh.INTERNAL=13]="INTERNAL",Gh[Gh.UNAVAILABLE=14]="UNAVAILABLE",Gh[Gh.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Jh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zh}static getOrCreateInstance(){return null===Zh&&(Zh=new Jh),Zh}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Zh=null;
/**
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
 */function td(){return new TextEncoder}
/**
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
 */const ed=new Sl([4294967295,4294967295],0);function nd(t){const e=td().encode(t),n=new Tl;return n.update(e),new Uint8Array(n.digest())}function id(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Sl([n,i],0),new Sl([r,o],0)]}class rd{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new od(`Invalid padding: ${e}`);if(n<0)throw new od(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new od(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new od(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=Sl.fromNumber(this.de)}Re(t,e,n){let i=t.add(e.multiply(Sl.fromNumber(n)));return 1===i.compare(ed)&&(i=new Sl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.de)return!1;const e=nd(t),[n,i]=id(e);for(let t=0;t<this.hashCount;t++){const e=this.Re(n,i,t);if(!this.Ve(e))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new rd(r,i,e);return n.forEach((t=>o.insert(t))),o}insert(t){if(0===this.de)return;const e=nd(t),[n,i]=id(e);for(let t=0;t<this.hashCount;t++){const e=this.Re(n,i,t);this.me(e)}}me(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class od extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class sd{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,ad.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new sd(ic.min(),i,new _c(tc),nh(),hh())}}class ad{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ad(n,e,hh(),hh(),hh())}}
/**
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
 */class ld{constructor(t,e,n,i){this.fe=t,this.removedTargetIds=e,this.key=n,this.ge=i}}class cd{constructor(t,e){this.targetId=t,this.pe=e}}class ud{constructor(t,e,n=Mc.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class hd{constructor(){this.ye=0,this.we=pd(),this.Se=Mc.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=hh(),e=hh(),n=hh();return this.we.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Ul()}})),new ad(this.Se,this.be,t,e,n)}xe(){this.De=!1,this.we=pd()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class dd{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=nh(),this.$e=fd(),this.Ue=new _c(tc)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Fe(t.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(t.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(n.ke(),n.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Fe(t.resumeToken));break;default:Ul()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){var e,n;const i=t.targetId,r=t.pe.count,o=this.Xe(i);if(o){const s=o.target;if(Mu(s))if(0===r){const t=new lc(s.path);this.ze(i,t,cu.newNoDocument(t,ic.min()))}else Bl(1===r);else{const o=this.et(i);if(o!==r){const r=this.tt(t,o);if(0!==r.status){this.Ye(i);const t=2===r.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,t)}null===(e=Jh.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n,i){var r,o,s,a,l,c;const u={localCacheCount:n,existenceFilterCount:i.count},h=i.unchangedNames;return h&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==h?void 0:h.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(s=null===(o=null==h?void 0:h.bits)||void 0===o?void 0:o.bitmap)||void 0===s?void 0:s.length)&&void 0!==a?a:0,padding:null!==(c=null===(l=null==h?void 0:h.bits)||void 0===l?void 0:l.padding)&&void 0!==c?c:0},e&&(u.bloomFilter.mightContain=e)),u}(r.status,null!==(n=r.nt)&&void 0!==n?n:null,o,t.pe))}}}}tt(t,e){const{unchangedNames:n,count:i}=t.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:s=0}=n;let a,l;try{a=zc(r).toUint8Array()}catch(t){if(t instanceof Pc)return Ml("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw t}try{l=new rd(a,o,s)}catch(t){return Ml(t instanceof od?"BloomFilter error: ":"Applying bloom filter failed: ",t),{status:1}}const c=t=>{const e=this.qe.rt();return l.mightContain(`projects/${e.projectId}/databases/${e.database}/documents/${t}`)};return 0===l.de?{status:1}:{status:i===e-this.it(t.targetId,c)?0:2,nt:c}}it(t,e){const n=this.qe.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{e(n.path.canonicalString())||(this.ze(t,n,null),i++)})),i}st(t){const e=new Map;this.Qe.forEach(((n,i)=>{const r=this.Xe(i);if(r){if(n.current&&Mu(r.target)){const e=new lc(r.target.path);null!==this.Ke.get(e)||this.ot(i,e)||this.ze(i,e,cu.newNoDocument(e,t))}n.Ce&&(e.set(i,n.Me()),n.xe())}}));let n=hh();this.$e.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Ke.forEach(((e,n)=>n.setReadTime(t)));const i=new sd(t,e,this.Ue,this.Ke,n);return this.Ke=nh(),this.$e=fd(),this.Ue=new _c(tc),i}Ge(t,e){if(!this.Je(t))return;const n=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,n),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),n&&(this.Ke=this.Ke.insert(e,n))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new hd,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new Rc(tc),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||Ll("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new hd),this.qe.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function fd(){return new _c(lc.comparator)}function pd(){return new _c(lc.comparator)}const md={asc:"ASCENDING",desc:"DESCENDING"},gd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yd={and:"AND",or:"OR"};class vd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function wd(t,e){return t.useProto3Json||bc(e)?e:{value:e}}function bd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xd(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kd(t,e){return bd(t,e.toTimestamp())}function Ed(t){return Bl(!!t),ic.fromTimestamp(function(t){const e=Uc(t);return new nc(e.seconds,e.nanos)}(t))}function Cd(t,e){return(n=t,new oc(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Id(t){const e=oc.fromString(t);return Bl(Hd(e)),e}function Nd(t,e){return Cd(t.databaseId,e.path)}function Td(t,e){const n=Id(e);if(n.get(1)!==t.databaseId.projectId)throw new Vl(jl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Vl(jl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new lc(Od(n))}function Sd(t,e){return Cd(t.databaseId,e)}function _d(t){const e=Id(t);return 4===e.length?oc.emptyPath():Od(e)}function Ad(t){return new oc(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Od(t){return Bl(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Rd(t,e,n){return{name:Nd(t,e),fields:n.value.mapValue.fields}}function Dd(t,e){let n;if(e instanceof Fh)n={update:Rd(t,e.key,e.value)};else if(e instanceof Vh)n={delete:Nd(t,e.key)};else if(e instanceof Uh)n={update:Rd(t,e.key,e.data),updateMask:Wd(e.fieldMask)};else{if(!(e instanceof Wh))return Ul();n={verify:Nd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof bh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof xh)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Eh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ih)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw Ul()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:kd(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Ul())),n;var i,r}function Ld(t,e){return{documents:[Sd(t,e.path)]}}function Pd(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Sd(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sd(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return Vd(yu.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:zd((e=t).field),direction:Ud(e.dir)};var e}))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=wd(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n;var a}function Md(t){let e=_d(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Bl(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=Fd(t);return e instanceof yu&&wu(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>{return new fu(jd((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,bc(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new uu(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new uu(n,e)}(n.endAt)),Uu(e,r,s,o,a,"F",l,c)}function Fd(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=jd(t.unaryFilter.field);return gu.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=jd(t.unaryFilter.field);return gu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jd(t.unaryFilter.field);return gu.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=jd(t.unaryFilter.field);return gu.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ul()}}(t):void 0!==t.fieldFilter?(n=t,gu.create(jd(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ul()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,yu.create(e.compositeFilter.filters.map((t=>Fd(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ul()}}(e.compositeFilter.op))):Ul();var e,n}function Ud(t){return md[t]}function Bd(t){return gd[t]}function zd(t){return{fieldPath:t.canonicalString()}}function jd(t){return ac.fromServerFormat(t.fieldPath)}function Vd(t){return t instanceof gu?function(t){if("=="===t.op){if(iu(t.value))return{unaryFilter:{field:zd(t.field),op:"IS_NAN"}};if(nu(t.value))return{unaryFilter:{field:zd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(iu(t.value))return{unaryFilter:{field:zd(t.field),op:"IS_NOT_NAN"}};if(nu(t.value))return{unaryFilter:{field:zd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zd(t.field),op:Bd(t.op),value:t.value}}}(t):t instanceof yu?function(t){const e=t.getFilters().map((t=>Vd(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,yd[n]),filters:e}};var n}(t):Ul()}function Wd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Hd(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class qd{constructor(t,e,n,i,r=ic.min(),o=ic.min(),s=Mc.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(t){return new qd(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qd(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class $d{constructor(t){this.ct=t}}function Xd(t){const e=Md({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?$u(e,e.limit,"L"):e}
/**
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
 */class Kd{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(Bc(t.integerValue));else if("doubleValue"in t){const n=Bc(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),xc(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(zc(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?su(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):Ul()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const t of Object.keys(n))this.Rt(t,e),this.It(n[t],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const t of n)this.It(t,e)}gt(t,e){this.Et(e,37),lc.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Kd.bt=new Kd;
/**
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
 */
class Gd{constructor(){this.sn=new Yd}addToCollectionParentIndex(t,e){return this.sn.add(e),yc.resolve()}getCollectionParents(t,e){return yc.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return yc.resolve()}deleteFieldIndex(t,e){return yc.resolve()}getDocumentsMatchingTarget(t,e){return yc.resolve(null)}getIndexType(t,e){return yc.resolve(0)}getFieldIndexes(t,e){return yc.resolve([])}getNextCollectionGroupToUpdate(t){return yc.resolve(null)}getMinOffset(t,e){return yc.resolve(dc.min())}getMinOffsetFromCollectionGroup(t,e){return yc.resolve(dc.min())}updateCollectionGroup(t,e,n){return yc.resolve()}updateIndexEntries(t,e){return yc.resolve()}}class Yd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Rc(oc.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Rc(oc.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Qd{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Qd(t,Qd.DEFAULT_COLLECTION_PERCENTILE,Qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Qd.DEFAULT_COLLECTION_PERCENTILE=10,Qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qd.DEFAULT=new Qd(41943040,Qd.DEFAULT_COLLECTION_PERCENTILE,Qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qd.DISABLED=new Qd(-1,0,0);
/**
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
 */
class Jd{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Jd(0)}static On(){return new Jd(-1)}}
/**
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
 */
/**
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
 */
class Zd{constructor(){this.changes=new th((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,cu.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?yc.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class tf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class ef{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Lh(n.mutation,t,Lc.empty(),nc.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,hh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=hh()){const i=sh();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=rh();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=sh();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,hh())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=nh();const o=lh(),s=lh();return e.forEach(((t,e)=>{const s=n.get(e.key);i.has(e.key)&&(void 0===s||s.mutation instanceof Uh)?r=r.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),Lh(s.mutation,e,s.mutation.getFieldMask(),nc.now())):o.set(e.key,Lc.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new tf(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=lh();let i=new _c(((t,e)=>t-e)),r=hh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||Lc.empty();s=r.applyToLocalView(o,s),n.set(t,s);const a=(i.get(r.batchId)||hh()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const o=[],s=i.getReverseIterator();for(;s.hasNext();){const i=s.getNext(),a=i.key,l=i.value,c=ah();l.forEach((t=>{if(!r.has(t)){const i=Rh(e.get(t),n.get(t));null!==i&&c.set(t,i),r=r.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,c))}return yc.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,lc.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Wu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):yc.resolve(sh());let s=-1,a=r;return o.next((e=>yc.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),r.get(e)?yc.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,hh()))).next((t=>({batchId:s,changes:oh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new lc(e)).next((t=>{let e=rh();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=rh();return this.indexManager.getCollectionParents(t,i).next((o=>yc.forEach(o,(o=>{const s=(a=e,l=o.child(i),new Fu(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(t,s,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,cu.newInvalidDocument(i)))}));let n=rh();return t.forEach(((t,r)=>{const o=i.get(t);void 0!==o&&Lh(o.mutation,r,Lc.empty(),nc.now()),Yu(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
 */class nf{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return yc.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,{id:(n=e).id,version:n.version,createTime:Ed(n.createTime)}),yc.resolve();var n}getNamedQuery(t,e){return yc.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,{name:(n=e).name,query:Xd(n.bundledQuery),readTime:Ed(n.readTime)}),yc.resolve();var n}}
/**
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
 */class rf{constructor(){this.overlays=new _c(lc.comparator),this.cr=new Map}getOverlay(t,e){return yc.resolve(this.overlays.get(e))}getOverlays(t,e){const n=sh();return yc.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),yc.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.cr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),yc.resolve()}getOverlaysForCollection(t,e,n){const i=sh(),r=e.length+1,o=new lc(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return yc.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new _c(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=sh(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=sh(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>s.set(t,e))),!(s.size()>=i)););return yc.resolve(s)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.cr.get(i.largestBatchId).delete(n.key);this.cr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new $h(e,n));let r=this.cr.get(e);void 0===r&&(r=hh(),this.cr.set(e,r)),this.cr.set(e,r.add(n.key))}}
/**
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
 */class of{constructor(){this.lr=new Rc(sf.hr),this.Pr=new Rc(sf.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new sf(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new sf(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new lc(new oc([])),n=new sf(e,t),i=new sf(e,t+1),r=[];return this.Pr.forEachInRange([n,i],(t=>{this.Er(t),r.push(t.key)})),r}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new lc(new oc([])),n=new sf(e,t),i=new sf(e,t+1);let r=hh();return this.Pr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new sf(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class sf{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return lc.comparator(t.key,e.key)||tc(t.mr,e.mr)}static Ir(t,e){return tc(t.mr,e.mr)||lc.comparator(t.key,e.key)}}
/**
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
 */class af{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new Rc(sf.hr)}checkEmpty(t){return yc.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hh(r,e,n,i);this.mutationQueue.push(o);for(const e of i)this.pr=this.pr.add(new sf(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return yc.resolve(o)}lookupMutationBatch(t,e){return yc.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.wr(n),r=i<0?0:i;return yc.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return yc.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return yc.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new sf(e,0),i=new sf(e,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([n,i],(t=>{const e=this.yr(t.mr);r.push(e)})),yc.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Rc(tc);return e.forEach((t=>{const e=new sf(t,0),i=new sf(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,i],(t=>{n=n.add(t.mr)}))})),yc.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;lc.isDocumentKey(r)||(r=r.child(""));const o=new sf(new lc(r),0);let s=new Rc(tc);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(s=s.add(t.mr)),!0)}),o),yc.resolve(this.Sr(s))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Bl(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return yc.forEach(e.mutations,(i=>{const r=new sf(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new sf(e,0),i=this.pr.firstAfterOrEqual(n);return yc.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,yc.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class lf{constructor(t){this.Dr=t,this.docs=new _c(lc.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return yc.resolve(n?n.document.mutableCopy():cu.newInvalidDocument(e))}getEntries(t,e){let n=nh();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():cu.newInvalidDocument(t))})),yc.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=nh();const o=e.path,s=new lc(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||fc(hc(s),n)<=0||(i.has(s.key)||Yu(e,s))&&(r=r.insert(s.key,s.mutableCopy()))}return yc.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Ul()}vr(t,e){return yc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new cf(this)}getSize(t){return yc.resolve(this.size)}}class cf extends Zd{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(n)})),yc.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
/**
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
 */class uf{constructor(t){this.persistence=t,this.Cr=new th((t=>Lu(t)),Pu),this.lastRemoteSnapshotVersion=ic.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new of,this.targetCount=0,this.Or=Jd.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),yc.resolve()}getLastRemoteSnapshotVersion(t){return yc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return yc.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),yc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),yc.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Jd(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,yc.resolve()}updateTargetData(t,e){return this.Ln(e),yc.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,yc.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Cr.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,s.targetId)),i++)})),yc.waitFor(r).next((()=>i))}getTargetCount(t){return yc.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return yc.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),yc.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),yc.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),yc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return yc.resolve(n)}containsKey(t,e){return yc.resolve(this.Mr.containsKey(e))}}
/**
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
 */class hf{constructor(t,e){this.Nr={},this.overlays={},this.Br=new wc(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new uf(this),this.indexManager=new Gd,this.remoteDocumentCache=new lf((t=>this.referenceDelegate.qr(t))),this.serializer=new $d(e),this.Qr=new nf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new af(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){Ll("MemoryPersistence","Starting transaction:",t);const i=new df(this.Br.next());return this.referenceDelegate.Kr(),n(i).next((t=>this.referenceDelegate.$r(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ur(t,e){return yc.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class df extends mc{constructor(t){super(),this.currentSequenceNumber=t}}class ff{constructor(t){this.persistence=t,this.Wr=new of,this.Gr=null}static zr(t){return new ff(t)}get jr(){if(this.Gr)return this.Gr;throw Ul()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),yc.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),yc.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),yc.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return yc.forEach(this.jr,(n=>{const i=lc.fromPath(n);return this.Hr(t,i).next((t=>{t||e.removeEntry(i,ic.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return yc.or([()=>yc.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
/**
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
 */
class pf{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=i}static qi(t,e){let n=hh(),i=hh();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new pf(t,e.fromCache,n,i)}}
/**
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
 */class mf{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.$i(t,e).next((r=>r||this.Ui(t,e,i,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(zu(e))return yc.resolve(null);let n=qu(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=$u(e,null,"F"),n=qu(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=hh(...i);return this.Ki.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.Gi(e,i);return this.zi(e,o,r,n.readTime)?this.$i(t,$u(e,null,"F")):this.ji(t,o,e,n)}))))})))))}Ui(t,e,n,i){return zu(e)||i.isEqual(ic.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((r=>{const o=this.Gi(e,r);return this.zi(e,o,n,i)?this.Wi(t,e):(Dl()<=Z.DEBUG&&Ll("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gu(e)),this.ji(t,o,e,uc(i,-1)))}))}Gi(t,e){let n=new Rc(Ju(t));return e.forEach(((e,i)=>{Yu(t,i)&&(n=n.add(i))})),n}zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(t,e){return Dl()<=Z.DEBUG&&Ll("QueryEngine","Using full collection scan to execute query:",Gu(e)),this.Ki.getDocumentsMatchingQuery(t,e,dc.min())}ji(t,e,n,i){return this.Ki.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class gf{constructor(t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new _c(tc),this.Yi=new th((t=>Lu(t)),Pu),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ef(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function yf(t,e,n,i){return new gf(t,e,n,i)}async function vf(t,e){const n=zl(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],o=[];let s=hh();for(const t of i){r.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({ts:t,removedBatchIds:r,addedBatchIds:o})))}))}))}function wf(t){const e=zl(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function bf(t,e,n){let i=hh(),r=hh();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=nh();return n.forEach(((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(r=r.add(n)),o.isNoDocument()&&o.version.isEqual(ic.min())?(e.removeEntry(n,o.readTime),i=i.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),i=i.insert(n,o)):Ll("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{ns:i,rs:r}}))}function xf(t,e){const n=zl(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function kf(t,e){const n=zl(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.kr.getTargetData(t,e).next((r=>r?(i=r,yc.resolve(i)):n.kr.allocateTargetId(t).next((r=>(i=new qd(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.kr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Ji.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Ef(t,e,n){const i=zl(t),r=i.Ji.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!vc(t))throw t;Ll("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(r.target)}function Cf(t,e,n){const i=zl(t);let r=ic.min(),o=hh();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=zl(t),r=i.Yi.get(n);return void 0!==r?yc.resolve(i.Ji.get(r)):i.kr.getTargetData(e,n)}(i,t,qu(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{o=t}))})).next((()=>i.Hi.getDocumentsMatchingQuery(t,e,n?r:ic.min(),n?o:hh()))).next((t=>(If(i,Qu(e),t),{documents:t,ss:o})))))}function If(t,e,n){let i=t.Zi.get(e)||ic.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Zi.set(e,i)}class Nf{constructor(){this.activeTargetIds=fh()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tf{constructor(){this.Hs=new Nf,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Nf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Sf{Ys(t){}shutdown(){}}
/**
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
 */class _f{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Ll("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){Ll("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Af=null;function Of(){return null===Af?Af=268435456+Math.round(2147483648*Math.random()):Af++,"0x"+Af.toString(16)
/**
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
 */}const Rf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Df{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
/**
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
 */const Lf="WebChannelConnection";class Pf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${i}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Ro(){return!1}Vo(t,e,n,i,r){const o=Of(),s=this.mo(t,e);Ll("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,i,r),this.po(t,s,a,n).then((e=>(Ll("RestConnection",`Received RPC '${t}' ${o}: `,e),e)),(e=>{throw Ml("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e}))}yo(t,e,n,i,r,o){return this.Vo(t,e,n,i,r)}fo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ol,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=Rf[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,i){const r=Of();return new Promise(((o,s)=>{const a=new Nl;a.setWithCredentials(!0),a.listenOnce(xl.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case bl.NO_ERROR:const e=a.getResponseJson();Ll(Lf,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),o(e);break;case bl.TIMEOUT:Ll(Lf,`RPC '${t}' ${r} timed out`),s(new Vl(jl.DEADLINE_EXCEEDED,"Request time out"));break;case bl.HTTP_ERROR:const n=a.getStatus();if(Ll(Lf,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(jl).indexOf(e)>=0?e:jl.UNKNOWN}(e.status);s(new Vl(t,e.message))}else s(new Vl(jl.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new Vl(jl.UNAVAILABLE,"Connection failed."));break;default:Ul()}}finally{Ll(Lf,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(i);Ll(Lf,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)}))}wo(t,e,n){const i=Of(),r=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=vl(),s=wl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new Cl({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Ll(Lf,`Creating RPC '${t}' stream ${i}: ${c}`,a);const u=o.createWebChannel(c,a);let h=!1,d=!1;const f=new Df({so:e=>{d?Ll(Lf,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(Ll(Lf,`Opening RPC '${t}' stream ${i} transport.`),u.open(),h=!0),Ll(Lf,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},oo:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,Il.EventType.OPEN,(()=>{d||Ll(Lf,`RPC '${t}' stream ${i} transport opened.`)})),p(u,Il.EventType.CLOSE,(()=>{d||(d=!0,Ll(Lf,`RPC '${t}' stream ${i} transport closed`),f.Po())})),p(u,Il.EventType.ERROR,(e=>{d||(d=!0,Ml(Lf,`RPC '${t}' stream ${i} transport errored:`,e),f.Po(new Vl(jl.UNAVAILABLE,"The operation could not be completed")))})),p(u,Il.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];Bl(!!r);const o=r,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){Ll(Lf,`RPC '${t}' stream ${i} received error:`,s);const e=s.status;let n=function(t){const e=Kh[t];if(void 0!==e)return Qh(e)}(e),r=s.message;void 0===n&&(n=jl.INTERNAL,r="Unknown error status: "+e+" with message "+s.message),d=!0,f.Po(new Vl(n,r)),u.close()}else Ll(Lf,`RPC '${t}' stream ${i} received:`,r),f.Io(r)}})),p(s,kl.STAT_EVENT,(e=>{e.stat===El.PROXY?Ll(Lf,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===El.NOPROXY&&Ll(Lf,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
/**
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
 */
/**
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
 */function Mf(){return"undefined"!=typeof document?document:null}
/**
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
 */function Ff(t){return new vd(t,!0)}
/**
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
 */class Uf{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-n);i>0&&Ll("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
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
 */class Bf{constructor(t,e,n,i,r,o,s,a){this.ii=t,this.Bo=n,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Uf(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===jl.RESOURCE_EXHAUSTED?(Pl(e.toString()),Pl("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===jl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new Vl(jl.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return Ll("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(Ll("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zf extends Bf{constructor(t,e,n,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,o),this.serializer=r}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(i=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Ul(),o=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(Bl(void 0===e||"string"==typeof e),Mc.fromBase64String(e||"")):(Bl(void 0===e||e instanceof Uint8Array),Mc.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(t){const e=void 0===t.code?jl.UNKNOWN:Qh(t.code);return new Vl(e,t.message||"")}(a);n=new ud(r,o,s,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Td(t,i.document.name),o=Ed(i.document.updateTime),s=i.document.createTime?Ed(i.document.createTime):ic.min(),a=new au({mapValue:{fields:i.document.fields}}),l=cu.newFoundDocument(r,o,s,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ld(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Td(t,i.document),o=i.readTime?Ed(i.readTime):ic.min(),s=cu.newNoDocument(r,o),a=i.removedTargetIds||[];n=new ld([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Td(t,i.document),o=i.removedTargetIds||[];n=new ld([],o,r,null)}else{if(!("filter"in e))return Ul();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:r}=t,o=new Xh(i,r),s=t.targetId;n=new cd(s,o)}}var i;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return ic.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ic.min():e.readTime?Ed(e.readTime):ic.min()}(t);return this.listener.r_(e,n)}i_(t){const e={};e.database=Ad(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=Mu(i)?{documents:Ld(t,i)}:{query:Pd(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=xd(t,e.resumeToken);const i=wd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(ic.min())>0){n.readTime=bd(t,e.snapshotVersion.toTimestamp());const i=wd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ul()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Ho(e)}s_(t){const e={};e.database=Ad(this.serializer),e.removeTarget=t,this.Ho(e)}}class jf extends Bf{constructor(t,e,n,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Bl(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Bl(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Ed(t.updateTime):Ed(e);return n.isEqual(ic.min())&&(n=Ed(e)),new Sh(n,t.transformResults||[])}(t,n)))):[]),r=Ed(t.commitTime);return this.listener.u_(r,i)}var e,n;return Bl(!t.writeResults||0===t.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Ad(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Dd(this.serializer,t)))};this.Ho(e)}}
/**
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
 */class Vf extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new Vl(jl.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.Vo(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vl(jl.UNKNOWN,t.toString())}))}yo(t,e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.yo(t,e,n,r,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vl(jl.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class Wf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Pl(e),this.d_=!1):Ll("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
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
 */class Hf{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{Zf(this)&&(Ll("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=zl(t);e.y_.add(4),await $f(e),e.b_.set("Unknown"),e.y_.delete(4),await qf(e)}(this))}))})),this.b_=new Wf(n,i)}}async function qf(t){if(Zf(t))for(const e of t.w_)await e(!0)}async function $f(t){for(const e of t.w_)await e(!1)}function Xf(t,e){const n=zl(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Jf(n)?Qf(n):yp(n).Uo()&&Gf(n,e))}function Kf(t,e){const n=zl(t),i=yp(n);n.p_.delete(e),i.Uo()&&Yf(n,e),0===n.p_.size&&(i.Uo()?i.zo():Zf(n)&&n.b_.set("Unknown"))}function Gf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ic.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yp(t).i_(e)}function Yf(t,e){t.D_.Be(e),yp(t).s_(e)}function Qf(t){t.D_=new dd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),yp(t).start(),t.b_.A_()}function Jf(t){return Zf(t)&&!yp(t).$o()&&t.p_.size>0}function Zf(t){return 0===zl(t).y_.size}function tp(t){t.D_=void 0}async function ep(t){t.p_.forEach(((e,n)=>{Gf(t,e)}))}async function np(t,e){tp(t),Jf(t)?(t.b_.m_(e),Qf(t)):t.b_.set("Unknown")}async function ip(t,e,n){if(t.b_.set("Online"),e instanceof ud&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.p_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.p_.delete(i),t.D_.removeTarget(i))}(t,e)}catch(n){Ll("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rp(t,n)}else if(e instanceof ld?t.D_.We(e):e instanceof cd?t.D_.Ze(e):t.D_.je(e),!n.isEqual(ic.min()))try{const e=await wf(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.D_.st(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.p_.get(i);r&&t.p_.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.p_.get(e);if(!i)return;t.p_.set(e,i.withResumeToken(Mc.EMPTY_BYTE_STRING,i.snapshotVersion)),Yf(t,e);const r=new qd(i.target,e,n,i.sequenceNumber);Gf(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ll("RemoteStore","Failed to raise snapshot:",e),await rp(t,e)}}async function rp(t,e,n){if(!vc(e))throw e;t.y_.add(1),await $f(t),t.b_.set("Offline"),n||(n=()=>wf(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ll("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await qf(t)}))}function op(t,e){return e().catch((n=>rp(t,n,e)))}async function sp(t){const e=zl(t),n=vp(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;ap(e);)try{const t=await xf(e.localStore,i);if(null===t){0===e.g_.length&&n.zo();break}i=t.batchId,lp(e,t)}catch(t){await rp(e,t)}cp(e)&&up(e)}function ap(t){return Zf(t)&&t.g_.length<10}function lp(t,e){t.g_.push(e);const n=vp(t);n.Uo()&&n.__&&n.a_(e.mutations)}function cp(t){return Zf(t)&&!vp(t).$o()&&t.g_.length>0}function up(t){vp(t).start()}async function hp(t){vp(t).l_()}async function dp(t){const e=vp(t);for(const n of t.g_)e.a_(n.mutations)}async function fp(t,e,n){const i=t.g_.shift(),r=qh.from(i,e,n);await op(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await sp(t)}async function pp(t,e){e&&vp(t).__&&await async function(t,e){if(Yh(n=e.code)&&n!==jl.ABORTED){const n=t.g_.shift();vp(t).Go(),await op(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await sp(t)}var n}(t,e),cp(t)&&up(t)}async function mp(t,e){const n=zl(t);n.asyncQueue.verifyOperationInProgress(),Ll("RemoteStore","RemoteStore received new credentials");const i=Zf(n);n.y_.add(3),await $f(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await qf(n)}async function gp(t,e){const n=zl(t);e?(n.y_.delete(2),await qf(n)):e||(n.y_.add(2),await $f(n),n.b_.set("Unknown"))}function yp(t){return t.v_||(t.v_=function(t,e,n){const i=zl(t);return i.P_(),new zf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{_o:ep.bind(null,t),uo:np.bind(null,t),r_:ip.bind(null,t)}),t.w_.push((async e=>{e?(t.v_.Go(),Jf(t)?Qf(t):t.b_.set("Unknown")):(await t.v_.stop(),tp(t))}))),t.v_}function vp(t){return t.C_||(t.C_=function(t,e,n){const i=zl(t);return i.P_(),new jf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{_o:hp.bind(null,t),uo:pp.bind(null,t),c_:dp.bind(null,t),u_:fp.bind(null,t)}),t.w_.push((async e=>{e?(t.C_.Go(),await sp(t)):(await t.C_.stop(),t.g_.length>0&&(Ll("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))}))),t.C_
/**
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
 */}class wp{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Wl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const o=Date.now()+n,s=new wp(t,e,o,i,r);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vl(jl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bp(t,e){if(Pl("AsyncQueue",`${e}: ${t}`),vc(t))return new Vl(jl.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class xp{constructor(t){this.comparator=t?(e,n)=>t(e,n)||lc.comparator(e.key,n.key):(t,e)=>lc.comparator(t.key,e.key),this.keyedMap=rh(),this.sortedSet=new _c(this.comparator)}static emptySet(t){return new xp(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof xp))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new xp;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class kp{constructor(){this.F_=new _c(lc.comparator)}track(t){const e=t.doc.key,n=this.F_.get(e);n?0!==t.type&&3===n.type?this.F_=this.F_.insert(e,t):3===t.type&&1!==n.type?this.F_=this.F_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.F_=this.F_.remove(e):1===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):Ul():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ep{constructor(t,e,n,i,r,o,s,a,l){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(t,e,n,i,r){const o=[];return e.forEach((t=>{o.push({type:0,doc:t})})),new Ep(t,e,xp.emptySet(e),o,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
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
 */class Cp{constructor(){this.x_=void 0,this.listeners=[]}}class Ip{constructor(){this.queries=new th((t=>Ku(t)),Xu),this.onlineState="Unknown",this.O_=new Set}}async function Np(t,e){const n=zl(t),i=e.query;let r=!1,o=n.queries.get(i);if(o||(r=!0,o=new Cp),r)try{o.x_=await n.onListen(i)}catch(t){const n=bp(t,`Initialization of query '${Gu(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,o),o.listeners.push(e),e.N_(n.onlineState),o.x_&&e.B_(o.x_)&&Ap(n)}async function Tp(t,e){const n=zl(t),i=e.query;let r=!1;const o=n.queries.get(i);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),r=0===o.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Sp(t,e){const n=zl(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.B_(t)&&(i=!0);r.x_=t}}i&&Ap(n)}function _p(t,e,n){const i=zl(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function Ap(t){t.O_.forEach((t=>{t.next()}))}class Op{constructor(t,e,n){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ep(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.W_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}U_(t){t=Ep.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}
/**
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
 */
/**
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
 */
class Rp{constructor(t){this.key=t}}class Dp{constructor(t){this.key=t}}class Lp{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=hh(),this.mutatedKeys=hh(),this.na=Ju(t),this.ra=new xp(this.na)}get ia(){return this.X_}sa(t,e){const n=e?e.oa:new kp,i=e?e.ra:this.ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,s=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const c=i.get(t),u=Yu(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this._a(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.na(u,a)>0||l&&this.na(u,l)<0)&&(s=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(s=!0)),f&&(u?(o=o.add(u),r=d?r.add(t):r.delete(t)):(o=o.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{ra:o,oa:n,zi:s,mutatedKeys:r}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const r=t.oa.M_();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ul()}};return n(t)-n(e)}(t.type,e.type)||this.na(t.doc,e.doc))),this.aa(n);const o=e?this.ua():[],s=0===this.ta.size&&this.current?1:0,a=s!==this.ea;return this.ea=s,0!==r.length||a?{snapshot:new Ep(this.query,t.ra,i,r,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ra:this.ra,oa:new kp,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach((t=>this.X_=this.X_.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.X_=this.X_.delete(t))),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=hh(),this.ra.forEach((t=>{this.la(t.key)&&(this.ta=this.ta.add(t.key))}));const e=[];return t.forEach((t=>{this.ta.has(t)||e.push(new Dp(t))})),this.ta.forEach((n=>{t.has(n)||e.push(new Rp(n))})),e}ha(t){this.X_=t.ss,this.ta=hh();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return Ep.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class Pp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Mp{constructor(t){this.key=t,this.Ia=!1}}class Fp{constructor(t,e,n,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new th((t=>Ku(t)),Xu),this.da=new Map,this.Aa=new Set,this.Ra=new _c(lc.comparator),this.Va=new Map,this.ma=new of,this.fa={},this.ga=new Map,this.pa=Jd.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Up(t,e){const n=nm(t);let i,r;const o=n.Ea.get(e);if(o)i=o.targetId,n.sharedClientState.addLocalQueryTarget(i),r=o.view.Pa();else{const t=await kf(n.localStore,qu(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Bp(n,e,i,"current"===o,t.resumeToken),n.isPrimaryClient&&Xf(n.remoteStore,t)}return r}async function Bp(t,e,n,i,r){t.wa=(e,n,i)=>async function(t,e,n,i){let r=e.view.sa(n);r.zi&&(r=await Cf(t.localStore,e.query,!1).then((({documents:t})=>e.view.sa(t,r))));const o=i&&i.targetChanges.get(e.targetId),s=e.view.applyChanges(r,t.isPrimaryClient,o);return Yp(t,e.targetId,s.ca),s.snapshot}(t,e,n,i);const o=await Cf(t.localStore,e,!0),s=new Lp(e,o.ss),a=s.sa(o.documents),l=ad.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),c=s.applyChanges(a,t.isPrimaryClient,l);Yp(t,n,c.ca);const u=new Pp(e,n,s);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function zp(t,e){const n=zl(t),i=n.Ea.get(e),r=n.da.get(i.targetId);if(r.length>1)return n.da.set(i.targetId,r.filter((t=>!Xu(t,e)))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ef(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Kf(n.remoteStore,i.targetId),Kp(n,i.targetId)})).catch(gc)):(Kp(n,i.targetId),await Ef(n.localStore,i.targetId,!0))}async function jp(t,e){const n=zl(t);try{const t=await function(t,e){const n=zl(t),i=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const s=[];e.targetChanges.forEach(((o,a)=>{const l=r.get(a);if(!l)return;s.push(n.kr.removeMatchingKeys(t,o.removedDocuments,a).next((()=>n.kr.addMatchingKeys(t,o.addedDocuments,a))));let c=l.withSequenceNumber(t.currentSequenceNumber);var u,h,d;null!==e.targetMismatches.get(a)?c=c.withResumeToken(Mc.EMPTY_BYTE_STRING,ic.min()).withLastLimboFreeSnapshotVersion(ic.min()):o.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(o.resumeToken,i)),r=r.insert(a,c),h=c,d=o,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&s.push(n.kr.updateTargetData(t,c))}));let a=nh(),l=hh();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),s.push(bf(t,o,e.documentUpdates).next((t=>{a=t.ns,l=t.rs}))),!i.isEqual(ic.min())){const e=n.kr.getLastRemoteSnapshotVersion(t).next((e=>n.kr.setTargetsMetadata(t,t.currentSequenceNumber,i)));s.push(e)}return yc.waitFor(s).next((()=>o.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,l))).next((()=>a))})).then((t=>(n.Ji=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Va.get(e);i&&(Bl(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Ia=!0:t.modifiedDocuments.size>0?Bl(i.Ia):t.removedDocuments.size>0&&(Bl(i.Ia),i.Ia=!1))})),await Zp(n,t,e)}catch(t){await gc(t)}}function Vp(t,e,n){const i=zl(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Ea.forEach(((n,i)=>{const r=i.view.N_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=zl(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.N_(e)&&(i=!0)})),i&&Ap(n)}(i.eventManager,e),t.length&&i.Ta.r_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Wp(t,e,n){const i=zl(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Va.get(e),o=r&&r.key;if(o){let t=new _c(lc.comparator);t=t.insert(o,cu.newNoDocument(o,ic.min()));const n=hh().add(o),r=new sd(ic.min(),new Map,new _c(tc),t,n);await jp(i,r),i.Ra=i.Ra.remove(o),i.Va.delete(e),Jp(i)}else await Ef(i.localStore,e,!1).then((()=>Kp(i,e,n))).catch(gc)}async function Hp(t,e){const n=zl(t),i=e.batch.batchId;try{const t=await function(t,e){const n=zl(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,o=r.keys();let s=yc.resolve();return o.forEach((t=>{s=s.next((()=>i.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);Bl(null!==o),e.version.compareTo(o)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=hh();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Xp(n,i,null),$p(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Zp(n,t)}catch(t){await gc(t)}}async function qp(t,e,n){const i=zl(t);try{const t=await function(t,e){const n=zl(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Bl(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Xp(i,e,n),$p(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Zp(i,t)}catch(t){await gc(t)}}function $p(t,e){(t.ga.get(e)||[]).forEach((t=>{t.resolve()})),t.ga.delete(e)}function Xp(t,e,n){const i=zl(t);let r=i.fa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.fa[i.currentUser.toKey()]=r}}function Kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.da.get(e))t.Ea.delete(i),n&&t.Ta.Sa(i,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach((e=>{t.ma.containsKey(e)||Gp(t,e)}))}function Gp(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);null!==n&&(Kf(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Jp(t))}function Yp(t,e,n){for(const i of n)i instanceof Rp?(t.ma.addReference(i.key,e),Qp(t,i)):i instanceof Dp?(Ll("SyncEngine","Document no longer in limbo: "+i.key),t.ma.removeReference(i.key,e),t.ma.containsKey(i.key)||Gp(t,i.key)):Ul()}function Qp(t,e){const n=e.key,i=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(i)||(Ll("SyncEngine","New document in limbo: "+n),t.Aa.add(i),Jp(t))}function Jp(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new lc(oc.fromString(e)),i=t.pa.next();t.Va.set(i,new Mp(n)),t.Ra=t.Ra.insert(n,i),Xf(t.remoteStore,new qd(qu(Bu(n.path)),i,"TargetPurposeLimboResolution",wc.ae))}}async function Zp(t,e,n){const i=zl(t),r=[],o=[],s=[];i.Ea.isEmpty()||(i.Ea.forEach(((t,a)=>{s.push(i.wa(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=pf.qi(a.targetId,t);o.push(e)}})))})),await Promise.all(s),i.Ta.r_(r),await async function(t,e){const n=zl(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>yc.forEach(e,(e=>yc.forEach(e.Li,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>yc.forEach(e.ki,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!vc(t))throw t;Ll("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(e,r)}}}(i.localStore,o))}async function tm(t,e){const n=zl(t);if(!n.currentUser.isEqual(e)){Ll("SyncEngine","User change. New user:",e.toKey());const t=await vf(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(i=n).ga.forEach((t=>{t.forEach((t=>{t.reject(new Vl(jl.CANCELLED,r))}))})),i.ga.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Zp(n,t.ts)}var i,r}function em(t,e){const n=zl(t),i=n.Va.get(e);if(i&&i.Ia)return hh().add(i.key);{let t=hh();const i=n.da.get(e);if(!i)return t;for(const e of i){const i=n.Ea.get(e);t=t.unionWith(i.view.ia)}return t}}function nm(t){const e=zl(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=em.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wp.bind(null,e),e.Ta.r_=Sp.bind(null,e.eventManager),e.Ta.Sa=_p.bind(null,e.eventManager),e}function im(t){const e=zl(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qp.bind(null,e),e}class rm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ff(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return yf(this.persistence,new mf,t.initialUser,this.serializer)}createPersistence(t){return new hf(ff.zr,this.serializer)}createSharedClientState(t){return new Tf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class om{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Vp(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=tm.bind(null,this.syncEngine),await gp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ip}createDatastore(t){const e=Ff(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Pf(i));var i;return function(t,e,n,i){return new Vf(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Vp(this.syncEngine,t,0),o=_f.v()?new _f:new Sf,new Hf(e,n,i,r,o);var e,n,i,r,o}createSyncEngine(t,e){return function(t,e,n,i,r,o,s){const a=new Fp(t,e,n,i,r,o);return s&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=zl(t);Ll("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await $f(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class sm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Pl("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */
/**
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
 */
class am{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Al.UNAUTHENTICATED,this.clientId=Zl.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ll("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ll("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vl(jl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function lm(t,e){t.asyncQueue.verifyOperationInProgress(),Ll("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await vf(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function cm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hm(t);Ll("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>mp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>mp(e.remoteStore,n))),t._onlineComponents=e}function um(t){return"FirebaseError"===t.name?t.code===jl.FAILED_PRECONDITION||t.code===jl.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function hm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ll("FirestoreClient","Using user provided OfflineComponentProvider");try{await lm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!um(n))throw n;Ml("Error using user provided cache. Falling back to memory cache: "+n),await lm(t,new rm)}}else Ll("FirestoreClient","Using default OfflineComponentProvider"),await lm(t,new rm);return t._offlineComponents}async function dm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ll("FirestoreClient","Using user provided OnlineComponentProvider"),await cm(t,t._uninitializedComponentsProvider._online)):(Ll("FirestoreClient","Using default OnlineComponentProvider"),await cm(t,new om))),t._onlineComponents}function fm(t){return dm(t).then((t=>t.syncEngine))}async function pm(t){const e=await dm(t),n=e.eventManager;return n.onListen=Up.bind(null,e.syncEngine),n.onUnlisten=zp.bind(null,e.syncEngine),n}function mm(t,e,n={}){const i=new Wl;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const o=new sm({next:o=>{e.enqueueAndForget((()=>Tp(t,s)));const a=o.docs.has(n);!a&&o.fromCache?r.reject(new Vl(jl.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&i&&"server"===i.source?r.reject(new Vl(jl.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(o)},error:t=>r.reject(t)}),s=new Op(Bu(n.path),o,{includeMetadataChanges:!0,W_:!0});return Np(t,s)}(await pm(t),t.asyncQueue,e,n,i))),i.promise}
/**
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
 */
function gm(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const ym=new Map;
/**
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
 */function vm(t,e,n){if(!n)throw new Vl(jl.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wm(t){if(!lc.isDocumentKey(t))throw new Vl(jl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bm(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Ul()}function xm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Vl(jl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bm(t);throw new Vl(jl.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class km{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Vl(jl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Vl(jl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Vl(jl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gm(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Vl(jl.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Vl(jl.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Vl(jl.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Em{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new km({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vl(jl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Vl(jl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new km(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ql;switch(t.type){case"firstParty":return new Gl(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Vl(jl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ym.get(t);e&&(Ll("ComponentProvider","Removing Datastore"),ym.delete(t),e.terminate())}(this),Promise.resolve()}}function Cm(t,e,n,i={}){var r;const o=(t=xm(t,Em))._getSettings(),s=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&Ml("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Al.MOCK_USER;else{e=A(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new Vl(jl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Al(o)}t._authCredentials=new $l(new Hl(e,n))}}
/**
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
 */class Im{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Im(this.firestore,t,this._query)}}class Nm{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tm(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nm(this.firestore,t,this._key)}}class Tm extends Im{constructor(t,e,n){super(t,e,Bu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nm(this.firestore,null,new lc(t))}withConverter(t){return new Tm(this.firestore,t,this._path)}}function Sm(t,e,...n){if(t=X(t),1===arguments.length&&(e=Zl.V()),vm("doc","path",e),t instanceof Em){const i=oc.fromString(e,...n);return wm(i),new Nm(t,null,new lc(i))}{if(!(t instanceof Nm||t instanceof Tm))throw new Vl(jl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(oc.fromString(e,...n));return wm(i),new Nm(t.firestore,t instanceof Tm?t.converter:null,new lc(i))}}
/**
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
 */
class _m{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Uf(this,"async_queue_retry"),this.Xa=()=>{const t=Mf();t&&Ll("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=Mf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Mf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new Wl;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!vc(t))throw t;Ll("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;throw Pl("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=wp.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(i),i}eu(){this.Ha&&Ul()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class Am extends Em{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new _m,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rm(this),this._firestoreClient.terminate()}}function Om(t){return t._firestoreClient||Rm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rm(t){var e,n,i;const r=t._freezeSettings(),o=(s=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",l=t._persistenceKey,new Hc(s,a,l,(c=r).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,gm(c.experimentalLongPollingOptions),c.useFetchStreams));var s,a,l,c;t._firestoreClient=new am(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
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
 */
class Dm{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dm(Mc.fromBase64String(t))}catch(t){throw new Vl(jl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Dm(Mc.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class Lm{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Vl(jl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ac(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class Pm{constructor(t){this._methodName=t}}
/**
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
 */class Mm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Vl(jl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Vl(jl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return tc(this._lat,t._lat)||tc(this._long,t._long)}}
/**
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
 */const Fm=/^__.*__$/;class Um{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Uh(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fh(t,this.data,e,this.fieldTransforms)}}class Bm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Uh(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function zm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ul()}}class jm{constructor(t,e,n,i,r,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new jm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.Pu(t),i}Iu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return eg(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(0===t.length)throw this.Eu("Document fields must not be empty");if(zm(this.uu)&&Fm.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Vm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ff(t)}Ru(t,e,n,i=!1){return new jm({uu:t,methodName:e,Au:n,path:ac.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wm(t){const e=t._freezeSettings(),n=Ff(t._databaseId);return new Vm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hm(t,e,n,i,r,o={}){const s=t.Ru(o.merge||o.mergeFields?2:0,e,n,r);Qm("Data must be an object, but it was:",s,i);const a=Gm(i,s);let l,c;if(o.merge)l=new Lc(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const i of o.mergeFields){const r=Jm(e,i,n);if(!s.contains(r))throw new Vl(jl.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);ng(t,r)||t.push(r)}l=new Lc(t),c=s.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=s.fieldTransforms;return new Um(new au(a),l,c)}class qm extends Pm{_toFieldTransform(t){if(2!==t.uu)throw 1===t.uu?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qm}}function $m(t,e,n,i){const r=t.Ru(1,e,n);Qm("Data must be an object, but it was:",r,i);const o=[],s=au.empty();Tc(i,((t,i)=>{const a=tg(e,t,n);i=X(i);const l=r.Iu(a);if(i instanceof qm)o.push(a);else{const t=Km(i,l);null!=t&&(o.push(a),s.set(a,t))}}));const a=new Lc(o);return new Bm(s,a,r.fieldTransforms)}function Xm(t,e,n,i,r,o){const s=t.Ru(1,e,n),a=[Jm(e,i,n)],l=[r];if(o.length%2!=0)throw new Vl(jl.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<o.length;t+=2)a.push(Jm(e,o[t])),l.push(o[t+1]);const c=[],u=au.empty();for(let t=a.length-1;t>=0;--t)if(!ng(c,a[t])){const e=a[t];let n=l[t];n=X(n);const i=s.Iu(e);if(n instanceof qm)c.push(e);else{const t=Km(n,i);null!=t&&(c.push(e),u.set(e,t))}}const h=new Lc(c);return new Bm(u,h,s.fieldTransforms)}function Km(t,e){if(Ym(t=X(t)))return Qm("Unsupported field value:",e,t),Gm(t,e);if(t instanceof Pm)return function(t,e){if(!zm(e.uu))throw e.Eu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Eu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&4!==e.uu)throw e.Eu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Km(r,e.Tu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=X(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return gh(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=nc.fromDate(t);return{timestampValue:bd(e.serializer,n)}}if(t instanceof nc){const n=new nc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:bd(e.serializer,n)}}if(t instanceof Mm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Dm)return{bytesValue:xd(e.serializer,t._byteString)};if(t instanceof Nm){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Eu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Cd(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Eu(`Unsupported field value: ${bm(t)}`)}(t,e)}function Gm(t,e){const n={};return Sc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tc(t,((t,i)=>{const r=Km(i,e.lu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Ym(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof nc||t instanceof Mm||t instanceof Dm||t instanceof Nm||t instanceof Pm)}function Qm(t,e,n){if(!Ym(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=bm(n);throw"an object"===i?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}var i}function Jm(t,e,n){if((e=X(e))instanceof Lm)return e._internalPath;if("string"==typeof e)return tg(t,e);throw eg("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zm=new RegExp("[~\\*/\\[\\]]");function tg(t,e,n){if(e.search(Zm)>=0)throw eg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lm(...e.split("."))._internalPath}catch(i){throw eg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eg(t,e,n,i,r){const o=i&&!i.isEmpty(),s=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${i}`),s&&(l+=` in document ${r}`),l+=")"),new Vl(jl.INVALID_ARGUMENT,a+t+l)}function ng(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class ig{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Nm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new rg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(og("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class rg extends ig{data(){return super.data()}}function og(t,e){return"string"==typeof e?tg(t,e):e instanceof Lm?e._internalPath:e._delegate._internalPath}
/**
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
 */class sg{convertValue(t,e="none"){switch(Xc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Bc(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(zc(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ul()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Tc(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Mm(Bc(t.latitude),Bc(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Vc(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Wc(t));default:return null}}convertTimestamp(t){const e=Uc(t);return new nc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=oc.fromString(t);Bl(Hd(n));const i=new qc(n.get(1),n.get(3)),r=new lc(n.popFirst(5));return i.isEqual(e)||Pl(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
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
 */function ag(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
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
 */
class lg{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cg extends ig{constructor(t,e,n,i,r,o){super(t,e,n,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ug(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(og("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ug extends cg{data(t={}){return super.data(t)}}
/**
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
 */
function hg(t){t=xm(t,Nm);const e=xm(t.firestore,Am);return mm(Om(e),t._key).then((n=>gg(e,t,n)))}class dg extends sg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nm(this.firestore,null,e)}}function fg(t,e,n){t=xm(t,Nm);const i=xm(t.firestore,Am),r=ag(t.converter,e,n);return mg(i,[Hm(Wm(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,_h.none())])}function pg(t,e,n,...i){t=xm(t,Nm);const r=xm(t.firestore,Am),o=Wm(r);let s;return s="string"==typeof(e=X(e))||e instanceof Lm?Xm(o,"updateDoc",t._key,e,n,i):$m(o,"updateDoc",t._key,e),mg(r,[s.toMutation(t._key,_h.exists(!0))])}function mg(t,e){return function(t,e){const n=new Wl;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=im(t);try{const t=await function(t,e){const n=zl(t),i=nc.now(),r=e.reduce(((t,e)=>t.add(e.key)),hh());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=nh(),l=hh();return n.Xi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{o=r;const s=[];for(const t of e){const e=Ph(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new Uh(t.key,e,lu(e.value.mapValue),_h.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,s,e)})).next((e=>{s=e;const i=e.applyToLocalDocumentSet(o,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:s.batchId,changes:oh(o)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.fa[t.currentUser.toKey()];i||(i=new _c(tc)),i=i.insert(e,n),t.fa[t.currentUser.toKey()]=i}(i,t.batchId,n),await Zp(i,t.changes),await sp(i.remoteStore)}catch(t){const e=bp(t,"Failed to persist write");n.reject(e)}}(await fm(t),e,n))),n.promise}(Om(t),e)}function gg(t,e,n){const i=n.docs.get(e._key),r=new dg(t);return new cg(t,r,e._key,i,new lg(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */!function(t,e=!0){Ol=Ft,Dt(new K("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Am(new Xl(t.getProvider("auth-internal")),new Ql(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Vl(jl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qc(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),zt(_l,"4.1.0",t),zt(_l,"4.1.0","esm2017")}();var yg,vg,wg={};yg=void 0!==o?o:"undefined"!=typeof window?window:wg,vg=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",r="Warning",o="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=c(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!l("body"))return!1;e||f.Notify.init({});var m=c(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),e=c(!0,e,g)}var y,v,w=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(v=t.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(b.id=s.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(s.overlayID)||t.document.createElement("div");x.id=s.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=w.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(b);var k=t.document.createElement("div");k.id=e.ID+"-"+h,k.className=e.className+" "+w.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=w.textColor,k.style.background=w.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var E="";if(e.closeButton&&"function"!=typeof d&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?E:"");else{var C="";a===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===o&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=C+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?E:"")}else k.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?E:"");if("left-bottom"===e.position||"right-bottom"===e.position){var I=t.document.getElementById(s.wrapID);I.insertBefore(k,I.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var N=t.document.getElementById(k.id);if(N){var T,S,_=function(){N.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(T)},A=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){_();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&N.addEventListener("click",(function(){"function"==typeof d&&d(),_();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var O=function(){T=setTimeout((function(){_()}),e.timeout),S=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};O(),e.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(T),clearTimeout(S)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),O()})))}}if(e.showOnlyTheLastOne&&h>0)for(var R=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),D=0;D<R.length;D++){var L=R[D];null!==L.parentNode&&L.parentNode.removeChild(L)}e=c(!0,e,m)},f={Notify:{init:function(n){e=c(!0,s,n),function(e,n){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){d(n,t,e,i)},failure:function(t,e,n){d(i,t,e,n)},warning:function(t,e,n){d(r,t,e,n)},info:function(t,e,n){d(o,t,e,n)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return vg(yg)})):"object"==typeof wg?wg=vg(yg):yg.Notiflix=vg(yg);const bg=Ut({apiKey:"AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME",authDomain:"read-easy-a785a.firebaseapp.com",projectId:"read-easy-a785a",storageBucket:"read-easy-a785a.appspot.com",messagingSenderId:"672240774710",appId:"1:672240774710:web:1093f9e83dded932d97297",measurementId:"G-PFEBLXEB67"}),xg=function(t,e){const n="string"==typeof t?t:e||"(default)",i=Lt("object"==typeof t?t:Bt(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=N("firestore");t&&Cm(i,...t)}return i}(bg);ar(bg);const kg=()=>null!==ar(bg).currentUser;function Eg(t,e){return function(){return t.apply(e,arguments)}}e={createAccount:async(t,e,n)=>{try{let i=await Vn(ar(bg),t,e);try{return await fg(Sm(xg,"users",i.user.uid),{name:n,shoppingList:[]}),ar(bg).currentUser}catch(t){return void wg.Notify.failure(`Wrong set userName "${t.message}"`)}}catch(t){return void wg.Notify.failure(`Wrong registration "${t.message}"`)}},signInApp:async(t,e)=>{localStorage.removeItem("account");try{return await Wn(ar(bg),t,e),ar(bg).currentUser}catch(t){return void wg.Notify.failure(`Wrong authorization "${t.message}"`)}},isSignIn:kg,signOutApp:()=>{X(ar(bg)).signOut()},removeAccount:async()=>{var t;if(kg())try{const e=ar().currentUser;await(t=Sm(xg,"users",e.uid),mg(xm(t.firestore,Am),[new Vh(t._key,_h.none())])),await Hn(e)}catch(t){wg.Notify.failure(`Wrong remove "${t.message}"`)}else wg.Notify.failure("The user is not authorized")},getUserShoppingList:async()=>{if(kg())try{const t=Sm(xg,"users",ar(bg).currentUser.uid);return(await hg(t)).data().shoppingList}catch(t){return void wg.Notify.failure(`Wrong get user's ShoppingList "${t.message}"`)}else wg.Notify.failure("The user is not authorized")},updateUserShoppingList:async t=>{if(!kg())return wg.Notify.failure("The user is not authorized"),!1;try{const e=Sm(xg,"users",ar(bg).currentUser.uid);return result=await pg(e,{shoppingList:t}),!0}catch(t){return wg.Notify.failure(`Wrong update "${t.message}"`),!1}},getUserName:async()=>{if(kg())try{const t=Sm(xg,"users",ar(bg).currentUser.uid);return(await hg(t)).data().name}catch(t){return void wg.Notify.failure(`Wrong get user's name "${t.message}"`)}else wg.Notify.failure("The user is not authorized")},getUserEmail:()=>{if(kg())return ar(bg).currentUser.email;wg.Notify.failure("The user is not authorized")},returnAuth:()=>ar(bg)};const{toString:Cg}=Object.prototype,{getPrototypeOf:Ig}=Object,Ng=(Tg=Object.create(null),t=>{const e=Cg.call(t);return Tg[e]||(Tg[e]=e.slice(8,-1).toLowerCase())});var Tg;const Sg=t=>(t=t.toLowerCase(),e=>Ng(e)===t),_g=t=>e=>typeof e===t,{isArray:Ag}=Array,Og=_g("undefined");const Rg=Sg("ArrayBuffer");const Dg=_g("string"),Lg=_g("function"),Pg=_g("number"),Mg=t=>null!==t&&"object"==typeof t,Fg=t=>{if("object"!==Ng(t))return!1;const e=Ig(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},Ug=Sg("Date"),Bg=Sg("File"),zg=Sg("Blob"),jg=Sg("FileList"),Vg=Sg("URLSearchParams");function Wg(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),Ag(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let s;for(i=0;i<o;i++)s=r[i],e.call(null,t[s],s,t)}}function Hg(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const qg="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:o,$g=t=>!Og(t)&&t!==qg;const Xg=(Kg="undefined"!=typeof Uint8Array&&Ig(Uint8Array),t=>Kg&&t instanceof Kg);var Kg;const Gg=Sg("HTMLFormElement"),Yg=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Qg=Sg("RegExp"),Jg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Wg(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},Zg="abcdefghijklmnopqrstuvwxyz",ty="0123456789",ey={DIGIT:ty,ALPHA:Zg,ALPHA_DIGIT:Zg+Zg.toUpperCase()+ty};const ny=Sg("AsyncFunction");var iy={isArray:Ag,isArrayBuffer:Rg,isBuffer:function(t){return null!==t&&!Og(t)&&null!==t.constructor&&!Og(t.constructor)&&Lg(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||Lg(t.append)&&("formdata"===(e=Ng(t))||"object"===e&&Lg(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&Rg(t.buffer),e},isString:Dg,isNumber:Pg,isBoolean:t=>!0===t||!1===t,isObject:Mg,isPlainObject:Fg,isUndefined:Og,isDate:Ug,isFile:Bg,isBlob:zg,isRegExp:Qg,isFunction:Lg,isStream:t=>Mg(t)&&Lg(t.pipe),isURLSearchParams:Vg,isTypedArray:Xg,isFileList:jg,forEach:Wg,merge:function t(){const{caseless:e}=$g(this)&&this||{},n={},i=(i,r)=>{const o=e&&Hg(n,r)||r;Fg(n[o])&&Fg(i)?n[o]=t(n[o],i):Fg(i)?n[o]=t({},i):Ag(i)?n[o]=i.slice():n[o]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&Wg(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(Wg(e,((e,i)=>{n&&Lg(e)?t[i]=Eg(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,o,s;const a={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),o=r.length;o-- >0;)s=r[o],i&&!i(s,t,e)||a[s]||(e[s]=t[s],a[s]=!0);t=!1!==n&&Ig(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:Ng,kindOfTest:Sg,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(Ag(t))return t;let e=t.length;if(!Pg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:Gg,hasOwnProperty:Yg,hasOwnProp:Yg,reduceDescriptors:Jg,freezeMethods:t=>{Jg(t,((e,n)=>{if(Lg(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];Lg(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return Ag(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:Hg,global:qg,isContextDefined:$g,ALPHABET:ey,generateString:(t=16,e=ey.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&Lg(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(Mg(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=Ag(t)?[]:{};return Wg(t,((t,e)=>{const o=n(t,i+1);!Og(o)&&(r[e]=o)})),e[i]=void 0,r}}return t};return n(t,0)},isAsyncFn:ny,isThenable:t=>t&&(Mg(t)||Lg(t))&&Lg(t.then)&&Lg(t.catch)};function ry(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}iy.inherits(ry,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:iy.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const oy=ry.prototype,sy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{sy[t]={value:t}})),Object.defineProperties(ry,sy),Object.defineProperty(oy,"isAxiosError",{value:!0}),ry.from=(t,e,n,i,r,o)=>{const s=Object.create(oy);return iy.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),ry.call(s,t.message,e,n,i,r),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};var ay,ly,cy,uy=ry;ly=function(t){var e,n,i=vy(t),r=i[0],o=i[1],s=new my(function(t,e,n){return 3*(e+n)/4-n}(0,r,o)),a=0,l=o>0?r-4:r;for(n=0;n<l;n+=4)e=py[t.charCodeAt(n)]<<18|py[t.charCodeAt(n+1)]<<12|py[t.charCodeAt(n+2)]<<6|py[t.charCodeAt(n+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;2===o&&(e=py[t.charCodeAt(n)]<<2|py[t.charCodeAt(n+1)]>>4,s[a++]=255&e);1===o&&(e=py[t.charCodeAt(n)]<<10|py[t.charCodeAt(n+1)]<<4|py[t.charCodeAt(n+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e);return s},cy=function(t){for(var e,n=t.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(wy(t,s,s+o>a?a:s+o));1===i?(e=t[n-1],r.push(fy[e>>2]+fy[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(fy[e>>10]+fy[e>>4&63]+fy[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var hy,dy,fy=[],py=[],my="undefined"!=typeof Uint8Array?Uint8Array:Array,gy="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",yy=0;yy<64;++yy)fy[yy]=gy[yy],py[gy.charCodeAt(yy)]=yy;function vy(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function wy(t,e,n){for(var i,r,o=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),o.push(fy[(r=i)>>18&63]+fy[r>>12&63]+fy[r>>6&63]+fy[63&r]);return o.join("")}py["-".charCodeAt(0)]=62,py["_".charCodeAt(0)]=63,hy=function(t,e,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=t[e+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+t[e+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+t[e+h],h+=d,u-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=c}return(f?-1:1)*s*Math.pow(2,o-i)},dy=function(t,e,n,i,r,o){var s,a,l,c=8*o-r-1,u=(1<<c)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(e*l-1)*Math.pow(2,r),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;t[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;t[n+f]=255&s,f+=p,s/=256,c-=8);t[n+f-p]|=128*m};const by="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;ay=Ey;const xy=2147483647;function ky(t){if(t>xy)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Ey.prototype),e}function Ey(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return Ny(t)}return Cy(t,e,n)}function Cy(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Ey.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|Ay(t,e);let i=ky(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(uv(t,Uint8Array)){const e=new Uint8Array(t);return Sy(e.buffer,e.byteOffset,e.byteLength)}return Ty(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(uv(t,ArrayBuffer)||t&&uv(t.buffer,ArrayBuffer))return Sy(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(uv(t,SharedArrayBuffer)||t&&uv(t.buffer,SharedArrayBuffer)))return Sy(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return Ey.from(i,e,n);const r=function(t){if(Ey.isBuffer(t)){const e=0|_y(t.length),n=ky(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||hv(t.length)?ky(0):Ty(t);if("Buffer"===t.type&&Array.isArray(t.data))return Ty(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Ey.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function Iy(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Ny(t){return Iy(t),ky(t<0?0:0|_y(t))}function Ty(t){const e=t.length<0?0:0|_y(t.length),n=ky(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function Sy(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,Ey.prototype),i}function _y(t){if(t>=xy)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+xy.toString(16)+" bytes");return 0|t}function Ay(t,e){if(Ey.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||uv(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return av(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return lv(t).length;default:if(r)return i?-1:av(t).length;e=(""+e).toLowerCase(),r=!0}}function Oy(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return qy(this,e,n);case"utf8":case"utf-8":return jy(this,e,n);case"ascii":return Wy(this,e,n);case"latin1":case"binary":return Hy(this,e,n);case"base64":return zy(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $y(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function Ry(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function Dy(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),hv(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=Ey.from(e,i)),Ey.isBuffer(e))return 0===e.length?-1:Ly(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):Ly(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function Ly(t,e,n,i,r){let o,s=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(r){let i=-1;for(o=n;o<a;o++)if(c(t,o)===c(e,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){let n=!0;for(let i=0;i<l;i++)if(c(t,o+i)!==c(e,i)){n=!1;break}if(n)return o}return-1}function Py(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=e.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(e.substr(2*s,2),16);if(hv(i))return s;t[n+s]=i}return s}function My(t,e,n,i){return cv(av(e,t.length-n),t,n,i)}function Fy(t,e,n,i){return cv(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function Uy(t,e,n,i){return cv(lv(e),t,n,i)}function By(t,e,n,i){return cv(function(t,e){let n,i,r;const o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(e,t.length-n),t,n,i)}function zy(t,e,n){return 0===e&&n===t.length?cy(t):cy(t.slice(e,n))}function jy(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let o=null,s=e>239?4:e>223?3:e>191?2:1;if(r+s<=n){let n,i,a,l;switch(s){case 1:e<128&&(o=e);break;case 2:n=t[r+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(o=l));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(l=(15&e)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(t){const e=t.length;if(e<=Vy)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=Vy));return n}(i)}Ey.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Ey.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Ey.prototype,"parent",{enumerable:!0,get:function(){if(Ey.isBuffer(this))return this.buffer}}),Object.defineProperty(Ey.prototype,"offset",{enumerable:!0,get:function(){if(Ey.isBuffer(this))return this.byteOffset}}),Ey.poolSize=8192,Ey.from=function(t,e,n){return Cy(t,e,n)},Object.setPrototypeOf(Ey.prototype,Uint8Array.prototype),Object.setPrototypeOf(Ey,Uint8Array),Ey.alloc=function(t,e,n){return function(t,e,n){return Iy(t),t<=0?ky(t):void 0!==e?"string"==typeof n?ky(t).fill(e,n):ky(t).fill(e):ky(t)}(t,e,n)},Ey.allocUnsafe=function(t){return Ny(t)},Ey.allocUnsafeSlow=function(t){return Ny(t)},Ey.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Ey.prototype},Ey.compare=function(t,e){if(uv(t,Uint8Array)&&(t=Ey.from(t,t.offset,t.byteLength)),uv(e,Uint8Array)&&(e=Ey.from(e,e.offset,e.byteLength)),!Ey.isBuffer(t)||!Ey.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},Ey.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Ey.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Ey.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=Ey.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(uv(e,Uint8Array))r+e.length>i.length?(Ey.isBuffer(e)||(e=Ey.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!Ey.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},Ey.byteLength=Ay,Ey.prototype._isBuffer=!0,Ey.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)Ry(this,e,e+1);return this},Ey.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)Ry(this,e,e+3),Ry(this,e+1,e+2);return this},Ey.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)Ry(this,e,e+7),Ry(this,e+1,e+6),Ry(this,e+2,e+5),Ry(this,e+3,e+4);return this},Ey.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?jy(this,0,t):Oy.apply(this,arguments)},Ey.prototype.toLocaleString=Ey.prototype.toString,Ey.prototype.equals=function(t){if(!Ey.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Ey.compare(this,t)},Ey.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},by&&(Ey.prototype[by]=Ey.prototype.inspect),Ey.prototype.compare=function(t,e,n,i,r){if(uv(t,Uint8Array)&&(t=Ey.from(t,t.offset,t.byteLength)),!Ey.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(e>>>=0);const a=Math.min(o,s),l=this.slice(i,r),c=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==c[t]){o=l[t],s=c[t];break}return o<s?-1:s<o?1:0},Ey.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Ey.prototype.indexOf=function(t,e,n){return Dy(this,t,e,n,!0)},Ey.prototype.lastIndexOf=function(t,e,n){return Dy(this,t,e,n,!1)},Ey.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Py(this,t,e,n);case"utf8":case"utf-8":return My(this,t,e,n);case"ascii":case"latin1":case"binary":return Fy(this,t,e,n);case"base64":return Uy(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return By(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},Ey.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Vy=4096;function Wy(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function Hy(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function qy(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=dv[t[i]];return r}function $y(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function Xy(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Ky(t,e,n,i,r,o){if(!Ey.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<o)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function Gy(t,e,n,i,r){iv(e,i,r,t,n,7);let o=Number(e&BigInt(4294967295));t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function Yy(t,e,n,i,r){iv(e,i,r,t,n,7);let o=Number(e&BigInt(4294967295));t[n+7]=o,o>>=8,t[n+6]=o,o>>=8,t[n+5]=o,o>>=8,t[n+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function Qy(t,e,n,i,r,o){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Jy(t,e,n,i,r){return e=+e,n>>>=0,r||Qy(t,0,n,4),dy(t,e,n,i,23,4),n+4}function Zy(t,e,n,i,r){return e=+e,n>>>=0,r||Qy(t,0,n,8),dy(t,e,n,i,52,8),n+8}Ey.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,Ey.prototype),i},Ey.prototype.readUintLE=Ey.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Xy(t,e,this.length);let i=this[t],r=1,o=0;for(;++o<e&&(r*=256);)i+=this[t+o]*r;return i},Ey.prototype.readUintBE=Ey.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Xy(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},Ey.prototype.readUint8=Ey.prototype.readUInt8=function(t,e){return t>>>=0,e||Xy(t,1,this.length),this[t]},Ey.prototype.readUint16LE=Ey.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Xy(t,2,this.length),this[t]|this[t+1]<<8},Ey.prototype.readUint16BE=Ey.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Xy(t,2,this.length),this[t]<<8|this[t+1]},Ey.prototype.readUint32LE=Ey.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Xy(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Ey.prototype.readUint32BE=Ey.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Xy(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Ey.prototype.readBigUInt64LE=fv((function(t){rv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||ov(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Ey.prototype.readBigUInt64BE=fv((function(t){rv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||ov(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Ey.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Xy(t,e,this.length);let i=this[t],r=1,o=0;for(;++o<e&&(r*=256);)i+=this[t+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},Ey.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Xy(t,e,this.length);let i=e,r=1,o=this[t+--i];for(;i>0&&(r*=256);)o+=this[t+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*e)),o},Ey.prototype.readInt8=function(t,e){return t>>>=0,e||Xy(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Ey.prototype.readInt16LE=function(t,e){t>>>=0,e||Xy(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Ey.prototype.readInt16BE=function(t,e){t>>>=0,e||Xy(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Ey.prototype.readInt32LE=function(t,e){return t>>>=0,e||Xy(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Ey.prototype.readInt32BE=function(t,e){return t>>>=0,e||Xy(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Ey.prototype.readBigInt64LE=fv((function(t){rv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||ov(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Ey.prototype.readBigInt64BE=fv((function(t){rv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||ov(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Ey.prototype.readFloatLE=function(t,e){return t>>>=0,e||Xy(t,4,this.length),hy(this,t,!0,23,4)},Ey.prototype.readFloatBE=function(t,e){return t>>>=0,e||Xy(t,4,this.length),hy(this,t,!1,23,4)},Ey.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Xy(t,8,this.length),hy(this,t,!0,52,8)},Ey.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Xy(t,8,this.length),hy(this,t,!1,52,8)},Ey.prototype.writeUintLE=Ey.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Ky(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[e]=255&t;++o<n&&(r*=256);)this[e+o]=t/r&255;return e+n},Ey.prototype.writeUintBE=Ey.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Ky(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[e+r]=255&t;--r>=0&&(o*=256);)this[e+r]=t/o&255;return e+n},Ey.prototype.writeUint8=Ey.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,1,255,0),this[e]=255&t,e+1},Ey.prototype.writeUint16LE=Ey.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Ey.prototype.writeUint16BE=Ey.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Ey.prototype.writeUint32LE=Ey.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Ey.prototype.writeUint32BE=Ey.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Ey.prototype.writeBigUInt64LE=fv((function(t,e=0){return Gy(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Ey.prototype.writeBigUInt64BE=fv((function(t,e=0){return Yy(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Ey.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Ky(this,t,e,n,i-1,-i)}let r=0,o=1,s=0;for(this[e]=255&t;++r<n&&(o*=256);)t<0&&0===s&&0!==this[e+r-1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+n},Ey.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Ky(this,t,e,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[e+r]=255&t;--r>=0&&(o*=256);)t<0&&0===s&&0!==this[e+r+1]&&(s=1),this[e+r]=(t/o>>0)-s&255;return e+n},Ey.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Ey.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Ey.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Ey.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Ey.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Ky(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Ey.prototype.writeBigInt64LE=fv((function(t,e=0){return Gy(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ey.prototype.writeBigInt64BE=fv((function(t,e=0){return Yy(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ey.prototype.writeFloatLE=function(t,e,n){return Jy(this,t,e,!0,n)},Ey.prototype.writeFloatBE=function(t,e,n){return Jy(this,t,e,!1,n)},Ey.prototype.writeDoubleLE=function(t,e,n){return Zy(this,t,e,!0,n)},Ey.prototype.writeDoubleBE=function(t,e,n){return Zy(this,t,e,!1,n)},Ey.prototype.copy=function(t,e,n,i){if(!Ey.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},Ey.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Ey.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const o=Ey.isBuffer(t)?t:Ey.from(t,i),s=o.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=o[r%s]}return this};const tv={};function ev(t,e,n){tv[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function nv(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function iv(t,e,n,i,r,o){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new tv.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){rv(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||ov(e,t.length-(n+1))}(i,r,o)}function rv(t,e){if("number"!=typeof t)throw new tv.ERR_INVALID_ARG_TYPE(e,"number",t)}function ov(t,e,n){if(Math.floor(t)!==t)throw rv(t,n),new tv.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new tv.ERR_BUFFER_OUT_OF_BOUNDS;throw new tv.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}ev("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),ev("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),ev("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=nv(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=nv(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const sv=/[^+/0-9A-Za-z-_]/g;function av(t,e){let n;e=e||1/0;const i=t.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(e-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function lv(t){return ly(function(t){if((t=(t=t.split("=")[0]).trim().replace(sv,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function cv(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function uv(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function hv(t){return t!=t}const dv=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function fv(t){return"undefined"==typeof BigInt?pv:t}function pv(){throw new Error("BigInt not supported")}var mv=ay;function gv(t){return iy.isPlainObject(t)||iy.isArray(t)}function yv(t){return iy.endsWith(t,"[]")?t.slice(0,-2):t}function vv(t,e,n){return t?t.concat(e).map((function(t,e){return t=yv(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const wv=iy.toFlatObject(iy,{},null,(function(t){return/^is[A-Z]/.test(t)}));var bv=function(t,e,n){if(!iy.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=iy.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!iy.isUndefined(e[t])}))).metaTokens,r=n.visitor||c,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&iy.isSpecCompliantForm(e);if(!iy.isFunction(r))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(iy.isDate(t))return t.toISOString();if(!a&&iy.isBlob(t))throw new uy("Blob is not supported. Use a Buffer instead.");return iy.isArrayBuffer(t)||iy.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):mv.from(t):t}function c(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(iy.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(iy.isArray(t)&&function(t){return iy.isArray(t)&&!t.some(gv)}(t)||(iy.isFileList(t)||iy.endsWith(n,"[]"))&&(a=iy.toArray(t)))return n=yv(n),a.forEach((function(t,i){!iy.isUndefined(t)&&null!==t&&e.append(!0===s?vv([n],i,o):null===s?n:n+"[]",l(t))})),!1;return!!gv(t)||(e.append(vv(r,n,o),l(t)),!1)}const u=[],h=Object.assign(wv,{defaultVisitor:c,convertValue:l,isVisitable:gv});if(!iy.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!iy.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),iy.forEach(n,(function(n,o){!0===(!(iy.isUndefined(n)||null===n)&&r.call(e,n,iy.isString(o)?o.trim():o,i,h))&&t(n,i?i.concat(o):[o])})),u.pop()}}(t),e};function xv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function kv(t,e){this._pairs=[],t&&bv(t,this,e)}const Ev=kv.prototype;Ev.append=function(t,e){this._pairs.push([t,e])},Ev.toString=function(t){const e=t?function(e){return t.call(this,e,xv)}:xv;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Cv=kv;function Iv(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Nv(t,e,n){if(!e)return t;const i=n&&n.encode||Iv,r=n&&n.serialize;let o;if(o=r?r(e,n):iy.isURLSearchParams(e)?e.toString():new Cv(e,n).toString(i),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}var Tv=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){iy.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},Sv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var _v={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Cv,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function Av(t,e){return bv(t,new _v.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return _v.isNode&&iy.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var Ov=function(t){function e(t,n,i,r){let o=t[r++];const s=Number.isFinite(+o),a=r>=t.length;if(o=!o&&iy.isArray(i)?i.length:o,a)return iy.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&iy.isObject(i[o])||(i[o]=[]);return e(t,n,i[o],r)&&iy.isArray(i[o])&&(i[o]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],e[o]=t[o];return e}(i[o])),!s}if(iy.isFormData(t)&&iy.isFunction(t.entries)){const n={};return iy.forEachEntry(t,((t,i)=>{e(function(t){return iy.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const Rv={"Content-Type":void 0};const Dv={transitional:Sv,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=iy.isObject(t);r&&iy.isHTMLForm(t)&&(t=new FormData(t));if(iy.isFormData(t))return i&&i?JSON.stringify(Ov(t)):t;if(iy.isArrayBuffer(t)||iy.isBuffer(t)||iy.isStream(t)||iy.isFile(t)||iy.isBlob(t))return t;if(iy.isArrayBufferView(t))return t.buffer;if(iy.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Av(t,this.formSerializer).toString();if((o=iy.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return bv(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(iy.isString(t))try{return(e||JSON.parse)(t),iy.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Dv.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&iy.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw uy.from(t,uy.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_v.classes.FormData,Blob:_v.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};iy.forEach(["delete","get","head"],(function(t){Dv.headers[t]={}})),iy.forEach(["post","put","patch"],(function(t){Dv.headers[t]=iy.merge(Rv)}));var Lv=Dv;const Pv=iy.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Mv=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&Pv[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const Fv=Symbol("internals");function Uv(t){return t&&String(t).trim().toLowerCase()}function Bv(t){return!1===t||null==t?t:iy.isArray(t)?t.map(Bv):String(t)}function zv(t,e,n,i,r){return iy.isFunction(i)?i.call(this,e,n):(r&&(e=n),iy.isString(e)?iy.isString(i)?-1!==e.indexOf(i):iy.isRegExp(i)?i.test(e):void 0:void 0)}class jv{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(t,e,n){const r=Uv(e);if(!r)throw new Error("header name must be a non-empty string");const o=iy.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||e]=Bv(t))}const o=(t,e)=>iy.forEach(t,((t,n)=>r(t,n,e)));return iy.isPlainObject(t)||t instanceof this.constructor?o(t,e):iy.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?o(Mv(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=Uv(t)){const n=iy.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(iy.isFunction(e))return e.call(this,t,n);if(iy.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Uv(t)){const n=iy.findKey(this,t);return!(!n||void 0===this[n]||e&&!zv(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=Uv(t)){const r=iy.findKey(n,t);!r||e&&!zv(0,n[r],r,e)||(delete n[r],i=!0)}}return iy.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!zv(0,this[r],r,t,!0)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return iy.forEach(this,((i,r)=>{const o=iy.findKey(n,r);if(o)return e[o]=Bv(i),void delete e[r];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete e[r],e[s]=Bv(i),n[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return iy.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&iy.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[Fv]=this[Fv]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=Uv(t);e[i]||(!function(t,e){const n=iy.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return iy.isArray(t)?t.forEach(i):i(t),this}}jv.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),iy.freezeMethods(jv.prototype),iy.freezeMethods(jv);var Vv=jv;function Wv(t,e){const n=this||Lv,i=e||n,r=Vv.from(i.headers);let o=i.data;return iy.forEach(t,(function(t){o=t.call(n,o,r.normalize(),e?e.status:void 0)})),r.normalize(),o}function Hv(t){return!(!t||!t.__CANCEL__)}function qv(t,e,n){uy.call(this,null==t?"canceled":t,uy.ERR_CANCELED,e,n),this.name="CanceledError"}iy.inherits(qv,uy,{__CANCEL__:!0});var $v=qv;function Xv(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new uy("Request failed with status code "+n.status,[uy.ERR_BAD_REQUEST,uy.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Kv=_v.isStandardBrowserEnv?{write:function(t,e,n,i,r,o){const s=[];s.push(t+"="+encodeURIComponent(e)),iy.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),iy.isString(i)&&s.push("path="+i),iy.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Gv(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Yv(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Gv(t,e):e}var Qv=_v.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=iy.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Jv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Zv=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,o=0,s=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=i[s];r||(r=l),n[o]=a,i[o]=l;let u=s,h=0;for(;u!==o;)h+=n[u++],u%=t;if(o=(o+1)%t,o===s&&(s=(s+1)%t),l-r<e)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function tw(t,e){let n=0;const i=Zv(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,l=i(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&o<=s?(s-o)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const ew={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=Vv.from(t.headers).normalize(),o=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}iy.isFormData(i)&&(_v.isStandardBrowserEnv||_v.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const c=Yv(t.baseURL,t.url);function u(){if(!l)return;const i=Vv.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Xv((function(t){e(t),a()}),(function(t){n(t),a()}),{data:o&&"text"!==o&&"json"!==o?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),Nv(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new uy("Request aborted",uy.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new uy("Network Error",uy.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||Sv;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new uy(e,i.clarifyTimeoutError?uy.ETIMEDOUT:uy.ECONNABORTED,t,l)),l=null},_v.isStandardBrowserEnv){const e=(t.withCredentials||Qv(c))&&t.xsrfCookieName&&Kv.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&iy.forEach(r.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),iy.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&"json"!==o&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",tw(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",tw(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{l&&(n(!e||e.type?new $v(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const h=Jv(c);h&&-1===_v.protocols.indexOf(h)?n(new uy("Unsupported protocol "+h+":",uy.ERR_BAD_REQUEST,t)):l.send(i||null)}))}};iy.forEach(ew,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var nw={getAdapter:t=>{t=iy.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=iy.isString(n)?ew[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new uy(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(iy.hasOwnProp(ew,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!iy.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:ew};function iw(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new $v(null,t)}function rw(t){iw(t),t.headers=Vv.from(t.headers),t.data=Wv.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return nw.getAdapter(t.adapter||Lv.adapter)(t).then((function(e){return iw(t),e.data=Wv.call(t,t.transformResponse,e),e.headers=Vv.from(e.headers),e}),(function(e){return Hv(e)||(iw(t),e&&e.response&&(e.response.data=Wv.call(t,t.transformResponse,e.response),e.response.headers=Vv.from(e.response.headers))),Promise.reject(e)}))}const ow=t=>t instanceof Vv?t.toJSON():t;function sw(t,e){e=e||{};const n={};function i(t,e,n){return iy.isPlainObject(t)&&iy.isPlainObject(e)?iy.merge.call({caseless:n},t,e):iy.isPlainObject(e)?iy.merge({},e):iy.isArray(e)?e.slice():e}function r(t,e,n){return iy.isUndefined(e)?iy.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function o(t,e){if(!iy.isUndefined(e))return i(void 0,e)}function s(t,e){return iy.isUndefined(e)?iy.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,o){return o in e?i(n,r):o in t?i(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>r(ow(t),ow(e),!0)};return iy.forEach(Object.keys(Object.assign({},t,e)),(function(i){const o=l[i]||r,s=o(t[i],e[i],i);iy.isUndefined(s)&&o!==a||(n[i]=s)})),n}const aw="1.4.0",lw={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{lw[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const cw={};lw.transitional=function(t,e,n){function i(t,e){return"[Axios v1.4.0] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,o)=>{if(!1===t)throw new uy(i(r," has been removed"+(e?" in "+e:"")),uy.ERR_DEPRECATED);return e&&!cw[r]&&(cw[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,o)}};var uw={assertOptions:function(t,e,n){if("object"!=typeof t)throw new uy("options must be an object",uy.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const o=i[r],s=e[o];if(s){const e=t[o],n=void 0===e||s(e,o,t);if(!0!==n)throw new uy("option "+o+" must be "+n,uy.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new uy("Unknown option "+o,uy.ERR_BAD_OPTION)}},validators:lw};const hw=uw.validators;class dw{constructor(t){this.defaults=t,this.interceptors={request:new Tv,response:new Tv}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=sw(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let o;void 0!==n&&uw.assertOptions(n,{silentJSONParsing:hw.transitional(hw.boolean),forcedJSONParsing:hw.transitional(hw.boolean),clarifyTimeoutError:hw.transitional(hw.boolean)},!1),null!=i&&(iy.isFunction(i)?e.paramsSerializer={serialize:i}:uw.assertOptions(i,{encode:hw.function,serialize:hw.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),o=r&&iy.merge(r.common,r[e.method]),o&&iy.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=Vv.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[rw.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,l),u=t.length,c=Promise.resolve(e);h<u;)c=c.then(t[h++],t[h++]);return c}u=s.length;let d=e;for(h=0;h<u;){const t=s[h++],e=s[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{c=rw.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(t){return Nv(Yv((t=sw(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}iy.forEach(["delete","get","head","options"],(function(t){dw.prototype[t]=function(e,n){return this.request(sw(n||{},{method:t,url:e,data:(n||{}).data}))}})),iy.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(sw(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}dw.prototype[t]=e(),dw.prototype[t+"Form"]=e(!0)}));var fw=dw;class pw{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new $v(t,i,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new pw((function(e){t=e})),cancel:t}}}var mw=pw;const gw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gw).forEach((([t,e])=>{gw[e]=t}));var yw=gw;const vw=function t(e){const n=new fw(e),i=Eg(fw.prototype.request,n);return iy.extend(i,fw.prototype,n,{allOwnKeys:!0}),iy.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t(sw(e,n))},i}(Lv);vw.Axios=fw,vw.CanceledError=$v,vw.CancelToken=mw,vw.isCancel=Hv,vw.VERSION=aw,vw.toFormData=bv,vw.AxiosError=uy,vw.Cancel=vw.CanceledError,vw.all=function(t){return Promise.all(t)},vw.spread=function(t){return function(e){return t.apply(null,e)}},vw.isAxiosError=function(t){return iy.isObject(t)&&!0===t.isAxiosError},vw.mergeConfig=sw,vw.AxiosHeaders=Vv,vw.formToJSON=t=>Ov(iy.isHTMLForm(t)?new FormData(t):t),vw.HttpStatusCode=yw,vw.default=vw;var ww=vw;const{Axios:bw,AxiosError:xw,CanceledError:kw,isCancel:Ew,CancelToken:Cw,VERSION:Iw,all:Nw,Cancel:Tw,isAxiosError:Sw,spread:_w,toFormData:Aw,AxiosHeaders:Ow,HttpStatusCode:Rw,formToJSON:Dw,mergeConfig:Lw}=ww;var Pw;const Mw="https://books-backend.p.goit.global/";Pw={getCategoryList:async()=>await ww.get(Mw+"books/category-list"),getTopBooks:async()=>await ww.get(Mw+"books/top-books"),getCategory:async t=>{const e=new URLSearchParams({category:t});return await ww.get(`${Mw}books/category/?${e}`)},getBookById:async t=>await ww.get(`${Mw}books//${t}`)};var Fw;Fw={initTheme:()=>{"dark"===localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")},switchTheme:()=>{"dark"===localStorage.getItem("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","dark"))}};var Uw,Bw,zw={};Uw=void 0===o?"undefined"==typeof window?zw:window:o,Bw=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",w="Ask",b="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",C="Circle",I="Arrows",N="Dots",T="Pulse",S="Custom",_="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},O="Standard",R="Hourglass",D="Circle",L="Arrows",P="Dots",M="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+s)},B=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+s)},z=function(e){return e||(e="head"),null!==t.document[e]||(U('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},j=function(e,n){if(!z("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},V=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?V(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},W=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Y=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Q=0,J=function(n,i,r,o){if(!z("body"))return!1;e||lt.Notify.init({});var s=V(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),e=V(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];Q++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=W(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=V(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+Q,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var w="";n===l?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=w+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var b=t.document.getElementById(d.wrapID);b.insertBefore(y,b.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,E,C=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},I=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),C();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var N=function(){k=setTimeout((function(){C()}),e.timeout),E=setTimeout((function(){I()}),e.timeout+e.cssAnimationDuration)};N(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),N()})))}}if(e.showOnlyTheLastOne&&0<Q)for(var T,S=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+Q+"])"),_=0;_<S.length;_++)null!==(T=S[_]).parentNode&&T.parentNode.removeChild(T);e=V(!0,e,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,o,s,l){if(!z("body"))return!1;n||lt.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=V(!0,n,{}),n=V(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=W(i),r=W(r),o=W(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",w=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(w?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b,x,k="";if(e===f?(b=n.svgSize,x=h.svgColor,b||(b="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+b+'" height="'+b+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var E=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),E()})),v&&w&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}n=V(!0,n,c)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,o,s,l,c,u,h){if(!z("body"))return!1;i||lt.Confirm.init({});var d=V(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=V(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),r=W(r),s=W(s),l=W(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",v=null,k=void 0;if(e===w||e===b){v=o||"";var E=e===w||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===b?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var C=t.document.getElementById(f.id),I=t.document.getElementById("NXConfirmButtonOk"),N=t.document.getElementById("NXConfirmValidationInput");N&&(N.focus(),N.setSelectionRange(0,(N.value||"").length),N.addEventListener("keyup",(function(t){var n=t.target.value;e===w&&n!==v?(t.preventDefault(),N.classList.add("nx-validation-failure"),N.classList.remove("nx-validation-success")):(e===w&&(N.classList.remove("nx-validation-failure"),N.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(t){if(e===w&&v&&N){if((N.value||"").toString()!==v)return N.focus(),N.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;N.classList.remove("nx-validation-failure")}"function"==typeof c&&(e===b&&N&&(k=N.value||""),c(k)),C.classList.add("nx-remove");var n=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===b&&N&&(k=N.value||""),u(k)),C.classList.add("nx-remove");var t=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(t))}),i.cssAnimationDuration)}))}i=V(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,o,s){if(!z("body"))return!1;r||lt.Loading.init({});var l=V(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=V(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var h="";0<(u=u.length>r.messageMaxLength?W(u).toString().substring(0,r.messageMaxLength)+"...":W(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=H(r.svgSize,r.svgColor);else if(e===E)d=q(r.svgSize,r.svgColor);else if(e===C)d=$(r.svgSize,r.svgColor);else if(e===I)d=X(r.svgSize,r.svgColor);else if(e===N)d=K(r.svgSize,r.svgColor);else if(e===T)d=G(r.svgSize,r.svgColor);else if(e===S&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===S&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===S&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),w=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(w)}),s);r=V(!0,r,l)},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},st=0,at=function(e,n,i,r,s,l){var c;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||lt.Block.init({});var h=V(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),o=V(!0,o,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=F.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(e){for(var v,w=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=c[b]){if(-1<w.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+F.ID+"]");if(1>x.length){var k="";n&&(k=n===R?q(o.svgSize,o.svgColor):n===D?$(o.svgSize,o.svgColor):n===L?X(o.svgSize,o.svgColor):n===P?K(o.svgSize,o.svgColor):n===M?G(o.svgSize,o.svgColor):H(o.svgSize,o.svgColor));var E='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",C="";0<f.length&&(f=f.length>o.messageMaxLength?W(f).substring(0,o.messageMaxLength)+"...":W(f),C='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),st++;var I=t.document.createElement("div");I.id=F.ID+"-"+st,I.className=p+(o.cssAnimation?" nx-with-animation":""),I.style.position=o.position,I.style.zIndex=o.zindex,I.style.background=o.backgroundColor,I.style.animationDuration=o.cssAnimationDuration+"ms",I.style.fontFamily='"'+o.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",o.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=E+C;var N,T=t.getComputedStyle(v).getPropertyValue("position"),S="string"==typeof T?T.toLocaleLowerCase("en"):"relative",_=Math.round(1.25*parseInt(o.svgSize))+40,A="";_>(v.offsetHeight||0)&&(A="min-height:"+_+"px;"),N=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var O="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(j||0<A.length){if(!z("head"))return!1;j&&(O="position:relative!important;");var Y='<style id="Style-'+F.ID+"-"+st+'">'+N+"."+y+"{"+O+A+"}</style>",Q=t.document.createRange();Q.selectNode(t.document.head);var J=Q.createContextualFragment(Y);t.document.head.appendChild(J),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else B("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),o.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=c[e])&&(et(t),x=t.querySelectorAll("[id^="+F.ID+"]"),tt(x));clearTimeout(nt)}),l);o=V(!0,o,h)},lt={Notify:{init:function(t){e=V(!0,d,t),j(Y,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=V(!0,e,t)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){J(l,t,e,n)},failure:function(t,e,n){J(c,t,e,n)},warning:function(t,e,n){J(u,t,e,n)},info:function(t,e,n){J(h,t,e,n)}},Report:{init:function(t){n=V(!0,y,t),j(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=V(!0,n,t)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(f,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=V(!0,x,t),j(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=V(!0,i,t)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,o,s){nt(v,t,e,null,n,i,r,o,s)},ask:function(t,e,n,i,r,o,s,a){nt(w,t,e,n,i,r,o,s,a)},prompt:function(t,e,n,i,r,o,s,a){nt(b,t,e,n,i,r,o,s,a)}},Loading:{init:function(t){r=V(!0,A,t),j(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=V(!0,r,t)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(E,t,e,!0,0)},circle:function(t,e){rt(C,t,e,!0,0)},arrows:function(t,e){rt(I,t,e,!0,0)},dots:function(t,e){rt(N,t,e,!0,0)},pulse:function(t,e){rt(T,t,e,!0,0)},custom:function(t,e){rt(S,t,e,!0,0)},notiflix:function(t,e){rt(_,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?W(e).substring(0,r.messageMaxLength)+"...":W(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var o=t.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=e,n.appendChild(o)}}else U("Where is the new message?")}(e)}},Block:{init:function(t){o=V(!0,F,t),j(ot,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=V(!0,o,t)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,O,t,e,n)},hourglass:function(t,e,n){at(!0,R,t,e,n)},circle:function(t,e,n){at(!0,D,t,e,n)},arrows:function(t,e,n){at(!0,L,t,e,n)},dots:function(t,e,n){at(!0,P,t,e,n)},pulse:function(t,e,n){at(!0,M,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?V(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return Bw(Uw)})):"object"==typeof zw?zw=Bw(Uw):Uw.Notiflix=Bw(Uw);var jw,Vw="Expected a function",Ww=NaN,Hw="[object Symbol]",qw=/^\s+|\s+$/g,$w=/^[-+]0x[0-9a-f]+$/i,Xw=/^0b[01]+$/i,Kw=/^0o[0-7]+$/i,Gw=parseInt,Yw="object"==typeof o&&o&&o.Object===Object&&o,Qw="object"==typeof self&&self&&self.Object===Object&&self,Jw=Yw||Qw||Function("return this")(),Zw=Object.prototype.toString,tb=Math.max,eb=Math.min,nb=function(){return Jw.Date.now()};function ib(t,e,n){var i,r,o,s,a,l,c=0,u=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError(Vw);function f(e){var n=i,o=r;return i=r=void 0,c=e,s=t.apply(o,n)}function p(t){var n=t-l;return void 0===l||n>=e||n<0||h&&t-c>=o}function m(){var t=nb();if(p(t))return g(t);a=setTimeout(m,function(t){var n=e-(t-l);return h?eb(n,o-(t-c)):n}(t))}function g(t){return a=void 0,d&&i?f(t):(i=r=void 0,s)}function y(){var t=nb(),n=p(t);if(i=arguments,r=this,l=t,n){if(void 0===a)return function(t){return c=t,a=setTimeout(m,e),u?f(t):s}(l);if(h)return a=setTimeout(m,e),f(l)}return void 0===a&&(a=setTimeout(m,e)),s}return e=ob(e)||0,rb(n)&&(u=!!n.leading,o=(h="maxWait"in n)?tb(ob(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=r=a=void 0},y.flush=function(){return void 0===a?s:g(nb())},y}function rb(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ob(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Zw.call(t)==Hw}(t))return Ww;if(rb(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=rb(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(qw,"");var n=Xw.test(t);return n||Kw.test(t)?Gw(t.slice(2),n?2:8):$w.test(t)?Ww:+t}jw=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(Vw);return rb(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),ib(t,e,{leading:i,maxWait:e,trailing:r})};var sb={};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.1
*/function ab(t){return(ab="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lb(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=ub(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function cb(t){return function(t){if(Array.isArray(t))return hb(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||ub(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ub(t,e){if(t){if("string"==typeof t)return hb(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?hb(t,e):void 0}}function hb(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function db(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function fb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(sb,"__esModule",{value:!0}),sb.default=void 0;var pb=function(){function t(e,n){var i=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),fb(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5,download:!1}),fb(this,"transitionPrefix",void 0),fb(this,"isPassiveEventsSupported",void 0),fb(this,"transitionCapable",!1),fb(this,"isTouchDevice","ontouchstart"in window),fb(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),fb(this,"initialLocationHash",void 0),fb(this,"pushStateSupport","pushState"in history),fb(this,"isOpen",!1),fb(this,"isAnimating",!1),fb(this,"isClosing",!1),fb(this,"isFadeIn",!1),fb(this,"urlChangedOnce",!1),fb(this,"hashReseted",!1),fb(this,"historyHasChanges",!1),fb(this,"historyUpdateTimeout",null),fb(this,"currentImage",void 0),fb(this,"eventNamespace","simplelightbox"),fb(this,"domNodes",{}),fb(this,"loadedImages",[]),fb(this,"initialImageIndex",0),fb(this,"currentImageIndex",0),fb(this,"initialSelector",null),fb(this,"globalScrollbarWidth",0),fb(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof e?(this.initialSelector=e,this.elements=Array.from(document.querySelectorAll(e))):this.elements=void 0!==e.length&&e.length>0?Array.from(e):[e],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var r=[];this.elements=Array.from(this.elements).filter((function(t){var e=t.getAttribute(i.options.sourceAttr);return-1===r.indexOf(e)&&(r.push(e),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(t){if(i.isValidLink(t.currentTarget)){if(t.preventDefault(),i.isAnimating)return!1;i.initialImageIndex=i.elements.indexOf(t.currentTarget),i.openImage(t.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(t){i.isOpen&&t.target===t.currentTarget&&i.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(t){t.target.parentElement.classList.contains("sl-image")&&t.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(t){if(i.controlCoordinates.swipeDiff=0,i.isAnimating&&"Escape"===t.key)return i.currentImage.setAttribute("src",""),i.isAnimating=!1,void i.close();i.isOpen&&(t.preventDefault(),"Escape"===t.key&&i.close(),!i.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(t.key)>-1&&i.loadImage("ArrowRight"===t.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var e,n,i;return e=t,n=[{key:"checkPassiveEventsSupport",value:function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(t){}return t}},{key:"getCaptionElement",value:function(t){if(this.options.captionSelector.startsWith("+")){var e=this.options.captionSelector.replace(/^\+/,"").trimStart(),n=t.nextElementSibling;return!!n.matches(e)&&n}if(this.options.captionSelector.startsWith(">")){var i=this.options.captionSelector.replace(/^>/,"").trimStart();return t.querySelector(i)}return t.querySelector(this.options.captionSelector)}},{key:"generateQuerySelector",value:function(t){var e=t.tagName,n=t.id,i=t.className,r=t.parentNode;if("HTML"===e)return"HTML";var o=e;if(o+=""!==n?"#".concat(n):"",i)for(var s=i.trim().split(/\s/),a=0;a<s.length;a++)o+=".".concat(s[a]);for(var l=1,c=t;c.previousElementSibling;c=c.previousElementSibling)l+=1;return o+=":nth-child(".concat(l,")"),"".concat(this.generateQuerySelector(r)," > ").concat(o)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.download=document.createElement("div"),this.domNodes.download.classList.add("sl-download"),this.domNodes.downloadLink=document.createElement("a"),this.domNodes.downloadLink.setAttribute("download",""),this.domNodes.downloadLink.textContent=this.options.download,this.domNodes.download.appendChild(this.domNodes.downloadLink),this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var t,e=this.options.captionClass.split(/[\s,]+/);(t=this.domNodes.caption.classList).add.apply(t,cb(e))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(t,e){var n;return function(){n||(t.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),e))}}},{key:"isValidLink",value:function(t){return!this.options.fileExt||t.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")($|\\?.*$)","i").test(t.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var t=(document.body||document.documentElement).style;return"transition"in t?"":"WebkitTransition"in t?"-webkit-":"MozTransition"in t?"-moz-":"OTransition"in t&&"-o"}},{key:"getScrollbarWidth",value:function(){var t,e=document.createElement("div");return e.classList.add("sl-scrollbar-measure"),document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e),t}},{key:"toggleScrollbar",value:function(t){var e=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===t){var i=window.innerWidth;if(!i){var r=document.documentElement.getBoundingClientRect();i=r.right-Math.abs(r.left)}if(document.body.clientWidth<i||this.isAppleDevice){var o=parseInt(window.getComputedStyle(document.body).paddingRight||0,10);e=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=o,(e>0||0==e&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=o+e+"px",n.forEach((function(t){var n=t.style.paddingRight,i=window.getComputedStyle(t)["padding-right"];t.dataset.originalPaddingRight=n,t.style.paddingRight="".concat(parseFloat(i)+e,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight+"px",n.forEach((function(t){var e=t.dataset.originalPaddingRight;void 0!==e&&(t.style.paddingRight=e)}));return e}},{key:"close",value:function(){var t=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var e=this.relatedElements[this.currentImageIndex];for(var n in e.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){t.options.disableScroll&&t.toggleScrollbar("show"),t.options.htmlClass&&""!==t.options.htmlClass&&document.querySelector("html").classList.remove(t.options.htmlClass),document.body.removeChild(t.domNodes.wrapper),t.options.overlay&&document.body.removeChild(t.domNodes.overlay),t.domNodes.additionalHtml=null,t.domNodes.download=null,e.dispatchEvent(new Event("closed.simplelightbox")),t.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var t=this,e=this.currentImageIndex,n=this.relatedElements.length,i=e+1<0?n-1:e+1>=n-1?0:e+1,r=e-1<0?n-1:e-1>=n-1?0:e-1,o=new Image,s=new Image;o.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===t.loadedImages.indexOf(i)&&t.loadedImages.push(i),t.relatedElements[e].dispatchEvent(new Event("nextImageLoaded."+t.eventNamespace))})),o.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr)),s.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===t.loadedImages.indexOf(i)&&t.loadedImages.push(i),t.relatedElements[e].dispatchEvent(new Event("prevImageLoaded."+t.eventNamespace))})),s.setAttribute("src",this.relatedElements[r].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(t){var e=this,n=t;this.options.rtl&&(t=-t),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===t?"next":"prev")+"."+this.eventNamespace));var i=this.currentImageIndex+t;if(this.isAnimating||(i<0||i>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=i<0?this.relatedElements.length-1:i>this.relatedElements.length-1?0:i,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){e.isAnimating=!0,e.isClosing?e.isAnimating=!1:setTimeout((function(){var t=e.relatedElements[e.currentImageIndex];e.currentImage&&(e.currentImage.setAttribute("src",t.getAttribute(e.options.sourceAttr)),-1===e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr))&&e.show(e.domNodes.spinner),e.domNodes.image.contains(e.domNodes.caption)&&e.domNodes.image.removeChild(e.domNodes.caption),e.adjustImage(n),e.options.preloading&&e.preload())}),100)}))}},{key:"adjustImage",value:function(t){var e=this;if(!this.currentImage)return!1;var n=new Image,i=window.innerWidth*this.options.widthRatio,r=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("error."+e.eventNamespace)),e.isAnimating=!1,e.isOpen=!0,e.domNodes.spinner.style.display="none";var i=1===t||-1===t;if(e.initialImageIndex===e.currentImageIndex&&i)return e.close();e.options.alertError&&alert(e.options.alertErrorMessage),e.loadImage(i?t:1)})),n.addEventListener("load",(function(n){void 0!==t&&(e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("changed."+e.eventNamespace)),e.relatedElements[e.currentImageIndex].dispatchEvent(new Event((1===t?"nextDone":"prevDone")+"."+e.eventNamespace))),e.options.history&&e.updateURL(),-1===e.loadedImages.indexOf(e.currentImage.getAttribute("src"))&&e.loadedImages.push(e.currentImage.getAttribute("src"));var o,s,a=n.target.width,l=n.target.height;if(e.options.scaleImageToRatio||a>i||l>r){var c=a/l>i/r?a/i:l/r;a/=c,l/=c}e.domNodes.image.style.top=(window.innerHeight-l)/2+"px",e.domNodes.image.style.left=(window.innerWidth-a-e.globalScrollbarWidth)/2+"px",e.domNodes.image.style.width=a+"px",e.domNodes.image.style.height=l+"px",e.domNodes.spinner.style.display="none",e.options.focus&&e.forceFocus(),e.fadeIn(e.currentImage,e.options.fadeSpeed,(function(){e.options.focus&&e.domNodes.wrapper.focus()})),e.isOpen=!0,"string"==typeof e.options.captionSelector?o="self"===e.options.captionSelector?e.relatedElements[e.currentImageIndex]:e.getCaptionElement(e.relatedElements[e.currentImageIndex]):"function"==typeof e.options.captionSelector&&(o=e.options.captionSelector(e.relatedElements[e.currentImageIndex])),e.options.captions&&o&&(s="data"===e.options.captionType?o.dataset[e.options.captionsData]:"text"===e.options.captionType?o.innerHTML:o.getAttribute(e.options.captionsData)),e.options.loop?1===e.relatedElements.length?e.hide(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):e.show(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===e.currentImageIndex&&e.hide(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex>=e.relatedElements.length-1&&e.hide(e.domNodes.navigation.querySelector(".sl-next")),e.currentImageIndex>0&&e.show(e.domNodes.navigation.querySelector(".sl-prev")),e.currentImageIndex<e.relatedElements.length-1&&e.show(e.domNodes.navigation.querySelector(".sl-next"))),1===t||-1===t?(e.options.animationSlide&&(e.slide(0,100*t+"px"),setTimeout((function(){e.slide(e.options.animationSpeed/1e3,"0px")}),50)),e.fadeIn(e.domNodes.image,e.options.fadeSpeed,(function(){e.isAnimating=!1,e.setCaption(s,a)}))):(e.isAnimating=!1,e.setCaption(s,a)),e.options.additionalHtml&&!e.domNodes.additionalHtml&&(e.domNodes.additionalHtml=document.createElement("div"),e.domNodes.additionalHtml.classList.add("sl-additional-html"),e.domNodes.additionalHtml.innerHTML=e.options.additionalHtml,e.domNodes.image.appendChild(e.domNodes.additionalHtml)),e.options.download&&e.domNodes.downloadLink.setAttribute("href",e.currentImage.getAttribute("src"))}))}},{key:"zoomPanElement",value:function(t,e,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+t+","+e+") scale("+n+")"}},{key:"minMax",value:function(t,e,n){return t<e?e:t>n?n:t}},{key:"setZoomData",value:function(t,e,n){this.currentImage.dataset.scale=t,this.currentImage.dataset.translateX=e,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var t=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(e){t.isOpen&&t.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){t.addEventListener(window,"hashchange."+t.eventNamespace,(function(e){t.isOpen&&t.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(e){if(!e.currentTarget.tagName.match(/button/i))return!0;e.preventDefault(),t.controlCoordinates.swipeDiff=0,t.loadImage(e.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var e=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(t.controlCoordinates.mousedown||t.isAnimating||t.isClosing||!t.isOpen)return!0;0==t.controlCoordinates.containerHeight&&(t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY));var i=n.delta||n.wheelDelta;void 0===i&&(i=n.detail),i=Math.max(-1,Math.min(1,i)),e+=i*t.options.scrollZoomFactor*e,e=Math.max(1,Math.min(t.options.maxZoom,e)),t.controlCoordinates.targetScale=e;var r=document.documentElement.scrollTop||document.body.scrollTop;t.controlCoordinates.pinchOffsetX=n.pageX,t.controlCoordinates.pinchOffsetY=n.pageY-r||0,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1?(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)):(1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.setZoomData(t.controlCoordinates.targetScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(e){if("A"===e.target.tagName&&"touchstart"===e.type)return!0;if("mousedown"===e.type)e.preventDefault(),t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.capture=!0;else{if(t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,1===t.controlCoordinates.touchCount){if(t.controlCoordinates.doubleTapped)return t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout((function(){t.currentImage&&t.currentImage.classList.remove("sl-transition")}),200),!1;t.controlCoordinates.doubleTapped=!0,setTimeout((function(){t.controlCoordinates.doubleTapped=!1}),300),t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY)}else 2===t.controlCoordinates.touchCount&&(t.controlCoordinates.initialPointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.initialPointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.initialOffsetX=parseFloat(t.currentImage.dataset.translateX),t.controlCoordinates.initialOffsetY=parseFloat(t.currentImage.dataset.translateY),t.controlCoordinates.pinchOffsetX=(t.controlCoordinates.initialPointerOffsetX+t.controlCoordinates.initialPointerOffsetX2)/2,t.controlCoordinates.pinchOffsetY=(t.controlCoordinates.initialPointerOffsetY+t.controlCoordinates.initialPointerOffsetY2)/2,t.controlCoordinates.initialPinchDistance=Math.sqrt((t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)*(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialPointerOffsetX2)+(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)*(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialPointerOffsetY2)));t.controlCoordinates.capture=!0}return!!t.controlCoordinates.mousedown||(t.transitionCapable&&(t.controlCoordinates.imageLeft=parseInt(t.domNodes.image.style.left,10)),t.controlCoordinates.mousedown=!0,t.controlCoordinates.swipeDiff=0,t.controlCoordinates.swipeYDiff=0,t.controlCoordinates.swipeStart=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYStart=e.pageY||e.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(e){if(!t.controlCoordinates.mousedown)return!0;if("touchmove"===e.type){if(!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.touches[0].clientX,t.controlCoordinates.pointerOffsetY=e.touches[0].clientY,t.controlCoordinates.touchCount=e.touches.length,t.controlCoordinates.touchmoveCount++,t.controlCoordinates.touchCount>1?(t.controlCoordinates.pointerOffsetX2=e.touches[1].clientX,t.controlCoordinates.pointerOffsetY2=e.touches[1].clientY,t.controlCoordinates.targetPinchDistance=Math.sqrt((t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)*(t.controlCoordinates.pointerOffsetX-t.controlCoordinates.pointerOffsetX2)+(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)*(t.controlCoordinates.pointerOffsetY-t.controlCoordinates.pointerOffsetY2)),null===t.controlCoordinates.initialPinchDistance&&(t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance),Math.abs(t.controlCoordinates.initialPinchDistance-t.controlCoordinates.targetPinchDistance)>=1&&(t.controlCoordinates.targetScale=t.minMax(t.controlCoordinates.targetPinchDistance/t.controlCoordinates.initialPinchDistance*t.controlCoordinates.initialScale,1,t.options.maxZoom),t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.scaleDifference=t.controlCoordinates.targetScale-t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.initialOffsetX-(t.controlCoordinates.pinchOffsetX-t.controlCoordinates.containerOffsetX-t.controlCoordinates.containerWidth/2-t.controlCoordinates.initialOffsetX)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.initialOffsetY-(t.controlCoordinates.pinchOffsetY-t.controlCoordinates.containerOffsetY-t.controlCoordinates.containerHeight/2-t.controlCoordinates.initialOffsetY)/(t.controlCoordinates.targetScale-t.controlCoordinates.scaleDifference)*t.controlCoordinates.scaleDifference,-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale),t.controlCoordinates.targetScale>1&&(t.controlCoordinates.zoomed=!0,(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=t.controlCoordinates.targetPinchDistance,t.controlCoordinates.initialScale=t.controlCoordinates.targetScale,t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY)):(t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale))}if("mousemove"===e.type&&t.controlCoordinates.mousedown){if("touchmove"==e.type)return!0;if(e.preventDefault(),!1===t.controlCoordinates.capture)return!1;t.controlCoordinates.pointerOffsetX=e.clientX,t.controlCoordinates.pointerOffsetY=e.clientY,t.controlCoordinates.targetScale=t.controlCoordinates.initialScale,t.controlCoordinates.limitOffsetX=(t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale-t.controlCoordinates.containerWidth)/2,t.controlCoordinates.limitOffsetY=(t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale-t.controlCoordinates.containerHeight)/2,t.controlCoordinates.targetOffsetX=t.controlCoordinates.imgWidth*t.controlCoordinates.targetScale<=t.controlCoordinates.containerWidth?0:t.minMax(t.controlCoordinates.pointerOffsetX-(t.controlCoordinates.initialPointerOffsetX-t.controlCoordinates.initialOffsetX),-1*t.controlCoordinates.limitOffsetX,t.controlCoordinates.limitOffsetX),t.controlCoordinates.targetOffsetY=t.controlCoordinates.imgHeight*t.controlCoordinates.targetScale<=t.controlCoordinates.containerHeight?0:t.minMax(t.controlCoordinates.pointerOffsetY-(t.controlCoordinates.initialPointerOffsetY-t.controlCoordinates.initialOffsetY),-1*t.controlCoordinates.limitOffsetY,t.controlCoordinates.limitOffsetY),Math.abs(t.controlCoordinates.targetOffsetX)===Math.abs(t.controlCoordinates.limitOffsetX)&&(t.controlCoordinates.initialOffsetX=t.controlCoordinates.targetOffsetX,t.controlCoordinates.initialPointerOffsetX=t.controlCoordinates.pointerOffsetX),Math.abs(t.controlCoordinates.targetOffsetY)===Math.abs(t.controlCoordinates.limitOffsetY)&&(t.controlCoordinates.initialOffsetY=t.controlCoordinates.targetOffsetY,t.controlCoordinates.initialPointerOffsetY=t.controlCoordinates.pointerOffsetY),t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),t.zoomPanElement(t.controlCoordinates.targetOffsetX+"px",t.controlCoordinates.targetOffsetY+"px",t.controlCoordinates.targetScale)}t.controlCoordinates.zoomed||(t.controlCoordinates.swipeEnd=e.pageX||e.touches[0].pageX,t.controlCoordinates.swipeYEnd=e.pageY||e.touches[0].pageY,t.controlCoordinates.swipeDiff=t.controlCoordinates.swipeStart-t.controlCoordinates.swipeEnd,t.controlCoordinates.swipeYDiff=t.controlCoordinates.swipeYStart-t.controlCoordinates.swipeYEnd,t.options.animationSlide&&t.slide(0,-t.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(e){if(t.isTouchDevice&&"touchend"===e.type&&(t.controlCoordinates.touchCount=e.touches.length,0===t.controlCoordinates.touchCount?(t.currentImage&&t.setZoomData(t.controlCoordinates.initialScale,t.controlCoordinates.targetOffsetX,t.controlCoordinates.targetOffsetY),1===t.controlCoordinates.initialScale&&(t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)),t.controlCoordinates.initialPinchDistance=null,t.controlCoordinates.capture=!1):1===t.controlCoordinates.touchCount?(t.controlCoordinates.initialPointerOffsetX=e.touches[0].clientX,t.controlCoordinates.initialPointerOffsetY=e.touches[0].clientY):t.controlCoordinates.touchCount>1&&(t.controlCoordinates.initialPinchDistance=null)),t.controlCoordinates.mousedown){t.controlCoordinates.mousedown=!1;var n=!0;t.options.loop||(0===t.currentImageIndex&&t.controlCoordinates.swipeDiff<0&&(n=!1),t.currentImageIndex>=t.relatedElements.length-1&&t.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(t.controlCoordinates.swipeDiff)>t.options.swipeTolerance&&n?t.loadImage(t.controlCoordinates.swipeDiff>0?1:-1):t.options.animationSlide&&t.slide(t.options.animationSpeed/1e3,"0px"),t.options.swipeClose&&Math.abs(t.controlCoordinates.swipeYDiff)>50&&Math.abs(t.controlCoordinates.swipeDiff)<t.options.swipeTolerance&&t.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(e){if(!t.isTouchDevice)return t.controlCoordinates.initialPointerOffsetX=e.clientX,t.controlCoordinates.initialPointerOffsetY=e.clientY,t.controlCoordinates.containerHeight=t.getDimensions(t.domNodes.image).height,t.controlCoordinates.containerWidth=t.getDimensions(t.domNodes.image).width,t.controlCoordinates.imgHeight=t.getDimensions(t.currentImage).height,t.controlCoordinates.imgWidth=t.getDimensions(t.currentImage).width,t.controlCoordinates.containerOffsetX=t.domNodes.image.offsetLeft,t.controlCoordinates.containerOffsetY=t.domNodes.image.offsetTop,t.currentImage.classList.add("sl-transition"),t.controlCoordinates.zoomed?(t.controlCoordinates.initialScale=1,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),t.controlCoordinates.zoomed=!1,"none"===t.domNodes.caption.style.display&&t.fadeIn(t.domNodes.caption,t.options.fadeSpeed)):(t.controlCoordinates.initialScale=t.options.doubleTapZoom,t.setZoomData(t.controlCoordinates.initialScale,0,0),t.zoomPanElement("0px","0px",t.controlCoordinates.initialScale),(!t.domNodes.caption.style.opacity||t.domNodes.caption.style.opacity>0)&&"none"!==t.domNodes.caption.style.display&&t.fadeOut(t.domNodes.caption,t.options.fadeSpeed),t.controlCoordinates.zoomed=!0),setTimeout((function(){t.currentImage&&(t.currentImage.classList.remove("sl-transition"),t.currentImage.style[t.transitionPrefix+"transform-origin"]=null)}),200),t.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(t){var e=window.getComputedStyle(t),n=t.offsetHeight,i=t.offsetWidth,r=parseFloat(e.borderTopWidth);return{height:n-parseFloat(e.borderBottomWidth)-r-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom),width:i-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)}}},{key:"updateHash",value:function(){var t="pid="+(this.currentImageIndex+1),e=window.location.href.split("#")[0]+"#"+t;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,e):this.historyHasChanges?window.location.replace(e):window.location.hash=t,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(t,e){var n=this;this.options.captions&&t&&""!==t&&void 0!==t&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=e+"px",this.domNodes.caption.innerHTML=t,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(t,e){if(!this.transitionCapable)return this.domNodes.image.style.left=e;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+e+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+t+"s linear"}},{key:"getRelated",value:function(t){return t&&!1!==t&&"nofollow"!==t?Array.from(this.elements).filter((function(e){return e.getAttribute("rel")===t})):this.elements}},{key:"openImage",value:function(t){var e=this;t.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(t.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.options.download&&this.domNodes.download&&this.domNodes.wrapper.appendChild(this.domNodes.download),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(t);var n=t.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton,this.domNodes.download],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){t.dispatchEvent(new Event("shown."+e.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var t=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(e){document===e.target||t.domNodes.wrapper===e.target||t.domNodes.wrapper.contains(e.target)||t.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(t,e,n,i){t=this.wrap(t),e=this.wrap(e);var r,o=lb(t);try{for(o.s();!(r=o.n()).done;){var s=r.value;s.namespaces||(s.namespaces={});var a,l=lb(e);try{for(l.s();!(a=l.n()).done;){var c=a.value,u=i||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(c.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===ab(u)?u.passive=!0:u={passive:!0}),s.namespaces[c]=n,s.addEventListener(c.split(".")[0],n,u)}}catch(t){l.e(t)}finally{l.f()}}}catch(t){o.e(t)}finally{o.f()}}},{key:"removeEventListener",value:function(t,e){t=this.wrap(t),e=this.wrap(e);var n,i=lb(t);try{for(i.s();!(n=i.n()).done;){var r,o=n.value,s=lb(e);try{for(s.s();!(r=s.n()).done;){var a=r.value;o.namespaces&&o.namespaces[a]&&(o.removeEventListener(a.split(".")[0],o.namespaces[a]),delete o.namespaces[a])}}catch(t){s.e(t)}finally{s.f()}}}catch(t){i.e(t)}finally{i.f()}}},{key:"fadeOut",value:function(t,e,n){var i,r=this,o=lb(t=this.wrap(t));try{for(o.s();!(i=o.n()).done;){var s=i.value;s.style.opacity=parseFloat(s)||window.getComputedStyle(s).getPropertyValue("opacity")}}catch(t){o.e(t)}finally{o.f()}this.isFadeIn=!1;var a=16.66666/(e||this.options.fadeSpeed);!function e(){var i=parseFloat(t[0].style.opacity);if((i-=a)<0){var o,s=lb(t);try{for(s.s();!(o=s.n()).done;){var l=o.value;l.style.display="none",l.style.opacity=1}}catch(t){s.e(t)}finally{s.f()}n&&n.call(r,t)}else{var c,u=lb(t);try{for(u.s();!(c=u.n()).done;)c.value.style.opacity=i}catch(t){u.e(t)}finally{u.f()}requestAnimationFrame(e)}}()}},{key:"fadeIn",value:function(t,e,n,i){var r,o=this,s=lb(t=this.wrap(t));try{for(s.s();!(r=s.n()).done;){var a=r.value;a&&(a.style.opacity=0,a.style.display=i||"block")}}catch(t){s.e(t)}finally{s.f()}this.isFadeIn=!0;var l=parseFloat(t[0].dataset.opacityTarget||1),c=16.66666*l/(e||this.options.fadeSpeed);!function e(){var i=parseFloat(t[0].style.opacity);if((i+=c)>l){var r,s=lb(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;a&&(a.style.opacity=l)}}catch(t){s.e(t)}finally{s.f()}n&&n.call(o,t)}else{var u,h=lb(t);try{for(h.s();!(u=h.n()).done;){var d=u.value;d&&(d.style.opacity=i)}}catch(t){h.e(t)}finally{h.f()}if(!o.isFadeIn)return;requestAnimationFrame(e)}}()}},{key:"hide",value:function(t){var e,n=lb(t=this.wrap(t));try{for(n.s();!(e=n.n()).done;){var i=e.value;"none"!=i.style.display&&(i.dataset.initialDisplay=i.style.display),i.style.display="none"}}catch(t){n.e(t)}finally{n.f()}}},{key:"show",value:function(t,e){var n,i=lb(t=this.wrap(t));try{for(i.s();!(n=i.n()).done;){var r=n.value;r.style.display=r.dataset.initialDisplay||e||"block"}}catch(t){i.e(t)}finally{i.f()}}},{key:"wrap",value:function(t){return"function"==typeof t[Symbol.iterator]&&"string"!=typeof t?t:[t]}},{key:"on",value:function(t,e){t=this.wrap(t);var n,i=lb(this.elements);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.fullyNamespacedEvents||(r.fullyNamespacedEvents={});var o,s=lb(t);try{for(s.s();!(o=s.n()).done;){var a=o.value;r.fullyNamespacedEvents[a]=e,r.addEventListener(a,e)}}catch(t){s.e(t)}finally{s.f()}}}catch(t){i.e(t)}finally{i.f()}return this}},{key:"off",value:function(t){t=this.wrap(t);var e,n=lb(this.elements);try{for(n.s();!(e=n.n()).done;){var i,r=e.value,o=lb(t);try{for(o.s();!(i=o.n()).done;){var s=i.value;void 0!==r.fullyNamespacedEvents&&s in r.fullyNamespacedEvents&&r.removeEventListener(s,r.fullyNamespacedEvents[s])}}catch(t){o.e(t)}finally{o.f()}}}catch(t){n.e(t)}finally{n.f()}return this}},{key:"open",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=t||this.elements[0],"undefined"!=typeof jQuery&&t instanceof jQuery&&(t=t.get(0)),e>0&&(t=this.elements[e]),this.initialImageIndex=this.elements.indexOf(t),this.initialImageIndex>-1&&this.openImage(t)}},{key:"openPosition",value:function(t){var e=this.elements[t];this.open(e,t)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var t=this.options,e=this.initialSelector;return this.destroy(),this.constructor(e,t),this}}],n&&db(e.prototype,n),i&&db(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),mb=pb;sb.default=mb,o.SimpleLightbox=pb;document.querySelector(".btn6").addEventListener("click",(()=>{const t=document.querySelector(".email"),n=document.querySelector(".password");console.log((0,e.createAccount)(t.value,n.value,"Gosha"))}));document.querySelector(".btn7").addEventListener("click",(()=>{const t=document.querySelector(".email"),n=document.querySelector(".password"),i=(0,e.signInApp)(t.value,n.value);console.log(i)}));document.querySelector(".btn9").addEventListener("click",(()=>{console.log((0,e.returnAuth)())}));document.querySelector(".btn10").addEventListener("click",(()=>{console.log((0,e.signOutApp)())}));document.querySelector(".btn11").addEventListener("click",(()=>{console.log((0,e.removeAccount)())}));document.querySelector(".btn12").addEventListener("click",(()=>{(0,e.getUserShoppingList)().then((t=>{console.log(t)}))}));document.querySelector(".btn13").addEventListener("click",(()=>{(async()=>{const t=(await(0,Pw.getTopBooks)()).data.slice(1,5);return(0,e.updateUserShoppingList)(t)})().then((t=>{console.log(t)}))}));document.querySelector(".btn14").addEventListener("click",(()=>{(0,e.getUserName)().then((t=>{console.log(t)}))}));document.querySelector(".btn15").addEventListener("click",(()=>{console.log((0,e.getUserEmail)())}));const gb=document.querySelector(".btn1"),yb=document.querySelector(".btn2"),vb=document.querySelector(".btn3"),wb=document.querySelector(".btn4"),bb=document.querySelector(".btn5");gb.addEventListener("click",(()=>console.log((0,Pw.getCategoryList)()))),yb.addEventListener("click",(()=>{(0,Pw.getTopBooks)().then((t=>{console.log(t.data[0].books[0].book_image)}))})),vb.addEventListener("click",(()=>console.log((0,Pw.getCategory)("Hardcover Fiction")))),wb.addEventListener("click",(()=>console.log((0,Pw.getBookById)("643282b2e85766588626a0e0")))),(0,Fw.initTheme)(),bb.addEventListener("click",(()=>(0,Fw.switchTheme)()));const xb=document.querySelector(".gallery"),kb=document.querySelector("#search-form"),Eb=document.querySelector('[name="searchQuery"]'),Cb=document.querySelector(".scroll-up");Cb.hidden=!0;let Ib=1,Nb=Ib,Tb=!1;const Sb=new(t(sb))(".gallery a",{captions:!0,captionDelay:250,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});kb.addEventListener("submit",(e=>{e.preventDefault(),Ab(xb),Ib=1,Tb=!1,0!=Eb.value.trim().length?Rb().then((t=>_b(t.data))).catch((e=>t(zw).Notify.failure(`Something went wrong: ${e.code} ${e.message}`))):t(zw).Notify.failure("The search field must be filled.")}));const _b=e=>{if(Nb=Math.ceil(e.totalHits/40),0!=e.hits.length){if(t(zw).Notify.success(`Hooray! We found ${e.totalHits} images.`),e.totalHits>0){const t=e.hits.map((t=>`  <a class="photo-card" href="${t.largeImageURL}">\n                    <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />\n                    <div class="info">\n                      <p class="info-item">\n                        <b>Likes</b>\n                        ${t.likes}\n                      </p>\n                      <p class="info-item">\n                        <b>Views</b>\n                        ${t.views}\n                      </p>\n                      <p class="info-item">\n                        <b>Comments</b>\n                        ${t.comments}\n                      </p>\n                      <p class="info-item">\n                        <b>Downloads</b>\n                        ${t.downloads}\n                      </p>\n                    </div>\n                  </a>`)).join("");xb.insertAdjacentHTML("beforeend",t),Sb.refresh()}}else t(zw).Notify.failure("Sorry, there are no images matching your search query. Please try again.")},Ab=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},Ob=t(jw)((()=>{(()=>{const e=window.innerHeight;document.documentElement.scrollHeight-(e+window.scrollY)<=100&&(Nb>Ib?(Ib++,Rb().then((t=>_b(t.data))).catch((e=>t(zw).Notify.failure(`Something went wrong: ${e.code} ${e.message}`)))):Tb||(Tb=!0,t(zw).Notify.info("We're sorry, but you've reached the end of search results."))),document.documentElement.clientHeight<document.documentElement.scrollTop?Cb.hidden=!1:Cb.hidden=!0})()}),500);document.addEventListener("scroll",(t=>{Ob()})),Cb.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));const Rb=async()=>{const t={key:"38497169-7bd98392067bf2a90cc1b3ff8",q:Eb.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:Ib},e=new URLSearchParams(t);return await ww.get(`https://pixabay.com/api/?${e}`)};
//# sourceMappingURL=index.5388f5d2.js.map
