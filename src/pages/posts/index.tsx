import { GetStaticProps } from 'next';
import Link from 'next/link';
import styles from './posts.module.scss';
import SEO from '../../components/SEO';

interface IPost {
  id: string;
  title: string;
}

interface IPostsProps {
  posts: IPost[];
}

export default function Posts() {
  return (
    <>
      <SEO title="Posts" />

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="#">
            <a>
              <time>25 de dezembro de 2021</time>
              <strong>Titulo</strong>
              <p>Paragrafo</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

/**Gera as páginas de forma estática no build da aplicacao, ou seja, ao buildar realiza as consultas e monta o html */
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 12, //12 horas
  };
};
