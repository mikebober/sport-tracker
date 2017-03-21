import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Volley.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameV: tmpl.find('#firstNameV').value,
        lastNameV: tmpl.find('#lastNameV').value,
        positionV: tmpl.find('#positionV').value,
        gradeV: tmpl.find('#gradeV').value,
        sportV: tmpl.find('#sportV').value
    };

    tmpl.find('#firstNameV').value="";
    tmpl.find('#lastNameV').value="";
    tmpl.find('#positionV').value="";
    tmpl.find('#gradeV').value="";
    tmpl.find('#sportV').value="";

    Players.insert(player);
  }

});
