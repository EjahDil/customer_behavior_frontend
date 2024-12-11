// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';


// interface SpendingItem {
//     product: string;
//     total_spent: number; // Assuming total_spent is a number
//     month?: number; // Optional if not always present
// }

// interface ChartDataResponse {
//     client_id: string;
//     spending: SpendingItem[];
// }

// const chartOptions = {
//   responsive: true,
//   plugins: { legend: { display: false } },
//   scales: {
//     y: {
//       beginAtZero: true,
//       ticks: { callback: (value: any) => `${value} FCFA` },
//     },
//   },
// };

// const ClientSpendingChart: React.FC = () => {

//   const [chartData, setChartData] = useState<ChartDataResponse | null>(null);
//   const clientId = "OP2B5YNT"; // Example clientId, you can dynamically change this as needed

//   // Fetch chart data from the backend
//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/v1/data/spent/${clientId}?start_date=2024-01-01&end_date=2024-09-30&period=monthly`);
//         const data: ChartDataResponse = await response.json();
//         setChartData(data);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       }
//     };

//     fetchChartData();
//   }, [clientId]);

//   return (
//     <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-2">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h2 className="text-lg font-semibold">Transactions for Client {clientId}</h2>
//           <div className="flex items-center">
//             <span className="text-2xl font-bold">64,23%</span>
//             <span className="text-green-500 ml-2 flex items-center">
//               <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//               </svg>
//               12%
//             </span>
//           </div>
//         </div>
//         <div className="flex space-x-2">
//           <select className="border rounded px-2 py-1">
//             <option>January 2024 - September 2024</option>
//           </select>
//           <select className="border rounded px-2 py-1">
//             <option>Month</option>
//           </select>
//         </div>
//       </div>
//       <div className="h-64">
//         {chartData && (
//           <Line
//             data={{
//               labels: chartData.labels,
//               datasets: [
//                 {
//                   data: chartData.datasets[0].data,
//                   borderColor: chartData.datasets[0].borderColor,
//                   backgroundColor: chartData.datasets[0].backgroundColor,
//                   fill: true,
//                   tension: 0.4,
//                 },
//               ],
//             }}
//             options={chartOptions}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ClientSpendingChart;
