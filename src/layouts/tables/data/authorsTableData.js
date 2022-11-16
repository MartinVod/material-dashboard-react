/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "member", accessor: "member", width: "45%", align: "left" },
      { Header: "type", accessor: "type", align: "left" },
      { Header: "renewal status", accessor: "renewal status", align: "center" },
      { Header: "exp date", accessor: "exp date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        member: <Author image={team2} name="John Michael" email="john@ls-techs.com" />,
        type: <Job title="Member Card" description="Organization" />,
        "renewal status": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="valid" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "exp date": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        member: <Author image={team3} name="Alexa Liras" email="alexa@ls-techs.com" />,
        type: <Job title="Member Card" description="Soldier" />,
        "renewal status": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="expired" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        "exp date": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        member: <Author image={team4} name="Laurent Perrier" email="laurent@ls-techs.com" />,
        type: <Job title="Executive" description="Elder" />,
        "renewal status": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="valid" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        "exp date": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        member: <Author image={team3} name="Michael Levi" email="michael@ls-techs.com" />,
        type: <Job title="Master Card" description="Youth" />,
        "renewal status": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="suspended" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
        "exp date": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        member: <Author image={team3} name="Richard Gran" email="richard@ls-techs.com" />,
        type: <Job title="Member Card" description="Executive" />,
        "renewal status": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="expired" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        "exp date": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        member: <Author image={team4} name="Miriam Eric" email="miriam@ls-techs.com" />,
        type: <Job title="Member Card" description="Security" />,
        "renewal status": (
          <MDBox ml={-1}>
            <MDBadge badgeContent="not activated" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        "exp date": (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
