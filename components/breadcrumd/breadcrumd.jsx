import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { emphasize, styled } from "@mui/material/styles";

import Chip from "@mui/material/Chip";
// import HomeIcon from "@mui/icons-material/Home";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Breadcrumd = ({ list }) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {list.map(({ id, href, label }) => (
          <StyledBreadcrumb key={id} component="a" href={href} label={label} />
        ))}
        {/* <StyledBreadcrumb component="a" href="/" label="Home" />
        <StyledBreadcrumb component="a" label="Citations" /> */}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumd;
