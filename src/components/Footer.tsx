import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 m-4 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-extrabold whitespace-nowrap text-gray-900 dark:text-white tracking-tight">
              Tour With Me
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/stories" className="hover:underline me-4 md:me-6">Stories</Link>
            </li>
            <li>
              <Link href="/guides" className="hover:underline me-4 md:me-6">Travel Guides</Link>
            </li>
            <li>
              <Link href="/admin" className="hover:underline me-4 md:me-6">Admin</Link>
            </li>
            <li>
              <Link href="/itinerary" className="hover:underline">My Itinerary</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2026 <Link href="/" className="hover:underline">Tour With Me™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
