import NextLink from "next/link";
import { FC } from "react";
import { PreviewArticle } from "../components";
import { article, recentArticle } from '../interfaces/articlesInterfaces';

interface Props {
  articles: article[]
}

export const MainBlog: FC<Props> = ({ articles }) => {
  return (
    <main id="main">
      <div className="breadcrumbs">
        <div
          className="page-header d-flex align-items-center"
          style={{
            backgroundImage:
              "url('https://c0.wallpaperflare.com/preview/639/306/330/aerial-background-blog-cafe.jpg')",
          }}
        >
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Blog</h2>
                <p>
                  Te enseñamos sobre optometría, marketing y otras
                  cosas que se nos ocurran...
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li>
                <NextLink href="/">Inicio</NextLink>
              </li>
              <li>Blog</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4 posts-list">
            {articles.map((article) => (
              <PreviewArticle article={article} key={article.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
