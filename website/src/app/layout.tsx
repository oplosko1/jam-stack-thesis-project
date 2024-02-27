import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog using JAM Stack | Oleksandr Ploskovytskyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-accent-1">
          <div className="container px-4 flex justify-between py-3 text-sm">
            <p>
              Implemented by <strong>Oleksandr Ploskovytskyy</strong>
            </p>
            <p>
              Inspired by{" "}
              <a
                href="https://github.com/vercel/next.js/tree/canary/examples/cms-sanity"
                className="underline hover:text-success duration-200 transition-colors"
              >
                Next.js and Sanity Example
              </a>
            </p>
          </div>
        </header>
        {children}
        <footer className="bg-accent-1 border-t border-accent-2">
          <div className="py-28 flex flex-col lg:flex-row items-center container px-4">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              Statically Generated with Next.js.
            </h3>
            <div className="ml-auto">
              <a
                href={`https://github.com/oplosko1/jam-stack-thesis-project`}
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                View Code on GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
