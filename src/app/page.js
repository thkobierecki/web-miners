import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";


const Hero = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl flex flex-wrap items-center justify-between">
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <h1 className="text-6xl font-bold mb-4">
            Welcome to <br /> <span className="text-red-500">Web3Miners</span>
          </h1>
          <p className="text-gray-600 text-xl mb-6 md:w-300">
            Innovative Web3 Educational Platform that will help millions of
            users onboard to Web3 world and beyond.
          </p>
          <p className="text-gray-600 text-xl mb-6 md:w-300">
            Start your Web3 Journey now and get your{" "}
            <span className="text-red-500">Web3 Cheat Sheet.</span>
          </p>
          <p className="text-gray-600 text-xl mb-6 md:w-300">
            You can find there <span className="text-red-500">50</span> most
            common terms used in Web3.
          </p>
        </div>
        <div className="w-full md:w-2/5">
          <p className="text-gray-600 mb-4 text-2xl w-11/12">
            Sign up now to receive{" "}
            <span className="text-red-500">Web3 Cheat Sheet</span> straight to
            your email!
          </p>
          <form className="flex items-center">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-l-lg py-3 px-4 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 rounded-r-lg text-white font-bold py-3 px-6 ml-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Subscribe
            </button>
          </form>
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
