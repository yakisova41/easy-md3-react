import { MdFab, MdIcon } from "../easy-md3-react";
import "./App.scss";

import { GettingStarted } from "./components/GettingStarted";
import { BrandCard } from "./components/BrandCard";

import { DiGithubBadge } from "react-icons/di";

function App() {
  return (
    <main>
      <div className="contents">
        <div className="cards">
          <BrandCard />
          <GettingStarted />
        </div>
      </div>

      <div className="fab">
        <MdFab
          variant="primary"
          label="GitHub"
          onClick={() => {
            window.open("https://github.com/yakisova41/easy-md3-react", "");
          }}
        >
          <MdIcon slot="icon">
            <DiGithubBadge />
          </MdIcon>
        </MdFab>
      </div>
    </main>
  );
}

export default App;
