// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

// const App = () => {
//   const [month, setMonth] = useState('3'); // Default to March
//   const [transactions, setTransactions] = useState([]);
//   const [statistics, setStatistics] = useState({});
//   const [barChartData, setBarChartData] = useState([]);
//   const [pieChartData, setPieChartData] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, [month, search]);

//   const fetchData = async () => {
//     try {
//       const transactionRes = await axios.get(`/api/transactions?month=${month}&search=${search}`);
//       const statsRes = await axios.get(`/api/statistics?month=${month}`);
//       const barRes = await axios.get(`/api/bar-chart?month=${month}`);
//       const pieRes = await axios.get(`/api/pie-chart?month=${month}`);

//       setTransactions(transactionRes.data);
//       setStatistics(statsRes.data);
//       setBarChartData(barRes.data);
//       setPieChartData(pieRes.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Transaction Dashboard</h1>

//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center space-x-4">
//             <label className="font-medium text-lg">Select Month:</label>
//             <select
//               value={month}
//               onChange={e => setMonth(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
//             >
//               <option value="1">January</option>
//               <option value="2">February</option>
//               <option value="3">March</option>
//               <option value="4">April</option>
//               <option value="5">May</option>
//               <option value="6">June</option>
//               <option value="7">July</option>
//               <option value="8">August</option>
//               <option value="9">September</option>
//               <option value="10">October</option>
//               <option value="11">November</option>
//               <option value="12">December</option>
//             </select>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Search transactions"
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left">Title</th>
//                 <th className="px-6 py-3 text-left">Description</th>
//                 <th className="px-6 py-3 text-left">Price</th>
//                 <th className="px-6 py-3 text-left">Date of Sale</th>
//                 <th className="px-6 py-3 text-left">Sold</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {transactions.length > 0 ? (
//                 transactions.map(transaction => (
//                   <tr key={transaction.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">{transaction.title}</td>
//                     <td className="px-6 py-4">{transaction.description}</td>
//                     <td className="px-6 py-4">{transaction.price}</td>
//                     <td className="px-6 py-4">{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
//                     <td className="px-6 py-4">{transaction.sold ? 'Yes' : 'No'}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="px-6 py-4 text-center">No transactions available.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Statistics Section */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-green-200 p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-2 text-green-800">Total Sale Amount</h2>
//             <p className="text-2xl text-green-900">${statistics.totalSaleAmount || 0}</p>
//           </div>
//           <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-2 text-blue-800">Total Sold Items</h2>
//             <p className="text-2xl text-blue-900">{statistics.totalSold || 0}</p>
//           </div>
//           <div className="bg-red-200 p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-2 text-red-800">Total Not Sold Items</h2>
//             <p className="text-2xl text-red-900">{statistics.totalNotSold || 0}</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Price Distribution</h3>
//             <BarChart width={500} height={300} data={barChartData}>
//               <XAxis dataKey="range" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="count" fill="#8884d8" />
//             </BarChart>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Category Distribution</h3>
//             <PieChart width={400} height={400}>
//               <Pie
//                 data={pieChartData}
//                 dataKey="count"
//                 nameKey="_id"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={120}
//                 fill="#82ca9d"
//                 label
//               >
//                 {pieChartData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658'][index % 3]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import Charts from './components/Charts';
import MonthSelector from './components/MonthSelector';
import SearchBar from './components/SearchBar';

const App = () => {
  const [month, setMonth] = useState('3'); // Default to March
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, [month, search]);

  const fetchData = async () => {
    try {
      // Updated API calls to include http:// and correct routes
      const transactionRes = await axios.get(`http://localhost:5000/api/transactions?month=${month}&search=${search}`);
      const statsRes = await axios.get(`http://localhost:5000/api/statistics?month=${month}`);
      const barRes = await axios.get(`http://localhost:5000/api/bar-chart?month=${month}`);
      const pieRes = await axios.get(`http://localhost:5000/api/pie-chart?month=${month}`);

      // Set state for fetched data
      setTransactions(transactionRes.data);
      setStatistics(statsRes.data);
      setBarChartData(barRes.data);
      setPieChartData(pieRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Transaction Dashboard</h1>

        <div className="flex justify-between items-center mb-6">
          <MonthSelector month={month} setMonth={setMonth} />
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <TransactionTable transactions={transactions} />

        <Statistics statistics={statistics} />

        <Charts barChartData={barChartData} pieChartData={pieChartData} />
      </div>
    </div>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TransactionTable from './components/TransactionTable';
// import Statistics from './components/Statistics';
// import Charts from './components/Charts';
// import MonthSelector from './components/MonthSelector';
// import SearchBar from './components/SearchBar';

// const App = () => {
//   const [month, setMonth] = useState('3'); // Default to March
//   const [transactions, setTransactions] = useState([]);
//   const [statistics, setStatistics] = useState({});
//   const [barChartData, setBarChartData] = useState([]);
//   const [pieChartData, setPieChartData] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     // Set dummy data instead of fetching from an API
//     const dummyTransactions = [
//       { id: 1, title: 'Product 1', description: 'Description 1', price: 100, dateOfSale: '2023-03-10', sold: true },
//       { id: 2, title: 'Product 2', description: 'Description 2', price: 150, dateOfSale: '2023-03-15', sold: false },
//       { id: 3, title: 'Product 3', description: 'Description 3', price: 200, dateOfSale: '2023-03-20', sold: true },
//     ];

//     const dummyStatistics = {
//       totalSaleAmount: 450,
//       totalSold: 2,
//       totalNotSold: 1,
//     };

//     const dummyBarChartData = [
//       { range: '0-100', count: 5 },
//       { range: '100-200', count: 10 },
//       { range: '200-300', count: 15 },
//     ];

//     const dummyPieChartData = [
//       { _id: 'Category 1', count: 5 },
//       { _id: 'Category 2', count: 10 },
//       { _id: 'Category 3', count: 15 },
//     ];

//     setTransactions(dummyTransactions);
//     setStatistics(dummyStatistics);
//     setBarChartData(dummyBarChartData);
//     setPieChartData(dummyPieChartData);
//   }, [month, search]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Transaction Dashboard</h1>

//         <div className="flex justify-between items-center mb-6">
//           <MonthSelector month={month} setMonth={setMonth} />
//           <SearchBar search={search} setSearch={setSearch} />
//         </div>

//         <TransactionTable transactions={transactions} />

//         <Statistics statistics={statistics} />

//         <Charts barChartData={barChartData} pieChartData={pieChartData} />
//       </div>
//     </div>
//   );
// };

// export default App;