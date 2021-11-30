import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCategories, getCategoryPost, findCategoryBySlug } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts, category }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="hocanms" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={category.slug} key="ogurl" />
        <meta property="og:image" content={category.featuredImage?.url} key="ogimage" />
        <meta property="og:title" content={category.name} key="ogtitle" />
        <meta property="og:description" content={category.slug} key="ogdesc" />

        {/* Google */}
        <title>{category.name}</title>
        <meta name="description" content={category.slug} key="gdesc" />
      </Head>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const category = await findCategoryBySlug(params.slug);

  return {
    props: { posts, category },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
