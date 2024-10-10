import React from 'react';

const Statistics = ({ statistics }) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2 text-green-800">Total Sale Amount</h2>
                <p className="text-2xl text-green-900">${statistics.totalSaleAmount || 0}</p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2 text-blue-800">Total Sold Items</h2>
                <p className="text-2xl text-blue-900">{statistics.totalSold || 0}</p>
            </div>
            <div className="bg-red-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2 text-red-800">Total Not Sold Items</h2>
                <p className="text-2xl text-red-900">{statistics.totalNotSold || 0}</p>
            </div>
        </div>
    );
};

export default Statistics;
