import prisma from "../../lib/prisma";
import {
  getOzonGoodsCategoryAttributeValue,
  getOzonGoodsCategoryAttributes,
} from "../../src/actions/user";

function objectKeyByValue(obj, val) {
  return Object.entries(obj).find((i) => i[1] === val);
}
const mapTables = {
  designed_for: "Предназначено для",
  ages: "Возраст животного",
  pet_sizes: "Размер животного",
  country_made_in: "Страна-изготовитель",
  features: "Особенности",
  special_needs: "Особые потребности",
  tastes: "Вкус корма для животных",
  packages: "Упаковка",
  ingridients: "Основной ингредиент",
  hardness: "Жесткость",
  type_treats: "Вид лакомства",
};

async function start() {
  const attributes = await getOzonGoodsCategoryAttributes();
  attributes.result.forEach(
    async ({ id, is_required, name, attribute_complex_id }) => {
      if (objectKeyByValue(mapTables, name)) {
        const attributeValues = await getOzonGoodsCategoryAttributeValue(
          id,
          name
        );
        console.log(" --- attributeValues ---", attributeValues);
      }
    }
  );
}

async function insertRow(table, valName) {
  // Insert a new  record.
  try {
    const res = await prisma[table].create({
      data: {
        name: valName,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
