---
description: Headers help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
title: Header - Basic
status: draft
---
> Draft

# Header - Basic

Headers help people understand what the content of the page is about and provide a quick, organized way to reach the main sections of a web page. They appear at the top of a page, above the main body text. The B.C. government header provides a consistent look, feel, and functionality across government sites.

### Required

## Last Updated: 2 days ago

## Visual
Header Visual:
![Header](https://github.com/bcgov/design-system/blob/master/components/header/images/header.png?raw=true)

## How to Use This

*	Must appear on all public-facing online B.C. Government content and services.
*	Designed for websites or apps that do not require navigation built into the header.

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

## Don't Use This For

*	Non-B.C. government online content or services.
*	Consider using an extended header if you have more sections in your website or if you have complex sections that require the use of a larger menu.

## Rationale

The basic header is the current version. It meets all government standards, branding, and accessibility requirements.

## Behaviour

* Clicking on B.C. government logo links the user back to the homepage
* Site title reduces through three increments as the browser window gets smaller
* After third increment the site title disappears completely
* B.C. government logo does not change size or disappear as the browser window gets smaller

## Accessibility

This header has been built according to WCAG 2.0 AA standards and has been successfully tested for the following:

1. Perceivable
  * Alternative text is provided for non-text content (WCAG 1.1.1)
  * Colour is not used as the only visual means of conveying information (WCAG 1.4.1)
  * Visual presentation of text and images has a contrast ration of at least 4.5:1 (WCAG 1.4.3)
  * Text can be resized without assistive technology up to 200% without loss of content or functionality (WCAG 1.4.4)
  * Images of text are only used for pure decoration (WCAG 1.4.9)

2. Operable
  * All functionality of the content is operable through a keyboard interface (WCAG 2.1.1)
  * A mechanism is available to bypass blocks of content that are repeated on multiple web pages (WCAG 2.4.1)
  * Headings and Labels describe topic or purpose (WCAG 2.4.6)
  * Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible (WCAG  2.4.7)

3. Understandable
  * The default human language of each web page can be programmatically determined (WCAG 3.1.1)
  * Navigational mechanisms that are repeated on multiple web pages occur in the same relative order each time they are repeated (WCAG 3.2.3)

4. Robust
  * For all user interface components, the name and role can be programmatically determined (WCAG 4.1.2)

Colour Impairment Grayscale Keyboard Accessibility Screen Readers Tab Navigation

## Design with This Component

Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application. Prototype make the hand-off from designers to developers easier and faster.

The library is available in these design tools:

* [Sketch](https://sketch.cloud/s/Q0bkG)

This library is updated on a regular basis; by subscribing to the design library, you’ll be informed of updates to components and new additions.

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
	    <link href="https://fonts.googleapis.com/css?family=PT Sans" rel="stylesheet">
	    <link rel="stylesheet" href="style.css">
	    <title>Sample Header</title>
	</head>
	<body>
	  <header>
	    <div class="banner">
	        <a href="https://gov.bc.ca" alt="British Columbia">
	          <img src="../assets/images/logo-banner.png" alt="logo" />
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
	}
	
	header h1 {
	  font-family: 'PT Sans';
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

_Last Updated: 2018-10-23_
