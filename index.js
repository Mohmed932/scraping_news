import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";
import { newsRoute } from "./Route/News.js";
import mongoose from "mongoose";
import { config } from "dotenv";
// import { Almasryalyoum } from "./Scraping/Almasryalyoum.js";
import { Chinadaily } from "./Scraping/Chinadaily.js";
import { Cgtn } from "./Scraping/Cgtn.js";
import { Qudsn } from "./Scraping/Qudsn.js";
import { Elbyan } from "./Scraping/Elbyan.js";
import { Alqaheranews } from "./Scraping/Alqaheranews.js";
config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(newsRoute);
server.get("/", (req, res) => {
  try {
    return res.json({ message: "Hello world" });
  } catch (error) {
    console.error(error);
  }
});

// puppeteer function
(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      // headless:false,
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });
    while (true) {
      try {
        await Alqaheranews(browser);
      } catch (error) {
        console.error("Error in Alqaheranews:", error);
      }
      try {
        await Cgtn(browser);
      } catch (error) {
        console.error("Error in Cgtn:", error);
      }
      try {
        await Qudsn(browser);
      } catch (error) {
        console.error("Error in Qudsn:", error);
      }
      try {
        await Chinadaily(browser);
      } catch (error) {
        console.error("Error in Chinadaily:", error);
      }
      try {
        await Elbyan(browser);
      } catch (error) {
        console.error("Error in Elbyan:", error);
      }
    }
  } catch (error) {
    console.error(error);
    if (browser) {
      await browser.close();
    }
  }
})();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    server.listen(5001, () => {
      console.log("server listening on port 5001");
    });
  })
  .catch(() => {
    console.log("Connect to Mongoose failed");
  });

server.use("*", (req, res) => {
  try {
    return res.status(404).json({ message: `this route is not available` });
  } catch (error) {
    return res.json({ message: error.message });
  }
});
