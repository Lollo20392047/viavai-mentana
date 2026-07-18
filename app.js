const menu = {
  rosse: [
    { name: "Rossa", price: "6,00 €", desc: "Pomodoro Greci 100% solo pomodoro.", tags: ["vegana"] },
    { name: "Margherita", price: "8,00 €", desc: "Pomodoro Greci e mozzarella fior di latte.", tags: ["vegetariana"] },
    { name: "Napoli", price: "8,50 €", desc: "Pomodoro, mozzarella fior di latte e alici." },
    { name: "Bufala e Pancetta", price: "9,50 €", desc: "Pomodoro, mozzarella di bufala e pancetta." },
    { name: "Diavola", price: "8,50 €", desc: "Pomodoro, fior di latte e salame piccante.", tags: ["piccante"] },
    { name: "Americana", price: "8,50 €", desc: "Pomodoro, fior di latte, wurstel e patatine fritte." },
    { name: "Valtellina", price: "10,00 €", desc: "Pomodoro, fior di latte, bresaola e rughetta." },
    { name: "Parmigiana", price: "9,50 €", desc: "Pomodoro, fior di latte, melanzane e parmigiano.", tags: ["vegetariana"] },
    { name: "Calabrese", price: "9,00 €", desc: "Pomodoro, fior di latte e ’nduja.", tags: ["piccante"] },
    { name: "La Bufala", price: "9,50 €", desc: "Pomodoro e mozzarella di bufala." },
    { name: "Funghi", price: "8,50 €", desc: "Pomodoro, fior di latte e funghi.", tags: ["vegetariana"] },
    { name: "Strepitosa", price: "10,50 €", desc: "Pomodoro, bufala, pancetta e funghi porcini." },
    { name: "La Mia Marinara", price: "8,50 €", desc: "Pomodoro, prezzemolo, aglione e peperoncino con pesto romano fatto in casa.", tags: ["vegana", "piccante"] },
    { name: "La Parma", price: "9,00 €", desc: "Pomodoro, fior di latte e prosciutto crudo." },
    { name: "Parmigiana Special", price: "11,50 €", desc: "Pomodoro, mozzarella, melanzane, scaglie di parmigiano e pancetta croccante." },
    { name: "Capricciosa", price: "9,00 €", desc: "Pomodoro, funghi champignon, mozzarella, carciofi e uovo sodo." },
    { name: "La Spicchiosa", price: "10,00 €", desc: "Quattro spicchi: peperoni, marinara, melanzane e funghi.", tags: ["vegana"] },
    { name: "Moscatelli", price: "10,90 €", desc: "Bufala, pomodoro, capperi, olive taggiasche e origano." }
  ],
  bianche: [
    { name: "Fior di Focaccia", price: "5,00 €", desc: "Sale Maldon e olio extravergine d’oliva.", tags: ["vegana"] },
    { name: "Crostino", price: "8,50 €", desc: "Mozzarella fior di latte e prosciutto cotto." },
    { name: "Boscaiola", price: "8,50 €", desc: "Fior di latte, funghi e salsiccia." },
    { name: "La Broccolosa", price: "8,50 €", desc: "Fior di latte, broccoli e salsiccia." },
    { name: "La Tonnara", price: "9,50 €", desc: "Fior di latte, cipolla rossa e tonno." },
    { name: "La Contadina", price: "9,00 €", desc: "Fior di latte, zucchine, broccoli, peperoni e melanzane.", tags: ["vegetariana"] },
    { name: "Fiori e Alici", price: "9,00 €", desc: "Mozzarella, fiori di zucca e alici." },
    { name: "Montagnola", price: "14,00 €", desc: "Fior di latte, salsa tartufata, porcini, prosciutto crudo e scaglie di grana." },
    { name: "Salmone", price: "13,00 €", desc: "Pomodoro, salsa cocktail, fior di latte, salmone, rughetta e aceto balsamico." },
    { name: "Patate", price: "8,00 €", desc: "Mozzarella e patate." },
    { name: "La Porcini", price: "9,50 €", desc: "Mozzarella e funghi porcini." },
    { name: "La Porcinosa", price: "10,00 €", desc: "Mozzarella, patate e funghi porcini." },
    { name: "4 Formaggi", price: "9,00 €", desc: "Mozzarella, gorgonzola, emmental e grana.", tags: ["vegetariana"] },
    { name: "Napule è", price: "9,00 €", desc: "Mozzarella, friarielli e salsiccia." },
    { name: "La Tentazione", price: "9,00 €", desc: "Mozzarella, scarola e provola.", tags: ["vegetariana"] },
    { name: "4 Formaggi e ’Nduja", price: "10,00 €", desc: "Mozzarella, gorgonzola, emmental, grana e ’nduja.", tags: ["piccante"] },
    { name: "Carciofara", price: "10,00 €", desc: "Crema di carciofi, pancetta croccante e scaglie di grana." },
    { name: "Gustosa", price: "10,00 €", desc: "Crema di zucca, salsiccia e gorgonzola." },
    { name: "Sargiatella", price: "10,90 €", desc: "Fior di latte, fiori di zucca, salsiccia, porcini e tartufo." },
    { name: "Madonna", price: "10,90 €", desc: "Fior di latte, peperone crusco e ’nduja.", tags: ["piccante"] },
    { name: "5 Pini", price: "10,90 €", desc: "Fior di latte, crema carbonara, guanciale, pepe e pecorino." },
    { name: "Centro Storico", price: "10,90 €", desc: "Fior di latte, hummus di ceci, porcini e salsiccia." },
    { name: "’Mmazzatora", price: "10,90 €", desc: "Fior di latte, crema di zucchine, fiori di zucca e pancetta." },
    { name: "Santa Croce", price: "10,90 €", desc: "Fior di latte, radicchio, gorgonzola e noci.", tags: ["vegetariana"] }
  ],
  taglio: [
    { name: "Rossa", price: "al peso", desc: "Pomodoro e olio extravergine. Il grande classico del banco.", tags: ["vegana"] },
    { name: "Margherita", price: "al peso", desc: "Pomodoro e mozzarella fior di latte.", tags: ["vegetariana"] },
    { name: "Patate e Rosmarino", price: "al peso", desc: "Patate, rosmarino e olio extravergine.", tags: ["vegetariana"] },
    { name: "Crostino", price: "al peso", desc: "Mozzarella e prosciutto cotto." },
    { name: "Boscaiola", price: "al peso", desc: "Mozzarella, funghi e salsiccia." },
    { name: "Gusto del giorno", price: "al peso", desc: "La proposta stagionale cambia in base al banco. Chiedila su WhatsApp." }
  ],
  fritti: [
    { name: "Supplì Classico", price: "1,80 €", desc: "Il supplì romano della casa.", tags: ["vegetariano"] },
    { name: "Supplì Cacio e Pepe", price: "2,00 €", desc: "Cuore cremoso al pecorino e pepe." },
    { name: "Supplì al Ragù", price: "2,00 €", desc: "Riso, ragù e panatura croccante." },
    { name: "Supplì alla Carbonara", price: "2,00 €", desc: "Il classico romano in versione fritta." },
    { name: "Supplì ’Nduja", price: "2,00 €", desc: "Sapido, cremoso e piccante.", tags: ["piccante"] },
    { name: "Olive Ascolane", price: "6,80 €", desc: "Porzione da condividere." }
  ]
};

