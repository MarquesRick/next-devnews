import { useEffect, useState } from 'react';

interface IPost {
  id: string;
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/posts').then(response => {
      response.json().then(data => {
        setPosts(data);
      });
    });
  }, []);
  /*Client Side Render*/
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
