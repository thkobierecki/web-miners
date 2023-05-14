import Link from "next/link";

const links = {
  twitter: "https://twitter.com/web3miners",
  discrod: "https://discord.gg/J8UYY7hju6",
  linkedin: "https://www.linkedin.com/company/web3miners/",
};

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <span className="font-bold text-xl tracking-tight text-black">
            Web3Miners
          </span>
        </Link>
      </div>
      <div className="lg:flex lg:items-center lg:w-auto">
        <div>
          <Link href={links.twitter}>
            <span className="inline-block text-md px-4 py-2 leading-none text-gray-600 hover:text-gray-400 mt-4 lg:mt-0 mr-4">
              Twitter
            </span>
          </Link>
          <Link href={links.discrod}>
            <span className="inline-block text-md px-4 py-2 leading-none text-gray-600 hover:text-gray-400 mt-4 lg:mt-0">
              Discord
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;