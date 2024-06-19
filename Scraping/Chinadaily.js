import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "technology",
    category: "تكنولوجيا",
    link: "https://www.chinadaily.com.cn/business/tech",
  },
  {
    kind: "world",
    category: "عالم",
    link: "https://www.chinadaily.com.cn/world/asia_pacific",
  },
  // {
  //   kind: "world",
  //   category: "عالم",
  //   link: "https://www.chinadaily.com.cn/world/america",
  // },
  // {
  //   kind: "world",
  //   category: "عالم",
  //   link: "https://www.chinadaily.com.cn/world/europe",
  // },
  // {
  //   kind: "world",
  //   category: "عالم",
  //   link: "https://www.chinadaily.com.cn/world/africa",
  // },
  {
    kind: "arab",
    category: "الشرق الأوسط",
    link: "https://www.chinadaily.com.cn/world/middle_east",
  },
];

export const Chinadaily = async (browser) => {
  const selector =
    "#left .tw3_01_2 .tw3_01_2_t h4 a";
  // const selector =
  //   "#left div:nth-of-type(3) span:nth-of-type(2) h4 a";
  const titleClassname = ".main_art h1";
  const imgClassname = "#Content figure img";
  const ParagraphClassName = "#Content p";
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
