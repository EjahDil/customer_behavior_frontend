import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ArrowUp, Calendar } from 'lucide-react';

const formatDate = (date: any) => {
  if (!date) return '';
  return date.toISOString().split('T')[0];
};

const ClientSpendingChart = ({ clientId }: { clientId: string }) => {
  const [chartData, setChartData] = useState([]);
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), 0, 1));
  const [endDate, setEndDate] = useState(new Date());
  const [interval, setInterval] = useState('monthly');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchChartData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/data/client/${clientId}/purchase_frequency?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}&interval=${interval}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      setChartData(data.labels.map((label: any, index: any) => ({
        date: label,
        amount: data.datasets[0].data[index],
        frequency: data.datasets[1].data[index]
      })));
    } catch (err) {
      console.error('Error fetching chart data:', err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [clientId, startDate, endDate, interval]);

  const handleDateChange = (event: any, setter: any) => {
    const newDate = new Date(event.target.value);
    if (!isNaN(newDate.getTime())) {
      setter(newDate);
    }
  };

  const calculatePercentageChange = (dataKey: any) => {
    if (chartData.length < 2) return 0;
    const firstValue = chartData[0][dataKey];
    const lastValue = chartData[chartData.length - 1][dataKey];
    return ((lastValue - firstValue) / firstValue * 100).toFixed(2);
  };

  const amountPercentageChange = calculatePercentageChange('amount');
  const frequencyPercentageChange = calculatePercentageChange('frequency');

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-2">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Client Spending and Purchase Frequency</h2>
            <div className="flex items-center space-x-4">
              <div>
                <span className="text-sm font-medium text-gray-500">Total Amount</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">
                    {chartData.length > 0 ? `${chartData[chartData.length - 1].amount.toLocaleString()} FCFA` : 'N/A'}
                  </span>
                  <span className={`ml-2 flex items-center ${amountPercentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <ArrowUp className={`w-4 h-4 ${amountPercentageChange < 0 ? 'transform rotate-180' : ''}`} />
                    {Math.abs(amountPercentageChange)}%
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Purchase Frequency</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">
                    {chartData.length > 0 ? chartData[chartData.length - 1].frequency : 'N/A'}
                  </span>
                  <span className={`ml-2 flex items-center ${frequencyPercentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <ArrowUp className={`w-4 h-4 ${frequencyPercentageChange < 0 ? 'transform rotate-180' : ''}`} />
                    {Math.abs(frequencyPercentageChange)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                className="px-4 py-2 border rounded-md flex items-center"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {`${formatDate(startDate)} - ${formatDate(endDate)}`}
              </button>
              {isDatePickerOpen && (
                <div className="absolute top-full mt-2 p-2 bg-white border rounded-md shadow-lg z-10">
                  <div className="flex flex-col space-y-2">
                    <label>
                      Start Date:
                      <input
                        type="date"
                        value={formatDate(startDate)}
                        onChange={(e) => handleDateChange(e, setStartDate)}
                        className="ml-2 p-1 border rounded"
                      />
                    </label>
                    <label>
                      End Date:
                      <input
                        type="date"
                        value={formatDate(endDate)}
                        onChange={(e) => handleDateChange(e, setEndDate)}
                        className="ml-2 p-1 border rounded"
                      />
                    </label>
                  </div>
                  <button
                    onClick={() => setIsDatePickerOpen(false)}
                    className="mt-2 px-2 py-1 bg-cbt-primary text-white rounded"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
            <select
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" tickFormatter={(value) => `${value.toLocaleString()} FCFA`} />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="amount" name="Amount Spent" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="frequency" name="Purchase Frequency" stroke="#f6823b" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientSpendingChart;

// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
// import { ArrowUp, Calendar } from 'lucide-react';

// const formatDate = (date) => {
//   if (!date) return '';
//   return date.toISOString().split('T')[0];
// };

// const ClientSpendingFrequencyChart = ({ clientId }) => {
//   const [chartData, setChartData] = useState([]);
//   const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), 0, 1));
//   const [endDate, setEndDate] = useState(new Date());
//   const [interval, setInterval] = useState('monthly');
//   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchChartData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`/data/client/${clientId}/purchase_frequency?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}&interval=${interval}`);
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
      
//       setChartData(data.labels.map((label, index) => ({
//         date: label,
//         amount: data.datasets[0].data[index],
//         frequency: data.datasets[1].data[index]
//       })));
//     } catch (err) {
//       console.error('Error fetching chart data:', err);
//       setError('Failed to fetch data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchChartData();
//   }, [clientId, startDate, endDate, interval]);

//   const handleDateChange = (event, setter) => {
//     const newDate = new Date(event.target.value);
//     if (!isNaN(newDate.getTime())) {
//       setter(newDate);
//     }
//   };

//   const calculatePercentageChange = (dataKey) => {
//     if (chartData.length < 2) return 0;
//     const firstValue = chartData[0][dataKey];
//     const lastValue = chartData[chartData.length - 1][dataKey];
//     return ((lastValue - firstValue) / firstValue * 100).toFixed(2);
//   };

//   const amountPercentageChange = calculatePercentageChange('amount');
//   const frequencyPercentageChange = calculatePercentageChange('frequency');

//   return (
//     <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-2">
//       <div className="px-4 py-5 sm:px-6">
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-lg font-semibold">Client Spending and Purchase Frequency</h2>
//             <div className="flex items-center space-x-4">
//               <div>
//                 <span className="text-sm font-medium text-gray-500">Total Amount</span>
//                 <div className="flex items-center">
//                   <span className="text-2xl font-bold">
//                     {chartData.length > 0 ? `${chartData[chartData.length - 1].amount.toLocaleString()} FCFA` : 'N/A'}
//                   </span>
//                   <span className={`ml-2 flex items-center ${amountPercentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//                     <ArrowUp className={`w-4 h-4 ${amountPercentageChange < 0 ? 'transform rotate-180' : ''}`} />
//                     {Math.abs(amountPercentageChange)}%
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <span className="text-sm font-medium text-gray-500">Purchase Frequency</span>
//                 <div className="flex items-center">
//                   <span className="text-2xl font-bold">
//                     {chartData.length > 0 ? chartData[chartData.length - 1].frequency : 'N/A'}
//                   </span>
//                   <span className={`ml-2 flex items-center ${frequencyPercentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//                     <ArrowUp className={`w-4 h-4 ${frequencyPercentageChange < 0 ? 'transform rotate-180' : ''}`} />
//                     {Math.abs(frequencyPercentageChange)}%
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex space-x-2">
//             <div className="relative">
//               <button
//                 onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
//                 className="px-4 py-2 border rounded-md flex items-center"
//               >
//                 <Calendar className="mr-2 h-4 w-4" />
//                 {`${formatDate(startDate)} - ${formatDate(endDate)}`}
//               </button>
//               {isDatePickerOpen && (
//                 <div className="absolute top-full mt-2 p-2 bg-white border rounded-md shadow-lg z-10">
//                   <div className="flex flex-col space-y-2">
//                     <label>
//                       Start Date:
//                       <input
//                         type="date"
//                         value={formatDate(startDate)}
//                         onChange={(e) => handleDateChange(e, setStartDate)}
//                         className="ml-2 p-1 border rounded"
//                       />
//                     </label>
//                     <label>
//                       End Date:
//                       <input
//                         type="date"
//                         value={formatDate(endDate)}
//                         onChange={(e) => handleDateChange(e, setEndDate)}
//                         className="ml-2 p-1 border rounded"
//                       />
//                     </label>
//                   </div>
//                   <button
//                     onClick={() => setIsDatePickerOpen(false)}
//                     className="mt-2 px-2 py-1 bg-blue-500 text-white rounded"
//                   >
//                     Close
//                   </button>
//                 </div>
//               )}
//             </div>
//             <select
//               value={interval}
//               onChange={(e) => setInterval(e.target.value)}
//               className="px-4 py-2 border rounded-md"
//             >
//               <option value="daily">Daily</option>
//               <option value="weekly">Weekly</option>
//               <option value="monthly">Monthly</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="px-4 py-5 sm:p-6">
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {!loading && !error && (
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis yAxisId="left" tickFormatter={(value) => `${value.toLocaleString()} FCFA`} />
//                 <YAxis yAxisId="right" orientation="right" />
//                 <Tooltip />
//                 <Legend />
//                 <Line 
//                   yAxisId="left" 
//                   type="monotone" 
//                   dataKey="amount" 
//                   name="Total Amount Spent" 
//                   stroke="rgb(59, 130, 246)" 
//                   strokeWidth={2} 
//                   dot={false}
//                   fillOpacity={0.1}
//                   fill="rgba(59, 130, 246, 0.1)"
//                 />
//                 <Line 
//                   yAxisId="right" 
//                   type="monotone" 
//                   dataKey="frequency" 
//                   name="Purchase Frequency" 
//                   stroke="rgb(246, 130, 59)" 
//                   strokeWidth={2} 
//                   dot={false}
//                   fillOpacity={0.1}
//                   fill="rgba(246, 130, 59, 0.1)"
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ClientSpendingFrequencyChart;