/**
=========================================================
* Shepherd React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import colors from "theme/base/colors";

// Shepherd React helper functions
import pxToRem from "theme/functions/pxToRem";

const { transparent } = colors;

export default {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      //padding: `0 ${pxToRem(12)} !important`,

      "& .Mui-selected": {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset",
    },

    icon: {
      display: "none",
    },
  },
};
