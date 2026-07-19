import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Path for persisting contact form submissions
  const dataFilePath = path.join(process.cwd(), "submissions.json");

  // Helper to read submissions
  const readSubmissions = (): any[] => {
    try {
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, "utf8");
        return JSON.parse(fileContent);
      }
    } catch (error) {
      console.error("Error reading submissions file:", error);
    }
    return [];
  };

  // Helper to write submissions
  const writeSubmissions = (data: any[]): boolean => {
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
      return true;
    } catch (error) {
      console.error("Error writing submissions file:", error);
      return false;
    }
  };

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Get all contact form submissions
  app.get("/api/contact", (req, res) => {
    const submissions = readSubmissions();
    res.json(submissions);
  });

  // Submit contact form
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const submissions = readSubmissions();
    const newSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      subject: subject || "No Subject",
      message,
      createdAt: new Date().toISOString(),
    };

    submissions.push(newSubmission);
    const success = writeSubmissions(submissions);

    if (success) {
      res.status(201).json({ success: true, message: "Thank you! Your message has been received.", data: newSubmission });
    } else {
      res.status(500).json({ error: "Failed to store message. Please try again." });
    }
  });

  // Delete a submission (for managing messages)
  app.delete("/api/contact/:id", (req, res) => {
    const { id } = req.params;
    let submissions = readSubmissions();
    const originalLength = submissions.length;
    submissions = submissions.filter((item) => item.id !== id);

    if (submissions.length === originalLength) {
      return res.status(404).json({ error: "Submission not found." });
    }

    const success = writeSubmissions(submissions);
    if (success) {
      res.json({ success: true, message: "Message deleted successfully." });
    } else {
      res.status(500).json({ error: "Failed to delete message." });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running at http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
