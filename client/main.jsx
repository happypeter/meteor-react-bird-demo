import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Hello from '../imports/ui/Hello.jsx';

Meteor.startup(() => {
  injectTapEventPlugin();
  render(<Hello />, document.getElementById('app-container'));
});