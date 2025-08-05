import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-orange-400 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
          >
            Go Back Home
          </Link>
          
          <div className="text-gray-400">
            <p>Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/contact" className="text-orange-400 hover:text-orange-300 transition">
                Contact
              </Link>
              <Link href="/terms" className="text-orange-400 hover:text-orange-300 transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 