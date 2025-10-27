/**
 * `home-populate` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  header: {
    populate: {
      logo: {
        populate: {
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
          links: {
            populate: {
              label: true,
            },
          },
        },
      },
      logo: {
        populate: {
          image: true,
        },
      },
      socialLogos: {
        populate: {
          image: true,
        },
      },
      links: {
        populate: {
          label: true,
        },
      },
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info("In home-populate middleware.");

    await next();
  };
};
