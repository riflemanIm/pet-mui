// theme/functions/hexToRgb.ts
import chroma from "chroma-js";

/**
 * Convert a hex color code or a palette color object to "r, g, b" string.
 * @param color hex string (e.g. "#fff") or object with a `main` field (e.g. { main: "#fff", ... })
 * @returns string "r, g, b"
 */
function hexToRgb(color: string | { main: string }): string {
  // Если передали объект палитры, достаём поле main
  const hex = typeof color === "string" ? color : color.main;
  // chroma-js умеет парсить строку в формате "#rrggbb"
  return chroma(hex).rgb().join(", ");
}

export default hexToRgb;
