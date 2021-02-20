import React from "react";

function Home() {
  return (
    <div className="py-9 md:px-9 px-4 flex justify-center">
      <div className="md:grid grid-cols-3 gap-6 w-full">
        {/* Animation layer */}
        <div className="transition duration-250 ease-in-out transform hover:scale-110">
          {/* Design Layer */}
          <div className="mt-2 border bg-gray-900 rounded-md">
            {/* Decoration */}
            <div className="border flex justify-center items-center py-24">
              <i class="fas fa-helmet-battle text-white text-9xl"></i>
            </div>
            {/* Description */}
            <div className="border py-8">
              <h1 className="text-center lg:text-5xl text-3xl text-gray-300">
                Create Player
              </h1>
            </div>
          </div>
        </div>
        {/* Animation layer */}
        <div className="transition duration-250 ease-in-out transform hover:scale-110">
          {/* Design Layer */}
          <div className="mt-2 border bg-gray-900 rounded-md">
            {/* Decoration */}
            <div className="border flex justify-center items-center py-24">
              <i class="fas fa-user-edit text-white text-9xl"></i>
            </div>
            {/* Description */}
            <div className="border py-8">
              <h1 className="text-center lg:text-5xl text-3xl text-gray-300">
                Edit Player
              </h1>
            </div>
          </div>
        </div>
        {/* Animation layer */}
        <div className="transition duration-250 ease-in-out transform hover:scale-110">
          {/* Design Layer */}
          <div className="mt-2 border bg-gray-900 rounded-md">
            {/* Decoration */}
            <div className="border flex justify-center items-center py-24">
              <i class="fas fa-swords text-white text-9xl"></i>
            </div>
            {/* Description */}
            <div className="border py-8">
              <h1 className="text-center lg:text-5xl text-3xl text-gray-300">
                Run Battle
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
