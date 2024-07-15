/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCardData } from "../services/data";
import Chart from "./Chart";

export default function Card({typeCard, imageHeader, setFilter}) {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardData(typeCard);
      setCardData(data);
    };

    fetchData();
  }, []);


  const handelClick = (typeCard) => {
    alert(`just ${typeCard === "domain" ? "all" : typeCard === "ip" ? "F" : typeCard === "cloud" ? "D"  : ""} table `)
    setFilter(typeCard);
  }


  return (
    <div className="flex md:flex-1  flex-col flex-wrap p-3 text-white  bg-[#363b43] rounded-2xl">
      <div className="w-full  flex  justify-between">
        <div className={`flex flex-col text-center items-center gap-4 w-fit rounded-xl justify-center max-md:gap-1 ${typeCard === "domain" ? "bg-orange-500" : typeCard === "cloud" ? "bg-[#565392]" :typeCard === "ip" ? "bg-[#d1b003]" :""}`}>
          <span className="px-3 pt-2 max-md:px-1 max-md:pt-1">
            <img src={imageHeader} className="w-14" />
          </span>
          <span className="bg-[#eee9e9] text-black w-full rounded-b-xl h-full font-bold">
            {cardData?.total}
          </span>
        </div>
        <span className="text-3xl cursor-pointer" onClick={() => handelClick(typeCard)}>&#8599;</span>
      </div>

      <p className="my-6 border-b font-bold">{typeCard}</p>

      <div className="flex justify-between text-xs font-bold pb-7 border-b">
        <div className=" flex gap-3 items-center">
          <div className="flex flex-col gap-1 items-center">
            <span>Live</span>
            <span>{cardData?.total_live}</span>
          </div>
          {/* data */}
          <Chart  data={cardData?.live}/>
        </div>

        <div className="flex gap-3 items-center ">
          <div className="flex flex-col gap-1 items-center">
            <span>Monitored</span>
            <span>{cardData?.total_monitored}</span>
          </div>
          {/* data */}
          <Chart  data={cardData?.monitored}/>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs font-bold mt-6">
        <div className="flex gap-2">
          <div className="bg-[#327794] rounded-xl p-2 max-md:hidden">
            <img src="/icon/globe.svg" className="w-8" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span>IPS</span>
            <span>{cardData?.ips}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-[#327794] rounded-xl p-2 max-md:hidden">
            <img src="/icon/conflict.svg" className="w-9 " alt="" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <span>Ports</span>
            <span>{cardData?.ports}</span>
          </div>
        </div>

        <div className="flex gap-2">
        <div className="bg-[#327794] rounded-xl p-2 max-md:hidden">
          <img src="/icon/bug.svg" className="w-8" alt="" />
        </div>  
          <div className="flex flex-col justify-center items-center gap-2">
            <span>vuls</span>
            <span>{cardData?.vulns}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
