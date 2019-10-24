import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <style global jsx>{`
              @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
              @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

              html {
                font-size: 10px;
              }

              body {
                padding: 0;
                margin: 0;
              }
            `}</style>
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
