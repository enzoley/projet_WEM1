import React from 'react';
import './ShowFactory.css';


interface ShowFactoriesProps {
    lvl1Active: boolean;
    lvl2Active: boolean;
    lvl3Active: boolean;
    lvl4Active: boolean;
    lvl5Active: boolean;
}

const ShowFactories: React.FC<ShowFactoriesProps> = ({ lvl1Active, lvl2Active, lvl3Active, lvl4Active, lvl5Active }) => {
    return (
        <div className="factories-status">
            <h3 className="factory-title">My factories</h3>
            {lvl1Active && (
                <img
                    className="factory-image"
                    src="/img/factory.png"
                    alt="factory"
                />
            )}
            {lvl2Active && (
                <img
                    className="factory-image"
                    src="/img/factory.png"
                    alt="factory"
                />
            )}
            {lvl3Active && (
                <img
                    className="factory-image"
                    src="/img/factory.png"
                    alt="factory"
                />
            )}
            {lvl4Active && (
                <img
                    className="factory-image"
                    src="/img/factory.png"
                    alt="factory"
                />
            )}
            {lvl5Active && (
                <img
                    className="factory-image"
                    src="/img/factory.png"
                    alt="factory"
                />
            )}
        </div>
    );
};

export default ShowFactories;