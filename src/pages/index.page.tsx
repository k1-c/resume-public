import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shun Kimura | Resume</title>
        <meta name="description" content="Web開発者・木村駿のレジェメです。" />
        <meta property="og:title" content="Shun Kimura | Resume" />
        <meta
          property="og:description"
          content="Web開発者・木村駿のレジェメです。"
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="" />
        <meta property="og:site_name" content="" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section>
          <h1>職務経歴書</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
