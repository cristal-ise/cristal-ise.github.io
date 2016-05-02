---
layout: blog-detail
author: Andrew Branson
date: 29-04-2016
tag1: CRISTAL
tag2: Release
---

The final versions of the CRISTAL-iSE kernel and its plugins in the scope of the CRISTAL-iSE project have been released. The key features of this release are:

* Description collections: different description types are now linked to each other using collections, instead of the original reference by name in activity properties (ScriptName, SchemaType etc). This means that the name of the description object is no longer important. It can change, and no longer needs to be unique in the domain tree. Also, the /desc/ domain contexts are no longer required, though the module resource import system still relies on it. At the instance level, description objects are now referenced by UUID.
* DataHelpers can be referenced and resolved in Activity properties, meaning that state machine behaviour and other activity related actions can easily use property, outcome and viewpoint data in their logic.
* State machine activities can reinitialize their Activity, which resets sub-workflows of Composite Activities. This is used by the new 'loop' transition, which will repeat a Composite Activity as it completes if the 'RepeatWhen' activity property results in 'true'
* New TransactionalClusterStorage extended interface adds begin, commit and abort methods to allow backends to be given a group of every object in a particular kernel transaction, so that it may optimize its writing.
* Many bugfixes and improvements

As of this release, the Kernel and GUI jars, along with the LDAP and XMLDB plugins, are published by Travis to Maven central, so the old build server at UWE should no longer be used. 