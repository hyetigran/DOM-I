const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let links = document.querySelectorAll('a');
for (i = 0; i < links.length; i++) {
	links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}
// Navigation Text Color Green ...only works on first element
let navColor = document.querySelector('a');
navColor.style.color = 'green';

// Append and Prepend Element ...throws errors
let home = document.querySelector('a').appendChild('Home');
let team = document.querySelector('a').prepend('Team');

// CTA section
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta['h1'];

let button = document.querySelector('button');
button.textContent = siteContent.cta['button'];

// Middle Content

let featuresHeader = document.querySelectorAll('h4')[0];
featuresHeader.textContent = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelectorAll('p')[0];
featuresContent.textContent = siteContent['main-content']['features-content'];

let aboutHeader = document.querySelectorAll('h4')[1];
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('p')[1];
aboutContent.textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom Content
let servicesHeader = document.querySelectorAll('h4')[2];
servicesHeader.textContent = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelectorAll('p')[2];
servicesContent.textContent = siteContent['main-content']['services-content'];

let productHeader = document.querySelectorAll('h4')[3];
productHeader.textContent = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('p')[3];
productContent.textContent = siteContent['main-content']['product-content'];

let visionHeader = document.querySelectorAll('h4')[4];
visionHeader.textContent = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('p')[4];
visionContent.textContent = siteContent['main-content']['vision-content'];

// Contact
let contact = document.querySelectorAll('h4')[5];
contact.textContent = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelectorAll('p')[5];
contactAddress.textContent = siteContent['contact']['address'];

let contactPhone = document.querySelectorAll('p')[6];
contactPhone.textContent = siteContent['contact']['phone'];

let contactEmail = document.querySelectorAll('p')[7];
contactEmail.textContent = siteContent['contact']['email'];

// Footer
let footerContent = document.querySelector('footer');
footerContent.textContent = siteContent.footer.copyright;
