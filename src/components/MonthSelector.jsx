import React from 'react';

const MonthSelector = ({ month, setMonth }) => {
    return (
        <div className="flex items-center space-x-4">
            <label className="font-medium text-lg">Select Month:</label>
            <select
                value={month}
                onChange={e => setMonth(e.target.value)}
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
            >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
                {/* Add more months */}
            </select>
        </div>
    );
};

export default MonthSelector;
