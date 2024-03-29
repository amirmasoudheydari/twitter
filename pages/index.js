import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { API } from "./api/hello";

export default function Home({posts, users}) {
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex m-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets  newsResult={posts.articles} users={users} />

        {/* Modal */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const {data:posts} = await API.getNews()
  const {data:users} = await API.getUsers()
  
  return {
    props: {
      posts,
      users: users.results
    },
  };
}
