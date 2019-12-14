import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';


const App = () => {
    return (
        <div className="app">
            <header>
                <h1>Todo List</h1>
                <div>
                    <span> 3 more to do,</span>
                    <span>0 done</span>
                </div>
            </header>
        </div>
    );
};

export default App;