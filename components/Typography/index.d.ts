import { ComponentProps } from "react";
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
export declare function Typography<T extends keyof JSX.IntrinsicElements>({ component, typescale, size, className, ...props }: TypographyProps<T>): import("react").ReactElement<{
    className: string;
} & Omit<TypographyProps<T>, "component" | "typescale" | "size" | "className">, string | import("react").JSXElementConstructor<any>>;
export default Typography;
