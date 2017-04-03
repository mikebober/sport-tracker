import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Base.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    const player={
        firstNameBa: tmpl.find('#firstNameBa').value,
        lastNameBa: tmpl.find('#lastNameBa').value,
        sportBa: tmpl.find('#sportBa').value,
        batting: tmpl.find('#batting').value,
        runs: tmpl.find('#runs').value
    };

    tmpl.find('#firstNameBa').value="";
    tmpl.find('#lastNameBa').value="";
    tmpl.find('#batting').value="";
    tmpl.find('#runs').value="";
    tmpl.find('#sportBa').value="";

    Players.insert(player);
}
});
