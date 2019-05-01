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

## New features:

### kernel

- [#184](https://github.com/cristal-ise/cristal-ise/issues/184): Add predefined steps UpdateCollectionsFromDescriptions to support updating Item to the latest description

### dsl
- [#171](https://github.com/cristal-ise/cristal-ise/issues/171): Add seconds to datetime and time fields
- [#163](https://github.com/cristal-ise/cristal-ise/issues/163): Add support for a custom placeholder in DynamicForms

### jooqdb
- [#152](https://github.com/cristal-ise/cristal-ise/issues/152): Remove primary key constraint from 'permission' column of ROLE_PERMISSION table

### outcomeinit
- [#181](https://github.com/cristal-ise/cristal-ise/issues/181): Format datefield with default config from system properties enhancement 

## Bug fixes:

### kernel
- [#173](https://github.com/cristal-ise/cristal-ise/issues/173): Unable to update collection member upon server restart
- [#168](https://github.com/cristal-ise/cristal-ise/issues/168): AndSplit does not work when it is encapsulated within a Loop
- [#166](https://github.com/cristal-ise/cristal-ise/issues/166): CompositeActitiy does not Complete automatically when the last vertex is not an Activity
- [#165](https://github.com/cristal-ise/cristal-ise/issues/165): ProxyManager adds ItemProxy to its cache instead of AgentProxy
- [#159](https://github.com/cristal-ise/cristal-ise/issues/159): Fix NPE in JooqItemHandler.getItemPath

### restapi
- [#145](https://github.com/cristal-ise/cristal-ise/issues/145): Generating json for dynamic forms does not set 'item', 'agent' and 'job' variables for Script 

### jooqdb
- [#50](https://github.com/cristal-ise/cristal-ise/issues/50): Test database functionality against MySQL 5.6 and above
