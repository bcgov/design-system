---
description: Links lead users to a different page or further information.
title: Links
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Links

Links lead users to a different page.

## Visual Example

<component-preview path="components/link/sample.html" height="150px"> </component-preview>

## Don't Use This when:
* Users need to take an action on a page such as log-in or submit, use a [primary button](../primary_button/README.md) instead.

## Design Guidance
* If your link is at the end of a paragraph or sentence make sure the linked text does not include the full stop.
* Links should be describe where it leads to
* Do not put links in words such as "Link", "Here", or "Click Here". [Learn more about descriptive links](https://accessibility.oregonstate.edu/descriptivelinks)
* Links should not open a new tab or window. If so they need to have the relevant icon to give the user advanced warning. Example below: 

```html
<a href="knitting.html" target="_blank">Application Portal (opens in new window)</a>
```

## Behaviour

1. On hover link removes underline and turns to blue.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ALT labels are included
* Language tag has been set to english
* Proper warning if link opens a new window
* Descriptive language for writing links. [Learn more about descriptive links](https://accessibility.oregonstate.edu/descriptivelinks)

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text
* Users can identify the link without relying on colour alone

### Keyboard Navigation
* Supports tab navigation for use without a mouse

### Learn More
* Accessibility Contacts in Government
* Online Accessibility Testing Tools
* Accessibility Documentation

## Prototype with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

*	[Sketch](https://sketch.cloud/s/Q0bkG)
* [UxPin and others]

## Code

### HTML

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <title>Sample Link</title>
  </head>
  <body>

    <p>This is an example of a link to <a href="#">access your application</a>.</p>
    <p>Here is another example of a link to <a href="#">apply</a>.</p>
    <a href="#">Link</a>

  </body>
</html>
```
    
### CSS

```css
body {
  font-family: 'Noto Sans', calibri, arial, sans-serif;
  font-size: 16px;
}

a {
  color: #1a5a96;
}

a:hover {
  text-decoration: none;
  color: blue;
}
```
