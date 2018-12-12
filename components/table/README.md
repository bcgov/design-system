---
description: Tables present tabular data in a grid which allows users to visually scan and make visual associations between the data.
title: Table
status: Draft
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Table

Tables present tabular data in a grid which allows users to visually scan and understand associations between the values.

### Required

## Last Updated:

## Visual
Table Visual: ![Table](https://github.com/bcgov/design-system/blob/master/components/table/images/table.png?raw=true)

## How to Use This

*	Use a table when users need to compare information in rows and columns

## Don't Use This For

* Laying out the visual content of a webpage.

## Design Protocol
* Use the <caption> tag to describe the contents of the table similar to a heading. Captions help users find, navigate, and understand tables.
* Minimal visual styling helps surface the contents of the table more easily.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper caption and scope labels are included
* Language tag has been set to English

### Colour Contrast
* Contrast ratios are at least 7:1 for normal text and 4.5:1 for large text

### Keyboard Navigation
* Supports tab navigation for use without a mouse

### Learn More
* Contacts
* Online Tools
* Online Resources
* Gov Resources

## Prototype with This Component

Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

*	[Sketch](https://sketch.cloud/s/Q0bkG)
* 	[UxPin and others]

## Code

### HTML
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
    <title>Sample Table</title>
  </head>
  <body>
    <table>
      <caption>Roll Call</caption>
      <tr>
    <th scope="col">Firstname</th>
    <th scope="col">Lastname</th>
    <th scope="col">Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
    </table>
  </body>
</html>
```
  
### CSS
```css
body {
  font-size: 16px;
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
}

th {
  text-align: left;
  background-color: #d0d0d1;
}

caption {
  padding: 15px;
}
```
