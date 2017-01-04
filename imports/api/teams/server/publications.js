import { Meteor } from 'meteor/meteor';
import { Teams } from '../teams.js';

// Publish all Teams
Meteor.publish('teams.public', function () {
	return Teams.find();
});
