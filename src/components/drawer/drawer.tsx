import React from 'react';
import styles from './drawer.module.css';

type OptionProps = {
  animationClass: string;
  data: string[];
};


const Options = ({ animationClass, data }: OptionProps) => {
  return (
    <div className={animationClass}>
      {data.map((item) => {
        return <div key={item} className={styles.optionText}>{item}</div>;
      })}
    </div>
  );
};

type DrawerProps = {
  label: string;
  options: string[];
};

// Drawer has a fixed 3 columns but will automatically add height when text are added
// TODO: Refactor code to add links on options, ideally will just take json object with optionName and linkTo
export const Drawer = ({ label, options }: DrawerProps) => {
  const [optionsVisibility, setOptionsVisibility] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setCounter(counter + 1);
    setOptionsVisibility(optionsVisibility ? false : true);
  }, [optionsVisibility]);

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        {label}
      </div>
      <Options
        animationClass={
          `${optionsVisibility ? styles.showOption :
            !optionsVisibility && counter > 0 ? styles.hideOption :
              styles.defaultHide}`}
        data={options}
      />
    </>
  );
};