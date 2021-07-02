---
sidebar_position: 1
---

### Changelog

- Kernel synced with android kernel common at Linux version 4.19.203 with august CVE patches merged tag `ASB-2021-08-05_4.19-stable`
- Merged Latest QCOM tags for 4.19 mobile platform `LA.UM.9.12.r1-12500-SMxx50.0`, `LA.UM.9.15.1.r1-04000-KAMORTA.0`
- F2FS drivers updated to latest from [jaeguek/f2fs-stable](https://github.com/jaegeuk/f2fs-stable/commits/linux-4.19.y)
- Fixed a critical bug which caused device to freeze in suspend and unable to wake from it
- Fixed a critical bug on `apollo` which caused display glitches
- Fixed Inline building of kernel for devs interested in using this as base
- Added LineageOS FOD support for `cmi`, `umi`
- [Aligned GPU Frequency table of SM8250 devices with SM8250-AB](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/2becf469625a469dd650836942a251d5a3d797d6)
