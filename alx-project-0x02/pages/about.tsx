import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen space-y-6 p-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">
          About Us — ALX Project 0x02 📖
        </h1>

        <div className="flex space-x-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
