import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "politics",
    link: "https://edition.cnn.com/politics",
  },
  {
    kind: "sport",
    link: "https://edition.cnn.com/sport",
  },
  {
    kind: "Business",
    link: "https://edition.cnn.com/business",
  },
  // {
  //   kind: "world",
  //   link: "https://edition.cnn.com/world",
  // },
  {
    kind: "health",
    link: "https://edition.cnn.com/health",
  },
  {
    kind: "science",
    link: "https://edition.cnn.com/science",
  },
];

export const Edition = async (browser) => {
  //Ajnet
  const selector =
    ".container__link";
  const titleClassname = ".headline__wrapper .headline__text";
  const imgClassname = ".article__main .image__container img";
  const ParagraphClassName = ".article__main .article__content-container .article__content p";
  const divClassName = ".article__main .article__content-container .article__content div";
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
