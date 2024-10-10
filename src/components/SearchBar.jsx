import React from 'react';

const SearchBar = ({ search, setSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search transactions"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
            />
        </div>
    );
};

export default SearchBar;
