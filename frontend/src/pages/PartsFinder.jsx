import React from "react";

const PartsFinder = () => {
  return (
    <div className="overflow-auto bg-gray-900 min-h-screen">
      <div className="container mx-auto mt-20 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 items-start ">
          <aside className='cols-span-1 bg-gray-800 h-full '>
            <h2 className="text-white text-3xl font-bold mb-4">Parts Finder</h2>
          </aside>
          <div className="col-span-3 ">
            <input
              type="text"
              className="flex-3 w-full bg-gray-800 text-white text-[20px] placeholder-gray-400 px-4 py-2  border border-white focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Search by parts name, brand, or category"
            />
            <div>
              <div className="bg-white p-4 rounded-md shadow-md"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsFinder;
