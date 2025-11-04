import React, { useState } from "react";

type DashboardSearchProps = {
  onSearch?: (query: string) => void; // 👈 callback to send search text upward
};

const DashboardSearch: React.FC<DashboardSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value); // 👈 notify parent
  };

  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex h-12 flex-1 items-center gap-3 rounded-full bg-white px-5 shadow-sm">
        <span
          aria-hidden
          className="block h-5 w-5"
          style={{
            backgroundImage: "url(/icons/search/search.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
          className="w-full border-none bg-transparent text-[16px] font-normal text-[#2F2F2F] outline-none placeholder:text-[#B0B6BF]"
        />
      </div>

      <button
        type="button"
        className="flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[16px] font-medium text-[#2F2F2F] shadow-sm"
      >
        <span
          aria-hidden
          className="block h-5 w-5"
          style={{
            backgroundImage: "url(/icons/search/filter.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
        Filter
      </button>
    </div>
  );
};

export default DashboardSearch;
