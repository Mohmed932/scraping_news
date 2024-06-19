import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "politics",
    category: "سياسه",
    link: "https://www.almasryalyoum.com/section/index/78",
  },
  {
    kind: "technology",
    category: "تكنولوجيا",
    link: "https://www.almasryalyoum.com/section/index/9",
  },
  {
    kind: "health",
    category: "صحه",
    link: "https://www.almasryalyoum.com/section/index/142",
  },
  {
    kind: "sport",
    category: "رياضه",
    link: "https://www.almasryalyoum.com/section/index/8",
  },
  {
    kind: "world",
    category: "عالم",
    link: "https://www.almasryalyoum.com/section/index/2",
  },
  {
    kind: "culture",
    category: "ثقافه وفن",
    link: "https://www.almasryalyoum.com/section/index/10",
  }
];

export const Almasryalyoum = async (browser) => {
  const selector =
    ".large-8 .sport_wrap ul li a";
  const titleClassname = ".large-8 .article h1";
  const imgClassname = ".large-8 .article .articleimg img";
  const ParagraphClassName = ".large-8 .article #NewsStory p";
  const divClassName = ".large-8 .article #NewsStory div";
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
