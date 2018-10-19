---
description: Headers help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
---
# Header

Headers help users understand what the content of the page is about and provide a quick, organized way to reach the main sections of a website. They appear at the top of a page, above the main body text.

### Required
### Last Updated: 2018-10-18

## Visual
	This is where the visual goes

## Use This For

All public facing online BC Government content and services.

## Don't Use This For

Non BC Government online content or services

Consider using an extended header if you have more sections in your website or if you have complex sections that require the use of a mega menu.

## Rationale

This header is the most up-to-date version meeting all government standards, branding, and accessibility requirements.

## Behaviour

1. Clicking on BC Government logo links back to homepage
2. Site title reduces through three increments as browser window gets smaller
3. After third increment site title disappears completely
4. BC Gov logo does not change size or disappear as browser window gets smaller

## Accessibility

This header has been built and successfully tested for the following

Colour Impairment
Grayscale
Keyboard Accessibility
Screen Readers
Tab Navigation

## Code

For fonts and a standard browser reset include the following links in the `<header>` of your page.

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=PT Sans" rel="stylesheet">
```

### HTML

```html
  <header>
    <div class="banner">
        <img src="../assets/images/logo-banner.png" class="logo" alt="logo" />
        <h1>Hello British Columbia</h1>
    </div>
    <div class="other">
      <!-- While its preferred to keep this space empty with good UX in mind
      it can be utilized as needed  -->
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
}

header h1 {
  font-family: 'PT Sans';
  font-size: 1em;       /* apx 16px */
  font-weight: normal;  /* 400 */
  margin: 5px 5px 0 18px;
}

header .logo {
  height: 40px;
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
  Media queries should be customized based each site. Determine at what
  size your sight starts to look bad and put a media query at that point
  to adjust.
*/

@media screen and (min-width: 600px) {
  header h1 {
    font-size: 1.33em;  /* apx 18px */
  }
}
```
