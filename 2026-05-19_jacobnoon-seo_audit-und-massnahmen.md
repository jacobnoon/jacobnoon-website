# SEO Audit jacobnoon.com

Stand: 19. Mai 2026
Ziel: Sichtbarkeit bei hochpreisigen Inhouse-Buyern und auf generische Trainer-Keywords. Google Sitelinks für Namenssuche "Jacob Noon".

## TL;DR

Die Seite ist handwerklich sauber gebaut, Meta-Titles und Descriptions sind ordentlich, der Content ist klar positioniert. Aber: die komplette SEO-Infrastruktur fehlt. Keine Sitemap, keine robots.txt, keine Open Graph Tags, keine Schema.org Daten, keine hreflang-Verknüpfung. Damit ist die Seite für Google halb-blind. Es fehlt fast nichts an Inhalt, fast alles an Technik.

Drei Tage konzentrierte Arbeit bringen den Großteil. Sitelinks für Namenssuche bekommst du erst, wenn Search Console eingerichtet ist und Google die Seite ein paar Monate sauber gecrawlt hat.

## Was Google heute sieht

| Element | Status | Konsequenz |
|---|---|---|
| `sitemap.xml` | fehlt | Google muss raten, was es crawlen soll |
| `robots.txt` | fehlt | Keine Crawl-Steuerung, keine Sitemap-Referenz |
| Open Graph Tags (og:title, og:image, og:description) | fehlen überall | LinkedIn und Slack zeigen kaputte Previews, wenn jemand deine Seite teilt |
| Schema.org Structured Data | fehlt komplett | Keine Chance auf Rich Results, kein Knowledge Panel |
| hreflang DE/EN | fehlt | Google weiß nicht, dass `/trainings/` und `/en/trainings/` Sprachvarianten sind |
| Canonical Tags | nur auf Root | Risiko von Duplicate Content zwischen DE und EN |
| Navigation | per JS injiziert (`components.js`) | Crawler bekommen das mit, aber es ist suboptimal für Indexierung |
| Root-Redirect | `/` führt zu `/en/` | Bei DACH-Zielgruppe (Lufthansa, BSH, Aareal) strategisch fragwürdig |
| Title Tags | vorhanden, sauber | OK, lassen sich noch keywordoptimieren |
| Meta Descriptions | vorhanden, sauber | OK |
| Mobile / Viewport | gesetzt | OK |
| HTTPS, Performance | (vermutlich Netlify default, OK) | OK |

## Sitelinks: was du wirklich wissen musst

Google Sitelinks sind die zusätzlichen Unterlinks, die manchmal unter dem Haupttreffer auftauchen, zum Beispiel "Trainings", "Über mich", "Coaching", "Kontakt". Sie sind weiterhin sehr aktuell, gerade für Personenmarken. Aber:

1. Du kannst sie nicht beantragen oder kaufen. Google entscheidet algorithmisch.
2. Sie erscheinen fast nur bei navigationalen Suchanfragen, also wenn jemand gezielt "Jacob Noon" oder "jacobnoon" googelt und du dort sicher auf Position 1 stehst.
3. Voraussetzungen: klare Seitenstruktur, eindeutige Hauptnavigation mit beschreibenden Anker-Texten, ausreichend Traffic, saubere interne Verlinkung, Search Console aktiv.

Realistischer Zeithorizont: bei korrekter Umsetzung der Maßnahmen unten kommen Sitelinks für "Jacob Noon" typischerweise nach drei bis sechs Monaten von selbst.

## Quick Wins (1 bis 3 Tage Aufwand, sofortige Wirkung)

| # | Maßnahme | Wo | Aufwand | Warum |
|---|---|---|---|---|
| 1 | `sitemap.xml` im Root erstellen | `/sitemap.xml` | 30 Min | Google kann alle Seiten finden und priorisieren |
| 2 | `robots.txt` mit Sitemap-Referenz | `/robots.txt` | 5 Min | Standard, signalisiert Professionalität |
| 3 | Open Graph Tags in alle `<head>` | jede `index.html` | 2 h | LinkedIn-Sharing sieht endlich nicht mehr kaputt aus |
| 4 | Canonical Tag auf jeder Seite | jede `index.html` | 1 h | Klärt Duplicate-Content-Risiko |
| 5 | hreflang-Verknüpfung DE/EN | jede zweisprachige Seite | 2 h | Google bedient deutsche User mit DE-Version, englische mit EN |
| 6 | Schema.org "Person" Markup | `de/index.html`, `en/index.html` | 1 h | Voraussetzung für Knowledge Panel und Sitelinks |
| 7 | Schema.org "ProfessionalService" | `de/index.html` | 30 Min | Lokales Business-Signal an Google (Berlin) |
| 8 | OG-Image (1200x630) erstellen | `/og-image.jpg` | 30 Min | Wird beim Teilen gezeigt, aktuell totaler Fehler |
| 9 | Google Search Console einrichten | search.google.com | 30 Min | Ohne das kein Monitoring, keine Diagnose, keine Sitemap-Submission |
| 10 | Bing Webmaster Tools einrichten | bing.com/webmasters | 15 Min | 5 bis 10 Prozent zusätzlicher Traffic von Konzerneinkäufern, die Edge nutzen |

