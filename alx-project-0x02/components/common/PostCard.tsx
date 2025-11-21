import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
