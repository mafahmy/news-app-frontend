import Script from 'next/script';

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy='lazyOnload'
      />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

/*async src="https://www.googletagmanager.com/gtag/js?id=G-65CQSWVWPF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-65CQSWVWPF'); */