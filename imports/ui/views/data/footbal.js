import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Footbal.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameF: tmpl.find('#firstNameF').value,
        positionF: tmpl.find('#positionF').value,
        lastNameF: tmpl.find('#lastNameF').value,
        sportF: tmpl.find('#sportF').value,
        reciving: tmpl.find('#reciving').value,
        rush: tmpl.find('#rush').value,
        td: tmpl.find('#td').value,
        tackels: tmpl.find('#tackels').value,
        sacks: tmpl.find('#sacks').value
    };

    tmpl.find('#firstNameF').value="";
    tmpl.find('#lastNameF').value="";
    tmpl.find('#positionF').value="";
    tmpl.find('#sportF').value="";
    tmpl.find('#reciving').value="";
    tmpl.find('#rush').value="";
    tmpl.find('#td').value="";
    tmpl.find('#tackels').value="";
    tmpl.find('#sacks').value="";

    Players.insert(player);
  }

});
