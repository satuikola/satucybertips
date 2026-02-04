// Täytä tähän tammikuun postaukset. Voit kopioida riviä ja muokata.
// date muodossa YYYY-MM-DD
// January 2026 posts (from your content archive)
// date format: YYYY-MM-DD
const POSTS = [
  {
    date: "2026-01-01",
    title: "Kyberturva 2026 ja AI",
    category: "Arjen tietoturva",
    tags: ["ai", "huijaukset", "rutiinit"],
    excerpt: "Huijaukset muuttuvat uskottavammiksi, joten pienet tarkistusrutiinit korostuvat.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-02",
    title: "Identiteetti",
    category: "Identiteetti",
    tags: ["mfa", "salasanat", "tiliturva"],
    excerpt: "Salasana ei yksin riitä: MFA ja uniikit salasanat ovat perusvyöt.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-03",
    title: "Päivitykset",
    category: "Paivitysrutiini",
    tags: ["paivitykset", "selain", "puhelin", "tietoturva"],
    excerpt: "15 minuutin turvatarkastus pienentää riskiä yllättävän paljon.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-04",
    title: "Viikkokooste: identiteetti ja päivitykset",
    category: "Kooste",
    tags: ["kooste", "mfa", "paivitykset"],
    excerpt: "Yksi teko tanaan: tarkista identiteetti ja paivitykset, pienin askelin.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-05",
    title: "Huijausten tunnistus",
    category: "Huijaukset",
    tags: ["huijaukset", "lahettaja", "linkit"],
    excerpt: "Tarkista lahettaja ja kirjaudu aina palveluun itse, ei linkista.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-06",
    title: "Varmuuskopiot",
    category: "Varmuuskopiot",
    tags: ["backup", "varmuuskopio", "palautus"],
    excerpt: "Varmuuskopio on tylsa kunnes se pelastaa paivan.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-07",
    title: "Tekstiviestihuijaukset",
    category: "Huijaukset",
    tags: ["smishing", "huijaukset", "linkit"],
    excerpt: "Yksi linkki riittaa: ala klikkaa kiireessa, tarkista aina ennen toimimista.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-08",
    title: "Työ ja koti erikseen",
    category: "Arjen rajaukset",
    tags: ["tyo-koti", "selaimet", "profiilit"],
    excerpt: "Erota työ ja vapaa: eri profiilit ja laitteet, vahan vaivaa ja paljon turvaa.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-09",
    title: "MFA fatigue",
    category: "Identiteetti",
    tags: ["mfa", "tilikaappaus", "toimintamalli"],
    excerpt: "Ala hyväksy pommitusta: vaihda salasana ja tarkista kirjautumishistoria heti.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-10",
    title: "Selainlaajennukset",
    category: "Arjen tietoturva",
    tags: ["selain", "laajennukset", "hyokkayspinta"],
    excerpt: "Vahemman lisäosia tarkoittaa pienempaa hyokkayspintaa, siivoa kolme asiaa.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-11",
    title: "Viikkokooste: pysähdy, siivoa, erottele",
    category: "Kooste",
    tags: ["kooste", "rutiinit", "selain", "tyo-koti"],
    excerpt: "Pieni yhteenveto: pysähdy, siivoa turhat ja pidä arki selkeina rajauksina.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-12",
    title: "Kotiverkko ja reititin",
    category: "Kotiverkko",
    tags: ["reititin", "wifi", "kotiverkko"],
    excerpt: "Reititin ei saa olla unohdettu laite: tee 5 minuutin tarkistus.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-13",
    title: "Tunnusvuoto",
    category: "Identiteetti",
    tags: ["tunnusvuoto", "sahkoposti", "palautus"],
    excerpt: "Kun vuoto osuu: tee nelja askelta heti ja aloita sahkopostista.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-14",
    title: "Sosiaalinen manipulointi",
    category: "Social engineering",
    tags: ["sosiaalinen-manipulointi", "kiire", "varmistus"],
    excerpt: "Hyokkays alkaa pyynnosta: varmista kanava ja katkaise kiire ennen toimintaa.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-15",
    title: "Julkinen Wi-Fi",
    category: "Kotiverkko",
    tags: ["wifi", "vpn", "auto-join"],
    excerpt: "Top 3: VPN, auto-join pois ja tarkista verkon nimi tarkasti.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-16",
    title: "Raportointi",
    category: "Arjen tietoturva",
    tags: ["ilmoittaminen", "toimintamalli", "turva"],
    excerpt: "Epäily riittaa: ilmoita ja katkaise ketju, mieluummin liian aikaisin kuin myohaan.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-17",
    title: "AI vs AI",
    category: "Arjen tietoturva",
    tags: ["ai", "automaatio", "tarkistusrutiini"],
    excerpt: "Ihminen paattaa, automaatio auttaa: tarkistusrutiinit pitavat sinut kartalla.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-18",
    title: "Viikkokooste: luottamus ja varmistus",
    category: "Kooste",
    tags: ["kooste", "varmistus", "rutiinit"],
    excerpt: "Luottamus on hyva, varmistus parempi: tee yksi pieni tarkistus tanaan.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-19",
    title: "MFA käytännössä",
    category: "Identiteetti",
    tags: ["mfa", "koodit", "tiliturva"],
    excerpt: "MFA suojaa vain jos koodi pysyy sinulla, ei koskaan eteenpain.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-20",
    title: "Laitteen lukitus",
    category: "Arjen tietoturva",
    tags: ["lukitus", "laite", "tilikaappaus"],
    excerpt: "Lukitus on ensimmainen este tilikaappaukselle: tee nelja nopeaa tarkistusta.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-21",
    title: "Salasanamanageri",
    category: "Identiteetti",
    tags: ["salasanamanageri", "salasanat", "alku"],
    excerpt: "Aloita yhdesta tilista, ei tarvitse olla taydellista heti.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-22",
    title: "Päivitysrutiini kalenteriin",
    category: "Paivitysrutiini",
    tags: ["paivitykset", "kalenteri", "rutiinit"],
    excerpt: "Laita kalenteriin yksi hetki viikossa, kevyt rutiini riittaa.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-23",
    title: "3-2-1 varmuuskopio",
    category: "Varmuuskopiot",
    tags: ["3-2-1", "backup", "offline"],
    excerpt: "Synkronointi ei ole varmuuskopio: offline-kopio ratkaisee kun palaa pahasti.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-24",
    title: "Puheluhuijaukset",
    category: "Huijaukset",
    tags: ["puheluhuijaus", "koodit", "pankki"],
    excerpt: "Katkaise puhelu, ala anna koodeja ja soita itse viralliseen numeroon.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-26",
    title: "Viikkokooste: turvavyöt arkeen",
    category: "Kooste",
    tags: ["kooste", "mfa", "lukitus", "paivitykset", "backup", "huijaukset"],
    excerpt: "Turvavyot arkeen: MFA, lukitus, salasanat, paivitykset, backup ja puhelut haltuun.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-27",
    title: "Rutiinit",
    category: "Arjen tietoturva",
    tags: ["rutiinit", "tavat", "arki"],
    excerpt: "Tee tarkeasta asiasta tapa, ei tavoite. Pieni toisto voittaa isot suunnitelmat.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-28",
    title: "Kiire",
    category: "Social engineering",
    tags: ["kiire", "pysahdys", "huijaukset"],
    excerpt: "10 sekunnin pysahdys ennen toimintaa katkaisee huijarin autopilotin.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-29",
    title: "3 tärkeintä",
    category: "Arjen tietoturva",
    tags: ["palautustili", "siivous", "toiminta"],
    excerpt: "Kolme ydinta: palautustili, ympariston siivous ja toimi heti kun epailet.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-30",
    title: "Helmikuun teema: Social Engineering",
    category: "Teaser",
    tags: ["social-engineering", "tunteet", "huijaukset"],
    excerpt: "Tunne on hyokkayspinta: helmikuu keskittyy siihen, miten manipulointi toimii arjessa.",
    linkedinUrl: "https://www.linkedin.com/"
  },
  {
    date: "2026-01-31",
    title: "Kuukauden päätös",
    category: "Kooste",
    tags: ["yhteenveto", "kiitos", "harkka", "junior"],
    excerpt: "Kiitos kuukaudesta: yhteenveto opeista ja kutsu vinkkaamaan harkka- ja juniorimahdollisuuksia.",
    linkedinUrl: "https://www.linkedin.com/"
  }
];


