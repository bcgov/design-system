---
description: Font families and styling to be used on all government digital websites and services.
title: Typography
status: draft
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)

# Typography

Good typography maintains a clear hierarchy of information and structures the content to help users understand and navigate your service.

## BC Sans

The standard font for B.C. Government digital services is BC Sans. BC Sans is an open source font family, and is a modified version of Noto Sans, developed by Google. BC Sans includes modifications to support Indigenous languages in British Columbia.

Font weights and styles included:

* BC Sans Regular - 400
* BC Sans Italic - 400
* BC Sans Bold - 700
* BC Sans Bold Italic - 700

Typography standards for print are on the [B.C. Visual Identity Program](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/design-guidelines#palette-typography) page.

### Download Files

Download and include the font files in your project
* [Download files for web development](https://www2.gov.bc.ca/assets/gov/british-columbians-our-governments/services-policies-for-government/policies-procedures-standards/web-content-development-guides/corporate-identity-assets/visid-files/bc-sans-font-woff.zip) (.woff)
* [Download files for your local computer](https://www2.gov.bc.ca/assets/gov/british-columbians-our-governments/services-policies-for-government/policies-procedures-standards/web-content-development-guides/corporate-identity-assets/visid-files/bc-sans-font-otf.zip) (.otf)
* [Download all font files](https://www2.gov.bc.ca/assets/gov/british-columbians-our-governments/services-policies-for-government/policies-procedures-standards/web-content-development-guides/corporate-identity-assets/visid-files/bc-sans-font-all.zip) (.eot, .ttf, .otf, .woff, .woff2)

### Font Integration

Code package management through npm (coming soon)


```css
@font-face {
  src: url('BCSans.woff') format('woff'); /* Modern Browsers */
  font-family: 'BCSans';
}

body {
     font-family: ‘BCSans’, Verdana, Arial, sans-serif;
}
```


## Paragraphs

### Example

<component-preview path="styles/typography/paragraph-sample.html" height="300px" width="800px"> </component-preview>

The default paragraph font size is 16px (1em) with a line height of 1.6.

```css
p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 36px;
  color: #494949;
}
```

## Headings

Heading are sized based on a Minor Third (1.200) scale to achieve a harmonious increase of sizes.

<component-preview path="styles/typography/header-sample.html" height="300px" width="800px"> </component-preview>
