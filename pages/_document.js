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

        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://file.hstatic.net/1000033716/file/snow.js" type="text/javascript" />
          <img style={{ position: 'fixed', zIndex: '9999', bottom: '20px', left: '20px' }} src="https://file.hstatic.net/1000033716/file/enp-bottom-left.png" alt="merry-xmas" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
