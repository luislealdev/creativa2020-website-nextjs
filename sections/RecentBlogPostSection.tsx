import React from "react";
import { PreviewArticle } from "../components";
import { recentArticles } from '../data/recentPosts/recentArticles';


export const RecentBlogPostSection = () => {
  return (
    <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Post recientes</h2>
          <p>¡Entérate de las últimas noticias!</p>
        </div>
        <div className="row gy-4">
          {recentArticles.map((article) => ( 
            <PreviewArticle article={article} key={article.title} />
          ))}
        </div>
      </div>
    </section>
  );
};


