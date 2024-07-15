/* eslint-disable react/prop-types */
import { BarChart } from "@mui/x-charts";

export default function Chart({data}) {

    if(!data) return;

  return (
    <div className="relative overflow-hidden w-16 h-14 flex items-center justify-center">

    <BarChart
      leftAxis={null}
      bottomAxis={null}
      series={[{ data, color: '#4a8bcb' }]}
      width={500}
      height={500}
      borderRadius={50}
      />
      </div>
  );
}
