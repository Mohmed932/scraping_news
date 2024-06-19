import { textToTranslate } from "./TextToTranslate.js";
export const ParagraphText = async (page, className) => {
  const paragraphs = await page.evaluate((className) => {
    const elements = document.querySelectorAll(className);
    return Array.from(elements).map((element) => element.textContent.trim());
  }, className);

  const newTexts = await Promise.all(
    paragraphs.map(async (paragraph) => {
      try {
        return await textToTranslate(paragraph);
      } catch (error) {
        return paragraph;
      }
    })
  );

  return newTexts;
};
