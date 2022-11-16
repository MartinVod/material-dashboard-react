/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
// import Tooltip from "@mui/material/Tooltip";
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
// import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  // const avatars = (members) =>
  //   members.map(([image, name]) => (
  //     <Tooltip key={name} title={name} placeholder="bottom">
  //       <MDAvatar
  //         src={image}
  //         alt="name"
  //         size="xs"
  //         sx={{
  //           border: ({ borders: { borderWidth }, palette: { white } }) =>
  //             `${borderWidth[2]} solid ${white.main}`,
  //           cursor: "pointer",
  //           position: "relative",

  //           "&:not(:first-of-type)": {
  //             ml: -1.25,
  //           },

  //           "&:hover, &:focus": {
  //             zIndex: "10",
  //           },
  //         }}
  //       />
  //     </Tooltip>
  //   ));

  // const Company = ({ image, name }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
  //       {name}
  //     </MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "20%", align: "left" },
      { Header: "ip", accessor: "ip", width: "10%", align: "left" },
      { Header: "code", accessor: "code", align: "center" },
      { Header: "type", accessor: "type", align: "center" },
      { Header: "port", accessor: "port", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDSHEFA1
          </MDTypography>
        ),
        ip: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            192.168.2.143
          </MDTypography>
        ),
        code: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CPRTSHF1
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDS
          </MDTypography>
        ),
        port: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            5001
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDSHEFA2
          </MDTypography>
        ),
        ip: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            192.168.2.254
          </MDTypography>
        ),
        code: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CPRTSHF2
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDS
          </MDTypography>
        ),
        port: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            -1
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDPRTW1
          </MDTypography>
        ),
        ip: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            192.170.0.151
          </MDTypography>
        ),
        code: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CPRTW1
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDS
          </MDTypography>
        ),
        port: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            31290
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDPRTW3
          </MDTypography>
        ),
        ip: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            192.170.0.171
          </MDTypography>
        ),
        code: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CPRTW3
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDS
          </MDTypography>
        ),
        port: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            90210
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDPRTW4
          </MDTypography>
        ),
        ip: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            192.170.0.181
          </MDTypography>
        ),
        code: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CPRTW4
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDS
          </MDTypography>
        ),
        port: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            4002
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="stuck" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        name: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            DUMMY
          </MDTypography>
        ),
        ip: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            192.170.0.3
          </MDTypography>
        ),
        code: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            DUMMY
          </MDTypography>
        ),
        type: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            CARDS
          </MDTypography>
        ),
        port: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            3000
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
