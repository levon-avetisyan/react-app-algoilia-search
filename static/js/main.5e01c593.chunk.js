(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{276:function(e,a,t){e.exports=t(672)},287:function(e,a,t){},672:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(269),r=t.n(c),s=t(15),m=t(16),i=t(18),o=t(17),u=t(19),d=t(674),E=(t(287),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg align-self-start"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Android Stash"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/services"},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/contact"},"Get in touch"))))))}}]),a}(n.Component)),h=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"hero d-flex flex-column justify-content-center align-items-center"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Android open source UI components"),l.a.createElement("p",null,"Ready to use components are waiting for you, make you life easier")))}}]),a}(n.Component),p=t(160),f=t.n(p),N=t(675),b=t(673),v=t(270),g=t.n(v),j=t(21),x=g()("E4FZLRODN2","55793bb977ab3b3ca69d5ad0b428447e").initIndex("android_stash"),O=function(e){var a=e.hit;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-action"},l.a.createElement(b.a,{to:"/react-app-algoilia-search/card/"+a.objectID,className:"btn btn-secondary card-action-link"},"View"),l.a.createElement(b.a,{className:"card-action-share",to:"/react-app-algoilia-search/card/"+a.objectID},l.a.createElement(f.a,{icon:["fas","share-square"]}))),l.a.createElement("div",{className:"card-block"},l.a.createElement("h6",{className:"card-title"},l.a.createElement(j.Highlight,{attributeName:"name",hit:a}),l.a.createElement("span",null,l.a.createElement("small",{className:"card-author text-muted"},l.a.createElement("em",null," by",l.a.createElement("span",{className:"card-author"},l.a.createElement("a",{href:a.github}," ",a.author)))))),l.a.createElement("p",{className:"card-text"},l.a.createElement(j.Highlight,{attributeName:"description",hit:a})),l.a.createElement("ul",{className:"tag-list list-inline list-unstyled"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("span",{className:"badge badge-secondary"},a.language))),l.a.createElement("p",{className:"card-text card-footer-text"},l.a.createElement("small",{className:"text-muted"},"Last Updated ",l.a.createElement("span",null,a.updated)),l.a.createElement("small",{className:"text-muted text-stars"},l.a.createElement("i",null,l.a.createElement(f.a,{icon:["fas","star"]}))," ",l.a.createElement("span",null,a.stars)))))},y=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"stats-info"},l.a.createElement("div",{className:"stats"},l.a.createElement(j.Stats,null))),l.a.createElement("hr",null),l.a.createElement("div",{className:"card-columns"},l.a.createElement(j.Hits,{hitComponent:O})),l.a.createElement("div",{className:"footer"},l.a.createElement(j.Pagination,{showLast:!0})))},w=function(){return l.a.createElement("div",{className:"filter-list"},l.a.createElement("h6",null,"Language"),l.a.createElement(j.RefinementList,{attributeName:"language"}),l.a.createElement("hr",null),l.a.createElement("h6",null,"License"),l.a.createElement(j.RefinementList,{attributeName:"license"}))},k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={card:{}},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"loadSingleCardContent",value:function(){var e=this,a=this.props.match.params;x.getObject(a.id).then(function(a){return e.setState({card:a}),console.log(e.state),a})}},{key:"componentDidMount",value:function(){this.loadSingleCardContent()}},{key:"render",value:function(){return l.a.createElement("div",{className:"signle-card"},l.a.createElement("h1",null,this.state.card.name),l.a.createElement("h2",null,this.state.card.author),l.a.createElement("h3",null,this.state.card.description))}}]),a}(n.Component),C=function(e){function a(e){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).call(this,e))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(j.InstantSearch,{appId:"E4FZLRODN2",apiKey:"55793bb977ab3b3ca69d5ad0b428447e",indexName:"android_stash"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9 offset-3"},l.a.createElement("div",{className:"search-input-wrapper"},l.a.createElement(j.SearchBox,{translastions:{placeholder:"Search"}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{className:"filters"},l.a.createElement(w,null))),l.a.createElement("div",{className:"col-9"},l.a.createElement(N.a,{exact:!0,path:"/react-app-algoilia-search/card/:id",component:k}),l.a.createElement(N.a,{exact:!0,path:"/react-app-algoilia-search/",component:y})))))}}]),a}(n.Component),S=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"pt-3"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h5",null,"Features"),l.a.createElement("ul",{className:"list-unstyled text-small"},l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Cool stuff")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Random feature")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Team feature")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Stuff for developers")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Another one")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Last time")))),l.a.createElement("div",{className:"col"},l.a.createElement("h5",null,"Resources"),l.a.createElement("ul",{className:"list-unstyled text-small"},l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Resource")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Resource name")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Another resource")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Final resource")))),l.a.createElement("div",{className:"col"},l.a.createElement("h5",null,"About"),l.a.createElement("ul",{className:"list-unstyled text-small"},l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Locations")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Privacy")),l.a.createElement("li",null,l.a.createElement("a",{className:"text-muted",href:"/"},"Terms")))))))}}]),a}(n.Component),L=t(157),R=t(272),I=t(273);L.default.library.add(R.a,I.a);var A=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/react-app-algoilia-search"},l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(C,null),l.a.createElement(S,null)))}}]),a}(n.Component),D=t(158);window.jQuery=window.$=D;var T=t(275),F=t.n(T);window.Tether=F.a;var H=t(159);window.Popper=H.default;t(671);r.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[276,1,2]]]);
//# sourceMappingURL=main.5e01c593.chunk.js.map