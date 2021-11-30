import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
          {/* Twitter */}
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="hocanms" key="twhandle" />

          {/* Open Graph */}
          <meta property="og:url" content="https://blog.vanhocpham.com" key="ogurl" />
          <meta property="og:image" content="https://media.graphcms.com/output=format:jpg/o9L7r2PDSIqSCKyHiyex?_ga=2.80670417.770890264.1638238914-32708143.1638238914" key="ogimage" />
          <meta property="og:title" content="VHP Blog" key="ogtitle" />
          <meta property="og:description" content="A Javascript Mastery Blog" key="ogdesc" />

          {/* Google */}
          <meta name="description" content="A Javascript Mastery Blog" key="gdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
