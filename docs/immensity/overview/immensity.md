---
sidebar_position: 1
slug: /immensity
---

# About IMMENSITY

```
IMMENSITY is a unique custom kernel project that focuses on optimizing UX
and fine tuning the OEM modifications to provide the best of your device.
```

## Features {#features}

- Kernel base is upto date with the latest QCOM Release tag for SM8250 devices `LA.UM.9.12.r1-12500-SMxx50.0`.
- All the subtree kernel packages such as `display-drivers, video-drivers, audio-kernel, camera-kernel, data-kernel` have been updated to the corresponding QCOM Release tag.
- WLAN drivers both QCA CLD and CMN are Updated to latest QCOM Release tag.
- Kernel is in-lined with the AOSP common kernel branch **android-4.19-stable** at linux version **4.19.203** providing all the necessary CVE patches from AOSP as well as linux.
- F2FS drivers has been in-lined with jaeguek/f2fs-stable from branch `linux-4.19.y`.
- The Latency while switching between different refresh rates has been reduced to null.
- The Latency while enrolling fingerprint has been reduced further the wakeup after long time of idle has been fixed.
- Advanced Display power saving and dimming features has been added.
- Reduced Debugging to base minimum for security, performance and lower kernel size.
- Compiled using the latest Proton Clang 13 toolchain with full Link Time Optimization.
- Enabled support for `Wire Guard VPN` acceleration.
- Enabled support for `Ex-FAT` and `NTFS` Filesystems.
- Enabled UFS Host Performance booster and TurboWrite booster on supported devices.
- Enabled USB port Moisture detection support on supported ROMs.
- Replaced kernel random with S-random [S-random is the fastest alternative for built-in RNGs in linux kernel.].
- Additionally saved 52MB or RAM reserved by DMA for ION pool.
- Added support to always silently restart subsystem instead of kernel panic
- Reworked interrupt `IRQ` handling in STM FTS_521 touchscreen driver `cmi, umi`
- Bumped up SPI clock rate to 10 Mhz in Focaltech touchscreen driver `alioth`
- Upgraded ft3658 k11 firmware to latest release `alioth`
- [Moved various platform drivers probing method to asynchronous to reduce boot time at first stage](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/458d320a8ff4fd0eed14b432ebdfae2ba8058047%5E...4bd4afb892bf7adef923ff4d2b4d22892242a4b2)
- [Switched to mainline LZ4 compress/decompress algorith for zRAM](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/9ee028c866717cb15994fccf2c1f22223da9f914%5E..https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/ea1d0f69f017150784595e24acf68f6565b85370)
- [Enabled Support for zRAM Writeback with upstream page-writeback support](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/f411740710c55239e9fb83bca7d03e4bcfa36344)
- [Enabled ECN negotiation by default](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/8f21dba5e019ccd76efc7f9cd401e08713ae24de)
- [Switch to BBR V1 TCP Algorithm with FQ Codel QDisc](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/8f21dba5e019ccd76efc7f9cd401e08713ae24de...cc27dff9125f122a86f3722c82ef25b851d6e8b4)
- [Added support to tune PELT ramp/decay timings and reduced Utilization's PELT halflife to 16ms as default](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/7c34e26d4bcb68d7f30062ed1767f1edd44ca7e2...a2c81b495c37541d2eb05bc619c0939d3b880c81)
- [Switched to Using CONFIG_HZ as 300 to lower the jank on a loaded system](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/82dc48989d1183eb41b1514cda9c5ae4c3881d40)
- [Enabled Support for UAS Storage devices](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/61df761c6b368436b0a37372ada16141a624700f)
- [Aligned GPU Frequency table of SM8250 devices with SM8250-AB](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/2becf469625a469dd650836942a251d5a3d797d6)
