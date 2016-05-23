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

if(Meteor.isServer) {
  Meteor.publish('userInfo', function(){
    return Meteor.users.find({_id: this.userId}, { fields: {avatar_url: 1, followers: 1, following: 1, public_repos: 1} });
  });

  Meteor.publish("userStatus", function() {
    return Meteor.users.find({ "status.online": true });
  });
}
