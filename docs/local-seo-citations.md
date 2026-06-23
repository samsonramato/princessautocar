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

## 🚨 We MOVED — old-address consolidation (READ FIRST)

5209 Manor Rd, Austin, TX **78723** is our **OLD address**. We moved to
11114 N Lamar Blvd, Ste C, **78753**. The "Princess Auto Sales / Mr. Emmanuel
Afoah" listings on BBB, Manta, Roadtrippers, YellowPages are **OURS** — just
stale (old name + old address). Google currently treats old + new as two
businesses, which splits our ranking signals.

Goal: **consolidate everything onto the new N Lamar address.**

- ✅ DO: claim the old Manor Rd listings and UPDATE them to the new address +
  canonical name (don't abandon them — they may hold reviews/authority).
- ⚠️ GOOGLE BUSINESS PROFILE: if the old location has a verified Google profile,
  **edit its address to the new N Lamar location** — do NOT create a brand-new
  profile and do NOT mark the old one "permanently closed." Editing the address
  preserves your reviews and ranking history. (If a separate new profile already
  exists, keep the older one with reviews and merge/remove the duplicate.)
- ✅ Standardize the NAME too: old listings say "Princess Auto Sales" — change
  to the canonical "Princess Auto" / "Princess Auto Austin".
- 👀 WATCH: reject any "suggested edit" trying to revert us to the Manor Rd
  address; report leftover duplicates once the move is consolidated.

---

## Priority 1 — Anchor identity

- [ ] **Google Business Profile** — FIRST check for an existing (old Manor Rd)
      profile. If it exists, EDIT its address to N Lamar (keeps reviews/history).
      Only create new if none exists. Then set categories: Auto Repair Shop
      (primary), Used Car Dealer, Auto Body Shop, Oil Change Service, Brake Shop.
      Add services, photos, description, hours.
- [ ] **Google Search Console** — DONE (verified + sitemap submitted).

## Priority 2 — Fix the specific broken listings found

- [ ] **Yelp** — weekday open shows 9:00; change to **8:30**. Confirm phone
      293-9293 and Sat 9–3. (Phone is correct now — that IS our main line.)
- [ ] **Chamber of Commerce** — hours are corrupted (Sat 9–9, Wed 8:30–8:30,
      Thu 8:30–8:30). Re-enter correct hours from the canonical block above.
- [ ] **YellowPages (Lamar entry)** — website links to the Canadian
      princessauto.com. Change it to **princessautoaustin.com**. (Hours OK.)
- [ ] **BBB** — the "Princess Auto Sales" Manor Rd entry is OURS (old). Claim it
      and update to the new name + N Lamar address.
- [ ] **Manta** — claim the old Manor Rd entry; update name + address to N Lamar.
- [ ] **Roadtrippers** — update the old Manor Rd entry to the new N Lamar address.
- [ ] **YellowPages (2nd / Manor Rd entry)** — update to new name + address too.

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
