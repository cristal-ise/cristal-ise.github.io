---
layout: blog-detail
author: Zsolt Kovacs
date: 28-03-2019
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 4.0.0
---

The new version (4.0.0) of the CRISTAL-iSE kernel and its modules have been released with many new exciting modules and features!

## New features:

### kernel
- [#134](https://github.com/cristal-ise/cristal-ise/issues/134): Extend Lookup and ClusterStorae interface with bootsrap hooks
- [#93](https://github.com/cristal-ise/cristal-ise/issues/93): Integrate with apache shiro authentication and authorisation
- [#89](https://github.com/cristal-ise/cristal-ise/issues/89): Make PropertyDescriptionList a proper DescriptionObject
- [#86](https://github.com/cristal-ise/cristal-ise/issues/86): SecurityManager.authenticate() should be able to provide message to the user about the login failure
- [#71](https://github.com/cristal-ise/cristal-ise/issues/71): Enable Dependency to contain members referencing the same Item 
- [#108](https://github.com/cristal-ise/cristal-ise/issues/108): Description Collection with properties
- [#64](https://github.com/cristal-ise/cristal-ise/issues/64): Change CreateItemFromDescription instantiate its Collection using PropertyDescriptionList
- [#62](https://github.com/cristal-ise/cristal-ise/issues/62): Script can be initialized without resolving included Scripts in the database (late binding)

### jooqdb
- [#150](https://github.com/cristal-ise/cristal-ise/issues/150): Make varchar column length of cristalise tables configurable
- [#32](https://github.com/cristal-ise/cristal-ise/issues/32): Implement storing permissions of role
- [#25](https://github.com/cristal-ise/cristal-ise/issues/25): Extend JooqDomainHandler to be triggered by ClusterStoraege commit and abort

### dsl
- [#127](https://github.com/cristal-ise/cristal-ise/issues/127): Add support to dynamicForm to generate 'mask' compatible with NGDynamicForms and Primeng
- [#119](https://github.com/cristal-ise/cristal-ise/issues/119): add 'pattern' to dynamicForms section to support front-end validation 
- [#13](https://github.com/cristal-ise/cristal-ise/issues/13): Improve DSL to generate PropertyDescrition as a resource Item in module.xml
- [#12](https://github.com/cristal-ise/cristal-ise/issues/12): Implement support to scaffold CRUD Item DSL files
- [#11](https://github.com/cristal-ise/cristal-ise/issues/11): Add Permission generation for shiro integration
- [#9](https://github.com/cristal-ise/cristal-ise/issues/9): support the XSD attributes ' totalDigits' and 'fractionDigits for type decimal

### restapi
- [#21](https://github.com/cristal-ise/cristal-ise/issues/21): Change CookieLogin and TokenLogin to use shiro enabled SecurityManager
- [#15](https://github.com/cristal-ise/cristal-ise/issues/15): Read public authentication message from exception

### xpathoutcome
- [#20](https://github.com/cristal-ise/cristal-ise/issues/20): Table Add NGDynamicForm generation support
- [#16](https://github.com/cristal-ise/cristal-ise/issues/16): Default values for enumeration is randomly set

## Bug fixes:

### kernel
- [#156](https://github.com/cristal-ise/cristal-ise/issues/156): Collection.resolveMembers(-1, itempath) throws ObjectNotFoundException
- [#137](https://github.com/cristal-ise/cristal-ise/issues/137): ClassNotFoundException is thrown when calling SetAgentPassword predefined step 
- [#120](https://github.com/cristal-ise/cristal-ise/issues/120): Script context (bindings) retained between multiple executions of the same Script
- [#92](https://github.com/cristal-ise/cristal-ise/issues/92):  Script result is not returned when the single String output has a name
- [#88](https://github.com/cristal-ise/cristal-ise/issues/88):  Executing the same script is not threadsafe using Groovy (perhaps other languages as well)
- [#65](https://github.com/cristal-ise/cristal-ise/issues/65): Set password to be temporary during CreateAgentFromDescription
- [#63](https://github.com/cristal-ise/cristal-ise/issues/63):  NPE raised when populating list of values (LOV)

### jooqdb
- [#3](https://github.com/cristal-ise/cristal-ise/issues/3): JOOQ running unwanted queries

### restapi
- [#143](https://github.com/cristal-ise/cristal-ise/issues/143): Password change - temporaryPassword flag stays true until the REST server is restarted

### outcomeinit
- [#140](https://github.com/cristal-ise/cristal-ise/issues/140): Converting JSON to XML does not reproduce the same order of elements

### dsl
- [#122](https://github.com/cristal-ise/cristal-ise/issues/122):  Remove hardcoded namespace from DependencyDelegate
- [#10](https://github.com/cristal-ise/cristal-ise/issues/10):  DependencyDescription is not generated properly
