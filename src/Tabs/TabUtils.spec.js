/* eslint-env mocha */
import React from 'react';
import {assert} from 'chai';
import Tab from './Tab';
import {calculateTabWidthAndInkbarPosition} from './TabUtils';

describe('Tab Utils', () => {
  describe('calculateTabWidthAndInkbarPosition', () => {
    it('returns pixel values when every single Tab has labelWidth prop', () => {
      const testTabs = [
        <Tab labelWidth={200} />,
        <Tab labelWidth={300} />,
        <Tab labelWidth={400} />,
        <Tab labelWidth={500} />,
      ];
      const selectedIndex = 1;
      const defaultWidth = 100 / testTabs.length;
      const tabLabelData = calculateTabWidthAndInkbarPosition(testTabs,
        selectedIndex, defaultWidth);

      assert.strictEqual(tabLabelData.inkbarPosition, '200px', 'returns a string ' +
      'with the selected item\'s ink bar position in pixels');
      assert.strictEqual(tabLabelData.width, '300px', 'returns a string with ' +
      'the selected item\'s width in pixels');
    });

    it('returns percentage values when not a single Tab has labelWidth prop', () => {
      const testTabs = [
        <Tab />,
        <Tab />,
        <Tab />,
        <Tab />,
      ];
      const selectedIndex = 1;
      const defaultWidth = 100 / testTabs.length;
      const tabLabelData = calculateTabWidthAndInkbarPosition(testTabs,
        selectedIndex, defaultWidth);

      assert.strictEqual(tabLabelData.inkbarPosition, '25%', 'returns a string ' +
      'with the selected item\'s ink bar position expressed as a percentage of ' +
      'the container\s width');
      assert.strictEqual(tabLabelData.width, '25%', 'returns a string of ' +
      'selected item\'s width expressed as a percentage of the container\'s width');
    });

    it('returns undefined when some Tab components have labelWidth prop but others don\'t', () => {
      const testTabs = [
        <Tab labelWidth={100} />,
        <Tab labelWidth={200} />,
        <Tab />,
        <Tab />,
      ];
      const selectedIndex = 0;
      const defaultWidth = 100 / testTabs.length;
      const tabLabelData = calculateTabWidthAndInkbarPosition(testTabs,
        selectedIndex, defaultWidth);

      assert.isUndefined(tabLabelData, 'returns undefined');
    });
  });
});
