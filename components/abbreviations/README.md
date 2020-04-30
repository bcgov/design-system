---
description: Abbreviations and acronyms are shortened versions of a word or phrase.
title: Abbreviations and Acronyms
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)

> Last Updated: April 30, 2020

# Abbreviations and Acronyms
An abbreviation or acronym is a shortened form of a word, phrase, or name. They are often used to reduce redundancy within a body of text.

## Example
<component-preview path="components/abbreviations/sample.html" height="100px" width="800px"> </component-preview>

## Use This For:
* Providing the full name of an abbreviation or acronym

## Design Guidance
* Give the full name and put the abbreviation or acronym in parentheses the first time you use them. For example, Provincial sales tax (PST)
* For more information on using abbreviations and acronyms read the guide on [Writing for the Web] (https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/writing-for-the-web/web-style-guide/abbreviations)

## Rationale
* Screenreaders and assistive technologies cannot identify how to properly read abbreviations without being warned with proper tagging.

Discuss this design on the [Abbreviation Github Issue](https://github.com/bcgov/design-system/issues/191)

## Accessibility
This component has been built according to [WCAG 2.0 AAA](https://www.w3.org/TR/WCAG20/), the highest web accessibility standard. It successfuly meets criteria 3.1.4 which states the need for a mechanism to identify the expanded form or meaning of abbreviations for digital services. This component successfully includes the following accessibility features:

### Screen readers
(coming soon)

## Code

### HTML

```html
    <p>On September 1, 2018, the Affordable Child Care Benefit (ACCB) replaced the Child Care Subsidy. Parents who need financial help with childcare should apply for the new <abbr title="Affordable Child Care Benefit">ACCB</abbr></p>
```

### CSS
```css

p {
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #313132;
}

```
