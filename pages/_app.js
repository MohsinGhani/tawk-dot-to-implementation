import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://embed.tawk.to/632a6f8d54f06e12d895e97f/1gdes7h4n"
        strategy="lazyOnload"
      />
    </>
  );
}

export default MyApp;
