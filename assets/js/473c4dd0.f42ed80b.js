(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[139],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7992:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,slug:"/immensity"},s="About IMMENSITY",u={unversionedId:"immensity/overview/immensity",id:"immensity/overview/immensity",isDocsHomePage:!1,title:"About IMMENSITY",description:"- IMMENSITY is a unique custom kernel project that focuses on optimizing UX and fine tuning the OEM modifications to provide the best of your device.",source:"@site/docs/immensity/overview/immensity.md",sourceDirName:"immensity/overview",slug:"/immensity",permalink:"/docusaurus/immensity",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/immensity"},sidebar:"tutorialSidebar",previous:{title:"Changelog ProtonAOSP 11.5.2",permalink:"/docusaurus/protonaosp/getting-started/changelogs/ProtonAOSP-11.5.2"},next:{title:"Release-0.1.a",permalink:"/docusaurus/immensity/overview/alioth/changelogs/Release-0.1.a"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-immensity"},"About IMMENSITY"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IMMENSITY is a unique custom kernel project that focuses on optimizing UX and fine tuning the OEM modifications to provide the best of your device."),(0,a.kt)("li",{parentName:"ul"},"Currently supported on Redmi K20 Pro and POCO F3 / K40 / MI 11X")),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kernel base is upto date with the latest QCOM Release tag for SM8250 devices ",(0,a.kt)("inlineCode",{parentName:"li"},"LA.UM.9.12.r1-12200-SMxx50.QSSI12.0"),"."),(0,a.kt)("li",{parentName:"ul"},"All the subtree kernel packages such as ",(0,a.kt)("inlineCode",{parentName:"li"},"display-drivers, video-drivers, audio-kernel, camera-kernel, data-kernel")," have been updated to the corresponding QCOM Release tag."),(0,a.kt)("li",{parentName:"ul"},"WLAN drivers both QCA CLD and CMN are Updated to latest QCOM Release tag."),(0,a.kt)("li",{parentName:"ul"},"Kernel is in-lined with the AOSP common kernel branch ",(0,a.kt)("strong",{parentName:"li"},"android-4.19-stable")," at linux version ",(0,a.kt)("strong",{parentName:"li"},"4.19.197")," providing all the necessary CVE patches from AOSP as well as linux."),(0,a.kt)("li",{parentName:"ul"},"F2FS drivers has been in-lined with jaeguek/f2fs-stable from branch ",(0,a.kt)("inlineCode",{parentName:"li"},"linux-4.19.y"),"."),(0,a.kt)("li",{parentName:"ul"},"Additional 90 HZ refresh rate timing as been added for supported ROMs."),(0,a.kt)("li",{parentName:"ul"},"The Latency while switching between different refresh rates has been reduced to null."),(0,a.kt)("li",{parentName:"ul"},"The Latency while enrolling fingerprint has been reduced further the wakeup after long time of idle has been fixed."),(0,a.kt)("li",{parentName:"ul"},"Advanced Display power saving and dimming features has been added."),(0,a.kt)("li",{parentName:"ul"},"Reduced Debugging to base minimum for security, performance and lower kernel size."),(0,a.kt)("li",{parentName:"ul"},"Compiled using the latest Proton Clang 13 toolchain with full Link Time Optimization."),(0,a.kt)("li",{parentName:"ul"},"Enabled support for ",(0,a.kt)("inlineCode",{parentName:"li"},"Wire Guard VPN")," acceleration."),(0,a.kt)("li",{parentName:"ul"},"Enabled support for ",(0,a.kt)("inlineCode",{parentName:"li"},"Ex-FAT")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"NTFS")," Filesystems."),(0,a.kt)("li",{parentName:"ul"},"Enabled UFS Performance booster and Turbo Write booster on supported devices."),(0,a.kt)("li",{parentName:"ul"},"Enabled USB port Moisture detection support on supported ROMs."),(0,a.kt)("li",{parentName:"ul"},"Replaced kernel random with S-random ","[S-random is the fastest alternative for built-in RNGs in linux kernel.]","."),(0,a.kt)("li",{parentName:"ul"},"Additionally saved 52MB or RAM reserved by DMA for ION pool."),(0,a.kt)("li",{parentName:"ul"},"Added support to always silently restart subsystem instead of kernel panic"),(0,a.kt)("li",{parentName:"ul"},"Reworked interrupt ","[IRQ]"," handling in STM FTS_521 touchscreen driver ","[cmi, umi]"),(0,a.kt)("li",{parentName:"ul"},"Bumped up SPI clock rate to 10 Mhz in STM FTS_521 touchscreen driver ","[cmi, umi]"),(0,a.kt)("li",{parentName:"ul"},"Bumped up SPI clock rate to 10 Mhz in Focaltech touchscreen driver ","[alioth]"),(0,a.kt)("li",{parentName:"ul"},"Upgraded ft3658 k11 firmware to latest release","[alioth]")))}d.isMDXComponent=!0}}]);