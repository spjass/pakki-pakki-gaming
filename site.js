const translations = {
  en: {
    "meta.title": "Retro Hockey Manager — Coming soon | Pakki-Pakki Gaming",
    "meta.description": "Retro Hockey Manager is coming soon from Pakki-Pakki Gaming, an independent game studio in Finland.",
    "meta.ogDescription": "A new season is waiting. Retro Hockey Manager is coming soon.",
    "accessibility.skip": "Skip to teaser",
    "brand.homeLabel": "Pakki-Pakki Gaming",
    "locale.aria": "Choose language",
    "teaser.signal": "A new season is waiting",
    "teaser.line": "The ice remembers.",
    "teaser.release": "Coming soon",
    "company.about": "Independent game studio · Finland",
    "company.rights": "All rights reserved."
  },
  fi: {
    "meta.title": "Retro Hockey Manager — Tulossa pian | Pakki-Pakki Gaming",
    "meta.description": "Retro Hockey Manager on pian ilmestyvä Pakki-Pakki Gamingin peli. Pakki-Pakki Gaming on suomalainen itsenäinen pelistudio.",
    "meta.ogDescription": "Uusi kausi odottaa. Retro Hockey Manager on tulossa pian.",
    "accessibility.skip": "Siirry mainokseen",
    "brand.homeLabel": "Pakki-Pakki Gaming",
    "locale.aria": "Valitse kieli",
    "teaser.signal": "Uusi kausi odottaa",
    "teaser.line": "Jää muistaa.",
    "teaser.release": "Tulossa pian",
    "company.about": "Itsenäinen pelistudio · Suomi",
    "company.rights": "Kaikki oikeudet pidätetään."
  }
};

const storageKey = "pakki-pakki-locale";

function savedLocale() {
  try {
    const value = localStorage.getItem(storageKey);
    return value === "en" || value === "fi" ? value : null;
  } catch {
    return null;
  }
}

function browserLocale() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language?.toLowerCase().startsWith("fi")) ? "fi" : "en";
}

function applyLocale(locale, persist = false) {
  const strings = translations[locale] ?? translations.en;

  document.documentElement.lang = locale;
  document.title = strings["meta.title"];
  document.querySelector('meta[name="description"]')?.setAttribute("content", strings["meta.description"]);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", strings["meta.title"]);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", strings["meta.ogDescription"]);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", locale === "fi" ? "fi_FI" : "en_US");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = strings[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = strings[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.locale === locale));
  });

  if (persist) {
    try {
      localStorage.setItem(storageKey, locale);
    } catch {
      // The language switch remains functional when storage is unavailable.
    }
  }
}

document.querySelectorAll("[data-locale]").forEach((button) => {
  button.addEventListener("click", () => applyLocale(button.dataset.locale, true));
});

document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
applyLocale(savedLocale() ?? browserLocale());
