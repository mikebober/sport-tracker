import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Players = new Mongo.Collection('Players');

// Deny all client-side queries against the Players collection
Players.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

Players.schema = new SimpleSchema({
	firstName: { type: String },
	lastName: { type: String },
  school: { type: String },
	sport: { type: [String] }
});

if (Meteor.isServer) {
	Meteor.startup(() => {
		Players._ensureIndex({ school: 1 });
	});
}
