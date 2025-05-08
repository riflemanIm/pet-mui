import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MKButton from "components/MKButton";
import { useState } from "react";

function Dropdown({ isUp = false, options, coordinates, setCoordinates }) {
  const [dropdown, setDropdown] = useState(null);

  const openDropdown = ({ currentTarget }) => {
    setDropdown(currentTarget);
  };
  const closeDropdown = (event) => {
    console.log("event.target.value--", event.target.value);
    setCoordinates(options[event.target.value]?.value);
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

  const title = options.find((it) => it.value === coordinates)?.label;

  return (
    <>
      <MKButton
        color="default"
        sx={{ color: ({ palette: { dark } }) => dark.main }}
        onClick={openDropdown}
        variant="contained"
        size="medium"
        endIcon={<ArrowForwardIosIcon sx={dropdownIconStyles} />}
      >
        {title}
      </MKButton>
      <Icon sx={dropdownIconStyles} />
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
        {options.map((item, inx) => (
          <MenuItem
            onClick={closeDropdown}
            value={inx}
            key={item.value}
            sx={{ minWidth: 210 }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default Dropdown;
