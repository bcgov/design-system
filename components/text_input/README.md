---
description: Text inputs allow users to enter any combination of letters, numbers, or symbols of their choosing in a structured format.
title: Text Input
status: Draft
author: orinevares
---

> Draft

# Text Input

Text inputs allow users to enter a single line of text.

## Recommended

## Last Updated:

## Visual Example
![Text Input](https://github.com/bcgov/design-system/blob/master/components/text_input/images/text_input.png?raw=true)

## Use This When
* Input text is no longer than a single line
* Users have to input an answer that cannot be easily predicted

## Don't Use This when
* A user needs to input multiple lines of text. Use a [textarea](../textarea/textarea.md) component instead
* Users can only choose from a selected list of responses

## Design Guidance
* The length of the text input should correspond to how much text the user is expected to write
* Text inputs must have visible labels aligned above the text input they refer to. They should be short, direct, and written in sentence case.
* Allow copy and paste functionality.
* Do not use placeholder text as a replacement to lables as it dissapears once the user clicks on the field
* Do not break up text input for a single entry i.e three text inputs for a phone number

## Behaviour
1. When focused the text box has a blue outline.

## Accessibility
In addition to [fundamental accessibility]() requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Colour Contrast
* Thick borders help better define the text input area

### Learn More About Accessibility in the Design System
* Accessibility Contacts in Government
* Online Accessibility Testing Tools
* Accessibility Documentation

## Prototype with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

* [Sketch](https://sketch.cloud/s/Q0bkG)
* [UxPin and others]

## Code
### HTML
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
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
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';;
  font-size: 16px;
}

.text_input {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';;
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
