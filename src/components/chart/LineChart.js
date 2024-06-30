
import { BarChart } from "@mui/x-charts";

export default function LineChart() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['0', '.','.' ] }]}
      series={[{ data: [4, 3, ] }, { data: [1, 6, ] }, { data: [2, 5, ] }]}
      width={150}
      height={120}
      
    />
  );
}