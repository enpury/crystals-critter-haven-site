# Crystal's Critter Haven website guide

This file explains how the live website is organized. The notes inside the HTML, CSS, and JavaScript files are code comments only: they help someone working in Visual Studio Code and do not appear on the website.

## Live pages

- `index.html` — Homepage: urgent wildlife summary, primary introduction, short organization overview, and adoption preview.
- `about.html` — About: Crystal's Critter Haven's history and care approach, followed by Crystal's background and credentials.
- `adoption.html` — Adopt: adoption overview, current animal profiles, inquiry links, and the reptile-care partner credit.
- `volunteer.html` — Get Involved: volunteer introduction, current opportunities, volunteer email action, wishlist, and donation alternatives.
- `resources.html` — Resources: entry point to the wildlife guide and a directory of outside veterinary, rescue, public-service, and wildlife organizations.
- `contact.html` — Contact: general inquiries, urgent-wildlife routing, the general Mesa service area, and the email form.
- `donate.html` — Donate: donation introduction, gift-selection email form, examples of donation impact, and nonprofit/tax information.
- `wildlife-help.html` — Wildlife Help: observation guidance, four ordered immediate-care steps, the printable PDF, and additional resources.

## Shared files and folders

- `css/style.css` — All shared and page-specific visual styling, including responsive behavior for smaller screens.
- `js/script.js` — Mobile navigation, active navigation state, email-building forms, year display, legacy-link compatibility, and footer social links.
- `images/` — Website photographs and branding images.
- `downloads/` — Documents visitors can open from the website, including the wildlife rescue guide.
- `archive/` — Retired pages kept only for reference. These files are not part of the live navigation.

## Standard page structure

Most live HTML pages use the same four-part structure:

1. `SHARED HEADER` — Logo, main navigation, and Donate button.
2. `PAGE CONTENT` — The sections unique to that page.
3. `SHARED FOOTER` — Organization summary, help links, navigation, and social links.
4. `SHARED SCRIPT` — Loads `js/script.js` so common interactions work.

The header and footer are repeated in each HTML file. A change to shared navigation or footer wording must therefore be made on every live page.

## Page section ownership

Each live page begins its main content with a `PAGE MAP` comment. Search for the listed class name in that page and in `css/style.css` to find the related content and styling.

### Homepage — `index.html`

- `.emergency-first` — Immediate wildlife instructions and the route to the full wildlife guide.
- `.hero` — Main homepage message and hero photograph.
- `.home-intro` — Concise organization summary and About-page link.
- `.home-adoptions` — Preview of animals currently seeking homes.

### About — `about.html`

- `.about-opening` — Organization history, scope of care, and possible outcomes for animals.
- `.crystal-story` — Crystal's biography, credentials, and personal commitment.

### Adopt — `adoption.html`

- `.adoption-hero` — Adoption overview and primary email inquiry.
- `.adoptable-section` — Current animal profiles and animal-specific inquiry links.
- `.reptile-support-note` — DubiaRoaches.com partner credit.

### Get Involved — `volunteer.html`

- `.storybook-hero` — Volunteer introduction.
- `.volunteer-story` — Current opportunities and the volunteer email action.
- `.wishlist-section` — Supply wishlist and donation alternatives.

### Resources — `resources.html`

- `.resources-hero` — Directs wildlife situations to the safety guide.
- `.recommendations` — Groups outside resources by the kind of help they provide.

### Contact — `contact.html`

- `.contact-hero` — Separates general inquiries from urgent wildlife help.
- `.location-section` — General service area and intake-arrangement notice.
- `.contact-form-section` — General email form and repeated urgent-wildlife route.

### Donate — `donate.html`

- `.donation-hero` — Donation introduction and primary donation inquiry.
- `.donation-gift-section` — Gift frequency and amount selection.
- `.donation-impact` — Examples of what donations support.
- `.tax-note` — 501(c)(3), tax, and EIN information.

### Wildlife Help — `wildlife-help.html`

- `.wildlife-alert` — Safety scope and urgent text action.
- `.wildlife-need-help` — Observation checkpoint before intervening.
- `.wildlife-guide` — Four ordered immediate-care steps.
- `.wildlife-bottom-cta` — Printable guide and outside-resource links.

## Working safely

- Update visible wording in the HTML page that owns the section.
- Update appearance in `css/style.css`; search for the section's class name first.
- Update behavior in `js/script.js` only when an interaction needs to change.
- Keep urgent wildlife instructions and contact details consistent wherever they are repeated.
- Do not edit files in `archive/` to change the live site.
- After changing shared navigation or footer content, check every live page at desktop and phone widths.

## Retired pages

See `archive/README.md` for the archived filenames and their former purpose. They remain only as historical references and may contain outdated wording, links, or layouts.
