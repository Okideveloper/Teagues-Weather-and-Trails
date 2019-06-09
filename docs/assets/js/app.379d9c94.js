(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)o=s[d],r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3979:function(t,e,a){},5319:function(t,e,a){"use strict";var n=a("3979"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("f9e3"),a("2dd8");var n=a("5f5b"),r=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},o=[],s=a("2877"),l={},c=Object(s["a"])(l,i,o,!1,null,null,null),u=c.exports,d=a("755e"),m=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center home-bg-img"},[a("SearchForm")],1)},p=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center flex-column p-5 bg-dark text-light opacity"},[t._m(0),a("div",[a("b-form",{staticClass:"d-flex flex-column justify-content-center"},[a("div",[a("b-form-input",{ref:"search",attrs:{type:"text",placeholder:"Mt. Rainer"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),a("transition",{attrs:{name:"bounce","enter-active-class":"bounceInLeft","leave-active-class":"bounceOutRight"}},[t.searchQuery.length>0?a("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.searchSubmit(e)}}},[t._v("Search")]):t._e()],1)],1)],1)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",{staticClass:"text-center"},[t._v("Take a Hike")]),a("h4",{staticClass:"text-center"},[t._v("Enter your location")]),a("p",{staticClass:"text-center"},[t._v("Your Trail Awaits You")])])}];a("9ddc");var g={name:"SearchForm",data(){return{searchQuery:""}},methods:{searchSubmit(){this.$router.push({name:"TrailResults",params:{query:this.searchQuery}})}},mounted(){this.$refs.search.focus()}},b=g,_=(a("fa54"),Object(s["a"])(b,h,v,!1,null,"2d56b788",null)),y=_.exports,w={name:"HomePage",components:{SearchForm:y}},x=w,S=(a("5319"),Object(s["a"])(x,f,p,!1,null,"3df7f40f",null)),L=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[this.searchLocation.err?a("div",{staticClass:"row d-flex justify-content-between mt-4"},[t._m(0),a("div",{staticClass:"column"},[a("b-button",{attrs:{variant:"danger"},on:{click:t.newSearch}},[t._v("Search Again")])],1)]):a("div",[a("div",{staticClass:"row d-flex justify-content-between mt-4"},[a("div",{staticClass:"column"},[a("h1",[t._v("Search Results for "+t._s(this.searchLocation.name))])]),a("div",{staticClass:"column"},[a("b-button",{attrs:{variant:"danger"},on:{click:t.newSearch}},[t._v("Search Again")])],1)]),a("div",{staticClass:"row"},[a("GoogleMap",{attrs:{locationData:t.searchLocation,markers:t.trails}})],1),a("div",{staticClass:"row mt-5 w-100"},[a("TrailSummary",{attrs:{trailSummary:t.trails}})],1)])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("h1",[t._v("No Search Results Found")])])}],C=a("2f62"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-start mt-4 w-100"},[a("GmapMap",{staticClass:"map-size",attrs:{center:{lat:+this.$props.locationData.lat,lng:+this.$props.locationData.lng},zoom:6}},[a("gmap-info-window",{attrs:{position:t.infoWindowPos,opened:t.infoWindowOpen,options:t.infoOptions}},[t._v(t._s(t.infoWindowContent))]),t._l(t.markers,function(e,n){return a("GmapMarker",{key:n,attrs:{position:{lat:e.location.trailLatitude,lng:e.location.trailLongitude},clickable:!0},on:{click:function(a){return t.toggleInfoWindow(e,n)}}})})],2)],1)},M=[],T={name:"GoogleMap",props:["locationData","markers"],data(){return{infoWindowPos:null,infoWindowContent:"",infoWindowOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{toggleInfoWindow(t,e){this.infoWindowPos={lat:t.location.trailLatitude,lng:t.location.trailLongitude},this.infoWindowContent=t.trailName,this.currentMidx==e?this.infoWindowOpen=!this.infoWindowOpen:(this.infoWindowOpen=!0,this.currentMidx=e)}}},E=T,R=(a("a99d"),Object(s["a"])(E,j,M,!1,null,"6f755bd3",null)),$=R.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("b-card-group",{attrs:{columns:""}},t._l(t.trailSummary,function(e){return a("div",{key:e.trailId},[a("b-card",{attrs:{"img-top":"","img-fluid":"",header:e.trailName,"sub-title":e.trailSummary,"img-src":e.trailImg,"header-bg-variant":"dark","header-text-variant":"light"}},[a("p",{},[t._v("Location: "+t._s(e.trailLocation))]),a("p",{},[t._v("Length: "+t._s(e.trailLength)+" miles")]),a("p",{},[t._v("Ascent: "+t._s(e.trailAscent)+" ft")]),a("p",{},[t._v("Descent: "+t._s(e.trailDescent)+" ft")]),a("p",{},[t._v("High: "+t._s(e.trailHigh)+" ft")]),a("p",{},[t._v("Low: "+t._s(e.trailLow)+" ft")]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("small",{staticClass:"text-muted"},[a("b-link",{attrs:{href:e.trailInfo,target:"_blank"}},[t._v("Select")])],1)])])],1)}),0)],1)])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center mb-5"},[a("h1",[t._v("Hikes Nearby")])])}],P={name:"TrailSummary",props:["trailSummary"]},W=P,N=Object(s["a"])(W,A,I,!1,null,null,null),D=N.exports,H={name:"TrailResults",components:{GoogleMap:$,TrailSummary:D},props:["query"],computed:{...Object(C["b"])(["searchLocation","trails"])},methods:{newSearch(){this.$router.push({name:"HomePage"})}},mounted(){this.$store.dispatch("getGeoLocation",this.query)}},G=H,Q=Object(s["a"])(G,O,k,!1,null,"41cfee50",null),z=Q.exports;r["default"].use(m["a"]);var q=new m["a"]({base:"",routes:[{path:"/",name:"HomePage",component:L},{path:"/trail-results/:query",name:"TrailResults",component:z,props:!0}]}),F=a("bc3a"),Y=a.n(F);r["default"].use(C["a"]);const Z="200202949-be5202662091a9dc38356c0c802cd058",J="AIzaSyCnyL8uMZZ2--PxXexaApNEb0oMTN2vbyM";var U=new C["a"].Store({state:{searchLocation:{name:"",lat:null,lng:null,err:null},trails:[]},mutations:{SET_LOCATION(t,e){t.searchLocation.err=null,t.searchLocation.name=e.locationName,t.searchLocation.lat=e.lat,t.searchLocation.lng=e.lng},SET_ERROR(t,e){t.searchLocation.err=e},TRAIL_SUMMARY(t,e){t.trails=e}},actions:{getGeoLocation:async({commit:t,dispatch:e},a)=>{const n=`https://maps.googleapis.com/maps/api/geocode/json?address=${a}&key=${J}`;try{const a=await Y.a.get(n),i={locationName:a.data.results[0].address_components[0].long_name,lat:a.data.results[0].geometry.location.lat,lng:a.data.results[0].geometry.location.lng};await t("SET_LOCATION",i),await e("trailSummary",i)}catch(r){t("SET_ERROR",r)}},async trailSummary({commit:t},e){const a=[],n=await Y.a.get("https://www.hikingproject.com/data/get-trails",{params:{key:Z,lat:e.lat,lon:e.lng,maxDistance:300,maxResults:50}});n.data.trails.map(t=>{return a.push({trailName:t.name,trailSummary:t.summary,trailLocation:t.location,trailLength:t.length,trailAscent:t.ascent,trailDescent:t.descent,trailHigh:t.high,trailLow:t.low,trailImg:t.imgMedium,trailInfo:t.url,trailId:t.id,location:{trailLongitude:t.longitude,trailLatitude:t.latitude}}),a}),t("TRAIL_SUMMARY",a)}}});r["default"].config.productionTip=!1,r["default"].use(n["a"]),r["default"].use(d,{load:{key:"AIzaSyDzlyMo5jrt6ZMx_oJStHMh8G7xktZkmkE"}}),new r["default"]({router:q,store:U,render:t=>t(u)}).$mount("#app")},a99d:function(t,e,a){"use strict";var n=a("b65e"),r=a.n(n);r.a},b5f5:function(t,e,a){},b65e:function(t,e,a){},fa54:function(t,e,a){"use strict";var n=a("b5f5"),r=a.n(n);r.a}});
//# sourceMappingURL=app.379d9c94.js.map