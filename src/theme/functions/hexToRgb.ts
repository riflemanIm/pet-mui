// theme/functions/hexToRgb.ts
import chroma from "chroma-js";

/**
 * Convert hex color code to "r, g, b" string.
 * @param color hex color string
 * @returns string "r, g, b"
 */
function hexToRgb(color: string): string {
  return chroma(color).rgb().join(", ");
}

export default hexToRgb;
