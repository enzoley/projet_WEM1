import React, { useEffect, useState } from 'react';
import './CandyCounter.css';

const CandyCounter = () => {
    const [candies, setCandies] = useState(0);
    const [lvl1Active, setLvl1Active] = useState(false);
    const [showLvl1Button, setShowLvl1Button] = useState(false);
    const [lvl2Active, setLvl2Active] = useState(false);
    const [showLvl2Button, setShowLvl2Button] = useState(false);
    const [lvl3Active, setLvl3Active] = useState(false);
    const [showLvl3Button, setShowLvl3Button] = useState(false);
    const [lvl4Active, setLvl4Active] = useState(false);
    const [showLvl4Button, setShowLvl4Button] = useState(false);
    const [lvl5Active, setLvl5Active] = useState(false);
    const [showLvl5Button, setShowLvl5Button] = useState(false);


    const incrementCandies = (e : React.MouseEvent<HTMLImageElement>) => {
        setCandies((prevCandies) => prevCandies + 1);

        const image = e.currentTarget;
        image.classList.add("bounce");


        setTimeout(() => {
            image.classList.remove("bounce");
        }, 400);
    };


    const checkLvl1 = () => {
        if (candies >= 10 && !lvl1Active) {
            setShowLvl1Button(true);
        }
    };


    const checkLvl2 = () => {
        if (candies >= 15 && lvl1Active && !lvl2Active) {
            setShowLvl2Button(true);
        }
    };

    const checkLvl3 = () => {
        if (candies >= 30 && lvl2Active && !lvl3Active) {
            setShowLvl3Button(true);
        }
    }

    const checkLvl4 = () => {
        if (candies >= 50 && lvl3Active && !lvl4Active) {
            setShowLvl4Button(true);
        }
    }

    const checkLvl5 = () => {
        if (candies >= 100 && lvl4Active && !lvl5Active) {
            setShowLvl5Button(true);
        }
    }


    const retireCandies = (nbCandies : number) => {
        setCandies((prevCandies) => prevCandies - nbCandies);
    };


    const autoClickLvL1 = () => {
        retireCandies(10);
        setShowLvl1Button(false);
        setLvl1Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 1);
        }, 1000);
    };


    const autoClickLvL2 = () => {
        retireCandies(15);
        setShowLvl2Button(false);
        setLvl2Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 10);
        }, 1000);
    };

    const autoClickLvL3 = () => {
        retireCandies(30);
        setShowLvl3Button(false);
        setLvl3Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 50);
        }, 1000);
    }

    const autoClickLvL4 = () => {
        retireCandies(50);
        setShowLvl4Button(false);
        setLvl4Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 100);
        }, 1000);
    }

    const autoClickLvL5 = () => {
        retireCandies(100);
        setShowLvl5Button(false);
        setLvl5Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 200);
        }, 1000);
    }

    useEffect(() => {
        checkLvl1();
        checkLvl2();
        checkLvl3();
        checkLvl4();
        checkLvl5();
    }, [candies, lvl1Active, lvl2Active, lvl3Active, lvl4Active, lvl5Active]);

    return (
        <div className="candy-counter">
            <h2 className="candy-title">🍬 Candy Clicker</h2>
            <p className="candy-count">Number of candies: {candies}</p>
                <img
                    src={`${process.env.PUBLIC_URL}/bonbon.png`}
                    alt="bonbon"
                    className="candy-image"
                    onClick={incrementCandies}
                />

            <div className="add-on-Candy" id="featuresCandy">
                {showLvl1Button && (
                    <button className="candy-button" onClick={autoClickLvL1}>
                        AutoClick Lvl 1
                    </button>
                )}
                {showLvl2Button && (
                    <button className="candy-button" onClick={autoClickLvL2}>
                        AutoClick Lvl 2
                    </button>
                )}
                {showLvl3Button && (
                    <button className="candy-button" onClick={autoClickLvL3}>
                        AutoClick Lvl 3
                    </button>
                )}
                {showLvl4Button && (
                    <button className="candy-button" onClick={autoClickLvL4}>
                        AutoClick Lvl 4
                    </button>
                )}
                {showLvl5Button && (
                    <button className="candy-button" onClick={autoClickLvL5}>
                        AutoClick Lvl 5
                    </button>
                )}
            </div>
        </div>
    );
};

export default CandyCounter;
