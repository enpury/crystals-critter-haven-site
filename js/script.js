/*
  JAVASCRIPT MAP
  - Mobile navigation: opens and closes the Menu button on smaller screens.
  - Copyright year: keeps the footer year current.
  - Current-page navigation: highlights the visitor's active page.
  - Inquiry context: carries adoption or sponsorship details into contact links.
  - Footer social links: adds the same Facebook and Instagram icons everywhere.
  No libraries are required.
*/
const menuButton = document.querySelector('.menu-button');
const mainMenu = document.querySelector('#main-menu');

if (menuButton && mainMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  });

  mainMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainMenu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    });
  });
}

// Keeps the copyright year current automatically.
const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();

// Highlights the navigation link for the page the visitor is currently viewing.
const currentFile = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('#main-menu a, .header-donate').forEach((link) => {
  const linkFile = link.getAttribute('href')?.split('#')[0];

  if (linkFile === currentFile) {
    link.classList.add('current-page');
    link.setAttribute('aria-current', 'page');
  }
});

// Carries adoption and sponsorship context into the contact form.
const query = new URLSearchParams(window.location.search);
const requestedTopic = query.get('topic');
const requestedResident = query.get('resident');
const topicSelect = document.querySelector('#contact-topic');
const messageField = document.querySelector('#contact-message');

if (topicSelect && requestedTopic) {
  const matchingOption = Array.from(topicSelect.options).find((option) => option.value === requestedTopic || option.text === requestedTopic);
  if (matchingOption) topicSelect.value = matchingOption.value;
}

if (messageField && requestedResident) {
  messageField.value = `I'm interested in ${requestedResident}. Please send me more information.`;
}

document.querySelectorAll('[data-resident-name]').forEach((element) => {
  if (requestedResident) element.textContent = requestedResident;
});

document.querySelectorAll('.sponsorship-contact').forEach((link) => {
  if (requestedResident) {
    link.href = `contact.html?topic=${encodeURIComponent('Donation or sponsorship')}&resident=${encodeURIComponent(requestedResident)}`;
  }
});

// Adds the same compact social icons to every page footer.
const footer = document.querySelector('footer');

if (footer && !footer.querySelector('.footer-social')) {
  const socialLinks = document.createElement('div');
  socialLinks.className = 'footer-social';
  socialLinks.setAttribute('aria-label', 'Follow Crystal\'s Critter Haven');
  socialLinks.innerHTML = `
    <a href="https://www.facebook.com/CrystalsCritterHaven" target="_blank" rel="noreferrer" aria-label="Crystal's Critter Haven on Facebook">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4.4c-.5-.1-2.2-.2-4.1-.2-4 0-6.7 2.4-6.7 6.9V15H2v4h4.2v10h5.1V19h4.2l.7-4h-4.9v-3.5C11.3 10.3 11.7 8 14 8Z" transform="scale(.75) translate(4 -1)"/></svg>
      <span>Facebook</span>
    </a>
    <a href="https://www.instagram.com/crystals_critter_haven" target="_blank" rel="noreferrer" aria-label="Crystal's Critter Haven on Instagram">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle class="icon-dot" cx="17.4" cy="6.7" r="1"/></svg>
      <span>Instagram</span>
    </a>`;
  const footerColumns = footer.querySelectorAll(':scope > div');
  const socialHost = footerColumns[footerColumns.length - 1] || footer;
  socialHost.appendChild(socialLinks);
}
