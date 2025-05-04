// theme/functions/pxToRem.ts
/**
 * Convert pixel value to rem string based on base font size.
 * @param number pixel value
 * @param baseNumber root font size (default 16)
 * @returns rem string
 */
function pxToRem(number: number, baseNumber: number = 16): string {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
