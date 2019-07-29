import React from 'react';
import MonstersList from './components/MonsterList/MonsterList'
import Header from './components/Header/Header'
import './App.scss'

function App() {
    return (
        <div className='App'>
            <Header/>
            <MonstersList/>
        </div>
    )
}

export default App;
