---
layout: blog-detail
author: Zsolt Kovacs
date: 08-11-2019
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 4.4.0
---

The new version (4.4.0) of the CRISTAL-iSE has been realsed with connection pool implementaion for jooqdb!

## New features:

### kernel

- [#290](https://github.com/cristal-ise/cristal-ise/issues/290): Add clear cache functionality to ProxyManager enhancement

### jooqdb
- [#43](https://github.com/cristal-ise/cristal-ise/issues/43): Use JDBC Datasource and Connection pools instead of DriverManager.getConnection()


## Bug fixes:

### dsl
- [#277](https://github.com/cristal-ise/cristal-ise/issues/277): DSL to generate Item cannot specify the workflow version

### restapi
- [#292](https://github.com/cristal-ise/cristal-ise/issues/292): User(agent) cannot login after its name was changed
- [#263](https://github.com/cristal-ise/cristal-ise/issues/263): Cookie time should be renewed by each call

### outcomeinit
- [#288](https://github.com/cristal-ise/cristal-ise/issues/288): OutcomeBuilder.addRecord() does not handle tables with optional fields
