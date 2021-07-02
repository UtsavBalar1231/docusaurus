---
sidebar_position: 2
slug: /flash
---
# Flashing

:::caution 
### Before You start
* Keep a backup of your data!
* Make sure to keep a backup of your files as the installation will wipe your data.
:::

### Installation Steps
**1) Enter Fastboot mode**
- Make sure your phone turned off. Press and hold the Power and Volume down buttons for 3 seconds until the phone turns on. You will be in Fastboot mode with the Mi Bunny icon showing on your screen.

**2) Connect your phone**
- Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable.

**3) Check your phone connection**
- Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing
`fastboot devices`

**4) Flash Fastboot package**
- Open ADB terminal and type `fastboot update protonaosp-file.zip`. You will see that adb will flash boot and vendor boot and will reboot into fastbootd where it will flash the rest of the images.
 
**5) Enter Recovery mode**
- After successful flashing you will reboot into system **BUT** force reboot back to recovery if you are coming from any other ROM and format data.

:::tip
# Frequently Asked Questions
### The command isn’t working!
- Make sure you have fastboot binary in the same folder or installed systemwide and the ZIP is properly downloaded and moved to the same folder

### Super error while flashing !
- This means that the super partition layout is mismatched and you will need to reflash MIUI before flashing proton
:::
