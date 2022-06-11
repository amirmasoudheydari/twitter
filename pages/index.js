import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex m-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}

        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
