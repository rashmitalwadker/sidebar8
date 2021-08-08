import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddKeyWords from './Component/AddKeyWords';
import Matches from './Component/Matches';
import ManageSources from './Component/ManageSources';

function App() {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { AddKeyWords }
        /> <
        Route path = '/Matches'
        component = { Matches }
        /> <
        Route path = '/ManageSources'
        component = { ManageSources }
        /> < /
        Switch > <
        /Router> < / >
    );
}
export default App;