import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Wrest.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameW: tmpl.find('#firstNameW').value,
        lastNameW: tmpl.find('#lastNameW').value,
        weightW: tmpl.find('#weightW').value,
        winsW: tmpl.find('#winsW').value,
        sportW: tmpl.find('#sportW').value
    };

    tmpl.find('#firstNameW').value="";
    tmpl.find('#lastNameW').value="";
    tmpl.find('#weightW').value="";
    tmpl.find('#winsW').value="";
    tmpl.find('#sportW').value="";

    Players.insert(player);
  }

});
