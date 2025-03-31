import { Link } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-lg text-gray-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="text-yellow-400 underline hover:text-yellow-300 transition"
      >
        Go back to the homepage
      </Link>
    </div>
  );
}
