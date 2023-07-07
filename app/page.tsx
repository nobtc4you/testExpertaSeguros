import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página de prueba del plugin</title>
      </Head>

      <div id="magicform-root" style={{ zIndex: 9999, position: 'relative' }}></div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, o, f, js, fjs) {
              w["Simple-Widget"] = o;
              w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
              js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
              js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, "script", "w1", 'https://magicform-widget-assets.s3.us-west-2.amazonaws.com/widget.js'));
            
            w1("init", {
              "popUpTimer": 1000,
              "imageUrl": null,
              "widgetType": "inline",
              "chatHeight": "80vh",
              "chatWidth": "80vw",
              "placeholder": "What's on your mind?",
              "title": "Live Chat Professional",
              "subtitle": "Typically Responds in 5 Seconds",
              "stackId": "stack_d15e7b71-2dc7-4ede-aade-f4e66b748f96",
              "userId": "bc5160a5-ddee-4994-a715-c428e6438204",
              "colors": {
                "main": "#000000",
                "userMessageBubble": "#000000"
              }
            });
          `,
        }}
      ></script>
    </div>
  );
}
