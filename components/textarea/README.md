---
description: Textarea allow users to input multiple lines of text
title: Textarea
status: Draft
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Textarea

A textarea allows users to input multiple lines of text

## Visual Example

<component-preview path="components/textarea/sample.html" height="250px" width="800px"> </component-preview>

## Use This When
*	Users need to enter more than a single line of text

## Don't Use This For

*	When users need to enter only one line of text, use a [text input](../text_input/README.md) instead

## Design Guidance
* Open ended questions can often be difficult for users to answer. Consider breaking up the question into multiple single line [text inputs](../text_input/README.md).
* Allow copy and paste functionality
* Do not use placeholder text instead of labels. Screenreaders do not treat placeholder text as labels. Placeholder text dissapears which can confuse users if they forget the original prompt.
* Make sure the textarea size is proportional to the amount of text you expect the user input

## Rationale

Thick borders with generous spacing result in greater visual prominence. These features also support mobile use by providing larger target areas.

## Behaviour

1. Do not automatically advance to next input field. This feature is not common and can cause difficulties for novice users and those who rely on keyboard controls. Read more about [prioritizing efficiency over expectations](https://www.nngroup.com/articles/efficiency-vs-expectations/)
2. When in focus input field should outline with blue.
3. Fields should have error controls such as not accepting more values than required, rejecting false values, and rejecting outlier values.

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
As read using ChromeVox

> > "Can you provide more detail?"

> > "Textarea"

### Colour Contrast
* Input field border width has been increased for improved visibility

## Code

### HTML
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <title>Textarea</title>
  </head>
  <body>

    <form>
      <div class="text_label">
        <label>Can you provide more detail?</label>
      </div>
      <textarea class="text_input" name="name" rows="8" cols="80"></textarea>
    </form>

  </body>
</html>
```  
### CSS
```css
form {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
}

.text_input {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-size: 16px;
  border: 2px solid #38598a;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 3px;
  padding: 5px;
  resize: none;
}

.text_input:focus {
    outline: 4px solid #38598a;
    outline-offset: 1px;
}

.text_label {
  display: flex;
}
```
