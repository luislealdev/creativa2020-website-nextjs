import { PreviewArticle } from "../components";

export const MainBlog = ({articles}) => {
  return (
    <main id="main">
      <div className="breadcrumbs">
        <div
          className="page-header d-flex align-items-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Blog</h2>
                <p>
                  Te enseñamos y enseñamos sobre optometría, marketing y otras
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
                <a href="/">Inicio</a>
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
              <PreviewArticle article={article} key={article.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
