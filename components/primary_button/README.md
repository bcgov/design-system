---
description: Primary buttons allow users to carry out an important action.
title: Primary Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Primary Button
Primary buttons allow users to carry out an important action on your service, such as Download or Submit.

## Recommended

## Last Updated:

## Visual Example
![primary_button](https://github.com/bcgov/design-system/blob/master/components/primary_button/images/primary_button.png?raw=true)

## Use This For
* The most important actions you want users to take on your site.

## Don't Use This For
*	Supporting actions on your page such as 'Cancel', 'Delete', or supporting information

## Design Guidance
*	Only use one primary button per page
*	Use for actions that go to the next step (for example, “Submit”)
*	Button labels should be as short as possible with action words that clearly explain what will happen when the button is clicked (eg. Download, sign up).

## Rationale
The rounded edges on the button help differentiate it from other layout items on a page. The underline on hover ensures colour is not the only visual means of conveying information about the button being clickable. The colour helps the button standout amongst other elements on a page and convey its importance to the user.

## Behaviour
1.	Button label should appear underlined on hover

## Accessibility
This button has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ALT labels are included
* Language tag has been set to english

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text

### Keyboard Navigation
* Supports tab navigation for use without a mouse

### Underline of Hover
* To support those with visual impairments and who may not be able to detect colour opacity changes

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
```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <title>Primary Button</title>
  </head>
  <body>
    <button class="primarybutton" type="button" name="button">Submit</button>
  </body>
</html>
```

### CSS
```HTML
.primarybutton {
    background-color: #003366; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
    cursor: pointer;
}

.primarybutton:hover {
  text-decoration: underline;
  opacity: 0.9;
}
```
