import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="relative">
        <Main />
        <div id="app-modal" className={"absolute"}></div>
        <NextScript />
      </body>
    </Html>
  );
}
