/* eslint-disable no-param-reassign */
/**
=========================================================
* Kubtel 2 React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Kubtel 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputSuccess() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Success" fullWidth success />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputSuccess;
