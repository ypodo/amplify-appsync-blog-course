(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{3550:function(n,t,e){"use strict";var i=e(531);e(2551);t.ZP=i.g},1953:function(n,t,e){"use strict";e.d(t,{o:function(){return f}});var i=e(3769),r=new i.k("I18n"),a=function(){function n(n){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},n),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),r.debug(this._lang)}return n.prototype.setLanguage=function(n){this._lang=n},n.prototype.get=function(n,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:n;var e=this._lang,i=this.getByLanguage(n,e);return i||(e.indexOf("-")>0&&(i=this.getByLanguage(n,e.split("-")[0])),i||("undefined"!==typeof t?t:n))},n.prototype.getByLanguage=function(n,t,e){if(void 0===e&&(e=null),!t)return e;var i=this._dict[t];return i?i[n]:e},n.prototype.putVocabulariesForLanguage=function(n,t){var e=this._dict[n];e||(e=this._dict[n]={}),Object.assign(e,t)},n.prototype.putVocabularies=function(n){var t=this;Object.keys(n).map((function(e){t.putVocabulariesForLanguage(e,n[e])}))},n}(),u=e(5387),o=new i.k("I18n"),s=null,c=null,f=function(){function n(){}return n.configure=function(t){return o.debug("configure I18n"),t?(s=Object.assign({},s,t.I18n||t),n.createInstance(),s):s},n.getModuleName=function(){return"I18n"},n.createInstance=function(){o.debug("create I18n instance"),c||(c=new a(s))},n.setLanguage=function(t){return n.checkConfig(),c.setLanguage(t)},n.get=function(t,e){return n.checkConfig()?c.get(t,e):"undefined"===typeof e?t:e},n.putVocabulariesForLanguage=function(t,e){return n.checkConfig(),c.putVocabulariesForLanguage(t,e)},n.putVocabularies=function(t){return n.checkConfig(),c.putVocabularies(t)},n.checkConfig=function(){return c||(c=new a(s)),!0},n}();u.dQ.register(f)},1766:function(n,t,e){var i={"./amplify-amazon-button_5.entry.js":[2265,2265],"./amplify-auth-container.entry.js":[292,292],"./amplify-auth-fields_9.entry.js":[3763,3763],"./amplify-authenticator.entry.js":[2146,2146],"./amplify-button_3.entry.js":[8473,8473],"./amplify-chatbot.entry.js":[4579,4579],"./amplify-checkbox.entry.js":[1523,1523],"./amplify-confirm-sign-in_7.entry.js":[5208,5208],"./amplify-container.entry.js":[4131,4131],"./amplify-federated-buttons_2.entry.js":[885,885],"./amplify-federated-sign-in.entry.js":[7611,7611],"./amplify-form-field_4.entry.js":[801,801],"./amplify-greetings.entry.js":[9616,9616],"./amplify-icon-button.entry.js":[6063,6063],"./amplify-icon.entry.js":[2831,2831],"./amplify-link.entry.js":[8870,8870],"./amplify-nav_2.entry.js":[9798,9798],"./amplify-photo-picker.entry.js":[5819,5819],"./amplify-picker.entry.js":[5401,5401],"./amplify-radio-button_3.entry.js":[2613,2613],"./amplify-s3-album.entry.js":[2890,2890],"./amplify-s3-image-picker.entry.js":[1324,9742],"./amplify-s3-image.entry.js":[3575,3575],"./amplify-s3-text-picker.entry.js":[8883,8883],"./amplify-s3-text.entry.js":[5905,5905],"./amplify-select-mfa-type.entry.js":[8384,8384],"./amplify-sign-in-button.entry.js":[5574,5574],"./amplify-tooltip.entry.js":[1223,1223]};function r(n){if(!e.o(i,n))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[n],r=t[0];return e.e(t[1]).then((function(){return e(r)}))}r.keys=function(){return Object.keys(i)},r.id=1766,n.exports=r},3962:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e(8812)}])},8812:function(n,t,e){"use strict";e.r(t);var i=e(4051),r=e.n(i),a=e(5893),u=e(1470),o=e(5194),s=e(531),c=e(7294);function f(n,t,e,i,r,a,u){try{var o=n[a](u),s=o.value}catch(c){return void e(c)}o.done?t(s):Promise.resolve(s).then(i,r)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var a=n.apply(t,e);function u(n){f(a,i,r,u,o,"next",n)}function o(n){f(a,i,r,u,o,"throw",n)}u(void 0)}))}}t.default=(0,o.Q)((function(){var n=(0,c.useState)(null),t=n[0],e=n[1];function i(){return(i=l(r().mark((function n(){var t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.g.currentAuthenticatedUser();case 2:t=n.sent,e(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),t?(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-3xl font-semibold tracking-wide mt-6",children:"Profile"}),(0,a.jsxs)("h1",{className:"font-medium text-gray-500 my-2",children:["Username: ",t.username]}),(0,a.jsxs)("p",{className:"text-sm text-gray-500 mb-6",children:["Email: ",t.attributes.email]}),(0,a.jsx)(u.jr,{})]}):null}))}},function(n){n.O(0,[5194,9774,2888,179],(function(){return t=3962,n(n.s=t);var t}));var t=n.O();_N_E=t}]);