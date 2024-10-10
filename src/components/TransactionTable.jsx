import React from 'react';

const TransactionTable = ({ transactions }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">Title</th>
                        <th className="px-6 py-3 text-left">Description</th>
                        <th className="px-6 py-3 text-left">Price</th>
                        <th className="px-6 py-3 text-left">Date of Sale</th>
                        <th className="px-6 py-3 text-left">Sold</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {transactions.length > 0 ? (
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.title}</td>
                                <td className="px-6 py-4">{transaction.description}</td>
                                <td className="px-6 py-4">{transaction.price}</td>
                                <td className="px-6 py-4">{new Date(transaction.dateOfSale).toDateString()}</td>
                                <td className="px-6 py-4">{transaction.sold ? 'Yes' : 'No'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center">No transactions available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
