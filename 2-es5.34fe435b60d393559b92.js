function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function _get(t,e,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=_superPropBase(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+0xr":function(t,e,r){"use strict";var n=r("8LU1"),o=r("0EQZ"),i=r("fXoL"),s=r("cH1L"),a=r("nLfN"),c=r("ofXK"),l=r("XNiG"),u=r("2Vo4"),f=r("HDdC"),h=r("LRne"),d=r("1G5W"),_=[[["caption"]]],y=["caption"];function p(t){return function(t){function e(){var t,r;_classCallCheck(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=_possibleConstructorReturn(this,(t=_getPrototypeOf(e)).call.apply(t,[this].concat(o))))._sticky=!1,r._hasStickyChanged=!1,r}return _inherits(e,t),_createClass(e,[{key:"hasStickyChanged",value:function(){var t=this._hasStickyChanged;return this._hasStickyChanged=!1,t}},{key:"resetStickyChanged",value:function(){this._hasStickyChanged=!1}},{key:"sticky",get:function(){return this._sticky},set:function(t){var e=this._sticky;this._sticky=Object(n.c)(t),this._hasStickyChanged=e!==this._sticky}}]),e}(t)}var m,w,k,C,v,b,R,g,D,S,O,E,x,P=((k=function t(e){_classCallCheck(this,t),this.template=e}).\u0275fac=function(t){return new(t||k)(i.Vb(i.P))},k.\u0275dir=i.Qb({type:k,selectors:[["","cdkCellDef",""]]}),k),F=((w=function t(e){_classCallCheck(this,t),this.template=e}).\u0275fac=function(t){return new(t||w)(i.Vb(i.P))},w.\u0275dir=i.Qb({type:w,selectors:[["","cdkHeaderCellDef",""]]}),w),A=((m=function t(e){_classCallCheck(this,t),this.template=e}).\u0275fac=function(t){return new(t||m)(i.Vb(i.P))},m.\u0275dir=i.Qb({type:m,selectors:[["","cdkFooterCellDef",""]]}),m),T=p((function t(){_classCallCheck(this,t)})),N=((C=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments)))._stickyEnd=!1,t}return _inherits(e,t),_createClass(e,[{key:"name",get:function(){return this._name},set:function(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))}},{key:"stickyEnd",get:function(){return this._stickyEnd},set:function(t){var e=this._stickyEnd;this._stickyEnd=Object(n.c)(t),this._hasStickyChanged=e!==this._stickyEnd}}]),e}(T)).\u0275fac=function(t){return H(t||C)},C.\u0275dir=i.Qb({type:C,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,e,r){var n;1&t&&(i.Nb(r,P,!0),i.Nb(r,F,!0),i.Nb(r,A,!0)),2&t&&(i.Fc(n=i.kc())&&(e.cell=n.first),i.Fc(n=i.kc())&&(e.headerCell=n.first),i.Fc(n=i.kc())&&(e.footerCell=n.first))},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[i.Gb([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:C}]),i.Eb]}),C),H=i.dc(N),V=function t(e,r){_classCallCheck(this,t),r.nativeElement.classList.add("cdk-column-".concat(e.cssClassFriendlyName))},Q=((R=function(t){function e(t,r){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,r))}return _inherits(e,t),e}(V)).\u0275fac=function(t){return new(t||R)(i.Vb(N),i.Vb(i.l))},R.\u0275dir=i.Qb({type:R,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[i.Eb]}),R),j=((b=function(t){function e(t,r){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,r))}return _inherits(e,t),e}(V)).\u0275fac=function(t){return new(t||b)(i.Vb(N),i.Vb(i.l))},b.\u0275dir=i.Qb({type:b,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:["role","gridcell",1,"cdk-cell"],features:[i.Eb]}),b),B=((v=function(){function t(e,r){_classCallCheck(this,t),this.template=e,this._differs=r}return _createClass(t,[{key:"ngOnChanges",value:function(t){if(!this._columnsDiffer){var e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}},{key:"getColumnsDiff",value:function(){return this._columnsDiffer.diff(this.columns)}},{key:"extractCellTemplate",value:function(t){return this instanceof M?t.headerCell.template:this instanceof X?t.footerCell.template:t.cell.template}}]),t}()).\u0275fac=function(t){i.ic()},v.\u0275dir=i.Qb({type:v,features:[i.Fb()]}),v),I=p(function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(B)),M=((g=function(t){function e(t,r){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,r))}return _inherits(e,t),_createClass(e,[{key:"ngOnChanges",value:function(t){_get(_getPrototypeOf(e.prototype),"ngOnChanges",this).call(this,t)}}]),e}(I)).\u0275fac=function(t){return new(t||g)(i.Vb(i.P),i.Vb(i.u))},g.\u0275dir=i.Qb({type:g,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[i.Eb,i.Fb()]}),g),L=p(function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(B)),X=((x=function(t){function e(t,r){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,r))}return _inherits(e,t),_createClass(e,[{key:"ngOnChanges",value:function(t){_get(_getPrototypeOf(e.prototype),"ngOnChanges",this).call(this,t)}}]),e}(L)).\u0275fac=function(t){return new(t||x)(i.Vb(i.P),i.Vb(i.u))},x.\u0275dir=i.Qb({type:x,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[i.Eb,i.Fb()]}),x),G=((E=function(t){function e(t,r){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,r))}return _inherits(e,t),e}(B)).\u0275fac=function(t){return new(t||E)(i.Vb(i.P),i.Vb(i.u))},E.\u0275dir=i.Qb({type:E,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[i.Eb]}),E),W=((O=function(){function t(e){_classCallCheck(this,t),this._viewContainer=e,t.mostRecentCellOutlet=this}return _createClass(t,[{key:"ngOnDestroy",value:function(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}]),t}()).\u0275fac=function(t){return new(t||O)(i.Vb(i.S))},O.\u0275dir=i.Qb({type:O,selectors:[["","cdkCellOutlet",""]]}),O.mostRecentCellOutlet=null,O),z=((S=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||S)},S.\u0275cmp=i.Pb({type:S,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Xb(0,0)},directives:[W],encapsulation:2}),S),U=((D=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||D)},D.\u0275cmp=i.Pb({type:D,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Xb(0,0)},directives:[W],encapsulation:2}),D),J=["top","bottom","left","right"],q=function(){function t(e,r,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];_classCallCheck(this,t),this._isNativeHtmlTable=e,this._stickCellCss=r,this.direction=n,this._isBrowser=o}return _createClass(t,[{key:"clearStickyPositioning",value:function(t,e){var r=!0,n=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var a=i.value;if(a.nodeType===a.ELEMENT_NODE){this._removeStickyStyle(a,e);for(var c=0;c<a.children.length;c++)this._removeStickyStyle(a.children[c],e)}}}catch(l){n=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}}},{key:"updateStickyColumns",value:function(t,e,r){var n=e.some((function(t){return t}))||r.some((function(t){return t}));if(t.length&&n&&this._isBrowser){var o=t[0],i=o.children.length,s=this._getCellWidths(o),a=this._getStickyStartColumnPositions(s,e),c=this._getStickyEndColumnPositions(s,r),l="rtl"===this.direction,u=!0,f=!1,h=void 0;try{for(var d,_=t[Symbol.iterator]();!(u=(d=_.next()).done);u=!0)for(var y=d.value,p=0;p<i;p++){var m=y.children[p];e[p]&&this._addStickyStyle(m,l?"right":"left",a[p]),r[p]&&this._addStickyStyle(m,l?"left":"right",c[p])}}catch(w){f=!0,h=w}finally{try{u||null==_.return||_.return()}finally{if(f)throw h}}}}},{key:"stickRows",value:function(t,e,r){if(this._isBrowser)for(var n="bottom"===r?t.reverse():t,o=0,i=0;i<n.length;i++)if(e[i]){var s=n[i];if(this._isNativeHtmlTable)for(var a=0;a<s.children.length;a++)this._addStickyStyle(s.children[a],r,o);else this._addStickyStyle(s,r,o);if(i===n.length-1)return;o+=s.getBoundingClientRect().height}}},{key:"updateStickyFooterContainer",value:function(t,e){if(this._isNativeHtmlTable){var r=t.querySelector("tfoot");e.some((function(t){return!t}))?this._removeStickyStyle(r,["bottom"]):this._addStickyStyle(r,"bottom",0)}}},{key:"_removeStickyStyle",value:function(t,e){var r=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var a=i.value;t.style[a]=""}}catch(c){n=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}t.style.zIndex=this._getCalculatedZIndex(t),J.some((function(e){return!!t.style[e]}))||(t.style.position="",t.classList.remove(this._stickCellCss))}},{key:"_addStickyStyle",value:function(t,e,r){t.classList.add(this._stickCellCss),t.style[e]="".concat(r,"px"),t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)}},{key:"_getCalculatedZIndex",value:function(t){var e={top:100,bottom:10,left:1,right:1},r=0,n=!0,o=!1,i=void 0;try{for(var s,a=J[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var c=s.value;t.style[c]&&(r+=e[c])}}catch(l){o=!0,i=l}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r?"".concat(r):""}},{key:"_getCellWidths",value:function(t){for(var e=[],r=t.children,n=0;n<r.length;n++)e.push(r[n].getBoundingClientRect().width);return e}},{key:"_getStickyStartColumnPositions",value:function(t,e){for(var r=[],n=0,o=0;o<t.length;o++)e[o]&&(r[o]=n,n+=t[o]);return r}},{key:"_getStickyEndColumnPositions",value:function(t,e){for(var r=[],n=0,o=t.length;o>0;o--)e[o]&&(r[o]=n,n+=t[o]);return r}}]),t}();function Z(t){return Error('Could not find column with id "'.concat(t,'".'))}var K,$,Y,tt,et=((tt=function t(e,r){_classCallCheck(this,t),this.viewContainer=e,this.elementRef=r}).\u0275fac=function(t){return new(t||tt)(i.Vb(i.S),i.Vb(i.l))},tt.\u0275dir=i.Qb({type:tt,selectors:[["","rowOutlet",""]]}),tt),rt=((Y=function t(e,r){_classCallCheck(this,t),this.viewContainer=e,this.elementRef=r}).\u0275fac=function(t){return new(t||Y)(i.Vb(i.S),i.Vb(i.l))},Y.\u0275dir=i.Qb({type:Y,selectors:[["","headerRowOutlet",""]]}),Y),nt=(($=function t(e,r){_classCallCheck(this,t),this.viewContainer=e,this.elementRef=r}).\u0275fac=function(t){return new(t||$)(i.Vb(i.S),i.Vb(i.l))},$.\u0275dir=i.Qb({type:$,selectors:[["","footerRowOutlet",""]]}),$),ot=((K=function(){function t(e,r,n,o,i,s,a){_classCallCheck(this,t),this._differs=e,this._changeDetectorRef=r,this._elementRef=n,this._dir=i,this._platform=a,this._onDestroy=new l.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._multiTemplateDataRows=!1,this.viewChange=new u.a({start:0,end:Number.MAX_VALUE}),o||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=s,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((function(e,r){return t.trackBy?t.trackBy(r.dataIndex,r.data):r}))}},{key:"ngAfterContentChecked",value:function(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()}},{key:"ngOnDestroy",value:function(){this._rowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(o.e)(this.dataSource)&&this.dataSource.disconnect(this)}},{key:"renderRows",value:function(){var t=this;this._renderRows=this._getAllRenderRows();var e=this._dataDiffer.diff(this._renderRows);if(e){var r=this._rowOutlet.viewContainer;e.forEachOperation((function(e,n,o){if(null==e.previousIndex)t._insertRow(e.item,o);else if(null==o)r.remove(n);else{var i=r.get(n);r.move(i,o)}})),this._updateRowIndexContext(),e.forEachIdentityChange((function(t){r.get(t.currentIndex).context.$implicit=t.item.data})),this.updateStickyColumnStyles()}}},{key:"setHeaderRowDef",value:function(t){this._customHeaderRowDefs=new Set([t]),this._headerRowDefChanged=!0}},{key:"setFooterRowDef",value:function(t){this._customFooterRowDefs=new Set([t]),this._footerRowDefChanged=!0}},{key:"addColumnDef",value:function(t){this._customColumnDefs.add(t)}},{key:"removeColumnDef",value:function(t){this._customColumnDefs.delete(t)}},{key:"addRowDef",value:function(t){this._customRowDefs.add(t)}},{key:"removeRowDef",value:function(t){this._customRowDefs.delete(t)}},{key:"addHeaderRowDef",value:function(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}},{key:"removeHeaderRowDef",value:function(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}},{key:"addFooterRowDef",value:function(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}},{key:"removeFooterRowDef",value:function(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}},{key:"updateStickyHeaderRowStyles",value:function(){var t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");var r=this._headerRowDefs.map((function(t){return t.sticky}));this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,r,"top"),this._headerRowDefs.forEach((function(t){return t.resetStickyChanged()}))}},{key:"updateStickyFooterRowStyles",value:function(){var t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");var r=this._footerRowDefs.map((function(t){return t.sticky}));this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,r,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach((function(t){return t.resetStickyChanged()}))}},{key:"updateStickyColumnStyles",value:function(){var t=this,e=this._getRenderedRows(this._headerRowOutlet),r=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(e),_toConsumableArray(r),_toConsumableArray(n)),["left","right"]),e.forEach((function(e,r){t._addStickyColumnStyles([e],t._headerRowDefs[r])})),this._rowDefs.forEach((function(e){for(var n=[],o=0;o<r.length;o++)t._renderRows[o].rowDef===e&&n.push(r[o]);t._addStickyColumnStyles(n,e)})),n.forEach((function(e,r){t._addStickyColumnStyles([e],t._footerRowDefs[r])})),Array.from(this._columnDefsByName.values()).forEach((function(t){return t.resetStickyChanged()}))}},{key:"_getAllRenderRows",value:function(){var t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(var r=0;r<this._data.length;r++){var n=this._data[r],o=this._getRenderRowsForData(n,r,e.get(n));this._cachedRenderRowsMap.has(n)||this._cachedRenderRowsMap.set(n,new WeakMap);for(var i=0;i<o.length;i++){var s=o[i],a=this._cachedRenderRowsMap.get(s.data);a.has(s.rowDef)?a.get(s.rowDef).push(s):a.set(s.rowDef,[s]),t.push(s)}}return t}},{key:"_getRenderRowsForData",value:function(t,e,r){return this._getRowDefs(t,e).map((function(n){var o=r&&r.has(n)?r.get(n):[];if(o.length){var i=o.shift();return i.dataIndex=e,i}return{data:t,rowDef:n,dataIndex:e}}))}},{key:"_cacheColumnDefs",value:function(){var t=this;this._columnDefsByName.clear(),it(this._contentColumnDefs,this._customColumnDefs).forEach((function(e){if(t._columnDefsByName.has(e.name))throw Error('Duplicate column definition name provided: "'.concat(e.name,'".'));t._columnDefsByName.set(e.name,e)}))}},{key:"_cacheRowDefs",value:function(){this._headerRowDefs=it(this._contentHeaderRowDefs,this._customHeaderRowDefs),this._footerRowDefs=it(this._contentFooterRowDefs,this._customFooterRowDefs),this._rowDefs=it(this._contentRowDefs,this._customRowDefs);var t=this._rowDefs.filter((function(t){return!t.when}));if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]}},{key:"_renderUpdatedColumns",value:function(){var t=function(t,e){return t||!!e.getColumnsDiff()};this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()}},{key:"_switchDataSource",value:function(t){this._data=[],Object(o.e)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}},{key:"_observeRenderChanges",value:function(){var t=this;if(this.dataSource){var e;if(Object(o.e)(this.dataSource)?e=this.dataSource.connect(this):this.dataSource instanceof f.a?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Object(h.a)(this.dataSource)),void 0===e)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=e.pipe(Object(d.a)(this._onDestroy)).subscribe((function(e){t._data=e||[],t.renderRows()}))}}},{key:"_forceRenderHeaderRows",value:function(){var t=this;this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((function(e,r){return t._renderRow(t._headerRowOutlet,e,r)})),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()}},{key:"_forceRenderFooterRows",value:function(){var t=this;this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((function(e,r){return t._renderRow(t._footerRowOutlet,e,r)})),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()}},{key:"_addStickyColumnStyles",value:function(t,e){var r=this,n=Array.from(e.columns||[]).map((function(t){var e=r._columnDefsByName.get(t);if(!e)throw Z(t);return e})),o=n.map((function(t){return t.sticky})),i=n.map((function(t){return t.stickyEnd}));this._stickyStyler.updateStickyColumns(t,o,i)}},{key:"_getRenderedRows",value:function(t){for(var e=[],r=0;r<t.viewContainer.length;r++){var n=t.viewContainer.get(r);e.push(n.rootNodes[0])}return e}},{key:"_getRowDefs",value:function(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];var r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter((function(r){return!r.when||r.when(e,t)}));else{var n=this._rowDefs.find((function(r){return r.when&&r.when(e,t)}))||this._defaultRowDef;n&&r.push(n)}if(!r.length)throw function(t){return Error("Could not find a matching row definition for the"+"provided row data: ".concat(JSON.stringify(t)))}(t);return r}},{key:"_insertRow",value:function(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})}},{key:"_renderRow",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.viewContainer.createEmbeddedView(e.template,n,r);var o=!0,i=!1,s=void 0;try{for(var a,c=this._getCellTemplates(e)[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var l=a.value;W.mostRecentCellOutlet&&W.mostRecentCellOutlet._viewContainer.createEmbeddedView(l,n)}}catch(u){i=!0,s=u}finally{try{o||null==c.return||c.return()}finally{if(i)throw s}}this._changeDetectorRef.markForCheck()}},{key:"_updateRowIndexContext",value:function(){for(var t=this._rowOutlet.viewContainer,e=0,r=t.length;e<r;e++){var n=t.get(e).context;n.count=r,n.first=0===e,n.last=e===r-1,n.even=e%2==0,n.odd=!n.even,this.multiTemplateDataRows?(n.dataIndex=this._renderRows[e].dataIndex,n.renderIndex=e):n.index=this._renderRows[e].dataIndex}}},{key:"_getCellTemplates",value:function(t){var e=this;return t&&t.columns?Array.from(t.columns,(function(r){var n=e._columnDefsByName.get(r);if(!n)throw Z(r);return t.extractCellTemplate(n)})):[]}},{key:"_applyNativeTableSections",value:function(){for(var t=this._document.createDocumentFragment(),e=0,r=[{tag:"thead",outlet:this._headerRowOutlet},{tag:"tbody",outlet:this._rowOutlet},{tag:"tfoot",outlet:this._footerRowOutlet}];e<r.length;e++){var n=r[e],o=this._document.createElement(n.tag);o.setAttribute("role","rowgroup"),o.appendChild(n.outlet.elementRef.nativeElement),t.appendChild(o)}this._elementRef.nativeElement.appendChild(t)}},{key:"_forceRenderDataRows",value:function(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()}},{key:"_checkStickyStates",value:function(){var t=function(t,e){return t||e.hasStickyChanged()};this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()}},{key:"_setupStickyStyler",value:function(){var t=this;this._stickyStyler=new q(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._platform.isBrowser),(this._dir?this._dir.change:Object(h.a)()).pipe(Object(d.a)(this._onDestroy)).subscribe((function(e){t._stickyStyler.direction=e,t.updateStickyColumnStyles()}))}},{key:"trackBy",get:function(){return this._trackByFn},set:function(t){Object(i.ab)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn("trackBy must be a function, but received ".concat(JSON.stringify(t),".")),this._trackByFn=t}},{key:"dataSource",get:function(){return this._dataSource},set:function(t){this._dataSource!==t&&this._switchDataSource(t)}},{key:"multiTemplateDataRows",get:function(){return this._multiTemplateDataRows},set:function(t){this._multiTemplateDataRows=Object(n.c)(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()}}]),t}()).\u0275fac=function(t){return new(t||K)(i.Vb(i.u),i.Vb(i.h),i.Vb(i.l),i.gc("role"),i.Vb(s.c,8),i.Vb(c.e),i.Vb(a.a))},K.\u0275cmp=i.Pb({type:K,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,e,r){var n;1&t&&(i.Nb(r,N,!0),i.Nb(r,G,!0),i.Nb(r,M,!0),i.Nb(r,X,!0)),2&t&&(i.Fc(n=i.kc())&&(e._contentColumnDefs=n),i.Fc(n=i.kc())&&(e._contentRowDefs=n),i.Fc(n=i.kc())&&(e._contentHeaderRowDefs=n),i.Fc(n=i.kc())&&(e._contentFooterRowDefs=n))},viewQuery:function(t,e){var r;1&t&&(i.Qc(et,!0),i.Qc(rt,!0),i.Qc(nt,!0)),2&t&&(i.Fc(r=i.kc())&&(e._rowOutlet=r.first),i.Fc(r=i.kc())&&(e._headerRowOutlet=r.first),i.Fc(r=i.kc())&&(e._footerRowOutlet=r.first))},hostAttrs:[1,"cdk-table"],inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows"},exportAs:["cdkTable"],ngContentSelectors:y,decls:4,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(i.tc(_),i.sc(0),i.Xb(1,0),i.Xb(2,1),i.Xb(3,2))},directives:[rt,et,nt],encapsulation:2}),K);function it(t,e){return t.toArray().concat(Array.from(e))}var st,at=((st=function t(){_classCallCheck(this,t)}).\u0275mod=i.Tb({type:st}),st.\u0275inj=i.Sb({factory:function(t){return new(t||st)},imports:[[c.c]]}),st),ct=r("FKr1");r("quSY"),r("VRyK"),r("itXk"),r("lJxs"),r.d(e,"a",(function(){return Ft})),r.d(e,"b",(function(){return gt})),r.d(e,"c",(function(){return Et})),r.d(e,"d",(function(){return Pt})),r.d(e,"e",(function(){return St})),r.d(e,"f",(function(){return Vt})),r.d(e,"g",(function(){return At})),r.d(e,"h",(function(){return jt})),r.d(e,"i",(function(){return Nt})),r.d(e,"j",(function(){return bt})),r.d(e,"k",(function(){return It}));var lt,ut,ft,ht,dt,_t,yt,pt,mt,wt,kt,Ct=[[["caption"]]],vt=["caption"],bt=((lt=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))).stickyCssClass="mat-table-sticky",t}return _inherits(e,t),e}(ot)).\u0275fac=function(t){return Rt(t||lt)},lt.\u0275cmp=i.Pb({type:lt,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],exportAs:["matTable"],features:[i.Gb([{provide:ot,useExisting:lt}]),i.Eb],ngContentSelectors:vt,decls:4,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(i.tc(Ct),i.sc(0),i.Xb(1,0),i.Xb(2,1),i.Xb(3,2))},directives:[rt,et,nt],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n'],encapsulation:2}),lt),Rt=i.dc(bt),gt=((ut=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(P)).\u0275fac=function(t){return Dt(t||ut)},ut.\u0275dir=i.Qb({type:ut,selectors:[["","matCellDef",""]],features:[i.Gb([{provide:P,useExisting:ut}]),i.Eb]}),ut),Dt=i.dc(gt),St=((ft=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(F)).\u0275fac=function(t){return Ot(t||ft)},ft.\u0275dir=i.Qb({type:ft,selectors:[["","matHeaderCellDef",""]],features:[i.Gb([{provide:F,useExisting:ft}]),i.Eb]}),ft),Ot=i.dc(St),Et=((ht=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(N)).\u0275fac=function(t){return xt(t||ht)},ht.\u0275dir=i.Qb({type:ht,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[i.Gb([{provide:N,useExisting:ht},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:ht}]),i.Eb]}),ht),xt=i.dc(Et),Pt=((yt=function(t){function e(t,r){var n;return _classCallCheck(this,e),n=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,r)),r.nativeElement.classList.add("mat-column-".concat(t.cssClassFriendlyName)),n}return _inherits(e,t),e}(Q)).\u0275fac=function(t){return new(t||yt)(i.Vb(N),i.Vb(i.l))},yt.\u0275dir=i.Qb({type:yt,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[i.Eb]}),yt),Ft=((_t=function(t){function e(t,r){var n;return _classCallCheck(this,e),n=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,r)),r.nativeElement.classList.add("mat-column-".concat(t.cssClassFriendlyName)),n}return _inherits(e,t),e}(j)).\u0275fac=function(t){return new(t||_t)(i.Vb(N),i.Vb(i.l))},_t.\u0275dir=i.Qb({type:_t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[i.Eb]}),_t),At=((dt=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(M)).\u0275fac=function(t){return Tt(t||dt)},dt.\u0275dir=i.Qb({type:dt,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[i.Gb([{provide:M,useExisting:dt}]),i.Eb]}),dt),Tt=i.dc(At),Nt=((pt=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(G)).\u0275fac=function(t){return Ht(t||pt)},pt.\u0275dir=i.Qb({type:pt,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[i.Gb([{provide:G,useExisting:pt}]),i.Eb]}),pt),Ht=i.dc(Nt),Vt=((mt=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(z)).\u0275fac=function(t){return Qt(t||mt)},mt.\u0275cmp=i.Pb({type:mt,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[i.Gb([{provide:z,useExisting:mt}]),i.Eb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Xb(0,0)},directives:[W],encapsulation:2}),mt),Qt=i.dc(Vt),jt=((wt=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(U)).\u0275fac=function(t){return Bt(t||wt)},wt.\u0275cmp=i.Pb({type:wt,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[i.Gb([{provide:U,useExisting:wt}]),i.Eb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&i.Xb(0,0)},directives:[W],encapsulation:2}),wt),Bt=i.dc(jt),It=((kt=function t(){_classCallCheck(this,t)}).\u0275mod=i.Tb({type:kt}),kt.\u0275inj=i.Sb({factory:function(t){return new(t||kt)},imports:[[at,c.c,ct.j]]}),kt)}}]);