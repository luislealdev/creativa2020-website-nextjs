import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import md from 'markdown-it';
// import { MainArticle } from "../../../sections";
// import { Layout } from '../../../layouts/Layout';
// import { GetStaticPaths, GetStaticProps, NextPage } from "next";
// import { smallArticle } from "../../../interfaces";
import { smallArticle } from '../../../interfaces/articlesInterfaces';
import { Layout } from '../../../layouts';
import { MainArticle } from '../../../sections/MainArticle';


interface Props {
  frontmatter: smallArticle,
  content: string
}

export const ArticlePage: NextPage<Props> = ({ frontmatter, content }) => {

  return (
    <Layout title={frontmatter.title} description={frontmatter.metaDesc} favIcon={frontmatter.socialImage} metaTags={frontmatter.tags} author={frontmatter.author}>
      <MainArticle content={content} frontmatter={frontmatter} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const files = fs.readdirSync('./data/posts');
  const paths = files.map((fileName) =>
    fileName.replace('.md', ''),
  );

  return {
    paths: paths.map(title => ({
      params: { title }
    })),
    fallback: false,
  };

}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { title } = params as { title: string };

  const fileName = fs.readFileSync(`./data/posts/${title}.md`, 'utf-8');

  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default ArticlePage;