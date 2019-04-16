---
description: Alert banners notify users of important information or changes on a page.
title: Alert Banners
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: April 15, 2019

# Alert Banners
Alert banners notify users of important information or changes on a page. Typically, they appear at the top of a page.

## Example
<component-preview path="components/alert_banners/sample.html" height="688px" width="800px"> </component-preview>

## Use This For
Telling users important and typically time sensitive information. This includes:

* Success messages
* Error messages
* Warnings
* Important pieces of information

## Don't Use This For
*	In-line error validation on form inputs
* Popular content on your website.
* Highlighting content, quotes, examples, snippets of information. Use a [callout component](https://developer.gov.bc.ca/Design-System/Callout) instead

## Design Guidance
*	If a user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. 
* Write messages in a polite and concise manner while avoiding the use of jargon and technical language.
* Do not write lots of text. Users generally do not read documentation and only skim. Too much text will cause users to ignore the content.
* Allow users the ability to dismiss alerts when appropiate.
* Do not include alerts that are not related to the users current goal.

## Rationale
Alert banners use a combination of colour, icon and text to convey the purpose and meaning of the alert message. The text below the alert title provides guidance for the user with additional information or supporting actions.

## Accessibility
In addition to [fundamental accessibility](https://developer.gov.bc.ca/Design-System/Accessibility) requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Screenreaders
As read using ChromeVox

> *"Success. Everything has been submitted. You should expect a response within three business days."*

> *"Error. There are errors in your submission. Please go back and fix them."*

> *"Information. This webpage has been updated to include the latest poluch changes that took effect on September 28, 2018"*

> *"Warning. Effective December 31, 2019 this website will be shutting down permanently."*


### Colour Contrast
* [Contrast ratio](https://webaim.org/resources/contrastchecker/) exceeds 7:1 for text and links on all alert background colours.

### ARIA Labels
* ```role="alertdialog"``` labels have been included to ensure screenreaders are conveying the contents of the alert banners effectively.

## Code
### HTML
```html
<div class="bc-gov-alertbanner-success" role="alertdialog" aria-labelledby="success" aria-describedby="success-desc">
    <div class="bc-gov-alertbanner-contents">  
      <i class="fas fa-check-circle"></i>
      <div class="bc-gov-alertbanner-success-contents-text">
        <h3 id="success">Success</h3>
        <p id="success-desc">Everything has been submitted. You should expect a response within three business days.</p>
      </div>
    </div>
    </div>

    <div class="bc-gov-alertbanner-error" role="alertdialog" aria-labelledby="error" aria-describedby="error-desc">
        <div class="bc-gov-alertbanner-contents">  
            <i class="fas fa-exclamation-circle"></i>
          <div>
            <h3 id="error">Error</h3>
            <p id="error-desc">Your submission is incomplete. Please go back and complete the following:
              <ul>
              <li>Date of birth</li>
              <li>Last name</li>
              <li>Primary Address</li>
              </ul>
            </p>
          </div>
        </div>
    </div>

    <div class="bc-gov-alertbanner-important" role="alertdialog" aria-labelledby="important" aria-describedby="important-desc">
        <div class="bc-gov-alertbanner-contents">  
            <i class="fas fa-info-circle"></i>
          <div>
            <h3 id="important">Important</h3>
            <p id="important-desc">This webpage has been updated to include the latest policy changes that took effect on September 28, 2018</p>
          </div>
        </div>
    </div>

    <div class="bc-gov-alertbanner-warning" role="alertdialog" aria-labelledby="warning" aria-describedby="warning-desc">
        <div class="bc-gov-alertbanner-contents">  
            <i class="fas fa-exclamation-triangle"></i>
          <div>
            <h3 id="warning">Warning</h3>
            <p id="warning-desc">Effective December 31, 2019 this website will be shutting down permanently.</p>
          </div>
        </div>
    </div>

```

### CSS
```css

body {
  font-family: ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #494949;
}

p {
  margin: 0;
}

h3 {
  font-size: 25.92px;
  margin: 0;
}

.bc-gov-alertbanner-success {
  width: 800px;
  background-color: #EAF3EC;
  border-left: 10px solid #2E8540;
  margin-bottom: 36px;
}

.bc-gov-alertbanner-error {
  width: 800px;
  background-color: #FBEAEA;
  border-left: 10px solid #D8292F;
  margin-bottom: 36px;
}

.bc-gov-alertbanner-important {
  width: 800px;
  background-color: #EEF4FA;
  border-left: 10px solid #5091CD;
  margin-bottom: 36px;
}

.bc-gov-alertbanner-warning {
  width: 800px;
  background-color: #FEF8ED;
  border-left: 10px solid #F3BD48;
  margin-bottom: 36px;
}

.bc-gov-alertbanner-contents {
  display: flex;
  flex-direction: row;
  padding-top: 25px;
  padding-bottom: 30px;
  padding-right: 30px;
  color: #494949;
}

.fa-check-circle {
  font-size: 39px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  color: #494949;
}

.fa-exclamation-circle {
  font-size: 39px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  color: #494949;
}

.fa-info-circle {
  font-size: 39px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  color: #494949;
}

.fa-exclamation-triangle {
  font-size: 39px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  color: #494949;
}

ul {
  margin: 0px;
}

a {
  color: #1a5a96;
}

a:hover {
  text-decoration: none;
  color: blue;
}

:focus {
  outline: 4px solid #3B99FC;
  outline-offset: 1px;
}

```
