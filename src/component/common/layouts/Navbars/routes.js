/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const routes = [
  {
    name: "프로젝트",
    icon: <GroupsIcon />,
    route: "/groupFinder",
  },
  {
    name: "일자리",
    icon: <WorkIcon />,
    route: "/jobFinder",
  },
  {
    name: "Premium",
    icon: <WorkspacePremiumIcon />,
    collapse: [
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
  {
    name: "개발모드",
    icon: <GitHubIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "테스트",
        collapse: [
          {
            name: "레퍼런스",
            route: "/example",
          },
          {
            name: "멀티 셀렉트",
            route: "/example/multiSelectExample",
          },
          {
            name: "파일 업로드",
            route: "/example/fileUpload",
          },
          {
            name: "리덕스",
            route: "/example/redux",
          },
        ],
      },
      {
        name: "기타",
        collapse: [
          {
            name: "활동포인트",
            route: "/example/bestworker",
          },
          {
            name: "데이터베이스 조회",
            route: "/example/database",
          },
        ],
      },
    ],
  },
];

export default routes;
