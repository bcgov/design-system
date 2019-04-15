---
description: Headers help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
title: Header - Basic
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Header - Basic

Headers help people understand what the product or service is about while providing a consistent look, feel, and functionality across government sites.

## Example

<component-preview path="components/header/sample.html" height="100px" width="800px"> </component-preview>

### Download
* [BC Gov Logo](https://github.com/bcgov/design-system/tree/master/components/assets/images)

## Requirements
* This header must appear on all public-facing online B.C. Government content and services

## Don't Use This when:
* Your product or service is not owned by the Government of British Columbia

## Design Guidance:
* Align content on page with left side of logo

The text in the header should include the site title or service name. If the website is a service, a good name should:
* Use the words users (regular people) use
* Be based on analytics and user research
* Describe a task not a technology
* Not need to change when policy or technology changes
* Include verbs not nouns
* Not include government department or agency names
* Not be brand-driven or focused on marketing

Good examples include:
*	Apply for MSP
*	Get help with court fees
*	Renew your license
*	Find a career

*Adapted from the UK Government’s [Service Naming Guide](https://www.gov.uk/service-manual/design/naming-your-service)

## Rationale
This header matches the mandatory branding requirements of the BC Government. Consistent branding helps users identify who owns the service they are using. The horizontal logo is used instead of a the vertical version to use space efficiently and create a symmetrical flow from the logo to the heading.

## Behaviour

1. Clicking on B.C. government logo links the user back to the homepage of your service 

### Mobile Design
1. Logo and title shrink until mobile size
2. When in mobile view the header title drops below the vertical logo

## Accessibility
This header has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/). This component includes the following accessibility features:

### Screenreaders

* ALT text for BC Government logo reads "Go to the homepage of [current website]"

As read using ChromeVox

> *"Go to the government of british columbia website link."*

> *"Hello British Columbia heading one."*

## Code

### HTML

```html
<!--
  All in-line CSS is specific to this sample; it can and should be ignored.
 -->
  <header>
    <div class="banner">
        <a href="https://gov.bc.ca" alt="British Columbia">
          <img src="../assets/images/BCID_H_rgb_rev.svg" alt="Go to the Government of British Columbia website" />
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
  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
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
