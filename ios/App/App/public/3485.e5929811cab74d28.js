"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3485],{3485:(F,u,g)=>{g.r(u),g.d(u,{LoginPageModule:()=>O});var p=g(177),d=g(4341),e=g(7896),c=g(4964),m=g(467),n=g(3953),f=g(2872),h=g(3112);function P(o,a){1&o&&(n.j41(0,"span"),n.EFF(1,"Se connecter"),n.k0s())}function M(o,a){1&o&&(n.j41(0,"span"),n.EFF(1,"Se connecter"),n.k0s())}const C=[{path:"",component:(()=>{var o;class a{constructor(t,i,r){this.navCntrl=t,this.loginService=i,this.router=r,this.name="",this.email="",this.password="",this.islogin=!1}ngOnInit(){}signup(){return(0,m.A)(function*(){return null})()}gotoLogin(){}loginWithCredentialsFunc(){this.islogin=!0,this.loginService.PwdEmailAuthLogin(this.email,this.password).then(t=>{this.islogin=!1,console.log(t),window.alert("Votre compte a bien \xe9t\xe9 identifi\xe9."),this.router.navigateByUrl("tabs")}).catch(t=>{this.islogin=!1,console.log(t),window.alert("Erreur d'authentification. Veuillez v\xe9rifier vos identifiants.")})}loginWithGoogleFunc(){this.islogin=!0,this.loginService.GoogleAuthLogin().then(t=>{this.islogin=!1,console.log(t)}).catch(t=>{this.islogin=!1,console.log(t)})}}return(o=a).\u0275fac=function(t){return new(t||o)(n.rXU(f.q9),n.rXU(h.H),n.rXU(c.Ix))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-login"]],decls:28,vars:4,consts:[[1,"head"],["src","assets\\images\\logo.png","alt","",1,"logo"],["color","primary",1,"titre"],[1,"form"],["placeholder","email","type","email",3,"ngModelChange","ngModel"],["id","messa","placeholder","Mot-de-passe","type","Password",3,"ngModelChange","ngModel"],["id","button",3,"click"],[4,"ngIf"],["name","logo-google","slot","start"],["id","link"],["id","org","routerLink","/inscription"]],template:function(t,i){1&t&&(n.nrm(0,"ion-header"),n.j41(1,"ion-content")(2,"ion-toolbar")(3,"ion-title"),n.EFF(4,"Login"),n.k0s()(),n.j41(5,"div",0),n.nrm(6,"ion-img",1),n.j41(7,"ion-label",2),n.EFF(8,"Se connecter"),n.k0s(),n.nrm(9,"br")(10,"br"),n.k0s(),n.j41(11,"ion-list",3)(12,"ion-input",4),n.mxI("ngModelChange",function(l){return n.DH7(i.email,l)||(i.email=l),l}),n.k0s(),n.nrm(13,"br"),n.j41(14,"ion-input",5),n.mxI("ngModelChange",function(l){return n.DH7(i.password,l)||(i.password=l),l}),n.k0s()(),n.j41(15,"ion-button",6),n.bIt("click",function(){return i.loginWithCredentialsFunc()}),n.DNE(16,P,2,0,"span",7)(17,M,2,0,"span",7),n.k0s(),n.j41(18,"div"),n.EFF(19,"Ou"),n.k0s(),n.j41(20,"ion-button",6),n.bIt("click",function(){return i.loginWithGoogleFunc()}),n.nrm(21,"ion-icon",8),n.j41(22,"span"),n.EFF(23,"Connect by google"),n.k0s()(),n.j41(24,"div",9),n.EFF(25,"Pas de compte ?"),n.j41(26,"span",10),n.EFF(27," Cr\xe9er un compte"),n.k0s()()()),2&t&&(n.R7$(12),n.R50("ngModel",i.email),n.R7$(2),n.R50("ngModel",i.password),n.R7$(2),n.Y8G("ngIf",!i.islogin),n.R7$(),n.Y8G("ngIf",i.islogin))},dependencies:[p.bT,d.BC,d.vS,e.Jm,e.W9,e.eU,e.iq,e.KW,e.$w,e.he,e.nf,e.BC,e.ai,e.Gw,e.N7,c.Wk],styles:[".head[_ngcontent-%COMP%]{text-align:center}.head[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:200px;height:190px;display:block;margin-right:auto;margin-left:auto}.head[_ngcontent-%COMP%]   .titre[_ngcontent-%COMP%]{font-size:40px;font-weight:700}ion-content[_ngcontent-%COMP%]{text-align:center}.form[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.form[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:30px;background:#d9d9d9;margin-bottom:10px;margin-left:35px;width:85%;align-items:center;padding:10px;font-family:Poppins,sans-serif}p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;text-align:center;font-size:20px;font-weight:700}#mess[_ngcontent-%COMP%]{color:#000;font-family:poppins,sans-serif;font-size:100%}.t[_ngcontent-%COMP%]{margin:0 10px;font-size:20px}.log[_ngcontent-%COMP%]{text-decoration:none;color:#000;text-align:center;font-size:20px;font-weight:700}.log[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:700;color:#1e9c09;text-decoration:none}#org[_ngcontent-%COMP%]{color:#2b4724;font-size:large}#messa[_ngcontent-%COMP%]{margin-bottom:50px}div[_ngcontent-%COMP%]{font-size:large}ion-title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin-top:50px;color:#030303}ion-button[_ngcontent-%COMP%]{border-radius:100px;width:250px;margin-bottom:10px}#link[_ngcontent-%COMP%]{margin-top:5px}"]}),a})()}];let L=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[c.iI.forChild(C),c.iI]}),a})(),O=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[p.MD,d.YN,e.bv,L]}),a})()}}]);