import { ReactNode } from "react";
import { MaterialTheme } from "./theme";
export declare function Themeing({ theme, dark, children, }: {
    theme: MaterialTheme;
    dark?: boolean;
    children?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function applyTheme(theme: MaterialTheme, { target, dark }: {
    target: Element;
    dark: boolean;
}): void;
