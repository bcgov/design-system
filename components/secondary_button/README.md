---
description: Secondary buttons allow users to carry out a supporting task
title: Secondary Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: March 27, 2019

# Secondary Button
Secondary buttons allow users to carry out a supporting action on your service, such as Back or Cancel.

## Visual Example

<component-preview path="components/secondary_button/sample.html" height="100px" width="800px"> </component-preview>

## Use This For
* A supporting action you want users to take on your site.

## Don't Use This For
*	Primary actions on your page such as 'Submit', or 'Start'. Use a [Primary Button](https://developer.gov.bc.ca/Design-System/Primary-Button) instead.

## Design Guidance
*	Use for supporting actions or options you don't want users to default to
*	Button labels should be as short as possible with action words that clearly explain what will happen when the button is clicked (eg. Back, Cancel, or Don't Agree)
* Do not use images for buttons

# Start Here

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
    font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
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
