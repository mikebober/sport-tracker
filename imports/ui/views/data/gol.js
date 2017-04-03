import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Gol.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameGolf: tmpl.find('#firstNameGolf').value,
        lastNameGolf: tmpl.find('#lastNameGolf').value,
        sportGolf: tmpl.find('#sportGolf').value,
        avgdrive: tmpl.find('#avgdrive').value
    };

    tmpl.find('#firstNameGolf').value="";
    tmpl.find('#lastNameGolf').value="";
    tmpl.find('#sportGolf').value="";
    tmpl.find('#avgdrive').value="";

    Players.insert(player);
}
});
