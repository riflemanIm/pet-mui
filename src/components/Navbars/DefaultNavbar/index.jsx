import { Fragment, useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";

//
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { Button } from "@mui/material";
import logo_light from "assets/logo_shepherd_light.svg";
import logo from "assets/logo_shepherd_navy_opt.svg";
import DefaultNavbarDropdown from "components/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "components/Navbars/DefaultNavbar/DefaultNavbarMobile";
import NextMuiLink from "components/NextMuiLink";
import ShoppingCartButton from "components/ShoppingCartButton";
import UserAuthButtons from "components/UserAuthButtons";
import breakpoints from "theme/base/breakpoints";

function DefaultNavbar({
  routes,
  transparent,
  light,

  sticky,
  relative = false,
  center,
}) {
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  // New state for scroll
  const [scrolled, setScrolled] = useState(false);

  // Background color variables

  const scrolledBg = "#EDDED2";
  const arrowBg = scrolled ? scrolledBg : "#fff";

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  // Scroll listener to toggle navbar color
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 655);
    };
    window.addEventListener("scroll", handleScroll);
    // initialize on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        href={href}
        route={route}
        collapse={Boolean(collapse)}
        onMouseEnter={({ currentTarget }) => {
          if (collapse) {
            setDropdown(currentTarget);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseLeave={() => collapse && setDropdown(null)}
        light={light}
      />
    )
  );

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(
    ({ name, collapse, columns, rowsPerColumn }) => {
      let template;

      // Render the dropdown menu that should be display as columns
      if (collapse && columns && name === dropdownName) {
        const calculateColumns = collapse.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / rowsPerColumn);

          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        }, []);

        template = (
          <Grid key={name} container spacing={3} py={1} px={1.5}>
            {calculateColumns.map((cols, key) => {
              const gridKey = `grid-${key}`;
              const dividerKey = `divider-${key}`;

              return (
                <Grid
                  key={gridKey}
                  item
                  xs={12 / columns}
                  sx={{ position: "relative" }}
                >
                  {cols.map((col, index) => (
                    <Fragment key={col.name}>
                      <MKTypography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                        py={1}
                        px={0.5}
                        mt={index !== 0 ? 2 : 0}
                      >
                        {col.name}
                      </MKTypography>
                      {col.collapse.map((item) => (
                        <NextMuiLink
                          key={item.name}
                          href={item.route || item.href || "#"}
                        >
                          <MKTypography
                            minWidth="11.25rem"
                            display="block"
                            variant="button"
                            textTransform="capitalize"
                            fontWeight="regular"
                            py={0.625}
                            px={2}
                            sx={({
                              palette: { grey, secondary, primary },
                              borders: { borderRadius },
                            }) => ({
                              borderRadius: borderRadius.md,
                              cursor: "pointer",
                              transition: "all 300ms linear",

                              "&:hover": {
                                backgroundColor: grey[200],
                                color: scrolled ? primary.main : secondary.main,
                              },
                            })}
                          >
                            {item.name}
                          </MKTypography>
                        </NextMuiLink>
                      ))}
                    </Fragment>
                  ))}
                  {key !== 0 && (
                    <Divider
                      key={dividerKey}
                      orientation="vertical"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "-4px",
                        transform: "translateY(-45%)",
                        height: "90%",
                      }}
                    />
                  )}
                </Grid>
              );
            })}
          </Grid>
        );

        // Render the dropdown menu that should be display as list items
      } else if (collapse && name === dropdownName) {
        template = collapse.map((item) => {
          return (
            <NextMuiLink key={item.name} href={item.route || item.href || "#"}>
              <MKTypography
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                variant="button"
                textTransform="capitalize"
                minWidth={item.description ? "14rem" : "12rem"}
                color={item.description ? "secondary" : "text"}
                fontWeight={item.description ? "bold" : "regular"}
                py={item.description ? 1 : 0.625}
                px={2}
                sx={({
                  palette: { grey, secondary },
                  borders: { borderRadius },
                }) => ({
                  borderRadius: borderRadius.md,
                  cursor: "pointer",
                  transition: "all 300ms linear",

                  "&:hover": {
                    backgroundColor: grey[200],
                    color: secondary.main,

                    "& *": {
                      color: secondary.main,
                    },
                  },
                })}
                onMouseEnter={({ currentTarget }) => {
                  if (item.dropdown) {
                    setNestedDropdown(currentTarget);
                    setNestedDropdownEl(currentTarget);
                    setNestedDropdownName(item.name);
                  }
                }}
                onMouseLeave={() => {
                  if (item.dropdown) {
                    setNestedDropdown(null);
                  }
                }}
              >
                {item.description ? (
                  <MKBox>
                    {item.name}
                    <MKTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                ) : (
                  item.name
                )}
                {item.collapse && (
                  <Icon
                    fontSize="small"
                    sx={{
                      fontWeight: "normal",
                      verticalAlign: "middle",
                      mr: -0.5,
                    }}
                  >
                    keyboard_arrow_right
                  </Icon>
                )}
              </MKTypography>
            </NextMuiLink>
          );
        });
      }

      return template;
    }
  );

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) =>
              scrolled ? scrolledBg : white.main,
          }}
        >
          <MKBox borderRadius="lg">
            <MKTypography variant="h1" color="white">
              <Icon ref={setArrowRef} sx={{ mt: -3, color: arrowBg }}>
                arrow_drop_up
              </Icon>
            </MKTypography>
            <MKBox shadow="lg" borderRadius="lg" p={2} mt={2}>
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => {
                return (
                  <NextMuiLink
                    key={item.name}
                    href={item.route || item.href || "#"}
                  >
                    <MKTypography
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      variant="button"
                      textTransform="capitalize"
                      minWidth={item.description ? "14rem" : "12rem"}
                      color={item.description ? "secondary" : "text"}
                      fontWeight={item.description ? "bold" : "regular"}
                      py={item.description ? 1 : 0.625}
                      px={2}
                      sx={({
                        palette: { grey, secondary },
                        borders: { borderRadius },
                      }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",

                        "&:hover": {
                          backgroundColor: grey[200],
                          color: secondary.main,

                          "& *": {
                            color: secondary.main,
                          },
                        },
                      })}
                    >
                      {item.description ? (
                        <MKBox>
                          {item.name}
                          <MKTypography
                            display="block"
                            variant="button"
                            color="text"
                            fontWeight="regular"
                            sx={{ transition: "all 300ms linear" }}
                          >
                            {item.description}
                          </MKTypography>
                        </MKBox>
                      ) : (
                        item.name
                      )}
                      {item.collapse && (
                        <Icon
                          fontSize="small"
                          sx={{
                            fontWeight: "normal",
                            verticalAlign: "middle",
                            mr: -0.5,
                          }}
                        >
                          keyboard_arrow_right
                        </Icon>
                      )}
                    </MKTypography>
                  </NextMuiLink>
                );
              });
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MKBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MKBox shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      {!scrolled && (
        <MKBox
          position={relative ? "relative" : "absolute"}
          my={relative ? 0 : 1}
          width={relative ? "100%" : "calc(100% - 48px)"}
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          <MKTypography
            variant="subtitle2"
            component="a"
            href="/map"
            color="white"
            fontWeight="regular"
            mx={2}
          >
            На карте
          </MKTypography>
          <MKTypography
            variant="subtitle2"
            component="a"
            href="tel:+79897772000"
            color="white"
            my={0}
            mx={2}
            mr={2.5}
          >
            +7 989 777 2000
          </MKTypography>
          <MKTypography
            variant="subtitle2"
            component="a"
            href="/contacts"
            color="white"
            fontWeight="regular"
            mx={0}
          >
            Контакты
          </MKTypography>
        </MKBox>
      )}
      <MKBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 5}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "secondary"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white },
          functions: { rgba },
        }) => ({
          backgroundColor: scrolled
            ? /* new color when scrolled past 655px */
              scrolledBg
            : transparent
            ? transparentColor.main
            : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MKBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <NextMuiLink href="/">
            <MKBox
              component="img"
              src={!light ? logo.src : logo_light.src}
              alt="logo"
              width="62%"
              opacity={1}
              sx={{
                mt: 0.8,
              }}
            />
          </NextMuiLink>

          <MKBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </MKBox>

          <MKBox
            ml={{ xs: "auto", lg: 0 }}
            display={{ xs: "none", lg: "flex" }}
          >
            <NextMuiLink href="/catalog">
              <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                Каталог
              </Button>
            </NextMuiLink>
          </MKBox>
          <MKBox alignItems={"right"}>
            <ShoppingCartButton />
          </MKBox>

          <UserAuthButtons />

          <MKBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </MKBox>
        </MKBox>
        <MKBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && (
            <DefaultNavbarMobile routes={routes} open={mobileNavbar} />
          )}
        </MKBox>
      </MKBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

export default DefaultNavbar;
