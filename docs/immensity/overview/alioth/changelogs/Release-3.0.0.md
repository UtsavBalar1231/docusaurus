---
sidebar_position: 1
---

### Changelog
- Kernel synced with android kernel common at Linux version 4.19.241.
- Fixed WIFI not working on AOSP ROMs.
- Added support for [Multi Generational LRU](https://lore.kernel.org/linux-mm/20220208081902.3550911-1-yuzhao@google.com/)
- Reverted all the Qualcomm changes over the memory management framework.
- Added google memory management changes from pixel 5 kernel.
- Added support for making reclaim aware about transparent huge pages [THP].
- Optimized the spreading of tasks by the scheduler.
- Improved load balancing is done by the scheduler.
- BACKPORTED shared memory point to point improvements and fixes from sm8450 kernel.
- Fixed a rare kernel panic due to the modem being unreasonable while the cellular network shifts from 5G to 4G.
- Compiled using the latest AOSP LLVM Compiler version 14.0.7.
- Added release builds for mi10t [apollo].