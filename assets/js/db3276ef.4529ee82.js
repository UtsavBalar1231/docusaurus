"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=m(a),d=i,u=f["".concat(c,".").concat(d)]||f[d]||p[d]||n;return a?r.createElement(u,o(o({ref:t},s),{},{components:a})):r.createElement(u,o({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<n;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3956:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return s},default:function(){return f}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),o=["components"],l={sidebar_position:1},c=void 0,m={unversionedId:"immensity/overview/alioth/changelogs/Release-0.3.t",id:"immensity/overview/alioth/changelogs/Release-0.3.t",isDocsHomePage:!1,title:"Release-0.3.t",description:"Changelog",source:"@site/docs/immensity/overview/alioth/changelogs/Release-0.3.t.md",sourceDirName:"immensity/overview/alioth/changelogs",slug:"/immensity/overview/alioth/changelogs/Release-0.3.t",permalink:"/immensity/overview/alioth/changelogs/Release-0.3.t",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Release-0.2.d",permalink:"/immensity/overview/alioth/changelogs/Release-0.2.d"},next:{title:"Release-0.4.j",permalink:"/immensity/overview/alioth/changelogs/Release-0.4.j"}},s=[{value:"Changelog",id:"changelog",children:[]}],p={toc:s};function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"changelog"},"Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kernel synced with android kernel common at Linux version 4.19.200"),(0,n.kt)("li",{parentName:"ul"},"Added Support for Mi 10/Mi 10 Pro/Mi 10T/Mi 10T Pro"),(0,n.kt)("li",{parentName:"ul"},"Force enabled UFS TurboWrite on supported devices"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/3cbbc49b33b7beadabfe17b2770b4a66d820402e"},"Fixed slow charging indication on lockscreen when connected with stock charger")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/e2a564929aa61b23753042723b2262cd1746a11a...8d0f5d0e596583b44f565ed2c6fdf90b6389410a"},"Reworked CPU boosting algorithm with optimized scheduling over realtime FIFO policy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/b0b099656fbf30997b5a7413caa4674babc6f5c5"},"Fixed colors transition while using adaptive refresh rate settings on alioth")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/458d320a8ff4fd0eed14b432ebdfae2ba8058047%5E...4bd4afb892bf7adef923ff4d2b4d22892242a4b2"},"Moved various platform drivers probing method to asynchronous to reduce boot time at first stage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/9ee028c866717cb15994fccf2c1f22223da9f914%5E..https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/ea1d0f69f017150784595e24acf68f6565b85370"},"Switched to mainline LZ4 compress/decompress algorith for zRAM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/f411740710c55239e9fb83bca7d03e4bcfa36344"},"Enabled Support for zRAM Writeback with upstream page-writeback support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/18f915712fe104b916b315ad485e81055fd4946e"},"Fixed an out of bounds bug while using zRAM writeback")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/ea399abd30f870e4ec336291959ef79dc5e73f42"},"Fixed allocation CPU overhead from zRAM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/8f21dba5e019ccd76efc7f9cd401e08713ae24de"},"Enabled ECN negotiation by default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/8f21dba5e019ccd76efc7f9cd401e08713ae24de...cc27dff9125f122a86f3722c82ef25b851d6e8b4"},"Switch to BBR V1 TCP Algorithm with FQ Codel QDisc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/7c34e26d4bcb68d7f30062ed1767f1edd44ca7e2...a2c81b495c37541d2eb05bc619c0939d3b880c81"},"Added support to tune PELT ramp/decay timings and reduced Utilization's PELT halflife to 16ms as default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/82dc48989d1183eb41b1514cda9c5ae4c3881d40"},"Switched to Using CONFIG_HZ as 300 to lower the jank on a loaded system")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/61df761c6b368436b0a37372ada16141a624700f"},"Enabled Support for UAS Storage devices"))))}f.isMDXComponent=!0}}]);