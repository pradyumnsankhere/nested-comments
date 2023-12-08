import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { MuiDivider } from "./Divider";

export const Header = ({ user = "Ayush" }) => {
  return (
    <>
      <Box
        sx={{
          pt: 1,
          pb:1,
          pl: 3,
          pr: 3,
          borderRadius: 2,
          bgcolor: "background.default",
          fontSize: "14px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item>
            <Avatar
              sx={{ width: 45, height: 45 }}
              alt={"A"}
              src="images/Ellipse 1.png"
            />
          </Grid>

          <Grid item xs={10}>
            <div>
              <Typography style={{ fontWeight: 600 }}>
                {user?.username ?? ""}
              </Typography>
              <Typography style={{ color: "#8F8F8F" }}>2d</Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
      <MuiDivider margin={"7px 0px 0px 0px"} />
    </>
  );
};
