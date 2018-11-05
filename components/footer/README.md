---
description: Footer help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
title: Footer - Basic
status: Draft
---
> Draft

# Footer
Footers help people find what they need after scrolling to the bottom of a web page. They provide supplementary information such as copyright, contact information, links to other pages within a website, and email and social media links.

## Required

## Visual Example

![Footer](https://github.com/bcgov/design-system/blob/footer-f/components/footer/images/footer.png?raw=true)

## How to Use This:
Must appear on all public-facing B.C. Government online content and services

## Don't Use This for:
Any online content or digital services that are not a part of the B.C. government.
Unsure? Contact the Design System team to ask a question. Ask HERE.

Consider using a footer with collapsible functionality (Footer – Extended) for sites with additional navigation requirements.

## Rationale
This footer is the current version. It meets all government standards, branding, and accessibility requirements. By using this header for your website or app, you’ll help ensure that citizens have a consistent experience when using B.C. government online services.

## Behaviour
* Ensure all links lead to correct pages
* No changes to text when browser window size changes

Footer Links:
*	“Site title” returns to home page of external site
*	“About” explains external site purpose. Provide background and context of who owns, manages, influences the site – aim at being transparent
*	“Disclaimer” use core government [disclaimer statement](https://www2.gov.bc.ca/gov/content/home/disclaimer). Any addendums must be vetted by ministry or central legal advisors before being released)
*	“Privacy” use core government [privacy statement](https://www2.gov.bc.ca/gov/content/home/privacy). Any addendums must be vetted by ministry or central legal advisors before being released.
*	“Accessibility” use core government [Accessibility statement](https://www2.gov.bc.ca/gov/content/home/accessibility). Any addendums must be vetted by ministry or central legal advisors before being released.
*	“Copyright” use core government [copyright statement](https://www2.gov.bc.ca/gov/content/home/copyright). Any addendums must be vetted by ministry or central legal advisors before being released. 
*	“Contact Us” provides contact details for service area or program.

## Accessibility
This footer has been built according to WCAG 2.0 AA standards and has been successfully tested for the following:

1. Perceivable
*	Alternative text is provided for non-text content (WCAG 1.1.1)
*	Colour is not used as the only visual means of conveying information (WCAG 1.4.1)
*	Visual presentation of text and images has a contrast ration of at least 4.5:1 (WCAG 1.4.3)
*	Text can be resized without assistive technology up to 200% without loss of content or functionality (WCAG 1.4.4)
*	Images of text are only used for pure decoration (WCAG 1.4.9)

2. Operable
*	All functionality of the content is operable through a keyboard interface (WCAG 2.1.1)
*	A mechanism is available to bypass blocks of content that are repeated on multiple web pages (WCAG 2.4.1)
*	Headings and Labels describe topic or purpose (WCAG 2.4.6)
*	Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible (WCAG  2.4.7)

3. Understandable
*	The default human language of each web page can be programmatically determined (WCAG 3.1.1)
*	Navigational mechanisms that are repeated on multiple web pages occur in the same relative order each time they are repeated (WCAG 3.2.3)

4. Robust
*	For all user interface components, the name and role can be programmatically determined (WCAG 4.1.2)

Colour Impairment Grayscale Keyboard Accessibility Screen Readers Tab Navigation

## Design with This Component
Are you wire-framing or prototyping a site or app? You can download and use the B.C. government Design System library in one of the following design tools:

*	[Sketch](https://sketch.cloud/s/Q0bkG)

Use these visual components to help you create, prototype, and test your designs and help make the hand-off to developers much easier and faster.

This library is updated on a regular basis; by subscribing to the design library, you’ll be informed of updates to components and new additions.

## Code

For fonts and a standard browser reset include the following links in the `<header>` of your page.

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=PT Sans" rel="stylesheet">
```

### HTML

```html
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
```
    
### CSS

```css
footer {
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  flex-shrink: 0;
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
```

_Last Updated: 2018-10-23_

