const excelToJson = require("convert-excel-to-json");
const sourceFile = `${__dirname}/data.xlsx`;
const result = excelToJson({
  sourceFile,
});
const fs = require("fs");

const fileName = "data.json";
const destFile = `${__dirname}/${fileName}`;
fs.writeFile(
  destFile,
  JSON.stringify(result["Шаблон"], null, 2),
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The data.json file was saved!");
  }
);
