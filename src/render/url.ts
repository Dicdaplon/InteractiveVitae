/** "https://example.org/path/" -> "example.org/path", readable on screen and paper. */
export function bareUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}
