---
description: Primary buttons allow users to carry out an important action.
title: Primary Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: April 30, 2020

# Primary Button
Primary buttons allow users to carry out an important action on your service, such as Download or Submit.

## Example

<component-preview path="components/primary_button/sample.html" height="100px" width="800px"> </component-preview>
<component-preview path="components/primary_button/sample-dark.html" height="100px" width="800px"> </component-preview>

## Use This For
* The most important actions you want users to take on your site.

## Don't Use This For
*	Supporting actions on your page such as 'Cancel', 'Delete', or supporting information

## Design Guidance
*	Only use one primary button per page
*	Use for actions that go to the next step (for example, “Submit”)
*	Button labels should be as short as possible with action words that clearly explain what will happen when the button is clicked (eg. Download, sign up)
* Do not use images for buttons

## Rationale
The rounded edges on the button help differentiate it from other layout items on a page. The underline on hover ensures colour is not the only visual means of conveying information about the button being clickable. The colour helps the button standout amongst other elements on a page and convey its importance to the user.

## Behaviour
1. Button label should appear underlined on hover
2. Button background colour should revert to #003366 when in the active state

## Accessibility
In addition to [fundamental accessibility]() requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Screenreaders
As read using ChromeVox

> *"Submit, button."*

### Colour Contrast
* [Contrast ratio](https://webaim.org/resources/contrastchecker/) exceed 7:1 for text on button when in static and hover states.

### Conveying Information
* Button label underlines on hover to support those who may not be able to detect colour opacity changes alone

### Target Areas
* Button size is at least 44px in height and width

## Code
### HTML
```html
<button class="BC-Gov-PrimaryButton" type="button" name="button">Submit</button>
```

### CSS
```css
.BC-Gov-PrimaryButton {
    background-color: #003366;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 18px;
    font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
}

.BC-Gov-PrimaryButton:hover {
  text-decoration: underline;
  opacity: 0.80;
}

:focus {
  outline: 4px solid #3B99FC;
  outline-offset: 1px;
}

.BC-Gov-PrimaryButton:active {
  opacity: 1;
}
```
### HTML - Dark Background
```html
<button class="BC-Gov-PrimaryButton-Dark" type="button" name="button">Submit</button>
```

### CSS - Dark Background
```css
.BC-Gov-PrimaryButton-Dark {
    background-color: #fff;
    border: none;
    border-radius: 4px;
    color: #313132;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 18px;
    font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
}

.BC-Gov-PrimaryButton-Dark:hover {
  text-decoration: underline;
  background-color: #f2f2f2
}

:focus {
  outline: 4px solid #3B99FC;
  outline-offset: 1px;
}

.BC-Gov-PrimaryButton-Dark:active {
  background-color: #fff;
}

.background-colour {
  background-color: #003366;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```
