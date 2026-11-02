# Coda Money

How Coda makes money. The company plan is `REVENUE.md` in the Code root; the ledger is `GTM.md`.

## Price and rail

Free on iPhone, iPad, Mac and the web (ASC 6804394619). The store listing still says Quotestreak until 1.3.0 clears review. No ads, no banner, no in-app purchase, nothing charged.

## What is actually sold

Nothing. The game uses quotes from films, TV, games, songs and books, and album art from Apple's catalog. Those belong to their owners, not to us. That is why a paid Coda would be the riskiest product in the fleet: the dollar would be for someone else's quotes and cover art. Keep it free.

## Who pays and why

Nobody pays today. The people who play are film, TV and music fans who want a daily quiz. It stays free because the content is not ours to sell.

## Cost to serve

No paid API, and no paid AI is called. Hosting is Cloudflare Pages and Workers, with the live duel rooms on Durable Objects. Accounts run on jaybulb-api. Nothing in the code sets a dollar cap, because nothing is billed per play.

## Where we are

- 2026-10-19: renamed Quotestreak to Coda everywhere except the store listing, the Pages project and the storage keys.
- 2026-10-19: the Daily Quote started. Day 1 is 2026-10-19.
- Revenue: no verified number (the App Store Connect key cannot read sales yet).

## Role in the company plan

Catalogue, free on the web and on the store. GTM.md lists it that way. It serves Stage 0 as a free app that brings players to the fleet, and nothing in it is for sale.

## Next

Nothing for money. Coda stays free. A paid version would first need licenses for the quotes and the cover art.

## Million, billion, trillion

**A million.** Coda is a daily quiz that a million film and music fans open each morning, and nobody pays for a quote.

**A billion.** Coda would have to become a licensed quiz with real rights to its quotes and covers, and that is a different company.

**A trillion.** Nothing this app does reaches that size, so it stays a free game that sends players to the rest of the fleet.

## Change it

`asc pricing schedule create --app 6804394619 --price 0.99 --base-territory USA --start-date YYYY-MM-DD`, only after the quotes are licensed. Not planned. Only with Joshua's yes in chat.

Anyone who got Coda while it was free keeps it free.

*ASC 6804394619. Verified 2026-11-02.*
