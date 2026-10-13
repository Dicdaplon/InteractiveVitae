/** Opens the browser print dialog, where "Save as PDF" gives the fixed version. */
export function setupPrintButton(
  button: HTMLElement,
  print: () => void = () => window.print()
): void {
  button.addEventListener('click', () => print());
}
