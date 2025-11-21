import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const posts: React.FC<{ postData: PostProps[] }> = ({ postData }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen space-y-6 p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Posts Page — Browse All Posts 📝
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {postData.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const postData: PostProps[] = await response.json();

  return {
    props: {
      postData,
    },
  };
}

export default posts;
