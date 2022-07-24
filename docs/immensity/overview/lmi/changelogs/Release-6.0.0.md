---
sidebar_position: 1
---

### Changelog

-   Kernel synced with android kernel common at Linux version 4.19.252.
-   Merged the latest CLO tag `LA.UM.9.12.r1-14400-SMxx50.QSSI12.0` in kernel and kernel subtrees.
-   Merged latest AOSP security patches in kernel added in tag `ASB-2022-07-05_13-4.19`.
-   Kernel compiled using latest AOSP clang v15.0.1.
-   Added support for early display wakeup mechanism.
-   Fixed brightness level mapping on AOSP builds.
-   Disable a bunch of debug-related configuration options inside the kernel.
-   Massive upgrade to f2fs drivers.
    -   Upgraded f2fs drivers from jaegeuk/f2fs-stable [Linux kernel 5.19].
    -   Fixed the f2fs driver deadlock issue when writing to a file with fsync.
-   Increase contiguous area memory size to 24MB for memory-sensitive operations like firmware reading and upgrade.
-   Optimized IPA page allocations.
-   Make kernel boot faster by using asynchronous probing in various drivers.
-   Fixed a critical suspend bug in the SPI driver.
-   Backported vmalloc memory management from mainline.
-   Backport memory compaction optimizations from mainline.
-   Backported Wireguard updates from mainline.
-   Backported Data Access MONitoring (DAMON) from mainline.
-   Enabled dead code elimination feature for the kernel.
-   Optimized latency while entering suspend.
-   Improved user experience while the system is under high memory pressure.
-   Reduced power consumption from UFS suspend/idle.
-   Upgraded UFS features like turbo write and HPB from one plus kernel.
-   Switched to Weighted Vegas algorithm for Multipath Congestion Control.
-   Improved memchr() performance.
-   Improved thermal configuration for Indian devices.
-   Improved LZ4 compression performance.
-   Fixed issues with Qualcomm boost framework not able to access some scheduler nodes.
-   Improved the performance and efficiency of the scheduler.
