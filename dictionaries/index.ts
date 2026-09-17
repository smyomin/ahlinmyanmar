import en from "./en.json";
import my from "./my.json";

const dictionaries = {
  en,
  my,
};

export const getDictionary = async (locale: "en" | "my") =>
  dictionaries[locale] ?? dictionaries.en;