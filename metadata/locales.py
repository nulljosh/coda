"""Coda's store listing in twenty more languages, from metadata/locales.json.

Run: python3 metadata/locales.py <dir> <version>, then `asc metadata apply --dir <dir>` per platform.
The name stays the store name everywhere (one name, every language).
"""
import json
import pathlib
import sys

NAME = "Quotestreak"
URL = "https://coda.jaybulb.com"
L = json.loads((pathlib.Path(__file__).parent / "locales.json").read_text())


def write(root, version):
    root = pathlib.Path(root)
    for loc, t in L.items():
        assert len(t["subtitle"]) <= 30 and len(t["promotionalText"]) <= 170 and len(t["description"]) <= 4000, loc
        kw = t["keywords"]
        while len(kw.encode()) > 100:  # ponytail: Apple counts bytes for CJK, drop the last term until it fits
            kw = kw.rsplit(",", 1)[0]
        (root / "app-info").mkdir(parents=True, exist_ok=True)
        (root / "version" / version).mkdir(parents=True, exist_ok=True)
        (root / "app-info" / f"{loc}.json").write_text(json.dumps({"name": NAME, "subtitle": t["subtitle"], "privacyPolicyUrl": URL + "/privacy"}, ensure_ascii=False))
        v = {"description": t["description"], "keywords": kw, "promotionalText": t["promotionalText"], "whatsNew": t["whatsNew"], "marketingUrl": URL, "supportUrl": URL}
        (root / "version" / version / f"{loc}.json").write_text(json.dumps(v, ensure_ascii=False))


if __name__ == "__main__":
    write(sys.argv[1], sys.argv[2])
    print(len(L), "locales")
