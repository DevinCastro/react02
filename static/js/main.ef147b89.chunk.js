(this.webpackJsonpreact02=this.webpackJsonpreact02||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(2),r=a.n(l),i=a(3),s=a(4),c=a(5),m=a(7),h=a(6),u=function(e){return o.a.createElement("div",{className:"card",style:{width:"18rem"}},o.a.createElement("img",{src:e.movie.poster,className:"card-img-top",alt:e.movie.title}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.movie.title),o.a.createElement("p",{className:"card-text"},e.movie.plot)))},p=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:"",plot:"",poster:"",movies:[]},e.handleInputChange=function(t){console.log(t.target.name),e.setState(Object(i.a)({},t.target.name,t.target.value))},e.handleAddMovie=function(t){t.preventDefault();var a=JSON.parse(JSON.stringify(e.state.movies));a.push({title:e.state.title,plot:e.state.plot,poster:e.state.poster}),e.setState({movies:a})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"title"},"Movie Title"),o.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleInputChange}),o.a.createElement("label",{htmlFor:"plot"},"Plot"),o.a.createElement("input",{type:"text",name:"plot",value:this.state.plot,onChange:this.handleInputChange}),o.a.createElement("label",{htmlFor:"poster"},"Poster"),o.a.createElement("input",{type:"text",name:"poster",value:this.state.poster,onChange:this.handleInputChange}),o.a.createElement("button",{onClick:this.handleAddMovie},"Submit")),this.state.movies.map((function(e){return o.a.createElement(u,{movie:e})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.ef147b89.chunk.js.map