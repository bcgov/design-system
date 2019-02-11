---
description: Date input allows users to enter an already known date
title: Date Input
status: Draft
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Date Input

Date input fields allow users to enter an already known date

## Visual Example

<component-preview path="components/date_input/sample.html"> </component-preview>

## Use This When
*	Users need to enter a date

## Rationale
Using three separate text fields is the fastest way for users to enter dates. Dropdown options cause accessibility difficulties.

## Behaviour

1. Do not auto advance to next input field. This causes difficulties for users relying on keyboard controls.
2. When in focus input field should outline with blue.
3. Fields should have error controls to prevent common user slips such as entering impossible values for dates.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ALT labels are included
* Language tag has been set to english

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text

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
    <title>Sample Text Input</title>
  </head>
  <body>

    <form>
      <div class="date_field">
        <div class="text_label">
          <label>Day</label>
        </div>
        <input class="date_input_day" type="text" name="firstname"><br>
      </div>

      <div class="date_field">
        <div class="text_label">
          <label>Month</label>
        </div>
        <input class="date_input_month" type="text" name="lastname">
      </div>

      <div class="date_field">
        <div class="text_label">
          <label>Year</label>
        </div>
        <input class="date_input_year" type="text" name="lastname">
      </div>

    </form>

  </body>
</html>```
  
### CSS
```css
form {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
  display: flex;
}

.date_input_day, .date_input_month {
  height: 25px;
  border: 2px solid #38598a;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 3px;
  padding: 5px;
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
  width: 32px;
}

.date_input_year {
  height: 25px;
  border: 2px solid #38598a;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 3px;
  padding: 5px;
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
  width: 64px;
}

.date_input_day[type="text"]:focus {
    outline: 4px solid #38598a;
    outline-offset: 1px;
}

.date_input_month[type="text"]:focus {
    outline: 4px solid #38598a;
    outline-offset: 1px;
}

.date_input_year[type="text"]:focus {
    outline: 4px solid #38598a;
    outline-offset: 1px;
}

.text_label {
  display: flex;
}

.date_field {
  margin-right: 20px;
}```
