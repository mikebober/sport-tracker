import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Hoc.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameH: tmpl.find('#firstNameH').value,
        lastNameH: tmpl.find('#lastNameH').value,
        sportH: tmpl.find('#sportH').value,
        goalsH: tmpl.find('#goalsH').value,
        positionH: tmpl.find('#positionH').value
    };

    tmpl.find('#firstNameH').value="";
    tmpl.find('#lastNameH').value="";
    tmpl.find('#goalsH').value="";
    tmpl.find('#positionH').value="";
    tmpl.find('#sportH').value="";

    Players.insert(player);
  }

});
