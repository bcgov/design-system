---
description: Navigation bars provide a list of links to important content on a website or application. Typically they are placed in the header.
title: Navigation Bar – Basic
status: Draft
author: orinevares
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
> Last Updated: February 11, 2019

# Navigation Bar – Basic
Navigation bars provide a list of links to different pages on a website or application.

## Visual Example

<component-preview path="components/navbar/sample.html" height="150px" width="800px"> </component-preview>

![Navbar](./images/navbar.gif)

## Use This For
* Sites with six (6) or fewer navigation links or pages

## Design Protocol
* Present items in order of the users priority – higher demand links should be placed further to the left while lower demand links should be placed further to the right.

## Rationale
This header and navigation bar matches the mandatory branding requirements of the BC Government. Consistent branding helps users identify who owns the service they are using. The horizontal logo is used instead of the vertical logo to use space efficiently and create a symmetrical flow from the logo to the heading.

## Behaviour
1.	Link text appears underlined on hover
2.	Link text remains underlined and bolded when user is on the associated page

### Mobile Design
1.	The ‘hamburger icon’ should not appear on its own unless it has suitable Alternative text to ensure that It is recognizable by screen readers.”
2. Smaller browers, including landscape tablets should use the collapsed version of the menu. When the browser window is minimized to mobile view the navigation bar should appear as a hamburger dropdown menu.

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
As read using ChromeVox

> "Go to the Government of British Columbia website, link."

> "Hello British Columbia, link."

> "Navigation list with six items."

> "Link 1. Link list item."

> "Link 2. Link list item."

> "Link 3. Link list item."

> "Link 4. Link list item."

> "Link 5. Link list item."

> "Link 6. Link list item."

### Converying Information
* Hamburger icon not placed alone without a text label
* Navbar links underline on hover to indicate they are clickable

## Code
### HTML

This component builds on the `header` component; See `sample.html` for a working example.

```html
<!--
  All in-line CSS is specific to this sample; it can and should be ignored.
 -->
<body style="background: #F8F8F8; margin-top: 130px;">
  <header>
    <div class="banner">
        <a href="https://gov.bc.ca" alt="Go to the Government of British Columbia website">
          <img src="../assets/images/logo-banner.svg" alt="Go to the Government of British Columbia website" />
        </a>
        <h1>Hello British Columbia</h1>
    </div>
    <div class="other">
      <a class="nav-btn">
        <i class="fas fa-bars" id="menu"></i>
      </a>
    <!-- 
      This place is for anything that needs to be right aligned
      beside the logo.
    -->
    </div>
  </header>
  <nav class="navigation-main" id="navbar">
    <div class="container">
      <ul>
        <li><a href="sample.html" class="active">Link 1</a></li>
        <li><a href=".">Link 2</a></li>
        <li><a href=".">Link 3</a></li>
        <li><a href=".">Link 4</a></li>
        <li><a href=".">Link 5</a></li>
        <li><a href=".">Link 6</a></li>
      </ul>
    </div>
  </nav>

  <script>
      <!-- This is a sample implementation and may vary depending on the front end framework/techstack being used. -->
    function setupSampleMenuControl() {
      const useCapture = false;
      const show = elem => elem.style.display = 'block';
      const hide = elem => elem.style.display = 'none';
      const toggle = (elem) => {
        if (window.getComputedStyle(elem).display === 'block') {
          hide(elem);
          return;
        }
        show(elem);
      };
      // Listen for click events
      const menuButton = document.getElementById('menu');
      menuButton.addEventListener('click', (event) => {
        // Filter events
        if (event.target.id !== 'menu') return;
        // Prevent default link behavior
        event.preventDefault();
        // Check for a valid target
        const nav = document.getElementById('navbar')
        if (!nav) return;
        // Toggle
        toggle(nav);
      }, useCapture);
    }
    setupSampleMenuControl();
  </script>

</body>
```

### CSS

This component builds on the `header` component; See `style.css` for a working example.

```css
header {
    background-color: #036;
    border-bottom: 2px solid #fcba19;
    padding: 0 30px 0 30px;
    color: #fff;
    display: flex;
    height: 65px;
    top: 0;
    position: fixed;
    width: 100%;
    -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
    -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
    box-shadow: 0 6px 8px -4px #b3b1b3;
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
    align-items: center;
    flex-grow: 1;
    /* border-style: dotted;
    border-width: 1px;
    border-color: lightgrey; */
  }

  header a [class^="fas fa-"] {
    color: white;
    font-size: 1.4em;
    font-style: bold;
    line-height: 1;
    /* border-style: solid;
    border-width: 1px;
    border-color: #fcba19; */
    padding: 5px;
    -webkit-font-smoothing: antialiased;
  }
  
  header .nav-btn {
    display: block;
    width: auto;
    margin: 0 0 0 auto;
    cursor: pointer;
  }

  .navigation-main {
    display: none;
    position: fixed;
    top: 65px;
    color: #fcba19;
    background-color: #38598a;
    width: 100%;
    -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
    -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
    box-shadow: 0 6px 8px -4px #b3b1b3;
  }

  .navigation-main .container {
    padding: 10px 0 10px 0;
  }
  
  .navigation-main .container ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    color: #fff;
    list-style: none;
    margin-left: -25px;
    /* border-style: dotted;
    border-width: 1px;
    border-color: red; */
  }

  .navigation-main .container ul li {
    margin: 5px 0;
  }

  .navigation-main .container ul li a {
    display: flex;
    font-size: 0.813em;
    font-weight: normal;  /* 400 */
    color: #fff;
    padding: 0 15px 0 15px;
    text-decoration: none;
    /* border-style: dotted;
    border-width: 1px;
    border-color: green; */
  }

  .navigation-main .container ul li a:hover {
    text-decoration: underline;
  }

  .navigation-main .container ul .active {
    text-decoration: underline;
    font-weight: bold;
  }

  :focus {
    outline: 4px solid #3B99FC;
    outline-offset: 1px;
  }

  /*
    These are sample media queries only. Media queries are quite subjective
    but, in general, should be made for the three different classes of screen
    size: phone, tablet, full. 
  */
  
  @media screen and (min-width: 768px) {
    .navigation-main {
      display: block;
    }

    .navigation-main .container ul {
      flex-direction: row;
    }

    .navigation-main .container ul li {
      margin: 0;
    }
    
    .navigation-main .container ul li a {
      border-right: 1px solid #9b9b9b;
    }

    header .nav-btn {
      display: none;
      width: auto;
      margin: 0 0 0 auto;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 899px) {
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
  Assets go here
