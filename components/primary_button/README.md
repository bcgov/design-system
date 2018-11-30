---
description: Primary buttons allow users to carry out an important action.
title: Primary Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Primary Button
Primary buttons allow users to carry out an important action on your service, such as Download or Submit.

## Required

## Last Updated: 2 days ago

## Visual
  This is where the visual goes

## How to Use This:
Use primary buttons for the most important actions you want users to take on your site. 

Tips:
*	Only use one primary button per view or page
*	Use for actions that go to the next step (for example, “Submit”)
*	Button labels should be as short as possible with trigger words that clearly explain what will happen when the button is clicked (eg. Download, sign up).


## Don't Use This for:
*	Leading users between pages; use links instead.
*	Less important actions may be visually styled as links.

## Rationale
The rounded edges on the button help differentiate it from other layout items on a page. The underline on hover ensures colour is not the only visual means of conveying information about the button being clickable.

## Behaviour
1.	Button label should appear underlined on hover

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
    font-family: PT Sans;
    cursor: pointer;
}

.primarybutton:hover {
  text-decoration: underline;
  opacity: 0.9;
}
```
