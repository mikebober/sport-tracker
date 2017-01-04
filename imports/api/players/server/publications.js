import { Meteor } from 'meteor/meteor';
import { Players } from '../players.js';

// Publish all Players
Meteor.publish('players.public', function () {
	return Players.find();
});
