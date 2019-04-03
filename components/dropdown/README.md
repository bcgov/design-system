---
description: Dropdowns allow users to select one option from a list.
title: Dropdown
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: April 3, 2019

# Dropdown
Dropdowns allow users to select one option from a list. Use of a dropdown helps reduce input errors but it should be used as a last resort due to the many usability issues it poses.

## Example

<component-preview path="components/dropdown/sample.html" height="100px" width="800px"> </component-preview>

## Use This For
* When users have to select one option from a list of seven (7) to fifteen (15) different options

## Don't Use This For
*	Short lists of options. Consider using a [Radio Button](https://developer.gov.bc.ca/Design-System/Radio-Button) instead 
* When users have to select multiple options from a list. Use [Checkbox]es(https://developer.gov.bc.ca/Design-System/Checkbox) instead.
* When users have to select one option from a very long list such as their country of birth. Consider using a [Text Input](https://developer.gov.bc.ca/Design-System/Text-Input) that suggests input options instead.

## Design Guidance
*	Use sparingly. This should be a last resort before [Radio Button](https://developer.gov.bc.ca/Design-System/Radio-Button), [Checkbox](https://developer.gov.bc.ca/Design-System/Checkbox), or [Text Input](https://developer.gov.bc.ca/Design-System/Text-Input) components do not suffice.
* Make sure the dropdown has a label. Do not include the label in the default option.

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

### Target Areas
* Dropdown size is at least 44px in height and width

## Code
### HTML
```html
<select class="bc-gov-dropdown">
  <option value="Select">Select</option>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
</select>
```

### CSS
```css
.bc-gov-dropdown {
  font-family: "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  color: #494949;
  position: relative;
  background: none;
  border: 2px solid #606060;
  width: 200px;
}

:focus {
  outline: 4px solid #3B99FC;
  outline-offset: 1px;
}
```
