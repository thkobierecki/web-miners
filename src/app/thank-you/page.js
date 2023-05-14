import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";

const Hero = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl flex flex-wrap items-center justify-center">
        <div className=" mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">
            Thank you for joining
             <span className="text-red-500"> Web3Miners</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-6 px-10">
      <Navigation />
      <main className="flex-1 py-6">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
