(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[807],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9498:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},s={unversionedId:"immensity/overview/alioth/changelogs/Release-0.2.d",id:"immensity/overview/alioth/changelogs/Release-0.2.d",isDocsHomePage:!1,title:"Release-0.2.d",description:"Changelog",source:"@site/docs/immensity/overview/alioth/changelogs/Release-0.2.d.md",sourceDirName:"immensity/overview/alioth/changelogs",slug:"/immensity/overview/alioth/changelogs/Release-0.2.d",permalink:"/docusaurus/immensity/overview/alioth/changelogs/Release-0.2.d",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Release-0.1.a",permalink:"/docusaurus/immensity/overview/alioth/changelogs/Release-0.1.a"},next:{title:"Release-0.1.a",permalink:"/docusaurus/immensity/overview/alioth/download/Release-0.1.a"}},u=[{value:"Changelog",id:"changelog",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kernel synced with android kernel common at Linux version 4.19.198"),(0,i.kt)("li",{parentName:"ul"},"Re:Optimized panel refresh rate settings"),(0,i.kt)("li",{parentName:"ul"},"Disabled tons of debug spam from input drivers like vibrator, touchscreen and audio"),(0,i.kt)("li",{parentName:"ul"},"Reworked interrupt ","[IRQ]"," handling in STM FTS_521 touchscreen driver ","[cmi, umi]"),(0,i.kt)("li",{parentName:"ul"},"Bumped up SPI clock rate to 10Mhz in STM FTS_521 touchscreen driver ","[cmi, umi]"),(0,i.kt)("li",{parentName:"ul"},"Bumped up SPI clock rate to 10Mhz in FocalTech touchscreen driver ","[alioth]"),(0,i.kt)("li",{parentName:"ul"},"Upgraded ft3658 k11 firmware to latest ","[alioth]"),(0,i.kt)("li",{parentName:"ul"},"Fixed an issue with doze unable to suspend causing device to stay awake"),(0,i.kt)("li",{parentName:"ul"},"Fixed an issue where alarm timer driver gets failed to suspend"),(0,i.kt)("li",{parentName:"ul"},"Added support to always silently restart subsystem instead of kernel panic"),(0,i.kt)("li",{parentName:"ul"},"Fixed memory leaks from camera kernel"),(0,i.kt)("li",{parentName:"ul"},"Updated devicetree ","[dtbo]"," to LA.UM.9.12.r1-12000-SMxx50.0")))}p.isMDXComponent=!0}}]);