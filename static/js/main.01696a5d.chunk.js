(this["webpackJsonpreact-hooks-todo-app"]=this["webpackJsonpreact-hooks-todo-app"]||[]).push([[0],{24:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c,i=n(1),o=n.n(i),a=n(18),r=n.n(a),d=(n(24),n(9)),s=n(10),l=(n(5),n(6)),u=n(2),j=n(0),b=function(t){return Object(j.jsxs)("form",{onSubmit:t.addTodo,children:[Object(j.jsx)("input",{type:"text",placeholder:"Todo\u3092\u5165\u529b",value:t.inputText,onChange:t.updateInputText}),Object(j.jsx)("input",{type:"submit",value:"\u8ffd\u52a0"})]})};!function(t){t.ALL="all",t.ACTIVE="active",t.COMPLETED="completed"}(c||(c={}));var h=function(t){var e=Object(u.e)(),n=function(t){return e.push(t)};return Object(j.jsxs)("li",{children:[Object(j.jsxs)("label",{htmlFor:t.todo.createdAt,children:[Object(j.jsx)("input",{type:"checkbox",id:t.todo.createdAt,checked:t.todo.isDone,onChange:function(){return t.toggleCheck(t.todo.createdAt)}}),t.todo.title]}),Object(j.jsx)("button",{onClick:function(){return t.deleteTodo(t.todo.createdAt)},children:"\xd7"}),Object(j.jsx)("button",{onClick:function(){return n("/edit/".concat(t.itemIndex))},children:"\u7de8\u96c6"}),Object(j.jsx)("button",{onClick:function(){return n("/detail/".concat(t.itemIndex))},children:"\u8a73\u7d30"})]})},p=function(t){var e=t.todos.map((function(e,n){return t.filterState===c.ALL||t.filterState===c.ACTIVE&&!1===e.isDone||t.filterState===c.COMPLETED&&!0===e.isDone?Object(j.jsx)(h,{itemIndex:n,todo:e,toggleCheck:t.toggleCheck,deleteTodo:t.deleteTodo},e.createdAt):void 0}));return Object(j.jsx)("ul",{children:e})},x=function(t){return Object(j.jsxs)("form",{id:"filterList",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",className:"filter",value:"all",checked:t.filterState===c.ALL,onChange:t.changeFilterState}),"All"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",className:"filter",value:"active",checked:t.filterState===c.ACTIVE,onChange:t.changeFilterState}),"Active"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",className:"filter",value:"completed",checked:t.filterState===c.COMPLETED,onChange:t.changeFilterState}),"Completed"]})]})},O=function(t){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)(x,{changeFilterState:t.changeFilterState,filterState:t.filterState})})},f=function(t){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{addTodo:t.addTodo,inputText:t.inputText,updateInputText:t.updateInputText}),Object(j.jsx)(p,{todos:t.todos,toggleCheck:t.toggleCheck,deleteTodo:t.deleteTodo,filterState:t.filterState}),Object(j.jsx)(O,{changeFilterState:t.changeFilterState,filterState:t.filterState})]})},g=function(t){var e=Object(u.f)().id,n=parseInt(e),c=Object(u.e)();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("p",{children:["\u9032\u6357\uff1a",t.todos[n].isDone?"\u5b8c\u4e86":"\u672a\u5b8c\u4e86"]}),Object(j.jsxs)("p",{children:["\u30bf\u30b9\u30af\u540d\uff1a",t.todos[n].title]}),Object(j.jsx)("button",{onClick:function(){return t="/",c.push(t);var t},children:"\u623b\u308b"})]})},T=function(t){var e=Object(u.f)().id,n=parseInt(e),c=Object(u.e)();return Object(i.useEffect)((function(){t.editingText||t.inputEditingText(t.todos[n].title)}),[n,t]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("form",{onSubmit:t.updateTodo,id:e,children:[Object(j.jsx)("input",{type:"text",value:t.editingText,onChange:t.updateEditingText}),Object(j.jsx)("input",{type:"submit",value:"\u66f4\u65b0"})]}),Object(j.jsx)("button",{onClick:function(){return t="/",c.push(t);var t},children:"\u623b\u308b"})]})},m=function(){return Object(j.jsx)("h1",{className:"container",children:"To Do List"})},v=function(){var t=Object(i.useState)(JSON.parse(localStorage.getItem("todos"))||[]),e=Object(s.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)(""),r=Object(s.a)(a,2),b=r[0],h=r[1],p=Object(i.useState)(""),x=Object(s.a)(p,2),O=x[0],v=x[1],S=Object(i.useState)("all"),C=Object(s.a)(S,2),k=C[0],A=C[1];Object(i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(j.jsx)(l.a,{basename:"/testtesttest",children:Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)(u.a,{path:"/",component:m}),Object(j.jsx)(u.a,{exact:!0,path:"/",children:Object(j.jsx)(f,{addTodo:function(t){if(t.preventDefault(),""!==b.trim()){var e=Object(d.a)(n);e.push({createdAt:new Date,isDone:!1,title:b}),c(e),h("")}},inputText:b,updateInputText:function(t){h(t.target.value)},todos:n,toggleCheck:function(t){var e=n.map((function(t){return t.createdAt})).indexOf(t),i=Object(d.a)(n),o=i[e].isDone;i[e].isDone=!o,c(i)},deleteTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.createdAt!==t}));c(e)},filterState:k,changeFilterState:function(t){A(t.target.value)}})}),Object(j.jsx)(u.a,{exact:!0,path:"/detail/:id",children:Object(j.jsx)(g,{todos:n})}),Object(j.jsx)(u.a,{exact:!0,path:"/edit/:id",children:Object(j.jsx)(T,{todos:n,updateTodo:function(t){t.preventDefault();var e=t.currentTarget.id,i=parseInt(e);if(""!==O.trim()){var o=Object(d.a)(n);o[i].title=O,c(o),v(""),window.history.pushState({},"React App","/"),window.location.pathname="/"}},editingText:O,updateEditingText:function(t){v(t.target.value)},inputEditingText:function(t){v(t)}})})]})})};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},5:function(t,e,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.01696a5d.chunk.js.map