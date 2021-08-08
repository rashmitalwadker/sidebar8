import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import AddKeyWords from './Component/AddKeyWords';
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
        exact component = { Home }
        /> <
        Route path = '/AddKeyWords'
        component = { AddKeyWords }
        /> <
        Route path = '/ManageSources'
        component = { ManageSources }
        /> < /
        Switch > <
        /Router> < / >
    );
}
export default App;