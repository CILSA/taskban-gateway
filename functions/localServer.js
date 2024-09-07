// gateway.js
import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// URLs de los microservicios
const SERVICES = {
    BOARDS: "http://localhost:4001",
    TEAMS: "http://localhost:4002",
    PROFILE: "http://localhost:4003",
    TASKS: "http://localhost:4004", // Añadir el nuevo servicio de Tareas
};

// Middleware para autenticación con Firebase
const authMiddleware = (req, res, next) => {
    // Aquí iría la lógica para autenticar con Firebase
    const authToken = req.headers.authorization || "";
    if (!authToken.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // Validar el token con Firebase
    // ...
    next();
};

// Configurar los proxys para los microservicios
app.use("/api/boards", authMiddleware, createProxyMiddleware({ target: SERVICES.BOARDS, changeOrigin: true }));
app.use("/api/teams", authMiddleware, createProxyMiddleware({ target: SERVICES.TEAMS, changeOrigin: true }));
app.use("/api/profile", authMiddleware, createProxyMiddleware({ target: SERVICES.PROFILE, changeOrigin: true }));
app.use("/api/tasks", authMiddleware, createProxyMiddleware({ target: SERVICES.TASKS, changeOrigin: true })); // Proxy para el servicio de Tareas

// Servidor local para Gateway
app.listen(port, () => {
    console.log(`API Gateway is running on http://localhost:${port}`);
});
