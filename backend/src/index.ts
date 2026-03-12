import express, { type Request, type Response } from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Backend server is running" });
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
