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
          {/* <script type="text/javascript" src="https://itexpress.vn/API/files/it.snow.js"></script> */}
          <script async src="//file.hstatic.net/1000033716/file/snow.js" type="text/javascript" />
          <img style={{ position: 'fixed', zIndex: '9999', bottom: '20px', left: '20px' }} src="//file.hstatic.net/1000033716/file/enp-bottom-left.png" />

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
