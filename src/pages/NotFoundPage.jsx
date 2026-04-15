import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold tracking-widest text-blue-500 drop-shadow-lg">404</h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl font-semibold">Oops! Page not found</h2>

        {/* Description */}
        <p className="mt-3 text-gray-400">The page you're looking for doesn’t exist or has been moved.</p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/" className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all shadow-md">
            Go Home
          </Link>

          <button onClick={() => window.history.back()} className="px-6 py-2 rounded-xl border border-gray-600 hover:bg-gray-800 transition-all">
            Go Back
          </button>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
