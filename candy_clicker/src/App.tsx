import React, { useState } from 'react';
import './App.css';
import { FactoryStateProps, FactorySettersProps } from './types';
import CandyCounter from "./CandyCounter";
import ShowFactory from "./ShowFactory";

function App() {
    const [lvl1Active, setLvl1Active] = useState(false);
    const [lvl2Active, setLvl2Active] = useState(false);
    const [lvl3Active, setLvl3Active] = useState(false);
    const [lvl4Active, setLvl4Active] = useState(false);
    const [lvl5Active, setLvl5Active] = useState(false);

    const factoryStates: FactoryStateProps = {
        lvl1Active,
        lvl2Active,
        lvl3Active,
        lvl4Active,
        lvl5Active,
    };

    const factorySetters: FactorySettersProps = {
        setLvl1Active,
        setLvl2Active,
        setLvl3Active,
        setLvl4Active,
        setLvl5Active,
    };

  return (
    <div className="App">
        <CandyCounter {...factoryStates} {...factorySetters} />
        <ShowFactory {...factoryStates} />
    </div>
  );
}

export default App;
