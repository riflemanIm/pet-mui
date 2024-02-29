import prisma from "../../lib/prisma";
import axios from "axios";
import { isArray } from "../../src/helpers";

const getId = async (tableName, name) => {
  try {
    const res = await prisma[tableName].findFirst({
      where: {
        name,
      },
    });
    console.log("getId tableName", tableName, res.id);
    return res.id;
  } catch (error) {
    console.log("getId error:", error);
  }
};
const getIds = async (tableName, valsStr) => {
  const vals = valsStr.split(";");
  try {
    const res = await prisma[tableName].findMany({
      where: {
        name: { in: vals },
      },
    });
    console.log("getIds", tableName, res);
    return res;
  } catch (error) {
    console.log("getId error:", error);
  }
};

const creatBound = async (foodId, tableName, boundTable, fieldName, val) => {
  const data = await getIds(tableName, val);
  const records = data.map((itt) => ({
    foodId,
    [fieldName]: itt.id,
  }));
  await prisma[boundTable].createMany({
    data: records,
    skipDuplicates: true,
  });
};

async function downloadFile(url, filename) {
  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, filename);
    })
    .catch((err) => {
      console.log("---- Error downloadFile", err);
    });
}
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
    const destdir = `${__dirname}/../../../../src/assets/images/catalog`;

    console.log("----", destdir);
    const allImgs = [];
    foods.forEach(async (item, inx) => {
      console.log(inx, "-----", fileName(item["imgUrl"]));
      await prisma.food.update({
        data: { img: fileName(item["imgUrl"]) },
      });
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
