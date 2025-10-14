/*
=========================================================
* Shepherd React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import PropTypes from "prop-types";
// @mui material components
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//
import MKButton from "components/MKButton";

function Dropdown({ isUp = false, options }) {
  const [dropdown, setDropdown] = useState(null);
  const [title, setTitle] = useState("Ваш город");

  const openDropdown = ({ currentTarget }) => {
    setDropdown(currentTarget);
  };
  const closeDropdown = (event) => {
    const title =
      dropdown != null
        ? options.find((it) => it.value === event.target.value)?.title
        : "Ваш город";
    setTitle(title);
    setDropdown(null);
  };

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: dropdown ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  return (
    <>
      <MKButton variant="gradient" color="primary" onClick={openDropdown}>
        {title ?? "Ваш город"} <Icon sx={dropdownIconStyles}>expand_more</Icon>
      </MKButton>
      <Menu
        anchorEl={dropdown}
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        anchorOrigin={
          isUp && {
            vertical: "top",
            horizontal: "left",
          }
        }
        transformOrigin={
          isUp && {
            vertical: "bottom",
            horizontal: "left",
          }
        }
      >
        {options.map((item) => (
          <MenuItem onClick={closeDropdown} value={item.value} key={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
Dropdown.propTypes = {
  isUp: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Dropdown;
