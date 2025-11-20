const strapi = require("@strapi/strapi");

async function main() {
  const app = await strapi().load();
  await require("./seed2")({ strapi: app });
  await app.destroy();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
