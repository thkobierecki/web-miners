const links = {
  twitter: "https://twitter.com/web3miners",
  discrod: "https://discord.gg/J8UYY7hju6",
  linkedin: "https://www.linkedin.com/company/web3miners/",
};

const Footer = () => {
  return (
    <footer className="text-black py-2 pb-0">
      <div className="max-w-7xl">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <h3 className="font-bold text-2xl mb-4">Web3Miners</h3>
            <p className="text-gray-400">
              Innovative Web3 Educational Platform
            </p>
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <h3 className="font-bold text-2xl mb-4">Socials</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href={links.twitter}
                  className="text-gray-400 hover:text-gray-200"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={links.discrod}
                  className="text-gray-400 hover:text-gray-200"
                >
                  Discord
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={links.linkedin}
                  className="text-gray-400 hover:text-gray-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="font-bold text-2xl mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Sign up now to get access to our special Web3 Newsletter with
              Educational Web3 Content and more.
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
      </div>
      <div className="w-full flex justify-center">
        <p className="text-gray-400 pb-0 pt-2 text-md">
          Made with ❤️ by{" "}
          <a href="https://www.linkedin.com/in/tkobierecki/" target="_blank">
            THK
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer