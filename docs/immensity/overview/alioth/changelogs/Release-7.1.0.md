---
sidebar_position: 1
---

### Changelog

- Kernel synced with android kernel common at Linux version 4.19.259.
- Merged the latest CLO tag `LA.UM.9.12.r1-14700-SMxx50.0` in kernel and kernel subtrees.
- Merged latest AOSP security patches in kernel added in tag `ASB-2022-09-05_13-4.19`.
- Added support for Xiaomi Redmi K40S / POCO F4 (munch).
- Added support for android 13 ROMs.
- Upgraded F2FS drivers from jaegeuk/f2fs-stable [Linux kernel 6.0.0-rc3].
- Kernel compiled using latest AOSP clang v15.0.2 with Full LTO support.
- Fixed a critical TCP issue due to a broken congestion algorithm.
- Upgraded exfat drivers from namjaejeon/exfat-linux [Linux kernel 6.0.0].
- Fixed memory reclaim issue on Android.
- Removed proximity blocking feature for telegram from the kernel.
- Increased swappiness to 160.
- Fixed issue with game mode on MIUI.
- Imported the new xiaomi MIUI experience modifications for MIUI builds.
- Optimized charging control for all xiaomi sm8250 devices.
- Removed display panel power state modifications.
- Enabled F2FS compression support.
- Upgraded lrng driver from Linux kernel 5.15.
- Fixed unusual power consumption issue on UMI / THYME.
- Updated kernel devicetree to LA.UM.9.12.r1-14400-SMxx50.0.
