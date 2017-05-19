import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render () {
    return (
     <html>
       <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="MyThoughtBin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          <title>App</title>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
       </Head>
       <body>
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}