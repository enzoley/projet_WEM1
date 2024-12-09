import React, {useCallback, useEffect, useState} from 'react';
import { FactoryStateProps, FactorySettersProps } from '../types';
import './CandyCounter.css';

type CandyCounterProps = FactoryStateProps & FactorySettersProps;

const CandyCounter : React.FC<CandyCounterProps> = ({
                          lvl1Active,
                          setLvl1Active,
                          lvl2Active,
                          setLvl2Active,
                          lvl3Active,
                          setLvl3Active,
                          lvl4Active,
                          setLvl4Active,
                          lvl5Active,
                          setLvl5Active,
                      }) => {
    const [candies, setCandies] = useState(0);
    const [showLvl1Button, setShowLvl1Button] = useState(false);
    const [showLvl2Button, setShowLvl2Button] = useState(false);
    const [showLvl3Button, setShowLvl3Button] = useState(false);
    const [showLvl4Button, setShowLvl4Button] = useState(false);
    const [showLvl5Button, setShowLvl5Button] = useState(false);
    const [nbClic, setNbClic] = useState(1);
    const [showNbClicButton, setShowNbClicButton] = useState(false);


    const incrementCandies = (e : React.MouseEvent<HTMLImageElement>) => {
        setCandies((prevCandies) => prevCandies + nbClic);

        const image = e.currentTarget;
        image.classList.add("bounce");


        setTimeout(() => {
            image.classList.remove("bounce");
        }, 400);
    };

    const moreClics = () => {
        setNbClic(nbClic + 3);
        retireCandies(2000);
    }


    const checkLvl1 = useCallback(() => {
        if (candies >= 150 && !lvl1Active) {
            setShowLvl1Button(true);
        }
    }, [candies, lvl1Active]);

    const checkLvl2 = useCallback(() => {
        if (candies >= 500 && lvl1Active && !lvl2Active) {
            setShowLvl2Button(true);
        }
    }, [candies, lvl1Active, lvl2Active]);

    const checkLvl3 = useCallback(() => {
        if (candies >= 1500 && lvl2Active && !lvl3Active) {
            setShowLvl3Button(true);
        }
    }, [candies, lvl2Active, lvl3Active]);

    const checkLvl4 = useCallback(() => {
        if (candies >= 5000 && lvl3Active && !lvl4Active) {
            setShowLvl4Button(true);
        }
    }, [candies, lvl3Active, lvl4Active]);

    const checkLvl5 = useCallback(() => {
        if (candies >= 10000 && lvl4Active && !lvl5Active) {
            setShowLvl5Button(true);
        }
    }, [candies, lvl4Active, lvl5Active]);

    const checkNbClic = useCallback(() => {
        if (candies >= 2000) {
            setShowNbClicButton(true);
        } else {
            setShowNbClicButton(false);
        }
    }, [candies]);


    const retireCandies = (nbCandies : number) => {
        setCandies((prevCandies) => prevCandies - nbCandies);
    };


    const autoClickLvL1 = () => {
        retireCandies(150);
        setShowLvl1Button(false);
        setLvl1Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 1);
        }, 1000);
    };


    const autoClickLvL2 = () => {
        retireCandies(500);
        setShowLvl2Button(false);
        setLvl2Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 10);
        }, 1000);
    };

    const autoClickLvL3 = () => {
        retireCandies(1500);
        setShowLvl3Button(false);
        setLvl3Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 50);
        }, 1000);
    }

    const autoClickLvL4 = () => {
        retireCandies(5000);
        setShowLvl4Button(false);
        setLvl4Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 100);
        }, 1000);
    }

    const autoClickLvL5 = () => {
        retireCandies(10000);
        setShowLvl5Button(false);
        setLvl5Active(true);
        setInterval(() => {
            setCandies((prevCandies) => prevCandies + 200);
        }, 1000);
        alert("Congratulation, you have now the world monopoly of candies");
    }

    useEffect(() => {
        checkLvl1();
        checkLvl2();
        checkLvl3();
        checkLvl4();
        checkLvl5();
        checkNbClic();
    }, [candies, checkLvl1, checkLvl2, checkLvl3, checkLvl4, checkLvl5, checkNbClic]);

    return (
        <div className="candy-counter">
            <h2 className="candy-title">🍬 Candy Clicker</h2>
            <p className="candy-count">Number of candies: {candies}</p>
                <img
                    src={`${process.env.PUBLIC_URL}/img/bonbon.png`}
                    alt="bonbon"
                    className="candy-image"
                    onClick={incrementCandies}
                />

            <div className="add-on-Candy" id="featuresCandy">
                {showLvl1Button && (
                    <button className="candy-button" onClick={autoClickLvL1}>
                        Small factory
                        (150 candies)
                    </button>
                )}
                {showLvl2Button && (
                    <button className="candy-button" onClick={autoClickLvL2}>
                        Medium factory
                        (500 candies)
                    </button>
                )}
                {showLvl3Button && (
                    <button className="candy-button" onClick={autoClickLvL3}>
                        Large factory
                        (1500 candies)
                    </button>
                )}
                {showLvl4Button && (
                    <button className="candy-button" onClick={autoClickLvL4}>
                        National Institution
                        (5000 candies)
                    </button>
                )}
                {showLvl5Button && (
                    <button className="candy-button" onClick={autoClickLvL5}>
                        World monopoly
                        (10000 candies)
                    </button>
                )}
                {showNbClicButton && (
                    <button className="candy-button" onClick={moreClics}>
                        More employees
                        (2000 candies)
                    </button>
                )}
            </div>
        </div>
    );
};

export default CandyCounter;
