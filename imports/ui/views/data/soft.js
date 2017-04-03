import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Soft.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameSo: tmpl.find('#firstNameSo').value,
        lastNameSo: tmpl.find('#lastNameSo').value,
        sportSo: tmpl.find('#sportSo').value,
        battingS: tmpl.find('#battingS').value,
        runsS: tmpl.find('#runsS').value
    };

    tmpl.find('#firstNameSo').value="";
    tmpl.find('#lastNameSo').value="";
    tmpl.find('#battingS').value="";
    tmpl.find('#runsS').value="";
    tmpl.find('#sportSo').value="";

    Players.insert(player);
  }

});
