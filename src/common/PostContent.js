import { Box, Typography } from "@mui/material";
import React from "react";
import { MuiDivider } from "./Divider";

export const PostContent = ({ title, body }) => {
  return (
    <div>
      <Box
        sx={{
            pt: 1,
            pb:1,
            pl: 3,
            pr: 3,
          borderRadius: 2,
          bgcolor: "background.default",
          fontSize: "14px",
          color: "#000000",
        }}
      >
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 600,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          {title}
        </Typography>

        <Typography
          style={{
            fontSize: "14px",
          }}
        >
          {body}
        </Typography>
      </Box>
      <MuiDivider margin={"7px 0px 0px 0px"} />

      <Box
        sx={{
            pt: 2,
            pb:1,
            pl: 3,
            pr: 3,
          borderRadius: 2,
          bgcolor: "background.default",
          fontSize: "14px",
          color: "#727272",
          fontWeight:600
        }}
      >
<div>Comments</div>

        </Box>
        <MuiDivider margin={"7px 0px 0px 0px"} />

    </div>
  );
};
