---
description: Navigation bars provide a list of links to important content on a website or application. Typically they are placed in the header.
title: Navigation Bar – Basic
status: Draft
---

![Status](../assets/badge/component-draft-blue.svg)

# Navigation Bar – Basic
Navigation bars provide a list of links to important areas on a website or application. Typically, they are placed by the header. The B.C. government navigation bar provides a consistent look, feel, and functionality across government sites.

## Required

## Last Updated: 2 days ago

## Visual

![Navbar](./images/navbar.gif)

## How to Use This:
* The Navigation Bar is the primary means of navigation around a website or application. Typically, it accommodates the top level of the information architecture.
* Use the basic navigation bar for sites with six (6) or fewer navigation links or pages; sites with more links or with a hierarchy of pages should consider using a more advanced navigation structure.
* List items that are relevant and most frequently used by the users of the website or service.
* Tip: Present items in order of the users priority – higher demand links should be placed further to the left while lower demand links should be placed further to the right.

## Don't Use This for:
* Websites or services that have a large number of items in the navigation menu. Horizontal navigation menus are designed for limited selections, consider using a side drop navigation.

## Rationale
The basic navigation menu is the current version and works closely with the Basic Header. It meets all government standards, branding, and accessibility requirements.

## Behaviour
1.	Items appear underlined on hover
2.	Items remain underlined and bolded when user is on the associated page
3.	The ‘hamburger icon’ should not appear on its own unless it has suitable Alternative text to ensure that It is recognizable by screen readers.”
4.	The menu should be full size on large screens and regular browsers. Smaller browers, including landscape tablets should use the collapsed version of the menu. The browser window is minimized to mobile view the navigation bar should appear as a hamburger dropdown menu.

## Accessibility
This navigation bar has been built according to WCAG 2.0 AA standards and has been successfully tested for the following:
1.	Perceivable
* Alternative text is provided for non-text content (WCAG 1.1.1)
* Content can be presented in different ways without losing information or structure (WCAG 1.3)
* Colour is not used as the only visual means of conveying information (WCAG 1.4.1)
* Visual presentation of text and images has a contrast ratio of at least 4.5:1 (WCAG 1.4.3)
* Text can be resized without assistive technology up to 200% without loss of content or functionality (WCAG 1.4.4)

2.	Operable
* All functionality of the content is operable through a keyboard interface (WCAG 2.1.1)
* A mechanism is available to bypass blocks of content that are repeated on multiple web pages (WCAG 2.4.1)
* Headings and Labels describe topic or purpose (WCAG 2.4.6)
* Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible (WCAG  2.4.7)

3.	Understandable
* The default human language of each web page can be programmatically determined (WCAG 3.1.1)
* Navigational mechanisms that are repeated on multiple web pages occur in the same relative order each time they are repeated (WCAG 3.2.3)

4.	Robust
* For all user interface components, the name and role can be programmatically determined (WCAG 4.1.2)

## Design with This Component
Download and use the B.C. government Design System library to help build prototypes and wireframes for your website or application.

The library is constantly updated and currently available in the following tools:

* [Sketch](https://sketch.cloud/s/Q0bkG)

This library is updated on a regular basis; by subscribing to the design library, you’ll be informed of updates to components and new additions.

## Code
### HTML

This component builds on the `header` component; See `sample.html` for a working example.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> 
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT Sans">
    <link rel="stylesheet" href="style.css">
    <title>Sample Navigation</title>
</head>

<!--
  All in-line CSS is specific to this sample; it can and should be ignored.
 -->

<body style="background: #F8F8F8; margin-top: 130px;">
  <header>
    <div class="banner">
        <a href="https://gov.bc.ca" alt="British Columbia">
          <img src="../assets/images/logo-banner.png" alt="logo" />
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
  <nav class="navigation-main" id='navbar'>
    <div class="container">
      <ul>
        <li><a href="sample.html" class="active">Home</a></li>
        <li><a href=".">Some Thing</a></li>
        <li><a href=".">Another Thing</a></li>
        <li><a href=".">Somewhere</a></li>
        <li><a href=".">Elsewhere</a></li>
        <li><a href=".">Hello</a></li>
      </ul>
    </div>
  </nav>

</body>
</html>
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

