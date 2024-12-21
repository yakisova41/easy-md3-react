import { ComponentProps, createElement } from "react";
import "@material/web/typography/md-typescale-styles.css";

export type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
  /**
   * Compoent name
   */
  component: T;
  typescale?: "display" | "headline" | "title" | "body" | "label";
  size?: "small" | "medium" | "large";
} & ComponentProps<T>;

/**
 * Typography helps make writing legible and beautiful.
 * {@link https://material-web.dev/theming/typography/ Docs}
 * @param param0
 * @returns
 */
export function Typography<T extends keyof JSX.IntrinsicElements>({
  component,
  typescale = "display",
  size = "medium",
  className,
  ...props
}: TypographyProps<T>) {
  let newClassName = className === undefined ? "" : className;

  // Add token class to className
  const token = "md-typescale-" + typescale + "-" + size;
  newClassName = newClassName === "" ? token : newClassName + " " + token;

  const element = createElement(component, {
    className: newClassName,
    ...props,
  });

  return element;
}

export default Typography;
