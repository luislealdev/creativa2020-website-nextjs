import NextLink from "next/link";
import { FC } from "react";
import { smallArticle } from "../interfaces";

interface Props {
  article: smallArticle
}

export const RecentPostItem: FC<Props> = ({ article }) => {
  return (
    <div className="post-item mt-3">
      <img src={article.bgImageUrl} alt="" />
      <div>
        <h4>
          <NextLink href={`/blog/article/${article.id}`}>{article.title}</NextLink>
        </h4>
        <time>{article.date}</time>
      </div>
    </div>
  );
};
