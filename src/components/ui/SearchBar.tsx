"use client";

import React, { useState } from "react";
import Button from "./Button";

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  buttonText?: string;
}

export default function SearchBar({
  placeholder = "Search, course, topic, creator",
  onSearch,
  className = "",
  buttonText = "Search",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full max-w-xl bg-white rounded-full p-1.5 shadow-lg border border-white/20 transition-all focus-within:ring-2 focus-within:ring-accent ${className}`}
    >
      <div className="pl-4 pr-2 text-gray-400">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm sm:text-base text-secondary placeholder-gray-400 focus:outline-none px-2 py-1"
      />
      <Button
        type="submit"
        variant="accent"
        size="md"
        className="rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap shadow-none"
      >
        {buttonText}
      </Button>
    </form>
  );
}
