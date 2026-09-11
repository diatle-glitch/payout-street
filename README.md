# Payout Street — Night Circuit

Standalone static deploy of the live arcade race. This folder is the front door.

**Clone:** https://github.com/diatle-glitch/payout-street

Read `AGENTS.md` first. It is the spec of record.

```bash
git clone https://github.com/diatle-glitch/payout-street.git
cd payout-street
python3 -m http.server 4173
# open http://localhost:4173
```

## What this is

A 24-hour live race of eight prop firms. Cars only move when a trader gets paid.
Brands and firms buy walls, never position. Affiliate codes live on the boards
and in `/go/{slot}?ref=CODE`, never on the tape.

Session: Thu 18:00 → Fri 18:00 America/New_York.
Tagline: Every payout is a lap.

## Deploy

Drop this folder on Cloudflare Pages, Netlify, or any static host.
Homepage must be `index.html` (the race). Do not put a lime landing at `/`.

`/go/:slot?ref=CODE` needs an edge function (see `functions/go.js` or `netlify.toml`).
Fallback already works: click a sold board opens `go/index.html?slot=title-near&ref=NT24`.

## Status

- Race client: runs offline on mock data. DEMO chip is on purpose.
- Boards + affiliate click path: wired (`psg.adref`, house cards, /go fallback).
- Live payout feed: not wired. All dollars are mock. Do not present as live.
- Clip factory / pick'em / OBS: specified in AGENTS.md, not built.
- `art/` reference frames are optional and may be omitted from this repo.

## Do not deploy as `/`

- any `.dc.html` + `support.js` runtime
- the lime landing or watch-mode HTML
- On the Tape as the homepage (that is the basement)
