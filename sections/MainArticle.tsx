import { FC } from "react";
import { RecentPostItem } from "../components/RecentPostItem";
import { SideBar } from "../components/SideBar";
import { smallArticle } from '../interfaces/smallArticle';
import md from 'markdown-it';

interface Props {
  frontmatter: smallArticle,
  content: string
}

export const MainArticle: FC<Props> = ({ frontmatter, content }) => {
  return (
    <main id="main">
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-8">
              <article className="blog-details">
                <div className="post-img">
                  <img
                    src={frontmatter.socialImage}
                    alt={frontmatter.title}
                    className="img-fluid"
                  />
                </div>

                <h2 className="title">{frontmatter.title}</h2>

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      //TODO: AGREGAR AUTOR AL ARTICULO
                      <a href="blog-details.html">{ }</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="blog-details.html">
                        <time dateTime="2020-01-01">{frontmatter.date}</time>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">

                <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />

                </div>
              </article>
            </div>
            <SideBar />
          </div>
        </div>
      </section>
    </main>
  );
};
