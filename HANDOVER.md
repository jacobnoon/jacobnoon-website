# HANDOVER · jacobnoon.com

**Stand:** 18. Mai 2026
**Zweck:** Übergabe zwischen Geräten / Claude-Sessions. Wenn du auf einem neuen PC arbeitest oder eine frische Claude-Konversation startest, gib diese Datei zu lesen — der Kontext ist dann sofort da.

---

## 1 · Projekt-Überblick

Eine **statische HTML/CSS/JS-Webseite** für Jacob Noon (Trainer, Coach, Mediator, Berlin). Zweisprachig DE/EN. Bauplatz: dieser OneDrive-Ordner (`Webseite - jacobnoon.com`).

**Status: Deployment läuft. Domain-Transfer läuft. Noch nicht live unter jacobnoon.com.**

---

## 2 · Hosting & Deployment (Stand Mai 2026)

### GitHub
- **Repository:** `jacobnoon-website` unter Jacobs GitHub-Account
- **Verbunden mit:** Netlify (Auto-Deploy bei jedem Push)
- **Workflow:** Dateien im OneDrive-Ordner ändern → GitHub Desktop öffnen → Commit → Push → Netlify deployt automatisch in ~30 Sek.

### Netlify
- **Site-Name:** `scintillating-parfait-b4a7fa`
- **Test-URL:** `https://scintillating-parfait-b4a7fa.netlify.app/en/`
- **Custom Domain konfiguriert:** `jacobnoon.com` (noch nicht aktiv, DNS zeigt noch auf Jimdo)
- **Plan:** Free (reicht für diese Seite dauerhaft)
- **Deploy-Status:** Published ✅

### Auf neuem Laptop einrichten
1. OneDrive synchronisieren lassen (Ordner `Webseite - jacobnoon.com` muss vollständig da sein)
2. **GitHub Desktop** installieren: desktop.github.com
3. Einloggen mit Jacobs GitHub-Account
4. „Clone a repository" → `jacobnoon-website` auswählen → lokalen Pfad wählen
5. Alle Dateien aus dem OneDrive-Ordner in den geklonten Ordner kopieren (falls noch nicht geschehen)
6. Ab dann: Änderungen im OneDrive-Ordner → GitHub Desktop → Commit → Push

---

## 3 · Domain-Transfer (läuft gerade)

**Ausgangslage:** Domain `jacobnoon.com` war bei Jimdo registriert. Jimdo erlaubt keine Nameserver-Änderungen — daher kein direkter Weg zu Cloudflare oder Netlify.

**Lösung:** Transfer zu **Namecheap** via Auth-Code.

| Was | Status |
|---|---|
| Auth-Code von Jimdo angefordert | ✅ |
| Transfer bei Namecheap eingeleitet | ✅ (18. Mai 2026, Order 202798514) |
| Domain-Privacy aktiviert | ✅ |
| Transfer abgeschlossen | ⏳ 5–7 Werktage |
| DNS auf Netlify umstellen | ⏳ nach Transfer |
| Jimdo-Abo kündigen | ⏳ nach Transfer |

**Nach dem Transfer:**
1. Bei Namecheap einloggen → `jacobnoon.com` → Advanced DNS
2. DNS-Einträge für Netlify setzen (Netlify zeigt die Werte unter Domain Management)
3. Überprüfen ob Microsoft 365 MX-Record korrekt übernommen wurde:
   - Host: `@`, Typ: MX, Wert: `jacobnoon-com.mail.protection.outlook.com`, Priorität: 1
4. Jimdo-Vertrag kündigen: Jimdo → Vertragsinhalte → Jimdo-Vertrag kündigen

---

## 4 · Routing & Sprachen

**Englisch ist Default.** Wer `jacobnoon.com` aufruft, landet auf `/en/`.

| URL | Inhalt | lang |
|---|---|---|
| `/` | Redirect → `/en/` (Meta-Refresh + JS + Netlify-302) | en |
| `/en/` | Englische Startseite | en |
| `/de/` | Deutsche Startseite | de |
| `/trainings/`, `/coaching/`, `/vita/`, `/schnabeltrifftohr/`, `/impressum/`, `/datenschutz/`, `/agb/`, `/widerruf/`, `/needy-podcast/` | Deutsche Unterseiten (top-level, **nicht** unter `/de/`!) | de |
| `/en/trainings/`, `/en/coaching/`, `/en/about/`, `/en/schnabeltrifftohr/`, `/en/imprint/`, `/en/privacy/`, `/en/terms/`, `/en/cancellation/`, `/en/needy-podcast/` | Englische Unterseiten | en |

**Warum DE-Unterseiten nicht unter `/de/`?** QR-Codes auf gedruckten Schnabel-trifft-Ohr-Karten zeigen auf `jacobnoon.com/schnabeltrifftohr/{figur}/` — die müssen weiter funktionieren.

---

## 5 · Aktive externe Dienste & Konten

