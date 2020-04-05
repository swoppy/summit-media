import React from 'react';
import { Drawer } from '../drawer';
import { Pager } from '../../pager/pager';

export default {
  title: 'Drawer',
};

const options: string[] = [
  'Candy',
  'Cosmopolitan',
  'Esquire',
  'FemaleNetwok.com',
  'Pep.ph',
  'Preview',
  'Real Living',
  'SmartParenting.com.ph',
  'Spin.ph',
  'Spot.ph',
  'Top Gear',
  'Yummy',
];

export const DrawerStory = () => {
  return (
    <Pager bgColor={'white'}>
      <Drawer label={'Our Brands'} options={options}/>
    </Pager>
  );
};

DrawerStory.story = {
  name: 'Drawer with correct data',
};