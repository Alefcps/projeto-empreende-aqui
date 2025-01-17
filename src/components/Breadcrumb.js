import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const BreadcrumbCustom = () => {
 
return (
    <Breadcrumbs separator={<ChevronRight fontSize="small" />}>
      <Typography>
       Lorem
      </Typography>
      <Typography>
       Lorem
      </Typography>

      <Typography color="text.primary" fontWeight={600} fontStyle="italic">
        Lorem ipsum.
      </Typography>
    </Breadcrumbs>
    
  );
};

export default BreadcrumbCustom;
