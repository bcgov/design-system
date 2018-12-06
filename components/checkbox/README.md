---
description: Checkboxes allow users to select one or more items from a list.
title: Checkbox
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Checkbox
Checkboxes are a form of control inputs that allow users to select one or more items from a list.

## Required

## Last Updated:

## Visual
Checkbox Visual:
![Checkbox](https://github.com/bcgov/design-system/blob/master/components/checkbox/images/checkbox.png?raw=true)

## Requirements
* This component must be used according the the standard outined in this document. Any feedback should be directed to the feedback forum.

## Use This When Users:
* Need to select multiple options from a given list
* Toggle a single option on or off

## Design Protocol:
* List options vertically; horizontal listings can make it difficult to tell which label pertains to which checkbox.
* Avoid using negative language in labels. Use “I want to receive email updates” instead of “I don’t want to receive email updates.”
* Make sure selections are adequately spaced for touch screens.
* Do not assume users will know how many options they can select. If needed, add a hint such as “Select all that apply” 

## Don't Use This when:
* Users can only select one option from a list, use a radio button instead.

## Rationale
Our checkboxes are larger than most browser defaults to allow for greater visibility and larger target areas for touchscreen devices. Research has shown that users resort to only clicking the checkbox and not the associated text, therefore a larger target area is necessary. Simply enlarging browser defaults proved to be problematic on many web browsers and the custom design should be used.
Based on research done by Gov.UK: https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/

## Behaviour
1. Users should be able to tap or click on either the checkbox or the label to select the option.

## Accessibility
This checkbox has been built according to WCAG 2.0 AA [https://www.w3.org/TR/WCAG20/] standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ARIA and ALT labels are included
* Language tag has been set to english
* List items and checkbox status are labelled properly

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text

### Tab Navigation
* Supports tab navigation for use without a mouse

### Learn More
* Contacts
* Online Tools
* Online Resources
* Gov Resources

## Prototype with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

*	Sketch: [https://sketch.cloud/s/Q0bkG]
* UxPin and others: [https://sketch.cloud/s/Q0bkG]

## Code
### HTML
```html
  
  <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
    <title>Checkbox</title>
  </head>
  <body>

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

  </body>
</html>
```

### CSS
```CSS

  /* Customize the label (the container) */
.checkbox {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-family: 'PT Sans';
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
  outline: 2px solid #003366;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: #003366;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

  ```
