import {textToTranslate} from './TextToTranslate.js'
export const ParagraphText = async (page, className) => {
  const paragraphs = await page.evaluate((className) => {
    const elements = document.querySelectorAll(className);
    return Array.from(elements).map((element) => element.textContent.trim());
  }, className);
  
  const newTexts = await Promise.all(paragraphs.map(async (paragraph) => {
    return await textToTranslate(paragraph);
  }));

  return newTexts;
};
