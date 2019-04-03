---
description: Checkboxes allow users to select one or more items from a list.
title: Checkbox
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Checkbox
Checkboxes are a type of input that allow users to select one or more options from a list.

## Example

<component-preview path="components/checkbox/sample.html" height="150px" width="800px"> </component-preview>

## Use This For:
* Selecting multiple options from a given list
* Toggling a single option on or off

## Don't Use This when:
* Users can only select one option from a list, use a radio button instead.

## Design Guidance:
* List options vertically; horizontal listings can make it difficult to tell which label pertains to which checkbox.
* Avoid using negative language in labels. Use “I want to receive email updates” instead of “I don’t want to receive email updates”
* Make sure selections are adequately spaced for touch screens
* Do not assume users will know how many options they can select. If needed, add a hint such as “Select all that apply” 

## Rationale
Our checkboxes are larger than most browser defaults to allow for greater visibility and larger target areas for touchscreen devices. Research has shown that users resort to only clicking the checkbox and not the associated text.
Based on [research](https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/) done by Gov.UK.

## Behaviour
1. Users should be able to click or tap on either the checkbox or the label to select the option
2. Do not preselect options. This results in perceived bias

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
As read using ChromeVox

 > *"This is a selected checkbox, checkbox checked."*

 > *"This is an unselected checkbox, checkbox not checked."*

 > *"This is an unselected checkbox, checkbox not checked."*

 > *"This is an unselected checkbox, checkbox not checked."*

### Target Areas
* Checkbox size is larger than default settings to provide a larger target area

### Colour Contrast
* The checkbox and checkmark exceed a [contrast ratio](https://webaim.org/articles/contrast/) of 7:1

## Code
### HTML
```html
    <label class="checkbox">This is a selected checkbox
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
    </label>

    <label class="checkbox">This is an unselected checkbox
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>

    <label class="checkbox">This is an unselected checkbox
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>

    <label class="checkbox">This is an unselected checkbox
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>
```

### CSS
```css
/* Customize the label (the container) */
.checkbox {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  Font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  outline: 2px solid #606060;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: #606060;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "\2713";
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}
  ```
