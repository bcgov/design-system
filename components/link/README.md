---
description: Links lead users to a different page or further information.
title: Links
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: January 29, 2021

# Links

Links lead people to a different page.

## Example

<component-preview path="components/link/sample.html" height="200px" width="800px"> </component-preview>

## Don't Use This when:
* Users need to take an action on a page such as log-in or submit, use a [primary button](../primary_button/README.md) instead.

## Design Guidance
* If your link is at the end of a paragraph or sentence make sure the linked text does not include the full stop.
* Links should be describe where it leads to
* Do not put links in words such as "Link", "Here", or "Click Here". [Learn more about descriptive links](https://accessibility.oregonstate.edu/descriptivelinks)
* Telephone links should be used to allow people to click a phone number to make a call
* Links should not open a new tab or window. If so, they need to have the relevant icon to give the person advanced warning. Example below:

```html
<a href="knitting.html" target="_blank">Application Portal (opens in new window)</a>
```

## Behaviour

1. On hover link removes underline and turns to blue.

## Accessibility
This checkbox has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level. This component successfully includes the following accessibility features:

### Screenreaders
* External link icon included if link opens a new window or tab
* Descriptive language for writing links. [Learn more about descriptive links](https://accessibility.oregonstate.edu/descriptivelinks)

As read using ChromeVox

> *"access your application, internal link."*

> *"apply, internal link."*

> *"external link, link."*

> *"two five zero, five five five, zero one two three, link*

### Colour Contrast
* [Contrast ratio](https://webaim.org/articles/contrast/) exceeds 7:1 for link text

### Conveying Information
* Underline allows people to identify the link without relying on colour alone
* Underline dissapears on hover indicating link is clickable

## Telephone Links
Telephone links clicked on mobile phone browsers will make the call through the phone itself. Telephone links clicked on desktop browsers will make the call through a phone application (e.g. Skype) if available. When designing for a device that explicitly cannot make calls, telephone links should be omitted.

To create a telephone link, in the `<a>` tag's `href` attribute, use the `tel:` protocol followed by the full phone number in international dialing format (`+1-250-555-0123`). For the link text, use the ten digit phone number with hyphens. See **Code** section for an example.

Using the country code `+1` in your `href` field ensures that the phone link works when clicked worldwide. Hyphens are not required for functionality, but they improve readability when the link is displayed in the status bar on hover.

## Code

### HTML

```html
<p>This is an internal example of a link to <a href="#">access your application</a>.</p>
<p>Here is another example of an internal link to <a href="#">apply</a>.</p>
<p>This is an example of an <a href="#">External Link</a> <i class="fas fa-external-link-alt"></i></p>
<p>Here is an example of a telephone link: <a href="tel:+1-250-555-0123">250-555-0123</a></p>
```

### CSS

```css
body {
  font-family: 'BCSans', 'Noto Sans', Verdana, Arial, sans-serif;
  font-size: 18px;
}

a {
  color: #1a5a96;
}

a:hover {
  text-decoration: none;
  color: blue;
}

i.fa-external-link-alt {
  color: #1a5a96;
}
```
