/**
 * `global-populate` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  header: {
    populate: {
      logo: {
        populate: {
          label: true,
          image: true,
        },
      },
      navItems: {
        populate: {
          label: true,
        },
      },
      cta: {
        populate: {
          label: true,
        },
      },
      background: {
        populate: {
          image: true,
        },
      },
    },
  },
  footer: {
    populate: {
      infoColumns: {
        populate: {
          title: true,
          links: {
            populate: {
              label: true,
            },
          },
        },
      },
      logo: {
        populate: {
          label: true,
          image: true,
        },
      },
      description: true,
      socialLogos: {
        populate: {
          label: true,
          image: true,
        },
      },
      links: {
        populate: {
          label: true,
        },
      },
      text: true,
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info("In global-populate middleware.");

    await next();
  };
};
