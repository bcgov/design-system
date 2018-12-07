---
description: Radio buttons allow users to select one item from a given list.
title: Radio Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Radio Button
Radio buttons are a type of controlled input that allow users to select exactly one option from a list.

## Required

## Last Updated:

## Visual
  Radio Visual:
![Radio](https://github.com/bcgov/design-system/blob/master/components/radio/images/radio.png?raw=true)

## Requirements
* This component must be used according the the standard outined in this document. Any feedback should be directed to the feedback forum.

## Use This For
* When users have to select exactly one option from a given list

## Don't Use This when
*	A user can select more than one option from a list, use a checkbox instead.
*	A user can select zero options from a list

## Design Protocol
*	Order radio options alphabetical by default
*	Users cannot go back to having no option selected once they have selected one. Therefore, if applicable you should include a ‘None of the above’ or I don’t know option’
*	Make sure selections are adequately spaced for touch screens.
*	Do not assume users will know how many options they can select. If needed, add a hint such as “Select one option” 
*	In some cases, it can be helpful to order the selections from most to least common.
*	Options should be listed vertically due to being easier to read and associate the correct radio button and label.

## Rationale
Our radio buttons are larger than most browser defaults to allow for greater visibility and larger hit/target areas for touchscreen devices. Research has shown that users resort to only clicking the checkbox and not the associated text, therefore a larger target area is necessary. Simply enlarging browser defaults proved to be problematic on many web browsers and the custom design should be used.
Based on research done by [Gov.UK](https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/)

## Behaviour
1.	Users should be able to tap or click on either the radio button or label to select the option.
2.	Do not preselect options, this signals a biased result.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ALT labels are included
* Language tag has been set to english
* List items and radio status are labelled properly

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text

### Keyboard Navigation
* Supports tab navigation for use without a mouse

### Learn More
* Contacts
* Online Tools
* Online Resources
* Gov Resources

## Prototype with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

*	[Sketch](https://sketch.cloud/s/Q0bkG)
* [UxPin and others](https://sketch.cloud/s/Q0bkG)

## Code
### HTML
```HTML
  <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <title>Radio Button</title>
  </head>
  <body>

    <label class="radio">One
      <input type="radio" name="foo">
      <span class="dot"></span>
    </label>

    <label class="radio">Two
      <input type="radio" name="foo">
      <span class="dot"></span>
    </label>

    <label class="radio">Three
      <input type="radio" name="foo">
      <span class="dot"></span>
    </label>

    <label class="radio">Four
      <input type="radio" name="foo">
      <span class="dot"></span>
    </label>

  </body>
</html>
```
 
### CSS
```CSS
/* Customize the label (the container) */
.radio {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.dot {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 2px solid #003366;
}

/* When the radio button is checked, add a blue background */
.radio input:checked ~ .dot {
  background-color: #ffffff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.dot:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio input:checked ~ .dot:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio .dot:after {
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #003366;
  transform: translate(-50%, -50%);
}
```
