***Front Matter
___

# Header
Headers help users understand what the content of the page is about and provide a quick, organized way to reach the main sections of a website. They appear at the top of a page, above the main body text.

## Required
## Last Updated: [Last Update]

## Visual Example
	Visual example goes here

## Use This For
All public facing BC Government online content and services

## Don't Use This For
Any online content or digital services that are not apart of the BC Government.
Unsure? Ask HERE.
Consider using an extended header if you have more sections in your website or if you have complex sections that require the use of a mega menu.

## Rationale
This header is the most up-to-date version meeting all government standards, branding, and accessibility requirements.

## Behaviour
Ensure implementing this header results in the following behaviour.
1. Clicking on BC Government logo links back to homepage
2. Site title reduces through three increments as browser window gets smaller
3. After third increment site title dissapears completely
4. BC Gov logo does not change size or dissapear as browser window gets smaller

## Accessibility
This header has successfully included and tested for the following accessibility requirements:
1. Colour Impairment
2. Grayscale
3. Keyboard Accessibility
4. Screen Readers
5. Tab Navigation

## Code
### HTML
	<!DOCTYPE html>
 	<html>
	 <head>
   	  <link rel="stylesheet" href="style.css">
   	  <title>Sample Header</title>
	 </head>

	<body>
 	  <header>
  	   <div class="banner">
   	      <img src="../assets/images/logo.svg" class="logo" alt="logo" />
   	      <h1>Hello BC</h1>
  	   </div>
   	  <div class="other">
   	    <!-- While its preferd to keep this space empty with good UX in mind
    	   it can be utilized as needed  -->
    	   &nbsp;
   	  </div>
   	  </div>
  	 </header>
	</body>

	</html>
    
### CSS
	@font-face {
  	 font-family: 'MyriadWebPro';
   	src: url('../assets/fonts/MyriadWebPro.ttf') format('truetype');
	 }

	 header {
  	 background-color: #036;
  	 border-bottom: 2px solid #fcba19;
  	 padding: 9px 10px 10px;
  	 color: #fff;
  	 display: flex;
	 }

 	header h1 {
  	 font-family: 'MyriadWebPro';
  	 font-size: 1.5em;
  	 text-transform: uppercase;
	 }

	 header .logo {
 	  height: 80px;
	 }

	 header .banner {
   	justify-content: flex-start;
  	 display: flex;
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

 	/* header .right-push {
 	  margin-left: auto;
 	  align-self: flex-end;
	 } */
