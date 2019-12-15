import React from 'react';

import Header from '../header';
import Search from '../search';
import Filter from '../filter';
import ItemList from '../item-list';

import './app.scss';


const App = () => {
    return (
        <div className="app jumbotron">
            <Header />
            <main>
                <div className="d-flex justify-content-between mb-3">
                    <Search />
                    <Filter />
                </div>
                <ItemList />
            </main>
        </div>
    );
};

export default App;