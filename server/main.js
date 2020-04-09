// import { Meteor } from 'meteor/meteor';
// import '../imports/api/tasks.js';
// import '../imports/ui/AccountsUIWrapper.js'
//
// // ^^ creates the MongoDB collection and sets up the plumbing to get the data to the client
//
//
// Meteor.startup(() => {
//   // code to run on server at startup
//
// });
//
// // if (Meteor.isServer) {
// // Meteor.startup(function () {
// // // code to run on server at startup
// // process.env.MOBILE_DDP_URL = "http://1.1.1.1:3000 1";
// // process.env.MOBILE_ROOT_URL = "http://1.1.1.1:3000 1";
// // });
// // }


import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
