import {
  getOzonGoodsCategoryAttributeValue,
  getOzonGoodsCategoryAttributes,
} from "../../src/actions/user";
import prisma from "../../lib/prisma";
import isEmpty from "../../src/helpers";
import jsonData from "../../import_data/data.json";

const mapTables = {
  designedFor: "Предназначено для",
  age: "Возраст животного",
  petSize: "Размер животного",
  MadeIn: "Страна-изготовитель",
  feature: "Особенности",
  specialNeeds: "Особые потребности",
  taste: "Вкус корма для животных",
  package: "Упаковка",
  ingridient: "Основной ингредиент",
  hardness: "Жесткость",
  typeTreat: "Вид лакомства",
};
const getKeyByValue = (value) => {
  return Object.keys(mapTables).find((key) => mapTables[key] === value);
};
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

// Seed books and authors data.
// async function seedBooksAndAuthors(client, books, authors) {
//   const records = books.map((book) => {
//     const authorIndex = faker.datatype.number({
//       min: 0,
//       max: authors.length - 1,
//     });
//     const author = authors[authorIndex];

//     return {
//       bookId: book.id,
//       authorId: author.id,
//     };
//   });

//   const added = await client.bookAuthor.createMany({
//     data: records,
//     skipDuplicates: true,
//   });

//   if (added.count > 0) {
//     console.log(
//       `Successfully inserted ${added.count} book and author relation records.`
//     );
//   }

//   return records;
// }
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

  // const vals = val.split(";");
  // vals.forEach(async (itt) => {
  //   const field = {};
  //   field[fieldName] = await getId(tableName, itt);
  //   await prisma[boundTable].create({
  //     data: {
  //       foodId,
  //       ...field,
  //     },
  //   });
  // });
};
export default async function handler(req, res) {
  //const attributes = await getOzonGoodsCategoryAttributes();
  // try {
  //   attributes.result.forEach(
  //     async ({ id, is_required, name, attribute_complex_id }) => {
  //       const tableName = getKeyByValue(name);
  //       if (tableName != null) {
  //         const data = await getOzonGoodsCategoryAttributeValue(id);

  //         if (!isEmpty(data)) {
  //           //console.log("data", data);
  //           console.log("tableName", name, tableName);
  //           data.result.forEach(async (row) => {
  //             await prisma[tableName].create({
  //               data: {
  //                 name: row.value,
  //               },
  //             });
  //           });
  //           res.status(200).json(data);
  //         }
  //       }
  //     }
  //   );
  // } catch (err) {
  //   console.log(err);
  // }

  try {
    jsonData.forEach(async (it) => {
      const brandId = await getId("brand", it.R);
      const tasteId = await getId("taste", it.X);
      const designedForId = await getId("designedFor", it.Z);
      const ingridientId = await getId("ingridient", it.AM);
      const hardnessId = await getId("hardness", it.AO);
      const specialNeedsId = await getId("specialNeeds", it.AR);
      const madeInId = await getId("madeIn", it.AZ);

      await prisma.food.create({
        data: {
          id: parseInt(it.A),
          artikul: it.B,
          title: it.C,
          price: parseFloat(it.D),
          priceDiscount: parseFloat(it.E),
          vat: it.F === "Не облагается" ? false : true,
          isPromo: it.G === "Нет" ? false : true,
          ozonId: it.H ?? null,
          barcode: it.I,
          packageWeight: parseInt(it.J, 10),
          packageWidth: parseInt(it.K, 10),
          packageHeight: parseInt(it.L, 10),
          lengthHeight: parseInt(it.M, 10),
          img: it.N,
          imgs: it.O,
          brandId: brandId,
          type: "Treat",
          feature: it.T,
          weight: parseInt(it.V),
          quantity: parseInt(it.W) || null,
          tasteId: tasteId,
          quantityPackages: parseInt(it.Y) || null,
          designedForId: designedForId,
          expiration: parseInt(it.AA),
          proteins: parseInt(it.AD) || null,
          fats: parseInt(it.AE) || null,
          anatation: it.AL,
          ingridientId: ingridientId,
          keywords: it.AN,
          hardnessId: hardnessId,
          posibleStartMoth: parseInt(it.AQ),
          specialNeedsId: specialNeedsId,
          numInPackage: parseInt(it.AT) || null,
          composition: it.AU ?? null,
          materials: it.AV ?? null,
          contentOfMeet: parseInt(it.AW) || null,
          energyValue: parseInt(it.AX) || null,
          madeInId: madeInId,
        },
      });
      if (it.U != null && it.U != "") {
        creatBound(parseInt(it.A), "age", "foodAge", "ageId", it.U);
      }
      if (it.AC != null && it.AC != "") {
        creatBound(
          parseInt(it.A),
          "package",
          "foodPackage",
          "packageId",
          it.AC
        );
      }
      if (it.AK != null && it.AK != "") {
        creatBound(
          parseInt(it.A),
          "typeTreat",
          "foodTypeTreat",
          "typeTreatId",
          it.AK
        );
      }
      if (it.AP != null && it.AP != "") {
        creatBound(
          parseInt(it.A),
          "petSize",
          "foodPetSize",
          "petSizeId",
          it.AP
        );
      }
      if (it.AS != null && it.AS != "") {
        creatBound(
          parseInt(it.A),
          "feature",
          "foodFeature",
          "featureId",
          it.AS
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
}
