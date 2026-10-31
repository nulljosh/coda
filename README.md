<img src="icon.svg" width="80" height="80" alt="Coda icon">

![version](https://img.shields.io/badge/version-100.0.0-blue) ![license](https://img.shields.io/badge/license-MIT-green)

Here's the line. Name the movie.

Or the show, the game, the song or the book. 14,434 lines across 16 genres, from the 1930s to now. Dad's idea.

<p>
<img src="screenshots/web/02-menu.jpg" width="49%">
<img src="screenshots/web/03-question.jpg" width="49%">
</p>

## Features

Pick from four or type it in. Filter by genre, decade and difficulty. Play the Daily Quote with everyone else, race the ten-second speed round, or let lines you missed come back until you know them.

Play with people: send a friend a challenge link, duel live, or put it on a big screen for a party where everyone answers on their phone. Make your own pack of family sayings and share it as a link.

Family mode keeps it safe for kids. Screen readers, keyboard play and twenty languages are built in. Web, iPhone, iPad, Mac, Apple TV, Watch and Vision Pro, on one account.

## Run

```
sh scripts/build-site.sh && npx wrangler pages dev dist
```

Tests: `for t in *.test.js; do node $t; done`

[Architecture](docs/ARCHITECTURE.md) · [API](docs/API.md) · [Data](docs/DATA.md) · [Whitepaper](WHITEPAPER.md) · [Roadmap](roadmap.md)

## License

Lines in other languages come from the Italian and French Wikiquotes (CC BY-SA 4.0). Phrase meanings come from Wiktionary through [Wordroot](https://wordroot.jaybulb.com), CC BY-SA 4.0. Film, cast, director and album facts come from Wikiquote, Wikipedia and Wikidata.

MIT 2026, Joshua Trommel
