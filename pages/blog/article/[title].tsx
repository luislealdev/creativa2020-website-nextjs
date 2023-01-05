import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import md from 'markdown-it';
// import { MainArticle } from "../../../sections";
// import { Layout } from '../../../layouts/Layout';
// import { GetStaticPaths, GetStaticProps, NextPage } from "next";
// import { smallArticle } from "../../../interfaces";
import { smallArticle } from '../../../interfaces/smallArticle';
import { Layout } from '../../../layouts';
import { MainArticle } from '../../../sections/MainArticle';


interface Props {
  frontmatter: smallArticle,
  content: string
}

export const ArticlePage: NextPage<Props> = ({ frontmatter, content }) => {

  return (
    <Layout>
      <MainArticle content={content} frontmatter={frontmatter} />
    </Layout>
  );
};

// const ArticlePage: NextPage<Props> = () => {
//   return (
//     <div className='prose mx-auto'>
//       <h1>{frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
//     </div>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {

//   const { data } = await pokeApi.get<pokemonsList>('/pokemon?limit=151&offset=0');

//   const pokemonsNames: string[] = data.results.map(pokemon => pokemon.name);

//   return {
//     paths: pokemonsNames.map(name => ({
//       params: { name }
//     })),
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {

//   const { articleName } = params as { articleName: string }
//   const article = await getPokemonInfo(articleName);

//   return {
//     props: {
//       article
//     }
//   }
// }

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

  console.log({ frontmatter, content });

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default ArticlePage;