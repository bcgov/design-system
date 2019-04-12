---
description: Alert banners notify users of important information or changes on a page.
title: Alert Banners
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: April 3, 2019

# Alert Banners

Alert banners notify users of important information or changes on a page. Typically, they appear after at the top of a page.

## Example

<component-preview path="components/alert_banners/sample.html" height="100px" width="800px"> </component-preview>

## Use This For
**Validation**
* Alerting users they just did something successful or if it needs to be corrected

**Notification**
* To keep users informed on important and typically time sensitive information. Users may or may not have to respond. This includes errors, warnings, or general updates.

## Don't Use This For
*	In line error validation for form inputs
* Popular links on your website. These should be readily available on your homepage.

## Design Guidance
*	If a user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. 
* Write messages in a polite and concise manner while avoiding the use of jargon and technical language.
* Do not write lots of text. Users generally do not read documentation and only skim. Overdoing it will cause users to ignore the content.
* Allow users the ability to dismiss alerts when appropiate.
* Do not include alerts that are not related to the users current goal.

## Rationale

## Behaviour
1. 

## Accessibility
In addition to [fundamental accessibility]() requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Screenreaders
As read using ChromeVox

> *""*

### Colour Contrast
* [Contrast ratio](https://webaim.org/resources/contrastchecker/) exceed 7:1 for text on button when in static and hover states.

### ARIA Labels
* ```role="alertdialog"``` labels have been included to ensure screenreaders are conveying the contents of the alert banners effectively.

## Code
### HTML
```html

```

### CSS
```css

```
