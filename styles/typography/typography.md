---
description: Font families and styling to be used on all government digital websites and services.
title: Typography
status: draft
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)

# Typography

Good typography maintains a clear hierarchy of information and structures the content to help users understand and navigate your service.

## BC Sans

The B.C. Digital Design System uses the BC Sans typeface. BC Sans is an open sourced font family, and is a modified version of Noto Sans, developed by Google. BC Sans includes specific modifications to support Indigenous languages in British Columbia.

Font weights included:

* BC Sans Regular 400
* BC Sans Italic 400
* BC Sans Bold 700
* BC Sans Bold Italic 700

**Option 1**

Download and include the [BC Sans font family](https://github.com/bcgov/design-system/tree/master/styles/typography/fonts) in your local project files.


Font-stack

```css
body {
     font-family: ‘BC Sans’, Verdana, Arial, sans-serif;
}
```


## Paragraphs

### Example

<component-preview path="styles/typography/paragraph-sample.html" height="300px" width="800px"> </component-preview>

The default paragraph font size is 18px (1em) with a line height of 1.6.

```css
p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 36px;
  color: #494949;
}
```

## Headings

Heading are sized based on a Minor Third (1.200) scale to achieve a harmonious increase of sizes.

<component-preview path="styles/typography/header-sample.html" height="300px" width="800px"> </component-preview>

## Accessibility

### Text Spacing
* Line height (line spacing) of paragraph text should be at least 1.5 times the font size
* The space after a paragraph should be 2 times the font size
