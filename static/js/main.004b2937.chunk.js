(this["webpackJsonpcounter-ui"]=this["webpackJsonpcounter-ui"]||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(16),a=n.n(i),r=n(6),o=n(17),u=n(18),s=n(4),d=n.n(s),h=n(0),j=function(t){var e=Object(c.useState)([]),n=Object(u.a)(e,2),i=n[0],a=n[1];Object(c.useEffect)((function(){d.a.get("http://localhost:3050/api/counters").then((function(t){a(t.data)})).catch((function(t){alert(t.message)}))}),[]);var s=function(t,e){var n;"inc"===t.target.name?n="inc":"dec"===t.target.name?n="dec":"reset"===t.target.name&&(n="reset"),d.a.put("http://localhost:3050/api/counters/".concat(e,"?type=").concat(n)).then((function(t){var e=t.data,n=i.map((function(t){return t._id===e._id?Object(r.a)(Object(r.a)({},t),e):Object(r.a)({},t)}));a(n)})).catch((function(t){alert(t.message)}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){d.a.post("http://localhost:3050/api/counters").then((function(t){var e=t.data;a([].concat(Object(o.a)(i),[e]))})).catch((function(t){alert(t.message)}))},children:"Add counter"}),Object(h.jsxs)("h1",{children:["Listing Counters - ",i.length]}),i.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:t.count}),Object(h.jsx)("button",{name:"inc",onClick:function(e){return s(e,t._id)},children:"increment"}),Object(h.jsx)("button",{name:"dec",onClick:function(e){return s(e,t._id)},children:"decrement"}),Object(h.jsx)("button",{name:"reset",onClick:function(e){return s(e,t._id)},children:"reset"}),Object(h.jsx)("button",{onClick:function(){return e=t._id,void d.a.delete("http://localhost:3050/api/counters/".concat(e)).then((function(t){var e=t.data,n=i.filter((function(t){return t._id!==e._id}));a(n)})).catch((function(t){alert(t.message)}));var e},children:"remove"})]},t._id)}))]})},l=function(t){return Object(h.jsx)("div",{children:Object(h.jsx)(j,{})})};a.a.render(Object(h.jsx)(l,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.004b2937.chunk.js.map