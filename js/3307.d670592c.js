(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[3307],{1373:(t,e,n)=>{var r=n(4614)["default"];n(9070),n(2526),n(1817),n(1539),n(3680),n(3706),n(2703),n(8011),n(4812),n(7941),n(9554),n(4747),n(4916),n(3123),n(4986),n(3210),n(4723),n(5306),n(1703),n(6647),n(1058),n(7042),n(2222),n(3650),n(3710),n(9714),n(6699),n(2023),function(t,e){for(var n in e)t[n]=e[n]}(e,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==r(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"deepObjectsMerge",(function(){return r})),n.d(e,"getColor",(function(){return s})),n.d(e,"getStyle",(function(){return u})),n.d(e,"hexToRgb",(function(){return a})),n.d(e,"hexToRgba",(function(){return c})),n.d(e,"makeUid",(function(){return f})),n.d(e,"omitByKeys",(function(){return d})),n.d(e,"pickByKeys",(function(){return m})),n.d(e,"rgbToHex",(function(){return p}));var r=function t(e,n){for(var r=0,o=Object.keys(n);r<o.length;r++){var i=o[r];n[i]instanceof Object&&Object.assign(n[i],t(e[i],n[i]))}return Object.assign(e||{},n),e},o=function(){for(var t={},e=document.styleSheets,n="",r=e.length-1;r>-1;r--){for(var o=e[r].cssRules,i=o.length-1;i>-1;i--)if(".ie-custom-properties"===o[i].selectorText){n=o[i].cssText;break}if(n)break}return(n=n.substring(n.lastIndexOf("{")+1,n.lastIndexOf("}"))).split(";").forEach((function(e){if(e){var n=e.split(": ")[0],r=e.split(": ")[1];n&&r&&(t["--".concat(n.trim())]=r.trim())}})),t},i=function(){return Boolean(document.documentMode)&&document.documentMode>=10},l=function(t){return t.match(/^--.*/i)},u=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(l(t)&&i()){var r=o();e=r[t]}else e=window.getComputedStyle(n,null).getPropertyValue(t).replace(/^\s/,"");return e},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n="--".concat(t),r=u(n,e);return r||t},a=function(t){if(void 0===t)throw new TypeError("Hex color is not defined");var e,n,r;if(!t.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(t," is not a valid hex color"));return 7===t.length?(e=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16)):(e=parseInt(t.slice(1,2),16),n=parseInt(t.slice(2,3),16),r=parseInt(t.slice(3,5),16)),"rgba(".concat(e,", ").concat(n,", ").concat(r,")")},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===t)throw new TypeError("Hex color is not defined");var n,r,o,i=t.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!i)throw new Error("".concat(t," is not a valid hex color"));return 7===t.length?(n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16)):(n=parseInt(t.slice(1,2),16),r=parseInt(t.slice(2,3),16),o=parseInt(t.slice(3,5),16)),"rgba(".concat(n,", ").concat(r,", ").concat(o,", ").concat(e/100,")")},f=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(t,e){for(var n={},r=Object.keys(t),o=0;o<r.length;o++)!e.includes(r[o])&&(n[r[o]]=t[r[o]]);return n},m=function(t,e){for(var n={},r=0;r<e.length;r++)n[e[r]]=t[e[r]];return n},p=function(t){if(void 0===t)throw new TypeError("Hex color is not defined");if("transparent"===t)return"#00000000";var e=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!e)throw new Error("".concat(t," is not a valid rgb color"));var n="0".concat(parseInt(e[1],10).toString(16)),r="0".concat(parseInt(e[2],10).toString(16)),o="0".concat(parseInt(e[3],10).toString(16));return"#".concat(n.slice(-2)).concat(r.slice(-2)).concat(o.slice(-2))},g={deepObjectsMerge:r,getColor:s,getStyle:u,hexToRgb:a,hexToRgba:c,makeUid:f,omitByKeys:d,pickByKeys:m,rgbToHex:p};e["default"]=g}]))},6256:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>y});var r=n(3396),o=(0,r._)("strong",null,"Vue Widgets",-1),i=(0,r.Uk)("Widget helper text"),l=(0,r.Uk)("Widget title"),u=(0,r.Uk)("89.9%"),s=(0,r.Uk)("Widget helper text"),a=(0,r.Uk)("Widget title"),c=(0,r.Uk)("89.9%"),f=(0,r.Uk)(" View more "),d=(0,r.Uk)(" View more "),m=(0,r.Uk)(" View more "),p=(0,r.Uk)(" View more ");function g(t,e,n,g,W,w){var h=(0,r.up)("CCardHeader"),_=(0,r.up)("WidgetsStatsA"),v=(0,r.up)("DocsExample"),x=(0,r.up)("CWidgetStatsB"),b=(0,r.up)("CCol"),y=(0,r.up)("CRow"),S=(0,r.up)("CChart"),C=(0,r.up)("CWidgetStatsE"),k=(0,r.up)("CIcon"),T=(0,r.up)("CWidgetStatsF"),E=(0,r.up)("CLink"),I=(0,r.up)("WidgetsStatsD"),O=(0,r.up)("CWidgetStatsC"),$=(0,r.up)("CCardGroup"),j=(0,r.up)("CCardBody"),z=(0,r.up)("CCard");return(0,r.wg)(),(0,r.j4)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{class:"mb-4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,null,{default:(0,r.w5)((function(){return[o]})),_:1}),(0,r.Wm)(j,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(_)]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",progress:{color:"success",value:75}},{text:(0,r.w5)((function(){return[i]})),title:(0,r.w5)((function(){return[l]})),value:(0,r.w5)((function(){return[u]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",progress:{color:"info",value:75},text:"Widget helper text",title:"Widget title",value:"12.124"})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",progress:{color:"warning",value:75},text:"Widget helper text",title:"Widget title",value:"$98.111,00"})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",progress:{color:"primary",value:75},text:"Widget helper text",title:"Widget title",value:"2TB"})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",color:"success",inverse:"",progress:{value:75}},{text:(0,r.w5)((function(){return[s]})),title:(0,r.w5)((function(){return[a]})),value:(0,r.w5)((function(){return[c]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",color:"info",inverse:"",progress:{value:75},text:"Widget helper text",title:"Widget title",value:"12.124"})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",color:"warning",inverse:"",progress:{value:75},text:"Widget helper text",title:"Widget title",value:"$98.111,00"})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{class:"mb-3",color:"primary",inverse:"",progress:{value:75},text:"Widget helper text",title:"Widget title",value:"2TB"})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{title:"title",value:"1,123"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{class:"mx-auto",type:"bar",style:{height:"40px",width:"80px"},data:{labels:g.widgetStatsE.labels,datasets:[{backgroundColor:g.getStyle("--cui-danger"),borderColor:"transparent",borderWidth:1,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:g.widgetStatsE.optionsBar},null,8,["data","options"])]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{title:"title",value:"1,123"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{class:"mx-auto",type:"bar",style:{height:"40px",width:"80px"},data:{labels:g.widgetStatsE.labels,datasets:[{backgroundColor:g.getStyle("--cui-primary"),borderColor:"transparent",borderWidth:1,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:g.widgetStatsE.optionsBar},null,8,["data","options"])]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{title:"title",value:"1,123"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{class:"mx-auto",type:"bar",style:{height:"40px",width:"80px"},data:{labels:g.widgetStatsE.labels,datasets:[{backgroundColor:g.getStyle("--cui-warning"),borderColor:"transparent",borderWidth:1,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:g.widgetStatsE.optionsBar},null,8,["data","options"])]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{title:"title",value:"1,123"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{class:"mx-auto",type:"line",style:{height:"40px",width:"80px"},data:{labels:g.widgetStatsE.labels,datasets:[{backgroundColor:"transparent",borderColor:g.getStyle("--cui-success"),borderWidth:2,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:g.widgetStatsE.optionsLine},null,8,["data","options"])]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{title:"title",value:"1,123"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{class:"mx-auto",type:"line",style:{height:"40px",width:"80px"},data:{labels:g.widgetStatsE.labels,datasets:[{backgroundColor:"transparent",borderColor:g.getStyle("--cui-warning"),borderWidth:2,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:g.widgetStatsE.optionsLine},null,8,["data","options"])]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{title:"title",value:"1,123"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{class:"mx-auto",type:"line",style:{height:"40px",width:"80px"},data:{labels:g.widgetStatsE.labels,datasets:[{backgroundColor:"transparent",borderColor:g.getStyle("--cui-info"),borderWidth:2,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:g.widgetStatsE.optionsLine},null,8,["data","options"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"primary",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-settings",size:"xl"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"info",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-user",size:"xl"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"warning",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-moon",size:"xl"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"danger",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-bell",size:"xl"})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"primary",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-settings",size:"xl"})]})),footer:(0,r.w5)((function(){return[(0,r.Wm)(E,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,r.w5)((function(){return[f,(0,r.Wm)(k,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"info",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-user",size:"xl"})]})),footer:(0,r.w5)((function(){return[(0,r.Wm)(E,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,r.w5)((function(){return[d,(0,r.Wm)(k,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"warning",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-moon",size:"xl"})]})),footer:(0,r.w5)((function(){return[(0,r.Wm)(E,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,r.w5)((function(){return[m,(0,r.Wm)(k,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"danger",title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-bell",size:"xl"})]})),footer:(0,r.w5)((function(){return[(0,r.Wm)(E,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,r.w5)((function(){return[p,(0,r.Wm)(k,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"primary",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-settings",size:"xl"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"info",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-user",size:"xl"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"warning",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-moon",size:"xl"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:3},{default:(0,r.w5)((function(){return[(0,r.Wm)(T,{color:"danger",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-bell",size:"xl"})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(I)]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)($,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",progress:{color:"info",value:75},title:"Visitors",value:"87.500"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-people",height:"36"})]})),_:1}),(0,r.Wm)(O,{class:"mb-3",progress:{color:"success",value:75},title:"New Clients",value:"385"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-user-follow",height:"36"})]})),_:1}),(0,r.Wm)(O,{class:"mb-3",progress:{color:"warning",value:75},title:"Products sold",value:"1238"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-basket",height:"36"})]})),_:1}),(0,r.Wm)(O,{class:"mb-3",progress:{color:"primary",value:75},title:"Returning Visitors",value:"28%"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-chart-pie",height:"36"})]})),_:1}),(0,r.Wm)(O,{class:"mb-3",progress:{color:"danger",value:75},title:"Avg. Time",value:"5:34:11"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-speedometer",height:"36"})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",progress:{color:"info",value:75},title:"Visitors",value:"87.500"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-people",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",progress:{color:"success",value:75},title:"New Clients",value:"385"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-user-follow",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",progress:{color:"warning",value:75},title:"Products sold",value:"1238"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-basket",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",progress:{color:"primary",value:75},title:"Returning Visitors",value:"28%"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-chart-pie",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",progress:{color:"danger",value:75},title:"Avg. Time",value:"5:34:11"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-speedometer",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",progress:{color:"info",value:75},title:"Comments",value:"972"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-speech",height:"36"})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(v,{href:""},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",color:"info",inverse:"",progress:{value:75},title:"Visitors",value:"87.500"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-people",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",color:"success",inverse:"",progress:{value:75},title:"New Clients",value:"385"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-user-follow",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",color:"warning",inverse:"",progress:{value:75},title:"Products sold",value:"1238"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-basket",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",color:"primary",inverse:"",progress:{value:75},title:"Returning Visitors",value:"28%"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-chart-pie",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",color:"danger",inverse:"",progress:{value:75},title:"Avg. Time",value:"5:34:11"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-speedometer",height:"36"})]})),_:1})]})),_:1}),(0,r.Wm)(b,{xs:2},{default:(0,r.w5)((function(){return[(0,r.Wm)(O,{class:"mb-3",color:"info",inverse:"",progress:{value:75},title:"Comments",value:"972"},{icon:(0,r.w5)((function(){return[(0,r.Wm)(k,{icon:"cil-speech",height:"36"})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var W=n(1373),w=n(9198),h=n(4593),_=n(9969);const v={name:"Widgets",components:{CChart:w.FR,WidgetsStatsA:h.Z,WidgetsStatsD:_.Z},setup:function(){var t={labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],optionsBar:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},optionsLine:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}};return{getStyle:W.getStyle,widgetStatsE:t,widgetProgressIconItems:[{color:"primary",icon:"cil-puzzle"},{color:"success",icon:"cil-speedometer"},{color:"danger",icon:"cil-cursor"},{color:"info",icon:"cil-drop"},{color:"secondary",icon:"cil-pencil"}]}}};var x=n(89);const b=(0,x.Z)(v,[["render",g]]),y=b},4614:(t,e,n)=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,r(e)}n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports}}]);
//# sourceMappingURL=3307.d670592c.js.map