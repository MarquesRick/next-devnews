import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface IComment {
  id: string;
  body: string;
}

interface ICommentsProps {
  comments: IComment[];
}

export default function Post({ comments }: ICommentsProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Post{router.query.id}</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
      <p>{router.asPath}</p>
    </div>
  );
}

/**Gera as páginas de forma estática no build da aplicacao, ou seja, ao buildar realiza as consultas e monta o html */
export const getStaticProps: GetStaticProps<ICommentsProps> = async context => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
  const comments = await response.json();

  return {
    props: {
      comments,
    },
    revalidate: 10, //In seconds
  };
};
