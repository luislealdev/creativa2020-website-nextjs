import React from "react";
import { Layout } from "../../layouts";

import fs from 'fs';
import matter from 'gray-matter';
import NextLink from "next/link";
import { NextPage } from "next";
import { PreviewArticle } from '../../components/PreviewArticle';
import {article } from "../../interfaces";

interface Props {
  posts: article[]
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout title="Creativa 2020 | Blog | Noticias" description="Encuentra los últimos tips, consejos y novedades sobre ventas." metaTags={['blog','consejos','ventas']}>
      <>
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
          </div>

          <section id="blog" className="blog">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4 posts-list">
                {posts.map((post) => (
                  <PreviewArticle article={post} key={post.title} />
                ))}
              </div>
            </div>
          </section>
        </main>


        );
      </>
    </Layout>
  );
};

export default BlogPage;
export async function getStaticProps() {
  const files = fs.readdirSync('./data/posts');

  const posts = files.map((fileName) => {
    const title = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`./data/posts/${fileName}`, 'utf-8');
    const { data: content } = matter(readFile);

    return {
      title,
      content,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
