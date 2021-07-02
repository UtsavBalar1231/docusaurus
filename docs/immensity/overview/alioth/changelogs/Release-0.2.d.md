---
sidebar_position: 1
---

### Changelog
- Kernel synced with android kernel common at Linux version 4.19.198
- Re:Optimized panel refresh rate settings
- Disabled tons of debug spam from input drivers like vibrator, touchscreen and audio
- Reworked interrupt [IRQ] handling in STM FTS_521 touchscreen driver [cmi, umi]
- Bumped up SPI clock rate to 10Mhz in STM FTS_521 touchscreen driver [cmi, umi]
- Bumped up SPI clock rate to 10Mhz in FocalTech touchscreen driver [alioth]
- Upgraded ft3658 k11 firmware to latest [alioth]
- Fixed an issue with doze unable to suspend causing device to stay awake
- Fixed an issue where alarm timer driver gets failed to suspend
- Added support to always silently restart subsystem instead of kernel panic
- Fixed memory leaks from camera kernel
- Updated devicetree [dtbo] to LA.UM.9.12.r1-12000-SMxx50.0