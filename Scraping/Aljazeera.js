import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "politics",
    link: "https://www.aljazeera.com/tag/politics",
  },
  {
    kind: "sport",
    link: "https://www.aljazeera.com/sports/",
  },
  // {
  //   kind: "technology",
  //   link: "https://www.aljazeera.com/tag/technology",
  // },
  {
    kind: "business",
    link: "https://www.aljazeera.com/economy/",
  },
  // {
  //   kind: "health",
  //   link: "https://www.aljazeera.com/tag/health/",
  // },
  // {
  //   kind: "palestine",
  //   link: "https://www.aljazeera.com/tag/israel-palestine-conflict/",
  // },
  {
    kind: "arab",
    link: "https://www.aljazeera.com/middle-east/",
  },
  // {
  //   kind: "palestine",
  //   link: "https://www.aljazeera.com/tag/gaza/",
  // },
];

export const Aljazeera = async (browser) => {
  //Ajnet
  const selector =
    "#news-feed-container article .gc__header-wrap h3 a";
  const titleClassname = ".article-header h1";
  const imgClassname = ".article-featured-image img";
  const ParagraphClassName = "#main-content-area .wysiwyg p";
  const divClassName = "#main-content-area .wysiwyg div";
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
