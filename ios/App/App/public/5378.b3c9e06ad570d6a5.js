"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5378],{5378:(k,u,r)=>{r.r(u),r.d(u,{Tab2PageModule:()=>C});var a=r(7896),l=r(177),c=r(4341),m=r(1307),p=r(4964),t=r(3953),f=r(8079);function b(e,i){if(1&e&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&e){const n=i.$implicit;t.R7$(),t.Lme("",n.name," - ",n.quantity," pcs")}}function _(e,i){if(1&e&&(t.j41(0,"p")(1,"strong"),t.EFF(2,"Adresse de livraison:"),t.k0s(),t.EFF(3),t.nrm(4,"br"),t.j41(5,"strong"),t.EFF(6,"Coordonn\xe9es:"),t.k0s(),t.EFF(7),t.k0s()),2&e){const n=t.XpG().$implicit;t.R7$(3),t.SpI(" ",n.deliveryLocation.address,""),t.R7$(4),t.Lme(" ",n.deliveryLocation.latitude,", ",n.deliveryLocation.longitude," ")}}function T(e,i){1&e&&(t.j41(0,"ion-button",12),t.EFF(1,"Waiting levy"),t.k0s())}function F(e,i){1&e&&(t.j41(0,"ion-button",13),t.EFF(1,"Waiting paiement"),t.k0s())}function h(e,i){1&e&&(t.j41(0,"ion-button",14),t.EFF(1,"Waiting result"),t.k0s())}function P(e,i){if(1&e){const n=t.RV6();t.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-icon",6),t.bIt("click",function(){const s=t.eBV(n).$implicit,d=t.XpG();return t.Njj(d.deleteTest(s))}),t.k0s(),t.j41(3,"ion-card-title"),t.EFF(4),t.k0s(),t.j41(5,"ion-card-subtitle"),t.EFF(6),t.k0s()(),t.j41(7,"ion-card-content"),t.DNE(8,b,2,2,"p",7)(9,_,8,3,"p",8)(10,T,2,0,"ion-button",9)(11,F,2,0,"ion-button",10)(12,h,2,0,"ion-button",11),t.k0s()()}if(2&e){const n=i.$implicit;t.AVh("test-status-pending","pending"===n.status)("test-status-paid","paid"===n.status)("test-status-result","result"===n.status),t.R7$(4),t.JRh(n.date),t.R7$(2),t.SpI(" Prix: ",n.totalCost," FCFA"),t.R7$(2),t.Y8G("ngForOf",n.items),t.R7$(),t.Y8G("ngIf",n.deliveryLocation),t.R7$(),t.Y8G("ngIf","pending"===n.status),t.R7$(),t.Y8G("ngIf","paid"===n.status),t.R7$(),t.Y8G("ngIf","result"===n.status)}}const v=[{path:"",component:(()=>{var e;class i{constructor(o){this.firestore=o,this.tests=[],this.filteredTests=[],this.selectedSegment="all"}ngOnInit(){this.firestore.collection("orders").valueChanges({idField:"id"}).subscribe(o=>{this.tests=o,this.filterTests(this.selectedSegment)})}filterTests(o){this.selectedSegment=o,this.filteredTests="all"===o?this.tests:this.tests.filter(s=>s.status===o)}deleteTest(o){this.firestore.collection("orders").doc(o.id).delete().then(()=>{console.log("Test deleted successfully")}).catch(s=>{console.error("Error deleting test:",s)})}}return(e=i).\u0275fac=function(o){return new(o||e)(t.rXU(f.Qe))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-tab2"]],decls:15,vars:2,consts:[[3,"ngModelChange","ionChange","ngModel"],["value","all"],["value","pending"],["value","paid"],["value","result"],[3,"test-status-pending","test-status-paid","test-status-result",4,"ngFor","ngForOf"],["name","close-circle","color","primary",1,"cancel",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["color","primary","expand","block",4,"ngIf"],["color","secondary","expand","block",4,"ngIf"],["color","success","expand","block",4,"ngIf"],["color","primary","expand","block"],["color","secondary","expand","block"],["color","success","expand","block"]],template:function(o,s){1&o&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3," Your tests status "),t.k0s()()(),t.j41(4,"ion-content")(5,"ion-segment",0),t.mxI("ngModelChange",function(g){return t.DH7(s.selectedSegment,g)||(s.selectedSegment=g),g}),t.bIt("ionChange",function(){return s.filterTests(s.selectedSegment)}),t.j41(6,"ion-segment-button",1),t.EFF(7," All "),t.k0s(),t.j41(8,"ion-segment-button",2),t.EFF(9," W. levy "),t.k0s(),t.j41(10,"ion-segment-button",3),t.EFF(11," W. paiement "),t.k0s(),t.j41(12,"ion-segment-button",4),t.EFF(13," W. Result "),t.k0s()(),t.DNE(14,P,13,13,"ion-card",5),t.k0s()),2&o&&(t.R7$(5),t.R50("ngModel",s.selectedSegment),t.R7$(9),t.Y8G("ngForOf",s.filteredTests))},dependencies:[a.Jm,a.b_,a.I9,a.ME,a.HW,a.tN,a.W9,a.eU,a.iq,a.Gp,a.eP,a.BC,a.ai,a.Je,l.Sq,l.bT,c.BC,c.vS],styles:["ion-header[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: var(--ion-color-primary-contrast)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-family:var(--ion-font-family);font-size:1.5rem;font-weight:700;text-align:center}ion-toolbar[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: var(--ion-color-primary-contrast)}ion-segment-button[_ngcontent-%COMP%]{--background: var(--ion-color-primary-shade);--color: var(--ion-color-primary-contrast);font-family:var(--ion-font-family)}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}ion-button[_ngcontent-%COMP%]{--border-radius: var(--ion-border-radius)}.test-status-paid[_ngcontent-%COMP%]{border-left:4px solid var(--ion-color-secondary)}.test-status-result[_ngcontent-%COMP%]{border-left:4px solid var(--ion-color-tertiary)}ion-fab-button[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}.cancel[_ngcontent-%COMP%]{margin-left:auto;width:24px;height:24px}"]}),i})()}];let y=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[p.iI.forChild(v),p.iI]}),i})(),C=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[a.bv,l.MD,c.YN,m.S,y]}),i})()}}]);