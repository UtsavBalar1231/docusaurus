"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[807],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9498:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},u=void 0,c={unversionedId:"immensity/overview/alioth/changelogs/Release-0.2.d",id:"immensity/overview/alioth/changelogs/Release-0.2.d",isDocsHomePage:!1,title:"Release-0.2.d",description:"Changelog",source:"@site/docs/immensity/overview/alioth/changelogs/Release-0.2.d.md",sourceDirName:"immensity/overview/alioth/changelogs",slug:"/immensity/overview/alioth/changelogs/Release-0.2.d",permalink:"/docusaurus/immensity/overview/alioth/changelogs/Release-0.2.d",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Release-0.1.a",permalink:"/docusaurus/immensity/overview/alioth/changelogs/Release-0.1.a"},next:{title:"Release-0.1.a",permalink:"/docusaurus/immensity/overview/alioth/download/Release-0.1.a"}},s=[{value:"Changelog",id:"changelog",children:[]}],p={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kernel synced with android kernel common at Linux version 4.19.198"),(0,a.kt)("li",{parentName:"ul"},"Re:Optimized panel refresh rate settings"),(0,a.kt)("li",{parentName:"ul"},"Disabled tons of debug spam from input drivers like vibrator, touchscreen and audio"),(0,a.kt)("li",{parentName:"ul"},"Reworked interrupt ","[IRQ]"," handling in STM FTS_521 touchscreen driver ","[cmi, umi]"),(0,a.kt)("li",{parentName:"ul"},"Bumped up SPI clock rate to 10Mhz in STM FTS_521 touchscreen driver ","[cmi, umi]"),(0,a.kt)("li",{parentName:"ul"},"Bumped up SPI clock rate to 10Mhz in FocalTech touchscreen driver ","[alioth]"),(0,a.kt)("li",{parentName:"ul"},"Upgraded ft3658 k11 firmware to latest ","[alioth]"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue with doze unable to suspend causing device to stay awake"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where alarm timer driver gets failed to suspend"),(0,a.kt)("li",{parentName:"ul"},"Added support to always silently restart subsystem instead of kernel panic"),(0,a.kt)("li",{parentName:"ul"},"Fixed memory leaks from camera kernel"),(0,a.kt)("li",{parentName:"ul"},"Updated devicetree ","[dtbo]"," to LA.UM.9.12.r1-12000-SMxx50.0")))}m.isMDXComponent=!0}}]);