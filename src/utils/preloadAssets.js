import { CHARACTERS } from '../data/characterData';
import { ARCS_DATA } from '../data/arcData';

/**
 * Extracts all media URLs from data files and silently preloads them
 * during browser idle time to ensure 0ms image loading during navigation.
 */
export function preloadAllAssets() {
  const urlsToPreload = new Set();

  // 1. Collect Character Images
  Object.values(CHARACTERS).forEach((char) => {
    if (char.images) {
      char.images.forEach((img) => img.url && urlsToPreload.add(img.url));
    }
  });

  // 2. Collect Arc Images & Sub-Component Media
  Object.values(ARCS_DATA).forEach((arc) => {
    if (arc.images) {
      arc.images.forEach((img) => img.url && urlsToPreload.add(img.url));
    }
    if (arc.p4Houses) {
      arc.p4Houses.forEach((house) => house.image && urlsToPreload.add(house.image));
    }
    if (arc.keyCharacters) {
      arc.keyCharacters.forEach((char) => char.image && urlsToPreload.add(char.image));
    }
    if (arc.firstTier) {
      arc.firstTier.forEach((p) => p.image && urlsToPreload.add(p.image));
    }
    if (arc.guests) {
      arc.guests.forEach((g) => g.image && urlsToPreload.add(g.image));
    }
    if (arc.keyEntities) {
      arc.keyEntities.forEach((ent) => ent.image && urlsToPreload.add(ent.image));
    }
  });

  // Also include ambient audio path
  urlsToPreload.add('/audio/dark_calm_ambience.mp3');

  // Preload during idle time using requestIdleCallback (skip when offline)
  const schedulePreload = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));

  if (navigator.onLine === false) return;

  schedulePreload(() => {
    urlsToPreload.forEach((url) => {
      // Warm up browser memory cache & Service Worker cache storage
      const img = new Image();
      img.src = url;
    });
  });
}
