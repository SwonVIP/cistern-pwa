(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminModule",function(){return d});var i=n("ofXK"),o=n("tyNb"),r=n("3Pt+"),a=n("fXoL"),c=n("pzLA"),s=n("dNgK"),m=n("kmnG"),u=n("qFsG"),b=n("bTqV");function p(e,t){1&e&&(a.Qb(0,"p"),a.pc(1,"Using configured dummy demo API Key"),a.Pb())}const f=[{path:"",component:(()=>{class e{constructor(e,t){this.saveConfigService=e,this._snackBar=t,this.configForm=new r.d({apiKey:new r.b("")}),this.dummyKey=!1}ngOnInit(){const e=this.saveConfigService.getExisitingKeyFromStorage();this.configForm.patchValue({apiKey:e}),this.dummyKey=this.saveConfigService.isDummyKey()}submitForm(){var e;this.saveConfigService.saveKeyToStorage(null===(e=this.configForm.get("apiKey"))||void 0===e?void 0:e.value),this._snackBar.open("New key was saved","Got it",{duration:5e3}),this.dummyKey=this.saveConfigService.isDummyKey()}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a),a.Lb(s.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-api-key-config"]],decls:11,vars:2,consts:[[1,"apiKeyConfig-form-container"],[3,"formGroup","ngSubmit"],["formControlName","apiKey","placeholder","CC:50:E3:3B:F5:8B","matInput","","type","text"],["mat-raised-button","","color","primary"],[4,"ngIf"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"h2"),a.pc(2,"Add your API Key here"),a.Pb(),a.Qb(3,"form",1),a.Xb("ngSubmit",function(){return t.submitForm()}),a.Qb(4,"mat-form-field"),a.Qb(5,"mat-label"),a.pc(6,"API Key"),a.Pb(),a.Mb(7,"input",2),a.Pb(),a.Qb(8,"button",3),a.pc(9,"Save"),a.Pb(),a.Pb(),a.oc(10,p,2,0,"p",4),a.Pb()),2&e&&(a.Bb(3),a.dc("formGroup",t.configForm),a.Bb(7),a.dc("ngIf",t.dummyKey))},directives:[r.l,r.i,r.e,m.b,m.e,r.a,u.a,r.h,r.c,b.a,i.h],styles:[".apiKeyConfig-form-container[_ngcontent-%COMP%]{margin-left:3rem}"]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[o.c.forChild(f)],o.c]}),e})(),d=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[i.b,y,u.b,b.b,s.b,r.k]]}),e})()}}]);