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
              "popUpTimer": 3000,
              "imageUrl": null,
              "widgetType": "inline",
              "chatHeight": "80vh",
              "chatWidth": "80vw",
              "placeholder": "What's on your mind?",
              "title": "Live Chat Professional",
              "subtitle": "Typically Responds in 5 Seconds",
              "stackId": "stack_8eaffec0-878d-4ce7-a922-c53592234b83",
              "userId": "08e93b5d-df30-4ac2-9822-4899aa9dfa2e",
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
