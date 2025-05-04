// theme/functions/gradientChartLine.ts

import rgba from "./rgba";

/**
 * Create a CanvasGradient for chart lines with a fade effect.
 * @param chart HTMLCanvasElement or CanvasRenderingContext2D
 * @param color hex or rgb color string
 * @param opacity gradient opacity
 * @returns CanvasGradient
 */
function gradientChartLine(
  chart: HTMLCanvasElement | CanvasRenderingContext2D,
  color: string,
  opacity: number = 0.2
): CanvasGradient {
  const ctx =
    chart instanceof HTMLCanvasElement ? chart.getContext("2d") : chart;
  if (!ctx) {
    throw new Error("Failed to get 2D context for gradientChartLine");
  }

  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  // Primary color with given opacity
  const primaryColor = rgba(color, opacity);

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

  return gradientStroke;
}

export default gradientChartLine;
