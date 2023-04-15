import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Post } from '.';
import * as contentful from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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

  console.log("image object", post.featuredImage);
  return (
  <div className="container mx-auto px-4 py-8">
    <img
      className="w-full h-auto mb-8 rounded shadow"
      src={post.featuredImage.fields.file.url}
      alt={post.featuredImage.fields.title}
    />
    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
    <p className="text-gray-500">
        By {post.author[0].fields.name} on {new Date(post.publishDate).toLocaleDateString()}
    </p>
    <div className="prose max-w-none">{documentToReactComponents(post.body)}</div>
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

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries?fields.slug=${params.slug}&content_type=post&select=fields,sys&access_token=${accessToken}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.items.length) {
    return { notFound: true };
  }

  const rawPost = data.items[0].fields;
  const assetId = rawPost.featuredImage.sys.id;
  const assetUrl = `https://cdn.contentful.com/spaces/${spaceId}/assets/${assetId}?access_token=${accessToken}`;
  const assetResponse = await fetch(assetUrl);
  const assetData = await assetResponse.json();

  const post: Post = {
    ...rawPost,
    featuredImage: {
      fields: {
        file: {
          url: assetData.fields.file.url,
        },
        title: assetData.fields.title,
      },
    },
  };

  return {
    props: { post },
    revalidate: 1,
  };
};
  
export default PostPage;
