import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="H8FMcFH5IG5stu04vR8mL1lfBaLPsaxegHSb6oUu"
      serverUrl="https://fwjkbqvfbptj.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}
export default MyApp;