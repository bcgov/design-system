---
description: Radio buttons allow users to select one item from a given list.
title: Radio Button
status: Draft
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Radio Button
Radio buttons are a type of controlled input that allow users to select exactly one option from a list.

## Required

## Last Updated: 2 days ago

## Visual
  This is where the visual goes

## How to Use This:
When users have to select exactly one option from a given list

Tips:
*	Order radio options alphabetical by default
*	Users cannot go back to having no option selected once they have selected one. Therefore, if applicable you should include a ‘None of the above’ or I don’t know option’
*	Make sure selections are adequately spaced for touch screens.
*	Do not assume users will know how many options they can select. If needed, add a hint such as “Select one option” 
*	In some cases, it can be helpful to order the selections from most to least common.
*	Options should be listed vertically due to being easier to read and associate the correct radio button and label.

## Don't Use This for:
*	If a user can select more than one option from a list, use a checkbox instead.
*	If a user can select zero options from a list

## Rationale
Our radio buttons are larger than most browser defaults to allow for greater visibility and larger hit/target areas for touchscreen devices. Research has shown that users resort to only clicking the checkbox and not the associated text, therefore a larger target area is necessary. Simply enlarging browser defaults proved to be problematic on many web browsers and the custom design should be used.
Based on research done by Gov.UK [https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/]

## Behaviour
1.	Users should be able to tap or click on either the radio button or label to select the option.
2.	Do not preselect options, this signals a biased result.

## Accessibility
This radio button has been built according to WCAG 2.0 AA standards and has been successfully tested for the following:
1.	Perceivable
*	Alternative text is provided for non-text content (WCAG 1.1.1)
*	Content can be presented in different ways without losing information or structure (WCAG 1.3)
*	Colour is not used as the only visual means of conveying information (WCAG 1.4.1)
*	Visual presentation of text and images has a contrast ratio of at least 4.5:1 (WCAG 1.4.3)
*	Text can be resized without assistive technology up to 200% without loss of content or functionality (WCAG 1.4.4)

2.	Operable
*	All functionality of the content is operable through a keyboard interface (WCAG 2.1.1)
*	A mechanism is available to bypass blocks of content that are repeated on multiple web pages (WCAG 2.4.1)
*	Headings and Labels describe topic or purpose (WCAG 2.4.6)
*	Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible (WCAG  2.4.7)

3.	Understandable
*	The default human language of each web page can be programmatically determined (WCAG 3.1.1)
*	Navigational mechanisms that are repeated on multiple web pages occur in the same relative order each time they are repeated (WCAG 3.2.3)

4.	Robust
*	For all user interface components, the name and role can be programmatically determined (WCAG 4.1.2)

## Design with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

* [Sketch](https://sketch.cloud/s/Q0bkG)

This library is updated on a regular basis; by subscribing to the design library, you’ll be informed of updates to components and new additions.

## Code
### HTML
```HTML
  <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
    <title>Radio Button</title>
  </head>
  <body>

    <label class="radio">One
      <input type="radio" name="foo">
      <span class="checkmark"></span>
    </label>

    <label class="radio">Two
      <input type="radio" name="foo">
      <span class="checkmark"></span>
    </label>

    <label class="radio">Three
      <input type="radio" name="foo">
      <span class="checkmark"></span>
    </label>

    <label class="radio">Four
      <input type="radio" name="foo">
      <span class="checkmark"></span>
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
  font-family: PT Sans;
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
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 2px solid #003366;
}

/* When the radio button is checked, add a blue background */
.radio input:checked ~ .checkmark {
  background-color: #ffffff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio .checkmark:after {
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #003366;
}
```
