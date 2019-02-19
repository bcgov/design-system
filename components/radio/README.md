---
description: Radio buttons allow users to select one item from a given list.
title: Radio Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Radio Button
Radio buttons are a type of input that allow users to select only one option from a list.

## Visual Example

<component-preview path="components/radio/sample.html" height="150px" width="800px"> </component-preview>

## Use This For
* When users have to select only one option from a list

## Don't Use This when
*	A user can select more than one option from a list, use a [checkbox](../checkbox.md) instead

## Design Guidance
*	Users cannot go back to having no option selected once they have selected one. If applicable, you should include a ‘None of the above’ or I don’t know option’
*	Do not assume users will know how many options they can select. If needed, add a hint such as “Select one option” 
*	In some cases, it can be helpful to order the selection items based on user needs. For example, place the most likely responses at the top
*	Options should be listed vertically due to being easier to read and associate the correct radio button and label

## Rationale
Our radio buttons are larger than most browser defaults to allow for greater visibility and larger target areas for touchscreen devices. Research has shown that users resort to only clicking the radio and not the associated text.
Based on research done by [Gov.UK](https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/)

## Behaviour
1.	Users should be able to click or tap on either the radio button or text label to select the option
2.	Do not preselect options, this results in perceived bias

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
As read on ChromeVox

Note: To navigate through radio selections tab to the first list item and then use your arrow keys to move up and down the list.

> > "One. Radio button unselected."

> > "Two. Radio button unselected."

> > "Three. Radio button unselected."

> > "Four. Radio button unselected."

If a radio button was selected

> > "[Radio Label]. Radio button selected."

### Target Areas
* Radio button size is larger than default settings to provide a larger target area

### Colour Contrast
* [Contrast ratio](https://webaim.org/articles/contrast/) exceeds 7:1 for radio button on white background

### Learn More
* Accessibility Contacts in Government
* Online Accessibility Testing Tools
* Accessibility Documentation

## Prototype with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

*	[Sketch](https://sketch.cloud/s/Q0bkG)
* [UxPin and others]

## Code
### HTML
```html
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
</html>```
 
### CSS
```css
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
}```
