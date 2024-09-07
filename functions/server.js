// gateway.js
import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import axios from "axios";

const app = express();
app.use(cors());

const router = express.Router();

// URLs de los servicios internos
const tasksServiceUrl = 'https://taskban-task.netlify.app/.netlify/functions/server/tasks';
const boardsServiceUrl = 'https://taskban-boards.netlify.app/.netlify/functions/server/boards';

// Ruta para obtener tareas por ID del tablero a través del gateway
router.get("/tasks", async (req, res) => {
  try {
    const { boardId } = req.query;
    if (!boardId) {
      return res.status(400).json({ message: "Board ID is required" });
    }

    // Llamar al servicio de tareas
    const response = await axios.get(tasksServiceUrl, { params: { boardId } });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

// Ruta para obtener todos los boards a través del gateway
router.get("/boards", async (req, res) => {
  try {
    // Llamar al servicio de boards
    const response = await axios.get(boardsServiceUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching boards:", error);
    res.status(500).json({ message: "Error fetching boards" });
  }
});

// Ruta para obtener un board por ID a través del gateway
router.get("/boards/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Llamar al servicio de boards
    const response = await axios.get(`${boardsServiceUrl}/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching board:", error);
    res.status(500).json({ message: "Error fetching board" });
  }
});

// Iniciar servidor en el contexto de Netlify Functions
app.use('/.netlify/functions/server', router);

export const handler = serverless(app);
