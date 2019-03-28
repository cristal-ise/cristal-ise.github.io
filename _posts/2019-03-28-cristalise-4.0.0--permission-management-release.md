---
layout: blog-detail
author: Zsolt Kovacs
date: 28-03-2019
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: !.0.0
---

The new version (4.0.0) of the CRISTAL-iSE kernel and its modules have been released with many new exciting modules and features!

## New features:
- jooqdb: Make varchar column length of cristalise tables configurable enhancement jooqdb - [#150](https://github.com/cristal-ise/cristal-ise/issues/150)
- kernel: Extend Lookup and ClusterStorae interface with bootsrap hooks enhancement kernel - [#134](https://github.com/cristal-ise/cristal-ise/issues/134)
- dsl: Add support to dynamicForm to generate 'mask' compatible with NGDynamicForms and Primeng dsl enhancement - [#127](https://github.com/cristal-ise/cristal-ise/issues/127)
- dsl: add 'pattern' to dynamicForms section to support front-end validation dsl enhancement outcomeinit - [#119](https://github.com/cristal-ise/cristal-ise/issues/119)
- kernel: Description Collection with properties enhancement kernel - [#108](https://github.com/cristal-ise/cristal-ise/issues/108)
- kernel: Integrate with apache shiro authentication and authorisation enhancement kernel - [#93](https://github.com/cristal-ise/cristal-ise/issues/93)
- kernel: Make PropertyDescriptionList a proper DescriptionObject enhancement kernel - [#89](https://github.com/cristal-ise/cristal-ise/issues/89)
- kernel: SecurityManager.authenticate() should be able to provide message to the user about the login failure enhancement kernel - [#86](https://github.com/cristal-ise/cristal-ise/issues/86)
- kernel: Enable Dependency to contain members referencing the same Item enhancement kernel - [#71](https://github.com/cristal-ise/cristal-ise/issues/71)
- Change CreateItemFromDescription instantiate its Collection using PropertyDescriptionList enhancement kernel - [#64](https://github.com/cristal-ise/cristal-ise/issues/64)
- kernel: Script can be initialized without resolving included Scripts in the database (late binding) enhancement kernel - [#62](https://github.com/cristal-ise/cristal-ise/issues/62)
- jooqdb: Implement storing permissions of role enhancement jooqdb - [#32](https://github.com/cristal-ise/cristal-ise/issues/32)
- jooqdb: Extend JooqDomainHandler to be triggered by ClusterStoraege commit and abort enhancement jooqdb - [#25](https://github.com/cristal-ise/cristal-ise/issues/25)
- Change CookieLogin and TokenLogin to use shiro enabled SecurityManager enhancement restapi - [#21](https://github.com/cristal-ise/cristal-ise/issues/21)
- Table: Add NGDynamicForm generation support enhancement outcomeinit - [#20](https://github.com/cristal-ise/cristal-ise/issues/20)
- Default values for enumeration is randomly set enhancement outcomeinit - [#16](https://github.com/cristal-ise/cristal-ise/issues/16)
- restapi: Read public authentication message from exception enhancement restapi - [#15](https://github.com/cristal-ise/cristal-ise/issues/15)
- dsl: Improve DSL to generate PropertyDescrition as a resource Item in module.xml dsl enhancement - [#13](https://github.com/cristal-ise/cristal-ise/issues/13)
- dsl: Implement support to scaffold CRUD Item DSL files dsl enhancement - [#12](https://github.com/cristal-ise/cristal-ise/issues/12)
- dsl: Add Permission generation for shiro integration dsl enhancement - [#11](https://github.com/cristal-ise/cristal-ise/issues/11)
- dsl: support the XSD attributes ' totalDigits' and 'fractionDigits for type decimal dsl enhancement - [#9](https://github.com/cristal-ise/cristal-ise/issues/9)