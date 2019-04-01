---
description: Tables present tabular data in a grid which allows users to visually scan and make visual associations between the data.
title: Table
status: Draft
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Table

Tables present tabular data in a grid which allows users to visually scan and understand associations between the values.

## Visual Example

<component-preview path="components/table/sample.html" height="250px" width="800px"> </component-preview>

## How to Use This

*	Use a table when users need to compare information in rows and columns

## Don't Use This For

* Laying out the visual content of a webpage.

## Design Protocol
* Use the <caption> tag to describe the contents of the table similar to a heading. Captions help users find, navigate, and understand tables.
* Minimal visual styling helps surface the contents of the table more easily.

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper caption and scope labels are included for proper reading of the table's content

### Text Size
* Table header and cell content are at least 18px

### Colour Contrast
* Borders and text maintain contrast ratios of at least 7:1

## Code

### HTML
```html
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
```
  
### CSS
```css
body {
  font-size: 16px;
  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
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
