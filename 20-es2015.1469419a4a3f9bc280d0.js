(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{B9zo:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c("XNiG"),a=c("1G5W"),i=c("fXoL"),l=c("h2q7");let o=(()=>{class e{constructor(e,t,c){this._elementRef=e,this._fuseMediaMatchService=t,this._renderer=c,this._unsubscribeAll=new n.a}ngOnInit(){this._parent=this._renderer.parentNode(this._elementRef.nativeElement),this._parent&&(this._grandParent=this._renderer.parentNode(this._parent),this._fuseMediaMatchService.onMediaChange.pipe(Object(a.a)(this._unsubscribeAll)).subscribe(e=>{"xs"===e?this._removeClass():this._addClass()}))}ngOnDestroy(){this._parent&&(this._removeClass(),this._unsubscribeAll.next(),this._unsubscribeAll.complete())}_addClass(){this._renderer.addClass(this._grandParent,"inner-scroll")}_removeClass(){this._renderer.removeClass(this._grandParent,"inner-scroll")}}return e.\u0275fac=function(t){return new(t||e)(i.Vb(i.l),i.Vb(l.a),i.Vb(i.I))},e.\u0275dir=i.Qb({type:e,selectors:[["",8,"inner-scroll"]]}),e})()},ZRnV:function(e,t,c){"use strict";c.r(t);var n=c("tyNb"),a=c("bTqV"),i=c("FKr1"),l=c("NFeN"),o=c("1jcm"),r=c("+0xr"),s=c("5HBU"),b=c("LPQX"),d=c("2Vo4"),f=c("fXoL"),u=c("tk/3");let m=(()=>{class e{constructor(e){this._httpClient=e,this.onFilesChanged=new d.a({}),this.onFileSelected=new d.a({})}resolve(e,t){return new Promise((e,t)=>{Promise.all([this.getFiles()]).then(([t])=>{e()},t)})}getFiles(){return new Promise((e,t)=>{this._httpClient.get("api/file-manager").subscribe(t=>{this.onFilesChanged.next(t),this.onFileSelected.next(t[0]),e(t)},t)})}}return e.\u0275fac=function(t){return new(t||e)(f.fc(u.b))},e.\u0275prov=f.Rb({token:e,factory:e.\u0275fac}),e})();var h=c("XNiG"),g=c("1G5W"),p=c("PVWW"),x=c("HX77"),_=c("B9zo"),w=c("fE3o"),v=c("XiUz"),C=c("EwFO");let M=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Pb({type:e,selectors:[["file-manager-main-sidebar"]],decls:38,vars:0,consts:[["fxLayout","column","fxLayoutAlign","space-between",1,"header","p-24"],["fxLayout","row","fxLayoutAlign","start center",1,"logo"],[1,"logo-icon","secondary-text","s-36","mr-16"],[1,"logo-text","h1"],["fusePerfectScrollbar","",1,"content","py-16"],[1,"nav","material2"],["aria-label","inbox",1,"nav-item"],["matRipple","",1,"nav-link"],[1,"nav-link-icon"],[1,"title"],["aria-label","starred",1,"nav-item"]],template:function(e,t){1&e&&(f.bc(0,"div",0),f.bc(1,"div",1),f.bc(2,"mat-icon",2),f.Uc(3,"folder"),f.ac(),f.bc(4,"span",3),f.Uc(5,"File Manager"),f.ac(),f.ac(),f.ac(),f.bc(6,"div",4),f.bc(7,"div",5),f.bc(8,"div",6),f.bc(9,"a",7),f.bc(10,"mat-icon",8),f.Uc(11,"folder"),f.ac(),f.bc(12,"span",9),f.Uc(13,"My Files"),f.ac(),f.ac(),f.ac(),f.bc(14,"div",10),f.bc(15,"a",7),f.bc(16,"mat-icon",8),f.Uc(17,"star"),f.ac(),f.bc(18,"div",9),f.Uc(19,"Starred"),f.ac(),f.ac(),f.ac(),f.bc(20,"div",10),f.bc(21,"a",7),f.bc(22,"mat-icon",8),f.Uc(23,"folder_shared"),f.ac(),f.bc(24,"div",9),f.Uc(25,"Sharred with me"),f.ac(),f.ac(),f.ac(),f.bc(26,"div",10),f.bc(27,"a",7),f.bc(28,"mat-icon",8),f.Uc(29,"access_time"),f.ac(),f.bc(30,"div",9),f.Uc(31,"Recent"),f.ac(),f.ac(),f.ac(),f.bc(32,"div",10),f.bc(33,"a",7),f.bc(34,"mat-icon",8),f.Uc(35,"not_interested"),f.ac(),f.bc(36,"div",9),f.Uc(37,"Offline"),f.ac(),f.ac(),f.ac(),f.ac(),f.ac())},directives:[v.e,v.d,l.a,C.a,i.r],styles:["[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1 0 auto;height:100%}[_nghost-%COMP%] > .header[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 1 auto;border-bottom:1px solid rgba(0,0,0,.12)}"]}),e})();var S=c("ofXK"),y=c("0EQZ"),O=c("znSr");function P(e,t){1&e&&f.Wb(0,"mat-header-cell",21)}function U(e,t){if(1&e&&(f.bc(0,"mat-cell",21),f.Wb(1,"mat-icon",22),f.ac()),2&e){const e=t.$implicit;f.Hb(1),f.uc("ngClass",e.type)}}function H(e,t){1&e&&(f.bc(0,"mat-header-cell"),f.Uc(1,"Name"),f.ac())}function k(e,t){if(1&e&&(f.bc(0,"mat-cell"),f.Uc(1),f.ac()),2&e){const e=t.$implicit;f.Hb(1),f.Wc(" ",e.name,"")}}function A(e,t){1&e&&(f.bc(0,"mat-header-cell",23),f.Uc(1,"Type"),f.ac())}function D(e,t){if(1&e&&(f.bc(0,"mat-cell",23),f.Uc(1),f.ac()),2&e){const e=t.$implicit;f.Hb(1),f.Wc(" ",e.type,"")}}function F(e,t){1&e&&(f.bc(0,"mat-header-cell",24),f.Uc(1,"Owner"),f.ac())}function L(e,t){if(1&e&&(f.bc(0,"mat-cell",24),f.Uc(1),f.ac()),2&e){const e=t.$implicit;f.Hb(1),f.Wc(" ",e.owner,"")}}function V(e,t){1&e&&(f.bc(0,"mat-header-cell",24),f.Uc(1,"Size"),f.ac())}function W(e,t){if(1&e&&(f.bc(0,"mat-cell",24),f.Uc(1),f.ac()),2&e){const e=t.$implicit;f.Hb(1),f.Vc(""===e.size?"-":e.size)}}function z(e,t){1&e&&(f.bc(0,"mat-header-cell",23),f.Uc(1,"Modified"),f.ac())}function j(e,t){if(1&e&&(f.bc(0,"mat-cell",23),f.Uc(1),f.ac()),2&e){const e=t.$implicit;f.Hb(1),f.Vc(e.modified)}}function R(e,t){1&e&&f.Wb(0,"mat-header-cell",25)}function I(e,t){if(1&e){const e=f.cc();f.bc(0,"mat-cell",25),f.bc(1,"button",26),f.jc("click",(function(t){return f.Kc(e),f.nc().toggleSidebar("file-manager-details-sidebar")})),f.bc(2,"mat-icon",27),f.Uc(3,"info"),f.ac(),f.ac(),f.ac()}}function Z(e,t){1&e&&f.Wb(0,"mat-header-row")}const $=function(e){return{selected:e}},N=function(){return{y:"100%"}},T=function(e){return{value:"*",params:e}};function X(e,t){if(1&e){const e=f.cc();f.bc(0,"mat-row",28),f.jc("click",(function(c){f.Kc(e);const n=t.$implicit;return f.nc().onSelect(n)})),f.ac()}if(2&e){const e=t.$implicit,c=f.nc();f.uc("ngClass",f.xc(2,$,e==c.selected))("@animate",f.xc(5,T,f.wc(4,N)))}}const Y=function(){return{value:"50"}};let E=(()=>{class e{constructor(e,t){this._fileManagerService=e,this._fuseSidebarService=t,this.displayedColumns=["icon","name","type","owner","size","modified","detail-button"],this._unsubscribeAll=new h.a}ngOnInit(){this.dataSource=new G(this._fileManagerService),this._fileManagerService.onFilesChanged.pipe(Object(g.a)(this._unsubscribeAll)).subscribe(e=>{this.files=e}),this._fileManagerService.onFileSelected.pipe(Object(g.a)(this._unsubscribeAll)).subscribe(e=>{this.selected=e})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}onSelect(e){this._fileManagerService.onFileSelected.next(e)}toggleSidebar(e){this._fuseSidebarService.getSidebar(e).toggleOpen()}}return e.\u0275fac=function(t){return new(t||e)(f.Vb(m),f.Vb(x.a))},e.\u0275cmp=f.Pb({type:e,selectors:[["file-list"]],decls:25,vars:5,consts:[[3,"dataSource"],["table",""],["matColumnDef","icon"],["fxFlex","64px",4,"matHeaderCellDef"],["fxFlex","64px",4,"matCellDef"],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","type"],["fxHide","","fxShow.gt-md","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-md","",4,"matCellDef"],["matColumnDef","owner"],["fxHide.xs","",4,"matHeaderCellDef"],["fxHide.xs","",4,"matCellDef"],["matColumnDef","size"],["matColumnDef","modified"],["matColumnDef","detail-button"],["fxFlex","48px","fxHide.gt-md","",4,"matHeaderCellDef"],["fxFlex","48px","fxHide.gt-md","",4,"matCellDef"],[4,"matHeaderRowDef"],[3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["fxFlex","64px"],[1,"type-icon",3,"ngClass"],["fxHide","","fxShow.gt-md",""],["fxHide.xs",""],["fxFlex","48px","fxHide.gt-md",""],["mat-icon-button","","fxHide.gt-md","",1,"sidebar-toggle",3,"click"],[1,"secondary-text"],[3,"ngClass","click"]],template:function(e,t){1&e&&(f.bc(0,"mat-table",0,1),f.Zb(2,2),f.Sc(3,P,1,0,"mat-header-cell",3),f.Sc(4,U,2,1,"mat-cell",4),f.Yb(),f.Zb(5,5),f.Sc(6,H,2,0,"mat-header-cell",6),f.Sc(7,k,2,1,"mat-cell",7),f.Yb(),f.Zb(8,8),f.Sc(9,A,2,0,"mat-header-cell",9),f.Sc(10,D,2,1,"mat-cell",10),f.Yb(),f.Zb(11,11),f.Sc(12,F,2,0,"mat-header-cell",12),f.Sc(13,L,2,1,"mat-cell",13),f.Yb(),f.Zb(14,14),f.Sc(15,V,2,0,"mat-header-cell",12),f.Sc(16,W,2,1,"mat-cell",13),f.Yb(),f.Zb(17,15),f.Sc(18,z,2,0,"mat-header-cell",9),f.Sc(19,j,2,1,"mat-cell",10),f.Yb(),f.Zb(20,16),f.Sc(21,R,1,0,"mat-header-cell",17),f.Sc(22,I,4,0,"mat-cell",18),f.Yb(),f.Sc(23,Z,1,0,"mat-header-row",19),f.Sc(24,X,1,7,"mat-row",20),f.ac()),2&e&&(f.uc("dataSource",t.dataSource)("@animateStagger",f.wc(4,Y)),f.Hb(23),f.uc("matHeaderRowDef",t.displayedColumns),f.Hb(1),f.uc("matRowDefColumns",t.displayedColumns))},directives:[r.j,r.c,r.e,r.b,r.g,r.i,r.d,v.b,r.a,l.a,S.q,O.a,O.b,a.b,r.f,r.h],styles:["file-list{width:100%}file-list .mat-table{background:transparent;box-shadow:none}file-list .mat-table .mat-row{position:relative;cursor:pointer;min-height:64px}"],encapsulation:2,data:{animation:p.a}}),e})();class G extends y.b{constructor(e){super(),this._fileManagerService=e}connect(){return this._fileManagerService.onFilesChanged}disconnect(){}}var K=c("3Pt+");const q=function(){return{delay:"200ms"}},B=function(e){return{value:"*",params:e}};let Q=(()=>{class e{constructor(e){this._fileManagerService=e,this._unsubscribeAll=new h.a}ngOnInit(){this._fileManagerService.onFileSelected.pipe(Object(g.a)(this._unsubscribeAll)).subscribe(e=>{this.selected=e})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return e.\u0275fac=function(t){return new(t||e)(f.Vb(m))},e.\u0275cmp=f.Pb({type:e,selectors:[["file-manager-details-sidebar"]],decls:64,vars:15,consts:[["fxLayout","column","fxLayoutAlign","space-between",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","end center",1,"toolbar"],["mat-icon-button","","matTooltip","Delete"],["mat-icon-button","","aria-label","Download","matTooltip","Download",1,""],["mat-icon-button","","aria-label","More","matTooltip","More"],[1,"title","mb-8"],[1,"subtitle","secondary-text"],["fusePerfectScrollbar","",1,"content","p-24"],[1,"file-details"],["fxLayout","row","fxLayoutAlign","center center",1,"preview","file-icon"],[1,"type-icon","s-48",3,"ngClass"],[1,"offline-switch"],["labelPosition","before",3,"ngModel","ngModelChange"],[1,"title"],[1,"type"],[1,"size"],[1,"location"],[1,"owner"],[1,"modified"],[1,"opened"],[1,"created"]],template:function(e,t){1&e&&(f.bc(0,"div",0),f.bc(1,"div",1),f.bc(2,"button",2),f.bc(3,"mat-icon"),f.Uc(4,"delete"),f.ac(),f.ac(),f.bc(5,"button",3),f.bc(6,"mat-icon"),f.Uc(7,"file_download"),f.ac(),f.ac(),f.bc(8,"button",4),f.bc(9,"mat-icon"),f.Uc(10,"more_vert"),f.ac(),f.ac(),f.ac(),f.bc(11,"div"),f.bc(12,"div",5),f.Uc(13),f.ac(),f.bc(14,"div",6),f.bc(15,"span"),f.Uc(16,"Edited"),f.ac(),f.bc(17,"span"),f.Uc(18),f.ac(),f.ac(),f.ac(),f.ac(),f.bc(19,"div",7),f.bc(20,"div",8),f.bc(21,"div",9),f.Wb(22,"mat-icon",10),f.ac(),f.bc(23,"div",11),f.bc(24,"mat-slide-toggle",12),f.jc("ngModelChange",(function(e){return t.selected.offline=e})),f.Uc(25,"Available Offline"),f.ac(),f.ac(),f.bc(26,"div",13),f.Uc(27,"Info"),f.ac(),f.bc(28,"table"),f.bc(29,"tr",14),f.bc(30,"th"),f.Uc(31,"Type"),f.ac(),f.bc(32,"td"),f.Uc(33),f.ac(),f.ac(),f.bc(34,"tr",15),f.bc(35,"th"),f.Uc(36,"Size"),f.ac(),f.bc(37,"td"),f.Uc(38),f.ac(),f.ac(),f.bc(39,"tr",16),f.bc(40,"th"),f.Uc(41,"Location"),f.ac(),f.bc(42,"td"),f.Uc(43),f.ac(),f.ac(),f.bc(44,"tr",17),f.bc(45,"th"),f.Uc(46,"Owner"),f.ac(),f.bc(47,"td"),f.Uc(48),f.ac(),f.ac(),f.bc(49,"tr",18),f.bc(50,"th"),f.Uc(51,"Modified"),f.ac(),f.bc(52,"td"),f.Uc(53),f.ac(),f.ac(),f.bc(54,"tr",19),f.bc(55,"th"),f.Uc(56,"Opened"),f.ac(),f.bc(57,"td"),f.Uc(58),f.ac(),f.ac(),f.bc(59,"tr",20),f.bc(60,"th"),f.Uc(61,"Created"),f.ac(),f.bc(62,"td"),f.Uc(63),f.ac(),f.ac(),f.ac(),f.ac(),f.ac()),2&e&&(f.Hb(13),f.Vc(t.selected.name),f.Hb(5),f.Wc(": ",t.selected.modified,""),f.Hb(2),f.uc("@animate",f.xc(13,B,f.wc(12,q))),f.Hb(2),f.uc("ngClass",t.selected.type),f.Hb(2),f.uc("ngModel",t.selected.offline),f.Hb(9),f.Vc(t.selected.type),f.Hb(5),f.Vc(""===t.selected.size?"-":t.selected.size),f.Hb(5),f.Vc(t.selected.location),f.Hb(5),f.Vc(t.selected.owner),f.Hb(5),f.Vc(t.selected.modified),f.Hb(5),f.Vc(t.selected.opened),f.Hb(5),f.Vc(t.selected.created))},directives:[v.e,v.d,a.b,l.a,C.a,S.q,O.a,o.a,K.o,K.r],styles:["[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1 1 auto;height:100%}[_nghost-%COMP%] > .header[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 1 auto;height:160px;min-height:160px;max-height:160px}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{height:240px}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .offline-switch[_ngcontent-%COMP%]{padding-bottom:16px;font-weight:600}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:16px 0}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;text-align:left}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:16px 0}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.owner[_ngcontent-%COMP%], [_nghost-%COMP%] > .content[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.type[_ngcontent-%COMP%]{text-transform:capitalize}"],data:{animation:p.a}}),e})();function J(e,t){1&e&&(f.bc(0,"mat-icon",19),f.Uc(1,"chevron_right"),f.ac())}function ee(e,t){if(1&e&&(f.bc(0,"div",17),f.bc(1,"span"),f.Uc(2),f.ac(),f.Sc(3,J,2,0,"mat-icon",18),f.ac()),2&e){const e=t.$implicit,c=t.last;f.Hb(2),f.Vc(e),f.Hb(1),f.uc("ngIf",!c)}}const te=function(){return{x:"50px"}},ce=function(e){return{value:"*",params:e}},ne=function(){return{delay:"300ms",scale:"0.2"}};let ae=(()=>{class e{constructor(e,t){this._fileManagerService=e,this._fuseSidebarService=t,this._unsubscribeAll=new h.a}ngOnInit(){this._fileManagerService.onFileSelected.pipe(Object(g.a)(this._unsubscribeAll)).subscribe(e=>{this.selected=e,this.pathArr=e.location.split(">")})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}toggleSidebar(e){this._fuseSidebarService.getSidebar(e).toggleOpen()}}return e.\u0275fac=function(t){return new(t||e)(f.Vb(m),f.Vb(x.a))},e.\u0275cmp=f.Pb({type:e,selectors:[["file-manager"]],decls:26,vars:9,consts:[["id","file-manager",1,"page-layout","simple","right-sidebar","inner-scroll"],["name","file-manager-main-sidebar","position","left",1,"sidebar","main-sidebar"],["fxFlex","",1,"center"],["fxLayout","column","fxLayoutAlign","space-between start",1,"header","accent","p-24"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between start",1,"toolbar","w-100-p"],["fxLayout","row",1,"left-side"],["mat-icon-button","",1,"sidebar-toggle",3,"click"],["fxLayout","row",1,"right-side"],["mat-icon-button","","aria-label","Search","matTooltip","Search"],["fxLayout","row","fxLayoutAlign","start center",1,"breadcrumb","text-truncate","h1","pl-72"],["fxLayout","row","fxLayoutAlign","start center",4,"ngFor","ngForOf"],[1,"file-uploader"],["hidden","","type","file"],["fileInput",""],["mat-fab","","color","warn","aria-label","Add file",1,"add-file-button",3,"click"],["fusePerfectScrollbar","",1,"content"],["name","file-manager-details-sidebar","position","right","lockedOpen","gt-md",1,"sidebar","details-sidebar"],["fxLayout","row","fxLayoutAlign","start center"],["class","separator",4,"ngIf"],[1,"separator"]],template:function(e,t){if(1&e){const e=f.cc();f.bc(0,"div",0),f.bc(1,"fuse-sidebar",1),f.Wb(2,"file-manager-main-sidebar"),f.ac(),f.bc(3,"div",2),f.bc(4,"div",3),f.bc(5,"div",4),f.bc(6,"div",5),f.bc(7,"button",6),f.jc("click",(function(e){return t.toggleSidebar("file-manager-main-sidebar")})),f.bc(8,"mat-icon"),f.Uc(9,"menu"),f.ac(),f.ac(),f.ac(),f.bc(10,"div",7),f.bc(11,"button",8),f.bc(12,"mat-icon"),f.Uc(13,"search"),f.ac(),f.ac(),f.ac(),f.ac(),f.bc(14,"div",9),f.Sc(15,ee,4,2,"div",10),f.ac(),f.bc(16,"div",11),f.Wb(17,"input",12,13),f.bc(19,"button",14),f.jc("click",(function(t){return f.Kc(e),f.Gc(18).click()})),f.bc(20,"mat-icon"),f.Uc(21,"add"),f.ac(),f.ac(),f.ac(),f.ac(),f.bc(22,"div",15),f.Wb(23,"file-list"),f.ac(),f.ac(),f.bc(24,"fuse-sidebar",16),f.Wb(25,"file-manager-details-sidebar"),f.ac(),f.ac()}2&e&&(f.Hb(14),f.uc("@animate",f.xc(4,ce,f.wc(3,te))),f.Hb(1),f.uc("ngForOf",t.pathArr),f.Hb(4),f.uc("@animate",f.xc(7,ce,f.wc(6,ne))))},directives:[_.a,w.a,M,v.b,v.e,v.d,a.b,l.a,S.s,C.a,E,Q,S.t],styles:['#file-manager .sidebar{width:320px!important;min-width:320px!important;max-width:320px!important}@media screen and (min-width:1280px){#file-manager .sidebar.details-sidebar{z-index:0}}#file-manager .center{overflow:hidden}#file-manager .center .header{position:relative;height:160px;min-height:160px;max-height:160px}@media screen and (max-width:959px){#file-manager .center .header{height:120px;min-height:120px;max-height:120px}}#file-manager .center .header .add-file-button{position:absolute;bottom:-28px;left:16px;z-index:999}#file-manager .center .content{-webkit-box-flex:1;flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch}#file-manager .type-icon.folder:before{content:"folder";color:#ffb300}#file-manager .type-icon.document:before{content:"insert_drive_file";color:#1565c0}#file-manager .type-icon.spreadsheet:before{content:"insert_chart";color:#4caf50}'],encapsulation:2,data:{animation:p.a}}),e})();c.d(t,"FileManagerModule",(function(){return le}));const ie=[{path:"**",component:ae,children:[],resolve:{files:m}}];let le=(()=>{class e{}return e.\u0275mod=f.Tb({type:e}),e.\u0275inj=f.Sb({factory:function(t){return new(t||e)},providers:[m],imports:[[n.k.forChild(ie),a.c,l.b,i.s,o.b,r.k,s.a,b.i]]}),e})()}}]);