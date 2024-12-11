import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp, Calendar } from 'lucide-react';
import axios from 'axios'; 

const formatDate = (date: any) => {
  if (!date) return '';
  return date.toISOString().split('T')[0];
};

const ClientSpendingFrequencyChart = () => {
  const [chartData, setChartData] = useState([]);
  const [startDate, setStartDate] = useState(new Date(2024, 0, 1));
  const [endDate, setEndDate] = useState(new Date(2024, 8, 30));
  const [interval, setInterval] = useState('monthly');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchChartData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/data/client/0K4IXIP1/purchase_frequency', {
        params: {
          start_date: formatDate(startDate),
          end_date: formatDate(endDate),
          interval: interval,
        }
      });
      
      const formattedData = response.data.labels.map((label: any, index: any) => ({
        date: label,
        amount: response.data.datasets[0].data[index],
        frequency: response.data.datasets[1].data[index]
      }));
      
      setChartData(formattedData);
    } catch (err) {
      console.error('Error fetching chart data:', err);
      setError('Failed to fetch data. Please check the date range and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [startDate, endDate, interval]);

  const handleDateChange = (event: any, setter: any) => {
    const newDate = new Date(event.target.value);
    if (!isNaN(newDate.getTime())) {
      setter(newDate);
    }
  };

  // Calculate percentage change
  const calculatePercentageChange = () => {
    if (chartData.length < 2) return 0;
    const firstValue = chartData[0].amount;
    const lastValue = chartData[chartData.length - 1].amount;
    return ((lastValue - firstValue) / firstValue * 100).toFixed(2);
  };

  const percentageChange = calculatePercentageChange();

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-2">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Client Spending & Purchase Frequency</h2>
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                {chartData.length > 0 ? `${chartData[chartData.length - 1].amount.toLocaleString()} FCFA` : 'N/A'}
              </span>
              <span className={`ml-2 flex items-center ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                <ArrowUp className={`w-4 h-4 ${percentageChange < 0 ? 'transform rotate-180' : ''}`} />
                {Math.abs(percentageChange)}%
              </span>
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
                    className="mt-2 px-2 py-1 bg-blue-500 text-white rounded"
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
      <div className="px-4 py-6 sm:p-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value.toLocaleString()} FCFA`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}`} />
                <Tooltip formatter={(value: any) =>  `${value.toLocaleString()} FCFA`} />
                <Line yAxisId="left" type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="frequency" stroke="#f6823b" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientSpendingFrequencyChart;
