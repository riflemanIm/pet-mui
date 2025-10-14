/**
=========================================================
* Shepherd React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import colors from "theme/base/colors";
import typography from "theme/base/typography";

const { grey } = colors;
const { size } = typography;

export default {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
      color: grey[600],
    },
  },
};
