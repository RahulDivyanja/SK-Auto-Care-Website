import React from "react";
import categories from "../assets/Categories";
import { useSearchParams, useNavigate } from "react-router-dom";
import brandData from "../assets/brandsData";
import { FiSearch, FiX } from "react-icons/fi";
import { useState } from "react";
const PartsFinder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // URL params
  const initialBrand = searchParams.get("brand") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialQuery = searchParams.get("q") || "";

  // local state
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [categoryParam, setCategoryParam] = useState(initialCategory);
  const [searchValue, setSearchValue] = useState(initialQuery);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const updateFilter = (category) => {
    setCategoryParam(category);
    // keep brand and search value in URL when updating category
    const params = {};
    if (selectedBrand) params.brand = selectedBrand;
    if (category) params.category = category;
    if (searchValue) params.q = searchValue;
    setSearchParams(params);
  };

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setSelectedBrand(brandName);
    navigate(`/brands/${brandName.toLowerCase()}`);
    
  };

  const handleSearch = () => {
    const params = {};
    if (selectedBrand) params.brand = selectedBrand;
    if (categoryParam) params.category = categoryParam;
    if (searchValue) params.q = searchValue;
    setSearchParams(params);
  };

  const handleClear = () => {
    setSearchValue("");
    const params = {};
    if (selectedBrand) params.brand = selectedBrand;
    if (categoryParam) params.category = categoryParam;
    setSearchParams(params);
  };
  return (
    <div className="overflow-auto bg-gray-900 min-h-screen">
      {/* container */}
      <div className="container mx-auto mt-25 px-4 ">
        {/* Search Bar - mobile friendly */}
        <div className="mb-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="w-full md:w-1/4">
              <label htmlFor="brand" className="sr-only">
                Filter by brand
              </label>
              <select
                name="brand"
                id="brand"
                value={selectedBrand}
                onChange={handleBrandChange}
                className="hidden md:block w-full bg-gray-800 text-white text-base md:text-[18px] placeholder-gray-400 px-4 py-2 rounded-[8px] border border-blue-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="">All Brands</option>
                {brandData.map((brand) => (
                  <option
                    key={brand.id}
                    value={brand.name}
                    className="text-base md:text-[20px]"
                  >
                    {brand.name}
                  </option>
                ))}
              </select>
              {/* Mobile: open search & filters modal */}
              <button
                type="button"
                onClick={() => setShowSearchModal(true)}
                className="mt-3 md:mt-0 md:hidden w-full text-left text-sm text-gray-300 bg-gray-800/50 px-3 py-2 rounded flex items-center gap-2"
              >
                <FiSearch className="w-4 h-4" />
                <span>Search & Filters</span>
              </button>
            </div>
            <div className="hidden md:flex-1 md:block w-full">
              <label htmlFor="parts-search" className="sr-only">
                Search parts
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
                  <FiSearch className="w-5 h-5" />
                </span>
                <input
                  id="parts-search"
                  type="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  className="w-full bg-gray-800 text-white text-base md:text-[18px] placeholder-gray-400 pl-11 pr-24 py-2 rounded-[8px] border border-blue-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Search by parts name, brand, or category"
                />
                <div className="absolute inset-y-0 right-3 flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="clear search"
                    onClick={handleClear}
                    className={`text-gray-400 hover:text-white ${
                      searchValue ? "" : "opacity-50 cursor-not-allowed"
                    } hidden md:inline-flex`}
                  >
                    <FiX />
                  </button>
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 text-sm md:text-base"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile: Search & Filters modal (opens when search icon clicked) */}
        {showSearchModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60"
              aria-hidden="true"
              onClick={() => setShowSearchModal(false)}
            ></div>
            <div
              role="dialog"
              aria-modal="true"
              className="relative w-11/12 max-w-md mx-auto bg-gray-900 rounded shadow-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white text-lg font-semibold">
                  Search parts & filters
                </h3>
                <button
                  onClick={() => setShowSearchModal(false)}
                  aria-label="Close search modal"
                  className="text-gray-300 hover:text-white"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label htmlFor="mobile-brand" className="sr-only">
                    Brand
                  </label>
                  <select
                    id="mobile-brand"
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                    }}
                    className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
                  >
                    <option value="">All Brands</option>
                    {brandData.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mobile-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <FiSearch className="w-4 h-4" />
                    </span>
                    <input
                      id="mobile-search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                          setShowSearchModal(false);
                        }
                      }}
                      className="w-full pl-10 pr-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
                      placeholder="Search by parts, brand, or part number"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">Categories</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => {
                          updateFilter(c.name);
                          setShowSearchModal(false);
                        }}
                        className={`flex items-center gap-2 text-sm p-2 rounded text-left ${
                          categoryParam === c.name
                            ? "bg-red-600 text-white"
                            : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                        }`}
                      >
                        <img
                          src={c.image}
                          alt=""
                          className="h-5 w-5 object-contain"
                        />
                        <span className="truncate">{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleClear();
                    }}
                    className="flex-1 bg-gray-700 text-white py-2 rounded"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => {
                      handleSearch();
                      setShowSearchModal(false);
                    }}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 items-start ">
          <div className="col-span-3 order-1 md:order-2 lg:order-2">
            <div>
              <div className=" p-4 rounded-md shadow-md"></div>
            </div>
          </div>
          <aside className="sidebar col-span-1 order-2 md:order-1 lg:order-1 bg-gray-700/15 shadow-md mb-20 md:sticky md:top-20 md:h-[calc(100vh-6rem)] md:overflow-auto md:rounded">
            <h2 className="sidebar-title text-white text-[20px] font-bold p-4 bg-gray-500/50 select-none md:rounded-t">
              Select Your Part Category
            </h2>
            <ul className="space-y-1 p-2 text-white">
              {categories.map((category) => {
                const active = categoryParam === category.name;
                return (
                  <li
                    key={category.name}
                    className={`flex items-center gap-3 p-2 rounded cursor-pointer text-[16px] md:text-[18px] font-semibold ${
                      active ? "bg-red-600 text-white" : "hover:bg-gray-700"
                    }`}
                    onClick={() => updateFilter(category.name)}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-6 w-6 object-contain"
                    />
                    <span className="truncate">{category.name}</span>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PartsFinder;
