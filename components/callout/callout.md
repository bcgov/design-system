---
description: Callouts are an excerpt of text that has been pulled out and used as a visual clue to draw the eye to the text.
title: Callout
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: March 26, 2019

# Callout
Callouts are an excerpt of text that has been pulled out and used as a visual clue to draw the eye to the text. They are used to help direct a user's attention to important pieces of information.

## Visual example

<component-preview path="components/callout/sample.html" height="100px" width="800px"> </component-preview>

## Use This For

Differentiating a block of text from the content that surrounds it, for example:
* Important snippets of information
* Quotes
* Examples
* Additional information about the page

## Don’t Use this For
* Warning notifications
* Page alerts

## Design Guidance
* Use callouts very sparingly - it’s less effective if it’s overused.

## CMS Lite Users
Learn how to insert a callout component on your page

## Accessibility

### Colour Contrast
* Text on the gray background meets contrast requirements
* The thick left border conveys information using more than just colour

### ARIA
* Include the following ARIA tagging so that screenreaders read this content with emphasis:
role="alert" aria-live="assertive"
* This code calls attention to the content, and is for information that is important enough to be announced to the user as soon as possible, but it is not necessary to immediately interrupt the user. 

## Code
### HTML

```html
<div class=”bcgov-callout”>
<p>Text here</p>
</div>
```

### CSS

```css
.bcgov-callout {
Padding: 25px;
Border-left: 10px solid #38598a;
margin: 16px 0;
background color: #f2f2f2;
}

.bcgov-callout h1, h2, h3, h4 {
Margin 0
}
```