## Strategische Entscheidung: Default-Sprache

Aktuell leitet `jacobnoon.com` per 302 auf `/en/` um. Deine Kunden sind aber Konzerne und Mittelstand in DACH (Lufthansa Technik, Aareal, BSH, Vattenfall). Eine deutsche HR-Entwicklerin googelt "Jacob Noon Trainer" und landet auf englischem Content. Das ist ein Bruch.

Empfehlung: Country-based Redirect über Netlify. Deutsche IP oder `Accept-Language: de` zu `/de/`, alle anderen zu `/en/`. Beides per 302, niemals 301, weil sonst Google immer nur eine Version sieht.

Alternativ: `/de/` als Default, `/en/` als Sprachoption. Das passt besser zur aktuellen Realität deiner Kundenstruktur. England-Relocation 2027 ist erst ab dann ein Argument für EN als Default.

## Keyword-Strategie für deine zwei Zielgruppen

### Hochpreisige Inhouse-Buyer (HR-Entwickler, Trainingseinkäufer)

Diese Leute suchen nicht "Trainer Berlin". Sie suchen sehr spezifisch nach Methoden, Problemstellungen oder Empfehlungen.

| Suchintention | Beispiel-Queries | Wo du landen musst |
|---|---|---|
| Methode | "Konfliktmanagement Training Inhouse", "Schwierige Gespräche Führungskräfte" | Trainings-Seite, Konflikt-Subpage |
| Problem | "Eskalierende Konflikte Team Moderation", "Verhandlungstraining Einkauf" | Coaching-Seite, Trainings-Subpage |
| Persönlich | "Jacob Noon", "jacobnoon" | Vita, Homepage |
| Inhalt | "FEED-Modell Kommunikation", "Schulz von Thun Training" | Blog (existiert noch nicht!) |

### Generische Trainer-Keywords

Hier konkurrierst du mit haufenweise Anbietern. Realistisch ist die Long-Tail-Strategie:

| Statt | Lieber |
|---|---|
| "Konfliktmanagement Trainer" (zu hart umkämpft) | "Konfliktmanagement Training Konzerne Inhouse" |
| "Verhandlungstraining" | "Harvard Verhandlung Training Berlin" |
| "Kommunikationstraining" | "Schwierige Gespräche Führungskräfte Training" |

## Strategische Investitionen (Wochen, mittelfristig)

| # | Maßnahme | Aufwand | ROI-Horizont |
|---|---|---|---|
| 1 | Themenseiten für jedes Kernformat als eigene URL ausbauen | 2 bis 3 Tage | 3 bis 6 Monate |
| 2 | Blog oder "Insights"-Bereich mit Methoden-Erklärern (FEED, EAT, Güllegrube-Prinzip) | laufend, 1 Artikel/Monat | 6 bis 12 Monate |
| 3 | Case Studies anonymisiert (Lufthansa Technik HR Business Partner als anonymes Beispiel) | je Case 2 h | 3 bis 6 Monate |
| 4 | Backlinks aus Trainingsanbieter-Netzwerken (Cegos, MR education, Yellow Park) | Outreach, 5 h | 3 Monate |
| 5 | LinkedIn-Profil mit jacobnoon.com verknüpfen, Schema.org `sameAs` | 30 Min | sofort |
| 6 | Schema.org `Course` für jedes Training (Suchergebnisse als Kurs-Karten) | 4 h | 3 Monate |
| 7 | FAQ-Schema auf Trainings-Seiten | 2 h | 1 Monat |

