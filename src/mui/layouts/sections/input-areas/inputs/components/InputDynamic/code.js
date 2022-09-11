const inputDynamicCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "mui/components/MKBox";
import MKInput from "mui/components/MKInput";

function InputDynamic() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput variant="standard" label="Regular" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputDynamic;`;

export default inputDynamicCode;
