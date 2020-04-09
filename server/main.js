import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';

// ^^ creates the MongoDB collection and sets up the plumbing to get the data to the client


Meteor.startup(() => {
  // code to run on server at startup

});

// if (Meteor.isServer) {
// Meteor.startup(function () {
// // code to run on server at startup
// process.env.MOBILE_DDP_URL = "http://1.1.1.1:3000 1";
// process.env.MOBILE_ROOT_URL = "http://1.1.1.1:3000 1";
// });
// }
