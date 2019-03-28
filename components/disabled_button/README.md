---
description: Disabled buttons are greyed out to indicate to users that they cannot undertake the action associated with it.
title: Disabled Button
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: March 28, 2019

# Disabled buttons

A button that can’t be clicked and doesn’t react to hover. A disabled button is greyed out to indicate to users that they cannot undertake the action associated with it. This is usually for page logic reasons.

## Visual examples

<component-preview path="components/disabled_button/sample.html" height="100px" width="800px"> </component-preview>

## Design Guidance

* Disabled buttons block users from accomplishing their task without telling them what is wrong. Rather than disabling a button, keep it enabled and show an error message why they can’t proceed. 
* Before using a disabled button, make sure your research proves it makes the user interface easier to understand.

## Accessibility

### Screen Readers

` ”Aria-disabled=true” `

“Aria-disabled” tells screen readers that the button is visible but disabled

### Behaviour
1. Add the CSS “not-allowed” cursor property to indicate the action is disabled

`cursor:not-allowed;`

This supports WCAG 2.0 1.4.1 Use of Color: Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

## Code

### HTML

```html
    <button class="BC-Gov-PrimaryButton-disabled" type="button" aria-disabled="true" name="button" disabled>Submit</button>
    <button class="BC-Gov-SecondaryButton-disabled" type="button" aria-disabled="true" name="button" disabled>Cancel</button>
```

### CSS

```css
.BC-Gov-PrimaryButton-disabled {
    background-color: #003366;
    opacity: 0.3;
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
    cursor: not-allowed;
}

.BC-Gov-SecondaryButton-disabled {
    background-color: white;
    opacity: 0.3;
    border: 2px solid #003366;
    border-radius: 4px;
    color: #003366;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 18px;
    font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
    font-weight: 700;
    letter-spacing: 1px;
    cursor: not-allowed;
}

```
