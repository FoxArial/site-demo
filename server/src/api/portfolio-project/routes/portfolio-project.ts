/**
 * portfolio-project router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::portfolio-project.portfolio-project",
  {
    config: {
      find: {
        middlewares: ["api::portfolio-project.portfolio-project-populate"],
      },
    },
  }
);
