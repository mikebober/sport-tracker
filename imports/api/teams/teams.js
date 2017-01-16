import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Teams = new Mongo.Collection('Teams');

// Deny all client-side queries against the Teams collection
// Teams.deny({
// 	insert() { return true; },
// 	update() { return true; },
// 	remove() { return true; }
// });

Teams.schema = new SimpleSchema({
	school: { type: String },
	sport: { type: String },
  	wins: { type: String },
	loses: { type: String },
	player: { type: [Object] }
});

if (Meteor.isServer) {
	Meteor.startup(() => {
		Teams._ensureIndex({ school: 1 });
	});
}
