import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "sport",
    link: "https://www.alhurra.com/sport",
  },
  {
    kind: "Business",
    link: "https://www.alhurra.com/business",
  },
  {
    kind: "palestine",
    link: "https://www.alhurra.com/israel-hamas-war-0",
  },
  {
    kind: "world",
    link: "https://www.alhurra.com/arabic-and-international",
  },
  {
    kind: "america",
    link: "https://www.alhurra.com/usa",
  },
];

export const Alhurra = async (browser) => {
  const selector = "main article div div div div div div:nth-child(2) .horizontal-list .top-story a";
  const titleClassname =
  ".article__main .page-header__title span";
  const imgClassname = ".article__main .grid div div div div a";
  const ParagraphClassName = ".article__main .grid div div .article__content div div p";
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
