---
title: Flashing AOSPA Alpha 1 Sapphire on Redmi K40S / POCO F4
author: Utsav Balar
authorURL: https://github.com/UtsavBalar1231
authorImageURL: https://avatars1.githubusercontent.com/u/32286881?s=460&v=4
---

<h3> Introducing <p style={{color: 'green'}}>paranoid android</p> for xiaomi munch by UtsavBalar </h3>

The latest alpha release of Paranoid Android ROM for munch contains two package variants.

1. Fastboot Package
2. ADB Sideload Package

Fastboot Package is flashed through xiaomi bootloader.
ADB sideload Package is flashed through a signed AOSPA recovery.

## Flashing Fastboot Package

> **Prerequicites:**

- AOSP platform-tools
- Brain

### Step 1

Reboot to bootloader

```bash
adb reboot bootloader
```

### Step 2

Flashing the build

```bash
fastboot update --skip-secondary --skip-reboot aospa*.zip
```

### Step 3

Formatting the Data

- Reboot into recovery
- Wipe Data / Factory Reset
- Reboot to system

## Flashing ADB Sideload Package

> **Prerequicites:**

- AOSP platform-tools
- Signed aospa boot.img
- Signed aospa vendor_boot.img
- Brain

### Step 1

Flashing signed boot and vendor boot

```bash
fastboot flash boot_ab aospa-boot.img
fastboot flash vendor_boot_ab aospa-vendor_boot.img
```

### Step 2

Reboot into recovery

```bash
fastboot reboot recovery
```

or

Manually reboot into recovery by pressing power off and volume down button

### Step 3

Sideloading the package

Select Apply update from ADB

```bash
adb sideload aospa*.zip
```

### Step 4

Formatting the Data

- Wipe Data / Factory Reset
- Reboot to system

:::tip Always keep a backup of your partitions
:::

:::danger Do not flash custom kernel or TWRP
:::
