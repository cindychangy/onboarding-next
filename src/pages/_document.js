import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="The Next.js EUI Starter uses Next.js, EUI library, and Emotion to help you make prototypes. You just need to know a few basic Next.js concepts and how to use EUI and you're ready to ship it!"
          />
          <meta property="og:title" content="Elastic UI" />
          <meta
            property="og:description"
            content="The Next.js EUI Starter uses Next.js, EUI library, and Emotion to help you make prototypes. You just need to know a few basic Next.js concepts and how to use EUI and you're ready to ship it!"
          />
          <meta
            property="og:image"
            content="https://repository-images.githubusercontent.com/233832487/cddf0ff5-a35f-4380-8912-1c9f365366a8"
          />
          <meta
            property="og:url"
            content="https://elastic.github.io/next-eui-starter/"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="eui-styles" />

          <meta name="eui-styles-utility" />

          <link rel="icon" type="image/png" href="" sizes="16x16" />
        </Head>
        <body className="guideBody">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
