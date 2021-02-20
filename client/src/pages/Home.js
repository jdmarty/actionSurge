import React from "react";
import HomeCard from "../components/HomeCard"

function Home() {
  return (
    <div className="py-9 md:px-9 sm:px-36 px-4 flex justify-center">
      {/* Grid Wrapper */}
      <div className="md:grid grid-cols-3 gap-10 w-full">
        <HomeCard title="Create Player" icon="fas fa-helmet-battle" route="/create-player"/>
        <HomeCard title="Edit Player" icon="fas fa-user-edit" route="/edit-player"/>
        <HomeCard title="Run Battle" icon="fas fa-swords" route="/battle"/>
      </div>
    </div>
  );
}

export default Home;
