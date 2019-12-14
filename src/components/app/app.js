import React from 'react';

import Header from '../header';
import Search from '../search';
import Filter from '../filter';

import './app.scss';


const App = () => {
    return (
        <div className="app jumbotron">
            <Header />
            <main>
                <div className="d-flex justify-content-between">
                    <Search />
                    <Filter />
                </div>
            </main>
        </div>
    );
};

export default App;