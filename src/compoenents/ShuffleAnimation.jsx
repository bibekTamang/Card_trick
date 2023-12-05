import React from "react";

export default function ShuffleAnimation() {
  return (
    <div className="h-5/6 w-full bg-white absolute top-0 bottom-0 m-auto bg-opacity-80 flex flex-col items-center justify-center">
      <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      <p className="pt-6 text-xl font-medium text-gray-700">Shuffling</p>
    </div>
  );
}
