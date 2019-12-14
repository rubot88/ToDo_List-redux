import React from 'react';

import './search.scss';

const Search = () => {
    return (
        <div className="search">
            <input
                className="form-control"
                type="text"
                placeholder="type to search" />
        </div>
    );
};

export default Search;