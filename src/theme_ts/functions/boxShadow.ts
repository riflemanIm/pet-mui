// theme/functions/boxShadow.ts
import rgba from "theme/functions/rgba";
import pxToRem from "theme/functions/pxToRem";

/**
 * Create a CSS box-shadow string.
 * @param offset [x, y] offset in px
 * @param radius [blur, spread] in px
 * @param color hex color string or rgb string
 * @param opacity number between 0 and 1
 * @param inset optional "inset"
 * @returns CSS box-shadow property value
 */
function boxShadow(
  offset: [number, number] = [0, 0],
  radius: [number, number] = [0, 0],
  color: string,
  opacity: number,
  inset: string = ""
): string {
  const [x, y] = offset;
  const [blur, spread] = radius;
  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread
  )} ${rgba(color, opacity)}`;
}

export default boxShadow;
