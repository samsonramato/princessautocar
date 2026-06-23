# Local SEO — Citation Cleanup Tracker

> Working checklist for fixing off-site listings. These are all manual edits
> on each platform (they cannot be changed from this codebase). The website
> itself is already NAP-consistent — this file is about the rest of the web.

## ⭐ Canonical NAP — paste this EXACTLY, every time

```
Princess Auto
11114 N Lamar Blvd, Ste C, Austin, TX 78753
(512) 293-9293
https://princessautoaustin.com
Hours: Mon–Fri 8:30 AM–5:30 PM · Sat 9:00 AM–3:00 PM · Sun Closed
```

Rules:
- ALWAYS include the suite (**Ste C**) and ZIP (**78753**). Never list a bare
  "Princess Auto, Austin" with no address.
- Main phone is **(512) 293-9293**. Secondary/hiring: (512) 926-7900.
- Website is **princessautoaustin.com** (NOT the Canadian princessauto.com).

---

## 🚨 Name-collision context (READ FIRST)

There is a **separate, unrelated business** also called "Princess Auto":
- **Princess Auto Sales**, 5209 Manor Rd, Austin, TX **78723**, owner Mr. Emmanuel Afoah.

Google separates local businesses mainly by **address + phone**, not name. Our
shop is **N Lamar / 78753**; theirs is **Manor Rd / 78723**. As long as every
one of OUR citations carries our full address + phone, Google keeps us distinct.

- ✅ DO: make our listings precise and complete (full address + ZIP + phone).
- ⛔ DON'T: claim, edit, or report the Manor Rd listings — not ours, leave alone.
- 👀 WATCH: in our Google Business Profile, reject any "suggested edit" that
  changes our address/phone/hours; report duplicates of OUR shop only.

---

## Priority 1 — Anchor identity

- [ ] **Google Business Profile** — claim & verify at the exact N Lamar address.
      Categories: Auto Repair Shop (primary), Used Car Dealer, Auto Body Shop,
      Oil Change Service, Brake Shop. Add services, photos, description, hours.
- [ ] **Google Search Console** — DONE (verified + sitemap submitted).

## Priority 2 — Fix the specific broken listings found

- [ ] **Yelp** — weekday open shows 9:00; change to **8:30**. Confirm phone
      293-9293 and Sat 9–3. (Phone is correct now — that IS our main line.)
- [ ] **Chamber of Commerce** — hours are corrupted (Sat 9–9, Wed 8:30–8:30,
      Thu 8:30–8:30). Re-enter correct hours from the canonical block above.
- [ ] **YellowPages (Lamar entry)** — website links to the Canadian
      princessauto.com. Change it to **princessautoaustin.com**. (Hours OK.)
- [ ] **BBB** — confirm the N Lamar entry is correct; the Manor Rd "Princess
      Auto Sales" BBB entry is the other business — ignore it.
- [ ] **Manta** — verify/claim our N Lamar entry; correct NAP.
- [ ] **Roadtrippers** — verify which address it points to; correct if it's ours.

## Priority 3 — Build new consistent citations (Tier list)

Aggregators (syndicate everywhere):
- [ ] Bing Places
- [ ] Apple Business Connect (Apple Maps)
- [ ] Data Axle, Foursquare

Auto-specific:
- [ ] CarGurus, Cars.com (used-car side)
- [ ] Mechanic Advisor, RepairPal, AutoMD
- [ ] Carwise (body shop / collision)

Local + general:
- [ ] Austin Chamber of Commerce (after fixing hours above)
- [ ] Nextdoor Business, Angi, Facebook Business, Hotfrog

## Priority 4 — Reviews (ongoing)

- [ ] Text/email the Google review link to customers after each service.
- [ ] Reply to every review (active profiles rank better).
- [ ] Funnel to Google first, then Yelp.

---

## Website reinforcement (code side — already done / available)

- ✅ NAP consistent across all pages (name, phone, hours).
- ✅ LocalBusiness/AutoRepair structured data with precise address + geo + phone.
- ✅ `sameAs` links to the Google Maps profile.
- ⏳ TODO (needs claimed URLs): add Yelp / Facebook / other profile URLs to
  `sameAs` in `src/layouts/Layout.astro` once those listings are claimed &
  corrected — this tells Google "all these profiles are the same entity."
