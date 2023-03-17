import "../styles/globals.css"

import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { SSRProvider } from "react-aria"

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <SSRProvider>
      <div className="py-4 pl-4">
        <button
          onClick={() => {
            if (router.asPath !== "/") return router.back()
          }}
        >
          {router.asPath.slice(1)}
        </button>
      </div>
      <Component {...pageProps} />
    </SSRProvider>
  )
}
