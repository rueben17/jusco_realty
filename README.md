# Jusco Realtors

Property management and listings platform built with Django.

## Stack

- **Django 6.1** — `apps/` holds every app, referenced in settings as `apps.<name>`
- **PostgreSQL** — via `dj-database-url` (Neon), SSL enforced
- **Custom user model** — email-based login (`apps/users`), no username field
- **Tailwind CSS v4** — compiled via the Tailwind CLI, served through WhiteNoise
- **django-cors-headers** — API access from separate frontend/mobile clients

## Project layout

```
apps/                  # all Django apps live here (apps.users, ...)
main/
  settings/
    base.py            # shared truth: installed apps, middleware, DB config
    dev.py             # local dev: DEBUG=True, permissive hosts/CORS
    prod.py            # production: SSL, HSTS, secure cookies
    test.py            # test suite: in-memory sqlite, fast password hasher
templates/             # project-wide templates
static/                # collected/served assets (STATICFILES_DIRS)
static_src/            # Tailwind source (input.css) — not served directly
```

## Setup

```bash
python -m venv venv
source venv/Scripts/activate          # Windows Git Bash
pip install -r requirements.txt
npm install
```

Copy `.env.example` to `.env` and fill in `DATABASE_URL` and `SECRET_KEY`:

```bash
cp .env.example .env
```

```bash
python manage.py migrate
python manage.py createsuperuser
npm run build:css
python manage.py runserver
```

## Common commands

| Task | Command |
|---|---|
| Run dev server | `python manage.py runserver` |
| Run tests | `python manage.py test --settings=main.settings.test` |
| Rebuild Tailwind once | `npm run build:css` |
| Rebuild Tailwind on change | `npm run watch:css` |
| Collect static files | `python manage.py collectstatic` |

## Settings

Entrypoints (`manage.py`, `wsgi.py`, `asgi.py`) default to `main.settings.dev`. Point `DJANGO_SETTINGS_MODULE` elsewhere (e.g. `main.settings.test`) as needed.
