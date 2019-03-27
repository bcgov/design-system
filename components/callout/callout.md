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
Learn how to [insert a callout component](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/cms-lite-manual/ui-guidelines/text-editor/callout-boxes) on your page

## Accessibility

### Colour Contrast
* Text on the gray background meets contrast requirements
* The thick left border conveys information using more than just colour

## Code
### HTML

```html
<div class=”bcgov-callout”>
<p>By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP) and get a BC Services Card.</p>
</div>
```

### CSS

```css
.bcgov-callout {
padding: 25px;
border-left: 10px solid #38598a;
margin: 16px 0;
background color: #f2f2f2;
}

.bcgov-callout h1, h2, h3, h4 {
margin: 0;
}
```
