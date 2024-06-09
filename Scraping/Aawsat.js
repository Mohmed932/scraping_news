import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "technology",
    link: "https://aawsat.com/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7",
  },
  {
    kind: "sport",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9",
  },
  {
    kind: "Business",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF",
  },
  {
    kind: "world",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85",
  },
  {
    kind: "arab",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7",
  },
  {
    kind: "health",
    link: "https://aawsat.com/%D8%B5%D8%AD%D8%A9-%D9%88%D8%B9%D9%84%D9%88%D9%85",
  },
  {
    kind: "culture",
    link: "https://aawsat.com/%D8%AB%D9%82%D8%A7%D9%81%D8%A9-%D9%88%D9%81%D9%86%D9%88%D9%86",
  },
];

export const Aawsat = async (browser) => {
  const selector =
    "#section_id .article-item-info div h2 a";
  const titleClassname = "main div div div div div div h1";
  const imgClassname = "main .entry-article div:nth-child(2) div div #block-aawsatv3-content .img-field img";
  const ParagraphClassName = "main .entry-article div:nth-child(2) div div #block-aawsatv3-content .printable-area article div:nth-child(2) p";
  const divClassName = "main .entry-article div:nth-child(2) div div #block-aawsatv3-content .printable-area article div:nth-child(2) div";
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
