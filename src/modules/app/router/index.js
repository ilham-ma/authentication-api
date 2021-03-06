const express = require("express");
const cors = require("cors");

const authRoutes = require("../../auth/router");

const createServer = () => {
  const app = express();
  const allowedOrigins = ["*"];

  const corsOptions = {
    origin: allowedOrigins,
  };

  app.use(express.json()); // parse json request body
  app.use(cors(corsOptions));

  // routes
  app.use(authRoutes);

  app.get("/", (req, res) => {
    return res.json({ message: "halo" });
  });

  return app;
};

module.exports = createServer;
