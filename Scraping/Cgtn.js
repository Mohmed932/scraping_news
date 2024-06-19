import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "technology",
    category: "تكنولوجيا",
    link: "https://www.cgtn.com/sci-tech/new-tech.html",
  },
  {
    kind: "health",
    category: "صحه",
    link: "https://www.cgtn.com/sci-tech/health.html",
  },
  {
    kind: "sport",
    category: "رياضه",
    link: "https://www.cgtn.com/property/football.html",
  },
  // {
  //   kind: "world",
  //   category: "عالم",
  //   link: "https://www.cgtn.com/world/africa",
  // },
  {
    kind: "arab",
    category: "الشرق الأوسط",
    link: "https://www.cgtn.com/world/middle-east",
  },
];

export const Cgtn = async (browser) => {
  const selector =
    ".cg2023_general_more_8_1_container .container-fluid .common-module .cg-content-description .cg-title h3 a";
  const titleClassname = ".new-detailWrap-v3 .js-not-app-live .cg-detail-mainWrap div div h1";
  const imgClassname = ".new-detailWrap-v3 .js-not-app-live .cg-detail-mainWrap #cmsMainContent .cmsImage img";
  const ParagraphClassName = ".new-detailWrap-v3 .js-not-app-live .cg-detail-mainWrap #cmsMainContent .text p";
  const divClassName = ".new-detailWrap-v3 .js-not-app-live .cg-detail-mainWrap #cmsMainContent .text p span";
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
