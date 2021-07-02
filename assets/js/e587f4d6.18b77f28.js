(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[907],{3755:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),s=["components"],r={},l="Flashing",u={unversionedId:"protonaosp/getting-started/flash",id:"protonaosp/getting-started/flash",isDocsHomePage:!1,title:"Flashing",description:"Before You start",source:"@site/docs/protonaosp/getting-started/flash.md",sourceDirName:"protonaosp/getting-started",slug:"/protonaosp/getting-started/flash",permalink:"/docusaurus/protonaosp/getting-started/flash",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Download",permalink:"/docusaurus/download"},next:{title:"Community",permalink:"/docusaurus/community"}},p=[{value:"Installation Steps",id:"installation-steps",children:[]}],m={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flashing"},"Flashing"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"before-you-start"},"Before You start"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Keep a backup of your data!"),(0,i.kt)("li",{parentName:"ul"},"Make sure to keep a backup of your files as the installation will wipe your data.")))),(0,i.kt)("h3",{id:"installation-steps"},"Installation Steps"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1) Enter Fastboot mode")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure your phone turned off. Press and hold the Power and Volume down buttons for 3 seconds until the phone turns on. You will be in Fastboot mode with the Mi Bunny icon showing on your screen.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2) Connect your phone")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3) Check your phone connection")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing\n",(0,i.kt)("inlineCode",{parentName:"li"},"fastboot devices"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4) Flash the Boot Image (Recovery)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once the device showed up in fastboot devices, continue with Sideloading the boot image with the following commands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastboot flash boot_a boot.img")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastboot flash vendor_boot_a vendor_boot.img")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastboot --setactive=a"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5) Enter Recovery mode")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Press and hold the Power and Volume up buttons for 3 seconds until the phone turns on. You will be in Recovery mode.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6) Select Update through ADB")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once your phone is in Recovery  mode and shows \u201cNo Command\u201d, hit Power button + Volume up button, then use the volume buttons to move through the menu options, when \u201cInstall update through ADB\u201d is highlighted, press the Power button.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"7) Continue the flashing")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flash the ROM through recovery with ",(0,i.kt)("inlineCode",{parentName:"li"},"adb sideload <zipname>")," command from your PC.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"8) Factory Resetting")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the volume buttons to move through the menu options, when ",(0,i.kt)("strong",{parentName:"li"},"Factory Reset")," is highlighted, press the Power button.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"9) Reboot to System")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the volume buttons to move through the menu options, when ",(0,i.kt)("strong",{parentName:"li"},"Reboot to System")," is highlighted, press the Power button.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h1",{parentName:"div",id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("h3",{parentName:"div",id:"the-command-isnt-working"},"The command isn\u2019t working!"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Make sure you have fastboot binary in the same folder or installed systemwide and the ZIP is properly downloaded and moved to the same folder")),(0,i.kt)("h3",{parentName:"div",id:"flashing-progress-stopped-at-94"},"Flashing progress stopped at 94%!"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"This is harmless as long the message followed by it is ",(0,i.kt)("strong",{parentName:"li"},"failed to read\ncommand: No error"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"XIAOMI-GOURAMI-AB-20210615-H.R-R1"),"\nis the courtesy of raphaelielscape company"))}d.isMDXComponent=!0}}]);