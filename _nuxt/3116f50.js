(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(t,e,r){var n=r(5),o=r(9),c=r(65),l=r(135),v=r(3),d=n.RegExp,f=d.prototype;o&&v((function(){var t=!0;try{d(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},c={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var l in t&&(c.hasIndices="d"),c)o(l,c[l]);return Object.getOwnPropertyDescriptor(f,"flags").get.call(e)!==n||r!==n}))&&c(f,"flags",{configurable:!0,get:l})},293:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(33),l=r(26),v=r(34),d=r(203),f=r(13),_=r(3),m=r(202),C=r(136),y=r(294),h=r(295),x=r(85),w=r(296),P=[],k=o(P.sort),A=o(P.push),j=_((function(){P.sort(void 0)})),O=_((function(){P.sort(null)})),T=C("sort"),N=!_((function(){if(x)return x<70;if(!(y&&y>3)){if(h)return!0;if(w)return w<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)P.push({k:t+r,v:e})}for(P.sort((function(a,b){return b.v-a.v})),r=0;r<P.length;r++)t=P[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:j||!O||!T||!N},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(N)return void 0===t?k(e):k(e,t);var r,n,o=[],_=v(e);for(n=0;n<_;n++)n in e&&A(o,e[n]);for(m(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:f(e)>f(r)?1:-1}}(t)),r=v(o),n=0;n<r;)e[n]=o[n++];for(;n<_;)d(e,n++);return e}})},294:function(t,e,r){var n=r(64).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},295:function(t,e,r){var n=r(64);t.exports=/MSIE|Trident/.test(n)},296:function(t,e,r){var n=r(64).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},299:function(t,e,r){"use strict";r.r(e);r(48),r(42),r(15),r(292),r(29),r(137);var n=r(10),o=(r(67),r(68),r(293),r(47),r(66),r(84)),c=r.n(o),l={name:"IndexPage",data:function(){return{countries:[],searchText:"",sortOrder:"asc",currentPage:1,totalPages:1,modalVisible:!1,selectedCountry:{}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadCountries();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadCountries:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://restcountries.com/v3.1/all");case 2:r=e.sent,t.countries=r.data,t.totalPages=Math.ceil(t.countries.length/25);case 5:case"end":return e.stop()}}),e)})))()},showModal:function(t){this.selectedCountry=t,this.modalVisible=!0},closeModal:function(){this.modalVisible=!1},previousPage:function(){this.currentPage-=1,window.scrollTo({top:0,behavior:"smooth"})},nextPage:function(){this.currentPage+=1,window.scrollTo({top:0,behavior:"smooth"})}},computed:{filteredCountries:function(){var t=this,e=this.countries;this.searchText&&(e=e.filter((function(e){return e.name.official.toLowerCase().includes(t.searchText.toLowerCase())}))),e="asc"===this.sortOrder?e.sort((function(a,b){return a.name.official.localeCompare(b.name.official)})):e.sort((function(a,b){return b.name.official.localeCompare(a.name.official)}));var r=25*(this.currentPage-1),n=r+25;return e.slice(r,n)}}},v=r(62),component=Object(v.a)(l,(function(){var t,e=this,r=e._self._c;return r("div",{staticClass:"container mx-auto p-4"},[r("h1",{staticClass:"text-2xl font-bold mb-4"},[e._v("Countries Catalog")]),e._v(" "),r("div",{staticClass:"flex items-center mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"border rounded px-4 py-2 mr-4 w-64",attrs:{placeholder:"Search by country name"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.sortOrder,expression:"sortOrder"}],staticClass:"border rounded px-4 py-2 mr-4",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));e.sortOrder=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"asc"}},[e._v("Sort A-Z")]),e._v(" "),r("option",{attrs:{value:"desc"}},[e._v("Sort Z-A")])])]),e._v(" "),r("table",{staticClass:"table-auto w-full"},[e._m(0),e._v(" "),r("tbody",e._l(e.filteredCountries,(function(t){return r("tr",{key:t.cca3},[r("td",{staticClass:"px-4 py-2"},[r("img",{staticClass:"w-8 h-8 object-contain",attrs:{src:t.flags.png,alt:t.name.official}})]),e._v(" "),r("td",{staticClass:"px-4 py-2"},[r("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),e.showModal(t)}}},[e._v(e._s(t.name.official))])]),e._v(" "),r("td",{staticClass:"px-4 py-2"},[e._v(e._s(t.cca2))]),e._v(" "),r("td",{staticClass:"px-4 py-2"},[e._v(e._s(t.cca3))]),e._v(" "),r("td",{staticClass:"px-4 py-2"},[e._v(e._s(t.name.nativeName))]),e._v(" "),r("td",{staticClass:"px-4 py-2"},[e._v(e._s(t.altSpellings.join(", ")))]),e._v(" "),r("td",{staticClass:"px-4 py-2"},[e._v(e._s(Array.isArray(t.idd)?t.idd.join(", "):t.idd))])])})),0)]),e._v(" "),r("div",{staticClass:"flex justify-center items-center mt-4"},[r("button",{staticClass:"border rounded px-4 py-2 mr-4",class:1===e.currentPage?"opacity-50 cursor-not-allowed":"",attrs:{disabled:1===e.currentPage},on:{click:e.previousPage}},[e._v("Previous")]),e._v(" "),r("span",{staticClass:"text-lg font-bold"},[e._v(e._s(e.currentPage)+" / "+e._s(e.totalPages))]),e._v(" "),r("button",{staticClass:"border rounded px-4 py-2 ml-4",class:e.currentPage===e.totalPages?"opacity-50 cursor-not-allowed":"",attrs:{disabled:e.currentPage===e.totalPages},on:{click:e.nextPage}},[e._v("Next")])]),e._v(" "),e.modalVisible?r("div",{staticClass:"fixed z-50 inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"},[r("div",{staticClass:"bg-white rounded-lg px-8 py-6"},[r("span",{staticClass:"text-gray-700 text-2xl font-bold mb-4 block"},[e._v(e._s(e.selectedCountry.name.official))]),e._v(" "),r("p",{staticClass:"text-gray-700 mb-2"},[r("strong",[e._v("Capital:")]),e._v(" "+e._s(e.selectedCountry.capital))]),e._v(" "),r("p",{staticClass:"text-gray-700 mb-2"},[r("strong",[e._v("Region:")]),e._v(" "+e._s(e.selectedCountry.region))]),e._v(" "),r("p",{staticClass:"text-gray-700 mb-2"},[r("strong",[e._v("Subregion:")]),e._v(" "+e._s(e.selectedCountry.subregion))]),e._v(" "),r("p",{staticClass:"text-gray-700 mb-2"},[r("strong",[e._v("Population:")]),e._v(" "+e._s(e.selectedCountry.population))]),e._v(" "),r("p",{staticClass:"text-gray-700 mb-2"},[r("strong",[e._v("Languages:")]),e._v(" "+e._s(Array.isArray(e.selectedCountry.languages)?e.selectedCountry.languages.map((function(t){return t.name})).join(", "):e.selectedCountry.languages))]),e._v(" "),r("p",{staticClass:"text-gray-700 mb-2"},[r("strong",[e._v("Timezones:")]),e._v(" "+e._s(null===(t=e.selectedCountry.timezones)||void 0===t?void 0:t.join(", ")))]),e._v(" "),r("p",{staticClass:"text-gray-700 mb-2"},[r("strong",[e._v("Currencies:")]),e._v(" "+e._s(Array.isArray(e.selectedCountry.currencies)?e.selectedCountry.currencies.map((function(t){return t.name})).join(", "):e.selectedCountry.currencies))]),e._v(" "),r("p",{staticClass:"text-blue-500 mb-2"},[r("strong",[r("a",{staticClass:"underline",attrs:{href:e.selectedCountry.maps.googleMaps,target:"_blank"}},[e._v("View on map")])])]),e._v(" "),r("button",{staticClass:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",on:{click:e.closeModal}},[e._v("Close")])])]):e._e()])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[t._v("Flag")]),t._v(" "),e("th",{staticClass:"px-4 py-2"},[t._v("Country Name")]),t._v(" "),e("th",{staticClass:"px-4 py-2"},[t._v("2-character Code")]),t._v(" "),e("th",{staticClass:"px-4 py-2"},[t._v("3-character Code")]),t._v(" "),e("th",{staticClass:"px-4 py-2"},[t._v("Native Name")]),t._v(" "),e("th",{staticClass:"px-4 py-2"},[t._v("Alternative Names")]),t._v(" "),e("th",{staticClass:"px-4 py-2"},[t._v("Calling Codes")])])])}],!1,null,null,null);e.default=component.exports}}]);