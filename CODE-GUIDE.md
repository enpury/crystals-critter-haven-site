# Crystal's Critter Haven Code Guide

The comments inside each source file are invisible on the website. They are there to help identify which code controls each visible area.

## Shared files

- `css/style.css` controls the appearance of every page. Search for a class name from the HTML to find its styles.
- `js/script.js` controls the mobile menu, active navigation link, inquiry details, footer year, and social icons.
- `images/` contains the photographs, logo, and decorative artwork referenced by the HTML.

## Website pages

- `index.html` — homepage, emergency guidance, mission introduction, adoption preview, and donation action.
- `about.html` — Haven history, care philosophy, and Crystal's biography.
- `adoption.html` — adoption introduction and adoptable-animal listings.
- `animals.html` — resident gallery, care-status explanations, and reptile partner feature.
- `resident-bearded-dragon.html` — example individual resident profile.
- `sponsorship.html` — resident sponsorship explanation and inquiry path.
- `contact.html` — direct contact information, inquiry topics, and social links.
- `donate.html` — donation methods, impact information, and nonprofit note.
- `volunteer.html` — ways to help, volunteer expectations, and wish list.
- `resources.html` — wildlife response instructions and outside animal-care resources.
- `sponsors.html` — community and business partner recognition.

## Reference files

- `tortoise-preview.html` is a development preview rather than a primary navigation page.
- `archive/adopt-old.html` is an archived version of the former adoption page.

## How to trace a section

1. Open the page's HTML file and read its `PAGE MAP` comment.
2. Find the section class named in that map, such as `featured-animals`.
3. Search `css/style.css` for the same class to locate its colors, spacing, layout, and responsive rules.
4. Search `js/script.js` only when the section changes based on clicking, navigation, or URL information.

