# HANDOVER · jacobnoon.com

**Stand:** Mai 2026
**Zweck:** Übergabe zwischen Geräten / Claude-Sessions. Wenn du auf einem neuen PC arbeitest oder eine frische Claude-Konversation startest, gib diese Datei zu lesen — der Kontext ist dann sofort da.

---

## 1 · Projekt-Überblick

Eine **statische HTML/CSS/JS-Webseite** für Jacob Noon (Trainer, Coach, Mediator, Berlin). Zweisprachig DE/EN. Bauplatz: dieser OneDrive-Ordner (`Webseite - jacobnoon.com - laptop`). Die produktive Live-Seite läuft aktuell noch auf Jimdo — die neue Version ist noch nicht deployed.

**Geplantes Hosting:** Netlify oder Cloudflare Pages (kostenlos für diese Seitengröße, schnell, statisch). `_redirects`-File für Netlify liegt bereits im Root.

---

## 2 · Routing & Sprachen

**Englisch ist Default.** Wer `jacobnoon.com` aufruft, landet auf `/en/`.

| URL | Inhalt | lang |
|---|---|---|
| `/` | Redirect → `/en/` (Meta-Refresh + JS + Netlify-302) | en |
| `/en/` | Englische Startseite | en |
| `/de/` | Deutsche Startseite | de |
| `/trainings/`, `/coaching/`, `/vita/`, `/schnabeltrifftohr/`, `/impressum/`, `/datenschutz/`, `/agb/`, `/widerruf/`, `/needy-podcast/` | Deutsche Unterseiten (top-level, **nicht** unter `/de/`!) | de |
| `/en/trainings/`, `/en/coaching/`, `/en/about/`, `/en/schnabeltrifftohr/`, `/en/imprint/`, `/en/privacy/`, `/en/terms/`, `/en/cancellation/`, `/en/needy-podcast/` | Englische Unterseiten | en |

**Warum DE-Unterseiten nicht unter `/de/`?** Damit bestehende Backlinks und vor allem die **QR-Codes auf den gedruckten Schnabel-trifft-Ohr-Karten** weiter funktionieren — die zeigen alle auf `https://www.jacobnoon.com/schnabeltrifftohr/{figur}/`.

**Nav-Reihenfolge (Mai 2026):** About/Über mich → Trainings → Coaching & Mediation → Other/Sonstiges (Dropdown: Schnabel trifft Ohr, Needy Podcast) → Sprachtoggle → Contact CTA.

**Sprachumschalter:** `components.js` (im Root) baut Nav und Footer dynamisch je nach URL und mappt DE↔EN inklusive Charakter-Detail-Seiten und Rechtsseiten.

---

## 3 · Aktive externe Dienste & Konten

### Stripe
- **Account:** Jacobnoon (`acct_1PSz4I08BN2LT5CT`)
- **Produkt:** „Schnabel Trifft Ohr - Das Kartenspiel" (`prod_UWco8PRxdsoreg`)
- **Aktiver Preis:** €23,99 inkl. MwSt (der alte €29,99-Preis sollte archiviert werden)
- **Payment Link:** `https://buy.stripe.com/3cI3cnaj57ZubOPbmg3F600`
- **Versandtarife:** Deutschland 0 €, EU 9,99 €
- **MCP-Connector:** verbunden, aber **Read-Only**. Für direktes Erstellen/Ändern von Produkten/Preisen aus dem Chat heraus müsste der Connector mit Write-Scopes neu verbunden werden.

### Calendly
- **Virtual Coffee:** `https://calendly.com/jacobnoon/virtual-coffee`
- Eingebaut als CTA auf: EN+DE Landing-Hero, EN+DE Kontakt-Sektion, Vita/About-Sidebar, EN+DE Coaching-Schlusstext

### Email
Alle 17 `mailto:` auf der Seite gehen auf **`mail@jacobnoon.com`**.

### LinkedIn (im Footer)
`https://www.linkedin.com/in/jacob-noon/`
Instagram wurde auf Wunsch entfernt.

---

## 4 · Datei-Inventur

**HTML-Dateien:** 37 insgesamt
- 1 Redirect-Startseite (`/index.html`)
- 12 DE-Seiten (`/de/index.html` + 11 Unterseiten)
- 22 EN-Seiten (`/en/index.html` + 21 Unterseiten, davon 8 Charakter-Detailseiten)
- 2 Charakter-Übersichtsseiten (DE + EN) + 16 Detail-Seiten (8 DE + 8 EN)

**Wichtige Asset-Dateien im Root:**
- `styles.css` — globale Styles inkl. Mobile-Overrides ab Zeile ~995
- `components.js` — Nav + Footer dynamisch, Sprachumschalter-Logik
- `_redirects` — Netlify-Edge-Redirect von `/` auf `/en/`
- `logo.svg`, `favicon.png`, `apple-touch-icon.png`
- `Profilfoto23.jpg` — Original-Portrait (1414×2000, mit weißem Hintergrund)
- `Profilfoto23-cutout.png` — web-optimierte Version mit transparentem Hintergrund (700×990) — wird in beiden Landing-Hero verwendet
- `Jacob Profil ohne Hintergrund.png` — manuell freigestelltes Original vom User (1414×2000) — Quelle für die Cutout-Version
- `training-action.jpg`
- `WhatsApp Bild 2024-05-16 um 10.07.28_2498db7b.jpg` (Werkzeug-Foto)

