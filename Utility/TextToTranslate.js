import translate from "translate-google";

export const textToTranslate = async (text) => {
  try {
    const res = await translate(text, { to: "ar" });
    return res;
  } catch (err) {
    return text;
  }
};
