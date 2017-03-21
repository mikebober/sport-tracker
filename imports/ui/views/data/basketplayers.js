import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Basketplayers.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    const player={
        firstNameB: tmpl.find('#firstNameB').value,
        lastNameB: tmpl.find('#lastNameB').value,
        pointsB: tmpl.find('#pointsB').value,
        positionB: tmpl.find('#positionB').value,
        sportB: tmpl.find('#sportB').value
    };

    tmpl.find('#firstNameB').value="";
    tmpl.find('#lastNameB').value="";
    tmpl.find('#pointsB').value="";
    tmpl.find('#positionB').value="";

    Players.insert(player);
}
});
