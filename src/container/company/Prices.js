import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Stack, Switch, Typography } from "@mui/material";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import MKButton from "component/common/mui-components/MKButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import PriceModal from "./PriceModal";

export default (props) => {


  const content = {
    'badge': '히어로 요금제',
    'header-p1': '합리적인 비용',
    'header-p2': '으로 모든 기능을 누려보세요',
    'description': '연 단위 계약시 할인 혜택이 주어집니다.',
    'option1': '월 단위',
    'option2': '연 단위',
    '01_title': '베이직 플랜',
    '01_price_month': '0',
    '01_suffix_month': '원 / 월',
    '01_price_year': '0',
    '01_suffix_year': '원 / 연',
    '01_benefit1': '워크스페이스 개설',
    '01_benefit2': '그룹 신청',
    '01_benefit3': '포트폴리오 생성',
    '01_benefit4': '일자리 찾기',
    '01_primary-action': '확인 하기',
    '02_title': '프로 플랜',
    '02_price_month': '4,990',
    '02_suffix_month': '원 / 월',
    '02_price_year': '49,900',
    '02_suffix_year': '원 / 연',
    '02_benefit1': '베이직 플랜 기능 전부',
    '02_benefit2': '그룹 전용 코드',
    '02_benefit3': '그룹 광고',
    '02_benefit4': '펀딩',
    '02_primary-action': '확인 하기',
    '03_title': '엔터프라이즈 플랜',
    '03_price_month': '499,990',
    '03_suffix_month': '원 / 월',
    '03_price_year': '4,999,900',
    '03_suffix_year': '원 / 연',
    '03_benefit1': '프로 플랜 기능 전부',
    '03_benefit2': '무료 채용 공고',
    '03_benefit3': '채용 제의',
    '03_benefit4': '기업 홍보',
    '03_primary-action': '확인 하기',
    ...props.content
  };

  const [state, setState] = useState({
    checkbox: false,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [priceContents, setPriceContents] = useState(null);

  const handleModal = (type) => {
    setPriceModalOpen(true);
    setPriceContents({
      type:type+""
    })
  }

  return (
    <>
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
          <Grid
            container
            spacing={3}
          // alignItems="stretch"
          >
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  py={5}
                >
                  <CardHeader title={content['01_title']} ></CardHeader>
                  <CardContent>
                    <Box>
                      <Typography variant="h3" component="h2" gutterBottom={true}>
                        {state.checkbox ? content['01_price_year'] : content['01_price_month']}
                        <Typography variant="h6" color="textSecondary" component="span">{state.checkbox ? content['01_suffix_year'] : content['01_suffix_month']}</Typography>
                      </Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                    </Box>
                  </CardContent>
                  <Box>
                    <MKButton variant="outlined" color="primary" onClick={() => handleModal(0)}>{content['01_primary-action']}</MKButton>
                  </Box>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  py={5}
                >
                  <CardHeader title={content['02_title']} ></CardHeader>
                  <CardContent>
                    <Box>
                      <Typography variant="h3" component="h2" gutterBottom={true}>
                        {state.checkbox ? content['02_price_year'] : content['02_price_month']}
                        <Typography variant="h6" color="textSecondary" component="span">{state.checkbox ? content['02_suffix_year'] : content['02_suffix_month']}</Typography>
                      </Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                    </Box>
                  </CardContent>
                  <Box>
                    <MKButton variant="contained" color="primary" onClick={() => handleModal(1)}>{content['02_primary-action']}</MKButton>
                  </Box>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  py={5}
                >
                  <CardHeader title={content['03_title']}  ></CardHeader>
                  <CardContent>
                    <Box>
                      <Typography variant="h3" component="h2" gutterBottom={true}>
                        {state.checkbox ? content['03_price_year'] : content['03_price_month']}
                        <Typography variant="h6" color="textSecondary" component="span">{state.checkbox ? content['03_suffix_year'] : content['03_suffix_month']}</Typography>
                      </Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                      <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                    </Box>
                  </CardContent>
                  <Box>
                    <MKButton variant="outlined" color="primary" onClick={() => handleModal(2)}>{content['03_primary-action']}</MKButton>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ModalStaticBackdrop
        keepMounted
        width="sm"
        open={priceModalOpen}
        component={
          <PriceModal
            priceContents={priceContents}
            setOpen={setPriceModalOpen}
          />
        }
      />
    </>

  );
}