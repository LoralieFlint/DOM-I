const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
let menu = document.getElementsByTagName('a');

let services = menu[0];
  services.innerHTML = siteContent['nav']['nav-item-1'];
  services.style.color = 'red';

let product = menu[1];
  product.innerHTML = siteContent['nav']['nav-item-2'];
  product.style.color = 'orange';

let vision = menu[2];
  vision.innerHTML = siteContent['nav']['nav-item-3'];
  vision.style.color = 'yellow';

let features = menu[3];
  features.innerHTML = siteContent['nav']['nav-item-4'];
  features.style.color = 'green';

let about = menu[4];
  about.innerHTML = siteContent['nav']['nav-item-5'];
  about.style.color = 'blue';

let contact = menu[5];
  contact.innerHTML = siteContent['nav']['nav-item-6'];
  contact.style.color = 'purple';

let logo = document.querySelector('#logo-img');
  logo.setAttribute('src', siteContent['nav']['img-src']);

// cta
let bigTxt = document.querySelector('h1');
  bigTxt.textContent = siteContent.cta.h1;

let btn = document.querySelector('button');
  btn.textContent = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
  ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// main content
let mainContent = document.querySelectorAll('.top-content')[0];

// features
let featuresContent = mainContent.children[0];

let featuresHead = featuresContent.children[0];
  featuresHead.textContent = siteContent["main-content"]["features-h4"];

let featuresP = featuresContent.children[1];
  featuresP.textContent = siteContent["main-content"]["features-content"];

// about
let aboutContent = mainContent.children[1];

let aboutHead = aboutContent.children[0];
  aboutHead.textContent = siteContent["main-content"]["about-h4"];

let aboutP = aboutContent.children[1];
  aboutP.textContent = siteContent["main-content"]["about-content"];

// middle img
let middleImg = document.getElementById('middle-img'); 
  middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// bottom content
let bottomContent = document.querySelectorAll('.bottom-content')[0];

// products
let productContent = bottomContent.children[0];

let productHead = productContent.children[0];
  productHead.textContent = siteContent["main-content"]["product-h4"];

let productP = productContent.children[1];
  productP.textContent = siteContent["main-content"]["product-content"];

// vision
let visionContent = bottomContent.children[1];

let visionHead = visionContent.children[0];
  visionHead.textContent = siteContent["main-content"]["vision-h4"];

let visionP = visionContent.children[1];
  visionP.textContent = siteContent["main-content"]["vision-content"];

// contact
let contactSection = document.querySelector('.contact');

let contactHead = contactSection.children[0];
contactHead.textContent = siteContent["contact"]["contact-h4"];

let contact1 = contactSection.children[1];
contact1.textContent = siteContent["contact"]["address"];

let contact2 = contactSection.children[2];
contact2.textContent = siteContent["contact"]["phone"];

let contact3 = contactSection.children[3];
contact3.textContent = siteContent["contact"]["email"];

// footer 
let footerContent = document.getElementsByTagName('footer')[0];
let footer = footerContent.children[0];
footer.textContent = siteContent["footer"]["copyright"];