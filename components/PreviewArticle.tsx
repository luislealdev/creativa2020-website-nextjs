import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import { article } from "../interfaces";
import { recentArticle } from '../interfaces/articlesInterfaces';

interface Props {
  article: article
}


export const PreviewArticle: FC<Props> = ({ article }) => {

  const { title, content } = article;

  return (
    <div className="col-xl-4 col-md-6">
      <NextLink href={`/blog/article/${title}`}>
        <article>
          <div className="post-img">
            <img src={content.socialImage} alt={`Imagen del post ${content.title}`} className="img-fluid" />
          </div>
          <p className="post-category">{content.category}</p>
          <h1 className="title">{content.title}</h1>
          <div className="d-flex align-items-center">
            <img
              src={content.authorImg}
              alt=""
              className="img-fluid post-author-img flex-shrink-0"
            />
            <div className="post-meta">
              <p className="post-author">{content.author}</p>
              <p className="post-date">
                <time dateTime="2022-01-01">{content.date}</time>
              </p>
            </div>
          </div>
        </article>
      </NextLink>
    </div>
  );
};
