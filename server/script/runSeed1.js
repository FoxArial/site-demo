const { createStrapi } = require("@strapi/strapi");

async function main() {
  const app = await createStrapi();
  await app.start();

  await require("./seed")({ strapi: app });

  await app.destroy();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
