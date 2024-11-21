// app/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to Google Fonts for Raleway and Clash Display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;700&family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
