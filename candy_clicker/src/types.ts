export interface FactoryStateProps {
    lvl1Active: boolean;
    lvl2Active: boolean;
    lvl3Active: boolean;
    lvl4Active: boolean;
    lvl5Active: boolean;
}

export interface FactorySettersProps {
    setLvl1Active: React.Dispatch<React.SetStateAction<boolean>>;
    setLvl2Active: React.Dispatch<React.SetStateAction<boolean>>;
    setLvl3Active: React.Dispatch<React.SetStateAction<boolean>>;
    setLvl4Active: React.Dispatch<React.SetStateAction<boolean>>;
    setLvl5Active: React.Dispatch<React.SetStateAction<boolean>>;
}
