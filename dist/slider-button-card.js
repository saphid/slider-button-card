function t(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}var e,i,o;function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}"function"==typeof SuppressedError&&SuppressedError,(o=e||(e={})).language="language",o.system="system",o.comma_decimal="comma_decimal",o.decimal_comma="decimal_comma",o.space_comma="space_comma",o.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));function r(t){return t.substr(0,t.indexOf("."))}function a(t){return r(t.entity_id)}var s=["closed","locked","off"],l=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},c={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function d(t,e){if(t in c)return c[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var h=function(t){l(window,"haptic",t)},u=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var o,n=r(e),a="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}return t.callService(a,o,{entity_id:e})}(t,e,s.includes(t.states[e].state))},p=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some(function(t){return t.user===e.user.id})||(h("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&l(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),l(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(u(e,i.entity),h("success"));break;case"call-service":if(!o.service)return void h("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data,o.target),h("success");break;case"fire-dom-event":l(t,"ll-custom",o)}},g=function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),p(t,e,i,n)};var f={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},b={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return d("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in f)return f[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var o=10*Math.round(i/10);return o>=100?"mdi:battery":o<=0?"mdi:battery-alert":"hass:battery-"+o}var n=t.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"mdi:thermometer":d("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?d("input_datetime"):"mdi:calendar":"mdi:clock"}},m=function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=r(t.entity_id);return e in b?b[e](t):d(e,t.state)},_=Function.prototype.toString,v=Object.create,y=Object.prototype.toString,w=function(){function t(){this._keys=[],this._values=[]}return t.prototype.has=function(t){return!!~this._keys.indexOf(t)},t.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},t.prototype.set=function(t,e){this._keys.push(t),this._values.push(e)},t}();var k="undefined"!=typeof WeakMap?function(){return new WeakMap}:function(){return new w};function x(t){if(!t)return v(null);var e=t.constructor;if(e===Object)return t===Object.prototype?{}:v(t);if(e&&~_.call(e).indexOf("[native code]"))try{return new e}catch(t){}return v(t)}var S="g"===/test/g.flags?function(t){return t.flags}:function(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function O(t){var e=y.call(t);return e.substring(8,e.length-1)}var T="undefined"!=typeof Symbol?function(t){return t[Symbol.toStringTag]||O(t)}:O,$=Object.defineProperty,A=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,P=Object.prototype,N=P.hasOwnProperty,j=P.propertyIsEnumerable,M="function"==typeof C;var I=M?function(t){return E(t).concat(C(t))}:E;function R(t,e,i){for(var o=I(t),n=0,r=o.length,a=void 0,s=void 0;n<r;++n)if("callee"!==(a=o[n])&&"caller"!==a)if(s=A(t,a)){s.get||s.set||(s.value=i.copier(s.value,i));try{$(e,a,s)}catch(t){e[a]=s.value}}else e[a]=i.copier(t[a],i);return e}function V(t,e){return t.slice(0)}function L(t,e){var i=new e.Constructor;return e.cache.set(t,i),t.forEach(function(t,o){i.set(o,e.copier(t,e))}),i}var U=M?function(t,e){var i=x(e.prototype);for(var o in e.cache.set(t,i),t)N.call(t,o)&&(i[o]=e.copier(t[o],e));for(var n=C(t),r=0,a=n.length,s=void 0;r<a;++r)s=n[r],j.call(t,s)&&(i[s]=e.copier(t[s],e));return i}:function(t,e){var i=x(e.prototype);for(var o in e.cache.set(t,i),t)N.call(t,o)&&(i[o]=e.copier(t[o],e));return i};function z(t,e){return new e.Constructor(t.valueOf())}function H(t,e){return t}function F(t,e){var i=new e.Constructor;return e.cache.set(t,i),t.forEach(function(t){i.add(e.copier(t,e))}),i}var B=Array.isArray,D=Object.assign,G=Object.getPrototypeOf||function(t){return t.__proto__},q={array:function(t,e){var i=new e.Constructor;e.cache.set(t,i);for(var o=0,n=t.length;o<n;++o)i[o]=e.copier(t[o],e);return i},arrayBuffer:V,blob:function(t,e){return t.slice(0,t.size,t.type)},dataView:function(t,e){return new e.Constructor(V(t.buffer))},date:function(t,e){return new e.Constructor(t.getTime())},error:H,map:L,object:U,regExp:function(t,e){var i=new e.Constructor(t.source,S(t));return i.lastIndex=t.lastIndex,i},set:F},W=D({},q,{array:function(t,e){var i=new e.Constructor;return e.cache.set(t,i),R(t,i,e)},map:function(t,e){return R(t,L(t,e),e)},object:function(t,e){var i=x(e.prototype);return e.cache.set(t,i),R(t,i,e)},set:function(t,e){return R(t,F(t,e),e)}});function Y(t){var e=function(t){return{Arguments:t.object,Array:t.array,ArrayBuffer:t.arrayBuffer,Blob:t.blob,Boolean:z,DataView:t.dataView,Date:t.date,Error:t.error,Float32Array:t.arrayBuffer,Float64Array:t.arrayBuffer,Int8Array:t.arrayBuffer,Int16Array:t.arrayBuffer,Int32Array:t.arrayBuffer,Map:t.map,Number:z,Object:t.object,Promise:H,RegExp:t.regExp,Set:t.set,String:z,WeakMap:H,WeakSet:H,Uint8Array:t.arrayBuffer,Uint8ClampedArray:t.arrayBuffer,Uint16Array:t.arrayBuffer,Uint32Array:t.arrayBuffer,Uint64Array:t.arrayBuffer}}(D({},q,t)),i=e.Array,o=e.Object;function n(t,n){if(n.prototype=n.Constructor=void 0,!t||"object"!=typeof t)return t;if(n.cache.has(t))return n.cache.get(t);if(n.prototype=G(t),n.Constructor=n.prototype&&n.prototype.constructor,!n.Constructor||n.Constructor===Object)return o(t,n);if(B(t))return i(t,n);var r=e[T(t)];return r?r(t,n):"function"==typeof t.then?t:o(t,n)}return function(t){return n(t,{Constructor:void 0,cache:k(),copier:n,prototype:void 0})}}Y(D({},W,{}));var K=Y({});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Z="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,J=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},X=`{{lit-${String(Math.random()).slice(2)}}}`,Q=`\x3c!--${X}--\x3e`,tt=new RegExp(`${X}|${Q}`),et="$lit$";class it{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,a=-1,s=0;const{strings:l,values:{length:c}}=t;for(;s<c;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let o=0;for(let t=0;t<i;t++)ot(e[t].name,et)&&o++;for(;o-- >0;){const e=l[s],i=at.exec(e)[2],o=i.toLowerCase()+et,n=t.getAttribute(o);t.removeAttribute(o);const r=n.split(tt);this.parts.push({type:"attribute",index:a,name:i,strings:r}),s+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(X)>=0){const o=t.parentNode,n=e.split(tt),r=n.length-1;for(let e=0;e<r;e++){let i,r=n[e];if(""===r)i=rt();else{const t=at.exec(r);null!==t&&ot(t[2],et)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-5)+t[3]),i=document.createTextNode(r)}o.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===n[r]?(o.insertBefore(rt(),t),i.push(t)):t.data=n[r],s+=r}}else if(8===t.nodeType)if(t.data===X){const e=t.parentNode;null!==t.previousSibling&&a!==r||(a++,e.insertBefore(rt(),t)),r=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(X,e+1));)this.parts.push({type:"node",index:-1}),s++}}else n.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const ot=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},nt=t=>-1!==t.index,rt=()=>document.createComment(""),at=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function st(t,e){const{element:{content:i},parts:o}=t,n=document.createTreeWalker(i,133,null,!1);let r=ct(o),a=o[r],s=-1,l=0;const c=[];let d=null;for(;n.nextNode();){s++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==a&&a.index===s;)a.index=null!==d?-1:a.index-l,r=ct(o,r),a=o[r]}c.forEach(t=>t.parentNode.removeChild(t))}const lt=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},ct=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(nt(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const dt=new WeakMap,ht=t=>(...e)=>{const i=t(...e);return dt.set(i,!0),i},ut=t=>"function"==typeof t&&dt.has(t),pt={},gt={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ft{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=Z?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let n,r=0,a=0,s=o.nextNode();for(;r<i.length;)if(n=i[r],nt(n)){for(;a<n.index;)a++,"TEMPLATE"===s.nodeName&&(e.push(s),o.currentNode=s.content),null===(s=o.nextNode())&&(o.currentNode=e.pop(),s=o.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return Z&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const bt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),mt=` ${X} `;class _t{constructor(t,e,i,o){this.strings=t,this.values=e,this.type=i,this.processor=o}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const r=at.exec(t);e+=null===r?t+(i?mt:Q):t.substr(0,r.index)+r[1]+r[2]+et+r[3]+X}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==bt&&(e=bt.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const vt=t=>null===t||!("object"==typeof t||"function"==typeof t),yt=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class wt{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new kt(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!yt(t))return t}let o="";for(let n=0;n<e;n++){o+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(vt(t)||!yt(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class kt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===pt||vt(t)&&t===this.value||(this.value=t,ut(t)||(this.committer.dirty=!0))}commit(){for(;ut(this.value);){const t=this.value;this.value=pt,t(this)}this.value!==pt&&this.committer.commit()}}class xt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(rt()),this.endNode=t.appendChild(rt())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=rt()),t.__insert(this.endNode=rt())}insertAfterPart(t){t.__insert(this.startNode=rt()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;ut(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=pt,t(this)}const t=this.__pendingValue;t!==pt&&(vt(t)?t!==this.value&&this.__commitText(t):t instanceof _t?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):yt(t)?this.__commitIterable(t):t===gt?(this.value=gt,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof ft&&this.value.template===e)this.value.update(t.values);else{const i=new ft(e,t.processor,this.options),o=i._clone();i.update(t.values),this.__commitNode(o),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,o=0;for(const n of t)i=e[o],void 0===i&&(i=new xt(this.options),e.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(e[o-1])),i.setValue(n),i.commit(),o++;o<e.length&&(e.length=o,this.clear(i&&i.endNode))}clear(t=this.startNode){J(this.startNode.parentNode,t.nextSibling,this.endNode)}}class St{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;ut(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=pt,t(this)}if(this.__pendingValue===pt)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=pt}}class Ot extends wt{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new Tt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Tt extends kt{}let $t=!1;(()=>{try{const t={get capture(){return $t=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class At{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;ut(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=pt,t(this)}if(this.__pendingValue===pt)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=Et(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=pt}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Et=t=>t&&($t?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Ct(t){let e=Pt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Pt.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(X);return i=e.keyString.get(o),void 0===i&&(i=new it(t,t.getTemplateElement()),e.keyString.set(o,i)),e.stringsArray.set(t.strings,i),i}const Pt=new Map,Nt=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const jt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,o){const n=e[0];if("."===n){return new Ot(t,e.slice(1),i).parts}if("@"===n)return[new At(t,e.slice(1),o.eventContext)];if("?"===n)return[new St(t,e.slice(1),i)];return new wt(t,e,i).parts}handleTextExpression(t){return new xt(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Mt=(t,...e)=>new _t(t,e,"html",jt),It=(t,e)=>`${t}--${e}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let Rt=!0;void 0===window.ShadyCSS?Rt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Rt=!1);const Vt=t=>e=>{const i=It(e.type,t);let o=Pt.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},Pt.set(i,o));let n=o.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(X);if(n=o.keyString.get(r),void 0===n){const i=e.getTemplateElement();Rt&&window.ShadyCSS.prepareTemplateDom(i,t),n=new it(e,i),o.keyString.set(r,n)}return o.stringsArray.set(e.strings,n),n},Lt=["html","svg"],Ut=new Set,zt=(t,e,i)=>{Ut.add(t);const o=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(o,t);const a=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{Lt.forEach(e=>{const i=Pt.get(It(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),st(t,i)})})})(t);const s=o.content;i?function(t,e,i=null){const{element:{content:o},parts:n}=t;if(null==i)return void o.appendChild(e);const r=document.createTreeWalker(o,133,null,!1);let a=ct(n),s=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(s=lt(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===l;){if(s>0){for(;-1!==a;)n[a].index+=s,a=ct(n,a);return}a=ct(n,a)}}(i,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){s.insertBefore(a,s.firstChild);const t=new Set;t.add(a),st(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Ht={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Ft=(t,e)=>e!==t&&(e==e||t==t),Bt={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:Ft},Dt="finalized";class Gt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const o=this._attributeNameForProperty(i,e);void 0!==o&&(this._attributeToPropertyMap.set(o,i),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Bt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Bt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Dt)||t.finalize(),this[Dt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Ft){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,o=e.converter||Ht,n="function"==typeof o?o:o.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,o=e.converter;return(o&&o.toAttribute||Ht.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Bt){const o=this.constructor,n=o._attributeNameForProperty(t,i);if(void 0!==n){const t=o._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(t);if(void 0!==o){const t=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let o=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Gt[Dt]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const qt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),Wt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Yt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Wt(t,e)}const Kt=t=>function(t){return Yt({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}(t);function Zt(t,e){return(i,o)=>{const n={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e=void 0!==o?o:i.key,r="symbol"==typeof e?Symbol():`__${e}`;n.get=function(){return void 0===this[r]&&(this[r]=this.renderRoot.querySelector(t)),this[r]}}return void 0!==o?Jt(n,i,o):Xt(n,i)}}const Jt=(t,e,i)=>{Object.defineProperty(e,i,t)},Xt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),Qt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class ee{constructor(t,e){if(e!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Qt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(t,...e)=>{const i=e.reduce((e,i,o)=>e+(t=>{if(t instanceof ee)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1],t[0]);return new ee(i,te)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const oe={};class ne extends Gt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),o=[];i.forEach(t=>o.unshift(t)),this._styles=o}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Qt){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new ee(String(e),te)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Qt?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==oe&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return oe}}ne.finalized=!0,ne.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,n=Nt.has(e),r=Rt&&11===e.nodeType&&!!e.host,a=r&&!Ut.has(o),s=a?document.createDocumentFragment():e;if(((t,e,i)=>{let o=Nt.get(e);void 0===o&&(J(e,e.firstChild),Nt.set(e,o=new xt(Object.assign({templateFactory:Ct},i))),o.appendInto(e)),o.setValue(t),o.commit()})(t,s,Object.assign({templateFactory:Vt(o)},i)),a){const t=Nt.get(s);Nt.delete(s);const i=t.value instanceof ft?t.value.template:void 0;zt(o,s,i),J(e,e.firstChild),e.appendChild(s),Nt.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)},ne.shadowRootOptions={mode:"open"};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class re{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const ae=new WeakMap,se=ht(t=>e=>{if(!(e instanceof kt)||e instanceof Tt||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:o}=i;let n=ae.get(e);void 0===n&&(o.setAttribute("class",i.strings.join(" ")),ae.set(e,n=new Set));const r=o.classList||new re(o);n.forEach(e=>{e in t||(r.remove(e),n.delete(e))});for(const e in t){const i=t[e];i!=n.has(e)&&(i?(r.add(e),n.add(e)):(r.remove(e),n.delete(e)))}"function"==typeof r.commit&&r.commit()}),le=new WeakMap,ce=ht(t=>e=>{const i=le.get(e);if(void 0===t&&e instanceof kt){if(void 0!==i||!le.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==i&&e.setValue(t);le.set(e,t)}),de=new WeakMap,he=ht(t=>e=>{if(!(e instanceof kt)||e instanceof Tt||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:o}=i.element;let n=de.get(e);void 0===n&&(o.cssText=i.strings.join(" "),de.set(e,n=new Set)),n.forEach(e=>{e in t||(n.delete(e),-1===e.indexOf("-")?o[e]=null:o.removeProperty(e))});for(const e in t)n.add(e),-1===e.indexOf("-")?o[e]=t[e]:o.setProperty(e,t[e])}),ue="ontouchstart"in window||navigator.maxTouchPoints>0;class pe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ue?"100px":"50px",height:ue?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?l(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,l(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,l(t,"action",{action:"double_tap"})):l(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",t=>{13===t.keyCode&&o(t)})}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-slider-button",pe);const ge=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-slider-button"))return t.querySelector("action-handler-slider-button");const e=document.createElement("action-handler-slider-button");return t.appendChild(e),e})();i&&i.bind(t,e)},fe=ht((t={})=>e=>{ge(e.committer.element,t)});const be="1.11.2";var me,_e,ve,ye,we;!function(t){t.TOGGLE="toggle",t.CUSTOM="custom"}(me||(me={})),function(t){t.LEFT_RIGHT="left-right",t.TOP_BOTTOM="top-bottom",t.BOTTOM_TOP="bottom-top"}(_e||(_e={})),function(t){t.SOLID="solid",t.GRADIENT="gradient",t.TRIANGLE="triangle",t.STRIPED="striped",t.CUSTOM="custom"}(ve||(ve={})),function(t){t.ABOVE_STATE="above_state",t.BELOW_STATE="below_state",t.INLINE_STATE="inline_state",t.RIGHT_TOP="right_top",t.RIGHT_BOTTOM="right_bottom"}(ye||(ye={})),function(t){t.LIGHT="light",t.SWITCH="switch",t.FAN="fan",t.COVER="cover",t.INPUT_BOOLEAN="input_boolean",t.MEDIA_PLAYER="media_player",t.CLIMATE="climate",t.LOCK="lock"}(we||(we={}));const ke={mode:me.TOGGLE,icon:"mdi:power",show:!0,show_spinner:!0,tap_action:{action:"toggle"}},xe={show:!0,use_state_color:!0,tap_action:{action:"more-info"}},Se={show:!1,position:ye.BELOW_STATE,attribute:"state",prefix:"",suffix:""},Oe={direction:_e.LEFT_RIGHT,background:ve.SOLID,use_percentage_bg_opacity:!1,use_state_color:!1,show_track:!1,toggle_on_click:!1,force_square:!1},Te=new Map([[we.LIGHT,{direction:_e.LEFT_RIGHT,background:ve.GRADIENT,use_state_color:!0,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!1,force_square:!1}],[we.FAN,{direction:_e.LEFT_RIGHT,background:ve.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!1,force_square:!1}],[we.SWITCH,{direction:_e.LEFT_RIGHT,background:ve.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!0,force_square:!1}],[we.COVER,{direction:_e.TOP_BOTTOM,background:ve.STRIPED,use_state_color:!1,use_percentage_bg_opacity:!1,toggle_on_click:!1,show_track:!1,force_square:!1,invert:!0}],[we.INPUT_BOOLEAN,{direction:_e.LEFT_RIGHT,background:ve.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!0,force_square:!1}],[we.MEDIA_PLAYER,{direction:_e.LEFT_RIGHT,background:ve.TRIANGLE,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!0,toggle_on_click:!1,force_square:!1}],[we.LOCK,{direction:_e.LEFT_RIGHT,background:ve.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,toggle_on_click:!0,force_square:!1}],[we.CLIMATE,{direction:_e.LEFT_RIGHT,background:ve.TRIANGLE,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!0,toggle_on_click:!1,force_square:!1}]]);var $e,Ae,Ee;function Ce(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");const i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Pe(t){return Math.min(1,Math.max(0,t))}function Ne(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function je(t){return Number(t)<=1?100*Number(t)+"%":t}function Me(t){return 1===t.length?"0"+t:String(t)}function Ie(t,e,i){t=Ce(t,255),e=Ce(e,255),i=Ce(i,255);const o=Math.max(t,e,i),n=Math.min(t,e,i);let r=0,a=0;const s=(o+n)/2;if(o===n)a=0,r=0;else{const l=o-n;switch(a=s>.5?l/(2-o-n):l/(o+n),o){case t:r=(e-i)/l+(e<i?6:0);break;case e:r=(i-t)/l+2;break;case i:r=(t-e)/l+4}r/=6}return{h:r,s:a,l:s}}function Re(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Ve(t,e,i){t=Ce(t,255),e=Ce(e,255),i=Ce(i,255);const o=Math.max(t,e,i),n=Math.min(t,e,i);let r=0;const a=o,s=o-n,l=0===o?0:s/o;if(o===n)r=0;else{switch(o){case t:r=(e-i)/s+(e<i?6:0);break;case e:r=(i-t)/s+2;break;case i:r=(t-e)/s+4}r/=6}return{h:r,s:l,v:a}}function Le(t,e,i,o){const n=[Me(Math.round(t).toString(16)),Me(Math.round(e).toString(16)),Me(Math.round(i).toString(16))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Ue(t,e,i){let o=1-t/255,n=1-e/255,r=1-i/255,a=Math.min(o,n,r);return 1===a?(o=0,n=0,r=0):(o=(o-a)/(1-a)*100,n=(n-a)/(1-a)*100,r=(r-a)/(1-a)*100),a*=100,{c:Math.round(o),m:Math.round(n),y:Math.round(r),k:Math.round(a)}}function ze(t){return He(t)/255}function He(t){return parseInt(t,16)}!function(t){t.COLOR_TEMP="color_temp",t.BRIGHTNESS="brightness",t.BRIGHTNESS_PCT="brightness_pct",t.HUE="hue",t.SATURATION="saturation",t.ON_OFF="onoff"}($e||($e={})),function(t){t.COLOR_TEMP="color_temp",t.BRIGHTNESS="brightness",t.HS="hs",t.ON_OFF="onoff"}(Ae||(Ae={})),function(t){t.POSITION="position",t.TILT="tilt"}(Ee||(Ee={}));const Fe={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Be(t){let e={r:0,g:0,b:0},i=1,o=null,n=null,r=null,a=!1,s=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;let e=!1;if(Fe[t])t=Fe[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=We.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=We.rgba.exec(t),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=We.hsl.exec(t),i)return{h:i[1],s:i[2],l:i[3]};if(i=We.hsla.exec(t),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=We.hsv.exec(t),i)return{h:i[1],s:i[2],v:i[3]};if(i=We.hsva.exec(t),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=We.cmyk.exec(t),i)return{c:i[1],m:i[2],y:i[3],k:i[4]};if(i=We.hex8.exec(t),i)return{r:He(i[1]),g:He(i[2]),b:He(i[3]),a:ze(i[4]),format:e?"name":"hex8"};if(i=We.hex6.exec(t),i)return{r:He(i[1]),g:He(i[2]),b:He(i[3]),format:e?"name":"hex"};if(i=We.hex4.exec(t),i)return{r:He(i[1]+i[1]),g:He(i[2]+i[2]),b:He(i[3]+i[3]),a:ze(i[4]+i[4]),format:e?"name":"hex8"};if(i=We.hex3.exec(t),i)return{r:He(i[1]+i[1]),g:He(i[2]+i[2]),b:He(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(Ye(t.r)&&Ye(t.g)&&Ye(t.b)?(e=function(t,e,i){return{r:255*Ce(t,255),g:255*Ce(e,255),b:255*Ce(i,255)}}(t.r,t.g,t.b),a=!0,s="%"===String(t.r).substr(-1)?"prgb":"rgb"):Ye(t.h)&&Ye(t.s)&&Ye(t.v)?(o=je(t.s),n=je(t.v),e=function(t,e,i){t=6*Ce(t,360),e=Ce(e,100),i=Ce(i,100);const o=Math.floor(t),n=t-o,r=i*(1-e),a=i*(1-n*e),s=i*(1-(1-n)*e),l=o%6;return{r:255*[i,a,r,r,s,i][l],g:255*[s,i,i,a,r,r][l],b:255*[r,r,s,i,i,a][l]}}(t.h,o,n),a=!0,s="hsv"):Ye(t.h)&&Ye(t.s)&&Ye(t.l)?(o=je(t.s),r=je(t.l),e=function(t,e,i){let o,n,r;if(t=Ce(t,360),e=Ce(e,100),i=Ce(i,100),0===e)n=i,r=i,o=i;else{const a=i<.5?i*(1+e):i+e-i*e,s=2*i-a;o=Re(s,a,t+1/3),n=Re(s,a,t),r=Re(s,a,t-1/3)}return{r:255*o,g:255*n,b:255*r}}(t.h,o,r),a=!0,s="hsl"):Ye(t.c)&&Ye(t.m)&&Ye(t.y)&&Ye(t.k)&&(e=function(t,e,i,o){const n=o/100;return{r:255*(1-t/100)*(1-n),g:255*(1-e/100)*(1-n),b:255*(1-i/100)*(1-n)}}(t.c,t.m,t.y,t.k),a=!0,s="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Ne(i),{ok:a,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const De="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",Ge="[\\s|\\(]+("+De+")[,|\\s]+("+De+")[,|\\s]+("+De+")\\s*\\)?",qe="[\\s|\\(]+("+De+")[,|\\s]+("+De+")[,|\\s]+("+De+")[,|\\s]+("+De+")\\s*\\)?",We={CSS_UNIT:new RegExp(De),rgb:new RegExp("rgb"+Ge),rgba:new RegExp("rgba"+qe),hsl:new RegExp("hsl"+Ge),hsla:new RegExp("hsla"+qe),hsv:new RegExp("hsv"+Ge),hsva:new RegExp("hsva"+qe),cmyk:new RegExp("cmyk"+qe),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ye(t){return"number"==typeof t?!Number.isNaN(t):We.CSS_UNIT.test(t)}class Ke{constructor(t="",e={}){if(t instanceof Ke)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;const i=Be(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){const t=this.toRgb();let e,i,o;const n=t.r/255,r=t.g/255,a=t.b/255;return e=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),i=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),o=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),.2126*e+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=Ne(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return 0===t}toHsv(){const t=Ve(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Ve(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${o}%)`:`hsva(${e}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const t=Ie(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Ie(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${o}%)`:`hsla(${e}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return Le(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,o,n){const r=[Me(Math.round(t).toString(16)),Me(Math.round(e).toString(16)),Me(Math.round(i).toString(16)),Me((a=o,Math.round(255*parseFloat(a)).toString(16)))];var a;return n&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*Ce(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*Ce(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Ue(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:i,k:o}=Ue(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${o})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t="#"+Le(this.r,this.g,this.b,!1);for(const[e,i]of Object.entries(Fe))if(t===i)return e;return!1}toString(t){const e=Boolean(t);t=t??this.format;let i=!1;const o=this.a<1&&this.a>=0;return e||!o||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),"cmyk"===t&&(i=this.toCmykString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Ke(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=Pe(e.l),new Ke(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new Ke(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=Pe(e.l),new Ke(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=Pe(e.s),new Ke(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=Pe(e.s),new Ke(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new Ke(e)}mix(t,e=50){const i=this.toRgb(),o=new Ke(t).toRgb(),n=e/100,r={r:(o.r-i.r)*n+i.r,g:(o.g-i.g)*n+i.g,b:(o.b-i.b)*n+i.b,a:(o.a-i.a)*n+i.a};return new Ke(r)}analogous(t=6,e=30){const i=this.toHsl(),o=360/e,n=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,n.push(new Ke(i));return n}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new Ke(t)}monochromatic(t=6){const e=this.toHsv(),{h:i}=e,{s:o}=e;let{v:n}=e;const r=[],a=1/t;for(;t--;)r.push(new Ke({h:i,s:o,v:n})),n=(n+a)%1;return r}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new Ke({h:(e+72)%360,s:t.s,l:t.l}),new Ke({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),i=new Ke(t).toRgb(),o=e.a+i.a*(1-e.a);return new Ke({r:(e.r*e.a+i.r*i.a*(1-e.a))/o,g:(e.g*e.a+i.g*i.a*(1-e.a))/o,b:(e.b*e.a+i.b*i.a*(1-e.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:i}=e,o=[this],n=360/t;for(let r=1;r<t;r++)o.push(new Ke({h:(i+r*n)%360,s:e.s,l:e.l}));return o}equals(t){const e=new Ke(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}function Ze(t){return Object.keys(t).map(e=>t[e]).filter(t=>"string"==typeof t)}const Je=(t,e,i)=>{if(1!==e.length)return t[e[0]]||(t[e[0]]={}),Je(t[e[0]],e.slice(1),i);t[e[0]]=i};function Xe(t){const e=r(t)||we.LIGHT,i=Te.get(e)||Oe;return K(i)}function Qe(t,e,i){const o=new Ke("rgb(255, 160, 0)"),n=new Ke("rgb(166, 209, 255)"),r=new Ke("white"),a=(t-e)/(i-e)*100;return a<50?n.mix(r,2*a).toRgbString():r.mix(o,2*(a-50)).toRgbString()}function ti(t,e,i){return(t-e)/i*100}function ei(t,e,i){const o=t*(i-e)/100+e;return Math.round(100*o)/100}class ii{constructor(t){this._sliderPrevColor="",this._config=t}set hass(t){this._hass=t}get stateObj(){return this._hass.states[this._config.entity]}get domain(){return a(this.stateObj)}get name(){var t,e;return this._config.name?this._config.name:(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)?this.stateObj.attributes.friendly_name:""}get icon(){var t,e,i;return"string"==typeof(null===(t=this._config.icon)||void 0===t?void 0:t.icon)&&(null===(e=this._config.icon)||void 0===e?void 0:e.icon.length)?this._config.icon.icon:(null===(i=this.stateObj.attributes)||void 0===i?void 0:i.icon)?this.stateObj.attributes.icon:d(this.domain,this.stateObj.state)}get value(){if(this._value){const t=Math.round(this._value/this.step)*this.step;return Math.round(100*t)/100}return this.min}set value(t){t!==this.value&&(this._value=t)}get targetValue(){if(0===this._targetValue)return 0;if(this._targetValue){const t=Math.round(this._targetValue/this.step)*this.step;return Math.round(100*t)/100}return this.value?this.value:0}set targetValue(t){t!==this.targetValue&&(this._targetValue=t)}get label(){return`${this.targetValue}`}get hidden(){return!1}get hasSlider(){return!0}get hasToggle(){var t,e;return null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.toggle_on_click)&&void 0!==e&&e}get toggleValue(){return this.value===this.min?this.max:this.min}get state(){var t;return null===(t=this.stateObj)||void 0===t?void 0:t.state}get isOff(){return 0===this.percentage}get isUnavailable(){return!this.state||"unavailable"===this.state}get isSliderDisabled(){return this.isUnavailable?this.isUnavailable:this.hasToggle}get min(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.min)&&void 0!==e?e:this._min)&&void 0!==i?i:0}get max(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.max)&&void 0!==e?e:this._max)&&void 0!==i?i:100}get step(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.step)&&void 0!==e?e:this._step)&&void 0!==i?i:5}get invert(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.invert)&&void 0!==e?e:this._invert)&&void 0!==i&&i}get isValuePercentage(){return!0}get percentage(){return Math.round(100*(this.targetValue-(this.invert?this.max:this.min))/(this.max-this.min)*(this.invert?-1:1))}get valueFromPercentage(){return ei(this.percentage,this.min,this.max)}get allowedAttributes(){return[]}get style(){return{icon:{filter:this.iconFilter,color:this.iconColor,rotateSpeed:this.iconRotateSpeed},slider:{filter:this.sliderFilter,color:this.sliderColor}}}get iconFilter(){var t;return(null===(t=this._config.icon)||void 0===t?void 0:t.use_state_color)&&0!==this.percentage?`brightness(${(this.percentage+100)/2}%)`:"brightness(100%)"}get iconColor(){var t;if(null===(t=this._config.icon)||void 0===t?void 0:t.use_state_color){if(!this.stateObj.attributes.hs_color)return this.percentage>0?"var(--paper-item-icon-active-color, #fdd835)":"var(--paper-item-icon-color, #44739e)";{const[t,e]=this.stateObj.attributes.hs_color;if(e>10)return`hsl(${t}, 100%, ${100-e/2}%)`}}return""}get iconRotateSpeed(){return"0s"}get sliderFilter(){var t;return(null===(t=this._config.slider)||void 0===t?void 0:t.use_percentage_bg_opacity)&&0!==this.percentage&&this._config.slider.background!==ve.GRADIENT?`brightness(${(this.percentage+100)/2}%)`:"brightness(100%)"}get sliderColor(){var t,e;if(null===(t=this._config.slider)||void 0===t?void 0:t.use_state_color)if(this.stateObj.attributes.hs_color){const[t,e]=this.stateObj.attributes.hs_color;if(e>10){const i=`hsl(${t}, 100%, ${100-e/2}%)`;return this._sliderPrevColor=i,i}}else{if(this.stateObj.attributes.color_temp&&this.stateObj.attributes.min_mireds&&this.stateObj.attributes.max_mireds){const t=Qe(this.stateObj.attributes.color_temp,this.stateObj.attributes.min_mireds,this.stateObj.attributes.max_mireds);return this._sliderPrevColor=t,t}if(this._sliderPrevColor.startsWith("hsl")||this._sliderPrevColor.startsWith("rgb"))return this._sliderPrevColor}return(null===(e=this._config.slider)||void 0===e?void 0:e.color)||"var(--primary-color, #03a9f4)"}moveSlider(t,{left:e,top:i,width:o,height:n}){let r=this.calcMovementPercentage(t,{left:e,top:i,width:o,height:n});var a,s,l;return r=this.applyStep(r),a=r,s=0,l=100,r=isNaN(a)||isNaN(s)||isNaN(l)?0:a>l?l:a<s?s:a,this.isValuePercentage?r:ei(r,this.min,this.max)}calcMovementPercentage(t,{left:e,top:i,width:o,height:n}){var r;let a;switch(null===(r=this._config.slider)||void 0===r?void 0:r.direction){case _e.LEFT_RIGHT:a=ti(t.clientX,e,o),this.invert&&(a=100-a);break;case _e.TOP_BOTTOM:a=ti(t.clientY,i,n),this.invert&&(a=100-a);break;case _e.BOTTOM_TOP:a=ti(t.clientY,i,n),this.invert||(a=100-a)}return a}applyStep(t){const e=Math.round(t/this.step)*this.step;return Math.round(100*e)/100}log(t="",e=""){this._config.debug&&console.log(`${this._config.entity}: ${t}`,e)}}class oi extends ii{constructor(){super(...arguments),this._invert=!1}get _value(){return this.stateObj.attributes.temperature}set _value(t){this._hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:t})}get isOff(){return s.includes(this.state)}get _step(){var t,e;return void 0!==(null===(t=this._config.slider)||void 0===t?void 0:t.step)?this._config.slider.step:(null===(e=this.stateObj.attributes)||void 0===e?void 0:e.target_temp_step)||1}get _min(){var t;return(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.min_temp)||7}get _max(){var t;return(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.max_temp)||35}get isValuePercentage(){return!1}get label(){const t=this._hass.config.unit_system.temperature,e=(i=this.state)&&i[0].toUpperCase()+i.slice(1)||"";var i;return`${this.targetValue}${t} | ${e}`}}class ni extends ii{constructor(){super(...arguments),this._min=0,this._invert=!0}get attribute(){var t,e,i,o;return(null===(e=null===(t=this._config.slider)||void 0===t?void 0:t.attribute)||void 0===e?void 0:e.length)&&this.allowedAttributes.includes(null===(i=this._config.slider)||void 0===i?void 0:i.attribute)?null===(o=this._config.slider)||void 0===o?void 0:o.attribute:Ee.POSITION}get icon(){var t,e;return"string"==typeof(null===(t=this._config.icon)||void 0===t?void 0:t.icon)&&(null===(e=this._config.icon)||void 0===e?void 0:e.icon.length)?this._config.icon.icon:m(this.stateObj)}get allowedAttributes(){return Ze(Ee)}get _value(){var t;switch(this.attribute){case Ee.POSITION:return"closed"===(null===(t=this.stateObj)||void 0===t?void 0:t.state)?0:this.stateObj.attributes.current_position;case Ee.TILT:return this.stateObj.attributes.current_tilt_position;default:return 0}}set _value(t){if(this.hasSlider)switch(this.attribute){case Ee.POSITION:this._hass.callService("cover","set_cover_position",{entity_id:this.stateObj.entity_id,position:t});break;case Ee.TILT:this._hass.callService("cover","set_cover_tilt_position",{entity_id:this.stateObj.entity_id,tilt_position:t})}else{const e=t>0?"open_cover":"close_cover";this._hass.callService("cover",e,{entity_id:this.stateObj.entity_id})}}get _step(){return 1}get label(){const t=this._hass.localize(`component.cover.state._.${this.state}`),e=this._hass.localize("component.cover.state._.closed"),i=this._hass.localize("component.cover.state._.open");if(!this.hasSlider)return t;switch(this.attribute){case Ee.POSITION:return 0===this.percentage?this.invert?i:e:100===this.percentage?this.invert?e:i:`${this.percentage}%`;case Ee.TILT:return`${this.percentage}`}return t}get hasSlider(){switch(this.attribute){case Ee.POSITION:if("current_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&4&this.stateObj.attributes.supported_features)return!0;break;case Ee.TILT:if("current_tilt_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&128&this.stateObj.attributes.supported_features)return!0;break;default:return!1}return!1}get _max(){return this.hasSlider?100:1}}class ri extends ii{constructor(){super(...arguments),this._min=0,this._invert=!1}get _value(){return this.isUnavailable||s.includes(this.state)?0:this.hasSlider?this.stateObj.attributes.percentage:1}set _value(t){const e=t>0?"turn_on":"turn_off";t>0&&this.hasSlider?this._hass.callService("fan","set_percentage",{entity_id:this.stateObj.entity_id,percentage:t}):this._hass.callService("fan",e,{entity_id:this.stateObj.entity_id})}get _step(){return this.stateObj.attributes.percentage_step||1}get label(){return this.percentage>0?this.hasSlider?`${this.percentage}%`:this._hass.localize("component.fan.state._.on"):this._hass.localize("component.fan.state._.off")}get hasSlider(){return"percentage"in this.stateObj.attributes||"speed"in this.stateObj.attributes}get _max(){return this.hasSlider?100:1}get iconRotateSpeed(){let t=0;return this.percentage>0&&(t=3-this.percentage/100*2),`${t}s`}}class ai extends ii{constructor(){super(...arguments),this._min=0,this._max=1,this._invert=!1}get _value(){return s.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"turn_on":"turn_off";this._hass.callService("input_boolean",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.input_boolean.state._.on"):this._hass.localize("component.input_boolean.state._.off")}}const si={hue:0,saturation:1};class li extends ii{constructor(){super(...arguments),this._step=1,this._invert=!1}get attribute(){var t,e,i,o,n;const r=null===(t=this._config.slider)||void 0===t?void 0:t.attribute;let a=$e.BRIGHTNESS_PCT,s=[];if(Array.isArray(null===(i=null===(e=this.stateObj)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.supported_color_modes)&&(s=null===(n=null===(o=this.stateObj)||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.supported_color_modes),1===s.length&&s[0]===$e.ON_OFF&&(a=$e.ON_OFF),(null==r?void 0:r.length)&&this.allowedAttributes.includes(r))switch(a=r,r){case $e.COLOR_TEMP:s.includes("color_temp")||(a=$e.BRIGHTNESS_PCT);break;case $e.HUE:case $e.SATURATION:s.includes("hs")||(a=$e.BRIGHTNESS_PCT)}return a}get allowedAttributes(){return Ze($e)}get colorMode(){var t,e;return null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.color_mode}get _value(){if(!this.stateObj||s.includes(this.state))return this.isValuePercentage?0:this.min;const t=this.stateObj.attributes;switch(this.attribute){case $e.COLOR_TEMP:return t.color_temp?Math.round(t.color_temp):this.min;case $e.BRIGHTNESS:return Math.round(t.brightness);case $e.BRIGHTNESS_PCT:return Math.round(100*t.brightness/255);case $e.ON_OFF:return 1;case $e.HUE:case $e.SATURATION:return t.hs_color?Math.round(t.hs_color[si[this.attribute]]):0;default:return 0}}set _value(t){if(!this.stateObj)return;let e,i=this.attribute,o=t>0?"turn_on":"turn_off",n={entity_id:this.stateObj.entity_id};switch(i){case $e.BRIGHTNESS:case $e.BRIGHTNESS_PCT:(t=i===$e.BRIGHTNESS?Math.round(t):Math.round(t/100*255))?(i="brightness",n=Object.assign(Object.assign({},n),{[i]:t})):o="turn_off";break;case $e.HUE:case $e.SATURATION:e=this.stateObj.attributes.hs_color||[0,0],e[si[i]]=t,t=e,i="hs_color",o="turn_on",n=Object.assign(Object.assign({},n),{[i]:t});break;case $e.COLOR_TEMP:i="color_temp",o="turn_on",n=Object.assign(Object.assign({},n),{[i]:t})}this._hass.callService("light",o,Object.assign({},n))}get _min(){var t;return this.attribute===$e.COLOR_TEMP?this.stateObj&&(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.min_mireds)?this.stateObj.attributes.min_mireds:153:0}get _max(){var t;switch(this.attribute){case $e.COLOR_TEMP:return this.stateObj&&(null===(t=this.stateObj.attributes)||void 0===t?void 0:t.max_mireds)?this.stateObj.attributes.max_mireds:500;case $e.BRIGHTNESS:return 255;case $e.HUE:return 360;case $e.ON_OFF:return 1;default:return 100}}get isValuePercentage(){switch(this.attribute){case $e.COLOR_TEMP:case $e.HUE:case $e.BRIGHTNESS:return!1;default:return!0}}get isOff(){switch(this.attribute){case $e.COLOR_TEMP:case $e.HUE:case $e.SATURATION:case $e.BRIGHTNESS:case $e.ON_OFF:return s.includes(this.state);default:return this.colorMode===Ae.ON_OFF?s.includes(this.state):0===this.percentage}}get label(){if(this.isOff)return this._hass.localize("component.light.state._.off");if(this.colorMode===Ae.ON_OFF)return this._hass.localize("component.light.state._.on");switch(this.attribute){case $e.ON_OFF:return this._hass.localize("component.light.state._.on");case $e.COLOR_TEMP:case $e.BRIGHTNESS:return`${this.targetValue}`;case $e.BRIGHTNESS_PCT:case $e.SATURATION:return`${this.targetValue}%`;case $e.HUE:return`${this.targetValue}°`;default:return`${this.targetValue}`}}get hasToggle(){var t,e,i,o,n,r;let a=[];return Array.isArray(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.supported_color_modes)&&(a=null===(o=null===(i=this.stateObj)||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.supported_color_modes),1===a.length&&a[0]===$e.ON_OFF||null!==(r=null===(n=this._config.slider)||void 0===n?void 0:n.toggle_on_click)&&void 0!==r&&r}get hasSlider(){var t,e;if(!this.stateObj)return!1;switch(this.attribute){case $e.ON_OFF:return!1;case $e.BRIGHTNESS:case $e.BRIGHTNESS_PCT:return"brightness"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&1&(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.supported_features));case $e.COLOR_TEMP:return"color_temp"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&2&this.stateObj.attributes.supported_features);case $e.HUE:case $e.SATURATION:return"hs_color"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&16&this.stateObj.attributes.supported_features);default:return!1}}get sliderColor(){var t;let e="inherit";if(null===(t=this._config.slider)||void 0===t?void 0:t.use_state_color)if(this.stateObj.attributes.hs_color&&this.attribute!==$e.COLOR_TEMP){const[t,i]=this.stateObj.attributes.hs_color;let o=t,n=i;switch(this.attribute){case $e.HUE:o=this.valueFromPercentage;break;case $e.SATURATION:n=this.percentage}n>10&&(e=`hsl(${o}, 100%, ${100-n/2}%)`,this._sliderPrevColor=e)}else if(this.attribute===$e.HUE||this.attribute===$e.SATURATION){let t=0,i=20;switch(this.attribute){case $e.HUE:t=this.valueFromPercentage;break;case $e.SATURATION:i=this.percentage}i>10&&(e=`hsl(${t}, 100%, ${100-i/2}%)`,this._sliderPrevColor=e)}else this.stateObj.attributes.color_temp&&this.stateObj.attributes.min_mireds&&this.stateObj.attributes.max_mireds?(e=Qe(this.attribute===$e.COLOR_TEMP?this.valueFromPercentage:this.stateObj.attributes.color_temp,this.stateObj.attributes.min_mireds,this.stateObj.attributes.max_mireds),this._sliderPrevColor=e):this.attribute===$e.COLOR_TEMP?(e=Qe(this.valueFromPercentage,153,500),this._sliderPrevColor=e):(this._sliderPrevColor.startsWith("hsl")||this._sliderPrevColor.startsWith("rgb"))&&(e=this._sliderPrevColor);return e}}class ci extends ii{constructor(){super(...arguments),this._min=0,this._max=1,this._invert=!1}get _value(){return s.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"lock":"unlock";this._hass.callService("lock",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.lock.state._.unlocked"):this._hass.localize("component.lock.state._.locked")}}class di extends ii{constructor(){super(...arguments),this._min=0,this._max=100,this._step=1,this._invert=!1}get _value(){var t,e;return this.isUnavailable||(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.is_volume_muted)?0:Math.floor(100*parseFloat(Number.parseFloat(this.stateObj.attributes.volume_level).toPrecision(2)))}set _value(t){t/=100,this._hass.callService("media_player","volume_set",{entity_id:this.stateObj.entity_id,volume_level:t}),t&&this._hass.callService("media_player","volume_mute",{entity_id:this.stateObj.entity_id,is_volume_muted:!1})}get isOff(){return"off"===this.stateObj.state}get label(){return this.stateObj.attributes.is_volume_muted?"-":this.stateObj.attributes.volume_level?`${this.percentage}%`:this._hass.localize(`component.media_player.state._.${this.state}`)}}class hi extends ii{constructor(){super(...arguments),this._min=0,this._max=1,this._invert=!1}get _value(){return s.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"turn_on":"turn_off";this._hass.callService("switch",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.switch.state._.on"):this._hass.localize("component.switch.state._.off")}}class ui{static getInstance(t){const e=r(t.entity),i={[we.LIGHT]:li,[we.FAN]:ri,[we.SWITCH]:hi,[we.COVER]:ni,[we.INPUT_BOOLEAN]:ai,[we.MEDIA_PLAYER]:di,[we.CLIMATE]:oi,[we.LOCK]:ci};if(void 0===i[e])throw new Error(`Unsupported entity type: ${e}`);return new i[e](t)}}var pi={version:"v",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},gi={general:{title:"General",entity:"Entity (Required)",name:"Name (Optional)",show_name:"Show name?",show_state:"Show state?",compact:"Compact?"},icon:{title:"Icon",icon:"Icon (Optional)",show_icon:"Show icon?",use_state_color:"Use state color?",tap_action:"Tap action"},slider:{title:"Slider",direction:"Direction",background:"Background",use_brightness:"Use brightness?",show_track:"Show track?",toggle_on_click:"Act as a toggle (disable sliding)",force_square:"Force square?"},action_button:{title:"Action button",mode:"Mode",icon:"Icon",show_button:"Show button?",show_spinner:"Show spinner?",tap_action:"Tap action"},additional_entity:{title:"Additional Entity",show:"Show additional entity?",entity:"Additional Entity",attribute:"Attribute (default: state)",prefix:"Prefix",suffix:"Suffix",position:"Position",positions:{above_state:"Above state",below_state:"Below state",inline_state:"Inline with state",right_top:"Right side (top)",right_bottom:"Right side (bottom)"}}},fi={off:"Off",on:"On"},bi={"left-right":"Left to right","top-bottom":"Top to bottom","bottom-top":"Bottom to top"},mi={striped:"Striped",gradient:"Gradient",solid:"Solid",triangle:"Triangle",custom:"Custom"},_i={toggle:"Toggle",custom:"Custom"},vi={above_state:"Above state",below_state:"Below state",inline_state:"Inline with state"},yi={common:pi,tabs:gi,state:fi,direction:bi,background:mi,mode:_i,additional_entity_position:vi},wi={version:"v",invalid_configuration:"Ungültige Konfiguration",show_warning:"Zeige Warnung",show_error:"Zeige Fehler"},ki={general:{title:"Allgemein",entity:"Entiät (vorgeschrieben)",name:"Name (optional)",show_name:"Namen zeigen?",show_state:"Zustand zeigen?",compact:"Kompakt?"},icon:{title:"Icon",icon:"Icon (optional)",show_icon:"Icon zeigen?",use_state_color:"Zustandsfarbe verwenden?",tap_action:"Tap action"},slider:{title:"Schieberegler",direction:"Richtung",background:"Hintergrund",use_brightness:"Helligkeit benutzen?",show_track:"Spur anzeigen?",toggle_on_click:"Als Schalter benutzen (schieben deaktivieren)",force_square:"Quadrat erzwingen?"},action_button:{title:"Action-Knopf",mode:"Modus",icon:"Icon",show_button:"Knopf zeigen?",show_spinner:"Spinner anzeigen?",tap_action:"Tap action"}},xi={off:"Aus",on:"An"},Si={"left-right":"Links nach Rechts","top-bottom":"Oben nach Unten","bottom-top":"Unten nach Oben"},Oi={striped:"gestreift",gradient:"Farbverlauf",solid:"Einfarbig",triangle:"Dreieck",custom:"benuzerdefiniert"},Ti={toggle:"Umschalter",custom:"benuzerdefiniert"},$i={common:wi,tabs:ki,state:xi,direction:Si,background:Oi,mode:Ti},Ai={version:"v",invalid_configuration:"Configuration incorrecte",show_warning:"Afficher les avertissement",show_error:"Afficher les erreurs"},Ei={general:{title:"Général",entity:"Entité (Obligatoire)",name:"Nom (Optionnel)",show_name:"Afficher le nom ?",show_state:"Afficher l'état ?",compact:"Compact ?"},icon:{title:"Icône",icon:"Icône (Optionnel)",show_icon:"Afficher l'icône ?",use_state_color:"Afficher la couleur d'état?",tap_action:"Action"},slider:{title:"Curseur",direction:"Direction",background:"Fond",use_brightness:"Utiliser la luminosité ?",show_track:"Afficher le chemin ?",toggle_on_click:"Agir comme un bouton (désactive le curseur)",force_square:"Forcer carré ?"},action_button:{title:"Bouton d'action",mode:"Mode",icon:"Icône",show_button:"Afficher le bouton ?",show_spinner:"Afficher spinner ?",tap_action:"Action"}},Ci={off:"Inactif",on:"Actif"},Pi={"left-right":"gauche à droite","top-bottom":"haut à bas","bottom-top":"Bas à haut"},Ni={striped:"Rayures",gradient:"Dégradé",solid:"Uni",triangle:"Triangle",custom:"Personnalisé"},ji={toggle:"Bascule",custom:"Personnalisé"},Mi={common:Ai,tabs:Ei,state:Ci,direction:Pi,background:Ni,mode:ji},Ii={version:"v",invalid_configuration:"תצורה לא חוקית",show_warning:"הצג אזהרה",show_error:"הצג שגיאה"},Ri={general:{title:"כללי",entity:"ישיות (נדרש)",name:"שם (אופציונלי)",show_name:"להציג שם?",show_state:"להציג מצב?",compact:"קוֹמפָּקטִי?"},icon:{title:"סמליל",icon:"סמליל (אופציונלי)",show_icon:"להציג סמליל?",use_state_color:"להשתמש בצבע מצב?",tap_action:"פעולה בהקשה"},slider:{title:"גלילה",direction:"כיוון",background:"רקע",use_brightness:"להשתמש בבהירות?",show_track:"להציג מסלול?",toggle_on_click:"פעל כמתג (השבת החלקה)",force_square:"כוח מרובע?"},action_button:{title:"כפתור פעולה",mode:"מצב",icon:"סמליל",show_button:"להציג כפתור?",show_spinner:"להציג ספינר?",tap_action:"פעולה בהקשה"}},Vi={off:"כבוי",on:"פועל"},Li={"left-right":"שמאל לימין","top-bottom":"מלמעלה למטה","bottom-top":"מלמטה למעלה"},Ui={striped:"מפוספס",gradient:"שיפוע",solid:"מוצק",triangle:"משולש",custom:"מותאם אישית"},zi={toggle:"החלפה",custom:"מותאם אישית"},Hi={common:Ii,tabs:Ri,state:Vi,direction:Li,background:Ui,mode:zi},Fi={version:"v",invalid_configuration:"Ongeldige configuratie",show_warning:"Toon waarschuwing",show_error:"Toon fout"},Bi={general:{title:"Algemeen",entity:"Entiteit (Verplicht)",name:"Naam (Optioneel)",show_name:"Toon naam?",show_state:"Toon status?",compact:"Compact?"},icon:{title:"Icoon",icon:"Icoon (Optioneel)",show_icon:"Toon icoon?",use_state_color:"Gebruik status kleur?",tap_action:"Tap actie"},slider:{title:"Schuifregelaar",direction:"Richting",background:"Actergrond",use_brightness:"Gebruik helderheid?",show_track:"Toon spoor?",toggle_on_click:"Fungeren als een schakelaar (schuiven uitschakelen)",force_square:"Forceer vierkant?"},action_button:{title:"Actie button",mode:"Modus",icon:"Icoon",show_button:"Toon button?",show_spinner:"Toon spinner?",tap_action:"Tap actie"}},Di={off:"Uit",on:"Aan"},Gi={"left-right":"Links naar rechts","top-bottom":"Boven naar onder","bottom-top":"Onder naar boven"},qi={striped:"Gestreept",gradient:"Verloop",solid:"Vast",triangle:"Driehoek",custom:"Aangepast"},Wi={toggle:"Schakelaar",custom:"Aangepast"},Yi={common:Fi,tabs:Bi,state:Di,direction:Gi,background:qi,mode:Wi},Ki={version:"v",invalid_configuration:"Nieprawidłowa konfiguracja",show_warning:"Pokaż ostrzeżenia",show_error:"Pokaż błędy"},Zi={general:{title:"Ogólne",entity:"Encja (Wymagana)",name:"Nazwa (Opcjonalna)",show_name:"Pokazać nazwę?",show_state:"Pokazać stan?",compact:"Kompaktowy?"},icon:{title:"Ikona",icon:"Ikona (Opcjonalna)",show_icon:"Pokazać ikonę?",use_state_color:"Uzyć kolor stanu?",tap_action:"Akcja kliknięcia"},slider:{title:"Suwak",direction:"Kierunek",background:"Tło",use_brightness:"Użyć jasności?",show_track:"Pokazać ślad?",toggle_on_click:"Działaj jako przełącznik (wyłącz przesuwanie)",force_square:"Wymusić kwadrat?"},action_button:{title:"Przycisk akcji",mode:"Tryb",icon:"Ikona",show_button:"Pokazać przycisk?",show_spinner:"Pokazać spinner?",tap_action:"Akcja kliknięcia"}},Ji={off:"Wyłączony",on:"Włączony"},Xi={"left-right":"Z lewej do prawej","top-bottom":"Z góry na dół","bottom-top":"Z dołu do góry"},Qi={striped:"W paski",gradient:"Gradient",solid:"Pełne tło",triangle:"Trójkąt",custom:"Ustawienia własne"},to={toggle:"Przełącznik",custom:"Ustawienia własne"},eo={common:Ki,tabs:Zi,state:Ji,direction:Xi,background:Qi,mode:to},io={version:"v",invalid_configuration:"Configuração Inválida",show_warning:"Mostrar Aviso",show_error:"Mostrar Erro"},oo={general:{title:"Geral",entity:"Entidade (Obrigatório)",name:"Nome (Opcional)",show_name:"Mostrar Nome?",show_state:"Mostrar Estado?",compact:"Compactar?"},icon:{title:"Ícone",icon:"Ícone (Opcional)",show_icon:"Mostrar Ícone?",use_state_color:"Usar Cor de Estado?",tap_action:"Ação de Toque"},slider:{title:"Slider",direction:"Direção",background:"Fundo",use_brightness:"Usar Brilho?",show_track:"Mostrar Acompanhamento?",toggle_on_click:"Atua como um alternador (desative o deslizamento)",force_square:"Forçar Quadrado?"},action_button:{title:"Botão de Ação",mode:"Modo",icon:"Ícone",show_button:"Mostrar Botão?",show_spinner:"Mostrar Spinner?",tap_action:"Ação de Toque"}},no={off:"Desligar",on:"Ligar"},ro={"left-right":"Esquerda para a Direita","top-bottom":"De Cima para Baixo","bottom-top":"De Baixo para Cima"},ao={striped:"Listrado",gradient:"Gradiente",solid:"Sólido",triangle:"Triângulo",custom:"Personalizado"},so={toggle:"Alternancia",custom:"Personalizado"},lo={common:io,tabs:oo,state:no,direction:ro,background:ao,mode:so},co={version:"v",invalid_configuration:"Неверная конфигурация",show_warning:"Показать предупреждения",show_error:"Показать ошибки"},ho={general:{title:"Общие",entity:"Объект (обязательно)",name:"Имя (Опционально)",show_name:"Отображать имя?",show_state:"Отображать статус?",compact:"Компактный?"},icon:{title:"Иконка",icon:"Иконка (Опционально)",show_icon:"Показать иконку?",use_state_color:"Использовать цвет статуса?",tap_action:"Действие по нажатию"},slider:{title:"Слайдер",direction:"Направление",background:"Фон",use_brightness:"Использовать яркость?",show_track:"Показать трек?",toggle_on_click:"Действовать как переключатель (отключить скольжение)",force_square:"Отображать квадратным?"},action_button:{title:"Кнопка действия",mode:"Режим",icon:"Иконка",show_button:"Отобразить кнопку?",show_spinner:"Отобразить спиннер?",tap_action:"Действие по нажатию"}},uo={off:"Выкл",on:"Вкл"},po={"left-right":"Слева направо","top-bottom":"Сверху вниз","bottom-top":"Снизу вверх"},go={striped:"Полосатый",gradient:"Градиент",solid:"Сплошной цвет",triangle:"Треугольник",custom:"Свои настройки"},fo={toggle:"Переключатель",custom:"Свои настройки"},bo={common:co,tabs:ho,state:uo,direction:po,background:go,mode:fo},mo={version:"v",invalid_configuration:"유효하지 않은 설정입니다",show_warning:"경고 표시",show_error:"에러 표시"},_o={general:{title:"일반",entity:"구성 요소 (필수)",name:"이름 (옵션)",show_name:"이름 표시",show_state:"상태 표시",compact:"슬림 모드"},icon:{title:"아이콘",icon:"아이콘 (옵션)",show_icon:"아이콘 표시",use_state_color:"상태 색상 사용",tap_action:"탭 액션"},slider:{title:"슬라이더",direction:"방향 지정",background:"배경",use_brightness:"밝기 사용",show_track:"범위 표시",toggle_on_click:"토글 버튼으로 동작(슬라이더 비활성화)",force_square:"정사각형 모양으로 고정"},action_button:{title:"액션 버튼",mode:"모드",icon:"아이콘",show_button:"버튼 표시",show_spinner:"로딩 스피너 표시",tap_action:"탭 액셥"}},vo={off:"꺼짐",on:"켜짐"},yo={"left-right":"왼쪽에서 오른쪽","top-bottom":"위에서 아래","bottom-top":"아래에서 위"},wo={striped:"줄무늬",gradient:"그레디언트",solid:"단색",triangle:"삼각형",custom:"커스텀"},ko={toggle:"토글 모드",custom:"커스텀 모드"},xo={common:mo,tabs:_o,state:vo,direction:yo,background:wo,mode:ko};const So={en:Object.freeze({__proto__:null,common:pi,tabs:gi,state:fi,direction:bi,background:mi,mode:_i,additional_entity_position:vi,default:yi}),de:Object.freeze({__proto__:null,common:wi,tabs:ki,state:xi,direction:Si,background:Oi,mode:Ti,default:$i}),fr:Object.freeze({__proto__:null,common:Ai,tabs:Ei,state:Ci,direction:Pi,background:Ni,mode:ji,default:Mi}),he:Object.freeze({__proto__:null,common:Ii,tabs:Ri,state:Vi,direction:Li,background:Ui,mode:zi,default:Hi}),nl:Object.freeze({__proto__:null,common:Fi,tabs:Bi,state:Di,direction:Gi,background:qi,mode:Wi,default:Yi}),pl:Object.freeze({__proto__:null,common:Ki,tabs:Zi,state:Ji,direction:Xi,background:Qi,mode:to,default:eo}),pt:Object.freeze({__proto__:null,common:io,tabs:oo,state:no,direction:ro,background:ao,mode:so,default:lo}),ru:Object.freeze({__proto__:null,common:co,tabs:ho,state:uo,direction:po,background:go,mode:fo,default:bo}),ko:Object.freeze({__proto__:null,common:mo,tabs:_o,state:vo,direction:yo,background:wo,mode:ko,default:xo})};function Oo(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce((t,e)=>t[e],So[o])}catch(e){n=t.split(".").reduce((t,e)=>t[e],So.en)}return void 0===n&&(n=t.split(".").reduce((t,e)=>t[e],So.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}let To=class extends ne{constructor(){super(...arguments),this._initialized=!1,this.directions=Ze(_e),this.backgrounds=Ze(ve),this.actionModes=Ze(me),this.additionalEntityPositions=Ze(ye),this.actions=["more-info","toggle","navigate","url","call-service","none"]}async setConfig(t){this._config=t,void 0===this._helpers&&await this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _show_name(){var t,e;return void 0===(null===(t=this._config)||void 0===t?void 0:t.show_name)||(null===(e=this._config)||void 0===e?void 0:e.show_name)}get _show_state(){var t,e;return void 0===(null===(t=this._config)||void 0===t?void 0:t.show_state)||(null===(e=this._config)||void 0===e?void 0:e.show_state)}get _compact(){var t,e;return"boolean"==typeof(null===(t=this._config)||void 0===t?void 0:t.compact)&&(null===(e=this._config)||void 0===e?void 0:e.compact)}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.icon)||xe}get _slider(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slider)||Oe}get _action_button(){var t;return(null===(t=this._config)||void 0===t?void 0:t.action_button)||ke}get _additional_entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.additional_entity)||Se}render(){var t,e;return this.hass&&this._helpers?(console.log("🎛️ Editor rendering with additional entity config:",this._additional_entity),this._helpers.importMoreInfoControl("climate"),Mt`
      <div class="card-config">
        <div class="tabs">
          <div class="tab">
            <input type="checkbox" id="entity" class="tab-checkbox">
            <label class="tab-label" for="entity">${Oo("tabs.general.title")}</label>
            <div class="tab-content">
              <ha-entity-picker
                .hass=${this.hass}
                .includeDomains=${Ze(we)}
                .value=${this._entity}
                .configValue=${"entity"}
                label="${Oo("tabs.general.entity")}"
                allow-custom-entity
                @value-changed=${this._valueChangedEntity}
              ></ha-entity-picker>
              <paper-input
                label="${Oo("tabs.general.name")}"
                .value=${this._name}
                .placeholder=${this._name||(null===(e=null===(t=this.hass.states[this._entity])||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)}
                .configValue=${"name"}
                @value-changed=${this._valueChanged}
              ></paper-input>
              <div class="side-by-side">
                <ha-formfield .label=${Oo("tabs.general.show_name")}>
                  <ha-switch
                    .checked=${this._show_name}
                    .configValue=${"show_name"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${Oo("tabs.general.show_state")}>
                  <ha-switch
                    .checked=${this._show_state}
                    .configValue=${"show_state"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${Oo("tabs.general.compact")}>
                  <ha-switch
                    .checked=${this._compact}
                    .configValue=${"compact"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="icon" class="tab-checkbox">
            <label class="tab-label" for="icon">${Oo("tabs.icon.title")}</label>
            <div class="tab-content">
              <ha-icon-input
              label="${Oo("tabs.icon.icon")}"
              .value=${this._icon.icon}
              .placeholder=${this._icon.icon||m(this.hass.states[this._entity])}
              .configValue=${"icon.icon"}
              @value-changed=${this._valueChanged}
              >
              </ha-icon-input>
              <div class="side-by-side">
                <ha-formfield label="${Oo("tabs.icon.show_icon")}">
                  <ha-switch
                    .checked=${this._icon.show}
                    .configValue=${"icon.show"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                ${this.renderStateColor("icon")}
              </div>
              <hui-action-editor
                label="${Oo("tabs.icon.tap_action")}"
                .hass=${this.hass}
                .config=${this._icon.tap_action}
                .actions=${this.actions}
                .configValue=${"icon.tap_action"}
                @value-changed=${this._valueChanged}
              ></hui-action-editor>
            </div>
          </div>
          
          <div class="tab">
            <input type="checkbox" id="slider" class="tab-checkbox">
            <label class="tab-label" for="slider">${Oo("tabs.slider.title")}</label>
            <div class="tab-content">
              <div class="side-by-side">
                <paper-dropdown-menu
                  label="${Oo("tabs.slider.direction")}"
                >
                  <paper-listbox 
                    slot="dropdown-content" 
                    attr-for-selected="item-value"
                    .configValue=${"slider.direction"}
                    @selected-item-changed=${this._valueChangedSelect}
                    .selected=${this._slider.direction}
                  >
                    ${this.directions.map(t=>Mt`
                        <paper-item .itemValue=${t}>${Oo(`direction.${t}`)}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu
                  label="${Oo("tabs.slider.background")}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-value"
                    .configValue=${"slider.background"}
                    @selected-item-changed=${this._valueChangedSelect}
                    .selected=${this._slider.background}
                  >
                    ${this.backgrounds.map(t=>Mt`
                        <paper-item .itemValue=${t}>${Oo(`background.${t}`)}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>

              </div>
              <div class="side-by-side">
                ${this.renderBrightness("slider")}
                ${this.renderStateColor("slider")}
                <ha-formfield .label=${Oo("tabs.slider.show_track")}>
                  <ha-switch
                    .checked=${this._slider.show_track}
                    .configValue=${"slider.show_track"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${Oo("tabs.slider.toggle_on_click")}>
                  <ha-switch
                    .checked=${this._slider.toggle_on_click}
                    .configValue=${"slider.toggle_on_click"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${Oo("tabs.slider.force_square")}>
                  <ha-switch
                    .checked=${this._slider.force_square}
                    .configValue=${"slider.force_square"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            </div>
          </div>
          
          <div class="tab">
            <input type="checkbox" id="action" class="tab-checkbox">
            <label class="tab-label" for="action">${Oo("tabs.action_button.title")}</label>
            <div class="tab-content">
              <paper-dropdown-menu
                label="${Oo("tabs.action_button.mode")}"
              >
                <paper-listbox
                  slot="dropdown-content"
                  attr-for-selected="item-value"
                  .configValue=${"action_button.mode"}
                  @selected-item-changed=${this._valueChangedSelect}
                  .selected=${this._action_button.mode}
                >
                  ${this.actionModes.map(t=>Mt`
                        <paper-item .itemValue=${t}>${Oo(`mode.${t}`)}</paper-item>
                      `)}
                </paper-listbox>
              </paper-dropdown-menu>              
              ${this._action_button.mode===me.CUSTOM?Mt`
                  <ha-icon-input
                    label="${Oo("tabs.action_button.icon")}"
                    .value=${this._action_button.icon}
                    .placeholder=${this._action_button.icon||"mdi:power"}
                    .configValue=${"action_button.icon"}
                    @value-changed=${this._valueChanged}
                  >
                  </ha-icon-input>
                `:""}
              <div class="side-by-side">
                <ha-formfield .label=${Oo("tabs.action_button.show_button")}>
                  <ha-switch
                    .checked=${this._action_button.show}
                    .configValue=${"action_button.show"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                ${this._action_button.mode===me.CUSTOM?Mt`
                    <ha-formfield .label=${Oo("tabs.action_button.show_spinner")}>
                      <ha-switch
                        .checked=${this._action_button.show_spinner}
                        .configValue=${"action_button.show_spinner"}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    </ha-formfield>
                `:""}
              </div>
              ${this._action_button.mode===me.CUSTOM?Mt`
                  <hui-action-editor
                    label="${Oo("tabs.action_button.tap_action")}"
                    .hass=${this.hass}
                    .config=${this._action_button.tap_action}
                    .actions=${this.actions}
                    .configValue=${"action_button.tap_action"}
                    @value-changed=${this._valueChanged}
                  ></hui-action-editor>
                `:""}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="additional_entity" class="tab-checkbox">
            <label class="tab-label" for="additional_entity">${Oo("tabs.additional_entity.title")}</label>
            <div class="tab-content">
              <ha-formfield .label=${Oo("tabs.additional_entity.show")}>
                <ha-switch
                  .checked=${this._additional_entity.show}
                  .configValue=${"additional_entity.show"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              ${this._additional_entity.show?Mt`
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${this._additional_entity.entity}
                  .configValue=${"additional_entity.entity"}
                  label="${Oo("tabs.additional_entity.entity")}"
                  allow-custom-entity
                  @value-changed=${this._valueChanged}
                ></ha-entity-picker>

                <paper-input
                  label="${Oo("tabs.additional_entity.attribute")}"
                  .value=${this._additional_entity.attribute}
                  .configValue=${"additional_entity.attribute"}
                  @value-changed=${this._valueChanged}
                ></paper-input>

                <div class="side-by-side">
                  <paper-input
                    label="${Oo("tabs.additional_entity.prefix")}"
                    .value=${this._additional_entity.prefix}
                    .configValue=${"additional_entity.prefix"}
                    @value-changed=${this._valueChanged}
                  ></paper-input>
                  <paper-input
                    label="${Oo("tabs.additional_entity.suffix")}"
                    .value=${this._additional_entity.suffix}
                    .configValue=${"additional_entity.suffix"}
                    @value-changed=${this._valueChanged}
                  ></paper-input>
                </div>

                <paper-dropdown-menu
                  label="${Oo("tabs.additional_entity.position")}"
                  .configValue=${"additional_entity.position"}
                  @value-changed=${this._valueChangedSelect}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    .selected=${this.additionalEntityPositions.indexOf(this._additional_entity.position||ye.BELOW_STATE)}
                  >
                    ${this.additionalEntityPositions.map(t=>Mt`
                      <paper-item .itemValue=${t}>${Oo(`tabs.additional_entity.positions.${t}`)}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              `:""}
            </div>
          </div>
        </div>
      </div>
    `):Mt``}renderBrightness(t){const e=this[`_${t}`];return Mt`
      <ha-formfield .label=${Oo("tabs.slider.use_brightness")}>
        <ha-switch
          .checked=${e.use_percentage_bg_opacity}
          .configValue="${t}.use_percentage_bg_opacity"
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `}renderStateColor(t){const e=this[`_${t}`];return Mt`
      <ha-formfield .label=${Oo("tabs.icon.use_state_color")}>
        <ha-switch
          .checked=${e.use_state_color}
          .configValue="${t}.use_state_color"
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChangedSelect(t){var e;const i=t.detail.value;i&&this._changeValue(null===(e=i.parentElement)||void 0===e?void 0:e.configValue,i.itemValue)}_valueChangedEntity(t){var e,i;const o=t.target,n=null===(e=t.detail)||void 0===e?void 0:e.value,a=r(n)!==r((null===(i=this._config)||void 0===i?void 0:i.entity)||"light.dummy");if(this._changeValue("name",""),this._changeValue("icon.icon",""),this._changeValue(o.configValue,n),a){const t=K(this._config);Je(t,["slider"],Xe(n)),this._config=t,l(this,"config-changed",{config:this._config})}}_valueChanged(t){var e;const i=t.target,o=null===(e=t.detail)||void 0===e?void 0:e.value;this._changeValue(i.configValue,void 0!==i.checked?i.checked:o)}_changeValue(t,e){if(this._config&&this.hass&&(void 0===this[`_${t}`]||this[`_${t}`]!==e)){if(t){const i=K(this._config);Je(i,[...t.split(".")],e),this._config=i,""===e&&delete this._config[t]}l(this,"config-changed",{config:this._config})}}static get styles(){return ie`
      ha-switch {
        padding: 16px 6px;
      }
      .side-by-side {
        display: flex;
        flex-flow: row wrap;
      }
      .side-by-side > * {
        padding-right: 8px;
        width: 50%;
        flex-flow: column wrap;
        box-sizing: border-box;
      }
      .side-by-side > *:last-child {
        flex: 1;
        padding-right: 0;
      }
      .suffix {
        margin: 0 8px;
      }
      .group {
        padding: 15px;
        border: 1px solid var(--primary-text-color)
      }
      .tabs {
        overflow: hidden;        
      }
      .tab {
        width: 100%;
        color: var(--primary-text-color);
        overflow: hidden;
      }
      .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 1em 1em 1em 0em;
        border-bottom: 1px solid var(--secondary-text-color);
        font-weight: bold;
        cursor: pointer;
      }
      .tab-label:hover {
        /*background: #1a252f;*/
      }
      .tab-label::after {
        content: "❯";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
      }
      .tab-content {
        max-height: 0;
        padding: 0 1em;
        background: var(--secondary-background-color);
        transition: all 0.35s;
      }
      input.tab-checkbox {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }      
      input.tab-checkbox:checked + .tab-label {
        border-color: var(--accent-color);
      }
      input.tab-checkbox:checked + .tab-label::after {
        transform: rotate(90deg);
      }
      input.tab-checkbox:checked ~ .tab-content {
        max-height: 100vh;
        padding: 1em;
      }      
    `}};t([Yt({attribute:!1})],To.prototype,"hass",void 0),t([Kt()],To.prototype,"_config",void 0),t([Kt()],To.prototype,"_helpers",void 0),To=t([qt("slider-button-card-editor")],To),console.info(`%c  SLIDER-BUTTON-CARD %c ${Oo("common.version")}${be} %c`,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #555;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: transparent;color: #555;padding: 3px 3px 3px 2px;border: 1px solid #555; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif","background-color: transparent"),console.info(`%c  SLIDER-BUTTON-CARD %c Additional Entity Feature Loaded (v${be}) %c`,"background-color: #4CAF50;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #4CAF50;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;","background-color: transparent;color: #4CAF50;padding: 3px 3px 3px 2px;border: 1px solid #4CAF50; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif","background-color: transparent"),window.customCards=window.customCards||[],window.customCards.push({type:"slider-button-card",name:"Slider button Card",description:"A button card with slider",preview:!0});let $o=class extends ne{constructor(){super(...arguments),this.changing=!1,this.changed=!1,this._additionalEntityValueCache="",this._additionalEntityLastState=null}static async getConfigElement(){return document.createElement("slider-button-card-editor")}static getStubConfig(t,e){const i=e.find(t=>t.startsWith("light"))||"";return{entity:i,slider:Xe(i),show_name:!0,show_state:!0,compact:!1,icon:K(xe),action_button:K(ke)}}getCardSize(){return 0}setConfig(t){if(!t)throw new Error(Oo("common.invalid_configuration"));if(!t.entity)throw new Error(Oo("common.invalid_configuration"));this.config=Object.assign({slider:Xe(t.entity),icon:K(xe),show_name:!0,show_state:!0,compact:!1,action_button:K(ke),additional_entity:K(Se),debug:!1},t),this.ctrl=ui.getInstance(this.config),this._additionalEntityValueCache="",this._additionalEntityLastState=null,this.config.additional_entity?console.log("🔧 Additional Entity Config:",{show:this.config.additional_entity.show,entity:this.config.additional_entity.entity,attribute:this.config.additional_entity.attribute,prefix:this.config.additional_entity.prefix,suffix:this.config.additional_entity.suffix,position:this.config.additional_entity.position}):console.log("🔧 No additional entity configuration found")}shouldUpdate(t){var e;if(!this.config)return!1;const i=t.get("hass");if(!i||i.themes!==this.hass.themes||i.language!==this.hass.language)return this.ctrl.log("shouldUpdate","forced true"),!0;if((null===(e=this.config.additional_entity)||void 0===e?void 0:e.entity)&&i&&this.hass.states)try{const t=i.states[this.config.additional_entity.entity];if(t!==this.hass.states[this.config.additional_entity.entity])return this.ctrl.log("shouldUpdate","additional entity changed"),!0}catch(t){this.ctrl.log("shouldUpdate additional entity error",String(t))}return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}updated(t){this.updateValue(this.ctrl.value,!1),this.animateActionEnd();const e=t.get("hass"),i=t.get("config");(null==e?void 0:e.themes)===this.hass.themes&&(null==i?void 0:i.theme)===this.config.theme||(this.ctrl.log("Theme","updated"),function(t,e,i,o){void 0===o&&(o=!1),t._themes||(t._themes={});var r=e.default_theme;("default"===i||i&&e.themes[i])&&(r=i);var a=n({},t._themes);if("default"!==r){var s=e.themes[r];Object.keys(s).forEach(function(e){var i="--"+e;t._themes[i]="",a[i]=s[e]})}if(t.updateStyles?t.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,a),o){var l=document.querySelector("meta[name=theme-color]");if(l){l.hasAttribute("default-content")||l.setAttribute("default-content",l.getAttribute("content"));var c=a["--primary-color"]||l.getAttribute("default-content");l.setAttribute("content",c)}}}(this,this.hass.themes,this.config.theme)),this.ctrl.log("Updated",this.ctrl.value)}firstUpdated(t){super.firstUpdated(t)}getAdditionalEntityState(){var t;return(null===(t=this.config.additional_entity)||void 0===t?void 0:t.entity)&&this.hass&&this.hass.states&&this.hass.states[this.config.additional_entity.entity]||null}getAdditionalEntityValue(){var t,e,i,o;const n=this.getAdditionalEntityState();if(!n)return this._additionalEntityValueCache="",this._additionalEntityLastState=null,"";if(this._additionalEntityLastState===n)return this._additionalEntityValueCache;const r=(null===(t=this.config.additional_entity)||void 0===t?void 0:t.attribute)||"state";let a="";try{if("state"===r?a=n.state:n.attributes&&"object"==typeof n.attributes&&(a=n.attributes[r]),null==a)return this._additionalEntityValueCache="",this._additionalEntityLastState=n,"";a=String(a)}catch(t){return null===(e=this.ctrl)||void 0===e||e.log("Additional entity error",String(t)),this._additionalEntityValueCache="",this._additionalEntityLastState=n,""}const s=(null===(i=this.config.additional_entity)||void 0===i?void 0:i.prefix)||"",l=(null===(o=this.config.additional_entity)||void 0===o?void 0:o.suffix)||"";return this._additionalEntityValueCache=`${s}${a}${l}`,this._additionalEntityLastState=n,this._additionalEntityValueCache}isAdditionalEntityAvailable(){const t=this.getAdditionalEntityState();return!(!t||"unavailable"===t.state||"unknown"===t.state||null===t.state||void 0===t.state)}shouldShowAdditionalEntity(){var t,e,i,o;const n=!!((null===(t=this.config.additional_entity)||void 0===t?void 0:t.show)&&(null===(e=this.config.additional_entity)||void 0===e?void 0:e.entity)&&this.isAdditionalEntityAvailable());return console.log("🔍 shouldShowAdditionalEntity:",{show:null===(i=this.config.additional_entity)||void 0===i?void 0:i.show,entity:null===(o=this.config.additional_entity)||void 0===o?void 0:o.entity,isAvailable:this.isAdditionalEntityAvailable(),result:n}),n}renderAdditionalEntity(){if(!this.shouldShowAdditionalEntity())return console.log("🚫 Not rendering additional entity - shouldShow returned false"),Mt``;const t=this.getAdditionalEntityValue();return console.log("📝 Additional entity value:",t),t?(console.log("✅ Rendering additional entity with value:",t),Mt`
      <div class="additional-entity">
        ${t}
      </div>
    `):(console.log("🚫 Not rendering additional entity - empty value"),Mt``)}renderAdditionalEntityRight(){var t;if(!this.shouldShowAdditionalEntity())return console.log("🚫 Not rendering right additional entity - shouldShow returned false"),Mt``;const e=this.getAdditionalEntityValue();if(console.log("📝 Right additional entity value:",e),!e)return console.log("🚫 Not rendering right additional entity - empty value"),Mt``;const i=null===(t=this.config.additional_entity)||void 0===t?void 0:t.position,o=i===ye.RIGHT_TOP;return console.log("✅ Rendering right additional entity with value:",e,"position:",i),Mt`
      <div class="additional-entity-right ${o?"top":"bottom"}">
        ${e}
      </div>
    `}render(){var t,e,i,o,n;return this.ctrl.hass=this.hass,this.ctrl.stateObj?Mt`
      <ha-card
        tabindex="0"
        .label=${`SliderButton: ${this.config.entity||"No Entity Defined"}`}
        class="${se({square:(null===(t=this.config.slider)||void 0===t?void 0:t.force_square)||!1,"hide-name":!this.config.show_name,"hide-state":!this.config.show_state,"hide-action":!(null===(e=this.config.action_button)||void 0===e?void 0:e.show),compact:!0===this.config.compact})}"
      >
        <div class="button ${se({off:this.ctrl.isOff,unavailable:this.ctrl.isUnavailable})}"
             style=${he({"--slider-value":`${this.ctrl.percentage}%`,"--slider-bg-filter":this.ctrl.style.slider.filter,"--slider-color":this.ctrl.style.slider.color,"--icon-filter":this.ctrl.style.icon.filter,"--icon-color":this.ctrl.style.icon.color})}
             >
          <div class="slider"
               data-show-track="${null===(i=this.config.slider)||void 0===i?void 0:i.show_track}"
               data-mode="${null===(o=this.config.slider)||void 0===o?void 0:o.direction}"
               data-background="${null===(n=this.config.slider)||void 0===n?void 0:n.background}"
               data-is-toggle="${this.ctrl.hasToggle}"
               @pointerdown=${this.onPointerDown}
               @pointermove=${this.onPointerMove}
               @pointerup=${this.onPointerUp}
          >
            ${this.ctrl.hasToggle?Mt`
                <div class="toggle-overlay" @click=${this.handleClick}></div>
                `:""}
            <div class="slider-bg"></div>
            <div class="slider-thumb"></div>           
          </div>
          ${this.renderText()}
          ${this.renderAction()}
          ${this.renderIcon()}
        </div>
      </ha-card>
    `:this._showError(Oo("common.show_error"))}renderText(){var t,e,i,o,n;return console.log("🎨 renderText called:",{show_name:this.config.show_name,show_state:this.config.show_state,shouldShowAdditionalEntity:this.shouldShowAdditionalEntity()}),this.config.show_name||this.config.show_state||this.shouldShowAdditionalEntity()?Mt`
          <div class="text">
            ${this.config.show_name?Mt`
                <div class="name">${this.ctrl.name}</div>
                `:""}
            ${this.shouldShowAdditionalEntity()&&(null===(t=this.config.additional_entity)||void 0===t?void 0:t.position)===ye.ABOVE_STATE?this.renderAdditionalEntity():""}
            ${this.config.show_state?Mt`
                <div class="state">
                  ${this.ctrl.isUnavailable?Mt`
                    ${this.hass.localize("state.default.unavailable")}
                    `:Mt`
                    ${this.shouldShowAdditionalEntity()&&(null===(e=this.config.additional_entity)||void 0===e?void 0:e.position)===ye.INLINE_STATE?Mt`${this.ctrl.label} ${this.getAdditionalEntityValue()}`:Mt`${this.ctrl.label}`}
                  `}
                </div>
                `:""}
            ${this.shouldShowAdditionalEntity()&&(null===(i=this.config.additional_entity)||void 0===i?void 0:i.position)===ye.BELOW_STATE?this.renderAdditionalEntity():""}
          </div>
          ${!this.shouldShowAdditionalEntity()||(null===(o=this.config.additional_entity)||void 0===o?void 0:o.position)!==ye.RIGHT_TOP&&(null===(n=this.config.additional_entity)||void 0===n?void 0:n.position)!==ye.RIGHT_BOTTOM?"":this.renderAdditionalEntityRight()}
    `:(console.log("🚫 Not rendering text - all conditions false"),Mt``)}renderIcon(){var t;if(!1===(null===(t=this.config.icon)||void 0===t?void 0:t.show))return Mt``;let e=!1,i="";return this.ctrl.stateObj.attributes.entity_picture&&(i=`url(${this.ctrl.stateObj.attributes.entity_picture})`,e=!0),Mt`
      <div class="icon ${se({"has-picture":e})}"
           @action=${t=>this._handleAction(t,this.config.icon)}
           .actionHandler=${fe({hasHold:!1,hasDoubleClick:!1})}
           style=${he({"background-image":`${i}`})}
           >
        <ha-icon
          tabindex="-1"
          data-domain=${a(this.ctrl.stateObj)}
          data-state=${ce(this.ctrl.stateObj?this.ctrl.state:void 0)}          
          .icon=${this.ctrl.icon}
        />
      </div>
    `}renderAction(){var t,e,i,o,n;return!1===(null===(t=this.config.action_button)||void 0===t?void 0:t.show)?Mt``:(null===(e=this.config.action_button)||void 0===e?void 0:e.mode)===me.TOGGLE?Mt`
        <div class="action">
          <ha-switch
            .disabled=${this.ctrl.isUnavailable}
            .checked=${!s.includes(this.ctrl.state)}
            @change=${this._toggle}
          ></ha-switch>
        </div>
      `:Mt`
      <div class="action"
           @action=${t=>this._handleAction(t,this.config.action_button)}
           .actionHandler=${fe({hasHold:!1,hasDoubleClick:!1})}           
           >
        <ha-icon
          tabindex="-1"
          .icon=${(null===(i=this.config.action_button)||void 0===i?void 0:i.icon)||"mdi:power"}
        ></ha-icon>
        ${void 0===(null===(o=this.config.action_button)||void 0===o?void 0:o.show_spinner)||(null===(n=this.config.action_button)||void 0===n?void 0:n.show_spinner)?Mt`
            <svg class="circular-loader" viewBox="25 25 50 50">
              <circle class="loader-path" cx="50" cy="50" r="20"></circle>
            </svg>
                `:""}
      </div>
    `}_handleAction(t,e){var i;this.hass&&this.config&&t.detail.action&&("toggle"!==(null===(i=e.tap_action)||void 0===i?void 0:i.action)||this.ctrl.isUnavailable||this.animateActionStart(),g(this,this.hass,Object.assign(Object.assign({},e),{entity:this.config.entity}),t.detail.action))}async handleClick(t){this.ctrl.hasToggle&&!this.ctrl.isUnavailable&&(t.preventDefault(),this.animateActionStart(),this.ctrl.log("Toggle"),await u(this.hass,this.config.entity))}_toggle(){this.hass&&this.config&&g(this,this.hass,{tap_action:{action:"toggle"},entity:this.config.entity},"tap")}setStateValue(t){this.ctrl.log("setStateValue",t),this.updateValue(t,!1),this.ctrl.value=t,this.animateActionStart()}animateActionStart(){this.animateActionEnd(),this.action&&this.action.classList.add("loading")}animateActionEnd(){this.action&&(clearTimeout(this.actionTimeout),this.actionTimeout=setTimeout(()=>{this.action.classList.remove("loading")},750))}updateValue(t,e=!0){this.changing=e,this.changed=!e,this.ctrl.log("updateValue",t),this.ctrl.targetValue=t,this.button&&(this.button.classList.remove("off"),e?this.button.classList.add("changing"):(this.button.classList.remove("changing"),this.ctrl.isOff&&this.button.classList.add("off")),this.stateText&&(this.stateText.innerHTML=this.ctrl.isUnavailable?`${this.hass.localize("state.default.unavailable")}`:this.ctrl.label),this.button.style.setProperty("--slider-value",`${this.ctrl.percentage}%`),this.button.style.setProperty("--slider-bg-filter",this.ctrl.style.slider.filter),this.button.style.setProperty("--slider-color",this.ctrl.style.slider.color),this.button.style.setProperty("--icon-filter",this.ctrl.style.icon.filter),this.button.style.setProperty("--icon-color",this.ctrl.style.icon.color),this.button.style.setProperty("--icon-rotate-speed",this.ctrl.style.icon.rotateSpeed||"0s"))}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),Mt`
      ${e}
    `}getColorFromVariable(t){if(void 0!==t&&"var"===t.substring(0,3)){let e=window.getComputedStyle(this).getPropertyValue(t.substring(4).slice(0,-1)).trim();return e.length||(e=window.getComputedStyle(document.documentElement).getPropertyValue(t.substring(4).slice(0,-1)).trim()),e}return t}onPointerDown(t){t.preventDefault(),t.stopPropagation(),this.ctrl.isSliderDisabled||this.slider.setPointerCapture(t.pointerId)}onPointerUp(t){this.ctrl.isSliderDisabled||(this.setStateValue(this.ctrl.targetValue),this.slider.releasePointerCapture(t.pointerId))}onPointerMove(t){if(this.ctrl.isSliderDisabled)return;if(!this.slider.hasPointerCapture(t.pointerId))return;const{left:e,top:i,width:o,height:n}=this.slider.getBoundingClientRect(),r=this.ctrl.moveSlider(t,{left:e,top:i,width:o,height:n});this.ctrl.log("onPointerMove",r),this.updateValue(r)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return ie`
    ha-card {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      min-height: 7rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      touch-action: none;
      overflow: hidden;      
      --mdc-icon-size: 2.2em;
    }
    ha-card.square {
      aspect-ratio: 1 / 1;
    }
    ha-card.compact {
      min-height: 3rem !important;
    }    
    :host {
      --slider-bg-default-color: var(--primary-color, rgb(95, 124, 171));
      --slider-bg: var(--slider-color);
      --slider-bg-filter: brightness(100%);
      --slider-bg-direction: to right;
      --slider-track-color: #2b374e; 
      --slider-tracker-color: transparent;
      --slider-value: 0%;
      --slider-transition-duration: 0.2s;      
      /*--label-text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
      /*--label-color-on: var(--primary-text-color, white);*/
      /*--label-color-off: var(--primary-text-color, white);*/
      --icon-filter: brightness(100%);
      --icon-color: var(--paper-item-icon-color);
      --icon-rotate-speed: 0s;
      /*--state-color-on: #BAC0C6; */
      /*--state-color-off: var(--disabled-text-color);*/
      /*--state-text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
      --btn-bg-color-off: rgba(43,55,78,1);
      --btn-bg-color-on: #20293c;
      /*--action-icon-color-on: var(--paper-item-icon-color, black);*/
      /*--action-icon-color-off: var(--paper-item-icon-color, black);*/      
      /*--action-spinner-color: var(--label-badge-text-color, white);*/
    }
    /* --- BUTTON --- */
    
    .button {
      position: relative;
      padding: 0.8rem;
      box-sizing: border-box;
      height: 100%;
      min-height: 7rem;
      width: 100%;
      display: block;
      overflow: hidden;           
      transition: all 0.2s ease-in-out;
      touch-action: none;
    }
    ha-card.compact .button {
      min-height: 3rem !important;
    }
    .button.off {
      background-color: var(--btn-bg-color-off);
    }
    
    /* --- ICON --- */
    
    .icon {
      position: relative;
      cursor: pointer;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
      box-sizing: border-box;
      padding: 0;
      outline: none;
      animation: var(--icon-rotate-speed, 0s) linear 0s infinite normal both running rotate;
      -webkit-tap-highlight-color: transparent;
    }
    .icon ha-icon {
      filter: var(--icon-filter, brightness(100%));
      color: var(--icon-color);
      transition: color 0.4s ease-in-out 0s, filter 0.2s linear 0s;
    }
    .icon.has-picture {
      background-size: cover;
      border-radius: 50%;
    }
    .icon.has-picture ha-icon{
      display: none;
    }
    .unavailable .icon ha-icon {
      color: var(--disabled-text-color);
    }
    .compact .icon {
      float: left;
    }

    /* --- TEXT --- */
    
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0.8rem;
      pointer-events: none;
      user-select: none;
      font-size: 1.1rem;
      line-height: 1.3rem;
      max-width: calc(100% - 2em);
      /*text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
    }
    .compact .text {
      position: relative;
      top: 0.5rem;
      left: 0.5rem;
      display: inline-block;
      padding: 0;
      height: 1.3rem;
      width: 100%;
      overflow: hidden;
      max-width: calc(100% - 4em);
    }
    .compact.hide-action .text {         
      max-width: calc(100% - 2em);      
    }    

    /* --- LABEL --- */
    
    .name {
      color: var(--label-color-on, var(--primary-text-color, white));      
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: var(--label-text-shadow, none);
    }
    .off .name {
      color: var(--label-color-off, var(--primary-text-color, white));
    }
    .unavailable.off .name,
    .unavailable .name {
      color: var(--disabled-text-color);
    }
    .compact .name {
      display: inline-block;   
      max-width: calc(100% - 3.5em);
    }    
    
    /* --- STATE --- */
    
    .state {      
      color: var(--state-color-on, var(--label-badge-text-color, white));      
      text-overflow: ellipsis;
      white-space: nowrap;
      text-shadow: var(--state-text-shadow);
      transition: font-size 0.1s ease-in-out;
    }
    .changing .state {
      font-size: 150%;
    }
    .off .state {
      color: var(--state-color-off, var(--disabled-text-color));
    }
    .unavailable .state {
      color: var(--disabled-text-color);
    }
    .compact .state {
      display: inline-block;
      max-width: calc(100% - 0em);
      overflow: hidden;
    }

    /* --- ADDITIONAL ENTITY --- */

    .additional-entity {
      color: var(--additional-entity-color, var(--secondary-text-color, #8c96a5));
      font-size: 0.9rem;
      line-height: 1.2rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: var(--additional-entity-text-shadow, none);
      opacity: 0.8;
    }
    .off .additional-entity {
      color: var(--additional-entity-color-off, var(--disabled-text-color));
    }
    .unavailable .additional-entity {
      color: var(--disabled-text-color);
    }
    .compact .additional-entity {
      display: inline-block;
      font-size: 0.8rem;
      line-height: 1rem;
      max-width: calc(100% - 0em);
      overflow: hidden;
    }

    /* --- ADDITIONAL ENTITY RIGHT --- */

    .additional-entity-right {
      position: absolute;
      right: 0.8rem;
      color: var(--additional-entity-color, var(--secondary-text-color, #8c96a5));
      font-size: 0.9rem;
      line-height: 1.2rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: var(--additional-entity-text-shadow, none);
      opacity: 0.8;
      pointer-events: none;
      user-select: none;
    }
    .additional-entity-right.top {
      top: 0.8rem;
    }
    .additional-entity-right.bottom {
      bottom: 0.8rem;
    }
    .off .additional-entity-right {
      color: var(--additional-entity-color-off, var(--disabled-text-color));
    }
    .unavailable .additional-entity-right {
      color: var(--disabled-text-color);
    }
    .compact .additional-entity-right {
      font-size: 0.8rem;
      line-height: 1rem;
      right: 0.5rem;
    }
    .compact .additional-entity-right.top {
      top: 0.5rem;
    }
    .compact .additional-entity-right.bottom {
      bottom: 0.5rem;
    }


    /* --- SLIDER --- */
    
    .slider {
      position: absolute;      
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-color: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-on, black)) );
      cursor: ew-resize;
      z-index: 0;
    }
    .slider[data-mode="bottom-top"] {
      cursor: ns-resize;     
    }
    .slider[data-mode="top-bottom"] {
      cursor: ns-resize;
    }
    .slider:active {
      cursor: grabbing;
    }
    
    /* --- SLIDER OVERLAY --- */      
      
    .slider .toggle-overlay {
      position: absolute;      
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0;
      z-index: 999;    
    }
    
    /* --- SLIDER BACKGROUND --- */   
     
    .slider-bg {       
      position: absolute;
      top: 0;
      left: 0px;
      height: 100%;
      width: 100%;
      background: var(--slider-bg);
      background-size: var(--slider-bg-size, 100% 100%);
      background-color: var(--slider-bg-color, transparent);
      background-position: var(--slider-bg-position, 0 0);
      filter: var(--slider-bg-filter, brightness(100%));
    }
    .off .slider .slider-bg {
      background-color: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-off, black)) );
    }
    .slider[data-background="solid"] .slider-bg {            
      --slider-bg-color: var(--slider-color);
    }
    .slider[data-background="triangle"] .slider-bg {      
      --slider-bg-direction: to bottom right;    
      --slider-bg: linear-gradient(var(--slider-bg-direction), transparent 0%, transparent 50%, var(--slider-color) 50%, var(--slider-color) 100%);
      border-right: 0px solid;
    }    
    .slider[data-background="triangle"][data-mode="bottom-top"] .slider-bg {
      --slider-bg-direction: to top left;      
    }    
    .slider[data-background="triangle"][data-mode="top-bottom"] .slider-bg {
      --slider-bg-direction: to bottom left;      
    }
    .slider[data-background="custom"] .slider-bg {    
      --slider-bg: repeating-linear-gradient(-45deg, var(--slider-color) 0, var(--slider-color) 1px, var(--slider-color) 0, transparent 10%);
      --slider-bg-size: 30px 30px;
    }    
    .slider[data-background="gradient"] .slider-bg {
      --slider-bg: linear-gradient(var(--slider-bg-direction), rgba(0, 0, 0, 0) -10%, var(--slider-color) 100%);
    }    
    .slider[data-background="striped"] .slider-bg {
      --slider-bg: linear-gradient(var(--slider-bg-direction), var(--slider-color), var(--slider-color) 50%, transparent 50%, transparent);
      --slider-bg-size: 4px 100%;
    }
    .slider[data-background="striped"][data-mode="bottom-top"] .slider-bg,
    .slider[data-background="striped"][data-mode="top-bottom"] .slider-bg {      
      --slider-bg-size: 100% 4px;
    }    
    .slider[data-mode="bottom-top"] .slider-bg {
      --slider-bg-direction: to top;      
    }    
    .slider[data-mode="top-bottom"] .slider-bg {
      --slider-bg-direction: to bottom;      
    }
    
    /* --- SLIDER THUMB --- */        
    
    .slider-thumb {
      position: relative;
      width: 100%;
      height: 100%;      
      transform: translateX(var(--slider-value));
      background: transparent;
      transition: transform var(--slider-transition-duration) ease-in;
    }
    .changing .slider .slider-thumb {
      transition: none;
    }    
    .slider[data-mode="top-bottom"] .slider-thumb {
      transform: translateY(var(--slider-value)) !important;
    }
    .slider[data-mode="bottom-top"] .slider-thumb {
      transform: translateY(calc(var(--slider-value) * -1))  !important;
    }
    
    .slider-thumb:before {
      content: '';
      position: absolute;
      top: 0;
      left: -2px;
      height: 100%;
      width: 2px;          
      background: var(--slider-color);
      opacity: 0;       
      transition: opacity 0.2s ease-in-out 0s;   
      box-shadow: var(--slider-color) 0px 1px 5px 1px;
      z-index: 999;
    }
    .slider[data-mode="top-bottom"] .slider-thumb:before {
      top: -2px;
      left: 0px;
      height: 2px;
      width: 100%;              
    }    
    .changing .slider-thumb:before {
      opacity: 0.5;    
    }
    .off.changing .slider-thumb:before {
      opacity: 0;    
    }
    
    .slider-thumb:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0px;
      height: 100%;
      width: 100%;          
      background: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-on, black)) );
      opacity: 1;            
    }
    .slider[data-show-track="true"] .slider-thumb:after {
      opacity: 0.9;
    }
    .off .slider[data-show-track="true"] .slider-thumb:after {
      opacity: 1;
    }
                  
    /* --- ACTION BUTTON --- */      
              
    .action {
      position: relative;
      float: right;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
      color: var(--action-icon-color-on, var(--paper-item-icon-color, black));
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }    
    .action ha-switch {
      position: absolute;
      right: 0;
      top: 5px;
    }    
    .off .action {
      color: var(--action-icon-color-off, var(--paper-item-icon-color, black));
    }
    .unavailable .action {
      color: var(--disabled-text-color);
    }
    

    .circular-loader {
      position: absolute;
      left: -8px;
      top: -8px;
      width: calc(var(--mdc-icon-size, 24px) + 16px);
      height: calc(var(--mdc-icon-size, 24px) + 16px);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      animation: rotate 2s linear infinite; 
    }   
    .action.loading .circular-loader {
      opacity: 1;      
    }    

    .loader-path {
      fill: none;
      stroke-width: 2px;
      stroke: var(--action-spinner-color, var(--label-badge-text-color, white));
      animation: animate-stroke 1.5s ease-in-out infinite both;        
      stroke-linecap: round;
    }
    
    /* --- MISC --- */    
    
    .unavailable .slider .toggle-overlay,
    .unavailable .action,
    .unavailable .action ha-switch,    
    .unavailable .slider {
      cursor: not-allowed !important;
    }
    
    
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes animate-stroke {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
      }
    }     
    `}};t([Yt({attribute:!1})],$o.prototype,"hass",void 0),t([Kt()],$o.prototype,"config",void 0),t([Zt(".state")],$o.prototype,"stateText",void 0),t([Zt(".button")],$o.prototype,"button",void 0),t([Zt(".action")],$o.prototype,"action",void 0),t([Zt(".slider")],$o.prototype,"slider",void 0),$o=t([qt("slider-button-card")],$o);export{$o as SliderButtonCard};
