/**
=========================================================
* Kubtel 2 React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Kubtel 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Button, ButtonGroup, Icon } from "@mui/material";

function HandCounter() {
  const [state, setState] = useState(0);

  const handleMinus = () => setState((prev) => (prev > 0 ? prev - 1 : 0));
  const handlePlus = () => setState((prev) => prev + 1);

  return (
    <ButtonGroup
      color="secondary"
      size="small"
      sx={{
        border: 1,
        borderRadius: 5,
        borderColor: ({ palette: { grey } }) => grey[300],
      }}
    >
      <Button
        size="small"
        variant="text"
        onClick={handleMinus}
        disabled={state < 1}
      >
        <Icon color="secondary">remove</Icon>
      </Button>
      <Button variant="text" sx={{ cursor: "auto" }}>
        <MKTypography
          sx={{ width: 15 }}
          variant="button"
          fontWeight="bold"
          color="secondary"
        >
          {state}
        </MKTypography>
      </Button>
      <Button
        size="small"
        variant="text"
        onClick={handlePlus}
        disabled={state > 9}
      >
        <Icon color="secondary">add</Icon>
      </Button>
    </ButtonGroup>
  );
}

export default HandCounter;
