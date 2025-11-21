import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ALX Project 0x02</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/home" className="hover:underline">
          /home
        </Link>
        <Link href="/about" className="hover:underline">
          /about
        </Link>
      </nav>
    </header>
  );
};

export default Header;
