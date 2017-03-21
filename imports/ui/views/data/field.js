import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Field.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameFi: tmpl.find('#firstNameFi').value,
        lastNameFi: tmpl.find('#lastNameFi').value,
        sportFi: tmpl.find('#sportFi').value,
        grade: tmpl.find('#grade').value,
        height: tmpl.find('#height').value
    };

    tmpl.find('#firstNameFi').value="";
    tmpl.find('#lastNameFi').value="";
    tmpl.find('#grade').value="";
    tmpl.find('#height').value="";

    Players.insert(player);
  }

});
