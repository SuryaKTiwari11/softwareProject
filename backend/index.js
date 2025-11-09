import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./utils.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";
import {
  apiLimiter,
  authLimiter,
  adminLimiter,
} from "./middlewares/rateLimiter.middleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL || "https://your-vercel-app.vercel.app"
        : "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

connectDB();

// Apply rate limiters to routes
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/admin", adminLimiter, adminRoutes);
app.use("/api/user", apiLimiter, userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
