import React, { Component } from 'react';

import Header from '../header';
import Search from '../search';
import Filter from '../filter';
import ItemList from '../item-list';
import AddItemForm from '../add-item-form';

import './app.scss';


class App extends Component {
    render() {
        return (
            <div className="app jumbotron">
                <Header />
                <main>
                    <div className="d-flex justify-content-between mb-3">
                        <Search />
                        <Filter />
                    </div>
                    <ItemList />
                    <AddItemForm />
                </main>
            </div>
        );
    }
}

export default App;