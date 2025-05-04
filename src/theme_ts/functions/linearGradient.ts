// theme/functions/linearGradient.ts
/**
 * Create a CSS linear-gradient string.
 * @param color start color
 * @param colorState end color
 * @param angle in degrees
 * @returns CSS linear-gradient()
 */
function linearGradient(
  color: string,
  colorState: string,
  angle: number = 195
): string {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;
