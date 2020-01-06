---
layout: blog-detail
author: Zsolt Kovacs
date: 06-01-2020
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 5.0.0
---

The new version (5.0.0) of the CRISTAL-iSE has been realsed to replace Logger with SLF4J

This version was sponsored by [Icube SA](https://www.icube-sa.ch/)

## New features:

### all artifacts

- [#99](https://github.com/cristal-ise/cristal-ise/issues/99): Replace Logger with SLF4J logging framework
- [#178](https://github.com/cristal-ise/cristal-ise/issues/178): Update Groovy dependency to 2.5.8

### kernel, dsl, restapi
- [#279](https://github.com/cristal-ise/cristal-ise/issues/279): The version of the Master Schema and Aggregate Script is not know by the Item

### dsl
- [#286](https://github.com/cristal-ise/cristal-ise/issues/286): Support parsing excel files


## Bug fixes:

### restapi
- [#294](https://github.com/cristal-ise/cristal-ise/issues/294): Remove Apache tika-parsers and mssql jdbc dependenceis from restapi bug restapi
- [#273](https://github.com/cristal-ise/cristal-ise/issues/273): getMasterOutcome of RESTAPI does not return the requested mediatype for resource Items


## Breaking changes:
- Logger logLevel and logFile arguments are ineffective, configure logger compatible (i.e. Logback) with SLF4J instead
- tika-parsers and ms-sql dependecies were removed from restapi
- Eclipse/Intellij needs to be updated to its latest groovy plugins and configure to use 2.5 version
