import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import moment from 'moment';
import { Messages } from './messages.js';

// This method takes content and a username as parameters and inserts them
// into the Messages collection
export const addMessage = new ValidatedMethod({
	name: 'message.add',

	// Validate the data that was passed by checking if they are the correct types
	validate: new SimpleSchema({
		content: { type: String },
		username: { type: String }
	}).validator(),

	run({ content, username }) {
		// Create an object with the data passed in, with a couple extra fields for
		// date and user. this.userId refers to the user._id of whoever made the method call
        const msg = {
            date: moment().format(),
            user: this.userId,
			username: username,
            content: content
        };

		// Inserts the object into the collection
		Messages.insert(msg);
	}
});
