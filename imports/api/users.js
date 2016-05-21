import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'update/user': function(user) {
    let info = {
      avatar_url: user.avatar_url,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos
    };

    Meteor.users.update(this.userId, {$set: info});
  }
});
