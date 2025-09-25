// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" bg-gradient-to-br p-4  bg-black absolute inset-0 top-20 mx-auto max-w-md">
      <div className="max-w-md w-full  rounded-xl shadow-2xl p-8 md:p-10 space-y-8 text-center border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out my-4">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="mx-auto"
          />
        </div>

        <div>
          <h1 className="text-8xl md:text-9xl font-extrabold text-[#fa7028] animate-bounce">
            404
          </h1>
          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-100 leading-tight">
            Page Not Found
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-sm mx-auto">
            Oops! It seems the word you were looking for doesn&apos;t exist in
            our dictionary, or this page has taken a detour.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg text-white bg-[#fa7028] hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 transition ease-in-out duration-200 transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
