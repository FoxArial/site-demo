/**
 * `home-populate` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  content: {
    on: {
      "blocks.first-section": {
        populate: {
          title: true,
          cta: {
            populate: {
              label: true,
            },
          },
          description: true,
          background: {
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
        },
      },
      "blocks.technologies-section": {
        populate: {
          title: true,
          description: true,
          technologies: {
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
        },
      },
      "blocks.services-section": {
        populate: {
          title: true,
          description: true,
          services: {
            populate: {
              image: {
                fields: ["url"],
              },
              title: true,
              description: true,

              button: {
                populate: {
                  label: true,
                },
              },
            },
          },
        },
      },
      "blocks.info-section": {
        populate: {
          card: {
            populate: {
              title: true,
              description: true,
            },
          },
        },
      },
      "blocks.portfolio-section": {
        populate: {
          title: true,
          description: true,
          projects: {
            populate: {
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
            },
          },
        },
      },
      "blocks.contact-us-section": {
        populate: {
          title: true,
          description: true,
          form: {
            populate: {
              title: true,
              description: true,
              inputs: {
                populate: {
                  label: true,
                  placeholder: true,
                },
              },
            },
          },
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
