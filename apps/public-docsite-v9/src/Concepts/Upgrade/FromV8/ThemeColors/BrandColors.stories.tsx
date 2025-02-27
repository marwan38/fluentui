import * as React from 'react';
import { ColorCompare } from './ColorCompare';
import { brandMap } from './themeMap';

import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    ...shorthands.padding('25px'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  comparisons: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto',
    columnGap: '10px',
    rowGap: '10px',
  },
});

export const BrandColors = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <h2>Brand Colors</h2>
      <div className={styles.comparisons}>
        <h3>v8 Palette</h3>
        <h3>v9 Global</h3>
        {brandMap.map(item => {
          return <ColorCompare key={item.name} {...item} />;
        })}
      </div>
    </div>
  );
};
