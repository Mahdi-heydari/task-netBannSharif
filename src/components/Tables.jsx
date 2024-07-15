/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCardData } from "../services/data";
import { formatDate } from "../services/convertDate";

export default function Tables({ filterMode }) {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardData("assets");
      setTableData(data);
    };

    fetchData();
  }, []);


  let displayedTables;
  switch (filterMode) {
    case "domain":
      displayedTables = tableData;
      break;
    case "ip":
      displayedTables = tableData.filter((item) => item.grade === "F");
      break;
    case "cloud":
      displayedTables = tableData.filter((item) => item.grade === "D");
  }

  console.log("tets :", displayedTables)

  return (
    <section className="w-full h-full relative rounded-lg bg-[#272832] p-3 text-white">
      <header className="w-full h-fit py-2 font-bold text-xl mb-8">
        <p>Assets</p>
      </header>

      <main className="w-full h-full">
        <ul className="w-full h-full overflow-y-auto">
          <li className="w-full h-fit bg-[#737380] flex p-2 mb-5 rounded-md">
            <p className="w-[10%] text-start">Grade</p>
            <p className="w-[30%] text-start">Name</p>
            <p className="w-[30%] text-center">Totla count</p>
            <p className="w-[30%] text-center">Last seen</p>
          </li>

          {/* index for kyes not good !! */}
          {displayedTables?.map((item, index) => (
            <li
              className="w-full h-fit bg-[#414154] flex py-4 px-5 rounded-md mb-5"
              key={index}
            >
              <p className="w-[10%] text-start">{item.grade}</p>
              <p className="w-[30%] text-start">{item.name}</p>
              <p className="w-[30%] text-center">{item.total_vuls}</p>
              <p className="w-[30%] text-center">{formatDate(item.lastSeen)}</p>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
