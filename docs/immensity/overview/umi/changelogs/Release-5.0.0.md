---
sidebar_position: 1
---

### Changelog

- Kernel synced with android kernel common at Linux version 4.19.247.
- Merged the latest CLO tag `LA.UM.9.12.r1-14300-SMxx50.QSSI13.0` in kernel and kernel subtrees.
- Added support for EROFS Filesystem.
- Fixed long-run memory hiccups.
- Unlocked the maximum DDR bus frequency for sm8250.
- Disabled Xiaomi early fingerprint optimization hacks on aosp builds.
- Increased Devfreq worker priority to work well with KGSL.
- Backported accelerated arm64 libraries from mainline.
- Added support for Linux random number generator driver [LRNG].
- Added release builds for MI 10 Pro [cmi] and MI 10 [umi].
- Some miscellaneous cleanup and optimizations are not worth mentioning.