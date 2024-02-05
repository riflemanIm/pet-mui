const xlsx = require("xlsx");

const file = "data.xlsx";
const workbook = xlsx.readFile(file);

const worksheet = workbook.Sheets[workbook.SheetNames[1]];

var headers = {};
var data = [];
for (z in worksheet) {
  if (z[0] === "!") continue;

  //parse out the column, row, and value
  var col = z.substring(0, 1);
  var row = parseInt(z.substring(1));

  var value = worksheet[z].v;
  console.info("  row", worksheet[z]);
  //store header names
  if (row == 1) {
    headers[col] = value;
    continue;
  }

  if (!data[row]) data[row] = {};
  data[row][headers[col]] = value;
  break;
}
//drop those first two rows which are empty
data.shift();
data.shift();
