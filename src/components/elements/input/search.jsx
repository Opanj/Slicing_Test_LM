import { useState } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Data contoh untuk pencarian
  const items = [
    "Dashboard",
    "Contact",
    "Products",
    "Bank",
    "Credit Scoring",
    "FAQ`s",
    "Pipeline",
    "Marketing Tools",
    "Whatsapp",
  ];

  // Filter data berdasarkan input pengguna
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Input Pencarian */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-loan focus:border-loan"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Hasil Pencarian */}
      <ul className="mt-4 bg-white border border-gray-300 rounded-md shadow-md divide-y divide-gray-200">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-loan hover:text-white cursor-pointer"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;
