import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "politics",
    link: "https://news.sky.com/politics",
  },
  {
    kind: "Business",
    link: "https://news.sky.com/business",
  },
//   {
//     kind: "world",
//     link: "https://news.sky.com/world",
//   },
//   {
//     kind: "health",
//     link: "https://news.sky.com/climate",
//   },
  {
    kind: "palestine",
    link: "https://news.sky.com/israel-hamas-war",
  },
  {
    kind: "technology",
    link: "https://news.sky.com/technology",
  },
];

export const SkyNews = async (browser) => {
  //Ajnet
  const selector =
    "main .page-content [aria-labelledby='page-section-8'] .ui-load-more div article .ui-story-headline a";
  const titleClassname = "main .content .sdc-article-header .sdc-article-header__title span";
  const imgClassname = "main .sdc-site-component-top__media .sdc-article-image__figure img";
  const ParagraphClassName = "main .sdc-article-body p";
  const divClassName = "main .sdc-article-body div";
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