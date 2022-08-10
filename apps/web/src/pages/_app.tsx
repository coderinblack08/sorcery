import { ChakraProvider } from "@chakra-ui/react";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "~/server/routers/_app";
import type { AppProps } from "next/app";
import { defaultTheme } from "../lib/chakraTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:8080/api/trpc";

    return {
      url,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
