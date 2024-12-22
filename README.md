# Easy Md3 React

This is just a wrpper of [@material/web](https://github.com/material-components/material-web/) that can be used in React easily.
So, It is complianted official design policy of Material 3 completely.

- [Docs of @material/web](https://material-web.dev/)
- [Sample page](https://yakisova41.github.io/easy-md3-react/)

## Get started

```sh
npm install https://github.com/yakisova41/easy-md3-react
```

```tsx
import { MdFilledButton } from "easy-md3-react";

function App() {
  return <MdFilledButton>Hello button!</MdFilledButton>;
}

export default App;
```

## How it works??

What this module does is create a web-component element using the React function createElement. That is simply it.

easy-md3-react/tools.ts (40)

```ts
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
```

## How to theming?

You can theme by use Theming component.

It's just setting style to body element by using theme.

```tsx
import { Theming, MaterialTheme } from "easy-md3-react";
import themeJson from "./theme.json";

// It's typed as MaterialTheme.
// so you can write object directly if you don't want to import json.
const theme: MaterialTheme = themeJson;

<Theming theme={theme} scheme="dark">
  <App />
</Theming>;
```

### Supported schemes

- light
- light-medium-contrast
- light-high-contrast
- dark
- dark-medium-contrast
- dark-high-contrast

### How to create theme json?

Create a theme [here](https://material-foundation.github.io/material-theme-builder/),
then do export "Material Theme(JSON)".

## LICENSE

Copyright (c) 2024 Yakisova41
Released under the MIT license
