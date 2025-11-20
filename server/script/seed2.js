const fs = require("fs");
const path = require("path");

module.exports = async ({ strapi }) => {
  try {
    // Зчитуємо JSON файл
    const filePath = path.resolve(__dirname, "global.json"); // твій файл
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // data має бути масивом або об’єктом залежно від експорту
    // Якщо масив:
    for (const record of data) {
      await strapi.db.query("api::global.global").create({
        data: record,
      });
    }

    strapi.log.info("✅ Global pages imported successfully!");
  } catch (err) {
    strapi.log.error("❌ Error importing home pages:", err);
  }
};
