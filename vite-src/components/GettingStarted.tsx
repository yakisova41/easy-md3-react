import { MdDivider, MdOutlinedCard, Typography } from "../../easy-md3-react";
import { Code } from "./Code";

export function GettingStarted() {
  return (
    <MdOutlinedCard className="card">
      <Typography component="h2" typescale="display" size="medium">
        Get started
      </Typography>

      <div className="section-in-card">
        <Typography component="span" typescale="body" size="medium">
          Console
        </Typography>
        <Code
          code="npm install https://github.com/yakisova41/easy-md3-react"
          language="sh"
        />
      </div>

      <MdDivider />

      <div className="section-in-card">
        <Typography component="span" typescale="body" size="medium">
          App.tsx
        </Typography>
        <Code
          code={[
            'import { MdFilledButton } from "easy-md3-react";',
            "",
            "function App(){",
            "  return <MdFilledButton>Hello button!</MdFilledButton>;",
            "}",
            "",
            "export default App",
          ].join("\n")}
          language="tsx"
        />
      </div>
    </MdOutlinedCard>
  );
}
