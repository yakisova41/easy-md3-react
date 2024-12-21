import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@material/web/typography/md-typescale-styles.css";
import themeJson from "./theme.json";
import { Themeing } from "../easy-md3-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Themeing theme={themeJson}>
      <App />
    </Themeing>
  </StrictMode>
);
