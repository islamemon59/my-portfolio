import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-6 md:px-16 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Emon Hossain. All rights reserved.
      </p>
      <p className="mt-1 text-xs text-gray-400">
        Built with ❤️ using React and Tailwind CSS.
      </p>
    </footer>
  );
}
