<script>
/* ═══════════════════════════════════════════════════════════════════
   AURORA EXTENSIONS — D&D 2024 Spell Class Lookup + Catalog Additions
   Injected non-destructively after the original sheet code so it
   simply augments / overrides what's already there.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // ─── Class palette (uses sheet CSS vars so it follows the active theme) ────
  const CLASS_COLOR = {
    B:  '#a85aa8',  // Bard      — violet
    C:  '#d4af37',  // Cleric    — gold
    D:  '#5d9b3d',  // Druid     — green
    P:  '#c8b06b',  // Paladin   — pale gold
    R:  '#4a7c4a',  // Ranger    — forest
    S:  '#c84a4a',  // Sorcerer  — crimson
    Wl: '#7a3aa0',  // Warlock   — eldritch purple
    Wz: '#3a6cb0',  // Wizard    — arcane blue
  };
  const CLASS_FULL = {
    B: 'Bard', C: 'Cleric', D: 'Druid', P: 'Paladin',
    R: 'Ranger', S: 'Sorcerer', Wl: 'Warlock', Wz: 'Wizard',
  };

  // ─── D&D 2024 PHB Spell-to-Class mapping (by lowercase spell name) ─────
  // Compact arrays of class codes. Spells not in the map fall back to "—".
  const SPELL_CLASSES = {
    // ────── Cantrips (Level 0) ──────
    'acid splash':           ['S','Wz'],
    'blade ward':             ['B','S','Wl','Wz'],
    'booming blade':           ['S','Wl','Wz'],
    'chill touch':             ['Wl','Wz','S'],
    'control flames':          ['D','S','Wz'],
    'create bonfire':          ['D','S','Wl','Wz'],
    'dancing lights':          ['B','S','Wz','Wl'],
    'druidcraft':              ['D'],
    'eldritch blast':          ['Wl'],
    'encode thoughts':         ['Wz'],
    'fire bolt':               ['S','Wz'],
    'friends':                 ['B','S','Wl','Wz'],
    'frostbite':               ['D','S','Wl','Wz'],
    'green-flame blade':       ['S','Wl','Wz'],
    'guidance':                ['C','D'],
    'gust':                    ['D','S','Wz'],
    'infestation':             ['D','S','Wl','Wz'],
    'light':                   ['B','C','S','Wz'],
    'lightning lure':          ['S','Wl','Wz'],
    'mage hand':               ['B','S','Wl','Wz'],
    'magic stone':             ['D','Wl'],
    'mending':                 ['B','C','D','S','Wz'],
    'message':                 ['B','S','Wz'],
    'minor illusion':          ['B','S','Wl','Wz'],
    'mold earth':              ['D','S','Wz'],
    'poison spray':            ['D','S','Wl','Wz'],
    'prestidigitation':        ['B','S','Wl','Wz'],
    'primal savagery':         ['D'],
    'produce flame':           ['D'],
    'ray of frost':            ['S','Wz'],
    'resistance':              ['C','D'],
    'sacred flame':            ['C'],
    'sapping sting':           ['Wz'],
    'shape water':             ['D','S','Wz'],
    'shillelagh':              ['D'],
    'shocking grasp':          ['S','Wz'],
    'spare the dying':         ['C'],
    'starry wisp':             ['B','D'],
    'sword burst':             ['S','Wl','Wz'],
    'thaumaturgy':             ['C'],
    'thorn whip':              ['D'],
    'thunderclap':             ['B','D','S','Wl','Wz'],
    'toll the dead':           ['C','Wl','Wz'],
    'true strike':             ['B','S','Wl','Wz'],
    'vicious mockery':         ['B'],
    'word of radiance':        ['C'],

    // ────── Level 1 ──────
    'absorb elements':         ['D','R','S','Wz'],
    'alarm':                   ['R','Wz'],
    'animal friendship':       ['B','D','R'],
    'arms of hadar':           ['Wl'],
    'bane':                    ['B','C'],
    'bless':                   ['C','P'],
    'burning hands':           ['S','Wz'],
    'catapult':                ['S','Wz'],
    'cause fear':              ['Wl','Wz'],
    'ceremony':                ['C','P'],
    'chaos bolt':              ['S'],
    'charm person':            ['B','D','S','Wl','Wz'],
    'chromatic orb':           ['S','Wz'],
    'color spray':             ['S','Wz'],
    'command':                 ['B','C','P','Wl'],
    'compelled duel':          ['P'],
    'comprehend languages':    ['B','S','Wl','Wz'],
    'create or destroy water': ['C','D'],
    'cure wounds':             ['B','C','D','P','R'],
    'detect evil and good':    ['C','P'],
    'detect magic':            ['B','C','D','P','R','S','Wz'],
    'detect poison and disease':['C','D','P','R'],
    'disguise self':           ['B','S','Wz'],
    'dissonant whispers':      ['B'],
    'divine favor':            ['P'],
    'earth tremor':            ['B','D','S','Wz'],
    'ensnaring strike':        ['R'],
    'entangle':                ['D'],
    'expeditious retreat':     ['S','Wl','Wz'],
    'faerie fire':             ['B','D'],
    'false life':              ['S','Wz'],
    'feather fall':            ['B','S','Wz'],
    'find familiar':           ['Wz'],
    'fog cloud':               ['D','R','S','Wz'],
    'goodberry':               ['D','R'],
    'grease':                  ['Wz'],
    'guiding bolt':            ['C'],
    'hail of thorns':          ['R'],
    'healing word':            ['B','C','D'],
    'hellish rebuke':          ['Wl'],
    'heroism':                 ['B','P'],
    'hex':                     ['Wl'],
    'hideous laughter':        ['B','Wz'],
    'hunters mark':            ['R'],
    'hunter\u2019s mark':      ['R'],
    'ice knife':               ['D','S','Wz'],
    'identify':                ['B','Wz'],
    'illusory script':         ['B','Wl','Wz'],
    'inflict wounds':          ['C'],
    'jump':                    ['D','R','S','Wz'],
    'longstrider':             ['B','D','R','Wz'],
    'mage armor':              ['S','Wz'],
    'magic missile':           ['S','Wz'],
    'magnify gravity':         ['Wz'],
    'protection from evil and good':['C','P','Wl','Wz'],
    'purify food and drink':   ['C','D','P'],
    'ray of sickness':         ['S','Wz'],
    'sanctuary':               ['C'],
    'searing smite':           ['P','R'],
    'shield':                  ['S','Wz'],
    'shield of faith':         ['C','P'],
    'silent image':            ['B','S','Wz'],
    'silvery barbs':           ['B','S','Wz'],
    'sleep':                   ['B','S','Wz'],
    'speak with animals':      ['B','D','R'],
    'tashas hideous laughter': ['B','Wz'],
    'tashas caustic brew':     ['S','Wz'],
    'tenser\u2019s floating disk':['Wz'],
    'thunderous smite':        ['P'],
    'thunderwave':             ['B','D','S','Wz'],
    'unseen servant':          ['B','Wl','Wz'],
    'witch bolt':              ['S','Wl','Wz'],
    'wrathful smite':          ['P'],
    'zephyr strike':           ['R'],

    // ────── Level 2 ──────
    'aganazzar\u2019s scorcher':['S','Wz'],
    'aid':                     ['C','P'],
    'alter self':              ['S','Wz'],
    'animal messenger':        ['B','D','R'],
    'arcane lock':             ['Wz'],
    'augury':                  ['C'],
    'barkskin':                ['D','R'],
    'beast sense':             ['D','R'],
    'blindness/deafness':      ['B','C','S','Wz'],
    'blur':                    ['S','Wz'],
    'branding smite':          ['P'],
    'calm emotions':           ['B','C'],
    'cloud of daggers':        ['B','S','Wl','Wz'],
    'continual flame':         ['C','Wz'],
    'cordon of arrows':        ['R'],
    'crown of madness':        ['B','S','Wl','Wz'],
    'darkness':                ['S','Wl','Wz'],
    'darkvision':              ['D','R','S','Wz'],
    'detect thoughts':         ['B','S','Wz'],
    'dragon\u2019s breath':    ['S','Wz'],
    'dust devil':              ['D','S','Wz'],
    'earthbind':               ['D','S','Wl','Wz'],
    'enhance ability':         ['B','C','D','S'],
    'enlarge/reduce':          ['B','S','Wz'],
    'enthrall':                ['B','Wl'],
    'find traps':              ['C','D','R'],
    'flame blade':             ['D'],
    'flaming sphere':          ['D','Wz'],
    'find steed':              ['P'],
    'gentle repose':           ['C','Wz'],
    'gust of wind':            ['D','S','Wz'],
    'heat metal':              ['B','D'],
    'hold person':             ['B','C','D','S','Wl','Wz'],
    'invisibility':            ['B','S','Wl','Wz'],
    'knock':                   ['B','S','Wz'],
    'lesser restoration':      ['B','C','D','P','R'],
    'levitate':                ['S','Wz'],
    'locate animals or plants':['B','D','R'],
    'locate object':           ['B','C','D','P','R','Wz'],
    'magic mouth':             ['B','Wz'],
    'magic weapon':            ['P','Wz'],
    'mirror image':            ['S','Wl','Wz'],
    'misty step':              ['S','Wl','Wz'],
    'moonbeam':                ['D'],
    'pass without trace':      ['D','R'],
    'phantasmal force':        ['B','S','Wz'],
    'prayer of healing':       ['C'],
    'protection from poison':  ['C','D','P','R'],
    'ray of enfeeblement':     ['Wl','Wz'],
    'rope trick':              ['Wz'],
    'scorching ray':           ['S','Wz'],
    'see invisibility':        ['B','S','Wz'],
    'shatter':                 ['B','S','Wl','Wz'],
    'silence':                 ['B','C','R'],
    'spider climb':            ['S','Wz'],
    'spike growth':            ['D','R'],
    'spiritual weapon':        ['C'],
    'suggestion':              ['B','S','Wl','Wz'],
    'summon beast':            ['D','R'],
    'web':                     ['S','Wz'],
    'zone of truth':           ['B','C','P'],

    // ────── Level 3 ──────
    'animate dead':            ['C','Wz'],
    'aura of vitality':        ['P'],
    'beacon of hope':          ['C'],
    'bestow curse':            ['B','C','Wz'],
    'blinding smite':          ['P'],
    'blink':                   ['S','Wz'],
    'call lightning':          ['D'],
    'clairvoyance':            ['B','C','S','Wz'],
    'conjure animals':         ['D','R'],
    'counterspell':            ['S','Wl','Wz'],
    'create food and water':   ['C','P'],
    'crusader\u2019s mantle':  ['P'],
    'daylight':                ['C','D','P','R','S','Wz'],
    'dispel magic':            ['B','C','D','P','S','Wl','Wz'],
    'elemental weapon':        ['P'],
    'fear':                    ['B','S','Wl','Wz'],
    'feign death':             ['B','C','D','Wz'],
    'fireball':                ['S','Wz'],
    'fly':                     ['S','Wl','Wz'],
    'gaseous form':            ['S','Wl','Wz'],
    'glyph of warding':        ['B','C','Wz'],
    'haste':                   ['S','Wz'],
    'hunger of hadar':         ['Wl'],
    'hypnotic pattern':        ['B','S','Wl','Wz'],
    'leomund\u2019s tiny hut': ['B','Wz'],
    'lightning bolt':          ['S','Wz'],
    'magic circle':            ['C','P','Wl','Wz'],
    'major image':             ['B','S','Wl','Wz'],
    'mass healing word':       ['B','C'],
    'meld into stone':         ['C','D'],
    'nondetection':            ['B','R','Wz'],
    'phantom steed':           ['Wz'],
    'plant growth':            ['B','D','R'],
    'protection from energy':  ['C','D','R','S','Wz'],
    'remove curse':            ['C','P','Wl','Wz'],
    'revivify':                ['C','P','R'],
    'sending':                 ['B','C','Wz'],
    'sleet storm':             ['D','S','Wz'],
    'slow':                    ['S','Wz'],
    'speak with dead':         ['B','C'],
    'speak with plants':       ['B','D','R'],
    'spirit guardians':        ['C'],
    'stinking cloud':          ['B','S','Wz'],
    'summon fey':              ['B','D','R','Wl','Wz'],
    'summon undead':           ['Wl','Wz'],
    'tongues':                 ['B','C','S','Wl','Wz'],
    'vampiric touch':          ['Wl','Wz'],
    'wall of water':           ['D','S','Wz'],
    'water breathing':         ['D','R','S','Wz'],
    'water walk':              ['C','D','R','S'],
    'wind wall':               ['D','R'],

    // ────── Level 4 ──────
    'banishment':              ['C','P','S','Wl','Wz'],
    'blight':                  ['D','S','Wl','Wz'],
    'compulsion':              ['B'],
    'confusion':               ['B','D','S','Wl','Wz'],
    'conjure minor elementals':['D','Wz'],
    'conjure woodland beings': ['D','R'],
    'control water':           ['C','D','Wz'],
    'death ward':              ['C','P'],
    'dimension door':          ['B','S','Wl','Wz'],
    'divination':              ['C'],
    'dominate beast':          ['D','S'],
    'elemental bane':          ['D','Wl','Wz'],
    'fabricate':               ['Wz'],
    'fire shield':              ['Wz'],
    'freedom of movement':     ['B','C','D','R'],
    'galder\u2019s tower':     ['Wz'],
    'giant insect':            ['D'],
    'grasping vine':           ['D','R'],
    'greater invisibility':    ['B','S','Wz'],
    'guardian of faith':       ['C'],
    'guardian of nature':      ['D','R'],
    'hallucinatory terrain':   ['B','D','Wl','Wz'],
    'ice storm':               ['D','S','Wz'],
    'leomund\u2019s secret chest':['Wz'],
    'locate creature':         ['B','C','D','P','R','Wz'],
    'phantasmal killer':       ['Wz'],
    'polymorph':               ['B','D','S','Wz'],
    'private sanctum':         ['Wz'],
    'resilient sphere':        ['Wz'],
    'shadow of moil':          ['Wl'],
    'stone shape':             ['C','D','Wz'],
    'stoneskin':               ['D','R','S','Wz'],
    'summon aberration':       ['Wl','Wz'],
    'summon construct':        ['Wz'],
    'summon elemental':        ['D','R','Wl','Wz'],
    'summon greater demon':    ['Wl','Wz'],
    'wall of fire':            ['D','S','Wl','Wz'],

    // ────── Level 5 ──────
    'animate objects':         ['B','C','S','Wz'],
    'antilife shell':          ['D'],
    'awaken':                  ['B','D'],
    'banishing smite':         ['P'],
    'bigby\u2019s hand':       ['Wz'],
    'circle of power':         ['P'],
    'cloudkill':               ['S','Wz'],
    'commune':                 ['C'],
    'commune with nature':     ['D','R'],
    'cone of cold':            ['D','S','Wz'],
    'conjure elemental':       ['D','Wz'],
    'contact other plane':     ['Wl','Wz'],
    'contagion':               ['C','D'],
    'creation':                ['S','Wz'],
    'destructive wave':        ['C','P'],
    'dispel evil and good':    ['C','P'],
    'dominate person':         ['B','S','Wz'],
    'dream':                   ['B','Wl','Wz'],
    'enervation':              ['S','Wl','Wz'],
    'flame strike':            ['C'],
    'geas':                    ['B','C','D','P','Wz'],
    'greater restoration':     ['B','C','D'],
    'hallow':                  ['C'],
    'hold monster':            ['B','S','Wl','Wz'],
    'insect plague':           ['C','D','S'],
    'legend lore':             ['B','C','Wz'],
    'mass cure wounds':        ['B','C','D'],
    'mislead':                 ['B','Wz'],
    'modify memory':           ['B','Wz'],
    'planar binding':          ['B','C','D','Wz'],
    'rary\u2019s telepathic bond':['Wz'],
    'raise dead':              ['B','C','P'],
    'reincarnate':             ['D'],
    'scrying':                 ['B','C','D','Wl','Wz'],
    'seeming':                 ['B','S','Wz'],
    'skill empowerment':       ['B','Wz'],
    'steel wind strike':       ['R','Wz'],
    'summon celestial':        ['C','P'],
    'summon dragon':           ['D','S','Wz'],
    'swift quiver':            ['R'],
    'telekinesis':             ['S','Wz'],
    'teleportation circle':    ['B','S','Wz'],
    'tree stride':             ['D','R'],
    'wall of force':           ['Wz'],
    'wall of light':           ['S','Wl','Wz'],
    'wall of stone':           ['D','S','Wz'],

    // ────── Level 6 ──────
    'arcane gate':             ['S','Wl','Wz'],
    'blade barrier':           ['C'],
    'chain lightning':         ['S','Wz'],
    'circle of death':         ['S','Wl','Wz'],
    'conjure fey':             ['D','Wl'],
    'contingency':             ['Wz'],
    'create undead':           ['C','Wl','Wz'],
    'disintegrate':            ['S','Wz'],
    'drawmij\u2019s instant summons':['Wz'],
    'eyebite':                 ['B','S','Wl','Wz'],
    'find the path':           ['B','C','D'],
    'flesh to stone':          ['Wl','Wz'],
    'forbiddance':             ['C'],
    'globe of invulnerability':['S','Wz'],
    'guards and wards':        ['B','Wz'],
    'harm':                    ['C'],
    'heal':                    ['C','D'],
    'heroes\u2019 feast':      ['C','D'],
    'magic jar':               ['Wz'],
    'mass suggestion':         ['B','S','Wl','Wz'],
    'move earth':              ['D','S','Wz'],
    'otto\u2019s irresistible dance':['B','Wz'],
    'planar ally':             ['C'],
    'programmed illusion':     ['B','Wz'],
    'soul cage':               ['Wl','Wz'],
    'sunbeam':                 ['D','S','Wz'],
    'tenser\u2019s transformation':['Wz'],
    'true seeing':             ['B','C','S','Wl','Wz'],
    'wall of ice':             ['Wz'],
    'wall of thorns':          ['D'],
    'wind walk':               ['D'],
    'word of recall':          ['C'],

    // ────── Level 7 ──────
    'conjure celestial':       ['C'],
    'crown of stars':          ['S','Wl','Wz'],
    'delayed blast fireball':  ['S','Wz'],
    'divine word':             ['C'],
    'etherealness':            ['B','C','S','Wl','Wz'],
    'finger of death':         ['S','Wl','Wz'],
    'fire storm':              ['C','D','S'],
    'forcecage':               ['B','Wl','Wz'],
    'mirage arcane':           ['B','D','Wz'],
    'mordenkainen\u2019s magnificent mansion':['B','Wz'],
    'mordenkainen\u2019s sword':['B','Wz'],
    'plane shift':             ['C','D','S','Wl','Wz'],
    'power word pain':         ['S','Wl','Wz'],
    'prismatic spray':         ['S','Wz'],
    'project image':           ['B','Wz'],
    'regenerate':              ['B','C','D'],
    'resurrection':            ['B','C'],
    'reverse gravity':         ['D','S','Wz'],
    'sequester':               ['Wz'],
    'simulacrum':              ['Wz'],
    'symbol':                  ['B','C','Wz'],
    'teleport':                ['B','S','Wz'],

    // ────── Level 8 ──────
    'antimagic field':         ['C','Wz'],
    'antipathy/sympathy':      ['B','D','Wz'],
    'clone':                   ['Wz'],
    'control weather':         ['C','D','Wz'],
    'demiplane':               ['Wl','Wz'],
    'dominate monster':        ['B','S','Wl','Wz'],
    'earthquake':              ['C','D','S'],
    'feeblemind':              ['B','D','Wl','Wz'],
    'glibness':                ['B','Wl'],
    'holy aura':               ['C'],
    'illusory dragon':         ['Wz'],
    'incendiary cloud':        ['S','Wz'],
    'maze':                    ['Wz'],
    'mind blank':              ['B','Wz'],
    'power word stun':         ['B','S','Wl','Wz'],
    'sunburst':                ['D','S','Wz'],
    'telepathy':               ['Wz'],
    'tsunami':                 ['D'],

    // ────── Level 9 ──────
    'astral projection':       ['C','Wl','Wz'],
    'foresight':               ['B','D','Wl','Wz'],
    'gate':                    ['C','S','Wz'],
    'imprisonment':            ['Wl','Wz'],
    'invulnerability':         ['Wz'],
    'mass heal':               ['C'],
    'mass polymorph':          ['B','S','Wz'],
    'meteor swarm':            ['S','Wz'],
    'power word heal':         ['B'],
    'power word kill':         ['B','S','Wl','Wz'],
    'prismatic wall':          ['Wz'],
    'psychic scream':          ['B','S','Wl','Wz'],
    'ravenous void':           ['Wz'],
    'shapechange':             ['D','Wz'],
    'storm of vengeance':      ['D'],
    'time stop':               ['S','Wz'],
    'true polymorph':          ['B','Wl','Wz'],
    'true resurrection':       ['C','D'],
    'weird':                   ['Wl','Wz'],
    'wish':                    ['S','Wz'],
  };

  // Helper: get class codes for a spell name (case-insensitive, ignoring punctuation)
  function spellClassesFor(name) {
    if (!name) return [];
    const key = String(name).toLowerCase()
      .replace(/\u2019/g, "'")             // curly apostrophe
      .replace(/[\u201C\u201D]/g, '"')     // curly quotes
      .trim();
    return SPELL_CLASSES[key]
      || SPELL_CLASSES[key.replace(/'/g, '')]
      || [];
  }

  // Public for debugging
  window.SPELL_CLASSES = SPELL_CLASSES;
  window.spellClassesFor = spellClassesFor;

  // Render the small coloured class tags
  function classTags(codes) {
    if (!codes || !codes.length) return '<span style="font-size:11px;color:var(--ink-muted);">—</span>';
    return codes.map(c => {
      const color = CLASS_COLOR[c] || '#888';
      const label = CLASS_FULL[c] || c;
      return `<span title="${label}" style="display:inline-block;font-size:9px;font-weight:700;letter-spacing:.05em;padding:1px 4px;margin:0 2px 1px 0;border-radius:2px;color:${color};border:1px solid ${color};background:rgba(0,0,0,0.04);">${c}</span>`;
    }).join('');
  }

  // ─── Patch the spell browser UI ──────────────────────────────────────
  function patchSpellBrowserUI() {
    const modal = document.getElementById('spell-browser-modal');
    if (!modal) return;

    // 1) Add class filter dropdown next to existing filters
    const filtersBar = modal.querySelector('div[style*="flex-wrap:wrap"]');
    const concSel = modal.querySelector('#sb-conc');
    if (filtersBar && concSel && !document.getElementById('sb-class')) {
      const sel = document.createElement('select');
      sel.id = 'sb-class';
      sel.onchange = () => window.renderSpellBrowser && window.renderSpellBrowser();
      sel.style.cssText = 'background:var(--parchment);border:1px solid var(--gold-dark);color:var(--ink);padding:5px 8px;font-family:\'Rajdhani\',sans-serif;font-size:12px;border-radius:2px;outline:none;';
      sel.innerHTML = '<option value="">All Classes</option>'
        + Object.keys(CLASS_FULL).map(c => `<option value="${c}">${CLASS_FULL[c]}</option>`).join('');
      concSel.insertAdjacentElement('afterend', sel);
    }

    // 2) Add the Classes column header
    const headerRow = modal.querySelector('thead tr');
    if (headerRow && !headerRow.dataset.classesAdded) {
      headerRow.dataset.classesAdded = '1';
      const th = document.createElement('th');
      th.style.cssText = 'padding:7px 6px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-dark);border-bottom:1px solid var(--gold-dark);';
      th.textContent = 'Classes';
      // insert before the trailing actions column
      const cells = headerRow.querySelectorAll('th');
      headerRow.insertBefore(th, cells[cells.length - 1]);
    }
  }

  // ─── Replace renderSpellBrowser to include class filter + column ─────
  function installSpellBrowserOverride() {
    // wait until SB_SPELLS exists
    if (typeof SB_SPELLS === 'undefined') {
      return setTimeout(installSpellBrowserOverride, 100);
    }
    window.renderSpellBrowser = function () {
      patchSpellBrowserUI();
      const search = (document.getElementById('sb-search').value || '').toLowerCase();
      const level  = document.getElementById('sb-level').value;
      const school = document.getElementById('sb-school').value;
      const conc   = document.getElementById('sb-conc').value;
      const cls    = (document.getElementById('sb-class') || {}).value || '';

      let list = SB_SPELLS.filter(s => {
        if (search && !s[0].toLowerCase().includes(search)) return false;
        if (level && s[1] !== level) return false;
        if (school && s[2] !== school) return false;
        if (conc && s[4] !== conc) return false;
        if (cls) {
          const cs = spellClassesFor(s[0]);
          if (cs.indexOf(cls) === -1) return false;
        }
        return true;
      });

      list.sort((a, b) => {
        let av = _sbSortKey === 'level' ? LEVEL_ORDER.indexOf(a[1]) : a[0].toLowerCase();
        let bv = _sbSortKey === 'level' ? LEVEL_ORDER.indexOf(b[1]) : b[0].toLowerCase();
        return av < bv ? -_sbSortDir : av > bv ? _sbSortDir : 0;
      });

      document.getElementById('sb-count').textContent = list.length + ' spell' + (list.length !== 1 ? 's' : '');

      const tbody = document.getElementById('sb-tbody');
      tbody.innerHTML = list.map((s) => {
        const [name, lvl, sch, cast, _conc, comp] = s;
        const sc = (typeof SCHOOL_COLORS !== 'undefined' && SCHOOL_COLORS[sch]) || '#888';
        const cb = _conc === 'yes' ? `<span style="font-size:9px;color:#c07070;border:1px solid #c07070;padding:1px 3px;border-radius:2px;font-weight:bold;">C</span>` : '';
        const tags = classTags(spellClassesFor(name));
        const nameEsc = name.replace(/'/g, "\\'");
        return `<tr style="background:var(--parchment);color:var(--ink);" onmouseover="this.style.background='rgba(184,150,90,0.22)'" onmouseout="this.style.background='var(--parchment)'">
          <td style="padding:6px 10px;font-weight:600;color:var(--ink);font-size:13px;">${name}</td>
          <td style="padding:6px 6px;text-align:center;"><span style="font-size:10px;padding:2px 5px;border-radius:2px;font-weight:bold;background:rgba(184,150,90,0.15);color:var(--gold-dark);">${lvl}</span></td>
          <td style="padding:6px 6px;font-size:12px;font-weight:600;color:${sc};">${sch}</td>
          <td style="padding:6px 6px;font-size:12px;color:var(--ink-soft);">${cast}</td>
          <td style="padding:6px 6px;text-align:center;">${cb}</td>
          <td style="padding:6px 6px;font-size:11px;color:var(--ink-muted);">${comp}</td>
          <td style="padding:6px 6px;font-size:11px;line-height:1.6;">${tags}</td>
          <td style="padding:6px 6px;text-align:right;white-space:nowrap;">
            <button class="sb-desc-btn" onclick="showSpellDetailByName('${nameEsc}')">Info</button>
            <button onclick="sbDirectAdd(${JSON.stringify(name)},${JSON.stringify(lvl)},${JSON.stringify(sch)},${JSON.stringify(cast)},${JSON.stringify(comp)},this)"
              style="background:var(--rail-dark);border:1px solid var(--gold-dark);color:var(--gold-light);font-family:'Rajdhani',sans-serif;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:2px 9px;cursor:pointer;border-radius:2px;font-weight:bold;white-space:nowrap;transition:.15s;margin-left:4px;"
              onmouseover="this.style.background='var(--gold-dark)';this.style.color='var(--parchment)'"
              onmouseout="this.style.background='var(--rail-dark)';this.style.color='var(--gold-light)'">+ Add</button>
          </td>
        </tr>`;
      }).join('') || `<tr><td colspan="8" style="padding:2rem;text-align:center;color:var(--ink-muted);font-style:italic;">No spells match your filters.</td></tr>`;
    };
  }

  // ═════════════════════════════════════════════════════════════════════
  //   CATALOG EXTENSIONS — Magic Items / Mounts & Vehicles / Trinkets /
  //   Poisons + custom Bell of Aggression. Tools & Weapons already exist.
  // ═════════════════════════════════════════════════════════════════════
  function _ext_ci(name, subcat, cost, currency, weight, desc) {
    return { name, subcategory: subcat, cost, currency, weight, description: desc || '' };
  }

  function installCatalogExtensions() {
    if (typeof CATALOG_DATA === 'undefined' || typeof CATALOG_CATS === 'undefined') {
      return setTimeout(installCatalogExtensions, 100);
    }

    // ── Bell of Aggression — custom homebrew magic item ────────────────
    const BELL_OF_AGGRESSION = _ext_ci(
      'Bell of Aggression',
      'Wondrous Item',
      0, 'Gold', 1,
      'Homebrew · Attunement required. Once per long rest, ring as a Bonus Action: all hostile creatures within 30 ft must make a DC 14 Wisdom save. On a failed save, target becomes Enraged (must attack the nearest creature on its next turn). Allies within 30 ft gain advantage on their next attack roll. — Custom item by the player.'
    );

    // ── Magic Items (D&D 2024 DMG — a curated cross-section) ───────────
    const MAGIC_ITEMS = {
      label: 'Magic Items',
      invCategory: 'Magic Item',
      sections: [
        { title: 'Common (55)', items: [
          _ext_ci('Armor of Gleaming', 'Armor', 100, 'Gold', 0, 'Common · Armor · Listed: B+100 GP'),
          _ext_ci('Bead of Nourishment', 'Wondrous Item', 50, 'Gold', 0, 'Common · Wondrous Item · Listed: 50 GP'),
          _ext_ci('Bead of Refreshment', 'Wondrous Item', 50, 'Gold', 0, 'Common · Wondrous Item · Listed: 50 GP'),
          _ext_ci('Boots of False Tracks', 'Wondrous Item · Attune', 100, 'Gold', 0, 'Common · Wondrous Item · Requires attunement · Listed: 100 GP'),
          _ext_ci('Candle of the Deep', 'Wondrous Item', 50, 'Gold', 0, 'Common · Wondrous Item · Listed: 50 GP'),
          _ext_ci('Cast-Off Armor', 'Armor', 100, 'Gold', 0, 'Common · Armor · Listed: B+100 GP'),
          _ext_ci('Charlatan\'s Die', 'Wondrous Item · Attune', 100, 'Gold', 0, 'Common · Wondrous Item · Requires attunement · Listed: 100 GP'),
          _ext_ci('Cloak of Billowing', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Cloak of Many Fashions', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Clockwork Amulet', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Clothes of Mending', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Dark Shard Amulet', 'Wondrous Item · Attune', 100, 'Gold', 0, 'Common · Wondrous Item · Requires attunement · Listed: 100 GP'),
          _ext_ci('Dread Helm', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Ear Horn of Hearing', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Enduring Spellbook', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Ersatz Eye', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Eternal Chalk', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 gp'),
          _ext_ci('Hat of Vermin', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Hat of Wizardry', 'Wondrous Item · Attune', 100, 'Gold', 0, 'Common · Wondrous Item · Requires attunement · Listed: 100 GP'),
          _ext_ci('Heward\'s Handy Spice Pouch', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Horn of Silent Alarm', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Instrument of Illusions', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Instrument of Scribing', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Lock of Trickery', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Manifold Tool', 'Wondrous Item · Attune', 100, 'Gold', 0, 'Common · Wondrous Item · Requires attunement · Listed: 100 GP'),
          _ext_ci('Mask of Changed Appearance', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Moon-Touched Sword', 'Weapon', 100, 'Gold', 0, 'Common · Weapon · Listed: B+100 GP'),
          _ext_ci('Mystery Key', 'Wondrous Item', 50, 'Gold', 0, 'Common · Wondrous Item · Listed: 50 GP'),
          _ext_ci('Mythallar Bracelet', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Orb of Direction', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Orb of Time', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Perfume of Bewitching', 'Wondrous Item', 50, 'Gold', 0, 'Common · Wondrous Item · Listed: 50 GP'),
          _ext_ci('Pipe of Smoke Monsters', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Pole of Angling', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Pole of Collapsing', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Pot of Awakening', 'Wondrous Item', 50, 'Gold', 0, 'Common · Wondrous Item · Listed: 50 GP'),
          _ext_ci('Potion of Climbing', 'Potion', 50, 'Gold', 0, 'Common · Potion · Listed: 50 GP'),
          _ext_ci('Potion of Comprehension', 'Potion', 50, 'Gold', 0, 'Common · Potion · Listed: 50 GP'),
          _ext_ci('Prosthetic Limb', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Rival Coin', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Rope of Mending', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Ruby of the War Mage', 'Wondrous Item · Attune', 100, 'Gold', 0, 'Common · Wondrous Item · Requires attunement · Listed: 100 GP'),
          _ext_ci('Shield of Expression', 'Armor', 100, 'Gold', 0, 'Common · Armor · Listed: B+100 GP'),
          _ext_ci('Silvered Weapon', 'Weapon', 100, 'Gold', 0, 'Common · Weapon · Listed: B+100 GP'),
          _ext_ci('Smoldering Armor', 'Armor', 100, 'Gold', 0, 'Common · Armor · Listed: B+100 GP'),
          _ext_ci('Staff of Adornment', 'Staff', 100, 'Gold', 0, 'Common · Staff · Listed: 100 GP'),
          _ext_ci('Staff of Birdcalls', 'Staff', 100, 'Gold', 0, 'Common · Staff · Listed: 100 GP'),
          _ext_ci('Staff of Flowers', 'Staff', 100, 'Gold', 0, 'Common · Staff · Listed: 100 GP'),
          _ext_ci('Sylvan Talon', 'Weapon · Attune', 100, 'Gold', 0, 'Common · Weapon · Requires attunement · Listed: B+100 GP'),
          _ext_ci('Talking Doll', 'Wondrous Item · Attune', 100, 'Gold', 0, 'Common · Wondrous Item · Requires attunement · Listed: 100 GP'),
          _ext_ci('Tankard of Sobriety', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Veteran\'s Cane', 'Wondrous Item', 100, 'Gold', 0, 'Common · Wondrous Item · Listed: 100 GP'),
          _ext_ci('Walloping Ammunition', 'Weapon', 50, 'Gold', 0, 'Common · Weapon · Listed: 50 GP'),
          _ext_ci('Wand of Conducting', 'Wand', 100, 'Gold', 0, 'Common · Wand · Listed: 100 GP'),
          _ext_ci('Wand of Pyrotechnics', 'Wand', 100, 'Gold', 0, 'Common · Wand · Listed: 100 GP')
        ]},
        { title: 'Uncommon (104)', items: [
          _ext_ci('Adamantine Armor', 'Armor', 400, 'Gold', 0, 'Uncommon · Armor · Listed: B+400 GP'),
          _ext_ci('Adamantine Weapon', 'Weapon', 400, 'Gold', 0, 'Uncommon · Weapon · Listed: B+400 GP'),
          _ext_ci('Adventurer\'s Ring', 'Ring', 250, 'Gold', 0, 'Uncommon · Ring · Listed: 250 GP'),
          _ext_ci('Alchemy Jug', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Amulet of Proof against Detection and Location', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Arcane Battery', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Baba Yaga\'s Dancing Broom', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Bag of Holding', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Bag of Tricks', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Boots of Elvenkind', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Boots of Striding and Springing', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Boots of the Winding Path', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Boots of the Winterlands', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Bracers of Archery', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Brooch of Shielding', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Broom of Flying', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Cap of Vanishing', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Cap of Water Breathing', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Circlet of Blasting', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Cloak of Elvenkind', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Cloak of Protection', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Cloak of the Manta Ray', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Decanter of Endless Water', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Deck of Illusions', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Driftglobe', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Dust of Disappearance', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Dust of Dryness', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Dust of Sneezing and Choking', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Elemental Gem', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Eversmoking Bottle', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Eyes of Charming', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Eyes of Minute Seeing', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Eyes of the Eagle', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Gauntlets of Ogre Power', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Gem of Brightness', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Gloves of Missile Snaring', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Gloves of Swimming and Climbing', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Gloves of Thievery', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Goggles of Night', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Hag Eye', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Harkon\'s Bite', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Hat of Disguise', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Hat of Vortexes', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Headband of Intellect', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Helm of Awareness', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Helm of Comprehending Languages', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Helm of Telepathy', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Immovable Rod', 'Rod', 400, 'Gold', 0, 'Uncommon · Rod · Listed: 400 GP'),
          _ext_ci('Javelin of Lightning', 'Weapon', 400, 'Gold', 0, 'Uncommon · Weapon · Listed: B+400 GP'),
          _ext_ci('Keoghtom\'s Ointment', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Lantern of Revealing', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Mariner\'s Armor', 'Armor', 400, 'Gold', 0, 'Uncommon · Armor · Listed: B+400 GP'),
          _ext_ci('Medallion of Thoughts', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Mind Sharpener', 'Ring · Attune', 400, 'Gold', 0, 'Uncommon · Ring · Requires attunement · Listed: 400 GP'),
          _ext_ci('Mithral Armor', 'Armor', 400, 'Gold', 0, 'Uncommon · Armor · Listed: B+400 GP'),
          _ext_ci('Nature\'s Mantle', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Necklace of Adaptation', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Oil of Slipperiness', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Pearl of Power', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Periapt of Health', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Periapt of Wound Closure', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Philter of Love', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Pipes of Haunting', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Pipes Of Pestilence', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Pipes of the Sewers', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Poison Soaked Kukri', 'Weapon · Attune', 400, 'Gold', 0, 'Uncommon · Weapon · Requires attunement · Listed: B+400 GP'),
          _ext_ci('Potion of Animal Friendship', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Potion of Fire Breath', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Potion of Growth', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Potion of Poison', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Potion of Pugilism', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Potion of Resistance', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Potion of Water Breathing', 'Potion', 200, 'Gold', 0, 'Uncommon · Potion · Listed: 200 GP'),
          _ext_ci('Quiver of Ehlonna', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Reliquary of Dawn', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Reliquary of Twilight', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Repeating Shot', 'Weapon · Attune', 400, 'Gold', 0, 'Uncommon · Weapon · Requires attunement · Listed: B+400 GP'),
          _ext_ci('Repulsion Shield', 'Armor', 400, 'Gold', 0, 'Uncommon · Armor · Listed: B+400 GP'),
          _ext_ci('Returning Weapon', 'Weapon', 400, 'Gold', 0, 'Uncommon · Weapon · Listed: B+400 GP'),
          _ext_ci('Ring of Jumping', 'Ring · Attune', 400, 'Gold', 0, 'Uncommon · Ring · Requires attunement · Listed: 400 GP'),
          _ext_ci('Ring of Mind Shielding', 'Ring · Attune', 400, 'Gold', 0, 'Uncommon · Ring · Requires attunement · Listed: 400 GP'),
          _ext_ci('Ring of Swimming', 'Ring', 400, 'Gold', 0, 'Uncommon · Ring · Listed: 400 GP'),
          _ext_ci('Ring of Warmth', 'Ring · Attune', 400, 'Gold', 0, 'Uncommon · Ring · Requires attunement · Listed: 400 GP'),
          _ext_ci('Ring of Water Walking', 'Ring', 400, 'Gold', 0, 'Uncommon · Ring · Listed: 400 GP'),
          _ext_ci('Robe of Useful Items', 'Wondrous Item', 200, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 200 GP'),
          _ext_ci('Rope of Climbing', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Saddle of the Cavalier', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Sending Stones', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Sentinel Shield', 'Armor', 400, 'Gold', 0, 'Uncommon · Armor · Listed: B+400 GP'),
          _ext_ci('Slippers of Spider Climbing', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Spell-Refueling Ring', 'Ring · Attune', 400, 'Gold', 0, 'Uncommon · Ring · Requires attunement · Listed: 400 GP'),
          _ext_ci('Spiked Shield', 'Armor · Attune', 400, 'Gold', 0, 'Uncommon · Armor · Requires attunement · Listed: B+400 GP'),
          _ext_ci('Staff of the Adder', 'Staff · Attune', 400, 'Gold', 0, 'Uncommon · Staff · Requires attunement · Listed: 400 GP'),
          _ext_ci('Staff of the Python', 'Staff · Attune', 400, 'Gold', 0, 'Uncommon · Staff · Requires attunement · Listed: 400 GP'),
          _ext_ci('Stone of Good Luck (Luckstone)', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP'),
          _ext_ci('Sword of Vengeance', 'Weapon · Attune', 400, 'Gold', 0, 'Uncommon · Weapon · Requires attunement · Listed: B+400 GP'),
          _ext_ci('Trident of Fish Command', 'Weapon · Attune', 400, 'Gold', 0, 'Uncommon · Weapon · Requires attunement · Listed: B+400 GP'),
          _ext_ci('Wand of Magic Detection', 'Wand', 400, 'Gold', 0, 'Uncommon · Wand · Listed: 400 GP'),
          _ext_ci('Wand of Magic Missiles', 'Wand', 400, 'Gold', 0, 'Uncommon · Wand · Listed: 400 GP'),
          _ext_ci('Wand of Secrets', 'Wand', 400, 'Gold', 0, 'Uncommon · Wand · Listed: 400 GP'),
          _ext_ci('Wand of Web', 'Wand · Attune', 400, 'Gold', 0, 'Uncommon · Wand · Requires attunement · Listed: 400 GP'),
          _ext_ci('Weapon of Warning', 'Weapon · Attune', 400, 'Gold', 0, 'Uncommon · Weapon · Requires attunement · Listed: B+400 GP'),
          _ext_ci('Wind Fan', 'Wondrous Item', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Listed: 400 GP'),
          _ext_ci('Winged Boots', 'Wondrous Item · Attune', 400, 'Gold', 0, 'Uncommon · Wondrous Item · Requires attunement · Listed: 400 GP')
        ]},
        { title: 'Rare (93)', items: [
          _ext_ci('Amulet of Health', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Amulet of Retributive Healing', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Armor of Resistance', 'Armor · Attune', 4000, 'Gold', 0, 'Rare · Armor · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Armor of Vulnerability', 'Armor · Attune', 4000, 'Gold', 0, 'Rare · Armor · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Arrow-Catching Shield', 'Armor · Attune', 4000, 'Gold', 0, 'Rare · Armor · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Bag of Beans', 'Wondrous Item', 2000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 2,000 GP'),
          _ext_ci('Bead of Force', 'Wondrous Item', 2000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 2,000 GP'),
          _ext_ci('Belt of Dwarvenkind', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Berserker Axe', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Boots of Levitation', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Boots of Speed', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Bowl of Commanding Water Elementals', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Bracers of Defense', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Brazier of Commanding Fire Elementals', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Brooch of the Elements', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Cape of the Mountebank', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Censer of Controlling Air Elementals', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Chime of Opening', 'Wondrous Item', 2000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 2,000 GP'),
          _ext_ci('Cloak of Displacement', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Cloak of the Bat', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Cube of Force', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Cube of Summoning', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Daern\'s Instant Fortress', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Dagger of Venom', 'Weapon', 4000, 'Gold', 0, 'Rare · Weapon · Listed: B+4,000 GP'),
          _ext_ci('Dazzling Weapon', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Dimensional Shackles', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Dragon Slayer', 'Weapon', 4000, 'Gold', 0, 'Rare · Weapon · Listed: B+4,000 GP'),
          _ext_ci('Elixir of Health', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Elven Chain', 'Armor', 4000, 'Gold', 0, 'Rare · Armor · Listed: B+4,000 GP'),
          _ext_ci('Flame Tongue', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Folding Boat', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Fork of Eddy Summoning', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Gem of Seeing', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Giant Slayer', 'Weapon', 4000, 'Gold', 0, 'Rare · Weapon · Listed: B+4,000 GP'),
          _ext_ci('Glamoured Studded Leather', 'Armor', 4000, 'Gold', 0, 'Rare · Armor · Listed: B+4,000 GP'),
          _ext_ci('Helm of Teleportation', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Heward\'s Handy Haversack', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Horn of Blasting', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Horseshoes of Speed', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Iron Bands of Bilarro', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Mace of Disruption', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Mace of Smiting', 'Weapon', 4000, 'Gold', 0, 'Rare · Weapon · Listed: B+4,000 GP'),
          _ext_ci('Mace of Terror', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Magen Handbell', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Mantle of Spell Resistance', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Mythallar Cloak', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Necklace of Fireballs', 'Wondrous Item', 2000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 2,000 GP'),
          _ext_ci('Necklace of Prayer Beads', 'Wondrous Item · Attune', 2000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 2,000 GP'),
          _ext_ci('Oil of Etherealness', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Periapt of Proof against Poison', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Portable Hole', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Potion of Clairvoyance', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Potion of Diminution', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Potion of Gaseous Form', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Potion of Heroism', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Potion of Invisibility', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Potion of Invulnerability', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Potion of Mind Reading', 'Potion', 2000, 'Gold', 0, 'Rare · Potion · Listed: 2,000 GP'),
          _ext_ci('Ring of Animal Influence', 'Ring', 4000, 'Gold', 0, 'Rare · Ring · Listed: 4,000 GP'),
          _ext_ci('Ring of Evasion', 'Ring · Attune', 4000, 'Gold', 0, 'Rare · Ring · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Ring of Feather Falling', 'Ring · Attune', 4000, 'Gold', 0, 'Rare · Ring · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Ring of Free Action', 'Ring · Attune', 4000, 'Gold', 0, 'Rare · Ring · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Ring of Protection', 'Ring · Attune', 4000, 'Gold', 0, 'Rare · Ring · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Ring of Resistance', 'Ring', 4000, 'Gold', 0, 'Rare · Ring · Listed: 4,000 GP'),
          _ext_ci('Ring of Spell Storing', 'Ring · Attune', 4000, 'Gold', 0, 'Rare · Ring · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Ring of the Ram', 'Ring · Attune', 4000, 'Gold', 0, 'Rare · Ring · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Ring of X-ray Vision', 'Ring · Attune', 4000, 'Gold', 0, 'Rare · Ring · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Robe of Eyes', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Rod of Rulership', 'Rod · Attune', 4000, 'Gold', 0, 'Rare · Rod · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Rope of Entanglement', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Salubrious Armor', 'Armor · Attune', 4000, 'Gold', 0, 'Rare · Armor · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Scroll of Protection', 'Scroll', 2000, 'Gold', 0, 'Rare · Scroll · Listed: 2,000 GP'),
          _ext_ci('Shield of Missile Attraction', 'Armor · Attune', 4000, 'Gold', 0, 'Rare · Armor · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Staff of Charming', 'Staff · Attune', 4000, 'Gold', 0, 'Rare · Staff · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Staff of Healing', 'Staff · Attune', 4000, 'Gold', 0, 'Rare · Staff · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Staff of Swarming Insects', 'Staff · Attune', 4000, 'Gold', 0, 'Rare · Staff · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Staff of the Woodlands', 'Staff · Attune', 4000, 'Gold', 0, 'Rare · Staff · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Staff of Withering', 'Staff · Attune', 4000, 'Gold', 0, 'Rare · Staff · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Stone of Controlling Earth Elementals', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Sun Blade', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Sword of Life Stealing', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Sword of Wounding', 'Weapon · Attune', 4000, 'Gold', 0, 'Rare · Weapon · Requires attunement · Listed: B+4,000 GP'),
          _ext_ci('Tentacle Rod', 'Rod · Attune', 4000, 'Gold', 0, 'Rare · Rod · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Vicious Weapon', 'Weapon', 4000, 'Gold', 0, 'Rare · Weapon · Listed: B+4,000 GP'),
          _ext_ci('Wand of Binding', 'Wand · Attune', 4000, 'Gold', 0, 'Rare · Wand · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Wand of Enemy Detection', 'Wand · Attune', 4000, 'Gold', 0, 'Rare · Wand · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Wand of Fear', 'Wand · Attune', 4000, 'Gold', 0, 'Rare · Wand · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Wand of Fireballs', 'Wand · Attune', 4000, 'Gold', 0, 'Rare · Wand · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Wand of Lightning Bolts', 'Wand · Attune', 4000, 'Gold', 0, 'Rare · Wand · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Wand of Paralysis', 'Wand · Attune', 4000, 'Gold', 0, 'Rare · Wand · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Wand of Wonder', 'Wand · Attune', 4000, 'Gold', 0, 'Rare · Wand · Requires attunement · Listed: 4,000 GP'),
          _ext_ci('Windskiff', 'Wondrous Item', 4000, 'Gold', 0, 'Rare · Wondrous Item · Listed: 4,000 GP'),
          _ext_ci('Wings of Flying', 'Wondrous Item · Attune', 4000, 'Gold', 0, 'Rare · Wondrous Item · Requires attunement · Listed: 4,000 GP')
        ]},
        { title: 'Very Rare (61)', items: [
          _ext_ci('Ammunition of Slaying', 'Weapon', 20000, 'Gold', 0, 'Very Rare · Weapon · Listed: 20,000 GP'),
          _ext_ci('Amulet of the Planes', 'Wondrous Item · Attune', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Animated Shield', 'Armor · Attune', 40000, 'Gold', 0, 'Very Rare · Armor · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Bag of Devouring', 'Wondrous Item', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 40,000 GP'),
          _ext_ci('Candle of Invocation', 'Wondrous Item · Attune', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 20,000 GP'),
          _ext_ci('Carpet of Flying', 'Wondrous Item', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 40,000 GP'),
          _ext_ci('Cauldron of Rebirth', 'Wondrous Item · Attune', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Cloak of Arachnida', 'Wondrous Item · Attune', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Crystal Ball', 'Wondrous Item · Attune', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Dancing Sword', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Demon Armor', 'Armor · Attune', 40000, 'Gold', 0, 'Very Rare · Armor · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Dragon Scale Mail', 'Armor · Attune', 40000, 'Gold', 0, 'Very Rare · Armor · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Dwarven Plate', 'Armor', 40000, 'Gold', 0, 'Very Rare · Armor · Listed: B+40,000 GP'),
          _ext_ci('Dwarven Thrower', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Efreeti Bottle', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Energy Bow', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Executioner\'s Axe', 'Weapon', 40000, 'Gold', 0, 'Very Rare · Weapon · Listed: B+40,000 GP'),
          _ext_ci('Frost Brand', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Hat of Many Spells', 'Wondrous Item · Attune', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Helm of Brilliance', 'Wondrous Item · Attune', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 20,000 GP'),
          _ext_ci('Horseshoes of a Zephyr', 'Wondrous Item', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 40,000 GP'),
          _ext_ci('Lute of Thunderous Thumping', 'Weapon', 40000, 'Gold', 0, 'Very Rare · Weapon · Listed: B+40,000 GP'),
          _ext_ci('Manual of Bodily Health', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Manual of Gainful Exercise', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Manual of Golems', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Manual of Quickness of Action', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Mirror of Life Trapping', 'Wondrous Item', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 40,000 GP'),
          _ext_ci('Niko\'s Mace', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Nine Lives Stealer', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Nolzur\'s Marvelous Pigments', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Oathbow', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Oil of Sharpness', 'Potion', 20000, 'Gold', 0, 'Very Rare · Potion · Listed: 20,000 GP'),
          _ext_ci('Potion of Flying', 'Potion', 20000, 'Gold', 0, 'Very Rare · Potion · Listed: 20,000 GP'),
          _ext_ci('Potion of Greater Invisibility', 'Potion', 20000, 'Gold', 0, 'Very Rare · Potion · Listed: 20,000 GP'),
          _ext_ci('Potion of Longevity', 'Potion', 20000, 'Gold', 0, 'Very Rare · Potion · Listed: 20,000 GP'),
          _ext_ci('Potion of Speed', 'Potion', 20000, 'Gold', 0, 'Very Rare · Potion · Listed: 20,000 GP'),
          _ext_ci('Potion of Vitality', 'Potion', 20000, 'Gold', 0, 'Very Rare · Potion · Listed: 20,000 GP'),
          _ext_ci('Quarterstaff of the Acrobat', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Ring of Regeneration', 'Ring · Attune', 40000, 'Gold', 0, 'Very Rare · Ring · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Ring of Shooting Stars', 'Ring · Attune', 40000, 'Gold', 0, 'Very Rare · Ring · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Ring of Telekinesis', 'Ring · Attune', 40000, 'Gold', 0, 'Very Rare · Ring · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Robe of Scintillating Colors', 'Wondrous Item · Attune', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Robe of Stars', 'Wondrous Item · Attune', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Rod of Absorption', 'Rod · Attune', 20000, 'Gold', 0, 'Very Rare · Rod · Requires attunement · Listed: 20,000 GP'),
          _ext_ci('Rod of Alertness', 'Rod · Attune', 40000, 'Gold', 0, 'Very Rare · Rod · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Rod of Security', 'Rod', 40000, 'Gold', 0, 'Very Rare · Rod · Listed: 40,000 GP'),
          _ext_ci('Scimitar of Speed', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Shield of the Cavalier', 'Armor · Attune', 40000, 'Gold', 0, 'Very Rare · Armor · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Spellguard Shield', 'Armor · Attune', 40000, 'Gold', 0, 'Very Rare · Armor · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Spirit Board', 'Wondrous Item', 40000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 40,000 GP'),
          _ext_ci('Staff of Fire', 'Staff · Attune', 40000, 'Gold', 0, 'Very Rare · Staff · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Staff of Frost', 'Staff · Attune', 40000, 'Gold', 0, 'Very Rare · Staff · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Staff of Power', 'Staff · Attune', 40000, 'Gold', 0, 'Very Rare · Staff · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Staff of Striking', 'Staff · Attune', 40000, 'Gold', 0, 'Very Rare · Staff · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Staff of Thunder and Lightning', 'Staff · Attune', 40000, 'Gold', 0, 'Very Rare · Staff · Requires attunement · Listed: 40,000 GP'),
          _ext_ci('Sword of Sharpness', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Thunderous Greatclub', 'Weapon · Attune', 40000, 'Gold', 0, 'Very Rare · Weapon · Requires attunement · Listed: B+40,000 GP'),
          _ext_ci('Tome of Clear Thought', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Tome of Leadership and Influence', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Tome of Understanding', 'Wondrous Item', 20000, 'Gold', 0, 'Very Rare · Wondrous Item · Listed: 20,000 GP'),
          _ext_ci('Wand of Polymorph', 'Wand · Attune', 40000, 'Gold', 0, 'Very Rare · Wand · Requires attunement · Listed: 40,000 GP')
        ]},
        { title: 'Legendary (38)', items: [
          _ext_ci('Apparatus of Kwalish', 'Wondrous Item', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 200,000 GP'),
          _ext_ci('Armor of Invulnerability', 'Armor · Attune', 200000, 'Gold', 0, 'Legendary · Armor · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Cloak of Invisibility', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Crystal Ball of Mind Reading', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Crystal Ball of Telepathy', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Crystal Ball of True Seeing', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Cubic Gate', 'Wondrous Item', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 200,000 GP'),
          _ext_ci('Deck of Many Things', 'Wondrous Item', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 200,000 GP'),
          _ext_ci('Defender', 'Weapon · Attune', 200000, 'Gold', 0, 'Legendary · Weapon · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Efreeti Chain', 'Armor · Attune', 200000, 'Gold', 0, 'Legendary · Armor · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Hammer of Thunderbolts', 'Weapon · Attune', 200000, 'Gold', 0, 'Legendary · Weapon · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Holy Avenger', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Iron Flask', 'Wondrous Item', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 200,000 GP'),
          _ext_ci('Luck Blade', 'Weapon · Attune', 200000, 'Gold', 0, 'Legendary · Weapon · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Moonblade', 'Weapon · Attune', 200000, 'Gold', 0, 'Legendary · Weapon · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Plate Armor of Etherealness', 'Armor · Attune', 200000, 'Gold', 0, 'Legendary · Armor · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Ring of Djinni Summoning', 'Ring · Attune', 200000, 'Gold', 0, 'Legendary · Ring · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Ring of Elemental Command', 'Ring · Attune', 200000, 'Gold', 0, 'Legendary · Ring · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Ring of Invisibility', 'Ring · Attune', 200000, 'Gold', 0, 'Legendary · Ring · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Ring of Spell Turning', 'Ring · Attune', 200000, 'Gold', 0, 'Legendary · Ring · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Ring of Three Wishes', 'Ring', 100000, 'Gold', 0, 'Legendary · Ring · Listed: 100,000 GP'),
          _ext_ci('Robe of the Archmagi', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Rod of Lordly Might', 'Rod · Attune', 200000, 'Gold', 0, 'Legendary · Rod · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Rod of Resurrection', 'Rod · Attune', 200000, 'Gold', 0, 'Legendary · Rod · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Scarab of Protection', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Scroll of Titan Summoning', 'Scroll', 100000, 'Gold', 0, 'Legendary · Scroll · Listed: 100,000 GP'),
          _ext_ci('Sovereign Glue', 'Wondrous Item', 100000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 100,000 GP'),
          _ext_ci('Sphere of Annihilation', 'Wondrous Item', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 200,000 GP'),
          _ext_ci('Staff of the Magi', 'Staff · Attune', 200000, 'Gold', 0, 'Legendary · Staff · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Sword of Answering', 'Weapon · Attune', 200000, 'Gold', 0, 'Legendary · Weapon · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Talisman of Pure Good', 'Wondrous Item · Attune', 100000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 100,000 GP'),
          _ext_ci('Talisman of the Sphere', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Talisman of Ultimate Evil', 'Wondrous Item · Attune', 100000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 100,000 GP'),
          _ext_ci('Tome of the Dragon', 'Wondrous Item', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 200,000 GP'),
          _ext_ci('Tome of the Stilled Tongue', 'Wondrous Item · Attune', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Requires attunement · Listed: 200,000 GP'),
          _ext_ci('Universal Solvent', 'Wondrous Item', 100000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 100,000 GP'),
          _ext_ci('Vorpal Sword', 'Weapon · Attune', 200000, 'Gold', 0, 'Legendary · Weapon · Requires attunement · Listed: B+200,000 GP'),
          _ext_ci('Well of Many Worlds', 'Wondrous Item', 200000, 'Gold', 0, 'Legendary · Wondrous Item · Listed: 200,000 GP')
        ]},
        { title: 'Artifact (15)', items: [
          _ext_ci('Axe of the Dwarvish Lords', 'Weapon · Attune', 0, 'Gold', 0, 'Artifact · Weapon · Requires attunement · Listed: Priceless'),
          _ext_ci('Blackrazor', 'Weapon · Attune', 0, 'Gold', 0, 'Artifact · Weapon · Requires attunement · Listed: Priceless'),
          _ext_ci('Book of Exalted Deeds', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Book of Vile Darkness', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Calimemnon Crystal', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Crown Of Horns', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Demonomicon of Iggwilv', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Ebonbane', 'Weapon · Attune', 0, 'Gold', 0, 'Artifact · Weapon · Requires attunement · Listed: Priceless'),
          _ext_ci('Eye and Hand of Vecna', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Orb of Damara', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Orb of Dragonkind', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Artifact · Wondrous Item · Requires attunement · Listed: Priceless'),
          _ext_ci('Sword of Kas', 'Weapon · Attune', 0, 'Gold', 0, 'Artifact · Weapon · Requires attunement · Listed: Priceless'),
          _ext_ci('Wand of Orcus', 'Wand · Attune', 0, 'Gold', 0, 'Artifact · Wand · Requires attunement · Listed: Priceless'),
          _ext_ci('Wave', 'Weapon · Attune', 0, 'Gold', 0, 'Artifact · Weapon · Requires attunement · Listed: Priceless'),
          _ext_ci('Whelm', 'Weapon · Attune', 0, 'Gold', 0, 'Artifact · Weapon · Requires attunement · Listed: Priceless')
        ]},
        { title: 'Varies (70)', items: [
          _ext_ci('Ammunition, +1, +2, or +3', 'Weapon', 0, 'Gold', 0, 'Varies · Weapon · Listed: Varies'),
          _ext_ci('Ammunition, +1, +2, or +3', 'Weapon', 0, 'Gold', 0, 'Varies · Weapon · Listed: Varies'),
          _ext_ci('Ammunition, +1, +2, or +3', 'Weapon', 0, 'Gold', 0, 'Varies · Weapon · Listed: Varies'),
          _ext_ci('Armor, +1, +2, or +3', 'Armor', 0, 'Gold', 0, 'Varies · Armor · Listed: Varies'),
          _ext_ci('Armor, +1, +2, or +3', 'Armor', 0, 'Gold', 0, 'Varies · Armor · Listed: Varies'),
          _ext_ci('Armor, +1, +2, or +3', 'Armor', 0, 'Gold', 0, 'Varies · Armor · Listed: Varies'),
          _ext_ci('Belt of Giant Strength', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Belt of Giant Strength', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Belt of Giant Strength', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Armor', 'Armor · Attune', 0, 'Gold', 0, 'Varies · Armor · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Armor', 'Armor · Attune', 0, 'Gold', 0, 'Varies · Armor · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Armor', 'Armor · Attune', 0, 'Gold', 0, 'Varies · Armor · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Armor', 'Armor · Attune', 0, 'Gold', 0, 'Varies · Armor · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Staff', 'Staff · Attune', 0, 'Gold', 0, 'Varies · Staff · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Staff', 'Staff · Attune', 0, 'Gold', 0, 'Varies · Staff · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Staff', 'Staff · Attune', 0, 'Gold', 0, 'Varies · Staff · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Staff', 'Staff · Attune', 0, 'Gold', 0, 'Varies · Staff · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Weapon', 'Weapon · Attune', 0, 'Gold', 0, 'Varies · Weapon · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Weapon', 'Weapon · Attune', 0, 'Gold', 0, 'Varies · Weapon · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Weapon', 'Weapon · Attune', 0, 'Gold', 0, 'Varies · Weapon · Requires attunement · Listed: Varies'),
          _ext_ci('Enspelled Weapon', 'Weapon · Attune', 0, 'Gold', 0, 'Varies · Weapon · Requires attunement · Listed: Varies'),
          _ext_ci('Figurine of Wondrous Power', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Figurine of Wondrous Power', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Figurine of Wondrous Power', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Harper Pin', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Harper Pin', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Horn of Valhalla', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Horn of Valhalla', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Horn of Valhalla', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Instrument of the Bards', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Instrument of the Bards', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Instrument of the Bards', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Instrument of the Bards', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Ioun Stone', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Ioun Stone', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Ioun Stone', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Varies'),
          _ext_ci('Mechanical Wonder', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Mechanical Wonder', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Mechanical Wonder', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Potion of Giant Strength', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Potion of Giant Strength', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Potion of Giant Strength', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Potion of Giant Strength', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Potion of Healing', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Potion of Healing', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Potion of Healing', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Potion of Healing', 'Potion', 0, 'Gold', 0, 'Varies · Potion · Listed: Varies'),
          _ext_ci('Quaal\'s Feather Token', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Quaal\'s Feather Token', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Rod of the Pact Keeper', 'Rod · Attune', 0, 'Gold', 0, 'Varies · Rod · Requires attunement · Listed: Varies'),
          _ext_ci('Rod of the Pact Keeper', 'Rod · Attune', 0, 'Gold', 0, 'Varies · Rod · Requires attunement · Listed: Varies'),
          _ext_ci('Rod of the Pact Keeper', 'Rod · Attune', 0, 'Gold', 0, 'Varies · Rod · Requires attunement · Listed: Varies'),
          _ext_ci('Shield, +1, +2, or +3', 'Armor', 0, 'Gold', 0, 'Varies · Armor · Listed: Varies'),
          _ext_ci('Shield, +1, +2, or +3', 'Armor', 0, 'Gold', 0, 'Varies · Armor · Listed: Varies'),
          _ext_ci('Shield, +1, +2, or +3', 'Armor', 0, 'Gold', 0, 'Varies · Armor · Listed: Varies'),
          _ext_ci('Spell Scroll', 'Scroll', 0, 'Gold', 0, 'Varies · Scroll · Listed: Varies'),
          _ext_ci('Spell Scroll', 'Scroll', 0, 'Gold', 0, 'Varies · Scroll · Listed: Varies'),
          _ext_ci('Spell Scroll', 'Scroll', 0, 'Gold', 0, 'Varies · Scroll · Listed: Varies'),
          _ext_ci('Spell Scroll', 'Scroll', 0, 'Gold', 0, 'Varies · Scroll · Listed: Varies'),
          _ext_ci('Spell Scroll', 'Scroll', 0, 'Gold', 0, 'Varies · Scroll · Listed: Varies'),
          _ext_ci('Thayan Spell Tattoo', 'Wondrous Item · Attune', 0, 'Gold', 0, 'Varies · Wondrous Item · Requires attunement · Listed: Special'),
          _ext_ci('Wand of the War Mage, +1, +2 or +3', 'Wand · Attune', 0, 'Gold', 0, 'Varies · Wand · Requires attunement · Listed: Varies'),
          _ext_ci('Wand of the War Mage, +1, +2 or +3', 'Wand · Attune', 0, 'Gold', 0, 'Varies · Wand · Requires attunement · Listed: Varies'),
          _ext_ci('Wand of the War Mage, +1, +2 or +3', 'Wand · Attune', 0, 'Gold', 0, 'Varies · Wand · Requires attunement · Listed: Varies'),
          _ext_ci('Weapon, +1, +2 or +3', 'Weapon', 0, 'Gold', 0, 'Varies · Weapon · Listed: Varies'),
          _ext_ci('Weapon, +1, +2 or +3', 'Weapon', 0, 'Gold', 0, 'Varies · Weapon · Listed: Varies'),
          _ext_ci('Weapon, +1, +2 or +3', 'Weapon', 0, 'Gold', 0, 'Varies · Weapon · Listed: Varies'),
          _ext_ci('Wraps of Unarmed Power', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Wraps of Unarmed Power', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies'),
          _ext_ci('Wraps of Unarmed Power', 'Wondrous Item', 0, 'Gold', 0, 'Varies · Wondrous Item · Listed: Varies')
        ]},
        { title: 'Custom (Player-Crafted)', items: [
          _ext_ci(
            'Bell of Aggression',
            'Wondrous Item · Attune',
            0, 'Gold', 1,
            'Homebrew · Attunement required. Once per long rest, ring as a Bonus Action: all hostile creatures within 30 ft must make a DC 14 Wisdom save. On a failed save, target becomes Enraged (must attack the nearest creature on its next turn). Allies within 30 ft gain advantage on their next attack roll. — Custom item by the player.'
          ),
        ]}
      ],
    };

    // ── Mounts & Vehicles ──────────────────────────────────────────────
    const MOUNTS_VEHICLES = {
      label: 'Mounts & Vehicles',
      invCategory: 'Mount/Vehicle',
      sections: [
        { title: 'Mounts', items: [
          _ext_ci('Camel', 'Mount', 50, 'Gold', 0, 'Carrying 480 lb; 50 ft speed; suited for desert travel.'),
          _ext_ci('Donkey', 'Mount', 8, 'Gold', 0, 'Carrying 420 lb; 40 ft speed.'),
          _ext_ci('Elephant', 'Mount', 200, 'Gold', 0, 'Carrying 1,320 lb; 40 ft speed.'),
          _ext_ci('Horse, Draft', 'Mount', 50, 'Gold', 0, 'Carrying 540 lb; 40 ft speed.'),
          _ext_ci('Horse, Riding', 'Mount', 75, 'Gold', 0, 'Carrying 480 lb; 60 ft speed.'),
          _ext_ci('Mastiff', 'Mount', 25, 'Gold', 0, 'Carrying 195 lb; 40 ft speed; can be ridden by Small characters.'),
          _ext_ci('Mule', 'Mount', 8, 'Gold', 0, 'Carrying 420 lb; 40 ft speed; sure-footed.'),
          _ext_ci('Pony', 'Mount', 30, 'Gold', 0, 'Carrying 225 lb; 40 ft speed.'),
          _ext_ci('Warhorse', 'Mount', 400, 'Gold', 0, 'Carrying 540 lb; 60 ft speed; trained for combat.'),
          _ext_ci('Griffon (rare)', 'Mount', 0, 'Gold', 0, 'Carrying 540 lb; 80 ft fly speed; legendary mount.'),
          _ext_ci('Hippogriff (rare)', 'Mount', 0, 'Gold', 0, 'Carrying 270 lb; 60 ft fly speed.'),
        ]},
        { title: 'Tack, Harness & Drawn Vehicles', items: [
          _ext_ci('Bit and Bridle', 'Tack', 2, 'Gold', 1, 'Standard control gear for a mount.'),
          _ext_ci('Saddle, Exotic', 'Tack', 60, 'Gold', 40, 'For aquatic or flying mounts.'),
          _ext_ci('Saddle, Military', 'Tack', 20, 'Gold', 30, 'Helps stay mounted under attack.'),
          _ext_ci('Saddle, Pack', 'Tack', 5, 'Gold', 15, 'For carrying gear, not riders.'),
          _ext_ci('Saddle, Riding', 'Tack', 10, 'Gold', 25, 'Standard riding saddle.'),
          _ext_ci('Saddlebags', 'Tack', 4, 'Gold', 8, 'Two sturdy bags slung over a saddle.'),
          _ext_ci('Stabling (per day)', 'Tack', 5, 'Silver', 0, 'Care and feeding of a mount for one day.'),
          _ext_ci('Carriage', 'Vehicle', 100, 'Gold', 600, '4-wheeled enclosed vehicle; needs 2 horses.'),
          _ext_ci('Cart', 'Vehicle', 15, 'Gold', 200, '2-wheeled open vehicle; light loads.'),
          _ext_ci('Chariot', 'Vehicle', 250, 'Gold', 100, 'Fast 2-wheel war platform; needs 2 horses.'),
          _ext_ci('Sled', 'Vehicle', 20, 'Gold', 300, 'For snow / ice; pulled by mounts.'),
          _ext_ci('Wagon', 'Vehicle', 35, 'Gold', 400, '4-wheeled heavy hauler.'),
        ]},
        { title: 'Waterborne Vessels', items: [
          _ext_ci('Rowboat', 'Waterborne', 50, 'Gold', 100, '5 mph; up to 3 medium passengers.'),
          _ext_ci('Keelboat', 'Waterborne', 3000, 'Gold', 0, 'Sailing/rowing river craft.'),
          _ext_ci('Sailing Ship', 'Waterborne', 10000, 'Gold', 0, 'Open-sea vessel; crew of ~20.'),
          _ext_ci('Warship', 'Waterborne', 25000, 'Gold', 0, 'Heavy combat vessel; crew of ~60.'),
          _ext_ci('Longship', 'Waterborne', 10000, 'Gold', 0, 'Fast raider; 40 crew, can beach.'),
          _ext_ci('Galley', 'Waterborne', 30000, 'Gold', 0, 'Large oared warship; 80 crew.'),
        ]},
        { title: 'Air & Planar', items: [
          _ext_ci('Airship', 'Airborne', 20000, 'Gold', 0, 'Magical airship; 20 mph; needs elemental engine.'),
          _ext_ci('Spelljammer (rare)', 'Spacefaring', 0, 'Gold', 0, 'Wildspace vessel powered by a spelljamming helm.'),
        ]},
      ],
    };

    // ── Trinkets (PHB 2024 trinket table — a representative spread) ──
    const TRINKETS = {
      label: 'Trinkets',
      invCategory: 'Trinket',
      sections: [
        { title: 'Curiosities & Keepsakes', items: [
          _ext_ci('Mummified Goblin Hand', 'Trinket', 0, 'Gold', 0, 'Withered, knuckles wrapped in copper wire.'),
          _ext_ci('Piece of Crystal Faintly Glowing in Moonlight', 'Trinket', 0, 'Gold', 0, 'Cool to the touch, hums softly.'),
          _ext_ci('Gold Coin from an Unknown Land', 'Trinket', 0, 'Gold', 0, 'Foreign mint; the language is unfamiliar.'),
          _ext_ci('Diary in Unknown Language', 'Trinket', 0, 'Gold', 0, 'Looped script, recent ink.'),
          _ext_ci('Brass Ring Without Use', 'Trinket', 0, 'Gold', 0, 'Fits no finger known to its bearer.'),
          _ext_ci('Old Chess Piece Made From Glass', 'Trinket', 0, 'Gold', 0, 'A knight, with a faint chip in the mane.'),
          _ext_ci('Pair of Knucklebone Dice', 'Trinket', 0, 'Gold', 0, 'Each with a skull on the 1-face.'),
          _ext_ci('Small Idol of Forgotten God', 'Trinket', 0, 'Gold', 0, 'Worn-smooth wood; you do not know its name.'),
          _ext_ci('Lock of Beautiful Hair', 'Trinket', 0, 'Gold', 0, 'Tied with a thread; no idea whose.'),
          _ext_ci('Black Pirate Flag with a Skull and Crossbones', 'Trinket', 0, 'Gold', 0, 'Stained; one corner singed.'),
          _ext_ci('Tiny Mechanical Crab That Moves on Its Own', 'Trinket', 0, 'Gold', 0, 'Skitters when wound by a tiny key (lost).'),
          _ext_ci('Glass Orb Filled with Smoke', 'Trinket', 0, 'Gold', 0, 'The smoke moves of its own accord.'),
          _ext_ci('Iron Holy Symbol of a Forgotten Faith', 'Trinket', 0, 'Gold', 0, 'Cold to the touch.'),
          _ext_ci('Skull-Shaped Pipe', 'Trinket', 0, 'Gold', 0, 'Smoke from it smells faintly of cinnamon.'),
          _ext_ci('1-Inch Cube, Each Side Different Color', 'Trinket', 0, 'Gold', 0, 'Vibrates faintly when held.'),
          _ext_ci('Single Caltrop That Glows in the Dark', 'Trinket', 0, 'Gold', 0, 'Always faintly warm.'),
          _ext_ci('Crystal Vial of Whispering Wind', 'Trinket', 0, 'Gold', 0, 'Voices speak briefly when uncorked.'),
          _ext_ci('Black Velvet Mask Sewn with White Threads', 'Trinket', 0, 'Gold', 0, 'Stars in the embroidery; fits perfectly.'),
          _ext_ci('Wooden Token Depicting a Castle', 'Trinket', 0, 'Gold', 0, 'Burned into the wood.'),
          _ext_ci('Small Pouch of Black Sand', 'Trinket', 0, 'Gold', 0, 'Refills slightly each new moon.'),
        ]},
      ],
    };

    // ── Poisons (DMG 2024 — common poisons) ─────────────────────────────
    const POISONS = {
      label: 'Poisons',
      invCategory: 'Poison',
      sections: [
        { title: 'Contact', items: [
          _ext_ci('Drow Poison', 'Poison (Injury)', 200, 'Gold', 0, 'DC 13 Con save or Poisoned 1 hr; KO if save fails by 5+.'),
          _ext_ci('Pale Tincture', 'Poison (Ingested)', 250, 'Gold', 0, 'DC 16 Con; 1d6 poison/day; lasts 7 days.'),
          _ext_ci('Wyvern Poison', 'Poison (Injury)', 1200, 'Gold', 0, 'DC 15 Con; 7d6 poison (half on save).'),
          _ext_ci('Serpent Venom', 'Poison (Injury)', 200, 'Gold', 0, 'DC 11 Con; 3d6 poison (half on save).'),
          _ext_ci('Assassin\u2019s Blood', 'Poison (Ingested)', 150, 'Gold', 0, 'DC 10 Con; 1d12 poison & Poisoned 24 hr.'),
          _ext_ci('Truth Serum', 'Poison (Ingested)', 150, 'Gold', 0, 'DC 11 Con; cannot speak deliberate lies 1 hr.'),
          _ext_ci('Carrion Crawler Mucus', 'Poison (Contact)', 200, 'Gold', 0, 'DC 13 Con; Poisoned 1 min; Paralyzed if fails by 5+.'),
          _ext_ci('Essence of Ether', 'Poison (Inhaled)', 300, 'Gold', 0, 'DC 15 Con; Poisoned 8 hr; unconscious if fails by 5+.'),
          _ext_ci('Malice', 'Poison (Inhaled)', 250, 'Gold', 0, 'DC 15 Con; Blinded 1 hr.'),
          _ext_ci('Midnight Tears', 'Poison (Ingested)', 1500, 'Gold', 0, 'At next midnight: DC 17 Con; 9d6 poison.'),
          _ext_ci('Oil of Taggit', 'Poison (Contact)', 400, 'Gold', 0, 'DC 13 Con; Poisoned & unconscious 24 hr.'),
          _ext_ci('Purple Worm Poison', 'Poison (Injury)', 2000, 'Gold', 0, 'DC 19 Con; 12d6 poison (half on save).'),
          _ext_ci('Torpor', 'Poison (Ingested)', 600, 'Gold', 0, 'DC 15 Con; Poisoned 4d6 hours.'),
          _ext_ci('Basic Poison (vial)', 'Poison (Injury)', 100, 'Gold', 0, 'Coat a weapon: target DC 10 Con or +1d4 poison damage.'),
        ]},
      ],
    };

    // Merge into existing data
    CATALOG_DATA.magic = MAGIC_ITEMS;
    CATALOG_DATA.mounts = MOUNTS_VEHICLES;
    CATALOG_DATA.trinkets = TRINKETS;
    CATALOG_DATA.poisons = POISONS;

    // Add to category list if not already present
    const addCat = (id, label) => {
      if (!CATALOG_CATS.some(c => (c.id || c[0]) === id)) {
        CATALOG_CATS.push({ id, label });
      }
    };
    addCat('magic', 'Magic Items');
    addCat('mounts', 'Mounts & Vehicles');
    addCat('trinkets', 'Trinkets');
    addCat('poisons', 'Poisons');

    // Force a redraw of category buttons if the catalog modal already wired
    if (typeof renderCatalogCats === 'function') {
      try { renderCatalogCats(); } catch (e) { /* noop */ }
    }
    if (typeof refreshCatalog === 'function') {
      try { refreshCatalog(); } catch (e) { /* noop */ }
    }
  }

  // ═════════════════════════════════════════════════════════════════════
  //   Weapon Mastery cheat-sheet — adds a small reference card to the
  //   classes/features panel for classes that get the feature in 2024.
  // ═════════════════════════════════════════════════════════════════════
  const WEAPON_MASTERY_CLASSES = ['Barbarian', 'Fighter', 'Paladin', 'Ranger'];
  const WEAPON_MASTERY_PROPS = [
    ['Cleave',  'On hit with a melee weapon attack, also damage a second creature within 5 ft. Once per turn.'],
    ['Graze',   'On a miss, the target takes damage equal to your ability modifier.'],
    ['Nick',    'Off-hand light weapon attack happens as part of the Attack action (no bonus action).'],
    ['Push',    'On a hit, push a Large or smaller target 10 ft straight away.'],
    ['Sap',     'On a hit, the target has Disadvantage on its next attack roll before the start of your next turn.'],
    ['Slow',    'On a hit, target\u2019s speed is reduced by 10 ft until the start of your next turn.'],
    ['Topple',  'On a hit, target makes a Con save or is knocked Prone (DC 8 + prof + ability mod).'],
    ['Vex',     'On a hit, you have Advantage on your next attack roll against this target before your next turn ends.'],
  ];
  window.WEAPON_MASTERY_CLASSES = WEAPON_MASTERY_CLASSES;
  window.WEAPON_MASTERY_PROPS = WEAPON_MASTERY_PROPS;

  function ensureWeaponMasteryCard() {
    // Mount a small floating reference in the spell-browser-modal footer
    // and (if visible) in the catalog Weapons section.
    if (document.getElementById('wm-card')) return;
    const target = document.querySelector('#cat-content') || document.querySelector('.catalog-content');
    if (!target) return;
    const card = document.createElement('div');
    card.id = 'wm-card';
    card.style.cssText = 'border:1px solid var(--gold-dark);background:var(--parchment2);padding:10px 14px;margin:8px 0;border-radius:3px;font-family:\'Rajdhani\',sans-serif;font-size:12px;line-height:1.45;color:var(--ink);';
    card.innerHTML =
      '<div style="font-family:\'Cinzel\',serif;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-dark);font-size:11px;margin-bottom:4px;">2024 Weapon Mastery</div>'
      + '<div style="font-size:11px;color:var(--ink-soft);margin-bottom:6px;">'
      + 'Classes with Weapon Mastery: <b>' + WEAPON_MASTERY_CLASSES.join(', ') + '</b>. '
      + 'Each class learns a number of masteries (Barbarian/Fighter/Ranger 2+, Paladin 1+) and may swap them at level-ups.'
      + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:4px 12px;">'
      + WEAPON_MASTERY_PROPS.map(([n,d]) =>
          '<div><b style="color:var(--gold-dark);">'+n+':</b> <span style="color:var(--ink-soft);">'+d+'</span></div>'
        ).join('')
      + '</div>';
    target.insertBefore(card, target.firstChild);
  }

  // ─── Install everything once the page is interactive ─────────────────
  function boot() {
    installSpellBrowserOverride();
    installCatalogExtensions();
    // Try to mount the weapon mastery card once the catalog UI loads
    const obs = new MutationObserver(() => ensureWeaponMasteryCard());
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(ensureWeaponMasteryCard, 600);
    installDownloadJsonButton();
    installPostMessageBridge();
  }

  // ═════════════════════════════════════════════════════════════════════
  //   Direct Download JSON button — bypasses the fallback popup modal
  // ═════════════════════════════════════════════════════════════════════
  function _gatherCharacterJson() {
    if (typeof _collectAllData !== 'function') return null;
    return _collectAllData();
  }

  window.downloadCharacterJsonDirect = function downloadCharacterJsonDirect() {
    const data = _gatherCharacterJson();
    if (!data) return false;
    const nameEl = document.getElementById('char-name');
    const charName = (nameEl ? nameEl.innerText.trim() : 'character') || 'character';
    const filename = charName.replace(/[^a-z0-9_\- ]/gi, '_').replace(/\s+/g,'_') + '_aurora.json';
    const jsonStr = JSON.stringify(data, null, 2);
    try {
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      a.rel = 'noopener';
      a.style.cssText = 'position:fixed;top:-9999px;left:-9999px;';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(blobUrl); }, 250);
      return true;
    } catch (e) {
      console.error('Download failed:', e);
      return false;
    }
  };

  function installDownloadJsonButton() {
    if (document.getElementById('aurora-download-json-btn')) return;
    // Locate existing Save JSON button — match by text content reliably.
    const saveBtn = Array.from(document.querySelectorAll('button')).find(
      b => /save\s*json/i.test(b.textContent || '')
    );
    if (!saveBtn || !saveBtn.parentNode) return setTimeout(installDownloadJsonButton, 400);

    const btn = document.createElement('button');
    btn.id = 'aurora-download-json-btn';
    btn.type = 'button';
    btn.title = 'Download character as a .json file (no popup)';
    btn.textContent = '⬇ Download JSON';
    // Copy the look of the sibling Save JSON button for visual consistency
    btn.style.cssText = saveBtn.style.cssText || '';
    btn.onmouseover = saveBtn.onmouseover;
    btn.onmouseout  = saveBtn.onmouseout;
    btn.onclick = function (e) { e.preventDefault(); window.downloadCharacterJsonDirect(); };
    saveBtn.parentNode.insertBefore(btn, saveBtn.nextSibling);
  }

  // ═════════════════════════════════════════════════════════════════════
  //   PostMessage bridge — lets the parent React app pull the current
  //   character JSON without the user manually downloading + uploading.
  // ═════════════════════════════════════════════════════════════════════
  function installPostMessageBridge() {
    window.addEventListener('message', function (ev) {
      const msg = ev && ev.data;
      if (!msg || typeof msg !== 'object') return;
      if (msg.type !== 'aurora:get-character') return;
      const reqId = msg.reqId || '';
      const data = _gatherCharacterJson();
      const nameEl = document.getElementById('char-name');
      const charName = (nameEl ? nameEl.innerText.trim() : '') || '';
      // Pull class/level if present on the sheet header
      let charClass = '';
      let charLevel = 1;
      try {
        const classEl = document.querySelector('[data-field="class"], #char-class, .char-class');
        if (classEl) charClass = (classEl.value || classEl.innerText || '').trim();
        const lvlEl = document.querySelector('[data-field="level"], #char-level, .char-level');
        if (lvlEl) {
          const n = parseInt((lvlEl.value || lvlEl.innerText || '1').replace(/\D+/g,''), 10);
          if (!isNaN(n) && n > 0) charLevel = n;
        }
      } catch (_e) {}
      // Reply to opener / parent
      const target = ev.source || window.parent;
      try {
        target.postMessage({
          type: 'aurora:character',
          reqId,
          ok: !!data,
          name: charName,
          char_class: charClass,
          level: charLevel,
          data,
        }, '*');
      } catch (e) {
        console.warn('postMessage reply failed:', e);
      }
    });
    // Announce readiness so parent can detect the bridge is installed
    try { window.parent && window.parent.postMessage({ type: 'aurora:ready' }, '*'); } catch (_e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
</script>
