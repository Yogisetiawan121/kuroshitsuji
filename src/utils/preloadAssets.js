import { CHARACTERS } from '../data/characterData';
import { ARCS_DATA } from '../data/arcData';

// Tabs that render a full-screen ArcStage with their own media galleries
const ARC_TABS = ['WESTON_COLLEGE', 'WOLFS_GORGE', 'NOAHS_ARK', 'MANOR_MURDERS', 'THE_CAMPANIA'];

/**
 * Skip background preloading entirely on slow / data-saving connections.
 * On those devices the preloader would only compete with the images the
 * user actually needs while scrolling.
 */
function isSlowConnection() {
  if (typeof navigator === 'undefined' || navigator.onLine === false) return true;
  const conn = navigator.connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const eff = conn.effectiveType || '';
  return eff === 'slow-2g' || eff === '2g';
}

function collectArcUrls(arc) {
  const urls = [];
  if (!arc) return urls;
  if (arc.images) arc.images.forEach((img) => img.url && urls.push(img.url));
  if (arc.p4Houses) arc.p4Houses.forEach((house) => house.image && urls.push(house.image));
  if (arc.keyCharacters) arc.keyCharacters.forEach((char) => char.image && urls.push(char.image));
  if (arc.firstTier) arc.firstTier.forEach((p) => p.image && urls.push(p.image));
  if (arc.guests) arc.guests.forEach((g) => g.image && urls.push(g.image));
  if (arc.keyEntities) arc.keyEntities.forEach((ent) => ent.image && urls.push(ent.image));
  return urls;
}

/**
 * Collect the media URLs that belong to the currently visible view only,
 * so we never saturate the connection with the whole site's gallery.
 * Text-only tabs (LINEAGE/CONTRACT/ARSENAL/ARCHIVE/INVENTORY/MEMORIES)
 * produce nothing to preload.
 */
function collectViewUrls(activeTab, activeCharacter) {
  const urls = new Set();

  if (ARC_TABS.includes(activeTab)) {
    collectArcUrls(ARCS_DATA[activeTab]).forEach((u) => urls.add(u));
  } else if (activeTab === 'STATUS') {
    const char = CHARACTERS[activeCharacter] || CHARACTERS.sebastian;
    if (char && char.images) {
      char.images.forEach((img) => img.url && urls.add(img.url));
    }
  }

  return [...urls];
}

function warmUp(urls) {
  if (urls.length === 0) return;
  const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
  schedule(() => {
    urls.forEach((url) => {
      // Warm up browser memory cache & Service Worker cache storage
      const img = new Image();
      img.src = url;
    });
  });
}

/**
 * Warm up caches for the current view during idle CPU time.
 * Skipped automatically on slow / data-saving / offline connections.
 */
export function preloadAssetsForView({ activeTab = 'STATUS', activeCharacter = 'sebastian' } = {}) {
  if (isSlowConnection()) return;
  warmUp(collectViewUrls(activeTab, activeCharacter));
}
