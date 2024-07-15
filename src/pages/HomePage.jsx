import { useState } from "react";
import Card from "../components/Card";
import Tables from "../components/Tables";

export default function HomePage() {
  const [filter, setFilter] = useState(null);

  return (
    <div className="bg-[#1e2229] h-full w-full max-w-[1920px] p-5 mx-auto flex flex-col gap-5">
      <div className="flex justify-between max-lg:flex-wrap w-full h-[40%] gap-5 p-4">
        <Card typeCard="domain" imageHeader="./icon/earthPlanet.svg"setFilter={setFilter} />
        <Card typeCard="cloud" imageHeader="./icon/earthPlanet.svg" setFilter={setFilter}/>
        <Card typeCard="ip" imageHeader="./icon/cloud.svg" setFilter={setFilter}/>
      </div>
      <div className="w-full h-[60%] p-4">
        <Tables filterMode={filter} />
      </div>
    </div>
  );
}
