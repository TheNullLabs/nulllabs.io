import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10 gap-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-gray-900 via-gray-900 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Null-Labs.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={240}
              height={240}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[530px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-gray-400 before:to-transparent before:-z-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[780px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-400 after:via-blue-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-pink-600 before:dark:to-blue-900 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#002aa9] after:dark:opacity-60 before:lg:h-[360px]">
        <p>
          <span className="text-9xl font-bold">Clouds Evolved</span>
        </p>
      </div>

      <div className="mb-32 grid  text-center lg:mb-0 lg:grid-cols-2 lg:text-left gap-6">
        <a
          href="https://nullcloud.io"
          className="group p-6 rounded-lg border border-blue-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-blue-400`}>
            Projects{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-blue-400`}>
            Find cutting edge projects being desinged and built by Null Labs.
          </p>
        </a>

        <a
          href="https://www.youtube.com/@nulllabs"
          className="group p-6 rounded-lg border border-blue-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-blue-400`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-blue-400`}>
            Learn from our extensive video guides.
          </p>
        </a>

      </div>
    </main>
  )
}
