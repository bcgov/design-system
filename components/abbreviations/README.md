---
description: Abbreviations are shortened versions of a word or phrase.
title: Abbreviations
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)

> Last Updated: May 30, 2019

# Abbreviations
Abbreviations are shortened forms of a word, phrase, or name where the abbreviation has not become part of the language. They are often used to reduce the redundancy within a body of text.

## Example

<component-preview path="components/abbreviations/sample.html" height="100px" width="800px"> </component-preview>

## Use This For:
* Formal titles or names that occur frequently in your writing

## Design Guidance
* When you want to use abbreviations make sure the word, phrase, or name you are shortening is written out in full the first time it is mentioned.

## Rationale
* Abbreviations can result in new words and phrases that do not exist in the language of communication. Screenreaders and assistive technologies cannot identify how to properly read abbreviations without being warned with proper tagging.

Discuss this design on the [Abbreviation Github Issue](https://github.com/bcgov/design-system/issues/191)

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screen readers
(coming soon)

## Code

### HTML

```html
    <p>Sugar is commonly sold in 5 <abbr title="pound">lb.</abbr> bags.</p>
    <p>Parents who need financial help with childcare should apply for the new <abbr title="Affordable Child Care Benefit">ACCB</abbr> program.</p>
    <p>The <abbr title="Privacy Impact Assessment">PIA</abbr> process ensures all government programs and initiatives are compliant with <abbr title="Freedom of Information and Protection of Privacy Act">FOIPPA</abbr>.</p>
    <p>Tasini <abbr title="and others">et al.</abbr></p>
```

### CSS
```css

p {
  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #494949;
}

```
