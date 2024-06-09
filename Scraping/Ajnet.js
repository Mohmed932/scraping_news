import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "politics",
    link: "https://www.ajnet.me/politics/",
  },
  {
    kind: "technology",
    link: "https://www.ajnet.me/tech/",
  },
  {
    kind: "sport",
    link: "https://www.ajnet.me/tech/",
  },
  {
    kind: "Business",
    link: "https://www.ajnet.me/ebusiness/",
  },
  {
    kind: "palestine",
    link: "https://www.ajnet.me/where/arab/palestine/",
  },
  {
    kind: "world",
    link: "https://www.ajnet.me/news/",
  },
  {
    kind: "culture",
    link: "https://www.ajnet.me/culture/",
  },
];

export const Ajnet = async (browser) => {
  //Ajnet
  const selector =
    "#root div div:nth-child(4) div div article div:nth-child(2) div a";
  const titleClassname = "main header h1";
  const imgClassname = "main .article-featured-image img";
  const ParagraphClassName = "main div:nth-child(4) p";
  const divClassName = "main div:nth-child(4) div";
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
