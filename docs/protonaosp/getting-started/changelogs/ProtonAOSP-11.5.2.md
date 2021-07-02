# Changelog ProtonAOSP 11.5.2

#### ROM side
- July security patch
- Added search to website
- [Added red, green, and blue color balance settings](https://protonaosp.kdrag0n.dev/screenshots#customization)
- [Added alarm, ringtone, and notification sounds from Plasma Mobile](https://protonaosp.kdrag0n.dev/screenshots#sounds)
- Added HarmonyOS Sans font style
- [Extended font styles to affect third-party apps](https://protonaosp.kdrag0n.dev/screenshots#customization) (reboot to apply changes)
- [Improved Night Light quality using chromatic adaptation](https://protonaosp.kdrag0n.dev/screenshots#night-light-improvements) (reduced color distortion)
- Improved Ambient EQ quality (with modern color science: CAT16)
- More gradual transition when turning Night Light on/off

#### Device Side
- Added setting for increased touch sensitivity
- Added support for HDR10+
- Added support for MifareClassic and NDEF on NFC
- Updated NFC SN1XX configuration and binaries for MW 11.2.0
- Updated FW and vendor from MIUI 21.7.21
- Fixed issues related to modem resulting in subsystem panic in some cases
- Implemented retry mechanism on modem helper
- Enabled PCIe bandwidth scaling to modem
- Fixed inaccurate reading of some GPU temperature
- Speed up the touchscreen SPI clock max frequency
- Upgraded alioth touchscreen firmware to latest
- Fixed video playback freezing in some usescases
- Optimized display panel configuration
- Kernel updated to latest CAF tag and synced with ACK android-4.19-stable
- Kernel compiled using latest proton-clang 13.0
