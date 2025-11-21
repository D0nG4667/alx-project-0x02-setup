import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const UsersPage: React.FC<{ initialUsers: UserProps[] }> = ({
  initialUsers,
}) => {
  const [users, setUsers] = useState<UserProps[]>(initialUsers);

  // Client-side refresh after hydration
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: UserProps[] = await res.json();
      setUsers(data); // replaces initial static data with fresh data
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen space-y-6 p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Users Page — Meet Our Users 👥
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default UsersPage;

// Static generation for initial SEO-friendly data
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const initialUsers: UserProps[] = await res.json();

  return {
    props: {
      initialUsers,
    },
    revalidate: 60, // ISR: refresh static data every 60 seconds
  };
}
