// Google Analytics 4 — G-D6B18DTZBY
export function Analytics() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-D6B18DTZBY"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D6B18DTZBY');
          `,
        }}
      />
    </>
  );
}
