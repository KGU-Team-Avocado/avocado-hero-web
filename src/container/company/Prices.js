import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {


  const content = {
    'badge': 'LOREM IPSUM',
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Integer feugiat massa sapien, vitae tristique metus suscipit nec.', 
    'option1': 'Monthly',
    'option2': 'Annual',
    '01_title': 'Lorem ipsum',
    '01_price': '$9',
    '01_suffix': ' / mo',
    '01_benefit1': '3 Emails',
    '01_benefit2': '1 Database',
    '01_benefit3': 'Unlimited Domains',
    '01_benefit4': '10 GB Storage',
    '01_primary-action': 'Select plan',
    '01_secondary-action': 'Learn more',
    '02_title': 'Dolor sit amet',
    '02_price': '$49',
    '02_suffix': ' / mo',
    '02_benefit1': '6 Emails',
    '02_benefit2': '2 Database',
    '02_benefit3': 'Unlimited Domains',
    '02_benefit4': '25 GB Storage',
    '02_primary-action': 'Select plan',
    '02_secondary-action': 'Learn more',
    '03_title': 'Consectuter',
    '03_price': '$499',
    '03_suffix': ' / mo',
    '03_benefit1': '9 Emails',
    '03_benefit2': '3 Database',
    '03_benefit3': 'Unlimited Domains',
    '03_benefit4': '50 GB Storage',
    '03_primary-action': 'Select plan',
    '03_secondary-action': 'Learn more',
    ...props.content
  };

  const [state, setState] = useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>

              <div>
                <Typography variant="subtitle1" component="span">{content['option1']}</Typography>
                &nbsp; <Switch name="checkbox" color="primary" checked={state.checkbox} onChange={handleChange} /> &nbsp;
                <Typography variant="subtitle1" component="span">{content['option2']}</Typography>
              </div>
            </Container>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['01_title']} ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['01_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['01_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary" >{content['01_primary-action']}</Button>
                  <Box mt={2}>
                    <Link to="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['02_title']} ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['02_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['02_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <Button variant="contained" color="primary">{content['02_primary-action']}</Button>
                  <Box mt={2}>
                    <Link to="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['03_title']}  ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['03_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['03_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary">{content['03_primary-action']}</Button>
                  <Box mt={2}>
                    <Link to="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}