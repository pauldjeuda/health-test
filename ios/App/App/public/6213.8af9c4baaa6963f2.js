"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6213],{6213:(M,g,e)=>{e.r(g),e.d(g,{DetailsPackPageModule:()=>v});var l=e(177),u=e(4341),a=e(7896),s=e(4964),n=e(3953),P=e(8079),p=e(2431);function k(o,r){if(1&o&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",2),n.nrm(3,"ion-back-button"),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.k0s()()()),2&o){const t=r.ngIf;n.R7$(5),n.JRh(t.name)}}function m(o,r){if(1&o){const t=n.RV6();n.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),n.EFF(3),n.k0s()(),n.j41(4,"ion-card-content")(5,"ion-list",3)(6,"ion-item")(7,"p",4),n.EFF(8,"Description:"),n.nrm(9,"br")(10,"br"),n.j41(11,"ion-label"),n.EFF(12),n.k0s()()(),n.nrm(13,"br"),n.j41(14,"ion-item")(15,"p",4),n.EFF(16,"Instruction:"),n.nrm(17,"br")(18,"br"),n.j41(19,"ion-label"),n.EFF(20),n.k0s()()(),n.nrm(21,"br"),n.j41(22,"ion-item")(23,"ion-label",4),n.EFF(24,"Liste des tests:"),n.k0s(),n.j41(25,"ion-label",5),n.EFF(26),n.k0s()(),n.j41(27,"ion-item")(28,"ion-label",4),n.EFF(29,"Dur\xe9e:"),n.k0s(),n.j41(30,"ion-label",5),n.EFF(31),n.k0s()(),n.j41(32,"ion-item")(33,"ion-label",4),n.EFF(34,"Prix:"),n.k0s(),n.j41(35,"ion-label",5),n.EFF(36),n.k0s()()(),n.j41(37,"ion-button",6),n.bIt("click",function(){const c=n.eBV(t).ngIf,d=n.XpG();return n.Njj(d.addToCart(c))}),n.EFF(38,"Ajouter au panier"),n.k0s()()()}if(2&o){const t=r.ngIf;n.R7$(3),n.JRh(t.name),n.R7$(8),n.xc7("color","var(--ion-color-dark)"),n.R7$(),n.SpI(" ",t.description,""),n.R7$(7),n.xc7("color","var(--ion-color-dark)"),n.R7$(),n.SpI(" ",t.instruction,""),n.R7$(6),n.SpI("",t.listTest," "),n.R7$(5),n.SpI("",t.time," jours"),n.R7$(5),n.SpI("",t.price," FCFA")}}const f=[{path:"",component:(()=>{var o;class r{constructor(i,c,d){this.route=i,this.firestore=c,this.cartService=d,this.packId=null}ngOnInit(){this.route.paramMap.subscribe(i=>{this.packId=i.get("id"),this.packId&&(this.packDetails$=this.firestore.doc(`packs/${this.packId}`).valueChanges())})}addToCart(i){this.cartService.addToCart(i)}}return(o=r).\u0275fac=function(i){return new(i||o)(n.rXU(s.nX),n.rXU(P.Qe),n.rXU(p.m))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-details-pack"]],decls:5,vars:6,consts:[[4,"ngIf"],[1,"ion-padding"],["slot","start"],["lines","full"],[1,"title"],[1,"detail"],["expand","block","shape","round",1,"ion-margin-top",3,"click"]],template:function(i,c){1&i&&(n.DNE(0,k,6,1,"ion-header",0),n.nI1(1,"async"),n.j41(2,"ion-content",1),n.DNE(3,m,39,10,"ion-card",0),n.nI1(4,"async"),n.k0s()),2&i&&(n.Y8G("ngIf",n.bMT(1,2,c.packDetails$)),n.R7$(3),n.Y8G("ngIf",n.bMT(4,4,c.packDetails$)))},dependencies:[l.bT,a.Jm,a.QW,a.b_,a.I9,a.ME,a.tN,a.W9,a.eU,a.uz,a.he,a.nf,a.BC,a.ai,a.el,l.Jj],styles:["ion-header[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-family:var(--ion-font-family);font-size:1.5rem;font-weight:700;text-align:center}ion-toolbar[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}ion-content[_ngcontent-%COMP%]   .ion-padding[_ngcontent-%COMP%]{padding:var(--ion-padding)}ion-card[_ngcontent-%COMP%]{margin:var(--ion-padding);border-radius:var(--ion-border-radius);box-shadow:var(--ion-box-shadow);font-family:var(--ion-font-family)}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{background:var(--ion-color-primary-tint);color:var(--ion-color-primary-contrast);border-radius:var(--ion-border-radius) var(--ion-border-radius) 0 0}ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{color:var(--ion-color-light);font-size:1.2rem}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{font-size:1rem;color:var(--ion-color-dark)}ion-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius: var(--ion-border-radius);--background: var(--ion-color-primary);--color: var(--ion-color-primary-contrast)}ion-item[_ngcontent-%COMP%]{--background: transparent;--border-color: var(--ion-color-medium)}ion-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-primary)}ion-item[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{color:var(--ion-color-dark)}"]}),r})()}];let b=(()=>{var o;class r{}return(o=r).\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[s.iI.forChild(f),s.iI]}),r})(),v=(()=>{var o;class r{}return(o=r).\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[l.MD,u.YN,a.bv,b]}),r})()}}]);