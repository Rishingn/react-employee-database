(this["webpackJsonpemployee-database"]=this["webpackJsonpemployee-database"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(10),i=n.n(r),c=(n(16),n(17),n(1)),o=n(2),u=n(5),s=n(3),m=n(6),d=n(8),p=(n(18),n(4)),E=n(7),h=(n(19),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state=Object(E.a)({},n.returnStateObject()),n.inputChangeHandler=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),n.props.onAddOrEdit(n.state)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"returnStateObject",value:function(){return-1==this.props.currentIndex?{name:"",designation:"",age:"",joining:""}:this.props.list[this.props.currentIndex]}},{key:"componentDidUpdate",value:function(e){e.currentIndex==this.props.currentIndex&&e.list.length==this.props.list.length||this.setState(Object(E.a)({},this.returnStateObject()))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.submitHandler,autoComplete:"off",className:"empForm"},l.a.createElement("h3",null,"Employees Form"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Emp Name:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",placeholder:"Enter employee name",name:"name",value:this.state.name,onChange:this.inputChangeHandler}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Designation:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",placeholder:"Enter employee designation",name:"designation",value:this.state.designation,onChange:this.inputChangeHandler}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Age:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"number",placeholder:"Enter employee age",name:"age",value:this.state.age,onChange:this.inputChangeHandler}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Date of Joining:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"date",placeholder:"Enter joining date",name:"joining",value:this.state.joining,onChange:this.inputChangeHandler}))))),l.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(a.Component)),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={currentIndex:-1,list:n.returnList()},n.onAddOrEdit=function(e){var t=n.returnList();-1==n.state.currentIndex?t.push(e):t[n.state.currentIndex]=e,localStorage.setItem("empDetails",JSON.stringify(t)),n.setState({list:t,currentIndex:-1})},n.editHandler=function(e){n.setState({currentIndex:e})},n.deleteHandler=function(e){var t=n.returnList();t.splice(e,1),localStorage.setItem("empDetails",JSON.stringify(t)),n.setState({list:t,currentIndex:-1})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"returnList",value:function(){return null==localStorage.getItem("empDetails")&&localStorage.setItem("empDetails",JSON.stringify([])),JSON.parse(localStorage.getItem("empDetails"))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h,{onAddOrEdit:this.onAddOrEdit,currentIndex:this.state.currentIndex,list:this.state.list}),l.a.createElement("div",{className:"empList"},l.a.createElement("h3",null,"Employees Details"),l.a.createElement("table",{className:"empData"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"tableHeading"},l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Designation"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Date of Joining"),l.a.createElement("th",null,"Edit"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,this.state.list.map((function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.designation),l.a.createElement("td",null,t.age),l.a.createElement("td",null,t.joining),l.a.createElement("td",null,l.a.createElement(d.a,{color:"#4267b2",onClick:function(){return e.editHandler(n)}})),l.a.createElement("td",null,l.a.createElement(d.b,{color:"red",onClick:function(){return e.deleteHandler(n)}})))}))))))}}]),t}(a.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,"Employees Database")),l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.9e272a38.chunk.js.map