### Stripe
- **Account:** Jacobnoon (`acct_1PSz4I08BN2LT5CT`)
- **Produkt:** „Schnabel Trifft Ohr - Das Kartenspiel" (`prod_UWco8PRxdsoreg`)
- **Aktiver Preis:** €23,99 inkl. MwSt
- **Payment Link:** `https://buy.stripe.com/3cI3cnaj57ZubOPbmg3F600`
- **Versandtarife:** Deutschland 0 €, EU 9,99 €
- **MCP-Connector:** verbunden, aber Read-Only

### Calendly
- **Virtual Coffee:** `https://calendly.com/jacobnoon/virtual-coffee`
- Eingebaut als CTA auf: EN+DE Landing-Hero, EN+DE Kontakt-Sektion, Vita/About-Sidebar, EN+DE Coaching-Schlusstext

### E-Mail
- Alle `mailto:` auf der Seite → `mail@jacobnoon.com`
- **E-Mail-Provider:** Microsoft 365
- **MX-Record:** `jacobnoon-com.mail.protection.outlook.com` (Priorität 1) — nach Domain-Transfer in Namecheap prüfen!

### LinkedIn (im Footer)
`https://www.linkedin.com/in/jacob-noon/`

---

## 6 · Datei-Inventur

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
- `Profilfoto23-cutout.png` — web-optimierte Version mit transparentem Hintergrund (700×990)
- `training-action.jpg`

---

## 7 · Bestätigte Geschäftsdaten (in Impressum/AGB)

- Jacob Noon – Noon Coaching
- **Adresse:** Charlottenburger Straße 138, 13086 Berlin
- **Telefon:** +49 176 82237530
- **E-Mail:** mail@jacobnoon.com
- **USt-IdNr.:** DE319209378
- **Finanzamt:** Pankow/Weißensee

---

## 8 · Offene To-Dos

### Dringend (nach Domain-Transfer)
- [ ] DNS in Namecheap auf Netlify umstellen
- [ ] MX-Record für Microsoft 365 in Namecheap prüfen/setzen
- [ ] Jimdo-Abo kündigen (Jimdo → Vertragsinhalte → Jimdo-Vertrag kündigen)

### Bevor der Shop live geht
- [ ] **VerpackG-Registrierung** bei ZSVR (lucid.verpackungsregister.org) — Pflicht für B2C-Versand
- [ ] **AGB & Widerrufsbelehrung** anwaltlich gegenchecken lassen
- [ ] Stripe-Test-Bestellung durchführen und refunden

### Inhaltlich offen
- [ ] **Englisches Print-Version des Kartenspiels** — Hinweis-Banner auf `/en/schnabeltrifftohr/` ist bereits integriert
- [ ] Produktfoto vom Spiel (Hand-mit-Box-Foto) in `schnabeltrifftohr/img/produkt.jpg` ablegen

### Optional
- [ ] Stripe MCP Connector mit Write-Scopes neu verbinden

---

## 9 · Inhaltliche Änderungen (Mai 2026)

- ✅ Needy Podcast (DE) ins Deutsche übersetzt
- ✅ Systemisches Führungsverständnis eingebaut (DE + EN Vita/About: Säule-Kachel + Framework-Eintrag) — ohne explizite Namensnennung
- ✅ Textlicher Feinschliff über alle DE-Seiten + EN-Sync (20. Mai 2026)
- ✅ Trainingsthemen neu strukturiert (20. Mai 2026) — Rückgrat „Konflikt ist der Stoff, Dramaturgie das Handwerk". Fünf Themen mit Konflikt-Winkel-Tags:
  - 01 Konfliktmanagement · Konflikt direkt
  - 02 Schwierige Gespräche & Verhandlung · Konflikt am Tisch (Merge aus Verhandlung + schwierige Gespräche)
  - 03 Führungskommunikation · Konflikt als Feature (Eidenschink: dysfunktional → funktional)
  - 04 Moderation · Konflikt in der Gruppe (Liberating Structures + Deep Democracy/Lewis-Methode; Jacob ist zertifiziert)
  - 05 Wirkungsvoll präsentieren · Konflikt als Motor (Storytelling)
  - Applied Improvisation steht jetzt separat als „Die Methode" (kein nummeriertes Thema)
  - Startseiten (DE + EN): Trainingsthemen-Sektion ist ein 5er-Band mit Winkel-Tags
  - Moderation-Modul grenzt sich explizit von der Mediations-Dienstleistung auf /coaching/ ab

---

## 10 · Wichtige Designentscheidungen

- **Englisch als Default** — strategisch wegen UK-Relocation 2027
- **Statische Webseite** — schneller, günstiger, wartungsarm
- **Shop über Stripe Payment Link** — Test-Phase, geringe Komplexität
- **Profilfoto im Hero** — unten rechts, transparent freigestellt, B&W

---

## 11 · So machst du auf dem nächsten Gerät weiter

1. OneDrive synchronisieren lassen
2. GitHub Desktop installieren und mit GitHub-Account einloggen
3. Repository `jacobnoon-website` klonen
4. Gleichen Workspace-Ordner in Claude Cowork verbinden
5. Diese `HANDOVER.md` lesen lassen: *„Lies HANDOVER.md im Hauptordner und sag mir, wo wir stehen."*

---

*Letzte Aktualisierung: 18. Mai 2026*
