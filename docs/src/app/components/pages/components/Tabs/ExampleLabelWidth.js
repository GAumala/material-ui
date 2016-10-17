import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

/**
* Each tab label specifies its own fixed width regardless of the container's
* width and is aligned to the left.
* This prop must be set on every tab to work properly.
*/
const TabsExampleLabelWidth = () => (
  <Tabs >
    <Tab labelWidth={100} label="100 width" />
    <Tab labelWidth={250} label="250 width" />
    <Tab labelWidth={400} label="400 width" />
  </Tabs>
);

export default TabsExampleLabelWidth;
