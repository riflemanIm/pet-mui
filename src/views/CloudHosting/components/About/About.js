/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import LaptopSkeletonIllustration from "svg/illustrations/LaptopSkeleton";

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          color={"primary"}
        >
          COMPLETE CONTROL
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography component={"span"} variant="h4" sx={{ fontWeight: 700 }}>
          Monitor and analyze usage patterns.
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color="text.secondary">
        Keep track of what's happening with your data, change permissions, and
        run reports against your data anywhere in the world.
        <br />
        Forward thinking businesses use our cloud backup service to ensure data
        reliability and safety.
      </Typography>
      <Box marginTop={2}>
        <Box
          width={1}
          height={1}
          data-aos={"fade-up"}
          component={Card}
          display={"flex"}
          flexDirection={"column"}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box marginBottom={1}>
              <Box display={"flex"} justifyContent={"flex-start"}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Box key={item} color={theme.palette.secondary.main}>
                    <svg
                      width={18}
                      height={18}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </Box>
                ))}
              </Box>
            </Box>
            <Typography color="text.primary">
              American standards and european culture how to avoid a
              disappointing vacation experience while traveling in europe
            </Typography>
          </CardContent>
          <CardActions sx={{ paddingBottom: 2 }}>
            <ListItem component="div" disableGutters sx={{ padding: 0 }}>
              <ListItemAvatar>
                <Avatar
                  src={"https://assets.maccarianagency.com/avatars/img1.jpg"}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ margin: 0 }}
                primary={"Clara Bertoletti"}
                secondary={"MUI lover"}
              />
            </ListItem>
          </CardActions>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box data-aos={isMd ? "fade-right" : "fade-up"}>
          <LeftSide />
        </Box>
      </Grid>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box width={1}>
          <Box
            sx={{
              position: "relative",
              marginX: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginX: "auto",
              }}
            >
              <Box>
                <Box
                  position={"relative"}
                  zIndex={2}
                  maxWidth={1}
                  height={"auto"}
                  sx={{ verticalAlign: "middle" }}
                >
                  <LaptopSkeletonIllustration />
                </Box>
                <Box
                  position={"absolute"}
                  top={"8.4%"}
                  left={"12%"}
                  width={"76%"}
                  height={"83%"}
                  border={`1px solid ${theme.palette.alternate.dark}`}
                  zIndex={3}
                >
                  <Box
                    component={"img"}
                    loading="lazy"
                    src="https://assets.maccarianagency.com/screenshots/dashboard.png"
                    alt="Image Description"
                    width={1}
                    height={1}
                    sx={{
                      objectFit: "cover",
                      filter:
                        theme.palette.mode === "dark"
                          ? "brightness(0.7)"
                          : "none",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
