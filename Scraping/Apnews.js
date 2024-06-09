import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "technology",
    link: "https://apnews.com/technology",
  },
  {
    kind: "politics",
    link: "https://apnews.com/politics",
  },
  {
    kind: "sport",
    link: "https://apnews.com/sports",
  },
  {
    kind: "Business",
    link: "https://apnews.com/business",
  },
  {
    kind: "world",
    link: "https://apnews.com/world-news",
  },
  {
    kind: "health",
    link: "https://apnews.com/health",
  },
  // {
  //   kind: "science",
  //   link: "https://apnews.com/science",
  // },
];

export const Apnews = async (browser) => {
  //Ajnet
  const selector =
    ".TwoColumnContainer7030-container div bsp-list-loadmore .PageList-items-item .PagePromo-title a";
  const titleClassname = ".Page-content .Page-headline";
  const imgClassname = ".Page-content .Page-main bsp-story-page .RichTextStoryBody img";
  const ParagraphClassName = ".Page-content .Page-main bsp-story-page .RichTextStoryBody p";
  const divClassName = ".Page-content .Page-main bsp-story-page .RichTextStoryBody div";
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
