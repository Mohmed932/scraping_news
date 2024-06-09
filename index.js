import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";
import { newsRoute } from "./Route/News.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import { Ajnet } from "./Scraping/Ajnet.js";
import { Alghad } from "./Scraping/Alghad.js";
import { Alhurra } from "./Scraping/Alhurra.js";
import { Alqaheranews } from "./Scraping/Alqaheranews.js";
import { Aawsat } from "./Scraping/Aawsat.js";
import { Asharq } from "./Scraping/Asharq.js";

// import { Edition } from "./Scraping/Edition.js";
// import { Bbc } from "./Scraping/Bbc.js";
// import { Aljazeera } from "./Scraping/Aljazeera.js";
// import { Apnews } from "./Scraping/Apnews.js";
// import { SkyNews } from "./Scraping/SkyNews.js";
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
      await Ajnet(browser);
      await Alghad(browser);
      await Alhurra(browser);
      await Alqaheranews(browser);
      await Aawsat(browser);
      await Asharq(browser);
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

// 1-https://edition.cnn.com/
// 2-https://www.bbc.com/
// 4-https://www.aljazeera.com/
// 8-https://apnews.com/
