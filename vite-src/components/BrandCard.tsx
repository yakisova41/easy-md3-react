import {
  MdElevatedCard,
  Typography,
  MdFilledButton,
} from "../../easy-mv3-react";

export function BrandCard() {
  return (
    <MdElevatedCard className="card">
      <Typography component="h1" typescale="display" size="medium">
        Easy Mv3 React
      </Typography>

      <Typography component="p" typescale="body" size="large">
        This is just a wrpper of{" "}
        <a href="https://github.com/material-components/material-web/">
          @material/web
        </a>{" "}
        that can be used in React easily.
        <br />
        So, It is complianted official design policy of Material 3 completely.
      </Typography>

      <div className="buttons-in-card">
        <MdFilledButton href="https://material-web.dev/" target="_blank">
          Docs of @material/web
        </MdFilledButton>
      </div>

      <div slot="Button">adwa</div>
    </MdElevatedCard>
  );
}
