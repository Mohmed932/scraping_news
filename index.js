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
      // await Almasryalyoum(browser);
      await Alqaheranews(browser);
      await Cgtn(browser);
      await Qudsn(browser);
      await Chinadaily(browser);
      await Elbyan(browser);
    }
  } catch (error) {
    console.error(error);
    await browser.close();
  }
})();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    server.listen(5001, () => {
      console.log("server listening on port 5000");
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
