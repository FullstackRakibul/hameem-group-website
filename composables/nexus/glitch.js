import { nexusPalette as nx } from '../nexusTokens.js'

/**
 * One 120ms RGB-split glitch (thread / bleach text-shadow offsets).
 * Two frames of offset, then clean: a single flash, well under 3 per second.
 * Call it once per element; never loop it.
 */
export function glitchOnce(gsap, targets) {
  return gsap
    .timeline()
    .set(targets, { textShadow: `-3px 0 ${nx.thread.DEFAULT}, 3px 0 ${nx.bleach.DEFAULT}`, x: 2 })
    .set(targets, { textShadow: `2px 0 ${nx.thread.DEFAULT}, -2px 0 ${nx.bleach.DEFAULT}`, x: -1 }, 0.06)
    .set(targets, { textShadow: 'none', x: 0 }, 0.12)
}
