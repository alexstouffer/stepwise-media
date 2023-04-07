import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import { Breadcrumbs, Button, Switch, Typography } from "@material-tailwind/react";

interface BlogProps {
  posts: {
    title: string
    body: string
  }[]
}

const Blog = ({ posts }: BlogProps) => {
  const [displayedPosts, setDisplayedPosts] = useState(9)
  const [loading, setLoading] = useState(false)
  const [infiniteScroll, setInfiniteScroll] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const footerHeight = document.querySelector('footer')?.offsetHeight || 0
      const navHeight = document.querySelector('nav')?.offsetHeight || 0

      if (infiniteScroll && scrollTop + clientHeight >= scrollHeight - footerHeight) {
        setLoading(true)
        setTimeout(() => {
          setDisplayedPosts(displayedPosts + 9)
          setLoading(false)
        }, 1000)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [displayedPosts, infiniteScroll])

  const loadMorePosts = () => {
    setDisplayedPosts(displayedPosts + 9)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4 pr-6">
        <Breadcrumbs nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          <a href="#" className="text-green-700 hover:text-green-400">
            Blog
          </a>
          <a href="#" className="text-green-700 hover:text-green-400">
            Category
          </a>
          <a href="#" className="text-green-700 hover:text-green-400">Sub-Category</a>
        </Breadcrumbs>
        <div className="flex items-center justify-between">
          <Typography className="p-2">auto-refresh:</Typography>
          <Switch
            defaultChecked={infiniteScroll}
            color="green"
            onChange={(e) => setInfiniteScroll(e.target.checked)}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          />
        </div>
      </div>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
        {posts.slice(0, displayedPosts).map((post, index) => (
          <div className="bg-white rounded-lg shadow" key={post.title}>
            <img
              className="h-48 w-full object-cover rounded-t-lg"
              src="migraine.png"
              alt="migraine"
            />
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          </div>
        ))}
        {!infiniteScroll && displayedPosts < posts.length && (
          <div className="col-span-full flex items-center justify-center my-8">
            <Button color="green" onClick={loadMorePosts} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>Load More Posts</Button>
          </div>
        )}
        {loading && (
          <div className="col-span-full flex items-center justify-center my-8">
            <div className="flex items-center space-x-2">
              <ArrowPathIcon className="animate-spin h-8 w-8 text-gray-500" />
              <p className="text-gray-500">Loading...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}

export default Blog
