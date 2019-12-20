---
layout: blog-detail
author: Zsolt Kovacs
date: 11-08-2019
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 4.3.0
---

The new version (4.3.0) of the CRISTAL-iSE has been realsed to support auditing Login and Logout events!

This version was sponsored by [Icube SA](https://www.icube-sa.ch/) and [Titus Global-Tech](https://www.titusgt.com/).

## New features:

### kernel

- [#90](https://github.com/cristal-ise/cristal-ise/issues/90): Support for auditing of Login, Logout and Sign

### dsl
- [#132](https://github.com/cristal-ise/cristal-ise/issues/132): Add support to generate 'additional' configuration of NgDynamicForms
- [#264](https://github.com/cristal-ise/cristal-ise/issues/264): Extend fields of Schema DSL to specify that it is actually references an Item
- [#237](https://github.com/cristal-ise/cristal-ise/issues/237): Add support to set autoComplete in DynamicForms
- [#230](https://github.com/cristal-ise/cristal-ise/issues/230): Add config in dynamic forms to update another fields

### restapi
- [#262](https://github.com/cristal-ise/cristal-ise/issues/262): Add getBulkAliases service
- [#259](https://github.com/cristal-ise/cristal-ise/issues/259): Create an agent without timeout
- [#242](https://github.com/cristal-ise/cristal-ise/issues/242): Add the API to POST the updateScript into RestAPI

### outcomeinit
- [#245](https://github.com/cristal-ise/cristal-ise/issues/245): Integer fields has a default value of 0. Should be empty by default

### documentation
- [#244](https://github.com/cristal-ise/cristal-ise/issues/244): Move docs to readthedocs.org


## Bug fixes:

### kernel
- [#251](https://github.com/cristal-ise/cristal-ise/issues/251): Loop reinit() will trigger reinit() for all verticies in its actual CompositeActivity

### restapi
- [#269](https://github.com/cristal-ise/cristal-ise/issues/269): Generic Error for Scripts
- [#267](https://github.com/cristal-ise/cristal-ise/issues/267): Security Padding Issue

### outcomeinit
- [#246](https://github.com/cristal-ise/cristal-ise/issues/246): ListOfValuesTest fails when it is run locally
- [#239](https://github.com/cristal-ise/cristal-ise/issues/239): OutcomeBuilder add default 0 values for integer and decimal fields in tables
- [#232](https://github.com/cristal-ise/cristal-ise/issues/232): XSD and XML Data Sequence Problem
