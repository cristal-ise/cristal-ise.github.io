---
layout: blog-detail
author: Zsolt Kovacs
date: 14-04-2020
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 5.1.0
---

The new version (5.1.0) of the CRISTAL-iSE has been released

This version was sponsored by [Icube SA](https://www.icube-sa.ch/)

## New features:

### kernel, dsl
- [#338](https://github.com/cristal-ise/cristal-ise/issues/338): Store information about changes of resource Items during Bootstrap dsl enhancement kernel


## Bug fixes:

### kernel
- [#342](https://github.com/cristal-ise/cristal-ise/issues/342): Modify convertToResourceChangeDetails() to handle special character for ModuleChanges xml
- [#336](https://github.com/cristal-ise/cristal-ise/issues/336): ProxyManager log should be tuned in order to avoid overflow when testing
- [#331](https://github.com/cristal-ise/cristal-ise/issues/331): Fine tuning of logging levels required in classes Script and Outcome
- [#329](https://github.com/cristal-ise/cristal-ise/issues/329): Level of the logs regarding standard script parameters should be lowered

### dsl
- [#334](https://github.com/cristal-ise/cristal-ise/issues/334): Remove "imports" from class: ModuleDelegate

### restapi
- [#327](https://github.com/cristal-ise/cristal-ise/issues/327): Useless Rest handlers should be removed
