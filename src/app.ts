import express from "express";
import { prisma } from "./lib/prisma";

const app = express();

app.get("/", (req, res) => {
    prisma.$connect().then(() => {
        console.log("Connected to the database successfully!");
    }).catch((error) => {
        console.error("Error connecting to the database:", error);
    });
  res.send("Hello, World!");

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 