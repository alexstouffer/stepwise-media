import { GetServerSideProps } from 'next'

interface BlogProps {
  posts: {
    title: string
    body: string
  }[]
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}

export default Blog
