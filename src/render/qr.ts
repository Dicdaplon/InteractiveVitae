import QRCode from 'qrcode';

const SVG_NS = 'http://www.w3.org/2000/svg';
/** Light modules around the code, required by scanners. */
const QUIET_ZONE = 2;

/**
 * A QR code as an inline SVG drawn in currentColor, so it follows the ink
 * token and stays sharp at any print size. One path, one unit per module.
 */
export function renderQrCode(text: string, label: string): SVGSVGElement {
  const { modules } = QRCode.create(text, { errorCorrectionLevel: 'M' });
  const size = modules.size + QUIET_ZONE * 2;

  let d = '';
  for (let row = 0; row < modules.size; row += 1) {
    for (let col = 0; col < modules.size; col += 1) {
      if (modules.get(row, col)) d += `M${col + QUIET_ZONE} ${row + QUIET_ZONE}h1v1h-1z`;
    }
  }

  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', 'qr');
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', label);
  svg.setAttribute('shape-rendering', 'crispEdges');
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('d', d);
  path.setAttribute('fill', 'currentColor');
  svg.append(path);
  return svg;
}
