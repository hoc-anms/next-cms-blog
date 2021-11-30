import Head from 'next/head';
import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="hocanms" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content="https://blog.vanhocpham.com" key="ogurl" />
        <meta property="og:image" content="https://media.graphcms.com/output=format:jpg/o9L7r2PDSIqSCKyHiyex?_ga=2.80670417.770890264.1638238914-32708143.1638238914" key="ogimage" />
        <meta property="og:title" content="VHP Blog" key="ogtitle" />
        <meta property="og:description" content="A Javascript Mastery Blog" key="ogdesc" />

        {/* Google */}
        <title>VHP Blog</title>
        <meta name="description" content="A Javascript Mastery Blog" key="gdesc" />
      </Head>
      <div className="container mx-auto px-10 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

