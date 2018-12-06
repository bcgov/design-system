---
description: Text inputs allow users to enter any combination of letters, numbers, or symbols of their choosing in a structured format.
title: Text Input
status: Draft
author: orinevares
---

> Draft

# Text Input

Text inputs allow users to enter a single line of any combination of letters, numbers, or symbols of their choosing in a structured format.

## Required

## Last Updated:

## Visual
  Text Input Visual:
![Text Input](https://github.com/bcgov/design-system/blob/master/components/text_input/images/text_input.png?raw=true)

## Requirements
* This component must be used according the the standard outined in this document. Any feedback should be directed to the feedback forum.

## Use This When
* Users have to input an answer that cannot be easily predicted
* Paste in a response
* Input text that is no longer than a single line

## Don't Use This when
* A user needs to input multiple lines of text. Use a textarea component instead
* Users can only choose from a selected list of answers

## Design Protocol
* The length of the text input should provide a hint to the user on how much text to write.
* Text inputs must have visible labels aligned above the text input they refer to. They should be short, direct, and written in sentence case.
* Allow copy and paste functionality
* Only show error validation messages or stylings after a user has interacted with a particular field.
* Avoid using placeholder text. This causes additional problems for those with cognitive or visual disabilities.

## Behaviour
1. When focused the text box has a blue outline.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ARIA and ALT labels are included
* Language tag has been set to english

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

* [Sketch](https://sketch.cloud/s/Q0bkG)
* [UxPin and others](https://sketch.cloud/s/Q0bkG)

## Code
### HTML
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
    <title>Text Input</title>
  </head>
  <body>

    <form>
      <div class="text_label">
        <label>First Name:</label>
      </div>
      <input class="text_input" type="text" name="firstname"><br>
      <div class="text_label">
        <label> Last Name:</label>
      </div>
      <input class="text_input" type="text" name="lastname">
    </form>

  </body>
</html>
```
### CSS
```
form {
  font-family: 'PT Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
}

.text_input {
  font-family: 'PT Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
}

.text_input {
  height: 25px;
  border: 2px solid #38598a;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 3px;
  padding: 5px;
}

.text_input[type="text"]:focus {
    outline: 4px solid #38598a;
    outline-offset: 1px;
}

.text_label {
  display: flex;
}
```
### Assets
	Assets go here
