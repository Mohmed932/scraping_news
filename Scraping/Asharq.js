import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "politics",
    link: "https://asharq.com/politics/",
  },
  {
    kind: "technology",
    link: "https://asharq.com/technology/",
  },
  {
    kind: "health",
    link: "https://asharq.com/health/",
  },
  {
    kind: "culture",
    link: "https://asharq.com/culture/",
  },
  {
    kind: "culture",
    link: "https://asharq.com/art/",
  },
];

export const Asharq = async (browser) => {
  const selector =
    ".page-container [data-id='hero-card'] a";
  const titleClassname = "main div div div div div div h1";
  const imgClassname = "main div div div article figure img";
  const ParagraphClassName = "main div div div article .article-body-content div p";
  const divClassName = "main div div div article .article-body-content div div";
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
