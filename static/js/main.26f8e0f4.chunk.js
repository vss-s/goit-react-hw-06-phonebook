(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{103:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=n(12),l=n(83),u=n(62),s=n(32),m=n(8),d=Object(s.b)({name:"contacts",initialState:[],reducers:{addContact:function(e,t){return[].concat(Object(u.a)(e),[t.payload])},deleteContact:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),h=Object(s.b)({name:"filter",initialState:"",reducers:{changeQuery:function(e,t){return t.payload}}}),b=Object(m.c)({contacts:d.reducer,filter:h.reducer}),p=n(77),_=n(84),f={key:"root",storage:n.n(_).a,whitelist:["contacts"]},v=Object(u.a)(Object(s.c)({serializableCheck:{ignoredActions:["persist/PERSIST"]}})),E=Object(p.a)(f,b),B=Object(s.a)({reducer:E,middleware:v}),k=Object(p.b)(B),O=(n(103),n(104),n(109)),g=n(73),y=n.n(g),j=n(15),N=n.n(j),x=function(e){var t=e.title,n=void 0===t?"":t,a=e.isActive,o=e.children;return r.a.createElement(O.a,{in:a,timeout:500,classNames:N.a,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("section",{className:y.a.container},r.a.createElement("h1",{className:y.a.title},n),o))},C=function(e){return e.contacts},F=n(79),P=n(70),A=n(50),I=n(59),L=n(110),w=n(75),S=n(88),Q=n.n(S),D=n(17),T=n.n(D);w.a.configure();var M=P.a().shape({name:P.b().max(20,"Must be 20 characters or less").min(2,"Must be 2 characters or more").required("Required"),number:P.b().matches(/^(\()?\d{3}(\))?(-|\s)?\d{2}(-|\s)\d{2}$/,"Telephone number should be like: 000-00-00").required("Required")}),q=function(e){var t=e.onAddContact,n=e.phoneBookItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.c,{initialValues:{name:"",number:""},onSubmit:function(e,a){var r;(r=e,n.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))?w.a.error("This contact is alredy exist",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0}):(t(Object(F.a)(Object(F.a)({},e),{},{id:Object(L.a)()})),a.resetForm())},validationSchema:M},(function(e){var t=e.values,n=e.touched,a=e.errors,o=e.handleChange,i=e.handleBlur;return r.a.createElement(A.b,{className:T.a.container},r.a.createElement("label",{className:T.a.inputLabel,htmlFor:"name"},"Name"),r.a.createElement(O.a,{in:a.name&&n.name,classNames:N.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:T.a.invalidMessage},a.name)),r.a.createElement(A.a,{className:a.name&&n.name?T.a.inputFieldError:T.a.inputField,type:"text",value:t.name,onChange:o,onBlur:i,name:"name",placeholder:"Put contact name"}),r.a.createElement("label",{className:T.a.inputLabel,htmlFor:"number"},"Number"),r.a.createElement(O.a,{in:a.number&&n.number,classNames:N.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:T.a.invalidMessage},a.number)),r.a.createElement(A.a,{className:a.number&&n.number?T.a.inputFieldError:T.a.inputField,value:t.number,onChange:o,onBlur:i,type:"tel",name:"number",placeholder:"Number format 000-00-00"}),r.a.createElement("button",{type:"submit",className:T.a.Btn},r.a.createElement(I.Icon,{icon:Q.a,color:"blue",width:"70px",height:"50px"})))})))},G=Object(c.b)((function(e){return{phoneBookItems:C(e)}}),(function(e){return{onAddContact:function(t){return e((n=t,d.actions.addContact(n)));var n}}}))(q),H=n(107),R=n(60),z=n(61),J=n(65),K=n(63),V=n(89),Y=n.n(V),W=n(69),X=n.n(W),Z=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleDelete=function(){var t=e.props;(0,t.onDeleteContact)(t.contact.id)},e}return Object(z.a)(n,[{key:"render",value:function(){var e=this.props.contact,t=e.name,n=e.number;return r.a.createElement("li",{className:X.a.listItem},r.a.createElement("span",{className:X.a.name},t," : ",n),r.a.createElement("button",{onClick:this.handleDelete,className:X.a.Btn,type:"button"},r.a.createElement(I.Icon,{icon:Y.a,color:"red",width:"40px",height:"40px"})))}}]),n}(a.Component),$=Object(c.b)(null,(function(e){return{onDeleteContact:function(t){return e(function(e,t){return e.actions.deleteContact(t)}(d,t))}}}))(Z),U=n(90),ee=n.n(U),te=function(e){var t,n=e.phoneBookItems,a=e.filterQuery,o=(t=a,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return r.a.createElement(H.a,{component:"ul",className:ee.a.container},o.map((function(e){return r.a.createElement(O.a,{in:!0,timeout:500,classNames:N.a,key:e.id,unmountOnExit:!0},r.a.createElement($,{contact:e}))})))},ne=function(e){return e.filter},ae=Object(c.b)((function(e){return{phoneBookItems:C(e),filterQuery:ne(e)}}))(te),re=n(76),oe=n.n(re),ie=function(e){var t=e.filterQuery,n=e.onChangeQuery,a=e.isActive;return r.a.createElement(O.a,{in:a,mountOnEnter:!0,unmountOnExit:!0,timeout:500,classNames:N.a},r.a.createElement("div",{className:oe.a.container},r.a.createElement("input",{className:oe.a.searchField,type:"text",name:"filterQuery",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Search contact..."})))},ce=Object(c.b)((function(e){return{filterQuery:ne(e)}}),(function(e){return{onChangeQuery:function(t){return e(function(e,t){return e.actions.changeQuery(t)}(h,t))}}}))(ie),le=n(91),ue=n.n(le),se=function(e){Object(J.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isActive:!1},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({isActive:!0})}),300)}},{key:"render",value:function(){var e=this.state.isActive,t=this.props.title;return r.a.createElement(O.a,{in:e,classNames:N.a,timeout:500},r.a.createElement("div",{className:ue.a.logo},t))}}]),n}(a.Component),me=function(e){var t=e.phoneBookItems;return r.a.createElement("main",null,r.a.createElement(se,{title:"PhoneBook"}),r.a.createElement(x,{isActive:!0},r.a.createElement(G,null)),r.a.createElement(x,{title:"Contacts",isActive:t.length>0},r.a.createElement(ce,{isActive:t.length>1}),r.a.createElement(ae,null)))},de=Object(c.b)((function(e){return{phoneBookItems:C(e)}}))(me);i.a.render(r.a.createElement(c.a,{store:B},r.a.createElement(l.a,{loading:null,persistor:k},r.a.createElement(de,null))),document.getElementById("root"))},15:function(e,t,n){e.exports={enter:"slideTransition_enter__W_vVs",enterActive:"slideTransition_enterActive__183ug",exit:"slideTransition_exit__1KqNn",exitActive:"slideTransition_exitActive__3j2qw"}},17:function(e,t,n){e.exports={container:"PhoneBookFields_container__16G7O",inputLabel:"PhoneBookFields_inputLabel__24mH1",inputField:"PhoneBookFields_inputField__3Yfeb",inputFieldError:"PhoneBookFields_inputFieldError__2vB1- PhoneBookFields_inputField__3Yfeb",invalidMessage:"PhoneBookFields_invalidMessage__3zv43",Btn:"PhoneBookFields_Btn__2aPAd"}},69:function(e,t,n){e.exports={listItem:"PhoneBookListItem_listItem__1QDcp",name:"PhoneBookListItem_name__2S4fH",Btn:"PhoneBookListItem_Btn__c1bDj"}},73:function(e,t,n){e.exports={container:"Section_container__10K4X",title:"Section_title__3n0_a"}},76:function(e,t,n){e.exports={container:"PhoneBookSearchField_container__3ZgDD",searchField:"PhoneBookSearchField_searchField__lyfm_"}},90:function(e,t,n){e.exports={container:"PhoneBookList_container__2OtkG",listItem:"PhoneBookList_listItem__30Gbt",name:"PhoneBookList_name__35_wq",Btn:"PhoneBookList_Btn__5ETM3"}},91:function(e,t,n){e.exports={logo:"PhoneBookLogo_logo__2utsB"}},93:function(e,t,n){e.exports=n(106)}},[[93,1,2]]]);
//# sourceMappingURL=main.26f8e0f4.chunk.js.map