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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headNav = document.querySelector('header nav')
let link1 = headNav.querySelectorAll('a')[0]
let link2 = headNav.querySelectorAll('a')[1]
let link3 = headNav.querySelectorAll('a')[2]
let link4 = headNav.querySelectorAll('a')[3]
let link5 = headNav.querySelectorAll('a')[4]
let link6 = headNav.querySelectorAll('a')[5]

let newLink = document.createElement('a')
newLink.textContent = 'Home'
newLink.href = '#'

let lastLink = document.createElement("a")
lastLink.textContent = 'FaQ'
lastLink.href = '#'

link1.textContent = (siteContent['nav']["nav-item-1"])
link2.textContent = (siteContent['nav']["nav-item-2"])
link3.textContent = (siteContent['nav']["nav-item-3"])
link4.textContent = (siteContent['nav']["nav-item-4"])
link5.textContent = (siteContent['nav']["nav-item-5"])
link6.textContent = (siteContent['nav']["nav-item-6"])

headNav.prepend(newLink)
headNav.appendChild(lastLink)

let cta = document.querySelector('.cta') 
let ctaImg = cta.querySelector('img')
let ctaTitle = cta.querySelector('div h1')
let ctaButton = cta.querySelector('div button')

ctaImg.src = siteContent['cta']['img-src']
ctaTitle.textContent = siteContent['cta']['h1']
ctaButton.textContent = siteContent['cta']['button']

let main = document.querySelector('.main-content')
let tlContent = main.querySelector('.text-content:nth-of-type(1)')
let tlTitle = tlContent.querySelector('h4')
let tlp = tlContent.querySelector('p')
let trContent = main.querySelector('.text-content:nth-of-type(2)')
let trTitle = trContent.querySelector('h4')
let trp = trContent.querySelector('p')

tlTitle.textContent = siteContent['main-content']['features-h4']
tlp.textContent = siteContent['main-content']['features-content']
trTitle.textContent = siteContent['main-content']['about-h4']
trp.textContent = siteContent['main-content']['about-content']

let midImg = main.querySelector('.middle-img')
midImg.src = siteContent['main-content']['middle-img-src']

let bottom = document.querySelector('.bottom-content')
let b1 = bottom.querySelector('.text-content:nth-of-type(1)')
let b1Title = b1.querySelector('h4')
let b1Content = b1.querySelector('p')
let b2 = bottom.querySelector('.text-content:nth-of-type(2)')
let b2Title = b2.querySelector('h4')
let b2Content = b2.querySelector('p')
let b3 = bottom.querySelector('.text-content:nth-of-type(3)')
let b3Title = b3.querySelector('h4')
let b3Content = b3.querySelector('p')

b1Title.textContent = siteContent['main-content']['services-h4']
b1Content.textContent = siteContent['main-content']['services-content']
b2Title.textContent = siteContent['main-content']['product-h4']
b2Content.textContent = siteContent['main-content']['product-content']
b3Title.textContent = siteContent['main-content']['vision-h4']
b3Content.textContent = siteContent['main-content']['vision-content']

let contact = document.querySelector('.contact')
let contactTitle = contact.querySelector('h4')
let addy = contactTitle.nextSibling
let num = addy.nextSibling
let email = num.nextSibling

contactTitle.textContent = siteContent['contact']['contact-h4']
addy.textContent = siteContent['contact']['address']
num.textContent = siteContent['contact']['phone']
email.textContent = siteContent['contact']['email']

let cw = document.querySelector('footer p')

cw.textContent = siteContent['footer']['copyright']