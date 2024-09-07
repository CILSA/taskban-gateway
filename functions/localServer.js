// server.js
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import axios from "axios";

const app = express();
app.use(cors());

// Configuración de Swagger
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// URLs de los servicios internos
const tasksServiceUrl = 'http://localhost:4001/tasks'; // Cambia a tu URL local
const boardsServiceUrl = 'http://localhost:4002/boards'; // Cambia a tu URL local

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get tasks by board ID
 *     parameters:
 *       - name: boardId
 *         in: query
 *         description: ID of the board
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   boardId:
 *                     type: integer
 *                   description:
 *                     type: string
 *       400:
 *         description: Board ID is required
 *       500:
 *         description: Error fetching tasks
 */
app.get("/tasks", async (req, res) => {
    try {
        const { boardId } = req.query;
        if (!boardId) {
            return res.status(400).json({ message: "Board ID is required" });
        }

        const response = await axios.get(tasksServiceUrl, { params: { boardId } });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Error fetching tasks" });
    }
});

/**
 * @swagger
 * /boards:
 *   get:
 *     summary: Get all boards
 *     responses:
 *       200:
 *         description: List of boards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *       500:
 *         description: Error fetching boards
 */
app.get("/boards", async (req, res) => {
    try {
        const response = await axios.get(boardsServiceUrl);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching boards:", error);
        res.status(500).json({ message: "Error fetching boards" });
    }
});

/**
 * @swagger
 * /boards/{id}:
 *   get:
 *     summary: Get a board by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the board
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Board details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: Board not found
 *       500:
 *         description: Error fetching board
 */
app.get("/boards/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${boardsServiceUrl}/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching board:", error);
        res.status(500).json({ message: "Error fetching board" });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
