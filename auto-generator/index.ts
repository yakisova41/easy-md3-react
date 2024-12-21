import pascalcase from "pascalcase";
import fs from "fs-extra";
import nodePath from "path";

/**
 * Create easy-mv3-react/converted-components.ts automaticlly from @material/web repo in github.
 */

console.log("EASY MV3 REACT\nComponents auto genetaror");

// github classic api token
const token = process.env.GITHUB_TOKEN;

const treeEntryPoint =
  "https://api.github.com/repos/material-components/material-web/git/trees/main";

const componentList: Record<string, string[]> = {};

const treeRes = await fetch(treeEntryPoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
const tree: Tree = await treeRes.json();

const componentTrees = tree.tree.filter((treeItem) => {
  if (treeItem.path.match("^[^,./]+$") && treeItem.type === "tree") {
    if (
      treeItem.path !== "docs" &&
      treeItem.path !== "tokens" &&
      treeItem.path !== "testing" &&
      treeItem.path !== "typography" &&
      treeItem.path !== "scripts" &&
      treeItem.path !== "catalog" &&
      treeItem.path !== "internal" &&
      treeItem.path !== "migrations"
    ) {
      return treeItem;
    }
  }
});

for (const { path, url } of componentTrees) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const componentTree: Tree = await response.json();

  const componentNames = componentTree.tree
    .map((treeItem) => {
      if (treeItem.path.match("^(?!.*_test.ts$).*.ts$")) {
        return treeItem.path;
      }
      return "";
    })
    .filter((x) => x !== "" && x !== "harness.ts");

  componentList[path] = componentNames;

  console.log("Fetch completed! " + path);

  await new Promise((resolve) => setTimeout(resolve, 100));
}

const moduleNameMap: Record<string, string> = {};

Object.keys(componentList).forEach((componentName) => {
  const files = componentList[componentName];

  files.forEach((originalFileName) => {
    const [fileName, fileExt] = originalFileName.split(".");

    const moduleName = pascalcase(fileName);

    moduleNameMap[moduleName] = componentName + "/" + fileName;
  });
});

let code = 'import { litToReact } from "./tools";';

Object.keys(moduleNameMap).forEach((moduleName) => {
  const importPath = moduleNameMap[moduleName];

  let addMd = true;

  if (moduleName[0] === "M" && moduleName[1] === "d") {
    addMd = false;
  }

  code += `\nimport { ${
    addMd ? "Md" : ""
  }${moduleName} as M_${moduleName} } from '@material/web/${importPath}';`;

  code += `\nimport { type ${
    addMd ? "Md" : ""
  }${moduleName}Props } from './converted-components.d';`;

  code += `\nexport const ${addMd ? "Md" : ""}${moduleName} = litToReact<${
    addMd ? "Md" : ""
  }${moduleName}Props>(M_${moduleName});`;
});

fs.outputFile(
  nodePath.resolve("../easy-mv3-react/converted-components.ts"),
  code
);

export interface Tree {
  sha: string;
  url: string;
  tree: TreeItem[];
  truncated: boolean;
}

export interface TreeItem {
  path: string;
  mode: string;
  type: string;
  sha: string;
  url: string;
  size?: number;
}