**Schnabel-trifft-Ohr-Bilder** (`schnabeltrifftohr/img/`):
- `cover.png`, `quadrat.png`
- 8 Figuren-Karten: `sabrina.png`, `sebastian.png`, `benni.png`, `britta.png`, `tina.png`, `tom.png`, `laura.png`, `leo.png` — alle 500×681px, ohne QR-Codes (sauber freigestellt vom User in einem separaten Ordner `schnabelTrifft OHr Figurenkarten Bilder/`)

**PDF im Root:**
- `Schnabel trifft Ohr - Das Kommunikationsspiel.pdf` (65 Seiten, Canva-Export) — Quelle für Cover und Quadrat-Bilder

---

## 5 · Bestätigte Geschäftsdaten (in Impressum/AGB)

- Jacob Noon – Noon Coaching
- **Adresse:** Charlottenburger Straße 138, 13086 Berlin
- **Telefon:** +49 176 82237530
- **E-Mail:** mail@jacobnoon.com
- **USt-IdNr.:** DE319209378
- **Finanzamt:** Pankow/Weißensee
- **Berufsbezeichnung:** Trainer, Coach, Mediator (freiberuflich, DE)

---

## 6 · Offene To-Dos & strategische Entscheidungen

### Bevor der Shop live geht
- [ ] **VerpackG-Registrierung** bei der ZSVR (lucid.verpackungsregister.org) — Pflicht für B2C-Versand, kostet nichts, dauert 20 Min. **Falls noch nicht erledigt.**
- [ ] **AGB & Widerrufsbelehrung** anwaltlich gegenchecken lassen — die Templates folgen DE-Standard, aber bei rechtlichen Texten ist eine Zweitmeinung sinnvoll.
- [ ] Stripe-Test-Bestellung mit echter Karte durchführen, danach refunden — verifiziert: Versandadresse-Abfrage, beide Versandoptionen, Mail-Bestätigung, USt-Ausweis auf Rechnung.

### Inhaltlich offen
- [ ] **Englisches Print-Version des Kartenspiels** — User hat angekündigt, dass es in Arbeit ist. Hinweis-Banner ist bereits auf `/en/schnabeltrifftohr/` integriert. Sobald das Deck verfügbar ist, Banner aktualisieren und ggf. zweiten Stripe-Link für die EN-Edition einbauen.
- [x] **Needy Podcast (DE-Seite)** — ✅ Erledigt Mai 2026. Vollständig ins Deutsche übersetzt. `lang="de"` gesetzt, alle Texte übersetzt.
- [x] **EN Trainings-Struktur** — ✅ Erledigt Mai 2026. „Difficult Conversations" und „Leadership Communication" zu einem Modul (03) zusammengeführt. „Applied Improvisation" als neues Modul 05 hinzugefügt. „Presenting with Impact" ist jetzt 04.

### Optional / Nice-to-have
- [ ] Produktfoto vom Spiel (Hand-mit-Box-Foto) in `schnabeltrifftohr/img/produkt.jpg` ablegen — die Bestell-Sektion zeigt zwischenzeitlich das Cover als Fallback.
- [ ] Stripe MCP Connector mit Write-Scopes neu verbinden, falls Produkte/Preise zukünftig direkt aus Claude geändert werden sollen.

---

## 7 · Wichtige Designentscheidungen (kontextuell)

- **English als Default** wurde strategisch gewählt wegen geplanter UK-Relocation 2027.
- **Statische Webseite** statt CMS — schneller, billiger, weniger Wartung. Hosting auf Netlify/Cloudflare Pages geplant (kostenlos).
- **Shop über Stripe Payment Link** statt eigenem Warenkorb — perfekt für Test-Phase, geringe Komplexität. Bei wachsendem Volumen Snipcart oder Shopify Buy Button als Upgrade-Pfad.
- **Profilfoto im Hero** liegt unten rechts (transparent freigestellt, B&W) — wirkt, als komme Jacob aus dem dunklen Hintergrund hervor.
- **Mobile-Optimierung** läuft über globale Attribut-Selektoren in `styles.css` (am Ende der Datei, ab `MOBILE OVERRIDES`-Block) — fängt alle Inline-Grids ab und kollabiert sie auf 1 Spalte unter 800px.

---

## 8 · Verifizierung (Stand heute)

- ✓ Alle 37 HTML-Seiten validiert
- ✓ 0 kaputte interne Links
- ✓ Alle Anker-Links (`#kontakt`, `#contact`) zeigen auf existierende IDs
- ✓ Alle externen Links nutzen HTTPS
- ✓ Sprach-Konsistenz: `/needy-podcast/` wurde Mai 2026 vollständig ins Deutsche übersetzt
- ✓ QR-Codes auf gedruckten Karten zeigen weiterhin korrekt auf existierende DE-Charakter-Seiten
- ✓ Stripe-Link auf DE und EN Schnabel-Seite identisch und intakt
- ✓ Calendly-Link an 8 Stellen einheitlich
- ✓ EN Trainings-Struktur: 5 Module, an DE angeglichen (Mai 2026)

---

## 9 · So machst du auf dem nächsten PC weiter

1. **OneDrive synchronisieren** lassen, bis dieser Ordner komplett da ist.
2. Eine neue Claude-Session öffnen (Cowork oder Claude Code).
3. Den gleichen Workspace-Ordner verbinden.
4. Diese `HANDOVER.md` zum Einstieg lesen lassen: *„Lies HANDOVER.md im Hauptordner und sag mir, wo wir stehen."*
5. Direkt mit dem nächsten offenen Punkt weitermachen.

---

*Letzte Aktualisierung dieser Datei: Mai 2026 (Session auf neuem PC).*
