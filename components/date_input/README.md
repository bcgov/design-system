---
description: Date input allows users to enter an already known date
title: Date Input
status: Draft
---

# Date Input

Date input fields allow users to enter an already known date

### Required

## Last Updated:

## Visual
Date Input Visual:
![Date Input](https://github.com/bcgov/design-system/blob/master/components/date_input/images/date_input.png?raw=true)

## Requirements
* This component must be used according the the standard outined in this document. Any feedback should be directed to the feedback forum.

## How to Use This
*	Use when users need to enter an easily memorable date

## Don't Use This For
*	Dates that cannot be easily remembered
*	When users have to schedule something in the future, a calendar dropdown may be better.

## Rationale
Using three separate text fields is the fastest way for users to enter dates. Dropdown options cause accessibility difficulties.

## Behaviour

* Do not auto advance to next input field. This causes difficulties for users relying on keyboard controls.
* When in focus input field should outline with blue.
* Fields should have error controls such as not accepting more values than required, rejecting false values, and rejecting outlier values.

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
* Contacts
* Online Tools
* Online Resources
* Gov Resources

## Prototype with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

*	[Sketch](https://sketch.cloud/s/Q0bkG)
* [UxPin and others]

## Code

### HTML
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
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
</html>
```
  
### CSS
```
form {
  font-family: 'PT Sans','Calibri', 'Arial', 'Sans Serif';
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
  font-family: 'PT Sans','Calibri', 'Arial', 'Sans Serif';
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
  font-family: 'PT Sans','Calibri', 'Arial', 'Sans Serif';
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
}
```
