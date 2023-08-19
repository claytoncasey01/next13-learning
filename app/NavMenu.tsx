import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "@/components/Button";

export default function NavMenu() {
  return (
    <nav className="bg-gray-900 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/next.svg"
            width={216}
            height={30}
            alt="Nextspace logo"
            className="h-8 mr-3"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Nextspace
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                aria-current="page"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                aria-current="page"
              >
                Users
              </Link>
            </li>

            <li>
              <SignInButton />
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
