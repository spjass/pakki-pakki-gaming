const translations = {
  en: {
    "meta.title": "Pakki-Pakki Gaming — Independent game studio",
    "meta.description": "Pakki-Pakki Gaming is an independent game studio developing HockeyGM, a persistent online hockey management game.",
    "accessibility.skip": "Skip to content",
    "brand.homeLabel": "Pakki-Pakki Gaming, home",
    "nav.aria": "Primary navigation",
    "nav.project": "HockeyGM",
    "nav.studio": "Studio",
    "locale.aria": "Choose language",
    "hero.eyebrow": "Independent game studio",
    "hero.titleTop": "Games built for",
    "hero.titleBottom": "the long season.",
    "hero.intro": "Pakki-Pakki Gaming is developing HockeyGM — a persistent online hockey management game about building a club, outthinking rival managers and living with every result.",
    "status.aria": "HockeyGM development status",
    "status.projectLabel": "Project",
    "status.stateLabel": "Status",
    "status.stateValue": "In development",
    "status.releaseLabel": "Release",
    "status.releaseValue": "Coming soon",
    "visual.rinkAlt": "Pixel-art ice hockey rink from HockeyGM.",
    "visual.build": "Pre-season build",
    "visual.systems": "Match systems online",
    "project.eyebrow": "Featured project",
    "project.title": "Build the club. Set the lines. Watch it play out.",
    "project.intro": "HockeyGM is a persistent player-versus-player management game where every signing, tactic and season becomes part of your club's history.",
    "project.clubTitle": "Run the whole club",
    "project.clubBody": "Shape the roster, staff, finances, tactics and arena around a long-term plan.",
    "project.competeTitle": "Compete through real seasons",
    "project.competeBody": "Face other managers in leagues that keep moving, with consequences that carry forward.",
    "project.replayTitle": "Replay every result",
    "project.replayBody": "Watch matches unfold live, return to the key moments and learn before the next puck drops.",
    "studio.eyebrow": "Pakki-Pakki Gaming",
    "studio.title": "Independent studio. Deep systems.",
    "studio.body": "We make management games where choices compound, stories emerge and a season feels worth remembering.",
    "footer.rights": "All rights reserved.",
    "footer.location": "Made in Finland. Built for the rink."
  },
  fi: {
    "meta.title": "Pakki-Pakki Gaming — Itsenäinen pelistudio",
    "meta.description": "Pakki-Pakki Gaming on itsenäinen pelistudio, joka kehittää jatkuvasti etenevää HockeyGM-jääkiekkomanageripeliä.",
    "accessibility.skip": "Siirry sisältöön",
    "brand.homeLabel": "Pakki-Pakki Gaming, etusivu",
    "nav.aria": "Päänavigaatio",
    "nav.project": "HockeyGM",
    "nav.studio": "Studio",
    "locale.aria": "Valitse kieli",
    "hero.eyebrow": "Itsenäinen pelistudio",
    "hero.titleTop": "Pelejä pitkää",
    "hero.titleBottom": "kautta varten.",
    "hero.intro": "Pakki-Pakki Gaming kehittää HockeyGM:ää — jatkuvasti etenevää verkossa pelattavaa jääkiekkomanageripeliä, jossa rakennat seuraa, päihität kilpailevat managerit taktiikalla ja elät jokaisen tuloksen kanssa.",
    "status.aria": "HockeyGM:n kehitystilanne",
    "status.projectLabel": "Projekti",
    "status.stateLabel": "Tila",
    "status.stateValue": "Kehityksessä",
    "status.releaseLabel": "Julkaisu",
    "status.releaseValue": "Tulossa",
    "visual.rinkAlt": "HockeyGM:n pikselitaiteinen jääkiekkokaukalo.",
    "visual.build": "Ennakkokauden versio",
    "visual.systems": "Ottelujärjestelmät käynnissä",
    "project.eyebrow": "Esittelyssä",
    "project.title": "Rakenna seura. Kokoa ketjut. Katso, miten peli ratkeaa.",
    "project.intro": "HockeyGM on jatkuvasti etenevä manageripeli, jossa jokaisesta sopimuksesta, taktiikasta ja kaudesta tulee osa seurasi historiaa.",
    "project.clubTitle": "Johda koko seuraa",
    "project.clubBody": "Rakenna kokoonpano, henkilöstö, talous, taktiikat ja areena pitkän aikavälin suunnitelmasi ympärille.",
    "project.competeTitle": "Kilpaile elävissä sarjoissa",
    "project.competeBody": "Kohtaa muut managerit jatkuvasti etenevissä sarjoissa, joissa päätösten seuraukset kulkevat mukana.",
    "project.replayTitle": "Palaa jokaiseen tulokseen",
    "project.replayBody": "Katso ottelut suorana, palaa ratkaisuhetkiin ja opi ennen seuraavaa kiekonpudotusta.",
    "studio.eyebrow": "Pakki-Pakki Gaming",
    "studio.title": "Itsenäinen studio. Syvät järjestelmät.",
    "studio.body": "Teemme manageripelejä, joissa valintojen vaikutukset kasautuvat, tarinat syntyvät itsestään ja kausi jää mieleen.",
    "footer.rights": "Kaikki oikeudet pidätetään.",
    "footer.location": "Tehty Suomessa. Rakennettu kaukaloon."
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
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", strings["meta.description"]);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", locale === "fi" ? "fi_FI" : "en_US");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = strings[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = strings[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = strings[element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.locale === locale));
  });

  if (persist) {
    try {
      localStorage.setItem(storageKey, locale);
    } catch {
      // Locale persistence is an enhancement; the switch still works without storage.
    }
  }
}

document.querySelectorAll("[data-locale]").forEach((button) => {
  button.addEventListener("click", () => applyLocale(button.dataset.locale, true));
});

document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
applyLocale(savedLocale() ?? browserLocale());
