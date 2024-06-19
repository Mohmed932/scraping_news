import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "palestine",
    category: "فلسطين",
    link: "https://qudsn.co/post/category/1/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1",
  },
  {
    kind: "palestine",
    category: "فلسطين",
    link: "https://qudsn.co/post/category/2/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1",
  },
  {
    kind: "palestine",
    category: "فلسطين",
    link: "https://qudsn.co/post/category/3/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1",
  },
  {
    kind: "palestine",
    category: "فلسطين",
    link: "https://qudsn.co/post/category/4/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1",
  },
];

export const Qudsn = async (browser) => {
  const selector =
    ".site-container .container div div article div a";
  const titleClassname = ".page-post div:nth-child(2) .post-title";
  const imgClassname = ".page-post div:nth-child(2) div:nth-child(2) img";
  const ParagraphClassName = ".page-post .page-post-container .post-text p";
  const divClassName = ".page-post .page-post-container .post-text div";
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
