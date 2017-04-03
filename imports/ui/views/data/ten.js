import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Ten.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameT: tmpl.find('#firstNameT').value,
        lastNameT: tmpl.find('#lastNameT').value,
        sportT: tmpl.find('#sportT').value,
        won: tmpl.find('#won').value
    };

    tmpl.find('#firstNameT').value="";
    tmpl.find('#lastNameT').value="";
    tmpl.find('#sportT').value="";
    tmpl.find('#won').value="";

    Players.insert(player);
  }

});
