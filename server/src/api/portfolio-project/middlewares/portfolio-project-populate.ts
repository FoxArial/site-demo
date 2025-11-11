/**
 * `portfolio-project-populate` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  title: true,
  description: true,
  background: {
    populate: {
      image: {
        fields: ["url"],
      },
    },
  },
  link: {
    populate: {
      label: true,
    },
  },
  portfolio_category: true,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info("In portfolio-project-populate middleware.");

    await next();
  };
};
