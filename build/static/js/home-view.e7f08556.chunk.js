(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{51:function(t,e,n){t.exports={Button:"Button_Button__3R1xi"}},53:function(t,e,n){t.exports={message:"Message_message__kVpdt",enter:"Message_enter__3aW7_",enterActive:"Message_enterActive__3ngpY",exit:"Message_exit__Ynmld",exitActive:"Message_exitActive__10mkF"}},58:function(t,e,n){t.exports={title:"PageHeading_title__1ffyz"}},59:function(t,e,n){t.exports={List:"ContactList_List__20gyh",enter:"ContactList_enter__1Tfxs",enterActive:"ContactList_enterActive__BPn6N",exit:"ContactList_exit__3MW4R",exitActive:"ContactList_exitActive__ZA3FS"}},60:function(t,e,n){t.exports={Container:"ContactForm_Container__2jrAg"}},61:function(t,e,n){t.exports={appear:"HomePage_appear___4y8l",appearActive:"HomePage_appearActive__38yCa"}},62:function(t,e,n){t.exports={enter:"Filter_enter__29y5T",enterActive:"Filter_enterActive__1ekdR",exit:"Filter_exit__2A3T0",exitActive:"Filter_exitActive__1YnI6"}},63:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return I}));var a=n(3),r=n(49),c=n(50),i=n(55),s=n(54),o=n(0),u=n(58),l=n.n(u);function b(t){var e=t.text;return Object(a.jsx)("h1",{className:l.a.title,children:e})}var j=n(59),m=n.n(j),x=n(51),h=n.n(x),p=n(26),_=n(65),f=n(64),d=n(25),v=n(14),O=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},g=Object(d.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:O(n,a)}}),(function(t){return{onDelete:function(e){return t(v.a.deleteTodo(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)(p.a,{children:Object(a.jsx)(_.a,{component:"ul",className:m.a.List,children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(a.jsx)(f.a,{classNames:m.a,timeout:250,children:Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[r,": ",c," "]}),Object(a.jsx)("button",{className:h.a.Button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)},e)}))})})})),C=n(16),A=n(60),y=n.n(A),N=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",alert:!1},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(C.a)({},a,r))},t.handleSubmit=function(e){if(e.preventDefault(),""!==t.state.name&&""!==t.state.number)return t.props.onSubmit(t.state.name,t.state.number),void t.reset();alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438")},t.reset=function(){t.setState({name:"",number:""})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)(p.a,{children:Object(a.jsxs)("form",{className:y.a.Form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name ",Object(a.jsx)("br",{})," ",Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleInputChange})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Number ",Object(a.jsx)("br",{})," ",Object(a.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleInputChange})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:h.a.Button,type:"submit",children:"Add contact"})]})})}}]),n}(o.Component);N.defaultProps={};var k=Object(d.b)(null,(function(t){return{onSubmit:function(e,n){return t(v.a.addTodo(e,n))}}}))(N),F=n(61),L=n.n(F),S=n(53),w=n.n(S);function P(t){var e=t.text;return Object(a.jsx)("div",{className:w.a.message,children:Object(a.jsx)("p",{children:e})})}var B=Object(d.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(v.a.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(a.jsx)(p.a,{children:Object(a.jsxs)("label",{children:["Find contacts by name ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{value:e,type:"text",onChange:n})]})})})),M=n(62),T=n.n(M),D=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={error:!1},t.handleSubmit=function(e){if(e.preventDefault(),""!==t.state.name&&""!==t.state.number)return t.props.onSubmit(t.state.name,t.state.number),void t.reset();alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438")},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.error;return Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{classNames:w.a,in:t,appear:!0,timeout:250,unmountOnExit:!0,children:Object(a.jsx)(P,{text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})}),Object(a.jsx)(f.a,{classNames:L.a,in:!0,appear:!0,timeout:500,unmountOnExit:!0,children:Object(a.jsx)(b,{text:"Phonebook"})}),Object(a.jsx)(k,{error:t}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(f.a,{classNames:T.a,in:this.props.contacts.length>1,timeout:250,unmountOnExit:!0,children:Object(a.jsx)(B,{})}),Object(a.jsx)(g,{error:t})]})}}]),n}(o.Component);D.defaultProps={};var I=Object(d.b)((function(t){return{contacts:t.contacts.items}}),null)(D)}}]);
//# sourceMappingURL=home-view.e7f08556.chunk.js.map