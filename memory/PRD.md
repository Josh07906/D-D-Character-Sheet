# Aurora — D&D 2024 Character Codex (PRD)

## 2026-06 — User-requested fixes (custom spells / notes delete / weapon notes / action ability / spell effect / lore theme)

### Scope (frontend/public/sheet/aurora.html)
1. **Custom Spell description was not saving** — `saveCurrentHomebrewMeta`
   was saving the meta chips but never calling `saveSpellNote()` for the
   user's typed-in description in `#sd-personal-notes`. Fixed: save the
   note alongside the meta (under the *new* spell name to survive renames).

2. **Notes — delete confirmation** — Each session `<h3>` now carries a
   `✕` `.notes-session-del` (contenteditable=false) that becomes visible
   on hover and triggers `deleteSessionNote(btn)` → `confirm("Delete "<session>"?")`
   → removes the H3 + every following sibling up to the next H3 (and any
   leading/trailing `<hr>`). Back-fill helper `_ensureSessionDeleteButtons()`
   adds buttons to legacy notes restored from older saves.

3. **Equipped Weapon notes/description visible on Action Card** — The
   action board's auto-weapon card combined only intrinsic weapon
   properties (Finesse, Light, …). Now combines `data.description` +
   `data.wpopNotes` (the popup's Description + Notes fields) into the
   action card's `notes` HTML, so magic weapons surface their unique
   abilities on the board without re-opening the popup.

4. **Action Widget — "Based on" ability dropdown + proficiency toggle**
   - New `#action-edit-ability` select (STR/DEX/CON/INT/WIS/CHA/Spell Attack/Manual)
     and `#action-edit-proficient` checkbox on the action editor modal.
   - `computeActionAtk(abilKey, proficient)` reads `getAbilityMod(abilKey) +
     getProfBonus()` (or `getSpellAtk()` for the "spell" branch) and locks
     `#action-edit-atk` to that value (readOnly) when an ability is selected.
   - `renderManualActions()` recomputes the live atk from the saved ability
     so STR/DEX score changes or proficiency-bonus level-ups flow through
     to every ability-driven card automatically.
   - Manual actions now also persist in `data.manualActions` (was DOM-only
     in a hidden `<input id="manual-actions-store">`), with `_restoreAllData`
     re-populating + re-rendering. Eliminates a long-standing risk that
     ability/proficient flags were lost across save/load.

5. **Spell Effect chip (Damage / Buff / Debuff / Healing / Utility / Control / Summon)**
   + free-text Effect Detail (e.g. "3d8 fire damage").
   - Available for **both** known PHB spells (`#sd-spelltype` / `#sd-spelltype-detail`
     in the meta strip, auto-saves on change/blur via `saveSpellTypeForKnown()`)
     and homebrew spells (`#hb-spelltype` / `#hb-spelltype-detail` in the
     homebrew form, saved with the rest of `homebrewMeta`).
   - Persisted inside the same `data.homebrewMeta[spellName]` map so it
     travels with the character JSON.
   - Surfaces on the spell-list mini-tag row via `_spellMiniTags()` so
     scanning the spell list shows effect + detail at a glance.
   - Coloured per new `SPELL_TYPE_COLORS` palette (Damage red, Buff green,
     Debuff purple, Healing gold, Utility blue, Control orange, Summon indigo).

6. **Lore Widget independent colors** — Added 5 new theme rows to the
   existing "Browse Panels — independent colors" panel:
   - Card Background (`--lore-bg`)
   - Header Background (`--lore-header-bg`)
   - Body Text (`--lore-text`)
   - Entry Heading (`--lore-heading`)
   - Accent (`--lore-accent`, used by border + drag handle + drag-over outline)
   The lore card / header / heading / body CSS all fall back to the existing
   parchment/gold/ink palette when no override is set, so the default look
   is unchanged. Overrides persist via the same `data.browseOverrides`
   blob already in use for spell-detail/catalog.

### Files touched (single file)
- `frontend/public/sheet/aurora.html`
  - `:root` — added 5 lore CSS custom properties
  - `.lore-entry` / `.lore-entry-header` / `.lore-heading` / `.lore-body`
    CSS now reads through the new vars with sane fallbacks
  - Notes editor — initial Session H3 + `addSessionNote` insert the new
    `.notes-session-del` ✕; new `deleteSessionNote()`,
    `_ensureSessionDeleteButtons()`
  - Spell detail modal — known-spell meta strip now also renders
    `#sd-spelltype` + `#sd-spelltype-detail`; homebrew form picks up
    `#hb-spelltype` + `#hb-spelltype-detail`
  - `saveCurrentHomebrewMeta` — also calls `saveSpellNote()`
  - `saveSpellTypeForKnown` — new helper, persists effect + detail for
    PHB spells through the same homebrewMeta channel
  - `_spellMiniTags` — emits the new effect/effect-detail chips on every
    spell row; `SPELL_TYPE_COLORS` palette added
  - Action editor modal HTML — new ability `<select>` + proficient checkbox
    + live atk preview
  - `openManualActionModal`, `editManualAction`, `editAutoActionCard`,
    `saveManualAction`, `renderManualActions` — all wired to the new
    ability/proficient fields; live recompute via `computeActionAtk`
  - `BROWSE_PANEL_DEFS` — added Lore Widget group with 5 keys
  - `syncActionBoard` (equipped weapons branch) — combines props +
    description + notes into the action card's notes HTML
  - `_collectAllData` + `_restoreAllData` — now persist & restore
    `data.manualActions` explicitly

### Verified (manual + screenshot)
- Custom spell "My Test Custom Spell" → fill description + effect + detail
  → click Save → reopen: description **and** effect chip **and** detail all
  retained.
- Notes Session 1 ✕ button → `confirm("Delete...")` → block removed; new
  sessions auto-get a delete button.
- Equipped Flametongue weapon (`isEquippable + isEquipped + category=Weapon`)
  with `description = "Flametongue: +2d6 fire damage on hit"` + `wpopNotes =
  "Requires attunement"` → action card's `.action-card-notes` renders
  both strings combined with the intrinsic props.
- Action editor: pick STR → `#action-edit-atk` becomes `+2` (mod 0 + prof 2),
  readOnly, preview reads `Auto: +2  (STR + Prof)`. Toggle prof off → `+0`.
  Pick Spell → reads from `getSpellAtk()`. Save → `data.manualActions[0] =
  {column:"actions", name:"Sword Strike", atk:"+2", dmg:"1d8+3 slashing",
   dc:"", range:"", notes:"", ability:"str", proficient:true}`. Round-trip
  collect → wipe → restore preserves the entry intact.
- Fireball detail modal → set Effect=Damage / Detail="8d6 fire damage" →
  reopen: retained. Spell-list mini tags show "Damage" + "8d6 fire damage".
- Theme panel → Browse Panels section now lists `Lore Widget` group with
  all 5 pickers (data-testid="browse-lore-bg" etc.); changing Card
  Background paints `--lore-bg` on `:root` and re-tints lore cards.

## Tech stack (unchanged)
- FastAPI backend (JWT, Supabase storage for characters)
- React 19 shell (`/login`, `/sheets`, `/sheets/:id`)
- Aurora character sheet — self-contained ~20.5k-line HTML in iframe at `/sheet/aurora.html`
- Netlify-style single-platform deploy supported (`netlify.toml`, `_redirects`)

## Test credentials
- Admin: `admin` / `admin123` (auto-seeded on backend boot from `/app/backend/.env`)

## Backlog
- P2 — Add data-testid attributes to lore-widget theme inputs by ID (already on data-testid; spec'd id selectors would need additional attributes)
- P2 — Fix pre-existing bug: `addInvItem(button, 'Weapon')` ignores 2nd arg, creating items with category="Adventuring Gear" instead of "Weapon"
- P2 — Split aurora.html into modules for maintainability (currently ~20.5k LOC monolith)
- P3 — Per-user lock in Supabase storage
- P3 — Tighten frontend portrait upload cap (~150 KB pre-base64)


## 2026-02 — Skill stability, per-skill modifiers, action-slot for any item, multiclass persistence

### Bug fixes & feature additions on `frontend/public/sheet/aurora.html`

1. **Skills "switch spots" bug** — Skill name spans were `contenteditable`
   and saved positionally as `data.text["ce_<i>"]`. Any DOM change
   between save & restore shifted the index → names landed on the wrong
   row. Fix: removed `contenteditable` from every `.skill-name` (skills
   + saving throws), added stable `data-skill="…"` / `data-save="…"`
   attributes, added a one-time `_restoreAllData` migration that forces
   each row back to its canonical D&D 5e name on every character load.

2. **Skill names are now read-only** — All 18 D&D 5e skills + 6 saving
   throws are locked; cursor turns to `default` over them.

3. **Per-skill modifier targets** — Feature / Trait / Item modifier
   dropdown now groups options (Combat / Ability Scores / Skills) and
   exposes all 18 D&D skills as modifier targets. `recalcAll` seeds
   `featureMods` with every skill name and adds the resolved bonus to
   the matching `.skill-row[data-skill]` on every tick.

4. **Action-slot available for every item category** — The previously
   weapon-only `weapon-action-fields` block is shown for all items.
   New "— None —" option lets users opt out; explicit assignments win
   over the description auto-detector in `syncActionBoard()`. Weapons
   still default to `actions`, so existing behaviour is unchanged.

5. **Multiclass persistence** — Multiclass rows live in
   `#mc-inline-rows`, which was never part of the JSON snapshot, so
   refreshing the page lost every multiclass after the primary class.
   Fix: `_collectAllData()` now writes `data.meta.multiclasses = [{cls,
   subclass, lvl}, …]`; `_restoreAllData()` clears `#mc-inline-rows`
   and re-runs `addInlineMcRow()` for each saved entry, which also
   re-injects per-class features.

### Verified
- 0 contenteditable skill rows; all 24 rows carry stable data attrs.
- Modifier dropdown: 29 options across 3 optgroups; all 18 skills present.
- Adding a feature with `{target:'Acrobatics', type:'Bonus', value:5}`
  pushes Acrobatics to +5; removing it returns to +0.
- Action-slot dropdown options: `['', 'actions', 'bonus-actions',
  'reactions', 'others']` on every item.
- Round-trip save → wipe → restore preserves the Artificer multiclass
  row and the level-4 primary.


## Latest iteration (2026-01-08) — Theme rework: 7-role system + Wraithwing preset

### Why
User reported that "text" and "background" roles only applied to half the
sheet — the historical Aurora system had a hidden dual-surface design
(dark page + auto-derived light parchment cards with dark "ink" text)
that meant a user's "text → white" choice never reached the parchment
cards (Species/Class/Features etc), and "bg → blue" never reached card
backgrounds.

### Rework — 7-role system (option B)
The Simple panel now exposes **seven** independently controllable roles:

| Role          | Paints                              |
|---------------|-------------------------------------|
| `bg`          | Outer page / rail surface           |
| `cardBg`      | Card / panel / stat-tile surface    |
| `text`        | Body text on page bg                |
| `textOnCard`  | Body text on cards                  |
| `heading`     | Bold text & section titles          |
| `muted`       | Italic / footnote text              |
| `accent`      | Borders, links, highlights          |

- Setting `bg === cardBg` + `text === textOnCard` makes the sheet a
  single uniform colour everywhere (no parchment).
- Keeping them different preserves the classic dark-page + parchment-
  card look.
- `rolesToVars()` rewritten — honours user choices directly, applies a
  soft contrast guard only when a pick is genuinely unreadable
  (< 3:1). No more auto-warping pretty palettes.

### Backward compatibility
- All 13 existing presets explicitly spelled out with all 7 keys.
- Legacy 5-role JSON saves (no `cardBg` / `textOnCard`) auto-derive
  the missing two from the historic "parchment + ink" formula, so
  characters saved before this iteration load unchanged.
- `setCurrentThemeRoles()` resets to default's 7-role baseline before
  merging incoming legacy keys → no stale cardBg leakage between
  different characters loaded in the same session.

### New preset — Wraithwing
- Light-blue + light-black winged-demon palette.
- Showcases the new system's flexibility: TRUE dark theme where the
  card surface is also dark (`#1d2530` steel) with light-blue text
  (`#cbe2f3`) — no parchment fall-back anywhere.

### Custom presets (from previous iteration)
- Continue working: now save all 7 roles in `data.customThemes`.
- localStorage + character-JSON persistence.

### Files touched (single file)
- `frontend/public/sheet/aurora.html`
  - `THEME_PRESETS` — all 13 themes converted to 7-role + Wraithwing
  - `ROLE_DEFS` — 5 → 7 entries
  - `rolesToVars()` — full rewrite (honours user colour directly)
  - `setCurrentThemeRoles()` — clean-slate from default + back-compat
  - `buildSimpleRows()` / `syncSimpleInputs()` — fall back to resolved
    CSS var when a role is missing (legacy 5-role JSON)
  - `_refreshContrastWarning()` — checks 7-role pairs
  - `_sanitizeCustomThemes()` — accepts 7 keys
  - Theme panel HTML — added Wraithwing preset button + updated label
    "Simple — 7 roles"

## Tech stack
- **FastAPI** backend, JWT auth, Google Drive storage
- **React 19 + Tailwind 3** frontend
- Aurora character sheet: self-contained static HTML in iframe
- Single-platform Netlify deploy supported

## Test credentials
- Admin: `admin` / `ChangeMe-2026!` (auto-seeded on backend boot)

## Backlog (pre-existing)
- P2 — Tighten frontend portrait upload cap (~150 KB pre-base64)
- P2 — Switch Tailwind to PostCSS for prod builds
- P3 — Per-user lock in `drive_storage`
- P3 — Username-rename migration path


## Iteration (2026-01-08) — Notes & Lore widget overhaul

### Notes — richer toolbar + word count + dated headings
- Toolbar expanded from 6 → 16 buttons: **Undo / Redo / H1 / H2 / H3 /
  B / I / U / Highlight / Quote / List / Divider / Link / Table /
  Image / Date / Clear / + Session**.
- `Date` button inserts an inline `<span class="date-stamp">Jan 8, 2026</span>` chip.
- `+ Session` (was "+ New Session") now auto-stamps the current date
  on the new session heading.
- `<h1>` / `<h2>` styled with parchment-themed borders + accent colour.
- `<blockquote>` rendered as parchment-tinted left-rule callout.
- `<mark>` rendered as soft yellow highlight that follows the theme.
- New `Word X · Y characters` counter at the bottom-right of the
  panel, live-updates as the user types.

### Lore — typed/filtered/collapsible card grid
- Layout switched from CSS `column-count: 2` to a responsive grid
  (`repeat(auto-fill, minmax(380px, 1fr))`) so cards keep DOM order
  (required for drag-to-reorder).
- Each entry is now a self-contained card with:
  - **Drag handle** (⠿) — mouse-down-on-handle starts the drag so
    contenteditable text stays selectable.
  - **Type chip** (NPC / Place / Event / Item / Faction / Other) —
    click to cycle through types, colour-coded.
  - Editable heading.
  - **Collapse arrow** (▾) — fold the entry's body away.
  - Delete ✖.
- **Filter bar** at the top of the tab: search input + 7 type
  buttons (All + 6 types) + visible-count pill (`N entries` /
  `X of N shown`).
- Collapse-all / Expand-all buttons in the lore toolbar.
- Drag-to-reorder via HTML5 native dragstart/dragover/drop.
- **Back-compat back-fill** (`ensureLoreEntryStructure`) auto-
  migrates pre-rework lore entries on character restore — the old
  flat `.lore-entry > .lore-heading + <p>` structure gets wrapped
  in the new header + body layout, with type defaulting to "Other".

### Files touched
- `frontend/public/sheet/aurora.html`
  - CSS: `.notes-content h1/h2/blockquote/mark/.date-stamp`,
    `.notes-wordcount`, new `.lore-*` styles (entry card, header,
    drag handle, type chip variants, collapse btn, filter bar,
    search input, filter btn variants, count pill).
  - HTML: Notes toolbar (new buttons), Lore tab (filter bar +
    typed entry HTML).
  - JS: `addLore(type)`, `cycleLoreType`, `toggleLoreEntry`,
    `collapseAllLore`, `setLoreTypeFilter`, `filterLoreEntries`,
    `updateLoreCount`, `_wireLoreEntryDrag`, `ensureLoreEntryStructure`,
    `_todayLabel`, `insertNotesDateStamp`, `toggleNotesHighlight`,
    `insertNotesLink`, `updateNotesWordCount`, updated
    `addSessionNote`.
  - `_restoreAllData` hook: runs `ensureLoreEntryStructure`,
    `filterLoreEntries`, `updateNotesWordCount` after each restore.


## Iteration (2026-01-08, late) — Text-colour consistency + spell-row theming

### Bugs reported
1. Feature names on the Features tab rendered with **different colors**
   for species traits vs class features (species: bright; class: dim).
2. The spell row was a stark **"white square"** under any dark theme
   because `.spell-entry { background: var(--parchment) }` is light
   under classic palettes.
3. The spell mini-tag chips (Evocation / Action / 120 ft / V, S /
   Instant) were painted with `--ink-soft` and looked off-theme.
4. (Discovered while fixing #1–#3) under truly dark themes such as
   Wraithwing, every input field (Speed, Vision, ability scores,
   skill names, etc.) rendered with `color: var(--parchment)` —
   which is now a dark steel — making the text invisible.

### Root cause
A large block of "themed extension" CSS uses `--parchment` as the
text colour on rail-dark surfaces. That worked when `--parchment`
was always a light tan, but the new 7-role system lets the user set
`cardBg` (= `--parchment`) to anything — including dark steel for
true-dark presets. Furthermore, the `.tab-panel [contenteditable="true"]`
rule forced `--parchment !important` on editable nodes only, so the
species-trait `.feature-name` (editable) got bright text while the
class-feature `.feature-name` (non-editable) fell through to `--ink`
and rendered dark-on-dark.

### Fix
- New CSS rule that normalises **all** `.feature-name` and
  `.feature-desc` text to `var(--page-text)` regardless of
  contenteditable state.
- New CSS for `.spell-entry` — dark themed background, gold name,
  themed dot/separator/info-button.
- New CSS for `.spell-mini-tag` — themed dark chip with gold border;
  the first chip (`spell-school`) gets an accent-tinted background
  so spell schools stay glanceable.
- New "7-role theme compatibility overrides" block at the end of the
  extension CSS that re-routes `color: var(--parchment) !important`
  to `var(--page-text, var(--parchment)) !important` on every input,
  select, textarea, value-tile, hover state, and spell-detail
  surface. The `.spell-info-btn:hover` text colour is re-routed to
  `var(--rail-dark)` so the inverse (gold on dark) reads correctly.

### Verified
- Species trait + class feature names both render at the same
  computed `color` (Classic: `rgb(245,240,232)`, Wraithwing:
  `rgb(188,217,239)`).
- Spell row under Wraithwing: dark themed bg, light-blue name,
  themed chips.
- All inputs readable under Wraithwing (Speed, Vision, ability
  scores, skill names, etc. all show `rgb(188,217,239)`).
- Classic theme unchanged (input color still `rgb(245,240,232)`).


## Iteration (2026-01-08, late v2) — Spell Detail/Prep visibility + Browse Panel sliders

### Bugs reported
1. Spell **detail modal** ("Guidance" / etc.): the description text was painted with `color: var(--parchment)` (which becomes dark on dark under true-dark themes), so the spell description was invisible.
2. The **Spell Preparation Guide** widget had the same issue — its text was illegible under Wraithwing.
3. User wanted **dedicated colour sliders** for the spell-browse panels & gear-catalog panel so they could be themed independently of the main sheet.

### Fix
- `.spell-prep-guide` and the inline-style catch-all CSS block re-routed
  to `color: var(--page-text, var(--parchment)) !important` so the
  prep guide stays readable under any cardBg/textOnCard combo.
- Added 6 new CSS custom properties on `:root`:
  `--spell-panel-bg/text/accent` and `--catalog-bg/text/accent`,
  default to `initial` (i.e. inherit-from-main-theme).
- **Scoped variable rebinding trick**: a CSS block
  `#spell-detail-modal, #spell-browser-modal, #spell-desc-modal { --rail-dark: var(--spell-panel-bg, var(--rail-dark)); ... }`
  rebinds every base palette var INSIDE those modals' scope. The
  result: every existing inline `var(--rail-dark)` / `var(--parchment)`
  in the modals' HTML automatically picks up the user's per-panel
  override — no per-element edits needed. Same trick for
  `#catalog-overlay`.
- New JS module `_browseOverrides` with `get/setBrowseOverrides`
  (sanitised, persisted to localStorage + character JSON).
- New **"Browse Panels — independent colors"** section in the Theme
  editor under the Simple-7-roles block. Two sub-groups:
  - **Spell Detail / Browser** (bg, text, accent)
  - **Gear Catalog** (bg, text, accent)
  Each slider has a color picker, a hex input, and a × button to
  "Reset to inherit main theme".
- `_collectAllData()` writes `data.browseOverrides`;
  `_restoreAllData()` reads it back — overrides travel with the
  character JSON.

### Verified
- Spell prep guide text under Wraithwing: `rgb(188, 217, 239)` (light blue) — readable.
- Spell-detail modal scoped vars rebind correctly when user sets
  overrides (`#2a1a3a / #ffe566 / #ff79c6` test successful), and
  root vars are NOT polluted (root stays at the Wraithwing values).
- Clearing overrides via the × button restores inherit behaviour.
- JSON round-trip: `{"spell-panel-bg":"#123456"}` saves & restores
  cleanly.
