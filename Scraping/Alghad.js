import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "World",
    link: "https://www.alghad.tv/category/%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85/",
  },
  {
    kind: "technology",
    link: "https://www.alghad.tv/category/%d8%b9%d9%84%d9%88%d9%85-%d9%88%d8%aa%d9%83%d9%86%d9%88%d9%84%d9%88%d8%ac%d9%8a%d8%a7/",
  },
  {
    kind: "sport",
    link: "https://www.alghad.tv/category/%d8%b1%d9%8a%d8%a7%d8%b6%d8%a9/",
  },
  {
    kind: "culture",
    link: "https://www.alghad.tv/category/%d8%ab%d9%82%d8%a7%d9%81%d8%a9-%d9%88%d9%81%d9%86/",
  },
];

export const Alghad = async (browser) => {
  const selector = "main div div div div article div div a";
  const titleClassname =
    "main article .post-header-inner .post-header-title h1";
  const imgClassname = "main article .single-featured a";
  const ParagraphClassName = "main article .single-post-content p";
  const divClassName = "main article .single-post-content div";
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
