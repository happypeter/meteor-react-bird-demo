import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import Hello from '../imports/ui/Hello.jsx';

Meteor.startup(() => {
  render(<Hello />, document.getElementById('app-container'));
});