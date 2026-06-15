import "./styles.css";

const A = "/assets/foodlosophy/";
const orderUrl = "https://direct.chownow.com/order/42400/locations/64050";
const instagramUrl = "https://www.instagram.com/foodlosophy.concept/";

const menuItems = [
  {
    name: "11. Horseback steak",
    text:
      "Horseback steak 7.5 oz Sirloin Steak, topped with two over easy eggs and onions, served with Rice and your choice of Black or Pinto Beans.",
    image: "menu-horseback-steak.png",
  },
  {
    name: "12. Picanha Steak 10.0 oz",
    text:
      "Served with Rice, your choice of Black or Pinto Beans, French Fries and Vinagrete - preco $24.98.",
    image: "menu-picanha-steak.png",
  },
  {
    name: "1. Beef Stew",
    text:
      "Served with rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-beef-stew.png",
  },
  {
    name: "2. Sirloin Steak",
    text:
      "Rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-sirloin-steak.png",
  },
  {
    name: "3. Grilled Chicken",
    text:
      "Rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-grilled-chicken.png",
  },
  {
    name: "4. Pork Roast",
    text:
      "Rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-pork-roast.png",
  },
  {
    name: "5. Calabrese Sausage",
    text:
      "Rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-calabrese-sausage.png",
  },
  {
    name: "6. Chicken Okra Stew",
    text:
      "Rice, beans, polenta, butternut squash, collard greens & 1 cold side.",
    image: "menu-chicken-okra-stew.png",
  },
  {
    name: "7. Coalho Cheese Plate",
    text:
      "Rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-grilled-chicken.png",
  },
  {
    name: "8. Brazilian Sancocho",
    text: "Served with French bread.",
    image: "menu-brazilian-sancocho.png",
  },
  {
    name: "9. Fresh Salad with Protein of your Choice",
    text: "",
    image: "menu-fresh-salad.png",
  },
  {
    name: "10. Chimi-Samba Sandwich",
    text: "Your choice of steak or chicken.",
    image: "menu-chimi-samba.png",
  },
];

const bestSellers = [
  {
    name: "1. Sirloin Steak",
    text:
      "Served with rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-sirloin-steak.png",
  },
  {
    name: "5. Calabrese Sausage",
    text:
      "Rice, beans, butternut squash, collard greens, fried egg, plantains & 1 cold side.",
    image: "menu-calabrese-sausage.png",
  },
  {
    name: "6. Chicken Okra Stew",
    text:
      "Rice, beans, polenta, butternut squash, collard greens & 1 cold side.",
    image: "menu-chicken-okra-stew.png",
  },
];

const featureItems = [
  {
    title: "Restaurant quality",
    text: "Restaurant quality, ready when you are",
    icon: "store",
  },
  {
    title: "Fresh Ingredients",
    text: "Fresh ingredients, made from scratch",
    icon: "check",
  },
  {
    title: "Brazilian Goodness",
    text: "Authentic Brazilian flavors with a modern twist",
    icon: "star",
  },
  {
    title: "Fast Convenient",
    text: "Fast, convenient meals for your busy routine",
    icon: "bolt",
  },
];

