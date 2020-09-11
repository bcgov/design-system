---
description: Alert banners notify users of important information or changes on a page.
title: Alert Banners
author: dlevine
---

> Last Updated: April 29, 2020

# Alert Banners
Alert banners notify users of important information or changes on a page. Typically, they appear at the top of a page.

## Example
<component-preview path="components/alert_banners/sample.html" height="400px" width="800px"> </component-preview>

## Use This For
Telling users important and typically time sensitive information. This includes:

- Success messages
- Error messages
- Warnings
- Important pieces of information
- System statuses

## Don't Use This For
- In-line error validation on form inputs
- Popular content on your website
- Highlighting content, quotes, examples, snippets of information. Use a [callout component](https://developer.gov.bc.ca/Design-System/Callout) instead

## Design Guidance
- You can only use one alert on a page. If you want to use two alerts, contact your GCPE communications shop for guidance.
- Do not include alerts that are not related to the persons current goal or specific page content
- If a user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. For example, provide them a link to something in the alert.
- Write messages in a concise manner while avoiding the use of jargon and technical language.
- Do not write lots of text. Too much text will cause users to ignore the content.
- Allow users the ability to dismiss alerts when appropriate.

### Error Alert
Use error alerts if a service is cancelled, there's a risk to health or safety to people in completing an activity, or with form validation errors that will block the user from completing their task.

### Warning Alert
Use warning alerts when there is something urgent or to help someone avoid a problem for things like delays, closures at certain locations, and other types of service disruptions.

### Information Alert
Use information alerts for important time-sensitive information like changes in wait times for a service, messages that there is no service disruption, changes to a service that aren't a disruption, or timely updates.

### Success Alert
Use success alerts to notify someone that a task is fully completed or a disruption is resolved.

## Rationale
Alert banners use a combination of colour, icon and text to convey the purpose and meaning of the alert message.

### Further Reading
- [Alert fatigue during COVID-19](https://blog.canada.ca/2020/07/15/alert-fatigue.html)

## Accessibility
In addition to [fundamental accessibility](https://developer.gov.bc.ca/Design-System/Accessibility) requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.

### Screenreaders
As read using ChromeVox

> *"Error. The email address cannot be empty."*

> *"Warning. The eligibility requirements for this service have changed. Review the changes before continuing."*

> *"Information. The deadline for submission has been extended to March 1, 2020."*

> *"Success. Your application has been successfully submitted."*

### Colour Contrast
- [Contrast ratio](https://webaim.org/resources/contrastchecker/) exceeds 5:1 for text and links on all alert background colours.

### ARIA Labels
- `role="alert"` labels have been included to ensure screenreaders are conveying the contents of the alert banners effectively.

## Code
### HTML
```html
<div class="bc-gov-alertbanner bc-gov-alertbanner-error" role="alert" aria-labelledby="error" aria-describedby="error-desc">
  <p id="error-desc">The email address cannot be empty.</p>
</div>

<div class="bc-gov-alertbanner bc-gov-alertbanner-warning" role="alert" aria-labelledby="warning" aria-describedby="warning-desc">
  <p id="warning-desc">The <a>eligibility requirements</a> for this service have changed. Review the changes before continuing.</p>
</div>

<div class="bc-gov-alertbanner bc-gov-alertbanner-info" role="alert" aria-labelledby="info" aria-describedby="info-desc">
  <p id="info-desc">The deadline for submission has been extended to March 1, 2020.</p>
</div>

<div class="bc-gov-alertbanner bc-gov-alertbanner-success" role="alert" aria-labelledby="success" aria-describedby="success-desc">
  <p id="success-desc">Your application has been successfully submitted.</p>
</div>
```

### CSS
```css
body {
  font-family: 'BC Sans', 'Noto Sans', Arial, 'sans serif';
  color: #313132;
  font-size: 16px;
  line-height: 1.5em;
}

a {
  text-decoration: underline;
}

.bc-gov-alertbanner {
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 15px;
}

.bc-gov-alertbanner:before {
  float: left;
  font-family: 'Font Awesome 5 Free';
  font-size: larger;
  font-style: normal;
  line-height: 1;
  margin-right: 10px;
  position: relative;
  top: 3px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.bc-gov-alertbanner p {
  font-size: 18px;
  margin: 0;
  padding-left: 35px;
}

.bc-gov-alertbanner-error {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a12622;
}

.bc-gov-alertbanner-error:before {
  content: "\f06a";
}

.bc-gov-alertbanner-error a {
  color: #843534;
}

.bc-gov-alertbanner-warning {
  background-color: #f9f1c6;
  border-color: #faebcc;
  color: #6c4a00;
}

.bc-gov-alertbanner-warning:before {
  content: "\f071";
}

.bc-gov-alertbanner-warning a {
  color: #66512c;
}

.bc-gov-alertbanner-info {
  background-color: #d9eaf7;
}

.bc-gov-alertbanner-info:before {
  content: "\f05a";
}

.bc-gov-alertbanner-info a {
  color: #1a5a96;
}

.bc-gov-alertbanner-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #2d4821;
}

.bc-gov-alertbanner-success:before {
  content: "\f058";
}

.bc-gov-alertbanner-success a {
  color: #2b542c;
}
```
