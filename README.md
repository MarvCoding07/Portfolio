# Marvin Schneider – Portfolio

Persönliche Portfolio-Website von Marvin Schneider, ICT-Lernender und Webentwickler aus der Schweiz.

## Seiten

| Datei | Inhalt |
|-------|--------|
| `index.html` | Homepage mit Hero, Tätigkeiten, MARV-Highlight und Hobbys-Vorschau |
| `about.html` | Über mich – Steckbrief, Skills, Werdegang |
| `hobbies.html` | Hobbys – Feuerwehr, Armbrustschiessen, Coding & IT, Blasmusik |
| `404.html` | Fehlerseite |

## Struktur

```
Portfolio/
├── index.html
├── about.html
├── hobbies.html
├── 404.html
├── assets/
│   └── marvin.jpg        # Profilfoto
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Tech Stack

- Vanilla HTML / CSS / JavaScript – kein Framework, keine Build-Tools
- [Font Awesome 6](https://fontawesome.com/) – Icons (CDN)
- [Google Fonts](https://fonts.google.com/) – Space Grotesk & Inter (CDN)

## Lokale Vorschau

Einfach `index.html` im Browser öffnen – oder mit einem lokalen Dev-Server:

```bash
# Node.js (npx)
npx serve .

# Python
python -m http.server 8080
```

## Deployment

Da es sich um eine reine Static Site handelt, kann sie auf jedem Webserver oder Hosting-Dienst betrieben werden (Netlify, Vercel, GitHub Pages, Apache, Nginx, …).

**404-Seite aktivieren** – bei Apache `.htaccess` anlegen:

```apache
ErrorDocument 404 /404.html
```

Bei Nginx in der Server-Konfiguration:

```nginx
error_page 404 /404.html;
```

## Kontakt

- **E-Mail:** marvin@mar-vin.ch
- **Website:** https://marv.cloud