const categoryLabels = {
  rosse: "tonde rosse",
  bianche: "tonde bianche",
  taglio: "pizze al taglio",
  fritti: "fritti"
};

const menuList = document.querySelector("[data-menu-list]");
const menuEmpty = document.querySelector("[data-menu-empty]");
const searchInput = document.querySelector("[data-menu-search]");
const categoryTabs = [...document.querySelectorAll("[data-category]")];
let activeCategory = "rosse";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMenu() {
  const query = searchInput.value.trim().toLocaleLowerCase("it");
  const items = menu[activeCategory].filter((item) => {
    const searchable = `${item.name} ${item.desc} ${(item.tags || []).join(" ")}`.toLocaleLowerCase("it");
    return searchable.includes(query);
  });

  menuList.innerHTML = items
    .map(
      (item, index) => `
        <article class="menu-item" style="animation-delay:${Math.min(index * 25, 220)}ms">
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.desc)}</p>
            ${item.tags?.length ? `<div class="menu-tags">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
          </div>
          <span class="menu-item-price">${escapeHtml(item.price)}</span>
        </article>
      `
    )
    .join("");

  menuEmpty.hidden = items.length !== 0;
  menuList.setAttribute("aria-label", `Menu ${categoryLabels[activeCategory]}: ${items.length} proposte`);
}

categoryTabs.forEach((tab, tabIndex) => {
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category;
    categoryTabs.forEach((button) => {
      const selected = button === tab;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-selected", String(selected));
    });
    renderMenu();
  });

  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (tabIndex + direction + categoryTabs.length) % categoryTabs.length;
    categoryTabs[nextIndex].focus();
    categoryTabs[nextIndex].click();
  });
});

searchInput.addEventListener("input", renderMenu);
renderMenu();

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

function closeMobileMenu() {
  header.classList.remove("is-open");
  mobileNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Apri il menu");
}

menuToggle.addEventListener("click", () => {
  const willOpen = !mobileNav.classList.contains("is-open");
  header.classList.toggle("is-open", willOpen);
  mobileNav.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Chiudi il menu" : "Apri il menu");
});

mobileNav.querySelectorAll("a, button").forEach((item) => item.addEventListener("click", closeMobileMenu));

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = [...document.querySelectorAll(".reveal")];

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -5%" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

if (!reduceMotion) {
  const heroMedia = document.querySelector(".hero-media");
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking || window.scrollY > window.innerHeight * 1.1) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        heroMedia.style.translate = `0 ${window.scrollY * 0.1}px`;
        ticking = false;
      });
    },
    { passive: true }
  );
}

const dialog = document.querySelector("[data-order-dialog]");
const orderForm = document.querySelector("[data-order-form]");
const whatsappNudge = document.querySelector("[data-whatsapp-nudge]");
const closeNudge = document.querySelector("[data-close-nudge]");
const openOrderButtons = [...document.querySelectorAll("[data-open-order]")];
const closeOrderButton = document.querySelector("[data-close-order]");

function openOrderDialog() {
  whatsappNudge.classList.remove("is-visible");
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("is-locked");
}

function closeOrderDialog() {
  if (dialog.open) dialog.close();
  document.body.classList.remove("is-locked");
}

openOrderButtons.forEach((button) => button.addEventListener("click", openOrderDialog));
closeOrderButton.addEventListener("click", closeOrderDialog);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeOrderDialog();
});

dialog.addEventListener("close", () => document.body.classList.remove("is-locked"));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
    if (dialog.open) closeOrderDialog();
  }
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(orderForm);
  const type = formData.get("tipo") || "Ritiro";
  const name = String(formData.get("nome") || "").trim();
  const time = String(formData.get("orario") || "").trim();
  const order = String(formData.get("ordine") || "").trim();

  const lines = [
    "Ciao ViaVai! 🍕",
    `Vorrei richiedere: ${type}.`,
    name ? `Nome: ${name}.` : "",
    time ? `Orario preferito: ${time}.` : "",
    order ? `Ordine / richiesta: ${order}` : "Potete indicarmi disponibilità e tempi?"
  ].filter(Boolean);

  const whatsappUrl = `https://wa.me/393513931910?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

function hideNudge() {
  whatsappNudge.classList.remove("is-visible");
  try {
    window.sessionStorage.setItem("viavai-whatsapp-nudge", "seen");
  } catch {
    // La prenotazione resta disponibile dal pulsante flottante.
  }
}

closeNudge.addEventListener("click", hideNudge);

try {
  if (!window.sessionStorage.getItem("viavai-whatsapp-nudge")) {
    window.setTimeout(() => whatsappNudge.classList.add("is-visible"), reduceMotion ? 400 : 2600);
  }
} catch {
  window.setTimeout(() => whatsappNudge.classList.add("is-visible"), 2600);
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
