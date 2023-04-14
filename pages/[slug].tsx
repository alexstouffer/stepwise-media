import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Post } from './blog';
import * as contentful from 'contentful';

interface PostPageProps {
  post: Post;
}

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const PostPage = ({ post }: PostPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img
        src={post.featuredImage.fields.file.url}
        alt={post.featuredImage.fields.title}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await client.getEntries<Post>({ content_type: "post" });
  const paths = items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  if (!params || typeof params.slug !== 'string') {
    return { notFound: true };
  }

  const { items } = await client.getEntries<Post>({
    content_type: "post",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return { notFound: true };
  }

  return {
    props: { post: items[0].fields },
    revalidate: 1,
  };
};

export default PostPage;
