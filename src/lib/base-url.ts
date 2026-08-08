/**
 * Prefix a root-relative public path with the app's deploy base
 * (e.g. "/kova-growth-systems/" on GitHub Pages, "/" on Lovable).
 */
export const BASE_URL: string = import.meta.env.BASE_URL || "/";

export function withBase(path: string): string {
  if (/^[a-z]+:\/\//i.test(path)) return path;
  return `${BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
