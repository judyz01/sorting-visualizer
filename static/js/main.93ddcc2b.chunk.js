(this["webpackJsonpalgo-visualizer"]=this["webpackJsonpalgo-visualizer"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(3),u=r.n(o),s=r(1),c=r(4),i=r(5),l=r(7),h=r(6);function f(e){var t=[];if(e.length<=1)return e;var r=e.slice();return function e(t,r,a,n,o){if(r===a)return;var u=Math.floor((r+a)/2);e(n,r,u,t,o),e(n,u+1,a,t,o),function(e,t,r,a,n,o){var u=t,s=t,c=r+1;for(;u<=r&&c<=a;)o.push([u,c]),o.push([u,c]),n[u]<=n[c]?(o.push([s,n[u]]),e[s++]=n[u++]):(o.push([s,n[c]]),e[s++]=n[c++]);for(;u<=r;)o.push([u,u]),o.push([u,u]),o.push([s,n[u]]),e[s++]=n[u++];for(;c<=a;)o.push([c,c]),o.push([c,c]),o.push([s,n[c]]),e[s++]=n[c++]}(t,r,u,a,n,o)}(e,0,e.length-1,r,t),t}r(13);var p=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).state={array:[]},a}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e,t,r=[],a=0;a<180;a++)r.push((e=5,t=730,Math.floor(Math.random()*(t-e+1)+e)));this.setState({array:r})}},{key:"mergeSort",value:function(){for(var e=f(this.state.array),t=function(t){var r=document.getElementsByClassName("array-bar");if(t%3!==2){var a=Object(s.a)(e[t],2),n=a[0],o=a[1],u=r[n].style,c=r[o].style,i=t%3===0?"purple":"turquoise";setTimeout((function(){u.backgroundColor=i,c.backgroundColor=i}),3*t)}else setTimeout((function(){var a=Object(s.a)(e[t],2),n=a[0],o=a[1];r[n].style.height="".concat(o,"px")}),3*t)},r=0;r<e.length;r++)t(r)}},{key:"render",value:function(){var e=this,t=this.state.array;return n.a.createElement("div",{className:"array-container"},t.map((function(e,t){return n.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:"turquoise",height:"".concat(e,"px")}})})),n.a.createElement("button",{onClick:function(){return e.resetArray()}}," New Array "),n.a.createElement("button",{onClick:function(){return e.mergeSort()}}," Merge Sort "))}}]),r}(n.a.Component);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null))};u.a.render(n.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.93ddcc2b.chunk.js.map