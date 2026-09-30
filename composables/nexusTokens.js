// Single source of truth for the HAMEEM // NEXUS (denim) palette.
// tailwind.config.js builds its tokens from this; WebGL/SVG code imports it
// so no component ever hard-codes a hex value.
//
// Roles
//   void / ink  — indigo denim surfaces (page, panels, raised panels)
//   thread      — copper contrast-stitching: brand, CTAs, craft/human elements
//   bleach      — stonewash blue: AI / data ONLY (live values, charts, status, 3D data points)
export const nexusPalette = {
  void: '#060E1A',
  ink: {
    950: '#0A1628',
    900: '#10223B',
    800: '#16304F',
    700: '#1F3F66',
    600: '#2E5584',
  },
  thread: {
    DEFAULT: '#E8894A',
    300: '#F3B485',
    500: '#E8894A',
    700: '#B8622A',
  },
  bleach: {
    DEFAULT: '#8FD3FF',
    300: '#C4E8FF',
  },
}

/** "#E8894A" → "232 137 74" (for rgb(... / a) strings) */
export const hexToRgbTriplet = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`
}
