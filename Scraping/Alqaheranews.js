import { MainScraping } from "./MainScraping.js";

const links = [
  {
    kind: "politics",
    category: "سياسه",
    link: "https://alqaheranews.net/tag/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9",
  },
  {
    kind: "technology",
    category: "تكنولوجيا",
    link: "https://alqaheranews.net/tag/%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7",
  },
  {
    kind: "sport",
    category: "رياضه",
    link: "https://alqaheranews.net/tag/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9",
  },
  {
    kind: "Business",
    category: "اقتصاد",
    link: "https://alqaheranews.net/tag/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF",
  },
  {
    kind: "palestine",
    category: "فلسطين",
    link: "https://alqaheranews.net/tag/%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86",
  },
  {
    kind: "world",
    category: "عالم",
    link: "https://alqaheranews.net/tag/%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85",
  },
  {
    kind: "arab",
    category: "الشرق الأوسط",
    link: "https://alqaheranews.net/tag/%D8%A7%D9%84%D8%B4%D8%B1%D9%82%20%D8%A7%D9%84%D8%A7%D9%88%D8%B3%D8%B7",
  },
  {
    kind: "world",
    category: "عالم",
    link: "https://alqaheranews.net/tag/%D8%A5%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7",
  },
  {
    kind: "world",
    category: "عالم",
    link: "https://alqaheranews.net/tag/%D8%A7%D9%85%D8%B1%D9%8A%D9%83%D8%A7",
  },
];

export const Alqaheranews = async (browser) => {
  const selector =
    "main .pb-50 .container .col-lg-8 div div article div div div div a";
  const titleClassname = "main div div div div div div h1";
  const imgClassname = "main div div div div div figure img";
  const ParagraphClassName = "main div div div div div article div div p";
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
