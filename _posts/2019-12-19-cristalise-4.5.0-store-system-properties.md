---
layout: blog-detail
author: Zsolt Kovacs
date: 19-12-2019
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 4.5.0
---

The new version (4.5.0) of the CRISTAL-iSE has been realsed to sotre System Properties as an Outcome!

## New features:

### kernel

- [#307](https://github.com/cristal-ise/cristal-ise/issues/307): Store the System Properties in server item during bootstrap

### dsl
- [#304](https://github.com/cristal-ise/cristal-ise/issues/304): Extend ImportAgent and DSL to support DomainPath defintion and creation
- [#302](https://github.com/cristal-ise/cristal-ise/issues/302): Support using Script object when specifying dynamicForms.updateScriptRef and listOfValues.scriptRef

### restapi
- [#297](https://github.com/cristal-ise/cristal-ise/issues/297): Add activityPath as queryParam to the getScriptResult() methods


## Bug fixes:

### kernel
- [#309](https://github.com/cristal-ise/cristal-ise/issues/309): Maven full build fails to compile IDL generated files

### outcomeinit
- [#299](https://github.com/cristal-ise/cristal-ise/issues/299): Label in JSON for NgDynamicForms has extra spaces when label is specified in XSD appinfo/dynamicForms
