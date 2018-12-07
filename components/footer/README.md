---
description: Footer help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
title: Footer - Basic
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Component-Draft-orange.svg)

# Footer
Footers help people find what they need after scrolling to the bottom of a web page. They provide supplementary information such as copyright, contact information, links to other pages within a website, and email and social media links.

## Required

## Last Updated:

## Visual Example

![Footer](./images/footer.png)

## Requirements:
* Must appear on all public-facing B.C. Government online content and services
* Home, Disclaimer, Privacy, Accessibility, Copyright and Contact Us must be present. Other links can be added as required.

Footer Links:
*	“Home” returns to home page of external site
*	“Disclaimer” use core government [disclaimer statement](https://www2.gov.bc.ca/gov/content/home/disclaimer). Any addendums must be vetted by ministry or central legal advisors before being released)
*	“Privacy” use core government [privacy statement](https://www2.gov.bc.ca/gov/content/home/privacy). Any addendums must be vetted by ministry or central legal advisors before being released.
*	“Accessibility” use core government [Accessibility statement](https://www2.gov.bc.ca/gov/content/home/accessibility). Any addendums must be vetted by ministry or central legal advisors before being released.
*	“Copyright” use core government [copyright statement](https://www2.gov.bc.ca/gov/content/home/copyright). Any addendums must be vetted by ministry or central legal advisors before being released. 
*	“Contact Us” provides contact details for service area or program.

## Behaviour
1. Ensure all links lead to correct pages
2. No changes to text size or weighting when browser window size changes

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
* Proper ARIA and ALT labels are included
* Language tag has been set to english
* Links are labelled properly

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
<html style="height: 100%;">
<head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Sample Footer</title>
</head>

<body style="display: flex; flex-direction: column; height: 100vh;">
  <div style="flex: 1 0 auto; padding: 20px;">
    <h1>Sample Footer</h1>
  </div>
  
  <footer class="footer">
    <div class="container">
    <ul>
      <li><a href=".">Home</a></li>
      <li><a href=".">Disclaimer</a></li>
      <li><a href=".">Privacy</a></li>
      <li><a href=".">Accessibility</a></li>
      <li><a href=".">Copyright</a></li>
      <li><a href=".">Contact Us</a></li>
    </ul>
    </div>
  </footer>
</body>

</html>
```
    
### CSS

```css
footer {
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  font-family: 'Noto Sans','Calibri', 'Arial', 'Sans Serif'; 
}

footer .container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 46px;
}

footer ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  color: #fff;
  list-style: none;
  align-items: center;
  height: 100%;
}

footer ul li a {
  font-size: 0.813em;
  font-weight: normal;  /* 400 */
  color: #fff;
  border-right: 1px solid #4b5e7e;
  padding-left: 5px;
  padding-right: 5px;
}

a:hover {
  color: #fff;
  text-decoration: underline;
}
```
