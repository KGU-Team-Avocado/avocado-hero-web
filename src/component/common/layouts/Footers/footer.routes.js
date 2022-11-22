// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';

// Images
import logoCT from "assets/images/logo-ct-dark.png";
import MKTypography from "component/common/mui-components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Avocado Hero",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "POINT",
      items: [
        { 
          name: "포인트",
          route: "/example/bestworker",
        },
      ],
    },
    {
      name: "PROJECT",
      items: [
        {
          name: "프로젝트",
          route: "/groupFinder",
        },
      ],
    },
    {
      name: "JOB",
      items: [
        {
          name: "일자리",
          route: "/jobFinder",
        },
      ],
    },
    {
      name: "PREMIUM",
      items: [
        {
          name: "인재찾기",
          description: "인재를 직접 찾아보아요!",
          route: "/humanResources",
        },
        {
          name: "채용공고",
          description: "채용공고는 여기에서!",
          route: "/jobPosting",
        },
        {
          name: "조직관리",
          description: "교사이신가요?",
          route: "/organizations",
        },
        {
          name: "요금제",
          description: "더 다양한 기능을 사용해요",
          route: "/prices",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};

