---
description: Headers help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
title: Header - Basic
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Header - Basic

Headers help people understand what the content of the page is about while providing a consistent look, feel, and functionality across government sites.

### Required

## Last Updated:

## Visual
Header Visual:
![Header](https://github.com/bcgov/design-system/blob/master/components/header/images/header.png?raw=true)

## Requirements
* This header must appear on all public-facing online B.C. Government content and services. Any feedback should be directed to the feedback forum.
* Customized features such as login buttons or search bars must use the provided components and appear on the right side of the header.

## Don't Use This when:
* Site or online service is not associated with the Government of British Columbia

## Design Protocol:
The text in the header should include the site title or service name. If the website is a service, a good name should:

* Use the words users (regular people) use
* Be based on analytics and user research
*	Describe a task not a technology
*	Not need to change when policy or technology changes
*	Include verbs not nouns
*	Not include government department or agency names
*	Not be brand-driven or focused on marketing

Good examples include:
*	Register to Vote
*	Get help with court fees
*	Renew your passport
*	Find an apprenticeship

*Adapted from the UK Government’s [Service Naming Guide](https://www.gov.uk/service-manual/design/naming-your-service)

## Behaviour

1. Clicking on B.C. government logo links the user back to gov.bc.ca
2. Site title reduces through three increments as the browser window gets smaller
3. After third increment the site title disappears completely
4. B.C. government logo does not change size or disappear as the browser window gets smaller

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ARIA and ALT labels are included
* Language tag has been set to english

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
* [UxPin and others](https://sketch.cloud/s/Q0bkG)

## Code

For fonts and a standard browser reset include the following links in the `<header>` of your page.

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=PT Sans" rel="stylesheet">
```

### HTML

```html
<!DOCTYPE html>
<html>
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
### Assets
1.	Logo
2.	Font download or reference link
