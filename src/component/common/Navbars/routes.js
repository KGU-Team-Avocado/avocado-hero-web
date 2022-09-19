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

// Pages
import AboutUs from "mui/layouts/pages/landing-pages/about-us";
import ContactUs from "mui/layouts/pages/landing-pages/contact-us";
import Author from "mui/layouts/pages/landing-pages/author";
import SignIn from "mui/layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "mui/layouts/sections/page-sections/page-headers";
import Features from "mui/layouts/sections/page-sections/featuers";
import Navbars from "mui/layouts/sections/navigation/navbars";
import NavTabs from "mui/layouts/sections/navigation/nav-tabs";
import Pagination from "mui/layouts/sections/navigation/pagination";
import Inputs from "mui/layouts/sections/input-areas/inputs";
import Forms from "mui/layouts/sections/input-areas/forms";
import Alerts from "mui/layouts/sections/attention-catchers/alerts";
import Modals from "mui/layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "mui/layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "mui/layouts/sections/elements/avatars";
import Badges from "mui/layouts/sections/elements/badges";
import BreadcrumbsEl from "mui/layouts/sections/elements/breadcrumbs";
import Buttons from "mui/layouts/sections/elements/buttons";
import Dropdowns from "mui/layouts/sections/elements/dropdowns";
import ProgressBars from "mui/layouts/sections/elements/progress-bars";
import Toggles from "mui/layouts/sections/elements/toggles";
import Typography from "mui/layouts/sections/elements/typography";

const routes = [
  {
    name: "프로젝트",
    icon: <GitHubIcon />,
    route: "/groupFinder",
  },
  {
    name: "일자리",
    icon: <GitHubIcon />,
    route: "/jobFinder",
  },
  {
    name: "기업전용",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "인재찾기",
        description: "인재를 직접 찾아보아요!",
        route: "/humanRes",
      },
      {
        name: "채용공고",
        description: "채용공고는 여기에서!",
        route: "/jobPosting",
      },
    ],
  },
  {
    name: "개발모드",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "테마",
        collapse: [
          {
            name: "main theme",
            route: "/presentation",
            component: <AboutUs />,
          },
          {
            name: "workspace theme",
            route: "/workspace/630b7190409e908dbc8a1633",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "테스트",
        collapse: [
          {
            name: "레퍼런스",
            route: "/example",
            component: <SignIn />,
          },
          {
            name: "멀티 셀렉트",
            route: "/example/multiSelectExample",
            component: <SignIn />,
          },
          {
            name: "파일 업로드",
            route: "/example/fileUpload",
            component: <SignIn />,
          },
          {
            name: "리덕스",
            route: "/example/redux",
            component: <SignIn />,
          },
        ],
      },
      {
        name: "기타",
        collapse: [
          {
            name: "활동포인트",
            route: "/example/bestworker",
            component: <SignIn />,
          },
          {
            name: "데이터베이스 조회",
            route: "/example/database",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
];

export default routes;