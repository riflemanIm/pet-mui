// theme/functions/rgba.ts
import hexToRgb from "theme/functions/hexToRgb";

/**
 * Create rgba color string from hex and opacity.
 * @param color hex color string
 * @param opacity number between 0 and 1
 * @returns CSS rgba() string
 */
function rgba(color: string, opacity: number): string {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
