import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Lax.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    const player={
        firstNameL: tmpl.find('#firstNameL').value,
        lastNameL: tmpl.find('#lastNameL').value,
        positionL: tmpl.find('#positionL').value,
        goalsL: tmpl.find('#goalsL').value,
        sportL: tmpl.find('#sportL').value,
        assitsL: tmpl.find('#assitsL').value
    };

    tmpl.find('#firstNameL').value="";
    tmpl.find('#lastNameL').value="";
    tmpl.find('#positionL').value="";
    tmpl.find('#goalsL').value="";
    tmpl.find('#sportL').value="";
    tmpl.find('#assitsL').value="";

    Players.insert(player);
}
});
