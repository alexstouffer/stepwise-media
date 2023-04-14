import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { Breadcrumbs, Button, Switch, Typography } from '@material-tailwind/react';
import * as contentful from 'contentful';

export interface Post {
  title: string;
  body: string;
  preview: string;
  author: string;
  id: string;
  slug: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  sys: {
    id: string;
  };
}

interface BlogProps {
  posts: Post[];
}

interface ClientProps {
  space: string;
  accessToken: string;
}

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const Blog = ({ posts }: BlogProps) => {
  const [displayedPosts, setDisplayedPosts] = useState(9);
  const [loading, setLoading] = useState(false);
  const [infiniteScroll, setInfiniteScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;

      if (infiniteScroll && scrollTop + clientHeight >= scrollHeight - footerHeight) {
        setLoading(true);
        setTimeout(() => {
          if (displayedPosts >= posts.length) {
            setInfiniteScroll(false);
          } else {
            setDisplayedPosts(displayedPosts + 9);
          }
          setLoading(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [displayedPosts, infiniteScroll]);

  const loadMorePosts = () => {
    setDisplayedPosts(displayedPosts + 9);
  };

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
        {posts.slice(0, displayedPosts).map((post) => (
          <Link href={`/blog/${post.slug}`}>
              <div className="post-container bg-white rounded-lg shadow" key={post.id}>
                <img
                  className="h-48 w-full object-cover rounded-t-lg"
                  src={post.featuredImage.fields.file.url}
                  alt={post.featuredImage.fields.title}
                />
                <div className="p-6">
                  <h2 className="text-lg font-medium mb-4">{post.title}</h2>
                  <p className="text-gray-600">{post.preview}</p>
                </div>
              </div>
          </Link>
        ))}
        {!infiniteScroll && displayedPosts < posts.length && (
          <div className="col-span-full flex items-center justify-center my-8">
            <Button color="green" onClick={loadMorePosts} nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              Load More Posts
            </Button>
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
      {displayedPosts >= posts.length && (
        <p className="text-center font-bold text-gray-500 py-8"></p>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const { items } = await client.getEntries<Post>({ content_type: "post" });
  const posts = items.map((item) => {
    return { ...item.fields, id: item.sys.id};
  });
  return { props: { posts }, revalidate: 1 };
};

export default Blog