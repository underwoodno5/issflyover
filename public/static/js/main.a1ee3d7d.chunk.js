(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,n,t){e.exports=t.p+"static/media/earthflag.8d29dc14.png"},113:function(e,n,t){e.exports=t(277)},118:function(e,n,t){},267:function(e,n,t){},277:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(18),c=t.n(r),l=(t(118),t(30)),i=t(31),s=t(37),u=t(32),m=t(38),d=t(111),h=t(33),p=t(281),g=t(282),v=t(52),f=t(29),b=t.n(f);function E(e){var n=e.passover,t=n.duration,a=n.risetime;function r(e){return e<10&&(e="0"+e),e}var c=Math.floor(t/60);return o.a.createElement("div",{className:"card card-body mb-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-"},o.a.createElement("h4",{id:"risetime"},"Date and time: ",function(e){var n=new Date(1e3*e),t=n.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()];return n.getDate()+" "+a+" "+t+" at "+r(n.getHours())+":"+r(n.getMinutes())}(a)),o.a.createElement("h4",null,"Visible for ",c," minutes")),o.a.createElement("div",{className:"col-md-3"})))}function w(){var e=Object(v.a)(["\n  query PassoverQuery($lat: Float!, $long: Float!) {\n    isspassovers(lat: $lat, long: $long) {\n      response {\n        risetime\n        duration\n      }\n    }\n  }\n"]);return w=function(){return e},e}var y=b()(w()),N=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props.match.params.lat;e=parseInt(e);var n=this.props.match.params.long;return n=parseInt(n),console.log(e),console.log(n),o.a.createElement(a.Fragment,null,o.a.createElement("h1",{className:"passheader"},"ISS Passovers"),o.a.createElement("button",{className:"btn btn-warning",onClick:function(){window.location="/"}},"Back!"),o.a.createElement(h.Query,{query:y,variables:{lat:e,long:n}},function(e){var n=e.loading,t=e.error,r=e.data;return n?o.a.createElement("h4",null,"Loading..."):t?"Error!: ".concat(t):o.a.createElement(a.Fragment,null,r.isspassovers.response.map(function(e){return o.a.createElement(E,{key:e.risetime,passover:e})}))}))}}]),n}(a.Component),O=t(107),j=t.n(O);function k(){var e=Object(v.a)(["\n  query GeocodeQuery($location: String!) {\n    geocode(location: $location) {\n      results {\n        locations {\n          latLng {\n            lat\n            lng\n          }\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}var L=b()(k()),S=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).state={location:"St. John's Newfoundland",holdingLocation:"St. John's Newfoundland"},t.handleLocation=function(e){var n=e.target.value;t.setState({holdingLocation:n,location:n})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this,n=this.state.holdingLocation,t=this.state.location;return o.a.createElement("div",null,o.a.createElement("h4",{className:"info"},"Enter your location and press",o.a.createElement("span",{className:"secondarycolor"}," submit")," to check the next"," ",o.a.createElement("span",{className:"secondarycolor"},"10 passes of the ISS")," . St. John's NL is used as an example. Your lat/long will be printed in the console and you can double check it here:",o.a.createElement("a",{href:"https://www.latlong.net/",target:"_blank",rel:"noopener noreferrer"}," ","latlong.net")),o.a.createElement(h.Query,{query:L,variables:{location:t,holdingLocation:n},notifyOnNetworkStatusChange:!0},function(t){var a=t.error,r=t.data;return a?"Error!: ".concat(a):o.a.createElement("div",null,o.a.createElement("form",{className:"container formbox",noValidate:!0,autoComplete:"off"},o.a.createElement(j.a,{label:"Location",onChange:e.handleLocation,onKeyDown:e.handleKeyDown,className:"textField",value:n,margin:"normal"})),o.a.createElement("button",{className:"btn btn-warning",onClick:function(){window.location="/passovers/".concat(r.geocode.results[0].locations[0].latLng.lat,":/").concat(r.geocode.results[0].locations[0].latLng.lng)}},"Submit!"))}))}}]),n}(a.Component),x=(t(267),t(108)),C=t.n(x),F=new d.a({uri:"/graphql"}),J=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(h.ApolloProvider,{client:F},o.a.createElement(p.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"flag-container"},o.a.createElement("img",{src:C.a,alt:"World Flag",style:{width:300,display:"block",margin:"auto"}})),o.a.createElement("div",{className:"card"},o.a.createElement(g.a,{exact:!0,path:"/",component:S}),o.a.createElement(g.a,{exact:!0,path:"/passovers/:lat/:long",component:N}),o.a.createElement(g.a,{exact:!0,path:"/geo",component:S})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,2,1]]]);
//# sourceMappingURL=main.a1ee3d7d.chunk.js.map