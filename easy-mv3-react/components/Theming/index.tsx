import { ReactNode, useEffect } from "react";
import { MaterialTheme } from "./theme";
import kebabCase from "kebab-case";

export function Themeing({
  theme,
  dark = window.matchMedia("(prefers-color-scheme: dark)").matches,
  children,
}: {
  theme: MaterialTheme;
  dark?: boolean;
  children?: ReactNode;
}) {
  useEffect(() => {
    applyTheme(theme, { target: document.body, dark: dark });
  }, [dark, theme]);

  return <>{children}</>;
}

export function applyTheme(
  theme: MaterialTheme,
  { target, dark }: { target: Element; dark: boolean }
) {
  const scheme = theme.schemes[dark ? "dark" : "light"];

  const csss: string[] = [];

  Object.keys(scheme).forEach((propertyName) => {
    const kebab = kebabCase(propertyName);
    const colorHex = scheme[propertyName];

    csss.push(`--md-sys-color-${kebab}: ${colorHex};`);
  });

  target.setAttribute("style", csss.join(" "));
}
