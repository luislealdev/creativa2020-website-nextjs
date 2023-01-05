import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import { article } from "../interfaces";

interface Props {
  article: article
}


export const PreviewArticle: FC<Props> = ({ article }) => {
  
  const { title, content } = article;
  console.log(content.socialImage);
  
  return (
    <div className="col-xl-4 col-md-6">
      <NextLink href={`/blog/article/${title}`}>
        <article>
          <div className="post-img">
            <img src={content.socialImage} alt="" className="img-fluid"/>
          </div>
          {/* <p className="post-category">{category}</p> */}
          <h2 className="title">{content.title}</h2>
          <div className="d-flex align-items-center">
            <img
              src={content.socialImage}
              alt=""
              className="img-fluid post-author-img flex-shrink-0"
            />
            <div className="post-meta">
              {/* <p className="post-author">{author}</p> */}
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