function iconSvg(type) {
  const icons = {
    store:
      '<path d="M4 10h16l-1.5-5h-13L4 10Z"/><path d="M6 10v9h12v-9"/><path d="M9 19v-5h6v5"/>',
    check:
      '<circle cx="12" cy="12" r="8"/><path d="m8 12 2.5 2.5L16 9"/>',
    star:
      '<path d="m12 4 2.2 4.6 5 .7-3.6 3.6.9 5.1-4.5-2.4L7.5 18l.9-5.1L4.8 9.3l5-.7L12 4Z"/>',
    bolt: '<path d="M13 2 5 14h6l-1 8 9-13h-6l0-7Z"/>',
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[type]}</svg>`;
}

function Header() {
  return `
    <header class="site-header" id="top">
      <a class="logo-link" href="#top" aria-label="Foodlosophy home">
        <img src="${A}logo-foodlosophy.png" alt="Foodlosophy logo" />
      </a>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
        <span></span>
        <span></span>
        <span></span>
        <span class="sr-only">Open menu</span>
      </button>

      <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">
        <a href="#menu">Menu</a>
        <a href="${orderUrl}" target="_blank" rel="noopener">Buy in Chownow</a>
        <a href="${instagramUrl}" target="_blank" rel="noopener">Follow us</a>
      </nav>

      <address class="header-contact">
        <a class="phone-link" href="tel:+19782215430">
          <span aria-hidden="true">&#9742;</span> (978) 221-5430
        </a>
        <span>19 Hurd St, Lowell, MA</span>
      </address>
    </header>
  `;
}

function Hero() {
  const slides = [
    {
      image: "hero-picanha-steak.png",
      alt: "Picanha Steak banner",
    },
    {
      image: "hero-chicken-crepe.png",
      alt: "Chicken crepe banner",
    },
    {
      image: "hero-horseback-steak.png",
      alt: "Horseback steak banner",
    },
  ];

  return `
    <section class="hero" aria-label="Foodlosophy highlights">
      <div class="hero-slider" aria-roledescription="carousel" aria-label="Featured dishes">
        ${slides
          .map(
            ({ image, alt }, index) => `
              <div
                class="hero-slide ${index === 0 ? "is-active" : ""}"
                aria-hidden="${index === 0 ? "false" : "true"}"
              >
                <img
                  src="${A}${image}"
                  alt="${alt}"
                  width="1400"
                  height="800"
                  ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
                />
              </div>
            `,
          )
          .join("")}
        <a class="button hero-button" href="${orderUrl}" target="_blank" rel="noopener">
          <span class="sr-only">Order Now</span>
        </a>
      </div>
      <div class="hero-dots" aria-label="Choose featured dish">
        ${slides
          .map(
            ({ alt }, index) => `
              <button
                type="button"
                aria-label="Show ${alt.replace(" banner", "")}"
                aria-current="${index === 0 ? "true" : "false"}"
                data-slide="${index}"
              ></button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function ProductRow(item, index) {
  const isNew = index < 2;
  return `
    <article class="menu-row ${isNew ? "menu-row-new" : ""}">
      <img src="${A}${item.image}" alt="${item.name.replace(/^[0-9]+\\.\\s*/, "")}" loading="lazy" />
      <div>
        <h3>${item.name}</h3>
        ${item.text ? `<p>${item.text}</p>` : ""}
      </div>
    </article>
  `;
}

function MenuSection() {
  return `
    <main>
      <section class="menu-section section" id="menu">
        <div class="section-heading">
          <h1>Our Menu</h1>
          <p>A menu inspired by Brazil, made for your routine</p>
        </div>

        <a class="arrival-pill" href="${orderUrl}" target="_blank" rel="noopener">New Arrival !</a>

        <div class="new-arrivals">
          ${menuItems.slice(0, 2).map(ProductRow).join("")}
        </div>

        <div class="menu-grid">
          ${menuItems.slice(2).map(ProductRow).join("")}
        </div>

        <div class="extras">
          <h2>Extras, Snacks &amp; Treats:</h2>
          <ul>
            <li>Add extra meat or sides</li>
            <li>Brazilian favorites: Cheese Bread, Coxinha, Brazilian Chips</li>
            <li>Desserts: Tres Leches, Guava Cheesecake, Chocolate Cake, Churros</li>
          </ul>
        </div>
      </section>
    </main>
  `;
}

function Rating() {
  return '<span class="stars" aria-label="Rated 5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</span>';
}

function BestSellerCard(item) {
  return `
    <article class="seller-card">
      <img src="${A}${item.image}" alt="${item.name.replace(/^[0-9]+\\.\\s*/, "")}" loading="lazy" />
      <h3>${item.name}</h3>
      <p>${item.text}</p>
      ${Rating()}
      <a class="button button-small" href="${orderUrl}" target="_blank" rel="noopener">Order Now <span aria-hidden="true">&rsaquo;</span></a>
    </article>
  `;
}

function BestSellingSection() {
  return `
    <section class="best-selling section">
      <div class="split-heading">
        <h2>Best Selling Products</h2>
        <a class="text-button" href="${orderUrl}" target="_blank" rel="noopener">View All <span aria-hidden="true">&rsaquo;</span></a>
      </div>
      <div class="seller-grid">
        ${bestSellers.map(BestSellerCard).join("")}
      </div>
    </section>
  `;
}

function FeatureSection() {
  return `
    <section class="features section" aria-label="Foodlosophy advantages">
      <div class="feature-photo">
        <img src="${A}feature-restaurant-quality.jpg" alt="Foodlosophy restaurant storefront" loading="lazy" />
      </div>
      <div class="feature-grid">
        ${featureItems
          .map(
            (item) => `
              <a class="feature-item" href="${orderUrl}" target="_blank" rel="noopener">
                <span class="feature-icon">${iconSvg(item.icon)}</span>
                <span>
                  <strong>${item.title}</strong>
                  <small>${item.text}</small>
                </span>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function ChimiSection() {
  return `
    <section class="chimi section">
      <article class="chimi-main">
        <img src="${A}chimi-samba-hero.jpg" alt="Chimi-samba sandwich on a yellow table" loading="lazy" />
        <h2>Try Chimi-samba<br />and fall in love</h2>
      </article>

      <div class="chimi-side">
        <article class="taste-card">
          <div>
            <h3>Fast like your day.<br />Authentic like your taste.</h3>
            <img class="stamp" src="${A}stamp-authentic-taste.png" alt="" aria-hidden="true" loading="lazy" />
          </div>
          <img src="${A}cta-woman.png" alt="Woman holding a Brazilian meal bowl" loading="lazy" />
        </article>

        <article class="coxinha-card">
          <img src="${A}cta-coxinha.png" alt="Crispy Brazilian coxinhas in a bowl" loading="lazy" />
          <div>
            <h3>Discover the true taste of Brazil with our crispy, irresistible coxinhas!</h3>
            <a href="${orderUrl}" target="_blank" rel="noopener">Order Now <span aria-hidden="true">&rsaquo;</span></a>
          </div>
        </article>
      </div>
    </section>
  `;
}

function GoodnessSection() {
  return `
    <section class="goodness section">
      <img src="${A}brazilian-goodness-man.png" alt="Smiling customer tasting Brazilian food" loading="lazy" />
      <div>
        <h2>Brazilian Goodness</h2>
        <p>Authentic Brazilian flavors<br />with a modern twist</p>
      </div>
    </section>
  `;
}

function ChowNowSection() {
  return `
    <section class="chownow section">
      <div class="food-thumbs" aria-hidden="true">
        <img src="${A}chownow-food-1.jpg" alt="" loading="lazy" />
        <img src="${A}chownow-food-2.jpg" alt="" loading="lazy" />
        <img src="${A}chownow-food-3.jpg" alt="" loading="lazy" />
      </div>
      <div class="chownow-copy">
        <img src="${A}chownow-logo.png" alt="ChowNow logo" loading="lazy" />
        <h2><a href="${orderUrl}" target="_blank" rel="noopener">Order Online - ChowNow</a></h2>
        <p>We're available through your favorite online ordering platform</p>
      </div>
      <img class="phone-mockup" src="${A}chownow-phone.png" alt="Foodlosophy ordering screen on a mobile phone" loading="lazy" />
    </section>
  `;
}

function Footer() {
  return `
    <footer class="site-footer">
      <div>
        <img src="${A}logo-foodlosophy.png" alt="Foodlosophy logo" loading="lazy" />
        <p>Desenvolvido pela <a href="https://www.gcfilms.com" target="_blank" rel="noopener">GC FILMS</a></p>
      </div>
      <address>
        <h2>Address</h2>
        <strong>19 Hurd St, Lowell, MA</strong>
        <a href="mailto:contact@foodlosophy.com">contact@foodlosophy.com</a>
        <a href="tel:+19782215430">(978) 221-5430</a>
      </address>
    </footer>
  `;
}

function App() {
  return `
    ${Header()}
    ${Hero()}
    ${MenuSection()}
    ${BestSellingSection()}
    ${FeatureSection()}
    ${ChimiSection()}
    ${GoodnessSection()}
    ${ChowNowSection()}
    ${Footer()}
  `;
}

document.querySelector("#app").innerHTML = App();

const toggle = document.querySelector(".menu-toggle");
const toggleLabel = toggle.querySelector(".sr-only");
const nav = document.querySelector("#primary-nav");
const heroSlider = document.querySelector(".hero-slider");
const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroDots = [...document.querySelectorAll(".hero-dots button")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let activeHeroSlide = 0;
let heroTimer;

function setMenuOpen(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggleLabel.textContent = open ? "Close menu" : "Open menu";
  nav.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () => {
  setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setMenuOpen(false);
  }
});

function showHeroSlide(index) {
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, slideIndex) => {
    const active = slideIndex === activeHeroSlide;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });

  heroDots.forEach((dot, dotIndex) => {
    dot.setAttribute("aria-current", String(dotIndex === activeHeroSlide));
  });
}

function stopHeroRotation() {
  window.clearInterval(heroTimer);
}

function startHeroRotation() {
  stopHeroRotation();
  if (!reduceMotion.matches) {
    heroTimer = window.setInterval(() => showHeroSlide(activeHeroSlide + 1), 5500);
  }
}

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showHeroSlide(Number(dot.dataset.slide));
    startHeroRotation();
  });
});

heroSlider.addEventListener("mouseenter", stopHeroRotation);
heroSlider.addEventListener("mouseleave", startHeroRotation);
heroSlider.addEventListener("focusin", stopHeroRotation);
heroSlider.addEventListener("focusout", startHeroRotation);
reduceMotion.addEventListener("change", startHeroRotation);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopHeroRotation();
  } else {
    startHeroRotation();
  }
});
startHeroRotation();

const revealTargets = [
  document.querySelector(".hero-slider"),
  ...document.querySelectorAll(
    ".section, .menu-row, .seller-card, .feature-item, .chimi-main, .taste-card, .coxinha-card, .site-footer",
  ),
].filter(Boolean);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}
