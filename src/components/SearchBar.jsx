import { useState } from "react";
import { products } from "../data/product";
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-2 top-2 text-gray-500"
        >
          ✖
        </button>
      )}

      {query && (
        <ul className="absolute bg-white border w-full mt-1 max-h-60 overflow-y-auto z-10">
          {filtered.length ? (
            filtered.map((p) => (
              <li key={p.id} className="p-2 hover:bg-gray-100">
                <Link to={`/product/${p.id}`}>{p.title}</Link>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-400">No product found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
