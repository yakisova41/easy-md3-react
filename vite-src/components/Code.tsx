import { CodeBlock } from "react-code-block";
import { MdOutlinedCard } from "../../easy-mv3-react";

export function Code({ code, language }: { code: string; language: string }) {
  return (
    <MdOutlinedCard className="code-block">
      <CodeBlock code={code} language={language}>
        <CodeBlock.Code>
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </CodeBlock>
    </MdOutlinedCard>
  );
}
