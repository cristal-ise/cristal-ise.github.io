---
layout: blog-detail
author: Zsolt Kovacs
date: 14-04-2020
image: images/Logo and EU.png
tag1: CRISTAL-iSE
tag2: Release
tag3: 5.2.0
---

The new version (5.2.0) of the CRISTAL-iSE has been released implementing RastAPI to store binary attahment of outcome

This version was sponsored by [Titus GT](https://www.titusgt.com)

## New features:

### restapi
- [#325](https://github.com/cristal-ise/cristal-ise/issues/325): Implement requestBinaryTransition() restapi endpoint to store Outcome with binary attachment


## Breaking Changes:

For this feature the Event and the OutcomeAttachent tables were extended with one field, namely HAS_ATTACHMENT and FILE_NAME respectively. The feature can be disabled in order to avoid database migration be setting these system properties to false:

    JOOQ.Event.enableHasAttachment=false
    JOOQ.OutcomeAttachment.enableFileName=false