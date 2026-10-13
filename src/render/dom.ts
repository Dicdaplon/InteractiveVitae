export type Child = Node | string | null | undefined | false;
export type Attributes = Record<string, string | undefined>;

/**
 * Creates an element. Strings become text nodes, so content is never parsed
 * as HTML. Falsy children and undefined attributes are skipped, which keeps
 * optional fields readable at call sites.
 */
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes: Attributes = {},
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  for (const [name, value] of Object.entries(attributes)) {
    if (value !== undefined) element.setAttribute(name, value);
  }
  for (const child of children) {
    if (child) element.append(child);
  }
  return element;
}
