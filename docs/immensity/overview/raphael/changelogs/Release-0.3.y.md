---
sidebar_position: 1
---

### Changelog
- Updated base to QCOM tag LA.UM.9.1.r1-10600-SMxxx0.0.
- Merged Latest Android Kernel Common at Linux version 4.14.239.
- Updated WLAN drivers from QCOM tag LA.UM.9.1.r1-10600-SMxxx0.0 at Release 5.2.022.8F.
- Updated F2FS from jaeguek/f2fs-stable at tag f2fs-5.14-rc1-4.14.
- Moved PID map read operations on little CPU cluster to save CPU overhead.
- Fixed a problem in simple_lmk where it would erroneously clear accumulated data.
- Fixed a problem in simple_lmk where vmpressure starts reporting erroneously high pressure after a long period of intense memory pressure.
- Fixed a problem in adsp where a race condition was occuring while qos request were updating simultaneously.