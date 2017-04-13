import { Meteor } from 'meteor/meteor';
import { Players } from '../players.js';

// Publish all Players
Meteor.publish('players.public', function () {
	return Players.find();
});

Meteor.publish('players.private', function (id) {
	return Players.find(id);
});
