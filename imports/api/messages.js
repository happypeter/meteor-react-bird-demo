import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
  'insert/message': function (username, avatar_url, message) {
    var message = {
      owner: username,
      avatar_url: avatar_url,
      content: message,
      createdAt: new Date()
    };

    Messages.insert(message);
  }
});

if (Meteor.isServer) {
  Meteor.publish('messages', function() {
    return Messages.find();
  });
}
