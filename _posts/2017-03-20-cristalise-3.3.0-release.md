---
layout: blog-detail
author: Zsolt Kovacs
date: 20-03-2017
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 3.3.0
---

The new version (3.3.0) of the CRISTAL-iSE kernel and its modules have been released with many new exciting modules and features!

## New Modules
- JOOQDB - https://github.com/cristal-ise/jooqdb

    Implementation of CRISTAL-iSE ClusterStorage and Lookup interfaces providing a drop-in replacement for ldap and xmldb modules.
    It is based on http://jooq.org, an excellent DSL wrapper for SQL.

- Trigger - https://github.com/cristal-ise/trigger

    This module provides Description-Driven Trigger funcionalities, and it is based on [Quartz Scheduler]
    (http://www.quartz-scheduler.org/).

- XPath Outcome Initiator - https://github.com/cristal-ise/xpath-outcome-initiator

## New Features in Kernel

For the complete list of changes please check the release letter - https://github.com/cristal-ise/kernel/releases/tag/v3.3.0

- Query was introduced implemeting a DescriptionObject interface. 

    Query is a new building block of Items, it handles (store, execute) a versioned query associated with an Activity. 
    A Query is implemented in the language supported by the backend, it is executed by the database server and it returns an
    XML document (Outcome). It can be used to initialise an Outcome (QueryOutcomeInitiator) or can be automatically executed
    like a Script.

- The improved instantiation of the DependecyDescription

    Funtionality was added to the kernel to provide Domain specific DependencyDescription intantiation using Scripts. This way
    the doamin implementor can provide logic to translate them either to ItemProperties or to ActivityProperties. Please check 
    [wiki](https://github.com/cristal-ise/kernel/wiki/Dependency#instantiation-of-dependency-description) for futher details.
    
- Viewpoint and ItemProperty can be updated declaratively

    Activities can contain properties with xpath expression to select data from the Outcome to update a specific Viewpoint 
    or ItemProperty.