## Konkrete Code-Snippets

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://jacobnoon.com/sitemap.xml
```

### Open Graph Tag-Block (in jeden `<head>` einfügen)

```html
<meta property="og:type" content="website">
<meta property="og:title" content="Jacob Noon – Trainer & Coach für Konflikt, Verhandlung & Kommunikation">
<meta property="og:description" content="Inhouse-Trainings für Konzerne und Mittelstand. Konfliktmanagement, Verhandlung, Führungskommunikation. Berlin.">
<meta property="og:image" content="https://jacobnoon.com/og-image.jpg">
<meta property="og:url" content="https://jacobnoon.com/de/">
<meta property="og:locale" content="de_DE">
<meta property="og:locale:alternate" content="en_US">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Jacob Noon – Trainer & Coach">
<meta name="twitter:description" content="Inhouse-Trainings für Konzerne und Mittelstand. Konflikt, Verhandlung, Kommunikation.">
<meta name="twitter:image" content="https://jacobnoon.com/og-image.jpg">
```

### hreflang (in `<head>` jeder DE/EN-Paarseite)

Auf `/de/index.html`:
```html
<link rel="alternate" hreflang="de" href="https://jacobnoon.com/de/">
<link rel="alternate" hreflang="en" href="https://jacobnoon.com/en/">
<link rel="alternate" hreflang="x-default" href="https://jacobnoon.com/de/">
<link rel="canonical" href="https://jacobnoon.com/de/">
```

Auf `/en/index.html`:
```html
<link rel="alternate" hreflang="de" href="https://jacobnoon.com/de/">
<link rel="alternate" hreflang="en" href="https://jacobnoon.com/en/">
<link rel="alternate" hreflang="x-default" href="https://jacobnoon.com/de/">
<link rel="canonical" href="https://jacobnoon.com/en/">
```

(Das `x-default` zeigt Google, welche Version es bei unbekannter Sprache servieren soll. Bei dir Deutsch.)

### Schema.org Person (in `/de/index.html` vor `</head>`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jacob Noon",
  "jobTitle": "Trainer, Coach, Mediator",
  "url": "https://jacobnoon.com/de/",
  "image": "https://jacobnoon.com/Profilfoto23.jpg",
  "description": "Trainer, Coach und Mediator für Konfliktmanagement, Verhandlung und Führungskommunikation. Inhouse-Trainings für Konzerne und Mittelstand.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Berlin",
    "addressCountry": "DE"
  },
  "sameAs": [
    "https://www.linkedin.com/in/jacobnoon",
    "https://jacobnoon.com/en/"
  ],
  "knowsAbout": [
    "Konfliktmanagement",
    "Verhandlungstraining",
    "Führungskräfteentwicklung",
    "Kommunikationstraining",
    "Mediation",
    "Improvisationstheater"
  ]
}
</script>
```

(LinkedIn-URL bitte auf deine echte tauschen.)

### sitemap.xml (Grundgerüst, alle DE-Seiten beispielhaft)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://jacobnoon.com/de/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://jacobnoon.com/de/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://jacobnoon.com/en/"/>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jacobnoon.com/trainings/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://jacobnoon.com/trainings/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://jacobnoon.com/en/trainings/"/>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jacobnoon.com/coaching/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://jacobnoon.com/coaching/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://jacobnoon.com/en/coaching/"/>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jacobnoon.com/vita/</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://jacobnoon.com/vita/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://jacobnoon.com/en/about/"/>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jacobnoon.com/schnabeltrifftohr/</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jacobnoon.com/needy-podcast/</loc>
    <priority>0.6</priority>
  </url>
</urlset>
```

(Vollständige Liste folgt im Build, Schnabel-Figuren und EN-Seiten gehören dazu.)

## Was du jetzt nicht tun solltest

1. **Keine SEO-Agentur beauftragen.** Bei diesem Seitenumfang und deiner Zielgruppenklarheit ist 80 Prozent der Arbeit handwerkliches Setup, das einmal richtig gemacht reicht. Eine Agentur verkauft dir Monatspauschalen für laufendes "Monitoring".
2. **Keine Keyword-Stuffing-Texte schreiben.** Deine aktuelle Sprache ist deine Differenzierung. "Konflikt ist kein Bug, sondern ein Feature" rankt nicht direkt, aber konvertiert. Bleibt.
3. **Kein Linkkauf.** Bei einer Personenmarke wie deiner ist Authentizität alles. Lieber drei echte Kunden-Quotes als 50 dubiose Backlinks.
4. **Keine AMP-Implementierung.** Das ist seit 2023 tot.

## Empfohlene Reihenfolge

Tag 1: Search Console einrichten, robots.txt, sitemap.xml, hreflang auf alle Hauptseiten, Schema.org Person auf DE-Index.
Tag 2: Open Graph Tags auf alle Seiten, og-image.jpg gestalten (das übernehme ich gerne), Canonical-Tags.
Tag 3: Schema.org auf restliche Hauptseiten, Default-Sprach-Redirect via Netlify, Bing Webmaster Tools.

Danach: 4 Wochen abwarten, Search Console beobachten, dann nächste Iteration.

## Nächster Schritt

Sag Bescheid, womit ich anfangen soll. Drei Optionen:

1. **Komplettes Tag-1-Paket bauen.** Ich schreibe sitemap.xml, robots.txt und die hreflang/Canonical-Blöcke und du committest.
2. **Erstmal nur Search Console.** Das macht das größte Sichtbarkeitslicht an, alles andere folgt.
3. **og-image gestalten.** Damit dein nächster LinkedIn-Post nicht wie ein technischer Unfall aussieht.
