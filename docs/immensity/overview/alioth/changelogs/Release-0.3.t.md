---
sidebar_position: 1
---

### Changelog

- Kernel synced with android kernel common at Linux version 4.19.200
- Added Support for Mi 10/Mi 10 Pro/Mi 10T/Mi 10T Pro
- Force enabled UFS TurboWrite on supported devices
- [Fixed slow charging indication on lockscreen when connected with stock charger](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/3cbbc49b33b7beadabfe17b2770b4a66d820402e)
- [Reworked CPU boosting algorithm with optimized scheduling over realtime FIFO policy](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/e2a564929aa61b23753042723b2262cd1746a11a...8d0f5d0e596583b44f565ed2c6fdf90b6389410a)
- [Fixed colors transition while using adaptive refresh rate settings on alioth](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/b0b099656fbf30997b5a7413caa4674babc6f5c5)
- [Moved various platform drivers probing method to asynchronous to reduce boot time at first stage](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/458d320a8ff4fd0eed14b432ebdfae2ba8058047%5E...4bd4afb892bf7adef923ff4d2b4d22892242a4b2)
- [Switched to mainline LZ4 compress/decompress algorith for zRAM](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/9ee028c866717cb15994fccf2c1f22223da9f914%5E..https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/ea1d0f69f017150784595e24acf68f6565b85370)
- [Enabled Support for zRAM Writeback with upstream page-writeback support](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/f411740710c55239e9fb83bca7d03e4bcfa36344)
- [Fixed an out of bounds bug while using zRAM writeback](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/18f915712fe104b916b315ad485e81055fd4946e)
- [Fixed allocation CPU overhead from zRAM](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/ea399abd30f870e4ec336291959ef79dc5e73f42)
- [Enabled ECN negotiation by default](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/8f21dba5e019ccd76efc7f9cd401e08713ae24de)
- [Switch to BBR V1 TCP Algorithm with FQ Codel QDisc](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/8f21dba5e019ccd76efc7f9cd401e08713ae24de...cc27dff9125f122a86f3722c82ef25b851d6e8b4)
- [Added support to tune PELT ramp/decay timings and reduced Utilization's PELT halflife to 16ms as default](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/compare/7c34e26d4bcb68d7f30062ed1767f1edd44ca7e2...a2c81b495c37541d2eb05bc619c0939d3b880c81)
- [Switched to Using CONFIG_HZ as 300 to lower the jank on a loaded system](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/82dc48989d1183eb41b1514cda9c5ae4c3881d40)
- [Enabled Support for UAS Storage devices](https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250/commit/61df761c6b368436b0a37372ada16141a624700f)
