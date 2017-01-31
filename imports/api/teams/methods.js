import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Teams } from './teams.js';

// This method takes content and a username as parameters and inserts them
// into the Teams collection
export const addTeam = new ValidatedMethod({
	name: 'team.add',

	// Validate the data that was passed by checking if they are the correct types
	validate: new SimpleSchema({
		school: { type: String },
        sport: { type: String },
        wins: { type: String },
        loses: { type: String },
		ties: { type: String },
		state: { type: String },
		fciac: { type: String }
	}).validator(),

	run({ school, sport, wins, loses, ties, state, fciac }) {
		// Inserts the object into the collection
		Teams.insert({
			school,
			sport,
			wins,
			loses,
			ties,
			state,
			fciac
		});
	}
});
