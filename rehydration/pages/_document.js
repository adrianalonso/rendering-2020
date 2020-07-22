import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Container, Menu } from 'semantic-ui-react';
import Footer from '../components/Footer';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <body>
          <Menu className="fixed">
            <Container className="App">
              <Menu.Item name="header" active={false}>
                Rehydration
              </Menu.Item>
            </Container>
          </Menu>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
