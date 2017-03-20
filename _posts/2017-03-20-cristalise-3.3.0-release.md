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
- [JOOQDB](https://github.com/cristal-ise/jooqdb)

    Implementation of CRISTAL-iSE ClusterStorage and Lookup interfaces on top of RDBMS providing a drop-in replacement 
    for ldap and xmldb modules. It is based on http://jooq.org, an excellent DSL wrapper for SQL. The recommended backend 
    is Postgres, unit tests are based on H2, but the current implemetation can be used in any implementation Jooq is 
    compatible with, including MySQL (check this [link](https://www.jooq.org/doc/3.9/manual/reference/supported-rdbms/)).

- [Trigger](https://github.com/cristal-ise/trigger)

    This module provides Description-Driven Trigger funcionalities, and it is based on 
    [Quartz Scheduler](http://www.quartz-scheduler.org/).

- [XPath Outcome Initiator](https://github.com/cristal-ise/xpath-outcome-initiator)

    This module provides  EmptyOutcomeInitiators to create XML documents from XML Schema, and XPathOutcomeInitiator
    to update the newly created Outcome using XPath expression provided in the ActivityProperties.

## New Features in Kernel

For the complete list of changes please check the [release letter](https://github.com/cristal-ise/kernel/releases/tag/v3.3.0).

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

    Activities may contain properties with xpath expression to select data from the Outcome to update a specific Viewpoint 
    or ItemProperty.
