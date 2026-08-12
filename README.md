# iron-state-final
final project for GIT 418


## AI Disclosure Statement

I used generative AI as part of this project. I have listed the tool, the parts of the project affected, how I used it, and how I tested and revised the work myself.

### What generative AI tool or tools did you use?

ChatGPT (OpenAI)

#### What did you use AI for?
Ai was primarily utilized as a learning and debugging assistant throughout my development process.
I asked questions on how to best format my HTML to fit the desired layout, questions about my chosen padding, widths, and layouts on my CSS, and guiding information on how to implement my Swiper carousel and jQuery UI. I also utilized it to help me understand certain error messages, debug my code, and explain certain JavaScript concepts I did not fully grasp.

### Which specific parts of the project were affected?
AI assisted me with the following:

Debugging JavaScript errors
Understanding jQuery syntax
Implementing the jQuery UI dialog
Styling the Swiper carousel navigation
Debugging HTML validation errors
Explaining CSS layout issues (there were a ton!!)
Reviewing portions of my HTML, CSS, and JavaScript

### How much of the final HTML, CSS, or JavaScript was influenced by AI?
The website was designed and built by me. I primarily used ChatGPT to help me explain concepts,
for debugging purposes, and suggest approaches to specific problems. I continuously reviewed and
tested the code against project requirements to ensure it met the guidelines. 

### How did you test and verify the code?
I continuously tested the project through LiveServer and ChromeDevTools. For the JavaScript implementation,
I continuously used console.log() statements to ensure accurate retrieval of information, proper functioning of event listeners, and localStorage features behaved accordingly. After each function was implemented, I would stop and test the site's functionality on both Safari and Chrome. I also utilized the w3C validator to ensure semantic HTML and CSS. 

### What did you change, revise, or write yourself after receiving AI help?
One of the main aspects AI helped me with was grouping similar content. Throughout the development process
I frequently reorganized my HTML by grouping related elements into additional <div> elements when it helped
me reorganize my layout or even made the JavaScript selection easier. Moreover, I had a lot of trouble styling my Swiper Carousel so I asked AI for suggestions on how to style the content selectors, and how to
specifically ensure the current image stood out as opposed to the other images in the carousel. Specifically
in my hero section, I had a lot of trouble placing the main image relative to the text, so AI suggested using positioning elements and transformation elements such as Scale.

## Development Log

## August 4
- Initialized the Iron State project structure.
- Created the HTML page structure.
- Built the header and navigation.
- Started the hero, philosophy, and programs sections.

## August 5
- Continued building the Programs section.
- Added the Philosophy section.
- Refined the Hero section layout.
- Organized the overall page structure.

## August 6
- Added CSS reset and root variables.
- Built the Hero section styling.
- Implemented the State of Iron carousel section.
- Built the Contact section and Footer.
- Made final HTML adjustments.

## August 7
- Continued refining the Philosophy section.
- Improved layouts and spacing throughout the site.

## August 8
- Refined the Programs section layout.
- Styled the Contact section button.
- Improved the Footer layout.
- Made general layout and spacing adjustments.

## August 11
- Implemented AJAX with JSON to dynamically switch training programs.
- Added localStorage functionality to save a user's favorite program.
- Completed the Swiper.js carousel implementation.
- Integrated jQuery UI for the contact confirmation dialog.


## Debugging Log

## Problem1: 

When I was building out the hero section, my hero image and text required precise positioning,
as it is supposed to mirror a sort of 3D effect where the subject is overlapping with the heading.

### What I tried: 

I experimented with different layouts, changed positioning, padding, and margins. I was honestly a bit lost and frustrated. AI had also suggested trying a Z index but for some reason that kept breaking my code and the image would find itself on the top of the page while the heading remained unchanged.

### What fixed it
I reorganized the HTML structure and used a combination of relative and absolute positioning along with fixed widths, percentages, and spacing values. Through repeated testing and refinement, I was eventually able to align the hero image and heading to achieve the intended overlapping effect. However, this layout 
is quite unstable and unaligned as the fixed values cause it to distort with the slightest vh reduction.

### What I learned
I learned about that these expressive layouts depend a lot on a properly organized html just as much as
the CSS. I also re-learned about properties such as position: relative and position absolute. Debugging these types of layouts also requires making, small incremental changes to achieve the overall desired effect. I was trying to change too many properties at once which ultimately ended up breaking the code.

### Did I use AI for this problem?
Yes. AI suggested the use of these positioning elements as well as the transform function in order to ensure the hero png was the correct size.

## Problem2: 

When I was implementing the JQuery UI, the contact confirmation dialog was not displaying correctly. It was displaying in this rather basic, simplistic HTML instead of being styled with the default JQuery UI CSS Styles.

### What I tried: 
I reviewed the JQuery UI documentation to ensure I was initializing the dialog correctly. I also ensured through the DevTools that the console was not showing any errors with the implementation. Since no JS errors appeared, I reviewed my HTML head to ensure that I was importing the library files correctly.

### What fixed it
I found out that while I had imported the JQuery UI JS file, I had not imported its CSS stylesheet. After I linked the stylesheet, the dialog displayed correctly

### What I learned
I was gently reminded that many of these third-party libraries not only require the JS files but also require the CSS files to function correctly. I was also able to gain some experience reading some of this more advanced documentation.


### Did I use AI for this problem?
Yes I did. I pasted my contact confirmation dialog code after ensuring no console errors. Once I ran it through AI, it had suggested checking my HTML document head and that's when I realized I'd forgotten to reference the CSS stylesheet.

## Problem3
While Implementing the Programs section, clicking a program caused parts of the page to display undefined in the console instead of the correct information. The program information was not displaying properly in the console.

### What I tried: 
I used console.log() statements to ensure the click event handlers were working correctly. I also went through my JSON file multiple times to ensure it was formatted correctly.

### What Fixed It
Through careful analysis i realized that my JS was trying to reference properties that did not match the keys stored in the JSON file. After correcting the property name and also verifying that each "data-program-type" attribute corresponded to the correct JSON object, the content finally updated.

### What I Learned
I learned the importance of properly referencing key value pairs as the content in the JSON file. If the property names referenced in JS do not exactly match the keys stored in the JSON file, the values will not be retrieved correctly and may instead display as undefined.

### Did I use AI for this problem?
I did not use AI for this as this was surprisingly one of my more easy to fix bugs. Since i had been using so many variables with the name "program" or "SelectedProgram" or "programItems I honestly just became quite confused and did not reference the JSON data correctly.

## Problem4
While I was implementing my carousel, I wanted to try and match it to the wireframe. The wireframe had the chosen picture in the center with the other images slightly peeking out 3 dimensionally to create a more editorial look

### What I tried: 
I tried to change  the slidesPerView element to be a bigger number and decrease the spaceBetween element 
to a smaller number to attempt to overlap the images and gain the desired effect.

### What Fixed It
Inevitably, I had to abandon the layout I'd configured in the wireframe. I chose to display the images with Swiper's default centered carousel layout. Although this wasn't the chosen design, it functioned reliably provided for cleaner spacing, and gave for a better user experience.

### What I Learned
I learned that oftentimes, JQUERY UI plugins can have their limitations and these limitations cannot be
easily overridden or re-styled. Sometimes the best design decision is to simply work with the tool instead of trying to reconfigure its functionality.

### Did I use AI for this problem?
Yes, I discussed the layout with ChatGPT and discussed several approaches. After attempting to implement those suggestions I ultimately decided it was best to utilize the standard layout the Swiper had provided.


