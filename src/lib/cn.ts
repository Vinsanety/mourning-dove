/** Join class names, dropping falsy values. Kept tiny on purpose — no extra deps. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
