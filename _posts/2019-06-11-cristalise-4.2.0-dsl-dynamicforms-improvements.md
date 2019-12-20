---
layout: blog-detail
author: Zsolt Kovacs
date: 01-05-2019
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 4.1.0
---

The new version (4.1.0) of the CRISTAL-iSE has been realsed with DSL improvements and major bug fixes for workflow engine!

This version was sponsored by [Icube SA](https://www.icube-sa.ch/) and [Titus Global-Tech](https://www.titusgt.com/).

## New features:

### kernel
- [#205](https://github.com/cristal-ise/cristal-ise/issues/205): Add the possibility to configure shiro ini file location 
- [#201](https://github.com/cristal-ise/cristal-ise/issues/201): 'member' property not injected for MemberRemoveScript
- [#200](https://github.com/cristal-ise/cristal-ise/issues/200): Add predefined steps UpdatePropertiesFromDescriptions to support updating Item to the latest description
- [#197](https://github.com/cristal-ise/cristal-ise/issues/197): Improve error messages of ORSplit enhancement kernel
- [#196](https://github.com/cristal-ise/cristal-ise/issues/196): Improve performance of queryLifeCycle() operation of Item

### outcomeinit
- [#225](https://github.com/cristal-ise/cristal-ise/issues/225): Make the containerGridClass configurable from the schema dsl
- [#223](https://github.com/cristal-ise/cristal-ise/issues/223): NgDynamicForms: generate groups/fieldsets dsl
- [#221](https://github.com/cristal-ise/cristal-ise/issues/221): Unsupported Array value for input field
- [#216](https://github.com/cristal-ise/cristal-ise/issues/216): NgDynamicForms: Make form width configurable
- [#209](https://github.com/cristal-ise/cristal-ise/issues/209): NgDynamicForms: Support the hideOnDateTimeSelect setting for dateTime fields
- [#212](https://github.com/cristal-ise/cristal-ise/issues/212): Add support for Out of Specification OOS
- [#199](https://github.com/cristal-ise/cristal-ise/issues/199): Use totalDigits and fractionDigits of XSD to generate angular for validator
- [#191](https://github.com/cristal-ise/cristal-ise/issues/191): Add pattern in integer field for validation


## Bug fixes:

### kernel
- [#207](https://github.com/cristal-ise/cristal-ise/issues/207): Disable hardcoded Admin role specification for predefined steps
- [#193](https://github.com/cristal-ise/cristal-ise/issues/193): 'member' property not injected for MemberUpdateScript
- [#190](https://github.com/cristal-ise/cristal-ise/issues190): AgentProxy.execute(item, predefStep) method is missing

### restapi
- [#213](https://github.com/cristal-ise/cristal-ise/issues/213): Boolean fields are always restored as true in the webUI
- [#162](https://github.com/cristal-ise/cristal-ise/issues/162): User still logged in after browser restart

### dsl
- [#219](https://github.com/cristal-ise/cristal-ise/issues/219): The XSD generation of DSL does not keep the order of elements tables and fields defined in Schema DSL script
