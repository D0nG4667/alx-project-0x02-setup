import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen space-y-6 p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6">
          Welcome to the Home Page 🏠
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Card
            title="Dynamic Listings"
            content="This card demonstrates reusable props for rendering property listings."
          />
          <Card
            title="Reusable Components"
            content="Cards can be reused across pages with different content and styling."
          />
          <Card
            title="Type Safety"
            content="Props are enforced with TypeScript interfaces for reliability."
          />
        </div>
      </main>
    </>
  );
}
