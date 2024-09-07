// swagger.js
import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "TaskBan Gateway API",
            version: "1.0.0",
            description: "API Gateway for tasks and boards services",
        },
    },
    apis: ["./server.js"], // Ruta al archivo que contiene la documentación Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
