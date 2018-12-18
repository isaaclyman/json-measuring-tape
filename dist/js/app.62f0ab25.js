(function(e){function t(t){for(var r,l,i=t[0],s=t[1],c=t[2],p=0,d=[];p<i.length;p++)l=i[p],o[l]&&d.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/json-measuring-tape/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"37cd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-root"},[n("h1",[e._v("📏 Welcome to JSON Measuring Tape.")]),n("div",[e._v("\n    Paste your JSON into the box below.\n    I'll provide a navigable tree where you can explore each property and sub-property by size.\n  ")]),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.json,expression:"json"}],staticClass:"json-textarea",domProps:{value:e.json},on:{input:function(t){t.target.composing||(e.json=t.target.value)}}})]),n("button",{staticClass:"button-calculate",on:{click:function(t){e.calculate()}}},[e._v("Calculate")]),e.jsonError?n("div",{staticClass:"error"},[n("div",[e._v("JSON validation failed. Error:")]),n("div",{domProps:{textContent:e._s(e.jsonError)}})]):e._e(),e.calculated?[n("h3",[e._v("Calculated tree:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.showAllRows,expression:"showAllRows"}],attrs:{id:"show-all-rows",type:"checkbox"},domProps:{checked:Array.isArray(e.showAllRows)?e._i(e.showAllRows,null)>-1:e.showAllRows},on:{change:function(t){var n=e.showAllRows,r=t.target,o=!!r.checked;if(Array.isArray(n)){var a=null,l=e._i(n,a);r.checked?l<0&&(e.showAllRows=n.concat([a])):l>-1&&(e.showAllRows=n.slice(0,l).concat(n.slice(l+1)))}else e.showAllRows=o}}}),n("label",{attrs:{for:"show-all-rows"}},[e._v("Expand all")]),e.calculated?n("div",{staticClass:"tree"},[n("json-row",{attrs:{input:e.calculated,"show-all":e.showAllRows,depth:0}})],1):e._e()]:e._e()],2)},a=[],l=(n("c5f6"),n("6762"),n("2fdb"),n("53ca")),i=(n("6b54"),n("ac6a"),n("456d"),n("d4ec")),s=n("bee2"),c="simple",u="object",p="array",d=function(){function e(t){Object(i["a"])(this,e),this.parsed=JSON.parse(t),this.calculated={},this.fullSize=null}return Object(s["a"])(e,[{key:"calculate",value:function(){var e=this.size(this.parsed);this.fullSize=e;var t=this.type(this.parsed);return t===c?h("[[root]]","simple",e,100):t===p?h("[[root]]","array",e,100,this.calculateArray(this.parsed)):t===u?h("[[root]]","object",e,100,this.calculateObject(this.parsed)):void 0}},{key:"calculateArray",value:function(e){var t=this;return e.map(function(e,n){return t.calculateItem(e,n)})}},{key:"calculateObject",value:function(e){var t=this;return Object.keys(e).map(function(n){return t.calculateItem(e[n],n)})}},{key:"calculateItem",value:function(e,t){var n=this.size(e),r=this.type(e),o=null;return r===u?o=this.calculateObject(e):r===p&&(o=this.calculateArray(e)),h(t.toString(),r,n,this.percent(n),o)}},{key:"type",value:function(e){var t=Object(l["a"])(e);if(null===e||["number","boolean","undefined","string","function"].includes(t))return c;if(Array.isArray(e))return p;if("object"===t)return u;throw new Error('Item of type "'.concat(t,'" could not be categorized. Item: ').concat(e))}},{key:"size",value:function(e){return new Blob([JSON.stringify(e)]).size}},{key:"percent",value:function(e){var t=e/this.fullSize*100;return Number(t.toFixed(2))}}]),e}();function h(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{name:e,type:t,size:n,percent:r,children:o}}var f={aNumber:1,aNull:null,anUndefined:void 0,aString:"bob",aBoolean:!0,aFunction:function(e){return e},anObject:{number2:2},anArray:[{number3:3},4]},v=(h("[[root]]","object",25e6,100,[h("aNumber","simple",1e3,10),h("aNull","simple",200,20),h("anUndefined","simple",30,30),h("aString","simple",4,40),h("aBoolean","simple",5,10),h("aFunction","simple",6,20),h("anObject","object",7,30,[h("number2","simple",8,40)]),h("anArray","array",9,10,[h("0","object",10,20,[h("number3","simple",11,30)]),h("1","simple",12,40)])]),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"json-row-root"},[n("div",{staticClass:"current-row",style:e.currentRowStyle},[e.input.children?n("button",{staticClass:"button-expand",style:{cursor:e.showAll?"default":"pointer"},on:{click:function(t){e.toggleChildren()}}},[e._v("\n      "+e._s(e.expandButtonIndicator)+"\n    ")]):e._e(),n("span",{staticClass:"row-info"},[e._v("\n      "+e._s(e.input.name)+": "+e._s(e.displaySize)+" ("+e._s(e.input.percent)+"%)\n    ")])]),e.input.children?n("div",{directives:[{name:"show",rawName:"v-show",value:e.showChildren||e.showAll,expression:"showChildren || showAll"}],staticClass:"next-row"},e._l(e.input.children,function(t){return n("json-row",{key:t.name,attrs:{input:t,"show-all":e.showAll,depth:e.depth+1}})}),1):e._e()])}),w=[],b=["148, 0, 211","255, 0, 0","75, 0, 130","255, 127, 0","0, 0, 255","255, 255, 0","0, 255, 0"];function y(e){var t=b[e%b.length];return"rgba(".concat(t,", 0.1)")}var m={computed:{currentRowStyle:function(){return{backgroundColor:y(this.depth)}},displaySize:function(){var e=this.input.size;if(e<1e3)return"".concat(e,"B");if(e<1e6){var t=e/1e3;return"".concat(this.floatToDisplay(t),"KB")}if(e<1e9){var n=e/1e6;return"".concat(this.floatToDisplay(n),"MB")}if(e<1e12){var r=e/1e9;return"".concat(this.floatToDisplay(r),"GB")}var o=e/1e12;return"".concat(this.floatToDisplay(o),"TB")},expandButtonIndicator:function(){return this.showAll?">":this.showChildren?"-":"+"}},data:function(){return{showChildren:!1}},methods:{floatToDisplay:function(e){return Number(e.toFixed(2))},toggleChildren:function(){this.showAll||(this.showChildren=!this.showChildren)}},name:"json-row",props:{input:{type:Object,required:!0},showAll:{type:Boolean,required:!0},depth:{type:Number,required:!0}}},j=m,g=(n("b694"),n("2877")),_=Object(g["a"])(j,v,w,!1,null,"422ac760",null);_.options.__file="json-row.vue";var A=_.exports,O={components:{JsonRow:A},data:function(){return{calculated:null,json:"",jsonError:"",showAllRows:!1}},methods:{calculate:function(){this.jsonError="";var e=this.json;try{JSON.parse(e)}catch(t){throw this.jsonError=t.message,t}this.calculated=new d(JSON.stringify(f)).calculate()}}},x=O,C=(n("f587"),Object(g["a"])(x,o,a,!1,null,"0d53a5fd",null));C.options.__file="App.vue";var S=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(S)}}).$mount("#app")},b694:function(e,t,n){"use strict";var r=n("e9cd"),o=n.n(r);o.a},e9cd:function(e,t,n){},f587:function(e,t,n){"use strict";var r=n("37cd"),o=n.n(r);o.a}});
//# sourceMappingURL=app.62f0ab25.js.map