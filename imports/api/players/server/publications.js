import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages.js';

// Publish all Messages
Meteor.publish('messages.public', function () {
	return Messages.find();
});
