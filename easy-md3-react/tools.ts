import { Initializer, LitElement } from "lit";
import { createElement, ComponentProps, useEffect, useState } from "react";

// A Class that extends LitElement
type LitElementExtended = new (...args: any[]) => LitElement;

// Components in @material/web are included a method addInitilizer.
interface MaterialWebLitElement extends LitElementExtended {
  addInitializer(initializer: Initializer): void;
}

/**
 * Get a ReactElement in react from a module that is a Lit element
 * @param module
 * @returns
 */
export function useLit<
  T,
  U extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = React.JSXElementConstructor<T>
>(module: MaterialWebLitElement) {
  const [tagName, setTagName] = useState<string>("default-custom-element");

  useEffect(() => {
    // Set a tagname of custom element to state when instance is initilized.
    module.addInitializer((initilizer) => {
      setTagName(initilizer.tagName);
    });

    // Initilize instance deliberatly to get tagname.
    new module();
  }, [module]);

  return ({ ...props }: ComponentProps<U> & T) => {
    return createElement<U>(tagName, props);
  };
}

/**
 * Get a ReactElement without react from a module that is a Lit element. (Doesn't use state and useEffect)
 * @param module
 * @returns
 */
export function litToReact<
  T,
  U extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = React.JSXElementConstructor<T>
>(module: MaterialWebLitElement) {
  let tagName = "default-custom-element";

  module.addInitializer((initilizer) => {
    tagName = initilizer.tagName;
  });

  // Initilize instance deliberatly to get tagname.
  new module();

  return (props: ComponentProps<U> & T) => {
    if (typeof props.className === "string") {
      const elementProps = {
        ...props,
        class: props["className"],
      };
      delete elementProps.className;
      return createElement<U>(tagName, elementProps);
    } else {
      return createElement<U>(tagName, props);
    }
  };
}
