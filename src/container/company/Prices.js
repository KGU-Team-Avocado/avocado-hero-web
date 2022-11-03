import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Switch, Typography } from "@mui/material";
import MKButton from "component/common/mui-components/MKButton";
import { useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {


  const content = {
    'badge': '히어로 요금제',
    'header-p1': '합리적인 비용',
    'header-p2': '으로 모든 기능을 누려보세요',
    'description': '연 단위 계약시 할인 혜택이 주어집니다.', 
    'option1': '월 단위',
    'option2': '연 단위',
    '01_title': '무료 플랜',
    '01_price_month': '0',
    '01_suffix_month': '원 / 월',
    '01_price_year': '0',
    '01_suffix_year': '원 / 연',
    '01_benefit1': '워크스페이스 개설',
    '01_benefit2': '그룹 신청',
    '01_benefit3': '포트폴리오 생성',
    '01_benefit4': '일자리 찾기',
    '01_primary-action': '선택 하기',
    '01_secondary-action': '자세히 보기',
    '02_title': '프로 플랜',
    '02_price_month': '4,990',
    '02_suffix_month': '원 / 월',
    '02_price_year': '49,900',
    '02_suffix_year': '원 / 연',
    '02_benefit1': '무료 플랜 기능 전부',
    '02_benefit2': '그룹 전용 코드',
    '02_benefit3': '그룹 광고',
    '02_benefit4': '펀딩',
    '02_primary-action': '선택 하기',
    '02_secondary-action': '자세히 보기',
    '03_title': '엔터프라이즈 플랜',
    '03_price_month': '499,990',
    '03_suffix_month': '원 / 월',
    '03_price_year': '4,999,900',
    '03_suffix_year': '원 / 연',
    '03_benefit1': '프로 플랜 기능 전부',
    '03_benefit2': '무료 채용 공고',
    '03_benefit3': '채용 제의',
    '03_benefit4': '기업 홍보',
    '03_primary-action': '선택 하기',
    '03_secondary-action': '자세히 보기',
    ...props.content
  };

  const [state, setState] = useState({
    checkbox: false,
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
                      {state.checkbox?content['01_price_year']:content['01_price_month']}
                      <Typography variant="h6" color="textSecondary" component="span">{state.checkbox?content['01_suffix_year']:content['01_suffix_month']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <MKButton variant="outlined" color="primary" >{content['01_primary-action']}</MKButton>
                  <Box mt={2}>
                    <Link to="#" color="primary">{content['01_secondary-action']}</Link>
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
                      {state.checkbox?content['02_price_year']:content['02_price_month']}
                      <Typography variant="h6" color="textSecondary" component="span">{state.checkbox?content['02_suffix_year']:content['02_suffix_month']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <MKButton variant="contained" color="primary">{content['02_primary-action']}</MKButton>
                  <Box mt={2}>
                    <Link to="#" color="primary">{content['02_secondary-action']}</Link>
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
                      {state.checkbox?content['03_price_year']:content['03_price_month']}
                      <Typography variant="h6" color="textSecondary" component="span">{state.checkbox?content['03_suffix_year']:content['03_suffix_month']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                  </Box>
                  <MKButton variant="outlined" color="primary">{content['03_primary-action']}</MKButton>
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