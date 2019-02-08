---
description: Textarea allow users to input multiple lines of text
title: Textarea
status: Draft
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Textarea

A textarea allows users to input multiple lines of text

### Required

## Last Updated: 

## Visual Example

<component-preview path="components/textarea/sample.html"> </component-preview>
## Use This When
*	Users need to enter more than a single line of text

## Don't Use This For

*	When users need to enter only one line of text, use a [text input](../text_input/README.md) instead

## Design Guidance
* Open ended questions can often be difficult for users to answer. Consider breaking up the question into multiple single line [text inputs](../text_input/README.md).
* Allow copy and paste functionality
* Textarea must have labels, placeholder text is insufficient as it disappears once the user clicks on the field.
* Make sure the textarea size is proportional to the amount of text you expect the user input

## Rationale

Thick borders with generous spacing result in greater visual prominence. These features also support mobile use by providing larger target areas.

## Behaviour

1. Do not auto advance to next input field. This causes difficulties for users relying on keyboard controls.
2. When in focus input field should outline with blue.
3. Fields should have error controls such as not accepting more values than required, rejecting false values, and rejecting outlier values.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ALT labels are included
* Language tag has been set to english

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text
* Thick boaders with high contrast result in greater visual prominance

### Keyboard Navigation
* Supports tab navigation for use without a mouse

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
    <title>Textarea</title>
  </head>
  <body>

    <form>
      <div class="text_label">
        <label>Can you provide more detail?</label>
      </div>
      <textarea class="text_input" name="name" rows="8" cols="80"></textarea>
    </form>

  </body>
</html>
```  
### CSS
```css
form {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
}

.text_input {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
  border: 2px solid #38598a;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 3px;
  padding: 5px;
  resize: none;
}

.text_input:focus {
    outline: 4px solid #38598a;
    outline-offset: 1px;
}

.text_label {
  display: flex;
}
```
