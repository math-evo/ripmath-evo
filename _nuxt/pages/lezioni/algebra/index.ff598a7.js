(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{267:function(t,n,e){"use strict";e.r(n);e(15);var r=e(2),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,n.next=3,e("lezioni").where({slug:{$eq:"algebra"}}).fetch();case 3:return n.t0=n.sent[0],n.next=6,e("lezioni/algebra").without(["body"]).fetch();case 6:return n.t1=n.sent,n.abrupt("return",{content:n.t0,contents:n.t1});case 8:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.content.title}},computed:{links:function(){return this.contents?this.contents:[]}}},o=e(24),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.links,(function(link){return e("nuxt-link",{key:link.path,attrs:{to:link.path}},[t._v("\n    "+t._s(link.title)+"\n  ")])})),t._v(" "),e("pre",[t._v("    "+t._s(t.contents)+"\n  ")])],2)}),[],!1,null,null,null);n.default=component.exports}}]);