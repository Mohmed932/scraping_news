import { ParagraphText } from "../Utility/ParagraphText.js";
import { News } from "../Model/News.js";
import { textToTranslate } from "../Utility/TextToTranslate.js";
// import { getImageUrlWithoutQueryParams } from "../Utility/ImageUrlWithoutQueryParams.js";

const linkActivity = "https://scraping-news.onrender.com"

export const MainScraping = async (
  browser,
  links,
  selector,
  titleClassname,
  imgClassname,
  ParagraphClassName,
  divClassName
) => {
  let page;
  try {
    page = await browser.newPage();
    page.setDefaultNavigationTimeout(0); // Disable timeout

    for (let i = 0; i < links.length; i++) {
      const { kind, link } = links[i];

      try {
        await page.goto(linkActivity)
        await page.goto(link, { timeout: 0 });
        await page.waitForSelector(selector);

        const SourceNews = await page.$eval(
          selector,
          (element) => element.href
        );
        await page.goto(SourceNews, { timeout: 0 });

        let title = await page.$eval(titleClassname, (element) =>
          element.textContent.trim()
        );
        let img = await page.$eval(imgClassname, (element) => element.src);

        if (divClassName && divClassName !== "") {
          await page.evaluate((divClassName) => {
            document.querySelectorAll(divClassName).forEach((i) => i.remove());
          }, divClassName);
        }

        const desc = await ParagraphText(page, ParagraphClassName);
        title = await textToTranslate(title);
        const category = await textToTranslate(kind);
        // img = getImageUrlWithoutQueryParams(img);
        const article = {
          title,
          img,
          kind,
          category,
          desc,
        };
        const data = new News(article);
        await data.save();
        console.log("data saved");
      } catch (error) {
        console.error(
          `An error occurred while processing link ${link}:`,
          error
        );
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    if (page) {
      await page.close();
    }
  }
};
