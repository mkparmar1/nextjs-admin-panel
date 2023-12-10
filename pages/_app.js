import "@/styles/globals.css";
import Link from "next/link";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

function Navigation() {
  return (
    <>
      <h3>
        <Link href="/">Home</Link>&nbsp;
        <Link href="/blog">Blog</Link>&nbsp;
        <Link href="/course">Course</Link>
      </h3>
    </>
  );
}
