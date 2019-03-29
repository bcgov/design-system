---
description: Secondary buttons allow users to carry out a supporting action
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
*	Button labels should be as short as possible with action words that clearly explain what will happen when the button is clicked (eg. Back or Cancel)
* Do not use images for buttons

## Rationale
The rounded edges on the button help differentiate it from other layout items on a page. The underline on hover ensures colour is not the only visual means of conveying information about the button being clickable. The transparent background helps the button reduce its visual prominance amongst other elements and primary buttons on a page.

## Behaviour
1. On hover, button label should appear white and underlined
2. On hover, button background colour should be #003366 with an opacity of 0.8
3. In the active state, button background colour should remain at #003366 but have an opacity change back to 1

## Accessibility
In addition to [fundamental accessibility]() requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Screenreaders
As read using ChromeVox

> *"Cancel, button."*

### Colour Contrast
* [Contrast ratio](https://webaim.org/resources/contrastchecker/) exceed 7:1 for text on button when on white or light grey backgrounds.

### Conveying Information
* Button label underlines on hover to support those who may not be able to detect colour opacity changes alone

### Target Areas
* Button size is at least 44px in height and width

## Code
### HTML
```html
<button class="BC-Gov-SecondaryButton" type="button" name="button">Cancel</button>
```

### CSS
```css
.BC-Gov-SecondaryButton {
    background: none;
    border-radius: 4px;
    border: 2px solid #003366;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 18px;
    Font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    color: #003366;
    }
.BC-Gov-SecondaryButton:hover {
    opacity: 0.80;
    text-decoration: underline;
    background-color: #003366;
    color: #FFFFFF;
    }
:focus {
    outline-offset: 1px;
    outline: 4px solid #3B99FC;
    }
.BC-Gov-SecondaryButton:active {
    opacity: 1;
    }
```
