webpackJsonp([35],{148:function(n,t,a){function o(n){a(629)}var i=a(0)(a(409),a(737),o,null,null);n.exports=i.exports},409:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{loader:null,loading:!1,loading2:!1,loading3:!1,loading4:!1}},watch:{loader:function(){var n=this,t=this.loader;this[t]=!this[t],setTimeout(function(){return n[t]=!1},3e3),this.loader=null}}}},584:function(n,t,a){t=n.exports=a(121)(void 0),t.push([n.i,".custom-loader{animation:loader 1s infinite;display:-ms-flexbox;display:flex}@keyframes loader{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},629:function(n,t,a){var o=a(584);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);a(122)("283528ba",o,!0)},737:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{light:"",secondary:"",loading:n.loading,disabled:n.loading},nativeOn:{click:function(t){n.loader="loading"}}},[n._v("\n    Accept Terms\n  ")]),a("v-btn",{staticClass:"blue-grey",attrs:{light:"",loading:n.loading3,disabled:n.loading3},nativeOn:{click:function(t){n.loader="loading3"}}},[n._v("\n    Upload\n    "),a("v-icon",{attrs:{right:"",light:""}},[n._v("cloud_upload")])],1),a("v-btn",{attrs:{light:"",success:"",loading:n.loading2,disabled:n.loading2},nativeOn:{click:function(t){n.loader="loading2"}}},[n._v("\n    Custom Loader\n    "),a("span",{slot:"loader"},[n._v("Loading...")])]),a("v-btn",{attrs:{light:"",info:"",loading:n.loading4,disabled:n.loading4},nativeOn:{click:function(t){n.loader="loading4"}}},[n._v("\n    Icon Loader\n    "),a("span",{staticClass:"custom-loader",slot:"loader"},[a("v-icon",{attrs:{light:""}},[n._v("cached")])],1)])],1)},staticRenderFns:[]}}});