"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[139],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1,slug:"/immensity"},s="About IMMENSITY",m={unversionedId:"immensity/overview/immensity",id:"immensity/overview/immensity",isDocsHomePage:!1,title:"About IMMENSITY",description:"`",source:"@site/docs/immensity/overview/immensity.md",sourceDirName:"immensity/overview",slug:"/immensity",permalink:"/immensity",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/immensity"},sidebar:"tutorialSidebar",previous:{title:"Changelog ProtonAOSP 11.5.2",permalink:"/protonaosp/getting-started/changelogs/ProtonAOSP-11.5.2"},next:{title:"Supported devices",permalink:"/devices"}},c=[{value:"Features",id:"features",children:[]}],d={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-immensity"},"About IMMENSITY"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"IMMENSITY is a unique custom kernel project that focuses on optimizing UX\nand fine tuning the OEM modifications to provide the best of your device.\n")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kernel base is upto date with the latest QCOM Release tag for SM8250 devices ",(0,i.kt)("inlineCode",{parentName:"li"},"LA.UM.9.12.r1-12500-SMxx50.0"),"."),(0,i.kt)("li",{parentName:"ul"},"All the subtree kernel packages such as ",(0,i.kt)("inlineCode",{parentName:"li"},"display-drivers, video-drivers, audio-kernel, camera-kernel, data-kernel")," have been updated to the corresponding QCOM Release tag."),(0,i.kt)("li",{parentName:"ul"},"WLAN drivers both QCA CLD and CMN are Updated to latest QCOM Release tag."),(0,i.kt)("li",{parentName:"ul"},"Kernel is in-lined with the AOSP common kernel branch ",(0,i.kt)("strong",{parentName:"li"},"android-4.19-stable")," at linux version ",(0,i.kt)("strong",{parentName:"li"},"4.19.203")," providing all the necessary CVE patches from AOSP as well as linux."),(0,i.kt)("li",{parentName:"ul"},"F2FS drivers has been in-lined with jaeguek/f2fs-stable from branch ",(0,i.kt)("inlineCode",{parentName:"li"},"linux-4.19.y"),"."),(0,i.kt)("li",{parentName:"ul"},"The Latency while switching between different refresh rates has been reduced to null."),(0,i.kt)("li",{parentName:"ul"},"The Latency while enrolling fingerprint has been reduced further the wakeup after long time of idle has been fixed."),(0,i.kt)("li",{parentName:"ul"},"Advanced Display power saving and dimming features has been added."),(0,i.kt)("li",{parentName:"ul"},"Reduced Debugging to base minimum for security, performance and lower kernel size."),(0,i.kt)("li",{parentName:"ul"},"Compiled using the latest Proton Clang 13 toolchain with full Link Time Optimization."),(0,i.kt)("li",{parentName:"ul"},"Enabled support for ",(0,i.kt)("inlineCode",{parentName:"li"},"Wire Guard VPN")," acceleration."),(0,i.kt)("li",{parentName:"ul"},"Enabled support for ",(0,i.kt)("inlineCode",{parentName:"li"},"Ex-FAT")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NTFS")," Filesystems."),(0,i.kt)("li",{parentName:"ul"},"Enabled UFS Host Performance booster and TurboWrite booster on supported devices."),(0,i.kt)("li",{parentName:"ul"},"Enabled USB port Moisture detection support on supported ROMs."),(0,i.kt)("li",{parentName:"ul"},"Replaced kernel random with S-random ","[S-random is the fastest alternative for built-in RNGs in linux kernel.]","."),(0,i.kt)("li",{parentName:"ul"},"Additionally saved 52MB or RAM reserved by DMA for ION pool."),(0,i.kt)("li",{parentName:"ul"},"Added support to always silently restart subsystem instead of kernel panic"),(0,i.kt)("li",{parentName:"ul"},"Reworked interrupt ",(0,i.kt)("inlineCode",{parentName:"li"},"IRQ")," handling in STM FTS_521 touchscreen driver ",(0,i.kt)("inlineCode",{parentName:"li"},"cmi, umi")),(0,i.kt)("li",{parentName:"ul"},"Bumped up SPI clock rate to 10 Mhz in Focaltech touchscreen driver ",(0,i.kt)("inlineCode",{parentName:"li"},"alioth")),(0,i.kt)("li",{parentName:"ul"},"Upgraded ft3658 k11 firmware to latest release ",(0,i.kt)("inlineCode",{parentName:"li"},"alioth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/458d320a8ff4fd0eed14b432ebdfae2ba8058047%5E...4bd4afb892bf7adef923ff4d2b4d22892242a4b2"},"Moved various platform drivers probing method to asynchronous to reduce boot time at first stage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/9ee028c866717cb15994fccf2c1f22223da9f914%5E..https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/ea1d0f69f017150784595e24acf68f6565b85370"},"Switched to mainline LZ4 compress/decompress algorith for zRAM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/f411740710c55239e9fb83bca7d03e4bcfa36344"},"Enabled Support for zRAM Writeback with upstream page-writeback support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/8f21dba5e019ccd76efc7f9cd401e08713ae24de"},"Enabled ECN negotiation by default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/8f21dba5e019ccd76efc7f9cd401e08713ae24de...cc27dff9125f122a86f3722c82ef25b851d6e8b4"},"Switch to BBR V1 TCP Algorithm with FQ Codel QDisc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/7c34e26d4bcb68d7f30062ed1767f1edd44ca7e2...a2c81b495c37541d2eb05bc619c0939d3b880c81"},"Added support to tune PELT ramp/decay timings and reduced Utilization's PELT halflife to 16ms as default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/82dc48989d1183eb41b1514cda9c5ae4c3881d40"},"Switched to Using CONFIG_HZ as 300 to lower the jank on a loaded system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/61df761c6b368436b0a37372ada16141a624700f"},"Enabled Support for UAS Storage devices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/2becf469625a469dd650836942a251d5a3d797d6"},"Aligned GPU Frequency table of SM8250 devices with SM8250-AB"))))}p.isMDXComponent=!0}}]);