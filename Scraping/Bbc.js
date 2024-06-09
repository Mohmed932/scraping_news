import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "technology",
    link: "https://www.bbc.com/innovation/technology",
  },
  {
    kind: "technology",
    link: "https://www.bbc.com/innovation/artificial-intelligence",
  },
  {
    kind: "business",
    link: "https://www.bbc.com/business",
  },
  {
    kind: "world",
    link: "https://www.bbc.com/news/world",
  },
  {
    kind: "science",
    link: "https://www.bbc.com/innovation/science",
  },
];

export const Bbc = async (browser) => {
  //Ajnet
  const selector =
    "[data-testid='alaska-grid'] [data-testid='anchor-inner-wrapper'] a";
  const titleClassname = "article [data-component='headline-block'] h1";
  const imgClassname = "article [data-component='image-block'] img";
  const ParagraphClassName = "article .sc-eb7bd5f6-0";
  const divClassName = "";
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
