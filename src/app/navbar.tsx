import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <div className="flex justify-between">
        <div>
          <ul className="flex ml-5">
            <Link href="/">
              <li
                className={`mr-6 ${
                  pathname === "/" ? "text-blue-300" : "text-white "
                } cursor-pointer`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`mr-6 ${
                  pathname === "/about" ? "text-blue-300" : "text-white "
                } cursor-pointer`}
              >
                About
              </li>
            </Link>
            <Link href="/about/profile">
              <li
                className={`mr-6 ${
                  pathname === "/profile" ? "text-blue-300" : "text-white "
                } cursor-pointer`}
              >
                Profile
              </li>
            </Link>
          </ul>
        </div>
        <div className="">
          <button
            onClick={() => router.push("/login")}
            className="bg-white rounded-md px-4 text-sm font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
