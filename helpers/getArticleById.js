import { articles } from "../data";

export const getArticleById = (id) => {
  return articles.find((article) => article.id == id);
};
