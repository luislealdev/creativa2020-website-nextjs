import NextLink from "next/link";
import { FC } from "react";
import { article } from '../interfaces';

interface Props {
  article: article
}

export const RecentPostItem: FC<Props> = ({ article }) => {
  return (
    <div className="post-item mt-3">
      <img src={article.content.socialImage} alt={article.title} />
      <div>
        <h4>
          <NextLink href={`/blog/article/${article.title}`}>{article.title}</NextLink>
        </h4>
        <time>{article.content.date}</time>
      </div>
    </div>
  );
};
