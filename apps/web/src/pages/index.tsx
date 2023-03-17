import Head from "next/head"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          Hello
        </div>
      </main>
    </div>
  )
}
