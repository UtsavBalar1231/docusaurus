(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[570],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6891:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:9990},u={unversionedId:"changelogs/20210702_11.5.1",id:"changelogs/20210702_11.5.1",isDocsHomePage:!1,title:"2021.07.02 v11.5.1",description:"Source side Changes",source:"@site/docs/changelogs/20210702_11.5.1.md",sourceDirName:"changelogs",slug:"/changelogs/20210702_11.5.1",permalink:"/docusaurus/changelogs/20210702_11.5.1",version:"current",sidebarPosition:9990,frontMatter:{sidebar_position:9990},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/docusaurus/community"},next:{title:"About IMMENSITY",permalink:"/docusaurus/immensity"}},s=[{value:"Source side Changes",id:"source-side-changes",children:[]},{value:"Device side Changes",id:"device-side-changes",children:[]},{value:"Boot Image",id:"boot-image",children:[]},{value:"Vendor Boot Image",id:"vendor-boot-image",children:[]},{value:"Full OTAs",id:"full-ota",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"source-side-changes"},"Source side Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added Amoled dark mode."),(0,o.kt)("li",{parentName:"ul"},"Fixed charging source recognizing when using non oem chargers."),(0,o.kt)("li",{parentName:"ul"},"Improved haptics logic in calculator application.")),(0,o.kt)("h2",{id:"device-side-changes"},"Device side Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Switched to full OTA builds for easy flashing and upgrade."),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug in firmware where audio used to cut after alarm ended on type-c headphones."),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug in audio hardware where it would cut audio for 500ms~ after switching to apps that support voIP."),(0,o.kt)("li",{parentName:"ul"},"Fixed a problem where USB PD authentification woud not happen causing thermal mitigation to not switch settings and resulting in slower charging."),(0,o.kt)("li",{parentName:"ul"},"Fixed a problem where the stock type-c to jack adapter woud display analog is not supported."),(0,o.kt)("li",{parentName:"ul"},"Improved panel response time/rate and addressed color differences between 60/120 hz."),(0,o.kt)("li",{parentName:"ul"},"Init display with 120hz as default refresh rate."),(0,o.kt)("li",{parentName:"ul"},"Lowered minimum Display brightness level and increased maximum auto brightness value."),(0,o.kt)("li",{parentName:"ul"},"Lowered Fingerprint sync time to around 450ms~when in doze mode."),(0,o.kt)("li",{parentName:"ul"},"Fixed panel LTM modes not applying in AOD Power Save and HBM states."),(0,o.kt)("li",{parentName:"ul"},"Lowered recording volume on google voice recorder."),(0,o.kt)("li",{parentName:"ul"},"Retuned powerhal boosting configuration for better performance and idle."),(0,o.kt)("li",{parentName:"ul"},"Fixed OpenCL not being utilized on Genshin Impact and AIDA64 not recognizing OpenCL Device.")),(0,o.kt)("h2",{id:"boot-image"},"Boot Image"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dl.hasaber8.me/ProtonAOSP/Images/boot.img"},"Download")),(0,o.kt)("h2",{id:"vendor-boot-image"},"Vendor Boot Image"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dl.hasaber8.me/ProtonAOSP/Images/vendor_boot.img"},"Download")),(0,o.kt)("h2",{id:"full-ota"},"Full OTAs"),(0,o.kt)("p",null,"Full OTA package is available for all the variants."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redmi K40/POCO F3/Xiaomi Mi11x: ",(0,o.kt)("a",{parentName:"li",href:"https://dl.hasaber8.me/ProtonAOSP/proton-aosp_alioth-ota_11.5.1-20210702-gapps.zip"},"Gapps Package")),(0,o.kt)("li",{parentName:"ul"},"Redmi K40/POCO F3/Xiaomi Mi11x: ",(0,o.kt)("a",{parentName:"li",href:"https://dl.hasaber8.me/ProtonAOSP/proton-aosp_alioth-ota_11.5.1-20210702-minimal.zip"},"Minimal Package"))))}p.isMDXComponent=!0}}]);