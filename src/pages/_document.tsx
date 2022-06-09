import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
