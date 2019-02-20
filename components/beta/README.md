---
description: Beta status indicator
title: Beta Status
status: Draft
author: dlevine
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)

# Beta Status
The beta status indicator tells users that the product is still being worked on.

## Visual Example

<component-preview path="components/beta/sample.html" height="100px" width="800px"> </component-preview>

![Beta status indicator](./images/beta-status-bc.png)

## Use This For:
* Indicating your service is still being worked on and things may change.

## Don't Use This when:
* Your service is live and is no longer being actively worked on.

## Rationale
* The beta text has no border so users don't confuse the status for a button
* The text is visually distinct from the service name

Discuss this design on the [Beta Status Github Issue](https://github.com/bcgov/design-system/issues/78)

## Behaviour
1. Additional research is being done for users to interact or understand the meaning of Beta.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screen readers
(coming soon)

### Colour Contrast
* Gold text exceeds a 7:1 [contrast ratio](https://webaim.org/articles/contrast/) on the header blue background

## Code

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Sample Header</title>
</head>

<!--
  All in-line CSS is specific to this sample; it can and should be ignored.
 -->

<body>
  <header>
    <div class="banner">
        <a href="https://gov.bc.ca" alt="British Columbia">
          <img src="../assets/images/logo-banner.svg" alt="Go to the Government of British Columbia website" />
        </a>
        <h1>Hello British Columbia</h1>
        <div aria-label="This application is currently in Beta phase" class=Beta-PhaseBanner>
          Beta
        </div>
    </div>
    <div class="other">
    <!-- 
      This place is for anything that needs to be right aligned
      beside the logo.  
    -->
      &nbsp;
    </div>
    </div>
  </header>
</body>
</html>
```

### CSS
```css
header {
  background-color: #036;
  border-bottom: 2px solid #fcba19;
  padding: 0 65px 0 65px;
  color: #fff;
  display: flex;
  height: 65px;
  top: 0px;
  position: fixed;
  width: 100%;
}

header h1 {
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif';
  font-weight: normal;  /* 400 */
  margin: 5px 5px 0 18px;
  visibility: hidden;
}

header .banner {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 0 0;
  /* border-style: dotted;
  border-width: 1px;
  border-color: lightgrey; */
}

header .other {
  display: flex;
  flex-grow: 1;
  /* border-style: dotted;
  border-width: 1px;
  border-color: lightgrey; */
}

/*
  These are sample media queries only. Media queries are quite subjective
  but, in general, should be made for the three different classes of screen
  size: phone, tablet, full. 
*/

@media screen and (min-width: 600px) and (max-width: 899px) {
  header h1 {
    font-size: calc(7px + 2.2vw);
    visibility: visible;
  }
}

@media screen and (min-width: 900px) {
  header h1 {
    font-size: 2.0em;
    visibility: visible;
  }
}
```
