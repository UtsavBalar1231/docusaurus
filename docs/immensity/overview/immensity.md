---
sidebar_position: 1
slug: /immensity
---

# About IMMENSITY

> The IMMENSITY project is a one-of-a-kind custom kernel that prioritises enhancing user experience, stability, and performance.
> Additionally, it supports all Xiaomi SM8250 devices with carefully calibrated OEM tweaks to give your device the greatest performance.

## Features {#features}

- Complete AOSP | MIUI support for all xiaomi sm8250 devices.
- Kernel base is upto date with the latest QCOM CLO Release tag for SM8250 devices `LA.UM.9.12.r1-14700-SMxx50.0`.
- All the subtree kernel packages such as `display-drivers, video-drivers, audio-kernel, camera-kernel, data-kernel` have been updated to the corresponding QCOM CLO Release tag.
- WLAN drivers both QCA CLD and CMN are Updated to latest QCOM CLO Release tag as well.
- Kernel is in-lined with the AOSP common kernel branch **android-4.19-stable** at linux version **4.19.259** providing all the necessary CVE patches from AOSP as well as linux.
- F2FS drivers has been in-lined with jaeguek/f2fs-stable from branch `linux-4.19.y`.
- The Latency while switching between different refresh rates has been reduced to null.
- The Latency while enrolling fingerprint has been reduced further the wakeup after long time of idle has been fixed.
- Reduced Debugging and tracing to base minimum for security, performance and lower kernel size.
- Compiled using the latest AOSP LLVM compiler 15.0.1 with full Link Time Optimization.
- Enabled support for `Wire Guard VPN` acceleration.
- Enabled support for mainline `ExFAT FS` , `ERO FS` and `FUSE FS` Filesystems.
- Enabled support for `NTFS` Filesystem.
- Enabled UFS Host Performance booster and TurboWrite booster on supported devices.
- Enabled USB port Moisture detection support on supported ROMs.
- Enabled TTL target support.
- Added support for `F2FS Compression` on supported ROMs.
- Added support for `MGLRU` Multi Generational LRU. [Read more](https://www.phoronix.com/news/MGLRU-v14-Released).
- Added support for `DAMON` Data Access Monitoring Memory Reclaimation. [Read more](https://www.phoronix.com/news/DAMON-Reclamation-Linux-5.16).
- Added support for `MPTCP` Multipath TCP. [Read more](https://github.com/multipath-tcp/mptcp_net-next/wiki/).
- Replaced kernel random with L-RNG [Read more](https://github.com/smuellerDD/lrng#linux-devrandom---a-new-approach).
- Additionally saved 52MB or RAM reserved by DMA for ION pool.
- Added support to always silently restart subsystem instead of kernel panic.
- Moved various platform drivers probing method to asynchronous to reduce boot time at first stage.
- Switched to mainline LZ4 compress/decompress algorithmn for zRAM.
- Added support to tune PELT ramp/decay timings and reduced Utilization's PELT halflife to 16ms as default.
- Switched to Using CONFIG_HZ as 300 to lower the jank on a loaded system.
- Picked amazon linux TCP optimization patches.
- Optimized Linux cortex strings performance.
- Improved CPU performance on Indian devices.
- Unlocked Max DDR Bus frequency on sm8250 platform.
- Aligned GPU Frequency table of SM8250 devices with SM8250-AB.
