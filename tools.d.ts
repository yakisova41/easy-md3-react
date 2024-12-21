import { type Initializer, type LitElement } from "lit";
import { ComponentProps } from "react";
type LitElementExtended = new (...args: any[]) => LitElement;
interface MaterialWebLitElement extends LitElementExtended {
    addInitializer(initializer: Initializer): void;
}
/**
 * Get a ReactElement in react from a module that is a Lit element
 * @param module
 * @returns
 */
export declare function useLit<T, U extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = React.JSXElementConstructor<T>>(module: MaterialWebLitElement): ({ ...props }: ComponentProps<U> & T) => import("react").ReactElement<U, string | import("react").JSXElementConstructor<any>>;
/**
 * Get a ReactElement without react from a module that is a Lit element. (Doesn't use state and useEffect)
 * @param module
 * @returns
 */
export declare function litToReact<T, U extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = React.JSXElementConstructor<T>>(module: MaterialWebLitElement): (props: ComponentProps<U> & T) => import("react").ReactElement<U, string | import("react").JSXElementConstructor<any>>;
export {};
