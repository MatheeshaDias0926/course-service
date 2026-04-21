const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Course Service API",
      version: "1.0.0",
      description:
        "Course Management microservice for Smart Campus Services. Handles course catalog, enrollment, and course data for other services.",
      contact: {
        name: "Matheesha",
      },
    },
    servers: [
      {
        url: "https://course-service.victorioustree-e4ff2207.southeastasia.azurecontainerapps.io",
        description: "Azure Container Apps",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
