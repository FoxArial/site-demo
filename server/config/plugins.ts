module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  connection: {
    client: "mysql",
    connection: {
      host: env("MYSQLHOST"),
      port: env.int("MYSQLPORT"),
      database: env("MYSQLDATABASE"),
      user: env("MYSQLUSER"),
      password: env("MYSQLPASSWORD"),
    },
    debug: false,
  },
});
