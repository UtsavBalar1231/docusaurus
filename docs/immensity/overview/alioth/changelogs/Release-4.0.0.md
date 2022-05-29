---
sidebar_position: 1
---

### Changelog
- Kernel synced with android kernel common at Linux version 4.19.245.
- Merged the latest CLO tag `LA.UM.9.12.r1-14200-SMxx50.QSSI13.0` in kernel and kernel subtrees.
- Backported MGLRU [Multi Generational LRU] from aosp Gerrit.
- Upgraded exFAT FS to latest changes from namjaejeon/linux-exfat-oot.
- Applied camera driver fixes for cmi/umi.
- Improved pstore logging.
- Disabled per-cgroup memory tracking.
- Optimized memory remap system calls for better memory management on Android.
- Added release builds for POCO F2 Pro [lmi].