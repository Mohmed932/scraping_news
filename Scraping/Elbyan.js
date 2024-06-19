import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "sport",
    category: "رياضه",
    link: "https://www.elbyan.com/category/%d8%b1%d9%8a%d8%a7%d8%b6%d8%a9/",
  },
  {
    kind: "world",
    category: "عالم",
    link: "https://www.elbyan.com/category/%d8%a7%d9%84%d8%b9%d8%b1%d8%a8-%d9%88%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85/",
  },
  {
    kind: "Business",
    category: "اقتصاد",
    link: "https://www.elbyan.com/category/%d8%a7%d9%84%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af-%d8%a7%d9%84%d9%85%d8%b5%d8%b1%d9%8a-%d9%88%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85%d9%8a/",
  },
  {
    kind: "culture",
    category: "ثقافه وفن",
    link: "https://www.elbyan.com/category/%D8%AB%D9%82%D8%A7%D9%81%D8%A9-%D9%88%D9%81%D9%86/",
  }
];

export const Elbyan = async (browser) => {
  const selector =
    ".inner-wrapper .row div a";
  const titleClassname = ".inner-wrapper .post-title";
  const imgClassname = ".inner-wrapper .post-img img";
  const ParagraphClassName = ".inner-wrapper .post-text p";
  const divClassName = ".inner-wrapper .post-text div";
  await MainScraping(
    browser,
    links,
    selector,
    titleClassname,
    imgClassname,
    ParagraphClassName,
    divClassName
  );
};
