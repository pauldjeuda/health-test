"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(P,l,i)=>{i.r(l),i.d(l,{ion_input_password_toggle:()=>e});var r=i(334),a=i(4929),u=i(333),d=i(3992),p=i(2638);const e=(()=>{let c=class{constructor(o){(0,r.r)(this,o),this.togglePasswordVisibility=()=>{const{inputElRef:n}=this;n&&(n.type="text"===n.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(o){"text"===o||"password"===o||(0,a.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${o}" is not compatible.`,this.el)}connectedCallback(){const{el:o}=this,n=this.inputElRef=o.closest("ion-input");n?this.type=n.type:(0,a.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",o)}disconnectedCallback(){this.inputElRef=null}render(){var o,n;const{color:_,type:E}=this,g=(0,p.b)(this),I=null!==(o=this.showIcon)&&void 0!==o?o:d.x,C=null!==(n=this.hideIcon)&&void 0!==n?n:d.y,y="text"===E;return(0,r.h)(r.f,{key:"ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d",class:(0,u.c)(_,{[g]:!0})},(0,r.h)("ion-button",{key:"9698eccdaedb86cf12d20acc53660371b3af3c55",mode:g,color:_,fill:"clear",shape:"round","aria-checked":y?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:w=>{w.preventDefault()},onClick:this.togglePasswordVisibility},(0,r.h)("ion-icon",{key:"1f2119c30b56c800d9af44e6499445a0ebb466cf",slot:"icon-only","aria-hidden":"true",icon:y?C:I})))}get el(){return(0,r.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};return c.style={ios:"",md:""},c})()},333:(P,l,i)=>{i.d(l,{c:()=>u,g:()=>p,h:()=>a,o:()=>h});var r=i(467);const a=(s,t)=>null!==t.closest(s),u=(s,t)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},t):t,p=s=>{const t={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(s).forEach(e=>t[e]=!0),t},f=/^[a-z][a-z0-9+\-.]*:/,h=function(){var s=(0,r.A)(function*(t,e,c,o){if(null!=t&&"#"!==t[0]&&!f.test(t)){const n=document.querySelector("ion-router");if(n)return null!=e&&e.preventDefault(),n.push(t,c,o)}return!1});return function(e,c,o,n){return s.apply(this,arguments)}}()}}]);