import { ReactNode, useEffect } from "react";
import { MaterialTheme } from "./theme";
import kebabCase from "kebab-case";

export type Schemes =
  | "light"
  | "light-medium-contrast"
  | "light-high-contrast"
  | "dark"
  | "dark-medium-contrast"
  | "dark-high-contrast";

export function Theming({
  theme,
  scheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  children,
}: {
  theme: MaterialTheme;
  scheme?: Schemes;
  children?: ReactNode;
}) {
  useEffect(() => {
    applyTheme(theme, { target: document.body, scheme });
  }, [scheme, theme]);

  return <>{children}</>;
}

export function applyTheme(
  theme: MaterialTheme,
  {
    target,
    scheme,
  }: {
    target: Element;
    scheme: Schemes;
  }
) {
  const thisScheme = theme.schemes[scheme];
  const csss: string[] = [];

  Object.keys(thisScheme).forEach((propertyName) => {
    const kebab = kebabCase(propertyName);
    const colorHex = thisScheme[propertyName];

    csss.push(`--md-sys-color-${kebab}: ${colorHex};`);
  });

  Object.keys(theme.palettes).forEach((colorName) => {
    const colorPalette = theme.palettes[colorName];

    Object.keys(colorPalette).forEach((colorNumber) => {
      const colorHex = theme.palettes[colorName][colorNumber];
      const kebab = kebabCase(colorName);
      csss.push(`--md-sys-color-${kebab}-${colorNumber}: ${colorHex};`);
    });
  });

  target.setAttribute("style", csss.join(" "));
}
