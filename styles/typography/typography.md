---
description: Font families and styling to be used on all government digital websites and services.
title: Typography
status: draft
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)

# Typography

Good typography maintains a clear hierarchy of information and structures the content to help users understand and navigate your service.

## Noto Sans

The BC Design System uses the Noto Sans typeface. Noto is an open sourced font family, developed by Google, which aims to support a variety of languages with a harmonious look and feel.

Font weights included:
•	Noto Sans Regular 400
•	Noto Sans Italic 400
•	Noto Sans Bold 700
•	Noto Sans Bold Italic 700


 ### Using Noto Sans

Option 1

Download and include the [Noto Sans font family](https://github.com/bcgov/design-system/tree/master/styles/typography/fonts) in your local project files.


Font-stack

```html
Font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
```

Do not use the Google API to access Noto Sans because this violates B.C. data privacy legislation

## Paragraphs
iframe example
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
Iframe 

Heading are sized based on a Minor Third (1.200) scale to achieve a harmonious increase of sizes. 
<h1>Heading 1 - 2.074em (37.32px)</h1>
<h2>Heading 2 - 1.728em (31.10px)</h2>
<h3>Heading 3 - 1.44em (25.92px)</h3>
<h4>Heading 4 - 1.2em (21.60px)</h4>

## Accessibility
Text Spacing
•	Line height (line spacing) of paragraph text should be at least 1.5 times the font size
•	The space after a paragraph should be 2 times the font size
