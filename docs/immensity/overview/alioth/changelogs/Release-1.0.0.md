---
sidebar_position: 1
---

### Changelog
- Rebased kernel over latest QCOM CAF tag LA.UM.9.12.r1-14000-SMxx50.0 with latest oem modification taken from mi12x (psyche-r-oss) kernel sources.
- Kernel synced with android kernel common at Linux version 4.19.227 with august CVE patches merged tag `ASB-2022-02-05_4.19-stable`
- BACKPORTed FUSE filesystem changes from kernel 5.4 with passthrough optimizations from google.
- Added support for Multipath TCP algorithm.
- Added support for Least Recently Used (LRU) page replacement algorithm.
- Added samsung optimizations on CFQ io scheduler.
- Added latest exfat filesystem support from mainline kernel.

