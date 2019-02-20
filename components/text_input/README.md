---
description: Text inputs allow users to enter any combination of letters, numbers, or symbols of their choosing in a structured format.
title: Text Input
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Text Input

Text inputs allow users to enter a single line of text.

## Visual Example

<component-preview path="components/text_input/sample.html" height="200px" width="800px"> </component-preview>

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
* Do not use placeholder text instead of labels. Screenreaders do not treat placeholder text as labels. Placeholder text dissapears which can confuse users if they forget the original prompt.
* Do not break up text input for a single entry i.e three text inputs for a phone number

## Behaviour
1. Do not automatically advance to next input field. This feature is not common and can cause difficulties for novice users and those who rely on keyboard controls. Read more about [prioritizing efficiency over expectations](https://www.nngroup.com/articles/efficiency-vs-expectations/)
2. When focused the text box has a blue outline.

## Accessibility
In addition to [fundamental accessibility]() requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Screenreaders
As read using ChromeVox

> > "First name."

> > "Edit text."

> > "Last name."

> > "Edit text."

### Colour Contrast
* Input field border width has been increased for improved visibility

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
```html
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
```css
form {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';;
  font-size: 18px;
}

.text_input {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';;
  font-size: 18px;
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
