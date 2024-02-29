import prisma from "../../lib/prisma";
import axios from "axios";
import { isArray } from "../../src/helpers";

import fs from "fs";

const fsPromises = fs.promises;

const downloadFile = async (filePath, url) => {
  try {
    const fileResponse = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    await fsPromises.writeFile(filePath, fileResponse.data);
    console.log(" successful");
  } catch (error) {
    console.error(" failed", error);
  }
};
const fileName = (url) => {
  const tmp = url.split("/");
  return (
    tmp[tmp.length - 3] + "_" + tmp[tmp.length - 2] + "_" + tmp[tmp.length - 1]
  );
};
const itemImg = (foodId, url) => {
  const item = {
    foodId,
    //url,
    img: fileName(url),
  };

  return item;
};
function groupByKey(array, key) {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
}
export default async function handler(req, res) {
  try {
    const foods = await prisma.food.findMany();

    const allImgs = [];
    foods.forEach(async (item, inx) => {
      const destFile = `${__dirname}/../../../../src/assets/images/catalog/${item.img}`;

      console.log(inx, "-----", fileName(item.imgUrl));
      downloadFile(destFile, item.imgUrl);
      // await prisma.food.update({
      //   data: { img: fileName(item.imgUrl) },
      //   where: {
      //     id: item.id,
      //   },
      // });
      const urls = item["imgs"].split("\n");
      if (isArray(urls)) {
        urls.forEach((it) => {
          allImgs.push(itemImg(parseInt(item.id, 10), it));
          //console.log(inxx, itemImg(it), "--");
        });
      }
    });
    const allImgsUniq = [...new Set(allImgs.map((it) => it.img))].map((img) =>
      allImgs.find((it) => it.img === img)
    );

    // allImgsUniq.forEach(async (data) => {
    //   await prisma.foodImgAdd.create({ data });
    // });

    // const group = groupByKey(allImgsUniq, "foodId");

    // Object.keys(group).map(async (key) => {
    //   //creatBound(item[], "age", "foodAge", "ageId", it.U);
    //   //const records = {};
    //   console.log(group[key]);
    //   await prisma.foodImgAdd.create({
    //     data: group[key],
    //     skipDuplicates: true,
    //   });
    //   // return;
    // });

    res.status(200).json({ len: allImgs.length, lenUnig: allImgsUniq.length });
  } catch (error) {
    console.log(error);
  }
}
