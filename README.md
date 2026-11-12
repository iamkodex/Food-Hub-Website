# Food Hub Website

## About my project

My project is called **Food Hub**. I created this website as a simple website for a food business. It gives visitors information about the business, shows some meals on the menu and provides a contact form.

I wanted the website to be easy to use and to look good on both phones and computers.

## What is on the website?

- **Home:** introduces Food Hub.
- **About:** gives a short description of the business.
- **Our Menu:** displays three sample meals with descriptions and prices.
- **Contact:** allows visitors to enter their name, email address and message.

The meals and prices are examples used for this project.

## Technologies I used

### HTML
I used HTML to build the structure of the website. It contains the headings, paragraphs, navigation links, images, menu cards and contact form.

### CSS
I used CSS to style the website. I added the colours, spacing, fonts, backgrounds, buttons and layout. I used Flexbox to arrange the navigation and other items. I used CSS Grid for the About section and food menu.

I also used media queries so the layout can adjust to different screen sizes.

### JavaScript
I used JavaScript to make the website interactive. It controls the menu button on smaller screens and checks the information entered in the contact form.

## How the website works

1. Open `index.html` in a web browser.
2. The HTML file loads the design from `style.css`.
3. The HTML file also loads `script.js` for the interactive features.
4. Visitors can use the navigation links to move around the page.
5. On a phone, the menu button opens and closes the navigation links.
6. The contact form checks that all fields are filled in and that the email address looks valid.

## How to run the project

Download or clone the project folder and open `index.html` in a browser. Keep the three files (`index.html`, `style.css` and `script.js`) in the same folder so they can work together.

An internet connection is needed for the external food pictures to load.

## Note about the contact form

The contact form currently performs front-end validation in the browser. It displays a message when the details pass the checks, but it does not send an email or save the message. A backend or form service would be needed for that feature.

## Project files

- `index.html` — page structure and content.
- `style.css` — website design and responsive layout.
- `script.js` — menu interaction and form validation.
- `README.md` — information about the project.
